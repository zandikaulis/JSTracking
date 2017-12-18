webpackJsonp([49], {
    "+GT7": function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("U7vG"),
            i = n("F8kA"),
            o = n("6sO2"),
            l = n("IOwa"),
            s = n("Odds"),
            d = (n("LEV+"), function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.state = {
                        isPremiereExperimentActive: !1
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, o.n.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW")];
                                case 1:
                                    return "yes" === e.sent() && o.b.get("premiere_video_manager_staff", !1) && this.setState({
                                        isPremiereExperimentActive: !0
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = null;
                    !0 !== this.state.isPremiereExperimentActive && this.props.vodcast && (e = r.createElement(s.U, {
                        display: s.H.InlineBlock,
                        padding: {
                            right: .5
                        }
                    }, r.createElement(s._0, {
                        label: Object(o.d)("Vodcast", "LiveChannelCard")
                    })));
                    var t = Object(o.d)("{viewerCount, plural, one {# viewer on {channel}} other {# viewers on {channel}}}", {
                        viewerCount: this.props.viewerCount,
                        channel: r.createElement(i.a, {
                            to: this.props.channelNameLinkTo,
                            className: "live-channel-card__videos",
                            "data-a-target": "live-channel-card-channel-name-link"
                        }, this.props.channelName)
                    }, "Live Channel Card");
                    return r.createElement("div", a.__assign({
                        className: "live-channel-card"
                    }, Object(s._39)(this.props)), r.createElement(s.A, {
                        key: this.props.title
                    }, r.createElement(s.U, {
                        fullWidth: !0
                    }, r.createElement(s.j, {
                        overflow: !0
                    }, r.createElement("div", null, r.createElement(i.a, {
                        to: this.props.linkTo,
                        title: this.props.title,
                        "data-a-target": "live-channel-card-thumbnail-link"
                    }, r.createElement(s.C, {
                        imageAlt: this.props.imageAlt,
                        imageSrc: this.props.imageSrc,
                        aspect: s.k.Aspect16x9
                    }), this.renderContentType()), this.renderGameBoxArt()))), r.createElement(s.B, null, r.createElement(i.a, {
                        to: this.props.linkTo,
                        className: "live-channel-card__channel",
                        "data-a-target": "live-channel-card-title-link"
                    }, r.createElement(s.P, {
                        margin: {
                            top: .5
                        }
                    }, r.createElement(s._22, {
                        type: s._27.H3,
                        fontSize: s.L.Size5,
                        lineHeight: s.V.Body,
                        ellipsis: !0,
                        className: "live-channel-card__title"
                    }, this.props.title))), r.createElement(s.U, {
                        className: "live-channel-card__meta",
                        display: s.H.Flex,
                        flexWrap: s.K.NoWrap
                    }, e, r.createElement(s._22, {
                        type: s._27.Span,
                        ellipsis: !0
                    }, t)))))
                }, t.prototype.renderGameBoxArt = function() {
                    var e = this.props.gameLinkTo,
                        t = this.props.gameTitle,
                        n = this.props.gameImageSrc;
                    return t && e ? r.createElement(i.a, {
                        to: e,
                        title: t,
                        "data-a-target": "live-channel-card-game-link"
                    }, r.createElement(s._18, {
                        className: "live-channel-card__boxart",
                        position: s._3.Absolute,
                        attachRight: !0,
                        attachBottom: !0
                    }, r.createElement(s._30, {
                        display: s.H.Block,
                        direction: s._32.Bottom,
                        label: t
                    }, r.createElement(s.C, {
                        imageSrc: n,
                        imageAlt: t,
                        aspect: s.k.BoxArt
                    })))) : null
                }, t.prototype.renderContentType = function() {
                    return !0 !== this.state.isPremiereExperimentActive ? null : "string" == typeof this.props.streamType && this.props.streamType ? r.createElement(s.U, {
                        position: s._3.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, r.createElement(l.a, {
                        type: this.props.streamType,
                        hosting: this.props.hosting
                    })) : null
                }, t
            }(r.Component)),
            c = d;
        n.d(t, !1, function() {
            return d
        }), n.d(t, "a", function() {
            return c
        })
    },
    "/+to": function(e, t, n) {
        "use strict";
        var a = n("RH2O"),
            r = n("TToO"),
            i = n("U7vG"),
            o = n("6sO2"),
            l = n("Us7i"),
            s = n("QG7y"),
            d = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_0",
            c = "#google_ads_iframe_\\/3576121\\/twitch\\/directory_1",
            u = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.logger = o.i.withCategory("ad-slot"), n.createSlot = function(e) {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var t;
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (this.state.slotCreated) return [2];
                                        this.setState({
                                            slotCreated: !0
                                        }), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, l.a.createSlot(e.slotID, e.adUnit, e.adSize, e.targeting, e.autoEnable)];
                                    case 2:
                                        return t = n.sent(), Object(s.h)(t.getSlotElementId()), this.setState({
                                            slot: t
                                        }), [3, 4];
                                    case 3:
                                        return n.sent(), this.logger.warn("Unable to create ad slot", {
                                            slotID: e.slotID,
                                            adUnit: e.adUnit,
                                            adSize: e.adSize,
                                            targeting: e.targeting,
                                            autoEnable: e.autoEnable
                                        }), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, n.setRef = function(e) {
                        return n.slotRef = e
                    }, n.onSlotRenderEnd = function(e) {
                        var t = e.slot.getSlotElementId();
                        if (n.state.slot && t === n.props.slotID) {
                            if (n.logger.debug("Ad slot render ended", {
                                    elementID: t,
                                    lineItemID: e.lineItemId,
                                    createdID: e.creativeId,
                                    isEmpty: e.isEmpty,
                                    serviceName: e.serviceName,
                                    size: e.size
                                }), e.isEmpty) return;
                            if (!n.slotRef) return;
                            if (n.props.slotID === s.b.anonFront.takeover) return void(document.body.classList.contains("takeover") && n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            }));
                            if (n.props.slotID === s.b.directory.banner) {
                                return void((a = n.slotRef.querySelector(d)) && 1 !== a.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }))
                            }
                            if (n.props.slotID === s.b.directory.rectangle) {
                                var a;
                                return void((a = n.slotRef.querySelector(c)) && 1 !== a.clientWidth && n.setState({
                                    shouldDisplay: !0
                                }, function() {
                                    return n.slotRendered(e.slot)
                                }))
                            }
                            n.setState({
                                shouldDisplay: !0
                            }, function() {
                                return n.slotRendered(e.slot)
                            })
                        }
                    }, n.slotRendered = function(e) {
                        n.props.slotRendered && n.props.slotRendered(e)
                    }, n.state = {
                        shouldDisplay: !1
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    s.g.addListener(s.f, this.onSlotRenderEnd), this.props.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentDidMount)", this.props.slotID), this.createSlot(this.props)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentDidMount)", this.props.slotID)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.slotCreated || (e.trackingSet ? (this.logger.debug("Tracking is set. Creating slot (componentWillReceiveProps)", this.props.slotID), this.createSlot(e)) : this.logger.debug("Tracking is not set. Skipping slot creation (componentWillReceiveProps)", this.props.slotID))
                }, t.prototype.componentWillUnmount = function() {
                    this.logger.debug("Destroying Slot (componentWillUnmount)", this.props.slotID), s.g.removeListener(s.f, this.onSlotRenderEnd), this.state.slot && l.a.destroySlot(this.state.slot)
                }, t.prototype.shouldComponentUpdate = function(e, t) {
                    return t.shouldDisplay !== this.state.shouldDisplay
                }, t.prototype.render = function() {
                    var e = r.__assign({}, this.props.injectStyles);
                    return this.state.shouldDisplay || (e.display = "none"), i.createElement("div", {
                        style: e,
                        id: this.props.slotID,
                        ref: this.setRef
                    })
                }, t
            }(i.Component),
            m = Object(a.a)(function(e) {
                return {
                    trackingSet: e.ads.trackingSet
                }
            })(u);
        n.d(t, "a", function() {
            return m
        })
    },
    "4pV0": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BrowsePage_Popular"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "platformType"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "PlatformType"
                        }
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "languages"
                        }
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Language"
                                }
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
                            value: "streams"
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
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "platformType"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "platformType"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "languages"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "languages"
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
                                                    value: "title"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "viewersCount"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "previewImageURL"
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
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "broadcaster"
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
                                                            value: "displayName"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "game"
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
                                                            value: "name"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "boxArtURL"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "40"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "56"
                                                            }
                                                        }],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "type"
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
            }],
            loc: {
                start: 0,
                end: 405
            }
        };
        n.loc.source = {
            body: "query BrowsePage_Popular($limit: Int $cursor: Cursor $platformType: PlatformType $languages: [Language!]) {\nstreams(first: $limit after: $cursor platformType: $platformType languages: $languages) {\nedges {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\n}\ngame {\nid\nname\nboxArtURL(width: 40 height: 56)\n}\ntype\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "6yQB": function(e, t, n) {
        "use strict";
        var a = n("RH2O"),
            r = n("2KeS"),
            i = n("iJpA"),
            o = n("c8Oh"),
            l = n("TToO"),
            s = n("U7vG"),
            d = n("6sO2"),
            c = n("zCIC"),
            u = n("+Znq"),
            m = n("D9fv"),
            p = n("CSlQ"),
            g = n("Odds"),
            h = (n("vQzq"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleLanguageChange = function(e) {
                        var n = e.currentTarget,
                            a = n.parentElement && n.parentElement.getAttribute("data-language-code");
                        a && t.props.updateLanguagePreferences(a, n.checked)
                    }, t.renderLanguageOption = function(e) {
                        return s.createElement(g.U, {
                            padding: {
                                x: 1,
                                y: .5
                            },
                            key: e.code
                        }, s.createElement(g.E, {
                            label: e.label,
                            checked: t.props.languagePreferences.includes(e.code),
                            "data-language-code": e.code,
                            "data-a-target": "language-filter-" + e.code + "-checkbox",
                            onChange: t.handleLanguageChange
                        }))
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.props.languagePreferences.length;
                    return s.createElement(g.U, {
                        className: "language-select-menu"
                    }, s.createElement(u.a, null, s.createElement(g.u, {
                        "data-test-selector": "language-dropdown-button",
                        "data-a-target": "language-filter-dropdown",
                        dropdown: !0,
                        type: g.z.Hollow
                    }, s.createElement(g.U, {
                        display: g.H.Flex
                    }, Object(d.d)("Language", "LanguageSelectMenu"), s.createElement(g.U, {
                        margin: {
                            left: .5
                        }
                    }, 0 !== e && s.createElement(g._0, {
                        type: g._1.Brand,
                        label: e.toString()
                    })))), s.createElement(g.p, {
                        direction: g.q.BottomLeft,
                        noTail: !0,
                        "data-a-target": "language-filter-balloon"
                    }, s.createElement(c.b, {
                        className: "language-select-menu__balloon"
                    }, s.createElement(g.U, {
                        padding: .5
                    }, Object(m.b)().map(this.renderLanguageOption))), s.createElement(g._18, {
                        background: g.m.Alt,
                        borderTop: !0,
                        className: "language-select-menu__footer"
                    }, s.createElement(g.u, {
                        type: g.z.Text,
                        onClick: this.props.clearLanguagePreferences,
                        "data-a-target": "language-clear-all"
                    }, Object(d.d)("Clear all", "LanguageSelectMenu"))))))
                }, t = l.__decorate([Object(p.c)("LanguageSelectMenu")], t)
            }(s.Component)),
            y = Object(a.a)(function(e) {
                return {
                    languagePreferences: Object(o.a)(e)
                }
            }, function(e) {
                return Object(r.bindActionCreators)({
                    updateLanguagePreferences: i.c,
                    clearLanguagePreferences: i.a
                }, e)
            })(h);
        n.d(t, "a", function() {
            return y
        })
    },
    "7FW4": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = a.createElement(o.U, {
                padding: 1,
                fullHeight: !0,
                flexDirection: o.J.Column,
                justifyContent: o.T.Center,
                display: o.H.Flex
            }, a.createElement(o._22, {
                color: o.F.Link,
                fontSize: o.L.Size4,
                noWrap: !0
            }, Object(i.d)("View All", "Following--ViewAllButton")), a.createElement(o._22, {
                color: o.F.Alt2,
                fontSize: o.L.Size4,
                noWrap: !0
            }, e.subHeader));
            return e.linkTo && (t = a.createElement(r.a, {
                to: e.linkTo,
                className: "following__view-all__link"
            }, t)), a.createElement("div", {
                className: "following__view-all",
                onClick: e.onClickViewAll,
                "data-test-selector": s
            }, a.createElement(o.U, null, a.createElement(o.j, {
                ratio: e.aspectRatio
            }, a.createElement(o._18, {
                background: o.m.Alt2,
                fullHeight: !0
            }, t))))
        };
        var a = n("U7vG"),
            r = (n.n(a), n("F8kA")),
            i = n("6sO2"),
            o = n("Odds"),
            l = n("oHn4"),
            s = (n.n(l), "view-all-button-selector")
    },
    AadB: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("U7vG"),
            i = n("6sO2"),
            o = n("+GT7"),
            l = n("IOwa"),
            s = n("SZoP"),
            d = n("NY9D"),
            c = n("vH/s"),
            u = n("v5ho"),
            m = n("RH2O"),
            p = n("2KeS"),
            g = n("V5M+"),
            h = n("jetF"),
            y = n("7vx8"),
            v = n("CSlQ"),
            f = n("BhyV"),
            b = n("+8VM"),
            k = n("oIkB"),
            S = function(e) {
                switch (e) {
                    case "TARGET_USER_OWNER":
                        return Object(i.d)("You cannot ban or timeout the owner of this community", "BanTimeoutErrorMessages");
                    case "TARGET_USER_MOD":
                        return Object(i.d)("You cannot ban or timeout a moderator", "BanTimeoutErrorMessages");
                    case "TARGET_USER_SELF":
                        return Object(i.d)("You cannot ban or timeout yourself", "BanTimeoutErrorMessages");
                    case "TARGET_USER_STAFF":
                        return Object(i.d)("You cannot ban or timeout a staff member", "BanTimeoutErrorMessages");
                    case "NOT_PERMITTED":
                        return Object(i.d)("The user is already banned from this community", "BanTimeoutErrorMessages");
                    default:
                        return Object(i.d)("Something went wrong", "BanTimeoutErrorMessages")
                }
            },
            C = n("Odds"),
            w = n("nC3l"),
            _ = (n("sJt0"), "error-message"),
            E = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? r.createElement(C.U, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(C._22, {
                            color: C.F.Error,
                            type: C._27.H4,
                            "data-test-selector": _
                        }, S(t.state.error))) : null
                    }, t.onReasonChange = function(e) {
                        var n = e.target.value;
                        t.setState({
                            reason: n
                        })
                    }, t.banUserFromCommunity = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.banUserFromCommunity ? (e = a.__assign({}, Object(k.a)({
                                            communityID: this.props.communityID,
                                            userID: this.props.userID,
                                            reason: this.state.reason
                                        }), {
                                            optimisticResponse: {
                                                banUserFromCommunity: {
                                                    error: null,
                                                    __typename: "BanUserFromCommunityPayload"
                                                }
                                            }
                                        }), [4, this.props.banUserFromCommunity(e)]) : [2];
                                    case 1:
                                        return null === (t = n.sent()).data.banUserFromCommunity.error ? (i.n.tracking.track(c.SpadeEventType.CommunityModeration, {
                                            community_id: this.props.communityID,
                                            name: this.props.communityName,
                                            is_official: !1,
                                            user_id: this.props.currentUserID,
                                            target_id: this.props.userID,
                                            action: "ban",
                                            reason: this.state.reason
                                        }), this.props.onCloseModal()) : this.setState({
                                            error: t.data.banUserFromCommunity.error
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(C.P, {
                        position: C._3.Relative
                    }, r.createElement(C._18, {
                        background: C.m.Base,
                        className: "stream-ban-modal"
                    }, r.createElement(C.U, {
                        padding: 2
                    }, this.renderErrorMessage(), r.createElement(C.U, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(C._22, {
                        type: C._27.H4
                    }, Object(i.d)("Are you sure you want to ban {name}?", {
                        name: this.props.username
                    }, "StreamBanModal"))), r.createElement(C._18, {
                        borderTop: !0
                    }, r.createElement(C.U, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(C._22, {
                        bold: !0
                    }, Object(i.d)("Reason (Required)", "StreamBanModal")), r.createElement(C.Q, {
                        type: C.R.Text,
                        placeholder: Object(i.d)("Please be as detailed as possible", "StreamBanModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), r.createElement(C._18, {
                        borderTop: !0
                    }, r.createElement(C.U, {
                        padding: {
                            top: 2
                        },
                        textAlign: C._23.Center
                    }, r.createElement(C.U, {
                        display: C.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, r.createElement(C.u, {
                        type: C.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(i.d)("Cancel", "StreamBanModal"))), r.createElement(C.U, {
                        display: C.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, r.createElement(C.u, {
                        onClick: this.banUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "ban-button"
                    }, Object(i.d)("Ban", "StreamBanModal")))))), r.createElement(b.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(r.Component),
            N = Object(f.compose)(Object(y.a)(w, {
                name: "banUserFromCommunity"
            }))(E),
            T = Object(m.a)(null, function(e) {
                return Object(p.bindActionCreators)({
                    onCloseModal: g.c
                }, e)
            })(N),
            P = (n("npyu"), n("plcU")),
            O = "error-message",
            D = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        durationHours: 2,
                        error: "",
                        reason: ""
                    }, t.renderErrorMessage = function() {
                        return t.state.error ? r.createElement(C.U, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(C._22, {
                            color: C.F.Error,
                            type: C._27.H4,
                            "data-test-selector": O
                        }, S(t.state.error))) : null
                    }, t.onReasonChange = function(e) {
                        var n = e.target.value;
                        t.setState({
                            reason: n
                        })
                    }, t.onDurationHoursChange = function(e) {
                        var n = parseInt(e.target.value, 10);
                        t.setState({
                            durationHours: n
                        })
                    }, t.timeoutUserFromCommunity = function() {
                        return a.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return a.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.props.timeoutUserFromCommunity ? (e = a.__assign({}, Object(k.a)({
                                            communityID: this.props.communityID,
                                            durationHours: this.state.durationHours,
                                            userID: this.props.userID,
                                            reason: this.state.reason
                                        }), {
                                            optimisticResponse: {
                                                timeoutUserFromCommunity: {
                                                    error: null,
                                                    __typename: "TimeoutUserFromCommunityPayload"
                                                }
                                            }
                                        }), [4, this.props.timeoutUserFromCommunity(e)]) : [2];
                                    case 1:
                                        return null === (t = n.sent()).data.timeoutUserFromCommunity.error ? (i.n.tracking.track(c.SpadeEventType.CommunityModeration, {
                                            community_id: this.props.communityID,
                                            name: this.props.communityName,
                                            is_official: !1,
                                            user_id: this.props.currentUserID,
                                            target_id: this.props.userID,
                                            action: "timeout",
                                            reason: this.state.reason,
                                            duration: this.state.durationHours
                                        }), this.props.onCloseModal()) : this.setState({
                                            error: t.data.timeoutUserFromCommunity.error
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(C.P, {
                        position: C._3.Relative
                    }, r.createElement(C._18, {
                        background: C.m.Base,
                        className: "stream-timeout-modal"
                    }, r.createElement(C.U, {
                        padding: 2
                    }, this.renderErrorMessage(), r.createElement(C.U, {
                        margin: {
                            bottom: 2
                        }
                    }, r.createElement(C._22, {
                        type: C._27.H4
                    }, Object(i.d)("Are you sure you want to timeout {name}?", {
                        name: this.props.username
                    }, "StreamTimeoutModal"))), r.createElement(C._18, {
                        borderTop: !0
                    }, r.createElement(C.U, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(C._22, {
                        bold: !0
                    }, Object(i.d)("Reason (Required)", "StreamTimeoutModal")), r.createElement(C.Q, {
                        type: C.R.Text,
                        placeholder: Object(i.d)("Please be as detailed as possible", "StreamTimeoutModal"),
                        onChange: this.onReasonChange,
                        "data-test-selector": "reason-input"
                    }))), r.createElement(C.U, {
                        margin: {
                            y: 2
                        }
                    }, r.createElement(C._22, {
                        bold: !0
                    }, Object(i.d)("Duration", "StreamTimeoutModal")), r.createElement(C._15, {
                        defaultValue: "2",
                        onChange: this.onDurationHoursChange
                    }, r.createElement("option", {
                        value: "2"
                    }, Object(i.d)("2 hours", "StreamTimeoutModal")), r.createElement("option", {
                        value: "4"
                    }, Object(i.d)("4 hours", "StreamTimeoutModal")), r.createElement("option", {
                        value: "8"
                    }, Object(i.d)("8 hours", "StreamTimeoutModal")), r.createElement("option", {
                        value: "12"
                    }, Object(i.d)("12 hours", "StreamTimeoutModal")), r.createElement("option", {
                        value: "24"
                    }, Object(i.d)("24 hours", "StreamTimeoutModal")))), r.createElement(C._18, {
                        borderTop: !0
                    }, r.createElement(C.U, {
                        padding: {
                            top: 2
                        },
                        textAlign: C._23.Center
                    }, r.createElement(C.U, {
                        display: C.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, r.createElement(C.u, {
                        type: C.z.Text,
                        onClick: this.props.onCloseModal,
                        "data-test-selector": "cancel-button"
                    }, Object(i.d)("Cancel", "StreamTimeoutModal"))), r.createElement(C.U, {
                        display: C.H.Inline,
                        margin: {
                            x: 1
                        }
                    }, r.createElement(C.u, {
                        onClick: this.timeoutUserFromCommunity,
                        disabled: !this.state.reason.length,
                        "data-test-selector": "timeout-button"
                    }, Object(i.d)("Timeout", "StreamTimeoutModal")))))), r.createElement(b.a, {
                        closeOnBackdropClick: !0
                    })))
                }, t
            }(r.Component),
            I = Object(f.compose)(Object(y.a)(P, {
                name: "timeoutUserFromCommunity"
            }))(D),
            B = Object(m.a)(null, function(e) {
                return Object(p.bindActionCreators)({
                    onCloseModal: g.c
                }, e)
            })(I),
            F = n("PO03"),
            x = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onStreamBanClick = function() {
                        var e = Object(s.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(T, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t.onStreamTimeoutClick = function() {
                        var e = Object(s.a)(t.props.login, t.props.displayName, !0);
                        t.props.onShowModal(B, {
                            communityID: t.props.data.community.id,
                            communityName: t.props.communityName,
                            currentUserID: t.props.data.currentUser.id,
                            userID: t.props.userID,
                            username: e
                        })
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.community && this.props.data.community.self && (this.props.data.community.self.permissions.banning || this.props.data.community.self.permissions.timingOut) ? r.createElement(h.a, null, r.createElement(C.v, {
                        ariaLabel: Object(i.d)("Moderation", "DirectoryGamePage"),
                        icon: C._10.ChatRiskFlag
                    }), r.createElement(C.p, {
                        direction: C.q.BottomRight,
                        size: C.r.ExtraSmall,
                        offsetX: "1rem"
                    }, this.renderBanInteractable(), this.renderTimeoutInteractable())) : null
                }, t.prototype.renderBanInteractable = function() {
                    return this.props.data.community.self.permissions.banning ? r.createElement(C.S, {
                        onClick: this.onStreamBanClick,
                        "data-test-selector": "ban-selector"
                    }, r.createElement(C.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(i.d)("Ban", "StreamFlag"))) : null
                }, t.prototype.renderTimeoutInteractable = function() {
                    return this.props.data.community.self.permissions.timingOut ? r.createElement(C.S, {
                        onClick: this.onStreamTimeoutClick,
                        "data-test-selector": "timeout-selector"
                    }, r.createElement(C.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, Object(i.d)("Timeout", "StreamFlag"))) : null
                }, t = a.__decorate([Object(y.a)(F, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                name: decodeURIComponent(e.communityName)
                            }
                        }
                    }
                }), Object(v.c)("StreamFlagComponent", {
                    autoReportInteractive: !0
                })], t)
            }(r.Component),
            U = Object(m.a)(null, function(e) {
                return Object(p.bindActionCreators)({
                    onShowModal: g.d
                }, e)
            })(x),
            j = n("PLRK"),
            R = (n("GiGb"), "directory-game__card_container"),
            A = function(e) {
                function t() {
                    var t = e.call(this) || this;
                    return t.getLinkTo = function(e, n) {
                        var a = t.props.trackingContent ? t.props.trackingContent : c.PageviewContent.Live,
                            r = t.props.directoryType === u.a.Communities ? c.PageviewMedium.Community : c.PageviewMedium.Game;
                        return t.props.trackingMedium && (r = t.props.trackingMedium), {
                            pathname: e,
                            state: {
                                medium: r,
                                content: a,
                                content_index: n
                            }
                        }
                    }, t.renderStreamFlag = function() {
                        var e = t.props.streamNode;
                        return e.broadcaster ? t.props.directoryType === u.a.Communities && t.props.directoryName ? r.createElement(C.U, {
                            className: "stream-thumbnail__card stream-thumbnail__card-flag",
                            position: C._3.Absolute,
                            attachTop: !0,
                            attachRight: !0
                        }, r.createElement(U, {
                            communityName: t.props.directoryName,
                            login: e.broadcaster.login,
                            displayName: e.broadcaster.displayName,
                            userID: e.broadcaster.id
                        })) : void 0 : null
                    }, t.shouldShowGame = function(e) {
                        return t.props.directoryType !== u.a.Games && t.props.streamNode.game ? t.props.streamNode.game[e] : ""
                    }, t.state = {
                        isPremiereExperimentActive: !1
                    }, t
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    return a.__awaiter(this, void 0, void 0, function() {
                        return a.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, i.n.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW")];
                                case 1:
                                    return "yes" === e.sent() && i.b.get("premiere_video_manager_staff", !1) && this.setState({
                                        isPremiereExperimentActive: !0
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e = this.props.streamNode,
                        t = this.props.streamIndex;
                    if (!e.broadcaster) return null;
                    var n = null;
                    return this.state.isPremiereExperimentActive && "string" == typeof e.type && e.type && (n = r.createElement(C.U, {
                        className: "stream-thumbnail__stream-type-indicator-wrapper",
                        position: C._3.Absolute,
                        attachLeft: !0,
                        attachTop: !0,
                        padding: .5
                    }, r.createElement(l.a, {
                        type: e.type
                    }))), r.createElement("div", {
                        className: "stream-thumbnail",
                        "data-target": t ? "" : "directory-first-item",
                        style: {
                            order: t
                        }
                    }, r.createElement(C.U, {
                        className: "stream-thumbnail__card",
                        position: C._3.Relative,
                        margin: {
                            bottom: 2
                        },
                        "data-target": R
                    }, r.createElement(C.U, {
                        position: C._3.Relative
                    }, r.createElement(o.a, {
                        imageSrc: e.previewImageURL || i.a.defaultStreamPreviewURL,
                        imageAlt: e.broadcaster.login + " cover image",
                        viewerCount: e.viewersCount || 0,
                        title: e.title || j.a,
                        channelName: Object(s.a)(e.broadcaster.login, e.broadcaster.displayName, !0),
                        gameImageSrc: this.shouldShowGame("boxArtURL") || i.a.defaultBoxArtURL,
                        gameTitle: this.shouldShowGame("name"),
                        gameLinkTo: this.getLinkTo(Object(d.c)(this.shouldShowGame("name")), t),
                        linkTo: this.getLinkTo("/" + e.broadcaster.login, t),
                        channelNameLinkTo: this.getLinkTo("/" + e.broadcaster.login + "/videos", t),
                        streamType: e.type,
                        "data-a-target": "card-" + t,
                        "data-a-id": "card-" + (e.broadcaster.login || "").replace(/ /g, "")
                    }), n), this.renderStreamFlag()))
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return "directory-first-item"
        }), n.d(t, !1, function() {
            return R
        }), n.d(t, "b", function() {
            return A
        })
    },
    CybZ: function(e, t) {},
    D9fv: function(e, t, n) {
        "use strict";

        function a(e) {
            return void 0 === e && (e = !1), [{
                code: "asl",
                label: "American Sign Language"
            }, {
                code: "other",
                label: e ? Object(r.d)("Other", "broadcaster-languages") : "Other"
            }]
        }
        n.d(t, "a", function() {
            return o
        }), t.b = function() {
            var e = r.n.intl.getLanguageCode(),
                t = function(t) {
                    return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                };
            return i.slice().sort(function(e, n) {
                var a = t(e),
                    r = t(n);
                return a !== r ? a - r : a + ":" + e.label < r + ":" + n.label ? -1 : 1
            }).concat(a(!0))
        };
        var r = n("6sO2"),
            i = [{
                code: "ar",
                label: "العربية"
            }, {
                code: "bg",
                label: "Български"
            }, {
                code: "cs",
                label: "Čeština"
            }, {
                code: "da",
                label: "Dansk"
            }, {
                code: "de",
                label: "Deutsch"
            }, {
                code: "el",
                label: "Ελληνικά"
            }, {
                code: "en",
                label: "English"
            }, {
                code: "es",
                label: "Español"
            }, {
                code: "fi",
                label: "Suomi"
            }, {
                code: "fr",
                label: "Français"
            }, {
                code: "hu",
                label: "Magyar"
            }, {
                code: "it",
                label: "Italiano"
            }, {
                code: "ja",
                label: "日本語"
            }, {
                code: "ko",
                label: "한국어"
            }, {
                code: "nl",
                label: "Nederlands"
            }, {
                code: "no",
                label: "Norsk"
            }, {
                code: "pl",
                label: "Polski"
            }, {
                code: "pt",
                label: "Português"
            }, {
                code: "ru",
                label: "Русский"
            }, {
                code: "sk",
                label: "Slovenčina"
            }, {
                code: "sv",
                label: "Svenska"
            }, {
                code: "th",
                label: "ภาษาไทย"
            }, {
                code: "tr",
                label: "Türkçe"
            }, {
                code: "vi",
                label: "Tiếng Việt"
            }, {
                code: "zh-hk",
                label: "中文(粵語)"
            }, {
                code: "zh",
                label: "中文"
            }],
            o = new Set(i.concat(a()).map(function(e) {
                return e.code
            }))
    },
    Dd84: function(e, t, n) {
        "use strict";

        function a(e) {
            switch (e) {
                case P.a.Channels:
                    return Object(c.d)("Channels", "NewBrowseHeader");
                case P.a.Communities:
                    return Object(c.d)("Communities", "NewBrowseHeader");
                case P.a.CreativeCommunities:
                    return Object(c.d)("Creative Communities", "NewBrowseHeader");
                case P.a.Games:
                    return Object(c.d)("Games", "NewBrowseHeader");
                default:
                    return Object(c.d)("Games and Communities", "NewBrowseHeader")
            }
        }

        function r(e) {
            switch (e) {
                case D.a.Relevancy:
                    return Object(c.d)("Relevancy", "BrowseHeader");
                default:
                    return Object(c.d)("Popularity", "BrowseHeader")
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i, o = n("mmuw"),
            l = n("TToO"),
            s = n("U7vG"),
            d = n("BhyV"),
            c = n("6sO2"),
            u = n("j7/Y"),
            m = n("w9tK"),
            p = n("vH/s"),
            g = n("CSlQ"),
            h = n("RH2O"),
            y = n("2KeS"),
            v = n("UAN1"),
            f = n("F8kA"),
            b = n("yWCw"),
            k = n("zCIC"),
            S = n("7vx8"),
            C = n("oIkB"),
            w = n("NY9D"),
            _ = n("Us7i"),
            E = n("/+to"),
            N = n("QG7y"),
            T = n("eXld"),
            P = n("dzKs"),
            O = n("v5ho"),
            D = n("r4vp"),
            I = n("Odds"),
            B = n("lYCI"),
            F = "directory-first-item",
            x = "directory-container",
            U = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numSlotsAdded: 0
                    }, t.onWindowResize = function() {
                        return requestAnimationFrame(t.updateDisplayAdOrder)
                    }, t.updateDisplayAdOrder = function() {
                        var e = document.querySelector('[data-target="' + x + '"]'),
                            t = document.querySelector('[data-target="' + F + '"]'),
                            n = document.querySelector("#" + N.b.directory.rectangle);
                        if (t && e && n) {
                            var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== a && "0" !== a && (n.style.order = a)
                        }
                    }, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(N.b.directory).length && _.a.display(N.b.directory.banner), {
                                numSlotsAdded: t
                            }
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentWillMount = function() {
                    N.g.addListener(N.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    window.addEventListener("resize", this.onWindowResize), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.onWindowResize), N.g.removeListener(N.e, this.onSlotAdded)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.sideNavExpanded !== e.sideNavExpanded && this.onWindowResize(), this.props.lastBrowsePath !== e.location.pathname && this.props.changeLastBrowsePath(decodeURIComponent(e.location.pathname))
                }, t.prototype.render = function() {
                    var e = this;
                    if (this.props.data.loading && !this.props.data.directories) return s.createElement(I.Y, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return s.createElement(b.a, {
                        message: Object(c.d)("Error loading data.", "BrowseDirectory")
                    });
                    var t = this.props.category === P.a.Communities ? p.PageviewContent.Community : p.PageviewContent.Game,
                        n = this.props.data.directories.edges.map(function(n, a) {
                            var r = n.node;
                            return s.createElement("div", {
                                key: r.id,
                                "data-target": a ? "" : F,
                                style: {
                                    order: a
                                }
                            }, s.createElement(I.U, {
                                margin: {
                                    bottom: 2
                                },
                                "data-target": "directory-page__card-container"
                            }, s.createElement(I.t, {
                                linkTo: {
                                    pathname: e.getPathURL(r.name, r.directoryType),
                                    state: {
                                        content: t,
                                        content_index: a,
                                        medium: p.PageviewMedium.Browse
                                    }
                                },
                                title: r.displayName,
                                imageAlt: Object(c.d)("{displayName} cover image", {
                                    displayName: r.displayName
                                }, "BrowseDirectory"),
                                imageSrc: r.avatarURL,
                                info: Object(c.d)("{viewerCount,number} viewers", {
                                    viewerCount: r.viewersCount
                                }, "BrowseDirectory"),
                                "data-a-target": "card-" + a,
                                "data-a-id": "card-" + r.displayName.replace(/ /g, "")
                            })))
                        }),
                        a = !this.props.data.loading && !this.props.data.error && !!this.props.data.directories.pageInfo.hasNextPage;
                    return s.createElement(I.U, null, s.createElement(T.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), s.createElement("div", {
                        "data-target": x
                    }, s.createElement(I._33, {
                        gutterSize: I._35.Small,
                        childWidth: I._34.Small,
                        placeholderItems: 20
                    }, s.createElement(E.a, {
                        key: -1,
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 20,
                            order: 999,
                            width: 300,
                            height: 250
                        },
                        adUnit: N.d.directory,
                        slotID: N.b.directory.rectangle,
                        adSize: N.c.directory.rectangle,
                        targeting: {
                            pagetype: N.a.games
                        },
                        slotRendered: this.updateDisplayAdOrder,
                        autoEnable: !1
                    }), n), s.createElement(k.a, {
                        enabled: a,
                        loadMore: this.props.loadMore,
                        pixelThreshold: 300
                    })), this.props.children)
                }, t.prototype.getPathURL = function(e, t) {
                    return "COMMUNITY" === t || this.props.category === P.a.Communities || this.props.category === P.a.CreativeCommunities ? Object(w.a)(e) : Object(w.c)(e)
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive(), this.updateDisplayAdOrder()
                }, t
            }(s.Component),
            j = Object(d.compose)(Object(g.c)("BrowseDirectory"), Object(S.a)(B, {
                options: function(e) {
                    return {
                        fetchPolicy: "network-only",
                        variables: {
                            limit: 30,
                            directoryFilters: function(e) {
                                switch (e) {
                                    case P.a.Communities:
                                        return [O.a.Communities, O.a.Creative];
                                    case P.a.Games:
                                        return [O.a.Games];
                                    case P.a.CreativeCommunities:
                                        return [O.a.Creative];
                                    default:
                                        return [O.a.Communities, O.a.Creative, O.a.Games]
                                }
                            }(e.browseType),
                            directorySort: function(e) {
                                return e === D.a.Relevancy ? "RELEVANCE" : "VIEWER_COUNT"
                            }(e.sortBy)
                        }
                    }
                },
                props: function(e) {
                    return l.__assign({}, e, {
                        loadMore: function() {
                            return e.data.fetchMore({
                                query: B,
                                variables: l.__assign({}, e.data.variables, {
                                    cursor: e.data.directories.edges[e.data.directories.edges.length - 5].cursor
                                }),
                                updateQuery: function(e, t) {
                                    var n = t.fetchMoreResult;
                                    return {
                                        directories: l.__assign({}, n.directories, {
                                            edges: Object(C.b)(e.directories.edges, n.directories.edges)
                                        })
                                    }
                                }
                            })
                        }
                    })
                }
            }))(Object(f.f)(U)),
            R = Object(h.a)(function(e) {
                return {
                    browseType: e.browse.browseType,
                    lastBrowsePath: e.browse.lastBrowsePath,
                    sideNavExpanded: e.ui.sideNavExpanded,
                    sortBy: e.browse.sortBy
                }
            }, function(e) {
                return Object(y.bindActionCreators)({
                    changeLastBrowsePath: v.e
                }, e)
            })(j),
            A = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    c.n.setPageTitle(Object(c.d)("Communities", "BrowseCommunitiesPage"))
                }, t.prototype.render = function() {
                    return s.createElement(R, {
                        category: P.a.Communities
                    })
                }, t
            }(s.Component),
            L = Object(d.compose)(Object(g.c)("DirectoryPage", {
                autoReportInteractive: !0,
                destination: m.a.BrowseCommunities
            }), Object(u.a)({
                location: p.PageviewLocation.BrowseCommunities
            }))(A),
            M = function() {
                return s.createElement(I._18, {
                    borderTop: !0,
                    padding: {
                        top: 3
                    },
                    textAlign: I._23.Center
                }, s.createElement(I._22, {
                    fontSize: I.L.Size4,
                    color: I.F.Alt2
                }, Object(c.d)("Not what you're looking for?", "BrowseCreativePage")), s.createElement(I.U, {
                    margin: {
                        top: 2
                    }
                }, s.createElement(I.u, {
                    type: I.z.Hollow,
                    linkTo: "/directory/game/creative"
                }, Object(c.d)("View All Creative Broadcasters", "BrowseCreativePage"))))
            },
            V = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    c.n.setPageTitle(Object(c.d)("Creative", "BrowseCreativePage"))
                }, t.prototype.render = function() {
                    return s.createElement(R, {
                        category: P.a.CreativeCommunities
                    }, s.createElement(M, null))
                }, t
            }(s.Component),
            H = Object(d.compose)(Object(g.c)("DirectoryPage", {
                autoReportInteractive: !0,
                destination: m.a.BrowseCreative
            }), Object(u.a)({
                location: p.PageviewLocation.BrowseCreative
            }))(V),
            G = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(R, {
                        category: P.a.GamesAndCommunities
                    })
                }, t
            }(s.Component),
            W = Object(d.compose)(Object(g.c)("DirectoryPage", {
                autoReportInteractive: !0,
                destination: m.a.BrowseGamesAndCommunities
            }), Object(u.a)({
                location: p.PageviewLocation.Directory
            }))(G),
            z = n("CIox"),
            q = n("6yQB"),
            $ = n("czpb");
        ! function(e) {
            e[e.BrowseGamePage = 0] = "BrowseGamePage", e[e.BrowseCommunitiesPage = 1] = "BrowseCommunitiesPage", e[e.BrowsePopularPage = 2] = "BrowsePopularPage", e[e.BrowseCreativePage = 3] = "BrowseCreativePage"
        }(i || (i = {}));
        var Y, Q = function(e) {
                return s.createElement(I.U, {
                    margin: {
                        bottom: 2
                    }
                }, s.createElement(I._20, null, s.createElement(I._19, {
                    active: e.activeTab === i.BrowseGamePage,
                    linkTo: "/directory",
                    "data-a-target": "browse-games-tab"
                }, Object(c.d)("Games", "BrowseHeader")), s.createElement(I._19, {
                    active: e.activeTab === i.BrowseCommunitiesPage,
                    linkTo: "/directory/communities",
                    "data-a-target": "browse-communities-tab"
                }, Object(c.d)("Communities", "BrowseHeader")), s.createElement(I._19, {
                    active: e.activeTab === i.BrowsePopularPage,
                    linkTo: "/directory/all",
                    "data-a-target": "browse-popular-tab"
                }, Object(c.d)("Popular", "BrowseHeader")), s.createElement(I._19, {
                    active: e.activeTab === i.BrowseCreativePage,
                    linkTo: "/directory/creative",
                    "data-a-target": "browse-creative-tab"
                }, Object(c.d)("Creative", "BrowseHeader"))))
            },
            X = n("+Znq");
        ! function(e) {
            e.Communities = "/directory/communities", e.CreativeCommunities = "/directory/creative", e.Games = "/directory/games", e.GamesAndCommunities = "/directory", e.DirectoryCategory = "/directory/:category?", e.Popular = "/directory/all", e.PopularEncodedLanguage = "/directory/all/:encodedLanguage", e.PopularPlaystation = "/directory/all/ps4", e.PopularXbox = "/directory/all/xbox"
        }(Y || (Y = {}));
        var K, J = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.typeChangeHandler = function(e) {
                        t.balloonWrapperRef.toggleBalloon(!1);
                        switch (e.currentTarget.getAttribute("data-filter-type")) {
                            case P.a.Channels:
                                c.n.history.push(Y.Popular), t.props.changeBrowseType(P.a.Channels);
                                break;
                            case P.a.Communities:
                                c.n.history.push(Y.Communities), t.props.changeBrowseType(P.a.Communities);
                                break;
                            case P.a.CreativeCommunities:
                                c.n.history.push(Y.CreativeCommunities), t.props.changeBrowseType(P.a.CreativeCommunities);
                                break;
                            case P.a.Games:
                                c.n.history.push(Y.GamesAndCommunities), t.props.changeBrowseType(P.a.Games);
                                break;
                            default:
                                c.n.history.push(Y.GamesAndCommunities), t.props.changeBrowseType(P.a.GamesAndCommunities)
                        }
                    }, t.saveBalloonWrapperRef = function(e) {
                        t.balloonWrapperRef = e
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(I.U, {
                        display: I.H.Flex
                    }, s.createElement(I.U, {
                        display: I.H.InlineFlex
                    }, s.createElement(X.a, {
                        ref: this.saveBalloonWrapperRef
                    }, s.createElement(I.u, {
                        type: I.z.Hollow,
                        "data-test-selector": "filter-dropdown-button",
                        dropdown: !0
                    }, a(this.props.browseType)), s.createElement(I.p, {
                        direction: I.q.Bottom,
                        noTail: !0
                    }, s.createElement(I.U, {
                        padding: {
                            y: 1
                        }
                    }, this.renderFilterItem(P.a.GamesAndCommunities), this.renderFilterItem(P.a.Games), this.renderFilterItem(P.a.Communities), this.renderFilterItem(P.a.CreativeCommunities), this.renderFilterItem(P.a.Channels))))))
                }, t.prototype.renderFilterItem = function(e) {
                    return s.createElement(I.S, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": e,
                        "data-test-selector": e + "-selector",
                        selected: this.props.browseType === e
                    }, s.createElement(I.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, a(e)))
                }, t
            }(s.Component),
            Z = Object(h.a)(function(e) {
                return {
                    browseType: Object(o.b)(e)
                }
            }, function(e) {
                return Object(y.bindActionCreators)({
                    changeBrowseType: v.d
                }, e)
            })(J),
            ee = n("Y6wo"),
            te = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.saveBalloonWrapperRef = function(e) {
                        t.balloonWrapperRef = e
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(I.U, {
                        display: I.H.Flex
                    }, s.createElement(I.U, {
                        display: I.H.InlineFlex
                    }, s.createElement(X.a, {
                        ref: this.saveBalloonWrapperRef
                    }, s.createElement(I.u, {
                        type: I.z.Hollow,
                        "data-test-selector": "sort-dropdown-button",
                        dropdown: !0
                    }, r(this.props.sortBy)), s.createElement(I.p, {
                        direction: I.q.Bottom,
                        noTail: !0
                    }, s.createElement(I.U, {
                        padding: {
                            y: 1
                        }
                    }, this.renderSortItem(D.a.Relevancy), this.renderSortItem(D.a.Popularity))))))
                }, t.prototype.renderSortItem = function(e) {
                    var t = this;
                    return s.createElement(I.S, {
                        onClick: function() {
                            t.balloonWrapperRef.toggleBalloon(!1), t.props.changeSortBy(e), Object(ee.b)("sortBy", e)
                        },
                        "data-test-selector": e + "-selector",
                        selected: this.props.sortBy === e
                    }, s.createElement(I.U, {
                        padding: {
                            y: .5,
                            x: 1
                        }
                    }, r(e)))
                }, t
            }(s.Component),
            ne = Object(h.a)(function(e) {
                return {
                    sortBy: Object(o.a)(e)
                }
            }, function(e) {
                return Object(y.bindActionCreators)({
                    changeSortBy: v.f
                }, e)
            })(te),
            ae = function(e) {
                return e === Y.Popular || e === Y.PopularEncodedLanguage || e === Y.PopularPlaystation || e === Y.PopularXbox
            },
            re = n("HW6M"),
            ie = (n("R0TX"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.typeChangeHandler = function(e) {
                        t.balloonWrapperRef.toggleBalloon(!1);
                        var n = e.currentTarget.getAttribute("data-filter-type");
                        "all" === n ? c.n.history.push("/directory/all/") : c.n.history.push("/directory/all/" + n)
                    }, t.saveBalloonWrapperRef = function(e) {
                        t.balloonWrapperRef = e
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e, t = Object(c.d)("All Platforms", "PlatformFilter"),
                        n = Object(c.d)("Xbox One", "PlatformFilter"),
                        a = Object(c.d)("PlayStation 4", "PlatformFilter");
                    switch (this.props.broadcastType) {
                        case "xbox":
                            e = n;
                            break;
                        case "ps4":
                            e = a;
                            break;
                        default:
                            e = t
                    }
                    return s.createElement(I.U, {
                        display: I.H.Flex
                    }, s.createElement("div", null, s.createElement(I.U, {
                        display: I.H.InlineFlex
                    }, s.createElement(X.a, {
                        ref: this.saveBalloonWrapperRef,
                        "data-a-target": "platform-filter-balloon"
                    }, s.createElement(I.u, {
                        type: I.z.Hollow,
                        "data-test-selector": "filter-dropdown-button",
                        "data-a-target": "platform-filter-dropdown",
                        dropdown: !0
                    }, e), s.createElement(I.p, {
                        direction: I.q.Bottom,
                        noTail: !0
                    }, s.createElement(I.U, {
                        className: "layout",
                        padding: {
                            y: 1
                        }
                    }, this.renderFilterItem("all", t, "filter-item-all"), this.renderFilterItem("xbox", n, "filter-item-xbox"), this.renderFilterItem("ps4", a, "filter-item-ps4")))))))
                }, t.prototype.renderFilterItem = function(e, t, n) {
                    var a = re("platform-filter", {
                        "platform-filter--active": !this.props.broadcastType || this.props.broadcastType === e
                    });
                    return s.createElement(I.S, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": e,
                        "data-a-target": "platform-filter-" + e + "-button"
                    }, s.createElement(I.U, {
                        className: a,
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": n
                    }, t))
                }, t
            }(s.Component)),
            oe = {
                "/directory/all": "all",
                "/directory/all/:encodedLanguage": "all",
                "/directory/all/xbox": "xbox",
                "/directory/all/xb1": "xbox",
                "/directory/all/ps4": "ps4"
            },
            le = "create-community-button",
            se = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderSortOrStream = function() {
                        return ae(t.props.match.path) ? Object(c.d)("Show me {filter} streaming from {platform}", {
                            filter: s.createElement(I.U, {
                                margin: {
                                    x: 1
                                }
                            }, s.createElement(Z, null)),
                            platform: s.createElement(I.U, {
                                margin: {
                                    x: 1
                                }
                            }, s.createElement(ie, {
                                broadcastType: oe[decodeURIComponent(t.props.match.path)] || "all"
                            }))
                        }, "NewBrowseHeader") : Object(c.d)("Show me {filter} sorted by {sort}", {
                            filter: s.createElement(I.U, {
                                margin: {
                                    x: 1
                                }
                            }, s.createElement(Z, null)),
                            sort: s.createElement(I.U, {
                                margin: {
                                    x: 1
                                }
                            }, s.createElement(ne, null))
                        }, "NewBrowseHeader")
                    }, t.renderCreateCommunity = function() {
                        return t.props.location.pathname !== Y.Communities ? null : s.createElement(I.u, {
                            type: I.z.Hollow,
                            linkTo: Object($.a)("/communities/create"),
                            "data-test-selector": le
                        }, Object(c.d)("Create Community", "NewBrowseHeader"))
                    }, t.renderLanguageSelect = function() {
                        return ae(t.props.match.path) ? s.createElement(q.a, null) : null
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(I._18, {
                        background: I.m.Base,
                        border: !0,
                        display: I.H.Flex,
                        flexDirection: I.J.Row,
                        margin: {
                            bottom: 2
                        },
                        padding: 2
                    }, s.createElement(I.U, {
                        display: I.H.Flex,
                        flexGrow: 1
                    }, s.createElement(I.U, {
                        display: I.H.Flex,
                        alignItems: I.c.Center
                    }, this.renderSortOrStream())), s.createElement(I.U, {
                        display: I.H.Flex,
                        flexGrow: 1,
                        justifyContent: I.T.End
                    }, s.createElement(I.U, {
                        display: I.H.Flex,
                        flexDirection: I.J.Row
                    }, this.renderCreateCommunity(), this.renderLanguageSelect())))
                }, t
            }(s.Component),
            de = Object(f.f)(se),
            ce = n("+GT7"),
            ue = n("DtWM"),
            me = n("SZoP"),
            pe = n("PLRK"),
            ge = n("7FW4"),
            he = n("peXu"),
            ye = n("SN3I"),
            ve = n("AadB"),
            fe = n("I1+1"),
            be = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    if (this.props.data.loading && !this.props.data.streams || this.props.data.error || !this.props.data.streams) return null;
                    var e, t = Object(c.d)("Channels in English", "PopularInternationalSection"),
                        n = this.props.directoryWidth,
                        a = p.PageviewMedium.Browse,
                        r = p.PageviewContent.Popular,
                        i = this.props.data.streams.edges || [];
                    if (n && n > 0) {
                        var o = Object(he.a)(n, 240, 2);
                        o < i.length && (i = i.slice(0, o - 1), e = s.createElement("div", {
                            style: {
                                order: i.length
                            }
                        }, s.createElement(ge.a, {
                            subHeader: t,
                            linkTo: {
                                pathname: "/directory/all/" + this.props.languageCode,
                                state: {
                                    medium: a,
                                    content: r
                                }
                            }
                        })))
                    }
                    var l = i.filter(function(e) {
                        var t = e.node;
                        return t.broadcaster && t.broadcaster.login && t.broadcaster.id
                    }).map(function(e, t) {
                        var n = e.node;
                        return s.createElement(ve.b, {
                            directoryType: O.a.Communities,
                            streamIndex: t,
                            streamNode: n,
                            key: n.id,
                            trackingMedium: a,
                            trackingContent: r
                        })
                    });
                    return s.createElement("div", null, s.createElement(ye.a, {
                        languageCode: this.props.languageCode
                    }), s.createElement(I._33, {
                        gutterSize: I._35.Small,
                        childWidth: I._34.Medium,
                        placeholderItems: 20
                    }, l, e))
                }, t = l.__decorate([Object(S.a)(fe, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                limit: 30,
                                languages: [e.languageCode],
                                platformType: e.platformType
                            }
                        }
                    }
                }), Object(g.c)("PopularInternationalSection", {
                    autoReportInteractive: !0
                })], t)
            }(s.Component),
            ke = n("4pV0"),
            Se = "directory-first-item",
            Ce = "directory-container",
            we = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        numSlotsAdded: 0,
                        directoryWidth: -1
                    }, t.onResize = function(e) {
                        t.setState({
                            directoryWidth: e
                        })
                    }, t.onWindowResize = function() {
                        return requestAnimationFrame(t.updateDisplayAdOrder)
                    }, t.updateDisplayAdOrder = function() {
                        var e = document.querySelector('[data-target="' + Ce + '"]'),
                            t = document.querySelector('[data-target="' + Se + '"]'),
                            n = document.querySelector("#" + N.b.directory.rectangle);
                        if (t && e && n) {
                            var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== a && "0" !== a && (n.style.order = a)
                        }
                    }, t.onSlotAdded = function() {
                        t.setState(function(e) {
                            var t = e.numSlotsAdded + 1;
                            return t === Object.keys(N.b.directory).length && _.a.display(N.b.directory.banner), {
                                numSlotsAdded: t
                            }
                        })
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentWillMount = function() {
                    N.g.addListener(N.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    c.n.setPageTitle(Object(c.d)("Top Channels", "DirectoryPopularPage")), window.addEventListener("resize", this.onWindowResize), this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("resize", this.onWindowResize), N.g.removeListener(N.e, this.onSlotAdded)
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.sideNavExpanded !== e.sideNavExpanded && this.onWindowResize(), this.props.lastBrowsePath !== e.location.pathname && this.props.changeLastBrowsePath(decodeURIComponent(e.location.pathname))
                }, t.prototype.render = function() {
                    if (this.props.data.loading && !this.props.data.streams) return s.createElement(I.Y, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return s.createElement(b.a, {
                        message: Object(c.d)("Error loading data.", "DirectoryPopularPage")
                    });
                    var e = null,
                        t = null;
                    "en" !== this.props.languageCode && (t = s.createElement(I.U, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(I._22, {
                        type: I._27.H4,
                        color: I.F.Alt2,
                        fontSize: I.L.Size5,
                        transform: I._26.Uppercase
                    }, Object(c.d)("All Channels", "PopularInternationalSection"))), e = s.createElement(be, {
                        directoryWidth: this.state.directoryWidth,
                        languageCode: this.props.languageCode,
                        platformType: oe[decodeURIComponent(this.props.match.path)] || "all"
                    }));
                    var n = p.PageviewMedium.Browse,
                        a = this.props.data.streams.edges.map(function(e, t) {
                            var a = e.node;
                            return a.broadcaster.id ? s.createElement("div", {
                                key: a.id,
                                "data-target": t ? "" : Se,
                                style: {
                                    order: t
                                }
                            }, s.createElement(I.U, {
                                margin: {
                                    bottom: 2
                                },
                                "data-target": "directory-game__card_container"
                            }, s.createElement(ce.a, {
                                linkTo: {
                                    pathname: "/" + a.broadcaster.login,
                                    state: {
                                        content: p.PageviewContent.Live,
                                        content_index: t,
                                        medium: n
                                    }
                                },
                                title: a.title || pe.a,
                                imageAlt: a.broadcaster.login + " cover image",
                                imageSrc: a.previewImageURL,
                                viewerCount: a.viewersCount || 0,
                                channelName: Object(me.a)(a.broadcaster.login, a.broadcaster.displayName, !0),
                                gameImageSrc: a.game && a.game.boxArtURL || c.a.defaultBoxArtURL,
                                gameTitle: a.game && a.game.name || "",
                                gameLinkTo: {
                                    pathname: Object(w.c)(a.game && a.game.name || ""),
                                    state: {
                                        medium: n,
                                        content: p.PageviewContent.Live,
                                        content_index: t
                                    }
                                },
                                "data-a-target": "card-" + t,
                                "data-a-id": "card-" + (a.broadcaster.login || "").replace(/ /g, ""),
                                channelNameLinkTo: {
                                    pathname: "/" + a.broadcaster.login + "/videos",
                                    state: {
                                        medium: n,
                                        content: p.PageviewContent.Live,
                                        content_index: t
                                    }
                                },
                                streamType: a.type
                            }))) : null
                        }),
                        r = !this.props.data.loading && !this.props.data.error && !!this.props.data.streams.pageInfo.hasNextPage;
                    return s.createElement(I.U, {
                        flexShrink: 0,
                        "data-target": Ce
                    }, s.createElement(T.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), e, t, s.createElement(I._33, {
                        gutterSize: I._35.Small,
                        childWidth: I._34.Large,
                        placeholderItems: 20
                    }, s.createElement(E.a, {
                        key: -1,
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 20,
                            order: 999,
                            width: 300,
                            height: 250
                        },
                        adUnit: N.d.directory,
                        slotID: N.b.directory.rectangle,
                        adSize: N.c.directory.rectangle,
                        targeting: {
                            pagetype: N.a.games
                        },
                        slotRendered: this.updateDisplayAdOrder,
                        autoEnable: !1
                    }), a), s.createElement(k.a, {
                        enabled: r,
                        loadMore: this.props.loadMore,
                        pixelThreshold: 200
                    }), s.createElement(ue.a, {
                        onResize: this.onResize
                    }))
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive(), this.updateDisplayAdOrder()
                }, t = l.__decorate([Object(S.a)(ke, {
                    options: function(e) {
                        return {
                            fetchPolicy: "network-only",
                            variables: {
                                limit: 30,
                                platformType: oe[decodeURIComponent(e.match.path)] || "all",
                                languages: e.languagePreferences.map(function(e, t) {
                                    return e.toUpperCase()
                                })
                            }
                        }
                    },
                    props: function(e) {
                        return l.__assign({}, e, {
                            loadMore: function() {
                                var t = e.data,
                                    n = t.fetchMore,
                                    a = t.variables,
                                    r = t.streams;
                                return n({
                                    query: ke,
                                    variables: l.__assign({}, a, {
                                        cursor: r.edges[r.edges.length - 5].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            streams: l.__assign({}, n.streams, {
                                                edges: Object(C.b)(e.streams.edges, n.streams.edges)
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(g.c)("DirectoryPopularPage", {
                    destination: m.a.DirectoryPopular
                }), Object(u.a)({
                    location: p.PageviewLocation.DirectoryPopular
                })], t)
            }(s.Component),
            _e = Object(h.a)(function(e) {
                return {
                    languageCode: e.session.languageCode,
                    languagePreferences: e.userPreferences.languagePreferences,
                    lastBrowsePath: e.browse.lastBrowsePath,
                    sideNavExpanded: e.ui.sideNavExpanded
                }
            }, function(e) {
                return Object(y.bindActionCreators)({
                    changeLastBrowsePath: v.e
                }, e)
            })(we),
            Ee = n("yFXh"),
            Ne = "directory-container",
            Te = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.updateDisplayAdOrder = function() {
                        var e = document.querySelector('[data-target="' + Ne + '"]'),
                            t = document.querySelector('[data-target="' + ve.a + '"]'),
                            n = document.querySelector("#" + N.b.directory.rectangle);
                        if (t && e && n) {
                            var a = Math.round((e.clientWidth - 300) / t.clientWidth).toString();
                            n.style.order !== a && "0" !== a && (n.style.order = a)
                        }
                    }, n.onSlotAdded = function() {
                        n.setState(function(e) {
                            var t = e.numSlotsCreated + 1;
                            return t === Object.keys(N.b.directory).length && _.a.display(N.b.directory.banner), {
                                numSlotsCreated: t
                            }
                        })
                    }, n.state = {
                        numSlotsCreated: 0
                    }, n
                }
                return l.__extends(t, e), t.prototype.componentWillMount = function() {
                    N.g.addListener(N.e, this.onSlotAdded)
                }, t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.componentWillUnmount = function() {
                    N.g.removeListener(N.e, this.onSlotAdded)
                }, t.prototype.render = function() {
                    if (this.props.data.loading && !this.props.data.streams) return s.createElement(I.Y, {
                        fillContent: !0
                    });
                    if (this.props.data.error) return s.createElement(b.a, {
                        message: Object(c.d)("Error loading data.", "PopularDirectoryByLanguagePage")
                    });
                    if (!this.props.data.streams) return s.createElement(b.a, {
                        message: Object(c.d)("Game does not exist", "PopularDirectoryByLanguagePage")
                    });
                    var e, t = this.props.data.streams.edges.filter(function(e) {
                        var t = e.node;
                        return t.broadcaster && t.broadcaster.login && t.broadcaster.id
                    }).map(function(e, t) {
                        var n = e.node;
                        return s.createElement(ve.b, {
                            directoryType: O.a.Communities,
                            streamIndex: t,
                            streamNode: n,
                            key: n.id,
                            trackingMedium: p.PageviewMedium.Browse
                        })
                    });
                    if (t.length > 0) {
                        var n = I._34.Large,
                            a = !this.props.data.loading && !this.props.data.error && !!this.props.data.streams.pageInfo.hasNextPage;
                        e = s.createElement(I.U, {
                            flexShrink: 0,
                            "data-target": Ne
                        }, s.createElement(I._33, {
                            gutterSize: I._35.Small,
                            childWidth: n,
                            placeholderItems: 20
                        }, s.createElement(E.a, {
                            injectStyles: {
                                textAlign: "center",
                                marginBottom: 20,
                                order: 999,
                                width: 300,
                                height: 250
                            },
                            adUnit: N.d.directory,
                            slotID: N.b.directory.rectangle,
                            adSize: N.c.directory.rectangle,
                            targeting: {
                                pagetype: N.a.games
                            },
                            key: -1,
                            autoEnable: !1
                        }), t), s.createElement(k.a, {
                            enabled: a,
                            loadMore: this.props.loadMore,
                            pixelThreshold: 200
                        }))
                    } else {
                        var r = Object(c.d)("No live channels for this game", "PopularDirectoryByLanguagePage");
                        e = s.createElement(I.U, {
                            display: I.H.Flex,
                            alignItems: I.c.Center,
                            justifyContent: I.T.Center,
                            fullWidth: !0,
                            padding: {
                                y: 3
                            }
                        }, s.createElement(I._22, {
                            color: I.F.Alt2,
                            fontSize: I.L.Size4,
                            italic: !0
                        }, r))
                    }
                    return s.createElement(I.U, {
                        margin: {
                            bottom: 2
                        },
                        display: I.H.Flex,
                        flexDirection: I.J.Row
                    }, s.createElement(T.b, {
                        addPaddingWhenPlayerIsPersisting: !0
                    }), s.createElement(E.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: N.d.directory,
                        slotID: N.b.directory.banner,
                        adSize: N.c.directory.banner,
                        targeting: {
                            pagetype: N.a.games
                        },
                        slotRendered: this.updateDisplayAdOrder,
                        autoEnable: !1
                    }), s.createElement(ye.a, {
                        languageCode: this.props.match.params.encodedLanguage
                    }), e)
                }, t.prototype.onRender = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t = l.__decorate([Object(S.a)(Ee, {
                    options: function(e) {
                        return {
                            variables: {
                                limit: 30,
                                languages: [e.match.params.encodedLanguage]
                            }
                        }
                    },
                    props: function(e) {
                        return l.__assign({}, e, {
                            loadMore: function() {
                                return e.data.fetchMore({
                                    query: Ee,
                                    variables: l.__assign({}, e.data.variables, {
                                        cursor: e.data.streams.edges[e.data.streams.edges.length - 1].cursor
                                    }),
                                    updateQuery: function(e, t) {
                                        var n = t.fetchMoreResult;
                                        return {
                                            streams: l.__assign({}, n.streams, {
                                                edges: Object(C.b)(e.streams.edges, n.streams.edges)
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    }
                }), Object(g.c)("DirectoryPopularByLanguagePage", {
                    destination: m.a.DirectoryPopularByLanguage
                }), Object(u.a)({
                    location: p.PageviewLocation.Directory,
                    skip: function(e) {
                        return e.data.loading || !!e.data.error
                    },
                    properties: function(e) {
                        return {
                            language: e.match.params.encodedLanguage
                        }
                    }
                })], t)
            }(s.Component),
            Pe = (K = {}, K[Y.DirectoryCategory] = i.BrowseGamePage, K[Y.Communities] = i.BrowseCommunitiesPage, K[Y.Popular] = i.BrowsePopularPage, K[Y.PopularXbox] = i.BrowsePopularPage, K[Y.PopularPlaystation] = i.BrowsePopularPage, K[Y.PopularEncodedLanguage] = i.BrowsePopularPage, K[Y.CreativeCommunities] = i.BrowseCreativePage, K),
            Oe = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasViewedGamesPage: !1,
                        newBrowseExperimentType: "control"
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    return l.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return l.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, c.n.experiments.getAssignment("TWILIGHT_NEW_BROWSE")];
                                case 1:
                                    if (e = t.sent(), this.setState({
                                            newBrowseExperimentType: e || "control"
                                        }), this.props.match.path === Y.DirectoryCategory) {
                                        switch (this.state.newBrowseExperimentType) {
                                            case "variant1":
                                                this.props.changeBrowseType(P.a.GamesAndCommunities), this.props.changeSortBy(D.a.Relevancy);
                                                break;
                                            case "variant2":
                                                this.props.changeBrowseType(P.a.GamesAndCommunities), this.props.changeSortBy(D.a.Popularity);
                                                break;
                                            case "variant3":
                                                this.props.changeSortBy(D.a.Relevancy), this.props.changeBrowseType(P.a.Games);
                                                break;
                                            case "variant4":
                                            default:
                                                this.props.changeSortBy(D.a.Popularity), this.props.changeBrowseType(P.a.Games)
                                        }
                                        this.setCorrectPageTitle(this.props.browseType)
                                    } else this.setBrowseType(this.props.match.path);
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.state.hasViewedGamesPage || this.props.match.path !== Y.Games || this.setState({
                        hasViewedGamesPage: !0
                    }), this.setBrowseType(e.match.path), this.setCorrectPageTitle(e.browseType)
                }, t.prototype.render = function() {
                    return s.createElement(I.U, {
                        padding: 3
                    }, s.createElement(E.a, {
                        injectStyles: {
                            textAlign: "center",
                            marginBottom: 30
                        },
                        adUnit: N.d.directory,
                        slotID: N.b.directory.banner,
                        adSize: N.c.directory.banner,
                        targeting: {
                            pagetype: N.a.games
                        },
                        autoEnable: !1
                    }), this.renderBrowseHeader(), s.createElement(z.d, null, s.createElement(z.b, {
                        path: Y.Communities,
                        component: L
                    }), s.createElement(z.b, {
                        path: Y.CreativeCommunities,
                        component: H
                    }), s.createElement(z.b, {
                        path: Y.PopularPlaystation,
                        component: _e
                    }), s.createElement(z.b, {
                        path: Y.PopularXbox,
                        component: _e
                    }), s.createElement(z.b, {
                        path: Y.PopularEncodedLanguage,
                        component: Te
                    }), s.createElement(z.b, {
                        path: Y.Popular,
                        component: _e
                    }), s.createElement(z.b, {
                        path: Y.DirectoryCategory,
                        component: W
                    })))
                }, t.prototype.renderBrowseHeader = function() {
                    return "control" === this.state.newBrowseExperimentType ? s.createElement(I.U, null, s.createElement(Q, {
                        activeTab: Pe[decodeURIComponent(this.props.match.path)]
                    }), this.renderCreateCommunityButton(), this.renderPopularPageFilters()) : s.createElement(de, null)
                }, t.prototype.renderCreateCommunityButton = function() {
                    if (Pe[decodeURIComponent(this.props.match.path)] === i.BrowseCommunitiesPage) return s.createElement(I.U, {
                        display: I.H.Flex,
                        justifyContent: I.T.End,
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(I.u, {
                        linkTo: Object($.a)("/communities/create"),
                        "data-test-selector": "create-community-button-test"
                    }, Object(c.d)("Create a Community", "BrowseDirectory")))
                }, t.prototype.renderPopularPageFilters = function() {
                    if (Pe[decodeURIComponent(this.props.match.path)] === i.BrowsePopularPage) return s.createElement(I.U, {
                        margin: {
                            bottom: 2
                        },
                        display: I.H.Flex,
                        flexDirection: I.J.Row
                    }, s.createElement(ie, {
                        broadcastType: oe[decodeURIComponent(this.props.match.path)] || "all"
                    }), s.createElement(I.U, {
                        padding: {
                            x: 1
                        }
                    }, s.createElement(q.a, null)))
                }, t.prototype.setCorrectPageTitle = function(e) {
                    e === P.a.GamesAndCommunities ? c.n.setPageTitle(Object(c.d)("Games and Communities", "BrowseGamesAndCommunitiesPage")) : e === P.a.Games && c.n.setPageTitle(Object(c.d)("All Games", "BrowseGamePage"))
                }, t.prototype.setBrowseType = function(e) {
                    "control" === this.state.newBrowseExperimentType && e === Y.DirectoryCategory && this.props.changeBrowseType(P.a.Games), e === Y.Communities && this.props.changeBrowseType(P.a.Communities), e === Y.CreativeCommunities && this.props.changeBrowseType(P.a.CreativeCommunities), ae(e) && this.props.changeBrowseType(P.a.Channels)
                }, t
            }(s.Component),
            De = Object(h.a)(function(e) {
                return {
                    browseType: Object(o.b)(e),
                    sortBy: Object(o.a)(e)
                }
            }, function(e) {
                return Object(y.bindActionCreators)({
                    changeBrowseType: v.d,
                    changeSortBy: v.f
                }, e)
            })(Oe);
        n.d(t, "BrowseCommunitiesPage", function() {
            return L
        }), n.d(t, "BrowseCreativePage", function() {
            return H
        }), n.d(t, "BrowseGamesAndCommunitiesPage", function() {
            return W
        }), n.d(t, "BrowseRootPage", function() {
            return De
        })
    },
    GiGb: function(e, t) {},
    "I1+1": function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BrowsePopular_InternationalStreams"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "platformType"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "PlatformType"
                        }
                    },
                    defaultValue: null
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
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "languages"
                        }
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Language"
                                }
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
                            value: "streams"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "platformType"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "platformType"
                                }
                            }
                        }, {
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
                                value: "languages"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "languages"
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
                                                    value: "title"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "viewersCount"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "previewImageURL"
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
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "broadcaster"
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
                                                            value: "displayName"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "game"
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
                                                            value: "boxArtURL"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "40"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "56"
                                                            }
                                                        }],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "name"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "type"
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
                end: 358
            }
        };
        n.loc.source = {
            body: "query BrowsePopular_InternationalStreams($platformType: PlatformType $limit: Int $languages: [Language!]) {\nstreams(platformType: $platformType first: $limit languages: $languages) {\nedges {\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\n}\ngame {\nid\nboxArtURL(width: 40 height: 56)\nname\n}\ntype\n}\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    IOwa: function(e, t, n) {
        "use strict";
        var a, r, i, o = n("TToO"),
            l = n("HW6M"),
            s = n("U7vG"),
            d = n("6sO2"),
            c = n("2o2f"),
            u = n("Odds"),
            m = (n("CybZ"), a = {}, a[c.a.Live] = "stream-type-indicator--live", a[c.a.Premiere] = "stream-type-indicator--premiere", a[c.a.Rerun] = "stream-type-indicator--rerun", a[c.a.WatchParty] = "stream-type-indicator--rerun", a),
            p = (r = {}, r[c.a.Premiere] = u._10.VideoPremiere, r[c.a.Rerun] = u._10.VideoRerun, r[c.a.WatchParty] = u._10.VideoRerun, r),
            g = (i = {}, i[c.a.Premiere] = u._11.Live, i[c.a.Rerun] = u._11.Inherit, i[c.a.WatchParty] = u._11.Inherit, i),
            h = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return o.__extends(t, e), t.prototype.render = function() {
                    return s.createElement(u._18, {
                        className: this.getClassNames(),
                        color: u.F.Overlay,
                        background: u.m.Overlay,
                        padding: {
                            x: .5
                        },
                        borderRadius: u.s.Small,
                        display: u.H.Flex
                    }, s.createElement(u.U, {
                        display: u.H.Flex,
                        alignItems: u.c.Center,
                        margin: {
                            right: .5
                        }
                    }, this.getIcon()), s.createElement(u._22, {
                        type: u._27.Span
                    }, this.getLabel()))
                }, t.prototype.getClassNames = function() {
                    var e = {
                        "stream-type-indicator": !0
                    };
                    return e[m[this.props.type]] = !0, l(e)
                }, t.prototype.getIcon = function() {
                    return this.props.hosting ? s.createElement(u._18, {
                        borderRadius: u.s.Rounded,
                        className: "stream-type-indicator__hosting-dot"
                    }) : this.props.type === c.a.Live ? s.createElement(u.U, {
                        className: "stream-type-indicator__live-wrapper",
                        display: u.H.Flex,
                        alignItems: u.c.Center
                    }, s.createElement(u.W, {
                        size: u.X.Small
                    })) : s.createElement(u._9, {
                        asset: p[this.props.type],
                        type: g[this.props.type],
                        width: 14,
                        height: 14
                    })
                }, t.prototype.getLabel = function() {
                    if (this.props.hosting) return Object(d.d)("Hosting", "StreamTypeIndicator");
                    switch (this.props.type) {
                        case c.a.Live:
                            return Object(d.d)("Live", "StreamTypeIndicator");
                        case c.a.Premiere:
                            return Object(d.d)("Premiere", "StreamTypeIndicator");
                        case c.a.Rerun:
                        case c.a.WatchParty:
                            return Object(d.d)("Rerun", "StreamTypeIndicator");
                        default:
                            return ""
                    }
                }, t
            }(s.Component);
        n.d(t, "a", function() {
            return h
        })
    },
    "LEV+": function(e, t) {},
    MSvX: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("OAwv"),
            i = n("U7vG"),
            o = n("6sO2"),
            l = n("Ejve"),
            s = "legacy_routes_enabled",
            d = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.isEnabled = !1, n.onHistoryChange = function(e, t) {
                        n.isEnabled ? "REPLACE" !== t ? e && e.pathname ? (n.logger.debug("Location changed", {
                            path: e.pathname
                        }), n.legacyRoutes.forEach(function(t) {
                            try {
                                if (e.pathname.match(t)) {
                                    n.logger.debug("Found legacy route. Reloading...");
                                    var a = "" !== e.search ? r.parse(e.search) : {};
                                    a["from-redirect"] = "true";
                                    var i = r.stringify(a),
                                        s = o.a.buildType === l.a.Dev ? window.location.host : window.location.hostname,
                                        d = window.location.protocol + "//" + s + e.pathname + "?" + i;
                                    return n.logger.debug("Redirecting to legacy route", {
                                        newUrl: d
                                    }), void window.location.replace(d)
                                }
                            } catch (e) {
                                o.i.withCategory("legacy").error(e, "Unable to determine legacy reload match", {
                                    regex: t
                                })
                            }
                        })) : n.logger.debug("Unable to process history change. Path is null or empty.") : n.logger.debug("Skipping legacy route processing, due to history replace.") : n.logger.debug("Legacy routing not enabled.")
                    }, n.processRedirectParam = function(e) {
                        if (e && e.pathname && e.search) {
                            var t = "" !== e.search ? r.parse(e.search) : {};
                            if (t["from-redirect"]) {
                                delete t["from-redirect"];
                                var a = r.stringify(t),
                                    i = "";
                                a.length > 0 && (i = "?" + a), n.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: i
                                })
                            }
                        }
                    }, n.isEnabled = o.b.get(s, !1), n.logger = o.i.withCategory("legacy-routes"), n.legacyRoutes = n.buildRoutes(), n.props.history.listen(n.onHistoryChange), n
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return null
                }, t.prototype.componentDidMount = function() {
                    this.processRedirectParam(this.props.history.location)
                }, t.prototype.buildRoutes = function() {
                    if (!this.isEnabled) return [];
                    this.logger.debug("Building legacy routes...");
                    var e = o.b.get("legacy_routes", []),
                        t = [];
                    if (!e || 0 === e.length) return this.logger.debug("No legacy routes found in settings."), t;
                    for (var n = 0, a = e; n < a.length; n++) {
                        var r = a[n];
                        try {
                            var i = new RegExp(r, "i");
                            t.push(i)
                        } catch (e) {
                            this.logger.debug("Failed to parse route!", {
                                val: r,
                                err: e
                            })
                        }
                    }
                    return this.logger.debug("Done building legacy routes!", {
                        count: t.length
                    }), t
                }, t
            }(i.Component);
        n.d(t, "a", function() {
            return s
        }), n.d(t, !1, function() {
            return "legacy_routes"
        }), n.d(t, "b", function() {
            return d
        })
    },
    PLRK: function(e, t, n) {
        "use strict";
        var a = n("TToO"),
            r = n("U7vG"),
            i = n("6sO2"),
            o = function(e, t) {
                return Object(i.d)("{viewerCount,number} viewers on {channel}", {
                    viewerCount: e,
                    channel: t
                }, "DirectoryGamePage")
            },
            l = Object(i.d)("Untitled Broadcast", "StreamThumbnail"),
            s = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    return r.createElement("div", null, Object(i.d)("View All", "DirectoryInternationalSection"))
                }, t
            }(r.Component);
        n.d(t, !1, function() {
            return o
        }), n.d(t, "a", function() {
            return l
        }), n.d(t, !1, function() {
            return s
        })
    },
    PO03: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "DirectoryGame_CommunityPermissions"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "name"
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
                            value: "community"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "name"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "name"
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
                                    value: "self"
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
                                            value: "permissions"
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
                                                    value: "banning"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "timingOut"
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
                    }, {
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
            body: "query DirectoryGame_CommunityPermissions($name: String!) {\ncommunity(name: $name) {\nid\nself {\npermissions {\nbanning\ntimingOut\n}\n}\n}\ncurrentUser {\nid\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    QG7y: function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return o
        }), n.d(t, "d", function() {
            return l
        }), n.d(t, "a", function() {
            return s
        }), n.d(t, "f", function() {
            return d
        }), n.d(t, "e", function() {
            return c
        }), n.d(t, "g", function() {
            return u
        }), t.i = function(e) {
            u.emit(d, e)
        }, t.h = function(e) {
            u.emit(c, e)
        };
        var a = n("BzvE"),
            r = (n.n(a), n("6sO2")),
            i = {
                directory: {
                    banner: "dfp-directory-banner",
                    rectangle: "dfp-directory-rectangle"
                },
                channel250: "google_companion_300x250",
                anonFront: {
                    rect: "Twitch_FPMedRect_holder",
                    banner: "Twitch_FPopaBanner_holder",
                    takeover: "Twitch_FPTakeoverSkinv2_holder",
                    bottom: "Twitch_FP970Bottom_holder",
                    sizzle: "sizzle_strip"
                },
                front: {
                    leaderboard: "hpto_logged_in_leaderboard",
                    rightTop: "hpto_logged_in_rcol_top",
                    rightBottom: "hpto_logged_in_rcol_bottom"
                }
            },
            o = {
                directory: {
                    banner: [
                        [970, 66],
                        [970, 250],
                        [728, 90]
                    ],
                    rectangle: [
                        [300, 250]
                    ]
                },
                channel250: [300, 250],
                anonFront: {
                    rect: [
                        [300, 250]
                    ],
                    banner: [
                        [970, 418],
                        [970, 67],
                        [970, 250],
                        [970, 150],
                        [980, 250]
                    ],
                    takeover: [
                        [1, 1]
                    ],
                    bottom: [
                        [970, 66],
                        [728, 90]
                    ],
                    sizzle: [
                        [980, 250]
                    ]
                },
                front: {
                    leaderboard: [
                        [970, 66],
                        [728, 90]
                    ],
                    rightTop: [
                        [300, 250]
                    ],
                    rightBottom: [
                        [300, 600]
                    ]
                }
            },
            l = {
                directory: "/" + r.a.dfpNetworkCode + "/twitch/directory",
                channel: "/" + r.a.dfpNetworkCode + "/twitch/channels",
                frontpage: "/" + r.a.dfpNetworkCode + "/twitch/homepage",
                sizzle: "/" + r.a.dfpNetworkCode + "/twitch/sizzle_strip"
            },
            s = {
                games: "games",
                channel: "channel",
                frontpage: "homepage"
            },
            d = "ads.slot-render-end",
            c = "ads.slot-ready",
            u = new a.EventEmitter
    },
    R0TX: function(e, t) {},
    SN3I: function(e, t, n) {
        "use strict";
        var a = n("U7vG"),
            r = n("6sO2"),
            i = n("Odds"),
            o = function(e) {
                var t = Object(r.d)("Channels in English", "DirectoryInternationalSectionHeader"),
                    n = {
                        ar: Object(r.d)("Channels in Arabic", "DirectoryInternationalSectionHeader"),
                        asl: Object(r.d)("Channels in American Sign Language", "DirectoryInternationalSectionHeader"),
                        bg: Object(r.d)("Channels in Bulgarian", "DirectoryInternationalSectionHeader"),
                        cs: Object(r.d)("Channels in Czech", "DirectoryInternationalSectionHeader"),
                        da: Object(r.d)("Channels in Danish", "DirectoryInternationalSectionHeader"),
                        de: Object(r.d)("Channels in German", "DirectoryInternationalSectionHeader"),
                        el: Object(r.d)("Channels in Greek", "DirectoryInternationalSectionHeader"),
                        en: t,
                        es: Object(r.d)("Channels in Spanish", "DirectoryInternationalSectionHeader"),
                        fi: Object(r.d)("Channels in Finnish", "DirectoryInternationalSectionHeader"),
                        fr: Object(r.d)("Channels in French", "DirectoryInternationalSectionHeader"),
                        hu: Object(r.d)("Channels in Hungarian", "DirectoryInternationalSectionHeader"),
                        it: Object(r.d)("Channels in Italian", "DirectoryInternationalSectionHeader"),
                        ja: Object(r.d)("Channels in Japanese", "DirectoryInternationalSectionHeader"),
                        ko: Object(r.d)("Channels in Korean", "DirectoryInternationalSectionHeader"),
                        nl: Object(r.d)("Channels in Dutch", "DirectoryInternationalSectionHeader"),
                        no: Object(r.d)("Channels in Norwegian", "DirectoryInternationalSectionHeader"),
                        pl: Object(r.d)("Channels in Polish", "DirectoryInternationalSectionHeader"),
                        pt: Object(r.d)("Channels in Portuguese", "DirectoryInternationalSectionHeader"),
                        ru: Object(r.d)("Channels in Russian", "DirectoryInternationalSectionHeader"),
                        sk: Object(r.d)("Channels in Slovak", "DirectoryInternationalSectionHeader"),
                        sv: Object(r.d)("Channels in Swedish", "DirectoryInternationalSectionHeader"),
                        th: Object(r.d)("Channels in Thai", "DirectoryInternationalSectionHeader"),
                        tr: Object(r.d)("Channels in Turkish", "DirectoryInternationalSectionHeader"),
                        vi: Object(r.d)("Channels in Vietnamese", "DirectoryInternationalSectionHeader"),
                        zh: Object(r.d)("Channels in Chinese", "DirectoryInternationalSectionHeader")
                    };
                return a.createElement(i.U, {
                    margin: {
                        bottom: 2
                    }
                }, a.createElement(i._22, {
                    type: i._27.H4,
                    color: i.F.Alt2,
                    fontSize: i.L.Size5,
                    transform: i._26.Uppercase,
                    "data-a-target": "international-section-header"
                }, n[e.languageCode] || t))
            };
        n.d(t, "a", function() {
            return o
        })
    },
    UAN1: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), n.d(t, "b", function() {
            return r
        }), n.d(t, "c", function() {
            return i
        }), t.d = function(e) {
            return {
                type: a,
                browseType: e
            }
        }, t.e = function(e) {
            return {
                type: r,
                lastBrowsePath: e
            }
        }, t.f = function(e) {
            return {
                type: i,
                sortBy: e
            }
        };
        var a = "browse.BROWSE_TYPE_CHANGED",
            r = "browse.LAST_BROWSE_PATH",
            i = "browse.SORT_BY_CHANGED"
    },
    V9YC: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        }), t.b = function(e) {
            return {
                type: a,
                languagePreferences: e
            }
        };
        var a = "core.user-preferences.LANGUAGE_PREFERENCES_UPDATED"
    },
    Y6wo: function(e, t, n) {
        "use strict";

        function a() {
            var e = i.k.get(l, {});
            return r.__assign({
                sortBy: o.a.Popularity
            }, e)
        }
        t.a = a, t.b = function(e, t) {
            var n = a();
            n[e] = t, i.k.set(l, n)
        };
        var r = n("TToO"),
            i = n("6sO2"),
            o = n("r4vp"),
            l = "browseSettings"
    },
    c8Oh: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e.userPreferences.languagePreferences
        };
        var a = n("TToO"),
            r = n("6sO2"),
            i = n("V9YC"),
            o = n("iJpA");
        r.n.store.registerReducer("userPreferences", function(e, t) {
            switch (void 0 === e && (e = {
                languagePreferences: Object(o.b)()
            }), t.type) {
                case i.a:
                    return a.__assign({}, e, {
                        languagePreferences: t.languagePreferences
                    });
                default:
                    return e
            }
        })
    },
    czpb: function(e, t, n) {
        "use strict";
        var a = n("6sO2"),
            r = n("Ejve"),
            i = n("MSvX");
        t.a = function(e) {
            return a.b.get(i.a, !1) || a.a.buildType !== r.a.Production ? "string" == typeof e ? e : e.pathname || "" : "string" == typeof e ? o + e : o + e.pathname
        }, t.b = function() {
            return !a.b.get(i.a, !1) && a.a.buildType === r.a.Production
        };
        var o = "https://www.twitch.tv"
    },
    dzKs: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e.Channels = "channels", e.ChannelsPlaystation = "channels-playstation", e.ChannelsXbox = "channels-xbox", e.Communities = "communities", e.CreativeCommunities = "creative-communities", e.Games = "games", e.GamesAndCommunities = "games-and-communities"
        }(a || (a = {}))
    },
    iJpA: function(e, t, n) {
        "use strict";

        function a() {
            return i.k.get(s, []).filter(function(e) {
                return o.a.has(e)
            })
        }
        t.c = function(e, t) {
            var n = this;
            return function(o) {
                return r.__awaiter(n, void 0, void 0, function() {
                    var n, d;
                    return r.__generator(this, function(r) {
                        return n = new Set(a()), t ? n.add(e) : n.delete(e), d = Array.from(n), i.k.set(s, d), o(Object(l.b)(d)), [2]
                    })
                })
            }
        }, t.a = function() {
            var e = this;
            return function(t) {
                return r.__awaiter(e, void 0, void 0, function() {
                    return r.__generator(this, function(e) {
                        return i.k.set(s, []), t(Object(l.b)([])), [2]
                    })
                })
            }
        }, t.b = a;
        var r = n("TToO"),
            i = n("6sO2"),
            o = n("D9fv"),
            l = n("V9YC"),
            s = "languageDirectoryFilters"
    },
    "j7/Y": function(e, t, n) {
        "use strict";

        function a(e) {
            return function(t) {
                var n = function(n) {
                    function a(t) {
                        var a = n.call(this, t) || this;
                        return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                            if (!(a.tracked || e.skip && e.skip(a.props))) {
                                a.tracked = !0, s.n.adBlockSentinel.pageTransition();
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = r.__assign({}, e.properties));
                                var n = r.__assign({}, a.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var i = a.referenceTracking,
                                    o = i.content,
                                    l = i.medium,
                                    d = i.content_index;
                                s.n.tracking.trackPageview(r.__assign({
                                    content: o,
                                    medium: l,
                                    content_index: d,
                                    location: e.location
                                }, t))
                            }
                        }, s.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                    }
                    return r.__extends(a, n), a.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, a.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, a.prototype.render = function() {
                        return o.createElement(t, r.__assign({}, this.props))
                    }, a.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? i.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var a = "",
                                r = i.stringify(t);
                            r.length > 0 && (a = "?" + r), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: a
                            })
                        }
                        return n
                    }, a
                }(o.Component);
                return Object(l.f)(n)
            }
        }
        var r = n("TToO"),
            i = n("OAwv"),
            o = n("U7vG"),
            l = n("F8kA"),
            s = n("6sO2");
        n.d(t, "a", function() {
            return a
        })
    },
    lYCI: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "BrowsePage_AllDirectories"
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
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "directoryFilters"
                        }
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "DirectoryFilter"
                                }
                            }
                        }
                    },
                    defaultValue: null
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "directorySort"
                        }
                    },
                    type: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "DirectorySort"
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
                            value: "directories"
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
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "filterBySet"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "directoryFilters"
                                }
                            }
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "sortBy"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "directorySort"
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
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "avatarURL"
                                                },
                                                arguments: [{
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "width"
                                                    },
                                                    value: {
                                                        kind: "IntValue",
                                                        value: "285"
                                                    }
                                                }, {
                                                    kind: "Argument",
                                                    name: {
                                                        kind: "Name",
                                                        value: "height"
                                                    },
                                                    value: {
                                                        kind: "IntValue",
                                                        value: "380"
                                                    }
                                                }],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "viewersCount"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "directoryType"
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
            }],
            loc: {
                start: 0,
                end: 364
            }
        };
        n.loc.source = {
            body: "query BrowsePage_AllDirectories($limit: Int $cursor: Cursor $directoryFilters: [DirectoryFilter!] $directorySort: DirectorySort) {\ndirectories(first: $limit after: $cursor filterBySet: $directoryFilters sortBy: $directorySort) {\nedges {\ncursor\nnode {\nid\ndisplayName\nname\navatarURL(width: 285 height: 380)\nviewersCount\ndirectoryType\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    mmuw: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e.browse.sortBy
        }, t.b = function(e) {
            return e.browse.browseType
        }, t.c = function(e) {
            return e.browse.lastBrowsePath
        };
        var a = n("TToO"),
            r = n("6sO2"),
            i = n("r4vp"),
            o = n("Y6wo"),
            l = n("UAN1"),
            s = n("dzKs");
        r.n.store.registerReducer("browse", function(e, t) {
            switch (void 0 === e && (e = function() {
                var e = Object(o.a)();
                return a.__assign({
                    browseType: s.a.GamesAndCommunities,
                    lastBrowsePath: "/directory",
                    sortBy: i.a.Popularity
                }, e)
            }()), t.type) {
                case l.a:
                    return a.__assign({}, e, {
                        browseType: t.browseType
                    });
                case l.b:
                    return a.__assign({}, e, {
                        lastBrowsePath: t.lastBrowsePath
                    });
                case l.c:
                    return a.__assign({}, e, {
                        sortBy: t.sortBy
                    });
                default:
                    return e
            }
        })
    },
    nC3l: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CommunityStreamBan_BanUser"
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
                                value: "BanUserFromCommunityInput"
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
                            value: "banUserFromCommunity"
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
                                    value: "error"
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
                end: 121
            }
        };
        n.loc.source = {
            body: "mutation CommunityStreamBan_BanUser($input: BanUserFromCommunityInput!) {\nbanUserFromCommunity(input: $input) {\nerror\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    npyu: function(e, t) {},
    oHn4: function(e, t) {},
    peXu: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n) {
            return void 0 === n && (n = 1), t && e ? Math.floor(e / t) * n : -1
        }
    },
    plcU: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "CommunityStreamTimeout_TimeoutUser"
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
                                value: "TimeoutUserFromCommunityInput"
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
                            value: "timeoutUserFromCommunity"
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
                                    value: "community"
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
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: null
                                    }]
                                }
                            }, {
                                kind: "Field",
                                alias: null,
                                name: {
                                    kind: "Name",
                                    value: "error"
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
                end: 159
            }
        };
        n.loc.source = {
            body: "mutation CommunityStreamTimeout_TimeoutUser($input: TimeoutUserFromCommunityInput!) {\ntimeoutUserFromCommunity(input: $input) {\ncommunity {\nid\nname\n}\nerror\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    r4vp: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e.Popularity = "popularity", e.Relevancy = "relevancy"
        }(a || (a = {}))
    },
    sJt0: function(e, t) {},
    v5ho: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a;
        ! function(e) {
            e.Games = "GAMES", e.Communities = "COMMUNITIES", e.Creative = "CREATIVE"
        }(a || (a = {}))
    },
    vQzq: function(e, t) {},
    w9tK: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var a = {
            BrowseCommunities: "browse.communities",
            BrowseCreative: "browse.creative",
            BrowseGamesAndCommunities: "browse.games-and-communities",
            ChannelIndex: "channel.index.index",
            ChannelDashboardAchievements: "channel.dashboard.achievements",
            ChannelDashboardExtensions: "channel.dashboard.extensions",
            ChannelDashboardModeration: "channel.dashboard.moderation",
            ChannelDashboardStreamSummary: "channel.dashboard.stream-summary",
            ChannelClips: "channel.clips",
            ChannelClipsManager: "videoManager.clips.channel",
            ChannelCollections: "channel.collections",
            ChannelEvents: "channel.events",
            ChatPopout: "chat",
            DevOnly: "dev",
            DirectoryCommunityByLanguage: "directory.community.language",
            DirectoryCommunityIndex: "directory.community.index",
            DirectoryCommunityDetails: "directory.community.details",
            DirectoryGames: "directory.games",
            DirectoryPopular: "directory.popular",
            DirectoryPopularByLanguage: "directory.popular.language",
            DirectoryGameIndex: "directory.game.index",
            DirectoryGameClips: "directory.game.clips",
            DirectoryGameDetails: "directory.game.details",
            DirectoryGameVideos: "directory.game.videos",
            DirectoryFollowingIndex: "directory.following.index",
            DirectoryFollowingGames: "directory.following.games",
            DirectoryFollowingVideos: "directory.following.videos.video-type",
            DirectoryFollowingHosts: "directory.following.hosts",
            DirectoryFollowingLiveChannels: "directory.following.channels",
            DirectoryFollowingCommunities: "directory.following.communities",
            EmailVerification: "emailVerification",
            EventDetails: "event.details",
            ForYou: "for-you",
            Index: "index",
            MyClipsManager: "videoManager.clips",
            NotificationSettingsPage: "settings.notificationSettings",
            OnboardingIndex: "onboarding.index",
            ReportUserPage: "reportUser.page",
            StoreMerchPage: "store.merch",
            SubsLandingPage: "subs.landing",
            SubsBroadcasterPage: "subs.broadcaster",
            TeamsDashboardBasicInfo: "teams.dashboard.basic-info",
            TeamsDashboardCustomize: "teams.dashboard.customize",
            TeamsDashboardFeaturedChannels: "teams.dashboard.featured-channels",
            TeamsDashboardMembers: "teams.dashboard.members",
            TeamsDashboardStats: "teams.dashboard.stats",
            TeamsDashboardRevenue: "teams.dashboard.revenue",
            VideosPage: "videos",
            VideoWatchPage: "video",
            VideoManagerPage: "videoManager.page",
            VideoManagerEditPropertiesPage: "videoManager.edit",
            VideoManagerUploadPage: "videoManager.upload",
            VideoManagerUploadListPage: "videoManager.upload-list"
        }
    },
    yFXh: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "PopularPage_StreamsByLanguage"
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
                            value: "languages"
                        }
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "Language"
                                }
                            }
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
                            value: "streams"
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
                        }, {
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "languages"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "languages"
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
                                                    value: "title"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "viewersCount"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "previewImageURL"
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
                                                directives: [],
                                                selectionSet: null
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "broadcaster"
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
                                                            value: "displayName"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "game"
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
                                                            value: "boxArtURL"
                                                        },
                                                        arguments: [{
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "width"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "40"
                                                            }
                                                        }, {
                                                            kind: "Argument",
                                                            name: {
                                                                kind: "Name",
                                                                value: "height"
                                                            },
                                                            value: {
                                                                kind: "IntValue",
                                                                value: "56"
                                                            }
                                                        }],
                                                        directives: [],
                                                        selectionSet: null
                                                    }, {
                                                        kind: "Field",
                                                        alias: null,
                                                        name: {
                                                            kind: "Name",
                                                            value: "name"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: null
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                alias: null,
                                                name: {
                                                    kind: "Name",
                                                    value: "type"
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
            }],
            loc: {
                start: 0,
                end: 360
            }
        };
        n.loc.source = {
            body: "query PopularPage_StreamsByLanguage($limit: Int $languages: [Language!] $cursor: Cursor) {\nstreams(first: $limit after: $cursor languages: $languages) {\nedges {\ncursor\nnode {\nid\ntitle\nviewersCount\npreviewImageURL(width: 320 height: 180)\nbroadcaster {\nid\nlogin\ndisplayName\n}\ngame {\nid\nboxArtURL(width: 40 height: 56)\nname\n}\ntype\n}\n}\npageInfo {\nhasNextPage\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    }
});
//# sourceMappingURL=pages.browse-1c8ab075369cd88a843b022155191a88.js.map