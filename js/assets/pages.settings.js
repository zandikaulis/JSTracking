webpackJsonp([46], {
    "+Aaf": function(e, t) {},
    "0H+u": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "UserImageUploader"
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
                                    value: "offlineImageURL"
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
                end: 108
            }
        };
        n.loc.source = {
            body: "query UserImageUploader($login: String!) {\nuser(login: $login) {\nid\nlogin\nbannerImageURL\nofflineImageURL\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "1f5k": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PlatformNotificationSettings_User"
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
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "notificationSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "category"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "platforms"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "platformName"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "settingState"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isEnabled"
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
                end: 158
            }
        };
        n.loc.source = {
            body: "query PlatformNotificationSettings_User {\ncurrentUser {\nid\ndisplayName\nnotificationSettings {\ncategory\nplatforms {\nplatformName\nsettingState\nisEnabled\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "3fb4": function(e, t) {},
    "4Q9N": function(e, t, n) {
        "use strict";
        var i;
        n.d(t, "a", function() {
                return i
            }),
            function(e) {
                e.ProfileImage = "profile_image", e.ProfileBanner = "profile_banner", e.ChannelOfflineImage = "channel_offline_image"
            }(i || (i = {}))
    },
    "6T7P": function(e, t, n) {
        e.exports = n.p + "assets/fallback-avatar-c3e7f53e20817a5c44b2b821729da1ee.png"
    },
    "8+dp": function(e, t) {},
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
                        var r, a, o, s;
                        return i.__generator(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), r = t.headers ? t.headers["Content-Type"] : void 0, a = this.serialize(t.body, r), o = i.__assign({}, t, {
                                        body: a
                                    }), [4, this._fetch(e, o)];
                                case 1:
                                    return s = c.sent(), [4, this.constructLegacyAPIResponse(s)];
                                case 2:
                                    return [2, c.sent()]
                            }
                        })
                    })
                }, e.requestOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        var r, a;
                        return i.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return o.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                case 1:
                                    if ((r = o.sent()).error || r.requestError) throw new Error("Error while making request");
                                    return a = i.__assign({}, r, {
                                        body: r.body
                                    }), [2, Promise.resolve(a)];
                                case 2:
                                    throw o.sent();
                                case 3:
                                    return [2]
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
                    var o = Object(a.c)(n);
                    return o && (i.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (i["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        i[e] && delete i[e]
                    }), i
                }, e.logger = r.o.logger.withCategory("legacy-api"), e
            }()
    },
    AL3x: function(e, t) {},
    AQCV: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "GlobalNotificationSettings_SetChannelGlobalIsEnabled"
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
                                value: "FollowUserInput"
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
                            value: "followUser"
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
                                    value: "follow"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "disableNotifications"
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
                end: 153
            }
        };
        n.loc.source = {
            body: "mutation GlobalNotificationSettings_SetChannelGlobalIsEnabled($input: FollowUserInput!) {\nfollowUser(input: $input) {\nfollow {\ndisableNotifications\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "AQc/": function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            r = n("Odds");

        function a(e) {
            var t = null;
            return e.description && (t = i.createElement(r._7, {
                margin: {
                    top: 1
                }
            }, i.createElement(r.P, {
                color: r.J.Alt2
            }, e.description))), i.createElement(r._7, {
                margin: {
                    y: 2
                }
            }, i.createElement(r.P, {
                type: r._44.H3,
                fontSize: r.U.Size2
            }, e.title), t)
        }
        n.d(t, "a", function() {
            return a
        })
    },
    CePw: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BlockGiftedSubsSetting"
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
                                    value: "subscriptionSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "giftsToFollowedChannelsOnly"
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
                end: 104
            }
        };
        n.loc.source = {
            body: "query BlockGiftedSubsSetting {\ncurrentUser {\nid\nsubscriptionSettings {\ngiftsToFollowedChannelsOnly\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "CkX/": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SettingsTabs_User"
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
                                    value: "hasTurbo"
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 92
            }
        };
        n.loc.source = {
            body: "query SettingsTabs_User {\ncurrentUser {\nid\nhasTurbo\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    D2cp: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_ChannelVideo_ChatDelayRadioButtons"
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
                                    value: "chatSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "chatDelayMs"
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
                end: 101
            }
        };
        n.loc.source = {
            body: "query Settings_ChannelVideo_ChatDelayRadioButtons {\ncurrentUser {\nid\nchatSettings {\nchatDelayMs\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "DT0+": function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            r = n("wqO5");
        if (void 0 === i) throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");
        var a = (new i.Component).updater;
        e.exports = r(i.Component, i.isValidElement, a)
    },
    EQRc: function(e, t) {},
    EaRL: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "AdvancedNotificationSettings_User"
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
                                    value: "follows"
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
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "totalCount"
                                        },
                                        arguments: [],
                                        directives: []
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
                                                                value: "70"
                                                            }
                                                        }],
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
                                                            value: "followers"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "totalCount"
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
                                                    value: "notificationSettings"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isEnabled"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 303
            }
        };
        n.loc.source = {
            body: "query AdvancedNotificationSettings_User($limit: Int $cursor: Cursor) {\ncurrentUser {\nid\nfollows(first: $limit after: $cursor) {\ntotalCount\nedges {\ncursor\nnode {\nid\ndisplayName\nprofileImageURL(width: 70)\nlogin\nfollowers {\ntotalCount\n}\n}\nnotificationSettings {\nisEnabled\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    FsFC: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = s(e);
            return t.months ? a(i.MONTH, t.months) : t.weeks && t.days ? a(i.WEEK, t.weeks) + " " + a(i.DAY, t.days) : t.weeks ? a(i.WEEK, t.weeks) : t.days && t.hours ? a(i.DAY, t.days) + " " + a(i.HOUR, t.hours) : t.days ? a(i.DAY, t.days) : t.hours && t.minutes ? a(i.HOUR, t.hours) + " " + a(i.MINUTE, t.minutes) : t.hours ? a(i.HOUR, t.hours) : t.minutes && t.seconds ? a(i.MINUTE, t.minutes) + " " + a(i.SECOND, t.seconds) : t.minutes ? a(i.MINUTE, t.minutes) : a(i.SECOND, t.seconds || 0)
        }, t.b = function(e) {
            var t = s(e);
            return t.months ? o(i.MONTH, t.months) : t.weeks && t.days ? "" + o(i.WEEK, t.weeks) + o(i.DAY, t.days) : t.weeks ? o(i.WEEK, t.weeks) : t.days && t.hours ? "" + o(i.DAY, t.days) + o(i.HOUR, t.hours) : t.days ? o(i.DAY, t.days) : t.hours && t.minutes ? "" + o(i.HOUR, t.hours) + o(i.MINUTE, t.minutes) : t.hours ? o(i.HOUR, t.hours) : t.minutes && t.seconds ? "" + o(i.MINUTE, t.minutes) + o(i.SECOND, t.seconds) : t.minutes ? o(i.MINUTE, t.minutes) : o(i.SECOND, t.seconds || 0)
        };
        var i, r = n("6sO2");

        function a(e, t) {
            switch (e) {
                case i.SECOND:
                    return Object(r.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                        secondCount: t
                    }, "formatDuration");
                case i.MINUTE:
                    return Object(r.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                        minuteCount: t
                    }, "formatDuration");
                case i.HOUR:
                    return Object(r.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                        hourCount: t
                    }, "formatDuration");
                case i.DAY:
                    return Object(r.d)("{dayCount, plural, one {# day} other {# days}}", {
                        dayCount: t
                    }, "formatDuration");
                case i.WEEK:
                    return Object(r.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                        weekCount: t
                    }, "formatDuration");
                case i.MONTH:
                    return Object(r.d)("{monthCount, plural, one {# month} other {# months}}", {
                        monthCount: t
                    }, "formatDuration");
                default:
                    return ""
            }
        }

        function o(e, t) {
            switch (e) {
                case i.SECOND:
                    return Object(r.d)("{secondCount}s", {
                        secondCount: t
                    }, "formatDuration");
                case i.MINUTE:
                    return Object(r.d)("{minuteCount}m", {
                        minuteCount: t
                    }, "formatDuration");
                case i.HOUR:
                    return Object(r.d)("{hourCount}h", {
                        hourCount: t
                    }, "formatDuration");
                case i.DAY:
                    return Object(r.d)("{dayCount}d", {
                        dayCount: t
                    }, "formatDuration");
                case i.WEEK:
                    return Object(r.d)("{weekCount}w", {
                        weekCount: t
                    }, "formatDuration");
                case i.MONTH:
                    return Object(r.d)("{monthCount}mo", {
                        monthCount: t
                    }, "formatDuration");
                default:
                    return ""
            }
        }

        function s(e) {
            if (e < 60) return {
                seconds: e
            };
            var t = Math.floor(e / 60),
                n = e % 60;
            if (t < 60) return n ? {
                minutes: t,
                seconds: n
            } : {
                minutes: t
            };
            var i = Math.floor(t / 60);
            if (t %= 60, i < 24) return t ? {
                hours: i,
                minutes: t
            } : {
                hours: i
            };
            var r = Math.floor(i / 24);
            if (i %= 24, r < 7) return i ? {
                days: r,
                hours: i
            } : {
                days: r
            };
            if (r <= 26) {
                var a = Math.floor(r / 7);
                return (r %= 7) ? {
                    weeks: a,
                    days: r
                } : {
                    weeks: a
                }
            }
            return {
                months: Math.round((r + 3) / 30)
            }
        }! function(e) {
            e[e.SECOND = 0] = "SECOND", e[e.MINUTE = 1] = "MINUTE", e[e.HOUR = 2] = "HOUR", e[e.DAY = 3] = "DAY", e[e.WEEK = 4] = "WEEK", e[e.MONTH = 5] = "MONTH"
        }(i || (i = {}))
    },
    "GH+X": function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            r = n("Odds"),
            a = (n("3fb4"), function(e) {
                var t = null;
                return e.footer && (t = i.createElement(r._30, {
                    padding: 2,
                    background: r.m.Alt2
                }, e.footer)), i.createElement(r._30, {
                    className: "settings-section",
                    background: r.m.Base,
                    margin: {
                        bottom: 4
                    },
                    borderRight: !0,
                    borderBottom: !0,
                    borderLeft: !0
                }, e.children, t)
            });
        n.d(t, "a", function() {
            return a
        })
    },
    GWfv: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
                return function(e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e)) return function(e, t) {
                        var n = [],
                            i = !0,
                            r = !1,
                            a = void 0;
                        try {
                            for (var o, s = e[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0);
                        } catch (e) {
                            r = !0, a = e
                        } finally {
                            try {
                                !i && s.return && s.return()
                            } finally {
                                if (r) throw a
                            }
                        }
                        return n
                    }(e, t);
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(),
            r = p(n("GiK3")),
            a = p(n("DT0+")),
            o = p(n("KSGD")),
            s = p(n("tZ8z")),
            c = p(n("HW6M")),
            l = p(n("z15t")),
            u = p(n("Iwjr")),
            d = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(n("K01h"));

        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var m = (0, a.default)({
            mixins: [s.default],
            propTypes: {
                color: o.default.string.isRequired,
                onChange: o.default.func.isRequired
            },
            getDefaultProps: function() {
                return {
                    color: "rgba(0,0,0,1)",
                    opacitySlider: !1
                }
            },
            getInitialState: function() {
                return this.getStateFrom(this.props)
            },
            componentWillReceiveProps: function(e) {
                var t = this.getStateFrom(e);
                d.equals(this.state.color, t.color) || this.setState(t)
            },
            getStateFrom: function(e) {
                return {
                    color: d.parseToHsv(e.color)
                }
            },
            render: function() {
                var e = (0, c.default)("colorpicker", {
                        "with-opacity-slider": this.props.opacitySlider
                    }),
                    t = i(this.state.color, 3),
                    n = t[0],
                    a = t[1],
                    o = t[2];
                return r.default.createElement("div", {
                    className: e
                }, r.default.createElement("div", {
                    className: "hue-slider"
                }, r.default.createElement(u.default, {
                    vertical: !0,
                    value: n,
                    max: 360,
                    onChange: this.handleHueChange
                })), this.props.opacitySlider && r.default.createElement("div", {
                    className: "opacity-slider"
                }, r.default.createElement(u.default, {
                    vertical: !1,
                    value: this.getAlpha(),
                    max: 1,
                    background: this.getBackgroundGradient(),
                    onChange: this.handleAlphaChange
                })), r.default.createElement(l.default, {
                    x: a,
                    y: o,
                    max: 100,
                    className: d.isDark(this.state.color) ? "dark" : "light",
                    backgroundColor: this.getBackgroundHue(),
                    onChange: this.handleSaturationValueChange
                }))
            },
            getAlpha: function() {
                return void 0 === this.state.color[3] ? 1 : this.state.color[3]
            },
            getBackgroundGradient: function() {
                var e = i(this.state.color, 3),
                    t = e[0],
                    n = e[1],
                    r = e[2];
                return "linear-gradient(to right, rgba(0,0,0,0) 0%, " + d.toRgbString([t, n, r, 1]) + " 100%)"
            },
            getBackgroundHue: function() {
                return d.toRgbString([this.state.color[0], 100, 100])
            },
            handleAlphaChange: function(e) {
                var t = i(this.state.color, 3),
                    n = t[0],
                    r = t[1],
                    a = t[2];
                this.update([n, r, a, e])
            },
            handleHueChange: function(e) {
                var t = i(this.state.color, 4),
                    n = t[1],
                    r = t[2],
                    a = t[3];
                this.update([e, n, r, a])
            },
            handleSaturationValueChange: function(e, t) {
                var n = i(this.state.color, 4),
                    r = n[0],
                    a = n[3];
                this.update([r, e, t, a])
            },
            update: function(e) {
                this.setState({
                    color: e
                }), this.props.onChange(d.toRgbString(e))
            }
        });
        t.default = m
    },
    II0X: function(e, t) {
        e.exports = function(e, t, n) {
            return Math.min(Math.max(e, t), n)
        }
    },
    IjoR: function(e, t) {},
    Iwjr: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = l(n("GiK3")),
            r = l(n("DT0+")),
            a = l(n("KSGD")),
            o = l(n("tZ8z")),
            s = l(n("HW6M")),
            c = l(n("V/Pj"));

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = (0, r.default)({
            mixins: [c.default, o.default],
            propTypes: {
                value: a.default.number.isRequired,
                vertical: a.default.bool,
                background: a.default.string
            },
            getDefaultProps: function() {
                return {
                    value: 0,
                    vertical: !1,
                    background: ""
                }
            },
            updatePosition: function(e, t, n) {
                var i = void 0;
                i = this.props.vertical ? (e.bottom - n) / e.height : (t - e.left) / e.width, this.props.onChange(this.getScaledValue(i))
            },
            getCss: function() {
                var e, t, n, i = this.props.vertical ? "bottom" : "left";
                return e = {}, t = i, n = this.getPercentageValue(this.props.value), t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            },
            render: function() {
                var e = (0, s.default)("slider", this.props.vertical ? "vertical" : "horizontal"),
                    t = this.props.background;
                return i.default.createElement("div", {
                    className: e,
                    onMouseDown: this.startUpdates,
                    onTouchStart: this.startUpdates
                }, i.default.createElement("div", {
                    className: "track",
                    style: {
                        background: t
                    }
                }), i.default.createElement("div", {
                    className: "pointer",
                    style: this.getCss()
                }))
            }
        });
        t.default = u
    },
    J8WN: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var i = n("TToO"),
            r = n("GiK3"),
            a = (n.n(r), n("Odds")),
            o = n("yU6t"),
            s = (n.n(o), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isDraggingOver: !1
                    }, t.onDragEnter = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !0
                        })
                    }, t.onDragLeave = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        })
                    }, t.onFileInputChange = function(e) {
                        e.preventDefault(), t.finalizeSelections(e.target.files), e.target.value = ""
                    }, t.onFileDrop = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        }), t.finalizeSelections(e.dataTransfer.files)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(a.R, {
                        dragOver: this.state.isDraggingOver,
                        error: this.props.error
                    }, r.createElement(a._1, {
                        position: a._14.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        zIndex: a._56.Above
                    }, r.createElement("input", {
                        "data-a-target": "file-picker-input",
                        "data-test-selector": "file-picker-input",
                        className: "drag-and-drop-file-picker__input",
                        accept: this.props.allowedFileTypes.join(","),
                        multiple: this.props.multiFile || !1,
                        onChange: this.onFileInputChange,
                        type: "file",
                        onDragLeave: this.onDragLeave,
                        onDragEnter: this.onDragEnter,
                        onDrop: this.onFileDrop
                    })), this.props.children)
                }, t.prototype.finalizeSelections = function(e) {
                    e && this.props.onFilesSubmitted(Array.from(e))
                }, t
            }(r.Component))
    },
    JBcW: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), t.c = function(e) {
            r.n.track(a.SpadeEventType.BrowserPushNotificationPrompt, e)
        }, t.b = function(e) {
            r.n.track(a.SpadeEventType.BrowserPushNotificationDisable, e)
        };
        var i, r = n("6sO2"),
            a = n("vH/s");
        ! function(e) {
            e.Settings = "settings"
        }(i || (i = {}))
    },
    Jo6h: function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            r = n("6sO2"),
            a = n("OjIq"),
            o = n("Odds"),
            s = (n("IjoR"), function(e) {
                return i.createElement(o._30, {
                    className: "settings-form-group"
                }, i.createElement(a.a, null, i.createElement(o.V, {
                    error: e.error,
                    errorMessage: e.errorMessage || Object(r.d)("Sorry, something went wrong. Please try again later.", "SettingsFormGroup"),
                    hint: e.hint,
                    id: e.id,
                    label: e.label,
                    labelOptional: e.labelOptional,
                    orientation: e.orientation || o.W.Horizontal
                }, e.children)))
            });
        n.d(t, "a", function() {
            return s
        })
    },
    K01h: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.parseToHsv = function(e) {
            e = (0, i.default)(e);
            var t = (0, r.default)(e),
                n = 4 === e.length ? e[3] : 1;
            return t.push(n), t
        }, t.toRgbString = l, t.equals = function(e, t) {
            return l(e) === l(t)
        }, t.isDark = function(e) {
            return (0, s.default)((0, a.default)(e)) <= 128
        };
        var i = c(n("s/Z0")),
            r = c(n("zwRn")),
            a = c(n("vEIR")),
            o = c(n("Qe41")),
            s = c(n("vzFj"));

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function l(e) {
            var t = (0, a.default)(e);
            return 4 === e.length && t.push(e[3]), (0, o.default)(t)
        }
    },
    K4jf: function(e, t, n) {
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
            l = n("GiK3"),
            u = n("CIox"),
            d = n("6sO2"),
            p = n("yWCw"),
            m = n("CSlQ"),
            g = n("eXld"),
            h = n("2aoH"),
            f = n("j7/Y"),
            v = n("Ejve"),
            b = n("w9tK"),
            y = n("vH/s"),
            S = n("GH+X"),
            k = n("AQc/"),
            _ = n("F8kA"),
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderDashboardLink = function(e) {
                        return t.props.user ? l.createElement(_.a, {
                            key: "link",
                            to: "/" + t.props.user.login + "/dashboard/settings/autohost"
                        }, e) : l.createElement("span", {
                            key: "autohost-no-link"
                        }, "text")
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Object(d.d)("Auto Host settings have moved. You can find them in <x:link>your dashboard</x:link>.", {
                        "x:link": this.renderDashboardLink
                    }, "SettingsChannelPage");
                    return l.createElement(k.a, {
                        title: Object(d.d)("Auto Hosting", "AutohostSettingsComponent"),
                        description: e
                    })
                }, t
            }(l.Component);
        var C = Object(i.b)(function(e) {
                return {
                    user: Object(s.c)(e)
                }
            })(E),
            w = n("7vx8"),
            N = n("Jo6h"),
            O = n("Odds"),
            U = n("nqey"),
            j = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.currentUser && this.props.data.currentUser.bannedUsers && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.currentUser && this.props.data.currentUser.bannedUsers && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser && this.props.data.currentUser.bannedUsers && this.props.data.currentUser.bannedUsers.length > 0;
                    return l.createElement(N.a, {
                        label: Object(d.d)("Banned Chatters", "BannedChatters")
                    }, e ? this.renderBannedChatters() : this.renderEmptyMessage())
                }, t.prototype.renderBannedChatters = function() {
                    var e = this.props.data.currentUser && this.props.data.currentUser.bannedUsers;
                    return e ? e.filter(function(e) {
                        return e && e.bannedUser && e.bannedUser.id
                    }).map(function(e) {
                        return l.createElement(O._47, {
                            key: e.bannedUser.id,
                            offsetY: "0",
                            label: Object(d.d)("Banned by {modUserDisplayName} {durationAgo}", {
                                modUserDisplayName: e.modUser && e.modUser.displayName || Object(d.d)("an unknown user", "BannedChatters"),
                                durationAgo: Object(d.g)(new Date(e.bannedAt))
                            }, "BannedChatters")
                        }, l.createElement(O._30, {
                            background: O.m.Alt2,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            margin: .5
                        }, e.bannedUser && e.bannedUser.login))
                    }) : null
                }, t.prototype.renderEmptyMessage = function() {
                    return l.createElement(O.P, {
                        bold: !0
                    }, Object(d.d)("There are no users banned from your chat.", "BannedChatters"))
                }, t
            }(l.Component),
            D = Object(r.d)(Object(w.a)(U), Object(m.d)("BannedChatters"))(j),
            T = n("3zLD"),
            P = n("oIkB"),
            x = n("bX1P");

        function I() {
            return function(e) {
                var t = function(t) {
                    function n() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.logger = d.o.logger.withCategory("with-chat-settings-update"), e.updateChatSettings = function(t) {
                            var n = e.props.channelID;
                            return 0 === n.length ? Promise.reject("No channelID - unable to update chat settings.") : (e.logger.debug("Updating chat settings", {
                                data: t,
                                channelID: n
                            }), e.props.updateChatSettings(Object(P.a)(c.__assign({}, t, {
                                channelID: n
                            }))))
                        }, e
                    }
                    return c.__extends(n, t), n.prototype.render = function() {
                        var t = {
                            updateChatSettings: this.updateChatSettings
                        };
                        return l.createElement(e, c.__assign({}, this.props, t))
                    }, n.displayName = "WithChatSettingsUpdate(" + (e.displayName || e.name || "Component") + ")", n
                }(l.Component);
                return Object(r.d)(Object(i.b)(function(e) {
                    return {
                        channelID: e.session.user && e.session.user.id || ""
                    }
                }), Object(w.a)(x, {
                    name: "updateChatSettings"
                }))(t)
            }
        }
        var F = n("gLfK"),
            A = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderBody = function() {
                        return t.props.showPlaceholder ? l.createElement(O._13, null) : l.createElement(O._7, null, l.createElement(O._46, {
                            checked: t.props.checked,
                            error: t.props.error,
                            disabled: t.props.disabled,
                            onChange: t.onChange,
                            id: t.props.id
                        }), l.createElement(F.a, {
                            text: t.props.description,
                            extraText: t.props.extraDescription
                        }))
                    }, t.onChange = function(e) {
                        t.props.onChange && t.props.onChange(e.currentTarget.checked)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(N.a, {
                        id: this.props.id,
                        label: this.props.label,
                        error: this.props.error,
                        errorMessage: this.props.errorMessage,
                        orientation: O.W.Horizontal
                    }, this.renderBody())
                }, t
            }(l.Component),
            L = function(e) {
                var t = e.saving || e.errorLoading;
                return l.createElement(A, {
                    id: "settings-channel-page-block-hyperlinks",
                    label: Object(d.d)("Block Hyperlinks", "BlockHyperlinksToggle"),
                    description: Object(d.d)("Your channel's chat will automatically delete posted URLs except for ones posted by you, moderators, and admins.", "BlockHyperlinksToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            M = n("ar1V"),
            R = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        errorSaving: !1,
                        checked: !1
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("chat-block-hyperlinks"), t.onChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        }, function() {
                            t.updateChatSettings(e)
                        })
                    }, t.updateChatSettings = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, this.props.updateChatSettings({
                                            hideLinks: e
                                        })];
                                    case 1:
                                        return i.sent(), t = function(t) {
                                            var n = t && t.currentUser,
                                                i = n && n.chatSettings;
                                            return i ? {
                                                currentUser: c.__assign({}, n, {
                                                    chatSettings: c.__assign({}, i, {
                                                        blockLinks: e
                                                    })
                                                })
                                            } : t
                                        }, Object(P.d)(M, {}, t), this.logger.debug("Updated chat setting", {
                                            hideLinks: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 3];
                                    case 2:
                                        return n = i.sent(), this.logger.warn("Failed to save chat setting", {
                                            err: n
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0,
                                            checked: !e
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data,
                        n = t.currentUser;
                    if (!t.loading && this.props.data.loading) {
                        var i = n && n.chatSettings && n.chatSettings.blockLinks || !1;
                        this.setState({
                            checked: i
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.chatSettings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(L, {
                        loading: this.props.data.loading,
                        saving: this.state.saving,
                        checked: this.state.checked,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onChange
                    })
                }, t
            }(l.Component),
            B = Object(T.compose)(Object(m.d)("BlockHyperlinksToggle"), Object(w.a)(M, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), I())(R),
            z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        var n = +e.currentTarget.value;
                        t.props.onChange(n)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.loading || this.props.saving || this.props.errorLoading,
                        n = [{
                            delay: 0,
                            label: Object(d.d)("Off", "ChatDelayRadioButtons"),
                            selected: 0 === this.props.chatDelayMs
                        }, {
                            delay: 2e3,
                            label: Object(d.d)("2 seconds", "ChatDelayRadioButtons"),
                            selected: 2e3 === this.props.chatDelayMs
                        }, {
                            delay: 4e3,
                            label: Object(d.d)("4 seconds", "ChatDelayRadioButtons"),
                            selected: 4e3 === this.props.chatDelayMs
                        }, {
                            delay: 6e3,
                            label: Object(d.d)("6 seconds", "ChatDelayRadioButtons"),
                            selected: 6e3 === this.props.chatDelayMs
                        }];
                    return l.createElement(N.a, {
                        orientation: O.W.Horizontal,
                        label: Object(d.d)("Non-Mod Chat Delay", "ChatDelayRadioButtons"),
                        error: this.props.errorLoading || this.props.errorSaving
                    }, l.createElement(O._7, {
                        display: O.Q.Flex,
                        flexDirection: O.S.Row
                    }, n.map(function(n) {
                        var i = "chat-delay:" + n.label;
                        return l.createElement(O._7, {
                            key: i,
                            margin: {
                                right: 2
                            },
                            display: O.Q.Flex,
                            flexDirection: O.S.Row
                        }, l.createElement(O._19, {
                            checked: n.selected,
                            value: n.delay.toString(),
                            label: n.label,
                            name: "Non-Mod Chat Delay: " + n.delay / 1e3 + "s",
                            onChange: e.onChange,
                            disabled: t,
                            "data-test-selector": "chat-delay-radio:" + n.delay
                        }))
                    })), l.createElement(F.a, {
                        text: Object(d.d)("Adds a short delay before non-mods see messages. Any message that is timed out or banned during the delay is removed from chat completely.", "ChatDelayRadioButtons")
                    }))
                }, t
            }(l.Component),
            q = n("D2cp"),
            V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        errorSaving: !1,
                        chatDelayMs: 0
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("chat-delay"), t.onChange = function(e) {
                        var n = t.state.chatDelayMs;
                        t.setState({
                            chatDelayMs: e,
                            saving: !0
                        }, function() {
                            t.updateChatSettings(Math.floor(e), n)
                        })
                    }, t.updateChatSettings = function(e, n) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, i;
                            return c.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), [4, this.props.updateChatSettings({
                                            chatDelayInMs: e
                                        })];
                                    case 1:
                                        return r.sent(), t = function(t) {
                                            var n = t && t.currentUser,
                                                i = n && n.chatSettings;
                                            return i ? {
                                                currentUser: c.__assign({}, n, {
                                                    chatSettings: c.__assign({}, i, {
                                                        chatDelayMs: e
                                                    })
                                                })
                                            } : t
                                        }, Object(P.d)(q, {}, t), this.logger.debug("Updated chat setting", {
                                            chatDelayInMs: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 3];
                                    case 2:
                                        return i = r.sent(), this.logger.warn("Failed to save chat setting", {
                                            err: i
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0,
                                            chatDelayMs: n
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (!e.data.loading && this.props.data.loading) {
                        var t = this.getChatDelayFromProps(e);
                        this.setState({
                            chatDelayMs: t
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.chatSettings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(z, {
                        chatDelayMs: this.state.chatDelayMs,
                        saving: this.state.saving,
                        loading: this.props.data.loading,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onChange
                    })
                }, t.prototype.getChatDelayFromProps = function(e) {
                    var t = e.data.currentUser;
                    return t && t.chatSettings && t.chatSettings.chatDelayMs || 0
                }, t
            }(l.Component),
            H = Object(T.compose)(Object(m.d)("ChatDelayRadioButtons"), Object(w.a)(q, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), I())(V),
            W = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = null,
                        t = this.props.loading || this.props.saving || this.props.errorLoading;
                    return (this.props.dirty || this.props.saving) && (e = l.createElement(O._7, {
                        margin: {
                            top: 1
                        }
                    }, l.createElement(O.u, {
                        onClick: this.props.onClickSave,
                        state: this.props.saving ? O.z.Loading : O.z.Default
                    }, Object(d.d)("Save Changes", "ChatRulesTextArea")))), l.createElement(N.a, {
                        orientation: O.W.Horizontal,
                        label: Object(d.d)("Chat Rules", "ChatRulesTextArea"),
                        error: this.props.errorLoading || this.props.errorSaving
                    }, l.createElement(O._41, {
                        disabled: t,
                        value: this.props.rules,
                        onChange: this.props.onChange,
                        placeholder: this.renderPlaceholderString(),
                        rows: 5
                    }), l.createElement(F.a, {
                        text: Object(d.d)("Require first-time viewers to agree to your rules before chatting. One rule per line.", "ChatRulesTextArea")
                    }), e)
                }, t.prototype.renderPlaceholderString = function() {
                    return "- " + [Object(d.d)("Be excellent to each other.", "ChatRulesTextArea"), Object(d.d)("Have fun!", "ChatRulesTextArea")].join("\n- ")
                }, t
            }(l.Component),
            G = n("WaOj"),
            Q = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        errorSaving: !1,
                        initialRules: "",
                        rules: ""
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("chat-rules"), t.onChange = function(e) {
                        t.setState({
                            rules: e.currentTarget.value
                        })
                    }, t.onClickSave = function() {
                        t.setState({
                            saving: !0
                        }, t.updateChatSettings)
                    }, t.updateChatSettings = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), e = this.state.rules.split("\n"), [4, this.props.updateChatSettings({
                                            rules: e
                                        })];
                                    case 1:
                                        return i.sent(), t = function(t) {
                                            var n = t && t.currentUser,
                                                i = n && n.chatSettings;
                                            return i ? {
                                                currentUser: c.__assign({}, n, {
                                                    chatSettings: c.__assign({}, i, {
                                                        rules: e
                                                    })
                                                })
                                            } : t
                                        }, Object(P.d)(G, {}, t), this.logger.debug("Updated chat setting", {
                                            rules: e
                                        }), this.setState(function(e) {
                                            return {
                                                saving: !1,
                                                initialRules: e.rules,
                                                errorSaving: !1
                                            }
                                        }), [3, 3];
                                    case 2:
                                        return n = i.sent(), this.logger.warn("Failed to save chat setting", {
                                            err: n
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (!e.data.loading && this.props.data.loading) {
                        var t = this.getRulesFromProps(e);
                        this.setState({
                            rules: t,
                            initialRules: t
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.chatSettings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(W, {
                        rules: this.state.rules,
                        dirty: this.state.initialRules !== this.state.rules,
                        saving: this.state.saving,
                        loading: this.props.data.loading,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onChange,
                        onClickSave: this.onClickSave
                    })
                }, t.prototype.getRulesFromProps = function(e) {
                    var t = e.data.currentUser;
                    return t && t.chatSettings && t.chatSettings.rules.join("\n") || ""
                }, t
            }(l.Component),
            Y = Object(T.compose)(Object(m.d)("ChatRulesTextArea"), Object(w.a)(G, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), I())(Q),
            J = function(e) {
                var t = e.saving || e.errorLoading;
                return l.createElement(A, {
                    id: "settings-channel-page-email-verification",
                    label: Object(d.d)("Email Verification", "EmailVerificationToggle"),
                    description: Object(d.d)("Anyone that would like to send messages to your chat room must first verify their email address.", "EmailVerificationToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            K = n("woYr"),
            X = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        errorSaving: !1,
                        checked: !1
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("chat-require-verified-email"), t.onChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        }, function() {
                            t.updateChatSettings(e)
                        })
                    }, t.updateChatSettings = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, this.props.updateChatSettings({
                                            requireVerifiedAccount: e
                                        })];
                                    case 1:
                                        return i.sent(), t = function(t) {
                                            var n = t && t.currentUser,
                                                i = n && n.chatSettings;
                                            return i ? {
                                                currentUser: c.__assign({}, n, {
                                                    chatSettings: c.__assign({}, i, {
                                                        requireVerifiedAccount: e
                                                    })
                                                })
                                            } : t
                                        }, Object(P.d)(K, {}, t), this.logger.debug("Updated chat setting", {
                                            requireVerifiedAccount: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 3];
                                    case 2:
                                        return n = i.sent(), this.logger.warn("Failed to save chat setting", {
                                            err: n
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0,
                                            checked: !e
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data,
                        n = t.currentUser;
                    if (!t.loading && this.props.data.loading) {
                        var i = n && n.chatSettings && n.chatSettings.requireVerifiedAccount || !1;
                        this.setState({
                            checked: i
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.chatSettings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(J, {
                        loading: this.props.data.loading,
                        saving: this.state.saving,
                        checked: this.state.checked,
                        onChange: this.onChange,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving
                    })
                }, t
            }(l.Component),
            $ = Object(T.compose)(Object(m.d)("EmailVerificationToggle"), Object(w.a)(K, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), I())(X),
            Z = function(e) {
                var t = e.saving || e.errorLoading;
                return l.createElement(A, {
                    id: "settings-channel-page-mature-content",
                    label: Object(d.d)("Mature Content", "MatureContentToggle"),
                    description: Object(d.d)("Enable this setting if your stream contains content that may be inappropriate for younger audiences. You may never broadcast sexual activity, nudity, threats or extreme violence. Doing so will result in immediate, irrevocable termination of your account. Please make sure your content will comply with the <x:link>Terms of Service</x:link> before broadcasting", {
                        "x:link": function(e) {
                            return l.createElement("a", {
                                key: "mature-content-toggle-tos",
                                href: "https://www.twitch.tv/p/terms-of-service/"
                            }, e)
                        }
                    }, "MatureContentToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            ee = n("UD8e"),
            te = n("oYVU"),
            ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        checked: !1,
                        saving: !1,
                        errorSaving: !1
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("mature-content"), t.onCheckBoxChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        }, function() {
                            t.updateBroadcastSettings(e)
                        })
                    }, t.updateBroadcastSettings = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, i;
                            return c.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (this.logger.debug("Updating broadcast settings", {
                                                isMature: e
                                            }), !(t = this.props.data.currentUser && this.props.data.currentUser.id)) return this.logger.warn("No currentUser - unable to update broadcast settings."), [2];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.updateBroadcastSettings(Object(P.a)({
                                            userID: t,
                                            isMature: e
                                        }))];
                                    case 2:
                                        return r.sent(), n = function(t) {
                                            var n = t && t.currentUser,
                                                i = n && n.broadcastSettings;
                                            return i ? {
                                                currentUser: c.__assign({}, n, {
                                                    broadcastSettings: c.__assign({}, i, {
                                                        isMature: e
                                                    })
                                                })
                                            } : t
                                        }, Object(P.d)(te, {}, n), this.logger.debug("Updated broadcast settings", {
                                            isMature: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 4];
                                    case 3:
                                        return i = r.sent(), this.logger.warn("Failed to update broadcast settings", {
                                            err: i
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0,
                                            checked: !e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data,
                        n = t.currentUser;
                    if (!t.loading && this.props.data.loading) {
                        var i = n && n.broadcastSettings && n.broadcastSettings.isMature || !1;
                        this.setState({
                            checked: i
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.broadcastSettings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(Z, {
                        checked: this.state.checked,
                        saving: this.state.saving,
                        loading: this.props.data.loading,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onCheckBoxChange
                    })
                }, t
            }(l.Component),
            ie = Object(r.d)(Object(m.d)("MatureContentToggle"), Object(w.a)(te, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), Object(w.a)(ee, {
                name: "updateBroadcastSettings"
            }))(ne),
            re = n("LIeg"),
            ae = n("9u8h"),
            oe = n("6T7P"),
            se = n.n(oe),
            ce = n("5kgt"),
            le = (n("jtEV"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onDeclineClicked = function() {
                        t.props.declineInvitation(t.props.index)
                    }, t.onAcceptClick = function() {
                        t.props.acceptInvitation(t.props.index)
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(d.d)("Accept", "TeamInvitationsItem"),
                        t = Object(d.d)("Decline", "TeamInvitationsItem");
                    return l.createElement(O._7, c.__assign({
                        padding: {
                            y: 1,
                            x: 1
                        }
                    }, Object(ce.a)(this.props), {
                        className: "team-invitations-item"
                    }), l.createElement(O.B, {
                        row: !0
                    }, l.createElement(O._7, {
                        className: "team-invitations-item__avatar"
                    }, l.createElement(O.j, {
                        ratio: O.k.Aspect1x1
                    }, l.createElement(m.b, {
                        src: this.props.invitation.logo || se.a,
                        alt: Object(d.d)("{displayName} Team Logo", {
                            displayName: this.props.invitation.displayName
                        }, "TeamInvitationsItem")
                    }))), l.createElement(O._7, {
                        flexGrow: 1,
                        display: O.Q.Flex,
                        position: O._14.Relative
                    }, l.createElement(O._1, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, l.createElement(O.P, {
                        type: O._44.Span,
                        ellipsis: !0
                    }, this.props.invitation.name))), l.createElement(O._7, {
                        padding: {
                            right: 2
                        }
                    }, l.createElement(O.u, {
                        ariaLabel: e,
                        onClick: this.onAcceptClick,
                        type: O.A.Success,
                        "data-test-selector": "TEAM_INVITATIONS_ITEM_ACCEPT_LINK"
                    }, e)), l.createElement(O._7, null, l.createElement(O.u, {
                        ariaLabel: t,
                        onClick: this.onDeclineClicked,
                        type: O.A.Alert,
                        "data-test-selector": "TEAM_INVITATIONS_ITEM_DECLINE_LINK"
                    }, t))))
                }, t = c.__decorate([Object(m.d)("TeamInvitationsItem")], t)
            }(l.Component)),
            ue = Object(m.d)("TeamInvitationsItem")(le),
            de = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.invitations.length < 1 && !this.props.formErrorMessage ? null : l.createElement(N.a, {
                        label: Object(d.d)("Invitations", "TeamInvitations"),
                        error: !!this.props.formErrorMessage,
                        errorMessage: this.props.formErrorMessage
                    }, this.props.invitations.map(function(t, n) {
                        return l.createElement(ue, {
                            key: t.name,
                            invitation: t,
                            index: n,
                            acceptInvitation: e.props.acceptInvitation,
                            declineInvitation: e.props.declineInvitation
                        })
                    }))
                }, t
            }(l.Component),
            pe = Object(m.d)("TeamInvitations")(de),
            me = (n("yHYq"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return l.createElement(O._7, c.__assign({
                        padding: {
                            y: 1,
                            x: 1
                        }
                    }, Object(ce.a)(this.props), {
                        className: "team-manager-item"
                    }), l.createElement(O.B, {
                        row: !0
                    }, l.createElement(O._7, {
                        className: "team-manager-item__avatar"
                    }, l.createElement(O.j, {
                        ratio: O.k.Aspect1x1
                    }, l.createElement(m.b, {
                        src: this.props.team.logo || se.a,
                        alt: Object(d.d)("{displayName} Team Logo", {
                            displayName: this.props.team.displayName
                        }, "TeamManagerItem")
                    }))), l.createElement(O._7, {
                        flexGrow: 1,
                        display: O.Q.Flex,
                        position: O._14.Relative
                    }, l.createElement(O._1, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, l.createElement(O.P, {
                        type: O._44.Span,
                        ellipsis: !0
                    }, this.props.team.name))), l.createElement(O._7, {
                        padding: {
                            right: 2
                        }
                    }, l.createElement(O.N, {
                        to: "https://www.twitch.tv/team/" + this.props.team.name + "/edit"
                    }, Object(d.d)("Edit", "TeamManagerItem"))), l.createElement(O._7, null, l.createElement(O.N, {
                        to: "https://www.twitch.tv/team/" + this.props.team.name
                    }, Object(d.d)("View", "TeamManagerItem")))))
                }, t
            }(l.Component)),
            ge = Object(m.d)("TeamManagerItem")(me),
            he = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.teams.length < 1 && !this.props.formErrorMessage ? null : l.createElement(N.a, {
                        label: Object(d.d)("Manager", "TeamManager"),
                        error: !!this.props.formErrorMessage,
                        errorMessage: this.props.formErrorMessage
                    }, this.props.teams.map(function(e) {
                        return l.createElement(ge, {
                            key: e.name,
                            team: e
                        })
                    }))
                }, t
            }(l.Component),
            fe = Object(m.d)("TeamManager")(he),
            ve = (n("zpQV"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClickRemove = function() {
                        t.props.onClickRemove(t.props.index)
                    }, t.onChangeRevenue = function() {
                        t.props.onChangeRevenue(t.props.index)
                    }, t.onChangeStats = function() {
                        t.props.onChangeStats(t.props.index)
                    }, t.onChangePrimary = function() {
                        t.props.onChangePrimary(t.props.index)
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = Object(d.d)("Remove", "TeamMembershipsItem"),
                        t = null;
                    return this.props.showPrimaryInput && (t = l.createElement(O._7, {
                        padding: {
                            right: 2
                        }
                    }, l.createElement(O._19, {
                        "data-test-selector": "TEAM_MEMBERSHIPS_ITEM_PRIMARY_INPUT",
                        name: "team-memberships-main-radio",
                        onChange: this.onChangePrimary,
                        label: Object(d.d)("Main", "TeamMembershipsItem"),
                        disabled: this.props.updating,
                        checked: this.props.membership.primary
                    }))), l.createElement(O._7, c.__assign({
                        padding: {
                            y: 1,
                            x: 1
                        }
                    }, Object(ce.a)(this.props), {
                        className: "team-memberships-item"
                    }), l.createElement(O.B, {
                        row: !0
                    }, l.createElement(O._7, {
                        className: "team-memberships-item__avatar",
                        flexShrink: 0
                    }, l.createElement(O.j, {
                        ratio: O.k.Aspect1x1
                    }, l.createElement(m.b, {
                        src: this.props.membership.team.logo || se.a,
                        alt: Object(d.d)("{displayName} Team Logo", {
                            displayName: this.props.membership.team.displayName
                        }, "TeamMembershipsItem")
                    }))), l.createElement(O._7, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1,
                        position: O._14.Relative,
                        ellipsis: !0
                    }, l.createElement(O.N, {
                        to: "/team/" + this.props.membership.team.name
                    }, l.createElement(O.P, {
                        type: O._44.Span,
                        ellipsis: !0
                    }, this.props.membership.team.displayName))), l.createElement(O._7, {
                        padding: {
                            right: 2
                        }
                    }, l.createElement(O.I, {
                        "data-test-selector": "TEAM_MEMBERSHIPS_ITEM_STATS_INPUT",
                        onChange: this.onChangeStats,
                        label: Object(d.d)("Stats", "TeamMembershipsItem"),
                        disabled: this.props.updating,
                        checked: this.props.membership.statsRevealed
                    })), l.createElement(O._7, {
                        padding: {
                            right: 2
                        }
                    }, l.createElement(O.I, {
                        "data-test-selector": "TEAM_MEMBERSHIPS_ITEM_REVENUE_INPUT",
                        onChange: this.onChangeRevenue,
                        label: Object(d.d)("Revenue", "TeamMembershipsItem"),
                        disabled: this.props.updating,
                        checked: this.props.membership.revenueRevealed
                    })), t, l.createElement(O._47, {
                        label: e
                    }, l.createElement(O.v, {
                        "data-test-selector": "TEAM_MEMBERSHIPS_ITEM_REMOVE_BUTTON",
                        ariaLabel: e,
                        icon: O._21.Trash,
                        onClick: this.onClickRemove,
                        disabled: this.props.updating
                    }))))
                }, t = c.__decorate([Object(m.d)("TeamMembershipItem")], t)
            }(l.Component)),
            be = Object(m.d)("TeamMembershipsItem")(ve),
            ye = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.memberships.length < 1 && !this.props.formErrorMessage ? null : l.createElement(N.a, {
                        label: Object(d.d)("Member", "TeamMemberships"),
                        error: !!this.props.formErrorMessage,
                        errorMessage: this.props.formErrorMessage
                    }, this.props.memberships.map(function(t, n) {
                        return l.createElement(be, {
                            index: n,
                            key: t.team.name,
                            onClickRemove: e.props.onClickRemove,
                            onChangeStats: e.props.onChangeStats,
                            onChangeRevenue: e.props.onChangeRevenue,
                            onChangePrimary: e.props.onChangePrimary,
                            showPrimaryInput: e.props.memberships.length > 1,
                            membership: t,
                            updating: e.props.updating
                        })
                    }))
                }, t
            }(l.Component),
            Se = Object(m.d)("TeamMemberships")(ye),
            ke = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return l.createElement(S.a, null, l.createElement(fe, {
                        teams: this.props.teams,
                        formErrorMessage: this.props.managedError
                    }), l.createElement(pe, {
                        invitations: this.props.invitations,
                        acceptInvitation: this.props.acceptInvitation,
                        declineInvitation: this.props.declineInvitation,
                        formErrorMessage: this.props.invitationsError
                    }), l.createElement(Se, {
                        memberships: this.props.memberships,
                        formErrorMessage: this.props.membershipsError,
                        onClickRemove: this.props.onClickRemove,
                        onChangeStats: this.props.onChangeStats,
                        onChangeRevenue: this.props.onChangeRevenue,
                        onChangePrimary: this.props.onChangePrimary,
                        updating: this.props.updatingToggles
                    }))
                }, t
            }(l.Component),
            _e = Object(m.d)("TeamSettings")(ke),
            Ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        membershipsError: "",
                        memberships: [],
                        updatingToggles: !1,
                        invitationsError: "",
                        invitations: [],
                        updatingInvitations: !1,
                        managedError: "",
                        teams: []
                    }, t.logger = d.o.logger.withCategory("team-settings"), t.deleteMembership = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, r, a, o, s;
                            return c.__generator(this, function(c) {
                                switch (c.label) {
                                    case 0:
                                        if (!this.props.user || 0 === this.state.memberships.length) return [2];
                                        this.setState({
                                            updatingToggles: !0
                                        }), r = this.state.memberships[e], a = "/v5/channels/" + this.props.user.id + "/teams/" + r.team.name + "/membership", c.label = 1;
                                    case 1:
                                        return c.trys.push([1, 3, , 4]), [4, ae.a.deleteOrThrow(a)];
                                    case 2:
                                        return i = c.sent(), [3, 4];
                                    case 3:
                                        return o = c.sent(), t = o, [3, 4];
                                    case 4:
                                        return i && i.error && (t = new Error("Team Memberships error"), n = i.error), t ? (s = Object(d.d)("Unable to remove team membership", "TeamMemberships"), this.logger.error(t, s, n), this.setState({
                                            membershipsError: s,
                                            updatingToggles: !1
                                        }), [2]) : (this.setState(function(t) {
                                            var n = t.memberships.slice();
                                            return n.splice(e, 1), {
                                                memberships: n,
                                                updatingToggles: !1
                                            }
                                        }), [2])
                                }
                            })
                        })
                    }, t.onChangePrimary = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, r, a, o = this;
                            return c.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (this.state.memberships[e].primary) return [2];
                                        this.setState({
                                            updatingToggles: !0
                                        }), s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 3, , 4]), [4, this.putChannelsMembership(c.__assign({}, this.state.memberships[e], {
                                            primary: !0
                                        }))];
                                    case 2:
                                        return n = s.sent(), [3, 4];
                                    case 3:
                                        return r = s.sent(), t = r, [3, 4];
                                    case 4:
                                        return n && n.error && (t = new Error("Team Memberships error"), i = n.error), t ? (a = Object(d.d)("Unable to update main team", "TeamMemberships"), this.logger.error(t, a, i), this.setState({
                                            membershipsError: a,
                                            updatingToggles: !1
                                        }), [2]) : (this.setState(function(t) {
                                            var n = o.state.memberships.findIndex(function(e) {
                                                    return e.primary
                                                }),
                                                i = re(t.memberships, function(t) {
                                                    return t[e]
                                                }, function(e) {
                                                    return e.primary = !0, e
                                                });
                                            return n >= 0 && (i[n].primary = !1), {
                                                memberships: i,
                                                updatingToggles: !1
                                            }
                                        }), [2])
                                }
                            })
                        })
                    }, t.onChangeRevenue = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, r, a;
                            return c.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        this.setState({
                                            updatingToggles: !0
                                        }), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, this.putChannelsMembership(c.__assign({}, this.state.memberships[e], {
                                            revenueRevealed: !this.state.memberships[e].revenueRevealed
                                        }))];
                                    case 2:
                                        return n = o.sent(), [3, 4];
                                    case 3:
                                        return r = o.sent(), t = r, [3, 4];
                                    case 4:
                                        return n && n.error && (t = new Error("Team Memberships error"), i = n.error), t ? (a = Object(d.d)("Unable to update revenue preferences", "TeamMemberships"), this.logger.error(t, a, i), this.setState({
                                            membershipsError: a,
                                            updatingToggles: !1
                                        }), [2]) : (this.setState(function(t) {
                                            return {
                                                memberships: re(t.memberships, function(t) {
                                                    return t[e]
                                                }, function(e) {
                                                    return e.revenueRevealed = !e.revenueRevealed, e
                                                }),
                                                updatingToggles: !1
                                            }
                                        }), [2])
                                }
                            })
                        })
                    }, t.onChangeStats = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, r, a;
                            return c.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        this.setState({
                                            updatingToggles: !0
                                        }), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, this.putChannelsMembership(c.__assign({}, this.state.memberships[e], {
                                            statsRevealed: !this.state.memberships[e].statsRevealed
                                        }))];
                                    case 2:
                                        return n = o.sent(), [3, 4];
                                    case 3:
                                        return r = o.sent(), t = r, [3, 4];
                                    case 4:
                                        return n && n.error && (t = new Error("Team Memberships error"), i = n.error), t ? (a = Object(d.d)("Unable to update stats preferences", "TeamMemberships"), this.logger.error(t, a, i), this.setState({
                                            membershipsError: a,
                                            updatingToggles: !1
                                        }), [2]) : (this.setState(function(t) {
                                            return {
                                                memberships: re(t.memberships, function(t) {
                                                    return t[e]
                                                }, function(e) {
                                                    return e.statsRevealed = !e.statsRevealed, e
                                                }),
                                                updatingToggles: !1
                                            }
                                        }), [2])
                                }
                            })
                        })
                    }, t.putChannelsMembership = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.user ? (t = "/v5/channels/" + this.props.user.id + "/teams/" + e.team.name + "/membership", [4, ae.a.put(t, {
                                            body: {
                                                primary: e.primary,
                                                revenue_revealed: e.revenueRevealed,
                                                stats_revealed: e.statsRevealed
                                            }
                                        })]) : [2];
                                    case 1:
                                        return [2, n.sent()]
                                }
                            })
                        })
                    }, t.fetchTeamsMembership = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i, r, a;
                            return c.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (!this.props.user) return [2];
                                        i = "/v5/channels/" + this.props.user.id + "/memberships", o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, ae.a.get(i)];
                                    case 2:
                                        return t = o.sent(), this.setState({
                                            memberships: this.deserializeMemberships(t),
                                            updatingToggles: !1
                                        }), [3, 4];
                                    case 3:
                                        return r = o.sent(), e = r, [3, 4];
                                    case 4:
                                        return t && t.error && (e = new Error("Team Memberships error"), n = t.error), e ? (a = Object(d.d)("Failed to load Team data.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(e, "Failed to load Team data", n), this.setState({
                                            membershipsError: a
                                        }), [2]) : [2]
                                }
                            })
                        })
                    }, t.deserializeMemberships = function(e) {
                        return e.body ? e.body.memberships.map(function(e) {
                            return {
                                team: {
                                    name: e.team.name,
                                    displayName: e.team.display_name,
                                    logo: e.team.logo_url
                                },
                                primary: e.primary,
                                revenueRevealed: e.revenue_revealed,
                                statsRevealed: e.stats_revealed
                            }
                        }) : []
                    }, t.fetchInvitations = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i;
                            return c.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (!this.props.user) return [2];
                                        e = "/v5/channels/" + this.props.user.id + "/invitations", r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, ae.a.getOrThrow(e)];
                                    case 2:
                                        return t = r.sent(), this.setState({
                                            invitations: this.deserializeInvitations(t)
                                        }), [3, 4];
                                    case 3:
                                        return n = r.sent(), i = Object(d.d)("Failed to load Team data.  Please refresh the page and try again", "TeamInvitations"), this.logger.error(n, "Failed to load Team data"), this.setState({
                                            invitationsError: i
                                        }), [2];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.declineInvitation = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.respondToInvitation(e, !1)];
                                    case 1:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    }, t.acceptInvitation = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.respondToInvitation(e, !0)];
                                    case 1:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    }, t.respondToInvitation = function(e, n) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, i, r, a, o, s, l;
                            return c.__generator(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        if (!this.props.user || 0 === this.state.invitations.length) return [2];
                                        this.setState({
                                            updatingInvitations: !0
                                        }), a = this.state.invitations[e], o = "/v5/channels/" + this.props.user.id + "/teams/" + a.name + "/invitation", u.label = 1;
                                    case 1:
                                        return u.trys.push([1, 3, , 4]), [4, ae.a.put(o, {
                                            body: {
                                                accepted: n
                                            }
                                        })];
                                    case 2:
                                        return r = u.sent(), [3, 4];
                                    case 3:
                                        return s = u.sent(), t = s, [3, 4];
                                    case 4:
                                        return r && r.error && (t = new Error("Team Invitations error"), i = r.error), t ? (l = Object(d.d)("Unable to respond to invitation", "TeamInvitations"), this.logger.error(t, l, i), this.setState({
                                            invitationsError: l,
                                            updatingInvitations: !1
                                        }), [2]) : (this.setState(function(t) {
                                            var i = t.invitations.slice();
                                            i.splice(e, 1);
                                            var r = t.memberships.slice();
                                            return n && r.push({
                                                team: c.__assign({}, a),
                                                revenueRevealed: !1,
                                                statsRevealed: !1,
                                                primary: !1
                                            }), {
                                                memberships: r,
                                                invitations: i,
                                                updatingInvitations: !1
                                            }
                                        }), [2])
                                }
                            })
                        })
                    }, t.deserializeInvitations = function(e) {
                        return e.body ? e.body.invitations.map(function(e) {
                            return {
                                name: e.team.name,
                                displayName: e.team.display_name,
                                logo: e.team.logo_url
                            }
                        }) : []
                    }, t.fetchTeams = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i;
                            return c.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (!this.props.user) return [2];
                                        e = "/v5/users/" + this.props.user.id + "/teams", r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, ae.a.getOrThrow(e)];
                                    case 2:
                                        return t = r.sent(), this.setState({
                                            teams: this.deserializeTeams(t)
                                        }), [3, 4];
                                    case 3:
                                        return n = r.sent(), i = Object(d.d)("Failed to load Team data.  Please refresh the page and try again", "TeamManager"), this.logger.error(n, "Failed to load Team data"), this.setState({
                                            managedError: i
                                        }), [2];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.deserializeTeams = function(e) {
                        return e.body ? e.body.teams.map(function(e) {
                            return {
                                name: e.name,
                                displayName: e.display_name,
                                logo: e.logo_url
                            }
                        }) : []
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.fetchTeamsMembership(), this.fetchInvitations(), this.fetchTeams()
                }, t.prototype.render = function() {
                    return l.createElement(_e, {
                        memberships: this.state.memberships,
                        membershipsError: this.state.membershipsError,
                        onClickRemove: this.deleteMembership,
                        onChangeStats: this.onChangeStats,
                        onChangeRevenue: this.onChangeRevenue,
                        onChangePrimary: this.onChangePrimary,
                        updatingToggles: this.state.updatingToggles,
                        teams: this.state.teams,
                        managedError: this.state.managedError,
                        invitations: this.state.invitations,
                        acceptInvitation: this.acceptInvitation,
                        declineInvitation: this.declineInvitation,
                        invitationsError: this.state.invitationsError
                    })
                }, t
            }(l.Component);
        var Ce = Object(i.b)(function(e) {
                return {
                    user: Object(s.c)(e)
                }
            })(Ee),
            we = n("V5M+"),
            Ne = n("ebTC"),
            Oe = n("4Q9N"),
            Ue = n("J4ib"),
            je = n("OjIq"),
            De = n("vm+z"),
            Te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.showModal = function() {
                        t.props.user && t.props.showUploaderModal(t.props.user)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = null,
                        t = null;
                    if (this.props.data && this.props.data.user && this.props.data.user.offlineImageURL) {
                        e = l.createElement("img", {
                            "data-test-selector": "test-channel-offline-image-selector",
                            height: "90",
                            width: "160",
                            src: this.props.data.user.offlineImageURL
                        });
                        var n = Object(Ue.d)("Remove my Video Player Banner Image", "UploadVideoPlayerBanner");
                        t = l.createElement(O.v, {
                            icon: O._21.Trash,
                            ariaLabel: n
                        })
                    }
                    return l.createElement(O._7, null, l.createElement(k.a, {
                        title: Object(Ue.d)("Video Player Banner", "UploadVideoPlayerBanner"),
                        description: Object(Ue.d)("This is displayed on the player when your channel is offline.", "UploadVideoPlayerBanner")
                    }), l.createElement(S.a, null, l.createElement(je.a, null, l.createElement(O._7, {
                        display: O.Q.Flex
                    }, e, l.createElement(O._7, {
                        padding: {
                            left: 1,
                            top: 1
                        }
                    }, l.createElement(O._7, {
                        display: O.Q.Flex
                    }, l.createElement(O.u, {
                        "data-test-selector": "test-upload-video-player-banner-selector",
                        onClick: this.showModal
                    }, "Update"), t), l.createElement(F.a, {
                        text: Object(Ue.d)("Max 10mb GIF, JPG, or PNG", "UploadVideoPlayerBanner")
                    }))))))
                }, t = c.__decorate([Object(w.a)(De, {
                    options: function(e) {
                        return {
                            skip: !e.user,
                            variables: {
                                login: e.user && e.user.login
                            }
                        }
                    }
                })], t)
            }(l.Component);
        var Pe, xe = Object(i.b)(function(e) {
                return {
                    user: Object(s.c)(e)
                }
            }, function(e) {
                return Object(r.b)({
                    showUploaderModal: function(e) {
                        return Object(we.d)(Ne.a, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            imageType: Oe.a.ChannelOfflineImage,
                            showCloser: !0
                        })
                    }
                }, e)
            })(Te),
            Ie = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderTeamsSettingsSection = function() {
                        return l.createElement(O._7, null, l.createElement(k.a, {
                            title: Object(d.d)("My Teams", "SettingsChannelPage"),
                            description: Object(d.d)("Manage your teams here", "SettingsChannelPage")
                        }), l.createElement(Ce, null))
                    }, t.renderContentSettingsSection = function() {
                        return l.createElement(O._7, null, l.createElement(k.a, {
                            title: Object(d.d)("Content Settings", "SettingsChannelPage"),
                            description: Object(d.d)("Choose how your channel will display for certain users", "SettingsChannelPage")
                        }), l.createElement(S.a, null, l.createElement(ie, null)))
                    }, t.renderChatSettingsSection = function() {
                        return l.createElement(O._7, null, l.createElement(k.a, {
                            title: Object(d.d)("Chat Options", "SettingsChannelPage"),
                            description: Object(d.d)("Moderate your channel's chat and who you allow in it", "SettingsChannelPage")
                        }), l.createElement(S.a, null, l.createElement(B, null), l.createElement($, null), l.createElement(Y, null), l.createElement(H, null), l.createElement(D, null)))
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return d.a.buildType === v.a.Production ? null : l.createElement(l.Fragment, null, l.createElement(xe, null), this.renderContentSettingsSection(), this.renderTeamsSettingsSection(), this.renderChatSettingsSection(), l.createElement(C, null))
                }, t = c.__decorate([Object(m.d)("SettingsChannelPage", {
                    autoReportInteractive: !0,
                    destination: b.a.SettingsChannel
                }), Object(f.a)({
                    location: y.PageviewLocation.SettingsPage
                })], t)
            }(l.Component),
            Fe = n("OAwv"),
            Ae = n("jF7o"),
            Le = n("HW6M");
        n("EQRc");
        ! function(e) {
            e[e.Blizzard = 0] = "Blizzard", e[e.Facebook = 1] = "Facebook", e[e.LeagueOfLegends = 2] = "LeagueOfLegends", e[e.Roku = 3] = "Roku", e[e.PSN = 4] = "PSN", e[e.Twitter = 5] = "Twitter", e[e.Steam = 6] = "Steam", e[e.Xbox = 7] = "Xbox", e[e.Youtube = 8] = "Youtube"
        }(Pe || (Pe = {}));
        var Me, Re = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = {
                        "connection-image": !0,
                        "connection-image--blizzard": this.props.type === Pe.Blizzard,
                        "connection-image--facebook": this.props.type === Pe.Facebook,
                        "connection-image--league-of-legends": this.props.type === Pe.LeagueOfLegends,
                        "connection-image--roku": this.props.type === Pe.Roku,
                        "connection-image--psn": this.props.type === Pe.PSN,
                        "connection-image--steam": this.props.type === Pe.Steam,
                        "connection-image--twitter": this.props.type === Pe.Twitter,
                        "connection-image--xbox": this.props.type === Pe.Xbox,
                        "connection-image--youtube": this.props.type === Pe.Youtube
                    };
                    return l.createElement("div", {
                        className: Le(e)
                    })
                }, t
            }(l.Component),
            Be = (n("8+dp"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClick = function() {
                        t.props.onClick()
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(je.a, null, l.createElement(O._7, {
                        className: "connection-component",
                        display: O.Q.Flex,
                        flexDirection: O.S.Row
                    }, this.props.image && l.createElement(O._7, {
                        className: "connection-component__image",
                        "data-test-selector": "connection-image-test-selector",
                        padding: {
                            right: 1,
                            top: .5
                        },
                        flexShrink: 0
                    }, this.props.image), l.createElement(O._7, {
                        className: "connection-component__right",
                        padding: {
                            x: 1
                        },
                        display: O.Q.Flex,
                        flexGrow: 1,
                        flexDirection: O.S.Column,
                        fullWidth: !0
                    }, l.createElement(O._7, {
                        className: "connection-component__header",
                        display: O.Q.Flex,
                        flexDirection: O.S.Row,
                        alignItems: O.c.Center
                    }, l.createElement(O._7, {
                        className: "connection-component__header-text",
                        display: O.Q.Flex,
                        flexDirection: O.S.Column,
                        flexGrow: 1
                    }, l.createElement(O.P, {
                        fontSize: O.U.Size5,
                        "data-test-selector": "connection-title-test-selector",
                        bold: !0
                    }, this.props.title), this.props.subtitle && l.createElement(O._1, {
                        padding: {
                            top: 1
                        }
                    }, l.createElement(O.P, {
                        "data-test-selector": "connection-subtitle-test-selector"
                    }, this.props.subtitle))), this.renderButton()), this.renderError(), this.props.body && l.createElement(O._7, {
                        className: "connection-component__body",
                        "data-test-selector": "connection-body-test-selector",
                        padding: {
                            top: 2
                        }
                    }, this.props.body), this.props.footer && l.createElement(O._30, {
                        className: "connection-component__footer",
                        "data-test-selector": "connection-footer-test-selector",
                        color: O.J.Alt2,
                        padding: {
                            top: 2
                        }
                    }, this.props.footer))))
                }, t.prototype.renderError = function() {
                    if (this.props.error) {
                        var e = Object(d.d)("Failed to connect. Please try again.", "ThirdPartyConnection"),
                            t = Object(d.d)("Failed to disconnect. Please try again.", "ThirdPartyConnection"),
                            n = this.props.connected ? t : e;
                        return l.createElement(O._7, {
                            padding: {
                                top: .5
                            },
                            alignSelf: O.d.End,
                            "data-test-selector": "connection-error-test-selector"
                        }, l.createElement(O.P, {
                            color: O.J.Error
                        }, n))
                    }
                }, t.prototype.renderButton = function() {
                    var e = Object(d.d)("Disconnect", "ThirdPartyConnection"),
                        t = Object(d.d)("Connect", "ThirdPartyConnection"),
                        n = this.props.working ? O.z.Loading : O.z.Default;
                    return l.createElement(O.u, {
                        type: O.A.Hollow,
                        state: n,
                        onClick: this.handleClick
                    }, this.props.connected ? e : t)
                }, t
            }(l.Component));
        n("ocV2");
        ! function(e) {
            e.NorthAmerica = "us", e.Europe = "eu", e.Korea = "kr", e.Taiwan = "tw", e.China = "cn", e.SouthEastAsia = "sea"
        }(Me || (Me = {}));
        var ze = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1,
                        region: Me.NorthAmerica
                    }, t.logger = d.j.withCategory("BlizzardConnection"), t.handleClick = function() {
                        t.setState({
                            error: !1
                        }), t.connected ? t.disconnect() : t.connect()
                    }, t.handleRegionSelect = function(e) {
                        switch (e.currentTarget.value) {
                            case Me.NorthAmerica:
                                return void t.setState({
                                    region: Me.NorthAmerica
                                });
                            case Me.Europe:
                                return void t.setState({
                                    region: Me.Europe
                                });
                            case Me.Korea:
                                return void t.setState({
                                    region: Me.Korea
                                });
                            case Me.Taiwan:
                                return void t.setState({
                                    region: Me.Taiwan
                                });
                            case Me.China:
                                return void t.setState({
                                    region: Me.China
                                });
                            case Me.SouthEastAsia:
                                return void t.setState({
                                    region: Me.SouthEastAsia
                                });
                            default:
                                return
                        }
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Object(d.d)("Blizzard Battle.net", "BlizzardConnection"),
                        t = Object(d.d)("By linking your accounts, you agree that Blizzard may provide Twitch with your Battle Tag and certain other account and game information such as your Battle.net ID and skill ranking, and Twitch may provide such things as your Twitch viewing activity to Blizzard. Such information shall be transferred to the companies' locations in the U.S. If you change your mind you must de-link your accounts through both Battle.net and Twitch for both sides to stop sharing data. Once you disconnect your accounts, each party will stop using your personally identifiable information provided by the other party.", "BlizzardConnection"),
                        n = this.props.data.loading;
                    return l.createElement(Be, {
                        image: l.createElement(Re, {
                            type: Pe.Blizzard
                        }),
                        title: e,
                        subtitle: this.getSubtitle(),
                        body: this.renderBody(),
                        footer: t,
                        error: this.state.error,
                        connected: this.connected,
                        onClick: this.handleClick,
                        working: this.state.working || n
                    })
                }, t.prototype.renderBody = function() {
                    if (!this.connected) return l.createElement(O._7, {
                        display: O.Q.Flex
                    }, l.createElement(O._7, {
                        className: "blizzard-connection__region-select"
                    }, l.createElement(O._26, {
                        value: this.state.region,
                        onChange: this.handleRegionSelect
                    }, l.createElement("option", {
                        value: Me.NorthAmerica
                    }, this.getRegionText(Me.NorthAmerica)), l.createElement("option", {
                        value: Me.Europe
                    }, this.getRegionText(Me.Europe)), l.createElement("option", {
                        value: Me.Korea
                    }, this.getRegionText(Me.Korea)), l.createElement("option", {
                        value: Me.Taiwan
                    }, this.getRegionText(Me.Taiwan)), l.createElement("option", {
                        value: Me.China
                    }, this.getRegionText(Me.China)), l.createElement("option", {
                        value: Me.SouthEastAsia
                    }, this.getRegionText(Me.SouthEastAsia)))))
                }, t.prototype.getSubtitle = function() {
                    return this.connected ? this.props.data.currentUser.blizzardAccount.battleTag + " - " + this.getRegionText(this.props.data.currentUser.blizzardAccount.region) : Object(d.d)("Connect your Blizzard games and Twitch activity", "BlizzardConnection")
                }, t.prototype.getRegionText = function(e) {
                    switch (e) {
                        case Me.NorthAmerica:
                            return Object(d.d)("North America (US)", "BlizzardConnection");
                        case Me.Europe:
                            return Object(d.d)("Europe (EU)", "BlizzardConnection");
                        case Me.Korea:
                            return Object(d.d)("Korea (KR)", "BlizzardConnection");
                        case Me.Taiwan:
                            return Object(d.d)("Taiwan (TW)", "BlizzardConnection");
                        case Me.China:
                            return Object(d.d)("China (CN)", "BlizzardConnection");
                        case Me.SouthEastAsia:
                            return Object(d.d)("South East Asia (SEA)", "BlizzardConnection");
                        default:
                            return
                    }
                }, t.prototype.disconnect = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return c.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if (!this.userID) return this.logger.debug("Unable to disconnect from Blizzard - current user's ID is unknown."), [2];
                                    this.setState({
                                        working: !0
                                    }), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, 4, 5]), e = "/v5/blizzard/" + this.userID, [4, ae.a.deleteOrThrow(e)];
                                case 2:
                                    return n.sent(), this.props.data.refetch(), [3, 5];
                                case 3:
                                    return t = n.sent(), this.logger.warn("Failed to disconnect from Blizzard", {
                                        error: t
                                    }), this.setState({
                                        error: !0
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.connect = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, i = this;
                        return c.__generator(this, function(r) {
                            return this.userID ? (this.setState({
                                working: !0
                            }), e = Fe.stringify({
                                region: this.state.region
                            }), t = d.a.apiBaseURL + "/v5/blizzard/" + this.userID + "/auth?" + e, this.logger.info(t), (n = window.open(t, "blizzardPopout", "width=480,height=640")) ? (Object(Ae.a)(n, function(e) {
                                i.logger.debug("Blizzard connection window closed", {
                                    success: e
                                }), i.setState({
                                    error: !e,
                                    working: !1
                                }), i.props.data.refetch()
                            }), [2]) : (this.setState({
                                working: !1,
                                error: !0
                            }), [2])) : (this.logger.debug("Unable to start Blizzard connection - current user's ID is unknown."), [2])
                        })
                    })
                }, Object.defineProperty(t.prototype, "userID", {
                    get: function() {
                        return this.props.data.currentUser && this.props.data.currentUser.id
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "connected", {
                    get: function() {
                        return !!(this.props.data.currentUser && this.props.data.currentUser.accountConnections.blizzard && this.props.data.currentUser.accountConnections.blizzard.hasConnection && this.props.data.currentUser.blizzardAccount)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(l.Component),
            qe = n("pkUp"),
            Ve = Object(w.a)(qe)(ze),
            He = (n("XCQF"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClickDisconnect = function() {
                        t.props.onClickDisconnect(t.props.id)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(Be, {
                        image: l.createElement(m.b, {
                            className: "extension-connection__icon",
                            src: this.iconOrFallback
                        }),
                        title: this.renderNameLink(),
                        subtitle: this.props.author.length > 0 ? Object(d.d)("by {author}", {
                            author: this.props.author
                        }, "ExtensionConnection") : void 0,
                        footer: this.summaryOrFallbackMessage,
                        onClick: this.onClickDisconnect,
                        connected: !0,
                        error: this.props.disconnectError,
                        working: this.props.working
                    })
                }, t.prototype.renderNameLink = function() {
                    return 0 === this.props.name.length ? this.props.id : l.createElement(O.N, {
                        to: "/ext/" + this.props.id
                    }, this.props.name)
                }, Object.defineProperty(t.prototype, "iconOrFallback", {
                    get: function() {
                        return this.props.iconURL.length > 0 ? this.props.iconURL : "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png"
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "summaryOrFallbackMessage", {
                    get: function() {
                        return this.props.summary.length > 0 ? this.props.summary : Object(d.d)("This extension no longer exists", "ExtensionConnection")
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(l.Component)),
            We = Object(m.d)("ExtensionConnection", {
                autoReportInteractive: !0
            })(He),
            Ge = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        fetchError: !1,
                        linkedExtensionsByID: {}
                    }, t.logger = d.j.withCategory("extension-connection-list"), t.onClickDisconnect = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        this.logger.debug("Disconnecting", {
                                            id: e
                                        }), this.setExtensionState(e, {
                                            working: !0
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, ae.a.putOrThrow("/v5/extensions/" + e + "/auth/link_user", {
                                            body: {
                                                show_user: !1
                                            }
                                        })];
                                    case 2:
                                        return t.sent(), this.setState(function(t) {
                                            var n = c.__assign({}, t.linkedExtensionsByID);
                                            return delete n[e], {
                                                linkedExtensionsByID: n
                                            }
                                        }), [3, 4];
                                    case 3:
                                        return t.sent(), this.logger.warn("Failed to disconnect extension due to error", {
                                            sessionUser: this.props.sessionUser,
                                            extensionID: e
                                        }), this.setExtensionState(e, {
                                            disconnectError: !0,
                                            working: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchExtensionConnections()
                }, t.prototype.render = function() {
                    if (this.state.fetchError) return this.renderEmptyState(!0);
                    for (var e = [], t = 0, n = Object.keys(this.state.linkedExtensionsByID); t < n.length; t++) {
                        var i = n[t],
                            r = this.state.linkedExtensionsByID[i];
                        e.push(l.createElement(We, c.__assign({
                            key: r.id,
                            onClickDisconnect: this.onClickDisconnect
                        }, r)))
                    }
                    return 0 === e.length ? this.renderEmptyState(!1) : l.createElement(l.Fragment, null, e)
                }, t.prototype.renderEmptyState = function(e) {
                    var t = e ? Object(d.d)("Sorry, something went wrong fetching your extension connections. Please try again later.", "ExtensionConnectionList") : Object(d.d)("You have not shared your Twitch username with any extensions.", "ExtensionConnectionList");
                    return l.createElement(je.a, null, l.createElement(O.P, {
                        color: e ? O.J.Error : void 0
                    }, t))
                }, t.prototype.fetchExtensionConnections = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, i, r, a, o = this;
                        return c.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    e = {}, t = !1, s.label = 1;
                                case 1:
                                    return s.trys.push([1, 3, , 4]), [4, ae.a.get("/v5/extensions/linked")];
                                case 2:
                                    if ((n = s.sent()) && n.body && n.body.extensions.length > 0)
                                        for (i = 0, r = n.body.extensions; i < r.length; i++) a = r[i], e[a.id] = {
                                            author: a.author_name,
                                            disconnectError: !1,
                                            iconURL: a.icon_url,
                                            id: a.id,
                                            name: a.name,
                                            summary: a.summary,
                                            working: !1
                                        };
                                    else {
                                        if (n && n.body && 0 === n.body.extensions.length) return this.props.latencyTracking.reportInteractive(), [2];
                                        this.logger.warn("Failed to fetch extension connections for user due to unexpected response", {
                                            sessionUser: this.props.sessionUser,
                                            response: n
                                        }), t = !0
                                    }
                                    return [3, 4];
                                case 3:
                                    return s.sent(), this.logger.warn("Failed to fetch extension connections for user due to network error", {
                                        sessionUser: this.props.sessionUser
                                    }), t = !0, [3, 4];
                                case 4:
                                    return this.setState({
                                        fetchError: t,
                                        linkedExtensionsByID: e
                                    }, function() {
                                        return o.props.latencyTracking.reportInteractive()
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.setExtensionState = function(e, t) {
                    this.setState(function(n) {
                        return {
                            linkedExtensionsByID: c.__assign({}, n.linkedExtensionsByID, (i = {}, i[e] = c.__assign({}, n.linkedExtensionsByID[e], t), i))
                        };
                        var i
                    })
                }, t
            }(l.Component),
            Qe = Object(m.d)("ExtensionsConnectionList")(Ge);
        var Ye, Je = Object(i.b)(function(e) {
                return {
                    sessionUser: Object(s.c)(e)
                }
            })(Qe),
            Ke = n("h08i"),
            Xe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !t.facebookConnection
                    }, t.handleClick = function() {
                        t.setState({
                            error: !1
                        }), t.connected ? t.disconnect() : t.connect()
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    !this.facebookConnection && e.data.currentUser && this.setState({
                        working: !1
                    })
                }, t.prototype.render = function() {
                    var e = Object(d.d)("Facebook", "FacebookConnection"),
                        t = Object(d.d)("One-click log in to Twitch with your Facebook account", "FacebookConnection"),
                        n = Object(d.d)("By connecting your account with Facebook, you acknowledge and agree that information you choose to share will be uploaded to these services and may be viewed by these services and other users of these services.", "FacebookConnection");
                    return l.createElement(Be, {
                        image: l.createElement(Re, {
                            type: Pe.Facebook
                        }),
                        title: e,
                        subtitle: t,
                        footer: n,
                        connected: this.connected,
                        onClick: this.handleClick,
                        error: this.state.error,
                        working: this.state.working
                    })
                }, Object.defineProperty(t.prototype, "connected", {
                    get: function() {
                        return !(!this.facebookConnection || !this.facebookConnection.hasConnection)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "facebookConnection", {
                    get: function() {
                        return this.props.data.currentUser && this.props.data.currentUser.accountConnections && this.props.data.currentUser.accountConnections.facebook
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.connect = function() {
                    var e = this;
                    if (this.facebookConnection) {
                        this.setState({
                            working: !0
                        });
                        var t = d.a.apiBaseURL + "/v5/facebook/" + this.props.data.currentUser.id + "/auth",
                            n = window.open(t, "Twitch", "width=1024,height=637");
                        n ? Object(Ae.a)(n, function(t) {
                            t && e.updateConnectionInCache(!0), e.setState({
                                error: !t,
                                working: !1
                            })
                        }) : this.setState({
                            working: !1,
                            error: !0
                        })
                    }
                }, t.prototype.disconnect = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        return c.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    if (!this.facebookConnection) return [2];
                                    this.setState({
                                        working: !0
                                    }), e.label = 1;
                                case 1:
                                    return e.trys.push([1, 3, 4, 5]), [4, ae.a.deleteOrThrow("/v5/facebook/" + this.props.data.currentUser.id)];
                                case 2:
                                    return e.sent(), this.updateConnectionInCache(!1), [3, 5];
                                case 3:
                                    return e.sent(), this.setState({
                                        error: !0
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.updateConnectionInCache = function(e) {
                    Object(P.d)(Ke, {}, function(t) {
                        return t.currentUser.accountConnections.facebook.hasConnection = e, t
                    })
                }, t
            }(l.Component),
            $e = Object(w.a)(Ke)(Xe);
        n("WKFf");
        ! function(e) {
            e.NorthAmerica = "na", e.Brazil = "br", e.EuropeWest = "euw", e.EuropeNordicAndEast = "eune", e.Japan = "jp", e.Korea = "kr", e.LatinAmericaNorth = "lan", e.LatinAmericaSouth = "las", e.Oceanic = "oce", e.Turkey = "tr", e.Russia = "ru", e.PublicBetaEnvironment = "pbe"
        }(Ye || (Ye = {}));
        var Ze = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    connected: !1,
                    region: Ye.NorthAmerica,
                    summonerName: "",
                    error: !1,
                    working: !0
                }, t.logger = d.j.withCategory("LeagueOfLegendsConnection"), t.getData = function() {
                    return c.__awaiter(t, void 0, void 0, function() {
                        var e, t, n;
                        return c.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    if (!this.props.userID) return this.logger.info("Tried to get League of Legends connection info, but the user is not logged in."), [2];
                                    e = Fe.stringify({
                                        user_id: this.props.userID
                                    }), t = "/api/lol/summonername?" + e, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, 4, 5]), [4, ae.a.get(t)];
                                case 2:
                                    return (n = i.sent()).error || n.requestError ? this.setState({
                                        connected: !1
                                    }) : n.body && this.setState({
                                        connected: !0
                                    }), [3, 5];
                                case 3:
                                    return i.sent(), this.setState({
                                        connected: !1
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.disconnect = function() {
                    return c.__awaiter(t, void 0, void 0, function() {
                        var e, t, n, i;
                        return c.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (!this.props.userID) return this.logger.info("Tried to disconnect from League of Legends but user is not logged in."), [2];
                                    this.setState({
                                        error: !1,
                                        working: !0
                                    }), e = Fe.stringify({
                                        user_id: this.props.userID,
                                        client_id: d.a.authSettings.clientID
                                    }), t = "/api/lol/delete?" + e, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, 4, 5]), [4, ae.a.get(t)];
                                case 2:
                                    return (n = r.sent()).error || n.requestError ? (this.logger.warn("Failed to disconnect League of Legends account", {
                                        error: n.error,
                                        requestError: n.requestError
                                    }), this.setState({
                                        error: !0
                                    })) : this.setState({
                                        connected: !1
                                    }), [3, 5];
                                case 3:
                                    return i = r.sent(), this.logger.warn("Failed to disconnect League of Legends account", i), this.setState({
                                        error: !0
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.connect = function() {
                    return c.__awaiter(t, void 0, void 0, function() {
                        var e, t, n, i;
                        return c.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    if (!this.props.userID) return this.logger.info("Tried to connect to League of Legends but user is not logged in."), [2];
                                    this.setState({
                                        error: !1,
                                        working: !0
                                    }), e = Fe.stringify({
                                        user_id: this.props.userID,
                                        client_id: d.a.authSettings.clientID,
                                        summoner: this.state.summonerName,
                                        region: this.state.region
                                    }), t = "/api/lol/verify?" + e, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, 4, 5]), [4, ae.a.get(t)];
                                case 2:
                                    return n = r.sent(), n.error || n.requestError || !n.body || 0 === n.body.summoner_id || "" === n.body.summoner_name || "" === n.body.twitch_id ? (this.logger.warn("Failed to connect League of Legends account.", {
                                        error: n.error,
                                        requestError: n.requestError
                                    }), this.setState({
                                        error: !0
                                    })) : this.setState({
                                        connected: !0
                                    }), [3, 5];
                                case 3:
                                    return i = r.sent(), this.logger.warn("Failed to connect League of Legends account.", i), this.setState({
                                        error: !0
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.handleRegionSelect = function(e) {
                    t.setState({
                        region: e.currentTarget.value
                    })
                }, t.handleSummonerNameChange = function(e) {
                    t.setState({
                        summonerName: e.currentTarget.value
                    })
                }, t
            }
            return c.__extends(t, e), t.prototype.componentDidMount = function() {
                this.getData()
            }, t.prototype.render = function() {
                var e = Object(d.d)("League of Legends", "LeagueOfLegendsConnection"),
                    t = Object(d.d)("Show rank and live in-game information.", "LeagueOfLegendsConnection"),
                    n = Object(d.d)("By connecting your Riot [or, League of Legends] account, you agree to share with Twitch, and allow Twitch to make public, metadata regarding your user profile, gameplay history, and statistics associated with League of Legends. If you no longer want to share this information, please disconnect your accounts.", "LeagueOfLegendsConnection");
                return l.createElement(Be, {
                    image: l.createElement(Re, {
                        type: Pe.LeagueOfLegends
                    }),
                    title: e,
                    subtitle: t,
                    body: this.renderBody(),
                    connected: this.state.connected,
                    onClick: this.state.connected ? this.disconnect : this.connect,
                    footer: n,
                    error: this.state.error,
                    working: this.state.working
                })
            }, t.prototype.renderBody = function() {
                var e = [{
                    label: Object(d.d)("North America", "LeagueOfLegendsConnection"),
                    value: Ye.NorthAmerica
                }, {
                    label: Object(d.d)("Brazil", "LeagueOfLegendsConnection"),
                    value: Ye.Brazil
                }, {
                    label: Object(d.d)("Europe West", "LeagueOfLegendsConnection"),
                    value: Ye.EuropeWest
                }, {
                    label: Object(d.d)("Europe Nordic & East", "LeagueOfLegendsConnection"),
                    value: Ye.EuropeNordicAndEast
                }, {
                    label: Object(d.d)("Japan", "LeagueOfLegendsConnection"),
                    value: Ye.Japan
                }, {
                    label: Object(d.d)("Korea", "LeagueOfLegendsConnection"),
                    value: Ye.Korea
                }, {
                    label: Object(d.d)("Latin America North", "LeagueOfLegendsConnection"),
                    value: Ye.LatinAmericaNorth
                }, {
                    label: Object(d.d)("Latin America South", "LeagueOfLegendsConnection"),
                    value: Ye.LatinAmericaSouth
                }, {
                    label: Object(d.d)("Oceanic", "LeagueOfLegendsConnection"),
                    value: Ye.Oceanic
                }, {
                    label: Object(d.d)("Turkey", "LeagueOfLegendsConnection"),
                    value: Ye.Turkey
                }, {
                    label: Object(d.d)("Russia", "LeagueOfLegendsConnection"),
                    value: Ye.Russia
                }, {
                    label: Object(d.d)("Public Beta Environment", "LeagueOfLegendsConnection"),
                    value: Ye.PublicBetaEnvironment
                }];
                return l.createElement(O._7, {
                    className: "league-of-legends-connection__body",
                    "data-test-selector": "league-connection-body"
                }, l.createElement(O._7, {
                    padding: {
                        bottom: 1
                    }
                }, l.createElement(O._7, null, Object(d.d)("1. Log into your League of Legends account. Go to the verification section of your settings, and copy the following into the field: {code}", {
                    code: l.createElement(O.P, {
                        type: O._44.Span,
                        bold: !0
                    }, "ttv-" + this.props.userID)
                }, "LeagueOfLegendsConnection")), l.createElement(O._7, null, Object(d.d)("2. Enter your summoner name below, select your region, and press the connect button to link your accounts! Note, you may need to wait up to 30 seconds for your changes to take effect.", "LeagueOfLegendsConnection"))), l.createElement(O._7, {
                    display: O.Q.Flex
                }, l.createElement(O._7, {
                    padding: {
                        right: 1
                    },
                    flexGrow: 1
                }, l.createElement(O._3, {
                    type: O._4.Text,
                    placeholder: Object(d.d)("Enter Summoner Name", "LeagueOfLegendsConnection"),
                    value: this.state.summonerName,
                    onChange: this.handleSummonerNameChange
                })), l.createElement(O._7, {
                    flexGrow: 1
                }, l.createElement(O._26, {
                    value: this.state.region,
                    onChange: this.handleRegionSelect
                }, e.map(function(e) {
                    return l.createElement("option", {
                        key: e.value,
                        value: e.value
                    }, e.label)
                })))))
            }, t
        }(l.Component);
        var et = Object(i.b)(function(e) {
            var t = Object(s.c)(e);
            return {
                userID: t && t.id
            }
        })(Ze);

        function tt(e) {
            return "OAuth " + e.authToken
        }
        var nt, it = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1
                    }, t.onClickDisconnect = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e;
                            return c.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        this.setState({
                                            error: !1,
                                            working: !0
                                        }), t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, function(e, t) {
                                            var n = Object(s.c)(d.o.store.getState());
                                            if (!n) return fetch(e, t);
                                            var i, r = t ? t.headers : {};
                                            if (Array.isArray(r)) {
                                                var a = (i = r.slice()).findIndex(function(e) {
                                                    return "Authorization" === e[0]
                                                });
                                                a >= 0 && i.splice(a, 1), i.push(["Authorization", tt(n)])
                                            } else r instanceof Headers ? (i = new Headers(r)).set("Authorization", tt(n)) : i = c.__assign({}, r, {
                                                Authorization: tt(n)
                                            });
                                            return fetch(e, c.__assign({}, t, {
                                                headers: i
                                            }))
                                        }("https://id.twitch.tv/oauth2/authorization/" + this.props.clientID, {
                                            method: "DELETE"
                                        })];
                                    case 2:
                                        if (!t.sent().ok) throw new Error("Non-OK response from id.twitch.tv");
                                        return this.props.onDisconnectSuccess(this.props.clientID), [3, 4];
                                    case 3:
                                        return e = t.sent(), d.j.withCategory("other-connection").warn("OWL client auth disconnect failed.", {
                                            error: e
                                        }), this.setState({
                                            error: !0,
                                            working: !1
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(Be, {
                        connected: !0,
                        error: this.state.error,
                        onClick: this.onClickDisconnect,
                        title: this.props.name,
                        subtitle: this.renderSubtitle(),
                        working: this.state.working
                    })
                }, t.prototype.renderSubtitle = function() {
                    if (this.props.createdAt) return Object(d.d)("Connected {duration}", {
                        duration: Object(d.g)(new Date(this.props.createdAt))
                    }, "OtherConnection")
                }, t
            }(l.Component),
            rt = n("WYac"),
            at = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.data.currentUser && this.props.data.currentUser.clientAuthorizations ? 0 === this.props.data.currentUser.clientAuthorizations.length ? this.renderEmptyState(!1) : l.createElement(l.Fragment, null, this.props.data.currentUser.clientAuthorizations.map(function(t) {
                        return l.createElement(it, {
                            key: t.clientID,
                            clientID: t.clientID,
                            createdAt: t.createdAt,
                            name: t.clientName,
                            onDisconnectSuccess: e.onDisconnectSuccess
                        })
                    })) : this.props.data.loading ? l.createElement(O._13, null) : this.renderEmptyState(!0)
                }, t.prototype.renderEmptyState = function(e) {
                    var t = e ? Object(d.d)("Sorry, we couldn't fetch your authorized apps right now. Try again later.", "OtherConnectionsList") : Object(d.d)("You have not authorized any apps.", "OtherConnectionsList");
                    return l.createElement(je.a, null, l.createElement(O.P, {
                        color: e ? O.J.Error : void 0
                    }, t))
                }, t.prototype.onDisconnectSuccess = function(e) {
                    Object(P.d)(rt, {}, function(t) {
                        if (!t.currentUser || !t.currentUser.clientAuthorizations) return t;
                        var n = t.currentUser.clientAuthorizations.slice();
                        return n.splice(n.findIndex(function(t) {
                            return t.clientID === e
                        }), 1), {
                            currentUser: c.__assign({}, t.currentUser, {
                                clientAuthorizations: n
                            })
                        }
                    })
                }, t
            }(l.Component),
            ot = Object(r.d)(Object(m.d)("OtherConnectionsList"), Object(w.a)(rt))(at),
            st = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1
                    }, t.logger = d.j.withCategory("PSNConnection"), t.handleClick = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            error: !1,
                                            working: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, 4, 5]), [4, Promise.all([ae.a.post("/api/platform/psn/disconnect"), ae.a.post("/api/platform/psn_dev/disconnect"), ae.a.post("/api/platform/psn_cert/disconnect")])];
                                    case 2:
                                        return e = n.sent(), e.every(function(e) {
                                            return !(!e.error && !e.requestError)
                                        }) ? (this.logger.warn("Failed to disconnect from PSN"), this.setState({
                                            error: !0
                                        })) : this.props.data && this.props.data.refetch(), [3, 5];
                                    case 3:
                                        return t = n.sent(), this.logger.warn("Failed to disconnect from PSN", t), this.setState({
                                            error: !0
                                        }), [3, 5];
                                    case 4:
                                        return this.setState({
                                            working: !1
                                        }), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    if (!this.isUserConnected()) return null;
                    var e = Object(d.d)("PlayStation", "PSNConnectionPresentation"),
                        t = Object(d.d)("Log in on your PlayStation", "PSNConnectionPresentation");
                    return l.createElement(Be, {
                        image: l.createElement(Re, {
                            type: Pe.PSN
                        }),
                        title: e,
                        subtitle: t,
                        connected: !0,
                        onClick: this.handleClick,
                        error: this.state.error,
                        working: this.state.working
                    })
                }, t.prototype.isUserConnected = function() {
                    return !!(this.props.data.currentUser && this.props.data.currentUser.ssoLinks && this.props.data.currentUser.ssoLinks[0] && this.props.data.currentUser.ssoLinks[0].app && this.props.data.currentUser.ssoLinks[0].ssoID)
                }, t
            }(l.Component),
            ct = n("Op8X"),
            lt = Object(w.a)(ct)(st),
            ut = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1
                    }, t.logger = d.j.withCategory("RokuConnection"), t.handleClick = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i, r;
                            return c.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        this.setState({
                                            error: !1,
                                            working: !0
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, 4, 5]), e = "/api/roku/disconnect", [4, ae.a.post(e)];
                                    case 2:
                                        return t = a.sent(), n = t.error, i = t.requestError, n || i ? (this.logger.warn("Failed to disconnect from Roku", {
                                            error: n,
                                            requestError: i
                                        }), this.setState({
                                            error: !0
                                        })) : this.props.data && this.props.data.refetch(), [3, 5];
                                    case 3:
                                        return r = a.sent(), this.logger.warn("Failed to disconnect from Roku", r), this.setState({
                                            error: !0
                                        }), [3, 5];
                                    case 4:
                                        return this.setState({
                                            working: !1
                                        }), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    if (!this.isUserConnected()) return null;
                    var e = Object(d.d)("Roku", "RokuConnectionPresentation"),
                        t = Object(d.d)("Log in on your Roku", "RokuConnectionPresentation");
                    return l.createElement(Be, {
                        image: l.createElement(Re, {
                            type: Pe.Roku
                        }),
                        title: e,
                        subtitle: t,
                        connected: !0,
                        onClick: this.handleClick,
                        error: this.state.error,
                        working: this.state.working
                    })
                }, t.prototype.isUserConnected = function() {
                    return !!(this.props.data && this.props.data.currentUser && this.props.data.currentUser.ssoLinks && this.props.data.currentUser.ssoLinks[0] && this.props.data.currentUser.ssoLinks[0].app && this.props.data.currentUser.ssoLinks[0].ssoID)
                }, t
            }(l.Component),
            dt = n("iLlo"),
            pt = Object(w.a)(dt)(ut),
            mt = n("jZb3"),
            gt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1
                    }, t.logger = d.j.withCategory("SteamConnection"), t.handleClick = function() {
                        t.setState({
                            error: !1
                        }), t.connected ? t.disconnect() : t.connect()
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Object(d.d)("Steam", "SteamConnectionComponent"),
                        t = Object(d.d)("Share your game meta data when you go live", "SteamConnectionComponent"),
                        n = Object(d.d)("By connecting your Steam account, you acknowledge and agree that your Steam ID will be publicly visible in the Twitch API and that Steam will automatically receive information about the Steam content you view while your accounts are connected. If you do not want this information shared, please disconnect your accounts.", "SteamConnectionComponent"),
                        i = this.props.data.loading;
                    return l.createElement(Be, {
                        image: l.createElement(Re, {
                            type: Pe.Steam
                        }),
                        title: e,
                        subtitle: t,
                        footer: n,
                        error: this.state.error,
                        connected: this.connected,
                        onClick: this.handleClick,
                        working: this.state.working || i
                    })
                }, t.prototype.disconnect = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return c.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if (!this.userID) return this.logger.debug("Unable to disconnect from steam - current user's ID is unknown."), [2];
                                    this.setState({
                                        working: !0
                                    }), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, 4, 5]), e = "/v5/steam/" + this.userID, [4, ae.a.deleteOrThrow(e)];
                                case 2:
                                    return n.sent(), this.updateConnectionInCache(!1), [3, 5];
                                case 3:
                                    return t = n.sent(), this.logger.warn("Failed to disconnect from Steam", {
                                        error: t
                                    }), this.setState({
                                        error: !0
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.connect = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, i = this;
                        return c.__generator(this, function(r) {
                            return this.userID ? (this.setState({
                                working: !0
                            }), e = Fe.stringify({
                                client_id: d.a.legacyClientID
                            }), t = d.a.apiBaseURL + "/v5/steam/" + this.userID + "/auth?" + e, (n = window.open(t, "steamPopout", "width=1024,height=780")) ? (Object(Ae.a)(n, function(e) {
                                i.logger.debug("Steam connection window closed", {
                                    success: e
                                }), i.setState({
                                    error: !e,
                                    working: !1
                                }), i.updateConnectionInCache(e)
                            }), [2]) : (this.setState({
                                working: !1,
                                error: !0
                            }), [2])) : (this.logger.debug("Unable to start Steam connection - current user's ID is unknown."), [2])
                        })
                    })
                }, t.prototype.updateConnectionInCache = function(e) {
                    Object(P.d)(mt, {}, function(t) {
                        return t.currentUser && t.currentUser.accountConnections.steam && (t.currentUser.accountConnections.steam.hasConnection = e), t
                    })
                }, Object.defineProperty(t.prototype, "userID", {
                    get: function() {
                        return this.props.data.currentUser && this.props.data.currentUser.id
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "connected", {
                    get: function() {
                        return !!(this.props.data.currentUser && this.props.data.currentUser.accountConnections.steam && this.props.data.currentUser.accountConnections.steam.hasConnection)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(l.Component),
            ht = Object(w.a)(mt)(gt),
            ft = n("st1H"),
            vt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1
                    }, t.logger = d.j.withCategory("TwitterConnection"), t.handleClick = function() {
                        t.setState({
                            error: !1
                        }), t.connected ? t.disconnect() : t.connect()
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Object(d.d)("Twitter", "TwitterConnection"),
                        t = Object(d.d)("Tweet your Channel Feed posts to your followers.", "TwitterConnection"),
                        n = Object(d.d)("By connecting your account with Twitter, you acknowledge and agree that information you choose to share will be uploaded to these services and may be viewed by these services and other users of these services.", "TwitterConnection"),
                        i = this.props.data.loading;
                    return l.createElement(Be, {
                        image: l.createElement(Re, {
                            type: Pe.Twitter
                        }),
                        title: e,
                        subtitle: t,
                        footer: n,
                        error: this.state.error,
                        connected: this.connected,
                        working: this.state.working || i,
                        onClick: this.handleClick
                    })
                }, t.prototype.connect = function() {
                    var e = this;
                    if (this.userID) {
                        this.setState({
                            working: !0
                        });
                        var t = d.a.apiBaseURL + "/v5/twitter/" + this.userID + "/auth",
                            n = window.open(t, "twitterPopout", "width=760,height=760");
                        n ? Object(Ae.a)(n, function(t) {
                            e.logger.debug("Twitter connection window closed", {
                                success: t
                            }), e.setState({
                                error: !t,
                                working: !1
                            }), e.updateConnectionInCache(t)
                        }) : this.setState({
                            working: !1,
                            error: !0
                        })
                    } else this.logger.debug("Unable to start Twitter connection - current user's ID is unknown.")
                }, t.prototype.disconnect = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return c.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if (!this.userID) return this.logger.debug("Unable to disconnect from Twitter - current user's ID is unknown."), [2];
                                    this.setState({
                                        working: !0
                                    }), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, 4, 5]), e = "/v5/twitter/" + this.userID, [4, ae.a.deleteOrThrow(e)];
                                case 2:
                                    return n.sent(), this.updateConnectionInCache(!1), [3, 5];
                                case 3:
                                    return t = n.sent(), this.logger.warn("Failed to disconnect from Twitter", {
                                        error: t
                                    }), this.setState({
                                        error: !0
                                    }), [3, 5];
                                case 4:
                                    return this.setState({
                                        working: !1
                                    }), [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.updateConnectionInCache = function(e) {
                    Object(P.d)(ft, {}, function(t) {
                        return t.currentUser && t.currentUser.accountConnections.twitter && (t.currentUser.accountConnections.twitter.hasConnection = e), t
                    })
                }, Object.defineProperty(t.prototype, "userID", {
                    get: function() {
                        return this.props.data.currentUser && this.props.data.currentUser.id
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "connected", {
                    get: function() {
                        return !!(this.props.data.currentUser && this.props.data.currentUser.accountConnections.twitter && this.props.data.currentUser.accountConnections.twitter.hasConnection)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(l.Component),
            bt = Object(w.a)(ft)(vt),
            yt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1
                    }, t.logger = d.j.withCategory("Xbox360Connection"), t.handleClick = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i, r, a;
                            return c.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        this.setState({
                                            error: !1
                                        }), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), e = Fe.stringify({
                                            app: "xb360"
                                        }), t = "/api/xbox/disconnect?" + e, [4, ae.a.post(t)];
                                    case 2:
                                        return n = o.sent(), i = n.error, r = n.requestError, i || r ? (this.logger.warn("Failed to disconnect from Xbox 360", {
                                            error: i,
                                            requestError: r
                                        }), this.setState({
                                            error: !0
                                        })) : this.props.data && this.props.data.refetch(), [3, 4];
                                    case 3:
                                        return a = o.sent(), this.logger.warn("Failed to disconnect from Xbox 360", a), this.setState({
                                            error: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    if (!this.isUserConnected()) return null;
                    var e = Object(d.d)("Xbox 360", "Xbox360ConnectionPresentation"),
                        t = Object(d.d)("Log in on your Xbox 360", "Xbox360ConnectionPresentation");
                    return l.createElement(Be, {
                        image: l.createElement(Re, {
                            type: Pe.Xbox
                        }),
                        title: e,
                        subtitle: t,
                        connected: !0,
                        onClick: this.handleClick,
                        error: this.state.error
                    })
                }, t.prototype.isUserConnected = function() {
                    return !!(this.props.data.currentUser && this.props.data.currentUser.ssoLinks && this.props.data.currentUser.ssoLinks[0] && this.props.data.currentUser.ssoLinks[0].app && this.props.data.currentUser.ssoLinks[0].ssoID)
                }, t
            }(l.Component),
            St = n("upQt"),
            kt = Object(w.a)(St)(yt),
            _t = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        working: !1
                    }, t.logger = d.j.withCategory("XboxOneConnection"), t.handleClick = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i, r, a;
                            return c.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        this.setState({
                                            error: !1,
                                            working: !0
                                        }), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, 4, 5]), e = Fe.stringify({
                                            app: "xb1"
                                        }), t = "/api/xbox/disconnect?" + e, [4, ae.a.post(t)];
                                    case 2:
                                        return n = o.sent(), i = n.error, r = n.requestError, i || r ? (this.logger.warn("Failed to disconnect from Xbox One", {
                                            error: i,
                                            requestError: r
                                        }), this.setState({
                                            error: !0
                                        })) : this.props.data && this.props.data.refetch(), [3, 5];
                                    case 3:
                                        return a = o.sent(), this.logger.warn("Failed to disconnect from Xbox One", a), this.setState({
                                            error: !0
                                        }), [3, 5];
                                    case 4:
                                        return this.setState({
                                            working: !1
                                        }), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    if (!this.isUserConnected()) return null;
                    var e = Object(d.d)("Xbox One", "XboxOneConnectionPresentation"),
                        t = Object(d.d)("Log in and Broadcast directly from your console", "XboxOneConnectionPresentation");
                    return l.createElement(Be, {
                        image: l.createElement(Re, {
                            type: Pe.Xbox
                        }),
                        title: e,
                        subtitle: t,
                        connected: !0,
                        onClick: this.handleClick,
                        error: this.state.error,
                        working: this.state.working
                    })
                }, t.prototype.isUserConnected = function() {
                    return !!(this.props.data && this.props.data.currentUser && this.props.data.currentUser.ssoLinks && this.props.data.currentUser.ssoLinks[0] && this.props.data.currentUser.ssoLinks[0].app && this.props.data.currentUser.ssoLinks[0].ssoID)
                }, t
            }(l.Component),
            Et = n("UAbV"),
            Ct = Object(w.a)(Et)(_t),
            wt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClick = function() {}, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Object(d.d)("Youtube", "YoutubeConnectionComponent"),
                        t = Object(d.d)("Export archives and enable Live Annotation", "YoutubeConnectionComponent"),
                        n = Object(d.d)("Automatically notify your Youtube viewers when you are live on Twitch. You can change this from your Twitch account settings later.", "YoutubeConnectionComponent");
                    return l.createElement(Be, {
                        image: l.createElement(Re, {
                            type: Pe.Youtube
                        }),
                        title: e,
                        subtitle: t,
                        footer: n,
                        connected: !1,
                        onClick: this.handleClick
                    })
                }, t
            }(l.Component),
            Nt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return d.a.buildType === v.a.Production ? null : l.createElement("div", null, l.createElement(k.a, {
                        title: Object(d.d)("Recommended Connections", "SettingsConnectionsPage"),
                        description: Object(d.d)("Manage your connected accounts and services", "SettingsConnectionsPage")
                    }), l.createElement(S.a, null, l.createElement(Ve, null), l.createElement(ht, null), l.createElement(wt, null), l.createElement($e, null), l.createElement(bt, null), l.createElement(et, null), l.createElement(Ct, null), l.createElement(kt, null), l.createElement(lt, null), l.createElement(pt, null)), l.createElement(k.a, {
                        title: Object(d.d)("Extensions Connections", "SettingsConnectionsPage"),
                        description: Object(d.d)("You have shared your Twitch username with these extensions", "SettingsConnectionsPage")
                    }), l.createElement(S.a, null, l.createElement(Je, null)), l.createElement(k.a, {
                        title: Object(d.d)("Other Connections", "SettingsConnectionsPage"),
                        description: Object(d.d)("You have authorized these apps to use your Twitch account", "SettingsConnectionsPage")
                    }), l.createElement(S.a, null, l.createElement(ot, null)), l.createElement(k.a, {
                        title: Object(d.d)("Developer Applications", "SettingsConnectionsPage"),
                        description: Object(d.d)("Developer Application management has moved to {devPortalURL}", {
                            devPortalURL: l.createElement(O.N, {
                                to: "https://dev.twitch.tv"
                            }, "https://dev.twitch.tv")
                        }, "SettingsConnectionsPage")
                    }))
                }, t = c.__decorate([Object(m.d)("SettingsConnectionsPage", {
                    autoReportInteractive: !0,
                    destination: b.a.SettingsConnections
                }), Object(f.a)({
                    location: y.PageviewLocation.SettingsPage
                })], t)
            }(l.Component),
            Ot = n("LBNC"),
            Ut = n("UbVv"),
            jt = n("zCIC"),
            Dt = (n("hPJb"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.userId, t.props.isEnabled)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(O._30, {
                        className: "advanced-notification-settings-toggle",
                        display: O.Q.Flex,
                        justifyContent: O._6.Between,
                        background: O.m.Base,
                        padding: {
                            x: 5,
                            y: 1
                        },
                        borderBottom: !0
                    }, l.createElement(O._7, {
                        margin: {
                            left: 5
                        },
                        display: O.Q.Flex,
                        flexGrow: 1,
                        alignItems: O.c.Center,
                        flexWrap: O.T.NoWrap
                    }, l.createElement(O._7, {
                        display: O.Q.Flex,
                        flexGrow: 1,
                        flexWrap: O.T.NoWrap
                    }, l.createElement(O._7, {
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, l.createElement(O._5, {
                        linkTo: "/" + this.props.login
                    }, l.createElement(O.l, {
                        src: this.props.thumbnail,
                        alt: this.props.text,
                        size: 40
                    }))), l.createElement(O._7, {
                        flexGrow: 1,
                        display: O.Q.Flex,
                        flexDirection: O.S.Column
                    }, l.createElement(O.P, {
                        fontSize: O.U.Size5
                    }, l.createElement(_.a, {
                        to: "/" + this.props.login
                    }, this.props.text)), l.createElement(O.P, {
                        type: O._44.Span,
                        color: O.J.Alt2
                    }, this.props.description))), l.createElement(O._7, {
                        display: O.Q.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement(O._7, {
                        margin: {
                            right: 1
                        }
                    }, l.createElement(O._46, {
                        checked: this.props.isEnabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector",
                        id: this.props.userId
                    })), l.createElement(O._7, {
                        className: this.props.saved ? "advanced-notification-settings-toggle__saved" : "advanced-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, l.createElement(O.P, {
                        fontSize: O.U.Size5,
                        color: O.J.Link
                    }, Object(d.d)("Saved", "AdvancedNotificationSettingsToggle"))))))
                }, t
            }(l.Component)),
            Tt = n("AQCV"),
            Pt = (n("t4xU"), n("EaRL")),
            xt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        collapsed: t.props.startCollapsed,
                        saved: new Set
                    }, t.toggleCollapse = function() {
                        t.setState(function(e) {
                            return {
                                collapsed: !e.collapsed
                            }
                        })
                    }, t.toggleChannelNotification = function(e, n) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, i, r;
                            return c.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setAdvancedNotificationSetting ? (t = c.__assign({}, Object(P.a)({
                                            disableNotifications: n,
                                            targetID: e
                                        }), {
                                            optimisticResponse: {
                                                followUser: {
                                                    __typename: "FollowUserPayload",
                                                    follow: {
                                                        disableNotifications: n,
                                                        __typename: "Follow"
                                                    }
                                                }
                                            }
                                        }), [4, this.props.setAdvancedNotificationSetting(t)]) : [2];
                                    case 1:
                                        return i = a.sent(), r = function(t) {
                                            if (!t.currentUser) return t;
                                            for (var n = 0, r = t.currentUser.follows.edges; n < r.length; n++) {
                                                var a = r[n];
                                                a.node.id === e && (a.notificationSettings.isEnabled = !i.data.followUser.follow.disableNotifications)
                                            }
                                            return t
                                        }, Object(P.d)(Pt, {
                                            limit: 50
                                        }, r), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return l.createElement(O._30, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, l.createElement(O._9, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return l.createElement(p.a, {
                        message: Object(d.d)("Error loading data.", "AdvancedNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return l.createElement(O._30, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, l.createElement(p.a, {
                        message: Object(d.d)("You must be logged in to update your settings", "AdvancedNotificationSettings")
                    }));
                    var e = Object(d.d)("{followCount, plural, one {You follow # channel} other {You follow # channels}}", {
                            followCount: this.props.data.currentUser.follows.totalCount
                        }, "AdvancedNotificationSettings"),
                        t = l.createElement(O._30, {
                            background: O.m.Alt2,
                            borderBottom: !0
                        }, l.createElement(O._5, {
                            onClick: this.toggleCollapse,
                            alpha: !0,
                            "data-test-selector": "header-selector"
                        }, l.createElement(O._7, {
                            display: O.Q.Flex,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, l.createElement(O._7, {
                            className: "advanced-notification-settings__header",
                            flexGrow: 0
                        }, l.createElement(O.P, {
                            fontSize: O.U.Size5,
                            color: O.J.Alt2,
                            bold: !0
                        }, Object(d.d)("Advanced", "AdvancedNotificationSettings"))), l.createElement(O._7, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, l.createElement(O.P, {
                            "data-test-selector": "description-selector",
                            fontSize: O.U.Size5,
                            color: O.J.Alt2
                        }, e)), l.createElement(O._7, {
                            className: this.state.collapsed ? "advanced-notification-settings--collapse" : "advanced-notification-settings--expand",
                            flexGrow: 0,
                            flexShrink: 1,
                            display: O.Q.Flex,
                            justifyContent: O._6.Center
                        }, l.createElement(O._20, {
                            asset: O._21.AngleRight,
                            type: O._22.Alt2
                        }))))),
                        n = !this.props.data.loading && !this.props.data.error && !!this.props.data.currentUser.follows.pageInfo.hasNextPage;
                    return this.props.data.currentUser.follows.totalCount > 0 ? this.state.collapsed ? l.createElement(O._30, null, t) : l.createElement(O._30, null, t, l.createElement(O._30, {
                        borderBottom: !0,
                        padding: 2
                    }, l.createElement(O._7, {
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(O.P, {
                        fontSize: O.U.Size5,
                        color: O.J.Alt2
                    }, Object(d.d)("Manage which channels you receive notifications for.", "AdvancedNotificationSettings"))), l.createElement(O._7, {
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(O.P, {
                        fontSize: O.U.Size4,
                        color: O.J.Alt
                    }, e)), l.createElement(O._30, {
                        className: "advanced-notification-settings__toggle-container",
                        borderTop: !0,
                        borderLeft: !0,
                        borderRight: !0,
                        margin: {
                            bottom: .5
                        }
                    }, this.renderToggles(), l.createElement(jt.a, {
                        loadMore: this.props.loadMore,
                        enabled: n,
                        pixelThreshold: 200
                    })))) : null
                }, t.prototype.renderToggles = function() {
                    if (this.props.data && this.props.data.currentUser) {
                        for (var e = [], t = 0, n = this.props.data.currentUser.follows.edges; t < n.length; t++) {
                            var i = n[t];
                            i.node && i.node.id && i.node.followers && e.push(l.createElement(Dt, {
                                userId: i.node.id,
                                text: i.node.displayName,
                                login: i.node.login,
                                description: Object(d.d)("{followerCount,number} followers", {
                                    followerCount: i.node.followers.totalCount
                                }, "AdvancedNotificationSettings"),
                                thumbnail: i.node.profileImageURL,
                                isEnabled: i.notificationSettings.isEnabled,
                                onChange: this.toggleChannelNotification,
                                saved: this.getDisplaySaved(i.node.id),
                                key: i.node.id
                            }))
                        }
                        return e
                    }
                }, t.prototype.markSaved = function(e) {
                    this.setState(function(t) {
                        return t.saved.add(e), {
                            saved: t.saved
                        }
                    }), setTimeout(this.clearSaved(e), 2e3)
                }, t.prototype.getDisplaySaved = function(e) {
                    return this.state.saved.has(e)
                }, t.prototype.clearSaved = function(e) {
                    var t = this;
                    return function() {
                        t.setState(function(t) {
                            return t.saved.delete(e), {
                                saved: t.saved
                            }
                        })
                    }
                }, t
            }(l.Component),
            It = Object(r.d)(Object(w.a)(Pt, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network",
                        variables: {
                            limit: 50
                        }
                    }
                },
                props: function(e) {
                    return c.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: Pt,
                                variables: c.__assign({}, e.data.variables, {
                                    cursor: e.data.currentUser && e.data.currentUser.follows.edges[e.data.currentUser.follows.edges.length - 1].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult;
                                    return e.currentUser && n.currentUser ? {
                                        currentUser: c.__assign({}, n.currentUser, {
                                            follows: c.__assign({}, n.currentUser.follows, {
                                                edges: Object(P.b)(e.currentUser.follows.edges, n.currentUser.follows.edges)
                                            })
                                        })
                                    } : n
                                }
                            })
                        }
                    })
                }
            }), Object(w.a)(Tt, {
                name: "setAdvancedNotificationSetting"
            }), Object(m.d)("AdvancedNotificationSettings"))(xt),
            Ft = n("OOv5"),
            At = n("JBcW"),
            Lt = (n("mVHD"), d.o.logger.withCategory("browser-push-notifications-settings")),
            Mt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hide: !1,
                        loading: !0,
                        deciding: !0,
                        hasSubscription: !1
                    }, t.toggle = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.setState({
                                            deciding: !0
                                        }), [4, Ft.a.hasPushSubscription()];
                                    case 1:
                                        if (!n.sent()) return [3, 6];
                                        n.label = 2;
                                    case 2:
                                        return n.trys.push([2, 4, , 5]), [4, Ft.a.userUnsubscribe(At.a.Settings)];
                                    case 3:
                                        return n.sent(), [3, 5];
                                    case 4:
                                        return e = n.sent(), Lt.error(e, "user unsubscribe failed"), [3, 5];
                                    case 5:
                                        return [3, 9];
                                    case 6:
                                        return n.trys.push([6, 8, , 9]), [4, Ft.a.userSubscribe(At.a.Settings)];
                                    case 7:
                                        return n.sent(), [3, 9];
                                    case 8:
                                        return t = n.sent(), Object(Ut.a)() ? (this.setState({
                                            hide: !0
                                        }), [2]) : (Lt.error(t, "user subscribe failed"), [3, 9]);
                                    case 9:
                                        return [4, this.updateSubscriptionState()];
                                    case 10:
                                        return n.sent(), this.setState({
                                            deciding: !1
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 3, , 4]), [4, Ft.a.initialize()];
                                case 1:
                                    return t.sent(), [4, this.updateSubscriptionState()];
                                case 2:
                                    return t.sent(), [3, 4];
                                case 3:
                                    return e = t.sent(), Lt.error(e, "unexpected error initializing push manager"), this.setState({
                                        hide: !0
                                    }), [2];
                                case 4:
                                    return this.setState({
                                        loading: !1,
                                        deciding: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.componentDidUpdate = function(e, t) {
                    t.loading && !this.state.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.state.hide || this.state.loading) return null;
                    var e = this.state.hasSubscription ? Object(d.d)("Turn Off", "BrowserPushNotificationsSettings") : Object(d.d)("Turn On", "BrowserPushNotificationsSettings");
                    return l.createElement(O._30, {
                        borderTop: !0,
                        padding: {
                            right: 2,
                            y: 1
                        },
                        margin: {
                            top: 1
                        },
                        "data-test-selector": "qa-browser-push-notifications-settings",
                        "data-a-target": "browser-push-notifications-settings"
                    }, l.createElement(O._30, {
                        className: "browser-push-notification-settings",
                        padding: {
                            left: 5,
                            right: 4
                        },
                        display: O.Q.Flex,
                        margin: {
                            x: 5
                        }
                    }, l.createElement(O._7, {
                        className: "browser-push-notification-settings__body",
                        display: O.Q.Flex,
                        flexWrap: O.T.NoWrap,
                        flexGrow: 1
                    }, l.createElement(O._7, {
                        margin: {
                            right: 1
                        },
                        flexGrow: 1
                    }, l.createElement(O.P, {
                        fontSize: O.U.Size4,
                        color: O.J.Alt
                    }, Object(d.d)("Receive Browser Notifications for this Device", "BrowserPushNotificationsSettings")), l.createElement(O._7, {
                        padding: {
                            top: .5
                        }
                    }, l.createElement(O.P, {
                        fontSize: O.U.Size5,
                        color: O.J.Alt2
                    }, Object(d.d)("See notifications at the corner of your screen, even when you’re not on Twitch", "BrowserPushNotificationsSettings")))), l.createElement(O._7, {
                        flexShrink: 0
                    }, l.createElement(O.u, {
                        "data-test-selector": "qa-browser-push-notifications-settings-toggle",
                        disabled: this.state.deciding,
                        onClick: this.toggle
                    }, e)))))
                }, t.prototype.updateSubscriptionState = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, Ft.a.hasPushSubscription()];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        hasSubscription: e
                                    }), [2]
                            }
                        })
                    })
                }, t
            }(l.Component),
            Rt = Object(T.compose)(Object(m.d)("BrowserPushNotificationsSettings"))(Mt),
            Bt = (n("iOZM"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.category, t.props.isEnabled)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(O._30, {
                        className: "platform-notification-settings-toggle",
                        display: O.Q.Flex,
                        flexWrap: O.T.NoWrap,
                        alignItems: O.c.Start,
                        background: O.m.Alt,
                        margin: {
                            top: 1,
                            bottom: .5
                        },
                        padding: {
                            right: 5
                        }
                    }, l.createElement(O._7, {
                        className: "platform-notification-settings-toggle__body",
                        display: O.Q.Flex,
                        flexDirection: O.S.Column,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, l.createElement(O._7, {
                        margin: {
                            bottom: .5
                        }
                    }, l.createElement(O.P, {
                        fontSize: O.U.Size4
                    }, this.props.text)), l.createElement(O.P, {
                        fontSize: O.U.Size5,
                        color: O.J.Alt2
                    }, this.props.description)), l.createElement(O._7, {
                        display: O.Q.Flex,
                        margin: {
                            top: .5
                        },
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement(O._7, {
                        margin: {
                            right: 1
                        }
                    }, l.createElement(O._46, {
                        checked: this.props.isEnabled,
                        disabled: this.props.disabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector"
                    })), l.createElement(O._7, {
                        className: this.props.saved ? "platform-notification-settings-toggle__saved" : "platform-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, l.createElement(O.P, {
                        fontSize: O.U.Size5,
                        color: O.J.Link
                    }, Object(d.d)("Saved", "PlatformNotificationSettingsToggle")))))
                }, t
            }(l.Component)),
            zt = n("g+dK"),
            qt = (n("RC0U"), n("1f5k"));
        ! function(e) {
            e.onsite = "onsite", e.email = "email", e.push = "push"
        }(nt || (nt = {}));
        var Vt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        collapsed: t.props.startCollapsed,
                        saved: new Set
                    }, t.VisibleSettings = [{
                        category: "LIVE",
                        name: Object(d.d)("Live", "PlatformNotificationSettings"),
                        description: Object(d.d)("When a streamer I follow goes Live", "PlatformNotificationSettings")
                    }, {
                        category: "VIDEOS",
                        name: Object(d.d)("Video Broadcast", "PlatformNotificationSettings"),
                        description: Object(d.d)("When a channel I follow starts a Vodcast. This also includes Video Comment notifications", "PlatformNotificationSettings")
                    }, {
                        category: "CLIPS",
                        name: Object(d.d)("Clips", "PlatformNotificationSettings"),
                        description: Object(d.d)("Receive notifications for clips you made and clips made by your viewers", "PlatformNotificationSettings")
                    }, {
                        category: "EVENTS",
                        name: Object(d.d)("Events", "PlatformNotificationSettings"),
                        description: Object(d.d)("Any time an event I follow starts", "PlatformNotificationSettings")
                    }, {
                        category: "CHAT",
                        name: Object(d.d)("Chat", "PlatformNotificationSettings"),
                        description: Object(d.d)("Any time there’s Rooms activity related to me.", "PlatformNotificationSettings")
                    }, {
                        category: "FRIENDS",
                        name: Object(d.d)("Friends", "PlatformNotificationSettings"),
                        description: Object(d.d)("When a friend sends me a message", "PlatformNotificationSettings")
                    }, {
                        category: "STREAMER",
                        name: Object(d.d)("Your Channel", "PlatformNotificationSettings"),
                        description: Object(d.d)("Receive notifications when viewers follow your channel or auto host you", "PlatformNotificationSettings")
                    }, {
                        category: "MODERATOR",
                        name: Object(d.d)("Moderator", "PlatformNotificationSettings"),
                        description: Object(d.d)("Any time I get a notification as a moderator", "PlatformNotificationSettings")
                    }, {
                        category: "COMMERCE",
                        name: Object(d.d)("Gifts and Rewards", "PlatformNotificationSettings"),
                        description: Object(d.d)("Receive notifications for drops, crates, and subscription gifts", "PlatformNotificationSettings")
                    }], t.toggleAll = function() {
                        t.toggleSettingCategory("ALL", t.getGlobalStateForPlatform())
                    }, t.toggleCollapse = function() {
                        t.setState(function(e) {
                            return {
                                collapsed: !e.collapsed
                            }
                        })
                    }, t.toggleSettingCategory = function(e, n) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, i, r, a, o = this;
                            return c.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setNotificationSetting ? (t = n ? "off" : "on", i = c.__assign({}, Object(P.a)({
                                            category: e,
                                            platform: this.props.platformName,
                                            settingState: t
                                        }), {
                                            optimisticResponse: {
                                                setNotificationSetting: {
                                                    settingState: t,
                                                    __typename: "SetNotificationSettingPayload"
                                                }
                                            }
                                        }), [4, this.props.setNotificationSetting(i)]) : [2];
                                    case 1:
                                        return r = s.sent(), a = function(t) {
                                            return t.currentUser ? (t.currentUser.notificationSettings = t.currentUser.notificationSettings.map(function(t) {
                                                return t.category === e && (t.platforms = t.platforms.map(function(e) {
                                                    return e.platformName === o.props.platformName && (e.isEnabled = "on" === r.data.setNotificationSetting.settingState, e.settingState = r.data.setNotificationSetting.settingState), e
                                                })), t
                                            }), t) : t
                                        }, Object(P.d)(qt, {}, a), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return l.createElement(O._7, {
                        padding: 1
                    }, l.createElement(O._9, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return l.createElement(p.a, {
                        message: Object(d.d)("Error loading data.", "PlatformNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return l.createElement(O._30, {
                        margin: {
                            top: 1
                        }
                    }, l.createElement(p.a, {
                        message: Object(d.d)("You must be logged in to update your settings.", "PlatformNotificationSettings")
                    }));
                    var e = l.createElement(O._30, {
                        background: O.m.Alt2,
                        borderBottom: !0
                    }, l.createElement(O._5, {
                        onClick: this.toggleCollapse,
                        alpha: !0
                    }, l.createElement(O._7, {
                        display: O.Q.Flex,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, l.createElement(O._7, {
                        className: "platform-notification-settings__header",
                        flexGrow: 0,
                        "data-test-selector": "collapsible-header"
                    }, l.createElement(O.P, {
                        "data-test-selector": "display-name",
                        fontSize: O.U.Size5,
                        color: O.J.Alt2,
                        bold: !0
                    }, this.props.displayName)), l.createElement(O._7, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, l.createElement(O.P, {
                        fontSize: O.U.Size5,
                        color: O.J.Alt2
                    }, this.getSettingTurnedOnMessage())), l.createElement(O._7, {
                        className: this.state.collapsed ? "platform-notification-settings--collapse" : "platform-notification-settings--expand",
                        flexGrow: 0,
                        flexShrink: 1,
                        display: O.Q.Flex,
                        justifyContent: O._6.Center
                    }, l.createElement(O._20, {
                        asset: O._21.AngleRight,
                        type: O._22.Alt2
                    })))));
                    return this.state.collapsed ? l.createElement(O._30, null, e) : l.createElement(O._30, null, e, l.createElement(O._30, {
                        padding: 2,
                        borderBottom: !0
                    }, l.createElement(O._7, {
                        padding: {
                            bottom: 1
                        }
                    }, l.createElement(O.P, {
                        "data-test-selector": "description",
                        fontSize: O.U.Size5,
                        color: O.J.Alt2
                    }, this.props.description)), l.createElement(O._30, {
                        display: O.Q.Flex,
                        margin: {
                            y: .5
                        },
                        borderBottom: !0
                    }, l.createElement(O._7, {
                        className: "platform-notification-settings__all",
                        display: O.Q.Flex,
                        padding: {
                            bottom: 1,
                            right: 5
                        },
                        justifyContent: O._6.Center,
                        flexGrow: 1,
                        flexWrap: O.T.NoWrap
                    }, l.createElement(O._7, {
                        className: "platform-notification-settings__all-body",
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, l.createElement(O.P, {
                        fontSize: O.U.Size4,
                        color: O.J.Alt,
                        "data-test-selector": "explanation"
                    }, this.props.explanation)), l.createElement(O._7, {
                        display: O.Q.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, l.createElement(O._7, {
                        margin: {
                            right: 1
                        }
                    }, l.createElement(O._46, {
                        "data-test-selector": "all-toggle",
                        checked: this.getGlobalStateForPlatform(),
                        onChange: this.toggleAll
                    })), l.createElement(O._7, {
                        padding: {
                            x: 1
                        },
                        "data-test-selector": "saved-selector",
                        className: this.getDisplaySaved("ALL") ? "platform-notification-settings__saved" : "platform-notification-settings__saved--hide"
                    }, l.createElement(O.P, {
                        fontSize: O.U.Size5,
                        color: O.J.Link
                    }, Object(d.d)("Saved", "PlatformNotificationSettings")))))), l.createElement(O._7, {
                        className: "platform-notification-settings__toggle-container",
                        display: O.Q.Flex,
                        flexDirection: O.S.Column,
                        margin: {
                            left: 5
                        },
                        padding: {
                            left: 5
                        }
                    }, this.renderToggles()), this.props.extraSettings))
                }, t.prototype.getSettingByCategory = function(e) {
                    var t = null;
                    if (!this.props.data || !this.props.data.currentUser) return null;
                    for (var n = 0, i = this.props.data.currentUser.notificationSettings; n < i.length; n++) {
                        var r = i[n];
                        r.category === e && (t = r.platforms)
                    }
                    if (!t) return null;
                    for (var a = 0, o = t; a < o.length; a++) {
                        var s = o[a];
                        if (s.platformName === this.props.platformName) return s
                    }
                    return null
                }, t.prototype.getSettingTurnedOnMessage = function() {
                    for (var e = 0, t = 0, n = 0, i = this.VisibleSettings; n < i.length; n++) {
                        var r = i[n],
                            a = this.getSettingByCategory(r.category);
                        a && (e++, a.isEnabled && t++)
                    }
                    return 0 !== t && this.getGlobalStateForPlatform() ? t < e ? Object(d.d)("Some notifications turned on", "PlatformNotificationSettings") : Object(d.d)("All notifications turned on", "PlatformNotificationSettings") : Object(d.d)("All notifications turned off", "PlatformNotificationSettings")
                }, t.prototype.getGlobalStateForPlatform = function() {
                    var e = this.getSettingByCategory("ALL");
                    return !!e && e.isEnabled
                }, t.prototype.renderToggles = function() {
                    for (var e = [], t = 0, n = this.VisibleSettings; t < n.length; t++) {
                        var i = n[t],
                            r = this.getSettingByCategory(i.category);
                        r && e.push(l.createElement(Bt, {
                            category: i.category,
                            text: i.name,
                            description: i.description,
                            isEnabled: r.isEnabled,
                            onChange: this.toggleSettingCategory,
                            disabled: !this.getGlobalStateForPlatform(),
                            key: i.category,
                            saved: this.getDisplaySaved(i.category)
                        }))
                    }
                    return e
                }, t.prototype.markSaved = function(e) {
                    this.setState(function(t) {
                        return t.saved.add(e), {
                            saved: t.saved
                        }
                    }), setTimeout(this.clearSaved(e), 2e3)
                }, t.prototype.getDisplaySaved = function(e) {
                    return this.state.saved.has(e)
                }, t.prototype.clearSaved = function(e) {
                    var t = this;
                    return function() {
                        t.setState(function(t) {
                            return t.saved.delete(e), {
                                saved: t.saved
                            }
                        })
                    }
                }, t
            }(l.Component),
            Ht = Object(r.d)(Object(m.d)("PlatformNotificationSettings"), Object(w.a)(qt, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network"
                    }
                }
            }), Object(w.a)(zt, {
                name: "setNotificationSetting"
            }))(Vt),
            Wt = (n("nq6q"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e = "" !== location.search ? Fe.parse(location.search) : {},
                        t = !!e["open-advanced"] && "true" === e["open-advanced"];
                    return l.createElement(O._30, {
                        className: "notification-settings__body",
                        borderRight: !0,
                        borderLeft: !0,
                        borderTop: !0
                    }, l.createElement(O._30, {
                        background: O.m.Alt,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, l.createElement(O._7, {
                        margin: {
                            bottom: .5
                        }
                    }, l.createElement(O.P, {
                        fontSize: O.U.Size3,
                        color: O.J.Alt
                    }, Object(d.d)("Notifications", "SettingsNotificationsPage"))), l.createElement(O._7, null, l.createElement(O.P, {
                        fontSize: O.U.Size5,
                        color: O.J.Alt2
                    }, Object(d.d)("Get the notifications you care about, where you want to see them.", "SettingsNotificationsPage")))), l.createElement(Ht, {
                        startCollapsed: t,
                        platformName: nt.onsite,
                        displayName: Object(d.d)("On Twitch", "SettingsNotificationsPage"),
                        description: Object(d.d)("We'll always keep you informed on important updates to Twitch and your account.", "SettingsNotificationsPage"),
                        explanation: Object(d.d)("Send me notifications on Twitch about", "SettingsNotificationsPage"),
                        key: "onsite",
                        extraSettings: this.renderBrowserPushNotifications()
                    }), l.createElement(Ht, {
                        startCollapsed: !0,
                        platformName: nt.email,
                        displayName: Object(d.d)("By Email", "SettingsNotificationsPage"),
                        description: Object(d.d)("Receive important notifications through email. You may receive additional emails about features and content on Twitch. You can turn off specific emails using the unsubscribe link included in each message.", "SettingsNotificationsPage"),
                        explanation: Object(d.d)("Send me emails about", "SettingsNotificationsPage"),
                        key: "email"
                    }), l.createElement(Ht, {
                        platformName: nt.push,
                        startCollapsed: !0,
                        displayName: Object(d.d)("On Mobile", "SettingsNotificationsPage"),
                        description: Object(d.d)("Get Twitch updates on the go. Receive notifications right on your phone's home screen.", "SettingsNotificationsPage"),
                        explanation: Object(d.d)("Send me push notifications", "SettingsNotificationsPage"),
                        key: "push"
                    }), l.createElement(It, {
                        startCollapsed: !t
                    }))
                }, t.prototype.renderBrowserPushNotifications = function() {
                    return Object(Ot.a)() && !Object(Ut.a)() ? l.createElement(Rt, null) : null
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t = c.__decorate([Object(m.d)("SettingsNotificationsPage", {
                    destination: b.a.NotificationSettingsPage
                }), Object(f.a)({
                    location: y.PageviewLocation.SettingsPage
                })], t)
            }(l.Component)),
            Gt = n("S1vB"),
            Qt = function(e) {
                var t = e.saving || e.errorLoading;
                return l.createElement(A, {
                    id: "settings-prime-page-post-subscriptions",
                    label: Object(d.d)("Post Subscriptions", "PostSubscriptionsToggle"),
                    description: Object(d.d)("Share in chat when you use your free subscription benefit", "PostSubscriptionsToggle"),
                    extraDescription: Object(d.d)("Let your favorite streamer know your free subscription supports them. Turning this off will hide your subscription announcement in chat.", "PostSubscriptionsToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            Yt = n("jfv9"),
            Jt = n("TubT"),
            Kt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        checked: !1,
                        saving: !1,
                        errorSaving: !1
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("post-subscriptions-toggle"), t.onCheckBoxChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        }, function() {
                            t.updateSettings(e)
                        })
                    }, t.updateSettings = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, i;
                            return c.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (this.logger.debug("Updating prime settings", {
                                                shouldEnableSubCreditChatNotification: e
                                            }), !(t = this.props.data.currentUser && this.props.data.currentUser.id)) return this.logger.warn("No currentUser - unable to update prime settings."), [2];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.props.updatePostSubscriptions(Object(P.a)({
                                            shouldEnableSubCreditChatNotification: e,
                                            userID: t
                                        }))];
                                    case 2:
                                        return r.sent(), n = function(t) {
                                            var n = t && t.currentUser,
                                                i = n && n.primeSettings;
                                            return i ? {
                                                currentUser: c.__assign({}, n, {
                                                    primeSettings: c.__assign({}, i, {
                                                        isSubCreditChatNotificationEnabled: e
                                                    })
                                                })
                                            } : t
                                        }, Object(P.d)(Jt, {}, n), this.logger.debug("Updated prime settings", {
                                            shouldEnableSubCreditChatNotification: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 4];
                                    case 3:
                                        return i = r.sent(), this.logger.warn("Failed to update prime settings", {
                                            err: i
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0,
                                            checked: !e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data,
                        n = t.currentUser;
                    if (!t.loading && this.props.data.loading) {
                        var i = n && n.primeSettings && n.primeSettings.isSubCreditChatNotificationEnabled || !1;
                        this.setState({
                            checked: i
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.primeSettings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(Qt, {
                        checked: this.state.checked,
                        saving: this.state.saving,
                        loading: this.props.data.loading,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onCheckBoxChange
                    })
                }, t
            }(l.Component),
            Xt = Object(r.d)(Object(m.d)("PostSubscriptionsToggle"), Object(w.a)(Jt, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), Object(w.a)(Yt, {
                name: "updatePostSubscriptions"
            }))(Kt),
            $t = n("UILf"),
            Zt = n("XdSf"),
            en = n("SZoP"),
            tn = n("cAbv"),
            nn = (n("OB6b"), n("vgA0")),
            rn = n("s/Z0"),
            an = [255, 255, 255],
            on = [32, 28, 43],
            sn = 3,
            cn = /^#[A-Fa-f0-9]{3,6}$/;

        function ln(e) {
            var t = [e[0], e[1], e[2]].map(function(e) {
                return (e /= 255) <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
            });
            return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
        }

        function un(e, t) {
            return (ln(e) + .05) / (ln(t) + .05)
        }
        var dn, pn, mn = "#b22222";
        ! function(e) {
            e.ConfirmButton = "confirm-button", e.ContrastWarning = "contrast-warning", e.InvalidWarning = "invalid-warning", e.SaveError = "save-error"
        }(dn || (dn = {})),
        function(e) {
            e.Empty = "empty", e.Dirty = "dirty", e.SaveError = "save-error", e.InvalidInput = "invalid-input", e.Success = "success", e.Loading = "loading"
        }(pn || (pn = {}));
        var gn, hn, fn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        selectedColor: t.props.data.currentUser && t.props.data.currentUser.chatColor || mn,
                        inputColor: t.props.data.currentUser && t.props.data.currentUser.chatColor || mn,
                        status: pn.Empty,
                        isHighContrast: !0
                    }, t.onChangeInput = function(e) {
                        var n = e.currentTarget.value.trim();
                        0 !== n.indexOf("#") && (n = "#" + n), t.validateColor(n), t.setState({
                            inputColor: n
                        })
                    }, t.onBlurInput = function() {
                        t.state.status !== pn.InvalidInput && t.onChangeColor(t.state.inputColor)
                    }, t.onChangeColor = function(e) {
                        var n, i = (4 === (n = rn(e)).length && (n = [n[0], n[1], n[2]]), nn(n));
                        t.validateColor(i), t.setState({
                            selectedColor: i,
                            inputColor: i
                        })
                    }, t.onClickSave = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            return c.__generator(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        if (!this.state.selectedColor) return [2];
                                        this.setState({
                                            status: pn.Loading
                                        }), e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, this.props.updateChatColorMutation(this.state.selectedColor)];
                                    case 2:
                                        return e.sent(), this.setState({
                                            status: pn.Success
                                        }), [3, 4];
                                    case 3:
                                        return e.sent(), this.setState({
                                            status: pn.SaveError
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.data.currentUser && e.data.currentUser && e.data.currentUser.chatColor && this.setState({
                        selectedColor: e.data.currentUser.chatColor,
                        inputColor: e.data.currentUser.chatColor
                    })
                }, t.prototype.render = function() {
                    if (!this.props.data.currentUser || this.props.data.networkStatus < 3) return null;
                    var e = Object(d.d)("Hex Color Code", "ChatColorPicker");
                    return l.createElement(O._7, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(k.a, {
                        title: Object(d.d)("Chat Color", "ChatColorPicker"),
                        description: Object(d.d)("Pick a color, any color! It may take several minutes for your color to update in the chat room.", "ChatColorPicker")
                    }), l.createElement(O._7, {
                        display: O.Q.Flex,
                        margin: {
                            bottom: 1
                        },
                        className: "react-simple-colorpicker"
                    }, l.createElement($t, {
                        color: this.state.selectedColor,
                        onChange: this.onChangeColor
                    }), this.renderPreview(Object(d.d)("Light Mode", "ChatColorPicker"), "light-mode-preview", O.J.Base, this.props.data.currentUser), this.renderPreview(Object(d.d)("Dark Mode", "ChatColorPicker"), "dark-mode-preview", O.J.OverlayAlt, this.props.data.currentUser)), l.createElement(O.V, {
                        id: "chat-color-picker__color-code-input",
                        label: e
                    }, l.createElement(O._7, {
                        padding: {
                            bottom: 1
                        },
                        className: "color-picker-input",
                        display: O.Q.Flex,
                        alignItems: O.c.Center
                    }, l.createElement(O._3, {
                        id: "chat-color-picker__color-code-input",
                        type: O._4.Text,
                        value: this.state.inputColor,
                        onChange: this.onChangeInput,
                        onBlur: this.onBlurInput,
                        maxLength: 7
                    }), l.createElement(O._7, {
                        padding: {
                            left: 1
                        }
                    }, this.renderSaveButton())), this.renderStatus()))
                }, t.prototype.renderStatus = function() {
                    return this.state.status === pn.SaveError ? l.createElement(O.P, {
                        color: O.J.Error,
                        "data-test-selector": dn.SaveError
                    }, Object(d.d)("Oops, something went wrong. Please try again.", "ChatColorPicker")) : this.state.status === pn.InvalidInput ? l.createElement(O.P, {
                        color: O.J.Error,
                        "data-test-selector": dn.InvalidWarning
                    }, Object(d.d)("Please enter a valid hexadecimal color code.", "ChatColorPicker")) : this.state.isHighContrast ? void 0 : this.renderContrastWarning()
                }, t.prototype.renderContrastWarning = function() {
                    var e = 1,
                        t = Object(d.d)("<x:strong>Heads up!</x:strong> Some colors may be <x:strong>hard to read</x:strong> in light or dark themes. Check it here before chatting.", {
                            "x:strong": function(t) {
                                return l.createElement(O.P, {
                                    key: "bold-text-" + e++,
                                    type: O._44.Span,
                                    bold: !0
                                }, t)
                            }
                        }, "ChatColorPicker"),
                        n = l.createElement(O._7, {
                            display: O.Q.Inline,
                            verticalAlign: O._54.TextTop,
                            margin: {
                                right: .5
                            }
                        }, l.createElement(O._20, {
                            asset: O._21.Warning
                        }));
                    return l.createElement(O._7, {
                        "data-test-selector": dn.ContrastWarning
                    }, n, l.createElement(O.P, {
                        type: O._44.Span,
                        color: O.J.Alt2
                    }, t))
                }, t.prototype.renderSaveButton = function() {
                    var e = this.state.status !== pn.Dirty && this.state.status !== pn.SaveError && this.state.status !== pn.Success,
                        t = O.z.Default;
                    this.state.status === pn.Loading ? t = O.z.Loading : this.state.status === pn.Success && (t = O.z.Success);
                    var n = O.A.Default;
                    return this.state.status === pn.Success && (n = O.A.Success), l.createElement(O.u, {
                        "data-test-selector": dn.ConfirmButton,
                        disabled: e,
                        onClick: this.onClickSave,
                        state: t,
                        type: n
                    }, Object(d.d)("Confirm Color", "ChatColorPicker"))
                }, t.prototype.renderPreview = function(e, t, n, i) {
                    return l.createElement(O._7, {
                        display: O.Q.Flex,
                        flexDirection: O.S.Column,
                        justifyContent: O._6.Center,
                        margin: {
                            left: 2
                        }
                    }, l.createElement(O.P, {
                        color: O.J.Alt2
                    }, e), l.createElement("div", {
                        style: {
                            width: "165px",
                            height: "60px",
                            backgroundColor: this.state.selectedColor
                        }
                    }), l.createElement(O._7, {
                        className: t,
                        padding: {
                            y: 2
                        },
                        justifyContent: O._6.Center,
                        display: O.Q.Flex
                    }, l.createElement(O._7, {
                        margin: {
                            right: .5
                        }
                    }, l.createElement("span", {
                        style: {
                            color: this.state.selectedColor
                        }
                    }, l.createElement(O.P, {
                        bold: !0
                    }, Object(en.a)(i.login, i.displayName)))), l.createElement(O.P, {
                        color: n
                    }, Object(d.d)("Hi there!", "ChatColorPicker"))))
                }, t.prototype.validateColor = function(e) {
                    var t, n, i;
                    e && (i = e, cn.test(i.trim())) ? this.setState({
                        status: pn.Dirty,
                        isHighContrast: (t = e, n = rn(t), un(an, n) >= sn && un(n, on) >= sn)
                    }) : this.setState({
                        status: pn.InvalidInput
                    })
                }, t
            }(l.Component),
            vn = Object(T.compose)(Object(w.a)(tn), Object(Zt.a)())(fn),
            bn = n("cumT"),
            yn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return d.a.buildType === v.a.Production ? null : this.props.data.currentUser && this.props.data.requestInfo ? this.props.data.currentUser.hasPrime ? l.createElement("div", null, l.createElement(vn, null), l.createElement(k.a, {
                        title: Object(d.d)("Subscriptions Settings", "SettingsPrimePage"),
                        description: Object(d.d)("Choose how your subscription activity will display in chat", "SettingsPrimePage")
                    }), l.createElement(S.a, null, l.createElement(Xt, null))) : Object(Gt.a)(this.props.data.requestInfo.countryCode) ? (window.location.replace("https://twitch.amazon.com/prime?ref_=sm_w_tsp_p_t"), null) : l.createElement(u.b, {
                        to: "/settings/turbo"
                    }) : null
                }, t = c.__decorate([Object(m.d)("SettingsPrimePage", {
                    autoReportInteractive: !0,
                    destination: b.a.SettingsPrime
                }), Object(f.a)({
                    location: y.PageviewLocation.SettingsPage
                }), Object(w.a)(bn)], t)
            }(l.Component),
            Sn = n("WrTc"),
            kn = function() {
                return l.createElement(p.a, {
                    message: Object(d.d)("Error loading user data. Please try again later.", "SettingsPageError")
                })
            },
            _n = function() {
                return l.createElement(N.a, {
                    label: Object(d.d)("Disable Your Twitch Account", "DisableAccountLink"),
                    orientation: O.W.Horizontal
                }, Object(d.d)("If you want to disable your Twitch account, you can do so from the <x:link>Disable Account</x:link> page.", {
                    "x:link": function(e) {
                        return l.createElement("a", {
                            key: "disable-account-link",
                            href: "https://www.twitch.tv/user/disable_account",
                            "data-a-target": "disable-account-link"
                        }, e)
                    }
                }, "DisableAccountLink"))
            },
            En = 5e3;
        ! function(e) {
            e[e.InvalidAddress = 1] = "InvalidAddress", e[e.InvalidDomain = 2] = "InvalidDomain"
        }(gn || (gn = {})),
        function(e) {
            e[e.Error = 0] = "Error", e[e.CanSendVerificationEmail = 1] = "CanSendVerificationEmail", e[e.VerificationEmailSent = 2] = "VerificationEmailSent", e[e.Verified = 3] = "Verified"
        }(hn || (hn = {}));
        var Cn, wn = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = d.j.withCategory("email-setting"), n.onClickVerify = function() {
                        return c.__awaiter(n, void 0, void 0, function() {
                            var e, t = this;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            working: !0
                                        }), e = hn.Error, n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, ae.a.put("/kraken/users/" + this.props.id, {
                                            body: {
                                                email: this.props.email
                                            }
                                        })];
                                    case 2:
                                        return 200 === n.sent().status && (e = hn.VerificationEmailSent), [3, 4];
                                    case 3:
                                        return n.sent(), this.logger.warn("Request to send verification email failed for user:", {
                                            login: this.props.login
                                        }), [3, 4];
                                    case 4:
                                        return this.setState({
                                            status: e,
                                            working: !1
                                        }, function() {
                                            return t.feedbackTimerHandle = setTimeout(function() {
                                                return t.setState({
                                                    status: hn.CanSendVerificationEmail
                                                })
                                            }, En)
                                        }), [2]
                                }
                            })
                        })
                    }, n.state = {
                        status: t.verified ? hn.Verified : hn.CanSendVerificationEmail,
                        working: !1
                    }, n
                }
                return c.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.feedbackTimerHandle && clearTimeout(this.feedbackTimerHandle)
                }, t.prototype.render = function() {
                    var e = !!this.props.error || this.state.status === hn.Error,
                        t = this.props.disabled || this.state.working;
                    return l.createElement(O._7, {
                        display: O.Q.Flex,
                        flexWrap: O.T.NoWrap
                    }, l.createElement(N.a, {
                        id: "profile-account-info-setting__email-input",
                        error: e,
                        errorMessage: e ? this.renderEmailError() : void 0,
                        label: Object(d.d)("Email", "EmailSetting")
                    }, l.createElement(O._7, {
                        display: O.Q.Flex
                    }, l.createElement(O._7, {
                        flexGrow: 1
                    }, l.createElement(O._3, {
                        id: "profile-account-info-setting__email-input",
                        type: O._4.Email,
                        disabled: t,
                        onChange: this.props.onChange,
                        required: !0,
                        value: this.props.email,
                        "data-a-target": "profile-email-input"
                    })), this.renderVerifyButton(t)), l.createElement(F.a, {
                        text: this.renderVerificationMessage(),
                        textDataTarget: "profile-email-description"
                    })))
                }, t.prototype.renderVerifyButton = function(e) {
                    switch (this.state.status) {
                        case hn.CanSendVerificationEmail:
                            return l.createElement(O.u, {
                                type: O.A.Default,
                                disabled: this.props.dirty || e,
                                onClick: this.onClickVerify,
                                "data-a-target": "profile-email-verify-button"
                            }, Object(d.d)("Verify", "EmailSetting"));
                        case hn.VerificationEmailSent:
                            return l.createElement(O.u, {
                                type: O.A.Success,
                                disabled: !0,
                                "data-a-target": "profile-email-sent-button"
                            }, Object(d.d)("Email Sent", "EmailSetting"));
                        case hn.Error:
                            return l.createElement(O.u, {
                                type: O.A.Alert,
                                disabled: !0,
                                "data-a-target": "profile-email-error-button"
                            }, Object(d.d)("Error", "EmailSetting"));
                        case hn.Verified:
                        default:
                            return null
                    }
                }, t.prototype.renderVerificationMessage = function() {
                    switch (this.state.status) {
                        case hn.CanSendVerificationEmail:
                            return Object(d.d)("This email is linked to your account - please take a moment to verify", "EmailSetting");
                        case hn.VerificationEmailSent:
                            return Object(d.d)("Verification email sent!", "EmailSetting");
                        case hn.Verified:
                            return Object(d.d)("This email is linked to your account", "EmailSetting");
                        default:
                            return null
                    }
                }, t.prototype.renderEmailError = function() {
                    if (this.state.status === hn.Error) return Object(d.d)("Failed to send verification email - please try again later", "EmailSetting");
                    switch (this.props.error) {
                        case gn.InvalidAddress:
                            return Object(d.d)("Please provide a valid email address", "EmailSetting");
                        case gn.InvalidDomain:
                            return Object(d.d)("Admins must use their work email address", "EmailSetting");
                        default:
                            return
                    }
                }, t
            }(l.Component),
            Nn = n("FuaS"),
            On = n("FsFC");
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.Eligible = 2] = "Eligible", e[e.NotEligible = 3] = "NotEligible"
        }(Cn || (Cn = {}));
        var Un = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        status: Cn.Loading
                    }, t.logger = d.j.withCategory("username-setting"), t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.emailVerified && this.fetchChangeEligibility()
                }, t.prototype.componentDidUpdate = function(e) {
                    !e.emailVerified && this.props.emailVerified && this.fetchChangeEligibility()
                }, t.prototype.render = function() {
                    return l.createElement(O._7, {
                        display: O.Q.Flex,
                        flexWrap: O.T.NoWrap
                    }, l.createElement(N.a, {
                        label: Object(d.d)("Username", "UsernameSetting"),
                        error: this.state.status === Cn.Error,
                        errorMessage: this.state.status === Cn.Error ? this.renderErrorMessage() : void 0
                    }, l.createElement(O._7, {
                        display: O.Q.Flex
                    }, l.createElement(O._7, {
                        flexGrow: 1
                    }, l.createElement(O._3, {
                        type: O._4.Text,
                        disabled: !0,
                        value: this.props.login,
                        "data-a-target": "profile-username-input"
                    })), this.state.status === Cn.Eligible && l.createElement(O.v, {
                        ariaLabel: Object(d.d)("Edit Username", "UsernameSetting"),
                        icon: O._21.Edit,
                        linkTo: "https://www.twitch.tv/logins/new",
                        "data-a-target": "profile-edit-username-button"
                    })), l.createElement(F.a, {
                        textDataTarget: "profile-username-description",
                        text: this.renderChangeEligibilityMessage()
                    })))
                }, t.prototype.renderChangeEligibilityMessage = function() {
                    if (!1 === this.props.emailVerified) return Object(d.d)("You must have a verified email to update your username", "UsernameSetting");
                    switch (this.state.status) {
                        case Cn.Loading:
                            return Object(d.d)("Loading username change eligibility...", "UsernameSetting");
                        case Cn.Eligible:
                            return Object(d.d)("You may update your username", "UsernameSetting");
                        case Cn.NotEligible:
                            return this.state.eligibilityTimeISO && Object(d.d)("You may update your username again in {distanceFromNow}", {
                                distanceFromNow: function(e) {
                                    var t = Date.now(),
                                        n = (new Date(e).getTime() - t) / 1e3;
                                    if (!(n <= 0)) return Object(On.a)(n)
                                }(this.state.eligibilityTimeISO) || ""
                            }, "UsernameSetting");
                        default:
                            return null
                    }
                }, t.prototype.renderErrorMessage = function() {
                    return Object(d.d)("We had trouble fetching your rename eligibility - please try again later", "UsernameSetting")
                }, t.prototype.fetchChangeEligibility = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, ae.a.get("/kraken/user/rename_status?scope=user_read")];
                                case 1:
                                    return (e = t.sent()).body && e.body.is_rename_eligible ? this.setState({
                                        status: Cn.Eligible
                                    }) : e.body && !1 === e.body.is_rename_eligible ? this.setState({
                                        status: Cn.NotEligible,
                                        eligibilityTimeISO: e.body.rename_eligible_at
                                    }) : this.setState({
                                        status: Cn.Error
                                    }), [3, 3];
                                case 2:
                                    return t.sent(), this.logger.warn("Failed to fetch rename_status for user " + this.props.login), this.setState({
                                        status: Cn.Error
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t
            }(l.Component),
            jn = ["ko", "ja", "zh", "zh-cn", "zh-tw", "zh-hk"],
            Dn = "profile-account-info-setting__bio-input",
            Tn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement("div", null, l.createElement(wn, {
                        disabled: this.props.controlsDisabled,
                        dirty: this.props.emailDirty,
                        email: this.props.email,
                        id: this.props.id,
                        error: this.props.emailError,
                        login: this.props.login,
                        onChange: this.props.onEmailChange,
                        verified: this.props.emailVerified
                    }), l.createElement(Un, {
                        emailVerified: this.props.emailVerified,
                        login: this.props.login
                    }), l.createElement(N.a, {
                        id: "profile-account-info-setting__displayname-input",
                        error: !!this.props.displayNameError,
                        errorMessage: this.props.displayNameError ? this.renderDisplayNameError() : void 0,
                        label: Object(d.d)("Display Name", "ProfileAccountInfo")
                    }, l.createElement(O._3, {
                        id: "profile-account-info-setting__displayname-input",
                        "data-a-target": "profile-displayname-input",
                        type: O._4.Text,
                        disabled: this.props.controlsDisabled,
                        onChange: this.props.onDisplayNameChange,
                        value: this.props.displayName
                    }), l.createElement(F.a, {
                        textDataTarget: "profile-displayname-description",
                        text: this.renderDisplayNameDescription()
                    })), l.createElement(N.a, {
                        id: Dn,
                        error: !!this.props.bioError,
                        errorMessage: this.props.bioError ? this.renderBioError() : void 0,
                        label: Object(d.d)("Bio", "ProfileAccountInfo")
                    }, l.createElement(O._41, {
                        id: Dn,
                        disabled: this.props.controlsDisabled,
                        onChange: this.props.onBioChange,
                        maxLength: 300,
                        noResize: !0,
                        value: this.props.bio,
                        "data-a-target": "profile-bio-input"
                    }), l.createElement(F.a, {
                        textDataTarget: "profile-bio-description",
                        text: Object(d.d)("Who you are in fewer than 300 characters", "ProfileAccountInfo")
                    })))
                }, t.prototype.renderDisplayNameDescription = function() {
                    return this.userHasCJKLanguageSet() ? Object(d.d)("Customize the capitalization of your display name or change it to contain English characters! Setting an English display name is a permanent change — requests to undo it will not be honored! Display names that do not adhere to Twitch Rules of Conduct may result in an indefinite suspension of your account.", "ProfleAccountInfo") : Object(d.d)("Customize capitalization for your username", "ProfileAccountInfo")
                }, t.prototype.renderBioError = function() {
                    return Object(d.d)("Your description is too long", "ProfileAccountInfo")
                }, t.prototype.renderDisplayNameError = function() {
                    return Object(d.d)("You may not change your display name, only the capitalization of it", "ProfileAccountInfo")
                }, t.prototype.userHasCJKLanguageSet = function() {
                    var e = Object(Nn.a)();
                    return !!e && jn.includes(e)
                }, t
            }(l.Component),
            Pn = n("E9Qg"),
            xn = n.n(Pn),
            In = n("tL94"),
            Fn = (n("i1sU"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t.props.data && t.props.data.currentUser;
                        e && t.props.showModal(Ne.a, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            imageType: Oe.a.ProfileBanner,
                            showCloser: !0,
                            successCallback: t.imageUploaded
                        })
                    }, t.imageUploaded = function() {
                        t.props.data && t.props.data.refetch()
                    }, t.shouldReportInteractive = function() {
                        var e = t.props.data;
                        if (e && !e.loading) {
                            var n = e.currentUser;
                            n && n.bannerImageURL ? t.props.latencyTracking.reportInteractive(1) : t.props.latencyTracking.reportInteractive()
                        }
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.shouldReportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.shouldReportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data,
                        t = e && e.currentUser;
                    if (!e.loading && !t) return l.createElement(O.P, {
                        type: O._44.Span,
                        color: O.J.Error
                    }, Object(d.d)("Sorry, something went wrong. Please try again later.", "ProfileBannerSetting"));
                    var n = Object(d.d)("Profile Banner", "ProfileBannerSetting"),
                        i = null;
                    return i = e.loading ? l.createElement(O._13, {
                        "data-test-selector": "profile-banner__placeholder",
                        "data-a-target": "profile-banner-image",
                        height: 140,
                        width: 440
                    }) : t && t.bannerImageURL ? l.createElement(m.b, {
                        src: t.bannerImageURL,
                        alt: n,
                        className: "profile-banner-setting__current-image",
                        "data-a-target": "profile-banner-image"
                    }) : l.createElement("div", {
                        className: "profile-banner-setting__current-image profile-banner-setting__current-image--default",
                        style: {
                            backgroundImage: "url(" + xn.a + ")"
                        },
                        "data-a-target": "profile-banner-image"
                    }), l.createElement(O._7, {
                        className: "profile-banner-setting"
                    }, l.createElement(O._7, {
                        display: O.Q.Flex,
                        flexDirection: O.S.Row
                    }, l.createElement(O._7, {
                        margin: {
                            right: 2
                        }
                    }, i), l.createElement(O._7, {
                        margin: {
                            y: "auto"
                        }
                    }, l.createElement(O.u, {
                        ariaLabel: Object(d.d)("Update Profile Banner", "ProfileBannerSetting"),
                        type: O.A.Hollow,
                        onClick: this.openModal,
                        "data-a-target": "profile-banner-upload-button",
                        "data-test-selector": "profile-banner-upload-button"
                    }, l.createElement(O._7, {
                        padding: {
                            x: 1
                        }
                    }, Object(d.d)("Update", "ProfileBannerSetting"))), l.createElement(F.a, {
                        text: Object(d.d)("File format: JPEG, PNG, GIF (recommended 1200x380, max 10MB)", "ProfileBannerSetting")
                    }))))
                }, t
            }(l.Component)),
            An = Object(T.compose)(Object(m.d)("ProfileBannerSetting"), Object(w.a)(In))(Fn);
        var Ln = Object(i.b)(null, function(e) {
                return Object(r.b)({
                    showModal: we.d
                }, e)
            })(An),
            Mn = n("x9n8"),
            Rn = n("goep"),
            Bn = (n("eppJ"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t.props.data && t.props.data.currentUser;
                        e && t.props.showModal(Mn.a, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            showCloser: !0,
                            successCallback: t.imageUploaded
                        })
                    }, t.imageUploaded = function() {
                        t.props.data && t.props.data.refetch()
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(1)
                }, t.prototype.render = function() {
                    var e = this.props.data && this.props.data.currentUser,
                        t = l.createElement(O._13, {
                            height: 140,
                            width: 140
                        });
                    return e && e.profileImageURL && (t = l.createElement(m.b, {
                        src: e.profileImageURL,
                        alt: Object(d.d)("Profile Picture", "ProfileImageSetting"),
                        className: "profile-image-setting__current-image",
                        "data-a-target": "profile-image"
                    })), l.createElement(O._7, {
                        className: "profile-image-setting"
                    }, l.createElement(O._7, {
                        display: O.Q.Flex,
                        flexDirection: O.S.Row
                    }, l.createElement(O._7, {
                        margin: {
                            right: 2
                        }
                    }, t), l.createElement(O._7, {
                        margin: {
                            y: "auto"
                        }
                    }, l.createElement(O.u, {
                        ariaLabel: Object(d.d)("Update Profile Picture", "ProfileImageSetting"),
                        type: O.A.Hollow,
                        onClick: this.openModal,
                        "data-a-target": "profile-image-upload-button",
                        "data-test-selector": "profile-image-upload-button"
                    }, l.createElement(O._7, {
                        padding: {
                            x: 1
                        }
                    }, Object(d.d)("Update", "ProfileImageSetting"))), l.createElement(F.a, {
                        text: Object(d.d)("File format: JPEG, PNG, GIF (max size 256x256, 10MB)", "ProfileImageSetting")
                    }))))
                }, t
            }(l.Component)),
            zn = Object(T.compose)(Object(m.d)("ProfileImageSetting"), Object(w.a)(Rn))(Bn);
        var qn, Vn = Object(i.b)(null, function(e) {
                return Object(r.b)({
                    showModal: we.d
                }, e)
            })(zn),
            Hn = n("OA9H");
        ! function(e) {
            e.Bio = "Error (403): Description specified is too long", e.DisplayName = "Error (403): You may not change your display name, only the capitalization of it.", e.EmailNotValid = "Error (403): Email address is not valid", e.EmailDomainNotAllowed = "Error (403): Admins must use their work email"
        }(qn || (qn = {}));
        var Wn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        bioError: !1,
                        displayNameError: !1,
                        saveStatus: Sn.b.Working
                    }, t.logger = d.j.withCategory("settings-profile-page"), t.onClickSave = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i, r, a, o = this;
                            return c.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (!this.props.data.currentUser) return [2];
                                        this.setState({
                                            saveStatus: Sn.b.Working
                                        }), e = Sn.b.Error, t = !1, n = !1, i = void 0, s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 3, , 4]), [4, ae.a.put("/kraken/users/" + this.props.data.currentUser.id, {
                                            body: this.buildRequestBody()
                                        })];
                                    case 2:
                                        if (200 === (r = s.sent()).status) e = Sn.b.Success;
                                        else if (403 === r.status) switch (r.error && r.error.message) {
                                            case qn.EmailNotValid:
                                                i = gn.InvalidAddress;
                                                break;
                                            case qn.EmailDomainNotAllowed:
                                                i = gn.InvalidDomain;
                                                break;
                                            case qn.DisplayName:
                                                t = !0;
                                                break;
                                            case qn.Bio:
                                                n = !0;
                                                break;
                                            default:
                                                this.logErrorToSentinel(r)
                                        } else this.logErrorToSentinel(r);
                                        return [3, 4];
                                    case 3:
                                        return a = s.sent(), this.logger.warn("Network error submitting profile for user", {
                                            user: this.props.data.currentUser && this.props.data.currentUser.login,
                                            error: a
                                        }), [3, 4];
                                    case 4:
                                        return this.setState({
                                            saveStatus: e,
                                            bioError: n,
                                            displayNameError: t,
                                            emailError: i
                                        }, function() {
                                            e === Sn.b.Success && o.props.data.refetch && o.props.data.refetch()
                                        }), [2]
                                }
                            })
                        })
                    }, t.onBioChange = function(e) {
                        return t.setState({
                            bio: e.currentTarget.value,
                            bioError: !1
                        }, t.checkForDirtyState)
                    }, t.onEmailChange = function(e) {
                        return t.setState({
                            email: e.currentTarget.value,
                            emailError: void 0
                        }, t.checkForDirtyState)
                    }, t.onDisplayNameChange = function(e) {
                        return t.setState({
                            displayName: e.currentTarget.value,
                            displayNameError: !1
                        }, t.checkForDirtyState)
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    !this.props.data.loading && this.props.data.currentUser && this.hydrateState(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.data.loading && !e.data.loading && e.data.currentUser && this.hydrateState(e)
                }, t.prototype.render = function() {
                    if (!this.props.data.currentUser) return this.props.data.loading ? l.createElement(O._9, {
                        fillContent: !0
                    }) : l.createElement(kn, null);
                    var e = l.createElement(Sn.a, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    });
                    return l.createElement("div", null, l.createElement(k.a, {
                        title: Object(d.d)("Profile Picture", "SettingsProfilePage")
                    }), l.createElement(S.a, null, l.createElement(je.a, null, l.createElement(Vn, null))), l.createElement(k.a, {
                        title: Object(d.d)("Profile Banner", "SettingsProfilePage")
                    }), l.createElement(S.a, null, l.createElement(je.a, null, l.createElement(Ln, null))), l.createElement(k.a, {
                        title: Object(d.d)("Profile Settings", "SettingsProfilePage"),
                        description: Object(d.d)("Change identifying details for your account", "SettingsProfilePage")
                    }), l.createElement(S.a, {
                        footer: e
                    }, l.createElement(Tn, {
                        bio: this.state.bio || "",
                        bioError: this.state.bioError,
                        controlsDisabled: this.state.saveStatus === Sn.b.Working,
                        displayName: this.state.displayName || "",
                        displayNameError: this.state.displayNameError,
                        email: this.state.email || "",
                        emailDirty: this.state.email !== this.props.data.currentUser.email,
                        emailError: this.state.emailError,
                        emailVerified: this.props.data.currentUser.isEmailVerified,
                        id: this.props.data.currentUser.id,
                        login: this.props.data.currentUser.login || "",
                        onBioChange: this.onBioChange,
                        onDisplayNameChange: this.onDisplayNameChange,
                        onEmailChange: this.onEmailChange
                    })), l.createElement(k.a, {
                        title: Object(d.d)("Disabling Your Twitch Account", "SettingsProfilePage"),
                        description: Object(d.d)("Completely deactivate your account", "SettingsProfilePage")
                    }), l.createElement(S.a, null, l.createElement(_n, null)))
                }, t.prototype.hydrateState = function(e) {
                    e.data.currentUser && this.setState({
                        bio: e.data.currentUser.description,
                        displayName: e.data.currentUser.displayName,
                        email: e.data.currentUser.email,
                        saveStatus: Sn.b.NoChanges
                    })
                }, t.prototype.logErrorToSentinel = function(e) {
                    this.logger.error(e.requestError || new Error("Unrecognized User Service response error"), "Unrecognized erorr response submitting profile for user", {
                        user: this.props.data.currentUser && this.props.data.currentUser.login,
                        status: e.status,
                        error: e.error,
                        requestError: e.requestError
                    })
                }, t.prototype.buildRequestBody = function() {
                    return {
                        displayname: this.state.displayName,
                        email: this.state.email,
                        description: this.state.bio,
                        on_site: 1
                    }
                }, t.prototype.checkForDirtyState = function() {
                    if (!this.props.data.currentUser) return !1;
                    var e = this.state.bio !== this.props.data.currentUser.description || this.state.email !== this.props.data.currentUser.email || this.state.displayName !== this.props.data.currentUser.displayName;
                    this.setState({
                        saveStatus: e ? Sn.b.DirtyChanges : Sn.b.NoChanges
                    })
                }, t
            }(l.Component),
            Gn = Object(T.compose)(Object(w.a)(Hn), Object(m.d)("SettingsProfilePage", {
                autoReportInteractive: !0,
                destination: b.a.SettingsProfile
            }), Object(f.a)({
                location: y.PageviewLocation.SettingsPage
            }))(Wn),
            Qn = function(e) {
                var t = e.saving || e.errorLoading;
                return l.createElement(A, {
                    id: "settings-security-page-block-subs",
                    label: Object(d.d)("Block Receiving Gifts on Channels You don't Follow", "BlockGiftedSubsToggle"),
                    description: Object(d.d)("Block incoming gift subscriptions to channels you don't follow", "BlockGiftedSubsToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            Yn = n("sVk6"),
            Jn = n("CePw"),
            Kn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        checked: !1,
                        saving: !1,
                        errorSaving: !1
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("block-gifted-subs-toggle"), t.onCheckBoxChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        }, function() {
                            t.updateSettings(e)
                        })
                    }, t.updateSettings = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.logger.debug("Updating subscription settings", {
                                                giftsInFollowedChannelsOnly: e
                                            }), !(this.props.data.currentUser && this.props.data.currentUser.id)) return this.logger.warn("No currentUser - unable to update subscription settings."), [2];
                                        i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.updateUserSubscriptionSettings(Object(P.a)({
                                            giftsInFollowedChannelsOnly: e
                                        }))];
                                    case 2:
                                        return i.sent(), t = function(t) {
                                            var n = t && t.currentUser,
                                                i = n && n.subscriptionSettings;
                                            return i ? {
                                                currentUser: c.__assign({}, n, {
                                                    subscriptionSettings: c.__assign({}, i, {
                                                        giftsToFollowedChannelsOnly: e
                                                    })
                                                })
                                            } : t
                                        }, Object(P.d)(Jn, {}, t), this.logger.debug("Updated subscription settings", {
                                            giftsInFollowedChannelsOnly: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 4];
                                    case 3:
                                        return n = i.sent(), this.logger.warn("Failed to update subscription settings", {
                                            err: n
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0,
                                            checked: !e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data,
                        n = t.currentUser;
                    if (!t.loading && this.props.data.loading) {
                        var i = n && n.subscriptionSettings && n.subscriptionSettings.giftsToFollowedChannelsOnly || !1;
                        this.setState({
                            checked: i
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.subscriptionSettings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(Qn, {
                        checked: this.state.checked,
                        saving: this.state.saving,
                        loading: this.props.data.loading,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onCheckBoxChange
                    })
                }, t
            }(l.Component),
            Xn = Object(r.d)(Object(m.d)("BlockGiftedSubs"), Object(w.a)(Jn, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), Object(w.a)(Yn, {
                name: "updateUserSubscriptionSettings"
            }))(Kn),
            $n = "/v5/whispers/settings",
            Zn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        loading: !0,
                        updating: !1
                    }, t.onToggle = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            updating: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, ae.a.post($n, {
                                            body: {
                                                restrict_whispers: e
                                            }
                                        })];
                                    case 2:
                                        return t = n.sent(), this.setState(function(n) {
                                            return {
                                                enabled: 200 === t.status ? e : n.enabled,
                                                error: 200 !== t.status,
                                                updating: !1
                                            }
                                        }), [3, 4];
                                    case 3:
                                        return n.sent(), this.setState({
                                            updating: !1,
                                            error: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentWillMount = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, ae.a.get($n)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        enabled: e.body && e.body.restrict_whispers || !1,
                                        error: 200 !== e.status,
                                        loading: !1
                                    }), [3, 3];
                                case 2:
                                    return t.sent(), this.setState({
                                        enabled: !1,
                                        error: !0,
                                        loading: !1
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return l.createElement(A, {
                        id: "settings-security-page-block-whispers",
                        label: Object(d.d)("Block Whispers from Strangers", "SettingsSecurityPage"),
                        description: Object(d.d)("Block whispers from people you don't follow", "SettingsSecurityPage"),
                        checked: this.state.enabled,
                        showPlaceholder: this.state.loading,
                        disabled: this.state.updating,
                        error: this.state.error,
                        onChange: this.onToggle
                    })
                }, t
            }(l.Component);

        function ei() {
            return l.createElement(N.a, {
                label: Object(d.d)("Password", "ChangePasswordLink"),
                orientation: O.W.Horizontal
            }, l.createElement(O.P, null, Object(d.d)("<x:link>Change password.</x:link> Improve your security with a strong password.", {
                "x:link": function(e) {
                    return l.createElement("a", {
                        key: "change-password-link",
                        href: "https://passport.twitch.tv/passwords/new?"
                    }, e)
                }
            }, "ChangePasswordLink")))
        }
        var ti = function(e) {
                return e.loading || e.errorLoading || !e.checked && !e.saving ? null : l.createElement(A, {
                    id: "settings-security-hide-directory",
                    label: Object(d.d)("Hide channel from directory", "HideDirectoryToggle"),
                    description: Object(d.d)("Live video, past broadcasts, and highlights are listed publicly in the directory by default. Turning this off is irreversible.", "HideDirectoryToggle"),
                    error: e.errorSaving,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: e.saving
                })
            },
            ni = n("UIkr"),
            ii = n("j7X+"),
            ri = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        checked: !1,
                        saving: !1,
                        errorSaving: !1
                    }, t.logger = d.o.logger.withCategory("settings").withCategory("hide-directory-toggle"), t.onCheckBoxChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        }, function() {
                            t.updateSettings(e)
                        })
                    }, t.updateSettings = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.logger.debug("Updating user settings", {
                                                IsDirectoryHidden: e
                                            }), !(this.props.data.currentUser && this.props.data.currentUser.id)) return this.logger.warn("No currentUser - unable to update user settings."), [2];
                                        i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.updateUserDirectoryHidden(Object(P.a)({
                                            IsDirectoryHidden: e
                                        }))];
                                    case 2:
                                        return i.sent(), t = function(t) {
                                            var n = t && t.currentUser,
                                                i = n && n.settings;
                                            return i ? {
                                                currentUser: c.__assign({}, n, {
                                                    settings: c.__assign({}, i, {
                                                        isDirectoryHidden: e
                                                    })
                                                })
                                            } : t
                                        }, Object(P.d)(ii, {}, t), this.logger.debug("Updated user settings", {
                                            IsDirectoryHidden: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 4];
                                    case 3:
                                        return n = i.sent(), this.logger.warn("Failed to update user settings", {
                                            err: n
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !0,
                                            checked: !e
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    var t = e.data,
                        n = t.currentUser;
                    if (!t.loading && this.props.data.loading) {
                        var i = n && n.settings && n.settings.isDirectoryHidden || !1;
                        this.setState({
                            checked: i
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.settings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return l.createElement(ti, {
                        checked: this.state.checked,
                        saving: this.state.saving,
                        loading: this.props.data.loading,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onCheckBoxChange
                    })
                }, t
            }(l.Component),
            ai = Object(r.d)(Object(m.d)("HideDirectoryToggle"), Object(w.a)(ii, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), Object(w.a)(ni, {
                name: "updateUserDirectoryHidden"
            }))(ri),
            oi = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        loading: !0,
                        show: !1,
                        updating: !1
                    }, t.onToggle = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            updating: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, ae.a.put(this.hidePastBroadcastsEndpoint + "?hide_archives=" + e)];
                                    case 2:
                                        return t = n.sent(), this.setState(function(n) {
                                            return {
                                                enabled: 200 === t.status ? e : n.enabled,
                                                error: 200 !== t.status,
                                                show: 200 === t.status ? !!t.body && (t.body.hide_archives || t.body.hide_archives_enabled) : n.show,
                                                updating: !1
                                            }
                                        }), [3, 4];
                                    case 3:
                                        return n.sent(), this.setState({
                                            updating: !1,
                                            error: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentWillMount = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, ae.a.get(this.hidePastBroadcastsEndpoint)];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        enabled: e.body && e.body.hide_archives || !1,
                                        error: 200 !== e.status,
                                        show: !!e.body && (e.body.hide_archives || e.body.hide_archives_enabled),
                                        loading: !1
                                    }), [3, 3];
                                case 2:
                                    return t.sent(), this.setState({
                                        enabled: !1,
                                        error: !0,
                                        loading: !1
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return this.state.show ? l.createElement(A, {
                        id: "settings-security-page-hide-past-broadcasts",
                        label: Object(d.d)("Hide Past Broadcasts", "HidePastBroadcastsSetting"),
                        description: Object(d.d)("Only allow your editors to view your past broadcasts", "HidePastBroadcastsSetting"),
                        checked: this.state.enabled,
                        disabled: this.state.updating,
                        error: this.state.error,
                        onChange: this.onToggle
                    }) : null
                }, Object.defineProperty(t.prototype, "hidePastBroadcastsEndpoint", {
                    get: function() {
                        return "/v5/channels/" + this.props.sessionUserID + "/user_video_privacy_properties"
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(l.Component);
        var si, ci = Object(i.b)(function(e) {
                var t = Object(s.c)(e);
                return {
                    sessionUserID: t && t.id
                }
            })(oi),
            li = n("NoSW"),
            ui = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement(N.a, {
                        label: Object(d.d)("Two-Factor Authentication", "TwoFactorAuthenticationSetting"),
                        orientation: O.W.Horizontal,
                        error: this.props.status === si.Error,
                        errorMessage: Object(d.d)("Sorry, something went wrong. Please try again later.", "TwoFactorAuthenticationSetting")
                    }, this.renderBody())
                }, t.prototype.renderBody = function() {
                    switch (this.props.status) {
                        case si.Loading:
                            return this.renderLoading();
                        case si.Error:
                            return this.renderError();
                        case si.UnverifiedEmail:
                            return this.renderVerifyEmail();
                        case si.CanEnable:
                            return this.renderEnableButton();
                        case si.Enabled:
                            return this.renderDisableButton();
                        case si.EnabledAndRequired:
                            return this.renderEnabledAndRequired();
                        default:
                            return null
                    }
                }, t.prototype.renderLoading = function() {
                    return l.createElement(O._13, null)
                }, t.prototype.renderError = function() {
                    return null
                }, t.prototype.renderVerifyEmail = function() {
                    return l.createElement(O._7, null, l.createElement(O.P, {
                        "data-a-target": "tfa-verify-email"
                    }, Object(d.d)("Just verify your email address and two-factor authentication can be enabled.", "TwoFactorAuthenticationSetting")))
                }, t.prototype.renderEnableButton = function() {
                    return l.createElement(O._7, null, l.createElement(O.u, {
                        linkTo: "https://passport.twitch.tv/register_2fa/new",
                        "data-a-target": "tfa-enable-button"
                    }, Object(d.d)("Set Up Two-Factor Authentication", "TwoFactorAuthenticationSetting")), l.createElement(F.a, {
                        textDataTarget: "tfa-pitch-message",
                        text: Object(d.d)("It's dangerous to go alone. <x:link>Two-factor authentication</x:link> adds an extra layer of security to your Twitch account by requiring both a password and your mobile phone to login.", {
                            "x:link": function(e) {
                                return l.createElement("a", {
                                    key: "learn-more-link",
                                    href: "https://www.authy.com/learn-more",
                                    target: "_blank",
                                    "data-a-target": "tfa-authy-link"
                                }, e)
                            }
                        }, "TwoFactorAuthenticationSetting")
                    }))
                }, t.prototype.renderDisableButton = function() {
                    return l.createElement(O._7, null, l.createElement(O.u, {
                        linkTo: "https://passport.twitch.tv/disable_2fa/new",
                        "data-a-target": "tfa-disable-button"
                    }, Object(d.d)("Disable two-factor authentication", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                }, t.prototype.renderEnabledAndRequired = function() {
                    return l.createElement(O._7, null, l.createElement(O.P, {
                        "data-a-target": "tfa-required-message"
                    }, Object(d.d)("You must have two-factor authentication enabled.", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                }, t.prototype.renderEnabledMessage = function() {
                    return l.createElement(F.a, {
                        textDataTarget: "tfa-successful-message",
                        text: Object(d.d)("Woohoo! Two-factor authentication is enabled! To reset or change your phone, visit the Authy <x:link>phone reset form</x:link>.", {
                            "x:link": function(e) {
                                return l.createElement("a", {
                                    key: "phone-reset-link",
                                    href: "https://www.authy.com/phones/reset",
                                    "data-a-target": "tfa-authy-reset"
                                }, e)
                            }
                        }, "TwoFactorAuthenticationSetting")
                    })
                }, t
            }(l.Component),
            di = n("Q6se");
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.UnverifiedEmail = 2] = "UnverifiedEmail", e[e.CanEnable = 3] = "CanEnable", e[e.Enabled = 4] = "Enabled", e[e.EnabledAndRequired = 5] = "EnabledAndRequired"
        }(si || (si = {}));
        var pi, mi = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        status: si.Loading,
                        restLoading: !0,
                        restError: !1
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTwoFactorEnabled()
                }, t.prototype.componentDidUpdate = function(e, t) {
                    t.status === si.Loading && this.state.status !== si.Loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.status !== si.Loading || e.data.loading || this.reconcileStatus(e)
                }, t.prototype.render = function() {
                    return l.createElement(ui, {
                        status: this.state.status
                    })
                }, t.prototype.fetchTwoFactorEnabled = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t, n = this;
                        return c.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    e = "/api/users/auth_validator?check_2fa=true&onsite=1", i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, ae.a.get(e, {
                                        credentials: "include"
                                    }, {
                                        version: 4
                                    })];
                                case 2:
                                    return t = i.sent(), this.setState({
                                        twoFactorEnabled: 204 === t.status || 401 === t.status,
                                        restError: 204 !== t.status && 403 !== t.status && 401 !== t.status,
                                        restLoading: !1
                                    }, function() {
                                        return n.reconcileStatus(n.props)
                                    }), [3, 4];
                                case 3:
                                    return i.sent(), this.setState({
                                        restLoading: !1,
                                        restError: !0
                                    }, function() {
                                        return n.reconcileStatus(n.props)
                                    }), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.reconcileStatus = function(e) {
                    var t;
                    e.data.loading || this.state.restLoading ? t = si.Loading : !e.data.currentUser || this.state.restError ? t = si.Error : this.state.twoFactorEnabled || e.data.currentUser.isEmailVerified ? !this.state.twoFactorEnabled && e.data.currentUser.isEmailVerified ? t = si.CanEnable : this.state.twoFactorEnabled && !this.userRoleRequiresTwoFactor(e) ? t = si.Enabled : this.state.twoFactorEnabled && this.userRoleRequiresTwoFactor(e) && (t = si.EnabledAndRequired) : t = si.UnverifiedEmail, t && this.setState({
                        status: t
                    })
                }, t.prototype.userRoleRequiresTwoFactor = function(e) {
                    var t = e.data.currentUser && e.data.currentUser.roles;
                    return !(!t || !(t.isGlobalMod || t.isSiteAdmin || t.isStaff))
                }, t
            }(l.Component),
            gi = Object(T.compose)(Object(li.a)("TwoFactorAuthenticationSetting"), Object(w.a)(di))(mi),
            hi = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return l.createElement("div", null, l.createElement(k.a, {
                        title: Object(d.d)("Security", "SettingsSecurityPage"),
                        description: Object(d.d)("Keep your account safe and sound", "SettingsSecurityPage")
                    }), l.createElement(ei, null), l.createElement(gi, null), l.createElement(k.a, {
                        title: Object(d.d)("Privacy", "SettingsSecurityPage")
                    }), l.createElement(Zn, null), l.createElement(Xn, null), l.createElement(ai, null), l.createElement(ci, null))
                }, t
            }(l.Component),
            fi = Object(T.compose)(Object(m.d)("SettingsSecurityPage", {
                autoReportInteractive: !0,
                destination: b.a.SettingsSecurity
            }), Object(f.a)({
                location: y.PageviewLocation.SettingsPage
            }))(hi),
            vi = n("CkX/");
        ! function(e) {
            e.Channel = "channel", e.Notifications = "notifications", e.Profile = "profile", e.Security = "security", e.Connections = "connections", e.Prime = "prime", e.Turbo = "turbo"
        }(pi || (pi = {}));
        var bi = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.data.loading ? null : l.createElement(O._7, {
                        className: "settings-tabs",
                        padding: {
                            x: Ei,
                            top: Ei
                        }
                    }, l.createElement(O._7, {
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(O.P, {
                        type: O._44.H2
                    }, Object(d.d)("Settings", "SettingsTabs"))), l.createElement(O._7, null, l.createElement(O._32, null, l.createElement(O._31, {
                        linkTo: "/settings/profile",
                        active: this.props.tabName === pi.Profile,
                        "data-a-target": "profile-tab"
                    }, Object(d.d)("Profile", "SettingsTabs")), this.renderPremiumTab(), l.createElement(O._31, {
                        linkTo: "/settings/channel",
                        active: this.props.tabName === pi.Channel,
                        "data-a-target": "channel-tab"
                    }, Object(d.d)("Channel and Videos", "SettingsTabs")), l.createElement(O._31, {
                        linkTo: "/settings/security",
                        active: this.props.tabName === pi.Security,
                        "data-a-target": "security-tab"
                    }, Object(d.d)("Security and Privacy", "SettingsTabs")), l.createElement(O._31, {
                        linkTo: "/settings/notifications",
                        active: this.props.tabName === pi.Notifications,
                        "data-a-target": "notifications-tab"
                    }, Object(d.d)("Notifications", "SettingsTab")), l.createElement(O._31, {
                        linkTo: "/settings/connections",
                        active: this.props.tabName === pi.Connections,
                        "data-a-target": "connections-tab"
                    }, Object(d.d)("Connections", "SettingsTabs")), l.createElement(O._31, {
                        linkTo: "/subscriptions",
                        active: !1,
                        "data-a-target": "subscriptions-tab"
                    }, Object(d.d)("Subscriptions", "SettingsTabs")))))
                }, t.prototype.renderPremiumTab = function() {
                    if (this.props.data.currentUser && this.props.data.requestInfo) {
                        var e = this.props.data.currentUser,
                            t = e.hasPrime;
                        return !e.hasTurbo && Object(Gt.a)(this.props.data.requestInfo.countryCode) || t ? l.createElement(O._31, {
                            linkTo: "/settings/prime",
                            active: this.props.tabName === pi.Prime,
                            "data-test-selector": "test-settings-prime-tab",
                            "data-a-target": "prime-tab"
                        }, Object(d.d)("Twitch Prime", "SettingsTabs")) : l.createElement(O._31, {
                            linkTo: "/settings/turbo",
                            active: this.props.tabName === pi.Turbo,
                            "data-test-selector": "test-settings-turbo-tab",
                            "data-a-target": "turbo-tab"
                        }, Object(d.d)("Twitch Turbo", "SettingsTabs"))
                    }
                }, t
            }(l.Component),
            yi = Object(T.compose)(Object(m.d)("SettingsTabs"), Object(w.a)(vi))(bi),
            Si = function() {
                return l.createElement(O._7, {
                    fullWidth: !0,
                    display: O.Q.Flex,
                    flexDirection: O.S.Column,
                    alignItems: O.c.Center
                }, l.createElement(O.P, {
                    fontSize: O.U.Size2
                }, Object(d.d)("You've gone Turbo!", "CancelTurboLink")), l.createElement(O.P, null, Object(d.d)("We hope you're enjoying your new chat shwag and watching ad-free.", "CancelTurboLink")), l.createElement(O.N, {
                    to: "/products/turbo/ticket/edit"
                }, Object(d.d)("Cancel Turbo", "CancelTurboLink")))
            },
            ki = n("hRPz"),
            _i = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return d.a.buildType === v.a.Production ? null : this.props.data.currentUser ? this.props.data.currentUser.hasPrime ? l.createElement(u.b, {
                        to: "/settings/prime"
                    }) : this.props.data.currentUser.hasTurbo ? l.createElement("div", null, l.createElement(S.a, null, l.createElement(je.a, null, l.createElement(Si, null)))) : Object(Gt.a)(this.props.data.requestInfo.countryCode) ? l.createElement(u.b, {
                        to: "/settings/prime"
                    }) : (window.location.replace("https://www.twitch.tv/products/turbo/ticket"), null) : this.props.data.loading ? l.createElement(O._9, {
                        fillContent: !0
                    }) : l.createElement(kn, null)
                }, t = c.__decorate([Object(m.d)("SettingsTurboPage", {
                    autoReportInteractive: !0,
                    destination: b.a.SettingsTurbo
                }), Object(f.a)({
                    location: y.PageviewLocation.SettingsPage
                }), Object(w.a)(ki)], t)
            }(l.Component),
            Ei = 3,
            Ci = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.redirectToProfilePage = function() {
                        return l.createElement(u.b, {
                            to: "/settings/profile"
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    d.o.setPageTitle()
                }, t.prototype.render = function() {
                    return this.props.isLoggedIn ? l.createElement(O._7, {
                        padding: {
                            x: Ei
                        },
                        fullHeight: !0,
                        fullWidth: !0,
                        display: O.Q.Flex,
                        flexDirection: O.S.Column,
                        flexWrap: O.T.NoWrap
                    }, l.createElement(g.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), l.createElement(h.a, null, l.createElement(yi, {
                        tabName: this.props.match.params.tab
                    })), l.createElement(O._7, {
                        padding: {
                            y: 2
                        }
                    }, l.createElement(u.e, null, l.createElement(u.c, {
                        path: "/settings/profile",
                        component: Gn
                    }), l.createElement(u.c, {
                        path: "/settings/prime",
                        component: yn
                    }), l.createElement(u.c, {
                        path: "/settings/turbo",
                        component: _i
                    }), l.createElement(u.c, {
                        path: "/settings/channel",
                        component: Ie
                    }), l.createElement(u.c, {
                        path: "/settings/security",
                        component: fi
                    }), l.createElement(u.c, {
                        path: "/settings/notifications",
                        component: Wt
                    }), l.createElement(u.c, {
                        path: "/settings/connections",
                        component: Nt
                    }), l.createElement(u.c, {
                        path: "/settings",
                        render: this.redirectToProfilePage
                    })))) : (this.props.login(), l.createElement(p.a, {
                        message: Object(d.d)("You must be logged in to view this page", "SettingsRoot")
                    }))
                }, t = c.__decorate([Object(m.d)("SettingsRoot", {
                    autoReportInteractive: !0
                })], t)
            }(l.Component),
            wi = Object(u.f)(Ci);
        var Ni = Object(i.b)(function(e) {
            return {
                isLoggedIn: Object(s.d)(e)
            }
        }, function(e) {
            return Object(r.b)({
                login: function() {
                    return Object(o.f)(a.a.SettingsPage)
                }
            }, e)
        })(wi);
        n.d(t, "SettingsRoot", function() {
            return Ni
        })
    },
    LBNC: function(e, t, n) {
        "use strict";
        t.a = function() {
            return "serviceWorker" in window.navigator && "PushManager" in window
        }
    },
    MKJo: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t, n) {
            return Math.min(Math.max(e, t), n)
        }
    },
    McHv: function(e, t) {
        e.exports = function(e) {
            4 !== e.length && 5 !== e.length || (e = function(e) {
                for (var t = "#", n = 1; n < e.length; n++) {
                    var i = e.charAt(n);
                    t += i + i
                }
                return t
            }(e));
            var t = [parseInt(e.substring(1, 3), 16), parseInt(e.substring(3, 5), 16), parseInt(e.substring(5, 7), 16)];
            if (9 === e.length) {
                var n = parseFloat((parseInt(e.substring(7, 9), 16) / 255).toFixed(2));
                t.push(n)
            }
            return t
        }
    },
    OA9H: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SettingsProfilePage"
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
                                    value: "description"
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
                                    value: "email"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isEmailVerified"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 100
            }
        };
        n.loc.source = {
            body: "query SettingsProfilePage {\ncurrentUser {\nid\ndescription\ndisplayName\nemail\nisEmailVerified\nlogin\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    OB6b: function(e, t) {},
    OOv5: function(e, t, n) {
        "use strict";
        var i, r = n("TToO"),
            a = n("6sO2"),
            o = n("oIkB"),
            s = n("Aj/L");
        ! function(e) {
            e.NewSession = "new-session", e.ClearSession = "clear-session"
        }(i || (i = {}));
        var c = a.o.logger.withCategory("host-service-worker-messenger"),
            l = function() {
                function e() {}
                return e.syncSession = function() {
                    var e = Object(s.c)(a.o.store.getState());
                    if (e) {
                        var t = e.id;
                        this.sendMessage({
                            type: i.NewSession,
                            userId: t
                        })
                    } else this.sendMessage({
                        type: i.ClearSession
                    })
                }, e.sendMessage = function(e) {
                    var t = this;
                    if (navigator.serviceWorker.controller) this.postMessage(e);
                    else {
                        c.debug("cannot postMessage immediately. waiting for a service worker to take control");
                        var n = function() {
                            c.debug("controller changed", {
                                controllerExists: !!navigator.serviceWorker.controller
                            }), navigator.serviceWorker.removeEventListener("controllerchange", n), t.postMessage(e)
                        };
                        navigator.serviceWorker.addEventListener("controllerchange", n)
                    }
                }, e.postMessage = function(e) {
                    navigator.serviceWorker.controller ? (c.debug("postMessage", e), navigator.serviceWorker.controller.postMessage(JSON.stringify(e))) : c.error(new Error("navigator.serviceWorker.controller is null"), "postMessage called with no controlling service worker")
                }, e
            }(),
            u = function() {
                function e() {}
                return e.exists = function() {
                    return null !== a.o.storage.getOptional("browserPushNotificationsEnabled")
                }, e.isEnabled = function() {
                    return a.o.storage.get("browserPushNotificationsEnabled", !1)
                }, e.setEnabled = function() {
                    a.o.storage.set("browserPushNotificationsEnabled", !0)
                }, e.setDisabled = function() {
                    a.o.storage.set("browserPushNotificationsEnabled", !1)
                }, e
            }();
        var d = n("UbVv"),
            p = n("OtmA"),
            m = null;

        function g() {
            if (m) return m;
            var e = p.register({
                scope: "/"
            });
            return m = e || Promise.reject(new Error("service worker runtime not available"))
        }
        var h = n("JBcW"),
            f = n("TbkX");
        n.d(t, "a", function() {
            return b
        });
        var v = a.o.logger.withCategory("browser-push-notifications-manager"),
            b = function() {
                function e() {}
                return e.initialize = function() {
                    return this.initPromise ? this.initPromise : (this.initPromise = this.initializationLogic(), this.initPromise)
                }, e.initializationLogic = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return Object(d.a)() ? (v.debug("permissions have been denied. nothing to do here."), [2]) : [4, g()];
                                case 1:
                                    return n.sent(), e = Object(s.d)(a.o.store.getState()), [4, this.hasPushSubscription()];
                                case 2:
                                    return t = n.sent(), l.syncSession(), t ? u.exists() && !u.isEnabled() || !e ? [4, this.unsubscribe()] : [3, 4] : [3, 5];
                                case 3:
                                    n.sent(), n.label = 4;
                                case 4:
                                    return [3, 7];
                                case 5:
                                    return s.d ? !Object(d.b)() || u.exists() && !u.isEnabled() ? [3, 7] : [4, this.subscribe()] : [3, 7];
                                case 6:
                                    n.sent(), n.label = 7;
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, e.userSubscribe = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return u.setEnabled(), [4, this.subscribe()];
                                case 1:
                                    return t.sent(), Object(h.c)({
                                        allowed: Object(d.b)(),
                                        context: e
                                    }), [2]
                            }
                        })
                    })
                }, e.userUnsubscribe = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return u.setDisabled(), [4, this.unsubscribe()];
                                case 1:
                                    return t.sent(), Object(h.b)({
                                        context: e
                                    }), [2]
                            }
                        })
                    })
                }, e.hasPushSubscription = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.getPushSubscription()];
                                case 1:
                                    return [2, null !== e.sent()]
                            }
                        })
                    })
                }, e.subscribe = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, i, c, l;
                        return r.__generator(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    if (Object(d.a)()) throw new Error("notification permission is denied");
                                    if (!Object(s.d)(a.o.store.getState())) throw new Error("cannot be enabled logged out");
                                    if (!(e = a.b.get("notification_app_server_public_key", ""))) throw new Error("application server public key is blank");
                                    return [4, g()];
                                case 1:
                                    return t = u.sent(), [4, this.getPushSubscription()];
                                case 2:
                                    return (n = u.sent()) ? [3, 4] : (i = function(e) {
                                        for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), n = atob(t), i = new Uint8Array(n.length), r = 0; r < n.length; ++r) i[r] = n.charCodeAt(r);
                                        return i
                                    }(e), [4, t.pushManager.subscribe({
                                        userVisibleOnly: !0,
                                        applicationServerKey: i
                                    })]);
                                case 3:
                                    n = u.sent(), u.label = 4;
                                case 4:
                                    if (!(c = n.toJSON()).endpoint) throw new Error("push subscription 'endpoint' missing");
                                    if (!c.keys) throw new Error("push subscription 'keys' missing");
                                    if (!c.keys.auth) throw new Error("push subscription 'keys.auth' missing");
                                    if (!c.keys.p256dh) throw new Error("push subscription 'keys.p256dh' missing");
                                    return l = Object(o.a)({
                                        endpoint: c.endpoint,
                                        auth: c.keys.auth,
                                        p256DH: c.keys.p256dh
                                    }), [4, a.o.apollo.client.mutate(r.__assign({
                                        mutation: f
                                    }, l))];
                                case 5:
                                    return u.sent(), [2]
                            }
                        })
                    })
                }, e.unsubscribe = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return r.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.getPushSubscription()];
                                case 1:
                                    return (e = t.sent()) ? [4, e.unsubscribe()] : [2];
                                case 2:
                                    if (!t.sent()) throw new Error("push subscription unsubscribe unexpectedly failed");
                                    return [2]
                            }
                        })
                    })
                }, e.getPushSubscription = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return r.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, g()];
                                case 1:
                                    return [4, t.sent().pushManager.getSubscription()];
                                case 2:
                                    return (e = t.sent()) ? [2, e] : [2, null]
                            }
                        })
                    })
                }, e
            }()
    },
    OjIq: function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            r = n("Odds"),
            a = function(e) {
                var t = null;
                return e.title && (t = i.createElement(r._7, {
                    padding: {
                        bottom: 1
                    }
                }, i.createElement(r.P, {
                    fontSize: r.U.Size6,
                    color: e.error ? r.J.Error : r.J.Base,
                    bold: !0
                }, e.title))), i.createElement(r._30, {
                    padding: 2,
                    borderTop: !0
                }, t, e.children, e.errorMessage && i.createElement(r.P, {
                    color: r.J.Error,
                    fontSize: r.U.Size7
                }, e.errorMessage))
            };
        n.d(t, "a", function() {
            return a
        })
    },
    Op8X: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_PSNConnection"
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
                                    value: "ssoLinks"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "app"
                                    },
                                    value: {
                                        kind: "StringValue",
                                        value: "psn",
                                        block: !1
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "app"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "ssoID"
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
                end: 98
            }
        };
        n.loc.source = {
            body: 'query Settings_Connections_PSNConnection {\ncurrentUser {\nid\nssoLinks(app: "psn") {\napp\nssoID\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Q6se: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "TwoFactorAuthenticationSetting_CurrentUser"
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
                                    value: "isEmailVerified"
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
                                            value: "isGlobalMod"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isSiteAdmin"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
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
                end: 129
            }
        };
        n.loc.source = {
            body: "query TwoFactorAuthenticationSetting_CurrentUser {\ncurrentUser {\nid\nisEmailVerified\nroles {\nisGlobalMod\nisSiteAdmin\nisStaff\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Qe41: function(e, t) {
        e.exports = function(e) {
            var t = "rgb";
            return 4 === e.length && (t += "a"), e[0] = Math.round(e[0]), e[1] = Math.round(e[1]), e[2] = Math.round(e[2]), t + "(" + e.join(",") + ")"
        }
    },
    RC0U: function(e, t) {},
    RPon: function(e, t, n) {
        var i = n("a4Db"),
            r = n("II0X");

        function a(e, t) {
            switch (e = parseFloat(e), t) {
                case 0:
                    return r(e, 0, 360);
                case 1:
                case 2:
                    return r(e, 0, 100);
                case 3:
                    return r(e, 0, 1)
            }
        }
        e.exports = function(e) {
            return i(e).map(a)
        }
    },
    ScRf: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "Chat_UpdateChatColor"
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
                                value: "UpdateChatColorInput"
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
                            value: "updateChatColor"
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
                                            value: "chatColor"
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
                end: 117
            }
        };
        n.loc.source = {
            body: "mutation Chat_UpdateChatColor($input: UpdateChatColorInput!){\nupdateChatColor(input: $input) {\nuser {\nchatColor\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    TbkX: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "BrowserPushNotifications_AddBrowserPushSubscription"
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
                                value: "AddBrowserPushSubscriptionInput"
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
                            value: "addBrowserPushSubscription"
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
                                    value: "browserPushSubscriptionID"
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
                end: 178
            }
        };
        n.loc.source = {
            body: "mutation BrowserPushNotifications_AddBrowserPushSubscription($input: AddBrowserPushSubscriptionInput!) {\naddBrowserPushSubscription(input: $input) {\nbrowserPushSubscriptionID\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Tt3k: function(e, t, n) {
        "use strict";
        t.b = function(e, t, n) {
            var i = new FileReader;
            i.onloadend = function() {
                n && n(i.result)
            }, i.readAsDataURL(e);
            var r = new FileReader;
            r.onloadend = function() {
                t(r.result)
            }, r.readAsArrayBuffer(e)
        }, t.a = function(e) {
            var t = "";
            if (e && e.name) {
                var n = e.name;
                t = n.slice((Math.max(0, n.lastIndexOf(".")) || 1 / 0) + 1)
            }
            "" === t && (t = "png");
            return t
        }
    },
    TubT: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PostSubscriptionsToggle"
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
                                    value: "primeSettings"
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
                                            value: "isSubCreditChatNotificationEnabled"
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
                end: 108
            }
        };
        n.loc.source = {
            body: "query PostSubscriptionsToggle {\ncurrentUser {\nid\nprimeSettings {\nid\nisSubCreditChatNotificationEnabled\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    UAbV: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_XboxOneConnection"
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
                                    value: "ssoLinks"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "app"
                                    },
                                    value: {
                                        kind: "StringValue",
                                        value: "xb1",
                                        block: !1
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "app"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "ssoID"
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
                end: 102
            }
        };
        n.loc.source = {
            body: 'query Settings_Connections_XboxOneConnection {\ncurrentUser {\nid\nssoLinks(app: "xb1") {\napp\nssoID\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    UD8e: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UpdateBroadcastSettings"
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
                                value: "UpdateBroadcastSettingsInput"
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
                            value: "updateBroadcastSettings"
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
                                    value: "broadcastSettings"
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
                                            value: "isMature"
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
                end: 152
            }
        };
        n.loc.source = {
            body: "mutation UpdateBroadcastSettings($input: UpdateBroadcastSettingsInput!) {\nupdateBroadcastSettings(input: $input) {\nbroadcastSettings {\nid\nisMature\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    UILf: function(e, t, n) {
        "use strict";
        var i, r = n("GWfv"),
            a = (i = r) && i.__esModule ? i : {
                default: i
            };
        e.exports = a.default
    },
    UIkr: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UpdateUserDirectoryHiddenSetting"
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
                                value: "UpdateUserDirectoryHiddenInput"
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
                            value: "updateUserDirectoryHidden"
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
                                                    value: "isDirectoryHidden"
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
                end: 174
            }
        };
        n.loc.source = {
            body: "mutation UpdateUserDirectoryHiddenSetting($input: UpdateUserDirectoryHiddenInput!) {\nupdateUserDirectoryHidden(input: $input) {\nuser {\nid\nsettings {\nisDirectoryHidden\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    UbVv: function(e, t, n) {
        "use strict";
        t.a = function() {
            return window.Notification && "denied" === window.Notification.permission
        }, t.b = function() {
            return window.Notification && "granted" === window.Notification.permission
        }
    },
    "V/Pj": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        o(n("GiK3"));
        var i = o(n("O27J")),
            r = o(n("KSGD")),
            a = o(n("MKJo"));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function s() {}
        var c = {
            propTypes: {
                onChange: r.default.func.isRequired,
                max: r.default.number
            },
            getDefaultProps: function() {
                return {
                    onChange: s,
                    max: 1
                }
            },
            getInitialState: function() {
                return {
                    active: !1
                }
            },
            componentDidMount: function() {
                this.document = i.default.findDOMNode(this).ownerDocument, this.rect = this.getBoundingRect()
            },
            startUpdates: function(e) {
                var t = this.document;
                t.addEventListener("mousemove", this.handleUpdate), t.addEventListener("touchmove", this.handleUpdate), t.addEventListener("mouseup", this.stopUpdates), t.addEventListener("touchend", this.stopUpdates), e.preventDefault();
                var n = this.getPosition(e),
                    i = n.x,
                    r = n.y;
                this.rect = this.getBoundingRect(), this.setState({
                    active: !0
                }), this.updatePosition(this.rect, i, r)
            },
            handleUpdate: function(e) {
                e.preventDefault();
                var t = this.getPosition(e),
                    n = t.x,
                    i = t.y;
                this.updatePosition(this.rect, n, i)
            },
            stopUpdates: function() {
                var e = this.document;
                e.removeEventListener("mousemove", this.handleUpdate), e.removeEventListener("touchmove", this.handleUpdate), e.removeEventListener("mouseup", this.stopUpdates), e.removeEventListener("touchend", this.stopUpdates), this.setState({
                    active: !1
                })
            },
            getPosition: function(e) {
                return e.touches && (e = e.touches[0]), {
                    x: e.clientX,
                    y: e.clientY
                }
            },
            getPercentageValue: function(e) {
                return e / this.props.max * 100 + "%"
            },
            getScaledValue: function(e) {
                return (0, a.default)(e, 0, 1) * this.props.max
            },
            getBoundingRect: function() {
                return i.default.findDOMNode(this).getBoundingClientRect()
            }
        };
        t.default = c
    },
    W6ca: function(e, t, n) {
        "use strict";
        t.c = function(e, t) {
            if (!t) throw new Error("Attempted to upload an empty file object.");
            var n = decodeURI(e);
            return fetch(n, {
                method: "PUT",
                body: new Blob([t])
            })
        }, t.b = function(e, t, n) {
            if (void 0 === n) throw new Error("No default avatar selected.");
            return fetch(r.a.krakenEndpoint + "/users/" + e + "/default_images?client_id=" + r.a.authSettings.clientID + "&api_version=" + r.a.defaultAPIVersion, {
                method: "PUT",
                headers: {
                    Authorization: "OAuth " + t,
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    default_profile_image: a.b[n].id
                })
            })
        }, t.a = function(e, t, n, a) {
            return i.__awaiter(this, void 0, void 0, function() {
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, fetch(r.a.krakenEndpoint + "/users/" + e + "/upload_image?client_id=" + r.a.authSettings.clientID + "&api_version=" + r.a.defaultAPIVersion + "&image_type=" + n + "&format=" + a, {
                                method: "POST",
                                headers: {
                                    Authorization: "OAuth " + t
                                }
                            })];
                        case 1:
                            return [2, i.sent().json()]
                    }
                })
            })
        };
        var i = n("TToO"),
            r = n("6sO2"),
            a = n("puy8")
    },
    WAou: function(e, t, n) {
        "use strict";
        var i = {};
        e.exports = i
    },
    WKFf: function(e, t) {},
    WYac: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_OtherConnectionsList"
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
                                    value: "clientAuthorizations"
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
                                            value: "clientName"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "createdAt"
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
                end: 125
            }
        };
        n.loc.source = {
            body: "query Settings_Connections_OtherConnectionsList {\ncurrentUser {\nid\nclientAuthorizations {\nclientID\nclientName\ncreatedAt\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    WaOj: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_ChannelVideo_ChatRulesTextArea"
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
                                    value: "chatSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "rules"
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
                end: 91
            }
        };
        n.loc.source = {
            body: "query Settings_ChannelVideo_ChatRulesTextArea {\ncurrentUser {\nid\nchatSettings {\nrules\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    WrTc: function(e, t, n) {
        "use strict";
        var i, r = n("TToO"),
            a = n("GiK3"),
            o = n("6sO2"),
            s = n("Odds");
        ! function(e) {
            e[e.NoChanges = 0] = "NoChanges", e[e.DirtyChanges = 1] = "DirtyChanges", e[e.Working = 2] = "Working", e[e.Success = 3] = "Success", e[e.Error = 4] = "Error"
        }(i || (i = {}));
        var c = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.render = function() {
                var e = s.z.Default,
                    t = Object(o.d)("Save Changes", "SaveSettingsFooter"),
                    n = s.A.Default,
                    r = !1;
                this.props.status === i.Working ? e = s.z.Loading : this.props.status === i.Success ? e = s.z.Success : this.props.status === i.Error ? (n = s.A.Alert, t = Object(o.d)("Failed to save settings. Try again.", "SaveSettingsFooter")) : this.props.status === i.NoChanges && (r = !0);
                var c = null;
                return this.props.onClickCancel && (c = a.createElement(s._7, {
                    padding: {
                        left: 1
                    },
                    display: s.Q.Inline
                }, a.createElement(s.u, {
                    disabled: this.props.status !== i.DirtyChanges && this.props.status !== i.Error,
                    size: s.y.Large,
                    type: s.A.Text,
                    "data-test-selector": "cancel-button-selector",
                    onClick: this.props.onClickCancel
                }, Object(o.d)("Cancel", "SaveSettingsFooter")))), a.createElement(s._7, null, a.createElement(s.u, {
                    disabled: r,
                    size: s.y.Large,
                    state: e,
                    type: n,
                    onClick: this.props.onClickSave,
                    "data-a-target": "save-user-settings-button",
                    "data-test-selector": "save-button-selector"
                }, t), c)
            }, t
        }(a.Component);
        n.d(t, !1, function() {
            return "save-button-selector"
        }), n.d(t, !1, function() {
            return "cancel-button-selector"
        }), n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return c
        })
    },
    XCQF: function(e, t) {},
    XdSf: function(e, t, n) {
        "use strict";
        t.a = function() {
            var e = this;
            return Object(r.a)(a, {
                props: function(t) {
                    return {
                        updateChatColorMutation: function(n) {
                            return i.__awaiter(e, void 0, void 0, function() {
                                return i.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return t.mutate ? [4, t.mutate({
                                                variables: {
                                                    input: {
                                                        color: n
                                                    }
                                                }
                                            })] : [3, 2];
                                        case 1:
                                            return [2, e.sent().data];
                                        case 2:
                                            throw new Error("Update chat color mutation is not ready")
                                    }
                                })
                            })
                        }
                    }
                }
            })
        };
        var i = n("TToO"),
            r = n("7vx8"),
            a = n("ScRf");
        n.n(a)
    },
    a4Db: function(e, t) {
        var n = /-?\d+(\.\d+)?%?/g;
        e.exports = function(e) {
            return e.match(n)
        }
    },
    ar1V: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_ChannelVideo_BlockHyperlinksToggle"
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
                                    value: "chatSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "blockLinks"
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
                end: 100
            }
        };
        n.loc.source = {
            body: "query Settings_ChannelVideo_BlockHyperlinksToggle {\ncurrentUser {\nid\nchatSettings {\nblockLinks\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    bX1P: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UpdateChatSettings"
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
                                value: "UpdateChatSettingsInput"
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
                            value: "updateChatSettings"
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
                                    value: "chatSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "autoModLevel"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "blockLinks"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "chatDelayMs"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isOptedOutOfGlobalBannedWordsList"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "requireVerifiedAccount"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "rules"
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
                end: 219
            }
        };
        n.loc.source = {
            body: "mutation UpdateChatSettings($input: UpdateChatSettingsInput!) {\nupdateChatSettings(input: $input) {\nchatSettings {\nautoModLevel\nblockLinks\nchatDelayMs\nisOptedOutOfGlobalBannedWordsList\nrequireVerifiedAccount\nrules\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    cAbv: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChatColorPicker_CurrentUser"
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
                                    value: "login"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "chatColor"
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
                end: 84
            }
        };
        n.loc.source = {
            body: "query ChatColorPicker_CurrentUser {\ncurrentUser {\nid\nlogin\nchatColor\ndisplayName\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    cumT: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SettingsPrimePage_CurrentUser"
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
                                    value: "hasPrime"
                                },
                                arguments: [],
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 95
            }
        };
        n.loc.source = {
            body: "query SettingsPrimePage_CurrentUser {\ncurrentUser {\nid\nhasPrime\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    ebTC: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("2KeS"),
            a = n("V5M+"),
            o = n("Aj/L"),
            s = n("TToO"),
            c = n("GiK3"),
            l = n("6sO2"),
            u = n("J8WN"),
            d = n("+8VM"),
            p = n("7vx8"),
            m = n("HZww"),
            g = n("4Q9N"),
            h = n("Tt3k"),
            f = n("W6ca"),
            v = n("xgnX"),
            b = n("CSlQ"),
            y = n("Odds"),
            S = (n("+Aaf"), n("0H+u")),
            k = ["image/*"],
            _ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imageUpdated: !1,
                        loading: !1
                    }, t.currentImage = null, t.logger = l.j.withCategory("UserImageUploader"), t.onImageInputChange = function(e) {
                        var n;
                        if (null !== e) {
                            t.setState({
                                loading: !0
                            }), n = e[0];
                            var i = Object(h.a)(n),
                                r = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(r, 10) > 10 ? t.setState({
                                statusMessage: v.b.BadSizeError
                            }) : Object(h.b)(n, function(e) {
                                return s.__awaiter(t, void 0, void 0, function() {
                                    var t, n, r, a, o = this;
                                    return s.__generator(this, function(s) {
                                        switch (s.label) {
                                            case 0:
                                                this.currentImage = e, s.label = 1;
                                            case 1:
                                                return s.trys.push([1, 3, , 4]), [4, Object(f.a)(this.props.userID, this.props.authToken, this.props.imageType, i)];
                                            case 2:
                                                return t = s.sent(), n = t.upload_url, r = t.upload_id, [3, 4];
                                            case 3:
                                                return a = s.sent(), this.logger.error(a, "Request for upload ID failed to get expected response from server."), this.setState({
                                                    statusMessage: v.b.UnexpectedError
                                                }), [2];
                                            case 4:
                                                return this.unsubscribe = l.k.subscribe({
                                                    topic: Object(m.j)(this.props.userID),
                                                    success: function() {
                                                        try {
                                                            Object(f.c)(n, o.currentImage)
                                                        } catch (e) {
                                                            o.logger.error(e, "Image upload failed."), o.unsubscribe(), o.setState({
                                                                statusMessage: v.b.UnexpectedError,
                                                                loading: !1
                                                            })
                                                        }
                                                        o.timeoutHandle = setTimeout(function() {
                                                            return o.handlePubSubTimeout()
                                                        }, 1e4)
                                                    },
                                                    failure: function() {
                                                        o.setState({
                                                            statusMessage: v.b.UnexpectedError,
                                                            loading: !1
                                                        })
                                                    },
                                                    onMessage: function(e) {
                                                        if (e.upload_id === r) {
                                                            clearTimeout(o.timeoutHandle);
                                                            var t = null;
                                                            e.status === v.a.Success ? t = v.b.Success : e.status === v.a.BadSize ? (t = v.b.BadSizeError, o.currentImage = null) : e.status === v.a.NonImage ? (t = v.b.NonImageError, o.currentImage = null) : e.status === v.a.WrongFormat ? (t = v.b.WrongFormatError, o.currentImage = null) : (t = v.b.UnexpectedError, o.currentImage = null), o.unsubscribe && o.unsubscribe(), o.setState({
                                                                statusMessage: t,
                                                                loading: !1,
                                                                imageUpdated: e.status === v.a.Success
                                                            })
                                                        }
                                                    }
                                                }), [2]
                                        }
                                    })
                                })
                            })
                        } else t.setState({
                            statusMessage: v.b.ImageNotSelected
                        })
                    }, t.handlePubSubTimeout = function() {
                        t.unsubscribe(), t.setState({
                            statusMessage: v.b.TimeoutError
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    void 0 !== this.unsubscribe && this.unsubscribe(), this.timeoutHandle && clearTimeout(this.timeoutHandle)
                }, t.prototype.componentDidUpdate = function() {
                    var e = this;
                    this.state.imageUpdated && setTimeout(function() {
                        e.props.data && e.props.data.refetch(), e.setState({
                            imageUpdated: !1
                        }), e.props.closeModal()
                    }, 1e3)
                }, t.prototype.render = function() {
                    var e = this.props.login;
                    this.props.displayName && (e = this.props.displayName);
                    var t = Object(l.d)("Editing profile banner for {userName}", {
                        userName: e
                    }, "UserImageUploader");
                    this.props.imageType === g.a.ChannelOfflineImage && (t = Object(l.d)("Editing video banner for {userName}", {
                        userName: e
                    }, "UserImageUploader"));
                    var n = null;
                    if (this.state.loading) n = c.createElement(y._7, {
                        className: "user-image-uploader__upload-svg--anim-fill",
                        position: y._14.Relative,
                        "data-test-selector": "loading-status"
                    }, c.createElement(y._20, {
                        asset: y._21.Upload,
                        type: y._22.Brand,
                        width: 99,
                        height: 76
                    }));
                    else {
                        var i = Object(l.d)("Recommended image size: 1200x380 and less than 10MB.", "UserImageUploader");
                        this.props.imageType === g.a.ChannelOfflineImage && (i = Object(l.d)("Recommended image size: 1920x1080 and less than 10MB.", "UserImageUploader")), n = c.createElement(y._7, null, c.createElement(y._7, {
                            className: "user-image-uploader__upload-info"
                        }, c.createElement(y._7, null, c.createElement(y._20, {
                            asset: y._21.Plus,
                            type: y._22.Alt2,
                            height: 20,
                            width: 20
                        })), c.createElement(y.P, {
                            type: y._44.H3,
                            color: y.J.Alt2,
                            fontSize: y.U.Size4
                        }, Object(l.d)("Upload a Photo", "User Image Uploader"))), c.createElement(y._7, {
                            className: "user-image-uploader__upload-recommendation",
                            position: y._14.Absolute,
                            textAlign: y._40.Left,
                            attachLeft: !0,
                            attachBottom: !0,
                            margin: {
                                left: 3,
                                bottom: 1
                            }
                        }, c.createElement(y.P, {
                            type: y._44.H6,
                            color: y.J.Alt2,
                            fontSize: y.U.Size8,
                            align: y._54.TextBottom
                        }, i)))
                    }
                    var r = null;
                    this.props.showCloser && (r = c.createElement(d.a, null));
                    var a = null;
                    if (null !== this.state.statusMessage) {
                        var o = Object(v.c)(this.state.statusMessage);
                        a = c.createElement(y._11, {
                            label: o.message,
                            type: o.type
                        })
                    }
                    return c.createElement(y._7, {
                        className: "user-image-uploader",
                        position: y._14.Relative,
                        fullHeight: !0
                    }, c.createElement(y._30, {
                        className: "user-image-uploader__background-container",
                        background: y.m.Base,
                        fullWidth: !0
                    }, c.createElement(y._7, {
                        padding: 2,
                        display: y.Q.InlineBlock,
                        position: y._14.Relative,
                        textAlign: y._40.Center,
                        fullWidth: !0
                    }, c.createElement(y._30, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        }
                    }, c.createElement(y.P, {
                        type: y._44.H3,
                        fontSize: y.U.Size4
                    }, t)), c.createElement(y._7, {
                        className: "user-image-uploader__upload-container",
                        display: y.Q.InlineBlock,
                        position: y._14.Relative,
                        textAlign: y._40.Center,
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(y._7, {
                        className: "user-image-uploader__upload",
                        display: y.Q.InlineBlock,
                        position: y._14.Relative,
                        textAlign: y._40.Center
                    }, c.createElement(u.a, {
                        allowedFileTypes: k,
                        onFilesSubmitted: this.onImageInputChange
                    }, n))), c.createElement(y._30, {
                        "data-test-selector": "status-message",
                        fontSize: y.U.Size4,
                        position: y._14.Relative,
                        textAlign: y._40.Center,
                        className: "user-image-uploader__status-message"
                    }, a))), r)
                }, t = s.__decorate([Object(p.a)(S, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(c.Component),
            E = Object(b.d)("User Image Upload")(_);
        var C = Object(i.b)(function(e) {
            return {
                authToken: Object(o.a)(e)
            }
        }, function(e, t) {
            return Object(r.b)({
                closeModal: function() {
                    return t.successCallback && t.successCallback(), Object(a.c)()
                }
            }, e)
        })(E);
        n.d(t, "a", function() {
            return C
        })
    },
    eppJ: function(e, t) {},
    fVPD: function(e, t) {
        e.exports = function(e) {
            var t, n, i, r, a, o = e[0] / 360,
                s = e[1] / 100,
                c = e[2] / 100;
            if (0 == s) return [a = 255 * c, a, a];
            t = 2 * c - (n = c < .5 ? c * (1 + s) : c + s - c * s), r = [0, 0, 0];
            for (var l = 0; l < 3; l++)(i = o + 1 / 3 * -(l - 1)) < 0 && i++, i > 1 && i--, a = 6 * i < 1 ? t + 6 * (n - t) * i : 2 * i < 1 ? n : 3 * i < 2 ? t + (n - t) * (2 / 3 - i) * 6 : t, r[l] = 255 * a;
            return r
        }
    },
    "g+dK": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "GlobalNotificationSettings_SetNotificationSetting"
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
                                value: "SetNotificationSettingInput"
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
                            value: "setNotificationSetting"
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
                                    value: "settingState"
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
                end: 155
            }
        };
        n.loc.source = {
            body: "mutation GlobalNotificationSettings_SetNotificationSetting($input: SetNotificationSettingInput!) {\nsetNotificationSetting(input: $input) {\nsettingState\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    gLfK: function(e, t, n) {
        "use strict";
        var i = n("GiK3"),
            r = n("Odds"),
            a = function(e) {
                return i.createElement(r._7, {
                    margin: {
                        top: 1
                    }
                }, i.createElement(r.P, {
                    color: r.J.Alt,
                    "data-a-target": e.textDataTarget
                }, e.text), e.extraText && i.createElement(r._7, {
                    margin: {
                        top: .5
                    }
                }, i.createElement(r.P, {
                    color: r.J.Alt2
                }, e.extraText)))
            };
        n.d(t, "a", function() {
            return a
        })
    },
    goep: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ProfileImageSetting"
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
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 94
            }
        };
        n.loc.source = {
            body: "query ProfileImageSetting {\ncurrentUser {\nid\nlogin\ndisplayName\nprofileImageURL(width: 300)\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    h08i: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_FacebookConnection"
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
                                    value: "accountConnections"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "facebook"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "hasConnection"
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
                end: 118
            }
        };
        n.loc.source = {
            body: "query Settings_Connections_FacebookConnection {\ncurrentUser {\nid\naccountConnections {\nfacebook {\nhasConnection\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    hPJb: function(e, t) {},
    hRPz: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SettingsTurboPage"
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
                                    value: "hasPrime"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "hasTurbo"
                                },
                                arguments: [],
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 92
            }
        };
        n.loc.source = {
            body: "query SettingsTurboPage {\ncurrentUser {\nid\nhasPrime\nhasTurbo\n}\nrequestInfo {\ncountryCode\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    i1sU: function(e, t) {},
    iLlo: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_RokuConnection"
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
                                    value: "ssoLinks"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "app"
                                    },
                                    value: {
                                        kind: "StringValue",
                                        value: "roku",
                                        block: !1
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "app"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "ssoID"
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
                end: 100
            }
        };
        n.loc.source = {
            body: 'query Settings_Connections_RokuConnection {\ncurrentUser {\nid\nssoLinks(app: "roku") {\napp\nssoID\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    iOZM: function(e, t) {},
    "j7X+": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Security_HideDirectoryToggle"
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
                                            value: "isDirectoryHidden"
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
                end: 97
            }
        };
        n.loc.source = {
            body: "query Settings_Security_HideDirectoryToggle {\ncurrentUser {\nid\nsettings {\nisDirectoryHidden\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    jF7o: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (!e) return void i.j.warn("[onPopupClose] Attempted to observe a window that failed to open.");
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
        };
        var i = n("6sO2")
    },
    jZb3: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_Steam"
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
                                    value: "accountConnections"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "steam"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "hasConnection"
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
                end: 102
            }
        };
        n.loc.source = {
            body: "query Settings_Connections_Steam {\ncurrentUser {\nid\naccountConnections {\nsteam {\nhasConnection\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    jfv9: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UpdatePrimeSettings_PostSubscription"
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
                                value: "UpdatePrimeSettingsInput"
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
                            value: "updatePrimeSettings"
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
                                    value: "primeSettings"
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
                                            value: "isSubCreditChatNotificationEnabled"
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
                end: 179
            }
        };
        n.loc.source = {
            body: "mutation UpdatePrimeSettings_PostSubscription($input: UpdatePrimeSettingsInput!) {\nupdatePrimeSettings(input: $input) {\nprimeSettings {\nid\nisSubCreditChatNotificationEnabled\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    jtEV: function(e, t) {},
    mVHD: function(e, t) {},
    nmDn: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "UserProfileEditor"
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
                                    value: "login"
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
                                        value: "70"
                                    }
                                }],
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 104
            }
        };
        n.loc.source = {
            body: "query UserProfileEditor($login: String!) {\nuser(login: $login) {\nid\nlogin\nprofileImageURL(width: 70)\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    nq6q: function(e, t) {},
    nqey: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_ChannelChat_BannedChatters"
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
                                    value: "bannedUsers"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "bannedAt"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "bannedUser"
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
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "modUser"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 140
            }
        };
        n.loc.source = {
            body: "query Settings_ChannelChat_BannedChatters {\ncurrentUser {\nid\nbannedUsers {\nbannedAt\nbannedUser {\nid\nlogin\n}\nmodUser {\nid\ndisplayName\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    oYVU: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_ChannelVideo_MatureContent"
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
                                    value: "broadcastSettings"
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
                                            value: "isMature"
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
                end: 98
            }
        };
        n.loc.source = {
            body: "query Settings_ChannelVideo_MatureContent {\ncurrentUser {\nid\nbroadcastSettings {\nid\nisMature\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    ocV2: function(e, t) {},
    pkUp: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_Blizzard"
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
                                    value: "accountConnections"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "blizzard"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "hasConnection"
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
                                    value: "blizzardAccount"
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
                                            value: "region"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "battleTag"
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
                end: 148
            }
        };
        n.loc.source = {
            body: "query Settings_Connections_Blizzard {\ncurrentUser {\nid\naccountConnections {\nblizzard {\nhasConnection\n}\n}\nblizzardAccount {\nid\nregion\nbattleTag\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    r6UO: function(e, t, n) {
        var i = n("a4Db"),
            r = n("II0X");

        function a(e, t) {
            return t < 3 ? -1 != e.indexOf("%") ? Math.round(255 * r(parseInt(e, 10), 0, 100) / 100) : r(parseInt(e, 10), 0, 255) : r(parseFloat(e), 0, 1)
        }
        e.exports = function(e) {
            return i(e).map(a)
        }
    },
    rUMz: function(e, t, n) {
        "use strict";
        var i = function(e) {};
        e.exports = function(e, t, n, r, a, o, s, c) {
            if (i(t), !e) {
                var l;
                if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var u = [n, r, a, o, s, c],
                        d = 0;
                    (l = new Error(t.replace(/%s/g, function() {
                        return u[d++]
                    }))).name = "Invariant Violation"
                }
                throw l.framesToPop = 1, l
            }
        }
    },
    "s/Z0": function(e, t, n) {
        var i = n("RPon"),
            r = n("McHv"),
            a = n("r6UO"),
            o = n("fVPD");
        var s = {
            "#": r,
            hsl: function(e) {
                var t = i(e),
                    n = o(t);
                return 4 === t.length && n.push(t[3]), n
            },
            rgb: a
        };

        function c(e) {
            for (var t in s)
                if (0 === e.indexOf(t)) return s[t](e)
        }
        c.rgb = a, c.hsl = i, c.hex = r, e.exports = c
    },
    sVk6: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "UpdateUserSubscriptionSettings"
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
                                value: "UpdateUserSubscriptionSettingsInput"
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
                            value: "updateUserSubscriptionSettings"
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
                                    value: "subscriptionSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "giftsToFollowedChannelsOnly"
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
                end: 192
            }
        };
        n.loc.source = {
            body: "mutation UpdateUserSubscriptionSettings($input: UpdateUserSubscriptionSettingsInput!) {\nupdateUserSubscriptionSettings(input: $input) {\nsubscriptionSettings {\ngiftsToFollowedChannelsOnly\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    st1H: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_Twitter"
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
                                    value: "accountConnections"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "twitter"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "hasConnection"
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
                end: 106
            }
        };
        n.loc.source = {
            body: "query Settings_Connections_Twitter {\ncurrentUser {\nid\naccountConnections {\ntwitter {\nhasConnection\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    t4xU: function(e, t) {},
    tL94: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ProfileBannerSetting"
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "bannerImageURL"
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
                end: 82
            }
        };
        n.loc.source = {
            body: "query ProfileBannerSetting {\ncurrentUser {\nid\nlogin\ndisplayName\nbannerImageURL\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    tZ8z: function(e, t, n) {
        "use strict";
        var i = n("sgb3");
        e.exports = {
            shouldComponentUpdate: function(e, t) {
                return !i(this.props, e) || !i(this.state, t)
            }
        }
    },
    upQt: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_Connections_Xbox360Connection"
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
                                    value: "ssoLinks"
                                },
                                arguments: [{
                                    kind: "Argument",
                                    name: {
                                        kind: "Name",
                                        value: "app"
                                    },
                                    value: {
                                        kind: "StringValue",
                                        value: "xb360",
                                        block: !1
                                    }
                                }],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "app"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "ssoID"
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
                end: 104
            }
        };
        n.loc.source = {
            body: 'query Settings_Connections_Xbox360Connection {\ncurrentUser {\nid\nssoLinks(app: "xb360") {\napp\nssoID\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    vEIR: function(e, t) {
        e.exports = function(e) {
            var t = e[0] / 60,
                n = e[1] / 100,
                i = e[2] / 100,
                r = Math.floor(t) % 6,
                a = t - Math.floor(t),
                o = 255 * i * (1 - n),
                s = 255 * i * (1 - n * a),
                c = 255 * i * (1 - n * (1 - a));
            switch (i *= 255, r) {
                case 0:
                    return [i, c, o];
                case 1:
                    return [s, i, o];
                case 2:
                    return [o, i, c];
                case 3:
                    return [o, s, i];
                case 4:
                    return [c, o, i];
                case 5:
                    return [i, o, s]
            }
        }
    },
    vgA0: function(e, t, n) {
        var i = n("II0X");

        function r(e) {
            var t = Math.round(i(e, 0, 255)).toString(16);
            return 1 == t.length ? "0" + t : t
        }
        e.exports = function(e) {
            var t = 4 === e.length ? r(255 * e[3]) : "";
            return "#" + r(e[0]) + r(e[1]) + r(e[2]) + t
        }
    },
    "vm+z": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "UploadVideoPlayerBanner_User"
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
                                    value: "offlineImageURL"
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
                end: 98
            }
        };
        n.loc.source = {
            body: "query UploadVideoPlayerBanner_User($login: String!) {\nuser(login: $login) {\nid\nofflineImageURL\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    vzFj: function(e, t) {
        e.exports = function(e) {
            return (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3
        }
    },
    weaG: function(e, t) {},
    woYr: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Settings_ChannelVideo_EmailVerificationToggle"
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
                                    value: "chatSettings"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "requireVerifiedAccount"
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
                end: 114
            }
        };
        n.loc.source = {
            body: "query Settings_ChannelVideo_EmailVerificationToggle {\ncurrentUser {\nid\nchatSettings {\nrequireVerifiedAccount\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    wqO5: function(e, t, n) {
        "use strict";
        var i = n("BEQ0"),
            r = n("WAou"),
            a = n("rUMz"),
            o = "mixins";
        e.exports = function(e, t, n) {
            var s = [],
                c = {
                    mixins: "DEFINE_MANY",
                    statics: "DEFINE_MANY",
                    propTypes: "DEFINE_MANY",
                    contextTypes: "DEFINE_MANY",
                    childContextTypes: "DEFINE_MANY",
                    getDefaultProps: "DEFINE_MANY_MERGED",
                    getInitialState: "DEFINE_MANY_MERGED",
                    getChildContext: "DEFINE_MANY_MERGED",
                    render: "DEFINE_ONCE",
                    componentWillMount: "DEFINE_MANY",
                    componentDidMount: "DEFINE_MANY",
                    componentWillReceiveProps: "DEFINE_MANY",
                    shouldComponentUpdate: "DEFINE_ONCE",
                    componentWillUpdate: "DEFINE_MANY",
                    componentDidUpdate: "DEFINE_MANY",
                    componentWillUnmount: "DEFINE_MANY",
                    UNSAFE_componentWillMount: "DEFINE_MANY",
                    UNSAFE_componentWillReceiveProps: "DEFINE_MANY",
                    UNSAFE_componentWillUpdate: "DEFINE_MANY",
                    updateComponent: "OVERRIDE_BASE"
                },
                l = {
                    getDerivedStateFromProps: "DEFINE_MANY_MERGED"
                },
                u = {
                    displayName: function(e, t) {
                        e.displayName = t
                    },
                    mixins: function(e, t) {
                        if (t)
                            for (var n = 0; n < t.length; n++) p(e, t[n])
                    },
                    childContextTypes: function(e, t) {
                        e.childContextTypes = i({}, e.childContextTypes, t)
                    },
                    contextTypes: function(e, t) {
                        e.contextTypes = i({}, e.contextTypes, t)
                    },
                    getDefaultProps: function(e, t) {
                        e.getDefaultProps ? e.getDefaultProps = g(e.getDefaultProps, t) : e.getDefaultProps = t
                    },
                    propTypes: function(e, t) {
                        e.propTypes = i({}, e.propTypes, t)
                    },
                    statics: function(e, t) {
                        ! function(e, t) {
                            if (t)
                                for (var n in t) {
                                    var i = t[n];
                                    if (t.hasOwnProperty(n)) {
                                        var r = n in u;
                                        a(!r, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', n);
                                        var o = n in e;
                                        if (o) {
                                            var s = l.hasOwnProperty(n) ? l[n] : null;
                                            return a("DEFINE_MANY_MERGED" === s, "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", n), void(e[n] = g(e[n], i))
                                        }
                                        e[n] = i
                                    }
                                }
                        }(e, t)
                    },
                    autobind: function() {}
                };

            function d(e, t) {
                var n = c.hasOwnProperty(t) ? c[t] : null;
                y.hasOwnProperty(t) && a("OVERRIDE_BASE" === n, "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.", t), e && a("DEFINE_MANY" === n || "DEFINE_MANY_MERGED" === n, "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", t)
            }

            function p(e, n) {
                if (n) {
                    a("function" != typeof n, "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."), a(!t(n), "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");
                    var i = e.prototype,
                        r = i.__reactAutoBindPairs;
                    for (var s in n.hasOwnProperty(o) && u.mixins(e, n.mixins), n)
                        if (n.hasOwnProperty(s) && s !== o) {
                            var l = n[s],
                                p = i.hasOwnProperty(s);
                            if (d(p, s), u.hasOwnProperty(s)) u[s](e, l);
                            else {
                                var m = c.hasOwnProperty(s);
                                if ("function" != typeof l || m || p || !1 === n.autobind)
                                    if (p) {
                                        var f = c[s];
                                        a(m && ("DEFINE_MANY_MERGED" === f || "DEFINE_MANY" === f), "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.", f, s), "DEFINE_MANY_MERGED" === f ? i[s] = g(i[s], l) : "DEFINE_MANY" === f && (i[s] = h(i[s], l))
                                    } else i[s] = l;
                                else r.push(s, l), i[s] = l
                            }
                        }
                }
            }

            function m(e, t) {
                for (var n in a(e && t && "object" == typeof e && "object" == typeof t, "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."), t) t.hasOwnProperty(n) && (a(void 0 === e[n], "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.", n), e[n] = t[n]);
                return e
            }

            function g(e, t) {
                return function() {
                    var n = e.apply(this, arguments),
                        i = t.apply(this, arguments);
                    if (null == n) return i;
                    if (null == i) return n;
                    var r = {};
                    return m(r, n), m(r, i), r
                }
            }

            function h(e, t) {
                return function() {
                    e.apply(this, arguments), t.apply(this, arguments)
                }
            }

            function f(e, t) {
                var n = t.bind(e);
                return n
            }
            var v = {
                    componentDidMount: function() {
                        this.__isMounted = !0
                    }
                },
                b = {
                    componentWillUnmount: function() {
                        this.__isMounted = !1
                    }
                },
                y = {
                    replaceState: function(e, t) {
                        this.updater.enqueueReplaceState(this, e, t)
                    },
                    isMounted: function() {
                        return !!this.__isMounted
                    }
                },
                S = function() {};
            return i(S.prototype, e.prototype, y),
                function(e) {
                    var t = function(e, i, o) {
                        this.__reactAutoBindPairs.length && function(e) {
                            for (var t = e.__reactAutoBindPairs, n = 0; n < t.length; n += 2) {
                                var i = t[n],
                                    r = t[n + 1];
                                e[i] = f(e, r)
                            }
                        }(this), this.props = e, this.context = i, this.refs = r, this.updater = o || n, this.state = null;
                        var s = this.getInitialState ? this.getInitialState() : null;
                        a("object" == typeof s && !Array.isArray(s), "%s.getInitialState(): must return an object or null", t.displayName || "ReactCompositeComponent"), this.state = s
                    };
                    for (var i in t.prototype = new S, t.prototype.constructor = t, t.prototype.__reactAutoBindPairs = [], s.forEach(p.bind(null, t)), p(t, v), p(t, e), p(t, b), t.getDefaultProps && (t.defaultProps = t.getDefaultProps()), a(t.prototype.render, "createClass(...): Class specification must implement a `render` method."), c) t.prototype[i] || (t.prototype[i] = null);
                    return t
                }
        }
    },
    x9n8: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("2KeS"),
            a = n("V5M+"),
            o = n("Aj/L"),
            s = n("TToO"),
            c = n("HW6M"),
            l = n("GiK3"),
            u = n("6sO2"),
            d = n("J8WN"),
            p = n("+8VM"),
            m = n("7vx8"),
            g = n("puy8"),
            h = n("HZww"),
            f = n("Odds"),
            v = (n("weaG"), function(e) {
                var t = {
                    "default-avatar__selected": e.selected,
                    "default-avatar": !0
                };
                return l.createElement(f._7, {
                    padding: {
                        bottom: 1
                    }
                }, l.createElement("div", {
                    onClick: function() {
                        e.onSelect(e.index)
                    },
                    "aria-label": Object(u.d)("Click to select Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar")
                }, l.createElement(f._30, {
                    fullHeight: !0,
                    fullWidth: !0,
                    position: f._14.Relative,
                    className: c(t)
                }, l.createElement("img", {
                    alt: Object(u.d)("Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar"),
                    src: e.imageSrc
                }))))
            }),
            b = n("4Q9N"),
            y = n("Tt3k"),
            S = n("W6ca"),
            k = n("xgnX"),
            _ = n("CSlQ"),
            E = (n("AL3x"), n("nmDn")),
            C = ["image/*"],
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imagePreviewURL: "",
                        profileUpdated: !1,
                        currentImageHasTallAspectRatio: !1,
                        imageFormat: ""
                    }, t.currentImage = null, t.logger = u.j.withCategory("ProfileImagePicker"), t.onImageInputChange = function(e) {
                        var n;
                        if (null !== e) {
                            n = e[0];
                            var i = Object(y.a)(n),
                                r = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(r, 10) > 10 ? t.setState({
                                statusMessage: k.b.BadSizeError
                            }) : (t.setState({
                                selectedImageIndex: void 0,
                                imagePreviewURL: "",
                                imageFormat: "",
                                currentImageHasTallAspectRatio: !1
                            }), Object(y.b)(n, function(e) {
                                t.currentImage = e, t.setState({
                                    statusMessage: null
                                })
                            }, function(e) {
                                var n = new Image,
                                    r = !1;
                                n.onload = function() {
                                    n.width < n.height && (r = !0), t.setState({
                                        currentImageHasTallAspectRatio: r
                                    })
                                }, n.src = e, t.setState({
                                    imagePreviewURL: e,
                                    imageFormat: i
                                })
                            }))
                        } else t.setState({
                            statusMessage: k.b.ImageNotSelected
                        })
                    }, t.onUpdateButtonClick = function(e) {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, r, a = this;
                            return s.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (e.preventDefault(), void 0 !== this.state.selectedImageIndex) return this.setDefaultAvatar(), [2];
                                        if (!this.currentImage) return this.setState({
                                            statusMessage: k.b.ImageNotSelected
                                        }), [2];
                                        this.setState({
                                            statusMessage: k.b.Uploading
                                        }), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, Object(S.a)(this.props.userID, this.props.authToken, b.a.ProfileImage, this.state.imageFormat)];
                                    case 2:
                                        return t = o.sent(), n = t.upload_url, i = t.upload_id, [3, 4];
                                    case 3:
                                        return r = o.sent(), this.logger.error(r, "Request for upload ID failed to get expected response from server."), this.setState({
                                            statusMessage: k.b.UnexpectedError
                                        }), [2];
                                    case 4:
                                        return this.unsubscribe = u.k.subscribe({
                                            topic: Object(h.j)(this.props.userID),
                                            success: function() {
                                                try {
                                                    Object(S.c)(n, a.currentImage)
                                                } catch (e) {
                                                    a.logger.error(e, "Profile Image upload failed."), a.unsubscribe(), a.setState({
                                                        statusMessage: k.b.UnexpectedError,
                                                        selectedImageIndex: void 0,
                                                        imagePreviewURL: "",
                                                        imageFormat: "",
                                                        currentImageHasTallAspectRatio: !1
                                                    })
                                                }
                                                a.timeoutHandle = setTimeout(function() {
                                                    return a.handlePubSubTimeout()
                                                }, 1e4)
                                            },
                                            failure: function() {
                                                a.setState({
                                                    statusMessage: k.b.UnexpectedError,
                                                    selectedImageIndex: void 0,
                                                    imagePreviewURL: "",
                                                    currentImageHasTallAspectRatio: !1
                                                })
                                            },
                                            onMessage: function(e) {
                                                if (e.upload_id === i) {
                                                    clearTimeout(a.timeoutHandle);
                                                    var t = null;
                                                    t = e.status === k.a.Success ? k.b.Success : e.status === k.a.BadSize ? k.b.BadSizeError : e.status === k.a.NonImage ? k.b.NonImageError : e.status === k.a.WrongFormat ? k.b.WrongFormatError : k.b.UnexpectedError, a.unsubscribe && a.unsubscribe(), a.setState({
                                                        statusMessage: t
                                                    }), a.state.statusMessage === k.b.Success ? a.setState({
                                                        profileUpdated: !0
                                                    }) : (a.setState({
                                                        profileUpdated: !1,
                                                        imagePreviewURL: "",
                                                        imageFormat: ""
                                                    }), a.currentImage = null)
                                                }
                                            }
                                        }), [2]
                                }
                            })
                        })
                    }, t.onDefaultImageSelected = function(e) {
                        t.setState({
                            selectedImageIndex: e,
                            imagePreviewURL: Object(g.a)(g.b[e], 300)
                        })
                    }, t.handlePubSubTimeout = function() {
                        t.unsubscribe(), t.setState({
                            statusMessage: k.b.TimeoutError
                        })
                    }, t
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillUnmount = function() {
                    void 0 !== this.unsubscribe && this.unsubscribe(), this.timeoutHandle && clearTimeout(this.timeoutHandle)
                }, t.prototype.componentDidUpdate = function() {
                    var e = this;
                    this.state.profileUpdated && setTimeout(function() {
                        e.props.data && e.props.data.refetch(), e.props.closeModal()
                    }, 1e3)
                }, t.prototype.render = function() {
                    var e = this,
                        t = g.b.map(function(t, n) {
                            return l.createElement(v, {
                                key: t.id,
                                imageSrc: Object(g.a)(t, 300),
                                index: n,
                                onSelect: e.onDefaultImageSelected,
                                selected: e.state.selectedImageIndex === n
                            })
                        }),
                        n = null;
                    if ("" !== this.state.imagePreviewURL) {
                        var i = {
                            "profile-edit__image-preview": !0,
                            "profile-edit__image-preview-tall": this.state.currentImageHasTallAspectRatio
                        };
                        n = l.createElement(f._7, {
                            className: c(i),
                            "data-test-selector": "preview-image",
                            position: f._14.Relative
                        }, l.createElement("img", {
                            src: "" + this.state.imagePreviewURL
                        }))
                    }
                    var r = null;
                    "" === this.state.imagePreviewURL && (r = l.createElement(f._7, {
                        className: "profile-edit__upload-info"
                    }, l.createElement(f._7, null, l.createElement(f._20, {
                        asset: f._21.Plus,
                        type: f._22.Alt2,
                        height: 20,
                        width: 20
                    })), l.createElement(f.P, {
                        type: f._44.H3,
                        color: f.J.Alt2,
                        fontSize: f.U.Size4
                    }, Object(u.d)("Upload a Photo", "Profile Edit"))));
                    var a = null;
                    this.props.showCloser && (a = l.createElement(p.a, null));
                    var o = null;
                    if (null !== this.state.statusMessage) {
                        var s = Object(k.c)(this.state.statusMessage),
                            m = s.message,
                            h = s.type;
                        o = l.createElement(f._11, {
                            label: m,
                            type: h
                        })
                    }
                    var b = this.props.login;
                    return this.props.displayName && (b = this.props.displayName), l.createElement(f._7, {
                        className: "profile-edit",
                        position: f._14.Relative,
                        fullHeight: !0
                    }, l.createElement(f._30, {
                        className: "profile-edit__background-container",
                        background: f.m.Base,
                        fullWidth: !0
                    }, l.createElement(f._7, {
                        padding: 2,
                        display: f.Q.InlineBlock,
                        position: f._14.Relative,
                        textAlign: f._40.Center,
                        fullWidth: !0
                    }, l.createElement(f._30, {
                        textAlign: f._40.Left,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(f.P, {
                        type: f._44.H3,
                        color: f.J.Alt2,
                        fontSize: f.U.Size4
                    }, Object(u.d)("Edit Profile Picture for {userName}", {
                        userName: b
                    }, "Profile Edit"), " ")), l.createElement(f._7, {
                        className: "profile-edit__upload-container",
                        display: f.Q.InlineBlock,
                        position: f._14.Relative,
                        textAlign: f._40.Center,
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(f._7, {
                        className: "profile-edit__upload",
                        display: f.Q.InlineBlock,
                        position: f._14.Relative,
                        textAlign: f._40.Center
                    }, l.createElement(d.a, {
                        allowedFileTypes: C,
                        onFilesSubmitted: this.onImageInputChange
                    }, r), n)), l.createElement(f._30, {
                        "data-test-selector": "status-message",
                        fontSize: f.U.Size4,
                        position: f._14.Relative,
                        textAlign: f._40.Center,
                        className: "profile-edit__status-message"
                    }, o), l.createElement(f._30, {
                        borderBottom: !0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(f._7, {
                        textAlign: f._40.Left,
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(f.P, {
                        type: f._44.H3,
                        color: f.J.Alt2,
                        fontSize: f.U.Size5
                    }, Object(u.d)("Or select one of these", "Profile Edit"))), l.createElement(f._50, {
                        childWidth: f._51.ExtraSmall,
                        gutterSize: f._52.ExtraSmall,
                        placeholderItems: 3
                    }, t)), l.createElement(f._7, {
                        display: f.Q.Flex,
                        justifyContent: f._6.Center
                    }, l.createElement(f.u, {
                        "data-test-selector": "update-button",
                        onClick: this.onUpdateButtonClick,
                        size: f.y.Large
                    }, Object(u.d)("Update", "Profile Edit"))))), a)
                }, t.prototype.setDefaultAvatar = function() {
                    return s.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return s.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    this.setState({
                                        statusMessage: k.b.Uploading
                                    }), e = k.b.UnexpectedError, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, Object(S.b)(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
                                case 2:
                                    return 204 === (t = i.sent()).status || 200 === t.status ? e = k.b.Success : this.logger.error(new Error("Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), "Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), [3, 4];
                                case 3:
                                    return n = i.sent(), this.logger.error(n, "Default Avatar PUT failed."), [3, 4];
                                case 4:
                                    return this.setState({
                                        statusMessage: e,
                                        profileUpdated: e === k.b.Success
                                    }), [2]
                            }
                        })
                    })
                }, t = s.__decorate([Object(m.a)(E, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(l.Component),
            N = Object(_.d)("Profile Edit")(w);
        var O = Object(i.b)(function(e) {
            return {
                authToken: Object(o.a)(e)
            }
        }, function(e, t) {
            return Object(r.b)({
                closeModal: function() {
                    return t.successCallback && t.successCallback(), Object(a.c)()
                }
            }, e)
        })(N);
        n.d(t, "a", function() {
            return O
        })
    },
    xgnX: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return r
        }), t.c = function(e) {
            switch (e) {
                case r.Success:
                    return {
                        message: Object(a.d)("Success!", "Profile Edit"),
                        type: o._12.Success
                    };
                case r.UnexpectedError:
                    return {
                        message: Object(a.d)("Unexpected error, please try again.", "Profile Edit"),
                        type: o._12.Alert
                    };
                case r.BadSizeError:
                    return {
                        message: Object(a.d)("Image might exceed 10MB.", "Profile Edit"),
                        type: o._12.Alert
                    };
                case r.NonImageError:
                    return {
                        message: Object(a.d)("You must upload an image.", "Profile Edit"),
                        type: o._12.Alert
                    };
                case r.WrongFormatError:
                    return {
                        message: Object(a.d)("You must select a valid image type.", "Profile Edit"),
                        type: o._12.Alert
                    };
                case r.TimeoutError:
                    return {
                        message: Object(a.d)("Upload timed-out. Please try again.", "Profile Edit"),
                        type: o._12.Alert
                    };
                case r.Uploading:
                    return {
                        message: Object(a.d)("Uploading....", "Profile Edit"),
                        type: o._12.Brand
                    };
                case r.ImageNotSelected:
                    return {
                        message: Object(a.d)("Select a image first.", "Profile Edit"),
                        type: o._12.Alert
                    };
                default:
                    return {
                        message: Object(a.d)("Please try again.", "Profile Edit"),
                        type: o._12.Alert
                    }
            }
        };
        var i, r, a = n("6sO2"),
            o = n("Odds");
        ! function(e) {
            e.Success = "SUCCESS", e.NonImage = "IS_IMAGE_VALIDATION_FAILED", e.WrongFormat = "IMAGE_FORMAT_VALIDATION_FAILED", e.BadSize = "FILE_SIZE_VALIDATION_FAILED"
        }(i || (i = {})),
        function(e) {
            e[e.Success = 0] = "Success", e[e.UnexpectedError = 1] = "UnexpectedError", e[e.BadSizeError = 2] = "BadSizeError", e[e.NonImageError = 3] = "NonImageError", e[e.WrongFormatError = 4] = "WrongFormatError", e[e.TimeoutError = 5] = "TimeoutError", e[e.Uploading = 6] = "Uploading", e[e.ImageNotSelected = 7] = "ImageNotSelected"
        }(r || (r = {}))
    },
    yHYq: function(e, t) {},
    yU6t: function(e, t) {},
    z15t: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = l(n("GiK3")),
            r = l(n("DT0+")),
            a = l(n("KSGD")),
            o = l(n("tZ8z")),
            s = l(n("HW6M")),
            c = l(n("V/Pj"));

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = (0, r.default)({
            mixins: [c.default, o.default],
            propTypes: {
                x: a.default.number.isRequired,
                y: a.default.number.isRequired,
                backgroundColor: a.default.string,
                className: a.default.string
            },
            getDefaultProps: function() {
                return {
                    x: 0,
                    y: 0,
                    backgroundColor: "transparent",
                    className: ""
                }
            },
            updatePosition: function(e, t, n) {
                var i = (t - e.left) / e.width,
                    r = (e.bottom - n) / e.height;
                this.props.onChange(this.getScaledValue(i), this.getScaledValue(r))
            },
            render: function() {
                var e = (0, s.default)("map", this.props.className, {
                        active: this.state.active
                    }),
                    t = this.props.backgroundColor;
                return i.default.createElement("div", {
                    className: e,
                    onMouseDown: this.startUpdates,
                    onTouchStart: this.startUpdates
                }, i.default.createElement("div", {
                    className: "background",
                    style: {
                        backgroundColor: t
                    }
                }), i.default.createElement("div", {
                    className: "pointer",
                    style: {
                        left: this.getPercentageValue(this.props.x),
                        bottom: this.getPercentageValue(this.props.y)
                    }
                }))
            }
        });
        t.default = u
    },
    zpQV: function(e, t) {},
    zwRn: function(e, t) {
        e.exports = function(e) {
            var t, n, i = e[0],
                r = e[1],
                a = e[2],
                o = Math.min(i, r, a),
                s = Math.max(i, r, a),
                c = s - o;
            return n = 0 == s ? 0 : c / s * 1e3 / 10, s == o ? t = 0 : i == s ? t = (r - a) / c : r == s ? t = 2 + (a - i) / c : a == s && (t = 4 + (i - r) / c), (t = Math.min(60 * t, 360)) < 0 && (t += 360), [t, n, s / 255 * 1e3 / 10]
        }
    }
});
//# sourceMappingURL=pages.settings-fc0c9a18c3d8aa06285d5215f69b1026.js.map