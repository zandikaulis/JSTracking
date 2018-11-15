(window.webpackJsonp = window.webpackJsonp || []).push([
    [134], {
        BBBA: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a("mrSG"),
                r = a("q1tI"),
                s = a("9C/b"),
                o = a("fvjX"),
                i = a("V+GM"),
                c = a("NvVO"),
                d = a("2xye"),
                l = a("3ir2"),
                u = a("YTtd"),
                m = a("Wzgq"),
                p = a("GnwI"),
                h = a("/7QA"),
                g = a("fvh5"),
                f = a("Ue10"),
                y = (a("Fqw2"), function(e) {
                    var t = Object(h.g)(e.addon.downloadCount, {
                        maximumFractionDigits: 1
                    });
                    return r.createElement(f.Ya, {
                        display: f.X.Flex,
                        className: "featured-mod"
                    }, r.createElement(f.Ya, {
                        margin: {
                            bottom: .5
                        },
                        flexGrow: 0,
                        flexShrink: 0
                    }, r.createElement(f.S, {
                        alt: e.addon.name,
                        src: e.addon.primaryCategoryAvatarUrl,
                        className: "featured-mod__logo"
                    })), r.createElement(f.Ya, {
                        display: f.X.Flex,
                        flexDirection: f.Aa.Column,
                        margin: {
                            left: 1
                        },
                        flexGrow: 1,
                        flexShrink: 1,
                        overflow: f.db.Hidden
                    }, r.createElement(f.W, {
                        type: f.Wb.H2,
                        fontSize: f.Ca.Size4,
                        ellipsis: !0
                    }, e.addon.name), r.createElement(f.Ya, {
                        margin: {
                            bottom: .5
                        }
                    }, r.createElement(f.W, {
                        ellipsis: !0
                    }, e.addon.primaryCategoryName)), r.createElement(f.Ya, {
                        display: f.X.Flex
                    }, r.createElement(f.Ya, {
                        display: f.X.Flex
                    }, r.createElement(f.tb, {
                        asset: f.ub.Download
                    }), r.createElement(f.Ya, {
                        margin: {
                            left: .5
                        }
                    }, r.createElement(f.W, null, t))), r.createElement(f.Ya, {
                        display: f.X.Flex,
                        margin: {
                            left: 1
                        }
                    }, r.createElement(f.tb, {
                        asset: f.ub.NavProfile
                    }), r.createElement(f.Ya, {
                        margin: {
                            left: .5
                        }
                    }, r.createElement(f.W, null, e.addon.primaryAuthorName))))))
                }),
                b = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            searchTerm: ""
                        }, t.renderCategoryOptions = function() {
                            var e = r.createElement("option", {
                                    key: 0,
                                    value: 0
                                }, Object(h.d)("All Categories", "FeaturedAddonsNavigationBar")),
                                a = t.props.categories.map(function(e) {
                                    return r.createElement("option", {
                                        key: e.id,
                                        value: e.id
                                    }, e.name)
                                });
                            return [e].concat(a)
                        }, t.onCategoryChange = function(e) {
                            var a = e.target.value;
                            t.props.onCategoryChange(parseInt(a, 10))
                        }, t.setSearchTerm = function(e) {
                            t.setState({
                                searchTerm: e.target.value
                            })
                        }, t.onSearchSubmit = function(e) {
                            e.preventDefault(), t.props.onSearchSubmit(t.state.searchTerm)
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = this.renderCategoryOptions();
                        return r.createElement(f.Ya, {
                            display: f.X.Flex,
                            padding: {
                                y: 1
                            },
                            justifyContent: f.Xa.Between
                        }, r.createElement(f.Ya, null, r.createElement(f.z, {
                            onClick: this.props.onRefresh,
                            icon: f.ub.Refresh,
                            type: f.F.Text
                        }, Object(h.d)("Refresh", "FeaturedAddonsNavigationBar")), r.createElement(f.z, {
                            linkTo: "/mods/games/" + this.props.match.params.gameId + "/browse",
                            icon: f.ub.ViewerList,
                            type: f.F.Text
                        }, Object(h.d)("See All", "FeaturedAddonsNavigationBar"))), r.createElement(f.Ya, {
                            display: f.X.Flex
                        }, r.createElement(f.Ya, {
                            margin: {
                                right: 1
                            }
                        }, r.createElement(f.Ab, {
                            defaultValue: this.props.selectedCategory.toString(),
                            onChange: this.onCategoryChange
                        }, e)), r.createElement("form", {
                            onSubmit: this.onSearchSubmit
                        }, r.createElement(f.wb, {
                            placeholder: Object(h.d)("Search", "FeaturedAddonsNavigationBar"),
                            value: this.state.searchTerm,
                            onChange: this.setSearchTerm
                        }))))
                    }, t
                }(r.Component);
            var C = Object(o.compose)(Object(u.b)(function(e) {
                    return {
                        instance: e.selectedGameInstance
                    }
                }), s.a)(b),
                E = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderAddons = function(e) {
                            return e.map(function(e) {
                                return r.createElement(f.P, {
                                    cols: {
                                        default: 2
                                    },
                                    key: e.id
                                }, r.createElement(f.Ya, {
                                    margin: {
                                        top: 2
                                    }
                                }, r.createElement(f.U, {
                                    underline: !1,
                                    type: f.V.Inherit,
                                    hoverUnderlineNone: !0,
                                    to: "/mods/games/" + t.props.gameId + "/addons/" + e.id
                                }, r.createElement(y, {
                                    addon: e
                                }))))
                            })
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = this.renderAddons(this.props.popularAddons),
                            t = this.renderAddons(this.props.updatedAddons),
                            a = Object(h.d)("See all", "FeaturedAddonsPage");
                        return r.createElement(f.Ya, {
                            padding: {
                                x: 2
                            }
                        }, r.createElement(C, {
                            categories: this.props.categories,
                            selectedCategory: this.props.selectedCategory,
                            onCategoryChange: this.props.onCategoryChange,
                            onSearchSubmit: this.props.onSearchSubmit,
                            onRefresh: this.props.onRefresh
                        }), r.createElement(f.Ya, null, r.createElement(f.Ya, {
                            margin: {
                                bottom: 2
                            }
                        }, r.createElement(f.Ya, {
                            display: f.X.Flex,
                            alignItems: f.f.Center
                        }, r.createElement(f.W, {
                            type: f.Wb.H2
                        }, Object(h.d)("Popular", "FeaturedAddonsPage")), r.createElement(f.Ya, {
                            margin: {
                                left: 2
                            },
                            display: f.X.Flex,
                            alignItems: f.f.Center
                        }, r.createElement(f.U, {
                            to: "/mods/games/" + this.props.gameId + "/browse?sort=" + g.a.Popularity
                        }, r.createElement(f.Ya, {
                            display: f.X.Flex,
                            alignItems: f.f.Center
                        }, r.createElement(f.W, {
                            color: f.O.Alt,
                            bold: !0
                        }, a), r.createElement(f.tb, {
                            asset: f.ub.AngleRight,
                            height: 10,
                            width: 10
                        }))))), r.createElement(f.W, null, Object(h.d)("Check out the hottest addons in the {game} community.", {
                            game: this.props.gameName
                        }, "FeaturedAddonsPage")), r.createElement(f.Ja, null, e)), r.createElement(f.Ya, null, r.createElement(f.Ya, {
                            display: f.X.Flex,
                            alignItems: f.f.Center
                        }, r.createElement(f.W, {
                            type: f.Wb.H2
                        }, Object(h.d)("New Releases", "FeaturedAddonsPage")), r.createElement(f.Ya, {
                            margin: {
                                left: 2
                            },
                            display: f.X.Flex,
                            alignItems: f.f.Center
                        }, r.createElement(f.U, {
                            to: "/mods/games/" + this.props.gameId + "/browse?sort=" + g.a.LastUpdated
                        }, r.createElement(f.Ya, {
                            display: f.X.Flex,
                            alignItems: f.f.Center
                        }, r.createElement(f.W, {
                            color: f.O.Alt,
                            bold: !0
                        }, a), r.createElement(f.tb, {
                            asset: f.ub.AngleRight,
                            height: 10,
                            width: 10
                        }))))), r.createElement(f.W, null, Object(h.d)("Looking for a change? Explore new addons for {game}", {
                            game: this.props.gameName
                        }, "FeaturedAddonsPage")), r.createElement(f.Ja, null, t))))
                    }, t
                }(r.Component),
                v = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.state = {
                            selectedCategory: 0,
                            categories: [],
                            popularAddons: [],
                            updatedAddons: [],
                            initialized: !1
                        }, t.fetchCategories = function() {
                            return n.__awaiter(t, void 0, void 0, function() {
                                var e, t;
                                return n.__generator(this, function(a) {
                                    switch (a.label) {
                                        case 0:
                                            if (!this.props.section) return [2];
                                            a.label = 1;
                                        case 1:
                                            return a.trys.push([1, 5, , 6]), [4, Object(m.a)("api/category/section/" + this.props.section.Id)];
                                        case 2:
                                            return 200 !== (e = a.sent()).status ? [3, 4] : [4, e.json()];
                                        case 3:
                                            t = a.sent(), this.setState({
                                                categories: t,
                                                selectedCategory: 0
                                            }), a.label = 4;
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            return a.sent(), [2];
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }, t.fetchFeatured = function() {
                            return n.__awaiter(t, void 0, void 0, function() {
                                var e, t, a, r;
                                return n.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!this.props.gameInstance) return [2];
                                            e = this.props.instances.map(function(e) {
                                                return e.addon.id
                                            }), t = {
                                                gameId: this.props.gameInstance.gameId,
                                                featuredCount: 5,
                                                popularCount: 12,
                                                updatedCount: 12,
                                                excludedAddons: e
                                            }, n.label = 1;
                                        case 1:
                                            return n.trys.push([1, 6, , 7]), [4, Object(m.a)("api/addon/featured", {
                                                body: JSON.stringify(t),
                                                method: "POST"
                                            })];
                                        case 2:
                                            return 200 !== (a = n.sent()).status ? [3, 4] : [4, a.json()];
                                        case 3:
                                            return r = n.sent(), this.setState({
                                                popularAddons: r.Popular,
                                                updatedAddons: r.RecentlyUpdated,
                                                initialized: !0
                                            }), [3, 5];
                                        case 4:
                                            return [2];
                                        case 5:
                                            return [3, 7];
                                        case 6:
                                            return n.sent(), [2];
                                        case 7:
                                            return [2]
                                    }
                                })
                            })
                        }, t.onCategoryChange = function(e) {
                            var a = {
                                pathname: "/mods/games/" + t.props.match.params.gameId + "/browse",
                                search: "?category=" + e
                            };
                            t.props.history.push(a)
                        }, t.onSearchSubmit = function(e) {
                            t.props.history.push("/mods/games/" + t.props.match.params.gameId + "/browse?term=" + e)
                        }, t.onRefresh = function() {
                            return n.__awaiter(t, void 0, void 0, function() {
                                return n.__generator(this, function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, this.props.refresh()];
                                        case 1:
                                            return e.sent(), this.fetchFeatured(), [2]
                                    }
                                })
                            })
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        return n.__awaiter(this, void 0, void 0, function() {
                            return n.__generator(this, function(e) {
                                return this.props.gameInstance && this.props.section && this.fetchCategories(), this.props.gameInstance && this.fetchFeatured(), [2]
                            })
                        })
                    }, t.prototype.componentDidUpdate = function(e) {
                        e.section && this.props.section && e.section.Id !== this.props.section.Id ? this.fetchCategories() : !e.section && this.props.section && this.fetchCategories(), !e.gameInstance && this.props.gameInstance && this.fetchFeatured(), e.gameInstance && this.props.gameInstance && e.gameInstance.gameId !== this.props.gameInstance.gameId && this.fetchFeatured(), e.instances.length !== this.props.instances.length && this.fetchFeatured()
                    }, t.prototype.render = function() {
                        return this.state.initialized && this.props.gameInstance ? r.createElement(E, {
                            categories: this.state.categories,
                            onCategoryChange: this.onCategoryChange,
                            selectedCategory: this.state.selectedCategory,
                            popularAddons: this.state.popularAddons,
                            updatedAddons: this.state.updatedAddons,
                            gameId: this.props.match.params.gameId,
                            gameName: this.props.gameInstance.name,
                            onSearchSubmit: this.onSearchSubmit,
                            onRefresh: this.onRefresh
                        }) : r.createElement(f.Ya, {
                            display: f.X.Flex,
                            justifyContent: f.Xa.Center,
                            alignItems: f.f.Center,
                            fullWidth: !0,
                            fullHeight: !0
                        }, r.createElement(f.ab, null))
                    }, t
                }(r.Component);
            var A = Object(o.compose)(Object(p.b)("FeaturedAddonsPage", {
                destination: c.a.DesklightModsFeaturedAddons
            }), Object(i.a)({
                location: d.PageviewLocation.DesklightModsFeaturedAddons
            }), Object(u.b)(function(e) {
                return {
                    gameInstance: e.selectedGameInstance,
                    section: e.selectedSection
                }
            }), Object(l.b)(function(e) {
                return {
                    instances: e.addonInstances,
                    refresh: e.refresh
                }
            }), s.a)(v);
            a.d(t, "FeaturedAddonsContainer", function() {
                return v
            }), a.d(t, "FeaturedAddonsPage", function() {
                return A
            })
        },
        Fqw2: function(e, t, a) {},
        fvh5: function(e, t, a) {
            "use strict";
            var n;
            a.d(t, "a", function() {
                    return n
                }),
                function(e) {
                    e[e.Featured = 0] = "Featured", e[e.Popularity = 1] = "Popularity", e[e.LastUpdated = 2] = "LastUpdated", e[e.Name = 3] = "Name", e[e.Author = 4] = "Author", e[e.TotalDownloads = 5] = "TotalDownloads", e[e.Category = 6] = "Category", e[e.GameVersion = 7] = "GameVersion"
                }(n || (n = {}))
        }
    }
]);