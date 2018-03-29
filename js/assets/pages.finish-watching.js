webpackJsonp([55], {
    "6yQB": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("2KeS"),
            r = n("iJpA"),
            o = n("c8Oh"),
            l = n("TToO"),
            d = n("GiK3"),
            s = n("6sO2"),
            c = n("zCIC"),
            u = n("+Znq"),
            p = n("D9fv"),
            m = n("CSlQ"),
            v = n("Odds"),
            g = (n("vQzq"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleLanguageChange = function(e) {
                        var n = e.currentTarget,
                            i = n.parentElement && n.parentElement.getAttribute("data-language-code");
                        i && t.props.updateLanguagePreferences(i, n.checked)
                    }, t.renderLanguageOption = function(e) {
                        return d.createElement(v._6, {
                            padding: {
                                x: 1,
                                y: .5
                            },
                            key: e.code
                        }, d.createElement(v.I, {
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
                    return d.createElement(v._6, {
                        className: "language-select-menu"
                    }, d.createElement(u.a, null, d.createElement(v.u, {
                        "data-test-selector": "language-dropdown-button",
                        "data-a-target": "language-filter-dropdown",
                        dropdown: !0,
                        type: v.A.Hollow
                    }, d.createElement(v._6, {
                        display: v.P.Flex
                    }, Object(s.d)("Language", "LanguageSelectMenu"), d.createElement(v._6, {
                        margin: {
                            left: .5
                        }
                    }, 0 !== e && d.createElement(v._10, {
                        type: v._11.Brand,
                        label: e.toString()
                    })))), d.createElement(v.p, {
                        direction: v.q.BottomLeft,
                        noTail: !0,
                        "data-a-target": "language-filter-balloon"
                    }, d.createElement(c.b, {
                        className: "language-select-menu__balloon"
                    }, d.createElement(v._6, {
                        padding: .5
                    }, Object(p.b)().map(this.renderLanguageOption))), d.createElement(v._29, {
                        background: v.m.Alt,
                        borderTop: !0,
                        className: "language-select-menu__footer"
                    }, d.createElement(v.u, {
                        type: v.A.Text,
                        onClick: this.props.clearLanguagePreferences,
                        "data-a-target": "language-clear-all"
                    }, Object(s.d)("Clear all", "LanguageSelectMenu"))))))
                }, t = l.__decorate([Object(m.d)("LanguageSelectMenu")], t)
            }(d.Component));
        var h = Object(i.b)(function(e) {
            return {
                languagePreferences: Object(o.a)(e)
            }
        }, function(e) {
            return Object(a.b)({
                updateLanguagePreferences: r.c,
                clearLanguagePreferences: r.a
            }, e)
        })(g);
        n.d(t, "a", function() {
            return h
        })
    },
    "7FW4": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = i.createElement(o._6, {
                padding: 1,
                fullHeight: !0,
                flexDirection: o.R.Column,
                justifyContent: o._5.Center,
                display: o.P.Flex
            }, i.createElement(o.O, {
                color: o.J.Link,
                fontSize: o.T.Size4,
                noWrap: !0
            }, Object(r.d)("View All", "Following--ViewAllButton")), i.createElement(o.O, {
                color: o.J.Alt2,
                fontSize: o.T.Size4,
                noWrap: !0
            }, e.subHeader));
            e.linkTo && (t = i.createElement(a.a, {
                to: e.linkTo,
                className: "following__view-all__link"
            }, t));
            return i.createElement("div", {
                className: "following__view-all",
                onClick: e.onClickViewAll,
                "data-test-selector": d
            }, i.createElement(o._6, null, i.createElement(o.j, {
                ratio: e.aspectRatio
            }, i.createElement(o._29, {
                background: o.m.Alt2,
                fullHeight: !0
            }, t))))
        };
        var i = n("GiK3"),
            a = (n.n(i), n("F8kA")),
            r = n("6sO2"),
            o = n("Odds"),
            l = n("oHn4"),
            d = (n.n(l), "view-all-button-selector")
    },
    "81qH": function(e, t, n) {
        "use strict";
        var i = n("aBed");
        n.d(t, "VideoPreviewCard", function() {
            return i.a
        });
        var a = n("a4C9"),
            r = (n.n(a), n("XYqD"));
        n.d(t, "VideoPreviewCardPlaceholder", function() {
            return r.a
        })
    },
    "9MWs": function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ResumeWatchingVideoTower_CurrentUser"
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
                                    value: "login"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "viewedVideos"
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
                                                    value: "node"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "FragmentSpread",
                                                        name: {
                                                            kind: "Name",
                                                            value: "PreviewCardVideo"
                                                        },
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
                end: 243
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery ResumeWatchingVideoTower_CurrentUser ($limit: Int) {\ncurrentUser {\nid\nlogin\nviewedVideos (first: $limit) {\nedges {\nnode {\n...PreviewCardVideo\n}\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(n("qjMx").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = i
    },
    C2pI: function(e, t) {},
    D9fv: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        }), t.b = function() {
            var e = i.o.intl.getLanguageCode(),
                t = function(t) {
                    return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                };
            return a.slice().sort(function(e, n) {
                var i = t(e),
                    a = t(n);
                return i !== a ? i - a : i + ":" + e.label < a + ":" + n.label ? -1 : 1
            }).concat(r(!0))
        };
        var i = n("6sO2"),
            a = [{
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
            }];

        function r(e) {
            return void 0 === e && (e = !1), [{
                code: "asl",
                label: "American Sign Language"
            }, {
                code: "other",
                label: e ? Object(i.d)("Other", "broadcaster-languages") : "Other"
            }]
        }
        var o = new Set(a.concat(r()).map(function(e) {
            return e.code
        }))
    },
    ISok: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("WxKK"),
            o = n("CSlQ"),
            l = n("81qH"),
            d = n("XYqD"),
            s = n("Odds"),
            c = function(e) {
                var t = [],
                    n = null;
                if (null === e.videos)
                    for (var o = void 0 === e.placeholderCount ? 20 : e.placeholderCount, c = 0; c < o; c++) t.push(a.createElement(d.a, {
                        key: c
                    }));
                else e.viewAllButtonProps && (n = a.createElement(r.a, i.__assign({}, e.viewAllButtonProps))), t = e.videos.map(function(t, n) {
                    return a.createElement(s._6, {
                        "data-a-target": "video-tower-card-" + n,
                        key: "video-" + n,
                        padding: {
                            bottom: .5
                        }
                    }, a.createElement(l.VideoPreviewCard, {
                        hideGameArt: e.hideGameArt,
                        tracking: {
                            content: e.trackingContent,
                            content_index: n,
                            medium: e.trackingMedium
                        },
                        video: t
                    }))
                });
                return a.createElement(s._49, {
                    gutterSize: s._51.Small,
                    childWidth: e.videoCardSize || s._50.Large,
                    placeholderItems: 20
                }, t, n)
            },
            u = Object(o.d)("VideoTower", {
                autoReportInteractive: !0
            })(c);
        n.d(t, !1, function() {
            return 20
        }), n.d(t, !1, function() {
            return c
        }), n.d(t, "a", function() {
            return u
        })
    },
    MZUk: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("GiK3"),
            r = n("6sO2"),
            o = n("7vx8"),
            l = n("vH/s"),
            d = n("peXu"),
            s = n("CSlQ"),
            c = n("VDV3"),
            u = n("Odds"),
            p = n("NF3U"),
            m = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.componentDidUpdate = function() {
                    this.props.data.loading || this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.data.loading || this.props.data.error || !this.props.data.currentUser || !this.props.data.currentUser.recommendations || 0 === this.props.data.currentUser.recommendations.videos.edges.length) return null;
                    var e = a.createElement(u._6, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(u.O, {
                            type: u._43.H4,
                            color: u.J.Alt2,
                            fontSize: u.T.Size5,
                            transform: u._42.Uppercase
                        }, Object(r.d)("Based on your viewing history", "SuggestedVideos"))),
                        t = [];
                    if (this.props.data.currentUser.recommendations.videos && (t = this.props.data.currentUser.recommendations.videos.edges.map(function(e) {
                            return e.node
                        })), this.props.directoryWidth > 0) {
                        var n = Object(d.a)(this.props.directoryWidth, 240, 2);
                        t = t.slice(0, n)
                    }
                    return a.createElement("div", null, e, a.createElement(c.b, {
                        trackingMedium: l.PageviewMedium.Following,
                        trackingContent: l.PageviewContent.SuggestedVideos,
                        videoCardSize: u._50.Medium,
                        videos: t
                    }))
                }, t = i.__decorate([Object(o.a)(p, {
                    options: {
                        fetchPolicy: "network-only",
                        variables: {
                            limit: 30
                        }
                    }
                }), Object(s.d)("SuggestedVideos")], t)
            }(a.Component);
        n.d(t, "a", function() {
            return m
        })
    },
    NF3U: function(e, t, n) {
        var i = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "SuggestedVideos_CurrentUser"
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
                                    value: "recommendations"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "videos"
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
                                                            value: "node"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "FragmentSpread",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "PreviewCardVideo"
                                                                },
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
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 240
            }
        };
        i.loc.source = {
            body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nquery SuggestedVideos_CurrentUser($limit: Int) {\ncurrentUser {\nid\nrecommendations {\nvideos(first: $limit) {\nedges {\nnode {\n...PreviewCardVideo\n}\n}\n}\n}\n}\n}',
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var a = {};
        i.definitions = i.definitions.concat(n("qjMx").definitions.filter(function(e) {
            if ("FragmentDefinition" !== e.kind) return !0;
            var t = e.name.value;
            return !a[t] && (a[t] = !0, !0)
        })), e.exports = i
    },
    V9YC: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), t.b = function(e) {
            return {
                type: i,
                languagePreferences: e
            }
        };
        var i = "core.user-preferences.LANGUAGE_PREFERENCES_UPDATED"
    },
    VDV3: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("HW6M"),
            r = n("GiK3"),
            o = n("6sO2"),
            l = n("6yQB"),
            d = n("+Znq"),
            s = n("6WAQ"),
            c = n("JpYe"),
            u = n("3yQz"),
            p = n("Odds"),
            m = (n("C2pI"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.sortChangeHandler = function(e) {
                        n.props.onVideoSortChange(e.target.value)
                    }, n.renderLanguageSelector = function() {
                        return n.props.hideLanguageSelector ? null : r.createElement(p._6, {
                            display: p.P.InlineFlex,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(l.a, null))
                    }, n.typeChangeHandler = function(e) {
                        if (n.balloonWrapperRef.toggleBalloon(!1), n.props.onVideoFilterChange) {
                            var t = e.currentTarget.getAttribute("data-filter-type");
                            t && n.props.onVideoFilterChange(t)
                        }
                    }, n.saveBalloonWrapperRef = function(e) {
                        n.balloonWrapperRef = e
                    }, n.state = {
                        isPremiereExperimentActive: !1
                    }, n
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, o.o.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW")];
                                case 1:
                                    return e = t.sent(), this.setState({
                                        isPremiereExperimentActive: "yes" === e
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    var e, t = Object(o.d)("All Videos", "VideoFilter"),
                        n = Object(o.d)("Past Premieres", "VideoFilter"),
                        i = Object(o.d)("Past Broadcasts", "VideoFilter"),
                        l = Object(o.d)("Highlights", "VideoFilter"),
                        m = Object(o.d)("Uploads", "VideoFilter"),
                        v = this.props.selectedSort && Object(c.f)(this.props.selectedSort) || u.a;
                    switch (this.props.broadcastType) {
                        case s.a.PastPremiere:
                            e = n;
                            break;
                        case s.a.Archive:
                            e = i;
                            break;
                        case s.a.Highlight:
                            e = l;
                            break;
                        case s.a.Upload:
                            e = m;
                            break;
                        default:
                            e = t
                    }
                    var g = {
                            "video-filters": !0,
                            "video-filters--active": !0
                        },
                        h = {
                            "video-filters": !0
                        },
                        f = null;
                    return this.state.isPremiereExperimentActive && (f = r.createElement(p._4, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": s.a.PastPremiere,
                        "data-a-target": "video-type-filter-past-premieres"
                    }, r.createElement(p._6, {
                        className: a(this.props.broadcastType === s.a.PastPremiere ? g : h),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-past-premiere"
                    }, n))), r.createElement(p._6, {
                        margin: {
                            bottom: 2
                        },
                        display: p.P.Flex,
                        justifyContent: p._5.Between
                    }, r.createElement("div", null, this.renderLanguageSelector(), r.createElement(p._6, {
                        display: p.P.InlineFlex
                    }, r.createElement(d.a, {
                        ref: this.saveBalloonWrapperRef
                    }, r.createElement(p.u, {
                        type: p.A.Hollow,
                        "data-test-selector": "filter-dropdown-button",
                        "data-a-target": "video-type-filter-dropdown",
                        dropdown: !0
                    }, e), r.createElement(p.p, {
                        direction: p.q.Bottom,
                        "data-a-target": "video-type-filter-balloon",
                        offsetX: "0",
                        noTail: !0
                    }, r.createElement(p._6, {
                        className: "layout",
                        padding: {
                            y: 1
                        }
                    }, r.createElement(p._4, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": "all",
                        "data-a-target": "video-type-filter-all"
                    }, r.createElement(p._6, {
                        className: a(this.props.broadcastType ? h : g),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-all"
                    }, t)), f, r.createElement(p._4, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": s.a.Archive,
                        "data-a-target": "video-type-filter-past-broadcasts"
                    }, r.createElement(p._6, {
                        className: a(this.props.broadcastType === s.a.Archive ? g : h),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-archive"
                    }, i)), r.createElement(p._4, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": s.a.Highlight,
                        "data-a-target": "video-type-filter-highlights"
                    }, r.createElement(p._6, {
                        className: a(this.props.broadcastType === s.a.Highlight ? g : h),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-highlight"
                    }, l)), r.createElement(p._4, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": s.a.Upload,
                        "data-a-target": "video-type-filter-uploads"
                    }, r.createElement(p._6, {
                        className: a(this.props.broadcastType === s.a.Upload ? g : h),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-upload"
                    }, m))))))), r.createElement("div", null, r.createElement(p._25, {
                        name: "sort",
                        onChange: this.sortChangeHandler,
                        value: v,
                        "data-a-target": "video-sort-select"
                    }, r.createElement("option", {
                        "data-test-selector": "sort-option-newest",
                        value: u.a,
                        "data-a-target": "video-sort-newest"
                    }, Object(o.d)("Newest", "VideoFilter")), r.createElement("option", {
                        "data-test-selector": "sort-option-popular",
                        value: u.b,
                        "data-a-target": "video-sort-popular"
                    }, Object(o.d)("Popular", "VideoFilter")))))
                }, t
            }(r.Component)),
            v = n("ISok");
        n.d(t, "a", function() {
            return m
        }), n.d(t, "b", function() {
            return v.a
        }), n.d(t, !1, function() {})
    },
    WxKK: function(e, t, n) {
        "use strict";
        var i = n("7FW4");
        n.d(t, "a", function() {
            return i.a
        })
    },
    XYqD: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = n("GiK3"),
            a = (n.n(i), n("Odds")),
            r = function() {
                return i.createElement(a.B, null, i.createElement(a.j, {
                    ratio: a.k.Aspect16x9
                }, i.createElement(a._12, null)), i.createElement(a.C, null, i.createElement(a._6, {
                    display: a.P.Flex,
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(a._6, {
                    display: a.P.InlineBlock,
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, i.createElement(a._12, {
                    width: 40,
                    height: 56
                })), i.createElement(a._6, {
                    display: a.P.InlineBlock,
                    margin: {
                        top: 1
                    }
                }, i.createElement(a.O, null, i.createElement(a._12, {
                    width: 150
                })), i.createElement(a.O, {
                    fontSize: a.T.Size7
                }, i.createElement(a._12, {
                    width: 100
                }))))))
            }
    },
    a0ve: function(e, t) {},
    a4C9: function(e, t) {},
    aBed: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return g
        });
        var i = n("TToO"),
            a = n("HW6M"),
            r = (n.n(a), n("OAwv")),
            o = (n.n(r), n("GiK3")),
            l = (n.n(o), n("F8kA")),
            d = n("6sO2"),
            s = n("SZoP"),
            c = n("mi6k"),
            u = n("CSlQ"),
            p = n("Odds"),
            m = n("a0ve"),
            v = (n.n(m), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hovered: !1,
                        didAnimatedPreviewLoad: !1,
                        didAnimatedPreviewFailToLoad: !1
                    }, t.onClickHandler = function() {
                        t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                    }, t.onMouseEnterHandler = function() {
                        t.setState({
                            hovered: !0
                        })
                    }, t.onMouseLeaveHandler = function() {
                        t.setState({
                            hovered: !1
                        })
                    }, t.onPreviewImageLoad = function(e) {
                        t.props.latencyTracking.reportInteractive(), e.currentTarget.src === t.props.video.animatedPreviewURL && t.setState({
                            didAnimatedPreviewLoad: !0
                        })
                    }, t.onPreviewImageLoadError = function(e) {
                        e.currentTarget.src === t.props.video.animatedPreviewURL && t.setState({
                            didAnimatedPreviewFailToLoad: !0
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.overrideImageInteractivity && this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = null,
                        t = this.getVideoPreviousWatchPercentage();
                    return null !== t && (e = o.createElement(p._6, {
                        position: p._13.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, o.createElement(p._16, {
                        size: p._17.Small,
                        value: t,
                        mask: !0
                    }))), o.createElement("div", i.__assign({
                        onClick: this.onClickHandler,
                        onMouseEnter: this.onMouseEnterHandler,
                        onMouseLeave: this.onMouseLeaveHandler
                    }, Object(p._55)(this.props)), o.createElement(p.B, null, o.createElement(p._6, {
                        fullWidth: !0
                    }, o.createElement(p.j, {
                        overflow: !0
                    }, o.createElement("div", null, o.createElement(p._29, {
                        display: p.P.InlineFlex,
                        position: p._13.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: .5,
                        zIndex: p._54.Default,
                        fontSize: p.T.Size6,
                        background: p.m.Overlay,
                        color: p.J.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, o.createElement(p._28, {
                        "data-test-selector": "video-view-count",
                        icon: p._20.GlyphViews,
                        label: Object(d.d)("views", "VideoPreviewCard"),
                        value: Object(d.f)(this.props.video.viewCount)
                    })), o.createElement(p._29, {
                        display: p.P.InlineFlex,
                        position: p._13.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: .5,
                        zIndex: p._54.Default,
                        fontSize: p.T.Size6,
                        background: p.m.Overlay,
                        color: p.J.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, o.createElement(p._28, {
                        "data-test-selector": "video-length",
                        icon: p._20.GlyphLength,
                        label: Object(d.d)("length", "VideoPreviewCard"),
                        value: Object(c.a)(this.props.video.lengthSeconds)
                    })), this.videoPreviewImage(), e))), o.createElement(p.C, null, o.createElement(p._6, {
                        display: p.P.Flex,
                        flexDirection: p.R.Row,
                        flexWrap: p.S.NoWrap,
                        padding: {
                            top: .5
                        }
                    }, this.props.hideGameArt ? null : this.gameBoxArt(), this.videoMetaData()))))
                }, t.prototype.generateSearchString = function() {
                    var e = {};
                    this.props.collectionID && (e.collection = this.props.collectionID);
                    var t = r.stringify(e);
                    return t ? "?" + t : ""
                }, t.prototype.videoPreviewImage = function() {
                    var e = this.state.hovered && !this.state.didAnimatedPreviewFailToLoad ? this.props.video.animatedPreviewURL : this.props.video.previewThumbnailURL,
                        t = a("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": null !== this.getVideoPreviousWatchPercentage() && !this.state.hovered
                        }),
                        n = a("video-preview-card__preview-image", {
                            "video-preview-card__preview-image--animated": this.state.hovered && this.state.didAnimatedPreviewLoad
                        });
                    return o.createElement(p.j, {
                        overflow: !0
                    }, o.createElement(l.a, {
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-image-link",
                        "data-test-selector": "preview-image-link"
                    }, o.createElement("div", {
                        className: t,
                        "data-test-selector": "preview-image-wrapper"
                    }, o.createElement(p._0, {
                        flexShrink: 0
                    }, o.createElement("figure", null, o.createElement(p.j, {
                        ratio: p.k.Aspect16x9
                    }, o.createElement("img", {
                        alt: this.props.video.title,
                        className: n,
                        "data-test-selector": "preview-image",
                        onLoad: this.onPreviewImageLoad,
                        onError: this.onPreviewImageLoadError,
                        src: e
                    })))))))
                }, t.prototype.gameBoxArt = function() {
                    if (!this.showGameArt() || !this.props.video.game) return null;
                    var e = this.props.video.game,
                        t = {
                            pathname: "/directory/game/" + encodeURI(e.name),
                            state: this.getLinkState()
                        },
                        n = a("video-preview-card__image-wrapper", {
                            "video-preview-card__image-wrapper--watched": null !== this.getVideoPreviousWatchPercentage() && !this.state.hovered
                        });
                    return o.createElement(p._6, {
                        "data-test-selector": "game-box-art",
                        display: p.P.InlineFlex,
                        flexShrink: 0,
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(l.a, {
                        to: t,
                        title: e.name,
                        "data-a-target": "video-preview-card-boxart-link"
                    }, o.createElement(p._0, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement("figure", {
                        className: "video-preview-card__game-art"
                    }, o.createElement(p._46, {
                        display: p.P.Block,
                        direction: p._48.Bottom,
                        label: e.name
                    }, o.createElement("div", {
                        className: n,
                        "data-test-selector": "game-box-art-wrapper"
                    }, o.createElement(p.D, {
                        aspect: p.k.BoxArt,
                        alt: e.name,
                        src: e.boxArtURL || d.a.defaultBoxArtURL
                    })))))))
                }, t.prototype.videoMetaData = function() {
                    var e = Object(d.c)(new Date(this.props.video.publishedAt), "medium"),
                        t = null;
                    if (this.props.video.owner) {
                        var n = {
                            pathname: "/" + this.props.video.owner.login,
                            state: this.getLinkState()
                        };
                        t = o.createElement(l.a, {
                            to: n,
                            className: "video-preview-card__owner-display-name",
                            "data-a-target": "video-preview-card-channel-link",
                            "data-test-selector": "video-owner",
                            title: Object(s.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                        }, Object(s.a)(this.props.video.owner.login, this.props.video.owner.displayName))
                    }
                    return o.createElement(p._6, {
                        display: p.P.Flex,
                        flexDirection: p.R.Column,
                        overflow: p._9.Hidden
                    }, o.createElement(p._6, {
                        "data-test-selector": "video-title",
                        overflow: p._9.Hidden,
                        position: p._13.Relative
                    }, o.createElement(p.O, {
                        color: p.J.Base,
                        fontSize: p.T.Size5,
                        lineHeight: p._7.Heading
                    }, o.createElement(l.a, {
                        className: "video-preview-card__video-title",
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-title-link"
                    }, this.props.video.title))), o.createElement(p._6, {
                        flexShrink: 0,
                        flexGrow: 0,
                        ellipsis: !0
                    }, o.createElement(p.O, {
                        type: p._43.Span,
                        color: p.J.Alt2,
                        ellipsis: !0,
                        title: this.formatTitle(e)
                    }, e, o.createElement(p._0, {
                        padding: {
                            x: .5
                        }
                    }, o.createElement("span", null, "·")), t)))
                }, t.prototype.getVideoPreviousWatchPercentage = function() {
                    return this.props.video && this.props.video.self && this.props.video.self.viewingHistory && null !== this.props.video.self.viewingHistory.position ? 0 === this.props.video.lengthSeconds || 0 === this.props.video.self.viewingHistory.position ? null : this.props.video.self.viewingHistory.position / this.props.video.lengthSeconds * 100 : null
                }, t.prototype.showGameArt = function() {
                    return !this.props.hideGameArt && this.props.video.game && "" !== this.props.video.game.name
                }, t.prototype.formatTitle = function(e) {
                    if (this.props.video.owner) return e + " · " + Object(s.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                }, t.prototype.getLinkState = function() {
                    return {
                        content: this.props.tracking.content,
                        content_index: this.props.tracking.content_index,
                        medium: this.props.tracking.medium
                    }
                }, t
            }(o.Component)),
            g = Object(u.d)("VideoPreviewCard")(v)
    },
    c8Oh: function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e.userPreferences.languagePreferences
        };
        var i = n("TToO"),
            a = n("6sO2"),
            r = n("V9YC"),
            o = n("iJpA");
        a.o.store.registerReducer("userPreferences", function(e, t) {
            switch (void 0 === e && (e = {
                languagePreferences: Object(o.b)()
            }), t.type) {
                case r.a:
                    return i.__assign({}, e, {
                        languagePreferences: t.languagePreferences
                    });
                default:
                    return e
            }
        })
    },
    iJpA: function(e, t, n) {
        "use strict";
        t.c = function(e, t) {
            var n = this;
            return function(r) {
                return i.__awaiter(n, void 0, void 0, function() {
                    var n, s;
                    return i.__generator(this, function(i) {
                        return n = new Set(d()), t ? n.add(e) : n.delete(e), s = Array.from(n), a.l.set(l, s), r(Object(o.b)(s)), [2]
                    })
                })
            }
        }, t.a = function() {
            var e = this;
            return function(t) {
                return i.__awaiter(e, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        return a.l.set(l, []), t(Object(o.b)([])), [2]
                    })
                })
            }
        }, t.b = d;
        var i = n("TToO"),
            a = n("6sO2"),
            r = n("D9fv"),
            o = n("V9YC"),
            l = "languageDirectoryFilters";

        function d() {
            return a.l.get(l, []).filter(function(e) {
                return r.a.has(e)
            })
        }
    },
    lTLe: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("RH2O"),
            a = n("2KeS"),
            r = n("+xm8"),
            o = n("f2i/"),
            l = n("Aj/L"),
            d = n("TToO"),
            s = n("GiK3"),
            c = n("3zLD"),
            u = n("6sO2"),
            p = n("yWCw"),
            m = n("7vx8"),
            v = n("j7/Y"),
            g = n("w9tK"),
            h = n("vH/s"),
            f = n("MZUk"),
            k = n("CSlQ"),
            b = n("VDV3"),
            w = n("Odds"),
            _ = n("9MWs"),
            y = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return d.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    if (!this.props.isLoggedIn) return this.props.login(), s.createElement(p.a, {
                        message: Object(u.d)("Log in to view a full list of videos you have previously watched.", "FinishWatchingPage")
                    });
                    var e;
                    if (this.props.data.loading) e = s.createElement(w._8, {
                        fillContent: !0
                    });
                    else if (this.props.data.error || !this.props.data.currentUser) e = s.createElement("div", null, s.createElement(w._6, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(w.O, {
                        type: w._43.H4,
                        color: w.J.Alt2,
                        fontSize: w.T.Size5
                    }, Object(u.d)("Oops, viewing history failed to load. Check out some other videos you might like:", "FinishWatchingPage"))), s.createElement(f.a, {
                        directoryWidth: this.props.directoryWidth
                    }));
                    else {
                        var t = this.props.data.currentUser.viewedVideos.edges.filter(function(e) {
                            return !!e.node.id
                        }).map(function(e) {
                            return e.node
                        });
                        e = 0 === t.length ? s.createElement("div", null, s.createElement(w._6, {
                            margin: {
                                bottom: 2
                            }
                        }, s.createElement(w.O, {
                            type: w._43.H4,
                            color: w.J.Alt2,
                            fontSize: w.T.Size5
                        }, Object(u.d)("You haven't watched any videos yet! Here are some to start you off:", "FinishWatchingPage"))), s.createElement(f.a, {
                            directoryWidth: this.props.directoryWidth
                        })) : s.createElement(b.b, {
                            videos: t,
                            trackingMedium: h.PageviewMedium.FinishWatching,
                            trackingContent: h.PageviewContent.ResumeWatchingVideos
                        })
                    }
                    return s.createElement(w._6, {
                        className: "finish-watching-page",
                        overflow: w._9.Hidden,
                        display: w.P.Flex,
                        flexDirection: w.R.Column,
                        flexWrap: w.S.NoWrap,
                        padding: {
                            top: 2,
                            x: 3
                        },
                        fullHeight: !0
                    }, s.createElement(w._6, {
                        margin: {
                            bottom: 2
                        }
                    }, s.createElement(w.O, {
                        type: w._43.H2,
                        color: w.J.Alt2,
                        fontSize: w.T.Size4,
                        transform: w._42.Uppercase
                    }, Object(u.d)("Viewing History", "FinishWatchingPage"))), e)
                }, t.prototype.onRender = function() {
                    this.props.data.loading || (this.props.data.currentUser && u.o.setPageTitle(Object(u.d)("{currentUser} - Viewing History", {
                        currentUser: this.props.data.currentUser.login
                    }, "FinishWatchingPage")), this.props.latencyTracking.reportInteractive())
                }, t
            }(s.Component),
            E = Object(c.compose)(Object(m.a)(_, {
                options: {
                    variables: {
                        limit: 30
                    }
                }
            }), Object(k.d)("FinishWatchingPage", {
                destination: g.a.DirectoryVideosHistory
            }), Object(v.a)({
                location: h.PageviewLocation.Directory
            }))(y);
        var S = Object(i.b)(function(e) {
            return {
                isLoggedIn: Object(l.d)(e)
            }
        }, function(e) {
            return Object(a.b)({
                login: function() {
                    return Object(o.f)(r.a.FollowingPage)
                }
            }, e)
        })(E);
        n.d(t, "FinishWatchingPage", function() {
            return S
        })
    },
    oHn4: function(e, t) {},
    peXu: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n) {
            void 0 === n && (n = 1);
            if (!t || !e) return -1;
            return Math.floor(e / t) * n
        }
    },
    qjMx: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "FragmentDefinition",
                name: {
                    kind: "Name",
                    value: "PreviewCardVideo"
                },
                typeCondition: {
                    kind: "NamedType",
                    name: {
                        kind: "Name",
                        value: "Video"
                    }
                },
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "animatedPreviewURL"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
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
                                directives: []
                            }, {
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
                                    value: "name"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
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
                            value: "lengthSeconds"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "owner"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
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
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "previewThumbnailURL"
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
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "publishedAt"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
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
                                name: {
                                    kind: "Name",
                                    value: "viewingHistory"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "position"
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
                            value: "title"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "viewCount"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 263
            }
        };
        n.loc.source = {
            body: "fragment PreviewCardVideo on Video {\nanimatedPreviewURL\ngame {\nboxArtURL(width: 40 height: 56)\nid\nname\n}\nid\nlengthSeconds\nowner {\ndisplayName\nid\nlogin\n}\npreviewThumbnailURL(width: 320 height: 180)\npublishedAt\nself {\nviewingHistory {\nposition\n}\n}\ntitle\nviewCount\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    vQzq: function(e, t) {}
});
//# sourceMappingURL=pages.finish-watching-5c018610504654abaf984e09b5ac752b.js.map