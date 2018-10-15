(window.webpackJsonp = window.webpackJsonp || []).push([
    [207], {
        aztO: function(t, e, n) {
            "use strict";
            n.r(e);
            var a = n("mrSG"),
                o = n("q1tI"),
                i = n("oJmH"),
                r = n("/7QA"),
                c = n("GnwI"),
                l = n("Ue10"),
                s = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return a.__extends(e, t), e.prototype.render = function() {
                        return o.createElement(l.Wa, null, o.createElement(l.Wa, {
                            "data-test-selector": "dev-bounty-board-analytics-info-text-selector",
                            padding: {
                                top: 1,
                                bottom: .5
                            },
                            margin: {
                                bottom: 1
                            },
                            display: l.X.Flex,
                            justifyContent: l.Va.Start
                        }, o.createElement(l.W, null, Object(r.d)("Live campaign analytics can be tracked here. Historical data is available in individual campaign detail pages. Please visit the <x:link>Campaign Manager</x:link> for details.", {
                            "x:link": function(t) {
                                return o.createElement(l.U, {
                                    "data-test-selector": "dev-bounty-board-analytics-campaign-manager-link-selector",
                                    linkTo: "/console/bounty-board"
                                }, t)
                            }
                        }, "DevBountyBoardAnalyticsPage"))))
                    }, e
                }(o.Component),
                u = Object(i.compose)(Object(c.b)("DevBountyBoardAnalyticsPagePresentation", {
                    autoReportInteractive: !0
                }))(s);
            n.d(e, "CAMPAIGN_MANAGER_LINK_SELECTOR", function() {
                return "dev-bounty-board-analytics-campaign-manager-link-selector"
            }), n.d(e, "INFO_TEXT_SELECTOR", function() {
                return "dev-bounty-board-analytics-info-text-selector"
            }), n.d(e, "DevBountyBoardAnalyticsPagePresentation", function() {
                return s
            }), n.d(e, "DevBountyBoardAnalyticsPage", function() {
                return u
            })
        }
    }
]);