(window.webpackJsonp = window.webpackJsonp || []).push([
    [34], {
        sA1O: function(r, e, a) {
            "use strict";

            function n(r) {
                return function(e) {
                    try {
                        var a = "UI: " + (e.category || "Twilight"),
                            n = e.message,
                            s = e.args && 1 === e.args.length ? e.args[0] : e.args,
                            t = e.errors && e.errors.length ? e.errors[0] : null,
                            o = void 0;
                        switch (null !== t && ((o = new Error(t.message)).name = t.name, t.stack && (o.stack = t.stack)), e.level) {
                            case "debug":
                                r.debug(n, s, o, a);
                                break;
                            case "info":
                                r.info(n, s, o, a);
                                break;
                            case "warn":
                                r.warn(n, s, o, a);
                                break;
                            case "error":
                                r.error(n, s, o, a);
                                break;
                            case "fatal":
                                r.fatal(n, s, o, a);
                                break;
                            default:
                                r.info(n, s, o, a)
                        }
                    } catch (o) {
                        r.error("Unable to log twilight entries.", o)
                    }
                }
            }
            a.r(e), a.d(e, "desktopLogger", function() {
                return n
            })
        }
    }
]);