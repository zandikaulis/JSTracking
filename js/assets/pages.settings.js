webpackJsonp([50], {
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
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "category"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "platformName"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "settingState"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "isEnabled"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
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
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var i = n("TToO"),
            a = n("6sO2"),
            o = n("Aj/L"),
            r = "application/json; charset=UTF-8",
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
                        var a, o;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), a = t.headers ? t.headers["Content-Type"] : void 0, t.body = this.serialize(t.body, a), [4, this._fetch(e, t)];
                                case 1:
                                    return o = i.sent(), [4, this.constructLegacyAPIResponse(o)];
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
                    return t === r ? JSON.stringify(e) : e
                }, e.getDefaultHeaders = function(e, t) {
                    var n = a.n.store.getState(),
                        i = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": a.n.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = r);
                    var s = Object(o.c)(n);
                    return s && (i.Authorization = "OAuth " + s.authToken, s.legacyCSRFToken && (i["Twitch-Api-Token"] = s.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        i[e] && delete i[e]
                    }), i
                }, e
            }()
    },
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "disableNotifications"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
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
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "totalCount"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "cursor"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
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
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "id"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "displayName"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
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
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "login"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
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
                                                                alias: null,
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "totalCount"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: null
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                alias: null,
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
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "isEnabled"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        alias: null,
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
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "hasNextPage"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
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
    JBcW: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), t.c = function(e) {
            a.m.track(o.SpadeEventType.BrowserPushNotificationPrompt, e)
        }, t.b = function(e) {
            a.m.track(o.SpadeEventType.BrowserPushNotificationDisable, e)
        };
        var i, a = n("6sO2"),
            o = n("vH/s");
        (i || (i = {})).Settings = "settings"
    },
    K4jf: function(e, t, n) {
        "use strict";

        function i(e) {
            return d.createElement(E.V, {
                margin: {
                    top: 2,
                    bottom: 4
                }
            }, d.createElement(E._23, {
                type: E._28.H3,
                fontSize: E.L.Size2
            }, e.title), d.createElement(E.V, {
                margin: {
                    top: 1
                }
            }, d.createElement(E._23, {
                color: E.F.Alt2
            }, e.description)))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, o = n("RH2O"),
            r = n("2KeS"),
            s = n("+xm8"),
            l = n("f2i/"),
            c = n("Aj/L"),
            u = n("TToO"),
            d = n("U7vG"),
            p = n("CIox"),
            g = n("6sO2"),
            m = n("yWCw"),
            f = n("CSlQ"),
            h = n("eXld"),
            b = n("2aoH"),
            v = n("j7/Y"),
            S = n("Ejve"),
            y = n("w9tK"),
            k = n("vH/s"),
            _ = n("H4lr"),
            E = n("Odds");
        ! function(e) {
            e[e.NoChanges = 0] = "NoChanges", e[e.DirtyChanges = 1] = "DirtyChanges", e[e.Working = 2] = "Working", e[e.Success = 3] = "Success", e[e.Error = 4] = "Error"
        }(a || (a = {}));
        var w, N = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    var e = E.y.Default,
                        t = Object(g.d)("Save Changes", "SaveSettingsFooter"),
                        n = E.z.Default,
                        i = !1;
                    return this.props.status === a.Working ? e = E.y.Loading : this.props.status === a.Success ? e = E.y.Success : this.props.status === a.Error ? (n = E.z.Alert, t = Object(g.d)("Failed to save settings. Try again.", "SaveSettingsFooter")) : this.props.status === a.NoChanges && (i = !0), d.createElement(_.a, null, d.createElement(E._19, {
                        borderTop: !0,
                        display: E.H.Flex,
                        alignItems: E.c.Center,
                        justifyContent: E.U.Center,
                        padding: {
                            y: 2
                        },
                        margin: {
                            x: ge
                        }
                    }, d.createElement(E.u, {
                        disabled: i,
                        size: E.x.Large,
                        state: e,
                        type: n,
                        onClick: this.props.onClickSave,
                        "data-a-target": "save-user-settings-button"
                    }, t)))
                }, t
            }(d.Component),
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: a.NoChanges
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: a.Working
                        }, function() {})
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return g.a.buildType === S.a.Production ? null : d.createElement("div", null, d.createElement(N, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    }))
                }, t = u.__decorate([Object(f.c)("SettingsChannelPage", {
                    autoReportInteractive: !0,
                    destination: y.a.SettingsChannel
                }), Object(v.a)({
                    location: k.PageviewLocation.SettingsPage
                })], t)
            }(d.Component),
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: a.NoChanges
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: a.Working
                        }, function() {})
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return g.a.buildType === S.a.Production ? null : d.createElement("div", null, d.createElement(N, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    }))
                }, t = u.__decorate([Object(f.c)("SettingsConnectionsPage", {
                    autoReportInteractive: !0,
                    destination: y.a.SettingsConnections
                }), Object(v.a)({
                    location: k.PageviewLocation.SettingsPage
                })], t)
            }(d.Component),
            P = n("WbwR"),
            x = n("LBNC"),
            T = n("UbVv"),
            j = n("zCIC"),
            F = n("7vx8"),
            A = n("oIkB"),
            V = n("F8kA"),
            D = (n("hPJb"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.userId, t.props.isEnabled)
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return d.createElement(E._19, {
                        className: "advanced-notification-settings-toggle",
                        display: E.H.Flex,
                        justifyContent: E.U.Between,
                        background: E.m.Base,
                        padding: {
                            x: 5,
                            y: 1
                        },
                        borderBottom: !0
                    }, d.createElement(E.V, {
                        margin: {
                            left: 5
                        },
                        display: E.H.Flex,
                        flexGrow: 1,
                        alignItems: E.c.Center,
                        flexWrap: E.K.NoWrap
                    }, d.createElement(E.V, {
                        display: E.H.Flex,
                        flexGrow: 1,
                        flexWrap: E.K.NoWrap
                    }, d.createElement(E.V, {
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, d.createElement(E.T, {
                        linkTo: "/" + this.props.login
                    }, d.createElement(E.l, {
                        imageSrc: this.props.thumbnail,
                        imageAlt: this.props.text,
                        size: 40
                    }))), d.createElement(E.V, {
                        flexGrow: 1,
                        display: E.H.Flex,
                        flexDirection: E.J.Column
                    }, d.createElement(E._23, {
                        fontSize: E.L.Size5
                    }, d.createElement(V.a, {
                        to: "/" + this.props.login
                    }, this.props.text)), d.createElement(E._23, {
                        type: E._28.Span,
                        color: E.F.Alt2
                    }, this.props.description))), d.createElement(E.V, {
                        display: E.H.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, d.createElement(E.V, {
                        margin: {
                            right: 1
                        }
                    }, d.createElement(E._30, {
                        checked: this.props.isEnabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector",
                        id: this.props.userId
                    })), d.createElement(E.V, {
                        className: this.props.saved ? "advanced-notification-settings-toggle__saved" : "advanced-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, d.createElement(E._23, {
                        fontSize: E.L.Size5,
                        color: E.F.Link
                    }, Object(g.d)("Saved", "AdvancedNotificationSettingsToggle"))))))
                }, t
            }(d.Component)),
            L = n("AQCV"),
            U = (n("t4xU"), n("EaRL")),
            R = function(e) {
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
                        return u.__awaiter(t, void 0, void 0, function() {
                            var t, i, a;
                            return u.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setAdvancedNotificationSetting ? (t = u.__assign({}, Object(A.a)({
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
                                        return i = o.sent(), a = function(t) {
                                            for (var n = 0, a = t.currentUser.follows.edges; n < a.length; n++) {
                                                var o = a[n];
                                                o.node.id === e && (o.notificationSettings.isEnabled = !i.data.followUser.follow.disableNotifications)
                                            }
                                            return t
                                        }, Object(A.d)(U, {
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
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return d.createElement(E._19, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, d.createElement(E.Z, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return d.createElement(m.a, {
                        message: Object(g.d)("Error loading data.", "AdvancedNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return d.createElement(E._19, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, d.createElement(m.a, {
                        message: Object(g.d)("You must be logged in to update your settings", "AdvancedNotificationSettings")
                    }));
                    var e = Object(g.d)("{followCount, plural, one {You follow # channel} other {You follow # channels}}", {
                            followCount: this.props.data.currentUser.follows.totalCount
                        }, "AdvancedNotificationSettings"),
                        t = d.createElement(E._19, {
                            background: E.m.Alt2,
                            borderBottom: !0
                        }, d.createElement(E.T, {
                            onClick: this.toggleCollapse,
                            alpha: !0,
                            "data-test-selector": "header-selector"
                        }, d.createElement(E.V, {
                            display: E.H.Flex,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, d.createElement(E.V, {
                            className: "advanced-notification-settings__header",
                            flexGrow: 0
                        }, d.createElement(E._23, {
                            fontSize: E.L.Size5,
                            color: E.F.Alt2,
                            bold: !0
                        }, Object(g.d)("Advanced", "AdvancedNotificationSettings"))), d.createElement(E.V, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, d.createElement(E._23, {
                            "data-test-selector": "description-selector",
                            fontSize: E.L.Size5,
                            color: E.F.Alt2
                        }, e)), d.createElement(E.V, {
                            className: this.state.collapsed ? "advanced-notification-settings--collapse" : "advanced-notification-settings--expand",
                            flexGrow: 0,
                            flexShrink: 1,
                            display: E.H.Flex,
                            justifyContent: E.U.Center
                        }, d.createElement(E._10, {
                            asset: E._11.AngleRight,
                            type: E._12.Alt2
                        }))))),
                        n = !this.props.data.loading && !this.props.data.error && !!this.props.data.currentUser.follows.pageInfo.hasNextPage;
                    return this.props.data.currentUser.follows.totalCount > 0 ? this.state.collapsed ? d.createElement(E._19, null, t) : d.createElement(E._19, null, t, d.createElement(E._19, {
                        borderBottom: !0,
                        padding: 2
                    }, d.createElement(E.V, {
                        padding: {
                            bottom: 1
                        }
                    }, d.createElement(E._23, {
                        fontSize: E.L.Size5,
                        color: E.F.Alt2
                    }, Object(g.d)("Manage which channels you receive notifications for.", "AdvancedNotificationSettings"))), d.createElement(E.V, {
                        padding: {
                            bottom: 1
                        }
                    }, d.createElement(E._23, {
                        fontSize: E.L.Size4,
                        color: E.F.Alt
                    }, e)), d.createElement(E._19, {
                        className: "advanced-notification-settings__toggle-container",
                        borderTop: !0,
                        borderLeft: !0,
                        borderRight: !0,
                        margin: {
                            bottom: .5
                        }
                    }, this.renderToggles(), d.createElement(j.a, {
                        loadMore: this.props.loadMore,
                        enabled: n,
                        pixelThreshold: 200
                    })))) : null
                }, t.prototype.renderToggles = function() {
                    if (this.props.data && (!this.props.data.loading || this.props.data.currentUser)) {
                        for (var e = [], t = 0, n = this.props.data.currentUser.follows.edges; t < n.length; t++) {
                            var i = n[t];
                            i.node && i.node.id && i.node.followers && e.push(d.createElement(D, {
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
            }(d.Component),
            I = Object(r.compose)(Object(F.a)(U, {
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
                                query: U,
                                variables: u.__assign({}, e.data.variables, {
                                    cursor: e.data.currentUser.follows.edges[e.data.currentUser.follows.edges.length - 1].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult;
                                    return {
                                        currentUser: u.__assign({}, n.currentUser, {
                                            follows: u.__assign({}, n.currentUser.follows, {
                                                edges: Object(A.b)(e.currentUser.follows.edges, n.currentUser.follows.edges)
                                            })
                                        })
                                    }
                                }
                            })
                        }
                    })
                }
            }), Object(F.a)(L, {
                name: "setAdvancedNotificationSetting"
            }), Object(f.c)("AdvancedNotificationSettings"))(R),
            M = n("BhyV"),
            B = n("OOv5"),
            z = n("JBcW"),
            G = (n("mVHD"), g.n.logger.withCategory("browser-push-notifications-settings")),
            W = function(e) {
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
                                        }), [4, B.a.hasPushSubscription()];
                                    case 1:
                                        if (!n.sent()) return [3, 6];
                                        n.label = 2;
                                    case 2:
                                        return n.trys.push([2, 4, , 5]), [4, B.a.userUnsubscribe(z.a.Settings)];
                                    case 3:
                                        return n.sent(), [3, 5];
                                    case 4:
                                        return e = n.sent(), G.error(e, "user unsubscribe failed"), [3, 5];
                                    case 5:
                                        return [3, 9];
                                    case 6:
                                        return n.trys.push([6, 8, , 9]), [4, B.a.userSubscribe(z.a.Settings)];
                                    case 7:
                                        return n.sent(), [3, 9];
                                    case 8:
                                        return t = n.sent(), Object(T.a)() ? (this.setState({
                                            hide: !0
                                        }), [2]) : (G.error(t, "user subscribe failed"), [3, 9]);
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
                                    return t.trys.push([0, 3, , 4]), [4, B.a.initialize()];
                                case 1:
                                    return t.sent(), [4, this.updateSubscriptionState()];
                                case 2:
                                    return t.sent(), [3, 4];
                                case 3:
                                    return e = t.sent(), G.error(e, "unexpected error initializing push manager"), this.setState({
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
                    return d.createElement(E._19, {
                        borderTop: !0,
                        padding: {
                            right: 2,
                            y: 1
                        },
                        margin: {
                            top: 1
                        },
                        "data-test-selector": "qa-browser-push-notifications-settings"
                    }, d.createElement(E._19, {
                        className: "browser-push-notification-settings",
                        padding: {
                            left: 5,
                            right: 4
                        },
                        display: E.H.Flex,
                        margin: {
                            x: 5
                        }
                    }, d.createElement(E.V, {
                        className: "browser-push-notification-settings__body",
                        display: E.H.Flex,
                        flexWrap: E.K.NoWrap,
                        flexGrow: 1
                    }, d.createElement(E.V, {
                        margin: {
                            right: 1
                        },
                        flexGrow: 1
                    }, d.createElement(E._23, {
                        fontSize: E.L.Size4,
                        color: E.F.Alt
                    }, Object(g.d)("Receive Browser Notifications for this Device", "BrowserPushNotificationsSettings")), d.createElement(E.V, {
                        padding: {
                            top: .5
                        }
                    }, d.createElement(E._23, {
                        fontSize: E.L.Size5,
                        color: E.F.Alt2
                    }, Object(g.d)("See notifications at the corner of your screen, even when you’re not on Twitch", "BrowserPushNotificationsSettings")))), d.createElement(E.V, {
                        flexShrink: 0
                    }, d.createElement(E.u, {
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
                                    return [4, B.a.hasPushSubscription()];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        hasSubscription: e
                                    }), [2]
                            }
                        })
                    })
                }, t
            }(d.Component),
            H = Object(M.compose)(Object(f.c)("BrowserPushNotificationsSettings"))(W),
            q = (n("iOZM"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.category, t.props.isEnabled)
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return d.createElement(E._19, {
                        className: "platform-notification-settings-toggle",
                        display: E.H.Flex,
                        flexWrap: E.K.NoWrap,
                        alignItems: E.c.Start,
                        background: E.m.Alt,
                        margin: {
                            top: 1,
                            bottom: .5
                        },
                        padding: {
                            right: 5
                        }
                    }, d.createElement(E.V, {
                        className: "platform-notification-settings-toggle__body",
                        display: E.H.Flex,
                        flexDirection: E.J.Column,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, d.createElement(E.V, {
                        margin: {
                            bottom: .5
                        }
                    }, d.createElement(E._23, {
                        fontSize: E.L.Size4
                    }, this.props.text)), d.createElement(E._23, {
                        fontSize: E.L.Size5,
                        color: E.F.Alt2
                    }, this.props.description)), d.createElement(E.V, {
                        display: E.H.Flex,
                        margin: {
                            top: .5
                        },
                        flexGrow: 0,
                        flexShrink: 0
                    }, d.createElement(E.V, {
                        margin: {
                            right: 1
                        }
                    }, d.createElement(E._30, {
                        checked: this.props.isEnabled,
                        disabled: this.props.disabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector"
                    })), d.createElement(E.V, {
                        className: this.props.saved ? "platform-notification-settings-toggle__saved" : "platform-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, d.createElement(E._23, {
                        fontSize: E.L.Size5,
                        color: E.F.Link
                    }, Object(g.d)("Saved", "PlatformNotificationSettingsToggle")))))
                }, t
            }(d.Component)),
            J = n("g+dK"),
            K = (n("RC0U"), n("1f5k"));
        ! function(e) {
            e.onsite = "onsite", e.email = "email", e.push = "push"
        }(w || (w = {}));
        var Y, Q = function(e) {
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
                            var t, i, a, o, r = this;
                            return u.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setNotificationSetting ? (t = n ? "off" : "on", i = u.__assign({}, Object(A.a)({
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
                                        return a = s.sent(), o = function(t) {
                                            return t.currentUser.notificationSettings = t.currentUser.notificationSettings.map(function(t) {
                                                return t.category === e && (t.platforms = t.platforms.map(function(e) {
                                                    return e.platformName === r.props.platformName && (e.isEnabled = "on" === a.data.setNotificationSetting.settingState, e.settingState = a.data.setNotificationSetting.settingState), e
                                                })), t
                                            }), t
                                        }, Object(A.d)(K, {}, o), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return d.createElement(E.V, {
                        padding: 1
                    }, d.createElement(E.Z, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return d.createElement(m.a, {
                        message: Object(g.d)("Error loading data.", "PlatformNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return d.createElement(E._19, {
                        margin: {
                            top: 1
                        }
                    }, d.createElement(m.a, {
                        message: Object(g.d)("You must be logged in to update your settings.", "PlatformNotificationSettings")
                    }));
                    var e = d.createElement(E._19, {
                        background: E.m.Alt2,
                        borderBottom: !0
                    }, d.createElement(E.T, {
                        onClick: this.toggleCollapse,
                        alpha: !0
                    }, d.createElement(E.V, {
                        display: E.H.Flex,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, d.createElement(E.V, {
                        className: "platform-notification-settings__header",
                        flexGrow: 0,
                        "data-test-selector": "collapsible-header"
                    }, d.createElement(E._23, {
                        "data-test-selector": "display-name",
                        fontSize: E.L.Size5,
                        color: E.F.Alt2,
                        bold: !0
                    }, this.props.displayName)), d.createElement(E.V, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, d.createElement(E._23, {
                        fontSize: E.L.Size5,
                        color: E.F.Alt2
                    }, this.getSettingTurnedOnMessage())), d.createElement(E.V, {
                        className: this.state.collapsed ? "platform-notification-settings--collapse" : "platform-notification-settings--expand",
                        flexGrow: 0,
                        flexShrink: 1,
                        display: E.H.Flex,
                        justifyContent: E.U.Center
                    }, d.createElement(E._10, {
                        asset: E._11.AngleRight,
                        type: E._12.Alt2
                    })))));
                    return this.state.collapsed ? d.createElement(E._19, null, e) : d.createElement(E._19, null, e, d.createElement(E._19, {
                        padding: 2,
                        borderBottom: !0
                    }, d.createElement(E.V, {
                        padding: {
                            bottom: 1
                        }
                    }, d.createElement(E._23, {
                        "data-test-selector": "description",
                        fontSize: E.L.Size5,
                        color: E.F.Alt2
                    }, this.props.description)), d.createElement(E._19, {
                        display: E.H.Flex,
                        margin: {
                            y: .5
                        },
                        borderBottom: !0
                    }, d.createElement(E.V, {
                        className: "platform-notification-settings__all",
                        display: E.H.Flex,
                        padding: {
                            bottom: 1,
                            right: 5
                        },
                        justifyContent: E.U.Center,
                        flexGrow: 1,
                        flexWrap: E.K.NoWrap
                    }, d.createElement(E.V, {
                        className: "platform-notification-settings__all-body",
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, d.createElement(E._23, {
                        fontSize: E.L.Size4,
                        color: E.F.Alt,
                        "data-test-selector": "explanation"
                    }, this.props.explanation)), d.createElement(E.V, {
                        display: E.H.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, d.createElement(E.V, {
                        margin: {
                            right: 1
                        }
                    }, d.createElement(E._30, {
                        "data-test-selector": "all-toggle",
                        checked: this.getGlobalStateForPlatform(),
                        onChange: this.toggleAll
                    })), d.createElement(E.V, {
                        padding: {
                            x: 1
                        },
                        "data-test-selector": "saved-selector",
                        className: this.getDisplaySaved("ALL") ? "platform-notification-settings__saved" : "platform-notification-settings__saved--hide"
                    }, d.createElement(E._23, {
                        fontSize: E.L.Size5,
                        color: E.F.Link
                    }, Object(g.d)("Saved", "PlatformNotificationSettings")))))), d.createElement(E.V, {
                        className: "platform-notification-settings__toggle-container",
                        display: E.H.Flex,
                        flexDirection: E.J.Column,
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
                    for (var o = 0, r = t; o < r.length; o++) {
                        var s = r[o];
                        if (s.platformName === this.props.platformName) return s
                    }
                    return null
                }, t.prototype.getSettingTurnedOnMessage = function() {
                    for (var e = 0, t = 0, n = 0, i = this.VisibleSettings; n < i.length; n++) {
                        var a = i[n],
                            o = this.getSettingByCategory(a.category);
                        o && (e++, o.isEnabled && t++)
                    }
                    return 0 !== t && this.getGlobalStateForPlatform() ? t < e ? Object(g.d)("Some notifications turned on", "PlatformNotificationSettings") : Object(g.d)("All notifications turned on", "PlatformNotificationSettings") : Object(g.d)("All notifications turned off", "PlatformNotificationSettings")
                }, t.prototype.getGlobalStateForPlatform = function() {
                    var e = this.getSettingByCategory("ALL");
                    return !!e && e.isEnabled
                }, t.prototype.renderToggles = function() {
                    for (var e = [], t = 0, n = this.VisibleSettings; t < n.length; t++) {
                        var i = n[t],
                            a = this.getSettingByCategory(i.category);
                        a && e.push(d.createElement(q, {
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
            }(d.Component),
            $ = Object(r.compose)(Object(f.c)("PlatformNotificationSettings"), Object(F.a)(K, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network"
                    }
                }
            }), Object(F.a)(J, {
                name: "setNotificationSetting"
            }))(Q),
            X = (n("nq6q"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    return d.createElement(E._19, {
                        className: "notification-settings__body",
                        borderRight: !0,
                        borderLeft: !0,
                        borderTop: !0
                    }, d.createElement(E._19, {
                        background: E.m.Alt,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, d.createElement(E.V, {
                        margin: {
                            bottom: .5
                        }
                    }, d.createElement(E._23, {
                        fontSize: E.L.Size3,
                        color: E.F.Alt
                    }, Object(g.d)("Notifications", "SettingsNotificationsPage"))), d.createElement(E.V, null, d.createElement(E._23, {
                        fontSize: E.L.Size5,
                        color: E.F.Alt2
                    }, Object(g.d)("Get the notifications you care about, where you want to see them.", "SettingsNotificationsPage")))), d.createElement($, {
                        startCollapsed: !1,
                        platformName: w.onsite,
                        displayName: Object(g.d)("On Twitch", "SettingsNotificationsPage"),
                        description: Object(g.d)("We'll always keep you informed on important updates to Twitch and your account.", "SettingsNotificationsPage"),
                        explanation: Object(g.d)("Send me notifications on Twitch about", "SettingsNotificationsPage"),
                        key: "onsite",
                        extraSettings: this.renderBrowserPushNotifications()
                    }), d.createElement($, {
                        startCollapsed: !0,
                        platformName: w.email,
                        displayName: Object(g.d)("By Email", "SettingsNotificationsPage"),
                        description: Object(g.d)("Receive important notifications through email. You may receive additional emails about features and content on Twitch. You can turn off specific emails using the unsubscribe link included in each message.", "SettingsNotificationsPage"),
                        explanation: Object(g.d)("Send me emails about", "SettingsNotificationsPage"),
                        key: "email"
                    }), d.createElement($, {
                        platformName: w.push,
                        startCollapsed: !0,
                        displayName: Object(g.d)("On Mobile", "SettingsNotificationsPage"),
                        description: Object(g.d)("Get Twitch updates on the go. Receive notifications right on your phone's home screen.", "SettingsNotificationsPage"),
                        explanation: Object(g.d)("Send me push notifications", "SettingsNotificationsPage"),
                        key: "push"
                    }), d.createElement(I, null))
                }, t.prototype.renderBrowserPushNotifications = function() {
                    return g.b.get(P.b, !1) && Object(x.a)() && !Object(T.a)() ? d.createElement(H, null) : null
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t = u.__decorate([Object(f.c)("SettingsNotificationsPage", {
                    destination: y.a.NotificationSettingsPage
                }), Object(v.a)({
                    location: k.PageviewLocation.SettingsPage
                })], t)
            }(d.Component)),
            Z = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: a.NoChanges
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: a.Working
                        }, function() {})
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return g.a.buildType === S.a.Production ? null : d.createElement("div", null, d.createElement(N, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    }))
                }, t = u.__decorate([Object(f.c)("SettingsPrimePage", {
                    autoReportInteractive: !0,
                    destination: y.a.SettingsPrime
                }), Object(v.a)({
                    location: k.PageviewLocation.SettingsPage
                })], t)
            }(d.Component),
            ee = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: a.NoChanges
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: a.Working
                        }, function() {})
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return g.a.buildType === S.a.Production ? null : d.createElement("div", null, d.createElement(N, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    }))
                }, t = u.__decorate([Object(f.c)("SettingsProfilePage", {
                    autoReportInteractive: !0,
                    destination: y.a.SettingsProfile
                }), Object(v.a)({
                    location: k.PageviewLocation.SettingsPage
                })], t)
            }(d.Component),
            te = n("9u8h"),
            ne = n("NoSW"),
            ie = function(e) {
                return d.createElement(E.V, {
                    margin: {
                        top: 1
                    }
                }, d.createElement(E._23, {
                    color: E.F.Alt,
                    "data-a-target": e.dataTarget
                }, e.text))
            },
            ae = function(e) {
                return d.createElement(E.V, {
                    margin: {
                        bottom: 4
                    }
                }, d.createElement(E.M, {
                    error: e.error,
                    errorMessage: e.errorMessage || Object(g.d)("Sorry, something went wrong. Please try again later.", "SettingsFormGroup"),
                    hint: e.hint,
                    id: e.id,
                    label: e.label,
                    labelOptional: e.labelOptional,
                    orientation: e.orientation
                }, e.children))
            },
            oe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return d.createElement(ae, {
                        label: Object(g.d)("Two-Factor Authentication", "TwoFactorAuthenticationSetting"),
                        orientation: E.N.Horizontal,
                        error: this.props.status === Y.Error,
                        errorMessage: Object(g.d)("Sorry, something went wrong. Please try again later.", "TwoFactorAuthenticationSetting")
                    }, this.renderBody())
                }, t.prototype.renderBody = function() {
                    switch (this.props.status) {
                        case Y.Loading:
                            return this.renderLoading();
                        case Y.Error:
                            return this.renderError();
                        case Y.UnverifiedEmail:
                            return this.renderVerifyEmail();
                        case Y.CanEnable:
                            return this.renderEnableButton();
                        case Y.Enabled:
                            return this.renderDisableButton();
                        case Y.EnabledAndRequired:
                            return this.renderEnabledAndRequired();
                        default:
                            return null
                    }
                }, t.prototype.renderLoading = function() {
                    return d.createElement(E._3, null)
                }, t.prototype.renderError = function() {
                    return null
                }, t.prototype.renderVerifyEmail = function() {
                    return d.createElement(E.V, null, d.createElement(E._23, {
                        "data-a-target": "2fa-verify-email"
                    }, Object(g.d)("Just verify your email address and two-factor authentication can be enabled.", "TwoFactorAuthenticationSetting")))
                }, t.prototype.renderEnableButton = function() {
                    return d.createElement(E.V, null, d.createElement(E.u, {
                        linkTo: "https://passport.twitch.tv/register_2fa/new",
                        "data-a-target": "2fa-enable-button"
                    }, Object(g.d)("Set Up Two-Factor Authentication", "TwoFactorAuthenticationSetting")), d.createElement(ie, {
                        dataTarget: "2fa-pitch-message",
                        text: Object(g.d)("It's dangerous to go alone. <x:link>Two-factor authentication</x:link> adds an extra layer of security to your Twitch account by requiring both a password and your mobile phone to login.", {
                            "x:link": function(e) {
                                return d.createElement("a", {
                                    key: "learn-more-link",
                                    href: "https://www.authy.com/learn-more",
                                    target: "_blank",
                                    "data-a-target": "2fa-authy-link"
                                }, e)
                            }
                        }, "TwoFactorAuthenticationSetting")
                    }))
                }, t.prototype.renderDisableButton = function() {
                    return d.createElement(E.V, null, d.createElement(E.u, {
                        linkTo: "https://passport.twitch.tv/disable_2fa/new",
                        "data-a-target": "2fa-disable-button"
                    }, Object(g.d)("Disable two-factor authentication", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                }, t.prototype.renderEnabledAndRequired = function() {
                    return d.createElement(E.V, null, d.createElement(E._23, {
                        "data-a-target": "2fa-required-message"
                    }, Object(g.d)("You must have two-factor authentication enabled.", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                }, t.prototype.renderEnabledMessage = function() {
                    return d.createElement(ie, {
                        dataTarget: "2fa-successful-message",
                        text: Object(g.d)("Woohoo! Two-factor authentication is enabled! To reset or change your phone, visit the Authy <x:link>phone reset form</x:link>.", {
                            "x:link": function(e) {
                                return d.createElement("a", {
                                    key: "phone-reset-link",
                                    href: "https://www.authy.com/phones/reset",
                                    "data-a-target": "2fa-authy-reset"
                                }, e)
                            }
                        }, "TwoFactorAuthenticationSetting")
                    })
                }, t
            }(d.Component),
            re = n("u9bz");
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.UnverifiedEmail = 2] = "UnverifiedEmail", e[e.CanEnable = 3] = "CanEnable", e[e.Enabled = 4] = "Enabled", e[e.EnabledAndRequired = 5] = "EnabledAndRequired"
        }(Y || (Y = {}));
        var se, le = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        status: Y.Loading,
                        restLoading: !0,
                        restError: !1
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTwoFactorEnabled()
                }, t.prototype.componentDidUpdate = function(e, t) {
                    t.status === Y.Loading && this.state.status !== Y.Loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.status !== Y.Loading || e.data.loading || this.reconcileStatus(e)
                }, t.prototype.render = function() {
                    return d.createElement(oe, {
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
                                    return i.trys.push([1, 3, , 4]), [4, te.a.get(e, {
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
                    e.data.loading || this.state.restLoading ? t = Y.Loading : !e.data.currentUser || this.state.restError ? t = Y.Error : this.state.twoFactorEnabled || e.data.currentUser.isEmailVerified ? !this.state.twoFactorEnabled && e.data.currentUser.isEmailVerified ? t = Y.CanEnable : this.state.twoFactorEnabled && !this.userRoleRequiresTwoFactor(e) ? t = Y.Enabled : this.state.twoFactorEnabled && this.userRoleRequiresTwoFactor(e) && (t = Y.EnabledAndRequired) : t = Y.UnverifiedEmail, t && this.setState({
                        status: t
                    })
                }, t.prototype.userRoleRequiresTwoFactor = function(e) {
                    var t = e.data.currentUser && e.data.currentUser.roles;
                    return !(!t || !(t.isGlobalMod || t.isSiteAdmin || t.isStaff))
                }, t
            }(d.Component),
            ce = Object(M.compose)(Object(ne.a)("TwoFactorAuthenticationSetting"), Object(F.a)(re))(le),
            ue = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        saveStatus: a.NoChanges
                    }, t.onClickSave = function() {
                        t.setState({
                            saveStatus: a.Working
                        }, function() {})
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return g.a.buildType === S.a.Production ? null : d.createElement("div", null, d.createElement(i, {
                        title: Object(g.d)("Security", "SettingsSecurityPage"),
                        description: Object(g.d)("Keep your account safe and sound", "SettingsSecurityPage")
                    }), d.createElement(ce, null), d.createElement(N, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    }))
                }, t = u.__decorate([Object(f.c)("SettingsSecurityPage", {
                    autoReportInteractive: !0,
                    destination: y.a.SettingsSecurity
                }), Object(v.a)({
                    location: k.PageviewLocation.SettingsPage
                })], t)
            }(d.Component);
        ! function(e) {
            e.Channel = "channel", e.Notifications = "notifications", e.Profile = "profile", e.Security = "security", e.Connections = "connections", e.Prime = "prime", e.Turbo = "turbo"
        }(se || (se = {}));
        var de = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return u.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return d.createElement(E.V, {
                        className: "settings-tabs",
                        padding: {
                            x: ge,
                            top: ge
                        }
                    }, d.createElement(E.V, {
                        margin: {
                            bottom: 1
                        }
                    }, d.createElement(E._23, {
                        type: E._28.H2
                    }, Object(g.d)("Settings", "SettingsTabs"))), d.createElement(E.V, null, d.createElement(E._21, null, d.createElement(E._20, {
                        linkTo: "/settings/profile",
                        active: this.props.match.params.tab === se.Profile,
                        "data-a-target": "profile-tab"
                    }, Object(g.d)("Profile", "SettingsTabs")), d.createElement(E._20, {
                        linkTo: "/settings/prime",
                        active: this.props.match.params.tab === se.Prime,
                        "data-a-target": "prime-tab"
                    }, Object(g.d)("Prime", "SettingsTabs")), d.createElement(E._20, {
                        linkTo: "/settings/channel",
                        active: this.props.match.params.tab === se.Channel,
                        "data-a-target": "channel-tab"
                    }, Object(g.d)("Channel and Videos", "SettingsTabs")), d.createElement(E._20, {
                        linkTo: "/settings/security",
                        active: this.props.match.params.tab === se.Security,
                        "data-a-target": "security-tab"
                    }, Object(g.d)("Security and Privacy", "SettingsTabs")), d.createElement(E._20, {
                        linkTo: "/settings/notifications",
                        active: this.props.match.params.tab === se.Notifications,
                        "data-a-target": "notifications-tab"
                    }, Object(g.d)("Notifications", "SettingsTab")), d.createElement(E._20, {
                        linkTo: "/settings/connections",
                        active: this.props.match.params.tab === se.Connections,
                        "data-a-target": "connections-tab"
                    }, Object(g.d)("Connections", "SettingsTabs")), d.createElement(E._20, {
                        linkTo: "/subscriptions",
                        active: !1,
                        "data-a-target": "subscriptions-tab"
                    }, Object(g.d)("Subscriptions", "SettingsTabs")))))
                }, t = u.__decorate([Object(f.c)("SettingsTabs")], t)
            }(d.Component),
            pe = Object(p.e)(de),
            ge = 3,
            me = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.redirectToProfilePage = function() {
                        return d.createElement(p.a, {
                            to: "/settings/profile"
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    return this.props.isLoggedIn ? d.createElement(E.V, {
                        padding: {
                            x: ge
                        },
                        fullHeight: !0,
                        fullWidth: !0,
                        display: E.H.Flex,
                        flexDirection: E.J.Column,
                        flexWrap: E.K.NoWrap
                    }, d.createElement(h.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), d.createElement(b.a, null, d.createElement(pe, null)), d.createElement(E.V, {
                        padding: {
                            y: 2
                        }
                    }, d.createElement(p.d, null, d.createElement(p.b, {
                        path: "/settings/profile",
                        component: ee
                    }), d.createElement(p.b, {
                        path: "/settings/prime",
                        component: Z
                    }), d.createElement(p.b, {
                        path: "/settings/channel",
                        component: C
                    }), d.createElement(p.b, {
                        path: "/settings/security",
                        component: ue
                    }), d.createElement(p.b, {
                        path: "/settings/notifications",
                        component: X
                    }), d.createElement(p.b, {
                        path: "/settings/connections",
                        component: O
                    }), d.createElement(p.b, {
                        path: "/settings",
                        render: this.redirectToProfilePage
                    })))) : (this.props.login(), d.createElement(m.a, {
                        message: Object(g.d)("You must be logged in to view this page", "SettingsRoot")
                    }))
                }, t = u.__decorate([Object(f.c)("SettingsRoot", {
                    autoReportInteractive: !0
                })], t)
            }(d.Component),
            fe = Object(o.a)(function(e) {
                return {
                    isLoggedIn: Object(c.d)(e)
                }
            }, function(e) {
                return Object(r.bindActionCreators)({
                    login: function() {
                        return Object(l.f)(s.a.SettingsPage)
                    }
                }, e)
            })(me);
        n.d(t, "SettingsRoot", function() {
            return fe
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
            if (f) return f;
            var e = m.register({
                scope: "/"
            });
            return f = e || Promise.reject(new Error("service worker runtime not available"))
        }
        var a, o = n("TToO"),
            r = n("6sO2"),
            s = n("oIkB"),
            l = n("Aj/L");
        ! function(e) {
            e.NewSession = "new-session", e.ClearSession = "clear-session"
        }(a || (a = {}));
        var c = r.n.logger.withCategory("host-service-worker-messenger"),
            u = function() {
                function e() {}
                return e.syncSession = function() {
                    var e = Object(l.c)(r.n.store.getState());
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
            d = "browserPushNotificationsEnabled",
            p = function() {
                function e() {}
                return e.exists = function() {
                    return null !== r.n.storage.getOptional(d)
                }, e.isEnabled = function() {
                    return r.n.storage.get(d, !1)
                }, e.setEnabled = function() {
                    r.n.storage.set(d, !0)
                }, e.setDisabled = function() {
                    r.n.storage.set(d, !1)
                }, e
            }(),
            g = n("UbVv"),
            m = n("F2sf"),
            f = null,
            h = n("JBcW"),
            b = n("TbkX");
        n.d(t, "a", function() {
            return S
        });
        var v = r.n.logger.withCategory("browser-push-notifications-manager"),
            S = function() {
                function e() {}
                return e.initialize = function() {
                    return this.initPromise ? this.initPromise : (this.initPromise = this.initializationLogic(), this.initPromise)
                }, e.initializationLogic = function() {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, a;
                        return o.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return Object(g.a)() ? (v.debug("permissions have been denied. nothing to do here."), [2]) : [4, i()];
                                case 1:
                                    return o.sent(), e = Object(l.d)(r.n.store.getState()), [4, this.hasPushSubscription()];
                                case 2:
                                    return t = o.sent(), u.syncSession(), t ? (n = p.exists() && !p.isEnabled(), a = !e, n || a ? [4, this.unsubscribe()] : [3, 4]) : [3, 5];
                                case 3:
                                    o.sent(), o.label = 4;
                                case 4:
                                    return [3, 7];
                                case 5:
                                    return l.d ? !Object(g.b)() || p.exists() && !p.isEnabled() ? [3, 7] : [4, this.subscribe()] : [3, 7];
                                case 6:
                                    o.sent(), o.label = 7;
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, e.userSubscribe = function(e) {
                    return o.__awaiter(this, void 0, void 0, function() {
                        return o.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return p.setEnabled(), [4, this.subscribe()];
                                case 1:
                                    return t.sent(), Object(h.c)({
                                        allowed: Object(g.b)(),
                                        context: e
                                    }), [2]
                            }
                        })
                    })
                }, e.userUnsubscribe = function(e) {
                    return o.__awaiter(this, void 0, void 0, function() {
                        return o.__generator(this, function(t) {
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
                    return o.__awaiter(this, void 0, void 0, function() {
                        return o.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.getPushSubscription()];
                                case 1:
                                    return [2, null !== e.sent()]
                            }
                        })
                    })
                }, e.subscribe = function() {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, a, c, u;
                        return o.__generator(this, function(d) {
                            switch (d.label) {
                                case 0:
                                    if (Object(g.a)()) throw new Error("notification permission is denied");
                                    if (!Object(l.d)(r.n.store.getState())) throw new Error("cannot be enabled logged out");
                                    if (!(e = r.b.get("notification_app_server_public_key", ""))) throw new Error("application server public key is blank");
                                    return [4, i()];
                                case 1:
                                    return t = d.sent(), [4, this.getPushSubscription()];
                                case 2:
                                    return (n = d.sent()) ? [3, 4] : (a = function(e) {
                                        for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), n = atob(t), i = new Uint8Array(n.length), a = 0; a < n.length; ++a) i[a] = n.charCodeAt(a);
                                        return i
                                    }(e), [4, t.pushManager.subscribe({
                                        userVisibleOnly: !0,
                                        applicationServerKey: a
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
                                    }), [4, r.n.apollo.client.mutate(o.__assign({
                                        mutation: b
                                    }, u))];
                                case 5:
                                    return d.sent(), [2]
                            }
                        })
                    })
                }, e.unsubscribe = function() {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return o.__generator(this, function(t) {
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
                    return o.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return o.__generator(this, function(n) {
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "browserPushSubscriptionID"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
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
    UbVv: function(e, t, n) {
        "use strict";
        t.a = function() {
            return window.Notification && "denied" === window.Notification.permission
        }, t.b = function() {
            return window.Notification && "granted" === window.Notification.permission
        }
    },
    WbwR: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            o = n("6sO2"),
            r = n("OOv5"),
            s = n("LBNC"),
            l = "browser_notifications_launch",
            c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.logger = o.n.logger.withCategory("browser-push-notifications"), t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (!o.b.get(l, !1)) return [2];
                                    if (!Object(s.a)()) return this.logger.debug("unsupported browser"), [2];
                                    t.label = 1;
                                case 1:
                                    return t.trys.push([1, 3, , 4]), [4, r.a.initialize()];
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
                    },
                    defaultValue: null
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "settingState"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
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
                                var o = i.referenceTracking,
                                    r = o.content,
                                    s = o.medium,
                                    c = o.content_index;
                                l.n.tracking.trackPageview(a.__assign({
                                    content: r,
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
                        return r.createElement(t, a.__assign({}, this.props))
                    }, i.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? o.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var i = "",
                                a = o.stringify(t);
                            a.length > 0 && (i = "?" + a), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: i
                            })
                        }
                        return n
                    }, i
                }(r.Component);
                return Object(s.f)(n)
            }
        }
        var a = n("TToO"),
            o = n("OAwv"),
            r = n("U7vG"),
            s = n("F8kA"),
            l = n("6sO2");
        n.d(t, "a", function() {
            return i
        })
    },
    mVHD: function(e, t) {},
    nq6q: function(e, t) {},
    t4xU: function(e, t) {},
    u9bz: function(e, t) {
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
                        alias: null,
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
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "isEmailVerified"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: null
                            }, {
                                kind: "Field",
                                alias: null,
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
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isGlobalMod"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isSiteAdmin"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }, {
                                        kind: "Field",
                                        alias: null,
                                        name: {
                                            kind: "Name",
                                            value: "isStaff"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
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
    w9tK: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.BitsBuyCard = "bits-buy-card", e.BrowseCommunities = "browse.communities", e.BrowseCreative = "browse.creative", e.BrowseGamesAndCommunities = "browse.games-and-communities", e.ChannelClips = "channel.clips", e.ChannelCollections = "channel.collections", e.ChannelClipsManager = "videoManager.clips.channel", e.ChannelDashboardAchievements = "channel.dashboard.achievements", e.ChannelDashboardChannelAnalytics = "channel.dashboard.channel-analytics", e.ChannelDashboardExtensions = "channel.dashboard.extensions", e.ChannelDashboardModeration = "channel.dashboard.moderation", e.ChannelDashboardStreamSummary = "channel.dashboard.stream-summary", e.ChannelEvents = "channel.events", e.ChannelIndex = "channel.index.index", e.ChatPopout = "chat", e.CheermoteCarousel = "cheermote-carousel", e.DevOnly = "dev", e.DirectoryCommunityByLanguage = "directory.community.language", e.DirectoryCommunityIndex = "directory.community.index", e.DirectoryCommunityDetails = "directory.community.details", e.DirectoryFollowingCommunities = "directory.following.communities", e.DirectoryFollowingGames = "directory.following.games", e.DirectoryFollowingHosts = "directory.following.hosts", e.DirectoryFollowingIndex = "directory.following.index", e.DirectoryFollowingLiveChannels = "directory.following.channels", e.DirectoryFollowingVideos = "directory.following.videos.video-type", e.DirectoryGameClips = "directory.game.clips", e.DirectoryGameDetails = "directory.game.details", e.DirectoryGameIndex = "directory.game.index", e.DirectoryGames = "directory.games", e.DirectoryPopular = "directory.popular", e.DirectoryPopularByLanguage = "directory.popular.language", e.DirectoryGameVideos = "directory.game.videos", e.EmailVerification = "emailVerification", e.EventDetails = "event.details", e.ForYou = "for-you", e.Index = "index", e.MyClipsManager = "videoManager.clips", e.NotificationSettingsPage = "settings.notificationSettings", e.OnboardingIndex = "onboarding.index", e.ReportUserPage = "reportUser.page", e.SettingsConnections = "private/embed-components", e.SettingsChannel = "private/embed-components", e.SettingsNotifications = "settings.notifications", e.SettingsPrime = "settings.prime", e.SettingsProfile = "settings.profile", e.SettingsSecurity = "private/embed-components", e.StoreMerchPage = "store.merch", e.SubsLandingPage = "subs.landing", e.TeamsDashboardRevenue = "teams.dashboard.revenue", e.TeamsDashboardStats = "teams.dashboard.stats", e.TeamsDashboardMembers = "teams.dashboard.members", e.TeamsDashboardFeaturedChannels = "teams.dashboard.featured-channels", e.TeamsDashboardSettings = "teams.dashboard.settings", e.SubsBroadcasterPage = "subs.broadcaster", e.VideoManagerEditPropertiesPage = "videoManager.edit", e.VideoManagerPage = "videoManager.page", e.VideoManagerUploadListPage = "videoManager.upload-list", e.VideoManagerUploadPage = "videoManager.upload", e.VideosPage = "videos", e.VideoWatchPage = "video"
        }(i || (i = {}))
    }
});
//# sourceMappingURL=pages.settings-0b1c70dac2f5861a93a9f065394a193c.js.map