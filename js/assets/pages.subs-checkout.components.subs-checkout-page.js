webpackJsonp([55], {
    "+V/3": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return r
        }), n.d(t, "d", function() {
            return a
        }), n.d(t, "a", function() {
            return s
        });
        var i = "subscribe_to_channel",
            r = "turbo",
            a = "visit_url",
            s = "broadcaster"
    },
    "2IkU": function(e, t) {},
    "2dVl": function(e, t) {},
    "3T7g": function(e, t, n) {
        "use strict";
        var i = n("RbGx"),
            r = n("mbxv"),
            a = n("+V/3"),
            s = (n("AwFw"), n("TToO")),
            o = function() {
                function e(e, t, n) {
                    this.globalsBySet = new Map, this.channelsBySet = new Map, this.indexBadges(e, this.globalsBySet, n), Array.isArray(t) && this.indexBadges(t, this.channelsBySet, n)
                }
                return e.prototype.getBadge = function(e, t) {
                    var n = this.channelsBySet.get(e);
                    return n && n.has(t) ? n.get(t) || null : void 0 !== (n = this.globalsBySet.get(e)) && n.get(t) || null
                }, e.prototype.indexBadges = function(e, t, n) {
                    e.forEach(function(e) {
                        n && e.clickAction === a.b && (e = s.__assign({}, e, {
                            channelName: n
                        }));
                        var i = t.get(e.setID);
                        i || (i = new Map, t.set(e.setID, i)), i.set(e.version, e)
                    })
                }, e
            }();
        new o([], [], "");
        n.d(t, "b", function() {
            return i.a
        }), n.d(t, "a", function() {
            return r.a
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "c", function() {
            return o
        })
    },
    "7gLH": function(e, t) {},
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var i = n("TToO"),
            r = n("6sO2"),
            a = n("Aj/L"),
            s = function() {
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
                    var s = Object(a.c)(n);
                    return s && (i.Authorization = "OAuth " + s.authToken, s.legacyCSRFToken && (i["Twitch-Api-Token"] = s.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        i[e] && delete i[e]
                    }), i
                }, e
            }()
    },
    AwFw: function(e, t) {},
    Heyg: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CheckoutPayments"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "productName"
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
                            value: "isGift"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "recipientID"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "ID"
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
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "subscriptionProduct"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "productName"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "productName"
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
                                    value: "price"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "type"
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
                                    value: "displayName"
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
                                            value: "checkoutConfigs"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "isGift"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "isGift"
                                                }
                                            }
                                        }, {
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "recipientID"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "recipientID"
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
                                                    value: "xsolla"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "iframeURL"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "recurly"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "payWithAmazonConfigs"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "clientID"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "isProduction"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "sellerID"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "publicKey"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "braintreeClientAuthorization"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "zuora"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "externalAccountID"
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
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "tenantID"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "publicKey"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "signature"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "hostedPageID"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "hostedPageURL"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "externalAccountID"
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
                                            value: "purchase"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "details"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "paymentProvider"
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
                                                            value: "currency"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "state"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "cancelledAt"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "compatiblePurchases"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "state"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "paymentProvider"
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
                                                            value: "currency"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "cancelledAt"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "productType"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "productTier"
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
                                                    value: "purchasedWithPrime"
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
                                    value: "owner"
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
                                            value: "description"
                                        },
                                        arguments: [],
                                        directives: []
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
                                            value: "broadcastBadges"
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
                                                value: "300"
                                            }
                                        }],
                                        directives: []
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
                                                    value: "emoteSetID"
                                                },
                                                arguments: [],
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
                                                            value: "promotion"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "newPrice"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "oldPrice"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "discountValue"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "discountType"
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
                end: 1123
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/badges/models/badge-fragment.gql"\nquery CheckoutPayments($productName: String! $isGift: Boolean! $recipientID: ID) {\ncurrentUser {\nid\n}\nsubscriptionProduct(productName: $productName) {\nid\ntier\nname\nprice\ntype\nurl\nhasSubonlyVideoArchive\nhasAdFree\nhasFastChat\ndisplayName\nemotes {\nid\ntoken\n}\nself {\ncheckoutConfigs (isGift: $isGift recipientID: $recipientID){\nxsolla {\niframeURL\n}\nrecurly {\npayWithAmazonConfigs {\nclientID\nisProduction\nsellerID\n}\npublicKey\nbraintreeClientAuthorization\n}\nzuora {\nexternalAccountID\ntoken\ntenantID\npublicKey\nsignature\nhostedPageID\nhostedPageURL\nexternalAccountID\n}\n}\npurchase {\ndetails {\npaymentProvider\nprice\ncurrency\nstate\ncancelledAt\n}\ncompatiblePurchases {\nstate\npaymentProvider\nprice\ncurrency\ncancelledAt\nproductType\nproductTier\n}\n}\nbenefit {\nid\ntier\nendsAt\npurchasedWithPrime\n}\n}\nowner {\nid\ndisplayName\ndescription\nroles{\nisPartner\n}\nbannerImageURL\nbroadcastBadges{\n...badge\n}\nprofileImageURL(width:300)\nsubscriptionProducts{\nid\ntier\ndisplayName\nurl\nprice\nemotes{\nid\ntoken\n}\nemoteSetID\nself {\npromotion {\nnewPrice\noldPrice\ndiscountValue\ndiscountType\n}\n}\n}\n}\n}\n}',
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
    Hvpt: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("j7/Y"),
            s = n("w9tK"),
            o = n("vH/s"),
            c = n("RH2O"),
            d = n("2KeS"),
            l = n("+xm8"),
            u = n("f2i/"),
            m = n("Aj/L"),
            p = n("7vx8"),
            g = n("9u8h"),
            v = n("6sO2"),
            h = n("CSlQ"),
            y = n("Odds"),
            f = (n("aMOL"), function() {
                function e(e) {}
                e.prototype.bind = function(e) {}
            }(), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        amazonScriptLoaded: null,
                        walletLoaded: null,
                        billingAgreementId: null,
                        awaitingResponse: !1
                    }, t.handleSubmit = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        this.setState({
                                            awaitingResponse: !0
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, this.props.onSuccess({
                                            payment_provider: "recurly",
                                            payment_info: {
                                                token: this.state.billingAgreementId,
                                                gateway: "amazon"
                                            }
                                        })];
                                    case 2:
                                        return e.sent(), this.forceUpdate(), [3, 4];
                                    case 3:
                                        return e.sent(), this.setState({
                                            awaitingResponse: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    window.onAmazonLoginReady = function() {
                        window.amazon.Login.setClientId(e.props.clientID)
                    }, window.onAmazonPaymentsReady = function() {
                        e.props.latencyTracking.reportInteractive(), e.setState({
                            amazonScriptLoaded: !0
                        }), window.OffAmazonPayments.Button("recurly-amazon-pay__button", e.props.sellerID, {
                            type: "PwA",
                            color: "DarkGray",
                            useAmazonAddressBook: !1,
                            agreementType: "BillingAgreement",
                            authorization: function() {
                                window.amazon.Login.authorize({
                                    scope: "profile payments:widget payments:autopay_consent",
                                    popup: !0
                                }, function(e) {
                                    if (e.error) return "err"
                                })
                            },
                            onSignIn: function(t) {
                                e.setState({
                                    walletLoaded: !0,
                                    billingAgreementId: t.getAmazonBillingAgreementId()
                                }), e.initWidget()
                            }
                        })
                    };
                    var t = document.querySelector("#pwa-script");
                    t && document.body.removeChild(t);
                    var n = document.createElement("script");
                    n.type = "text/javascript", n.id = "pwa-script", n.src = "https://static-na.payments-amazon.com/OffAmazonPayments/us" + (this.props.isProduction ? "" : "/sandbox") + "/js/Widgets.js?sellerId=" + this.props.sellerID, n.async = !0, document.body.appendChild(n)
                }, t.prototype.initWidget = function() {
                    var e = {
                        agreementType: "BillingAgreement",
                        amazonBillingAgreementId: this.state.billingAgreementId,
                        sellerId: this.props.sellerID,
                        design: {
                            designMode: "responsive"
                        },
                        onPaymentSelect: function() {
                            return !0
                        },
                        onError: function() {
                            return !1
                        }
                    };
                    new window.OffAmazonPayments.Widgets.Wallet(e).bind("recurly-amazon-pay__wallet")
                }, t.prototype.render = function() {
                    return this.state.amazonScriptLoaded ? r.createElement(y._2, {
                        padding: {
                            top: 1
                        },
                        className: "recurly-amazon-pay"
                    }, r.createElement(y._2, {
                        display: this.state.walletLoaded ? y.N.Hide : y.N.Flex,
                        alignItems: y.c.Center,
                        justifyContent: y._1.Center
                    }, r.createElement("div", {
                        id: "recurly-amazon-pay__button"
                    })), r.createElement(y._2, {
                        display: this.state.walletLoaded ? y.N.Flex : y.N.Hide,
                        flexDirection: y.P.Column,
                        alignItems: y.c.Center,
                        justifyContent: y._1.Center
                    }, r.createElement("div", {
                        id: "recurly-amazon-pay__wallet",
                        className: "recurly-amazon-pay__wallet"
                    }), r.createElement(y._2, {
                        padding: {
                            top: 1
                        }
                    }, r.createElement(y.u, {
                        onClick: this.handleSubmit,
                        state: this.state.awaitingResponse ? y.y.Loading : y.y.Default,
                        disabled: this.state.awaitingResponse
                    }, this.props.submitButtonCopy)))) : r.createElement(y._4, null)
                }, t = i.__decorate([Object(h.d)("RecurlyAmazonPay")], t)
            }(r.Component)),
            k = n("NXs7"),
            _ = n("0nzt"),
            b = n("l7ua"),
            N = (n("pDuT"), {
                light: "#000",
                dark: "#fff"
            }),
            S = {
                light: "#a49fad",
                dark: "#898395"
            },
            E = function() {
                return {
                    cvv: !1,
                    first_name: !1,
                    last_name: !1,
                    month: !1,
                    number: !1,
                    year: !1
                }
            },
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        firstName: "",
                        lastName: "",
                        recurlyReady: !1,
                        awaitingResponse: !1,
                        errorMessage: "",
                        errorState: E()
                    }, t.handleSubmit = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e = this;
                            return i.__generator(this, function(t) {
                                return this.setState(function(e) {
                                    return {
                                        awaitingResponse: !0,
                                        errorState: i.__assign({}, e.errorState)
                                    }
                                }), window.recurly.token(this.form, function(t, n) {
                                    return i.__awaiter(e, void 0, void 0, function() {
                                        return i.__generator(this, function(e) {
                                            return t ? (this.handleValidationError(t), this.setState({
                                                awaitingResponse: !1
                                            })) : this.handleValidationSuccess(n), [2]
                                        })
                                    })
                                }), [2]
                            })
                        })
                    }, t.handleValidationSuccess = function(e) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            return i.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), [4, this.props.onSuccess({
                                            payment_provider: "recurly",
                                            payment_info: {
                                                token: e.id,
                                                gateway: "cc"
                                            }
                                        })];
                                    case 1:
                                        return t.sent(), [3, 3];
                                    case 2:
                                        return t.sent(), this.setState(function(e) {
                                            return {
                                                awaitingResponse: !1,
                                                errorState: i.__assign({}, e.errorState)
                                            }
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleValidationError = function(e) {
                        if (e.code === b.a.Validation || e.code === b.a.InvalidParameter) {
                            var n = E();
                            e.fields && e.fields.forEach(function(e) {
                                n[e] = !0
                            }), t.setState({
                                errorMessage: Object(v.d)("We are sorry but your credit card payment could not be processed. Please correct the fields below.", "RecurlyCreditCard"),
                                errorState: n
                            })
                        } else e.code && t.setState({
                            errorMessage: Object(v.d)("The transaction was declined due to invalid data. Please make sure you have entered the correct information.", "RecurlyCreditCard"),
                            errorState: E()
                        })
                    }, t.handleFirstName = function(e) {
                        t.setState({
                            firstName: e.currentTarget.value
                        })
                    }, t.handleLastName = function(e) {
                        t.setState({
                            lastName: e.currentTarget.value
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    var e = this;
                    this.recurlyPollId = setInterval(function() {
                        window.recurly && (e.props.latencyTracking.reportInteractive(), clearInterval(e.recurlyPollId), e.setupConfigs(), e.pollForHostedField())
                    }, 500)
                }, t.prototype.componentWillUnmount = function() {
                    clearInterval(this.recurlyPollId), clearInterval(this.hostedFieldPollId)
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function(e) {
                    window.recurly && this.props.darkModeEnabled !== e.darkModeEnabled && this.setupConfigs()
                }, t.prototype.render = function() {
                    var e = this;
                    return r.createElement(y._2, {
                        className: "recurly-credit-card"
                    }, r.createElement(y._2, {
                        fullWidth: !0
                    }, r.createElement(y._2, {
                        display: this.state.recurlyReady ? y.N.Hide : y.N.Block
                    }, r.createElement(y._4, {
                        fillContent: !0
                    })), r.createElement(y._2, {
                        display: this.state.recurlyReady ? y.N.Block : y.N.Hide
                    }, r.createElement("form", {
                        className: "recurly-form",
                        ref: function(t) {
                            return e.form = t
                        }
                    }, r.createElement(y._2, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(y.S, {
                        id: "recurly-name",
                        label: Object(v.d)("Name", "RecurlyCreditCard")
                    }, r.createElement("div", {
                        id: "recurly-name"
                    }, r.createElement(y.U, {
                        gutterSize: y.V.Medium
                    }, r.createElement(y.J, {
                        cols: 6
                    }, r.createElement(y.Y, {
                        id: "recurly-first-name",
                        type: y.Z.Text,
                        placeholder: Object(v.d)("First Name", "RecurlyCreditCard"),
                        value: this.state.firstName,
                        onChange: this.handleFirstName,
                        error: this.state.errorState.first_name
                    }), r.createElement("input", {
                        type: "hidden",
                        "data-recurly": "first_name",
                        value: this.state.firstName
                    })), r.createElement(y.J, {
                        cols: 6
                    }, r.createElement(y.Y, {
                        id: "recurly-last-name",
                        type: y.Z.Text,
                        placeholder: Object(v.d)("Last Name", "RecurlyCreditCard"),
                        value: this.state.lastName,
                        onChange: this.handleLastName,
                        error: this.state.errorState.last_name
                    }), r.createElement("input", {
                        type: "hidden",
                        "data-recurly": "last_name",
                        value: this.state.lastName
                    })))))), r.createElement(y._2, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(y.S, {
                        id: "recurly-credit-card",
                        label: Object(v.d)("Credit Card", "RecurlyCreditCard")
                    }, r.createElement("div", {
                        id: "recurly-credit-card"
                    }, r.createElement(y.U, {
                        gutterSize: y.V.Medium
                    }, r.createElement(y.J, {
                        cols: 8
                    }, r.createElement("div", {
                        id: "recurly-number",
                        "data-recurly": "number",
                        className: this.state.errorState.number ? "recurly-error" : ""
                    })), r.createElement(y.J, {
                        cols: 4
                    }, r.createElement("div", {
                        id: "recurly-cvv",
                        "data-recurly": "cvv",
                        className: this.state.errorState.cvv ? "recurly-error" : ""
                    })))))), r.createElement(y._2, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(y.S, {
                        id: "recurly-credit-card",
                        label: Object(v.d)("Expiration Date", "RecurlyCreditCard")
                    }, r.createElement("div", {
                        id: "recurly-credit-card"
                    }, r.createElement(y.U, {
                        gutterSize: y.V.Medium
                    }, r.createElement(y.J, {
                        cols: 6
                    }, r.createElement("div", {
                        id: "recurly-month",
                        "data-recurly": "month",
                        className: this.state.errorState.month ? "recurly-error" : ""
                    })), r.createElement(y.J, {
                        cols: 6
                    }, r.createElement("div", {
                        id: "recurly-year",
                        "data-recurly": "year",
                        className: this.state.errorState.year ? "recurly-error" : ""
                    })))))), r.createElement("input", {
                        type: "hidden",
                        name: "recurly-token",
                        "data-recurly": "token"
                    }), r.createElement(y.u, {
                        onClick: this.handleSubmit,
                        state: this.state.awaitingResponse ? y.y.Loading : y.y.Default,
                        disabled: this.state.awaitingResponse
                    }, this.props.submitButtonCopy)))))
                }, t.prototype.pollForHostedField = function() {
                    var e = this;
                    this.hostedFieldPollId = setInterval(function() {
                        document.querySelector(".recurly-hosted-field > iframe") && (e.setState({
                            recurlyReady: !0
                        }), clearInterval(e.hostedFieldPollId))
                    }, 500)
                }, t.prototype.setupConfigs = function() {
                    window.recurly.configure({
                        publicKey: this.props.publicKey,
                        fraud: {
                            kount: {
                                dataCollector: !0
                            }
                        },
                        required: ["cvv"],
                        fields: {
                            all: {
                                style: {
                                    height: "auto",
                                    fontSize: "12px",
                                    fontColor: this.props.darkModeEnabled ? N.dark : N.light,
                                    placeholder: {
                                        color: this.props.darkModeEnabled ? S.dark : S.light
                                    }
                                }
                            },
                            number: {
                                selector: "#recurly-number",
                                style: {
                                    placeholder: {
                                        content: Object(v.d)("Card Number", "RecurlyCreditCard")
                                    }
                                }
                            },
                            month: {
                                selector: "#recurly-month",
                                style: {
                                    placeholder: {
                                        content: Object(v.d)("Month", "RecurlyCreditCard")
                                    }
                                }
                            },
                            year: {
                                selector: "#recurly-year",
                                style: {
                                    placeholder: {
                                        content: Object(v.d)("Year", "RecurlyCreditCard")
                                    }
                                }
                            },
                            cvv: {
                                selector: "#recurly-cvv",
                                style: {
                                    placeholder: {
                                        content: Object(v.d)("CVV", "RecurlyCreditCard")
                                    }
                                }
                            }
                        }
                    })
                }, t = i.__decorate([Object(h.d)("RecurlyCreditCard")], t)
            }(r.Component);
        var w, F = Object(c.b)(function(e) {
                return {
                    darkModeEnabled: Object(_.a)(e) === k.a.Dark
                }
            })(C),
            P = (n("t2Wb"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        paypalConfigured: !1,
                        awaitingResponse: !1,
                        hasError: !1
                    }, t.handleValidationSuccess = function(e) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            return i.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), [4, this.props.onSuccess({
                                            payment_provider: "recurly",
                                            payment_info: {
                                                token: e.id,
                                                gateway: "paypal"
                                            }
                                        })];
                                    case 1:
                                        return t.sent(), [3, 3];
                                    case 2:
                                        return t.sent(), this.setState({
                                            awaitingResponse: !1
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleValidationError = function() {
                        t.setState({
                            hasError: !0
                        })
                    }, t.handleClick = function() {
                        t.setState({
                            awaitingResponse: !0,
                            hasError: !1
                        }), t.paypalInstance.start()
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    this.pollForRecurly = setInterval(function() {
                        window.recurly && (e.props.latencyTracking.reportInteractive(), clearInterval(e.pollForRecurly), e.setupConfigs(), e.setState({
                            paypalConfigured: !0
                        }))
                    }, 500)
                }, t.prototype.componentWillUnmount = function() {
                    clearInterval(this.pollForRecurly)
                }, t.prototype.render = function() {
                    return this.state.paypalConfigured ? r.createElement(y._2, {
                        className: "recurly-paypal",
                        display: y.N.Flex,
                        alignItems: y.c.Center,
                        justifyContent: y._1.Center,
                        margin: {
                            y: 2
                        }
                    }, r.createElement(y.u, {
                        onClick: this.handleClick,
                        state: this.state.awaitingResponse ? y.y.Loading : y.y.Default,
                        disabled: this.state.awaitingResponse
                    }, this.props.submitButtonCopy)) : r.createElement(y._2, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(y._4, null))
                }, t.prototype.setupConfigs = function() {
                    var e = this;
                    window.recurly.configure(this.props.publicKey);
                    var t = window.recurly.PayPal({
                        braintree: {
                            clientAuthorization: this.props.braintreeClientAuthorization
                        }
                    });
                    t.on("token", function(t) {
                        e.handleValidationSuccess(t)
                    }), t.on("error", function() {
                        e.handleValidationError(), e.setState({
                            awaitingResponse: !1
                        })
                    }), t.on("cancel", function() {
                        e.setState({
                            awaitingResponse: !1
                        })
                    }), this.paypalInstance = t
                }, t = i.__decorate([Object(h.d)("RecurlyPaypal")], t)
            }(r.Component)),
            I = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        xsollaLoaded: !1
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    this.iframe && this.iframe.addEventListener("load", function() {
                        e.props.latencyTracking.reportInteractive(), e.setState({
                            xsollaLoaded: !0
                        })
                    })
                }, t.prototype.render = function() {
                    var e = this;
                    return r.createElement(y._2, {
                        fullWidth: !0
                    }, !this.state.xsollaLoaded && r.createElement(y._4, {
                        fillContent: !0
                    }), r.createElement(y._2, {
                        fullWidth: !0,
                        display: this.state.xsollaLoaded ? y.N.Inline : y.N.Hide
                    }, r.createElement("iframe", {
                        ref: function(t) {
                            return e.iframe = t
                        },
                        id: "xsolla",
                        src: this.props.iframeURL,
                        width: "100%",
                        height: "650px"
                    })))
                }, t = i.__decorate([Object(h.d)("XsollaMoreMethods")], t)
            }(r.Component);
        n("7gLH");
        ! function(e) {
            e.ZUORA_PARENT_LAYOUT = "zuora-payment-method__zuora-parent-layout", e.UPDATE_PAYMENT_BUTTON = "zuora-payment-method__update-payment-button"
        }(w || (w = {}));
        var A = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        zuoraConfigured: !1,
                        awaitingResponse: !1,
                        errorMessage: "",
                        nullValueErrors: []
                    }, t.handleSubmit = function() {
                        t.setState({
                            awaitingResponse: !0,
                            errorMessage: "",
                            nullValueErrors: []
                        }), window.Z.submit()
                    }, t.renderErrorMessage = function() {
                        if (t.state.nullValueErrors.length) {
                            var e = t.state.nullValueErrors.map(function(e, t) {
                                return r.createElement(y._2, {
                                    key: t,
                                    margin: {
                                        left: 2
                                    }
                                }, r.createElement(y._35, {
                                    color: y.I.Error
                                }, "• ", e))
                            });
                            return r.createElement("div", null, r.createElement(y._2, {
                                margin: {
                                    top: 1,
                                    left: 1,
                                    bottom: .5
                                }
                            }, r.createElement(y._35, {
                                color: y.I.Error
                            }, Object(v.d)("We are sorry but your credit card payment could not be processed. Please correct the fields below.", "ZuoraCreditCard"))), e)
                        }
                        if (t.state.errorMessage) return r.createElement(y._2, {
                            margin: {
                                top: 1,
                                left: 1
                            }
                        }, r.createElement(y._35, {
                            color: y.I.Error
                        }, t.state.errorMessage))
                    }, t.successCallback = function(e) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            return i.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (!e.success) return [2];
                                        t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.props.onSuccess({
                                            payment_provider: "zuora",
                                            payment_info: {
                                                token: e.refId,
                                                gateway: "cc"
                                            }
                                        })];
                                    case 2:
                                        return t.sent(), [3, 4];
                                    case 3:
                                        return t.sent(), this.setState({
                                            awaitingResponse: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.errorCallback = function(e, n, i) {
                        if (t.setState({
                                awaitingResponse: !1
                            }), "unknown" === n) return t.parseGatewayErrorMessage(i);
                        window.Z.sendErrorMessageToHpm(e, i)
                    }, t.parseGatewayErrorMessage = function(e) {
                        return e.includes("NullValue") ? t.parseNullValueErrorMessage(e) : e.includes("Invalid CC Number") ? t.setState({
                            errorMessage: Object(v.d)("You entered an invalid card number. Please update your card and try again.", "ZuoraCreditCard")
                        }) : t.setState({
                            errorMessage: Object(v.d)("We couldn't process your payment. Please try again.", "ZuoraCreditCard")
                        })
                    }, t.parseNullValueErrorMessage = function(e) {
                        var n = e.replace("[HostedPageFieldValidationError]&nbsp; ", "").replace(/\s/g, "").split(":NullValue,"),
                            i = {
                                creditCardHolderName: Object(v.d)("Name on Card", "ZuoraCreditCard"),
                                creditCardAddress1: Object(v.d)("Billing Address", "ZuoraCreditCard"),
                                creditCardCity: Object(v.d)("City", "ZuoraCreditCard"),
                                creditCardPostalCode: Object(v.d)("Zip Code", "ZuoraCreditCard")
                            },
                            r = n.map(function(e) {
                                var t = i[e];
                                return t || ""
                            }).filter(function(e) {
                                return "" !== e
                            });
                        t.setState({
                            nullValueErrors: r
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    if (document.querySelector("#zuora-script")) this.initZuoraIFrame();
                    else {
                        var t = document.createElement("script");
                        t.src = "https://static.zuora.com/Resources/libs/hosted/1.3.0/zuora-min.js", t.async = !0, t.id = "zuora-script", document.body.appendChild(t), t.onload = function() {
                            e.props.latencyTracking.reportInteractive(), e.initZuoraIFrame()
                        }
                    }
                }, t.prototype.render = function() {
                    return r.createElement("div", null, !this.state.zuoraConfigured && r.createElement(y._2, {
                        padding: {
                            y: 5
                        }
                    }, r.createElement(y._4, {
                        fillContent: !0
                    })), r.createElement(y._2, {
                        display: this.state.zuoraConfigured ? y.N.Block : y.N.Hide,
                        "data-test-selector": w.ZUORA_PARENT_LAYOUT
                    }, this.renderErrorMessage(), r.createElement("div", {
                        id: "zuora_payment",
                        className: this.state.awaitingResponse ? "zuora-disabled" : ""
                    }), r.createElement(y._2, {
                        margin: {
                            left: .5,
                            top: 2,
                            bottom: 1
                        }
                    }, r.createElement(y.u, {
                        onClick: this.handleSubmit,
                        state: this.state.awaitingResponse ? y.y.Loading : y.y.Default,
                        disabled: this.state.awaitingResponse,
                        "data-test-selector": w.UPDATE_PAYMENT_BUTTON
                    }, this.props.submitButtonCopy))))
                }, t.prototype.initZuoraIFrame = function() {
                    var e = this,
                        t = {
                            id: this.props.hostedPageID,
                            url: this.props.hostedPageURL,
                            style: "inline",
                            submitEnabled: "true",
                            field_accountId: this.props.externalAccountID,
                            tenantId: this.props.tenantID,
                            token: this.props.token,
                            key: this.props.publicKey,
                            signature: this.props.signature
                        };
                    window.Z.renderWithErrorHandler(t, {
                        creditCardCountry: "USA"
                    }, this.successCallback, this.errorCallback);
                    var n = document.getElementById("z_hppm_iframe");
                    n && n.addEventListener("load", function() {
                        e.setState({
                            zuoraConfigured: !0
                        })
                    })
                }, t = i.__decorate([Object(h.d)("ZuoraCreditCard")], t)
            }(r.Component),
            R = (n("ssJt"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        selectedProvider: "recurly-credit-card"
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    if (!document.querySelector("#recurly-script")) {
                        var e = document.createElement("script");
                        e.src = "https://js.recurly.com/v4/recurly.js", e.async = !0, e.id = "recurly-script", document.body.appendChild(e)
                    }
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(v.d)("Complete Purchase", "PaymentMethods"),
                        t = {
                            "recurly-credit-card": r.createElement(F, {
                                publicKey: this.props.configs.recurly.publicKey,
                                submitButtonCopy: e,
                                onSuccess: this.props.onSuccess
                            }),
                            "recurly-paypal": r.createElement(P, {
                                publicKey: this.props.configs.recurly.publicKey,
                                braintreeClientAuthorization: this.props.configs.recurly.braintreeClientAuthorization,
                                submitButtonCopy: e,
                                onSuccess: this.props.onSuccess
                            }),
                            "recurly-amazon-pay": r.createElement(f, i.__assign({
                                submitButtonCopy: e,
                                onSuccess: this.props.onSuccess
                            }, this.props.configs.recurly.payWithAmazonConfigs)),
                            "xsolla-more-methods": r.createElement(I, i.__assign({}, this.props.configs.xsolla)),
                            "zuora-credit-card": r.createElement(A, i.__assign({
                                submitButtonCopy: e,
                                onSuccess: this.props.onSuccess
                            }, this.props.configs.zuora))
                        };
                    return r.createElement(y._2, {
                        className: "payment-methods"
                    }, r.createElement(y.u, {
                        onClick: this.setProviderFactory("recurly-credit-card"),
                        disabled: "recurly-credit-card" === this.state.selectedProvider
                    }, Object(v.d)("recurly-credit-card", "PaymentMethods")), r.createElement(y.u, {
                        onClick: this.setProviderFactory("recurly-paypal"),
                        disabled: "recurly-paypal" === this.state.selectedProvider
                    }, Object(v.d)("recurly-paypal", "PaymentMethods")), r.createElement(y.u, {
                        onClick: this.setProviderFactory("recurly-amazon-pay"),
                        disabled: "recurly-amazon-pay" === this.state.selectedProvider
                    }, Object(v.d)("recurly-amazon-pay", "PaymentMethods")), r.createElement(y.u, {
                        onClick: this.setProviderFactory("xsolla-more-methods"),
                        disabled: "xsolla-more-methods" === this.state.selectedProvider
                    }, Object(v.d)("xsolla-more-methods", "PaymentMethods")), r.createElement(y.u, {
                        onClick: this.setProviderFactory("zuora-credit-card"),
                        disabled: "zuora-credit-card" === this.state.selectedProvider
                    }, Object(v.d)("zuora-credit-card", "PaymentMethods")), t[this.state.selectedProvider])
                }, t.prototype.setProviderFactory = function(e) {
                    var t = this;
                    return function() {
                        return t.setState({
                            selectedProvider: e
                        })
                    }
                }, t = i.__decorate([Object(h.d)("PaymentMethods")], t)
            }(r.Component)),
            O = n("3T7g"),
            L = n("7LIQ"),
            T = n("Tzcg"),
            D = (n("2dVl"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.product,
                        t = this.props.owner;
                    return t ? r.createElement("div", {
                        className: "ticket-description"
                    }, r.createElement(y.A, {
                        border: !0,
                        elevation: 1
                    }, r.createElement("div", {
                        className: "ticket-description__banner-image",
                        style: {
                            backgroundImage: "url(" + t.bannerImageURL
                        }
                    }, r.createElement(y._2, {
                        className: "ticket-description__broadcaster-info",
                        textAlign: y._36.Center,
                        display: y.N.Flex,
                        flexDirection: y.P.Column,
                        alignItems: y.c.Center,
                        flexWrap: y.Q.NoWrap,
                        padding: {
                            x: 1,
                            y: 3
                        },
                        breakpointMedium: {
                            padding: 4
                        },
                        breakpointLarge: {
                            padding: 5
                        }
                    }, r.createElement(y.W, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 2
                        }
                    }, r.createElement(y.l, {
                        alt: t.displayName,
                        size: 96,
                        src: t.profileImageURL
                    })), r.createElement(y.W, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 1
                        }
                    }, r.createElement(y._35, {
                        type: y._40.H4,
                        color: y.I.Overlay
                    }, t.displayName)), r.createElement(y._2, {
                        className: "ticket-description__description",
                        margin: 1,
                        breakpointLarge: {
                            margin: 2
                        }
                    }, r.createElement(y._35, {
                        type: y._40.H5,
                        color: y.I.Overlay
                    }, e.displayName)))), r.createElement(y.B, null, r.createElement(y._25, {
                        borderBottom: !0,
                        textAlign: y._36.Center,
                        background: y.m.Alt,
                        padding: 2
                    }, r.createElement(y._35, {
                        type: y._40.H5,
                        bold: !0
                    }, e.price, " / Month")), r.createElement(y._25, {
                        margin: {
                            x: 3
                        },
                        textAlign: y._36.Left,
                        background: y.m.Alt
                    }, r.createElement(y.X, {
                        padding: {
                            y: 1
                        }
                    }, r.createElement(y._35, {
                        className: "ticket-description__description__line-item",
                        bold: !0
                    }, "Subscription Benefits")), r.createElement(y._35, {
                        className: "ticket-description__description__line-item"
                    }, "Directly Support The Broadcaster"), e.hasAdFree && r.createElement(y._35, {
                        className: "ticket-description__description__line-item"
                    }, "Ad-Free (with limited exceptions)"), this.subBadges(), r.createElement(y._35, {
                        className: "ticket-description__description__line-item"
                    }, "Chat During Subscriber-Only Mode"), e.hasFastChat && r.createElement(y._35, {
                        className: "ticket-description__description__line-item"
                    }, "Not Affected By Chat Slow Mode"), e.hasSubonlyVideoArchive && r.createElement(y._35, {
                        className: "ticket-description__description__line-item"
                    }, "Access to VODs"), this.subEmotes())))) : r.createElement("div", null)
                }, t.prototype.subBadges = function() {
                    if (this.props.owner) {
                        var e = this.props.owner.broadcastBadges.filter(function(e) {
                            return "subscriber" === e.setID
                        });
                        return e.length ? r.createElement(y._35, {
                            className: "ticket-description__description__line-item"
                        }, "Subscriber Badges ", e.map(function(e) {
                            return r.createElement(O.a, {
                                key: e.setID + "/" + e.version,
                                badge: e
                            })
                        })) : void 0
                    }
                }, t.prototype.subEmotes = function() {
                    var e = this;
                    if (this.props.owner) {
                        var t = this.props.owner.subscriptionProducts.filter(function(t) {
                            return (t.tier || "") <= (e.props.product.tier || "")
                        }).map(function(e) {
                            return e.emotes
                        }).reduce(function(e, t) {
                            return e.concat(t)
                        }, []);
                        if (0 === t.length) return r.createElement("div", null, r.createElement(y._35, {
                            className: "ticket-description__description__line-item"
                        }, t.length, " Subscriber Emotes"), r.createElement(L.a, {
                            emoteSet: {
                                id: "",
                                emotes: Object(T.b)(t)
                            },
                            onClickEmote: void 0,
                            locked: !1
                        }))
                    }
                }, t = i.__decorate([Object(h.d)("TicketDescription")], t)
            }(r.Component)),
            x = n("Heyg"),
            z = (n("gKy9"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.completePurchase = function(e) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return t = "/kraken/checkout/users/" + this.props.data.currentUser.id + "/products/" + this.props.productShortName + "/purchase/complete", [4, g.a.post(t, {
                                            body: e
                                        }, {
                                            version: 5
                                        })];
                                    case 1:
                                        return n.sent().error, [2]
                                }
                            })
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.data.loading || this.props.data.error) return r.createElement(y._2, null);
                    var e = this.props.data.subscriptionProduct.owner,
                        t = this.props.data.subscriptionProduct,
                        n = this.props.data.subscriptionProduct.self.checkoutConfigs;
                    return r.createElement(y._2, {
                        className: "checkout-payments"
                    }, r.createElement("div", {
                        className: "checkout-payments__description-container"
                    }, r.createElement(D, {
                        owner: e,
                        product: t
                    })), r.createElement("div", {
                        className: "checkout-payments__content"
                    }, r.createElement(R, {
                        onSuccess: this.completePurchase,
                        configs: n
                    })))
                }, t = i.__decorate([Object(h.d)("CheckoutPayments"), Object(p.a)(x, {
                    options: function(e) {
                        return {
                            fetchPolicy: "cache-and-network",
                            variables: {
                                productName: e.productShortName,
                                isGift: !1,
                                recipientID: null
                            }
                        }
                    }
                })], t)
            }(r.Component));
        var M = Object(c.b)(function(e) {
                return {
                    isLoggedIn: Object(m.d)(e)
                }
            }, function(e) {
                return Object(d.b)({
                    promptLogin: function() {
                        return Object(u.f)(l.a.DashboardPage)
                    }
                }, e)
            })(z),
            j = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.match.params.productShortName;
                    return r.createElement(M, {
                        productShortName: e
                    })
                }, t = i.__decorate([Object(h.d)("SubsCheckout", {
                    destination: s.a.SubsCheckoutPage
                }), Object(a.a)({
                    location: o.PageviewLocation.SubsCheckoutPage
                })], t)
            }(r.Component);
        n.d(t, "SubsCheckoutPage", function() {
            return j
        })
    },
    "QU+n": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "badge"
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
                            value: "title"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 170
            }
        };
        n.loc.source = {
            body: "fragment badge on Badge {\nid\nsetID\nversion\ntitle\nimage1x: imageURL(size: NORMAL)\nimage2x: imageURL(size: DOUBLE)\nimage4x: imageURL(size: QUADRUPLE)\nclickAction\nclickURL\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    RbGx: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var i = n("GiK3"),
            r = (n.n(i), n("mbxv")),
            a = function(e) {
                var t, n = e.badgesToRender,
                    a = e.badgeSets,
                    s = [];
                t = n, Array.isArray(t) ? s = n.map(function(e) {
                    var t = a.getBadge(e.setID, e.version);
                    return null === t ? null : i.createElement(r.a, {
                        key: t.setID + "/" + t.version,
                        badge: t
                    })
                }) : function(e) {
                    return !Array.isArray(e)
                }(n) && (s = Object.keys(n).map(function(e) {
                    var t = n[e],
                        s = a.getBadge(e, t);
                    return null === s ? null : i.createElement(r.a, {
                        key: s.setID + "/" + s.version,
                        badge: s
                    })
                }));
                var o = s.filter(function(e) {
                    return null !== e
                });
                return i.createElement("span", null, o)
            }
    },
    aMOL: function(e, t) {},
    gKy9: function(e, t) {},
    "j7/Y": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("OAwv"),
            a = n("GiK3"),
            s = n("F8kA"),
            o = n("6sO2");

        function c(e) {
            return function(t) {
                var n = function(n) {
                    function s(t) {
                        var r = n.call(this, t) || this;
                        return r.tracked = !1, r.referenceTracking = {}, r.trackPageview = function() {
                            if (!(r.tracked || e.skip && e.skip(r.props))) {
                                r.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(r.props) : e.properties && (t = i.__assign({}, e.properties));
                                var n = i.__assign({}, r.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var a = r.referenceTracking,
                                    s = a.content,
                                    c = a.medium,
                                    d = a.content_index;
                                o.n.tracking.trackPageview(i.__assign({
                                    content: s,
                                    medium: c,
                                    content_index: d,
                                    location: e.location
                                }, t))
                            }
                        }, o.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : o.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), r
                    }
                    return i.__extends(s, n), s.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, s.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, s.prototype.render = function() {
                        return a.createElement(t, i.__assign({}, this.props))
                    }, s.prototype.stripTTParams = function(e) {
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
                    }, s
                }(a.Component);
                return Object(s.f)(n)
            }
        }
        n.d(t, "a", function() {
            return c
        })
    },
    l7ua: function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.NotConfigured = "not-configured", e.MissingPublicKey = "missing-public-key", e.InvalidPublicKey = "invalid-public-key", e.AlreadyConfigured = "already-configured", e.MissingHostedFieldTarget = "missing-hosted-field-target", e.Validation = "validation", e.InvalidParameter = "invalid-parameter", e.APIError = "api-error", e.PayPalNotConfigured = "paypal-not-configured", e.PayPalCanceled = "paypal-canceled", e.PayPalError = "paypal-error", e.InvalidRoutingNumber = "invalid-routing-number", e.NotFound = "not-found", e.MissingPlan = "missing-plan", e.InvalidAddon = "invalid-addon", e.InvalidCurrency = "invalid-currency", e.GiftCardCurrencyMisMatch = "gift-card-currency-mismatch"
            }(i || (i = {}))
    },
    mbxv: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("GiK3"),
            a = n("+V/3"),
            s = n("Odds"),
            o = (n("2IkU"), n("6sO2")),
            c = n("vH/s"),
            d = function(e) {
                var t = Date.now() / 1e3;
                e.badge_type = e.badge_type.toLowerCase().replace(/( |\s)/g, "_"), o.n.tracking.track(c.SpadeEventType.ChatBadgeClick, Object.assign({
                    client_time: t
                }, e))
            };
        n.d(t, "a", function() {
            return l
        });
        var l = function(e) {
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
                    d({
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
                    a = e.image4x,
                    o = r.createElement("img", {
                        alt: t,
                        className: "chat-badge",
                        src: n,
                        srcSet: n + " 1x, " + i + " 2x, " + a + " 4x",
                        onMouseOver: this.onMouseOver,
                        onMouseOut: this.onMouseOut
                    });
                return this.targetURL = this.getTargetURL(), "" !== this.targetURL && (o = r.createElement("a", {
                    href: this.targetURL,
                    onClick: this.onBadgeClickHandler,
                    target: "_blank",
                    "data-a-target": "chat-badge"
                }, o)), this.state.isHovering ? r.createElement(s._43, {
                    align: s._44.Left,
                    "data-a-target": "chat-badge",
                    display: s.N.Inline,
                    key: n,
                    label: t,
                    offsetY: "0.9rem"
                }, o) : o
            }, t.prototype.getTargetURL = function() {
                var e = this.props.badge;
                switch (e.clickAction) {
                    case a.d:
                        return e.clickURL;
                    case a.b:
                        return e.channelName ? this.getSubscriberLink() : "";
                    case a.c:
                        return "https://www.twitch.tv/products/turbo?ref=chat_badge";
                    default:
                        return ""
                }
            }, t.prototype.getSubscriberLink = function() {
                return "https://www.twitch.tv/" + this.props.badge.channelName + "/subscribe?ref=in_chat_subscriber_link"
            }, t
        }(r.Component)
    },
    pDuT: function(e, t) {},
    ssJt: function(e, t) {},
    t2Wb: function(e, t) {}
});
//# sourceMappingURL=pages.subs-checkout.components.subs-checkout-page-f4dbd1ca824b67f240dc27e4e7a10d84.js.map