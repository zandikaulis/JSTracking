webpackJsonp([64], {
    "7WFF": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = n("TToO"),
            o = n("GiK3"),
            r = n("CIox"),
            a = n("Odds"),
            p = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return s.__extends(e, t), e.prototype.render = function() {
                    var t;
                    return "/:slug/edit" === this.props.match.path ? (t = this.props.match.params.slug, o.createElement(r.a, {
                        to: {
                            pathname: "/create",
                            state: {
                                slug: t
                            }
                        }
                    })) : this.props.location.state && this.props.location.state.slug ? (t = this.props.location.state.slug, o.createElement(a._4, null, t)) : o.createElement(r.a, {
                        to: "/"
                    })
                }, e
            }(o.Component);
        n.d(e, "ClipsCreate", function() {
            return p
        })
    }
});
//# sourceMappingURL=sites.clips.pages.create-093869f20d5b55f5f1ded3ef026c725b.js.map