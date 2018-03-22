webpackJsonp([49], {
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
            return e.description && (t = i.createElement(r._4, {
                margin: {
                    top: 1
                }
            }, i.createElement(r.O, {
                color: r.J.Alt2
            }, e.description))), i.createElement(r._4, {
                margin: {
                    y: 2
                }
            }, i.createElement(r.O, {
                type: r._41.H3,
                fontSize: r.T.Size2
            }, e.title), t)
        }
        n.d(t, "a", function() {
            return a
        })
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
            if (e < 60) return a(i.SECOND, e);
            var t = Math.floor(e / 60),
                n = e % 60;
            if (t < 60) return n ? a(i.MINUTE, t) + " " + a(i.SECOND, n) : a(i.MINUTE, t);
            var r = Math.floor(t / 60);
            if (t %= 60, r < 24) return t ? a(i.HOUR, r) + " " + a(i.MINUTE, t) : a(i.HOUR, r);
            var o = Math.floor(r / 24);
            if (r %= 24, o < 7) return r ? a(i.DAY, o) + " " + a(i.HOUR, r) : a(i.DAY, o);
            if (o <= 26) {
                var s = Math.floor(o / 7);
                return (o %= 7) ? a(i.WEEK, s) + " " + a(i.DAY, o) : a(i.WEEK, s)
            }
            var l = Math.round((o + 3) / 30);
            return a(i.MONTH, l)
        };
        var i, r = n("6sO2");

        function a(e, t) {
            return e === i.SECOND ? Object(r.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                secondCount: t
            }, "formatDuration") : e === i.MINUTE ? Object(r.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                minuteCount: t
            }, "formatDuration") : e === i.DAY ? Object(r.d)("{dayCount, plural, one {# day} other {# days}}", {
                dayCount: t
            }, "formatDuration") : e === i.HOUR ? Object(r.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                hourCount: t
            }, "formatDuration") : e === i.WEEK ? Object(r.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                weekCount: t
            }, "formatDuration") : e === i.MONTH ? Object(r.d)("{monthCount, plural, one {# month} other {# months}}", {
                monthCount: t
            }, "formatDuration") : ""
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
                return e.footer && (t = i.createElement(r._27, {
                    padding: 2,
                    background: r.m.Alt2
                }, e.footer)), i.createElement(r._27, {
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
    IjoR: function(e, t) {},
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
                    return r.createElement(a.Q, {
                        dragOver: this.state.isDraggingOver,
                        error: this.props.error
                    }, r.createElement(a.Y, {
                        position: a._11.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        zIndex: a._53.Above
                    }, r.createElement("input", {
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
                return i.createElement(o._27, {
                    className: "settings-form-group"
                }, i.createElement(a.a, null, i.createElement(o.U, {
                    error: e.error,
                    errorMessage: e.errorMessage || Object(r.d)("Sorry, something went wrong. Please try again later.", "SettingsFormGroup"),
                    hint: e.hint,
                    id: e.id,
                    label: e.label,
                    labelOptional: e.labelOptional,
                    orientation: e.orientation || o.V.Horizontal
                }, e.children)))
            });
        n.d(t, "a", function() {
            return s
        })
    },
    K4jf: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, r = n("RH2O"),
            a = n("2KeS"),
            o = n("+xm8"),
            s = n("f2i/"),
            l = n("Aj/L"),
            c = n("TToO"),
            u = n("GiK3"),
            d = n("CIox"),
            p = n("6sO2"),
            m = n("yWCw"),
            g = n("CSlQ"),
            h = n("eXld"),
            f = n("2aoH"),
            b = n("j7/Y"),
            v = n("Ejve"),
            y = n("w9tK"),
            S = n("vH/s"),
            _ = n("Odds");
        ! function(e) {
            e[e.NoChanges = 0] = "NoChanges", e[e.DirtyChanges = 1] = "DirtyChanges", e[e.Working = 2] = "Working", e[e.Success = 3] = "Success", e[e.Error = 4] = "Error"
        }(i || (i = {}));
        var E = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = _.z.Default,
                        t = Object(p.d)("Save Changes", "SaveSettingsFooter"),
                        n = _.A.Default,
                        r = !1;
                    this.props.status === i.Working ? e = _.z.Loading : this.props.status === i.Success ? e = _.z.Success : this.props.status === i.Error ? (n = _.A.Alert, t = Object(p.d)("Failed to save settings. Try again.", "SaveSettingsFooter")) : this.props.status === i.NoChanges && (r = !0);
                    var a = null;
                    return this.props.onClickCancel && (a = u.createElement(_._4, {
                        padding: {
                            left: 1
                        },
                        display: _.P.Inline
                    }, u.createElement(_.u, {
                        disabled: this.props.status !== i.DirtyChanges && this.props.status !== i.Error,
                        size: _.y.Large,
                        type: _.A.Text,
                        "data-test-selector": "cancel-button-selector",
                        onClick: this.props.onClickCancel
                    }, Object(p.d)("Cancel", "SaveSettingsFooter")))), u.createElement(_._4, null, u.createElement(_.u, {
                        disabled: r,
                        size: _.y.Large,
                        state: e,
                        type: n,
                        onClick: this.props.onClickSave,
                        "data-a-target": "save-user-settings-button",
                        "data-test-selector": "save-button-selector"
                    }, t), a)
                }, t
            }(u.Component),
            k = n("GH+X"),
            O = n("AQc/"),
            w = n("F8kA"),
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderDashboardLink = function(e) {
                        return t.props.user ? u.createElement(w.a, {
                            key: "link",
                            to: "/" + t.props.user.login + "/dashboard/settings/autohost"
                        }, e) : u.createElement("span", {
                            key: "autohost-no-link"
                        }, "text")
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Object(p.d)("Auto Host settings have moved. You can find them in <x:link>your dashboard</x:link>.", {
                        "x:link": this.renderDashboardLink
                    }, "SettingsChannelPage");
                    return u.createElement(O.a, {
                        title: Object(p.d)("Auto Hosting", "AutohostSettingsComponent"),
                        description: e
                    })
                }, t
            }(u.Component);
        var N = Object(r.b)(function(e) {
                return {
                    user: Object(l.c)(e)
                }
            })(C),
            T = n("3zLD"),
            j = n("7vx8"),
            P = n("oIkB"),
            I = n("bX1P");

        function x() {
            return function(e) {
                var t = function(t) {
                    function n() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.logger = p.o.logger.withCategory("with-chat-settings-update"), e.updateChatSettings = function(t) {
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
                        return u.createElement(e, c.__assign({}, this.props, t))
                    }, n.displayName = "WithChatSettingsUpdate(" + (e.displayName || e.name || "Component") + ")", n
                }(u.Component);
                return Object(a.d)(Object(r.b)(function(e) {
                    return {
                        channelID: e.session.user && e.session.user.id || ""
                    }
                }), Object(j.a)(I, {
                    name: "updateChatSettings"
                }))(t)
            }
        }
        var U = function(e) {
                return u.createElement(_._4, {
                    margin: {
                        top: 1
                    }
                }, u.createElement(_.O, {
                    color: _.J.Alt,
                    "data-a-target": e.dataTarget
                }, e.text))
            },
            D = n("Jo6h"),
            F = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderBody = function() {
                        return t.props.showPlaceholder ? u.createElement(_._10, null) : u.createElement(_._4, null, u.createElement(_._43, {
                            checked: t.props.checked,
                            error: t.props.error,
                            disabled: t.props.disabled,
                            onChange: t.onChange,
                            id: t.props.id
                        }), u.createElement(U, {
                            text: t.props.description
                        }))
                    }, t.onChange = function(e) {
                        t.props.onChange && t.props.onChange(e.currentTarget.checked)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(D.a, {
                        id: this.props.id,
                        label: this.props.label,
                        error: this.props.error,
                        errorMessage: this.props.errorMessage,
                        orientation: _.V.Horizontal
                    }, this.renderBody())
                }, t
            }(u.Component),
            L = function(e) {
                var t = e.saving || e.errorLoading;
                return u.createElement(F, {
                    id: "settings-channel-page-block-hyperlinks",
                    label: Object(p.d)("Block Hyperlinks", "BlockHyperlinksToggle"),
                    description: Object(p.d)("Your channel's chat will automatically delete posted URLs except for ones posted by you, moderators, and admins.", "BlockHyperlinksToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            A = n("ar1V"),
            M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        errorSaving: !1,
                        checked: !1
                    }, t.logger = p.o.logger.withCategory("settings").withCategory("chat-block-hyperlinks"), t.onChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        }, function() {
                            t.updateChatSettings(e)
                        })
                    }, t.updateChatSettings = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, this.props.updateChatSettings({
                                            hideLinks: e
                                        })];
                                    case 1:
                                        return n.sent(), this.logger.debug("Updated chat setting", {
                                            hideLinks: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 3];
                                    case 2:
                                        return t = n.sent(), this.logger.warn("Failed to save chat setting", {
                                            err: t
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
                    return u.createElement(L, {
                        loading: this.props.data.loading,
                        saving: this.state.saving,
                        checked: this.state.checked,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onChange
                    })
                }, t
            }(u.Component),
            R = Object(T.compose)(Object(g.d)("BlockHyperlinksToggle"), Object(j.a)(A, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), x())(M),
            B = function(e) {
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
                            label: Object(p.d)("Off", "ChatDelayRadioButtons"),
                            selected: 0 === this.props.chatDelayMs
                        }, {
                            delay: 2e3,
                            label: Object(p.d)("2 seconds", "ChatDelayRadioButtons"),
                            selected: 2e3 === this.props.chatDelayMs
                        }, {
                            delay: 4e3,
                            label: Object(p.d)("4 seconds", "ChatDelayRadioButtons"),
                            selected: 4e3 === this.props.chatDelayMs
                        }, {
                            delay: 6e3,
                            label: Object(p.d)("6 seconds", "ChatDelayRadioButtons"),
                            selected: 6e3 === this.props.chatDelayMs
                        }];
                    return u.createElement(D.a, {
                        orientation: _.V.Horizontal,
                        label: Object(p.d)("Non-Mod Chat Delay", "ChatDelayRadioButtons"),
                        error: this.props.errorLoading || this.props.errorSaving
                    }, u.createElement(_._4, {
                        display: _.P.Flex,
                        flexDirection: _.R.Row
                    }, n.map(function(n) {
                        var i = "chat-delay:" + n.label;
                        return u.createElement(_._4, {
                            key: i,
                            margin: {
                                right: 2
                            },
                            display: _.P.Flex,
                            flexDirection: _.R.Row
                        }, u.createElement(_._16, {
                            checked: n.selected,
                            value: n.delay.toString(),
                            label: n.label,
                            name: "Non-Mod Chat Delay: " + n.delay / 1e3 + "s",
                            onChange: e.onChange,
                            disabled: t,
                            "data-test-selector": "chat-delay-radio:" + n.delay
                        }))
                    })), u.createElement(U, {
                        text: Object(p.d)("Adds a short delay before non-mods see messages. Any message that is timed out or banned during the delay is removed from chat completely.", "ChatDelayRadioButtons")
                    }))
                }, t
            }(u.Component),
            V = n("D2cp"),
            z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        errorSaving: !1,
                        chatDelayMs: 0
                    }, t.logger = p.o.logger.withCategory("settings").withCategory("chat-delay"), t.onChange = function(e) {
                        var n = t.state.chatDelayMs;
                        t.setState({
                            chatDelayMs: e,
                            saving: !0
                        }, function() {
                            t.updateChatSettings(Math.floor(e), n)
                        })
                    }, t.updateChatSettings = function(e, n) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, , 3]), [4, this.props.updateChatSettings({
                                            chatDelayInMs: e
                                        })];
                                    case 1:
                                        return i.sent(), this.logger.debug("Updated chat setting", {
                                            chatDelayInMs: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 3];
                                    case 2:
                                        return t = i.sent(), this.logger.warn("Failed to save chat setting", {
                                            err: t
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
                    return u.createElement(B, {
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
            }(u.Component),
            q = Object(T.compose)(Object(g.d)("ChatDelayRadioButtons"), Object(j.a)(V, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), x())(z),
            W = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = null,
                        t = this.props.loading || this.props.saving || this.props.errorLoading;
                    return (this.props.dirty || this.props.saving) && (e = u.createElement(_._4, {
                        margin: {
                            top: 1
                        }
                    }, u.createElement(_.u, {
                        onClick: this.props.onClickSave,
                        state: this.props.saving ? _.z.Loading : _.z.Default
                    }, Object(p.d)("Save Changes", "ChatRulesTextArea")))), u.createElement(D.a, {
                        orientation: _.V.Horizontal,
                        label: Object(p.d)("Chat Rules", "ChatRulesTextArea"),
                        error: this.props.errorLoading || this.props.errorSaving
                    }, u.createElement(_._38, {
                        disabled: t,
                        value: this.props.rules,
                        onChange: this.props.onChange,
                        rows: 5
                    }), u.createElement(U, {
                        text: Object(p.d)("Require first-time viewers to agree to your rules before chatting. One rule per line.", "ChatRulesTextArea")
                    }), e)
                }, t
            }(u.Component),
            H = n("WaOj"),
            G = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        errorSaving: !1,
                        initialRules: "",
                        rules: ""
                    }, t.logger = p.o.logger.withCategory("settings").withCategory("chat-rules"), t.onChange = function(e) {
                        t.setState({
                            rules: e.currentTarget.value
                        })
                    }, t.onClickSave = function() {
                        t.setState({
                            saving: !0
                        }, t.updateChatSettings)
                    }, t.updateChatSettings = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), e = this.state.rules.split("\n"), [4, this.props.updateChatSettings({
                                            rules: e
                                        })];
                                    case 1:
                                        return n.sent(), this.logger.debug("Updated chat setting", {
                                            rules: e
                                        }), this.setState(function(e) {
                                            return {
                                                saving: !1,
                                                initialRules: e.rules,
                                                errorSaving: !1
                                            }
                                        }), [3, 3];
                                    case 2:
                                        return t = n.sent(), this.logger.warn("Failed to save chat setting", {
                                            err: t
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
                    return u.createElement(W, {
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
            }(u.Component),
            J = Object(T.compose)(Object(g.d)("ChatRulesTextArea"), Object(j.a)(H, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), x())(G),
            Y = function(e) {
                var t = e.saving || e.errorLoading;
                return u.createElement(F, {
                    id: "settings-channel-page-email-verification",
                    label: Object(p.d)("Email Verification", "EmailVerificationToggle"),
                    description: Object(p.d)("Anyone that would like to send messages to your chat room must first verify their email address.", "EmailVerificationToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            Q = n("woYr"),
            K = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        errorSaving: !1,
                        checked: !1
                    }, t.logger = p.o.logger.withCategory("settings").withCategory("chat-require-verified-email"), t.onChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        }, function() {
                            t.updateChatSettings(e)
                        })
                    }, t.updateChatSettings = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, this.props.updateChatSettings({
                                            requireVerifiedAccount: e
                                        })];
                                    case 1:
                                        return n.sent(), this.logger.debug("Updated chat setting", {
                                            requireVerifiedAccount: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 3];
                                    case 2:
                                        return t = n.sent(), this.logger.warn("Failed to save chat setting", {
                                            err: t
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
                    return u.createElement(Y, {
                        loading: this.props.data.loading,
                        saving: this.state.saving,
                        checked: this.state.checked,
                        onChange: this.onChange,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving
                    })
                }, t
            }(u.Component),
            $ = Object(T.compose)(Object(g.d)("EmailVerificationToggle"), Object(j.a)(Q, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), x())(K),
            X = function(e) {
                var t = e.saving || e.errorLoading;
                return u.createElement(F, {
                    id: "settings-channel-page-mature-content",
                    label: Object(p.d)("Mature Content", "MatureContentToggle"),
                    description: Object(p.d)("Enable this setting if your stream contains content that may be inappropriate for younger audiences. You may never broadcast sexual activity, nudity, threats or extreme violence. Doing so will result in immediate, irrevocable termination of your account. Please make sure your content will comply with the <x:link>Terms of Service</x:link> before broadcasting", {
                        "x:link": function(e) {
                            return u.createElement("a", {
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
            Z = n("UD8e"),
            ee = n("oYVU"),
            te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        checked: !1,
                        saving: !1,
                        errorSaving: !1
                    }, t.logger = p.o.logger.withCategory("settings").withCategory("mature-content"), t.onCheckBoxChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        }, function() {
                            t.updateBroadcastSettings(e)
                        })
                    }, t.updateBroadcastSettings = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.logger.debug("Updating broadcast settings", {
                                                isMature: e
                                            }), !(t = this.props.data.currentUser && this.props.data.currentUser.id)) return this.logger.warn("No currentUser - unable to update broadcast settings."), [2];
                                        i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, this.props.updateBroadcastSettings(Object(P.a)({
                                            userID: t,
                                            isMature: e
                                        }))];
                                    case 2:
                                        return i.sent(), this.logger.debug("Updated broadcast settings", {
                                            isMature: e
                                        }), this.setState({
                                            saving: !1,
                                            errorSaving: !1
                                        }), [3, 4];
                                    case 3:
                                        return n = i.sent(), this.logger.warn("Failed to update broadcast settings", {
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
                        var i = n && n.broadcastSettings && n.broadcastSettings.isMature || !1;
                        this.setState({
                            checked: i
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = e && e.broadcastSettings,
                        n = !!this.props.data.error || !this.props.data.loading && !t;
                    return u.createElement(X, {
                        checked: this.state.checked,
                        saving: this.state.saving,
                        loading: this.props.data.loading,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onCheckBoxChange
                    })
                }, t
            }(u.Component),
            ne = Object(a.d)(Object(g.d)("MatureContentToggle"), Object(j.a)(ee, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), Object(j.a)(Z, {
                name: "updateBroadcastSettings"
            }))(te),
            ie = n("LIeg"),
            re = n("9u8h"),
            ae = n("6T7P"),
            oe = n.n(ae),
            se = n("5kgt"),
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
                    var e = Object(p.d)("Accept", "TeamInvitationsItem"),
                        t = Object(p.d)("Decline", "TeamInvitationsItem");
                    return u.createElement(_._4, c.__assign({
                        padding: {
                            y: 1,
                            x: 1
                        }
                    }, Object(se.a)(this.props), {
                        className: "team-invitations-item"
                    }), u.createElement(_.B, {
                        row: !0
                    }, u.createElement(_._4, {
                        className: "team-invitations-item__avatar"
                    }, u.createElement(_.j, {
                        ratio: _.k.Aspect1x1
                    }, u.createElement(g.b, {
                        src: this.props.invitation.logo || oe.a,
                        alt: Object(p.d)("{displayName} Team Logo", {
                            displayName: this.props.invitation.displayName
                        }, "TeamInvitationsItem")
                    }))), u.createElement(_._4, {
                        flexGrow: 1,
                        display: _.P.Flex,
                        position: _._11.Relative
                    }, u.createElement(_.Y, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, u.createElement(_.O, {
                        type: _._41.Span,
                        ellipsis: !0
                    }, this.props.invitation.name))), u.createElement(_._4, {
                        padding: {
                            right: 2
                        }
                    }, u.createElement(_.u, {
                        ariaLabel: e,
                        onClick: this.onAcceptClick,
                        type: _.A.Success,
                        "data-test-selector": "TEAM_INVITATIONS_ITEM_ACCEPT_LINK"
                    }, e)), u.createElement(_._4, null, u.createElement(_.u, {
                        ariaLabel: t,
                        onClick: this.onDeclineClicked,
                        type: _.A.Alert,
                        "data-test-selector": "TEAM_INVITATIONS_ITEM_DECLINE_LINK"
                    }, t))))
                }, t = c.__decorate([Object(g.d)("TeamInvitationsItem")], t)
            }(u.Component)),
            ce = Object(g.d)("TeamInvitationsItem")(le),
            ue = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.invitations.length < 1 && !this.props.formErrorMessage ? null : u.createElement(D.a, {
                        label: Object(p.d)("Invitations", "TeamInvitations"),
                        error: !!this.props.formErrorMessage,
                        errorMessage: this.props.formErrorMessage
                    }, this.props.invitations.map(function(t, n) {
                        return u.createElement(ce, {
                            key: t.name,
                            invitation: t,
                            index: n,
                            acceptInvitation: e.props.acceptInvitation,
                            declineInvitation: e.props.declineInvitation
                        })
                    }))
                }, t
            }(u.Component),
            de = Object(g.d)("TeamInvitations")(ue),
            pe = (n("yHYq"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return u.createElement(_._4, c.__assign({
                        padding: {
                            y: 1,
                            x: 1
                        }
                    }, Object(se.a)(this.props), {
                        className: "team-manager-item"
                    }), u.createElement(_.B, {
                        row: !0
                    }, u.createElement(_._4, {
                        className: "team-manager-item__avatar"
                    }, u.createElement(_.j, {
                        ratio: _.k.Aspect1x1
                    }, u.createElement(g.b, {
                        src: this.props.team.logo || oe.a,
                        alt: Object(p.d)("{displayName} Team Logo", {
                            displayName: this.props.team.displayName
                        }, "TeamManagerItem")
                    }))), u.createElement(_._4, {
                        flexGrow: 1,
                        display: _.P.Flex,
                        position: _._11.Relative
                    }, u.createElement(_.Y, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, u.createElement(_.O, {
                        type: _._41.Span,
                        ellipsis: !0
                    }, this.props.team.name))), u.createElement(_._4, {
                        padding: {
                            right: 2
                        }
                    }, u.createElement(_.M, {
                        to: "https://www.twitch.tv/team/" + this.props.team.name + "/edit"
                    }, Object(p.d)("Edit", "TeamManagerItem"))), u.createElement(_._4, null, u.createElement(_.M, {
                        to: "https://www.twitch.tv/team/" + this.props.team.name
                    }, Object(p.d)("View", "TeamManagerItem")))))
                }, t
            }(u.Component)),
            me = Object(g.d)("TeamManagerItem")(pe),
            ge = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return this.props.teams.length < 1 && !this.props.formErrorMessage ? null : u.createElement(D.a, {
                        label: Object(p.d)("Manager", "TeamManager"),
                        error: !!this.props.formErrorMessage,
                        errorMessage: this.props.formErrorMessage
                    }, this.props.teams.map(function(e) {
                        return u.createElement(me, {
                            key: e.name,
                            team: e
                        })
                    }))
                }, t
            }(u.Component),
            he = Object(g.d)("TeamManager")(ge),
            fe = (n("zpQV"), function(e) {
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
                    var e = Object(p.d)("Remove", "TeamMembershipsItem"),
                        t = null;
                    return this.props.showPrimaryInput && (t = u.createElement(_._4, {
                        padding: {
                            right: 2
                        }
                    }, u.createElement(_._16, {
                        "data-test-selector": "TEAM_MEMBERSHIPS_ITEM_PRIMARY_INPUT",
                        name: "team-memberships-main-radio",
                        onChange: this.onChangePrimary,
                        label: Object(p.d)("Main", "TeamMembershipsItem"),
                        disabled: this.props.updating,
                        checked: this.props.membership.primary
                    }))), u.createElement(_._4, c.__assign({
                        padding: {
                            y: 1,
                            x: 1
                        }
                    }, Object(se.a)(this.props), {
                        className: "team-memberships-item"
                    }), u.createElement(_.B, {
                        row: !0
                    }, u.createElement(_._4, {
                        className: "team-memberships-item__avatar",
                        flexShrink: 0
                    }, u.createElement(_.j, {
                        ratio: _.k.Aspect1x1
                    }, u.createElement(g.b, {
                        src: this.props.membership.team.logo || oe.a,
                        alt: Object(p.d)("{displayName} Team Logo", {
                            displayName: this.props.membership.team.displayName
                        }, "TeamMembershipsItem")
                    }))), u.createElement(_._4, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1,
                        position: _._11.Relative,
                        ellipsis: !0
                    }, u.createElement(_.M, {
                        to: "/team/" + this.props.membership.team.name
                    }, u.createElement(_.O, {
                        type: _._41.Span,
                        ellipsis: !0
                    }, this.props.membership.team.displayName))), u.createElement(_._4, {
                        padding: {
                            right: 2
                        }
                    }, u.createElement(_.I, {
                        "data-test-selector": "TEAM_MEMBERSHIPS_ITEM_STATS_INPUT",
                        onChange: this.onChangeStats,
                        label: Object(p.d)("Stats", "TeamMembershipsItem"),
                        disabled: this.props.updating,
                        checked: this.props.membership.statsRevealed
                    })), u.createElement(_._4, {
                        padding: {
                            right: 2
                        }
                    }, u.createElement(_.I, {
                        "data-test-selector": "TEAM_MEMBERSHIPS_ITEM_REVENUE_INPUT",
                        onChange: this.onChangeRevenue,
                        label: Object(p.d)("Revenue", "TeamMembershipsItem"),
                        disabled: this.props.updating,
                        checked: this.props.membership.revenueRevealed
                    })), t, u.createElement(_._44, {
                        label: e
                    }, u.createElement(_.v, {
                        "data-test-selector": "TEAM_MEMBERSHIPS_ITEM_REMOVE_BUTTON",
                        ariaLabel: e,
                        icon: _._18.Trash,
                        onClick: this.onClickRemove,
                        disabled: this.props.updating
                    }))))
                }, t = c.__decorate([Object(g.d)("TeamMembershipItem")], t)
            }(u.Component)),
            be = Object(g.d)("TeamMembershipsItem")(fe),
            ve = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this;
                    return this.props.memberships.length < 1 && !this.props.formErrorMessage ? null : u.createElement(D.a, {
                        label: Object(p.d)("Member", "TeamMemberships"),
                        error: !!this.props.formErrorMessage,
                        errorMessage: this.props.formErrorMessage
                    }, this.props.memberships.map(function(t, n) {
                        return u.createElement(be, {
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
            }(u.Component),
            ye = Object(g.d)("TeamMemberships")(ve),
            Se = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return u.createElement(k.a, null, u.createElement(he, {
                        teams: this.props.teams,
                        formErrorMessage: this.props.managedError
                    }), u.createElement(de, {
                        invitations: this.props.invitations,
                        acceptInvitation: this.props.acceptInvitation,
                        declineInvitation: this.props.declineInvitation,
                        formErrorMessage: this.props.invitationsError
                    }), u.createElement(ye, {
                        memberships: this.props.memberships,
                        formErrorMessage: this.props.membershipsError,
                        onClickRemove: this.props.onClickRemove,
                        onChangeStats: this.props.onChangeStats,
                        onChangeRevenue: this.props.onChangeRevenue,
                        onChangePrimary: this.props.onChangePrimary,
                        updating: this.props.updatingToggles
                    }))
                }, t
            }(u.Component),
            _e = Object(g.d)("TeamSettings")(Se),
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
                    }, t.logger = p.o.logger.withCategory("team-settings"), t.deleteMembership = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, r, a, o, s;
                            return c.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        if (!this.props.user || 0 === this.state.memberships.length) return [2];
                                        this.setState({
                                            updatingToggles: !0
                                        }), r = this.state.memberships[e], a = "/v5/channels/" + this.props.user.id + "/teams/" + r.team.name + "/membership", l.label = 1;
                                    case 1:
                                        return l.trys.push([1, 3, , 4]), [4, re.a.delete(a)];
                                    case 2:
                                        return i = l.sent(), [3, 4];
                                    case 3:
                                        return o = l.sent(), t = o, [3, 4];
                                    case 4:
                                        return i && i.error && (t = new Error("Team Memberships error"), n = i.error), t ? (s = Object(p.d)("Unable to remove team membership", "TeamMemberships"), this.logger.error(t, s, n), this.setState({
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
                                        return i = s.sent(), [3, 4];
                                    case 3:
                                        return r = s.sent(), t = r, [3, 4];
                                    case 4:
                                        return i && i.error && (t = new Error("Team Memberships error"), n = i.error), t ? (a = Object(p.d)("Unable to update main team", "TeamMemberships"), this.logger.error(t, a, n), this.setState({
                                            membershipsError: a,
                                            updatingToggles: !1
                                        }), [2]) : (this.setState(function(t) {
                                            var n = o.state.memberships.findIndex(function(e) {
                                                    return e.primary
                                                }),
                                                i = ie(t.memberships, function(t) {
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
                                        return i = o.sent(), [3, 4];
                                    case 3:
                                        return r = o.sent(), t = r, [3, 4];
                                    case 4:
                                        return i && i.error && (t = new Error("Team Memberships error"), n = i.error), t ? (a = Object(p.d)("Unable to update revenue preferences", "TeamMemberships"), this.logger.error(t, a, n), this.setState({
                                            membershipsError: a,
                                            updatingToggles: !1
                                        }), [2]) : (this.setState(function(t) {
                                            return {
                                                memberships: ie(t.memberships, function(t) {
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
                                        return i = o.sent(), [3, 4];
                                    case 3:
                                        return r = o.sent(), t = r, [3, 4];
                                    case 4:
                                        return i && i.error && (t = new Error("Team Memberships error"), n = i.error), t ? (a = Object(p.d)("Unable to update stats preferences", "TeamMemberships"), this.logger.error(t, a, n), this.setState({
                                            membershipsError: a,
                                            updatingToggles: !1
                                        }), [2]) : (this.setState(function(t) {
                                            return {
                                                memberships: ie(t.memberships, function(t) {
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
                                        return this.props.user ? (t = "/v5/channels/" + this.props.user.id + "/teams/" + e.team.name + "/membership", [4, re.a.put(t, {
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
                                        return o.trys.push([1, 3, , 4]), [4, re.a.get(i)];
                                    case 2:
                                        return n = o.sent(), this.setState({
                                            memberships: this.deserializeMemberships(n),
                                            updatingToggles: !1
                                        }), [3, 4];
                                    case 3:
                                        return r = o.sent(), e = r, [3, 4];
                                    case 4:
                                        return n && n.error && (e = new Error("Team Memberships error"), t = n.error), e ? (a = Object(p.d)("Failed to load Team data.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(e, "Failed to load Team data", t), this.setState({
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
                                        return r.trys.push([1, 3, , 4]), [4, re.a.get(e)];
                                    case 2:
                                        return t = r.sent(), this.setState({
                                            invitations: this.deserializeInvitations(t)
                                        }), [3, 4];
                                    case 3:
                                        return n = r.sent(), i = Object(p.d)("Failed to load Team data.  Please refresh the page and try again", "TeamInvitations"), this.logger.error(n, "Failed to load Team data"), this.setState({
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
                                        return u.trys.push([1, 3, , 4]), [4, re.a.put(o, {
                                            body: {
                                                accepted: n
                                            }
                                        })];
                                    case 2:
                                        return r = u.sent(), [3, 4];
                                    case 3:
                                        return s = u.sent(), t = s, [3, 4];
                                    case 4:
                                        return r && r.error && (t = new Error("Team Invitations error"), i = r.error), t ? (l = Object(p.d)("Unable to respond to invitation", "TeamInvitations"), this.logger.error(t, l, i), this.setState({
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
                                        return r.trys.push([1, 3, , 4]), [4, re.a.get(e)];
                                    case 2:
                                        return t = r.sent(), this.setState({
                                            teams: this.deserializeTeams(t)
                                        }), [3, 4];
                                    case 3:
                                        return n = r.sent(), i = Object(p.d)("Failed to load Team data.  Please refresh the page and try again", "TeamManager"), this.logger.error(n, "Failed to load Team data"), this.setState({
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
                    return u.createElement(_e, {
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
            }(u.Component);
        var ke = Object(r.b)(function(e) {
                return {
                    user: Object(l.c)(e)
                }
            })(Ee),
            Oe = n("V5M+"),
            we = n("ebTC"),
            Ce = n("4Q9N"),
            Ne = n("J4ib"),
            Te = n("OjIq"),
            je = n("vm+z"),
            Pe = function(e) {
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
                        e = u.createElement("img", {
                            "data-test-selector": "test-channel-offline-image-selector",
                            height: "90",
                            width: "160",
                            src: this.props.data.user.offlineImageURL
                        });
                        var n = Object(Ne.d)("Remove my Video Player Banner Image", "UploadVideoPlayerBanner");
                        t = u.createElement(_.v, {
                            icon: _._18.Trash,
                            ariaLabel: n
                        })
                    }
                    return u.createElement(_._4, null, u.createElement(O.a, {
                        title: Object(Ne.d)("Video Player Banner", "UploadVideoPlayerBanner"),
                        description: Object(Ne.d)("This is displayed on the player when your channel is offline.", "UploadVideoPlayerBanner")
                    }), u.createElement(k.a, null, u.createElement(Te.a, null, u.createElement(_._4, {
                        display: _.P.Flex
                    }, e, u.createElement(_._4, {
                        padding: {
                            left: 1,
                            top: 1
                        }
                    }, u.createElement(_._4, {
                        display: _.P.Flex
                    }, u.createElement(_.u, {
                        "data-test-selector": "test-upload-video-player-banner-selector",
                        onClick: this.showModal
                    }, "Update"), t), u.createElement(U, {
                        text: Object(Ne.d)("Max 10mb GIF, JPG, or PNG", "UploadVideoPlayerBanner")
                    }))))))
                }, t = c.__decorate([Object(j.a)(je, {
                    options: function(e) {
                        return {
                            skip: !e.user,
                            variables: {
                                login: e.user && e.user.login
                            }
                        }
                    }
                })], t)
            }(u.Component);
        var Ie = Object(r.b)(function(e) {
                return {
                    user: Object(l.c)(e)
                }
            }, function(e) {
                return Object(a.b)({
                    showUploaderModal: function(e) {
                        return Object(Oe.d)(we.a, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            imageType: Ce.a.ChannelOfflineImage,
                            showCloser: !0
                        })
                    }
                }, e)
            })(Pe),
            xe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: i.NoChanges
                    }, t.renderTeamsSettingsSection = function() {
                        return u.createElement(_._4, null, u.createElement(O.a, {
                            title: Object(p.d)("My Teams", "SettingsChannelPage"),
                            description: Object(p.d)("Manage your teams here", "SettingsChannelPage")
                        }), u.createElement(ke, null))
                    }, t.renderContentSettingsSection = function() {
                        return u.createElement(_._4, null, u.createElement(O.a, {
                            title: Object(p.d)("Content Settings", "SettingsChannelPage"),
                            description: Object(p.d)("Choose how your channel will display for certain users", "SettingsChannelPage")
                        }), u.createElement(k.a, null, u.createElement(ne, null)))
                    }, t.renderChatSettingsSection = function() {
                        return u.createElement(_._4, null, u.createElement(O.a, {
                            title: Object(p.d)("Chat Options", "SettingsChannelPage"),
                            description: Object(p.d)("Moderate your channel's chat and who you allow in it", "SettingsChannelPage")
                        }), u.createElement(k.a, null, u.createElement(R, null), u.createElement($, null), u.createElement(J, null), u.createElement(q, null)))
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: i.Working
                        }, function() {})
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return p.a.buildType === v.a.Production ? null : u.createElement("div", null, u.createElement(Ie, null), this.renderContentSettingsSection(), this.renderTeamsSettingsSection(), this.renderChatSettingsSection(), u.createElement(N, null), u.createElement(E, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    }))
                }, t = c.__decorate([Object(g.d)("SettingsChannelPage", {
                    autoReportInteractive: !0,
                    destination: y.a.SettingsChannel
                }), Object(b.a)({
                    location: S.PageviewLocation.SettingsPage
                })], t)
            }(u.Component),
            Ue = (n("8+dp"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClick = function() {
                        t.props.onClick()
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(Te.a, null, u.createElement(_._4, {
                        className: "connection-component",
                        display: _.P.Flex,
                        flexDirection: _.R.Row
                    }, this.props.image && u.createElement(_._4, {
                        className: "connection-component__image",
                        "data-test-selector": "connection-image-test-selector",
                        padding: {
                            right: 1,
                            top: .5
                        },
                        flexShrink: 0
                    }, this.props.image), u.createElement(_._4, {
                        className: "connection-component__right",
                        padding: {
                            x: 1
                        },
                        display: _.P.Flex,
                        flexGrow: 1,
                        flexDirection: _.R.Column,
                        fullWidth: !0
                    }, u.createElement(_._4, {
                        className: "connection-component__header",
                        display: _.P.Flex,
                        flexDirection: _.R.Row,
                        alignItems: _.c.Center
                    }, u.createElement(_._4, {
                        className: "connection-component__header-text",
                        display: _.P.Flex,
                        flexDirection: _.R.Column,
                        flexGrow: 1
                    }, u.createElement(_.O, {
                        fontSize: _.T.Size5,
                        "data-test-selector": "connection-title-test-selector",
                        bold: !0
                    }, this.props.title), this.props.subtitle && u.createElement(_.Y, {
                        padding: {
                            top: 1
                        }
                    }, u.createElement(_.O, {
                        "data-test-selector": "connection-subtitle-test-selector"
                    }, this.props.subtitle))), this.renderButton()), this.renderError(), this.props.body && u.createElement(_._4, {
                        className: "connection-component__body",
                        "data-test-selector": "connection-body-test-selector",
                        padding: {
                            top: 2
                        }
                    }, this.props.body), this.props.footer && u.createElement(_._27, {
                        className: "connection-component__footer",
                        "data-test-selector": "connection-footer-test-selector",
                        color: _.J.Alt2,
                        padding: {
                            top: 2
                        }
                    }, this.props.footer))))
                }, t.prototype.renderError = function() {
                    if (this.props.error) {
                        var e = Object(p.d)("Failed to connect. Please try again.", "ThirdPartyConnection"),
                            t = Object(p.d)("Failed to disconnect. Please try again.", "ThirdPartyConnection"),
                            n = this.props.connected ? t : e;
                        return u.createElement(_._4, {
                            padding: {
                                top: .5
                            },
                            alignSelf: _.d.End,
                            "data-test-selector": "connection-error-test-selector"
                        }, u.createElement(_.O, {
                            color: _.J.Error
                        }, n))
                    }
                }, t.prototype.renderButton = function() {
                    var e = Object(p.d)("Disconnect", "ThirdPartyConnection"),
                        t = Object(p.d)("Connect", "ThirdPartyConnection");
                    return u.createElement(_.u, {
                        type: _.A.Hollow,
                        onClick: this.handleClick,
                        "data-test-selector": "connection-button-test-selector"
                    }, this.props.connected ? e : t)
                }, t
            }(u.Component)),
            De = (n("XCQF"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClickDisconnect = function() {
                        t.props.onClickDisconnect(t.props.id)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(Ue, {
                        image: u.createElement(g.b, {
                            className: "extension-connection__icon",
                            src: this.iconOrFallback
                        }),
                        title: this.renderNameLink(),
                        subtitle: this.props.author.length > 0 ? Object(p.d)("by {author}", {
                            author: this.props.author
                        }, "ExtensionConnection") : void 0,
                        footer: this.summaryOrFallbackMessage,
                        onClick: this.onClickDisconnect,
                        connected: !0,
                        error: this.props.disconnectError
                    })
                }, t.prototype.renderNameLink = function() {
                    return 0 === this.props.name.length ? this.props.id : u.createElement(_.M, {
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
                        return this.props.summary.length > 0 ? this.props.summary : Object(p.d)("This extension no longer exists", "ExtensionConnection")
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }(u.Component)),
            Fe = Object(g.d)("ExtensionConnection")(De),
            Le = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        fetchError: !1,
                        linkedExtensionsByID: {}
                    }, t.logger = p.j.withCategory("extension-connection-list"), t.onClickDisconnect = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n;
                            return c.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        this.logger.debug("Disconnecting", {
                                            id: e
                                        }), t = !1, i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, re.a.put("/v5/extensions/" + e + "/auth/link_user", {
                                            body: {
                                                show_user: !1
                                            }
                                        })];
                                    case 2:
                                        return 200 !== (n = i.sent()).status && 204 !== n.status && (this.logger.warn("Failed to disconnect extension due to server error", {
                                            sessionUser: this.props.sessionUser,
                                            extensionID: e
                                        }), t = !0), [3, 4];
                                    case 3:
                                        return i.sent(), this.logger.warn("Failed to disconnect extension due to network error", {
                                            sessionUser: this.props.sessionUser,
                                            extensionID: e
                                        }), t = !0, [3, 4];
                                    case 4:
                                        return t ? this.setState(function(t) {
                                            return {
                                                linkedExtensionsByID: c.__assign({}, t.linkedExtensionsByID, (n = {}, n[e] = c.__assign({}, t.linkedExtensionsByID[e], {
                                                    disconnectError: !0
                                                }), n))
                                            };
                                            var n
                                        }) : this.setState(function(t) {
                                            var n = c.__assign({}, t.linkedExtensionsByID);
                                            return delete n[e], {
                                                linkedExtensionsByID: n
                                            }
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchExtensionConnections()
                }, t.prototype.render = function() {
                    if (this.state.fetchError) return u.createElement(_._4, {
                        padding: {
                            bottom: 2
                        }
                    }, u.createElement(_.O, {
                        color: _.J.Error,
                        fontSize: _.T.Size5
                    }, Object(p.d)("Sorry, something went wrong fetching your extension connections. Please try again later.", "ExtensionConnectionList")));
                    for (var e = [], t = 0, n = Object.keys(this.state.linkedExtensionsByID); t < n.length; t++) {
                        var i = n[t],
                            r = this.state.linkedExtensionsByID[i];
                        e.push(u.createElement(Fe, c.__assign({
                            key: r.id,
                            onClickDisconnect: this.onClickDisconnect
                        }, r)))
                    }
                    return e.length <= 0 ? null : u.createElement(k.a, null, e)
                }, t.prototype.fetchExtensionConnections = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, i, r, a, o = this;
                        return c.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    e = {}, t = !1, s.label = 1;
                                case 1:
                                    return s.trys.push([1, 3, , 4]), [4, re.a.get("/v5/extensions/linked")];
                                case 2:
                                    if ((n = s.sent()) && n.body && n.body.extensions.length > 0)
                                        for (i = 0, r = n.body.extensions; i < r.length; i++) a = r[i], e[a.id] = {
                                            author: a.author_name,
                                            disconnectError: !1,
                                            iconURL: a.icon_url,
                                            id: a.id,
                                            name: a.name,
                                            summary: a.summary
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
                }, t
            }(u.Component),
            Ae = Object(g.d)("ExtensionsConnectionList")(Le);
        var Me, Re = Object(r.b)(function(e) {
                return {
                    sessionUser: Object(l.c)(e)
                }
            })(Ae),
            Be = n("OAwv"),
            Ve = n("HW6M");
        n("EQRc");
        ! function(e) {
            e[e.Blizzard = 0] = "Blizzard", e[e.Facebook = 1] = "Facebook", e[e.LeagueOfLegends = 2] = "LeagueOfLegends", e[e.Twitter = 3] = "Twitter", e[e.Steam = 4] = "Steam", e[e.Youtube = 5] = "Youtube"
        }(Me || (Me = {}));
        var ze, qe = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return c.__extends(t, e), t.prototype.render = function() {
                var e = {
                    "connection-image": !0,
                    "connection-image--blizzard": this.props.type === Me.Blizzard,
                    "connection-image--facebook": this.props.type === Me.Facebook,
                    "connection-image--league-of-legends": this.props.type === Me.LeagueOfLegends,
                    "connection-image--steam": this.props.type === Me.Steam,
                    "connection-image--twitter": this.props.type === Me.Twitter,
                    "connection-image--youtube": this.props.type === Me.Youtube
                };
                return u.createElement("div", {
                    className: Ve(e)
                })
            }, t
        }(u.Component);
        n("WKFf");
        ! function(e) {
            e.NorthAmerica = "na", e.Brazil = "br", e.EuropeWest = "euw", e.EuropeNordicAndEast = "eune", e.Japan = "jp", e.Korea = "kr", e.LatinAmericaNorth = "lan", e.LatinAmericaSouth = "las", e.Oceanic = "oce", e.Turkey = "tr", e.Russia = "ru", e.PublicBetaEnvironment = "pbe"
        }(ze || (ze = {}));
        var We = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    connected: !1,
                    region: ze.NorthAmerica,
                    summonerName: "",
                    error: !1
                }, t.logger = p.j.withCategory("LeagueOfLegendsConnection"), t.getData = function() {
                    return c.__awaiter(t, void 0, void 0, function() {
                        var e, t, n;
                        return c.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    if (!this.props.userID) return this.logger.info("Tried to get League of Legends connection info, but the user is not logged in."), [2];
                                    e = Be.stringify({
                                        user_id: this.props.userID
                                    }), t = "/api/lol/summonername?" + e, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, re.a.get(t)];
                                case 2:
                                    return (n = i.sent()).error || n.requestError ? this.setState({
                                        connected: !1
                                    }) : n.body && this.setState({
                                        connected: !0
                                    }), [3, 4];
                                case 3:
                                    return i.sent(), this.setState({
                                        connected: !1
                                    }), [3, 4];
                                case 4:
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
                                        error: !1
                                    }), e = Be.stringify({
                                        user_id: this.props.userID,
                                        client_id: p.a.authClientID
                                    }), t = "/api/lol/delete?" + e, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, re.a.get(t)];
                                case 2:
                                    return (n = r.sent()).error || n.requestError ? (this.logger.warn("Failed to disconnect League of Legends account", {
                                        error: n.error,
                                        requestError: n.requestError
                                    }), this.setState({
                                        error: !0
                                    })) : this.setState({
                                        connected: !1
                                    }), [3, 4];
                                case 3:
                                    return i = r.sent(), this.logger.warn("Failed to disconnect League of Legends account", i), this.setState({
                                        error: !0
                                    }), [3, 4];
                                case 4:
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
                                        error: !1
                                    }), e = Be.stringify({
                                        user_id: this.props.userID,
                                        client_id: p.a.authClientID,
                                        summoner: this.state.summonerName,
                                        region: this.state.region
                                    }), t = "/api/lol/verify?" + e, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, re.a.get(t)];
                                case 2:
                                    return n = r.sent(), n.error || n.requestError || !n.body || 0 === n.body.summoner_id || "" === n.body.summoner_name || "" === n.body.twitch_id ? (this.logger.warn("Failed to connect League of Legends account.", {
                                        error: n.error,
                                        requestError: n.requestError
                                    }), this.setState({
                                        error: !0
                                    })) : this.setState({
                                        connected: !0
                                    }), [3, 4];
                                case 3:
                                    return i = r.sent(), this.logger.warn("Failed to connect League of Legends account.", i), this.setState({
                                        error: !0
                                    }), [3, 4];
                                case 4:
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
                var e = Object(p.d)("League of Legends", "LeagueOfLegendsConnection"),
                    t = Object(p.d)("Show rank and live in-game information.", "LeagueOfLegendsConnection"),
                    n = Object(p.d)("By connecting your Riot [or, League of Legends] account, you agree to share with Twitch, and allow Twitch to make public, metadata regarding your user profile, gameplay history, and statistics associated with League of Legends. If you no longer want to share this information, please disconnect your accounts.", "LeagueOfLegendsConnection");
                return u.createElement(Ue, {
                    image: u.createElement(qe, {
                        type: Me.LeagueOfLegends
                    }),
                    title: e,
                    subtitle: t,
                    body: this.renderBody(),
                    connected: this.state.connected,
                    onClick: this.state.connected ? this.disconnect : this.connect,
                    footer: n,
                    error: this.state.error
                })
            }, t.prototype.renderBody = function() {
                var e = [{
                    label: Object(p.d)("North America", "LeagueOfLegendsConnection"),
                    value: ze.NorthAmerica
                }, {
                    label: Object(p.d)("Brazil", "LeagueOfLegendsConnection"),
                    value: ze.Brazil
                }, {
                    label: Object(p.d)("Europe West", "LeagueOfLegendsConnection"),
                    value: ze.EuropeWest
                }, {
                    label: Object(p.d)("Europe Nordic & East", "LeagueOfLegendsConnection"),
                    value: ze.EuropeNordicAndEast
                }, {
                    label: Object(p.d)("Japan", "LeagueOfLegendsConnection"),
                    value: ze.Japan
                }, {
                    label: Object(p.d)("Korea", "LeagueOfLegendsConnection"),
                    value: ze.Korea
                }, {
                    label: Object(p.d)("Latin America North", "LeagueOfLegendsConnection"),
                    value: ze.LatinAmericaNorth
                }, {
                    label: Object(p.d)("Latin America South", "LeagueOfLegendsConnection"),
                    value: ze.LatinAmericaSouth
                }, {
                    label: Object(p.d)("Oceanic", "LeagueOfLegendsConnection"),
                    value: ze.Oceanic
                }, {
                    label: Object(p.d)("Turkey", "LeagueOfLegendsConnection"),
                    value: ze.Turkey
                }, {
                    label: Object(p.d)("Russia", "LeagueOfLegendsConnection"),
                    value: ze.Russia
                }, {
                    label: Object(p.d)("Public Beta Environment", "LeagueOfLegendsConnection"),
                    value: ze.PublicBetaEnvironment
                }];
                return u.createElement(_._4, {
                    className: "league-of-legends-connection__body",
                    "data-test-selector": "league-connection-body"
                }, u.createElement(_._4, {
                    padding: {
                        bottom: 1
                    }
                }, u.createElement(_._4, null, Object(p.d)("1. Log into your League of Legends account. Go to the verification section of your settings, and copy the following into the field: {code}", {
                    code: u.createElement(_.O, {
                        type: _._41.Span,
                        bold: !0
                    }, "ttv-" + this.props.userID)
                }, "LeagueOfLegendsConnection")), u.createElement(_._4, null, Object(p.d)("2. Enter your summoner name below, select your region, and press the connect button to link your accounts! Note, you may need to wait up to 30 seconds for your changes to take effect.", "LeagueOfLegendsConnection"))), u.createElement(_._4, {
                    display: _.P.Flex
                }, u.createElement(_._4, {
                    padding: {
                        right: 1
                    },
                    flexGrow: 1
                }, u.createElement(_._0, {
                    type: _._1.Text,
                    placeholder: Object(p.d)("Enter Summoner Name", "LeagueOfLegendsConnection"),
                    value: this.state.summonerName,
                    onChange: this.handleSummonerNameChange
                })), u.createElement(_._4, {
                    flexGrow: 1
                }, u.createElement(_._23, {
                    value: this.state.region,
                    onChange: this.handleRegionSelect
                }, e.map(function(e) {
                    return u.createElement("option", {
                        key: e.value,
                        value: e.value
                    }, e.label)
                })))))
            }, t
        }(u.Component);
        var He, Ge = Object(r.b)(function(e) {
                var t = Object(l.c)(e);
                return {
                    userID: t && t.id
                }
            })(We),
            Je = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClick = function() {}, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Object(p.d)("Steam", "SteamConnectionComponent"),
                        t = Object(p.d)("Share your game meta data when you go live", "SteamConnectionComponent"),
                        n = Object(p.d)("By connecting your Steam account, you acknowledge and agree that your Steam ID will be publicly visible in the Twitch API and that Steam will automatically receive information about the Steam content you view while your accounts are connected. If you do not want this information shared, please disconnect your accounts.", "SteamConnectionComponent");
                    return u.createElement(Ue, {
                        image: u.createElement(qe, {
                            type: Me.Steam
                        }),
                        title: e,
                        subtitle: t,
                        footer: n,
                        connected: !1,
                        onClick: this.handleClick
                    })
                }, t
            }(u.Component),
            Ye = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleClick = function() {}, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Object(p.d)("Youtube", "YoutubeConnectionComponent"),
                        t = Object(p.d)("Export archives and enable Live Annotation", "YoutubeConnectionComponent"),
                        n = Object(p.d)("Automatically notify your Youtube viewers when you are live on Twitch. You can change this from your Twitch account settings later.", "YoutubeConnectionComponent");
                    return u.createElement(Ue, {
                        image: u.createElement(qe, {
                            type: Me.Youtube
                        }),
                        title: e,
                        subtitle: t,
                        footer: n,
                        connected: !1,
                        onClick: this.handleClick
                    })
                }, t
            }(u.Component),
            Qe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return p.a.buildType === v.a.Production ? null : u.createElement("div", null, u.createElement(O.a, {
                        title: Object(p.d)("Recommended Connections", "SettingsConnectionsPage"),
                        description: Object(p.d)("Manage your connected accounts and services", "SettingsConnectionsPage")
                    }), u.createElement(k.a, null, u.createElement(Je, null), u.createElement(Ye, null), u.createElement(Ge, null)), u.createElement(O.a, {
                        title: Object(p.d)("Extensions Connections", "SettingsConnectionsPage"),
                        description: Object(p.d)("You have shared your Twitch username with these extensions", "SettingsConnectionsPage")
                    }), u.createElement(Re, null), u.createElement(O.a, {
                        title: Object(p.d)("Other Connections", "SettingsConnectionsPage"),
                        description: Object(p.d)("You have authorized these apps to use your Twitch account", "SettingsConnectionsPage")
                    }), u.createElement(O.a, {
                        title: Object(p.d)("Developer Applications", "SettingsConnectionsPage"),
                        description: Object(p.d)("Developer Application management has moved to {devPortalURL}", {
                            devPortalURL: u.createElement(_.M, {
                                to: "https://dev.twitch.tv"
                            }, "https://dev.twitch.tv")
                        }, "SettingsConnectionsPage")
                    }))
                }, t = c.__decorate([Object(g.d)("SettingsConnectionsPage", {
                    autoReportInteractive: !0,
                    destination: y.a.SettingsConnections
                }), Object(b.a)({
                    location: S.PageviewLocation.SettingsPage
                })], t)
            }(u.Component),
            Ke = n("LBNC"),
            $e = n("UbVv"),
            Xe = n("zCIC"),
            Ze = (n("hPJb"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.userId, t.props.isEnabled)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(_._27, {
                        className: "advanced-notification-settings-toggle",
                        display: _.P.Flex,
                        justifyContent: _._3.Between,
                        background: _.m.Base,
                        padding: {
                            x: 5,
                            y: 1
                        },
                        borderBottom: !0
                    }, u.createElement(_._4, {
                        margin: {
                            left: 5
                        },
                        display: _.P.Flex,
                        flexGrow: 1,
                        alignItems: _.c.Center,
                        flexWrap: _.S.NoWrap
                    }, u.createElement(_._4, {
                        display: _.P.Flex,
                        flexGrow: 1,
                        flexWrap: _.S.NoWrap
                    }, u.createElement(_._4, {
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, u.createElement(_._2, {
                        linkTo: "/" + this.props.login
                    }, u.createElement(_.l, {
                        src: this.props.thumbnail,
                        alt: this.props.text,
                        size: 40
                    }))), u.createElement(_._4, {
                        flexGrow: 1,
                        display: _.P.Flex,
                        flexDirection: _.R.Column
                    }, u.createElement(_.O, {
                        fontSize: _.T.Size5
                    }, u.createElement(w.a, {
                        to: "/" + this.props.login
                    }, this.props.text)), u.createElement(_.O, {
                        type: _._41.Span,
                        color: _.J.Alt2
                    }, this.props.description))), u.createElement(_._4, {
                        display: _.P.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, u.createElement(_._4, {
                        margin: {
                            right: 1
                        }
                    }, u.createElement(_._43, {
                        checked: this.props.isEnabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector",
                        id: this.props.userId
                    })), u.createElement(_._4, {
                        className: this.props.saved ? "advanced-notification-settings-toggle__saved" : "advanced-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, u.createElement(_.O, {
                        fontSize: _.T.Size5,
                        color: _.J.Link
                    }, Object(p.d)("Saved", "AdvancedNotificationSettingsToggle"))))))
                }, t
            }(u.Component)),
            et = n("AQCV"),
            tt = (n("t4xU"), n("EaRL")),
            nt = function(e) {
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
                                        }, Object(P.d)(tt, {
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
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return u.createElement(_._27, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, u.createElement(_._6, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return u.createElement(m.a, {
                        message: Object(p.d)("Error loading data.", "AdvancedNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return u.createElement(_._27, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, u.createElement(m.a, {
                        message: Object(p.d)("You must be logged in to update your settings", "AdvancedNotificationSettings")
                    }));
                    var e = Object(p.d)("{followCount, plural, one {You follow # channel} other {You follow # channels}}", {
                            followCount: this.props.data.currentUser.follows.totalCount
                        }, "AdvancedNotificationSettings"),
                        t = u.createElement(_._27, {
                            background: _.m.Alt2,
                            borderBottom: !0
                        }, u.createElement(_._2, {
                            onClick: this.toggleCollapse,
                            alpha: !0,
                            "data-test-selector": "header-selector"
                        }, u.createElement(_._4, {
                            display: _.P.Flex,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, u.createElement(_._4, {
                            className: "advanced-notification-settings__header",
                            flexGrow: 0
                        }, u.createElement(_.O, {
                            fontSize: _.T.Size5,
                            color: _.J.Alt2,
                            bold: !0
                        }, Object(p.d)("Advanced", "AdvancedNotificationSettings"))), u.createElement(_._4, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, u.createElement(_.O, {
                            "data-test-selector": "description-selector",
                            fontSize: _.T.Size5,
                            color: _.J.Alt2
                        }, e)), u.createElement(_._4, {
                            className: this.state.collapsed ? "advanced-notification-settings--collapse" : "advanced-notification-settings--expand",
                            flexGrow: 0,
                            flexShrink: 1,
                            display: _.P.Flex,
                            justifyContent: _._3.Center
                        }, u.createElement(_._17, {
                            asset: _._18.AngleRight,
                            type: _._19.Alt2
                        }))))),
                        n = !this.props.data.loading && !this.props.data.error && !!this.props.data.currentUser.follows.pageInfo.hasNextPage;
                    return this.props.data.currentUser.follows.totalCount > 0 ? this.state.collapsed ? u.createElement(_._27, null, t) : u.createElement(_._27, null, t, u.createElement(_._27, {
                        borderBottom: !0,
                        padding: 2
                    }, u.createElement(_._4, {
                        padding: {
                            bottom: 1
                        }
                    }, u.createElement(_.O, {
                        fontSize: _.T.Size5,
                        color: _.J.Alt2
                    }, Object(p.d)("Manage which channels you receive notifications for.", "AdvancedNotificationSettings"))), u.createElement(_._4, {
                        padding: {
                            bottom: 1
                        }
                    }, u.createElement(_.O, {
                        fontSize: _.T.Size4,
                        color: _.J.Alt
                    }, e)), u.createElement(_._27, {
                        className: "advanced-notification-settings__toggle-container",
                        borderTop: !0,
                        borderLeft: !0,
                        borderRight: !0,
                        margin: {
                            bottom: .5
                        }
                    }, this.renderToggles(), u.createElement(Xe.a, {
                        loadMore: this.props.loadMore,
                        enabled: n,
                        pixelThreshold: 200
                    })))) : null
                }, t.prototype.renderToggles = function() {
                    if (this.props.data && !this.props.data.loading && this.props.data.currentUser) {
                        for (var e = [], t = 0, n = this.props.data.currentUser.follows.edges; t < n.length; t++) {
                            var i = n[t];
                            i.node && i.node.id && i.node.followers && e.push(u.createElement(Ze, {
                                userId: i.node.id,
                                text: i.node.displayName,
                                login: i.node.login,
                                description: Object(p.d)("{followerCount,number} followers", {
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
            }(u.Component),
            it = Object(a.d)(Object(j.a)(tt, {
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
                                query: tt,
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
            }), Object(j.a)(et, {
                name: "setAdvancedNotificationSetting"
            }), Object(g.d)("AdvancedNotificationSettings"))(nt),
            rt = n("OOv5"),
            at = n("JBcW"),
            ot = (n("mVHD"), p.o.logger.withCategory("browser-push-notifications-settings")),
            st = function(e) {
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
                                        }), [4, rt.a.hasPushSubscription()];
                                    case 1:
                                        if (!n.sent()) return [3, 6];
                                        n.label = 2;
                                    case 2:
                                        return n.trys.push([2, 4, , 5]), [4, rt.a.userUnsubscribe(at.a.Settings)];
                                    case 3:
                                        return n.sent(), [3, 5];
                                    case 4:
                                        return e = n.sent(), ot.error(e, "user unsubscribe failed"), [3, 5];
                                    case 5:
                                        return [3, 9];
                                    case 6:
                                        return n.trys.push([6, 8, , 9]), [4, rt.a.userSubscribe(at.a.Settings)];
                                    case 7:
                                        return n.sent(), [3, 9];
                                    case 8:
                                        return t = n.sent(), Object($e.a)() ? (this.setState({
                                            hide: !0
                                        }), [2]) : (ot.error(t, "user subscribe failed"), [3, 9]);
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
                                    return t.trys.push([0, 3, , 4]), [4, rt.a.initialize()];
                                case 1:
                                    return t.sent(), [4, this.updateSubscriptionState()];
                                case 2:
                                    return t.sent(), [3, 4];
                                case 3:
                                    return e = t.sent(), ot.error(e, "unexpected error initializing push manager"), this.setState({
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
                    var e = this.state.hasSubscription ? Object(p.d)("Turn Off", "BrowserPushNotificationsSettings") : Object(p.d)("Turn On", "BrowserPushNotificationsSettings");
                    return u.createElement(_._27, {
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
                    }, u.createElement(_._27, {
                        className: "browser-push-notification-settings",
                        padding: {
                            left: 5,
                            right: 4
                        },
                        display: _.P.Flex,
                        margin: {
                            x: 5
                        }
                    }, u.createElement(_._4, {
                        className: "browser-push-notification-settings__body",
                        display: _.P.Flex,
                        flexWrap: _.S.NoWrap,
                        flexGrow: 1
                    }, u.createElement(_._4, {
                        margin: {
                            right: 1
                        },
                        flexGrow: 1
                    }, u.createElement(_.O, {
                        fontSize: _.T.Size4,
                        color: _.J.Alt
                    }, Object(p.d)("Receive Browser Notifications for this Device", "BrowserPushNotificationsSettings")), u.createElement(_._4, {
                        padding: {
                            top: .5
                        }
                    }, u.createElement(_.O, {
                        fontSize: _.T.Size5,
                        color: _.J.Alt2
                    }, Object(p.d)("See notifications at the corner of your screen, even when you’re not on Twitch", "BrowserPushNotificationsSettings")))), u.createElement(_._4, {
                        flexShrink: 0
                    }, u.createElement(_.u, {
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
                                    return [4, rt.a.hasPushSubscription()];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        hasSubscription: e
                                    }), [2]
                            }
                        })
                    })
                }, t
            }(u.Component),
            lt = Object(T.compose)(Object(g.d)("BrowserPushNotificationsSettings"))(st),
            ct = (n("iOZM"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.category, t.props.isEnabled)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(_._27, {
                        className: "platform-notification-settings-toggle",
                        display: _.P.Flex,
                        flexWrap: _.S.NoWrap,
                        alignItems: _.c.Start,
                        background: _.m.Alt,
                        margin: {
                            top: 1,
                            bottom: .5
                        },
                        padding: {
                            right: 5
                        }
                    }, u.createElement(_._4, {
                        className: "platform-notification-settings-toggle__body",
                        display: _.P.Flex,
                        flexDirection: _.R.Column,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, u.createElement(_._4, {
                        margin: {
                            bottom: .5
                        }
                    }, u.createElement(_.O, {
                        fontSize: _.T.Size4
                    }, this.props.text)), u.createElement(_.O, {
                        fontSize: _.T.Size5,
                        color: _.J.Alt2
                    }, this.props.description)), u.createElement(_._4, {
                        display: _.P.Flex,
                        margin: {
                            top: .5
                        },
                        flexGrow: 0,
                        flexShrink: 0
                    }, u.createElement(_._4, {
                        margin: {
                            right: 1
                        }
                    }, u.createElement(_._43, {
                        checked: this.props.isEnabled,
                        disabled: this.props.disabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector"
                    })), u.createElement(_._4, {
                        className: this.props.saved ? "platform-notification-settings-toggle__saved" : "platform-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, u.createElement(_.O, {
                        fontSize: _.T.Size5,
                        color: _.J.Link
                    }, Object(p.d)("Saved", "PlatformNotificationSettingsToggle")))))
                }, t
            }(u.Component)),
            ut = n("g+dK"),
            dt = (n("RC0U"), n("1f5k"));
        ! function(e) {
            e.onsite = "onsite", e.email = "email", e.push = "push"
        }(He || (He = {}));
        var pt, mt, gt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        collapsed: t.props.startCollapsed,
                        saved: new Set
                    }, t.VisibleSettings = [{
                        category: "LIVE",
                        name: Object(p.d)("Live", "PlatformNotificationSettings"),
                        description: Object(p.d)("When a streamer I follow goes Live", "PlatformNotificationSettings")
                    }, {
                        category: "VIDEOS",
                        name: Object(p.d)("Video Broadcast", "PlatformNotificationSettings"),
                        description: Object(p.d)("When a channel I follow starts a Vodcast. This also includes Video Comment notifications", "PlatformNotificationSettings")
                    }, {
                        category: "CLIPS",
                        name: Object(p.d)("Clips", "PlatformNotificationSettings"),
                        description: Object(p.d)("Receive notifications for clips you made and clips made by your viewers", "PlatformNotificationSettings")
                    }, {
                        category: "EVENTS",
                        name: Object(p.d)("Events", "PlatformNotificationSettings"),
                        description: Object(p.d)("Any time an event I follow starts", "PlatformNotificationSettings")
                    }, {
                        category: "CHAT",
                        name: Object(p.d)("Chat", "PlatformNotificationSettings"),
                        description: Object(p.d)("Any time there’s Rooms activity related to me.", "PlatformNotificationSettings")
                    }, {
                        category: "FRIENDS",
                        name: Object(p.d)("Friends", "PlatformNotificationSettings"),
                        description: Object(p.d)("When a friend sends me a message", "PlatformNotificationSettings")
                    }, {
                        category: "STREAMER",
                        name: Object(p.d)("Your Channel", "PlatformNotificationSettings"),
                        description: Object(p.d)("Receive notifications when viewers follow your channel or auto host you", "PlatformNotificationSettings")
                    }, {
                        category: "MODERATOR",
                        name: Object(p.d)("Moderator", "PlatformNotificationSettings"),
                        description: Object(p.d)("Any time I get a notification as a moderator", "PlatformNotificationSettings")
                    }, {
                        category: "COMMERCE",
                        name: Object(p.d)("Gifts and Rewards", "PlatformNotificationSettings"),
                        description: Object(p.d)("Receive notifications for drops, crates, and subscription gifts", "PlatformNotificationSettings")
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
                                        }, Object(P.d)(dt, {}, a), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return u.createElement(_._4, {
                        padding: 1
                    }, u.createElement(_._6, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return u.createElement(m.a, {
                        message: Object(p.d)("Error loading data.", "PlatformNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return u.createElement(_._27, {
                        margin: {
                            top: 1
                        }
                    }, u.createElement(m.a, {
                        message: Object(p.d)("You must be logged in to update your settings.", "PlatformNotificationSettings")
                    }));
                    var e = u.createElement(_._27, {
                        background: _.m.Alt2,
                        borderBottom: !0
                    }, u.createElement(_._2, {
                        onClick: this.toggleCollapse,
                        alpha: !0
                    }, u.createElement(_._4, {
                        display: _.P.Flex,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, u.createElement(_._4, {
                        className: "platform-notification-settings__header",
                        flexGrow: 0,
                        "data-test-selector": "collapsible-header"
                    }, u.createElement(_.O, {
                        "data-test-selector": "display-name",
                        fontSize: _.T.Size5,
                        color: _.J.Alt2,
                        bold: !0
                    }, this.props.displayName)), u.createElement(_._4, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, u.createElement(_.O, {
                        fontSize: _.T.Size5,
                        color: _.J.Alt2
                    }, this.getSettingTurnedOnMessage())), u.createElement(_._4, {
                        className: this.state.collapsed ? "platform-notification-settings--collapse" : "platform-notification-settings--expand",
                        flexGrow: 0,
                        flexShrink: 1,
                        display: _.P.Flex,
                        justifyContent: _._3.Center
                    }, u.createElement(_._17, {
                        asset: _._18.AngleRight,
                        type: _._19.Alt2
                    })))));
                    return this.state.collapsed ? u.createElement(_._27, null, e) : u.createElement(_._27, null, e, u.createElement(_._27, {
                        padding: 2,
                        borderBottom: !0
                    }, u.createElement(_._4, {
                        padding: {
                            bottom: 1
                        }
                    }, u.createElement(_.O, {
                        "data-test-selector": "description",
                        fontSize: _.T.Size5,
                        color: _.J.Alt2
                    }, this.props.description)), u.createElement(_._27, {
                        display: _.P.Flex,
                        margin: {
                            y: .5
                        },
                        borderBottom: !0
                    }, u.createElement(_._4, {
                        className: "platform-notification-settings__all",
                        display: _.P.Flex,
                        padding: {
                            bottom: 1,
                            right: 5
                        },
                        justifyContent: _._3.Center,
                        flexGrow: 1,
                        flexWrap: _.S.NoWrap
                    }, u.createElement(_._4, {
                        className: "platform-notification-settings__all-body",
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, u.createElement(_.O, {
                        fontSize: _.T.Size4,
                        color: _.J.Alt,
                        "data-test-selector": "explanation"
                    }, this.props.explanation)), u.createElement(_._4, {
                        display: _.P.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, u.createElement(_._4, {
                        margin: {
                            right: 1
                        }
                    }, u.createElement(_._43, {
                        "data-test-selector": "all-toggle",
                        checked: this.getGlobalStateForPlatform(),
                        onChange: this.toggleAll
                    })), u.createElement(_._4, {
                        padding: {
                            x: 1
                        },
                        "data-test-selector": "saved-selector",
                        className: this.getDisplaySaved("ALL") ? "platform-notification-settings__saved" : "platform-notification-settings__saved--hide"
                    }, u.createElement(_.O, {
                        fontSize: _.T.Size5,
                        color: _.J.Link
                    }, Object(p.d)("Saved", "PlatformNotificationSettings")))))), u.createElement(_._4, {
                        className: "platform-notification-settings__toggle-container",
                        display: _.P.Flex,
                        flexDirection: _.R.Column,
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
                    return 0 !== t && this.getGlobalStateForPlatform() ? t < e ? Object(p.d)("Some notifications turned on", "PlatformNotificationSettings") : Object(p.d)("All notifications turned on", "PlatformNotificationSettings") : Object(p.d)("All notifications turned off", "PlatformNotificationSettings")
                }, t.prototype.getGlobalStateForPlatform = function() {
                    var e = this.getSettingByCategory("ALL");
                    return !!e && e.isEnabled
                }, t.prototype.renderToggles = function() {
                    for (var e = [], t = 0, n = this.VisibleSettings; t < n.length; t++) {
                        var i = n[t],
                            r = this.getSettingByCategory(i.category);
                        r && e.push(u.createElement(ct, {
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
            }(u.Component),
            ht = Object(a.d)(Object(g.d)("PlatformNotificationSettings"), Object(j.a)(dt, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network"
                    }
                }
            }), Object(j.a)(ut, {
                name: "setNotificationSetting"
            }))(gt),
            ft = (n("nq6q"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e = "" !== location.search ? Be.parse(location.search) : {},
                        t = !!e["open-advanced"] && "true" === e["open-advanced"];
                    return u.createElement(_._27, {
                        className: "notification-settings__body",
                        borderRight: !0,
                        borderLeft: !0,
                        borderTop: !0
                    }, u.createElement(_._27, {
                        background: _.m.Alt,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, u.createElement(_._4, {
                        margin: {
                            bottom: .5
                        }
                    }, u.createElement(_.O, {
                        fontSize: _.T.Size3,
                        color: _.J.Alt
                    }, Object(p.d)("Notifications", "SettingsNotificationsPage"))), u.createElement(_._4, null, u.createElement(_.O, {
                        fontSize: _.T.Size5,
                        color: _.J.Alt2
                    }, Object(p.d)("Get the notifications you care about, where you want to see them.", "SettingsNotificationsPage")))), u.createElement(ht, {
                        startCollapsed: t,
                        platformName: He.onsite,
                        displayName: Object(p.d)("On Twitch", "SettingsNotificationsPage"),
                        description: Object(p.d)("We'll always keep you informed on important updates to Twitch and your account.", "SettingsNotificationsPage"),
                        explanation: Object(p.d)("Send me notifications on Twitch about", "SettingsNotificationsPage"),
                        key: "onsite",
                        extraSettings: this.renderBrowserPushNotifications()
                    }), u.createElement(ht, {
                        startCollapsed: !0,
                        platformName: He.email,
                        displayName: Object(p.d)("By Email", "SettingsNotificationsPage"),
                        description: Object(p.d)("Receive important notifications through email. You may receive additional emails about features and content on Twitch. You can turn off specific emails using the unsubscribe link included in each message.", "SettingsNotificationsPage"),
                        explanation: Object(p.d)("Send me emails about", "SettingsNotificationsPage"),
                        key: "email"
                    }), u.createElement(ht, {
                        platformName: He.push,
                        startCollapsed: !0,
                        displayName: Object(p.d)("On Mobile", "SettingsNotificationsPage"),
                        description: Object(p.d)("Get Twitch updates on the go. Receive notifications right on your phone's home screen.", "SettingsNotificationsPage"),
                        explanation: Object(p.d)("Send me push notifications", "SettingsNotificationsPage"),
                        key: "push"
                    }), u.createElement(it, {
                        startCollapsed: !t
                    }))
                }, t.prototype.renderBrowserPushNotifications = function() {
                    return Object(Ke.a)() && !Object($e.a)() ? u.createElement(lt, null) : null
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t = c.__decorate([Object(g.d)("SettingsNotificationsPage", {
                    destination: y.a.NotificationSettingsPage
                }), Object(b.a)({
                    location: S.PageviewLocation.SettingsPage
                })], t)
            }(u.Component)),
            bt = n("S1vB"),
            vt = n("cumT"),
            yt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: i.NoChanges
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: i.Working
                        }, function() {})
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return p.a.buildType === v.a.Production ? null : this.props.data.currentUser && this.props.data.requestInfo ? this.props.data.currentUser.hasPrime ? u.createElement("div", null, u.createElement(E, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    })) : Object(bt.a)(this.props.data.requestInfo.countryCode) ? (window.location.replace("https://twitch.amazon.com/prime?ref_=sm_w_tsp_p_t"), null) : u.createElement(d.a, {
                        to: "/settings/turbo"
                    }) : null
                }, t = c.__decorate([Object(g.d)("SettingsPrimePage", {
                    autoReportInteractive: !0,
                    destination: y.a.SettingsPrime
                }), Object(b.a)({
                    location: S.PageviewLocation.SettingsPage
                }), Object(j.a)(vt)], t)
            }(u.Component),
            St = function() {
                return u.createElement(m.a, {
                    message: Object(p.d)("Error loading user data. Please try again later.", "SettingsPageError")
                })
            },
            _t = function() {
                return u.createElement(D.a, {
                    label: Object(p.d)("Disable Your Twitch Account", "DisableAccountLink"),
                    orientation: _.V.Horizontal
                }, Object(p.d)("If you want to disable your Twitch account, you can do so from the <x:link>Disable Account</x:link> page.", {
                    "x:link": function(e) {
                        return u.createElement("a", {
                            key: "disable-account-link",
                            href: "https://www.twitch.tv/user/disable_account",
                            "data-a-target": "disable-account-link"
                        }, e)
                    }
                }, "DisableAccountLink"))
            },
            Et = 5e3;
        ! function(e) {
            e[e.InvalidAddress = 1] = "InvalidAddress", e[e.InvalidDomain = 2] = "InvalidDomain"
        }(pt || (pt = {})),
        function(e) {
            e[e.Error = 0] = "Error", e[e.CanSendVerificationEmail = 1] = "CanSendVerificationEmail", e[e.VerificationEmailSent = 2] = "VerificationEmailSent", e[e.Verified = 3] = "Verified"
        }(mt || (mt = {}));
        var kt, Ot = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = p.j.withCategory("email-setting"), n.onClickVerify = function() {
                        return c.__awaiter(n, void 0, void 0, function() {
                            var e, t = this;
                            return c.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            working: !0
                                        }), e = mt.Error, n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, re.a.put("/kraken/users/" + this.props.id, {
                                            body: {
                                                email: this.props.email
                                            }
                                        })];
                                    case 2:
                                        return 200 === n.sent().status && (e = mt.VerificationEmailSent), [3, 4];
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
                                                    status: mt.CanSendVerificationEmail
                                                })
                                            }, Et)
                                        }), [2]
                                }
                            })
                        })
                    }, n.state = {
                        status: t.verified ? mt.Verified : mt.CanSendVerificationEmail,
                        working: !1
                    }, n
                }
                return c.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.feedbackTimerHandle && clearTimeout(this.feedbackTimerHandle)
                }, t.prototype.render = function() {
                    var e = !!this.props.error || this.state.status === mt.Error,
                        t = this.props.disabled || this.state.working;
                    return u.createElement(_._4, {
                        display: _.P.Flex,
                        flexWrap: _.S.NoWrap
                    }, u.createElement(D.a, {
                        id: "profile-account-info-setting__email-input",
                        error: e,
                        errorMessage: e ? this.renderEmailError() : void 0,
                        label: Object(p.d)("Email", "EmailSetting")
                    }, u.createElement(_._4, {
                        display: _.P.Flex
                    }, u.createElement(_._4, {
                        flexGrow: 1
                    }, u.createElement(_._0, {
                        id: "profile-account-info-setting__email-input",
                        type: _._1.Email,
                        disabled: t,
                        onChange: this.props.onChange,
                        required: !0,
                        value: this.props.email,
                        "data-a-target": "profile-email-input"
                    })), this.renderVerifyButton(t)), u.createElement(U, {
                        text: this.renderVerificationMessage(),
                        dataTarget: "profile-email-description"
                    })))
                }, t.prototype.renderVerifyButton = function(e) {
                    switch (this.state.status) {
                        case mt.CanSendVerificationEmail:
                            return u.createElement(_.u, {
                                type: _.A.Default,
                                disabled: this.props.dirty || e,
                                onClick: this.onClickVerify,
                                "data-a-target": "profile-email-verify-button"
                            }, Object(p.d)("Verify", "EmailSetting"));
                        case mt.VerificationEmailSent:
                            return u.createElement(_.u, {
                                type: _.A.Success,
                                disabled: !0,
                                "data-a-target": "profile-email-sent-button"
                            }, Object(p.d)("Email Sent", "EmailSetting"));
                        case mt.Error:
                            return u.createElement(_.u, {
                                type: _.A.Alert,
                                disabled: !0,
                                "data-a-target": "profile-email-error-button"
                            }, Object(p.d)("Error", "EmailSetting"));
                        case mt.Verified:
                        default:
                            return null
                    }
                }, t.prototype.renderVerificationMessage = function() {
                    switch (this.state.status) {
                        case mt.CanSendVerificationEmail:
                            return Object(p.d)("This email is linked to your account - please take a moment to verify", "EmailSetting");
                        case mt.VerificationEmailSent:
                            return Object(p.d)("Verification email sent!", "EmailSetting");
                        case mt.Verified:
                            return Object(p.d)("This email is linked to your account", "EmailSetting");
                        default:
                            return null
                    }
                }, t.prototype.renderEmailError = function() {
                    if (this.state.status === mt.Error) return Object(p.d)("Failed to send verification email - please try again later", "EmailSetting");
                    switch (this.props.error) {
                        case pt.InvalidAddress:
                            return Object(p.d)("Please provide a valid email address", "EmailSetting");
                        case pt.InvalidDomain:
                            return Object(p.d)("Admins must use their work email address", "EmailSetting");
                        default:
                            return
                    }
                }, t
            }(u.Component),
            wt = n("FuaS"),
            Ct = n("FsFC");
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.Eligible = 2] = "Eligible", e[e.NotEligible = 3] = "NotEligible"
        }(kt || (kt = {}));
        var Nt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        status: kt.Loading
                    }, t.logger = p.j.withCategory("username-setting"), t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.emailVerified && this.fetchChangeEligibility()
                }, t.prototype.render = function() {
                    return u.createElement(_._4, {
                        display: _.P.Flex,
                        flexWrap: _.S.NoWrap
                    }, u.createElement(D.a, {
                        label: Object(p.d)("Username", "UsernameSetting"),
                        error: this.state.status === kt.Error,
                        errorMessage: this.state.status === kt.Error ? this.renderErrorMessage() : void 0
                    }, u.createElement(_._4, {
                        display: _.P.Flex
                    }, u.createElement(_._4, {
                        flexGrow: 1
                    }, u.createElement(_._0, {
                        type: _._1.Text,
                        disabled: !0,
                        value: this.props.login,
                        "data-a-target": "profile-username-input"
                    })), this.state.status === kt.Eligible && u.createElement(_.v, {
                        ariaLabel: Object(p.d)("Edit Username", "UsernameSetting"),
                        icon: _._18.Edit,
                        linkTo: "https://www.twitch.tv/logins/new",
                        "data-a-target": "profile-edit-username-button"
                    })), u.createElement(U, {
                        dataTarget: "profile-username-description",
                        text: this.renderChangeEligibilityMessage()
                    })))
                }, t.prototype.renderChangeEligibilityMessage = function() {
                    if (!this.props.emailVerified) return Object(p.d)("You must have a verified email to update your username", "UsernameSetting");
                    switch (this.state.status) {
                        case kt.Loading:
                            return Object(p.d)("Loading username change eligibility...", "UsernameSetting");
                        case kt.Eligible:
                            return Object(p.d)("You may update your username", "UsernameSetting");
                        case kt.NotEligible:
                            return this.state.eligibilityTimeISO && Object(p.d)("You may update your username again in {distanceFromNow}", {
                                distanceFromNow: function(e) {
                                    var t = Date.now(),
                                        n = (new Date(e).getTime() - t) / 1e3;
                                    if (!(n <= 0)) return Object(Ct.a)(n)
                                }(this.state.eligibilityTimeISO) || ""
                            }, "UsernameSetting");
                        default:
                            return null
                    }
                }, t.prototype.renderErrorMessage = function() {
                    return Object(p.d)("We had trouble fetching your rename eligibility - please try again later", "UsernameSetting")
                }, t.prototype.fetchChangeEligibility = function() {
                    return c.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return c.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, re.a.get("/kraken/user/rename_status?scope=user_read")];
                                case 1:
                                    return (e = t.sent()).body && e.body.is_rename_eligible ? this.setState({
                                        status: kt.Eligible
                                    }) : e.body && !1 === e.body.is_rename_eligible ? this.setState({
                                        status: kt.NotEligible,
                                        eligibilityTimeISO: e.body.rename_eligible_at
                                    }) : this.setState({
                                        status: kt.Error
                                    }), [3, 3];
                                case 2:
                                    return t.sent(), this.logger.warn("Failed to fetch rename_status for user " + this.props.login), this.setState({
                                        status: kt.Error
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t
            }(u.Component),
            Tt = ["ko", "ja", "zh", "zh-cn", "zh-tw", "zh-hk"],
            jt = "profile-account-info-setting__bio-input",
            Pt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return u.createElement("div", null, u.createElement(Ot, {
                        disabled: this.props.controlsDisabled,
                        dirty: this.props.emailDirty,
                        email: this.props.email,
                        id: this.props.id,
                        error: this.props.emailError,
                        login: this.props.login,
                        onChange: this.props.onEmailChange,
                        verified: this.props.emailVerified
                    }), u.createElement(Nt, {
                        emailVerified: this.props.emailVerified,
                        login: this.props.login
                    }), u.createElement(D.a, {
                        id: "profile-account-info-setting__displayname-input",
                        error: !!this.props.displayNameError,
                        errorMessage: this.props.displayNameError ? this.renderDisplayNameError() : void 0,
                        label: Object(p.d)("Display Name", "ProfileAccountInfo")
                    }, u.createElement(_._0, {
                        id: "profile-account-info-setting__displayname-input",
                        "data-a-target": "profile-displayname-input",
                        type: _._1.Text,
                        disabled: this.props.controlsDisabled,
                        onChange: this.props.onDisplayNameChange,
                        value: this.props.displayName
                    }), u.createElement(U, {
                        dataTarget: "profile-displayname-description",
                        text: this.renderDisplayNameDescription()
                    })), u.createElement(D.a, {
                        id: jt,
                        error: !!this.props.bioError,
                        errorMessage: this.props.bioError ? this.renderBioError() : void 0,
                        label: Object(p.d)("Bio", "ProfileAccountInfo")
                    }, u.createElement(_._38, {
                        id: jt,
                        disabled: this.props.controlsDisabled,
                        onChange: this.props.onBioChange,
                        maxLength: 300,
                        noResize: !0,
                        value: this.props.bio,
                        "data-a-target": "profile-bio-input"
                    }), u.createElement(U, {
                        dataTarget: "profile-bio-description",
                        text: Object(p.d)("Who you are in fewer than 300 characters", "ProfileAccountInfo")
                    })))
                }, t.prototype.renderDisplayNameDescription = function() {
                    return this.userHasCJKLanguageSet() ? Object(p.d)("Customize the capitalization of your display name or change it to contain English characters! Setting an English display name is a permanent change — requests to undo it will not be honored! Display names that do not adhere to Twitch Rules of Conduct may result in an indefinite suspension of your account.", "ProfleAccountInfo") : Object(p.d)("Customize capitalization for your username", "ProfileAccountInfo")
                }, t.prototype.renderBioError = function() {
                    return Object(p.d)("Your description is too long", "ProfileAccountInfo")
                }, t.prototype.renderDisplayNameError = function() {
                    return Object(p.d)("You may not change your display name, only the capitalization of it", "ProfileAccountInfo")
                }, t.prototype.userHasCJKLanguageSet = function() {
                    var e = Object(wt.a)();
                    return !!e && Tt.includes(e)
                }, t
            }(u.Component),
            It = n("E9Qg"),
            xt = n.n(It),
            Ut = n("tL94"),
            Dt = (n("i1sU"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t.props.data && t.props.data.currentUser;
                        e && t.props.showModal(we.a, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            imageType: Ce.a.ProfileBanner,
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
                    if (!e.loading && !t) return u.createElement(_.O, {
                        type: _._41.Span,
                        color: _.J.Error
                    }, Object(p.d)("Sorry, something went wrong. Please try again later.", "ProfileBannerSetting"));
                    var n = Object(p.d)("Profile Banner", "ProfileBannerSetting"),
                        i = null;
                    return i = e.loading ? u.createElement(_._10, {
                        "data-test-selector": "profile-banner__placeholder",
                        "data-a-target": "profile-banner-image",
                        height: 140,
                        width: 440
                    }) : t && t.bannerImageURL ? u.createElement(g.b, {
                        src: t.bannerImageURL,
                        alt: n,
                        className: "profile-banner-setting__current-image",
                        "data-a-target": "profile-banner-image"
                    }) : u.createElement("div", {
                        className: "profile-banner-setting__current-image profile-banner-setting__current-image--default",
                        style: {
                            backgroundImage: "url(" + xt.a + ")"
                        },
                        "data-a-target": "profile-banner-image"
                    }), u.createElement(_._4, {
                        className: "profile-banner-setting"
                    }, u.createElement(_._4, {
                        display: _.P.Flex,
                        flexDirection: _.R.Row
                    }, u.createElement(_._4, {
                        margin: {
                            right: 2
                        }
                    }, i), u.createElement(_._4, {
                        margin: {
                            y: "auto"
                        }
                    }, u.createElement(_.u, {
                        ariaLabel: Object(p.d)("Update Profile Banner", "ProfileBannerSetting"),
                        type: _.A.Hollow,
                        onClick: this.openModal,
                        "data-a-target": "profile-banner-upload-button",
                        "data-test-selector": "profile-banner-upload-button"
                    }, u.createElement(_._4, {
                        padding: {
                            x: 1
                        }
                    }, Object(p.d)("Update", "ProfileBannerSetting"))), u.createElement(U, {
                        text: Object(p.d)("File format: JPEG, PNG, GIF (recommended 1200x380, max 10MB)", "ProfileBannerSetting")
                    }))))
                }, t
            }(u.Component)),
            Ft = Object(T.compose)(Object(g.d)("ProfileBannerSetting"), Object(j.a)(Ut))(Dt);
        var Lt = Object(r.b)(null, function(e) {
                return Object(a.b)({
                    showModal: Oe.d
                }, e)
            })(Ft),
            At = n("x9n8"),
            Mt = n("goep"),
            Rt = (n("eppJ"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t.props.data && t.props.data.currentUser;
                        e && t.props.showModal(At.a, {
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
                        t = u.createElement(_._10, {
                            height: 140,
                            width: 140
                        });
                    return e && e.profileImageURL && (t = u.createElement(g.b, {
                        src: e.profileImageURL,
                        alt: Object(p.d)("Profile Picture", "ProfileImageSetting"),
                        className: "profile-image-setting__current-image",
                        "data-a-target": "profile-image"
                    })), u.createElement(_._4, {
                        className: "profile-image-setting"
                    }, u.createElement(_._4, {
                        display: _.P.Flex,
                        flexDirection: _.R.Row
                    }, u.createElement(_._4, {
                        margin: {
                            right: 2
                        }
                    }, t), u.createElement(_._4, {
                        margin: {
                            y: "auto"
                        }
                    }, u.createElement(_.u, {
                        ariaLabel: Object(p.d)("Update Profile Picture", "ProfileImageSetting"),
                        type: _.A.Hollow,
                        onClick: this.openModal,
                        "data-a-target": "profile-image-upload-button",
                        "data-test-selector": "profile-image-upload-button"
                    }, u.createElement(_._4, {
                        padding: {
                            x: 1
                        }
                    }, Object(p.d)("Update", "ProfileImageSetting"))), u.createElement(U, {
                        text: Object(p.d)("File format: JPEG, PNG, GIF (max size 256x256, 10MB)", "ProfileImageSetting")
                    }))))
                }, t
            }(u.Component)),
            Bt = Object(T.compose)(Object(g.d)("ProfileImageSetting"), Object(j.a)(Mt))(Rt);
        var Vt, zt = Object(r.b)(null, function(e) {
                return Object(a.b)({
                    showModal: Oe.d
                }, e)
            })(Bt),
            qt = n("OA9H");
        ! function(e) {
            e.Bio = "Error (403): Description specified is too long", e.DisplayName = "Error (403): You may not change your display name, only the capitalization of it.", e.EmailNotValid = "Error (403): Email address is not valid", e.EmailDomainNotAllowed = "Error (403): Admins must use their work email"
        }(Vt || (Vt = {}));
        var Wt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        bioError: !1,
                        displayNameError: !1,
                        saveStatus: i.Working
                    }, t.logger = p.j.withCategory("settings-profile-page"), t.onClickSave = function() {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, r, a, o, s = this;
                            return c.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        if (!this.props.data.currentUser) return [2];
                                        this.setState({
                                            saveStatus: i.Working
                                        }), e = i.Error, t = !1, n = !1, r = void 0, l.label = 1;
                                    case 1:
                                        return l.trys.push([1, 3, , 4]), [4, re.a.put("/kraken/users/" + this.props.data.currentUser.id, {
                                            body: this.buildRequestBody()
                                        })];
                                    case 2:
                                        if (200 === (a = l.sent()).status) e = i.Success;
                                        else if (403 === a.status) switch (a.error && a.error.message) {
                                            case Vt.EmailNotValid:
                                                r = pt.InvalidAddress;
                                                break;
                                            case Vt.EmailDomainNotAllowed:
                                                r = pt.InvalidDomain;
                                                break;
                                            case Vt.DisplayName:
                                                t = !0;
                                                break;
                                            case Vt.Bio:
                                                n = !0;
                                                break;
                                            default:
                                                this.logErrorToSentinel(a)
                                        } else this.logErrorToSentinel(a);
                                        return [3, 4];
                                    case 3:
                                        return o = l.sent(), this.logger.warn("Network error submitting profile for user", {
                                            user: this.props.data.currentUser && this.props.data.currentUser.login,
                                            error: o
                                        }), [3, 4];
                                    case 4:
                                        return this.setState({
                                            saveStatus: e,
                                            bioError: n,
                                            displayNameError: t,
                                            emailError: r
                                        }, function() {
                                            e === i.Success && s.props.data.refetch && s.props.data.refetch()
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
                    if (!this.props.data.currentUser) return this.props.data.loading ? u.createElement(_._6, {
                        fillContent: !0
                    }) : u.createElement(St, null);
                    var e = u.createElement(E, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    });
                    return u.createElement("div", null, u.createElement(O.a, {
                        title: Object(p.d)("Profile Picture", "SettingsProfilePage")
                    }), u.createElement(k.a, null, u.createElement(Te.a, null, u.createElement(zt, null))), u.createElement(O.a, {
                        title: Object(p.d)("Profile Banner", "SettingsProfilePage")
                    }), u.createElement(k.a, null, u.createElement(Te.a, null, u.createElement(Lt, null))), u.createElement(O.a, {
                        title: Object(p.d)("Profile Settings", "SettingsProfilePage"),
                        description: Object(p.d)("Change identifying details for your account", "SettingsProfilePage")
                    }), u.createElement(k.a, {
                        footer: e
                    }, u.createElement(Pt, {
                        bio: this.state.bio || "",
                        bioError: this.state.bioError,
                        controlsDisabled: this.state.saveStatus === i.Working,
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
                    })), u.createElement(O.a, {
                        title: Object(p.d)("Disabling Your Twitch Account", "SettingsProfilePage"),
                        description: Object(p.d)("Completely deactivate your account", "SettingsProfilePage")
                    }), u.createElement(k.a, null, u.createElement(_t, null)))
                }, t.prototype.hydrateState = function(e) {
                    e.data.currentUser && this.setState({
                        bio: e.data.currentUser.description,
                        displayName: e.data.currentUser.displayName,
                        email: e.data.currentUser.email,
                        saveStatus: i.NoChanges
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
                        saveStatus: e ? i.DirtyChanges : i.NoChanges
                    })
                }, t
            }(u.Component),
            Ht = Object(T.compose)(Object(j.a)(qt), Object(g.d)("SettingsProfilePage", {
                autoReportInteractive: !0,
                destination: y.a.SettingsProfile
            }), Object(b.a)({
                location: S.PageviewLocation.SettingsPage
            }))(Wt),
            Gt = "/v5/whispers/settings",
            Jt = function(e) {
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
                                        return n.trys.push([1, 3, , 4]), [4, re.a.post(Gt, {
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
                                    return t.trys.push([0, 2, , 3]), [4, re.a.get(Gt)];
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
                    return u.createElement(F, {
                        id: "settings-security-page-block-whispers",
                        label: Object(p.d)("Block Whispers from Stangers", "SettingsSecurityPage"),
                        description: Object(p.d)("Block whispers from people you don't follow", "SettingsSecurityPage"),
                        checked: this.state.enabled,
                        showPlaceholder: this.state.loading,
                        disabled: this.state.updating,
                        error: this.state.error,
                        onChange: this.onToggle
                    })
                }, t
            }(u.Component);

        function Yt() {
            return u.createElement(D.a, {
                label: Object(p.d)("Password", "ChangePasswordLink"),
                orientation: _.V.Horizontal
            }, u.createElement(_.O, null, Object(p.d)("<x:link>Change password.</x:link> Improve your security with a strong password.", {
                "x:link": function(e) {
                    return u.createElement("a", {
                        key: "change-password-link",
                        href: "https://passport.twitch.tv/passwords/new?"
                    }, e)
                }
            }, "ChangePasswordLink")))
        }
        var Qt = function(e) {
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
                                    return n.trys.push([1, 3, , 4]), [4, re.a.put(this.hidePastBroadcastsEndpoint + "?hide_archives=" + e)];
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
                                return t.trys.push([0, 2, , 3]), [4, re.a.get(this.hidePastBroadcastsEndpoint)];
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
                return this.state.show ? u.createElement(F, {
                    id: "settings-security-page-hide-past-broadcasts",
                    label: Object(p.d)("Hide Past Broadcasts", "HidePastBroadcastsSetting"),
                    description: Object(p.d)("Only allow your editors to view your past broadcasts", "HidePastBroadcastsSetting"),
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
        }(u.Component);
        var Kt, $t = Object(r.b)(function(e) {
                var t = Object(l.c)(e);
                return {
                    sessionUserID: t && t.id
                }
            })(Qt),
            Xt = n("NoSW"),
            Zt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return u.createElement(D.a, {
                        label: Object(p.d)("Two-Factor Authentication", "TwoFactorAuthenticationSetting"),
                        orientation: _.V.Horizontal,
                        error: this.props.status === Kt.Error,
                        errorMessage: Object(p.d)("Sorry, something went wrong. Please try again later.", "TwoFactorAuthenticationSetting")
                    }, this.renderBody())
                }, t.prototype.renderBody = function() {
                    switch (this.props.status) {
                        case Kt.Loading:
                            return this.renderLoading();
                        case Kt.Error:
                            return this.renderError();
                        case Kt.UnverifiedEmail:
                            return this.renderVerifyEmail();
                        case Kt.CanEnable:
                            return this.renderEnableButton();
                        case Kt.Enabled:
                            return this.renderDisableButton();
                        case Kt.EnabledAndRequired:
                            return this.renderEnabledAndRequired();
                        default:
                            return null
                    }
                }, t.prototype.renderLoading = function() {
                    return u.createElement(_._10, null)
                }, t.prototype.renderError = function() {
                    return null
                }, t.prototype.renderVerifyEmail = function() {
                    return u.createElement(_._4, null, u.createElement(_.O, {
                        "data-a-target": "tfa-verify-email"
                    }, Object(p.d)("Just verify your email address and two-factor authentication can be enabled.", "TwoFactorAuthenticationSetting")))
                }, t.prototype.renderEnableButton = function() {
                    return u.createElement(_._4, null, u.createElement(_.u, {
                        linkTo: "https://passport.twitch.tv/register_2fa/new",
                        "data-a-target": "tfa-enable-button"
                    }, Object(p.d)("Set Up Two-Factor Authentication", "TwoFactorAuthenticationSetting")), u.createElement(U, {
                        dataTarget: "tfa-pitch-message",
                        text: Object(p.d)("It's dangerous to go alone. <x:link>Two-factor authentication</x:link> adds an extra layer of security to your Twitch account by requiring both a password and your mobile phone to login.", {
                            "x:link": function(e) {
                                return u.createElement("a", {
                                    key: "learn-more-link",
                                    href: "https://www.authy.com/learn-more",
                                    target: "_blank",
                                    "data-a-target": "tfa-authy-link"
                                }, e)
                            }
                        }, "TwoFactorAuthenticationSetting")
                    }))
                }, t.prototype.renderDisableButton = function() {
                    return u.createElement(_._4, null, u.createElement(_.u, {
                        linkTo: "https://passport.twitch.tv/disable_2fa/new",
                        "data-a-target": "tfa-disable-button"
                    }, Object(p.d)("Disable two-factor authentication", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                }, t.prototype.renderEnabledAndRequired = function() {
                    return u.createElement(_._4, null, u.createElement(_.O, {
                        "data-a-target": "tfa-required-message"
                    }, Object(p.d)("You must have two-factor authentication enabled.", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                }, t.prototype.renderEnabledMessage = function() {
                    return u.createElement(U, {
                        dataTarget: "tfa-successful-message",
                        text: Object(p.d)("Woohoo! Two-factor authentication is enabled! To reset or change your phone, visit the Authy <x:link>phone reset form</x:link>.", {
                            "x:link": function(e) {
                                return u.createElement("a", {
                                    key: "phone-reset-link",
                                    href: "https://www.authy.com/phones/reset",
                                    "data-a-target": "tfa-authy-reset"
                                }, e)
                            }
                        }, "TwoFactorAuthenticationSetting")
                    })
                }, t
            }(u.Component),
            en = n("Q6se");
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.UnverifiedEmail = 2] = "UnverifiedEmail", e[e.CanEnable = 3] = "CanEnable", e[e.Enabled = 4] = "Enabled", e[e.EnabledAndRequired = 5] = "EnabledAndRequired"
        }(Kt || (Kt = {}));
        var tn, nn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        status: Kt.Loading,
                        restLoading: !0,
                        restError: !1
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTwoFactorEnabled()
                }, t.prototype.componentDidUpdate = function(e, t) {
                    t.status === Kt.Loading && this.state.status !== Kt.Loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.status !== Kt.Loading || e.data.loading || this.reconcileStatus(e)
                }, t.prototype.render = function() {
                    return u.createElement(Zt, {
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
                                    return i.trys.push([1, 3, , 4]), [4, re.a.get(e, {
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
                    e.data.loading || this.state.restLoading ? t = Kt.Loading : !e.data.currentUser || this.state.restError ? t = Kt.Error : this.state.twoFactorEnabled || e.data.currentUser.isEmailVerified ? !this.state.twoFactorEnabled && e.data.currentUser.isEmailVerified ? t = Kt.CanEnable : this.state.twoFactorEnabled && !this.userRoleRequiresTwoFactor(e) ? t = Kt.Enabled : this.state.twoFactorEnabled && this.userRoleRequiresTwoFactor(e) && (t = Kt.EnabledAndRequired) : t = Kt.UnverifiedEmail, t && this.setState({
                        status: t
                    })
                }, t.prototype.userRoleRequiresTwoFactor = function(e) {
                    var t = e.data.currentUser && e.data.currentUser.roles;
                    return !(!t || !(t.isGlobalMod || t.isSiteAdmin || t.isStaff))
                }, t
            }(u.Component),
            rn = Object(T.compose)(Object(Xt.a)("TwoFactorAuthenticationSetting"), Object(j.a)(en))(nn),
            an = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return p.a.buildType === v.a.Production ? null : u.createElement("div", null, u.createElement(O.a, {
                        title: Object(p.d)("Security", "SettingsSecurityPage"),
                        description: Object(p.d)("Keep your account safe and sound", "SettingsSecurityPage")
                    }), u.createElement(Yt, null), u.createElement(rn, null), u.createElement(O.a, {
                        title: Object(p.d)("Privacy", "SettingsSecurityPage")
                    }), u.createElement(Jt, null), u.createElement($t, null))
                }, t
            }(u.Component),
            on = Object(T.compose)(Object(g.d)("SettingsSecurityPage", {
                autoReportInteractive: !0,
                destination: y.a.SettingsSecurity
            }), Object(b.a)({
                location: S.PageviewLocation.SettingsPage
            }))(an),
            sn = n("CkX/");
        ! function(e) {
            e.Channel = "channel", e.Notifications = "notifications", e.Profile = "profile", e.Security = "security", e.Connections = "connections", e.Prime = "prime", e.Turbo = "turbo"
        }(tn || (tn = {}));
        var ln = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isPrimeVisible = function() {
                        return t.props.data.requestInfo && t.props.data.currentUser && (Object(bt.a)(t.props.data.requestInfo.countryCode) || t.props.data.currentUser.hasPrime)
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data.currentUser || !this.props.data.requestInfo) return null;
                    var e = null;
                    this.isPrimeVisible() && (e = u.createElement(_._28, {
                        linkTo: "/settings/prime",
                        active: this.props.tabName === tn.Prime,
                        "data-test-selector": "test-settings-prime-tab",
                        "data-a-target": "prime-tab"
                    }, Object(p.d)("Twitch Prime", "SettingsTabs")));
                    var t = null;
                    return !this.props.data.currentUser.hasTurbo && this.isPrimeVisible() || (t = u.createElement(_._28, {
                        linkTo: "/settings/turbo",
                        active: this.props.tabName === tn.Turbo,
                        "data-test-selector": "test-settings-turbo-tab",
                        "data-a-target": "turbo-tab"
                    }, Object(p.d)("Twitch Turbo", "SettingsTabs"))), u.createElement(_._4, {
                        className: "settings-tabs",
                        padding: {
                            x: mn,
                            top: mn
                        }
                    }, u.createElement(_._4, {
                        margin: {
                            bottom: 1
                        }
                    }, u.createElement(_.O, {
                        type: _._41.H2
                    }, Object(p.d)("Settings", "SettingsTabs"))), u.createElement(_._4, null, u.createElement(_._29, null, u.createElement(_._28, {
                        linkTo: "/settings/profile",
                        active: this.props.tabName === tn.Profile,
                        "data-a-target": "profile-tab"
                    }, Object(p.d)("Profile", "SettingsTabs")), e, t, u.createElement(_._28, {
                        linkTo: "/settings/channel",
                        active: this.props.tabName === tn.Channel,
                        "data-a-target": "channel-tab"
                    }, Object(p.d)("Channel and Videos", "SettingsTabs")), u.createElement(_._28, {
                        linkTo: "/settings/security",
                        active: this.props.tabName === tn.Security,
                        "data-a-target": "security-tab"
                    }, Object(p.d)("Security and Privacy", "SettingsTabs")), u.createElement(_._28, {
                        linkTo: "/settings/notifications",
                        active: this.props.tabName === tn.Notifications,
                        "data-a-target": "notifications-tab"
                    }, Object(p.d)("Notifications", "SettingsTab")), u.createElement(_._28, {
                        linkTo: "/settings/connections",
                        active: this.props.tabName === tn.Connections,
                        "data-a-target": "connections-tab"
                    }, Object(p.d)("Connections", "SettingsTabs")), u.createElement(_._28, {
                        linkTo: "/subscriptions",
                        active: !1,
                        "data-a-target": "subscriptions-tab"
                    }, Object(p.d)("Subscriptions", "SettingsTabs")))))
                }, t
            }(u.Component),
            cn = Object(T.compose)(Object(g.d)("SettingsTabs"), Object(j.a)(sn))(ln),
            un = function() {
                return u.createElement(_._4, {
                    fullWidth: !0,
                    display: _.P.Flex,
                    flexDirection: _.R.Column,
                    alignItems: _.c.Center
                }, u.createElement(_.O, {
                    fontSize: _.T.Size2
                }, Object(p.d)("You've gone Turbo!", "CancelTurboLink")), u.createElement(_.O, null, Object(p.d)("We hope you're enjoying your new chat shwag and watching ad-free.", "CancelTurboLink")), u.createElement(_.M, {
                    to: "/products/turbo/ticket/edit"
                }, Object(p.d)("Cancel Turbo", "CancelTurboLink")))
            },
            dn = n("hRPz"),
            pn = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return p.a.buildType === v.a.Production ? null : this.props.data.loading && !this.props.data.currentUser ? u.createElement(_._6, {
                        fillContent: !0
                    }) : this.props.data.loading || this.props.data.currentUser ? this.props.data.currentUser && !this.props.data.currentUser.hasTurbo ? this.props.data.currentUser.hasPrime || Object(bt.a)(this.props.data.requestInfo.countryCode) ? u.createElement(d.a, {
                        to: "/settings/prime"
                    }) : (window.location.replace("https://www.twitch.tv/products/turbo/ticket"), null) : u.createElement("div", null, u.createElement(k.a, null, u.createElement(Te.a, null, u.createElement(un, null)))) : u.createElement(St, null)
                }, t = c.__decorate([Object(g.d)("SettingsTurboPage", {
                    autoReportInteractive: !0,
                    destination: y.a.SettingsTurbo
                }), Object(b.a)({
                    location: S.PageviewLocation.SettingsPage
                }), Object(j.a)(dn)], t)
            }(u.Component),
            mn = 3,
            gn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.redirectToProfilePage = function() {
                        return u.createElement(d.a, {
                            to: "/settings/profile"
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return this.props.isLoggedIn ? u.createElement(_._4, {
                        padding: {
                            x: mn
                        },
                        fullHeight: !0,
                        fullWidth: !0,
                        display: _.P.Flex,
                        flexDirection: _.R.Column,
                        flexWrap: _.S.NoWrap
                    }, u.createElement(h.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), u.createElement(f.a, null, u.createElement(cn, {
                        tabName: this.props.match.params.tab
                    })), u.createElement(_._4, {
                        padding: {
                            y: 2
                        }
                    }, u.createElement(d.d, null, u.createElement(d.b, {
                        path: "/settings/profile",
                        component: Ht
                    }), u.createElement(d.b, {
                        path: "/settings/prime",
                        component: yt
                    }), u.createElement(d.b, {
                        path: "/settings/turbo",
                        component: pn
                    }), u.createElement(d.b, {
                        path: "/settings/channel",
                        component: xe
                    }), u.createElement(d.b, {
                        path: "/settings/security",
                        component: on
                    }), u.createElement(d.b, {
                        path: "/settings/notifications",
                        component: ft
                    }), u.createElement(d.b, {
                        path: "/settings/connections",
                        component: Qe
                    }), u.createElement(d.b, {
                        path: "/settings",
                        render: this.redirectToProfilePage
                    })))) : (this.props.login(), u.createElement(m.a, {
                        message: Object(p.d)("You must be logged in to view this page", "SettingsRoot")
                    }))
                }, t = c.__decorate([Object(g.d)("SettingsRoot", {
                    autoReportInteractive: !0
                })], t)
            }(u.Component),
            hn = Object(d.e)(gn);
        var fn = Object(r.b)(function(e) {
            return {
                isLoggedIn: Object(l.d)(e)
            }
        }, function(e) {
            return Object(a.b)({
                login: function() {
                    return Object(s.f)(o.a.SettingsPage)
                }
            }, e)
        })(hn);
        n.d(t, "SettingsRoot", function() {
            return fn
        })
    },
    LBNC: function(e, t, n) {
        "use strict";
        t.a = function() {
            return "serviceWorker" in window.navigator && "PushManager" in window
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
    OOv5: function(e, t, n) {
        "use strict";
        var i, r = n("TToO"),
            a = n("6sO2"),
            o = n("oIkB"),
            s = n("Aj/L");
        ! function(e) {
            e.NewSession = "new-session", e.ClearSession = "clear-session"
        }(i || (i = {}));
        var l = a.o.logger.withCategory("host-service-worker-messenger"),
            c = function() {
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
                        l.debug("cannot postMessage immediately. waiting for a service worker to take control");
                        var n = function() {
                            l.debug("controller changed", {
                                controllerExists: !!navigator.serviceWorker.controller
                            }), navigator.serviceWorker.removeEventListener("controllerchange", n), t.postMessage(e)
                        };
                        navigator.serviceWorker.addEventListener("controllerchange", n)
                    }
                }, e.postMessage = function(e) {
                    navigator.serviceWorker.controller ? (l.debug("postMessage", e), navigator.serviceWorker.controller.postMessage(JSON.stringify(e))) : l.error(new Error("navigator.serviceWorker.controller is null"), "postMessage called with no controlling service worker")
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
            return v
        });
        var b = a.o.logger.withCategory("browser-push-notifications-manager"),
            v = function() {
                function e() {}
                return e.initialize = function() {
                    return this.initPromise ? this.initPromise : (this.initPromise = this.initializationLogic(), this.initPromise)
                }, e.initializationLogic = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return Object(d.a)() ? (b.debug("permissions have been denied. nothing to do here."), [2]) : [4, g()];
                                case 1:
                                    return n.sent(), e = Object(s.d)(a.o.store.getState()), [4, this.hasPushSubscription()];
                                case 2:
                                    return t = n.sent(), c.syncSession(), t ? u.exists() && !u.isEnabled() || !e ? [4, this.unsubscribe()] : [3, 4] : [3, 5];
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
                        var e, t, n, i, l, c;
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
                                    if (!(l = n.toJSON()).endpoint) throw new Error("push subscription 'endpoint' missing");
                                    if (!l.keys) throw new Error("push subscription 'keys' missing");
                                    if (!l.keys.auth) throw new Error("push subscription 'keys.auth' missing");
                                    if (!l.keys.p256dh) throw new Error("push subscription 'keys.p256dh' missing");
                                    return c = Object(o.a)({
                                        endpoint: l.endpoint,
                                        auth: l.keys.auth,
                                        p256DH: l.keys.p256dh
                                    }), [4, a.o.apollo.client.mutate(r.__assign({
                                        mutation: f
                                    }, c))];
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
                return e.title && (t = i.createElement(r._4, {
                    padding: {
                        bottom: 1
                    }
                }, i.createElement(r.O, {
                    fontSize: r.T.Size6,
                    color: e.error ? r.J.Error : r.J.Base,
                    bold: !0
                }, e.title))), i.createElement(r._27, {
                    padding: 2,
                    borderTop: !0
                }, t, e.children, e.errorMessage && i.createElement(r.O, {
                    color: r.J.Error,
                    fontSize: r.T.Size7
                }, e.errorMessage))
            };
        n.d(t, "a", function() {
            return a
        })
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
    RC0U: function(e, t) {},
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
    UbVv: function(e, t, n) {
        "use strict";
        t.a = function() {
            return window.Notification && "denied" === window.Notification.permission
        }, t.b = function() {
            return window.Notification && "granted" === window.Notification.permission
        }
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
            return fetch(r.a.krakenEndpoint + "/users/" + e + "/default_images?client_id=" + r.a.authClientID + "&api_version=" + r.a.defaultAPIVersion, {
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
                            return [4, fetch(r.a.krakenEndpoint + "/users/" + e + "/upload_image?client_id=" + r.a.authClientID + "&api_version=" + r.a.defaultAPIVersion + "&image_type=" + n + "&format=" + a, {
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
    WKFf: function(e, t) {},
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
    XCQF: function(e, t) {},
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
            l = n("GiK3"),
            c = n("6sO2"),
            u = n("J8WN"),
            d = n("+8VM"),
            p = n("7vx8"),
            m = n("HZww"),
            g = n("4Q9N"),
            h = n("Tt3k"),
            f = n("W6ca"),
            b = n("xgnX"),
            v = n("CSlQ"),
            y = n("Odds"),
            S = (n("+Aaf"), n("0H+u")),
            _ = ["image/*"],
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imageUpdated: !1,
                        loading: !1
                    }, t.currentImage = null, t.logger = c.j.withCategory("UserImageUploader"), t.onImageInputChange = function(e) {
                        var n;
                        if (null !== e) {
                            t.setState({
                                loading: !0
                            }), n = e[0];
                            var i = Object(h.a)(n),
                                r = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(r, 10) > 10 ? t.setState({
                                statusMessage: b.b.BadSizeError
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
                                                    statusMessage: b.b.UnexpectedError
                                                }), [2];
                                            case 4:
                                                return this.unsubscribe = c.k.subscribe({
                                                    topic: Object(m.i)(this.props.userID),
                                                    success: function() {
                                                        try {
                                                            Object(f.c)(n, o.currentImage)
                                                        } catch (e) {
                                                            o.logger.error(e, "Image upload failed."), o.unsubscribe(), o.setState({
                                                                statusMessage: b.b.UnexpectedError,
                                                                loading: !1
                                                            })
                                                        }
                                                        o.timeoutHandle = setTimeout(function() {
                                                            return o.handlePubSubTimeout()
                                                        }, 1e4)
                                                    },
                                                    failure: function() {
                                                        o.setState({
                                                            statusMessage: b.b.UnexpectedError,
                                                            loading: !1
                                                        })
                                                    },
                                                    onMessage: function(e) {
                                                        if (e.upload_id === r) {
                                                            clearTimeout(o.timeoutHandle);
                                                            var t = null;
                                                            e.status === b.a.Success ? t = b.b.Success : e.status === b.a.BadSize ? (t = b.b.BadSizeError, o.currentImage = null) : e.status === b.a.NonImage ? (t = b.b.NonImageError, o.currentImage = null) : e.status === b.a.WrongFormat ? (t = b.b.WrongFormatError, o.currentImage = null) : (t = b.b.UnexpectedError, o.currentImage = null), o.unsubscribe && o.unsubscribe(), o.setState({
                                                                statusMessage: t,
                                                                loading: !1,
                                                                imageUpdated: e.status === b.a.Success
                                                            })
                                                        }
                                                    }
                                                }), [2]
                                        }
                                    })
                                })
                            })
                        } else t.setState({
                            statusMessage: b.b.ImageNotSelected
                        })
                    }, t.handlePubSubTimeout = function() {
                        t.unsubscribe(), t.setState({
                            statusMessage: b.b.TimeoutError
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
                    var t = Object(c.d)("Editing profile banner for {userName}", {
                        userName: e
                    }, "UserImageUploader");
                    this.props.imageType === g.a.ChannelOfflineImage && (t = Object(c.d)("Editing video banner for {userName}", {
                        userName: e
                    }, "UserImageUploader"));
                    var n = null;
                    if (this.state.loading) n = l.createElement(y._4, {
                        className: "user-image-uploader__upload-svg--anim-fill",
                        position: y._11.Relative,
                        "data-test-selector": "loading-status"
                    }, l.createElement(y._17, {
                        asset: y._18.Upload,
                        type: y._19.Brand,
                        width: 99,
                        height: 76
                    }));
                    else {
                        var i = Object(c.d)("Recommended image size: 1200x380 and less than 10MB.", "UserImageUploader");
                        this.props.imageType === g.a.ChannelOfflineImage && (i = Object(c.d)("Recommended image size: 1920x1080 and less than 10MB.", "UserImageUploader")), n = l.createElement(y._4, null, l.createElement(y._4, {
                            className: "user-image-uploader__upload-info"
                        }, l.createElement(y._4, null, l.createElement(y._17, {
                            asset: y._18.Plus,
                            type: y._19.Alt2,
                            height: 20,
                            width: 20
                        })), l.createElement(y.O, {
                            type: y._41.H3,
                            color: y.J.Alt2,
                            fontSize: y.T.Size4
                        }, Object(c.d)("Upload a Photo", "User Image Uploader"))), l.createElement(y._4, {
                            className: "user-image-uploader__upload-recommendation",
                            position: y._11.Absolute,
                            textAlign: y._37.Left,
                            attachLeft: !0,
                            attachBottom: !0,
                            margin: {
                                left: 3,
                                bottom: 1
                            }
                        }, l.createElement(y.O, {
                            type: y._41.H6,
                            color: y.J.Alt2,
                            fontSize: y.T.Size8,
                            align: y._51.TextBottom
                        }, i)))
                    }
                    var r = null;
                    this.props.showCloser && (r = l.createElement(d.a, null));
                    var a = null;
                    if (null !== this.state.statusMessage) {
                        var o = Object(b.c)(this.state.statusMessage);
                        a = l.createElement(y._8, {
                            label: o.message,
                            type: o.type
                        })
                    }
                    return l.createElement(y._4, {
                        className: "user-image-uploader",
                        position: y._11.Relative,
                        fullHeight: !0
                    }, l.createElement(y._27, {
                        className: "user-image-uploader__background-container",
                        background: y.m.Base,
                        fullWidth: !0
                    }, l.createElement(y._4, {
                        padding: 2,
                        display: y.P.InlineBlock,
                        position: y._11.Relative,
                        textAlign: y._37.Center,
                        fullWidth: !0
                    }, l.createElement(y._27, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(y.O, {
                        type: y._41.H3,
                        fontSize: y.T.Size4
                    }, t)), l.createElement(y._4, {
                        className: "user-image-uploader__upload-container",
                        display: y.P.InlineBlock,
                        position: y._11.Relative,
                        textAlign: y._37.Center,
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(y._4, {
                        className: "user-image-uploader__upload",
                        display: y.P.InlineBlock,
                        position: y._11.Relative,
                        textAlign: y._37.Center
                    }, l.createElement(u.a, {
                        allowedFileTypes: _,
                        onFilesSubmitted: this.onImageInputChange
                    }, n))), l.createElement(y._27, {
                        "data-test-selector": "status-message",
                        fontSize: y.T.Size4,
                        position: y._11.Relative,
                        textAlign: y._37.Center,
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
            }(l.Component),
            k = Object(v.d)("User Image Upload")(E);
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
        })(k);
        n.d(t, "a", function() {
            return O
        })
    },
    eppJ: function(e, t) {},
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
    iOZM: function(e, t) {},
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
    x9n8: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("2KeS"),
            a = n("V5M+"),
            o = n("Aj/L"),
            s = n("TToO"),
            l = n("HW6M"),
            c = n("GiK3"),
            u = n("6sO2"),
            d = n("J8WN"),
            p = n("+8VM"),
            m = n("7vx8"),
            g = n("puy8"),
            h = n("HZww"),
            f = n("Odds"),
            b = (n("weaG"), function(e) {
                var t = {
                    "default-avatar__selected": e.selected,
                    "default-avatar": !0
                };
                return c.createElement(f._4, {
                    padding: {
                        bottom: 1
                    }
                }, c.createElement("div", {
                    onClick: function() {
                        e.onSelect(e.index)
                    },
                    "aria-label": Object(u.d)("Click to select Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar")
                }, c.createElement(f._27, {
                    fullHeight: !0,
                    fullWidth: !0,
                    position: f._11.Relative,
                    className: l(t)
                }, c.createElement("img", {
                    alt: Object(u.d)("Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar"),
                    src: e.imageSrc
                }))))
            }),
            v = n("4Q9N"),
            y = n("Tt3k"),
            S = n("W6ca"),
            _ = n("xgnX"),
            E = n("CSlQ"),
            k = (n("AL3x"), n("nmDn")),
            O = ["image/*"],
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
                                statusMessage: _.b.BadSizeError
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
                            statusMessage: _.b.ImageNotSelected
                        })
                    }, t.onUpdateButtonClick = function(e) {
                        return s.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, r, a = this;
                            return s.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (e.preventDefault(), void 0 !== this.state.selectedImageIndex) return this.setDefaultAvatar(), [2];
                                        if (!this.currentImage) return this.setState({
                                            statusMessage: _.b.ImageNotSelected
                                        }), [2];
                                        this.setState({
                                            statusMessage: _.b.Uploading
                                        }), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, Object(S.a)(this.props.userID, this.props.authToken, v.a.ProfileImage, this.state.imageFormat)];
                                    case 2:
                                        return t = o.sent(), n = t.upload_url, i = t.upload_id, [3, 4];
                                    case 3:
                                        return r = o.sent(), this.logger.error(r, "Request for upload ID failed to get expected response from server."), this.setState({
                                            statusMessage: _.b.UnexpectedError
                                        }), [2];
                                    case 4:
                                        return this.unsubscribe = u.k.subscribe({
                                            topic: Object(h.i)(this.props.userID),
                                            success: function() {
                                                try {
                                                    Object(S.c)(n, a.currentImage)
                                                } catch (e) {
                                                    a.logger.error(e, "Profile Image upload failed."), a.unsubscribe(), a.setState({
                                                        statusMessage: _.b.UnexpectedError,
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
                                                    statusMessage: _.b.UnexpectedError,
                                                    selectedImageIndex: void 0,
                                                    imagePreviewURL: "",
                                                    currentImageHasTallAspectRatio: !1
                                                })
                                            },
                                            onMessage: function(e) {
                                                if (e.upload_id === i) {
                                                    clearTimeout(a.timeoutHandle);
                                                    var t = null;
                                                    t = e.status === _.a.Success ? _.b.Success : e.status === _.a.BadSize ? _.b.BadSizeError : e.status === _.a.NonImage ? _.b.NonImageError : e.status === _.a.WrongFormat ? _.b.WrongFormatError : _.b.UnexpectedError, a.unsubscribe && a.unsubscribe(), a.setState({
                                                        statusMessage: t
                                                    }), a.state.statusMessage === _.b.Success ? a.setState({
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
                            statusMessage: _.b.TimeoutError
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
                            return c.createElement(b, {
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
                        n = c.createElement(f._4, {
                            className: l(i),
                            "data-test-selector": "preview-image",
                            position: f._11.Relative
                        }, c.createElement("img", {
                            src: "" + this.state.imagePreviewURL
                        }))
                    }
                    var r = null;
                    "" === this.state.imagePreviewURL && (r = c.createElement(f._4, {
                        className: "profile-edit__upload-info"
                    }, c.createElement(f._4, null, c.createElement(f._17, {
                        asset: f._18.Plus,
                        type: f._19.Alt2,
                        height: 20,
                        width: 20
                    })), c.createElement(f.O, {
                        type: f._41.H3,
                        color: f.J.Alt2,
                        fontSize: f.T.Size4
                    }, Object(u.d)("Upload a Photo", "Profile Edit"))));
                    var a = null;
                    this.props.showCloser && (a = c.createElement(p.a, null));
                    var o = null;
                    if (null !== this.state.statusMessage) {
                        var s = Object(_.c)(this.state.statusMessage),
                            m = s.message,
                            h = s.type;
                        o = c.createElement(f._8, {
                            label: m,
                            type: h
                        })
                    }
                    var v = this.props.login;
                    return this.props.displayName && (v = this.props.displayName), c.createElement(f._4, {
                        className: "profile-edit",
                        position: f._11.Relative,
                        fullHeight: !0
                    }, c.createElement(f._27, {
                        className: "profile-edit__background-container",
                        background: f.m.Base,
                        fullWidth: !0
                    }, c.createElement(f._4, {
                        padding: 2,
                        display: f.P.InlineBlock,
                        position: f._11.Relative,
                        textAlign: f._37.Center,
                        fullWidth: !0
                    }, c.createElement(f._27, {
                        textAlign: f._37.Left,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        }
                    }, c.createElement(f.O, {
                        type: f._41.H3,
                        color: f.J.Alt2,
                        fontSize: f.T.Size4
                    }, Object(u.d)("Edit Profile Picture for {userName}", {
                        userName: v
                    }, "Profile Edit"), " ")), c.createElement(f._4, {
                        className: "profile-edit__upload-container",
                        display: f.P.InlineBlock,
                        position: f._11.Relative,
                        textAlign: f._37.Center,
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(f._4, {
                        className: "profile-edit__upload",
                        display: f.P.InlineBlock,
                        position: f._11.Relative,
                        textAlign: f._37.Center
                    }, c.createElement(d.a, {
                        allowedFileTypes: O,
                        onFilesSubmitted: this.onImageInputChange
                    }, r), n)), c.createElement(f._27, {
                        "data-test-selector": "status-message",
                        fontSize: f.T.Size4,
                        position: f._11.Relative,
                        textAlign: f._37.Center,
                        className: "profile-edit__status-message"
                    }, o), c.createElement(f._27, {
                        borderBottom: !0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 2
                        }
                    }, c.createElement(f._4, {
                        textAlign: f._37.Left,
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(f.O, {
                        type: f._41.H3,
                        color: f.J.Alt2,
                        fontSize: f.T.Size5
                    }, Object(u.d)("Or select one of these", "Profile Edit"))), c.createElement(f._47, {
                        childWidth: f._48.ExtraSmall,
                        gutterSize: f._49.ExtraSmall,
                        placeholderItems: 3
                    }, t)), c.createElement(f._4, {
                        display: f.P.Flex,
                        justifyContent: f._3.Center
                    }, c.createElement(f.u, {
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
                                        statusMessage: _.b.Uploading
                                    }), e = _.b.UnexpectedError, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, Object(S.b)(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
                                case 2:
                                    return 204 === (t = i.sent()).status || 200 === t.status ? e = _.b.Success : this.logger.error(new Error("Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), "Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), [3, 4];
                                case 3:
                                    return n = i.sent(), this.logger.error(n, "Default Avatar PUT failed."), [3, 4];
                                case 4:
                                    return this.setState({
                                        statusMessage: e,
                                        profileUpdated: e === _.b.Success
                                    }), [2]
                            }
                        })
                    })
                }, t = s.__decorate([Object(m.a)(k, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(c.Component),
            C = Object(E.d)("Profile Edit")(w);
        var N = Object(i.b)(function(e) {
            return {
                authToken: Object(o.a)(e)
            }
        }, function(e, t) {
            return Object(r.b)({
                closeModal: function() {
                    return t.successCallback && t.successCallback(), Object(a.c)()
                }
            }, e)
        })(C);
        n.d(t, "a", function() {
            return N
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
                        type: o._9.Success
                    };
                case r.UnexpectedError:
                    return {
                        message: Object(a.d)("Unexpected error, please try again.", "Profile Edit"),
                        type: o._9.Alert
                    };
                case r.BadSizeError:
                    return {
                        message: Object(a.d)("Image might exceed 10MB.", "Profile Edit"),
                        type: o._9.Alert
                    };
                case r.NonImageError:
                    return {
                        message: Object(a.d)("You must upload an image.", "Profile Edit"),
                        type: o._9.Alert
                    };
                case r.WrongFormatError:
                    return {
                        message: Object(a.d)("You must select a valid image type.", "Profile Edit"),
                        type: o._9.Alert
                    };
                case r.TimeoutError:
                    return {
                        message: Object(a.d)("Upload timed-out. Please try again.", "Profile Edit"),
                        type: o._9.Alert
                    };
                case r.Uploading:
                    return {
                        message: Object(a.d)("Uploading....", "Profile Edit"),
                        type: o._9.Brand
                    };
                case r.ImageNotSelected:
                    return {
                        message: Object(a.d)("Select a image first.", "Profile Edit"),
                        type: o._9.Alert
                    };
                default:
                    return {
                        message: Object(a.d)("Please try again.", "Profile Edit"),
                        type: o._9.Alert
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
    zpQV: function(e, t) {}
});
//# sourceMappingURL=pages.settings-eeeeb89be3e6f66db143f7ab92b2637a.js.map