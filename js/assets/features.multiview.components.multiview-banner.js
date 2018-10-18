(window.webpackJsonp = window.webpackJsonp || []).push([
    [125], {
        "5k+0": function(e, t, n) {
            "use strict";
            n.r(t);
            var r, i = n("mrSG"),
                a = n("q1tI"),
                o = n("/7QA"),
                l = n("Ue10"),
                u = "cc_v2_trial_test_enabled";
            ! function(e) {
                e.TRIAL_BANNER = "multiview_banner_trial_banner", e.ENTER_TRIAL_BUTTON = "multiview_banner_enter_trial_button"
            }(r || (r = {}));
            var c = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.trialOverrideEnabled = o.b.get(u, !1), t
                    }
                    return i.__extends(t, e), t.prototype.componentDidMount = function() {
                        this.trialOverrideEnabled && this.props.triggerPlayerReposition()
                    }, t.prototype.componentDidUpdate = function() {
                        this.trialOverrideEnabled && this.props.triggerPlayerReposition()
                    }, t.prototype.render = function() {
                        return this.trialOverrideEnabled ? a.createElement(l.i, {
                            type: l.n.SlideInBottom,
                            delay: l.j.Medium,
                            duration: l.k.Medium,
                            enabled: !0
                        }, a.createElement(l.zb, {
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
                        }, a.createElement(l.ob, {
                            asset: l.pb.MultiscreenEqualThree,
                            type: l.qb.Inherit
                        }), a.createElement(l.Xa, {
                            margin: {
                                x: 1
                            }
                        }, a.createElement(l.Pa, {
                            margin: {
                                right: 1
                            }
                        }, a.createElement(l.W, {
                            fontSize: l.Ca.Size5,
                            type: l.Pb.Strong
                        }, Object(o.e)("Twitch Multiview", "MultiviewBanner"))), a.createElement(l.W, {
                            fontSize: l.Ca.Size5,
                            type: l.Pb.Span
                        }, Object(o.e)("Choose your own streams including player POVs", "MultiviewBanner"))), a.createElement(l.Xa, {
                            margin: {
                                left: "auto"
                            }
                        }, a.createElement(l.z, {
                            "data-test-selector": r.ENTER_TRIAL_BUTTON,
                            type: l.F.Hollow,
                            linkTo: "/" + this.props.channelLogin + "/multiview"
                        }, Object(o.e)("Try Multiview For Free", "MultiviewBanner"))))) : null
                    }, t
                }(a.Component),
                d = c;
            n.d(t, "TRIAL_ENABLED_OVERRIDE_SETTING", function() {
                return u
            }), n.d(t, "TestSelectors", function() {
                return r
            }), n.d(t, "MultiviewBannerPresentation", function() {
                return c
            }), n.d(t, "MultiviewBanner", function() {
                return d
            })
        }
    }
]);