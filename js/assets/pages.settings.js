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
            return p.createElement(w.V, {
                margin: {
                    top: 2,
                    bottom: 4
                }
            }, p.createElement(w._23, {
                type: w._28.H3,
                fontSize: w.L.Size2
            }, e.title), p.createElement(w.V, {
                margin: {
                    top: 1
                }
            }, p.createElement(w._23, {
                color: w.F.Alt2
            }, e.description)))
        }

        function a(e, t) {
            var n = {
                time: Date.now(),
                new_value: t.newValue
            };
            m.n.tracking.track(e, n)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o, r = n("RH2O"),
            s = n("2KeS"),
            l = n("+xm8"),
            c = n("f2i/"),
            u = n("Aj/L"),
            d = n("TToO"),
            p = n("U7vG"),
            g = n("CIox"),
            m = n("6sO2"),
            f = n("yWCw"),
            h = n("CSlQ"),
            b = n("eXld"),
            v = n("2aoH"),
            S = n("j7/Y"),
            y = n("Ejve"),
            E = n("w9tK"),
            _ = n("vH/s"),
            k = n("H4lr"),
            w = n("Odds");
        ! function(e) {
            e[e.NoChanges = 0] = "NoChanges", e[e.DirtyChanges = 1] = "DirtyChanges", e[e.Working = 2] = "Working", e[e.Success = 3] = "Success", e[e.Error = 4] = "Error"
        }(o || (o = {}));
        var N, O = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    var e = w.y.Default,
                        t = Object(m.d)("Save Changes", "SaveSettingsFooter"),
                        n = w.z.Default,
                        i = !1;
                    return this.props.status === o.Working ? e = w.y.Loading : this.props.status === o.Success ? e = w.y.Success : this.props.status === o.Error ? (n = w.z.Alert, t = Object(m.d)("Failed to save settings. Try again.", "SaveSettingsFooter")) : this.props.status === o.NoChanges && (i = !0), p.createElement(k.a, null, p.createElement(w._19, {
                        borderTop: !0,
                        display: w.H.Flex,
                        alignItems: w.c.Center,
                        justifyContent: w.U.Center,
                        padding: {
                            y: 2
                        },
                        margin: {
                            x: we
                        }
                    }, p.createElement(w.u, {
                        disabled: i,
                        size: w.x.Large,
                        state: e,
                        type: n,
                        onClick: this.props.onClickSave,
                        "data-a-target": "save-user-settings-button"
                    }, t)))
                }, t
            }(p.Component),
            C = n("9u8h"),
            P = function(e) {
                return p.createElement(w.V, {
                    margin: {
                        top: 1
                    }
                }, p.createElement(w._23, {
                    color: w.F.Alt,
                    "data-a-target": e.dataTarget
                }, e.text))
            },
            T = function(e) {
                return p.createElement(w.V, {
                    margin: {
                        bottom: 4
                    }
                }, p.createElement(w.M, {
                    error: e.error,
                    errorMessage: e.errorMessage || Object(m.d)("Sorry, something went wrong. Please try again later.", "SettingsFormGroup"),
                    hint: e.hint,
                    id: e.id,
                    label: e.label,
                    labelOptional: e.labelOptional,
                    orientation: e.orientation
                }, e.children))
            },
            x = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderBody = function() {
                        return void 0 === t.props.enabled ? p.createElement(w._3, null) : p.createElement(w.V, null, p.createElement(w._30, {
                            checked: t.props.enabled,
                            error: t.props.error,
                            disabled: t.props.updating,
                            onChange: t.onChange
                        }), p.createElement(P, {
                            text: t.props.description
                        }))
                    }, t.onChange = function(e) {
                        t.props.onChange && t.props.onChange(e.currentTarget.checked)
                    }, t
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    return p.createElement(T, {
                        label: this.props.label,
                        error: this.props.error,
                        errorMessage: this.props.errorMessage,
                        orientation: w.N.Horizontal
                    }, this.renderBody())
                }, t
            }(p.Component),
            j = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    var e = Object(m.d)("Auto Hosting", "AutoHostToggle"),
                        t = Object(m.d)("Toggle all forms of auto hosting: teammates, host list, and similar channels. <x:link>Learn more</x:link>", {
                            "x:link": function(e) {
                                return p.createElement("a", {
                                    key: "learn-more-link",
                                    href: "https://blog.twitch.tv/grow-your-community-with-auto-hosting-e80c1460f6e1"
                                }, p.createElement(w._23, {
                                    type: w._28.Span,
                                    bold: !0
                                }, e))
                            }
                        }, "AutoHostToggle");
                    return p.createElement(x, {
                        label: e,
                        description: t,
                        enabled: this.props.enabled,
                        error: this.props.error,
                        updating: this.props.updating,
                        onChange: this.props.onChange
                    })
                }, t
            }(p.Component);
        ! function(e) {
            e.Random = "random", e.Ordered = "ordered"
        }(N || (N = {}));
        var H, A = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderBody = function() {
                        return void 0 === t.props.hostPriority ? p.createElement(w._3, null) : p.createElement(w._16, {
                            value: t.props.hostPriority,
                            onChange: t.onHostPriorityChange,
                            error: t.props.error,
                            disabled: t.props.updating
                        }, p.createElement("option", {
                            value: N.Random
                        }, Object(m.d)("Host channels randomly.", "SettingsHostPriority")), p.createElement("option", {
                            value: N.Ordered
                        }, Object(m.d)("Host channels by the order they appear in the list.", "SettingsHostPriority")))
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
                return d.__extends(t, e), t.prototype.render = function() {
                    return p.createElement(T, {
                        label: "Host Priority",
                        error: this.props.error
                    }, this.renderBody())
                }, t
            }(p.Component),
            F = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    var e = Object(m.d)("Team Hosting", "TeamHostToggle"),
                        t = Object(m.d)("Automatically host random channels from your team when you're not live. Team channels will be hosted before any channels in your host list.", "TeamHostToggle ");
                    return p.createElement(x, {
                        label: e,
                        description: t,
                        enabled: this.props.enabled,
                        error: this.props.error,
                        updating: this.props.updating,
                        onChange: this.props.onChange
                    })
                }, t
            }(p.Component),
            V = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    var e = Object(m.d)("Vodcast Hosting", "VodcastToggle"),
                        t = Object(m.d)("Includes Vodcasts in auto host. <x:link>Learn about Vodcasts.</x:link>", {
                            "x:link": function(e) {
                                return p.createElement("a", {
                                    key: "learn-more-link",
                                    href: "https://blog.twitch.tv/vodcast-brings-the-twitch-community-experience-to-uploads-54098498715"
                                }, p.createElement(w._23, {
                                    type: w._28.Span,
                                    bold: !0
                                }, e))
                            }
                        }, "VodcastToggle");
                    return p.createElement(x, {
                        label: e,
                        description: t,
                        enabled: this.props.enabled,
                        error: this.props.error,
                        updating: this.props.updating,
                        onChange: this.props.onChange
                    })
                }, t
            }(p.Component),
            U = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    return p.createElement(w.V, null, p.createElement(i, {
                        title: Object(m.d)("Auto Hosting", "AutoHostSettingsComponent"),
                        description: Object(m.d)("Host your friends and favorite channels while you're offline", "AutoHostSettingsComponent")
                    }), p.createElement(j, {
                        enabled: this.props.autoHostingEnabled,
                        error: this.props.autoHostingError,
                        updating: this.props.autoHostingUpdating,
                        onChange: this.props.onAutoHostingEnabledChange
                    }), p.createElement(F, {
                        enabled: this.props.teamHostingEnabled,
                        error: this.props.teamHostingError,
                        updating: this.props.teamHostingUpdating,
                        onChange: this.props.onTeamHostingEnabledChange
                    }), p.createElement(V, {
                        enabled: this.props.vodcastHostingEnabled,
                        error: this.props.vodcastHostingError,
                        updating: this.props.vodcastHostingUpdating,
                        onChange: this.props.onVodcastHostingEnabledChange
                    }), p.createElement(A, {
                        hostPriority: this.props.hostPriority,
                        error: this.props.hostPriorityError,
                        updating: this.props.hostPriorityUpdating,
                        onChange: this.props.onHostPriorityChange
                    }))
                }, t
            }(p.Component),
            L = "/kraken/autohost/settings",
            D = function(e) {
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
                        hostPriorityUpdating: !1
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
                            hostPriorityUpdating: !1
                        } : t.state
                    }, t.updateAutoHostSetting = function(e) {
                        return d.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return d.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, C.a.put(L, {
                                            body: e
                                        })];
                                    case 1:
                                        return t = n.sent(), this.setState(this.deserialize(t)), [2]
                                }
                            })
                        })
                    }, t.setAutoHostEnabled = function(e) {
                        return d.__awaiter(t, void 0, void 0, function() {
                            return d.__generator(this, function(t) {
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
                                                a(_.SpadeEventType.AutoHostToggle, e)
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
                        return d.__awaiter(t, void 0, void 0, function() {
                            return d.__generator(this, function(t) {
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
                                                a(_.SpadeEventType.TeamHostToggle, e)
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
                        return d.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return d.__generator(this, function(n) {
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
                                                a(_.SpadeEventType.DeprioritizeVodcastToggle, e)
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
                        return d.__awaiter(t, void 0, void 0, function() {
                            return d.__generator(this, function(t) {
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
                    }, t
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    return d.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return d.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, C.a.get(L)];
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
                                        hostPriorityError: !0
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return p.createElement(U, {
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
                        onHostPriorityChange: this.setHostPriority
                    })
                }, t
            }(p.Component),
            R = Object(h.c)("SettingsAutoHostContainer")(D),
            z = function(e) {
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
                return d.__extends(t, e), t.prototype.render = function() {
                    return m.a.buildType === y.a.Production ? null : p.createElement("div", null, p.createElement(R, null), p.createElement(O, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    }))
                }, t = d.__decorate([Object(h.c)("SettingsChannelPage", {
                    autoReportInteractive: !0,
                    destination: E.a.SettingsChannel
                }), Object(S.a)({
                    location: _.PageviewLocation.SettingsPage
                })], t)
            }(p.Component),
            I = function(e) {
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
                return d.__extends(t, e), t.prototype.render = function() {
                    return m.a.buildType === y.a.Production ? null : p.createElement("div", null, p.createElement(O, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    }))
                }, t = d.__decorate([Object(h.c)("SettingsConnectionsPage", {
                    autoReportInteractive: !0,
                    destination: E.a.SettingsConnections
                }), Object(S.a)({
                    location: _.PageviewLocation.SettingsPage
                })], t)
            }(p.Component),
            B = n("WbwR"),
            M = n("LBNC"),
            G = n("UbVv"),
            W = n("zCIC"),
            q = n("7vx8"),
            J = n("oIkB"),
            K = n("F8kA"),
            Y = (n("hPJb"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.userId, t.props.isEnabled)
                    }, t
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    return p.createElement(w._19, {
                        className: "advanced-notification-settings-toggle",
                        display: w.H.Flex,
                        justifyContent: w.U.Between,
                        background: w.m.Base,
                        padding: {
                            x: 5,
                            y: 1
                        },
                        borderBottom: !0
                    }, p.createElement(w.V, {
                        margin: {
                            left: 5
                        },
                        display: w.H.Flex,
                        flexGrow: 1,
                        alignItems: w.c.Center,
                        flexWrap: w.K.NoWrap
                    }, p.createElement(w.V, {
                        display: w.H.Flex,
                        flexGrow: 1,
                        flexWrap: w.K.NoWrap
                    }, p.createElement(w.V, {
                        flexShrink: 0,
                        margin: {
                            right: 1
                        }
                    }, p.createElement(w.T, {
                        linkTo: "/" + this.props.login
                    }, p.createElement(w.l, {
                        imageSrc: this.props.thumbnail,
                        imageAlt: this.props.text,
                        size: 40
                    }))), p.createElement(w.V, {
                        flexGrow: 1,
                        display: w.H.Flex,
                        flexDirection: w.J.Column
                    }, p.createElement(w._23, {
                        fontSize: w.L.Size5
                    }, p.createElement(K.a, {
                        to: "/" + this.props.login
                    }, this.props.text)), p.createElement(w._23, {
                        type: w._28.Span,
                        color: w.F.Alt2
                    }, this.props.description))), p.createElement(w.V, {
                        display: w.H.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, p.createElement(w.V, {
                        margin: {
                            right: 1
                        }
                    }, p.createElement(w._30, {
                        checked: this.props.isEnabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector",
                        id: this.props.userId
                    })), p.createElement(w.V, {
                        className: this.props.saved ? "advanced-notification-settings-toggle__saved" : "advanced-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, p.createElement(w._23, {
                        fontSize: w.L.Size5,
                        color: w.F.Link
                    }, Object(m.d)("Saved", "AdvancedNotificationSettingsToggle"))))))
                }, t
            }(p.Component)),
            Q = n("AQCV"),
            $ = (n("t4xU"), n("EaRL")),
            X = function(e) {
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
                        return d.__awaiter(t, void 0, void 0, function() {
                            var t, i, a;
                            return d.__generator(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setAdvancedNotificationSetting ? (t = d.__assign({}, Object(J.a)({
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
                                        }, Object(J.d)($, {
                                            limit: 50
                                        }, a), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return p.createElement(w._19, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, p.createElement(w.Z, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return p.createElement(f.a, {
                        message: Object(m.d)("Error loading data.", "AdvancedNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return p.createElement(w._19, {
                        padding: {
                            y: 1
                        },
                        borderBottom: !0
                    }, p.createElement(f.a, {
                        message: Object(m.d)("You must be logged in to update your settings", "AdvancedNotificationSettings")
                    }));
                    var e = Object(m.d)("{followCount, plural, one {You follow # channel} other {You follow # channels}}", {
                            followCount: this.props.data.currentUser.follows.totalCount
                        }, "AdvancedNotificationSettings"),
                        t = p.createElement(w._19, {
                            background: w.m.Alt2,
                            borderBottom: !0
                        }, p.createElement(w.T, {
                            onClick: this.toggleCollapse,
                            alpha: !0,
                            "data-test-selector": "header-selector"
                        }, p.createElement(w.V, {
                            display: w.H.Flex,
                            padding: {
                                x: 2,
                                y: 1
                            }
                        }, p.createElement(w.V, {
                            className: "advanced-notification-settings__header",
                            flexGrow: 0
                        }, p.createElement(w._23, {
                            fontSize: w.L.Size5,
                            color: w.F.Alt2,
                            bold: !0
                        }, Object(m.d)("Advanced", "AdvancedNotificationSettings"))), p.createElement(w.V, {
                            padding: {
                                x: 1
                            },
                            flexGrow: 1
                        }, p.createElement(w._23, {
                            "data-test-selector": "description-selector",
                            fontSize: w.L.Size5,
                            color: w.F.Alt2
                        }, e)), p.createElement(w.V, {
                            className: this.state.collapsed ? "advanced-notification-settings--collapse" : "advanced-notification-settings--expand",
                            flexGrow: 0,
                            flexShrink: 1,
                            display: w.H.Flex,
                            justifyContent: w.U.Center
                        }, p.createElement(w._10, {
                            asset: w._11.AngleRight,
                            type: w._12.Alt2
                        }))))),
                        n = !this.props.data.loading && !this.props.data.error && !!this.props.data.currentUser.follows.pageInfo.hasNextPage;
                    return this.props.data.currentUser.follows.totalCount > 0 ? this.state.collapsed ? p.createElement(w._19, null, t) : p.createElement(w._19, null, t, p.createElement(w._19, {
                        borderBottom: !0,
                        padding: 2
                    }, p.createElement(w.V, {
                        padding: {
                            bottom: 1
                        }
                    }, p.createElement(w._23, {
                        fontSize: w.L.Size5,
                        color: w.F.Alt2
                    }, Object(m.d)("Manage which channels you receive notifications for.", "AdvancedNotificationSettings"))), p.createElement(w.V, {
                        padding: {
                            bottom: 1
                        }
                    }, p.createElement(w._23, {
                        fontSize: w.L.Size4,
                        color: w.F.Alt
                    }, e)), p.createElement(w._19, {
                        className: "advanced-notification-settings__toggle-container",
                        borderTop: !0,
                        borderLeft: !0,
                        borderRight: !0,
                        margin: {
                            bottom: .5
                        }
                    }, this.renderToggles(), p.createElement(W.a, {
                        loadMore: this.props.loadMore,
                        enabled: n,
                        pixelThreshold: 200
                    })))) : null
                }, t.prototype.renderToggles = function() {
                    if (this.props.data && (!this.props.data.loading || this.props.data.currentUser)) {
                        for (var e = [], t = 0, n = this.props.data.currentUser.follows.edges; t < n.length; t++) {
                            var i = n[t];
                            i.node && i.node.id && i.node.followers && e.push(p.createElement(Y, {
                                userId: i.node.id,
                                text: i.node.displayName,
                                login: i.node.login,
                                description: Object(m.d)("{followerCount,number} followers", {
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
            Z = Object(s.compose)(Object(q.a)($, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network",
                        variables: {
                            limit: 50
                        }
                    }
                },
                props: function(e) {
                    return d.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: $,
                                variables: d.__assign({}, e.data.variables, {
                                    cursor: e.data.currentUser.follows.edges[e.data.currentUser.follows.edges.length - 1].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult;
                                    return {
                                        currentUser: d.__assign({}, n.currentUser, {
                                            follows: d.__assign({}, n.currentUser.follows, {
                                                edges: Object(J.b)(e.currentUser.follows.edges, n.currentUser.follows.edges)
                                            })
                                        })
                                    }
                                }
                            })
                        }
                    })
                }
            }), Object(q.a)(Q, {
                name: "setAdvancedNotificationSetting"
            }), Object(h.c)("AdvancedNotificationSettings"))(X),
            ee = n("BhyV"),
            te = n("OOv5"),
            ne = n("JBcW"),
            ie = (n("mVHD"), m.n.logger.withCategory("browser-push-notifications-settings")),
            ae = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hide: !1,
                        loading: !0,
                        deciding: !0,
                        hasSubscription: !1
                    }, t.toggle = function() {
                        return d.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return d.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.setState({
                                            deciding: !0
                                        }), [4, te.a.hasPushSubscription()];
                                    case 1:
                                        if (!n.sent()) return [3, 6];
                                        n.label = 2;
                                    case 2:
                                        return n.trys.push([2, 4, , 5]), [4, te.a.userUnsubscribe(ne.a.Settings)];
                                    case 3:
                                        return n.sent(), [3, 5];
                                    case 4:
                                        return e = n.sent(), ie.error(e, "user unsubscribe failed"), [3, 5];
                                    case 5:
                                        return [3, 9];
                                    case 6:
                                        return n.trys.push([6, 8, , 9]), [4, te.a.userSubscribe(ne.a.Settings)];
                                    case 7:
                                        return n.sent(), [3, 9];
                                    case 8:
                                        return t = n.sent(), Object(G.a)() ? (this.setState({
                                            hide: !0
                                        }), [2]) : (ie.error(t, "user subscribe failed"), [3, 9]);
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
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    return d.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return d.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 3, , 4]), [4, te.a.initialize()];
                                case 1:
                                    return t.sent(), [4, this.updateSubscriptionState()];
                                case 2:
                                    return t.sent(), [3, 4];
                                case 3:
                                    return e = t.sent(), ie.error(e, "unexpected error initializing push manager"), this.setState({
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
                    var e = this.state.hasSubscription ? Object(m.d)("Turn Off", "BrowserPushNotificationsSettings") : Object(m.d)("Turn On", "BrowserPushNotificationsSettings");
                    return p.createElement(w._19, {
                        borderTop: !0,
                        padding: {
                            right: 2,
                            y: 1
                        },
                        margin: {
                            top: 1
                        },
                        "data-test-selector": "qa-browser-push-notifications-settings"
                    }, p.createElement(w._19, {
                        className: "browser-push-notification-settings",
                        padding: {
                            left: 5,
                            right: 4
                        },
                        display: w.H.Flex,
                        margin: {
                            x: 5
                        }
                    }, p.createElement(w.V, {
                        className: "browser-push-notification-settings__body",
                        display: w.H.Flex,
                        flexWrap: w.K.NoWrap,
                        flexGrow: 1
                    }, p.createElement(w.V, {
                        margin: {
                            right: 1
                        },
                        flexGrow: 1
                    }, p.createElement(w._23, {
                        fontSize: w.L.Size4,
                        color: w.F.Alt
                    }, Object(m.d)("Receive Browser Notifications for this Device", "BrowserPushNotificationsSettings")), p.createElement(w.V, {
                        padding: {
                            top: .5
                        }
                    }, p.createElement(w._23, {
                        fontSize: w.L.Size5,
                        color: w.F.Alt2
                    }, Object(m.d)("See notifications at the corner of your screen, even when you’re not on Twitch", "BrowserPushNotificationsSettings")))), p.createElement(w.V, {
                        flexShrink: 0
                    }, p.createElement(w.u, {
                        "data-test-selector": "qa-browser-push-notifications-settings-toggle",
                        disabled: this.state.deciding,
                        onClick: this.toggle
                    }, e)))))
                }, t.prototype.updateSubscriptionState = function() {
                    return d.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return d.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, te.a.hasPushSubscription()];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        hasSubscription: e
                                    }), [2]
                            }
                        })
                    })
                }, t
            }(p.Component),
            oe = Object(ee.compose)(Object(h.c)("BrowserPushNotificationsSettings"))(ae),
            re = (n("iOZM"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.changeHandler = function() {
                        t.props.onChange(t.props.category, t.props.isEnabled)
                    }, t
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    return p.createElement(w._19, {
                        className: "platform-notification-settings-toggle",
                        display: w.H.Flex,
                        flexWrap: w.K.NoWrap,
                        alignItems: w.c.Start,
                        background: w.m.Alt,
                        margin: {
                            top: 1,
                            bottom: .5
                        },
                        padding: {
                            right: 5
                        }
                    }, p.createElement(w.V, {
                        className: "platform-notification-settings-toggle__body",
                        display: w.H.Flex,
                        flexDirection: w.J.Column,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, p.createElement(w.V, {
                        margin: {
                            bottom: .5
                        }
                    }, p.createElement(w._23, {
                        fontSize: w.L.Size4
                    }, this.props.text)), p.createElement(w._23, {
                        fontSize: w.L.Size5,
                        color: w.F.Alt2
                    }, this.props.description)), p.createElement(w.V, {
                        display: w.H.Flex,
                        margin: {
                            top: .5
                        },
                        flexGrow: 0,
                        flexShrink: 0
                    }, p.createElement(w.V, {
                        margin: {
                            right: 1
                        }
                    }, p.createElement(w._30, {
                        checked: this.props.isEnabled,
                        disabled: this.props.disabled,
                        onChange: this.changeHandler,
                        "data-test-selector": "toggle-selector"
                    })), p.createElement(w.V, {
                        className: this.props.saved ? "platform-notification-settings-toggle__saved" : "platform-notification-settings-toggle__saved--hide",
                        padding: {
                            x: 1
                        }
                    }, p.createElement(w._23, {
                        fontSize: w.L.Size5,
                        color: w.F.Link
                    }, Object(m.d)("Saved", "PlatformNotificationSettingsToggle")))))
                }, t
            }(p.Component)),
            se = n("g+dK"),
            le = (n("RC0U"), n("1f5k"));
        ! function(e) {
            e.onsite = "onsite", e.email = "email", e.push = "push"
        }(H || (H = {}));
        var ce, ue = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        collapsed: t.props.startCollapsed,
                        saved: new Set
                    }, t.VisibleSettings = [{
                        category: "LIVE",
                        name: Object(m.d)("Live", "PlatformNotificationSettings"),
                        description: Object(m.d)("When a streamer I follow goes Live", "PlatformNotificationSettings")
                    }, {
                        category: "VIDEOS",
                        name: Object(m.d)("Video Broadcast", "PlatformNotificationSettings"),
                        description: Object(m.d)("When a channel I follow starts a Vodcast. This also includes Video Comment notifications", "PlatformNotificationSettings")
                    }, {
                        category: "CLIPS",
                        name: Object(m.d)("Clips", "PlatformNotificationSettings"),
                        description: Object(m.d)("Receive notifications for clips you made and clips made by your viewers", "PlatformNotificationSettings")
                    }, {
                        category: "EVENTS",
                        name: Object(m.d)("Events", "PlatformNotificationSettings"),
                        description: Object(m.d)("Any time an event I follow starts", "PlatformNotificationSettings")
                    }, {
                        category: "CHAT",
                        name: Object(m.d)("Chat", "PlatformNotificationSettings"),
                        description: Object(m.d)("Any time there’s Rooms activity related to me.", "PlatformNotificationSettings")
                    }, {
                        category: "FRIENDS",
                        name: Object(m.d)("Friends", "PlatformNotificationSettings"),
                        description: Object(m.d)("When a friend sends me a message", "PlatformNotificationSettings")
                    }, {
                        category: "STREAMER",
                        name: Object(m.d)("Your Channel", "PlatformNotificationSettings"),
                        description: Object(m.d)("Receive notifications when viewers follow your channel or auto host you", "PlatformNotificationSettings")
                    }, {
                        category: "MODERATOR",
                        name: Object(m.d)("Moderator", "PlatformNotificationSettings"),
                        description: Object(m.d)("Any time I get a notification as a moderator", "PlatformNotificationSettings")
                    }, {
                        category: "COMMERCE",
                        name: Object(m.d)("Gifts and Rewards", "PlatformNotificationSettings"),
                        description: Object(m.d)("Receive notifications for drops, crates, and subscription gifts", "PlatformNotificationSettings")
                    }], t.toggleAll = function() {
                        t.toggleSettingCategory("ALL", t.getGlobalStateForPlatform())
                    }, t.toggleCollapse = function() {
                        t.setState(function(e) {
                            return {
                                collapsed: !e.collapsed
                            }
                        })
                    }, t.toggleSettingCategory = function(e, n) {
                        return d.__awaiter(t, void 0, void 0, function() {
                            var t, i, a, o, r = this;
                            return d.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return this.props.data && this.props.data.currentUser && this.props.setNotificationSetting ? (t = n ? "off" : "on", i = d.__assign({}, Object(J.a)({
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
                                        }, Object(J.d)(le, {}, o), this.markSaved(e), [2]
                                }
                            })
                        })
                    }, t
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (!this.props.data || this.props.data.loading && !this.props.data.currentUser) return p.createElement(w.V, {
                        padding: 1
                    }, p.createElement(w.Z, {
                        fillContent: !0
                    }));
                    if (this.props.data.error) return p.createElement(f.a, {
                        message: Object(m.d)("Error loading data.", "PlatformNotificationSettings")
                    });
                    if (!this.props.data.currentUser) return p.createElement(w._19, {
                        margin: {
                            top: 1
                        }
                    }, p.createElement(f.a, {
                        message: Object(m.d)("You must be logged in to update your settings.", "PlatformNotificationSettings")
                    }));
                    var e = p.createElement(w._19, {
                        background: w.m.Alt2,
                        borderBottom: !0
                    }, p.createElement(w.T, {
                        onClick: this.toggleCollapse,
                        alpha: !0
                    }, p.createElement(w.V, {
                        display: w.H.Flex,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, p.createElement(w.V, {
                        className: "platform-notification-settings__header",
                        flexGrow: 0,
                        "data-test-selector": "collapsible-header"
                    }, p.createElement(w._23, {
                        "data-test-selector": "display-name",
                        fontSize: w.L.Size5,
                        color: w.F.Alt2,
                        bold: !0
                    }, this.props.displayName)), p.createElement(w.V, {
                        padding: {
                            x: 1
                        },
                        flexGrow: 1
                    }, p.createElement(w._23, {
                        fontSize: w.L.Size5,
                        color: w.F.Alt2
                    }, this.getSettingTurnedOnMessage())), p.createElement(w.V, {
                        className: this.state.collapsed ? "platform-notification-settings--collapse" : "platform-notification-settings--expand",
                        flexGrow: 0,
                        flexShrink: 1,
                        display: w.H.Flex,
                        justifyContent: w.U.Center
                    }, p.createElement(w._10, {
                        asset: w._11.AngleRight,
                        type: w._12.Alt2
                    })))));
                    return this.state.collapsed ? p.createElement(w._19, null, e) : p.createElement(w._19, null, e, p.createElement(w._19, {
                        padding: 2,
                        borderBottom: !0
                    }, p.createElement(w.V, {
                        padding: {
                            bottom: 1
                        }
                    }, p.createElement(w._23, {
                        "data-test-selector": "description",
                        fontSize: w.L.Size5,
                        color: w.F.Alt2
                    }, this.props.description)), p.createElement(w._19, {
                        display: w.H.Flex,
                        margin: {
                            y: .5
                        },
                        borderBottom: !0
                    }, p.createElement(w.V, {
                        className: "platform-notification-settings__all",
                        display: w.H.Flex,
                        padding: {
                            bottom: 1,
                            right: 5
                        },
                        justifyContent: w.U.Center,
                        flexGrow: 1,
                        flexWrap: w.K.NoWrap
                    }, p.createElement(w.V, {
                        className: "platform-notification-settings__all-body",
                        flexGrow: 1,
                        padding: {
                            right: 1
                        }
                    }, p.createElement(w._23, {
                        fontSize: w.L.Size4,
                        color: w.F.Alt,
                        "data-test-selector": "explanation"
                    }, this.props.explanation)), p.createElement(w.V, {
                        display: w.H.Flex,
                        flexGrow: 0,
                        flexShrink: 0
                    }, p.createElement(w.V, {
                        margin: {
                            right: 1
                        }
                    }, p.createElement(w._30, {
                        "data-test-selector": "all-toggle",
                        checked: this.getGlobalStateForPlatform(),
                        onChange: this.toggleAll
                    })), p.createElement(w.V, {
                        padding: {
                            x: 1
                        },
                        "data-test-selector": "saved-selector",
                        className: this.getDisplaySaved("ALL") ? "platform-notification-settings__saved" : "platform-notification-settings__saved--hide"
                    }, p.createElement(w._23, {
                        fontSize: w.L.Size5,
                        color: w.F.Link
                    }, Object(m.d)("Saved", "PlatformNotificationSettings")))))), p.createElement(w.V, {
                        className: "platform-notification-settings__toggle-container",
                        display: w.H.Flex,
                        flexDirection: w.J.Column,
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
                    return 0 !== t && this.getGlobalStateForPlatform() ? t < e ? Object(m.d)("Some notifications turned on", "PlatformNotificationSettings") : Object(m.d)("All notifications turned on", "PlatformNotificationSettings") : Object(m.d)("All notifications turned off", "PlatformNotificationSettings")
                }, t.prototype.getGlobalStateForPlatform = function() {
                    var e = this.getSettingByCategory("ALL");
                    return !!e && e.isEnabled
                }, t.prototype.renderToggles = function() {
                    for (var e = [], t = 0, n = this.VisibleSettings; t < n.length; t++) {
                        var i = n[t],
                            a = this.getSettingByCategory(i.category);
                        a && e.push(p.createElement(re, {
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
            de = Object(s.compose)(Object(h.c)("PlatformNotificationSettings"), Object(q.a)(le, {
                options: function() {
                    return {
                        fetchPolicy: "cache-and-network"
                    }
                }
            }), Object(q.a)(se, {
                name: "setNotificationSetting"
            }))(ue),
            pe = (n("nq6q"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    return p.createElement(w._19, {
                        className: "notification-settings__body",
                        borderRight: !0,
                        borderLeft: !0,
                        borderTop: !0
                    }, p.createElement(w._19, {
                        background: w.m.Alt,
                        padding: {
                            x: 2,
                            y: 1
                        },
                        borderBottom: !0
                    }, p.createElement(w.V, {
                        margin: {
                            bottom: .5
                        }
                    }, p.createElement(w._23, {
                        fontSize: w.L.Size3,
                        color: w.F.Alt
                    }, Object(m.d)("Notifications", "SettingsNotificationsPage"))), p.createElement(w.V, null, p.createElement(w._23, {
                        fontSize: w.L.Size5,
                        color: w.F.Alt2
                    }, Object(m.d)("Get the notifications you care about, where you want to see them.", "SettingsNotificationsPage")))), p.createElement(de, {
                        startCollapsed: !1,
                        platformName: H.onsite,
                        displayName: Object(m.d)("On Twitch", "SettingsNotificationsPage"),
                        description: Object(m.d)("We'll always keep you informed on important updates to Twitch and your account.", "SettingsNotificationsPage"),
                        explanation: Object(m.d)("Send me notifications on Twitch about", "SettingsNotificationsPage"),
                        key: "onsite",
                        extraSettings: this.renderBrowserPushNotifications()
                    }), p.createElement(de, {
                        startCollapsed: !0,
                        platformName: H.email,
                        displayName: Object(m.d)("By Email", "SettingsNotificationsPage"),
                        description: Object(m.d)("Receive important notifications through email. You may receive additional emails about features and content on Twitch. You can turn off specific emails using the unsubscribe link included in each message.", "SettingsNotificationsPage"),
                        explanation: Object(m.d)("Send me emails about", "SettingsNotificationsPage"),
                        key: "email"
                    }), p.createElement(de, {
                        platformName: H.push,
                        startCollapsed: !0,
                        displayName: Object(m.d)("On Mobile", "SettingsNotificationsPage"),
                        description: Object(m.d)("Get Twitch updates on the go. Receive notifications right on your phone's home screen.", "SettingsNotificationsPage"),
                        explanation: Object(m.d)("Send me push notifications", "SettingsNotificationsPage"),
                        key: "push"
                    }), p.createElement(Z, null))
                }, t.prototype.renderBrowserPushNotifications = function() {
                    return m.b.get(B.b, !1) && Object(M.a)() && !Object(G.a)() ? p.createElement(oe, null) : null
                }, t.prototype.onRender = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t = d.__decorate([Object(h.c)("SettingsNotificationsPage", {
                    destination: E.a.NotificationSettingsPage
                }), Object(S.a)({
                    location: _.PageviewLocation.SettingsPage
                })], t)
            }(p.Component)),
            ge = function(e) {
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
                return d.__extends(t, e), t.prototype.render = function() {
                    return m.a.buildType === y.a.Production ? null : p.createElement("div", null, p.createElement(O, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    }))
                }, t = d.__decorate([Object(h.c)("SettingsPrimePage", {
                    autoReportInteractive: !0,
                    destination: E.a.SettingsPrime
                }), Object(S.a)({
                    location: _.PageviewLocation.SettingsPage
                })], t)
            }(p.Component),
            me = function(e) {
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
                return d.__extends(t, e), t.prototype.render = function() {
                    return m.a.buildType === y.a.Production ? null : p.createElement("div", null, p.createElement(O, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    }))
                }, t = d.__decorate([Object(h.c)("SettingsProfilePage", {
                    autoReportInteractive: !0,
                    destination: E.a.SettingsProfile
                }), Object(S.a)({
                    location: _.PageviewLocation.SettingsPage
                })], t)
            }(p.Component),
            fe = n("NoSW"),
            he = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    return p.createElement(T, {
                        label: Object(m.d)("Two-Factor Authentication", "TwoFactorAuthenticationSetting"),
                        orientation: w.N.Horizontal,
                        error: this.props.status === ce.Error,
                        errorMessage: Object(m.d)("Sorry, something went wrong. Please try again later.", "TwoFactorAuthenticationSetting")
                    }, this.renderBody())
                }, t.prototype.renderBody = function() {
                    switch (this.props.status) {
                        case ce.Loading:
                            return this.renderLoading();
                        case ce.Error:
                            return this.renderError();
                        case ce.UnverifiedEmail:
                            return this.renderVerifyEmail();
                        case ce.CanEnable:
                            return this.renderEnableButton();
                        case ce.Enabled:
                            return this.renderDisableButton();
                        case ce.EnabledAndRequired:
                            return this.renderEnabledAndRequired();
                        default:
                            return null
                    }
                }, t.prototype.renderLoading = function() {
                    return p.createElement(w._3, null)
                }, t.prototype.renderError = function() {
                    return null
                }, t.prototype.renderVerifyEmail = function() {
                    return p.createElement(w.V, null, p.createElement(w._23, {
                        "data-a-target": "2fa-verify-email"
                    }, Object(m.d)("Just verify your email address and two-factor authentication can be enabled.", "TwoFactorAuthenticationSetting")))
                }, t.prototype.renderEnableButton = function() {
                    return p.createElement(w.V, null, p.createElement(w.u, {
                        linkTo: "https://passport.twitch.tv/register_2fa/new",
                        "data-a-target": "2fa-enable-button"
                    }, Object(m.d)("Set Up Two-Factor Authentication", "TwoFactorAuthenticationSetting")), p.createElement(P, {
                        dataTarget: "2fa-pitch-message",
                        text: Object(m.d)("It's dangerous to go alone. <x:link>Two-factor authentication</x:link> adds an extra layer of security to your Twitch account by requiring both a password and your mobile phone to login.", {
                            "x:link": function(e) {
                                return p.createElement("a", {
                                    key: "learn-more-link",
                                    href: "https://www.authy.com/learn-more",
                                    target: "_blank",
                                    "data-a-target": "2fa-authy-link"
                                }, e)
                            }
                        }, "TwoFactorAuthenticationSetting")
                    }))
                }, t.prototype.renderDisableButton = function() {
                    return p.createElement(w.V, null, p.createElement(w.u, {
                        linkTo: "https://passport.twitch.tv/disable_2fa/new",
                        "data-a-target": "2fa-disable-button"
                    }, Object(m.d)("Disable two-factor authentication", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                }, t.prototype.renderEnabledAndRequired = function() {
                    return p.createElement(w.V, null, p.createElement(w._23, {
                        "data-a-target": "2fa-required-message"
                    }, Object(m.d)("You must have two-factor authentication enabled.", "TwoFactorAuthenticationSetting")), this.renderEnabledMessage())
                }, t.prototype.renderEnabledMessage = function() {
                    return p.createElement(P, {
                        dataTarget: "2fa-successful-message",
                        text: Object(m.d)("Woohoo! Two-factor authentication is enabled! To reset or change your phone, visit the Authy <x:link>phone reset form</x:link>.", {
                            "x:link": function(e) {
                                return p.createElement("a", {
                                    key: "phone-reset-link",
                                    href: "https://www.authy.com/phones/reset",
                                    "data-a-target": "2fa-authy-reset"
                                }, e)
                            }
                        }, "TwoFactorAuthenticationSetting")
                    })
                }, t
            }(p.Component),
            be = n("u9bz");
        ! function(e) {
            e[e.Loading = 0] = "Loading", e[e.Error = 1] = "Error", e[e.UnverifiedEmail = 2] = "UnverifiedEmail", e[e.CanEnable = 3] = "CanEnable", e[e.Enabled = 4] = "Enabled", e[e.EnabledAndRequired = 5] = "EnabledAndRequired"
        }(ce || (ce = {}));
        var ve, Se = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        status: ce.Loading,
                        restLoading: !0,
                        restError: !1
                    }, t
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.fetchTwoFactorEnabled()
                }, t.prototype.componentDidUpdate = function(e, t) {
                    t.status === ce.Loading && this.state.status !== ce.Loading && this.props.latencyTracking.reportInteractive()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.status !== ce.Loading || e.data.loading || this.reconcileStatus(e)
                }, t.prototype.render = function() {
                    return p.createElement(he, {
                        status: this.state.status
                    })
                }, t.prototype.fetchTwoFactorEnabled = function() {
                    return d.__awaiter(this, void 0, void 0, function() {
                        var e, t, n = this;
                        return d.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    e = "/api/users/auth_validator?check_2fa=true&onsite=1", i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, C.a.get(e, {
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
                    e.data.loading || this.state.restLoading ? t = ce.Loading : !e.data.currentUser || this.state.restError ? t = ce.Error : this.state.twoFactorEnabled || e.data.currentUser.isEmailVerified ? !this.state.twoFactorEnabled && e.data.currentUser.isEmailVerified ? t = ce.CanEnable : this.state.twoFactorEnabled && !this.userRoleRequiresTwoFactor(e) ? t = ce.Enabled : this.state.twoFactorEnabled && this.userRoleRequiresTwoFactor(e) && (t = ce.EnabledAndRequired) : t = ce.UnverifiedEmail, t && this.setState({
                        status: t
                    })
                }, t.prototype.userRoleRequiresTwoFactor = function(e) {
                    var t = e.data.currentUser && e.data.currentUser.roles;
                    return !(!t || !(t.isGlobalMod || t.isSiteAdmin || t.isStaff))
                }, t
            }(p.Component),
            ye = Object(ee.compose)(Object(fe.a)("TwoFactorAuthenticationSetting"), Object(q.a)(be))(Se),
            Ee = function(e) {
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
                return d.__extends(t, e), t.prototype.render = function() {
                    return m.a.buildType === y.a.Production ? null : p.createElement("div", null, p.createElement(i, {
                        title: Object(m.d)("Security", "SettingsSecurityPage"),
                        description: Object(m.d)("Keep your account safe and sound", "SettingsSecurityPage")
                    }), p.createElement(ye, null), p.createElement(O, {
                        status: this.state.saveStatus,
                        onClickSave: this.onClickSave
                    }))
                }, t = d.__decorate([Object(h.c)("SettingsSecurityPage", {
                    autoReportInteractive: !0,
                    destination: E.a.SettingsSecurity
                }), Object(S.a)({
                    location: _.PageviewLocation.SettingsPage
                })], t)
            }(p.Component);
        ! function(e) {
            e.Channel = "channel", e.Notifications = "notifications", e.Profile = "profile", e.Security = "security", e.Connections = "connections", e.Prime = "prime", e.Turbo = "turbo"
        }(ve || (ve = {}));
        var _e = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return p.createElement(w.V, {
                        className: "settings-tabs",
                        padding: {
                            x: we,
                            top: we
                        }
                    }, p.createElement(w.V, {
                        margin: {
                            bottom: 1
                        }
                    }, p.createElement(w._23, {
                        type: w._28.H2
                    }, Object(m.d)("Settings", "SettingsTabs"))), p.createElement(w.V, null, p.createElement(w._21, null, p.createElement(w._20, {
                        linkTo: "/settings/profile",
                        active: this.props.match.params.tab === ve.Profile,
                        "data-a-target": "profile-tab"
                    }, Object(m.d)("Profile", "SettingsTabs")), p.createElement(w._20, {
                        linkTo: "/settings/prime",
                        active: this.props.match.params.tab === ve.Prime,
                        "data-a-target": "prime-tab"
                    }, Object(m.d)("Prime", "SettingsTabs")), p.createElement(w._20, {
                        linkTo: "/settings/channel",
                        active: this.props.match.params.tab === ve.Channel,
                        "data-a-target": "channel-tab"
                    }, Object(m.d)("Channel and Videos", "SettingsTabs")), p.createElement(w._20, {
                        linkTo: "/settings/security",
                        active: this.props.match.params.tab === ve.Security,
                        "data-a-target": "security-tab"
                    }, Object(m.d)("Security and Privacy", "SettingsTabs")), p.createElement(w._20, {
                        linkTo: "/settings/notifications",
                        active: this.props.match.params.tab === ve.Notifications,
                        "data-a-target": "notifications-tab"
                    }, Object(m.d)("Notifications", "SettingsTab")), p.createElement(w._20, {
                        linkTo: "/settings/connections",
                        active: this.props.match.params.tab === ve.Connections,
                        "data-a-target": "connections-tab"
                    }, Object(m.d)("Connections", "SettingsTabs")), p.createElement(w._20, {
                        linkTo: "/subscriptions",
                        active: !1,
                        "data-a-target": "subscriptions-tab"
                    }, Object(m.d)("Subscriptions", "SettingsTabs")))))
                }, t = d.__decorate([Object(h.c)("SettingsTabs")], t)
            }(p.Component),
            ke = Object(g.e)(_e),
            we = 3,
            Ne = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.redirectToProfilePage = function() {
                        return p.createElement(g.a, {
                            to: "/settings/profile"
                        })
                    }, t
                }
                return d.__extends(t, e), t.prototype.render = function() {
                    return this.props.isLoggedIn ? p.createElement(w.V, {
                        padding: {
                            x: we
                        },
                        fullHeight: !0,
                        fullWidth: !0,
                        display: w.H.Flex,
                        flexDirection: w.J.Column,
                        flexWrap: w.K.NoWrap
                    }, p.createElement(b.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), p.createElement(v.a, null, p.createElement(ke, null)), p.createElement(w.V, {
                        padding: {
                            y: 2
                        }
                    }, p.createElement(g.d, null, p.createElement(g.b, {
                        path: "/settings/profile",
                        component: me
                    }), p.createElement(g.b, {
                        path: "/settings/prime",
                        component: ge
                    }), p.createElement(g.b, {
                        path: "/settings/channel",
                        component: z
                    }), p.createElement(g.b, {
                        path: "/settings/security",
                        component: Ee
                    }), p.createElement(g.b, {
                        path: "/settings/notifications",
                        component: pe
                    }), p.createElement(g.b, {
                        path: "/settings/connections",
                        component: I
                    }), p.createElement(g.b, {
                        path: "/settings",
                        render: this.redirectToProfilePage
                    })))) : (this.props.login(), p.createElement(f.a, {
                        message: Object(m.d)("You must be logged in to view this page", "SettingsRoot")
                    }))
                }, t = d.__decorate([Object(h.c)("SettingsRoot", {
                    autoReportInteractive: !0
                })], t)
            }(p.Component),
            Oe = Object(r.a)(function(e) {
                return {
                    isLoggedIn: Object(u.d)(e)
                }
            }, function(e) {
                return Object(s.bindActionCreators)({
                    login: function() {
                        return Object(c.f)(l.a.SettingsPage)
                    }
                }, e)
            })(Ne);
        n.d(t, "SettingsRoot", function() {
            return Oe
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
    }
});
//# sourceMappingURL=pages.settings-7c9811a7e65b26f6451fa6ddcb4c0d24.js.map