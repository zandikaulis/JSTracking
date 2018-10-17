(window.webpackJsonp = window.webpackJsonp || []).push([
    [30], {
        "+Mtq": function(e, t, n) {},
        "4VQm": function(e, t, n) {
            "use strict";
            var r, a = n("mrSG"),
                i = n("TSYQ"),
                s = n("17x9"),
                o = n("q1tI"),
                l = n("GxwZ"),
                c = n("N0BP"),
                u = (n("+Mtq"), 100);
            ! function(e) {
                e[e.Resize = 0] = "Resize", e[e.Scroll = 1] = "Scroll", e[e.Wheel = 2] = "Wheel"
            }(r || (r = {}));
            var m = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.root = null, n.scrollContent = null, n.xScrollContent = null, n.resizeTimeout = 0, n.receivers = [], n.scrollTimeout = 0, n.wheelTimeout = 0, n.getChildContext = function() {
                        return {
                            registerReceiver: n.registerReceiver,
                            requestVisibilityCheck: n.requestVisibilityCheck,
                            getScrollContent: n.getScrollContent,
                            scrollToTop: n.scrollToTop,
                            yScrollTo: n.yScrollTo
                        }
                    }, n.scrollToBottom = function() {
                        n.scrollContent && n.yScrollTo(n.scrollContent.scrollHeight)
                    }, n.scrollToTop = function() {
                        n.yScrollTo(0)
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
                        if (!n.resizeTimeout && n.scrollContent) {
                            var e = {
                                type: r.Resize,
                                offset: n.scrollContent.scrollTop
                            };
                            n.props.disableDebounce ? n.notifyReceivers(e) : n.resizeTimeout = setTimeout(function() {
                                n.resizeTimeout = 0, n.notifyReceivers(e)
                            }, u)
                        }
                    }, n.onScroll = function() {
                        if (!n.scrollTimeout && n.scrollContent) {
                            var e = {
                                type: r.Scroll,
                                offset: n.scrollContent.scrollTop
                            };
                            n.props.disableDebounce ? n.notifyReceivers(e) : n.scrollTimeout = setTimeout(function() {
                                n.scrollTimeout = 0, n.notifyReceivers(e)
                            }, u)
                        }
                    }, n.onWheel = function(e) {
                        if (!n.wheelTimeout && n.scrollContent) {
                            var t = {
                                type: r.Wheel,
                                offset: n.scrollContent.scrollTop,
                                wheelEvent: e
                            };
                            n.props.disableDebounce ? n.notifyReceivers(t) : n.wheelTimeout = setTimeout(function() {
                                n.wheelTimeout = 0, n.notifyReceivers(t)
                            }, u)
                        }
                    }, n.registerReceiver = function(e) {
                        return n.scrollContext && n.scrollContext.registerReceiver && n.scrollContext.registerReceiver(e), n.receivers.push(e), n.requestVisibilityCheck(e),
                            function() {
                                var t = n.receivers.indexOf(e);
                                n.receivers.splice(t, 1)
                            }
                    }, n.requestVisibilityCheck = function(e) {
                        requestAnimationFrame(function() {
                            var t = n.scrollContent;
                            if (t) {
                                var r = t.getBoundingClientRect();
                                e.checkVisible(r)
                            }
                        })
                    }, n.setRef = function(e) {
                        return n.root = e
                    }, n.yScrollTo = function(e) {
                        n.scrollContent && (n.scrollContent.scrollTop = e), n.onScroll()
                    }, n.getScrollContent = function() {
                        return n.scrollContent
                    }, n.createSimpleBarOptions = function() {
                        return {
                            autoHide: void 0 === n.props.autoHide || n.props.autoHide
                        }
                    }, t.scrollRef && t.scrollRef(n), n
                }
                return a.__extends(t, e), t.prototype.componentDidMount = function() {
                    if (this.scrollContext = this.context, this.root) {
                        if (this.simplebarRef = new l(this.root, this.createSimpleBarOptions()), this.scrollContent = this.simplebarRef.getScrollElement(), this.xScrollContent = this.simplebarRef.getContentElement(), this.props.contentRef && this.props.contentRef(this.scrollContent), this.props.contentClassName) {
                            var e = this.scrollContent.querySelector(".simplebar-content");
                            e && e.classList.add(this.props.contentClassName)
                        }
                        this.props.scrollContentClassName && this.scrollContent.classList.add(this.props.scrollContentClassName), window.addEventListener("resize", this.onResize), this.scrollContent.addEventListener("scroll", this.onScroll), this.xScrollContent.addEventListener("scroll", this.onScroll), this.scrollContent.addEventListener("wheel", this.onWheel), this.notifyReceivers()
                    }
                }, t.prototype.componentWillUnmount = function() {
                    this.root && (delete this.simplebarRef, window.removeEventListener("resize", this.onResize), this.scrollContent && this.scrollContent.removeEventListener("scroll", this.onScroll), this.xScrollContent && this.xScrollContent.removeEventListener("scroll", this.onScroll))
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = (e.disableDebounce, e.suppressScrollX, e.suppressScrollY, e.scrollRef, e.scrollContentClassName, e.contentClassName, a.__rest(e, ["disableDebounce", "suppressScrollX", "suppressScrollY", "scrollRef", "scrollContentClassName", "contentClassName"])),
                        n = {
                            "scrollable-area": !0,
                            "scrollable-area--suppress-scroll-x": this.props.suppressScrollX,
                            "scrollable-area--suppress-scroll-y": this.props.suppressScrollY
                        };
                    return o.createElement("div", a.__assign({
                        className: i(t.className, n),
                        "data-test-selector": "scrollable-area-wrapper",
                        ref: this.setRef
                    }, Object(c.a)(this.props), {
                        style: this.props.style
                    }), o.Children.only(this.props.children))
                }, t.contextTypes = {
                    registerReceiver: s.func
                }, t.childContextTypes = {
                    registerReceiver: s.func,
                    requestVisibilityCheck: s.func,
                    getScrollContent: s.func,
                    scrollToTop: s.func,
                    yScrollTo: s.func
                }, t
            }(o.Component);
            n.d(t, !1, function() {
                return "scrollable-area-wrapper"
            }), n.d(t, "a", function() {
                return r
            }), n.d(t, "b", function() {
                return m
            })
        },
        "8/mp": function(e, t, n) {
            "use strict";
            var r = n("4VQm"),
                a = n("HAa/"),
                i = n("/MKj"),
                s = n("mrSG"),
                o = n("17x9"),
                l = n("q1tI"),
                c = n("/7QA"),
                u = n("Ue10"),
                m = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.getStyles = function() {
                            if (n.props.disableStickiness) return {
                                position: "relative"
                            };
                            var e = n.state,
                                t = e.anchoredBottom,
                                r = e.anchoredTop,
                                a = e.top,
                                i = e.width,
                                s = t || r,
                                o = "absolute";
                            return window.outerWidth < (n.props.disableStickinessBelowWidth || 0) ? (o = "inherit", s = !1) : s && (o = "fixed"), {
                                position: o,
                                top: r ? "inherit" : a,
                                width: s ? i : "inherit"
                            }
                        }, n.lockBottom = function(e) {
                            n.element && n.setState({
                                anchoredBottom: !0,
                                top: window.innerHeight - e,
                                width: n.element.getBoundingClientRect().width
                            })
                        }, n.lockTop = function() {
                            n.element && n.setState({
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
                    return s.__extends(t, e), t.prototype.componentDidMount = function() {
                        if (this.element) {
                            var e = this.element.getBoundingClientRect();
                            this.setState({
                                offsetTop: e.top
                            })
                        }
                        var t = this.context.registerReceiver;
                        t ? this.unregister = t(this) : c.k.warn("<StickyContainer /> initialized missing a <ScrollableArea /> provider")
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        this.props.sideNavExpanded !== e.sideNavExpanded && this.resizeStickyColumn()
                    }, t.prototype.componentWillUnmount = function() {
                        this.unregister && this.unregister()
                    }, t.prototype.render = function() {
                        return l.createElement(u.Xa, {
                            position: u.fb.Relative,
                            fullWidth: !0
                        }, l.createElement("div", {
                            className: "sticky-container",
                            ref: this.setRef,
                            style: this.getStyles()
                        }, this.props.children))
                    }, t.prototype.checkVisible = function(e, t) {
                        return s.__awaiter(this, void 0, void 0, function() {
                            var e, n, a, i, o;
                            return s.__generator(this, function(s) {
                                return !t || t.type !== r.a.Resize && t.type !== r.a.Wheel && t.type !== r.a.Scroll || (e = this.state.anchoredBottom || this.state.anchoredTop, n = t.offset >= (this.state.lastOffset || 0), t.type === r.a.Resize ? (this.unlock(t.offset), this.checkBounding(n, t.offset)) : t.wheelEvent && t.type === r.a.Wheel && e ? (a = t.wheelEvent, i = void 0, i = 0 === a.deltaMode ? a.deltaY || a.wheelDelta : 16 * a.deltaY, o = i + t.offset, this.context.yScrollTo(o), this.checkBounding(i > 0, t.offset)) : t.type !== r.a.Scroll || t.offset === this.state.lastOffset || e || this.checkBounding(n, t.offset)), [2]
                            })
                        })
                    }, t.prototype.checkBounding = function(e, t) {
                        e && this.state.anchoredTop && this.unlock(t), !e && this.state.anchoredBottom && this.unlock(t), this.state.anchoredBottom || this.state.anchoredTop || this.shouldLock(e), this.setState({
                            lastOffset: t
                        })
                    }, t.prototype.shouldLock = function(e) {
                        if (this.element) {
                            var t = this.element.getBoundingClientRect(),
                                n = this.state.offsetTop || 0;
                            if (t.height < window.innerHeight - n) this.lockTop();
                            else {
                                var r = t.top < n,
                                    a = t.top >= window.innerHeight,
                                    i = t.bottom < n,
                                    s = t.bottom + (this.props.bottomPixelThreshold || 0) >= window.innerHeight,
                                    o = !a && !r,
                                    l = !s && !i;
                                !o && !l || o && l || (!e && o && this.lockTop(), e && l && this.lockBottom(t.height + (this.props.bottomPixelThreshold || 0))), r && i && this.lockBottom(t.height + (this.props.bottomPixelThreshold || 0)), a && s && this.lockTop()
                            }
                        }
                    }, t.prototype.unlock = function(e) {
                        if (this.element) {
                            var t, n = this.state,
                                r = n.offsetTop,
                                a = n.width,
                                i = this.element.getBoundingClientRect(),
                                s = window.innerHeight - (r || 0),
                                o = a;
                            t = "inherit", i.height <= s ? o = "inherit" : this.state.anchoredTop ? t = e : this.state.anchoredBottom && (t = e - i.height + s - (this.props.bottomPixelThreshold || 0)), this.setState({
                                top: t,
                                width: o,
                                anchoredBottom: !1,
                                anchoredTop: !1
                            })
                        }
                    }, t.contextTypes = {
                        registerReceiver: o.func,
                        yScrollTo: o.func
                    }, t
                }(l.Component);
            var p = Object(i.connect)(function(e) {
                return {
                    sideNavExpanded: e.ui.sideNavExpanded
                }
            })(m);
            n.d(t, "b", function() {
                return r.b
            }), n.d(t, "a", function() {
                return a.a
            }), n.d(t, "c", function() {
                return p
            })
        },
        "D2+s": function(e, t, n) {
            "use strict";
            var r, a = n("mrSG"),
                i = n("q1tI"),
                s = n("/MKj"),
                o = n("fvjX"),
                l = n("/7QA"),
                c = n("ZS2+"),
                u = n("/0dD"),
                m = n("76Lv"),
                p = n("D7An"),
                d = n("jUl1"),
                h = n("8/mp"),
                f = n("oUNp"),
                y = n("Ue10"),
                v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.openEditing = function(e) {
                            t.props.openEditing(e)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e, t, n = this,
                            r = this.props.override,
                            a = void 0 !== r;
                        return "boolean" == typeof this.props.settingData ? t = i.createElement(y.Xa, null, this.renderToggle(this.props.settingKey, !!this.props.settingData, r)) : (t = i.createElement(y.W, {
                            wordBreak: y.ac.BreakAll
                        }, a ? JSON.stringify(r) : JSON.stringify(this.props.settingData)), e = i.createElement(y.Xa, {
                            margin: {
                                left: 1
                            }
                        }, i.createElement(y.A, {
                            ariaLabel: "Edit",
                            icon: y.pb.Edit,
                            key: this.props.settingKey,
                            onClick: function() {
                                return n.openEditing(n.props.settingKey)
                            },
                            blurAfterClick: !0
                        }))), i.createElement(y.yb, {
                            margin: {
                                bottom: 1,
                                right: 1
                            },
                            padding: 1,
                            color: y.O.Base,
                            display: y.X.Flex,
                            justifyContent: y.Wa.Between,
                            border: !0,
                            borderMarked: a,
                            key: this.props.settingKey
                        }, i.createElement(y.Ea, {
                            label: this.props.settingKey
                        }, t), e)
                    }, t.prototype.renderToggle = function(e, t, n) {
                        var r = this;
                        return i.createElement(y.Qb, {
                            onChange: function(n) {
                                var a = n.currentTarget.checked;
                                r.props.setOverride(e, a === t ? void 0 : a)
                            },
                            checked: void 0 === n ? t : !!n
                        })
                    }, t
                }(i.Component),
                g = (n("ZHMB"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            value: t.props.value
                        }, t.onValueChange = function(e) {
                            t.setState({
                                value: e.target.value
                            })
                        }, t.saveOverride = function() {
                            t.props.saveOverride(t.props.overrideKey, t.state.value)
                        }, t.removeOverride = function() {
                            t.props.saveOverride(t.props.overrideKey, void 0), t.props.close()
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = "string" == typeof this.state.value ? this.state.value : JSON.stringify(this.props.value);
                        return i.createElement(h.b, {
                            contentClassName: "dynamic-setting-edit__content"
                        }, i.createElement(y.yb, {
                            background: y.r.Alt,
                            padding: 1,
                            fullWidth: !0,
                            display: y.X.Flex,
                            flexDirection: y.Aa.Column,
                            overflow: y.ab.Hidden
                        }, i.createElement(y.W, {
                            fontSize: y.Ca.Size3,
                            color: y.O.Alt
                        }, this.props.overrideKey), i.createElement(y.Xa, {
                            display: y.X.Flex,
                            alignItems: y.f.Stretch,
                            margin: {
                                y: 1
                            },
                            fullHeight: !0
                        }, i.createElement(y.Lb, {
                            placeholder: "(undefined)",
                            onChange: this.onValueChange,
                            value: e,
                            noResize: !0
                        })), i.createElement(y.Xa, {
                            flexShrink: 0,
                            display: y.X.Flex,
                            flexDirection: y.Aa.Column,
                            alignItems: y.f.End
                        }, this.props.error && i.createElement(y.Xa, {
                            margin: {
                                bottom: 1
                            }
                        }, i.createElement(y.W, {
                            color: y.O.Error
                        }, this.props.error)), i.createElement(y.Xa, {
                            display: y.X.Flex,
                            justifyContent: y.Wa.End
                        }, i.createElement(y.Xa, {
                            display: y.X.InlineBlock,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(y.z, {
                            onClick: this.props.close,
                            type: y.F.Hollow
                        }, "Cancel")), this.props.hasOverride && i.createElement(y.Xa, {
                            display: y.X.InlineBlock,
                            margin: {
                                right: 1
                            }
                        }, i.createElement(y.z, {
                            type: y.F.Alert,
                            onClick: this.removeOverride
                        }, "Remove Override")), i.createElement(y.z, {
                            disabled: this.props.value === e,
                            onClick: this.saveOverride
                        }, "Save Override")))))
                    }, t
                }(i.Component));

            function E(e) {
                return e.toLowerCase().replace(/\s|_/g, "")
            }! function(e) {
                e.OverridesOnLoad = "PAGE LOADED WITH OVERRIDES ACTIVE", e.OverridesRequireRefresh = "Refresh the page to see your changes.", e.None = ""
            }(r || (r = {}));
            var b = n("kgc7"),
                S = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            searchQuery: "",
                            dynamicSettingError: "",
                            overrides: Object(b.a)(),
                            editingOverrideKey: ""
                        }, t.dynamicSettings = window.__twilightSettings, t.filteredDynamicSettings = function() {
                            return "" === t.state.searchQuery ? Object.keys(t.dynamicSettings) : Object.keys(t.dynamicSettings).filter(function(e) {
                                return E(e).includes(t.state.searchQuery)
                            })
                        }, t.openEditing = function(e) {
                            t.setState({
                                editingOverrideKey: e
                            })
                        }, t.closeEditing = function() {
                            t.setState({
                                editingOverrideKey: "",
                                dynamicSettingError: ""
                            })
                        }, t.setOverride = function(e, n) {
                            var i = a.__assign({}, t.state.overrides);
                            if (void 0 === n) delete i[e];
                            else {
                                var s = void 0;
                                try {
                                    s = JSON.parse(n)
                                } catch (e) {
                                    s = n
                                }
                                var o = typeof t.dynamicSettings[e],
                                    c = typeof s;
                                if (o !== c) return void t.setState({
                                    dynamicSettingError: "Invalid entry: <" + c + "> is not of type <" + o + ">"
                                });
                                i[e] = s
                            }
                            t.closeEditing(), t.setState({
                                overrides: i
                            }), l.m.set(f.b, i), t.props.showUrgentMessage(r.OverridesRequireRefresh)
                        }, t.onSearchTextChange = function(e) {
                            t.setState({
                                searchQuery: E(e.target.value)
                            })
                        }, t.clearOverrides = function() {
                            l.m.set(f.b, {}), t.setState({
                                overrides: {}
                            }), t.props.showUrgentMessage(r.OverridesRequireRefresh)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = Object.keys(this.state.overrides).length,
                            n = this.state.editingOverrideKey ? this.dynamicSettings[this.state.editingOverrideKey] : void 0,
                            r = this.state.editingOverrideKey ? this.state.overrides[this.state.editingOverrideKey] : void 0,
                            a = void 0 !== r,
                            s = a ? r : n;
                        return i.createElement(y.Xa, {
                            fullHeight: !0,
                            fullWidth: !0,
                            overflow: y.ab.Hidden,
                            padding: {
                                bottom: 2
                            }
                        }, i.createElement(y.Xa, {
                            padding: {
                                right: 1
                            },
                            display: y.X.Flex,
                            fullWidth: !0
                        }, i.createElement(y.Xa, {
                            flexGrow: 1
                        }, i.createElement(y.Ra, {
                            autoFocus: this.props.autoFocusInput,
                            type: y.Ta.Search,
                            onChange: this.onSearchTextChange,
                            placeholder: "Search for Dynamic Settings"
                        })), i.createElement(y.Xa, {
                            flexShrink: 1,
                            margin: {
                                left: 1
                            }
                        }, i.createElement(y.z, {
                            onClick: this.clearOverrides,
                            disabled: 0 === t
                        }, "clear overrides (", t, ")"))), i.createElement(y.Pa, {
                            fullWidth: !0
                        }, i.createElement(h.b, {
                            suppressScrollX: !0
                        }, i.createElement(y.Xa, {
                            padding: {
                                y: 1
                            }
                        }, this.filteredDynamicSettings().map(function(t) {
                            return i.createElement(v, {
                                key: t,
                                settingKey: t,
                                override: e.state.overrides[t],
                                settingData: window.__twilightSettings[t],
                                openEditing: e.openEditing,
                                setOverride: e.setOverride
                            })
                        })))), this.state.editingOverrideKey && i.createElement(y.yb, {
                            position: y.fb.Absolute,
                            attachTop: !0,
                            attachLeft: !0,
                            fullHeight: !0,
                            fullWidth: !0,
                            padding: 1,
                            background: y.r.Overlay
                        }, i.createElement(g, {
                            close: this.closeEditing,
                            saveOverride: this.setOverride,
                            overrideKey: this.state.editingOverrideKey,
                            value: s,
                            hasOverride: a,
                            error: this.state.dynamicSettingError
                        })))
                    }, t
                }(i.Component),
                _ = n("p46w"),
                C = n("pCxu"),
                k = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onOverrideSelect = function(e) {
                            var n = t.props.override === e ? void 0 : e;
                            t.props.setOverride(t.props.experimentData.id, n)
                        }, t
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this,
                            t = l.p.experiments.getAssignments();
                        if (!t) return null;
                        var n = this.props.experimentData,
                            r = void 0 !== this.props.override;
                        return i.createElement(y.yb, {
                            margin: {
                                bottom: 1,
                                right: 1
                            },
                            padding: 1,
                            color: y.O.Base,
                            display: y.X.Flex,
                            alignItems: y.f.Center,
                            justifyContent: y.Wa.Between,
                            border: !0,
                            borderMarked: r
                        }, i.createElement(y.Ea, {
                            label: n.name
                        }, i.createElement(y.Xa, {
                            display: y.X.Flex,
                            flexDirection: y.Aa.Column,
                            fullWidth: !0,
                            ellipsis: !0
                        }, n.groups.map(function(a) {
                            var s = r ? e.props.override : t[n.id];
                            return i.createElement(y.Xa, {
                                margin: {
                                    bottom: .5
                                },
                                key: a.value
                            }, i.createElement(y.lb, {
                                onChange: function() {
                                    return e.onOverrideSelect(a.value)
                                },
                                label: a.value,
                                name: n.name,
                                checked: s === a.value
                            }))
                        }))))
                    }, t
                }(i.Component);
            var x = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.experiments = Object.keys(window.__twilightSettings.experiments).filter(function(e) {
                            return !!p.a[e]
                        }).reduce(function(e, t) {
                            return e[t] = a.__assign({
                                id: t
                            }, window.__twilightSettings.experiments[t]), e
                        }, {}), n.renderExperimentsDisabled = function() {
                            return i.createElement(y.Xa, null, i.createElement(y.W, {
                                fontSize: y.Ca.Size5
                            }, "Experiments are disabled from local storage."), i.createElement(y.Xa, {
                                margin: {
                                    top: 1
                                }
                            }, i.createElement(y.z, {
                                onClick: n.enableExperiments
                            }, "Enable experiments and reload")))
                        }, n.enableExperiments = function() {
                            l.p.storage.set(C.b, !1), window.location.reload()
                        }, n.filteredExperiments = function() {
                            return "" === n.state.searchQuery ? Object.keys(n.experiments) : Object.keys(n.experiments).filter(function(e) {
                                return E(n.experiments[e].name).includes(n.state.searchQuery)
                            })
                        }, n.onExperimentSearchTextChange = function(e) {
                            n.setState({
                                searchQuery: E(e.target.value)
                            })
                        }, n.setOverride = function(e, t) {
                            var i = a.__assign({}, n.state.overrides);
                            t ? i[e] = t : delete i[e], n.setState({
                                overrides: i
                            }), _.set(l.a.experimentsOverrideCookie, JSON.stringify(i)), n.props.showUrgentMessage(r.OverridesRequireRefresh)
                        }, n.clearOverrides = function() {
                            _.set(l.a.experimentsOverrideCookie, JSON.stringify({})), n.setState({
                                overrides: {}
                            }), n.props.showUrgentMessage(r.OverridesRequireRefresh)
                        }, n.state = {
                            searchQuery: "",
                            overrides: Object(b.b)()
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        if (!l.p.experiments.getAssignments()) return this.renderExperimentsDisabled();
                        var t = Object.keys(this.state.overrides).length;
                        return i.createElement(y.Xa, {
                            fullHeight: !0,
                            fullWidth: !0,
                            overflow: y.ab.Hidden,
                            padding: {
                                bottom: 2
                            }
                        }, i.createElement(y.Xa, {
                            padding: {
                                right: 1
                            },
                            display: y.X.Flex,
                            fullWidth: !0
                        }, i.createElement(y.Xa, {
                            flexGrow: 1
                        }, i.createElement(y.Ra, {
                            autoFocus: this.props.autoFocusInput,
                            type: y.Ta.Search,
                            onChange: this.onExperimentSearchTextChange,
                            placeholder: "Search for Experiments"
                        })), i.createElement(y.Xa, {
                            flexShrink: 1,
                            margin: {
                                left: 1
                            }
                        }, i.createElement(y.z, {
                            onClick: this.clearOverrides,
                            disabled: 0 === t
                        }, "Clear overrides (", t, ")"))), i.createElement(y.Pa, {
                            fullWidth: !0
                        }, i.createElement(h.b, null, i.createElement(y.Xa, {
                            padding: {
                                y: 1
                            }
                        }, this.filteredExperiments().map(function(t) {
                            var n = e.state.overrides[t];
                            return i.createElement(k, {
                                key: t,
                                experimentData: e.experiments[t],
                                override: n,
                                setOverride: e.setOverride
                            })
                        })))))
                    }, t
                }(i.Component),
                w = n("EuNP");
            n("d048");
            n.d(t, "a", function() {
                return N
            }), n.d(t, "b", function() {
                return D
            });
            var T, N = "twilight.perf-hide",
                B = "twilight.perf-size",
                O = "twilight.staff-tab",
                R = 3,
                X = c.a.wrap(function() {
                    return n.e(32).then(n.bind(null, "Msj/"))
                }, "DesktopInformation");
            ! function(e) {
                e.Latency = "Latency", e.Experiments = "Experiments", e.DynamicSettings = "Dynamic Settings", e.Desktop = "Desktop Latency"
            }(T || (T = {}));
            var q = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.showUrgentMessage = function(e) {
                            n.setState({
                                urgentMessage: e
                            })
                        }, n.renderDesktopStaffTabButton = function() {
                            return l.p.integrations.app ? n.renderStaffTabButton(T.Desktop, y.pb.Desktop) : null
                        }, n.renderStaffTabButton = function(e, t, r) {
                            void 0 === r && (r = !1);
                            var a = n.state.selectedTab === e;
                            return i.createElement(y.Rb, {
                                label: e,
                                direction: y.Tb.Right
                            }, i.createElement(y.A, {
                                onClick: function() {
                                    n.setState({
                                        selectedTab: e
                                    }), l.m.set(O, e)
                                },
                                icon: t,
                                size: y.B.Large,
                                overlay: !a,
                                ariaLabel: "Go To " + e,
                                type: a ? y.C.Primary : y.C.Default,
                                blurAfterClick: !0
                            }), r && i.createElement(y.Xa, {
                                position: y.fb.Relative
                            }, i.createElement(y.Xa, {
                                position: y.fb.Absolute,
                                attachTop: !0,
                                attachRight: !0
                            }, i.createElement(y.cb, {
                                label: "!",
                                type: y.db.Notification
                            }))))
                        }, n.onReload = function() {
                            location.reload()
                        }, n.onClickWindowSize = function() {
                            var e = n.state.size + 1;
                            e > R && (e = 0), l.m.set(B, e.toString()), n.setState({
                                size: e
                            })
                        }, n.onClickClose = function() {
                            n.props.hideStaffConsole()
                        };
                        var a = Object.keys(Object(b.b)()).length > 0,
                            s = Object.keys(Object(b.a)()).length > 0,
                            o = a || s ? r.OverridesOnLoad : r.None;
                        return n.state = {
                            size: l.m.get(B, 0),
                            selectedTab: l.m.get(O, T.Latency),
                            urgentMessage: o
                        }, n
                    }
                    return a.__extends(t, e), t.prototype.componentWillMount = function() {
                        l.p.experiments.getAssignment(p.b.ClipsOnTheBrain)
                    }, t.prototype.render = function() {
                        if (this.props.hidden) return null;
                        var e = Object.keys(Object(b.b)()).length > 0,
                            t = Object.keys(Object(b.a)()).length > 0;
                        return i.createElement(y.yb, {
                            className: "staff-console staff-console--size-" + this.state.size + " " + Object(m.b)(u.a.Dark),
                            position: y.fb.Fixed,
                            display: y.X.Flex
                        }, i.createElement(y.yb, {
                            display: y.X.Flex,
                            border: !0,
                            fullWidth: !0
                        }, i.createElement(y.yb, {
                            className: "staff-consol__select-bar",
                            flexShrink: 1,
                            flexGrow: 0,
                            display: y.X.Flex,
                            flexDirection: y.Aa.Column,
                            borderRight: !0
                        }, this.renderStaffTabButton(T.Latency, y.pb.OP), this.renderStaffTabButton(T.Experiments, y.pb.Experiment, e), this.renderStaffTabButton(T.DynamicSettings, y.pb.NavSettings, t), this.renderDesktopStaffTabButton()), i.createElement(y.Xa, {
                            flexGrow: 1,
                            display: y.X.Flex,
                            flexDirection: y.Aa.Column,
                            overflow: y.ab.Hidden
                        }, i.createElement(y.yb, {
                            className: "staff-console__top-bar",
                            flexGrow: 0,
                            flexShrink: 0,
                            display: y.X.Flex,
                            justifyContent: y.Wa.Between,
                            flexWrap: y.Ba.NoWrap,
                            alignItems: y.f.Center,
                            borderBottom: !0
                        }, i.createElement(y.Xa, {
                            padding: {
                                left: 1
                            }
                        }, i.createElement(y.W, {
                            bold: !0,
                            fontSize: y.Ca.Size4,
                            type: y.Ob.Span
                        }, this.state.selectedTab)), i.createElement(y.Xa, {
                            display: y.X.Flex,
                            padding: {
                                right: .5
                            }
                        }, i.createElement(y.A, {
                            onClick: this.onClickWindowSize,
                            icon: y.pb.Maximize,
                            overlay: !0,
                            ariaLabel: "Change Size"
                        }), i.createElement(y.A, {
                            onClick: this.onClickClose,
                            icon: y.pb.Close,
                            overlay: !0,
                            ariaLabel: "Close"
                        }))), i.createElement(y.Xa, {
                            display: y.X.Flex,
                            position: y.fb.Relative,
                            flexGrow: 1,
                            fullHeight: !0,
                            padding: {
                                left: 1,
                                top: 1
                            },
                            overflow: y.ab.Hidden
                        }, this.renderTabContent(this.state.selectedTab)), i.createElement(y.yb, {
                            flexShrink: 0,
                            flexGrow: 0,
                            borderTop: !0
                        }, this.state.urgentMessage && i.createElement(y.yb, {
                            background: y.r.Accent,
                            padding: {
                                x: 1,
                                y: .5
                            },
                            display: y.X.Flex,
                            alignItems: y.f.Center,
                            justifyContent: y.Wa.Between
                        }, i.createElement(y.W, null, this.state.urgentMessage), this.state.urgentMessage === r.OverridesRequireRefresh && i.createElement(y.z, {
                            onClick: this.onReload,
                            size: y.D.Small,
                            type: y.F.Hollow,
                            overlay: !0
                        }, "Reload Page")), i.createElement(y.Xa, {
                            padding: {
                                x: 1,
                                y: .5
                            },
                            className: "staff-console__hint-text"
                        }, 'Press "Ctr/Cmd + Shift + S" to toggle Staff Console')))))
                    }, t.prototype.renderTabContent = function(e) {
                        switch (e) {
                            case T.Latency:
                                return i.createElement(w.a, {
                                    benchmarking: l.p.benchmarking
                                });
                            case T.Experiments:
                                return i.createElement(x, {
                                    showUrgentMessage: this.showUrgentMessage,
                                    autoFocusInput: this.props.hasBeenShownFromUI
                                });
                            case T.DynamicSettings:
                                return i.createElement(S, {
                                    showUrgentMessage: this.showUrgentMessage,
                                    autoFocusInput: this.props.hasBeenShownFromUI
                                });
                            case T.Desktop:
                                return i.createElement(X, null);
                            default:
                                return null
                        }
                    }, t
                }(i.Component),
                D = Object(s.connect)(function(e) {
                    return {
                        hidden: e.staffConsole.hidden,
                        hasBeenShownFromUI: e.staffConsole.hasBeenShownFromUI
                    }
                }, function(e) {
                    return Object(o.bindActionCreators)({
                        hideStaffConsole: d.b,
                        showStaffConsole: d.c
                    }, e)
                })(q)
        },
        EuNP: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("/7QA"),
                s = n("8/mp"),
                o = n("kz7j"),
                l = n("DiGQ"),
                c = function() {
                    function e() {}
                    return e.getComponentStats = function(t) {
                        var n = 0,
                            r = 0,
                            a = 0,
                            i = 0;
                        e.updateLatencyStatus(t.rootInitDuration, 800), e.updateLatencyStatus(t.pageLoadDuration, 2e3), e.updateLatencyStatus(t.componentDuration, 2e3);
                        var s = e.flattenTrackers(t);
                        s.forEach(function(t) {
                            e.updateLatencyStatus(t.componentDuration, 400)
                        });
                        var o = s.map(function(e) {
                            return e.componentDuration.value || 0
                        });
                        o.length > 0 && (n = o.reduce(function(e, t) {
                            return e + t
                        }), r = Math.max.apply(Math, o), i = Math.min.apply(Math, o), a = n / o.length);
                        var l = {};
                        return s.forEach(function(e) {
                            l[e.componentDuration.latencyStatus] || (l[e.componentDuration.latencyStatus] = 0), l[e.componentDuration.latencyStatus]++
                        }), {
                            rootTracker: t,
                            average: e.getLatencyStatus(a, 400),
                            count: e.getLatencyStatus(s.length, 200),
                            max: e.getLatencyStatus(r, 400),
                            min: e.getLatencyStatus(i, 400),
                            countByStatus: l
                        }
                    }, e.getNetworkStats = function(t) {
                        var n = t.networkEvents.filter(function(e) {
                            return e.isPrePageload
                        });
                        n.forEach(function(t) {
                            e.updateLatencyStatus(t.duration, 150)
                        });
                        var r = n.map(function(e) {
                                return e.networkEvent.duration
                            }),
                            a = n.map(function(e) {
                                return e.networkEvent.transfer_size || 0
                            }),
                            i = 0,
                            s = 0,
                            o = 0,
                            l = 0,
                            c = 0;
                        r.length && (i = r.reduce(function(e, t) {
                            return e + t
                        }), s = a.reduce(function(e, t) {
                            return e + t
                        }), o = Math.max.apply(Math, r), l = Math.min.apply(Math, r), c = i / r.length), n.sort(function(e, t) {
                            return (t.duration.value || 0) - (e.duration.value || 0)
                        });
                        var u = {};
                        return n.forEach(function(e) {
                            u[e.duration.latencyStatus] || (u[e.duration.latencyStatus] = 0), u[e.duration.latencyStatus]++
                        }), {
                            metrics: n,
                            average: e.getLatencyStatus(c, 150),
                            count: e.getLatencyStatus(n.length, 200),
                            max: e.getLatencyStatus(o, 150),
                            min: e.getLatencyStatus(l, 150),
                            totalSize: s,
                            countByStatus: u
                        }
                    }, e.getQueryBatchStats = function(t) {
                        var n = t.queryBatchMetrics,
                            r = n.map(function(e) {
                                return e.slowestQueryInBatch || 0
                            }),
                            a = Math.max.apply(Math, r),
                            i = {
                                batchCount: {
                                    value: n.length,
                                    latencyStatus: l.a.Unknown
                                },
                                slowestQuery: {
                                    value: a,
                                    latencyStatus: l.a.Unknown
                                }
                            };
                        return e.updateLatencyStatus(i.batchCount, 3), e.updateLatencyStatus(i.slowestQuery, 150), i
                    }, e.getQueryStats = function(t) {
                        var n = 0,
                            r = 0,
                            a = 0,
                            i = t.queryEvents;
                        i.forEach(function(t) {
                            e.updateLatencyStatus(t.requestDuration, 150), e.updateLatencyStatus(t.queryDuration, 150)
                        });
                        var s = i.map(function(e) {
                            return e.queryDuration.value || 0
                        });
                        s.length > 0 && (n = s.reduce(function(e, t) {
                            return e + t
                        }), r = Math.max.apply(Math, s), a = n / s.length), i.sort(function(e, t) {
                            return (t.queryDuration.value || 0) - (e.queryDuration.value || 0)
                        });
                        var o = {};
                        return i.forEach(function(e) {
                            o[e.queryDuration.latencyStatus] || (o[e.queryDuration.latencyStatus] = 0), o[e.queryDuration.latencyStatus]++
                        }), {
                            metrics: i,
                            count: e.getLatencyStatus(i.length, 200),
                            max: e.getLatencyStatus(r, 150),
                            average: e.getLatencyStatus(a, 150),
                            min: e.getLatencyStatus(0, 150),
                            countByStatus: o
                        }
                    }, e.getLatencyStatus = function(e, t) {
                        return void 0 === e ? {
                            value: e,
                            latencyStatus: l.a.Unknown
                        } : {
                            value: e,
                            latencyStatus: e > t ? l.a.Fail : l.a.Pass
                        }
                    }, e.updateLatencyStatus = function(e, t) {
                        e && void 0 !== e.value && (e.latencyStatus = e.value > t ? l.a.Fail : l.a.Pass)
                    }, e.flattenTrackers = function(t, n) {
                        return n || (n = []), t.isRoot || n.push(t), t.children.forEach(function(t) {
                            e.flattenTrackers(t, n)
                        }), n
                    }, e
                }(),
                u = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement("span", null, this.bytesToSize(this.props.totalSize))
                    }, t.prototype.bytesToSize = function(e) {
                        if (0 === e) return "0 Bytes";
                        var t = Math.floor(Math.log(e) / Math.log(1024));
                        return Math.round(e / Math.pow(1024, t)) + " " + ["Bytes", "KB", "MB", "GB", "TB"][t]
                    }, t
                }(a.Component),
                m = n("TSYQ"),
                p = n("j9uj"),
                d = (n("hiYg"), function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        n.onClickExpand = function() {
                            n.setState({
                                isExpanded: !n.state.isExpanded
                            })
                        };
                        var r = t.tracker.depth < 2;
                        return n.state = {
                            isExpanded: r
                        }, n
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return this.props.tracker.isRoot ? a.createElement("div", {
                            className: "latency-metrics-component"
                        }, a.createElement("div", {
                            className: "request-latency-metrics__header"
                        }, a.createElement("div", {
                            className: "request-latency-metrics__header-url"
                        }, "Component"), a.createElement("div", {
                            className: "request-latency-metrics__header-time"
                        }, "Started"), a.createElement("div", {
                            className: "request-latency-metrics__header-size"
                        }, "Duration")), a.createElement("ul", null, this.renderItem())) : this.renderItem()
                    }, t.prototype.renderItem = function() {
                        var e = this.props.tracker,
                            t = e.children.length > 0,
                            n = {
                                "latency-metrics-component__metrics": !0,
                                "latency-metrics-component__metrics-with-children": t
                            };
                        return a.createElement("li", null, a.createElement("div", {
                            className: m(n),
                            onClick: this.onClickExpand
                        }, a.createElement("div", {
                            className: "latency-metrics-component__left"
                        }, a.createElement("span", {
                            className: "latency-metrics-component__name"
                        }, e.componentName), " ", t && a.createElement("span", null, "(", e.children.length, ")")), a.createElement("div", {
                            className: "latency-metrics-component__time"
                        }, Math.round(e.relativeStartTime), " ms"), a.createElement("div", {
                            className: "latency-metrics-component__duration"
                        }, a.createElement(p.a, {
                            metric: e.componentDuration
                        }))), a.createElement("ul", null, this.state.isExpanded && e.children.map(function(e) {
                            return a.createElement(d, {
                                tracker: e,
                                key: e.id
                            })
                        })))
                    }, t
                }(a.Component)),
                h = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        if (this.props.metric.latencyStatus === l.a.Unknown || void 0 === this.props.metric.value) return a.createElement("span", {
                            className: "latency-metrics__dot-animation"
                        }, " ");
                        var e = this.props.metric.latencyStatus === l.a.Fail ? "red" : "green";
                        return a.createElement("span", {
                            className: "latency-metrics__item-number latency-metrics__item-" + e
                        }, this.props.metric.value)
                    }, t
                }(a.Component),
                f = (n("L/sm"), function(e) {
                    function t(t) {
                        return e.call(this, t) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        return a.createElement("div", {
                            className: "query-metrics"
                        }, a.createElement("div", {
                            className: "query-metrics__header"
                        }, a.createElement("div", {
                            className: "query-metrics__header-batch"
                        }, "Batch"), a.createElement("div", {
                            className: "query-metrics__header-name"
                        }, "Name"), a.createElement("div", {
                            className: "query-metrics__header-time"
                        }, "Started"), a.createElement("div", {
                            className: "query-metrics__header-time"
                        }, "Request"), a.createElement("div", {
                            className: "query-metrics__header-time"
                        }, "Query")), this.props.queryMetrics.map(function(t) {
                            return e.renderItem(t)
                        }))
                    }, t.prototype.renderItem = function(e) {
                        var t = e.queryID;
                        return a.createElement("div", {
                            className: "query-metrics__item",
                            key: t
                        }, a.createElement("div", {
                            className: "query-metrics__item-batch"
                        }, e.batchID), a.createElement("div", {
                            className: "query-metrics__item-name"
                        }, this.renderQueryTitle(e)), a.createElement("div", {
                            className: "query-metrics__item-time"
                        }, Math.round(e.relativeStartTime), " ms"), a.createElement("div", {
                            className: "query-metrics__item-time"
                        }, e.requestDuration && e.requestDuration.latencyStatus && a.createElement(p.a, {
                            metric: e.requestDuration
                        })), a.createElement("div", {
                            className: "query-metrics__item-time"
                        }, a.createElement(p.a, {
                            metric: e.queryDuration
                        })))
                    }, t.prototype.renderQueryTitle = function(e) {
                        var t = e.variables && e.variables;
                        return t && t.id ? a.createElement("span", null, e.operationName, " (id: ", t.id, ")") : a.createElement("span", null, e.operationName)
                    }, t
                }(a.Component)),
                y = (n("cIQa"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        var e = this;
                        return a.createElement("div", {
                            className: "request-latency-metrics"
                        }, a.createElement("div", {
                            className: "request-latency-metrics__header"
                        }, a.createElement("div", {
                            className: "request-latency-metrics__header-url"
                        }, "Url"), a.createElement("div", {
                            className: "request-latency-metrics__header-time"
                        }, "Started"), a.createElement("div", {
                            className: "request-latency-metrics__header-size"
                        }, "Size"), a.createElement("div", {
                            className: "request-latency-metrics__header-time"
                        }, "Time")), this.props.metricsGroup.metrics.map(function(t) {
                            return e.renderItem(t)
                        }))
                    }, t.prototype.getDisplayLink = function(e) {
                        var t = new URL(e),
                            n = t.hostname + t.pathname;
                        if (n.length < 24) return n;
                        var r = t.pathname.substring(t.pathname.lastIndexOf("/"));
                        r || i.k.warn("Failed to parse url", {
                            url: t,
                            fileName: r
                        });
                        var a = r.split(".");
                        return 3 === a.length && (r = a[0] + "." + a[2]), r.length > 24 && (r = r.substring(0, 16) + "..." + r.substring(r.lastIndexOf(".") - 4)), t.hostname + r
                    }, t.prototype.renderItem = function(e) {
                        var t = e.networkEvent,
                            n = t.request_url + ":" + t.duration + ":" + t.start_time;
                        return a.createElement("div", {
                            className: "request-latency-metrics__item",
                            key: n
                        }, a.createElement("div", {
                            className: "request-latency-metrics__item-url",
                            title: t.request_url
                        }, a.createElement("div", null, this.getDisplayLink(t.request_url))), a.createElement("div", {
                            className: "request-latency-metrics__item-time"
                        }, Math.round(e.relativeStartTime), " ms"), a.createElement("div", {
                            className: "request-latency-metrics__item-size"
                        }, t.transfer_size && t.transfer_size > 0 ? a.createElement(u, {
                            totalSize: t.transfer_size
                        }) : a.createElement("span", null)), a.createElement("div", {
                            className: "request-latency-metrics__item-time"
                        }, a.createElement(p.a, {
                            metric: e.duration
                        })))
                    }, t
                }(a.Component)),
                v = n("Ue10"),
                g = (n("LQTS"), "twilight.perf-tab"),
                E = function(e) {
                    function t(t) {
                        var n = e.call(this, t) || this;
                        return n.renderTab = function(e, t, r) {
                            var i = n.state.selectedTab === e;
                            return a.createElement(v.zb, {
                                active: i,
                                onClick: function() {
                                    return n.onClickTab(e)
                                }
                            }, a.createElement(v.Xa, {
                                display: v.X.Flex
                            }, t, r && n.renderTabBubble(r)))
                        }, n.renderTabBubble = function(e) {
                            return a.createElement(v.Xa, {
                                margin: {
                                    left: .5
                                }
                            }, a.createElement(v.cb, {
                                label: e.toString(),
                                type: v.db.Notification
                            }))
                        }, n.onClickTab = function(e) {
                            i.m.set(g, e), n.setState({
                                selectedTab: e
                            })
                        }, n.onLatencyUpdate = function() {
                            var e = c.getComponentStats(n.tracker),
                                t = c.getNetworkStats(n.tracker),
                                r = c.getQueryStats(n.tracker),
                                a = c.getQueryBatchStats(n.tracker),
                                i = n.tracker.getCustomEvents();
                            n.setState({
                                componentStats: e,
                                networkStats: t,
                                queryStats: r,
                                queryBatchStats: a,
                                customEvents: i
                            })
                        }, n.tracker = t.benchmarking.getRootLatencyTracker(), n.state = {
                            selectedTab: i.m.get(g, "overview"),
                            componentStats: c.getComponentStats(n.tracker),
                            networkStats: c.getNetworkStats(n.tracker),
                            queryStats: c.getQueryStats(n.tracker),
                            queryBatchStats: c.getQueryBatchStats(n.tracker),
                            customEvents: n.tracker.getCustomEvents()
                        }, n.tracker.subscribeToUpdates(n.onLatencyUpdate), n
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        return a.createElement(v.Xa, {
                            display: v.X.Flex,
                            flexDirection: v.Aa.Column,
                            fullHeight: !0,
                            fullWidth: !0
                        }, a.createElement(v.Xa, {
                            className: "latency-metrics__header-container",
                            display: v.X.Flex,
                            justifyContent: v.Wa.Between,
                            flexWrap: v.Ba.NoWrap,
                            alignItems: v.f.Start
                        }, a.createElement(v.Ab, null, this.renderTab("overview", "Overview"), this.renderTab("components", "Components", this.state.componentStats.countByStatus[l.a.Fail]), this.renderTab("queries", "Queries", this.state.queryStats.countByStatus[l.a.Fail]), this.renderTab("requests", "Requests", this.state.networkStats.countByStatus[l.a.Fail]))), a.createElement(v.Xa, {
                            className: "latency-metrics__body",
                            display: v.X.Flex,
                            flexDirection: v.Aa.Column,
                            flexGrow: 1,
                            overflow: v.ab.Hidden,
                            fullHeight: !0
                        }, a.createElement(s.b, {
                            className: "latency-metrics__scroller"
                        }, a.createElement(v.Xa, {
                            margin: {
                                y: 1,
                                right: 1
                            }
                        }, "overview" === this.state.selectedTab && this.renderOverviewTab(), "components" === this.state.selectedTab && this.renderComponentsTab(), "queries" === this.state.selectedTab && this.renderQueriesTab(), "requests" === this.state.selectedTab && this.renderRequestsTab()))))
                    }, t.prototype.renderOverviewTab = function() {
                        var e = this,
                            t = this.state.networkStats,
                            n = this.state.queryStats,
                            r = this.state.queryBatchStats,
                            i = this.state.componentStats;
                        return a.createElement(v.Xa, null, a.createElement(v.Xa, {
                            className: "latency-metrics__item",
                            display: v.X.Flex,
                            justifyContent: v.Wa.Between,
                            flexWrap: v.Ba.NoWrap
                        }, a.createElement(v.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, a.createElement("span", null, o.c.FirstPaint)), a.createElement(v.Xa, {
                            className: "latency-metrics__item-right",
                            display: v.X.Flex,
                            flexWrap: v.Ba.NoWrap,
                            flexShrink: 0
                        }, a.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, this.tracker.isFirstLoad ? a.createElement(p.a, {
                            metric: this.tracker.firstPaint
                        }) : a.createElement("span", null, "n/a")))), a.createElement(v.Xa, {
                            className: "latency-metrics__item",
                            display: v.X.Flex,
                            justifyContent: v.Wa.Between,
                            flexWrap: v.Ba.NoWrap
                        }, a.createElement(v.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, a.createElement("span", null, "Initialize")), a.createElement(v.Xa, {
                            className: "latency-metrics__item-right",
                            display: v.X.Flex,
                            flexWrap: v.Ba.NoWrap,
                            flexShrink: 0
                        }, a.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, this.tracker.isFirstLoad ? a.createElement(p.a, {
                            metric: this.tracker.rootInitDuration
                        }) : a.createElement("span", null, "n/a")))), a.createElement(v.Xa, {
                            className: "latency-metrics__item",
                            display: v.X.Flex,
                            justifyContent: v.Wa.Between,
                            flexWrap: v.Ba.NoWrap
                        }, a.createElement(v.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, a.createElement("span", null, this.tracker.isFirstLoad ? "Page Load" : "App Transition")), a.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, a.createElement(p.a, {
                            metric: this.tracker.pageLoadDuration
                        }))), a.createElement(v.Xa, {
                            className: "latency-metrics__item",
                            display: v.X.Flex,
                            justifyContent: v.Wa.Between,
                            flexWrap: v.Ba.NoWrap
                        }, a.createElement(v.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, a.createElement("span", null, "Components (", i.count.value, ")")), a.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, a.createElement("span", {
                            className: "latency-metrics__item-stats"
                        }, a.createElement("span", {
                            className: "latency-metrics__item-stats-label"
                        }, "Slowest:"), a.createElement(p.a, {
                            metric: i.max
                        }), a.createElement("span", {
                            className: "latency-metrics__item-stats-label"
                        }, "Average:"), a.createElement(p.a, {
                            metric: i.average
                        })))), a.createElement(v.Xa, {
                            className: "latency-metrics__item",
                            display: v.X.Flex,
                            justifyContent: v.Wa.Between,
                            flexWrap: v.Ba.NoWrap
                        }, a.createElement(v.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, a.createElement("span", null, "Queries (", n.count.value, ")")), a.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, a.createElement("span", {
                            className: "latency-metrics__item-stats"
                        }, a.createElement("span", {
                            className: "latency-metrics__item-stats-label"
                        }, "Batches:"), a.createElement(h, {
                            metric: r.batchCount
                        }), a.createElement("span", {
                            className: "latency-metrics__item-stats-label"
                        }, "Slowest:"), a.createElement(p.a, {
                            metric: n.max
                        }), a.createElement("span", {
                            className: "latency-metrics__item-stats-label"
                        }, "Average:"), a.createElement(p.a, {
                            metric: n.average
                        })))), a.createElement(v.Xa, {
                            className: "latency-metrics__item",
                            display: v.X.Flex,
                            justifyContent: v.Wa.Between,
                            flexWrap: v.Ba.NoWrap
                        }, a.createElement(v.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, a.createElement("span", null, "Requests (", t.count.value, ")")), a.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, a.createElement("span", {
                            className: "latency-metrics__item-stats"
                        }, a.createElement("span", {
                            className: "latency-metrics__item-stats-label"
                        }, "Slowest:"), a.createElement(p.a, {
                            metric: t.max
                        }), a.createElement("span", {
                            className: "latency-metrics__item-stats-label"
                        }, "Average:"), a.createElement(p.a, {
                            metric: t.average
                        }), a.createElement("span", {
                            className: "latency-metrics__item-stats-label"
                        }, "Size:"), " ", a.createElement(u, {
                            totalSize: t.totalSize
                        })))), Object.keys(this.state.customEvents).map(function(t) {
                            return e.renderCustomEventGroup(t, e.state.customEvents[t])
                        }))
                    }, t.prototype.renderCustomEventGroup = function(e, t) {
                        var n = this;
                        return a.createElement(v.Xa, {
                            key: e,
                            className: "latency-metrics__item",
                            display: v.X.Flex,
                            justifyContent: v.Wa.Between,
                            flexWrap: v.Ba.NoWrap
                        }, a.createElement(v.Xa, {
                            className: "latency-metrics__item-left latency-metrics__item-name",
                            ellipsis: !0
                        }, a.createElement("span", null, e)), a.createElement("div", {
                            className: "latency-metrics__item-number"
                        }, t.map(function(e) {
                            return n.renderCustomEvent(e)
                        })))
                    }, t.prototype.renderCustomEvent = function(e) {
                        return a.createElement("span", {
                            key: e.key
                        }, a.createElement("span", {
                            className: "latency-metrics__item-stats-label"
                        }, e.label, ":"), " ", a.createElement(p.a, {
                            metric: e.duration
                        }))
                    }, t.prototype.renderComponentsTab = function() {
                        return a.createElement(d, {
                            tracker: this.tracker
                        })
                    }, t.prototype.renderRequestsTab = function() {
                        return a.createElement(y, {
                            metricsGroup: this.state.networkStats
                        })
                    }, t.prototype.renderQueriesTab = function() {
                        return a.createElement(f, {
                            queryMetrics: this.tracker.queryEvents
                        })
                    }, t
                }(a.Component);
            n.d(t, "a", function() {
                return E
            })
        },
        "HAa/": function(e, t, n) {
            "use strict";
            var r, a = n("mrSG"),
                i = n("TSYQ"),
                s = n("17x9"),
                o = n("q1tI"),
                l = n("/7QA");
            n("miXC");
            ! function(e) {
                e[e.Up = 0] = "Up", e[e.Down = 1] = "Down"
            }(r || (r = {}));
            var c = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasPendingLoadMoreRequest: !1,
                        loadedMore: !0
                    }, t.isTriggerVisible = function(e, t) {
                        var n = t.top,
                            r = t.top + t.height;
                        return !(e.bottom < n || e.top > r)
                    }, t.getOrientation = function() {
                        return void 0 === t.props.orientation ? r.Up : t.props.orientation
                    }, t.setWrapRef = function(e) {
                        return t.wrapElement = e
                    }, t.setRef = function(e) {
                        return t.element = e
                    }, t
                }
                return a.__extends(t, e), t.prototype.render = function() {
                    var e = this.getOrientation(),
                        t = i({
                            "scrollable-trigger__trigger-area": !0,
                            "scrollable-trigger__trigger-area--up": e === r.Up,
                            "scrollable-trigger__trigger-area--down": e === r.Down
                        }),
                        n = {
                            height: this.props.pixelThreshold || 100
                        };
                    return o.createElement("div", {
                        className: "scrollable-trigger__wrapper",
                        ref: this.setWrapRef
                    }, o.createElement("div", {
                        className: t,
                        ref: this.setRef,
                        style: n
                    }))
                }, t.prototype.componentDidMount = function() {
                    var e = this.context.registerReceiver;
                    e ? this.unregister = e(this) : l.k.warn("<InfiniteScrollTrigger /> initialized missing a <ScrollableArea /> provider")
                }, t.prototype.componentWillUnmount = function() {
                    this.unregister && this.unregister()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    !this.props.enabled && e.enabled && this.context.requestVisibilityCheck && this.context.requestVisibilityCheck(this)
                }, t.prototype.checkVisible = function(e, t, n) {
                    return a.__awaiter(this, void 0, void 0, function() {
                        var t, r, i, s, o = this;
                        return a.__generator(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (void 0 === n && (n = this.props.requestCap || 5), !(this.wrapElement && this.element && (this.state.loadedMore || this.props.forceLoadMoreContent) && !this.state.hasPendingLoadMoreRequest && this.props.enabled && n > 0)) return [3, 4];
                                    if (t = this.element.getBoundingClientRect(), r = this.props.contentLength, i = this.wrapElement.offsetTop, !this.isTriggerVisible(t, e)) return [3, 4];
                                    this.setState({
                                        hasPendingLoadMoreRequest: !0
                                    }), a.label = 1;
                                case 1:
                                    return a.trys.push([1, 3, , 4]), [4, this.props.loadMore()];
                                case 2:
                                    return a.sent(), this.setState({
                                        hasPendingLoadMoreRequest: !1
                                    }), requestAnimationFrame(function() {
                                        var t;
                                        o.element && (t = void 0 !== o.props.contentLength && void 0 !== r ? o.props.contentLength > r : o.wrapElement.offsetTop > i, o.setState({
                                            loadedMore: t
                                        }), n && (t || o.props.forceLoadMoreContent) && o.checkVisible(e, void 0, n - 1))
                                    }), [3, 4];
                                case 3:
                                    throw s = a.sent(), this.element && this.setState({
                                        hasPendingLoadMoreRequest: !1
                                    }), s;
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, t.contextTypes = {
                    registerReceiver: s.func,
                    requestVisibilityCheck: s.func
                }, t
            }(o.Component);
            n.d(t, "b", function() {
                return r
            }), n.d(t, "a", function() {
                return c
            })
        },
        "L/sm": function(e, t, n) {},
        LQTS: function(e, t, n) {},
        N0BP: function(e, t, n) {
            "use strict";

            function r(e) {
                for (var t = {}, n = 0, r = Object.keys(e).filter(function(e) {
                        return e.startsWith("data-")
                    }); n < r.length; n++) {
                    var a = r[n];
                    t[a] = e[a]
                }
                return t
            }
            n.d(t, "a", function() {
                return r
            })
        },
        NT6a: function(e, t, n) {
            "use strict";
            n.r(t);
            n("+WRV");
            var r = n("D2+s"),
                a = n("dUi4"),
                i = n("EuNP");
            n.d(t, "StaffConsole", function() {
                return r.b
            }), n.d(t, "StaffConsoleToggle", function() {
                return a.a
            }), n.d(t, "LatencyMetrics", function() {
                return i.a
            })
        },
        ZHMB: function(e, t, n) {},
        cIQa: function(e, t, n) {},
        d048: function(e, t, n) {},
        dUi4: function(e, t, n) {
            "use strict";
            var r = n("/MKj"),
                a = n("fvjX"),
                i = n("kRBY"),
                s = n("jUl1"),
                o = n("mrSG"),
                l = n("q1tI"),
                c = n("/7QA"),
                u = n("zB42"),
                m = n("NdhY"),
                p = n("D2+s"),
                d = n("Ue10"),
                h = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            isEnabled: c.a.forceBenchmarkingTools || c.m.get(m.b.forceToolsStorageKey, c.a.forceBenchmarkingTools)
                        }, t.toggleLocalCookie = function() {
                            c.m.set(p.a, t.state.isEnabled), c.m.set(m.b.forceToolsStorageKey, !t.state.isEnabled), location.reload()
                        }, t.onStaffConsoleToggle = function() {
                            t.props.staffConsoleHidden ? t.props.showStaffConsole() : t.props.hideStaffConsole()
                        }, t
                    }
                    return o.__extends(t, e), t.prototype.render = function() {
                        return this.props.isStaff || c.a.buildType !== u.a.Production ? l.createElement(d.yb, {
                            margin: {
                                bottom: 1
                            },
                            padding: {
                                x: 2
                            },
                            color: d.O.Alt
                        }, l.createElement(d.Xa, {
                            display: d.X.Flex,
                            alignItems: d.f.Center
                        }, l.createElement(d.Xa, {
                            margin: {
                                right: .5
                            },
                            flexShrink: 0
                        }, l.createElement(d.N, {
                            checked: this.state.isEnabled,
                            disabled: c.a.forceBenchmarkingTools,
                            onChange: this.toggleLocalCookie,
                            label: "Staff Console"
                        })), l.createElement(d.Xa, {
                            display: d.X.Flex,
                            alignItems: d.f.Center,
                            fullWidth: !0
                        }, !c.a.forceBenchmarkingTools && !this.state.isEnabled && l.createElement(d.Rb, {
                            label: "Enabling will reload the page"
                        }, l.createElement(d.ob, {
                            asset: d.pb.NotificationInfo,
                            width: 16,
                            height: 16
                        })), c.a.forceBenchmarkingTools && l.createElement(d.Rb, {
                            label: "Always enabled in dev"
                        }, l.createElement(d.ob, {
                            asset: d.pb.NotificationInfo,
                            width: 16,
                            height: 16
                        })), (this.state.isEnabled || c.a.forceBenchmarkingTools) && l.createElement(d.Xa, {
                            display: d.X.Flex,
                            margin: {
                                left: .5
                            },
                            fullWidth: !0,
                            justifyContent: d.Wa.End
                        }, l.createElement(d.A, {
                            onClick: this.onStaffConsoleToggle,
                            ariaLabel: "Staff Console Toggle",
                            icon: this.props.staffConsoleHidden ? d.pb.VisibilityShown : d.pb.VisibilityHidden,
                            blurAfterClick: !0,
                            size: d.B.Small
                        }))))) : null
                    }, t
                }(l.Component);
            var f = Object(r.connect)(function(e) {
                var t = Object(i.e)(e);
                return {
                    isStaff: t && t.roles && t.roles.isStaff,
                    staffConsoleHidden: e.staffConsole && e.staffConsole.hidden
                }
            }, function(e) {
                return Object(a.bindActionCreators)({
                    hideStaffConsole: s.b,
                    showStaffConsole: s.c
                }, e)
            })(h);
            n.d(t, "a", function() {
                return f
            })
        },
        hiYg: function(e, t, n) {},
        j9uj: function(e, t, n) {
            "use strict";
            var r = n("mrSG"),
                a = n("q1tI"),
                i = n("DiGQ"),
                s = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.render = function() {
                        if (this.props.metric.latencyStatus === i.a.Unknown || void 0 === this.props.metric.value) return a.createElement("span", {
                            className: "latency-metrics__dot-animation"
                        }, " ");
                        var e = this.props.metric.latencyStatus === i.a.Fail ? "red" : "green";
                        return a.createElement("span", {
                            className: "latency-metrics__item-number latency-metrics__item-" + e
                        }, Math.round(this.props.metric.value), " ms")
                    }, t
                }(a.Component);
            n.d(t, "a", function() {
                return s
            })
        },
        miXC: function(e, t, n) {}
    }
]);