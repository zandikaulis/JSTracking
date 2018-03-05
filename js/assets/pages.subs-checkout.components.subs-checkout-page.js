webpackJsonp([55], {
    "+V/3": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return r
        }), n.d(t, "c", function() {
            return i
        }), n.d(t, "d", function() {
            return a
        }), n.d(t, "a", function() {
            return s
        });
        var r = "subscribe_to_channel",
            i = "turbo",
            a = "visit_url",
            s = "broadcaster"
    },
    "2IkU": function(e, t) {},
    "2dVl": function(e, t) {},
    "3T7g": function(e, t, n) {
        "use strict";
        var r = n("RbGx"),
            i = n("mbxv"),
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
                        var r = t.get(e.setID);
                        r || (r = new Map, t.set(e.setID, r)), r.set(e.version, e)
                    })
                }, e
            }();
        new o([], [], "");
        n.d(t, "b", function() {
            return r.a
        }), n.d(t, "a", function() {
            return i.a
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
        var r = n("TToO"),
            i = n("6sO2"),
            a = n("Aj/L"),
            s = function() {
                function e() {}
                return e.get = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        var i, a;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), i = t.headers ? t.headers["Content-Type"] : void 0, t.body = this.serialize(t.body, i), [4, this._fetch(e, t)];
                                case 1:
                                    return a = r.sent(), [4, this.constructLegacyAPIResponse(a)];
                                case 2:
                                    return [2, r.sent()]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, i.n.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, n, i, a;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    t = {
                                        status: e.status
                                    }, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, e.json()];
                                case 2:
                                    return n = r.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                case 3:
                                    return i = r.sent(), e.headers && e.headers.get && (a = e.headers.get("Content-Type")) && -1 !== a.indexOf("application/json") && (t.requestError = i), [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e._fetch = function(e, t) {
                    return void 0 === t && (t = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(n) {
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
                        headers: r.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                    })
                }, e.serialize = function(e, t) {
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : e
                }, e.getDefaultHeaders = function(e, t) {
                    var n = i.n.store.getState(),
                        r = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": i.n.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = "application/json; charset=UTF-8");
                    var s = Object(a.c)(n);
                    return s && (r.Authorization = "OAuth " + s.authToken, s.legacyCSRFToken && (r["Twitch-Api-Token"] = s.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        r[e] && delete r[e]
                    }), r
                }, e
            }()
    },
    AwFw: function(e, t) {},
    EaWz: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GiftRecipientQuery"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "recipientName"
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
                        alias: {
                            kind: "Name",
                            value: "recipient"
                        },
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
                                    value: "recipientName"
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
                                    value: "displayName"
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
                end: 110
            }
        };
        n.loc.source = {
            body: "query GiftRecipientQuery($recipientName: String!) {\nrecipient: user(login: $recipientName){\nid\ndisplayName\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Heyg: function(e, t, n) {
        var r = {
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
                                                    value: "canGift"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "paymentProviderConfigs"
                                                },
                                                arguments: [],
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
                                                            value: "isGift"
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
                                                    value: "discountType"
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
                                            value: "login"
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
                end: 1276
            }
        };
        r.loc.source = {
            body: '#import "twilight/features/badges/models/badge-fragment.gql"\nquery CheckoutPayments($productName: String! $isGift: Boolean! $recipientID: ID) {\ncurrentUser {\nid\ndisplayName\n}\nsubscriptionProduct(productName: $productName) {\nid\ntier\nname\nprice\ntype\nurl\nhasSubonlyVideoArchive\nhasAdFree\nhasFastChat\ndisplayName\nemotes {\nid\ntoken\n}\nself {\ncheckoutConfigs (isGift: $isGift recipientID: $recipientID) {\ncanGift\npaymentProviderConfigs {\nxsolla {\niframeURL\n}\nrecurly {\npayWithAmazonConfigs {\nclientID\nisProduction\nsellerID\n}\npublicKey\nbraintreeClientAuthorization\n}\nzuora {\nexternalAccountID\ntoken\ntenantID\npublicKey\nsignature\nhostedPageID\nhostedPageURL\nexternalAccountID\n}\n}\n}\npurchase {\ndetails {\npaymentProvider\nprice\ncurrency\nstate\ncancelledAt\nproductType\nproductTier\n}\ncompatiblePurchases {\npaymentProvider\nprice\ncurrency\nstate\ncancelledAt\nproductType\nproductTier\n}\n}\nbenefit {\nid\ntier\nendsAt\npurchasedWithPrime\ngift {\nisGift\n}\n}\npromotion {\ndiscountType\ndiscountValue\nnewPrice\noldPrice\n}\n}\nowner {\nid\ndisplayName\ndescription\nlogin\nroles{\nisPartner\n}\nbannerImageURL\nbroadcastBadges{\n...badge\n}\nprofileImageURL(width:300)\nsubscriptionProducts{\nid\ntier\ndisplayName\nurl\nprice\nemotes{\nid\ntoken\n}\nemoteSetID\nself {\npromotion {\nnewPrice\noldPrice\ndiscountValue\ndiscountType\n}\n}\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var i = {};
        r.definitions = r.definitions.concat(n("QU+n").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !i[t] && (i[t] = !0, !0)
        })), e.exports = r
    },
    Hvpt: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("TToO"),
            i = n("OAwv"),
            a = n("GiK3"),
            s = n("6sO2"),
            o = n("7vx8"),
            c = n("j7/Y"),
            l = n("w9tK"),
            d = n("vH/s"),
            u = n("RH2O"),
            p = n("2KeS"),
            m = n("+xm8"),
            g = n("f2i/"),
            y = n("Aj/L"),
            h = n("9u8h"),
            v = n("CSlQ"),
            f = n("Odds"),
            b = (n("aMOL"), function() {
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
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(e) {
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
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
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
                    return this.state.amazonScriptLoaded ? a.createElement(f._2, {
                        padding: {
                            top: 1
                        },
                        className: "recurly-amazon-pay"
                    }, a.createElement(f._2, {
                        display: this.state.walletLoaded ? f.N.Hide : f.N.Flex,
                        alignItems: f.c.Center,
                        justifyContent: f._1.Center
                    }, a.createElement("div", {
                        id: "recurly-amazon-pay__button"
                    })), a.createElement(f._2, {
                        display: this.state.walletLoaded ? f.N.Flex : f.N.Hide,
                        flexDirection: f.P.Column,
                        alignItems: f.c.Center,
                        justifyContent: f._1.Center
                    }, a.createElement("div", {
                        id: "recurly-amazon-pay__wallet",
                        className: "recurly-amazon-pay__wallet"
                    }), a.createElement(f._2, {
                        padding: {
                            top: 1
                        }
                    }, a.createElement(f.u, {
                        onClick: this.handleSubmit,
                        state: this.state.awaitingResponse ? f.y.Loading : f.y.Default,
                        disabled: this.state.awaitingResponse
                    }, this.props.submitButtonCopy)))) : a.createElement(f._4, null)
                }, t = r.__decorate([Object(v.d)("RecurlyAmazonPay")], t)
            }(a.Component)),
            k = n("NXs7"),
            _ = n("0nzt"),
            N = n("l7ua"),
            E = (n("pDuT"), {
                light: "#000",
                dark: "#fff"
            }),
            S = {
                light: "#a49fad",
                dark: "#898395"
            },
            w = function() {
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
                        errorState: w()
                    }, t.handleSubmit = function() {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var e = this;
                            return r.__generator(this, function(t) {
                                return this.setState(function(e) {
                                    return {
                                        awaitingResponse: !0,
                                        errorState: r.__assign({}, e.errorState)
                                    }
                                }), window.recurly.token(this.form, function(t, n) {
                                    return r.__awaiter(e, void 0, void 0, function() {
                                        return r.__generator(this, function(e) {
                                            return t ? (this.handleValidationError(t), this.setState({
                                                awaitingResponse: !1
                                            })) : this.handleValidationSuccess(n), [2]
                                        })
                                    })
                                }), [2]
                            })
                        })
                    }, t.handleValidationSuccess = function(e) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(t) {
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
                                                errorState: r.__assign({}, e.errorState)
                                            }
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleValidationError = function(e) {
                        if (e.code === N.a.Validation || e.code === N.a.InvalidParameter) {
                            var n = w();
                            e.fields && e.fields.forEach(function(e) {
                                n[e] = !0
                            }), t.setState({
                                errorMessage: Object(s.d)("We are sorry but your credit card payment could not be processed. Please correct the fields below.", "RecurlyCreditCard"),
                                errorState: n
                            })
                        } else e.code && t.setState({
                            errorMessage: Object(s.d)("The transaction was declined due to invalid data. Please make sure you have entered the correct information.", "RecurlyCreditCard"),
                            errorState: w()
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
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
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
                    return a.createElement(f._2, {
                        className: "recurly-credit-card"
                    }, a.createElement(f._2, {
                        fullWidth: !0
                    }, a.createElement(f._2, {
                        display: this.state.recurlyReady ? f.N.Hide : f.N.Block
                    }, a.createElement(f._4, {
                        fillContent: !0
                    })), a.createElement(f._2, {
                        display: this.state.recurlyReady ? f.N.Block : f.N.Hide
                    }, a.createElement("form", {
                        className: "recurly-form",
                        ref: function(t) {
                            return e.form = t
                        }
                    }, a.createElement(f._2, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(f.S, {
                        id: "recurly-name",
                        label: Object(s.d)("Name", "RecurlyCreditCard")
                    }, a.createElement("div", {
                        id: "recurly-name"
                    }, a.createElement(f.U, {
                        gutterSize: f.V.Medium
                    }, a.createElement(f.J, {
                        cols: 6
                    }, a.createElement(f.Y, {
                        id: "recurly-first-name",
                        type: f.Z.Text,
                        placeholder: Object(s.d)("First Name", "RecurlyCreditCard"),
                        value: this.state.firstName,
                        onChange: this.handleFirstName,
                        error: this.state.errorState.first_name
                    }), a.createElement("input", {
                        type: "hidden",
                        "data-recurly": "first_name",
                        value: this.state.firstName
                    })), a.createElement(f.J, {
                        cols: 6
                    }, a.createElement(f.Y, {
                        id: "recurly-last-name",
                        type: f.Z.Text,
                        placeholder: Object(s.d)("Last Name", "RecurlyCreditCard"),
                        value: this.state.lastName,
                        onChange: this.handleLastName,
                        error: this.state.errorState.last_name
                    }), a.createElement("input", {
                        type: "hidden",
                        "data-recurly": "last_name",
                        value: this.state.lastName
                    })))))), a.createElement(f._2, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(f.S, {
                        id: "recurly-credit-card",
                        label: Object(s.d)("Credit Card", "RecurlyCreditCard")
                    }, a.createElement("div", {
                        id: "recurly-credit-card"
                    }, a.createElement(f.U, {
                        gutterSize: f.V.Medium
                    }, a.createElement(f.J, {
                        cols: 8
                    }, a.createElement("div", {
                        id: "recurly-number",
                        "data-recurly": "number",
                        className: this.state.errorState.number ? "recurly-error" : ""
                    })), a.createElement(f.J, {
                        cols: 4
                    }, a.createElement("div", {
                        id: "recurly-cvv",
                        "data-recurly": "cvv",
                        className: this.state.errorState.cvv ? "recurly-error" : ""
                    })))))), a.createElement(f._2, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(f.S, {
                        id: "recurly-credit-card",
                        label: Object(s.d)("Expiration Date", "RecurlyCreditCard")
                    }, a.createElement("div", {
                        id: "recurly-credit-card"
                    }, a.createElement(f.U, {
                        gutterSize: f.V.Medium
                    }, a.createElement(f.J, {
                        cols: 6
                    }, a.createElement("div", {
                        id: "recurly-month",
                        "data-recurly": "month",
                        className: this.state.errorState.month ? "recurly-error" : ""
                    })), a.createElement(f.J, {
                        cols: 6
                    }, a.createElement("div", {
                        id: "recurly-year",
                        "data-recurly": "year",
                        className: this.state.errorState.year ? "recurly-error" : ""
                    })))))), a.createElement("input", {
                        type: "hidden",
                        name: "recurly-token",
                        "data-recurly": "token"
                    }), a.createElement(f.u, {
                        onClick: this.handleSubmit,
                        state: this.state.awaitingResponse ? f.y.Loading : f.y.Default,
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
                                    fontColor: this.props.darkModeEnabled ? E.dark : E.light,
                                    placeholder: {
                                        color: this.props.darkModeEnabled ? S.dark : S.light
                                    }
                                }
                            },
                            number: {
                                selector: "#recurly-number",
                                style: {
                                    placeholder: {
                                        content: Object(s.d)("Card Number", "RecurlyCreditCard")
                                    }
                                }
                            },
                            month: {
                                selector: "#recurly-month",
                                style: {
                                    placeholder: {
                                        content: Object(s.d)("Month", "RecurlyCreditCard")
                                    }
                                }
                            },
                            year: {
                                selector: "#recurly-year",
                                style: {
                                    placeholder: {
                                        content: Object(s.d)("Year", "RecurlyCreditCard")
                                    }
                                }
                            },
                            cvv: {
                                selector: "#recurly-cvv",
                                style: {
                                    placeholder: {
                                        content: Object(s.d)("CVV", "RecurlyCreditCard")
                                    }
                                }
                            }
                        }
                    })
                }, t = r.__decorate([Object(v.d)("RecurlyCreditCard")], t)
            }(a.Component);
        var P, F = Object(u.b)(function(e) {
                return {
                    darkModeEnabled: Object(_.a)(e) === k.a.Dark
                }
            })(C),
            I = (n("t2Wb"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        paypalConfigured: !1,
                        awaitingResponse: !1,
                        hasError: !1
                    }, t.handleValidationSuccess = function(e) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(t) {
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
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    this.pollForRecurly = setInterval(function() {
                        window.recurly && (e.props.latencyTracking.reportInteractive(), clearInterval(e.pollForRecurly), e.setupConfigs(), e.setState({
                            paypalConfigured: !0
                        }))
                    }, 500)
                }, t.prototype.componentWillUnmount = function() {
                    clearInterval(this.pollForRecurly)
                }, t.prototype.render = function() {
                    return this.state.paypalConfigured ? a.createElement(f._2, {
                        className: "recurly-paypal",
                        display: f.N.Flex,
                        alignItems: f.c.Center,
                        justifyContent: f._1.Center,
                        margin: {
                            y: 2
                        }
                    }, a.createElement(f.u, {
                        onClick: this.handleClick,
                        state: this.state.awaitingResponse ? f.y.Loading : f.y.Default,
                        disabled: this.state.awaitingResponse
                    }, this.props.submitButtonCopy)) : a.createElement(f._2, {
                        margin: {
                            y: 2
                        }
                    }, a.createElement(f._4, null))
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
                }, t = r.__decorate([Object(v.d)("RecurlyPaypal")], t)
            }(a.Component)),
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        xsollaLoaded: !1
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    this.iframe && this.iframe.addEventListener("load", function() {
                        e.props.latencyTracking.reportInteractive(), e.setState({
                            xsollaLoaded: !0
                        })
                    })
                }, t.prototype.render = function() {
                    var e = this;
                    return a.createElement(f._2, {
                        fullWidth: !0
                    }, !this.state.xsollaLoaded && a.createElement(f._4, {
                        fillContent: !0
                    }), a.createElement(f._2, {
                        fullWidth: !0,
                        display: this.state.xsollaLoaded ? f.N.Inline : f.N.Hide
                    }, a.createElement("iframe", {
                        ref: function(t) {
                            return e.iframe = t
                        },
                        id: "xsolla",
                        src: this.props.iframeURL,
                        width: "100%",
                        height: "650px"
                    })))
                }, t = r.__decorate([Object(v.d)("XsollaMoreMethods")], t)
            }(a.Component);
        n("7gLH");
        ! function(e) {
            e.ZUORA_PARENT_LAYOUT = "zuora-payment-method__zuora-parent-layout", e.UPDATE_PAYMENT_BUTTON = "zuora-payment-method__update-payment-button"
        }(P || (P = {}));
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
                                return a.createElement(f._2, {
                                    key: t,
                                    margin: {
                                        left: 2
                                    }
                                }, a.createElement(f._35, {
                                    color: f.I.Error
                                }, "• ", e))
                            });
                            return a.createElement("div", null, a.createElement(f._2, {
                                margin: {
                                    top: 1,
                                    left: 1,
                                    bottom: .5
                                }
                            }, a.createElement(f._35, {
                                color: f.I.Error
                            }, Object(s.d)("We are sorry but your credit card payment could not be processed. Please correct the fields below.", "ZuoraCreditCard"))), e)
                        }
                        if (t.state.errorMessage) return a.createElement(f._2, {
                            margin: {
                                top: 1,
                                left: 1
                            }
                        }, a.createElement(f._35, {
                            color: f.I.Error
                        }, t.state.errorMessage))
                    }, t.successCallback = function(e) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            return r.__generator(this, function(t) {
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
                    }, t.errorCallback = function(e, n, r) {
                        if (t.setState({
                                awaitingResponse: !1
                            }), "unknown" === n) return t.parseGatewayErrorMessage(r);
                        window.Z.sendErrorMessageToHpm(e, r)
                    }, t.parseGatewayErrorMessage = function(e) {
                        return e.includes("NullValue") ? t.parseNullValueErrorMessage(e) : e.includes("Invalid CC Number") ? t.setState({
                            errorMessage: Object(s.d)("You entered an invalid card number. Please update your card and try again.", "ZuoraCreditCard")
                        }) : t.setState({
                            errorMessage: Object(s.d)("We couldn't process your payment. Please try again.", "ZuoraCreditCard")
                        })
                    }, t.parseNullValueErrorMessage = function(e) {
                        var n = e.replace("[HostedPageFieldValidationError]&nbsp; ", "").replace(/\s/g, "").split(":NullValue,"),
                            r = {
                                creditCardHolderName: Object(s.d)("Name on Card", "ZuoraCreditCard"),
                                creditCardAddress1: Object(s.d)("Billing Address", "ZuoraCreditCard"),
                                creditCardCity: Object(s.d)("City", "ZuoraCreditCard"),
                                creditCardPostalCode: Object(s.d)("Zip Code", "ZuoraCreditCard")
                            },
                            i = n.map(function(e) {
                                var t = r[e];
                                return t || ""
                            }).filter(function(e) {
                                return "" !== e
                            });
                        t.setState({
                            nullValueErrors: i
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    if (document.querySelector("#zuora-script")) this.initZuoraIFrame();
                    else {
                        var t = document.createElement("script");
                        t.src = "https://static.zuora.com/Resources/libs/hosted/1.3.0/zuora-min.js", t.async = !0, t.id = "zuora-script", document.body.appendChild(t), t.onload = function() {
                            e.props.latencyTracking.reportInteractive(), e.initZuoraIFrame()
                        }
                    }
                }, t.prototype.render = function() {
                    return a.createElement("div", null, !this.state.zuoraConfigured && a.createElement(f._2, {
                        padding: {
                            y: 5
                        }
                    }, a.createElement(f._4, {
                        fillContent: !0
                    })), a.createElement(f._2, {
                        display: this.state.zuoraConfigured ? f.N.Block : f.N.Hide,
                        "data-test-selector": P.ZUORA_PARENT_LAYOUT
                    }, this.renderErrorMessage(), a.createElement("div", {
                        id: "zuora_payment",
                        className: this.state.awaitingResponse ? "zuora-disabled" : ""
                    }), a.createElement(f._2, {
                        margin: {
                            left: .5,
                            top: 2,
                            bottom: 1
                        }
                    }, a.createElement(f.u, {
                        onClick: this.handleSubmit,
                        state: this.state.awaitingResponse ? f.y.Loading : f.y.Default,
                        disabled: this.state.awaitingResponse,
                        "data-test-selector": P.UPDATE_PAYMENT_BUTTON
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
                }, t = r.__decorate([Object(v.d)("ZuoraCreditCard")], t)
            }(a.Component),
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        selectedProvider: "recurly-credit-card"
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    if (!document.querySelector("#recurly-script")) {
                        var e = document.createElement("script");
                        e.src = "https://js.recurly.com/v4/recurly.js", e.async = !0, e.id = "recurly-script", document.body.appendChild(e)
                    }
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(s.d)("Complete Purchase", "PaymentMethods"),
                        t = {
                            "recurly-credit-card": a.createElement(F, {
                                publicKey: this.props.configs.recurly.publicKey,
                                submitButtonCopy: e,
                                onSuccess: this.props.onSuccess
                            }),
                            "recurly-paypal": a.createElement(I, {
                                publicKey: this.props.configs.recurly.publicKey,
                                braintreeClientAuthorization: this.props.configs.recurly.braintreeClientAuthorization,
                                submitButtonCopy: e,
                                onSuccess: this.props.onSuccess
                            }),
                            "recurly-amazon-pay": a.createElement(b, r.__assign({
                                submitButtonCopy: e,
                                onSuccess: this.props.onSuccess
                            }, this.props.configs.recurly.payWithAmazonConfigs)),
                            "xsolla-more-methods": a.createElement(O, r.__assign({}, this.props.configs.xsolla)),
                            "zuora-credit-card": a.createElement(A, r.__assign({
                                submitButtonCopy: e,
                                onSuccess: this.props.onSuccess
                            }, this.props.configs.zuora))
                        };
                    return a.createElement(f._2, null, a.createElement(f.u, {
                        onClick: this.setProviderFactory("recurly-credit-card"),
                        disabled: "recurly-credit-card" === this.state.selectedProvider
                    }, Object(s.d)("recurly-credit-card", "PaymentMethods")), a.createElement(f.u, {
                        onClick: this.setProviderFactory("recurly-paypal"),
                        disabled: "recurly-paypal" === this.state.selectedProvider
                    }, Object(s.d)("recurly-paypal", "PaymentMethods")), a.createElement(f.u, {
                        onClick: this.setProviderFactory("recurly-amazon-pay"),
                        disabled: "recurly-amazon-pay" === this.state.selectedProvider
                    }, Object(s.d)("recurly-amazon-pay", "PaymentMethods")), a.createElement(f.u, {
                        onClick: this.setProviderFactory("xsolla-more-methods"),
                        disabled: "xsolla-more-methods" === this.state.selectedProvider
                    }, Object(s.d)("xsolla-more-methods", "PaymentMethods")), a.createElement(f.u, {
                        onClick: this.setProviderFactory("zuora-credit-card"),
                        disabled: "zuora-credit-card" === this.state.selectedProvider
                    }, Object(s.d)("zuora-credit-card", "PaymentMethods")), t[this.state.selectedProvider])
                }, t.prototype.setProviderFactory = function(e) {
                    var t = this;
                    return function() {
                        return t.setState({
                            selectedProvider: e
                        })
                    }
                }, t = r.__decorate([Object(v.d)("PaymentMethods")], t)
            }(a.Component),
            R = n("3T7g"),
            j = n("7LIQ"),
            x = n("Tzcg"),
            T = (n("2dVl"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.product,
                        t = this.props.owner;
                    return t ? a.createElement(f._2, {
                        className: "ticket-description"
                    }, a.createElement(f.A, {
                        border: !0,
                        elevation: 1
                    }, a.createElement("div", {
                        className: "ticket-description__banner-image",
                        style: {
                            backgroundImage: "url(" + t.bannerImageURL
                        }
                    }, a.createElement(f._2, {
                        className: "ticket-description__broadcaster-info",
                        textAlign: f._36.Center,
                        display: f.N.Flex,
                        flexDirection: f.P.Column,
                        alignItems: f.c.Center,
                        flexWrap: f.Q.NoWrap,
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
                    }, a.createElement(f.W, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 2
                        }
                    }, a.createElement(f.l, {
                        alt: t.displayName,
                        size: 96,
                        src: t.profileImageURL
                    })), a.createElement(f.W, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 1
                        }
                    }, a.createElement(f._35, {
                        type: f._40.H4,
                        bold: !0,
                        color: f.I.Overlay
                    }, t.displayName)), a.createElement(f._2, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 2
                        }
                    }, a.createElement(f._35, {
                        type: f._40.H5,
                        color: f.I.Overlay
                    }, e.displayName)))), a.createElement(f.B, null, a.createElement(f._25, {
                        borderBottom: !0,
                        textAlign: f._36.Center,
                        background: f.m.Alt,
                        padding: 2
                    }, a.createElement(f._35, {
                        type: f._40.H4
                    }, a.createElement(f._35, {
                        type: f._40.Span,
                        bold: !0
                    }, e.price), " / Month")), a.createElement(f._25, {
                        className: "ticket-description__description",
                        padding: {
                            x: 1,
                            bottom: 2
                        },
                        textAlign: f._36.Left,
                        background: f.m.Alt
                    }, a.createElement(f.X, {
                        padding: {
                            y: 1
                        }
                    }, a.createElement(f._35, {
                        className: "ticket-description__description__line-item",
                        bold: !0
                    }, "Subscription Benefits")), a.createElement(f._35, {
                        className: "ticket-description__description__line-item"
                    }, "Directly Support The Broadcaster"), e.hasAdFree && a.createElement(f._35, {
                        className: "ticket-description__description__line-item"
                    }, "Ad-Free (with limited exceptions)"), a.createElement(f._35, {
                        className: "ticket-description__description__line-item"
                    }, "Chat During Subscriber-Only Mode"), e.hasFastChat && a.createElement(f._35, {
                        className: "ticket-description__description__line-item"
                    }, "Not Affected By Chat Slow Mode"), e.hasSubonlyVideoArchive && a.createElement(f._35, {
                        className: "ticket-description__description__line-item"
                    }, "Access to VODs"), this.subBadges(), this.subEmotes())))) : a.createElement("div", null)
                }, t.prototype.subBadges = function() {
                    if (this.props.owner) {
                        var e = this.props.owner.broadcastBadges.filter(function(e) {
                            return "subscriber" === e.setID
                        }).sort(function(e, t) {
                            return parseInt(e.version, 10) < parseInt(t.version, 10) ? -1 : 1
                        });
                        if (e.length) {
                            var t = e.map(function(e) {
                                return a.createElement(f._2, {
                                    key: e.setID + "/" + e.version,
                                    margin: .5
                                }, a.createElement(R.a, {
                                    badge: e
                                }))
                            });
                            return a.createElement(a.Fragment, null, a.createElement(f._35, {
                                className: "ticket-description__description__line-item"
                            }, "Subscriber Badges:"), a.createElement(f._2, {
                                display: f.N.Flex,
                                flexWrap: f.Q.Wrap,
                                justifyContent: f._1.Center
                            }, t))
                        }
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
                        if (0 !== t.length) return a.createElement("div", null, a.createElement(f._35, {
                            className: "ticket-description__description__line-item"
                        }, t.length, " Subscriber Emotes:"), a.createElement(j.a, {
                            emoteSet: {
                                id: "",
                                emotes: Object(x.b)(t)
                            },
                            onClickEmote: void 0,
                            locked: !1
                        }))
                    }
                }, t = r.__decorate([Object(v.d)("TicketDescription")], t)
            }(a.Component)),
            L = n("Heyg"),
            U = function(e) {
                var t;
                return t = e.canGift ? a.createElement(f._35, null, Object(s.d)("You are buying a single month {price} Gift Subscription for <x:strong>{recipientName}</x:strong>.", {
                    price: e.price,
                    "x:strong": function(e) {
                        return a.createElement(f._35, {
                            type: f._40.Span,
                            bold: !0
                        }, e)
                    },
                    recipientName: e.recipientDisplayName || ""
                }, "PurchaseSubInfo")) : a.createElement(f._35, {
                    color: f.I.Error
                }, Object(s.d)("Sorry, a Gift Subscription to this channel is not available for <x:strong>{recipientName}</x:strong>", {
                    recipientName: e.recipientDisplayName || "",
                    "x:strong": function(e) {
                        return a.createElement(f._35, {
                            bold: !0
                        }, e)
                    }
                }, "PurchaseSubInfo")), a.createElement("div", null, a.createElement(f._35, {
                    type: f._40.H2,
                    bold: !0
                }, Object(s.d)("Gift A Subscription", "PurchaseSubInfo")), t)
            },
            M = n("CIox"),
            z = (n("pOYM"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.goBackToChannel = function() {
                        (window.opener || window.top !== window.self) && (parent.window.close(), window.close()), t.props.history.push("/" + t.props.productOwnerLogin)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(f._2, {
                        className: "gift-sub-receipt__container",
                        padding: {
                            y: 2
                        },
                        margin: {
                            x: 2
                        }
                    }, a.createElement(f._2, null, a.createElement(f._35, {
                        type: f._40.H2,
                        bold: !0
                    }, Object(s.d)("Purchase Successful", "GiftSubReceipt"))), a.createElement(f._2, {
                        padding: {
                            y: 3
                        }
                    }, a.createElement(f._35, null, Object(s.d)("You have purchased a {price} Gift Subscription for <x:strong>{recipientDisplayName}</x:strong>", {
                        price: Object(s.e)(this.props.invoicePrice / 100, {
                            style: "currency",
                            currency: this.props.invoiceCurrency
                        }),
                        recipientDisplayName: this.props.recipientDisplayName || "",
                        "x:strong": function(e) {
                            return a.createElement(f._35, {
                                key: "recipient-display-name",
                                type: f._40.Span,
                                bold: !0
                            }, e)
                        }
                    }, "GiftSubReceipt"))), a.createElement(f._25, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: {
                            y: 3
                        }
                    }, a.createElement(f._2, {
                        className: "gift-sub-receipt__label",
                        display: f.N.InlineBlock
                    }, a.createElement(f._35, {
                        bold: !0
                    }, Object(s.d)("Gift Status", "GiftSubReceipt"))), a.createElement(f._2, {
                        display: f.N.InlineBlock
                    }, a.createElement(f._35, null, Object(s.d)("Active", "GiftSubReceipt")))), a.createElement(f._25, {
                        borderBottom: !0,
                        padding: {
                            y: 3
                        }
                    }, a.createElement(f._2, {
                        className: "gift-sub-receipt__label",
                        display: f.N.InlineBlock
                    }, a.createElement(f._35, {
                        bold: !0
                    }, Object(s.d)("Your Invoice Total", "GiftSubReceipt"))), a.createElement(f._2, {
                        display: f.N.InlineBlock
                    }, a.createElement(f._35, null, Object(s.e)(this.props.invoicePrice / 100, {
                        style: "currency",
                        currency: this.props.invoiceCurrency
                    })))), a.createElement(f._2, {
                        margin: {
                            y: 3
                        }
                    }, a.createElement(f.u, {
                        onClick: this.goBackToChannel
                    }, Object(s.d)("Go back to {displayName}", {
                        displayName: this.props.productOwnerDisplayName
                    }, "GiftSubReceipt"))))
                }, t
            }(a.Component)),
            B = Object(M.e)(z),
            G = n("j6Ui"),
            V = function(e) {
                return a.createElement(f._25, {
                    background: f.m.Base,
                    borderMarked: !0,
                    padding: 1,
                    margin: {
                        y: 1
                    }
                }, a.createElement(f._2, {
                    margin: {
                        bottom: .5
                    }
                }, a.createElement(f._35, null, Object(s.d)("You are currently subscribed for free with Twitch Prime. If you choose to upgrade to the {newPrice} subscription, you will be immediately billed for {newPrice} and your new subscription will auto-renew every month.", {
                    newPrice: Object(s.e)(e.newPrice / 100, {
                        style: "currency",
                        currency: e.newCurrency
                    })
                }, "UpgradePrimeWarning"))), a.createElement(f._2, {
                    margin: {
                        bottom: .5
                    }
                }, a.createElement(f._35, null, Object(s.d)("You'll be able to subscribe to another channel for free with Twitch Prime 30-days after you last used your free subscription.", "UpgradePrimeWarning"))), a.createElement(f._35, null, Object(s.d)("If you upgrade your subscription, your sub anniversary, sub streaks, and badge tenure will be maintained.", "UpgradePrimeWarning")))
            },
            H = function(e) {
                return a.createElement(f._25, {
                    background: f.m.Base,
                    borderMarked: !0,
                    padding: 1,
                    margin: {
                        y: 1
                    }
                }, a.createElement(f._2, {
                    margin: {
                        bottom: .5
                    }
                }, a.createElement(f._35, null, Object(s.d)("You are currently subscribed to the {originalPrice} subscription plan. If you choose to upgrade to the {newPrice} subscription plan, you will be immediately billed for {newPrice} and your currently active subscription plan for {originalPrice} will not renew any further.", {
                    originalPrice: Object(s.e)(e.originalPrice / 100, {
                        style: "currency",
                        currency: e.originalCurrency
                    }),
                    newPrice: Object(s.e)(e.newPrice / 100, {
                        style: "currency",
                        currency: e.newCurrency
                    })
                }, "UpgradeTierWarning"))), a.createElement(f._2, {
                    margin: {
                        bottom: .5
                    }
                }, a.createElement(f._35, null, Object(s.d)("Please note that pro-rated refunds cannot be offered for the remaining time on your {originalPrice} subscription plan", {
                    originalPrice: Object(s.e)(e.originalPrice / 100, {
                        style: "currency",
                        currency: e.originalCurrency
                    })
                }, "UpgradeTierWarning"))), a.createElement(f._35, null, Object(s.d)("If you upgrade your subscription, your sub anniversary, sub streaks, and badge tenure will be maintained.", "UpgradeTierWarning")))
            },
            W = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    return a.createElement("div", null, a.createElement(f._2, {
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(f._35, {
                        type: f._40.H2,
                        bold: !0
                    }, Object(s.d)("Start Your Subscription", "PersonalSubPurchaseInfo"))), this.tierUpgrade && a.createElement(H, {
                        originalPrice: this.originalPrice,
                        originalCurrency: "USD",
                        newPrice: this.newPrice,
                        newCurrency: "USD"
                    }), this.primeUpgrade && a.createElement(V, {
                        newPrice: this.newPrice,
                        newCurrency: "USD"
                    }), this.props.hasGift && this.props.giftEndsAt && a.createElement(f._25, {
                        background: f.m.Base,
                        borderMarked: !0,
                        padding: 1
                    }, a.createElement(f._35, null, Object(s.d)("You will be charged when your Gift Subscription ends on <x:strong>{date}</x:strong>.", {
                        date: Object(s.c)(Object(G.c)(this.props.giftEndsAt), "short"),
                        "x:strong": function(e) {
                            return a.createElement(f._35, {
                                type: f._40.Span,
                                bold: !0
                            }, e)
                        }
                    }, "PersonalSubPurchaseInfo"))))
                }, Object.defineProperty(t.prototype, "tierUpgrade", {
                    get: function() {
                        return !(!this.props.purchase || this.props.purchase.details && (!this.props.purchase.details || "inactive" !== this.props.purchase.details.state) || !this.props.purchase.compatiblePurchases) && !!this.props.purchase.compatiblePurchases.find(function(e) {
                            return "prime" !== e.paymentProvider
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "primeUpgrade", {
                    get: function() {
                        return !(!this.props.purchase || this.props.purchase.details && (!this.props.purchase.details || "inactive" !== this.props.purchase.details.state) || !this.props.purchase.compatiblePurchases) && !!this.props.purchase.compatiblePurchases.find(function(e) {
                            return "prime" === e.paymentProvider
                        })
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "originalPrice", {
                    get: function() {
                        return this.props.purchase.compatiblePurchases ? this.props.purchase.compatiblePurchases[0].price : 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "newPrice", {
                    get: function() {
                        return this.props.price && this.props.price.includes("$") ? 100 * +this.props.price.replace("$", "") : 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(a.Component),
            Y = (n("McJK"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.goBackToChannel = function() {
                        (window.opener || window.top !== window.self) && (parent.window.close(), window.close()), t.props.history.push("/" + t.props.productOwnerLogin)
                    }, t
                }
                return r.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return e = this.props.giftSubEndsAt ? Object(s.d)("Your paid subscription will begin on <x:strong>{endsAt}</x:strong> after your Gift Subscription ends", {
                        "x:strong": function(e) {
                            return a.createElement(f._35, {
                                type: f._40.Span,
                                bold: !0
                            }, e)
                        },
                        endsAt: Object(s.c)(new Date(this.props.giftSubEndsAt), "long")
                    }, "PersonalSubReceipt") : Object(s.d)("Active", "PersonalSubReceipt"), a.createElement(f._2, {
                        className: "personal-sub-receipt",
                        padding: {
                            y: 2
                        },
                        margin: {
                            x: 2
                        }
                    }, a.createElement(f._25, {
                        borderBottom: !0,
                        padding: {
                            bottom: 3
                        }
                    }, a.createElement(f._35, {
                        type: f._40.H2,
                        bold: !0
                    }, Object(s.d)("Your Subscription", "PersonalSubReceipt"))), a.createElement(f._25, {
                        borderBottom: !0,
                        padding: {
                            y: 3
                        }
                    }, a.createElement(f._2, {
                        className: "personal-sub-receipt__label",
                        display: f.N.InlineBlock
                    }, a.createElement(f._35, {
                        bold: !0
                    }, Object(s.d)("Subscription for", "PersonalSubReceipt"))), a.createElement(f._2, {
                        display: f.N.InlineBlock
                    }, a.createElement(f._35, null, this.props.purchaserDisplayName))), a.createElement(f._25, {
                        borderBottom: !0,
                        padding: {
                            y: 3
                        }
                    }, a.createElement(f._2, {
                        className: "personal-sub-receipt__label",
                        display: f.N.InlineBlock
                    }, a.createElement(f._35, {
                        bold: !0
                    }, Object(s.d)("Status", "PersonalSubReceipt"))), a.createElement(f._2, {
                        display: f.N.InlineBlock
                    }, a.createElement(f._35, null, e))), a.createElement(f._25, {
                        borderBottom: !0,
                        padding: {
                            y: 3
                        }
                    }, a.createElement(f._2, {
                        className: "personal-sub-receipt__label",
                        display: f.N.InlineBlock
                    }, a.createElement(f._35, {
                        bold: !0
                    }, Object(s.d)("Invoice Total", "PersonalSubReceipt"))), a.createElement(f._2, {
                        display: f.N.InlineBlock
                    }, a.createElement(f._35, null, Object(s.e)(this.props.invoicePrice / 100, {
                        style: "currency",
                        currency: this.props.invoiceCurrency
                    })))), a.createElement(f._2, {
                        margin: {
                            y: 3
                        }
                    }, a.createElement(f.u, {
                        onClick: this.goBackToChannel
                    }, Object(s.d)("Go back to {displayName}", {
                        displayName: this.props.productOwnerDisplayName
                    }, "PersonalSubReceipt"))))
                }, t
            }(a.Component)),
            K = Object(M.e)(Y),
            q = (n("gKy9"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        giftSubPurchased: !1
                    }, t.completePurchase = function(e) {
                        return r.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        t = "/kraken/checkout/users/" + this.props.data.currentUser.id + "/products/" + this.props.productShortName + "/purchase/complete", n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, h.a.post(t, {
                                            body: e
                                        }, {
                                            version: 5
                                        })];
                                    case 2:
                                        return n.sent().error ? [2] : (this.props.isGift ? this.setState({
                                            giftSubPurchased: !0
                                        }) : this.props.data.refetch(), [3, 4]);
                                    case 3:
                                        return n.sent(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.renderPurchaseInfo = function() {
                        if (!t.purchased) {
                            if (t.props.isGift) return a.createElement(U, {
                                canGift: t.props.data.subscriptionProduct.self.checkoutConfigs.canGift,
                                recipientDisplayName: t.props.recipientDisplayName,
                                price: t.props.data.subscriptionProduct.price
                            });
                            var e = t.props.data.subscriptionProduct.self.benefit;
                            return a.createElement(W, {
                                price: t.props.data.subscriptionProduct.price,
                                hasGift: e && e.gift.isGift,
                                purchase: t.props.data.subscriptionProduct.self.purchase,
                                giftEndsAt: e && e.endsAt
                            })
                        }
                    }, t.renderReceipt = function() {
                        var e = t.props.data.subscriptionProduct.self.benefit,
                            n = t.props.data.subscriptionProduct.self.purchase.details;
                        return n && t.state.giftSubPurchased ? a.createElement(B, {
                            recipientDisplayName: t.props.recipientDisplayName,
                            productOwnerDisplayName: t.props.data.subscriptionProduct.owner.displayName,
                            productOwnerLogin: t.props.data.subscriptionProduct.owner.login,
                            invoicePrice: n.price,
                            invoiceCurrency: "USD"
                        }) : n && t.purchased ? a.createElement(K, {
                            purchaserDisplayName: t.props.data.currentUser.displayName,
                            productOwnerDisplayName: t.props.data.subscriptionProduct.owner.displayName,
                            productOwnerLogin: t.props.data.subscriptionProduct.owner.login,
                            giftSubEndsAt: e && (e.gift.isGift || null) && e.endsAt,
                            invoicePrice: n.price,
                            invoiceCurrency: "USD"
                        }) : void 0
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.data.loading || this.props.data.error) return a.createElement(f._2, null);
                    var e = this.props.data.subscriptionProduct.owner,
                        t = this.props.data.subscriptionProduct,
                        n = this.props.data.subscriptionProduct.self.checkoutConfigs.paymentProviderConfigs;
                    return a.createElement(f._2, {
                        className: "checkout-payments",
                        padding: 3,
                        overflow: f._5.Auto
                    }, a.createElement(f._2, {
                        display: f.N.Flex,
                        justifyContent: f._1.Center,
                        flexWrap: f.Q.Wrap
                    }, a.createElement(f._2, {
                        display: f.N.Flex,
                        alignItems: f.c.Center,
                        margin: {
                            bottom: 4
                        }
                    }, a.createElement(T, {
                        owner: e,
                        product: t
                    })), a.createElement(f._2, {
                        margin: {
                            x: 4
                        }
                    }, this.purchased && this.renderReceipt(), !this.purchased && this.renderPurchaseInfo(), !this.purchased && a.createElement(D, {
                        onSuccess: this.completePurchase,
                        configs: n
                    }))))
                }, Object.defineProperty(t.prototype, "personalSubPurchased", {
                    get: function() {
                        return !!this.props.data.subscriptionProduct.self.purchase.details
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "purchased", {
                    get: function() {
                        return !this.props.isGift && this.personalSubPurchased || this.state.giftSubPurchased
                    },
                    enumerable: !0,
                    configurable: !0
                }), t = r.__decorate([Object(v.d)("CheckoutPayments"), Object(o.a)(L, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                productName: e.productShortName,
                                isGift: e.isGift,
                                recipientID: e.recipientID
                            }
                        }
                    }
                })], t)
            }(a.Component));
        var Z = Object(u.b)(function(e) {
                return {
                    isLoggedIn: Object(y.d)(e)
                }
            }, function(e) {
                return Object(p.b)({
                    promptLogin: function() {
                        return Object(g.f)(m.a.DashboardPage)
                    }
                }, e)
            })(q),
            Q = n("EaWz"),
            J = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t
                }
                return r.__extends(t, e), t.prototype.componentWillMount = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, s.n.experiments.getAssignment("TWILIGHT_SUB_CHECKOUT")];
                                case 1:
                                    return e.sent(), [2]
                            }
                        })
                    })
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.match.params.productShortName,
                        t = this.props.data.recipient;
                    return a.createElement(Z, {
                        productShortName: e,
                        isGift: !(!t || !t.id),
                        recipientID: t && t.id,
                        recipientDisplayName: t && t.displayName
                    })
                }, t = r.__decorate([Object(v.d)("SubsCheckoutPage", {
                    destination: l.a.SubsCheckoutPage
                }), Object(c.a)({
                    location: d.PageviewLocation.SubsCheckoutPage
                }), Object(o.a)(Q, {
                    options: function(e) {
                        return {
                            fetchPolicy: "cache-first",
                            variables: {
                                recipientName: i.parse(e.location.search).recipient || ""
                            }
                        }
                    }
                })], t)
            }(a.Component);
        n.d(t, "SubsCheckoutPage", function() {
            return J
        })
    },
    McJK: function(e, t) {},
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
        var r = n("GiK3"),
            i = (n.n(r), n("mbxv")),
            a = function(e) {
                var t, n = e.badgesToRender,
                    a = e.badgeSets,
                    s = [];
                t = n, Array.isArray(t) ? s = n.map(function(e) {
                    var t = a.getBadge(e.setID, e.version);
                    return null === t ? null : r.createElement(i.a, {
                        key: t.setID + "/" + t.version,
                        badge: t
                    })
                }) : function(e) {
                    return !Array.isArray(e)
                }(n) && (s = Object.keys(n).map(function(e) {
                    var t = n[e],
                        s = a.getBadge(e, t);
                    return null === s ? null : r.createElement(i.a, {
                        key: s.setID + "/" + s.version,
                        badge: s
                    })
                }));
                var o = s.filter(function(e) {
                    return null !== e
                });
                return r.createElement("span", null, o)
            }
    },
    aMOL: function(e, t) {},
    gKy9: function(e, t) {},
    j6Ui: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), t.b = function(e, t) {
            return Object(r.format)(e, t)
        }, t.c = function(e) {
            return Object(r.parse)(e)
        }, t.d = function(e, t) {
            var n = e.split(":");
            if (2 !== n.length) throw new Error("invalid time string: " + e);
            var r = parseInt(n[0], 10),
                i = parseInt(n[1].substring(0, n[1].length - 2), 10),
                a = n[1].substring(n[1].length - 2);
            12 === r && (r = 0);
            "pm" === a && (r += 12);
            var s = t || new Date;
            return s.setHours(r, i), s
        };
        var r = n("wuJz"),
            i = (n.n(r), {
                RFC3399: "YYYY-MM-DDTHH:mm:ssZ",
                timeString: "h:mma"
            })
    },
    l7ua: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, "a", function() {
                return r
            }),
            function(e) {
                e.NotConfigured = "not-configured", e.MissingPublicKey = "missing-public-key", e.InvalidPublicKey = "invalid-public-key", e.AlreadyConfigured = "already-configured", e.MissingHostedFieldTarget = "missing-hosted-field-target", e.Validation = "validation", e.InvalidParameter = "invalid-parameter", e.APIError = "api-error", e.PayPalNotConfigured = "paypal-not-configured", e.PayPalCanceled = "paypal-canceled", e.PayPalError = "paypal-error", e.InvalidRoutingNumber = "invalid-routing-number", e.NotFound = "not-found", e.MissingPlan = "missing-plan", e.InvalidAddon = "invalid-addon", e.InvalidCurrency = "invalid-currency", e.GiftCardCurrencyMisMatch = "gift-card-currency-mismatch"
            }(r || (r = {}))
    },
    mbxv: function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            i = n("GiK3"),
            a = n("+V/3"),
            s = n("Odds"),
            o = (n("2IkU"), n("6sO2")),
            c = n("vH/s"),
            l = function(e) {
                var t = Date.now() / 1e3;
                e.badge_type = e.badge_type.toLowerCase().replace(/( |\s)/g, "_"), o.n.tracking.track(c.SpadeEventType.ChatBadgeClick, Object.assign({
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
                    l({
                        badge_type: t.props.badge.title,
                        badge_url_target: t.targetURL
                    })
                }, t
            }
            return r.__extends(t, e), t.prototype.render = function() {
                var e = this.props.badge,
                    t = e.title,
                    n = e.image1x,
                    r = e.image2x,
                    a = e.image4x,
                    o = i.createElement("img", {
                        alt: t,
                        className: "chat-badge",
                        src: n,
                        srcSet: n + " 1x, " + r + " 2x, " + a + " 4x",
                        onMouseOver: this.onMouseOver,
                        onMouseOut: this.onMouseOut
                    });
                return this.targetURL = this.getTargetURL(), "" !== this.targetURL && (o = i.createElement("a", {
                    href: this.targetURL,
                    onClick: this.onBadgeClickHandler,
                    target: "_blank",
                    "data-a-target": "chat-badge"
                }, o)), this.state.isHovering ? i.createElement(s._43, {
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
        }(i.Component)
    },
    pDuT: function(e, t) {},
    pOYM: function(e, t) {},
    t2Wb: function(e, t) {}
});
//# sourceMappingURL=pages.subs-checkout.components.subs-checkout-page-d3ed0d88e8ef7bd50ffea46b1f2bd165.js.map