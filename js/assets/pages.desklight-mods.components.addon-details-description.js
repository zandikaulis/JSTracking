(window.webpackJsonp = window.webpackJsonp || []).push([
    [135], {
        "0clC": function(t, e, n) {},
        "CG/P": function(t, e, n) {
            "use strict";
            n.r(e);
            var i = n("mrSG"),
                r = n("q1tI"),
                a = n("9C/b"),
                s = n("fvjX"),
                o = n("V+GM"),
                c = n("NvVO"),
                d = n("2xye"),
                l = n("Wzgq"),
                u = n("GnwI"),
                p = n("Ue10"),
                h = (n("0clC"), function(t) {
                    var e = document.createElement("div");
                    return e.innerHTML = t.description, e.querySelectorAll("a").forEach(function(t) {
                        t.setAttribute("target", "_BLANK")
                    }), r.createElement(p.Ya, {
                        padding: {
                            x: 2
                        },
                        className: "addon-detail-description"
                    }, r.createElement("div", {
                        className: "addon-detail-description__content",
                        dangerouslySetInnerHTML: {
                            __html: e.innerHTML
                        }
                    }))
                }),
                f = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.state = {
                            description: "",
                            initialized: !1
                        }, e.fetchDescription = function() {
                            return i.__awaiter(e, void 0, void 0, function() {
                                var t, e;
                                return i.__generator(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 5, , 6]), [4, Object(l.a)("api/addon/" + this.props.match.params.addonId + "/description")];
                                        case 1:
                                            return 200 !== (t = n.sent()).status ? [3, 3] : [4, t.json()];
                                        case 2:
                                            return e = n.sent(), this.setState({
                                                description: e,
                                                initialized: !0
                                            }), [3, 4];
                                        case 3:
                                            return this.setState({
                                                initialized: !0
                                            }), [2];
                                        case 4:
                                            return [3, 6];
                                        case 5:
                                            return n.sent(), this.setState({
                                                initialized: !0
                                            }), [2];
                                        case 6:
                                            return [2]
                                    }
                                })
                            })
                        }, e
                    }
                    return i.__extends(e, t), e.prototype.componentDidMount = function() {
                        this.fetchDescription()
                    }, e.prototype.render = function() {
                        return this.state.initialized ? r.createElement(h, {
                            description: this.state.description
                        }) : r.createElement(p.Ya, {
                            display: p.X.Flex,
                            justifyContent: p.Xa.Center,
                            alignItems: p.f.Center,
                            fullWidth: !0,
                            fullHeight: !0
                        }, r.createElement(p.ab, null))
                    }, e
                }(r.Component),
                m = Object(s.compose)(Object(u.b)("AddonDetailsDescriptionPage", {
                    destination: c.a.DesklightModsAddonDetailsDescription
                }), Object(o.a)({
                    location: d.PageviewLocation.DesklightModsAddonDetailsDescription
                }), a.a)(f);
            n.d(e, "AddonDetailsDescriptionComponent", function() {
                return f
            }), n.d(e, "AddonDetailsDescriptionPage", function() {
                return m
            })
        }
    }
]);