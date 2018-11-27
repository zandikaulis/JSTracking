(window.webpackJsonp = window.webpackJsonp || []).push([
    [216], {
        iSLP: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = d(n("q1tI")),
                l = d(n("17x9")),
                o = n("CJqN"),
                u = n("o5w0");

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var r = {
                    store: l.default.object
                },
                i = function() {
                    return a.default.createElement("div", {
                        id: "amazon_live"
                    }, a.default.createElement(o.LoadingOverlay, null), a.default.createElement(u.ClosedCaptions, null))
                };
            i.contextTypes = r, t.default = i
        }
    }
]);