(window.webpackJsonp = window.webpackJsonp || []).push([
    [183], {
        A39y: function(e, t, r) {
            "use strict";
            r.r(t);
            var i = r("mrSG"),
                a = r("q1tI"),
                n = r("/MKj"),
                s = r("fvjX"),
                o = r("/7QA"),
                l = r("kz7j"),
                c = r("tY8L"),
                h = 3;
            var d, u = r("GnwI"),
                w = r("8/mp"),
                p = r("8Ad5"),
                v = r("oK83"),
                m = r("Ue10"),
                f = (r("ETVK"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.usernameClickHandler = function(e) {
                            var r = e.currentTarget.getAttribute("data-username"),
                                i = t.props.isModList ? v.a.viewer_list_mod_section : v.a.viewer_list;
                            r && t.props.onUsernameClick(r, i, "", e.currentTarget.getBoundingClientRect().bottom)
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = this.props,
                            r = t.viewers,
                            i = t.header,
                            n = r.map(function(t, r) {
                                return a.createElement("div", {
                                    key: "chat-viewers-list-item-" + t,
                                    role: "listitem",
                                    "aria-setsize": -1,
                                    "aria-posinset": r + 1
                                }, a.createElement("button", {
                                    className: "chat-viewers-list__button",
                                    "data-username": t,
                                    onClick: e.usernameClickHandler
                                }, a.createElement(m.W, {
                                    transform: m.Nb.Capitalize
                                }, t)))
                            }),
                            s = "chat-viewers-list-header-" + i;
                        return a.createElement(m.Wa, {
                            className: "chat-viewers-list",
                            padding: {
                                bottom: 2
                            }
                        }, a.createElement("div", {
                            id: s
                        }, i), a.createElement("div", {
                            role: "list",
                            "aria-labelledby": s
                        }, n))
                    }, t
                }(a.Component)),
                g = r("gq0V");
            r("h1Iv");
            ! function(e) {
                e.ViewerList = "chat-viewers-list__viewers", e.VIPBadge = "chat-viewers-list__vip-badge"
            }(d || (d = {}));
            var C = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            filter: "",
                            inputValue: "",
                            filteredViewers: {},
                            viewersPage: 0,
                            renderedViewers: [],
                            isLoading: !1
                        }, t.filterTimeout = 0, t.saveScrollRef = function(e) {
                            return t.scroll = e
                        }, t.loadMore = function() {
                            return i.__awaiter(t, void 0, void 0, function() {
                                var e = this;
                                return i.__generator(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, new Promise(function(t) {
                                                e.setState(function(t) {
                                                    return {
                                                        renderedViewers: e.getRenderedViewers(t.filteredViewers.viewers, t.viewersPage + 1),
                                                        viewersPage: t.viewersPage + 1
                                                    }
                                                }, function() {
                                                    t()
                                                })
                                            })];
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                })
                            })
                        }, t.getRenderedViewers = function(e, t) {
                            return e ? e.slice(0, 100 * (t || 1)) : []
                        }, t.handleFilter = function(e, r) {
                            var i = function(e, t) {
                                    if (!t) return e;
                                    var r = Object.assign({}, e);
                                    return Object.keys(r).forEach(function(e) {
                                        var i = r[e];
                                        Array.isArray(i) && (r[e] = i.filter(function(e) {
                                            return -1 !== e.toLowerCase().indexOf(t)
                                        }))
                                    }), r
                                }(r, e),
                                a = t.getRenderedViewers(i.viewers, 1);
                            t.scroll && t.scroll.scrollToTop(), t.setState({
                                filteredViewers: i,
                                isLoading: !1,
                                renderedViewers: a,
                                viewersPage: 1
                            })
                        }, t.handleFilterChange = function(e) {
                            var r = e.target.value,
                                i = r.toLowerCase().trim();
                            t.setState({
                                filter: i,
                                inputValue: r,
                                isLoading: !0
                            }), clearTimeout(t.filterTimeout), t.filterTimeout = setTimeout(function() {
                                t.handleFilter(i, t.props.viewers)
                            }, 350)
                        }, t.onKeyDown = function(e) {
                            e.keyCode === p.a.Esc && t.props.closeViewersList()
                        }, t
                    }
                    return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.handleFilter(this.state.filter, e.viewers)
                    }, t.prototype.render = function() {
                        var e = this.props.isLoading || this.state.isLoading,
                            t = e && a.createElement(m.Wa, {
                                className: "chat-viewers__loading",
                                display: m.X.Flex,
                                alignItems: m.f.Center,
                                justifyContent: m.Va.Center,
                                zIndex: m.bc.Above,
                                position: m.eb.Absolute,
                                attachTop: !0,
                                attachBottom: !0,
                                attachLeft: !0,
                                attachRight: !0
                            }, a.createElement(m.Ya, null));
                        return a.createElement(m.Oa, {
                            className: "chat-viewers__container",
                            fullWidth: !0,
                            fullHeight: !0,
                            flexShrink: 0,
                            zIndex: m.bc.Default
                        }, a.createElement("section", {
                            "aria-labelledby": "chat-viewers__header"
                        }, a.createElement(m.Wa, {
                            className: "chat-viewers__pane",
                            display: m.X.Flex,
                            flexDirection: m.Z.Column,
                            flexWrap: m.Aa.NoWrap,
                            position: m.eb.Absolute,
                            attachBottom: !0,
                            attachLeft: !0,
                            attachRight: !0
                        }, a.createElement(m.Wa, {
                            className: "chat-viewers__header",
                            display: m.X.Flex,
                            justifyContent: m.Va.Center,
                            alignItems: m.f.Center,
                            padding: {
                                y: 1
                            },
                            flexShrink: 0
                        }, a.createElement(m.Wa, {
                            position: m.eb.Absolute,
                            attachLeft: !0,
                            margin: {
                                left: 1
                            }
                        }, a.createElement(m.A, {
                            icon: m.ob.Close,
                            ariaLabel: Object(o.d)("Close", "ChatViewers"),
                            "data-a-target": "chat-viewer-list",
                            onClick: this.props.closeViewersList
                        })), a.createElement("p", {
                            "data-a-target": "chat-viewers_header-channel-name",
                            id: "chat-viewers__header"
                        }, Object(o.d)("Users in Chat", "ChatViewers"))), a.createElement(m.Wa, {
                            display: m.X.Flex,
                            flexDirection: m.Z.Column,
                            flexWrap: m.Aa.NoWrap,
                            fullHeight: !0
                        }, a.createElement(m.Wa, {
                            className: "chat-viewers__filter",
                            margin: {
                                x: 2,
                                y: 1
                            }
                        }, a.createElement(m.Qa, {
                            type: m.Sa.Search,
                            name: "viewers-filter",
                            placeholder: Object(o.d)("Filter", "ChatViewers"),
                            readOnly: this.props.isLoading,
                            onChange: this.handleFilterChange,
                            value: this.state.inputValue,
                            autoFocus: !0,
                            onKeyDown: this.onKeyDown
                        })), a.createElement(w.b, {
                            className: "chat-viewers__list",
                            scrollRef: this.saveScrollRef,
                            suppressScrollX: !0,
                            scrollContentClassName: "chat-viewers__scroll-container"
                        }, a.createElement(m.Wa, {
                            padding: {
                                x: 2
                            }
                        }, this.viewersList, a.createElement(w.a, {
                            key: this.state.filter,
                            enabled: !e,
                            loadMore: this.loadMore
                        }))), t))))
                    }, Object.defineProperty(t.prototype, "viewersList", {
                        get: function() {
                            var e = this.state.filteredViewers,
                                t = e.admins,
                                r = e.global_mods,
                                i = e.moderators,
                                n = e.staff,
                                s = e.viewers,
                                l = e.vips,
                                c = this.props.onShowViewerCard;
                            return a.createElement(a.Fragment, null, n && n.length > 0 && a.createElement(f, {
                                key: "chat-viewers-list-staff",
                                header: Object(o.d)("Staff", "ChatViewers"),
                                viewers: n,
                                onUsernameClick: c
                            }), t && t.length > 0 && a.createElement(f, {
                                key: "chat-viewers-list-admins",
                                header: Object(o.d)("Admins", "ChatViewers"),
                                viewers: t,
                                onUsernameClick: c,
                                isModList: !0
                            }), r && r.length > 0 && a.createElement(f, {
                                key: "chat-viewers-list-global-mods",
                                header: Object(o.d)("Global Moderators", "ChatViewers"),
                                viewers: r,
                                onUsernameClick: c,
                                isModList: !0
                            }), i && i.length > 0 && a.createElement(f, {
                                key: "chat-viewers-list-moderators",
                                header: Object(o.d)("Moderators", "ChatViewers"),
                                viewers: i,
                                onUsernameClick: c,
                                isModList: !0
                            }), l && l.length > 0 && a.createElement(g.a, null, a.createElement(f, {
                                "data-test-selector": d.VIPBadge,
                                key: "chat-viewers-list-vips",
                                header: Object(o.d)("VIPs", "ChatViewers"),
                                viewers: l,
                                onUsernameClick: c
                            })), s && s.length > 0 && !this.props.isCurrentUserBanned && a.createElement(f, {
                                key: "chat-viewers-list-viewers",
                                "data-test-selector": d.ViewerList,
                                header: Object(o.d)("Users", "ChatViewers"),
                                viewers: this.state.renderedViewers,
                                onUsernameClick: c
                            }))
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(a.Component),
                b = function(e) {
                    function t(t) {
                        var r = e.call(this, t) || this;
                        return r.state = {
                            viewers: {},
                            viewerCount: 0,
                            isLoading: !1
                        }, r.logger = o.k.withCategory("chat-viewers"), r
                    }
                    return i.__extends(t, e), t.prototype.componentWillReceiveProps = function(e) {
                        this.props.channelLogin !== e.channelLogin && this.updateViewers(e.channelLogin)
                    }, t.prototype.componentDidMount = function() {
                        return i.__awaiter(this, void 0, void 0, function() {
                            return i.__generator(this, function(e) {
                                return this.updateViewers(this.props.channelLogin), [2]
                            })
                        })
                    }, t.prototype.render = function() {
                        return a.createElement(C, {
                            channelLogin: this.props.channelLogin,
                            closeViewersList: this.props.closeViewersList,
                            viewers: this.state.viewers,
                            viewerCount: this.state.viewerCount,
                            isLoading: this.state.isLoading,
                            isCurrentUserBanned: this.props.isCurrentUserBanned,
                            onShowViewerCard: this.props.onShowViewerCard
                        })
                    }, t.prototype.updateViewers = function(e) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var t, r, a, n;
                            return i.__generator(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        return this.props.latencyTracking.resetCustomEvents(l.a.ViewersList), t = this.props.latencyTracking.registerCustomEvent({
                                            benchmark: 3e3,
                                            group: l.a.ViewersList,
                                            key: l.b.ViewersListUpdated,
                                            label: l.c.Updated,
                                            start: l.d.Registration
                                        }), this.setState({
                                            isLoading: !0
                                        }), [4, function(e) {
                                            return i.__awaiter(this, void 0, void 0, function() {
                                                var t, r, a, n;
                                                return i.__generator(this, function(i) {
                                                    switch (i.label) {
                                                        case 0:
                                                            t = "https://tmi.twitch.tv/group/user/" + e.toLowerCase() + "/chatters", r = 1, i.label = 1;
                                                        case 1:
                                                            if (!(r <= h)) return [3, 7];
                                                            i.label = 2;
                                                        case 2:
                                                            return i.trys.push([2, 5, , 6]), [4, fetch(t, {
                                                                method: "GET",
                                                                headers: {
                                                                    Accept: "application/json; charset=UTF-8",
                                                                    "content-type": "application/json; charset=UTF-8"
                                                                }
                                                            })];
                                                        case 3:
                                                            return [4, i.sent().json()];
                                                        case 4:
                                                            return a = i.sent(), o.k.debug("[update] getViewers done."), [2, a];
                                                        case 5:
                                                            if (n = i.sent(), r === h) throw n;
                                                            return [3, 6];
                                                        case 6:
                                                            return ++r, [3, 1];
                                                        case 7:
                                                            return [2]
                                                    }
                                                })
                                            })
                                        }(e)];
                                    case 1:
                                        return r = s.sent(), a = r ? r.chatters : {}, n = r ? r.chatter_count : 0, this.logger.debug("Updated viewers list with " + n + " viewers"), this.setState({
                                            viewers: a,
                                            viewerCount: n,
                                            isLoading: !1
                                        }), this.props.latencyTracking.reportCustomEvent(t), [2]
                                }
                            })
                        })
                    }, t = i.__decorate([Object(u.b)("ViewersList", {
                        autoReportInteractive: !0
                    })], t)
                }(a.Component);
            var _ = Object(n.connect)(null, function(e) {
                return Object(s.bindActionCreators)({
                    onShowViewerCard: c.e
                }, e)
            })(b);
            r.d(t, "ChatViewers", function() {
                return _
            })
        },
        ETVK: function(e, t, r) {},
        h1Iv: function(e, t, r) {}
    }
]);