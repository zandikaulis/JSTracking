webpackJsonp([46], {
    1e3: function(e, t) {},
    1001: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CommunityTosBan_TosBanCommunity"
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
                                value: "TOSBanCommunityInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "tosBanCommunity"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "community"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 146
            }
        };
        n.loc.source = {
            body: "mutation CommunityTosBan_TosBanCommunity($input: TOSBanCommunityInput!) {\n  tosBanCommunity(input: $input) {\n    community {\n      id\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1002: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SettingsCog_CommunityUserPermissions"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "community"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "owner"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "permissions"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "banning"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "editing"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "roles"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isSiteAdmin"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 282
            }
        };
        n.loc.source = {
            body: "query SettingsCog_CommunityUserPermissions($name: String!) {\n  community(name: $name) {\n    id\n    owner {\n      id\n    }\n    self {\n      permissions {\n        banning\n        editing\n      }\n    }\n  }\n  currentUser {\n    id\n    roles {\n      isStaff\n      isSiteAdmin\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1003: function(e, t) {},
    1019: function(e, t, n) {
        "use strict";
        var i = n(1),
            r = n(2),
            a = n(62),
            o = n(3),
            s = function() {
                return i.createElement(a.a, {
                    message: Object(r.d)("Sorry. Unless you’ve got a time machine, that content is unavailable.", "PageNotFound")
                }, i.createElement(o.U, {
                    margin: {
                        top: 2
                    }
                }, i.createElement(o.u, {
                    linkTo: "/directory",
                    "data-a-target": "browse-channels-button"
                }, Object(r.d)("Browse channels", "PageNotFound"))))
            };
        n.d(t, "a", function() {
            return s
        })
    },
    1038: function(e, t, n) {
        "use strict";
        var i = n(0),
            r = n(1),
            a = n(64),
            o = n(2),
            s = n(128),
            l = "DIRECT_ENTITLEMENT",
            c = n(3),
            u = (n(1295), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderUnavailableText = function() {
                        var e = t.props.options.isInGameContent ? Object(o.d)("This content is currently unavailable", "FuelBuyButton") : Object(o.d)("This game is currently unavailable", "FuelBuyButton");
                        return r.createElement(c._21, {
                            italic: !0,
                            "data-target": "fuel-buy-button-unavailable"
                        }, e)
                    }, t.renderBuyNowButton = function(e, n, i, a) {
                        void 0 === a && (a = c.x.Default);
                        var s = null;
                        if (n && n.length > 1) {
                            var l = Object(o.d)("Includes {crates} Twitch Crates!", {
                                crates: n.length
                            }, "FuelBuyButton");
                            s = r.createElement(c._21, {
                                className: "fuel-buy-button__crates",
                                "data-target": "fuel-buy-button-crates"
                            }, l)
                        }
                        var u = i ? "fuel-buy-button-content" : "fuel-buy-button";
                        return r.createElement(c.U, {
                            alignItems: c.c.Center
                        }, r.createElement(c.u, {
                            fullWidth: !0,
                            icon: n && n.length > 0 ? c._9.Crate : void 0,
                            purchase: e,
                            onClick: t.props.onClickBuyNow,
                            "data-target": u,
                            size: a
                        }, Object(o.d)("Buy Now", "FuelBuyButton")), s)
                    }, t.onClickClaimOffer = function() {
                        if (t.props.onClickClaimOffer) {
                            var e = t.props.options,
                                n = e.primeOffers,
                                i = e.gameID,
                                r = n && n.find(function(e) {
                                    return !!e.content && !!e.content.game && e.content.game.id === i && e.deliveryMethod === l
                                });
                            r && t.props.onClickClaimOffer(r.id)
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
                        n = e.primeOffers,
                        i = e.gameID,
                        u = e.countryCode,
                        d = e.externalAcquisition,
                        p = e.crates,
                        m = e.userHasPrime,
                        h = e.isInGameContent,
                        f = e.size,
                        b = n && n.find(function(e) {
                            return !!e.content && !!e.content.game && e.content.game.id === i && e.deliveryMethod === l
                        }),
                        g = u && Object(s.b)(u),
                        v = !b || !g;
                    if (t.isEntitled) return r.createElement(c._21, {
                        "data-target": "fuel-buy-button-purchased"
                    }, Object(o.d)("Purchased", "FuelBuyButton"));
                    if (0 === t.price.length && d && d.isExternal) return r.createElement("div", {
                        "data-target": "fuel-buy-button-external"
                    }, r.createElement(a, {
                        source: d.description,
                        renderers: {
                            Link: this.renderExternalAcquisitionLink
                        }
                    }));
                    if (!t.isForSale && v) return this.renderUnavailableText();
                    if (!b) return this.renderBuyNowButton(t.price, p, h, f);
                    var y = [],
                        S = r.createElement("div", {
                            className: "fuel-buy-button__prime-button",
                            key: "fuel-claim"
                        }, r.createElement(c.u, {
                            onClick: this.onClickClaimOffer
                        }, Object(o.d)("Claim Offer", "FuelBuyButton"))),
                        k = r.createElement(c._8, {
                            asset: c._9.Crown,
                            type: c._10.Prime,
                            width: 16,
                            height: 16,
                            key: "fuel-crown"
                        });
                    if (m) y = [k, S];
                    else {
                        var _ = b ? Object(o.d)("Free", "FuelBuyButton") : t.price;
                        y = [k, r.createElement(c._21, {
                            bold: !0,
                            className: "fuel-buy-button__prime-price",
                            "data-target": "fuel-buy-button-prime-price",
                            key: "fuel-price"
                        }, _), S]
                    }
                    return r.createElement(c.U, {
                        flexDirection: c.J.Row,
                        display: c.H.Flex,
                        alignItems: c.c.Center,
                        "data-target": "fuel-buy-button-prime"
                    }, y)
                }, t
            }(r.Component)),
            d = u;
        n.d(t, "a", function() {
            return d
        })
    },
    1057: function(e, t, n) {
        "use strict";

        function i(e) {
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
                l.n.tracking.track(c.SpadeEventType.FuelBuyButton, i)
            }
        }

        function r(e, t, n, r, o) {
            n = n || t && t.lastBroadcast && t.lastBroadcast.game;
            var s = n && n.product;
            if (n && s) {
                i({
                    user: t,
                    game: n,
                    product: s,
                    info: e,
                    location: r
                });
                var l = "";
                t && t.isCommerceRevShareEnabled && (l = "&br_id=" + t.id);
                a(e.purchaseURL + l, o)
            }
        }

        function a(e, t) {
            var n = window.open(e, "Twitch", "width=1024,height=600,scrollbars=yes");
            n && !Object(o.a)() && (n.focus(), Object(s.a)(n, function(e) {
                t(e)
            }))
        }
        var o = n(796),
            s = n(783),
            l = n(2),
            c = n(13);
        t.a = r
    },
    1058: function(e, t) {
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
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "id"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "asin"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "crateASINs"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "description"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
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
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "isEntitled"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "isFeatured"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "isForSale"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "price"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "purchaseURL"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "title"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 169
            }
        };
        n.loc.source = {
            body: "fragment productInfo on ProductInfo {\n  id\n  asin\n  crateASINs\n  description\n  imageURL(size: 256)\n  isEntitled\n  isFeatured\n  isForSale\n  price\n  purchaseURL\n  title\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1061: function(e, t) {},
    1237: function(e, t, n) {
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
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "id"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "description"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isExternal"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "developer"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "details"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "iconURL"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "featureDetails"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "genres"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
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
                        alias: null,
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
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "description"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isExternal"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "iconURL"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 501
            }
        };
        r.loc.source = {
            body: '#import "twilight/features/fuel/models/product-info.gql"\n#import "twilight/features/fuel/models/in-game-content.gql"\n\nfragment fuelProduct on GameProduct {\n  id\n  acquisition {\n    id\n    description\n    isExternal\n  }\n  developer\n  esrbRating {\n    id\n    details\n    iconURL\n  }\n  featureDetails\n  genres\n  inGameContent {\n    ...inGameContent\n  }\n  info {\n    ...productInfo\n  }\n  launchPlatform {\n    id\n    description\n    isExternal\n  }\n  supportedPlatforms {\n    id\n    name\n    iconURL\n  }\n}\n\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        r.definitions = r.definitions.concat(i(n(1058).definitions)), r.definitions = r.definitions.concat(i(n(1298).definitions)), e.exports = r
    },
    1295: function(e, t) {},
    1296: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = r.test(e.info.price),
                i = r.test(t.info.price);
            if (n && i) {
                var a = +e.info.price.replace("$", ""),
                    o = +t.info.price.replace("$", ""),
                    s = a - o;
                return 0 !== s ? s : e.info.title.localeCompare(t.info.title)
            }
            return n && !i ? -1 : i ? 1 : e.info.price.localeCompare(t.info.price)
        }
        t.a = i;
        var r = /^\$[\d]+.[\d]{2}$/
    },
    1297: function(e, t, n) {
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
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "id"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "name"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
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
                end: 135
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/fuel/models/fuel-product.gql"\n\nfragment fuelGame on Game {\n  id\n  name\n  product {\n    ...fuelProduct\n  }\n}\n',
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
        }(n(1237).definitions)), e.exports = i
    },
    1298: function(e, t, n) {
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
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "id"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "description"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
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
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "tags"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 160
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/fuel/models/product-info.gql"\n\nfragment inGameContent on InGameContent {\n  id\n  description\n  info {\n    ...productInfo\n  }\n  tags\n}\n',
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
        }(n(1058).definitions)), e.exports = i
    },
    1299: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "fuelPrimeOffer"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "PrimeOffer"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "id"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "deliveryMethod"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "content"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 118
            }
        };
        n.loc.source = {
            body: "\nfragment fuelPrimeOffer on PrimeOffer {\n  id\n  deliveryMethod\n  content {\n    game {\n      id\n      name\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1355: function(e, t, n) {
        "use strict";
        var i = n(0),
            r = n(1),
            a = n(896),
            o = n(5),
            s = n(883),
            l = function(e) {
                var t = e.video,
                    n = t.id,
                    o = t.lengthSeconds,
                    l = t.publishedAt,
                    c = t.previewThumbnailURL,
                    u = t.viewCount,
                    d = {
                        vodID: n,
                        disableTheatreButton: !0,
                        playerTypeOverride: e.playerTypeOverride
                    };
                return r.createElement(a.a, {
                    createdAt: l,
                    lengthSeconds: o,
                    type: a.b.Video,
                    thumbnailURL: c,
                    viewCount: u
                }, r.createElement(s.c, i.__assign({}, d)))
            },
            c = Object(o.c)("VideoEmbed")(l);
        n.d(t, !1, function() {
            return l
        }), n.d(t, "a", function() {
            return c
        })
    },
    1855: function(e, t) {
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "claimOffer"
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
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "hasEntitlement"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "claimData"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 153
            }
        };
        n.loc.source = {
            body: "mutation Fuel_ClaimPrimeOffer($input: ClaimPrimeOfferInput!) {\n  claimOffer(input: $input) {\n    self {\n      hasEntitlement\n      claimData\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1856: function(e, t) {},
    1857: function(e, t) {},
    1858: function(e, t) {},
    1859: function(e, t) {},
    1860: function(e, t) {
        var n = {
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isCommerceRevShareEnabled"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 143
            }
        };
        n.loc.source = {
            body: "query DirectoryGameDetails($login: String!, $id: ID!) {\n user(login: $login, id: $id) {\n   displayName\n   isCommerceRevShareEnabled\n   id\n }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1861: function(e, t, n) {
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
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
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "primeOffers"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "fuelPrimeOffer"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 414
            }
        };
        r.loc.source = {
            body: '#import "twilight/features/fuel/models/fuel-product-full.gql"\n#import "twilight/features/fuel/models/fuel-game.gql"\n#import "twilight/features/fuel/models/fuel-prime-offer.gql"\n\nquery DirectoryGameDetails($name: String!) {\n game(name: $name) {\n   product {\n     ...fuelProductFull\n   }\n   ...fuelGame\n }\n primeOffers {\n   ...fuelPrimeOffer\n }\n requestInfo {\n   countryCode\n }\n currentUser {\n   id\n   hasPrime\n }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        r.definitions = r.definitions.concat(i(n(1862).definitions)), r.definitions = r.definitions.concat(i(n(1297).definitions)), r.definitions = r.definitions.concat(i(n(1299).definitions)), e.exports = r
    },
    1862: function(e, t, n) {
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
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "publisher"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "websiteURL"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "eulaURL"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "supportURL"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "backgroundImageURL"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "boxArtURL"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "screenshotURLs"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "lengthSeconds"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "publishedAt"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "title"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "viewCount"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                        alias: null,
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
                        alias: null,
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
                end: 684
            }
        };
        r.loc.source = {
            body: '#import "twilight/features/fuel/models/fuel-product.gql"\n#import "twilight/features/fuel/models/product-language.gql"\n#import "twilight/features/fuel/models/system-requirement.gql"\n\nfragment fuelProductFull on GameProduct {\n  ...fuelProduct\n\n  publisher\n  websiteURL\n  eulaURL\n  supportURL\n  media {\n    id\n    backgroundImageURL\n    boxArtURL\n    screenshotURLs\n    videos {\n      id\n      lengthSeconds\n      previewThumbnailURL(width: 460, height: 260)\n      publishedAt\n      title\n      viewCount\n    }\n  }\n  minimumSystemRequirement {\n    ...systemRequirement\n  }\n  recommendedSystemRequirement {\n    ...systemRequirement\n  }\n  supportedLanguages {\n    ...productLangauge\n  }\n}\n',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        r.definitions = r.definitions.concat(i(n(1237).definitions)), r.definitions = r.definitions.concat(i(n(1863).definitions)), r.definitions = r.definitions.concat(i(n(1864).definitions)), e.exports = r
    },
    1863: function(e, t) {
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
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "language"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "hasInterface"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "hasAudio"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "hasSubtitles"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 100
            }
        };
        n.loc.source = {
            body: "fragment productLangauge on ProductLanguage {\n  language\n  hasInterface\n  hasAudio\n  hasSubtitles\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    1864: function(e, t) {
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
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "osVersion"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "processor"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "ram"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "videoCard"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "directXVersion"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "hardDriveSpace"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }, {
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "other"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: null
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 136
            }
        };
        n.loc.source = {
            body: "fragment systemRequirement on SystemRequirement {\n  osVersion\n  processor\n  ram\n  videoCard\n  directXVersion\n  hardDriveSpace\n  other\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    2036: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(Q.bindActionCreators)({
                closeModal: K.c
            }, e)
        }

        function r() {
            return {}
        }

        function a(e) {
            return Object(Q.bindActionCreators)({
                showImageViewerModal: function(e) {
                    var t = s.__rest(e, []);
                    return Object(K.d)(X, t)
                }
            }, e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o, s = n(0),
            l = n(20),
            c = n(1),
            u = n(2),
            d = n(62),
            p = n(1019),
            m = n(29),
            h = n(7),
            f = n(761),
            b = n(13),
            g = n(981),
            v = n(881),
            y = n(1296),
            S = n(5),
            k = n(795),
            _ = n(64),
            E = n(1057),
            C = n(1038),
            N = n(3),
            P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onBuyInGameContentNow = function() {
                        var e = t.props && t.props.referrer;
                        Object(E.a)(t.props.content.info, e, t.props.game, b.PageviewLocation.GameDetail, t.onPopupClose)
                    }, t.onPopupClose = function() {
                        t.props.refetchData && t.props.refetchData()
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.content,
                        t = e.description,
                        n = e.info,
                        i = e.tags,
                        r = n.description,
                        a = n.imageURL,
                        o = n.title,
                        s = i.join(", "),
                        l = {
                            info: n,
                            countryCode: this.props.countryCode,
                            crates: n.crateASINs,
                            gameID: this.props.game.id,
                            isInGameContent: !0,
                            userHasPrime: this.props.hasPrime
                        };
                    return c.createElement(N.G, {
                        cols: {
                            default: 6,
                            xs: 12,
                            sm: 6,
                            md: 6,
                            lg: 6
                        }
                    }, c.createElement(N.U, {
                        margin: {
                            bottom: 3
                        }
                    }, c.createElement(N.N, {
                        gutterSize: N.O.Default
                    }, c.createElement(N.G, {
                        cols: 4
                    }, c.createElement(N.j, {
                        ratio: N.k.Aspect1x1
                    }, c.createElement("img", {
                        src: a
                    }))), c.createElement(N.G, {
                        cols: 8
                    }, c.createElement(N._21, {
                        type: N._26.P,
                        fontSize: N.L.Size4,
                        title: o
                    }, o), c.createElement(N._21, {
                        type: N._26.P,
                        color: N.F.Alt2,
                        title: s
                    }, s), c.createElement(N.U, {
                        display: N.H.Flex,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexWrap: N.K.NoWrap,
                        padding: {
                            bottom: 1,
                            top: 2
                        }
                    }, c.createElement(C.a, {
                        onClickBuyNow: this.onBuyInGameContentNow,
                        options: l
                    })), c.createElement(N._36, null, c.createElement(_, {
                        source: r || t
                    }))))))
                }, t
            }(c.Component),
            T = Object(S.c)("FeaturedContent")(P),
            D = T,
            O = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.alt ? N.m.Alt : N.m.Base;
                    return c.createElement(N._17, {
                        background: e,
                        border: !0,
                        padding: {
                            left: 3,
                            right: 3
                        }
                    }, this.props.children)
                }, t
            }(c.Component),
            w = Object(S.c)("GameDetailsSection")(O),
            U = w,
            F = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return c.createElement(N.U, {
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(N._21, {
                        type: N._26.H3
                    }, this.props.title))
                }, t
            }(c.Component),
            I = Object(S.c)("GameDetailsTitle")(F),
            R = I,
            j = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.contentList;
                    if (0 === t.length) return null;
                    var n = t.map(function(t, n) {
                        return c.createElement(D, {
                            content: t,
                            countryCode: e.props.countryCode,
                            game: e.props.game,
                            hasPrime: e.props.hasPrime,
                            refetchData: e.props.refetchData,
                            key: n,
                            referrer: e.props.referrer
                        })
                    });
                    return c.createElement(U, {
                        alt: !0
                    }, c.createElement(R, {
                        title: Object(u.d)("Game Add-Ons", "FeaturedContentRow")
                    }), c.createElement(N.N, {
                        gutterSize: N.O.Large
                    }, n))
                }, t
            }(c.Component),
            x = Object(S.c)("FeaturedContentRow")(j),
            L = x,
            G = n(22),
            A = n(1855),
            M = (n(1856), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderSeparator = function() {
                        return c.createElement(N._17, {
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
                        n && Object(E.a)(n, e, t.props.game, b.PageviewLocation.GameDetail, t.onPopupClose)
                    }, t.onClaimOffer = function(e) {
                        t.props.claimOffer && t.props.claimOffer(Object(G.a)({
                            offerID: e
                        })).then(function(e) {
                            t.props.refetchData && t.props.refetchData()
                        })
                    }, t.onPopupClose = function() {
                        t.props.refetchData && t.props.refetchData()
                    }, t.renderNewWindowLink = function(e) {
                        return c.createElement("a", {
                            href: e.href,
                            target: "_blank"
                        }, e.children)
                    }, t.renderSharedRevenueLink = function(e) {
                        return c.createElement("a", {
                            href: "https://help.twitch.tv/customer/portal/articles/2771293-how-to-buy-games-on-twitch#partners",
                            "data-test-selector": "fuel-shared-revenue-link",
                            target: "_blank"
                        }, e)
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.game,
                        t = e ? e.product : void 0;
                    if (!e || !t) return c.createElement(U, {
                        alt: !0
                    }, c.createElement(N._17, {
                        className: "game-details-box",
                        padding: {
                            top: 2,
                            right: 1,
                            bottom: 2,
                            left: 1
                        },
                        flexDirection: N.J.Row,
                        display: N.H.Flex,
                        justifyContent: N.T.Between,
                        alignItems: N.c.Center
                    }, c.createElement(N.U, {
                        display: N.H.Flex,
                        flexDirection: N.J.Row,
                        alignItems: N.c.Center
                    }, c.createElement(N.U, null, c.createElement(N._1, {
                        width: 175,
                        height: 36
                    })), this.renderSeparator(), c.createElement(N.U, null, c.createElement(N._1, {
                        width: 22,
                        height: 30
                    })), c.createElement(N.U, null, c.createElement(N._1, {
                        width: 50,
                        height: 15
                    }))), c.createElement(N.U, null, c.createElement(N._1, {
                        width: 290,
                        height: 20
                    }))));
                    var n = this.props.countryCode,
                        i = !(!this.props.currentUser || !this.props.currentUser.hasPrime),
                        r = {
                            info: t.info,
                            gameID: e.id,
                            crates: t.info.crateASINs,
                            size: N.x.Large,
                            externalAcquisition: t.acquisition,
                            countryCode: n,
                            userHasPrime: i
                        },
                        a = t.supportedPlatforms.map(function(e) {
                            return c.createElement("img", {
                                "data-test-selector": "game-details-box-platform-" + e.name,
                                alt: e.name,
                                src: e.iconURL,
                                key: "platform:" + e.name
                            })
                        }),
                        o = null;
                    if (this.props.referrer && this.props.referrer.isCommerceRevShareEnabled) {
                        var s = Object(u.d)("Purchase revenue <x:link>will be shared</x:link> with {channel}", {
                            channel: c.createElement(N._21, {
                                bold: !0,
                                type: N._26.Span
                            }, this.props.referrer.displayName),
                            "x:link": this.renderSharedRevenueLink
                        }, "GameDetailsBox");
                        o = c.createElement(N._21, {
                            "data-test-selector": "fuel-shared-revenue"
                        }, s)
                    }
                    return c.createElement(U, {
                        alt: !0
                    }, c.createElement(N._17, {
                        className: "game-details-box",
                        padding: {
                            top: 2,
                            right: 1,
                            bottom: 2,
                            left: 1
                        },
                        flexDirection: N.J.Row,
                        display: N.H.Flex,
                        justifyContent: N.T.Between,
                        alignItems: N.c.Center
                    }, c.createElement(N.U, {
                        display: N.H.Flex,
                        flexDirection: N.J.Row,
                        alignItems: N.c.Center
                    }, c.createElement(C.a, {
                        onClickBuyNow: this.onBuyNowClick,
                        onClickClaimOffer: this.onClaimOffer,
                        options: r,
                        "data-test-selector": "game-details-box-fuel-buy-button"
                    }), this.renderSeparator(), c.createElement("img", {
                        alt: Object(u.d)("Maturity Rating", "GameDetailsBox"),
                        src: t.esrbRating.iconURL,
                        "data-test-selector": "game-details-box-rating",
                        className: "game-details-box__rating"
                    }), a, c.createElement(_, {
                        "data-test-selector": "game-details-box-launch-platform",
                        source: t.launchPlatform.description,
                        renderers: {
                            Link: this.renderNewWindowLink
                        }
                    })), o))
                }, t
            }(c.Component)),
            B = Object(S.c)("GameDetailBox")(M),
            H = Object(h.a)(A, {
                name: "claimOffer"
            })(B),
            V = H,
            q = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.game || !this.props.game.product || !this.props.game.product.info) return null;
                    var e = this.props.game.product,
                        t = e.info,
                        n = e.featureDetails,
                        i = e.supportedLanguages,
                        r = e.minimumSystemRequirement,
                        a = e.recommendedSystemRequirement,
                        o = n.map(function(e, t) {
                            return c.createElement("li", {
                                key: t
                            }, c.createElement(_, {
                                source: e
                            }))
                        }),
                        s = i.map(function(e, t) {
                            return [c.createElement(N.G, {
                                key: t + "lang",
                                cols: 3
                            }, c.createElement(N.U, null, e.language)), c.createElement(N.G, {
                                key: t + "int",
                                cols: 3
                            }, c.createElement(N._17, {
                                textAlign: N._22.Center
                            }, e.hasInterface && c.createElement(N._8, {
                                asset: N._9.Check,
                                type: N._10.Success
                            }))), c.createElement(N.G, {
                                key: t + "audio",
                                cols: 3
                            }, c.createElement(N._17, {
                                textAlign: N._22.Center
                            }, e.hasAudio && c.createElement(N._8, {
                                asset: N._9.Check,
                                type: N._10.Success
                            }))), c.createElement(N.G, {
                                key: t + "subs",
                                cols: 3
                            }, c.createElement(N._17, {
                                textAlign: N._22.Center
                            }, e.hasSubtitles && c.createElement(N._8, {
                                asset: N._9.Check,
                                type: N._10.Success
                            }))), c.createElement(N.G, {
                                key: t + "hr",
                                cols: 12
                            }, c.createElement(N._17, {
                                margin: {
                                    top: .5,
                                    bottom: .5
                                },
                                borderBottom: !0,
                                alignContent: N.b.Stretch
                            }))]
                        }),
                        l = this.renderSystemRequirements(r),
                        d = this.renderSystemRequirements(a);
                    return c.createElement(U, null, c.createElement(N.N, {
                        gutterSize: N.O.Large
                    }, c.createElement(N.G, {
                        cols: {
                            default: 6,
                            xs: 12,
                            sm: 6
                        }
                    }, c.createElement(N.U, {
                        margin: {
                            top: 4
                        }
                    }, c.createElement(R, {
                        title: Object(u.d)("Description", "DirectoryGameDetailsPage")
                    }), c.createElement(N._36, null, c.createElement(_, {
                        source: t.description
                    }))), c.createElement(N.U, {
                        margin: {
                            top: 4
                        }
                    }, c.createElement(R, {
                        title: Object(u.d)("Features", "DirectoryGameDetailsPage")
                    }), c.createElement(N._36, null, c.createElement("ul", null, o))), c.createElement(N._17, {
                        margin: {
                            top: 4
                        },
                        fontSize: N.L.Size6
                    }, c.createElement(R, {
                        title: Object(u.d)("Information", "DirectoryGameDetailsPage")
                    }), this.renderRow(Object(u.d)("Title: ", "DirectoryGameDetailsPage"), t.title), this.renderRow(Object(u.d)("Developer: ", "DirectoryGameDetailsPage"), e.developer), this.renderRow(Object(u.d)("Publisher: ", "DirectoryGameDetailsPage"), e.publisher), this.renderRowLink(Object(u.d)("More Info: ", "DirectoryGameDetailsPage"), Object(u.d)("Website", "DirectoryGameDetailsPage"), e.websiteURL), this.renderRowLink(Object(u.d)("License Agreement: ", "DirectoryGameDetailsPage"), Object(u.d)("Check out the EULA", "DirectoryGameDetailsPage"), e.eulaURL), this.renderRowLink(Object(u.d)("Need Help? ", "DirectoryGameDetailsPage"), Object(u.d)("Contact Support", "DirectoryGameDetailsPage"), e.supportURL))), c.createElement(N.G, {
                        cols: {
                            default: 6,
                            xs: 12,
                            sm: 6
                        }
                    }, c.createElement(N.U, {
                        margin: {
                            top: 4
                        }
                    }, c.createElement(R, {
                        title: Object(u.d)("Hardware Requirements", "DirectoryGameDetailsPage")
                    }), c.createElement(N.U, {
                        padding: {
                            bottom: 1
                        }
                    }, c.createElement(N._21, {
                        type: N._26.H4,
                        bold: !0
                    }, Object(u.d)("Minimum", "DirectoryGameDetailsPage"))), l, c.createElement(N.U, {
                        padding: {
                            top: 1,
                            bottom: 1
                        }
                    }, c.createElement(N._21, {
                        type: N._26.H4,
                        bold: !0
                    }, Object(u.d)("Recommended", "DirectoryGameDetailsPage"))), d), c.createElement(N.U, {
                        margin: {
                            top: 4
                        }
                    }, c.createElement(R, {
                        title: Object(u.d)("Language Support", "DirectoryGameDetailsPage")
                    }), c.createElement(N.N, null, c.createElement(N.G, {
                        cols: 3
                    }, c.createElement(N._17, {
                        color: N.F.Alt2
                    }, Object(u.d)("Language", "DirectoryGameDetailsPage"))), c.createElement(N.G, {
                        cols: 3
                    }, c.createElement(N._17, {
                        color: N.F.Alt2,
                        textAlign: N._22.Center
                    }, Object(u.d)("Audio", "DirectoryGameDetailsPage"))), c.createElement(N.G, {
                        cols: 3
                    }, c.createElement(N._17, {
                        color: N.F.Alt2,
                        textAlign: N._22.Center
                    }, Object(u.d)("Interface", "DirectoryGameDetailsPage"))), c.createElement(N.G, {
                        cols: 3
                    }, c.createElement(N._17, {
                        color: N.F.Alt2,
                        textAlign: N._22.Center
                    }, Object(u.d)("Subtitles", "DirectoryGameDetailsPage"))), c.createElement(N.G, {
                        cols: 12
                    }, c.createElement(N._17, {
                        borderBottom: !0,
                        margin: {
                            top: .5,
                            bottom: .5
                        }
                    })), s)))))
                }, t.prototype.renderSystemRequirements = function(e) {
                    return c.createElement(N.U, null, this.renderRow(Object(u.d)("OS:", "DirectoryGameDetailsPage"), e.osVersion), this.renderRow(Object(u.d)("Processor:", "DirectoryGameDetailsPage"), e.processor), this.renderRow(Object(u.d)("Memory:", "DirectoryGameDetailsPage"), e.ram), this.renderRow(Object(u.d)("Graphics Card:", "DirectoryGameDetailsPage"), e.videoCard), this.renderRow(Object(u.d)("DirectX:", "DirectoryGameDetailsPage"), e.directXVersion), this.renderRow(Object(u.d)("Hard Drive Space:", "DirectoryGameDetailsPage"), e.hardDriveSpace), this.renderRow(Object(u.d)("Other:", "DirectoryGameDetailsPage"), e.other))
                }, t.prototype.renderRow = function(e, t) {
                    return t ? c.createElement(N.U, {
                        display: N.H.Flex,
                        flexDirection: N.J.Row,
                        flexWrap: N.K.NoWrap
                    }, c.createElement(N._17, {
                        color: N.F.Alt2,
                        padding: {
                            right: 1
                        },
                        display: N.H.Flex,
                        flexShrink: 0
                    }, e), c.createElement(N.U, {
                        display: N.H.Flex,
                        flexGrow: 1
                    }, t)) : null
                }, t.prototype.renderRowLink = function(e, t, n) {
                    return this.renderRow(e, c.createElement("a", {
                        href: n,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, t))
                }, t
            }(c.Component),
            W = Object(S.c)("GameInfoSection")(q),
            z = W,
            $ = n(8),
            Q = n(10),
            K = n(49),
            Y = n(121),
            J = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return c.createElement(N._17, {
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, c.createElement("img", {
                        src: this.props.screenshotURL
                    }), c.createElement(Y.a, {
                        closeOnBackdropClick: !0,
                        closeOnPageNavigation: !0
                    }))
                }, t
            }(c.Component),
            X = Object(Q.compose)(Object($.a)(null, i))(J),
            Z = n(1355),
            ee = n(4);
        n(1857);
        ! function(e) {
            e.Previous = "previous", e.Next = "next"
        }(o || (o = {}));
        var te, ne = (te = {}, te[o.Previous] = N._9.AngleLeft, te[o.Next] = N._9.AngleRight, te),
            ie = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        currentElementIndex: 0,
                        childrenRendered: !1
                    }, t.moveCarouselForward = function() {
                        if (!t.isForwardButtonDisabled() && t.props.items) {
                            var e = t.getNumberOfVisibleElements();
                            t.state.currentElementIndex + 2 * e > t.props.items.length ? t.setState({
                                currentElementIndex: t.props.items.length - e
                            }) : t.setState({
                                currentElementIndex: t.state.currentElementIndex + e
                            })
                        }
                    }, t.moveCarouselBackward = function() {
                        if (!t.isBackButtonDisabled()) {
                            var e = t.getNumberOfVisibleElements();
                            t.setState({
                                currentElementIndex: Math.max(t.state.currentElementIndex - e, 0)
                            })
                        }
                    }, t.isForwardButtonDisabled = function() {
                        return !!t.carouselContainerRef && (!t.props.items || t.getLastVisibleIndex() >= t.props.items.length)
                    }, t.isBackButtonDisabled = function() {
                        return 0 === t.state.currentElementIndex
                    }, t.getLastVisibleIndex = function() {
                        return t.state.currentElementIndex + t.getNumberOfVisibleElements()
                    }, t.getNumberOfVisibleElements = function() {
                        var e = t.carouselContainerRef.getBoundingClientRect().left,
                            n = t.carouselContainerRef.getBoundingClientRect().right,
                            i = n - e;
                        return Math.floor(i / t.getChildWidth())
                    }, t.refHandler = function(e) {
                        return t.carouselContainerRef = e
                    }, t.getChildWidth = function() {
                        if (!t.carouselContainerRef) return 0;
                        var e = t.carouselContainerRef.querySelector("[data-js-selector=carousel-content]");
                        return e && e.children.length ? e.children[0].getBoundingClientRect().width : 0
                    }, t.pixelOffset = function() {
                        return t.getChildWidth() * t.state.currentElementIndex * -1
                    }, t.transformString = function() {
                        return "translate3d(" + t.pixelOffset() + "px, 0px, 0px)"
                    }, t.renderNavButton = function(e, t, n) {
                        var i = (a = {}, a[o.Previous] = Object(u.d)("previous", "MediaCarouselNavButton"), a[o.Next] = Object(u.d)("next", "MediaCarouselNavButton"), a),
                            r = ee("media-carousel__button", {
                                "media-carousel__button--previous": e === o.Previous,
                                "media-carousel__button--next": e === o.Next,
                                "media-carousel__button--disabled": t
                            });
                        return c.createElement(N.U, {
                            className: r,
                            position: N._2.Relative,
                            display: N.H.Flex,
                            alignItems: N.c.Stretch
                        }, c.createElement(N.v, {
                            "data-test-selector": e + "-button",
                            onClick: n,
                            disabled: t,
                            ariaLabel: i[e],
                            icon: ne[e],
                            size: N.x.Large
                        }));
                        var a
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.state.childrenRendered || null === this.props.items || this.setState({
                        childrenRendered: !0
                    })
                }, t.prototype.render = function() {
                    return c.createElement(N.P, s.__assign({}, this.props, {
                        margin: {
                            bottom: 3,
                            top: 1
                        },
                        position: N._2.Relative
                    }), c.createElement("div", {
                        className: "media-carousel",
                        ref: this.refHandler
                    }, c.createElement(N.U, {
                        className: "media-carousel__child-container",
                        overflow: N.Y.Hidden,
                        position: N._2.Relative,
                        fullWidth: !0,
                        "data-test-selector": "child-container"
                    }, c.createElement("div", {
                        className: "media-carousel__body",
                        style: {
                            transform: this.transformString()
                        },
                        "data-test-selector": "carousel-body"
                    }, c.createElement(N.U, {
                        className: "media-carousel__content",
                        display: N.H.Flex,
                        flexWrap: N.K.NoWrap,
                        flexDirection: N.J.Row,
                        "data-js-selector": "carousel-content"
                    }, this.props.items))), c.createElement(N.U, {
                        className: "media-carousel__nav",
                        display: N.H.Flex,
                        alignItems: N.c.Center,
                        position: N._2.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0
                    }, this.renderNavButton(o.Previous, !this.state.childrenRendered || this.isBackButtonDisabled(), this.moveCarouselBackward)), c.createElement(N.U, {
                        className: "media-carousel__nav",
                        display: N.H.Flex,
                        alignItems: N.c.Center,
                        position: N._2.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        fullHeight: !0
                    }, this.renderNavButton(o.Next, !this.state.childrenRendered || this.isForwardButtonDisabled(), this.moveCarouselForward))))
                }, t = s.__decorate([Object(S.c)("MediaCarousel", {
                    autoReportInteractive: !0
                })], t)
            }(c.Component),
            re = ie,
            ae = (n(1858), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderItems = function() {
                        if (!t.props.videos && !t.props.screenshotURLs) return [0, 1, 2, 3].map(function(e) {
                            return c.createElement(N.U, {
                                key: "placeholder-" + e,
                                padding: {
                                    right: 2
                                }
                            }, c.createElement(N._1, {
                                width: 460,
                                height: 260
                            }))
                        });
                        var e = (t.props.videos || []).map(function(e) {
                                return c.createElement(N.U, {
                                    className: "game-media__video",
                                    padding: {
                                        right: 2
                                    },
                                    key: e.id
                                }, c.createElement(Z.a, {
                                    video: e
                                }))
                            }),
                            n = (t.props.screenshotURLs || []).map(function(e) {
                                return c.createElement(N.U, {
                                    className: "game-media__image",
                                    padding: {
                                        right: 2
                                    },
                                    key: e
                                }, c.createElement(N.S, {
                                    onClick: t.handleOpenModal,
                                    "data-full": e,
                                    ariaLabel: Object(u.d)("Screenshot", "DirectoryGameDetailsGameMedia")
                                }, c.createElement(N.j, {
                                    ratio: N.k.Aspect16x9
                                }, c.createElement("img", {
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
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return c.createElement(U, null, c.createElement(R, {
                        title: Object(u.d)("Videos and Screenshots", "DirectoryGameDetailsPage")
                    }), c.createElement(re, {
                        items: this.renderItems()
                    }))
                }, t = s.__decorate([Object(S.c)("GameMedia")], t)
            }(c.Component)),
            oe = ae,
            se = Object($.a)(r, a)(oe),
            le = (n(1859), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onBuyInGameContentNow = function() {
                        var e = t.props && t.props.referrer;
                        Object(E.a)(t.props.content.info, e, t.props.game, b.PageviewLocation.GameDetail, t.onPopupClose)
                    }, t.onPopupClose = function() {
                        t.props.refetchData && t.props.refetchData()
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e, t = this.props.content,
                        n = t.info,
                        i = t.tags,
                        r = n.crateASINs,
                        a = n.imageURL,
                        o = n.price,
                        s = n.title,
                        l = i.join(", "),
                        d = {
                            info: n,
                            countryCode: this.props.countryCode,
                            crates: n.crateASINs,
                            gameID: this.props.game.id,
                            isInGameContent: !0,
                            userHasPrime: this.props.hasPrime
                        },
                        p = c.createElement(C.a, {
                            onClickBuyNow: this.onBuyInGameContentNow,
                            options: d
                        });
                    if (r.length > 1) {
                        var m = Object(u.d)("{numCrates} Twitch Crates", {
                            numCrates: r.length
                        }, "InGameContentCrateReward");
                        e = c.createElement(N._17, {
                            className: "in-game-content__crates",
                            attachBottom: !0,
                            padding: {
                                left: 1,
                                right: 1
                            },
                            position: N._2.Absolute,
                            textAlign: N._22.Right
                        }, m)
                    }
                    return c.createElement(N.U, {
                        margin: {
                            bottom: 3
                        }
                    }, c.createElement(N._17, {
                        className: "in-game-content",
                        border: !0,
                        fullHeight: !0,
                        position: N._2.Relative
                    }, c.createElement(N.j, {
                        ratio: N.k.Aspect1x1
                    }, c.createElement("img", {
                        src: a
                    })), c.createElement(N._17, {
                        background: N.m.Base,
                        padding: 1
                    }, c.createElement(N.U, {
                        className: "in-game-content__info-header"
                    }, c.createElement(N._21, {
                        type: N._26.P,
                        fontSize: N.L.Size5,
                        bold: !0,
                        title: s
                    }, s), c.createElement(N._21, {
                        type: N._26.P,
                        color: N.F.Alt2,
                        title: l
                    }, l)), c.createElement(N.U, {
                        className: "in-game-content__price",
                        position: N._2.Relative
                    }, c.createElement("p", {
                        title: o
                    }, o), e), c.createElement(N.U, {
                        className: "in-game-content__buy-button",
                        position: N._2.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        margin: {
                            left: 1,
                            bottom: 1,
                            right: 1
                        }
                    }, p))))
                }, t
            }(c.Component)),
            ce = Object(S.c)("InGameContent")(le),
            ue = ce,
            de = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props.contentList;
                    if (0 === t.length) return null;
                    var n = t.map(function(t, n) {
                        return c.createElement(ue, {
                            content: t,
                            countryCode: e.props.countryCode,
                            game: e.props.game,
                            hasPrime: e.props.hasPrime,
                            refetchData: e.props.refetchData,
                            key: n,
                            referrer: e.props.referrer
                        })
                    });
                    return c.createElement(U, {
                        alt: !0
                    }, c.createElement(R, {
                        title: Object(u.d)("In-Game Content", "FeaturedContentRow")
                    }), c.createElement(N._33, {
                        childWidth: N._34.Medium,
                        gutterSize: N._35.Small,
                        noGrow: !0
                    }, n))
                }, t
            }(c.Component),
            pe = Object(S.c)("InGameContentRow")(de),
            me = pe,
            he = n(1860),
            fe = n(1861),
            be = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        sortedInGameContent: []
                    }, t.refetchData = function() {
                        t.props.data && t.props.data.refetch && t.props.data.refetch()
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(), u.n.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data && e.data.game,
                        n = t && t.product;
                    if (n) {
                        var i = n.inGameContent.slice().sort(y.a);
                        this.setState({
                            sortedInGameContent: i
                        })
                    }
                }, t.prototype.render = function() {
                    if (!this.props.data.loading) {
                        if (this.props.data.error) return c.createElement(d.a, {
                            message: Object(u.d)("Error loading data.", "DirectoryGameDetailsPage")
                        });
                        if (!this.props.data.game || !this.props.data.game.product || !this.props.data.game.product.id) return c.createElement(p.a, null)
                    }
                    var e = null,
                        t = null;
                    this.props.data.game && this.props.data.game.product && (e = this.props.data.game.product.media.screenshotURLs, t = this.props.data.game.product.media.videos);
                    var n = this.props.data,
                        i = n.currentUser,
                        r = n.game,
                        a = i && i.hasPrime,
                        o = this.props.referrerData && this.props.referrerData.user,
                        s = "";
                    this.props.data.requestInfo && (s = this.props.data.requestInfo.countryCode);
                    var l = [],
                        h = [];
                    return this.state.sortedInGameContent.forEach(function(e) {
                        e.info.isFeatured ? l.push(e) : h.push(e)
                    }), c.createElement(m.b, {
                        suppressScrollX: !0
                    }, c.createElement(N.U, null, c.createElement(g.a, {
                        directoryName: decodeURIComponent(this.props.match.params.encodedCommunityName),
                        directoryType: k.a.Games,
                        activeTab: v.a.DirectoryDetailsPage,
                        showGameDetails: !0
                    }), c.createElement(V, {
                        game: this.props.data.game,
                        referrer: o,
                        countryCode: s,
                        currentUser: this.props.data.currentUser,
                        refetchData: this.refetchData
                    }), c.createElement(se, {
                        screenshotURLs: e,
                        videos: t
                    }), c.createElement(L, {
                        contentList: l,
                        countryCode: s,
                        game: r,
                        hasPrime: a,
                        refetchData: this.refetchData,
                        referrer: o
                    }), c.createElement(me, {
                        contentList: h,
                        countryCode: s,
                        game: r,
                        hasPrime: a,
                        refetchData: this.refetchData,
                        referrer: o
                    }), c.createElement(z, {
                        game: this.props.data.game
                    })))
                }, t
            }(c.Component),
            ge = Object(S.c)("DirectoryGameDetails")(be),
            ve = Object(h.a)(fe, {
                options: function(e) {
                    return {
                        variables: {
                            name: decodeURIComponent(e.match.params.encodedCommunityName)
                        }
                    }
                }
            })(ge),
            ye = Object(h.a)(he, {
                name: "referrerData",
                skip: function(e) {
                    var t = l.parse(e.location.search),
                        n = t.br_name,
                        i = t.br_id;
                    return !(n || i)
                },
                options: function(e) {
                    var t = l.parse(e.location.search),
                        n = t.br_name,
                        i = t.br_id;
                    return {
                        variables: {
                            login: n || null,
                            id: i || null
                        }
                    }
                }
            })(ve),
            Se = Object(f.a)({
                location: b.PageviewLocation.GameDetail
            })(ye),
            ke = Se;
        n.d(t, "DirectoryGameDetailsPage", function() {
            return ke
        })
    },
    757: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var i = n(0),
            r = n(2),
            a = n(18),
            o = function() {
                function e() {}
                return e.get = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        var r, a;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), r = t.headers ? t.headers["Content-Type"] : void 0, t.body = this.serialize(t.body, r), [4, this._fetch(e, t)];
                                case 1:
                                    return a = i.sent(), [4, this.constructLegacyAPIResponse(a)];
                                case 2:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, r.n.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n, r;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    t = {
                                        status: e.status
                                    }, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, e.json()];
                                case 2:
                                    return n = i.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                case 3:
                                    return r = i.sent(), t.requestError = r, [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e._fetch = function(e, t) {
                    return void 0 === t && (t = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, fetch(this.getAPIURL(e).toString(), t)];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, e.constructOptions = function(e, t) {
                    return e = Object.assign({}, e, {
                        headers: i.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                    })
                }, e.serialize = function(e, t) {
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : e
                }, e.getDefaultHeaders = function(e, t) {
                    var n = r.n.store.getState(),
                        i = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": r.n.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                    var o = Object(a.c)(n);
                    return o && (i.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (i["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        i[e] && delete i[e]
                    }), i
                }, e
            }()
    },
    759: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.ChannelFeedComment = "CHANNEL_FEED_COMMENT_REPORT", e.ChannelFeedPost = "CHANNEL_FEED_POST_REPORT", e.Chat = "CHAT_REPORT", e.Clip = "CLIP_REPORT", e.Collection = "COLLECTION_REPORT", e.Community = "COMMUNITY_REPORT", e.Event = "EVENT_REPORT", e.Extension = "EXTENSION_REPORT", e.LiveUp = "LIVE_UP_REPORT", e.Raid = "RAID_REPORT", e.StreamUp = "STREAM_UP_REPORT", e.User = "USER_REPORT", e.VideoChatMessage = "VOD_COMMENT_REPORT", e.Vod = "VOD_REPORT"
        }(i || (i = {}))
    },
    761: function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                var n = function(n) {
                    function i(t) {
                        var i = n.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0, l.n.adBlockSentinel.pageTransition();
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
        var r = n(0),
            a = n(20),
            o = n(1),
            s = n(11),
            l = n(2);
        n.d(t, "a", function() {
            return i
        })
    },
    762: function(e, t, n) {
        "use strict";
        var i = n(0),
            r = n(4),
            a = n(1),
            o = n(10),
            s = n(2),
            l = n(7),
            c = n(5),
            u = n(768),
            d = n(3),
            p = n(786),
            m = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null,
                        t = Object(s.d)("Select One...", "ReportUserModal");
                    return e = this.props.data.loading ? [a.createElement("option", {
                        key: "Loading"
                    }, Object(s.d)("Loading...", "ReportReasonsSelect"))] : Object(u.b)(this.props.data.reportReasons).map(function(e) {
                        return a.createElement("option", {
                            key: e.canonical,
                            value: e.canonical
                        }, e.localized)
                    }), a.createElement(d.U, {
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(d.M, {
                        id: "reporting-modal__select",
                        label: Object(s.d)("Select Reason (required)", "ReportUserModal")
                    }, a.createElement(d._14, {
                        id: "reporting-modal__select",
                        "data-test-selector": "reporting-modal.select",
                        disabled: this.props.data.loading || !!this.props.data.error,
                        onChange: this.handleChange,
                        defaultValue: t
                    }, a.createElement("option", {
                        disabled: !0,
                        key: "default"
                    }, t), e)))
                }, t = i.__decorate([Object(c.c)("ReportReasonSelect")], t)
            }(a.Component),
            h = Object(l.a)(p, {
                options: function(e) {
                    return {
                        variables: {
                            content: e.reportContentType
                        }
                    }
                }
            })(m),
            f = (n(787), n(788));
        n.d(t, "a", function() {
            return g
        }), n.d(t, "b", function() {
            return b
        }), n.d(t, "c", function() {
            return y
        });
        var b, g = "community_rules_violation";
        ! function(e) {
            e[e.Unsubmitted = 0] = "Unsubmitted", e[e.Success = 1] = "Success", e[e.FormError = 2] = "FormError", e[e.MutationError = 3] = "MutationError"
        }(b || (b = {}));
        var v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        community: null,
                        description: "",
                        reason: null,
                        isCommunityReason: !1,
                        selectedCommunityID: null,
                        selectedCommunityName: null
                    }, t.headerMessage = Object(s.d)("Tell us your concern about this content so that we can review it to determine whether there has been a violation of the {tosLink}. {br} (Abuse of this feature is a violation of the terms of service)", {
                        br: a.createElement("br", null),
                        tosLink: a.createElement("a", {
                            href: "https://www.twitch.tv/p/terms-of-service",
                            target: "_blank"
                        }, Object(s.d)("terms of service", "ReportUser"))
                    }, "ReportUser"), t.selectCommunity = function(e) {
                        t.setState({
                            selectedCommunityID: e.target.value,
                            selectedCommunityName: e.target.name
                        })
                    }, t.handleSubmit = function(e) {
                        e.preventDefault(), t.state.reason && t.state.description.length > 0 ? t.props.onSubmit(t.state.reason || "", t.state.description, t.state.selectedCommunityID, t.state.selectedCommunityName) : t.props.onError(b.FormError)
                    }, t.handleTextAreaChange = function(e) {
                        t.setState({
                            description: e.target.value
                        })
                    }, t.handleReasonChange = function(e) {
                        if (!t.props.data || t.props.data.loading || t.props.data.error || !t.props.data.user) return null;
                        var n = t.props.data.user.directories.nodes.filter(function(e) {
                            return "COMMUNITY" === e.directoryType
                        });
                        n.length && e === g ? t.setState({
                            reason: e,
                            selectedCommunityID: n[0].id,
                            selectedCommunityName: n[0].name,
                            isCommunityReason: !0
                        }) : t.setState({
                            reason: e,
                            isCommunityReason: !1
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(d.U, {
                        display: d.H.Flex,
                        flexDirection: d.J.Column,
                        alignItems: d.c.Center,
                        justifyContent: d.T.Center
                    }, this.renderStatusMessage(), this.renderBody())
                }, t.prototype.renderBody = function() {
                    return this.props.submitStatus === b.Success ? a.createElement("div", null, a.createElement(d.u, {
                        onClick: this.props.onClose
                    }, a.createElement(d.U, {
                        padding: {
                            x: 2
                        }
                    }, Object(s.d)("Close", "ReportUser")))) : a.createElement("div", null, a.createElement(d.U, {
                        "data-test-selector": "reporting.title",
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(d._21, {
                        type: d._26.H4
                    }, this.props.title), a.createElement(d._17, {
                        color: d.F.Alt2,
                        margin: {
                            top: 1
                        }
                    }, this.headerMessage)), a.createElement("form", null, a.createElement(d._17, {
                        borderTop: !0,
                        borderBottom: !0,
                        margin: {
                            y: 2
                        },
                        padding: {
                            y: 2
                        }
                    }, a.createElement(h, {
                        reportContentType: this.props.reportContentType,
                        onChange: this.handleReasonChange
                    }), this.renderCommunitiesSelector(), a.createElement(d.M, {
                        id: "reporting__text-area",
                        label: Object(s.d)("Description (required)", "ReportUser")
                    }, a.createElement(d._23, {
                        defaultValue: this.props.defaultDescription,
                        onChange: this.handleTextAreaChange
                    }))), a.createElement(d._17, {
                        display: d.H.Flex,
                        justifyContent: d.T.Center
                    }, a.createElement(d.u, {
                        onClick: this.handleSubmit
                    }, a.createElement(d.U, {
                        padding: {
                            x: 2
                        }
                    }, Object(s.d)("Send", "ReportUser"))))))
                }, t.prototype.renderCommunitiesSelector = function() {
                    if (!this.props.data || this.props.data.loading || this.props.data.error || !this.props.data.user) return null;
                    if (this.state.isCommunityReason) {
                        var e = this.props.data.user.directories.nodes.filter(function(e) {
                                return "COMMUNITY" === e.directoryType
                            }),
                            t = e.map(function(e) {
                                return a.createElement("option", {
                                    key: e.id,
                                    value: e.id,
                                    name: e.name
                                }, e.displayName)
                            });
                        return a.createElement(d.U, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(d.M, {
                            id: "reporting__select-community",
                            label: Object(s.d)("Community", "ReportUser")
                        }, a.createElement(d._14, {
                            id: "reporting__select-community",
                            "data-test-selector": "reporting.select-community",
                            disabled: this.props.data.loading || !!this.props.data.error,
                            onChange: this.selectCommunity
                        }, t)))
                    }
                }, t.prototype.renderStatusMessage = function() {
                    var e = null;
                    switch (this.props.submitStatus) {
                        case b.FormError:
                            e = Object(s.d)("Reason and Description are required.", "ReportUser");
                            break;
                        case b.MutationError:
                            e = Object(s.d)("Sorry, a network error occurred when submitting your report. Please try again later.", "ReportUser");
                            break;
                        case b.Success:
                            e = Object(s.d)("Thank you for your report.", "ReportUser");
                            break;
                        default:
                            return null
                    }
                    var t = r({
                        "reporting__error-container": this.props.submitStatus !== b.Success,
                        "reporting__success-container": this.props.submitStatus === b.Success
                    });
                    return a.createElement(d._17, {
                        className: t,
                        fullWidth: this.props.submitStatus !== b.Success,
                        "data-test-selector": "reporting.error",
                        margin: {
                            bottom: 2
                        },
                        padding: 1
                    }, e)
                }, t
            }(a.Component),
            y = Object(o.compose)(Object(l.a)(f, {
                options: function(e) {
                    return {
                        fetchPolicy: "network-only",
                        variables: {
                            userId: e.targetUserID
                        }
                    }
                }
            }))(v)
    },
    763: function(e, t, n) {
        "use strict";

        function i(e) {
            return "subscribe-button-modal-tab-" + e
        }
        var r, a = n(0),
            o = n(1),
            s = n(2),
            l = n(773),
            c = n(123),
            u = n(247),
            d = n(5),
            p = n(772),
            m = n(353),
            h = n(784),
            f = n(774),
            b = n(246),
            g = n(3),
            v = (n(808), "gift-subscription-button"),
            y = "subscribe-button";
        ! function(e) {
            e[e.Prime = 0] = "Prime", e[e.Tier1 = 1] = "Tier1", e[e.Tier2 = 2] = "Tier2", e[e.Tier3 = 3] = "Tier3"
        }(r || (r = {}));
        var S = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.toggleActiveTab = function(e) {
                        if (e.currentTarget.parentElement) switch (e.currentTarget.parentElement.getAttribute("data-a-target")) {
                            case "subscribe-button-modal-tab-" + r.Prime:
                                n.setState({
                                    activeTab: r.Prime,
                                    currentPurchasePrice: n.messages.tier1Price
                                }), n.props.onSelectTierTab(r.Prime);
                                break;
                            case "subscribe-button-modal-tab-" + r.Tier1:
                                n.setState({
                                    activeTab: r.Tier1,
                                    currentPurchasePrice: n.messages.tier1Price
                                }), n.props.onSelectTierTab(r.Tier1);
                                break;
                            case "subscribe-button-modal-tab-" + r.Tier2:
                                n.setState({
                                    activeTab: r.Tier2,
                                    currentPurchasePrice: n.messages.tier2Price
                                }), n.props.onSelectTierTab(r.Tier2);
                                break;
                            case "subscribe-button-modal-tab-" + r.Tier3:
                                n.setState({
                                    activeTab: r.Tier3,
                                    currentPurchasePrice: n.messages.tier3Price
                                }), n.props.onSelectTierTab(r.Tier3);
                                break;
                            default:
                                n.setState({
                                    activeTab: r.Prime,
                                    currentPurchasePrice: n.messages.tier1Price
                                }), n.props.onSelectTierTab(r.Prime)
                        }
                    }, n.getTabTitle = function() {
                        switch (n.state.activeTab) {
                            case r.Prime:
                                return n.messages.freeSubWithPrime;
                            case r.Tier1:
                                return n.messages.tier1Sub;
                            case r.Tier2:
                                return n.messages.tier2Sub;
                            case r.Tier3:
                                return n.messages.tier3Sub;
                            default:
                                return n.messages.tier1Sub
                        }
                    }, n.getTierSubscribeButton = function() {
                        var e = n.props.subscriptionProducts[n.state.activeTab - 1];
                        return n.props.isGift ? n.props.giftRecipient ? o.createElement(g.u, {
                            ariaLabel: n.messages.giftSubscription + " " + n.state.currentPurchasePrice,
                            "data-test-selector": v,
                            onClick: n.reportGiftCheckoutAction,
                            targetBlank: !0,
                            purchase: n.state.currentPurchasePrice,
                            linkTo: Object(c.a)(e.url, {
                                recipient: n.props.giftRecipient
                            })
                        }, n.messages.giftSubscription) : o.createElement(g.u, {
                            ariaLabel: n.messages.giftSubscription + " " + n.state.currentPurchasePrice,
                            "data-test-selector": v,
                            onClick: n.onGiftSelect,
                            purchase: n.state.currentPurchasePrice
                        }, n.messages.giftSubscription) : n.state.subbedTier === n.state.activeTab && n.state.activeTab === r.Prime ? o.createElement(h.a, {
                            authToken: n.props.authToken,
                            "data-a-target": "subscribe-with-prime-button",
                            isSubscribed: n.props.isSubscribed,
                            isSubscribedWithPrime: n.props.subbedTier === p.a,
                            onSubscribedWithPrime: n.onSubscribedWithPrime,
                            reportSubMenuAction: n.props.reportSubMenuAction,
                            subLogin: n.props.subLogin,
                            userHasPrime: n.props.userHasPrime,
                            canPrimeSubscribe: n.props.canPrimeSubscribe
                        }) : o.createElement(m.a, {
                            isSubbedToTier: n.state.subbedTier === n.state.activeTab,
                            tierPrice: n.state.currentPurchasePrice,
                            reportSubAction: n.props.reportSubMenuAction,
                            url: e.url,
                            "data-a-target": "subscribe-now-button",
                            "data-test-selector": y
                        })
                    }, n.onSubscribedWithPrime = function() {
                        n.props.onSubscribedWithPrime && n.props.onSubscribedWithPrime()
                    }, n.reportGiftCheckoutAction = function() {
                        n.props.reportSubMenuAction({
                            action: b.a.BuyGiftSub,
                            checkoutButtonTier: n.state.currentPurchasePrice,
                            giftRecipient: n.props.giftRecipient ? n.props.giftRecipient : null
                        })
                    }, n.onGiftSelect = function() {
                        n.props.reportSubMenuAction({
                            action: b.a.GiftASub,
                            checkoutButtonTier: n.state.currentPurchasePrice
                        }), n.props.onGiftSelect && n.props.onGiftSelect()
                    }, n.mapSubbedTierToTabs = function(e) {
                        e.subbedTier === l.a.Prime ? (n.setState({
                            activeTab: r.Prime,
                            subbedTier: r.Prime
                        }), e.onSelectTierTab(r.Prime)) : e.subbedTier === l.a.Tier1 ? (n.setState({
                            activeTab: r.Tier1,
                            subbedTier: r.Tier1
                        }), e.onSelectTierTab(r.Tier1)) : e.subbedTier === l.a.Tier2 ? (n.setState({
                            activeTab: r.Tier2,
                            subbedTier: r.Tier2
                        }), e.onSelectTierTab(r.Tier2)) : e.subbedTier === l.a.Tier3 ? (n.setState({
                            activeTab: r.Tier3,
                            subbedTier: r.Tier3
                        }), e.onSelectTierTab(r.Tier3)) : e.isGift ? e.onSelectTierTab(n.state.activeTab) : e.onSelectTierTab(r.Prime)
                    }, n.getExtraEmotes = function(e) {
                        return (e === r.Tier2 ? Object(u.b)(n.props.subscriptionProducts[1].emotes) : Object(u.b)(n.props.subscriptionProducts[2].emotes.concat(n.props.subscriptionProducts[1].emotes))).map(function(e) {
                            return o.createElement(g.U, {
                                display: g.H.InlineFlex,
                                margin: {
                                    right: .5
                                },
                                key: e.id
                            }, o.createElement("img", {
                                srcSet: "https://static-cdn.jtvnw.net/emoticons/v1/" + e.srcSet
                            }))
                        })
                    }, n.state = {
                        activeTab: r.Tier1,
                        currentPurchasePrice: n.props.subscriptionProducts[0].price,
                        subbedTier: null
                    }, n
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.setMessages(this.props), this.mapSubbedTierToTabs(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.setMessages(e)
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    this.state.subbedTier && (e = o.createElement(g.U, {
                        display: g.H.InlineFlex,
                        margin: {
                            right: .5
                        },
                        className: "subscription-balloon-options__subbed-star"
                    }, o.createElement(g._8, {
                        asset: g._9.Star
                    })));
                    var t = o.createElement(g._21, null),
                        n = null,
                        a = null,
                        c = null,
                        u = o.createElement(g.U, {
                            display: g.H.InlineFlex
                        }, this.state.subbedTier === r.Tier3 && e, o.createElement(g._18, {
                            active: this.state.activeTab === r.Tier3,
                            "data-a-target": i(r.Tier3),
                            onClick: this.toggleActiveTab
                        }, this.messages.tier3TabName));
                    this.hasDiscount(this.props) && this.state.activeTab !== r.Prime && (t = o.createElement(g.U, null, o.createElement(g._21, {
                        className: "tw-subscription-modal__old-price"
                    }, o.createElement("s", null, Object(f.a)(this.props.subscriptionProducts[this.state.activeTab - 1].self.oldPrice), " / Month")), o.createElement(g._21, {
                        className: "tw-subscription-modal__new-price",
                        type: g._26.H5,
                        bold: !0
                    }, Object(f.a)(this.props.subscriptionProducts[this.state.activeTab - 1].self.newPrice), " for the first month (Save 50%)"))), this.props.subbedTier !== l.a.Prime || this.props.isGift || (n = o.createElement(g.U, {
                        display: g.H.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, o.createElement(g.U, {
                        display: g.H.InlineFlex,
                        margin: {
                            right: 1
                        },
                        className: "subscription-balloon-options__prime-crown"
                    }, o.createElement(g._8, {
                        asset: g._9.Crown
                    })), o.createElement(g._18, {
                        active: this.state.activeTab === r.Prime,
                        "data-a-target": i(r.Prime),
                        onClick: this.toggleActiveTab
                    }, this.messages.prime))), this.props.subbedTier && this.props.subbedTier !== l.a.Tier1 || (a = o.createElement(g.U, {
                        display: g.H.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, this.state.subbedTier === r.Tier1 && e, o.createElement(g._18, {
                        active: this.state.activeTab === r.Tier1,
                        "data-a-target": i(r.Tier1),
                        onClick: this.toggleActiveTab
                    }, this.messages.tier1TabName))), this.props.subbedTier && this.props.subbedTier !== l.a.Prime && this.props.subbedTier !== l.a.Tier1 && this.props.subbedTier !== l.a.Tier2 || (c = o.createElement(g.U, {
                        display: g.H.InlineFlex,
                        margin: {
                            right: 2
                        }
                    }, this.state.subbedTier === r.Tier2 && e, o.createElement(g._18, {
                        active: this.state.activeTab === r.Tier2,
                        "data-a-target": i(r.Tier2),
                        onClick: this.toggleActiveTab
                    }, this.messages.tier2TabName)));
                    var d = null;
                    return (this.messages.tier2EmoteCount > 0 && this.state.activeTab === r.Tier2 || this.messages.tier3EmoteCount > 0 && this.state.activeTab === r.Tier3) && (d = o.createElement(g.U, {
                        display: g.H.InlineFlex,
                        alignItems: g.c.Center
                    }, this.getExtraEmotes(this.state.activeTab), o.createElement(g._21, {
                        bold: !0
                    }, Object(s.d)("Plus {extraEmoteCount, number} extra channel emote(s)", {
                        extraEmoteCount: this.state.activeTab === r.Tier2 ? this.messages.tier2EmoteCount : this.messages.tier3EmoteCount
                    }, "SubTierTabs")))), o.createElement(g.U, {
                        className: "channel-header__subscription-balloon-options"
                    }, o.createElement(g.U, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(g._19, null, n, a, c, u)), o.createElement(g.U, null, o.createElement(g.U, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(g._21, {
                        type: g._26.H5,
                        bold: !0
                    }, this.getTabTitle())), o.createElement(g.U, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(g._21, null, this.messages.subTierBenefits)), d, t, o.createElement(g.U, {
                        margin: {
                            top: 1,
                            right: 1
                        }
                    }, this.getTierSubscribeButton())))
                }, t.prototype.setMessages = function(e) {
                    var t = e.subscriptionProducts[1].emotes.length,
                        n = t + e.subscriptionProducts[2].emotes.length;
                    this.messages = {
                        tier2EmoteCount: t,
                        tier3EmoteCount: n,
                        prime: Object(s.d)("Prime", "SubTierTabs"),
                        subscribed: Object(s.d)("Subscribed", "SubTierTabs"),
                        subTierBenefits: Object(s.d)("Includes {availableEmoteCount, number} emoticon(s), subscriber badge, customizable messages upon subscribing, and ad-free viewing", {
                            availableEmoteCount: e.subscriptionProducts[0].emotes.length
                        }, "SubTierTabs"),
                        tier1Price: e.subscriptionProducts[0].price,
                        tier2Price: e.subscriptionProducts[1].price,
                        tier3Price: e.subscriptionProducts[2].price,
                        tier1TabName: e.subscriptionProducts[0].price,
                        tier2TabName: e.subscriptionProducts[1].price,
                        tier3TabName: e.subscriptionProducts[2].price,
                        subscribeNow: Object(s.d)("Subscribe Now", "SubTierTabs"),
                        freeSubWithPrime: Object(s.d)("Free Channel Sub with Twitch Prime", "SubTierTabs"),
                        giftSubscription: Object(s.d)("Gift A Subscription", "SubTierTabs"),
                        tier1Sub: e.subscriptionProducts[0].displayName,
                        tier2Sub: e.subscriptionProducts[1].displayName,
                        tier3Sub: e.subscriptionProducts[2].displayName
                    }, this.hasDiscount(e) && (this.messages.tier1Price = Object(f.a)(e.subscriptionProducts[0].self.newPrice), this.messages.tier2Price = Object(f.a)(e.subscriptionProducts[1].self.newPrice), this.messages.tier3Price = Object(f.a)(e.subscriptionProducts[2].self.newPrice))
                }, t.prototype.isSubscriptionDiscountReady = function(e) {
                    return void 0 !== e.subscriptionProducts[0].self
                }, t.prototype.hasDiscount = function(e) {
                    return !!this.isSubscriptionDiscountReady(e) && Object(f.b)(e.subscriptionProducts)
                }, t = a.__decorate([Object(d.c)("SubTierTabs")], t)
            }(o.Component),
            k = S;
        n.d(t, !1, function() {
            return v
        }), n.d(t, !1, function() {
            return y
        }), n.d(t, "b", function() {
            return r
        }), n.d(t, !1, function() {
            return i
        }), n.d(t, "a", function() {
            return k
        })
    },
    768: function(e, t, n) {
        "use strict";

        function i(e) {
            if (e) {
                var t = e.map(function(e) {
                    return e.id
                });
                return o().filter(function(e) {
                    return t.includes(e.canonical)
                })
            }
            return o()
        }
        var r = function(e, t) {
                return 'community report (<a href="{link}">{link}</a>) {description}'.replace(/{link}/g, "https://www.twitch.tv/communities/{communityName}".replace("{communityName}", e)).replace(/{description}/, t)
            },
            a = n(2),
            o = function() {
                return [{
                    localized: Object(a.d)("Site Suspension Evasion", "ReportUserModal"),
                    canonical: "tos_ban_evasion"
                }, {
                    localized: Object(a.d)("Chat Ban Evasion", "ReportUserModal"),
                    canonical: "chat_ban_evasion"
                }, {
                    localized: Object(a.d)("Self-Harm", "ReportUserModal"),
                    canonical: "selfharm"
                }, {
                    localized: Object(a.d)("Attempts or Threats to Harm", "ReportUserModal"),
                    canonical: "harm"
                }, {
                    localized: Object(a.d)("Harassment", "ReportUserModal"),
                    canonical: "harassment"
                }, {
                    localized: Object(a.d)("Hate Speech", "ReportUserModal"),
                    canonical: "hate_speech"
                }, {
                    localized: Object(a.d)("Offensive Username", "ReportUserModal"),
                    canonical: "offensive_username"
                }, {
                    localized: Object(a.d)("Impersonation", "ReportUserModal"),
                    canonical: "impersonation"
                }, {
                    localized: Object(a.d)("Spam, Scams, or Other Malicious Content", "ReportUserModal"),
                    canonical: "spam"
                }, {
                    localized: Object(a.d)("Porn or Other Sexually Explicit Content", "ReportUserModal"),
                    canonical: "porn"
                }, {
                    localized: Object(a.d)("Nudity or Sexual Behavior/Attire", "ReportUserModal"),
                    canonical: "nudity"
                }, {
                    localized: Object(a.d)("Extreme Violence, Gore, or Other Obscene Content", "ReportUserModal"),
                    canonical: "gore"
                }, {
                    localized: Object(a.d)("Underaged User", "ReportUserModal"),
                    canonical: "underaged"
                }, {
                    localized: Object(a.d)("Cheating in Online Game", "ReportUserModal"),
                    canonical: "cheating"
                }, {
                    localized: Object(a.d)("Prohibited Game", "ReportUserModal"),
                    canonical: "prohibited"
                }, {
                    localized: Object(a.d)("Miscategorized Content or Other Category Violation", "ReportUserModal"),
                    canonical: "miscategorized"
                }, {
                    localized: Object(a.d)("Community Rules Violation", "ReportUserModal"),
                    canonical: "community_rules_violation"
                }, {
                    localized: Object(a.d)("Community is Violating Terms of Service", "ReportUserModal"),
                    canonical: "community_tos_violation"
                }, {
                    localized: Object(a.d)("Bits Acceptable Use Policy Violation", "ReportUserModal"),
                    canonical: "bits_violation"
                }, {
                    localized: Object(a.d)("Other Terms of Service Violation", "ReportUserModal"),
                    canonical: "other"
                }]
            };
        n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return i
        })
    },
    769: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(l.bindActionCreators)({
                closeModal: u.c
            }, e)
        }
        var r = n(770),
            a = n(0),
            o = n(1),
            s = n(8),
            l = n(10),
            c = n(121),
            u = n(49),
            d = n(5),
            p = n(3),
            m = (n(794), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClose = function(e) {
                        t.props.closeModal(), t.props.onClose && t.props.onClose(e)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(p._17, {
                        className: "reporting-modal__container",
                        background: p.m.Base,
                        padding: {
                            x: 2,
                            y: 3
                        }
                    }, o.createElement(r.a, {
                        onClose: this.handleClose,
                        reportContext: this.props.reportContext,
                        title: this.props.title,
                        defaultDescription: this.props.defaultDescription
                    }), o.createElement(c.a, null))
                }, t
            }(o.Component)),
            h = Object(l.compose)(Object(d.c)("ReportUserModal"), Object(s.a)(null, i))(m);
        n.d(t, !1, function() {}), n.d(t, !1, function() {
            return r.a
        }), n.d(t, !1, function() {
            return m
        }), n.d(t, "a", function() {
            return h
        })
    },
    770: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                sessionUser: e.session.user
            }
        }
        n.d(t, "a", function() {
            return S
        });
        var r = n(0),
            a = n(1),
            o = (n.n(a), n(8)),
            s = n(10),
            l = n(2),
            c = n(7),
            u = n(22),
            d = n(13),
            p = n(5),
            m = n(762),
            h = n(759),
            f = n(768),
            b = n(762),
            g = n(789),
            v = (n.n(g), n(790)),
            y = (n.n(v), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        submitStatus: b.b.Unsubmitted
                    }, t.handleSubmit = function(e, n, i, a) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var t, o, t, s;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (e !== m.a) return [3, 5];
                                        t = {
                                            userID: this.props.reportContext.targetUserID,
                                            communityID: i || "",
                                            reason: n
                                        }, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.reportUserInCommunity(Object(u.a)(t))];
                                    case 2:
                                        return r.sent(), l.n.tracking.track(d.SpadeEventType.CommunityModeration, {
                                            community_id: i,
                                            name: a,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            target_id: this.props.reportContext.targetUserID,
                                            action: "report",
                                            reason: e
                                        }), this.setState({
                                            submitStatus: b.b.Success
                                        }), [3, 4];
                                    case 3:
                                        return o = r.sent(), l.i.error(o, "ReportUserInCommunity Mutation failed."), this.setState({
                                            submitStatus: b.b.MutationError
                                        }), [3, 4];
                                    case 4:
                                        return [3, 9];
                                    case 5:
                                        t = {
                                            description: n,
                                            reason: e,
                                            content: this.props.reportContext.contentType,
                                            contentID: this.props.reportContext.contentID,
                                            extra: this.props.reportContext.extra,
                                            targetID: this.props.reportContext.targetUserID
                                        }, this.props.reportContext.contentType === h.a.Community && this.props.reportContext.extra && (t.description = Object(f.a)(this.props.reportContext.extra, n)), r.label = 6;
                                    case 6:
                                        return r.trys.push([6, 8, , 9]), [4, this.props.reportUser(Object(u.a)(t))];
                                    case 7:
                                        return r.sent(), this.props.reportContext.contentType === h.a.Community && l.n.tracking.track(d.SpadeEventType.CommunityReport, {
                                            community_id: this.props.reportContext.contentID,
                                            name: this.props.reportContext.extra,
                                            is_official: !1,
                                            user_id: this.props.sessionUser && this.props.sessionUser.id,
                                            reason: e
                                        }), this.setState({
                                            submitStatus: b.b.Success
                                        }), [3, 9];
                                    case 8:
                                        return s = r.sent(), l.i.error(s, "ReportUser Mutation failed."), this.setState({
                                            submitStatus: b.b.MutationError
                                        }), [3, 9];
                                    case 9:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleChildError = function(e) {
                        return t.setState({
                            submitStatus: e
                        })
                    }, t.handleClose = function() {
                        t.props.onClose && t.props.onClose(t.state.submitStatus)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    this.handleClose()
                }, t.prototype.render = function() {
                    return a.createElement(b.c, {
                        onClose: this.handleClose,
                        onError: this.handleChildError,
                        onSubmit: this.handleSubmit,
                        reportContentType: this.props.reportContext.contentType,
                        submitStatus: this.state.submitStatus,
                        targetUserID: this.props.reportContext.targetUserID,
                        title: this.props.title,
                        defaultDescription: this.props.defaultDescription
                    })
                }, t
            }(a.Component)),
            S = Object(s.compose)(Object(c.a)(g, {
                name: "reportUserInCommunity"
            }), Object(c.a)(v, {
                name: "reportUser"
            }), Object(p.c)("ReportUser"), Object(o.a)(i, null))(y)
    },
    771: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                authToken: Object(s.a)(e)
            }
        }
        var r = n(0),
            a = n(1),
            o = n(8),
            s = n(18),
            l = n(5),
            c = n(772),
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.reportInteractive = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(c.b, {
                        authToken: this.props.authToken,
                        hostChannelID: this.props.hostChannelID,
                        hostChannelLogin: this.props.hostChannelLogin,
                        channelLogin: this.props.channelLogin,
                        updateContainerWidth: this.props.updateContainerWidth,
                        reportInteractive: this.reportInteractive
                    })
                }, t = r.__decorate([Object(l.c)("SubscribeButton")], t)
            }(a.Component),
            d = Object(o.a)(i)(u);
        n.d(t, !1, function() {
            return u
        }), n.d(t, "b", function() {
            return d
        }), n.d(t, !1, function() {}), n.d(t, "a", function() {
            return c.a
        }), n.d(t, !1, function() {
            return c.b
        })
    },
    772: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = new Map;
            return t.set(R.b.Prime, null), e.forEach(function(e, n) {
                t.set(n + 1, e)
            }), t
        }
        var r, a = n(0),
            o = n(1),
            s = n(2),
            l = n(60),
            c = n(7),
            u = n(100),
            d = n(773),
            p = n(128),
            m = n(22),
            h = n(35),
            f = n(19),
            b = n(5),
            g = n(61),
            v = n(83),
            y = n(126),
            S = n(352),
            k = n(29),
            _ = n(51),
            E = n(123),
            C = n(797),
            N = n(246),
            P = n(3),
            T = (n(807), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        selectedUser: null
                    }, t.messages = {
                        noResults: Object(s.d)("No Results", "GiftRecipientSearchResult"),
                        buyGift: Object(s.d)("Buy Gift Subscription", "GiftRecipientSearchResult"),
                        searchHint: Object(s.d)("Start typing to see a list of suggestions here.", "GiftRecipientSearchResult")
                    }, t.reportGiftCheckoutAction = function() {
                        t.props.reportSubMenuAction({
                            action: N.a.BuyGiftSub,
                            checkoutButtonTier: t.props.selectedProductPrice,
                            giftRecipient: t.state.selectedUser ? t.state.selectedUser.login : null
                        })
                    }, t.onUserClick = function(e) {
                        for (var n = e.target; n.parentElement && !n.dataset.user_id;) n = n.parentElement;
                        n.dataset.user_id && n.dataset.user_login && n.dataset.user_name ? t.setState({
                            selectedUser: {
                                id: n.dataset.userId || "",
                                login: n.dataset.user_login || "",
                                name: n.dataset.user_name || ""
                            }
                        }) : t.setState({
                            selectedUser: null
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    (e.isWaiting || e.isErrored || !e.hasInput) && this.setState({
                        selectedUser: null
                    })
                }, t.prototype.render = function() {
                    var e;
                    return e = this.props.isWaiting ? o.createElement(P.U, {
                        fullHeight: !0
                    }, o.createElement(P.X, {
                        fillContent: !0
                    })) : this.props.hasInput ? this.props.isErrored ? this.getErrorMessage() : this.props.userResults && this.props.userResults.totalHits > 0 ? this.getUserResultContent() : this.getNoResultsMessage() : o.createElement(P.U, {
                        margin: 1
                    }, o.createElement(P._21, {
                        color: P.F.Alt2
                    }, this.messages.searchHint)), o.createElement("div", {
                        onKeyDown: this.props.onKeyDown
                    }, o.createElement(P._17, {
                        className: "gift-recipient-search-result-view",
                        background: P.m.Alt,
                        position: P._2.Relative,
                        overflow: P.Y.Hidden,
                        display: P.H.Block,
                        margin: {
                            bottom: 2
                        },
                        borderLeft: !0,
                        borderBottom: !0,
                        borderRight: !0
                    }, o.createElement(P.P, {
                        overflow: P.Y.Hidden,
                        position: P._2.Relative
                    }, o.createElement(k.b, {
                        suppressScrollX: !0
                    }, o.createElement(P.U, null, e, o.createElement(k.a, {
                        enabled: !this.props.isWaiting && this.props.hasInput,
                        loadMore: this.props.loadMore
                    }))))), this.getBuyGiftButton())
                }, t.prototype.getBuyGiftButton = function() {
                    var e = Object(E.a)(this.props.selectedProductURL, {
                            recipient: this.state.selectedUser ? this.state.selectedUser.login : ""
                        }),
                        t = o.createElement(C.a, {
                            subProductId: this.props.selectedProductId,
                            giftRecipient: this.state.selectedUser ? this.state.selectedUser.login : null,
                            onClick: this.reportGiftCheckoutAction,
                            checkoutURL: e
                        }),
                        n = null;
                    if (this.state.selectedUser) {
                        var i = Object(_.a)(this.state.selectedUser.login || "", this.state.selectedUser.name || "");
                        n = o.createElement(P.P, {
                            margin: {
                                x: 1
                            }
                        }, o.createElement(P._21, null, Object(s.d)("for {displayName}", {
                            displayName: o.createElement(P._21, {
                                bold: !0,
                                type: P._26.Span
                            }, i)
                        }, "GiftRecipientSearchResult")))
                    }
                    return o.createElement(P.U, {
                        display: P.H.Flex,
                        alignItems: P.c.Center,
                        fullWidth: !0
                    }, t, n)
                }, t.prototype.getErrorMessage = function() {
                    return o.createElement(P.U, {
                        fullWidth: !0,
                        textAlign: P._22.Center,
                        justifyContent: P.T.Center
                    }, o.createElement(P._21, null, Object(s.d)("Something went wrong", "GiftRecipientSearchResult")))
                }, t.prototype.getUserResultContent = function() {
                    var e = this;
                    return this.props.userResults ? this.props.userResults.results.map(function(t) {
                        var n = Object(_.a)(t.login || "", t.name || "");
                        return o.createElement(P.S, {
                            tabIndex: -1,
                            "data-ts_selectable": !0,
                            "data-tt_content": !0,
                            key: "git-recipient-result__" + t.id,
                            "data-user_id": t.id,
                            "data-user_login": t.login,
                            "data-user_name": t.name,
                            onClick: e.onUserClick,
                            "data-test-selector": "subscribe-button__gift_search_result"
                        }, o.createElement(P.U, {
                            padding: .5
                        }, o.createElement(P.A, {
                            row: !0
                        }, o.createElement(P.C, {
                            imageAlt: t.thumbnailAltText,
                            imageSrc: t.thumbnail ? t.thumbnail : "",
                            size: P.D.Size4,
                            aspect: P.k.Aspect1x1
                        }), o.createElement(P.B, null, o.createElement(P.P, {
                            padding: {
                                x: 1
                            }
                        }, o.createElement(P._21, {
                            type: P._26.H5,
                            ellipsis: !0
                        }, n))))))
                    }) : o.createElement(P._1, null)
                }, t.prototype.getNoResultsMessage = function() {
                    return o.createElement(P.U, {
                        margin: 1
                    }, o.createElement(P._21, {
                        color: P.F.Alt2
                    }, this.messages.noResults))
                }, t = a.__decorate([Object(b.c)("GiftRecipientSearchResultPanel")], t)
            }(o.Component)),
            D = T,
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.selectedSubProduct ? (this.formatMessages(), o.createElement(P.U, {
                        padding: 2
                    }, o.createElement(P.U, null, o.createElement(P.U, {
                        display: P.H.Flex,
                        justifyContent: P.T.Between,
                        alignItems: P.c.Center,
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(P._21, {
                        type: P._26.H4,
                        bold: !0
                    }, this.messages.giftSubscription), o.createElement(P.u, {
                        type: P.z.Text,
                        "data-a-target": "subscribe-back-button",
                        icon: P._9.AngleLeft,
                        onClick: this.props.onBack
                    }, o.createElement(P.U, {
                        alignItems: P.c.Center,
                        display: P.H.InlineFlex
                    }, o.createElement(P._21, null, this.messages.back)))), o.createElement(P.U, null, o.createElement(P._21, null, this.messages.giftSingleMonth), o.createElement(P.U, {
                        display: P.H.Flex,
                        justifyContent: P.T.Center,
                        fullWidth: !0
                    }, o.createElement(P.P, {
                        fullWidth: !0
                    }, o.createElement("div", null, o.createElement(P._11, {
                        onChange: this.handleChange,
                        onKeyDown: this.props.onKeyDown,
                        id: "gift-recipient-search",
                        placeholder: this.messages.searchPlaceholder
                    }), o.createElement(D, {
                        hasInput: this.props.hasInput,
                        userResults: this.props.userResults,
                        isErrored: this.props.isErrored,
                        isWaiting: this.props.isWaiting,
                        loadMore: this.props.loadMore,
                        onKeyDown: this.props.onKeyDown,
                        selectedProductId: this.props.selectedSubProduct.id,
                        selectedProductURL: this.props.selectedSubProduct.url,
                        selectedProductPrice: this.props.selectedSubProduct.price,
                        reportSubMenuAction: this.props.reportSubMenuAction
                    })))))))) : o.createElement(P._1, null)
                }, t.prototype.formatMessages = function() {
                    this.messages = {
                        giftSubscription: Object(s.d)("Choose a Gift Recipient", "GiftRecipientSearch"),
                        giftSingleMonth: Object(s.d)("{subDisplayName}: {giftPrice} Gift Subscription (Single Month)", {
                            subDisplayName: this.props.selectedSubProduct ? this.props.selectedSubProduct.displayName : "",
                            giftPrice: this.props.selectedSubProduct ? this.props.selectedSubProduct.price : ""
                        }, "GiftRecipientSearch"),
                        back: Object(s.d)("Back", "GiftRecipientSearch"),
                        searchPlaceholder: Object(s.d)("Search for a Twitch ID", "GiftRecipientSearch")
                    }
                }, t
            }(o.Component),
            w = 50,
            U = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.onChange = function(e) {
                        if (t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), !e) return void t.setState(t.getEmptyState());
                        t.setState({
                            isWaiting: !0
                        }), t.inputTimer = setTimeout(function() {
                            return t.doSearch(e)
                        }, w)
                    }, t.loadMore = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i;
                            return a.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (this.state.queryID || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(v.a.Users, this.state.term, "", {
                                            page: e
                                        })];
                                    case 2:
                                        return t = r.sent(), [3, 4];
                                    case 3:
                                        return n = r.sent(), this.setState(a.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            hasInput: !0
                                        })), [2];
                                    case 4:
                                        return t ? (i = Object(S.b)({
                                            searchResults: t,
                                            append: e > 0,
                                            currentUserResults: this.state.currentUserResults
                                        }), this.setState({
                                            currentUserResults: i.currentUserResults,
                                            term: this.state.term,
                                            hasInput: !0,
                                            isWaiting: !1,
                                            currentPage: e,
                                            exhaustedHits: i.exhaustedHits
                                        }), [2]) : (this.setState(a.__assign({}, this.getEmptyState(), {
                                            isErrored: !0,
                                            hasInput: !0
                                        })), [2])
                                }
                            })
                        })
                    }, t.onKeyDown = function(e) {
                        t.state.term && (e.keyCode === g.a.Esc ? t.setState({
                            hasInput: !1
                        }) : e.keyCode === g.a.Up ? t.focusNext(-1) : e.keyCode === g.a.Down && t.focusNext(1))
                    }, t.state = t.getEmptyState(), t.searchClient = new y.a(s.a.algoliaApplicationID, s.a.algoliaAPIKey), t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return o.createElement(O, {
                        onChange: this.onChange,
                        loadMore: this.loadMore,
                        onKeyDown: this.onKeyDown,
                        userResults: this.state.currentUserResults,
                        hasInput: this.state.hasInput,
                        isErrored: this.state.isErrored,
                        isWaiting: this.state.isWaiting,
                        onBack: this.props.onBack,
                        selectedSubProduct: this.props.selectedSubProduct,
                        reportSubMenuAction: this.props.reportSubMenuAction
                    })
                }, t.prototype.getEmptyState = function() {
                    return {
                        currentUserResults: {
                            totalHits: 0,
                            results: []
                        },
                        term: "",
                        hasInput: !1,
                        isErrored: !1,
                        queryID: "",
                        isWaiting: !1,
                        currentPage: -1,
                        focusSelectable: !1,
                        exhaustedHits: !1
                    }
                }, t.prototype.doSearch = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var t, n, i, r, o, s;
                        return a.__generator(this, function(l) {
                            switch (l.label) {
                                case 0:
                                    this.inputTimer = 0, t = -1, n = f.a(), i = "INPUT" === document.activeElement.tagName, this.setState({
                                        queryID: n,
                                        focusSelectable: !i && !!this.state.currentFocus
                                    }), l.label = 1;
                                case 1:
                                    return l.trys.push([1, 3, , 4]), t = 0, [4, this.searchClient.queryForType(v.a.Users, e, n)];
                                case 2:
                                    return r = l.sent(), [3, 4];
                                case 3:
                                    return o = l.sent(), this.setState(a.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        hasInput: !0,
                                        term: e
                                    })), [2];
                                case 4:
                                    return r ? this.state.queryID !== r.id ? [2] : (s = Object(S.b)({
                                        searchResults: r,
                                        append: !1
                                    }), this.setState(function(n) {
                                        return a.__assign({}, n, s, {
                                            queryID: "",
                                            term: e,
                                            hasInput: !0,
                                            isWaiting: !1,
                                            currentPage: t
                                        })
                                    }), [2]) : (this.setState(a.__assign({}, this.getEmptyState(), {
                                        isErrored: !0,
                                        hasInput: !0,
                                        term: e
                                    })), [2])
                            }
                        })
                    })
                }, t.prototype.focusNext = function(e) {
                    var t, n = document.querySelectorAll("[data-ts_selectable=true]"),
                        i = document.activeElement,
                        r = Array.prototype.indexOf.call(n, i);
                    if (t = r < 0 ? e > 0 ? 0 : n.length - 1 : r + e, t < 0 && (t = 0), !(t >= n.length)) {
                        var a = n.item(t);
                        a.focus(), a.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                            currentFocus: a
                        })
                    }
                }, t = a.__decorate([Object(b.c)("GiftRecipientSearch")], t)
            }(o.Component),
            F = U,
            I = n(780),
            R = n(763),
            j = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.setMessages()
                }, t.prototype.render = function() {
                    return o.createElement(P.U, {
                        padding: 2
                    }, o.createElement(P.U, null, o.createElement(P.U, {
                        display: P.H.Flex,
                        justifyContent: P.T.Between,
                        alignItems: P.c.Center,
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(P._21, {
                        type: P._26.H4,
                        bold: !0
                    }, this.messages.allSubscriptions), o.createElement(P.u, {
                        type: P.z.Text,
                        "data-a-target": "subscribe-back-button",
                        "data-test-selector": "subscribe-button__back-button",
                        icon: P._9.AngleLeft,
                        onClick: this.props.onBack
                    }, o.createElement(P.U, {
                        alignItems: P.c.Center,
                        display: P.H.InlineFlex
                    }, o.createElement(P._21, null, this.messages.back)))), o.createElement(R.a, {
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.props.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts,
                        userHasPrime: !1,
                        canPrimeSubscribe: !1,
                        isSubscribed: this.props.isSubscribed
                    })))
                }, t.prototype.setMessages = function() {
                    this.messages = {
                        back: Object(s.d)("Back", "PaidSubOptions"),
                        allSubscriptions: Object(s.d)("All Paid Subscriptions", "PaidSubOptions")
                    }
                }, t
            }(o.Component),
            x = j,
            L = n(771),
            G = n(784);
        ! function(e) {
            e[e.Top = 0] = "Top", e[e.SubOptions = 1] = "SubOptions", e[e.GiftOptions = 2] = "GiftOptions", e[e.RecipientSelect = 3] = "RecipientSelect"
        }(r || (r = {}));
        var A = n(774),
            M = n(809),
            B = (n(810), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.handleTopPageSubButtonClick = function() {
                        n.props.reportSubMenuAction({
                            action: N.a.ClickCheckout,
                            checkoutButtonTier: n.messages.tier1Price
                        })
                    }, n.showGiftOptions = function() {
                        n.props.reportSubMenuAction({
                            action: N.a.ClickGiftSubOptions,
                            modalLevel: "second_page"
                        }), n.setState(function() {
                            return {
                                currentPage: r.GiftOptions
                            }
                        })
                    }, n.showSubOptions = function() {
                        n.props.reportSubMenuAction({
                            action: N.a.ClickMoreSubOptions,
                            modalLevel: "second_page"
                        }), n.setState(function() {
                            return {
                                currentPage: r.SubOptions
                            }
                        })
                    }, n.showRecipientSelect = function() {
                        n.setState(function() {
                            return {
                                currentPage: r.RecipientSelect
                            }
                        })
                    }, n.showTop = function() {
                        n.setState(function() {
                            return {
                                currentPage: r.Top
                            }
                        })
                    }, n.goToPreviousPage = function() {
                        return n.props.reportSubMenuAction({
                            action: N.a.ClickBack,
                            modalLevel: n.state.currentPage === r.SubOptions || n.state.currentPage === r.GiftOptions ? "top_page" : "second_page"
                        }), n.state.currentPage === r.SubOptions || n.state.currentPage === r.GiftOptions ? void n.showTop() : n.state.currentPage === r.RecipientSelect ? void n.showGiftOptions() : void 0
                    }, n.onSelectTierTab = function(e) {
                        var t = n.tabToSubProduct.get(e);
                        if (t) {
                            var i = n.props.subscriptionProducts.findIndex(function(e) {
                                return e.price === t.price
                            });
                            i !== n.state.selectedSubProductIndex && n.setState({
                                selectedSubProductIndex: i
                            }), n.props.onSelectTierTab(t.price)
                        } else n.props.onSelectTierTab(L.a)
                    }, n.state = {
                        currentPage: r.Top,
                        selectedSubProductIndex: 0,
                        giftingEnabled: !1
                    }, n.tabToSubProduct = i(t.subscriptionProducts), n
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.getGiftingExperimentAssignment()
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (!this.isSubscriptionDiscountReady(e) && this.isDiscountDataReady(e)) {
                        if (e.data.error) return;
                        var t = Object.assign({}, e.data.user.subscriptionProducts);
                        this.props.setPromotionData(t)
                    }
                }, t.prototype.render = function() {
                    return this.setMessages(), this.state.currentPage === r.Top ? this.getTopPage() : this.state.currentPage === r.SubOptions ? this.getPaidOptionsPage() : this.state.currentPage === r.GiftOptions ? this.getGiftOptionsPage() : this.state.currentPage === r.RecipientSelect ? this.getGiftRecipientSearchPage() : this.getTopPage()
                }, t.prototype.getGiftingExperimentAssignment = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, s.n.experiments.getAssignment("TWILIGHT_SUB_GIFTING")];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        giftingEnabled: "yes" === e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.getPaidOptionsPage = function() {
                    return o.createElement(x, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts,
                        isSubscribed: !1,
                        hasDiscount: this.hasDiscount(this.props)
                    })
                }, t.prototype.getGiftOptionsPage = function() {
                    return o.createElement(P.U, {
                        padding: 2
                    }, o.createElement(I.a, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts,
                        onGiftSelect: this.showRecipientSelect
                    }))
                }, t.prototype.getGiftRecipientSearchPage = function() {
                    return o.createElement(F, {
                        onBack: this.goToPreviousPage,
                        selectedSubProduct: this.props.subscriptionProducts[this.state.selectedSubProductIndex],
                        reportSubMenuAction: this.props.reportSubMenuAction
                    })
                }, t.prototype.getTopPage = function() {
                    var e = null,
                        t = null,
                        n = null,
                        i = o.createElement(P._21, null, this.messages.tier1PricePerMonth),
                        r = this.messages.tier1Price;
                    return this.hasDiscount(this.props) && (i = o.createElement(P.U, null, o.createElement(P._21, {
                        className: "tw-subscription-modal__old-price"
                    }, o.createElement("s", null, this.messages.tier1PricePerMonth)), o.createElement(P._21, {
                        className: "tw-subscription-modal__new-price",
                        type: P._26.H5,
                        bold: !0
                    }, this.messages.discountMessage, " ")), r = Object(A.a)(this.props.subscriptionProducts[0].self.newPrice)), (this.props.inPrimeRegion || this.props.userHasPrime) && (n = this.renderPrimeSection()), this.props.isNonStandardSub || (e = o.createElement(P.U, {
                        margin: {
                            right: 1
                        },
                        display: P.H.Inline
                    }, o.createElement(P.u, {
                        ariaLabel: this.messages.seeMoreSubOptions,
                        onClick: this.showSubOptions,
                        type: P.z.Hollow,
                        "data-test-selector": "subscribe-button__more-sub-options-button",
                        "data-a-target": "see-more-sub-options-button"
                    }, this.messages.seeMoreSubOptions))), this.state.giftingEnabled && (t = o.createElement(P.U, {
                        display: P.H.Inline
                    }, o.createElement(P.u, {
                        ariaLabel: this.messages.giftSubscription,
                        onClick: this.showGiftOptions,
                        type: P.z.Hollow,
                        "data-test-selector": "subscribe-button__gift"
                    }, this.messages.giftSubscription))), o.createElement(P.U, {
                        padding: 2
                    }, n, o.createElement(P.U, null, o.createElement(P._21, {
                        type: P._26.H4,
                        bold: !0
                    }, this.messages.paidSubscription), i, o.createElement(P.U, {
                        display: P.H.Flex
                    }, o.createElement(P.U, {
                        margin: {
                            right: 1,
                            top: 1
                        }
                    }, o.createElement(P.u, {
                        ariaLabel: this.messages.subscribeTier1,
                        "data-a-target": "tier1-subscribe-button",
                        "data-test-selector": "subscribe-button__top-page-sub-button",
                        linkTo: this.props.subscriptionProducts[0].url,
                        onClick: this.handleTopPageSubButtonClick,
                        purchase: r,
                        targetBlank: !0
                    }, this.messages.subscribe)))), o.createElement(P.U, {
                        margin: {
                            right: 1,
                            top: 2
                        }
                    }, e, t))
                }, t.prototype.renderPrimeSection = function() {
                    var e = this.props.userHasPrime ? this.messages.useFreeChannelSub : this.messages.primeUpsell;
                    return o.createElement(P.U, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement(P.U, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(P._21, {
                        type: P._26.H4,
                        bold: !0
                    }, this.messages.freeSubWithPrime)), o.createElement(P.U, null, o.createElement(P.U, {
                        margin: {
                            bottom: 1
                        }
                    }, o.createElement(P._21, null, e)), o.createElement(G.a, {
                        authToken: this.props.authToken,
                        "data-a-target": "subscribe-with-prime-button",
                        isSubscribed: !1,
                        isSubscribedWithPrime: !1,
                        onSubscribedWithPrime: this.props.onSubscribedWithPrime,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subLogin: this.props.subLogin,
                        userHasPrime: this.props.userHasPrime,
                        canPrimeSubscribe: this.props.canPrimeSubscribe
                    })))
                }, t.prototype.setMessages = function() {
                    var e = this.props.subscriptionProducts[0].price;
                    this.hasDiscount(this.props) && this.props.subscriptionProducts[0].self.isEligibleForDiscount && (e = Object(A.a)(this.props.subscriptionProducts[0].self.newPrice)), this.messages = {
                        useFreeChannelSub: Object(s.d)("Use your free channel subscription to directly support your favorite streamer. {upsellTextLink}", {
                            upsellTextLink: o.createElement("a", {
                                href: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                                target: "_blank"
                            }, Object(s.d)("Learn more about your free sub", "BalloonNonSubbedUser"))
                        }, "BalloonNonSubbedUser"),
                        primeUpsell: Object(s.d)("{upsellTextBold}, plus get free game loot every month, ad-free viewing, and loads more with Twitch Prime.", {
                            upsellTextBold: o.createElement("strong", null, Object(s.d)("Support your favorite streamer", "BalloonNonSubbedUser"))
                        }, "BalloonNonSubbedUser"),
                        freeSubWithPrime: Object(s.d)("Free Channel Sub with Twitch Prime", "BalloonNonSubbedUser"),
                        changeSubscription: Object(s.d)("Change Your Subscription", "BalloonNonSubbedUser"),
                        seeMoreSubOptions: Object(s.d)("More Paid Subscription Options", "BalloonNonSubbedUser"),
                        tier1Price: Object(s.d)("{tier1Price}", {
                            tier1Price: e
                        }, "BalloonNonSubbedUser"),
                        paidSubscription: Object(s.d)("Paid Subscription", "BalloonNonSubbedUser"),
                        tier1PricePerMonth: Object(s.d)("{price} / Month", {
                            price: this.props.subscriptionProducts[0].price
                        }, "BalloonNonSubbedUser"),
                        subscribeTier1: Object(s.d)("Subscribe {tier1Price}", {
                            tier1Price: e
                        }, "BalloonNonSubbedUser"),
                        subscribeToUser: Object(s.d)("Subscribe to {username}", {
                            username: this.props.channelDisplayName
                        }, "BalloonNonSubbedUser"),
                        subscribe: Object(s.d)("Subscribe", "BalloonNonSubbedUser"),
                        back: Object(s.d)("Back", "BalloonNonSubbedUser"),
                        allSubscriptions: Object(s.d)("All Paid Subscriptions", "BalloonNonSubbedUser"),
                        chooseGiftSubscription: Object(s.d)("Choose A Gift Subscription", "BalloonNonSubbedUser"),
                        discountMessage: Object(s.d)("{price} for the first month (Save 50%)", {
                            price: e
                        }, "BalloonNonSubbedUser"),
                        giftSubscription: Object(s.d)("Gift a Subscription", "BalloonNonSubbedUser"),
                        giftDiscountDisclaimer: Object(s.d)("Promotions do not apply to Gift Subscriptions", "BalloonNonSubbedUser")
                    }
                }, t.prototype.isDiscountDataReady = function(e) {
                    return e.data.user && e.data.user.subscriptionProducts && e.data.user.subscriptionProducts.length > 0 && e.data.user.subscriptionProducts[0] && e.data.user.subscriptionProducts[0].self && void 0 !== e.data.user.subscriptionProducts[0].self.isEligibleForDiscount
                }, t.prototype.isSubscriptionDiscountReady = function(e) {
                    return void 0 !== e.subscriptionProducts[0].self
                }, t.prototype.hasDiscount = function(e) {
                    return !!this.isDiscountDataReady(e) && Object(A.b)(e.subscriptionProducts)
                }, t = a.__decorate([Object(c.a)(M, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(b.c)("BalloonNonSubbedUser")], t)
            }(o.Component)),
            H = B,
            V = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.showTop = function() {
                        n.setState(function() {
                            return {
                                currentPage: r.Top
                            }
                        })
                    }, n.showRecipientSelect = function() {
                        n.setState(function() {
                            return {
                                currentPage: r.RecipientSelect
                            }
                        })
                    }, n.showGiftOptions = function() {
                        n.props.reportSubMenuAction({
                            action: N.a.ClickGiftSubOptions
                        }), n.setState(function() {
                            return {
                                currentPage: r.GiftOptions
                            }
                        })
                    }, n.showSubOptions = function() {
                        n.setState(function() {
                            return {
                                currentPage: r.SubOptions
                            }
                        })
                    }, n.goToPreviousPage = function() {
                        return n.state.currentPage === r.GiftOptions || n.state.currentPage === r.SubOptions || n.state.giftShortcut ? (n.showTop(), void n.setState({
                            giftShortcut: !1
                        })) : n.state.currentPage === r.RecipientSelect ? void n.showGiftOptions() : void 0
                    }, n.onGiftSelect = function() {
                        n.props.reportSubMenuAction({
                            action: N.a.GiftASub,
                            checkoutButtonTier: n.props.subscriptionProducts[0].price
                        }), n.setState({
                            selectedSubProductIndex: 0,
                            giftShortcut: !0
                        }), n.showRecipientSelect()
                    }, n.handleTopPageSubButtonClick = function() {
                        n.props.reportSubMenuAction({
                            action: N.a.ClickCheckout,
                            checkoutButtonTier: n.props.subscriptionProducts[0].price
                        })
                    }, n.onSelectTierTab = function(e) {
                        var t = n.tabToSubProduct.get(e);
                        if (t) {
                            var i = n.props.subscriptionProducts.findIndex(function(e) {
                                return e.price === t.price
                            });
                            i !== n.state.selectedSubProductIndex && n.setState({
                                selectedSubProductIndex: i
                            }), n.props.onSelectTierTab(t.price)
                        } else n.props.onSelectTierTab(L.a)
                    }, n.state = {
                        currentPage: r.Top,
                        selectedSubProductIndex: 0,
                        giftShortcut: !1,
                        giftingEnabled: !1
                    }, n.tabToSubProduct = i(t.subscriptionProducts), n
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.getGiftingExperimentAssignment()
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.setMessages(), this.state.currentPage === r.Top ? this.getTopPage() : this.state.currentPage === r.SubOptions ? this.getSubOptionsPage() : this.state.currentPage === r.GiftOptions ? this.getGiftOptionsPage() : this.state.currentPage === r.RecipientSelect ? this.getGiftRecipientSearchPage() : this.getTopPage()
                }, t.prototype.getGiftingExperimentAssignment = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, s.n.experiments.getAssignment("TWILIGHT_SUB_GIFTING")];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        giftingEnabled: "yes" === e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.getGiftRecipientSearchPage = function() {
                    return o.createElement(F, {
                        onBack: this.goToPreviousPage,
                        selectedSubProduct: this.props.subscriptionProducts[this.state.selectedSubProductIndex],
                        reportSubMenuAction: this.props.reportSubMenuAction
                    })
                }, t.prototype.getGiftOptionsPage = function() {
                    return o.createElement(P.U, {
                        padding: 2
                    }, o.createElement(I.a, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.channelDisplayName,
                        subscriptionProducts: this.props.subscriptionProducts,
                        onGiftSelect: this.showRecipientSelect,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction
                    }))
                }, t.prototype.getSubOptionsPage = function() {
                    return o.createElement(x, {
                        onBack: this.goToPreviousPage,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        subscriptionProducts: this.props.subscriptionProducts,
                        hasDiscount: !1,
                        isSubscribed: !0
                    })
                }, t.prototype.getTopPageGiftSection = function() {
                    return o.createElement(P.U, null, o.createElement(P._21, {
                        type: P._26.H4,
                        bold: !0
                    }, this.messages.helpGrow), o.createElement(P.U, {
                        margin: {
                            top: 1,
                            bottom: 1
                        },
                        display: P.H.Flex
                    }, o.createElement(P.u, {
                        ariaLabel: this.messages.giftSubscription + " " + this.props.subscriptionProducts[0].price,
                        onClick: this.onGiftSelect,
                        purchase: this.props.subscriptionProducts[0].price
                    }, this.messages.giftSubscription), o.createElement(P.U, {
                        margin: {
                            left: 1
                        }
                    }, o.createElement(P.u, {
                        ariaLabel: this.messages.giftOptions,
                        onClick: this.showGiftOptions,
                        type: P.z.Hollow
                    }, this.messages.giftOptions))))
                }, t.prototype.getTopPageUpgradeSection = function() {
                    return o.createElement(P.U, null, o.createElement(P._21, {
                        type: P._26.H4,
                        bold: !0
                    }, this.messages.upgradeSubscription), o.createElement(R.a, {
                        authToken: this.props.authToken,
                        onSubscribedWithPrime: this.props.onSubscribedWithPrime,
                        subLogin: this.props.subLogin,
                        userHasPrime: this.props.userHasPrime,
                        canPrimeSubscribe: this.props.canPrimeSubscribe,
                        channelDisplayName: this.props.channelDisplayName,
                        onSelectTierTab: this.onSelectTierTab,
                        subbedTier: this.props.subbedTier,
                        subscriptionProducts: this.props.subscriptionProducts,
                        reportSubMenuAction: this.props.reportSubMenuAction,
                        onGiftSelect: this.showRecipientSelect,
                        isSubscribed: !0
                    }))
                }, t.prototype.getGiftInfoSection = function() {
                    var e, t, n = null;
                    return this.props.giftPaidUpgrade ? (e = this.messages.yourSubscription, t = this.messages.giftInfo, n = this.messages.giftUpgradeInfo) : (e = this.messages.yourGiftSub, t = this.messages.giftInfoWithExpiration), o.createElement(P.U, null, o.createElement(P._21, {
                        bold: !0,
                        type: P._26.H4
                    }, e), o.createElement(P.P, {
                        margin: {
                            y: 1
                        }
                    }, o.createElement(P._21, null, t)), n)
                }, t.prototype.getGiftExtendSection = function() {
                    var e = null,
                        t = null;
                    return this.props.isNonStandardSub || (e = o.createElement(P.U, {
                        margin: {
                            right: 1
                        },
                        display: P.H.Inline
                    }, o.createElement(P.u, {
                        ariaLabel: this.messages.seeMoreSubOptions,
                        onClick: this.showSubOptions,
                        type: P.z.Hollow,
                        "data-a-target": "see-more-sub-options-button"
                    }, this.messages.seeMoreSubOptions))), t = o.createElement(P.U, {
                        display: P.H.Inline
                    }, o.createElement(P.u, {
                        ariaLabel: this.messages.giftSubscription,
                        onClick: this.showGiftOptions,
                        type: P.z.Hollow
                    }, this.messages.giftSubscription)), o.createElement(P.U, null, o.createElement(P.U, {
                        margin: {
                            top: 1
                        }
                    }, o.createElement(P._21, {
                        type: P._26.H4,
                        bold: !0
                    }, this.messages.extendSubscription), o.createElement(P.P, {
                        margin: {
                            top: 1
                        }
                    }, o.createElement(P._21, null, this.messages.tier1PricePerMonth)), o.createElement(P.U, {
                        margin: {
                            right: 1,
                            top: 1
                        }
                    }, o.createElement(P.u, {
                        ariaLabel: this.props.subscriptionProducts[0].price,
                        "data-a-target": "tier1-subscribe-button",
                        linkTo: this.props.subscriptionProducts[0].url,
                        onClick: this.handleTopPageSubButtonClick,
                        purchase: this.props.subscriptionProducts[0].price,
                        targetBlank: !0
                    }, this.messages.subscribe))), o.createElement(P.U, {
                        margin: {
                            right: 1,
                            top: 2
                        }
                    }, e, t))
                }, t.prototype.getTopPage = function() {
                    return this.state.giftingEnabled ? this.props.userHasGiftSub ? this.props.userHasGiftSub && !this.props.giftPaidUpgrade ? o.createElement(P.U, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, o.createElement(P.U, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getGiftInfoSection()), this.getGiftExtendSection()) : o.createElement(P.U, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, o.createElement(P.U, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getGiftInfoSection()), this.getTopPageGiftSection()) : o.createElement(P.U, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, o.createElement(P.U, {
                        margin: {
                            bottom: 2
                        }
                    }, this.getTopPageGiftSection()), this.getTopPageUpgradeSection()) : o.createElement(P.U, {
                        className: "channel-header__subscription-modal-main",
                        padding: 2
                    }, this.getTopPageUpgradeSection())
                }, t.prototype.setMessages = function() {
                    switch (this.props.subbedTier) {
                        case d.a.Tier1:
                            this.props.subscriptionProducts[0].price;
                            break;
                        case d.a.Tier2:
                            this.props.subscriptionProducts[1].price;
                            break;
                        case d.a.Tier3:
                            this.props.subscriptionProducts[2].price;
                            break;
                        default:
                            this.props.subscriptionProducts[0].price
                    }
                    this.messages = {
                        upgradeSubscription: Object(s.d)("Upgrade Your Subscription", "BalloonSubbedUser"),
                        helpGrow: Object(s.d)("Help Grow {streamer}'s Community", {
                            streamer: this.props.channelDisplayName
                        }, "BalloonSubbedUser"),
                        giftSubscription: Object(s.d)("Gift A Subscription", "BalloonSubbedUser"),
                        giftOptions: Object(s.d)("More Gift Options", "BalloonSubbedUser"),
                        chooseGiftSubscription: Object(s.d)("Choose A Gift Subscription", "BalloonSubbedUser"),
                        back: Object(s.d)("Back", "BalloonSubbedUser"),
                        yourSubscription: Object(s.d)("Your Subscription", "BalloonSubbedUser"),
                        extendSubscription: Object(s.d)("Extend Your Subscription", "BalloonSubbedUser"),
                        yourGiftSub: Object(s.d)("Your Gift Subscription", "BalloonSubbedUser"),
                        seeMoreSubOptions: Object(s.d)("More Paid Subscription Options", "BalloonSubbedUser"),
                        subscribe: Object(s.d)("Subscribe", "BalloonSubbedUser"),
                        giftInfo: Object(s.d)("{giftPrice} Gift Subscription from {giftSender}", {
                            giftPrice: this.getCurrentSubPrice(),
                            giftSender: o.createElement(P._21, {
                                bold: !0,
                                type: P._26.Span
                            }, this.props.giftSender || "")
                        }, "BalloonSubbedUser"),
                        giftUpgradeInfo: Object(s.d)("Your new {upgradePrice} Paid Subscription will begin on {subStartDate}", {
                            upgradePrice: this.props.giftPaidUpgrade ? this.props.giftPaidUpgrade.price : "",
                            subStartDate: this.getFormattedGiftUpgradeStartDate()
                        }, "BalloonSubbedUser"),
                        giftInfoWithExpiration: Object(s.d)("{giftPrice} Subscription from {giftSender} - Benefits expire on {giftEndDate}", {
                            giftPrice: this.getCurrentSubPrice(),
                            giftSender: o.createElement(P._21, {
                                bold: !0,
                                type: P._26.Span
                            }, this.props.giftSender || ""),
                            giftEndDate: this.getFormattedGiftEndDate()
                        }, "BalloonSubbedUser"),
                        tier1PricePerMonth: Object(s.d)("{price} / Month", {
                            price: this.props.subscriptionProducts[0].price
                        }, "BalloonSubbedUser"),
                        allSubscriptions: Object(s.d)("All Paid Subscriptions", "BalloonSubbedUser")
                    }
                }, t.prototype.getFormattedGiftUpgradeStartDate = function() {
                    var e = "";
                    if (this.props.giftPaidUpgrade && this.props.giftPaidUpgrade.startsAt) try {
                        e = Object(s.c)(new Date(this.props.giftPaidUpgrade.startsAt), {
                            month: "long",
                            day: "numeric"
                        })
                    } catch (t) {
                        s.i.debug(t, "There was an error formatting gift upgrade start date."), e = ""
                    }
                    return e
                }, t.prototype.getFormattedGiftEndDate = function() {
                    var e = "";
                    if (this.props.giftSubEndDate) try {
                        e = Object(s.c)(new Date(this.props.giftSubEndDate), {
                            month: "long",
                            day: "numeric"
                        })
                    } catch (t) {
                        s.i.debug(t, "There was an error formatting gift end date."), e = ""
                    }
                    return e
                }, t.prototype.getCurrentSubPrice = function() {
                    switch (this.props.subbedTier) {
                        case "1000":
                            return this.props.subscriptionProducts[0].price;
                        case "2000":
                            return this.props.subscriptionProducts[1].price;
                        case "3000":
                            return this.props.subscriptionProducts[2].price;
                        default:
                            return this.props.subscriptionProducts[0].price
                    }
                }, t = a.__decorate([Object(b.c)("BalloonSubbedUser")], t)
            }(o.Component),
            q = V,
            W = (n(811), n(812));
        n.d(t, "a", function() {
            return z
        }), n.d(t, "b", function() {
            return Q
        });
        var z = "prime",
            $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isSubscribed: !1,
                        activeTierPrice: z,
                        subbedTier: null,
                        subData: null,
                        inPrimeRegion: !1,
                        isNonStandardSub: !1,
                        isGiftSub: !1,
                        hasReconciledUser: !1,
                        subGiftingEnabled: !1
                    }, t.modalLevel = "top_page", t.reportSubMenuAction = function(e) {
                        Object(N.b)({
                            action: e.action || "",
                            channelLogin: t.props.channelLogin || "",
                            channelID: t.props.data && t.props.data.user.id,
                            checkoutButtonTier: e.checkoutButtonTier || t.state.activeTierPrice.slice(),
                            hasSubCredit: !!t.props.data.user.self && t.props.data.user.self.canPrimeSubscribe,
                            hostChannelID: t.props.hostChannelID,
                            hostChannelLogin: t.props.hostChannelLogin,
                            isMenuOpen: !(e.action === N.a.OpenSubMenu),
                            sub_location: "channel_page",
                            modal: !t.state.isSubscribed,
                            modalLevel: t.state.isSubscribed ? "" : t.modalLevel.slice(),
                            showPrimeContent: t.state.inPrimeRegion,
                            giftRecipient: e.giftRecipient || null
                        }), !e.modalLevel || e.action !== N.a.ClickMoreSubOptions && e.action !== N.a.ClickBack || (t.modalLevel = e.modalLevel, t.setState({
                            activeTierPrice: z
                        }))
                    }, t.handleMenuToggle = function(e) {
                        t.reportSubMenuAction({
                            action: e ? N.a.CloseSubMenu : N.a.OpenSubMenu
                        })
                    }, t.onSelectTierTab = function(e) {
                        t.state.activeTierPrice !== e && t.setState({
                            activeTierPrice: e
                        })
                    }, t.onSubscribedWithPrime = function() {
                        t.reportSubMenuAction({
                            action: N.a.SubWithPrime
                        }), t.modalLevel = "", t.setState({
                            isSubscribed: !0,
                            subbedTier: d.a.Prime
                        }), Object(m.d)(W, {
                            login: t.props.channelLogin
                        }, function(e) {
                            return e.user && e.user.self && (e.user.self.canPrimeSubscribe = !1, e.user.self.subscriptionBenefit = {
                                id: Object(f.a)(),
                                purchasedWithPrime: !0,
                                tier: z,
                                endsAt: null,
                                paidUpgrade: null,
                                gift: {
                                    isGift: !1,
                                    gifter: null,
                                    __typename: "SubscriptionGift"
                                },
                                __typename: "SubscriptionBenefit"
                            }), e
                        })
                    }, t.setMessages = function() {
                        var e;
                        e = t.state.subGiftingEnabled ? Object(s.d)("Gift A Sub", "SubscribeButton") : Object(s.d)("Subscribed", "SubscribeButton"), t.messages = {
                            subscribe: t.props.hostChannelID ? Object(s.d)("Subscribe to {username}", {
                                username: t.props.data.user.displayName
                            }, "SubscribeButton") : Object(s.d)("Subscribe", "SubscribeButton"),
                            subscribed: t.props.hostChannelID ? Object(s.d)("Subscribed to {username}", {
                                username: t.props.data.user.displayName
                            }, "SubscribeButton") : e,
                            discountMessage: Object(s.d)("Get 50% off the first month of any paid Subscription", "SubscribeButton")
                        }
                    }, t.setPromotionData = function(e) {
                        if (t.state) {
                            var n = Object.assign({}, t.state.subData);
                            if (null !== n) {
                                for (var i = [], r = 0; r < 3; r++) {
                                    var a = Object.assign({}, n.subscriptionProducts[r]);
                                    a.self = e[r].self, i.push(a)
                                }
                                n.subscriptionProducts = i, t.setState({
                                    subData: n
                                })
                            }
                        }
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.getGiftingExperimentAssignment()
                }, t.prototype.componentDidMount = function() {
                    this.props.reportInteractive && this.isUserDataReady(this.props) && this.props.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.channelLogin && !this.isUserDataReady(this.props) || !this.props.updateContainerWidth || this.props.updateContainerWidth(), this.props.reportInteractive && this.isUserDataReady(this.props) && this.props.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (this.isUserDataReady(e) && e.pubsub.messages.subscriptionInfo !== this.props.pubsub.messages.subscriptionInfo && this.props.data.refetch(), this.props.channelLogin !== e.channelLogin && this.setState({
                            subData: null,
                            isSubscribed: !1,
                            hasReconciledUser: !1
                        }), this.isUserDataReady(e) && this.hasSubscriptionProducts(e)) {
                        if (!this.state.inPrimeRegion && e.data.requestInfo && Object(p.b)(e.data.requestInfo.countryCode) && this.setState({
                                inPrimeRegion: !0
                            }), e.data.currentUser && this.isOwnChannel(e)) return void this.setState({
                            hasReconciledUser: !0
                        });
                        if (this.setState({
                                subData: e.data.user,
                                isNonStandardSub: 1 === e.data.user.subscriptionProducts.length
                            }), e.data.user.subscriptionProducts.some(this.isSubscriptionProductInvalid) && this.setState({
                                isNonStandardSub: !0
                            }), e.data.currentUser && e.data.user.self)
                            if (e.data.user.self.subscriptionBenefit) {
                                var t = e.data.user.self.subscriptionBenefit.purchasedWithPrime ? z : e.data.user.self.subscriptionBenefit.tier;
                                this.modalLevel = "";
                                var n = e.data.user.self.subscriptionBenefit.gift.isGift;
                                this.setState({
                                    isSubscribed: !0,
                                    subbedTier: t,
                                    hasReconciledUser: !0,
                                    isGiftSub: n
                                })
                            } else this.setState({
                                isSubscribed: !1,
                                hasReconciledUser: !0
                            });
                        else this.setState({
                            hasReconciledUser: !0
                        })
                    }
                }, t.prototype.render = function() {
                    if (!this.shouldRender() || !this.hasSubscriptionProducts(this.props)) return null;
                    if (this.setMessages(), this.props.data.currentUser && this.state.isSubscribed && this.state.isNonStandardSub) return o.createElement(P.u, {
                        disabled: !0,
                        ariaLabel: this.messages.subscribed,
                        icon: P._9.Star
                    }, this.messages.subscribed);
                    var e = this.state.subbedTier === d.a.Prime ? P._9.Crown : P._9.Star,
                        t = this.state.isSubscribed ? this.messages.subscribed : this.messages.subscribe,
                        n = this.state.isSubscribed ? "subscribed-button" : "subscribe-button",
                        i = o.createElement(P.u, {
                            "data-a-target": n,
                            "data-test-selector": "subscribe-button__dropdown",
                            ariaLabel: t,
                            type: this.state.isSubscribed ? P.z.Success : P.z.Default,
                            dropdown: !0,
                            icon: this.state.isSubscribed ? e : void 0
                        }, t),
                        r = this.props.hostChannelID ? P.q.TopLeft : P.q.BottomRight;
                    return o.createElement(l.a, {
                        onToggle: this.handleMenuToggle
                    }, i, o.createElement(P.p, {
                        size: P.r.Large,
                        direction: r,
                        "data-a-target": "sub-balloon"
                    }, this.renderBalloonContent()))
                }, t.prototype.renderBalloonContent = function() {
                    if (!this.state.subData) return s.i.debug("NOT rendering sub balloon; sub data not yet ready", {
                        state: this.state
                    }), null;
                    if (s.i.debug("rendering sub balloon", {
                            state: this.state
                        }), this.props.data.currentUser) {
                        if (this.state.isSubscribed) return o.createElement(q, {
                            authToken: this.props.authToken,
                            canPrimeSubscribe: !!this.props.data.user.self && this.props.data.user.self.canPrimeSubscribe,
                            channelDisplayName: this.state.subData.displayName,
                            onSelectTierTab: this.onSelectTierTab,
                            reportSubMenuAction: this.reportSubMenuAction,
                            subbedTier: this.state.subbedTier,
                            isNonStandardSub: this.state.isNonStandardSub,
                            subscriptionProducts: this.state.subData.subscriptionProducts,
                            onSubscribedWithPrime: this.onSubscribedWithPrime,
                            userHasPrime: this.props.data.currentUser.hasPrime,
                            userHasGiftSub: this.state.isGiftSub,
                            subLogin: this.state.subData.login,
                            giftSubEndDate: this.props.data.user.self && this.props.data.user.self.subscriptionBenefit ? this.props.data.user.self.subscriptionBenefit.endsAt : void 0,
                            giftPaidUpgrade: this.props.data.user.self && this.props.data.user.self.subscriptionBenefit && this.props.data.user.self.subscriptionBenefit.paidUpgrade ? this.props.data.user.self.subscriptionBenefit.paidUpgrade : void 0,
                            giftSender: this.getGiftSender()
                        });
                        var e = null;
                        return this.hasDiscount() && (e = o.createElement(P.U, {
                            className: "tw-subscription-modal__discount-bar"
                        }, o.createElement(P._21, null, this.messages.discountMessage))), o.createElement(P.U, null, e, o.createElement(H, {
                            authToken: this.props.authToken,
                            channelDisplayName: this.state.subData.displayName,
                            channelLogin: this.props.channelLogin,
                            canPrimeSubscribe: !!this.props.data.user.self && this.props.data.user.self.canPrimeSubscribe,
                            inPrimeRegion: this.state.inPrimeRegion,
                            isNonStandardSub: this.state.isNonStandardSub,
                            onSelectTierTab: this.onSelectTierTab,
                            onSubscribedWithPrime: this.onSubscribedWithPrime,
                            reportSubMenuAction: this.reportSubMenuAction,
                            subLogin: this.state.subData.login,
                            subscriptionProducts: this.state.subData.subscriptionProducts,
                            userHasPrime: this.props.data.currentUser.hasPrime,
                            setPromotionData: this.setPromotionData
                        }))
                    }
                    return o.createElement(H, {
                        authToken: this.props.authToken,
                        channelDisplayName: this.state.subData.displayName,
                        channelLogin: this.props.channelLogin,
                        canPrimeSubscribe: !!this.props.data.user.self && this.props.data.user.self.canPrimeSubscribe,
                        inPrimeRegion: this.state.inPrimeRegion,
                        isNonStandardSub: this.state.isNonStandardSub,
                        onSelectTierTab: this.onSelectTierTab,
                        onSubscribedWithPrime: this.onSubscribedWithPrime,
                        reportSubMenuAction: this.reportSubMenuAction,
                        subLogin: this.state.subData.login,
                        subscriptionProducts: this.state.subData.subscriptionProducts,
                        userHasPrime: !1,
                        setPromotionData: this.setPromotionData
                    })
                }, t.prototype.hasSubscriptionProducts = function(e) {
                    return e.data.user.subscriptionProducts && e.data.user.subscriptionProducts.length > 0
                }, t.prototype.shouldRender = function() {
                    return !!this.isUserDataReady(this.props) && (!this.hasSubscriptionProducts(this.props) || !!this.isSubscriptionReady())
                }, t.prototype.isUserDataReady = function(e) {
                    return e.data && e.data.user && !e.data.loading && !e.data.error
                }, t.prototype.isOwnChannel = function(e) {
                    return e.data.user.id === (e.data.currentUser && e.data.currentUser.id)
                }, t.prototype.isSubscriptionReady = function() {
                    return this.state.subData && this.state.hasReconciledUser
                }, t.prototype.getGiftSender = function() {
                    return this.state.isGiftSub && this.props.data.user.self && this.props.data.user.self.subscriptionBenefit && this.props.data.user.self.subscriptionBenefit.gift.isGift ? this.props.data.user.self.subscriptionBenefit.gift.gifter.displayName : null
                }, t.prototype.getGiftingExperimentAssignment = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return a.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    e = "no", n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, s.n.experiments.getAssignment("TWILIGHT_SUB_GIFTING")];
                                case 2:
                                    return e = n.sent(), [3, 4];
                                case 3:
                                    return t = n.sent(), e = "no", [3, 4];
                                case 4:
                                    return this.setState({
                                        subGiftingEnabled: "yes" === e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.isSubscriptionProductInvalid = function(e) {
                    return !e.emoteSetID
                }, t.prototype.isSubscriptionDiscountReady = function(e) {
                    return !(!e || !e.subData) && void 0 !== e.subData.subscriptionProducts[0].self
                }, t.prototype.hasDiscount = function() {
                    var e = this.state;
                    return !!this.isSubscriptionDiscountReady(e) && (!(!e || !e.subData) && Object(A.b)(e.subData.subscriptionProducts))
                }, t = a.__decorate([Object(c.a)(W, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    }
                }), Object(u.a)([{
                    topic: function(e) {
                        return Object(h.n)(e.data.currentUser && e.data.currentUser.id || "")
                    },
                    mapMessageTypesToProps: {
                        "*": "subscriptionInfo"
                    },
                    skip: function(e) {
                        return !(e.data && !e.data.loading && !e.data.error && e.data.currentUser)
                    }
                }])], t)
            }(o.Component),
            Q = $
    },
    773: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = {
            Prime: "prime",
            Tier1: "1000",
            Tier2: "2000",
            Tier3: "3000"
        }
    },
    774: function(e, t, n) {
        "use strict";

        function i(e) {
            return "$" + (e / 100).toFixed(2).toString()
        }

        function r(e) {
            if (e[0].self && e[1].self && e[2].self) {
                if (e[0].self.isEligibleForDiscount) return !0;
                if (e[1].self.isEligibleForDiscount) return !0;
                if (e[2].self.isEligibleForDiscount) return !0
            }
            return !1
        }
        t.a = i, t.b = r
    },
    780: function(e, t, n) {
        "use strict";
        var i = n(0),
            r = n(1),
            a = n(2),
            o = n(763),
            s = n(3),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onGiftSelect = function() {
                        t.props.onGiftSelect && t.props.onGiftSelect()
                    }, t.onSelectTierTab = function(e) {
                        t.props.onSelectTierTab && t.props.onSelectTierTab(e)
                    }, t.reportSubMenuAction = function(e) {
                        t.props.reportSubMenuAction && t.props.reportSubMenuAction(e)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(s.U, null, r.createElement(s.U, {
                        display: s.H.Flex,
                        justifyContent: s.T.Between,
                        alignItems: s.c.Center,
                        fullWidth: !0
                    }, r.createElement(s._21, {
                        bold: !0,
                        type: s._26.H5
                    }, Object(a.d)("Choose A Gift Subscription", "GiftTierTabs")), r.createElement(s.u, {
                        type: s.z.Text,
                        icon: s._9.AngleLeft,
                        onClick: this.props.onBack,
                        "data-test-selector": "sub-gift-select-back-button"
                    }, r.createElement(s.U, {
                        alignItems: s.c.Center,
                        display: s.H.InlineFlex
                    }, r.createElement(s._21, null, Object(a.d)("Back", "GiftTierTabs"))))), r.createElement(o.a, {
                        isGift: !0,
                        giftRecipient: this.props.giftRecipient,
                        onGiftSelect: this.onGiftSelect,
                        channelDisplayName: this.props.channelDisplayName,
                        subscriptionProducts: this.props.subscriptionProducts,
                        onSelectTierTab: this.onSelectTierTab,
                        reportSubMenuAction: this.reportSubMenuAction,
                        userHasPrime: !1,
                        canPrimeSubscribe: !1,
                        isSubscribed: !1
                    }))
                }, t
            }(r.Component),
            c = l;
        n.d(t, !1, function() {
            return "sub-gift-select-back-button"
        }), n.d(t, "a", function() {
            return c
        })
    },
    783: function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!e) return void r.i.warn("[onPopupClose] Attempted to observe a window that failed to open.");
            var n = setInterval(function() {
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
            }, 500)
        }
        t.a = i;
        var r = n(2)
    },
    784: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return r.__awaiter(this, void 0, void 0, function() {
                var n, i, a, l, c;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            n = "https://api.twitch.tv/api/premium/credit/spend_token?channel_id=" + e, i = 1, r.label = 1;
                        case 1:
                            if (!(i <= s)) return [3, 7];
                            r.label = 2;
                        case 2:
                            return r.trys.push([2, 5, , 6]), [4, fetch(n, {
                                method: "POST",
                                headers: {
                                    "Client-ID": o.n.config.legacyClientID,
                                    Accept: "application/json; charset=UTF-8",
                                    "content-type": "application/json; charset=UTF-8",
                                    Authorization: "OAuth " + t
                                }
                            })];
                        case 3:
                            return a = r.sent(), [4, a.body];
                        case 4:
                            return l = r.sent(), [2, l];
                        case 5:
                            if (c = r.sent(), i === s) throw c;
                            return [3, 6];
                        case 6:
                            return ++i, [3, 1];
                        case 7:
                            return [2]
                    }
                })
            })
        }
        var r = n(0),
            a = n(1),
            o = n(2),
            s = 3,
            l = n(246),
            c = n(3),
            u = "subscribe-button__subscribe-with-prime",
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isSubscribing: !1,
                        primeSubFailure: !0
                    }, t.handleStartPrimeTrialClick = function() {
                        t.props.reportSubMenuAction({
                            action: l.a.ClickSignupForPrime
                        })
                    }, t.handleSubWithPrimeClick = function() {
                        t.setState({
                            isSubscribing: !0
                        }, function() {
                            return r.__awaiter(t, void 0, void 0, function() {
                                var e;
                                return r.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return t.trys.push([0, 3, 4, 5]), this.props.authToken && this.props.userHasPrime && this.props.subLogin ? [4, i(this.props.subLogin, this.props.authToken)] : [3, 2];
                                        case 1:
                                            t.sent(), this.props.onSubscribedWithPrime(), t.label = 2;
                                        case 2:
                                            return [3, 5];
                                        case 3:
                                            return e = t.sent(), o.i.error(e, "Failed to subscribe with Prime", {
                                                subLogin: this.props.subLogin
                                            }), this.setState({
                                                isSubscribing: !1,
                                                primeSubFailure: !0
                                            }), [3, 5];
                                        case 4:
                                            return this.setState({
                                                isSubscribing: !1
                                            }), [7];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.setMessages()
                }, t.prototype.render = function() {
                    var e = this.props.isSubscribedWithPrime && this.props.canPrimeSubscribe;
                    return this.props.userHasPrime ? this.props.isSubscribed && !e ? a.createElement(c.u, r.__assign({
                        ariaLabel: this.messages.subscribed,
                        "data-test-selector": u,
                        disabled: !0,
                        icon: c._9.Crown
                    }, Object(c._39)(this.props)), this.messages.subscribed) : this.props.canPrimeSubscribe ? a.createElement(c.u, r.__assign({
                        ariaLabel: this.messages.subscribeFree,
                        "data-test-selector": u,
                        disabled: this.state.isSubscribing,
                        icon: c._9.Crown,
                        state: this.state.isSubscribing ? c.y.Loading : c.y.Default,
                        onClick: this.handleSubWithPrimeClick
                    }, Object(c._39)(this.props)), e ? this.messages.resubscribeFree : this.messages.subscribeFree) : a.createElement(c.u, r.__assign({
                        ariaLabel: this.messages.primeSubNotAvailable,
                        "data-test-selector": u,
                        disabled: !0,
                        icon: c._9.Crown
                    }, Object(c._39)(this.props)), this.messages.primeSubNotAvailable) : a.createElement(c.u, r.__assign({
                        ariaLabel: this.messages.startPrimeTrial,
                        "data-test-selector": u,
                        icon: c._9.Crown,
                        linkTo: o.a.tryPrimeURI,
                        onClick: this.handleStartPrimeTrialClick
                    }, Object(c._39)(this.props), {
                        targetBlank: !0
                    }), this.messages.startPrimeTrial)
                }, t.prototype.setMessages = function() {
                    this.messages = {
                        subscribed: Object(o.d)("Subscribed", "SubscribeWithPrime"),
                        startPrimeTrial: Object(o.d)("Start Your Free Trial", "SubscribeWithPrime"),
                        primeSubNotAvailable: Object(o.d)("Not yet!", "SubscribeWithPrime"),
                        subscribeFree: Object(o.d)("Subscribe Free", "SubscribeWithPrime"),
                        resubscribeFree: Object(o.d)("Resubscribe Free", "SubscribeWithPrime")
                    }
                }, t
            }(a.Component),
            p = d;
        n.d(t, !1, function() {
            return u
        }), n.d(t, "a", function() {
            return p
        })
    },
    786: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_ReportReasons"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "content"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ReportContentType"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "reportReasons"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "content"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "content"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 118
            }
        };
        n.loc.source = {
            body: "query ReportUserModal_ReportReasons($content: ReportContentType!) {\n  reportReasons(content: $content) {\n    id\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    787: function(e, t) {},
    788: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_UserCommunities"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "userId"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "user"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "userId"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "directories"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "displayName"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "directoryType"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
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
                end: 201
            }
        };
        n.loc.source = {
            body: "query ReportUserModal_UserCommunities($userId: ID!) {\n  user(id: $userId) {\n    id\n    directories {\n      nodes {\n        id\n        name\n        displayName\n        directoryType\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    789: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_ReportUserCommunity"
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
                                value: "ReportUserInCommunityInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "reportUserInCommunity"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "user"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 157
            }
        };
        n.loc.source = {
            body: "mutation ReportUserModal_ReportUserCommunity($input: ReportUserInCommunityInput!) {\n  reportUserInCommunity(input: $input) {\n    user {\n      id\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    790: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "ReportUserModal_ReportUser"
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
                                value: "ReportContentInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "reportContent"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "contentID"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 120
            }
        };
        n.loc.source = {
            body: "mutation ReportUserModal_ReportUser($input: ReportContentInput!) {\n  reportContent(input: $input) {\n    contentID\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    794: function(e, t) {},
    795: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.Games = "GAMES", e.Communities = "COMMUNITIES", e.Creative = "CREATIVE"
        }(i || (i = {}))
    },
    796: function(e, t, n) {
        "use strict";

        function i(e) {
            return e || (e = navigator.userAgent), !!r.exec(e)
        }
        t.a = i;
        var r = /\scurse\/\d/
    },
    797: function(e, t, n) {
        "use strict";
        var i = n(0),
            r = n(1),
            a = n(2),
            o = n(7),
            s = n(5),
            l = n(3),
            c = n(806),
            u = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        canGift: !1
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.data && e.data.user && e.data.user.self ? this.setState({
                        canGift: e.data.user.self.canGift
                    }) : this.setState({
                        canGift: !1
                    })
                }, t.prototype.render = function() {
                    return r.createElement(l.u, {
                        targetBlank: !0,
                        disabled: !this.state.canGift,
                        onClick: this.props.onClick,
                        linkTo: this.props.checkoutURL,
                        "data-test-selector": "gift-subscribe-button"
                    }, Object(a.d)("Gift Subscription", "GiftSubscribeButton"))
                }, t = i.__decorate([Object(s.c)("GiftSubscribeButton"), Object(o.a)(c, {
                    options: function(e) {
                        return {
                            variables: {
                                recipientLogin: e.giftRecipient,
                                subProductId: e.subProductId
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.giftRecipient || !e.subProductId
                    }
                })], t)
            }(r.Component),
            d = u;
        n.d(t, !1, function() {
            return "gift-subscribe-button"
        }), n.d(t, "a", function() {
            return d
        })
    },
    800: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var i = n(0),
            r = n(1),
            a = (n.n(r), n(3)),
            o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isDraggingOver: !1
                    }, t.refHandler = function(e) {
                        t.fileInputRef = e
                    }, t.onFilePickerClick = function() {
                        t.fileInputRef.click()
                    }, t.onDragOver = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !0
                        })
                    }, t.onDragLeave = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        })
                    }, t.onFileInputChange = function(e) {
                        e.preventDefault(), t.finalizeSelections(e.target.files)
                    }, t.onFileDrop = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        }), t.finalizeSelections(e.dataTransfer.files)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement("div", {
                        "data-test-selector": "file-picker-root",
                        onClick: this.onFilePickerClick,
                        onDragLeave: this.onDragLeave,
                        onDragOver: this.onDragOver,
                        onDrop: this.onFileDrop
                    }, r.createElement(a.I, {
                        dragOver: this.state.isDraggingOver
                    }, r.createElement(a.P, {
                        display: a.H.Hide
                    }, r.createElement("input", {
                        accept: this.props.allowedFileTypes.join(","),
                        multiple: this.props.multiFile || !1,
                        onChange: this.onFileInputChange,
                        ref: this.refHandler,
                        type: "file"
                    })), this.props.children))
                }, t.prototype.finalizeSelections = function(e) {
                    e && this.props.onFilesSubmitted(Array.from(e))
                }, t
            }(r.Component)
    },
    803: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = Math.floor(e / 3600),
                n = Math.floor((e - 3600 * t) / 60),
                i = e - 3600 * t - 60 * n;
            return t < 10 && (t = "0" + t), n < 10 && (n = "0" + n), i < 10 && (i = "0" + i), t + "h" + n + "m" + i + "s"
        }

        function r(e) {
            return "" === e ? "" : e.startsWith("v") ? e : "v" + e
        }
        t.b = i, t.a = r
    },
    806: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GiftSubscribeButton_Gift_Eligibility"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "recipientLogin"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
                        }
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "subProductId"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                    value: "recipientLogin"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "canGift"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "product"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "subProductId"
                                                }
                                            }
                                        }],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 195
            }
        };
        n.loc.source = {
            body: "query GiftSubscribeButton_Gift_Eligibility($recipientLogin: String, $subProductId: String!) {\n  user(login: $recipientLogin) {\n    id\n    self {\n      canGift(product: $subProductId)\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    807: function(e, t) {},
    808: function(e, t) {},
    809: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelPage_SubscribeButton_Promotion"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "subscriptionProducts"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "isEligibleForDiscount"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "newPrice"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "oldPrice"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "discountType"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "discountType"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
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
                end: 246
            }
        };
        n.loc.source = {
            body: "query ChannelPage_SubscribeButton_Promotion($login: String!) {\n  user(login: $login) {\n    id\n    subscriptionProducts {\n      id\n      self {\n\t\t\t\tisEligibleForDiscount\n\t\t\t\tnewPrice\n\t\t\t\toldPrice\n\t\t\t\tdiscountType\n\t\t\t\tdiscountType\n\t\t\t}\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    810: function(e, t) {},
    811: function(e, t) {},
    812: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelPage_SubscribeButton_User"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "subscriptionProducts"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "price"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "url"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "emoteSetID"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "displayName"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "canPrimeSubscribe"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "subscriptionBenefit"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "purchasedWithPrime"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "tier"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "endsAt"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "paidUpgrade"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "price"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "startsAt"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "gift"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "isGift"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "gifter"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "id"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
                                                            }, {
                                                                kind: "Field",
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "displayName"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
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
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "countryCode"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 673
            }
        };
        n.loc.source = {
            body: "query ChannelPage_SubscribeButton_User($login: String!) {\n  user(login: $login) {\n    id\n    login\n    displayName\n    subscriptionProducts {\n      id\n      price\n      url\n      emoteSetID\n      displayName\n      name\n      emotes {\n        id\n      }\n    }\n    self {\n      canPrimeSubscribe\n      subscriptionBenefit {\n        id\n        purchasedWithPrime\n        tier\n        endsAt\n        paidUpgrade {\n          price\n          startsAt\n        }\n        gift {\n          isGift\n          gifter {\n            id\n            displayName\n          }\n        }\n      }\n    }\n  }\n  currentUser {\n    id\n    login\n    hasPrime\n  }\n  requestInfo {\n    countryCode\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    815: function(e, t, n) {
        "use strict";
        var i, r = n(0),
            a = n(1),
            o = n(2);
        ! function(e) {
            e.On = "on", e.Off = "off", e.StaffOnly = "staff"
        }(i || (i = {}));
        var s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e = o.b.get(this.props.name, i.Off);
                    return e === i.On || e === i.StaffOnly && this.props.isStaff ? a.Children.only(this.props.children) : null
                }, t
            }(a.Component),
            l = s;
        n.d(t, "a", function() {
            return i
        }), n.d(t, !1, function() {
            return s
        }), n.d(t, !1, function() {
            return l
        })
    },
    826: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i = {
            CommunitiesAvatar: "avatar_image",
            CommunitiesCover: "cover_image",
            Default: "encoded_image",
            EventCoverImage: "event_cover_image"
        }
    },
    827: function(e, t, n) {
        "use strict";

        function i(e) {
            return e && "v" === e.charAt(0) ? e.substring(1) : e
        }
        t.a = i
    },
    831: function(e, t, n) {
        "use strict";

        function i() {
            return {
                type: a
            }
        }

        function r() {
            return {
                type: o
            }
        }
        n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return o
        }), t.d = i, t.c = r;
        var a = "header.DIRECTORY_HEADER_EDIT_ENABLED",
            o = "header.DIRECTORY_HEADER_EDIT_DISABLED"
    },
    854: function(e, t, n) {
        "use strict";

        function i(e) {
            return Object(N.bindActionCreators)({
                onClose: P.c
            }, e)
        }
        var r = n(0),
            a = n(1),
            o = n(2),
            s = n(800),
            l = n(3),
            c = (n(967), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(s.a, {
                        allowedFileTypes: this.props.allowedFileTypes,
                        onFilesSubmitted: this.props.processFiles
                    }, a.createElement(l.U, {
                        className: "image-uploader",
                        textAlign: l._22.Center,
                        display: l.H.Flex,
                        flexDirection: l.J.Column,
                        alignItems: l.c.Center,
                        justifyContent: l.T.Center,
                        position: l._2.Relative,
                        fullHeight: !0,
                        fullWidth: !0
                    }, this.renderErrorMessage(), a.createElement(l.U, {
                        position: l._2.Relative
                    }, a.createElement(l.U, {
                        className: "image-uploader__upload-svg--anim-backfill"
                    }, a.createElement(l._8, {
                        asset: l._9.Upload,
                        type: l._10.Alt2,
                        width: 99,
                        height: 76
                    })), a.createElement(l.U, {
                        className: "image-uploader__upload-svg--anim-fill",
                        position: l._2.Absolute,
                        display: this.props.isLoading ? l.H.Block : l.H.Hide,
                        attachTop: !0
                    }, a.createElement(l._8, {
                        asset: l._9.Upload,
                        type: l._10.Brand,
                        width: 99,
                        height: 76
                    }))), this.props.isLoading ? this.renderLoadingState() : this.renderNormalState()))
                }, t.prototype.renderLoadingState = function() {
                    return a.createElement(l.U, {
                        margin: 1,
                        "data-test-selector": "image-uploader-loading"
                    }, a.createElement(l._21, {
                        type: l._26.H4
                    }, Object(o.d)("Uploading", "ImageUploader")))
                }, t.prototype.renderNormalState = function() {
                    var e = Object(o.d)("Browse", "ImageUploader");
                    return a.createElement(l.U, null, a.createElement(l.U, {
                        padding: 1
                    }, a.createElement(l._21, {
                        type: l._26.H4
                    }, Object(o.d)("Drag and drop your image here", "ImageUploader"))), a.createElement(l.U, {
                        margin: {
                            bottom: 2
                        },
                        padding: {
                            x: 1,
                            y: 0
                        },
                        fullWidth: !0,
                        "data-test-selector": "image-uploader-hint"
                    }, a.createElement(l._21, {
                        type: l._26.P,
                        fontSize: l.L.Size7,
                        color: l.F.Alt2
                    }, this.props.hintMessage)), a.createElement(l.U, null, a.createElement(l.u, {
                        ariaLabel: e,
                        type: l.z.Hollow
                    }, e)))
                }, t.prototype.renderErrorMessage = function() {
                    if (this.props.errorMessage) return a.createElement(l.U, {
                        margin: {
                            bottom: 1
                        },
                        "data-test-selector": "image-uploader-error"
                    }, a.createElement(l._21, {
                        type: l._26.H5,
                        color: l.F.Error,
                        bold: !0
                    }, this.props.errorMessage))
                }, t
            }(a.Component)),
            u = n(826),
            d = function(e) {
                return new Promise(function(t, n) {
                    var i = new FileReader;
                    i.onload = function() {
                        var e = p(i.result);
                        t(e)
                    }, i.onerror = function(e) {
                        n(e)
                    }, i.readAsDataURL(e)
                })
            },
            p = function(e) {
                return e.replace(/data:image.*;base64,/, "")
            },
            m = this,
            h = function(e, t, n) {
                return r.__awaiter(m, void 0, void 0, function() {
                    var i, a, o, s, l, c;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return t ? (i = void 0, n ? (l = {}, a = n, [4, d(e)]) : [3, 2]) : [3, 5];
                            case 1:
                                return l[a] = r.sent(), i = l, [3, 4];
                            case 2:
                                return c = {}, o = u.a.Default, [4, d(e)];
                            case 3:
                                c[o] = r.sent(), i = c, r.label = 4;
                            case 4:
                                return [2, i];
                            case 5:
                                return s = new FormData, s.append("files[]", e), [2, s];
                            case 6:
                                return [2]
                        }
                    })
                })
            },
            f = function(e, t) {
                return Object(o.d)("Recommended image size: {imageDimensions} and less than {imageFileMegabytes, number}MB", {
                    imageDimensions: e,
                    imageFileMegabytes: t
                }, "ImageUploader")
            },
            b = function(e, t) {
                return Object(o.d)("Required image size: {imageDimensions} and less than {imageFileMegabytes, number}MB", {
                    imageDimensions: e,
                    imageFileMegabytes: t
                }, "ImageUploader")
            },
            g = function(e) {
                return Object(o.d)("Couldn't upload image. Request returned {statusCode, number}", {
                    statusCode: e
                }, "ImageUploader")
            },
            v = function() {
                return Object(o.d)("File too large.", "ImageUploader")
            },
            y = function() {
                return Object(o.d)("Incompatible format. File must be an image in PNG or JPG format.", "ImageUploader")
            },
            S = n(757),
            k = this,
            _ = function(e, t) {
                return r.__awaiter(k, void 0, void 0, function() {
                    var n;
                    return r.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, S.a.post(e, {
                                    body: t,
                                    credentials: t instanceof FormData ? "include" : void 0
                                })];
                            case 1:
                                if (n = i.sent(), n.status >= 200 && n.status < 300) return [2, n.body];
                                if (n && n.error) throw new Error(JSON.stringify(n.error));
                                if (n && n.requestError) throw new Error(JSON.stringify(n.requestError));
                                throw new Error(g(n.status))
                        }
                    })
                })
            },
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isLoading: !1,
                        errorMessage: "",
                        hintMessage: "",
                        allowedFileTypes: ["image/jpeg", "image/png"]
                    }, t.processFiles = function(e) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, a;
                            return r.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return t = e[0], (this.setState({
                                            errorMessage: "",
                                            isLoading: !0
                                        }), this.isFileTypeAcceptable(t)) ? [3, 1] : (this.setState({
                                            errorMessage: y(),
                                            isLoading: !1
                                        }), [3, 7]);
                                    case 1:
                                        return this.isFileSizeAcceptable(t) ? [3, 2] : (this.setState({
                                            errorMessage: v(),
                                            isLoading: !1
                                        }), [3, 7]);
                                    case 2:
                                        return [4, h(t, this.props.shouldBase64Encode, this.props.base64EncodedPropertyName)];
                                    case 3:
                                        n = r.sent(), r.label = 4;
                                    case 4:
                                        return r.trys.push([4, 6, , 7]), [4, _(this.props.uploadURL, n)];
                                    case 5:
                                        return i = r.sent(), this.setState({
                                            isLoading: !1
                                        }), this.props.onFinishUploading && this.props.onFinishUploading(i, n), [3, 7];
                                    case 6:
                                        return a = r.sent(), this.setState({
                                            errorMessage: a.message,
                                            isLoading: !1
                                        }), [3, 7];
                                    case 7:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = "";
                    e = this.props.isRequiredImageDimensions ? b(this.props.imageDimensions, this.props.maxFileSizeMegabytes) : f(this.props.imageDimensions, this.props.maxFileSizeMegabytes), this.setState({
                        hintMessage: e
                    })
                }, t.prototype.render = function() {
                    return a.createElement(c, {
                        allowedFileTypes: this.state.allowedFileTypes,
                        errorMessage: this.state.errorMessage,
                        hintMessage: this.state.hintMessage,
                        isLoading: this.state.isLoading,
                        processFiles: this.processFiles
                    })
                }, t.prototype.isFileTypeAcceptable = function(e) {
                    return this.state.allowedFileTypes.includes(e.type)
                }, t.prototype.isFileSizeAcceptable = function(e) {
                    var t = 1e6 * this.props.maxFileSizeMegabytes;
                    return e.size <= t
                }, t
            }(a.Component),
            C = n(8),
            N = n(10),
            P = n(49),
            T = n(121),
            D = (n(968), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(l._17, {
                        className: "image-uploader-modal",
                        background: l.m.Base
                    }, a.createElement(E, r.__assign({
                        onFinishUploading: this.props.onClose
                    }, this.props)), a.createElement(T.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(a.Component)),
            O = Object(C.a)(null, i)(D);
        n.d(t, "a", function() {
            return E
        }), n.d(t, "b", function() {
            return O
        })
    },
    873: function(e, t, n) {
        "use strict";

        function i() {
            return {
                isEditingEnabled: !1
            }
        }

        function r(e, t) {
            switch (void 0 === e && (e = i()), t.type) {
                case l.b:
                    return o.__assign({}, e, {
                        isEditingEnabled: !0
                    });
                case l.a:
                    return o.__assign({}, e, {
                        isEditingEnabled: !1
                    });
                default:
                    return e
            }
        }

        function a(e) {
            return e.directoryHeader.isEditingEnabled
        }
        t.a = a;
        var o = n(0),
            s = n(2),
            l = n(831);
        s.n.store.registerReducer("directoryHeader", r)
    },
    881: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                isLoggedIn: Object(v.d)(e)
            }
        }

        function r(e) {
            return Object(f.bindActionCreators)({
                login: function() {
                    return Object(g.f)(b.a.DirectoryFollowButton)
                }
            }, e)
        }

        function a(e) {
            return Object(f.bindActionCreators)({
                onCloseModal: I.c
            }, e)
        }

        function o(e) {
            return {
                isHeaderEditEnabled: Object(Q.a)(e),
                isLoggedIn: Object(v.d)(e)
            }
        }

        function s(e) {
            return Object(f.bindActionCreators)({
                login: function() {
                    return Object(g.f)(b.a.ReportChannel)
                },
                onShowModal: I.d,
                onCloseModal: I.c,
                onEnableDirectoryHeaderEdit: R.d,
                onDisableDirectoryHeaderEdit: R.c
            }, e)
        }
        var l, c = n(0),
            u = n(4),
            d = n(1),
            p = n(11),
            m = n(2),
            h = n(8),
            f = n(10),
            b = n(50),
            g = n(34),
            v = n(18),
            y = n(7),
            S = n(22),
            k = n(13),
            _ = n(5),
            E = n(3),
            C = n(997),
            N = n(998),
            P = n(999),
            T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isFollowing: !1
                    }, t.communityDataLoaded = function() {
                        return t.props.data && !t.props.data.loading && !t.props.data.error && t.props.data.community
                    }, t.toggleFollowing = function() {
                        t.state.isFollowing ? t.unfollowChannel() : t.followChannel(), t.setState(function(e) {
                            return {
                                isFollowing: !e.isFollowing
                            }
                        })
                    }, t.trackResponse = function(e) {
                        if (t.props.data) {
                            var n = "follow" === e ? k.SpadeEventType.CommunityFollow : k.SpadeEventType.CommunityUnfollow;
                            m.n.tracking.track(n, {
                                community_id: t.props.data.community.id,
                                name: t.props.data.community.name,
                                is_official: !1,
                                user_id: t.props.data.currentUser && t.props.data.currentUser.id
                            })
                        }
                    }, t.followChannel = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i = this;
                            return c.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this.props.followCommunity && this.props.data ? (e = c.__assign({}, Object(S.a)({
                                            communityID: this.props.data.community.id
                                        }), {
                                            optimisticResponse: {
                                                followCommunity: {
                                                    __typename: "FollowCommunityPayload",
                                                    community: {
                                                        self: {
                                                            follow: {
                                                                followedAt: (new Date).toISOString(),
                                                                __typename: "CommunityFollow"
                                                            },
                                                            __typename: "CommunitySelfConnection"
                                                        },
                                                        __typename: "Community"
                                                    }
                                                }
                                            }
                                        }), [4, this.props.followCommunity(e)]) : [2];
                                    case 1:
                                        return t = r.sent(), n = function(e) {
                                            return i.trackResponse("follow"), e.community.self.follow && (e.community.self.follow.followedAt = t.data.followCommunity.community.self.follow.followedAt), e
                                        }, Object(S.d)(C, {
                                            name: this.props.directoryName
                                        }, n), [2]
                                }
                            })
                        })
                    }, t.unfollowChannel = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n = this;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.props.unfollowCommunity && this.props.data ? (e = c.__assign({}, Object(S.a)({
                                            communityID: this.props.data.community.id
                                        }), {
                                            optimisticResponse: {
                                                unfollowCommunity: {
                                                    __typename: "UnfollowCommunityPayload",
                                                    follow: null
                                                }
                                            }
                                        }), [4, this.props.unfollowCommunity(e)]) : [2];
                                    case 1:
                                        return i.sent(), t = function(e) {
                                            return n.trackResponse("unfollow"), e.community.self.follow = null, e
                                        }, Object(S.d)(C, {
                                            name: this.props.directoryName
                                        }, t), [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    e.data && !e.data.loading && !e.data.error && e.data.community && this.setState({
                        isFollowing: e.data.community.self && null !== e.data.community.self.follow
                    })
                }, t.prototype.render = function() {
                    var e = Object(m.d)("Follow", "DirectoryFollowButton");
                    return this.props.isLoggedIn ? !this.props.data || this.props.data.loading ? d.createElement(E.U, {
                        margin: {
                            left: 1
                        }
                    }, d.createElement(E._1, {
                        width: 70,
                        height: 30
                    })) : this.communityDataLoaded() ? this.state.isFollowing ? d.createElement(E.U, {
                        display: E.H.Flex,
                        margin: {
                            left: 1
                        },
                        className: "directory-follow-btn"
                    }, d.createElement(E.v, {
                        ariaLabel: Object(m.d)("Unfollow", "DirectoryFollowButton"),
                        onClick: this.toggleFollowing,
                        "data-a-target": "directory-unfollow-button",
                        "data-test-selector": "unfollow-button",
                        icon: E._9.Heart,
                        statusAlertIcon: E._9.Unheart
                    })) : d.createElement(E.U, {
                        margin: {
                            left: 1
                        }
                    }, d.createElement(E.u, c.__assign({
                        ariaLabel: e,
                        "data-a-target": "directory-follow-button",
                        "data-test-selector": "follow-button",
                        icon: E._9.Heart,
                        onClick: this.toggleFollowing
                    }, Object(E._39)(this.props)), e)) : null : d.createElement(E.U, {
                        margin: {
                            left: 1
                        }
                    }, d.createElement(E.u, {
                        ariaLabel: e,
                        icon: E._9.Heart,
                        onClick: this.props.login,
                        "data-a-target": "directory-follow-button"
                    }, e))
                }, t.prototype.reportInteractive = function() {
                    this.props.isLoggedIn ? this.props.directoryName && !this.communityDataLoaded() || this.props.latencyTracking.reportInteractive() : this.props.latencyTracking.reportInteractive()
                }, t = c.__decorate([Object(y.a)(C, {
                    options: function(e) {
                        return {
                            variables: {
                                name: e.directoryName
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.isLoggedIn || !e.directoryName
                    }
                }), Object(y.a)(N, {
                    name: "followCommunity"
                }), Object(y.a)(P, {
                    name: "unfollowCommunity"
                }), Object(_.c)("DirectoryFollowButton")], t)
            }(d.Component),
            D = T,
            O = Object(h.a)(i, r)(D),
            w = n(815),
            U = n(124),
            F = n(349),
            I = n(49),
            R = n(831),
            j = n(359),
            x = n(769),
            L = n(762),
            G = n(759),
            A = n(30),
            M = n(121),
            B = (n(1e3), n(1001)),
            H = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.tosBanCommunity = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.props.tosBanCommunity ? (e = c.__assign({}, Object(S.a)({
                                            communityID: this.props.communityID
                                        }), {
                                            optimisticResponse: {
                                                tosBanCommunity: {
                                                    community: {
                                                        id: this.props.communityID,
                                                        __typename: "Community"
                                                    },
                                                    __typename: "TosBanCommunityPayload"
                                                }
                                            }
                                        }), [4, this.props.tosBanCommunity(e)]) : [2];
                                    case 1:
                                        return t.sent(), this.props.onCloseModal(), [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return d.createElement(E.P, {
                        position: E._2.Relative
                    }, d.createElement(E._17, {
                        background: E.m.Base,
                        className: "community-ban-modal"
                    }, d.createElement(E.U, {
                        padding: 2
                    }, d.createElement(E.U, {
                        margin: {
                            bottom: 2
                        }
                    }, d.createElement(E._21, {
                        type: E._26.H4
                    }, Object(m.d)("Are you sure you want to ban {name}?", {
                        name: this.props.communityName
                    }, "CommunityBanModal"))), d.createElement(E._17, {
                        borderTop: !0
                    }, d.createElement(E.U, {
                        padding: {
                            top: 2
                        },
                        textAlign: E._22.Center
                    }, d.createElement(E.U, {
                        display: E.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, d.createElement(E.u, {
                        type: E.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(m.d)("Cancel", "CommunityBanModal"))), d.createElement(E.U, {
                        display: E.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, d.createElement(E.u, {
                        onClick: this.tosBanCommunity,
                        "data-test-selector": "ban-button"
                    }, Object(m.d)("Ban", "CommunityBanModal")))))), d.createElement(M.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(d.Component),
            V = Object(A.compose)(Object(y.a)(B, {
                name: "tosBanCommunity"
            }))(H),
            q = Object(h.a)(null, a)(V),
            W = n(1002),
            z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingCommunity: !1
                    }, t.openReportModal = function() {
                        t.props.isLoggedIn ? t.props.onShowModal(x.a, {
                            onClose: t.handleReportModalClose,
                            reportContext: {
                                contentID: t.props.data.community.id,
                                contentType: G.a.Community,
                                targetUserID: t.props.data.community.owner.id,
                                extra: t.props.communityName
                            },
                            title: Object(m.d)("Report {communityName}", {
                                communityName: t.props.communityName
                            }, "CommunitiesSettingsCog")
                        }) : t.props.login()
                    }, t.openBanModal = function() {
                        t.props.onShowModal(q, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName
                        })
                    }, t.onEditModeToggle = function() {
                        t.props.isHeaderEditEnabled ? t.props.onDisableDirectoryHeaderEdit() : (m.n.history.push(Object(F.a)(t.props.communityName) + "/details"), t.props.onEnableDirectoryHeaderEdit())
                    }, t.handleReportModalClose = function(e) {
                        (e === L.b.MutationError || e === L.b.Success) && t.props.history.push("/")
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && this.props.data.error ? null : d.createElement(E.U, {
                        position: E._2.Relative
                    }, d.createElement(j.a, null, d.createElement(E.v, {
                        ariaLabel: Object(m.d)("Settings", "CommunitiesSettingsCog"),
                        icon: E._9.Gear
                    }), d.createElement(E.p, {
                        direction: E.q.BottomRight,
                        size: E.r.ExtraSmall,
                        offsetX: "0.5rem"
                    }, this.renderModerationInteractable(), this.renderEditInteractable(), d.createElement(E.S, {
                        onClick: this.openReportModal,
                        "data-test-selector": "report-selector"
                    }, d.createElement(E.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Report", "CommunitiesSettingsCog"))), this.renderBanInteractable())))
                }, t.prototype.renderEditInteractable = function() {
                    return !this.props.data || this.props.data.loading ? null : this.props.data.community && !this.props.data.community.self.permissions.editing ? null : d.createElement(E.S, {
                        onClick: this.onEditModeToggle,
                        "data-test-selector": "edit-selector"
                    }, d.createElement(E.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Edit", "CommunitiesSettingsCog")))
                }, t.prototype.renderModerationInteractable = function() {
                    return !this.props.data || this.props.data.loading ? null : this.props.data.community && !this.props.data.community.self.permissions.banning ? null : d.createElement(E.S, {
                        linkTo: Object(U.a)("/communities/" + this.props.communityName + "/moderation/log"),
                        "data-test-selector": "moderation-selector"
                    }, d.createElement(E.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Moderation", "CommunitiesSettingsCog")))
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data && !this.props.data.loading && this.props.data.community && this.props.data.community.id && this.props.data && this.props.data.currentUser && this.props.data.currentUser.roles && (this.props.data.currentUser.roles.isStaff || this.props.data.currentUser.roles.isSiteAdmin) ? d.createElement(E.S, {
                        onClick: this.openBanModal,
                        "data-test-selector": "ban-selector"
                    }, d.createElement(E.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(m.d)("Ban", "CommunitiesSettingsCog"))) : null
                }, t = c.__decorate([Object(y.a)(W, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.communityName)
                            }
                        }
                    },
                    skip: function(e) {
                        return !e.isLoggedIn || !e.communityName
                    }
                }), Object(_.c)("SettingsCog", {
                    autoReportInteractive: !0
                })], t)
            }(d.Component),
            $ = z,
            Q = n(873),
            K = Object(h.a)(o, s)(Object(p.f)($)),
            Y = n(904),
            J = n(795);
        n(1003);
        ! function(e) {
            e[e.DirectoryPage = 0] = "DirectoryPage", e[e.DirectoryVideosPage = 1] = "DirectoryVideosPage", e[e.DirectoryClipsPage = 2] = "DirectoryClipsPage", e[e.DirectoryDetailsPage = 3] = "DirectoryDetailsPage"
        }(l || (l = {}));
        var X = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return d.createElement(E.U, {
                        className: "directory-tabs"
                    }, d.createElement(E.U, {
                        display: E.H.Flex,
                        justifyContent: E.T.Between,
                        flexWrap: E.K.NoWrap,
                        fullHeight: !0
                    }, d.createElement(E.U, {
                        display: E.H.Flex,
                        alignItems: E.c.Stretch,
                        flexShrink: 0,
                        flexWrap: E.K.NoWrap
                    }, this.renderTabs(), this.renderGameDetailsTab()), d.createElement(E.U, {
                        display: E.H.Flex,
                        alignItems: E.c.Center,
                        flexShrink: 0,
                        flexWrap: E.K.NoWrap,
                        padding: {
                            x: 2
                        }
                    }, this.renderSettingsCog(), this.renderFollowButton())))
                }, t.prototype.renderTabs = function() {
                    var e = this,
                        t = this.props.directoryType === J.a.Games ? Object(F.d)(this.props.directoryName) : Object(F.a)(this.props.directoryName);
                    return this.getDirectoryTabs().map(function(n, i) {
                        var r = n.label.replace(/ /g, "-").toLowerCase(),
                            a = u("directory-tabs__item", (o = {}, o["directory-tabs__item--first"] = 0 === i, o["directory-tabs__item--selected"] = n.isSelected, o));
                        return d.createElement(E.P, {
                            key: "directory-tabs__item--" + n.label,
                            display: E.H.Flex,
                            alignItems: E.c.Center,
                            flexShrink: 0,
                            "data-a-target": "game-directory-" + r + "-tab"
                        }, d.createElement(p.a, {
                            className: a,
                            to: "" + t + n.path
                        }, e.renderTabData(n.label)));
                        var o
                    })
                }, t.prototype.renderTabData = function(e) {
                    return d.createElement(E.U, {
                        padding: {
                            x: 2,
                            y: .5
                        },
                        display: E.H.Flex
                    }, d.createElement(E._21, {
                        type: E._26.Span,
                        fontSize: E.L.Size5
                    }, e))
                }, t.prototype.renderGameDetailsTab = function() {
                    if (!this.props.showGameDetails) return null;
                    var e, t = u("directory-tabs__item", (r = {}, r["directory-tabs__item--selected"] = this.props.activeTab === l.DirectoryDetailsPage, r)),
                        n = Object(m.d)("Game Details", "DirectoryGameTabs"),
                        i = Object(F.d)(this.props.directoryName) + "/details";
                    return e = m.b.get("commerce_gdp_launch", w.a.Off) !== w.a.On ? d.createElement("a", {
                        className: t,
                        href: Object(U.a)(i),
                        target: Object(U.b)() ? "_blank" : ""
                    }, this.renderTabData(n)) : d.createElement(p.a, {
                        className: t,
                        to: i
                    }, this.renderTabData(n)), d.createElement(E.P, {
                        display: E.H.Flex,
                        alignItems: E.c.Center,
                        flexShrink: 0
                    }, e);
                    var r
                }, t.prototype.renderSettingsCog = function() {
                    return this.props.directoryType !== J.a.Communities ? null : d.createElement(K, {
                        communityName: this.props.directoryName
                    })
                }, t.prototype.renderFollowButton = function() {
                    switch (this.props.directoryType) {
                        case J.a.Communities:
                            return d.createElement(O, {
                                directoryName: this.props.directoryName
                            });
                        case J.a.Games:
                            return d.createElement(Y.a, {
                                gameName: this.props.directoryName,
                                src: "directory"
                            });
                        default:
                            return null
                    }
                }, t.prototype.getDirectoryTabs = function() {
                    var e = this;
                    return [{
                        label: Object(m.d)("Live Channels", "DirectoryGameTabs"),
                        path: "",
                        isSelected: this.props.activeTab === l.DirectoryPage,
                        whitelistDirectories: [J.a.Communities, J.a.Games]
                    }, {
                        label: Object(m.d)("Videos", "DirectoryGameTabs"),
                        path: "/videos/all",
                        isSelected: this.props.activeTab === l.DirectoryVideosPage,
                        whitelistDirectories: [J.a.Games]
                    }, {
                        label: Object(m.d)("Clips", "DirectoryGameTabs"),
                        path: "/clips",
                        isSelected: this.props.activeTab === l.DirectoryClipsPage,
                        whitelistDirectories: [J.a.Games]
                    }, {
                        label: Object(m.d)("Details", "DirectoryHeader"),
                        path: "/details",
                        isSelected: this.props.activeTab === l.DirectoryDetailsPage,
                        whitelistDirectories: [J.a.Communities]
                    }].filter(function(t) {
                        return t.whitelistDirectories.includes(e.props.directoryType)
                    })
                }, t = c.__decorate([Object(_.c)("DirectoryGameTabs")], t)
            }(d.Component),
            Z = X;
        n.d(t, !1, function() {
            return "directory-tabs__item"
        }), n.d(t, !1, function() {
            return "directory-tabs__item--first"
        }), n.d(t, !1, function() {
            return "directory-tabs__item--selected"
        }), n.d(t, "a", function() {
            return l
        }), n.d(t, "b", function() {
            return Z
        })
    },
    883: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                isLoggedIn: Object(T.d)(e)
            }
        }

        function r(e) {
            return Object(E.bindActionCreators)({
                login: function() {
                    return Object(P.f)(C.a.ReportHoster)
                },
                showReportUserModal: function(e) {
                    var t = u.__rest(e, []);
                    return Object(N.d)(D.a, t)
                }
            }, e)
        }

        function a() {
            return !!window.Twitch && !!window.Twitch.Player
        }

        function o(e) {
            return {
                theatreModeEnabled: e.ui.theatreModeEnabled,
                isLoggedIn: Object(T.d)(e),
                authToken: Object(T.a)(e)
            }
        }

        function s(e) {
            return Object(E.bindActionCreators)({
                enableTheatreMode: w.k,
                disableTheatreMode: w.j
            }, e)
        }

        function l(e, t, n) {
            if (!e.collectionID && e.videoID) return void t.push("/videos/" + e.videoID);
            if (e.collectionID && e.videoID) {
                if (n && n.currentVideoID && n.currentCollectionID && n.currentVideoID === e.videoID && n.currentCollectionID === e.collectionID) return;
                return void t.push("/videos/" + e.videoID + "?collection=" + e.collectionID)
            }
            if (e.collectionID && !e.videoID) return void t.push("/collections/" + e.collectionID);
            m.i.withCategory("video-player").error(new Error("No collection or video specified from the emitted player transition event."), "No collection or video specified from the emitted player transition event.")
        }
        var c, u = n(0),
            d = n(1),
            p = n(11),
            m = n(2),
            h = n(252),
            f = n(60),
            b = n(13),
            g = n(762),
            v = n(759),
            y = n(771),
            S = n(3),
            k = (n(983), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleReportHosterClick = function() {
                        t.props.isLoggedIn ? t.props.showReportUserModal({
                            onClose: t.handleReportModalClose,
                            reportContext: {
                                contentType: v.a.User,
                                targetUserID: t.props.hostChannelID
                            },
                            title: Object(m.d)("Report {channelDisplayName}", {
                                channelDisplayName: t.props.hostChannelDisplayName
                            }, "VideoPlayerHostingUI")
                        }) : t.props.login()
                    }, t.handleReportModalClose = function(e) {
                        (e === g.b.MutationError || e === g.b.Success) && t.props.history.push("/")
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    var e = !!this.props.hostedChannelDisplayName;
                    return d.createElement(S._17, {
                        className: "video-player-hosting-ui__container"
                    }, e && this.renderHeader(), d.createElement("span", {
                        key: "video-player"
                    }, this.props.children), d.createElement(S.U, {
                        display: e ? S.H.Block : S.H.Hide,
                        position: S._2.Relative,
                        zIndex: S._38.Above
                    }, e && this.renderFooter()))
                }, t.prototype.renderHeader = function() {
                    return d.createElement(S.e, {
                        type: S.i.SlideInBottom,
                        delay: S.f.Medium,
                        duration: S.g.Medium,
                        enabled: !0
                    }, d.createElement(p.a, {
                        key: "hosting-ui-header",
                        className: "video-player-hosting-ui__link",
                        to: {
                            pathname: "/" + this.props.hostedChannelLogin,
                            state: {
                                medium: b.PageviewMedium.Channel,
                                content: b.PageviewContent.Host
                            }
                        },
                        "data-a-target": "hosting-ui-link",
                        "data-test-selector": "video-player-hosting-ui__header"
                    }, d.createElement(S._17, {
                        className: "video-player-hosting-ui__header",
                        display: S.H.Flex,
                        background: S.m.AccentAlt2,
                        color: S.F.Overlay,
                        alignItems: S.c.Center,
                        padding: {
                            x: 1,
                            y: .5
                        },
                        "data-a-target": "hosting-ui-header"
                    }, d.createElement(S.U, {
                        className: "video-player-hosting-ui__avatar-container"
                    }, d.createElement(S.l, {
                        imageSrc: this.props.hostedChannelProfileImageURL || "",
                        size: 30,
                        imageAlt: Object(m.d)("Hosted Channel {hostedChannelDisplayName}'s Avatar", {
                            hostedChannelDisplayName: this.props.hostedChannelDisplayName || ""
                        }, "VideoPlayerHostingUI")
                    })), d.createElement(S._17, {
                        margin: {
                            left: 1
                        },
                        fontSize: S.L.Size5
                    }, Object(m.d)("Hosting", "VideoPlayerHostingUI"), " ", d.createElement(S._21, {
                        type: S._26.Span,
                        className: "video-player-hosting-ui__channel-name",
                        color: S.F.OverlayAlt,
                        "data-a-target": "hosting-ui-channel-name"
                    }, this.props.hostedChannelDisplayName)))))
                }, t.prototype.renderFooter = function() {
                    return d.createElement(S.e, {
                        type: S.i.SlideInTop,
                        enabled: !0,
                        delay: S.f.Medium,
                        duration: S.g.Medium
                    }, d.createElement(S._17, {
                        key: "hosting-ui-footer",
                        background: S.m.AccentAlt2,
                        className: "video-player-hosting-ui__footer",
                        display: S.H.Block,
                        padding: 1,
                        "data-test-selector": "video-player-hosting-ui__footer",
                        "data-a-target": "hosting-ui-footer"
                    }, d.createElement(S.U, {
                        padding: {
                            y: .5
                        },
                        display: S.H.Flex,
                        justifyContent: S.T.Between
                    }, d.createElement(S.U, {
                        display: S.H.Flex
                    }, d.createElement(S.U, {
                        margin: {
                            right: 1
                        }
                    }, d.createElement(h.a, {
                        "data-a-target": "hosting-ui-follow-button",
                        channelName: this.props.hostedChannelLogin || "",
                        channelLogin: this.props.hostedChannelLogin,
                        hostChannelLogin: this.props.hostChannelLogin,
                        hostChannelID: this.props.hostChannelID,
                        isHostedFollow: !0,
                        balloonDirection: S.q.BottomLeft
                    })), d.createElement(S.U, null, d.createElement(y.b, {
                        channelLogin: this.props.hostedChannelLogin,
                        hostChannelID: this.props.hostChannelID,
                        hostChannelLogin: this.props.hostChannelLogin,
                        "data-a-target": "hosting-ui-subscribe-button"
                    }))), d.createElement(f.a, null, d.createElement(S.v, {
                        ariaLabel: Object(m.d)("More options", "HostingUI"),
                        overlay: !0,
                        icon: S._9.More,
                        onClick: this.handleReportHosterClick,
                        "data-a-target": "hosting-ui-more-button"
                    }), d.createElement(S.p, {
                        direction: S.q.TopRight,
                        "data-a-target": "hosting-ui-more-balloon"
                    }, d.createElement(S.U, {
                        padding: {
                            y: 1
                        }
                    }, d.createElement(S.S, {
                        onClick: this.handleReportHosterClick,
                        "data-a-target": "hosting-ui-report-button"
                    }, d.createElement(S.U, {
                        padding: {
                            x: 1,
                            y: .5
                        }
                    }, Object(m.d)("Report {hostChannelDisplayName}", {
                        hostChannelDisplayName: this.props.hostChannelDisplayName
                    }, "VideoPlayerHostingUI")))))))))
                }, t
            }(d.Component)),
            _ = n(8),
            E = n(10),
            C = n(50),
            N = n(49),
            P = n(34),
            T = n(18),
            D = n(769),
            O = Object(_.a)(i, r)(Object(p.f)(k)),
            w = n(65),
            U = n(4),
            F = n(370),
            I = n(369),
            R = n(20),
            j = n(827),
            x = n(5);
        ! function(e) {
            e.LoadStart = "loadstart", e.Error = "error", e.LoadedMetadata = "loadedmetadata", e.CanPlay = "canplay", e.Playing = "playing", e.Waiting = "waiting", e.Seeking = "seeking", e.Seeked = "seeked", e.Ended = "ended", e.DurationChange = "durationchange", e.TimeUpdate = "timeupdate", e.Play = "play", e.Pause = "pause", e.VolumeChange = "volumechange", e.RateChange = "ratechange"
        }(c || (c = {}));
        var L;
        ! function(e) {
            e.PlayerInit = "init", e.ContentShowing = "contentShowing", e.PlaybackStatistics = "playbackStatistics", e.ChansubRequired = "chansubRequired", e.VideoFailure = "videoFailure", e.Formats = "videoFormats", e.ABSStreamFormatChange = "abs_stream_format_change", e.FormatChanged = "videoFormatChanged", e.TimeChange = "timeChange", e.BufferChange = "bufferChange", e.SegmentChange = "segmentchange", e.UsherFailError = "usherFail", e.CaptionUpdate = "captions", e.SeekFailed = "seekfailed", e.VariantSwitchRequest = "variantSwitchRequested", e.ViewersChange = "viewerschange", e.StreamLoaded = "streamLoaded", e.VideoLoaded = "videoLoaded", e.VideoPaused = "videoPaused", e.QualityChange = "qualitychange", e.Online = "online", e.Offline = "offline", e.Restricted = "restricted", e.CastingChange = "castingchange", e.TheatreChange = "theatrechange", e.MidrollRequested = "midrollrequested", e.ManifestExtraInfo = "manifestExtraInfo", e.TransitionToCollectionVOD = "transitionToCollectionVod", e.TransitionToRecommendedVOD = "transitionToRecommendedVod", e.StitchedAdStart = "stitchedadstart", e.StichedAdEnd = "stitchedadend", e.PersistenPlayerToggle = "persistentPlayerEnableToggle", e.StatsUpdate = "statsupdate", e.PromptLoginModal = "prompt login modal", e.OpenStream = "openStream", e.PlayerReady = "ready", e.FullscreenChange = "fullscreenchange"
        }(L || (L = {}));
        var G, A = (n(984), n(803));
        ! function(e) {
            e.Embed = "embed", e.Frontpage = "frontpage", e.Site = "site"
        }(G || (G = {}));
        var M = {
                allowfullscreen: !0,
                branding: !1,
                channelInfo: !1,
                controls: !0,
                height: "100%",
                playsinline: !0,
                player: G.Site,
                showInfo: !1,
                showtheatre: !1,
                trackingProperties: {
                    client_app: "twilight"
                },
                width: "100%",
                oauth_token: ""
            },
            B = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = m.i.withCategory("video-player"), n.checkPlayerDependencyStatus = function() {
                        a() ? (n.setState({
                            canInitializePlayer: !0
                        }), n.checkPlayerDependencyAnimationFrame = null) : n.checkPlayerDependencyAnimationFrame = requestAnimationFrame(n.checkPlayerDependencyStatus)
                    }, n.attachRef = function(e) {
                        return n.playerRef = e
                    }, n.onOpenStream = function() {
                        n.props.playerTypeOverride === G.Frontpage && n.player && (n.props.channelLogin ? m.n.history.push("/" + n.props.channelLogin) : n.props.vodID ? m.n.history.push("/videos/" + n.props.vodID + "?t=" + n.player.getCurrentTime()) : n.props.collectionID && m.n.history.push("/collections/" + n.props.collectionID))
                    }, n.onPlayerReady = function() {
                        n.player && (n.logger.debug("Ready"), n.props.latencyTracking.reportInteractive(), n.hasPlayed = !1, n.props.latencyTracking.reportCustomEvent(n.playerLoaded), n.setState({
                            playerInitialized: !0
                        }, function() {
                            return n.updatePlayerTrackingData(n.props.hostChannel)
                        }))
                    }, n.onPlayerPlay = function() {
                        n.logger.debug("Play"), n.reportPlayerPlayed()
                    }, n.onStreamStatusOnline = function() {
                        n.props.onStreamStatusChange && n.props.onStreamStatusChange(L.Online)
                    }, n.onStreamStatusOffline = function() {
                        n.props.onStreamStatusChange && n.props.onStreamStatusChange(L.Offline)
                    }, n.onTheatreChange = function(e) {
                        e ? (n.logger.debug("Theatre Entered"), n.props.enableTheatreMode && !n.props.theatreModeEnabled && n.props.enableTheatreMode()) : (n.logger.debug("Theatre Exited"), n.props.disableTheatreMode && n.props.theatreModeEnabled && n.props.disableTheatreMode())
                    }, n.onFullScreenChange = function() {
                        n.player && (n.logger.debug("Fullscreen change", n.player.fullscreen), n.player.fullscreen !== n.state.isFullScreen && n.setState({
                            isFullScreen: n.player.fullscreen
                        }))
                    }, n.onSeek = function() {
                        n.props.onSeek && n.player && n.props.onSeek(n.player.getCurrentTime())
                    }, n.onTimeUpdate = function() {
                        n.props.onVideoTimeChange && n.player && n.props.onVideoTimeChange(n.player.getCurrentTime())
                    }, n.onTransitionToCollectionVod = function(e) {
                        if (n.props.onNavigationRequest) {
                            var t = {};
                            e.vodId && (t.videoID = Object(j.a)(e.vodId)), e.collectionId && (t.collectionID = e.collectionId), n.props.onNavigationRequest(t)
                        }
                    }, n.onTransitionToRecommendedVod = function(e) {
                        if (n.props.onNavigationRequest) {
                            var t = {};
                            e.vodId && (t.videoID = Object(j.a)(e.vodId)), n.props.onNavigationRequest(t)
                        }
                    }, n.updatePlayerTrackingData = function(e) {
                        if (n.state.playerInitialized && n.player) {
                            var t = m.m.getLastPageview();
                            t ? n.logger.debug("Tracking data updated.", {
                                pageviewProperties: t,
                                hostChannel: e
                            }) : n.logger.debug("pageviewProperties not found; only hosting status updated", {
                                pageviewProperties: t,
                                hostChannel: e
                            }), n.player.setTrackingProperties(u.__assign({}, t, {
                                host_channel: e
                            }))
                        }
                    }, n.updatePlayerType = function() {
                        var e = n.props.playerTypeOverride || M.player;
                        n.player && n.playerType !== e && (n.player.setPlayerType(e), n.playerType = e)
                    }, n.maybeRecordClip = function() {
                        n.player && n.state.playerInitialized && n.player.recordClip()
                    }, n.playerCreated = n.registerCreatedEvent(), n.playerLoaded = n.registerLoadedEvent(), n.playerPlayed = n.registerPlayedEvent(), n.state = {
                        canInitializePlayer: a(),
                        playerInitialized: !1,
                        isFullScreen: !1
                    }, n.playerType = t.playerTypeOverride || M.player, n.lastSetChannel = t.channelLogin, n
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    if (this.props.latencyTracking.reportCustomEvent(this.playerCreated), this.bindHotKeys(), this.state.canInitializePlayer ? this.initializePlayer() : this.checkPlayerDependencyAnimationFrame = window.requestAnimationFrame(this.checkPlayerDependencyStatus), m.m.eventEmitter.addListener(b.SpadeEventType.Pageview, function() {
                            return e.updatePlayerTrackingData(e.props.hostChannel)
                        }), window.__playerScriptChunk && !t.tagInjected) {
                        this.logger.debug("Loading player chunk after page loaded");
                        var n = document.createElement("script");
                        n.crossOrigin = "anonymous", n.src = window.__jqueryChunk, n.onload = function() {
                            var e = document.createElement("script");
                            e.async = !0, e.crossOrigin = "anonymous", e.src = window.__playerScriptChunk, document.body.appendChild(e)
                        }, document.body.appendChild(n);
                        var i = document.createElement("link");
                        i.href = window.__playerStyleChunk, i.media = "screen", i.rel = "stylesheet", i.type = "text/css", document.body.appendChild(i), t.tagInjected = !0
                    }
                }, t.prototype.componentWillUpdate = function(e, t) {
                    if (!this.state.canInitializePlayer && t.canInitializePlayer) return void this.initializePlayer();
                    if (t.canInitializePlayer && t.playerInitialized) {
                        if (this.updatePlayerTrackingData(e.hostChannel), this.updatePlayerType(), this.player && e.theatreModeEnabled !== this.player.getTheatre() && this.player.setTheatre(e.theatreModeEnabled), this.player && e.channelLogin && e.channelLogin !== this.lastSetChannel) return this.logger.debug("Setting Channel: ", e.channelLogin), this.player.setChannel(e.channelLogin), this.lastSetChannel = e.channelLogin, void m.m.setVideoPlayerTrackingData({
                            vodID: void 0
                        });
                        var n = e.collectionID && this.props.collectionID !== e.collectionID,
                            i = e.vodID && this.props.vodID !== e.vodID;
                        if (n || i) {
                            var r = e.vodID ? Object(A.a)(e.vodID) : "";
                            if ("" !== r && m.m.setVideoPlayerTrackingData({
                                    vodID: e.vodID
                                }), !this.player) return;
                            return void(n || e.collectionID && i ? this.player.setCollection(e.collectionID, r, e.nextVideoOffset) : this.player.setVideo(r, e.nextVideoOffset))
                        }
                        void 0 !== e.nextVideoOffset && e.nextVideoOffset >= 0 && this.props.nextVideoOffset !== e.nextVideoOffset && this.player && this.player.setCurrentTime(e.nextVideoOffset)
                    }
                }, t.prototype.render = function() {
                    var e = U("video-player", {
                        "video-player--theatre": this.props.theatreModeEnabled,
                        "video-player--logged-in": this.props.isLoggedIn,
                        "video-player--fullscreen": this.state.isFullScreen
                    });
                    return d.createElement("div", {
                        className: U(e),
                        "data-test-selector": "video-player"
                    }, d.createElement("div", {
                        className: "video-player__container",
                        ref: this.attachRef
                    }))
                }, t.prototype.componentWillUnmount = function() {
                    this.unbindHotKeys(), this.checkPlayerDependencyAnimationFrame && cancelAnimationFrame(this.checkPlayerDependencyAnimationFrame), this.maybeDetachFromWindow(), this.props.onDestroy && this.props.onDestroy(), this.player && (m.m.eventEmitter.removeListener(b.SpadeEventType.Pageview, this.updatePlayerTrackingData), this.player.removeEventListener(L.PlayerReady, this.onPlayerReady), this.player.removeEventListener(L.Online, this.onStreamStatusOnline), this.player.removeEventListener(L.Offline, this.onStreamStatusOffline), this.player.removeEventListener(c.Ended, this.onStreamStatusOffline), this.player.removeEventListener(c.Play, this.onPlayerPlay), this.player.removeEventListener(L.TheatreChange, this.onTheatreChange), this.player.removeEventListener(L.TransitionToCollectionVOD, this.onTransitionToCollectionVod), this.player.removeEventListener(L.FullscreenChange, this.onFullScreenChange), this.player.removeEventListener(c.Seeked, this.onSeek), this.player.removeEventListener(c.TimeUpdate, this.onTimeUpdate), this.player.removeEventListener(L.OpenStream, this.onOpenStream), F.extensionService.unregisterPlayer(), this.player.destroy()), m.m.setVideoPlayerTrackingData({
                        vodID: void 0
                    })
                }, t.prototype.initializePlayer = function() {
                    var e = u.__assign({}, M, {
                        showtheatre: !this.props.disableTheatreButton
                    });
                    this.props.playerTypeOverride && (e.player = this.props.playerTypeOverride, this.playerType = this.props.playerTypeOverride), this.props.channelLogin && (e.channel = this.props.channelLogin, this.lastSetChannel = this.props.channelLogin), this.props.collectionID && (e.collection = this.props.collectionID), this.props.vodID && (e.video = Object(A.a)(this.props.vodID), m.m.setVideoPlayerTrackingData({
                        vodID: this.props.vodID
                    })), this.props.nextVideoOffset && (e.time = Object(A.b)(this.props.nextVideoOffset)), e.oauth_token = this.props.authToken || "", this.logger.debug("Initializing", e);
                    var t = new window.Twitch.Player(this.playerRef, e);
                    this.player = t, t.addEventListener(L.PlayerReady, this.onPlayerReady), t.addEventListener(L.Online, this.onStreamStatusOnline), t.addEventListener(L.Offline, this.onStreamStatusOffline), t.addEventListener(c.Ended, this.onStreamStatusOffline), t.addEventListener(c.Play, this.onPlayerPlay), t.addEventListener(c.Seeked, this.onSeek), t.addEventListener(c.TimeUpdate, this.onTimeUpdate), t.addEventListener(L.TheatreChange, this.onTheatreChange), t.addEventListener(L.FullscreenChange, this.onFullScreenChange), t.addEventListener(L.TransitionToCollectionVOD, this.onTransitionToCollectionVod), t.addEventListener(L.TransitionToRecommendedVOD, this.onTransitionToRecommendedVod), t.addEventListener(L.OpenStream, this.onOpenStream), F.extensionService.registerPlayer(this.player), this.props.onInit && this.props.onInit(t), this.maybeAttachToWindow(this.props)
                }, t.prototype.registerCreatedEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent("Player", "player-created", "Created", 1e3)
                }, t.prototype.registerLoadedEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent("Player", "player-loaded", "Init", 2500)
                }, t.prototype.registerPlayedEvent = function() {
                    return this.props.latencyTracking.registerCustomEvent("Player", "player-played", "First Frame", 4e3)
                }, t.prototype.reportPlayerPlayed = function() {
                    this.hasPlayed || (this.hasPlayed = !0, this.playerPlayed && this.props.latencyTracking.reportCustomEvent(this.playerPlayed))
                }, t.prototype.maybeAttachToWindow = function(e) {
                    R.parse(window.location.search).attachPlayer && e.attachToWindow && this.player && (window.player = this.player)
                }, t.prototype.maybeDetachFromWindow = function() {
                    window.player = void 0
                }, t.prototype.bindHotKeys = function() {
                    I.bind("alt+x", this.maybeRecordClip)
                }, t.prototype.unbindHotKeys = function() {
                    I.unbind("alt+x")
                }, t.tagInjected = !1, t
            }(d.Component),
            H = Object(x.c)("VideoPlayer")(B),
            V = Object(_.a)(o, s)(H);
        n.d(t, !1, function() {
            return "hosting-ui-report-button"
        }), n.d(t, !1, function() {
            return "hosting-ui-more-balloon"
        }), n.d(t, !1, function() {
            return "hosting-ui-more-button"
        }), n.d(t, !1, function() {
            return "hosting-ui-channel-name"
        }), n.d(t, !1, function() {
            return "video-player-hosting-ui__header"
        }), n.d(t, !1, function() {
            return "video-player-hosting-ui__footer"
        }), n.d(t, !1, function() {
            return k
        }), n.d(t, "a", function() {
            return O
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return G
        }), n.d(t, "c", function() {
            return V
        }), n.d(t, "d", function() {
            return l
        })
    },
    896: function(e, t, n) {
        "use strict";
        var i, r = n(0),
            a = n(1),
            o = n(2),
            s = n(361),
            l = n(5),
            c = n(3),
            u = (n(1061), "embed-overlay");
        ! function(e) {
            e[e.Clip = 0] = "Clip", e[e.Video = 1] = "Video", e[e.Stream = 2] = "Stream", e[e.VideoOEmbed = 3] = "VideoOEmbed"
        }(i || (i = {}));
        var d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showOverlay: !0
                    }, t.getOverlayComponent = function() {
                        var e = t.props,
                            n = e.createdAt,
                            r = e.lengthSeconds,
                            l = e.thumbnailURL,
                            d = e.type,
                            p = e.viewCount,
                            m = r && r > 0 ? Object(s.a)(r) : "";
                        return a.createElement("a", {
                            href: "#",
                            onClick: t.handleClick,
                            "data-test-selector": u
                        }, a.createElement(c.j, {
                            ratio: c.k.Aspect16x9
                        }, a.createElement(c.U, null, a.createElement(c.P, {
                            fullWidth: !0,
                            fullHeight: !0,
                            position: c._2.Absolute
                        }, a.createElement("img", {
                            src: l
                        })), a.createElement(c.U, {
                            className: "embed-card__overlay",
                            position: c._2.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, a.createElement(c.U, {
                            className: "embed-card__play",
                            display: c.H.Flex,
                            justifyContent: c.T.Center,
                            position: c._2.Absolute,
                            attachLeft: !0,
                            attachTop: !0,
                            fullWidth: !0,
                            fullHeight: !0
                        }, a.createElement(c._8, {
                            asset: c._9.Play,
                            width: 50,
                            height: 50
                        })), a.createElement(c.U, {
                            position: c._2.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachLeft: !0
                        }, n && a.createElement(c._21, null, Object(o.c)(new Date(n), "medium")), a.createElement(c.U, null, d === i.Stream && a.createElement(c.U, {
                            display: c.H.Inline,
                            margin: {
                                right: .5
                            }
                        }, a.createElement(c.V, null)), p && a.createElement("span", null, t.getFormattedViewCount(p, d)))), a.createElement(c.U, {
                            position: c._2.Absolute,
                            padding: 1,
                            attachBottom: !0,
                            attachRight: !0
                        }, m && a.createElement(c.U, null, a.createElement(c._21, null, m)))), a.createElement(c._17, {
                            position: c._2.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            margin: 1,
                            fontSize: c.L.Size5
                        }, d === i.Stream && a.createElement(c.Z, {
                            label: Object(o.d)("Live", "EmbedOverlayPill"),
                            type: c._0.Live
                        }), d === i.Video && a.createElement(c.Z, {
                            label: Object(o.d)("Video", "EmbedOverlayPill"),
                            type: c._0.Overlay
                        }), d === i.Clip && a.createElement(c.Z, {
                            label: Object(o.d)("Clip", "EmbedOverlayPill"),
                            type: c._0.Overlay
                        })))))
                    }, t.handleClick = function(e) {
                        e.preventDefault(), t.setState({
                            showOverlay: !1
                        }), t.props.onClick && t.props.onClick()
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.state.showOverlay ? this.getOverlayComponent() : a.createElement(c.j, {
                        ratio: c.k.Aspect16x9
                    }, this.props.children)
                }, t.prototype.getFormattedViewCount = function(e, t) {
                    switch (t) {
                        case i.Stream:
                            return Object(o.d)("{viewCount,number} viewers", {
                                viewCount: e
                            }, "OverlayViewCount");
                        case i.Clip:
                        case i.Video:
                            return Object(o.d)("{viewCount,number} views", {
                                viewCount: e
                            }, "OverlayViewCount");
                        default:
                            return ""
                    }
                }, t
            }(a.Component),
            p = Object(l.c)("EmbedOverlay")(d),
            m = p;
        n.d(t, !1, function() {
            return u
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return m
        })
    },
    904: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                isLoggedIn: Object(c.d)(e)
            }
        }

        function r(e) {
            return Object(o.bindActionCreators)({
                showLoginModal: function() {
                    return Object(l.f)(s.a.FollowGameButton)
                }
            }, e)
        }
        var a = n(8),
            o = n(10),
            s = n(50),
            l = n(34),
            c = n(18),
            u = n(0),
            d = n(1),
            p = n(30),
            m = n(2),
            h = n(7),
            f = n(22),
            b = n(13),
            g = n(3),
            v = n(905),
            y = n(906),
            S = n(907),
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.follow = function() {
                        return u.__awaiter(t, void 0, void 0, function() {
                            var e, t = this;
                            return u.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.followGame && this.props.data && this.props.data.game ? (e = u.__assign({}, Object(f.a)({
                                            gameID: this.props.data.game.id
                                        }), {
                                            optimisticResponse: {
                                                followGame: {
                                                    __typename: "FollowGamePayload",
                                                    game: {
                                                        self: {
                                                            follow: {
                                                                followedAt: (new Date).toISOString(),
                                                                __typename: "GameFollow"
                                                            },
                                                            __typename: "GameSelfConnection"
                                                        },
                                                        __typename: "Game"
                                                    }
                                                }
                                            },
                                            update: function(e, n) {
                                                var i = n.data.followGame,
                                                    r = e.readQuery({
                                                        query: y,
                                                        variables: {
                                                            name: t.props.gameName
                                                        }
                                                    });
                                                r.game && (r.game.self.follow = i.game.self.follow, e.writeQuery({
                                                    query: y,
                                                    variables: {
                                                        name: t.props.gameName
                                                    },
                                                    data: r
                                                }))
                                            }
                                        }), [4, this.props.followGame(e)]) : [2];
                                    case 1:
                                        return n.sent(), this.track(b.SpadeEventType.GameFollow), [2]
                                }
                            })
                        })
                    }, t.unfollow = function() {
                        return u.__awaiter(t, void 0, void 0, function() {
                            var e, t = this;
                            return u.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.unfollowGame && this.props.data && this.props.data.game ? (e = u.__assign({}, Object(f.a)({
                                            gameID: this.props.data.game.id
                                        }), {
                                            optimisticResponse: {
                                                unfollowGame: {
                                                    __typename: "UnfollowGamePayload",
                                                    follow: null
                                                }
                                            },
                                            update: function(e) {
                                                var n = e.readQuery({
                                                    query: y,
                                                    variables: {
                                                        name: t.props.gameName
                                                    }
                                                });
                                                n.game && (n.game.self.follow = null, e.writeQuery({
                                                    query: y,
                                                    variables: {
                                                        name: t.props.gameName
                                                    },
                                                    data: n
                                                }))
                                            }
                                        }), [4, this.props.unfollowGame(e)]) : [2];
                                    case 1:
                                        return n.sent(), this.track(b.SpadeEventType.GameUnfollow), [2]
                                }
                            })
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    var e = Object(m.d)("Follow", "FollowGameButton");
                    if (!this.props.isLoggedIn) return d.createElement(g.u, {
                        icon: g._9.Heart,
                        ariaLabel: e,
                        "data-test-selector": "follow-game-button-component",
                        onClick: this.props.showLoginModal
                    }, e);
                    if (this.isLoading) return d.createElement(g._1, {
                        width: 70,
                        height: 30
                    });
                    if (this.isFollowing) {
                        var t = Object(m.d)("Unfollow", "FollowGameButton");
                        return d.createElement(g.v, {
                            ariaLabel: t,
                            "data-test-selector": "follow-game-button-component",
                            icon: g._9.Heart,
                            onClick: this.unfollow,
                            statusAlertIcon: g._9.Unheart
                        })
                    }
                    return d.createElement(g.u, {
                        icon: g._9.Heart,
                        ariaLabel: e,
                        "data-test-selector": "follow-game-button-component",
                        onClick: this.follow,
                        "data-a-target": "game-directory-follow-button"
                    }, e)
                }, Object.defineProperty(t.prototype, "isFollowing", {
                    get: function() {
                        return !!(this.props.data && this.props.data.game && this.props.data.game.self && null !== this.props.data.game.self.follow)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "isLoading", {
                    get: function() {
                        return !this.props.data || this.props.data.loading
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.track = function(e) {
                    m.n.tracking.track(e, {
                        src: this.props.src,
                        kind: e === b.SpadeEventType.GameFollow ? "follow" : "unfollow",
                        name: this.props.gameName
                    })
                }, t
            }(d.Component),
            _ = Object(p.compose)(Object(h.a)(y, {
                options: function(e) {
                    return {
                        variables: {
                            name: e.gameName
                        }
                    }
                },
                skip: function(e) {
                    return !e.isLoggedIn || !e.gameName
                }
            }), Object(h.a)(v, {
                name: "followGame"
            }), Object(h.a)(S, {
                name: "unfollowGame"
            }))(k),
            E = Object(a.a)(i, r)(_);
        n.d(t, "a", function() {
            return E
        })
    },
    905: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowGameButton_FollowGame"
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
                                value: "FollowGameInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "followGame"
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
                                alias: null,
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
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "follow"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "followedAt"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
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
                end: 187
            }
        };
        n.loc.source = {
            body: "mutation FollowGameButton_FollowGame($input: FollowGameInput!) {\n  followGame(input: $input) {\n    game {\n      self {\n        follow {\n          followedAt\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    906: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "FollowGameButton_Game"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "follow"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "followedAt"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 177
            }
        };
        n.loc.source = {
            body: "query FollowGameButton_Game($name: String!) {\n  game(name: $name) {\n    id\n    name\n    self {\n      follow {\n        followedAt\n      }\n    }\n  }\n\n  currentUser {\n    id\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    907: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "FollowGameButton_UnfollowGame"
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
                                value: "UnfollowGameInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "unfollowGame"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "follow"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "followedAt"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 143
            }
        };
        n.loc.source = {
            body: "mutation FollowGameButton_UnfollowGame($input: UnfollowGameInput!) {\n  unfollowGame(input: $input) {\n    follow {\n      followedAt\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    967: function(e, t) {},
    968: function(e, t) {},
    981: function(e, t, n) {
        "use strict";

        function i(e) {
            return {
                headerEditMode: e.directoryHeader.isEditingEnabled
            }
        }

        function r(e) {
            return Object(u.bindActionCreators)({
                onCloseModal: d.c,
                onShowModal: d.d
            }, e)
        }

        function a(e) {
            return {
                headerEditMode: e.directoryHeader.isEditingEnabled
            }
        }

        function o(e) {
            return Object(u.bindActionCreators)({
                onCloseModal: d.c,
                onDisableDirectoryHeaderEdit: Q.c,
                onShowModal: d.d
            }, e)
        }
        var s = (n(873), n(0)),
            l = n(1),
            c = n(8),
            u = n(10),
            d = n(49),
            p = n(2),
            m = n(7),
            h = n(22),
            f = n(757),
            b = n(13),
            g = "directory-avatar-edit-menu",
            v = "directory-avatar-overlay",
            y = "directory-avatar-remover",
            S = "directory-avatar-uploader",
            k = "directory-banner-edit-menu",
            _ = "directory-banner-overlay",
            E = "directory-banner-remover",
            C = "directory-banner-uploader",
            N = this,
            P = function(e) {
                return s.__awaiter(N, void 0, void 0, function() {
                    var t;
                    return s.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, f.a.get("https://api.twitch.tv/kraken/communities?name=" + e)];
                            case 1:
                                if ((t = n.sent()) && 200 === t.status && t.body) return [2, t.body];
                                throw new Error
                        }
                    })
                })
            },
            T = function(e) {
                return s.__awaiter(N, void 0, void 0, function() {
                    var t, n;
                    return s.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, P(e)];
                            case 1:
                                return t = i.sent(), [2, t.avatar_image_url];
                            case 2:
                                return n = i.sent(), [2, void 0];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            D = function(e) {
                return s.__awaiter(N, void 0, void 0, function() {
                    var t, n;
                    return s.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, P(e)];
                            case 1:
                                return t = i.sent(), [2, t.cover_image_url];
                            case 2:
                                return n = i.sent(), [2, void 0];
                            case 3:
                                return [2]
                        }
                    })
                })
            },
            O = "https://static-cdn.jtvnw.net/community-images/defaults/avatar-285x380.png",
            w = "https://static-cdn.jtvnw.net/community-images/defaults/banner-1200x180.png",
            U = n(795),
            F = function(e) {
                return e === U.a.Communities ? "COMMUNITY" : "GAME"
            },
            I = function() {
                return Object(p.d)("Upload new image", "DirectoryHeader")
            },
            R = function() {
                return Object(p.d)("Remove", "DirectoryHeader")
            },
            j = n(349),
            x = "https://api.twitch.tv/kraken/communities/",
            L = function(e) {
                return "" + x + e + "/images/avatar"
            },
            G = function(e) {
                return "" + x + e + "/images/cover"
            },
            A = function(e) {
                return e === U.a.Communities ? Object(j.b)("communities") : Object(j.b)()
            },
            M = n(854),
            B = n(826),
            H = n(5),
            V = n(3),
            q = n(993),
            W = (n(994), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingAvatar: !1
                    }, t.renderAvatarEditMode = function() {
                        return t.props.headerEditMode ? l.createElement(V.U, null, l.createElement("div", {
                            onClick: t.onAvatarClick
                        }, l.createElement(V.U, {
                            "data-test-selector": v,
                            className: "directory-header__overlay",
                            flexDirection: V.J.Column,
                            textAlign: V._22.Center,
                            display: V.H.Flex,
                            position: V._2.Absolute,
                            alignItems: V.c.Center,
                            justifyContent: V.T.Center,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachTop: !0
                        }, l.createElement(V._17, {
                            color: V.F.Overlay
                        }, l.createElement(V._8, {
                            asset: V._9.Edit
                        })), l.createElement(V._21, {
                            color: V.F.Overlay,
                            type: V._26.P
                        }, Object(p.d)("Change avatar", "DirectoryHeader")))), t.renderAvatarEditMenu()) : null
                    }, t.renderAvatarEditMenu = function() {
                        return t.state.isEditingAvatar ? l.createElement(V.p, {
                            "data-test-selector": g,
                            direction: V.q.BottomLeft,
                            show: !0
                        }, l.createElement(V.S, {
                            "data-test-selector": S,
                            onClick: t.onAvatarUploadClick
                        }, l.createElement(V.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, I())), l.createElement(V.S, {
                            "data-test-selector": y,
                            onClick: t.onAvatarDeleteClick
                        }, l.createElement(V.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, R()))) : null
                    }, t.trackAvatarEdit = function(e) {
                        p.n.tracking.track(b.SpadeEventType.CommunityEdit, {
                            community_id: t.props.data.directory.id,
                            name: t.props.data.directory.name,
                            is_official: !1,
                            user_id: t.props.data.currentUser && t.props.data.currentUser.id,
                            is_admin: t.props.data.currentUser && t.props.data.currentUser.roles.isStaff,
                            is_subadmin: t.props.data.currentUser && t.props.data.currentUser.roles.isSiteAdmin,
                            edit_type: "avatar",
                            old_value: t.props.data.directory.avatarURL,
                            new_value: e || null
                        })
                    }, t.onAvatarClick = function() {
                        t.setState({
                            isEditingAvatar: !t.state.isEditingAvatar
                        })
                    }, t.onAvatarUploadClick = function() {
                        if (!t.props.data || !t.props.data.directory || !t.props.data.directory.id) return null;
                        var e = {
                            uploadURL: L(t.props.data.directory.id),
                            imageDimensions: "600x800",
                            maxFileSizeMegabytes: 1,
                            isRequiredImageDimensions: !0,
                            shouldBase64Encode: !0,
                            base64EncodedPropertyName: B.a.CommunitiesAvatar,
                            onFinishUploading: t.onAvatarDoneUploading
                        };
                        t.props.onShowModal(M.b, e)
                    }, t.onAvatarDeleteClick = function() {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return s.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, f.a.delete(L(this.props.data.directory.id))];
                                    case 1:
                                        return t.sent(), this.trackAvatarEdit(), e = function(e) {
                                            return e.directory.avatarURL = O, e
                                        }, Object(h.d)(q, {
                                            name: this.props.directoryName,
                                            type: F(this.props.directoryType)
                                        }, e), [2]
                                }
                            })
                        })
                    }, t.onAvatarDoneUploading = function() {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var e, t, n = this;
                            return s.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, T(this.props.data.directory.displayName)];
                                    case 1:
                                        return e = i.sent(), t = function(t) {
                                            return e && (n.trackAvatarEdit(e), t.directory.avatarURL = e), t
                                        }, Object(h.d)(q, {
                                            name: this.props.directoryName,
                                            type: F(this.props.directoryType)
                                        }, t), this.props.onCloseModal(), [2]
                                }
                            })
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return e = this.props.data.loading || this.props.data.error || !this.props.data.directory ? l.createElement(V._1, {
                        width: 80,
                        height: 112,
                        overlay: !0
                    }) : l.createElement(V.C, {
                        imageAlt: "",
                        imageSrc: this.props.data.directory.avatarURL,
                        size: V.D.Size8,
                        aspect: V.k.BoxArt
                    }), l.createElement(V.U, {
                        className: "directory-header__avatar",
                        margin: {
                            left: 3,
                            bottom: 1
                        },
                        position: V._2.Absolute,
                        attachBottom: !0
                    }, e, this.renderAvatarEditMode())
                }, t = s.__decorate([Object(m.a)(q, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.directoryName,
                                type: F(e.directoryType)
                            }
                        }
                    }
                }), Object(H.c)("DirectoryAvatar", {
                    autoReportInteractive: !0
                })], t)
            }(l.Component)),
            z = W,
            $ = Object(c.a)(i, r)(z),
            Q = n(831),
            K = n(4),
            Y = n(11),
            J = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    if ("GAMES" !== this.props.directoryType) return null;
                    var e, t = null;
                    if ("IRL" === this.props.directoryName) {
                        var n = Object(p.d)("New to IRL?", "DirectoryHeader"),
                            i = Object(p.d)("Learn More", "DirectoryHeader"),
                            r = void 0;
                        r = l.createElement("a", {
                            target: "_blank",
                            href: "http://link.twitch.tv/irldirectorytooltip",
                            className: "directory-header__link",
                            rel: "noopener noreferrer"
                        }, i), e = l.createElement("span", null, n, " ", r)
                    } else "Always On" === this.props.directoryName && (e = Object(p.d)("24/7 streaming from your favorite brands. Watch together.", "DirectoryHeader"));
                    return e && (t = l.createElement(V._21, {
                        color: V.F.Overlay,
                        type: V._26.P,
                        "data-test-selector": "directory-game-descriptor"
                    }, e)), t
                }, t
            }(l.Component),
            X = J,
            Z = n(995),
            ee = (n(996), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isEditingBanner: !1
                    }, t.renderBannerEditMode = function() {
                        return t.props.headerEditMode ? l.createElement(V.U, null, l.createElement("div", {
                            onClick: t.onBannerClick
                        }, l.createElement(V.U, {
                            "data-test-selector": _,
                            className: "directory-header__overlay",
                            flexDirection: V.J.Column,
                            display: V.H.Flex,
                            position: V._2.Absolute,
                            alignItems: V.c.Center,
                            justifyContent: V.T.Center,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0,
                            attachTop: !0
                        }, l.createElement(V.U, {
                            position: V._2.Relative
                        }, l.createElement(V._17, {
                            color: V.F.Overlay,
                            textAlign: V._22.Center
                        }, l.createElement(V._8, {
                            asset: V._9.Edit
                        })), l.createElement(V._21, {
                            color: V.F.Overlay,
                            type: V._26.P
                        }, Object(p.d)("Change cover image", "DirectoryHeader")), t.renderBannerEditMenu()))), l.createElement(V.U, {
                            alignContent: V.b.End,
                            position: V._2.Absolute,
                            textAlign: V._22.Right,
                            margin: 3,
                            attachBottom: !0,
                            attachRight: !0
                        }, l.createElement(V.u, {
                            icon: V._9.Check,
                            onClick: t.onDoneClick
                        }, Object(p.d)("Done", "DirectoryHeader")))) : null
                    }, t.renderBannerEditMenu = function() {
                        return t.state.isEditingBanner ? l.createElement(V.p, {
                            "data-test-selector": k,
                            direction: V.q.BottomCenter,
                            show: !0
                        }, l.createElement(V.S, {
                            "data-test-selector": C,
                            onClick: t.onBannerUploadClick
                        }, l.createElement(V.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, I())), l.createElement(V.S, {
                            "data-test-selector": E,
                            onClick: t.onBannerDeleteClick
                        }, l.createElement(V.U, {
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, R()))) : null
                    }, t.trackBannerEdit = function(e) {
                        p.n.tracking.track(b.SpadeEventType.CommunityEdit, {
                            community_id: t.props.data.directory.id,
                            name: t.props.data.directory.name,
                            is_official: !1,
                            user_id: t.props.data.currentUser && t.props.data.currentUser.id,
                            is_admin: t.props.data.currentUser && t.props.data.currentUser.roles.isStaff,
                            is_subadmin: t.props.data.currentUser && t.props.data.currentUser.roles.isSiteAdmin,
                            edit_type: "banner",
                            old_value: t.props.data.directory.coverURL,
                            new_value: e || null
                        })
                    }, t.onDoneClick = function() {
                        t.props.onDisableDirectoryHeaderEdit()
                    }, t.onBannerClick = function() {
                        t.setState({
                            isEditingBanner: !t.state.isEditingBanner
                        })
                    }, t.onBannerUploadClick = function() {
                        if (!t.props.data || !t.props.data.directory || !t.props.data.directory.id) return null;
                        var e = {
                            uploadURL: G(t.props.data.directory.id),
                            imageDimensions: "1200x180",
                            maxFileSizeMegabytes: 3,
                            isRequiredImageDimensions: !0,
                            shouldBase64Encode: !0,
                            base64EncodedPropertyName: B.a.CommunitiesCover,
                            onFinishUploading: t.onBannerDoneUploading
                        };
                        t.props.onShowModal(M.b, e)
                    }, t.onBannerDeleteClick = function() {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return s.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, f.a.delete(G(this.props.data.directory.id))];
                                    case 1:
                                        return t.sent(), this.trackBannerEdit(), e = function(e) {
                                            return e.directory.coverURL = w, e
                                        }, Object(h.d)(Z, {
                                            name: this.props.directoryName,
                                            type: F(this.props.directoryType)
                                        }, e), [2]
                                }
                            })
                        })
                    }, t.onBannerDoneUploading = function() {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var e, t, n = this;
                            return s.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, D(this.props.data.directory.displayName)];
                                    case 1:
                                        return e = i.sent(), t = function(t) {
                                            return e && (n.trackBannerEdit(e), t.directory.coverURL = e), t
                                        }, Object(h.d)(Z, {
                                            name: this.props.directoryName,
                                            type: F(this.props.directoryType)
                                        }, t), this.props.onCloseModal(), [2]
                                }
                            })
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e;
                    if (this.props.data.loading || this.props.data.error || !this.props.data.directory) e = l.createElement(V._1, {
                        width: 200,
                        height: 20,
                        overlay: !0
                    });
                    else {
                        var t = Object(p.d)("{followerCount,number} Followers", {
                                followerCount: this.props.data.directory.followersCount
                            }, "DirectoryHeader"),
                            n = Object(p.d)("{viewerCount,number} Viewers", {
                                viewerCount: this.props.data.directory.viewersCount
                            }, "DirectoryHeader");
                        e = l.createElement(V._21, {
                            color: V.F.Overlay,
                            type: V._26.P
                        }, t, " · ", n)
                    }
                    var i = !1,
                        r = {};
                    this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.directory && (this.props.data.directory.coverURL ? r = {
                        backgroundImage: "url(" + this.props.data.directory.coverURL + ")"
                    } : this.props.data.directory.streams.edges.length && this.props.data.directory.streams.edges.filter(function(e) {
                        return e.node.previewImageURL
                    }).map(function(e) {
                        var t = e.node;
                        i = !0, r = {
                            backgroundImage: "url(" + t.previewImageURL + ")"
                        }
                    }));
                    var a = K("directory-header__banner", {
                        "directory-header__banner--blur": i
                    });
                    return l.createElement(V.U, {
                        position: V._2.Relative,
                        overflow: V.Y.Hidden
                    }, l.createElement("div", {
                        className: a,
                        style: r,
                        "data-test-selector": "directory-banner-image"
                    }), l.createElement(V.U, {
                        className: "directory-header__title",
                        position: V._2.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0
                    }, l.createElement(Y.a, {
                        to: {
                            pathname: A(this.props.directoryType)
                        },
                        className: "directory-header__link"
                    }, l.createElement(V._8, {
                        asset: V._9.AngleLeft,
                        height: 10
                    }), Object(p.d)("Browse", "DirectoryHeader")), l.createElement(V._21, {
                        color: V.F.Overlay,
                        type: V._26.H2
                    }, this.props.data && this.props.data.directory && this.props.data.directory.displayName), l.createElement(X, s.__assign({}, this.props)), e), this.renderBannerEditMode())
                }, t = s.__decorate([Object(m.a)(Z, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: e.directoryName,
                                type: F(e.directoryType)
                            }
                        }
                    }
                }), Object(H.c)("DirectoryBanner", {
                    autoReportInteractive: !0
                })], t)
            }(l.Component)),
            te = ee,
            ne = Object(c.a)(a, o)(te),
            ie = n(881),
            re = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(V.U, {
                        position: V._2.Relative
                    }, l.createElement(ne, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName
                    }), l.createElement($, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName
                    }), l.createElement(ie.b, {
                        directoryType: this.props.directoryType,
                        directoryName: this.props.directoryName,
                        activeTab: this.props.activeTab,
                        showGameDetails: this.props.showGameDetails
                    }))
                }, t = s.__decorate([Object(H.c)("DirectoryHeader", {
                    autoReportInteractive: !0
                })], t)
            }(l.Component),
            ae = re;
        n.d(t, !1, function() {
            return re
        }), n.d(t, "a", function() {
            return ae
        })
    },
    983: function(e, t) {},
    984: function(e, t) {},
    993: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryHeader_DirectoryAvatar"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "type"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "DirectoryType"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "directory"
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
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "type"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "type"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "avatarURL"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "80"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "112"
                                    }
                                }],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "roles"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isSiteAdmin"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 272
            }
        };
        n.loc.source = {
            body: "query DirectoryHeader_DirectoryAvatar($name: String!, $type: DirectoryType!) {\n  directory(name: $name, type: $type) {\n    id\n    name\n    displayName\n    avatarURL(width: 80 height: 112)\n  }\n\n  currentUser {\n    id\n    roles {\n      isSiteAdmin\n      isStaff\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    994: function(e, t) {},
    995: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryHeader_DirectoryBanner"
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "type"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "DirectoryType"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "directory"
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
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "type"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "type"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "coverURL"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "1200"
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "height"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "180"
                                    }
                                }],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "viewersCount"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "followersCount"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "streams"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "1"
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "edges"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
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
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "id"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "previewImageURL"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "320"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "180"
                                                            }
                                                        }],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "roles"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isSiteAdmin"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 449
            }
        };
        n.loc.source = {
            body: "query DirectoryHeader_DirectoryBanner($name: String!, $type: DirectoryType!) {\n  directory(name: $name, type: $type) {\n    id\n    name\n    displayName\n    coverURL(width: 1200 height: 180)\n    viewersCount\n    followersCount\n    streams(first: 1) {\n      edges {\n        node {\n          id\n          previewImageURL(width: 320 height: 180)\n        }\n      }\n    }\n  }\n\n  currentUser {\n    id\n    roles {\n      isSiteAdmin\n      isStaff\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    996: function(e, t) {},
    997: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryFollowButton_Community"
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "community"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "follow"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "followedAt"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }, {
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 192
            }
        };
        n.loc.source = {
            body: "query DirectoryFollowButton_Community($name: String!) {\n  community(name: $name) {\n    id\n    name\n    self {\n      follow {\n        followedAt\n      }\n    }\n  }\n\n  currentUser {\n    id\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    998: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "DirectoryFollowButton_FollowCommunity"
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
                                value: "FollowCommunityInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "followCommunity"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "community"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "follow"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "followedAt"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
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
                end: 212
            }
        };
        n.loc.source = {
            body: "mutation DirectoryFollowButton_FollowCommunity($input: FollowCommunityInput!) {\n  followCommunity(input: $input) {\n    community {\n      self {\n        follow {\n          followedAt\n        }\n      }\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    999: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "DirectoryFollowButton_UnfollowCommunity"
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
                                value: "UnfollowCommunityInput"
                            }
                        }
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
                        name: {
                            kind: "Name",
                            value: "unfollowCommunity"
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "follow"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "followedAt"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 163
            }
        };
        n.loc.source = {
            body: "mutation DirectoryFollowButton_UnfollowCommunity($input: UnfollowCommunityInput!) {\n  unfollowCommunity(input: $input) {\n    follow {\n      followedAt\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.directory-game-details-9f92cbd2c99a2c36642c2961feb9f59a.js.map