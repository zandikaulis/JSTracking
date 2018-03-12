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
            return o
        });
        var i = "subscribe_to_channel",
            r = "turbo",
            a = "visit_url",
            o = "broadcaster"
    },
    "2IkU": function(e, t) {},
    "2dVl": function(e, t) {},
    "3T7g": function(e, t, n) {
        "use strict";
        var i = n("RbGx"),
            r = n("mbxv"),
            a = n("+V/3"),
            o = (n("AwFw"), n("TToO")),
            s = function() {
                function e(e, t, n) {
                    this.globalsBySet = new Map, this.channelsBySet = new Map, this.indexBadges(e, this.globalsBySet, n), Array.isArray(t) && this.indexBadges(t, this.channelsBySet, n)
                }
                return e.prototype.getBadge = function(e, t) {
                    var n = this.channelsBySet.get(e);
                    return n && n.has(t) ? n.get(t) || null : void 0 !== (n = this.globalsBySet.get(e)) && n.get(t) || null
                }, e.prototype.indexBadges = function(e, t, n) {
                    e.forEach(function(e) {
                        n && e.clickAction === a.b && (e = o.__assign({}, e, {
                            channelName: n
                        }));
                        var i = t.get(e.setID);
                        i || (i = new Map, t.set(e.setID, i)), i.set(e.version, e)
                    })
                }, e
            }();
        new s([], [], "");
        n.d(t, "b", function() {
            return i.a
        }), n.d(t, "a", function() {
            return r.a
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "c", function() {
            return s
        })
    },
    "7gLH": function(e, t) {},
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var i = n("TToO"),
            r = n("6sO2"),
            a = n("Aj/L"),
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
                    return new URL(e, r.o.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n, r, a;
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
                                    return r = i.sent(), e.headers && e.headers.get && (a = e.headers.get("Content-Type")) && -1 !== a.indexOf("application/json") && (t.requestError = r), [3, 4];
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
                    var n = r.o.store.getState(),
                        i = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": r.o.config.legacyClientID,
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
                                    value: "interval"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "duration"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "unit"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
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
                                                    value: "isOneMonthFreeEligible"
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
                end: 1326
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/badges/models/badge-fragment.gql"\nquery CheckoutPayments($productName: String! $isGift: Boolean! $recipientID: ID) {\ncurrentUser {\nid\ndisplayName\n}\nsubscriptionProduct(productName: $productName) {\nid\ntier\nname\nprice\ntype\ninterval {\nduration\nunit\n}\nurl\nhasSubonlyVideoArchive\nhasAdFree\nhasFastChat\ndisplayName\nemotes {\nid\ntoken\n}\nself {\ncheckoutConfigs (isGift: $isGift recipientID: $recipientID) {\ncanGift\nisOneMonthFreeEligible\npaymentProviderConfigs {\nxsolla {\niframeURL\n}\nrecurly {\npayWithAmazonConfigs {\nclientID\nisProduction\nsellerID\n}\npublicKey\nbraintreeClientAuthorization\n}\nzuora {\nexternalAccountID\ntoken\ntenantID\npublicKey\nsignature\nhostedPageID\nhostedPageURL\nexternalAccountID\n}\n}\n}\npurchase {\ndetails {\npaymentProvider\nprice\ncurrency\nstate\ncancelledAt\nproductType\nproductTier\n}\ncompatiblePurchases {\npaymentProvider\nprice\ncurrency\nstate\ncancelledAt\nproductType\nproductTier\n}\n}\nbenefit {\nid\ntier\nendsAt\npurchasedWithPrime\ngift {\nisGift\n}\n}\npromotion {\ndiscountType\ndiscountValue\nnewPrice\noldPrice\n}\n}\nowner {\nid\ndisplayName\ndescription\nlogin\nroles{\nisPartner\n}\nbannerImageURL\nbroadcastBadges{\n...badge\n}\nprofileImageURL(width:300)\nsubscriptionProducts{\nid\ntier\ndisplayName\nurl\nprice\nemotes{\nid\ntoken\n}\nemoteSetID\nself {\npromotion {\nnewPrice\noldPrice\ndiscountValue\ndiscountType\n}\n}\n}\n}\n}\n}',
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
        var i, r, a, o, s = n("TToO"),
            c = n("OAwv"),
            l = n("GiK3"),
            d = n("6sO2"),
            u = n("7vx8"),
            p = n("j7/Y"),
            m = n("w9tK"),
            g = n("vH/s"),
            y = n("RH2O"),
            h = n("2KeS"),
            f = n("+xm8"),
            v = n("f2i/"),
            b = n("Aj/L"),
            k = n("9u8h");
        ! function(e) {
            e.Failed = "failed", e.Pending = "pending", e.Success = "success"
        }(i || (i = {})),
        function(e) {
            e.Gifting = "gifting", e.Personal = "personal"
        }(r || (r = {})),
        function(e) {
            e.RecurlyCreditCard = "recurly_credit_card", e.RecurlyPaypal = "recurly_paypal", e.RecurlyPayWithAmazon = "recurly_pay_with_amazon", e.ZuoraCreditCard = "zuora_credit_card", e.Xsolla = "xsolla"
        }(a || (a = {})),
        function(e) {
            e.VendorLoginClick = "vendor_login_click", e.CompletePurchaseClick = "complete_purchase_click", e.PaypalTokenError = "paypal_token_error", e.RadioButtonClick = "radio_button_click", e.TokenError = "token_error"
        }(o || (o = {}));
        var _ = n("CSlQ"),
            N = n("Odds"),
            E = (n("aMOL"), function() {
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
                        return s.__awaiter(t, void 0, void 0, function() {
                            return s.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        this.setState({
                                            awaitingResponse: !0
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, this.props.onSuccess({
                                            payment_flow: a.RecurlyPayWithAmazon,
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
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
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
                    return this.state.amazonScriptLoaded ? l.createElement(N._2, {
                        padding: {
                            top: 1
                        },
                        className: "recurly-amazon-pay"
                    }, l.createElement(N._2, {
                        display: this.state.walletLoaded ? N.N.Hide : N.N.Flex,
                        alignItems: N.c.Center,
                        justifyContent: N._1.Center
                    }, l.createElement("div", {
                        id: "recurly-amazon-pay__button"
                    })), l.createElement(N._2, {
                        display: this.state.walletLoaded ? N.N.Flex : N.N.Hide,
                        flexDirection: N.P.Column,
                        alignItems: N.c.Center,
                        justifyContent: N._1.Center
                    }, l.createElement("div", {
                        id: "recurly-amazon-pay__wallet",
                        className: "recurly-amazon-pay__wallet"
                    }), l.createElement(N._2, {
                        padding: {
                            top: 1
                        }
                    }, l.createElement(N.u, {
                        onClick: this.handleSubmit,
                        state: this.state.awaitingResponse ? N.y.Loading : N.y.Default,
                        disabled: this.state.awaitingResponse
                    }, this.props.submitButtonCopy)))) : l.createElement(N._4, null)
                }, t = s.__decorate([Object(_.d)("RecurlyAmazonPay")], t)
            }(l.Component)),
            S = n("NXs7"),
            C = n("0nzt"),
            P = n("l7ua"),
            w = (n("pDuT"), {
                light: "#000",
                dark: "#fff"
            }),
            F = {
                light: "#a49fad",
                dark: "#898395"
            },
            O = function() {
                return {
                    cvv: !1,
                    first_name: !1,
                    last_name: !1,
                    month: !1,
                    number: !1,
                    year: !1
                }
            },
            I = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        firstName: "",
                        lastName: "",
                        recurlyReady: !1,
                        awaitingResponse: !1,
                        errorMessage: "",
                        errorState: O()
                    }, t.handleSubmit = function() {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var e = this;
                            return s.__generator(this, function(t) {
                                return this.setState(function(e) {
                                    return {
                                        awaitingResponse: !0,
                                        errorState: s.__assign({}, e.errorState)
                                    }
                                }), window.recurly.token(this.form, function(t, n) {
                                    return s.__awaiter(e, void 0, void 0, function() {
                                        return s.__generator(this, function(e) {
                                            return t ? (this.handleValidationError(t), this.setState({
                                                awaitingResponse: !1
                                            })) : this.handleValidationSuccess(n), [2]
                                        })
                                    })
                                }), [2]
                            })
                        })
                    }, t.handleValidationSuccess = function(e) {
                        return s.__awaiter(t, void 0, void 0, function() {
                            return s.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), [4, this.props.onSuccess({
                                            payment_flow: a.RecurlyCreditCard,
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
                                                errorState: s.__assign({}, e.errorState)
                                            }
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.handleValidationError = function(e) {
                        if (e.code === P.a.Validation || e.code === P.a.InvalidParameter) {
                            var n = O();
                            e.fields && e.fields.forEach(function(e) {
                                n[e] = !0
                            }), t.setState({
                                errorMessage: Object(d.d)("We are sorry but your credit card payment could not be processed. Please correct the fields below.", "RecurlyCreditCard"),
                                errorState: n
                            })
                        } else e.code && t.setState({
                            errorMessage: Object(d.d)("The transaction was declined due to invalid data. Please make sure you have entered the correct information.", "RecurlyCreditCard"),
                            errorState: O()
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
                return s.__extends(t, e), t.prototype.componentWillMount = function() {
                    var e = this;
                    this.recurlyPollId = setInterval(function() {
                        window.recurly && (e.props.latencyTracking.reportInteractive(), clearInterval(e.recurlyPollId), e.setupConfigs(), e.pollForHostedField())
                    }, 500)
                }, t.prototype.componentWillUnmount = function() {
                    clearInterval(this.recurlyPollId), clearInterval(this.hostedFieldPollId)
                }, t.prototype.componentDidUpdate = function(e) {
                    window.recurly && this.props.darkModeEnabled !== e.darkModeEnabled && this.setupConfigs()
                }, t.prototype.render = function() {
                    var e = this;
                    return l.createElement(N._2, {
                        className: "recurly-credit-card",
                        fullWidth: !0
                    }, l.createElement(N._2, {
                        display: this.state.recurlyReady ? N.N.Hide : N.N.Block
                    }, l.createElement(N._4, {
                        fillContent: !0
                    })), l.createElement(N._2, {
                        display: this.state.recurlyReady ? N.N.Block : N.N.Hide
                    }, l.createElement("form", {
                        className: "recurly-form",
                        ref: function(t) {
                            return e.form = t
                        }
                    }, l.createElement(N._2, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(N.S, {
                        id: "recurly-name",
                        label: Object(d.d)("Name", "RecurlyCreditCard")
                    }, l.createElement("div", {
                        id: "recurly-name"
                    }, l.createElement(N.U, {
                        gutterSize: N.V.Medium
                    }, l.createElement(N.J, {
                        cols: 6
                    }, l.createElement(N.Y, {
                        id: "recurly-first-name",
                        type: N.Z.Text,
                        placeholder: Object(d.d)("First Name", "RecurlyCreditCard"),
                        value: this.state.firstName,
                        onChange: this.handleFirstName,
                        error: this.state.errorState.first_name
                    }), l.createElement("input", {
                        type: "hidden",
                        "data-recurly": "first_name",
                        value: this.state.firstName
                    })), l.createElement(N.J, {
                        cols: 6
                    }, l.createElement(N.Y, {
                        id: "recurly-last-name",
                        type: N.Z.Text,
                        placeholder: Object(d.d)("Last Name", "RecurlyCreditCard"),
                        value: this.state.lastName,
                        onChange: this.handleLastName,
                        error: this.state.errorState.last_name
                    }), l.createElement("input", {
                        type: "hidden",
                        "data-recurly": "last_name",
                        value: this.state.lastName
                    })))))), l.createElement(N._2, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(N.S, {
                        id: "recurly-credit-card",
                        label: Object(d.d)("Credit Card", "RecurlyCreditCard")
                    }, l.createElement("div", {
                        id: "recurly-credit-card"
                    }, l.createElement(N.U, {
                        gutterSize: N.V.Medium
                    }, l.createElement(N.J, {
                        cols: 8
                    }, l.createElement("div", {
                        id: "recurly-number",
                        "data-recurly": "number",
                        className: this.state.errorState.number ? "recurly-error" : ""
                    })), l.createElement(N.J, {
                        cols: 4
                    }, l.createElement("div", {
                        id: "recurly-cvv",
                        "data-recurly": "cvv",
                        className: this.state.errorState.cvv ? "recurly-error" : ""
                    })))))), l.createElement(N._2, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(N.S, {
                        id: "recurly-credit-card",
                        label: Object(d.d)("Expiration Date", "RecurlyCreditCard")
                    }, l.createElement("div", {
                        id: "recurly-credit-card"
                    }, l.createElement(N.U, {
                        gutterSize: N.V.Medium
                    }, l.createElement(N.J, {
                        cols: 6
                    }, l.createElement("div", {
                        id: "recurly-month",
                        "data-recurly": "month",
                        className: this.state.errorState.month ? "recurly-error" : ""
                    })), l.createElement(N.J, {
                        cols: 6
                    }, l.createElement("div", {
                        id: "recurly-year",
                        "data-recurly": "year",
                        className: this.state.errorState.year ? "recurly-error" : ""
                    })))))), l.createElement("input", {
                        type: "hidden",
                        name: "recurly-token",
                        "data-recurly": "token"
                    }), l.createElement(N.u, {
                        onClick: this.handleSubmit,
                        state: this.state.awaitingResponse ? N.y.Loading : N.y.Default,
                        disabled: this.state.awaitingResponse
                    }, this.props.submitButtonCopy))))
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
                                    fontColor: this.props.darkModeEnabled ? w.dark : w.light,
                                    placeholder: {
                                        color: this.props.darkModeEnabled ? F.dark : F.light
                                    }
                                }
                            },
                            number: {
                                selector: "#recurly-number",
                                style: {
                                    placeholder: {
                                        content: Object(d.d)("Card Number", "RecurlyCreditCard")
                                    }
                                }
                            },
                            month: {
                                selector: "#recurly-month",
                                style: {
                                    placeholder: {
                                        content: Object(d.d)("Month", "RecurlyCreditCard")
                                    }
                                }
                            },
                            year: {
                                selector: "#recurly-year",
                                style: {
                                    placeholder: {
                                        content: Object(d.d)("Year", "RecurlyCreditCard")
                                    }
                                }
                            },
                            cvv: {
                                selector: "#recurly-cvv",
                                style: {
                                    placeholder: {
                                        content: Object(d.d)("CVV", "RecurlyCreditCard")
                                    }
                                }
                            }
                        }
                    })
                }, t = s.__decorate([Object(_.d)("RecurlyCreditCard")], t)
            }(l.Component);
        var R, D = Object(y.b)(function(e) {
                return {
                    darkModeEnabled: Object(C.a)(e) === S.a.Dark
                }
            })(I),
            A = (n("t2Wb"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        paypalConfigured: !1,
                        awaitingResponse: !1,
                        hasError: !1
                    }, t.handleValidationSuccess = function(e) {
                        return s.__awaiter(t, void 0, void 0, function() {
                            return s.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), [4, this.props.onSuccess({
                                            payment_flow: a.RecurlyPaypal,
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
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    this.pollForRecurly = setInterval(function() {
                        window.recurly && (e.props.latencyTracking.reportInteractive(), clearInterval(e.pollForRecurly), e.setupConfigs(), e.setState({
                            paypalConfigured: !0
                        }))
                    }, 500)
                }, t.prototype.componentWillUnmount = function() {
                    clearInterval(this.pollForRecurly)
                }, t.prototype.render = function() {
                    return this.state.paypalConfigured ? l.createElement(N._2, {
                        className: "recurly-paypal",
                        display: N.N.Flex,
                        alignItems: N.c.Center,
                        justifyContent: N._1.Center,
                        margin: {
                            y: 2
                        }
                    }, l.createElement(N.u, {
                        onClick: this.handleClick,
                        state: this.state.awaitingResponse ? N.y.Loading : N.y.Default,
                        disabled: this.state.awaitingResponse
                    }, this.props.submitButtonCopy)) : l.createElement(N._2, {
                        margin: {
                            y: 2
                        }
                    }, l.createElement(N._4, null))
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
                }, t = s.__decorate([Object(_.d)("RecurlyPaypal")], t)
            }(l.Component)),
            j = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        xsollaLoaded: !1
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    this.iframe && this.iframe.addEventListener("load", function() {
                        e.props.latencyTracking.reportInteractive(), e.setState({
                            xsollaLoaded: !0
                        })
                    })
                }, t.prototype.render = function() {
                    var e = this;
                    return l.createElement(N._2, {
                        fullWidth: !0
                    }, !this.state.xsollaLoaded && l.createElement(N._4, {
                        fillContent: !0
                    }), l.createElement(N._2, {
                        fullWidth: !0,
                        display: this.state.xsollaLoaded ? N.N.Inline : N.N.Hide
                    }, l.createElement("iframe", {
                        ref: function(t) {
                            return e.iframe = t
                        },
                        id: "xsolla",
                        src: this.props.iframeURL,
                        width: "100%",
                        height: "650px"
                    })))
                }, t = s.__decorate([Object(_.d)("XsollaMoreMethods")], t)
            }(l.Component);
        n("7gLH");
        ! function(e) {
            e.ZUORA_PARENT_LAYOUT = "zuora-payment-method__zuora-parent-layout", e.UPDATE_PAYMENT_BUTTON = "zuora-payment-method__update-payment-button"
        }(R || (R = {}));
        var T, x = function(e) {
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
                                return l.createElement(N._2, {
                                    key: t,
                                    margin: {
                                        left: 2
                                    }
                                }, l.createElement(N._35, {
                                    color: N.I.Error
                                }, "• ", e))
                            });
                            return l.createElement("div", null, l.createElement(N._2, {
                                margin: {
                                    top: 1,
                                    left: 1,
                                    bottom: .5
                                }
                            }, l.createElement(N._35, {
                                color: N.I.Error
                            }, Object(d.d)("We are sorry but your credit card payment could not be processed. Please correct the fields below.", "ZuoraCreditCard"))), e)
                        }
                        if (t.state.errorMessage) return l.createElement(N._2, {
                            margin: {
                                top: 1,
                                left: 1
                            }
                        }, l.createElement(N._35, {
                            color: N.I.Error
                        }, t.state.errorMessage))
                    }, t.successCallback = function(e) {
                        return s.__awaiter(t, void 0, void 0, function() {
                            return s.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (!e.success) return [2];
                                        t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.props.onSuccess({
                                            payment_flow: a.ZuoraCreditCard,
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
                            errorMessage: Object(d.d)("You entered an invalid card number. Please update your card and try again.", "ZuoraCreditCard")
                        }) : t.setState({
                            errorMessage: Object(d.d)("We couldn't process your payment. Please try again.", "ZuoraCreditCard")
                        })
                    }, t.parseNullValueErrorMessage = function(e) {
                        var n = e.replace("[HostedPageFieldValidationError]&nbsp; ", "").replace(/\s/g, "").split(":NullValue,"),
                            i = {
                                creditCardHolderName: Object(d.d)("Name on Card", "ZuoraCreditCard"),
                                creditCardAddress1: Object(d.d)("Billing Address", "ZuoraCreditCard"),
                                creditCardCity: Object(d.d)("City", "ZuoraCreditCard"),
                                creditCardPostalCode: Object(d.d)("Zip Code", "ZuoraCreditCard")
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
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this;
                    if (document.querySelector("#zuora-script")) this.initZuoraIFrame();
                    else {
                        var t = document.createElement("script");
                        t.src = "https://static.zuora.com/Resources/libs/hosted/1.3.0/zuora-min.js", t.async = !0, t.id = "zuora-script", document.body.appendChild(t), t.onload = function() {
                            e.props.latencyTracking.reportInteractive(), e.initZuoraIFrame()
                        }
                    }
                }, t.prototype.render = function() {
                    return l.createElement("div", null, !this.state.zuoraConfigured && l.createElement(N._2, {
                        padding: {
                            y: 5
                        }
                    }, l.createElement(N._4, {
                        fillContent: !0
                    })), l.createElement(N._2, {
                        display: this.state.zuoraConfigured ? N.N.Block : N.N.Hide,
                        "data-test-selector": R.ZUORA_PARENT_LAYOUT
                    }, this.renderErrorMessage(), l.createElement("div", {
                        id: "zuora_payment",
                        className: this.state.awaitingResponse ? "zuora-disabled" : ""
                    }), l.createElement(N._2, {
                        margin: {
                            left: .5,
                            top: 2,
                            bottom: 1
                        }
                    }, l.createElement(N.u, {
                        onClick: this.handleSubmit,
                        state: this.state.awaitingResponse ? N.y.Loading : N.y.Default,
                        disabled: this.state.awaitingResponse,
                        "data-test-selector": R.UPDATE_PAYMENT_BUTTON
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
                }, t = s.__decorate([Object(_.d)("ZuoraCreditCard")], t)
            }(l.Component),
            L = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        selectedProvider: a.RecurlyCreditCard
                    }, t.submitButtonCopy = Object(d.d)("Complete Purchase", "PaymentMethods"), t.paymentProviders = [{
                        name: a.RecurlyCreditCard,
                        component: l.createElement(D, {
                            publicKey: t.props.configs.recurly.publicKey,
                            submitButtonCopy: t.submitButtonCopy,
                            onSuccess: t.props.onSuccess
                        })
                    }, {
                        name: a.RecurlyPaypal,
                        component: l.createElement(A, {
                            publicKey: t.props.configs.recurly.publicKey,
                            braintreeClientAuthorization: t.props.configs.recurly.braintreeClientAuthorization,
                            submitButtonCopy: t.submitButtonCopy,
                            onSuccess: t.props.onSuccess
                        })
                    }, {
                        name: a.RecurlyPayWithAmazon,
                        component: l.createElement(E, s.__assign({
                            submitButtonCopy: t.submitButtonCopy,
                            onSuccess: t.props.onSuccess
                        }, t.props.configs.recurly.payWithAmazonConfigs))
                    }, {
                        name: a.Xsolla,
                        component: l.createElement(j, s.__assign({}, t.props.configs.xsolla))
                    }, {
                        name: a.ZuoraCreditCard,
                        component: l.createElement(x, s.__assign({
                            submitButtonCopy: t.submitButtonCopy,
                            onSuccess: t.props.onSuccess
                        }, t.props.configs.zuora))
                    }], t.renderProvider = function(e) {
                        return l.createElement(N._2, {
                            key: e.name,
                            display: t.state.selectedProvider === e.name ? N.N.Inline : N.N.Hide
                        }, e.component)
                    }, t.setProviderFactory = function(e) {
                        return function() {
                            t.props.trackPaymentFormInteraction({
                                paymentFlow: t.state.selectedProvider,
                                action: o.RadioButtonClick,
                                actionDetail: t.state.selectedProvider
                            }), t.setState({
                                selectedProvider: e
                            })
                        }
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentWillMount = function() {
                    if (!document.querySelector("#recurly-script")) {
                        var e = document.createElement("script");
                        e.src = "https://js.recurly.com/v4/recurly.js", e.async = !0, e.id = "recurly-script", document.body.appendChild(e)
                    }
                }, t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return l.createElement(N._2, null, l.createElement(N.u, {
                        onClick: this.setProviderFactory(a.RecurlyCreditCard),
                        disabled: a.RecurlyCreditCard === this.state.selectedProvider
                    }, "RecurlyCreditCard"), l.createElement(N.u, {
                        onClick: this.setProviderFactory(a.RecurlyPaypal),
                        disabled: a.RecurlyPaypal === this.state.selectedProvider
                    }, "RecurlyPaypal"), l.createElement(N.u, {
                        onClick: this.setProviderFactory(a.RecurlyPayWithAmazon),
                        disabled: a.RecurlyPayWithAmazon === this.state.selectedProvider
                    }, "RecurlyPayWithAmazon"), l.createElement(N.u, {
                        onClick: this.setProviderFactory(a.Xsolla),
                        disabled: a.Xsolla === this.state.selectedProvider
                    }, "Xsolla"), l.createElement(N.u, {
                        onClick: this.setProviderFactory(a.ZuoraCreditCard),
                        disabled: a.ZuoraCreditCard === this.state.selectedProvider
                    }, "ZuoraCreditCard"), this.paymentProviders.map(this.renderProvider))
                }, t = s.__decorate([Object(_.d)("PaymentMethods")], t)
            }(l.Component),
            M = n("3T7g"),
            U = n("7LIQ"),
            B = n("Tzcg"),
            z = (n("2dVl"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderPrice = function() {
                        switch (t.props.product.interval.unit) {
                            case T.OneTime:
                                Object(d.d)("One Time", "TicketDescription");
                                break;
                            case T.Year:
                                Object(d.d)("Year", "TicketDescription");
                                break;
                            case T.Month:
                            default:
                                Object(d.d)("Month", "TicketDescription")
                        }
                        return l.createElement(N._35, {
                            type: N._40.H4
                        }, Object(d.d)("{price} / {interval}", {
                            price: l.createElement(N._35, {
                                type: N._40.Span,
                                bold: !0
                            }, t.props.product.price),
                            interval: "Month"
                        }, "TicketDescription"))
                    }, t.renderSubBadges = function() {
                        if (t.props.owner) {
                            var e = t.props.owner.broadcastBadges.filter(function(e) {
                                return "subscriber" === e.setID
                            }).sort(function(e, t) {
                                return parseInt(e.version, 10) < parseInt(t.version, 10) ? -1 : 1
                            });
                            if (e.length) {
                                var n = e.map(function(e) {
                                    return l.createElement(N._2, {
                                        key: e.setID + "/" + e.version,
                                        margin: .5
                                    }, l.createElement(M.a, {
                                        badge: e
                                    }))
                                });
                                return l.createElement(l.Fragment, null, l.createElement(N._35, {
                                    className: "ticket-description__description__line-item"
                                }, "Subscriber Badges:"), l.createElement(N._2, {
                                    display: N.N.Flex,
                                    flexWrap: N.Q.Wrap,
                                    justifyContent: N._1.Center
                                }, n))
                            }
                        }
                    }, t.renderSubEmotes = function() {
                        if (t.props.owner) {
                            var e = t.props.owner.subscriptionProducts.filter(function(e) {
                                return (e.tier || "") <= (t.props.product.tier || "")
                            }).map(function(e) {
                                return e.emotes
                            }).reduce(function(e, t) {
                                return e.concat(t)
                            }, []);
                            if (0 !== e.length) return l.createElement("div", null, l.createElement(N._35, {
                                className: "ticket-description__description__line-item"
                            }, e.length, " Subscriber Emotes:"), l.createElement(U.a, {
                                emoteSet: {
                                    id: "",
                                    emotes: Object(B.b)(e)
                                },
                                onClickEmote: void 0,
                                locked: !1
                            }))
                        }
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.product,
                        t = this.props.owner;
                    return t ? l.createElement(N._2, {
                        className: "ticket-description"
                    }, l.createElement(N.A, {
                        border: !0,
                        elevation: 1
                    }, l.createElement("div", {
                        className: "ticket-description__banner-image",
                        style: {
                            backgroundImage: "url(" + t.bannerImageURL
                        }
                    }, l.createElement(N._2, {
                        className: "ticket-description__broadcaster-info",
                        textAlign: N._36.Center,
                        display: N.N.Flex,
                        flexDirection: N.P.Column,
                        alignItems: N.c.Center,
                        flexWrap: N.Q.NoWrap,
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
                    }, l.createElement(N.W, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 2
                        }
                    }, l.createElement(N.l, {
                        alt: t.displayName,
                        size: 96,
                        src: t.profileImageURL
                    })), l.createElement(N.W, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 1
                        }
                    }, l.createElement(N._35, {
                        type: N._40.H4,
                        bold: !0,
                        color: N.I.Overlay
                    }, t.displayName)), l.createElement(N._2, {
                        margin: 1,
                        breakpointLarge: {
                            margin: 2
                        }
                    }, l.createElement(N._35, {
                        type: N._40.H5,
                        color: N.I.Overlay
                    }, e.displayName)))), l.createElement(N.B, null, l.createElement(N._25, {
                        borderBottom: !0,
                        textAlign: N._36.Center,
                        background: N.m.Alt,
                        padding: 2
                    }, this.renderPrice()), l.createElement(N._25, {
                        className: "ticket-description__description",
                        padding: {
                            x: 1,
                            bottom: 2
                        },
                        textAlign: N._36.Left,
                        background: N.m.Alt
                    }, l.createElement(N.X, {
                        padding: {
                            y: 1
                        }
                    }, l.createElement(N._35, {
                        className: "ticket-description__description__line-item",
                        bold: !0
                    }, Object(d.d)("Subscription benefits", "TicketDescription"))), l.createElement(N._35, {
                        className: "ticket-description__description__line-item"
                    }, Object(d.d)("Directly support the broadcaster", "TicketDescription")), e.hasAdFree && l.createElement(N._35, {
                        className: "ticket-description__description__line-item"
                    }, Object(d.d)("Ad-free (with limited exceptions)", "TicketDescription")), l.createElement(N._35, {
                        className: "ticket-description__description__line-item"
                    }, Object(d.d)("Chat during subscriber-only mode", "TicketDescription")), e.hasFastChat && l.createElement(N._35, {
                        className: "ticket-description__description__line-item"
                    }, Object(d.d)("Not affected by chat slow mode", "TicketDescription")), e.hasSubonlyVideoArchive && l.createElement(N._35, {
                        className: "ticket-description__description__line-item"
                    }, Object(d.d)("Access to VODs", "TicketDescription")), this.renderSubBadges(), this.renderSubEmotes())))) : l.createElement("div", null)
                }, t = s.__decorate([Object(_.d)("TicketDescription")], t)
            }(l.Component)),
            G = n("Heyg"),
            V = function(e) {
                var t;
                return t = e.canGift ? l.createElement(N._35, null, Object(d.d)("You are buying a single month {price} Gift Subscription for <x:strong>{recipientName}</x:strong>.", {
                    price: e.price,
                    "x:strong": function(e) {
                        return l.createElement(N._35, {
                            type: N._40.Span,
                            bold: !0
                        }, e)
                    },
                    recipientName: e.recipientDisplayName || ""
                }, "PurchaseSubInfo")) : l.createElement(N._35, {
                    color: N.I.Error
                }, Object(d.d)("Sorry, a Gift Subscription to this channel is not available for <x:strong>{recipientName}</x:strong>", {
                    recipientName: e.recipientDisplayName || "",
                    "x:strong": function(e) {
                        return l.createElement(N._35, {
                            bold: !0
                        }, e)
                    }
                }, "PurchaseSubInfo")), l.createElement("div", null, l.createElement(N._35, {
                    type: N._40.H2,
                    bold: !0
                }, Object(d.d)("Gift A Subscription", "PurchaseSubInfo")), t)
            },
            W = n("CIox"),
            H = (n("pOYM"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.goBackToChannel = function() {
                        (window.opener || window.top !== window.self) && (parent.window.close(), window.close()), t.props.history.push("/" + t.props.productOwnerLogin)
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(N._2, {
                        className: "gift-sub-receipt__container",
                        padding: {
                            y: 2
                        },
                        margin: {
                            x: 2
                        }
                    }, l.createElement(N._2, null, l.createElement(N._35, {
                        type: N._40.H2,
                        bold: !0
                    }, Object(d.d)("Purchase Successful", "GiftSubReceipt"))), l.createElement(N._2, {
                        padding: {
                            y: 3
                        }
                    }, l.createElement(N._35, null, Object(d.d)("You have purchased a {price} Gift Subscription for <x:strong>{recipientDisplayName}</x:strong>", {
                        price: Object(d.e)(this.props.invoicePrice / 100, {
                            style: "currency",
                            currency: this.props.invoiceCurrency
                        }),
                        recipientDisplayName: this.props.recipientDisplayName || "",
                        "x:strong": function(e) {
                            return l.createElement(N._35, {
                                key: "recipient-display-name",
                                type: N._40.Span,
                                bold: !0
                            }, e)
                        }
                    }, "GiftSubReceipt"))), l.createElement(N._25, {
                        borderTop: !0,
                        borderBottom: !0,
                        padding: {
                            y: 3
                        }
                    }, l.createElement(N._2, {
                        className: "gift-sub-receipt__label",
                        display: N.N.InlineBlock
                    }, l.createElement(N._35, {
                        bold: !0
                    }, Object(d.d)("Gift Status", "GiftSubReceipt"))), l.createElement(N._2, {
                        display: N.N.InlineBlock
                    }, l.createElement(N._35, null, Object(d.d)("Active", "GiftSubReceipt")))), l.createElement(N._25, {
                        borderBottom: !0,
                        padding: {
                            y: 3
                        }
                    }, l.createElement(N._2, {
                        className: "gift-sub-receipt__label",
                        display: N.N.InlineBlock
                    }, l.createElement(N._35, {
                        bold: !0
                    }, Object(d.d)("Your Invoice Total", "GiftSubReceipt"))), l.createElement(N._2, {
                        display: N.N.InlineBlock
                    }, l.createElement(N._35, null, Object(d.e)(this.props.invoicePrice / 100, {
                        style: "currency",
                        currency: this.props.invoiceCurrency
                    })))), l.createElement(N._2, {
                        margin: {
                            y: 3
                        }
                    }, l.createElement(N.u, {
                        onClick: this.goBackToChannel
                    }, Object(d.d)("Go back to {displayName}", {
                        displayName: this.props.productOwnerDisplayName
                    }, "GiftSubReceipt"))))
                }, t
            }(l.Component)),
            Y = Object(W.e)(H),
            Z = n("j6Ui"),
            K = function(e) {
                return l.createElement(N._25, {
                    background: N.m.Base,
                    borderMarked: !0,
                    padding: 1,
                    margin: {
                        y: 1
                    }
                }, l.createElement(N._2, {
                    margin: {
                        bottom: .5
                    }
                }, l.createElement(N._35, null, Object(d.d)("You are currently subscribed for free with Twitch Prime. If you choose to upgrade to the {newPrice} subscription, you will be immediately billed for {newPrice} and your new subscription will auto-renew every month.", {
                    newPrice: Object(d.e)(e.newPrice / 100, {
                        style: "currency",
                        currency: e.newCurrency
                    })
                }, "UpgradePrimeWarning"))), l.createElement(N._2, {
                    margin: {
                        bottom: .5
                    }
                }, l.createElement(N._35, null, Object(d.d)("You'll be able to subscribe to another channel for free with Twitch Prime 30-days after you last used your free subscription.", "UpgradePrimeWarning"))), l.createElement(N._35, null, Object(d.d)("If you upgrade your subscription, your sub anniversary, sub streaks, and badge tenure will be maintained.", "UpgradePrimeWarning")))
            },
            q = function(e) {
                return l.createElement(N._25, {
                    background: N.m.Base,
                    borderMarked: !0,
                    padding: 1,
                    margin: {
                        y: 1
                    }
                }, l.createElement(N._2, {
                    margin: {
                        bottom: .5
                    }
                }, l.createElement(N._35, null, Object(d.d)("You are currently subscribed to the {originalPrice} subscription plan. If you choose to upgrade to the {newPrice} subscription plan, you will be immediately billed for {newPrice} and your currently active subscription plan for {originalPrice} will not renew any further.", {
                    originalPrice: Object(d.e)(e.originalPrice / 100, {
                        style: "currency",
                        currency: e.originalCurrency
                    }),
                    newPrice: Object(d.e)(e.newPrice / 100, {
                        style: "currency",
                        currency: e.newCurrency
                    })
                }, "UpgradeTierWarning"))), l.createElement(N._2, {
                    margin: {
                        bottom: .5
                    }
                }, l.createElement(N._35, null, Object(d.d)("Please note that pro-rated refunds cannot be offered for the remaining time on your {originalPrice} subscription plan", {
                    originalPrice: Object(d.e)(e.originalPrice / 100, {
                        style: "currency",
                        currency: e.originalCurrency
                    })
                }, "UpgradeTierWarning"))), l.createElement(N._35, null, Object(d.d)("If you upgrade your subscription, your sub anniversary, sub streaks, and badge tenure will be maintained.", "UpgradeTierWarning")))
            },
            Q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderOneMonthFree = function() {
                        var e = new Date;
                        null !== t.props.endsAt && (e = Object(Z.c)(t.props.endsAt));
                        var n = new Date(e);
                        return n.setMonth(e.getMonth() + 1), l.createElement(N._25, {
                            background: N.m.Base,
                            borderMarked: !0,
                            padding: 1,
                            margin: {
                                y: 1
                            }
                        }, l.createElement(N._35, null, Object(d.d)("Your next month is on us. You will be charged when your free month ends on <x:strong>{date}</x:strong>.", {
                            date: Object(d.c)(n, "short"),
                            "x:strong": function(e) {
                                return l.createElement(N._35, {
                                    type: N._40.Span,
                                    bold: !0
                                }, e)
                            }
                        }, "PersonalSubPurchaseInfo")))
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    return l.createElement("div", null, l.createElement(N._2, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(N._35, {
                        type: N._40.H2,
                        bold: !0
                    }, Object(d.d)("Start Your Subscription", "PersonalSubPurchaseInfo"))), this.props.isOneMonthFreeEligible && this.renderOneMonthFree(), this.tierUpgrade && l.createElement(q, {
                        originalPrice: this.originalPrice,
                        originalCurrency: "USD",
                        newPrice: this.newPrice,
                        newCurrency: "USD"
                    }), this.primeUpgrade && l.createElement(K, {
                        newPrice: this.newPrice,
                        newCurrency: "USD"
                    }), this.props.hasGift && this.props.endsAt && l.createElement(N._25, {
                        background: N.m.Base,
                        borderMarked: !0,
                        padding: 1,
                        margin: {
                            y: 1
                        }
                    }, l.createElement(N._35, null, Object(d.d)("You will be charged when your Gift Subscription ends on <x:strong>{date}</x:strong>.", {
                        date: Object(d.c)(Object(Z.c)(this.props.endsAt), "short"),
                        "x:strong": function(e) {
                            return l.createElement(N._35, {
                                type: N._40.Span,
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
            }(l.Component),
            J = (n("McJK"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.goBackToChannel = function() {
                        (window.opener || window.top !== window.self) && (parent.window.close(), window.close()), t.props.history.push("/" + t.props.productOwnerLogin)
                    }, t
                }
                return s.__extends(t, e), t.prototype.render = function() {
                    var e;
                    return e = this.props.giftSubEndsAt ? Object(d.d)("Your paid subscription will begin on <x:strong>{endsAt}</x:strong> after your Gift Subscription ends", {
                        "x:strong": function(e) {
                            return l.createElement(N._35, {
                                type: N._40.Span,
                                bold: !0
                            }, e)
                        },
                        endsAt: Object(d.c)(new Date(this.props.giftSubEndsAt), "long")
                    }, "PersonalSubReceipt") : Object(d.d)("Active", "PersonalSubReceipt"), l.createElement(N._2, {
                        className: "personal-sub-receipt",
                        padding: {
                            y: 2
                        },
                        margin: {
                            x: 2
                        }
                    }, l.createElement(N._25, {
                        borderBottom: !0,
                        padding: {
                            bottom: 3
                        }
                    }, l.createElement(N._35, {
                        type: N._40.H2,
                        bold: !0
                    }, Object(d.d)("Your Subscription", "PersonalSubReceipt"))), l.createElement(N._25, {
                        borderBottom: !0,
                        padding: {
                            y: 3
                        }
                    }, l.createElement(N._2, {
                        className: "personal-sub-receipt__label",
                        display: N.N.InlineBlock
                    }, l.createElement(N._35, {
                        bold: !0
                    }, Object(d.d)("Subscription for", "PersonalSubReceipt"))), l.createElement(N._2, {
                        display: N.N.InlineBlock
                    }, l.createElement(N._35, null, this.props.purchaserDisplayName))), l.createElement(N._25, {
                        borderBottom: !0,
                        padding: {
                            y: 3
                        }
                    }, l.createElement(N._2, {
                        className: "personal-sub-receipt__label",
                        display: N.N.InlineBlock
                    }, l.createElement(N._35, {
                        bold: !0
                    }, Object(d.d)("Status", "PersonalSubReceipt"))), l.createElement(N._2, {
                        display: N.N.InlineBlock
                    }, l.createElement(N._35, null, e))), l.createElement(N._25, {
                        borderBottom: !0,
                        padding: {
                            y: 3
                        }
                    }, l.createElement(N._2, {
                        className: "personal-sub-receipt__label",
                        display: N.N.InlineBlock
                    }, l.createElement(N._35, {
                        bold: !0
                    }, Object(d.d)("Invoice Total", "PersonalSubReceipt"))), l.createElement(N._2, {
                        display: N.N.InlineBlock
                    }, l.createElement(N._35, null, Object(d.e)(this.props.invoicePrice / 100, {
                        style: "currency",
                        currency: this.props.invoiceCurrency
                    })))), l.createElement(N._2, {
                        margin: {
                            y: 3
                        }
                    }, l.createElement(N.u, {
                        onClick: this.goBackToChannel
                    }, Object(d.d)("Go back to {displayName}", {
                        displayName: this.props.productOwnerDisplayName
                    }, "PersonalSubReceipt"))))
                }, t
            }(l.Component)),
            $ = Object(W.e)(J);
        n("gKy9");
        ! function(e) {
            e.Week = "WEEK", e.Month = "MONTH", e.Year = "YEAR", e.OneTime = "ONE_TIME"
        }(T || (T = {}));
        var X = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    giftSubPurchased: !1
                }, t.trackPaymentFormInteraction = function(e) {
                    var n, i, a = {
                        channelLogin: t.props.data.subscriptionProduct.owner.login,
                        channelId: t.props.data.subscriptionProduct.owner.id,
                        paymentType: t.props.isGift ? r.Gifting : r.Personal,
                        productId: t.props.data.subscriptionProduct.id,
                        ticketPrice: t.props.data.subscriptionProduct.price,
                        paymentFlow: e.paymentFlow,
                        action: e.action,
                        actionDetail: e.actionDetail || ""
                    };
                    i = {
                        channel: (n = a).channelLogin,
                        channel_id: n.channelId,
                        payment_type: n.paymentType,
                        payment_flow: n.paymentFlow,
                        action: n.action,
                        action_detail: n.actionDetail,
                        product_id: n.productId,
                        ticket_price: n.ticketPrice.replace(/[\$\.]/g, "")
                    }, d.n.track(g.SpadeEventType.PaymentFormInteraction, i)
                }, t.completePurchase = function(e) {
                    return s.__awaiter(t, void 0, void 0, function() {
                        var t;
                        return s.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    t = "/kraken/checkout/users/" + this.props.data.currentUser.id + "/products/" + this.props.productShortName + "/purchase/complete", n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, k.a.post(t, {
                                        body: e
                                    }, {
                                        version: 5
                                    })];
                                case 2:
                                    return n.sent().error ? (this.trackPaymentFormInteraction({
                                        paymentFlow: e.payment_flow,
                                        action: o.CompletePurchaseClick,
                                        actionDetail: i.Failed
                                    }), [2]) : (this.trackPaymentFormInteraction({
                                        paymentFlow: e.payment_flow,
                                        action: o.CompletePurchaseClick,
                                        actionDetail: i.Success
                                    }), this.props.isGift ? this.setState({
                                        giftSubPurchased: !0
                                    }) : this.props.data.refetch(), [3, 4]);
                                case 3:
                                    return n.sent(), this.trackPaymentFormInteraction({
                                        paymentFlow: e.payment_flow,
                                        action: o.CompletePurchaseClick,
                                        actionDetail: i.Failed
                                    }), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.renderPurchaseInfo = function() {
                    if (!t.purchased) {
                        if (t.props.isGift) return l.createElement(V, {
                            canGift: t.props.data.subscriptionProduct.self.checkoutConfigs.canGift,
                            recipientDisplayName: t.props.recipientDisplayName,
                            price: t.props.data.subscriptionProduct.price
                        });
                        var e = t.props.data.subscriptionProduct.self.benefit;
                        return l.createElement(Q, {
                            price: t.props.data.subscriptionProduct.price,
                            hasGift: e && e.gift.isGift,
                            purchase: t.props.data.subscriptionProduct.self.purchase,
                            isOneMonthFreeEligible: t.props.data.subscriptionProduct.self.checkoutConfigs.isOneMonthFreeEligible,
                            endsAt: e && e.endsAt
                        })
                    }
                }, t.renderReceipt = function() {
                    var e = t.props.data.subscriptionProduct.self.benefit,
                        n = t.props.data.subscriptionProduct.self.purchase.details;
                    return n && t.state.giftSubPurchased ? l.createElement(Y, {
                        recipientDisplayName: t.props.recipientDisplayName,
                        productOwnerDisplayName: t.props.data.subscriptionProduct.owner.displayName,
                        productOwnerLogin: t.props.data.subscriptionProduct.owner.login,
                        invoicePrice: n.price,
                        invoiceCurrency: "USD"
                    }) : n && t.purchased ? l.createElement($, {
                        purchaserDisplayName: t.props.data.currentUser.displayName,
                        productOwnerDisplayName: t.props.data.subscriptionProduct.owner.displayName,
                        productOwnerLogin: t.props.data.subscriptionProduct.owner.login,
                        giftSubEndsAt: e && (e.gift.isGift || null) && e.endsAt,
                        invoicePrice: n.price,
                        invoiceCurrency: "USD"
                    }) : void 0
                }, t
            }
            return s.__extends(t, e), t.prototype.componentDidMount = function() {
                this.props.latencyTracking.reportInteractive()
            }, t.prototype.render = function() {
                if (this.props.data.loading || this.props.data.error) return l.createElement(N._2, null);
                var e = this.props.data.subscriptionProduct.owner,
                    t = this.props.data.subscriptionProduct,
                    n = this.props.data.subscriptionProduct.self.checkoutConfigs.paymentProviderConfigs;
                return l.createElement(N._2, {
                    className: "checkout-payments",
                    padding: 3,
                    overflow: N._5.Auto
                }, l.createElement(N._2, {
                    display: N.N.Flex,
                    justifyContent: N._1.Center,
                    flexWrap: N.Q.Wrap
                }, l.createElement(N._2, {
                    display: N.N.Flex,
                    alignItems: N.c.Center,
                    margin: {
                        bottom: 4
                    }
                }, l.createElement(z, {
                    owner: e,
                    product: t
                })), l.createElement(N._2, {
                    className: "checkout-payments__content",
                    margin: {
                        x: 4
                    }
                }, this.purchased && this.renderReceipt(), !this.purchased && l.createElement(l.Fragment, null, this.renderPurchaseInfo(), l.createElement(L, {
                    onSuccess: this.completePurchase,
                    configs: n,
                    trackPaymentFormInteraction: this.trackPaymentFormInteraction
                })))))
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
            }), t = s.__decorate([Object(_.d)("CheckoutPayments"), Object(u.a)(G, {
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
        }(l.Component);
        var ee = Object(y.b)(function(e) {
                return {
                    isLoggedIn: Object(b.d)(e)
                }
            }, function(e) {
                return Object(h.b)({
                    promptLogin: function() {
                        return Object(v.f)(f.a.DashboardPage)
                    }
                }, e)
            })(X),
            te = n("TP6L"),
            ne = n("EaWz"),
            ie = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t
                }
                return s.__extends(t, e), t.prototype.componentWillMount = function() {
                    return s.__awaiter(this, void 0, void 0, function() {
                        return s.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, d.o.experiments.getAssignment("TWILIGHT_SUB_CHECKOUT")];
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
                    return l.createElement(N._2, {
                        display: N.N.Flex,
                        flexDirection: N.P.Column,
                        flexWrap: N.Q.NoWrap,
                        position: N._9.Relative,
                        fullHeight: !0
                    }, l.createElement(te.a, null), l.createElement(N._2, {
                        display: N.N.Flex,
                        flexWrap: N.Q.NoWrap,
                        position: N._9.Relative,
                        fullHeight: !0
                    }, l.createElement(ee, {
                        productShortName: e,
                        isGift: !(!t || !t.id),
                        recipientID: t && t.id,
                        recipientDisplayName: t && t.displayName
                    })))
                }, t = s.__decorate([Object(_.d)("SubsCheckoutPage", {
                    destination: m.a.SubsCheckoutPage
                }), Object(p.a)({
                    location: g.PageviewLocation.SubsCheckoutPage
                }), Object(u.a)(ne, {
                    options: function(e) {
                        return {
                            fetchPolicy: "cache-first",
                            variables: {
                                recipientName: c.parse(e.location.search).recipient || ""
                            }
                        }
                    }
                })], t)
            }(l.Component);
        n.d(t, "SubsCheckoutPage", function() {
            return ie
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
        var i = n("GiK3"),
            r = (n.n(i), n("mbxv")),
            a = function(e) {
                var t, n = e.badgesToRender,
                    a = e.badgeSets,
                    o = [];
                t = n, Array.isArray(t) ? o = n.map(function(e) {
                    var t = a.getBadge(e.setID, e.version);
                    return null === t ? null : i.createElement(r.a, {
                        key: t.setID + "/" + t.version,
                        badge: t
                    })
                }) : function(e) {
                    return !Array.isArray(e)
                }(n) && (o = Object.keys(n).map(function(e) {
                    var t = n[e],
                        o = a.getBadge(e, t);
                    return null === o ? null : i.createElement(r.a, {
                        key: o.setID + "/" + o.version,
                        badge: o
                    })
                }));
                var s = o.filter(function(e) {
                    return null !== e
                });
                return i.createElement("span", null, s)
            }
    },
    aMOL: function(e, t) {},
    gKy9: function(e, t) {},
    j6Ui: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        }), t.b = function(e, t) {
            return Object(i.format)(e, t)
        }, t.c = function(e) {
            return Object(i.parse)(e)
        }, t.d = function(e, t) {
            var n = e.split(":");
            if (2 !== n.length) throw new Error("invalid time string: " + e);
            var i = parseInt(n[0], 10),
                r = parseInt(n[1].substring(0, 2), 10),
                a = n[1].substring(n[1].length - 2);
            12 === i && "am" === a && (i = 0);
            "pm" === a && i < 12 && (i += 12);
            if (isNaN(i) || i < 0 || i > 23 || isNaN(r) || r < 0 || r > 59) throw new Error("invalid time string: " + e);
            var o = t || new Date;
            return o.setHours(i, r), o
        };
        var i = n("wuJz"),
            r = (n.n(i), {
                RFC3399: "YYYY-MM-DDTHH:mm:ssZ",
                timeString: "h:mma"
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
            o = n("Odds"),
            s = (n("2IkU"), n("6sO2")),
            c = n("vH/s"),
            l = function(e) {
                var t = Date.now() / 1e3;
                e.badge_type = e.badge_type.toLowerCase().replace(/( |\s)/g, "_"), s.o.tracking.track(c.SpadeEventType.ChatBadgeClick, Object.assign({
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
            return i.__extends(t, e), t.prototype.render = function() {
                var e = this.props.badge,
                    t = e.title,
                    n = e.image1x,
                    i = e.image2x,
                    a = e.image4x,
                    s = r.createElement("img", {
                        alt: t,
                        className: "chat-badge",
                        src: n,
                        srcSet: n + " 1x, " + i + " 2x, " + a + " 4x",
                        onMouseOver: this.onMouseOver,
                        onMouseOut: this.onMouseOut
                    });
                return this.targetURL = this.getTargetURL(), "" !== this.targetURL && (s = r.createElement("a", {
                    href: this.targetURL,
                    onClick: this.onBadgeClickHandler,
                    target: "_blank",
                    "data-a-target": "chat-badge"
                }, s)), this.state.isHovering ? r.createElement(o._43, {
                    align: o._44.Left,
                    "data-a-target": "chat-badge",
                    display: o.N.Inline,
                    key: n,
                    label: t,
                    offsetY: "0.9rem"
                }, s) : s
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
    pOYM: function(e, t) {},
    t2Wb: function(e, t) {}
});
//# sourceMappingURL=pages.subs-checkout.components.subs-checkout-page-b9d5756c85ffa7342bcaf8971d9013e4.js.map