webpackJsonp([61], {
    "+V/3": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return r
        }), n.d(t, "d", function() {
            return s
        }), n.d(t, "a", function() {
            return a
        });
        var i = "subscribe_to_channel",
            r = "turbo",
            s = "visit_url",
            a = "broadcaster"
    },
    "16B9": function(e, t) {},
    "2IkU": function(e, t) {},
    "9+OC": function(e, t, n) {
        "use strict";
        n("TToO");
        var i = n("BzvE"),
            r = (n.n(i), n("IWpL"));
        n.o(r, "PageviewLocation") && n.d(t, "PageviewLocation", function() {
            return r.PageviewLocation
        })
    },
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var i = n("TToO"),
            r = n("6sO2"),
            s = n("Aj/L"),
            a = function() {
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
                }, e.getOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
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
                }, e.putOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
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
                }, e.postOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
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
                }, e.deleteOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        var r, s, a, o;
                        return i.__generator(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), r = t.headers ? t.headers["Content-Type"] : void 0, s = this.serialize(t.body, r), a = i.__assign({}, t, {
                                        body: s
                                    }), [4, this._fetch(e, a)];
                                case 1:
                                    return o = u.sent(), [4, this.constructLegacyAPIResponse(o)];
                                case 2:
                                    return [2, u.sent()]
                            }
                        })
                    })
                }, e.requestOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        var r, s;
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return a.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                case 1:
                                    if ((r = a.sent()).error || r.requestError) throw new Error("Error while making request");
                                    return s = i.__assign({}, r, {
                                        body: r.body
                                    }), [2, Promise.resolve(s)];
                                case 2:
                                    throw a.sent();
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, r.o.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n, r, s;
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
                                    return r = i.sent(), e.headers && e.headers.get && (s = e.headers.get("Content-Type")) && -1 !== s.indexOf("application/json") && (t.requestError = r), [3, 4];
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
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                        contentType: t
                    }), null) : null
                }, e.getDefaultHeaders = function(e, t) {
                    var n = r.o.store.getState(),
                        i = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": r.o.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                    var a = Object(s.c)(n);
                    return a && (i.Authorization = "OAuth " + a.authToken, a.legacyCSRFToken && (i["Twitch-Api-Token"] = a.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        i[e] && delete i[e]
                    }), i
                }, e.logger = r.o.logger.withCategory("legacy-api"), e
            }()
    },
    AnDU: function(e, t) {},
    MjRD: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SubscriptionsManagement_SubscriptionProduct"
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
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "String"
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
                                    value: "broadcastBadges"
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
                                            value: "setID"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "version"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "clickAction"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "clickURL"
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
                                        alias: {
                                            kind: "Name",
                                            value: "image1x"
                                        },
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
                                                value: "NORMAL"
                                            }
                                        }],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        alias: {
                                            kind: "Name",
                                            value: "image2x"
                                        },
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
                                                value: "DOUBLE"
                                            }
                                        }],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        alias: {
                                            kind: "Name",
                                            value: "image4x"
                                        },
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
                                    value: "subscriptionProducts"
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
                                            value: "tier"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasAdFree"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasFastChat"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "hasSubonlyVideoArchive"
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
                                    }, {
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
                                                    value: "benefit"
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
                                                            value: "tier"
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
            }],
            loc: {
                start: 0,
                end: 398
            }
        };
        n.loc.source = {
            body: "query SubscriptionsManagement_SubscriptionProduct($login: String) {\nuser(login: $login) {\nid\nbroadcastBadges {\nid\nsetID\nversion\nclickAction\nclickURL\ndescription\nimage1x: imageURL(size: NORMAL)\nimage2x: imageURL(size: DOUBLE)\nimage4x: imageURL(size: QUADRUPLE)\ntitle\n}\nsubscriptionProducts {\nid\ntier\nhasAdFree\nhasFastChat\nhasSubonlyVideoArchive\nemotes {\nid\ntoken\n}\nself {\nbenefit {\nid\ntier\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "SR+V": function(e, t) {},
    cpDk: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "subscriptionBenefit"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "SubscriptionBenefit"
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
                            value: "originID"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "endsAt"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "isRefundable"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
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
                                            value: "login"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "displayName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isGift"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
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
                                name: {
                                    kind: "Name",
                                    value: "originID"
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
                                    value: "startsAt"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
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
                                    value: "tier"
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
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "url"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "purchasedWithPrime"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "renewsAt"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "tier"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
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
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "login"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "bannerImageURL"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "profileImageURL"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "width"
                                    },
                                    value: {
                                        kind: "IntValue",
                                        value: "50"
                                    }
                                }],
                                directives: []
                            }, {
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
                                            value: "displayBadges"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "FragmentSpread",
                                                name: {
                                                    kind: "Name",
                                                    value: "badge"
                                                },
                                                directives: []
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
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
                                        name: {
                                            kind: "Name",
                                            value: "isPartner"
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
                end: 438
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/badges/models/badge-fragment.gql"\nfragment subscriptionBenefit on SubscriptionBenefit {\nid\noriginID\nendsAt\nisRefundable\ngift {\ngifter {\nid\nlogin\ndisplayName\n}\nisGift\n}\npaidUpgrade {\noriginID\nprice\nstartsAt\n}\nproduct {\nid\ntier\nname\ndisplayName\nurl\n}\npurchasedWithPrime\nrenewsAt\ntier\nuser {\nid\ndisplayName\nlogin\nbannerImageURL\nprofileImageURL(width: 50)\nself {\ndisplayBadges {\n...badge\n}\n}\nroles {\nisPartner\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        i.definitions = i.definitions.concat(n("QU+n").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !r[t] && (r[t] = !0, !0)
        })), e.exports = i
    },
    fEk1: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SubscriptionsManagement_SubscriptionBenefits"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "limit"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Int"
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "cursor"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "Cursor"
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "filter"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "SubscriptionBenefitFilter"
                        }
                    }
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "platform"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "SubscriptionPlatform"
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
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "availableBadges"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "badge"
                                        },
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "subscriptionBenefits"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "first"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "limit"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "after"
                                    },
                                    value: {
                                        kind: "Variable",
                                        name: {
                                            kind: "Name",
                                            value: "cursor"
                                        }
                                    }
                                }, {
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "criteria"
                                    },
                                    value: {
                                        kind: "ObjectValue",
                                        fields: [{
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "filter"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "filter"
                                                }
                                            }
                                        }, {
                                            kind: "ObjectField",
                                            name: {
                                                kind: "Name",
                                                value: "platform"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "platform"
                                                }
                                            }
                                        }]
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "pageInfo"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "hasNextPage"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
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
                                                name: {
                                                    kind: "Name",
                                                    value: "cursor"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
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
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "subscriptionBenefit"
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
                end: 536
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/badges/models/badge-fragment.gql"\n#import "twilight/pages/subscriptions-management/models/subscription-benefit-fragment.gql"\nquery SubscriptionsManagement_SubscriptionBenefits($limit: Int $cursor: Cursor $filter: SubscriptionBenefitFilter $platform: SubscriptionPlatform) {\ncurrentUser {\nid\nhasPrime\navailableBadges {\n...badge\n}\nsubscriptionBenefits(first: $limit after: $cursor criteria: {filter: $filter platform: $platform}) {\npageInfo {\nhasNextPage\n}\nedges {\ncursor\nnode {\n...subscriptionBenefit\n}\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};

        function s(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }
        i.definitions = i.definitions.concat(s(n("QU+n").definitions)), i.definitions = i.definitions.concat(s(n("cpDk").definitions)), e.exports = i
    },
    jQFB: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("RH2O"),
            r = n("2KeS"),
            s = n("+xm8"),
            a = n("f2i/"),
            o = n("Aj/L"),
            u = n("TToO"),
            c = n("GiK3"),
            d = n("6sO2"),
            l = n("yWCw"),
            p = n("j7/Y"),
            m = n("w9tK"),
            b = n("CSlQ"),
            f = n("eXld"),
            g = n("3zLD"),
            h = n("zCIC"),
            v = n("7vx8"),
            k = n("oIkB"),
            S = n("Odds"),
            y = (n("SR+V"), function() {
                return c.createElement(S._35, {
                    className: "available-prime-sub-card",
                    border: !0,
                    background: S.n.Base,
                    display: S.R.Flex,
                    padding: 2,
                    flexDirection: S.T.Column,
                    alignItems: S.c.Center,
                    justifyContent: S._7.Center,
                    textAlign: S._45.Center,
                    margin: {
                        bottom: 2,
                        x: 1
                    }
                }, c.createElement(S._24, {
                    type: S._26.Prime,
                    asset: S._25.Crown,
                    height: 80,
                    width: 80
                }), c.createElement(S._2, {
                    margin: {
                        top: 1
                    }
                }, c.createElement(S.Q, {
                    bold: !0,
                    type: S._49.H3
                }, Object(d.d)("Use your free channel subscription", "AvailablePrimeSubCard"))), c.createElement(S._2, {
                    margin: {
                        top: 1
                    }
                }, c.createElement(S.Q, null, Object(d.d)("Directly support your favorite streamer, and you can subscribe again for free every 30 days.", "AvailablePrimeSubCard"))), c.createElement(S._2, {
                    margin: {
                        top: 1
                    }
                }, c.createElement(S.Q, null, Object(d.d)('To use your free channel subscription, go to a channel of your choice and select "Subscribe Free"', "AvailablePrimeSubCard"))))
            }),
            _ = n("SZoP"),
            B = n("urTJ"),
            E = n("V5M+"),
            O = n("+8VM"),
            C = n("9u8h");
        var N, T;
        n("l6se");
        ! function(e) {
            e.ErrorMessage = "DisableGiftModalErrorMessage", e.CancelButton = "DisableGiftCancelButton", e.ConfirmButton = "DisableGiftConfirmButton"
        }(N || (N = {})),
        function(e) {
            e[e.Success = 0] = "Success", e[e.Error = 1] = "Error", e[e.InProgress = 2] = "InProgress", e[e.Unconfirmed = 3] = "Unconfirmed"
        }(T || (T = {}));
        var w, P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        requestStatus: T.Unconfirmed
                    }, t.onConfirmDisableGift = function() {
                        return u.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i = this;
                            return u.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        e = this.props.currentUserID, t = this.props.originID, n = this.props.subscriptionProductID, this.setState({
                                            requestStatus: T.InProgress
                                        }), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, function(e, t, n) {
                                            return u.__awaiter(this, void 0, void 0, function() {
                                                var i, r;
                                                return u.__generator(this, function(s) {
                                                    switch (s.label) {
                                                        case 0:
                                                            i = {
                                                                recipient_id: e,
                                                                origin_id: t,
                                                                product_id: n
                                                            }, s.label = 1;
                                                        case 1:
                                                            return s.trys.push([1, 3, , 4]), [4, C.a.postOrThrow("/v5/subscriptions/gift/cancel", {
                                                                body: i
                                                            }, {
                                                                version: 5
                                                            })];
                                                        case 2:
                                                            return s.sent(), [3, 4];
                                                        case 3:
                                                            return r = s.sent(), [2, Promise.reject(r)];
                                                        case 4:
                                                            return [2]
                                                    }
                                                })
                                            })
                                        }(e, t, n)];
                                    case 2:
                                        return r.sent(), this.setState({
                                            requestStatus: T.Success
                                        }, function() {
                                            i.props.onSuccess()
                                        }), [3, 4];
                                    case 3:
                                        return r.sent(), this.setState({
                                            requestStatus: T.Error
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return c.createElement(S._35, {
                        className: "disable-gift-modal",
                        background: S.n.Base,
                        padding: 2
                    }, c.createElement(S._2, {
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(S.Q, {
                        bold: !0
                    }, Object(d.d)("Disable Gift Subscription Benefits?", "DisableGiftModal"))), c.createElement(S.Q, null, Object(d.d)("Are you sure you wish you disable your Gift Subscription benefits to {channelName}? You won't be able to re-enable them.", {
                        channelName: this.props.formattedChannelDisplayName
                    }, "DisableGiftModal")), this.renderErrorDisplay(), c.createElement(S._8, {
                        margin: {
                            top: 2
                        },
                        display: S.R.Flex
                    }, c.createElement(S._8, {
                        margin: {
                            right: 1
                        }
                    }, c.createElement(S.v, {
                        state: this.getConfirmButtonState(),
                        type: S.B.Alert,
                        onClick: this.onConfirmDisableGift,
                        "data-test-selector": N.ConfirmButton
                    }, Object(d.d)("Disable Benefits", "DisableGiftModal"))), c.createElement(S.v, {
                        onClick: this.props.onCancel,
                        "data-test-selector": N.CancelButton
                    }, Object(d.d)("Cancel", "DisableGiftModal"))), c.createElement(O.a, {
                        closeOnBackdropClick: !0,
                        closeOnPageNavigation: !0
                    }))
                }, t.prototype.renderErrorDisplay = function() {
                    return this.state.requestStatus === T.Error ? c.createElement(S._35, {
                        borderTop: !0,
                        borderRight: !0,
                        borderBottom: !0,
                        padding: 1,
                        margin: {
                            top: 1
                        },
                        className: "disable-gift-modal__error",
                        "data-test-selector": N.ErrorMessage
                    }, c.createElement(S.Q, null, Object(d.d)("Something went wrong and your request could not be processed at this time. Please try again later.", "DisableGiftModal"))) : null
                }, t.prototype.getConfirmButtonState = function() {
                    switch (this.state.requestStatus) {
                        case T.InProgress:
                            return S.A.Loading;
                        case T.Success:
                            return S.A.Success;
                        case T.Unconfirmed:
                        case T.Error:
                        default:
                            return S.A.Default
                    }
                }, t
            }(c.Component),
            U = n("rCmJ"),
            D = n("vBst");
        ! function(e) {
            e.ChangeTierButton = "ChangeTierButton", e.ChangePaymentMethodButton = "ChangePaymentMethodButton", e.DoNotRenewButton = "DoNotRenewButton", e.CancelGiftButton = "CancelGiftButton", e.CancelAndRefundButton = "CancelAndRefundButton"
        }(w || (w = {}));
        var F = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        show: !1
                    }, t.onEditClick = function() {
                        t.setState(function(e) {
                            return {
                                show: !e.show
                            }
                        })
                    }, t.onClickOut = function() {
                        t.setState({
                            show: !1
                        })
                    }, t.onDisableGiftBenefits = function() {
                        t.props.currentUserID && t.props.subscription.user && t.props.subscription.product && t.props.subscription.originID && t.props.showDisableGiftModal({
                            onCancel: t.props.closeModal,
                            onSuccess: t.props.onDisableGiftSuccess,
                            formattedChannelDisplayName: Object(_.a)(t.props.subscription.user.login, t.props.subscription.user.displayName),
                            currentUserID: t.props.currentUserID,
                            originID: t.props.subscription.originID,
                            subscriptionProductID: t.props.subscription.product.id
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    var e = Object(d.d)("Edit Subscription", "SubscriptionCard"),
                        t = this.renderInteractables();
                    return t.length < 1 ? null : c.createElement(S._8, {
                        position: S._15.Relative
                    }, c.createElement(U.a, {
                        onClickOut: this.onClickOut
                    }, c.createElement(S._52, {
                        label: e
                    }, c.createElement(S.w, {
                        onClick: this.onEditClick,
                        ariaLabel: e,
                        icon: S._25.Gear,
                        type: S.y.Secondary,
                        size: S.x.Default
                    })), c.createElement(S.q, {
                        show: this.state.show,
                        size: S.s.Small,
                        tailOffset: 10,
                        direction: S.r.Left
                    }, c.createElement(S._8, {
                        margin: {
                            y: 1
                        }
                    }, t))))
                }, t.prototype.renderInteractables = function() {
                    var e = [];
                    return this.props.subscription.gift && this.props.subscription.gift.isGift ? this.props.subscription.gift && this.props.subscription.gift.isGift && e.push(this.renderDisableGiftButton()) : (e.push(this.renderChangeTierButton()), this.props.subscription.renewsAt && new Date(this.props.subscription.renewsAt).getTime() > (new Date).getTime() && (e.push(this.renderChangePaymentMethodButton()), e.push(this.renderDoNotRenewButton())), this.props.subscription.isRefundable && e.push(this.renderCancelAndRefundButton())), e.filter(function(e) {
                        return !!e
                    })
                }, t.prototype.renderChangeTierButton = function() {
                    if (this.props.subscription.tier !== D.a.Tier3 && this.props.subscription.user) {
                        var e = {
                            linkTo: "/subs/" + this.props.subscription.user.login
                        };
                        return this.renderInteractable(w.ChangeTierButton, Object(d.d)("Change Subscription Tier", "EditSubscriptionBalloon"), e)
                    }
                    return null
                }, t.prototype.renderChangePaymentMethodButton = function() {
                    return this.renderInteractable(w.ChangePaymentMethodButton, Object(d.d)("Change Payment Method", "EditSubscriptionBalloon"), {
                        linkTo: "/payments"
                    })
                }, t.prototype.renderDoNotRenewButton = function() {
                    var e = {
                        alert: !0
                    };
                    return this.props.subscription.user && this.props.subscription.product ? (e.linkTo = this.props.subscription.product.url + "/ticket/edit", this.renderInteractable(w.DoNotRenewButton, Object(d.d)("Don't Renew Subscription", "EditSubscriptionBalloon"), e)) : null
                }, t.prototype.renderCancelAndRefundButton = function() {
                    if (this.props.subscription.user) {
                        var e = {
                            alert: !0,
                            linkTo: "/products/" + this.props.subscription.user.login + "/ticket/edit?cancel=true"
                        };
                        return this.renderInteractable(w.CancelAndRefundButton, Object(d.d)("Cancel And Refund", "EditSubscriptionBalloon"), e)
                    }
                    return null
                }, t.prototype.renderDisableGiftButton = function() {
                    var e = {
                        alert: !0,
                        onClick: this.onDisableGiftBenefits
                    };
                    return this.renderInteractable(w.CancelGiftButton, Object(d.d)("Disable Gift Benefits", "EditSubscriptionBalloon"), e)
                }, t.prototype.renderInteractable = function(e, t, n) {
                    return c.createElement(S._6, u.__assign({}, n, {
                        ariaLabel: t,
                        "data-test-selector": e,
                        key: "edit-subscription-" + e
                    }), c.createElement(S._8, {
                        padding: 1,
                        textAlign: S._45.Center
                    }, c.createElement(S.Q, null, t)))
                }, t
            }(c.Component),
            j = Object(g.compose)(Object(b.d)("EditSubscriptionBalloon", {
                autoReportInteractive: !0
            }))(F);
        var I = Object(i.b)(void 0, function(e) {
                return Object(r.b)({
                    showDisableGiftModal: function(e) {
                        var t = u.__rest(e, []);
                        return Object(E.d)(P, t)
                    },
                    closeModal: E.c
                }, e)
            })(j),
            R = n("7LIQ"),
            A = n("Tzcg"),
            M = n("+V/3");

        function x(e) {
            return {
                id: e.id,
                setID: e.setID,
                version: e.version,
                title: e.title,
                image1x: e.image1x,
                image2x: e.image2x,
                image4x: e.image4x,
                clickAction: M.b,
                clickURL: e.clickURL || ""
            }
        }
        var L, G = n("MjRD");
        (L || (L = {})).HasAdFreeMessage = "HasAdFreeMessage";
        var V, q, Q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        show: !1
                    }, t.toggleBenefitsBalloon = function() {
                        t.setState(function(e) {
                            return {
                                show: !e.show
                            }
                        })
                    }, t.onClickOut = function() {
                        t.setState({
                            show: !1
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractiveIfReady()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractiveIfReady()
                }, t.prototype.render = function() {
                    return c.createElement(S._8, null, c.createElement(U.a, {
                        onClickOut: this.onClickOut
                    }, c.createElement(S.v, {
                        type: S.B.Text,
                        onClick: this.toggleBenefitsBalloon
                    }, Object(d.d)("Show Benefits", "SubscriptionBenefitsBalloon")), c.createElement(S.q, {
                        show: this.state.show,
                        offsetX: "2rem",
                        offsetY: "-0.5rem",
                        size: S.s.Medium
                    }, c.createElement(S._8, {
                        padding: 2
                    }, c.createElement(S._2, {
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(S.Q, {
                        bold: !0
                    }, Object(d.d)("Subscription Benefits", "SubscriptionBenefitsBalloon"))), this.renderContent()))))
                }, t.prototype.renderContent = function() {
                    return this.props.data.user && this.props.data.user.subscriptionProducts ? c.createElement(c.Fragment, null, c.createElement(S._2, {
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(S.Q, null, Object(d.d)("Directly support the streamer", "SubscriptionBenefitsBalloon"))), this.hasAdFree && c.createElement(S._2, {
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(S.Q, {
                        "data-test-selector": L.HasAdFreeMessage
                    }, Object(d.d)("Ad-free streams (with limited exceptions)", "SubscriptionBenefitsBalloon"))), this.renderSubscriberBadges(), c.createElement(S._2, {
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(S.Q, null, Object(d.d)("Chat during subscriber-only mode", "SubscriptionBenefitsBalloon"))), this.hasFastChat && c.createElement(S._2, {
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(S.Q, null, Object(d.d)("Not affected by chat slow mode", "SubscriptionBenefitsBalloon"))), this.hasSubOnlyVideoArchive && c.createElement(S._2, {
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(S.Q, null, Object(d.d)("Access to sub only VODs", "SubscriptionBenefitsBalloon"))), this.renderSubscriberEmotes()) : this.props.data.loading ? c.createElement(S._10, {
                        fillContent: !0
                    }) : null
                }, t.prototype.renderSubscriberBadges = function() {
                    var e = [];
                    this.props.data && this.props.data.user && this.props.data.user.broadcastBadges && this.props.data.user.broadcastBadges.filter(function(e) {
                        return e && "subscriber" === e.setID
                    }).sort(this.compareBadgeVersion).forEach(function(t) {
                        if (t) {
                            var n = x(t);
                            e.push(c.createElement(B.a, {
                                key: "subscription-benefit-badge-" + t.id,
                                badge: n
                            }))
                        }
                    });
                    return e.length < 1 ? null : c.createElement(S._8, {
                        margin: {
                            bottom: 1
                        },
                        display: S.R.Flex
                    }, c.createElement(S._2, {
                        margin: {
                            right: .5
                        },
                        flexShrink: 1
                    }, c.createElement(S.Q, null, Object(d.d)("Subscriber badges:", "SubscriptionBenefitsBalloon"))), c.createElement(S._8, {
                        display: S.R.Flex,
                        alignItems: S.c.Center,
                        flexShrink: 0
                    }, e))
                }, t.prototype.renderSubscriberEmotes = function() {
                    var e = this.getEmotesFromProducts();
                    return 0 === e.length ? null : c.createElement(S._8, null, c.createElement(S.Q, null, Object(d.d)("{count, plural, one {# subscriber emote} other {# subscriber emotes}}", {
                        count: e.length
                    }, "SubscriptionBenefitsBalloon")), c.createElement(R.a, {
                        emoteSet: {
                            id: "",
                            emotes: e
                        },
                        locked: !1
                    }))
                }, Object.defineProperty(t.prototype, "hasAdFree", {
                    get: function() {
                        var e = !1;
                        return this.props.data.user && this.props.data.user.subscriptionProducts && (e = this.props.data.user.subscriptionProducts.some(function(e) {
                            return !!(e && e.self && e.self.benefit && e.tier === e.self.benefit.tier && e.hasAdFree)
                        })), e
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "hasSubOnlyVideoArchive", {
                    get: function() {
                        var e = !1;
                        return this.props.data.user && this.props.data.user.subscriptionProducts && (e = this.props.data.user.subscriptionProducts.some(function(e) {
                            return !!(e && e.self && e.self.benefit && e.tier === e.self.benefit.tier && e.hasSubonlyVideoArchive)
                        })), e
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "hasFastChat", {
                    get: function() {
                        var e = !1;
                        return this.props.data.user && this.props.data.user.subscriptionProducts && (e = this.props.data.user.subscriptionProducts.some(function(e) {
                            return !!(e && e.self && e.self.benefit && e.tier === e.self.benefit.tier && e.hasFastChat)
                        })), e
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.compareBadgeVersion = function(e, t) {
                    return (e && Number(e.version) || 0) - (t && Number(t.version) || 0)
                }, t.prototype.reportInteractiveIfReady = function() {
                    this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t.prototype.getSubscribedProductAndTiersBelow = function() {
                    return this.props.data.user && this.props.data.user.subscriptionProducts ? this.props.data.user.subscriptionProducts.filter(function(e) {
                        return !!(e && e.self && e.self.benefit) && (e.tier !== D.a.Custom && Number(e.tier) || Number(D.a.Tier1)) <= (e.self.benefit.tier !== D.a.Custom && Number(e.self.benefit.tier) || Number(D.a.Tier1))
                    }) : []
                }, t.prototype.getEmotesFromProducts = function() {
                    var e = this.getSubscribedProductAndTiersBelow().filter(function(e) {
                        return e && e.emotes
                    }).map(function(e) {
                        return e.emotes
                    }).reduce(function(e, t) {
                        return e.concat(t)
                    }, []).filter(function(e) {
                        return e && e.id && e.token
                    }).map(function(e) {
                        return {
                            id: e.id,
                            token: e.token
                        }
                    });
                    return Object(A.b)(e)
                }, t
            }(c.Component),
            z = Object(g.compose)(Object(v.a)(G, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelLogin
                        }
                    }
                }
            }), Object(b.d)("SubscriptionBenefitsBalloon"))(Q),
            H = n("E9Qg"),
            W = n.n(H),
            $ = (n("AnDU"), function(e) {
                var t = {
                    backgroundImage: "url(" + (e.bannerImageSrc || W.a) + ")"
                };
                return c.createElement(S._35, {
                    background: S.n.Base,
                    className: "subscription-card-banner"
                }, c.createElement(S.O, {
                    to: e.linkTo
                }, c.createElement("div", {
                    className: "subscription-card-banner__background",
                    style: t
                })))
            }),
            Y = n("cpDk");
        n("16B9");
        ! function(e) {
            e[e.NotStarted = 0] = "NotStarted", e[e.InProgress = 1] = "InProgress", e[e.Error = 2] = "Error", e[e.Success = 3] = "Success"
        }(V || (V = {})),
        function(e) {
            e.TierDisplay = "TierDisplay", e.ExpiryMessage = "ExpiryMessage", e.PaidUpgradeMessage = "PaidUpgradeMessage", e.CancelPaidUpgradeButton = "CancelPaidUpgradeButton"
        }(q || (q = {}));
        var J, X, K = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        cancelPaidUpgradeStatus: V.NotStarted
                    }, t.onCancelPaidUpgrade = function() {
                        return u.__awaiter(t, void 0, void 0, function() {
                            return u.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if (!(this.props.currentUserID && this.props.subBenefit.product && this.props.subBenefit.product.name && this.props.subBenefit.originID && this.props.subBenefit.paidUpgrade)) return [3, 4];
                                        this.setState({
                                            cancelPaidUpgradeStatus: V.InProgress
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, function(e, t, n, i) {
                                            return u.__awaiter(this, void 0, void 0, function() {
                                                var r, s;
                                                return u.__generator(this, function(a) {
                                                    switch (a.label) {
                                                        case 0:
                                                            r = {
                                                                reason: "cancel paid upgrade",
                                                                gift_purchase_profile_id: i,
                                                                purchase_profile_id: n
                                                            }, a.label = 1;
                                                        case 1:
                                                            return a.trys.push([1, 3, , 4]), [4, C.a.postOrThrow("/kraken/checkout/users/" + e + "/products/" + t + "/purchase/cancel", {
                                                                body: r
                                                            }, {
                                                                version: 5
                                                            })];
                                                        case 2:
                                                            return a.sent(), [3, 4];
                                                        case 3:
                                                            return s = a.sent(), [2, Promise.reject(s)];
                                                        case 4:
                                                            return [2]
                                                    }
                                                })
                                            })
                                        }(this.props.currentUserID, this.props.subBenefit.product.name, this.props.subBenefit.paidUpgrade.originID, this.props.subBenefit.originID)];
                                    case 2:
                                        return e.sent(), this.setState({
                                            cancelPaidUpgradeStatus: V.Success
                                        }, this.onCancelPaidUpgradeSuccess), [3, 4];
                                    case 3:
                                        return e.sent(), this.setState({
                                            cancelPaidUpgradeStatus: V.Error
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.onGiftDisableSuccess = function() {
                        Object(k.d)({
                            fragment: Y,
                            id: t.props.subBenefit.id,
                            mutator: function(e) {
                                return {
                                    __typename: "SubscriptionBenefit",
                                    id: e.id,
                                    originID: null,
                                    isRefundable: !1,
                                    endsAt: null,
                                    gift: null,
                                    paidUpgrade: null,
                                    product: null,
                                    purchasedWithPrime: !1,
                                    renewsAt: null,
                                    tier: "1000",
                                    user: null
                                }
                            }
                        })
                    }, t.onCancelPaidUpgradeSuccess = function() {
                        Object(k.d)({
                            fragment: Y,
                            id: t.props.subBenefit.id,
                            mutator: function(e) {
                                return u.__assign({}, e, {
                                    paidUpgrade: null
                                })
                            }
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    var e, t, n = null,
                        i = "",
                        r = void 0;
                    if (this.props.subBenefit.user && this.props.subBenefit.user.displayName && this.props.subBenefit.user.login) n = this.props.subBenefit.user.bannerImageURL, e = Object(_.a)(this.props.subBenefit.user.login, this.props.subBenefit.user.displayName), i = this.props.subBenefit.user.displayName, r = "/" + this.props.subBenefit.user.login, t = this.props.subBenefit.user.profileImageURL;
                    else {
                        if (!this.isTurbo) return null;
                        i = e = Object(d.d)("Twitch Turbo", "SubscriptionCard"), r = "/settings/turbo", t = "https://www.twitch.tv/images/xarth/pages/turbo/features_badge.png"
                    }
                    return c.createElement(S._8, {
                        className: "subscription-card",
                        margin: {
                            bottom: 2
                        }
                    }, c.createElement($, {
                        bannerImageSrc: n,
                        linkTo: r
                    }), c.createElement(S.C, {
                        border: !0
                    }, c.createElement(S.D, null, c.createElement(S.O, {
                        to: r
                    }, c.createElement(S._35, {
                        position: S._15.Absolute,
                        className: "subscription-card__channel-avatar",
                        border: !0,
                        borderRadius: S.t.Small,
                        background: S.n.Base
                    }, c.createElement(S.m, {
                        alt: i,
                        size: 50,
                        src: t
                    }))), c.createElement(S._35, {
                        background: S.n.Base,
                        padding: {
                            left: 2,
                            right: 1,
                            y: 1
                        }
                    }, c.createElement(S._8, {
                        display: S.R.Flex,
                        justifyContent: S._7.End,
                        className: "subscription-card__edit-button"
                    }, c.createElement(I, {
                        subscription: this.props.subBenefit,
                        currentUserID: this.props.currentUserID,
                        onDisableGiftSuccess: this.onGiftDisableSuccess
                    })), c.createElement(S._52, {
                        label: i,
                        offsetY: "-1rem"
                    }, c.createElement(S._8, {
                        display: S.R.Flex,
                        flexDirection: S.T.Row,
                        margin: {
                            y: 1
                        },
                        ellipsis: !0
                    }, c.createElement(S.O, {
                        hoverUnderlineNone: !0,
                        type: S.P.Inherit,
                        to: r,
                        className: "subscription-card__channel-name"
                    }, c.createElement(S.Q, {
                        bold: !0,
                        type: S._49.H3,
                        ellipsis: !0
                    }, e)), this.renderVerifiedPartnerBadge())), this.renderTierDisplay(), this.renderCurrentSubscriberBadge(), this.renderGiftInfo(), this.renderBenefitRenewsOrEndsOn(), this.renderPaidUpgradeInfo(), c.createElement(S._8, {
                        display: S.R.Flex,
                        margin: {
                            top: .5
                        }
                    }, this.props.subBenefit.user && this.props.subBenefit.user.login && c.createElement(z, {
                        channelLogin: this.props.subBenefit.user.login
                    }), this.renderPaidUpgradeButton())))))
                }, t.prototype.renderVerifiedPartnerBadge = function() {
                    var e = !!(this.props.subBenefit.user && this.props.subBenefit.user.roles && this.props.subBenefit.user.roles.isPartner);
                    return this.isTurbo || !e ? null : c.createElement(S._8, {
                        padding: {
                            left: 1
                        },
                        display: S.R.Flex,
                        alignItems: S.c.Center
                    }, c.createElement(S._24, {
                        asset: S._25.Verified,
                        type: S._26.Brand
                    }))
                }, t.prototype.renderTierDisplay = function() {
                    return c.createElement(S._8, {
                        display: S.R.Flex,
                        "data-test-selector": q.TierDisplay
                    }, c.createElement(S._35, {
                        background: S.n.Alt2,
                        display: S.R.Flex,
                        flexDirection: S.T.Row,
                        className: this.props.subBenefit.purchasedWithPrime ? "subscription-card__tier-display-prime" : "subscription-card__tier-display",
                        padding: {
                            x: 1,
                            y: .5
                        },
                        justifyContent: S._7.Center,
                        borderRadius: S.t.Small,
                        margin: {
                            bottom: 2
                        }
                    }, c.createElement(S._24, {
                        asset: this.props.subBenefit.purchasedWithPrime ? S._25.Crown : S._25.Star
                    }), c.createElement(S._2, {
                        margin: {
                            left: .5
                        }
                    }, c.createElement(S.Q, {
                        bold: !0
                    }, this.getTierText()))))
                }, t.prototype.getTierText = function() {
                    if (this.props.subBenefit.purchasedWithPrime) return Object(d.d)("Prime Subscription", "SubscriptionCard");
                    if (this.isTurbo) return Object(d.d)("Turbo Subscription", "SubscriptionCard");
                    switch (this.props.subBenefit.tier) {
                        case "1000":
                            return Object(d.d)("Tier 1 Subscription", "SubscriptionCard");
                        case "2000":
                            return Object(d.d)("Tier 2 Subscription", "SubscriptionCard");
                        case "3000":
                            return Object(d.d)("Tier 3 Subscription", "SubscriptionCard");
                        case "custom":
                        default:
                            return Object(d.d)("Subscription", "SubscriptionCard")
                    }
                }, t.prototype.renderCurrentSubscriberBadge = function() {
                    if (!(this.isTurbo || this.props.subBenefit.user && this.props.subBenefit.user.self)) return null;
                    var e = Object(d.d)("Current Subscriber Badge", "SubscriptionCard"),
                        t = null;
                    if (this.props.subBenefit.user && this.props.subBenefit.user.self ? t = this.props.subBenefit.user.self.displayBadges.find(function(e) {
                            return null !== e && "subscriber" === e.setID
                        }) : this.isTurbo && this.props.turboBadge && (e = Object(d.d)("Turbo Badge", "SubscriptionCard"), t = this.props.turboBadge), t) {
                        var n = x(t);
                        return c.createElement(S._8, {
                            display: S.R.Flex,
                            margin: {
                                bottom: .5
                            }
                        }, c.createElement(B.a, {
                            badge: n
                        }), c.createElement(S._2, {
                            margin: {
                                left: .5
                            }
                        }, c.createElement(S.Q, null, e)))
                    }
                    return null
                }, t.prototype.renderGiftInfo = function() {
                    if (this.props.subBenefit.gift && this.props.subBenefit.gift.isGift) {
                        var e = void 0;
                        return e = this.props.subBenefit.gift.gifter ? Object(d.d)("Gift Subscription from {sender}", {
                            sender: Object(_.a)(this.props.subBenefit.gift.gifter.login, this.props.subBenefit.gift.gifter.displayName)
                        }, "SubscriptionCard") : Object(d.d)("Gift Subscription", "SubscriptionCard"), c.createElement(S._8, {
                            display: S.R.Flex,
                            margin: {
                                bottom: .5
                            }
                        }, c.createElement(S._8, {
                            margin: {
                                right: 1
                            }
                        }, c.createElement(S._24, {
                            asset: S._25.Gift
                        })), c.createElement(S.Q, null, e))
                    }
                    return null
                }, t.prototype.renderPaidUpgradeButton = function() {
                    if (this.props.subBenefit.user && this.props.subBenefit.user.login && this.props.subBenefit.gift && this.props.subBenefit.gift.isGift && this.props.subBenefit.product && this.props.subBenefit.product.url) {
                        if (!this.props.subBenefit.paidUpgrade) return c.createElement(S.v, {
                            type: S.B.Text,
                            linkTo: this.props.subBenefit.product.url
                        }, Object(d.d)("Continue Subscription", "SubscriptionCard"));
                        if (this.state.cancelPaidUpgradeStatus !== V.Success) return c.createElement(S.v, {
                            type: S.B.Text,
                            onClick: this.onCancelPaidUpgrade,
                            state: this.state.cancelPaidUpgradeStatus === V.InProgress ? S.A.Loading : S.A.Default,
                            "data-test-selector": q.CancelPaidUpgradeButton
                        }, Object(d.d)("Cancel Paid Subscription", "SubscriptionCard"))
                    }
                    return null
                }, t.prototype.renderBenefitRenewsOrEndsOn = function() {
                    var e = Object(d.d)("Lifetime Subscription", "SubscriptionCard"),
                        t = S._25.Timeout;
                    if (!this.props.subBenefit.renewsAt && this.props.subBenefit.endsAt) {
                        var n = new Date(this.props.subBenefit.endsAt),
                            i = Object(d.c)(n, {
                                month: "short",
                                day: "numeric"
                            }),
                            r = Object(d.h)(n);
                        e = Object(d.d)("Benefits end {date} ({relative})", {
                            date: i,
                            relative: r
                        }, "SubscriptionCard"), t = S._25.Timeout
                    } else if (this.props.subBenefit.renewsAt) {
                        var s = new Date(this.props.subBenefit.renewsAt);
                        if (s.getTime() > (new Date).getTime()) {
                            i = Object(d.c)(s, {
                                month: "short",
                                day: "numeric"
                            }), r = Object(d.h)(s);
                            e = Object(d.d)("Renews on {date} ({relative})", {
                                date: i,
                                relative: r
                            }, "SubscriptionCard"), t = S._25.Refresh
                        }
                    }
                    return null !== e ? c.createElement(S._8, {
                        display: S.R.Flex,
                        margin: {
                            bottom: .5
                        },
                        "data-test-selector": q.ExpiryMessage
                    }, c.createElement(S._8, {
                        margin: {
                            right: 1
                        }
                    }, c.createElement(S._24, {
                        asset: t
                    })), c.createElement(S.Q, null, e)) : null
                }, t.prototype.renderPaidUpgradeInfo = function() {
                    if (this.props.subBenefit.paidUpgrade && this.state.cancelPaidUpgradeStatus !== V.Success) {
                        var e = Object(d.c)(new Date(this.props.subBenefit.paidUpgrade.startsAt), {
                            month: "short",
                            day: "numeric"
                        });
                        return c.createElement(S._8, {
                            display: S.R.Flex,
                            margin: {
                                bottom: .5
                            },
                            "data-test-selector": q.PaidUpgradeMessage
                        }, c.createElement(S._8, {
                            margin: {
                                right: 1
                            }
                        }, c.createElement(S._24, {
                            asset: S._25.Refresh
                        })), c.createElement(S.Q, null, Object(d.d)("Your new {price} Paid Subscription will begin on {date}", {
                            price: this.props.subBenefit.paidUpgrade.price,
                            date: e
                        }, "SubscriptionCard")))
                    }
                    return null
                }, Object.defineProperty(t.prototype, "isTurbo", {
                    get: function() {
                        return !(!this.props.subBenefit.product || "324" !== this.props.subBenefit.product.id)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(c.Component),
            Z = Object(g.compose)(Object(b.d)("SubscriptionCard", {
                autoReportInteractive: !0
            }))(K),
            ee = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return c.createElement(S._8, {
                        margin: {
                            top: 2
                        },
                        className: "subscriptions-management-tower"
                    }, c.createElement(S._55, {
                        gutterSize: S._57.Small,
                        childWidth: S._56.Large
                    }, this.renderSubCards()))
                }, t.prototype.renderSubCards = function() {
                    for (var e = [], t = !1, n = 0, i = this.props.subscriptions; n < i.length; n++) {
                        var r = i[n];
                        if (r && this.filterSubType(r)) {
                            var s = c.createElement(Z, {
                                subBenefit: r,
                                key: "subscription-" + r.id,
                                turboBadge: this.props.turboBadge,
                                currentUserID: this.props.currentUserID
                            });
                            r.purchasedWithPrime ? (t = !0, e.unshift(s)) : e.push(s)
                        }
                    }
                    return this.props.type === X.Paid && this.props.hasPrime && !t && e.unshift(c.createElement(y, {
                        key: "prime-subscription-available"
                    })), e
                }, t.prototype.filterSubType = function(e) {
                    return !!e && (!(this.props.type !== X.Other || !e.product || "324" !== e.product.id) || !(this.props.type === X.Other || !e.user))
                }, t
            }(c.Component),
            te = Object(g.compose)(Object(b.d)("SubscriptionsManagementTower", {
                autoReportInteractive: !0
            }))(ee),
            ne = n("fEk1");
        (J || (J = {})).EmptyMessage = "SubscriptionsEmptyMessage",
            function(e) {
                e[e.Paid = 0] = "Paid", e[e.Gifts = 1] = "Gifts", e[e.Mobile = 2] = "Mobile", e[e.Other = 3] = "Other"
            }(X || (X = {}));
        var ie = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return u.__extends(t, e), t.prototype.componentDidMount = function() {
                this.reportInteractiveIfReady(), this.reportSubCount()
            }, t.prototype.componentDidUpdate = function() {
                this.reportInteractiveIfReady(), this.reportSubCount()
            }, t.prototype.render = function() {
                if (!this.props.visible) return null;
                if (this.props.data.currentUser) {
                    if (this.props.data.currentUser.subscriptionBenefits && this.props.data.currentUser.subscriptionBenefits.edges) {
                        var e = this.props.data.currentUser.subscriptionBenefits.edges.map(function(e) {
                            return e.node
                        });
                        return e.length < 1 ? this.renderEmptyMessage() : c.createElement(S._8, {
                            className: "subscriptions-management-tab"
                        }, c.createElement(te, {
                            subscriptions: e,
                            hasPrime: this.props.data.currentUser.hasPrime,
                            type: this.props.subscriptionType,
                            turboBadge: this.getTurboBadge(),
                            currentUserID: this.props.data.currentUser.id
                        }), c.createElement(h.a, {
                            enabled: this.props.data.currentUser && this.props.data.currentUser.subscriptionBenefits && this.props.data.currentUser.subscriptionBenefits.pageInfo.hasNextPage,
                            loadMore: this.props.loadMore
                        }))
                    }
                    return this.renderEmptyMessage()
                }
                return this.props.data.loading ? c.createElement(S._10, {
                    fillContent: !0
                }) : this.props.data.error ? c.createElement(l.a, {
                    message: Object(d.d)("Unable to show your subscriptions at this time. Please try again later.", "SubscriptionsManagementTab")
                }) : void 0
            }, t.prototype.renderEmptyMessage = function() {
                var e = "";
                return e = this.props.subscriptionType === X.Paid ? Object(d.d)("Any active subscriptions you purchase will show up here.", "SubscriptionsManagementTab") : Object(d.d)("Any active gift subscriptions you have will show up here.", "SubscriptionsManagementTab"), c.createElement(S._35, {
                    display: S.R.Flex,
                    justifyContent: S._7.Center,
                    background: S.n.Base,
                    padding: 3,
                    border: !0,
                    "data-test-selector": J.EmptyMessage
                }, c.createElement(S.Q, null, e))
            }, t.prototype.getSubCount = function() {
                var e = this;
                return this.props.data.currentUser && this.props.data.currentUser.subscriptionBenefits && this.props.data.currentUser.subscriptionBenefits.edges ? this.props.data.currentUser.subscriptionBenefits.edges.reduce(function(t, n) {
                    return e.props.subscriptionType !== X.Other && n.node && n.node.user ? ++t : e.props.subscriptionType === X.Other && n.node && !n.node.user && n.node.product && "324" === n.node.product.id ? ++t : t
                }, 0) : 0
            }, t.prototype.getTurboBadge = function() {
                var e = void 0;
                return this.props.data.currentUser && this.props.data.currentUser.availableBadges && null === (e = this.props.data.currentUser.availableBadges.find(function(e) {
                    return !!e && "turbo" === e.setID
                })) && (e = void 0), e
            }, t.prototype.reportSubCount = function() {
                this.props.data.currentUser && this.props.data.currentUser.subscriptionBenefits && this.props.data.currentUser.subscriptionBenefits.edges && this.props.reportSubCount(this.getSubCount())
            }, t.prototype.reportInteractiveIfReady = function() {
                this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
            }, t
        }(c.Component);

        function re(e) {
            switch (e) {
                case X.Gifts:
                    return {
                        filter: "GIFT",
                        platform: "WEB"
                    };
                case X.Mobile:
                    return {
                        filter: "PLATFORM",
                        platform: "ANDROID"
                    };
                case X.Other:
                    return {
                        filter: "ALL",
                        platform: "WEB"
                    };
                case X.Paid:
                default:
                    return {
                        filter: "PLATFORM",
                        platform: "WEB"
                    }
            }
        }
        var se, ae, oe = Object(g.compose)(Object(v.a)(ne, {
                options: function(e) {
                    return {
                        variables: {
                            limit: 100,
                            cursor: "",
                            filter: re(e.subscriptionType).filter,
                            platform: re(e.subscriptionType).platform
                        }
                    }
                },
                props: function(e) {
                    return u.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: ne,
                                variables: u.__assign({}, e.data.variables, {
                                    cursor: e.data.currentUser && e.data.currentUser.subscriptionBenefits && e.data.currentUser.subscriptionBenefits.edges && e.data.currentUser.subscriptionBenefits.edges[e.data.currentUser.subscriptionBenefits.edges.length - 1].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult,
                                        i = [];
                                    return e.currentUser && e.currentUser.subscriptionBenefits && e.currentUser.subscriptionBenefits.edges && n.currentUser && n.currentUser.subscriptionBenefits && n.currentUser.subscriptionBenefits.edges && (i = Object(k.c)(e.currentUser.subscriptionBenefits.edges, n.currentUser.subscriptionBenefits.edges)), {
                                        currentUser: u.__assign({}, n.currentUser, {
                                            subscriptionBenefits: u.__assign({}, n.currentUser && n.currentUser.subscriptionBenefits ? n.currentUser.subscriptionBenefits : {}, {
                                                edges: i
                                            })
                                        })
                                    }
                                }
                            })
                        }
                    })
                }
            }), Object(b.d)("SubscriptionsManagementTab"))(ie),
            ue = n("9+OC");
        n("tCaF");
        ! function(e) {
            e.PaidTab = "SubscriptionsPaidTab", e.GiftsTab = "SubscriptionsGiftsTab", e.MobileTab = "SubscriptionsMobileTab", e.OtherTab = "SubscriptionsOtherTab"
        }(se || (se = {})),
        function(e) {
            e.Gifts = "GIFTS", e.Paid = "PAID", e.Mobile = "MOBILE", e.Other = "OTHER"
        }(ae || (ae = {}));
        var ce = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        currentTab: ae.Paid,
                        paidWebSubCount: 0,
                        giftSubCount: 0,
                        mobileSubCount: 0,
                        otherSubCount: 0
                    }, t.toggleTab = function(e) {
                        if (e.currentTarget.parentElement) switch (e.currentTarget.parentElement.getAttribute("data-tab-title")) {
                            case ae.Gifts:
                                t.setState({
                                    currentTab: ae.Gifts
                                });
                                break;
                            case ae.Mobile:
                                t.setState({
                                    currentTab: ae.Mobile
                                });
                                break;
                            case ae.Other:
                                t.setState({
                                    currentTab: ae.Other
                                });
                                break;
                            case ae.Paid:
                            default:
                                t.setState({
                                    currentTab: ae.Paid
                                })
                        }
                    }, t.updateWebSubCount = function(e) {
                        t.setState({
                            paidWebSubCount: e
                        })
                    }, t.updateGiftSubCount = function(e) {
                        t.setState({
                            giftSubCount: e
                        })
                    }, t.updateOtherSubCount = function(e) {
                        t.setState({
                            otherSubCount: e
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    d.o.setPageTitle("Subscriptions")
                }, t.prototype.render = function() {
                    return this.props.isLoggedIn ? c.createElement(S._35, {
                        className: "subscriptions-management",
                        background: S.n.Alt,
                        alignContent: S.b.Center,
                        margin: 4
                    }, c.createElement(f.b, {
                        suppressScrollX: !0
                    }), c.createElement(S.Q, {
                        type: S._49.H2
                    }, Object(d.d)("Subscriptions", "SubscriptionsManagementPage")), this.renderTabs(), this.renderTabContent(), c.createElement("div", {
                        className: "subscriptions-management__balloon-spacer"
                    }), " ") : (this.props.login(), c.createElement(l.a, {
                        message: Object(d.d)("You must be logged in to view this page", "SubscriptionsManagementPage")
                    }))
                }, t.prototype.renderTabs = function() {
                    return c.createElement(S._37, null, c.createElement(S._36, {
                        active: this.state.currentTab === ae.Paid,
                        onClick: this.toggleTab,
                        "data-tab-title": ae.Paid
                    }, Object(d.d)("Your Subscriptions", "SubscriptionsManagementPage")), c.createElement(S._36, {
                        active: this.state.currentTab === ae.Gifts,
                        onClick: this.toggleTab,
                        "data-tab-title": ae.Gifts
                    }, Object(d.d)("Gift Subscriptions", "SubscriptionsManagementPage")), c.createElement(S._36, {
                        active: this.state.currentTab === ae.Other,
                        onClick: this.toggleTab,
                        "data-tab-title": ae.Other
                    }, Object(d.d)("Other Subscriptions", "SubscriptionsManagementPage")))
                }, t.prototype.renderTabContent = function() {
                    var e, t, n;
                    switch (this.state.currentTab) {
                        case ae.Gifts:
                            e = X.Gifts, t = se.GiftsTab, n = this.updateGiftSubCount;
                            break;
                        case ae.Other:
                            e = X.Other, t = se.OtherTab, n = this.updateOtherSubCount;
                            break;
                        case ae.Paid:
                        default:
                            t = se.PaidTab, e = X.Paid, n = this.updateWebSubCount
                    }
                    return c.createElement(S._8, {
                        margin: {
                            top: 2
                        }
                    }, c.createElement(oe, {
                        subscriptionType: e,
                        visible: !0,
                        reportSubCount: n,
                        "data-test-selector": t
                    }))
                }, t
            }(c.Component),
            de = Object(r.d)(Object(b.d)("SubsManagementPage", {
                autoReportInteractive: !0,
                destination: m.a.SubsManagementPage
            }), Object(p.a)({
                location: ue.PageviewLocation.SubsManagementPage
            }))(ce);
        var le = Object(i.b)(function(e) {
            return {
                isLoggedIn: Object(o.d)(e)
            }
        }, function(e) {
            return Object(r.b)({
                login: function() {
                    return a.f(s.a.SubsManagementPage)
                }
            }, e)
        })(de);
        n.d(t, "SubscriptionsManagementPage", function() {
            return le
        })
    },
    l6se: function(e, t) {},
    mbxv: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            s = n("+V/3"),
            a = n("Odds"),
            o = (n("2IkU"), n("6sO2")),
            u = n("vH/s"),
            c = function(e) {
                var t = Date.now() / 1e3;
                e.badge_type = e.badge_type.toLowerCase().replace(/( |\s)/g, "_"), o.o.tracking.track(u.SpadeEventType.ChatBadgeClick, Object.assign({
                    client_time: t
                }, e))
            };
        n.d(t, "a", function() {
            return d
        });
        var d = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    isHovering: !1
                }, t.onMouseOver = function() {
                    t.setState({
                        isHovering: !0
                    })
                }, t.onMouseOut = function() {
                    t.setState({
                        isHovering: !1
                    })
                }, t.onBadgeClickHandler = function() {
                    c({
                        badge_type: t.props.badge.title,
                        badge_url_target: t.targetURL
                    })
                }, t
            }
            return i.__extends(t, e), t.prototype.render = function() {
                var e = this.props.badge,
                    t = e.title,
                    n = e.image1x,
                    i = e.image2x,
                    s = e.image4x,
                    u = r.createElement("img", {
                        alt: t,
                        "aria-label": Object(o.d)("{badgeTitle} badge", {
                            badgeTitle: t
                        }, "Badge"),
                        className: "chat-badge",
                        src: n,
                        srcSet: n + " 1x, " + i + " 2x, " + s + " 4x",
                        onMouseOver: this.onMouseOver,
                        onMouseOut: this.onMouseOut
                    });
                return this.targetURL = this.getTargetURL(), "" !== this.targetURL && (u = r.createElement("a", {
                    href: this.targetURL,
                    onClick: this.onBadgeClickHandler,
                    target: "_blank",
                    "data-a-target": "chat-badge"
                }, u)), this.state.isHovering ? r.createElement(a._52, {
                    align: a._53.Left,
                    "data-a-target": "chat-badge",
                    display: a.R.Inline,
                    key: n,
                    label: t,
                    offsetY: "0.9rem"
                }, u) : u
            }, t.prototype.getTargetURL = function() {
                var e = this.props.badge;
                switch (e.clickAction) {
                    case s.d:
                        return e.clickURL;
                    case s.b:
                        return e.channelName ? this.getSubscriberLink() : "";
                    case s.c:
                        return "https://www.twitch.tv/products/turbo?ref=chat_badge";
                    default:
                        return ""
                }
            }, t.prototype.getSubscriberLink = function() {
                return "https://www.twitch.tv/" + this.props.badge.channelName + "/subscribe?ref=in_chat_subscriber_link"
            }, t
        }(r.Component)
    },
    tCaF: function(e, t) {},
    urTJ: function(e, t, n) {
        "use strict";
        var i = n("mbxv");
        n.d(t, "a", function() {
            return i.a
        })
    }
});
//# sourceMappingURL=pages.subscriptions-management-7ce9b05e2580d247c22ab7453d9696b6.js.map