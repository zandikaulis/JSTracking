webpackJsonp([53], {
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
    "4Q9N": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.ProfileImage = "profile_image", e.ProfileBanner = "profile_banner", e.ChannelOfflineImage = "channel_offline_image"
        }(i || (i = {}))
    },
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var i = n("TToO"),
            a = n("6sO2"),
            r = n("Aj/L"),
            o = "application/json; charset=UTF-8",
            s = function() {
                function e() {}
                return e.get = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        return i.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.request(e, i.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, a.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, void 0, function() {
                        var a, r;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), a = t.headers ? t.headers["Content-Type"] : void 0, t.body = this.serialize(t.body, a), [4, this._fetch(e, t)];
                                case 1:
                                    return r = i.sent(), [4, this.constructLegacyAPIResponse(r)];
                                case 2:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, a.n.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n, a;
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
                                    return a = i.sent(), t.requestError = a, [3, 4];
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
                    return t === o ? JSON.stringify(e) : e
                }, e.getDefaultHeaders = function(e, t) {
                    var n = a.n.store.getState(),
                        i = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": a.n.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = o);
                    var s = Object(r.c)(n);
                    return s && (i.Authorization = "OAuth " + s.authToken, s.legacyCSRFToken && (i["Twitch-Api-Token"] = s.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
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

        function i(e, t) {
            return e === a.SECOND ? Object(r.d)("{secondCount, plural, one {# second} other {# seconds}}", {
                secondCount: t
            }, "formatDuration") : e === a.MINUTE ? Object(r.d)("{minuteCount, plural, one {# minute} other {# minutes}}", {
                minuteCount: t
            }, "formatDuration") : e === a.DAY ? Object(r.d)("{dayCount, plural, one {# day} other {# days}}", {
                dayCount: t
            }, "formatDuration") : e === a.HOUR ? Object(r.d)("{hourCount, plural, one {# hour} other {# hours}}", {
                hourCount: t
            }, "formatDuration") : e === a.WEEK ? Object(r.d)("{weekCount, plural, one {# week} other {# weeks}}", {
                weekCount: t
            }, "formatDuration") : e === a.MONTH ? Object(r.d)("{monthCount, plural, one {# month} other {# months}}", {
                monthCount: t
            }, "formatDuration") : ""
        }
        t.a = function(e) {
            if (e < 60) return i(a.SECOND, e);
            var t = Math.floor(e / 60),
                n = e % 60;
            if (t < 60) return n ? i(a.MINUTE, t) + " " + i(a.SECOND, n) : i(a.MINUTE, t);
            var r = Math.floor(t / 60);
            if (t %= 60, r < 24) return t ? i(a.HOUR, r) + " " + i(a.MINUTE, t) : i(a.HOUR, r);
            var o = Math.floor(r / 24);
            if (r %= 24, o < 7) return r ? i(a.DAY, o) + " " + i(a.HOUR, r) : i(a.DAY, o);
            if (o <= 26) {
                var s = Math.floor(o / 7);
                return (o %= 7) ? i(a.WEEK, s) + " " + i(a.DAY, o) : i(a.WEEK, s)
            }
            var l = Math.round((o + 3) / 30);
            return i(a.MONTH, l)
        };
        var a, r = n("6sO2");
        ! function(e) {
            e[e.SECOND = 0] = "SECOND", e[e.MINUTE = 1] = "MINUTE", e[e.HOUR = 2] = "HOUR", e[e.DAY = 3] = "DAY", e[e.WEEK = 4] = "WEEK", e[e.MONTH = 5] = "MONTH"
        }(a || (a = {}))
    },
    J8WN: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var i = n("TToO"),
            a = n("U7vG"),
            r = (n.n(a), n("Odds")),
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
                    return a.createElement(r.O, {
                        dragOver: this.state.isDraggingOver,
                        error: this.props.error
                    }, a.createElement(r.W, {
                        position: r._9.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        zIndex: r._52.Above
                    }, a.createElement("input", {
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
            }(a.Component))
    },
    JBcW: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), t.c = function(e) {
            a.m.track(r.SpadeEventType.BrowserPushNotificationPrompt, e)
        }, t.b = function(e) {
            a.m.track(r.SpadeEventType.BrowserPushNotificationDisable, e)
        };
        var i, a = n("6sO2"),
            r = n("vH/s");
        (i || (i = {})).Settings = "settings"
    },
    K4jf: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = null;
            return e.description && (t = p.createElement(N._2, {
                margin: {
                    top: 1
                }
            }, p.createElement(N._35, {
                color: N.I.Alt2
            }, e.description))), p.createElement(N._2, {
                margin: {
                    top: 2,
                    bottom: 4
                }
            }, p.createElement(N._35, {
                type: N._40.H3,
                fontSize: N.R.Size2
            }, e.title), t)
        }

        function a() {
            return p.createElement(I, {
                label: Object(g.d)("Password", "ChangePasswordLink"),
                orientation: N.T.Horizontal
            }, p.createElement(N._35, null, Object(g.d)("<x:link>Change password.</x:link> Improve your security with a strong password.", {
                "x:link": function(e) {
                    return p.createElement("a", {
                        key: "change-password-link",
                        href: "https://passport.twitch.tv/passwords/new?"
                    }, e)
                }
            }, "ChangePasswordLink")))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, o = n("RH2O"),
            s = n("2KeS"),
            l = n("+xm8"),
            c = n("f2i/"),
            d = n("Aj/L"),
            u = n("TToO"),
            p = n("U7vG"),
            m = n("CIox"),
            g = n("6sO2"),
            f = n("yWCw"),
            h = n("CSlQ"),
            b = n("eXld"),
            v = n("2aoH"),
            S = n("j7/Y"),
            y = n("Ejve"),
            k = n("w9tK"),
            _ = n("vH/s"),
            E = n("H4lr"),
            N = n("Odds");
        ! function(e) {
            e[e.NoChanges = 0] = "NoChanges", e[e.DirtyChanges = 1] = "DirtyChanges", e[e.Working = 2] = "Working", e[e.Success = 3] = "Success", e[e.Error = 4] = "Error"
        }(r || (r = {}));
        var w, O = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    var e = N.y.Default,
                        t = Object(g.d)("Save Changes", "SaveSettingsFooter"),
                        n = N.z.Default,
                        i = !1;
                    return this.props.status === r.Working ? e = N.y.Loading : this.props.status === r.Success ? e = N.y.Success : this.props.status === r.Error ? (n = N.z.Alert, t = Object(g.d)("Failed to save settings. Try again.", "SaveSettingsFooter")) : this.props.status === r.NoChanges && (i = !0), p.createElement(E.a, null, p.createElement(N._25, {
                        borderTop: !0,
                        display: N.N.Flex,
                        alignItems: N.c.Center,
                        justifyContent: N._1.Center,
                        padding: {
                            y: 2
                        },
                        margin: {
                            x: kt
                        }
                    }, p.createElement(N.u, {
                        disabled: i,
                        size: N.x.Large,
                        state: e,
                        type: n,
                        onClick: this.props.onClickSave,
                        "data-a-target": "save-user-settings-button"
                    }, t)))
                }, t
            }(p.Component),
            C = n("F8kA"),
            P = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderDashboardLink = function(e) {
                        return t.props.user ? p.createElement(C.a, {
                            key: "link",
                            to: "/" + t.props.user.login + "/dashboard/settings/autohost"
                        }, e) : p.createElement("span", {
                            key: "autohost-no-link"
                        }, "text")
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    var e = Object(g.d)("Auto Host settings have moved. You can find them in <x:link>your dashboard</x:link>.", {
                        "x:link": this.renderDashboardLink
                    }, "SettingsChannelPage");
                    return p.createElement(i, {
                        title: Object(g.d)("Auto Hosting", "AutohostSettingsComponent"),
                        description: e
                    })
                }, t
            }(p.Component),
            j = Object(o.b)(function(e) {
                return {
                    user: Object(d.c)(e)
                }
            })(P),
            U = n("3zLD"),
            x = n("7vx8"),
            T = function(e) {
                return p.createElement(N._2, {
                    margin: {
                        top: 1
                    }
                }, p.createElement(N._35, {
                    color: N.I.Alt,
                    "data-a-target": e.dataTarget
                }, e.text))
            },
            I = (n("l+ac"), function(e) {
                return p.createElement(N._2, {
                    className: "settings-form-group",
                    margin: {
                        bottom: 4
                    }
                }, p.createElement(N.S, {
                    error: e.error,
                    errorMessage: e.errorMessage || Object(g.d)("Sorry, something went wrong. Please try again later.", "SettingsFormGroup"),
                    hint: e.hint,
                    id: e.id,
                    label: e.label,
                    labelOptional: e.labelOptional,
                    orientation: e.orientation || N.T.Horizontal
                }, e.children))
            }),
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderBody = function() {
                        return t.props.showPlaceholder ? p.createElement(N._8, null) : p.createElement(N._2, null, p.createElement(N._42, {
                            checked: t.props.checked,
                            error: t.props.error,
                            disabled: t.props.disabled,
                            onChange: t.onChange,
                            id: t.props.id
                        }), p.createElement(T, {
                            text: t.props.description
                        }))
                    }, t.onChange = function(e) {
                        t.props.onChange && t.props.onChange(e.currentTarget.checked)
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return p.createElement(I, {
                        id: this.props.id,
                        label: this.props.label,
                        error: this.props.error,
                        errorMessage: this.props.errorMessage,
                        orientation: N.T.Horizontal
                    }, this.renderBody())
                }, t
            }(p.Component),
            F = function(e) {
                var t = e.saving || e.errorLoading;
                return p.createElement(D, {
                    id: "settings-channel-page-block-hyperlinks",
                    label: Object(g.d)("Block Hyperlinks", "BlockHyperlinksToggle"),
                    description: Object(g.d)("Your channel's chat will automatically delete posted URLs except for ones posted by you, moderators, and admins.", "BlockHyperlinksToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            A = n("ar1V"),
            R = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        errorSaving: !1,
                        checked: !1
                    }, t.onChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
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
                    var e = this.props.data.currentUser;
                    return p.createElement(F, {
                        loading: this.props.data.loading && !e,
                        saving: this.state.saving,
                        checked: this.state.checked,
                        errorLoading: !!this.props.data.error && !e,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onChange
                    })
                }, t
            }(p.Component),
            L = Object(U.compose)(Object(h.d)("BlockHyperlinksToggle"), Object(x.a)(A))(R),
            M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        var n = +e.currentTarget.value;
                        t.props.onChange(n)
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.loading || this.props.saving || this.props.errorLoading,
                        n = [{
                            delay: 0,
                            label: Object(g.d)("Off", "ChatDelayRadioButtons"),
                            selected: 0 === this.props.chatDelayMs
                        }, {
                            delay: 2e3,
                            label: Object(g.d)("2 seconds", "ChatDelayRadioButtons"),
                            selected: 2e3 === this.props.chatDelayMs
                        }, {
                            delay: 4e3,
                            label: Object(g.d)("4 seconds", "ChatDelayRadioButtons"),
                            selected: 4e3 === this.props.chatDelayMs
                        }, {
                            delay: 6e3,
                            label: Object(g.d)("6 seconds", "ChatDelayRadioButtons"),
                            selected: 6e3 === this.props.chatDelayMs
                        }];
                    return p.createElement(I, {
                        orientation: N.T.Horizontal,
                        label: Object(g.d)("Non-Mod Chat Delay", "ChatDelayRadioButtons"),
                        error: this.props.errorLoading || this.props.errorSaving
                    }, p.createElement(N._2, {
                        display: N.N.Flex,
                        flexDirection: N.P.Row
                    }, n.map(function(n) {
                        var i = "chat-delay:" + n.label;
                        return p.createElement(N._2, {
                            key: i,
                            margin: {
                                right: 2
                            },
                            display: N.N.Flex,
                            flexDirection: N.P.Row
                        }, p.createElement(N._14, {
                            checked: n.selected,
                            value: n.delay.toString(),
                            label: n.label,
                            name: "Non-Mod Chat Delay: " + n.delay / 1e3 + "s",
                            onChange: e.onChange,
                            disabled: t,
                            "data-test-selector": "chat-delay-radio:" + n.delay
                        }))
                    })), p.createElement(T, {
                        text: Object(g.d)("Adds a short delay before non-mods see messages. Any message that is timed out or banned during the delay is removed from chat completely.", "ChatDelayRadioButtons")
                    }))
                }, t
            }(p.Component),
            B = n("D2cp"),
            V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        errorSaving: !1,
                        chatDelayMs: 0
                    }, t.onChange = function(e) {
                        t.setState({
                            chatDelayMs: e,
                            saving: !0
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (!e.data.loading && this.props.data.loading) {
                        var t = this.getChatDelayFromProps(e);
                        this.setState({
                            chatDelayMs: t
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser;
                    return p.createElement(M, {
                        chatDelayMs: this.state.chatDelayMs,
                        saving: this.state.saving,
                        loading: this.props.data.loading && !e,
                        errorLoading: !!this.props.data.error && !e,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onChange
                    })
                }, t.prototype.getChatDelayFromProps = function(e) {
                    var t = e.data.currentUser;
                    return t && t.chatSettings && t.chatSettings.chatDelayMs || 0
                }, t
            }(p.Component),
            z = Object(U.compose)(Object(h.d)("ChatDelayRadioButtons"), Object(x.a)(B))(V),
            q = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    var e = null,
                        t = this.props.loading || this.props.saving || this.props.errorLoading;
                    return (this.props.dirty || this.props.saving) && (e = p.createElement(N._2, {
                        margin: {
                            top: 1
                        }
                    }, p.createElement(N.u, {
                        onClick: this.props.onClickSave,
                        state: this.props.saving ? N.y.Loading : N.y.Default
                    }, Object(g.d)("Save Changes", "ChatRulesTextArea")))), p.createElement(I, {
                        orientation: N.T.Horizontal,
                        label: Object(g.d)("Chat Rules", "ChatRulesTextArea"),
                        error: this.props.errorLoading || this.props.errorSaving
                    }, p.createElement(N._37, {
                        disabled: t,
                        value: this.props.rules,
                        onChange: this.props.onChange,
                        rows: 5
                    }), p.createElement(T, {
                        text: Object(g.d)("Require first-time viewers to agree to your rules before chatting. One rule per line.", "ChatRulesTextArea")
                    }), e)
                }, t
            }(p.Component),
            W = n("WaOj"),
            H = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        errorSaving: !1,
                        rules: ""
                    }, t.onChange = function(e) {
                        t.setState({
                            rules: e.currentTarget.value
                        })
                    }, t.onClickSave = function() {
                        t.setState({
                            saving: !0
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
                    e.data.loading && !this.props.data.loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    if (!e.data.loading && this.props.data.loading) {
                        var t = this.getRulesFromProps(e);
                        this.setState({
                            rules: t
                        })
                    }
                }, t.prototype.render = function() {
                    var e = this.props.data.currentUser,
                        t = this.getRulesFromProps(this.props);
                    return p.createElement(q, {
                        rules: this.state.rules,
                        dirty: t !== this.state.rules,
                        saving: this.state.saving,
                        loading: this.props.data.loading && !e,
                        errorLoading: !!this.props.data.error && !e,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onChange,
                        onClickSave: this.onClickSave
                    })
                }, t.prototype.getRulesFromProps = function(e) {
                    var t = e.data.currentUser;
                    return t && t.chatSettings && t.chatSettings.rules.join("\n") || ""
                }, t
            }(p.Component),
            G = Object(U.compose)(Object(h.d)("ChatRulesTextArea"), Object(x.a)(W))(H),
            Q = function(e) {
                var t = e.saving || e.errorLoading;
                return p.createElement(D, {
                    id: "settings-channel-page-email-verification",
                    label: Object(g.d)("Email Verification", "EmailVerificationToggle"),
                    description: Object(g.d)("Anyone that would like to send messages to your chat room must first verify their email address.", "EmailVerificationToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            Y = n("woYr"),
            J = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saving: !1,
                        errorSaving: !1,
                        checked: !1
                    }, t.onChange = function(e) {
                        t.setState({
                            checked: e,
                            saving: !0
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
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
                    var e = this.props.data.currentUser;
                    return p.createElement(Q, {
                        loading: this.props.data.loading && !e,
                        saving: this.state.saving,
                        checked: this.state.checked,
                        onChange: this.onChange,
                        errorLoading: !!this.props.data.error && !e,
                        errorSaving: this.state.errorSaving
                    })
                }, t
            }(p.Component),
            K = Object(U.compose)(Object(h.d)("EmailVerificationToggle"), Object(x.a)(Y))(J),
            $ = function(e) {
                var t = e.errorSaving || e.errorLoading;
                return p.createElement(D, {
                    id: "settings-channel-page-mature-content",
                    label: Object(g.d)("Mature Content", "MatureContentToggle"),
                    description: Object(g.d)("Enable this setting if your stream contains content that may be inappropriate for younger audiences. You may never broadcast sexual activity, nudity, threats or extreme violence. Doing so will result in immediate, irrevocable termination of your account. Please make sure your content will comply with the <x:link>Terms of Service</x:link> before broadcasting", {
                        "x:link": function(e) {
                            return p.createElement("a", {
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
            X = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        checked: !1,
                        saving: !1,
                        loading: !1,
                        errorSaving: !1,
                        errorLoading: !1
                    }, t.onCheckBoxChange = function(e) {
                        t.setState({
                            checked: e
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return p.createElement($, {
                        checked: this.state.checked,
                        saving: this.state.saving,
                        loading: this.state.loading,
                        errorLoading: this.state.errorLoading,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onCheckBoxChange
                    })
                }, t
            }(p.Component),
            Z = n("V5M+"),
            ee = n("ebTC"),
            te = n("4Q9N"),
            ne = n("J4ib"),
            ie = n("vm+z"),
            ae = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.showModal = function() {
                        t.props.user && t.props.showUploaderModal(t.props.user)
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    var e = null,
                        t = null;
                    if (this.props.data && this.props.data.user && this.props.data.user.offlineImageURL) {
                        e = p.createElement("img", {
                            "data-test-selector": "test-channel-offline-image-selector",
                            height: "90",
                            width: "160",
                            src: this.props.data.user.offlineImageURL
                        });
                        var n = Object(ne.d)("Remove my Video Player Banner Image", "UploadVideoPlayerBanner");
                        t = p.createElement(N.v, {
                            icon: N._16.Trash,
                            ariaLabel: n
                        })
                    }
                    return p.createElement(N._2, null, p.createElement(i, {
                        title: Object(ne.d)("Video Player Banner", "UploadVideoPlayerBanner"),
                        description: Object(ne.d)("This is displayed on the player when your channel is offline.", "UploadVideoPlayerBanner")
                    }), p.createElement(N._2, {
                        display: N.N.Flex
                    }, e, p.createElement(N._2, {
                        padding: {
                            left: 1,
                            top: 1
                        }
                    }, p.createElement(N._2, {
                        display: N.N.Flex
                    }, p.createElement(N.u, {
                        "data-test-selector": "test-upload-video-player-banner-selector",
                        onClick: this.showModal
                    }, "Update"), t), p.createElement(T, {
                        text: Object(ne.d)("Max 10mb GIF, JPG, or PNG", "UploadVideoPlayerBanner")
                    }))))
                }, t = u.__decorate([Object(x.a)(ie, {
                    options: function(e) {
                        return {
                            skip: !e.user,
                            variables: {
                                login: e.user && e.user.login
                            }
                        }
                    }
                })], t)
            }(p.Component),
            re = Object(o.b)(function(e) {
                return {
                    user: Object(d.c)(e)
                }
            }, function(e) {
                return Object(s.b)({
                    showUploaderModal: function(e) {
                        return Object(Z.d)(ee.a, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            imageType: te.a.ChannelOfflineImage,
                            showCloser: !0
                        })
                    }
                }, e)
            })(ae),
            oe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: r.NoChanges
                    }, t.renderContentSettingsSection = function() {
                        return p.createElement(N._2, null, p.createElement(i, {
                            title: Object(g.d)("Content Settings", "SettingsChannelPage"),
                            description: Object(g.d)("Choose how your channel will display for certain users", "SettingsChannelPage")
                        }), p.createElement(X, null))
                    }, t.renderChatSettingsSection = function() {
                        return p.createElement(N._2, null, p.createElement(i, {
                            title: Object(g.d)("Chat Options", "SettingsChannelPage"),
                            description: Object(g.d)("Moderate your channel's chat and who you allow in it", "SettingsChannelPage")
                        }), p.createElement(L, null), p.createElement(K, null), p.createElement(G, null), p.createElement(z, null))
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: r.Working
                        }, function() {})
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return g.a.buildType === y.a.Production ? null : p.createElement("div", null, p.createElement(re, null), this.renderContentSettingsSection(), this.renderChatSettingsSection(), p.createElement(j, null), p.createElement(O, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    }))
                }, t = u.__decorate([Object(h.d)("SettingsChannelPage", {
                    autoReportInteractive: !0,
                    destination: k.a.SettingsChannel
                }), Object(S.a)({
                    location: _.PageviewLocation.SettingsPage
                })], t)
            }(p.Component),
            se = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: r.NoChanges
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: r.Working
                        }, function() {})
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return g.a.buildType === y.a.Production ? null : p.createElement("div", null, p.createElement(O, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    }))
                }, t = u.__decorate([Object(h.d)("SettingsConnectionsPage", {
                    autoReportInteractive: !0,
                    destination: k.a.SettingsConnections
                }), Object(S.a)({
                    location: _.PageviewLocation.SettingsPage
                })], t)
            }(p.Component),
            le = n("OAwv"),
            ce = n("LBNC"),
            de = n("UbVv"),
            ue = n("zCIC"),
            pe = n("oIkB"),
            me = (n("hPJb"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.userId, t.props.isEnabled)
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return p.createElement(N._25, {
                        className: "advanced-notification-settings-toggle",
                        display: N.N.Flex,
                        justifyContent: N._1.Between,
                        background: N.m.Base,
                        padding: {
                            x: 5,
                            y: 1
                        },
                        borderBottom: !0
                    }, p.createElement(N._2, {
                        margin: {
                            left: 5
                        },
                        display: N.N.Flex,
                        flexGrow: 1,
                        alignItems: N.c.Center,
                        flexWrap: N.Q.NoWrap
                    }, p.createElement(N._2, {
                        display: N.N.Flex,
                        flexGrow: 1,
                        flexWrap: N.Q.NoWrap
                    }, p.createElement(N._2, {
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, p.createElement(N._0, {
                        linkTo: "/" + this.props.login
                    }, p.createElement(N.l, {
                        src: this.props.thumbnail,
                        alt: this.props.text,
                        size: 40
                    }))), p.createElement(N._2, {
                        flexGrow: 1,
                        display: N.N.Flex,
                        flexDirection: N.P.Column
                    }, p.createElement(N._35, {
                        fontSize: N.R.Size5
                    }, p.createElement(C.a, {
                        to: "/" + this.props.login
                    }, this.props.text)), p.createElement(N._35, {
                        type: N._40.Span,
                        color: N.I.Alt2
                    }, this.props.description))), p.createElement(N._2, {
                        display: N.N.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, p.createElement(N._2, {
                        margin: {
                            right: 1
                        }
                    }, p.createElement(N._42, {
                        checked: this.props.isEnabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector",
                        id: this.props.userId
                    })), p.createElement(N._2, {
                        className: this.props.saved ? "advanced-notification-settings-toggle__saved" : "advanced-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, p.createElement(N._35, {
                        fontSize: N.R.Size5,
                        color: N.I.Link
                    }, Object(g.d)("Saved", "AdvancedNotificationSettingsToggle"))))))
                }, t
            }(p.Component)),
            ge = n("AQCV"),
            fe = (n("t4xU"), n("EaRL")),
            he = function(e) {
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
                        return u.__awaiter(t, void 0, void 0, function() {
                            var t, i, a;
                            return u.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setAdvancedNotificationSetting ? (t = u.__assign({}, Object(pe.a)({
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
                                        return i = r.sent(), a = function(t) {
                                            if (!t.currentUser) return t;
                                            for (var n = 0, a = t.currentUser.follows.edges; n < a.length; n++) {
                                                var r = a[n];
                                                r.node.id === e && (r.notificationSettings.isEnabled = !i.data.followUser.follow.disableNotifications)
                                            }
                                            return t
                                        }, Object(pe.d)(fe, {
                                            limit: 50
                                        }, a), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return p.createElement(N._25, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, p.createElement(N._4, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return p.createElement(f.a, {
                        message: Object(g.d)("Error loading data.", "AdvancedNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return p.createElement(N._25, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, p.createElement(f.a, {
                        message: Object(g.d)("You must be logged in to update your settings", "AdvancedNotificationSettings")
                    }));
                    var e = Object(g.d)("{followCount, plural, one {You follow # channel} other {You follow # channels}}", {
                            followCount: this.props.data.currentUser.follows.totalCount
                        }, "AdvancedNotificationSettings"),
                        t = p.createElement(N._25, {
                            background: N.m.Alt2,
                            borderBottom: !0
                        }, p.createElement(N._0, {
                            onClick: this.toggleCollapse,
                            alpha: !0,
                            "data-test-selector": "header-selector"
                        }, p.createElement(N._2, {
                            display: N.N.Flex,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, p.createElement(N._2, {
                            className: "advanced-notification-settings__header",
                            flexGrow: 0
                        }, p.createElement(N._35, {
                            fontSize: N.R.Size5,
                            color: N.I.Alt2,
                            bold: !0
                        }, Object(g.d)("Advanced", "AdvancedNotificationSettings"))), p.createElement(N._2, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, p.createElement(N._35, {
                            "data-test-selector": "description-selector",
                            fontSize: N.R.Size5,
                            color: N.I.Alt2
                        }, e)), p.createElement(N._2, {
                            className: this.state.collapsed ? "advanced-notification-settings--collapse" : "advanced-notification-settings--expand",
                            flexGrow: 0,
                            flexShrink: 1,
                            display: N.N.Flex,
                            justifyContent: N._1.Center
                        }, p.createElement(N._15, {
                            asset: N._16.AngleRight,
                            type: N._17.Alt2
                        }))))),
                        n = !this.props.data.loading && !this.props.data.error && !!this.props.data.currentUser.follows.pageInfo.hasNextPage;
                    return this.props.data.currentUser.follows.totalCount > 0 ? this.state.collapsed ? p.createElement(N._25, null, t) : p.createElement(N._25, null, t, p.createElement(N._25, {
                        borderBottom: !0,
                        padding: 2
                    }, p.createElement(N._2, {
                        padding: {
                            bottom: 1
                        }
                    }, p.createElement(N._35, {
                        fontSize: N.R.Size5,
                        color: N.I.Alt2
                    }, Object(g.d)("Manage which channels you receive notifications for.", "AdvancedNotificationSettings"))), p.createElement(N._2, {
                        padding: {
                            bottom: 1
                        }
                    }, p.createElement(N._35, {
                        fontSize: N.R.Size4,
                        color: N.I.Alt
                    }, e)), p.createElement(N._25, {
                        className: "advanced-notification-settings__toggle-container",
                        borderTop: !0,
                        borderLeft: !0,
                        borderRight: !0,
                        margin: {
                            bottom: .5
                        }
                    }, this.renderToggles(), p.createElement(ue.a, {
                        loadMore: this.props.loadMore,
                        enabled: n,
                        pixelThreshold: 200
                    })))) : null
                }, t.prototype.renderToggles = function() {
                    if (this.props.data && !this.props.data.loading && this.props.data.currentUser) {
                        for (var e = [], t = 0, n = this.props.data.currentUser.follows.edges; t < n.length; t++) {
                            var i = n[t];
                            i.node && i.node.id && i.node.followers && e.push(p.createElement(me, {
                                userId: i.node.id,
                                text: i.node.displayName,
                                login: i.node.login,
                                description: Object(g.d)("{followerCount,number} followers", {
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
            }(p.Component),
            be = Object(s.d)(Object(x.a)(fe, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network",
                        variables: {
                            limit: 50
                        }
                    }
                },
                props: function(e) {
                    return u.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: fe,
                                variables: u.__assign({}, e.data.variables, {
                                    cursor: e.data.currentUser && e.data.currentUser.follows.edges[e.data.currentUser.follows.edges.length - 1].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult;
                                    return e.currentUser && n.currentUser ? {
                                        currentUser: u.__assign({}, n.currentUser, {
                                            follows: u.__assign({}, n.currentUser.follows, {
                                                edges: Object(pe.b)(e.currentUser.follows.edges, n.currentUser.follows.edges)
                                            })
                                        })
                                    } : n
                                }
                            })
                        }
                    })
                }
            }), Object(x.a)(ge, {
                name: "setAdvancedNotificationSetting"
            }), Object(h.d)("AdvancedNotificationSettings"))(he),
            ve = n("OOv5"),
            Se = n("JBcW"),
            ye = (n("mVHD"), g.n.logger.withCategory("browser-push-notifications-settings")),
            ke = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hide: !1,
                        loading: !0,
                        deciding: !0,
                        hasSubscription: !1
                    }, t.toggle = function() {
                        return u.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return u.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.setState({
                                            deciding: !0
                                        }), [4, ve.a.hasPushSubscription()];
                                    case 1:
                                        if (!n.sent()) return [3, 6];
                                        n.label = 2;
                                    case 2:
                                        return n.trys.push([2, 4, , 5]), [4, ve.a.userUnsubscribe(Se.a.Settings)];
                                    case 3:
                                        return n.sent(), [3, 5];
                                    case 4:
                                        return e = n.sent(), ye.error(e, "user unsubscribe failed"), [3, 5];
                                    case 5:
                                        return [3, 9];
                                    case 6:
                                        return n.trys.push([6, 8, , 9]), [4, ve.a.userSubscribe(Se.a.Settings)];
                                    case 7:
                                        return n.sent(), [3, 9];
                                    case 8:
                                        return t = n.sent(), Object(de.a)() ? (this.setState({
                                            hide: !0
                                        }), [2]) : (ye.error(t, "user subscribe failed"), [3, 9]);
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
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    return u.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return u.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 3, , 4]), [4, ve.a.initialize()];
                                case 1:
                                    return t.sent(), [4, this.updateSubscriptionState()];
                                case 2:
                                    return t.sent(), [3, 4];
                                case 3:
                                    return e = t.sent(), ye.error(e, "unexpected error initializing push manager"), this.setState({
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
                    var e = this.state.hasSubscription ? Object(g.d)("Turn Off", "BrowserPushNotificationsSettings") : Object(g.d)("Turn On", "BrowserPushNotificationsSettings");
                    return p.createElement(N._25, {
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
                    }, p.createElement(N._25, {
                        className: "browser-push-notification-settings",
                        padding: {
                            left: 5,
                            right: 4
                        },
                        display: N.N.Flex,
                        margin: {
                            x: 5
                        }
                    }, p.createElement(N._2, {
                        className: "browser-push-notification-settings__body",
                        display: N.N.Flex,
                        flexWrap: N.Q.NoWrap,
                        flexGrow: 1
                    }, p.createElement(N._2, {
                        margin: {
                            right: 1
                        },
                        flexGrow: 1
                    }, p.createElement(N._35, {
                        fontSize: N.R.Size4,
                        color: N.I.Alt
                    }, Object(g.d)("Receive Browser Notifications for this Device", "BrowserPushNotificationsSettings")), p.createElement(N._2, {
                        padding: {
                            top: .5
                        }
                    }, p.createElement(N._35, {
                        fontSize: N.R.Size5,
                        color: N.I.Alt2
                    }, Object(g.d)("See notifications at the corner of your screen, even when you’re not on Twitch", "BrowserPushNotificationsSettings")))), p.createElement(N._2, {
                        flexShrink: 0
                    }, p.createElement(N.u, {
                        "data-test-selector": "qa-browser-push-notifications-settings-toggle",
                        disabled: this.state.deciding,
                        onClick: this.toggle
                    }, e)))))
                }, t.prototype.updateSubscriptionState = function() {
                    return u.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return u.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, ve.a.hasPushSubscription()];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        hasSubscription: e
                                    }), [2]
                            }
                        })
                    })
                }, t
            }(p.Component),
            _e = Object(U.compose)(Object(h.d)("BrowserPushNotificationsSettings"))(ke),
            Ee = (n("iOZM"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.category, t.props.isEnabled)
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return p.createElement(N._25, {
                        className: "platform-notification-settings-toggle",
                        display: N.N.Flex,
                        flexWrap: N.Q.NoWrap,
                        alignItems: N.c.Start,
                        background: N.m.Alt,
                        margin: {
                            top: 1,
                            bottom: .5
                        },
                        padding: {
                            right: 5
                        }
                    }, p.createElement(N._2, {
                        className: "platform-notification-settings-toggle__body",
                        display: N.N.Flex,
                        flexDirection: N.P.Column,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, p.createElement(N._2, {
                        margin: {
                            bottom: .5
                        }
                    }, p.createElement(N._35, {
                        fontSize: N.R.Size4
                    }, this.props.text)), p.createElement(N._35, {
                        fontSize: N.R.Size5,
                        color: N.I.Alt2
                    }, this.props.description)), p.createElement(N._2, {
                        display: N.N.Flex,
                        margin: {
                            top: .5
                        },
                        flexGrow: 0,
                        flexShrink: 0
                    }, p.createElement(N._2, {
                        margin: {
                            right: 1
                        }
                    }, p.createElement(N._42, {
                        checked: this.props.isEnabled,
                        disabled: this.props.disabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector"
                    })), p.createElement(N._2, {
                        className: this.props.saved ? "platform-notification-settings-toggle__saved" : "platform-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, p.createElement(N._35, {
                        fontSize: N.R.Size5,
                        color: N.I.Link
                    }, Object(g.d)("Saved", "PlatformNotificationSettingsToggle")))))
                }, t
            }(p.Component)),
            Ne = n("g+dK"),
            we = (n("RC0U"), n("1f5k"));
        ! function(e) {
            e.onsite = "onsite", e.email = "email", e.push = "push"
        }(w || (w = {}));
        var Oe, Ce = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        collapsed: t.props.startCollapsed,
                        saved: new Set
                    }, t.VisibleSettings = [{
                        category: "LIVE",
                        name: Object(g.d)("Live", "PlatformNotificationSettings"),
                        description: Object(g.d)("When a streamer I follow goes Live", "PlatformNotificationSettings")
                    }, {
                        category: "VIDEOS",
                        name: Object(g.d)("Video Broadcast", "PlatformNotificationSettings"),
                        description: Object(g.d)("When a channel I follow starts a Vodcast. This also includes Video Comment notifications", "PlatformNotificationSettings")
                    }, {
                        category: "CLIPS",
                        name: Object(g.d)("Clips", "PlatformNotificationSettings"),
                        description: Object(g.d)("Receive notifications for clips you made and clips made by your viewers", "PlatformNotificationSettings")
                    }, {
                        category: "EVENTS",
                        name: Object(g.d)("Events", "PlatformNotificationSettings"),
                        description: Object(g.d)("Any time an event I follow starts", "PlatformNotificationSettings")
                    }, {
                        category: "CHAT",
                        name: Object(g.d)("Chat", "PlatformNotificationSettings"),
                        description: Object(g.d)("Any time there’s Rooms activity related to me.", "PlatformNotificationSettings")
                    }, {
                        category: "FRIENDS",
                        name: Object(g.d)("Friends", "PlatformNotificationSettings"),
                        description: Object(g.d)("When a friend sends me a message", "PlatformNotificationSettings")
                    }, {
                        category: "STREAMER",
                        name: Object(g.d)("Your Channel", "PlatformNotificationSettings"),
                        description: Object(g.d)("Receive notifications when viewers follow your channel or auto host you", "PlatformNotificationSettings")
                    }, {
                        category: "MODERATOR",
                        name: Object(g.d)("Moderator", "PlatformNotificationSettings"),
                        description: Object(g.d)("Any time I get a notification as a moderator", "PlatformNotificationSettings")
                    }, {
                        category: "COMMERCE",
                        name: Object(g.d)("Gifts and Rewards", "PlatformNotificationSettings"),
                        description: Object(g.d)("Receive notifications for drops, crates, and subscription gifts", "PlatformNotificationSettings")
                    }], t.toggleAll = function() {
                        t.toggleSettingCategory("ALL", t.getGlobalStateForPlatform())
                    }, t.toggleCollapse = function() {
                        t.setState(function(e) {
                            return {
                                collapsed: !e.collapsed
                            }
                        })
                    }, t.toggleSettingCategory = function(e, n) {
                        return u.__awaiter(t, void 0, void 0, function() {
                            var t, i, a, r, o = this;
                            return u.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setNotificationSetting ? (t = n ? "off" : "on", i = u.__assign({}, Object(pe.a)({
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
                                        return a = s.sent(), r = function(t) {
                                            return t.currentUser ? (t.currentUser.notificationSettings = t.currentUser.notificationSettings.map(function(t) {
                                                return t.category === e && (t.platforms = t.platforms.map(function(e) {
                                                    return e.platformName === o.props.platformName && (e.isEnabled = "on" === a.data.setNotificationSetting.settingState, e.settingState = a.data.setNotificationSetting.settingState), e
                                                })), t
                                            }), t) : t
                                        }, Object(pe.d)(we, {}, r), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return p.createElement(N._2, {
                        padding: 1
                    }, p.createElement(N._4, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return p.createElement(f.a, {
                        message: Object(g.d)("Error loading data.", "PlatformNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return p.createElement(N._25, {
                        margin: {
                            top: 1
                        }
                    }, p.createElement(f.a, {
                        message: Object(g.d)("You must be logged in to update your settings.", "PlatformNotificationSettings")
                    }));
                    var e = p.createElement(N._25, {
                        background: N.m.Alt2,
                        borderBottom: !0
                    }, p.createElement(N._0, {
                        onClick: this.toggleCollapse,
                        alpha: !0
                    }, p.createElement(N._2, {
                        display: N.N.Flex,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, p.createElement(N._2, {
                        className: "platform-notification-settings__header",
                        flexGrow: 0,
                        "data-test-selector": "collapsible-header"
                    }, p.createElement(N._35, {
                        "data-test-selector": "display-name",
                        fontSize: N.R.Size5,
                        color: N.I.Alt2,
                        bold: !0
                    }, this.props.displayName)), p.createElement(N._2, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, p.createElement(N._35, {
                        fontSize: N.R.Size5,
                        color: N.I.Alt2
                    }, this.getSettingTurnedOnMessage())), p.createElement(N._2, {
                        className: this.state.collapsed ? "platform-notification-settings--collapse" : "platform-notification-settings--expand",
                        flexGrow: 0,
                        flexShrink: 1,
                        display: N.N.Flex,
                        justifyContent: N._1.Center
                    }, p.createElement(N._15, {
                        asset: N._16.AngleRight,
                        type: N._17.Alt2
                    })))));
                    return this.state.collapsed ? p.createElement(N._25, null, e) : p.createElement(N._25, null, e, p.createElement(N._25, {
                        padding: 2,
                        borderBottom: !0
                    }, p.createElement(N._2, {
                        padding: {
                            bottom: 1
                        }
                    }, p.createElement(N._35, {
                        "data-test-selector": "description",
                        fontSize: N.R.Size5,
                        color: N.I.Alt2
                    }, this.props.description)), p.createElement(N._25, {
                        display: N.N.Flex,
                        margin: {
                            y: .5
                        },
                        borderBottom: !0
                    }, p.createElement(N._2, {
                        className: "platform-notification-settings__all",
                        display: N.N.Flex,
                        padding: {
                            bottom: 1,
                            right: 5
                        },
                        justifyContent: N._1.Center,
                        flexGrow: 1,
                        flexWrap: N.Q.NoWrap
                    }, p.createElement(N._2, {
                        className: "platform-notification-settings__all-body",
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, p.createElement(N._35, {
                        fontSize: N.R.Size4,
                        color: N.I.Alt,
                        "data-test-selector": "explanation"
                    }, this.props.explanation)), p.createElement(N._2, {
                        display: N.N.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, p.createElement(N._2, {
                        margin: {
                            right: 1
                        }
                    }, p.createElement(N._42, {
                        "data-test-selector": "all-toggle",
                        checked: this.getGlobalStateForPlatform(),
                        onChange: this.toggleAll
                    })), p.createElement(N._2, {
                        padding: {
                            x: 1
                        },
                        "data-test-selector": "saved-selector",
                        className: this.getDisplaySaved("ALL") ? "platform-notification-settings__saved" : "platform-notification-settings__saved--hide"
                    }, p.createElement(N._35, {
                        fontSize: N.R.Size5,
                        color: N.I.Link
                    }, Object(g.d)("Saved", "PlatformNotificationSettings")))))), p.createElement(N._2, {
                        className: "platform-notification-settings__toggle-container",
                        display: N.N.Flex,
                        flexDirection: N.P.Column,
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
                        var a = i[n];
                        a.category === e && (t = a.platforms)
                    }
                    if (!t) return null;
                    for (var r = 0, o = t; r < o.length; r++) {
                        var s = o[r];
                        if (s.platformName === this.props.platformName) return s
                    }
                    return null
                }, t.prototype.getSettingTurnedOnMessage = function() {
                    for (var e = 0, t = 0, n = 0, i = this.VisibleSettings; n < i.length; n++) {
                        var a = i[n],
                            r = this.getSettingByCategory(a.category);
                        r && (e++, r.isEnabled && t++)
                    }
                    return 0 !== t && this.getGlobalStateForPlatform() ? t < e ? Object(g.d)("Some notifications turned on", "PlatformNotificationSettings") : Object(g.d)("All notifications turned on", "PlatformNotificationSettings") : Object(g.d)("All notifications turned off", "PlatformNotificationSettings")
                }, t.prototype.getGlobalStateForPlatform = function() {
                    var e = this.getSettingByCategory("ALL");
                    return !!e && e.isEnabled
                }, t.prototype.renderToggles = function() {
                    for (var e = [], t = 0, n = this.VisibleSettings; t < n.length; t++) {
                        var i = n[t],
                            a = this.getSettingByCategory(i.category);
                        a && e.push(p.createElement(Ee, {
                            category: i.category,
                            text: i.name,
                            description: i.description,
                            isEnabled: a.isEnabled,
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
            }(p.Component),
            Pe = Object(s.d)(Object(h.d)("PlatformNotificationSettings"), Object(x.a)(we, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network"
                    }
                }
            }), Object(x.a)(Ne, {
                name: "setNotificationSetting"
            }))(Ce),
            je = (n("nq6q"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e = "" !== location.search ? le.parse(location.search) : {},
                        t = !!e["open-advanced"] && "true" === e["open-advanced"];
                    return p.createElement(N._25, {
                        className: "notification-settings__body",
                        borderRight: !0,
                        borderLeft: !0,
                        borderTop: !0
                    }, p.createElement(N._25, {
                        background: N.m.Alt,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, p.createElement(N._2, {
                        margin: {
                            bottom: .5
                        }
                    }, p.createElement(N._35, {
                        fontSize: N.R.Size3,
                        color: N.I.Alt
                    }, Object(g.d)("Notifications", "SettingsNotificationsPage"))), p.createElement(N._2, null, p.createElement(N._35, {
                        fontSize: N.R.Size5,
                        color: N.I.Alt2
                    }, Object(g.d)("Get the notifications you care about, where you want to see them.", "SettingsNotificationsPage")))), p.createElement(Pe, {
                        startCollapsed: t,
                        platformName: w.onsite,
                        displayName: Object(g.d)("On Twitch", "SettingsNotificationsPage"),
                        description: Object(g.d)("We'll always keep you informed on important updates to Twitch and your account.", "SettingsNotificationsPage"),
                        explanation: Object(g.d)("Send me notifications on Twitch about", "SettingsNotificationsPage"),
                        key: "onsite",
                        extraSettings: this.renderBrowserPushNotifications()
                    }), p.createElement(Pe, {
                        startCollapsed: !0,
                        platformName: w.email,
                        displayName: Object(g.d)("By Email", "SettingsNotificationsPage"),
                        description: Object(g.d)("Receive important notifications through email. You may receive additional emails about features and content on Twitch. You can turn off specific emails using the unsubscribe link included in each message.", "SettingsNotificationsPage"),
                        explanation: Object(g.d)("Send me emails about", "SettingsNotificationsPage"),
                        key: "email"
                    }), p.createElement(Pe, {
                        platformName: w.push,
                        startCollapsed: !0,
                        displayName: Object(g.d)("On Mobile", "SettingsNotificationsPage"),
                        description: Object(g.d)("Get Twitch updates on the go. Receive notifications right on your phone's home screen.", "SettingsNotificationsPage"),
                        explanation: Object(g.d)("Send me push notifications", "SettingsNotificationsPage"),
                        key: "push"
                    }), p.createElement(be, {
                        startCollapsed: !t
                    }))
                }, t.prototype.renderBrowserPushNotifications = function() {
                    return Object(ce.a)() && !Object(de.a)() ? p.createElement(_e, null) : null
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t = u.__decorate([Object(h.d)("SettingsNotificationsPage", {
                    destination: k.a.NotificationSettingsPage
                }), Object(S.a)({
                    location: _.PageviewLocation.SettingsPage
                })], t)
            }(p.Component)),
            Ue = n("S1vB"),
            xe = n("cumT"),
            Te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: r.NoChanges
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: r.Working
                        }, function() {})
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return g.a.buildType === y.a.Production ? null : this.props.data.currentUser && this.props.data.requestInfo ? this.props.data.currentUser.hasPrime ? p.createElement("div", null, p.createElement(O, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    })) : Object(Ue.a)(this.props.data.requestInfo.countryCode) ? (window.location.replace("https://twitch.amazon.com/prime?ref_=sm_w_tsp_p_t"), null) : p.createElement(m.a, {
                        to: "/settings/turbo"
                    }) : null
                }, t = u.__decorate([Object(h.d)("SettingsPrimePage", {
                    autoReportInteractive: !0,
                    destination: k.a.SettingsPrime
                }), Object(S.a)({
                    location: _.PageviewLocation.SettingsPage
                }), Object(x.a)(xe)], t)
            }(p.Component),
            Ie = n("9u8h"),
            De = function() {
                return p.createElement(f.a, {
                    message: Object(g.d)("Error loading user data. Please try again later.", "SettingsPageError")
                })
            },
            Fe = function() {
                return p.createElement(I, {
                    label: Object(g.d)("Disable Your Twitch Account", "DisableAccountLink"),
                    orientation: N.T.Horizontal
                }, Object(g.d)("If you want to disable your Twitch account, you can do so from the <x:link>Disable Account</x:link> page.", {
                    "x:link": function(e) {
                        return p.createElement("a", {
                            key: "disable-account-link",
                            href: "https://www.twitch.tv/user/disable_account",
                            "data-a-target": "disable-account-link"
                        }, e)
                    }
                }, "DisableAccountLink"))
            },
            Ae = 5e3;
        ! function(e) {
            e[e.InvalidAddress = 1] = "InvalidAddress", e[e.InvalidDomain = 2] = "InvalidDomain"
        }(Oe || (Oe = {}));
        var Re;
        ! function(e) {
            e[e.Error = 0] = "Error", e[e.CanSendVerificationEmail = 1] = "CanSendVerificationEmail", e[e.VerificationEmailSent = 2] = "VerificationEmailSent", e[e.Verified = 3] = "Verified"
        }(Re || (Re = {}));
        var Le, Me = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = g.i.withCategory("email-setting"), n.onClickVerify = function() {
                        return u.__awaiter(n, void 0, void 0, function() {
                            var e, t = this;
                            return u.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            working: !0
                                        }), e = Re.Error, n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, Ie.a.put("/kraken/users/" + this.props.id, {
                                            body: {
                                                email: this.props.email
                                            }
                                        })];
                                    case 2:
                                        return 200 === n.sent().status && (e = Re.VerificationEmailSent), [3, 4];
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
                                                    status: Re.CanSendVerificationEmail
                                                })
                                            }, Ae)
                                        }), [2]
                                }
                            })
                        })
                    }, n.state = {
                        status: t.verified ? Re.Verified : Re.CanSendVerificationEmail,
                        working: !1
                    }, n
                }
                return u.__extends(t, e), t.prototype.componentWillUnmount = function() {
                    this.feedbackTimerHandle && clearTimeout(this.feedbackTimerHandle)
                }, t.prototype.render = function() {
                    var e = !!this.props.error || this.state.status === Re.Error,
                        t = this.props.disabled || this.state.working;
                    return p.createElement(N._2, {
                        display: N.N.Flex,
                        flexWrap: N.Q.NoWrap
                    }, p.createElement(I, {
                        error: e,
                        errorMessage: e ? this.renderEmailError() : void 0,
                        label: Object(g.d)("Email", "EmailSetting")
                    }, p.createElement(N.Y, {
                        type: N.Z.Email,
                        disabled: t,
                        onChange: this.props.onChange,
                        required: !0,
                        value: this.props.email
                    }), p.createElement(T, {
                        text: this.renderVerificationMessage()
                    })), p.createElement(N._2, {
                        flexGrow: 0
                    }, this.renderVerifyButton(t)))
                }, t.prototype.renderVerifyButton = function(e) {
                    switch (this.state.status) {
                        case Re.CanSendVerificationEmail:
                            return p.createElement(N.u, {
                                type: N.z.Default,
                                disabled: this.props.dirty || e,
                                onClick: this.onClickVerify
                            }, Object(g.d)("Verify", "EmailSetting"));
                        case Re.VerificationEmailSent:
                            return p.createElement(N.u, {
                                type: N.z.Success,
                                disabled: e
                            }, Object(g.d)("Email Sent", "EmailSetting"));
                        case Re.Error:
                            return p.createElement(N.u, {
                                type: N.z.Alert,
                                disabled: !0
                            }, Object(g.d)("Error", "EmailSetting"));
                        case Re.Verified:
                        default:
                            return null
                    }
                }, t.prototype.renderVerificationMessage = function() {
                    switch (this.state.status) {
                        case Re.CanSendVerificationEmail:
                            return Object(g.d)("This email is linked to your account - please take a moment to verify", "EmailSetting");
                        case Re.VerificationEmailSent:
                            return Object(g.d)("Verification email sent!", "EmailSetting");
                        case Re.Verified:
                            return Object(g.d)("This email is linked to your account", "EmailSetting");
                        default:
                            return null
                    }
                }, t.prototype.renderEmailError = function() {
                    if (this.state.status === Re.Error) return Object(g.d)("Failed to send verification email - please try again later", "EmailSetting");
                    switch (this.props.error) {
                        case Oe.InvalidAddress:
                            return Object(g.d)("Please provide a valid email address", "EmailSetting");
                        case Oe.InvalidDomain:
                            return Object(g.d)("Admins must use their work email address", "EmailSetting");
                        default:
                            return
                    }
                }, t
            }(p.Component),
            Be = n("FuaS"),
            Ve = n("FsFC");
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.Eligible = 2] = "Eligible", e[e.NotEligible = 3] = "NotEligible"
        }(Le || (Le = {}));
        var ze, qe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        status: Le.Loading
                    }, t.logger = g.i.withCategory("username-setting"), t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.emailVerified && this.fetchChangeEligibility()
                }, t.prototype.render = function() {
                    return p.createElement(N._2, {
                        display: N.N.Flex,
                        flexWrap: N.Q.NoWrap
                    }, p.createElement(I, {
                        label: Object(g.d)("Username", "UsernameSetting"),
                        error: this.state.status === Le.Error,
                        errorMessage: this.state.status === Le.Error ? this.renderErrorMessage() : void 0
                    }, p.createElement(N.Y, {
                        type: N.Z.Text,
                        disabled: !0,
                        value: this.props.login
                    }), p.createElement(T, {
                        text: this.renderChangeEligibilityMessage()
                    })), p.createElement(N._2, {
                        flexGrow: 0
                    }, this.state.status === Le.Eligible && p.createElement(N.v, {
                        ariaLabel: Object(g.d)("Edit Username", "UsernameSetting"),
                        icon: N._16.Edit,
                        linkTo: "https://www.twitch.tv/logins/new"
                    })))
                }, t.prototype.renderChangeEligibilityMessage = function() {
                    if (!this.props.emailVerified) return Object(g.d)("You must have a verified email to update your username", "UsernameSetting");
                    switch (this.state.status) {
                        case Le.Loading:
                            return Object(g.d)("Loading username change eligibility...", "UsernameSetting");
                        case Le.Eligible:
                            return Object(g.d)("You may update your username", "UsernameSetting");
                        case Le.NotEligible:
                            return this.state.eligibilityTimeISO && Object(g.d)("You may update your username again in {distanceFromNow}", {
                                distanceFromNow: function(e) {
                                    var t = Date.now(),
                                        n = (new Date(e).getTime() - t) / 1e3;
                                    if (!(n <= 0)) return Object(Ve.a)(n)
                                }(this.state.eligibilityTimeISO) || ""
                            }, "UsernameSetting");
                        default:
                            return null
                    }
                }, t.prototype.renderErrorMessage = function() {
                    return Object(g.d)("We had trouble fetching your rename eligibility - please try again later", "UsernameSetting")
                }, t.prototype.fetchChangeEligibility = function() {
                    return u.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return u.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, Ie.a.get("/kraken/user/rename_status?scope=user_read")];
                                case 1:
                                    return (e = t.sent()).body && e.body.is_rename_eligible ? this.setState({
                                        status: Le.Eligible
                                    }) : e.body && !1 === e.body.is_rename_eligible ? this.setState({
                                        status: Le.NotEligible,
                                        eligibilityTimeISO: e.body.rename_eligible_at
                                    }) : this.setState({
                                        status: Le.Error
                                    }), [3, 3];
                                case 2:
                                    return t.sent(), this.logger.warn("Failed to fetch rename_status for user " + this.props.login), this.setState({
                                        status: Le.Error
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t
            }(p.Component),
            We = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return p.createElement("div", null, p.createElement(Me, {
                        disabled: this.props.controlsDisabled,
                        dirty: this.props.emailDirty,
                        email: this.props.email,
                        id: this.props.id,
                        error: this.props.emailError,
                        login: this.props.login,
                        onChange: this.props.onEmailChange,
                        verified: this.props.emailVerified
                    }), p.createElement(qe, {
                        emailVerified: this.props.emailVerified,
                        login: this.props.login
                    }), p.createElement(I, {
                        error: !!this.props.displayNameError,
                        errorMessage: this.props.displayNameError ? this.renderDisplayNameError() : void 0,
                        label: Object(g.d)("Display Name", "ProfileAccountInfo")
                    }, p.createElement(N.Y, {
                        "data-test-selector": "displayname-input",
                        type: N.Z.Text,
                        disabled: this.props.controlsDisabled,
                        onChange: this.props.onDisplayNameChange,
                        value: this.props.displayName
                    }), p.createElement(T, {
                        text: this.renderDisplayNameDescription()
                    })), p.createElement(I, {
                        label: Object(g.d)("Bio", "ProfileAccountInfo")
                    }, p.createElement(N._37, {
                        disabled: this.props.controlsDisabled,
                        onChange: this.props.onBioChange,
                        maxLength: 300,
                        noResize: !0,
                        value: this.props.bio
                    }), p.createElement(T, {
                        text: Object(g.d)("Who you are in fewer than 300 characters", "ProfileAccountInfo") + (this.props.bio.length > 250 ? Object(g.d)("{chars, plural, one { (# character remaining)} other { (# characters remaining)}}", {
                            chars: 300 - this.props.bio.length
                        }, "ProfileAccountInfo") : "")
                    })))
                }, t.prototype.renderDisplayNameDescription = function() {
                    return this.userHasCJKLanguageSet() ? Object(g.d)("Customize the capitalization of your display name or change it to contain English characters! Setting an English display name is a permanent change — requests to undo it will not be honored! Display names that do not adhere to Twitch Rules of Conduct may result in an indefinite suspension of your account.", "ProfleAccountInfo") : Object(g.d)("Customize capitalization for your username", "ProfileAccountInfo")
                }, t.prototype.renderDisplayNameError = function() {
                    return Object(g.d)("You may not change your display name, only the capitalization of it", "ProfileAccountInfo")
                }, t.prototype.userHasCJKLanguageSet = function() {
                    var e = Object(Be.a)();
                    return !!e && ["ko", "ja", "zh", "zh-cn", "zh-tw", "zh-hk"].includes(e)
                }, t
            }(p.Component),
            He = n("E9Qg"),
            Ge = n.n(He),
            Qe = n("tL94"),
            Ye = (n("i1sU"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t.props.data && t.props.data.currentUser;
                        e && t.props.showModal(ee.a, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            imageType: te.a.ProfileBanner,
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
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.shouldReportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.shouldReportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data,
                        t = e && e.currentUser;
                    if (!e.loading && !t) return p.createElement(N._35, {
                        type: N._40.Span,
                        color: N.I.Error
                    }, Object(g.d)("Sorry, something went wrong. Please try again later.", "ProfileBannerSetting"));
                    var n = Object(g.d)("Profile Banner", "ProfileBannerSetting"),
                        i = null;
                    return i = e.loading ? p.createElement(N._8, {
                        "data-test-selector": "profile-banner__placeholder",
                        height: 140,
                        width: 440
                    }) : t && t.bannerImageURL ? p.createElement(h.b, {
                        src: t.bannerImageURL,
                        alt: n,
                        className: "profile-banner-setting__current-image"
                    }) : p.createElement("div", {
                        className: "profile-banner-setting__current-image profile-banner-setting__current-image--default",
                        style: {
                            backgroundImage: "url(" + Ge.a + ")"
                        }
                    }), p.createElement(N._2, {
                        className: "profile-banner-setting",
                        margin: {
                            bottom: 4
                        }
                    }, p.createElement(N._2, {
                        display: N.N.Flex,
                        flexDirection: N.P.Row
                    }, p.createElement(N._2, {
                        margin: {
                            right: 2
                        }
                    }, i), p.createElement(N._2, {
                        margin: {
                            y: "auto"
                        }
                    }, p.createElement(N.u, {
                        ariaLabel: Object(g.d)("Update Profile Banner", "ProfileBannerSetting"),
                        onClick: this.openModal,
                        "data-test-selector": "profile-banner-upload-button"
                    }, p.createElement(N._2, {
                        padding: {
                            x: 1
                        }
                    }, Object(g.d)("Update", "ProfileBannerSetting"))), p.createElement(T, {
                        text: Object(g.d)("File format: JPEG, PNG, GIF (recommended 1200x380, max 10MB)", "ProfileBannerSetting")
                    }))))
                }, t
            }(p.Component)),
            Je = Object(U.compose)(Object(h.d)("ProfileBannerSetting"), Object(x.a)(Qe))(Ye),
            Ke = Object(o.b)(null, function(e) {
                return Object(s.b)({
                    showModal: Z.d
                }, e)
            })(Je),
            $e = n("x9n8"),
            Xe = n("goep"),
            Ze = (n("eppJ"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t.props.data && t.props.data.currentUser;
                        e && t.props.showModal($e.a, {
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
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(1)
                }, t.prototype.render = function() {
                    var e = this.props.data && this.props.data.currentUser,
                        t = p.createElement(N._8, {
                            height: 140,
                            width: 140
                        });
                    return e && e.profileImageURL && (t = p.createElement(h.b, {
                        src: e.profileImageURL,
                        alt: Object(g.d)("Profile Picture", "ProfileImageSetting"),
                        className: "profile-image-setting__current-image"
                    })), p.createElement(N._2, {
                        className: "profile-image-setting",
                        margin: {
                            bottom: 4
                        }
                    }, p.createElement(N._2, {
                        display: N.N.Flex,
                        flexDirection: N.P.Row
                    }, p.createElement(N._2, {
                        margin: {
                            right: 2
                        }
                    }, t), p.createElement(N._2, {
                        margin: {
                            y: "auto"
                        }
                    }, p.createElement(N.u, {
                        ariaLabel: Object(g.d)("Update Profile Picture", "ProfileImageSetting"),
                        onClick: this.openModal,
                        "data-test-selector": "profile-image-upload-button"
                    }, p.createElement(N._2, {
                        padding: {
                            x: 1
                        }
                    }, Object(g.d)("Update", "ProfileImageSetting"))), p.createElement(T, {
                        text: Object(g.d)("File format: JPEG, PNG, GIF (max size 256x256, 10MB)", "ProfileImageSetting")
                    }))))
                }, t
            }(p.Component)),
            et = Object(U.compose)(Object(h.d)("ProfileImageSetting"), Object(x.a)(Xe))(Ze),
            tt = Object(o.b)(null, function(e) {
                return Object(s.b)({
                    showModal: Z.d
                }, e)
            })(et),
            nt = n("OA9H");
        ! function(e) {
            e.DisplayName = "Error (403): You may not change your display name, only the capitalization of it.", e.EmailNotValid = "Error (403): Email address is not valid", e.EmailDomainNotAllowed = "Error (403): Admins must use their work email"
        }(ze || (ze = {}));
        var it, at = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: r.Working,
                        displayNameError: !1
                    }, t.logger = g.i.withCategory("settings-profile-page"), t.onClickSave = function() {
                        return u.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i, a, o = this;
                            return u.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (!this.props.data.currentUser) return [2];
                                        this.setState({
                                            saveStatus: r.Working
                                        }), e = r.Error, t = !1, n = void 0, s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 3, , 4]), [4, Ie.a.put("/kraken/users/" + this.props.data.currentUser.id, {
                                            body: this.buildRequestBody()
                                        })];
                                    case 2:
                                        if (200 === (i = s.sent()).status) e = r.Success;
                                        else if (403 === i.status) switch (i.error && i.error.message) {
                                            case ze.EmailNotValid:
                                                n = Oe.InvalidAddress;
                                                break;
                                            case ze.EmailDomainNotAllowed:
                                                n = Oe.InvalidDomain;
                                                break;
                                            case ze.DisplayName:
                                                t = !0;
                                                break;
                                            default:
                                                this.logErrorToSentinel(i)
                                        } else this.logErrorToSentinel(i);
                                        return [3, 4];
                                    case 3:
                                        return a = s.sent(), this.logger.warn("Network error submitting profile for user", {
                                            user: this.props.data.currentUser && this.props.data.currentUser.login,
                                            error: a
                                        }), [3, 4];
                                    case 4:
                                        return this.setState({
                                            saveStatus: e,
                                            displayNameError: t,
                                            emailError: n
                                        }, function() {
                                            e === r.Success && o.props.data.refetch && o.props.data.refetch()
                                        }), [2]
                                }
                            })
                        })
                    }, t.onBioChange = function(e) {
                        return t.setState({
                            bio: e.currentTarget.value
                        }, t.checkForDirtyState)
                    }, t.onEmailChange = function(e) {
                        return t.setState({
                            email: e.currentTarget.value
                        }, t.checkForDirtyState)
                    }, t.onDisplayNameChange = function(e) {
                        return t.setState({
                            displayName: e.currentTarget.value
                        }, t.checkForDirtyState)
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    !this.props.data.loading && this.props.data.currentUser && this.hydrateState(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.data.loading && !e.data.loading && e.data.currentUser && this.hydrateState(e)
                }, t.prototype.render = function() {
                    return g.a.buildType === y.a.Production ? null : this.props.data.currentUser ? p.createElement("div", null, p.createElement(i, {
                        title: Object(g.d)("Profile Picture", "SettingsProfilePage")
                    }), p.createElement(tt, null), p.createElement(i, {
                        title: Object(g.d)("Profile Banner", "SettingsProfilePage")
                    }), p.createElement(Ke, null), p.createElement(i, {
                        title: Object(g.d)("Profile Settings", "SettingsProfilePage"),
                        description: Object(g.d)("Change identifying details for your account", "SettingsProfilePage")
                    }), p.createElement(We, {
                        bio: this.state.bio || "",
                        controlsDisabled: this.state.saveStatus === r.Working,
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
                    }), p.createElement(i, {
                        title: Object(g.d)("Disabling Your Twitch Account", "SettingsProfilePage"),
                        description: Object(g.d)("Completely deactivate your account", "SettingsProfilePage")
                    }), p.createElement(Fe, null), p.createElement(O, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    })) : this.props.data.loading ? p.createElement(N._4, {
                        fillContent: !0
                    }) : p.createElement(De, null)
                }, t.prototype.hydrateState = function(e) {
                    e.data.currentUser && this.setState({
                        bio: e.data.currentUser.description,
                        displayName: e.data.currentUser.displayName,
                        email: e.data.currentUser.email,
                        saveStatus: r.NoChanges
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
                        saveStatus: e ? r.DirtyChanges : r.NoChanges
                    })
                }, t
            }(p.Component),
            rt = Object(U.compose)(Object(x.a)(nt), Object(h.d)("SettingsProfilePage", {
                autoReportInteractive: !0,
                destination: k.a.SettingsProfile
            }), Object(S.a)({
                location: _.PageviewLocation.SettingsPage
            }))(at),
            ot = "/v5/whispers/settings",
            st = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        loading: !0,
                        updating: !1
                    }, t.onToggle = function(e) {
                        return u.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return u.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            updating: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, Ie.a.post(ot, {
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
                return u.__extends(t, e), t.prototype.componentWillMount = function() {
                    return u.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return u.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, Ie.a.get(ot)];
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
                    return p.createElement(D, {
                        id: "settings-security-page-block-whispers",
                        label: Object(g.d)("Block Whispers from Stangers", "SettingsSecurityPage"),
                        description: Object(g.d)("Block whispers from people you don't follow", "SettingsSecurityPage"),
                        checked: this.state.enabled,
                        disabled: this.state.updating,
                        error: this.state.error,
                        onChange: this.onToggle
                    })
                }, t
            }(p.Component),
            lt = n("NoSW"),
            ct = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return p.createElement(I, {
                        label: Object(g.d)("Two-Factor Authentication", "TwoFactorAuthenticationSetting"),
                        orientation: N.T.Horizontal,
                        error: this.props.status === it.Error,
                        errorMessage: Object(g.d)("Sorry, something went wrong. Please try again later.", "TwoFactorAuthenticationSetting")
                    }, this.renderBody())
                }, t.prototype.renderBody = function() {
                    switch (this.props.status) {
                        case it.Loading:
                            return this.renderLoading();
                        case it.Error:
                            return this.renderError();
                        case it.UnverifiedEmail:
                            return this.renderVerifyEmail();
                        case it.CanEnable:
                            return this.renderEnableButton();
                        case it.Enabled:
                            return this.renderDisableButton();
                        case it.EnabledAndRequired:
                            return this.renderEnabledAndRequired();
                        default:
                            return null
                    }
                }, t.prototype.renderLoading = function() {
                    return p.createElement(N._8, null)
                }, t.prototype.renderError = function() {
                    return null
                }, t.prototype.renderVerifyEmail = function() {
                    return p.createElement(N._2, null, p.createElement(N._35, {
                        "data-a-target": "tfa-verify-email"
                    }, Object(g.d)("Just verify your email address and two-factor authentication can be enabled.", "TwoFactorAuthenticationSetting")))
                }, t.prototype.renderEnableButton = function() {
                    return p.createElement(N._2, null, p.createElement(N.u, {
                        linkTo: "https://passport.twitch.tv/register_2fa/new",
                        "data-a-target": "tfa-enable-button"
                    }, Object(g.d)("Set Up Two-Factor Authentication", "TwoFactorAuthenticationSetting")), p.createElement(T, {
                        dataTarget: "tfa-pitch-message",
                        text: Object(g.d)("It's dangerous to go alone. <x:link>Two-factor authentication</x:link> adds an extra layer of security to your Twitch account by requiring both a password and your mobile phone to login.", {
                            "x:link": function(e) {
                                return p.createElement("a", {
                                    key: "learn-more-link",
                                    href: "https://www.authy.com/learn-more",
                                    target: "_blank",
                                    "data-a-target": "tfa-authy-link"
                                }, e)
                            }
                        }, "TwoFactorAuthenticationSetting")
                    }))
                }, t.prototype.renderDisableButton = function() {
                    return p.createElement(N._2, null, p.createElement(N.u, {
                        linkTo: "https://passport.twitch.tv/disable_2fa/new",
                        "data-a-target": "tfa-disable-button"
                    }, Object(g.d)("Disable two-factor authentication", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                }, t.prototype.renderEnabledAndRequired = function() {
                    return p.createElement(N._2, null, p.createElement(N._35, {
                        "data-a-target": "tfa-required-message"
                    }, Object(g.d)("You must have two-factor authentication enabled.", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                }, t.prototype.renderEnabledMessage = function() {
                    return p.createElement(T, {
                        dataTarget: "tfa-successful-message",
                        text: Object(g.d)("Woohoo! Two-factor authentication is enabled! To reset or change your phone, visit the Authy <x:link>phone reset form</x:link>.", {
                            "x:link": function(e) {
                                return p.createElement("a", {
                                    key: "phone-reset-link",
                                    href: "https://www.authy.com/phones/reset",
                                    "data-a-target": "tfa-authy-reset"
                                }, e)
                            }
                        }, "TwoFactorAuthenticationSetting")
                    })
                }, t
            }(p.Component),
            dt = n("Q6se");
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.UnverifiedEmail = 2] = "UnverifiedEmail", e[e.CanEnable = 3] = "CanEnable", e[e.Enabled = 4] = "Enabled", e[e.EnabledAndRequired = 5] = "EnabledAndRequired"
        }(it || (it = {}));
        var ut, pt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        status: it.Loading,
                        restLoading: !0,
                        restError: !1
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTwoFactorEnabled()
                }, t.prototype.componentDidUpdate = function(e, t) {
                    t.status === it.Loading && this.state.status !== it.Loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.status !== it.Loading || e.data.loading || this.reconcileStatus(e)
                }, t.prototype.render = function() {
                    return p.createElement(ct, {
                        status: this.state.status
                    })
                }, t.prototype.fetchTwoFactorEnabled = function() {
                    return u.__awaiter(this, void 0, void 0, function() {
                        var e, t, n = this;
                        return u.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    e = "/api/users/auth_validator?check_2fa=true&onsite=1", i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, Ie.a.get(e, {
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
                    e.data.loading || this.state.restLoading ? t = it.Loading : !e.data.currentUser || this.state.restError ? t = it.Error : this.state.twoFactorEnabled || e.data.currentUser.isEmailVerified ? !this.state.twoFactorEnabled && e.data.currentUser.isEmailVerified ? t = it.CanEnable : this.state.twoFactorEnabled && !this.userRoleRequiresTwoFactor(e) ? t = it.Enabled : this.state.twoFactorEnabled && this.userRoleRequiresTwoFactor(e) && (t = it.EnabledAndRequired) : t = it.UnverifiedEmail, t && this.setState({
                        status: t
                    })
                }, t.prototype.userRoleRequiresTwoFactor = function(e) {
                    var t = e.data.currentUser && e.data.currentUser.roles;
                    return !(!t || !(t.isGlobalMod || t.isSiteAdmin || t.isStaff))
                }, t
            }(p.Component),
            mt = Object(U.compose)(Object(lt.a)("TwoFactorAuthenticationSetting"), Object(x.a)(dt))(pt),
            gt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return g.a.buildType === y.a.Production ? null : p.createElement("div", null, p.createElement(i, {
                        title: Object(g.d)("Security", "SettingsSecurityPage"),
                        description: Object(g.d)("Keep your account safe and sound", "SettingsSecurityPage")
                    }), p.createElement(a, null), p.createElement(mt, null), p.createElement(i, {
                        title: Object(g.d)("Privacy", "SettingsSecurityPage"),
                        description: Object(g.d)("Choose who can message you", "SettingsSecurityPage")
                    }), p.createElement(st, null))
                }, t
            }(p.Component),
            ft = Object(U.compose)(Object(h.d)("SettingsSecurityPage", {
                autoReportInteractive: !0,
                destination: k.a.SettingsSecurity
            }), Object(S.a)({
                location: _.PageviewLocation.SettingsPage
            }))(gt),
            ht = n("CkX/");
        ! function(e) {
            e.Channel = "channel", e.Notifications = "notifications", e.Profile = "profile", e.Security = "security", e.Connections = "connections", e.Prime = "prime", e.Turbo = "turbo"
        }(ut || (ut = {}));
        var bt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isPrimeVisible = function() {
                        return t.props.data.requestInfo && t.props.data.currentUser && (Object(Ue.a)(t.props.data.requestInfo.countryCode) || t.props.data.currentUser.hasPrime)
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data.currentUser || !this.props.data.requestInfo) return null;
                    var e = null;
                    this.isPrimeVisible() && (e = p.createElement(N._26, {
                        linkTo: "/settings/prime",
                        active: this.props.tabName === ut.Prime,
                        "data-test-selector": "test-settings-prime-tab",
                        "data-a-target": "prime-tab"
                    }, Object(g.d)("Twitch Prime", "SettingsTabs")));
                    var t = null;
                    return !this.props.data.currentUser.hasTurbo && this.isPrimeVisible() || (t = p.createElement(N._26, {
                        linkTo: "/settings/turbo",
                        active: this.props.tabName === ut.Turbo,
                        "data-test-selector": "test-settings-turbo-tab",
                        "data-a-target": "turbo-tab"
                    }, Object(g.d)("Twitch Turbo", "SettingsTabs"))), p.createElement(N._2, {
                        className: "settings-tabs",
                        padding: {
                            x: kt,
                            top: kt
                        }
                    }, p.createElement(N._2, {
                        margin: {
                            bottom: 1
                        }
                    }, p.createElement(N._35, {
                        type: N._40.H2
                    }, Object(g.d)("Settings", "SettingsTabs"))), p.createElement(N._2, null, p.createElement(N._27, null, p.createElement(N._26, {
                        linkTo: "/settings/profile",
                        active: this.props.tabName === ut.Profile,
                        "data-a-target": "profile-tab"
                    }, Object(g.d)("Profile", "SettingsTabs")), e, t, p.createElement(N._26, {
                        linkTo: "/settings/channel",
                        active: this.props.tabName === ut.Channel,
                        "data-a-target": "channel-tab"
                    }, Object(g.d)("Channel and Videos", "SettingsTabs")), p.createElement(N._26, {
                        linkTo: "/settings/security",
                        active: this.props.tabName === ut.Security,
                        "data-a-target": "security-tab"
                    }, Object(g.d)("Security and Privacy", "SettingsTabs")), p.createElement(N._26, {
                        linkTo: "/settings/notifications",
                        active: this.props.tabName === ut.Notifications,
                        "data-a-target": "notifications-tab"
                    }, Object(g.d)("Notifications", "SettingsTab")), p.createElement(N._26, {
                        linkTo: "/settings/connections",
                        active: this.props.tabName === ut.Connections,
                        "data-a-target": "connections-tab"
                    }, Object(g.d)("Connections", "SettingsTabs")), p.createElement(N._26, {
                        linkTo: "/subscriptions",
                        active: !1,
                        "data-a-target": "subscriptions-tab"
                    }, Object(g.d)("Subscriptions", "SettingsTabs")))))
                }, t
            }(p.Component),
            vt = Object(U.compose)(Object(h.d)("SettingsTabs"), Object(x.a)(ht))(bt),
            St = n("hRPz"),
            yt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: r.NoChanges
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: r.Working
                        }, function() {})
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return g.a.buildType === y.a.Production ? null : this.props.data.loading && !this.props.data.currentUser ? p.createElement(N._4, {
                        fillContent: !0
                    }) : this.props.data.loading || this.props.data.currentUser ? this.props.data.currentUser && !this.props.data.currentUser.hasTurbo ? this.props.data.currentUser.hasPrime || Object(Ue.a)(this.props.data.requestInfo.countryCode) ? p.createElement(m.a, {
                        to: "/settings/prime"
                    }) : (window.location.replace("https://www.twitch.tv/products/turbo/ticket"), null) : p.createElement("div", null, p.createElement(O, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    })) : p.createElement(De, null)
                }, t = u.__decorate([Object(h.d)("SettingsTurboPage", {
                    autoReportInteractive: !0,
                    destination: k.a.SettingsTurbo
                }), Object(S.a)({
                    location: _.PageviewLocation.SettingsPage
                }), Object(x.a)(St)], t)
            }(p.Component),
            kt = 3,
            _t = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.redirectToProfilePage = function() {
                        return p.createElement(m.a, {
                            to: "/settings/profile"
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return this.props.isLoggedIn ? p.createElement(N._2, {
                        padding: {
                            x: kt
                        },
                        fullHeight: !0,
                        fullWidth: !0,
                        display: N.N.Flex,
                        flexDirection: N.P.Column,
                        flexWrap: N.Q.NoWrap
                    }, p.createElement(b.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), p.createElement(v.a, null, p.createElement(vt, {
                        tabName: this.props.match.params.tab
                    })), p.createElement(N._2, {
                        padding: {
                            y: 2
                        }
                    }, p.createElement(m.d, null, p.createElement(m.b, {
                        path: "/settings/profile",
                        component: rt
                    }), p.createElement(m.b, {
                        path: "/settings/prime",
                        component: Te
                    }), p.createElement(m.b, {
                        path: "/settings/turbo",
                        component: yt
                    }), p.createElement(m.b, {
                        path: "/settings/channel",
                        component: oe
                    }), p.createElement(m.b, {
                        path: "/settings/security",
                        component: ft
                    }), p.createElement(m.b, {
                        path: "/settings/notifications",
                        component: je
                    }), p.createElement(m.b, {
                        path: "/settings/connections",
                        component: se
                    }), p.createElement(m.b, {
                        path: "/settings",
                        render: this.redirectToProfilePage
                    })))) : (this.props.login(), p.createElement(f.a, {
                        message: Object(g.d)("You must be logged in to view this page", "SettingsRoot")
                    }))
                }, t = u.__decorate([Object(h.d)("SettingsRoot", {
                    autoReportInteractive: !0
                })], t)
            }(p.Component),
            Et = Object(m.e)(_t),
            Nt = Object(o.b)(function(e) {
                return {
                    isLoggedIn: Object(d.d)(e)
                }
            }, function(e) {
                return Object(s.b)({
                    login: function() {
                        return Object(c.f)(l.a.SettingsPage)
                    }
                }, e)
            })(Et);
        n.d(t, "SettingsRoot", function() {
            return Nt
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

        function i() {
            if (f) return f;
            var e = g.register({
                scope: "/"
            });
            return f = e || Promise.reject(new Error("service worker runtime not available"))
        }
        var a, r = n("TToO"),
            o = n("6sO2"),
            s = n("oIkB"),
            l = n("Aj/L");
        ! function(e) {
            e.NewSession = "new-session", e.ClearSession = "clear-session"
        }(a || (a = {}));
        var c = o.n.logger.withCategory("host-service-worker-messenger"),
            d = function() {
                function e() {}
                return e.syncSession = function() {
                    var e = Object(l.c)(o.n.store.getState());
                    if (e) {
                        var t = e.id;
                        this.sendMessage({
                            type: a.NewSession,
                            userId: t
                        })
                    } else this.sendMessage({
                        type: a.ClearSession
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
            u = "browserPushNotificationsEnabled",
            p = function() {
                function e() {}
                return e.exists = function() {
                    return null !== o.n.storage.getOptional(u)
                }, e.isEnabled = function() {
                    return o.n.storage.get(u, !1)
                }, e.setEnabled = function() {
                    o.n.storage.set(u, !0)
                }, e.setDisabled = function() {
                    o.n.storage.set(u, !1)
                }, e
            }(),
            m = n("UbVv"),
            g = n("OtmA"),
            f = null,
            h = n("JBcW"),
            b = n("TbkX");
        n.d(t, "a", function() {
            return S
        });
        var v = o.n.logger.withCategory("browser-push-notifications-manager"),
            S = function() {
                function e() {}
                return e.initialize = function() {
                    return this.initPromise ? this.initPromise : (this.initPromise = this.initializationLogic(), this.initPromise)
                }, e.initializationLogic = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, a;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return Object(m.a)() ? (v.debug("permissions have been denied. nothing to do here."), [2]) : [4, i()];
                                case 1:
                                    return r.sent(), e = Object(l.d)(o.n.store.getState()), [4, this.hasPushSubscription()];
                                case 2:
                                    return t = r.sent(), d.syncSession(), t ? (n = p.exists() && !p.isEnabled(), a = !e, n || a ? [4, this.unsubscribe()] : [3, 4]) : [3, 5];
                                case 3:
                                    r.sent(), r.label = 4;
                                case 4:
                                    return [3, 7];
                                case 5:
                                    return l.d ? !Object(m.b)() || p.exists() && !p.isEnabled() ? [3, 7] : [4, this.subscribe()] : [3, 7];
                                case 6:
                                    r.sent(), r.label = 7;
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
                                    return p.setEnabled(), [4, this.subscribe()];
                                case 1:
                                    return t.sent(), Object(h.c)({
                                        allowed: Object(m.b)(),
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
                                    return p.setDisabled(), [4, this.unsubscribe()];
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
                        var e, t, n, a, c, d;
                        return r.__generator(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    if (Object(m.a)()) throw new Error("notification permission is denied");
                                    if (!Object(l.d)(o.n.store.getState())) throw new Error("cannot be enabled logged out");
                                    if (!(e = o.b.get("notification_app_server_public_key", ""))) throw new Error("application server public key is blank");
                                    return [4, i()];
                                case 1:
                                    return t = u.sent(), [4, this.getPushSubscription()];
                                case 2:
                                    return (n = u.sent()) ? [3, 4] : (a = function(e) {
                                        for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), n = atob(t), i = new Uint8Array(n.length), a = 0; a < n.length; ++a) i[a] = n.charCodeAt(a);
                                        return i
                                    }(e), [4, t.pushManager.subscribe({
                                        userVisibleOnly: !0,
                                        applicationServerKey: a
                                    })]);
                                case 3:
                                    n = u.sent(), u.label = 4;
                                case 4:
                                    if (!(c = n.toJSON()).endpoint) throw new Error("push subscription 'endpoint' missing");
                                    if (!c.keys) throw new Error("push subscription 'keys' missing");
                                    if (!c.keys.auth) throw new Error("push subscription 'keys.auth' missing");
                                    if (!c.keys.p256dh) throw new Error("push subscription 'keys.p256dh' missing");
                                    return d = Object(s.a)({
                                        endpoint: c.endpoint,
                                        auth: c.keys.auth,
                                        p256DH: c.keys.p256dh
                                    }), [4, o.n.apollo.client.mutate(r.__assign({
                                        mutation: b
                                    }, d))];
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
                        var e, t;
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, i()];
                                case 1:
                                    return e = n.sent(), [4, e.pushManager.getSubscription()];
                                case 2:
                                    return (t = n.sent()) ? [2, t] : [2, null]
                            }
                        })
                    })
                }, e
            }()
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
            var a = new FileReader;
            a.onloadend = function() {
                t(a.result)
            }, a.readAsArrayBuffer(e)
        }, t.a = function(e) {
            var t = "";
            if (e && e.name) {
                var n = e.name;
                t = n.slice((Math.max(0, n.lastIndexOf(".")) || 1 / 0) + 1)
            }
            return "" === t && (t = "png"), t
        }
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
            return fetch(a.a.krakenEndpoint + "/users/" + e + "/default_images?client_id=" + a.a.authClientID + "&api_version=" + a.a.defaultAPIVersion, {
                method: "PUT",
                headers: {
                    Authorization: "OAuth " + t,
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    default_profile_image: r.b[n].id
                })
            })
        }, t.a = function(e, t, n, r) {
            return i.__awaiter(this, void 0, void 0, function() {
                var o;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, fetch(a.a.krakenEndpoint + "/users/" + e + "/upload_image?client_id=" + a.a.authClientID + "&api_version=" + a.a.defaultAPIVersion + "&image_type=" + n + "&format=" + r, {
                                method: "POST",
                                headers: {
                                    Authorization: "OAuth " + t
                                }
                            })];
                        case 1:
                            return o = i.sent(), [2, o.json()]
                    }
                })
            })
        };
        var i = n("TToO"),
            a = n("6sO2"),
            r = n("puy8")
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
            a = n("2KeS"),
            r = n("V5M+"),
            o = n("Aj/L"),
            s = n("TToO"),
            l = n("U7vG"),
            c = n("6sO2"),
            d = n("J8WN"),
            u = n("+8VM"),
            p = n("7vx8"),
            m = n("HZww"),
            g = n("4Q9N"),
            f = n("Tt3k"),
            h = n("W6ca"),
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
                    }, t.currentImage = null, t.logger = c.i.withCategory("UserImageUploader"), t.onImageInputChange = function(e) {
                        var n;
                        if (null !== e) {
                            t.setState({
                                loading: !0
                            }), n = e[0];
                            var i = Object(f.a)(n),
                                a = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(a, 10) > 10 ? t.setState({
                                statusMessage: b.b.BadSizeError
                            }) : Object(f.b)(n, function(e) {
                                return s.__awaiter(t, void 0, void 0, function() {
                                    var t, n, a, r, o = this;
                                    return s.__generator(this, function(s) {
                                        switch (s.label) {
                                            case 0:
                                                this.currentImage = e, s.label = 1;
                                            case 1:
                                                return s.trys.push([1, 3, , 4]), [4, Object(h.a)(this.props.userID, this.props.authToken, this.props.imageType, i)];
                                            case 2:
                                                return t = s.sent(), n = t.upload_url, a = t.upload_id, [3, 4];
                                            case 3:
                                                return r = s.sent(), this.logger.error(r, "Request for upload ID failed to get expected response from server."), this.setState({
                                                    statusMessage: b.b.UnexpectedError
                                                }), [2];
                                            case 4:
                                                return this.unsubscribe = c.j.subscribe({
                                                    topic: Object(m.i)(this.props.userID),
                                                    success: function() {
                                                        try {
                                                            Object(h.c)(n, o.currentImage)
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
                                                        if (e.upload_id === a) {
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
                    if (this.state.loading) n = l.createElement(S._2, {
                        className: "user-image-uploader__upload-svg--anim-fill",
                        position: S._9.Relative,
                        "data-test-selector": "loading-status"
                    }, l.createElement(S._15, {
                        asset: S._16.Upload,
                        type: S._17.Brand,
                        width: 99,
                        height: 76
                    }));
                    else {
                        var i = Object(c.d)("Recommended image size: 1200x380 and less than 10MB.", "UserImageUploader");
                        this.props.imageType === g.a.ChannelOfflineImage && (i = Object(c.d)("Recommended image size: 1920x1080 and less than 10MB.", "UserImageUploader")), n = l.createElement(S._2, null, l.createElement(S._2, {
                            className: "user-image-uploader__upload-info"
                        }, l.createElement(S._2, null, l.createElement(S._15, {
                            asset: S._16.Plus,
                            type: S._17.Alt2,
                            height: 20,
                            width: 20
                        })), l.createElement(S._35, {
                            type: S._40.H3,
                            color: S.I.Alt2,
                            fontSize: S.R.Size4
                        }, Object(c.d)("Upload a Photo", "User Image Uploader"))), l.createElement(S._2, {
                            className: "user-image-uploader__upload-recommendation",
                            position: S._9.Absolute,
                            textAlign: S._36.Left,
                            attachLeft: !0,
                            attachBottom: !0,
                            margin: {
                                left: 3,
                                bottom: 1
                            }
                        }, l.createElement(S._35, {
                            type: S._40.H6,
                            color: S.I.Alt2,
                            fontSize: S.R.Size8,
                            align: S._50.TextBottom
                        }, i)))
                    }
                    var a = null;
                    this.props.showCloser && (a = l.createElement(u.a, null));
                    var r = null;
                    if (null !== this.state.statusMessage) {
                        var o = Object(b.c)(this.state.statusMessage);
                        r = l.createElement(S._6, {
                            label: o.message,
                            type: o.type
                        })
                    }
                    return l.createElement(S._2, {
                        className: "user-image-uploader",
                        position: S._9.Relative,
                        fullHeight: !0
                    }, l.createElement(S._25, {
                        className: "user-image-uploader__background-container",
                        background: S.m.Base,
                        fullWidth: !0
                    }, l.createElement(S._2, {
                        padding: 2,
                        display: S.N.InlineBlock,
                        position: S._9.Relative,
                        textAlign: S._36.Center,
                        fullWidth: !0
                    }, l.createElement(S._25, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(S._35, {
                        type: S._40.H3,
                        fontSize: S.R.Size4
                    }, t)), l.createElement(S._2, {
                        className: "user-image-uploader__upload-container",
                        display: S.N.InlineBlock,
                        position: S._9.Relative,
                        textAlign: S._36.Center,
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(S._2, {
                        className: "user-image-uploader__upload",
                        display: S.N.InlineBlock,
                        position: S._9.Relative,
                        textAlign: S._36.Center
                    }, l.createElement(d.a, {
                        allowedFileTypes: k,
                        onFilesSubmitted: this.onImageInputChange
                    }, n))), l.createElement(S._25, {
                        "data-test-selector": "status-message",
                        fontSize: S.R.Size4,
                        position: S._9.Relative,
                        textAlign: S._36.Center,
                        className: "user-image-uploader__status-message"
                    }, r))), a)
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
            E = Object(v.d)("User Image Upload")(_),
            N = Object(i.b)(function(e) {
                return {
                    authToken: Object(o.a)(e)
                }
            }, function(e, t) {
                return Object(a.b)({
                    closeModal: function() {
                        return t.successCallback && t.successCallback(), Object(r.c)()
                    }
                }, e)
            })(E);
        n.d(t, "a", function() {
            return N
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
    "j7/Y": function(e, t, n) {
        "use strict";

        function i(e) {
            return function(t) {
                var n = function(n) {
                    function i(t) {
                        var i = n.call(this, t) || this;
                        return i.tracked = !1, i.referenceTracking = {}, i.trackPageview = function() {
                            if (!(i.tracked || e.skip && e.skip(i.props))) {
                                i.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(i.props) : e.properties && (t = a.__assign({}, e.properties));
                                var n = a.__assign({}, i.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var r = i.referenceTracking,
                                    o = r.content,
                                    s = r.medium,
                                    c = r.content_index;
                                l.n.tracking.trackPageview(a.__assign({
                                    content: o,
                                    medium: s,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, l.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : l.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
                    }
                    return a.__extends(i, n), i.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, i.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, i.prototype.render = function() {
                        return o.createElement(t, a.__assign({}, this.props))
                    }, i.prototype.stripTTParams = function(e) {
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
                    }, i
                }(o.Component);
                return Object(s.f)(n)
            }
        }
        var a = n("TToO"),
            r = n("OAwv"),
            o = n("U7vG"),
            s = n("F8kA"),
            l = n("6sO2");
        n.d(t, "a", function() {
            return i
        })
    },
    "l+ac": function(e, t) {},
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
            a = n("2KeS"),
            r = n("V5M+"),
            o = n("Aj/L"),
            s = n("TToO"),
            l = n("HW6M"),
            c = n("U7vG"),
            d = n("6sO2"),
            u = n("J8WN"),
            p = n("+8VM"),
            m = n("7vx8"),
            g = n("puy8"),
            f = n("HZww"),
            h = n("Odds"),
            b = (n("weaG"), function(e) {
                var t = {
                    "default-avatar__selected": e.selected,
                    "default-avatar": !0
                };
                return c.createElement(h._2, {
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
                }, c.createElement(h._25, {
                    fullHeight: !0,
                    fullWidth: !0,
                    position: h._9.Relative,
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
            N = ["image/*"],
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imagePreviewURL: "",
                        profileUpdated: !1,
                        currentImageHasTallAspectRatio: !1,
                        imageFormat: ""
                    }, t.currentImage = null, t.logger = d.i.withCategory("ProfileImagePicker"), t.onImageInputChange = function(e) {
                        var n;
                        if (null !== e) {
                            n = e[0];
                            var i = Object(S.a)(n),
                                a = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(a, 10) > 10 ? t.setState({
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
                                    a = !1;
                                n.onload = function() {
                                    n.width < n.height && (a = !0), t.setState({
                                        currentImageHasTallAspectRatio: a
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
                            var t, n, i, a, r = this;
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
                                        return a = o.sent(), this.logger.error(a, "Request for upload ID failed to get expected response from server."), this.setState({
                                            statusMessage: k.b.UnexpectedError
                                        }), [2];
                                    case 4:
                                        return this.unsubscribe = d.j.subscribe({
                                            topic: Object(f.i)(this.props.userID),
                                            success: function() {
                                                try {
                                                    Object(y.c)(n, r.currentImage)
                                                } catch (e) {
                                                    r.logger.error(e, "Profile Image upload failed."), r.unsubscribe(), r.setState({
                                                        statusMessage: k.b.UnexpectedError,
                                                        selectedImageIndex: void 0,
                                                        imagePreviewURL: "",
                                                        imageFormat: "",
                                                        currentImageHasTallAspectRatio: !1
                                                    })
                                                }
                                                r.timeoutHandle = setTimeout(function() {
                                                    return r.handlePubSubTimeout()
                                                }, 1e4)
                                            },
                                            failure: function() {
                                                r.setState({
                                                    statusMessage: k.b.UnexpectedError,
                                                    selectedImageIndex: void 0,
                                                    imagePreviewURL: "",
                                                    currentImageHasTallAspectRatio: !1
                                                })
                                            },
                                            onMessage: function(e) {
                                                if (e.upload_id === i) {
                                                    clearTimeout(r.timeoutHandle);
                                                    var t = null;
                                                    t = e.status === k.a.Success ? k.b.Success : e.status === k.a.BadSize ? k.b.BadSizeError : e.status === k.a.NonImage ? k.b.NonImageError : e.status === k.a.WrongFormat ? k.b.WrongFormatError : k.b.UnexpectedError, r.unsubscribe && r.unsubscribe(), r.setState({
                                                        statusMessage: t
                                                    }), r.state.statusMessage === k.b.Success ? r.setState({
                                                        profileUpdated: !0
                                                    }) : (r.setState({
                                                        profileUpdated: !1,
                                                        imagePreviewURL: "",
                                                        imageFormat: ""
                                                    }), r.currentImage = null)
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
                        n = c.createElement(h._2, {
                            className: l(i),
                            "data-test-selector": "preview-image",
                            position: h._9.Relative
                        }, c.createElement("img", {
                            src: "" + this.state.imagePreviewURL
                        }))
                    }
                    var a = null;
                    "" === this.state.imagePreviewURL && (a = c.createElement(h._2, {
                        className: "profile-edit__upload-info"
                    }, c.createElement(h._2, null, c.createElement(h._15, {
                        asset: h._16.Plus,
                        type: h._17.Alt2,
                        height: 20,
                        width: 20
                    })), c.createElement(h._35, {
                        type: h._40.H3,
                        color: h.I.Alt2,
                        fontSize: h.R.Size4
                    }, Object(d.d)("Upload a Photo", "Profile Edit"))));
                    var r = null;
                    this.props.showCloser && (r = c.createElement(p.a, null));
                    var o = null;
                    if (null !== this.state.statusMessage) {
                        var s = Object(k.c)(this.state.statusMessage),
                            m = s.message,
                            f = s.type;
                        o = c.createElement(h._6, {
                            label: m,
                            type: f
                        })
                    }
                    var v = this.props.login;
                    return this.props.displayName && (v = this.props.displayName), c.createElement(h._2, {
                        className: "profile-edit",
                        position: h._9.Relative,
                        fullHeight: !0
                    }, c.createElement(h._25, {
                        className: "profile-edit__background-container",
                        background: h.m.Base,
                        fullWidth: !0
                    }, c.createElement(h._2, {
                        padding: 2,
                        display: h.N.InlineBlock,
                        position: h._9.Relative,
                        textAlign: h._36.Center,
                        fullWidth: !0
                    }, c.createElement(h._25, {
                        textAlign: h._36.Left,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        }
                    }, c.createElement(h._35, {
                        type: h._40.H3,
                        color: h.I.Alt2,
                        fontSize: h.R.Size4
                    }, Object(d.d)("Edit Profile Picture for {userName}", {
                        userName: v
                    }, "Profile Edit"), " ")), c.createElement(h._2, {
                        className: "profile-edit__upload-container",
                        display: h.N.InlineBlock,
                        position: h._9.Relative,
                        textAlign: h._36.Center,
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(h._2, {
                        className: "profile-edit__upload",
                        display: h.N.InlineBlock,
                        position: h._9.Relative,
                        textAlign: h._36.Center
                    }, c.createElement(u.a, {
                        allowedFileTypes: N,
                        onFilesSubmitted: this.onImageInputChange
                    }, a), n)), c.createElement(h._25, {
                        "data-test-selector": "status-message",
                        fontSize: h.R.Size4,
                        position: h._9.Relative,
                        textAlign: h._36.Center,
                        className: "profile-edit__status-message"
                    }, o), c.createElement(h._25, {
                        borderBottom: !0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 2
                        }
                    }, c.createElement(h._2, {
                        textAlign: h._36.Left,
                        margin: {
                            bottom: 1
                        }
                    }, c.createElement(h._35, {
                        type: h._40.H3,
                        color: h.I.Alt2,
                        fontSize: h.R.Size5
                    }, Object(d.d)("Or select one of these", "Profile Edit"))), c.createElement(h._46, {
                        childWidth: h._47.ExtraSmall,
                        gutterSize: h._48.ExtraSmall,
                        placeholderItems: 3
                    }, t)), c.createElement(h._2, {
                        display: h.N.Flex,
                        justifyContent: h._1.Center
                    }, c.createElement(h.u, {
                        "data-test-selector": "update-button",
                        onClick: this.onUpdateButtonClick,
                        size: h.x.Large
                    }, Object(d.d)("Update", "Profile Edit"))))), r)
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
            O = Object(_.d)("Profile Edit")(w),
            C = Object(i.b)(function(e) {
                return {
                    authToken: Object(o.a)(e)
                }
            }, function(e, t) {
                return Object(a.b)({
                    closeModal: function() {
                        return t.successCallback && t.successCallback(), Object(r.c)()
                    }
                }, e)
            })(O);
        n.d(t, "a", function() {
            return C
        })
    },
    xgnX: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return o
        }), t.c = function(e) {
            switch (e) {
                case o.Success:
                    return {
                        message: Object(a.d)("Success!", "Profile Edit"),
                        type: r._7.Success
                    };
                case o.UnexpectedError:
                    return {
                        message: Object(a.d)("Unexpected error, please try again.", "Profile Edit"),
                        type: r._7.Alert
                    };
                case o.BadSizeError:
                    return {
                        message: Object(a.d)("Image might exceed 10MB.", "Profile Edit"),
                        type: r._7.Alert
                    };
                case o.NonImageError:
                    return {
                        message: Object(a.d)("You must upload an image.", "Profile Edit"),
                        type: r._7.Alert
                    };
                case o.WrongFormatError:
                    return {
                        message: Object(a.d)("You must select a valid image type.", "Profile Edit"),
                        type: r._7.Alert
                    };
                case o.TimeoutError:
                    return {
                        message: Object(a.d)("Upload timed-out. Please try again.", "Profile Edit"),
                        type: r._7.Alert
                    };
                case o.Uploading:
                    return {
                        message: Object(a.d)("Uploading....", "Profile Edit"),
                        type: r._7.Brand
                    };
                case o.ImageNotSelected:
                    return {
                        message: Object(a.d)("Select a image first.", "Profile Edit"),
                        type: r._7.Alert
                    };
                default:
                    return {
                        message: Object(a.d)("Please try again.", "Profile Edit"),
                        type: r._7.Alert
                    }
            }
        };
        var i, a = n("6sO2"),
            r = n("Odds");
        ! function(e) {
            e.Success = "SUCCESS", e.NonImage = "IS_IMAGE_VALIDATION_FAILED", e.WrongFormat = "IMAGE_FORMAT_VALIDATION_FAILED", e.BadSize = "FILE_SIZE_VALIDATION_FAILED"
        }(i || (i = {}));
        var o;
        ! function(e) {
            e[e.Success = 0] = "Success", e[e.UnexpectedError = 1] = "UnexpectedError", e[e.BadSizeError = 2] = "BadSizeError", e[e.NonImageError = 3] = "NonImageError", e[e.WrongFormatError = 4] = "WrongFormatError", e[e.TimeoutError = 5] = "TimeoutError", e[e.Uploading = 6] = "Uploading", e[e.ImageNotSelected = 7] = "ImageNotSelected"
        }(o || (o = {}))
    },
    yU6t: function(e, t) {}
});
//# sourceMappingURL=pages.settings-8cdb30ebe12a44ccfaaec5fd3f1379c0.js.map