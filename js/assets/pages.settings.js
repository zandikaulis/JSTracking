webpackJsonp([52], {
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
    "4LC8": function(e, t) {},
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
    "5Y57": function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("U7vG"),
            a = n("rCmJ"),
            o = n("6sO2"),
            s = n("Odds"),
            l = function() {
                return r.createElement(s._1, {
                    display: s.M.Flex,
                    flexDirection: s.O.Column,
                    justifyContent: s._0.Center,
                    alignItems: s.c.Center,
                    flexGrow: 1,
                    fullHeight: !0,
                    padding: {
                        y: 1
                    },
                    zIndex: s._51.Above
                }, r.createElement(s._24, {
                    color: s.I.Alt2,
                    textAlign: s._35.Center,
                    flexShrink: 1
                }, r.createElement(s._14, {
                    asset: s._15.DeadGlitch,
                    width: 46,
                    height: 48
                })), r.createElement(s.V, {
                    margin: {
                        top: 1
                    },
                    textAlign: s._35.Center
                }, r.createElement(s._34, {
                    type: s._39.H4,
                    "data-test-selector": "search-error-message"
                }, Object(o.d)("Search is not available at this time", "DropdownSearchError"))), r.createElement(s._34, {
                    type: s._39.P
                }, Object(o.d)("Please try again later", "DropdownSearchError")))
            },
            c = n("6BvN"),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        focusSelectable: !1,
                        isOpen: !1
                    }, t.handleChange = function(e) {
                        t.props.onChange(e.target.value)
                    }, t.onKeyDown = function(e) {
                        e.keyCode === c.a.Esc ? t.setState({
                            isOpen: !1
                        }) : e.keyCode === c.a.Up ? t.focusNext(-1) : e.keyCode === c.a.Down && t.focusNext(1)
                    }, t.onClickOut = function() {
                        t.state.isOpen && t.setState({
                            isOpen: !1
                        }), t.props.onClose && t.props.onClose()
                    }, t.onMouseOver = function(e) {
                        var n = e.target.closest("[data-selectable]");
                        n && (n.focus(), n.tabIndex = 0, t.state.currentFocus && (t.state.currentFocus.tabIndex = -1), t.setState({
                            currentFocus: n
                        }), t.props.onFocusChange && t.props.onFocusChange(n))
                    }, t.getInputRef = function(e) {
                        t.inputRef = e
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this.props.isErrored ? r.createElement(l, null) : r.Children.only(this.props.children);
                    return r.createElement(a.a, {
                        onClickOut: this.onClickOut
                    }, r.createElement(s._17, {
                        onChange: this.handleChange,
                        onKeyDown: this.onKeyDown,
                        onFocus: this.props.onFocusInput,
                        placeholder: this.props.placeholder,
                        id: "nav-search-input",
                        "data-a-target": "nav-search-input",
                        spellCheck: !1,
                        refDelegate: this.getInputRef
                    }), r.createElement(s.p, i.__assign({
                        noTail: !0
                    }, this.props.balloonProps, {
                        show: this.state.isOpen
                    }), r.createElement("div", {
                        tabIndex: 0,
                        onKeyDown: this.onKeyDown,
                        onMouseOver: this.props.enableMouseEvents ? this.onMouseOver : void 0
                    }, e)))
                }, t.prototype.toggle = function(e) {
                    e !== this.state.isOpen && this.setState({
                        isOpen: e
                    })
                }, t.prototype.setValue = function(e) {
                    this.inputRef.value = e
                }, t.prototype.focusNext = function(e) {
                    var t, n = document.querySelectorAll("[data-selectable=true]"),
                        i = document.activeElement,
                        r = Array.prototype.indexOf.call(n, i);
                    if ((t = r < 0 ? e > 0 ? 0 : n.length - 1 : r + e) < 0 && (t = 0), !(t >= n.length)) {
                        var a = n.item(t);
                        a.focus(), a.tabIndex = 0, this.state.currentFocus && (this.state.currentFocus.tabIndex = -1), this.setState({
                            currentFocus: a
                        }), this.props.onFocusChange && this.props.onFocusChange(a)
                    }
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return d
        })
    },
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var i = n("TToO"),
            r = n("6sO2"),
            a = n("Aj/L"),
            o = "application/json; charset=UTF-8",
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
                    return t === o ? JSON.stringify(e) : e
                }, e.getDefaultHeaders = function(e, t) {
                    var n = r.n.store.getState(),
                        i = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": r.n.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = o);
                    var s = Object(a.c)(n);
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
            r = n("U7vG"),
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
                    return r.createElement(a.N, {
                        dragOver: this.state.isDraggingOver,
                        error: this.props.error
                    }, r.createElement(a.V, {
                        position: a._8.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        zIndex: a._51.Above
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
    J92i: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("HW6M"),
            a = n("U7vG"),
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
                return a.createElement(u._1, {
                    padding: {
                        bottom: 1
                    }
                }, a.createElement("div", {
                    onClick: function() {
                        e.onSelect(e.index)
                    },
                    "aria-label": Object(o.d)("Click to select Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar")
                }, a.createElement(u._24, {
                    fullHeight: !0,
                    fullWidth: !0,
                    position: u._8.Relative,
                    className: r(t)
                }, a.createElement("img", {
                    alt: Object(o.d)("Default Avatar Number {index, number}", {
                        index: e.index
                    }, "Default Avatar"),
                    src: e.imageSrc
                }))))
            }),
            m = n("4Q9N"),
            g = n("Tt3k"),
            h = n("W6ca"),
            f = n("xgnX"),
            b = n("CSlQ"),
            v = (n("AL3x"), n("nmDn"));
        n.d(t, "b", function() {
            return S
        }), n.d(t, "a", function() {
            return E
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
            _ = function(e) {
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
                            var i = Object(g.a)(n),
                                r = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(r, 10) > 10 ? t.setState({
                                statusMessage: f.b.BadSizeError
                            }) : (t.setState({
                                selectedImageIndex: void 0,
                                imagePreviewURL: "",
                                imageFormat: "",
                                currentImageHasTallAspectRatio: !1
                            }), Object(g.b)(n, function(e) {
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
                            statusMessage: f.b.ImageNotSelected
                        })
                    }, t.onUpdateButtonClick = function(e) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, a, s = this;
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
                                        return i.trys.push([1, 3, , 4]), [4, Object(h.a)(this.props.userID, this.props.authToken, m.a.ProfileImage, this.state.imageFormat)];
                                    case 2:
                                        return t = i.sent(), n = t.upload_url, r = t.upload_id, [3, 4];
                                    case 3:
                                        return a = i.sent(), this.logger.error(a, "Request for upload ID failed to get expected response from server."), this.setState({
                                            statusMessage: f.b.UnexpectedError
                                        }), [2];
                                    case 4:
                                        return this.unsubscribe = o.j.subscribe({
                                            topic: Object(d.g)(this.props.userID),
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
                                                if (e.upload_id === r) {
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
                            return a.createElement(p, {
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
                        n = a.createElement(u._1, {
                            className: r(i),
                            "data-test-selector": "preview-image",
                            position: u._8.Relative
                        }, a.createElement("img", {
                            src: "" + this.state.imagePreviewURL
                        }))
                    }
                    var c = null;
                    "" === this.state.imagePreviewURL && (c = a.createElement(u._1, {
                        className: "profile-edit__upload-info"
                    }, a.createElement(u._1, null, a.createElement(u._14, {
                        asset: u._15.Plus,
                        type: u._16.Alt2,
                        height: 20,
                        width: 20
                    })), a.createElement(u._34, {
                        type: u._39.H3,
                        color: u.I.Alt2,
                        fontSize: u.Q.Size4
                    }, Object(o.d)("Upload a Photo", "Profile Edit"))));
                    var d = null;
                    this.props.showCloser && (d = a.createElement(l.a, null));
                    var m = null;
                    if (null !== this.state.statusMessage) {
                        var g = Object(f.c)(this.state.statusMessage),
                            h = g.message,
                            b = g.type;
                        m = a.createElement(u._5, {
                            label: h,
                            type: b
                        })
                    }
                    var v = this.props.login;
                    return this.props.displayName && (v = this.props.displayName), a.createElement(u._1, {
                        className: "profile-edit",
                        position: u._8.Relative,
                        fullHeight: !0
                    }, a.createElement(u._24, {
                        className: "profile-edit__background-container",
                        background: u.m.Base,
                        fullWidth: !0
                    }, a.createElement(u._1, {
                        padding: 2,
                        display: u.M.InlineBlock,
                        position: u._8.Relative,
                        textAlign: u._35.Center,
                        fullWidth: !0
                    }, a.createElement(u._24, {
                        textAlign: u._35.Left,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(u._34, {
                        type: u._39.H3,
                        color: u.I.Alt2,
                        fontSize: u.Q.Size4
                    }, Object(o.d)("Edit Profile Picture for {userName}", {
                        userName: v
                    }, "Profile Edit"), " ")), a.createElement(u._1, {
                        className: "profile-edit__upload-container",
                        display: u.M.InlineBlock,
                        position: u._8.Relative,
                        textAlign: u._35.Center,
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(u._1, {
                        className: "profile-edit__upload",
                        display: u.M.InlineBlock,
                        position: u._8.Relative,
                        textAlign: u._35.Center
                    }, a.createElement(s.a, {
                        allowedFileTypes: y,
                        onFilesSubmitted: this.onImageInputChange
                    }, c), n)), a.createElement(u._24, {
                        "data-test-selector": "status-message",
                        fontSize: u.Q.Size4,
                        position: u._8.Relative,
                        textAlign: u._35.Center,
                        className: "profile-edit__status-message"
                    }, m), a.createElement(u._24, {
                        borderBottom: !0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(u._1, {
                        textAlign: u._35.Left,
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(u._34, {
                        type: u._39.H3,
                        color: u.I.Alt2,
                        fontSize: u.Q.Size5
                    }, Object(o.d)("Or select one of these", "Profile Edit"))), a.createElement(u._45, {
                        childWidth: u._46.ExtraSmall,
                        gutterSize: u._47.ExtraSmall,
                        placeholderItems: 3
                    }, t)), a.createElement(u._1, {
                        display: u.M.Flex,
                        justifyContent: u._0.Center
                    }, a.createElement(u.u, {
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
            }(a.Component),
            E = Object(b.d)("Profile Edit")(_)
    },
    JBcW: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), t.c = function(e) {
            r.m.track(a.SpadeEventType.BrowserPushNotificationPrompt, e)
        }, t.b = function(e) {
            r.m.track(a.SpadeEventType.BrowserPushNotificationDisable, e)
        };
        var i, r = n("6sO2"),
            a = n("vH/s");
        (i || (i = {})).Settings = "settings"
    },
    K4jf: function(e, t, n) {
        "use strict";

        function i(e, t) {
            var n = {
                time: Date.now(),
                location: "recommended",
                target_channel: t.targetChannel,
                action: e
            };
            f.n.tracking.track(C.SpadeEventType.AutoHostChannelUpdate, n)
        }

        function r(e) {
            var t = null;
            return e.description && (t = g.createElement(O._1, {
                margin: {
                    top: 1
                }
            }, g.createElement(O._34, {
                color: O.I.Alt2
            }, e.description))), g.createElement(O._1, {
                margin: {
                    top: 2,
                    bottom: 4
                }
            }, g.createElement(O._34, {
                type: O._39.H3,
                fontSize: O.Q.Size2
            }, e.title), t)
        }

        function a(e, t) {
            var n = {
                time: Date.now(),
                new_value: t.newValue
            };
            f.n.tracking.track(e, n)
        }

        function o() {
            return g.createElement(V, {
                label: Object(f.d)("Password", "ChangePasswordLink"),
                orientation: O.S.Horizontal
            }, g.createElement(O._34, null, Object(f.d)("<x:link>Change password.</x:link> Improve your security with a strong password.", {
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
        var s, l = n("RH2O"),
            c = n("2KeS"),
            d = n("+xm8"),
            u = n("f2i/"),
            p = n("Aj/L"),
            m = n("TToO"),
            g = n("U7vG"),
            h = n("CIox"),
            f = n("6sO2"),
            b = n("yWCw"),
            v = n("CSlQ"),
            S = n("eXld"),
            y = n("2aoH"),
            _ = n("j7/Y"),
            E = n("Ejve"),
            k = n("w9tK"),
            C = n("vH/s"),
            w = n("H4lr"),
            O = n("Odds");
        ! function(e) {
            e[e.NoChanges = 0] = "NoChanges", e[e.DirtyChanges = 1] = "DirtyChanges", e[e.Working = 2] = "Working", e[e.Success = 3] = "Success", e[e.Error = 4] = "Error"
        }(s || (s = {}));
        var N, P = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    var e = O.y.Default,
                        t = Object(f.d)("Save Changes", "SaveSettingsFooter"),
                        n = O.z.Default,
                        i = !1;
                    return this.props.status === s.Working ? e = O.y.Loading : this.props.status === s.Success ? e = O.y.Success : this.props.status === s.Error ? (n = O.z.Alert, t = Object(f.d)("Failed to save settings. Try again.", "SaveSettingsFooter")) : this.props.status === s.NoChanges && (i = !0), g.createElement(w.a, null, g.createElement(O._24, {
                        borderTop: !0,
                        display: O.M.Flex,
                        alignItems: O.c.Center,
                        justifyContent: O._0.Center,
                        padding: {
                            y: 2
                        },
                        margin: {
                            x: zt
                        }
                    }, g.createElement(O.u, {
                        disabled: i,
                        size: O.x.Large,
                        state: e,
                        type: n,
                        onClick: this.props.onClickSave,
                        "data-a-target": "save-user-settings-button"
                    }, t)))
                }, t
            }(g.Component),
            U = n("9u8h"),
            j = n("LIeg"),
            x = n("HM6l"),
            T = n("5LoI"),
            I = n("MAZT"),
            A = n("5Y57"),
            D = n("kqTE"),
            F = n("zCIC"),
            H = n("5kgt"),
            R = (n("4LC8"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClick = function() {
                        t.props.onClick(t.props.user)
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return g.createElement(O._1, m.__assign({
                        className: "auto-host-list-item",
                        padding: {
                            y: 1,
                            x: 1
                        }
                    }, Object(H.a)(this.props)), g.createElement(O.A, {
                        row: !0
                    }, g.createElement(O.C, {
                        alt: this.props.user.name,
                        src: this.props.user.avatar || f.a.defaultAvatarURL,
                        size: O.D.Size4,
                        aspect: O.k.Aspect1x1
                    }), g.createElement(O._1, {
                        fullWidth: !0,
                        display: O.M.Flex,
                        position: O._8.Relative
                    }, g.createElement(O.V, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, g.createElement(O._34, {
                        type: O._39.Span,
                        ellipsis: !0
                    }, this.props.user.name))), g.createElement(O._1, {
                        className: "auto-host-list-item__delete",
                        padding: {
                            right: 1
                        },
                        display: O.M.Flex,
                        attachRight: !0
                    }, g.createElement(O.v, {
                        "data-test-selector": "AUTO_HOST_DELETE_BUTTON",
                        ariaLabel: Object(f.d)("Delete", "HoverListItem"),
                        icon: O._15.Trash,
                        onClick: this.onClick
                    }))))
                }, t
            }(g.Component)),
            M = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onAddClick = function() {
                        t.props.onAddClick(t.props.user)
                    }, t.onAddedClick = function() {
                        t.props.onAddedClick(t.props.user)
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    return e = this.props.user.added ? g.createElement(O.u, {
                        onClick: this.onAddedClick,
                        "data-test-selector": "AUTO_HOST_REMOVE_BUTTON",
                        icon: O._15.Check,
                        statusAlertIcon: O._15.Trash,
                        statusAlertText: Object(f.d)("Remove", "AutoHostUserResultCard")
                    }, Object(f.d)("Added", "AutoHostUserResultCard")) : g.createElement(O.u, {
                        type: O.z.Hollow,
                        onClick: this.onAddClick,
                        "data-test-selector": "AUTO_HOST_ADD_BUTTON"
                    }, Object(f.d)("Add", "AutoHostUserResultCard")), g.createElement(O._1, m.__assign({
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(H.a)(this.props)), g.createElement(O.A, {
                        row: !0
                    }, g.createElement(O.C, {
                        alt: this.props.user.name,
                        src: this.props.user.avatar || f.a.defaultAvatarURL,
                        size: O.D.Size4,
                        aspect: O.k.Aspect1x1
                    }), g.createElement(O._1, {
                        flexGrow: 1,
                        display: O.M.Flex,
                        position: O._8.Relative
                    }, g.createElement(O.V, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, g.createElement(O._34, {
                        type: O._39.Span,
                        ellipsis: !0
                    }, this.props.user.name))), e))
                }, t
            }(g.Component),
            L = function(e) {
                return g.createElement(O._1, {
                    margin: {
                        top: 1
                    }
                }, g.createElement(O._34, {
                    color: O.I.Alt,
                    "data-a-target": e.dataTarget
                }, e.text))
            },
            V = (n("l+ac"), function(e) {
                return g.createElement(O._1, {
                    className: "settings-form-group",
                    margin: {
                        bottom: 4
                    }
                }, g.createElement(O.R, {
                    error: e.error,
                    errorMessage: e.errorMessage || Object(f.d)("Sorry, something went wrong. Please try again later.", "SettingsFormGroup"),
                    hint: e.hint,
                    id: e.id,
                    label: e.label,
                    labelOptional: e.labelOptional,
                    orientation: e.orientation || O.S.Horizontal
                }, e.children))
            }),
            B = (n("WYUS"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.userSearch = null, t.setUserSearchRef = function(e) {
                        t.userSearch = e
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.userSearch && e.isUserSearchOpen !== this.props.isUserSearchOpen && this.userSearch.toggle(e.isUserSearchOpen)
                }, t.prototype.render = function() {
                    var e = this,
                        t = null;
                    return this.props.isWaiting ? t = g.createElement(O._3, {
                        fillContent: !0
                    }) : this.props.userResults && (t = this.props.userResults.map(function(t) {
                        return g.createElement(D.a, {
                            key: t.id
                        }, g.createElement(M, {
                            user: t,
                            onAddClick: e.props.onHostAdded,
                            onAddedClick: e.props.onHostRemoved,
                            key: t.id
                        }))
                    })), g.createElement(V, {
                        label: Object(f.d)("Currently Hosting", "SettingsChannelPage"),
                        error: !!this.props.formErrorMsg,
                        errorMessage: this.props.formErrorMsg || ""
                    }, g.createElement(L, {
                        text: Object(f.d)("Add and adjust your hosted channels", "SettingsChannelPage")
                    }), g.createElement(O._1, {
                        className: "auto-host-list",
                        alignContent: O.b.Center
                    }, g.createElement(O._1, {
                        position: O._8.Relative,
                        margin: {
                            y: 1
                        }
                    }, g.createElement(A.a, {
                        onChange: this.props.onUserInputChange,
                        onFocusInput: this.props.onFocusInput,
                        ref: this.setUserSearchRef,
                        placeholder: Object(f.d)("Search channels to host", "AutoHostList"),
                        balloonProps: {
                            show: this.props.isUserSearchOpen,
                            direction: O.q.Bottom,
                            size: O.r.Large
                        },
                        onClose: this.props.onSearchClose,
                        isErrored: this.props.isSearchErrored
                    }, g.createElement(O._1, {
                        className: "auto-host-list__user-search"
                    }, g.createElement(F.b, {
                        contentClassName: "auto-host-list__user-search-content",
                        suppressScrollX: !0
                    }, g.createElement(O._1, {
                        fullWidth: !0
                    }, t, g.createElement(F.a, {
                        enabled: !this.props.isWaiting && this.props.isUserSearchOpen,
                        loadMore: this.props.loadMore
                    })))))), g.createElement(F.b, {
                        className: "auto-host-list__edit",
                        suppressScrollX: !0
                    }, g.createElement(O._1, null, this.props.autohostChannels && this.props.autohostChannels.map(function(t) {
                        return g.createElement(R, {
                            user: t,
                            key: t.id,
                            onClick: e.props.onHostRemoved
                        })
                    })))))
                }, t
            }(g.Component)),
            z = 100,
            q = "/kraken/streams/recommended",
            W = "kraken/autohost/list",
            G = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.state = {
                        userResults: [],
                        userTerm: "",
                        isUserSearchOpen: !1,
                        queryID: "",
                        isWaiting: !1,
                        autohostChannels: [],
                        isSearchErrored: !1,
                        recommendedChannels: null,
                        currentPage: 0
                    }, t.onUserInputChange = function(e) {
                        if (t.inputTimer && (clearTimeout(t.inputTimer), t.inputTimer = 0), !e) return t.setRecommendedChannels(), void t.setState(function() {
                            return {
                                userTerm: "",
                                isWaiting: !1,
                                isSearchErrored: !1,
                                formErrorMsg: "",
                                currentPage: 0
                            }
                        });
                        t.setState({
                            userTerm: e,
                            userResults: [],
                            isWaiting: !0,
                            isSearchErrored: !1,
                            currentPage: 0
                        }), t.inputTimer = setTimeout(function() {
                            return t.doUserSearch(e)
                        }, z)
                    }, t.loadMore = function() {
                        return m.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i, r, a = this;
                            return m.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (!this.state.userTerm || this.state.queryID || this.state.isWaiting || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, t = null, o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(T.a.Users, this.state.userTerm, "", {
                                            page: e
                                        })];
                                    case 2:
                                        return t = o.sent(), [3, 4];
                                    case 3:
                                        return n = o.sent(), f.i.error(n, "Algolia page search failed"), this.setState({
                                            isSearchErrored: !0,
                                            isUserSearchOpen: !0
                                        }), [2];
                                    case 4:
                                        return t && t.users ? (i = t.users.hits.filter(function(e) {
                                            return !a.props.user || e.objectID !== a.props.user.id
                                        }).map(function(e) {
                                            return {
                                                id: e.objectID,
                                                avatar: e.profile_image,
                                                name: e.name,
                                                added: !!a.state.autohostChannels.find(function(t) {
                                                    return t.id === e.objectID
                                                })
                                            }
                                        }), r = t.exhaustedHits, this.setState(function(t) {
                                            return {
                                                userResults: t.userResults.concat(i),
                                                isUserSearchOpen: !0,
                                                isWaiting: !1,
                                                currentPage: e,
                                                exhaustedHits: r
                                            }
                                        }), [2]) : [2]
                                }
                            })
                        })
                    }, t.addChannel = function(e) {
                        return m.__awaiter(t, void 0, void 0, function() {
                            var t, n, r;
                            return m.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (!this.state.autohostChannels) return [2];
                                        (t = this.state.autohostChannels.map(function(e) {
                                            return e.id
                                        })).push(e.id), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, U.a.put(W, {
                                            body: {
                                                targets: t.join(",")
                                            }
                                        })];
                                    case 2:
                                        return a.sent(), [3, 4];
                                    case 3:
                                        return n = a.sent(), r = Object(f.d)("Unable to add user to auto host list", "AutoHostList"), f.i.error(n, r, {
                                            target: e
                                        }), this.setState({
                                            isSearchErrored: !0,
                                            formErrorMsg: r
                                        }), [2];
                                    case 4:
                                        return function(e) {
                                            i("added", e)
                                        }({
                                            targetChannel: e.login
                                        }), this.setState(function(t) {
                                            var n = t.userResults.findIndex(function(t) {
                                                    return e.id === t.id
                                                }),
                                                i = t.userResults;
                                            t.userResults && n >= 0 && (i = j(t.userResults, function(e) {
                                                return e[n]
                                            }, function(e) {
                                                return e.added = !0, e
                                            }));
                                            var r = t.recommendedChannels ? t.recommendedChannels.findIndex(function(t) {
                                                    return e.id === t.id
                                                }) : -1,
                                                a = t.recommendedChannels;
                                            return t.recommendedChannels && r >= 0 && (a = j(t.recommendedChannels, function(e) {
                                                return e[r]
                                            }, function(e) {
                                                return e.added = !0, e
                                            })), {
                                                userResults: i,
                                                recommendedChannels: a,
                                                autohostChannels: t.autohostChannels.concat([e]),
                                                formErrorMsg: ""
                                            }
                                        }), [2]
                                }
                            })
                        })
                    }, t.onFocusInput = function() {
                        t.state.userTerm ? t.state.isUserSearchOpen || t.setState({
                            isUserSearchOpen: !0
                        }) : t.setRecommendedChannels()
                    }, t.setRecommendedChannels = function() {
                        return m.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i = this;
                            return m.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (this.state.recommendedChannels) return this.setState(function(e) {
                                            return {
                                                userResults: e.recommendedChannels,
                                                isUserSearchOpen: !0
                                            }
                                        }), [2];
                                        r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, U.a.get(q)];
                                    case 2:
                                        return e = r.sent(), [3, 4];
                                    case 3:
                                        return t = r.sent(), f.i.error(t, "Unable to retrieve recomended channels"), [2];
                                    case 4:
                                        return e.body && (n = e.body.recommended_streams.map(function(e) {
                                            var t = String(e.channel._id);
                                            return {
                                                id: t,
                                                name: e.channel.display_name,
                                                login: e.channel.name,
                                                avatar: e.channel.logo,
                                                added: !!i.state.autohostChannels.find(function(e) {
                                                    return e.id === t
                                                })
                                            }
                                        }), this.setState({
                                            recommendedChannels: n,
                                            userResults: n,
                                            isUserSearchOpen: !0
                                        })), [2]
                                }
                            })
                        })
                    }, t.onSearchClose = function() {
                        t.setState({
                            isUserSearchOpen: !1
                        })
                    }, t.fetchChannelsList = function() {
                        return m.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i;
                            return m.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), [4, U.a.get(W)];
                                    case 1:
                                        return e = r.sent(), [3, 3];
                                    case 2:
                                        return t = r.sent(), n = Object(f.d)("Unable to fetch auto host list", "AutoHostList"), f.i.error(t, n), this.setState({
                                            isSearchErrored: !0,
                                            formErrorMsg: n
                                        }), [2];
                                    case 3:
                                        return e.body && (i = e.body.targets.map(function(e) {
                                            return {
                                                id: String(e._id),
                                                name: e.display_name,
                                                login: e.name,
                                                avatar: e.logo
                                            }
                                        }), this.setState({
                                            autohostChannels: i
                                        })), [2]
                                }
                            })
                        })
                    }, t.removeChannel = function(e) {
                        return m.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, a, o;
                            return m.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (!this.state.autohostChannels) return [2];
                                        if (t = [], 1 !== this.state.autohostChannels.length) return [3, 5];
                                        s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 3, , 4]), [4, U.a.delete(W)];
                                    case 2:
                                        return s.sent(), [3, 4];
                                    case 3:
                                        return n = s.sent(), this.reportChannelError(e, n), [2];
                                    case 4:
                                        return [3, 9];
                                    case 5:
                                        if (t = this.state.autohostChannels.slice(), (r = t.findIndex(function(t) {
                                                return e.id === t.id
                                            })) < 0) return this.reportChannelError(e, new Error("User not found in auto host list")), [2];
                                        t.splice(r, 1), a = t.map(function(e) {
                                            return e.id
                                        }), s.label = 6;
                                    case 6:
                                        return s.trys.push([6, 8, , 9]), [4, U.a.put(W, {
                                            body: {
                                                targets: a.join(",")
                                            }
                                        })];
                                    case 7:
                                        return s.sent(), [3, 9];
                                    case 8:
                                        return o = s.sent(), this.reportChannelError(e, o), [2];
                                    case 9:
                                        return function(e) {
                                            i("removed", e)
                                        }({
                                            targetChannel: e.login
                                        }), this.setState(function(n) {
                                            var i = n.userResults.findIndex(function(t) {
                                                    return e.id === t.id
                                                }),
                                                r = n.userResults;
                                            n.userResults && i >= 0 && (r = j(n.userResults, function(e) {
                                                return e[i]
                                            }, function(e) {
                                                return e.added = !1, e
                                            }));
                                            var a = n.recommendedChannels ? n.recommendedChannels.findIndex(function(t) {
                                                    return e.id === t.id
                                                }) : -1,
                                                o = n.recommendedChannels;
                                            return n.recommendedChannels && a >= 0 && (o = j(n.recommendedChannels, function(e) {
                                                return e[a]
                                            }, function(e) {
                                                return e.added = !1, e
                                            })), {
                                                userResults: r,
                                                recommendedChannels: o,
                                                autohostChannels: t,
                                                formErrorMsg: ""
                                            }
                                        }), [2]
                                }
                            })
                        })
                    }, t.searchClient = new I.a(f.a.algoliaApplicationID, f.a.algoliaAPIKey), t
                }
                return m.__extends(t, e), t.prototype.componentWillMount = function() {
                    return m.__awaiter(this, void 0, void 0, function() {
                        return m.__generator(this, function(e) {
                            return this.fetchChannelsList(), [2]
                        })
                    })
                }, t.prototype.render = function() {
                    return g.createElement(B, {
                        onUserInputChange: this.onUserInputChange,
                        isUserSearchOpen: this.state.isUserSearchOpen,
                        userResults: this.state.userResults,
                        onHostAdded: this.addChannel,
                        onFocusInput: this.onFocusInput,
                        autohostChannels: this.state.autohostChannels,
                        onHostRemoved: this.removeChannel,
                        isSearchErrored: this.state.isSearchErrored,
                        isWaiting: this.state.isWaiting,
                        onSearchClose: this.onSearchClose,
                        formErrorMsg: this.state.formErrorMsg,
                        loadMore: this.loadMore
                    })
                }, t.prototype.doUserSearch = function(e) {
                    return m.__awaiter(this, void 0, void 0, function() {
                        var t, n, i, r, a = this;
                        return m.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    this.inputTimer = 0, t = Object(x.a)(), this.setState({
                                        queryID: t
                                    }), n = null, o.label = 1;
                                case 1:
                                    return o.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(T.a.Users, e, t)];
                                case 2:
                                    return n = o.sent(), [3, 4];
                                case 3:
                                    return i = o.sent(), f.i.error(i, "Algolia auto-host user search failed"), this.setState({
                                        isSearchErrored: !0,
                                        isWaiting: !1,
                                        isUserSearchOpen: !0
                                    }), [2];
                                case 4:
                                    return n && n.users ? (r = n.users.hits.filter(function(e) {
                                        return !a.props.user || e.objectID !== a.props.user.id
                                    }).map(function(e) {
                                        return {
                                            id: e.objectID,
                                            avatar: e.profile_image,
                                            name: e.name,
                                            login: e.login,
                                            added: !!a.state.autohostChannels.find(function(t) {
                                                return t.id === e.objectID
                                            })
                                        }
                                    }), this.setState({
                                        userResults: r,
                                        isUserSearchOpen: !0,
                                        isWaiting: !1,
                                        exhaustedHits: n.exhaustedHits,
                                        queryID: ""
                                    }), [2]) : [2]
                            }
                        })
                    })
                }, t.prototype.reportChannelError = function(e, t) {
                    var n = Object(f.d)("Unable to remove channel from auto host list", "AutoHostList");
                    f.i.error(t, n, {
                        target: e
                    }), this.setState({
                        isSearchErrored: !0,
                        formErrorMsg: n
                    })
                }, t
            }(g.Component),
            Q = Object(l.b)(function(e) {
                return {
                    user: Object(p.c)(e)
                }
            })(G),
            Y = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderBody = function() {
                        return t.props.showPlaceholder ? g.createElement(O._7, null) : g.createElement(O._1, null, g.createElement(O._41, {
                            checked: t.props.checked,
                            error: t.props.error,
                            disabled: t.props.disabled,
                            onChange: t.onChange,
                            id: t.props.id
                        }), g.createElement(L, {
                            text: t.props.description
                        }))
                    }, t.onChange = function(e) {
                        t.props.onChange && t.props.onChange(e.currentTarget.checked)
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return g.createElement(V, {
                        id: this.props.id,
                        label: this.props.label,
                        error: this.props.error,
                        errorMessage: this.props.errorMessage,
                        orientation: O.S.Horizontal
                    }, this.renderBody())
                }, t
            }(g.Component),
            J = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    var e = Object(f.d)("Auto Hosting", "AutoHostToggle"),
                        t = Object(f.d)("Toggle all forms of auto hosting: teammates, host list, and similar channels. <x:link>Learn more</x:link>", {
                            "x:link": function(e) {
                                return g.createElement("a", {
                                    key: "learn-more-link",
                                    href: "https://blog.twitch.tv/grow-your-community-with-auto-hosting-e80c1460f6e1"
                                }, g.createElement(O._34, {
                                    type: O._39.Span,
                                    bold: !0
                                }, e))
                            }
                        }, "AutoHostToggle");
                    return g.createElement(Y, {
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
        }(N || (N = {}));
        var K, $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderBody = function() {
                        return void 0 === t.props.hostPriority ? g.createElement(O._7, null) : g.createElement(O._20, {
                            value: t.props.hostPriority,
                            onChange: t.onHostPriorityChange,
                            error: t.props.error,
                            disabled: t.props.updating
                        }, g.createElement("option", {
                            value: N.Random
                        }, Object(f.d)("Host channels randomly.", "SettingsHostPriority")), g.createElement("option", {
                            value: N.Ordered
                        }, Object(f.d)("Host channels by the order they appear in the list.", "SettingsHostPriority")))
                    }, t.onHostPriorityChange = function(e) {
                        switch (e.currentTarget.value) {
                            case N.Random:
                                t.props.onChange(N.Random);
                                break;
                            case N.Ordered:
                                t.props.onChange(N.Ordered)
                        }
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return g.createElement(V, {
                        label: "Host Priority",
                        error: this.props.error
                    }, this.renderBody())
                }, t
            }(g.Component),
            X = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    var e = Object(f.d)("Auto Host Channels Similar to Yours", "SimilarHostToggle"),
                        t = Object(f.d)("Streamers on your primary team and host list will be hosted first.", "SimilarHostToggle ");
                    return g.createElement(Y, {
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
            Z = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    var e = Object(f.d)("Team Hosting", "TeamHostToggle"),
                        t = Object(f.d)("Automatically host random channels from your team when you're not live. Team channels will be hosted before any channels in your host list.", "TeamHostToggle ");
                    return g.createElement(Y, {
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
            ee = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    var e = Object(f.d)("Vodcast Hosting", "VodcastToggle"),
                        t = Object(f.d)("Includes Vodcasts in auto host. <x:link>Learn about Vodcasts.</x:link>", {
                            "x:link": function(e) {
                                return g.createElement("a", {
                                    key: "learn-more-link",
                                    href: "https://blog.twitch.tv/vodcast-brings-the-twitch-community-experience-to-uploads-54098498715"
                                }, g.createElement(O._34, {
                                    type: O._39.Span,
                                    bold: !0
                                }, e))
                            }
                        }, "VodcastToggle");
                    return g.createElement(Y, {
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
            te = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return g.createElement(O._1, null, g.createElement(r, {
                        title: Object(f.d)("Auto Hosting", "AutoHostSettingsComponent"),
                        description: Object(f.d)("Host your friends and favorite channels while you're offline", "AutoHostSettingsComponent")
                    }), g.createElement(J, {
                        enabled: this.props.autoHostingEnabled,
                        error: this.props.autoHostingError,
                        updating: this.props.autoHostingUpdating,
                        onChange: this.props.onAutoHostingEnabledChange
                    }), g.createElement(Z, {
                        enabled: this.props.teamHostingEnabled,
                        error: this.props.teamHostingError,
                        updating: this.props.teamHostingUpdating,
                        onChange: this.props.onTeamHostingEnabledChange
                    }), g.createElement(ee, {
                        enabled: this.props.vodcastHostingEnabled,
                        error: this.props.vodcastHostingError,
                        updating: this.props.vodcastHostingUpdating,
                        onChange: this.props.onVodcastHostingEnabledChange
                    }), g.createElement(Q, null), g.createElement($, {
                        hostPriority: this.props.hostPriority,
                        error: this.props.hostPriorityError,
                        updating: this.props.hostPriorityUpdating,
                        onChange: this.props.onHostPriorityChange
                    }), g.createElement(X, {
                        enabled: this.props.similarHostingEnabled,
                        error: this.props.similarHostingError,
                        updating: this.props.similarHostingUpdating,
                        onChange: this.props.onSimilarHostingEnabledChange
                    }))
                }, t
            }(g.Component),
            ne = "/kraken/autohost/settings",
            ie = function(e) {
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
                        return m.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return m.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, U.a.put(ne, {
                                            body: e
                                        })];
                                    case 1:
                                        return t = n.sent(), this.setState(this.deserialize(t)), [2]
                                }
                            })
                        })
                    }, t.setAutoHostEnabled = function(e) {
                        return m.__awaiter(t, void 0, void 0, function() {
                            return m.__generator(this, function(t) {
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
                                                a(C.SpadeEventType.AutoHostToggle, e)
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
                        return m.__awaiter(t, void 0, void 0, function() {
                            return m.__generator(this, function(t) {
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
                                                a(C.SpadeEventType.TeamHostToggle, e)
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
                        return m.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return m.__generator(this, function(n) {
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
                                                a(C.SpadeEventType.DeprioritizeVodcastToggle, e)
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
                        return m.__awaiter(t, void 0, void 0, function() {
                            return m.__generator(this, function(t) {
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
                        return m.__awaiter(t, void 0, void 0, function() {
                            return m.__generator(this, function(t) {
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
                                                a(C.SpadeEventType.SimilarHostToggle, e)
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
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    return m.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return m.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, U.a.get(ne)];
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
                                        hostPriority: N.Random,
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
                    return g.createElement(te, {
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
            re = Object(v.d)("SettingsAutoHostContainer")(ie),
            ae = n("3zLD"),
            oe = n("7vx8"),
            se = function(e) {
                var t = e.saving || e.errorLoading;
                return g.createElement(Y, {
                    id: "settings-channel-page-block-hyperlinks",
                    label: Object(f.d)("Block Hyperlinks", "BlockHyperlinksToggle"),
                    description: Object(f.d)("Your channel's chat will automatically delete posted URLs except for ones posted by you, moderators, and admins.", "BlockHyperlinksToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            le = n("ar1V"),
            ce = function(e) {
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
                return m.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
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
                    return g.createElement(se, {
                        loading: this.props.data.loading && !e,
                        saving: this.state.saving,
                        checked: this.state.checked,
                        errorLoading: !!this.props.data.error && !e,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onChange
                    })
                }, t
            }(g.Component),
            de = Object(ae.compose)(Object(v.d)("BlockHyperlinksToggle"), Object(oe.a)(le))(ce),
            ue = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        var n = +e.currentTarget.value;
                        t.props.onChange(n)
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    var e = this,
                        t = this.props.loading || this.props.saving || this.props.errorLoading,
                        n = [{
                            delay: 0,
                            label: Object(f.d)("Off", "ChatDelayRadioButtons"),
                            selected: 0 === this.props.chatDelayMs
                        }, {
                            delay: 2e3,
                            label: Object(f.d)("2 seconds", "ChatDelayRadioButtons"),
                            selected: 2e3 === this.props.chatDelayMs
                        }, {
                            delay: 4e3,
                            label: Object(f.d)("4 seconds", "ChatDelayRadioButtons"),
                            selected: 4e3 === this.props.chatDelayMs
                        }, {
                            delay: 6e3,
                            label: Object(f.d)("6 seconds", "ChatDelayRadioButtons"),
                            selected: 6e3 === this.props.chatDelayMs
                        }];
                    return g.createElement(V, {
                        orientation: O.S.Horizontal,
                        label: Object(f.d)("Non-Mod Chat Delay", "ChatDelayRadioButtons"),
                        error: this.props.errorLoading || this.props.errorSaving
                    }, g.createElement(O._1, {
                        display: O.M.Flex,
                        flexDirection: O.O.Row
                    }, n.map(function(n) {
                        var i = "chat-delay:" + n.label;
                        return g.createElement(O._1, {
                            key: i,
                            margin: {
                                right: 2
                            },
                            display: O.M.Flex,
                            flexDirection: O.O.Row
                        }, g.createElement(O._13, {
                            checked: n.selected,
                            value: n.delay.toString(),
                            label: n.label,
                            name: "Non-Mod Chat Delay: " + n.delay / 1e3 + "s",
                            onChange: e.onChange,
                            disabled: t,
                            "data-test-selector": "chat-delay-radio:" + n.delay
                        }))
                    })), g.createElement(L, {
                        text: Object(f.d)("Adds a short delay before non-mods see messages. Any message that is timed out or banned during the delay is removed from chat completely.", "ChatDelayRadioButtons")
                    }))
                }, t
            }(g.Component),
            pe = n("D2cp"),
            me = function(e) {
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
                return m.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
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
                    return g.createElement(ue, {
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
            ge = Object(ae.compose)(Object(v.d)("ChatDelayRadioButtons"), Object(oe.a)(pe))(me),
            he = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    var e = null,
                        t = this.props.loading || this.props.saving || this.props.errorLoading;
                    return (this.props.dirty || this.props.saving) && (e = g.createElement(O._1, {
                        margin: {
                            top: 1
                        }
                    }, g.createElement(O.u, {
                        onClick: this.props.onClickSave,
                        state: this.props.saving ? O.y.Loading : O.y.Default
                    }, Object(f.d)("Save Changes", "ChatRulesTextArea")))), g.createElement(V, {
                        orientation: O.S.Horizontal,
                        label: Object(f.d)("Chat Rules", "ChatRulesTextArea"),
                        error: this.props.errorLoading || this.props.errorSaving
                    }, g.createElement(O._36, {
                        disabled: t,
                        value: this.props.rules,
                        onChange: this.props.onChange,
                        rows: 5
                    }), g.createElement(L, {
                        text: Object(f.d)("Require first-time viewers to agree to your rules before chatting. One rule per line.", "ChatRulesTextArea")
                    }), e)
                }, t
            }(g.Component),
            fe = n("WaOj"),
            be = function(e) {
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
                return m.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
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
                    return g.createElement(he, {
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
            ve = Object(ae.compose)(Object(v.d)("ChatRulesTextArea"), Object(oe.a)(fe))(be),
            Se = function(e) {
                var t = e.saving || e.errorLoading;
                return g.createElement(Y, {
                    id: "settings-channel-page-email-verification",
                    label: Object(f.d)("Email Verification", "EmailVerificationToggle"),
                    description: Object(f.d)("Anyone that would like to send messages to your chat room must first verify their email address.", "EmailVerificationToggle"),
                    error: e.errorSaving || e.errorLoading,
                    checked: e.checked,
                    onChange: e.onChange,
                    disabled: t,
                    showPlaceholder: e.loading
                })
            },
            ye = n("woYr"),
            _e = function(e) {
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
                return m.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
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
                    return g.createElement(Se, {
                        loading: this.props.data.loading && !e,
                        saving: this.state.saving,
                        checked: this.state.checked,
                        onChange: this.onChange,
                        errorLoading: !!this.props.data.error && !e,
                        errorSaving: this.state.errorSaving
                    })
                }, t
            }(g.Component),
            Ee = Object(ae.compose)(Object(v.d)("EmailVerificationToggle"), Object(oe.a)(ye))(_e),
            ke = function(e) {
                var t = e.errorSaving || e.errorLoading;
                return g.createElement(Y, {
                    id: "settings-channel-page-mature-content",
                    label: Object(f.d)("Mature Content", "MatureContentToggle"),
                    description: Object(f.d)("Enable this setting if your stream contains content that may be inappropriate for younger audiences. You may never broadcast sexual activity, nudity, threats or extreme violence. Doing so will result in immediate, irrevocable termination of your account. Please make sure your content will comply with the <x:link>Terms of Service</x:link> before broadcasting", {
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
            Ce = function(e) {
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
                return m.__extends(t, e), t.prototype.render = function() {
                    return g.createElement(ke, {
                        checked: this.state.checked,
                        saving: this.state.saving,
                        loading: this.state.loading,
                        errorLoading: this.state.errorLoading,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onCheckBoxChange
                    })
                }, t
            }(g.Component),
            we = n("V5M+"),
            Oe = n("ebTC"),
            Ne = n("4Q9N"),
            Pe = n("J4ib"),
            Ue = n("vm+z"),
            je = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.showModal = function() {
                        t.props.user && t.props.showUploaderModal(t.props.user)
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    var e = null,
                        t = null;
                    if (this.props.data && this.props.data.user && this.props.data.user.offlineImageURL) {
                        e = g.createElement("img", {
                            "data-test-selector": "test-channel-offline-image-selector",
                            height: "90",
                            width: "160",
                            src: this.props.data.user.offlineImageURL
                        });
                        var n = Object(Pe.d)("Remove my Video Player Banner Image", "UploadVideoPlayerBanner");
                        t = g.createElement(O.v, {
                            icon: O._15.Trash,
                            ariaLabel: n
                        })
                    }
                    return g.createElement(O._1, null, g.createElement(r, {
                        title: Object(Pe.d)("Video Player Banner", "UploadVideoPlayerBanner"),
                        description: Object(Pe.d)("This is displayed on the player when your channel is offline.", "UploadVideoPlayerBanner")
                    }), g.createElement(O._1, {
                        display: O.M.Flex
                    }, e, g.createElement(O._1, {
                        padding: {
                            left: 1,
                            top: 1
                        }
                    }, g.createElement(O._1, {
                        display: O.M.Flex
                    }, g.createElement(O.u, {
                        "data-test-selector": "test-upload-video-player-banner-selector",
                        onClick: this.showModal
                    }, "Update"), t), g.createElement(L, {
                        text: Object(Pe.d)("Max 10mb GIF, JPG, or PNG", "UploadVideoPlayerBanner")
                    }))))
                }, t = m.__decorate([Object(oe.a)(Ue, {
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
            xe = Object(l.b)(function(e) {
                return {
                    user: Object(p.c)(e)
                }
            }, function(e) {
                return Object(c.b)({
                    showUploaderModal: function(e) {
                        return Object(we.d)(Oe.a, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            imageType: Ne.a.ChannelOfflineImage,
                            showCloser: !0
                        })
                    }
                }, e)
            })(je),
            Te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: s.NoChanges
                    }, t.renderContentSettingsSection = function() {
                        return g.createElement(O._1, null, g.createElement(r, {
                            title: Object(f.d)("Content Settings", "SettingsChannelPage"),
                            description: Object(f.d)("Choose how your channel will display for certain users", "SettingsChannelPage")
                        }), g.createElement(Ce, null))
                    }, t.renderChatSettingsSection = function() {
                        return g.createElement(O._1, null, g.createElement(r, {
                            title: Object(f.d)("Chat Options", "SettingsChannelPage"),
                            description: Object(f.d)("Moderate your channel's chat and who you allow in it", "SettingsChannelPage")
                        }), g.createElement(de, null), g.createElement(Ee, null), g.createElement(ve, null), g.createElement(ge, null))
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: s.Working
                        }, function() {})
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return f.a.buildType === E.a.Production ? null : g.createElement("div", null, g.createElement(xe, null), g.createElement(re, null), this.renderContentSettingsSection(), this.renderChatSettingsSection(), g.createElement(P, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    }))
                }, t = m.__decorate([Object(v.d)("SettingsChannelPage", {
                    autoReportInteractive: !0,
                    destination: k.a.SettingsChannel
                }), Object(_.a)({
                    location: C.PageviewLocation.SettingsPage
                })], t)
            }(g.Component),
            Ie = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: s.NoChanges
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: s.Working
                        }, function() {})
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return f.a.buildType === E.a.Production ? null : g.createElement("div", null, g.createElement(P, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    }))
                }, t = m.__decorate([Object(v.d)("SettingsConnectionsPage", {
                    autoReportInteractive: !0,
                    destination: k.a.SettingsConnections
                }), Object(_.a)({
                    location: C.PageviewLocation.SettingsPage
                })], t)
            }(g.Component),
            Ae = n("OAwv"),
            De = n("LBNC"),
            Fe = n("UbVv"),
            He = n("oIkB"),
            Re = n("F8kA"),
            Me = (n("hPJb"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.userId, t.props.isEnabled)
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return g.createElement(O._24, {
                        className: "advanced-notification-settings-toggle",
                        display: O.M.Flex,
                        justifyContent: O._0.Between,
                        background: O.m.Base,
                        padding: {
                            x: 5,
                            y: 1
                        },
                        borderBottom: !0
                    }, g.createElement(O._1, {
                        margin: {
                            left: 5
                        },
                        display: O.M.Flex,
                        flexGrow: 1,
                        alignItems: O.c.Center,
                        flexWrap: O.P.NoWrap
                    }, g.createElement(O._1, {
                        display: O.M.Flex,
                        flexGrow: 1,
                        flexWrap: O.P.NoWrap
                    }, g.createElement(O._1, {
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, g.createElement(O.Z, {
                        linkTo: "/" + this.props.login
                    }, g.createElement(O.l, {
                        src: this.props.thumbnail,
                        alt: this.props.text,
                        size: 40
                    }))), g.createElement(O._1, {
                        flexGrow: 1,
                        display: O.M.Flex,
                        flexDirection: O.O.Column
                    }, g.createElement(O._34, {
                        fontSize: O.Q.Size5
                    }, g.createElement(Re.a, {
                        to: "/" + this.props.login
                    }, this.props.text)), g.createElement(O._34, {
                        type: O._39.Span,
                        color: O.I.Alt2
                    }, this.props.description))), g.createElement(O._1, {
                        display: O.M.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, g.createElement(O._1, {
                        margin: {
                            right: 1
                        }
                    }, g.createElement(O._41, {
                        checked: this.props.isEnabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector",
                        id: this.props.userId
                    })), g.createElement(O._1, {
                        className: this.props.saved ? "advanced-notification-settings-toggle__saved" : "advanced-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, g.createElement(O._34, {
                        fontSize: O.Q.Size5,
                        color: O.I.Link
                    }, Object(f.d)("Saved", "AdvancedNotificationSettingsToggle"))))))
                }, t
            }(g.Component)),
            Le = n("AQCV"),
            Ve = (n("t4xU"), n("EaRL")),
            Be = function(e) {
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
                        return m.__awaiter(t, void 0, void 0, function() {
                            var t, i, r;
                            return m.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setAdvancedNotificationSetting ? (t = m.__assign({}, Object(He.a)({
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
                                        }, Object(He.d)(Ve, {
                                            limit: 50
                                        }, r), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return g.createElement(O._24, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, g.createElement(O._3, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return g.createElement(b.a, {
                        message: Object(f.d)("Error loading data.", "AdvancedNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return g.createElement(O._24, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, g.createElement(b.a, {
                        message: Object(f.d)("You must be logged in to update your settings", "AdvancedNotificationSettings")
                    }));
                    var e = Object(f.d)("{followCount, plural, one {You follow # channel} other {You follow # channels}}", {
                            followCount: this.props.data.currentUser.follows.totalCount
                        }, "AdvancedNotificationSettings"),
                        t = g.createElement(O._24, {
                            background: O.m.Alt2,
                            borderBottom: !0
                        }, g.createElement(O.Z, {
                            onClick: this.toggleCollapse,
                            alpha: !0,
                            "data-test-selector": "header-selector"
                        }, g.createElement(O._1, {
                            display: O.M.Flex,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, g.createElement(O._1, {
                            className: "advanced-notification-settings__header",
                            flexGrow: 0
                        }, g.createElement(O._34, {
                            fontSize: O.Q.Size5,
                            color: O.I.Alt2,
                            bold: !0
                        }, Object(f.d)("Advanced", "AdvancedNotificationSettings"))), g.createElement(O._1, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, g.createElement(O._34, {
                            "data-test-selector": "description-selector",
                            fontSize: O.Q.Size5,
                            color: O.I.Alt2
                        }, e)), g.createElement(O._1, {
                            className: this.state.collapsed ? "advanced-notification-settings--collapse" : "advanced-notification-settings--expand",
                            flexGrow: 0,
                            flexShrink: 1,
                            display: O.M.Flex,
                            justifyContent: O._0.Center
                        }, g.createElement(O._14, {
                            asset: O._15.AngleRight,
                            type: O._16.Alt2
                        }))))),
                        n = !this.props.data.loading && !this.props.data.error && !!this.props.data.currentUser.follows.pageInfo.hasNextPage;
                    return this.props.data.currentUser.follows.totalCount > 0 ? this.state.collapsed ? g.createElement(O._24, null, t) : g.createElement(O._24, null, t, g.createElement(O._24, {
                        borderBottom: !0,
                        padding: 2
                    }, g.createElement(O._1, {
                        padding: {
                            bottom: 1
                        }
                    }, g.createElement(O._34, {
                        fontSize: O.Q.Size5,
                        color: O.I.Alt2
                    }, Object(f.d)("Manage which channels you receive notifications for.", "AdvancedNotificationSettings"))), g.createElement(O._1, {
                        padding: {
                            bottom: 1
                        }
                    }, g.createElement(O._34, {
                        fontSize: O.Q.Size4,
                        color: O.I.Alt
                    }, e)), g.createElement(O._24, {
                        className: "advanced-notification-settings__toggle-container",
                        borderTop: !0,
                        borderLeft: !0,
                        borderRight: !0,
                        margin: {
                            bottom: .5
                        }
                    }, this.renderToggles(), g.createElement(F.a, {
                        loadMore: this.props.loadMore,
                        enabled: n,
                        pixelThreshold: 200
                    })))) : null
                }, t.prototype.renderToggles = function() {
                    if (this.props.data && !this.props.data.loading && this.props.data.currentUser) {
                        for (var e = [], t = 0, n = this.props.data.currentUser.follows.edges; t < n.length; t++) {
                            var i = n[t];
                            i.node && i.node.id && i.node.followers && e.push(g.createElement(Me, {
                                userId: i.node.id,
                                text: i.node.displayName,
                                login: i.node.login,
                                description: Object(f.d)("{followerCount,number} followers", {
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
            ze = Object(c.d)(Object(oe.a)(Ve, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network",
                        variables: {
                            limit: 50
                        }
                    }
                },
                props: function(e) {
                    return m.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: Ve,
                                variables: m.__assign({}, e.data.variables, {
                                    cursor: e.data.currentUser && e.data.currentUser.follows.edges[e.data.currentUser.follows.edges.length - 1].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult;
                                    return e.currentUser && n.currentUser ? {
                                        currentUser: m.__assign({}, n.currentUser, {
                                            follows: m.__assign({}, n.currentUser.follows, {
                                                edges: Object(He.b)(e.currentUser.follows.edges, n.currentUser.follows.edges)
                                            })
                                        })
                                    } : n
                                }
                            })
                        }
                    })
                }
            }), Object(oe.a)(Le, {
                name: "setAdvancedNotificationSetting"
            }), Object(v.d)("AdvancedNotificationSettings"))(Be),
            qe = n("OOv5"),
            We = n("JBcW"),
            Ge = (n("mVHD"), f.n.logger.withCategory("browser-push-notifications-settings")),
            Qe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hide: !1,
                        loading: !0,
                        deciding: !0,
                        hasSubscription: !1
                    }, t.toggle = function() {
                        return m.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return m.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.setState({
                                            deciding: !0
                                        }), [4, qe.a.hasPushSubscription()];
                                    case 1:
                                        if (!n.sent()) return [3, 6];
                                        n.label = 2;
                                    case 2:
                                        return n.trys.push([2, 4, , 5]), [4, qe.a.userUnsubscribe(We.a.Settings)];
                                    case 3:
                                        return n.sent(), [3, 5];
                                    case 4:
                                        return e = n.sent(), Ge.error(e, "user unsubscribe failed"), [3, 5];
                                    case 5:
                                        return [3, 9];
                                    case 6:
                                        return n.trys.push([6, 8, , 9]), [4, qe.a.userSubscribe(We.a.Settings)];
                                    case 7:
                                        return n.sent(), [3, 9];
                                    case 8:
                                        return t = n.sent(), Object(Fe.a)() ? (this.setState({
                                            hide: !0
                                        }), [2]) : (Ge.error(t, "user subscribe failed"), [3, 9]);
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
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    return m.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return m.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 3, , 4]), [4, qe.a.initialize()];
                                case 1:
                                    return t.sent(), [4, this.updateSubscriptionState()];
                                case 2:
                                    return t.sent(), [3, 4];
                                case 3:
                                    return e = t.sent(), Ge.error(e, "unexpected error initializing push manager"), this.setState({
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
                    var e = this.state.hasSubscription ? Object(f.d)("Turn Off", "BrowserPushNotificationsSettings") : Object(f.d)("Turn On", "BrowserPushNotificationsSettings");
                    return g.createElement(O._24, {
                        borderTop: !0,
                        padding: {
                            right: 2,
                            y: 1
                        },
                        margin: {
                            top: 1
                        },
                        "data-test-selector": "qa-browser-push-notifications-settings"
                    }, g.createElement(O._24, {
                        className: "browser-push-notification-settings",
                        padding: {
                            left: 5,
                            right: 4
                        },
                        display: O.M.Flex,
                        margin: {
                            x: 5
                        }
                    }, g.createElement(O._1, {
                        className: "browser-push-notification-settings__body",
                        display: O.M.Flex,
                        flexWrap: O.P.NoWrap,
                        flexGrow: 1
                    }, g.createElement(O._1, {
                        margin: {
                            right: 1
                        },
                        flexGrow: 1
                    }, g.createElement(O._34, {
                        fontSize: O.Q.Size4,
                        color: O.I.Alt
                    }, Object(f.d)("Receive Browser Notifications for this Device", "BrowserPushNotificationsSettings")), g.createElement(O._1, {
                        padding: {
                            top: .5
                        }
                    }, g.createElement(O._34, {
                        fontSize: O.Q.Size5,
                        color: O.I.Alt2
                    }, Object(f.d)("See notifications at the corner of your screen, even when you’re not on Twitch", "BrowserPushNotificationsSettings")))), g.createElement(O._1, {
                        flexShrink: 0
                    }, g.createElement(O.u, {
                        "data-test-selector": "qa-browser-push-notifications-settings-toggle",
                        disabled: this.state.deciding,
                        onClick: this.toggle
                    }, e)))))
                }, t.prototype.updateSubscriptionState = function() {
                    return m.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return m.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, qe.a.hasPushSubscription()];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        hasSubscription: e
                                    }), [2]
                            }
                        })
                    })
                }, t
            }(g.Component),
            Ye = Object(ae.compose)(Object(v.d)("BrowserPushNotificationsSettings"))(Qe),
            Je = (n("iOZM"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.category, t.props.isEnabled)
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return g.createElement(O._24, {
                        className: "platform-notification-settings-toggle",
                        display: O.M.Flex,
                        flexWrap: O.P.NoWrap,
                        alignItems: O.c.Start,
                        background: O.m.Alt,
                        margin: {
                            top: 1,
                            bottom: .5
                        },
                        padding: {
                            right: 5
                        }
                    }, g.createElement(O._1, {
                        className: "platform-notification-settings-toggle__body",
                        display: O.M.Flex,
                        flexDirection: O.O.Column,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, g.createElement(O._1, {
                        margin: {
                            bottom: .5
                        }
                    }, g.createElement(O._34, {
                        fontSize: O.Q.Size4
                    }, this.props.text)), g.createElement(O._34, {
                        fontSize: O.Q.Size5,
                        color: O.I.Alt2
                    }, this.props.description)), g.createElement(O._1, {
                        display: O.M.Flex,
                        margin: {
                            top: .5
                        },
                        flexGrow: 0,
                        flexShrink: 0
                    }, g.createElement(O._1, {
                        margin: {
                            right: 1
                        }
                    }, g.createElement(O._41, {
                        checked: this.props.isEnabled,
                        disabled: this.props.disabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector"
                    })), g.createElement(O._1, {
                        className: this.props.saved ? "platform-notification-settings-toggle__saved" : "platform-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, g.createElement(O._34, {
                        fontSize: O.Q.Size5,
                        color: O.I.Link
                    }, Object(f.d)("Saved", "PlatformNotificationSettingsToggle")))))
                }, t
            }(g.Component)),
            Ke = n("g+dK"),
            $e = (n("RC0U"), n("1f5k"));
        ! function(e) {
            e.onsite = "onsite", e.email = "email", e.push = "push"
        }(K || (K = {}));
        var Xe, Ze = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        collapsed: t.props.startCollapsed,
                        saved: new Set
                    }, t.VisibleSettings = [{
                        category: "LIVE",
                        name: Object(f.d)("Live", "PlatformNotificationSettings"),
                        description: Object(f.d)("When a streamer I follow goes Live", "PlatformNotificationSettings")
                    }, {
                        category: "VIDEOS",
                        name: Object(f.d)("Video Broadcast", "PlatformNotificationSettings"),
                        description: Object(f.d)("When a channel I follow starts a Vodcast. This also includes Video Comment notifications", "PlatformNotificationSettings")
                    }, {
                        category: "CLIPS",
                        name: Object(f.d)("Clips", "PlatformNotificationSettings"),
                        description: Object(f.d)("Receive notifications for clips you made and clips made by your viewers", "PlatformNotificationSettings")
                    }, {
                        category: "EVENTS",
                        name: Object(f.d)("Events", "PlatformNotificationSettings"),
                        description: Object(f.d)("Any time an event I follow starts", "PlatformNotificationSettings")
                    }, {
                        category: "CHAT",
                        name: Object(f.d)("Chat", "PlatformNotificationSettings"),
                        description: Object(f.d)("Any time there’s Rooms activity related to me.", "PlatformNotificationSettings")
                    }, {
                        category: "FRIENDS",
                        name: Object(f.d)("Friends", "PlatformNotificationSettings"),
                        description: Object(f.d)("When a friend sends me a message", "PlatformNotificationSettings")
                    }, {
                        category: "STREAMER",
                        name: Object(f.d)("Your Channel", "PlatformNotificationSettings"),
                        description: Object(f.d)("Receive notifications when viewers follow your channel or auto host you", "PlatformNotificationSettings")
                    }, {
                        category: "MODERATOR",
                        name: Object(f.d)("Moderator", "PlatformNotificationSettings"),
                        description: Object(f.d)("Any time I get a notification as a moderator", "PlatformNotificationSettings")
                    }, {
                        category: "COMMERCE",
                        name: Object(f.d)("Gifts and Rewards", "PlatformNotificationSettings"),
                        description: Object(f.d)("Receive notifications for drops, crates, and subscription gifts", "PlatformNotificationSettings")
                    }], t.toggleAll = function() {
                        t.toggleSettingCategory("ALL", t.getGlobalStateForPlatform())
                    }, t.toggleCollapse = function() {
                        t.setState(function(e) {
                            return {
                                collapsed: !e.collapsed
                            }
                        })
                    }, t.toggleSettingCategory = function(e, n) {
                        return m.__awaiter(t, void 0, void 0, function() {
                            var t, i, r, a, o = this;
                            return m.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setNotificationSetting ? (t = n ? "off" : "on", i = m.__assign({}, Object(He.a)({
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
                                        }, Object(He.d)($e, {}, a), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return g.createElement(O._1, {
                        padding: 1
                    }, g.createElement(O._3, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return g.createElement(b.a, {
                        message: Object(f.d)("Error loading data.", "PlatformNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return g.createElement(O._24, {
                        margin: {
                            top: 1
                        }
                    }, g.createElement(b.a, {
                        message: Object(f.d)("You must be logged in to update your settings.", "PlatformNotificationSettings")
                    }));
                    var e = g.createElement(O._24, {
                        background: O.m.Alt2,
                        borderBottom: !0
                    }, g.createElement(O.Z, {
                        onClick: this.toggleCollapse,
                        alpha: !0
                    }, g.createElement(O._1, {
                        display: O.M.Flex,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, g.createElement(O._1, {
                        className: "platform-notification-settings__header",
                        flexGrow: 0,
                        "data-test-selector": "collapsible-header"
                    }, g.createElement(O._34, {
                        "data-test-selector": "display-name",
                        fontSize: O.Q.Size5,
                        color: O.I.Alt2,
                        bold: !0
                    }, this.props.displayName)), g.createElement(O._1, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, g.createElement(O._34, {
                        fontSize: O.Q.Size5,
                        color: O.I.Alt2
                    }, this.getSettingTurnedOnMessage())), g.createElement(O._1, {
                        className: this.state.collapsed ? "platform-notification-settings--collapse" : "platform-notification-settings--expand",
                        flexGrow: 0,
                        flexShrink: 1,
                        display: O.M.Flex,
                        justifyContent: O._0.Center
                    }, g.createElement(O._14, {
                        asset: O._15.AngleRight,
                        type: O._16.Alt2
                    })))));
                    return this.state.collapsed ? g.createElement(O._24, null, e) : g.createElement(O._24, null, e, g.createElement(O._24, {
                        padding: 2,
                        borderBottom: !0
                    }, g.createElement(O._1, {
                        padding: {
                            bottom: 1
                        }
                    }, g.createElement(O._34, {
                        "data-test-selector": "description",
                        fontSize: O.Q.Size5,
                        color: O.I.Alt2
                    }, this.props.description)), g.createElement(O._24, {
                        display: O.M.Flex,
                        margin: {
                            y: .5
                        },
                        borderBottom: !0
                    }, g.createElement(O._1, {
                        className: "platform-notification-settings__all",
                        display: O.M.Flex,
                        padding: {
                            bottom: 1,
                            right: 5
                        },
                        justifyContent: O._0.Center,
                        flexGrow: 1,
                        flexWrap: O.P.NoWrap
                    }, g.createElement(O._1, {
                        className: "platform-notification-settings__all-body",
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, g.createElement(O._34, {
                        fontSize: O.Q.Size4,
                        color: O.I.Alt,
                        "data-test-selector": "explanation"
                    }, this.props.explanation)), g.createElement(O._1, {
                        display: O.M.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, g.createElement(O._1, {
                        margin: {
                            right: 1
                        }
                    }, g.createElement(O._41, {
                        "data-test-selector": "all-toggle",
                        checked: this.getGlobalStateForPlatform(),
                        onChange: this.toggleAll
                    })), g.createElement(O._1, {
                        padding: {
                            x: 1
                        },
                        "data-test-selector": "saved-selector",
                        className: this.getDisplaySaved("ALL") ? "platform-notification-settings__saved" : "platform-notification-settings__saved--hide"
                    }, g.createElement(O._34, {
                        fontSize: O.Q.Size5,
                        color: O.I.Link
                    }, Object(f.d)("Saved", "PlatformNotificationSettings")))))), g.createElement(O._1, {
                        className: "platform-notification-settings__toggle-container",
                        display: O.M.Flex,
                        flexDirection: O.O.Column,
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
                    return 0 !== t && this.getGlobalStateForPlatform() ? t < e ? Object(f.d)("Some notifications turned on", "PlatformNotificationSettings") : Object(f.d)("All notifications turned on", "PlatformNotificationSettings") : Object(f.d)("All notifications turned off", "PlatformNotificationSettings")
                }, t.prototype.getGlobalStateForPlatform = function() {
                    var e = this.getSettingByCategory("ALL");
                    return !!e && e.isEnabled
                }, t.prototype.renderToggles = function() {
                    for (var e = [], t = 0, n = this.VisibleSettings; t < n.length; t++) {
                        var i = n[t],
                            r = this.getSettingByCategory(i.category);
                        r && e.push(g.createElement(Je, {
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
            }(g.Component),
            et = Object(c.d)(Object(v.d)("PlatformNotificationSettings"), Object(oe.a)($e, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network"
                    }
                }
            }), Object(oe.a)(Ke, {
                name: "setNotificationSetting"
            }))(Ze),
            tt = (n("nq6q"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e = "" !== location.search ? Ae.parse(location.search) : {},
                        t = !!e["open-advanced"] && "true" === e["open-advanced"];
                    return g.createElement(O._24, {
                        className: "notification-settings__body",
                        borderRight: !0,
                        borderLeft: !0,
                        borderTop: !0
                    }, g.createElement(O._24, {
                        background: O.m.Alt,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, g.createElement(O._1, {
                        margin: {
                            bottom: .5
                        }
                    }, g.createElement(O._34, {
                        fontSize: O.Q.Size3,
                        color: O.I.Alt
                    }, Object(f.d)("Notifications", "SettingsNotificationsPage"))), g.createElement(O._1, null, g.createElement(O._34, {
                        fontSize: O.Q.Size5,
                        color: O.I.Alt2
                    }, Object(f.d)("Get the notifications you care about, where you want to see them.", "SettingsNotificationsPage")))), g.createElement(et, {
                        startCollapsed: t,
                        platformName: K.onsite,
                        displayName: Object(f.d)("On Twitch", "SettingsNotificationsPage"),
                        description: Object(f.d)("We'll always keep you informed on important updates to Twitch and your account.", "SettingsNotificationsPage"),
                        explanation: Object(f.d)("Send me notifications on Twitch about", "SettingsNotificationsPage"),
                        key: "onsite",
                        extraSettings: this.renderBrowserPushNotifications()
                    }), g.createElement(et, {
                        startCollapsed: !0,
                        platformName: K.email,
                        displayName: Object(f.d)("By Email", "SettingsNotificationsPage"),
                        description: Object(f.d)("Receive important notifications through email. You may receive additional emails about features and content on Twitch. You can turn off specific emails using the unsubscribe link included in each message.", "SettingsNotificationsPage"),
                        explanation: Object(f.d)("Send me emails about", "SettingsNotificationsPage"),
                        key: "email"
                    }), g.createElement(et, {
                        platformName: K.push,
                        startCollapsed: !0,
                        displayName: Object(f.d)("On Mobile", "SettingsNotificationsPage"),
                        description: Object(f.d)("Get Twitch updates on the go. Receive notifications right on your phone's home screen.", "SettingsNotificationsPage"),
                        explanation: Object(f.d)("Send me push notifications", "SettingsNotificationsPage"),
                        key: "push"
                    }), g.createElement(ze, {
                        startCollapsed: !t
                    }))
                }, t.prototype.renderBrowserPushNotifications = function() {
                    return Object(De.a)() && !Object(Fe.a)() ? g.createElement(Ye, null) : null
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t = m.__decorate([Object(v.d)("SettingsNotificationsPage", {
                    destination: k.a.NotificationSettingsPage
                }), Object(_.a)({
                    location: C.PageviewLocation.SettingsPage
                })], t)
            }(g.Component)),
            nt = n("S1vB"),
            it = n("cumT"),
            rt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: s.NoChanges
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: s.Working
                        }, function() {})
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return f.a.buildType === E.a.Production ? null : this.props.data.currentUser && this.props.data.requestInfo ? this.props.data.currentUser.hasPrime ? g.createElement("div", null, g.createElement(P, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    })) : Object(nt.a)(this.props.data.requestInfo.countryCode) ? (window.location.replace("https://twitch.amazon.com/prime?ref_=sm_w_tsp_p_t"), null) : g.createElement(h.a, {
                        to: "/settings/turbo"
                    }) : null
                }, t = m.__decorate([Object(v.d)("SettingsPrimePage", {
                    autoReportInteractive: !0,
                    destination: k.a.SettingsPrime
                }), Object(_.a)({
                    location: C.PageviewLocation.SettingsPage
                }), Object(oe.a)(it)], t)
            }(g.Component),
            at = function() {
                return g.createElement(b.a, {
                    message: Object(f.d)("Error loading user data. Please try again later.", "SettingsPageError")
                })
            },
            ot = function() {
                return g.createElement(V, {
                    label: Object(f.d)("Disable Your Twitch Account", "DisableAccountLink"),
                    orientation: O.S.Horizontal
                }, Object(f.d)("If you want to disable your Twitch account, you can do so from the <x:link>Disable Account</x:link> page.", {
                    "x:link": function(e) {
                        return g.createElement("a", {
                            key: "disable-account-link",
                            href: "https://www.twitch.tv/user/disable_account",
                            "data-a-target": "disable-account-link"
                        }, e)
                    }
                }, "DisableAccountLink"))
            },
            st = 2e3;
        ! function(e) {
            e[e.InvalidAddress = 0] = "InvalidAddress", e[e.InvalidDomain = 1] = "InvalidDomain"
        }(Xe || (Xe = {}));
        var lt;
        ! function(e) {
            e[e.Error = 0] = "Error", e[e.CanSendVerificationEmail = 1] = "CanSendVerificationEmail", e[e.VerificationEmailSent = 2] = "VerificationEmailSent", e[e.Verified = 3] = "Verified"
        }(lt || (lt = {}));
        var ct, dt = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.onClickVerify = function() {
                    n.setState({
                        status: lt.VerificationEmailSent
                    }, function() {
                        return n.successTimerHandle = setTimeout(function() {
                            return n.setState({
                                status: lt.CanSendVerificationEmail
                            })
                        }, st)
                    })
                }, n.state = {
                    status: t.verified ? lt.Verified : lt.CanSendVerificationEmail
                }, n
            }
            return m.__extends(t, e), t.prototype.componentWillUnmount = function() {
                this.successTimerHandle && clearTimeout(this.successTimerHandle)
            }, t.prototype.render = function() {
                return g.createElement(O._1, {
                    display: O.M.Flex,
                    flexWrap: O.P.NoWrap
                }, g.createElement(V, {
                    error: !!this.props.error,
                    errorMessage: this.props.error ? this.renderEmailError() : void 0,
                    label: Object(f.d)("Email", "EmailSetting")
                }, g.createElement(O.X, {
                    type: O.Y.Email,
                    disabled: this.props.disabled,
                    onChange: this.props.onChange,
                    required: !0,
                    value: this.props.email
                }), g.createElement(L, {
                    text: this.renderVerificationMessage()
                })), g.createElement(O._1, {
                    flexGrow: 0
                }, this.renderVerifyButton()))
            }, t.prototype.renderVerifyButton = function() {
                switch (this.state.status) {
                    case lt.CanSendVerificationEmail:
                        return g.createElement(O.u, {
                            type: O.z.Default,
                            disabled: this.props.dirty,
                            onClick: this.onClickVerify
                        }, Object(f.d)("Verify", "EmailSetting"));
                    case lt.VerificationEmailSent:
                        return g.createElement(O.u, {
                            type: O.z.Success
                        }, Object(f.d)("Email Sent", "EmailSetting"));
                    case lt.Verified:
                    default:
                        return null
                }
            }, t.prototype.renderVerificationMessage = function() {
                switch (this.state.status) {
                    case lt.CanSendVerificationEmail:
                        return Object(f.d)("This email is linked to your account - please take a moment to verify", "EmailSetting");
                    case lt.VerificationEmailSent:
                        return Object(f.d)("Verification email sent!", "EmailSetting");
                    case lt.Verified:
                        return Object(f.d)("This email is linked to your account", "EmailSetting");
                    default:
                        return null
                }
            }, t.prototype.renderEmailError = function() {
                switch (this.props.error) {
                    case Xe.InvalidAddress:
                        return Object(f.d)("Please provide a valid email address", "EmailSetting");
                    case Xe.InvalidDomain:
                        return Object(f.d)("You must use your work email address", "EmailSetting");
                    default:
                        return
                }
            }, t
        }(g.Component);
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.Eligible = 2] = "Eligible", e[e.NotEligible = 3] = "NotEligible"
        }(ct || (ct = {}));
        var ut, pt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        status: ct.Loading,
                        daysRemaining: 0
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentWillMount = function() {
                    this.props.emailVerified && this.fetchChangeEligibility()
                }, t.prototype.render = function() {
                    return g.createElement(O._1, {
                        display: O.M.Flex,
                        flexWrap: O.P.NoWrap
                    }, g.createElement(V, {
                        label: Object(f.d)("Username", "UsernameSetting")
                    }, g.createElement(O.X, {
                        type: O.Y.Text,
                        disabled: !0,
                        value: this.props.login
                    }), g.createElement(L, {
                        text: this.renderChangeEligibilityMessage()
                    })), g.createElement(O._1, {
                        flexGrow: 0
                    }, this.state.status === ct.Eligible && g.createElement(O.v, {
                        ariaLabel: Object(f.d)("Edit Username", "UsernameSetting"),
                        icon: O._15.Edit,
                        linkTo: "https://www.twitch.tv/logins/new"
                    })))
                }, t.prototype.renderChangeEligibilityMessage = function() {
                    if (!this.props.emailVerified) return Object(f.d)("You must have a verified email to update your username", "UsernameSetting");
                    switch (this.state.status) {
                        case ct.Loading:
                            return Object(f.d)("Loading username change eligibility...", "UsernameSetting");
                        case ct.Error:
                            return Object(f.d)("You are unable to update your username at this time", "UsernameSetting");
                        case ct.Eligible:
                            return Object(f.d)("You may update your username", "UsernameSetting");
                        case ct.NotEligible:
                            return Object(f.d)("{daysRemaining, plural, one {You may update your username again in # day} other {You may update your username again in # days}}", {
                                daysRemaining: this.state.daysRemaining
                            }, "UsernameSetting");
                        default:
                            return null
                    }
                }, t.prototype.fetchChangeEligibility = function() {
                    var e = this;
                    setTimeout(function() {
                        return e.setState({
                            status: ct.Eligible
                        })
                    }, 1e3)
                }, t
            }(g.Component),
            mt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return g.createElement("div", null, g.createElement(dt, {
                        disabled: this.props.controlsDisabled,
                        dirty: this.props.emailDirty,
                        email: this.props.email,
                        error: this.props.emailError,
                        login: this.props.login,
                        onChange: this.props.onEmailChange,
                        verified: this.props.emailVerified
                    }), g.createElement(pt, {
                        emailVerified: this.props.emailVerified,
                        login: this.props.login
                    }), g.createElement(V, {
                        error: !!this.props.displayNameError,
                        errorMessage: this.props.displayNameError ? this.renderDisplayNameError() : void 0,
                        label: Object(f.d)("Display Name", "ProfileAccountInfo")
                    }, g.createElement(O.X, {
                        "data-test-selector": "displayname-input",
                        type: O.Y.Text,
                        disabled: this.props.controlsDisabled,
                        onChange: this.props.onDisplayNameChange,
                        value: this.props.displayName
                    }), g.createElement(L, {
                        text: this.renderDisplayNameDescription()
                    })), g.createElement(V, {
                        label: Object(f.d)("Bio", "ProfileAccountInfo")
                    }, g.createElement(O._36, {
                        disabled: this.props.controlsDisabled,
                        onChange: this.props.onBioChange,
                        maxLength: 300,
                        noResize: !0,
                        value: this.props.bio
                    }), g.createElement(L, {
                        text: Object(f.d)("Who you are in fewer than 300 characters", "ProfileAccountInfo") + (this.props.bio.length > 250 ? Object(f.d)("{chars, plural, one { (# character remaining)} other { (# characters remaining)}}", {
                            chars: 300 - this.props.bio.length
                        }, "ProfileAccountInfo") : "")
                    })))
                }, t.prototype.renderDisplayNameDescription = function() {
                    return this.userHasCJKLanguageSet() ? Object(f.d)("Customize the capitalization of your display name or change it to contain English characters! Setting an English display name is a permanent change — requests to undo it will not be honored! Display names that do not adhere to Twitch Rules of Conduct may result in an indefinite suspension of your account.", "ProfleAccountInfo") : Object(f.d)("Customize capitalization for your username", "ProfileAccountInfo")
                }, t.prototype.renderDisplayNameError = function() {
                    return Object(f.d)("You may not change your display name, only the capitalization of it", "ProfileAccountInfo")
                }, t.prototype.userHasCJKLanguageSet = function() {
                    var e = this.props.language;
                    return ["ko", "ja", "zh", "zh-cn", "zh-tw", "zh-hk"].includes(e)
                }, t
            }(g.Component),
            gt = n("E9Qg"),
            ht = n.n(gt),
            ft = n("tL94"),
            bt = (n("i1sU"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t.props.data && t.props.data.currentUser;
                        e && t.props.showModal(Oe.a, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            imageType: Ne.a.ProfileBanner,
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
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.shouldReportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.shouldReportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.data,
                        t = e && e.currentUser;
                    if (!e.loading && !t) return g.createElement(O._34, {
                        type: O._39.Span,
                        color: O.I.Error
                    }, Object(f.d)("Sorry, something went wrong. Please try again later.", "ProfileBannerSetting"));
                    var n = Object(f.d)("Profile Banner", "ProfileBannerSetting"),
                        i = null;
                    return i = e.loading ? g.createElement(O._7, {
                        "data-test-selector": "profile-banner__placeholder",
                        height: 140,
                        width: 440
                    }) : t && t.bannerImageURL ? g.createElement(v.b, {
                        src: t.bannerImageURL,
                        alt: n,
                        className: "profile-banner-setting__current-image"
                    }) : g.createElement("div", {
                        className: "profile-banner-setting__current-image profile-banner-setting__current-image--default",
                        style: {
                            backgroundImage: "url(" + ht.a + ")"
                        }
                    }), g.createElement(O._1, {
                        className: "profile-banner-setting",
                        margin: {
                            bottom: 4
                        }
                    }, g.createElement(O._1, {
                        display: O.M.Flex,
                        flexDirection: O.O.Row
                    }, g.createElement(O._1, {
                        margin: {
                            right: 2
                        }
                    }, i), g.createElement(O._1, {
                        margin: {
                            y: "auto"
                        }
                    }, g.createElement(O.u, {
                        ariaLabel: Object(f.d)("Update Profile Banner", "ProfileBannerSetting"),
                        onClick: this.openModal,
                        "data-test-selector": "profile-banner-upload-button"
                    }, g.createElement(O._1, {
                        padding: {
                            x: 1
                        }
                    }, Object(f.d)("Update", "ProfileBannerSetting"))), g.createElement(L, {
                        text: Object(f.d)("File format: JPEG, PNG, GIF (recommended 1200x380, max 10MB)", "ProfileBannerSetting")
                    }))))
                }, t
            }(g.Component)),
            vt = Object(ae.compose)(Object(v.d)("ProfileBannerSetting"), Object(oe.a)(ft))(bt),
            St = Object(l.b)(null, function(e) {
                return Object(c.b)({
                    showModal: we.d
                }, e)
            })(vt),
            yt = n("x9n8"),
            _t = n("goep"),
            Et = (n("eppJ"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function() {
                        var e = t.props.data && t.props.data.currentUser;
                        e && t.props.showModal(yt.a, {
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
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(1)
                }, t.prototype.render = function() {
                    var e = this.props.data && this.props.data.currentUser,
                        t = g.createElement(O._7, {
                            height: 140,
                            width: 140
                        });
                    return e && e.profileImageURL && (t = g.createElement(v.b, {
                        src: e.profileImageURL,
                        alt: Object(f.d)("Profile Picture", "ProfileImageSetting"),
                        className: "profile-image-setting__current-image"
                    })), g.createElement(O._1, {
                        className: "profile-image-setting",
                        margin: {
                            bottom: 4
                        }
                    }, g.createElement(O._1, {
                        display: O.M.Flex,
                        flexDirection: O.O.Row
                    }, g.createElement(O._1, {
                        margin: {
                            right: 2
                        }
                    }, t), g.createElement(O._1, {
                        margin: {
                            y: "auto"
                        }
                    }, g.createElement(O.u, {
                        ariaLabel: Object(f.d)("Update Profile Picture", "ProfileImageSetting"),
                        onClick: this.openModal,
                        "data-test-selector": "profile-image-upload-button"
                    }, g.createElement(O._1, {
                        padding: {
                            x: 1
                        }
                    }, Object(f.d)("Update", "ProfileImageSetting"))), g.createElement(L, {
                        text: Object(f.d)("File format: JPEG, PNG, GIF (max size 256x256, 10MB)", "ProfileImageSetting")
                    }))))
                }, t
            }(g.Component)),
            kt = Object(ae.compose)(Object(v.d)("ProfileImageSetting"), Object(oe.a)(_t))(Et),
            Ct = Object(l.b)(null, function(e) {
                return Object(c.b)({
                    showModal: we.d
                }, e)
            })(kt),
            wt = n("OA9H"),
            Ot = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: s.Working,
                        displayNameError: !1
                    }, t.logger = f.i.withCategory("settings-profile-page"), t.onClickSave = function() {
                        t.setState({
                            saveStatus: s.Working
                        }, function() {
                            t.logger.warn("Submitting", t.buildRequestBody())
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
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    !this.props.data.loading && this.props.data.currentUser && this.hydrateState(this.props)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.data.loading && !e.data.loading && e.data.currentUser && this.hydrateState(e)
                }, t.prototype.render = function() {
                    return f.a.buildType === E.a.Production ? null : this.props.data.currentUser ? g.createElement("div", null, g.createElement(r, {
                        title: Object(f.d)("Profile Picture", "SettingsProfilePage")
                    }), g.createElement(Ct, null), g.createElement(r, {
                        title: Object(f.d)("Profile Banner", "SettingsProfilePage")
                    }), g.createElement(St, null), g.createElement(r, {
                        title: Object(f.d)("Profile Settings", "SettingsProfilePage"),
                        description: Object(f.d)("Change identifying details for your account", "SettingsProfilePage")
                    }), g.createElement(mt, {
                        bio: this.state.bio || "",
                        controlsDisabled: this.state.saveStatus === s.Working,
                        displayName: this.state.displayName || "",
                        displayNameError: this.state.displayNameError,
                        email: this.state.email || "",
                        emailDirty: this.state.email !== this.props.data.currentUser.email,
                        emailVerified: this.props.data.currentUser.isEmailVerified,
                        language: this.props.data.currentUser.language,
                        login: this.props.data.currentUser.login || "",
                        onBioChange: this.onBioChange,
                        onDisplayNameChange: this.onDisplayNameChange,
                        onEmailChange: this.onEmailChange
                    }), g.createElement(r, {
                        title: Object(f.d)("Disabling Your Twitch Account", "SettingsProfilePage"),
                        description: Object(f.d)("Completely deactivate your account", "SettingsProfilePage")
                    }), g.createElement(ot, null), g.createElement(P, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    })) : this.props.data.loading ? g.createElement(O._3, {
                        fillContent: !0
                    }) : g.createElement(at, null)
                }, t.prototype.hydrateState = function(e) {
                    e.data.currentUser && this.setState({
                        bio: e.data.currentUser.description,
                        displayName: e.data.currentUser.displayName,
                        email: e.data.currentUser.email,
                        saveStatus: s.NoChanges
                    })
                }, t.prototype.buildRequestBody = function() {
                    return {
                        description: this.state.bio,
                        displayName: this.state.displayName,
                        email: this.state.email
                    }
                }, t.prototype.checkForDirtyState = function() {
                    if (!this.props.data.currentUser) return !1;
                    var e = this.state.bio !== this.props.data.currentUser.description || this.state.email !== this.props.data.currentUser.email || this.state.displayName !== this.props.data.currentUser.displayName;
                    this.setState({
                        saveStatus: e ? s.DirtyChanges : s.NoChanges
                    })
                }, t
            }(g.Component),
            Nt = Object(ae.compose)(Object(oe.a)(wt), Object(v.d)("SettingsProfilePage", {
                autoReportInteractive: !0,
                destination: k.a.SettingsProfile
            }), Object(_.a)({
                location: C.PageviewLocation.SettingsPage
            }))(Ot),
            Pt = "/v5/whispers/settings",
            Ut = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        loading: !0,
                        updating: !1
                    }, t.onToggle = function(e) {
                        return m.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return m.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            updating: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, U.a.post(Pt, {
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
                return m.__extends(t, e), t.prototype.componentWillMount = function() {
                    return m.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return m.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, U.a.get(Pt)];
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
                    return g.createElement(Y, {
                        id: "settings-security-page-block-whispers",
                        label: Object(f.d)("Block Whispers from Stangers", "SettingsSecurityPage"),
                        description: Object(f.d)("Block whispers from people you don't follow", "SettingsSecurityPage"),
                        checked: this.state.enabled,
                        disabled: this.state.updating,
                        error: this.state.error,
                        onChange: this.onToggle
                    })
                }, t
            }(g.Component),
            jt = n("NoSW"),
            xt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return g.createElement(V, {
                        label: Object(f.d)("Two-Factor Authentication", "TwoFactorAuthenticationSetting"),
                        orientation: O.S.Horizontal,
                        error: this.props.status === ut.Error,
                        errorMessage: Object(f.d)("Sorry, something went wrong. Please try again later.", "TwoFactorAuthenticationSetting")
                    }, this.renderBody())
                }, t.prototype.renderBody = function() {
                    switch (this.props.status) {
                        case ut.Loading:
                            return this.renderLoading();
                        case ut.Error:
                            return this.renderError();
                        case ut.UnverifiedEmail:
                            return this.renderVerifyEmail();
                        case ut.CanEnable:
                            return this.renderEnableButton();
                        case ut.Enabled:
                            return this.renderDisableButton();
                        case ut.EnabledAndRequired:
                            return this.renderEnabledAndRequired();
                        default:
                            return null
                    }
                }, t.prototype.renderLoading = function() {
                    return g.createElement(O._7, null)
                }, t.prototype.renderError = function() {
                    return null
                }, t.prototype.renderVerifyEmail = function() {
                    return g.createElement(O._1, null, g.createElement(O._34, {
                        "data-a-target": "tfa-verify-email"
                    }, Object(f.d)("Just verify your email address and two-factor authentication can be enabled.", "TwoFactorAuthenticationSetting")))
                }, t.prototype.renderEnableButton = function() {
                    return g.createElement(O._1, null, g.createElement(O.u, {
                        linkTo: "https://passport.twitch.tv/register_2fa/new",
                        "data-a-target": "tfa-enable-button"
                    }, Object(f.d)("Set Up Two-Factor Authentication", "TwoFactorAuthenticationSetting")), g.createElement(L, {
                        dataTarget: "tfa-pitch-message",
                        text: Object(f.d)("It's dangerous to go alone. <x:link>Two-factor authentication</x:link> adds an extra layer of security to your Twitch account by requiring both a password and your mobile phone to login.", {
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
                    return g.createElement(O._1, null, g.createElement(O.u, {
                        linkTo: "https://passport.twitch.tv/disable_2fa/new",
                        "data-a-target": "tfa-disable-button"
                    }, Object(f.d)("Disable two-factor authentication", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                }, t.prototype.renderEnabledAndRequired = function() {
                    return g.createElement(O._1, null, g.createElement(O._34, {
                        "data-a-target": "tfa-required-message"
                    }, Object(f.d)("You must have two-factor authentication enabled.", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                }, t.prototype.renderEnabledMessage = function() {
                    return g.createElement(L, {
                        dataTarget: "tfa-successful-message",
                        text: Object(f.d)("Woohoo! Two-factor authentication is enabled! To reset or change your phone, visit the Authy <x:link>phone reset form</x:link>.", {
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
            Tt = n("Q6se");
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.UnverifiedEmail = 2] = "UnverifiedEmail", e[e.CanEnable = 3] = "CanEnable", e[e.Enabled = 4] = "Enabled", e[e.EnabledAndRequired = 5] = "EnabledAndRequired"
        }(ut || (ut = {}));
        var It, At = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        status: ut.Loading,
                        restLoading: !0,
                        restError: !1
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTwoFactorEnabled()
                }, t.prototype.componentDidUpdate = function(e, t) {
                    t.status === ut.Loading && this.state.status !== ut.Loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.status !== ut.Loading || e.data.loading || this.reconcileStatus(e)
                }, t.prototype.render = function() {
                    return g.createElement(xt, {
                        status: this.state.status
                    })
                }, t.prototype.fetchTwoFactorEnabled = function() {
                    return m.__awaiter(this, void 0, void 0, function() {
                        var e, t, n = this;
                        return m.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    e = "/api/users/auth_validator?check_2fa=true&onsite=1", i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, U.a.get(e, {
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
                    e.data.loading || this.state.restLoading ? t = ut.Loading : !e.data.currentUser || this.state.restError ? t = ut.Error : this.state.twoFactorEnabled || e.data.currentUser.isEmailVerified ? !this.state.twoFactorEnabled && e.data.currentUser.isEmailVerified ? t = ut.CanEnable : this.state.twoFactorEnabled && !this.userRoleRequiresTwoFactor(e) ? t = ut.Enabled : this.state.twoFactorEnabled && this.userRoleRequiresTwoFactor(e) && (t = ut.EnabledAndRequired) : t = ut.UnverifiedEmail, t && this.setState({
                        status: t
                    })
                }, t.prototype.userRoleRequiresTwoFactor = function(e) {
                    var t = e.data.currentUser && e.data.currentUser.roles;
                    return !(!t || !(t.isGlobalMod || t.isSiteAdmin || t.isStaff))
                }, t
            }(g.Component),
            Dt = Object(ae.compose)(Object(jt.a)("TwoFactorAuthenticationSetting"), Object(oe.a)(Tt))(At),
            Ft = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return f.a.buildType === E.a.Production ? null : g.createElement("div", null, g.createElement(r, {
                        title: Object(f.d)("Security", "SettingsSecurityPage"),
                        description: Object(f.d)("Keep your account safe and sound", "SettingsSecurityPage")
                    }), g.createElement(o, null), g.createElement(Dt, null), g.createElement(r, {
                        title: Object(f.d)("Privacy", "SettingsSecurityPage"),
                        description: Object(f.d)("Choose who can message you", "SettingsSecurityPage")
                    }), g.createElement(Ut, null))
                }, t
            }(g.Component),
            Ht = Object(ae.compose)(Object(v.d)("SettingsSecurityPage", {
                autoReportInteractive: !0,
                destination: k.a.SettingsSecurity
            }), Object(_.a)({
                location: C.PageviewLocation.SettingsPage
            }))(Ft),
            Rt = n("CkX/");
        ! function(e) {
            e.Channel = "channel", e.Notifications = "notifications", e.Profile = "profile", e.Security = "security", e.Connections = "connections", e.Prime = "prime", e.Turbo = "turbo"
        }(It || (It = {}));
        var Mt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isPrimeVisible = function() {
                        return t.props.data.requestInfo && t.props.data.currentUser && (Object(nt.a)(t.props.data.requestInfo.countryCode) || t.props.data.currentUser.hasPrime)
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data.currentUser || !this.props.data.requestInfo) return null;
                    var e = null;
                    this.isPrimeVisible() && (e = g.createElement(O._25, {
                        linkTo: "/settings/prime",
                        active: this.props.tabName === It.Prime,
                        "data-test-selector": "test-settings-prime-tab",
                        "data-a-target": "prime-tab"
                    }, Object(f.d)("Twitch Prime", "SettingsTabs")));
                    var t = null;
                    return !this.props.data.currentUser.hasTurbo && this.isPrimeVisible() || (t = g.createElement(O._25, {
                        linkTo: "/settings/turbo",
                        active: this.props.tabName === It.Turbo,
                        "data-test-selector": "test-settings-turbo-tab",
                        "data-a-target": "turbo-tab"
                    }, Object(f.d)("Twitch Turbo", "SettingsTabs"))), g.createElement(O._1, {
                        className: "settings-tabs",
                        padding: {
                            x: zt,
                            top: zt
                        }
                    }, g.createElement(O._1, {
                        margin: {
                            bottom: 1
                        }
                    }, g.createElement(O._34, {
                        type: O._39.H2
                    }, Object(f.d)("Settings", "SettingsTabs"))), g.createElement(O._1, null, g.createElement(O._26, null, g.createElement(O._25, {
                        linkTo: "/settings/profile",
                        active: this.props.tabName === It.Profile,
                        "data-a-target": "profile-tab"
                    }, Object(f.d)("Profile", "SettingsTabs")), e, t, g.createElement(O._25, {
                        linkTo: "/settings/channel",
                        active: this.props.tabName === It.Channel,
                        "data-a-target": "channel-tab"
                    }, Object(f.d)("Channel and Videos", "SettingsTabs")), g.createElement(O._25, {
                        linkTo: "/settings/security",
                        active: this.props.tabName === It.Security,
                        "data-a-target": "security-tab"
                    }, Object(f.d)("Security and Privacy", "SettingsTabs")), g.createElement(O._25, {
                        linkTo: "/settings/notifications",
                        active: this.props.tabName === It.Notifications,
                        "data-a-target": "notifications-tab"
                    }, Object(f.d)("Notifications", "SettingsTab")), g.createElement(O._25, {
                        linkTo: "/settings/connections",
                        active: this.props.tabName === It.Connections,
                        "data-a-target": "connections-tab"
                    }, Object(f.d)("Connections", "SettingsTabs")), g.createElement(O._25, {
                        linkTo: "/subscriptions",
                        active: !1,
                        "data-a-target": "subscriptions-tab"
                    }, Object(f.d)("Subscriptions", "SettingsTabs")))))
                }, t
            }(g.Component),
            Lt = Object(ae.compose)(Object(v.d)("SettingsTabs"), Object(oe.a)(Rt))(Mt),
            Vt = n("hRPz"),
            Bt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: s.NoChanges
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: s.Working
                        }, function() {})
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return f.a.buildType === E.a.Production ? null : this.props.data.loading && !this.props.data.currentUser ? g.createElement(O._3, {
                        fillContent: !0
                    }) : this.props.data.loading || this.props.data.currentUser ? this.props.data.currentUser && !this.props.data.currentUser.hasTurbo ? this.props.data.currentUser.hasPrime || Object(nt.a)(this.props.data.requestInfo.countryCode) ? g.createElement(h.a, {
                        to: "/settings/prime"
                    }) : (window.location.replace("https://www.twitch.tv/products/turbo/ticket"), null) : g.createElement("div", null, g.createElement(P, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    })) : g.createElement(at, null)
                }, t = m.__decorate([Object(v.d)("SettingsTurboPage", {
                    autoReportInteractive: !0,
                    destination: k.a.SettingsTurbo
                }), Object(_.a)({
                    location: C.PageviewLocation.SettingsPage
                }), Object(oe.a)(Vt)], t)
            }(g.Component),
            zt = 3,
            qt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.redirectToProfilePage = function() {
                        return g.createElement(h.a, {
                            to: "/settings/profile"
                        })
                    }, t
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return this.props.isLoggedIn ? g.createElement(O._1, {
                        padding: {
                            x: zt
                        },
                        fullHeight: !0,
                        fullWidth: !0,
                        display: O.M.Flex,
                        flexDirection: O.O.Column,
                        flexWrap: O.P.NoWrap
                    }, g.createElement(S.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), g.createElement(y.a, null, g.createElement(Lt, {
                        tabName: this.props.match.params.tab
                    })), g.createElement(O._1, {
                        padding: {
                            y: 2
                        }
                    }, g.createElement(h.d, null, g.createElement(h.b, {
                        path: "/settings/profile",
                        component: Nt
                    }), g.createElement(h.b, {
                        path: "/settings/prime",
                        component: rt
                    }), g.createElement(h.b, {
                        path: "/settings/turbo",
                        component: Bt
                    }), g.createElement(h.b, {
                        path: "/settings/channel",
                        component: Te
                    }), g.createElement(h.b, {
                        path: "/settings/security",
                        component: Ht
                    }), g.createElement(h.b, {
                        path: "/settings/notifications",
                        component: tt
                    }), g.createElement(h.b, {
                        path: "/settings/connections",
                        component: Ie
                    }), g.createElement(h.b, {
                        path: "/settings",
                        render: this.redirectToProfilePage
                    })))) : (this.props.login(), g.createElement(b.a, {
                        message: Object(f.d)("You must be logged in to view this page", "SettingsRoot")
                    }))
                }, t = m.__decorate([Object(v.d)("SettingsRoot", {
                    autoReportInteractive: !0
                })], t)
            }(g.Component),
            Wt = Object(h.e)(qt),
            Gt = Object(l.b)(function(e) {
                return {
                    isLoggedIn: Object(p.d)(e)
                }
            }, function(e) {
                return Object(c.b)({
                    login: function() {
                        return Object(u.f)(d.a.SettingsPage)
                    }
                }, e)
            })(Wt);
        n.d(t, "SettingsRoot", function() {
            return Gt
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
                                    value: "language"
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
                end: 109
            }
        };
        n.loc.source = {
            body: "query SettingsProfilePage {\ncurrentUser {\nid\ndescription\ndisplayName\nemail\nisEmailVerified\nlanguage\nlogin\n}\n}",
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
            if (h) return h;
            var e = g.register({
                scope: "/"
            });
            return h = e || Promise.reject(new Error("service worker runtime not available"))
        }
        var r, a = n("TToO"),
            o = n("6sO2"),
            s = n("oIkB"),
            l = n("Aj/L");
        ! function(e) {
            e.NewSession = "new-session", e.ClearSession = "clear-session"
        }(r || (r = {}));
        var c = o.n.logger.withCategory("host-service-worker-messenger"),
            d = function() {
                function e() {}
                return e.syncSession = function() {
                    var e = Object(l.c)(o.n.store.getState());
                    if (e) {
                        var t = e.id;
                        this.sendMessage({
                            type: r.NewSession,
                            userId: t
                        })
                    } else this.sendMessage({
                        type: r.ClearSession
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
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, r;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return Object(m.a)() ? (v.debug("permissions have been denied. nothing to do here."), [2]) : [4, i()];
                                case 1:
                                    return a.sent(), e = Object(l.d)(o.n.store.getState()), [4, this.hasPushSubscription()];
                                case 2:
                                    return t = a.sent(), d.syncSession(), t ? (n = p.exists() && !p.isEnabled(), r = !e, n || r ? [4, this.unsubscribe()] : [3, 4]) : [3, 5];
                                case 3:
                                    a.sent(), a.label = 4;
                                case 4:
                                    return [3, 7];
                                case 5:
                                    return l.d ? !Object(m.b)() || p.exists() && !p.isEnabled() ? [3, 7] : [4, this.subscribe()] : [3, 7];
                                case 6:
                                    a.sent(), a.label = 7;
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, e.userSubscribe = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return p.setEnabled(), [4, this.subscribe()];
                                case 1:
                                    return t.sent(), Object(f.c)({
                                        allowed: Object(m.b)(),
                                        context: e
                                    }), [2]
                            }
                        })
                    })
                }, e.userUnsubscribe = function(e) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(t) {
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
                    return a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.getPushSubscription()];
                                case 1:
                                    return [2, null !== e.sent()]
                            }
                        })
                    })
                }, e.subscribe = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, r, c, d;
                        return a.__generator(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    if (Object(m.a)()) throw new Error("notification permission is denied");
                                    if (!Object(l.d)(o.n.store.getState())) throw new Error("cannot be enabled logged out");
                                    if (!(e = o.b.get("notification_app_server_public_key", ""))) throw new Error("application server public key is blank");
                                    return [4, i()];
                                case 1:
                                    return t = u.sent(), [4, this.getPushSubscription()];
                                case 2:
                                    return (n = u.sent()) ? [3, 4] : (r = function(e) {
                                        for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), n = atob(t), i = new Uint8Array(n.length), r = 0; r < n.length; ++r) i[r] = n.charCodeAt(r);
                                        return i
                                    }(e), [4, t.pushManager.subscribe({
                                        userVisibleOnly: !0,
                                        applicationServerKey: r
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
                                    }), [4, o.n.apollo.client.mutate(a.__assign({
                                        mutation: b
                                    }, d))];
                                case 5:
                                    return u.sent(), [2]
                            }
                        })
                    })
                }, e.unsubscribe = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return a.__generator(this, function(t) {
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
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return a.__generator(this, function(n) {
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
                var o;
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
                            return o = i.sent(), [2, o.json()]
                    }
                })
            })
        };
        var i = n("TToO"),
            r = n("6sO2"),
            a = n("J92i")
    },
    WYUS: function(e, t) {},
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
            r = n("2KeS"),
            a = n("V5M+"),
            o = n("Aj/L"),
            s = n("TToO"),
            l = n("U7vG"),
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
            _ = ["image/*"],
            E = function(e) {
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
                                                return this.unsubscribe = c.j.subscribe({
                                                    topic: Object(m.g)(this.props.userID),
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
                    if (this.state.loading) n = l.createElement(S._1, {
                        className: "user-image-uploader__upload-svg--anim-fill",
                        position: S._8.Relative,
                        "data-test-selector": "loading-status"
                    }, l.createElement(S._14, {
                        asset: S._15.Upload,
                        type: S._16.Brand,
                        width: 99,
                        height: 76
                    }));
                    else {
                        var i = Object(c.d)("Recommended image size: 1200x380 and less than 10MB.", "UserImageUploader");
                        this.props.imageType === g.a.ChannelOfflineImage && (i = Object(c.d)("Recommended image size: 1920x1080 and less than 10MB.", "UserImageUploader")), n = l.createElement(S._1, null, l.createElement(S._1, {
                            className: "user-image-uploader__upload-info"
                        }, l.createElement(S._1, null, l.createElement(S._14, {
                            asset: S._15.Plus,
                            type: S._16.Alt2,
                            height: 20,
                            width: 20
                        })), l.createElement(S._34, {
                            type: S._39.H3,
                            color: S.I.Alt2,
                            fontSize: S.Q.Size4
                        }, Object(c.d)("Upload a Photo", "User Image Uploader"))), l.createElement(S._1, {
                            className: "user-image-uploader__upload-recommendation",
                            position: S._8.Absolute,
                            textAlign: S._35.Left,
                            attachLeft: !0,
                            attachBottom: !0,
                            margin: {
                                left: 3,
                                bottom: 1
                            }
                        }, l.createElement(S._34, {
                            type: S._39.H6,
                            color: S.I.Alt2,
                            fontSize: S.Q.Size8,
                            align: S._49.TextBottom
                        }, i)))
                    }
                    var r = null;
                    this.props.showCloser && (r = l.createElement(u.a, null));
                    var a = null;
                    if (null !== this.state.statusMessage) {
                        var o = Object(b.c)(this.state.statusMessage);
                        a = l.createElement(S._5, {
                            label: o.message,
                            type: o.type
                        })
                    }
                    return l.createElement(S._1, {
                        className: "user-image-uploader",
                        position: S._8.Relative,
                        fullHeight: !0
                    }, l.createElement(S._24, {
                        className: "user-image-uploader__background-container",
                        background: S.m.Base,
                        fullWidth: !0
                    }, l.createElement(S._1, {
                        padding: 2,
                        display: S.M.InlineBlock,
                        position: S._8.Relative,
                        textAlign: S._35.Center,
                        fullWidth: !0
                    }, l.createElement(S._24, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        }
                    }, l.createElement(S._34, {
                        type: S._39.H3,
                        fontSize: S.Q.Size4
                    }, t)), l.createElement(S._1, {
                        className: "user-image-uploader__upload-container",
                        display: S.M.InlineBlock,
                        position: S._8.Relative,
                        textAlign: S._35.Center,
                        margin: {
                            bottom: 1
                        }
                    }, l.createElement(S._1, {
                        className: "user-image-uploader__upload",
                        display: S.M.InlineBlock,
                        position: S._8.Relative,
                        textAlign: S._35.Center
                    }, l.createElement(d.a, {
                        allowedFileTypes: _,
                        onFilesSubmitted: this.onImageInputChange
                    }, n))), l.createElement(S._24, {
                        "data-test-selector": "status-message",
                        fontSize: S.Q.Size4,
                        position: S._8.Relative,
                        textAlign: S._35.Center,
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
            k = Object(v.d)("User Image Upload")(E),
            C = Object(i.b)(function(e) {
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
            return C
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
        var r = n("TToO"),
            a = n("OAwv"),
            o = n("U7vG"),
            s = n("F8kA"),
            l = n("6sO2");
        n.d(t, "a", function() {
            return i
        })
    },
    kqTE: function(e, t, n) {
        "use strict";
        var i = n("U7vG"),
            r = function(e) {
                var t = i.Children.only(e.children);
                return i.cloneElement(t, {
                    "data-selectable": !0,
                    tabIndex: -1
                })
            };
        n.d(t, "a", function() {
            return r
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
            r = n("2KeS"),
            a = n("V5M+"),
            o = n("Aj/L"),
            s = n("J92i"),
            l = Object(i.b)(function(e) {
                return {
                    authToken: Object(o.a)(e)
                }
            }, function(e, t) {
                return Object(r.b)({
                    closeModal: function() {
                        return t.successCallback && t.successCallback(), Object(a.c)()
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
                        message: Object(r.d)("Success!", "Profile Edit"),
                        type: a._6.Success
                    };
                case o.UnexpectedError:
                    return {
                        message: Object(r.d)("Unexpected error, please try again.", "Profile Edit"),
                        type: a._6.Alert
                    };
                case o.BadSizeError:
                    return {
                        message: Object(r.d)("Image might exceed 10MB.", "Profile Edit"),
                        type: a._6.Alert
                    };
                case o.NonImageError:
                    return {
                        message: Object(r.d)("You must upload an image.", "Profile Edit"),
                        type: a._6.Alert
                    };
                case o.WrongFormatError:
                    return {
                        message: Object(r.d)("You must select a valid image type.", "Profile Edit"),
                        type: a._6.Alert
                    };
                case o.TimeoutError:
                    return {
                        message: Object(r.d)("Upload timed-out. Please try again.", "Profile Edit"),
                        type: a._6.Alert
                    };
                case o.Uploading:
                    return {
                        message: Object(r.d)("Uploading....", "Profile Edit"),
                        type: a._6.Brand
                    };
                case o.ImageNotSelected:
                    return {
                        message: Object(r.d)("Select a image first.", "Profile Edit"),
                        type: a._6.Alert
                    };
                default:
                    return {
                        message: Object(r.d)("Please try again.", "Profile Edit"),
                        type: a._6.Alert
                    }
            }
        };
        var i, r = n("6sO2"),
            a = n("Odds");
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
//# sourceMappingURL=pages.settings-964baef0054654ca88254d9a9f6fbe16.js.map