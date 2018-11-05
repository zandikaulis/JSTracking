(window.webpackJsonp = window.webpackJsonp || []).push([
    [126], {
        "5k+0": function(e, t, n) {
            "use strict";
            n.r(t);
            var r, i = n("mrSG"),
                o = n("q1tI"),
                a = n("/7QA"),
                l = n("Ue10");
            ! function(e) {
                e.TRIAL_BANNER = "multiview_banner_trial_banner", e.ENTER_TRIAL_BUTTON = "multiview_banner_enter_trial_button"
            }(r || (r = {}));
            var u = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.props.triggerPlayerReposition()
                    }, t.prototype.componentDidUpdate = function() {
                        this.props.triggerPlayerReposition()
                    }, t.prototype.render = function() {
                        return o.createElement(l.i, {
                            type: l.n.SlideInBottom,
                            delay: l.j.Medium,
                            duration: l.k.Medium,
                            enabled: !0
                        }, o.createElement(l.Cb, {
                            "data-test-selector": r.TRIAL_BANNER,
                            display: l.X.Flex,
                            background: l.r.Base,
                            alignItems: l.f.Center,
                            padding: 1,
                            borderLeft: !0,
                            borderTop: !0,
                            borderRight: !0,
                            borderRadius: {
                                topLeft: l.x.Large,
                                topRight: l.x.Large
                            }
                        }, o.createElement(l.qb, {
                            asset: l.rb.MultiscreenEqualThree,
                            type: l.sb.Inherit
                        }), o.createElement(l.Xa, {
                            margin: {
                                x: 1
                            }
                        }, o.createElement(l.Pa, {
                            margin: {
                                right: 1
                            }
                        }, o.createElement(l.W, {
                            fontSize: l.Ca.Size5,
                            type: l.Tb.Strong
                        }, Object(a.e)("Twitch Multiview", "MultiviewBanner"))), o.createElement(l.W, {
                            fontSize: l.Ca.Size5,
                            type: l.Tb.Span
                        }, Object(a.e)("Choose your own streams including player POVs", "MultiviewBanner"))), o.createElement(l.Xa, {
                            margin: {
                                left: "auto"
                            }
                        }, o.createElement(l.z, {
                            "data-test-selector": r.ENTER_TRIAL_BUTTON,
                            type: l.F.Hollow,
                            linkTo: "multiview"
                        }, Object(a.e)("Launch Multiview", "MultiviewBanner")))))
                    }, t
                }(o.Component),
                c = u;
            n.d(t, "TestSelectors", function() {
                return r
            }), n.d(t, "MultiviewBannerPresentation", function() {
                return u
            }), n.d(t, "MultiviewBanner", function() {
                return c
            })
        }
    }
]);