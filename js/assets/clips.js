webpackJsonp([70], {
    "+8VM": function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("2KeS"),
            a = n("V5M+"),
            o = n("YmWy"),
            s = Object(i.b)(null, function(e) {
                return Object(r.b)({
                    onClose: a.c
                }, e)
            })(o.a);
        n.d(t, "a", function() {
            return s
        })
    },
    "+xm8": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), t.c = function(e, t) {
            var n = {
                action: t.action,
                auth_ux: "modal",
                type: t.type,
                nonce: t.nonce
            };
            r.n.tracking.track(e, n)
        }, t.b = function() {
            for (var e = "", t = 0; t < a; t++) {
                var n = Math.floor(Math.random() * o.length);
                e += o.charAt(n)
            }
            return e
        };
        var i, r = n("6sO2"),
            a = 30,
            o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        ! function(e) {
            e.BitsLandingPage = "bits_landing_page", e.ChatLoginButton = "chat_login_button", e.ChatSignupButton = "chat_signup_button", e.Chat = "chat", e.ChannelUpsellLogin = "channel_upsell_login", e.ChannelUpsellSignup = "channel_upsell_signup", e.ClipsManager = "clips_manager", e.DashboardPage = "dashboard_page", e.DirectoryFollowButton = "directory-follow-button", e.DropsLoginButton = "drops-login-button", e.EventFollowButton = "event_follow_button", e.FeedReactionToggle = "feed_reaction_toggle", e.FollowButton = "follow-button", e.FollowGameButton = "follow-game-button", e.FollowingPage = "following_page", e.FriendAdd = "friend_add", e.InventoryPage = "inventory_page", e.ManagerRedirect = "manager_redirect", e.PaymentsLandingPage = "payments_landing_page", e.RaidJoin = "raid_join", e.ReportHoster = "report_hoster", e.ReportChannel = "report_channel", e.SettingsPage = "settings_page", e.SubsLandingPage = "subs_landing_Page", e.TopNavLoginButton = "topnav_login_button", e.TopNavSignupButton = "topnav_signup_button", e.TrendingEmotesLogin = "trending-emotes-login", e.TrendingEmotesSignup = "trending-emotes-signup", e.VODComment = "vod_comment", e.VODOptions = "vod_options", e.WhisperButton = "whisper_button"
        }(i || (i = {}))
    },
    "/9PY": function(e, t) {},
    "/wlI": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            var t = encodeURIComponent(JSON.stringify(e)).replace(/%([0-9A-F]{2})/g, function(e, t) {
                    return String.fromCharCode(Number("0x" + t))
                }),
                n = btoa(t);
            return "data=" + encodeURIComponent(n)
        }
    },
    0: function(e, t) {},
    "0+3B": function(e, t) {},
    "0nzt": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            return e.ui.theatreModeEnabled ? a.a.Dark : e.ui.theme
        };
        var i = n("TToO"),
            r = n("6sO2"),
            a = n("NXs7"),
            o = n("VAT8"),
            s = n("7enT");
        r.n.store.registerReducer("ui", function(e, t) {
            switch (void 0 === e && (e = function() {
                var e = r.k.get(r.n.config.layoutCacheKey, {
                        resource: {
                            isSocialColumnClosedByUserAction: !1,
                            isRightColumnClosedByUserAction: !1
                        },
                        time: Date.now()
                    }),
                    t = Object(o.b)();
                return {
                    persistentPlayerEnabled: r.k.get(r.n.config.persistentPlayerEnabledKey, !0),
                    persistentPlayerIsPersisting: !1,
                    rightColumnExpanded: !e.resource.isRightColumnClosedByUserAction,
                    sideNavExpanded: !e.resource.isSocialColumnClosedByUserAction,
                    theatreModeEnabled: !1,
                    theme: t
                }
            }()), t.type) {
                case s.e:
                    return i.__assign({}, e, {
                        rightColumnExpanded: !0
                    });
                case s.d:
                    return i.__assign({}, e, {
                        rightColumnExpanded: !1
                    });
                case s.g:
                    return i.__assign({}, e, {
                        sideNavExpanded: !0
                    });
                case s.f:
                    return i.__assign({}, e, {
                        sideNavExpanded: !1
                    });
                case s.i:
                    return i.__assign({}, e, {
                        theatreModeEnabled: !0
                    });
                case s.h:
                    return i.__assign({}, e, {
                        theatreModeEnabled: !1
                    });
                case s.j:
                    return i.__assign({}, e, {
                        theme: t.theme
                    });
                case s.c:
                    return i.__assign({}, e, {
                        persistentPlayerEnabled: !e.persistentPlayerEnabled
                    });
                case s.b:
                    return i.__assign({}, e, {
                        persistentPlayerIsPersisting: !1
                    });
                case s.a:
                    return i.__assign({}, e, {
                        persistentPlayerIsPersisting: !0
                    });
                default:
                    return e
            }
        })
    },
    1: function(e, t) {},
    2: function(e, t) {},
    "3+CI": function(e, t) {},
    "3KEv": function(e, t) {},
    "4gX4": function(e, t) {},
    "4rQm": function(e, t) {},
    "5EfE": function(e, t) {},
    "5fkB": function(e, t) {},
    "5kgt": function(e, t, n) {
        "use strict";
        t.a = function(e) {
            for (var t = {}, n = 0, i = Object.keys(e).filter(function(e) {
                    return e.startsWith("data-")
                }); n < i.length; n++) {
                var r = i[n];
                t[r] = e[r]
            }
            return t
        }
    },
    6: function(e, t, n) {
        n("rhaD"), n("pP2G"), e.exports = n("QM+N")
    },
    "6BvN": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Backspace = 8] = "Backspace", e[e.Tab = 9] = "Tab", e[e.Enter = 13] = "Enter", e[e.Esc = 27] = "Esc", e[e.Space = 32] = "Space", e[e.Left = 37] = "Left", e[e.Up = 38] = "Up", e[e.Right = 39] = "Right", e[e.Down = 40] = "Down", e[e.Colon = 58] = "Colon", e[e.At = 64] = "At", e[e.F = 70] = "F", e[e.P = 80] = "P"
        }(i || (i = {}))
    },
    "6WAQ": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.Archive = "ARCHIVE", e.Highlight = "HIGHLIGHT", e.Upload = "UPLOAD", e.WatchParty = "WATCH_PARTY", e.PastPremiere = "PAST_PREMIERE", e.PremiereUpload = "PREMIERE_UPLOAD"
        }(i || (i = {}))
    },
    "6sO2": function(e, t, n) {
        "use strict";
        var i = n("J4ib");
        n.d(t, "a", function() {
            return i.a
        }), n.d(t, "b", function() {
            return i.b
        }), n.d(t, "c", function() {
            return i.c
        }), n.d(t, "d", function() {
            return i.d
        }), n.d(t, "e", function() {
            return i.e
        }), n.d(t, "f", function() {
            return i.f
        }), n.d(t, "g", function() {
            return i.g
        }), n.d(t, "h", function() {
            return i.h
        }), n.d(t, "i", function() {
            return i.j
        }), n.d(t, "k", function() {
            return i.l
        }), n.d(t, "j", function() {
            return i.k
        }), n.d(t, "m", function() {
            return i.n
        }), n.d(t, "l", function() {
            return i.m
        }), n.d(t, "n", function() {
            return i.o
        })
    },
    "75D5": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var i = n("TToO"),
            r = n("Hvhe"),
            a = function() {
                function e(e, t) {
                    var n = this;
                    this.getDestination = function() {
                        return n.destination
                    }, this.getLocation = function() {
                        return n.location
                    }, this.name = e, this.destination = t
                }
                return e.prototype.reportInteractive = function(e) {
                    return e
                }, e.prototype.createChild = function(t, n) {
                    return new e(t, n)
                }, e.prototype.setDestination = function(e) {
                    this.destination = e
                }, e.prototype.setLocation = function(e) {
                    this.location = e
                }, e.prototype.reset = function() {}, e.prototype.registerCustomEvent = function(e) {
                    return i.__assign({}, e, {
                        duration: {
                            latencyStatus: r.a.Unknown
                        },
                        startTime: 0
                    })
                }, e.prototype.reportCustomEvent = function(e) {}, e.prototype.resetCustomEvents = function(e) {}, e
            }()
    },
    "7enT": function(e, t, n) {
        "use strict";
        n.d(t, "c", function() {
            return i
        }), n.d(t, "a", function() {
            return r
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "d", function() {
            return o
        }), n.d(t, "e", function() {
            return s
        }), n.d(t, "i", function() {
            return l
        }), n.d(t, "h", function() {
            return c
        }), n.d(t, "f", function() {
            return h
        }), n.d(t, "g", function() {
            return u
        }), n.d(t, "j", function() {
            return d
        }), t.l = function() {
            return {
                type: o
            }
        }, t.p = function() {
            return {
                type: s
            }
        }, t.m = function() {
            return {
                type: h
            }
        }, t.q = function() {
            return {
                type: u
            }
        }, t.o = function() {
            return {
                type: l
            }
        }, t.n = function() {
            return {
                type: c
            }
        }, t.s = function(e) {
            return {
                type: d,
                theme: e
            }
        }, t.t = function() {
            return {
                type: i
            }
        }, t.k = function() {
            return {
                type: r
            }
        }, t.r = function() {
            return {
                type: a
            }
        };
        var i = "core.ui.PERSISTENT_PLAYER_TOGGLED",
            r = "core.ui.PERSISTENT_PLAYER_BEGAN_PERSISTING",
            a = "core.ui.PERSISTENT_PLAYER_STOPPED_PERSISTING",
            o = "core.ui.RIGHT_COLUMN_COLLAPSED",
            s = "core.ui.RIGHT_COLUMN_EXPANDED",
            l = "core.ui.THEATRE_ENABLED",
            c = "core.ui.THEATRE_DISABLED",
            h = "core.ui.SIDE_NAV_COLLAPSED",
            u = "core.ui.SIDE_NAV_EXPANDED",
            d = "core.ui.THEME_CHANGED"
    },
    "7vx8": function(e, t, n) {
        "use strict";

        function i(e) {
            return e.definitions.reduce(function(t, n) {
                if (n.kind !== g.Operation) return {};
                var i = n;
                if ("query" !== i.operation) return {};
                for (var a = 0, o = i.selectionSet.selections; a < o.length; a++) {
                    var s = function(e, t) {
                        var n = r(e, t);
                        if (!n || 0 === n.length) return {};
                        var i = {};
                        if (e.directives)
                            for (var a = 0, o = e.directives; a < o.length; a++) {
                                var s = o[a],
                                    l = s.name.value;
                                if ((l === c.Include || l === c.Skip) && s.arguments) {
                                    var h = s.arguments[0];
                                    if ("if" === h.name.value) {
                                        var u = h.value.name.value;
                                        i[l] = u
                                    }
                                }
                            }
                        for (var d = {}, p = 0, m = n; p < m.length; p++) {
                            var g = m[p];
                            d[g] = i
                        }
                        return d
                    }(o[a], e);
                    s && (t = h.__assign({}, t, s))
                }
                return t
            }, {})
        }

        function r(e, t) {
            if (e.kind === m.Field) return [e.alias ? e.alias.value : e.name.value];
            if (e.kind === m.FragmentSpread) {
                var n = e.name.value,
                    i = t.definitions.find(function(e) {
                        return e.kind === g.Fragment && e.name.value === n
                    });
                if (!i) return;
                return i.selectionSet.selections.reduce(function(e, n) {
                    var i = r(n, t);
                    if (i) return e.concat(i)
                }, [])
            }
        }

        function a(e, t) {
            return t && t.options ? "object" == typeof t.options ? t.options.variables || {} : "function" == typeof t.options ? t.options(e).variables || {} : {} : {}
        }

        function o(e, t) {
            if (t && t.skip) {
                if ("boolean" == typeof t.skip) return t.skip;
                if ("function" == typeof t.skip) return t.skip(e)
            }
            return !1
        }

        function s(e, t, n) {
            if (!e[t]) return {};
            for (var i = {}, r = 0, a = Object.keys(e[t]); r < a.length; r++) {
                var o = a[r];
                n[o] && (i[o] = e[t][o])
            }
            return i
        }

        function l(e, t) {
            return function(n) {
                var r = function(r) {
                    function l() {
                        var n = null !== r && r.apply(this, arguments) || this;
                        return n.queryFields = i(e), n.operationName = t && t.name || "data", n.cachedData = {}, n.queryName = function(e) {
                            var t = e.definitions.find(function(e) {
                                return e.kind === g.Operation && "query" === e.operation
                            });
                            return t && t.name && t.name.value || f
                        }(e), n.logger = p.i.withCategory("with-graphql"), n
                    }
                    return h.__extends(l, r), l.prototype.componentWillReceiveProps = function(e) {
                        if (!o(e, t)) {
                            if (function(e) {
                                    for (var t = e.dataProps, n = e.nextDataProps, i = e.nextProps, r = e.cachedData, o = e.operationName, s = e.operationOptions, l = e.queryFields, h = e.queryName, u = e.logger, d = !1, p = !1, m = 0, g = Object.keys(t); m < g.length; m++) {
                                        var f = g[m];
                                        if (void 0 === t[f] || void 0 !== n[f] || !i[o] || i[o].loading || i[o].error) void 0 !== n[f] && void 0 !== r[f] && (delete r[f], p = !0);
                                        else {
                                            var v = l[f][c.Skip],
                                                w = l[f][c.Include],
                                                b = a(i, s);
                                            if (v && void 0 !== b[v] && b[v]) continue;
                                            if (w && void 0 !== b[w] && !b[w]) continue;
                                            d = !0, r[f] = t[f]
                                        }
                                    }
                                    return p && u.debug("GraphQL corruption resolved for component.", {
                                        fieldName: o,
                                        queryName: h
                                    }), d
                                }({
                                    dataProps: s(this.props, this.operationName, this.queryFields),
                                    nextDataProps: s(e, this.operationName, this.queryFields),
                                    cachedData: this.cachedData,
                                    operationName: this.operationName,
                                    queryFields: this.queryFields,
                                    queryName: this.queryName,
                                    logger: this.logger,
                                    operationOptions: t,
                                    nextProps: e
                                })) {
                                this.logCorruptDataFound();
                                var n = e[this.operationName];
                                n && n.refetch && n.refetch()
                            }
                        }
                    }, l.prototype.render = function() {
                        return u.createElement(n, h.__assign({}, this.getRenderProps()))
                    }, l.prototype.getRenderProps = function() {
                        return o(this.props, t) ? this.props : "object" != typeof this.props[this.operationName] ? this.props : h.__assign({}, this.props, (e = {}, e[this.operationName] = h.__assign({}, this.cachedData, this.props[this.operationName]), e));
                        var e
                    }, l.prototype.logCorruptDataFound = function() {
                        var e = p.b.get("withgraphql_error_on_corruption", !1),
                            t = {
                                fieldName: this.operationName,
                                queryName: this.queryName
                            },
                            n = "GraphQL data corrupted for component.";
                        e ? this.logger.error(new Error("GraphQL data corrupted for component using query " + this.queryName), n, t) : this.logger.warn(n, t)
                    }, l.displayName = "WithGraphQL(" + (n.displayName || n.name || "Component") + ")", l
                }(u.Component);
                return Object(d.graphql)(e, t)(r)
            }
        }
        var c, h = n("TToO"),
            u = n("U7vG"),
            d = n("3zLD"),
            p = n("6sO2");
        ! function(e) {
            e.Skip = "skip", e.Include = "include"
        }(c || (c = {}));
        var m;
        ! function(e) {
            e.Field = "Field", e.FragmentSpread = "FragmentSpread"
        }(m || (m = {}));
        var g;
        ! function(e) {
            e.Operation = "OperationDefinition", e.Fragment = "FragmentDefinition"
        }(g || (g = {}));
        var f = "UnnamedQuery";
        n.d(t, "a", function() {
            return l
        })
    },
    "8pDc": function(e, t) {},
    "9NS1": function(e, t) {},
    "9Q3d": function(e, t) {},
    ALci: function(e, t) {},
    "Aj/L": function(e, t, n) {
        "use strict";
        t.e = function(e) {
            return e.session.authInitialized && e.session.languageInitialized
        }, t.d = function(e) {
            return !!e.session.user
        }, t.c = function(e) {
            return e.session.user
        }, t.a = function(e) {
            return e.session.user && e.session.user.authToken
        }, t.b = function(e) {
            return e.session.user && e.session.user.legacyCSRFToken
        };
        var i = n("TToO"),
            r = n("6sO2"),
            a = n("ZaD5"),
            o = function() {
                return {
                    authInitialized: !1,
                    initialUserAvailabilityIsSet: !1,
                    languageCode: "en",
                    locale: "en-US",
                    languageInitialized: !1,
                    firstPageLoaded: !!r.a.embedded
                }
            };
        r.n.store.registerReducer("session", function(e, t) {
            switch (void 0 === e && (e = o()), t.type) {
                case a.a:
                    return i.__assign({}, e, {
                        authInitialized: !0,
                        user: t.user
                    });
                case a.d:
                    return i.__assign({}, e, {
                        languageInitialized: !0,
                        languageCode: t.languageCode,
                        locale: t.locale
                    });
                case a.b:
                    return i.__assign({}, e, {
                        firstPageLoaded: !0
                    });
                case a.c:
                    return i.__assign({}, e, {
                        initialUserAvailabilityIsSet: !0
                    });
                default:
                    return e
            }
        })
    },
    C2vp: function(e, t) {},
    "CH+Z": function(e, t) {},
    CSlQ: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("U7vG"),
            a = n("Odds"),
            o = n("NoSW"),
            s = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleLoad = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement(a.l, i.__assign({
                        size: this.props.size,
                        src: this.props.src,
                        alt: this.props.alt,
                        onLoad: this.handleLoad
                    }, Object(a._53)(this.props)))
                }, t = i.__decorate([Object(o.a)("CriticalAvatar")], t)
            }(r.Component),
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleLoad = function() {
                        t.props.latencyTracking.reportInteractive()
                    }, t
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement("img", i.__assign({
                        alt: this.props.alt,
                        className: this.props.className,
                        src: this.props.src,
                        srcSet: this.props.srcSet,
                        onLoad: this.handleLoad
                    }, Object(a._53)(this.props)))
                }, t = i.__decorate([Object(o.a)("CriticalImage")], t)
            }(r.Component),
            c = n("6sO2"),
            h = n("zCIC"),
            u = n("6BvN"),
            d = n("NXs7"),
            p = n("VAT8"),
            m = n("ZVME"),
            g = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return r.createElement("span", null, this.bytesToSize(this.props.totalSize))
                }, t.prototype.bytesToSize = function(e) {
                    if (0 === e) return "0 Bytes";
                    var t = Math.floor(Math.log(e) / Math.log(1024));
                    return Math.round(e / Math.pow(1024, t)) + " " + ["Bytes", "KB", "MB", "GB", "TB"][t]
                }, t
            }(r.Component),
            f = n("HW6M"),
            v = n("Hvhe"),
            w = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (this.props.metric.latencyStatus === v.a.Unknown || void 0 === this.props.metric.value) return r.createElement("span", {
                        className: "latency-metrics__dot-animation"
                    }, " ");
                    var e = this.props.metric.latencyStatus === v.a.Fail ? "red" : "green";
                    return r.createElement("span", {
                        className: "latency-metrics__item-number latency-metrics__item-" + e
                    }, Math.round(this.props.metric.value), " ms")
                }, t
            }(r.Component),
            b = (n("C2vp"), function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.onClickExpand = function() {
                        n.setState({
                            isExpanded: !n.state.isExpanded
                        })
                    };
                    var i = t.tracker.depth < 2;
                    return n.state = {
                        isExpanded: i
                    }, n
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    return this.props.tracker.isRoot ? r.createElement("div", {
                        className: "latency-metrics-component"
                    }, r.createElement("div", {
                        className: "request-latency-metrics__header"
                    }, r.createElement("div", {
                        className: "request-latency-metrics__header-url"
                    }, "Component"), r.createElement("div", {
                        className: "request-latency-metrics__header-time"
                    }, "Started"), r.createElement("div", {
                        className: "request-latency-metrics__header-size"
                    }, "Duration")), r.createElement("ul", null, this.renderItem())) : this.renderItem()
                }, t.prototype.renderItem = function() {
                    var e = this.props.tracker,
                        t = e.children.length > 0,
                        n = {
                            "latency-metrics-component__metrics": !0,
                            "latency-metrics-component__metrics-with-children": t
                        };
                    return r.createElement("li", null, r.createElement("div", {
                        className: f(n),
                        onClick: this.onClickExpand
                    }, r.createElement("div", {
                        className: "latency-metrics-component__left"
                    }, r.createElement("span", {
                        className: "latency-metrics-component__name"
                    }, e.componentName), " ", t && r.createElement("span", null, "(", e.children.length, ")")), r.createElement("div", {
                        className: "latency-metrics-component__time"
                    }, Math.round(e.relativeStartTime), " ms"), r.createElement("div", {
                        className: "latency-metrics-component__duration"
                    }, r.createElement(w, {
                        metric: e.componentDuration
                    }))), r.createElement("ul", null, this.state.isExpanded && e.children.map(function(e) {
                        return r.createElement(b, {
                            tracker: e,
                            key: e.id
                        })
                    })))
                }, t
            }(r.Component)),
            y = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    if (this.props.metric.latencyStatus === v.a.Unknown || void 0 === this.props.metric.value) return r.createElement("span", {
                        className: "latency-metrics__dot-animation"
                    }, " ");
                    var e = this.props.metric.latencyStatus === v.a.Fail ? "red" : "green";
                    return r.createElement("span", {
                        className: "latency-metrics__item-number latency-metrics__item-" + e
                    }, this.props.metric.value)
                }, t
            }(r.Component),
            _ = (n("zF1n"), function(e) {
                function t(t) {
                    return e.call(this, t) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return r.createElement("div", {
                        className: "query-metrics"
                    }, r.createElement("div", {
                        className: "query-metrics__header"
                    }, r.createElement("div", {
                        className: "query-metrics__header-batch"
                    }, "Batch"), r.createElement("div", {
                        className: "query-metrics__header-name"
                    }, "Name"), r.createElement("div", {
                        className: "query-metrics__header-time"
                    }, "Started"), r.createElement("div", {
                        className: "query-metrics__header-time"
                    }, "Request"), r.createElement("div", {
                        className: "query-metrics__header-time"
                    }, "Query")), this.props.queryMetrics.map(function(t) {
                        return e.renderItem(t)
                    }))
                }, t.prototype.renderItem = function(e) {
                    var t = e.queryID;
                    return r.createElement("div", {
                        className: "query-metrics__item",
                        key: t
                    }, r.createElement("div", {
                        className: "query-metrics__item-batch"
                    }, e.batchID), r.createElement("div", {
                        className: "query-metrics__item-name"
                    }, this.renderQueryTitle(e)), r.createElement("div", {
                        className: "query-metrics__item-time"
                    }, Math.round(e.relativeStartTime), " ms"), r.createElement("div", {
                        className: "query-metrics__item-time"
                    }, e.requestDuration && e.requestDuration.latencyStatus && r.createElement(w, {
                        metric: e.requestDuration
                    })), r.createElement("div", {
                        className: "query-metrics__item-time"
                    }, r.createElement(w, {
                        metric: e.queryDuration
                    })))
                }, t.prototype.renderQueryTitle = function(e) {
                    var t = e.variables && e.variables;
                    return t && t.id ? r.createElement("span", null, e.operationName, " (id: ", t.id, ")") : r.createElement("span", null, e.operationName)
                }, t
            }(r.Component)),
            E = (n("kLsX"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return i.__extends(t, e), t.prototype.render = function() {
                    var e = this;
                    return r.createElement("div", {
                        className: "request-latency-metrics"
                    }, r.createElement("div", {
                        className: "request-latency-metrics__header"
                    }, r.createElement("div", {
                        className: "request-latency-metrics__header-url"
                    }, "Url"), r.createElement("div", {
                        className: "request-latency-metrics__header-time"
                    }, "Started"), r.createElement("div", {
                        className: "request-latency-metrics__header-size"
                    }, "Size"), r.createElement("div", {
                        className: "request-latency-metrics__header-time"
                    }, "Time")), this.props.metricsGroup.metrics.map(function(t) {
                        return e.renderItem(t)
                    }))
                }, t.prototype.getDisplayLink = function(e) {
                    var t = new URL(e),
                        n = t.hostname + t.pathname;
                    if (n.length < 24) return n;
                    var i = t.pathname.substring(t.pathname.lastIndexOf("/"));
                    i || c.i.warn("Failed to parse url", {
                        url: t,
                        fileName: i
                    });
                    var r = i.split(".");
                    return 3 === r.length && (i = r[0] + "." + r[2]), i.length > 24 && (i = i.substring(0, 16) + "..." + i.substring(i.lastIndexOf(".") - 4)), t.hostname + i
                }, t.prototype.renderItem = function(e) {
                    var t = e.networkEvent,
                        n = t.request_url + ":" + t.duration + ":" + t.start_time;
                    return r.createElement("div", {
                        className: "request-latency-metrics__item",
                        key: n
                    }, r.createElement("div", {
                        className: "request-latency-metrics__item-url",
                        title: t.request_url
                    }, r.createElement("div", null, this.getDisplayLink(t.request_url))), r.createElement("div", {
                        className: "request-latency-metrics__item-time"
                    }, Math.round(e.relativeStartTime), " ms"), r.createElement("div", {
                        className: "request-latency-metrics__item-size"
                    }, t.transfer_size && t.transfer_size > 0 ? r.createElement(g, {
                        totalSize: t.transfer_size
                    }) : r.createElement("span", null)), r.createElement("div", {
                        className: "request-latency-metrics__item-time"
                    }, r.createElement(w, {
                        metric: e.duration
                    })))
                }, t
            }(r.Component)),
            C = function() {
                function e() {}
                return e.getComponentStats = function(t) {
                    var n = 0,
                        i = 0,
                        r = 0,
                        a = 0;
                    e.updateLatencyStatus(t.rootInitDuration, 800), e.updateLatencyStatus(t.pageLoadDuration, 2e3), e.updateLatencyStatus(t.componentDuration, 2e3);
                    var o = e.flattenTrackers(t);
                    o.forEach(function(t) {
                        e.updateLatencyStatus(t.componentDuration, 400)
                    });
                    var s = o.map(function(e) {
                        return e.componentDuration.value || 0
                    });
                    s.length > 0 && (n = s.reduce(function(e, t) {
                        return e + t
                    }), i = Math.max.apply(Math, s), a = Math.min.apply(Math, s), r = n / s.length);
                    var l = {};
                    return o.forEach(function(e) {
                        l[e.componentDuration.latencyStatus] || (l[e.componentDuration.latencyStatus] = 0), l[e.componentDuration.latencyStatus]++
                    }), {
                        rootTracker: t,
                        average: e.getLatencyStatus(r, 400),
                        count: e.getLatencyStatus(o.length, 200),
                        max: e.getLatencyStatus(i, 400),
                        min: e.getLatencyStatus(a, 400),
                        countByStatus: l
                    }
                }, e.getNetworkStats = function(t) {
                    var n = t.networkEvents.filter(function(e) {
                        return e.isPrePageload
                    });
                    n.forEach(function(t) {
                        e.updateLatencyStatus(t.duration, 150)
                    });
                    var i = n.map(function(e) {
                            return e.networkEvent.duration
                        }),
                        r = n.map(function(e) {
                            return e.networkEvent.transfer_size || 0
                        }),
                        a = 0,
                        o = 0,
                        s = 0,
                        l = 0,
                        c = 0;
                    i.length && (a = i.reduce(function(e, t) {
                        return e + t
                    }), o = r.reduce(function(e, t) {
                        return e + t
                    }), s = Math.max.apply(Math, i), l = Math.min.apply(Math, i), c = a / i.length), n.sort(function(e, t) {
                        return (t.duration.value || 0) - (e.duration.value || 0)
                    });
                    var h = {};
                    return n.forEach(function(e) {
                        h[e.duration.latencyStatus] || (h[e.duration.latencyStatus] = 0), h[e.duration.latencyStatus]++
                    }), {
                        metrics: n,
                        average: e.getLatencyStatus(c, 150),
                        count: e.getLatencyStatus(n.length, 200),
                        max: e.getLatencyStatus(s, 150),
                        min: e.getLatencyStatus(l, 150),
                        totalSize: o,
                        countByStatus: h
                    }
                }, e.getQueryBatchStats = function(t) {
                    var n = t.queryBatchMetrics,
                        i = n.map(function(e) {
                            return e.slowestQueryInBatch || 0
                        }),
                        r = Math.max.apply(Math, i),
                        a = {
                            batchCount: {
                                value: n.length,
                                latencyStatus: v.a.Unknown
                            },
                            slowestQuery: {
                                value: r,
                                latencyStatus: v.a.Unknown
                            }
                        };
                    return e.updateLatencyStatus(a.batchCount, 3), e.updateLatencyStatus(a.slowestQuery, 150), a
                }, e.getQueryStats = function(t) {
                    var n = 0,
                        i = 0,
                        r = 0,
                        a = t.queryEvents;
                    a.forEach(function(t) {
                        e.updateLatencyStatus(t.requestDuration, 150), e.updateLatencyStatus(t.queryDuration, 150)
                    });
                    var o = a.map(function(e) {
                        return e.queryDuration.value || 0
                    });
                    o.length > 0 && (n = o.reduce(function(e, t) {
                        return e + t
                    }), i = Math.max.apply(Math, o), r = n / o.length), a.sort(function(e, t) {
                        return (t.queryDuration.value || 0) - (e.queryDuration.value || 0)
                    });
                    var s = {};
                    return a.forEach(function(e) {
                        s[e.queryDuration.latencyStatus] || (s[e.queryDuration.latencyStatus] = 0), s[e.queryDuration.latencyStatus]++
                    }), {
                        metrics: a,
                        count: e.getLatencyStatus(a.length, 200),
                        max: e.getLatencyStatus(i, 150),
                        average: e.getLatencyStatus(r, 150),
                        min: e.getLatencyStatus(0, 150),
                        countByStatus: s
                    }
                }, e.getLatencyStatus = function(e, t) {
                    if (void 0 === e) return {
                        value: e,
                        latencyStatus: v.a.Unknown
                    };
                    return {
                        value: e,
                        latencyStatus: e > t ? v.a.Fail : v.a.Pass
                    }
                }, e.updateLatencyStatus = function(e, t) {
                    e && void 0 !== e.value && (e.latencyStatus = e.value > t ? v.a.Fail : v.a.Pass)
                }, e.flattenTrackers = function(t, n) {
                    return n || (n = []), t.isRoot || n.push(t), t.children.forEach(function(t) {
                        e.flattenTrackers(t, n)
                    }), n
                }, e
            }(),
            k = (n("5EfE"), "twilight.perf-hide"),
            L = "twilight.perf-size",
            S = "twilight.perf-tab",
            T = 3,
            x = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.renderTab = function(e, t, i) {
                        var o = n.state.selectedTab === e;
                        return r.createElement(a.W, {
                            display: a.N.Flex,
                            alignItems: a.c.Center,
                            padding: .5,
                            margin: {
                                right: 1
                            }
                        }, r.createElement("button", {
                            onClick: function() {
                                return n.onClickTab(e)
                            },
                            className: "latency-metrics__button" + (o ? " latency-metrics__button--selected" : "")
                        }, t, i && n.renderTabBubble(i)))
                    }, n.renderTabBubble = function(e) {
                        return r.createElement(a._2, {
                            margin: {
                                left: .5
                            }
                        }, r.createElement(a._6, {
                            label: e.toString(),
                            type: a._7.Notification
                        }))
                    }, n.onClickTab = function(e) {
                        c.k.set(S, e), n.setState({
                            selectedTab: e
                        })
                    }, n.onLatencyUpdate = function() {
                        var e = C.getComponentStats(n.tracker),
                            t = C.getNetworkStats(n.tracker),
                            i = C.getQueryStats(n.tracker),
                            r = C.getQueryBatchStats(n.tracker),
                            a = n.tracker.getCustomEvents();
                        n.setState({
                            componentStats: e,
                            networkStats: t,
                            queryStats: i,
                            queryBatchStats: r,
                            customEvents: a
                        })
                    }, n.onClickWindowSize = function() {
                        var e = n.state.size + 1;
                        e > T && (e = 0), c.k.set(L, e.toString()), n.setState({
                            size: e
                        })
                    }, n.onClickClose = function() {
                        n.setState({
                            hidden: !0
                        })
                    }, n.tracker = t.benchmarking.getRootLatencyTracker(), n.state = {
                        hidden: c.k.get(k, !1),
                        selectedTab: c.k.get(S, "overview"),
                        size: c.k.get(L, 0),
                        componentStats: C.getComponentStats(n.tracker),
                        networkStats: C.getNetworkStats(n.tracker),
                        queryStats: C.getQueryStats(n.tracker),
                        queryBatchStats: C.getQueryBatchStats(n.tracker),
                        customEvents: n.tracker.getCustomEvents()
                    }, n.tracker.subscribeToUpdates(n.onLatencyUpdate), n
                }
                return i.__extends(t, e), t.prototype.componentWillMount = function() {
                    var e = this;
                    window.addEventListener("keydown", function(t) {
                        t.keyCode === u.a.P && t.shiftKey && e.state.hidden ? (c.k.remove(k), e.setState({
                            hidden: !1
                        })) : t.keyCode === u.a.P && t.shiftKey && !e.state.hidden && (c.k.set(k, !0), e.setState({
                            hidden: !0
                        }))
                    })
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("keydown")
                }, t.prototype.render = function() {
                    return this.state.hidden ? null : r.createElement(a._2, {
                        className: "latency-metrics latency-metrics__size-" + this.state.size + " " + Object(p.c)(d.a.Dark),
                        position: a._9.Fixed,
                        padding: {
                            y: 1
                        }
                    }, r.createElement(a._2, {
                        className: "latency-metrics__header-container",
                        display: a.N.Flex,
                        justifyContent: a._1.Between,
                        flexWrap: a.Q.NoWrap,
                        alignItems: a.c.Start,
                        padding: {
                            bottom: 1
                        },
                        margin: {
                            x: 1
                        }
                    }, r.createElement(a._2, {
                        display: a.N.Flex,
                        flexShrink: 0
                    }, this.renderTab("overview", "Overview"), this.renderTab("components", "Components", this.state.componentStats.countByStatus[v.a.Fail]), this.renderTab("queries", "Queries", this.state.queryStats.countByStatus[v.a.Fail]), this.renderTab("requests", "Requests", this.state.networkStats.countByStatus[v.a.Fail])), r.createElement(a._2, {
                        className: "latency-metrics__controls",
                        display: a.N.Flex,
                        flexShrink: 0
                    }, r.createElement(a.v, {
                        onClick: this.onClickWindowSize,
                        icon: a._16.Maximize,
                        size: a.x.Small,
                        overlay: !0,
                        ariaLabel: "Change Size"
                    }), r.createElement(a.v, {
                        onClick: this.onClickClose,
                        icon: a._16.Close,
                        size: a.x.Small,
                        overlay: !0,
                        ariaLabel: "Close"
                    }))), r.createElement(a._2, {
                        className: "latency-metrics__body",
                        display: a.N.Flex,
                        flexDirection: a.P.Column,
                        flexGrow: 1,
                        fullHeight: !0,
                        overflow: a._5.Hidden
                    }, "overview" === this.state.selectedTab && this.renderOverviewTab(), "components" === this.state.selectedTab && this.renderComponentsTab(), "queries" === this.state.selectedTab && this.renderQueriesTab(), "requests" === this.state.selectedTab && this.renderRequestsTab()), r.createElement("div", {
                        className: "latency-metrics__footer"
                    }, r.createElement("span", {
                        className: "latency-metrics__hint-text"
                    }, 'Press "Shift + P" to toggle latency metrics')))
                }, t.prototype.renderOverviewTab = function() {
                    var e = this,
                        t = this.state.networkStats,
                        n = this.state.queryStats,
                        i = this.state.queryBatchStats,
                        o = this.state.componentStats;
                    return r.createElement(h.b, {
                        className: "latency-metrics__scroller"
                    }, r.createElement(a._2, null, r.createElement(a._2, {
                        className: "latency-metrics__item",
                        display: a.N.Flex,
                        justifyContent: a._1.Between,
                        flexWrap: a.Q.NoWrap
                    }, r.createElement(a._2, {
                        className: "latency-metrics__item-left latency-metrics__item-name",
                        ellipsis: !0
                    }, r.createElement("span", null, m.c.FirstPaint)), r.createElement(a._2, {
                        className: "latency-metrics__item-right",
                        display: a.N.Flex,
                        flexWrap: a.Q.NoWrap,
                        flexShrink: 0
                    }, r.createElement("div", {
                        className: "latency-metrics__item-number"
                    }, this.tracker.isFirstLoad ? r.createElement(w, {
                        metric: this.tracker.firstPaint
                    }) : r.createElement("span", null, "n/a")))), r.createElement(a._2, {
                        className: "latency-metrics__item",
                        display: a.N.Flex,
                        justifyContent: a._1.Between,
                        flexWrap: a.Q.NoWrap
                    }, r.createElement(a._2, {
                        className: "latency-metrics__item-left latency-metrics__item-name",
                        ellipsis: !0
                    }, r.createElement("span", null, "Initialize")), r.createElement(a._2, {
                        className: "latency-metrics__item-right",
                        display: a.N.Flex,
                        flexWrap: a.Q.NoWrap,
                        flexShrink: 0
                    }, r.createElement("div", {
                        className: "latency-metrics__item-number"
                    }, this.tracker.isFirstLoad ? r.createElement(w, {
                        metric: this.tracker.rootInitDuration
                    }) : r.createElement("span", null, "n/a")))), r.createElement(a._2, {
                        className: "latency-metrics__item",
                        display: a.N.Flex,
                        justifyContent: a._1.Between,
                        flexWrap: a.Q.NoWrap
                    }, r.createElement(a._2, {
                        className: "latency-metrics__item-left latency-metrics__item-name",
                        ellipsis: !0
                    }, r.createElement("span", null, this.tracker.isFirstLoad ? "Page Load" : "App Transition")), r.createElement("div", {
                        className: "latency-metrics__item-number"
                    }, r.createElement(w, {
                        metric: this.tracker.pageLoadDuration
                    }))), r.createElement(a._2, {
                        className: "latency-metrics__item",
                        display: a.N.Flex,
                        justifyContent: a._1.Between,
                        flexWrap: a.Q.NoWrap
                    }, r.createElement(a._2, {
                        className: "latency-metrics__item-left latency-metrics__item-name",
                        ellipsis: !0
                    }, r.createElement("span", null, "Components (", o.count.value, ")")), r.createElement("div", {
                        className: "latency-metrics__item-number"
                    }, r.createElement("span", {
                        className: "latency-metrics__item-stats"
                    }, r.createElement("span", {
                        className: "latency-metrics__item-stats-label"
                    }, "Slowest:"), r.createElement(w, {
                        metric: o.max
                    }), r.createElement("span", {
                        className: "latency-metrics__item-stats-label"
                    }, "Average:"), r.createElement(w, {
                        metric: o.average
                    })))), r.createElement(a._2, {
                        className: "latency-metrics__item",
                        display: a.N.Flex,
                        justifyContent: a._1.Between,
                        flexWrap: a.Q.NoWrap
                    }, r.createElement(a._2, {
                        className: "latency-metrics__item-left latency-metrics__item-name",
                        ellipsis: !0
                    }, r.createElement("span", null, "Queries (", n.count.value, ")")), r.createElement("div", {
                        className: "latency-metrics__item-number"
                    }, r.createElement("span", {
                        className: "latency-metrics__item-stats"
                    }, r.createElement("span", {
                        className: "latency-metrics__item-stats-label"
                    }, "Batches:"), r.createElement(y, {
                        metric: i.batchCount
                    }), r.createElement("span", {
                        className: "latency-metrics__item-stats-label"
                    }, "Slowest:"), r.createElement(w, {
                        metric: n.max
                    }), r.createElement("span", {
                        className: "latency-metrics__item-stats-label"
                    }, "Average:"), r.createElement(w, {
                        metric: n.average
                    })))), r.createElement(a._2, {
                        className: "latency-metrics__item",
                        display: a.N.Flex,
                        justifyContent: a._1.Between,
                        flexWrap: a.Q.NoWrap
                    }, r.createElement(a._2, {
                        className: "latency-metrics__item-left latency-metrics__item-name",
                        ellipsis: !0
                    }, r.createElement("span", null, "Requests (", t.count.value, ")")), r.createElement("div", {
                        className: "latency-metrics__item-number"
                    }, r.createElement("span", {
                        className: "latency-metrics__item-stats"
                    }, r.createElement("span", {
                        className: "latency-metrics__item-stats-label"
                    }, "Slowest:"), r.createElement(w, {
                        metric: t.max
                    }), r.createElement("span", {
                        className: "latency-metrics__item-stats-label"
                    }, "Average:"), r.createElement(w, {
                        metric: t.average
                    }), r.createElement("span", {
                        className: "latency-metrics__item-stats-label"
                    }, "Size:"), " ", r.createElement(g, {
                        totalSize: t.totalSize
                    })))), Object.keys(this.state.customEvents).map(function(t) {
                        return e.renderCustomEventGroup(t, e.state.customEvents[t])
                    })))
                }, t.prototype.renderCustomEventGroup = function(e, t) {
                    var n = this;
                    return r.createElement(a._2, {
                        key: e,
                        className: "latency-metrics__item",
                        display: a.N.Flex,
                        justifyContent: a._1.Between,
                        flexWrap: a.Q.NoWrap
                    }, r.createElement(a._2, {
                        className: "latency-metrics__item-left latency-metrics__item-name",
                        ellipsis: !0
                    }, r.createElement("span", null, e)), r.createElement("div", {
                        className: "latency-metrics__item-number"
                    }, t.map(function(e) {
                        return n.renderCustomEvent(e)
                    })))
                }, t.prototype.renderCustomEvent = function(e) {
                    return r.createElement("span", {
                        key: e.key
                    }, r.createElement("span", {
                        className: "latency-metrics__item-stats-label"
                    }, e.label, ":"), " ", r.createElement(w, {
                        metric: e.duration
                    }))
                }, t.prototype.renderComponentsTab = function() {
                    return r.createElement(h.b, {
                        className: "latency-metrics__scroller"
                    }, r.createElement(b, {
                        tracker: this.tracker
                    }))
                }, t.prototype.renderRequestsTab = function() {
                    return r.createElement(h.b, {
                        className: "latency-metrics__scroller"
                    }, r.createElement(E, {
                        metricsGroup: this.state.networkStats
                    }))
                }, t.prototype.renderQueriesTab = function() {
                    return r.createElement(h.b, {
                        className: "latency-metrics__scroller"
                    }, r.createElement(_, {
                        queryMetrics: this.tracker.queryEvents
                    }))
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return s
        }), n.d(t, "b", function() {
            return l
        }), n.d(t, "c", function() {
            return x
        }), n.d(t, "d", function() {
            return o.a
        })
    },
    CYoy: function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return i
        }), n.d(t, "b", function() {
            return r
        }), n.d(t, "a", function() {
            return a
        }), n.d(t, "e", function() {
            return o
        }), n.d(t, "c", function() {
            return s
        });
        var i;
        ! function(e) {
            e.AutohostSettings = "autohost_settings", e.BitsLandingPage = "bits_landing", e.Browse = "browse", e.BrowseCommunities = "browse_communities", e.BrowseCreative = "browse_creative", e.BrowseForYou = "browse_for_you", e.Channel = "channel", e.ChannelClips = "channel_clips", e.ChannelClipsManager = "my_clips_channel", e.ChannelEvents = "channel_events", e.ChannelVideos = "channel_vods", e.ChannelCollections = "channel_collections", e.Chat = "chat", e.ClipsGame = "clips_game", e.Dashboard = "dashboard", e.DashboardAchievements = "dashboard/achievements", e.DashboardBounties = "dashboard/bounties", e.DashboardChannelAnalytics = "dashboard/channel-analytics", e.DashboardExtensions = "dashboard/extensions", e.DashboardSettingsIndex = "dashboard/settings", e.DashboardStreamSummary = "dashboard/stream-summary", e.Directory = "directory", e.DirectoryPopular = "directory.popular", e.EmailVerification = "email_verification", e.EventDetails = "event_details", e.Followers = "followers", e.Follows = "follows", e.FrontPage = "home", e.GameDetail = "game_detail", e.Inventory = "inventory", e.MyClipsManager = "my_clips", e.None = "", e.OnboardingCommunitySelection = "onboarding/community-selection", e.StoreMerch = "store-merch", e.VideoWatchPage = "vod", e.SubsLandingPage = "subs-landing", e.SettingsPage = "settings", e.SubsBroadcasterPage = "subs-broadcaster", e.VideoManager = "video_manager", e.VideoManagerCollectionManager = "video_manager_collections", e.VideoManagerCollectionEditor = "video_manager_collection_editor"
        }(i || (i = {}));
        var r;
        ! function(e) {
            e.Channels = "channels", e.Communities = "communities", e.Games = "games", e.Hosts = "hosts", e.Mixed = "mixed", e.Videos = "vods"
        }(r || (r = {}));
        var a;
        ! function(e) {
            e.ChatCard = "chat_card", e.CollectionCard = "collection_card", e.CollectionItemCard = "collection_item_card", e.Community = "community", e.EventLive = "event_suggestion_live", e.EventPast = "event_suggestion_past", e.EventUpcoming = "event_suggestion_upcoming", e.Following = "directory_following", e.FollowedChannels = "followed_channels", e.Game = "game", e.Games = "directory_games", e.Host = "host_channel", e.Live = "live_channel", e.LiveHost = "live_host", e.Logo = "twitch_logo", e.Popular = "popular_games", e.PopularOverallVideos = "popular_overall_videos", e.PopularVideos = "popular_videos", e.Presence = "friend_presence", e.RecentVideos = "recent_videos", e.LatestCollection = "latest_collection", e.RecommendedChannels = "recommended_channels", e.RecommendedVideos = "recommended_videos", e.ResumeWatchingVideos = "resume_watching_videos", e.SelfChannel = "self_channel", e.SuggestedVideos = "suggested_videos", e.TextLink = "text_link", e.User = "user", e.Video = "video"
        }(a || (a = {}));
        var o;
        ! function(e) {
            e.AnonFrontPage = "anon_home", e.Browse = "twitch_browse_directory", e.BrowseForYou = "twitch_browse_for_you", e.Channel = "twitch_channel", e.ChannelCollections = "channel_collections", e.ChannelVideos = "channel_videos", e.Chat = "twitch_chat", e.ChatNotification = "chat_bar_notification", e.Community = "twitch_community_directory", e.Game = "twitch_game_directory", e.GameVideos = "twitch_video_game_directory", e.EventDetails = "event_details", e.FinishWatching = "finish_watching", e.Following = "following_directory", e.NavSearch = "header_search", e.NotificationCenter = "notification_center", e.NotificationToast = "notification_toast", e.SideNav = "twitch_socialcolumn", e.TopNav = "twitch_topnav", e.VideoEmbed = "vod_embed", e.VideoManagerCollectionEditor = "video_manager_collection_editor", e.VideoManagerCollectionManager = "video_manager_collection_manager", e.VideoNotFoundPage = "vod_not_found", e.VideoWatchPage = "vod", e.Whispers = "conversations"
        }(o || (o = {}));
        var s;
        ! function(e) {
            e.Channels = "channels", e.Communities = "communities", e.Games = "games", e.Hosts = "hosts", e.Overview = "overview", e.Videos = "videos"
        }(s || (s = {}))
    },
    Ejve: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Dev = 1] = "Dev", e[e.Production = 2] = "Production"
        }(i || (i = {}))
    },
    FTZM: function(e, t) {},
    FTbL: function(e, t) {},
    FlHF: function(e, t) {},
    FuaS: function(e, t, n) {
        "use strict";

        function i() {
            return void 0 === r && (r = a.get(s) || null), r
        }
        t.a = i, t.b = function(e) {
            var t = [];
            if (!e || e.includeChosenLanguage) {
                var n = i();
                n && t.push(n)
            }
            return navigator.languages ? t = t.concat(navigator.languages.slice()) : navigator.language ? t.push(navigator.language) : navigator.userLanguage && t.push(navigator.userLanguage), t
        }, t.c = function(e) {
            r = e, a.set(s, e, {
                expires: 365,
                domain: Object(o.a)(),
                secure: "https:" === window.location.protocol
            })
        };
        var r, a = n("lbHh"),
            o = (n.n(a), n("o/qv")),
            s = "language"
    },
    HM6l: function(e, t, n) {
        "use strict";
        t.a = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            })
        }, t.b = function() {
            return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            })
        }
    },
    HWUk: function(e, t) {},
    Hvhe: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Unknown = 0] = "Unknown", e[e.Pass = 1] = "Pass", e[e.Fail = 2] = "Fail"
        }(i || (i = {}))
    },
    HyyJ: function(e, t) {},
    I6b2: function(e, t) {},
    IWpL: function(e, t, n) {
        "use strict";
        var i = n("RSE+");
        n.d(t, "SpadeFollowingCategory", function() {
            return i.a
        }), n.d(t, "SpadePlatform", function() {
            return i.b
        }), n.d(t, "SpadeVideoBroadcastType", function() {
            return i.c
        }), n.d(t, "TwitchDataType", function() {
            return i.d
        });
        var r = n("kDWL");
        n.d(t, "SpadeEventType", function() {
            return r.a
        });
        var a = n("CYoy");
        n.d(t, "PageviewContent", function() {
            return a.a
        }), n.d(t, "PageviewDirectoryContentType", function() {
            return a.b
        }), n.d(t, "PageviewFollowingTab", function() {
            return a.c
        }), n.d(t, "PageviewLocation", function() {
            return a.d
        }), n.d(t, "PageviewMedium", function() {
            return a.e
        });
        var o = n("NU58");
        n.n(o);
        n.o(o, "ShareItemContext") && n.d(t, "ShareItemContext", function() {
            return o.ShareItemContext
        }), n.o(o, "ShareItemType") && n.d(t, "ShareItemType", function() {
            return o.ShareItemType
        }), n.o(o, "SourceItemType") && n.d(t, "SourceItemType", function() {
            return o.SourceItemType
        });
        var s = n("y+pq");
        n.d(t, "ShareItemContext", function() {
            return s.a
        }), n.d(t, "ShareItemType", function() {
            return s.b
        }), n.d(t, "SourceItemType", function() {
            return s.c
        })
    },
    Itsn: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return r
        });
        var i = "twilight.dynamic_settings_overrides",
            r = function() {
                function e(e) {
                    if (this.overrides = {}, e) {
                        this.logger = e.logger.withCategory("dynamic-settings");
                        var t = e.storage.get(i, {});
                        Object.keys(t).length > 0 && (this.overrides = t, this.logger.debug("Loaded dynamic settings overrides", {
                            overrides: this.overrides
                        }))
                    }
                }
                return e.prototype.get = function(e, t) {
                    if ("experiments" === e) return t;
                    if (void 0 !== this.overrides[e]) return this.overrides[e];
                    var n = window.__twilightSettings && window.__twilightSettings[e];
                    return void 0 !== n ? n : t
                }, e
            }()
    },
    Iw4B: function(e, t, n) {
        "use strict";

        function i(e) {
            var t = l.get(e);
            return t || (t = e.name + ":" + Object(a.a)(), l.set(e, t), s[t] = e), t
        }
        t.a = function(e) {
            return e.modal.modalID ? s[e.modal.modalID] : null
        }, t.b = function(e, t) {
            return e.modal.show && e.modal.modalID === i(t)
        };
        var r = n("6sO2"),
            a = n("HM6l"),
            o = n("V5M+"),
            s = {},
            l = new Map;
        r.n.store.registerReducer("modal", function(e, t) {
            switch (void 0 === e && (e = {
                show: !1,
                modalID: null,
                modalProps: null
            }), t.type) {
                case o.b:
                    return {
                        show: !0,
                        modalID: i(t.modalComponent),
                        modalProps: t.modalProps
                    };
                case o.a:
                    return {
                        show: !1,
                        modalID: null,
                        modalProps: null
                    };
                default:
                    return e
            }
        })
    },
    J4ib: function(e, t, n) {
        "use strict";

        function i(e) {
            for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = "", i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * t.length));
            return n
        }

        function r(e) {
            return !!(e && e.timing && e.getEntriesByType && e.setResourceTimingBufferSize && e.clearResourceTimings)
        }
        var a, o = n("U7vG"),
            s = n("3zLD"),
            l = n("O27J"),
            c = n("RH2O"),
            h = n("Ejve"),
            u = "https://ad.doubleclick.net/ddm/ad/",
            d = n("/wlI"),
            p = function() {
                function e(e) {
                    this.detect = !1, this.logger = e.logger.withCategory("ad-block-detector"), this.logger.debug("Created.")
                }
                return e.prototype.detectAdBlock = function() {
                    this.logger.debug("Start ad block tests."), this.detectEasyList(), this.detectEasyListPrivacy()
                }, e.prototype.detectEasyList = function() {
                    var e = this;
                    fetch("" + u + i(5) + "/" + i(10) + "/" + i(6) + "'/;ord='" + Date.now(), {
                        method: "GET",
                        mode: "no-cors"
                    }).then(function() {
                        e.logger.debug("DoubleClick is reachable.")
                    }).catch(function(t) {
                        e.logger.debug("DoubleClick is unreachable.", {
                            err: t
                        }), e.detect = !0
                    })
                }, e.prototype.detectEasyListPrivacy = function() {
                    var e = this,
                        t = {
                            event: "dummy-event",
                            properties: {
                                time: Date.now(),
                                random1: i(256),
                                random2: i(256),
                                random3: i(256),
                                random4: i(256)
                            }
                        },
                        n = {
                            method: "POST",
                            body: new Blob([Object(d.a)([t])], {
                                type: "application/x-www-form-urlencoded; charset=UTF-8"
                            })
                        };
                    fetch("https://spade.twitch.tv", n).then(function(t) {
                        e.logger.debug("Spade is reachable.", {
                            status: t.status
                        })
                    }).catch(function(t) {
                        e.logger.debug("Spade unreachable: ", {
                            err: t
                        }), e.detect = !0
                    })
                }, e.prototype.addTwitchGlobal = function() {
                    window.Twitch || (window.Twitch = {}), window.Twitch.sentinel ? this.logger.debug("Sentinel global already exists.", {
                        sentinel: window.Twitch.sentinel
                    }) : (window.Twitch.sentinel = this, this.logger.debug("Setting global sentinel."))
                }, e
            }(),
            m = n("TToO"),
            g = n("lbHh"),
            f = n("JMIN"),
            v = n("OAwv"),
            w = n("6sO2"),
            b = {
                "4f952587-515d-44ac-b0cc-86769f543c72": "no",
                "4d3d19a7-38c5-4328-9730-7d99565d5edd": "no",
                "ef25ca44-13bd-4e89-99d2-f9939c013fec": "off",
                "a9667563-723a-4cf7-b253-674d9eef0a53": "control",
                "54b18ea6-2b6a-4ed7-9128-2497572d31e2": "control",
                "74156eb2-ed95-482c-b006-60c1428e8846": "control",
                "e9fe3136-84bc-4a61-9079-0c7df78abeb3": "control",
                "47c76558-9d79-4181-9e43-d7c440a1a148": "control",
                "9619b63b-2e9a-4e20-af4b-cce72346691d": "control",
                "29a37cfd-6a34-4624-970f-6b155b40636b": "control",
                "72c14aa9-d78d-4095-8f27-d97b9aac4233": "no",
                "afc307f3-4011-40ba-9406-56c474b5922b": "control",
                "1318509a-bf97-475d-acdc-df6a24ef6e3e": "none",
                "3763f4e7-c786-4000-a6c3-b91b9c774302": "control",
                "1adeeefb-a0cc-48a4-adbd-8c9a1bdaa06f": "no",
                "d6bb4aa4-efae-4031-96be-f08950d6c8f4": "shown",
                "db2180db-bc89-4f97-8bef-208b1782e18f": "off",
                "f866f89d-85de-4a5b-9b00-d97c791bc16d": "no",
                "47597570-dd4e-4996-85eb-86db164cae9c": "control",
                "7aa589f3-34d8-425f-8227-29007d50757e": "control",
                "0dc9a9c9-fee5-4b5f-a462-f07675713e5e": "control",
                "5cfa2a90-54f0-4dcc-b28c-45f33935718e": "control"
            },
            y = {
                TWILIGHT_ALL_THE_STATS: "4f952587-515d-44ac-b0cc-86769f543c72",
                TWILIGHT_PREMIERE_UPLOAD_FLOW: "4d3d19a7-38c5-4328-9730-7d99565d5edd",
                STREAMER_TRAILERS: "ef25ca44-13bd-4e89-99d2-f9939c013fec",
                TWILIGHT_WEB_ONBOARDING: "a9667563-723a-4cf7-b253-674d9eef0a53",
                TWILIGHT_WEB_ONBOARDING_FOLLOWING_FOR_YOU: "54b18ea6-2b6a-4ed7-9128-2497572d31e2",
                TWILIGHT_WEB_ONBOARDING_CHANNEL_RANKING: "74156eb2-ed95-482c-b006-60c1428e8846",
                TWILIGHT_WEB_ONBOARDING_CATEGORIES: "e9fe3136-84bc-4a61-9079-0c7df78abeb3",
                TWILIGHT_WEB_ONBOARDING_CATEGORIES_ANON_FRONT_PAGE: "47c76558-9d79-4181-9e43-d7c440a1a148",
                TWILIGHT_WEB_ONBOARDING_FOLLOW_CATEGORIES: "9619b63b-2e9a-4e20-af4b-cce72346691d",
                TWILIGHT_WEB_ONBOARDING_RANDOMIZED_GAMES: "29a37cfd-6a34-4624-970f-6b155b40636b",
                TWILIGHT_SUB_CHECKOUT_POPUP: "72c14aa9-d78d-4095-8f27-d97b9aac4233",
                TWILIGHT_VIDEO_FEATURO_EN: "afc307f3-4011-40ba-9406-56c474b5922b",
                TWILIGHT_VIDEOS_IN_SIDENAV: "1318509a-bf97-475d-acdc-df6a24ef6e3e",
                TWILIGHT_FENIX_DOWN: "3763f4e7-c786-4000-a6c3-b91b9c774302",
                TWILIGHT_PAYMENTS_MANAGEMENT_PAGE: "1adeeefb-a0cc-48a4-adbd-8c9a1bdaa06f",
                TWILIGHT_EVENT_GAME_DIRECTORY: "d6bb4aa4-efae-4031-96be-f08950d6c8f4",
                TWILIGHT_LEADERBOARDS: "db2180db-bc89-4f97-8bef-208b1782e18f",
                TWILIGHT_RAID_AUTO_JOIN: "f866f89d-85de-4a5b-9b00-d97c791bc16d",
                TWILIGHT_AML_RANKING_FOLLOWS: "47597570-dd4e-4996-85eb-86db164cae9c",
                TWILIGHT_GROWTH_EMAIL_VERIFY_BAR: "7aa589f3-34d8-425f-8227-29007d50757e",
                TWILIGHT_FOLLOWING_INDEX_LATEST_VIDEOS_V2: "0dc9a9c9-fee5-4b5f-a462-f07675713e5e",
                TWILIGHT_VOD_REDITUS: "5cfa2a90-54f0-4dcc-b28c-45f33935718e"
            },
            _ = {
                TWILIGHT_PREMIERE_UPLOAD_FLOW: "yes",
                TWILIGHT_PAYMENTS_MANAGEMENT_PAGE: "yes",
                TWILIGHT_VIDEOS_IN_SIDENAV: "all_content"
            },
            E = n("zcHb"),
            C = "twilight.ignore_experiments",
            k = function() {
                function e(e) {
                    this.ignoreExperiments = !1, this.logger = e.logger.withCategory("Experiment"), this.session = e.session, this.store = e.store, this.tracking = e.tracking, this.ignoreExperiments = e.storage.get(C, !1)
                }
                return e.prototype.getAssignment = function(e, t) {
                    return void 0 === t && (t = {}), m.__awaiter(this, void 0, void 0, function() {
                        var n, i, r, a, o;
                        return m.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return this.ignoreExperiments ? (this.logger.debug("Ingoring experiments because local storage key is present"), [2, null]) : [4, this.initialize()];
                                case 1:
                                    if (s.sent(), !y[e]) return this.logger.warn("Experiment name not in mapping", e), [2, null];
                                    if (n = y[e], !this.experiments[n]) return this.logger.warn("Unable to find experiment configuration", {
                                        name: e,
                                        id: n
                                    }), b[n] && this.overrides[n] ? (this.logger.warn("Using experiment override despite missing experiment configuration", {
                                        name: e,
                                        id: n,
                                        assignment: this.overrides[n]
                                    }), [2, this.overrides[n]]) : [2, null];
                                    if (i = this.experiments[n], !this.assignments[n]) return this.logger.warn("Unable to determine default assignment", {
                                        name: e,
                                        id: n,
                                        experiment: i
                                    }), [2, null];
                                    switch (r = this.assignments[n], this.overrides[n] ? a = this.overrides[n] : 3 === i.t ? t.channel ? a = Object(f.selectTreatment)(n, i, t.channel) : (this.logger.warn("Called getAssignment() for channel experiment with no channel", i), a = r) : a = r, i.t) {
                                        case 1:
                                            o = E.a.Device;
                                            break;
                                        case 2:
                                            o = E.a.User;
                                            break;
                                        case 3:
                                            o = E.a.Channel;
                                            break;
                                        default:
                                            o = void 0
                                    }
                                    return this.trackExperiment({
                                        assignment: a,
                                        channel: t.channel,
                                        id: n,
                                        name: i.name,
                                        version: i.v,
                                        type: o
                                    }), [2, a]
                            }
                        })
                    })
                }, e.prototype.trackExperiment = function(e) {
                    this.tracking.trackExperiment({
                        channel: e.channel || void 0,
                        device_id: this.session.deviceID,
                        login: this.login,
                        experiment_id: e.id,
                        experiment_group: e.assignment,
                        experiment_name: e.name,
                        experiment_version: e.version,
                        experiment_type: e.type
                    })
                }, e.prototype.initialize = function() {
                    return m.__awaiter(this, void 0, void 0, function() {
                        var e, t, n = this;
                        return m.__generator(this, function(i) {
                            return this.initializing ? [2, this.initializing] : (this.initializing = new Promise(function(e) {
                                return n.initializeComplete = e
                            }), window.__twilightSettings && window.__twilightSettings.experiments ? (this.experiments = window.__twilightSettings && window.__twilightSettings.experiments, (e = Object(f.validate)(this.experiments)) && (this.logger.error(e, "Invalid experiment configuration. Experiments will be default"), this.experiments = {})) : (this.logger.warn("Unable to get experiment data from dynamic settings. Experiments will be default."), this.experiments = {}), t = this.store.getState().session.user, this.overrides = this.determineOverrides(!(!t || !t.roles) && t.roles.isStaff), this.login = t ? t.login : void 0, this.assignments = this.determineAssignments(this.experiments, this.session.deviceID, this.login), this.logger.debug("Experiment settings determined", {
                                overrides: this.overrides,
                                assignments: this.assignments,
                                experiments: this.experiments
                            }), this.initializeComplete(), [2, this.initializing])
                        })
                    })
                }, e.prototype.determineOverrides = function(e) {
                    var t = this,
                        n = {};
                    e && Object.keys(_).forEach(function(e) {
                        y[e] ? _[e] && (n[y[e]] = _[e]) : t.logger.warn("Staff experiment name is not in mapping", e)
                    });
                    var i = {};
                    try {
                        var r = g.get(w.a.experimentsOverrideCookie);
                        if (r) {
                            var a = JSON.parse(r);
                            Object.keys(a).forEach(function(e) {
                                b[e] ? i[e] = a[e] : t.logger.warn("Cookie experiment ID is not in DEFAULT_ASSIGNMENTS mapping", e)
                            })
                        }
                    } catch (e) {
                        this.logger.warn("Unable to parse cookie overrides", e)
                    }
                    var o = {},
                        s = v.parse(window.location.search);
                    if (s.experiments) try {
                        var l = JSON.parse(s.experiments);
                        Object.keys(l).forEach(function(e) {
                            y[e] ? o[y[e]] = l[e] : t.logger.warn("URL override experiment name is not in mapping", e)
                        })
                    } catch (e) {
                        this.logger.warn("Unable to parse URL overrides", e)
                    }
                    return m.__assign({}, n, i, o)
                }, e.prototype.determineAssignments = function(e, t, n) {
                    var i = this,
                        r = {};
                    return Object.keys(b).forEach(function(a) {
                        if (e[a]) {
                            var o = e[a];
                            1 === o.t ? r[a] = Object(f.selectTreatment)(a, o, t) : 2 === o.t && n ? r[a] = Object(f.selectTreatment)(a, o, n) : r[a] = b[a]
                        } else i.logger.warn("Experiment is deprecated", a)
                    }), r
                }, e
            }(),
            L = n("IgU9"),
            S = n.n(L),
            T = function() {
                function e(e, t) {
                    this.store = e, this.logger = t.withCategory("pubsub")
                }
                return e.prototype.subscribe = function(e) {
                    var t = this;
                    this.driver || (this.driver = S.a.getInstance("production"));
                    var n = this.wrapMessageCallback(e.onMessage),
                        i = this.store.getState();
                    return this.driver.Listen({
                            topic: e.topic,
                            auth: i.session && i.session.user && i.session.user.authToken,
                            success: function() {
                                t.logger.debug("Subscribed to topic.", {
                                    opts: e
                                }), e.success && e.success()
                            },
                            failure: function(n) {
                                w.a.buildType === h.a.Production ? t.logger.warn("Failed to subscribe to topic.", {
                                    opts: e,
                                    err: n
                                }) : t.logger.error(new Error("Failed to subscribe to topic."), "Failed to subscribe to topic.", {
                                    opts: e,
                                    err: n
                                }), e.failure && e.failure(n)
                            },
                            message: n
                        }),
                        function() {
                            return t.unsubscribe(e, n)
                        }
                }, e.prototype.unsubscribe = function(e, t) {
                    var n = this;
                    this.driver.Unlisten({
                        topic: e.topic,
                        success: function() {
                            n.logger.debug("Unsubscribed from topic.", {
                                opts: e
                            })
                        },
                        failure: function(t) {
                            n.logger.error(new Error("Failed to unsubscribe from topic."), "Failed to unsubscribe from topic.", {
                                opts: e,
                                err: t
                            })
                        },
                        message: t
                    })
                }, e.prototype.wrapMessageCallback = function(e) {
                    var t = this;
                    return function(n) {
                        var i;
                        try {
                            i = JSON.parse(n)
                        } catch (e) {
                            return void t.logger.error(e, "Failed to parse message.", {
                                msg: n
                            })
                        }
                        e(i)
                    }
                }, e
            }(),
            x = function() {
                function e(e) {
                    this.currentPageComponentName = "", this.buildID = e.buildID, this.endpoint = e.endpoint, this.logger = e.logger.withCategory("sentinel"), this.session = e.session, this.store = e.store, this.logger.debug("Creating instance.", {
                        buildID: e.buildID,
                        endpoint: e.endpoint
                    })
                }
                return e.prototype.report = function(e) {
                    return m.__awaiter(this, void 0, void 0, function() {
                        var t, n, i, r;
                        return m.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    t = {
                                        buildId: this.buildID,
                                        clientTime: Date.now(),
                                        deviceId: this.session.deviceID,
                                        pageComponentName: this.currentPageComponentName,
                                        pageSessionId: this.session.pageviewID,
                                        logEntries: e,
                                        platform: "web",
                                        product: "twilight",
                                        userAgent: navigator.userAgent,
                                        userId: 0,
                                        username: ""
                                    };
                                    try {
                                        n = this.store && this.store.getState().session.user, t.userId = n ? Number(n.id) : 0, t.username = n ? n.login : ""
                                    } catch (e) {
                                        this.logger.warn("Failed to get user data from the global store.", e)
                                    }
                                    this.logger.debug("Reporting error.", t), i = 1, a.label = 1;
                                case 1:
                                    if (!(i <= 3)) return [3, 6];
                                    a.label = 2;
                                case 2:
                                    return a.trys.push([2, 4, , 5]), [4, fetch(this.endpoint, {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json; charset=UTF-8",
                                            Accept: "application/json; charset=UTF-8"
                                        },
                                        body: JSON.stringify(t)
                                    })];
                                case 3:
                                    return a.sent(), this.logger.debug("Report sent."), [2];
                                case 4:
                                    return r = a.sent(), this.logger.warn("Failed to submit error report.", {
                                        attempt: i,
                                        maxAttempts: 3
                                    }, r), [3, 5];
                                case 5:
                                    return ++i, [3, 1];
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.setPageComponentName = function(e) {
                    this.currentPageComponentName = e
                }, e
            }(),
            N = n("vH/s"),
            z = n("I9Rr"),
            R = function() {
                function e(e, t) {
                    this.logger = e.withCategory("tmi");
                    var n = this.getConnectionOptions(t);
                    this.disabled = n.disabled, this.logger.debug("Creating TMI client", n), this.client = new z.a({
                        connection: n,
                        logger: this.logger
                    })
                }
                return e.prototype.setIdentity = function(e, t) {
                    this.logger.debug("Setting identity", {
                        username: e,
                        authToken: t
                    }), this.client.updateIdentity({
                        username: e,
                        authToken: t
                    })
                }, e.prototype.connect = function() {
                    return m.__awaiter(this, void 0, void 0, function() {
                        var e, t;
                        return m.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if (this.disabled) return [2];
                                    n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, 4, 5]), this.pendingConnection ? this.logger.debug("Waiting on the pending connection...") : (this.logger.debug("Establishing a new connection to TMI..."), this.pendingConnection = this.client.connect()), [4, this.pendingConnection];
                                case 2:
                                    return e = n.sent(), this.logger.debug("Connection completed", e), [3, 5];
                                case 3:
                                    return t = n.sent(), this.logger.warn("Failed to connect, due to error", t), [3, 5];
                                case 4:
                                    return this.pendingConnection = null, [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.join = function(e) {
                    return m.__awaiter(this, void 0, void 0, function() {
                        var t, n;
                        return m.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    if (this.disabled) return [2];
                                    i.label = 1;
                                case 1:
                                    return i.trys.push([1, 4, , 5]), [4, this.ensureConnected()];
                                case 2:
                                    return i.sent(), this.logger.debug("Joining channel..."), [4, this.client.joinChannel(e)];
                                case 3:
                                    return (t = i.sent()).response.succeeded ? this.logger.debug("Joined channel", {
                                        duration: t.response.duration,
                                        channel: t.response.channel
                                    }) : this.logger.warn("Failed to join channel", {
                                        channel: t.response.channel
                                    }), [3, 5];
                                case 4:
                                    return n = i.sent(), this.logger.warn("Failed to join channel.", n), [3, 5];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.part = function(e) {
                    return m.__awaiter(this, void 0, void 0, function() {
                        var t, n;
                        return m.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    if (!this.client.isConnected()) return this.logger.warn("Attempt to part channel, but not connected."), [2];
                                    this.logger.debug("Parting channel..."), i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, 4, 5]), this.pendingPart = this.client.partChannel(e), [4, this.pendingPart];
                                case 2:
                                    return (t = i.sent()).response.succeeded ? this.logger.debug("Parted channel", {
                                        channel: t.response.channel
                                    }) : this.logger.warn("Failed to part channel, due to response.", {
                                        channel: t.response.channel
                                    }), [3, 5];
                                case 3:
                                    return n = i.sent(), this.logger.warn("Failed to part channel, due to error.", n), [3, 5];
                                case 4:
                                    return this.logger.debug("Setting pending part to null"), this.pendingPart = null, [7];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.awaitParted = function() {
                    return m.__awaiter(this, void 0, void 0, function() {
                        var e;
                        return m.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 3, , 4]), this.pendingPart ? (this.logger.debug("Waiting for pending part operation..."), [4, this.pendingPart]) : [3, 2];
                                case 1:
                                    t.sent(), this.logger.debug("Pending part operation completed"), t.label = 2;
                                case 2:
                                    return [3, 4];
                                case 3:
                                    return e = t.sent(), this.logger.warn("Failed to ensure channel had parted before joining.", e), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.disconnect = function() {
                    try {
                        this.client.disconnect()
                    } catch (e) {
                        this.logger.warn("Failed to disconnect client!", e)
                    }
                }, e.prototype.ensureConnected = function() {
                    return m.__awaiter(this, void 0, void 0, function() {
                        return m.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return this.client.isConnected() ? [3, 2] : (this.logger.debug("Connection not yet established. Waiting on connect to complete..."), [4, this.connect()]);
                                case 1:
                                    e.sent(), e.label = 2;
                                case 2:
                                    if (!this.client.isConnected()) throw new Error("Failed to connect");
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.getConnectionOptions = function(e) {
                    var t = {
                            disabled: !1,
                            secure: !0,
                            port: 443,
                            server: e.tmiHost
                        },
                        n = this.getQueryStringOptions();
                    return null === n ? (this.logger.debug("Using options from configuration"), t) : "false" === n.server ? m.__assign({}, t, {
                        disabled: !0
                    }) : e.buildType !== h.a.Dev ? t : {
                        disabled: !1,
                        secure: null !== n.secure ? n.secure : t.secure,
                        port: null !== n.port ? n.port : t.port,
                        server: null !== n.server ? n.server : t.server
                    }
                }, e.prototype.getQueryStringOptions = function() {
                    try {
                        var e = v.parse(window.location.search),
                            t = {
                                server: void 0 !== e.tmi_host ? e.tmi_host : null,
                                port: void 0 !== e.tmi_port ? +e.tmi_port : null,
                                secure: void 0 !== e.tmi_secure ? "false" !== e.tmi_secure : null
                            };
                        if (null !== t.server || null !== t.port || null !== t.secure) return this.logger.debug("Using options from query string", t), t
                    } catch (e) {
                        this.logger.warn("Failed to parse connection options from query string. Default options will be used.", e)
                    }
                    return null
                }, e
            }(),
            M = n("+dIz"),
            I = n("u1/p"),
            D = n("QJiI"),
            H = n("U3Ox"),
            A = n("BzvE"),
            P = new M.b({
                introspectionQueryResultData: {
                    __schema: {
                        types: [{
                            kind: "UNION",
                            name: "BitsOffer",
                            possibleTypes: [{
                                name: "BitsAdOffer"
                            }, {
                                name: "BitsBundleOffer"
                            }]
                        }, {
                            kind: "UNION",
                            name: "Activity",
                            possibleTypes: [{
                                name: "PlayingActivity"
                            }, {
                                name: "StreamingActivity"
                            }, {
                                name: "WatchingActivity"
                            }]
                        }, {
                            kind: "UNION",
                            name: "FeedItem",
                            possibleTypes: [{
                                name: "Post"
                            }, {
                                name: "Video"
                            }, {
                                name: "Stream"
                            }, {
                                name: "Clip"
                            }]
                        }, {
                            kind: "UNION",
                            name: "PostEmbed",
                            possibleTypes: [{
                                name: "Video"
                            }, {
                                name: "Clip"
                            }, {
                                name: "Stream"
                            }, {
                                name: "PhotoOEmbed"
                            }, {
                                name: "VideoOEmbed"
                            }]
                        }, {
                            kind: "INTERFACE",
                            name: "Panel",
                            possibleTypes: [{
                                name: "DefaultPanel"
                            }, {
                                name: "ExtensionPanel"
                            }]
                        }]
                    }
                }
            }),
            B = n("bejq"),
            O = function() {
                function e(e) {
                    this.authToken = null, this.batchID = 0, this.eventEmitter = new A.EventEmitter, this.queryID = 0, this.config = e.config, this.logger = e.logger.withCategory("apollo"), this.store = e.store, this.session = e.session, this.client = this.createApolloClient()
                }
                return e.prototype.addQueryMetricsListener = function(e) {
                    this.eventEmitter.addListener("query-metrics", e)
                }, e.prototype.removeQueryMetricsListener = function(e) {
                    this.eventEmitter.removeListener("query-metrics", e)
                }, e.prototype.createApolloClient = function() {
                    return new I.a({
                        cache: new M.a({
                            fragmentMatcher: P
                        }),
                        queryDeduplication: !0,
                        link: new H.a({
                            fetch: this.createApolloFetcher()
                        })
                    })
                }, e.prototype.createApolloFetcher = function() {
                    var e = this,
                        t = Object(D.a)({
                            uri: this.config.graphqlEndpoint
                        });
                    return t.batchUse(function(t, n) {
                        var i = t.requests,
                            r = t.options,
                            a = {
                                "Client-Id": e.config.authClientID,
                                "X-Device-Id": e.session.deviceID
                            },
                            o = e.store.getState();
                        o.session && (a["Accept-Language"] = o.session.locale), e.authToken && (a.Authorization = "OAuth " + e.authToken), r.headers = a, r.twilight = {
                            batchID: ++e.batchID,
                            batchTimestamp: performance.timing.navigationStart + performance.now(),
                            requests: i
                        }, n()
                    }), t.batchUseAfter(function(t, n) {
                        var i = t.response,
                            r = t.options;
                        return m.__awaiter(e, void 0, void 0, function() {
                            var e, t, a, o, s, l, c = this;
                            return m.__generator(this, function(h) {
                                switch (h.label) {
                                    case 0:
                                        return i.status && i.status >= 400 || i.status < 200 ? 401 !== i.status ? [3, 1] : this.config.embedded ? (this.logger.warn("Received 401 response from GraphQL."), [3, 3]) : (this.logger.warn("Received 401 response from GraphQL, logging user out."), Object(B.e)(), window.location.reload(!0), [2]) : [3, 4];
                                    case 1:
                                        return t = (e = this.logger).error, a = [new Error("Received non-200 response from GraphQL."), "Received non-200 response from GraphQL."], o = {
                                            status: i.status
                                        }, [4, i.text()];
                                    case 2:
                                        t.apply(e, a.concat([(o.body = h.sent(), o)])), h.label = 3;
                                    case 3:
                                        return n(), [2];
                                    case 4:
                                        return s = r, l = i.parsed.map(function(e, t) {
                                            var n = e,
                                                i = s.twilight.requests[t];
                                            return n.extensions && !n.status ? {
                                                queryID: ++c.queryID,
                                                durationMs: n.extensions.durationMilliseconds,
                                                operationName: n.extensions.operationName,
                                                variables: i.variables
                                            } : {
                                                queryID: ++c.queryID,
                                                operationName: "<extensions field missing>",
                                                durationMs: 0
                                            }
                                        }), this.eventEmitter.listeners("query-metrics", !0) && this.eventEmitter.emit("query-metrics", {
                                            batchID: s.twilight.batchID,
                                            batchTimestamp: s.twilight.batchTimestamp,
                                            queries: l
                                        }), n(), [2]
                                }
                            })
                        })
                    }), t
                }, e
            }(),
            V = n("2KeS"),
            F = n("4ufr"),
            U = n.n(F),
            W = function() {
                function e(e) {
                    var t = this;
                    this.reducers = {}, this.rootReducer = function(e, n) {
                        e || (e = {});
                        var i = {},
                            r = !1;
                        switch (n.type) {
                            case "twilight.registerReducer":
                                if (void 0 === (o = t.reducers[n.name](e[n.name], {
                                        type: "@@INIT"
                                    }))) throw new Error("Reducer for key " + n.name + " returned undefined!");
                                i = m.__assign({}, e, (s = {}, s[n.name] = o, s)), r = !0;
                                break;
                            default:
                                for (var a in t.reducers)
                                    if (t.reducers[a]) {
                                        var o;
                                        if (void 0 === (o = t.reducers[a](e[a], n))) throw new Error("Reducer for key " + a + " returned undefined!");
                                        i[a] = o, r = r || o !== e[a]
                                    }
                        }
                        return r ? i : e;
                        var s
                    }, this.reduxStore = Object(V.e)(this.rootReducer, (e.buildType !== h.a.Production && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || V.d)(Object(V.a)(U.a)))
                }
                return e.prototype.getReduxStore = function() {
                    return this.reduxStore
                }, e.prototype.getState = function() {
                    return this.reduxStore.getState()
                }, e.prototype.dispatch = function(e) {
                    return this.reduxStore.dispatch(e)
                }, e.prototype.registerReducer = function(e, t) {
                    if (this.reducers[e]) throw Error("Reducer already registered: " + e);
                    this.reducers[e] = t, this.dispatch({
                        type: "twilight.registerReducer",
                        name: e
                    })
                }, e
            }(),
            q = function() {
                function e(e, t, n) {
                    this.sniffers = e, this.trackFunc = t, this.filterFunc = n, this.startCalled = !1
                }
                return e.prototype.start = function() {
                    return !this.startCalled && (this.startCalled = !0, this.sniffers.forEach(this.processSniffer.bind(this)), !0)
                }, e.prototype.flush = function() {
                    this.sniffers.forEach(function(e) {
                        return e.getAvailableResourceTimings()
                    })
                }, e.prototype.processSniffer = function(e) {
                    var t = e.frameURL,
                        n = e.getFrameTiming(),
                        i = n.navigationStart;
                    this.processFrameTiming(t, n), e.addResourceListener(this.processResourceTiming.bind(this, i)), e.getAvailableResourceTimings().forEach(this.processResourceTiming.bind(this, i))
                }, e.prototype.processFrameTiming = function(e, t) {
                    if (this.shouldSend(e)) {
                        var n = this.createFrameNetworkEventData(e, t);
                        this.trackFunc(n)
                    }
                }, e.prototype.processResourceTiming = function(e, t) {
                    if (this.shouldSend(t.name)) {
                        var n = this.createResourceNetworkEventData(e, t);
                        this.trackFunc(n)
                    }
                }, e.prototype.shouldSend = function(e) {
                    return !this.filterFunc || this.filterFunc(e)
                }, e.prototype.createFrameNetworkEventData = function(e, t) {
                    return {
                        type: "frame",
                        request_url: e,
                        start_time: t.navigationStart,
                        duration: Math.round(t.responseEnd - t.fetchStart),
                        dns_duration: this.computeDuration(t.domainLookupStart, t.domainLookupEnd),
                        connect_duration: this.computeDuration(t.connectStart, t.connectEnd),
                        request_duration: this.computeDuration(t.requestStart, t.responseStart),
                        response_duration: this.computeDuration(t.responseStart, t.responseEnd),
                        redirect_duration: this.computeDuration(t.redirectStart, t.redirectEnd)
                    }
                }, e.prototype.createResourceNetworkEventData = function(e, t) {
                    return {
                        type: "resource",
                        request_url: t.name,
                        start_time: e + t.startTime,
                        duration: Math.round(t.duration),
                        dns_duration: this.computeDuration(t.domainLookupStart, t.domainLookupEnd),
                        connect_duration: this.computeDuration(t.connectStart, t.connectEnd),
                        request_duration: this.computeDuration(t.requestStart, t.responseStart),
                        response_duration: this.computeDuration(t.responseStart, t.responseEnd),
                        redirect_duration: this.computeDuration(t.redirectStart, t.redirectEnd),
                        transfer_size: t.transferSize
                    }
                }, e.prototype.computeDuration = function(e, t) {
                    return e > 0 && t > 0 ? t - e : void 0
                }, e
            }(),
            j = "resource",
            G = function() {
                function e(e, t, n) {
                    var i = this;
                    this.performance = t, this.frameURL = n, this.startCalled = !1, this.eventEmitter = new A.EventEmitter, this.emitterName = "network-sniffer", this.processNewResourceTimings = function() {
                        var e = i.performance.getEntriesByType(j);
                        if (0 !== e.length) {
                            for (var t = 0, n = e; t < n.length; t++) {
                                var r = n[t];
                                i.fireResourceListeners(r)
                            }
                            i.clearResourceBuffer()
                        }
                    }, this.logger = e.withCategory("network-sniffer"), r(t) ? this.logger.debug("Created") : this.logger.warn("No sniffing allowed!")
                }
                return e.prototype.start = function() {
                    return !this.startCalled && (this.startCalled = !0, this.setResourceBufferSize(), setInterval(this.processNewResourceTimings, 500), !0)
                }, e.prototype.getFrameTiming = function() {
                    return this.performance.timing
                }, e.prototype.getAvailableResourceTimings = function() {
                    return this.processNewResourceTimings(), this.performance.getEntriesByType(j)
                }, e.prototype.addResourceListener = function(e) {
                    this.eventEmitter.addListener(this.emitterName, e)
                }, e.prototype.removeResourceListener = function(e) {
                    this.eventEmitter.removeListener(this.emitterName, e)
                }, e.prototype.setResourceBufferSize = function() {
                    this.performance.setResourceTimingBufferSize(1e3)
                }, e.prototype.clearResourceBuffer = function() {
                    this.performance.clearResourceTimings(), this.setResourceBufferSize()
                }, e.prototype.fireResourceListeners = function(e) {
                    this.eventEmitter.emit(this.emitterName, e)
                }, e
            }(),
            Q = function() {
                function e(e) {
                    var t = this;
                    this.buffer = [], this.eventEmitter = new A.EventEmitter, this.emitterName = "network-metrics", this.loggedHostWarnings = {}, this.shouldLogHosts = function(e) {
                        return function(n) {
                            var i = new URL(n),
                                r = i.hostname,
                                a = r.split(".");
                            a.length > 2 && (r = a[a.length - 2] + "." + a[a.length - 1]);
                            var o = e.some(function(e) {
                                return 0 === r.indexOf(e)
                            });
                            return o || t.loggedHostWarnings[r] || (t.loggedHostWarnings[r] = !0, t.logger.debug("Request not in whitelist", {
                                urlHost: r,
                                url: i
                            })), o
                        }
                    }, this.onRequestCompleted = function(e) {
                        if (t.eventEmitter.listeners(t.emitterName, !0)) {
                            if (t.buffer.length > 0) {
                                for (var n = 0, i = t.buffer; n < i.length; n++) {
                                    var r = i[n];
                                    t.eventEmitter.emit(t.emitterName, r)
                                }
                                t.buffer = []
                            }
                            t.eventEmitter.emit(t.emitterName, e)
                        } else t.buffer.push(e)
                    }, this.config = e.config, this.logger = e.logger.withCategory("network monitoring"), this.window = e.window, this.session = e.session;
                    var n = this.createSniffers();
                    n.map(function(e) {
                        t.logger.debug("Starting network sniffer"), e.start()
                    }), this.networkLogger = new q(n, this.onRequestCompleted, this.shouldLogHosts(e.config.networkLoggingHostNames)), this.logger.debug("Starting network logger"), this.networkLogger.start()
                }
                return e.prototype.flush = function() {
                    this.networkLogger.flush()
                }, e.prototype.subscribeToUpdates = function(e) {
                    this.eventEmitter.addListener(this.emitterName, e)
                }, e.prototype.removeQueryMetricsListener = function(e) {
                    this.eventEmitter.removeListener(this.emitterName, e)
                }, e.prototype.createSniffers = function() {
                    var e = [];
                    if (this.canAccessPerformance(this.window)) {
                        (n = this.createSniffer(this.window)) && (this.logger.debug("Creating network sniffer for main window"), e.push(n))
                    }
                    for (var t = 0; t < this.window.frames.length; t++)
                        if (this.canAccessFrame(t) && this.canAccessPerformance(this.window.frames[t].window)) {
                            var n;
                            (n = this.createSniffer(this.window.frames[t].window)) && (this.logger.debug("Creating network sniffer for frame", t), e.push(n))
                        }
                    return e
                }, e.prototype.canAccessFrame = function(e) {
                    try {
                        return !!this.window.frames[e].window
                    } catch (t) {
                        return this.logger.warn("Can't access frame", {
                            index: e,
                            err: t
                        }), !1
                    }
                }, e.prototype.canAccessPerformance = function(e) {
                    try {
                        return r(e.performance)
                    } catch (e) {
                        return this.logger.warn("Unable to determine if network sniffing is allowed", e), !1
                    }
                }, e.prototype.createSniffer = function(e) {
                    try {
                        return new G(this.logger, e.performance, e.location.href)
                    } catch (e) {
                        this.logger.warn("Unable to create network sniffer", e)
                    }
                }, e
            }(),
            K = n("ZaD5"),
            Z = n("ZVME"),
            X = n("Hvhe"),
            Y = n("w9tK"),
            J = function() {
                function e(t, n) {
                    var i = this;
                    if (this.componentDuration = {
                            latencyStatus: X.a.Unknown
                        }, this.isRoot = !1, this.hasReportedInteractive = !1, this.customEvents = {}, this.hasSentInitializing = !1, this.hasSentInteractive = !1, this.setLocation = function(e) {
                            i.root.setLocation(e)
                        }, this.sendInitializingEvent = function(e, t, n) {
                            i.hasSentInitializing || (i.tracker.trackInitialize(e, t, n, i.componentName, i.relativeStartTime, i.id.toString(), i.startTimestamp, i.isPrePageLoad, i.root && i.root.hasLostVisibility, i.parent && i.parent.id.toString()), i.hasSentInitializing = !0)
                        }, this.sendInteractiveEvent = function(e, t, n) {
                            !i.hasSentInteractive && i.componentDuration.value && (i.tracker.trackInteractive(e, t, n, i.componentName, i.relativeStartTime, i.id.toString(), i.completedTimestamp, i.componentDuration.value, i.isPrePageLoad, i.root && i.root.hasLostVisibility, i.parent && i.parent.id.toString(), i.parent && i.parent.componentName), i.hasSentInteractive = !0)
                        }, this.shouldWarnChild = function() {
                            return i.getCurrentTimestamp() - i.completedTimestamp < 500
                        }, this.id = e.counter++, this.componentName = t, this.parent = n && n.parent, this.children = [], this.parent ? (this.tracker = this.parent.tracker, this.root = this.parent.root || this.parent, this.depth = this.parent.depth + 1, this.parent.registerChild(this)) : this.depth = 0, this.logger = n.logger, this.isPageComponent = this.componentName.endsWith("Page"), this.isPrePageLoad = this.isRoot || this.root && !this.root.completedTimestamp, this.isPageComponent) {
                        var r = n && n.destination;
                        r || (this.logger.error(new Error("The " + this.componentName + " component must supply a canonical destination, ex: directory.index"), "Invalid withLatencyTracking options"), r = Y.a.Unknown), this.logger.debug("Set root page to: " + r), this.root && this.root.setPage(this, r)
                    }
                    this.resetStartTime(), this.raiseUpdate(), this.logger.debug("Latency tracker created")
                }
                return e.prototype.reset = function(e) {
                    void 0 === e && (e = !0), this.completedTimestamp && (e && (this.children = [], this.hasReportedInteractive = !1), this.resetStartTime(), this.parent && this.parent.childReset(this), this.logger.debug(this.componentName + " reset", {
                        children: this.children
                    }), this.raiseUpdate())
                }, e.prototype.resetChildren = function() {
                    if (this.children && this.children.length)
                        for (var e = 0, t = this.children; e < t.length; e++) {
                            t[e].resetChildren()
                        }
                    this.children = []
                }, e.prototype.reportInteractive = function(e) {
                    this.hasReportedInteractive ? this.logger.debug("Already reported interactive") : (this.hasReportedInteractive = !0, this.logger.debug(this.componentName + " reported interactive", {
                        expectedChildCount: e,
                        children: this.getChildNames()
                    }), e && (this.expectedChildCount = e), this.checkChildCompleted())
                }, e.prototype.resetCustomEvents = function(e) {
                    this.root.customEvents[e] = []
                }, e.prototype.registerCustomEvent = function(e) {
                    var t;
                    switch (e.start) {
                        case Z.d.Registration:
                            t = this.getCurrentTimestamp();
                            break;
                        default:
                            t = this.getRootInitTimestamp()
                    }
                    var n = m.__assign({}, e, {
                        duration: {
                            latencyStatus: X.a.Unknown
                        },
                        startTime: t
                    });
                    return this.logger.debug("[" + e.group + "][" + e.label + "] Event registered", {
                        customEvent: n
                    }), this.root.customEvents[e.group] || (this.root.customEvents[e.group] = []), this.root.customEvents[e.group].push(n), this.raiseUpdate(), n
                }, e.prototype.reportCustomEvent = function(e) {
                    if (!e.duration || !e.duration.value) {
                        var t = Math.round(this.getCurrentTimestamp() - e.startTime),
                            n = t <= e.benchmark ? X.a.Pass : X.a.Fail;
                        e.duration.value = t, e.duration.latencyStatus = n, this.logger.debug("[" + e.group + "][" + e.label + "] Event reported", {
                            customEvent: e
                        }), this.raiseUpdate(), this.root.sendCustomEventToSpade(e)
                    }
                }, e.prototype.createChild = function(t, n) {
                    return new e(t, {
                        destination: n,
                        parent: this,
                        logger: this.logger.withCategory(t)
                    })
                }, e.prototype.sendBenchmarkEventsToSpade = function() {
                    if (this.root) {
                        var e = this.root.getLocation(),
                            t = this.root.getDestination(),
                            n = this.root.getPageComponentName();
                        if (t && e && n) {
                            this.sendInitializingEvent(t, e, n), this.sendInteractiveEvent(t, e, n);
                            for (var i = 0, r = this.children; i < r.length; i++) {
                                r[i].sendBenchmarkEventsToSpade()
                            }
                        }
                    }
                }, e.prototype.raiseUpdate = function() {
                    this.root && this.root.raiseUpdate()
                }, e.prototype.markCompleted = function() {
                    if (!this.completedTimestamp) {
                        this.completedTimestamp = this.getCurrentTimestamp();
                        var e = Math.round(this.completedTimestamp - this.startTimestamp);
                        this.componentDuration = {
                            value: e,
                            latencyStatus: X.a.Unknown
                        }, this.logger.debug("Done", {
                            componantName: this.componentName,
                            durationMs: this.componentDuration.value
                        }), this.parent && this.parent.childCompleted(this), this.raiseUpdate()
                    }
                }, e.prototype.checkChildCompleted = function() {
                    var e = this.expectedChildCount ? this.expectedChildCount : this.children.length;
                    this.children.filter(function(e) {
                        return e.completedTimestamp
                    }).length >= e && (this.logger.debug("All children completed", {
                        componentName: this.componentName,
                        expectedChildCount: e,
                        children: this.getChildNames()
                    }), this.markCompleted())
                }, e.prototype.registerChild = function(e) {
                    if (this.completedTimestamp) {
                        if (this.root && this.root.completedTimestamp) return void(this.shouldWarnChild() && this.logger.warn("Child attempted to register itself, but parent is already completed", {
                            child: e.componentName,
                            parent: this.componentName
                        }));
                        this.reset(!1)
                    }
                    this.children.push(e)
                }, e.prototype.getChildNames = function() {
                    return this.children.map(function(e) {
                        return e.componentName
                    })
                }, e.prototype.getRootInitTimestamp = function() {
                    return this.root.startTimestamp
                }, e.prototype.getNavigationStartTimestamp = function() {
                    return this.root ? this.root.navigationStart : Date.now()
                }, e.prototype.getCurrentTimestamp = function() {
                    return performance.timing.navigationStart + performance.now()
                }, e.prototype.getRelativeStartTimestamp = function() {
                    return Math.round(this.startTimestamp - this.getNavigationStartTimestamp())
                }, e.prototype.resetStartTime = function() {
                    var e = this.getCurrentTimestamp();
                    this.startTimestamp = e, this.relativeStartTime = this.getRelativeStartTimestamp(), this.completedTimestamp = 0, this.componentDuration = {
                        value: void 0,
                        latencyStatus: X.a.Unknown
                    }
                }, e.prototype.childReset = function(e) {
                    this.children.includes(e) || this.children.push(e), this.completedTimestamp ? this.logger.warn("Child component reset after this one completed", {
                        child: e.componentName
                    }) : this.logger.debug("Child component reset", {
                        child: e.componentName
                    })
                }, e.prototype.childCompleted = function(e) {
                    this.completedTimestamp ? this.shouldWarnChild() && this.logger.warn("Child attempted to report completed, but parent is already completed", {
                        child: e.componentName,
                        parent: this.componentName
                    }) : (this.logger.debug(this.componentName + " child " + e.componentName + " completed", {
                        children: this.getChildNames()
                    }), this.hasReportedInteractive && this.checkChildCompleted())
                }, e.counter = 1, e
            }(),
            $ = function() {
                function e(e, t) {
                    this.tracking = e, this.logger = t.withCategory("tracker"), this.logger.debug("Created")
                }
                return e.prototype.trackNetworkRequestEvent = function(e, t, n, i, r, a) {
                    a.request_url !== this.tracking.getEndpoint() ? this.tracking.trackBenchmark(N.SpadeEventType.NetworkRequest, m.__assign({
                        is_pre_pageload: i,
                        destination: e,
                        location: t,
                        page_component_name: n,
                        client_time: a.start_time / 1e3,
                        relative_start_time: r
                    }, a)) : this.logger.debug("Skipping Spade network request.")
                }, e.prototype.trackCompleteTransition = function(e, t, n, i, r, a, o) {
                    this.tracking.trackBenchmark(N.SpadeEventType.CompleteTransition, {
                        client_time: i / 1e3,
                        lost_visibility: o,
                        destination: e,
                        location: t,
                        page_component_name: n,
                        is_app_launch: a,
                        time_from_fetch: r
                    })
                }, e.prototype.trackCustomEvent = function(e, t, n) {
                    this.tracking.trackCustomEventBenchmark({
                        benchmark: e.benchmark,
                        duration: Math.round(e.duration && e.duration.value || 0),
                        group: e.group,
                        key: e.key,
                        label: e.label,
                        is_app_launch: t,
                        lost_visibility: n
                    })
                }, e.prototype.trackAppBooted = function(e, t, n, i, r, a) {
                    this.tracking.trackBenchmark(N.SpadeEventType.AppBooted, {
                        client_time: i / 1e3,
                        lost_visibility: a,
                        destination: e,
                        location: t,
                        page_component_name: n,
                        time_from_fetch: r
                    })
                }, e.prototype.trackInitialize = function(e, t, n, i, r, a, o, s, l, c) {
                    this.tracking.trackBenchmark(N.SpadeEventType.ComponentInitializing, {
                        destination: e,
                        location: t,
                        page_component_name: n,
                        component: i,
                        component_id: a,
                        parent_component_id: c,
                        client_time: o / 1e3,
                        lost_visibility: l,
                        is_pre_pageload: s,
                        relative_start_time: r
                    })
                }, e.prototype.trackInteractive = function(e, t, n, i, r, a, o, s, l, c, h, u) {
                    this.tracking.trackBenchmark(N.SpadeEventType.ComponentInteractive, {
                        destination: e,
                        location: t,
                        page_component_name: n,
                        component: i,
                        component_id: a,
                        parent_component_id: h,
                        parent_component: u,
                        client_time: o / 1e3,
                        time_from_initializing: s / 1e3,
                        duration: s,
                        lost_visibility: c,
                        relative_start_time: r,
                        is_pre_pageload: l
                    })
                }, e.prototype.trackFetchStart = function(e, t, n, i, r) {
                    this.tracking.trackBenchmark(N.SpadeEventType.FetchStart, {
                        destination: e,
                        location: t,
                        page_component_name: n,
                        client_time: i / 1e3,
                        lost_visibility: r
                    })
                }, e.prototype.trackApiQuery = function(e, t, n, i, r, a, o, s, l) {
                    this.tracking.trackApiQueryBenchmark({
                        destination: e,
                        location: t,
                        client_time: i / 1e3,
                        page_component_name: r,
                        query_name: a,
                        is_pre_pageload: l,
                        execution_time: o,
                        request_time: s,
                        relative_start_time: n
                    })
                }, e
            }(),
            ee = function(e) {
                function t(t) {
                    var n = e.call(this, "Root", {
                        logger: t.logger.withCategory("latency-tracker")
                    }) || this;
                    if (n.rootInitDuration = {
                            latencyStatus: X.a.Unknown
                        }, n.firstPaint = {
                            latencyStatus: X.a.Unknown
                        }, n.pageLoadDuration = {
                            latencyStatus: X.a.Unknown
                        }, n.networkEvents = [], n.queryBatchMetrics = [], n.queryEvents = [], n.isFirstLoad = !0, n.isRoot = !0, n.hasLostVisibility = !1, n.emitter = new A.EventEmitter, n.getLocation = function() {
                            return n.location
                        }, n.setLocation = function(e) {
                            n.logger.debug("Updating location", {
                                location: e
                            }), n.location = e, n.sendBenchmarkEventsToSpade()
                        }, n.getDestination = function() {
                            return n.destination
                        }, n.getPageComponentName = function() {
                            return n.page && n.page.componentName
                        }, n.setPage = function(e, t) {
                            n.page = e, n.destination = t, n.sentinel.setPageComponentName(e.componentName)
                        }, n.sendCustomEventToSpade = function(e) {
                            n.componentEventsEnabled && n.tracker.trackCustomEvent(e, n.isFirstLoad, n.hasLostVisibility)
                        }, n.sendAllEvents = function() {
                            n.networkMonitor && (n.networkMonitor.flush(), n.doReconcileQueries(!0)), n.sendBenchmarkEventsToSpade(), n.sendNetworkRequestsToSpade()
                        }, n.sendFetchStartEvent = function(e, t, i) {
                            n.isFirstLoad && !n.hasSentFetchStart && (n.tracker.trackFetchStart(e, t, i, performance.timing.fetchStart, n.hasLostVisibility), n.hasSentFetchStart = !0)
                        }, n.sendCompleteTransitionEvent = function(e, t, i) {
                            !n.hasSentCompleteTransition && n.pageLoadDuration.value && (n.tracker.trackCompleteTransition(e, t, i, n.completedTimestamp, n.pageLoadDuration.value, n.isFirstLoad, n.hasLostVisibility), n.hasSentCompleteTransition = !0)
                        }, n.sendAppBootedEvent = function(e, t, i) {
                            if (n.isFirstLoad && !n.hasSentAppBooted && n.rootInitDuration.value) {
                                n.tracker.trackAppBooted(e, t, i, n.startTimestamp, n.rootInitDuration.value, n.hasLostVisibility);
                                try {
                                    var r = performance.getEntriesByType("paint").find(function(e) {
                                        return "first-contentful-paint" === e.name
                                    });
                                    r && (n.firstPaint.value = r.startTime, r.startTime > 250 ? n.firstPaint.latencyStatus = X.a.Fail : n.firstPaint.latencyStatus = X.a.Pass, n.tracker.trackCustomEvent({
                                        benchmark: 250,
                                        duration: n.firstPaint,
                                        group: Z.a.Page,
                                        key: Z.b.FirstPaint,
                                        label: Z.c.FirstPaint,
                                        startTime: n.navigationStart
                                    }, n.isFirstLoad, n.hasLostVisibility))
                                } catch (e) {
                                    n.logger.debug("First paint metrics not available on this platform", e)
                                }
                                n.hasSentAppBooted = !0
                            }
                        }, n.onNetworkRequest = function(e) {
                            var t = e.request_url.startsWith(n.graphqlEndpoint),
                                i = !n.completedTimestamp || e.start_time <= n.completedTimestamp,
                                r = Math.round(e.start_time - n.getNavigationStartTimestamp());
                            n.networkEvents.push({
                                networkEvent: e,
                                latencyStatus: X.a.Unknown,
                                relativeStartTime: r,
                                isPendingSpade: !0,
                                isApiRequest: t,
                                isPrePageload: i,
                                duration: {
                                    value: e.duration,
                                    latencyStatus: X.a.Unknown
                                }
                            }), n.reconcileQueries()
                        }, n.reconcileQueries = function() {
                            n.queryReconciliationTimer || (n.queryReconciliationTimer = setTimeout(function() {
                                n.queryReconciliationTimer = null, n.doReconcileQueries(!1), n.sendNetworkRequestsToSpade()
                            }, 250))
                        }, n.doReconcileQueries = function(e) {
                            for (var t = n.networkEvents.filter(function(e) {
                                    return e.isApiRequest
                                }), i = function(i) {
                                    var r = t.find(function(e) {
                                        return e.networkEvent.duration >= i.slowestQueryInBatch && e.networkEvent.start_time >= i.batchTimestamp && e.networkEvent.start_time - i.batchTimestamp < 10
                                    });
                                    !r && e && (r = t.find(function(e) {
                                        return e.networkEvent.duration >= i.slowestQueryInBatch && e.networkEvent.start_time >= i.batchTimestamp
                                    })), r ? (i.relatedNetworkEvent = r.networkEvent, i.isPrePageload = r.isPrePageload, i.requestDuration = {
                                        value: Math.round(r.networkEvent.duration),
                                        latencyStatus: X.a.Unknown
                                    }) : e && n.logger.warn("Unable to find a related network event for query", {
                                        queryEvent: i,
                                        filteredApiRequests: t,
                                        allNetworkRequests: n.networkEvents.slice()
                                    })
                                }, r = 0, a = n.queryEvents.filter(function(e) {
                                    return !e.relatedNetworkEvent
                                }); r < a.length; r++) {
                                i(a[r])
                            }
                            n.raiseUpdate()
                        }, n.onQuery = function(e) {
                            if (n.completedTimestamp && e.batchTimestamp > n.completedTimestamp) n.logger.debug("Query event data skipped, it is post page load.", e);
                            else {
                                var t = Math.max.apply(Math, e.queries.map(function(e) {
                                    return e.durationMs
                                }));
                                n.queryBatchMetrics.push({
                                    batchID: e.batchID,
                                    batchTimestamp: e.batchTimestamp,
                                    latencyStatus: X.a.Unknown,
                                    slowestQueryInBatch: t
                                });
                                for (var i = 0, r = e.queries; i < r.length; i++) {
                                    var a = r[i];
                                    n.queryEvents.push({
                                        batchID: e.batchID,
                                        batchTimestamp: e.batchTimestamp,
                                        relativeStartTime: Math.round(e.batchTimestamp - n.getNavigationStartTimestamp()),
                                        queryDuration: {
                                            value: a.durationMs,
                                            latencyStatus: X.a.Unknown
                                        },
                                        requestDuration: {
                                            latencyStatus: X.a.Unknown
                                        },
                                        operationName: a.operationName,
                                        queryID: a.queryID,
                                        slowestQueryInBatch: t,
                                        variables: a.variables,
                                        latencyStatus: X.a.Unknown,
                                        isPendingSpade: !0,
                                        isPrePageload: !1
                                    })
                                }
                                n.logger.debug("GraphQL query completed: ", {
                                    latestQueryData: e,
                                    allBatches: n.queryBatchMetrics
                                }), n.reconcileQueries()
                            }
                        }, n.sendNetworkRequestsToSpade = function() {
                            if (n.networkEventsEnabled && n.destination && n.location && n.page) {
                                n.logger.debug("Sending ready network and query events to Spade");
                                var e = n.networkEvents.filter(function(e) {
                                    return e.isPendingSpade
                                });
                                if (e.length) {
                                    for (var t = 0, i = e; t < i.length; t++) {
                                        var r = i[t];
                                        r.isPendingSpade = !1, n.tracker.trackNetworkRequestEvent(n.destination, n.location, n.page.componentName, r.isPrePageload, r.relativeStartTime, r.networkEvent)
                                    }
                                    n.logger.debug("Sent network events to spade:", {
                                        count: e.length
                                    })
                                }
                                var a = n.queryEvents.filter(function(e) {
                                    return e.isPendingSpade && e.isPrePageload
                                });
                                if (a.length > 0) {
                                    for (var o = 0, s = 0, l = a; s < l.length; s++) {
                                        var c = l[s];
                                        void 0 !== c.requestDuration.value && void 0 !== c.queryDuration.value && (c.isPendingSpade = !1, n.tracker.trackApiQuery(n.destination, n.location, c.relativeStartTime, c.batchTimestamp, n.page.componentName, c.operationName, c.queryDuration.value, c.requestDuration.value, c.isPrePageload), o += 1)
                                    }
                                    n.logger.debug("Sent " + o + " query events to Spade, " + (a.length - o) + " events skipped because they are not yet ready.")
                                }
                            }
                        }, n.checkLostVisibility = function() {
                            n.hasLostVisibility || (n.hasLostVisibility = document.hidden)
                        }, n.root = n, n.store = t.store, n.networkEventsEnabled = t.networkEventsEnabled, n.componentEventsEnabled = t.componentEventsEnabled, n.toolsEnabled = t.toolsEnabled, n.graphqlEndpoint = t.config.graphqlEndpoint, n.tracker = new $(t.tracking, n.logger), n.navigationStart = performance.timing.navigationStart, n.rootInitDuration = {
                            value: Math.round(n.startTimestamp - n.navigationStart),
                            latencyStatus: X.a.Unknown
                        }, n.networkMonitor = t.networkMonitor, n.sentinel = t.sentinel, n.networkEventsEnabled && n.networkMonitor && n.networkMonitor.subscribeToUpdates(n.onNetworkRequest), n.networkEventsEnabled && t.apollo && t.apollo.addQueryMetricsListener(n.onQuery), t.trackVisibility) try {
                        n.checkLostVisibility(), document.addEventListener("visibilitychange", n.checkLostVisibility)
                    } catch (e) {
                        n.logger.warn("Failed to attach event listener for document visibility change, assuming visibility has been lost.", e), n.hasLostVisibility = !0
                    }
                    return n.raiseUpdate(), n
                }
                return m.__extends(t, e), t.prototype.subscribeToUpdates = function(e) {
                    this.emitter.addListener("root-latency-tracker", e)
                }, t.prototype.getCustomEvents = function() {
                    return this.customEvents
                }, t.prototype.reset = function() {
                    this.isFirstLoad && this.store.dispatch(Object(K.f)());
                    var e = this.getCurrentTimestamp();
                    this.customEvents = {}, this.resetChildren(), this.children = [], this.startTimestamp = e, this.navigationStart = e, this.relativeStartTime = 0, this.rootInitDuration = {
                        latencyStatus: X.a.Unknown
                    }, this.firstPaint = {
                        latencyStatus: X.a.Unknown
                    }, this.completedTimestamp = 0, this.componentDuration = {
                        latencyStatus: X.a.Unknown
                    }, this.hasReportedInteractive = !1, this.page = void 0, this.isFirstLoad = !1, this.pageLoadDuration = {
                        latencyStatus: X.a.Unknown
                    }, this.networkEvents = [], this.queryEvents = [], this.queryBatchMetrics = [], this.hasSentInitializing = !1, this.hasSentInteractive = !1, this.hasSentAppBooted = !1, this.hasSentCompleteTransition = !1, this.hasReportedInteractive = !1, this.hasLostVisibility = !1, this.raiseUpdate(), this.logger.debug("Reset Root")
                }, t.prototype.raiseUpdate = function() {
                    var e = this;
                    this.toolsEnabled && !this.dispatchTimer && (this.dispatchTimer = setTimeout(function() {
                        e.dispatchTimer = null, e.emitter.emit("root-latency-tracker")
                    }, 100))
                }, t.prototype.sendBenchmarkEventsToSpade = function() {
                    if (this.destination && this.location && this.page) {
                        if (this.sendFetchStartEvent(this.destination, this.location, this.page.componentName), this.sendAppBootedEvent(this.destination, this.location, this.page.componentName), this.componentEventsEnabled && (this.sendInitializingEvent(this.destination, this.location, this.page.componentName), this.sendInteractiveEvent(this.destination, this.location, this.page.componentName)), this.sendCompleteTransitionEvent(this.destination, this.location, this.page.componentName), this.componentEventsEnabled)
                            for (var e = 0, t = this.children; e < t.length; e++) {
                                t[e].sendBenchmarkEventsToSpade()
                            }
                    } else this.logger.debug("Unable to send events to spade. destination or location is not set")
                }, t.prototype.registerChild = function(t) {
                    e.prototype.registerChild.call(this, t), this.logger.debug("Root page got a new child", {
                        newChild: t.componentName,
                        allChildren: this.getChildNames()
                    })
                }, t.prototype.checkChildCompleted = function() {
                    this.page ? e.prototype.checkChildCompleted.call(this) : this.logger.debug("Root page incomplete, pending a page to register.")
                }, t.prototype.markCompleted = function() {
                    if (!this.completedTimestamp)
                        if (this.page) {
                            if (this.completedTimestamp = this.getCurrentTimestamp(), this.componentDuration = {
                                    value: Math.round(this.completedTimestamp - this.startTimestamp),
                                    latencyStatus: X.a.Unknown
                                }, this.logger.debug("Root tracker done", {
                                    durationMs: this.componentDuration
                                }), this.pageLoadDuration = {
                                    value: (this.componentDuration.value || 0) + (this.rootInitDuration.value || 0),
                                    latencyStatus: X.a.Unknown
                                }, this.logger.debug("Root page completed", {
                                    pageLoadDuration: this.pageLoadDuration,
                                    rootInitDuration: this.rootInitDuration,
                                    componentDuration: this.componentDuration,
                                    children: this.getChildNames()
                                }), this.raiseUpdate(), this.sendAllEvents(), this.isFirstLoad) {
                                this.store.dispatch(Object(K.f)());
                                var e = document.getElementById("root");
                                e && e.setAttribute("data-a-page-loaded", Date.now().toString())
                            }
                        } else this.logger.warn("Root page attemped to complete without a registered page component.")
                }, t.prototype.getNavigationStartTimestamp = function() {
                    return this.navigationStart > 0 ? this.navigationStart : performance.timing.navigationStart
                }, t
            }(J),
            te = "twilight.force-component-benchmarking",
            ne = "twilight.force-network-monitoring",
            ie = "twilight.force-benchmarking-tools",
            re = {
                networkingThreshold: "benchmark_networking_threshold",
                componentThreshold: "benchmark_component_threshold"
            },
            ae = function() {
                function e(e) {
                    var t = this;
                    this.getRootLatencyTracker = function() {
                        return t.latencyTracker
                    }, this.logger = e.logger.withCategory("Benchmarking"), this.seed = Math.round(100 * Math.random()) / 100, this.storage = e.storage;
                    var n = e.dynamicSettings.get(re.networkingThreshold, e.config.defaultNetworkLoggingThreshold),
                        i = e.dynamicSettings.get(re.componentThreshold, e.config.defaultComponentBenchmarkingThreshold);
                    this.toolsEnabled = this.shouldEnableTools(e.config), this.componentsEnabled = this.shouldEnableComponentBenchmarking(e.config, i, this.toolsEnabled), this.networkingEnabled = this.shouldEnableNetworkBenchmarking(e.config, n, this.componentsEnabled, this.toolsEnabled), this.networkingEnabled && (this.networkMonitoring = new Q(e)), this.latencyTracker = new ee({
                        componentEventsEnabled: this.componentsEnabled,
                        networkEventsEnabled: this.networkingEnabled,
                        toolsEnabled: this.toolsEnabled,
                        config: e.config,
                        logger: e.logger,
                        apollo: e.apollo,
                        networkMonitor: this.networkMonitoring,
                        sentinel: e.sentinel,
                        tracking: e.tracking,
                        store: e.store,
                        trackVisibility: !0
                    }), this.logger.debug("Initialized", {
                        seed: this.seed,
                        toolsEnabled: this.toolsEnabled,
                        componentsEnabled: this.componentsEnabled,
                        componentThreshold: i,
                        networkingEnabled: this.networkingEnabled,
                        networkingThreshold: n
                    })
                }
                return e.prototype.shouldEnableTools = function(e) {
                    return e.forceComponentBenchmarking ? (this.logger.debug("Tools enabled, due to config."), !0) : !!this.storage.get(ie, !1) && (this.logger.debug("Tools enabled, due to local storage."), !0)
                }, e.prototype.shouldEnableComponentBenchmarking = function(e, t, n) {
                    return n ? (this.logger.debug("Components enabled, due to Tools being enabled"), !0) : e.forceComponentBenchmarking ? (this.logger.debug("Components enabled, due to config."), !0) : this.storage.get(ne, !1) ? (this.logger.debug("Components enabled, due to local storage."), !0) : this.seed <= t && (this.logger.debug("Components enabled, due to random selection"), !0)
                }, e.prototype.shouldEnableNetworkBenchmarking = function(e, t, n, i) {
                    return n || i ? (this.logger.debug("Networking enabled, due to Components or Tools being enabled"), !0) : e.forceNetworkLogging ? (this.logger.debug("Networking enabled, due to config."), !0) : this.storage.get(te, !1) ? (this.logger.debug("Networking enabled, due to local storage."), !0) : this.seed <= t && (this.logger.debug("Networking enabled, due to random selection"), !0)
                }, e
            }(),
            oe = n("Itsn"),
            se = n("ciQf"),
            le = n.n(se),
            ce = n("HSnN"),
            he = n.n(ce);
        ! function(e) {
            e[e.Debug = 1] = "Debug", e[e.Info = 2] = "Info", e[e.Warn = 3] = "Warn", e[e.Error = 4] = "Error", e[e.Fatal = 5] = "Fatal"
        }(a || (a = {}));
        var ue = function() {
                function e(e, t) {
                    var n = this;
                    if (this.eventEmitter = new A.EventEmitter, this.addMessageListener = function(e) {
                            n.eventEmitter.addListener("message", e)
                        }, this.removeMessageListener = function(e) {
                            n.eventEmitter.removeListener("message", e)
                        }, this.onWindowError = function(e) {
                            e.error ? (e.preventDefault(), n.write(a.Error, "Uncaught error.", void 0, e.error, "uncaught")) : n.write(a.Warn, "Uncaught error, but the error object is null. This is usually caused by a browser permission issue. Please check the browser console.", [{
                                event: e
                            }], new Error("Uncaught error, but the error object is null."), "uncaught")
                        }, e && t) throw new Error("Cannot pass both `options` and `childOptions` arguments.");
                    e ? (this.buildType = e.buildType, this.buffer = [], this.minConsoleLogLevel = e.minConsoleLogLevel, this.maxBufferSize = e.maxBufferSize || 1e3) : t && (this.category = t.category, this.rootLogger = t.rootLogger)
                }
                return e.prototype.addWindowErrorListener = function() {
                    if (this.rootLogger) throw new Error("Attempted to add child logger to window error listeners.");
                    this.windowErrorListenerAdded ? this.warn("Attempted to add window error listener multiple times.") : (this.windowErrorListenerAdded = !0, window.addEventListener("error", this.onWindowError), this.debug("Window error listener added."))
                }, e.prototype.withCategory = function(t) {
                    return new e(null, {
                        rootLogger: this.rootLogger || this,
                        category: (this.category ? this.category + "." : "") + t
                    })
                }, e.prototype.debug = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    this.write(a.Debug, e, t)
                }, e.prototype.info = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    this.write(a.Info, e, t)
                }, e.prototype.warn = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    this.write(a.Warn, e, t)
                }, e.prototype.error = function(e, t) {
                    for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
                    this.write(a.Error, t, n, e, "caught")
                }, e.prototype.fatal = function(e, t) {
                    for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
                    this.write(a.Fatal, t, n, e, "fatal")
                }, e.prototype.flush = function() {
                    if (this.rootLogger) throw new Error("Cannot flush a child logger.");
                    var e = this.buffer;
                    return this.buffer = [], this.messagesTruncated && e.unshift({
                        time: e[0].time - 1,
                        level: a[a.Info].toLowerCase(),
                        message: "Log truncated.",
                        args: [{
                            firstMessageTime: this.firstMessageTime,
                            messagesTruncated: this.messagesTruncated,
                            truncationEvents: this.truncationEvents
                        }]
                    }), e
                }, e.prototype.write = function(e, t, n, i, r, o, s) {
                    void 0 === n && (n = []), void 0 === s && (s = !1), this.rootLogger ? this.rootLogger.write(e, t, n, i, r, this.category, s) : (this.buffer.length === this.maxBufferSize && (this.firstMessageTime || (this.firstMessageTime = this.buffer[0].time), this.truncationEvents = (this.truncationEvents || 0) + 1, this.messagesTruncated = (this.messagesTruncated || 0) + this.buffer.splice(0, Math.ceil(this.maxBufferSize / 10)).length), o = o || this.category, e >= this.minConsoleLogLevel && this.writeToConsole(e, o, t, n, i), e !== a.Debug && this.writeToBuffer(e, o, t, n, i, r, s), !this.onError || e !== a.Error && e !== a.Fatal || this.onError(this))
                }, e.prototype.writeToBuffer = function(e, t, n, i, r, o, s) {
                    void 0 === s && (s = !1);
                    var l = [],
                        c = {
                            time: Date.now(),
                            level: a[e].toLowerCase(),
                            message: n
                        };
                    if (i && i.length > 0 && (c.args = i.map(function(e, t) {
                            if (e instanceof Error) return {
                                name: e.name,
                                message: e.message,
                                stack: e.stack || null
                            };
                            if ("object" == typeof e) try {
                                return JSON.parse(JSON.stringify(e))
                            } catch (e) {
                                return l.push({
                                    message: n,
                                    argIndex: t,
                                    err: e
                                }), "<unserializable>"
                            } else if ("function" == typeof e) return e.name ? "<function " + e.name + ">" : "<anonymous function>";
                            return e
                        })), t && (c.category = t), r && (c.errors = [{
                            name: r.name,
                            message: r.message,
                            stack: r.stack || null,
                            type: o || "caught"
                        }]), this.buffer.push(c), !s)
                        for (var u = 0, d = l; u < d.length; u++) {
                            var p = d[u];
                            this.buildType === h.a.Production ? this.write(a.Warn, "Failed to serialize argument for log message.", [{
                                message: p.message,
                                argIndex: p.argIndex,
                                err: p.err
                            }], void 0, void 0, void 0, !0) : this.write(a.Error, "Failed to serialize argument for log message.", [{
                                message: p.message,
                                argIndex: p.argIndex
                            }], p.err, "caught", t, !0)
                        }
                    this.eventEmitter.emit("message", c)
                }, e.prototype.writeToConsole = function(e, t, n, i, r) {
                    var o = (new Date).toLocaleTimeString();
                    t = t ? "[" + t + "] " : "", n = o + " [" + a[e].toUpperCase() + "] " + t + n, e === a.Fatal && (e = a.Error);
                    var s = (console[a[e].toLowerCase()] || console.log).bind(console);
                    r ? s.apply(void 0, [n, r].concat(i)) : s.apply(void 0, [n].concat(i))
                }, e
            }(),
            de = n("HM6l"),
            pe = n("o/qv"),
            me = "session_storage_unique_id",
            ge = "local_storage_device_id",
            fe = function() {
                function e(e) {
                    var t = this;
                    this.onHistoryChange = function() {
                        t.pageviewID = t.getUniqueID()
                    }, this.storage = e.storage, this.tempStorage = e.tempStorage, this.benchmarkID = this.getOrCreateBenchmarkSessionID(), this.deviceID = this.getOrCreateDeviceID(), this.localStorageDeviceID = this.getOrCreateLocalStorageDeviceID(), this.pageviewID = this.getUniqueID(), this.tabID = this.getOrCreateSessionStorageUniqueID(), e.history.listen(this.onHistoryChange)
                }
                return e.prototype.getUniqueID = function() {
                    return Object(de.b)().substring(0, 16)
                }, e.prototype.getOrCreateDeviceID = function() {
                    var e = g.get("unique_id");
                    return e || (e = Object(de.b)().substring(0, 16), g.set("unique_id", e, {
                        expires: 3650,
                        domain: Object(pe.a)(),
                        secure: "https:" === window.location.protocol
                    }), e)
                }, e.prototype.getOrCreateBenchmarkSessionID = function() {
                    return g.get("twilight.automation_session_id") || Object(de.b)().substring(0, 16)
                }, e.prototype.getOrCreateSessionStorageUniqueID = function() {
                    var e = this.tempStorage.get(me, "");
                    return e || (e = Object(de.b)().substring(0, 16), this.tempStorage.set(me, e), e)
                }, e.prototype.getOrCreateLocalStorageDeviceID = function() {
                    var e = this.storage.get(ge, "");
                    return e || (e = Object(de.b)().substring(0, 16), this.storage.set(ge, e), e)
                }, e
            }(),
            ve = function() {
                function e(e, t) {
                    this.cache = {}, this.storage = e, this.logger = t
                }
                return e.prototype.get = function(e, t) {
                    var n = null;
                    try {
                        n = this.storage.getItem(e)
                    } catch (t) {
                        this.logger.warn("Failed to load stored value.", t, {
                            key: e
                        }), n = this.cache[e] || null
                    }
                    if (null === n || "undefined" === n) return t;
                    try {
                        return JSON.parse(n)
                    } catch (i) {
                        return this.logger.warn("Failed to deserialize stored value, removing from storage.", i, {
                            key: e,
                            value: n
                        }), this.remove(e), t
                    }
                }, e.prototype.getOptional = function(e) {
                    return this.get(e, null)
                }, e.prototype.set = function(e, t) {
                    var n;
                    try {
                        n = JSON.stringify(t)
                    } catch (n) {
                        throw this.logger.warn("Failed to serialize value.", n, {
                            key: e,
                            value: t
                        }), n
                    }
                    this.cache[e] = n;
                    try {
                        this.storage.setItem(e, n)
                    } catch (i) {
                        this.logger.warn("Failed to save value.", i, {
                            key: e,
                            value: t,
                            serializedValue: n
                        })
                    }
                }, e.prototype.remove = function(e) {
                    delete this.cache[e];
                    try {
                        this.storage.removeItem(e)
                    } catch (t) {
                        this.logger.warn("Failed to remove key from storage.", t, {
                            key: e
                        })
                    }
                }, e.prototype.clear = function() {
                    this.cache = {};
                    try {
                        this.storage.clear()
                    } catch (e) {
                        this.logger.warn("Failed to clear storage.", e)
                    }
                }, e
            }(),
            we = n("XEoX");
        n.d(t, "o", function() {
            return be
        }), n.d(t, "a", function() {
            return ye
        }), n.d(t, "b", function() {
            return _e
        }), n.d(t, "c", function() {
            return Ee
        }), n.d(t, "d", function() {
            return Ce
        }), n.d(t, "e", function() {
            return ke
        }), n.d(t, "f", function() {
            return Le
        }), n.d(t, "g", function() {
            return Se
        }), n.d(t, "h", function() {
            return Te
        }), n.d(t, "j", function() {
            return xe
        }), n.d(t, "k", function() {
            return Ne
        }), n.d(t, "l", function() {
            return ze
        }), n.d(t, "m", function() {
            return Re
        }), n.d(t, "n", function() {
            return Me
        }), t.i = function(e) {
            be = new Ie(e), ye = be.config, _e = be.dynamicSettings, Ee = be.intl.formatDate, Ce = be.intl.formatMessage, ke = be.intl.formatNumber, Le = be.intl.formatNumberShort, be.intl.formatPastRelativeDate, Se = be.intl.formatRelativeDate, Te = be.intl.formatTime, xe = be.logger, Ne = be.pubsub, ze = be.storage, Re = be.tempStorage, Me = be.tracking
        };
        var be, ye, _e, Ee, Ce, ke, Le, Se, Te, xe, Ne, ze, Re, Me, Ie = function() {
            function e(e) {
                var t = this;
                this.history = function(e) {
                    var t = e ? he()() : le()(),
                        n = t.push.bind(t),
                        i = /^([^#?]+)?(\?[^#]+)?(\#.+)?$/i;
                    return t.push = function(e, r) {
                        var a = t.location.pathname,
                            o = "",
                            s = "";
                        if ("string" == typeof e) {
                            var l = i.exec(e);
                            if (!l) return void n(e, r);
                            l[1] && (a = l[1]), l[2] && (o = l[2]), l[3] && (s = l[3])
                        } else e.pathname && (a = e.pathname), e.search && ((o = e.search).startsWith("?") || (o = "?" + o)), e.hash && ((s = e.hash).startsWith("#") || (s = "#" + s));
                        (a === t.location.pathname || !a.startsWith("/") && t.location.pathname.endsWith("/" + a)) && o === t.location.search && s === t.location.hash ? t.replace(e, r) : n(e, r)
                    }, t
                }(), this.pageTitle = "Twitch", this.config = e, this.store = new W(this.config);
                var n = this.config.buildType === h.a.Production ? a.Error : a.Debug;
                try {
                    var i = localStorage.getItem(this.config.forceMinConsoleLogLevelKey);
                    null !== i && (n = Number(i))
                } catch (e) {
                    console.error("Failed to get log level override from local storage.", {
                        err: e,
                        key: this.config.forceMinConsoleLogLevelKey
                    })
                }
                this.logger = new ue({
                    minConsoleLogLevel: n,
                    maxBufferSize: 1e3,
                    buildType: this.config.buildType
                }), this.logger.addWindowErrorListener(), this.storage = new ve(localStorage, this.logger.withCategory("storage")), this.tempStorage = new ve(sessionStorage, this.logger.withCategory("tempStorage")), this.dynamicSettings = new oe.a({
                    logger: this.logger,
                    storage: this.storage
                }), this.session = new fe({
                    history: this.history,
                    storage: this.storage,
                    tempStorage: this.tempStorage
                }), this.config.embedded || (this.sentinel = new x({
                    buildID: e.buildID,
                    endpoint: e.sentinelEndpoint,
                    logger: this.logger,
                    session: this.session,
                    store: this.store
                }), this.logger.onError = function(e) {
                    t.sentinel.report(e.flush())
                }), this.adBlockDetector = new p({
                    logger: this.logger
                }), this.adBlockDetector.addTwitchGlobal(), this.adBlockDetector.detectAdBlock(), this.apollo = new O({
                    config: this.config,
                    dynamicSettings: this.dynamicSettings,
                    logger: this.logger,
                    session: this.session,
                    store: this.store
                }), this.tracking = new N.Spade({
                    apollo: this.apollo,
                    config: this.config,
                    endpoint: this.dynamicSettings.get("spade_url", e.defaultSpadeEndpoint),
                    logger: this.logger,
                    session: this.session,
                    store: this.store,
                    adBlockDetector: this.adBlockDetector
                }), this.pubsub = new T(this.store, this.logger), this.intl = new we.TwitchIntl(e.locales), this.config.embedded || (this.benchmarking = new ae({
                    apollo: this.apollo,
                    config: this.config,
                    dynamicSettings: this.dynamicSettings,
                    logger: this.logger,
                    sentinel: this.sentinel,
                    session: this.session,
                    storage: this.storage,
                    store: this.store,
                    tracking: this.tracking,
                    window: window
                })), this.experiments = new k({
                    logger: this.logger,
                    session: this.session,
                    store: this.store,
                    storage: this.storage,
                    tracking: this.tracking
                }), this.tmi = new R(this.logger, this.config)
            }
            return e.prototype.mount = function(e, t) {
                l.render(this.wrap(e), t)
            }, e.prototype.wrap = function(e) {
                return o.createElement(s.ApolloProvider, {
                    client: this.apollo.client
                }, o.createElement(c.a, {
                    store: this.store.getReduxStore()
                }, e))
            }, e.prototype.setPageTitle = function(e) {
                this.pageTitle = e ? e + " - Twitch" : "Twitch", this.updateDocumentTitle()
            }, e.prototype.setBadgeCount = function(e) {
                this.badgeCount = e, this.updateDocumentTitle()
            }, e.prototype.updateDocumentTitle = function() {
                if (this.badgeCount > 0) {
                    var e = this.badgeCount > 99 ? "99+" : "" + this.badgeCount;
                    document.title = "(" + e + ") " + this.pageTitle
                } else document.title = this.pageTitle
            }, e
        }()
    },
    JVK9: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), t.b = function() {
            return {
                type: i
            }
        };
        var i = "features.ads.TRACKING_SET"
    },
    M1vR: function(e, t) {},
    MQjL: function(e, t) {},
    MRMr: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            return function(n) {
                return function(l) {
                    function c(n, i) {
                        var r = l.call(this, n) || this;
                        return r.logger = o.i.withCategory("latency-tracking"), r.getChildContext = function() {
                            return {
                                latencyTracking: r.tracker
                            }
                        }, t && t.isRoot ? r.tracker = o.n.benchmarking.getRootLatencyTracker() : i.latencyTracking ? r.tracker = i.latencyTracking.createChild(e, t && t.destination) : (r.tracker = new s.a(e, t && t.destination), r.tracker.root = new s.a("Root", t && t.destination)), r
                    }
                    return i.__extends(c, l), c.prototype.componentDidMount = function() {
                        t && t.autoReportInteractive && (this.logger.debug("Using default implementation of reportInteractive", {
                            componentID: e
                        }), this.tracker.reportInteractive())
                    }, c.prototype.render = function() {
                        var e = {
                            latencyTracking: this.tracker,
                            rootLatencyTracker: t && t.isRoot ? this.tracker : this.tracker.root
                        };
                        return a.createElement(n, i.__assign({}, this.props, e))
                    }, c.displayName = "WithLatencyTracking(" + (n.displayName || n.name || "Component") + ")", c.contextTypes = {
                        latencyTracking: r.object
                    }, c.childContextTypes = {
                        latencyTracking: r.object
                    }, c
                }(a.Component)
            }
        };
        var i = n("TToO"),
            r = n("KSGD"),
            a = (n.n(r), n("U7vG")),
            o = (n.n(a), n("6sO2")),
            s = n("75D5")
    },
    N221: function(e, t, n) {
        "use strict";
        var i, r = n("TToO"),
            a = n("HW6M"),
            o = n("KSGD"),
            s = n("U7vG"),
            l = n("VjV9"),
            c = n("5kgt"),
            h = (n("8pDc"), 100),
            u = "scrollable-area-wrapper";
        ! function(e) {
            e[e.Resize = 0] = "Resize", e[e.Scroll = 1] = "Scroll", e[e.Wheel = 2] = "Wheel"
        }(i || (i = {}));
        var d = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.resizeTimeout = 0, n.receivers = [], n.scrollTimeout = 0, n.wheelTimeout = 0, n.getChildContext = function() {
                    return {
                        registerReceiver: n.registerReceiver,
                        requestVisibilityCheck: n.requestVisibilityCheck,
                        getScrollContent: n.getScrollContent,
                        scrollToTop: n.scrollToTop,
                        yScrollTo: n.yScrollTo
                    }
                }, n.scrollToTop = function() {
                    n.scrollContent && (n.scrollContent.scrollTop = 0), n.onScroll()
                }, n.notifyReceivers = function(e) {
                    requestAnimationFrame(function() {
                        if (n.scrollContent) {
                            var t = n.scrollContent.getBoundingClientRect();
                            e && (e.offset = n.scrollContent.scrollTop), n.receivers.forEach(function(n) {
                                n.checkVisible(t, e)
                            })
                        }
                    })
                }, n.onResize = function() {
                    if (!n.resizeTimeout) {
                        var e = {
                            type: i.Resize,
                            offset: n.scrollContent.scrollTop
                        };
                        n.props.disableDebounce ? n.notifyReceivers(e) : n.resizeTimeout = setTimeout(function() {
                            n.resizeTimeout = 0, n.notifyReceivers(e)
                        }, h)
                    }
                }, n.onScroll = function() {
                    if (!n.scrollTimeout && n.scrollContent) {
                        var e = {
                            type: i.Scroll,
                            offset: n.scrollContent.scrollTop
                        };
                        n.props.disableDebounce ? n.notifyReceivers(e) : n.scrollTimeout = setTimeout(function() {
                            n.scrollTimeout = 0, n.notifyReceivers(e)
                        }, h)
                    }
                }, n.onWheel = function(e) {
                    if (!n.wheelTimeout && n.scrollContent) {
                        var t = {
                            type: i.Wheel,
                            offset: n.scrollContent.scrollTop,
                            wheelEvent: e
                        };
                        n.props.disableDebounce ? n.notifyReceivers(t) : n.wheelTimeout = setTimeout(function() {
                            n.wheelTimeout = 0, n.notifyReceivers(t)
                        }, h)
                    }
                }, n.registerReceiver = function(e) {
                    return n.receivers.push(e), n.requestVisibilityCheck(e),
                        function() {
                            var t = n.receivers.indexOf(e);
                            n.receivers.splice(t, 1)
                        }
                }, n.requestVisibilityCheck = function(e) {
                    requestAnimationFrame(function() {
                        var t = n.scrollContent;
                        if (t) {
                            var i = t.getBoundingClientRect();
                            e.checkVisible(i)
                        }
                    })
                }, n.setRef = function(e) {
                    return n.root = e
                }, n.yScrollTo = function(e) {
                    n.scrollContent && (n.scrollContent.scrollTop = e), n.onScroll()
                }, n.getScrollContent = function() {
                    return n.scrollContent
                }, t.scrollRef && t.scrollRef(n), n
            }
            return r.__extends(t, e), t.prototype.componentDidMount = function() {
                if (this.root) {
                    if (this.simplebarRef = new l(this.root), this.scrollContent = this.simplebarRef.getScrollElement(), this.props.contentRef && this.props.contentRef(this.scrollContent), this.props.contentClassName) {
                        var e = this.scrollContent.querySelector(".simplebar-content");
                        e && e.classList.add(this.props.contentClassName)
                    }
                    this.props.scrollContentClassName && this.scrollContent.classList.add(this.props.scrollContentClassName), window.addEventListener("resize", this.onResize), this.scrollContent.addEventListener("scroll", this.onScroll), this.scrollContent.addEventListener("wheel", this.onWheel), this.notifyReceivers()
                }
            }, t.prototype.componentWillUnmount = function() {
                this.root && (delete this.simplebarRef, this.scrollContent.removeEventListener("scroll", this.onScroll), window.removeEventListener("resize", this.onResize))
            }, t.prototype.render = function() {
                var e = this.props,
                    t = (e.disableDebounce, e.suppressScrollX, e.suppressScrollY, e.scrollRef, e.scrollContentClassName, e.contentClassName, r.__rest(e, ["disableDebounce", "suppressScrollX", "suppressScrollY", "scrollRef", "scrollContentClassName", "contentClassName"])),
                    n = {
                        "scrollable-area": !0,
                        "scrollable-area--suppress-scroll-x": this.props.suppressScrollX,
                        "scrollable-area--suppress-scroll-y": this.props.suppressScrollY
                    };
                return s.createElement("div", r.__assign({
                    className: a(t.className, n),
                    "data-test-selector": u,
                    ref: this.setRef
                }, Object(c.a)(this.props), {
                    style: this.props.style
                }), s.Children.only(this.props.children))
            }, t.childContextTypes = {
                registerReceiver: o.func,
                requestVisibilityCheck: o.func,
                getScrollContent: o.func,
                scrollToTop: o.func,
                yScrollTo: o.func
            }, t
        }(s.Component);
        n.d(t, !1, function() {
            return u
        }), n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return d
        })
    },
    N72C: function(e, t) {},
    NKW1: function(e, t) {},
    NS5s: function(e, t) {},
    NU58: function(e, t) {},
    NXs7: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e[e.Light = 0] = "Light", e[e.Dark = 1] = "Dark"
        }(i || (i = {}))
    },
    NikC: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), t.b = function(e, t, n) {
            return void 0 === n && (n = !0),
                function(i) {
                    i(Object(a.s)(e)), n && Object(r.d)(e), t && Object(o.b)(e, t)
                }
        };
        var i, r = n("VAT8"),
            a = n("7enT"),
            o = n("xrVp");
        ! function(e) {
            e[e.UserMenu = 1] = "UserMenu", e[e.TypedCommand = 2] = "TypedCommand"
        }(i || (i = {}))
    },
    NoSW: function(e, t, n) {
        "use strict";
        var i = n("MRMr");
        n.d(t, "a", function() {
            return i.a
        })
    },
    OXEC: function(e, t) {},
    Odds: function(e, t, n) {
        "use strict";

        function i(e) {
            for (var t = {}, n = 0, i = Object.keys(e).filter(function(e) {
                    return e.startsWith("data-")
                }); n < i.length; n++) {
                var r = i[n];
                t[r] = e[r]
            }
            return t
        }

        function r(e) {
            for (var t = {}, n = 0, i = Object.keys(e); n < i.length; n++) {
                var r = i[n];
                Et.has(r) && (t[r] = e[r])
            }
            return t
        }

        function a(e) {
            var t;
            return "string" == typeof e ? t = e : e.pathname && (t = e.pathname), !(!t || !/^\w+:\/\//.test(t) && !t.startsWith("//"))
        }

        function o() {
            return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            })
        }
        var s, l = n("TToO"),
            c = n("HW6M"),
            h = n("U7vG");
        n("HyyJ");
        ! function(e) {
            e[e.Start = 1] = "Start", e[e.End = 2] = "End", e[e.Center = 3] = "Center", e[e.Baseline = 4] = "Baseline", e[e.Stretch = 5] = "Stretch"
        }(s || (s = {}));
        var u, d = (H = {}, H[s.Start] = "align-content-start", H[s.End] = "align-content-end", H[s.Center] = "align-content-center", H[s.Baseline] = "align-content-baseline", H[s.Stretch] = "align-content-stretch", H);
        ! function(e) {
            e[e.Start = 1] = "Start", e[e.End = 2] = "End", e[e.Center = 3] = "Center", e[e.Baseline = 4] = "Baseline", e[e.Stretch = 5] = "Stretch"
        }(u || (u = {}));
        var p, m = (A = {}, A[u.Start] = "align-items-start", A[u.End] = "align-items-end", A[u.Center] = "align-items-center", A[u.Baseline] = "align-items-baseline", A[u.Stretch] = "align-items-stretch", A);
        ! function(e) {
            e[e.Start = 1] = "Start", e[e.End = 2] = "End", e[e.Center = 3] = "Center", e[e.Baseline = 4] = "Baseline", e[e.Stretch = 5] = "Stretch"
        }(p || (p = {}));
        var g, f = (P = {}, P[p.Start] = "align-self-start", P[p.End] = "align-self-end", P[p.Center] = "align-self-center", P[p.Baseline] = "align-self-baseline", P[p.Stretch] = "align-self-stretch", P);
        ! function(e) {
            e[e.Block = 1] = "Block", e[e.Flex = 2] = "Flex", e[e.Inline = 3] = "Inline", e[e.InlineBlock = 4] = "InlineBlock", e[e.InlineFlex = 5] = "InlineFlex", e[e.Hide = 6] = "Hide", e[e.HideAccessible = 7] = "HideAccessible"
        }(g || (g = {}));
        var v, w = (B = {}, B[g.Block] = "block", B[g.Flex] = "flex", B[g.Inline] = "inline", B[g.InlineBlock] = "inline-block", B[g.InlineFlex] = "inline-flex", B[g.Hide] = "hide", B[g.HideAccessible] = "hide-accessible", B);
        ! function(e) {
            e[e.Column = 1] = "Column", e[e.ColumnReverse = 2] = "ColumnReverse", e[e.Row = 3] = "Row", e[e.RowReverse = 4] = "RowReverse"
        }(v || (v = {}));
        var b, y = (O = {}, O[v.Column] = "flex-column", O[v.ColumnReverse] = "flex-column-reverse", O[v.Row] = "flex-row", O[v.RowReverse] = "flex-row-reverse", O);
        ! function(e) {
            e[e.Wrap = 1] = "Wrap", e[e.NoWrap = 2] = "NoWrap", e[e.WrapReverse = 3] = "WrapReverse"
        }(b || (b = {}));
        var _, E = (V = {}, V[b.Wrap] = "flex-wrap", V[b.NoWrap] = "flex-nowrap", V[b.WrapReverse] = "flex-wrap-reverse", V);
        ! function(e) {
            e[e.Start = 1] = "Start", e[e.End = 2] = "End", e[e.Center = 3] = "Center", e[e.Between = 4] = "Between", e[e.Around = 5] = "Around"
        }(_ || (_ = {}));
        var C, k = (F = {}, F[_.Start] = "justify-content-start", F[_.End] = "justify-content-end", F[_.Center] = "justify-content-center", F[_.Between] = "justify-content-between", F[_.Around] = "justify-content-around", F);
        ! function(e) {
            e[e.Auto = 1] = "Auto", e[e.Scroll = 2] = "Scroll", e[e.Visible = 3] = "Visible", e[e.Hidden = 4] = "Hidden"
        }(C || (C = {}));
        var L, S = (U = {}, U[C.Auto] = "tw-overflow-auto", U[C.Scroll] = "tw-overflow-scroll", U[C.Visible] = "tw-overflow-visible", U[C.Hidden] = "tw-overflow-hidden", U);
        ! function(e) {
            e[e.Relative = 1] = "Relative", e[e.Absolute = 2] = "Absolute", e[e.Fixed = 3] = "Fixed"
        }(L || (L = {}));
        var T, x = (W = {}, W[L.Relative] = "relative", W[L.Absolute] = "absolute", W[L.Fixed] = "fixed", W);
        ! function(e) {
            e[e.None = 1] = "None", e[e.X = 2] = "X", e[e.Y = 3] = "Y"
        }(T || (T = {}));
        var N, z = (q = {}, q[T.None] = "tw-resize-none", q[T.X] = "tw-resize-x", q[T.Y] = "tw-resize-y", q);
        ! function(e) {
            e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right"
        }(N || (N = {}));
        var R, M = (j = {}, j[N.Left] = "align-left", j[N.Center] = "align-center", j[N.Right] = "align-right", j);
        ! function(e) {
            e[e.Visible = 1] = "Visible", e[e.Hidden = 2] = "Hidden"
        }(R || (R = {}));
        var I, D = (G = {}, G[R.Visible] = "visible", G[R.Hidden] = "hidden", G);
        ! function(e) {
            e[e.Default = 1] = "Default", e[e.Above = 2] = "Above", e[e.Below = 3] = "Below"
        }(I || (I = {}));
        var H, A, P, B, O, V, F, U, W, q, j, G, Q, K, Z = (Q = {}, Q[I.Default] = "tw-z-default", Q[I.Above] = "tw-z-above", Q[I.Below] = "tw-z-below", Q),
            X = new Set([0, .5, 1, 2, 3, 4, 5, "auto"]),
            Y = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = (p = {}, p["" + this.props.className] = !!this.props.className, p["tw-top-0"] = this.props.attachTop, p["tw-right-0"] = this.props.attachRight, p["tw-bottom-0"] = this.props.attachBottom, p["tw-left-0"] = this.props.attachLeft, p["tw-ellipsis"] = this.props.ellipsis, p["tw-full-width"] = this.props.fullWidth, p["tw-full-height"] = this.props.fullHeight, p);
                    this.props.overflow && (e[S[this.props.overflow]] = !0), this.props.resize && (e[z[T.X]] = !0), this.props.zIndex && (e[Z[this.props.zIndex]] = !0);
                    var t = this.getBreakpointClasses(this.props),
                        n = this.getBreakpointClasses(this.props.breakpointExtraSmall, "xs"),
                        r = this.getBreakpointClasses(this.props.breakpointSmall, "sm"),
                        a = this.getBreakpointClasses(this.props.breakpointMedium, "md"),
                        o = this.getBreakpointClasses(this.props.breakpointLarge, "lg"),
                        s = this.getBreakpointClasses(this.props.breakpointExtraLarge, "xl"),
                        u = this.getBreakpointClasses(this.props.breakpointExtraExtraLarge, "xxl"),
                        d = h.Children.only(this.props.children);
                    return h.cloneElement(d, l.__assign({}, d.props, i(this.props), {
                        className: c(d.props.className, e, t, n, r, a, o, s, u)
                    }));
                    var p
                }, t.prototype.getBreakpointClasses = function(e, t) {
                    if (!e) return "";
                    var n = [];
                    if (t = t ? "tw-" + t + "-" : "tw-", e.alignContent && n.push(t + d[e.alignContent]), e.alignItems && n.push(t + m[e.alignItems]), e.alignSelf && n.push(t + f[e.alignSelf]), e.display && n.push(t + w[e.display]), e.flexDirection && n.push(t + y[e.flexDirection]), void 0 !== e.flexGrow && n.push(t + "flex-grow-" + e.flexGrow), void 0 !== e.flexOrder && n.push(t + "item-order-" + e.flexOrder), void 0 !== e.flexShrink && n.push(t + "flex-shrink-" + e.flexShrink), e.flexWrap && n.push(t + E[e.flexWrap]), e.justifyContent && n.push(t + k[e.justifyContent]), e.position && n.push(t + x[e.position]), e.textAlign && n.push(t + M[e.textAlign]), e.visibility && n.push(t + D[e.visibility]), void 0 !== e.margin) {
                        "string" == typeof(i = this.getSpacingClasses("mg", e.margin)) ? n.push(t + i): i.forEach(function(e) {
                            n.push(t + e)
                        })
                    }
                    if (void 0 !== e.padding) {
                        var i;
                        "string" == typeof(i = this.getSpacingClasses("pd", e.padding)) ? n.push(t + i): i.forEach(function(e) {
                            n.push(t + e)
                        })
                    }
                    return n
                }, t.prototype.getSpacingClasses = function(e, t) {
                    if (void 0 === t || null === t) return "";
                    if ("object" == typeof t) {
                        if (t.x && (t.left || t.right)) throw new Error("Cannot use `x` and `left` or `right` at the same time.");
                        if (t.y && (t.top || t.bottom)) throw new Error("Cannot use `y` and `top` or `bottom` at the same time.");
                        var n = [];
                        return void 0 !== t.top && (.5 === t.top ? n.push(e + "-t-05") : n.push(e + "-t-" + t.top)), void 0 !== t.right && (.5 === t.right ? n.push(e + "-r-05") : n.push(e + "-r-" + t.right)), void 0 !== t.bottom && (.5 === t.bottom ? n.push(e + "-b-05") : n.push(e + "-b-" + t.bottom)), void 0 !== t.left && (.5 === t.left ? n.push(e + "-l-05") : n.push(e + "-l-" + t.left)), void 0 !== t.x && (.5 === t.x ? n.push(e + "-x-05") : n.push(e + "-x-" + t.x)), void 0 !== t.y && (.5 === t.y ? n.push(e + "-y-05") : n.push(e + "-y-" + t.y)), n
                    }
                    if (!X.has(t) || "tw-pd" === e && "auto" === t) throw new Error(t + " is not a valid property of either margin or padding");
                    return .5 === t ? e + "-05" : "auto" === t ? e + "-auto" : e + "-" + t
                }, t
            }(h.Component),
            J = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return h.createElement(Y, l.__assign({}, this.props), h.createElement("div", {
                        ref: this.props.refDelegate
                    }, this.props.children))
                }, t
            }(Y);
        n("oM0L");
        ! function(e) {
            e[e.Short = 1] = "Short", e[e.Medium = 2] = "Medium", e[e.Long = 3] = "Long", e[e.ExtraLong = 4] = "ExtraLong"
        }(K || (K = {}));
        var $, ee = (se = {}, se[K.Short] = "tw-animation--delay-short", se[K.Medium] = "tw-animation--delay-medium", se[K.Long] = "tw-animation--delay-long", se[K.ExtraLong] = "tw-animation--delay-extra-long", se);
        ! function(e) {
            e[e.Short = 1] = "Short", e[e.Medium = 2] = "Medium", e[e.Long = 3] = "Long", e[e.ExtraLong = 4] = "ExtraLong"
        }($ || ($ = {}));
        var te, ne = (le = {}, le[$.Short] = "tw-animation--duration-short", le[$.Medium] = "tw-animation--duration-medium", le[$.Long] = "tw-animation--duration-long", le[$.ExtraLong] = "tw-animation--duration-extra-long", le);
        ! function(e) {
            e[e.Both = 1] = "Both", e[e.None = 2] = "None", e[e.Forwards = 3] = "Forwards", e[e.Backwards = 4] = "Backwards"
        }(te || (te = {}));
        var ie, re = (ce = {}, ce[te.Both] = "tw-animation--fill-mode-both", ce[te.None] = "tw-animation--fill-mode-none", ce[te.Forwards] = "tw-animation--fill-mode-forwards", ce[te.Backwards] = "tw-animation--fill-mode-backwards", ce);
        ! function(e) {
            e[e.Ease = 1] = "Ease", e[e.Linear = 2] = "Linear", e[e.EaseIn = 3] = "EaseIn", e[e.EaseOut = 4] = "EaseOut", e[e.EaseInOut = 5] = "EaseInOut"
        }(ie || (ie = {}));
        var ae, oe = (he = {}, he[ie.Ease] = "tw-animation--timing-ease", he[ie.Linear] = "tw-animation--timing-linear", he[ie.EaseIn] = "tw-animation--timing-ease-in", he[ie.EaseOut] = "tw-animation--timing-ease-out", he[ie.EaseInOut] = "tw-animation--timing-ease-in-out", he);
        ! function(e) {
            e[e.Bounce = 1] = "Bounce", e[e.BounceIn = 2] = "BounceIn", e[e.BounceOut = 3] = "BounceOut", e[e.FadeIn = 4] = "FadeIn", e[e.FadeOut = 5] = "FadeOut", e[e.SlideInTop = 6] = "SlideInTop", e[e.SlideInRight = 7] = "SlideInRight", e[e.SlideInBottom = 8] = "SlideInBottom", e[e.SlideInLeft = 9] = "SlideInLeft", e[e.SlideOutTop = 10] = "SlideOutTop", e[e.SlideOutRight = 11] = "SlideOutRight", e[e.SlideOutBottom = 12] = "SlideOutBottom", e[e.SlideOutLeft = 13] = "SlideOutLeft"
        }(ae || (ae = {}));
        var se, le, ce, he, ue, de, pe = (ue = {}, ue[ae.Bounce] = "tw-animation--bounce", ue[ae.BounceIn] = "tw-animation--bounce-in", ue[ae.BounceOut] = "tw-animation--bounce-out", ue[ae.FadeIn] = "tw-animation--fade-in", ue[ae.FadeOut] = "tw-animation--fade-out", ue[ae.SlideInTop] = "tw-animation--slide-in-top", ue[ae.SlideInRight] = "tw-animation--slide-in-right", ue[ae.SlideInBottom] = "tw-animation--slide-in-bottom", ue[ae.SlideInLeft] = "tw-animation--slide-in-left", ue[ae.SlideOutTop] = "tw-animation--slide-out-top", ue[ae.SlideOutRight] = "tw-animation--slide-out-right", ue[ae.SlideOutBottom] = "tw-animation--slide-out-bottom", ue[ae.SlideOutLeft] = "tw-animation--slide-out-left", ue),
            me = function(e) {
                var t = {
                    "tw-animation": !0,
                    "tw-animation--animate": e.enabled,
                    "tw-animation--loop": e.loop
                };
                return e.delay && (t[ee[e.delay]] = !0), e.duration ? t[ne[e.duration]] = !0 : t[ne[$.Short]] = !0, e.fillMode ? t[re[e.fillMode]] = !0 : t[re[te.Both]] = !0, e.timing ? t[oe[e.timing]] = !0 : t[oe[ie.Ease]] = !0, e.type && (t[pe[e.type]] = !0), h.createElement(Y, l.__assign({
                    className: c(t)
                }, i(e)), h.createElement("div", {
                    onAnimationStart: e.onAnimationStart,
                    onAnimationEnd: e.onAnimationEnd,
                    "data-a-target": "tw-animation-target"
                }, e.children))
            };
        n("OXEC");
        ! function(e) {
            e[e.Aspect21x9 = 1] = "Aspect21x9", e[e.Aspect16x9 = 2] = "Aspect16x9", e[e.Aspect4x3 = 3] = "Aspect4x3", e[e.Aspect1x1 = 4] = "Aspect1x1", e[e.Aspect3x4 = 5] = "Aspect3x4", e[e.BoxArt = 6] = "BoxArt"
        }(de || (de = {}));
        var ge;
        ! function(e) {
            e[e.Top = 1] = "Top", e[e.Center = 2] = "Center", e[e.Bottom = 3] = "Bottom"
        }(ge || (ge = {}));
        var fe, ve, we, be = (fe = {}, fe[de.Aspect21x9] = "tw-aspect--21x9", fe[de.Aspect16x9] = "tw-aspect--16x9", fe[de.Aspect4x3] = "tw-aspect--4x3", fe[de.Aspect1x1] = "tw-aspect--1x1", fe[de.Aspect3x4] = "tw-aspect--3x4", fe[de.BoxArt] = "tw-aspect--3x4", fe),
            ye = (ve = {}, ve[ge.Top] = "tw-aspect--align-top", ve[ge.Center] = "tw-aspect--align-center", ve[ge.Bottom] = "tw-aspect--align-bottom", ve),
            _e = function(e) {
                var t = {
                    "tw-aspect--overflow": e.overflow
                };
                return e.ratio ? t[be[e.ratio]] = !0 : t[be[de.Aspect16x9]] = !0, e.align ? t[ye[e.align]] = !0 : t[ye[ge.Top]] = !0, h.createElement("figure", l.__assign({
                    className: c("tw-aspect", t)
                }, i(e)), e.children)
            },
            Ee = function(e) {
                return new RegExp(/^(\d+\.?\d*)(w|x)$/).test(e)
            },
            Ce = function(e) {
                var t;
                e.sizes && (t = e.sizes.map(function(e) {
                    return e.mediaCondition ? e.mediaCondition + " " + e.size : "" + e.size
                }).join(",") || void 0);
                var n = Object.keys(e.srcSet || {}).filter(Ee).map(function(t) {
                    return e.srcSet ? e.srcSet[t] + " " + t : ""
                }).join(",") || void 0;
                return h.createElement("img", l.__assign({
                    className: c({
                        "tw-image": !0
                    })
                }, i(e), {
                    src: e.src,
                    alt: e.alt,
                    srcSet: n,
                    sizes: t,
                    onError: e.onError,
                    onLoad: e.onLoad,
                    ref: e.refHandler
                }))
            };
        n("WtTG");
        ! function(e) {
            e[e.Offline = 1] = "Offline", e[e.Invisible = 2] = "Invisible", e[e.Online = 3] = "Online", e[e.Busy = 4] = "Busy", e[e.Away = 5] = "Away"
        }(we || (we = {}));
        var ke, Le, Se = (ke = {}, ke[we.Offline] = "tw-presence__indicator--offline", ke[we.Invisible] = "tw-presence__indicator--invisible", ke[we.Online] = "tw-presence__indicator--online", ke[we.Busy] = "tw-presence__indicator--busy", ke[we.Away] = "tw-presence__indicator--away", ke),
            Te = function(e) {
                var t = {
                        "tw-presence": !0,
                        "tw-presence--border": e.border
                    },
                    n = {};
                return e.status ? n[Se[e.status]] = !0 : n[Se[we.Offline]] = !0, h.createElement(J, l.__assign({
                    className: c(t),
                    display: g.InlineFlex,
                    position: L.Relative
                }, i(e)), h.createElement("div", {
                    className: "tw-presence__border"
                }), h.createElement("div", {
                    className: "tw-presence__indicator " + c(n)
                }))
            };
        n("4gX4");
        ! function(e) {
            e[e.Base = 1] = "Base", e[e.Alt = 2] = "Alt", e[e.Alt2 = 3] = "Alt2", e[e.Link = 4] = "Link", e[e.Live = 5] = "Live", e[e.Error = 6] = "Error", e[e.Overlay = 7] = "Overlay", e[e.OverlayAlt = 8] = "OverlayAlt"
        }(Le || (Le = {}));
        var xe, Ne = (Fe = {}, Fe[Le.Base] = "tw-c-text", Fe[Le.Alt] = "tw-c-text-alt", Fe[Le.Alt2] = "tw-c-text-alt-2", Fe[Le.Link] = "tw-c-text-link", Fe[Le.Live] = "tw-c-text-live", Fe[Le.Error] = "tw-c-text-error", Fe[Le.Overlay] = "tw-c-text-overlay", Fe[Le.OverlayAlt] = "tw-c-text-overlay-alt", Fe);
        ! function(e) {
            e[e.Size1 = 1] = "Size1", e[e.Size2 = 2] = "Size2", e[e.Size3 = 3] = "Size3", e[e.Size4 = 4] = "Size4", e[e.Size5 = 5] = "Size5", e[e.Size6 = 6] = "Size6", e[e.Size7 = 7] = "Size7", e[e.Size8 = 8] = "Size8"
        }(xe || (xe = {}));
        var ze, Re = (Ue = {}, Ue[xe.Size1] = "font-size-1", Ue[xe.Size2] = "font-size-2", Ue[xe.Size3] = "font-size-3", Ue[xe.Size4] = "font-size-4", Ue[xe.Size5] = "font-size-5", Ue[xe.Size6] = "font-size-6", Ue[xe.Size7] = "font-size-7", Ue[xe.Size8] = "font-size-8", Ue);
        ! function(e) {
            e[e.Body = 1] = "Body", e[e.Heading = 2] = "Heading"
        }(ze || (ze = {}));
        var Me, Ie = (We = {}, We[ze.Body] = "tw-line-height-body", We[ze.Heading] = "tw-line-height-heading", We);
        ! function(e) {
            e[e.Underline = 1] = "Underline", e[e.Strikethrough = 2] = "Strikethrough"
        }(Me || (Me = {}));
        var De, He = (qe = {}, qe[Me.Underline] = "tw-underline", qe[Me.Strikethrough] = "tw-strikethrough", qe);
        ! function(e) {
            e[e.Capitalize = 1] = "Capitalize", e[e.Uppercase = 2] = "Uppercase"
        }(De || (De = {}));
        var Ae, Pe = (je = {}, je[De.Capitalize] = "tw-capcase", je[De.Uppercase] = "tw-upcase", je);
        ! function(e) {
            e.P = "p", e.Span = "span", e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e.Strong = "strong", e.Em = "em"
        }(Ae || (Ae = {}));
        var Be;
        ! function(e) {
            e[e.Top = 1] = "Top", e[e.Middle = 2] = "Middle", e[e.Baseline = 3] = "Baseline", e[e.Bottom = 4] = "Bottom", e[e.TextTop = 5] = "TextTop", e[e.TextBottom = 6] = "TextBottom"
        }(Be || (Be = {}));
        var Oe, Ve = (Ge = {}, Ge[Be.Top] = "tw-align-top", Ge[Be.Middle] = "tw-align-middle", Ge[Be.Baseline] = "tw-align-baseline", Ge[Be.Bottom] = "tw-align-bottom", Ge[Be.TextTop] = "tw-align-text-top", Ge[Be.TextBottom] = "tw-align-text-bottom", Ge);
        ! function(e) {
            e[e.Normal = 1] = "Normal", e[e.BreakAll = 2] = "BreakAll", e[e.KeepAll = 3] = "KeepAll", e[e.BreakWord = 4] = "BreakWord"
        }(Oe || (Oe = {}));
        var Fe, Ue, We, qe, je, Ge, Qe, Ke, Ze = (Qe = {}, Qe[Oe.Normal] = "tw-word-break-normal", Qe[Oe.BreakAll] = "tw-word-break-all", Qe[Oe.KeepAll] = "tw-word-break-keep-all", Qe[Oe.BreakWord] = "tw-word-break-word", Qe),
            Xe = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = (p = {
                        "tw-ellipsis": this.props.ellipsis || this.props.lines && this.props.lines > 0,
                        "tw-italic": this.props.italic,
                        "tw-nowrap": this.props.noWrap,
                        "tw-strong": this.props.bold
                    }, p["tw-line-clamp-2"] = 2 === this.props.lines, p);
                    this.props.align && (e[Ve[this.props.align]] = !0), this.props.color && (e[Ne[this.props.color]] = !0), this.props.lineHeight && (e[Ie[this.props.lineHeight]] = !0), this.props.transform && (e[Pe[this.props.transform]] = !0), this.props.decoration && (e[He[this.props.decoration]] = !0), this.props.wordBreak && (e[Ze[this.props.wordBreak]] = !0);
                    var t, n = this.getBreakpointClasses(this.props),
                        r = this.getBreakpointClasses(this.props.breakpointExtraSmall, "xs"),
                        a = this.getBreakpointClasses(this.props.breakpointSmall, "sm"),
                        o = this.getBreakpointClasses(this.props.breakpointMedium, "md"),
                        s = this.getBreakpointClasses(this.props.breakpointLarge, "lg"),
                        u = this.getBreakpointClasses(this.props.breakpointExtraLarge, "xl"),
                        d = this.getBreakpointClasses(this.props.breakpointExtraExtraLarge, "xxl");
                    return this.props.title ? t = this.props.title : this.props.ellipsis && "string" == typeof this.props.children && (t = this.props.children), h.createElement(this.props.type || "p", l.__assign({
                        className: c(this.props.className, e, n, r, a, o, s, u, d).trim()
                    }, i(this.props), {
                        title: t
                    }), this.props.children);
                    var p
                }, t.prototype.getBreakpointClasses = function(e, t) {
                    if (!e) return "";
                    var n = [];
                    return t = t ? "tw-" + t + "-" : "tw-", e.fontSize && n.push(t + Re[e.fontSize]), n
                }, t
            }(h.Component);
        n("kIPx");
        ! function(e) {
            e[e.Base = 1] = "Base", e[e.Alt = 2] = "Alt", e[e.Alt2 = 3] = "Alt2", e[e.Overlay = 4] = "Overlay", e[e.Accent = 5] = "Accent", e[e.AccentAlt = 6] = "AccentAlt", e[e.AccentAlt2 = 7] = "AccentAlt2"
        }(Ke || (Ke = {}));
        var Ye, Je = ($e = {}, $e[Ke.Base] = "tw-c-background", $e[Ke.Alt] = "tw-c-background-alt", $e[Ke.Alt2] = "tw-c-background-alt-2", $e[Ke.Overlay] = "tw-c-background-overlay", $e[Ke.Accent] = "tw-c-background-accent", $e[Ke.AccentAlt] = "tw-c-background-accent-alt", $e[Ke.AccentAlt2] = "tw-c-background-accent-alt-2", $e);
        ! function(e) {
            e[e.None = 1] = "None", e[e.Small = 2] = "Small", e[e.Medium = 3] = "Medium", e[e.Large = 4] = "Large", e[e.Rounded = 5] = "Rounded"
        }(Ye || (Ye = {}));
        var $e, et, tt, nt, it, rt = (et = {}, et[Ye.None] = "tw-border-radius-none", et[Ye.Small] = "tw-border-radius-small", et[Ye.Medium] = "tw-border-radius-medium", et[Ye.Large] = "tw-border-radius-large", et[Ye.Rounded] = "tw-border-radius-rounded", et),
            at = (tt = {}, tt[Le.Base] = "tw-c-text", tt[Le.Alt] = "tw-c-text-alt", tt[Le.Alt2] = "tw-c-text-alt-2", tt[Le.Link] = "tw-c-text-link", tt[Le.Live] = "tw-c-text-live", tt[Le.Error] = "tw-c-text-error", tt[Le.Overlay] = "tw-c-text-overlay", tt[Le.OverlayAlt] = "tw-c-text-overlay-alt", tt),
            ot = (nt = {}, nt[xe.Size1] = "font-size-1", nt[xe.Size2] = "font-size-2", nt[xe.Size3] = "font-size-3", nt[xe.Size4] = "font-size-4", nt[xe.Size5] = "font-size-5", nt[xe.Size6] = "font-size-6", nt[xe.Size7] = "font-size-7", nt[xe.Size8] = "font-size-8", nt),
            st = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = (g = {
                        "tw-border-t": this.props.border || this.props.borderMarked || this.props.borderTop,
                        "tw-border-r": this.props.border || this.props.borderMarked || this.props.borderRight,
                        "tw-border-b": this.props.border || this.props.borderMarked || this.props.borderBottom,
                        "tw-border-l": this.props.border || this.props.borderLeft && !this.props.borderMarked,
                        "tw-border--marked": this.props.borderMarked
                    }, g["tw-elevation-" + this.props.elevation] = !!this.props.elevation, g);
                    this.props.borderRadius && (e[rt[this.props.borderRadius]] = !0);
                    var t = this.getColorClass(),
                        n = this.getBackgroundClass(),
                        r = this.getBreakpointClasses(this.props),
                        a = this.getBreakpointClasses(this.props.breakpointExtraSmall, "xs"),
                        o = this.getBreakpointClasses(this.props.breakpointSmall, "sm"),
                        s = this.getBreakpointClasses(this.props.breakpointMedium, "md"),
                        u = this.getBreakpointClasses(this.props.breakpointLarge, "lg"),
                        d = this.getBreakpointClasses(this.props.breakpointExtraLarge, "xl"),
                        p = this.getBreakpointClasses(this.props.breakpointExtraExtraLarge, "xxl"),
                        m = l.__assign({}, this.props, i(this.props), {
                            className: c(this.props.className, e, n, t, r, a, o, s, u, d, p)
                        });
                    return h.createElement(Y, l.__assign({}, m));
                    var g
                }, t.prototype.getBreakpointClasses = function(e, t) {
                    if (!e) return "";
                    var n = [];
                    return t = t ? "tw-" + t + "-" : "tw-", e.fontSize && n.push(t + ot[e.fontSize]), n
                }, t.prototype.getColorClass = function() {
                    return this.props.background !== Ke.Overlay || this.props.color ? this.props.color ? at[this.props.color] : "" : at[Le.Overlay]
                }, t.prototype.getBackgroundClass = function() {
                    return this.props.background ? Je[this.props.background] : ""
                }, t
            }(h.Component),
            lt = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    return h.createElement(st, l.__assign({}, this.props), h.createElement("div", {
                        ref: this.props.refDelegate
                    }, this.props.children))
                }, t
            }(st),
            ct = (n("tcHh"), function(e) {
                var t, n, r = (a = {
                    "tw-avatar": !0
                }, a["tw-avatar--size-" + e.size] = !!e.size, a);
                return t = 300 === e.size ? "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_300x300.png" : 96 === e.size || 80 === e.size ? "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_150x150.png" : "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png", e.presenceIndicator && (n = h.createElement(J, {
                    className: "tw-avatar__presence",
                    display: g.Flex,
                    justifyContent: _.Center,
                    alignItems: u.Center,
                    position: L.Absolute
                }, h.createElement(Te, {
                    border: !0,
                    status: e.presenceStatus
                }))), h.createElement("figure", l.__assign({
                    className: c(r)
                }, i(e)), h.createElement(lt, {
                    borderRadius: e.borderRadius,
                    overflow: C.Hidden
                }, h.createElement(Ce, {
                    src: e.src || t,
                    alt: e.alt,
                    srcSet: e.srcSet,
                    sizes: e.sizes,
                    onLoad: e.onLoad,
                    onError: e.onError
                })), n);
                var a
            });
        n("oWcd");
        ! function(e) {
            e[e.Inherit = 0] = "Inherit", e[e.Alt = 1] = "Alt", e[e.Alt2 = 2] = "Alt2", e[e.Brand = 3] = "Brand", e[e.Live = 4] = "Live", e[e.Warn = 5] = "Warn", e[e.Alert = 6] = "Alert", e[e.Success = 7] = "Success", e[e.Prime = 8] = "Prime", e[e.Placeholder = 9] = "Placeholder", e[e.OverlayPlaceholder = 10] = "OverlayPlaceholder"
        }(it || (it = {}));
        var ht, ut = (dt = {}, dt[it.Inherit] = "tw-svg__asset--inherit", dt[it.Alt] = "tw-svg__asset--alt", dt[it.Alt2] = "tw-svg__asset--alt-2", dt[it.Brand] = "tw-svg__asset--brand", dt[it.Live] = "tw-svg__asset--live", dt[it.Warn] = "tw-svg__asset--warn", dt[it.Alert] = "tw-svg__asset--alert", dt[it.Success] = "tw-svg__asset--success", dt[it.Prime] = "tw-svg__asset--prime", dt[it.Placeholder] = "tw-svg__asset--placeholder", dt[it.OverlayPlaceholder] = "tw-svg__asset--overlay-placeholder", dt);
        ! function(e) {
            e[e.AddFriend = 1] = "AddFriend", e[e.AddUser = 2] = "AddUser", e[e.AddReaction = 3] = "AddReaction", e[e.AngleDown = 4] = "AngleDown", e[e.AngleLeft = 5] = "AngleLeft", e[e.AngleRight = 6] = "AngleRight", e[e.AngleUp = 7] = "AngleUp", e[e.ArrowDown = 8] = "ArrowDown", e[e.ArrowLeft = 9] = "ArrowLeft", e[e.ArrowRight = 10] = "ArrowRight", e[e.ArrowUp = 11] = "ArrowUp", e[e.Automod = 12] = "Automod", e[e.Ban = 13] = "Ban", e[e.Bits = 14] = "Bits", e[e.Camera = 15] = "Camera", e[e.ChatRiskFlag = 16] = "ChatRiskFlag", e[e.ChatSettingsBack = 17] = "ChatSettingsBack", e[e.Check = 18] = "Check", e[e.Clip = 19] = "Clip", e[e.Close = 20] = "Close", e[e.Collections = 21] = "Collections", e[e.Communities = 22] = "Communities", e[e.Conversations = 23] = "Conversations", e[e.Copy = 24] = "Copy", e[e.Crate = 25] = "Crate", e[e.Crown = 26] = "Crown", e[e.DeadGlitch = 27] = "DeadGlitch", e[e.Download = 28] = "Download", e[e.DragHandle = 29] = "DragHandle", e[e.Drops = 30] = "Drops", e[e.Edit = 31] = "Edit", e[e.Emoticons = 32] = "Emoticons", e[e.Events = 33] = "Events", e[e.EventsReminderAdd = 34] = "EventsReminderAdd", e[e.EventsReminderAdded = 35] = "EventsReminderAdded", e[e.EventsReminderRemove = 36] = "EventsReminderRemove", e[e.Extensions = 37] = "Extensions", e[e.Facebook = 38] = "Facebook", e[e.Featured = 39] = "Featured", e[e.Filter = 40] = "Filter", e[e.FollowCheck = 41] = "FollowCheck", e[e.FollowX = 42] = "FollowX", e[e.Friends = 43] = "Friends", e[e.FriendsSC = 44] = "FriendsSC", e[e.Gear = 45] = "Gear", e[e.Global = 46] = "Global", e[e.GlyphArrDown = 47] = "GlyphArrDown", e[e.GlyphArrLeft = 48] = "GlyphArrLeft", e[e.GlyphArrRight = 49] = "GlyphArrRight", e[e.GlyphArrUp = 50] = "GlyphArrUp", e[e.GlyphArrUpDown = 51] = "GlyphArrUpDown", e[e.GlyphFollowers = 52] = "GlyphFollowers", e[e.GlyphLength = 53] = "GlyphLength", e[e.GlyphLive = 54] = "GlyphLive", e[e.GlyphLiveSmall = 55] = "GlyphLiveSmall", e[e.GlyphViews = 56] = "GlyphViews", e[e.GridLayout = 57] = "GridLayout", e[e.Halt = 58] = "Halt", e[e.Hash = 59] = "Hash", e[e.Heart = 60] = "Heart", e[e.HGCNexus = 61] = "HGCNexus", e[e.Hide = 62] = "Hide", e[e.HourGlass = 63] = "HourGlass", e[e.Ignore = 64] = "Ignore", e[e.Link = 65] = "Link", e[e.Lock = 66] = "Lock", e[e.LogoGlitch = 67] = "LogoGlitch", e[e.LogoTwitch = 68] = "LogoTwitch", e[e.LogoTwitchDevelopers = 69] = "LogoTwitchDevelopers", e[e.LogoTwitchPrime = 70] = "LogoTwitchPrime", e[e.LogoTwitchPrimeHorizontal = 71] = "LogoTwitchPrimeHorizontal", e[e.Maximize = 72] = "Maximize", e[e.MessagesSC = 73] = "MessagesSC", e[e.Minimize = 74] = "Minimize", e[e.MiniPlayerExpand = 75] = "MiniPlayerExpand", e[e.MiniPlayerPause = 76] = "MiniPlayerPause", e[e.MiniPlayerPlay = 77] = "MiniPlayerPlay", e[e.More = 78] = "More", e[e.Muted = 79] = "Muted", e[e.NavBackpack = 80] = "NavBackpack", e[e.NavBug = 81] = "NavBug", e[e.NavChannels = 82] = "NavChannels", e[e.NavCreative = 83] = "NavCreative", e[e.NavDashboard = 84] = "NavDashboard", e[e.NavDiscover = 85] = "NavDiscover", e[e.NavFollowing = 86] = "NavFollowing", e[e.NavGames = 87] = "NavGames", e[e.NavLogout = 88] = "NavLogout", e[e.NavManager = 89] = "NavManager", e[e.NavMessages = 90] = "NavMessages", e[e.NavMore = 91] = "NavMore", e[e.NavMyChannel = 92] = "NavMyChannel", e[e.NavProfile = 93] = "NavProfile", e[e.NavSearch = 94] = "NavSearch", e[e.NavSettings = 95] = "NavSettings", e[e.NavVideos = 96] = "NavVideos", e[e.Neck = 97] = "Neck", e[e.NotificationBell = 98] = "NotificationBell", e[e.OP = 99] = "OP", e[e.PermissionsAdd = 100] = "PermissionsAdd", e[e.PermissionsAdded = 101] = "PermissionsAdded", e[e.PermissionsRemove = 102] = "PermissionsRemove", e[e.Pin = 103] = "Pin", e[e.Pinned = 104] = "Pinned", e[e.Play = 105] = "Play", e[e.Playlist = 106] = "Playlist", e[e.Plus = 107] = "Plus", e[e.Popout = 108] = "Popout", e[e.QuestionMark = 109] = "QuestionMark", e[e.Reddit = 110] = "Reddit", e[e.RemoveTag = 111] = "RemoveTag", e[e.RequestsSC = 112] = "RequestsSC", e[e.Roman1 = 113] = "Roman1", e[e.Roman2 = 114] = "Roman2", e[e.Roman3 = 115] = "Roman3", e[e.Roman4 = 116] = "Roman4", e[e.Roman5 = 117] = "Roman5", e[e.RoomList = 118] = "RoomList", e[e.RoomListOpen = 119] = "RoomListOpen", e[e.SearchNoResults = 120] = "SearchNoResults", e[e.Share = 121] = "Share", e[e.Shirt = 122] = "Shirt", e[e.Star = 123] = "Star", e[e.Steam = 124] = "Steam", e[e.Sword = 125] = "Sword", e[e.Team = 126] = "Team", e[e.Theater = 127] = "Theater", e[e.Timeout = 128] = "Timeout", e[e.Timer = 129] = "Timer", e[e.ToBottom = 130] = "ToBottom", e[e.ToTop = 131] = "ToTop", e[e.Trash = 132] = "Trash", e[e.Trophy = 133] = "Trophy", e[e.Twitter = 134] = "Twitter", e[e.Unheart = 135] = "Unheart", e[e.Unignore = 136] = "Unignore", e[e.Unlock = 137] = "Unlock", e[e.Upload = 138] = "Upload", e[e.VKontakte = 139] = "VKontakte", e[e.Verified = 140] = "Verified", e[e.VideoPremiere = 141] = "VideoPremiere", e[e.VideoRerun = 142] = "VideoRerun", e[e.ViewerList = 143] = "ViewerList", e[e.Warning = 144] = "Warning", e[e.WhisperMuted = 145] = "WhisperMuted"
        }(ht || (ht = {}));
        var dt, pt, mt, gt = (pt = {}, pt[ht.AddFriend] = {
                path: h.createElement("path", {
                    d: "M3,6 L1,6 L1,7 L3,7 L3,9 L4,9 L4,7 L6,7 L6,6 L4,6 L4,4 L3,4 L3,6 Z M9.57142857,3 L12.4285714,3 L13.8571429,4.42857143 L13.8571429,8 L11.7142857,9.42857143 L11.7142857,10.1428571 L14.5714286,10.1428571 L16,11.5714286 L16,13 L6,13 L6,11.5714286 L7.42857143,10.1428571 L10.2857143,10.1428571 L10.2857143,9.42857143 L8.14285714,8 L8.14285714,4.42857143 L9.57142857,3 Z"
                }),
                width: 16,
                height: 16
            }, pt[ht.AddUser] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M15,9h-3v3h-2V9H7V7h3V4h2v3h3V9z M9,6H6v4h2h1v3h4l0,0l0,0v1h-3H4H1v-1l3-3h2L4,8V2h6v1H9V6z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.AddReaction] = {
                path: h.createElement("path", {
                    d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm4-12c0-.776-.223-1-1-1h-2V9c0-.776-.223-1-1-1-.776 0-1 .224-1 1v2H9c-.776 0-1 .224-1 1 0 .777.224 1 1 1h2v2c0 .777.224 1 1 1 .777 0 1-.223 1-1v-2h2c.777 0 1-.223 1-1z"
                }),
                width: 24,
                height: 24
            }, pt[ht.AngleDown] = {
                path: h.createElement("path", {
                    d: "M8 8.89L2.556 3.444 1 5l7 7 7-7-1.556-1.556"
                }),
                width: 16,
                height: 16
            }, pt[ht.AngleLeft] = {
                path: h.createElement("path", {
                    d: "M7.11 8l5.446-5.444L11 1 4 8l7 7 1.556-1.556"
                }),
                width: 16,
                height: 16
            }, pt[ht.AngleRight] = {
                path: h.createElement("path", {
                    d: "M9.444 8L4 2.556 5.556 1l7 7-7 7L4 13.444"
                }),
                width: 16,
                height: 16
            }, pt[ht.AngleUp] = {
                path: h.createElement("path", {
                    d: "M8 6.11l5.444 5.446L15 10 8 3l-7 7 1.556 1.556"
                }),
                width: 16,
                height: 16
            }, pt[ht.ArrowDown] = {
                path: h.createElement("path", {
                    d: "M14.924 11.579a.994.994 0 0 0-.92-.616h-2.027V3.999A.997.997 0 0 0 10.983 3H8.998a.997.997 0 0 0-.995.999v6.964H5.995a.995.995 0 0 0-.92.616c-.153.373-.068.803.216 1.089l4.006 4.039a.992.992 0 0 0 1.406 0l4.006-4.039c.284-.286.369-.716.215-1.089",
                    fillRule: "evenodd"
                }),
                width: 20,
                height: 20
            }, pt[ht.ArrowLeft] = {
                path: h.createElement("path", {
                    d: "M8.42 14.924a.994.994 0 0 0 .617-.919v-2.028H16a.997.997 0 0 0 .999-.994V8.998a.997.997 0 0 0-1-.995H9.038V5.995a.995.995 0 0 0-.616-.919 1.003 1.003 0 0 0-1.09.215L3.294 9.297a.992.992 0 0 0 0 1.406l4.039 4.006c.286.284.716.369 1.089.215",
                    fillRule: "evenodd"
                }),
                width: 20,
                height: 20
            }, pt[ht.ArrowRight] = {
                path: h.createElement("path", {
                    d: "M11.579 5.076a.994.994 0 0 0-.616.919v2.028H3.999a.997.997 0 0 0-1 .994v1.985c0 .55.448.995 1 .995h6.964v2.008c0 .402.243.765.616.919.373.154.803.069 1.089-.215l4.039-4.006a.992.992 0 0 0 0-1.406l-4.04-4.006a1.003 1.003 0 0 0-1.088-.215",
                    fillRule: "evenodd"
                }),
                width: 20,
                height: 20
            }, pt[ht.ArrowUp] = {
                path: h.createElement("path", {
                    d: "M5.076 8.42a.994.994 0 0 0 .92.617h2.027V16c0 .552.446.999.994.999h1.985c.55 0 .995-.447.995-1V9.038h2.008a.995.995 0 0 0 .92-.616 1.003 1.003 0 0 0-.216-1.09l-4.006-4.038a.992.992 0 0 0-1.406 0L5.291 7.332a1.003 1.003 0 0 0-.215 1.089"
                }),
                width: 20,
                height: 20
            }, pt[ht.Automod] = {
                path: h.createElement("path", {
                    d: "M10 0l9 5c0 10.8852-9 15-9 15S1 15.8852 1 5l9-5z"
                }),
                width: 20,
                height: 20
            }, pt[ht.Ban] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M8,15c-3.866,0-7-3.134-7-7s3.134-7,7-7s7,3.134,7,7S11.866,15,8,15z M3,8c0,1.019,0.309,1.964,0.832,2.754l6.922-6.922C9.964,3.309,9.019,3,8,3C5.238,3,3,5.238,3,8z M12.169,5.246l-6.923,6.923C6.036,12.691,6.98,13,8,13c2.762,0,5-2.238,5-5C13,6.98,12.691,6.036,12.169,5.246z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.Bits] = {
                path: h.createElement("path", {
                    d: "M16.6,13.2L9,17.4l-7.6-4.2L9,0.5L16.6,13.2z M9.1,9.4l-5,3l5,2.5l5-2.6L9.1,9.4z M6,8.9L9,7l3,1.9L9,4.4L6,8.9z"
                }),
                width: 18,
                height: 18
            }, pt[ht.Camera] = {
                path: h.createElement("path", {
                    d: "M14 11.005c0 2.21-1.789 4-4 4-2.211 0-4-1.79-4-4 0-2.212 1.789-4 4-4 2.211 0 4 1.788 4 4m3.92-5.997H14.5c-.18 0-.324-.107-.36-.178-.126-.236-.576-1.453-.9-2.1-.45-.865-1.08-.721-1.08-.721H7.84s-.63-.144-1.08.72c-.324.648-.774 1.865-.9 2.1-.036.072-.18.18-.36.18H2.08c-.594 0-1.08.486-1.08 1.08V17.1c0 .431.18.9.72.9h16.56c.54 0 .72-.468.72-.9V6.09c0-.594-.486-1.08-1.08-1.08",
                    fillRule: "evenodd"
                }),
                width: 20,
                height: 20
            }, pt[ht.ChatRiskFlag] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M3,14 L1,14 L1,2 L3,2 L3,14 L3,14 Z M4,2 L11,2 L11,4 L15,4 L15,11 L8,11 L8,9 L4,9 L4,2 L4,2 Z"
                }),
                width: 16,
                height: 16
            }, pt[ht.Check] = {
                path: h.createElement("path", {
                    d: "M16,2.24074074 C16,2.24074074 6.56165287,14.0131532 6.46051168,14 C6.39491888,13.9966933 0,8.44444444 0,8.44444444 L2.13570634,5.74074074 L6.10456062,9.12962963 L13.4905451,0 L16,2.24074074 Z"
                }),
                width: 16,
                height: 16
            }, pt[ht.ChatSettingsBack] = {
                path: h.createElement("path", {
                    d: "M1 5l6-4v8z",
                    fillRule: "evenodd"
                }),
                width: 10,
                height: 10
            }, pt[ht.Clip] = {
                path: h.createElement("path", {
                    d: "M14.802 7.804l-3.83 1.026 2.928 2.321 3.83-1.026-2.928-2.321zm2.895-.776l3.981-1.067.777 2.898-1.83.49-2.928-2.321zM7.969 9.635l-1.745.467L7 13l3.898-1.044-2.929-2.321zM7 13h16v9H7v-9zm1.969 3h2.785l2.228-3h-2.785l-2.228 3zm7.018 0h2.785L21 13h-2.785l-2.228 3z"
                }),
                width: 30,
                height: 30
            }, pt[ht.Close] = {
                path: h.createElement("path", {
                    d: "M8 6.586L3.757 2.343 2.343 3.757 6.586 8l-4.243 4.243 1.414 1.414L8 9.414l4.243 4.243 1.414-1.414L9.414 8l4.243-4.243-1.414-1.414",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.Collections] = {
                path: h.createElement("path", {
                    d: "M1 7h18v12H1V7zm12 6l-5-3v6l5-3zM3 4h14v2H3V4zm2-3h10v2H5V1z"
                }),
                width: 20,
                height: 20
            }, pt[ht.Communities] = {
                path: h.createElement("path", {
                    d: "M3.25 17L4 14H2l.75 3h.5zm12 0l.75-3h-2l.75 3h.5zm-6.82-1l-1.144-4H6L5 6h8l-1 6h-1.286L9.57 16H8.43zM5 5H4l.5 3H1V4h4v1zm-.333 4l.606 3.636L5 14H1L0 9h4.667zM13.5 8H17V4h-4v1h1l-.5 3zm-.167 1H18l-1 5h-4l-.273-1.364L13.333 9zM7 1h4v4H7V1z"
                }),
                width: 18,
                height: 18
            }, pt[ht.Conversations] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M2.57894737,12.1904762 L0,12.1904762 L0,0 L14,0 L14,12.1904762 L7,12.1904762 L2.57894737,16 L2.57894737,12.1904762 Z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.Copy] = {
                path: h.createElement("g", {
                    fillRule: "evenodd"
                }, h.createElement("path", {
                    d: "M9 19.607l4.755-4.755 3.535 3.535-4.754 4.755L9 19.607zm1.44-.025l4.022-4.023 2.12 2.12-4.022 4.024-2.12-2.122zm4.412-5.827L19.607 9l3.535 3.536-4.755 4.754-3.535-3.535zm.707.707l4.022-4.023 2.122 2.12-4.024 4.023-2.12-2.12z"
                }), h.createElement("path", {
                    d: "M12.987 17.74l4.754-4.753 1.415 1.414-4.754 4.755z"
                })),
                width: 32,
                height: 32
            }, pt[ht.Crate] = {
                path: h.createElement("g", null, h.createElement("path", {
                    d: "M8 8h3v4.3l2-.7V8h3v3l-.4 1L8 15H7V7l1 1zM7 7v8H6L.4 12 0 11V8h1v3l4 2 1-1V8l1-1zM15 6h-2V3.4l-2-.6V6H8L7 7V1h1l7.6 2 .4 1v2h-1zM0 6V4l.4-1L6 1h1v6L6 6V2.1L1 3.9V6H0z"
                }), h.createElement("path", {
                    opacity: ".5",
                    d: "M13 8h3l-1-1h-2"
                }), h.createElement("path", {
                    fillOpacity: ".25",
                    d: "M13 7h2l1-1h-3"
                }), h.createElement("path", {
                    opacity: ".5",
                    d: "M8 8h3V7H7"
                }), h.createElement("path", {
                    fillOpacity: ".25",
                    d: "M7 7h4V6H8"
                }), h.createElement("path", {
                    opacity: ".25",
                    d: "M3 8H0l1-1h2M6 8H4V7h3"
                }), h.createElement("path", {
                    opacity: ".75",
                    d: "M11 5h2V3.4l-2-.6M11 12.3l2-.6V9h-2"
                }), h.createElement("path", {
                    d: "M1.5 3.3L.3 1.9l.2-.8L3.8 0l.5.1 1.5 1.6-4.3 1.6zm.1-1.5l.4.6 2.3-.8-.5-.6-2.2.8z"
                }), h.createElement("path", {
                    fillOpacity: ".5",
                    d: "M4 12.5l2 1V8H4M3 12l-2-1V8h2"
                }), h.createElement("path", {
                    opacity: ".3",
                    d: "M3 12.1l1 .4V9H3"
                }), h.createElement("path", {
                    fillOpacity: ".5",
                    d: "M4 2.7l2-.6V6H4M3 6H1V3.9l2-.7"
                }), h.createElement("path", {
                    opacity: ".3",
                    d: "M3 5h1V2.7l-1 .5"
                })),
                width: 16,
                height: 15
            }, pt[ht.Crown] = {
                path: h.createElement("polygon", {
                    points: "15.7,5.8 10,0.1 4.3,5.8 0,1.5 0,12.9 20,12.9 20,1.5"
                }),
                width: 20,
                height: 13
            }, pt[ht.DeadGlitch] = {
                path: h.createElement("g", null, h.createElement("path", {
                    d: "M26,17.4589613 L26,3 L4,3 L4,22.0601057 L10.0032868,22.0601057 L10.0032868,26 L14.0004537,22.0601057 L21.3322933,22.0601057 L26,17.4589613 L26,17.4589613 Z M21.0896458,26.0850335 L15.1583403,26.0850335 L11.2051771,30 L7.24798611,30 L7.24798611,26.0850335 L0,26.0850335 L0,5.21746493 L1.97773958,0 L29,0 L29,18.2620736 L21.0896458,26.0850335 L21.0896458,26.0850335 Z"
                }), h.createElement("path", {
                    d: "M20.8587626,12.1710126 L22.4052753,13.7175252 L23.7175252,12.4052753 L22.1710126,10.8587626 L23.7175252,9.31224999 L22.4052753,8 L20.8587626,9.54651264 L19.31225,8 L18,9.31224999 L19.5465126,10.8587626 L18,12.4052753 L19.31225,13.7175252 L20.8587626,12.1710126 Z M11.8587626,12.1710126 L13.4052753,13.7175252 L14.7175252,12.4052753 L13.1710126,10.8587626 L14.7175252,9.31224999 L13.4052753,8 L11.8587626,9.54651264 L10.31225,8 L9,9.31224999 L10.5465126,10.8587626 L9,12.4052753 L10.31225,13.7175252 L11.8587626,12.1710126 Z"
                })),
                width: 30,
                height: 30
            }, pt[ht.Download] = {
                path: h.createElement("path", {
                    d: "M30.7,12.6c0.4-0.7,0.6-1.5,0.6-2.4c0-3-2.4-5.4-5.4-5.4c-1,0-2,0.3-2.8,0.8C21.6,2.3,18.2,0,14.3,0   C8.9,0,4.6,4.4,4.6,9.8c0,0.3,0,0.7,0.1,1C1.9,12.2,0,15.1,0,18.4c0,4.8,3.9,8.7,8.7,8.7h19.4c4.1,0,7.5-3.4,7.5-7.5   C35.6,16.4,33.6,13.6,30.7,12.6z M16.5,22.3l-6.7-7.1h4.5V7.9h4.4v7.3h4.6L16.5,22.3z"
                }),
                width: 35.6,
                height: 27.1
            }, pt[ht.DragHandle] = {
                path: h.createElement("path", {
                    d: "M9 2.5a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3 0zm0 5a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3 0zm0 5a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3 0zm0 5a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3 0zm5-15a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3 0zm0 5a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3 0zm0 5a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3 0zm0 5a1.5 1.5 0 1 1-3.001-.001 1.5 1.5 0 0 1 3 0z"
                }),
                width: 20,
                height: 20
            }, pt[ht.Drops] = {
                path: h.createElement("path", {
                    d: "M15.988 17.429c0 .579-.377.979-.973 1.043-1.166.128-2.42.26-3.587.389-.428.047-.857.087-1.28.129h-.18V19c-.234-.02-.455-.03-.675-.054-.818-.09-1.736-.184-2.553-.277-.64-.072-1.28-.14-1.91-.22a.987.987 0 0 1-.83-.958V13.006h2.947c.585.017 1.226-.307 1.485-.832.51-.943 1.003-1.824 1.504-2.771a2.58 2.58 0 0 1 .073-.126v.017l.068.116c.51.95 1.012 1.82 1.528 2.765a1.52 1.52 0 0 0 1.404.829c.932.008 1.901 0 2.833 0h.148v.153l-.002 4.272zM15.565 12h-2.09a.81.81 0 0 1-.76-.458c-.553-1.05-1.104-2.102-1.655-3.153l-.014-.026a.254.254 0 0 1-.019-.269.252.252 0 0 1 .27-.083l2.088.257 2.141.266c.326.033.618.213.786.486.54.852 1.072 1.709 1.607 2.564.021.032.04.067.054.104a.206.206 0 0 1-.094.282.217.217 0 0 1-.079.022.742.742 0 0 1-.149 0h-2.09l.004.008zm-11.13-.008H2.348a.752.752 0 0 1-.15 0 .212.212 0 0 1-.078-.022.207.207 0 0 1-.095-.283.64.64 0 0 1 .056-.103c.534-.856 1.066-1.712 1.606-2.565.168-.272.459-.452.786-.485l2.14-.267L8.7 8.011c.1-.03.206.003.27.083a.252.252 0 0 1-.02.27l-.014.024a945.796 945.796 0 0 1-1.655 3.154.81.81 0 0 1-.76.458h-2.09l.004-.008zm6.478-9.14a.165.165 0 0 1 .087.145.165.165 0 0 1-.087.146l-1.142.626-.622 1.144a.167.167 0 0 1-.293.001l-.627-1.142-1.142-.623A.165.165 0 0 1 7 3.003c0-.06.033-.117.087-.146l1.14-.628.624-1.142A.165.165 0 0 1 8.997 1c.062 0 .117.033.146.086l.626 1.141 1.144.624zm5.022 1.536a.125.125 0 0 1 .001.219l-.856.47-.467.857a.129.129 0 0 1-.11.066h-.001a.125.125 0 0 1-.109-.065l-.471-.857-.856-.466a.125.125 0 1 1-.001-.22l.856-.47.468-.857a.125.125 0 0 1 .219 0l.47.855.857.468zm-10.001 1a.125.125 0 0 1 0 .219l-.856.47-.467.857A.126.126 0 0 1 4.5 7a.123.123 0 0 1-.11-.065l-.47-.857-.857-.466a.125.125 0 0 1 0-.22l.856-.47.468-.857A.123.123 0 0 1 4.497 4c.046 0 .088.025.11.065l.469.855.858.468z",
                    fillRule: "evenodd"
                }),
                width: 20,
                height: 20
            }, pt[ht.Edit] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M6.414,12.414L3.586,9.586l8-8l2.828,2.828L6.414,12.414z M4.829,14H2l0,0v-2.828l0.586-0.586l2.828,2.828L4.829,14z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.Emoticons] = {
                path: h.createElement("path", {
                    d: "M6.714 5.143H5v1.714h1.714V5.143zM12 0H4L0 4v8l4 4h8l4-4V4l-4-4zM5 2L2 5v6l3 3h6l3-3V5l-3-3H5zm4.286 4.857H11V5.143H9.286v1.714zM6 12h4l2-2V9H4v1l2 2z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.Events] = {
                path: h.createElement("path", {
                    d: "M17 7H3V5h2a1 1 0 1 0 2 0h6a1 1 0 1 0 2 0h2v2zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-4-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM17 3h-2V2a1 1 0 1 0-2 0v1H7V2a1 1 0 1 0-2 0v1H3c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"
                }),
                width: 20,
                height: 20
            }, pt[ht.EventsReminderAdd] = {
                path: h.createElement("path", {
                    fillRule: "evenodd",
                    d: "M14 2h2c1.103 0 2 .897 2 2v12c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2h2a1 1 0 1 1 2 0h4a1 1 0 0 1 2 0zM4 16h12.001L16 8H4v8zM4 4v2h12V4H4zm7 7h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2h1v-1a1 1 0 1 1 2 0v1z"
                }),
                width: 20,
                height: 20
            }, pt[ht.EventsReminderAdded] = {
                path: h.createElement("path", {
                    fillRule: "evenodd",
                    d: "M14 2h2c1.103 0 2 .897 2 2v12c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2h2a1 1 0 1 1 2 0h4a1 1 0 0 1 2 0zM4 4v2h12V4H4zm8.293 5.293L9 12.586l-1.293-1.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414z"
                }),
                width: 20,
                height: 20
            }, pt[ht.EventsReminderRemove] = {
                path: h.createElement("path", {
                    fillRule: "evenodd",
                    d: "M14 2h2c1.103 0 2 .897 2 2v12c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2h2a1 1 0 1 1 2 0h4a1 1 0 0 1 2 0zm-4 8.586L8.707 9.293a1 1 0 1 0-1.414 1.414L8.586 12l-1.293 1.293a1 1 0 0 0 1.414 1.414L10 13.414l1.293 1.293a1 1 0 0 0 1.414-1.414L11.414 12l1.293-1.293a1 1 0 1 0-1.414-1.414L10 10.586zM4 4v2h12V4H4z"
                }),
                width: 20,
                height: 20
            }, pt[ht.Extensions] = {
                path: h.createElement("path", {
                    fillRule: "evenodd",
                    d: "M16 3v4h-2l-1 1v1l1 1h2v6h-5v-2l-1-1H9l-1 1v2H3v-6H1L0 9V8l1-1h2V3h5V1l1-1h1l1 1v2"
                }),
                width: 16,
                height: 16
            }, pt[ht.Facebook] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M16.842 24v-6.842h2.653l.398-2.667h-3.05v-1.7c0-.772.246-1.298 1.525-1.298L20 11.49V9.105A25.285 25.285 0 0 0 17.623 9c-2.353 0-3.963 1.243-3.963 3.525v1.967H11v2.666h2.66V24h3.182",
                    fillRule: "evenodd"
                }),
                width: 32,
                height: 32
            }, pt[ht.Featured] = {
                path: h.createElement("g", null, h.createElement("path", {
                    d: "M0 0h20v20"
                }), " ", h.createElement("path", {
                    fill: "#FFF",
                    d: "M15 5V2h-2v3h-3v2h3v3h2V7h3V5"
                })),
                width: 20,
                height: 20
            }, pt[ht.Filter] = {
                path: h.createElement("path", {
                    d: "M1 4h6v3H1V4zm0 5h10v3H1V9zm0 5h16v3H1v-3zm10.5-9.914l3 3 3-3L18.914 5.5 14.5 9.914 10.086 5.5 11.5 4.086z"
                }),
                width: 20,
                height: 20
            }, pt[ht.FollowCheck] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M6.5,12.75L2,8.25l2-2l2.5,2.5l5.5-5.5l2,2L6.5,12.75z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.FollowX] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M14,11.5L11.5,14L8,10.5L4.5,14L2,11.5L5.5,8L2,4.5L4.5,2L8,5.5L11.5,2L14,4.5L10.5,8L14,11.5z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.Friends] = {
                path: h.createElement("g", null, h.createElement("path", {
                    d: "M12.64 0h5.2l1.04 2v4L16.8 8v1h3.12L22 10v2H11l1.64-1.563V9h1.04V8l-1.04-.984v-2.25l-1.038-1.954V2"
                }), h.createElement("path", {
                    d: "M4 3h6l1 2v5l-2 2v1h3l2 1v2H0v-2l2-1h3v-1l-2-2V5"
                })),
                width: 21,
                height: 16
            }, pt[ht.FriendsSC] = {
                path: h.createElement("path", {
                    d: "M17.5 6L19 7.5V12l-2 1v1h3l1 1v1h-5.5v-2.5L13 11V7.5L14.5 6h3zM9 2l2 2v5l-3 2v1h4l2 2v2H0v-2l2-2h4v-1L3 9V4l2-2h4z",
                    fillRule: "evenodd"
                }),
                width: 21,
                height: 16
            }, pt[ht.Gear] = {
                path: h.createElement("path", {
                    d: "M6.359 0h3.282l1.436 2.8h3.282L16 5.2 14.359 8 16 10.8l-1.641 2.4h-3.282L9.64 16H6.359l-1.436-2.8H1.641L0 10.8 1.641 8 0 5.2l1.641-2.4h3.282L6.36 0zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                }),
                width: 16,
                height: 16
            }, pt[ht.Global] = {
                path: h.createElement("path", {
                    d: "M9 15A6 6 0 1 0 9 3a6 6 0 0 0 0 12zm1.619-1.8A4.5 4.5 0 0 1 6 5.646V7.5l2 2v1.081l2.619 2.619zm1.881-1.371c.625-.773 1-1.757 1-2.829a4.491 4.491 0 0 0-1.671-3.5H10.5L9.041 6.959 8.5 7.5v1H11l1.5 1.5v1.829z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.GlyphArrDown] = {
                path: h.createElement("path", {
                    d: "M3 5h10l-5 6"
                }),
                width: 16,
                height: 16
            }, pt[ht.GlyphArrLeft] = {
                path: h.createElement("path", {
                    d: "M11 3v10L5 8"
                }),
                width: 16,
                height: 16
            }, pt[ht.GlyphArrRight] = {
                path: h.createElement("path", {
                    d: "M5 13V3l6 5"
                }),
                width: 16,
                height: 16
            }, pt[ht.GlyphArrUp] = {
                path: h.createElement("path", {
                    d: "M3 11h10L8 5"
                }),
                width: 16,
                height: 16
            }, pt[ht.GlyphArrUpDown] = {
                path: h.createElement("path", {
                    d: "M3 9h10l-5 6-5-6zm0-2l5-6 5 6H3z"
                }),
                width: 16,
                height: 16
            }, pt[ht.GlyphFollowers] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M8,13.5L1.5,7V4l2-2h3L8,3.5L9.5,2h3l2,2v3L8,13.5z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.GlyphLength] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M8,14c-3.313,0-6-2.687-6-6s2.687-6,6-6s6,2.687,6,6S11.313,14,8,14z M8,3C5.238,3,3,5.238,3,8s2.238,5,5,5s5-2.238,5-5S10.762,3,8,3z M9.646,10.354l-2-2L7.515,7.879l1-4l0.971,0.242L8.554,7.847l1.8,1.8L9.646,10.354z"
                }),
                width: 16,
                height: 16
            }, pt[ht.GlyphLive] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M11,14H5H2v-1l3-3h2L5,8V2h6v6l-2,2h2l3,3v1H11z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.GlyphLiveSmall] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M11,14H5H2v-1l3-3h2L5,8V2h6v6l-2,2h2l3,3v1H11z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.GlyphViews] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M11,13H5L1,9V8V7l4-4h6l4,4v1v1L11,13z M8,5C6.344,5,5,6.343,5,8c0,1.656,1.344,3,3,3c1.657,0,3-1.344,3-3C11,6.343,9.657,5,8,5z M8,9C7.447,9,7,8.552,7,8s0.447-1,1-1s1,0.448,1,1S8.553,9,8,9z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.GridLayout] = {
                path: h.createElement("path", {
                    d: "M0.8,0h14.5v3.9H0.8V0z M0.8,5h8.9v3.4H0.8V5z M11.4,5h3.8v3.4h-3.8V5z M0.8,9.6h14.5V16H0.8V9.6z"
                }),
                width: 16,
                height: 16
            }, pt[ht.Halt] = {
                path: h.createElement("path", {
                    fillRule: "nonzero",
                    d: "M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm0 2a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm-5-9c0 .556.446 1 .995 1h8.01c.54 0 .995-.448.995-1 0-.556-.446-1-.995-1h-8.01C5.455 9 5 9.448 5 10z"
                }),
                width: 20,
                height: 20
            }, pt[ht.Hash] = {
                path: h.createElement("path", {
                    fillRule: "evenodd",
                    d: "M7.714 12l.572-4h4l-.572 4h-4zM17 12h-3.286l.572-4H17c.553 0 1-.447 1-1 0-.553-.447-1-1-1h-2.43L15 3c0-.552-.447-1-1-1-.553 0-1 .448-1 1l-.43 3h-4L9 3c0-.552-.447-1-1-1-.553 0-1 .448-1 1l-.43 3H3c-.552 0-1 .447-1 1 0 .553.448 1 1 1h3.286l-.572 4H3c-.552 0-1 .447-1 1 0 .553.448 1 1 1h2.43L5 17c0 .553.448 1 1 1 .553 0 1-.447 1-1l.43-3h4L11 17c0 .553.447 1 1 1 .553 0 1-.447 1-1l.43-3H17c.553 0 1-.447 1-1 0-.553-.447-1-1-1z"
                }),
                width: 20,
                height: 20
            }, pt[ht.Heart] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M8,14L1,7V4l2-2h3l2,2l2-2h3l2,2v3L8,14z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.HGCNexus] = {
                path: h.createElement("g", null, h.createElement("path", {
                    d: "M11,0L9.7,4.4c0,0,7.7-1.4,9.7,8.9c0,0.1,0,0.1,0,0.2c0.4-1.1,0.6-2.3,0.6-3.5C20.1,4.8,16.1,0.5,11,0z"
                }), h.createElement("path", {
                    d: "M2.5,16.5c-0.1,0-0.1,0-0.2-0.1C3.1,17.4,4,18.1,5,18.7c4.5,2.6,10.2,1.3,13.2-2.9l-3.1-3.3C15.1,12.6,12.5,19.9,2.5,16.5z"
                }), h.createElement("path", {
                    d: "M8.2,0.2c0.1,0,0.1-0.1,0.2-0.1C7.2,0.3,6.1,0.7,5,1.3C0.5,3.9-1.2,9.5,0.9,14.2l4.4-1.1C5.3,13.1,0.3,7.1,8.2,0.2z"
                })),
                width: 20,
                height: 20
            }, pt[ht.Hide] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M6,7.10240605 L2.65360907,10.448797 L2.10240605,11 L1,9.89759395 L1.55120302,9.34639093 L4.89759395,6 L1.55120302,2.65360907 L1,2.10240605 L2.10240605,1 L2.65360907,1.55120302 L6,4.89759395 L9.34639093,1.55120302 L9.89759395,1 L11,2.10240605 L10.448797,2.65360907 L7.10240605,6 L10.448797,9.34639093 L11,9.89759395 L9.89759395,11 L9.34639093,10.448797 L6,7.10240605 L6,7.10240605 Z"
                }),
                width: 16,
                height: 16
            }, pt[ht.HourGlass] = {
                path: h.createElement("path", {
                    d: "M4.79 8.37c-.058-.508-.43-.426-2.76-1.79C-.64 5.018.08 3.134.08 3.134H6v.002l4.98.007s.66 1.88-2.01 3.45c-2.383 1.4-2.76 1.26-2.814 1.806v.048c0 .97.095.574 2.668 2.398 2.572 1.825 2.158 4.023 2.158 4.023H-.03s-.586-2.204 1.987-4.035c2.572-1.83 2.83-1.406 2.83-2.378 0-.03 0-.06.002-.085zM0 15.933h11V17H0zM0 1h11v1.067H0z"
                }),
                width: 11,
                height: 18
            }, pt[ht.Ignore] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M13,11.341V16l-3.722-3.102C8.863,12.959,8.438,13,8,13c-3.866,0-7-2.462-7-5.5C1,4.462,4.134,2,8,2s7,2.462,7,5.5C15,8.996,14.234,10.35,13,11.341z M11,7H5v1h6V7z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.Link] = {
                path: h.createElement("path", {
                    fillRule: "evenodd",
                    d: "M9 4h4l2 2v4l-2 2H9v-2h4V6H9V4zm-2 8H3l-2-2V6l2-2h4v2H3v4h4v2zM6 7h4v2H6V7z"
                }),
                width: 16,
                height: 16
            }, pt[ht.Lock] = {
                path: h.createElement("path", {
                    d: "M7.987 6.599C7.987 5.166 8.685 4 9.997 4c1.311 0 2.009 1.166 2.009 2.599v2.412H7.987V6.599zm7.256 2.412h-1.248V6.599C13.995 4.063 12.411 2 9.997 2S5.998 4.063 5.998 6.599v2.412H4.751c-.415 0-.751.359-.751.8v7.397c0 .442.336.8.751.8h10.492c.414 0 .751-.358.751-.8V9.811c0-.441-.337-.8-.751-.8z",
                    fillRule: "evenodd"
                }),
                width: 20,
                height: 20
            }, pt[ht.LogoGlitch] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M21,9h-2v6h2V9z M5.568,3L4,7v17h5v3h3.886L16,24h5l6-6V3H5.568z M25,16l-4,4h-6l-3,3v-3H8V5h17V16z M16,9h-2v6h2V9z",
                    fillRule: "evenodd"
                }),
                width: 30,
                height: 30
            }, pt[ht.LogoTwitch] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M88,5h-6V0h-9l-6,5h-5.5L59,7.5V5h-5V0H36v5H16l-5-5H0v22l5,5.25L14,32h6v-1.5l3,1.5h12l2-3l1,3h7v-3l3,3h8l0.5-3l2.5,3h10l3-3v3h4l3-3v3h7l7-6V10L88,5z M13,13H8v6h5v6H6l-4-4V2h6v5h5V13z M36,21.5L32.5,25H15V7h6v12h2V7h6v12h2V7h5V21.5z M44,25h-6V7h6V25z M44,5h-6V2h6V5z M57,13h-5v6h5v6h-7l-4-4V2h6v5h5V13z M72,13h-7v6h7v6h-9l-4-4V11l4-4h9V13z M91,25h-6V13h-5v12h-6V2h6v5h7l4,4V25z",
                    fillRule: "evenodd"
                }),
                width: 94,
                height: 32
            }, pt[ht.LogoTwitchDevelopers] = {
                path: h.createElement("path", {
                    d: "M59.524 29.887c0 1.266-.872 1.99-2.521 1.99-1.636 0-2.63-.93-2.63-2.449H55.5c0 .965.594 1.484 1.503 1.484.788 0 1.382-.399 1.382-1.038 0-1.483-3.818-.627-3.818-3.148 0-1.207.884-1.918 2.388-1.918 1.649 0 2.497.808 2.497 2.364h-1.067c0-1.037-.497-1.4-1.43-1.4-.849 0-1.273.351-1.273.93 0 1.64 3.842.711 3.842 3.185zm-5.818-5.03h.207v1.122h-.134c-1.115 0-1.782.615-1.782 1.82v3.921H50.87v-6.78h1.067v1.231c.145-.578.775-1.315 1.769-1.315zm-6.727-.013c-1.624 0-2.57 1.038-2.57 2.69v1.64c0 1.63.946 2.666 2.57 2.666 1.613 0 2.557-1.025 2.557-2.266v-.05H48.41v.109c0 .748-.582 1.267-1.43 1.267-.812 0-1.443-.532-1.443-1.496v-.76h4v-1.17c0-1.665-.944-2.63-2.557-2.63zm-6.06.012c-1.032 0-1.661.603-1.855 1.05v-.965h-1.067V34h1.127v-3.174c.194.448.763.978 1.795.978 1.369 0 2.218-.94 2.218-2.642v-1.265c0-2.027-.764-3.04-2.218-3.04zm-6.873.013c-1.637 0-2.57 1.049-2.57 2.665v1.604c0 1.665.933 2.702 2.57 2.702 1.6 0 2.558-1.037 2.558-2.702v-1.604c0-1.616-.958-2.665-2.558-2.665zm-5.103 6.851h1.139V22.65h-1.14v9.071zm-3.891-6.876c-1.625 0-2.57 1.038-2.57 2.69v1.64c0 1.63.945 2.666 2.57 2.666 1.612 0 2.558-1.025 2.558-2.266v-.05h-1.128v.109c0 .748-.581 1.267-1.43 1.267-.812 0-1.443-.532-1.443-1.496v-.76h4v-1.17c0-1.665-.945-2.63-2.557-2.63zm-4.279.097h1.26l-2.291 6.78h-1.175l-2.303-6.78h1.26l1.636 5.258 1.613-5.258zm-7.576-.097c-1.624 0-2.57 1.038-2.57 2.69v1.64c0 1.63.946 2.666 2.57 2.666 1.612 0 2.558-1.025 2.558-2.266v-.05h-1.127v.109c0 .748-.582 1.267-1.43 1.267-.813 0-1.443-.532-1.443-1.496v-.76h4v-1.17c0-1.665-.946-2.63-2.558-2.63zm-6.704-1.627H3.754v8.503h2.74c1.685 0 2.86-1.098 2.86-3.16v-2.196c0-2.074-1.175-3.147-2.86-3.147zm1.673 3.413v1.652c0 1.773-.775 2.304-1.805 2.304H4.943v-6.224H6.36c1.042 0 1.805.519 1.805 2.268zm40.243.771v.422h-2.873v-.518c0-.99.57-1.508 1.443-1.508.885 0 1.43.483 1.43 1.604zm-21.927 0v.422H23.61v-.518c0-.99.57-1.508 1.443-1.508.885 0 1.43.483 1.43 1.604zm8.994 0v1.882c0 1-.594 1.532-1.43 1.532-.873 0-1.442-.531-1.442-1.532V27.4c0-.977.57-1.507 1.442-1.507.848 0 1.43.53 1.43 1.507zm6.52.266v1.351c0 1.207-.496 1.845-1.442 1.845-.92 0-1.43-.638-1.43-1.845v-1.4c0-1.194.534-1.82 1.43-1.82.946 0 1.443.662 1.443 1.869zM14.629 27.4v.422h-2.873v-.518c0-.99.569-1.508 1.442-1.508.885 0 1.43.483 1.43 1.604zm45.396-11.996H56.21v-7.21h-3.05v7.21h-3.813V1.366h3.812v3.111h4.47l2.394 2.342v8.586zm-12.05-7.21h-4.498v3.491h4.499v3.72h-5.877L39.663 13V6.819l2.435-2.342h5.877v3.718zm-9.683 0h-3.128v3.491h3.128v3.72h-4.475L31.351 13V1.366h3.812v3.111h3.128v3.718zm-12.05-5.16h3.737V1.366H26.24v1.669zm0 12.37h3.737V4.477H26.24v10.928zm-1.448-2.404l-2.366 2.404H10.685V4.477h3.812v7.209h1.373V4.477h3.813v7.209h1.373V4.477h3.737v8.524zM9.312 8.195H6.185v3.491h3.127v3.72H4.825L2.373 13V1.366h3.812v3.111h3.127v3.718zm49.008-5.16h-3.787V0h-6.567l-3.107 3.035h-3.451l-1.745 1.723V3.035h-3.127V0H24.793v3.035H10.692L7.587 0H1v13.688l3.121 3.096 5.19 3.098h4.5v-.7l1.713.7h8.363l1.483-1.718.194 1.718h5.476l.11-1.718 1.975 1.718h4.833l.344-1.718 1.726 1.718h5.521l1.74-1.73v1.73h3.093l2.397-1.73v1.73h3.47l5.148-3.447V6.131L58.32 3.035z",
                    fillRule: "evenodd"
                }),
                width: 62,
                height: 34
            }, pt[ht.LogoTwitchPrime] = {
                path: h.createElement("g", null, h.createElement("path", {
                    d: "M289.2 110.3c.8-.5 1.2-1.5 1.2-2.4 0-2.1-1.3-3.2-3.8-3.2-3.3 0-5.2 2-5.7 6 1.5.3 3 .4 4.5.4 1.3.1 2.6-.2 3.8-.8z"
                }), h.createElement("path", {
                    d: "M287.9 15H269V0h-33.1l-15.6 15H203l-8 9.3V15h-16V0h-59v15H48.5L32.9 0H0v69.4L15.6 85l26 15h22.5v-2.9l8.7 2.9h42l7.4-8.1 1 8.1h27.5l.6-8.1 6.7 5.4v48c-.1.9.6 1.7 1.5 1.7h15.2c.9-.1 1.7-.8 1.8-1.8l1.6-8.2h1.6c3.8 0 7.4-1.9 9.6-5 0 0-.8 2.699976-1.1 3.599976-.2.5 0 .700024.5.900024.133333.333333 5.266667.5 15.4.5 1 .2 1.9-.500024 2.1-1.400024L207.5 132s.7 2.699976.9 3.599976c.1.9.9 1.500024 1.8 1.400024H266c2.5 0 2.7-.799976 3.5-1.599976 2.7.8 5.2 1.399976 7.8 1.599976 16.9.9 23.7-6.6 24-9.9.1-.8 2.2-13.2.8-21.1-1-5.8-6.6-11.4-15.9-11.4L304 83.2v-52L287.9 15zM26 41v18h16v19H19.1L6.9 65.9v-59H26V22h16v19H26zm81.5 37H49V22h19v37h7V22h19v37h7V22h19v44l-12.5 12zm19.5 0V22h19v56h-19zm19-62h-19V6.9h19V16zm7 49.9v-59h19V22h16v19h-16v18h16v19h-23.2L153 65.9zm32.1 59.4c-1.6 1.1-3.6 1.7-5.6 1.7-1.4 0-2.7-.2-4-.7-1.2-.4-2.3-1-3.2-1.8v11.2c.1.6-.2 1.1-.8 1.3h-5.4c-.4 0-.7-.1-1-.3-.2-.3-.3-.6-.3-1v-34.1c0-.4.1-.7.3-1 .3-.2.6-.3 1-.3h3.7c.7-.1 1.3.4 1.4 1.1l.4 1.3c1.1-1 2.3-1.8 3.7-2.4 1.4-.6 2.9-.9 4.4-.9 3-.1 6 1.2 7.8 3.6 1.9 2.4 2.9 5.7 2.9 9.8 0 2.7-.4 5.2-1.4 7.6-.8 1.9-2.2 3.6-3.9 4.9zM206.3 22H236v19h-22v18h22v19h-29.7L195 65.9V34.7L206.3 22zm5.6 84.6c-.3.2-.6.4-1 .3h-2.3c-1 0-1.9.1-2.9.3-1 .2-1.9.5-2.9.8v17.1c0 .4-.1.7-.3 1-.3.2-.6.3-1 .3h-4.9c-.6.1-1.2-.3-1.3-.9v-24c0-.4.1-.7.3-1 .3-.2.6-.3 1-.3h3.7c.7-.1 1.3.4 1.4 1.1l.7 2.8c1.1-1.3 2.4-2.4 3.8-3.2 1.2-.6 2.5-.9 3.8-.9h.7c.4 0 .7.1 1 .3.2.3.4.6.3 1l.2 4.3c0 .4-.1.7-.3 1zm11 19.5c-.3.2-.6.4-1 .3H217c-.6.1-1.2-.3-1.3-.9v-24c0-.4.1-.7.3-1 .3-.2.6-.3 1-.3h4.9c.6-.1 1.1.2 1.3.8v24.1c0 .4-.1.7-.3 1zm-6.5-30.9c-1.6-1.6-1.6-4.2 0-5.8 1.8-1.4 4.4-1.4 6.2 0 1.6 1.6 1.6 4.1 0 5.8-1.8 1.4-4.4 1.4-6.2 0zm52.9 29.9c0 .4-.1.7-.3 1-.3.2-.6.3-1 .3h-4.9c-.6.1-1.2-.3-1.3-.9V108.7c0-2.3-1-3.5-3.1-3.5-1.9 0-3.8.5-5.6 1.3V125c0 .4-.1.7-.3 1-.3.2-.6.4-1 .3H247c-.6.1-1.2-.3-1.3-.9V108.6c0-2.3-1-3.5-3.1-3.5-2 0-3.9.5-5.6 1.4V125c0 .4-.1.7-.3 1-.3.2-.6.3-1 .3h-4.9c-.6.1-1.2-.3-1.3-.9v-24c0-.4.1-.7.3-1 .3-.2.6-.3 1-.3h3.7c.7-.1 1.3.4 1.4 1.1l.4 1.4c1.5-1 3.2-1.9 4.9-2.5 1.4-.5 2.9-.7 4.5-.7 3.1 0 5.2 1.1 6.5 3.3 1.5-1 3.2-1.9 4.9-2.5 1.5-.5 3.1-.8 4.8-.8 2-.1 4 .6 5.5 2 1.4 1.5 2.1 3.5 2 5.6v18l-.1.1zm17.8-25.6c3.2 0 5.6.8 7.4 2.3 1.8 1.5 2.8 3.8 2.7 6.1.1 2.3-1 4.5-2.9 5.8-1.9 1.3-4.8 2-8.5 2-1.7 0-3.4-.2-5.1-.6.2 2.3.9 3.9 2.1 4.9 1.6 1.1 3.4 1.6 5.3 1.5.9 0 1.9-.1 2.8-.2 1.3-.2 2.5-.5 3.8-.8l.3-.1h.3c.6 0 .9.4.9 1.2v2.4c0 .4 0 .8-.2 1.1-.2.3-.5.5-.9.6-2.5 1-5.2 1.4-7.9 1.4-4.2 0-7.5-1.2-9.7-3.5-2.3-2.3-3.4-5.6-3.4-10s1.2-7.9 3.5-10.4c2.2-2.4 5.4-3.7 9.5-3.7zM278 78V41h-16v37h-19V6.9h19V22h22.3L297 34.7V78h-19z"
                }), h.createElement("path", {
                    d: "M177.3 105.1c-1.8 0-3.5.5-5 1.4v13.4c1.5.9 3.2 1.4 5 1.4 1.6.1 3.2-.6 4.2-1.9.9-1.3 1.3-3.3 1.3-6.1s-.4-4.9-1.3-6.2c-.9-1.4-2.5-2.1-4.2-2z"
                })),
                width: 304,
                height: 147
            }, pt[ht.LogoTwitchPrimeHorizontal] = {
                path: h.createElement("g", null, h.createElement("path", {
                    d: "M537 38c-2.5-4-7.3-8.5-16.6-8.5-9.4 0-23 8.3-24 9a1 1 0 0 1-.8.3 1 1 0 0 1-.7-.6 12.4 12.4 0 0 0-2.6-3.5c-3-3-6.4-4.2-11.3-4.2-3.2 0-9.2 2.4-9.8 2.8a1.3 1.3 0 0 1-1.2 0c-2.5-1.8-9.8-2.8-13.8-2.8a25.3 25.3 0 0 0-9.8 2h-.2a1 1 0 0 1-1 0 6.5 6.5 0 0 0-4.3-1.7 17 17 0 0 0-5 .8 24.6 24.6 0 0 1-3.2.7l-4.4.4a1 1 0 0 1-1-.4 1 1 0 0 1 0-1 14.6 14.6 0 0 0 .6-2 11 11 0 0 0-2-11 12 12 0 0 0-9.3-4 17 17 0 0 0-9.5 3c-.8.4-2.3 1.4-4.2 2.8-5.4 3.8-13.5 9.4-17.5 11.3-1.3.6-1.7-.8-3.7-1s-5 1-7.4 1.4l-3.8.5a1 1 0 0 1-1.2-.8 17 17 0 0 0-2.8-6c-4.8-7-12.8-8.6-18.6-8.8l-12.8-.2c-8 0-19.2.5-19.2.5l-16 14-15.4-15.4h-18.8V0h-32.6l-15.4 15.4h-17L192 24v-8.6h-15.3V0h-58.2v15.4H48L32.6 0H0v68.5L15.4 84 41 99.2h22.4V96l8.6 3.3h41.5l7.4-8.6 1 8.6h27l.6-8.6 9.8 8.6h24l1.7-8.6 8.7 8.6H221l8.7-8.6v8.6H245l12-8.6v8.6h51.2c5-3 10.4-6.3 13.2-8.3a1 1 0 0 1 1.5.3 1 1 0 0 1 0 .8c-.5 3-2 7.3-2 7.3h25.7l5.8-4a1.2 1.2 0 0 1 1.5 0 .4.4 0 0 1 0 .4l1.5 3.6h89.2l6-4.2a2.5 2.5 0 0 1 .8-.3 2 2 0 0 1 .8.2 28.3 28.3 0 0 0 8.6 4.4h.2a27.3 27.3 0 0 0 7.5.8c4.5 0 30.4-9 39-12.4l6.7-2.6a107.5 107.5 0 0 0 16-8 4 4 0 0 0 2-4c0-1-.7-3-1.4-6.6v-.4a1 1 0 0 1 .6-1c2.2-1 5.2-3.2 7-8.3 2.3-7 1.8-13.5-1.6-19zM41.2 41H25.7v17.2H41V77H19L7 65V7h18.7v15.3H41l.2 18.8zm77 24l-12 12H48V22.4h18.8v36h7v-36h18.7v36h7v-36H118V65zM144 77h-19V22.4h18.8V77zm0-61.5h-19V7h18.8v8.5zm41 25.7h-15.4v17H185v19h-22.3l-12-12V6.8h18.8v15.3H185v19zm48 0h-22.3v17H233v19h-29l-12-12V34l12-12h29v19zm60 36h-19v-36h-15.3v36h-19V7h19v15.3H281l12 12v43zm113.5-49.5a9.7 9.7 0 0 1 4-5 10.8 10.8 0 0 1 6-1.8 5.8 5.8 0 0 1 4.6 1.6 4.3 4.3 0 0 1 .7 4.6c-1.5 4.6-4.8 6.8-10 6.8-2.2 0-3.7-.5-4.7-1.6s-1.2-2.7-.5-4.7zm-55.3 33a26.6 26.6 0 0 1-17.7 6.5c-1 0-2.8 0-5-.2s-4 0-5 0a3 3 0 0 0-3 2 53.3 53.3 0 0 0-1.6 5.7l-.7 2.6h-15.8l4-11c2-6.5 3.8-11 4.8-14 3-9 5.7-18.2 8.2-28l.2-.5a1 1 0 0 1 1-.4c2.2-.3 7-.4 14.5-.4 4 0 8 0 12.5.2 6.3.2 10.8 2.2 13.4 6s3 9 1 15.5a38.7 38.7 0 0 1-10.8 16zm36.5-8h-2.3A10.6 10.6 0 0 0 380 54q-2 1-3 4.7-.7 1.6-1.6 4.8l-.2.7-1.8 5.5a34.5 34.5 0 0 0-1 3.6l-1 3.5a1 1 0 0 1-.7.6h-13-.4V77l3.4-10 1.6-4.8L364 57c2.3-6.7 3.5-12.2 3.7-16.5a1 1 0 0 1 0-.5.8.8 0 0 1 .5-.4l7-1c4.2-.8 6.3-1 7-1.3a5.7 5.7 0 0 1-.3 1.8c-.5 1.8-.8 3.3.2 3.6a.8.8 0 0 0 .8-.2 35 35 0 0 1 4-2 19.2 19.2 0 0 1 8-2 3 3 0 0 1 1.4.2A35.4 35.4 0 0 1 395 42l-1.5 3.4-1 3.3-.4 1.4-.5 2a1.5 1.5 0 0 1-1.7 1 4 4 0 0 0-2-.2zm22.4 5.8l-2.8 9.2c-1.5 4.7-2.3 7.3-3 9a.6.6 0 0 1-.5.6h-13.4l.2-.8 3-8.8c1.4-3.6 2.6-6.8 3.2-8.8a188.2 188.2 0 0 0 5.5-19.2l.2-.8s0-.4.7-.4c1.2 0 2.4 0 3.5.2a21.7 21.7 0 0 0 3.6.2c1 0 2.2 0 4-.2l3.5-.2s0 .3-.3.6c-2.3 5.5-4.7 11.8-7 19.3zM489.8 47l-2.4 6.7c-1 3-2 5.2-2.4 6.7-.7 1.7-1.5 4.4-2.6 8l-2.5 8a1.6 1.6 0 0 1-1 1h-13a2 2 0 0 1 0-1 49.6 49.6 0 0 1 1.7-4.8l.4-1c1-2.6 1.8-4.6 2.2-6q2.5-7.4 3.3-10.4c.5-2 .5-3.5-.3-4.5a4.2 4.2 0 0 0-3.5-1.4A8.3 8.3 0 0 0 465 50a9 9 0 0 0-3.8 4l-3.6 10.5-1.8 6-1.8 6a1 1 0 0 1-1 1h-13a1.2 1.2 0 0 1 .2-1l2-5.8c1-2.2 1.8-4.5 2.3-6l1.3-4 .2-.8 1.5-4.8c1-2.6 1-4.4 0-5.6a3.4 3.4 0 0 0-3.2-1.3 10.4 10.4 0 0 0-4.8 1.5 8.3 8.3 0 0 0-3.8 3.6l-3.2 9.7-1.8 5.5c-1 3.3-2 5.8-2.5 7.7a3 3 0 0 1-.5 1 .8.8 0 0 1-.5 0H414a4 4 0 0 1 .3-.6l.3-.8 3.2-9.2.5-1.4 3-8.7a138 138 0 0 0 4.2-15.6v-.3a4.3 4.3 0 0 1 0-.5 1.2 1.2 0 0 1 .6-.5 19.7 19.7 0 0 1 3.6-.6c2.3 0 3.5-.2 4-.3l3.6-1a16 16 0 0 1 3-.5 11.8 11.8 0 0 1-.4 2c-1 2.7-.8 3-.6 3.5a.7.7 0 0 0 .6.3h.2a5.4 5.4 0 0 0 1.3-.7 63 63 0 0 1 7.2-4 18 18 0 0 1 7.2-1.5 10.3 10.3 0 0 1 6 1.6 5.2 5.2 0 0 1 2.2 4.8l-.2 1.8 1.3-1.2a25.7 25.7 0 0 1 7.7-5 20 20 0 0 1 8-2c3.5 0 6 .8 7.7 2.4 2 2 2.3 4.4 1.3 7.8zm42.7 8c-1 2.6-2 4-3.8 4.4l-9 1-15.2 1h-.6v.7a5 5 0 0 0 2.4 5 10.6 10.6 0 0 0 5.5 1.4 22 22 0 0 0 8.5-2l1-.5 2.4-1.3a14 14 0 0 1 1 3.5c.6 3 .6 4.2.5 4.5a4.6 4.6 0 0 1-.6.7C520 77 514 78.7 507 78.7c-6.4 0-11-2-13.6-5.5s-3-8.8-1-15.2a33 33 0 0 1 10.8-15.5 26.6 26.6 0 0 1 17-6.2c5.2 0 9 2 11.2 5.5s2.6 8 1 13.2z"
                }), h.createElement("path", {
                    fill: "#FFF",
                    d: "M515 45.3a8 8 0 0 0-5.4 2.4 11.8 11.8 0 0 0-3.4 5 1.6 1.6 0 0 0 .6 2 1 1 0 0 0 .8 0c3.3 0 6.7-.3 10-.7 1 0 2-.4 2.2-1a6 6 0 0 0-.3-5.3 5 5 0 0 0-4.4-2.4zM339.2 34.8c-7 0-7.6.7-8 1s-.5.6-3.6 10l-1.2 4-1.2 3.7a1 1 0 0 0 0 .8c.5.5 1.3 1 8 1 6.4 0 10.8-3.3 13-9.7 1.2-3.6 1.2-6.4 0-8.2s-3.6-2.6-7-2.6z"
                })),
                width: 539.99,
                height: 100.22
            }, pt[ht.Maximize] = {
                path: h.createElement("g", null, h.createElement("path", {
                    d: "M2,14 L14,14 L14,2 L2,2 L2,14 Z M0,0 L16,0 L16,16 L0,16 L0,0 L0,0 L0,0 Z"
                }), h.createElement("path", {
                    d: "M3,3 L13,3 L13,5 L3,5 L3,3 Z"
                })),
                width: 16,
                height: 16
            }, pt[ht.MessagesSC] = {
                path: h.createElement("path", {
                    d: "M4 12H1V0h14v12H8l-4 4z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.Minimize] = {
                path: h.createElement("g", null, h.createElement("path", {
                    d: "M2,14 L14,14 L14,2 L2,2 L2,14 Z M0,0 L16,0 L16,16 L0,16 L0,0 L0,0 L0,0 Z"
                }), h.createElement("path", {
                    d: "M3,11 L13,11 L13,13 L3,13 L3,11 Z"
                })),
                width: 16,
                height: 16
            }, pt[ht.More] = {
                path: h.createElement("path", {
                    d: "M7,3 L9,3 L9,5 L7,5 L7,3 Z M7,7 L9,7 L9,9 L7,9 L7,7 Z M7,11 L9,11 L9,13 L7,13 L7,11 Z"
                }),
                width: 16,
                height: 16
            }, pt[ht.Muted] = {
                path: h.createElement("path", {
                    d: "M12.08 7.835l-2.02-2.04.904-.912 2.02 2.04 2.113-2.136L16 5.7l-2.114 2.135 2.02 2.04-.904.91-2.02-2.04-1.923 1.945-.904-.912 1.924-1.943zm-8.072 2.812L7.57 13V3L4.367 5.115V5.06H0v5.587h4.008z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.NavBackpack] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M16,15H2l-1-1V8h16v6L16,15z M1,4l1-1h14l1,1v2H1V4z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, pt[ht.NavBug] = {
                path: h.createElement("path", {
                    d: "M9.991 16.98c-1.903 0-3.446-2.463-3.446-5.5 0-.514.048-1.008.13-1.48h6.632c.083.472.13.966.13 1.48 0 3.037-1.543 5.5-3.446 5.5m0-10.998c1.076 0 2.036.787 2.668 2.019H7.324c.632-1.232 1.592-2.02 2.667-2.02M15.3 11.8h.99l1.25 1.71 1.44-1.08L17.19 10H15.3c-.09-.54-.18-.99-.27-1.53l2.61-2.61-1.26-1.26-2.07 2.07c-.54-.99-1.17-1.71-1.98-2.25l2.16-2.16L13.23 1l-2.7 2.7h-.99L6.84 1 5.49 2.26l2.16 2.16c-.81.54-1.44 1.26-1.98 2.25L3.6 4.6 2.34 5.86l2.61 2.61c-.09.54-.18.99-.27 1.53H2.79L1 12.43l1.44 1.08 1.25-1.71h.9c0 1.08.27 2.16.54 3.06l-2.88 2.88L3.6 19l2.43-2.43C7.02 18.1 8.37 19 9.99 19s2.97-.9 3.96-2.43L16.38 19l1.26-1.26-2.88-2.88c.36-.9.54-1.98.54-3.06"
                }),
                width: 20,
                height: 20
            }, pt[ht.NavChannels] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M15,14l-4-4v4H1V4h10v4l4-4h2v10H15z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, pt[ht.NavCreative] = {
                path: h.createElement("path", {
                    d: "M15.7 13.4l.8 1.5 1.5.8-1.5.8-.8 1.5-.8-1.5-1.5-.8 1.5-.8.8-1.5zM14.5 0l1.2 2.2 2.3 1.3-2.3 1.2-1.2 2.3-1.2-2.3-2.2-1.2 2.2-1.3 1.2-2.2zM8 2l3 5 5 3-5 3-3 5-3-5-5-3 5-3z"
                }),
                width: 18,
                height: 18
            }, pt[ht.NavDashboard] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M1,16V2h16v14H1z M5,4H3v1h2V4z M5,7H3v1h2V7z M5,10H3v1h2V10zM5,13H3v1h2V13z M9,7H7v7h2V7z M12,10h-2v4h2V10z M15,4h-2v10h2V4z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, pt[ht.NavDiscover] = {
                path: h.createElement("path", {
                    d: "M4.7 13.29l-1.49-.32-1.74 3.55 3.54-1.74-.31-1.49M12.9 10.55l4.36-4.36L18 0l-6.19.74L7.45 5.1 3.36 4 0 7.36l4.41 1.19v3.23l1.82 1.82h3.22l1.19 4.4L14 14.64zM12.47 7L11 5.53l1.48-1.48 1.48 1.48z"
                }),
                width: 18,
                height: 18
            }, pt[ht.NavFollowing] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M1,8V4l2-2h4l2,2l2-2h4l2,2v4l-8,8L1,8z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, pt[ht.NavGames] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M9,8.293l-3-3V1h6v4.293L9,8.293z M5.293,12H1V6h4.293l3,3L5.293,12z M9,9.707l3,3V17H6v-4.293L9,9.707z M12.707,6H17v6h-4.293l-3-3L12.707,6z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, pt[ht.NavLogout] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M16,9l-6,6v-4H6V7h4V3L16,9z M4,13h4v2H2v-2V5V3h6v2H4V13z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, pt[ht.NavManager] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M17,3v11h-2h-4H8.707l-0.5-0.5h-1L7.5,13.207v-1.809l5.583-2.401L7.027,6.399V8.5H2.5v4.707L2.793,13.5h-1l-0.5,0.5H1V3h10\n\th4H17z M7,14H6l1-1V9H6H4H3v4l1,1H3H2l-1,1v2h8v-2l-1-1H7z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, pt[ht.NavMessages] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M1,15V3h16v12H1z M15.354,5.354l-0.707-0.707L9,10.293L3.354,4.646L2.646,5.354L6.293,9l-3.646,3.646l0.707,0.707L7,9.707l1.646,1.646h0.707L11,9.707l3.646,3.646l0.707-0.707L11.707,9L15.354,5.354z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, pt[ht.NavMore] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M13,11V7h4v4H13z M7,7h4v4H7V7z M1,7h4v4H1V7z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, pt[ht.NavMyChannel] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M15,14l-4-4v4H8.707l-0.5-0.5h-1L7.5,13.207V8.5h-5v4.707L2.793,13.5h-1l-0.5,0.5H1V4h10v4l4-4h2v10H15z M3,14h1l-1-1V9h1h2h1v4l-1,1h1h1l1,1v2H1v-2l1-1H3z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, pt[ht.NavProfile] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M2,16v-1l3-3h3L5,9V2h8v7l-3,3h3l3,3v1H2z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, pt[ht.NavSearch] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M16.707,15.293l-1.414,1.414l-4.825-4.825C9.487,12.58,8.295,13,7,13c-3.313,0-6-2.687-6-6s2.687-6,6-6s6,2.687,6,6c0,1.295-0.42,2.487-1.118,3.468L16.707,15.293z M7,3C4.791,3,3,4.791,3,7s1.791,4,4,4s4-1.791,4-4S9.209,3,7,3z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, pt[ht.NavSettings] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M15.03,5.091v4.878l-2,2H8.151l-3.061,3.061L2.97,12.908l3.061-3.06V4.97l2-2h4.879L8.97,6.909l2.121,2.121L15.03,5.091z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, pt[ht.NavVideos] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M1,2v14h16V2H1z M6,12V6l7,3L6,12z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, pt[ht.Neck] = {
                path: h.createElement("path", {
                    d: "M9.305 1.877C9.689.84 10.887 0 12 0h6c1.105 0 2.31.838 2.695 1.877L30 27H0L9.305 1.877z",
                    fillRule: "evenodd"
                }),
                width: 35,
                height: 25
            }, pt[ht.NotificationBell] = {
                path: h.createElement("path", {
                    d: "M10 18c1.104 0 2-.896 2-2H8c0 1.104.896 2 2 2m7-4.8v-.8c0-.213.01-.236-.228-.566L15.445 10V7.6C15.445 4.563 12.95 2 10 2S4.556 4.564 4.556 7.6V10l-1.328 1.834c-.24.33-.228.353-.228.566v1.2c0 .22.174.4.39.4h13.22c.214 0 .388-.18.388-.4v-.4z"
                }),
                width: 20,
                height: 20
            }, pt[ht.OP] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M15,7L1,16l4.666-7H1l14-9l-4.667,7H15z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.PermissionsAdd] = {
                path: h.createElement("g", null, h.createElement("path", {
                    d: "M17 10h-3v1.9938965L12.9101562 13H17v3l6-4.5L17 7"
                }), " ", h.createElement("path", {
                    d: "M1 19v-1l3-3h3l-3-3V5h8v7l-3 3h3l3 3v1"
                })),
                width: 24,
                height: 24
            }, pt[ht.PermissionsAdded] = {
                path: h.createElement("g", null, h.createElement("path", {
                    d: "M1 19v-1l3-3h3l-3-3V5h8v7l-3 3h3l3 3v1"
                }), " ", h.createElement("path", {
                    d: "M21.3558345 8L23 9.61769336 16.5132525 16 13 12.5433131l1.6441655-1.6176933 1.869087 1.8389935"
                })),
                width: 24,
                height: 24
            }, pt[ht.PermissionsRemove] = {
                path: h.createElement("g", null, h.createElement("path", {
                    d: "M1 19v-1l3-3h3l-3-3V5h8v7l-3 3h3l3 3v1"
                }), " ", h.createElement("path", {
                    d: "M18.01339 10.3400907l-2.3700453-2.3700453-1.6238705 1.62387052 2.3700453 2.3700453-2.3700453 2.3700453 1.6238705 1.6238705 2.3700453-2.3700453 2.37004522 2.37004523 1.62387052-1.6238705-2.37004523-2.37004524 2.37004526-2.37004523-1.6238705-1.6238705"
                })),
                width: 24,
                height: 24
            }, pt[ht.Pin] = {
                path: h.createElement("path", {
                    d: "M4.154 15.926l3.68-4.313 1.56 1.556-4.314 3.68c-.12.093-.272.15-.428.142-.255 0-.486-.15-.593-.383-.11-.23-.07-.504.09-.7v.01zm9.508-.57l-1.28-1.282-6.723-6.73h4.06l2.37-3.902c.13-.214.33-.374.58-.423.16-.04.33-.03.48.03l.153.054 4.576 4.582.057.15c.15.403-.01.855-.368 1.063l-3.914 2.38v4.07zm-.288-11.14c0 .003-.002.004-.003.006l.01-.005zm3.436 3.4l-.023.015.023-.01zm-6.245 1.227H9.277l2.885 2.89v-1.286l.36-.22.36-.22 3.232-1.966-3.148-3.15-2.4 3.96z"
                }),
                width: 20,
                height: 20
            }, pt[ht.Pinned] = {
                path: h.createElement("path", {
                    d: "M4.154 15.926l3.68-4.313 1.56 1.556-4.314 3.68c-.12.098-.272.15-.428.147-.255 0-.486-.15-.593-.383-.11-.232-.07-.504.092-.7v.008zm9.508-.57l-1.28-1.282-6.723-6.73h4.06l2.37-3.902c.13-.214.33-.374.58-.423.16-.037.33-.025.482.032l.156.057 4.576 4.582.057.152c.15.402-.01.854-.367 1.062l-3.913 2.38v4.068z"
                }),
                width: 20,
                height: 20
            }, pt[ht.Play] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M5,0l20,15L5,30V0z",
                    fillRule: "evenodd"
                }),
                width: 30,
                height: 30
            }, pt[ht.Playlist] = {
                path: h.createElement("path", {
                    d: "M10 5L0 10V0",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.QuestionMark] = {
                path: h.createElement("path", {
                    d: "M3 4l3-3h12l3 3v8l-3 3h-4v2H9v-4l3-3h4V6H8v4H3V4zm6 15h5v4H9v-4z",
                    fillRule: "evenodd"
                }),
                width: 24,
                height: 24
            }, pt[ht.MiniPlayerExpand] = {
                path: h.createElement("path", {
                    d: "M4 10V2h14v11h-4v-2h2V4H6v4H4v2h8v8H2v-8h2zm11-1l-1.143-1.143L12.714 9 11 7.286l1.143-1.143L11 5h4v4z"
                }),
                width: 20,
                height: 20
            }, pt[ht.MiniPlayerPause] = {
                path: h.createElement("path", {
                    d: "M4 17h4V3H4v14zm8-14v14h4V3h-4z"
                }),
                width: 20,
                height: 20
            }, pt[ht.MiniPlayerPlay] = {
                path: h.createElement("path", {
                    d: "M4 2l12 8-12 8"
                }),
                width: 20,
                height: 20
            }, pt[ht.Plus] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M15,9H9v6H7V9H1V7h6V1h2v6h6V9z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.Popout] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M12.707,4.707l-4,4L7.293,7.293l4-4L9,1h6v6L12.707,4.707z M4,12h7V9h2v5H2V3h5v2H4V12z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.Reddit] = {
                path: h.createElement("path", {
                    d: "M21.998 8.692c.545 0 .988.447.988.994a.992.992 0 0 1-.987.995.99.99 0 0 1-.988-.994c0-.547.442-.994.987-.994h-.002zm-.5 5.16c-1.38-.896-3.162-1.42-5.07-1.495l1.047-3.335 2.85.675c.003.923.75 1.67 1.674 1.676a1.683 1.683 0 0 0 1.673-1.687A1.683 1.683 0 0 0 22 8c-.688 0-1.28.42-1.538 1.018l-3.14-.744a.342.342 0 0 0-.405.233L15.71 12.35c-2.006.037-3.888.566-5.33 1.5a2.014 2.014 0 0 0-1.346-.517A2.042 2.042 0 0 0 7 15.38c0 .72.376 1.386.992 1.757-.03.19-.045.386-.045.58 0 1.465.85 2.83 2.396 3.845a8.483 8.483 0 0 0 1.62.822c2.51.964 6.692.602 7.952 0 1.26-.6 1.128-.498 1.62-.822 1.545-1.015 2.396-2.38 2.396-3.844 0-.195-.014-.39-.044-.58a2.05 2.05 0 0 0-1.04-3.806c-.5 0-.98.185-1.348.52zm-5.56 7.326c1.333 0 2.284-.294 2.887-.9a.348.348 0 0 0 0-.49.342.342 0 0 0-.486 0c-.47.47-1.26.698-2.4.698-1.142 0-1.933-.23-2.4-.698a.342.342 0 0 0-.487 0 .347.347 0 0 0 0 .49c.603.606 1.553.9 2.886.9zm2.695-5.688a1.245 1.245 0 0 0-1.238 1.248c0 .686.555 1.246 1.238 1.246a1.245 1.245 0 0 0 1.24-1.247c0-.687-.557-1.246-1.24-1.246zm-5.39 0c-.682 0-1.237.56-1.237 1.248 0 .686.555 1.245 1.238 1.245.682 0 1.237-.56 1.237-1.245 0-.688-.554-1.247-1.236-1.247z",
                    fillRule: "evenodd"
                }),
                width: 32,
                height: 32
            }, pt[ht.RemoveTag] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M4.10271979,3.43815904 L1.66456075,1 L1,1.66456075 L3.43815904,4.10271979 L1,6.54087884 L1.66456075,7.20543958 L4.10271979,4.76728054 L6.54087884,7.20543958 L7.20543958,6.54087884 L4.76728054,4.10271979 L7.20543958,1.66456075 L6.54087884,1 L4.10271979,3.43815904 Z",
                    strokeWidth: "0.4",
                    fillRule: "evenodd"
                }),
                width: 8,
                height: 8
            }, pt[ht.RequestsSC] = {
                path: h.createElement("path", {
                    d: "M11 3L9 1H5L3 3v5l3 2v1H2l-2 2v2h14v-2l-2-2H8v-1l3-2V6H8V3h3zm1 1H9v1h3v3h1V5h3V4h-3V1h-1v3z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.Roman1] = {
                path: h.createElement("path", {
                    d: "M8 17h4V3H8"
                }),
                width: 20,
                height: 20
            }, pt[ht.Roman2] = {
                path: h.createElement("path", {
                    d: "M4 17V3h4v14H4zm8 0V3h4v14h-4z"
                }),
                width: 20,
                height: 20
            }, pt[ht.Roman3] = {
                path: h.createElement("path", {
                    d: "M2 17h4V3H2v14zm6 0h4V3H8v14zm6 0h4V3h-4v14z"
                }),
                width: 20,
                height: 20
            }, pt[ht.Roman4] = {
                path: h.createElement("path", {
                    d: "M1 17h4V3H1v14zm10 0h4l4-14h-4l-2 10-2-10H7l4 14z"
                }),
                width: 20,
                height: 20
            }, pt[ht.Roman5] = {
                path: h.createElement("path", {
                    d: "M8 17h4l6-14h-4l-4 10L6 3H2"
                }),
                width: 20,
                height: 20
            }, pt[ht.RoomList] = {
                path: h.createElement("path", {
                    fillRule: "evenodd",
                    d: "M9.2 2.527c-.13-.165-.2-.366-.2-.572C9 1.427 9.447 1 10 1h8c.217 0 .427.067.6.19.442.317.53.916.2 1.337l-4 5.09c-.057.074-.124.138-.2.192-.442.313-1.07.23-1.4-.194l-4-5.09zM2 17h11c.552 0 1 .448 1 1s-.448 1-1 1H2c-.552 0-1-.448-1-1s.448-1 1-1zm0-5h11c.552 0 1 .448 1 1s-.448 1-1 1H2c-.552 0-1-.448-1-1s.448-1 1-1zm0-5h7c.553 0 1 .448 1 1s-.447 1-1 1H2c-.552 0-1-.448-1-1s.448-1 1-1zm0-5h3c.552 0 1 .448 1 1s-.448 1-1 1H2c-.552 0-1-.448-1-1s.448-1 1-1z"
                }),
                width: 20,
                height: 20
            }, pt[ht.RoomListOpen] = {
                path: h.createElement("path", {
                    fillRule: "evenodd",
                    d: "M13.2 12.382c.33-.422.958-.507 1.4-.19.076.053.143.118.2.19l4 5.09c.33.423.242 1.02-.2 1.338-.173.123-.383.19-.6.19h-8c-.553 0-1-.428-1-.954 0-.207.07-.408.2-.573l4-5.09zM2 3c-.552 0-1-.448-1-1s.448-1 1-1h11c.552 0 1 .448 1 1s-.448 1-1 1H2zm0 5c-.552 0-1-.447-1-1 0-.553.448-1 1-1h11c.552 0 1 .447 1 1 0 .553-.448 1-1 1H2zm0 5c-.552 0-1-.447-1-1 0-.553.448-1 1-1h7c.553 0 1 .447 1 1 0 .553-.447 1-1 1H2zm0 5c-.552 0-1-.447-1-1 0-.553.448-1 1-1h3c.552 0 1 .447 1 1 0 .553-.448 1-1 1H2z"
                }),
                width: 20,
                height: 20
            }, pt[ht.SearchNoResults] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M44.7314176,41.7572363 L37.4713285,48 L26.8572017,35.3514358 L19.8203892,37.5166089 L8.56540656,33.764948 L2,24.3857958 L2,13.1308131 L8.56540656,3.75166089 L19.8203892,0 L32.0132871,3.75166089 L38.2660553,12.8181747 L38.2660553,24.6984342 L34.7250756,29.8328548 L44.7314176,41.7572363 Z M25.8441673,26.223711 L20.1169645,28.1374567 L20.0888962,28.1374567 L14.3616933,26.223711 L11.0126384,21.4393468 L11.0126384,15.6981098 L14.3616933,10.9137457 L20.0888962,9 L20.1176024,9 L25.8448053,10.9137457 L29.5121799,15.6981098 L29.5121799,21.4393468 L25.8441673,26.223711 L25.8441673,26.223711 Z",
                    fillRule: "evenodd"
                }),
                width: 46,
                height: 48
            }, pt[ht.Share] = {
                path: h.createElement("path", {
                    d: "M5 4v2H3v8h10V6h-2V4h4v12H1V4h4zm2-1H5l3-3 3 3H9v6H7V3z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.Shirt] = {
                path: h.createElement("polygon", {
                    points: "7.9,5 5.3,0.9 0.4,3.8 2.2,7.6 4.4,7 4.4,15.1 11.6,15.1 11.6,7 13.8,7.6 15.6,3.8 10.9,0.9 "
                }),
                width: 16,
                height: 16
            }, pt[ht.Star] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M15,6l-4.041,2.694L13,14l-5-3.333L3,14l2.041-5.306L1,6h5.077L8,1l1.924,5H15z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.Steam] = {
                path: h.createElement("path", {
                    d: "M10,0C4.7,0,0.4,4.1,0,9.2l5.4,2.2c0.5-0.3,1-0.5,1.6-0.5c0.1,0,0.1,0,0.2,0l2.4-3.5V7.4c0-2.1,1.7-3.8,3.8-3.8 s3.8,1.7,3.8,3.8s-1.7,3.8-3.8,3.8h-0.1l-3.4,2.4c0,0,0,0.1,0,0.1c0,1.6-1.3,2.8-2.8,2.8c-1.4,0-2.5-1-2.8-2.3l-3.8-1.6 C1.5,17,5.4,20,10,20c5.5,0,10-4.5,10-10C20,4.5,15.5,0,10,0z M15.8,7.4c0-1.4-1.1-2.5-2.5-2.5c-1.4,0-2.5,1.1-2.5,2.5 c0,1.4,1.1,2.5,2.5,2.5S15.8,8.8,15.8,7.4L15.8,7.4z M11.4,7.4c0-1,0.8-1.9,1.9-1.9c1,0,1.9,0.8,1.9,1.9c0,1-0.8,1.9-1.9,1.9 C12.2,9.3,11.4,8.5,11.4,7.4L11.4,7.4z M6.3,15.2l-1.2-0.5c0.2,0.5,0.6,0.8,1.1,1c1.1,0.5,2.3-0.1,2.8-1.1c0.2-0.5,0.2-1.1,0-1.6 c-0.2-0.5-0.6-0.9-1.2-1.2c-0.5-0.2-1.1-0.2-1.6,0l1.3,0.5c0.8,0.3,1.2,1.2,0.8,2.1C8,15.2,7.1,15.5,6.3,15.2L6.3,15.2z"
                }),
                width: 20,
                height: 21
            }, pt[ht.Sword] = {
                path: h.createElement("path", {
                    d: "M8.378 11.879L10 13.5l-2 .563L6.921 13h-.857l-.338.338.532.531L4 16l-1-1-1-1 2.131-2.258.531.531.338-.337v-.828L3.875 10 4.5 8l1.622 1.621L12.812 2H16v3.188z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, pt[ht.Team] = {
                path: h.createElement("path", {
                    d: "M15.5,0 L14,0 L14,5 L15.65,7.2 L14,16 L2,16 L0.35,7.2 L2,5 L2,0 L0.5,0 L15.5,0 Z M4,0 L8,3 L12,0 L4,0 Z M6,6 L6,7 L10,7 L9,6 L6,6 Z M9,7 L9,8 L10,8 L10,7 L9,7 Z M7,8 L7,9 L10,9 L10,8 L7,8 Z M9,9 L9,10 L10,10 L10,9 L9,9 Z M6,10 L6,11 L9,11 L10,10 L6,10 Z"
                }),
                width: 16,
                height: 16
            }, pt[ht.Theater] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M1,13h9V3H1V13z M11,3v10h4V3H11z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.Timeout] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M8,15c-3.866,0-7-3.134-7-7s3.134-7,7-7s7,3.134,7,7S11.866,15,8,15z M8,3C5.238,3,3,5.238,3,8s2.238,5,5,5s5-2.238,5-5S10.762,3,8,3z M7.293,8.707L7,8l1-4l0.902,3.607L11,11L7.293,8.707z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.Timer] = {
                path: h.createElement("path", {
                    d: "M12.988 5.057C17.488 5.55 21 9.37 21 14c0 4.963-4.038 9-9 9s-9-4.037-9-9c0-4.63 3.513-8.45 8.012-8.943C11.01 5.037 11 5.02 11 5V3h-1c-.552 0-1-.447-1-1 0-.553.448-1 1-1h4c.552 0 1 .447 1 1 0 .553-.448 1-1 1h-1v2c0 .02-.01.037-.012.057zM12 21c3.86 0 7-3.14 7-7s-3.14-7-7-7-7 3.14-7 7 3.14 7 7 7zm0-12c.552 0 1 .447 1 1v4c0 .553-.448 1-1 1s-1-.447-1-1v-4c0-.553.448-1 1-1z"
                }),
                width: 24,
                height: 24
            }, pt[ht.ToBottom] = {
                path: h.createElement("path", {
                    d: "M16 18H4a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2zm-1.04-8.41a1 1 0 0 1-.216 1.09l-4.025 4.046a1.003 1.003 0 0 1-1.414 0L5.279 10.68a1 1 0 0 1 .707-1.707h2.019V3a1 1 0 0 1 1-1h1.994a1 1 0 0 1 1 1v5.973h2.038a1 1 0 0 1 .924.617z"
                }),
                width: 20,
                height: 20
            }, pt[ht.ToTop] = {
                path: h.createElement("path", {
                    d: "M16 4H4a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2zm-1.04 6.429a1 1 0 0 1-.923.617h-2.038v5.973a1 1 0 0 1-1 1H9.005a1 1 0 0 1-1-1v-5.973h-2.02a1 1 0 0 1-.706-1.707l4.026-4.046a1 1 0 0 1 1.414 0l4.025 4.046a1 1 0 0 1 .217 1.09z"
                }),
                width: 20,
                height: 20
            }, pt[ht.Trash] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M10,14.999H6H3v-11h3h4h3v11H10z M6,5.999v7h1v-7H6z M10,5.999H9v7h1V5.999zM3,1.999h4v-1h2v1h4v1H3V1.999z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.Trophy] = {
                path: h.createElement("path", {
                    d: "M3.71 2.464C3.7 1.614 3.69 1 3.69 1h10.58l.012 1.464h3.688s.367 2.984-1.465 5.126c-.923 1.33-2.1 1.994-2.866 2.308-.708 1.486-1.918 2.596-3.36 3.008v2.007h1.832v2.196H5.888v-2.197h1.83V12.89c-1.404-.425-2.584-1.512-3.282-2.962-.763-.3-1.988-.965-2.94-2.338C-.338 5.448.03 2.464.03 2.464h3.68zm.014 1.1c.014 1.186.027 2.507.027 3.3 0 .487.05.96.14 1.417-.524-.29-1.174-.75-1.663-1.422-1.258-1.49-1.1-3.295-1.1-3.295h2.597zm10.567 0c.01 1.182.02 2.5.02 3.3 0 .473-.046.935-.132 1.38.51-.294 1.127-.744 1.595-1.386 1.258-1.49 1.1-3.295 1.1-3.295H14.29z",
                    fillRule: "evenodd"
                }),
                width: 18,
                height: 18
            }, pt[ht.Twitter] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M23.966 11.533c-.55.26-1.142.436-1.763.515a3.252 3.252 0 0 0 1.35-1.81c-.6.38-1.26.65-1.95.794A2.983 2.983 0 0 0 19.363 10c-1.697 0-3.07 1.464-3.07 3.27 0 .256.025.505.078.745-2.55-.136-4.814-1.438-6.33-3.417a3.417 3.417 0 0 0-.414 1.644c0 1.134.543 2.135 1.366 2.722a2.918 2.918 0 0 1-1.39-.41v.042c0 1.584 1.057 2.906 2.463 3.206-.452.13-.928.15-1.388.056.392 1.3 1.526 2.245 2.87 2.27A5.917 5.917 0 0 1 9 21.483a8.31 8.31 0 0 0 4.707 1.47c5.648 0 8.736-4.982 8.736-9.304 0-.14-.003-.283-.008-.422a6.48 6.48 0 0 0 1.53-1.693",
                    fillRule: "evenodd"
                }),
                width: 32,
                height: 32
            }, pt[ht.Unheart] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M1,9V7h14v2H1z M1,4l2-2h3l2,2l2-2h3l2,2v2H1V4z M8,14l-4.667-4h9.333L8,14z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.Unignore] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M13,11.341V16l-3.722-3.102C8.863,12.959,8.438,13,8,13c-3.866,0-7-2.462-7-5.5C1,4.462,4.134,2,8,2s7,2.462,7,5.5C15,8.996,14.234,10.35,13,11.341z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.Unlock] = {
                path: h.createElement("path", {
                    fillRule: "evenodd",
                    d: "M15.243 9.002h-6.46l-.6-1.8c-.452-1.36-.16-2.686 1.085-3.1 1.245-.416 2.275.47 2.728 1.83l.128.383-.008.003c.175.525.74.808 1.265.634.524-.175.805-.734.636-1.256v-.01.002l-.13-.385c-.8-2.405-2.957-3.862-5.247-3.1-2.29.764-3.143 3.222-2.34 5.627L6.687 9l-1.936.003c-.414 0-.75.357-.75.8V17.2c0 .44.336.8.75.8h10.493c.414 0 .75-.36.75-.8V9.8c0-.442-.336-.8-.75-.8"
                }),
                width: 20,
                height: 20
            }, pt[ht.Upload] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M84.9630996 35.0930707c1.1070111-1.9372694 1.6605166-4.1512915 1.6605166-6.6420664 0-8.302583-6.6420664-14.9446495-14.9446494-14.9446495-2.7675277 0-5.5350554.8302583-7.7490775 2.2140222C59.7785978 6.58753565 50.3690037.222222 39.5756458.222222c-14.9446495 0-26.8450185 12.1771218-26.8450185 27.1217712 0 .8302583 0 1.9372694.2767528 2.7675277C5.25830258 33.9860596 0 42.0118899 0 51.1447312 0 64.4288641 10.7933579 75.222222 24.0774908 75.222222h53.6900369c11.3468634 0 20.7564575-9.4095941 20.7564575-20.7564576 0-8.8560885-5.5350553-16.605166-13.5608856-19.3726937zM45.9409594 22.0856906l18.5424354 19.6494465H52.0295203v20.2029521H39.8523985V41.7351371H27.1217712l18.8191882-19.6494465z",
                    fillRule: "evenodd"
                }),
                width: 99,
                height: 76
            }, pt[ht.VKontakte] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M16.98 21.362s.362-.04.546-.238c.17-.183.165-.525.165-.525s-.023-1.605.722-1.842c.734-.233 1.676 1.55 2.675 2.236.755.52 1.33.405 1.33.405l2.67-.038s1.397-.086.735-1.185c-.055-.09-.386-.812-1.986-2.297-1.675-1.555-1.45-1.303.567-3.992 1.228-1.638 1.72-2.637 1.566-3.065-.147-.408-1.05-.3-1.05-.3l-3.008.018s-.223-.03-.388.07c-.162.096-.266.322-.266.322s-.476 1.267-1.11 2.345c-1.34 2.274-1.875 2.394-2.094 2.253-.51-.33-.382-1.322-.382-2.028 0-2.203.334-3.122-.65-3.36-.328-.08-.57-.13-1.405-.14-1.073-.01-1.98.004-2.495.256-.342.167-.606.54-.445.562.2.027.65.122.887.446.31.42.298 1.36.298 1.36s.177 2.595-.414 2.917c-.405.22-.96-.23-2.155-2.293-.612-1.057-1.074-2.225-1.074-2.225s-.09-.218-.248-.335c-.193-.14-.462-.186-.462-.186l-2.858.018s-.43.012-.587.2c-.14.165-.01.508-.01.508s2.236 5.234 4.77 7.872c2.323 2.42 4.96 2.26 4.96 2.26h1.196z"
                }),
                width: 32,
                height: 32
            }, pt[ht.Verified] = {
                path: h.createElement("path", {
                    d: "M2.636 2.636L9 0l6.365 2.636L18 9l-2.635 6.365L9 18l-6.364-2.635L0 9l2.636-6.364zM7.38 13.11l6.097-6.42-1.45-1.378-4.726 4.98-1.613-1.52-1.37 1.458 3.065 2.88z"
                }),
                width: 18,
                height: 18
            }, pt[ht.VideoPremiere] = {
                path: h.createElement("path", {
                    d: "M10 1c4.9 0 9 4.1 9 9s-4 9-9 9-9-4-9-9 4-9 9-9zm0 1.8c-3.9 0-7.2 3.3-7.2 7.2 0 3.9 3.3 7.2 7.2 7.2 3.9 0 7.2-3.3 7.2-7.2 0-3.9-3.3-7.2-7.2-7.2zm3.668 7.737l-4.8 3.4C8.784 13.98 8.69 14 8.6 14c-.11 0-.22-.03-.316-.09-.177-.107-.284-.3-.284-.51V6.6c0-.208.107-.4.284-.51C8.38 6.03 8.49 6 8.6 6c.09 0 .184.02.268.063l4.8 3.4c.204.102.332.31.332.537 0 .227-.128.435-.332.537z"
                }),
                width: 20,
                height: 20
            }, pt[ht.VideoRerun] = {
                path: h.createElement("path", {
                    d: "M17.953 4.797c-.004-.404-.25-.766-.626-.917-.12-.05-.247-.073-.373-.073-.264 0-.522.104-.713.3l-1.49 1.526c-.725-.937-1.677-1.684-2.795-2.167-1.745-.754-3.68-.783-5.45-.084-1.766.702-3.154 2.048-3.91 3.795-.753 1.744-.783 3.68-.083 5.446.7 1.767 2.048 3.156 3.794 3.91 1.745.756 3.68.785 5.447.084.563-.222.838-.858.615-1.42-.22-.564-.856-.838-1.42-.615-1.224.485-2.563.464-3.77-.058-1.21-.522-2.143-1.484-2.63-2.707-.483-1.225-.462-2.562.06-3.772.523-1.21 1.484-2.14 2.707-2.626 1.225-.49 2.563-.47 3.773.05.867.375 1.585.983 2.104 1.745L11.3 9.142c-.283.288-.364.718-.206 1.09.155.37.517.608.92.608h.01l4.993-.046c.552-.006.995-.457.99-1.01L17.96 4.79z"
                }),
                width: 20,
                height: 20
            }, pt[ht.ViewerList] = {
                path: h.createElement("path", {
                    clipRule: "evenodd",
                    d: "M6,12.999v-2h8v2H6z M6,6.999h8v2H6V6.999z M6,2.999h8v2H6V2.999z M2,10.999h2v2H2V10.999z M2,6.999h2v2H2V6.999z M2,2.999h2v2H2V2.999z",
                    fillRule: "evenodd"
                }),
                width: 16,
                height: 16
            }, pt[ht.Warning] = {
                path: h.createElement("path", {
                    d: "M6.4,9.5h1.2v1H6.4V9.5z M6.4,5h1.2v4H6.4V5z M0,12h14c0,0-6.7-10-7-10C6.6,2,0,12,0,12z"
                }),
                width: 14,
                height: 14
            }, pt[ht.WhisperMuted] = {
                path: h.createElement("path", {
                    d: "M14 4.308l-.08-.082-2.02.007.002-1.563-.665-.67h-2.23l-.66.67v1.556h-1.8L4.78 6.012v7.13L3 14.077V15L14 4.308zm1.336 4.226v4.685l1.664.89V16H8l7.336-7.466zM8 16h4v1.405l-1 .562L9.022 18 8 17.405V16zm8-12l1 1L4 18l-1-1"
                }),
                width: 20,
                height: 20
            }, pt),
            ft = function(e) {
                var t = {};
                return e.type ? t[ut[e.type]] = !0 : t[ut[it.Inherit]] = !0, h.createElement("figure", l.__assign({
                    className: "tw-svg"
                }, i(e)), h.createElement("svg", {
                    className: c("tw-svg__asset", "tw-svg__asset--" + ht[e.asset].toLowerCase(), t),
                    width: e.fill ? "100%" : (e.width || 16) + "px",
                    height: e.fill ? "100%" : (e.height || 16) + "px",
                    version: "1.1",
                    viewBox: "0 0 " + gt[e.asset].width + " " + gt[e.asset].height,
                    x: "0px",
                    y: "0px"
                }, gt[e.asset].path))
            };
        n("py4c");
        ! function(e) {
            e[e.Notification = 1] = "Notification", e[e.Alt = 2] = "Alt", e[e.Alt2 = 3] = "Alt2", e[e.Brand = 4] = "Brand", e[e.Live = 5] = "Live", e[e.Alert = 6] = "Alert", e[e.Success = 7] = "Success", e[e.Prime = 8] = "Prime", e[e.Dashboard = 9] = "Dashboard"
        }(mt || (mt = {}));
        var vt, wt, bt = (vt = {}, vt[mt.Notification] = "tw-badge--notification", vt[mt.Alt] = "tw-badge--alt", vt[mt.Alt2] = "tw-badge--alt-2", vt[mt.Brand] = "tw-badge--brand", vt[mt.Live] = "tw-badge--live", vt[mt.Alert] = "tw-badge--alert", vt[mt.Success] = "tw-badge--success", vt[mt.Prime] = "tw-badge--prime", vt[mt.Dashboard] = "tw-badge--dashboard", vt),
            yt = function(e) {
                var t = {
                    "tw-badge": !0
                };
                e.type && (t[bt[e.type]] = !0);
                var n = {
                        width: e.size,
                        height: e.size
                    },
                    r = h.createElement(Y, l.__assign({
                        display: g.InlineFlex,
                        justifyContent: _.Center,
                        alignItems: u.Center,
                        className: c(t)
                    }, i(e)), h.createElement("div", {
                        style: n
                    }, h.createElement(J, {
                        className: "tw-badge__icon",
                        display: g.Flex,
                        justifyContent: _.Center,
                        alignItems: u.Center
                    }, h.createElement(ft, {
                        asset: e.icon,
                        fill: !0
                    }))));
                return e.border ? h.createElement(J, {
                    className: "tw-badge__container",
                    display: g.InlineFlex,
                    position: L.Relative
                }, r) : r
            },
            _t = n("F8kA"),
            Et = new Set(["alt", "src", "srcSet", "sizes", "onError", "onLoad", "refHandler"]),
            Ct = function(e) {
                var t, n, r;
                return e.row && (t = u.Center), e.elevation && (n = e.elevation), e.background === Ke.Overlay && (r = Le.Overlay), h.createElement(J, l.__assign({
                    className: "tw-card",
                    position: L.Relative
                }, i(e)), h.createElement(lt, {
                    display: g.Flex,
                    flexDirection: e.row ? v.Row : v.Column,
                    alignItems: t,
                    elevation: n,
                    background: e.background,
                    color: r,
                    border: e.border,
                    flexWrap: b.NoWrap
                }, e.children))
            },
            kt = function(e) {
                return h.createElement(J, l.__assign({
                    className: "tw-card-body",
                    overflow: e.overflow,
                    position: L.Relative
                }, i(e)), e.children)
            };
        n("0+3B");
        ! function(e) {
            e.Default = "tw-card-img--size-default", e.Size2 = "tw-card-img--size-2", e.Size3 = "tw-card-img--size-3", e.Size4 = "tw-card-img--size-4", e.Size6 = "tw-card-img--size-6", e.Size8 = "tw-card-img--size-8", e.Size16 = "tw-card-img--size-16", e.Size24 = "tw-card-img--size-24", e.Size32 = "tw-card-img--size-32"
        }(wt || (wt = {}));
        var Lt, St = function(e) {
                var t = {
                    "tw-card-img": !0
                };
                return e.size && e.size !== wt.Default && (t[e.size] = !0), h.createElement(Y, {
                    flexShrink: 0
                }, h.createElement("div", l.__assign({
                    className: c(t)
                }, i(e)), h.createElement(_e, {
                    ratio: e.aspect ? e.aspect : de.Aspect16x9,
                    overflow: e.overflow
                }, h.createElement(Ce, l.__assign({}, r(e)))), e.children))
            },
            Tt = (n("pna9"), function(e) {
                for (var t = {
                        "tw-placeholder": !0,
                        "tw-placeholder--overlay": e.overlay,
                        "tw-placeholder--fill": !e.lineCount,
                        "tw-placeholder--custom-height": !!e.height
                    }, n = {
                        width: e.width ? e.width / 10 + "rem" : "",
                        height: e.height ? e.height / 10 + "rem" : ""
                    }, r = [], a = 0; a < (e.lineCount || 1); a++) r.push(h.createElement("span", {
                    className: c(t),
                    key: a,
                    style: n
                }));
                return h.createElement("span", l.__assign({
                    className: "tw-placeholder-wrapper"
                }, i(e)), r)
            }),
            xt = (n("cx1p"), function(e) {
                var t;
                return t = h.createElement(Ct, {
                    key: e.title
                }, h.createElement(St, l.__assign({
                    aspect: de.BoxArt
                }, r(e))), h.createElement(kt, null, h.createElement(J, {
                    margin: {
                        top: .5
                    }
                }, h.createElement(Xe, {
                    className: "tw-box-art-card__title",
                    type: Ae.H3,
                    fontSize: xe.Size5,
                    lineHeight: ze.Body,
                    ellipsis: !0
                }, e.title), h.createElement(Xe, {
                    color: Le.Alt2,
                    ellipsis: !0
                }, e.info)))), e.placeholder ? h.createElement(J, null, h.createElement(J, {
                    margin: {
                        bottom: .5
                    }
                }, h.createElement(_e, {
                    ratio: de.Aspect3x4
                }, h.createElement(Tt, null))), h.createElement(Xe, null, h.createElement(Tt, {
                    width: 150
                })), h.createElement(Xe, {
                    fontSize: xe.Size7
                }, h.createElement(Tt, {
                    width: 100
                }))) : e.linkTo ? h.createElement("div", l.__assign({
                    className: "tw-box-art-card"
                }, i(e)), h.createElement(_t.a, {
                    to: e.linkTo,
                    title: e.title,
                    "data-a-target": "tw-box-art-card-link"
                }, t)) : h.createElement("div", l.__assign({
                    className: "tw-box-art-card"
                }, i(e)), t)
            });
        n("kSXB");
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.Small = 1] = "Small", e[e.Large = 2] = "Large"
        }(Lt || (Lt = {}));
        var Nt, zt, Rt = (Nt = {}, Nt[Lt.Small] = "tw-loading-spinner--small", Nt[Lt.Large] = "tw-loading-spinner--large", Nt),
            Mt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        showSpinner: 0 === t.props.delay
                    }, t
                }
                return l.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this,
                        t = void 0 !== this.props.delay ? this.props.delay : 300;
                    t > 0 && (this.delayTimeout = window.setTimeout(function() {
                        e.setState({
                            showSpinner: !0
                        })
                    }, t))
                }, t.prototype.componentWillUnmount = function() {
                    clearTimeout(this.delayTimeout)
                }, t.prototype.render = function() {
                    if (!this.state.showSpinner) return null;
                    var e, t = {
                        "tw-loading-spinner": !0,
                        "tw-loading-spinner--inherit-color": this.props.inheritColor
                    };
                    return this.props.size && (t[Rt[this.props.size]] = !0), e = h.createElement("div", l.__assign({
                        className: c(t)
                    }, i(this.props))), this.props.fillContent && (e = h.createElement(J, {
                        display: g.Flex,
                        justifyContent: _.Center,
                        alignItems: u.Center,
                        fullWidth: !0,
                        fullHeight: !0
                    }, e)), e
                }, t
            }(h.Component);
        n("NKW1");
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.Hollow = 1] = "Hollow", e[e.Text = 2] = "Text", e[e.Alert = 3] = "Alert", e[e.Success = 4] = "Success"
        }(zt || (zt = {}));
        var It, Dt = (Pt = {}, Pt[zt.Hollow] = "tw-button--hollow", Pt[zt.Text] = "tw-button--text", Pt[zt.Alert] = "tw-button--alert", Pt[zt.Success] = "tw-button--success", Pt);
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.Small = 1] = "Small", e[e.Large = 2] = "Large"
        }(It || (It = {}));
        var Ht, At = (Bt = {}, Bt[It.Small] = "tw-button--small", Bt[It.Large] = "tw-button--large", Bt);
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.Loading = 1] = "Loading", e[e.Success = 2] = "Success"
        }(Ht || (Ht = {}));
        var Pt, Bt, Ot, Vt, Ft, Ut = (Ot = {}, Ot[Ht.Loading] = "tw-button--state-loading", Ot[Ht.Success] = "tw-button--state-success", Ot),
            Wt = (Vt = {}, Vt[It.Small] = {
                width: 12,
                height: 12
            }, Vt[It.Large] = {
                width: 20,
                height: 20
            }, Vt),
            qt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.refHandler = function(e) {
                        t.buttonElement = e
                    }, t.onClick = function(e) {
                        t.props.onClick && t.props.onClick(e), t.props.blurAfterClick && t.buttonElement && t.buttonElement.blur()
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e, t, n, r, o, s, d;
                    (this.props.disabled || this.props.state === Ht.Loading || this.props.state === Ht.Success) && (d = !0);
                    var p = {
                        "tw-button": !0,
                        "tw-button--dropmenu": this.props.dropdown,
                        "tw-button--overlay": this.props.overlay,
                        "tw-button--purchase": !!this.props.purchase,
                        "tw-button--status": !!this.props.statusAlertText || !!this.props.statusAlertIcon,
                        "tw-button--disabled": this.props.disabled,
                        "tw-button--full-width": this.props.fullWidth
                    };
                    if (this.props.statusAlertText || this.props.statusAlertIcon || this.props.state === Ht.Success ? p[Dt[zt.Success]] = !0 : this.props.type && (p[Dt[this.props.type]] = !0), this.props.size && (p[At[this.props.size]] = !0), this.props.state && (p[Ut[this.props.state]] = !0), this.props.purchase && (t = h.createElement("span", {
                            className: "tw-button__num-block",
                            key: "tw-button-purchase"
                        }, this.props.purchase)), this.props.dropdown && (e = h.createElement("span", {
                            className: "tw-button__icon tw-button__icon--right",
                            key: "tw-button-dropdown"
                        }, h.createElement(ft, {
                            asset: ht.GlyphArrDown,
                            type: it.Inherit
                        }))), this.props.state === Ht.Loading && (o = h.createElement(J, {
                            className: "tw-button__loading-spinner",
                            position: L.Absolute,
                            key: "tw-button-loading-spinner"
                        }, h.createElement(Mt, {
                            delay: 0,
                            size: this.getSpinnerSize(this.props.size),
                            inheritColor: !0
                        }))), this.props.state === Ht.Success && (s = h.createElement(J, {
                            className: "tw-button__success-icon",
                            position: L.Absolute,
                            display: g.Flex,
                            alignItems: u.Center,
                            justifyContent: _.Center,
                            key: "tw-button-success-icon"
                        }, h.createElement(ft, {
                            asset: ht.Check,
                            width: this.successIconSize(this.props.size),
                            height: this.successIconSize(this.props.size)
                        }))), this.props.icon) {
                        var m = {
                            width: 16,
                            height: 16
                        };
                        this.props.size && (m = Wt[this.props.size]), n = this.props.statusAlertIcon ? h.createElement(J, {
                            className: "tw-button__icon tw-button__icon--status " + (this.props.children ? "tw-button__icon--left" : ""),
                            display: g.Flex,
                            key: "tw-button-icon"
                        }, h.createElement(J, {
                            className: "tw-button__primary-icon",
                            display: g.Flex,
                            alignItems: u.Center,
                            justifyContent: _.Center
                        }, h.createElement(ft, {
                            width: m.width,
                            height: m.height,
                            type: it.Inherit,
                            asset: this.props.icon
                        })), h.createElement(J, {
                            className: "tw-button__alert-icon",
                            display: g.Flex,
                            alignItems: u.Center,
                            justifyContent: _.Center
                        }, h.createElement(ft, {
                            width: m.width,
                            height: m.height,
                            type: it.Inherit,
                            asset: this.props.statusAlertIcon
                        }))) : h.createElement("span", {
                            className: "tw-button__icon " + (this.props.children ? "tw-button__icon--left" : ""),
                            key: "tw-button-icon"
                        }, h.createElement(ft, {
                            width: m.width,
                            height: m.height,
                            type: it.Inherit,
                            asset: this.props.icon
                        }))
                    }
                    this.props.children && (r = this.props.statusAlertText ? h.createElement("span", {
                        className: "tw-button__text",
                        key: "tw-button-text"
                    }, h.createElement("span", {
                        className: "tw-button__primary-text",
                        "data-a-target": "tw-button-text"
                    }, this.props.children), h.createElement("span", {
                        className: "tw-button__alert-text"
                    }, this.props.statusAlertText)) : h.createElement("span", {
                        className: "tw-button__text",
                        "data-a-target": "tw-button-text",
                        key: "tw-button-text"
                    }, this.props.children));
                    var f;
                    this.props.tabIndex && (f = this.props.tabIndex);
                    var v;
                    this.props.targetBlank && (v = "_blank");
                    var w = [n, r, o, s, e, t],
                        b = l.__assign({
                            tabIndex: f,
                            onClick: this.onClick,
                            "aria-label": this.props.ariaLabel,
                            className: c(p)
                        }, i(this.props));
                    if (this.props.linkTo && !d) {
                        if (a(this.props.linkTo)) {
                            if ("string" == typeof this.props.linkTo) return h.createElement("a", l.__assign({
                                href: this.props.linkTo,
                                target: v,
                                ref: this.refHandler,
                                download: this.props.download
                            }, b), w);
                            throw new Error("External links with Location descriptors are not implemented in core-ui.button! Pass a string as linkTo instead.")
                        }
                        return h.createElement(_t.a, l.__assign({
                            to: this.props.linkTo,
                            target: v,
                            download: this.props.download
                        }, b), w)
                    }
                    return h.createElement("button", l.__assign({
                        disabled: d,
                        ref: this.refHandler
                    }, b), w)
                }, t.prototype.getSpinnerSize = function(e) {
                    switch (e) {
                        case It.Small:
                            return Lt.Small;
                        case It.Large:
                            return Lt.Large;
                        case It.Default:
                        default:
                            return Lt.Default
                    }
                }, t.prototype.successIconSize = function(e) {
                    switch (e) {
                        case It.Small:
                            return 12;
                        case It.Large:
                            return 20;
                        case It.Default:
                        default:
                            return 16
                    }
                }, t
            }(h.Component);
        n("9Q3d");
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.Hollow = 1] = "Hollow", e[e.Primary = 2] = "Primary", e[e.Alert = 3] = "Alert", e[e.Secondary = 4] = "Secondary", e[e.Success = 5] = "Success"
        }(Ft || (Ft = {}));
        var jt, Gt, Qt, Kt, Zt = (jt = {}, jt[Ft.Primary] = "tw-button-icon--primary", jt[Ft.Hollow] = "tw-button-icon--hollow", jt[Ft.Alert] = "tw-button-icon--alert", jt[Ft.Secondary] = "tw-button-icon--secondary", jt[Ft.Success] = "tw-button-icon--success", jt),
            Xt = (Gt = {}, Gt[It.Small] = "tw-button-icon--small", Gt[It.Large] = "tw-button-icon--large", Gt),
            Yt = (Qt = {}, Qt[It.Small] = {
                width: 12,
                height: 12
            }, Qt[It.Large] = {
                width: 20,
                height: 20
            }, Qt),
            Jt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.refHandler = function(e) {
                        t.buttonElement = e
                    }, t.onClick = function(e) {
                        t.props.onClick && t.props.onClick(e), t.props.blurAfterClick && t.buttonElement && t.buttonElement.blur()
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e, t, n = {
                        "tw-button-icon": !0,
                        "tw-button-icon--dropmenu": this.props.dropdown,
                        "tw-button-icon--disabled": this.props.disabled,
                        "tw-button-icon--overlay": this.props.overlay,
                        "tw-button-icon--status": !!this.props.statusAlertIcon
                    };
                    if (this.props.statusAlertIcon ? n[Zt[Ft.Success]] = !0 : this.props.type && (n[Zt[this.props.type]] = !0), this.props.size && (n[Xt[this.props.size]] = !0), this.props.dropdown && (e = h.createElement("span", {
                            className: "tw-button-icon__icon tw-button-icon__icon--right",
                            key: "tw-button-dropdown"
                        }, h.createElement(ft, {
                            asset: ht.GlyphArrDown,
                            type: it.Inherit
                        }))), this.props.icon) {
                        var r = {
                            width: 16,
                            height: 16
                        };
                        this.props.size && (r = Yt[this.props.size]), t = h.createElement("span", {
                            className: "tw-button-icon__icon"
                        }, h.createElement(ft, {
                            width: r.width,
                            height: r.height,
                            type: it.Inherit,
                            asset: this.props.icon
                        })), t = this.props.statusAlertIcon ? h.createElement(J, {
                            className: "tw-button-icon__icon tw-button-icon__icon--status",
                            display: g.Flex,
                            key: "tw-button-icon"
                        }, h.createElement(J, {
                            className: "tw-button-icon__primary-icon",
                            display: g.Flex,
                            alignItems: u.Center,
                            justifyContent: _.Center
                        }, h.createElement(ft, {
                            width: r.width,
                            height: r.height,
                            type: it.Inherit,
                            asset: this.props.icon
                        })), h.createElement(J, {
                            className: "tw-button-icon__alert-icon",
                            display: g.Flex,
                            alignItems: u.Center,
                            justifyContent: _.Center
                        }, h.createElement(ft, {
                            width: r.width,
                            height: r.height,
                            type: it.Inherit,
                            asset: this.props.statusAlertIcon
                        }))) : h.createElement("span", {
                            className: "tw-button-icon__icon",
                            key: "tw-button-icon"
                        }, h.createElement(ft, {
                            width: r.width,
                            height: r.height,
                            type: it.Inherit,
                            asset: this.props.icon
                        }))
                    }
                    var o;
                    this.props.tabIndex && (o = this.props.tabIndex);
                    var s;
                    this.props.targetBlank && (s = "_blank");
                    var d = l.__assign({
                            tabIndex: o,
                            onClick: this.onClick,
                            "aria-label": this.props.ariaLabel,
                            className: c(n)
                        }, i(this.props)),
                        p = [t, e];
                    if (this.props.linkTo && !this.props.disabled) {
                        if (a(this.props.linkTo)) {
                            if ("string" == typeof this.props.linkTo) return h.createElement("a", l.__assign({
                                href: this.props.linkTo,
                                target: s,
                                download: this.props.download,
                                ref: this.refHandler
                            }, d), p);
                            throw new Error("External links with Location descriptors are not implemented in core-ui.button! Pass a string as linkTo instead.")
                        }
                        return h.createElement(_t.a, l.__assign({
                            to: this.props.linkTo,
                            target: s,
                            download: this.props.download
                        }, d), p)
                    }
                    return h.createElement("button", l.__assign({
                        disabled: this.props.disabled,
                        tabIndex: o,
                        ref: this.refHandler
                    }, d), p)
                }, t
            }(h.Component);
        n("/9PY");
        ! function(e) {
            e[e.ExtraSmall = 1] = "ExtraSmall", e[e.Small = 2] = "Small", e[e.Medium = 3] = "Medium", e[e.Large = 4] = "Large", e[e.ExtraLarge = 5] = "ExtraLarge"
        }(Kt || (Kt = {}));
        var $t, en = (tn = {}, tn[Kt.ExtraSmall] = "tw-balloon--xs", tn[Kt.Small] = "tw-balloon--sm", tn[Kt.Medium] = "tw-balloon--md", tn[Kt.Large] = "tw-balloon--lg", tn[Kt.ExtraLarge] = "tw-balloon--xl", tn);
        ! function(e) {
            e[e.Top = 1] = "Top", e[e.Bottom = 2] = "Bottom", e[e.Left = 3] = "Left", e[e.Right = 4] = "Right", e[e.TopLeft = 5] = "TopLeft", e[e.TopRight = 6] = "TopRight", e[e.BottomRight = 7] = "BottomRight", e[e.BottomLeft = 8] = "BottomLeft", e[e.TopCenter = 9] = "TopCenter", e[e.BottomCenter = 10] = "BottomCenter", e[e.LeftCenter = 11] = "LeftCenter", e[e.RightCenter = 12] = "RightCenter"
        }($t || ($t = {}));
        var tn, nn, rn, an = (nn = {}, nn[$t.Top] = "tw-balloon--up", nn[$t.Bottom] = "tw-balloon--down", nn[$t.Left] = "tw-balloon--left", nn[$t.Right] = "tw-balloon--right", nn[$t.TopLeft] = "tw-balloon--up tw-balloon--left", nn[$t.TopRight] = "tw-balloon--up tw-balloon--right", nn[$t.BottomRight] = "tw-balloon--down tw-balloon--right", nn[$t.BottomLeft] = "tw-balloon--down", nn[$t.TopCenter] = "tw-balloon--up tw-balloon--center", nn[$t.BottomCenter] = "tw-balloon--down tw-balloon--center", nn[$t.LeftCenter] = "tw-balloon--left tw-balloon--center", nn[$t.RightCenter] = "tw-balloon--right tw-balloon--center", nn),
            on = function(e) {
                var t = {
                    "tw-balloon": !0
                };
                e.size && (t[en[e.size]] = !0), e.direction ? t[an[e.direction]] = !0 : t[an[$t.Bottom]] = !0;
                var n, r, a, o;
                e.offsetX && (e.direction === $t.Left || e.direction === $t.TopLeft || e.direction === $t.BottomLeft || e.direction === $t.LeftCenter || e.direction === $t.BottomRight || e.direction === $t.TopRight ? r = e.offsetX : n = e.offsetX), e.offsetY && (e.direction === $t.Top || e.direction === $t.TopLeft || e.direction === $t.TopRight || e.direction === $t.TopCenter ? o = e.offsetY : a = e.offsetY);
                var s, u, d, p = {
                    marginLeft: n,
                    marginRight: r,
                    marginTop: a,
                    marginBottom: o
                };
                e.tailOffset && (e.direction === $t.Left || e.direction === $t.Right || e.direction === $t.LeftCenter || e.direction === $t.RightCenter ? s = e.tailOffset + "px" : e.direction === $t.TopRight || e.direction === $t.BottomRight ? (u = e.tailOffset + "px", d = "auto") : (u = "auto", d = e.tailOffset + "px"));
                var m, f = {
                    top: s,
                    left: d,
                    right: u
                };
                return e.noTail || (m = h.createElement(Y, {
                    className: "tw-balloon__tail",
                    position: L.Absolute,
                    overflow: C.Hidden
                }, h.createElement("div", {
                    style: f
                }, h.createElement(lt, {
                    className: "tw-balloon__tail-symbol",
                    position: L.Absolute,
                    background: e.tailBackground || Ke.Base,
                    borderRadius: Ye.Small,
                    border: !0
                })))), h.createElement(Y, {
                    display: e.show ? g.Block : g.Hide,
                    position: L.Absolute
                }, h.createElement("div", l.__assign({
                    style: p,
                    className: c(t)
                }, i(e)), m, h.createElement(lt, {
                    border: !0,
                    borderRadius: Ye.Small,
                    background: Ke.Base,
                    elevation: e.elevation ? e.elevation : 1
                }, e.children)))
            },
            sn = (n("I6b2"), function(e) {
                var t, n = o(),
                    r = {
                        "tw-checkbox": !0,
                        "tw-checkbox--error": e.error
                    };
                return e.tabIndex && (t = e.tabIndex), h.createElement("div", l.__assign({
                    className: c(r)
                }, i(e)), h.createElement("input", {
                    className: "tw-checkbox__input",
                    type: "checkbox",
                    "data-a-target": "tw-checkbox",
                    checked: e.checked,
                    defaultChecked: e.defaultChecked,
                    disabled: e.disabled,
                    id: e.id ? e.id : n,
                    name: e.name,
                    onBlur: e.onBlur,
                    onChange: e.onChange,
                    onFocus: e.onFocus,
                    ref: e.refDelegate,
                    required: e.required,
                    tabIndex: t,
                    value: e.value
                }), h.createElement("label", {
                    className: "tw-checkbox__label",
                    htmlFor: e.id ? e.id : n
                }, e.label))
            }),
            ln = (n("bB4F"), function(e) {
                var t = {
                    "tw-drop-zone": !0,
                    "tw-drop-zone--over": e.dragOver,
                    "tw-drop-zone--error": e.error,
                    "tw-drop-zone--disabled": e.disabled
                };
                return h.createElement(J, l.__assign({
                    className: c(t)
                }, i(e), {
                    alignItems: u.Center,
                    display: g.Flex,
                    fullHeight: !0,
                    fullWidth: !0,
                    justifyContent: _.Center,
                    position: L.Absolute,
                    attachTop: !0,
                    attachLeft: !0
                }), h.createElement("div", {
                    className: "tw-drop-zone__content"
                }, e.children))
            });
        n("iYrx");
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.Small = 1] = "Small", e[e.Medium = 2] = "Medium", e[e.Large = 3] = "Large", e[e.None = 4] = "None"
        }(rn || (rn = {}));
        var cn, hn, un = (cn = {}, cn[rn.Small] = "tw-grid--gutter-sm", cn[rn.Medium] = "tw-grid--gutter-md", cn[rn.Large] = "tw-grid--gutter-lg", cn[rn.None] = "tw-grid--gutter-none", cn),
            dn = function(e) {
                var t = {
                    "tw-grid": !0
                };
                return e.gutterSize && (t[un[e.gutterSize]] = !0), h.createElement(J, l.__assign({
                    alignItems: e.alignItems,
                    justifyContent: e.justifyContent,
                    breakpointExtraSmall: e.breakpointExtraSmall,
                    breakpointSmall: e.breakpointSmall,
                    breakpointMedium: e.breakpointMedium,
                    breakpointLarge: e.breakpointLarge,
                    breakpointExtraLarge: e.breakpointExtraLarge,
                    breakpointExtraExtraLarge: e.breakpointExtraExtraLarge,
                    className: c(t)
                }, i(e)), e.children)
            },
            pn = (n("M1vR"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = (r = {}, r["tw-col-offset-" + this.props.offset] = this.props.offset && "number" == typeof this.props.offset, r),
                        t = this.getColumnCount("", this.props.cols),
                        n = this.getColumnCount("offset-", this.props.offset);
                    return h.createElement("div", l.__assign({
                        className: c(e, [t, n])
                    }, i(this.props)), this.props.children);
                    var r
                }, t.prototype.getColumnCount = function(e, t) {
                    if (!t) return "";
                    var n = [];
                    return "object" != typeof t ? "tw-col-" + t : (n.push("tw-col-" + e + t.default), t.xs && n.push("tw-xs-col-" + e + t.xs), t.sm && n.push("tw-sm-col-" + e + t.sm), t.md && n.push("tw-md-col-" + e + t.md), t.lg && n.push("tw-lg-col-" + e + t.lg), t.xl && n.push("tw-xl-col-" + e + t.xl), t.xxl && n.push("tw-xxl-col-" + e + t.xxl), n)
                }, t
            }(h.Component));
        n("WjKA");
        ! function(e) {
            e[e.Text = 0] = "Text", e[e.Email = 1] = "Email", e[e.Password = 2] = "Password", e[e.Search = 3] = "Search"
        }(hn || (hn = {}));
        var mn, gn = function(e) {
                var t, n;
                e.tabIndex && (n = e.tabIndex);
                var r = {
                    "tw-input": !0,
                    "tw-input--error": e.error
                };
                return e.icon && (t = h.createElement(J, {
                    className: "tw-input__icon-group",
                    position: L.Absolute,
                    attachLeft: e.icon && !e.iconRight,
                    attachRight: e.iconRight,
                    attachTop: !0,
                    zIndex: I.Default
                }, h.createElement(lt, {
                    className: "tw-input__icon",
                    color: Le.Alt2,
                    display: g.Flex,
                    alignItems: u.Center,
                    justifyContent: _.Center
                }, h.createElement(ft, {
                    asset: e.icon,
                    type: it.Inherit
                })))), h.createElement(J, l.__assign({
                    position: L.Relative
                }, i(e)), t, h.createElement(Y, {
                    padding: {
                        left: e.icon && !e.iconRight ? 3 : void 0,
                        right: e.iconRight ? 3 : void 0
                    }
                }, h.createElement("input", {
                    type: hn[e.type].toLowerCase(),
                    className: c(r),
                    placeholder: e.placeholder,
                    "aria-label": e.ariaLabel,
                    autoCapitalize: e.autoCapitalize ? "on" : "off",
                    autoCorrect: e.autoCorrect ? "on" : "off",
                    autoComplete: e.autoComplete,
                    autoFocus: e.autoFocus,
                    "data-a-target": "tw-input",
                    defaultValue: e.defaultValue,
                    disabled: e.disabled,
                    id: e.id,
                    name: e.name,
                    onBlur: e.onBlur,
                    onChange: e.onChange,
                    onClick: e.onClick,
                    onFocus: e.onFocus,
                    onKeyDown: e.onKeyDown,
                    maxLength: e.maxLength,
                    readOnly: e.readOnly,
                    ref: e.refDelegate,
                    required: e.required,
                    spellCheck: e.spellCheck,
                    tabIndex: n,
                    value: e.value
                })))
            },
            fn = (n("9NS1"), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.refHandler = function(e) {
                        t.buttonElement = e
                    }, t.onClick = function(e) {
                        t.props.onClick && t.props.onClick(e), t.props.blurAfterClick && t.buttonElement && t.buttonElement.blur()
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e, t = {
                        "tw-interactable": !0,
                        "tw-interactable--alpha": this.props.alpha,
                        "tw-interactable--selected": this.props.selected,
                        "tw-interactable--hover": this.props.hover,
                        "tw-interactable--disabled": this.props.disabled,
                        "tw-interactable--alert": this.props.alert
                    };
                    this.props.tabIndex && (e = this.props.tabIndex);
                    var n;
                    this.props.targetBlank && (n = "_blank");
                    var r = l.__assign({
                        tabIndex: e,
                        onClick: this.onClick,
                        "aria-label": this.props.ariaLabel,
                        className: c(t)
                    }, i(this.props));
                    if (this.props.linkTo) {
                        if (a(this.props.linkTo)) {
                            if ("string" == typeof this.props.linkTo) return h.createElement("a", l.__assign({
                                href: this.props.linkTo,
                                target: n,
                                ref: this.refHandler
                            }, r), this.props.children);
                            throw new Error("External links with Location descriptors are not implemented in core-ui.interactable! Pass a string as linkTo instead.")
                        }
                        return h.createElement(_t.a, l.__assign({
                            to: this.props.linkTo,
                            target: n
                        }, r), this.props.children)
                    }
                    return h.createElement("button", l.__assign({
                        disabled: this.props.disabled,
                        ref: this.refHandler
                    }, r), this.props.children)
                }, t
            }(h.Component));
        n("oPyM");
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.Inherit = 1] = "Inherit", e[e.Overlay = 2] = "Overlay"
        }(mn || (mn = {}));
        var vn, wn, bn = (vn = {}, vn[mn.Default] = "", vn[mn.Inherit] = "tw-link--inherit", vn[mn.Overlay] = "tw-link--overlay", vn),
            yn = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.refHandler = function(e) {
                        t.buttonElement = e
                    }, t.onClick = function(e) {
                        t.props.onClick && t.props.onClick(e), t.buttonElement && t.buttonElement.blur()
                    }, t
                }
                return l.__extends(t, e), t.prototype.render = function() {
                    var e = {
                        "tw-link": !0,
                        "tw-link--hover-underline-none": this.props.hoverUnderlineNone,
                        "tw-link--button": !this.props.to
                    };
                    if (this.props.type && (e[bn[this.props.type]] = !0), this.props.to) {
                        if (a(this.props.to)) {
                            if ("string" == typeof this.props.to) return h.createElement("a", l.__assign({
                                href: this.props.to,
                                className: c(e),
                                onClick: this.props.onClick,
                                target: this.props.targetBlank ? "_blank" : void 0
                            }, i(this.props)), this.props.children);
                            throw new Error('External links with Location descriptors are not implemented in core-ui.link! Pass a string as "to" instead.')
                        }
                        return h.createElement(_t.a, l.__assign({
                            className: c(e),
                            onClick: this.props.onClick,
                            to: this.props.to,
                            target: this.props.targetBlank ? "_blank" : void 0
                        }, i(this.props)), this.props.children)
                    }
                    return h.createElement("button", l.__assign({
                        className: c(e)
                    }, i(this.props), {
                        onClick: this.onClick,
                        ref: this.refHandler
                    }), this.props.children)
                }, t
            }(h.Component);
        n("cFXH");
        ! function(e) {
            e[e.Vertical = 1] = "Vertical", e[e.Horizontal = 2] = "Horizontal"
        }(wn || (wn = {}));
        var _n, En = function(e) {
            var t, n, r = {
                    "tw-form-group": !0,
                    "tw-form-group--error": e.error
                },
                a = {
                    "tw-form-group__label": !0,
                    "tw-form-group__label--selectable": !!e.id
                };
            return e.labelOptional && (t = h.createElement("span", {
                className: "tw-form-group__optional"
            }, "(", e.labelOptional, ")")), e.hint && !e.error ? n = h.createElement("p", {
                className: "tw-form-group__hint"
            }, e.hint) : e.errorMessage && e.error && (n = h.createElement("p", {
                className: "tw-form-group__hint"
            }, e.errorMessage)), e.orientation === wn.Horizontal ? h.createElement(J, l.__assign({
                className: c(r),
                display: g.Flex,
                flexWrap: b.NoWrap
            }, i(e)), h.createElement(J, {
                className: "tw-form-group__label-container",
                flexShrink: 0,
                padding: {
                    right: 2
                }
            }, h.createElement("label", {
                className: c(a),
                htmlFor: e.id
            }, e.label, t)), h.createElement(J, {
                flexGrow: 1
            }, e.children, n)) : h.createElement("div", l.__assign({
                className: c(r)
            }, i(e)), h.createElement("label", {
                className: c(a),
                htmlFor: e.id
            }, e.label, t), e.children, n)
        };
        n("4rQm");
        ! function(e) {
            e[e.Small = 1] = "Small", e[e.Medium = 2] = "Medium", e[e.Large = 3] = "Large"
        }(_n || (_n = {}));
        var Cn;
        ! function(e) {
            e[e.Offline = 1] = "Offline", e[e.Hosting = 2] = "Hosting", e[e.Live = 3] = "Live"
        }(Cn || (Cn = {}));
        var kn, Ln, Sn, Tn = (kn = {}, kn[Cn.Live] = "tw-channel-status-indicator--live", kn[Cn.Hosting] = "tw-channel-status-indicator--hosting", kn[Cn.Offline] = "tw-channel-status-indicator--offline", kn),
            xn = (Ln = {}, Ln[_n.Small] = "tw-channel-status-indicator--small", Ln[_n.Medium] = "tw-channel-status-indicator--medium", Ln[_n.Large] = "tw-channel-status-indicator--large", Ln),
            Nn = function(e) {
                var t = {
                    "tw-channel-status-indicator": !0,
                    "tw-channel-status-indicator--pulse": e.pulse
                };
                return e.size ? t[xn[e.size]] = !0 : t[xn[_n.Small]] = !0, e.status ? t[Tn[e.status]] = !0 : t[Tn[Cn.Offline]] = !0, h.createElement(J, l.__assign({
                    display: g.InlineBlock,
                    position: L.Relative,
                    className: c(t)
                }, i(e)))
            };
        n("u1ju");
        ! function(e) {
            e[e.Top = 1] = "Top", e[e.Bottom = 2] = "Bottom", e[e.Left = 3] = "Left", e[e.Right = 4] = "Right"
        }(Sn || (Sn = {}));
        var zn, Rn = (Mn = {}, Mn[Sn.Top] = "tw-tooltip--up", Mn[Sn.Bottom] = "tw-tooltip--down", Mn[Sn.Left] = "tw-tooltip--left", Mn[Sn.Right] = "tw-tooltip--right", Mn);
        ! function(e) {
            e[e.Left = 1] = "Left", e[e.Center = 2] = "Center", e[e.Right = 3] = "Right"
        }(zn || (zn = {}));
        var Mn, In, Dn, Hn = (In = {}, In[zn.Left] = "tw-tooltip--align-left", In[zn.Center] = "tw-tooltip--align-center", In[zn.Right] = "tw-tooltip--align-right", In),
            An = function(e) {
                var t = o(),
                    n = {
                        "tw-tooltip": !0,
                        "tw-tooltip--wrap": !!e.width
                    },
                    r = {
                        "tw-tooltip-wrapper": !0,
                        "tw-tooltip-wrapper--show": e.show
                    };
                e.direction ? n[Rn[e.direction]] = !0 : n[Rn[Sn.Top]] = !0, e.align && e.align !== zn.Center && e.direction !== Sn.Left && e.direction !== Sn.Right ? n[Hn[e.align]] = !0 : n[Hn[zn.Center]] = !0;
                var a, s, u, d;
                e.offsetX && (e.align === zn.Right ? s = e.offsetX : a = e.offsetX), e.offsetY && (e.direction && e.direction !== Sn.Top ? u = e.offsetY : d = e.offsetY);
                var p = {
                    marginLeft: a,
                    marginRight: s,
                    marginTop: u,
                    marginBottom: d,
                    width: e.width
                };
                return h.createElement(Y, l.__assign({
                    display: e.display ? e.display : g.InlineFlex
                }, i(e)), h.createElement("div", {
                    className: c(r),
                    "aria-describedby": t,
                    title: e.title
                }, e.children, h.createElement("div", {
                    className: c(n),
                    style: p,
                    "data-a-target": "tw-tooltip-label",
                    role: "tooltip",
                    id: t
                }, e.label)))
            },
            Pn = (n("tnvA"), function(e) {
                var t;
                e.icon && (t = h.createElement(ft, {
                    type: it.Inherit,
                    asset: e.icon
                }));
                var n = h.createElement("div", l.__assign({
                    className: c({
                        "tw-stat": !0
                    })
                }, i(e)), h.createElement("span", {
                    className: "tw-stat__icon"
                }, t), h.createElement("span", {
                    className: "tw-stat__value",
                    "data-a-target": "tw-stat-value"
                }, e.value));
                return e.label ? h.createElement(An, {
                    direction: e.tooltipDirection ? e.tooltipDirection : Sn.Bottom,
                    align: e.tooltipAlign ? e.tooltipAlign : zn.Center,
                    label: e.label
                }, n) : n
            }),
            Bn = (n("xdZ7"), function(e) {
                var t;
                e.tabIndex && (t = e.tabIndex);
                var n;
                return n = e.icon ? h.createElement("span", {
                    className: "tw-tag__icon"
                }, h.createElement(ft, {
                    width: 12,
                    height: 12,
                    type: it.Inherit,
                    asset: e.icon
                })) : h.createElement("span", {
                    className: "tw-tag__label"
                }, e.label), h.createElement("button", l.__assign({
                    onClick: e.onClose,
                    disabled: e.disabled,
                    tabIndex: t,
                    className: c({
                        "tw-tag": !0
                    })
                }, i(e)), n, h.createElement("span", {
                    className: "tw-tag__close"
                }, h.createElement(ft, {
                    width: 8,
                    height: 8,
                    type: it.Inherit,
                    asset: ht.Close
                })))
            });
        n("pk+c");
        ! function(e) {
            e[e.Notification = 1] = "Notification", e[e.Brand = 2] = "Brand", e[e.Live = 3] = "Live", e[e.Alert = 4] = "Alert", e[e.Success = 5] = "Success", e[e.Prime = 6] = "Prime", e[e.Overlay = 7] = "Overlay"
        }(Dn || (Dn = {}));
        var On, Vn, Fn = (On = {}, On[Dn.Notification] = "tw-pill--notification", On[Dn.Brand] = "tw-pill--brand", On[Dn.Live] = "tw-pill--live", On[Dn.Alert] = "tw-pill--alert", On[Dn.Success] = "tw-pill--success", On[Dn.Prime] = "tw-pill--prime", On[Dn.Overlay] = "tw-pill--overlay", On),
            Un = function(e) {
                var t = {
                    "tw-pill": !0
                };
                return e.type && (t[Fn[e.type]] = !0), h.createElement("span", l.__assign({
                    className: c(t)
                }, i(e)), e.label)
            };
        n("3+CI");
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.Small = 1] = "Small", e[e.ExtraSmall = 2] = "ExtraSmall"
        }(Vn || (Vn = {}));
        var Wn, qn = (jn = {}, jn[Vn.Small] = "tw-progress-bar--sm", jn[Vn.ExtraSmall] = "tw-progress-bar--xs", jn);
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.Caution = 1] = "Caution", e[e.Error = 2] = "Error", e[e.Success = 3] = "Success"
        }(Wn || (Wn = {}));
        var jn, Gn, Qn, Kn = (Gn = {}, Gn[Wn.Caution] = "tw-progress-bar--caution", Gn[Wn.Error] = "tw-progress-bar--error", Gn[Wn.Success] = "tw-progress-bar--success", Gn),
            Zn = function(e) {
                var t = {
                    "tw-progress-bar": !0,
                    "tw-progress-bar--countdown": !!e.countdown,
                    "tw-progress-bar--inherit": e.inherit,
                    "tw-progress-bar--mask": e.mask
                };
                return e.size && (t[qn[e.size]] = !0), e.status && (t[Kn[e.status]] = !0), h.createElement("div", l.__assign({
                    className: c(t)
                }, i(e)), h.createElement("div", {
                    onAnimationEnd: e.onCountdownEnd,
                    className: "tw-progress-bar__fill",
                    style: {
                        width: e.value + "%",
                        animationDuration: e.countdown ? e.countdown + "s" : ""
                    },
                    "data-a-target": "tw-progress-bar-animation"
                }))
            },
            Xn = (n("FTZM"), function(e) {
                var t, n = "tw-" + o(),
                    r = {
                        "tw-radio": !0,
                        "tw-radio--error": e.error
                    };
                return e.tabIndex && (t = e.tabIndex), h.createElement("div", l.__assign({
                    className: c(r)
                }, i(e)), h.createElement("input", {
                    type: "radio",
                    className: "tw-radio__input",
                    "data-a-target": "tw-radio",
                    autoFocus: e.autoFocus,
                    checked: e.checked,
                    defaultChecked: e.defaultChecked,
                    disabled: e.disabled,
                    id: e.id ? e.id : n,
                    name: e.name,
                    onBlur: e.onBlur,
                    onChange: e.onChange,
                    onFocus: e.onFocus,
                    required: e.required,
                    ref: e.refDelegate,
                    tabIndex: t,
                    value: e.value
                }), h.createElement("label", {
                    className: "tw-radio__label",
                    htmlFor: e.id ? e.id : n
                }, e.label))
            }),
            Yn = (n("WZjW"), function(e) {
                var t, n = o(),
                    r = {
                        "tw-toggle": !0,
                        "tw-toggle--error": e.error
                    };
                return e.tabIndex && (t = e.tabIndex), h.createElement("div", l.__assign({
                    className: c(r)
                }, i(e)), h.createElement("input", {
                    className: "tw-toggle__input",
                    autoFocus: e.autoFocus,
                    checked: e.checked,
                    defaultValue: e.defaultValue,
                    disabled: e.disabled,
                    id: e.id ? e.id : n,
                    name: e.name,
                    onBlur: e.onBlur,
                    onChange: e.onChange,
                    onFocus: e.onFocus,
                    tabIndex: t,
                    type: "checkbox",
                    ref: e.refDelegate,
                    value: e.value,
                    "data-a-target": "tw-toggle"
                }), h.createElement("label", {
                    htmlFor: e.id ? e.id : n,
                    className: "tw-toggle__button"
                }))
            }),
            Jn = (n("ALci"), function(e) {
                var t, n = {
                    "tw-range": !0,
                    "tw-range--error": e.error
                };
                return e.tabIndex && (t = e.tabIndex), h.createElement("input", l.__assign({
                    className: c(n),
                    id: e.id,
                    onBlur: e.onBlur,
                    onChange: e.onChange,
                    onFocus: e.onFocus,
                    tabIndex: t,
                    defaultValue: e.defaultValue,
                    disabled: e.disabled,
                    type: "range",
                    min: e.min,
                    max: e.max,
                    name: e.name,
                    ref: e.refDelegate,
                    step: e.step,
                    value: e.value
                }, i(e)))
            }),
            $n = (n("FTbL"), function(e) {
                var t, n = "tw-" + o();
                return e.tabIndex && (t = e.tabIndex), h.createElement("div", l.__assign({
                    className: c("tw-search-input")
                }, i(e)), h.createElement(Y, {
                    display: g.HideAccessible
                }, h.createElement("label", {
                    htmlFor: e.id ? e.id : n
                }, "Search")), h.createElement(gn, {
                    autoCapitalize: e.autoCapitalize,
                    autoFocus: e.autoFocus,
                    autoComplete: "off",
                    disabled: e.disabled,
                    error: e.error,
                    icon: ht.NavSearch,
                    id: e.id ? e.id : n,
                    maxLength: e.maxLength,
                    name: e.name,
                    onBlur: e.onBlur,
                    onChange: e.onChange,
                    onFocus: e.onFocus,
                    onKeyDown: e.onKeyDown,
                    placeholder: e.placeholder,
                    refDelegate: e.refDelegate,
                    spellCheck: e.spellCheck,
                    tabIndex: t,
                    type: hn.Search,
                    value: e.value
                }))
            }),
            ei = (n("lpYt"), function(e) {
                return h.createElement("div", l.__assign({
                    className: c("tw-segmented-button")
                }, i(e)), e.children)
            }),
            ti = (n("qPr7"), function(e) {
                var t;
                return e.tabIndex && (t = e.tabIndex), h.createElement("label", l.__assign({
                    className: c({
                        "tw-segmented-button-option": !0
                    }),
                    htmlFor: e.id
                }, i(e)), h.createElement("input", {
                    type: e.type || "radio",
                    className: "tw-segmented-button-option__input",
                    checked: e.checked,
                    defaultChecked: e.defaultChecked,
                    defaultValue: e.defaultValue,
                    disabled: e.disabled,
                    id: e.id,
                    name: e.name,
                    onBlur: e.onBlur,
                    onChange: e.onChange,
                    onFocus: e.onFocus,
                    tabIndex: t,
                    ref: e.refDelegate,
                    value: e.value,
                    "data-a-target": "tw-segmented-button-option"
                }), h.createElement("span", {
                    className: "tw-segmented-button-option__label"
                }, e.label))
            });
        n("uWno");
        ! function(e) {
            e[e.Default = 1] = "Default", e[e.Hollow = 2] = "Hollow"
        }(Qn || (Qn = {}));
        var ni, ii, ri = (ni = {}, ni[Qn.Default] = "", ni[Qn.Hollow] = "tw-select--hollow", ni),
            ai = function(e) {
                var t = {
                    "tw-select": !0,
                    "tw-select--disabled": e.disabled,
                    "tw-select--error": e.error
                };
                e.type && (t[ri[e.type]] = !0);
                var n;
                return e.tabIndex && (n = e.tabIndex), h.createElement("select", l.__assign({
                    className: c(t),
                    defaultValue: e.defaultValue,
                    disabled: e.disabled,
                    id: e.id,
                    name: e.name,
                    onBlur: e.onBlur,
                    onChange: e.onChange,
                    onFocus: e.onFocus,
                    required: e.required,
                    tabIndex: n,
                    value: e.value,
                    ref: e.refDelegate
                }, i(e)), e.children)
            },
            oi = (n("5fkB"), function(e) {
                var t, n, r = {
                    "tw-tab-nav__item": !0,
                    "mg-l-auto": e.pullRight,
                    "tw-tab-nav__item--disabled": e.disabled
                };
                e.targetBlank && (n = "_blank");
                var o;
                if (e.active && (o = "active"), e.linkTo && !e.disabled)
                    if (a(e.linkTo)) {
                        if ("string" != typeof e.linkTo) throw new Error("External links with Location descriptors are not implemented in core-ui.button! Pass a string as linkTo instead.");
                        t = h.createElement("a", {
                            target: n,
                            className: o,
                            onClick: e.onClick,
                            href: e.linkTo,
                            role: "tab",
                            "data-a-target": "tw-tab-link"
                        }, e.children)
                    } else t = h.createElement(_t.a, {
                        target: n,
                        className: o,
                        onClick: e.onClick,
                        to: e.linkTo,
                        role: "tab",
                        "data-a-target": "tw-tab-link"
                    }, e.children);
                else t = h.createElement("button", {
                    disabled: e.disabled,
                    className: o,
                    onClick: e.onClick,
                    role: "tab",
                    "data-a-target": "tw-tab-link"
                }, e.children);
                return h.createElement("li", l.__assign({
                    className: c(r),
                    role: "presentation"
                }, i(e)), t)
            }),
            si = (n("3KEv"), function(e) {
                return h.createElement("div", l.__assign({
                    className: e.alignRight ? "flex" : ""
                }, i(e)), h.createElement("ul", {
                    className: "tw-tab-nav " + (e.alignRight ? "mg-l-auto" : ""),
                    role: "tablist"
                }, e.children))
            }),
            li = (n("rxEr"), function(e) {
                var t, n = {
                    "tw-textarea": !0,
                    "tw-textarea--no-resize": e.noResize,
                    "tw-textarea--error": e.error
                };
                e.tabIndex && (t = e.tabIndex);
                var r = {
                    paddingRight: e.paddingRight ? e.paddingRight / 10 + "rem" : null
                };
                return h.createElement(Y, {
                    overflow: e.overflow
                }, h.createElement("textarea", l.__assign({
                    className: c(n),
                    autoFocus: e.autoFocus,
                    cols: e.cols,
                    disabled: e.disabled,
                    id: e.id,
                    maxLength: e.maxLength,
                    name: e.name,
                    onBlur: e.onBlur,
                    onChange: e.onChange,
                    onFocus: e.onFocus,
                    onKeyDown: e.onKeyDown,
                    style: r,
                    placeholder: e.placeholder,
                    rows: e.rows,
                    tabIndex: t,
                    value: e.value,
                    defaultValue: e.defaultValue,
                    ref: e.refDelegate
                }, i(e))))
            }),
            ci = (n("MQjL"), function(e) {
                var t;
                return t = h.createElement(Ct, {
                    key: e.title
                }, h.createElement(St, l.__assign({
                    aspect: de.Aspect16x9
                }, r(e))), h.createElement(kt, null, h.createElement(J, {
                    margin: {
                        top: .5
                    }
                }, h.createElement(Xe, {
                    className: "tw-thumbnail-card__title",
                    type: Ae.H3,
                    fontSize: xe.Size5,
                    lineHeight: ze.Body,
                    ellipsis: !0
                }, e.title)), h.createElement(Xe, {
                    color: Le.Alt2,
                    ellipsis: !0
                }, e.info))), e.placeholder ? h.createElement(J, null, h.createElement(J, {
                    margin: {
                        bottom: .5
                    }
                }, h.createElement(_e, {
                    ratio: de.Aspect16x9
                }, h.createElement(Tt, null))), h.createElement(Xe, null, h.createElement(Tt, {
                    width: 150
                })), h.createElement(Xe, {
                    fontSize: xe.Size7
                }, h.createElement(Tt, {
                    width: 100
                }))) : e.linkTo ? h.createElement("div", l.__assign({
                    className: "tw-thumbnail-card"
                }, i(e)), h.createElement(_t.a, {
                    to: e.linkTo,
                    title: e.title,
                    "data-a-target": "tw-thumbnail-card-link"
                }, t)) : h.createElement("div", l.__assign({
                    className: "tw-thumbnail-card"
                }, i(e)), t)
            }),
            hi = (n("FlHF"), function(e) {
                return h.createElement(J, {
                    fullWidth: !0
                }, h.createElement(lt, {
                    display: g.Flex,
                    flexWrap: b.NoWrap,
                    className: c({
                        "tw-toast": !0
                    }),
                    elevation: 3,
                    background: Ke.Base,
                    border: !0
                }, h.createElement(J, {
                    flexGrow: 1
                }, e.children), h.createElement(lt, {
                    display: g.Flex,
                    flexShrink: 0,
                    borderLeft: !0
                }, h.createElement(fn, {
                    onClick: e.onClose,
                    ariaLabel: "Dismiss This",
                    tabIndex: e.tabIndex,
                    alpha: !0,
                    "data-a-target": "tw-toast-close"
                }, h.createElement(J, {
                    padding: 1,
                    display: g.Flex,
                    alignItems: u.Center,
                    justifyContent: _.Center,
                    className: "tw-toast__dismiss-target"
                }, h.createElement(ft, {
                    asset: ht.Close
                }))))))
            }),
            ui = (n("CH+Z"), function(e) {
                var t = {};
                return e.alternateRows && (t["tw-table--alternate-rows"] = !0), h.createElement("div", {
                    className: c("tw-table", t)
                }, e.children)
            }),
            di = (n("vXa3"), function(e) {
                return h.createElement("div", {
                    className: c("tw-table-body", {})
                }, e.children)
            }),
            pi = (n("kpCl"), function(e) {
                return h.createElement(J, {
                    padding: 1,
                    className: c("tw-table-cell", {})
                }, e.children)
            }),
            mi = (n("a/ze"), function(e) {
                return h.createElement(lt, {
                    background: Ke.Alt,
                    className: c("tw-table-header", {})
                }, e.children)
            });
        n("HWUk");
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.Ascending = 1] = "Ascending", e[e.Descending = 2] = "Descending"
        }(ii || (ii = {}));
        var gi, fi = function(e) {
                var t, n;
                if (void 0 !== e.sorting) {
                    switch (ii[e.sorting]) {
                        case "Ascending":
                            n = h.createElement(ft, {
                                asset: ht.GlyphArrUp,
                                width: 10
                            });
                            break;
                        case "Descending":
                            n = h.createElement(ft, {
                                asset: ht.GlyphArrDown,
                                width: 10
                            });
                            break;
                        default:
                            n = h.createElement(ft, {
                                asset: ht.GlyphArrUpDown,
                                width: 10
                            })
                    }
                    t = h.createElement(fn, {
                        alpha: !0,
                        onClick: e.onClick
                    }, h.createElement(lt, {
                        color: Le.Link,
                        display: g.Flex,
                        alignItems: u.Center,
                        padding: 1
                    }, h.createElement(J, {
                        margin: {
                            right: .5
                        },
                        flexGrow: 1
                    }, h.createElement(Xe, {
                        bold: !0
                    }, e.label)), n))
                } else t = h.createElement(J, {
                    padding: 1
                }, h.createElement(Xe, {
                    bold: !0
                }, e.label));
                return h.createElement(J, {
                    className: c("tw-table-heading", {})
                }, t)
            },
            vi = (n("PS8b"), function(e) {
                return h.createElement("div", {
                    className: c("tw-table-row", {})
                }, e.children)
            });
        n("Tr88");
        ! function(e) {
            e[e.Default = 0] = "Default", e[e.ExtraSmall = 1] = "ExtraSmall", e[e.Small = 2] = "Small", e[e.Large = 3] = "Large", e[e.None = 4] = "None"
        }(gi || (gi = {}));
        var wi, bi = (yi = {}, yi[gi.ExtraSmall] = "tw-tower--gutter-xs", yi[gi.Small] = "tw-tower--gutter-sm", yi[gi.Large] = "tw-tower--gutter-lg", yi[gi.None] = "tw-tower--gutter-none", yi);
        ! function(e) {
            e[e.ExtraSmall = 1] = "ExtraSmall", e[e.Small = 2] = "Small", e[e.Medium = 3] = "Medium", e[e.Large = 4] = "Large"
        }(wi || (wi = {}));
        var yi, _i, Ei = (_i = {}, _i[wi.ExtraSmall] = "tw-tower--120", _i[wi.Small] = "tw-tower--180", _i[wi.Medium] = "tw-tower--240", _i[wi.Large] = "tw-tower--300", _i),
            Ci = function(e) {
                var t = {
                    "tw-tower": !0,
                    "tw-tower--nogrow": e.noGrow
                };
                e.gutterSize && (t[bi[e.gutterSize]] = !0), e.childWidth && (t[Ei[e.childWidth]] = !0);
                var n = new Array;
                if (e.placeholderItems)
                    for (var r = 0; r < e.placeholderItems; ++r) n.push(h.createElement("div", {
                        className: "tw-tower__placeholder",
                        key: r
                    }));
                return h.createElement(J, l.__assign({
                    justifyContent: e.center ? _.Center : void 0,
                    flexWrap: e.noWrap ? b.NoWrap : b.Wrap,
                    className: c(t)
                }, i(e)), e.children, n)
            },
            ki = (n("OeCe"), function(e) {
                return h.createElement("div", l.__assign({
                    className: c({
                        "tw-typeset": !0
                    })
                }, i(e)), e.children)
            });
        n.d(t, "e", function() {
            return me
        }), n.d(t, "f", function() {
            return K
        }), n.d(t, "g", function() {
            return $
        }), n.d(t, !1, function() {
            return te
        }), n.d(t, "h", function() {
            return ie
        }), n.d(t, "i", function() {
            return ae
        }), n.d(t, "j", function() {
            return _e
        }), n.d(t, "k", function() {
            return de
        }), n.d(t, "a", function() {
            return ge
        }), n.d(t, "l", function() {
            return ct
        }), n.d(t, !1, function() {}), n.d(t, "n", function() {
            return yt
        }), n.d(t, "o", function() {
            return mt
        }), n.d(t, "t", function() {
            return xt
        }), n.d(t, "u", function() {
            return qt
        }), n.d(t, "x", function() {
            return It
        }), n.d(t, "z", function() {
            return zt
        }), n.d(t, "y", function() {
            return Ht
        }), n.d(t, "v", function() {
            return Jt
        }), n.d(t, "w", function() {
            return Ft
        }), n.d(t, "p", function() {
            return on
        }), n.d(t, "r", function() {
            return Kt
        }), n.d(t, "q", function() {
            return $t
        }), n.d(t, "B", function() {
            return kt
        }), n.d(t, "C", function() {
            return St
        }), n.d(t, "D", function() {
            return wt
        }), n.d(t, "A", function() {
            return Ct
        }), n.d(t, "H", function() {
            return sn
        }), n.d(t, "O", function() {
            return ln
        }), n.d(t, "U", function() {
            return dn
        }), n.d(t, "V", function() {
            return rn
        }), n.d(t, "J", function() {
            return pn
        }), n.d(t, "_15", function() {
            return ft
        }), n.d(t, "_16", function() {
            return ht
        }), n.d(t, "_17", function() {
            return it
        }), n.d(t, "K", function() {
            return Ce
        }), n.d(t, !1, function() {}), n.d(t, !1, function() {}), n.d(t, "Y", function() {
            return gn
        }), n.d(t, "Z", function() {
            return hn
        }), n.d(t, "_0", function() {
            return fn
        }), n.d(t, "L", function() {
            return yn
        }), n.d(t, "M", function() {
            return mn
        }), n.d(t, "S", function() {
            return En
        }), n.d(t, "T", function() {
            return wn
        }), n.d(t, "_25", function() {
            return lt
        }), n.d(t, "X", function() {
            return st
        }), n.d(t, "m", function() {
            return Ke
        }), n.d(t, "s", function() {
            return Ye
        }), n.d(t, "b", function() {
            return s
        }), n.d(t, "c", function() {
            return u
        }), n.d(t, "d", function() {
            return p
        }), n.d(t, "W", function() {
            return Y
        }), n.d(t, "_2", function() {
            return J
        }), n.d(t, "N", function() {
            return g
        }), n.d(t, "P", function() {
            return v
        }), n.d(t, "Q", function() {
            return b
        }), n.d(t, "_1", function() {
            return _
        }), n.d(t, !1, function() {
            return T
        }), n.d(t, "_5", function() {
            return C
        }), n.d(t, "_9", function() {
            return L
        }), n.d(t, "_36", function() {
            return N
        }), n.d(t, "_52", function() {
            return I
        }), n.d(t, "_51", function() {
            return R
        }), n.d(t, "E", function() {
            return Nn
        }), n.d(t, "F", function() {
            return _n
        }), n.d(t, "G", function() {
            return Cn
        }), n.d(t, "_4", function() {
            return Mt
        }), n.d(t, "_23", function() {
            return Lt
        }), n.d(t, "_24", function() {
            return Pn
        }), n.d(t, "_34", function() {
            return Bn
        }), n.d(t, "_6", function() {
            return Un
        }), n.d(t, "_7", function() {
            return Dn
        }), n.d(t, "_8", function() {
            return Tt
        }), n.d(t, "_10", function() {
            return Te
        }), n.d(t, "_11", function() {
            return we
        }), n.d(t, "_12", function() {
            return Zn
        }), n.d(t, "_13", function() {
            return Vn
        }), n.d(t, !1, function() {
            return Wn
        }), n.d(t, "_14", function() {
            return Xn
        }), n.d(t, "_35", function() {
            return Xe
        }), n.d(t, !1, function() {
            return Oe
        }), n.d(t, "I", function() {
            return Le
        }), n.d(t, "R", function() {
            return xe
        }), n.d(t, "_3", function() {
            return ze
        }), n.d(t, "_38", function() {
            return Me
        }), n.d(t, "_39", function() {
            return De
        }), n.d(t, "_40", function() {
            return Ae
        }), n.d(t, "_50", function() {
            return Be
        }), n.d(t, "_42", function() {
            return Yn
        }), n.d(t, !1, function() {
            return Jn
        }), n.d(t, "_18", function() {
            return $n
        }), n.d(t, "_19", function() {
            return ei
        }), n.d(t, "_20", function() {
            return ti
        }), n.d(t, "_21", function() {
            return ai
        }), n.d(t, "_26", function() {
            return oi
        }), n.d(t, "_27", function() {
            return si
        }), n.d(t, "_37", function() {
            return li
        }), n.d(t, !1, function() {
            return ci
        }), n.d(t, "_41", function() {
            return hi
        }), n.d(t, "_28", function() {
            return ui
        }), n.d(t, "_29", function() {
            return di
        }), n.d(t, "_30", function() {
            return pi
        }), n.d(t, "_31", function() {
            return mi
        }), n.d(t, "_32", function() {
            return fi
        }), n.d(t, "_22", function() {
            return ii
        }), n.d(t, "_33", function() {
            return vi
        }), n.d(t, "_43", function() {
            return An
        }), n.d(t, "_45", function() {
            return Sn
        }), n.d(t, "_44", function() {
            return zn
        }), n.d(t, "_46", function() {
            return Ci
        }), n.d(t, "_48", function() {
            return gi
        }), n.d(t, "_47", function() {
            return wi
        }), n.d(t, "_49", function() {
            return ki
        }), n.d(t, "_53", function() {
            return i
        })
    },
    OeCe: function(e, t) {},
    POVT: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Core_Actions_CurrentUser"
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
                end: 89
            }
        };
        n.loc.source = {
            body: "query Core_Actions_CurrentUser {\ncurrentUser {\ndisplayName\nid\nlogin\nroles {\nisStaff\n}\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    PS8b: function(e, t) {},
    QLcb: function(e, t) {},
    "QM+N": function(e, t, n) {
        "use strict";

        function i() {
            s.n.mount(a.createElement(o.c, {
                history: s.n.history
            }, a.createElement(P, null)), document.getElementById("root"))
        }

        function r() {
            var e = s.n.store.getState();
            !O && Object(h.e)(e) && (O = !0, B(), s.a.optimizedBuild ? i() : setTimeout(i, 100))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("U7vG"),
            o = n("CIox"),
            s = n("6sO2"),
            l = n("Ejve"),
            c = n("f2i/"),
            h = n("Aj/L"),
            u = n("oH2x"),
            d = n("RH2O"),
            p = n("F8kA"),
            m = n("TToO"),
            g = n("bZTi"),
            f = n("ZyA2"),
            v = n("NXs7"),
            w = n("VAT8"),
            b = n("vH/s"),
            y = n("CSlQ"),
            _ = n("2KeS"),
            E = n("+xm8"),
            C = n("NikC"),
            k = n("HW6M"),
            L = n("rCmJ"),
            S = n("7vx8"),
            T = n("Odds"),
            x = (n("UrOd"), n("nslU")),
            N = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        dropdownOpen: !1
                    }, t.onCardClick = function() {
                        t.setState({
                            dropdownOpen: !t.state.dropdownOpen
                        })
                    }, t.onClickOut = function() {
                        t.setState({
                            dropdownOpen: !1
                        })
                    }, t.onLoginClick = function(e) {
                        e.preventDefault(), t.props.login()
                    }, t.onLogoutClick = function(e) {
                        e.preventDefault(), t.props.logout()
                    }, t.onSignUpClick = function(e) {
                        e.preventDefault(), t.props.signup()
                    }, t.onDarkModeCheckboxClick = function() {
                        var e = t.props.theme === v.a.Dark ? v.a.Light : v.a.Dark;
                        t.props.changeTheme(e, C.a.UserMenu)
                    }, t
                }
                return m.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.reportInteractive()
                }, t.prototype.componentDidUpdate = function() {
                    this.reportInteractive()
                }, t.prototype.render = function() {
                    if (this.props.data.loading || this.props.data.error) return a.createElement(T._8, null);
                    if (this.props.isOnboarding) return a.createElement(T._2, {
                        display: T.N.Flex,
                        className: "clips-top-nav__user",
                        fullHeight: !0
                    }, a.createElement(T._2, {
                        display: T.N.Flex,
                        flexWrap: T.Q.NoWrap,
                        alignItems: T.c.Center,
                        flexGrow: 1,
                        padding: {
                            right: 1
                        },
                        fullHeight: !0
                    }, a.createElement(T._2, {
                        margin: {
                            x: 1
                        },
                        flexShrink: 0
                    }, a.createElement(T._2, null, a.createElement(T.l, {
                        size: 30,
                        src: this.props.data.currentUser.profileImageURL,
                        alt: "User avatar"
                    }))), a.createElement(T._2, {
                        flexGrow: 1,
                        flexShrink: 1,
                        flexDirection: T.P.Column,
                        ellipsis: !0
                    }, a.createElement(T._25, {
                        className: "clips-top-nav__username"
                    }, this.props.data.currentUser.displayName))));
                    if (this.props.isLoggedIn) {
                        var e = a.createElement(T._25, {
                                borderBottom: !0,
                                margin: {
                                    y: 1
                                }
                            }, a.createElement(T._2, {
                                margin: {
                                    x: 2,
                                    bottom: 1
                                }
                            }, a.createElement(T.H, {
                                id: "dark-mode-toggle",
                                label: Object(s.d)("Dark Mode", "ClipsUser"),
                                "data-a-target": "dark-mode-toggle",
                                "data-test-selector": "dark-mode-toggle",
                                "data-a-value": this.props.theme,
                                checked: this.props.theme === v.a.Dark,
                                onChange: this.onDarkModeCheckboxClick
                            }))),
                            t = a.createElement(p.a, {
                                to: "/" + this.props.data.currentUser.login + "/manager/clips"
                            }, a.createElement(T._25, {
                                color: T.I.Alt,
                                display: T.N.Flex,
                                alignItems: T.c.Center,
                                padding: {
                                    x: 2,
                                    y: .5
                                }
                            }, a.createElement(T._35, null, Object(s.d)("Clips Manager", "ClipsUser")))),
                            n = a.createElement(p.a, {
                                to: "/" + this.props.data.currentUser.login
                            }, a.createElement(T._25, {
                                color: T.I.Alt,
                                display: T.N.Flex,
                                alignItems: T.c.Center,
                                padding: {
                                    x: 2,
                                    y: .5
                                }
                            }, a.createElement(T._35, null, Object(s.d)("My Twitch Channel", "ClipsUser")))),
                            i = k(Object(w.c)(v.a.Dark), {
                                "clips-top-nav__dropdown-open": this.state.dropdownOpen
                            }),
                            r = k({
                                "clips-top-nav__dropdown-open": this.state.dropdownOpen
                            }, {
                                "clips-top-nav__dropdown": !this.state.dropdownOpen
                            });
                        return a.createElement(L.a, {
                            onClickOut: this.onClickOut,
                            className: i
                        }, a.createElement(T._2, {
                            display: T.N.Flex,
                            className: "clips-top-nav__user",
                            fullHeight: !0
                        }, a.createElement(T._0, {
                            onClick: this.onCardClick,
                            "data-test-selector": "user-menu-toggle"
                        }, a.createElement(T._2, {
                            display: T.N.Flex,
                            flexWrap: T.Q.NoWrap,
                            alignItems: T.c.Center,
                            flexGrow: 1,
                            padding: {
                                right: 1
                            },
                            fullHeight: !0
                        }, a.createElement(T._2, {
                            margin: {
                                x: 1
                            },
                            flexShrink: 0
                        }, a.createElement(T._2, null, a.createElement(T.l, {
                            size: 30,
                            src: this.props.data.currentUser.profileImageURL,
                            alt: "User avatar"
                        }))), a.createElement(T._2, {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexDirection: T.P.Column,
                            ellipsis: !0
                        }, a.createElement(T._25, {
                            className: "clips-top-nav__username"
                        }, this.props.data.currentUser.displayName)), a.createElement(T._25, {
                            display: T.N.Flex,
                            flexShrink: 0,
                            className: "clips-top-nav__expand"
                        }, a.createElement(T._15, {
                            asset: T._16.GlyphArrDown
                        }))))), a.createElement(T._25, {
                            fullWidth: !0,
                            overflow: T._5.Hidden,
                            position: T._9.Absolute,
                            padding: {
                                y: 1
                            },
                            background: T.m.Base,
                            className: r,
                            "data-test-selector": "dropdown-down"
                        }, t, n, e, a.createElement(T._0, {
                            onClick: this.onLogoutClick
                        }, a.createElement(T._25, {
                            color: T.I.Alt,
                            display: T.N.Flex,
                            alignItems: T.c.Center,
                            padding: {
                                x: 2,
                                y: .5
                            }
                        }, a.createElement(T._2, {
                            display: T.N.Flex,
                            alignItems: T.c.Center,
                            margin: {
                                right: 1
                            }
                        }, a.createElement(T._15, {
                            asset: T._16.NavLogout,
                            height: 18,
                            width: 18
                        })), a.createElement(T._35, null, Object(s.d)("Log Out", "ClipsUser"))))))
                    }
                    return a.createElement(T._2, {
                        display: T.N.Flex,
                        fullHeight: !0
                    }, a.createElement(T._2, {
                        display: T.N.Flex,
                        flexWrap: T.Q.NoWrap,
                        margin: {
                            x: .5
                        },
                        alignItems: T.c.Center,
                        flexGrow: 1
                    }, a.createElement(T.u, {
                        onClick: this.onLoginClick
                    }, Object(s.d)("Log in", "ClipsUser"))), a.createElement(T._2, {
                        display: T.N.Flex,
                        flexWrap: T.Q.NoWrap,
                        margin: {
                            x: .5
                        },
                        alignItems: T.c.Center,
                        flexGrow: 1
                    }, a.createElement(T.u, {
                        onClick: this.onSignUpClick
                    }, Object(s.d)("Sign Up", "ClipsUser"))))
                }, t.prototype.reportInteractive = function() {
                    !this.props.data || this.props.data.loading && !this.props.data.error || this.props.latencyTracking.reportInteractive()
                }, t = m.__decorate([Object(y.d)("ClipsUser"), Object(S.a)(x)], t)
            }(a.Component),
            z = Object(d.b)(function(e) {
                return {
                    isLoggedIn: Object(h.d)(e),
                    theme: e.ui.theme
                }
            }, function(e) {
                return Object(_.b)({
                    logout: c.g,
                    login: function() {
                        return c.f(E.a.TopNavLoginButton)
                    },
                    signup: function() {
                        return c.h(E.a.TopNavSignupButton)
                    },
                    changeTheme: C.b
                }, e)
            })(N),
            R = (n("NS5s"), function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(T.W, {
                        position: T._9.Fixed,
                        attachTop: !0,
                        fullWidth: !0
                    }, a.createElement("nav", {
                        className: "clips-top-nav"
                    }, a.createElement(T._2, {
                        className: "clips-top-nav__menu",
                        display: T.N.Flex,
                        alignItems: T.c.Stretch,
                        flexWrap: T.Q.NoWrap,
                        fullHeight: !0,
                        justifyContent: T._1.Between
                    }, a.createElement(T.W, {
                        display: T.N.InlineFlex,
                        alignItems: T.c.Center,
                        flexShrink: 0
                    }, a.createElement(p.a, {
                        to: {
                            pathname: "/",
                            state: {
                                medium: b.PageviewMedium.TopNav,
                                content: b.PageviewContent.Logo
                            }
                        },
                        className: "clips-top-nav__home-link"
                    }, a.createElement(T._15, {
                        asset: T._16.LogoTwitch,
                        width: 94,
                        height: 32
                    }))), a.createElement(z, {
                        darkModeEnabled: this.props.darkModeEnabled
                    }))))
                }, t = m.__decorate([Object(y.d)("ClipsTopNav", {
                    autoReportInteractive: !0
                })], t)
            }(a.Component)),
            M = (n("QLcb"), g.a.wrap(function() {
                return n.e(64).then(n.bind(null, "zjc9"))
            }, "ClipsIndex")),
            I = g.a.wrap(function() {
                return n.e(65).then(n.bind(null, "CqXJ"))
            }, "ClipsCreate"),
            D = g.a.wrap(function() {
                return n.e(53).then(n.bind(null, "Fg4Y"))
            }, "ClipsWatch"),
            H = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return m.__extends(t, e), t.prototype.render = function() {
                    return a.createElement(T._2, {
                        className: "clips-root " + Object(w.c)(this.props.theme),
                        position: T._9.Absolute,
                        overflow: T._5.Hidden,
                        attachRight: !0,
                        attachTop: !0,
                        attachBottom: !0,
                        attachLeft: !0,
                        margin: {
                            top: 5
                        }
                    }, a.createElement(R, {
                        darkModeEnabled: this.props.theme === v.a.Dark
                    }), a.createElement(T._25, {
                        position: T._9.Relative,
                        background: T.m.Alt,
                        color: T.I.Base,
                        display: T.N.Flex,
                        flexWrap: T.Q.NoWrap,
                        fullHeight: !0
                    }, a.createElement(T.W, {
                        position: T._9.Relative,
                        display: T.N.Flex,
                        justifyContent: T._1.Center,
                        flexGrow: 1,
                        fullHeight: !0,
                        fullWidth: !0,
                        padding: {
                            top: 1,
                            x: 1
                        }
                    }, a.createElement("main", {
                        className: "clips-root__main"
                    }, a.createElement(o.d, null, a.createElement(p.d, {
                        path: "/create",
                        component: I
                    }), a.createElement(p.d, {
                        path: "/:slug",
                        component: D
                    }), a.createElement(p.d, {
                        path: "/",
                        component: M
                    })))), a.createElement(f.a, null)))
                }, t
            }(a.Component),
            A = Object(d.b)(function(e) {
                return {
                    firstPageLoaded: !!e.session.firstPageLoaded,
                    isLoggedIn: Object(h.d)(e),
                    theme: e.ui.theme
                }
            })(H),
            P = Object(p.f)(A);
        s.a.optimizedBuild || n.e(0).then(n.bind(null, "c+Ld")).then(function(e) {
            return window.Perf = e
        });
        var B, O = !1;
        s.a.buildType !== l.a.Production && (B = s.n.store.getReduxStore().subscribe(r), Object(u.a)(), s.n.store.dispatch(Object(c.e)()))
    },
    "RSE+": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return r
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "d", function() {
            return o
        });
        var i;
        ! function(e) {
            e.Web = "web", e.Desktop = "desktop"
        }(i || (i = {}));
        var r;
        ! function(e) {
            e.Live = "live", e.Communities = "communities", e.Games = "games", e.Hosts = "hosts", e.ForYou = "foryou"
        }(r || (r = {}));
        var a;
        ! function(e) {
            e.Archive = "archive", e.Highlight = "highlight", e.Upload = "upload", e.WatchParty = "watch_party", e.PastPremiere = "past_premiere", e.PremiereUpload = "premiere_upload"
        }(a || (a = {}));
        var o;
        ! function(e) {
            e.Clip = "clip", e.Channel = " channel", e.Chomment = "chomment", e.Collection = "collection", e.Event = "event", e.Game = "game", e.Stream = "stream", e.Video = "vod", e.User = "user"
        }(o || (o = {}))
    },
    Th9g: function(e, t, n) {
        "use strict";
        var i, r = n("TToO"),
            a = n("HW6M"),
            o = n("KSGD"),
            s = n("U7vG"),
            l = n("6sO2");
        n("aiwk");
        ! function(e) {
            e[e.Up = 0] = "Up", e[e.Down = 1] = "Down"
        }(i || (i = {}));
        var c = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    hasPendingLoadMoreRequest: !1,
                    loadedMore: !0
                }, t.isTriggerVisible = function(e, t) {
                    var n = t.top,
                        i = t.top + t.height;
                    return !(e.bottom < n || e.top > i)
                }, t.getOrientation = function() {
                    return void 0 === t.props.orientation ? i.Up : t.props.orientation
                }, t.setWrapRef = function(e) {
                    return t.wrapElement = e
                }, t.setRef = function(e) {
                    return t.element = e
                }, t
            }
            return r.__extends(t, e), t.prototype.render = function() {
                var e = this.getOrientation(),
                    t = a({
                        "scrollable-trigger__trigger-area": !0,
                        "scrollable-trigger__trigger-area--up": e === i.Up,
                        "scrollable-trigger__trigger-area--down": e === i.Down
                    }),
                    n = {
                        height: this.props.pixelThreshold || 100
                    };
                return s.createElement("div", {
                    className: "scrollable-trigger__wrapper",
                    ref: this.setWrapRef
                }, s.createElement("div", {
                    className: t,
                    ref: this.setRef,
                    style: n
                }))
            }, t.prototype.componentDidMount = function() {
                var e = this.context.registerReceiver;
                e ? this.unregister = e(this) : l.i.warn("<InfiniteScrollTrigger /> initialized missing a <ScrollableArea /> provider")
            }, t.prototype.componentWillUnmount = function() {
                this.unregister && this.unregister()
            }, t.prototype.componentWillReceiveProps = function(e) {
                !this.props.enabled && e.enabled && this.context.requestVisibilityCheck(this)
            }, t.prototype.checkVisible = function(e, t, n) {
                return r.__awaiter(this, void 0, void 0, function() {
                    var t, i, a, o, s = this;
                    return r.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (void 0 === n && (n = this.props.requestCap || 5), !(this.element && (this.state.loadedMore || this.props.forceLoadMoreContent) && !this.state.hasPendingLoadMoreRequest && this.props.enabled && n > 0)) return [3, 4];
                                if (t = this.element.getBoundingClientRect(), i = this.props.contentLength, a = this.wrapElement.offsetTop, !this.isTriggerVisible(t, e)) return [3, 4];
                                this.setState({
                                    hasPendingLoadMoreRequest: !0
                                }), r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, this.props.loadMore()];
                            case 2:
                                return r.sent(), this.setState({
                                    hasPendingLoadMoreRequest: !1
                                }), requestAnimationFrame(function() {
                                    if (s.element) {
                                        var t;
                                        t = void 0 !== s.props.contentLength && void 0 !== i ? s.props.contentLength > i : s.wrapElement.offsetTop > a, s.setState({
                                            loadedMore: t
                                        }), n && (t || s.props.forceLoadMoreContent) && s.checkVisible(e, void 0, n - 1)
                                    }
                                }), [3, 4];
                            case 3:
                                throw o = r.sent(), this.element && this.setState({
                                    hasPendingLoadMoreRequest: !1
                                }), o;
                            case 4:
                                return [2]
                        }
                    })
                })
            }, t.contextTypes = {
                registerReceiver: o.func,
                requestVisibilityCheck: o.func
            }, t
        }(s.Component);
        n.d(t, "b", function() {
            return i
        }), n.d(t, "a", function() {
            return c
        })
    },
    Tr88: function(e, t) {},
    UF1m: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("BzvE"),
            a = n("CAzn"),
            o = n("IWpL"),
            s = n("/wlI"),
            l = n("FuaS"),
            c = n("rbXT");
        n.d(t, "a", function() {
            return u
        });
        var h = new Set([o.SpadeEventType.AutoHostToggle, o.SpadeEventType.Chat, o.SpadeEventType.DeprioritizeVodcastToggle, o.SpadeEventType.Follow, o.SpadeEventType.TeamHostToggle, o.SpadeEventType.Unfollow]),
            u = function() {
                function e(e) {
                    var t = this;
                    this.eventEmitter = new r.EventEmitter, this.eventQueue = new Array, this.hasCheckedInitialReferrer = !1, this.mixpanelEventQueue = new Array, this.trackingDataCache = {
                        platform: o.SpadePlatform.Web,
                        videoPlayerData: {
                            followCTAVisible: !1
                        }
                    }, this.referrerURL = "", this.firstBatchSubmitted = !1, this.getEventQueue = function() {
                        return t.eventQueue
                    }, this.getEndpoint = function() {
                        return t.endpoint
                    }, this.getLastPageview = function() {
                        return t.trackingDataCache.lastPageView
                    }, this.getPlatform = function() {
                        return t.trackingDataCache.platform
                    }, this.getVideoPlayerTrackingData = function() {
                        return t.trackingDataCache.videoPlayerData
                    }, this.getOrQueryDeviceFingerprint = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e = this;
                            return i.__generator(this, function(t) {
                                return this.trackingDataCache.deviceFingerprint ? (this.logger.debug("Using cached device fingerprint"), [2, this.trackingDataCache.deviceFingerprint]) : this.deviceFingerprintPromise ? (this.logger.debug("Awaiting existing device fingerprint promise"), [2, this.deviceFingerprintPromise]) : (this.deviceFingerprintPromise = new Promise(function(t) {
                                    e.logger.debug("Querying device fingerprint");
                                    try {
                                        (new a.Fingerprint2).get(function(n, i) {
                                            e.trackingDataCache.deviceFingerprint = n, e.logger.debug("Identified device fingerprint", {
                                                fingerprint: n
                                            }), t(n);
                                            var r = {};
                                            i.forEach(function(e) {
                                                r["fp_" + e.key] = e.valueHash
                                            }), e.track(o.SpadeEventType.BrowserFingerprint, r)
                                        })
                                    } catch (n) {
                                        e.logger.debug("Error identifying fingerprint:", n), t(null)
                                    }
                                }), [2, this.deviceFingerprintPromise])
                            })
                        })
                    }, this.getOrQueryEventData = function() {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var e, t;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.trackingDataCache.eventData ? (this.logger.debug("Using cached event data"), [2, this.trackingDataCache.eventData]) : [3, 1];
                                    case 1:
                                        return this.eventDataPromise ? (this.logger.debug("Awaiting existing promise"), [4, this.eventDataPromise]) : [3, 3];
                                    case 2:
                                        return t = n.sent(), [2, t.data];
                                    case 3:
                                        return e = this.store.getState(), this.isLoggedIn(e) ? (this.logger.debug("Querying event data to submit events..."), this.eventDataPromise = this.apollo.client.query({
                                            query: c
                                        }), [4, this.eventDataPromise]) : [3, 5];
                                    case 4:
                                        (t = n.sent()).data && !t.loading && (this.logger.debug("Event data query completed."), this.trackingDataCache.eventData = t.data), n.label = 5;
                                    case 5:
                                        return this.trackingDataCache.eventData || (this.trackingDataCache.eventData = {
                                            currentUser: {
                                                id: null,
                                                hasTurbo: !1,
                                                hasPrime: !1,
                                                language: null,
                                                login: null
                                            }
                                        }), [2, this.trackingDataCache.eventData]
                                }
                            })
                        })
                    }, this.processEvents = function(e) {
                        return i.__awaiter(t, void 0, void 0, function() {
                            var t, n, r, a, s, l, c;
                            return i.__generator(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        return t = this.getOrQueryEventData(), n = this.getOrQueryDeviceFingerprint(), [4, t];
                                    case 1:
                                        return r = u.sent(), [4, n];
                                    case 2:
                                        for (a = u.sent(), s = 0, l = e; s < l.length; s++)(c = l[s]).properties.login = r.currentUser.login, c.properties.logged_in = !!r.currentUser.id, c.properties.user_id = r.currentUser.id ? +r.currentUser.id : null, c.properties.device_fingerprint = a, c.event === o.SpadeEventType.Pageview ? (c.properties.is_turbo = r.currentUser.hasTurbo, c.properties.language = r.currentUser.language || navigator.language) : c.event === o.SpadeEventType.Subscription && (c.properties.has_prime = r.currentUser.hasPrime), h.has(c.event) && this.mixpanelEventQueue.push({
                                            event: c.event,
                                            properties: i.__assign({
                                                token: this.config.mixpanelToken
                                            }, c.properties)
                                        });
                                        return [2]
                                }
                            })
                        })
                    }, this.onWindowUnload = function() {
                        t.logger.debug("Unload triggered."), t.sendEvents(!0)
                    }, this.logger = e.logger.withCategory("spade"), this.transmitLogger = this.logger.withCategory("transmitter"), this.endpoint = e.endpoint, this.session = e.session, this.apollo = e.apollo, this.config = e.config, this.store = e.store, this.adBlockDetector = e.adBlockDetector, this.logger.debug("Creating instance.", {
                        endpoint: this.endpoint,
                        sessionID: this.session.benchmarkID
                    }), window.addEventListener("unload", this.onWindowUnload)
                }
                return e.prototype.setPlatform = function(e) {
                    this.trackingDataCache.platform = e
                }, e.prototype.reportFollowCTAVisibility = function(e) {
                    this.trackingDataCache.videoPlayerData.followCTAVisible = e
                }, e.prototype.setVideoPlayerTrackingData = function(e) {
                    this.trackingDataCache.videoPlayerData = i.__assign({}, this.trackingDataCache.videoPlayerData, e)
                }, e.prototype.track = function(e, t) {
                    return this.trackEvent(e, t)
                }, e.prototype.trackExperiment = function(e) {
                    return this.track(o.SpadeEventType.ExperimentBranch, e)
                }, e.prototype.trackPageview = function(e) {
                    void 0 === e && (e = {});
                    var t = this.store.getState(),
                        n = i.__assign({
                            browser: navigator.userAgent,
                            collapse_right: t.ui && !t.ui.rightColumnExpanded,
                            collapse_left: t.ui && !t.ui.sideNavExpanded,
                            localstorage_device_id: this.session.localStorageDeviceID,
                            location: e.location || o.PageviewLocation.None,
                            page_session_id: this.session.pageviewID,
                            referrer: this.lastLocationURL ? this.lastLocationURL.href : document.referrer,
                            referrer_domain: this.lastLocationURL ? this.lastLocationURL.hostname : this.getCurrentReferrerURL().hostname,
                            session_device_id: this.session.deviceID,
                            tab_session_id: this.session.tabID,
                            viewport_height: window.innerHeight,
                            viewport_width: window.innerWidth
                        }, e);
                    this.track(o.SpadeEventType.Pageview, n), this.trackingDataCache.lastPageView = n, this.eventEmitter.emit(o.SpadeEventType.Pageview), this.lastLocationURL = new URL(location.href)
                }, e.prototype.trackBenchmark = function(e, t) {
                    this.track(e, i.__assign({
                        benchmark_session_id: this.session.benchmarkID,
                        page_session_id: this.session.pageviewID
                    }, t))
                }, e.prototype.trackApiQueryBenchmark = function(e) {
                    this.track(o.SpadeEventType.APIQuery, i.__assign({
                        benchmark_session_id: this.session.benchmarkID,
                        page_session_id: this.session.pageviewID
                    }, e))
                }, e.prototype.trackCustomEventBenchmark = function(e) {
                    this.track(o.SpadeEventType.CustomEvent, i.__assign({
                        benchmark_session_id: this.session.benchmarkID,
                        page_session_id: this.session.pageviewID
                    }, e))
                }, e.prototype.trackItemSectionLoad = function(e) {
                    this.track(o.SpadeEventType.ItemSectionLoad, function(e) {
                        return i.__assign({}, e, {
                            rendered_item_list: e.rendered_item_list.join(","),
                            rendered_item_types: e.rendered_item_types.join(","),
                            rendered_items_viewcounts: e.rendered_items_viewcounts.join(",")
                        })
                    }(e))
                }, e.prototype.trackItemSectionClick = function(e) {
                    this.track(o.SpadeEventType.ItemSectionClick, e)
                }, e.prototype.trackEvent = function(e, t) {
                    this.hasCheckedInitialReferrer || this.setSpadeReferrerURL();
                    var n = {
                        event: e,
                        properties: i.__assign({
                            adblock: this.adBlockDetector.detect,
                            app_version: this.config.buildID,
                            client_app: "twilight",
                            device_id: this.session.deviceID,
                            domain: window.document.domain,
                            host: window.location.host,
                            platform: this.trackingDataCache.platform,
                            preferred_language: Object(l.b)({
                                includeChosenLanguage: !1
                            })[0],
                            referrer_host: this.lastLocationURL ? this.lastLocationURL.host : this.getCurrentReferrerURL().host,
                            referrer_url: this.referrerURL || "",
                            received_language: Object(l.a)() || "en",
                            tab_session_id: this.session.tabID,
                            batch_time: Math.round((new Date).getTime() / 1e3),
                            url: window.location.href
                        }, t)
                    };
                    this.logger.debug("Tracking event", n), this.eventQueue.push(n), this.scheduleEvents()
                }, e.prototype.sendEvents = function(e) {
                    return void 0 === e && (e = !1), i.__awaiter(this, void 0, void 0, function() {
                        var t, n, r, a, o;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return 0 === this.eventQueue.length ? [2] : [4, this.processEvents(this.eventQueue)];
                                case 1:
                                    return i.sent(), this.sendMixpanelEvents(e), t = this.eventQueue, this.eventQueue = [], Date.now() < this.squelchUntil ? (this.logger.debug("Skipped Spade transmission. Client event tracking is squelched due to failure to sumbit to Spade service."), [2]) : (n = new Blob([Object(s.a)(t)], {
                                        type: "application/x-www-form-urlencoded; charset=UTF-8"
                                    }), e && navigator.sendBeacon ? (navigator.sendBeacon(this.endpoint, n) ? this.transmitLogger.debug("Events sent using beacon.", {
                                        size: n.size,
                                        transmitBatch: t
                                    }) : this.transmitLogger.warn("Events failed to send using beacon.", {
                                        size: n.size,
                                        transmitBatch: t
                                    }), [3, 8]) : [3, 2]);
                                case 2:
                                    r = 1, i.label = 3;
                                case 3:
                                    if (!(r <= 3)) return [3, 8];
                                    i.label = 4;
                                case 4:
                                    return i.trys.push([4, 6, , 7]), [4, fetch(this.endpoint, {
                                        method: "POST",
                                        body: n
                                    })];
                                case 5:
                                    return i.sent(), this.firstBatchSubmitted || (this.firstBatchSubmitted = !0, (a = document.getElementById("root")) && a.setAttribute("data-a-page-events-submitted", Date.now().toString())), this.transmitLogger.debug("Events sent using fetch.", {
                                        size: n.size,
                                        transmitBatch: t
                                    }), [2];
                                case 6:
                                    return o = i.sent(), r < 3 ? this.transmitLogger.warn("Events send attempt failed with fetch.", {
                                        attempt: r,
                                        size: n.size,
                                        transmitBatch: t
                                    }, o) : (this.squelchUntil = Date.now() + 6e4, this.transmitLogger.error(o, "Events failed to send using fetch. Maximum attemps tried, so events will be discarded, and further tracking will be temporarily squelched.", {
                                        attempt: r,
                                        size: n.size,
                                        maxAttempts: 3,
                                        squelch: this.squelchUntil,
                                        squelchDuration: 6e4
                                    })), [3, 7];
                                case 7:
                                    return ++r, [3, 3];
                                case 8:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.scheduleEvents = function() {
                    var e = this;
                    this.eventQueueTimeout || (this.eventQueueTimeout = setTimeout(function() {
                        try {
                            if (!e.store.getState().session.firstPageLoaded) return e.eventQueueTimeout = 0, void e.scheduleEvents();
                            e.sendEvents()
                        } catch (t) {
                            e.transmitLogger.error(t, "Failed to send events.")
                        }
                        e.eventQueueTimeout = 0
                    }, this.config.spadeBatchWindow))
                }, e.prototype.sendMixpanelEvents = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n, r, a;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return 0 === this.mixpanelEventQueue.length ? [2] : (t = this.mixpanelEventQueue, this.mixpanelEventQueue = [], Date.now() < this.squelchUntil ? (this.logger.debug("Skipped Mixpanel transmission. Client event tracking is squelched due to failure to submit to Spade service."), [2]) : (n = new Blob([Object(s.a)(t)], {
                                        type: "application/x-www-form-urlencoded; charset=UTF-8"
                                    }), e && navigator.sendBeacon ? (navigator.sendBeacon(this.endpoint, n) ? this.transmitLogger.debug("Mixpanel events sent using beacon.", {
                                        size: n.size,
                                        transmitBatch: t
                                    }) : this.transmitLogger.warn("Mixpanel events failed to send using beacon.", {
                                        size: n.size,
                                        transmitBatch: t
                                    }), [3, 7]) : [3, 1]));
                                case 1:
                                    r = 1, i.label = 2;
                                case 2:
                                    if (!(r <= 3)) return [3, 7];
                                    i.label = 3;
                                case 3:
                                    return i.trys.push([3, 5, , 6]), [4, fetch("https://api.mixpanel.com/track", {
                                        method: "POST",
                                        body: n
                                    })];
                                case 4:
                                    return i.sent(), this.transmitLogger.debug("Mixpanel events sent using fetch.", {
                                        size: n.size,
                                        transmitBatch: t
                                    }), [2];
                                case 5:
                                    return a = i.sent(), r < 3 ? this.transmitLogger.warn("Mixpanel events send attempt failed with fetch.", {
                                        attempt: r,
                                        size: n.size,
                                        transmitBatch: t
                                    }, a) : this.transmitLogger.error(a, "Mixpanel events failed to send using fetch. Maximum attemps tried, so events will be discarded.", {
                                        attempt: r,
                                        size: n.size,
                                        maxAttempts: 3
                                    }), [3, 6];
                                case 6:
                                    return ++r, [3, 2];
                                case 7:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.isLoggedIn = function(e) {
                    return !(!e.session || !e.session.user)
                }, e.prototype.getCurrentReferrerURL = function() {
                    return document.referrer.length ? new URL(document.referrer) : {
                        host: "",
                        hostname: "",
                        href: ""
                    }
                }, e.prototype.setSpadeReferrerURL = function() {
                    var e;
                    try {
                        e = new URL(document.referrer)
                    } catch (e) {}
                    e && "go.twitch.tv" !== e.hostname && "www.twitch.tv" !== e.hostname && (this.referrerURL = e.href), this.hasCheckedInitialReferrer = !0
                }, e
            }()
    },
    UrOd: function(e, t) {},
    "V5M+": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), t.d = function(e, t) {
            return {
                type: i,
                modalComponent: e,
                modalProps: t
            }
        }, n.d(t, "a", function() {
            return r
        }), t.c = function() {
            return {
                type: r
            }
        };
        var i = "core.modal.MODAL_SHOWN",
            r = "core.ui.MODAL_CLOSED"
    },
    VAT8: function(e, t, n) {
        "use strict";

        function i(e) {
            switch (e) {
                case a.a.Dark:
                    return "tw-theme--dark";
                default:
                    return ""
            }
        }
        t.b = function() {
            return r.k.get(o, function() {
                var e = r.k.get(s, {
                    activeTheme: ""
                });
                return e && "theme--dark" === e.activeTheme ? a.a.Dark : a.a.Light
            }())
        }, t.d = function(e) {
            r.k.set(o, e)
        }, t.c = i, t.a = function(e) {
            return e === a.a.Light ? "tw-theme--light" : i(e)
        };
        var r = n("6sO2"),
            a = n("NXs7"),
            o = "twilight.theme",
            s = "storage:theme"
    },
    WZjW: function(e, t) {},
    WjKA: function(e, t) {},
    WtTG: function(e, t) {},
    YmWy: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return c
        });
        var i = n("TToO"),
            r = n("U7vG"),
            a = (n.n(r), n("6sO2")),
            o = n("ZyA2"),
            s = n("Odds"),
            l = n("kNqx"),
            c = (n.n(l), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.handleHistoryChange = function() {
                        t.handleClose()
                    }, t.handleGlobalKeypress = function(e) {
                        t.props.ignoreEscKey || 27 !== e.which || t.handleClose()
                    }, t.handleGlobalClick = function(e) {
                        var n = e.target;
                        t.props.closeOnBackdropClick && n.matches("." + o.b) && t.handleClose()
                    }, t.handleClose = function() {
                        t.props.onClose()
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.ignoreEscKey || document.addEventListener("keydown", this.handleGlobalKeypress), this.props.closeOnBackdropClick && document.addEventListener("click", this.handleGlobalClick), this.props.closeOnPageNavigation && (this.historyUnlisten = a.n.history.listen(this.handleHistoryChange))
                }, t.prototype.componentWillUnmount = function() {
                    document.removeEventListener("keydown", this.handleGlobalKeypress), document.removeEventListener("click", this.handleGlobalKeypress), this.historyUnlisten && this.historyUnlisten()
                }, t.prototype.render = function() {
                    return r.createElement("div", {
                        className: "modal__close-button"
                    }, r.createElement(s.v, {
                        overlay: !0,
                        onClick: this.handleClose,
                        ariaLabel: Object(a.d)("Close modal", "ModalCloser"),
                        icon: s._16.Close,
                        "data-a-target": "modalClose"
                    }))
                }, t
            }(r.PureComponent))
    },
    ZVME: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "c", function() {
            return r
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "d", function() {
            return o
        });
        var i;
        ! function(e) {
            e.Chat = "Chat", e.OnsiteNotifications = "Onsite Notifications", e.Page = "page", e.Passport = "Passport", e.Player = "Player", e.Search = "Search", e.TwitchPrime = "Twitch Prime", e.ViewersList = "Viewers List", e.Whispers = "Whispers"
        }(i || (i = {}));
        var r;
        ! function(e) {
            e.Connected = "Connected", e.Created = "Created", e.FirstFrame = "First Frame", e.FirstPageLoaded = "Initial results loaded", e.FirstPaint = "First Paint", e.History = "History", e.Init = "Init", e.LaterPageLoaded = "More results loaded", e.Loaded = "Loaded", e.RenderSent = "Render Sent", e.Updated = "Updated"
        }(r || (r = {}));
        var a;
        ! function(e) {
            e.ChatConnected = "chat-connected", e.ChatInit = "chat-init", e.ChatRenderSent = "chat-render-sent-message", e.FirstPaint = "first-cue", e.OnsiteNotificationsLoaded = "onsite-notifications-loaded", e.PassportLoginLoaded = "passport-login-loaded", e.PassportSignUpLoaded = "passport-sign-up-loaded", e.PlayerCreated = "player-created", e.PlayerPlayed = "player-played", e.PlayerLoaded = "player-loaded", e.PrimeOfferLoaded = "prime-offer-loaded", e.SearchResultsFirstPage = "search-results-first-page", e.SearchResultsLaterPage = "search-results-later-page", e.ViewersListUpdated = "viewers-list-updated", e.WhispersHistory = "whispers-history", e.WhispersRenderSent = "whispers-render-sent"
        }(a || (a = {}));
        var o;
        ! function(e) {
            e[e.NavigationStart = 1] = "NavigationStart", e[e.Registration = 2] = "Registration"
        }(o || (o = {}))
    },
    ZaD5: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "d", function() {
            return r
        }), n.d(t, "b", function() {
            return a
        }), n.d(t, "c", function() {
            return o
        }), t.e = function(e) {
            return {
                type: i,
                user: e || void 0
            }
        }, t.h = function(e, t) {
            return {
                type: r,
                languageCode: e,
                locale: t
            }
        }, t.f = function() {
            return {
                type: a
            }
        }, t.g = function() {
            return {
                type: o
            }
        };
        var i = "core.session.AUTH_INITIALIZED",
            r = "core.session.LANGUAGE_INITIALIZED",
            a = "core.session.FIRST_PAGE_LOADED",
            o = "core.session.INITIAL_AVAILABILITY_SET"
    },
    ZyA2: function(e, t, n) {
        "use strict";
        var i = n("RH2O"),
            r = n("Iw4B"),
            a = n("0nzt"),
            o = n("TToO"),
            s = n("U7vG"),
            l = n("sW0/"),
            c = n("VAT8"),
            h = (n("kCP2"), "js-modal-backdrop"),
            u = Object(i.b)(function(e) {
                return {
                    showModal: e.modal.show,
                    component: e.modal.modalID ? Object(r.a)(e) : null,
                    componentProps: e.modal.modalProps,
                    theme: Object(a.a)(e)
                }
            })(function(e) {
                return s.createElement(l, {
                    isOpen: e.showModal,
                    contentLabel: "Modal",
                    className: "modal__content",
                    overlayClassName: "modal__backdrop " + h + " " + Object(c.c)(e.theme),
                    shouldCloseOnOverlayClick: !1
                }, e.component && s.createElement(e.component, o.__assign({}, e.componentProps)))
            });
        n.d(t, "a", function() {
            return u
        }), n.d(t, "b", function() {
            return h
        })
    },
    "a/ze": function(e, t) {},
    aiwk: function(e, t) {},
    bB4F: function(e, t) {},
    bZTi: function(e, t, n) {
        "use strict";
        var i = n("TToO"),
            r = n("U7vG"),
            a = n("6sO2"),
            o = n("yWCw"),
            s = n("Odds"),
            l = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        showLoader: !1,
                        error: !1
                    }, n
                }
                return i.__extends(t, e), t.wrap = function(e, n, i) {
                    return function(a) {
                        return r.createElement(t, {
                            loader: e,
                            component: n,
                            componentProps: a,
                            failSilently: !(!i || !i.failSilently),
                            onRendered: i && i.onRendered
                        })
                    }
                }, t.prototype.componentDidUpdate = function(e, t) {
                    !t.Component && this.state.Component && this.props.onRendered && this.props.onRendered()
                }, t.prototype.componentDidMount = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e, t, n;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 2, , 3]), [4, this.props.loader()];
                                case 1:
                                    return e = i.sent(), (t = e[this.props.component]) || a.i.fatal(new Error("Component not found."), "Component not found.", {
                                        component: this.props.component
                                    }), this.setState({
                                        Component: t,
                                        showLoader: !1,
                                        error: !t
                                    }), [3, 3];
                                case 2:
                                    return n = i.sent(), a.i.fatal(n, "Error loading module.", {
                                        component: this.props.component
                                    }), this.setState({
                                        Component: void 0,
                                        showLoader: !1,
                                        error: !0
                                    }), [3, 3];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return this.state.Component ? r.createElement(this.state.Component, i.__assign({}, this.props.componentProps)) : this.state.error ? this.props.failSilently ? null : r.createElement(o.a, {
                        message: Object(a.d)("Failed to load module.", "Loadable")
                    }) : r.createElement(s._4, {
                        fillContent: !0
                    })
                }, t
            }(r.Component);
        n.d(t, "a", function() {
            return l
        })
    },
    bejq: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return h
        }), t.e = function() {
            for (var e = 0, t = c; e < t.length; e++) {
                var n = t[e];
                r.remove(n, d)
            }
        }, t.h = function(e) {
            var t = {
                authToken: e.authToken,
                displayName: e.displayName,
                id: e.id,
                login: e.login,
                roles: e.roles,
                version: h
            };
            r.set(l, JSON.stringify(t), d)
        }, t.d = function(e) {
            var t = r.get(l);
            if (t) try {
                var n = JSON.parse(t);
                if (e.debug("Found user cookie.", n), !n.authToken || "string" != typeof n.authToken) throw new Error('Missing or invalid "authToken" value stored in user cookie.');
                if (!n.displayName || "string" != typeof n.displayName) throw new Error('Missing or invalid "displayName" value stored in user cookie.');
                if (!n.id) throw new Error('Missing "id" value in user cookie.');
                if ("number" == typeof n.id) e.debug('Converting numerical user cookie "id" value to string.'), n.id = String(n.id);
                else if ("string" != typeof n.id) throw new Error('Invalid "id" value stored in user cookie.');
                if (!n.login || "string" != typeof n.login) throw new Error('Missing or invalid "login" value stored in user cookie.');
                if (n.version) {
                    if ("number" != typeof n.version) throw new Error('Invalid "version" value stored in user cookie.')
                } else e.debug("Unversioned user cookie, using default."), n.version = 1;
                return e.debug("Successfully loaded user data.", n), n
            } catch (n) {
                e.error(n, "Failed to load data from user cookie.", {
                    data: t
                }), r.remove(l)
            }
        }, t.b = function() {
            return r.get(s)
        }, t.c = function(e) {
            var t = r.get(o);
            if (t) try {
                return JSON.parse(t)
            } catch (n) {
                e.withCategory("auth").error(n, "Failed to load login state from cookie.", {
                    state: t
                }), r.remove(o)
            }
        }, t.g = function(e) {
            r.set(o, JSON.stringify(e), u)
        }, t.f = function() {
            r.remove(o, u)
        };
        var i = n("TToO"),
            r = n("lbHh"),
            a = (n.n(r), n("o/qv")),
            o = "twilight-login-state",
            s = "api_token",
            l = "twilight-user",
            c = [o, l, "persistent", s, "_twitch_session_id", "login", "name", "twilight-auth"],
            h = 2,
            u = {
                domain: Object(a.a)(),
                secure: "https:" === window.location.protocol
            },
            d = i.__assign({}, u, {
                expires: 365
            })
    },
    cFXH: function(e, t) {},
    cx1p: function(e, t) {},
    "f2i/": function(e, t, n) {
        "use strict";

        function i() {
            return function(e) {
                l.n.apollo.authToken = null, e(Object(x.e)(null))
            }
        }

        function r(e, t) {
            return s.__awaiter(this, void 0, void 0, function() {
                var n, i, r, a, o, c, h, u, d, p, m, g;
                return s.__generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return s.trys.push([0, 8, , 9]), t.debug("Getting OAuth client ID for token."), [4, fetch(l.a.apiBaseURL + "/kraken", {
                                method: "GET",
                                headers: {
                                    authorization: "OAuth " + e
                                }
                            })];
                        case 1:
                            return 200 === (n = s.sent()).status ? [3, 3] : (r = (i = t).warn, a = ["Got a " + n.status + " status response while getting OAuth client ID."], o = {}, [4, n.text()]);
                        case 2:
                            throw r.apply(i, a.concat([(o.body = s.sent(), o.status = n.status, o)])), new Error("Failed to get OAuth client ID: " + n.status + " status response.");
                        case 3:
                            return [4, n.json()];
                        case 4:
                            return (c = s.sent()) && c.token && c.token.client_id ? [3, 6] : (u = (h = t).warn, d = ["Received a malformed response while getting OAuth client ID."], p = {}, [4, n.text()]);
                        case 5:
                            throw u.apply(h, d.concat([(p.body = s.sent(), p)])), new Error("Failed to get OAuth client ID: Malformed response.");
                        case 6:
                            return t.debug("Revoking OAuth token.", {
                                clientID: c.token.client_id
                            }), (m = new FormData).append("client_id", c.token.client_id), m.append("token", e), [4, fetch(l.a.apiBaseURL + "/kraken/oauth2/revoke", {
                                body: m,
                                method: "POST",
                                mode: "no-cors"
                            })];
                        case 7:
                            return s.sent(), [3, 9];
                        case 8:
                            return g = s.sent(), t.error(g, "Failed to revoke OAuth token."), [3, 9];
                        case 9:
                            return [2]
                    }
                })
            })
        }

        function a(e, t) {
            return s.__awaiter(this, void 0, void 0, function() {
                var n, i, r, a;
                return s.__generator(this, function(o) {
                    switch (o.label) {
                        case 0:
                            t.debug("Getting user data from legacy API.", {
                                legacyCSRFToken: e
                            }), o.label = 1;
                        case 1:
                            return o.trys.push([1, 4, , 5]), [4, fetch("https://api.twitch.tv/api/me?on_site=1", {
                                method: "GET",
                                headers: {
                                    "client-id": l.a.authClientID,
                                    "twitch-api-token": e
                                },
                                credentials: "include"
                            })];
                        case 2:
                            return n = o.sent(), [4, n.json()];
                        case 3:
                            return i = o.sent(), 200 !== n.status || i.error ? (t.error(new Error("Error getting user data from legacy API."), "Error getting user data from legacy API.", {
                                body: i,
                                legacyCSRFToken: e,
                                status: n.status
                            }), [2]) : (r = {
                                authToken: i.chat_oauth_token,
                                displayName: i.name,
                                id: i.id.toString(),
                                legacyCSRFToken: e,
                                login: i.login,
                                roles: {
                                    isStaff: i.is_staff
                                }
                            }, [2, r]);
                        case 4:
                            return a = o.sent(), t.error(a, "Error getting user data from legacy API.", {
                                legacyCSRFToken: e
                            }), [3, 5];
                        case 5:
                            return [2]
                    }
                })
            })
        }
        var o, s = n("TToO"),
            l = n("6sO2"),
            c = n("lbHh"),
            h = n("U7vG"),
            u = n("+8VM"),
            d = n("yWCw");
        ! function(e) {
            e.Login = "login", e.Signup = "signup"
        }(o || (o = {}));
        var p;
        ! function(e) {
            e.Height = "height", e.Loaded = "loaded", e.KrakenCallback = "krakenCallback", e.PassportCallback = "passportCallback", e.Heartbeat = "heartbeat"
        }(p || (p = {}));
        var m = n("HM6l"),
            g = n("yDzg"),
            f = n("bejq"),
            v = n("+xm8"),
            w = n("vH/s"),
            b = n("ZVME"),
            y = n("o/qv"),
            _ = n("CSlQ"),
            E = n("Odds"),
            C = (n("lw07"), 5e3),
            k = "passport_requested",
            L = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.frameLoadStart = 0, n.lastHeartbeart = 0, n.heartBeatCheckInterval = 0, n.logger = l.n.logger.withCategory("passport-modal"), n.nonce = Object(v.b)(), n.passportHosts = l.b.get("passport_hosts", []), n.handleMessage = function(e) {
                        if (n.logger.debug("Received a Passport frame message", e), window && document && n.passportHosts.includes(e.origin) && e.data) {
                            var t = {
                                messageType: null
                            };
                            if ("string" == typeof e.data && e.data.startsWith("{")) try {
                                t = JSON.parse(e.data)
                            } catch (e) {
                                return void n.logger.warn("Unable to parse Passport IFrame message", e)
                            } else {
                                if ("object" != typeof e.data) return void n.logger.warn("The Passport IFrame message was not a string or an object");
                                t = e.data
                            }
                            if (t.messageType) switch (t.messageType) {
                                case p.Loaded:
                                    return n.frameRef ? void n.frameRef.contentWindow.postMessage(JSON.stringify({
                                        width: "100%"
                                    }), "*") : (n.logger.error(new Error("Passport IFrame Ref Missing"), "Received a loaded message from Passport but had no ref to the IFrame"), void n.setState({
                                        hasError: !0
                                    }));
                                case p.Height:
                                    var i = t;
                                    return i.height ? void n.setState({
                                        height: i.height
                                    }) : (n.logger.error(new Error("Invalid Passport Height Message"), "The Passport IFrame height message type had an invalid height"), void n.setState({
                                        hasError: !0
                                    }));
                                case p.KrakenCallback:
                                case p.PassportCallback:
                                    var r = t;
                                    return r.redirectURI ? void window.location.assign(r.redirectURI) : (n.setState({
                                        hasError: !0
                                    }), void n.logger.error(new Error("Invalid Passport Redirect Message"), "The Passport IFrame redirect message type had an invalid redirectURI"));
                                case p.Heartbeat:
                                    return void(n.lastHeartbeart = Date.now());
                                default:
                                    return
                            } else n.logger.warn("The Passport IFrame message did not have a messageType")
                        }
                    }, n.onClickTryAgain = function() {
                        n.setState({
                            isLoading: !0,
                            hasError: !1,
                            height: 0
                        }, function() {
                            return n.frameLoadStart = Date.now()
                        })
                    }, n.onFrameError = function() {
                        n.logger.error(new Error("Unable to load Passport IFrame"), "The IFrame called its onError handler."), n.state.hasError || n.setState({
                            hasError: !0,
                            isLoading: !1
                        })
                    }, n.onFrameLoad = function() {
                        n.state.isLoading && n.setState({
                            isLoading: !1
                        }, function() {
                            n.passportLoadedLatencyEvent && n.props.latencyTracking.reportCustomEvent(n.passportLoadedLatencyEvent);
                            var e = Date.now() - n.frameLoadStart;
                            e > C && n.logger.warn("The Passport IFrame took a long time to load.", {
                                duration: e
                            })
                        })
                    }, n.renderContent = function() {
                        if (n.state.hasError) {
                            var e = Object(l.d)("Try Again", "PassportModal");
                            return h.createElement(E._2, {
                                fullHeight: !0,
                                flexDirection: E.P.Column,
                                display: E.N.Flex,
                                alignItems: E.c.Center,
                                justifyContent: E._1.Center
                            }, h.createElement(d.a, {
                                inline: !0,
                                key: "error",
                                message: Object(l.d)("Something went wrong", "PassportModal")
                            }), h.createElement(E.u, {
                                key: "try-again",
                                ariaLabel: e,
                                onClick: n.onClickTryAgain
                            }, e))
                        }
                        return h.createElement("iframe", {
                            height: n.state.height,
                            ref: n.setFrameRef,
                            onLoad: n.onFrameLoad,
                            onError: n.onFrameError,
                            scrolling: "no",
                            src: n.state.url,
                            width: "100%",
                            name: "passport"
                        })
                    }, n.registerCustomLatencyEvents = function() {
                        n.resetCustomLatencyEvents();
                        var e = n.props.initialTab === o.Login ? b.b.PassportLoginLoaded : b.b.PassportSignUpLoaded;
                        n.passportLoadedLatencyEvent = n.props.latencyTracking.registerCustomEvent({
                            benchmark: 1e3,
                            group: b.a.Passport,
                            label: b.c.Loaded,
                            start: b.d.Registration,
                            key: e
                        })
                    }, n.resetCustomLatencyEvents = function() {
                        n.props.latencyTracking.resetCustomEvents(b.a.Passport)
                    }, n.setFrameRef = function(e) {
                        return n.frameRef = e
                    }, n.state = {
                        height: 0,
                        hasError: !1,
                        isLoading: !0,
                        url: function(e) {
                            var t = {
                                    next: window.location.href,
                                    nonce: Object(m.b)()
                                },
                                n = {
                                    client_id: l.a.authClientID,
                                    embed: "true",
                                    force_login: "true",
                                    lang: l.n.intl.getLanguageCode() || "en",
                                    login_type: e,
                                    redirect_uri: l.a.passportRedirectURI,
                                    response_type: "token",
                                    scope: l.a.passportScopes.join(" "),
                                    state: JSON.stringify(t)
                                };
                            return Object(f.g)(t), Object(g.a)(l.a.passportAuthURL, n)
                        }(n.props.initialTab)
                    }, c.set(k, n.nonce, {
                        domain: Object(y.a)(),
                        secure: "https:" === window.location.protocol
                    }), n
                }
                return s.__extends(t, e), t.prototype.componentWillMount = function() {
                    window.addEventListener("message", this.handleMessage), this.registerCustomLatencyEvents()
                }, t.prototype.componentDidMount = function() {
                    var e = this;
                    this.frameLoadStart = Date.now(), this.heartBeatCheckInterval = setInterval(function() {
                        e.lastHeartbeart && Date.now() - e.lastHeartbeart > 15e3 && (e.logger.error(new Error("Passport Heartbeat Timeout"), "Client did not receive a Passport heartbeat within the timeout.", {
                            heartbeatTimeout: 15e3
                        }), clearInterval(e.heartBeatCheckInterval))
                    }, 1e3), Object(v.c)(w.SpadeEventType.PassportShow, {
                        action: this.props.action,
                        nonce: this.nonce,
                        type: this.props.initialTab
                    })
                }, t.prototype.componentWillUnmount = function() {
                    window.removeEventListener("message", this.handleMessage), clearInterval(this.heartBeatCheckInterval), Object(v.c)(w.SpadeEventType.PassportHide, {
                        action: this.props.action,
                        nonce: this.nonce,
                        type: this.props.initialTab
                    }), this.resetCustomLatencyEvents()
                }, t.prototype.render = function() {
                    return h.createElement(E._2, {
                        padding: {
                            top: 4,
                            bottom: 2,
                            x: 2
                        },
                        className: "passport-modal",
                        position: E._9.Relative
                    }, this.renderContent(), this.state.isLoading && !this.state.hasError && h.createElement(E._25, {
                        background: E.m.Base,
                        position: E._9.Absolute,
                        attachBottom: !0,
                        attachLeft: !0,
                        attachRight: !0,
                        attachTop: !0
                    }, h.createElement(E._4, {
                        fillContent: !0
                    })), h.createElement(u.a, {
                        closeOnBackdropClick: !0
                    }))
                }, t
            }(h.Component),
            S = Object(_.d)("PassportModal", {
                autoReportInteractive: !0
            })(L),
            T = n("V5M+"),
            x = n("ZaD5"),
            N = n("Aj/L"),
            z = n("FuaS"),
            R = n("POVT");
        t.f = function(e) {
            return Object(T.d)(S, {
                action: e,
                initialTab: o.Login
            })
        }, t.h = function(e) {
            return Object(T.d)(S, {
                action: e,
                initialTab: o.Signup
            })
        }, t.g = function() {
            var e = this;
            return function(t, n) {
                return s.__awaiter(e, void 0, void 0, function() {
                    var e, t, i, o, c, h, u, d;
                    return s.__generator(this, function(s) {
                        switch (s.label) {
                            case 0:
                                if (e = l.n.logger.withCategory("auth.logout"), t = n(), !(i = Object(N.a)(t))) return e.warn("Attempted to log out without being logged in."), [2];
                                if (o = Object(N.b)(t)) return [3, 4];
                                s.label = 1;
                            case 1:
                                return s.trys.push([1, 3, , 4]), e.debug("No legacy CSRF token found, making blank request to get one."), [4, fetch("https://passport.twitch.tv/logout/new", {
                                    credentials: "include",
                                    method: "POST",
                                    mode: "no-cors"
                                })];
                            case 2:
                                return s.sent(), o = Object(f.b)(), [3, 4];
                            case 3:
                                return c = s.sent(), e.warn("Failed to acquire legacy CSRF token.", {
                                    err: c
                                }), [3, 4];
                            case 4:
                                return o ? [4, a(o, e)] : [3, 11];
                            case 5:
                                return (h = s.sent()) && h.authToken !== i ? [4, r(h.authToken, e)] : [3, 7];
                            case 6:
                                s.sent(), s.label = 7;
                            case 7:
                                return s.trys.push([7, 9, , 10]), e.debug("Invalidating passport session."), (u = new FormData).append("api_token", o), [4, fetch("https://passport.twitch.tv/logout/new", {
                                    body: u,
                                    credentials: "include",
                                    method: "POST",
                                    mode: "no-cors"
                                })];
                            case 8:
                                return s.sent(), [3, 10];
                            case 9:
                                return d = s.sent(), e.error(d, "Failed to invalidate passport session."), [3, 10];
                            case 10:
                                return [3, 12];
                            case 11:
                                e.debug("Skipping legacy OAuth token revocation and passport session invalidation: No legacy CSRF token found."), s.label = 12;
                            case 12:
                                return [4, r(i, e)];
                            case 13:
                                return s.sent(), e.debug("Clearing auth cookies and reloading."), Object(f.e)(), window.location.reload(), [2]
                        }
                    })
                })
            }
        }, t.a = i, t.d = function(e) {
            return function(t) {
                l.n.apollo.authToken = e.authToken, t(Object(x.e)(e))
            }
        }, t.c = function(e, t, n) {
            var r = this;
            return void 0 === n && (n = !0),
                function(a) {
                    return s.__awaiter(r, void 0, void 0, function() {
                        var r, o, c, h;
                        return s.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    (r = l.n.logger.withCategory("auth.init.token")).debug("Getting user data from GraphQL."), l.n.apollo.authToken = e, s.label = 1;
                                case 1:
                                    return s.trys.push([1, 3, , 4]), [4, l.n.apollo.client.query({
                                        fetchPolicy: "network-only",
                                        query: R
                                    })];
                                case 2:
                                    return (o = s.sent()).data.currentUser ? (c = {
                                        authToken: e,
                                        displayName: o.data.currentUser.displayName,
                                        id: o.data.currentUser.id,
                                        legacyCSRFToken: t,
                                        login: o.data.currentUser.login,
                                        roles: {
                                            isStaff: !!o.data.currentUser.roles && o.data.currentUser.roles.isStaff
                                        }
                                    }, n && Object(f.h)(c), a(Object(x.e)(c)), [3, 4]) : (r.error(new Error("Failed to get user data from GraphQL, but there was no client error."), "Failed to get user data from GraphQL, but there was no client error."), a(i()), [2]);
                                case 3:
                                    return h = s.sent(), r.error(h, "Failed to get user data from GraphQL."), a(i()), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }
        }, t.b = function(e) {
            var t = this;
            return function(n) {
                return s.__awaiter(t, void 0, void 0, function() {
                    var t;
                    return s.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, a(e, l.n.logger.withCategory("auth.init.legacy"))];
                            case 1:
                                return (t = r.sent()) ? (l.n.apollo.authToken = t.authToken, Object(f.h)(t), n(Object(x.e)(t))) : n(i()), [2]
                        }
                    })
                })
            }
        }, t.e = function(e) {
            var t = this;
            return function(n) {
                return s.__awaiter(t, void 0, void 0, function() {
                    var t, i;
                    return s.__generator(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, l.n.intl.loadLocale(e ? [e].concat(Object(z.b)({
                                    includeChosenLanguage: !1
                                })) : Object(z.b)())];
                            case 1:
                                return r.sent(), t = l.n.intl.getLanguageCode() || "en", (i = l.a.locales.find(function(e) {
                                    return e.languageCode === t
                                })) || (l.n.logger.warn("Tried to use invalid language code, using default.", t), i = l.a.locales.find(function(e) {
                                    return !!e.default
                                })), n(Object(x.h)(i.languageCode, i.locale)), [2]
                        }
                    })
                })
            }
        }
    },
    iYrx: function(e, t) {},
    kCP2: function(e, t) {},
    kDWL: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.AchievementSpotlightImpression = "achievement_spotlight_impression", e.AchievementQuestBannerClick = "achievement_quest_banner_click", e.APIQuery = "benchmark_api_query", e.AppBooted = "benchmark_app_booted", e.ArchiveDownload = "archive_download", e.AutoHostChannelUpdate = "autohost_channel_update", e.AutohostChatImpression = "autohost_chat_impression", e.AutohostChatYes = "autohost_chat_yes", e.AutohostChatDismiss = "autohost_chat_dismiss", e.AutohostChatSettings = "autohost_chat_settings", e.AutoHostToggle = "autohost_toggle", e.BitsAdsAvailability = "bits_ads_availability", e.BitsAdsImpression = "bits_ads_impression", e.BitsAdsRequest = "bits_ads_request", e.BitsCardInteraction = "bits_card_interaction", e.BrowseForYou = "browse_for_you", e.BrowserFingerprint = "browser_fingerprint", e.BrowserPushNotificationPrompt = "browser_notification_prompt", e.BrowserPushNotificationDisable = "browser_notification_disable", e.BTTV = "bttv_check", e.Chat = "chat", e.ChatBadgeClick = "chat_badge_click", e.ChatMentionUsed = "chat_mention_used", e.ChatRoomJoined = "chat_room_join", e.ChatRoomWatched = "chatroom-watched", e.ChatSettingsChanged = "chat_client_setting_changed", e.ChatSettingsOpened = "chat_client_settings_open", e.ChatSuggestion = "chat-suggestions", e.ChatSuggestionComplete = "chat-completed-suggestion", e.ChommentCreated = "chomment_create", e.ChommentDeleted = "chomment_delete", e.ChommentUIAction = "chomment_ui_action", e.ClipEdit = "clip_edit", e.ClipChampHelpClick = "clip_champ_help_click", e.CollectionCreate = "collection_create", e.CollectionAddItem = "collection_add_item", e.CollectionRemoveItem = "collection_remove_item", e.CommunityEdit = "community_client_edit", e.CommunityFollow = "community_client_follow", e.CommunityModeration = "community_client_channel_moderation", e.CommunityReport = "community_client_report", e.CommunityUnfollow = "community_client_unfollow", e.CompleteTransition = "benchmark_complete_transition", e.ComponentInitializing = "benchmark_component_initializing", e.ComponentInteractive = "benchmark_component_interactive", e.CustomEvent = "benchmark_custom_event", e.CrateNotificationAction = "crate_notification_action", e.DeprioritizeVodcastToggle = "autohost_deprioritize_vodcast_toggle", e.EventFollowing = "oracle_user_notification_client", e.EventShare = "oracle_event_share", e.ExperimentBranch = "experiment_branch", e.FeaturedEventPresentation = "event_suggestions_shown", e.FeedCardImpression = "feed_client_card_impression", e.FeedCardEmbedImpression = "feed_client_card_embed_impression", e.FeedCardEmbedPlay = "feed_client_card_embed_play", e.FeedPost = "feed_client_post", e.FeedReaction = "feed_client_reaction", e.FetchStart = "benchmark_fetch_start", e.FFZ = "ffz_check", e.Follow = "follow", e.FrontPageCarouselClick = "frontpage_carousel_click", e.FrontPageCarouselDisplay = "carousel_display", e.FrontPageCarouselPromotionCardClick = "promotion_card_click", e.FrontPageCarouselPromotionCardView = "promotion_card_view", e.FrontPageCarouselNavButtonClick = "carousel_nav_button_click", e.FuelBuyButton = "fuel_buy_button", e.FuelGetGameClick = "fuel_get_game_click", e.FuelOfferView = "offer_view", e.FuelOfferInteraction = "offer_interaction", e.FuelSocialShare = "fuel_social_share", e.GameFollow = "follow-game", e.GameUnfollow = "unfollow-game", e.ItemSectionClick = "item_section_click", e.ItemSectionLoad = "item_section_load", e.OnboardingEvent = "onboarding_web", e.NetworkRequest = "network_request", e.NewChatterTokenStatus = "nca_client_token_status", e.NewChatterOnboardingInteraction = "nca_onboarding_chatbox_interaction", e.NotificationCenterInteraction = "notification_center_interaction", e.NotificationImpression = "notification_impression", e.NotificationInteraction = "notification_interaction", e.Pageview = "pageview", e.PartnerAffiliateSettings = "partner_affiliate_settings", e.PassportHide = "auth_exit", e.PassportShow = "auth_show", e.PresenceClick = "friend_presence_click", e.RaidPromptJoin = "raid_prompt_join", e.RaidPromptLeave = "raid_prompt_leave", e.RaidPromptImpression = "raid_prompt_impression", e.ShareItem = "share_item", e.SideNavChannelClick = "sidenav_channel_click", e.SideNavDetails = "sidenav_details", e.SideNavLoadMore = "sidenav_load_more", e.SimilarHostToggle = "autohost_similar_channels_toggle", e.SiteLayoutMod = "site_layout_mod", e.SiteToggle = "twilight_site_toggle", e.StreamSummarySpotlightImpression = "summary_spotlight_impression", e.StreamSummarySpotlightClick = "summary_spotlight_click", e.StoreMerchClick = "store_item_select", e.StoreMerchView = "store_item_view", e.Subscription = "subscribe_button", e.SubsLandingStreamerClick = "subs_landing_streamer_click", e.TeamHostToggle = "autohost_team_toggle", e.ThemeChange = "dark_mode_toggle", e.Unfollow = "unfollow", e.VerifyEmailBar = "verify_email_bar", e.VideoChatSettingChanged = "video_chat_setting_changed", e.VideoShare = "video_share", e.WhisperAllThreadsMod = "chat_convo_mod_global", e.WhisperIgnoreUser = "chat_ignore_client", e.WhisperReceived = "whisper_received", e.WhisperSearchClick = "search_click", e.WhisperSent = "whisper", e.WhisperThreadCreate = "chat_convo_create", e.WhisperThreadMod = "chat_convo_mod"
        }(i || (i = {}))
    },
    kIPx: function(e, t) {},
    kLsX: function(e, t) {},
    kNqx: function(e, t) {},
    kSXB: function(e, t) {},
    kpCl: function(e, t) {},
    lpYt: function(e, t) {},
    lw07: function(e, t) {},
    nslU: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "ClipsTopNav_ClipsUser"
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
                end: 95
            }
        };
        n.loc.source = {
            body: "query ClipsTopNav_ClipsUser {\ncurrentUser {\nid\nlogin\ndisplayName\nprofileImageURL(width: 70)\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    "o/qv": function(e, t, n) {
        "use strict";

        function i() {
            return "twitch.tv" === window.location.hostname || window.location.hostname.endsWith(".twitch.tv")
        }
        t.b = i, t.a = function() {
            if (i()) return ".twitch.tv"
        }
    },
    oH2x: function(e, t, n) {
        "use strict";
        t.a = function() {
            var e = r.n.logger.withCategory("auth"),
                t = Object(s.b)();
            if ("/passport-callback" !== window.location.pathname) {
                if (!t && Object(l.b)()) return e.debug("No legacy CSRF token found."), void r.n.store.dispatch(Object(o.a)());
                var n = Object(s.d)(e);
                if (n) n.version === s.a ? (e.debug("Using existing user cookie."), r.n.store.dispatch(Object(o.d)({
                    authToken: n.authToken,
                    displayName: n.displayName,
                    id: n.id,
                    legacyCSRFToken: t,
                    login: n.login,
                    roles: n.roles
                }))) : (e.debug("User cookie version mismatch. Refreshing with auth token."), r.n.store.dispatch(Object(o.c)(n.authToken, t)));
                else {
                    if (t) return e.debug("Using legacy API token."), void r.n.store.dispatch(Object(o.b)(t));
                    e.debug("No user data found."), r.n.store.dispatch(Object(o.a)())
                }
            } else ! function(e, t) {
                t.debug("Handling passport callback.");
                var n = function(e, t) {
                    var n = i.parse(e);
                    if (n) try {
                        var r = JSON.parse(n.state);
                        return {
                            next: r.next,
                            nonce: r.nonce,
                            token: n.access_token
                        }
                    } catch (e) {
                        t.error(e, "Failed to parse incoming state.")
                    }
                }(window.location.hash, t);
                if (!n) return t.debug("Got invalid data from passport, removing existing auth data and reloading."), Object(s.e)(), r.n.store.dispatch(Object(o.a)()), void r.n.history.replace("/");
                var l = document.createElement("a");
                if (l.href = n.next, l.hostname === window.location.hostname) {
                    var c = Object(s.c)(t);
                    if (!c) return t.debug("No passport state cookie found, aborting."), r.n.store.dispatch(Object(o.a)()), void r.n.history.replace("/");
                    Object(s.f)();
                    try {
                        if (c.nonce !== n.nonce) return t.error(new Error("Login nonce mismatch."), "Login nonce mismatch."), r.n.store.dispatch(Object(o.a)()), void r.n.history.replace("/")
                    } catch (e) {
                        return t.error(e, "Failed to parse session storage state."), r.n.store.dispatch(Object(o.a)()), void r.n.history.replace("/")
                    }
                    r.n.store.dispatch(Object(o.c)(n.token, e)), r.n.history.replace(l.pathname + l.search)
                } else r.a.buildType !== a.a.Production || "twitch.tv" === l.hostname || l.hostname.endsWith(".twitch.tv") ? window.location.assign(l.protocol + "//" + l.host + window.location.pathname + window.location.search + window.location.hash) : (t.error(new Error("Attempted to redirect away from site."), "Attempted to redirect away from site."), r.n.store.dispatch(Object(o.a)()), r.n.history.replace("/"))
            }(t, e)
        };
        var i = n("OAwv"),
            r = (n.n(i), n("6sO2")),
            a = n("Ejve"),
            o = n("f2i/"),
            s = n("bejq"),
            l = n("o/qv")
    },
    oM0L: function(e, t) {},
    oPyM: function(e, t) {},
    oWcd: function(e, t) {},
    pP2G: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("TToO"),
            r = n("6sO2"),
            a = n("JVK9");
        r.n.store.registerReducer("ads", function(e, t) {
            switch (void 0 === e && (e = {
                trackingSet: !1
            }), t.type) {
                case a.a:
                    return i.__assign({}, e, {
                        trackingSet: !0
                    });
                default:
                    return e
            }
        });
        n("Iw4B"), n("Aj/L"), n("0nzt")
    },
    "pk+c": function(e, t) {},
    pna9: function(e, t) {},
    py4c: function(e, t) {},
    qPr7: function(e, t) {},
    rCmJ: function(e, t, n) {
        "use strict";
        var i = n("zgdU");
        n.d(t, "a", function() {
            return i.a
        })
    },
    rbXT: function(e, t) {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "Core_Services_Spade_CurrentUser"
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
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "language"
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
                end: 93
            }
        };
        n.loc.source = {
            body: "query Core_Services_Spade_CurrentUser {\ncurrentUser {\nid\nlogin\nhasTurbo\nhasPrime\nlanguage\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        e.exports = n
    },
    rhaD: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("TToO"),
            r = n("Ejve"),
            a = n("ZEbP"),
            o = n("plEf"),
            s = n("1Tgx");
        window.IntlMessageFormat = o, window.IntlRelativeFormat = s;
        var l = "https://api.twitch.tv",
            c = "https://gql.twitch.tv",
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.buildType = r.a.Production, t.apiBaseURL = l, t.graphqlEndpoint = c + "/gql", t.sentinelEndpoint = "https://sentinel.twitchsvc.net/error-report", t.defaultSpadeEndpoint = "https://spade.twitch.tv/track", t.authClientID = "kimne78kx3ncx6brgo4mv6wki5h1ko", t.passportRedirectURI = "https://go.twitch.tv/passport-callback", t.pubsubTopicUploadPrefix = "pubsub.upload", t.mixpanelToken = "809576468572134f909dffa6bd0dcfcf", t
                }
                return i.__extends(t, e), t
            }(function() {
                return function() {
                    this.optimizedBuild = !0, this.embedded = void 0, this.buildID = window.__twilightBuildID || "00000000-0000-0000-0000-000000000000", this.spadeBatchWindow = 1e3, this.locales = [{
                        name: "English",
                        languageCode: "en",
                        locale: "en-US",
                        loader: function() {
                            return Promise.resolve({
                                formatData: {
                                    numberShort: a,
                                    intlMessageFormatKey: "en"
                                }
                            })
                        },
                        default: !0
                    }, {
                        name: "Dansk",
                        languageCode: "da",
                        locale: "da-DK",
                        loader: function() {
                            return n.e(26).then(n.bind(null, "upzD"))
                        }
                    }, {
                        name: "Deutsch",
                        languageCode: "de",
                        locale: "de-DE",
                        loader: function() {
                            return n.e(25).then(n.bind(null, "8UKq"))
                        }
                    }, {
                        name: "English - UK",
                        languageCode: "en-gb",
                        locale: "en-GB",
                        loader: function() {
                            return n.e(30).then(n.bind(null, "q3oo"))
                        }
                    }, {
                        name: "Español - España",
                        languageCode: "es",
                        locale: "es-ES",
                        loader: function() {
                            return n.e(22).then(n.bind(null, "HuVx"))
                        }
                    }, {
                        name: "Español - Latinoamérica",
                        languageCode: "es-mx",
                        locale: "es-MX",
                        loader: function() {
                            return n.e(23).then(n.bind(null, "q7em"))
                        }
                    }, {
                        name: "Français",
                        languageCode: "fr",
                        locale: "fr-FR",
                        loader: function() {
                            return n.e(20).then(n.bind(null, "oicQ"))
                        }
                    }, {
                        name: "Italiano",
                        languageCode: "it",
                        locale: "it-IT",
                        loader: function() {
                            return n.e(17).then(n.bind(null, "OdBR"))
                        }
                    }, {
                        name: "Magyar",
                        languageCode: "hu",
                        locale: "hu-HU",
                        loader: function() {
                            return n.e(18).then(n.bind(null, "U+bT"))
                        }
                    }, {
                        name: "Nederlands",
                        languageCode: "nl",
                        locale: "nl-NL",
                        loader: function() {
                            return n.e(14).then(n.bind(null, "Rk/Q"))
                        }
                    }, {
                        name: "Norsk",
                        languageCode: "no",
                        locale: "no-NO",
                        loader: function() {
                            return n.e(13).then(n.bind(null, "6T36"))
                        },
                        cldrLocale: "nn"
                    }, {
                        name: "Polski",
                        languageCode: "pl",
                        locale: "pl-PL",
                        loader: function() {
                            return n.e(12).then(n.bind(null, "MrAg"))
                        }
                    }, {
                        name: "Português",
                        languageCode: "pt",
                        locale: "pt-PT",
                        loader: function() {
                            return n.e(10).then(n.bind(null, "D5sO"))
                        },
                        cldrLocale: "pt-pt"
                    }, {
                        name: "Português - Brasil",
                        languageCode: "pt-br",
                        locale: "pt-BR",
                        loader: function() {
                            return n.e(11).then(n.bind(null, "j/Ed"))
                        },
                        cldrLocale: "pt"
                    }, {
                        name: "Slovenčina",
                        languageCode: "sk",
                        locale: "sk-SK",
                        loader: function() {
                            return n.e(7).then(n.bind(null, "HsP5"))
                        }
                    }, {
                        name: "Suomi",
                        languageCode: "fi",
                        locale: "fi-FI",
                        loader: function() {
                            return n.e(21).then(n.bind(null, "IY8u"))
                        }
                    }, {
                        name: "Svenska",
                        languageCode: "sv",
                        locale: "sv-SE",
                        loader: function() {
                            return n.e(6).then(n.bind(null, "FMvw"))
                        }
                    }, {
                        name: "Tiếng Việt",
                        languageCode: "vi",
                        locale: "vi-VN",
                        loader: function() {
                            return n.e(3).then(n.bind(null, "eSjI"))
                        }
                    }, {
                        name: "Türkçe",
                        languageCode: "tr",
                        locale: "tr-TR",
                        loader: function() {
                            return n.e(4).then(n.bind(null, "y/8H"))
                        }
                    }, {
                        name: "Čeština",
                        languageCode: "cs",
                        locale: "cs-CZ",
                        loader: function() {
                            return n.e(27).then(n.bind(null, "7w/k"))
                        }
                    }, {
                        name: "Ελληνικά",
                        languageCode: "el",
                        locale: "el-GR",
                        loader: function() {
                            return n.e(24).then(n.bind(null, "60Nr"))
                        }
                    }, {
                        name: "Български",
                        languageCode: "bg",
                        locale: "bg-BG",
                        loader: function() {
                            return n.e(28).then(n.bind(null, "AuY2"))
                        }
                    }, {
                        name: "Русский",
                        languageCode: "ru",
                        locale: "ru-RU",
                        loader: function() {
                            return n.e(8).then(n.bind(null, "BmrF"))
                        }
                    }, {
                        name: "العربية",
                        languageCode: "ar",
                        locale: "ar-SA",
                        loader: function() {
                            return n.e(29).then(n.bind(null, "edg0"))
                        }
                    }, {
                        name: "ภาษาไทย",
                        languageCode: "th",
                        locale: "th-TH",
                        loader: function() {
                            return n.e(5).then(n.bind(null, "/QRT"))
                        }
                    }, {
                        name: "中文 简体",
                        languageCode: "zh-cn",
                        locale: "zh-CN",
                        loader: function() {
                            return n.e(2).then(n.bind(null, "pn/1"))
                        },
                        cldrLocale: "zh-hans"
                    }, {
                        name: "中文 繁體",
                        languageCode: "zh-tw",
                        locale: "zh-TW",
                        loader: function() {
                            return n.e(1).then(n.bind(null, "0y5z"))
                        },
                        cldrLocale: "zh-hant"
                    }, {
                        name: "日本語",
                        languageCode: "ja",
                        locale: "ja-JP",
                        loader: function() {
                            return n.e(16).then(n.bind(null, "bxdU"))
                        }
                    }, {
                        name: "한국어",
                        languageCode: "ko",
                        locale: "ko-KR",
                        loader: function() {
                            return n.e(15).then(n.bind(null, "dW+O"))
                        }
                    }, {
                        name: "हिंदी",
                        languageCode: "hi",
                        locale: "hi-IN",
                        loader: function() {
                            return n.e(19).then(n.bind(null, "rfGJ"))
                        }
                    }, {
                        name: "Română",
                        languageCode: "ro",
                        locale: "ro-RO",
                        loader: function() {
                            return n.e(9).then(n.bind(null, "TkpZ"))
                        }
                    }], this.passportAuthURL = "https://api.twitch.tv/kraken/oauth2/authorize", this.passportScopes = ["chat_login", "user_read", "user_subscriptions", "user_presence_friends_read"], this.defaultAvatarURL = "https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png", this.defaultStreamPreviewURL = "https://static-cdn.jtvnw.net/ttv-static/404_preview-160x90.jpg", this.defaultBoxArtURL = "https://static-cdn.jtvnw.net/ttv-boxart/404_boxart.png", this.defaultCollectionPreviewURL = "https://static-cdn.jtvnw.net/ttv-playlists-thumbnails-prod/missing-video-thumb-320x180.png", this.hostingCacheDelay = 2001, this.legacyClientID = "jzkbprff40iqj646a697cyrvl0zt2m6", this.algoliaApplicationID = "XLUO134HOR", this.algoliaAPIKey = "d157112f6fc2cab93ce4b01227c80a6d", this.forceNetworkLogging = !1, this.networkLoggingHostNames = ["twitch.tv", "localhost", "jtvnw.net", "twitchcdn.net", "twitchcdn.tech", "twitchcdn-shadow.net", "twitchsvc.net", "twitchsvc.tech", "twitchsvc-shadow.net"], this.defaultNetworkLoggingThreshold = .2, this.layoutCacheKey = "TwitchCache:Layout", this.forceComponentBenchmarking = !1, this.defaultComponentBenchmarkingThreshold = .1, this.forceBenchmarkingTools = !1, this.dfpNetworkCode = "3576121", this.krakenEndpoint = "https://api.twitch.tv/kraken", this.defaultAPIVersion = "5", this.adblockAccount = 58, this.forceMinConsoleLogLevelKey = "twilight.minConsoleLogLevel", this.tryPrimeURI = "https://twitch.amazon.com/prime", this.experimentsOverrideCookie = "experiment_overrides", this.tmiHost = "irc-ws.chat.twitch.tv", this.persistentPlayerEnabledKey = "persistenceEnabled", this.manifestURL = "https://static.twitchcdn.net/config/manifest.json?v=1", this.cdnURL = "https://static.twitchcdn.net/"
                }
            }()),
            u = n("J4ib");
        Object(u.i)(new h)
    },
    rxEr: function(e, t) {},
    tcHh: function(e, t) {},
    tnvA: function(e, t) {},
    u1ju: function(e, t) {},
    uWno: function(e, t) {},
    "vH/s": function(e, t, n) {
        "use strict";
        var i = n("UF1m");
        n.d(t, "Spade", function() {
            return i.a
        });
        var r = n("IWpL");
        n.o(r, "PageviewContent") && n.d(t, "PageviewContent", function() {
            return r.PageviewContent
        }), n.o(r, "PageviewDirectoryContentType") && n.d(t, "PageviewDirectoryContentType", function() {
            return r.PageviewDirectoryContentType
        }), n.o(r, "PageviewFollowingTab") && n.d(t, "PageviewFollowingTab", function() {
            return r.PageviewFollowingTab
        }), n.o(r, "PageviewLocation") && n.d(t, "PageviewLocation", function() {
            return r.PageviewLocation
        }), n.o(r, "PageviewMedium") && n.d(t, "PageviewMedium", function() {
            return r.PageviewMedium
        }), n.o(r, "ShareItemContext") && n.d(t, "ShareItemContext", function() {
            return r.ShareItemContext
        }), n.o(r, "ShareItemType") && n.d(t, "ShareItemType", function() {
            return r.ShareItemType
        }), n.o(r, "SourceItemType") && n.d(t, "SourceItemType", function() {
            return r.SourceItemType
        }), n.o(r, "SpadeEventType") && n.d(t, "SpadeEventType", function() {
            return r.SpadeEventType
        }), n.o(r, "SpadeFollowingCategory") && n.d(t, "SpadeFollowingCategory", function() {
            return r.SpadeFollowingCategory
        }), n.o(r, "SpadeVideoBroadcastType") && n.d(t, "SpadeVideoBroadcastType", function() {
            return r.SpadeVideoBroadcastType
        }), n.o(r, "TwitchDataType") && n.d(t, "TwitchDataType", function() {
            return r.TwitchDataType
        })
    },
    vXa3: function(e, t) {},
    w9tK: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.AutohostSettings = "channel.dashboard.settings.autohost", e.BitsBuyCard = "bits-buy-card", e.BrowseCommunities = "browse.communities", e.BrowseCreative = "browse.creative", e.BrowseGamesAndCommunities = "browse.games-and-communities", e.ChannelClips = "channel.clips", e.ChannelCollections = "channel.collections", e.ChannelClipsManager = "videoManager.clips.channel", e.ChannelDashboardAchievements = "channel.dashboard.achievements", e.ChannelDashboardBounties = "channel.dashboard.bounties", e.ChannelDashboardChannelAnalytics = "channel.dashboard.channel-analytics", e.ChannelDashboardExtensions = "channel.dashboard.extensions", e.ChannelDashboardModeration = "channel.dashboard.moderation", e.ChannelDashboardStreamSummary = "channel.dashboard.stream-summary", e.ChannelEvents = "channel.events", e.ChannelFollowers = "channel.followers", e.ChannelFollows = "channel.follows", e.ChannelIndex = "channel.index.index", e.ChatPopout = "chat", e.CheermoteCarousel = "cheermote-carousel", e.DashboardSettingsIndex = "channel.dashboard.settings.index", e.DevOnly = "dev", e.DirectoryCommunityByLanguage = "directory.community.language", e.DirectoryCommunityIndex = "directory.community.index", e.DirectoryCommunityDetails = "directory.community.details", e.DirectoryFollowingCommunities = "directory.following.communities", e.DirectoryFollowingGames = "directory.following.games", e.DirectoryFollowingHosts = "directory.following.hosts", e.DirectoryFollowingIndex = "directory.following.index", e.DirectoryFollowingLiveChannels = "directory.following.channels", e.DirectoryFollowingVideos = "directory.following.videos.video-type", e.DirectoryGameClips = "directory.game.clips", e.DirectoryGameDetails = "directory.game.details", e.DirectoryGameIndex = "directory.game.index", e.DirectoryGames = "directory.games", e.DirectoryPopular = "directory.popular", e.DirectoryPopularByLanguage = "directory.popular.language", e.DirectoryGameVideos = "directory.game.videos", e.DirectoryVideosHistory = "directory.videos.history", e.EmailVerification = "emailVerification", e.EventDetails = "event.details", e.ForYou = "for-you", e.Index = "index", e.Inventory = "inventory", e.MyClipsManager = "videoManager.clips", e.NotificationSettingsPage = "settings.notificationSettings", e.OnboardingIndex = "onboarding.index", e.ReportUserPage = "reportUser.page", e.SettingsConnections = "private/embed-components", e.SettingsChannel = "private/embed-components", e.SettingsNotifications = "settings.notifications", e.SettingsPrime = "settings.prime", e.SettingsProfile = "settings.profile", e.SettingsSecurity = "private/embed-components", e.SettingsTurbo = "settings.turbo", e.StoreMerchPage = "store.merch", e.SubsLandingPage = "subs.landing", e.TeamsDashboardRevenue = "teams.dashboard.revenue", e.TeamsDashboardStats = "teams.dashboard.stats", e.TeamsDashboardMembers = "teams.dashboard.members", e.TeamsDashboardFeaturedChannels = "teams.dashboard.featured-channels", e.TeamsDashboardSettings = "teams.dashboard.settings", e.SubsBroadcasterPage = "subs.broadcaster", e.VideoManagerEditPropertiesPage = "videoManager.edit", e.VideoManagerPage = "videoManager.page", e.VideoManagerUploadListPage = "videoManager.upload-list", e.VideoManagerUploadPage = "videoManager.upload", e.VideoManagerCollectionsManager = "videoManager.collections", e.VideoManagerCollectionsEditor = "videoManager.collections.editor", e.VideosPage = "videos", e.VideoWatchPage = "video", e.Unknown = "unknown"
        }(i || (i = {}))
    },
    xdZ7: function(e, t) {},
    xrVp: function(e, t, n) {
        "use strict";
        t.b = function(e, t) {
            var n = "";
            switch (t) {
                case o.a.TypedCommand:
                    n = "typed_command";
                    break;
                case o.a.UserMenu:
                    n = "user_menu";
                    break;
                default:
                    n = "user_menu"
            }
            var a = "";
            switch (e) {
                case r.a.Dark:
                    a = "dark";
                    break;
                case r.a.Light:
                    a = "light";
                    break;
                default:
                    a = "light"
            }
            i.m.track(s.SpadeEventType.ThemeChange, {
                source: n,
                mode: a
            })
        }, t.a = function(e) {
            switch (e) {
                case a.a.Archive:
                    return s.SpadeVideoBroadcastType.Archive;
                case a.a.Highlight:
                    return s.SpadeVideoBroadcastType.Highlight;
                case a.a.Upload:
                    return s.SpadeVideoBroadcastType.Upload;
                case a.a.WatchParty:
                    return s.SpadeVideoBroadcastType.WatchParty;
                case a.a.PastPremiere:
                    return s.SpadeVideoBroadcastType.PastPremiere;
                case a.a.PremiereUpload:
                    return s.SpadeVideoBroadcastType.PremiereUpload;
                default:
                    return e
            }
        };
        var i = n("6sO2"),
            r = n("NXs7"),
            a = n("6WAQ"),
            o = n("NikC"),
            s = n("vH/s")
    },
    "y+pq": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return i
        }), n.d(t, "c", function() {
            return r
        }), n.d(t, "a", function() {
            return a
        });
        var i;
        (i || (i = {})).Collection = "collection";
        var r;
        ! function(e) {
            e.Chomment = "chomment", e.Collection = "collection"
        }(r || (r = {}));
        var a;
        ! function(e) {
            e.Collection = "collection", e.Chomment = "chomment"
        }(a || (a = {}))
    },
    yDzg: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            if (void 0 === t && (t = {}), 0 === Object.keys(t).length) return e;
            var n = new URL(e),
                a = r.stringify(i.__assign({}, r.parse(n.search), t));
            return "" + n.origin + n.pathname + "?" + a + n.hash
        };
        var i = n("TToO"),
            r = n("OAwv");
        n.n(r)
    },
    yWCw: function(e, t, n) {
        "use strict";
        var i = n("U7vG"),
            r = n("Odds"),
            a = (n("N72C"), function(e) {
                return i.createElement(r._25, {
                    className: "core-error",
                    color: r.I.Alt2,
                    display: r.N.Flex,
                    justifyContent: r._1.Center,
                    alignItems: r.c.Center,
                    fullWidth: !e.inline,
                    fullHeight: !e.inline
                }, i.createElement(r._2, {
                    className: "core-error__container",
                    display: r.N.InlineFlex,
                    alignItems: r.c.Center,
                    flexWrap: r.Q.NoWrap
                }, i.createElement(r._25, {
                    margin: {
                        right: 2
                    },
                    flexShrink: 0,
                    color: r.I.Alt2
                }, i.createElement(r._15, {
                    asset: r._16.DeadGlitch,
                    width: 92,
                    height: 96
                })), i.createElement(r._2, {
                    className: "core-error__message-container",
                    display: r.N.Flex,
                    flexDirection: r.P.Column
                }, i.createElement(r._35, {
                    fontSize: r.R.Size4,
                    "data-a-target": "core-error-message"
                }, e.message), e.children)))
            });
        n.d(t, "a", function() {
            return a
        })
    },
    zCIC: function(e, t, n) {
        "use strict";
        var i = n("N221"),
            r = n("Th9g"),
            a = n("RH2O"),
            o = n("TToO"),
            s = n("KSGD"),
            l = n("U7vG"),
            c = n("6sO2"),
            h = n("Odds"),
            u = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.getStyles = function() {
                        var e = n.state,
                            t = e.anchoredBottom,
                            i = e.anchoredTop,
                            r = e.top,
                            a = e.width,
                            o = t || i,
                            s = "absolute";
                        return window.outerWidth < (n.props.disableStickinessBelowWidth || 0) ? (s = "inherit", o = !1) : o && (s = "fixed"), {
                            position: s,
                            top: i ? "inherit" : r,
                            width: o ? a : "inherit"
                        }
                    }, n.lockBottom = function(e) {
                        n.setState({
                            anchoredBottom: !0,
                            top: window.innerHeight - e,
                            width: n.element.getBoundingClientRect().width
                        })
                    }, n.lockTop = function() {
                        n.setState({
                            anchoredTop: !0,
                            width: n.element.getBoundingClientRect().width
                        })
                    }, n.resizeStickyColumn = function() {
                        n.unlock(n.state.lastOffset || 0), n.checkBounding(!0, 0)
                    }, n.setRef = function(e) {
                        return n.element = e
                    }, n.state = {
                        anchoredBottom: !1,
                        anchoredTop: !1,
                        lastOffset: void 0,
                        offsetTop: void 0,
                        top: void 0,
                        width: void 0
                    }, n
                }
                return o.__extends(t, e), t.prototype.componentDidMount = function() {
                    var e = this.element.getBoundingClientRect();
                    this.setState({
                        offsetTop: e.top
                    });
                    var t = this.context.registerReceiver;
                    t ? this.unregister = t(this) : c.i.warn("<StickyContainer /> initialized missing a <ScrollableArea /> provider")
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.props.sideNavExpanded !== e.sideNavExpanded && this.resizeStickyColumn()
                }, t.prototype.componentWillUnmount = function() {
                    this.unregister && this.unregister()
                }, t.prototype.render = function() {
                    return l.createElement(h._2, {
                        position: h._9.Relative,
                        fullWidth: !0
                    }, l.createElement("div", {
                        className: "sticky-container",
                        ref: this.setRef,
                        style: this.getStyles()
                    }, this.props.children))
                }, t.prototype.checkVisible = function(e, t) {
                    return o.__awaiter(this, void 0, void 0, function() {
                        var e, n, r, a, s;
                        return o.__generator(this, function(o) {
                            return !t || t.type !== i.a.Resize && t.type !== i.a.Wheel && t.type !== i.a.Scroll || (e = this.state.anchoredBottom || this.state.anchoredTop, n = t.offset >= (this.state.lastOffset || 0), t.type === i.a.Resize ? (this.unlock(t.offset), this.checkBounding(n, t.offset)) : t.wheelEvent && t.type === i.a.Wheel && e ? (r = t.wheelEvent, a = void 0, a = 0 === r.deltaMode ? r.deltaY || r.wheelDelta : 16 * r.deltaY, s = a + t.offset, this.context.yScrollTo(s), this.checkBounding(a > 0, t.offset)) : t.type !== i.a.Scroll || t.offset === this.state.lastOffset || e || this.checkBounding(n, t.offset)), [2]
                        })
                    })
                }, t.prototype.checkBounding = function(e, t) {
                    e && this.state.anchoredTop && this.unlock(t), !e && this.state.anchoredBottom && this.unlock(t), this.state.anchoredBottom || this.state.anchoredTop || this.shouldLock(e), this.setState({
                        lastOffset: t
                    })
                }, t.prototype.shouldLock = function(e) {
                    var t = this.element.getBoundingClientRect(),
                        n = this.state.offsetTop || 0;
                    if (t.height < window.innerHeight - n) this.lockTop();
                    else {
                        var i = t.top < n,
                            r = t.top >= window.innerHeight,
                            a = t.bottom < n,
                            o = t.bottom + (this.props.bottomPixelThreshold || 0) >= window.innerHeight,
                            s = !r && !i,
                            l = !o && !a;
                        !s && !l || s && l || (!e && s && this.lockTop(), e && l && this.lockBottom(t.height + (this.props.bottomPixelThreshold || 0))), i && a && this.lockBottom(t.height + (this.props.bottomPixelThreshold || 0)), r && o && this.lockTop()
                    }
                }, t.prototype.unlock = function(e) {
                    var t, n = this.state,
                        i = n.offsetTop,
                        r = n.width,
                        a = this.element.getBoundingClientRect(),
                        o = window.innerHeight - (i || 0),
                        s = r;
                    t = "inherit", a.height <= o ? s = "inherit" : this.state.anchoredTop ? t = e : this.state.anchoredBottom && (t = e - a.height + o - (this.props.bottomPixelThreshold || 0)), this.setState({
                        top: t,
                        width: s,
                        anchoredBottom: !1,
                        anchoredTop: !1
                    })
                }, t.contextTypes = {
                    registerReceiver: s.func,
                    yScrollTo: s.func
                }, t
            }(l.Component),
            d = Object(a.b)(function(e) {
                return {
                    sideNavExpanded: e.ui.sideNavExpanded
                }
            })(u);
        n.d(t, "b", function() {
            return i.b
        }), n.d(t, "a", function() {
            return r.a
        }), n.d(t, "c", function() {
            return d
        })
    },
    zF1n: function(e, t) {},
    zcHb: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var i;
        ! function(e) {
            e.Channel = "channel_id", e.Device = "device_id", e.User = "user_id"
        }(i || (i = {}))
    },
    zgdU: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return a
        });
        var i = n("TToO"),
            r = n("U7vG"),
            a = (n.n(r), function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.setContainerRef = function(e) {
                        t.container = e
                    }, t.handleGlobalClick = function(e) {
                        var n = e.target;
                        t.isParentOf(n) || t.props.onClickOut(e)
                    }, t
                }
                return i.__extends(t, e), t.prototype.componentDidMount = function() {
                    document.addEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.componentWillUnmount = function() {
                    document.removeEventListener("click", this.handleGlobalClick, !0)
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = (e.onClickOut, i.__rest(e, ["onClickOut"]));
                    return r.createElement("div", i.__assign({}, t, {
                        ref: this.setContainerRef
                    }), this.props.children)
                }, t.prototype.isParentOf = function(e) {
                    for (var t = e; t;) {
                        if (t === this.container) return !0;
                        t = t.parentElement
                    }
                    return !1
                }, t
            }(r.Component))
    }
}, [6]);
//# sourceMappingURL=clips-0108a4a4e4ac12e1ea2bb38c093b9e41.js.map