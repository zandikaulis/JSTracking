webpackJsonp([49], {
    "/LBW": function(e, t, n) {
        "use strict";
        t.h = function(e) {
            var t = {
                action_name: e.actionName,
                action_type: "click",
                client_time: (new Date).getTime(),
                displayed_balance: e.displayedBalance,
                emote_level: e.emoteLevel,
                emote_type: e.emoteType,
                bits_location: e.location || o.ChatTooltip
            };
            a.m.track(r.SpadeEventType.BitsCardInteraction, t)
        }, n.d(t, "b", function() {
            return o
        }), n.d(t, "a", function() {
            return s
        }), t.d = function(e) {
            return e && l[e] ? l[e] : (a.i.error(new Error('Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), 'Buy Bits card contains improperly rendered offers, or offers unknown to Science. Tracking as "buy_100"'), s.Buy100)
        }, t.e = function(e) {
            var t = {
                channel: e.channel,
                channel_id: e.channelID,
                available: e.available,
                host: "twitch.tv"
            };
            a.m.track(r.SpadeEventType.BitsAdsAvailability, t)
        }, t.f = function(e) {
            var t = {
                distinct_id: a.n.session.deviceID,
                host: "twitch.tv",
                request_id: e.requestID,
                campaign_id: e.campaignID,
                adblock: e.adblock
            };
            a.m.track(r.SpadeEventType.BitsAdsImpression, t)
        }, n.d(t, "c", function() {
            return i
        }), t.g = function(e) {
            var t = a.m.getLastPageview(),
                n = {
                    location: t ? t.location || "" : "",
                    ad_returned: null,
                    campaign_id: e.campaignID,
                    distinct_id: a.n.session.deviceID,
                    host: "twitch.tv",
                    request_id: e.requestID,
                    request_method: e.requestMethod
                };
            a.m.track(r.SpadeEventType.BitsAdsRequest, n)
        };
        var i, a = n("6sO2"),
            r = n("vH/s"),
            o = {
                ChatTooltip: "card",
                GetBitsButton: "get_bits_button",
                BitsLandingPage: "bits_landing_page"
            },
            s = {
                BuyMain: "buy_main",
                Buy100: "buy_100",
                Buy500: "buy_500",
                Buy1000: "buy_1000",
                Buy1500: "buy_1500",
                Buy5000: "buy_5000",
                Buy10000: "buy_10000",
                Buy25000: "buy_25000",
                CloseCard: "menu_close",
                OpenCard: "menu_open",
                PreviewEmote: "emote_preview",
                WatchAd: "watch_ad",
                WatchAnotherAd: "watch_another_ad"
            },
            l = {
                100: s.Buy100,
                500: s.Buy500,
                1e3: s.Buy1000,
                1500: s.Buy1500,
                5e3: s.Buy5000,
                1e4: s.Buy10000,
                25e3: s.Buy25000
            };
        (i || (i = {})).ShowAdButton = "show_ad_button"
    },
    "1E7T": function(e, t) {},
    "1pvm": function(e, t) {},
    "4Jix": function(e, t) {},
    "4JjK": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Ready = 0] = "Ready", e[e.Dimensions = 1] = "Dimensions", e[e.RequestAd = 2] = "RequestAd", e[e.OnStart = 3] = "OnStart", e[e.OnCredit = 4] = "OnCredit", e[e.OnFinish = 5] = "OnFinish", e[e.OnClose = 6] = "OnClose", e[e.OnError = 7] = "OnError", e[e.Adblock = 8] = "Adblock", e[e.LimitReached = 9] = "LimitReached"
        }(i || (i = {}))
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
    "4Uxc": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "CollectionsPage_UserAndCurrentUser"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "ownerLogin"
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
                                    value: "ownerLogin"
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
                                    value: "displayName"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "collections"
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
                                                            value: "title"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "items"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "first"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "1"
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
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "viewCount"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "thumbnailURL"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "320"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "180"
                                                            }
                                                        }],
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
                    }, {
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
                end: 365
            }
        };
        n.loc.source = {
            body: "query CollectionsPage_UserAndCurrentUser($ownerLogin: String! $limit: Int $cursor: Cursor) {\nuser(login: $ownerLogin) {\nid\nlogin\ndisplayName\ncollections(first: $limit after: $cursor) {\nedges {\ncursor\nnode {\nid\ntitle\nitems(first: 1) {\ntotalCount\n}\nviewCount\nthumbnailURL(width: 320 height: 180)\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}\ncurrentUser {\nid\nroles {\nisStaff\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "576g": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "cheer"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "User"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "cheer"
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
                                            value: "prefix"
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
                                            value: "tiers"
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
                                                    value: "bits"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "color"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "images"
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
                                                            value: "url"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "theme"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isAnimated"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "dpiScale"
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
            }],
            loc: {
                start: 0,
                end: 133
            }
        };
        n.loc.source = {
            body: "fragment cheer on User {\ncheer {\nid\nemotes {\nid\nprefix\ntype\ntiers {\nid\nbits\ncolor\nimages {\nid\nurl\ntheme\nisAnimated\ndpiScale\n}\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "6Rwu": function(e, t) {},
    "6lb1": function(e, t) {},
    AL3x: function(e, t) {},
    Ic9h: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return g
        });
        var i = n("TToO"),
            a = n("HW6M"),
            r = (n.n(a), n("KSGD")),
            o = (n.n(r), n("U7vG")),
            s = (n.n(o), n("F8kA")),
            l = n("5kgt"),
            c = n("SI0h"),
            d = n("eXld"),
            u = n("2aoH"),
            m = n("Odds"),
            p = n("1E7T"),
            h = (n.n(p), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.currentPath = t.props.location.pathname, t.onHistoryChange = function(e) {
                        e.pathname !== t.currentPath && t.context.scrollToTop(), t.currentPath = e.pathname
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = a((t = {}, t["channel-page-layout__scroll-area--theatre-mode"] = !!this.props.theatreMode, t));
                    return o.createElement(m.X, i.__assign({
                        className: "chennel-page-layout",
                        display: m.J.Flex,
                        flexDirection: m.L.Column,
                        flexWrap: m.M.NoWrap,
                        fullHeight: !0
                    }, Object(l.a)(this.props)), o.createElement(d.b, {
                        className: e,
                        suppressScrollX: !0,
                        addPaddingWhenPlayerIsPersisting: !0
                    }), o.createElement(u.a, null, o.createElement(c.a, {
                        currentPage: this.props.currentPage,
                        channelLogin: this.props.ownerLogin || ""
                    })), o.createElement(m.X, {
                        padding: {
                            top: 2,
                            x: 3
                        }
                    }, this.props.children));
                    var t
                }, t.prototype.componentDidMount = function() {
                    this.unsubscribeFromHistory = this.props.history.listen(this.onHistoryChange)
                }, t.prototype.componentWillUnmount = function() {
                    this.unsubscribeFromHistory()
                }, t.contextTypes = {
                    scrollToTop: r.func
                }, t
            }(o.Component)),
            g = Object(s.f)(h)
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
            m = (n("weaG"), function(e) {
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
            p = n("4Q9N"),
            h = n("Tt3k"),
            g = n("W6ca"),
            f = n("xgnX"),
            v = n("CSlQ"),
            b = (n("AL3x"), n("nmDn"));
        n.d(t, "b", function() {
            return k
        }), n.d(t, "a", function() {
            return S
        });
        var k = [{
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
                            var i = Object(h.a)(n),
                                a = (n.size / 1024 / 1024).toFixed(4);
                            parseInt(a, 10) > 10 ? t.setState({
                                statusMessage: f.b.BadSizeError
                            }) : (t.setState({
                                selectedImageIndex: void 0,
                                imagePreviewURL: "",
                                imageFormat: "",
                                currentImageHasTallAspectRatio: !1
                            }), Object(h.b)(n, function(e) {
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
                                        return i.trys.push([1, 3, , 4]), [4, Object(g.a)(this.props.userID, this.props.authToken, p.a.ProfileImage, this.state.imageFormat)];
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
                                                    Object(g.c)(n, s.currentImage)
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
                            imagePreviewURL: k[e].uri
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
                        t = k.map(function(t, n) {
                            return r.createElement(m, {
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
                    var p = null;
                    if (null !== this.state.statusMessage) {
                        var h = Object(f.c)(this.state.statusMessage),
                            g = h.message,
                            v = h.type;
                        p = r.createElement(u._3, {
                            label: g,
                            type: v
                        })
                    }
                    var b = this.props.login;
                    return this.props.displayName && (b = this.props.displayName), r.createElement(u.X, {
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
                        userName: b
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
                    }, p), r.createElement(u._21, {
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
                                    return i.trys.push([1, 3, , 4]), [4, Object(g.b)(this.props.userID, this.props.authToken, this.state.selectedImageIndex)];
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
                }, t = i.__decorate([Object(c.a)(b, {
                    options: function(e) {
                        return {
                            variables: {
                                login: e.login
                            }
                        }
                    }
                })], t)
            }(r.Component),
            S = Object(v.d)("Profile Edit")(_)
    },
    MSvX: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("OAwv"),
            r = n("U7vG"),
            o = n("6sO2"),
            s = n("Ejve"),
            l = "legacy_routes_enabled",
            c = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.isEnabled = !1, n.onHistoryChange = function(e, t) {
                        n.isEnabled ? "REPLACE" !== t ? e && e.pathname ? (n.logger.debug("Location changed", {
                            path: e.pathname
                        }), n.legacyRoutes.forEach(function(t) {
                            try {
                                if (e.pathname.match(t)) {
                                    n.logger.debug("Found legacy route. Reloading...");
                                    var i = "" !== e.search ? a.parse(e.search) : {};
                                    i["from-redirect"] = "true";
                                    var r = a.stringify(i),
                                        l = o.a.buildType === s.a.Dev ? window.location.host : window.location.hostname,
                                        c = window.location.protocol + "//" + l + e.pathname + "?" + r;
                                    return n.logger.debug("Redirecting to legacy route", {
                                        newUrl: c
                                    }), void window.location.replace(c)
                                }
                            } catch (e) {
                                o.i.withCategory("legacy").error(e, "Unable to determine legacy reload match", {
                                    regex: t
                                })
                            }
                        })) : n.logger.debug("Unable to process history change. Path is null or empty.") : n.logger.debug("Skipping legacy route processing, due to history replace.") : n.logger.debug("Legacy routing not enabled.")
                    }, n.processRedirectParam = function(e) {
                        if (e && e.pathname && e.search) {
                            var t = "" !== e.search ? a.parse(e.search) : {};
                            if (t["from-redirect"]) {
                                delete t["from-redirect"];
                                var i = a.stringify(t),
                                    r = "";
                                i.length > 0 && (r = "?" + i), n.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: r
                                })
                            }
                        }
                    }, n.isEnabled = o.b.get(l, !1), n.logger = o.i.withCategory("legacy-routes"), n.legacyRoutes = n.buildRoutes(), n.props.history.listen(n.onHistoryChange), n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return null
                }, t.prototype.componentDidMount = function() {
                    this.processRedirectParam(this.props.history.location)
                }, t.prototype.buildRoutes = function() {
                    if (!this.isEnabled) return [];
                    this.logger.debug("Building legacy routes...");
                    var e = o.b.get("legacy_routes", []),
                        t = [];
                    if (!e || 0 === e.length) return this.logger.debug("No legacy routes found in settings."), t;
                    for (var n = 0, i = e; n < i.length; n++) {
                        var a = i[n];
                        try {
                            var r = new RegExp(a, "i");
                            t.push(r)
                        } catch (e) {
                            this.logger.debug("Failed to parse route!", {
                                val: a,
                                err: e
                            })
                        }
                    }
                    return this.logger.debug("Done building legacy routes!", {
                        count: t.length
                    }), t
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return l
        }), n.d(t, !1, function() {
            return "legacy_routes"
        }), n.d(t, "b", function() {
            return c
        })
    },
    OLKT: function(e, t) {},
    OcEY: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "bitsOffersFragment"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "BitsOffer"
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
                            value: "type"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "bits"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "InlineFragment",
                        typeCondition: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "BitsBundleOffer"
                            }
                        },
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
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
                                    value: "discount"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isPromo"
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
                                    value: "includesVAT"
                                },
                                arguments: [],
                                directives: []
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
                                            value: "id"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 145
            }
        };
        n.loc.source = {
            body: "fragment bitsOffersFragment on BitsOffer {\nid\ntype\nbits\n... on BitsBundleOffer {\nprice\ndiscount\nisPromo\nurl\nincludesVAT\npromotion {\nid\ntype\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Ojfd: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelBanner"
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
            body: "query ChannelBanner($login: String!) {\nuser(login: $login) {\nid\nbannerImageURL\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    Ouuk: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e || (e = navigator.userAgent), !!i.exec(e)
        };
        var i = /\scurse\/\d/
    },
    PPK2: function(e, t) {},
    SI0h: function(e, t, n) {
        "use strict";
        var i = n("TPVZ");
        n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "b", function() {
            return i.b
        }), n.d(t, "a", function() {
            return i.a
        })
    },
    TPVZ: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("HW6M"),
            r = n("U7vG"),
            o = n("F8kA"),
            s = n("6sO2"),
            l = n("hdYS"),
            c = n("DtWM"),
            d = n("+Znq"),
            u = n("7vx8"),
            m = n("czpb"),
            p = n("RH2O"),
            h = n("Aj/L"),
            g = n("N221"),
            f = n("jF7o"),
            v = n("iMOk"),
            b = n("WVx7"),
            k = n("ySfT"),
            y = n("ZJYd"),
            _ = n("/LBW"),
            S = n("Odds"),
            E = (n("fHoP"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handlePromoBuy = function(e) {
                        var n = Object(y.b)({
                            trackBitsCardInteraction: t.props.trackBitsCardInteraction,
                            channelID: t.props.channelID,
                            purchaseUrl: e.currentTarget.dataset.purchaseUrl,
                            bitsAmount: e.currentTarget.dataset.bitsAmount,
                            location: _.b.GetBitsButton
                        });
                        n && t.props.onPromoBuyClose(n)
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = r.createElement(S.X, null, r.createElement(S.X, {
                        padding: {
                            x: 5,
                            y: 2
                        },
                        textAlign: S._26.Center
                    }, r.createElement(S._25, {
                        type: S._30.H4,
                        bold: !0
                    }, Object(s.d)("Cheer Bits for your Favorite Streamer!", "Bits--FirstTimeUserPrompt"))), r.createElement(S.X, {
                        padding: {
                            x: 2,
                            bottom: 1
                        }
                    }, r.createElement(S._25, {
                        type: S._30.Span,
                        color: S.F.Alt
                    }, Object(s.d)("Bits are fun, animated emotes. Cheering Bits celebrates moments you love with the community right in chat and similar to subscribing, helps support Partners and Affiliates.", "Bits--FirstTimeUserPrompt"), r.createElement(S.S, {
                        margin: {
                            left: .5
                        }
                    }, r.createElement("a", {
                        onClick: this.props.toggleShowTutorial
                    }, Object(s.d)("How do I cheer?", "Bits--FirstTimeUserPrompt"))))), r.createElement(S.X, {
                        padding: {
                            bottom: 2
                        },
                        textAlign: S._26.Center
                    }, r.createElement(S.S, {
                        margin: {
                            bottom: 1
                        }
                    }, r.createElement(S._25, {
                        type: S._30.H6,
                        bold: !0,
                        className: "bits-first-time-user-prompt__promo-header"
                    }, Object(s.d)("First Time Purchaser Discount Pack!", "Bits--FirstTimeUserPrompt"))), r.createElement(S.u, {
                        onClick: this.handlePromoBuy,
                        "data-purchase-url": this.props.promo.url,
                        "data-bits-amount": this.props.promo.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.promo.bits
                    }, Object(s.d)("{price} For {amount} Bits", {
                        price: this.props.promo.price,
                        amount: this.props.promo.bits
                    }, "Bits--FirstTimeUserPrompt"))));
                    return this.props.isShowingTutorial ? r.createElement(S.X, {
                        className: "bits-first-time-user-prompt",
                        fullWidth: !0
                    }, r.createElement(S.X, {
                        className: "bits-first-time-user-prompt__tutorial-back-button"
                    }, r.createElement(S.u, {
                        onClick: this.props.toggleShowTutorial,
                        type: S.z.Text
                    }, r.createElement(S._12, {
                        asset: S._13.Play,
                        height: 8
                    }), " ", Object(s.d)("Back", "Bits--FirstTimeUserPrompt"))), r.createElement(S.X, {
                        textAlign: S._26.Center,
                        padding: {
                            x: 2,
                            bottom: 2,
                            top: 5
                        },
                        fullHeight: !0
                    }, r.createElement(S.e, {
                        type: S.i.SlideInLeft,
                        duration: S.g.Long,
                        enabled: !0
                    }, r.createElement(k.a, null)))) : this.props.animateFirstTimeUserIntro ? r.createElement(S.S, {
                        className: "bits-first-time-user-prompt"
                    }, r.createElement(S.e, {
                        type: S.i.SlideInRight,
                        duration: S.g.Long,
                        enabled: this.props.animateFirstTimeUserIntro
                    }, e)) : r.createElement(S.X, {
                        className: "bits-first-time-user-prompt"
                    }, e)
                }, t
            }(r.Component)),
            C = n("jxGs"),
            N = n("bkpq"),
            w = n("CSlQ"),
            A = n("annQ"),
            B = (n("lGVF"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hideFirstTimeUserIntro: !1
                    }, t.trackBitsCardInteraction = function(e, n) {
                        var i = {
                            actionName: e,
                            emoteType: n && n.emoteType,
                            emoteLevel: n && n.emoteLevel,
                            location: _.b.GetBitsButton,
                            displayedBalance: t.props.bitsBalance || 0
                        };
                        Object(_.h)(i)
                    }, t.onClose = function() {}, t.onPromoBuyClose = function(e) {
                        Object(f.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.loading) return r.createElement(S._21, {
                        "data-a-target": "get-bits-button-content-loading",
                        display: S.J.Flex,
                        flexDirection: S.L.Column,
                        alignItems: S.c.Center,
                        justifyContent: S.W.Center,
                        textAlign: S._26.Center,
                        padding: {
                            y: 5
                        }
                    }, r.createElement(S._1, {
                        delay: 0
                    }), r.createElement(S.X, {
                        padding: {
                            top: 2
                        }
                    }, r.createElement(S._25, {
                        italic: !0
                    }, Object(s.d)("Fetching bits", "Bits--GetBitsButtonContent"))));
                    var e = null;
                    if (this.props.bitsOffers) {
                        var t = this.props.bitsOffers.find(function(e) {
                            return Object(y.c)(e)
                        });
                        t && t.type === C.b && this.props.channelID && !this.state.hideFirstTimeUserIntro && (e = r.createElement(E, {
                            promo: t,
                            animateFirstTimeUserIntro: this.props.animateFirstTimeUserIntro,
                            isShowingTutorial: this.props.isShowingTutorial,
                            toggleShowTutorial: this.props.toggleShowTutorial,
                            trackBitsCardInteraction: this.trackBitsCardInteraction,
                            channelID: this.props.channelID,
                            onPromoBuyClose: this.onPromoBuyClose
                        }))
                    }
                    var n = null;
                    void 0 !== this.props.bitsBalance && this.props.bitsConfig ? n = r.createElement(S._21, {
                        borderBottom: !0,
                        textAlign: S._26.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, r.createElement(S._25, {
                        type: S._30.Span
                    }, Object(s.d)("You have {bitsBalance}", {
                        bitsBalance: r.createElement(v.a, {
                            withImage: !0,
                            withText: !0,
                            count: this.props.bitsBalance,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))) : void 0 === this.props.bitsBalance && this.props.bitsConfig && (n = r.createElement(S._21, {
                        borderBottom: !0,
                        textAlign: S._26.Center,
                        fullWidth: !0,
                        padding: {
                            y: .5
                        }
                    }, r.createElement(S._25, {
                        type: S._30.Span
                    }, Object(s.d)("{bitsGem} Log in to see your Bits balance", {
                        bitsGem: r.createElement(v.a, {
                            count: 100,
                            withImage: !0,
                            bitsConfig: this.props.bitsConfig
                        })
                    }, "Bits--GetBitsButton"))));
                    var i = null;
                    return this.props.bitsConfig && this.props.channelLogin && (i = r.createElement(b.a, {
                        bitsConfig: this.props.bitsConfig,
                        channelLogin: this.props.channelLogin,
                        closeAllBits: this.onClose,
                        onClose: this.onClose,
                        trackBitsCardInteraction: this.trackBitsCardInteraction,
                        location: _.b.GetBitsButton,
                        hidePromos: !0,
                        hideWateb: !0,
                        fullsize: !0
                    })), r.createElement(g.b, {
                        className: "get-bits-button-content"
                    }, r.createElement(S.X, null, n, e, i))
                }, t = i.__decorate([Object(w.d)("GetBitsButtonContent"), Object(u.a)(A, {
                    name: "data",
                    props: function(e) {
                        var t, n;
                        e.data && e.data.user && e.data.user.cheer && (t = Object(N.a)(e.data.user.cheer.emotes), n = e.data.user.id);
                        var i, a;
                        return e.data && e.data.currentUser ? (a = e.data.currentUser.bitsBalance, i = e.data.currentUser.bitsOffers) : e.data && e.data.bitsOffers && (i = e.data.bitsOffers), {
                            loading: e.data && e.data.loading,
                            bitsOffers: i,
                            bitsBalance: a,
                            bitsConfig: t,
                            channelID: n
                        }
                    },
                    skip: function(e) {
                        return !e.channelLogin
                    },
                    options: function(e) {
                        return {
                            variables: {
                                login: e.channelLogin,
                                withChannel: !!e.channelLogin,
                                isLoggedIn: e.isLoggedIn
                            }
                        }
                    }
                })], t)
            }(r.Component)),
            O = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        isShowingTutorial: !1,
                        animateFirstTimeUserIntro: !1
                    }, t.toggleBalloon = function(e) {
                        t.setState({
                            animateFirstTimeUserIntro: !1
                        }), e || Object(_.h)({
                            actionName: _.a.BuyMain,
                            location: _.b.GetBitsButton,
                            displayedBalance: 0
                        })
                    }, t.toggleShowTutorial = function() {
                        t.setState({
                            isShowingTutorial: !t.state.isShowingTutorial,
                            animateFirstTimeUserIntro: !0
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null;
                    return this.props.channelLogin && (e = r.createElement(B, {
                        isLoggedIn: this.props.isLoggedIn,
                        channelLogin: this.props.channelLogin,
                        toggleShowTutorial: this.toggleShowTutorial,
                        isShowingTutorial: this.state.isShowingTutorial,
                        animateFirstTimeUserIntro: this.state.animateFirstTimeUserIntro
                    })), r.createElement(d.a, {
                        onToggle: this.toggleBalloon
                    }, r.createElement(S.u, {
                        dropdown: !0
                    }, Object(s.d)("Get Bits", "Bits--GetBitsButton")), r.createElement(S.p, {
                        direction: S.q.BottomRight,
                        size: S.r.Large
                    }, e))
                }, t = i.__decorate([Object(w.d)("GetBitsButton")], t)
            }(r.Component),
            x = Object(p.b)(function(e) {
                return {
                    isLoggedIn: Object(h.d)(e)
                }
            })(O),
            I = n("E9Qg"),
            F = (n("4Jix"), n("Ojfd")),
            L = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e, t, n = {
                            "channel-banner--open": !this.props.collapsed
                        },
                        i = this.props.data;
                    return i && i.loading || !this.props.firstPageLoaded ? e = r.createElement(S._5, {
                        height: 380,
                        "data-test-selector": "channel-banner__placeholder"
                    }) : (i && i.user && i.user.bannerImageURL ? t = {
                        backgroundImage: "url(" + i.user.bannerImageURL + ")"
                    } : (n["channel-banner--default"] = !0, t = {
                        backgroundImage: "url(" + I + ")"
                    }), e = r.createElement("div", {
                        className: "channel-banner__image",
                        style: t
                    })), r.createElement("div", {
                        className: a("channel-banner", n),
                        "data-test-selector": "channel-banner",
                        onTransitionEnd: this.props.onTransitionEnd
                    }, r.createElement(S.S, {
                        fullWidth: !0
                    }, e))
                }, t
            }(r.Component),
            T = Object(u.a)(F, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelLogin
                        }
                    }
                },
                skip: function(e) {
                    return !e.channelLogin || !e.firstPageLoaded
                }
            })(L),
            j = Object(p.b)(function(e) {
                return {
                    firstPageLoaded: e.session.firstPageLoaded
                }
            })(T),
            D = n("2KeS"),
            U = n("V5M+"),
            W = n("x9n8"),
            P = (n("WClm"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.openModal = function(e) {
                        e.stopPropagation(), t.props.showModal(W.a, {
                            userID: t.props.userID,
                            login: t.props.login,
                            displayName: t.props.displayName,
                            showCloser: !0
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return r.createElement(S.X, {
                        className: "edit-profile-overlay",
                        display: S.J.Flex,
                        justifyContent: S.W.Center,
                        alignContent: S.b.Center,
                        fullHeight: !0,
                        fullWidth: !0
                    }, r.createElement(S.v, {
                        overlay: !0,
                        ariaLabel: Object(s.d)("Edit Profile", "ChannelHeader"),
                        icon: S._13.Edit,
                        onClick: this.openModal
                    }))
                }, t = i.__decorate([Object(w.d)("EditProfileOverlay")], t)
            }(r.Component)),
            M = Object(p.b)(null, function(e) {
                return Object(D.b)({
                    showModal: U.d
                }, e)
            })(P),
            H = n("70dR"),
            R = (n("z4Db"), n("kOMe"));
        n.d(t, "b", function() {
            return X
        }), n.d(t, "a", function() {
            return $
        });
        var X, z = "channel-header__edit-profile-overlay",
            V = "user-channel-header-item",
            q = "channel-header__verified-badge",
            G = "channel-header__live-indicator",
            J = "channel-header__channel-link";
        ! function(e) {
            e[e.Channel = 1] = "Channel", e[e.Clips = 2] = "Clips", e[e.Collections = 3] = "Collections", e[e.Events = 4] = "Events", e[e.Success = 5] = "Success", e[e.Followers = 6] = "Followers", e[e.Following = 7] = "Following", e[e.Videos = 8] = "Videos"
        }(X || (X = {}));
        var $ = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    live: !1,
                    bannerHidden: !0,
                    bannerSlideIn: !1
                }, t.verifiedBadgeElement = r.createElement(S._33, {
                    label: Object(s.d)("Verified", "ChannelHeader"),
                    direction: S._35.Right
                }, r.createElement(S.X, {
                    className: "channel-header__verified",
                    "data-target": q,
                    display: S.J.Flex,
                    alignItems: S.c.Center,
                    margin: {
                        left: 1
                    }
                }, r.createElement(S._12, {
                    asset: S._13.Verified
                }))), t.liveIndicatorElement = r.createElement(S.X, {
                    margin: {
                        left: 1
                    },
                    "data-target": G
                }, r.createElement(S._33, {
                    label: Object(s.d)("Live Now", "ChannelHeader"),
                    direction: S._35.Right
                }, r.createElement(S.Z, {
                    pulse: !0
                }))), t.renderAvatarEditButton = function() {
                    if (!t.props.data) return null;
                    return t.props.data && t.props.data.currentUser && t.props.data.user && t.props.data.currentUser.roles && (t.props.data.currentUser.id === t.props.data.user.id || t.props.data.currentUser.roles.isStaff || t.props.data.currentUser.roles.isSiteAdmin) ? r.createElement(S._21, {
                        className: z,
                        background: S.m.Overlay,
                        position: S._6.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        fullHeight: !0,
                        fullWidth: !0,
                        display: S.J.InlineFlex,
                        alignItems: S.c.Center,
                        justifyContent: S.W.Center
                    }, r.createElement(M, {
                        userID: t.props.data.user.id,
                        login: t.props.data.user.login,
                        displayName: t.props.data.user.displayName
                    })) : null
                }, t.toggleChannelBanner = function() {
                    t.setState(function(e) {
                        var t = !e.bannerSlideIn;
                        return t ? {
                            bannerHidden: !e.bannerHidden,
                            bannerSlideIn: t
                        } : {
                            bannerSlideIn: t
                        }
                    })
                }, t.completedBannerAnimation = function() {
                    t.setState(function(e) {
                        if (!e.bannerSlideIn) return {
                            bannerHidden: !0
                        }
                    })
                }, t.onUpdateDebounce = function() {
                    if (!t.resizeAnimationFrame && t.channelHeader) {
                        var e = t.channelHeader.querySelector('[data-target="channel-header-left"]');
                        t.updateWidth(t.getWidth(e).width), t.resizeAnimationFrame = requestAnimationFrame(t.handleWindowResize)
                    }
                }, t.handleWindowResize = function() {
                    t.resizeAnimationFrame = null, t.getChannelHeaderSize()
                }, t.saveChannelHeaderRef = function(e) {
                    return t.channelHeader = e
                }, t
            }
            return i.__extends(t, e), t.prototype.componentWillMount = function() {
                this.updateLiveState(this.props)
            }, t.prototype.componentDidMount = function() {
                window.addEventListener("resize", this.onUpdateDebounce), !this.props.data || this.props.data.loading || this.props.data.error || this.getChannelHeaderSize(), this.reportInteractive()
            }, t.prototype.componentWillReceiveProps = function(e) {
                this.updateLiveState(e)
            }, t.prototype.componentDidUpdate = function() {
                this.channelHeader && this.updateWidth(this.getWidth(this.channelHeader.querySelector('[data-target="channel-header-left"]')).width), this.onUpdateDebounce(), this.reportInteractive()
            }, t.prototype.componentWillUnmount = function() {
                this.resizeAnimationFrame && cancelAnimationFrame(this.resizeAnimationFrame), window.removeEventListener("resize", this.onUpdateDebounce), this.props.latencyTracking.reportInteractive()
            }, t.prototype.updateWidth = function(e) {
                var t = e !== this.width || this.width !== this.prevWidth;
                void 0 !== this.width && (this.prevWidth = this.width), this.width !== e && (this.width = e), t && (this.resizeAnimationFrame && (cancelAnimationFrame(this.resizeAnimationFrame), this.resizeAnimationFrame = null), this.onUpdateDebounce())
            }, t.prototype.render = function() {
                var e, t, n = 0,
                    i = 0,
                    u = 0,
                    m = s.a.defaultAvatarURL;
                this.props.data && this.props.data.user && !this.props.data.loading && !this.props.data.error && (n = this.props.data.user.videos.totalCount, i = this.props.data.user.followers.totalCount, u = this.props.data.user.follows.totalCount, m = this.props.data.user.profileImageURL, e = this.props.data.user.displayName, t = this.props.data.user.roles.isPartner);
                var p = this.state.live && !this.isActiveTab(X.Channel),
                    h = this.createChannelLinks(n, i, u),
                    g = {
                        "channel-header__user": !0,
                        "channel-header__user--selected": this.isActiveTab(X.Channel)
                    },
                    f = null;
                this.canRenderBitsButton() && (f = r.createElement(S.X, {
                    margin: {
                        left: 1
                    }
                }, r.createElement(x, {
                    channelLogin: this.props.channelLogin
                })));
                var v, b = r.createElement(S.X, {
                    display: S.J.Flex,
                    flexWrap: S.M.NoWrap,
                    alignItems: S.c.Center,
                    flexShrink: 0
                }, r.createElement(S.X, {
                    className: "channel-header__user-avatar channel-header__user-avatar--active",
                    margin: {
                        right: 1
                    },
                    display: S.J.Flex,
                    flexShrink: 0,
                    alignItems: S.c.Stretch
                }, r.createElement(S.X, {
                    position: S._6.Relative
                }, r.createElement(S.l, {
                    size: 36,
                    imageSrc: m,
                    imageAlt: e || ""
                }), this.renderAvatarEditButton())), e ? r.createElement(S._25, {
                    type: S._30.H5
                }, e) : r.createElement(S.X, {
                    alignItems: S.c.Center
                }, r.createElement(S._5, {
                    lineCount: 1,
                    width: 120
                })), p && this.liveIndicatorElement, t && this.verifiedBadgeElement);
                v = this.isActiveTab(X.Channel) ? r.createElement("div", {
                    className: "channel-header__banner-toggle",
                    onClick: this.toggleChannelBanner,
                    "data-target": J,
                    "data-a-target": V
                }, b) : this.props.data && this.props.data.user && this.props.data.user.login ? r.createElement(o.a, {
                    to: "/" + this.props.data.user.login,
                    "data-target": J,
                    "data-a-target": V
                }, b) : b;
                var k = this.state.bannerHidden ? S.J.HideAccessible : S.J.Block,
                    y = null;
                return this.isActiveTab(X.Channel) && (y = r.createElement(S.X, {
                    display: k
                }, r.createElement(j, {
                    channelLogin: this.props.channelLogin,
                    collapsed: !this.state.bannerSlideIn,
                    onTransitionEnd: this.completedBannerAnimation
                }))), r.createElement(S.X, {
                    className: "channel-header",
                    flexShrink: 0
                }, y, r.createElement(S.X, {
                    display: S.J.Flex,
                    justifyContent: S.W.Between,
                    flexWrap: S.M.NoWrap,
                    fullHeight: !0,
                    refDelegate: this.saveChannelHeaderRef,
                    margin: {
                        x: 3
                    }
                }, r.createElement(S.X, {
                    display: S.J.Flex,
                    alignItems: S.c.Stretch,
                    flexShrink: 0,
                    flexWrap: S.M.NoWrap,
                    "data-target": "channel-header-left"
                }, r.createElement(S.S, {
                    className: a(g),
                    padding: {
                        y: .5,
                        right: 2
                    },
                    display: S.J.Flex,
                    flexWrap: S.M.NoWrap,
                    alignItems: S.c.Center,
                    flexShrink: 0
                }, v), this.renderTabs(h), r.createElement(S.X, {
                    className: "channel-header__item channel-header__item--no-underline",
                    padding: {
                        x: 1
                    },
                    flexShrink: 0,
                    alignSelf: S.d.Center,
                    "data-target": "channel-header-button"
                }, r.createElement(d.a, {
                    alwaysMountBalloonContent: !0
                }, r.createElement(S.v, {
                    icon: S._13.NavMore,
                    ariaLabel: Object(s.d)("More", "ChannelHeader")
                }), r.createElement(S.p, {
                    direction: S.q.Bottom,
                    noTail: !0
                }, r.createElement(S.X, {
                    padding: {
                        y: 1
                    }
                }, this.renderDropdown(h)))))), r.createElement(S.X, {
                    display: S.J.Flex,
                    flexWrap: S.M.NoWrap,
                    flexShrink: 0,
                    alignItems: S.c.Center,
                    className: "channel-header__right",
                    "data-target": "channel-header-right"
                }, r.createElement(S.X, {
                    className: "channel-header__follow-button",
                    display: S.J.Flex,
                    alignItems: S.c.Stretch,
                    margin: {
                        left: 1
                    }
                }, r.createElement(l.a, {
                    updateContainerWidth: this.onUpdateDebounce,
                    isHostedFollow: !1,
                    channelLogin: this.props.channelLogin
                })), r.createElement(S.X, {
                    margin: {
                        left: 1
                    }
                }, r.createElement(H.a, {
                    updateContainerWidth: this.onUpdateDebounce,
                    channelLogin: this.props.channelLogin
                })), f)), r.createElement(c.a, {
                    onResize: this.onUpdateDebounce
                }))
            }, t.prototype.updateLiveState = function(e) {
                !e.data || e.data.loading || e.data.error || this.setState({
                    live: !!e.data.user.stream && "" !== e.data.user.stream.id
                })
            }, t.prototype.generateUserLink = function(e, t) {
                void 0 === e && (e = ""), void 0 === t && (t = !1);
                var n = this.props.data && this.props.data.user && this.props.data.user.login;
                if (!n) return "#";
                var i = "/" + n + "/" + e;
                return t ? Object(m.a)(i) : i
            }, t.prototype.renderTabs = function(e) {
                var t = this;
                return e.map(function(e) {
                    var n = e.count ? r.createElement(S.X, {
                            className: "channel-header__item-count",
                            display: S.J.Flex,
                            margin: {
                                left: .5
                            }
                        }, r.createElement(S._25, {
                            type: S._30.Span,
                            fontSize: S.N.Size5
                        }, e.count)) : null,
                        a = t.generateUserLink(e.pathSuffix, e.isExternal),
                        s = {};
                    return e.isExternal && (s.target = Object(m.b)() ? "_blank" : ""), r.createElement(S.S, {
                        key: "channel-header__item--" + e.label,
                        alignItems: S.c.Center,
                        flexShrink: 0
                    }, r.createElement(o.a, i.__assign({
                        className: "channel-header__item channel-header__item--hide " + (e.isSelected ? "channel-header__item--selected" : "")
                    }, s, {
                        to: a,
                        disabled: "#" === a,
                        "data-target": "channel-header-item",
                        "data-a-target": e.label.toLowerCase() + "-channel-header-item"
                    }), r.createElement(S.X, {
                        padding: {
                            x: 2,
                            y: .5
                        },
                        display: S.J.Flex
                    }, r.createElement(S._25, {
                        type: S._30.Span,
                        fontSize: S.N.Size5
                    }, e.label), n)))
                })
            }, t.prototype.renderDropdown = function(e) {
                var t = this;
                return e.map(function(e) {
                    var n = e.count ? r.createElement(S.X, {
                            className: "channel-header__item-count",
                            display: S.J.Flex,
                            margin: {
                                left: .5
                            }
                        }, r.createElement(S._25, {
                            type: S._30.Span
                        }, e.count)) : null,
                        a = t.generateUserLink(e.pathSuffix, e.isExternal),
                        o = {};
                    return e.isExternal && (o.targetBlank = !0), r.createElement(S.X, {
                        key: "channel-header__dropdown-item--" + e.label,
                        "data-target": "channel-header-dropdown-item"
                    }, r.createElement(S.V, i.__assign({
                        linkTo: a,
                        disabled: "#" === a
                    }, o), r.createElement(S.X, {
                        className: "channel-header__dropdown-hover-target",
                        padding: {
                            y: .5,
                            x: 1
                        },
                        display: S.J.Flex
                    }, r.createElement(S._25, {
                        type: S._30.Span
                    }, e.label), n)))
                })
            }, t.prototype.createChannelLinks = function(e, t, n) {
                return [{
                    label: Object(s.d)("Videos", "ChannelHeader"),
                    count: Object(s.e)(e),
                    pathSuffix: "videos/all",
                    isExternal: !1,
                    isSelected: this.isActiveTab(X.Videos)
                }, {
                    label: Object(s.d)("Clips", "ChannelHeader"),
                    pathSuffix: "clips",
                    isExternal: !1,
                    isSelected: this.isActiveTab(X.Clips)
                }, {
                    label: Object(s.d)("Collections", "ChannelHeader"),
                    pathSuffix: "collections",
                    isExternal: !1,
                    isSelected: this.isActiveTab(X.Collections)
                }, {
                    label: Object(s.d)("Events", "ChannelHeader"),
                    pathSuffix: "events",
                    isExternal: !1,
                    isSelected: this.isActiveTab(X.Events)
                }, {
                    label: Object(s.d)("Followers", "ChannelHeader"),
                    count: Object(s.e)(t),
                    pathSuffix: "followers",
                    isExternal: !1,
                    isSelected: this.isActiveTab(X.Followers)
                }, {
                    label: Object(s.d)("Following", "ChannelHeader"),
                    count: Object(s.e)(n),
                    pathSuffix: "following",
                    isExternal: !0,
                    isSelected: this.isActiveTab(X.Following)
                }]
            }, t.prototype.isActiveTab = function(e) {
                return X[this.props.currentPage] === X[e]
            }, t.prototype.getChannelHeaderSize = function() {
                if (this.channelHeader) {
                    var e = this.channelHeader.querySelector('[data-target="channel-header-left"]'),
                        t = this.channelHeader.querySelector('[data-target="channel-header-right"]'),
                        n = this.channelHeader.querySelectorAll('[data-target="channel-header-item"]'),
                        i = this.channelHeader.querySelectorAll('[data-target="channel-header-dropdown-item"]');
                    if (n.length) {
                        var a = this.getWidth(this.channelHeader).width,
                            r = this.getWidth(e).width + this.getWidth(t).width + 20 - a;
                        if (r > 0)
                            for (var o = n.length - 1; o >= 0; o--) {
                                if (!(l = n[o]).classList.contains("channel-header__item--hide")) {
                                    var s = this.getWidth(l);
                                    if (l.classList.add("channel-header__item--hide"), i[o].classList.remove("channel-header__item--hide"), (r -= s.width) <= 0) break
                                }
                            } else
                                for (o = 0; o < n.length; o++) {
                                    var l;
                                    if ((l = n[o]).classList.contains("channel-header__item--hide")) {
                                        l.classList.remove("channel-header__item--hide");
                                        if ((s = this.getWidth(l)).width >= Math.abs(r)) {
                                            l.classList.add("channel-header__item--hide");
                                            break
                                        }
                                        l.classList.remove("channel-header__item--hide"), i[o].classList.add("channel-header__item--hide"), r += s.width
                                    }
                                }
                        var c = this.channelHeader.querySelector('[data-target="channel-header-button"]');
                        if (c) {
                            var d = !this.channelHeader.querySelectorAll('[data-target="channel-header-item"].channel-header__item--hide').length;
                            c.classList.toggle("channel-header__item--hide", d)
                        }
                    }
                }
            }, t.prototype.canRenderBitsButton = function() {
                return this.props.data && !this.props.data.loading && this.props.currentPage !== X.Clips && this.props.data.currentUser && this.props.data.user && this.props.data.user.cheer
            }, t.prototype.getWidth = function(e) {
                return e ? {
                    width: e.clientWidth
                } : {
                    width: 0
                }
            }, t.prototype.reportInteractive = function() {
                !this.props.data || this.props.data.loading || this.props.data.error || this.props.latencyTracking.reportInteractive()
            }, t = i.__decorate([Object(u.a)(R, {
                options: function(e) {
                    return {
                        variables: {
                            login: e.channelLogin
                        }
                    }
                },
                skip: function(e) {
                    return !e.channelLogin
                }
            }), Object(w.d)("ChannelHeader")], t)
        }(r.Component)
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
    WClm: function(e, t) {},
    WVx7: function(e, t, n) {
        "use strict";

        function i(e) {
            return u.__awaiter(this, void 0, void 0, function() {
                var t, n, i, a, r;
                return u.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            if (t = h.b.get("bits_truex_partner_hash", ""), !(n = h.b.get("bits_truex_api_url", "")) || !t) return h.i.warn("Truex API info missing from dynamic settings"), [2, b.Error];
                            o.label = 1;
                        case 1:
                            return o.trys.push([1, 5, , 6]), [4, fetch(n + "?placement.key=" + t + "&user.uid=" + e + "&max_activities=1")];
                        case 2:
                            return (i = o.sent()).ok ? [4, i.json()] : [3, 4];
                        case 3:
                            if ((a = o.sent()) && Array.isArray(a) && a.length) return [2, b.Available];
                            o.label = 4;
                        case 4:
                            return [2, b.Unavailable];
                        case 5:
                            return r = o.sent(), h.i.warn("Failed checking ad availability from TrueX, probably due to AdBlock", r), [2, b.AdBlocked];
                        case 6:
                            return [2]
                    }
                })
            })
        }

        function a(e) {
            return {
                adModalOpen: Object(c.b)(e, C),
                isLoggedIn: Object(d.d)(e)
            }
        }

        function r(e) {
            return {
                showWatchAdModal: function(t) {
                    return e(Object(l.d)(C, t))
                }
            }
        }
        var o, s = n("RH2O"),
            l = n("V5M+"),
            c = n("Iw4B"),
            d = n("Aj/L"),
            u = n("TToO"),
            m = n("U7vG"),
            p = n("2KeS"),
            h = n("6sO2"),
            g = n("+8VM"),
            f = n("7vx8"),
            v = n("oIkB");
        ! function(e) {
            e[e.ExitEarly = 0] = "ExitEarly", e[e.Unknown = 1] = "Unknown", e[e.Adblock = 2] = "Adblock", e[e.LimitReached = 3] = "LimitReached"
        }(o || (o = {}));
        var b, k = n("4JjK"),
            y = n("/LBW"),
            _ = n("Odds"),
            S = n("zzpv"),
            E = (n("x583"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {}, t.hasAwarded = !1, t.messageHandler = function(e) {
                        return u.__awaiter(t, void 0, void 0, function() {
                            var t, n, i, a, r;
                            return u.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (e.origin !== window.location.origin) return [2];
                                        if (!(t = e.data) || "trueXAd" !== t.msgSrc) return [2];
                                        switch (t.type) {
                                            case k.a.Ready:
                                                return [3, 1];
                                            case k.a.RequestAd:
                                                return [3, 2];
                                            case k.a.Dimensions:
                                                return [3, 3];
                                            case k.a.OnStart:
                                                return [3, 4];
                                            case k.a.OnCredit:
                                                return [3, 5];
                                            case k.a.OnClose:
                                            case k.a.OnFinish:
                                            case k.a.LimitReached:
                                            case k.a.Adblock:
                                            case k.a.OnError:
                                                return [3, 9]
                                        }
                                        return [3, 10];
                                    case 1:
                                        return n = {
                                            msgSrc: "wateb-ad-modal",
                                            tuid: this.props.tuid
                                        }, e.source.postMessage(n, "*"), [2];
                                    case 2:
                                        try {
                                            if (!(i = JSON.parse(t.activityJSON))) return [2];
                                            Object(y.g)({
                                                campaignID: i.campaign_id.toString(),
                                                requestID: t.requestID,
                                                requestMethod: this.props.requestRef
                                            })
                                        } catch (e) {}
                                        return [2];
                                    case 3:
                                        return t.height && t.width && this.setState({
                                            customDimensions: {
                                                height: t.height,
                                                width: t.width
                                            }
                                        }), [3, 10];
                                    case 4:
                                        try {
                                            if (!(i = JSON.parse(t.activityJSON))) return [2];
                                            Object(y.f)({
                                                requestID: t.requestID,
                                                adblock: !1,
                                                campaignID: i.campaign_id.toString()
                                            })
                                        } catch (e) {}
                                        return [2];
                                    case 5:
                                        return s.trys.push([5, 7, , 8]), [4, this.props.redeemTrueXAd(Object(v.a)({
                                            args: t.engagement.signature_argument_string,
                                            signature: t.engagement.signature,
                                            trueXAd: {
                                                creativeID: t.engagement.ad.creative_id,
                                                campaignID: t.engagement.ad.campaign_id,
                                                name: t.engagement.ad.name,
                                                currencyAmount: t.engagement.ad.currency_amount
                                            },
                                            targetID: this.props.channelID
                                        }))];
                                    case 6:
                                        return a = s.sent(), this.hasAwarded = !0, this.props.onBitsAwarded && this.props.onBitsAwarded(a.data.redeemTrueXAd.grantedBits), [3, 8];
                                    case 7:
                                        return r = s.sent(), h.i.warn("Error while redeeming bits for truex ad", r), this.props.onError && this.props.onError(o.Unknown), [3, 8];
                                    case 8:
                                        return [3, 10];
                                    case 9:
                                        return this.props.onError && (t.type === k.a.LimitReached ? this.props.onError(o.LimitReached) : t.type === k.a.Adblock ? this.props.onError(o.Adblock) : t.type === k.a.OnError ? this.props.onError(o.Unknown) : this.hasAwarded || this.props.onError(o.ExitEarly)), this.props.closeModal(), [3, 10];
                                    case 10:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentWillMount = function() {
                    window.addEventListener("message", this.messageHandler)
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("message", this.messageHandler)
                }, t.prototype.render = function() {
                    return m.createElement(_._21, {
                        background: _.m.Base
                    }, m.createElement("div", {
                        className: "t-watch-ads-modal",
                        style: this.state.customDimensions
                    }, m.createElement(g.a, null), m.createElement("iframe", {
                        src: "/products/bits/ad"
                    })))
                }, t = u.__decorate([Object(f.a)(S, {
                    name: "redeemTrueXAd"
                })], t)
            }(m.Component)),
            C = Object(s.b)(null, function(e) {
                return Object(p.b)({
                    closeModal: l.c
                }, e)
            })(E),
            N = n("HW6M"),
            w = n("3zLD"),
            A = n("jF7o"),
            B = n("w9tK"),
            O = n("zCIC");
        ! function(e) {
            e[e.Error = 0] = "Error", e[e.AdBlocked = 1] = "AdBlocked", e[e.Unavailable = 2] = "Unavailable", e[e.Available = 3] = "Available"
        }(b || (b = {}));
        var x, I = function(e) {
                var t = null;
                return e.disableWatchAd && (t = Object(h.d)("Try again later", "Bits--WatchAdOffer")), m.createElement(_._21, {
                    className: "bits-buy-card__offer-row",
                    display: _.J.Flex,
                    flexShrink: 0,
                    borderBottom: !0,
                    justifyContent: _.W.Between,
                    flexWrap: _.M.NoWrap,
                    padding: {
                        x: 2,
                        y: 1
                    }
                }, m.createElement(_.X, {
                    padding: {
                        right: 4
                    }
                }, m.createElement("strong", null, Object(h.d)("Get {minBitsCount} or more Bits by watching short ads", {
                    minBitsCount: e.minPayout
                }, "Bits--WatchAdOffer"))), m.createElement(_.X, {
                    flexShrink: 0,
                    display: _.J.Flex,
                    flexDirection: _.L.Column,
                    alignItems: _.c.End
                }, m.createElement(_.u, {
                    type: _.z.Hollow,
                    "data-a-target": "bits-watch-ad",
                    onClick: e.onWatchAdClick,
                    disabled: e.disableWatchAd
                }, Object(h.d)("Watch Ad", "Bits--WatchAdOffer")), t && m.createElement(_.X, {
                    className: "bits-buy-card__sub-text",
                    alignSelf: _.d.Stretch,
                    textAlign: _._26.Center,
                    margin: {
                        top: .5
                    }
                }, t)))
            },
            F = /version\/([\w\.]+).+?(mobile\s?safari|safari)/i,
            L = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        enableWatchAd: !0
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentWillMount = function() {
                    return u.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return u.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, i(this.props.truexUserID)];
                                case 1:
                                    return e = t.sent(), Object(y.e)({
                                        channel: this.props.channelLogin,
                                        channelID: this.props.channelID,
                                        available: e === b.Available
                                    }), e !== b.Available && e !== b.AdBlocked && this.setState({
                                        enableWatchAd: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return F.test(navigator.userAgent) ? null : m.createElement(I, u.__assign({}, this.props, {
                        disableWatchAd: !this.state.enableWatchAd
                    }))
                }, t
            }(m.Component),
            T = n("jxGs"),
            j = n("3iBR"),
            D = n("iydZ"),
            U = n("ZJYd"),
            W = n("CFVp"),
            P = n("qe65"),
            M = (n("OLKT"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleBuyClick = function(e) {
                        var n = t.props.channelID || "",
                            i = Object(U.b)({
                                trackBitsCardInteraction: t.props.trackBitsCardInteraction,
                                channelID: n,
                                purchaseUrl: e.currentTarget.dataset.purchaseUrl,
                                bitsAmount: e.currentTarget.dataset.bitsAmount,
                                closeAllBits: t.props.closeAllBits,
                                location: t.props.location
                            });
                        i && (t.props.onBuyPopupClose(i), t.props.onClose())
                    }, t
                }
                return u.__extends(t, e), t.prototype.render = function() {
                    if (this.props.offer.type === T.a) {
                        if (!this.props.channelLogin) return null;
                        var e = this.props.currentUserSHA || "";
                        return m.createElement(L, {
                            key: "wateb",
                            minPayout: this.props.offer.bits,
                            onWatchAdClick: this.props.handleWatchAdClick,
                            truexUserID: e,
                            channelID: this.props.channelID || "",
                            channelLogin: this.props.channelLogin
                        })
                    }
                    var t = null;
                    Object(U.c)(this.props.offer) ? t = m.createElement(_.X, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, m.createElement(_._25, {
                        type: _._30.Strong,
                        fontSize: _.N.Size6
                    }, Object(h.d)("Special Offer: 1st Time Buyers", "Bits--BuyCard"))) : Object(U.d)(this.props.offer) && null !== this.props.offer.promotion && this.props.offer.promotion.id === T.c && (t = m.createElement(_.X, {
                        className: "bits-buy-card-offer-row__bonus-text bits-buy-card-offer-row__bonus-text-headline"
                    }, m.createElement(_._25, {
                        type: _._30.Strong,
                        fontSize: _.N.Size6
                    }, Object(h.d)("Flash Sale: Now thru Nov. 27!", "Bits--BuyCard"))));
                    var n = null;
                    this.props.offer.discount && (n = m.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(h.d)("{percentOff,number,percent} discount", {
                        percentOff: this.props.offer.discount
                    }, "Bits--BuyCard")));
                    var i = null;
                    (Object(U.c)(this.props.offer) || Object(U.e)(this.props.offer)) && (i = m.createElement("div", {
                        className: "bits-buy-card-offer-row__sub-text"
                    }, Object(h.d)("one per account", "Bits--BuyCard")));
                    var a = this.props.isLastRow ? _._21 : _.X;
                    return m.createElement(a, {
                        className: "bits-buy-card-offer-row",
                        flexShrink: 0,
                        display: _.J.Flex,
                        justifyContent: _.W.Center,
                        borderBottom: this.props.isLastRow,
                        flexDirection: _.L.Column,
                        padding: {
                            x: 2,
                            y: 1
                        }
                    }, t, m.createElement(_.X, {
                        display: _.J.Flex,
                        justifyContent: _.W.Between,
                        alignItems: _.c.Center
                    }, m.createElement(_.X, {
                        flexGrow: 1
                    }, m.createElement(_._25, {
                        type: _._30.H5,
                        color: _.F.Base,
                        bold: !0
                    }, this.props.offer.bits, " Bits"), this.getAvailableTiers(this.props.offer.bits)), m.createElement(_.X, {
                        flexShrink: 0,
                        display: _.J.Flex,
                        flexDirection: _.L.Column,
                        alignItems: _.c.End
                    }, m.createElement(_.u, {
                        onClick: this.handleBuyClick,
                        "data-purchase-url": this.props.offer.url,
                        "data-bits-amount": this.props.offer.bits,
                        "data-a-target": "bits-purchase-button-" + this.props.offer.bits
                    }, this.props.offer.price), (n || i) && m.createElement(_.X, {
                        alignSelf: _.d.Stretch,
                        textAlign: _._26.Right,
                        margin: {
                            top: .5
                        }
                    }, n, i))))
                }, t.prototype.getAvailableTiers = function(e) {
                    var t = this.props.bitsConfig.indexedActions[j.f];
                    t || (t = Object(W.b)());
                    var n = t.orderedTiers.filter(function(t) {
                        return t.bits <= e
                    }).reverse();
                    return m.createElement(_.X, {
                        padding: {
                            top: .5
                        },
                        className: "bits-buy-card-offer-row__tier-bits-images"
                    }, n.map(function(e) {
                        return m.createElement(P.a, {
                            key: e.bits,
                            sources: Object(D.b)(e, 2, !1)
                        })
                    }))
                }, t
            }(m.Component)),
            H = (n("sgUC"), function(e) {
                var t = [],
                    n = [],
                    i = null;
                return e.offers.forEach(function(a, r) {
                    var o = m.createElement(M, {
                            key: a.id,
                            offer: a,
                            isLastRow: r + 1 < e.offers.length,
                            bitsConfig: e.bitsConfig,
                            channelID: e.channelID,
                            channelLogin: e.channelLogin,
                            currentUserSHA: e.currentUserSHA,
                            location: e.location,
                            onClose: e.onClose,
                            onBuyPopupClose: e.onBuyPopupClose,
                            handleWatchAdClick: e.handleWatchAdClick,
                            closeAllBits: e.closeAllBits,
                            trackBitsCardInteraction: e.trackBitsCardInteraction
                        }),
                        s = Object(U.d)(a),
                        l = Object(U.c)(a),
                        c = a.type === T.a;
                    l && !e.hidePromos ? t.push(o) : s && !l ? t.push(o) : c && !e.hideWateb ? i = o : c || s || n.push(o)
                }), e.fullsize ? m.createElement(_.X, {
                    className: "bits-buy-card-offers__full-size",
                    flexGrow: 1,
                    flexWrap: _.M.NoWrap,
                    display: _.J.Flex,
                    flexDirection: _.L.Column
                }, i, t, n) : m.createElement(O.b, {
                    className: "bits-buy-card-offers__scroll-view"
                }, m.createElement(_.X, {
                    flexGrow: 1,
                    flexWrap: _.M.NoWrap,
                    display: _.J.Flex,
                    flexDirection: _.L.Column
                }, i, t, n))
            }),
            R = function(e) {
                var t = null;
                e.pricesIncludeVAT && (t = m.createElement(_._25, {
                    italic: !0,
                    type: _._30.P,
                    color: _.F.Alt
                }, Object(h.d)("Prices include VAT", "Bits--BuyCard")));
                var n = null;
                e.minBitsToCheer && e.minBitsToCheer > 1 && (n = m.createElement(_._25, {
                    color: _.F.Alt
                }, Object(h.d)("{displayName} requires {minBits} Bits to Cheer in this channel.", {
                    displayName: e.displayName,
                    minBits: e.minBitsToCheer
                }, "Bits--BuyCard")));
                var i = null;
                return void 0 !== e.bitsBalance && null !== e.bitsBalance && (i = m.createElement(_._25, {
                    color: _.F.Alt
                }, Object(h.d)("You have {totalBits} Bits", {
                    totalBits: m.createElement("strong", {
                        "data-a-target": "buy-card-bits-count"
                    }, e.bitsBalance)
                }, "Bits--BuyCard"))), m.createElement(_._21, {
                    className: "bits-buy-card-header",
                    padding: {
                        x: 1,
                        bottom: 1
                    },
                    borderBottom: !0,
                    flexShrink: 0
                }, m.createElement(_.X, {
                    margin: {
                        bottom: 1
                    }
                }, m.createElement(_._25, {
                    type: _._30.H4,
                    color: _.F.Alt
                }, Object(h.d)("Purchase Bits", "Bits--BuyCard")), t), i, n)
            },
            X = n("nrdj"),
            z = function(e) {
                return m.createElement(_.X, {
                    display: _.J.Flex,
                    flexGrow: 1,
                    flexDirection: _.L.Column,
                    alignItems: _.c.Center,
                    fullWidth: !0,
                    flexWrap: _.M.NoWrap,
                    padding: {
                        y: 1
                    }
                }, m.createElement(X.a, {
                    prefix: "cheer",
                    amount: e.amount,
                    bitsConfig: e.bitsConfig,
                    showAmount: !0,
                    showImage: !0
                }), m.createElement(_.X, {
                    display: _.J.Flex,
                    padding: {
                        top: 1
                    },
                    flexGrow: 1,
                    flexDirection: _.L.Column,
                    alignItems: _.c.Center,
                    flexWrap: _.M.NoWrap
                }, m.createElement(_._25, {
                    type: _._30.H4,
                    bold: !0
                }, Object(h.d)("You got {bitsAmount,number} Bits!", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward")), m.createElement(_.S, {
                    padding: {
                        top: 1
                    }
                }, m.createElement(_._25, {
                    color: _.F.Alt2
                }, Object(h.d)("{bitsAmount,number} Bits were added to your Bit inventory.", {
                    bitsAmount: e.amount
                }, "Bits--WatchAdAward"), m.createElement("br", null), Object(h.d)("You can use these Bits to Cheer!", "Bits--WatchAdAward")))), m.createElement(_.X, {
                    display: _.J.Flex,
                    padding: {
                        x: 1,
                        top: 3
                    },
                    alignSelf: _.d.Stretch,
                    justifyContent: _.W.Between
                }, m.createElement(_.u, {
                    onClick: e.onStartCheering
                }, Object(h.d)("Start Cheering", "Bits--WatchAdAward")), m.createElement(_.u, {
                    type: _.z.Hollow,
                    onClick: e.onWatchAnother,
                    disabled: !e.hasAdAvailable
                }, Object(h.d)("Watch Another", "Bits--WatchAdAward"))))
            },
            V = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasAdAvailable: !0
                    }, t
                }
                return u.__extends(t, e), t.prototype.componentWillMount = function() {
                    return u.__awaiter(this, void 0, void 0, function() {
                        return u.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, i(this.props.truexUserID)];
                                case 1:
                                    return e.sent() !== b.Available && this.setState({
                                        hasAdAvailable: !1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return m.createElement(z, u.__assign({}, this.props, {
                        hasAdAvailable: this.state.hasAdAvailable
                    }))
                }, t
            }(m.Component),
            q = (n("q8Cw"), function(e) {
                var t = Object(h.d)("Something's wrong!", "Bits--WatchAdError"),
                    n = Object(h.d)("Something went wrong. Wait a while and try again.", "Bits--WatchAdError"),
                    i = "adserrorgeneric";
                switch (e.type) {
                    case o.Adblock:
                        i = "adserroradblock", n = Object(h.d)("We can't load this Ad, probably because Ad Blocking software is running. To watch an ad and get Bits, please disable all Ad Blocking software.", "Bits--WatchAdError");
                        break;
                    case o.LimitReached:
                        i = "adserrorlimit", t = Object(h.d)("Ad Limit Reached", "Bits--WatchAdError"), n = Object(h.d)("That's all the Ads we have for now. Try again tomorrow!", "Bits--WatchAdError");
                        break;
                    case o.ExitEarly:
                        n = Object(h.d)("To get Bits, you must view and interact with the Ad for the minimum amount of time.", "Bits--WatchAdError")
                }
                var a = m.createElement(_.X, {
                    className: "watch-ad-error__footer",
                    display: _.J.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: _.d.Stretch,
                    justifyContent: _.W.Center
                }, m.createElement(_.u, {
                    onClick: e.onTryAgain
                }, Object(h.d)("Try Again", "Bits--WatchAdError")));
                return e.type === o.LimitReached && (a = m.createElement(_.X, {
                    className: "watch-ad-error__footer",
                    display: _.J.Flex,
                    padding: {
                        top: 2
                    },
                    alignSelf: _.d.Stretch,
                    justifyContent: _.W.Between
                }, m.createElement(_.u, {
                    onClick: e.onClose
                }, Object(h.d)("Got It", "Bits--WatchAdError")), m.createElement(_.u, {
                    onClick: e.onTryAgain,
                    type: _.z.Hollow
                }, Object(h.d)("Buy Bits", "Bits--WatchAdError")))), m.createElement(_.X, {
                    padding: {
                        x: 1
                    },
                    display: _.J.Flex,
                    flexGrow: 1,
                    flexDirection: _.L.Column,
                    alignItems: _.c.Center,
                    fullWidth: !0,
                    flexWrap: _.M.NoWrap
                }, m.createElement(_.X, {
                    padding: {
                        y: 2
                    }
                }, m.createElement("img", {
                    className: "watch-ad-error__error-image",
                    src: j.b + "/light/static/1/" + i + ".png"
                })), m.createElement(_.X, {
                    padding: {
                        bottom: 1
                    }
                }, m.createElement(_._25, {
                    type: _._30.H4,
                    bold: !0
                }, t)), m.createElement(_._25, {
                    color: _.F.Alt2
                }, n), a)
            }),
            G = n("CSlQ"),
            J = n("aqNN");
        n("6Rwu");
        ! function(e) {
            e[e.Inactive = 0] = "Inactive", e[e.Error = 1] = "Error", e[e.Awarded = 2] = "Awarded"
        }(x || (x = {}));
        var $ = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        wateb: x.Inactive,
                        watebError: null,
                        bitsAwarded: 0
                    }, t.onBuyPopupClose = function(e) {
                        Object(A.a)(e, function() {
                            t.props.data && t.props.data.refetch()
                        })
                    }, t.onAdBitsAwarded = function(e) {
                        t.props.data && !t.props.data.loading && t.props.data.refetch(), t.setState({
                            wateb: x.Awarded,
                            bitsAwarded: e
                        })
                    }, t.handleWatchAdClick = function() {
                        return u.__awaiter(t, void 0, void 0, function() {
                            return u.__generator(this, function(e) {
                                return this.props.data && this.props.data.currentUser && this.props.data.user ? (this.props.showWatchAdModal({
                                    tuid: this.props.data.currentUser.idSHA1,
                                    onBitsAwarded: this.onAdBitsAwarded,
                                    onError: this.receiveAdErrorState,
                                    requestRef: y.c.ShowAdButton,
                                    channelID: this.props.data.user.id
                                }), [2]) : [2]
                            })
                        })
                    }, t.receiveAdErrorState = function(e) {
                        t.setState({
                            wateb: x.Error,
                            watebError: e
                        })
                    }, t.resetAdErrorState = function() {
                        t.state.wateb === x.Error && (t.setState({
                            wateb: x.Inactive
                        }), t.props.data && t.props.data.refetch())
                    }, t
                }
                return u.__extends(t, e), t.prototype.shouldComponentUpdate = function(e) {
                    return !e.adModalOpen
                }, t.prototype.render = function() {
                    var e = {
                            border: !0,
                            background: _.m.Base,
                            fullWidth: !0,
                            elevation: 3
                        },
                        t = N({
                            "bits-buy-card": !0,
                            "bits-buy-card__chat-tooltip": this.props.location === y.b.ChatTooltip
                        }),
                        n = null;
                    if (this.props.location === y.b.ChatTooltip && (n = m.createElement("button", {
                            className: "bits-buy-card__close",
                            onClick: this.props.onClose,
                            "data-a-target": "bits-buy-card-close-button"
                        }, m.createElement(_._12, {
                            asset: _._13.Close,
                            height: 11,
                            width: 11
                        }))), !this.props.data || this.props.data.loading) return m.createElement(_._21, u.__assign({
                        className: t,
                        "data-a-target": "bits-buy-card-loading",
                        display: _.J.Flex,
                        flexDirection: _.L.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.W.Center,
                        textAlign: _._26.Center
                    }, e), m.createElement(_._1, {
                        delay: 0
                    }), m.createElement(_.X, {
                        padding: {
                            top: 2
                        }
                    }, m.createElement(_._25, {
                        italic: !0
                    }, Object(h.d)("Fetching bits", "Bits--BuyCard"))));
                    if (this.props.data.error) return m.createElement(_.X, u.__assign({
                        className: N(t, "bits-buy-card--shorter"),
                        display: _.J.Flex,
                        flexDirection: _.L.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.W.Center,
                        padding: 2,
                        textAlign: _._26.Center,
                        "data-a-target": "bits-buy-card-error"
                    }, e), n, m.createElement(_._25, {
                        italic: !0
                    }, Object(h.d)("Bits prices are unavailable right now. Check back again later.", "Bits--BuyCard")));
                    var i = this.renderWatebCard();
                    if (i) return m.createElement(_._21, u.__assign({
                        className: N(t, "bits-buy-card--shorter"),
                        display: _.J.Flex,
                        flexDirection: _.L.Column,
                        alignItems: _.c.Center,
                        justifyContent: _.W.Center,
                        textAlign: _._26.Center,
                        padding: 1
                    }, e), n, i);
                    var a = [];
                    this.props.data.currentUser ? a = this.props.data.currentUser.bitsOffers : this.props.data.bitsOffers && (a = this.props.data.bitsOffers);
                    var r = a.filter(function(e) {
                            return e.type === T.b
                        }).some(function(e) {
                            return e.includesVAT
                        }),
                        o = this.props.data.user ? this.props.data.user.id : "",
                        s = m.createElement(H, {
                            offers: a,
                            fullsize: this.props.fullsize,
                            hidePromos: this.props.hidePromos,
                            hideWateb: this.props.hideWateb,
                            bitsConfig: this.props.bitsConfig,
                            channelID: o,
                            channelLogin: this.props.channelLogin,
                            closeAllBits: this.props.closeAllBits,
                            currentUserSHA: this.props.data && this.props.data.currentUser && this.props.data.currentUser.idSHA1,
                            handleWatchAdClick: this.handleWatchAdClick,
                            location: this.props.location,
                            onBuyPopupClose: this.onBuyPopupClose,
                            onClose: this.props.onClose,
                            trackBitsCardInteraction: this.props.trackBitsCardInteraction
                        }),
                        l = null;
                    return this.props.location === y.b.ChatTooltip && (l = m.createElement(R, {
                        bitsBalance: this.props.data && this.props.data.currentUser && this.props.data.currentUser.bitsBalance,
                        displayName: this.props.data && this.props.data.user && this.props.data.user.displayName || this.props.channelLogin || "",
                        minBitsToCheer: this.props.data && this.props.data.user && this.props.data.user.cheer && this.props.data.user.cheer.settings.cheerMinimumBits,
                        pricesIncludeVAT: r
                    })), m.createElement(_._21, u.__assign({
                        className: t,
                        padding: {
                            top: 1
                        },
                        display: _.J.Flex,
                        flexDirection: _.L.Column,
                        "data-a-target": "bits-buy-card"
                    }, e), n, l, s)
                }, t.prototype.renderWatebCard = function() {
                    if (this.props.data && this.props.data.currentUser) switch (this.state.wateb) {
                        case x.Awarded:
                            return m.createElement(V, {
                                bitsConfig: this.props.bitsConfig,
                                amount: this.state.bitsAwarded,
                                onStartCheering: this.props.onClose,
                                onWatchAnother: this.handleWatchAdClick,
                                truexUserID: this.props.data.currentUser.idSHA1
                            });
                        case x.Error:
                            return m.createElement(q, {
                                type: this.state.watebError || o.Unknown,
                                onClose: this.props.onClose,
                                onTryAgain: this.resetAdErrorState
                            });
                        default:
                            return !1
                    }
                }, t = u.__decorate([Object(f.a)(J, {
                    name: "data",
                    options: function(e) {
                        return {
                            variables: {
                                channelLogin: e.channelLogin,
                                withChannel: !!e.channelLogin,
                                isLoggedIn: e.isLoggedIn
                            }
                        }
                    }
                })], t)
            }(m.Component),
            Q = Object(w.compose)(Object(G.d)("BitsBuyCard", {
                autoReportInteractive: !0,
                destination: B.a.BitsBuyCard
            }))($),
            Z = Object(s.b)(a, r)(Q);
        n.d(t, !1, function() {
            return a
        }), n.d(t, !1, function() {
            return r
        }), n.d(t, "a", function() {
            return Z
        })
    },
    ZJYd: function(e, t, n) {
        "use strict";

        function i(e) {
            return e.type === o.b && null !== e.promotion && !!e.promotion
        }
        t.c = function(e) {
            return e.type !== o.a && i(e) && null !== e.promotion && e.promotion.type === o.d
        }, t.e = function(e) {
            return e.type !== o.a && i(e) && null !== e.promotion && e.promotion.type === o.e
        }, t.d = i, t.a = function(e) {
            var t = 0,
                n = 0,
                i = 0;
            return e.forEach(function(e) {
                e.cheerAmount && (t = Math.max(t, e.cheerAmount), n = n ? Math.min(n, e.cheerAmount) : e.cheerAmount, i += e.cheerAmount)
            }), {
                total: i,
                smallestCheermote: n,
                largestCheermote: t
            }
        }, t.f = function(e) {
            var t = e.messageBits,
                n = t.total,
                i = t.largestCheermote,
                r = t.smallestCheermote;
            if (n) {
                var o = {
                    cheerAboveMaxBitsPerEmote: i > s.j,
                    totalAboveBalance: n > e.balance,
                    totalBelowCheerMinimum: n < e.cheerMinimumBits,
                    totalBelowEmoteMinimum: r < e.emoteMinimumBits,
                    inputLongerThanMaxBitsMessage: e.inputValue.length > s.i,
                    inputStartsWithCommand: e.inputValue.startsWith("/")
                };
                if (Object.keys(o).some(function(e) {
                        return o[e]
                    })) return a.__assign({
                    canSpend: !1
                }, o)
            }
            return {
                canSpend: !0
            }
        }, t.b = function(e) {
            var t = e.purchaseUrl;
            if (t) {
                e.trackBitsCardInteraction(Object(l.d)(e.bitsAmount), {
                    location: e.location
                });
                var n = t.replace("{channelID}", e.channelID),
                    i = window.open(n, "Twitch", "width=1024,height=600,scrollbars=yes");
                return !i || Object(r.a)() ? (e.closeAllBits && e.closeAllBits(), void e.trackBitsCardInteraction(l.a.CloseCard, {
                    location: e.location
                })) : (i.focus(), i)
            }
        };
        var a = n("TToO"),
            r = n("Ouuk"),
            o = n("jxGs"),
            s = n("3iBR"),
            l = n("/LBW")
    },
    annQ: function(e, t, n) {
        function i(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !r[t] && (r[t] = !0, !0)
            })
        }
        var a = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GetBitsButton_Bits"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "isLoggedIn"
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
                            value: "withChannel"
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
                            value: "bitsOffers"
                        },
                        arguments: [],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "skip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "if"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "isLoggedIn"
                                    }
                                }
                            }]
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "bitsOffersFragment"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "include"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "if"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "isLoggedIn"
                                    }
                                }
                            }]
                        }],
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
                                    value: "idSHA1"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "bitsBalance"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "bitsOffers"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "bitsOffersFragment"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }, {
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
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "include"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "if"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "withChannel"
                                    }
                                }
                            }]
                        }],
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
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "cheer"
                                },
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 748
            }
        };
        a.loc.source = {
            body: '# Documentation about how to use GraphQL is located in the Data Access Guide:\n# https://git-aws.internal.justin.tv/pages/twilight/twilight-docs/docs/guides/data-access.html\n# Additionally use the GraphQL explorer (https://api.twitch.tv/gql/explore) to browse\n# available GraphQL data and construct your query.\n#import "twilight/features/bits/models/bits-offers-fragment.gql"\n#import "twilight/features/chat/models/cheer-fragment.gql"\nquery GetBitsButton_Bits($isLoggedIn: Boolean! $withChannel: Boolean! $login: String!) {\nbitsOffers @skip(if: $isLoggedIn) {\n...bitsOffersFragment\n}\ncurrentUser @include(if: $isLoggedIn) {\nid\nidSHA1\nbitsBalance\nbitsOffers {\n...bitsOffersFragment\n}\n}\nuser(login: $login) @include(if: $withChannel) {\nid\n...cheer\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var r = {};
        a.definitions = a.definitions.concat(i(n("OcEY").definitions)), a.definitions = a.definitions.concat(i(n("576g").definitions)), e.exports = a
    },
    aqNN: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Bits_BuyCard_Offers"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "withChannel"
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
                            value: "isLoggedIn"
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
                            value: "channelLogin"
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
                            value: "bitsOffers"
                        },
                        arguments: [],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "skip"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "if"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "isLoggedIn"
                                    }
                                }
                            }]
                        }],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "FragmentSpread",
                                name: {
                                    kind: "Name",
                                    value: "bitsOffersFragment"
                                },
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "currentUser"
                        },
                        arguments: [],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "include"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "if"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "isLoggedIn"
                                    }
                                }
                            }]
                        }],
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
                                    value: "idSHA1"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "bitsBalance"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "bitsOffers"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "FragmentSpread",
                                        name: {
                                            kind: "Name",
                                            value: "bitsOffersFragment"
                                        },
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }, {
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
                                    value: "channelLogin"
                                }
                            }
                        }],
                        directives: [{
                            kind: "Directive",
                            name: {
                                kind: "Name",
                                value: "include"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "if"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "withChannel"
                                    }
                                }
                            }]
                        }],
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
                                    value: "cheer"
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
                                                    value: "cheerMinimumBits"
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
                end: 440
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/bits/models/bits-offers-fragment.gql"\nquery Bits_BuyCard_Offers($withChannel: Boolean! $isLoggedIn: Boolean! $channelLogin: String!) {\nbitsOffers @skip(if: $isLoggedIn) {\n...bitsOffersFragment\n}\ncurrentUser @include(if: $isLoggedIn) {\nid\nidSHA1\nbitsBalance\nbitsOffers {\n...bitsOffersFragment\n}\n}\nuser(login: $channelLogin) @include(if: $withChannel) {\nid\ndisplayName\ncheer {\nid\nsettings {\ncheerMinimumBits\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n("OcEY").definitions)), e.exports = i
    },
    bkpq: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = new Map,
                n = new Map,
                i = new Map,
                r = new Map;
            return e.images.forEach(function(e) {
                "LIGHT" === e.theme ? e.isAnimated ? n.set(e.dpiScale, e.url) : t.set(e.dpiScale, e.url) : e.isAnimated ? r.set(e.dpiScale, e.url) : i.set(e.dpiScale, e.url)
            }), a.__assign({
                indexedImages: {
                    LIGHT: {
                        static: t,
                        animated: n
                    },
                    DARK: {
                        static: i,
                        animated: r
                    }
                }
            }, e)
        }
        t.a = function(e) {
            var t = [],
                n = {};
            return e.forEach(function(e) {
                var s = e.tiers.map(function(e) {
                    return i(e)
                });
                "Cheer" === e.prefix && s.push(function() {
                    var e = ["DARK", "LIGHT"],
                        t = ["static", "animated"],
                        n = [];
                    return [1, 1.5, 2, 3, 4].forEach(function(i) {
                        e.forEach(function(e) {
                            t.forEach(function(t) {
                                n.push({
                                    url: o.a + "/cheer/" + e.toLowerCase() + "/" + t + "/100000/" + i + "." + ("static" === t ? "png" : "gif"),
                                    isAnimated: "animated" === t,
                                    theme: e,
                                    dpiScale: i
                                })
                            })
                        })
                    }), i({
                        id: "Cheer:100000",
                        bits: 1e5,
                        color: o.e[r.a.Yellow],
                        images: n
                    })
                }()), s.sort(function(e, t) {
                    return t.bits - e.bits
                });
                var l = a.__assign({}, e, {
                    indexedTiers: new Map(s.map(function(e) {
                        return [e.bits, e]
                    })),
                    orderedTiers: s
                });
                t.push(l), n[l.prefix.toLowerCase()] = l
            }), {
                indexedActions: n,
                orderedActions: t
            }
        }, t.b = function(e) {
            return {
                cursor: e.entry_key,
                node: {
                    id: e.entry_key,
                    rank: e.rank,
                    score: e.score,
                    __typename: "BitsLeaderboardEntry"
                },
                __typename: "BitsLeaderboardEdge"
            }
        };
        var a = n("TToO"),
            r = n("I89S"),
            o = n("3iBR")
    },
    czpb: function(e, t, n) {
        "use strict";
        var i = n("6sO2"),
            a = n("Ejve"),
            r = n("MSvX");
        t.a = function(e) {
            return i.b.get(r.a, !1) || i.a.buildType !== a.a.Production ? "string" == typeof e ? e : e.pathname || "" : "string" == typeof e ? o + e : o + e.pathname
        }, t.b = function() {
            return !i.b.get(r.a, !1) && i.a.buildType === a.a.Production
        };
        var o = "https://www.twitch.tv"
    },
    fHoP: function(e, t) {},
    iMOk: function(e, t, n) {
        "use strict";

        function i(e) {
            var t, n = Object(r.d)("{bitsAmount} Bits", {
                bitsAmount: e.count.toString()
            }, "Bits--BitsCount");
            if (e.withImage) {
                var i = e.bitsConfig.indexedActions[s.f];
                i || (i = Object(c.b)());
                var u = i.orderedTiers.find(function(t) {
                    return t.bits <= e.count
                });
                if (u) {
                    var m = Object(l.b)(u);
                    return void 0 !== e.themeOverride && (e.themeOverride === o.a.Light ? m.dark = m.light : m.light = m.dark), t = a.createElement(d.a, {
                        className: "bits-count--img",
                        sources: m
                    }), a.createElement("strong", {
                        className: "bits-count",
                        "data-a-target": "bits-count"
                    }, a.createElement("span", null, t, " ", e.withText ? n : ""))
                }
            }
            return a.createElement("strong", {
                className: "bits-count",
                "data-a-target": "bits-count"
            }, a.createElement("span", null, n))
        }
        var a = n("U7vG"),
            r = n("6sO2"),
            o = n("NXs7"),
            s = n("3iBR"),
            l = n("iydZ"),
            c = n("CFVp"),
            d = n("qe65");
        n("1pvm");
        n.d(t, "a", function() {
            return i
        })
    },
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
    jF7o: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (e) var n = setInterval(function() {
                var i = !1,
                    a = !1;
                try {
                    i = e.closed, a = !!e.success
                } catch (e) {}
                if (i || a) {
                    t(a);
                    try {
                        e.close()
                    } catch (e) {}
                    clearInterval(n)
                }
            }, 500);
            else i.i.warn("[onPopupClose] Attempted to observe a window that failed to open.")
        };
        var i = n("6sO2")
    },
    jxGs: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "d", function() {
            return r
        }), n.d(t, "e", function() {
            return o
        }), n.d(t, "c", function() {
            return s
        });
        var i = "AD",
            a = "BUNDLE",
            r = "first_time_purchase",
            o = "single_purchase",
            s = "black_friday_2017"
    },
    kOMe: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ChannelPage_ChannelHeader"
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
                                    value: "stream"
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
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "videos"
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "follows"
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "cheer"
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
                                    }]
                                }
                            }]
                        }
                    }, {
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
                                            value: "isStaff"
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
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 290
            }
        };
        n.loc.source = {
            body: "query ChannelPage_ChannelHeader($login: String!) {\nuser(login: $login) {\nid\nlogin\ndisplayName\nprofileImageURL(width: 70)\nroles {\nisPartner\n}\nstream {\nid\n}\nvideos {\ntotalCount\n}\nfollowers {\ntotalCount\n}\nfollows {\ntotalCount\n}\ncheer {\nid\n}\n}\ncurrentUser {\nid\nroles {\nisStaff\nisSiteAdmin\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    lGVF: function(e, t) {},
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
    nrdj: function(e, t, n) {
        "use strict";
        var i, a = n("HW6M"),
            r = n("U7vG"),
            o = n("6sO2"),
            s = n("iydZ"),
            l = n("CFVp"),
            c = n("qe65"),
            d = n("Odds");
        n("PPK2");
        ! function(e) {
            e[e.Large = 4] = "Large", e[e.Medium = 3] = "Medium", e[e.Small = 2] = "Small", e[e.ExtraSmall = 1.5] = "ExtraSmall", e[e.ExtremelySmall = 1] = "ExtremelySmall"
        }(i || (i = {}));
        var u = function(e) {
            var t = e.bitsConfig.indexedActions[e.prefix.toLowerCase()];
            t || (t = Object(l.b)());
            var n = t.orderedTiers.find(function(t) {
                return t.bits <= (e.amount || 100)
            });
            n || (n = t.orderedTiers[0]);
            var u = e.display === d.J.Inline || e.display === d.J.InlineFlex || e.display === d.J.InlineBlock,
                m = null,
                p = a("cheermote-for-amount__cheer-amount", {
                    "cheermote-for-amount__display--table-cell": !u
                }, {
                    "cheermote-for-amount__cheer-amount--medium": e.size === i.Medium
                }, {
                    "cheermote-for-amount__cheer-amount--small": e.size === i.Small || e.size === i.ExtraSmall
                }, {
                    "cheermote-for-amount__cheer-amount--extremely-small": e.size === i.ExtremelySmall
                });
            if (e.amount && e.showAmount) {
                var h = e.formattedNumber ? Object(o.e)(e.amount) : e.amount;
                m = r.createElement(d.S, {
                    padding: e.size === i.Small ? 0 : void 0,
                    textAlign: e.size === i.Small ? d._26.Center : void 0
                }, r.createElement("strong", {
                    className: p,
                    style: {
                        color: n.color
                    }
                }, h))
            }
            var g = a("cheermote-for-amount__cheer-image", {
                    "cheermote-for-amount__display--table-cell": !u
                }, {
                    "cheermote-for-amount__cheer--inline": u
                }, {
                    "cheermote-for-amount__cheer-image--small": e.size === i.Small
                }, {
                    "cheermote-for-amount__cheer-image--extra-small": e.size === i.ExtraSmall
                }, {
                    "cheermote-for-amount__cheer-image--extremely-small": e.size === i.ExtremelySmall
                }),
                f = r.createElement(c.a, {
                    className: g,
                    sources: Object(s.b)(n, e.size || i.Large, e.animated)
                });
            return e.showImage || (f = null), r.createElement(d.X, {
                className: "cheermote-for-amount",
                alignItems: e.alignItems,
                display: e.display
            }, f, m)
        };
        n.d(t, "a", function() {
            return u
        }), n.d(t, "b", function() {
            return i
        })
    },
    q8Cw: function(e, t) {},
    sgUC: function(e, t) {},
    weaG: function(e, t) {},
    x583: function(e, t) {},
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
    ySfT: function(e, t, n) {
        "use strict";
        var i = n("U7vG"),
            a = n("6sO2"),
            r = n("3iBR"),
            o = n("qe65"),
            s = n("Odds"),
            l = (n("6lb1"), {
                themed: !0,
                dark: {
                    "1x": r.b + "/dark/animated/1/cheertutorial.gif"
                },
                light: {
                    "1x": r.b + "/light/animated/1/cheertutorial.gif"
                }
            }),
            c = function() {
                return i.createElement(s.X, {
                    display: s.J.Flex,
                    padding: {
                        top: 5
                    },
                    flexGrow: 1,
                    flexDirection: s.L.Column,
                    justifyContent: s.W.Center,
                    alignItems: s.c.Center
                }, i.createElement(s._25, {
                    type: s._30.H4,
                    bold: !0
                }, i.createElement(o.a, {
                    className: "cheermote-help__tutorial-image",
                    sources: l
                }), Object(a.d)("How to Cheer", "Bits--CheermoteHelp")), i.createElement("p", {
                    className: "t-bits-card__contents-body t-bits-card__contents-body--narrow"
                }, Object(a.d)('Type "cheer" + the number of Bits you want to Cheer.', "Bits--CheermoteHelp")))
            };
        n.d(t, "a", function() {
            return c
        })
    },
    yU6t: function(e, t) {},
    ymbN: function(e, t) {},
    z4Db: function(e, t) {},
    zfLI: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("3zLD"),
            o = n("6sO2"),
            s = n("yWCw"),
            l = n("zCIC"),
            c = n("j7/Y"),
            d = n("SZoP"),
            u = n("w9tK"),
            m = n("vH/s"),
            p = n("SI0h"),
            h = n("CSlQ"),
            g = n("F8kA"),
            f = n("Odds"),
            v = (n("ymbN"), 0),
            b = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onPrimaryImageLoad = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t.computeViewsMessage = function() {
                        var e = t.props.totalViews || v;
                        return 0 === e || 1 === e ? Object(o.d)("{viewCount, plural, one {# view}  other {# views}}", {
                            viewCount: e
                        }, "CollectionCard") : Object(o.d)("{viewCount} views", {
                            viewCount: Object(o.f)(e)
                        }, "CollectionCard")
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = Object(o.d)("By {channelName}", {
                        channelName: a.createElement(g.a, {
                            to: this.props.channelLinkTo,
                            className: "collection-card__link",
                            "data-test-selector": "collection-card-channel-link"
                        }, this.props.channelDisplayName)
                    }, "ChannelCollections");
                    return a.createElement(f.A, i.__assign({
                        key: this.props.title
                    }, Object(f._42)(this.props)), a.createElement(f.S, {
                        className: "collection-card",
                        position: f._6.Relative
                    }, a.createElement(g.a, {
                        to: {
                            pathname: this.props.linkTo,
                            state: {
                                content: "collection_card",
                                medium: "channel_collections"
                            }
                        },
                        title: this.props.title,
                        "data-test-selector": 'collection-card-overlay-link"'
                    }, a.createElement(f.C, {
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.imageSrc || o.a.defaultCollectionPreviewURL,
                        aspect: f.k.Aspect16x9,
                        onImageLoad: this.onPrimaryImageLoad,
                        "data-test-selector": "collection-image-body"
                    }, a.createElement(f.X, {
                        position: f._6.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        attachBottom: !0
                    }, a.createElement(f._21, {
                        alignItems: f.c.Center,
                        display: f.J.InlineFlex,
                        flexDirection: f.L.Column,
                        position: f._6.Absolute,
                        attachRight: !0,
                        color: f.F.Overlay,
                        fontSize: f.N.Size5,
                        className: "collection-card__wrapper",
                        fullHeight: !0,
                        textAlign: f._26.Center,
                        justifyContent: f.W.Center,
                        "data-test-selector": "collection-card-overlay"
                    }, a.createElement("figure", null, a.createElement("svg", {
                        className: "collection-card__svg",
                        width: "19",
                        height: "19",
                        viewBox: "0 0 19 19"
                    }, a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M0,6 L19,6 L19,19 L0,19 L0,6 Z M12.25,12.5 L7,9 L7,16 L12.25,12.5 Z M2,3 L17,3 L17,5 L2,5 L2,3 Z M4,0 L15,0 L15,2 L4,2 L4,0 Z"
                    }))), a.createElement(f._25, null, Object(o.d)("{videoCount, plural, one {# video} other {# videos}}", {
                        videoCount: this.props.videoCount
                    }, "CollectionCard"))))))), a.createElement(f.B, {
                        "data-test-selector": "collection-card-body"
                    }, a.createElement(f.X, {
                        display: f.J.Flex,
                        flexDirection: f.L.Column,
                        flexWrap: f.M.NoWrap,
                        padding: {
                            top: .5
                        }
                    }, a.createElement(f._25, {
                        fontSize: f.N.Size5,
                        ellipsis: !0
                    }, a.createElement(g.a, {
                        to: {
                            pathname: this.props.linkTo,
                            state: {
                                content: "collection_card",
                                medium: "channel_collections"
                            }
                        },
                        className: "collection-card__link",
                        "data-test-selector": "collection-card-title-link"
                    }, this.props.title)), a.createElement(f._25, {
                        color: f.F.Alt2,
                        ellipsis: !0
                    }, a.createElement(f._25, {
                        type: f._30.Span
                    }, e), a.createElement(f._25, {
                        type: f._30.Span
                    }, " · " + this.computeViewsMessage())))))
                }, t
            }(a.Component),
            k = Object(h.d)("CollectionCard")(b),
            y = function(e) {
                var t;
                return t = e.showCollectionsManagerButton ? a.createElement("div", null, a.createElement(f._25, {
                    type: f._30.H4,
                    "data-test-selector": "no-collections"
                }, Object(o.d)("Create a collection of your videos from Video Producer.", "collection-page")), a.createElement(f.X, {
                    padding: {
                        top: 2
                    }
                }, a.createElement(f.u, {
                    type: f.z.Hollow,
                    linkTo: "/" + e.channelLogin + "/manager/collections",
                    "data-test-selector": "no-collections-button"
                }, Object(o.d)("Go to Video Producer", "collection-page")))) : a.createElement(f._25, {
                    type: f._30.H4,
                    italic: !0,
                    "data-test-selector": "no-collections"
                }, Object(o.d)("No collections found.", "collection-page")), a.createElement(f._21, {
                    color: f.F.Alt2,
                    textAlign: f._26.Center,
                    padding: {
                        top: 5
                    }
                }, t)
            },
            _ = n("Ic9h"),
            S = n("4Uxc"),
            E = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    if (!this.props.data.loading && this.props.data.user) return o.n.setPageTitle(this.props.data.user.displayName), void this.props.latencyTracking.reportInteractive(this.props.data.user.collections.edges.length + 1);
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e;
                    if (!this.props.data.error && this.props.data.user) {
                        var t = this.props.data.user,
                            n = t.collections.edges.map(function(e) {
                                return e.node
                            }),
                            i = !this.props.data.loading && !this.props.data.error && !!t.collections.pageInfo.hasNextPage,
                            r = null;
                        0 === n.length && (r = a.createElement(y, {
                            showCollectionsManagerButton: this.showCollectionManagerButton(),
                            channelLogin: this.props.match.params.channelLogin
                        }));
                        var c = null;
                        0 !== n.length && this.showCollectionManagerButton() && (c = a.createElement(f.X, {
                            display: f.J.Flex,
                            justifyContent: f.W.End,
                            padding: {
                                bottom: 2
                            }
                        }, a.createElement(f.u, {
                            type: f.z.Hollow,
                            linkTo: "/" + this.props.match.params.channelLogin + "/manager/collections",
                            "data-test-selector": "collections-manage-button"
                        }, Object(o.d)("Manage your collections", "collection-page"))));
                        var u = n.map(function(e, n) {
                            return a.createElement(f.X, {
                                key: e.id,
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(k, {
                                channelLinkTo: "/" + t.login,
                                channelDisplayName: Object(d.a)(t.login, t.displayName),
                                imageAlt: e.title,
                                imageSrc: e.thumbnailURL,
                                linkTo: "/collections/" + e.id,
                                title: e.title,
                                totalViews: e.viewCount,
                                videoCount: e.items.totalCount,
                                "data-a-target": "collection-card-" + n
                            }))
                        });
                        e = a.createElement("div", null, c, r, a.createElement(f._36, {
                            gutterSize: f._38.Small,
                            childWidth: f._37.Medium,
                            placeholderItems: 20
                        }, u), a.createElement(l.a, {
                            enabled: i,
                            loadMore: this.props.loadMore
                        }))
                    } else if (this.props.data.loading && !this.props.data.user) {
                        for (var m = [], h = 0; h < 12; h++) m.push(a.createElement(f.X, {
                            key: "collection-placeholder-" + h,
                            padding: {
                                bottom: 2
                            },
                            "data-test-selector": "collections-placeholder"
                        }, a.createElement(f.X, {
                            margin: {
                                bottom: .5
                            }
                        }, a.createElement(f.j, {
                            ratio: f.k.Aspect16x9
                        }, a.createElement(f._5, null))), a.createElement(f._25, null, a.createElement(f._5, {
                            width: 150
                        })), a.createElement(f._25, {
                            fontSize: f.N.Size7
                        }, a.createElement(f._5, {
                            width: 100
                        }))));
                        e = a.createElement(f._36, {
                            gutterSize: f._38.Small,
                            childWidth: f._37.Medium,
                            placeholderItems: 20
                        }, m)
                    } else e = a.createElement(f.X, {
                        margin: {
                            top: 5
                        }
                    }, a.createElement(s.a, {
                        message: Object(o.d)("These collections are temporarily unavailable.", "channel-collections")
                    }));
                    return a.createElement(f.X, {
                        fullHeight: !0,
                        "data-test-selector": "channel-collections-page"
                    }, a.createElement(_.a, {
                        currentPage: p.b.Collections,
                        ownerLogin: this.props.match.params.channelLogin
                    }, e))
                }, t.prototype.showCollectionManagerButton = function() {
                    return !(!this.props.data.currentUser || !this.props.data.user) && (this.props.data.currentUser.id === this.props.data.user.id || this.props.data.currentUser.roles.isStaff)
                }, t
            }(a.Component),
            C = {
                options: function(e) {
                    return {
                        variables: {
                            ownerLogin: e.match.params.channelLogin,
                            limit: 30
                        }
                    }
                },
                props: function(e) {
                    return i.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: S,
                                variables: i.__assign({}, e.data.variables, {
                                    cursor: e.data.user.collections.edges[Math.max(e.data.user.collections.edges.length - 1, 0)].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult;
                                    return {
                                        user: i.__assign({}, n.user, {
                                            collections: i.__assign({}, n.user.collections, {
                                                edges: e.user.collections.edges.concat(n.user.collections.edges)
                                            })
                                        })
                                    }
                                }
                            })
                        }
                    })
                }
            },
            N = Object(r.compose)(Object(r.graphql)(S, C), Object(h.d)("ChannelCollectionsPage", {
                destination: u.a.ChannelCollections
            }), Object(c.a)({
                location: m.PageviewLocation.ChannelCollections,
                properties: function(e) {
                    return {
                        channel: e.match.params.channelLogin,
                        channel_id: e.data.user && e.data.user.id ? Number(e.data.user.id) : null
                    }
                },
                skip: function(e) {
                    return e.data.loading
                }
            }))(E);
        n.d(t, "ChannelCollectionsPage", function() {
            return N
        })
    },
    zzpv: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "WatchAdModal_Redeeem"
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
                                value: "RedeemTrueXAdInput"
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
                            value: "redeemTrueXAd"
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
                                    value: "grantedBits"
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
                end: 105
            }
        };
        n.loc.source = {
            body: "mutation WatchAdModal_Redeeem($input:RedeemTrueXAdInput!) {\nredeemTrueXAd(input:$input) {\ngrantedBits\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.channel-collections-bff3c6881d2d532f02260be39906ea04.js.map