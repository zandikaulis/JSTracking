(window.webpackJsonp = window.webpackJsonp || []).push([
    [81], {
        WHo0: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n("mrSG"),
                o = n("q1tI"),
                a = n("9C/b"),
                c = n("XxES"),
                i = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.getRedirectPath = function(t) {
                            if (e.props.location.pathname.match(/^\/broadcast\//i)) return e.props.location.pathname.replace(/\/broadcast/i, "/" + t)
                        }, e
                    }
                    return r.__extends(e, t), e.prototype.render = function() {
                        return o.createElement(c.a, {
                            getRedirectPath: this.getRedirectPath
                        })
                    }, e
                }(o.Component),
                p = Object(a.a)(i);
            n.d(e, "DashboardRedirectComponent", function() {
                return i
            }), n.d(e, "DashboardRedirect", function() {
                return p
            })
        }
    }
]);