(window.webpackJsonp = window.webpackJsonp || []).push([
    [139], {
        "+U0Y": function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return i
            }), n.d(t, "b", function() {
                return a
            });
            var i = "core.user-preferences.LANGUAGE_PREFERENCES_UPDATED";

            function a(e) {
                return {
                    type: i,
                    languagePreferences: e
                }
            }
        },
        "0T/G": function(e, t) {},
        "5xw2": function(e, t, n) {
            "use strict";
            n.d(t, "c", function() {
                return d
            }), n.d(t, "a", function() {
                return l
            }), n.d(t, "b", function() {
                return c
            });
            var i = n("mrSG"),
                a = n("/7QA"),
                r = n("HSqT"),
                o = n("+U0Y"),
                s = "languageDirectoryFilters";

            function d(e, t) {
                var n = this;
                return function(r) {
                    return i.__awaiter(n, void 0, void 0, function() {
                        var n, d;
                        return i.__generator(this, function(i) {
                            return n = new Set(c()), t ? n.add(e) : n.delete(e), d = Array.from(n), a.m.set(s, d), r(Object(o.b)(d)), [2]
                        })
                    })
                }
            }

            function l() {
                var e = this;
                return function(t) {
                    return i.__awaiter(e, void 0, void 0, function() {
                        return i.__generator(this, function(e) {
                            return a.m.set(s, []), t(Object(o.b)([])), [2]
                        })
                    })
                }
            }

            function c() {
                return a.m.get(s, []).filter(function(e) {
                    return r.a.has(e)
                })
            }
        },
        "86FS": function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("H1ft"),
                o = n("SWMh"),
                s = n("cr+I"),
                d = n("/7QA"),
                l = n("GFmA"),
                c = n("0INk"),
                u = n("yWUM"),
                m = n("vRsq"),
                p = n("2xye"),
                g = n("GnwI"),
                h = n("4HIT"),
                v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onClickHandler = function() {
                            t.props.onClick && t.props.onClick(t.props.tracking.content_index)
                        }, t.gameChangesWithLinks = function() {
                            return t.props.videoGameChanges.map(function(e) {
                                var n = {
                                    t: Object(u.a)(e.offset)
                                };
                                return t.props.collectionID && (n.collection = t.props.collectionID), i.__assign({}, e, {
                                    linkTo: {
                                        pathname: "/videos/" + t.props.video.id,
                                        search: s.stringify(n),
                                        state: {
                                            content: p.PageviewContent.PreviewCardGameBalloonGame,
                                            medium: t.props.tracking.medium
                                        }
                                    }
                                })
                            })
                        }, t.trackVideoGameBalloonClick = function(e) {
                            t.props.video.owner && t.props.video.owner.id && t.props.video.owner.login && Object(c.b)({
                                videoID: e,
                                broadcasterID: t.props.video.owner.id,
                                channelLogin: t.props.video.owner.login,
                                contentIndex: t.props.tracking.content_index,
                                pageviewMedium: t.props.tracking.medium
                            })
                        }, t.trackVideoGameBalloonItemClick = function(e, n) {
                            t.props.video.owner && t.props.video.owner.id && t.props.video.owner.login && Object(c.c)({
                                videoID: e,
                                broadcasterID: t.props.video.owner.id,
                                channelLogin: t.props.video.owner.login,
                                contentIndex: n,
                                pageviewMedium: t.props.tracking.medium
                            })
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = {
                            context: this.props.context,
                            onClick: this.onClickHandler,
                            title: this.props.video.title,
                            linkTo: {
                                pathname: Object(m.i)(void 0, this.props.video.id),
                                state: this.getLinkState(),
                                search: this.generateSearchString()
                            },
                            thumbnailImageProps: {
                                src: this.props.video.previewThumbnailURL,
                                alt: this.props.video.title || ""
                            },
                            channelDisplayName: this.props.video.owner && this.props.video.owner.displayName || "",
                            channelLogin: this.props.video.owner && this.props.video.owner.login || "",
                            channelLinkTo: {
                                pathname: "/" + (this.props.video.owner ? this.props.video.owner.login : ""),
                                state: this.getLinkState()
                            },
                            channelImageProps: {
                                src: this.props.video.owner && this.props.video.owner.profileImageURL || "",
                                alt: this.props.video.owner && this.props.video.owner.displayName || ""
                            },
                            gameTitle: this.props.video.game && this.props.video.game.name || "",
                            gameTitleLinkTo: {
                                pathname: "/directory/game/" + encodeURI(this.props.video.game && this.props.video.game.name || ""),
                                state: this.getLinkState()
                            },
                            gameBoxArtImageProps: {
                                src: this.props.video.game && this.props.video.game.boxArtURL || d.a.defaultBoxArtURL,
                                alt: this.props.video.game ? this.props.video.game.displayName : ""
                            },
                            videoGameChanges: this.gameChangesWithLinks(),
                            multipleVideoGameMarkersType: this.props.multipleVideoGameMarkersType,
                            datePublished: this.props.video.publishedAt,
                            viewCount: this.props.video.viewCount || 0,
                            durationInSeconds: !this.props.hideDuration && this.props.video.lengthSeconds ? this.props.video.lengthSeconds : void 0,
                            animatedImageProps: this.props.video.animatedPreviewURL ? {
                                src: this.props.video.animatedPreviewURL,
                                alt: ""
                            } : void 0,
                            watchedProgressPercent: this.getVideoPreviousWatchPercentage() || 0,
                            listPosition: this.props.listPosition,
                            topBar: this.props.topBar,
                            restriction: this.getRestrictionProps(),
                            trackImageLatency: this.props.trackImageLatency,
                            onVideoGameBalloonClick: this.trackVideoGameBalloonClick,
                            onVideoGameBalloonItemClick: this.trackVideoGameBalloonItemClick,
                            trackingContext: this.props.tracking,
                            tagListProps: !0 !== this.props.hideTags && this.props.video.contentTags ? {
                                tags: this.props.video.contentTags,
                                linkPath: h.a.PopularTag
                            } : void 0
                        };
                        return a.createElement(l.a, i.__assign({}, e))
                    }, t.prototype.generateSearchString = function() {
                        var e = {};
                        this.props.collectionID && (e.collection = this.props.collectionID);
                        var t = s.stringify(e);
                        return t ? "?" + t : ""
                    }, t.prototype.getVideoPreviousWatchPercentage = function() {
                        return this.props.video && this.props.video.self && this.props.video.self.viewingHistory && null !== this.props.video.self.viewingHistory.position ? 0 === this.props.video.lengthSeconds || 0 === this.props.video.self.viewingHistory.position ? null : this.props.video.self.viewingHistory.position / (this.props.video.lengthSeconds || 1 / 0) * 100 : null
                    }, t.prototype.getRestrictionProps = function() {
                        var e = this.props.video.restriction && this.props.video.restriction.productName ? "/products/" + this.props.video.restriction.productName : "";
                        return {
                            productName: this.props.video.restriction && this.props.video.restriction.productName,
                            title: this.props.video.restriction && this.props.video.restriction.productTitle,
                            canViewRestricted: this.props.video.self && !this.props.video.self.isRestricted || !1,
                            upsellLinkTo: {
                                pathname: e,
                                state: this.getLinkState()
                            }
                        }
                    }, t.prototype.getLinkState = function() {
                        return {
                            content: this.props.tracking.content,
                            content_index: this.props.tracking.content_index,
                            medium: this.props.tracking.medium
                        }
                    }, t
                }(a.Component),
                f = Object(g.b)("VideoPreviewCard", {
                    autoReportInteractive: !0
                })(v);
            n.d(t, "a", function() {
                return k
            });
            var k = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        videoGameChanges: []
                    }, t.maybeFetchVideoMarkers = function(e, n) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return this.promise = Object(o.a)(e, n, this.props.video.game), [4, this.promise];
                                    case 1:
                                        return t = i.sent(), this.setState({
                                            videoGameChanges: t
                                        }), [2]
                                }
                            })
                        })
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(f, i.__assign({
                        videoGameChanges: this.state.videoGameChanges
                    }, this.props))
                }, t.prototype.componentWillMount = function() {
                    this.props.multipleVideoGameMarkersType && this.props.multipleVideoGameMarkersType !== r.a.None && !this.promise && this.maybeFetchVideoMarkers(this.props.video.id, this.props.video.lengthSeconds || 0)
                }, t
            }(a.Component)
        },
        EJax: function(e, t, n) {
            "use strict";
            var i, a = n("mrSG"),
                r = n("q1tI"),
                o = n("/7QA"),
                s = n("vSJR"),
                d = n("sLlB"),
                l = n("QzU5"),
                c = n("XKWF"),
                u = n("Ue10");
            ! function(e) {
                e.Button = "filter-dropdown-button", e.FilterItemAll = "filter-item-all", e.FilterItemPastPremiere = "filter-item-past-premiere", e.FilterItemArchive = "filter-item-archive", e.FilterItemHighlight = "filter-item-highlight", e.FilterItemUpload = "filter-item-upload", e.SortNewest = "sort-option-newest", e.SortPopular = "sort-option-popular", e.SortSelector = "sort-selector"
            }(i || (i = {}));
            var m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.getBroadcastTypeLabel = function(e) {
                            var t, n = Object(o.d)("All Videos", "VideoFilter"),
                                i = Object(o.d)("Past Premieres", "VideoFilter"),
                                a = Object(o.d)("Past Broadcasts", "VideoFilter"),
                                r = Object(o.d)("Highlights", "VideoFilter"),
                                s = Object(o.d)("Uploads", "VideoFilter");
                            switch (e) {
                                case l.a.PastPremiere:
                                    t = i;
                                    break;
                                case l.a.Archive:
                                    t = a;
                                    break;
                                case l.a.Highlight:
                                    t = r;
                                    break;
                                case l.a.Upload:
                                    t = s;
                                    break;
                                default:
                                    t = n
                            }
                            return t
                        }, t.sortChangeHandler = function(e) {
                            t.props.onVideoSortChange(e.target.value)
                        }, t.typeChangeHandler = function(e) {
                            if (t.props.onVideoFilterChange) {
                                var n = e.currentTarget.getAttribute("data-filter-type");
                                n && t.props.onVideoFilterChange(n)
                            }
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        return r.createElement(u.Ya, {
                            alignItems: u.f.End,
                            display: u.X.Flex,
                            flexDirection: u.Aa.Row,
                            fullWidth: !0,
                            justifyContent: u.Xa.Between
                        }, r.createElement(u.Ya, {
                            display: u.X.Flex,
                            flexDirection: u.Aa.Row
                        }, this.renderLanguageSelector(), r.createElement(s.a, {
                            buttonLabel: this.getBroadcastTypeLabel(this.props.broadcastType),
                            "data-test-selector": i.Button,
                            "data-a-target": "video-type-filter-dropdown",
                            hideDropdownOnInsideClick: !0
                        }, this.renderInteractables())), r.createElement("div", null, this.renderSortSelector()))
                    }, t.prototype.renderInteractables = function() {
                        return r.createElement(r.Fragment, null, r.createElement(u.Va, {
                            "data-a-target": "video-type-filter-all",
                            "data-filter-type": "all",
                            "data-test-selector": i.FilterItemAll,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(u.Ya, {
                            display: u.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(), this.renderCheckmark())), r.createElement(u.Va, {
                            "data-a-target": "video-type-filter-past-premieres",
                            "data-filter-type": l.a.PastPremiere,
                            "data-test-selector": i.FilterItemPastPremiere,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(u.Ya, {
                            display: u.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(l.a.PastPremiere), this.renderCheckmark(l.a.PastPremiere))), r.createElement(u.Va, {
                            "data-a-target": "video-type-filter-past-broadcasts",
                            "data-filter-type": l.a.Archive,
                            "data-test-selector": i.FilterItemArchive,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(u.Ya, {
                            display: u.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(l.a.Archive), this.renderCheckmark(l.a.Archive))), r.createElement(u.Va, {
                            "data-a-target": "video-type-filter-highlights",
                            "data-filter-type": l.a.Highlight,
                            "data-test-selector": i.FilterItemHighlight,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(u.Ya, {
                            display: u.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(l.a.Highlight), this.renderCheckmark(l.a.Highlight))), r.createElement(u.Va, {
                            "data-a-target": "video-type-filter-uploads",
                            "data-filter-type": l.a.Upload,
                            "data-test-selector": i.FilterItemUpload,
                            onClick: this.typeChangeHandler,
                            selected: !1
                        }, r.createElement(u.Ya, {
                            display: u.X.Flex,
                            padding: {
                                y: .5,
                                x: 1
                            }
                        }, this.getBroadcastTypeLabel(l.a.Upload), this.renderCheckmark(l.a.Upload))))
                    }, t.prototype.renderCheckmark = function(e) {
                        return this.props.broadcastType === e ? r.createElement(u.Ya, {
                            attachRight: !0,
                            position: u.kb.Absolute,
                            margin: {
                                right: 1
                            }
                        }, r.createElement(u.tb, {
                            asset: u.ub.Check,
                            height: 18,
                            width: 18
                        })) : null
                    }, t.prototype.renderLanguageSelector = function() {
                        return this.props.hideLanguageSelector ? null : r.createElement(u.Ya, {
                            margin: {
                                right: 0
                            }
                        }, r.createElement(d.a, null))
                    }, t.prototype.renderSortSelector = function() {
                        if (this.props.hideSortSelector) return null;
                        var e = this.props.selectedSort && Object(c.b)(this.props.selectedSort) || c.a.Newest,
                            t = r.createElement(u.Ab, {
                                "data-a-target": "video-sort-select",
                                "data-test-selector": i.SortSelector,
                                name: "sort",
                                onChange: this.sortChangeHandler,
                                size: u.Ta.Large,
                                value: e
                            }, r.createElement("option", {
                                "data-a-target": "video-sort-newest",
                                "data-test-selector": i.SortNewest,
                                value: c.a.Newest
                            }, Object(o.d)("Newest", "VideoFilter")), r.createElement("option", {
                                "data-a-target": "video-sort-popular",
                                "data-test-selector": i.SortPopular,
                                value: c.a.Popular
                            }, Object(o.d)("Popular", "VideoFilter")));
                        return r.createElement(u.Ya, {
                            padding: {
                                y: .5
                            }
                        }, t)
                    }, t
                }(r.Component),
                p = n("daWW");
            n.d(t, "a", function() {
                return m
            }), n.d(t, "b", function() {
                return p.a
            }), n.d(t, !1, function() {
                return c.a
            })
        },
        HSqT: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            }), n.d(t, "b", function() {
                return s
            });
            var i = n("/7QA"),
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
                    code: "ro",
                    label: "Română"
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
            }));

            function s() {
                var e = i.p.intl.getLanguageCode(),
                    t = function(t) {
                        return "en" === t.code ? 0 : e && e.startsWith(t.code) ? 1 : 2
                    };
                return a.slice().sort(function(e, n) {
                    var i = t(e),
                        a = t(n);
                    return i !== a ? i - a : i + ":" + e.label < a + ":" + n.label ? -1 : 1
                }).concat(r(!0))
            }
        },
        HrG3: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var i = n("q1tI"),
                a = n("/7QA"),
                r = n("Ue10"),
                o = (n("RFKy"), "view-all-button-selector");

            function s(e) {
                var t = i.createElement(r.Ya, {
                    padding: 1,
                    fullHeight: !0,
                    flexDirection: r.Aa.Column,
                    justifyContent: r.Xa.Center,
                    display: r.X.Flex
                }, i.createElement(r.W, {
                    color: r.O.Link,
                    fontSize: r.Ca.Size4,
                    noWrap: !0
                }, Object(a.d)("View All", "Following--ViewAllButton")), i.createElement(r.W, {
                    color: r.O.Alt2,
                    fontSize: r.Ca.Size4,
                    noWrap: !0
                }, e.subHeader));
                return e.linkTo && (t = i.createElement(r.U, {
                    to: e.linkTo,
                    className: "following__view-all__link",
                    hoverUnderlineNone: !0
                }, t)), i.createElement("div", {
                    className: "following__view-all",
                    onClick: e.onClickViewAll,
                    "data-test-selector": o
                }, i.createElement(r.Ya, {
                    margin: {
                        bottom: 5
                    }
                }, i.createElement(r.o, {
                    ratio: e.aspectRatio
                }, i.createElement(r.Fb, {
                    background: r.r.Alt2,
                    fullHeight: !0
                }, t))))
            }
        },
        L5dg: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("q1tI"),
                a = n("0Rl0"),
                r = function(e) {
                    for (var t = [], n = void 0 === e.placeholderCount ? 20 : e.placeholderCount, r = 0; r < n; r++) t.push(i.createElement(a.a, {
                        key: r
                    }));
                    return i.createElement(i.Fragment, null, t)
                }
        },
        OhOW: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return s
            });
            var i = n("mrSG"),
                a = n("/7QA"),
                r = n("+U0Y"),
                o = n("5xw2");

            function s(e) {
                return e.userPreferences.languagePreferences
            }
            a.p.store.registerReducer("userPreferences", function(e, t) {
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
        PfQt: function(e, t, n) {
            "use strict";
            var i = n("HrG3");
            n.d(t, "a", function() {
                return i.a
            })
        },
        RFKy: function(e, t, n) {},
        RXle: function(e, t, n) {
            "use strict";
            var i = n("86FS");
            n.d(t, "VideoPreviewCard", function() {
                return i.a
            });
            n("0T/G");
            var a = n("0Rl0");
            n.d(t, "VideoPreviewCardPlaceholder", function() {
                return a.a
            })
        },
        S58p: function(e, t, n) {},
        SWMh: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return r
            });
            var i = n("mrSG"),
                a = n("b6Yk"),
                r = function(e, t, n) {
                    return i.__awaiter(void 0, void 0, Promise, function() {
                        var r, o;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    r = null, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, a.a.get("/v5/videos/" + e + "/markers")];
                                case 2:
                                    return (o = i.sent()).body && o.body.markers.game_changes && (r = o.body.markers.game_changes.sort(function(e, t) {
                                        return e.time - t.time
                                    }).map(function(e, n, i) {
                                        var a = i[n + 1];
                                        return {
                                            duration: a ? a.time - e.time : t - e.time,
                                            offset: e.time,
                                            label: e.label,
                                            thumbnailUrl: e.thumbnail.sheet_url,
                                            videoID: o.body.vod_id
                                        }
                                    }), n && n.boxArtURL && r.unshift({
                                        duration: r[0].offset,
                                        videoID: e,
                                        offset: 0,
                                        label: n.name,
                                        thumbnailUrl: n.boxArtURL
                                    })), [3, 4];
                                case 3:
                                    return i.sent(), [3, 4];
                                case 4:
                                    return [2, r || []]
                            }
                        })
                    })
                }
        },
        TB8s: function(e, t, n) {},
        TH8Y: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n("/MKj"),
                a = n("OhOW"),
                r = n("mrSG"),
                o = n("q1tI"),
                s = n("/7QA"),
                d = n("ZDlU"),
                l = n("GFmA"),
                c = n("8/mp"),
                u = n("yR8l"),
                m = n("V+GM"),
                p = n("geRD"),
                g = n("vRsq"),
                h = n("NvVO"),
                v = n("2xye"),
                f = n("llur"),
                k = n("cras"),
                b = n("GnwI"),
                y = n("EJax"),
                w = n("XKWF"),
                S = function(e) {
                    var t = e.game;
                    return (t && t.videos && t.videos.edges || []).filter(function(e) {
                        return e && e.node && e.node.id
                    })
                },
                _ = n("HStj"),
                N = n("Ue10"),
                C = n("tBbK"),
                P = (n("TB8s"), w.a.Popular),
                T = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onVideoSortChange = function(e) {
                            Object(g.u)("/directory/game/" + t.props.match.params.encodedCommunityName + "/videos", t.props, void 0, e)
                        }, t.onVideoFilterChange = function(e) {
                            Object(g.u)("/directory/game/" + t.props.match.params.encodedCommunityName + "/videos", t.props, e)
                        }, t
                    }
                    return r.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive(), s.p.setPageTitle(decodeURIComponent(this.props.match.params.encodedCommunityName))
                    }, t.prototype.render = function() {
                        var e = null,
                            t = null,
                            n = decodeURIComponent(this.props.match.params.encodedCommunityName),
                            i = Object(g.r)(this.props) || P,
                            a = Object(g.t)(this.props);
                        if (this.props.data.error) {
                            var r = Object(s.d)("{gameName} videos are temporarily unavailable.", {
                                gameName: n
                            }, "DirectoryVideosPage");
                            return o.createElement(d.a, {
                                message: r
                            })
                        }
                        if (!this.props.data.loading && null === this.props.data.game) {
                            r = Object(s.d)("{gameName} does not exist.", {
                                gameName: n
                            }, "DirectoryVideosPage");
                            return o.createElement(d.a, {
                                message: r
                            })
                        }
                        this.props.data.loading || !this.props.data.game || this.props.data.game.videos || (e = [], t = Object(s.d)("No results found", "DirectoryVideosPage")), this.props.data.game && this.props.data.game.videos && this.props.data.game.videos.edges && (e = this.props.data.game.videos.edges.map(function(e) {
                            if (e && e.node) return e.node
                        }));
                        var u = o.createElement(k.a, {
                                buttonSize: N.D.Large,
                                contentType: _.a.Videos,
                                directoryName: n
                            }),
                            m = o.createElement(N.Ya, {
                                className: "directory-game-videos-page__filters",
                                display: N.X.Flex,
                                flexDirection: N.Aa.Row,
                                fullWidth: !0,
                                padding: {
                                    top: 1,
                                    right: 3
                                }
                            }, u, o.createElement(y.a, {
                                onVideoSortChange: this.onVideoSortChange,
                                onVideoFilterChange: this.onVideoFilterChange,
                                selectedSort: i,
                                broadcastType: a
                            }));
                        return o.createElement(o.Fragment, null, m, o.createElement(N.Ya, {
                            padding: {
                                top: 2,
                                bottom: 3,
                                x: 3
                            }
                        }, t ? o.createElement(N.Ya, {
                            padding: {
                                top: 1
                            }
                        }, o.createElement(N.W, {
                            type: N.Wb.H3
                        }, t)) : o.createElement(o.Fragment, null, o.createElement(y.b, {
                            hideGameArt: !0,
                            trackingContent: Object(f.a)(i),
                            trackingMedium: v.PageviewMedium.GameVideos,
                            videos: e,
                            listContext: l.b.SingleGameList
                        }), o.createElement(c.a, {
                            enabled: this.enablePagination(),
                            key: "directory-game-videos-page-" + a + "-" + i,
                            loadMore: this.props.loadMore
                        }))))
                    }, t.prototype.enablePagination = function() {
                        return !!(this.props.data && !this.props.data.loading && !this.props.data.error && this.props.data.game && this.props.data.game.videos && this.props.data.game.videos.pageInfo && this.props.data.game.videos.pageInfo.hasNextPage)
                    }, t = r.__decorate([Object(u.a)(C, {
                        options: function(e) {
                            return {
                                fetchPolicy: "network-only",
                                variables: {
                                    gameName: decodeURIComponent(e.match.params.encodedCommunityName),
                                    videoLimit: 30,
                                    languages: e.languagePreferences,
                                    broadcastTypes: e.match.params.filter && "all" !== e.match.params.filter ? [e.match.params.filter] : void 0,
                                    videoSort: Object(g.r)(e) || w.a.Popular
                                }
                            }
                        },
                        props: function(e) {
                            return r.__assign({}, e, {
                                loadMore: function() {
                                    return e.data.fetchMore({
                                        query: C,
                                        variables: r.__assign({}, e.data.variables, {
                                            followedCursor: e.data.game && e.data.game.videos && e.data.game.videos.edges && e.data.game.videos.edges.length > 0 ? e.data.game.videos.edges[e.data.game.videos.edges.length - 1].cursor : void 0
                                        }),
                                        updateQuery: function(e, t) {
                                            var n = t.fetchMoreResult;
                                            return {
                                                game: r.__assign({}, n.game, {
                                                    videos: r.__assign({}, n.game && n.game.videos, {
                                                        edges: Object(p.c)(S(e), S(n))
                                                    })
                                                })
                                            }
                                        }
                                    })
                                }
                            })
                        }
                    }), Object(b.b)("DirectoryGameVideosPage", {
                        destination: h.a.DirectoryGameVideos
                    }), Object(m.a)({
                        location: v.PageviewLocation.Directory,
                        properties: function(e) {
                            return {
                                content_type: v.PageviewDirectoryContentType.Videos,
                                game: decodeURIComponent(e.match.params.encodedCommunityName)
                            }
                        }
                    })], t)
                }(o.Component);
            var F = Object(i.connect)(function(e) {
                return {
                    languagePreferences: Object(a.a)(e)
                }
            })(T);
            n.d(t, "DirectoryGameVideosPage", function() {
                return F
            })
        },
        b6Yk: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return o
            });
            var i = n("mrSG"),
                a = n("/7QA"),
                r = n("kRBY"),
                o = function() {
                    function e() {}
                    return e.get = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
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
                    }, e.getOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "GET"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.put = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
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
                    }, e.putOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "PUT"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.post = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
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
                    }, e.postOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "POST"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.delete = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
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
                    }, e.deleteOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            return i.__generator(this, function(a) {
                                switch (a.label) {
                                    case 0:
                                        return [4, this.requestOrThrow(e, i.__assign({}, t, {
                                            method: "DELETE"
                                        }), n)];
                                    case 1:
                                        return [2, a.sent()]
                                }
                            })
                        })
                    }, e.request = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            var a, r, o, s;
                            return i.__generator(this, function(d) {
                                switch (d.label) {
                                    case 0:
                                        return t = this.constructOptions(t, n), a = t.headers ? t.headers["Content-Type"] : void 0, r = this.serialize(t.body, a), o = i.__assign({}, t, {
                                            body: r
                                        }), [4, this._fetch(e, o)];
                                    case 1:
                                        return s = d.sent(), [4, this.constructLegacyAPIResponse(s)];
                                    case 2:
                                        return [2, d.sent()]
                                }
                            })
                        })
                    }, e.requestOrThrow = function(e, t, n) {
                        return void 0 === t && (t = {}), void 0 === n && (n = {}), i.__awaiter(this, void 0, Promise, function() {
                            var a;
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return r.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                    case 1:
                                        if ((a = r.sent()).requestError) throw a.requestError;
                                        if (a.error) throw new Error("Error while sending legacy-api request: " + a.error.status + " - " + a.error.message);
                                        return [2, i.__assign({}, a, {
                                            body: a.body
                                        })];
                                    case 2:
                                        throw r.sent();
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.getAPIURL = function(e) {
                        return new URL(e, a.p.config.apiBaseURL)
                    }, e.constructLegacyAPIResponse = function(e) {
                        return i.__awaiter(this, void 0, Promise, function() {
                            var t, n, a, r;
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
                                        return a = i.sent(), e.headers && e.headers.get && (r = e.headers.get("Content-Type")) && -1 !== r.indexOf("application/json") && (t.requestError = a), [3, 4];
                                    case 4:
                                        return [2, t]
                                }
                            })
                        })
                    }, e._fetch = function(e, t) {
                        return void 0 === t && (t = {}), i.__awaiter(this, void 0, Promise, function() {
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
                        return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                            contentType: t
                        }), null) : null
                    }, e.getDefaultHeaders = function(e, t) {
                        var n = a.p.store.getState(),
                            i = {
                                Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                                "Accept-Language": "en-us",
                                "Client-ID": a.p.config.legacyClientID,
                                "X-Requested-With": "XMLHttpRequest"
                            };
                        e.body && FormData.prototype.isPrototypeOf(e.body) || (i["Content-Type"] = "application/json; charset=UTF-8");
                        var o = Object(r.e)(n);
                        return o && (i.Authorization = "OAuth " + o.authToken, o.legacyCSRFToken && (i["Twitch-Api-Token"] = o.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                            i[e] && delete i[e]
                        }), i
                    }, e.logger = a.p.logger.withCategory("legacy-api"), e
                }()
        },
        daWW: function(e, t, n) {
            "use strict";
            var i = n("mrSG"),
                a = n("q1tI"),
                r = n("GFmA"),
                o = n("PfQt"),
                s = n("GnwI"),
                d = n("RXle"),
                l = n("L5dg"),
                c = n("Ue10"),
                u = function(e) {
                    var t = null,
                        n = null;
                    if (null === e.videos) t = a.createElement(l.a, {
                        placeholderCount: e.placeholderCount
                    });
                    else {
                        e.viewAllButtonProps && (n = a.createElement(o.a, i.__assign({}, e.viewAllButtonProps)));
                        var s = e.videos.map(function(t, n) {
                            return a.createElement(c.Ya, {
                                "data-a-target": "video-tower-card-" + n,
                                key: "video-" + n,
                                margin: {
                                    bottom: 2
                                }
                            }, a.createElement(d.VideoPreviewCard, {
                                hideGameArt: e.hideGameArt,
                                context: e.listContext || r.b.MixedGameAndChannelList,
                                tracking: {
                                    content: e.trackingContent,
                                    content_index: n,
                                    medium: e.trackingMedium
                                },
                                video: t,
                                trackImageLatency: 0 === n,
                                multipleVideoGameMarkersType: e.multipleVideoGameMarkersType,
                                hideTags: e.hideTags
                            }))
                        });
                        t = a.createElement(a.Fragment, null, s)
                    }
                    return a.createElement(c.cc, {
                        gutterSize: c.ec.Small,
                        childWidth: e.videoCardSize || c.dc.Large,
                        placeholderItems: 20
                    }, t, n)
                },
                m = Object(s.b)("VideoTower", {
                    autoReportInteractive: !0
                })(u);
            n.d(t, !1, function() {
                return u
            }), n.d(t, "a", function() {
                return m
            })
        },
        he03: function(e, t, n) {
            var i = {
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
                                        value: "displayName"
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
                                            value: "50"
                                        }
                                    }],
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
                                        value: "isRestricted"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
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
                                        }, {
                                            kind: "Field",
                                            name: {
                                                kind: "Name",
                                                value: "updatedAt"
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
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "restriction"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "productName"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "productTitle"
                                    },
                                    arguments: [],
                                    directives: []
                                }]
                            }
                        }, {
                            kind: "Field",
                            name: {
                                kind: "Name",
                                value: "contentTags"
                            },
                            arguments: [],
                            directives: [],
                            selectionSet: {
                                kind: "SelectionSet",
                                selections: [{
                                    kind: "FragmentSpread",
                                    name: {
                                        kind: "Name",
                                        value: "tagFragment"
                                    },
                                    directives: []
                                }]
                            }
                        }]
                    }
                }],
                loc: {
                    start: 0,
                    end: 454
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/tags/models/tag-fragment.gql"\nfragment PreviewCardVideo on Video {\nanimatedPreviewURL\ngame {\nboxArtURL(width: 40 height: 56)\nid\ndisplayName\nname\n}\nid\nlengthSeconds\nowner {\ndisplayName\nid\nlogin\nprofileImageURL(width: 50)\n}\npreviewThumbnailURL(width: 320 height: 180)\npublishedAt\nself {\nisRestricted\nviewingHistory {\nposition\nupdatedAt\n}\n}\ntitle\nviewCount\nrestriction {\nproductName\nproductTitle\n}\ncontentTags {\n...tagFragment\n}\n}',
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
            }(n("iiOx").definitions)), e.exports = i
        },
        llur: function(e, t, n) {
            "use strict";
            n.d(t, "b", function() {
                return o
            }), n.d(t, "a", function() {
                return s
            });
            var i = n("QzU5"),
                a = n("2xye"),
                r = n("XKWF");

            function o(e) {
                switch (e) {
                    case i.a.Archive:
                        return a.SpadeVideoBroadcastType.Archive;
                    case i.a.Highlight:
                        return a.SpadeVideoBroadcastType.Highlight;
                    case i.a.Upload:
                        return a.SpadeVideoBroadcastType.Upload;
                    case i.a.PastPremiere:
                        return a.SpadeVideoBroadcastType.PastPremiere;
                    case i.a.PremiereUpload:
                        return a.SpadeVideoBroadcastType.PremiereUpload;
                    default:
                        return e
                }
            }

            function s(e) {
                switch (e) {
                    case r.a.Popular:
                        return a.PageviewContent.PopularVideos;
                    case r.a.Newest:
                        return a.PageviewContent.RecentVideos;
                    default:
                        return e
                }
            }
        },
        "qy/S": function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "FragmentDefinition",
                    name: {
                        kind: "Name",
                        value: "VideoEdge"
                    },
                    typeCondition: {
                        kind: "NamedType",
                        name: {
                            kind: "Name",
                            value: "VideoEdge"
                        }
                    },
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
                }],
                loc: {
                    start: 0,
                    end: 157
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-preview-card/models/preview-card-video-fragment.gql"\nfragment VideoEdge on VideoEdge {\ncursor\nnode {\n...PreviewCardVideo\n}\n}',
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
            }(n("he03").definitions)), e.exports = i
        },
        sLlB: function(e, t, n) {
            "use strict";
            var i, a = n("/MKj"),
                r = n("fvjX"),
                o = n("5xw2"),
                s = n("OhOW"),
                d = n("mrSG"),
                l = n("q1tI"),
                c = n("wIs1"),
                u = n("/7QA"),
                m = n("vSJR"),
                p = n("8/mp"),
                g = n("HSqT"),
                h = n("2xye"),
                v = n("GnwI"),
                f = n("Ue10");
            n("S58p");
            ! function(e) {
                e.ClearAllButton = "language-select-menu__clear-all-button"
            }(i || (i = {}));
            var k = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.handleLanguageChange = function(e) {
                            var n = e.currentTarget,
                                i = n.parentElement && n.parentElement.getAttribute("data-language-code");
                            i && (t.props.updateLanguagePreferences(i, n.checked), t.trackLanguageChange(i, n.checked))
                        }, t.renderDropdownContent = function() {
                            return l.createElement(l.Fragment, null, l.createElement("div", {
                                className: "language-select-menu__balloon"
                            }, l.createElement(p.b, null, l.createElement(f.Ya, {
                                padding: .5
                            }, Object(g.b)().map(t.renderLanguageOption)))), l.createElement(f.Fb, {
                                background: f.r.Alt,
                                borderTop: !0,
                                className: "language-select-menu__footer"
                            }, l.createElement(f.z, {
                                type: f.F.Text,
                                onClick: t.props.clearLanguagePreferences,
                                "data-a-target": "language-clear-all",
                                "data-test-selector": i.ClearAllButton
                            }, Object(u.d)("Clear all", "LanguageSelectMenu"))))
                        }, t.renderLanguageOption = function(e) {
                            return l.createElement(f.Ya, {
                                padding: {
                                    x: 1,
                                    y: .5
                                },
                                key: e.code
                            }, l.createElement(f.N, {
                                label: e.label,
                                checked: t.props.languagePreferences.includes(e.code),
                                "data-language-code": e.code,
                                "data-a-target": "language-filter-" + e.code + "-checkbox",
                                onChange: t.handleLanguageChange
                            }))
                        }, t.renderButtonContent = function() {
                            var e = t.props.languagePreferences.length,
                                n = Object(u.d)("Language", "LanguageSelectMenu");
                            return l.createElement(f.Ya, {
                                display: f.X.Flex
                            }, n, l.createElement(f.Ya, {
                                margin: {
                                    left: .5
                                }
                            }, 0 !== e && l.createElement(f.hb, {
                                type: f.ib.Brand,
                                label: e.toString()
                            })))
                        }, t.trackLanguageChange = function(e, n) {
                            var i = "";
                            t.props.match && t.props.match.params && (i = decodeURIComponent(t.props.match.params.encodedCommunityName).toLowerCase()), u.p.tracking.track(h.SpadeEventType.LanguageFilterChange, {
                                item_name: "language",
                                item_value: e,
                                item_action: n ? "select" : "deselect",
                                game: i || null,
                                open_click: !0
                            })
                        }, t
                    }
                    return d.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return l.createElement(f.Ya, {
                            className: "language-select-menu"
                        }, l.createElement(m.a, {
                            "data-a-target": "language-filter-dropdown",
                            buttonLabel: this.renderButtonContent()
                        }, this.renderDropdownContent()))
                    }, t
                }(l.Component),
                b = Object(r.compose)(c.a, Object(v.b)("LanguageSelectMenu"))(k);
            var y = Object(a.connect)(function(e) {
                return {
                    languagePreferences: Object(s.a)(e)
                }
            }, function(e) {
                return Object(r.bindActionCreators)({
                    updateLanguagePreferences: o.c,
                    clearLanguagePreferences: o.a
                }, e)
            })(b);
            n.d(t, "a", function() {
                return y
            })
        },
        tBbK: function(e, t, n) {
            var i = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "DirectoryVideos_Game"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "gameName"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "videoLimit"
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
                                value: "followedCursor"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Cursor"
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "videoSort"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "VideoSort"
                            }
                        }
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
                                        value: "String"
                                    }
                                }
                            }
                        }
                    }, {
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "broadcastTypes"
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
                                        value: "BroadcastType"
                                    }
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
                                value: "game"
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
                                        value: "gameName"
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
                                        value: "name"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
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
                                                value: "videoLimit"
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
                                                value: "followedCursor"
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
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "types"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "broadcastTypes"
                                            }
                                        }
                                    }, {
                                        kind: "Argument",
                                        name: {
                                            kind: "Name",
                                            value: "sort"
                                        },
                                        value: {
                                            kind: "Variable",
                                            name: {
                                                kind: "Name",
                                                value: "videoSort"
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
                                                    kind: "FragmentSpread",
                                                    name: {
                                                        kind: "Name",
                                                        value: "VideoEdge"
                                                    },
                                                    directives: []
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
                    end: 443
                }
            };
            i.loc.source = {
                body: '#import "twilight/features/video-preview-card/models/video-edge-fragment.gql"\nquery DirectoryVideos_Game($gameName: String $videoLimit: Int $followedCursor: Cursor $videoSort: VideoSort $languages: [String!] $broadcastTypes: [BroadcastType!]) {\ngame(name: $gameName) {\nid\nname\nvideos(first: $videoLimit after: $followedCursor languages: $languages types: $broadcastTypes sort: $videoSort) {\nedges{\n...VideoEdge\n}\npageInfo {\nhasNextPage\n}\n}\n}\n}',
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
            }(n("qy/S").definitions)), e.exports = i
        },
        yWUM: function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
                return a
            });
            var i = "0h0m1s";

            function a(e) {
                if (0 === e) return i;
                if (!e || e < 0) return "";
                var t = e,
                    n = Math.floor(t / 3600);
                return t %= 3600, n + "h" + Math.floor(t / 60) + "m" + (t %= 60) + "s"
            }
        }
    }
]);