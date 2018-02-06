webpackJsonp([52], {
    "3yQz": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return a
        }), n.d(t, "a", function() {
            return r
        });
        var i, a = "VIEWS",
            r = "TIME";
        ! function(e) {
            e.Popular = "VIEWS", e.Newest = "TIME"
        }(i || (i = {}))
    },
    "6yQB": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            a = n("2KeS"),
            r = n("iJpA"),
            o = n("c8Oh"),
            l = n("TToO"),
            s = n("U7vG"),
            d = n("6sO2"),
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
                        return s.createElement(v.W, {
                            padding: {
                                x: 1,
                                y: .5
                            },
                            key: e.code
                        }, s.createElement(v.E, {
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
                    return s.createElement(v.W, {
                        className: "language-select-menu"
                    }, s.createElement(u.a, null, s.createElement(v.u, {
                        "data-test-selector": "language-dropdown-button",
                        "data-a-target": "language-filter-dropdown",
                        dropdown: !0,
                        type: v.z.Hollow
                    }, s.createElement(v.W, {
                        display: v.I.Flex
                    }, Object(d.d)("Language", "LanguageSelectMenu"), s.createElement(v.W, {
                        margin: {
                            left: .5
                        }
                    }, 0 !== e && s.createElement(v._2, {
                        type: v._3.Brand,
                        label: e.toString()
                    })))), s.createElement(v.p, {
                        direction: v.q.BottomLeft,
                        noTail: !0,
                        "data-a-target": "language-filter-balloon"
                    }, s.createElement(c.b, {
                        className: "language-select-menu__balloon"
                    }, s.createElement(v.W, {
                        padding: .5
                    }, Object(p.b)().map(this.renderLanguageOption))), s.createElement(v._20, {
                        background: v.m.Alt,
                        borderTop: !0,
                        className: "language-select-menu__footer"
                    }, s.createElement(v.u, {
                        type: v.z.Text,
                        onClick: this.props.clearLanguagePreferences,
                        "data-a-target": "language-clear-all"
                    }, Object(d.d)("Clear all", "LanguageSelectMenu"))))))
                }, t = l.__decorate([Object(m.d)("LanguageSelectMenu")], t)
            }(s.Component)),
            h = Object(i.b)(function(e) {
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
            var t = i.createElement(o.W, {
                padding: 1,
                fullHeight: !0,
                flexDirection: o.K.Column,
                justifyContent: o.V.Center,
                display: o.I.Flex
            }, i.createElement(o._24, {
                color: o.F.Link,
                fontSize: o.M.Size4,
                noWrap: !0
            }, Object(r.d)("View All", "Following--ViewAllButton")), i.createElement(o._24, {
                color: o.F.Alt2,
                fontSize: o.M.Size4,
                noWrap: !0
            }, e.subHeader));
            return e.linkTo && (t = i.createElement(a.a, {
                to: e.linkTo,
                className: "following__view-all__link"
            }, t)), i.createElement("div", {
                className: "following__view-all",
                onClick: e.onClickViewAll,
                "data-test-selector": s
            }, i.createElement(o.W, null, i.createElement(o.j, {
                ratio: e.aspectRatio
            }, i.createElement(o._20, {
                background: o.m.Alt2,
                fullHeight: !0
            }, t))))
        };
        var i = n("U7vG"),
            a = (n.n(i), n("F8kA")),
            r = n("6sO2"),
            o = n("Odds"),
            l = n("oHn4"),
            s = (n.n(l), "view-all-button-selector")
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
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n("qjMx").definitions)), e.exports = i
    },
    C2pI: function(e, t) {},
    D9fv: function(e, t, n) {
        "use strict";

        function i(e) {
            return void 0 === e && (e = !1), [{
                code: "asl",
                label: "American Sign Language"
            }, {
                code: "other",
                label: e ? Object(a.d)("Other", "broadcaster-languages") : "Other"
            }]
        }
        n.d(t, "a", function() {
            return o
        }), t.b = function() {
            var e = a.n.intl.getLanguageCode(),
                t = function(t) {
                    return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                };
            return r.slice().sort(function(e, n) {
                var i = t(e),
                    a = t(n);
                return i !== a ? i - a : i + ":" + e.label < a + ":" + n.label ? -1 : 1
            }).concat(i(!0))
        };
        var a = n("6sO2"),
            r = [{
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
            o = new Set(r.concat(i()).map(function(e) {
                return e.code
            }))
    },
    ISok: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("WxKK"),
            o = n("CSlQ"),
            l = n("81qH"),
            s = n("XYqD"),
            d = n("Odds"),
            c = function(e) {
                var t = [],
                    n = null;
                if (null === e.videos)
                    for (var o = void 0 === e.placeholderCount ? 20 : e.placeholderCount, c = 0; c < o; c++) t.push(a.createElement(s.a, {
                        key: c
                    }));
                else e.viewAllButtonProps && (n = a.createElement(r.a, i.__assign({}, e.viewAllButtonProps))), t = e.videos.map(function(t, n) {
                    return a.createElement(d.W, {
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
                return a.createElement(d._35, {
                    gutterSize: d._37.Small,
                    childWidth: e.videoCardSize || d._36.Large,
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
    JpYe: function(e, t, n) {
        "use strict";

        function i(e) {
            return r(l.parse(e.location.search).sort || "")
        }

        function a(e) {
            switch (e.match.params.filter) {
                case d.a.Archive.toLowerCase():
                    return d.a.Archive;
                case d.a.Highlight.toLowerCase():
                    return d.a.Highlight;
                case d.a.Upload.toLowerCase():
                    return d.a.Upload;
                case d.a.PastPremiere.toLowerCase():
                    return d.a.PastPremiere;
                default:
                    return
            }
        }

        function r(e) {
            switch (e.toUpperCase()) {
                case c.b:
                    return c.b;
                case c.a:
                    return c.a;
                default:
                    return null
            }
        }
        t.d = function(e, t, n, r) {
            var l = r || i(t),
                d = "";
            l && (d = "?sort=" + function(e) {
                switch (e) {
                    case c.b:
                        return o.Popular;
                    case c.a:
                        return o.Newest;
                    default:
                        var t = e;
                        return t
                }
            }(l));
            var u = n ? n.toLowerCase() : function(e) {
                var t = a(e);
                return t ? t.toLowerCase() : "all"
            }(t);
            s.n.history.push(e + "/" + u + d)
        }, t.c = i, t.b = a, t.a = function(e) {
            var t = l.parse(e.location.search);
            return e.match.params.collectionID || t.collection || ""
        }, t.e = r;
        var o, l = n("OAwv"),
            s = (n.n(l), n("6sO2")),
            d = n("6WAQ"),
            c = n("3yQz");
        ! function(e) {
            e.Popular = "views", e.Newest = "time"
        }(o || (o = {}))
    },
    MZUk: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            a = n("U7vG"),
            r = n("6sO2"),
            o = n("7vx8"),
            l = n("vH/s"),
            s = n("peXu"),
            d = n("CSlQ"),
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
                    if (this.props.data.loading || this.props.data.error || 0 === this.props.data.currentUser.recommendations.videos.edges.length) return null;
                    var e = a.createElement(u.W, {
                            margin: {
                                bottom: 2
                            }
                        }, a.createElement(u._24, {
                            type: u._29.H4,
                            color: u.F.Alt2,
                            fontSize: u.M.Size5,
                            transform: u._28.Uppercase
                        }, Object(r.d)("Based on your viewing history", "SuggestedVideos"))),
                        t = [];
                    if (this.props.data.currentUser.recommendations.videos && (t = this.props.data.currentUser.recommendations.videos.edges.map(function(e) {
                            return e.node
                        })), this.props.directoryWidth > 0) {
                        var n = Object(s.a)(this.props.directoryWidth, 240, 2);
                        t = t.slice(0, n)
                    }
                    return a.createElement("div", null, e, a.createElement(c.b, {
                        trackingMedium: l.PageviewMedium.Following,
                        trackingContent: l.PageviewContent.SuggestedVideos,
                        videoCardSize: u._36.Medium,
                        videos: t
                    }))
                }, t = i.__decorate([Object(o.a)(p, {
                    options: {
                        fetchPolicy: "network-only",
                        variables: {
                            limit: 30
                        }
                    }
                }), Object(d.d)("SuggestedVideos")], t)
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
        i.definitions = i.definitions.concat(function(e) {
            return e.filter(function(e) {
                if ("FragmentDefinition" !== e.kind) return !0;
                var t = e.name.value;
                return !a[t] && (a[t] = !0, !0)
            })
        }(n("qjMx").definitions)), e.exports = i
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
            r = n("U7vG"),
            o = n("6sO2"),
            l = n("6yQB"),
            s = n("+Znq"),
            d = n("6WAQ"),
            c = n("JpYe"),
            u = n("3yQz"),
            p = n("Odds"),
            m = (n("C2pI"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.sortChangeHandler = function(e) {
                        n.props.onVideoSortChange(e.target.value)
                    }, n.renderLanguageSelector = function() {
                        return n.props.hideLanguageSelector ? null : r.createElement(p.W, {
                            display: p.I.InlineFlex,
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
                                    return [4, o.n.experiments.getAssignment("TWILIGHT_PREMIERE_UPLOAD_FLOW")];
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
                        v = this.props.selectedSort && Object(c.e)(this.props.selectedSort) || u.a;
                    switch (this.props.broadcastType) {
                        case d.a.PastPremiere:
                            e = n;
                            break;
                        case d.a.Archive:
                            e = i;
                            break;
                        case d.a.Highlight:
                            e = l;
                            break;
                        case d.a.Upload:
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
                    return this.state.isPremiereExperimentActive && (f = r.createElement(p.U, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": d.a.PastPremiere,
                        "data-a-target": "video-type-filter-past-premieres"
                    }, r.createElement(p.W, {
                        className: a(this.props.broadcastType === d.a.PastPremiere ? g : h),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-past-premiere"
                    }, n))), r.createElement(p.W, {
                        margin: {
                            bottom: 2
                        },
                        display: p.I.Flex,
                        justifyContent: p.V.Between
                    }, r.createElement("div", null, this.renderLanguageSelector(), r.createElement(p.W, {
                        display: p.I.InlineFlex
                    }, r.createElement(s.a, {
                        ref: this.saveBalloonWrapperRef
                    }, r.createElement(p.u, {
                        type: p.z.Hollow,
                        "data-test-selector": "filter-dropdown-button",
                        "data-a-target": "video-type-filter-dropdown",
                        dropdown: !0
                    }, e), r.createElement(p.p, {
                        direction: p.q.Bottom,
                        "data-a-target": "video-type-filter-balloon",
                        offsetX: "0",
                        noTail: !0
                    }, r.createElement(p.W, {
                        className: "layout",
                        padding: {
                            y: 1
                        }
                    }, r.createElement(p.U, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": "all",
                        "data-a-target": "video-type-filter-all"
                    }, r.createElement(p.W, {
                        className: a(this.props.broadcastType ? h : g),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-all"
                    }, t)), f, r.createElement(p.U, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": d.a.Archive,
                        "data-a-target": "video-type-filter-past-broadcasts"
                    }, r.createElement(p.W, {
                        className: a(this.props.broadcastType === d.a.Archive ? g : h),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-archive"
                    }, i)), r.createElement(p.U, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": d.a.Highlight,
                        "data-a-target": "video-type-filter-highlights"
                    }, r.createElement(p.W, {
                        className: a(this.props.broadcastType === d.a.Highlight ? g : h),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-highlight"
                    }, l)), r.createElement(p.U, {
                        onClick: this.typeChangeHandler,
                        "data-filter-type": d.a.Upload,
                        "data-a-target": "video-type-filter-uploads"
                    }, r.createElement(p.W, {
                        className: a(this.props.broadcastType === d.a.Upload ? g : h),
                        padding: {
                            y: .5,
                            x: 1
                        },
                        "data-test-selector": "filter-item-upload"
                    }, m))))))), r.createElement("div", null, r.createElement(p._17, {
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
        var i = n("U7vG"),
            a = (n.n(i), n("Odds")),
            r = function() {
                return i.createElement(a.A, null, i.createElement(a.j, {
                    ratio: a.k.Aspect16x9
                }, i.createElement(a._4, null)), i.createElement(a.B, null, i.createElement(a.W, {
                    display: a.I.Flex,
                    margin: {
                        bottom: 1
                    }
                }, i.createElement(a.W, {
                    display: a.I.InlineBlock,
                    margin: {
                        top: 1,
                        right: 1
                    }
                }, i.createElement(a._4, {
                    width: 40,
                    height: 56
                })), i.createElement(a.W, {
                    display: a.I.InlineBlock,
                    margin: {
                        top: 1
                    }
                }, i.createElement(a._24, null, i.createElement(a._4, {
                    width: 150
                })), i.createElement(a._24, {
                    fontSize: a.M.Size7
                }, i.createElement(a._4, {
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
            o = (n.n(r), n("U7vG")),
            l = (n.n(o), n("F8kA")),
            s = n("6sO2"),
            d = n("SZoP"),
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
                    }, t.ignoreResumeTimeResponse = !1, t.onClickHandler = function() {
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
                }, t.prototype.componentWillUnmount = function() {
                    this.ignoreResumeTimeResponse = !0
                }, t.prototype.render = function() {
                    var e = null,
                        t = this.getVideoPreviousWatchPercentage();
                    return null !== t && (e = o.createElement(p.W, {
                        position: p._5.Absolute,
                        attachBottom: !0,
                        fullWidth: !0
                    }, o.createElement(p._8, {
                        size: p._9.Small,
                        value: t,
                        mask: !0
                    }))), o.createElement("div", i.__assign({
                        onClick: this.onClickHandler,
                        onMouseEnter: this.onMouseEnterHandler,
                        onMouseLeave: this.onMouseLeaveHandler
                    }, Object(p._42)(this.props)), o.createElement(p.A, null, o.createElement(p.W, {
                        fullWidth: !0
                    }, o.createElement(p.j, {
                        overflow: !0
                    }, o.createElement("div", null, o.createElement(p._20, {
                        display: p.I.InlineFlex,
                        position: p._5.Absolute,
                        attachTop: !0,
                        attachLeft: !0,
                        margin: .5,
                        zIndex: p._41.Default,
                        fontSize: p.M.Size6,
                        background: p.m.Overlay,
                        color: p.F.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, o.createElement(p._19, {
                        "data-test-selector": "video-view-count",
                        icon: p._12.GlyphViews,
                        label: Object(s.d)("views", "VideoPreviewCard"),
                        value: Object(s.f)(this.props.video.viewCount)
                    })), o.createElement(p._20, {
                        display: p.I.InlineFlex,
                        position: p._5.Absolute,
                        attachTop: !0,
                        attachRight: !0,
                        margin: .5,
                        zIndex: p._41.Default,
                        fontSize: p.M.Size6,
                        background: p.m.Overlay,
                        color: p.F.Overlay,
                        className: "video-preview-card__preview-overlay-stat"
                    }, o.createElement(p._19, {
                        "data-test-selector": "video-length",
                        icon: p._12.GlyphLength,
                        label: Object(s.d)("length", "VideoPreviewCard"),
                        value: Object(c.a)(this.props.video.lengthSeconds)
                    })), this.videoPreviewImage(), e))), o.createElement(p.B, null, o.createElement(p.W, {
                        display: p.I.Flex,
                        flexDirection: p.K.Row,
                        flexWrap: p.L.NoWrap,
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
                    }, o.createElement(p.R, {
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
                    return o.createElement(p.W, {
                        "data-test-selector": "game-box-art",
                        display: p.I.InlineFlex,
                        flexShrink: 0,
                        padding: {
                            bottom: .5
                        }
                    }, o.createElement(l.a, {
                        to: t,
                        title: e.name,
                        "data-a-target": "video-preview-card-boxart-link"
                    }, o.createElement(p.R, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement("figure", {
                        className: "video-preview-card__game-art"
                    }, o.createElement(p._32, {
                        display: p.I.Block,
                        direction: p._34.Bottom,
                        label: e.name
                    }, o.createElement("div", {
                        className: n,
                        "data-test-selector": "game-box-art-wrapper"
                    }, o.createElement(p.C, {
                        aspect: p.k.BoxArt,
                        imageAlt: e.name,
                        imageSrc: e.boxArtURL || s.a.defaultBoxArtURL
                    })))))))
                }, t.prototype.videoMetaData = function() {
                    var e = Object(s.c)(new Date(this.props.video.publishedAt), "medium"),
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
                            title: Object(d.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
                        }, Object(d.a)(this.props.video.owner.login, this.props.video.owner.displayName))
                    }
                    return o.createElement(p.W, {
                        display: p.I.Flex,
                        flexDirection: p.K.Column
                    }, o.createElement(p.W, {
                        "data-test-selector": "video-title",
                        overflow: p._1.Hidden,
                        position: p._5.Relative
                    }, o.createElement(p._24, {
                        color: p.F.Base,
                        fontSize: p.M.Size5,
                        lineHeight: p.X.Heading
                    }, o.createElement(l.a, {
                        className: "video-preview-card__video-title",
                        to: {
                            pathname: "/videos/" + this.props.video.id,
                            state: this.getLinkState(),
                            search: this.generateSearchString()
                        },
                        title: this.props.video.title,
                        "data-a-target": "video-preview-card-title-link"
                    }, this.props.video.title))), o.createElement(p.W, {
                        flexShrink: 0,
                        flexGrow: 0,
                        ellipsis: !0
                    }, o.createElement(p._24, {
                        type: p._29.Span,
                        color: p.F.Alt2,
                        ellipsis: !0,
                        title: this.formatTitle(e)
                    }, e, o.createElement(p.R, {
                        padding: {
                            x: .5
                        }
                    }, o.createElement("span", null, "·")), t)))
                }, t.prototype.getVideoPreviousWatchPercentage = function() {
                    return this.props.video && this.props.video.self && this.props.video.self.viewingHistory && null !== this.props.video.self.viewingHistory.position ? 0 === this.props.video.lengthSeconds || 0 === this.props.video.self.viewingHistory.position ? null : this.props.video.self.viewingHistory.position / this.props.video.lengthSeconds * 100 : null
                }, t.prototype.showGameArt = function() {
                    return !this.props.hideGameArt && this.props.video.game && "" !== this.props.video.game.name
                }, t.prototype.formatTitle = function(e) {
                    if (this.props.video.owner) return e + " · " + Object(d.a)(this.props.video.owner.login, this.props.video.owner.displayName, !0)
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
        a.n.store.registerReducer("userPreferences", function(e, t) {
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

        function i() {
            return r.k.get(s, []).filter(function(e) {
                return o.a.has(e)
            })
        }
        t.c = function(e, t) {
            var n = this;
            return function(o) {
                return a.__awaiter(n, void 0, void 0, function() {
                    var n, d;
                    return a.__generator(this, function(a) {
                        return n = new Set(i()), t ? n.add(e) : n.delete(e), d = Array.from(n), r.k.set(s, d), o(Object(l.b)(d)), [2]
                    })
                })
            }
        }, t.a = function() {
            var e = this;
            return function(t) {
                return a.__awaiter(e, void 0, void 0, function() {
                    return a.__generator(this, function(e) {
                        return r.k.set(s, []), t(Object(l.b)([])), [2]
                    })
                })
            }
        }, t.b = i;
        var a = n("TToO"),
            r = n("6sO2"),
            o = n("D9fv"),
            l = n("V9YC"),
            s = "languageDirectoryFilters"
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
                                    l = r.medium,
                                    d = r.content_index;
                                s.n.tracking.trackPageview(a.__assign({
                                    content: o,
                                    medium: l,
                                    content_index: d,
                                    location: e.location
                                }, t))
                            }
                        }, s.i.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.i.warn("No latency tracker exists! This means no data will be sent to Spade.", e), i
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
                return Object(l.f)(n)
            }
        }
        var a = n("TToO"),
            r = n("OAwv"),
            o = n("U7vG"),
            l = n("F8kA"),
            s = n("6sO2");
        n.d(t, "a", function() {
            return i
        })
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
            s = n("TToO"),
            d = n("U7vG"),
            c = n("3zLD"),
            u = n("6sO2"),
            p = n("yWCw"),
            m = n("7vx8"),
            v = n("j7/Y"),
            g = n("w9tK"),
            h = n("vH/s"),
            f = n("MZUk"),
            k = n("CSlQ"),
            w = n("VDV3"),
            b = n("Odds"),
            y = n("9MWs"),
            _ = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return s.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.onRender()
                }, t.prototype.componentDidUpdate = function() {
                    this.onRender()
                }, t.prototype.render = function() {
                    if (!this.props.isLoggedIn) return this.props.login(), d.createElement(p.a, {
                        message: Object(u.d)("Log in to view a full list of videos you have previously watched.", "FinishWatchingPage")
                    });
                    var e;
                    if (this.props.data.loading) e = d.createElement(b._0, {
                        fillContent: !0
                    });
                    else if (this.props.data.error || !this.props.data.currentUser) e = d.createElement("div", null, d.createElement(b.W, {
                        margin: {
                            bottom: 2
                        }
                    }, d.createElement(b._24, {
                        type: b._29.H4,
                        color: b.F.Alt2,
                        fontSize: b.M.Size5
                    }, Object(u.d)("Oops, viewing history failed to load. Check out some other videos you might like:", "FinishWatchingPage"))), d.createElement(f.a, {
                        directoryWidth: this.props.directoryWidth
                    }));
                    else {
                        var t = this.props.data.currentUser.viewedVideos.edges.filter(function(e) {
                            return !!e.node.id
                        }).map(function(e) {
                            return e.node
                        });
                        e = 0 === t.length ? d.createElement("div", null, d.createElement(b.W, {
                            margin: {
                                bottom: 2
                            }
                        }, d.createElement(b._24, {
                            type: b._29.H4,
                            color: b.F.Alt2,
                            fontSize: b.M.Size5
                        }, Object(u.d)("You haven't watched any videos yet! Here are some to start you off:", "FinishWatchingPage"))), d.createElement(f.a, {
                            directoryWidth: this.props.directoryWidth
                        })) : d.createElement(w.b, {
                            videos: t,
                            trackingMedium: h.PageviewMedium.FinishWatching,
                            trackingContent: h.PageviewContent.ResumeWatchingVideos
                        })
                    }
                    return d.createElement(b.W, {
                        className: "finish-watching-page",
                        overflow: b._1.Hidden,
                        display: b.I.Flex,
                        flexDirection: b.K.Column,
                        flexWrap: b.L.NoWrap,
                        padding: {
                            top: 2,
                            x: 3
                        },
                        fullHeight: !0
                    }, d.createElement(b.W, {
                        margin: {
                            bottom: 2
                        }
                    }, d.createElement(b._24, {
                        type: b._29.H2,
                        color: b.F.Alt2,
                        fontSize: b.M.Size4,
                        transform: b._28.Uppercase
                    }, Object(u.d)("Viewing History", "FinishWatchingPage"))), e)
                }, t.prototype.onRender = function() {
                    this.props.data.loading || (this.props.data.currentUser && u.n.setPageTitle(Object(u.d)("{currentUser} - Viewing History", {
                        currentUser: this.props.data.currentUser.login
                    }, "FinishWatchingPage")), this.props.latencyTracking.reportInteractive())
                }, t
            }(d.Component),
            E = Object(c.compose)(Object(m.a)(y, {
                options: {
                    variables: {
                        limit: 30
                    }
                }
            }), Object(k.d)("FinishWatchingPage", {
                destination: g.a.DirectoryVideosHistory
            }), Object(v.a)({
                location: h.PageviewLocation.Directory
            }))(_),
            S = Object(i.b)(function(e) {
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
    mi6k: function(e, t, n) {
        "use strict";

        function i(e, t) {
            return (t -= e.toString().length) > 0 ? new Array(t + (/\./.test(e.toString()) ? 2 : 1)).join("0") + e : e.toString()
        }
        t.a = function(e, t) {
            var n = Math.floor(e % 60),
                a = Math.floor(e % 3600 / 60),
                r = Math.floor(e / 3600);
            return t && t.zeroPadAll ? i(r, 2) + ":" + i(a, 2) + ":" + i(n, 2) : r ? r + ":" + i(a, 2) + ":" + i(n, 2) : a + ":" + i(n, 2)
        }
    },
    oHn4: function(e, t) {},
    peXu: function(e, t, n) {
        "use strict";
        t.a = function(e, t, n) {
            return void 0 === n && (n = 1), t && e ? Math.floor(e / t) * n : -1
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
//# sourceMappingURL=pages.finish-watching-ccf5254a25e10d39525ab0fd87f84a52.js.map