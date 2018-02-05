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
                return r.createElement(s.W, {
                    display: s.I.Flex,
                    flexDirection: s.K.Column,
                    justifyContent: s.V.Center,
                    alignItems: s.c.Center,
                    flexGrow: 1,
                    fullHeight: !0,
                    padding: {
                        y: 1
                    },
                    zIndex: s._41.Above
                }, r.createElement(s._20, {
                    color: s.F.Alt2,
                    textAlign: s._25.Center,
                    flexShrink: 1
                }, r.createElement(s._11, {
                    asset: s._12.DeadGlitch,
                    width: 46,
                    height: 48
                })), r.createElement(s.R, {
                    margin: {
                        top: 1
                    },
                    textAlign: s._25.Center
                }, r.createElement(s._24, {
                    type: s._29.H4,
                    "data-test-selector": "search-error-message"
                }, Object(o.d)("Search is not available at this time", "DropdownSearchError"))), r.createElement(s._24, {
                    type: s._29.P
                }, Object(o.d)("Please try again later", "DropdownSearchError")))
            },
            c = n("6BvN"),
            u = function(e) {
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
                    }, r.createElement(s._14, {
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
            return u
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
                        e.preventDefault(), t.finalizeSelections(e.target.files)
                    }, t.onFileDrop = function(e) {
                        e.preventDefault(), t.setState({
                            isDraggingOver: !1
                        }), t.finalizeSelections(e.dataTransfer.files)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(a.J, {
                        dragOver: this.state.isDraggingOver,
                        error: this.props.error
                    }, r.createElement(a.R, {
                        position: a._5.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullWidth: !0,
                        fullHeight: !0,
                        zIndex: a._41.Above
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
            u = n("HZww"),
            d = n("Odds"),
            p = (n("weaG"), function(e) {
                var t = {
                    "default-avatar__selected": e.selected,
                    "default-avatar": !0
                };
                return a.createElement(d.W, {
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
                }, a.createElement(d._20, {
                    fullHeight: !0,
                    fullWidth: !0,
                    position: d._5.Relative,
                    className: r(t)
                }, a.createElement("img", {
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
            return k
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
                            var i = Object(m.a)(n),
                                r = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(r, 10) > 10 ? t.setState({
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
                                        return i.trys.push([1, 3, , 4]), [4, Object(h.a)(this.props.userID, this.props.authToken, g.a.ProfileImage, this.state.imageFormat)];
                                    case 2:
                                        return t = i.sent(), n = t.upload_url, r = t.upload_id, [3, 4];
                                    case 3:
                                        return a = i.sent(), this.logger.error(a, "Request for upload ID failed to get expected response from server."), this.setState({
                                            statusMessage: f.b.UnexpectedError
                                        }), [2];
                                    case 4:
                                        return this.unsubscribe = o.j.subscribe({
                                            topic: Object(u.d)(this.props.userID),
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
                        n = a.createElement(d.W, {
                            className: r(i),
                            "data-test-selector": "preview-image",
                            position: d._5.Relative
                        }, a.createElement("img", {
                            src: "" + this.state.imagePreviewURL
                        }))
                    }
                    var c = null;
                    "" === this.state.imagePreviewURL && (c = a.createElement(d.W, {
                        className: "profile-edit__upload-info"
                    }, a.createElement(d.W, null, a.createElement(d._11, {
                        asset: d._12.Plus,
                        type: d._13.Alt2,
                        height: 20,
                        width: 20
                    })), a.createElement(d._24, {
                        type: d._29.H3,
                        color: d.F.Alt2,
                        fontSize: d.M.Size4
                    }, Object(o.d)("Upload a Photo", "Profile Edit"))));
                    var u = null;
                    this.props.showCloser && (u = a.createElement(l.a, null));
                    var g = null;
                    if (null !== this.state.statusMessage) {
                        var m = Object(f.c)(this.state.statusMessage),
                            h = m.message,
                            b = m.type;
                        g = a.createElement(d._2, {
                            label: h,
                            type: b
                        })
                    }
                    var v = this.props.login;
                    return this.props.displayName && (v = this.props.displayName), a.createElement(d.W, {
                        className: "profile-edit",
                        position: d._5.Relative,
                        fullHeight: !0
                    }, a.createElement(d._20, {
                        className: "profile-edit__background-container",
                        background: d.m.Base,
                        fullWidth: !0
                    }, a.createElement(d.W, {
                        padding: 2,
                        display: d.I.InlineBlock,
                        position: d._5.Relative,
                        textAlign: d._25.Center,
                        fullWidth: !0
                    }, a.createElement(d._20, {
                        textAlign: d._25.Left,
                        borderBottom: !0,
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(d._24, {
                        type: d._29.H3,
                        color: d.F.Alt2,
                        fontSize: d.M.Size4
                    }, Object(o.d)("Edit Profile Picture for {userName}", {
                        userName: v
                    }, "Profile Edit"), " ")), a.createElement(d.W, {
                        className: "profile-edit__upload-container",
                        display: d.I.InlineBlock,
                        position: d._5.Relative,
                        textAlign: d._25.Center,
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(d.W, {
                        className: "profile-edit__upload",
                        display: d.I.InlineBlock,
                        position: d._5.Relative,
                        textAlign: d._25.Center
                    }, a.createElement(s.a, {
                        allowedFileTypes: y,
                        onFilesSubmitted: this.onImageInputChange
                    }, c), n)), a.createElement(d._20, {
                        "data-test-selector": "status-message",
                        fontSize: d.M.Size4,
                        position: d._5.Relative,
                        textAlign: d._25.Center,
                        className: "profile-edit__status-message"
                    }, g), a.createElement(d._20, {
                        borderBottom: !0,
                        padding: {
                            bottom: .5
                        },
                        margin: {
                            bottom: 2
                        }
                    }, a.createElement(d.W, {
                        textAlign: d._25.Left,
                        margin: {
                            bottom: 1
                        }
                    }, a.createElement(d._24, {
                        type: d._29.H3,
                        color: d.F.Alt2,
                        fontSize: d.M.Size5
                    }, Object(o.d)("Or select one of these", "Profile Edit"))), a.createElement(d._35, {
                        childWidth: d._36.ExtraSmall,
                        gutterSize: d._37.ExtraSmall,
                        placeholderItems: 3
                    }, t)), a.createElement(d.W, {
                        display: d.I.Flex,
                        justifyContent: d.V.Center
                    }, a.createElement(d.u, {
                        "data-test-selector": "update-button",
                        onClick: this.onUpdateButtonClick,
                        size: d.x.Large
                    }, Object(o.d)("Update", "Profile Edit"))))), u)
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
            k = Object(b.d)("Profile Edit")(_)
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
            return e.description && (t = m.createElement(O.W, {
                margin: {
                    top: 1
                }
            }, m.createElement(O._24, {
                color: O.F.Alt2
            }, e.description))), m.createElement(O.W, {
                margin: {
                    top: 2,
                    bottom: 4
                }
            }, m.createElement(O._24, {
                type: O._29.H3,
                fontSize: O.M.Size2
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
            return m.createElement(M, {
                label: Object(f.d)("Password", "ChangePasswordLink"),
                orientation: O.O.Horizontal
            }, m.createElement(O._24, null, Object(f.d)("<x:link>Change password.</x:link> Improve your security with a strong password.", {
                "x:link": function(e) {
                    return m.createElement("a", {
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
            u = n("+xm8"),
            d = n("f2i/"),
            p = n("Aj/L"),
            g = n("TToO"),
            m = n("U7vG"),
            h = n("CIox"),
            f = n("6sO2"),
            b = n("yWCw"),
            v = n("CSlQ"),
            S = n("eXld"),
            y = n("2aoH"),
            _ = n("j7/Y"),
            k = n("Ejve"),
            E = n("w9tK"),
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
                return g.__extends(t, e), t.prototype.render = function() {
                    var e = O.y.Default,
                        t = Object(f.d)("Save Changes", "SaveSettingsFooter"),
                        n = O.z.Default,
                        i = !1;
                    return this.props.status === s.Working ? e = O.y.Loading : this.props.status === s.Success ? e = O.y.Success : this.props.status === s.Error ? (n = O.z.Alert, t = Object(f.d)("Failed to save settings. Try again.", "SaveSettingsFooter")) : this.props.status === s.NoChanges && (i = !0), m.createElement(w.a, null, m.createElement(O._20, {
                        borderTop: !0,
                        display: O.I.Flex,
                        alignItems: O.c.Center,
                        justifyContent: O.V.Center,
                        padding: {
                            y: 2
                        },
                        margin: {
                            x: Wt
                        }
                    }, m.createElement(O.u, {
                        disabled: i,
                        size: O.x.Large,
                        state: e,
                        type: n,
                        onClick: this.props.onClickSave,
                        "data-a-target": "save-user-settings-button"
                    }, t)))
                }, t
            }(m.Component),
            x = n("9u8h"),
            j = n("LIeg"),
            T = n("HM6l"),
            U = n("5LoI"),
            I = n("MAZT"),
            A = n("5Y57"),
            F = n("kqTE"),
            D = n("zCIC"),
            H = n("5kgt"),
            R = (n("4LC8"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onClick = function() {
                        t.props.onClick(t.props.user)
                    }, t
                }
                return g.__extends(t, e), t.prototype.render = function() {
                    return m.createElement(O.W, g.__assign({
                        className: "auto-host-list-item",
                        padding: {
                            y: 1,
                            x: 1
                        }
                    }, Object(H.a)(this.props)), m.createElement(O.A, {
                        row: !0
                    }, m.createElement(O.C, {
                        imageAlt: this.props.user.name,
                        imageSrc: this.props.user.avatar || f.a.defaultAvatarURL,
                        size: O.D.Size4,
                        aspect: O.k.Aspect1x1
                    }), m.createElement(O.W, {
                        fullWidth: !0,
                        display: O.I.Flex,
                        position: O._5.Relative
                    }, m.createElement(O.R, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, m.createElement(O._24, {
                        type: O._29.Span,
                        ellipsis: !0
                    }, this.props.user.name))), m.createElement(O.W, {
                        className: "auto-host-list-item__delete",
                        padding: {
                            right: 1
                        },
                        display: O.I.Flex,
                        attachRight: !0
                    }, m.createElement(O.v, {
                        "data-test-selector": "AUTO_HOST_DELETE_BUTTON",
                        ariaLabel: Object(f.d)("Delete", "HoverListItem"),
                        icon: O._12.Trash,
                        onClick: this.onClick
                    }))))
                }, t
            }(m.Component)),
            W = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onAddClick = function() {
                        t.props.onAddClick(t.props.user)
                    }, t.onAddedClick = function() {
                        t.props.onAddedClick(t.props.user)
                    }, t
                }
                return g.__extends(t, e), t.prototype.render = function() {
                    var e = null;
                    return e = this.props.user.added ? m.createElement(O.u, {
                        onClick: this.onAddedClick,
                        "data-test-selector": "AUTO_HOST_REMOVE_BUTTON",
                        icon: O._12.Check,
                        statusAlertIcon: O._12.Trash,
                        statusAlertText: Object(f.d)("Remove", "AutoHostUserResultCard")
                    }, Object(f.d)("Added", "AutoHostUserResultCard")) : m.createElement(O.u, {
                        type: O.z.Hollow,
                        onClick: this.onAddClick,
                        "data-test-selector": "AUTO_HOST_ADD_BUTTON"
                    }, Object(f.d)("Add", "AutoHostUserResultCard")), m.createElement(O.W, g.__assign({
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(H.a)(this.props)), m.createElement(O.A, {
                        row: !0
                    }, m.createElement(O.C, {
                        imageAlt: this.props.user.name,
                        imageSrc: this.props.user.avatar || f.a.defaultAvatarURL,
                        size: O.D.Size4,
                        aspect: O.k.Aspect1x1
                    }), m.createElement(O.W, {
                        flexGrow: 1,
                        display: O.I.Flex,
                        position: O._5.Relative
                    }, m.createElement(O.R, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, m.createElement(O._24, {
                        type: O._29.Span,
                        ellipsis: !0
                    }, this.props.user.name))), e))
                }, t
            }(m.Component),
            L = function(e) {
                return m.createElement(O.W, {
                    margin: {
                        top: 1
                    }
                }, m.createElement(O._24, {
                    color: O.F.Alt,
                    "data-a-target": e.dataTarget
                }, e.text))
            },
            M = (n("l+ac"), function(e) {
                return m.createElement(O.W, {
                    className: "settings-form-group",
                    margin: {
                        bottom: 4
                    }
                }, m.createElement(O.N, {
                    error: e.error,
                    errorMessage: e.errorMessage || Object(f.d)("Sorry, something went wrong. Please try again later.", "SettingsFormGroup"),
                    hint: e.hint,
                    id: e.id,
                    label: e.label,
                    labelOptional: e.labelOptional,
                    orientation: e.orientation
                }, e.children))
            }),
            B = (n("WYUS"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.userSearch = null, t.setUserSearchRef = function(e) {
                        t.userSearch = e
                    }, t
                }
                return g.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                    this.userSearch && e.isUserSearchOpen !== this.props.isUserSearchOpen && this.userSearch.toggle(e.isUserSearchOpen)
                }, t.prototype.render = function() {
                    var e = this,
                        t = null;
                    return this.props.isWaiting ? t = m.createElement(O._0, {
                        fillContent: !0
                    }) : this.props.userResults && (t = this.props.userResults.map(function(t) {
                        return m.createElement(F.a, {
                            key: t.id
                        }, m.createElement(W, {
                            user: t,
                            onAddClick: e.props.onHostAdded,
                            onAddedClick: e.props.onHostRemoved,
                            key: t.id
                        }))
                    })), m.createElement(M, {
                        label: Object(f.d)("Currently Hosting", "SettingsChannelPage"),
                        error: !!this.props.formErrorMsg,
                        errorMessage: this.props.formErrorMsg || ""
                    }, m.createElement(L, {
                        text: Object(f.d)("Add and adjust your hosted channels", "SettingsChannelPage")
                    }), m.createElement(O.W, {
                        className: "auto-host-list",
                        alignContent: O.b.Center
                    }, m.createElement(O.W, {
                        position: O._5.Relative,
                        margin: {
                            y: 1
                        }
                    }, m.createElement(A.a, {
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
                    }, m.createElement(O.W, {
                        className: "auto-host-list__user-search"
                    }, m.createElement(D.b, {
                        contentClassName: "auto-host-list__user-search-content",
                        suppressScrollX: !0
                    }, m.createElement(O.W, {
                        fullWidth: !0
                    }, t, m.createElement(D.a, {
                        enabled: !this.props.isWaiting && this.props.isUserSearchOpen,
                        loadMore: this.props.loadMore
                    })))))), m.createElement(D.b, {
                        className: "auto-host-list__edit",
                        suppressScrollX: !0
                    }, m.createElement(O.W, null, this.props.autohostChannels && this.props.autohostChannels.map(function(t) {
                        return m.createElement(R, {
                            user: t,
                            key: t.id,
                            onClick: e.props.onHostRemoved
                        })
                    })))))
                }, t
            }(m.Component)),
            z = 100,
            V = "/kraken/streams/recommended",
            q = "kraken/autohost/list",
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
                        return g.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i, r, a = this;
                            return g.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (!this.state.userTerm || this.state.queryID || this.state.isWaiting || !0 === this.state.exhaustedHits) return [2];
                                        e = this.state.currentPage + 1, t = null, o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(U.a.Users, this.state.userTerm, "", {
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
                        return g.__awaiter(t, void 0, void 0, function() {
                            var t, n, r;
                            return g.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        if (!this.state.autohostChannels) return [2];
                                        (t = this.state.autohostChannels.map(function(e) {
                                            return e.id
                                        })).push(e.id), a.label = 1;
                                    case 1:
                                        return a.trys.push([1, 3, , 4]), [4, x.a.put(q, {
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
                        return g.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i = this;
                            return g.__generator(this, function(r) {
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
                                        return r.trys.push([1, 3, , 4]), [4, x.a.get(V)];
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
                        return g.__awaiter(t, void 0, void 0, function() {
                            var e, t, n, i;
                            return g.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), [4, x.a.get(q)];
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
                        return g.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, a, o;
                            return g.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (!this.state.autohostChannels) return [2];
                                        if (t = [], 1 !== this.state.autohostChannels.length) return [3, 5];
                                        s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 3, , 4]), [4, x.a.delete(q)];
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
                                        return s.trys.push([6, 8, , 9]), [4, x.a.put(q, {
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
                return g.__extends(t, e), t.prototype.componentWillMount = function() {
                    return g.__awaiter(this, void 0, void 0, function() {
                        return g.__generator(this, function(e) {
                            return this.fetchChannelsList(), [2]
                        })
                    })
                }, t.prototype.render = function() {
                    return m.createElement(B, {
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
                    return g.__awaiter(this, void 0, void 0, function() {
                        var t, n, i, r, a = this;
                        return g.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    this.inputTimer = 0, t = Object(T.a)(), this.setState({
                                        queryID: t
                                    }), n = null, o.label = 1;
                                case 1:
                                    return o.trys.push([1, 3, , 4]), [4, this.searchClient.queryForType(U.a.Users, e, t)];
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
            }(m.Component),
            Q = Object(l.b)(function(e) {
                return {
                    user: Object(p.c)(e)
                }
            })(G),
            J = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderBody = function() {
                        return t.props.showPlaceholder ? m.createElement(O._4, null) : m.createElement(O.W, null, m.createElement(O._31, {
                            checked: t.props.checked,
                            error: t.props.error,
                            disabled: t.props.disabled,
                            onChange: t.onChange,
                            id: t.props.id
                        }), m.createElement(L, {
                            text: t.props.description
                        }))
                    }, t.onChange = function(e) {
                        t.props.onChange && t.props.onChange(e.currentTarget.checked)
                    }, t
                }
                return g.__extends(t, e), t.prototype.render = function() {
                    return m.createElement(M, {
                        id: this.props.id,
                        label: this.props.label,
                        error: this.props.error,
                        errorMessage: this.props.errorMessage,
                        orientation: O.O.Horizontal
                    }, this.renderBody())
                }, t
            }(m.Component),
            Y = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return g.__extends(t, e), t.prototype.render = function() {
                    var e = Object(f.d)("Auto Hosting", "AutoHostToggle"),
                        t = Object(f.d)("Toggle all forms of auto hosting: teammates, host list, and similar channels. <x:link>Learn more</x:link>", {
                            "x:link": function(e) {
                                return m.createElement("a", {
                                    key: "learn-more-link",
                                    href: "https://blog.twitch.tv/grow-your-community-with-auto-hosting-e80c1460f6e1"
                                }, m.createElement(O._24, {
                                    type: O._29.Span,
                                    bold: !0
                                }, e))
                            }
                        }, "AutoHostToggle");
                    return m.createElement(J, {
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
            }(m.Component);
        ! function(e) {
            e.Random = "random", e.Ordered = "ordered"
        }(N || (N = {}));
        var K, $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderBody = function() {
                        return void 0 === t.props.hostPriority ? m.createElement(O._4, null) : m.createElement(O._17, {
                            value: t.props.hostPriority,
                            onChange: t.onHostPriorityChange,
                            error: t.props.error,
                            disabled: t.props.updating
                        }, m.createElement("option", {
                            value: N.Random
                        }, Object(f.d)("Host channels randomly.", "SettingsHostPriority")), m.createElement("option", {
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
                return g.__extends(t, e), t.prototype.render = function() {
                    return m.createElement(M, {
                        label: "Host Priority",
                        error: this.props.error
                    }, this.renderBody())
                }, t
            }(m.Component),
            X = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return g.__extends(t, e), t.prototype.render = function() {
                    var e = Object(f.d)("Auto Host Channels Similar to Yours", "SimilarHostToggle"),
                        t = Object(f.d)("Streamers on your primary team and host list will be hosted first.", "SimilarHostToggle ");
                    return m.createElement(J, {
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
            }(m.Component),
            Z = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return g.__extends(t, e), t.prototype.render = function() {
                    var e = Object(f.d)("Team Hosting", "TeamHostToggle"),
                        t = Object(f.d)("Automatically host random channels from your team when you're not live. Team channels will be hosted before any channels in your host list.", "TeamHostToggle ");
                    return m.createElement(J, {
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
            }(m.Component),
            ee = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return g.__extends(t, e), t.prototype.render = function() {
                    var e = Object(f.d)("Vodcast Hosting", "VodcastToggle"),
                        t = Object(f.d)("Includes Vodcasts in auto host. <x:link>Learn about Vodcasts.</x:link>", {
                            "x:link": function(e) {
                                return m.createElement("a", {
                                    key: "learn-more-link",
                                    href: "https://blog.twitch.tv/vodcast-brings-the-twitch-community-experience-to-uploads-54098498715"
                                }, m.createElement(O._24, {
                                    type: O._29.Span,
                                    bold: !0
                                }, e))
                            }
                        }, "VodcastToggle");
                    return m.createElement(J, {
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
            }(m.Component),
            te = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return g.__extends(t, e), t.prototype.render = function() {
                    return m.createElement(O.W, null, m.createElement(r, {
                        title: Object(f.d)("Auto Hosting", "AutoHostSettingsComponent"),
                        description: Object(f.d)("Host your friends and favorite channels while you're offline", "AutoHostSettingsComponent")
                    }), m.createElement(Y, {
                        enabled: this.props.autoHostingEnabled,
                        error: this.props.autoHostingError,
                        updating: this.props.autoHostingUpdating,
                        onChange: this.props.onAutoHostingEnabledChange
                    }), m.createElement(Z, {
                        enabled: this.props.teamHostingEnabled,
                        error: this.props.teamHostingError,
                        updating: this.props.teamHostingUpdating,
                        onChange: this.props.onTeamHostingEnabledChange
                    }), m.createElement(ee, {
                        enabled: this.props.vodcastHostingEnabled,
                        error: this.props.vodcastHostingError,
                        updating: this.props.vodcastHostingUpdating,
                        onChange: this.props.onVodcastHostingEnabledChange
                    }), m.createElement(Q, null), m.createElement($, {
                        hostPriority: this.props.hostPriority,
                        error: this.props.hostPriorityError,
                        updating: this.props.hostPriorityUpdating,
                        onChange: this.props.onHostPriorityChange
                    }), m.createElement(X, {
                        enabled: this.props.similarHostingEnabled,
                        error: this.props.similarHostingError,
                        updating: this.props.similarHostingUpdating,
                        onChange: this.props.onSimilarHostingEnabledChange
                    }))
                }, t
            }(m.Component),
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
                        return g.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return g.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, x.a.put(ne, {
                                            body: e
                                        })];
                                    case 1:
                                        return t = n.sent(), this.setState(this.deserialize(t)), [2]
                                }
                            })
                        })
                    }, t.setAutoHostEnabled = function(e) {
                        return g.__awaiter(t, void 0, void 0, function() {
                            return g.__generator(this, function(t) {
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
                        return g.__awaiter(t, void 0, void 0, function() {
                            return g.__generator(this, function(t) {
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
                        return g.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return g.__generator(this, function(n) {
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
                        return g.__awaiter(t, void 0, void 0, function() {
                            return g.__generator(this, function(t) {
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
                        return g.__awaiter(t, void 0, void 0, function() {
                            return g.__generator(this, function(t) {
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
                return g.__extends(t, e), t.prototype.componentDidMount = function() {
                    return g.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return g.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, x.a.get(ne)];
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
                    return m.createElement(te, {
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
            }(m.Component),
            re = Object(v.d)("SettingsAutoHostContainer")(ie),
            ae = n("3zLD"),
            oe = n("7vx8"),
            se = function(e) {
                var t = e.saving || e.errorLoading;
                return m.createElement(J, {
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
                return g.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
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
                    return m.createElement(se, {
                        loading: this.props.data.loading && !e,
                        saving: this.state.saving,
                        checked: this.state.checked,
                        errorLoading: !!this.props.data.error && !e,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onChange
                    })
                }, t
            }(m.Component),
            ue = Object(ae.compose)(Object(v.d)("BlockHyperlinksToggle"), Object(oe.a)(le))(ce),
            de = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onChange = function(e) {
                        var n = +e.currentTarget.value;
                        t.props.onChange(n)
                    }, t
                }
                return g.__extends(t, e), t.prototype.render = function() {
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
                    return m.createElement(M, {
                        orientation: O.O.Horizontal,
                        label: Object(f.d)("Non-Mod Chat Delay", "ChatDelayRadioButtons"),
                        error: this.props.errorLoading || this.props.errorSaving
                    }, m.createElement(O.W, {
                        display: O.I.Flex,
                        flexDirection: O.K.Row
                    }, n.map(function(n) {
                        var i = "chat-delay:" + n.label;
                        return m.createElement(O.W, {
                            key: i,
                            margin: {
                                right: 2
                            },
                            display: O.I.Flex,
                            flexDirection: O.K.Row
                        }, m.createElement(O._10, {
                            checked: n.selected,
                            value: n.delay.toString(),
                            label: n.label,
                            name: "Non-Mod Chat Delay: " + n.delay / 1e3 + "s",
                            onChange: e.onChange,
                            disabled: t,
                            "data-test-selector": "chat-delay-radio:" + n.delay
                        }))
                    })), m.createElement(L, {
                        text: Object(f.d)("Adds a short delay before non-mods see messages. Any message that is timed out or banned during the delay is removed from chat completely.", "ChatDelayRadioButtons")
                    }))
                }, t
            }(m.Component),
            pe = n("D2cp"),
            ge = function(e) {
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
                return g.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
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
                    return m.createElement(de, {
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
            }(m.Component),
            me = Object(ae.compose)(Object(v.d)("ChatDelayRadioButtons"), Object(oe.a)(pe))(ge),
            he = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return g.__extends(t, e), t.prototype.render = function() {
                    var e = null,
                        t = this.props.loading || this.props.saving || this.props.errorLoading;
                    return (this.props.dirty || this.props.saving) && (e = m.createElement(O.W, {
                        margin: {
                            top: 1
                        }
                    }, m.createElement(O.u, {
                        onClick: this.props.onClickSave,
                        state: this.props.saving ? O.y.Loading : O.y.Default
                    }, Object(f.d)("Save Changes", "ChatRulesTextArea")))), m.createElement(M, {
                        orientation: O.O.Horizontal,
                        label: Object(f.d)("Chat Rules", "ChatRulesTextArea"),
                        error: this.props.errorLoading || this.props.errorSaving
                    }, m.createElement(O._26, {
                        disabled: t,
                        value: this.props.rules,
                        onChange: this.props.onChange,
                        rows: 5
                    }), m.createElement(L, {
                        text: Object(f.d)("Require first-time viewers to agree to your rules before chatting. One rule per line.", "ChatRulesTextArea")
                    }), e)
                }, t
            }(m.Component),
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
                return g.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
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
                    return m.createElement(he, {
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
            }(m.Component),
            ve = Object(ae.compose)(Object(v.d)("ChatRulesTextArea"), Object(oe.a)(fe))(be),
            Se = function(e) {
                var t = e.saving || e.errorLoading;
                return m.createElement(J, {
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
                return g.__extends(t, e), t.prototype.componentDidUpdate = function(e) {
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
                    return m.createElement(Se, {
                        loading: this.props.data.loading && !e,
                        saving: this.state.saving,
                        checked: this.state.checked,
                        onChange: this.onChange,
                        errorLoading: !!this.props.data.error && !e,
                        errorSaving: this.state.errorSaving
                    })
                }, t
            }(m.Component),
            ke = Object(ae.compose)(Object(v.d)("EmailVerificationToggle"), Object(oe.a)(ye))(_e),
            Ee = function(e) {
                var t = e.errorSaving || e.errorLoading;
                return m.createElement(J, {
                    id: "settings-channel-page-mature-content",
                    label: Object(f.d)("Mature Content", "MatureContentToggle"),
                    description: Object(f.d)("Enable this setting if your stream contains content that may be inappropriate for younger audiences. You may never broadcast sexual activity, nudity, threats or extreme violence. Doing so will result in immediate, irrevocable termination of your account. Please make sure your content will comply with the <x:link>Terms of Service</x:link> before broadcasting", {
                        "x:link": function(e) {
                            return m.createElement("a", {
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
                return g.__extends(t, e), t.prototype.render = function() {
                    return m.createElement(Ee, {
                        checked: this.state.checked,
                        saving: this.state.saving,
                        loading: this.state.loading,
                        errorLoading: this.state.errorLoading,
                        errorSaving: this.state.errorSaving,
                        onChange: this.onCheckBoxChange
                    })
                }, t
            }(m.Component),
            we = n("V5M+"),
            Oe = n("J8WN"),
            Ne = n("+8VM"),
            Pe = n("HZww"),
            xe = n("4Q9N"),
            je = n("Tt3k"),
            Te = n("W6ca"),
            Ue = n("xgnX"),
            Ie = (n("+Aaf"), n("0H+u")),
            Ae = ["image/*"],
            Fe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        statusMessage: null,
                        imageUpdated: !1,
                        loading: !1
                    }, t.currentImage = null, t.logger = f.i.withCategory("UserImageUploader"), t.onImageInputChange = function(e) {
                        var n;
                        if (null !== e) {
                            t.setState({
                                loading: !0
                            }), n = e[0];
                            var i = Object(je.a)(n),
                                r = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(r, 10) > 10 ? t.setState({
                                statusMessage: Ue.b.BadSizeError
                            }) : Object(je.b)(n, function(e) {
                                return g.__awaiter(t, void 0, void 0, function() {
                                    var t, n, r, a, o = this;
                                    return g.__generator(this, function(s) {
                                        switch (s.label) {
                                            case 0:
                                                this.currentImage = e, s.label = 1;
                                            case 1:
                                                return s.trys.push([1, 3, , 4]), [4, Object(Te.a)(this.props.userID, this.props.authToken, this.props.imageType, i)];
                                            case 2:
                                                return t = s.sent(), n = t.upload_url, r = t.upload_id, [3, 4];
                                            case 3:
                                                return a = s.sent(), this.logger.error(a, "Request for upload ID failed to get expected response from server."), this.setState({
                                                    statusMessage: Ue.b.UnexpectedError
                                                }), [2];
                                            case 4:
                                                return this.unsubscribe = f.j.subscribe({
                                                    topic: Object(Pe.d)(this.props.userID),
                                                    success: function() {
                                                        try {
                                                            Object(Te.c)(n, o.currentImage)
                                                        } catch (e) {
                                                            o.logger.error(e, "Image upload failed."), o.unsubscribe(), o.setState({
                                                                statusMessage: Ue.b.UnexpectedError,
                                                                loading: !1
                                                            })
                                                        }
                                                        o.timeoutHandle = setTimeout(function() {
                                                            return o.handlePubSubTimeout()
                                                        }, 1e4)
                                                    },
                                                    failure: function() {
                                                        o.setState({
                                                            statusMessage: Ue.b.UnexpectedError,
                                                            loading: !1
                                                        })
                                                    },
                                                    onMessage: function(e) {
                                                        if (e.upload_id === r) {
                                                            clearTimeout(o.timeoutHandle);
                                                            var t = null;
                                                            e.status === Ue.a.Success ? t = Ue.b.Success : e.status === Ue.a.BadSize ? (t = Ue.b.BadSizeError, o.currentImage = null) : e.status === Ue.a.NonImage ? (t = Ue.b.NonImageError, o.currentImage = null) : e.status === Ue.a.WrongFormat ? (t = Ue.b.WrongFormatError, o.currentImage = null) : (t = Ue.b.UnexpectedError, o.currentImage = null), o.unsubscribe && o.unsubscribe(), o.setState({
                                                                statusMessage: t,
                                                                loading: !1,
                                                                imageUpdated: e.status === Ue.a.Success
                                                            })
                                                        }
                                                    }
                                                }), [2]
                                        }
                                    })
                                })
                            })
                        } else t.setState({
                            statusMessage: Ue.b.ImageNotSelected
                        })
                    }, t.handlePubSubTimeout = function() {
                        t.unsubscribe(), t.setState({
                            statusMessage: Ue.b.TimeoutError
                        })
                    }, t
                }
                return g.__extends(t, e), t.prototype.componentDidMount = function() {
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
                    var t = Object(f.d)("Editing profile banner for {userName}", {
                        userName: e
                    }, "UserImageUploader");
                    this.props.imageType === xe.a.ChannelOfflineImage && (t = Object(f.d)("Editing video banner for {userName}", {
                        userName: e
                    }, "UserImageUploader"));
                    var n = null;
                    if (this.state.loading) n = m.createElement(O.W, {
                        className: "user-image-uploader__upload-svg--anim-fill",
                        position: O._5.Relative,
                        "data-test-selector": "loading-status"
                    }, m.createElement(O._11, {
                        asset: O._12.Upload,
                        type: O._13.Brand,
                        width: 99,
                        height: 76
                    }));
                    else {
                        var i = Object(f.d)("Recommended image size: 1200x380 and less than 10MB.", "UserImageUploader");
                        this.props.imageType === xe.a.ChannelOfflineImage && (i = Object(f.d)("Recommended image size: 1920x1080 and less than 10MB.", "UserImageUploader")), n = m.createElement(O.W, null, m.createElement(O.W, {
                            className: "user-image-uploader__upload-info"
                        }, m.createElement(O.W, null, m.createElement(O._11, {
                            asset: O._12.Plus,
                            type: O._13.Alt2,
                            height: 20,
                            width: 20
                        })), m.createElement(O._24, {
                            type: O._29.H3,
                            color: O.F.Alt2,
                            fontSize: O.M.Size4
                        }, Object(f.d)("Upload a Photo", "User Image Uploader"))), m.createElement(O.W, {
                            className: "user-image-uploader__upload-recommendation",
                            position: O._5.Absolute,
                            textAlign: O._25.Left,
                            attachLeft: !0,
                            attachBottom: !0,
                            margin: {
                                left: 3,
                                bottom: 1
                            }
                        }, m.createElement(O._24, {
                            type: O._29.H6,
                            color: O.F.Alt2,
                            fontSize: O.M.Size8,
                            align: O._39.TextBottom
                        }, i)))
                    }
                    var r = null;
                    this.props.showCloser && (r = m.createElement(Ne.a, null));
                    var a = null;
                    if (null !== this.state.statusMessage) {
                        var o = Object(Ue.c)(this.state.statusMessage);
                        a = m.createElement(O._2, {
                            label: o.message,
                            type: o.type
                        })
                    }
                    return m.createElement(O.W, {
                        className: "user-image-uploader",
                        position: O._5.Relative,
                        fullHeight: !0
                    }, m.createElement(O._20, {
                        className: "user-image-uploader__background-container",
                        background: O.m.Base,
                        fullWidth: !0
                    }, m.createElement(O.W, {
                        padding: 2,
                        display: O.I.InlineBlock,
                        position: O._5.Relative,
                        textAlign: O._25.Center,
                        fullWidth: !0
                    }, m.createElement(O._20, {
                        borderBottom: !0,
                        margin: {
                            bottom: 2
                        }
                    }, m.createElement(O._24, {
                        type: O._29.H3,
                        fontSize: O.M.Size4
                    }, t)), m.createElement(O.W, {
                        className: "user-image-uploader__upload-container",
                        display: O.I.InlineBlock,
                        position: O._5.Relative,
                        textAlign: O._25.Center,
                        margin: {
                            bottom: 1
                        }
                    }, m.createElement(O.W, {
                        className: "user-image-uploader__upload",
                        display: O.I.InlineBlock,
                        position: O._5.Relative,
                        textAlign: O._25.Center
                    }, m.createElement(Oe.a, {
                        allowedFileTypes: Ae,
                        onFilesSubmitted: this.onImageInputChange
                    }, n))), m.createElement(O._20, {
                        "data-test-selector": "status-message",
                        fontSize: O.M.Size4,
                        position: O._5.Relative,
                        textAlign: O._25.Center,
                        className: "user-image-uploader__status-message"
                    }, a))), r)
                }, t = g.__decorate([Object(oe.a)(Ie, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(m.Component),
            De = Object(v.d)("User Image Upload")(Fe),
            He = Object(l.b)(function(e) {
                return {
                    authToken: Object(p.a)(e)
                }
            }, function(e, t) {
                return Object(c.b)({
                    closeModal: function() {
                        return t.successCallback && t.successCallback(), Object(we.c)()
                    }
                }, e)
            })(De),
            Re = n("J4ib"),
            We = n("vm+z"),
            Le = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.showModal = function() {
                        t.props.user && t.props.showUploaderModal(t.props.user)
                    }, t
                }
                return g.__extends(t, e), t.prototype.render = function() {
                    var e = null,
                        t = null;
                    if (this.props.data && this.props.data.user && this.props.data.user.offlineImageURL) {
                        e = m.createElement("img", {
                            "data-test-selector": "test-channel-offline-image-selector",
                            height: "90",
                            width: "160",
                            src: this.props.data.user.offlineImageURL
                        });
                        var n = Object(Re.d)("Remove my Video Player Banner Image", "UploadVideoPlayerBanner");
                        t = m.createElement(O.v, {
                            icon: O._12.Trash,
                            ariaLabel: n
                        })
                    }
                    return m.createElement(O.W, null, m.createElement(r, {
                        title: Object(Re.d)("Video Player Banner", "UploadVideoPlayerBanner"),
                        description: Object(Re.d)("This is displayed on the player when your channel is offline.", "UploadVideoPlayerBanner")
                    }), m.createElement(O.W, {
                        display: O.I.Flex
                    }, e, m.createElement(O.W, {
                        padding: {
                            left: 1,
                            top: 1
                        }
                    }, m.createElement(O.W, {
                        display: O.I.Flex
                    }, m.createElement(O.u, {
                        "data-test-selector": "test-upload-video-player-banner-selector",
                        onClick: this.showModal
                    }, "Update"), t), m.createElement(L, {
                        text: Object(Re.d)("Max 10mb GIF, JPG, or PNG", "UploadVideoPlayerBanner")
                    }))))
                }, t = g.__decorate([Object(oe.a)(We, {
                    options: function(e) {
                        return {
                            skip: !e.user,
                            variables: {
                                login: e.user && e.user.login
                            }
                        }
                    }
                })], t)
            }(m.Component),
            Me = Object(l.b)(function(e) {
                return {
                    user: Object(p.c)(e)
                }
            }, function(e) {
                return Object(c.b)({
                    showUploaderModal: function(e) {
                        return Object(we.d)(He, {
                            userID: e.id,
                            login: e.login,
                            displayName: e.displayName,
                            imageType: xe.a.ChannelOfflineImage,
                            showCloser: !0
                        })
                    }
                }, e)
            })(Le),
            Be = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: s.NoChanges
                    }, t.renderContentSettingsSection = function() {
                        return m.createElement(O.W, null, m.createElement(r, {
                            title: Object(f.d)("Content Settings", "SettingsChannelPage"),
                            description: Object(f.d)("Choose how your channel will display for certain users", "SettingsChannelPage")
                        }), m.createElement(Ce, null))
                    }, t.renderChatSettingsSection = function() {
                        return m.createElement(O.W, null, m.createElement(r, {
                            title: Object(f.d)("Chat Options", "SettingsChannelPage"),
                            description: Object(f.d)("Moderate your channel's chat and who you allow in it", "SettingsChannelPage")
                        }), m.createElement(ue, null), m.createElement(ke, null), m.createElement(ve, null), m.createElement(me, null))
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: s.Working
                        }, function() {})
                    }, t
                }
                return g.__extends(t, e), t.prototype.render = function() {
                    return f.a.buildType === k.a.Production ? null : m.createElement("div", null, m.createElement(Me, null), m.createElement(re, null), this.renderContentSettingsSection(), this.renderChatSettingsSection(), m.createElement(P, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    }))
                }, t = g.__decorate([Object(v.d)("SettingsChannelPage", {
                    autoReportInteractive: !0,
                    destination: E.a.SettingsChannel
                }), Object(_.a)({
                    location: C.PageviewLocation.SettingsPage
                })], t)
            }(m.Component),
            ze = function(e) {
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
                return g.__extends(t, e), t.prototype.render = function() {
                    return f.a.buildType === k.a.Production ? null : m.createElement("div", null, m.createElement(P, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    }))
                }, t = g.__decorate([Object(v.d)("SettingsConnectionsPage", {
                    autoReportInteractive: !0,
                    destination: E.a.SettingsConnections
                }), Object(_.a)({
                    location: C.PageviewLocation.SettingsPage
                })], t)
            }(m.Component),
            Ve = n("OAwv"),
            qe = n("WbwR"),
            Ge = n("LBNC"),
            Qe = n("UbVv"),
            Je = n("oIkB"),
            Ye = n("F8kA"),
            Ke = (n("hPJb"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.userId, t.props.isEnabled)
                    }, t
                }
                return g.__extends(t, e), t.prototype.render = function() {
                    return m.createElement(O._20, {
                        className: "advanced-notification-settings-toggle",
                        display: O.I.Flex,
                        justifyContent: O.V.Between,
                        background: O.m.Base,
                        padding: {
                            x: 5,
                            y: 1
                        },
                        borderBottom: !0
                    }, m.createElement(O.W, {
                        margin: {
                            left: 5
                        },
                        display: O.I.Flex,
                        flexGrow: 1,
                        alignItems: O.c.Center,
                        flexWrap: O.L.NoWrap
                    }, m.createElement(O.W, {
                        display: O.I.Flex,
                        flexGrow: 1,
                        flexWrap: O.L.NoWrap
                    }, m.createElement(O.W, {
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, m.createElement(O.U, {
                        linkTo: "/" + this.props.login
                    }, m.createElement(O.l, {
                        imageSrc: this.props.thumbnail,
                        imageAlt: this.props.text,
                        size: 40
                    }))), m.createElement(O.W, {
                        flexGrow: 1,
                        display: O.I.Flex,
                        flexDirection: O.K.Column
                    }, m.createElement(O._24, {
                        fontSize: O.M.Size5
                    }, m.createElement(Ye.a, {
                        to: "/" + this.props.login
                    }, this.props.text)), m.createElement(O._24, {
                        type: O._29.Span,
                        color: O.F.Alt2
                    }, this.props.description))), m.createElement(O.W, {
                        display: O.I.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, m.createElement(O.W, {
                        margin: {
                            right: 1
                        }
                    }, m.createElement(O._31, {
                        checked: this.props.isEnabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector",
                        id: this.props.userId
                    })), m.createElement(O.W, {
                        className: this.props.saved ? "advanced-notification-settings-toggle__saved" : "advanced-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, m.createElement(O._24, {
                        fontSize: O.M.Size5,
                        color: O.F.Link
                    }, Object(f.d)("Saved", "AdvancedNotificationSettingsToggle"))))))
                }, t
            }(m.Component)),
            $e = n("AQCV"),
            Xe = (n("t4xU"), n("EaRL")),
            Ze = function(e) {
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
                        return g.__awaiter(t, void 0, void 0, function() {
                            var t, i, r;
                            return g.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setAdvancedNotificationSetting ? (t = g.__assign({}, Object(Je.a)({
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
                                            for (var n = 0, r = t.currentUser.follows.edges; n < r.length; n++) {
                                                var a = r[n];
                                                a.node.id === e && (a.notificationSettings.isEnabled = !i.data.followUser.follow.disableNotifications)
                                            }
                                            return t
                                        }, Object(Je.d)(Xe, {
                                            limit: 50
                                        }, r), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return g.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return m.createElement(O._20, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, m.createElement(O._0, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return m.createElement(b.a, {
                        message: Object(f.d)("Error loading data.", "AdvancedNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return m.createElement(O._20, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, m.createElement(b.a, {
                        message: Object(f.d)("You must be logged in to update your settings", "AdvancedNotificationSettings")
                    }));
                    var e = Object(f.d)("{followCount, plural, one {You follow # channel} other {You follow # channels}}", {
                            followCount: this.props.data.currentUser.follows.totalCount
                        }, "AdvancedNotificationSettings"),
                        t = m.createElement(O._20, {
                            background: O.m.Alt2,
                            borderBottom: !0
                        }, m.createElement(O.U, {
                            onClick: this.toggleCollapse,
                            alpha: !0,
                            "data-test-selector": "header-selector"
                        }, m.createElement(O.W, {
                            display: O.I.Flex,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, m.createElement(O.W, {
                            className: "advanced-notification-settings__header",
                            flexGrow: 0
                        }, m.createElement(O._24, {
                            fontSize: O.M.Size5,
                            color: O.F.Alt2,
                            bold: !0
                        }, Object(f.d)("Advanced", "AdvancedNotificationSettings"))), m.createElement(O.W, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, m.createElement(O._24, {
                            "data-test-selector": "description-selector",
                            fontSize: O.M.Size5,
                            color: O.F.Alt2
                        }, e)), m.createElement(O.W, {
                            className: this.state.collapsed ? "advanced-notification-settings--collapse" : "advanced-notification-settings--expand",
                            flexGrow: 0,
                            flexShrink: 1,
                            display: O.I.Flex,
                            justifyContent: O.V.Center
                        }, m.createElement(O._11, {
                            asset: O._12.AngleRight,
                            type: O._13.Alt2
                        }))))),
                        n = !this.props.data.loading && !this.props.data.error && !!this.props.data.currentUser.follows.pageInfo.hasNextPage;
                    return this.props.data.currentUser.follows.totalCount > 0 ? this.state.collapsed ? m.createElement(O._20, null, t) : m.createElement(O._20, null, t, m.createElement(O._20, {
                        borderBottom: !0,
                        padding: 2
                    }, m.createElement(O.W, {
                        padding: {
                            bottom: 1
                        }
                    }, m.createElement(O._24, {
                        fontSize: O.M.Size5,
                        color: O.F.Alt2
                    }, Object(f.d)("Manage which channels you receive notifications for.", "AdvancedNotificationSettings"))), m.createElement(O.W, {
                        padding: {
                            bottom: 1
                        }
                    }, m.createElement(O._24, {
                        fontSize: O.M.Size4,
                        color: O.F.Alt
                    }, e)), m.createElement(O._20, {
                        className: "advanced-notification-settings__toggle-container",
                        borderTop: !0,
                        borderLeft: !0,
                        borderRight: !0,
                        margin: {
                            bottom: .5
                        }
                    }, this.renderToggles(), m.createElement(D.a, {
                        loadMore: this.props.loadMore,
                        enabled: n,
                        pixelThreshold: 200
                    })))) : null
                }, t.prototype.renderToggles = function() {
                    if (this.props.data && (!this.props.data.loading || this.props.data.currentUser)) {
                        for (var e = [], t = 0, n = this.props.data.currentUser.follows.edges; t < n.length; t++) {
                            var i = n[t];
                            i.node && i.node.id && i.node.followers && e.push(m.createElement(Ke, {
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
            }(m.Component),
            et = Object(c.d)(Object(oe.a)(Xe, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network",
                        variables: {
                            limit: 50
                        }
                    }
                },
                props: function(e) {
                    return g.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: Xe,
                                variables: g.__assign({}, e.data.variables, {
                                    cursor: e.data.currentUser.follows.edges[e.data.currentUser.follows.edges.length - 1].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult;
                                    return {
                                        currentUser: g.__assign({}, n.currentUser, {
                                            follows: g.__assign({}, n.currentUser.follows, {
                                                edges: Object(Je.b)(e.currentUser.follows.edges, n.currentUser.follows.edges)
                                            })
                                        })
                                    }
                                }
                            })
                        }
                    })
                }
            }), Object(oe.a)($e, {
                name: "setAdvancedNotificationSetting"
            }), Object(v.d)("AdvancedNotificationSettings"))(Ze),
            tt = n("OOv5"),
            nt = n("JBcW"),
            it = (n("mVHD"), f.n.logger.withCategory("browser-push-notifications-settings")),
            rt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hide: !1,
                        loading: !0,
                        deciding: !0,
                        hasSubscription: !1
                    }, t.toggle = function() {
                        return g.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return g.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.setState({
                                            deciding: !0
                                        }), [4, tt.a.hasPushSubscription()];
                                    case 1:
                                        if (!n.sent()) return [3, 6];
                                        n.label = 2;
                                    case 2:
                                        return n.trys.push([2, 4, , 5]), [4, tt.a.userUnsubscribe(nt.a.Settings)];
                                    case 3:
                                        return n.sent(), [3, 5];
                                    case 4:
                                        return e = n.sent(), it.error(e, "user unsubscribe failed"), [3, 5];
                                    case 5:
                                        return [3, 9];
                                    case 6:
                                        return n.trys.push([6, 8, , 9]), [4, tt.a.userSubscribe(nt.a.Settings)];
                                    case 7:
                                        return n.sent(), [3, 9];
                                    case 8:
                                        return t = n.sent(), Object(Qe.a)() ? (this.setState({
                                            hide: !0
                                        }), [2]) : (it.error(t, "user subscribe failed"), [3, 9]);
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
                return g.__extends(t, e), t.prototype.componentDidMount = function() {
                    return g.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return g.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 3, , 4]), [4, tt.a.initialize()];
                                case 1:
                                    return t.sent(), [4, this.updateSubscriptionState()];
                                case 2:
                                    return t.sent(), [3, 4];
                                case 3:
                                    return e = t.sent(), it.error(e, "unexpected error initializing push manager"), this.setState({
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
                    return m.createElement(O._20, {
                        borderTop: !0,
                        padding: {
                            right: 2,
                            y: 1
                        },
                        margin: {
                            top: 1
                        },
                        "data-test-selector": "qa-browser-push-notifications-settings"
                    }, m.createElement(O._20, {
                        className: "browser-push-notification-settings",
                        padding: {
                            left: 5,
                            right: 4
                        },
                        display: O.I.Flex,
                        margin: {
                            x: 5
                        }
                    }, m.createElement(O.W, {
                        className: "browser-push-notification-settings__body",
                        display: O.I.Flex,
                        flexWrap: O.L.NoWrap,
                        flexGrow: 1
                    }, m.createElement(O.W, {
                        margin: {
                            right: 1
                        },
                        flexGrow: 1
                    }, m.createElement(O._24, {
                        fontSize: O.M.Size4,
                        color: O.F.Alt
                    }, Object(f.d)("Receive Browser Notifications for this Device", "BrowserPushNotificationsSettings")), m.createElement(O.W, {
                        padding: {
                            top: .5
                        }
                    }, m.createElement(O._24, {
                        fontSize: O.M.Size5,
                        color: O.F.Alt2
                    }, Object(f.d)("See notifications at the corner of your screen, even when you’re not on Twitch", "BrowserPushNotificationsSettings")))), m.createElement(O.W, {
                        flexShrink: 0
                    }, m.createElement(O.u, {
                        "data-test-selector": "qa-browser-push-notifications-settings-toggle",
                        disabled: this.state.deciding,
                        onClick: this.toggle
                    }, e)))))
                }, t.prototype.updateSubscriptionState = function() {
                    return g.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return g.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, tt.a.hasPushSubscription()];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        hasSubscription: e
                                    }), [2]
                            }
                        })
                    })
                }, t
            }(m.Component),
            at = Object(ae.compose)(Object(v.d)("BrowserPushNotificationsSettings"))(rt),
            ot = (n("iOZM"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.category, t.props.isEnabled)
                    }, t
                }
                return g.__extends(t, e), t.prototype.render = function() {
                    return m.createElement(O._20, {
                        className: "platform-notification-settings-toggle",
                        display: O.I.Flex,
                        flexWrap: O.L.NoWrap,
                        alignItems: O.c.Start,
                        background: O.m.Alt,
                        margin: {
                            top: 1,
                            bottom: .5
                        },
                        padding: {
                            right: 5
                        }
                    }, m.createElement(O.W, {
                        className: "platform-notification-settings-toggle__body",
                        display: O.I.Flex,
                        flexDirection: O.K.Column,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, m.createElement(O.W, {
                        margin: {
                            bottom: .5
                        }
                    }, m.createElement(O._24, {
                        fontSize: O.M.Size4
                    }, this.props.text)), m.createElement(O._24, {
                        fontSize: O.M.Size5,
                        color: O.F.Alt2
                    }, this.props.description)), m.createElement(O.W, {
                        display: O.I.Flex,
                        margin: {
                            top: .5
                        },
                        flexGrow: 0,
                        flexShrink: 0
                    }, m.createElement(O.W, {
                        margin: {
                            right: 1
                        }
                    }, m.createElement(O._31, {
                        checked: this.props.isEnabled,
                        disabled: this.props.disabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector"
                    })), m.createElement(O.W, {
                        className: this.props.saved ? "platform-notification-settings-toggle__saved" : "platform-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, m.createElement(O._24, {
                        fontSize: O.M.Size5,
                        color: O.F.Link
                    }, Object(f.d)("Saved", "PlatformNotificationSettingsToggle")))))
                }, t
            }(m.Component)),
            st = n("g+dK"),
            lt = (n("RC0U"), n("1f5k"));
        ! function(e) {
            e.onsite = "onsite", e.email = "email", e.push = "push"
        }(K || (K = {}));
        var ct, ut = function(e) {
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
                        return g.__awaiter(t, void 0, void 0, function() {
                            var t, i, r, a, o = this;
                            return g.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setNotificationSetting ? (t = n ? "off" : "on", i = g.__assign({}, Object(Je.a)({
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
                                            return t.currentUser.notificationSettings = t.currentUser.notificationSettings.map(function(t) {
                                                return t.category === e && (t.platforms = t.platforms.map(function(e) {
                                                    return e.platformName === o.props.platformName && (e.isEnabled = "on" === r.data.setNotificationSetting.settingState, e.settingState = r.data.setNotificationSetting.settingState), e
                                                })), t
                                            }), t
                                        }, Object(Je.d)(lt, {}, a), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return g.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return m.createElement(O.W, {
                        padding: 1
                    }, m.createElement(O._0, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return m.createElement(b.a, {
                        message: Object(f.d)("Error loading data.", "PlatformNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return m.createElement(O._20, {
                        margin: {
                            top: 1
                        }
                    }, m.createElement(b.a, {
                        message: Object(f.d)("You must be logged in to update your settings.", "PlatformNotificationSettings")
                    }));
                    var e = m.createElement(O._20, {
                        background: O.m.Alt2,
                        borderBottom: !0
                    }, m.createElement(O.U, {
                        onClick: this.toggleCollapse,
                        alpha: !0
                    }, m.createElement(O.W, {
                        display: O.I.Flex,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, m.createElement(O.W, {
                        className: "platform-notification-settings__header",
                        flexGrow: 0,
                        "data-test-selector": "collapsible-header"
                    }, m.createElement(O._24, {
                        "data-test-selector": "display-name",
                        fontSize: O.M.Size5,
                        color: O.F.Alt2,
                        bold: !0
                    }, this.props.displayName)), m.createElement(O.W, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, m.createElement(O._24, {
                        fontSize: O.M.Size5,
                        color: O.F.Alt2
                    }, this.getSettingTurnedOnMessage())), m.createElement(O.W, {
                        className: this.state.collapsed ? "platform-notification-settings--collapse" : "platform-notification-settings--expand",
                        flexGrow: 0,
                        flexShrink: 1,
                        display: O.I.Flex,
                        justifyContent: O.V.Center
                    }, m.createElement(O._11, {
                        asset: O._12.AngleRight,
                        type: O._13.Alt2
                    })))));
                    return this.state.collapsed ? m.createElement(O._20, null, e) : m.createElement(O._20, null, e, m.createElement(O._20, {
                        padding: 2,
                        borderBottom: !0
                    }, m.createElement(O.W, {
                        padding: {
                            bottom: 1
                        }
                    }, m.createElement(O._24, {
                        "data-test-selector": "description",
                        fontSize: O.M.Size5,
                        color: O.F.Alt2
                    }, this.props.description)), m.createElement(O._20, {
                        display: O.I.Flex,
                        margin: {
                            y: .5
                        },
                        borderBottom: !0
                    }, m.createElement(O.W, {
                        className: "platform-notification-settings__all",
                        display: O.I.Flex,
                        padding: {
                            bottom: 1,
                            right: 5
                        },
                        justifyContent: O.V.Center,
                        flexGrow: 1,
                        flexWrap: O.L.NoWrap
                    }, m.createElement(O.W, {
                        className: "platform-notification-settings__all-body",
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, m.createElement(O._24, {
                        fontSize: O.M.Size4,
                        color: O.F.Alt,
                        "data-test-selector": "explanation"
                    }, this.props.explanation)), m.createElement(O.W, {
                        display: O.I.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, m.createElement(O.W, {
                        margin: {
                            right: 1
                        }
                    }, m.createElement(O._31, {
                        "data-test-selector": "all-toggle",
                        checked: this.getGlobalStateForPlatform(),
                        onChange: this.toggleAll
                    })), m.createElement(O.W, {
                        padding: {
                            x: 1
                        },
                        "data-test-selector": "saved-selector",
                        className: this.getDisplaySaved("ALL") ? "platform-notification-settings__saved" : "platform-notification-settings__saved--hide"
                    }, m.createElement(O._24, {
                        fontSize: O.M.Size5,
                        color: O.F.Link
                    }, Object(f.d)("Saved", "PlatformNotificationSettings")))))), m.createElement(O.W, {
                        className: "platform-notification-settings__toggle-container",
                        display: O.I.Flex,
                        flexDirection: O.K.Column,
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
                        r && e.push(m.createElement(ot, {
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
            }(m.Component),
            dt = Object(c.d)(Object(v.d)("PlatformNotificationSettings"), Object(oe.a)(lt, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network"
                    }
                }
            }), Object(oe.a)(st, {
                name: "setNotificationSetting"
            }))(ut),
            pt = (n("nq6q"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return g.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    var e = "" !== location.search ? Ve.parse(location.search) : {},
                        t = !!e["open-advanced"] && "true" === e["open-advanced"];
                    return m.createElement(O._20, {
                        className: "notification-settings__body",
                        borderRight: !0,
                        borderLeft: !0,
                        borderTop: !0
                    }, m.createElement(O._20, {
                        background: O.m.Alt,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, m.createElement(O.W, {
                        margin: {
                            bottom: .5
                        }
                    }, m.createElement(O._24, {
                        fontSize: O.M.Size3,
                        color: O.F.Alt
                    }, Object(f.d)("Notifications", "SettingsNotificationsPage"))), m.createElement(O.W, null, m.createElement(O._24, {
                        fontSize: O.M.Size5,
                        color: O.F.Alt2
                    }, Object(f.d)("Get the notifications you care about, where you want to see them.", "SettingsNotificationsPage")))), m.createElement(dt, {
                        startCollapsed: !1,
                        platformName: K.onsite,
                        displayName: Object(f.d)("On Twitch", "SettingsNotificationsPage"),
                        description: Object(f.d)("We'll always keep you informed on important updates to Twitch and your account.", "SettingsNotificationsPage"),
                        explanation: Object(f.d)("Send me notifications on Twitch about", "SettingsNotificationsPage"),
                        key: "onsite",
                        extraSettings: this.renderBrowserPushNotifications()
                    }), m.createElement(dt, {
                        startCollapsed: !0,
                        platformName: K.email,
                        displayName: Object(f.d)("By Email", "SettingsNotificationsPage"),
                        description: Object(f.d)("Receive important notifications through email. You may receive additional emails about features and content on Twitch. You can turn off specific emails using the unsubscribe link included in each message.", "SettingsNotificationsPage"),
                        explanation: Object(f.d)("Send me emails about", "SettingsNotificationsPage"),
                        key: "email"
                    }), m.createElement(dt, {
                        platformName: K.push,
                        startCollapsed: !0,
                        displayName: Object(f.d)("On Mobile", "SettingsNotificationsPage"),
                        description: Object(f.d)("Get Twitch updates on the go. Receive notifications right on your phone's home screen.", "SettingsNotificationsPage"),
                        explanation: Object(f.d)("Send me push notifications", "SettingsNotificationsPage"),
                        key: "push"
                    }), m.createElement(et, {
                        startCollapsed: !t
                    }))
                }, t.prototype.renderBrowserPushNotifications = function() {
                    return f.b.get(qe.b, !1) && Object(Ge.a)() && !Object(Qe.a)() ? m.createElement(at, null) : null
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t = g.__decorate([Object(v.d)("SettingsNotificationsPage", {
                    destination: E.a.NotificationSettingsPage
                }), Object(_.a)({
                    location: C.PageviewLocation.SettingsPage
                })], t)
            }(m.Component)),
            gt = n("S1vB"),
            mt = n("cumT"),
            ht = function(e) {
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
                return g.__extends(t, e), t.prototype.render = function() {
                    return f.a.buildType === k.a.Production ? null : this.props.data.currentUser && this.props.data.requestInfo ? this.props.data.currentUser.hasPrime ? m.createElement("div", null, m.createElement(P, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    })) : Object(gt.a)(this.props.data.requestInfo.countryCode) ? (window.location.replace("https://twitch.amazon.com/prime?ref_=sm_w_tsp_p_t"), null) : m.createElement(h.a, {
                        to: "/settings/turbo"
                    }) : null
                }, t = g.__decorate([Object(v.d)("SettingsPrimePage", {
                    autoReportInteractive: !0,
                    destination: E.a.SettingsPrime
                }), Object(_.a)({
                    location: C.PageviewLocation.SettingsPage
                }), Object(oe.a)(mt)], t)
            }(m.Component),
            ft = function() {
                return m.createElement(M, {
                    label: Object(f.d)("Disable Your Twitch Account", "DisableAccountLink"),
                    orientation: O.O.Horizontal
                }, Object(f.d)("If you want to disable your Twitch account, you can do so from the <x:link>Disable Account</x:link> page.", {
                    "x:link": function(e) {
                        return m.createElement("a", {
                            key: "disable-account-link",
                            href: "https://www.twitch.tv/user/disable_account",
                            "data-a-target": "disable-account-link"
                        }, e)
                    }
                }, "DisableAccountLink"))
            },
            bt = n("x9n8"),
            vt = (n("eppJ"), n("zwbd")),
            St = function(e) {
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
                return g.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive(1)
                }, t.prototype.render = function() {
                    var e = this.props.data && this.props.data.currentUser,
                        t = m.createElement(O._4, {
                            height: 140,
                            width: 140
                        });
                    return e && e.profileImageURL && (t = m.createElement(v.b, {
                        src: e.profileImageURL,
                        alt: Object(f.d)("Profile Picture", "ProfileImageSetting"),
                        className: "profile-image-setting__current-image"
                    })), m.createElement(O.W, {
                        className: "profile-image-setting"
                    }, m.createElement(O.W, {
                        display: O.I.Flex,
                        flexDirection: O.K.Row
                    }, m.createElement(O.W, {
                        margin: {
                            right: 2
                        }
                    }, t), m.createElement(O.W, {
                        margin: {
                            y: "auto"
                        }
                    }, m.createElement(O.u, {
                        ariaLabel: Object(f.d)("Update Profile Picture", "ProfileImageSetting"),
                        onClick: this.openModal,
                        "data-test-selector": "profile-upload-button"
                    }, m.createElement(O.W, {
                        padding: {
                            x: 1
                        }
                    }, Object(f.d)("Update", "ProfileImageSetting"))), m.createElement(L, {
                        text: Object(f.d)("File format: JPEG, PNG, GIF (max size 256x256, 10MB)", "ProfileImageSetting")
                    }))))
                }, t
            }(m.Component),
            yt = Object(ae.compose)(Object(v.d)("ProfileImageSetting"), Object(oe.a)(vt))(St),
            _t = Object(l.b)(null, function(e) {
                return Object(c.b)({
                    showModal: we.d
                }, e)
            })(yt),
            kt = function(e) {
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
                return g.__extends(t, e), t.prototype.render = function() {
                    return f.a.buildType === k.a.Production ? null : m.createElement("div", null, m.createElement(r, {
                        title: Object(f.d)("Profile Picture", "SettingsProfilePage")
                    }), m.createElement(_t, null), m.createElement(r, {
                        title: Object(f.d)("Profile Settings", "SettingsProfilePage"),
                        description: Object(f.d)("Change identifying details for your account", "SettingsProfilePage")
                    }), m.createElement(r, {
                        title: Object(f.d)("Disabling Your Twitch Account", "SettingsProfilePage"),
                        description: Object(f.d)("Completely deactivate your account", "SettingsProfilePage")
                    }), m.createElement(ft, null), m.createElement(P, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    }))
                }, t = g.__decorate([Object(v.d)("SettingsProfilePage", {
                    autoReportInteractive: !0,
                    destination: E.a.SettingsProfile
                }), Object(_.a)({
                    location: C.PageviewLocation.SettingsPage
                })], t)
            }(m.Component),
            Et = "/v5/whispers/settings",
            Ct = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: !1,
                        loading: !0,
                        updating: !1
                    }, t.onToggle = function(e) {
                        return g.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return g.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.setState({
                                            updating: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, x.a.post(Et, {
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
                return g.__extends(t, e), t.prototype.componentWillMount = function() {
                    return g.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return g.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, x.a.get(Et)];
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
                    return m.createElement(J, {
                        id: "settings-security-page-block-whispers",
                        label: Object(f.d)("Block Whispers from Stangers", "SettingsSecurityPage"),
                        description: Object(f.d)("Block whispers from people you don't follow", "SettingsSecurityPage"),
                        checked: this.state.enabled,
                        disabled: this.state.updating,
                        error: this.state.error,
                        onChange: this.onToggle
                    })
                }, t
            }(m.Component),
            wt = n("NoSW"),
            Ot = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return g.__extends(t, e), t.prototype.render = function() {
                    return m.createElement(M, {
                        label: Object(f.d)("Two-Factor Authentication", "TwoFactorAuthenticationSetting"),
                        orientation: O.O.Horizontal,
                        error: this.props.status === ct.Error,
                        errorMessage: Object(f.d)("Sorry, something went wrong. Please try again later.", "TwoFactorAuthenticationSetting")
                    }, this.renderBody())
                }, t.prototype.renderBody = function() {
                    switch (this.props.status) {
                        case ct.Loading:
                            return this.renderLoading();
                        case ct.Error:
                            return this.renderError();
                        case ct.UnverifiedEmail:
                            return this.renderVerifyEmail();
                        case ct.CanEnable:
                            return this.renderEnableButton();
                        case ct.Enabled:
                            return this.renderDisableButton();
                        case ct.EnabledAndRequired:
                            return this.renderEnabledAndRequired();
                        default:
                            return null
                    }
                }, t.prototype.renderLoading = function() {
                    return m.createElement(O._4, null)
                }, t.prototype.renderError = function() {
                    return null
                }, t.prototype.renderVerifyEmail = function() {
                    return m.createElement(O.W, null, m.createElement(O._24, {
                        "data-a-target": "tfa-verify-email"
                    }, Object(f.d)("Just verify your email address and two-factor authentication can be enabled.", "TwoFactorAuthenticationSetting")))
                }, t.prototype.renderEnableButton = function() {
                    return m.createElement(O.W, null, m.createElement(O.u, {
                        linkTo: "https://passport.twitch.tv/register_2fa/new",
                        "data-a-target": "tfa-enable-button"
                    }, Object(f.d)("Set Up Two-Factor Authentication", "TwoFactorAuthenticationSetting")), m.createElement(L, {
                        dataTarget: "tfa-pitch-message",
                        text: Object(f.d)("It's dangerous to go alone. <x:link>Two-factor authentication</x:link> adds an extra layer of security to your Twitch account by requiring both a password and your mobile phone to login.", {
                            "x:link": function(e) {
                                return m.createElement("a", {
                                    key: "learn-more-link",
                                    href: "https://www.authy.com/learn-more",
                                    target: "_blank",
                                    "data-a-target": "tfa-authy-link"
                                }, e)
                            }
                        }, "TwoFactorAuthenticationSetting")
                    }))
                }, t.prototype.renderDisableButton = function() {
                    return m.createElement(O.W, null, m.createElement(O.u, {
                        linkTo: "https://passport.twitch.tv/disable_2fa/new",
                        "data-a-target": "tfa-disable-button"
                    }, Object(f.d)("Disable two-factor authentication", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                }, t.prototype.renderEnabledAndRequired = function() {
                    return m.createElement(O.W, null, m.createElement(O._24, {
                        "data-a-target": "tfa-required-message"
                    }, Object(f.d)("You must have two-factor authentication enabled.", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                }, t.prototype.renderEnabledMessage = function() {
                    return m.createElement(L, {
                        dataTarget: "tfa-successful-message",
                        text: Object(f.d)("Woohoo! Two-factor authentication is enabled! To reset or change your phone, visit the Authy <x:link>phone reset form</x:link>.", {
                            "x:link": function(e) {
                                return m.createElement("a", {
                                    key: "phone-reset-link",
                                    href: "https://www.authy.com/phones/reset",
                                    "data-a-target": "tfa-authy-reset"
                                }, e)
                            }
                        }, "TwoFactorAuthenticationSetting")
                    })
                }, t
            }(m.Component),
            Nt = n("Q6se");
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.UnverifiedEmail = 2] = "UnverifiedEmail", e[e.CanEnable = 3] = "CanEnable", e[e.Enabled = 4] = "Enabled", e[e.EnabledAndRequired = 5] = "EnabledAndRequired"
        }(ct || (ct = {}));
        var Pt, xt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        status: ct.Loading,
                        restLoading: !0,
                        restError: !1
                    }, t
                }
                return g.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTwoFactorEnabled()
                }, t.prototype.componentDidUpdate = function(e, t) {
                    t.status === ct.Loading && this.state.status !== ct.Loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.status !== ct.Loading || e.data.loading || this.reconcileStatus(e)
                }, t.prototype.render = function() {
                    return m.createElement(Ot, {
                        status: this.state.status
                    })
                }, t.prototype.fetchTwoFactorEnabled = function() {
                    return g.__awaiter(this, void 0, void 0, function() {
                        var e, t, n = this;
                        return g.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    e = "/api/users/auth_validator?check_2fa=true&onsite=1", i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, x.a.get(e, {
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
                    e.data.loading || this.state.restLoading ? t = ct.Loading : !e.data.currentUser || this.state.restError ? t = ct.Error : this.state.twoFactorEnabled || e.data.currentUser.isEmailVerified ? !this.state.twoFactorEnabled && e.data.currentUser.isEmailVerified ? t = ct.CanEnable : this.state.twoFactorEnabled && !this.userRoleRequiresTwoFactor(e) ? t = ct.Enabled : this.state.twoFactorEnabled && this.userRoleRequiresTwoFactor(e) && (t = ct.EnabledAndRequired) : t = ct.UnverifiedEmail, t && this.setState({
                        status: t
                    })
                }, t.prototype.userRoleRequiresTwoFactor = function(e) {
                    var t = e.data.currentUser && e.data.currentUser.roles;
                    return !(!t || !(t.isGlobalMod || t.isSiteAdmin || t.isStaff))
                }, t
            }(m.Component),
            jt = Object(ae.compose)(Object(wt.a)("TwoFactorAuthenticationSetting"), Object(oe.a)(Nt))(xt),
            Tt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return g.__extends(t, e), t.prototype.render = function() {
                    return f.a.buildType === k.a.Production ? null : m.createElement("div", null, m.createElement(r, {
                        title: Object(f.d)("Security", "SettingsSecurityPage"),
                        description: Object(f.d)("Keep your account safe and sound", "SettingsSecurityPage")
                    }), m.createElement(o, null), m.createElement(jt, null), m.createElement(r, {
                        title: Object(f.d)("Privacy", "SettingsSecurityPage"),
                        description: Object(f.d)("Choose who can message you", "SettingsSecurityPage")
                    }), m.createElement(Ct, null))
                }, t
            }(m.Component),
            Ut = Object(ae.compose)(Object(v.d)("SettingsSecurityPage", {
                autoReportInteractive: !0,
                destination: E.a.SettingsSecurity
            }), Object(_.a)({
                location: C.PageviewLocation.SettingsPage
            }))(Tt),
            It = n("CkX/");
        ! function(e) {
            e.Channel = "channel", e.Notifications = "notifications", e.Profile = "profile", e.Security = "security", e.Connections = "connections", e.Prime = "prime", e.Turbo = "turbo"
        }(Pt || (Pt = {}));
        var At = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.isPrimeVisible = function() {
                        return t.props.data.requestInfo && t.props.data.currentUser && (Object(gt.a)(t.props.data.requestInfo.countryCode) || t.props.data.currentUser.hasPrime)
                    }, t
                }
                return g.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data.currentUser || !this.props.data.requestInfo) return null;
                    var e = null;
                    this.isPrimeVisible() && (e = m.createElement(O._21, {
                        linkTo: "/settings/prime",
                        active: this.props.tabName === Pt.Prime,
                        "data-test-selector": "test-settings-prime-tab",
                        "data-a-target": "prime-tab"
                    }, Object(f.d)("Twitch Prime", "SettingsTabs")));
                    var t = null;
                    return !this.props.data.currentUser.hasTurbo && this.isPrimeVisible() || (t = m.createElement(O._21, {
                        linkTo: "/settings/turbo",
                        active: this.props.tabName === Pt.Turbo,
                        "data-test-selector": "test-settings-turbo-tab",
                        "data-a-target": "turbo-tab"
                    }, Object(f.d)("Twitch Turbo", "SettingsTabs"))), m.createElement(O.W, {
                        className: "settings-tabs",
                        padding: {
                            x: Wt,
                            top: Wt
                        }
                    }, m.createElement(O.W, {
                        margin: {
                            bottom: 1
                        }
                    }, m.createElement(O._24, {
                        type: O._29.H2
                    }, Object(f.d)("Settings", "SettingsTabs"))), m.createElement(O.W, null, m.createElement(O._22, null, m.createElement(O._21, {
                        linkTo: "/settings/profile",
                        active: this.props.tabName === Pt.Profile,
                        "data-a-target": "profile-tab"
                    }, Object(f.d)("Profile", "SettingsTabs")), e, t, m.createElement(O._21, {
                        linkTo: "/settings/channel",
                        active: this.props.tabName === Pt.Channel,
                        "data-a-target": "channel-tab"
                    }, Object(f.d)("Channel and Videos", "SettingsTabs")), m.createElement(O._21, {
                        linkTo: "/settings/security",
                        active: this.props.tabName === Pt.Security,
                        "data-a-target": "security-tab"
                    }, Object(f.d)("Security and Privacy", "SettingsTabs")), m.createElement(O._21, {
                        linkTo: "/settings/notifications",
                        active: this.props.tabName === Pt.Notifications,
                        "data-a-target": "notifications-tab"
                    }, Object(f.d)("Notifications", "SettingsTab")), m.createElement(O._21, {
                        linkTo: "/settings/connections",
                        active: this.props.tabName === Pt.Connections,
                        "data-a-target": "connections-tab"
                    }, Object(f.d)("Connections", "SettingsTabs")), m.createElement(O._21, {
                        linkTo: "/subscriptions",
                        active: !1,
                        "data-a-target": "subscriptions-tab"
                    }, Object(f.d)("Subscriptions", "SettingsTabs")))))
                }, t
            }(m.Component),
            Ft = Object(ae.compose)(Object(v.d)("SettingsTabs"), Object(oe.a)(It))(At),
            Dt = function() {
                return m.createElement(b.a, {
                    message: Object(f.d)("Error loading user data. Please try again later.", "SettingsPageError")
                })
            },
            Ht = n("hRPz"),
            Rt = function(e) {
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
                return g.__extends(t, e), t.prototype.render = function() {
                    return f.a.buildType === k.a.Production ? null : this.props.data.loading && !this.props.data.currentUser ? m.createElement(O._0, {
                        fillContent: !0
                    }) : this.props.data.loading || this.props.data.currentUser ? this.props.data.currentUser && !this.props.data.currentUser.hasTurbo ? this.props.data.currentUser.hasPrime || Object(gt.a)(this.props.data.requestInfo.countryCode) ? m.createElement(h.a, {
                        to: "/settings/prime"
                    }) : (window.location.replace("https://www.twitch.tv/products/turbo/ticket"), null) : m.createElement("div", null, m.createElement(P, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    })) : m.createElement(Dt, null)
                }, t = g.__decorate([Object(v.d)("SettingsTurboPage", {
                    autoReportInteractive: !0,
                    destination: E.a.SettingsTurbo
                }), Object(_.a)({
                    location: C.PageviewLocation.SettingsPage
                }), Object(oe.a)(Ht)], t)
            }(m.Component),
            Wt = 3,
            Lt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.redirectToProfilePage = function() {
                        return m.createElement(h.a, {
                            to: "/settings/profile"
                        })
                    }, t
                }
                return g.__extends(t, e), t.prototype.render = function() {
                    return this.props.isLoggedIn ? m.createElement(O.W, {
                        padding: {
                            x: Wt
                        },
                        fullHeight: !0,
                        fullWidth: !0,
                        display: O.I.Flex,
                        flexDirection: O.K.Column,
                        flexWrap: O.L.NoWrap
                    }, m.createElement(S.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), m.createElement(y.a, null, m.createElement(Ft, {
                        tabName: this.props.match.params.tab
                    })), m.createElement(O.W, {
                        padding: {
                            y: 2
                        }
                    }, m.createElement(h.d, null, m.createElement(h.b, {
                        path: "/settings/profile",
                        component: kt
                    }), m.createElement(h.b, {
                        path: "/settings/prime",
                        component: ht
                    }), m.createElement(h.b, {
                        path: "/settings/turbo",
                        component: Rt
                    }), m.createElement(h.b, {
                        path: "/settings/channel",
                        component: Be
                    }), m.createElement(h.b, {
                        path: "/settings/security",
                        component: Ut
                    }), m.createElement(h.b, {
                        path: "/settings/notifications",
                        component: pt
                    }), m.createElement(h.b, {
                        path: "/settings/connections",
                        component: ze
                    }), m.createElement(h.b, {
                        path: "/settings",
                        render: this.redirectToProfilePage
                    })))) : (this.props.login(), m.createElement(b.a, {
                        message: Object(f.d)("You must be logged in to view this page", "SettingsRoot")
                    }))
                }, t = g.__decorate([Object(v.d)("SettingsRoot", {
                    autoReportInteractive: !0
                })], t)
            }(m.Component),
            Mt = Object(h.e)(Lt),
            Bt = Object(l.b)(function(e) {
                return {
                    isLoggedIn: Object(p.d)(e)
                }
            }, function(e) {
                return Object(c.b)({
                    login: function() {
                        return Object(d.f)(u.a.SettingsPage)
                    }
                }, e)
            })(Mt);
        n.d(t, "SettingsRoot", function() {
            return Bt
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
        var r, a = n("TToO"),
            o = n("6sO2"),
            s = n("oIkB"),
            l = n("Aj/L");
        ! function(e) {
            e.NewSession = "new-session", e.ClearSession = "clear-session"
        }(r || (r = {}));
        var c = o.n.logger.withCategory("host-service-worker-messenger"),
            u = function() {
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
            d = "browserPushNotificationsEnabled",
            p = function() {
                function e() {}
                return e.exists = function() {
                    return null !== o.n.storage.getOptional(d)
                }, e.isEnabled = function() {
                    return o.n.storage.get(d, !1)
                }, e.setEnabled = function() {
                    o.n.storage.set(d, !0)
                }, e.setDisabled = function() {
                    o.n.storage.set(d, !1)
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
                    return a.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, r;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return Object(g.a)() ? (v.debug("permissions have been denied. nothing to do here."), [2]) : [4, i()];
                                case 1:
                                    return a.sent(), e = Object(l.d)(o.n.store.getState()), [4, this.hasPushSubscription()];
                                case 2:
                                    return t = a.sent(), u.syncSession(), t ? (n = p.exists() && !p.isEnabled(), r = !e, n || r ? [4, this.unsubscribe()] : [3, 4]) : [3, 5];
                                case 3:
                                    a.sent(), a.label = 4;
                                case 4:
                                    return [3, 7];
                                case 5:
                                    return l.d ? !Object(g.b)() || p.exists() && !p.isEnabled() ? [3, 7] : [4, this.subscribe()] : [3, 7];
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
                                        allowed: Object(g.b)(),
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
                        var e, t, n, r, c, u;
                        return a.__generator(this, function(d) {
                            switch (d.label) {
                                case 0:
                                    if (Object(g.a)()) throw new Error("notification permission is denied");
                                    if (!Object(l.d)(o.n.store.getState())) throw new Error("cannot be enabled logged out");
                                    if (!(e = o.b.get("notification_app_server_public_key", ""))) throw new Error("application server public key is blank");
                                    return [4, i()];
                                case 1:
                                    return t = d.sent(), [4, this.getPushSubscription()];
                                case 2:
                                    return (n = d.sent()) ? [3, 4] : (r = function(e) {
                                        for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), n = atob(t), i = new Uint8Array(n.length), r = 0; r < n.length; ++r) i[r] = n.charCodeAt(r);
                                        return i
                                    }(e), [4, t.pushManager.subscribe({
                                        userVisibleOnly: !0,
                                        applicationServerKey: r
                                    })]);
                                case 3:
                                    n = d.sent(), d.label = 4;
                                case 4:
                                    if (!(c = n.toJSON()).endpoint) throw new Error("push subscription 'endpoint' missing");
                                    if (!c.keys) throw new Error("push subscription 'keys' missing");
                                    if (!c.keys.auth) throw new Error("push subscription 'keys.auth' missing");
                                    if (!c.keys.p256dh) throw new Error("push subscription 'keys.p256dh' missing");
                                    return u = Object(s.a)({
                                        endpoint: c.endpoint,
                                        auth: c.keys.auth,
                                        p256DH: c.keys.p256dh
                                    }), [4, o.n.apollo.client.mutate(a.__assign({
                                        mutation: b
                                    }, u))];
                                case 5:
                                    return d.sent(), [2]
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
    WbwR: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("U7vG"),
            a = n("6sO2"),
            o = n("OOv5"),
            s = n("LBNC"),
            l = "browser_notifications_launch",
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.logger = a.n.logger.withCategory("browser-push-notifications"), t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (!a.b.get(l, !1)) return [2];
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
            }(r.Component);
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
                        type: a._3.Success
                    };
                case o.UnexpectedError:
                    return {
                        message: Object(r.d)("Unexpected error, please try again.", "Profile Edit"),
                        type: a._3.Alert
                    };
                case o.BadSizeError:
                    return {
                        message: Object(r.d)("Image might exceed 10MB.", "Profile Edit"),
                        type: a._3.Alert
                    };
                case o.NonImageError:
                    return {
                        message: Object(r.d)("You must upload an image.", "Profile Edit"),
                        type: a._3.Alert
                    };
                case o.WrongFormatError:
                    return {
                        message: Object(r.d)("You must select a valid image type.", "Profile Edit"),
                        type: a._3.Alert
                    };
                case o.TimeoutError:
                    return {
                        message: Object(r.d)("Upload timed-out. Please try again.", "Profile Edit"),
                        type: a._3.Alert
                    };
                case o.Uploading:
                    return {
                        message: Object(r.d)("Uploading....", "Profile Edit"),
                        type: a._3.Brand
                    };
                case o.ImageNotSelected:
                    return {
                        message: Object(r.d)("Select a image first.", "Profile Edit"),
                        type: a._3.Alert
                    };
                default:
                    return {
                        message: Object(r.d)("Please try again.", "Profile Edit"),
                        type: a._3.Alert
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
//# sourceMappingURL=pages.settings-e0c29534b1681f182d2323fd7d709547.js.map