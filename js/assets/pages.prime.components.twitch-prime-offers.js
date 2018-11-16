(window.webpackJsonp = window.webpackJsonp || []).push([
    [188], {
        EpOa: function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("q1tI"),
                i = r("/7QA"),
                o = r("GnwI"),
                s = r("j3KY"),
                l = r("Rjl4"),
                c = r("Ue10"),
                m = (r("SyMV"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.onTryPrimeClick = function() {
                            Object(l.o)({
                                buttonPosition: t.props.tracking.position
                            })
                        }, t.getButtonTypeFromTheme = function() {
                            return {
                                twitch: c.F.Default
                            }[t.props.theme || "default"] || void 0
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.theme || "default";
                        return a.createElement(c.Ya, {
                            className: "prime-upsell-button__subsite prime-upsell-button__subsite--" + e,
                            margin: {
                                top: 2,
                                bottom: 1
                            }
                        }, a.createElement(c.z, {
                            fullWidth: !0,
                            size: c.D.Large,
                            linkTo: this.props.buttonURLOverride || this.getLink(),
                            targetBlank: !0,
                            onClick: this.onTryPrimeClick,
                            "data-a-target": this.props.buttonDataTargetOverride,
                            type: this.getButtonTypeFromTheme()
                        }, this.props.buttonTextOverride || Object(i.d)("Try Twitch Prime", "TryPrimeButton")))
                    }, t.prototype.getLink = function() {
                        if (this.props.externalURI) return this.props.externalURI;
                        var e = this.props.externalReftag || s.b,
                            t = window.location.pathname.substring(1);
                        return Object(s.e)(e, t)
                    }, t
                }(a.Component)),
                p = Object(o.b)("TryPrimeButton", {
                    autoReportInteractive: !0
                })(m);
            r.d(t, !1, function() {
                return m
            }), r.d(t, "a", function() {
                return p
            })
        },
        QkMI: function(e, t, r) {},
        SyMV: function(e, t, r) {},
        "V+GM": function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("cr+I"),
                i = r("q1tI"),
                o = r("wIs1"),
                s = r("/7QA");

            function l(e) {
                return function(t) {
                    var r = function(r) {
                        function o(t) {
                            var a = r.call(this, t) || this;
                            return a.tracked = !1, a.referenceTracking = {}, a.trackPageview = function() {
                                if (!(a.tracked || e.skip && e.skip(a.props))) {
                                    a.tracked = !0;
                                    var t = {};
                                    "function" == typeof e.properties ? t = e.properties(a.props) : e.properties && (t = n.__assign({}, e.properties));
                                    var r = n.__assign({}, a.props);
                                    r.location && r.location.state && (t.medium = r.location.state.medium, t.content = r.location.state.content, t.content_index = r.location.state.content_index, t.email_id = r.location.state.email_id);
                                    var i = a.referenceTracking,
                                        o = i.content,
                                        l = i.medium,
                                        c = i.content_index,
                                        m = i.email_id;
                                    s.p.tracking.trackPageview(n.__assign({
                                        content: o,
                                        medium: l,
                                        content_index: c,
                                        email_id: m,
                                        location: e.location
                                    }, t))
                                }
                            }, s.k.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : s.k.warn("No latency tracker exists! This means no data will be sent to Spade.", e), a
                        }
                        return n.__extends(o, r), o.prototype.componentDidMount = function() {
                            var e = this;
                            this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, r) {
                                "REPLACE" !== r && (e.tracked = !1, e.referenceTracking = {})
                            })
                        }, o.prototype.componentDidUpdate = function() {
                            this.trackPageview()
                        }, o.prototype.render = function() {
                            return i.createElement(t, n.__assign({}, this.props))
                        }, o.prototype.stripTTParams = function(e) {
                            var t = "" !== e.search ? a.parse(e.search) : {},
                                r = {
                                    content: t.tt_content,
                                    content_index: t.tt_content_index,
                                    medium: t.tt_medium,
                                    email_id: t.tt_email_id
                                };
                            if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, delete t.tt_email_id, r.medium || r.content || r.email_id) {
                                var n = "",
                                    i = a.stringify(t);
                                i.length > 0 && (n = "?" + i), this.props.history.replace({
                                    pathname: e.pathname,
                                    hash: e.hash,
                                    search: n
                                })
                            }
                            return r
                        }, o
                    }(i.Component);
                    return Object(o.a)(r)
                }
            }
            r.d(t, "a", function() {
                return l
            })
        },
        "X+nQ": function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("q1tI"),
                i = r("oJmH"),
                o = r("/7QA"),
                s = r("yR8l"),
                l = r("GnwI"),
                c = r("9pSj"),
                m = Object(l.b)("AmazonPrimeLogo", {
                    autoReportInteractive: !0
                })(function(e) {
                    var t = e.width || "110",
                        r = e.height || "20";
                    return a.createElement("svg", {
                        width: t + "px",
                        height: r + "px",
                        viewBox: "0 0 329.9 63.93",
                        fill: "currentColor"
                    }, a.createElement("path", {
                        d: "M183.95 54.13a1.57 1.57 0 0 1-1.08-.31 1.46 1.46 0 0 1-.34-1.11V14.79a1.46 1.46 0 0 1 .34-1.11 1.57 1.57 0 0 1 1.08-.31h4.09a1.47 1.47 0 0 1 1.59 1.25l.4 1.48a12.56 12.56 0 0 1 4.12-2.62 13.13 13.13 0 0 1 4.92-1 10.56 10.56 0 0 1 8.73 4q3.21 4 3.21 10.92a19.88 19.88 0 0 1-1.59 8.24 12.89 12.89 0 0 1-4.32 5.43 10.65 10.65 0 0 1-6.25 1.9 13.29 13.29 0 0 1-4.43-.74 10.65 10.65 0 0 1-3.58-2v12.45a1.18 1.18 0 0 1-1.42 1.42h-5.47zm12.45-17.34a5.32 5.32 0 0 0 4.69-2.16q1.51-2.16 1.51-6.82t-1.49-6.84a5.31 5.31 0 0 0-4.72-2.16 10.83 10.83 0 0 0-5.57 1.54v15a10.44 10.44 0 0 0 5.58 1.44zM217.95 42.42a1.23 1.23 0 0 1-1.42-1.42V14.79a1.47 1.47 0 0 1 .34-1.11 1.57 1.57 0 0 1 1.08-.31h4.09a1.47 1.47 0 0 1 1.59 1.25l.74 3.07a16.24 16.24 0 0 1 4.29-3.55 9.16 9.16 0 0 1 4.29-1.05h.8a1.67 1.67 0 0 1 1.14.31 1.46 1.46 0 0 1 .34 1.11v4.78a1.57 1.57 0 0 1-.31 1.08 1.46 1.46 0 0 1-1.11.34q-.4 0-1-.06t-1.59-.06a16.94 16.94 0 0 0-3.18.37 15.66 15.66 0 0 0-3.18.94v19.07a1.57 1.57 0 0 1-.31 1.08 1.47 1.47 0 0 1-1.11.34h-5.49zM243.44 8.87a4.94 4.94 0 0 1-3.47-1.19 4.67 4.67 0 0 1 0-6.48 5.63 5.63 0 0 1 6.94 0 4.67 4.67 0 0 1 0 6.48 5 5 0 0 1-3.47 1.19zm-2.73 33.54a1.23 1.23 0 0 1-1.42-1.42v-26.2a1.46 1.46 0 0 1 .34-1.11 1.57 1.57 0 0 1 1.08-.31h5.46a1.18 1.18 0 0 1 1.42 1.42v26.18a1.57 1.57 0 0 1-.31 1.08 1.46 1.46 0 0 1-1.11.34h-5.46zM256.05 42.42a1.23 1.23 0 0 1-1.42-1.42V14.79a1.47 1.47 0 0 1 .34-1.11 1.57 1.57 0 0 1 1.08-.31h4.09a1.47 1.47 0 0 1 1.59 1.25l.46 1.54a24.53 24.53 0 0 1 5.43-2.81 15.31 15.31 0 0 1 5-.82q5.12 0 7.22 3.64a23.26 23.26 0 0 1 5.46-2.79 16.6 16.6 0 0 1 5.29-.85 8.28 8.28 0 0 1 6.17 2.22 8.44 8.44 0 0 1 2.19 6.22v20a1.57 1.57 0 0 1-.31 1.08 1.47 1.47 0 0 1-1.11.34h-5.46a1.23 1.23 0 0 1-1.42-1.42V22.75q0-3.87-3.47-3.87a14.41 14.41 0 0 0-6.2 1.48v20.61a1.57 1.57 0 0 1-.31 1.08 1.46 1.46 0 0 1-1.11.34h-5.46a1.23 1.23 0 0 1-1.45-1.42V22.75q0-3.87-3.47-3.87a13.85 13.85 0 0 0-6.25 1.53v20.56a1.57 1.57 0 0 1-.31 1.08 1.47 1.47 0 0 1-1.11.34h-5.46zM318.64 43.27q-7.05 0-10.83-3.87t-3.78-11.09q0-7.39 3.87-11.6t10.75-4.21q5.29 0 8.27 2.56a8.54 8.54 0 0 1 3 6.82 7.31 7.31 0 0 1-3.21 6.45q-3.21 2.19-9.47 2.19a22.37 22.37 0 0 1-5.63-.63q.34 3.81 2.3 5.46t5.94 1.65a23.55 23.55 0 0 0 3.1-.2 38.49 38.49 0 0 0 4.18-.88l.34-.09h.28q1 0 1 1.31v2.62a2.36 2.36 0 0 1-.25 1.28 2.1 2.1 0 0 1-1 .65 24.41 24.41 0 0 1-8.86 1.58zm-1.88-17.85a7.72 7.72 0 0 0 4.21-.88 3 3 0 0 0 1.31-2.7q0-3.58-4.26-3.58-5.46 0-6.31 6.71a25.83 25.83 0 0 0 5.06.45z"
                    }), a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M105.17 52.8c-9.85 7.27-24.14 11.17-36.44 11.17a66 66 0 0 1-44.52-17c-.92-.83-.1-2 1-1.33a89.61 89.61 0 0 0 44.55 11.82 88.62 88.62 0 0 0 34-7c1.65-.67 3.04 1.13 1.41 2.34z"
                    }), a.createElement("path", {
                        fillRule: "evenodd",
                        d: "M109.28 48.11c-1.26-1.61-8.33-.76-11.51-.38-1 .12-1.11-.73-.24-1.33 5.64-4 14.88-2.82 16-1.49s-.28 10.61-5.57 15c-.81.68-1.59.32-1.23-.58 1.14-2.95 3.81-9.6 2.55-11.22zM98.04 18.41v-3.85a1 1 0 0 1 1-1h17.26a1 1 0 0 1 1 1v3.3a5.42 5.42 0 0 1-1.3 2.42l-8.94 12.76a19.14 19.14 0 0 1 9.84 2.11 1.76 1.76 0 0 1 .92 1.5v4.11a.92.92 0 0 1-1.27.88 19.87 19.87 0 0 0-18.23 0 .92.92 0 0 1-1.23-.89v-3.9a4.64 4.64 0 0 1 .64-2.65l10.36-14.86h-9a1 1 0 0 1-1.05-.93zM35.1 42.45h-5.25a1 1 0 0 1-.94-.89V14.62a1 1 0 0 1 1-1h4.89a1 1 0 0 1 1 .91v3.52h.1c1.27-3.4 3.68-5 6.91-5s5.34 1.59 6.81 5a7.75 7.75 0 0 1 13.33-2c1.67 2.27 1.32 5.56 1.32 8.45v17a1 1 0 0 1-1 1h-5.32a1 1 0 0 1-.94-1V27.2a34.43 34.43 0 0 0-.15-5 2.74 2.74 0 0 0-3.09-2.33 3.48 3.48 0 0 0-3.14 2.21 16.32 16.32 0 0 0-.49 5.16v14.28a1 1 0 0 1-1 1h-5.19a1 1 0 0 1-.94-1V27.2c0-3 .49-7.43-3.23-7.43s-3.63 4.31-3.63 7.43v14.28a1 1 0 0 1-1.05.97zM132.12 13.08c7.79 0 12 6.69 12 15.2 0 8.22-4.65 14.74-12 14.74-7.64 0-11.81-6.69-11.81-15s4.22-14.94 11.81-14.94zm0 5.5c-3.87 0-4.12 5.27-4.12 8.56s0 10.32 4.07 10.32 4.26-5.67 4.26-9.13a24.91 24.91 0 0 0-.78-7.14 3.29 3.29 0 0 0-3.38-2.61zM154.23 42.45H149a1 1 0 0 1-.94-1v-27a1 1 0 0 1 1-.88h4.89a1 1 0 0 1 .93.75v4.12h.07c1.47-3.69 3.53-5.44 7.15-5.44a6.88 6.88 0 0 1 6.13 3.18c1.37 2.15 1.37 5.78 1.37 8.39v17a1 1 0 0 1-1 .85h-5.25a1 1 0 0 1-.93-.85v-14.6c0-2.95.34-7.26-3.28-7.26a3.44 3.44 0 0 0-3 2.15 12 12 0 0 0-.83 5.1v14.51a1 1 0 0 1-1.08.98zM84.29 29.58c0 2 0 3.75-1 5.57a4.27 4.27 0 0 1-3.63 2.39c-2 0-3.19-1.53-3.19-3.81 0-4.47 4-5.28 7.81-5.28v1.14zm5.29 12.8a1.09 1.09 0 0 1-1.24.12 12.83 12.83 0 0 1-3-3.5c-2.88 2.94-4.92 3.82-8.65 3.82-4.42 0-7.86-2.73-7.86-8.18a8.92 8.92 0 0 1 5.6-8.58c2.85-1.25 6.83-1.48 9.87-1.82v-.68c0-1.25.1-2.73-.64-3.81a3.51 3.51 0 0 0-2.95-1.36 4 4 0 0 0-4.22 3.15 1.11 1.11 0 0 1-.91 1l-5.09-.55a.92.92 0 0 1-.78-1.1c1.17-6.17 6.74-8 11.74-8 2.55 0 5.89.68 7.91 2.61 2.55 2.39 2.31 5.57 2.31 9v8.18c0 2.46 1 3.54 2 4.86a1 1 0 0 1 0 1.4c-1.07.9-3 2.55-4 3.49zM15.47 29.58c0 2 0 3.75-1 5.57a4.26 4.26 0 0 1-3.63 2.39c-2 0-3.19-1.53-3.19-3.81 0-4.47 4-5.28 7.81-5.28v1.14zm5.29 12.8a1.09 1.09 0 0 1-1.24.12 12.77 12.77 0 0 1-3-3.5c-2.88 2.94-4.92 3.82-8.65 3.82-4.42 0-7.86-2.73-7.86-8.18a8.92 8.92 0 0 1 5.6-8.58c2.85-1.25 6.83-1.48 9.87-1.82v-.68c0-1.25.1-2.73-.64-3.81a3.51 3.51 0 0 0-2.95-1.36 4 4 0 0 0-4.22 3.15 1.11 1.11 0 0 1-.91 1l-5.09-.57a.92.92 0 0 1-.78-1.1c1.17-6.17 6.74-8 11.74-8 2.55 0 5.89.68 7.91 2.61 2.55 2.39 2.31 5.57 2.31 9v8.18c0 2.46 1 3.54 2 4.86a1 1 0 0 1 0 1.4c-1.07.9-3 2.55-4 3.49z"
                    }))
                }),
                p = r("Rjl4"),
                u = r("zUQL"),
                d = r("O4UZ"),
                f = r("EpOa"),
                h = r("Ue10"),
                g = r("uDwM"),
                v = (r("iQf2"), "prime-upsell__msg-link"),
                b = "prime-upsell__msg-container__upsell-text",
                k = "prime-upsell__logo-container__img",
                O = "prime-upsell__logo-container__svg",
                y = "prime-banner-upsell",
                T = "twitch.prime.lootpage.upsell.image",
                w = "twitch.prime.lootpage.upsell.linktext",
                _ = "twitch.prime.lootpage.upsell.text",
                P = "twitch.prime.lootpage.upsell.buttonurl",
                x = "twitch.prime.lootpage.upsell.buttontext",
                E = "twitch.prime.lootpage.upsell.theme",
                D = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderBannerPlaceholder = function() {
                            var e = t.props.userData;
                            if (Object(d.m)(e) || t.props.promotionData && t.props.promotionData.loading) return a.createElement(h.Qa, {
                                fullHeight: !0,
                                fullWidth: !0
                            }, a.createElement(h.jb, {
                                height: 250
                            }))
                        }, t.renderBanner = function() {
                            var e = t.props.userData,
                                r = !Object(d.n)(e) || t.getTextFromOverride(P),
                                n = t.queriesDoneLoading();
                            if (n && !r) return null;
                            if (!n || r) {
                                var i = t.getTextFromOverride(E) || "default";
                                return a.createElement(h.Ya, {
                                    className: "prime-ad-banner",
                                    display: n && r ? h.X.Block : h.X.Hide
                                }, a.createElement(h.i, {
                                    type: h.n.SlideInTop,
                                    duration: h.k.Long,
                                    enabled: !!r
                                }, a.createElement(h.Fb, {
                                    "data-test-target": y,
                                    className: "prime-banner-upsell prime-banner-upsell--" + i.toLowerCase(),
                                    padding: {
                                        x: 5,
                                        y: 1
                                    },
                                    borderBottom: !0
                                }, a.createElement(h.Ja, null, a.createElement(h.P, {
                                    cols: {
                                        default: 12,
                                        sm: 12,
                                        md: 1,
                                        lg: 1
                                    }
                                }), a.createElement(h.P, {
                                    cols: {
                                        default: 12,
                                        sm: 12,
                                        md: 6,
                                        lg: 6
                                    }
                                }, t.renderLogoOrImage()), a.createElement(h.P, {
                                    cols: {
                                        default: 12,
                                        sm: 12,
                                        md: 4,
                                        lg: 4
                                    }
                                }, a.createElement(h.Fb, {
                                    display: h.X.Flex,
                                    justifyContent: h.Xa.Center,
                                    alignItems: h.f.Center,
                                    textAlign: h.Sb.Center,
                                    padding: 2,
                                    fullHeight: !0
                                }, a.createElement(h.Ya, {
                                    alignSelf: h.g.Center,
                                    className: "prime-upsell__msg-container",
                                    "data-a-target": "prime-upsellcontainer"
                                }, a.createElement(h.W, {
                                    type: h.Wb.P,
                                    fontSize: h.Ca.Size4,
                                    bold: !0,
                                    "data-test-selector": b
                                }, t.renderUpsellText()), t.renderUpsellLink(), t.renderTryPrimeButton(), a.createElement(h.Qa, {
                                    margin: {
                                        bottom: .5
                                    }
                                }, a.createElement(h.W, {
                                    type: h.Wb.P,
                                    fontSize: h.Ca.Size5,
                                    bold: !0
                                }, Object(o.d)("Powered by", "PrimeUpsell"))), a.createElement(m, null)))), a.createElement(h.P, {
                                    cols: {
                                        default: 12,
                                        sm: 12,
                                        md: 1,
                                        lg: 1
                                    }
                                })))))
                            }
                        }, t.renderLogoOrImage = function() {
                            var e = t.getTextFromOverride(T),
                                r = e && a.createElement(h.S, {
                                    src: e,
                                    alt: Object(o.d)("Promotional Banner for Twitch Prime", "TwitchPrimeBanner"),
                                    "data-test-selector": k
                                });
                            return a.createElement(h.Fb, {
                                className: "prime-upsell__logo-container",
                                display: h.X.Flex,
                                justifyContent: h.Xa.Center,
                                alignItems: h.f.Center,
                                textAlign: h.Sb.Center,
                                fullHeight: !0
                            }, r || a.createElement(h.tb, {
                                type: h.vb.Inherit,
                                asset: h.ub.LogoTwitchPrime,
                                width: 330,
                                height: 150,
                                "data-test-selector": O
                            }))
                        }, t.renderUpsellText = function() {
                            return t.getTextFromOverride(_) || Object(o.d)("Free games, in-game loot, exclusives and surprises. New offers every month with Twitch Prime membership.", "PrimeUpsell")
                        }, t.renderUpsellLink = function() {
                            var e = t.props.userData,
                                r = !Object(d.n)(e) && t.getTextFromOverride(w),
                                n = !Object(d.n)(e) && t.getTextFromOverride(P) || "",
                                i = t.getTextFromOverride(E) || "default";
                            return n && r && a.createElement(h.W, {
                                type: h.Wb.P,
                                fontSize: h.Ca.Size4,
                                "data-test-selector": v
                            }, a.createElement(h.U, {
                                targetBlank: !0,
                                to: n,
                                type: t.getLinkTypeFromTheme(),
                                className: "prime-upsell__msg-link prime-upsell__msg-link--" + i.toLowerCase()
                            }, r))
                        }, t.renderTryPrimeButton = function() {
                            var e = t.props.userData,
                                r = Object(d.n)(e) && t.getTextFromOverride(x) || "",
                                n = Object(d.n)(e) && t.getTextFromOverride(P) || "",
                                i = t.getTextFromOverride(E) || "default";
                            return a.createElement(f.a, {
                                externalReftag: t.props.externalReftag,
                                tracking: {
                                    position: p.b.CenterBanner
                                },
                                buttonURLOverride: n,
                                buttonTextOverride: r,
                                buttonDataTargetOverride: Object(d.n)(e) ? "prime-main-redirect-button-header" : "prime-upsell-try-prime-button-header",
                                theme: i
                            })
                        }, t.getTextFromOverride = function(e) {
                            var r = t.filterOverrideDataByID(e);
                            return r && r.text && r.text.trim()
                        }, t.filterOverrideDataByID = function(e) {
                            var r = t.props.promotionData;
                            if (t.props.promotionData.error) return "";
                            var n = r && r.primePromotions,
                                a = n && n.filter(function(t) {
                                    return t && t.id === e
                                });
                            return a && a[0]
                        }, t.getLinkTypeFromTheme = function() {
                            var e = {
                                    twitch: h.V.Default
                                },
                                r = t.getTextFromOverride(E);
                            return r && e[r] || h.V.Inherit
                        }, t.queriesDoneLoading = function() {
                            return t.userDataReportInteractive() && t.promotionDataReportInteractive()
                        }, t.userDataReportInteractive = function() {
                            return t.props.userData && (!t.props.userData.loading || t.props.userData.error)
                        }, t.promotionDataReportInteractive = function() {
                            return t.props.promotionData && (!t.props.promotionData.loading || t.props.promotionData.error)
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.queriesDoneLoading() && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.queriesDoneLoading() && this.props.latencyTracking.reportInteractive()
                    }, t.prototype.render = function() {
                        return a.createElement(h.Ya, null, this.renderBannerPlaceholder(), this.renderBanner())
                    }, t
                }(a.Component),
                F = Object(i.compose)(Object(l.b)("TwitchPrimeBanner"), Object(s.a)(u, {
                    name: "userData"
                }), Object(s.a)(g, {
                    name: "promotionData",
                    options: function() {
                        return {
                            variables: {
                                stringIds: [x, P, T, w, _, E],
                                dateOverride: Object(c.f)(c.e.DateOverride)
                            }
                        }
                    }
                }))(D);
            r.d(t, !1, function() {
                return v
            }), r.d(t, !1, function() {
                return b
            }), r.d(t, !1, function() {
                return k
            }), r.d(t, !1, function() {
                return O
            }), r.d(t, !1, function() {
                return y
            }), r.d(t, !1, function() {
                return T
            }), r.d(t, !1, function() {
                return w
            }), r.d(t, !1, function() {
                return _
            }), r.d(t, !1, function() {
                return P
            }), r.d(t, !1, function() {
                return x
            }), r.d(t, !1, function() {
                return E
            }), r.d(t, !1, function() {
                return D
            }), r.d(t, "a", function() {
                return F
            })
        },
        eAh4: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r("mrSG"),
                a = r("q1tI"),
                i = r("oJmH"),
                o = r("i8i4"),
                s = r("/7QA"),
                l = r("yR8l"),
                c = r("V+GM"),
                m = r("NvVO"),
                p = r("2xye"),
                u = r("GnwI"),
                d = r("jmDq"),
                f = r("4NwI"),
                h = r("RfIv"),
                g = r("Rjl4"),
                v = r("zUQL"),
                b = r("O4UZ"),
                k = r("EpOa"),
                O = r("X+nQ"),
                y = r("Ue10"),
                T = (r("sKC6"), function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.renderOfferListsInOrder = function() {
                            var e = s.b.get("prime_loot_top_offer_list", "InGameLoot"),
                                r = t.renderOfferList(h.a.InGameLoot, Object(s.d)("Free In-Game Loot & More", "PrimePageOffers")),
                                n = t.renderOfferList(h.a.Game, Object(s.d)("Free Games with Prime", "PrimePageOffers"));
                            switch (e) {
                                case "Game":
                                    return a.createElement(y.Fb, {
                                        background: y.r.Base,
                                        className: "prime-offers"
                                    }, n, r);
                                default:
                                    return a.createElement(y.Fb, {
                                        background: y.r.Base,
                                        className: "prime-offers"
                                    }, r, n)
                            }
                        }, t.renderOfferList = function(e, r) {
                            var n = e.toLowerCase();
                            return a.createElement("div", {
                                id: n,
                                ref: n
                            }, a.createElement(y.Ya, {
                                "data-a-target": "offers-list",
                                className: "prime-offers__list"
                            }, a.createElement(f.a, {
                                placement: b.d.LootPage,
                                ignoreFirstPageLoad: !0,
                                externalReftag: t.getReftagFromSearch(),
                                listDirection: b.c.Horizontal,
                                offerFilterType: e,
                                sectionTitle: r,
                                hideWithNoOffers: e === h.a.Game,
                                hideUpsell: !0
                            })))
                        }, t
                    }
                    return n.__extends(t, e), t.prototype.componentDidMount = function() {
                        s.p.setPageTitle(Object(s.d)("Free games and in-game loot every month with Twitch Prime membership", "PrimeSubsite")), Object(g.n)({
                            reftag: this.getReftagFromSearch()
                        }), this.props.userData.loading && !this.props.userData.error || this.props.latencyTracking.reportInteractive()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.userData.loading && !this.props.userData.error || this.props.latencyTracking.reportInteractive();
                        var e = this.props.location.hash.replace("#", ""),
                            t = e && o.findDOMNode(this.refs[e]);
                        t && t.scrollIntoView()
                    }, t.prototype.render = function() {
                        return a.createElement(y.Qa, {
                            fullWidth: !0
                        }, a.createElement(y.Ya, {
                            fullWidth: !0
                        }, a.createElement(O.a, {
                            externalReftag: this.getReftagFromSearch()
                        }), this.renderOfferListsInOrder(), this.renderFooterUpsellButton(), a.createElement(d.a, null)))
                    }, t.prototype.renderFooterUpsellButton = function() {
                        var e = this.props.userData;
                        if (!Object(b.m)(e) && !Object(b.n)(e)) return a.createElement(y.Fb, {
                            justifyContent: y.Xa.Center,
                            alignItems: y.f.Center,
                            textAlign: y.Sb.Center,
                            padding: 2
                        }, a.createElement(k.a, {
                            externalReftag: this.getReftagFromSearch(),
                            tracking: {
                                position: g.b.CenterFooter
                            },
                            buttonDataTargetOverride: Object(b.n)(e) ? "prime-main-redirect-button-footer" : "prime-upsell-try-prime-button-footer"
                        }))
                    }, t.prototype.getReftagFromSearch = function() {
                        var e = this.props.location,
                            t = e && e.search && this.props.location.search.match("ref_=([^&]*)");
                        if (t) return t[1]
                    }, t
                }(a.Component)),
                w = Object(i.compose)(Object(l.a)(v, {
                    name: "userData"
                }), Object(u.b)("TwitchPrimeOffersPage", {
                    destination: m.a.TwitchPrimeOffersPage
                }), Object(c.a)({
                    location: p.PageviewLocation.TwitchPrimeOffersPage
                }))(T);
            r.d(t, "TwitchPrimeOffersPage", function() {
                return w
            })
        },
        iQf2: function(e, t, r) {},
        jmDq: function(e, t, r) {
            "use strict";
            var n = r("mrSG"),
                a = r("q1tI"),
                i = r("/7QA"),
                o = r("GnwI"),
                s = r("Ue10"),
                l = (r("QkMI"), function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return n.__extends(t, e), t.prototype.render = function() {
                        var e = this.props.partnerSocialLink && this.props.partnerSocialText;
                        return a.createElement(s.Ya, {
                            className: "prime-footer",
                            position: s.kb.Relative
                        }, a.createElement(s.Fb, {
                            position: s.kb.Absolute,
                            justifyContent: s.Xa.Center,
                            alignItems: s.f.Center,
                            className: "twitter-container"
                        }, a.createElement(s.tb, {
                            asset: s.ub.Twitter,
                            width: 40,
                            height: 40,
                            type: s.vb.Prime
                        })), a.createElement(s.Fb, {
                            display: s.X.Flex,
                            justifyContent: s.Xa.Center,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            className: "social-twitch-prime",
                            padding: 4
                        }, a.createElement(s.Ya, {
                            className: "prime-footer__twitter-links",
                            display: s.X.Flex,
                            justifyContent: e ? s.Xa.Between : s.Xa.Center
                        }, a.createElement(s.U, {
                            to: "https://twitter.com/TwitchPrime",
                            targetBlank: !0
                        }, a.createElement(s.W, {
                            bold: !0,
                            fontSize: s.Ca.Size5,
                            "data-a-target": "prime-footer-twitter-link"
                        }, Object(i.d)("Follow us @TwitchPrime", "PrimeSubsite"))), e && a.createElement(s.U, {
                            to: this.props.partnerSocialLink,
                            targetBlank: !0
                        }, a.createElement(s.W, {
                            bold: !0,
                            fontSize: s.Ca.Size5
                        }, this.props.partnerSocialText)))), a.createElement(s.Fb, {
                            display: s.X.Flex,
                            justifyContent: s.Xa.Center,
                            attachTop: !0,
                            attachLeft: !0,
                            fullWidth: !0,
                            fullHeight: !0,
                            padding: {
                                top: 2
                            },
                            className: "prime-footer-links"
                        }, a.createElement(s.Fb, {
                            padding: 2
                        }, a.createElement(s.U, {
                            to: "https://www.twitch.tv/p/terms-of-sale#twitchprime",
                            targetBlank: !0,
                            "data-a-target": "prime-footer-terms-link"
                        }, Object(i.d)("Terms", "PrimeSubsiteFooter"))), a.createElement(s.Fb, {
                            padding: 2
                        }, a.createElement(s.U, {
                            to: "https://www.amazon.com/twitchprivacy",
                            targetBlank: !0,
                            "data-a-target": "prime-footer-privacy-link"
                        }, Object(i.d)("Privacy Policy", "PrimeSubsiteFooter"))), a.createElement(s.Fb, {
                            padding: 2
                        }, a.createElement(s.U, {
                            to: "https://help.twitch.tv/customer/en/portal/articles/2572060-twitch-prime-guide",
                            targetBlank: !0,
                            "data-a-target": "prime-footer-guide-link"
                        }, Object(i.d)("Twitch Prime Guide", "PrimeSubsiteFooter")))))
                    }, t
                }(a.Component)),
                c = Object(o.b)("PrimeFooter", {
                    autoReportInteractive: !0
                })(l);
            r.d(t, "a", function() {
                return c
            })
        },
        sKC6: function(e, t, r) {},
        uDwM: function(e, t) {
            var r = {
                kind: "Document",
                definitions: [{
                    kind: "OperationDefinition",
                    operation: "query",
                    name: {
                        kind: "Name",
                        value: "Prime_LootPage_PrimeBannerOverrides"
                    },
                    variableDefinitions: [{
                        kind: "VariableDefinition",
                        variable: {
                            kind: "Variable",
                            name: {
                                kind: "Name",
                                value: "stringIds"
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
                                        value: "ID"
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
                                value: "dateOverride"
                            }
                        },
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "Time"
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
                                value: "primePromotions"
                            },
                            arguments: [{
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "ids"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "stringIds"
                                    }
                                }
                            }, {
                                kind: "Argument",
                                name: {
                                    kind: "Name",
                                    value: "dateOverride"
                                },
                                value: {
                                    kind: "Variable",
                                    name: {
                                        kind: "Name",
                                        value: "dateOverride"
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
                                        value: "text"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "externalURL"
                                    },
                                    arguments: [],
                                    directives: []
                                }, {
                                    kind: "Field",
                                    name: {
                                        kind: "Name",
                                        value: "isExternalLink"
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
                    end: 185
                }
            };
            r.loc.source = {
                body: "query Prime_LootPage_PrimeBannerOverrides($stringIds: [ID!] $dateOverride: Time) {\nprimePromotions (ids: $stringIds dateOverride: $dateOverride) {\nid\ntext\nexternalURL\nisExternalLink\n}\n}",
                name: "GraphQL request",
                locationOffset: {
                    line: 1,
                    column: 1
                }
            };
            e.exports = r
        }
    }
]);