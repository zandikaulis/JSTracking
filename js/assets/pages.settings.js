webpackJsonp([50], {
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
                        e.preventDefault(), t.finalizeSelections(e.target.files)
                    }, t.onFileDrop = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        }), t.finalizeSelections(e.dataTransfer.files)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(r.K, {
                        dragOver: this.state.isDraggingOver,
                        error: this.props.error
                    }, a.createElement(r.S, {
                        position: r._6.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        zIndex: r._41.Above
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
    J92i: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("HW6M"),
            r = n("U7vG"),
            o = n("6sO2"),
            s = n("J8WN"),
            l = n("+8VM"),
            c = n("7vx8"),
            d = n("HZww"),
            u = n("Odds"),
            p = (n("weaG"), function(e) {
                var t = {
                    "default-avatar__selected": e.selected,
                    "default-avatar": !0
                };
                return r.createElement(u.X, {
                    padding: {
                        bottom: 1
                    }
                }, r.createElement("div", {
                    onClick: function() {
                        e.onSelect(e.index)
                    },
                    "aria-label": Object(o.d)("Click to select Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar")
                }, r.createElement(u._21, {
                    fullHeight: !0,
                    fullWidth: !0,
                    position: u._6.Relative,
                    className: a(t)
                }, r.createElement("img", {
                    alt: Object(o.d)("Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar"),
                    src: e.imageSrc
                }))))
            }),
            g = n("4Q9N"),
            m = n("Tt3k"),
            h = n("W6ca"),
            f = n("xgnX"),
            b = n("CSlQ"),
            v = (n("AL3x"), n("nmDn"));
        n.d(t, "b", function() {
            return S
        }), n.d(t, "a", function() {
            return _
        });
        var S = [{
                id: "profile_image_001",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/bb97f7e6-f11a-4194-9708-52bf5a5125e8-profile_image-300x300.jpg"
            }, {
                id: "profile_image_002",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/27103734-3cda-44d6-a384-f2ab71e4bb85-profile_image-300x300.jpg"
            }, {
                id: "profile_image_003",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/49988c7b-57bc-4dee-bd4f-6df4ad215d3a-profile_image-300x300.jpg"
            }, {
                id: "profile_image_004",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/0ecbb6c3-fecb-4016-8115-aa467b7c36ed-profile_image-300x300.jpg"
            }, {
                id: "profile_image_005",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/cd618d3e-f14d-4960-b7cf-094231b04735-profile_image-300x300.jpg"
            }, {
                id: "profile_image_006",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/4cbf10f1-bb9f-4f57-90e1-15bf06cfe6f5-profile_image-300x300.jpg"
            }, {
                id: "profile_image_007",
                uri: "https://static-cdn.jtvnw.net/user-default-pictures/b83b1794-7df9-4878-916c-88c2ad2e4f9f-profile_image-300x300.jpg"
            }],
            y = ["image/*"],
            k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imagePreviewURL: "",
                        profileUpdated: !1,
                        currentImageHasTallAspectRatio: !1,
                        imageFormat: ""
                    }, t.currentImage = null, t.logger = o.i.withCategory("ProfileImagePicker"), t.onImageInputChange = function(e) {
                        var n;
                        if (null !== e) {
                            n = e[0];
                            var i = Object(m.a)(n),
                                a = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(a, 10) > 10 ? t.setState({
                                statusMessage: f.b.BadSizeError
                            }) : (t.setState({
                                selectedImageIndex: void 0,
                                imagePreviewURL: "",
                                imageFormat: "",
                                currentImageHasTallAspectRatio: !1
                            }), Object(m.b)(n, function(e) {
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
                            statusMessage: f.b.ImageNotSelected
                        })
                    }, t.onUpdateButtonClick = function(e) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t, n, a, r, s = this;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (e.preventDefault(), void 0 !== this.state.selectedImageIndex) return this.setDefaultAvatar(), [2];
                                        if (!this.currentImage) return this.setState({
                                            statusMessage: f.b.ImageNotSelected
                                        }), [2];
                                        this.setState({
                                            statusMessage: f.b.Uploading
                                        }), i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 3, , 4]), [4, Object(h.a)(this.props.userID, this.props.authToken, g.a.ProfileImage, this.state.imageFormat)];
                                    case 2:
                                        return t = i.sent(), n = t.upload_url, a = t.upload_id, [3, 4];
                                    case 3:
                                        return r = i.sent(), this.logger.error(r, "Request for upload ID failed to get expected response from server."), this.setState({
                                            statusMessage: f.b.UnexpectedError
                                        }), [2];
                                    case 4:
                                        return this.unsubscribe = o.j.subscribe({
                                            topic: Object(d.d)(this.props.userID),
                                            success: function() {
                                                try {
                                                    Object(h.c)(n, s.currentImage)
                                                } catch (e) {
                                                    s.logger.error(e, "Profile Image upload failed."), s.unsubscribe(), s.setState({
                                                        statusMessage: f.b.UnexpectedError,
                                                        selectedImageIndex: void 0,
                                                        imagePreviewURL: "",
                                                        imageFormat: "",
                                                        currentImageHasTallAspectRatio: !1
                                                    })
                                                }
                                                s.timeoutHandle = setTimeout(function() {
                                                    return s.handlePubSubTimeout()
                                                }, 1e4)
                                            },
                                            failure: function() {
                                                s.setState({
                                                    statusMessage: f.b.UnexpectedError,
                                                    selectedImageIndex: void 0,
                                                    imagePreviewURL: "",
                                                    currentImageHasTallAspectRatio: !1
                                                })
                                            },
                                            onMessage: function(e) {
                                                if (e.upload_id === a) {
                                                    clearTimeout(s.timeoutHandle);
                                                    var t = null;
                                                    t = e.status === f.a.Success ? f.b.Success : e.status === f.a.BadSize ? f.b.BadSizeError : e.status === f.a.NonImage ? f.b.NonImageError : e.status === f.a.WrongFormat ? f.b.WrongFormatError : f.b.UnexpectedError, s.unsubscribe && s.unsubscribe(), s.setState({
                                                        statusMessage: t
                                                    }), s.state.statusMessage === f.b.Success ? s.setState({
                                                        profileUpdated: !0
                                                    }) : (s.setState({
                                                        profileUpdated: !1,
                                                        imagePreviewURL: "",
                                                        imageFormat: ""
                                                    }), s.currentImage = null)
                                                }
                                            }
                                        }), [2]
                                }
                            })
                        })
                    }, t.onDefaultImageSelected = function(e) {
                        t.setState({
                            selectedImageIndex: e,
                            imagePreviewURL: S[e].uri
                        })
                    }, t.handlePubSubTimeout = function() {
                        t.unsubscribe(), t.setState({
                            statusMessage: f.b.TimeoutError
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
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
                        t = S.map(function(t, n) {
                            return r.createElement(p, {
                                key: t.id,
                                imageSrc: t.uri,
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
                        n = r.createElement(u.X, {
                            className: a(i),
                            "data-test-selector": "preview-image",
                            position: u._6.Relative
                        }, r.createElement("img", {
                            src: "" + this.state.imagePreviewURL
                        }))
                    }
                    var c = null;
                    "" === this.state.imagePreviewURL && (c = r.createElement(u.X, {
                        className: "profile-edit__upload-info"
                    }, r.createElement(u.X, null, r.createElement(u._12, {
                        asset: u._13.Plus,
                        type: u._14.Alt2,
                        height: 20,
                        width: 20
                    })), r.createElement(u._25, {
                        type: u._30.H3,
                        color: u.F.Alt2,
                        fontSize: u.N.Size4
                    }, Object(o.d)("Upload a Photo", "Profile Edit"))));
                    var d = null;
                    this.props.showCloser && (d = r.createElement(l.a, null));
                    var g = null;
                    if (null !== this.state.statusMessage) {
                        var m = Object(f.c)(this.state.statusMessage),
                            h = m.message,
                            b = m.type;
                        g = r.createElement(u._3, {
                            label: h,
                            type: b
                        })
                    }
                    var v = this.props.login;
                    return this.props.displayName && (v = this.props.displayName), r.createElement(u.X, {
                        className: "profile-edit",
                        position: u._6.Relative,
                        fullHeight: !0
                    }, r.createElement(u._21, {
                        className: "profile-edit__background-container",
                        background: u.m.Base,
                        fullWidth: !0
                    }, r.createElement(u.X, {
                        padding: 2,
                        display: u.J.InlineBlock,
                        position: u._6.Relative,
                        textAlign: u._26.Center,
                        fullWidth: !0
                    }, r.createElement(u._21, {
                        textAlign: u._26.Left,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u._25, {
                        type: u._30.H3,
                        color: u.F.Alt2,
                        fontSize: u.N.Size4
                    }, Object(o.d)("Edit Profile Picture for {userName}", {
                        userName: v
                    }, "Profile Edit"), " ")), r.createElement(u.X, {
                        className: "profile-edit__upload-container",
                        display: u.J.InlineBlock,
                        position: u._6.Relative,
                        textAlign: u._26.Center,
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u.X, {
                        className: "profile-edit__upload",
                        display: u.J.InlineBlock,
                        position: u._6.Relative,
                        textAlign: u._26.Center
                    }, r.createElement(s.a, {
                        allowedFileTypes: y,
                        onFilesSubmitted: this.onImageInputChange
                    }, c), n)), r.createElement(u._21, {
                        "data-test-selector": "status-message",
                        fontSize: u.N.Size4,
                        position: u._6.Relative,
                        textAlign: u._26.Center,
                        className: "profile-edit__status-message"
                    }, g), r.createElement(u._21, {
                        borderBottom: !0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(u.X, {
                        textAlign: u._26.Left,
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(u._25, {
                        type: u._30.H3,
                        color: u.F.Alt2,
                        fontSize: u.N.Size5
                    }, Object(o.d)("Or select one of these", "Profile Edit"))), r.createElement(u._36, {
                        childWidth: u._37.ExtraSmall,
                        gutterSize: u._38.ExtraSmall,
                        placeholderItems: 3
                    }, t)), r.createElement(u.X, {
                        display: u.J.Flex,
                        justifyContent: u.W.Center
                    }, r.createElement(u.u, {
                        "data-test-selector": "update-button",
                        onClick: this.onUpdateButtonClick,
                        size: u.x.Large
                    }, Object(o.d)("Update", "Profile Edit"))))), d)
                }, t.prototype.setDefaultAvatar = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    this.setState({
                                        statusMessage: f.b.Uploading
                                    }), e = f.b.UnexpectedError, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, Object(h.b)(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
                                case 2:
                                    return 204 === (t = i.sent()).status || 200 === t.status ? e = f.b.Success : this.logger.error(new Error("Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), "Default Avatar PUT failed. Fetch returned non-200 status: " + t.status), [3, 4];
                                case 3:
                                    return n = i.sent(), this.logger.error(n, "Default Avatar PUT failed."), [3, 4];
                                case 4:
                                    return this.setState({
                                        statusMessage: e,
                                        profileUpdated: e === f.b.Success
                                    }), [2]
                            }
                        })
                    })
                }, t = i.__decorate([Object(c.a)(v, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(r.Component),
            _ = Object(b.d)("Profile Edit")(k)
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
            return e.description && (t = g.createElement(N.X, {
                margin: {
                    top: 1
                }
            }, g.createElement(N._25, {
                color: N.F.Alt2
            }, e.description))), g.createElement(N.X, {
                margin: {
                    top: 2,
                    bottom: 4
                }
            }, g.createElement(N._25, {
                type: N._30.H3,
                fontSize: N.N.Size2
            }, e.title), t)
        }

        function a(e, t) {
            var n = {
                time: Date.now(),
                new_value: t.newValue
            };
            h.n.tracking.track(e, n)
        }

        function r() {
            return g.createElement(x, {
                label: Object(h.d)("Password", "ChangePasswordLink"),
                orientation: N.P.Horizontal
            }, g.createElement(N._25, null, Object(h.d)("<x:link>Change password.</x:link> Improve your security with a strong password.", {
                "x:link": function(e) {
                    return g.createElement("a", {
                        key: "change-password-link",
                        href: "https://passport.twitch.tv/passwords/new?"
                    }, e)
                }
            }, "ChangePasswordLink")))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o, s = n("RH2O"),
            l = n("2KeS"),
            c = n("+xm8"),
            d = n("f2i/"),
            u = n("Aj/L"),
            p = n("TToO"),
            g = n("U7vG"),
            m = n("CIox"),
            h = n("6sO2"),
            f = n("yWCw"),
            b = n("CSlQ"),
            v = n("eXld"),
            S = n("2aoH"),
            y = n("j7/Y"),
            k = n("Ejve"),
            _ = n("w9tK"),
            E = n("vH/s"),
            w = n("H4lr"),
            N = n("Odds");
        ! function(e) {
            e[e.NoChanges = 0] = "NoChanges", e[e.DirtyChanges = 1] = "DirtyChanges", e[e.Working = 2] = "Working", e[e.Success = 3] = "Success", e[e.Error = 4] = "Error"
        }(o || (o = {}));
        var O, C = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    var e = N.y.Default,
                        t = Object(h.d)("Save Changes", "SaveSettingsFooter"),
                        n = N.z.Default,
                        i = !1;
                    return this.props.status === o.Working ? e = N.y.Loading : this.props.status === o.Success ? e = N.y.Success : this.props.status === o.Error ? (n = N.z.Alert, t = Object(h.d)("Failed to save settings. Try again.", "SaveSettingsFooter")) : this.props.status === o.NoChanges && (i = !0), g.createElement(w.a, null, g.createElement(N._21, {
                        borderTop: !0,
                        display: N.J.Flex,
                        alignItems: N.c.Center,
                        justifyContent: N.W.Center,
                        padding: {
                            y: 2
                        },
                        margin: {
                            x: _t
                        }
                    }, g.createElement(N.u, {
                        disabled: i,
                        size: N.x.Large,
                        state: e,
                        type: n,
                        onClick: this.props.onClickSave,
                        "data-a-target": "save-user-settings-button"
                    }, t)))
                }, t
            }(g.Component),
            P = n("9u8h"),
            j = function(e) {
                return g.createElement(N.X, {
                    margin: {
                        top: 1
                    }
                }, g.createElement(N._25, {
                    color: N.F.Alt,
                    "data-a-target": e.dataTarget
                }, e.text))
            },
            x = (n("l+ac"), function(e) {
                return g.createElement(N.X, {
                    className: "settings-form-group",
                    margin: {
                        bottom: 4
                    }
                }, g.createElement(N.O, {
                    error: e.error,
                    errorMessage: e.errorMessage || Object(h.d)("Sorry, something went wrong. Please try again later.", "SettingsFormGroup"),
                    hint: e.hint,
                    id: e.id,
                    label: e.label,
                    labelOptional: e.labelOptional,
                    orientation: e.orientation
                }, e.children))
            }),
            T = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderBody = function() {
                        return t.props.showPlaceholder ? g.createElement(N._5, null) : g.createElement(N.X, null, g.createElement(N._32, {
                            checked: t.props.checked,
                            error: t.props.error,
                            disabled: t.props.disabled,
                            onChange: t.onChange,
                            id: t.props.id
                        }), g.createElement(j, {
                            text: t.props.description
                        }))
                    }, t.onChange = function(e) {
                        t.props.onChange && t.props.onChange(e.currentTarget.checked)
                    }, t
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    return g.createElement(x, {
                        id: this.props.id,
                        label: this.props.label,
                        error: this.props.error,
                        errorMessage: this.props.errorMessage,
                        orientation: N.P.Horizontal
                    }, this.renderBody())
                }, t
            }(g.Component),
            U = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    var e = Object(h.d)("Auto Hosting", "AutoHostToggle"),
                        t = Object(h.d)("Toggle all forms of auto hosting: teammates, host list, and similar channels. <x:link>Learn more</x:link>", {
                            "x:link": function(e) {
                                return g.createElement("a", {
                                    key: "learn-more-link",
                                    href: "https://blog.twitch.tv/grow-your-community-with-auto-hosting-e80c1460f6e1"
                                }, g.createElement(N._25, {
                                    type: N._30.Span,
                                    bold: !0
                                }, e))
                            }
                        }, "AutoHostToggle");
                    return g.createElement(T, {
                        id: "auto-host-toggle",
                        label: e,
                        description: t,
                        checked: this.props.enabled,
                        error: this.props.error,
                        disabled: this.props.updating,
                        onChange: this.props.onChange,
                        showPlaceholder: void 0 === this.props.enabled
                    })
                }, t
            }(g.Component);
        ! function(e) {
            e.Random = "random", e.Ordered = "ordered"
        }(O || (O = {}));
        var F, I = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderBody = function() {
                        return void 0 === t.props.hostPriority ? g.createElement(N._5, null) : g.createElement(N._18, {
                            value: t.props.hostPriority,
                            onChange: t.onHostPriorityChange,
                            error: t.props.error,
                            disabled: t.props.updating
                        }, g.createElement("option", {
                            value: O.Random
                        }, Object(h.d)("Host channels randomly.", "SettingsHostPriority")), g.createElement("option", {
                            value: O.Ordered
                        }, Object(h.d)("Host channels by the order they appear in the list.", "SettingsHostPriority")))
                    }, t.onHostPriorityChange = function(e) {
                        switch (e.currentTarget.value) {
                            case O.Random:
                                t.props.onChange(O.Random);
                                break;
                            case O.Ordered:
                                t.props.onChange(O.Ordered)
                        }
                    }, t
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    return g.createElement(x, {
                        label: "Host Priority",
                        error: this.props.error
                    }, this.renderBody())
                }, t
            }(g.Component),
            A = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    var e = Object(h.d)("Auto Host Channels Similar to Yours", "SimilarHostToggle"),
                        t = Object(h.d)("Streamers on your primary team and host list will be hosted first.", "SimilarHostToggle ");
                    return g.createElement(T, {
                        id: "similar-host-toggle",
                        label: e,
                        description: t,
                        checked: this.props.enabled,
                        error: this.props.error,
                        disabled: this.props.updating,
                        onChange: this.props.onChange,
                        showPlaceholder: void 0 === this.props.enabled
                    })
                }, t
            }(g.Component),
            D = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    var e = Object(h.d)("Team Hosting", "TeamHostToggle"),
                        t = Object(h.d)("Automatically host random channels from your team when you're not live. Team channels will be hosted before any channels in your host list.", "TeamHostToggle ");
                    return g.createElement(T, {
                        id: "team-host-toggle",
                        label: e,
                        description: t,
                        checked: this.props.enabled,
                        error: this.props.error,
                        disabled: this.props.updating,
                        onChange: this.props.onChange,
                        showPlaceholder: void 0 === this.props.enabled
                    })
                }, t
            }(g.Component),
            H = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    var e = Object(h.d)("Vodcast Hosting", "VodcastToggle"),
                        t = Object(h.d)("Includes Vodcasts in auto host. <x:link>Learn about Vodcasts.</x:link>", {
                            "x:link": function(e) {
                                return g.createElement("a", {
                                    key: "learn-more-link",
                                    href: "https://blog.twitch.tv/vodcast-brings-the-twitch-community-experience-to-uploads-54098498715"
                                }, g.createElement(N._25, {
                                    type: N._30.Span,
                                    bold: !0
                                }, e))
                            }
                        }, "VodcastToggle");
                    return g.createElement(T, {
                        id: "vodcast-host-toggle",
                        label: e,
                        description: t,
                        checked: this.props.enabled,
                        error: this.props.error,
                        disabled: this.props.updating,
                        onChange: this.props.onChange,
                        showPlaceholder: void 0 === this.props.enabled
                    })
                }, t
            }(g.Component),
            L = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    return g.createElement(N.X, null, g.createElement(i, {
                        title: Object(h.d)("Auto Hosting", "AutoHostSettingsComponent"),
                        description: Object(h.d)("Host your friends and favorite channels while you're offline", "AutoHostSettingsComponent")
                    }), g.createElement(U, {
                        enabled: this.props.autoHostingEnabled,
                        error: this.props.autoHostingError,
                        updating: this.props.autoHostingUpdating,
                        onChange: this.props.onAutoHostingEnabledChange
                    }), g.createElement(D, {
                        enabled: this.props.teamHostingEnabled,
                        error: this.props.teamHostingError,
                        updating: this.props.teamHostingUpdating,
                        onChange: this.props.onTeamHostingEnabledChange
                    }), g.createElement(H, {
                        enabled: this.props.vodcastHostingEnabled,
                        error: this.props.vodcastHostingError,
                        updating: this.props.vodcastHostingUpdating,
                        onChange: this.props.onVodcastHostingEnabledChange
                    }), g.createElement(I, {
                        hostPriority: this.props.hostPriority,
                        error: this.props.hostPriorityError,
                        updating: this.props.hostPriorityUpdating,
                        onChange: this.props.onHostPriorityChange
                    }), g.createElement(A, {
                        enabled: this.props.similarHostingEnabled,
                        error: this.props.similarHostingError,
                        updating: this.props.similarHostingUpdating,
                        onChange: this.props.onSimilarHostingEnabledChange
                    }))
                }, t
            }(g.Component),
            R = "/kraken/autohost/settings",
            M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        autoHostingError: !1,
                        autoHostingUpdating: !1,
                        teamHostingError: !1,
                        teamHostingUpdating: !1,
                        vodcastHostingError: !1,
                        vodcastHostingUpdating: !1,
                        hostPriorityError: !1,
                        hostPriorityUpdating: !1,
                        similarHostingError: !1,
                        similarHostingUpdating: !1
                    }, t.deserialize = function(e) {
                        return e.body ? {
                            autoHostingEnabled: e.body.settings.enabled,
                            autoHostingError: !1,
                            autoHostingUpdating: !1,
                            teamHostingEnabled: e.body.settings.team_host,
                            teamHostingError: !1,
                            teamHostingUpdating: !1,
                            vodcastHostingEnabled: !e.body.settings.deprioritize_vodcast,
                            vodcastHostingError: !1,
                            vodcastHostingUpdating: !1,
                            hostPriority: e.body.settings.strategy,
                            hostPriorityError: !1,
                            hostPriorityUpdating: !1,
                            similarHostingEnabled: e.body.settings.recommended_host,
                            similarHostingError: !1,
                            similarHostingUpdating: !1
                        } : t.state
                    }, t.updateAutoHostSetting = function(e) {
                        return p.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return p.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, P.a.put(R, {
                                            body: e
                                        })];
                                    case 1:
                                        return t = n.sent(), this.setState(this.deserialize(t)), [2]
                                }
                            })
                        })
                    }, t.setAutoHostEnabled = function(e) {
                        return p.__awaiter(t, void 0, void 0, function() {
                            return p.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), this.setState({
                                            autoHostingUpdating: !0
                                        }), [4, this.updateAutoHostSetting({
                                            enabled: e
                                        })];
                                    case 1:
                                        return t.sent(),
                                            function(e) {
                                                a(E.SpadeEventType.AutoHostToggle, e)
                                            }({
                                                newValue: e
                                            }), [3, 3];
                                    case 2:
                                        return t.sent(), this.setState({
                                            autoHostingUpdating: !1,
                                            autoHostingError: !0
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.setTeamHostEnabled = function(e) {
                        return p.__awaiter(t, void 0, void 0, function() {
                            return p.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), this.setState({
                                            teamHostingUpdating: !0
                                        }), [4, this.updateAutoHostSetting({
                                            team_host: e
                                        })];
                                    case 1:
                                        return t.sent(),
                                            function(e) {
                                                a(E.SpadeEventType.TeamHostToggle, e)
                                            }({
                                                newValue: e
                                            }), [3, 3];
                                    case 2:
                                        return t.sent(), this.setState({
                                            teamHostingUpdating: !1,
                                            teamHostingError: !0
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.setVodcastHostEnabled = function(e) {
                        return p.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return p.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        t = !e, n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), this.setState({
                                            vodcastHostingUpdating: !0
                                        }), [4, this.updateAutoHostSetting({
                                            deprioritize_vodcast: t
                                        })];
                                    case 2:
                                        return n.sent(),
                                            function(e) {
                                                a(E.SpadeEventType.DeprioritizeVodcastToggle, e)
                                            }({
                                                newValue: t
                                            }), [3, 4];
                                    case 3:
                                        return n.sent(), this.setState({
                                            vodcastHostingUpdating: !1,
                                            vodcastHostingError: !0
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t.setHostPriority = function(e) {
                        return p.__awaiter(t, void 0, void 0, function() {
                            return p.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), this.setState({
                                            hostPriorityUpdating: !0
                                        }), [4, this.updateAutoHostSetting({
                                            strategy: e
                                        })];
                                    case 1:
                                        return t.sent(), [3, 3];
                                    case 2:
                                        return t.sent(), this.setState({
                                            hostPriorityUpdating: !1,
                                            hostPriorityError: !0
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t.setSimilarHostEnabled = function(e) {
                        return p.__awaiter(t, void 0, void 0, function() {
                            return p.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return t.trys.push([0, 2, , 3]), this.setState({
                                            similarHostingUpdating: !0
                                        }), [4, this.updateAutoHostSetting({
                                            recommended_host: e
                                        })];
                                    case 1:
                                        return t.sent(),
                                            function(e) {
                                                a(E.SpadeEventType.SimilarHostToggle, e)
                                            }({
                                                newValue: e
                                            }), [3, 3];
                                    case 2:
                                        return t.sent(), this.setState({
                                            similarHostingUpdating: !1,
                                            similarHostingError: !0
                                        }), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    return p.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return p.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, P.a.get(R)];
                                case 1:
                                    return e = t.sent(), this.props.latencyTracking.reportInteractive(), this.setState(this.deserialize(e)), [3, 3];
                                case 2:
                                    return t.sent(), this.setState({
                                        autoHostingEnabled: !1,
                                        autoHostingError: !0,
                                        teamHostingEnabled: !1,
                                        teamHostingError: !0,
                                        vodcastHostingEnabled: !1,
                                        vodcastHostingError: !0,
                                        hostPriority: O.Random,
                                        hostPriorityError: !0,
                                        similarHostingEnabled: !1,
                                        similarHostingError: !0
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return g.createElement(L, {
                        autoHostingEnabled: this.state.autoHostingEnabled,
                        autoHostingError: this.state.autoHostingError,
                        autoHostingUpdating: this.state.autoHostingUpdating,
                        onAutoHostingEnabledChange: this.setAutoHostEnabled,
                        teamHostingEnabled: this.state.teamHostingEnabled,
                        teamHostingError: this.state.teamHostingError,
                        teamHostingUpdating: this.state.teamHostingUpdating,
                        onTeamHostingEnabledChange: this.setTeamHostEnabled,
                        vodcastHostingEnabled: this.state.vodcastHostingEnabled,
                        vodcastHostingError: this.state.vodcastHostingError,
                        vodcastHostingUpdating: this.state.vodcastHostingUpdating,
                        onVodcastHostingEnabledChange: this.setVodcastHostEnabled,
                        hostPriority: this.state.hostPriority,
                        hostPriorityError: this.state.hostPriorityError,
                        hostPriorityUpdating: this.state.hostPriorityUpdating,
                        onHostPriorityChange: this.setHostPriority,
                        similarHostingEnabled: this.state.similarHostingEnabled,
                        similarHostingError: this.state.similarHostingError,
                        similarHostingUpdating: this.state.similarHostingUpdating,
                        onSimilarHostingEnabledChange: this.setSimilarHostEnabled
                    })
                }, t
            }(g.Component),
            B = Object(b.d)("SettingsAutoHostContainer")(M),
            z = n("3zLD"),
            V = n("7vx8"),
            X = function(e) {
                var t = e.saving || e.errorLoading;
                return g.createElement(T, {
                    id: "settings-channel-page-block-hyperlinks",
                    label: Object(h.d)("Block Hyperlinks", "BlockHyperlinksToggle"),
                    description: Object(h.d)("Your channel's chat will automatically delete posted URLs except for ones posted by you, moderators, and admins.", "BlockHyperlinksToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            q = n("ar1V"),
            W = function(e) {
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
                return p.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
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
                    return g.createElement(X, {
                        loading: this.props.data.loading && !e,
                        saving: this.state.saving,
                        checked: this.state.checked,
                        errorLoading: !!this.props.data.error && !e,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onChange
                    })
                }, t
            }(g.Component),
            G = Object(z.compose)(Object(b.d)("BlockHyperlinksToggle"), Object(V.a)(q))(W),
            J = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        var n = +e.currentTarget.value;
                        t.props.onChange(n)
                    }, t
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.loading || this.props.saving || this.props.errorLoading,
                        n = [{
                            delay: 0,
                            label: Object(h.d)("Off", "ChatDelayRadioButtons"),
                            selected: 0 === this.props.chatDelayMs
                        }, {
                            delay: 2e3,
                            label: Object(h.d)("2 seconds", "ChatDelayRadioButtons"),
                            selected: 2e3 === this.props.chatDelayMs
                        }, {
                            delay: 4e3,
                            label: Object(h.d)("4 seconds", "ChatDelayRadioButtons"),
                            selected: 4e3 === this.props.chatDelayMs
                        }, {
                            delay: 6e3,
                            label: Object(h.d)("6 seconds", "ChatDelayRadioButtons"),
                            selected: 6e3 === this.props.chatDelayMs
                        }];
                    return g.createElement(x, {
                        orientation: N.P.Horizontal,
                        label: Object(h.d)("Non-Mod Chat Delay", "ChatDelayRadioButtons"),
                        error: this.props.errorLoading || this.props.errorSaving
                    }, g.createElement(N.X, {
                        display: N.J.Flex,
                        flexDirection: N.L.Row
                    }, n.map(function(n) {
                        var i = "chat-delay:" + n.label;
                        return g.createElement(N.X, {
                            key: i,
                            margin: {
                                right: 2
                            },
                            display: N.J.Flex,
                            flexDirection: N.L.Row
                        }, g.createElement(N._11, {
                            checked: n.selected,
                            value: n.delay.toString(),
                            label: n.label,
                            name: "Non-Mod Chat Delay: " + n.delay / 1e3 + "s",
                            onChange: e.onChange,
                            disabled: t,
                            "data-test-selector": "chat-delay-radio:" + n.delay
                        }))
                    })), g.createElement(j, {
                        text: Object(h.d)("Adds a short delay before non-mods see messages. Any message that is timed out or banned during the delay is removed from chat completely.", "ChatDelayRadioButtons")
                    }))
                }, t
            }(g.Component),
            Q = n("D2cp"),
            Y = function(e) {
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
                return p.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
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
                    return g.createElement(J, {
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
            }(g.Component),
            $ = Object(z.compose)(Object(b.d)("ChatDelayRadioButtons"), Object(V.a)(Q))(Y),
            K = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    var e = null,
                        t = this.props.loading || this.props.saving || this.props.errorLoading;
                    return (this.props.dirty || this.props.saving) && (e = g.createElement(N.X, {
                        margin: {
                            top: 1
                        }
                    }, g.createElement(N.u, {
                        onClick: this.props.onClickSave,
                        state: this.props.saving ? N.y.Loading : N.y.Default
                    }, Object(h.d)("Save Changes", "ChatRulesTextArea")))), g.createElement(x, {
                        orientation: N.P.Horizontal,
                        label: Object(h.d)("Chat Rules", "ChatRulesTextArea"),
                        error: this.props.errorLoading || this.props.errorSaving
                    }, g.createElement(N._27, {
                        disabled: t,
                        value: this.props.rules,
                        onChange: this.props.onChange,
                        rows: 5
                    }), g.createElement(j, {
                        text: Object(h.d)("Require first-time viewers to agree to your rules before chatting. One rule per line.", "ChatRulesTextArea")
                    }), e)
                }, t
            }(g.Component),
            Z = n("WaOj"),
            ee = function(e) {
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
                return p.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
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
                    return g.createElement(K, {
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
            }(g.Component),
            te = Object(z.compose)(Object(b.d)("ChatRulesTextArea"), Object(V.a)(Z))(ee),
            ne = function(e) {
                var t = e.saving || e.errorLoading;
                return g.createElement(T, {
                    id: "settings-channel-page-email-verification",
                    label: Object(h.d)("Email Verification", "EmailVerificationToggle"),
                    description: Object(h.d)("Anyone that would like to send messages to your chat room must first verify their email address.", "EmailVerificationToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            ie = n("woYr"),
            ae = function(e) {
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
                return p.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
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
                    return g.createElement(ne, {
                        loading: this.props.data.loading && !e,
                        saving: this.state.saving,
                        checked: this.state.checked,
                        onChange: this.onChange,
                        errorLoading: !!this.props.data.error && !e,
                        errorSaving: this.state.errorSaving
                    })
                }, t
            }(g.Component),
            re = Object(z.compose)(Object(b.d)("EmailVerificationToggle"), Object(V.a)(ie))(ae),
            oe = function(e) {
                var t = e.errorSaving || e.errorLoading;
                return g.createElement(T, {
                    id: "settings-channel-page-mature-content",
                    label: Object(h.d)("Mature Content", "MatureContentToggle"),
                    description: Object(h.d)("Enable this setting if your stream contains content that may be inappropriate for younger audiences. You may never broadcast sexual activity, nudity, threats or extreme violence. Doing so will result in immediate, irrevocable termination of your account. Please make sure your content will comply with the <x:link>Terms of Service</x:link> before broadcasting", {
                        "x:link": function(e) {
                            return g.createElement("a", {
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
            se = function(e) {
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
                return p.__extends(t, e), t.prototype.render = function() {
                    return g.createElement(oe, {
                        checked: this.state.checked,
                        saving: this.state.saving,
                        loading: this.state.loading,
                        errorLoading: this.state.errorLoading,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onCheckBoxChange
                    })
                }, t
            }(g.Component),
            le = n("V5M+"),
            ce = n("J8WN"),
            de = n("+8VM"),
            ue = n("HZww"),
            pe = n("4Q9N"),
            ge = n("Tt3k"),
            me = n("W6ca"),
            he = n("xgnX"),
            fe = (n("+Aaf"), n("0H+u")),
            be = ["image/*"],
            ve = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imageUpdated: !1,
                        loading: !1
                    }, t.currentImage = null, t.logger = h.i.withCategory("UserImageUploader"), t.onImageInputChange = function(e) {
                        var n;
                        if (null !== e) {
                            t.setState({
                                loading: !0
                            }), n = e[0];
                            var i = Object(ge.a)(n),
                                a = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(a, 10) > 10 ? t.setState({
                                statusMessage: he.b.BadSizeError
                            }) : Object(ge.b)(n, function(e) {
                                return p.__awaiter(t, void 0, void 0, function() {
                                    var t, n, a, r, o = this;
                                    return p.__generator(this, function(s) {
                                        switch (s.label) {
                                            case 0:
                                                this.currentImage = e, s.label = 1;
                                            case 1:
                                                return s.trys.push([1, 3, , 4]), [4, Object(me.a)(this.props.userID, this.props.authToken, this.props.imageType, i)];
                                            case 2:
                                                return t = s.sent(), n = t.upload_url, a = t.upload_id, [3, 4];
                                            case 3:
                                                return r = s.sent(), this.logger.error(r, "Request for upload ID failed to get expected response from server."), this.setState({
                                                    statusMessage: he.b.UnexpectedError
                                                }), [2];
                                            case 4:
                                                return this.unsubscribe = h.j.subscribe({
                                                    topic: Object(ue.d)(this.props.userID),
                                                    success: function() {
                                                        try {
                                                            Object(me.c)(n, o.currentImage)
                                                        } catch (e) {
                                                            o.logger.error(e, "Image upload failed."), o.unsubscribe(), o.setState({
                                                                statusMessage: he.b.UnexpectedError,
                                                                loading: !1
                                                            })
                                                        }
                                                        o.timeoutHandle = setTimeout(function() {
                                                            return o.handlePubSubTimeout()
                                                        }, 1e4)
                                                    },
                                                    failure: function() {
                                                        o.setState({
                                                            statusMessage: he.b.UnexpectedError,
                                                            loading: !1
                                                        })
                                                    },
                                                    onMessage: function(e) {
                                                        if (e.upload_id === a) {
                                                            clearTimeout(o.timeoutHandle);
                                                            var t = null;
                                                            e.status === he.a.Success ? t = he.b.Success : e.status === he.a.BadSize ? (t = he.b.BadSizeError, o.currentImage = null) : e.status === he.a.NonImage ? (t = he.b.NonImageError, o.currentImage = null) : e.status === he.a.WrongFormat ? (t = he.b.WrongFormatError, o.currentImage = null) : (t = he.b.UnexpectedError, o.currentImage = null), o.unsubscribe && o.unsubscribe(), o.setState({
                                                                statusMessage: t,
                                                                loading: !1,
                                                                imageUpdated: e.status === he.a.Success
                                                            })
                                                        }
                                                    }
                                                }), [2]
                                        }
                                    })
                                })
                            })
                        } else t.setState({
                            statusMessage: he.b.ImageNotSelected
                        })
                    }, t.handlePubSubTimeout = function() {
                        t.unsubscribe(), t.setState({
                            statusMessage: he.b.TimeoutError
                        })
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
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
                    var t = Object(h.d)("Editing profile banner for {userName}", {
                        userName: e
                    }, "UserImageUploader");
                    this.props.imageType === pe.a.ChannelOfflineImage && (t = Object(h.d)("Editing video banner for {userName}", {
                        userName: e
                    }, "UserImageUploader"));
                    var n = null;
                    if (this.state.loading) n = g.createElement(N.X, {
                        className: "user-image-uploader__upload-svg--anim-fill",
                        position: N._6.Relative,
                        "data-test-selector": "loading-status"
                    }, g.createElement(N._12, {
                        asset: N._13.Upload,
                        type: N._14.Brand,
                        width: 99,
                        height: 76
                    }));
                    else {
                        var i = Object(h.d)("Recommended image size: 1200x380 and less than 10MB.", "UserImageUploader");
                        this.props.imageType === pe.a.ChannelOfflineImage && (i = Object(h.d)("Recommended image size: 1920x1080 and less than 10MB.", "UserImageUploader")), n = g.createElement(N.X, null, g.createElement(N.X, {
                            className: "user-image-uploader__upload-info"
                        }, g.createElement(N.X, null, g.createElement(N._12, {
                            asset: N._13.Plus,
                            type: N._14.Alt2,
                            height: 20,
                            width: 20
                        })), g.createElement(N._25, {
                            type: N._30.H3,
                            color: N.F.Alt2,
                            fontSize: N.N.Size4
                        }, Object(h.d)("Upload a Photo", "User Image Uploader"))), g.createElement(N.X, {
                            className: "user-image-uploader__upload-recommendation",
                            position: N._6.Absolute,
                            textAlign: N._26.Left,
                            attachLeft: !0,
                            attachBottom: !0,
                            margin: {
                                left: 3,
                                bottom: 1
                            }
                        }, g.createElement(N._25, {
                            type: N._30.H6,
                            color: N.F.Alt2,
                            fontSize: N.N.Size8,
                            align: N._40.TextBottom
                        }, i)))
                    }
                    var a = null;
                    this.props.showCloser && (a = g.createElement(de.a, null));
                    var r = null;
                    if (null !== this.state.statusMessage) {
                        var o = Object(he.c)(this.state.statusMessage);
                        r = g.createElement(N._3, {
                            label: o.message,
                            type: o.type
                        })
                    }
                    return g.createElement(N.X, {
                        className: "user-image-uploader",
                        position: N._6.Relative,
                        fullHeight: !0
                    }, g.createElement(N._21, {
                        className: "user-image-uploader__background-container",
                        background: N.m.Base,
                        fullWidth: !0
                    }, g.createElement(N.X, {
                        padding: 2,
                        display: N.J.InlineBlock,
                        position: N._6.Relative,
                        textAlign: N._26.Center,
                        fullWidth: !0
                    }, g.createElement(N._21, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        }
                    }, g.createElement(N._25, {
                        type: N._30.H3,
                        fontSize: N.N.Size4
                    }, t)), g.createElement(N.X, {
                        className: "user-image-uploader__upload-container",
                        display: N.J.InlineBlock,
                        position: N._6.Relative,
                        textAlign: N._26.Center,
                        margin: {
                            bottom: 1
                        }
                    }, g.createElement(N.X, {
                        className: "user-image-uploader__upload",
                        display: N.J.InlineBlock,
                        position: N._6.Relative,
                        textAlign: N._26.Center
                    }, g.createElement(ce.a, {
                        allowedFileTypes: be,
                        onFilesSubmitted: this.onImageInputChange
                    }, n))), g.createElement(N._21, {
                        "data-test-selector": "status-message",
                        fontSize: N.N.Size4,
                        position: N._6.Relative,
                        textAlign: N._26.Center,
                        className: "user-image-uploader__status-message"
                    }, r))), a)
                }, t = p.__decorate([Object(V.a)(fe, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(g.Component),
            Se = Object(b.d)("User Image Upload")(ve),
            ye = Object(s.b)(function(e) {
                return {
                    authToken: Object(u.a)(e)
                }
            }, function(e, t) {
                return Object(l.b)({
                    closeModal: function() {
                        return t.successCallback && t.successCallback(), Object(le.c)()
                    }
                }, e)
            })(Se),
            ke = n("J4ib"),
            _e = n("vm+z"),
            Ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.showModal = function() {
                        t.props.user && t.props.showUploaderModal(t.props.user)
                    }, t
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    var e = null,
                        t = null;
                    if (this.props.data && this.props.data.user && this.props.data.user.offlineImageURL) {
                        e = g.createElement("img", {
                            "data-test-selector": "test-channel-offline-image-selector",
                            height: "90",
                            width: "160",
                            src: this.props.data.user.offlineImageURL
                        });
                        var n = Object(ke.d)("Remove my Video Player Banner Image", "UploadVideoPlayerBanner");
                        t = g.createElement(N.v, {
                            icon: N._13.Trash,
                            ariaLabel: n
                        })
                    }
                    return g.createElement(N.X, null, g.createElement(i, {
                        title: Object(ke.d)("Video Player Banner", "UploadVideoPlayerBanner"),
                        description: Object(ke.d)("This is displayed on the player when your channel is offline.", "UploadVideoPlayerBanner")
                    }), g.createElement(N.X, {
                        display: N.J.Flex
                    }, e, g.createElement(N.X, {
                        padding: {
                            left: 1,
                            top: 1
                        }
                    }, g.createElement(N.X, {
                        display: N.J.Flex
                    }, g.createElement(N.u, {
                        "data-test-selector": "test-upload-video-player-banner-selector",
                        onClick: this.showModal
                    }, "Update"), t), g.createElement(j, {
                        text: Object(ke.d)("Max 10mb GIF, JPG, or PNG", "UploadVideoPlayerBanner")
                    }))))
                }, t = p.__decorate([Object(V.a)(_e, {
                    options: function(e) {
                        return {
                            skip: !e.user,
                            variables: {
                                login: e.user && e.user.login
                            }
                        }
                    }
                })], t)
            }(g.Component),
            we = Object(s.b)(function(e) {
                return {
                    user: Object(u.c)(e)
                }
            }, function(e) {
                return Object(l.b)({
                    showUploaderModal: function(e) {
                        return Object(le.d)(ye, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            imageType: pe.a.ChannelOfflineImage,
                            showCloser: !0
                        })
                    }
                }, e)
            })(Ee),
            Ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: o.NoChanges
                    }, t.renderContentSettingsSection = function() {
                        return g.createElement(N.X, null, g.createElement(i, {
                            title: Object(h.d)("Content Settings", "SettingsChannelPage"),
                            description: Object(h.d)("Choose how your channel will display for certain users", "SettingsChannelPage")
                        }), g.createElement(se, null))
                    }, t.renderChatSettingsSection = function() {
                        return g.createElement(N.X, null, g.createElement(i, {
                            title: Object(h.d)("Chat Options", "SettingsChannelPage"),
                            description: Object(h.d)("Moderate your channel's chat and who you allow in it", "SettingsChannelPage")
                        }), g.createElement(G, null), g.createElement(re, null), g.createElement(te, null), g.createElement($, null))
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: o.Working
                        }, function() {})
                    }, t
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    return h.a.buildType === k.a.Production ? null : g.createElement("div", null, g.createElement(we, null), g.createElement(B, null), this.renderContentSettingsSection(), this.renderChatSettingsSection(), g.createElement(C, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    }))
                }, t = p.__decorate([Object(b.d)("SettingsChannelPage", {
                    autoReportInteractive: !0,
                    destination: _.a.SettingsChannel
                }), Object(y.a)({
                    location: E.PageviewLocation.SettingsPage
                })], t)
            }(g.Component),
            Oe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: o.NoChanges
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: o.Working
                        }, function() {})
                    }, t
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    return h.a.buildType === k.a.Production ? null : g.createElement("div", null, g.createElement(C, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    }))
                }, t = p.__decorate([Object(b.d)("SettingsConnectionsPage", {
                    autoReportInteractive: !0,
                    destination: _.a.SettingsConnections
                }), Object(y.a)({
                    location: E.PageviewLocation.SettingsPage
                })], t)
            }(g.Component),
            Ce = n("WbwR"),
            Pe = n("LBNC"),
            je = n("UbVv"),
            xe = n("zCIC"),
            Te = n("oIkB"),
            Ue = n("F8kA"),
            Fe = (n("hPJb"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.userId, t.props.isEnabled)
                    }, t
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    return g.createElement(N._21, {
                        className: "advanced-notification-settings-toggle",
                        display: N.J.Flex,
                        justifyContent: N.W.Between,
                        background: N.m.Base,
                        padding: {
                            x: 5,
                            y: 1
                        },
                        borderBottom: !0
                    }, g.createElement(N.X, {
                        margin: {
                            left: 5
                        },
                        display: N.J.Flex,
                        flexGrow: 1,
                        alignItems: N.c.Center,
                        flexWrap: N.M.NoWrap
                    }, g.createElement(N.X, {
                        display: N.J.Flex,
                        flexGrow: 1,
                        flexWrap: N.M.NoWrap
                    }, g.createElement(N.X, {
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, g.createElement(N.V, {
                        linkTo: "/" + this.props.login
                    }, g.createElement(N.l, {
                        imageSrc: this.props.thumbnail,
                        imageAlt: this.props.text,
                        size: 40
                    }))), g.createElement(N.X, {
                        flexGrow: 1,
                        display: N.J.Flex,
                        flexDirection: N.L.Column
                    }, g.createElement(N._25, {
                        fontSize: N.N.Size5
                    }, g.createElement(Ue.a, {
                        to: "/" + this.props.login
                    }, this.props.text)), g.createElement(N._25, {
                        type: N._30.Span,
                        color: N.F.Alt2
                    }, this.props.description))), g.createElement(N.X, {
                        display: N.J.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, g.createElement(N.X, {
                        margin: {
                            right: 1
                        }
                    }, g.createElement(N._32, {
                        checked: this.props.isEnabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector",
                        id: this.props.userId
                    })), g.createElement(N.X, {
                        className: this.props.saved ? "advanced-notification-settings-toggle__saved" : "advanced-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, g.createElement(N._25, {
                        fontSize: N.N.Size5,
                        color: N.F.Link
                    }, Object(h.d)("Saved", "AdvancedNotificationSettingsToggle"))))))
                }, t
            }(g.Component)),
            Ie = n("AQCV"),
            Ae = (n("t4xU"), n("EaRL")),
            De = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        collapsed: !0,
                        saved: new Set
                    }, t.toggleCollapse = function() {
                        t.setState(function(e) {
                            return {
                                collapsed: !e.collapsed
                            }
                        })
                    }, t.toggleChannelNotification = function(e, n) {
                        return p.__awaiter(t, void 0, void 0, function() {
                            var t, i, a;
                            return p.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setAdvancedNotificationSetting ? (t = p.__assign({}, Object(Te.a)({
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
                                            for (var n = 0, a = t.currentUser.follows.edges; n < a.length; n++) {
                                                var r = a[n];
                                                r.node.id === e && (r.notificationSettings.isEnabled = !i.data.followUser.follow.disableNotifications)
                                            }
                                            return t
                                        }, Object(Te.d)(Ae, {
                                            limit: 50
                                        }, a), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return g.createElement(N._21, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, g.createElement(N._1, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return g.createElement(f.a, {
                        message: Object(h.d)("Error loading data.", "AdvancedNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return g.createElement(N._21, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, g.createElement(f.a, {
                        message: Object(h.d)("You must be logged in to update your settings", "AdvancedNotificationSettings")
                    }));
                    var e = Object(h.d)("{followCount, plural, one {You follow # channel} other {You follow # channels}}", {
                            followCount: this.props.data.currentUser.follows.totalCount
                        }, "AdvancedNotificationSettings"),
                        t = g.createElement(N._21, {
                            background: N.m.Alt2,
                            borderBottom: !0
                        }, g.createElement(N.V, {
                            onClick: this.toggleCollapse,
                            alpha: !0,
                            "data-test-selector": "header-selector"
                        }, g.createElement(N.X, {
                            display: N.J.Flex,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, g.createElement(N.X, {
                            className: "advanced-notification-settings__header",
                            flexGrow: 0
                        }, g.createElement(N._25, {
                            fontSize: N.N.Size5,
                            color: N.F.Alt2,
                            bold: !0
                        }, Object(h.d)("Advanced", "AdvancedNotificationSettings"))), g.createElement(N.X, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, g.createElement(N._25, {
                            "data-test-selector": "description-selector",
                            fontSize: N.N.Size5,
                            color: N.F.Alt2
                        }, e)), g.createElement(N.X, {
                            className: this.state.collapsed ? "advanced-notification-settings--collapse" : "advanced-notification-settings--expand",
                            flexGrow: 0,
                            flexShrink: 1,
                            display: N.J.Flex,
                            justifyContent: N.W.Center
                        }, g.createElement(N._12, {
                            asset: N._13.AngleRight,
                            type: N._14.Alt2
                        }))))),
                        n = !this.props.data.loading && !this.props.data.error && !!this.props.data.currentUser.follows.pageInfo.hasNextPage;
                    return this.props.data.currentUser.follows.totalCount > 0 ? this.state.collapsed ? g.createElement(N._21, null, t) : g.createElement(N._21, null, t, g.createElement(N._21, {
                        borderBottom: !0,
                        padding: 2
                    }, g.createElement(N.X, {
                        padding: {
                            bottom: 1
                        }
                    }, g.createElement(N._25, {
                        fontSize: N.N.Size5,
                        color: N.F.Alt2
                    }, Object(h.d)("Manage which channels you receive notifications for.", "AdvancedNotificationSettings"))), g.createElement(N.X, {
                        padding: {
                            bottom: 1
                        }
                    }, g.createElement(N._25, {
                        fontSize: N.N.Size4,
                        color: N.F.Alt
                    }, e)), g.createElement(N._21, {
                        className: "advanced-notification-settings__toggle-container",
                        borderTop: !0,
                        borderLeft: !0,
                        borderRight: !0,
                        margin: {
                            bottom: .5
                        }
                    }, this.renderToggles(), g.createElement(xe.a, {
                        loadMore: this.props.loadMore,
                        enabled: n,
                        pixelThreshold: 200
                    })))) : null
                }, t.prototype.renderToggles = function() {
                    if (this.props.data && (!this.props.data.loading || this.props.data.currentUser)) {
                        for (var e = [], t = 0, n = this.props.data.currentUser.follows.edges; t < n.length; t++) {
                            var i = n[t];
                            i.node && i.node.id && i.node.followers && e.push(g.createElement(Fe, {
                                userId: i.node.id,
                                text: i.node.displayName,
                                login: i.node.login,
                                description: Object(h.d)("{followerCount,number} followers", {
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
            }(g.Component),
            He = Object(l.d)(Object(V.a)(Ae, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network",
                        variables: {
                            limit: 50
                        }
                    }
                },
                props: function(e) {
                    return p.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: Ae,
                                variables: p.__assign({}, e.data.variables, {
                                    cursor: e.data.currentUser.follows.edges[e.data.currentUser.follows.edges.length - 1].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult;
                                    return {
                                        currentUser: p.__assign({}, n.currentUser, {
                                            follows: p.__assign({}, n.currentUser.follows, {
                                                edges: Object(Te.b)(e.currentUser.follows.edges, n.currentUser.follows.edges)
                                            })
                                        })
                                    }
                                }
                            })
                        }
                    })
                }
            }), Object(V.a)(Ie, {
                name: "setAdvancedNotificationSetting"
            }), Object(b.d)("AdvancedNotificationSettings"))(De),
            Le = n("OOv5"),
            Re = n("JBcW"),
            Me = (n("mVHD"), h.n.logger.withCategory("browser-push-notifications-settings")),
            Be = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hide: !1,
                        loading: !0,
                        deciding: !0,
                        hasSubscription: !1
                    }, t.toggle = function() {
                        return p.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return p.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.setState({
                                            deciding: !0
                                        }), [4, Le.a.hasPushSubscription()];
                                    case 1:
                                        if (!n.sent()) return [3, 6];
                                        n.label = 2;
                                    case 2:
                                        return n.trys.push([2, 4, , 5]), [4, Le.a.userUnsubscribe(Re.a.Settings)];
                                    case 3:
                                        return n.sent(), [3, 5];
                                    case 4:
                                        return e = n.sent(), Me.error(e, "user unsubscribe failed"), [3, 5];
                                    case 5:
                                        return [3, 9];
                                    case 6:
                                        return n.trys.push([6, 8, , 9]), [4, Le.a.userSubscribe(Re.a.Settings)];
                                    case 7:
                                        return n.sent(), [3, 9];
                                    case 8:
                                        return t = n.sent(), Object(je.a)() ? (this.setState({
                                            hide: !0
                                        }), [2]) : (Me.error(t, "user subscribe failed"), [3, 9]);
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
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    return p.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return p.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 3, , 4]), [4, Le.a.initialize()];
                                case 1:
                                    return t.sent(), [4, this.updateSubscriptionState()];
                                case 2:
                                    return t.sent(), [3, 4];
                                case 3:
                                    return e = t.sent(), Me.error(e, "unexpected error initializing push manager"), this.setState({
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
                    var e = this.state.hasSubscription ? Object(h.d)("Turn Off", "BrowserPushNotificationsSettings") : Object(h.d)("Turn On", "BrowserPushNotificationsSettings");
                    return g.createElement(N._21, {
                        borderTop: !0,
                        padding: {
                            right: 2,
                            y: 1
                        },
                        margin: {
                            top: 1
                        },
                        "data-test-selector": "qa-browser-push-notifications-settings"
                    }, g.createElement(N._21, {
                        className: "browser-push-notification-settings",
                        padding: {
                            left: 5,
                            right: 4
                        },
                        display: N.J.Flex,
                        margin: {
                            x: 5
                        }
                    }, g.createElement(N.X, {
                        className: "browser-push-notification-settings__body",
                        display: N.J.Flex,
                        flexWrap: N.M.NoWrap,
                        flexGrow: 1
                    }, g.createElement(N.X, {
                        margin: {
                            right: 1
                        },
                        flexGrow: 1
                    }, g.createElement(N._25, {
                        fontSize: N.N.Size4,
                        color: N.F.Alt
                    }, Object(h.d)("Receive Browser Notifications for this Device", "BrowserPushNotificationsSettings")), g.createElement(N.X, {
                        padding: {
                            top: .5
                        }
                    }, g.createElement(N._25, {
                        fontSize: N.N.Size5,
                        color: N.F.Alt2
                    }, Object(h.d)("See notifications at the corner of your screen, even when you’re not on Twitch", "BrowserPushNotificationsSettings")))), g.createElement(N.X, {
                        flexShrink: 0
                    }, g.createElement(N.u, {
                        "data-test-selector": "qa-browser-push-notifications-settings-toggle",
                        disabled: this.state.deciding,
                        onClick: this.toggle
                    }, e)))))
                }, t.prototype.updateSubscriptionState = function() {
                    return p.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return p.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, Le.a.hasPushSubscription()];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        hasSubscription: e
                                    }), [2]
                            }
                        })
                    })
                }, t
            }(g.Component),
            ze = Object(z.compose)(Object(b.d)("BrowserPushNotificationsSettings"))(Be),
            Ve = (n("iOZM"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.category, t.props.isEnabled)
                    }, t
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    return g.createElement(N._21, {
                        className: "platform-notification-settings-toggle",
                        display: N.J.Flex,
                        flexWrap: N.M.NoWrap,
                        alignItems: N.c.Start,
                        background: N.m.Alt,
                        margin: {
                            top: 1,
                            bottom: .5
                        },
                        padding: {
                            right: 5
                        }
                    }, g.createElement(N.X, {
                        className: "platform-notification-settings-toggle__body",
                        display: N.J.Flex,
                        flexDirection: N.L.Column,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, g.createElement(N.X, {
                        margin: {
                            bottom: .5
                        }
                    }, g.createElement(N._25, {
                        fontSize: N.N.Size4
                    }, this.props.text)), g.createElement(N._25, {
                        fontSize: N.N.Size5,
                        color: N.F.Alt2
                    }, this.props.description)), g.createElement(N.X, {
                        display: N.J.Flex,
                        margin: {
                            top: .5
                        },
                        flexGrow: 0,
                        flexShrink: 0
                    }, g.createElement(N.X, {
                        margin: {
                            right: 1
                        }
                    }, g.createElement(N._32, {
                        checked: this.props.isEnabled,
                        disabled: this.props.disabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector"
                    })), g.createElement(N.X, {
                        className: this.props.saved ? "platform-notification-settings-toggle__saved" : "platform-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, g.createElement(N._25, {
                        fontSize: N.N.Size5,
                        color: N.F.Link
                    }, Object(h.d)("Saved", "PlatformNotificationSettingsToggle")))))
                }, t
            }(g.Component)),
            Xe = n("g+dK"),
            qe = (n("RC0U"), n("1f5k"));
        ! function(e) {
            e.onsite = "onsite", e.email = "email", e.push = "push"
        }(F || (F = {}));
        var We, Ge = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        collapsed: t.props.startCollapsed,
                        saved: new Set
                    }, t.VisibleSettings = [{
                        category: "LIVE",
                        name: Object(h.d)("Live", "PlatformNotificationSettings"),
                        description: Object(h.d)("When a streamer I follow goes Live", "PlatformNotificationSettings")
                    }, {
                        category: "VIDEOS",
                        name: Object(h.d)("Video Broadcast", "PlatformNotificationSettings"),
                        description: Object(h.d)("When a channel I follow starts a Vodcast. This also includes Video Comment notifications", "PlatformNotificationSettings")
                    }, {
                        category: "CLIPS",
                        name: Object(h.d)("Clips", "PlatformNotificationSettings"),
                        description: Object(h.d)("Receive notifications for clips you made and clips made by your viewers", "PlatformNotificationSettings")
                    }, {
                        category: "EVENTS",
                        name: Object(h.d)("Events", "PlatformNotificationSettings"),
                        description: Object(h.d)("Any time an event I follow starts", "PlatformNotificationSettings")
                    }, {
                        category: "CHAT",
                        name: Object(h.d)("Chat", "PlatformNotificationSettings"),
                        description: Object(h.d)("Any time there’s Rooms activity related to me.", "PlatformNotificationSettings")
                    }, {
                        category: "FRIENDS",
                        name: Object(h.d)("Friends", "PlatformNotificationSettings"),
                        description: Object(h.d)("When a friend sends me a message", "PlatformNotificationSettings")
                    }, {
                        category: "STREAMER",
                        name: Object(h.d)("Your Channel", "PlatformNotificationSettings"),
                        description: Object(h.d)("Receive notifications when viewers follow your channel or auto host you", "PlatformNotificationSettings")
                    }, {
                        category: "MODERATOR",
                        name: Object(h.d)("Moderator", "PlatformNotificationSettings"),
                        description: Object(h.d)("Any time I get a notification as a moderator", "PlatformNotificationSettings")
                    }, {
                        category: "COMMERCE",
                        name: Object(h.d)("Gifts and Rewards", "PlatformNotificationSettings"),
                        description: Object(h.d)("Receive notifications for drops, crates, and subscription gifts", "PlatformNotificationSettings")
                    }], t.toggleAll = function() {
                        t.toggleSettingCategory("ALL", t.getGlobalStateForPlatform())
                    }, t.toggleCollapse = function() {
                        t.setState(function(e) {
                            return {
                                collapsed: !e.collapsed
                            }
                        })
                    }, t.toggleSettingCategory = function(e, n) {
                        return p.__awaiter(t, void 0, void 0, function() {
                            var t, i, a, r, o = this;
                            return p.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setNotificationSetting ? (t = n ? "off" : "on", i = p.__assign({}, Object(Te.a)({
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
                                            return t.currentUser.notificationSettings = t.currentUser.notificationSettings.map(function(t) {
                                                return t.category === e && (t.platforms = t.platforms.map(function(e) {
                                                    return e.platformName === o.props.platformName && (e.isEnabled = "on" === a.data.setNotificationSetting.settingState, e.settingState = a.data.setNotificationSetting.settingState), e
                                                })), t
                                            }), t
                                        }, Object(Te.d)(qe, {}, r), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return g.createElement(N.X, {
                        padding: 1
                    }, g.createElement(N._1, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return g.createElement(f.a, {
                        message: Object(h.d)("Error loading data.", "PlatformNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return g.createElement(N._21, {
                        margin: {
                            top: 1
                        }
                    }, g.createElement(f.a, {
                        message: Object(h.d)("You must be logged in to update your settings.", "PlatformNotificationSettings")
                    }));
                    var e = g.createElement(N._21, {
                        background: N.m.Alt2,
                        borderBottom: !0
                    }, g.createElement(N.V, {
                        onClick: this.toggleCollapse,
                        alpha: !0
                    }, g.createElement(N.X, {
                        display: N.J.Flex,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, g.createElement(N.X, {
                        className: "platform-notification-settings__header",
                        flexGrow: 0,
                        "data-test-selector": "collapsible-header"
                    }, g.createElement(N._25, {
                        "data-test-selector": "display-name",
                        fontSize: N.N.Size5,
                        color: N.F.Alt2,
                        bold: !0
                    }, this.props.displayName)), g.createElement(N.X, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, g.createElement(N._25, {
                        fontSize: N.N.Size5,
                        color: N.F.Alt2
                    }, this.getSettingTurnedOnMessage())), g.createElement(N.X, {
                        className: this.state.collapsed ? "platform-notification-settings--collapse" : "platform-notification-settings--expand",
                        flexGrow: 0,
                        flexShrink: 1,
                        display: N.J.Flex,
                        justifyContent: N.W.Center
                    }, g.createElement(N._12, {
                        asset: N._13.AngleRight,
                        type: N._14.Alt2
                    })))));
                    return this.state.collapsed ? g.createElement(N._21, null, e) : g.createElement(N._21, null, e, g.createElement(N._21, {
                        padding: 2,
                        borderBottom: !0
                    }, g.createElement(N.X, {
                        padding: {
                            bottom: 1
                        }
                    }, g.createElement(N._25, {
                        "data-test-selector": "description",
                        fontSize: N.N.Size5,
                        color: N.F.Alt2
                    }, this.props.description)), g.createElement(N._21, {
                        display: N.J.Flex,
                        margin: {
                            y: .5
                        },
                        borderBottom: !0
                    }, g.createElement(N.X, {
                        className: "platform-notification-settings__all",
                        display: N.J.Flex,
                        padding: {
                            bottom: 1,
                            right: 5
                        },
                        justifyContent: N.W.Center,
                        flexGrow: 1,
                        flexWrap: N.M.NoWrap
                    }, g.createElement(N.X, {
                        className: "platform-notification-settings__all-body",
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, g.createElement(N._25, {
                        fontSize: N.N.Size4,
                        color: N.F.Alt,
                        "data-test-selector": "explanation"
                    }, this.props.explanation)), g.createElement(N.X, {
                        display: N.J.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, g.createElement(N.X, {
                        margin: {
                            right: 1
                        }
                    }, g.createElement(N._32, {
                        "data-test-selector": "all-toggle",
                        checked: this.getGlobalStateForPlatform(),
                        onChange: this.toggleAll
                    })), g.createElement(N.X, {
                        padding: {
                            x: 1
                        },
                        "data-test-selector": "saved-selector",
                        className: this.getDisplaySaved("ALL") ? "platform-notification-settings__saved" : "platform-notification-settings__saved--hide"
                    }, g.createElement(N._25, {
                        fontSize: N.N.Size5,
                        color: N.F.Link
                    }, Object(h.d)("Saved", "PlatformNotificationSettings")))))), g.createElement(N.X, {
                        className: "platform-notification-settings__toggle-container",
                        display: N.J.Flex,
                        flexDirection: N.L.Column,
                        margin: {
                            left: 5
                        },
                        padding: {
                            left: 5
                        }
                    }, this.renderToggles()), this.props.extraSettings))
                }, t.prototype.getSettingByCategory = function(e) {
                    var t = null;
                    if (!this.props.data) return null;
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
                    return 0 !== t && this.getGlobalStateForPlatform() ? t < e ? Object(h.d)("Some notifications turned on", "PlatformNotificationSettings") : Object(h.d)("All notifications turned on", "PlatformNotificationSettings") : Object(h.d)("All notifications turned off", "PlatformNotificationSettings")
                }, t.prototype.getGlobalStateForPlatform = function() {
                    var e = this.getSettingByCategory("ALL");
                    return !!e && e.isEnabled
                }, t.prototype.renderToggles = function() {
                    for (var e = [], t = 0, n = this.VisibleSettings; t < n.length; t++) {
                        var i = n[t],
                            a = this.getSettingByCategory(i.category);
                        a && e.push(g.createElement(Ve, {
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
            }(g.Component),
            Je = Object(l.d)(Object(b.d)("PlatformNotificationSettings"), Object(V.a)(qe, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network"
                    }
                }
            }), Object(V.a)(Xe, {
                name: "setNotificationSetting"
            }))(Ge),
            Qe = (n("nq6q"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    return g.createElement(N._21, {
                        className: "notification-settings__body",
                        borderRight: !0,
                        borderLeft: !0,
                        borderTop: !0
                    }, g.createElement(N._21, {
                        background: N.m.Alt,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, g.createElement(N.X, {
                        margin: {
                            bottom: .5
                        }
                    }, g.createElement(N._25, {
                        fontSize: N.N.Size3,
                        color: N.F.Alt
                    }, Object(h.d)("Notifications", "SettingsNotificationsPage"))), g.createElement(N.X, null, g.createElement(N._25, {
                        fontSize: N.N.Size5,
                        color: N.F.Alt2
                    }, Object(h.d)("Get the notifications you care about, where you want to see them.", "SettingsNotificationsPage")))), g.createElement(Je, {
                        startCollapsed: !1,
                        platformName: F.onsite,
                        displayName: Object(h.d)("On Twitch", "SettingsNotificationsPage"),
                        description: Object(h.d)("We'll always keep you informed on important updates to Twitch and your account.", "SettingsNotificationsPage"),
                        explanation: Object(h.d)("Send me notifications on Twitch about", "SettingsNotificationsPage"),
                        key: "onsite",
                        extraSettings: this.renderBrowserPushNotifications()
                    }), g.createElement(Je, {
                        startCollapsed: !0,
                        platformName: F.email,
                        displayName: Object(h.d)("By Email", "SettingsNotificationsPage"),
                        description: Object(h.d)("Receive important notifications through email. You may receive additional emails about features and content on Twitch. You can turn off specific emails using the unsubscribe link included in each message.", "SettingsNotificationsPage"),
                        explanation: Object(h.d)("Send me emails about", "SettingsNotificationsPage"),
                        key: "email"
                    }), g.createElement(Je, {
                        platformName: F.push,
                        startCollapsed: !0,
                        displayName: Object(h.d)("On Mobile", "SettingsNotificationsPage"),
                        description: Object(h.d)("Get Twitch updates on the go. Receive notifications right on your phone's home screen.", "SettingsNotificationsPage"),
                        explanation: Object(h.d)("Send me push notifications", "SettingsNotificationsPage"),
                        key: "push"
                    }), g.createElement(He, null))
                }, t.prototype.renderBrowserPushNotifications = function() {
                    return h.b.get(Ce.b, !1) && Object(Pe.a)() && !Object(je.a)() ? g.createElement(ze, null) : null
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t = p.__decorate([Object(b.d)("SettingsNotificationsPage", {
                    destination: _.a.NotificationSettingsPage
                }), Object(y.a)({
                    location: E.PageviewLocation.SettingsPage
                })], t)
            }(g.Component)),
            Ye = n("S1vB"),
            $e = n("cumT"),
            Ke = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: o.NoChanges
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: o.Working
                        }, function() {})
                    }, t
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    return h.a.buildType === k.a.Production ? null : this.props.data.currentUser && this.props.data.requestInfo ? this.props.data.currentUser.hasPrime ? g.createElement("div", null, g.createElement(C, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    })) : Object(Ye.a)(this.props.data.requestInfo.countryCode) ? (window.location.replace("https://twitch.amazon.com/prime?ref_=sm_w_tsp_p_t"), null) : g.createElement(m.a, {
                        to: "/settings/turbo"
                    }) : null
                }, t = p.__decorate([Object(b.d)("SettingsPrimePage", {
                    autoReportInteractive: !0,
                    destination: _.a.SettingsPrime
                }), Object(y.a)({
                    location: E.PageviewLocation.SettingsPage
                }), Object(V.a)($e)], t)
            }(g.Component),
            Ze = function() {
                return g.createElement(x, {
                    label: Object(h.d)("Disable Your Twitch Account", "DisableAccountLink"),
                    orientation: N.P.Horizontal
                }, Object(h.d)("If you want to disable your Twitch account, you can do so from the <x:link>Disable Account</x:link> page.", {
                    "x:link": function(e) {
                        return g.createElement("a", {
                            key: "disable-account-link",
                            href: "https://www.twitch.tv/user/disable_account",
                            "data-a-target": "disable-account-link"
                        }, e)
                    }
                }, "DisableAccountLink"))
            },
            et = n("x9n8"),
            tt = (n("eppJ"), n("zwbd")),
            nt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t.props.data && t.props.data.currentUser;
                        e && t.props.showModal(et.a, {
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
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(1)
                }, t.prototype.render = function() {
                    var e = this.props.data && this.props.data.currentUser,
                        t = g.createElement(N._5, {
                            height: 140,
                            width: 140
                        });
                    return e && e.profileImageURL && (t = g.createElement(b.b, {
                        src: e.profileImageURL,
                        alt: Object(h.d)("Profile Picture", "ProfileImageSetting"),
                        className: "profile-image-setting__current-image"
                    })), g.createElement(N.X, {
                        className: "profile-image-setting"
                    }, g.createElement(N.X, {
                        display: N.J.Flex,
                        flexDirection: N.L.Row
                    }, g.createElement(N.X, {
                        margin: {
                            right: 2
                        }
                    }, t), g.createElement(N.X, {
                        margin: {
                            y: "auto"
                        }
                    }, g.createElement(N.u, {
                        ariaLabel: Object(h.d)("Update Profile Picture", "ProfileImageSetting"),
                        onClick: this.openModal,
                        "data-test-selector": "profile-upload-button"
                    }, g.createElement(N.X, {
                        padding: {
                            x: 1
                        }
                    }, Object(h.d)("Update", "ProfileImageSetting"))), g.createElement(j, {
                        text: Object(h.d)("File format: JPEG, PNG, GIF (max size 256x256, 10MB)", "ProfileImageSetting")
                    }))))
                }, t
            }(g.Component),
            it = Object(z.compose)(Object(b.d)("ProfileImageSetting"), Object(V.a)(tt))(nt),
            at = Object(s.b)(null, function(e) {
                return Object(l.b)({
                    showModal: le.d
                }, e)
            })(it),
            rt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: o.NoChanges
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: o.Working
                        }, function() {})
                    }, t
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    return h.a.buildType === k.a.Production ? null : g.createElement("div", null, g.createElement(i, {
                        title: Object(h.d)("Profile Picture", "SettingsProfilePage")
                    }), g.createElement(at, null), g.createElement(i, {
                        title: Object(h.d)("Profile Settings", "SettingsProfilePage"),
                        description: Object(h.d)("Change identifying details for your account", "SettingsProfilePage")
                    }), g.createElement(i, {
                        title: Object(h.d)("Disabling Your Twitch Account", "SettingsProfilePage"),
                        description: Object(h.d)("Completely deactivate your account", "SettingsProfilePage")
                    }), g.createElement(Ze, null), g.createElement(C, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    }))
                }, t = p.__decorate([Object(b.d)("SettingsProfilePage", {
                    autoReportInteractive: !0,
                    destination: _.a.SettingsProfile
                }), Object(y.a)({
                    location: E.PageviewLocation.SettingsPage
                })], t)
            }(g.Component),
            ot = "/v5/whispers/settings",
            st = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        loading: !0,
                        updating: !1
                    }, t.onToggle = function(e) {
                        return p.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return p.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            updating: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, P.a.post(ot, {
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
                return p.__extends(t, e), t.prototype.componentWillMount = function() {
                    return p.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return p.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, P.a.get(ot)];
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
                    return g.createElement(T, {
                        id: "settings-security-page-block-whispers",
                        label: Object(h.d)("Block Whispers from Stangers", "SettingsSecurityPage"),
                        description: Object(h.d)("Block whispers from people you don't follow", "SettingsSecurityPage"),
                        checked: this.state.enabled,
                        disabled: this.state.updating,
                        error: this.state.error,
                        onChange: this.onToggle
                    })
                }, t
            }(g.Component),
            lt = n("NoSW"),
            ct = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    return g.createElement(x, {
                        label: Object(h.d)("Two-Factor Authentication", "TwoFactorAuthenticationSetting"),
                        orientation: N.P.Horizontal,
                        error: this.props.status === We.Error,
                        errorMessage: Object(h.d)("Sorry, something went wrong. Please try again later.", "TwoFactorAuthenticationSetting")
                    }, this.renderBody())
                }, t.prototype.renderBody = function() {
                    switch (this.props.status) {
                        case We.Loading:
                            return this.renderLoading();
                        case We.Error:
                            return this.renderError();
                        case We.UnverifiedEmail:
                            return this.renderVerifyEmail();
                        case We.CanEnable:
                            return this.renderEnableButton();
                        case We.Enabled:
                            return this.renderDisableButton();
                        case We.EnabledAndRequired:
                            return this.renderEnabledAndRequired();
                        default:
                            return null
                    }
                }, t.prototype.renderLoading = function() {
                    return g.createElement(N._5, null)
                }, t.prototype.renderError = function() {
                    return null
                }, t.prototype.renderVerifyEmail = function() {
                    return g.createElement(N.X, null, g.createElement(N._25, {
                        "data-a-target": "tfa-verify-email"
                    }, Object(h.d)("Just verify your email address and two-factor authentication can be enabled.", "TwoFactorAuthenticationSetting")))
                }, t.prototype.renderEnableButton = function() {
                    return g.createElement(N.X, null, g.createElement(N.u, {
                        linkTo: "https://passport.twitch.tv/register_2fa/new",
                        "data-a-target": "tfa-enable-button"
                    }, Object(h.d)("Set Up Two-Factor Authentication", "TwoFactorAuthenticationSetting")), g.createElement(j, {
                        dataTarget: "tfa-pitch-message",
                        text: Object(h.d)("It's dangerous to go alone. <x:link>Two-factor authentication</x:link> adds an extra layer of security to your Twitch account by requiring both a password and your mobile phone to login.", {
                            "x:link": function(e) {
                                return g.createElement("a", {
                                    key: "learn-more-link",
                                    href: "https://www.authy.com/learn-more",
                                    target: "_blank",
                                    "data-a-target": "tfa-authy-link"
                                }, e)
                            }
                        }, "TwoFactorAuthenticationSetting")
                    }))
                }, t.prototype.renderDisableButton = function() {
                    return g.createElement(N.X, null, g.createElement(N.u, {
                        linkTo: "https://passport.twitch.tv/disable_2fa/new",
                        "data-a-target": "tfa-disable-button"
                    }, Object(h.d)("Disable two-factor authentication", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                }, t.prototype.renderEnabledAndRequired = function() {
                    return g.createElement(N.X, null, g.createElement(N._25, {
                        "data-a-target": "tfa-required-message"
                    }, Object(h.d)("You must have two-factor authentication enabled.", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                }, t.prototype.renderEnabledMessage = function() {
                    return g.createElement(j, {
                        dataTarget: "tfa-successful-message",
                        text: Object(h.d)("Woohoo! Two-factor authentication is enabled! To reset or change your phone, visit the Authy <x:link>phone reset form</x:link>.", {
                            "x:link": function(e) {
                                return g.createElement("a", {
                                    key: "phone-reset-link",
                                    href: "https://www.authy.com/phones/reset",
                                    "data-a-target": "tfa-authy-reset"
                                }, e)
                            }
                        }, "TwoFactorAuthenticationSetting")
                    })
                }, t
            }(g.Component),
            dt = n("Q6se");
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.UnverifiedEmail = 2] = "UnverifiedEmail", e[e.CanEnable = 3] = "CanEnable", e[e.Enabled = 4] = "Enabled", e[e.EnabledAndRequired = 5] = "EnabledAndRequired"
        }(We || (We = {}));
        var ut, pt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        status: We.Loading,
                        restLoading: !0,
                        restError: !1
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTwoFactorEnabled()
                }, t.prototype.componentDidUpdate = function(e, t) {
                    t.status === We.Loading && this.state.status !== We.Loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.status !== We.Loading || e.data.loading || this.reconcileStatus(e)
                }, t.prototype.render = function() {
                    return g.createElement(ct, {
                        status: this.state.status
                    })
                }, t.prototype.fetchTwoFactorEnabled = function() {
                    return p.__awaiter(this, void 0, void 0, function() {
                        var e, t, n = this;
                        return p.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    e = "/api/users/auth_validator?check_2fa=true&onsite=1", i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, P.a.get(e, {
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
                    e.data.loading || this.state.restLoading ? t = We.Loading : !e.data.currentUser || this.state.restError ? t = We.Error : this.state.twoFactorEnabled || e.data.currentUser.isEmailVerified ? !this.state.twoFactorEnabled && e.data.currentUser.isEmailVerified ? t = We.CanEnable : this.state.twoFactorEnabled && !this.userRoleRequiresTwoFactor(e) ? t = We.Enabled : this.state.twoFactorEnabled && this.userRoleRequiresTwoFactor(e) && (t = We.EnabledAndRequired) : t = We.UnverifiedEmail, t && this.setState({
                        status: t
                    })
                }, t.prototype.userRoleRequiresTwoFactor = function(e) {
                    var t = e.data.currentUser && e.data.currentUser.roles;
                    return !(!t || !(t.isGlobalMod || t.isSiteAdmin || t.isStaff))
                }, t
            }(g.Component),
            gt = Object(z.compose)(Object(lt.a)("TwoFactorAuthenticationSetting"), Object(V.a)(dt))(pt),
            mt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    return h.a.buildType === k.a.Production ? null : g.createElement("div", null, g.createElement(i, {
                        title: Object(h.d)("Security", "SettingsSecurityPage"),
                        description: Object(h.d)("Keep your account safe and sound", "SettingsSecurityPage")
                    }), g.createElement(r, null), g.createElement(gt, null), g.createElement(i, {
                        title: Object(h.d)("Privacy", "SettingsSecurityPage"),
                        description: Object(h.d)("Choose who can message you", "SettingsSecurityPage")
                    }), g.createElement(st, null))
                }, t
            }(g.Component),
            ht = Object(z.compose)(Object(b.d)("SettingsSecurityPage", {
                autoReportInteractive: !0,
                destination: _.a.SettingsSecurity
            }), Object(y.a)({
                location: E.PageviewLocation.SettingsPage
            }))(mt),
            ft = n("CkX/");
        ! function(e) {
            e.Channel = "channel", e.Notifications = "notifications", e.Profile = "profile", e.Security = "security", e.Connections = "connections", e.Prime = "prime", e.Turbo = "turbo"
        }(ut || (ut = {}));
        var bt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isPrimeVisible = function() {
                        return t.props.data.requestInfo && t.props.data.currentUser && (Object(Ye.a)(t.props.data.requestInfo.countryCode) || t.props.data.currentUser.hasPrime)
                    }, t
                }
                return p.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data.currentUser || !this.props.data.requestInfo) return null;
                    var e = null;
                    this.isPrimeVisible() && (e = g.createElement(N._22, {
                        linkTo: "/settings/prime",
                        active: this.props.tabName === ut.Prime,
                        "data-test-selector": "test-settings-prime-tab",
                        "data-a-target": "prime-tab"
                    }, Object(h.d)("Twitch Prime", "SettingsTabs")));
                    var t = null;
                    return !this.props.data.currentUser.hasTurbo && this.isPrimeVisible() || (t = g.createElement(N._22, {
                        linkTo: "/settings/turbo",
                        active: this.props.tabName === ut.Turbo,
                        "data-test-selector": "test-settings-turbo-tab",
                        "data-a-target": "turbo-tab"
                    }, Object(h.d)("Twitch Turbo", "SettingsTabs"))), g.createElement(N.X, {
                        className: "settings-tabs",
                        padding: {
                            x: _t,
                            top: _t
                        }
                    }, g.createElement(N.X, {
                        margin: {
                            bottom: 1
                        }
                    }, g.createElement(N._25, {
                        type: N._30.H2
                    }, Object(h.d)("Settings", "SettingsTabs"))), g.createElement(N.X, null, g.createElement(N._23, null, g.createElement(N._22, {
                        linkTo: "/settings/profile",
                        active: this.props.tabName === ut.Profile,
                        "data-a-target": "profile-tab"
                    }, Object(h.d)("Profile", "SettingsTabs")), e, t, g.createElement(N._22, {
                        linkTo: "/settings/channel",
                        active: this.props.tabName === ut.Channel,
                        "data-a-target": "channel-tab"
                    }, Object(h.d)("Channel and Videos", "SettingsTabs")), g.createElement(N._22, {
                        linkTo: "/settings/security",
                        active: this.props.tabName === ut.Security,
                        "data-a-target": "security-tab"
                    }, Object(h.d)("Security and Privacy", "SettingsTabs")), g.createElement(N._22, {
                        linkTo: "/settings/notifications",
                        active: this.props.tabName === ut.Notifications,
                        "data-a-target": "notifications-tab"
                    }, Object(h.d)("Notifications", "SettingsTab")), g.createElement(N._22, {
                        linkTo: "/settings/connections",
                        active: this.props.tabName === ut.Connections,
                        "data-a-target": "connections-tab"
                    }, Object(h.d)("Connections", "SettingsTabs")), g.createElement(N._22, {
                        linkTo: "/subscriptions",
                        active: !1,
                        "data-a-target": "subscriptions-tab"
                    }, Object(h.d)("Subscriptions", "SettingsTabs")))))
                }, t
            }(g.Component),
            vt = Object(z.compose)(Object(b.d)("SettingsTabs"), Object(V.a)(ft))(bt),
            St = function() {
                return g.createElement(f.a, {
                    message: Object(h.d)("Error loading user data. Please try again later.", "SettingsPageError")
                })
            },
            yt = n("hRPz"),
            kt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: o.NoChanges
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: o.Working
                        }, function() {})
                    }, t
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    return h.a.buildType === k.a.Production ? null : this.props.data.loading && !this.props.data.currentUser ? g.createElement(N._1, {
                        fillContent: !0
                    }) : this.props.data.loading || this.props.data.currentUser ? this.props.data.currentUser && !this.props.data.currentUser.hasTurbo ? this.props.data.currentUser.hasPrime || Object(Ye.a)(this.props.data.requestInfo.countryCode) ? g.createElement(m.a, {
                        to: "/settings/prime"
                    }) : (window.location.replace("https://www.twitch.tv/products/turbo/ticket"), null) : g.createElement("div", null, g.createElement(C, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    })) : g.createElement(St, null)
                }, t = p.__decorate([Object(b.d)("SettingsTurboPage", {
                    autoReportInteractive: !0,
                    destination: _.a.SettingsTurbo
                }), Object(y.a)({
                    location: E.PageviewLocation.SettingsPage
                }), Object(V.a)(yt)], t)
            }(g.Component),
            _t = 3,
            Et = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.redirectToProfilePage = function() {
                        return g.createElement(m.a, {
                            to: "/settings/profile"
                        })
                    }, t
                }
                return p.__extends(t, e), t.prototype.render = function() {
                    return this.props.isLoggedIn ? g.createElement(N.X, {
                        padding: {
                            x: _t
                        },
                        fullHeight: !0,
                        fullWidth: !0,
                        display: N.J.Flex,
                        flexDirection: N.L.Column,
                        flexWrap: N.M.NoWrap
                    }, g.createElement(v.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), g.createElement(S.a, null, g.createElement(vt, {
                        tabName: this.props.match.params.tab
                    })), g.createElement(N.X, {
                        padding: {
                            y: 2
                        }
                    }, g.createElement(m.d, null, g.createElement(m.b, {
                        path: "/settings/profile",
                        component: rt
                    }), g.createElement(m.b, {
                        path: "/settings/prime",
                        component: Ke
                    }), g.createElement(m.b, {
                        path: "/settings/turbo",
                        component: kt
                    }), g.createElement(m.b, {
                        path: "/settings/channel",
                        component: Ne
                    }), g.createElement(m.b, {
                        path: "/settings/security",
                        component: ht
                    }), g.createElement(m.b, {
                        path: "/settings/notifications",
                        component: Qe
                    }), g.createElement(m.b, {
                        path: "/settings/connections",
                        component: Oe
                    }), g.createElement(m.b, {
                        path: "/settings",
                        render: this.redirectToProfilePage
                    })))) : (this.props.login(), g.createElement(f.a, {
                        message: Object(h.d)("You must be logged in to view this page", "SettingsRoot")
                    }))
                }, t = p.__decorate([Object(b.d)("SettingsRoot", {
                    autoReportInteractive: !0
                })], t)
            }(g.Component),
            wt = Object(m.e)(Et),
            Nt = Object(s.b)(function(e) {
                return {
                    isLoggedIn: Object(u.d)(e)
                }
            }, function(e) {
                return Object(l.b)({
                    login: function() {
                        return Object(d.f)(c.a.SettingsPage)
                    }
                }, e)
            })(wt);
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
    OOv5: function(e, t, n) {
        "use strict";

        function i() {
            if (h) return h;
            var e = m.register({
                scope: "/"
            });
            return h = e || Promise.reject(new Error("service worker runtime not available"))
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
            g = n("UbVv"),
            m = n("F2sf"),
            h = null,
            f = n("JBcW"),
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
                                    return Object(g.a)() ? (v.debug("permissions have been denied. nothing to do here."), [2]) : [4, i()];
                                case 1:
                                    return r.sent(), e = Object(l.d)(o.n.store.getState()), [4, this.hasPushSubscription()];
                                case 2:
                                    return t = r.sent(), d.syncSession(), t ? (n = p.exists() && !p.isEnabled(), a = !e, n || a ? [4, this.unsubscribe()] : [3, 4]) : [3, 5];
                                case 3:
                                    r.sent(), r.label = 4;
                                case 4:
                                    return [3, 7];
                                case 5:
                                    return l.d ? !Object(g.b)() || p.exists() && !p.isEnabled() ? [3, 7] : [4, this.subscribe()] : [3, 7];
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
                                    return t.sent(), Object(f.c)({
                                        allowed: Object(g.b)(),
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
                                    return t.sent(), Object(f.b)({
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
                                    if (Object(g.a)()) throw new Error("notification permission is denied");
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
            r = n("J92i")
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
    WbwR: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("6sO2"),
            o = n("OOv5"),
            s = n("LBNC"),
            l = "browser_notifications_launch",
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.logger = r.n.logger.withCategory("browser-push-notifications"), t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (!r.b.get(l, !1)) return [2];
                                    if (!Object(s.a)()) return this.logger.debug("unsupported browser"), [2];
                                    t.label = 1;
                                case 1:
                                    return t.trys.push([1, 3, , 4]), [4, o.a.initialize()];
                                case 2:
                                    return t.sent(), [3, 4];
                                case 3:
                                    return e = t.sent(), this.logger.error(e, "push manager initialization unexpectedly failed"), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return null
                }, t
            }(a.Component);
        n.d(t, "b", function() {
            return l
        }), n.d(t, "a", function() {
            return c
        })
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
            s = n("J92i"),
            l = Object(i.b)(function(e) {
                return {
                    authToken: Object(o.a)(e)
                }
            }, function(e, t) {
                return Object(a.b)({
                    closeModal: function() {
                        return t.successCallback && t.successCallback(), Object(r.c)()
                    }
                }, e)
            })(s.a);
        n.d(t, "a", function() {
            return l
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
                        type: r._4.Success
                    };
                case o.UnexpectedError:
                    return {
                        message: Object(a.d)("Unexpected error, please try again.", "Profile Edit"),
                        type: r._4.Alert
                    };
                case o.BadSizeError:
                    return {
                        message: Object(a.d)("Image might exceed 10MB.", "Profile Edit"),
                        type: r._4.Alert
                    };
                case o.NonImageError:
                    return {
                        message: Object(a.d)("You must upload an image.", "Profile Edit"),
                        type: r._4.Alert
                    };
                case o.WrongFormatError:
                    return {
                        message: Object(a.d)("You must select a valid image type.", "Profile Edit"),
                        type: r._4.Alert
                    };
                case o.TimeoutError:
                    return {
                        message: Object(a.d)("Upload timed-out. Please try again.", "Profile Edit"),
                        type: r._4.Alert
                    };
                case o.Uploading:
                    return {
                        message: Object(a.d)("Uploading....", "Profile Edit"),
                        type: r._4.Brand
                    };
                case o.ImageNotSelected:
                    return {
                        message: Object(a.d)("Select a image first.", "Profile Edit"),
                        type: r._4.Alert
                    };
                default:
                    return {
                        message: Object(a.d)("Please try again.", "Profile Edit"),
                        type: r._4.Alert
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
    yU6t: function(e, t) {},
    zwbd: function(e, t) {
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
    }
});
//# sourceMappingURL=pages.settings-501f4e37b4ec3dc3d580d3085236821e.js.map