webpackJsonp([51], {
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
            d = n("GiK3"),
            u = n("CIox"),
            p = n("6sO2"),
            m = n("yWCw"),
            g = n("CSlQ"),
            h = n("eXld"),
            f = n("2aoH"),
            b = n("j7/Y"),
            v = n("Ejve"),
            S = n("w9tK"),
            y = n("vH/s"),
            k = n("Odds");
        ! function(e) {
            e[e.NoChanges = 0] = "NoChanges", e[e.DirtyChanges = 1] = "DirtyChanges", e[e.Working = 2] = "Working", e[e.Success = 3] = "Success", e[e.Error = 4] = "Error"
        }(i || (i = {}));
        var _ = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = k.z.Default,
                        t = Object(p.d)("Save Changes", "SaveSettingsFooter"),
                        n = k.A.Default,
                        r = !1;
                    this.props.status === i.Working ? e = k.z.Loading : this.props.status === i.Success ? e = k.z.Success : this.props.status === i.Error ? (n = k.A.Alert, t = Object(p.d)("Failed to save settings. Try again.", "SaveSettingsFooter")) : this.props.status === i.NoChanges && (r = !0);
                    var a = null;
                    return this.props.onClickCancel && (a = d.createElement(k._4, {
                        padding: {
                            left: 1
                        },
                        display: k.P.Inline
                    }, d.createElement(k.u, {
                        disabled: this.props.status !== i.DirtyChanges && this.props.status !== i.Error,
                        size: k.y.Large,
                        type: k.A.Text,
                        "data-test-selector": "cancel-button-selector",
                        onClick: this.props.onClickCancel
                    }, Object(p.d)("Cancel", "SaveSettingsFooter")))), d.createElement(k._4, null, d.createElement(k.u, {
                        disabled: r,
                        size: k.y.Large,
                        state: e,
                        type: n,
                        onClick: this.props.onClickSave,
                        "data-a-target": "save-user-settings-button",
                        "data-test-selector": "save-button-selector"
                    }, t), a)
                }, t
            }(d.Component),
            E = n("GH+X"),
            O = n("AQc/"),
            N = n("F8kA"),
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderDashboardLink = function(e) {
                        return t.props.user ? d.createElement(N.a, {
                            key: "link",
                            to: "/" + t.props.user.login + "/dashboard/settings/autohost"
                        }, e) : d.createElement("span", {
                            key: "autohost-no-link"
                        }, "text")
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Object(p.d)("Auto Host settings have moved. You can find them in <x:link>your dashboard</x:link>.", {
                        "x:link": this.renderDashboardLink
                    }, "SettingsChannelPage");
                    return d.createElement(O.a, {
                        title: Object(p.d)("Auto Hosting", "AutohostSettingsComponent"),
                        description: e
                    })
                }, t
            }(d.Component);
        var C = Object(r.b)(function(e) {
                return {
                    user: Object(l.c)(e)
                }
            })(w),
            P = n("3zLD"),
            j = n("7vx8"),
            T = n("oIkB"),
            x = n("bX1P");

        function U() {
            return function(e) {
                var t = function(t) {
                    function n() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.logger = p.o.logger.withCategory("with-chat-settings-update"), e.updateChatSettings = function(t) {
                            var n = e.props.channelID;
                            return 0 === n.length ? Promise.reject("No channelID - unable to update chat settings.") : (e.logger.debug("Updating chat settings", {
                                data: t,
                                channelID: n
                            }), e.props.updateChatSettings(Object(T.a)(c.__assign({}, t, {
                                channelID: n
                            }))))
                        }, e
                    }
                    return c.__extends(n, t), n.prototype.render = function() {
                        var t = {
                            updateChatSettings: this.updateChatSettings
                        };
                        return d.createElement(e, c.__assign({}, this.props, t))
                    }, n.displayName = "WithChatSettingsUpdate(" + (e.displayName || e.name || "Component") + ")", n
                }(d.Component);
                return Object(a.d)(Object(r.b)(function(e) {
                    return {
                        channelID: e.session.user && e.session.user.id || ""
                    }
                }), Object(j.a)(x, {
                    name: "updateChatSettings"
                }))(t)
            }
        }
        var I = function(e) {
                return d.createElement(k._4, {
                    margin: {
                        top: 1
                    }
                }, d.createElement(k.O, {
                    color: k.J.Alt,
                    "data-a-target": e.dataTarget
                }, e.text))
            },
            D = n("Jo6h"),
            F = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderBody = function() {
                        return t.props.showPlaceholder ? d.createElement(k._10, null) : d.createElement(k._4, null, d.createElement(k._43, {
                            checked: t.props.checked,
                            error: t.props.error,
                            disabled: t.props.disabled,
                            onChange: t.onChange,
                            id: t.props.id
                        }), d.createElement(I, {
                            text: t.props.description
                        }))
                    }, t.onChange = function(e) {
                        t.props.onChange && t.props.onChange(e.currentTarget.checked)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return d.createElement(D.a, {
                        id: this.props.id,
                        label: this.props.label,
                        error: this.props.error,
                        errorMessage: this.props.errorMessage,
                        orientation: k.V.Horizontal
                    }, this.renderBody())
                }, t
            }(d.Component),
            A = function(e) {
                var t = e.saving || e.errorLoading;
                return d.createElement(F, {
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
            M = n("ar1V"),
            R = function(e) {
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
                    return d.createElement(A, {
                        loading: this.props.data.loading,
                        saving: this.state.saving,
                        checked: this.state.checked,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onChange
                    })
                }, t
            }(d.Component),
            L = Object(P.compose)(Object(g.d)("BlockHyperlinksToggle"), Object(j.a)(M, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), U())(R),
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
                    return d.createElement(D.a, {
                        orientation: k.V.Horizontal,
                        label: Object(p.d)("Non-Mod Chat Delay", "ChatDelayRadioButtons"),
                        error: this.props.errorLoading || this.props.errorSaving
                    }, d.createElement(k._4, {
                        display: k.P.Flex,
                        flexDirection: k.R.Row
                    }, n.map(function(n) {
                        var i = "chat-delay:" + n.label;
                        return d.createElement(k._4, {
                            key: i,
                            margin: {
                                right: 2
                            },
                            display: k.P.Flex,
                            flexDirection: k.R.Row
                        }, d.createElement(k._16, {
                            checked: n.selected,
                            value: n.delay.toString(),
                            label: n.label,
                            name: "Non-Mod Chat Delay: " + n.delay / 1e3 + "s",
                            onChange: e.onChange,
                            disabled: t,
                            "data-test-selector": "chat-delay-radio:" + n.delay
                        }))
                    })), d.createElement(I, {
                        text: Object(p.d)("Adds a short delay before non-mods see messages. Any message that is timed out or banned during the delay is removed from chat completely.", "ChatDelayRadioButtons")
                    }))
                }, t
            }(d.Component),
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
                    return d.createElement(B, {
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
            }(d.Component),
            q = Object(P.compose)(Object(g.d)("ChatDelayRadioButtons"), Object(j.a)(V, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), U())(z),
            W = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = null,
                        t = this.props.loading || this.props.saving || this.props.errorLoading;
                    return (this.props.dirty || this.props.saving) && (e = d.createElement(k._4, {
                        margin: {
                            top: 1
                        }
                    }, d.createElement(k.u, {
                        onClick: this.props.onClickSave,
                        state: this.props.saving ? k.z.Loading : k.z.Default
                    }, Object(p.d)("Save Changes", "ChatRulesTextArea")))), d.createElement(D.a, {
                        orientation: k.V.Horizontal,
                        label: Object(p.d)("Chat Rules", "ChatRulesTextArea"),
                        error: this.props.errorLoading || this.props.errorSaving
                    }, d.createElement(k._38, {
                        disabled: t,
                        value: this.props.rules,
                        onChange: this.props.onChange,
                        rows: 5
                    }), d.createElement(I, {
                        text: Object(p.d)("Require first-time viewers to agree to your rules before chatting. One rule per line.", "ChatRulesTextArea")
                    }), e)
                }, t
            }(d.Component),
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
                    return d.createElement(W, {
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
            }(d.Component),
            J = Object(P.compose)(Object(g.d)("ChatRulesTextArea"), Object(j.a)(H, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), U())(G),
            Q = function(e) {
                var t = e.saving || e.errorLoading;
                return d.createElement(F, {
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
            Y = n("woYr"),
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
                    return d.createElement(Q, {
                        loading: this.props.data.loading,
                        saving: this.state.saving,
                        checked: this.state.checked,
                        onChange: this.onChange,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving
                    })
                }, t
            }(d.Component),
            $ = Object(P.compose)(Object(g.d)("EmailVerificationToggle"), Object(j.a)(Y, {
                options: {
                    fetchPolicy: "network-only"
                }
            }), U())(K),
            X = function(e) {
                var t = e.saving || e.errorLoading;
                return d.createElement(F, {
                    id: "settings-channel-page-mature-content",
                    label: Object(p.d)("Mature Content", "MatureContentToggle"),
                    description: Object(p.d)("Enable this setting if your stream contains content that may be inappropriate for younger audiences. You may never broadcast sexual activity, nudity, threats or extreme violence. Doing so will result in immediate, irrevocable termination of your account. Please make sure your content will comply with the <x:link>Terms of Service</x:link> before broadcasting", {
                        "x:link": function(e) {
                            return d.createElement("a", {
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
                                        return i.trys.push([1, 3, , 4]), [4, this.props.updateBroadcastSettings(Object(T.a)({
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
                    return d.createElement(X, {
                        checked: this.state.checked,
                        saving: this.state.saving,
                        loading: this.props.data.loading,
                        errorLoading: n,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onCheckBoxChange
                    })
                }, t
            }(d.Component),
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
            le = (n("zpQV"), function(e) {
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
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = Object(p.d)("Remove", "TeamMembershipsItem"),
                        t = null;
                    return this.props.showPrimaryInput && (t = d.createElement(k._4, {
                        padding: {
                            right: 2
                        }
                    }, d.createElement(k._16, {
                        "data-test-selector": "TEAM_MEMBERSHIPS_ITEM_PRIMARY_INPUT",
                        name: "team-memberships-main-radio",
                        onChange: this.onChangePrimary,
                        label: Object(p.d)("Main", "TeamMembershipsItem"),
                        disabled: this.props.updating,
                        checked: this.props.membership.primary
                    }))), d.createElement(k._4, c.__assign({
                        padding: {
                            y: 1,
                            x: 1
                        }
                    }, Object(se.a)(this.props), {
                        className: "team-memberships-item"
                    }), d.createElement(k.B, {
                        row: !0
                    }, d.createElement(k._4, {
                        className: "team-memberships-item__avatar",
                        flexShrink: 0
                    }, d.createElement(k.j, {
                        ratio: k.k.Aspect1x1
                    }, d.createElement(g.b, {
                        src: this.props.membership.team.logo || oe.a,
                        alt: Object(p.d)("{displayName} Team Logo", {
                            displayName: this.props.membership.team.displayName
                        }, "TeamMembershipsItem")
                    }))), d.createElement(k._4, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1,
                        position: k._11.Relative,
                        ellipsis: !0
                    }, d.createElement(k.O, {
                        type: k._41.Span,
                        ellipsis: !0
                    }, this.props.membership.team.name)), d.createElement(k._4, {
                        padding: {
                            right: 2
                        }
                    }, d.createElement(k.I, {
                        "data-test-selector": "TEAM_MEMBERSHIPS_ITEM_STATS_INPUT",
                        onChange: this.onChangeStats,
                        label: Object(p.d)("Stats", "TeamMembershipsItem"),
                        disabled: this.props.updating,
                        checked: this.props.membership.statsRevealed
                    })), d.createElement(k._4, {
                        padding: {
                            right: 2
                        }
                    }, d.createElement(k.I, {
                        "data-test-selector": "TEAM_MEMBERSHIPS_ITEM_REVENUE_INPUT",
                        onChange: this.onChangeRevenue,
                        label: Object(p.d)("Revenue", "TeamMembershipsItem"),
                        disabled: this.props.updating,
                        checked: this.props.membership.revenueRevealed
                    })), t, d.createElement(k._44, {
                        label: e
                    }, d.createElement(k.v, {
                        "data-test-selector": "TEAM_MEMBERSHIPS_ITEM_REMOVE_BUTTON",
                        ariaLabel: e,
                        icon: k._18.Trash,
                        onClick: this.onClickRemove,
                        disabled: this.props.updating
                    }))))
                }, t = c.__decorate([Object(g.d)("TeamMembershipItem")], t)
            }(d.Component)),
            ce = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return d.createElement(D.a, {
                        label: Object(p.d)("My Teams", "TeamMemberships"),
                        error: !!this.props.formErrorMessage,
                        errorMessage: this.props.formErrorMessage
                    }, d.createElement(I, {
                        text: Object(p.d)("Manage your teams here", "TeamMemberships")
                    }), this.props.memberships.map(function(t, n) {
                        return d.createElement(le, {
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
            }(d.Component),
            de = Object(g.d)("TeamMemberships")(ce),
            ue = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        formErrorMsg: "",
                        memberships: [],
                        updating: !1
                    }, t.logger = p.o.logger.withCategory("team-memberships"), t.deleteMembership = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, r, a, o, s;
                            return c.__generator(this, function(l) {
                                switch (l.label) {
                                    case 0:
                                        if (!this.props.user || 0 === this.state.memberships.length) return [2];
                                        this.setState({
                                            updating: !0
                                        }), r = this.state.memberships[e], a = "/v5/channels/" + this.props.user.id + "/teams/" + r.team.name + "/membership", l.label = 1;
                                    case 1:
                                        return l.trys.push([1, 3, , 4]), [4, re.a.delete(a)];
                                    case 2:
                                        return i = l.sent(), [3, 4];
                                    case 3:
                                        return o = l.sent(), t = o, [3, 4];
                                    case 4:
                                        return i && i.error && (t = new Error("Team Memberships error"), n = i.error), t ? (s = Object(p.d)("Unable to remove team membership", "TeamMemberships"), this.logger.error(t, s, n), this.setState({
                                            formErrorMsg: s,
                                            updating: !1
                                        }), [2]) : (this.setState(function(t) {
                                            var n = t.memberships;
                                            return n.splice(e, 1), {
                                                memberships: n,
                                                updating: !1
                                            }
                                        }), [2])
                                }
                            })
                        })
                    }, t.onChangePrimary = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, r, a = this;
                            return c.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (this.state.memberships[e].primary) return [2];
                                        this.setState({
                                            updating: !0
                                        }), o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, this.putChannelsMembership(c.__assign({}, this.state.memberships[e], {
                                            primary: !0
                                        }))];
                                    case 2:
                                        return n = o.sent(), [3, 4];
                                    case 3:
                                        return i = o.sent(), t = i, [3, 4];
                                    case 4:
                                        return n && n.error && (t = new Error("Team Memberships error"), n.error), t ? (r = Object(p.d)("Unable to update main team", "TeamMemberships"), this.logger.error(t, r), this.setState({
                                            formErrorMsg: r,
                                            updating: !1
                                        }), [2]) : (this.setState(function(t) {
                                            var n = a.state.memberships.findIndex(function(e) {
                                                    return e.primary
                                                }),
                                                i = ie(t.memberships, function(t) {
                                                    return t[e]
                                                }, function(e) {
                                                    return e.primary = !0, e
                                                });
                                            return n >= 0 && (i[n].primary = !1), {
                                                memberships: i,
                                                updating: !1
                                            }
                                        }), [2])
                                }
                            })
                        })
                    }, t.onChangeRevenue = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, r;
                            return c.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        this.setState({
                                            updating: !0
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.putChannelsMembership(c.__assign({}, this.state.memberships[e], {
                                            revenueRevealed: !this.state.memberships[e].revenueRevealed
                                        }))];
                                    case 2:
                                        return n = a.sent(), [3, 4];
                                    case 3:
                                        return i = a.sent(), t = i, [3, 4];
                                    case 4:
                                        return n && n.error && (t = new Error("Team Memberships error"), n.error), t ? (r = Object(p.d)("Unable to update revenue preferences", "TeamMemberships"), this.logger.error(t, r), this.setState({
                                            formErrorMsg: r,
                                            updating: !1
                                        }), [2]) : (this.setState(function(t) {
                                            return {
                                                memberships: ie(t.memberships, function(t) {
                                                    return t[e]
                                                }, function(e) {
                                                    return e.revenueRevealed = !e.revenueRevealed, e
                                                }),
                                                updating: !1
                                            }
                                        }), [2])
                                }
                            })
                        })
                    }, t.onChangeStats = function(e) {
                        return c.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, r;
                            return c.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        this.setState({
                                            updating: !0
                                        }), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, this.putChannelsMembership(c.__assign({}, this.state.memberships[e], {
                                            statsRevealed: !this.state.memberships[e].statsRevealed
                                        }))];
                                    case 2:
                                        return n = a.sent(), [3, 4];
                                    case 3:
                                        return i = a.sent(), t = i, [3, 4];
                                    case 4:
                                        return n && n.error && (t = new Error("Team Memberships error"), n.error), t ? (r = Object(p.d)("Unable to update stats preferences", "TeamMemberships"), this.logger.error(t, r), this.setState({
                                            formErrorMsg: r,
                                            updating: !1
                                        }), [2]) : (this.setState(function(t) {
                                            return {
                                                memberships: ie(t.memberships, function(t) {
                                                    return t[e]
                                                }, function(e) {
                                                    return e.statsRevealed = !e.statsRevealed, e
                                                }),
                                                updating: !1
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
                            var e, t, n, i, r;
                            return c.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (!this.props.user) return [2];
                                        n = "/v5/channels/" + this.props.user.id + "/memberships", a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, re.a.get(n)];
                                    case 2:
                                        return t = a.sent(), this.setState({
                                            memberships: this.deserializeMemberships(t),
                                            updating: !1
                                        }), [3, 4];
                                    case 3:
                                        return i = a.sent(), e = i, [3, 4];
                                    case 4:
                                        return t && t.error && (e = new Error("Team Memberships error"), t.error), e ? (r = Object(p.d)("Failed to load Team data.  Please refresh the page and try again.", "TeamMemberships"), this.logger.error(e, "Failed to load Team data"), this.setState({
                                            formErrorMsg: r
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
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.fetchTeamsMembership()
                }, t.prototype.render = function() {
                    return this.state.memberships.length < 1 ? null : d.createElement(de, {
                        memberships: this.state.memberships,
                        formErrorMessage: this.state.formErrorMsg,
                        onClickRemove: this.deleteMembership,
                        onChangeStats: this.onChangeStats,
                        onChangeRevenue: this.onChangeRevenue,
                        onChangePrimary: this.onChangePrimary,
                        updating: this.state.updating
                    })
                }, t
            }(d.Component);
        var pe = Object(r.b)(function(e) {
                return {
                    user: Object(l.c)(e)
                }
            })(ue),
            me = n("V5M+"),
            ge = n("ebTC"),
            he = n("4Q9N"),
            fe = n("J4ib"),
            be = n("OjIq"),
            ve = n("vm+z"),
            Se = function(e) {
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
                        e = d.createElement("img", {
                            "data-test-selector": "test-channel-offline-image-selector",
                            height: "90",
                            width: "160",
                            src: this.props.data.user.offlineImageURL
                        });
                        var n = Object(fe.d)("Remove my Video Player Banner Image", "UploadVideoPlayerBanner");
                        t = d.createElement(k.v, {
                            icon: k._18.Trash,
                            ariaLabel: n
                        })
                    }
                    return d.createElement(k._4, null, d.createElement(O.a, {
                        title: Object(fe.d)("Video Player Banner", "UploadVideoPlayerBanner"),
                        description: Object(fe.d)("This is displayed on the player when your channel is offline.", "UploadVideoPlayerBanner")
                    }), d.createElement(E.a, null, d.createElement(be.a, null, d.createElement(k._4, {
                        display: k.P.Flex
                    }, e, d.createElement(k._4, {
                        padding: {
                            left: 1,
                            top: 1
                        }
                    }, d.createElement(k._4, {
                        display: k.P.Flex
                    }, d.createElement(k.u, {
                        "data-test-selector": "test-upload-video-player-banner-selector",
                        onClick: this.showModal
                    }, "Update"), t), d.createElement(I, {
                        text: Object(fe.d)("Max 10mb GIF, JPG, or PNG", "UploadVideoPlayerBanner")
                    }))))))
                }, t = c.__decorate([Object(j.a)(ve, {
                    options: function(e) {
                        return {
                            skip: !e.user,
                            variables: {
                                login: e.user && e.user.login
                            }
                        }
                    }
                })], t)
            }(d.Component);
        var ye = Object(r.b)(function(e) {
                return {
                    user: Object(l.c)(e)
                }
            }, function(e) {
                return Object(a.b)({
                    showUploaderModal: function(e) {
                        return Object(me.d)(ge.a, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            imageType: he.a.ChannelOfflineImage,
                            showCloser: !0
                        })
                    }
                }, e)
            })(Se),
            ke = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: i.NoChanges
                    }, t.renderContentSettingsSection = function() {
                        return d.createElement(k._4, null, d.createElement(O.a, {
                            title: Object(p.d)("Content Settings", "SettingsChannelPage"),
                            description: Object(p.d)("Choose how your channel will display for certain users", "SettingsChannelPage")
                        }), d.createElement(E.a, null, d.createElement(ne, null)))
                    }, t.renderChatSettingsSection = function() {
                        return d.createElement(k._4, null, d.createElement(O.a, {
                            title: Object(p.d)("Chat Options", "SettingsChannelPage"),
                            description: Object(p.d)("Moderate your channel's chat and who you allow in it", "SettingsChannelPage")
                        }), d.createElement(E.a, null, d.createElement(L, null), d.createElement($, null), d.createElement(J, null), d.createElement(q, null)))
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: i.Working
                        }, function() {})
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return p.a.buildType === v.a.Production ? null : d.createElement("div", null, d.createElement(ye, null), this.renderContentSettingsSection(), d.createElement(pe, null), this.renderChatSettingsSection(), d.createElement(C, null), d.createElement(_, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    }))
                }, t = c.__decorate([Object(g.d)("SettingsChannelPage", {
                    autoReportInteractive: !0,
                    destination: S.a.SettingsChannel
                }), Object(b.a)({
                    location: y.PageviewLocation.SettingsPage
                })], t)
            }(d.Component),
            _e = (n("XCQF"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClickDisconnect = function() {
                        t.props.onClickDisconnect(t.props.id)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return d.createElement(k._4, {
                        className: "extension-connection",
                        display: k.P.Flex,
                        margin: {
                            bottom: 4
                        }
                    }, d.createElement(g.b, {
                        className: "extension-connection__icon",
                        src: this.iconOrFallback
                    }), d.createElement(k._4, {
                        margin: {
                            left: 3
                        },
                        fullWidth: !0
                    }, d.createElement(k._4, {
                        display: k.P.Flex,
                        margin: {
                            bottom: 2
                        }
                    }, d.createElement(k._4, {
                        flexGrow: 1
                    }, d.createElement(k.O, {
                        fontSize: k.T.Size4
                    }, this.renderNameLink()), d.createElement(k._4, {
                        margin: {
                            top: 1
                        }
                    }, d.createElement(k.O, null, this.props.author.length > 0 ? Object(p.d)("by {author}", {
                        author: this.props.author
                    }, "ExtensionConnection") : " "))), d.createElement(k._4, {
                        display: k.P.Flex,
                        alignItems: k.c.Center
                    }, this.renderDisconnectButton())), d.createElement(k.O, {
                        color: k.J.Alt2
                    }, this.summaryOrFallbackMessage)))
                }, t.prototype.renderDisconnectButton = function() {
                    var e = this.props.disconnectError ? k.A.Alert : k.A.Hollow,
                        t = this.props.disconnectError ? Object(p.d)("Try Again", "ExtensionConnection") : Object(p.d)("Disconnect", "ExtensionConnection");
                    return d.createElement(k.u, {
                        type: e,
                        onClick: this.onClickDisconnect
                    }, t)
                }, t.prototype.renderNameLink = function() {
                    return 0 === this.props.name.length ? this.props.id : d.createElement(k.M, {
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
            }(d.Component)),
            Ee = Object(g.d)("ExtensionConnection")(_e),
            Oe = function(e) {
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
                    if (this.state.fetchError) return d.createElement(k._4, {
                        padding: {
                            bottom: 2
                        }
                    }, d.createElement(k.O, {
                        color: k.J.Error,
                        fontSize: k.T.Size5
                    }, Object(p.d)("Sorry, something went wrong fetching your extension connections. Please try again later.", "ExtensionConnectionList")));
                    for (var e = [], t = 0, n = Object.keys(this.state.linkedExtensionsByID); t < n.length; t++) {
                        var i = n[t],
                            r = this.state.linkedExtensionsByID[i];
                        e.push(d.createElement(Ee, c.__assign({
                            key: r.id,
                            onClickDisconnect: this.onClickDisconnect
                        }, r)))
                    }
                    return d.createElement("div", null, e)
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
            }(d.Component),
            Ne = Object(g.d)("ExtensionsConnectionList")(Oe);
        var we, Ce = Object(r.b)(function(e) {
                return {
                    sessionUser: Object(l.c)(e)
                }
            })(Ne),
            Pe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return p.a.buildType === v.a.Production ? null : d.createElement("div", null, d.createElement(O.a, {
                        title: Object(p.d)("Recommended Connections", "SettingsConnectionsPage"),
                        description: Object(p.d)("Manage your connected accounts and services", "SettingsConnectionsPage")
                    }), d.createElement(O.a, {
                        title: Object(p.d)("Extensions Connections", "SettingsConnectionsPage"),
                        description: Object(p.d)("You have shared your Twitch username with these extensions", "SettingsConnectionsPage")
                    }), d.createElement(Ce, null), d.createElement(O.a, {
                        title: Object(p.d)("Other Connections", "SettingsConnectionsPage"),
                        description: Object(p.d)("You have authorized these apps to use your Twitch account", "SettingsConnectionsPage")
                    }), d.createElement(O.a, {
                        title: Object(p.d)("Developer Applications", "SettingsConnectionsPage"),
                        description: Object(p.d)("Developer Application management has moved to {devPortalURL}", {
                            devPortalURL: d.createElement(k.M, {
                                to: "https://dev.twitch.tv"
                            }, "https://dev.twitch.tv")
                        }, "SettingsConnectionsPage")
                    }))
                }, t = c.__decorate([Object(g.d)("SettingsConnectionsPage", {
                    autoReportInteractive: !0,
                    destination: S.a.SettingsConnections
                }), Object(b.a)({
                    location: y.PageviewLocation.SettingsPage
                })], t)
            }(d.Component),
            je = n("OAwv"),
            Te = n("LBNC"),
            xe = n("UbVv"),
            Ue = n("zCIC"),
            Ie = (n("hPJb"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.userId, t.props.isEnabled)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return d.createElement(k._27, {
                        className: "advanced-notification-settings-toggle",
                        display: k.P.Flex,
                        justifyContent: k._3.Between,
                        background: k.m.Base,
                        padding: {
                            x: 5,
                            y: 1
                        },
                        borderBottom: !0
                    }, d.createElement(k._4, {
                        margin: {
                            left: 5
                        },
                        display: k.P.Flex,
                        flexGrow: 1,
                        alignItems: k.c.Center,
                        flexWrap: k.S.NoWrap
                    }, d.createElement(k._4, {
                        display: k.P.Flex,
                        flexGrow: 1,
                        flexWrap: k.S.NoWrap
                    }, d.createElement(k._4, {
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, d.createElement(k._2, {
                        linkTo: "/" + this.props.login
                    }, d.createElement(k.l, {
                        src: this.props.thumbnail,
                        alt: this.props.text,
                        size: 40
                    }))), d.createElement(k._4, {
                        flexGrow: 1,
                        display: k.P.Flex,
                        flexDirection: k.R.Column
                    }, d.createElement(k.O, {
                        fontSize: k.T.Size5
                    }, d.createElement(N.a, {
                        to: "/" + this.props.login
                    }, this.props.text)), d.createElement(k.O, {
                        type: k._41.Span,
                        color: k.J.Alt2
                    }, this.props.description))), d.createElement(k._4, {
                        display: k.P.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, d.createElement(k._4, {
                        margin: {
                            right: 1
                        }
                    }, d.createElement(k._43, {
                        checked: this.props.isEnabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector",
                        id: this.props.userId
                    })), d.createElement(k._4, {
                        className: this.props.saved ? "advanced-notification-settings-toggle__saved" : "advanced-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, d.createElement(k.O, {
                        fontSize: k.T.Size5,
                        color: k.J.Link
                    }, Object(p.d)("Saved", "AdvancedNotificationSettingsToggle"))))))
                }, t
            }(d.Component)),
            De = n("AQCV"),
            Fe = (n("t4xU"), n("EaRL")),
            Ae = function(e) {
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
                                        return this.props.data && this.props.data.currentUser && this.props.setAdvancedNotificationSetting ? (t = c.__assign({}, Object(T.a)({
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
                                        }, Object(T.d)(Fe, {
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
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return d.createElement(k._27, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, d.createElement(k._6, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return d.createElement(m.a, {
                        message: Object(p.d)("Error loading data.", "AdvancedNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return d.createElement(k._27, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, d.createElement(m.a, {
                        message: Object(p.d)("You must be logged in to update your settings", "AdvancedNotificationSettings")
                    }));
                    var e = Object(p.d)("{followCount, plural, one {You follow # channel} other {You follow # channels}}", {
                            followCount: this.props.data.currentUser.follows.totalCount
                        }, "AdvancedNotificationSettings"),
                        t = d.createElement(k._27, {
                            background: k.m.Alt2,
                            borderBottom: !0
                        }, d.createElement(k._2, {
                            onClick: this.toggleCollapse,
                            alpha: !0,
                            "data-test-selector": "header-selector"
                        }, d.createElement(k._4, {
                            display: k.P.Flex,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, d.createElement(k._4, {
                            className: "advanced-notification-settings__header",
                            flexGrow: 0
                        }, d.createElement(k.O, {
                            fontSize: k.T.Size5,
                            color: k.J.Alt2,
                            bold: !0
                        }, Object(p.d)("Advanced", "AdvancedNotificationSettings"))), d.createElement(k._4, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, d.createElement(k.O, {
                            "data-test-selector": "description-selector",
                            fontSize: k.T.Size5,
                            color: k.J.Alt2
                        }, e)), d.createElement(k._4, {
                            className: this.state.collapsed ? "advanced-notification-settings--collapse" : "advanced-notification-settings--expand",
                            flexGrow: 0,
                            flexShrink: 1,
                            display: k.P.Flex,
                            justifyContent: k._3.Center
                        }, d.createElement(k._17, {
                            asset: k._18.AngleRight,
                            type: k._19.Alt2
                        }))))),
                        n = !this.props.data.loading && !this.props.data.error && !!this.props.data.currentUser.follows.pageInfo.hasNextPage;
                    return this.props.data.currentUser.follows.totalCount > 0 ? this.state.collapsed ? d.createElement(k._27, null, t) : d.createElement(k._27, null, t, d.createElement(k._27, {
                        borderBottom: !0,
                        padding: 2
                    }, d.createElement(k._4, {
                        padding: {
                            bottom: 1
                        }
                    }, d.createElement(k.O, {
                        fontSize: k.T.Size5,
                        color: k.J.Alt2
                    }, Object(p.d)("Manage which channels you receive notifications for.", "AdvancedNotificationSettings"))), d.createElement(k._4, {
                        padding: {
                            bottom: 1
                        }
                    }, d.createElement(k.O, {
                        fontSize: k.T.Size4,
                        color: k.J.Alt
                    }, e)), d.createElement(k._27, {
                        className: "advanced-notification-settings__toggle-container",
                        borderTop: !0,
                        borderLeft: !0,
                        borderRight: !0,
                        margin: {
                            bottom: .5
                        }
                    }, this.renderToggles(), d.createElement(Ue.a, {
                        loadMore: this.props.loadMore,
                        enabled: n,
                        pixelThreshold: 200
                    })))) : null
                }, t.prototype.renderToggles = function() {
                    if (this.props.data && !this.props.data.loading && this.props.data.currentUser) {
                        for (var e = [], t = 0, n = this.props.data.currentUser.follows.edges; t < n.length; t++) {
                            var i = n[t];
                            i.node && i.node.id && i.node.followers && e.push(d.createElement(Ie, {
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
            }(d.Component),
            Me = Object(a.d)(Object(j.a)(Fe, {
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
                                query: Fe,
                                variables: c.__assign({}, e.data.variables, {
                                    cursor: e.data.currentUser && e.data.currentUser.follows.edges[e.data.currentUser.follows.edges.length - 1].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult;
                                    return e.currentUser && n.currentUser ? {
                                        currentUser: c.__assign({}, n.currentUser, {
                                            follows: c.__assign({}, n.currentUser.follows, {
                                                edges: Object(T.b)(e.currentUser.follows.edges, n.currentUser.follows.edges)
                                            })
                                        })
                                    } : n
                                }
                            })
                        }
                    })
                }
            }), Object(j.a)(De, {
                name: "setAdvancedNotificationSetting"
            }), Object(g.d)("AdvancedNotificationSettings"))(Ae),
            Re = n("OOv5"),
            Le = n("JBcW"),
            Be = (n("mVHD"), p.o.logger.withCategory("browser-push-notifications-settings")),
            Ve = function(e) {
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
                                        }), [4, Re.a.hasPushSubscription()];
                                    case 1:
                                        if (!n.sent()) return [3, 6];
                                        n.label = 2;
                                    case 2:
                                        return n.trys.push([2, 4, , 5]), [4, Re.a.userUnsubscribe(Le.a.Settings)];
                                    case 3:
                                        return n.sent(), [3, 5];
                                    case 4:
                                        return e = n.sent(), Be.error(e, "user unsubscribe failed"), [3, 5];
                                    case 5:
                                        return [3, 9];
                                    case 6:
                                        return n.trys.push([6, 8, , 9]), [4, Re.a.userSubscribe(Le.a.Settings)];
                                    case 7:
                                        return n.sent(), [3, 9];
                                    case 8:
                                        return t = n.sent(), Object(xe.a)() ? (this.setState({
                                            hide: !0
                                        }), [2]) : (Be.error(t, "user subscribe failed"), [3, 9]);
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
                                    return t.trys.push([0, 3, , 4]), [4, Re.a.initialize()];
                                case 1:
                                    return t.sent(), [4, this.updateSubscriptionState()];
                                case 2:
                                    return t.sent(), [3, 4];
                                case 3:
                                    return e = t.sent(), Be.error(e, "unexpected error initializing push manager"), this.setState({
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
                    return d.createElement(k._27, {
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
                    }, d.createElement(k._27, {
                        className: "browser-push-notification-settings",
                        padding: {
                            left: 5,
                            right: 4
                        },
                        display: k.P.Flex,
                        margin: {
                            x: 5
                        }
                    }, d.createElement(k._4, {
                        className: "browser-push-notification-settings__body",
                        display: k.P.Flex,
                        flexWrap: k.S.NoWrap,
                        flexGrow: 1
                    }, d.createElement(k._4, {
                        margin: {
                            right: 1
                        },
                        flexGrow: 1
                    }, d.createElement(k.O, {
                        fontSize: k.T.Size4,
                        color: k.J.Alt
                    }, Object(p.d)("Receive Browser Notifications for this Device", "BrowserPushNotificationsSettings")), d.createElement(k._4, {
                        padding: {
                            top: .5
                        }
                    }, d.createElement(k.O, {
                        fontSize: k.T.Size5,
                        color: k.J.Alt2
                    }, Object(p.d)("See notifications at the corner of your screen, even when you’re not on Twitch", "BrowserPushNotificationsSettings")))), d.createElement(k._4, {
                        flexShrink: 0
                    }, d.createElement(k.u, {
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
                                    return [4, Re.a.hasPushSubscription()];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        hasSubscription: e
                                    }), [2]
                            }
                        })
                    })
                }, t
            }(d.Component),
            ze = Object(P.compose)(Object(g.d)("BrowserPushNotificationsSettings"))(Ve),
            qe = (n("iOZM"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.category, t.props.isEnabled)
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return d.createElement(k._27, {
                        className: "platform-notification-settings-toggle",
                        display: k.P.Flex,
                        flexWrap: k.S.NoWrap,
                        alignItems: k.c.Start,
                        background: k.m.Alt,
                        margin: {
                            top: 1,
                            bottom: .5
                        },
                        padding: {
                            right: 5
                        }
                    }, d.createElement(k._4, {
                        className: "platform-notification-settings-toggle__body",
                        display: k.P.Flex,
                        flexDirection: k.R.Column,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, d.createElement(k._4, {
                        margin: {
                            bottom: .5
                        }
                    }, d.createElement(k.O, {
                        fontSize: k.T.Size4
                    }, this.props.text)), d.createElement(k.O, {
                        fontSize: k.T.Size5,
                        color: k.J.Alt2
                    }, this.props.description)), d.createElement(k._4, {
                        display: k.P.Flex,
                        margin: {
                            top: .5
                        },
                        flexGrow: 0,
                        flexShrink: 0
                    }, d.createElement(k._4, {
                        margin: {
                            right: 1
                        }
                    }, d.createElement(k._43, {
                        checked: this.props.isEnabled,
                        disabled: this.props.disabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector"
                    })), d.createElement(k._4, {
                        className: this.props.saved ? "platform-notification-settings-toggle__saved" : "platform-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, d.createElement(k.O, {
                        fontSize: k.T.Size5,
                        color: k.J.Link
                    }, Object(p.d)("Saved", "PlatformNotificationSettingsToggle")))))
                }, t
            }(d.Component)),
            We = n("g+dK"),
            He = (n("RC0U"), n("1f5k"));
        ! function(e) {
            e.onsite = "onsite", e.email = "email", e.push = "push"
        }(we || (we = {}));
        var Ge, Je, Qe = function(e) {
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
                                        return this.props.data && this.props.data.currentUser && this.props.setNotificationSetting ? (t = n ? "off" : "on", i = c.__assign({}, Object(T.a)({
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
                                        }, Object(T.d)(He, {}, a), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return d.createElement(k._4, {
                        padding: 1
                    }, d.createElement(k._6, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return d.createElement(m.a, {
                        message: Object(p.d)("Error loading data.", "PlatformNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return d.createElement(k._27, {
                        margin: {
                            top: 1
                        }
                    }, d.createElement(m.a, {
                        message: Object(p.d)("You must be logged in to update your settings.", "PlatformNotificationSettings")
                    }));
                    var e = d.createElement(k._27, {
                        background: k.m.Alt2,
                        borderBottom: !0
                    }, d.createElement(k._2, {
                        onClick: this.toggleCollapse,
                        alpha: !0
                    }, d.createElement(k._4, {
                        display: k.P.Flex,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, d.createElement(k._4, {
                        className: "platform-notification-settings__header",
                        flexGrow: 0,
                        "data-test-selector": "collapsible-header"
                    }, d.createElement(k.O, {
                        "data-test-selector": "display-name",
                        fontSize: k.T.Size5,
                        color: k.J.Alt2,
                        bold: !0
                    }, this.props.displayName)), d.createElement(k._4, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, d.createElement(k.O, {
                        fontSize: k.T.Size5,
                        color: k.J.Alt2
                    }, this.getSettingTurnedOnMessage())), d.createElement(k._4, {
                        className: this.state.collapsed ? "platform-notification-settings--collapse" : "platform-notification-settings--expand",
                        flexGrow: 0,
                        flexShrink: 1,
                        display: k.P.Flex,
                        justifyContent: k._3.Center
                    }, d.createElement(k._17, {
                        asset: k._18.AngleRight,
                        type: k._19.Alt2
                    })))));
                    return this.state.collapsed ? d.createElement(k._27, null, e) : d.createElement(k._27, null, e, d.createElement(k._27, {
                        padding: 2,
                        borderBottom: !0
                    }, d.createElement(k._4, {
                        padding: {
                            bottom: 1
                        }
                    }, d.createElement(k.O, {
                        "data-test-selector": "description",
                        fontSize: k.T.Size5,
                        color: k.J.Alt2
                    }, this.props.description)), d.createElement(k._27, {
                        display: k.P.Flex,
                        margin: {
                            y: .5
                        },
                        borderBottom: !0
                    }, d.createElement(k._4, {
                        className: "platform-notification-settings__all",
                        display: k.P.Flex,
                        padding: {
                            bottom: 1,
                            right: 5
                        },
                        justifyContent: k._3.Center,
                        flexGrow: 1,
                        flexWrap: k.S.NoWrap
                    }, d.createElement(k._4, {
                        className: "platform-notification-settings__all-body",
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, d.createElement(k.O, {
                        fontSize: k.T.Size4,
                        color: k.J.Alt,
                        "data-test-selector": "explanation"
                    }, this.props.explanation)), d.createElement(k._4, {
                        display: k.P.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, d.createElement(k._4, {
                        margin: {
                            right: 1
                        }
                    }, d.createElement(k._43, {
                        "data-test-selector": "all-toggle",
                        checked: this.getGlobalStateForPlatform(),
                        onChange: this.toggleAll
                    })), d.createElement(k._4, {
                        padding: {
                            x: 1
                        },
                        "data-test-selector": "saved-selector",
                        className: this.getDisplaySaved("ALL") ? "platform-notification-settings__saved" : "platform-notification-settings__saved--hide"
                    }, d.createElement(k.O, {
                        fontSize: k.T.Size5,
                        color: k.J.Link
                    }, Object(p.d)("Saved", "PlatformNotificationSettings")))))), d.createElement(k._4, {
                        className: "platform-notification-settings__toggle-container",
                        display: k.P.Flex,
                        flexDirection: k.R.Column,
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
                        r && e.push(d.createElement(qe, {
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
            }(d.Component),
            Ye = Object(a.d)(Object(g.d)("PlatformNotificationSettings"), Object(j.a)(He, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network"
                    }
                }
            }), Object(j.a)(We, {
                name: "setNotificationSetting"
            }))(Qe),
            Ke = (n("nq6q"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e = "" !== location.search ? je.parse(location.search) : {},
                        t = !!e["open-advanced"] && "true" === e["open-advanced"];
                    return d.createElement(k._27, {
                        className: "notification-settings__body",
                        borderRight: !0,
                        borderLeft: !0,
                        borderTop: !0
                    }, d.createElement(k._27, {
                        background: k.m.Alt,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, d.createElement(k._4, {
                        margin: {
                            bottom: .5
                        }
                    }, d.createElement(k.O, {
                        fontSize: k.T.Size3,
                        color: k.J.Alt
                    }, Object(p.d)("Notifications", "SettingsNotificationsPage"))), d.createElement(k._4, null, d.createElement(k.O, {
                        fontSize: k.T.Size5,
                        color: k.J.Alt2
                    }, Object(p.d)("Get the notifications you care about, where you want to see them.", "SettingsNotificationsPage")))), d.createElement(Ye, {
                        startCollapsed: t,
                        platformName: we.onsite,
                        displayName: Object(p.d)("On Twitch", "SettingsNotificationsPage"),
                        description: Object(p.d)("We'll always keep you informed on important updates to Twitch and your account.", "SettingsNotificationsPage"),
                        explanation: Object(p.d)("Send me notifications on Twitch about", "SettingsNotificationsPage"),
                        key: "onsite",
                        extraSettings: this.renderBrowserPushNotifications()
                    }), d.createElement(Ye, {
                        startCollapsed: !0,
                        platformName: we.email,
                        displayName: Object(p.d)("By Email", "SettingsNotificationsPage"),
                        description: Object(p.d)("Receive important notifications through email. You may receive additional emails about features and content on Twitch. You can turn off specific emails using the unsubscribe link included in each message.", "SettingsNotificationsPage"),
                        explanation: Object(p.d)("Send me emails about", "SettingsNotificationsPage"),
                        key: "email"
                    }), d.createElement(Ye, {
                        platformName: we.push,
                        startCollapsed: !0,
                        displayName: Object(p.d)("On Mobile", "SettingsNotificationsPage"),
                        description: Object(p.d)("Get Twitch updates on the go. Receive notifications right on your phone's home screen.", "SettingsNotificationsPage"),
                        explanation: Object(p.d)("Send me push notifications", "SettingsNotificationsPage"),
                        key: "push"
                    }), d.createElement(Me, {
                        startCollapsed: !t
                    }))
                }, t.prototype.renderBrowserPushNotifications = function() {
                    return Object(Te.a)() && !Object(xe.a)() ? d.createElement(ze, null) : null
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t = c.__decorate([Object(g.d)("SettingsNotificationsPage", {
                    destination: S.a.NotificationSettingsPage
                }), Object(b.a)({
                    location: y.PageviewLocation.SettingsPage
                })], t)
            }(d.Component)),
            $e = n("S1vB"),
            Xe = n("cumT"),
            Ze = function(e) {
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
                    return p.a.buildType === v.a.Production ? null : this.props.data.currentUser && this.props.data.requestInfo ? this.props.data.currentUser.hasPrime ? d.createElement("div", null, d.createElement(_, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    })) : Object($e.a)(this.props.data.requestInfo.countryCode) ? (window.location.replace("https://twitch.amazon.com/prime?ref_=sm_w_tsp_p_t"), null) : d.createElement(u.a, {
                        to: "/settings/turbo"
                    }) : null
                }, t = c.__decorate([Object(g.d)("SettingsPrimePage", {
                    autoReportInteractive: !0,
                    destination: S.a.SettingsPrime
                }), Object(b.a)({
                    location: y.PageviewLocation.SettingsPage
                }), Object(j.a)(Xe)], t)
            }(d.Component),
            et = function() {
                return d.createElement(m.a, {
                    message: Object(p.d)("Error loading user data. Please try again later.", "SettingsPageError")
                })
            },
            tt = function() {
                return d.createElement(D.a, {
                    label: Object(p.d)("Disable Your Twitch Account", "DisableAccountLink"),
                    orientation: k.V.Horizontal
                }, Object(p.d)("If you want to disable your Twitch account, you can do so from the <x:link>Disable Account</x:link> page.", {
                    "x:link": function(e) {
                        return d.createElement("a", {
                            key: "disable-account-link",
                            href: "https://www.twitch.tv/user/disable_account",
                            "data-a-target": "disable-account-link"
                        }, e)
                    }
                }, "DisableAccountLink"))
            },
            nt = 5e3;
        ! function(e) {
            e[e.InvalidAddress = 1] = "InvalidAddress", e[e.InvalidDomain = 2] = "InvalidDomain"
        }(Ge || (Ge = {})),
        function(e) {
            e[e.Error = 0] = "Error", e[e.CanSendVerificationEmail = 1] = "CanSendVerificationEmail", e[e.VerificationEmailSent = 2] = "VerificationEmailSent", e[e.Verified = 3] = "Verified"
        }(Je || (Je = {}));
        var it, rt = function(e) {
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
                                        }), e = Je.Error, n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, re.a.put("/kraken/users/" + this.props.id, {
                                            body: {
                                                email: this.props.email
                                            }
                                        })];
                                    case 2:
                                        return 200 === n.sent().status && (e = Je.VerificationEmailSent), [3, 4];
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
                                                    status: Je.CanSendVerificationEmail
                                                })
                                            }, nt)
                                        }), [2]
                                }
                            })
                        })
                    }, n.state = {
                        status: t.verified ? Je.Verified : Je.CanSendVerificationEmail,
                        working: !1
                    }, n
                }
                return c.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.feedbackTimerHandle && clearTimeout(this.feedbackTimerHandle)
                }, t.prototype.render = function() {
                    var e = !!this.props.error || this.state.status === Je.Error,
                        t = this.props.disabled || this.state.working;
                    return d.createElement(k._4, {
                        display: k.P.Flex,
                        flexWrap: k.S.NoWrap
                    }, d.createElement(D.a, {
                        id: "profile-account-info-setting__email-input",
                        error: e,
                        errorMessage: e ? this.renderEmailError() : void 0,
                        label: Object(p.d)("Email", "EmailSetting")
                    }, d.createElement(k._4, {
                        display: k.P.Flex
                    }, d.createElement(k._4, {
                        flexGrow: 1
                    }, d.createElement(k._0, {
                        id: "profile-account-info-setting__email-input",
                        type: k._1.Email,
                        disabled: t,
                        onChange: this.props.onChange,
                        required: !0,
                        value: this.props.email,
                        "data-a-target": "profile-email-input"
                    })), this.renderVerifyButton(t)), d.createElement(I, {
                        text: this.renderVerificationMessage(),
                        dataTarget: "profile-email-description"
                    })))
                }, t.prototype.renderVerifyButton = function(e) {
                    switch (this.state.status) {
                        case Je.CanSendVerificationEmail:
                            return d.createElement(k.u, {
                                type: k.A.Default,
                                disabled: this.props.dirty || e,
                                onClick: this.onClickVerify,
                                "data-a-target": "profile-email-verify-button"
                            }, Object(p.d)("Verify", "EmailSetting"));
                        case Je.VerificationEmailSent:
                            return d.createElement(k.u, {
                                type: k.A.Success,
                                disabled: !0,
                                "data-a-target": "profile-email-sent-button"
                            }, Object(p.d)("Email Sent", "EmailSetting"));
                        case Je.Error:
                            return d.createElement(k.u, {
                                type: k.A.Alert,
                                disabled: !0,
                                "data-a-target": "profile-email-error-button"
                            }, Object(p.d)("Error", "EmailSetting"));
                        case Je.Verified:
                        default:
                            return null
                    }
                }, t.prototype.renderVerificationMessage = function() {
                    switch (this.state.status) {
                        case Je.CanSendVerificationEmail:
                            return Object(p.d)("This email is linked to your account - please take a moment to verify", "EmailSetting");
                        case Je.VerificationEmailSent:
                            return Object(p.d)("Verification email sent!", "EmailSetting");
                        case Je.Verified:
                            return Object(p.d)("This email is linked to your account", "EmailSetting");
                        default:
                            return null
                    }
                }, t.prototype.renderEmailError = function() {
                    if (this.state.status === Je.Error) return Object(p.d)("Failed to send verification email - please try again later", "EmailSetting");
                    switch (this.props.error) {
                        case Ge.InvalidAddress:
                            return Object(p.d)("Please provide a valid email address", "EmailSetting");
                        case Ge.InvalidDomain:
                            return Object(p.d)("Admins must use their work email address", "EmailSetting");
                        default:
                            return
                    }
                }, t
            }(d.Component),
            at = n("FuaS"),
            ot = n("FsFC");
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.Eligible = 2] = "Eligible", e[e.NotEligible = 3] = "NotEligible"
        }(it || (it = {}));
        var st = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        status: it.Loading
                    }, t.logger = p.j.withCategory("username-setting"), t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.emailVerified && this.fetchChangeEligibility()
                }, t.prototype.render = function() {
                    return d.createElement(k._4, {
                        display: k.P.Flex,
                        flexWrap: k.S.NoWrap
                    }, d.createElement(D.a, {
                        label: Object(p.d)("Username", "UsernameSetting"),
                        error: this.state.status === it.Error,
                        errorMessage: this.state.status === it.Error ? this.renderErrorMessage() : void 0
                    }, d.createElement(k._4, {
                        display: k.P.Flex
                    }, d.createElement(k._4, {
                        flexGrow: 1
                    }, d.createElement(k._0, {
                        type: k._1.Text,
                        disabled: !0,
                        value: this.props.login,
                        "data-a-target": "profile-username-input"
                    })), this.state.status === it.Eligible && d.createElement(k.v, {
                        ariaLabel: Object(p.d)("Edit Username", "UsernameSetting"),
                        icon: k._18.Edit,
                        linkTo: "https://www.twitch.tv/logins/new",
                        "data-a-target": "profile-edit-username-button"
                    })), d.createElement(I, {
                        dataTarget: "profile-username-description",
                        text: this.renderChangeEligibilityMessage()
                    })))
                }, t.prototype.renderChangeEligibilityMessage = function() {
                    if (!this.props.emailVerified) return Object(p.d)("You must have a verified email to update your username", "UsernameSetting");
                    switch (this.state.status) {
                        case it.Loading:
                            return Object(p.d)("Loading username change eligibility...", "UsernameSetting");
                        case it.Eligible:
                            return Object(p.d)("You may update your username", "UsernameSetting");
                        case it.NotEligible:
                            return this.state.eligibilityTimeISO && Object(p.d)("You may update your username again in {distanceFromNow}", {
                                distanceFromNow: function(e) {
                                    var t = Date.now(),
                                        n = (new Date(e).getTime() - t) / 1e3;
                                    if (!(n <= 0)) return Object(ot.a)(n)
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
                                        status: it.Eligible
                                    }) : e.body && !1 === e.body.is_rename_eligible ? this.setState({
                                        status: it.NotEligible,
                                        eligibilityTimeISO: e.body.rename_eligible_at
                                    }) : this.setState({
                                        status: it.Error
                                    }), [3, 3];
                                case 2:
                                    return t.sent(), this.logger.warn("Failed to fetch rename_status for user " + this.props.login), this.setState({
                                        status: it.Error
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t
            }(d.Component),
            lt = ["ko", "ja", "zh", "zh-cn", "zh-tw", "zh-hk"],
            ct = "profile-account-info-setting__bio-input",
            dt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return d.createElement("div", null, d.createElement(rt, {
                        disabled: this.props.controlsDisabled,
                        dirty: this.props.emailDirty,
                        email: this.props.email,
                        id: this.props.id,
                        error: this.props.emailError,
                        login: this.props.login,
                        onChange: this.props.onEmailChange,
                        verified: this.props.emailVerified
                    }), d.createElement(st, {
                        emailVerified: this.props.emailVerified,
                        login: this.props.login
                    }), d.createElement(D.a, {
                        id: "profile-account-info-setting__displayname-input",
                        error: !!this.props.displayNameError,
                        errorMessage: this.props.displayNameError ? this.renderDisplayNameError() : void 0,
                        label: Object(p.d)("Display Name", "ProfileAccountInfo")
                    }, d.createElement(k._0, {
                        id: "profile-account-info-setting__displayname-input",
                        "data-a-target": "profile-displayname-input",
                        type: k._1.Text,
                        disabled: this.props.controlsDisabled,
                        onChange: this.props.onDisplayNameChange,
                        value: this.props.displayName
                    }), d.createElement(I, {
                        dataTarget: "profile-displayname-description",
                        text: this.renderDisplayNameDescription()
                    })), d.createElement(D.a, {
                        id: ct,
                        error: !!this.props.bioError,
                        errorMessage: this.props.bioError ? this.renderBioError() : void 0,
                        label: Object(p.d)("Bio", "ProfileAccountInfo")
                    }, d.createElement(k._38, {
                        id: ct,
                        disabled: this.props.controlsDisabled,
                        onChange: this.props.onBioChange,
                        maxLength: 300,
                        noResize: !0,
                        value: this.props.bio,
                        "data-a-target": "profile-bio-input"
                    }), d.createElement(I, {
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
                    var e = Object(at.a)();
                    return !!e && lt.includes(e)
                }, t
            }(d.Component),
            ut = n("E9Qg"),
            pt = n.n(ut),
            mt = n("tL94"),
            gt = (n("i1sU"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t.props.data && t.props.data.currentUser;
                        e && t.props.showModal(ge.a, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            imageType: he.a.ProfileBanner,
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
                    if (!e.loading && !t) return d.createElement(k.O, {
                        type: k._41.Span,
                        color: k.J.Error
                    }, Object(p.d)("Sorry, something went wrong. Please try again later.", "ProfileBannerSetting"));
                    var n = Object(p.d)("Profile Banner", "ProfileBannerSetting"),
                        i = null;
                    return i = e.loading ? d.createElement(k._10, {
                        "data-test-selector": "profile-banner__placeholder",
                        "data-a-target": "profile-banner-image",
                        height: 140,
                        width: 440
                    }) : t && t.bannerImageURL ? d.createElement(g.b, {
                        src: t.bannerImageURL,
                        alt: n,
                        className: "profile-banner-setting__current-image",
                        "data-a-target": "profile-banner-image"
                    }) : d.createElement("div", {
                        className: "profile-banner-setting__current-image profile-banner-setting__current-image--default",
                        style: {
                            backgroundImage: "url(" + pt.a + ")"
                        },
                        "data-a-target": "profile-banner-image"
                    }), d.createElement(k._4, {
                        className: "profile-banner-setting"
                    }, d.createElement(k._4, {
                        display: k.P.Flex,
                        flexDirection: k.R.Row
                    }, d.createElement(k._4, {
                        margin: {
                            right: 2
                        }
                    }, i), d.createElement(k._4, {
                        margin: {
                            y: "auto"
                        }
                    }, d.createElement(k.u, {
                        ariaLabel: Object(p.d)("Update Profile Banner", "ProfileBannerSetting"),
                        type: k.A.Hollow,
                        onClick: this.openModal,
                        "data-a-target": "profile-banner-upload-button",
                        "data-test-selector": "profile-banner-upload-button"
                    }, d.createElement(k._4, {
                        padding: {
                            x: 1
                        }
                    }, Object(p.d)("Update", "ProfileBannerSetting"))), d.createElement(I, {
                        text: Object(p.d)("File format: JPEG, PNG, GIF (recommended 1200x380, max 10MB)", "ProfileBannerSetting")
                    }))))
                }, t
            }(d.Component)),
            ht = Object(P.compose)(Object(g.d)("ProfileBannerSetting"), Object(j.a)(mt))(gt);
        var ft = Object(r.b)(null, function(e) {
                return Object(a.b)({
                    showModal: me.d
                }, e)
            })(ht),
            bt = n("x9n8"),
            vt = n("goep"),
            St = (n("eppJ"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t.props.data && t.props.data.currentUser;
                        e && t.props.showModal(bt.a, {
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
                        t = d.createElement(k._10, {
                            height: 140,
                            width: 140
                        });
                    return e && e.profileImageURL && (t = d.createElement(g.b, {
                        src: e.profileImageURL,
                        alt: Object(p.d)("Profile Picture", "ProfileImageSetting"),
                        className: "profile-image-setting__current-image",
                        "data-a-target": "profile-image"
                    })), d.createElement(k._4, {
                        className: "profile-image-setting"
                    }, d.createElement(k._4, {
                        display: k.P.Flex,
                        flexDirection: k.R.Row
                    }, d.createElement(k._4, {
                        margin: {
                            right: 2
                        }
                    }, t), d.createElement(k._4, {
                        margin: {
                            y: "auto"
                        }
                    }, d.createElement(k.u, {
                        ariaLabel: Object(p.d)("Update Profile Picture", "ProfileImageSetting"),
                        type: k.A.Hollow,
                        onClick: this.openModal,
                        "data-a-target": "profile-image-upload-button",
                        "data-test-selector": "profile-image-upload-button"
                    }, d.createElement(k._4, {
                        padding: {
                            x: 1
                        }
                    }, Object(p.d)("Update", "ProfileImageSetting"))), d.createElement(I, {
                        text: Object(p.d)("File format: JPEG, PNG, GIF (max size 256x256, 10MB)", "ProfileImageSetting")
                    }))))
                }, t
            }(d.Component)),
            yt = Object(P.compose)(Object(g.d)("ProfileImageSetting"), Object(j.a)(vt))(St);
        var kt, _t = Object(r.b)(null, function(e) {
                return Object(a.b)({
                    showModal: me.d
                }, e)
            })(yt),
            Et = n("OA9H");
        ! function(e) {
            e.Bio = "Error (403): Description specified is too long", e.DisplayName = "Error (403): You may not change your display name, only the capitalization of it.", e.EmailNotValid = "Error (403): Email address is not valid", e.EmailDomainNotAllowed = "Error (403): Admins must use their work email"
        }(kt || (kt = {}));
        var Ot = function(e) {
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
                                            case kt.EmailNotValid:
                                                r = Ge.InvalidAddress;
                                                break;
                                            case kt.EmailDomainNotAllowed:
                                                r = Ge.InvalidDomain;
                                                break;
                                            case kt.DisplayName:
                                                t = !0;
                                                break;
                                            case kt.Bio:
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
                    if (p.a.buildType === v.a.Production) return null;
                    if (!this.props.data.currentUser) return this.props.data.loading ? d.createElement(k._6, {
                        fillContent: !0
                    }) : d.createElement(et, null);
                    var e = d.createElement(_, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    });
                    return d.createElement("div", null, d.createElement(O.a, {
                        title: Object(p.d)("Profile Picture", "SettingsProfilePage")
                    }), d.createElement(E.a, null, d.createElement(be.a, null, d.createElement(_t, null))), d.createElement(O.a, {
                        title: Object(p.d)("Profile Banner", "SettingsProfilePage")
                    }), d.createElement(E.a, null, d.createElement(be.a, null, d.createElement(ft, null))), d.createElement(O.a, {
                        title: Object(p.d)("Profile Settings", "SettingsProfilePage"),
                        description: Object(p.d)("Change identifying details for your account", "SettingsProfilePage")
                    }), d.createElement(E.a, {
                        footer: e
                    }, d.createElement(dt, {
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
                    })), d.createElement(O.a, {
                        title: Object(p.d)("Disabling Your Twitch Account", "SettingsProfilePage"),
                        description: Object(p.d)("Completely deactivate your account", "SettingsProfilePage")
                    }), d.createElement(E.a, null, d.createElement(tt, null)))
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
            }(d.Component),
            Nt = Object(P.compose)(Object(j.a)(Et), Object(g.d)("SettingsProfilePage", {
                autoReportInteractive: !0,
                destination: S.a.SettingsProfile
            }), Object(b.a)({
                location: y.PageviewLocation.SettingsPage
            }))(Ot),
            wt = "/v5/whispers/settings",
            Ct = function(e) {
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
                                        return n.trys.push([1, 3, , 4]), [4, re.a.post(wt, {
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
                                    return t.trys.push([0, 2, , 3]), [4, re.a.get(wt)];
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
                    return d.createElement(F, {
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
            }(d.Component);

        function Pt() {
            return d.createElement(D.a, {
                label: Object(p.d)("Password", "ChangePasswordLink"),
                orientation: k.V.Horizontal
            }, d.createElement(k.O, null, Object(p.d)("<x:link>Change password.</x:link> Improve your security with a strong password.", {
                "x:link": function(e) {
                    return d.createElement("a", {
                        key: "change-password-link",
                        href: "https://passport.twitch.tv/passwords/new?"
                    }, e)
                }
            }, "ChangePasswordLink")))
        }
        var jt = function(e) {
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
                return this.state.show ? d.createElement(F, {
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
        }(d.Component);
        var Tt, xt = Object(r.b)(function(e) {
                var t = Object(l.c)(e);
                return {
                    sessionUserID: t && t.id
                }
            })(jt),
            Ut = n("NoSW"),
            It = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return d.createElement(D.a, {
                        label: Object(p.d)("Two-Factor Authentication", "TwoFactorAuthenticationSetting"),
                        orientation: k.V.Horizontal,
                        error: this.props.status === Tt.Error,
                        errorMessage: Object(p.d)("Sorry, something went wrong. Please try again later.", "TwoFactorAuthenticationSetting")
                    }, this.renderBody())
                }, t.prototype.renderBody = function() {
                    switch (this.props.status) {
                        case Tt.Loading:
                            return this.renderLoading();
                        case Tt.Error:
                            return this.renderError();
                        case Tt.UnverifiedEmail:
                            return this.renderVerifyEmail();
                        case Tt.CanEnable:
                            return this.renderEnableButton();
                        case Tt.Enabled:
                            return this.renderDisableButton();
                        case Tt.EnabledAndRequired:
                            return this.renderEnabledAndRequired();
                        default:
                            return null
                    }
                }, t.prototype.renderLoading = function() {
                    return d.createElement(k._10, null)
                }, t.prototype.renderError = function() {
                    return null
                }, t.prototype.renderVerifyEmail = function() {
                    return d.createElement(k._4, null, d.createElement(k.O, {
                        "data-a-target": "tfa-verify-email"
                    }, Object(p.d)("Just verify your email address and two-factor authentication can be enabled.", "TwoFactorAuthenticationSetting")))
                }, t.prototype.renderEnableButton = function() {
                    return d.createElement(k._4, null, d.createElement(k.u, {
                        linkTo: "https://passport.twitch.tv/register_2fa/new",
                        "data-a-target": "tfa-enable-button"
                    }, Object(p.d)("Set Up Two-Factor Authentication", "TwoFactorAuthenticationSetting")), d.createElement(I, {
                        dataTarget: "tfa-pitch-message",
                        text: Object(p.d)("It's dangerous to go alone. <x:link>Two-factor authentication</x:link> adds an extra layer of security to your Twitch account by requiring both a password and your mobile phone to login.", {
                            "x:link": function(e) {
                                return d.createElement("a", {
                                    key: "learn-more-link",
                                    href: "https://www.authy.com/learn-more",
                                    target: "_blank",
                                    "data-a-target": "tfa-authy-link"
                                }, e)
                            }
                        }, "TwoFactorAuthenticationSetting")
                    }))
                }, t.prototype.renderDisableButton = function() {
                    return d.createElement(k._4, null, d.createElement(k.u, {
                        linkTo: "https://passport.twitch.tv/disable_2fa/new",
                        "data-a-target": "tfa-disable-button"
                    }, Object(p.d)("Disable two-factor authentication", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                }, t.prototype.renderEnabledAndRequired = function() {
                    return d.createElement(k._4, null, d.createElement(k.O, {
                        "data-a-target": "tfa-required-message"
                    }, Object(p.d)("You must have two-factor authentication enabled.", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                }, t.prototype.renderEnabledMessage = function() {
                    return d.createElement(I, {
                        dataTarget: "tfa-successful-message",
                        text: Object(p.d)("Woohoo! Two-factor authentication is enabled! To reset or change your phone, visit the Authy <x:link>phone reset form</x:link>.", {
                            "x:link": function(e) {
                                return d.createElement("a", {
                                    key: "phone-reset-link",
                                    href: "https://www.authy.com/phones/reset",
                                    "data-a-target": "tfa-authy-reset"
                                }, e)
                            }
                        }, "TwoFactorAuthenticationSetting")
                    })
                }, t
            }(d.Component),
            Dt = n("Q6se");
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.UnverifiedEmail = 2] = "UnverifiedEmail", e[e.CanEnable = 3] = "CanEnable", e[e.Enabled = 4] = "Enabled", e[e.EnabledAndRequired = 5] = "EnabledAndRequired"
        }(Tt || (Tt = {}));
        var Ft, At = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        status: Tt.Loading,
                        restLoading: !0,
                        restError: !1
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTwoFactorEnabled()
                }, t.prototype.componentDidUpdate = function(e, t) {
                    t.status === Tt.Loading && this.state.status !== Tt.Loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.status !== Tt.Loading || e.data.loading || this.reconcileStatus(e)
                }, t.prototype.render = function() {
                    return d.createElement(It, {
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
                    e.data.loading || this.state.restLoading ? t = Tt.Loading : !e.data.currentUser || this.state.restError ? t = Tt.Error : this.state.twoFactorEnabled || e.data.currentUser.isEmailVerified ? !this.state.twoFactorEnabled && e.data.currentUser.isEmailVerified ? t = Tt.CanEnable : this.state.twoFactorEnabled && !this.userRoleRequiresTwoFactor(e) ? t = Tt.Enabled : this.state.twoFactorEnabled && this.userRoleRequiresTwoFactor(e) && (t = Tt.EnabledAndRequired) : t = Tt.UnverifiedEmail, t && this.setState({
                        status: t
                    })
                }, t.prototype.userRoleRequiresTwoFactor = function(e) {
                    var t = e.data.currentUser && e.data.currentUser.roles;
                    return !(!t || !(t.isGlobalMod || t.isSiteAdmin || t.isStaff))
                }, t
            }(d.Component),
            Mt = Object(P.compose)(Object(Ut.a)("TwoFactorAuthenticationSetting"), Object(j.a)(Dt))(At),
            Rt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return p.a.buildType === v.a.Production ? null : d.createElement("div", null, d.createElement(O.a, {
                        title: Object(p.d)("Security", "SettingsSecurityPage"),
                        description: Object(p.d)("Keep your account safe and sound", "SettingsSecurityPage")
                    }), d.createElement(Pt, null), d.createElement(Mt, null), d.createElement(O.a, {
                        title: Object(p.d)("Privacy", "SettingsSecurityPage")
                    }), d.createElement(Ct, null), d.createElement(xt, null))
                }, t
            }(d.Component),
            Lt = Object(P.compose)(Object(g.d)("SettingsSecurityPage", {
                autoReportInteractive: !0,
                destination: S.a.SettingsSecurity
            }), Object(b.a)({
                location: y.PageviewLocation.SettingsPage
            }))(Rt),
            Bt = n("CkX/");
        ! function(e) {
            e.Channel = "channel", e.Notifications = "notifications", e.Profile = "profile", e.Security = "security", e.Connections = "connections", e.Prime = "prime", e.Turbo = "turbo"
        }(Ft || (Ft = {}));
        var Vt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isPrimeVisible = function() {
                        return t.props.data.requestInfo && t.props.data.currentUser && (Object($e.a)(t.props.data.requestInfo.countryCode) || t.props.data.currentUser.hasPrime)
                    }, t
                }
                return c.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data.currentUser || !this.props.data.requestInfo) return null;
                    var e = null;
                    this.isPrimeVisible() && (e = d.createElement(k._28, {
                        linkTo: "/settings/prime",
                        active: this.props.tabName === Ft.Prime,
                        "data-test-selector": "test-settings-prime-tab",
                        "data-a-target": "prime-tab"
                    }, Object(p.d)("Twitch Prime", "SettingsTabs")));
                    var t = null;
                    return !this.props.data.currentUser.hasTurbo && this.isPrimeVisible() || (t = d.createElement(k._28, {
                        linkTo: "/settings/turbo",
                        active: this.props.tabName === Ft.Turbo,
                        "data-test-selector": "test-settings-turbo-tab",
                        "data-a-target": "turbo-tab"
                    }, Object(p.d)("Twitch Turbo", "SettingsTabs"))), d.createElement(k._4, {
                        className: "settings-tabs",
                        padding: {
                            x: Gt,
                            top: Gt
                        }
                    }, d.createElement(k._4, {
                        margin: {
                            bottom: 1
                        }
                    }, d.createElement(k.O, {
                        type: k._41.H2
                    }, Object(p.d)("Settings", "SettingsTabs"))), d.createElement(k._4, null, d.createElement(k._29, null, d.createElement(k._28, {
                        linkTo: "/settings/profile",
                        active: this.props.tabName === Ft.Profile,
                        "data-a-target": "profile-tab"
                    }, Object(p.d)("Profile", "SettingsTabs")), e, t, d.createElement(k._28, {
                        linkTo: "/settings/channel",
                        active: this.props.tabName === Ft.Channel,
                        "data-a-target": "channel-tab"
                    }, Object(p.d)("Channel and Videos", "SettingsTabs")), d.createElement(k._28, {
                        linkTo: "/settings/security",
                        active: this.props.tabName === Ft.Security,
                        "data-a-target": "security-tab"
                    }, Object(p.d)("Security and Privacy", "SettingsTabs")), d.createElement(k._28, {
                        linkTo: "/settings/notifications",
                        active: this.props.tabName === Ft.Notifications,
                        "data-a-target": "notifications-tab"
                    }, Object(p.d)("Notifications", "SettingsTab")), d.createElement(k._28, {
                        linkTo: "/settings/connections",
                        active: this.props.tabName === Ft.Connections,
                        "data-a-target": "connections-tab"
                    }, Object(p.d)("Connections", "SettingsTabs")), d.createElement(k._28, {
                        linkTo: "/subscriptions",
                        active: !1,
                        "data-a-target": "subscriptions-tab"
                    }, Object(p.d)("Subscriptions", "SettingsTabs")))))
                }, t
            }(d.Component),
            zt = Object(P.compose)(Object(g.d)("SettingsTabs"), Object(j.a)(Bt))(Vt),
            qt = function() {
                return d.createElement(k._4, {
                    fullWidth: !0,
                    display: k.P.Flex,
                    flexDirection: k.R.Column,
                    alignItems: k.c.Center
                }, d.createElement(k.O, {
                    fontSize: k.T.Size2
                }, Object(p.d)("You've gone Turbo!", "CancelTurboLink")), d.createElement(k.O, null, Object(p.d)("We hope you're enjoying your new chat shwag and watching ad-free.", "CancelTurboLink")), d.createElement(k.M, {
                    to: "/products/turbo/ticket/edit"
                }, Object(p.d)("Cancel Turbo", "CancelTurboLink")))
            },
            Wt = n("hRPz"),
            Ht = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return p.a.buildType === v.a.Production ? null : this.props.data.loading && !this.props.data.currentUser ? d.createElement(k._6, {
                        fillContent: !0
                    }) : this.props.data.loading || this.props.data.currentUser ? this.props.data.currentUser && !this.props.data.currentUser.hasTurbo ? this.props.data.currentUser.hasPrime || Object($e.a)(this.props.data.requestInfo.countryCode) ? d.createElement(u.a, {
                        to: "/settings/prime"
                    }) : (window.location.replace("https://www.twitch.tv/products/turbo/ticket"), null) : d.createElement("div", null, d.createElement(E.a, null, d.createElement(be.a, null, d.createElement(qt, null)))) : d.createElement(et, null)
                }, t = c.__decorate([Object(g.d)("SettingsTurboPage", {
                    autoReportInteractive: !0,
                    destination: S.a.SettingsTurbo
                }), Object(b.a)({
                    location: y.PageviewLocation.SettingsPage
                }), Object(j.a)(Wt)], t)
            }(d.Component),
            Gt = 3,
            Jt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.redirectToProfilePage = function() {
                        return d.createElement(u.a, {
                            to: "/settings/profile"
                        })
                    }, t
                }
                return c.__extends(t, e), t.prototype.render = function() {
                    return this.props.isLoggedIn ? d.createElement(k._4, {
                        padding: {
                            x: Gt
                        },
                        fullHeight: !0,
                        fullWidth: !0,
                        display: k.P.Flex,
                        flexDirection: k.R.Column,
                        flexWrap: k.S.NoWrap
                    }, d.createElement(h.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), d.createElement(f.a, null, d.createElement(zt, {
                        tabName: this.props.match.params.tab
                    })), d.createElement(k._4, {
                        padding: {
                            y: 2
                        }
                    }, d.createElement(u.d, null, d.createElement(u.b, {
                        path: "/settings/profile",
                        component: Nt
                    }), d.createElement(u.b, {
                        path: "/settings/prime",
                        component: Ze
                    }), d.createElement(u.b, {
                        path: "/settings/turbo",
                        component: Ht
                    }), d.createElement(u.b, {
                        path: "/settings/channel",
                        component: ke
                    }), d.createElement(u.b, {
                        path: "/settings/security",
                        component: Lt
                    }), d.createElement(u.b, {
                        path: "/settings/notifications",
                        component: Ke
                    }), d.createElement(u.b, {
                        path: "/settings/connections",
                        component: Pe
                    }), d.createElement(u.b, {
                        path: "/settings",
                        render: this.redirectToProfilePage
                    })))) : (this.props.login(), d.createElement(m.a, {
                        message: Object(p.d)("You must be logged in to view this page", "SettingsRoot")
                    }))
                }, t = c.__decorate([Object(g.d)("SettingsRoot", {
                    autoReportInteractive: !0
                })], t)
            }(d.Component),
            Qt = Object(u.e)(Jt);
        var Yt = Object(r.b)(function(e) {
            return {
                isLoggedIn: Object(l.d)(e)
            }
        }, function(e) {
            return Object(a.b)({
                login: function() {
                    return Object(s.f)(o.a.SettingsPage)
                }
            }, e)
        })(Qt);
        n.d(t, "SettingsRoot", function() {
            return Yt
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
            d = function() {
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
        var u = n("UbVv"),
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
                                    return Object(u.a)() ? (b.debug("permissions have been denied. nothing to do here."), [2]) : [4, g()];
                                case 1:
                                    return n.sent(), e = Object(s.d)(a.o.store.getState()), [4, this.hasPushSubscription()];
                                case 2:
                                    return t = n.sent(), c.syncSession(), t ? d.exists() && !d.isEnabled() || !e ? [4, this.unsubscribe()] : [3, 4] : [3, 5];
                                case 3:
                                    n.sent(), n.label = 4;
                                case 4:
                                    return [3, 7];
                                case 5:
                                    return s.d ? !Object(u.b)() || d.exists() && !d.isEnabled() ? [3, 7] : [4, this.subscribe()] : [3, 7];
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
                                    return d.setEnabled(), [4, this.subscribe()];
                                case 1:
                                    return t.sent(), Object(h.c)({
                                        allowed: Object(u.b)(),
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
                                    return d.setDisabled(), [4, this.unsubscribe()];
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
                        return r.__generator(this, function(d) {
                            switch (d.label) {
                                case 0:
                                    if (Object(u.a)()) throw new Error("notification permission is denied");
                                    if (!Object(s.d)(a.o.store.getState())) throw new Error("cannot be enabled logged out");
                                    if (!(e = a.b.get("notification_app_server_public_key", ""))) throw new Error("application server public key is blank");
                                    return [4, g()];
                                case 1:
                                    return t = d.sent(), [4, this.getPushSubscription()];
                                case 2:
                                    return (n = d.sent()) ? [3, 4] : (i = function(e) {
                                        for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), n = atob(t), i = new Uint8Array(n.length), r = 0; r < n.length; ++r) i[r] = n.charCodeAt(r);
                                        return i
                                    }(e), [4, t.pushManager.subscribe({
                                        userVisibleOnly: !0,
                                        applicationServerKey: i
                                    })]);
                                case 3:
                                    n = d.sent(), d.label = 4;
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
                                    return d.sent(), [2]
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
                    bold: !0
                }, e.title))), i.createElement(r._27, {
                    padding: 2,
                    borderTop: !0
                }, t, e.children)
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
            d = n("J8WN"),
            u = n("+8VM"),
            p = n("7vx8"),
            m = n("HZww"),
            g = n("4Q9N"),
            h = n("Tt3k"),
            f = n("W6ca"),
            b = n("xgnX"),
            v = n("CSlQ"),
            S = n("Odds"),
            y = (n("+Aaf"), n("0H+u")),
            k = ["image/*"],
            _ = function(e) {
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
                    if (this.state.loading) n = l.createElement(S._4, {
                        className: "user-image-uploader__upload-svg--anim-fill",
                        position: S._11.Relative,
                        "data-test-selector": "loading-status"
                    }, l.createElement(S._17, {
                        asset: S._18.Upload,
                        type: S._19.Brand,
                        width: 99,
                        height: 76
                    }));
                    else {
                        var i = Object(c.d)("Recommended image size: 1200x380 and less than 10MB.", "UserImageUploader");
                        this.props.imageType === g.a.ChannelOfflineImage && (i = Object(c.d)("Recommended image size: 1920x1080 and less than 10MB.", "UserImageUploader")), n = l.createElement(S._4, null, l.createElement(S._4, {
                            className: "user-image-uploader__upload-info"
                        }, l.createElement(S._4, null, l.createElement(S._17, {
                            asset: S._18.Plus,
                            type: S._19.Alt2,
                            height: 20,
                            width: 20
                        })), l.createElement(S.O, {
                            type: S._41.H3,
                            color: S.J.Alt2,
                            fontSize: S.T.Size4
                        }, Object(c.d)("Upload a Photo", "User Image Uploader"))), l.createElement(S._4, {
                            className: "user-image-uploader__upload-recommendation",
                            position: S._11.Absolute,
                            textAlign: S._37.Left,
                            attachLeft: !0,
                            attachBottom: !0,
                            margin: {
                                left: 3,
                                bottom: 1
                            }
                        }, l.createElement(S.O, {
                            type: S._41.H6,
                            color: S.J.Alt2,
                            fontSize: S.T.Size8,
                            align: S._51.TextBottom
                        }, i)))
                    }
                    var r = null;
                    this.props.showCloser && (r = l.createElement(u.a, null));
                    var a = null;
                    if (null !== this.state.statusMessage) {
                        var o = Object(b.c)(this.state.statusMessage);
                        a = l.createElement(S._8, {
                            label: o.message,
                            type: o.type
                        })
                    }
                    return l.createElement(S._4, {
                        className: "user-image-uploader",
                        position: S._11.Relative,
                        fullHeight: !0
                    }, l.createElement(S._27, {
                        className: "user-image-uploader__background-container",
                        background: S.m.Base,
                        fullWidth: !0
                    }, l.createElement(S._4, {
                        padding: 2,
                        display: S.P.InlineBlock,
                        position: S._11.Relative,
                        textAlign: S._37.Center,
                        fullWidth: !0
                    }, l.createElement(S._27, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(S.O, {
                        type: S._41.H3,
                        fontSize: S.T.Size4
                    }, t)), l.createElement(S._4, {
                        className: "user-image-uploader__upload-container",
                        display: S.P.InlineBlock,
                        position: S._11.Relative,
                        textAlign: S._37.Center,
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(S._4, {
                        className: "user-image-uploader__upload",
                        display: S.P.InlineBlock,
                        position: S._11.Relative,
                        textAlign: S._37.Center
                    }, l.createElement(d.a, {
                        allowedFileTypes: k,
                        onFilesSubmitted: this.onImageInputChange
                    }, n))), l.createElement(S._27, {
                        "data-test-selector": "status-message",
                        fontSize: S.T.Size4,
                        position: S._11.Relative,
                        textAlign: S._37.Center,
                        className: "user-image-uploader__status-message"
                    }, a))), r)
                }, t = s.__decorate([Object(p.a)(y, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(l.Component),
            E = Object(v.d)("User Image Upload")(_);
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
        })(E);
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
            d = n("6sO2"),
            u = n("J8WN"),
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
                    "aria-label": Object(d.d)("Click to select Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar")
                }, c.createElement(f._27, {
                    fullHeight: !0,
                    fullWidth: !0,
                    position: f._11.Relative,
                    className: l(t)
                }, c.createElement("img", {
                    alt: Object(d.d)("Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar"),
                    src: e.imageSrc
                }))))
            }),
            v = n("4Q9N"),
            S = n("Tt3k"),
            y = n("W6ca"),
            k = n("xgnX"),
            _ = n("CSlQ"),
            E = (n("AL3x"), n("nmDn")),
            O = ["image/*"],
            N = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imagePreviewURL: "",
                        profileUpdated: !1,
                        currentImageHasTallAspectRatio: !1,
                        imageFormat: ""
                    }, t.currentImage = null, t.logger = d.j.withCategory("ProfileImagePicker"), t.onImageInputChange = function(e) {
                        var n;
                        if (null !== e) {
                            n = e[0];
                            var i = Object(S.a)(n),
                                r = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(r, 10) > 10 ? t.setState({
                                statusMessage: k.b.BadSizeError
                            }) : (t.setState({
                                selectedImageIndex: void 0,
                                imagePreviewURL: "",
                                imageFormat: "",
                                currentImageHasTallAspectRatio: !1
                            }), Object(S.b)(n, function(e) {
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
                                        return o.trys.push([1, 3, , 4]), [4, Object(y.a)(this.props.userID, this.props.authToken, v.a.ProfileImage, this.state.imageFormat)];
                                    case 2:
                                        return t = o.sent(), n = t.upload_url, i = t.upload_id, [3, 4];
                                    case 3:
                                        return r = o.sent(), this.logger.error(r, "Request for upload ID failed to get expected response from server."), this.setState({
                                            statusMessage: k.b.UnexpectedError
                                        }), [2];
                                    case 4:
                                        return this.unsubscribe = d.k.subscribe({
                                            topic: Object(h.i)(this.props.userID),
                                            success: function() {
                                                try {
                                                    Object(y.c)(n, a.currentImage)
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
                    }, Object(d.d)("Upload a Photo", "Profile Edit"))));
                    var a = null;
                    this.props.showCloser && (a = c.createElement(p.a, null));
                    var o = null;
                    if (null !== this.state.statusMessage) {
                        var s = Object(k.c)(this.state.statusMessage),
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
                    }, Object(d.d)("Edit Profile Picture for {userName}", {
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
                    }, c.createElement(u.a, {
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
                    }, Object(d.d)("Or select one of these", "Profile Edit"))), c.createElement(f._47, {
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
                    }, Object(d.d)("Update", "Profile Edit"))))), a)
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
                                    return i.trys.push([1, 3, , 4]), [4, Object(y.b)(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
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
            }(c.Component),
            w = Object(_.d)("Profile Edit")(N);
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
        })(w);
        n.d(t, "a", function() {
            return C
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
    yU6t: function(e, t) {},
    zpQV: function(e, t) {}
});
//# sourceMappingURL=pages.settings-b763a2be94486d1ff922979ac8135890.js.map