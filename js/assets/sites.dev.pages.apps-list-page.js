webpackJsonp([91], {
    "+/J2": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                o = Number(t);
            return n.setMilliseconds(o), n
        }
    },
    "+sSA": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setMilliseconds(999), t
        }
    },
    "/dIK": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                o = Number(t);
            return n.setDate(o), n
        }
    },
    "024F": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getMilliseconds()
        }
    },
    "0LAu": function(e, t, n) {
        var r = n("MIQa");
        e.exports = function() {
            return r(new Date)
        }
    },
    "0UyA": function(e, t, n) {
        var r = n("4Z4o");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    "0YGC": function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                r = e.getDate(),
                o = new Date(0);
            return o.setFullYear(t, n, r - 1), o.setHours(23, 59, 59, 999), o
        }
    },
    "0aH9": function(e, t, n) {
        var r = n("3znZ"),
            o = 6e4,
            a = 6048e5;
        e.exports = function(e, t) {
            var n = r(e),
                u = r(t),
                i = n.getTime() - n.getTimezoneOffset() * o,
                s = u.getTime() - u.getTimezoneOffset() * o;
            return Math.round((i - s) / a)
        }
    },
    "0oN5": function(e, t, n) {
        var r = n("WNGz");
        e.exports = function(e) {
            var t = new Date;
            return t.setDate(t.getDate() + 1), r(e).getTime() === r(t).getTime()
        }
    },
    "11Bn": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function() {
            var e = Array.prototype.slice.call(arguments).map(function(e) {
                    return r(e)
                }),
                t = Math.max.apply(null, e);
            return new Date(t)
        }
    },
    "1gtq": function(e, t, n) {
        var r = n("WNGz");
        e.exports = function(e) {
            var t = new Date;
            return t.setDate(t.getDate() - 1), r(e).getTime() === r(t).getTime()
        }
    },
    "1rLR": function(e, t, n) {
        var r = n("3EIC");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, 3 * n)
        }
    },
    "1udo": function(e, t, n) {
        var r = n("WNGz");
        e.exports = function() {
            return r(new Date)
        }
    },
    "25hp": function(e, t, n) {
        var r = n("G7No");
        e.exports = function(e, t) {
            var n = r(e, t) / 1e3;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    "2lB6": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t, n, o) {
            var a = r(e).getTime(),
                u = r(t).getTime(),
                i = r(n).getTime(),
                s = r(o).getTime();
            if (a > u || i > s) throw new Error("The start of the range cannot be after the end of the range");
            return a < s && i < u
        }
    },
    "3EIC": function(e, t, n) {
        var r = n("xA5w"),
            o = n("Mdww");
        e.exports = function(e, t) {
            var n = r(e),
                a = Number(t),
                u = n.getMonth() + a,
                i = new Date(0);
            i.setFullYear(n.getFullYear(), u, 1), i.setHours(0, 0, 0, 0);
            var s = o(i);
            return n.setMonth(u, Math.min(s, n.getDate())), n
        }
    },
    "3g9B": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getDate()
        }
    },
    "3nPg": function(e, t, n) {
        var r = n("G7No"),
            o = 6e4;
        e.exports = function(e, t) {
            var n = r(e, t) / o;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    "3znZ": function(e, t, n) {
        var r = n("u/4p");
        e.exports = function(e) {
            return r(e, {
                weekStartsOn: 1
            })
        }
    },
    "4LxA": function(e, t, n) {
        var r = n("iRXW");
        e.exports = function(e, t) {
            var n = r(e),
                o = r(t);
            return n.getTime() === o.getTime()
        }
    },
    "4OFc": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e).getDay();
            return 0 === t || 6 === t
        }
    },
    "4Z4o": function(e, t, n) {
        var r = n("3EIC");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, 12 * n)
        }
    },
    "4zIR": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t, n) {
            var o = r(e).getTime(),
                a = r(t).getTime(),
                u = r(n).getTime();
            if (a > u) throw new Error("The start of the range cannot be after the end of the range");
            return o >= a && o <= u
        }
    },
    "5qwL": function(e, t, n) {
        var r = n("VaeB");
        e.exports = function(e, t) {
            var n = r(e),
                o = r(t);
            return n.getTime() === o.getTime()
        }
    },
    "607n": function(e, t) {
        e.exports = function(e) {
            return e instanceof Date
        }
    },
    "6CZb": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getTime() > (new Date).getTime()
        }
    },
    "6SO/": function(e, t, n) {
        var r = n("gAt4");
        e.exports = function(e, t) {
            var n = r(e, t) / 7;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    "6Zhv": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e).getTime(),
                o = Number(t);
            return new Date(n + o)
        }
    },
    "6axH": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return 6 === r(e).getDay()
        }
    },
    "6udH": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return 1 === r(e).getDate()
        }
    },
    "7EGB": function(e, t, n) {
        var r = n("Jvcu");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, 7 * n)
        }
    },
    "7Swd": function(e, t, n) {
        var r = n("3EIC");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    "7Xwz": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setDate(1), t.setHours(0, 0, 0, 0), t
        }
    },
    "7yyf": function(e, t, n) {
        var r = n("rBmI");
        e.exports = function(e, t) {
            var n = r(e),
                o = r(t);
            return n.getTime() === o.getTime()
        }
    },
    "8Gpr": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getHours()
        }
    },
    "8KV+": function(e, t, n) {
        var r = n("u/4p");
        e.exports = function(e, t, n) {
            var o = r(e, n),
                a = r(t, n);
            return o.getTime() === a.getTime()
        }
    },
    "8QR2": function(e, t, n) {
        var r = n("xA5w"),
            o = 864e5;
        e.exports = function(e, t, n, a) {
            var u = r(e).getTime(),
                i = r(t).getTime(),
                s = r(n).getTime(),
                c = r(a).getTime();
            if (u > i || s > c) throw new Error("The start of the range cannot be after the end of the range");
            if (!(u < c && s < i)) return 0;
            var f = (c > i ? i : c) - (s < u ? u : s);
            return Math.ceil(f / o)
        }
    },
    "9Jn5": function(e, t, n) {
        var r = n("zZbG");
        e.exports = function(e, t) {
            return r(e) - r(t)
        }
    },
    "9r5b": function(e, t, n) {
        var r = n("nfOx");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    "9u8h": function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return u
        });
        var r = n("TToO"),
            o = n("6sO2"),
            a = n("Aj/L"),
            u = function() {
                function e() {}
                return e.get = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, e.getOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "GET"
                                    }), n)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, e.put = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, e.putOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "PUT"
                                    }), n)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, e.post = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, e.postOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "POST"
                                    }), n)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, e.delete = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.request(e, r.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, e.deleteOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.requestOrThrow(e, r.__assign({}, t, {
                                        method: "DELETE"
                                    }), n)];
                                case 1:
                                    return [2, o.sent()]
                            }
                        })
                    })
                }, e.request = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        var o, a, u, i;
                        return r.__generator(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return t = this.constructOptions(t, n), o = t.headers ? t.headers["Content-Type"] : void 0, a = this.serialize(t.body, o), u = r.__assign({}, t, {
                                        body: a
                                    }), [4, this._fetch(e, u)];
                                case 1:
                                    return i = s.sent(), [4, this.constructLegacyAPIResponse(i)];
                                case 2:
                                    return [2, s.sent()]
                            }
                        })
                    })
                }, e.requestOrThrow = function(e, t, n) {
                    return void 0 === t && (t = {}), void 0 === n && (n = {}), r.__awaiter(this, void 0, void 0, function() {
                        var o, a;
                        return r.__generator(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    return u.trys.push([0, 2, , 3]), [4, this.request(e, t, n)];
                                case 1:
                                    if ((o = u.sent()).error || o.requestError) throw new Error("Error while making request");
                                    return a = r.__assign({}, o, {
                                        body: o.body
                                    }), [2, Promise.resolve(a)];
                                case 2:
                                    throw u.sent();
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.getAPIURL = function(e) {
                    return new URL(e, o.o.config.apiBaseURL)
                }, e.constructLegacyAPIResponse = function(e) {
                    return r.__awaiter(this, void 0, void 0, function() {
                        var t, n, o, a;
                        return r.__generator(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    t = {
                                        status: e.status
                                    }, r.label = 1;
                                case 1:
                                    return r.trys.push([1, 3, , 4]), [4, e.json()];
                                case 2:
                                    return n = r.sent(), e.ok ? t.body = n : t.error = n, [3, 4];
                                case 3:
                                    return o = r.sent(), e.headers && e.headers.get && (a = e.headers.get("Content-Type")) && -1 !== a.indexOf("application/json") && (t.requestError = o), [3, 4];
                                case 4:
                                    return [2, t]
                            }
                        })
                    })
                }, e._fetch = function(e, t) {
                    return void 0 === t && (t = {}), r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, fetch(this.getAPIURL(e).toString(), t)];
                                case 1:
                                    return [2, n.sent()]
                            }
                        })
                    })
                }, e.constructOptions = function(e, t) {
                    return e = Object.assign({}, e, {
                        headers: r.__assign({}, this.getDefaultHeaders(e, t), e.headers)
                    })
                }, e.serialize = function(e, t) {
                    return "application/json; charset=UTF-8" === t ? JSON.stringify(e) : "string" == typeof e ? e : e && FormData.prototype.isPrototypeOf(e) ? e : e ? (this.logger.error(new Error("Could not serialize this request body for the content-type provided."), "attempting to serialize object with a non-JSON content-type", {
                        contentType: t
                    }), null) : null
                }, e.getDefaultHeaders = function(e, t) {
                    var n = o.o.store.getState(),
                        r = {
                            Accept: "application/vnd.twitchtv.v" + (t.version || 5) + "+json; charset=UTF-8",
                            "Accept-Language": "en-us",
                            "Client-ID": o.o.config.legacyClientID,
                            "X-Requested-With": "XMLHttpRequest"
                        };
                    e.body && FormData.prototype.isPrototypeOf(e.body) || (r["Content-Type"] = "application/json; charset=UTF-8");
                    var u = Object(a.c)(n);
                    return u && (r.Authorization = "OAuth " + u.authToken, u.legacyCSRFToken && (r["Twitch-Api-Token"] = u.legacyCSRFToken)), t.excludeHeaders && t.excludeHeaders.forEach(function(e) {
                        r[e] && delete r[e]
                    }), r
                }, e.logger = o.o.logger.withCategory("legacy-api"), e
            }()
    },
    A2zO: function(e, t, n) {
        var r = n("Be26");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    AZvW: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e).getDay();
            return 0 === t && (t = 7), t
        }
    },
    Akl5: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = t.getMonth();
            return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t
        }
    },
    Bb5e: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                o = r(t);
            return n.getFullYear() - o.getFullYear()
        }
    },
    Be26: function(e, t, n) {
        var r = n("8KV+");
        e.exports = function(e, t) {
            return r(e, t, {
                weekStartsOn: 1
            })
        }
    },
    CVNg: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                o = Number(t);
            return n.setMonth(0), n.setDate(o), n
        }
    },
    D6ie: function(e, t, n) {
        var r = n("xA5w"),
            o = n("3znZ"),
            a = n("iRXW"),
            u = 6048e5;
        e.exports = function(e) {
            var t = r(e),
                n = o(t).getTime() - a(t).getTime();
            return Math.round(n / u) + 1
        }
    },
    "Eoz/": function(e, t, n) {
        var r = n("ymQ7"),
            o = n("D6ie"),
            a = n("zZbG"),
            u = n("xA5w"),
            i = n("dH3X"),
            s = n("uyaC");
        var c = {
            M: function(e) {
                return e.getMonth() + 1
            },
            MM: function(e) {
                return p(e.getMonth() + 1, 2)
            },
            Q: function(e) {
                return Math.ceil((e.getMonth() + 1) / 3)
            },
            D: function(e) {
                return e.getDate()
            },
            DD: function(e) {
                return p(e.getDate(), 2)
            },
            DDD: function(e) {
                return r(e)
            },
            DDDD: function(e) {
                return p(r(e), 3)
            },
            d: function(e) {
                return e.getDay()
            },
            E: function(e) {
                return e.getDay() || 7
            },
            W: function(e) {
                return o(e)
            },
            WW: function(e) {
                return p(o(e), 2)
            },
            YY: function(e) {
                return p(e.getFullYear(), 4).substr(2)
            },
            YYYY: function(e) {
                return p(e.getFullYear(), 4)
            },
            GG: function(e) {
                return String(a(e)).substr(2)
            },
            GGGG: function(e) {
                return a(e)
            },
            H: function(e) {
                return e.getHours()
            },
            HH: function(e) {
                return p(e.getHours(), 2)
            },
            h: function(e) {
                var t = e.getHours();
                return 0 === t ? 12 : t > 12 ? t % 12 : t
            },
            hh: function(e) {
                return p(c.h(e), 2)
            },
            m: function(e) {
                return e.getMinutes()
            },
            mm: function(e) {
                return p(e.getMinutes(), 2)
            },
            s: function(e) {
                return e.getSeconds()
            },
            ss: function(e) {
                return p(e.getSeconds(), 2)
            },
            S: function(e) {
                return Math.floor(e.getMilliseconds() / 100)
            },
            SS: function(e) {
                return p(Math.floor(e.getMilliseconds() / 10), 2)
            },
            SSS: function(e) {
                return p(e.getMilliseconds(), 3)
            },
            Z: function(e) {
                return f(e.getTimezoneOffset(), ":")
            },
            ZZ: function(e) {
                return f(e.getTimezoneOffset())
            },
            X: function(e) {
                return Math.floor(e.getTime() / 1e3)
            },
            x: function(e) {
                return e.getTime()
            }
        };

        function f(e, t) {
            t = t || "";
            var n = e > 0 ? "-" : "+",
                r = Math.abs(e),
                o = r % 60;
            return n + p(Math.floor(r / 60), 2) + t + p(o, 2)
        }

        function p(e, t) {
            for (var n = Math.abs(e).toString(); n.length < t;) n = "0" + n;
            return n
        }
        e.exports = function(e, t, n) {
            var r = t ? String(t) : "YYYY-MM-DDTHH:mm:ss.SSSZ",
                o = (n || {}).locale,
                a = s.format.formatters,
                f = s.format.formattingTokensRegExp;
            o && o.format && o.format.formatters && (a = o.format.formatters, o.format.formattingTokensRegExp && (f = o.format.formattingTokensRegExp));
            var p = u(e);
            return i(p) ? function(e, t, n) {
                var r, o, a, u = e.match(n),
                    i = u.length;
                for (r = 0; r < i; r++) o = t[u[r]] || c[u[r]], u[r] = o || ((a = u[r]).match(/\[[\s\S]/) ? a.replace(/^\[|]$/g, "") : a.replace(/\\/g, ""));
                return function(e) {
                    for (var t = "", n = 0; n < i; n++) u[n] instanceof Function ? t += u[n](e, c) : t += u[n];
                    return t
                }
            }(r, a, f)(p) : "Invalid Date"
        }
    },
    Epw6: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = t.getFullYear();
            return t.setFullYear(n + 1, 0, 0), t.setHours(23, 59, 59, 999), t
        }
    },
    G7No: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                o = r(t);
            return n.getTime() - o.getTime()
        }
    },
    GI7G: function(e, t, n) {
        var r = n("xA5w"),
            o = n("orNa"),
            a = n("NKE6");
        e.exports = function(e, t) {
            var n = r(e),
                u = r(t),
                i = a(n, u),
                s = Math.abs(o(n, u));
            return n.setMonth(n.getMonth() - i * s), i * (s - (a(n, u) === -i))
        }
    },
    GvNH: function(e, t, n) {
        var r = n("WNGz");
        e.exports = function(e) {
            return r(e).getTime() === r(new Date).getTime()
        }
    },
    HXCM: function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                r = e.getDate(),
                o = new Date(0);
            return o.setFullYear(t, n, r + 1), o.setHours(23, 59, 59, 999), o
        }
    },
    I7cV: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = t && Number(t.weekStartsOn) || 0,
                o = r(e),
                a = o.getDay(),
                u = 6 + (a < n ? -7 : 0) - (a - n);
            return o.setDate(o.getDate() + u), o.setHours(23, 59, 59, 999), o
        }
    },
    JNsx: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getMinutes()
        }
    },
    JURy: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = new Date(0);
            return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
        }
    },
    Javx: function(e, t, n) {
        var r = n("b7g8");
        e.exports = function(e) {
            return r(e) ? 366 : 365
        }
    },
    Jtuq: function(e, t, n) {
        var r = n("lQzg"),
            o = n("xA5w");
        e.exports = function(e, t) {
            var n = o(e),
                a = o(t);
            return 4 * (n.getFullYear() - a.getFullYear()) + (r(n) - r(a))
        }
    },
    Jvcu: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                o = Number(t);
            return n.setDate(n.getDate() + o), n
        }
    },
    K7ZZ: function(e, t, n) {
        var r = n("zZbG"),
            o = n("3znZ");
        e.exports = function(e) {
            var t = r(e),
                n = new Date(0);
            n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
            var a = o(n);
            return a.setMilliseconds(a.getMilliseconds() - 1), a
        }
    },
    LLTj: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setMinutes(0, 0, 0), t
        }
    },
    LU20: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setSeconds(59, 999), t
        }
    },
    M5Oo: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setSeconds(0, 0), t
        }
    },
    M9Ev: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t, n) {
            var o = r(e),
                a = r(t),
                u = void 0 !== n ? n : 1,
                i = a.getTime();
            if (o.getTime() > i) throw new Error("The first date cannot be after the second date");
            var s = [],
                c = o;
            for (c.setHours(0, 0, 0, 0); c.getTime() <= i;) s.push(r(c)), c.setDate(c.getDate() + u);
            return s
        }
    },
    MIQa: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setHours(23, 59, 59, 999), t
        }
    },
    "MKc+": function(e, t, n) {
        var r = n("oNnY");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    Mbb9: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getDay()
        }
    },
    Mdww: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = t.getFullYear(),
                o = t.getMonth(),
                a = new Date(0);
            return a.setFullYear(n, o + 1, 0), a.setHours(0, 0, 0, 0), a.getDate()
        }
    },
    Moxe: function(e, t, n) {
        var r = n("M5Oo");
        e.exports = function(e, t) {
            var n = r(e),
                o = r(t);
            return n.getTime() === o.getTime()
        }
    },
    NKE6: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e).getTime(),
                o = r(t).getTime();
            return n < o ? -1 : n > o ? 1 : 0
        }
    },
    NSOL: function(e, t, n) {
        var r = n("6Zhv"),
            o = 6e4;
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, n * o)
        }
    },
    Ptqd: function(e, t) {
        e.exports = function() {
            var e = {
                lessThanXSeconds: {
                    one: "less than a second",
                    other: "less than {{count}} seconds"
                },
                xSeconds: {
                    one: "1 second",
                    other: "{{count}} seconds"
                },
                halfAMinute: "half a minute",
                lessThanXMinutes: {
                    one: "less than a minute",
                    other: "less than {{count}} minutes"
                },
                xMinutes: {
                    one: "1 minute",
                    other: "{{count}} minutes"
                },
                aboutXHours: {
                    one: "about 1 hour",
                    other: "about {{count}} hours"
                },
                xHours: {
                    one: "1 hour",
                    other: "{{count}} hours"
                },
                xDays: {
                    one: "1 day",
                    other: "{{count}} days"
                },
                aboutXMonths: {
                    one: "about 1 month",
                    other: "about {{count}} months"
                },
                xMonths: {
                    one: "1 month",
                    other: "{{count}} months"
                },
                aboutXYears: {
                    one: "about 1 year",
                    other: "about {{count}} years"
                },
                xYears: {
                    one: "1 year",
                    other: "{{count}} years"
                },
                overXYears: {
                    one: "over 1 year",
                    other: "over {{count}} years"
                },
                almostXYears: {
                    one: "almost 1 year",
                    other: "almost {{count}} years"
                }
            };
            return {
                localize: function(t, n, r) {
                    var o;
                    return r = r || {}, o = "string" == typeof e[t] ? e[t] : 1 === n ? e[t].one : e[t].other.replace("{{count}}", n), r.addSuffix ? r.comparison > 0 ? "in " + o : o + " ago" : o
                }
            }
        }
    },
    Q2rx: function(e, t, n) {
        var r = n("u/4p"),
            o = 6e4,
            a = 6048e5;
        e.exports = function(e, t, n) {
            var u = r(e, n),
                i = r(t, n),
                s = u.getTime() - u.getTimezoneOffset() * o,
                c = i.getTime() - i.getTimezoneOffset() * o;
            return Math.round((s - c) / a)
        }
    },
    Qbo9: function(e, t, n) {
        var r = n("Moxe");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    Qxz6: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                o = r(t);
            return n.getFullYear() === o.getFullYear()
        }
    },
    SHOI: function(e, t, n) {
        var r = n("xA5w"),
            o = n("Jvcu");
        e.exports = function(e, t, n) {
            var a = n && Number(n.weekStartsOn) || 0,
                u = r(e),
                i = Number(t),
                s = u.getDay();
            return o(u, ((i % 7 + 7) % 7 < a ? 7 : 0) + i - s)
        }
    },
    SJLv: function(e, t) {
        var n = ["M", "MM", "Q", "D", "DD", "DDD", "DDDD", "d", "E", "W", "WW", "YY", "YYYY", "GG", "GGGG", "H", "HH", "h", "hh", "m", "mm", "s", "ss", "S", "SS", "SSS", "Z", "ZZ", "X", "x"];
        e.exports = function(e) {
            var t = [];
            for (var r in e) e.hasOwnProperty(r) && t.push(r);
            var o = n.concat(t).sort().reverse();
            return new RegExp("(\\[[^\\[]*\\])|(\\\\)?(" + o.join("|") + "|.)", "g")
        }
    },
    SZZR: function(e, t, n) {
        var r = n("I7cV");
        e.exports = function(e) {
            return r(e, {
                weekStartsOn: 1
            })
        }
    },
    "T/Ln": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = t.getMonth(),
                o = n - n % 3 + 3;
            return t.setMonth(o, 0), t.setHours(0, 0, 0, 0), t
        }
    },
    ToRI: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                o = Number(t);
            return n.setSeconds(o), n
        }
    },
    Tv4R: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var n, o, a = r(e).getTime();
            return t.forEach(function(e) {
                var t = r(e),
                    u = Math.abs(a - t.getTime());
                (void 0 === n || u < o) && (n = t, o = u)
            }), n
        }
    },
    "Uu+E": function(e, t, n) {
        var r = n("xA5w"),
            o = n("iRXW"),
            a = n("nizW");
        e.exports = function(e, t) {
            var n = r(e),
                u = Number(t),
                i = a(n, o(n)),
                s = new Date(0);
            return s.setFullYear(u, 0, 4), s.setHours(0, 0, 0, 0), (n = o(s)).setDate(n.getDate() + i), n
        }
    },
    VaeB: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setMilliseconds(0), t
        }
    },
    WNGz: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setHours(0, 0, 0, 0), t
        }
    },
    XFzU: function(e, t, n) {
        var r = n("GI7G");
        e.exports = function(e, t) {
            var n = r(e, t) / 3;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    YPf8: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return 5 === r(e).getDay()
        }
    },
    YPjl: function(e, t, n) {
        var r = n("xA5w"),
            o = n("Jvcu"),
            a = n("AZvW");
        e.exports = function(e, t) {
            var n = r(e),
                u = Number(t),
                i = a(n);
            return o(n, u - i)
        }
    },
    YRFD: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e).getTime(),
                o = r(t).getTime();
            return n > o ? -1 : n < o ? 1 : 0
        }
    },
    ZUMa: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return 0 === r(e).getDay()
        }
    },
    a7Cs: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                o = Number(t);
            return n.setFullYear(o), n
        }
    },
    aHtT: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function() {
            var e = Array.prototype.slice.call(arguments).map(function(e) {
                    return r(e)
                }),
                t = Math.min.apply(null, e);
            return new Date(t)
        }
    },
    b7g8: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e).getFullYear();
            return t % 400 == 0 || t % 4 == 0 && t % 100 != 0
        }
    },
    balU: function(e, t, n) {
        var r = n("xA5w"),
            o = n("Mdww");
        e.exports = function(e, t) {
            var n = r(e),
                a = Number(t),
                u = n.getFullYear(),
                i = n.getDate(),
                s = new Date(0);
            s.setFullYear(u, a, 15), s.setHours(0, 0, 0, 0);
            var c = o(s);
            return n.setMonth(a, Math.min(i, c)), n
        }
    },
    bbdo: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return t.setMinutes(59, 59, 999), t
        }
    },
    c6GF: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n("TToO"),
            o = n("GiK3"),
            a = n("j7/Y"),
            u = n("w9tK"),
            i = n("9u8h"),
            s = n("vH/s"),
            c = n("CSlQ"),
            f = n("6sO2"),
            p = n("wuJz");

        function l(e, t) {
            return Object(p.format)(e, t)
        }
        var v = n("Odds"),
            d = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.onDelete = function(e) {
                        e.preventDefault(), t.props.onDelete(t.props.app.id)
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = l(new Date(this.props.app.created_at), "MM/DD/YYYY, hh:mm a"),
                        t = l(new Date(this.props.app.updated_at), "MM/DD/YYYY, hh:mm a");
                    return o.createElement(v._40, {
                        key: this.props.app.id
                    }, o.createElement(v._37, null, this.props.app.name), o.createElement(v._37, null, this.props.app.redirect_uri), o.createElement(v._37, null, e), o.createElement(v._37, null, t), o.createElement(v._37, null, o.createElement(v._8, {
                        display: v.R.Flex,
                        justifyContent: v._7.Center
                    }, o.createElement(v._8, {
                        margin: {
                            right: 1
                        }
                    }, o.createElement(v.v, {
                        linkTo: "/console/apps/" + this.props.app.id
                    }, Object(f.d)("Manage", "DevAppListRow"))), o.createElement(v.v, {
                        onClick: this.onDelete,
                        "data-test-selector": "dev-apps-list-row-delete"
                    }, Object(f.d)("Delete", "DevAppListRow")))))
                }, t
            }(o.Component),
            h = Object(c.d)("DevAppListRow")(d),
            g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.renderAppRows = function() {
                        return t.props.apps.map(function(e) {
                            return o.createElement(h, {
                                key: e.id,
                                app: e,
                                onDelete: t.props.onDelete
                            })
                        })
                    }, t
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    var e = this.renderAppRows();
                    return o.createElement(v._35, {
                        alternateRows: !0
                    }, o.createElement(v._38, null, o.createElement(v._39, {
                        label: Object(f.d)("Name", "DevAppsList")
                    }), o.createElement(v._39, {
                        label: Object(f.d)("URL", "DevAppsList")
                    }), o.createElement(v._39, {
                        label: Object(f.d)("Date Created", "DevAppsList")
                    }), o.createElement(v._39, {
                        label: Object(f.d)("Last Updated", "DevAppsList")
                    }), o.createElement(v._39, {
                        label: ""
                    })), o.createElement(v._36, null, e))
                }, t = r.__decorate([Object(c.d)("DevAppsList", {
                    autoReportInteractive: !0
                })], t)
            }(o.Component),
            x = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    this.props.latencyTracking.reportInteractive()
                }, t.prototype.render = function() {
                    return o.createElement(v._8, {
                        className: "dev-apps"
                    }, o.createElement(v._2, {
                        margin: {
                            bottom: 2
                        }
                    }, o.createElement("header", null, o.createElement(v.Q, {
                        type: v._46.H3
                    }, Object(f.d)("Developer Applications", "DevApps")), o.createElement(v.Q, {
                        type: v._46.P
                    }, Object(f.d)("You have registered these apps to use the Twitch API", "DevApps")))), o.createElement(v._8, null, o.createElement(v._8, {
                        margin: {
                            bottom: 1
                        },
                        justifyContent: v._7.End,
                        display: v.R.Flex
                    }, o.createElement(v.v, {
                        icon: v._23.Plus,
                        linkTo: "/console/apps/create"
                    }, Object(f.d)("Register Your Application", "DevApps"))), o.createElement(g, {
                        apps: this.props.apps,
                        onDelete: this.props.onDelete
                    })))
                }, t
            }(o.Component),
            m = Object(c.d)("DevAppsComponent", {
                autoReportInteractive: !0
            })(x),
            w = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    return n.state = {
                        apps: []
                    }, n.onDelete = function(e) {
                        return r.__awaiter(n, void 0, void 0, function() {
                            return r.__generator(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (!window.confirm("Are you sure you want to delete this App?")) return [3, 6];
                                        t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 5, , 6]), [4, i.a.delete("/kraken/apps/" + e)];
                                    case 2:
                                        return 204 !== t.sent().status ? [3, 4] : [4, this.loadApps()];
                                    case 3:
                                        t.sent(), t.label = 4;
                                    case 4:
                                        return [3, 6];
                                    case 5:
                                        return t.sent(), [2];
                                    case 6:
                                        return [2]
                                }
                            })
                        })
                    }, n.loadApps = function() {
                        return r.__awaiter(n, void 0, void 0, function() {
                            var e, t;
                            return r.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, i.a.get("/kraken/apps")];
                                    case 1:
                                        return 200 === (e = n.sent()).status && e.body && (t = e.body.apps.filter(function(e) {
                                            return !e.name.startsWith("Extension ")
                                        }), this.setState({
                                            apps: t
                                        })), [3, 3];
                                    case 2:
                                        return n.sent(), [2];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, n
                }
                return r.__extends(t, e), t.prototype.componentDidMount = function() {
                    return r.__awaiter(this, void 0, void 0, function() {
                        return r.__generator(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.loadApps()];
                                case 1:
                                    return e.sent(), this.props.latencyTracking.reportInteractive(), [2]
                            }
                        })
                    })
                }, t.prototype.render = function() {
                    return o.createElement(m, {
                        apps: this.state.apps,
                        onDelete: this.onDelete
                    })
                }, t = r.__decorate([Object(c.d)("DevAppsListPage", {
                    destination: u.a.DevSiteApps
                }), Object(a.a)({
                    location: s.PageviewLocation.DevSiteApps
                })], t)
            }(o.Component);
        n.d(t, "DevAppsPage", function() {
            return w
        })
    },
    "cA+x": function(e, t, n) {
        var r = n("Jvcu");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    cONr: function(e, t, n) {
        var r = n("f+sD");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    cw9o: function(e, t, n) {
        var r = n("7EGB");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    cwv1: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getTime()
        }
    },
    dH3X: function(e, t, n) {
        var r = n("607n");
        e.exports = function(e) {
            if (r(e)) return !isNaN(e);
            throw new TypeError(toString.call(e) + " is not an instance of Date")
        }
    },
    danj: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                o = Number(t);
            return n.setMinutes(o), n
        }
    },
    "e/EH": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return 3 === r(e).getDay()
        }
    },
    eCZG: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getTime() < (new Date).getTime()
        }
    },
    eKpK: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getSeconds()
        }
    },
    "f+sD": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                o = r(t);
            return n.getFullYear() === o.getFullYear() && n.getMonth() === o.getMonth()
        }
    },
    f4ga: function(e, t, n) {
        var r = n("WNGz");
        e.exports = function(e, t) {
            var n = r(e),
                o = r(t);
            return n.getTime() === o.getTime()
        }
    },
    fK0I: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                o = r(t);
            return n.getTime() > o.getTime()
        }
    },
    fUo1: function(e, t, n) {
        var r = n("iRXW"),
            o = n("7EGB"),
            a = 6048e5;
        e.exports = function(e) {
            var t = r(e),
                n = r(o(t, 60)).valueOf() - t.valueOf();
            return Math.round(n / a)
        }
    },
    fo7E: function(e, t, n) {
        var r = n("w4by");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    gAt4: function(e, t, n) {
        var r = n("xA5w"),
            o = n("nizW"),
            a = n("NKE6");
        e.exports = function(e, t) {
            var n = r(e),
                u = r(t),
                i = a(n, u),
                s = Math.abs(o(n, u));
            return n.setDate(n.getDate() - i * s), i * (s - (a(n, u) === -i))
        }
    },
    gDPd: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                o = r(t);
            return n.getTime() < o.getTime()
        }
    },
    gUEJ: function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                r = e.getDate(),
                o = new Date(0);
            return o.setFullYear(t, n, r + 1), o.setHours(0, 0, 0, 0), o
        }
    },
    hUHO: function(e, t, n) {
        var r = n("4LxA");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    hico: function(e, t, n) {
        var r = n("zZbG"),
            o = n("3znZ");
        e.exports = function(e) {
            var t = r(e),
                n = new Date(0);
            n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
            var a = o(n);
            return a.setDate(a.getDate() - 1), a
        }
    },
    hj5Y: function(e, t, n) {
        var r = n("5qwL");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    iRXW: function(e, t, n) {
        var r = n("zZbG"),
            o = n("3znZ");
        e.exports = function(e) {
            var t = r(e),
                n = new Date(0);
            return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), o(n)
        }
    },
    "j7/Y": function(e, t, n) {
        "use strict";
        var r = n("TToO"),
            o = n("OAwv"),
            a = n("GiK3"),
            u = n("F8kA"),
            i = n("6sO2");

        function s(e) {
            return function(t) {
                var n = function(n) {
                    function u(t) {
                        var o = n.call(this, t) || this;
                        return o.tracked = !1, o.referenceTracking = {}, o.trackPageview = function() {
                            if (!(o.tracked || e.skip && e.skip(o.props))) {
                                o.tracked = !0;
                                var t = {};
                                "function" == typeof e.properties ? t = e.properties(o.props) : e.properties && (t = r.__assign({}, e.properties));
                                var n = r.__assign({}, o.props);
                                n.location && n.location.state && (t.medium = n.location.state.medium, t.content = n.location.state.content, t.content_index = n.location.state.content_index);
                                var a = o.referenceTracking,
                                    u = a.content,
                                    s = a.medium,
                                    c = a.content_index;
                                i.o.tracking.trackPageview(r.__assign({
                                    content: u,
                                    medium: s,
                                    content_index: c,
                                    location: e.location
                                }, t))
                            }
                        }, i.j.debug("pageViewTracking", e), t.rootLatencyTracker ? t.rootLatencyTracker.setLocation(e.location) : i.j.warn("No latency tracker exists! This means no data will be sent to Spade.", e), o
                    }
                    return r.__extends(u, n), u.prototype.componentDidMount = function() {
                        var e = this;
                        this.referenceTracking = this.stripTTParams(this.props.history.location), this.trackPageview(), this.props.history.listen(function(t, n) {
                            "REPLACE" !== n && (e.tracked = !1, e.referenceTracking = {})
                        })
                    }, u.prototype.componentDidUpdate = function() {
                        this.trackPageview()
                    }, u.prototype.render = function() {
                        return a.createElement(t, r.__assign({}, this.props))
                    }, u.prototype.stripTTParams = function(e) {
                        var t = "" !== e.search ? o.parse(e.search) : {},
                            n = {
                                content: t.tt_content,
                                content_index: t.tt_content_index,
                                medium: t.tt_medium
                            };
                        if (delete t.tt_content, delete t.tt_content_index, delete t.tt_medium, n.medium || n.content) {
                            var r = "",
                                a = o.stringify(t);
                            a.length > 0 && (r = "?" + a), this.props.history.replace({
                                pathname: e.pathname,
                                hash: e.hash,
                                search: r
                            })
                        }
                        return n
                    }, u
                }(a.Component);
                return Object(u.f)(n)
            }
        }
        n.d(t, "a", function() {
            return s
        })
    },
    jQas: function(e, t, n) {
        var r = n("SJLv");
        e.exports = function() {
            var e = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                t = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                n = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                o = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                a = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                u = ["AM", "PM"],
                i = ["am", "pm"],
                s = ["a.m.", "p.m."],
                c = {
                    MMM: function(t) {
                        return e[t.getMonth()]
                    },
                    MMMM: function(e) {
                        return t[e.getMonth()]
                    },
                    dd: function(e) {
                        return n[e.getDay()]
                    },
                    ddd: function(e) {
                        return o[e.getDay()]
                    },
                    dddd: function(e) {
                        return a[e.getDay()]
                    },
                    A: function(e) {
                        return e.getHours() / 12 >= 1 ? u[1] : u[0]
                    },
                    a: function(e) {
                        return e.getHours() / 12 >= 1 ? i[1] : i[0]
                    },
                    aa: function(e) {
                        return e.getHours() / 12 >= 1 ? s[1] : s[0]
                    }
                };
            return ["M", "D", "DDD", "d", "Q", "W"].forEach(function(e) {
                c[e + "o"] = function(t, n) {
                    return function(e) {
                        var t = e % 100;
                        if (t > 20 || t < 10) switch (t % 10) {
                            case 1:
                                return e + "st";
                            case 2:
                                return e + "nd";
                            case 3:
                                return e + "rd"
                        }
                        return e + "th"
                    }(n[e](t))
                }
            }), {
                formatters: c,
                formattingTokensRegExp: r(c)
            }
        }
    },
    jy2q: function(e, t, n) {
        var r = n("xA5w"),
            o = n("balU");
        e.exports = function(e, t) {
            var n = r(e),
                a = Number(t) - (Math.floor(n.getMonth() / 3) + 1);
            return o(n, n.getMonth() + 3 * a)
        }
    },
    kDuD: function(e, t, n) {
        var r = n("xA5w"),
            o = n("MIQa"),
            a = n("xKy+");
        e.exports = function(e) {
            var t = r(e);
            return o(t).getTime() === a(t).getTime()
        }
    },
    kIFi: function(e, t, n) {
        var r = n("NSOL");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    kRs6: function(e, t, n) {
        var r = n("Qxz6");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    kjlQ: function(e, t, n) {
        var r = n("G7No"),
            o = 36e5;
        e.exports = function(e, t) {
            var n = r(e, t) / o;
            return n > 0 ? Math.floor(n) : Math.ceil(n)
        }
    },
    kkVd: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return 1 === r(e).getDay()
        }
    },
    l85J: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getMonth()
        }
    },
    lQzg: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e);
            return Math.floor(t.getMonth() / 3) + 1
        }
    },
    mSFb: function(e, t) {
        e.exports = function() {
            var e = new Date,
                t = e.getFullYear(),
                n = e.getMonth(),
                r = e.getDate(),
                o = new Date(0);
            return o.setFullYear(t, n, r - 1), o.setHours(0, 0, 0, 0), o
        }
    },
    mXYp: function(e, t, n) {
        var r = n("YRFD"),
            o = n("xA5w"),
            a = n("25hp"),
            u = n("GI7G"),
            i = n("uyaC"),
            s = 1440,
            c = 2520,
            f = 43200,
            p = 86400;
        e.exports = function(e, t, n) {
            var l = n || {},
                v = r(e, t),
                d = l.locale,
                h = i.distanceInWords.localize;
            d && d.distanceInWords && d.distanceInWords.localize && (h = d.distanceInWords.localize);
            var g, x, m = {
                addSuffix: Boolean(l.addSuffix),
                comparison: v
            };
            v > 0 ? (g = o(e), x = o(t)) : (g = o(t), x = o(e));
            var w, D = a(x, g),
                T = x.getTimezoneOffset() - g.getTimezoneOffset(),
                y = Math.round(D / 60) - T;
            if (y < 2) return l.includeSeconds ? D < 5 ? h("lessThanXSeconds", 5, m) : D < 10 ? h("lessThanXSeconds", 10, m) : D < 20 ? h("lessThanXSeconds", 20, m) : D < 40 ? h("halfAMinute", null, m) : h(D < 60 ? "lessThanXMinutes" : "xMinutes", 1, m) : 0 === y ? h("lessThanXMinutes", 1, m) : h("xMinutes", y, m);
            if (y < 45) return h("xMinutes", y, m);
            if (y < 90) return h("aboutXHours", 1, m);
            if (y < s) return h("aboutXHours", Math.round(y / 60), m);
            if (y < c) return h("xDays", 1, m);
            if (y < f) return h("xDays", Math.round(y / s), m);
            if (y < p) return h("aboutXMonths", w = Math.round(y / f), m);
            if ((w = u(x, g)) < 12) return h("xMonths", Math.round(y / f), m);
            var M = w % 12,
                b = Math.floor(w / 12);
            return M < 3 ? h("aboutXYears", b, m) : M < 9 ? h("overXYears", b, m) : h("almostXYears", b + 1, m)
        }
    },
    nZeo: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return r(e).getFullYear()
        }
    },
    nfOx: function(e, t, n) {
        var r = n("6Zhv");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, 1e3 * n)
        }
    },
    nizW: function(e, t, n) {
        var r = n("WNGz"),
            o = 6e4,
            a = 864e5;
        e.exports = function(e, t) {
            var n = r(e),
                u = r(t),
                i = n.getTime() - n.getTimezoneOffset() * o,
                s = u.getTime() - u.getTimezoneOffset() * o;
            return Math.round((i - s) / a)
        }
    },
    nk30: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = t && Number(t.weekStartsOn) || 0,
                o = r(e),
                a = o.getDay(),
                u = 6 + (a < n ? -7 : 0) - (a - n);
            return o.setHours(0, 0, 0, 0), o.setDate(o.getDate() + u), o
        }
    },
    oNnY: function(e, t, n) {
        var r = n("zZbG"),
            o = n("Uu+E");
        e.exports = function(e, t) {
            var n = Number(t);
            return o(e, r(e) + n)
        }
    },
    oke8: function(e, t, n) {
        var r = n("1rLR");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    orNa: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                o = r(t);
            return 12 * (n.getFullYear() - o.getFullYear()) + (n.getMonth() - o.getMonth())
        }
    },
    pe7V: function(e, t, n) {
        var r = n("8KV+");
        e.exports = function(e, t) {
            return r(new Date, e, t)
        }
    },
    qNYo: function(e, t, n) {
        var r = n("xA5w"),
            o = n("9Jn5"),
            a = n("NKE6"),
            u = n("MKc+");
        e.exports = function(e, t) {
            var n = r(e),
                i = r(t),
                s = a(n, i),
                c = Math.abs(o(n, i));
            return n = u(n, s * c), s * (c - (a(n, i) === -s))
        }
    },
    qPxx: function(e, t, n) {
        var r = n("LLTj");
        e.exports = function(e, t) {
            var n = r(e),
                o = r(t);
            return n.getTime() === o.getTime()
        }
    },
    rBmI: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = t.getMonth(),
                o = n - n % 3;
            return t.setMonth(o, 1), t.setHours(0, 0, 0, 0), t
        }
    },
    rO5X: function(e, t, n) {
        var r = n("xA5w"),
            o = n("Bb5e"),
            a = n("NKE6");
        e.exports = function(e, t) {
            var n = r(e),
                u = r(t),
                i = a(n, u),
                s = Math.abs(o(n, u));
            return n.setFullYear(n.getFullYear() - i * s), i * (s - (a(n, u) === -i))
        }
    },
    sdTe: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                o = r(t);
            return n.getTime() === o.getTime()
        }
    },
    t6pj: function(e, t, n) {
        var r = n("YRFD"),
            o = n("xA5w"),
            a = n("25hp"),
            u = n("uyaC"),
            i = 1440,
            s = 43200,
            c = 525600;
        e.exports = function(e, t, n) {
            var f = n || {},
                p = r(e, t),
                l = f.locale,
                v = u.distanceInWords.localize;
            l && l.distanceInWords && l.distanceInWords.localize && (v = l.distanceInWords.localize);
            var d, h, g, x = {
                addSuffix: Boolean(f.addSuffix),
                comparison: p
            };
            p > 0 ? (d = o(e), h = o(t)) : (d = o(t), h = o(e));
            var m = Math[f.partialMethod ? String(f.partialMethod) : "floor"],
                w = a(h, d),
                D = h.getTimezoneOffset() - d.getTimezoneOffset(),
                T = m(w / 60) - D;
            if ("s" === (g = f.unit ? String(f.unit) : T < 1 ? "s" : T < 60 ? "m" : T < i ? "h" : T < s ? "d" : T < c ? "M" : "Y")) return v("xSeconds", w, x);
            if ("m" === g) return v("xMinutes", T, x);
            if ("h" === g) return v("xHours", m(T / 60), x);
            if ("d" === g) return v("xDays", m(T / i), x);
            if ("M" === g) return v("xMonths", m(T / s), x);
            if ("Y" === g) return v("xYears", m(T / c), x);
            throw new Error("Unknown unit: " + g)
        }
    },
    t8zS: function(e, t, n) {
        var r = n("nk30");
        e.exports = function(e) {
            return r(e, {
                weekStartsOn: 1
            })
        }
    },
    "u/4p": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = t && Number(t.weekStartsOn) || 0,
                o = r(e),
                a = o.getDay(),
                u = (a < n ? 7 : 0) + a - n;
            return o.setDate(o.getDate() - u), o.setHours(0, 0, 0, 0), o
        }
    },
    uwZN: function(e, t, n) {
        var r = n("7yyf");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    uyaC: function(e, t, n) {
        var r = n("Ptqd"),
            o = n("jQas");
        e.exports = {
            distanceInWords: r(),
            format: o()
        }
    },
    vBvW: function(e, t, n) {
        var r = n("mXYp");
        e.exports = function(e, t) {
            return r(Date.now(), e, t)
        }
    },
    ve2D: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return 2 === r(e).getDay()
        }
    },
    w4by: function(e, t, n) {
        var r = n("6Zhv"),
            o = 36e5;
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, n * o)
        }
    },
    wAFH: function(e, t, n) {
        var r = n("6Zhv");
        e.exports = function(e, t) {
            var n = Number(t);
            return r(e, -n)
        }
    },
    wPo5: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            var n = r(e),
                o = Number(t);
            return n.setHours(o), n
        }
    },
    wajf: function(e, t, n) {
        var r = n("xA5w"),
            o = n("D6ie");
        e.exports = function(e, t) {
            var n = r(e),
                a = Number(t),
                u = o(n) - a;
            return n.setDate(n.getDate() - 7 * u), n
        }
    },
    wiYS: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e, t) {
            if (!(t instanceof Array)) throw new TypeError(toString.call(t) + " is not an instance of Array");
            var n, o, a = r(e).getTime();
            return t.forEach(function(e, t) {
                var u = r(e),
                    i = Math.abs(a - u.getTime());
                (void 0 === n || i < o) && (n = t, o = i)
            }), n
        }
    },
    wuJz: function(e, t, n) {
        e.exports = {
            addDays: n("Jvcu"),
            addHours: n("w4by"),
            addISOYears: n("oNnY"),
            addMilliseconds: n("6Zhv"),
            addMinutes: n("NSOL"),
            addMonths: n("3EIC"),
            addQuarters: n("1rLR"),
            addSeconds: n("nfOx"),
            addWeeks: n("7EGB"),
            addYears: n("4Z4o"),
            areRangesOverlapping: n("2lB6"),
            closestIndexTo: n("wiYS"),
            closestTo: n("Tv4R"),
            compareAsc: n("NKE6"),
            compareDesc: n("YRFD"),
            differenceInCalendarDays: n("nizW"),
            differenceInCalendarISOWeeks: n("0aH9"),
            differenceInCalendarISOYears: n("9Jn5"),
            differenceInCalendarMonths: n("orNa"),
            differenceInCalendarQuarters: n("Jtuq"),
            differenceInCalendarWeeks: n("Q2rx"),
            differenceInCalendarYears: n("Bb5e"),
            differenceInDays: n("gAt4"),
            differenceInHours: n("kjlQ"),
            differenceInISOYears: n("qNYo"),
            differenceInMilliseconds: n("G7No"),
            differenceInMinutes: n("3nPg"),
            differenceInMonths: n("GI7G"),
            differenceInQuarters: n("XFzU"),
            differenceInSeconds: n("25hp"),
            differenceInWeeks: n("6SO/"),
            differenceInYears: n("rO5X"),
            distanceInWords: n("mXYp"),
            distanceInWordsStrict: n("t6pj"),
            distanceInWordsToNow: n("vBvW"),
            eachDay: n("M9Ev"),
            endOfDay: n("MIQa"),
            endOfHour: n("bbdo"),
            endOfISOWeek: n("SZZR"),
            endOfISOYear: n("K7ZZ"),
            endOfMinute: n("LU20"),
            endOfMonth: n("xKy+"),
            endOfQuarter: n("zQFw"),
            endOfSecond: n("+sSA"),
            endOfToday: n("0LAu"),
            endOfTomorrow: n("HXCM"),
            endOfWeek: n("I7cV"),
            endOfYear: n("Epw6"),
            endOfYesterday: n("0YGC"),
            format: n("Eoz/"),
            getDate: n("3g9B"),
            getDay: n("Mbb9"),
            getDayOfYear: n("ymQ7"),
            getDaysInMonth: n("Mdww"),
            getDaysInYear: n("Javx"),
            getHours: n("8Gpr"),
            getISODay: n("AZvW"),
            getISOWeek: n("D6ie"),
            getISOWeeksInYear: n("fUo1"),
            getISOYear: n("zZbG"),
            getMilliseconds: n("024F"),
            getMinutes: n("JNsx"),
            getMonth: n("l85J"),
            getOverlappingDaysInRanges: n("8QR2"),
            getQuarter: n("lQzg"),
            getSeconds: n("eKpK"),
            getTime: n("cwv1"),
            getYear: n("nZeo"),
            isAfter: n("fK0I"),
            isBefore: n("gDPd"),
            isDate: n("607n"),
            isEqual: n("sdTe"),
            isFirstDayOfMonth: n("6udH"),
            isFriday: n("YPf8"),
            isFuture: n("6CZb"),
            isLastDayOfMonth: n("kDuD"),
            isLeapYear: n("b7g8"),
            isMonday: n("kkVd"),
            isPast: n("eCZG"),
            isSameDay: n("f4ga"),
            isSameHour: n("qPxx"),
            isSameISOWeek: n("Be26"),
            isSameISOYear: n("4LxA"),
            isSameMinute: n("Moxe"),
            isSameMonth: n("f+sD"),
            isSameQuarter: n("7yyf"),
            isSameSecond: n("5qwL"),
            isSameWeek: n("8KV+"),
            isSameYear: n("Qxz6"),
            isSaturday: n("6axH"),
            isSunday: n("ZUMa"),
            isThisHour: n("z3wv"),
            isThisISOWeek: n("A2zO"),
            isThisISOYear: n("hUHO"),
            isThisMinute: n("Qbo9"),
            isThisMonth: n("cONr"),
            isThisQuarter: n("uwZN"),
            isThisSecond: n("hj5Y"),
            isThisWeek: n("pe7V"),
            isThisYear: n("kRs6"),
            isThursday: n("yu3m"),
            isToday: n("GvNH"),
            isTomorrow: n("0oN5"),
            isTuesday: n("ve2D"),
            isValid: n("dH3X"),
            isWednesday: n("e/EH"),
            isWeekend: n("4OFc"),
            isWithinRange: n("4zIR"),
            isYesterday: n("1gtq"),
            lastDayOfISOWeek: n("t8zS"),
            lastDayOfISOYear: n("hico"),
            lastDayOfMonth: n("Akl5"),
            lastDayOfQuarter: n("T/Ln"),
            lastDayOfWeek: n("nk30"),
            lastDayOfYear: n("xLg3"),
            max: n("11Bn"),
            min: n("aHtT"),
            parse: n("xA5w"),
            setDate: n("/dIK"),
            setDay: n("SHOI"),
            setDayOfYear: n("CVNg"),
            setHours: n("wPo5"),
            setISODay: n("YPjl"),
            setISOWeek: n("wajf"),
            setISOYear: n("Uu+E"),
            setMilliseconds: n("+/J2"),
            setMinutes: n("danj"),
            setMonth: n("balU"),
            setQuarter: n("jy2q"),
            setSeconds: n("ToRI"),
            setYear: n("a7Cs"),
            startOfDay: n("WNGz"),
            startOfHour: n("LLTj"),
            startOfISOWeek: n("3znZ"),
            startOfISOYear: n("iRXW"),
            startOfMinute: n("M5Oo"),
            startOfMonth: n("7Xwz"),
            startOfQuarter: n("rBmI"),
            startOfSecond: n("VaeB"),
            startOfToday: n("1udo"),
            startOfTomorrow: n("gUEJ"),
            startOfWeek: n("u/4p"),
            startOfYear: n("JURy"),
            startOfYesterday: n("mSFb"),
            subDays: n("cA+x"),
            subHours: n("fo7E"),
            subISOYears: n("MKc+"),
            subMilliseconds: n("wAFH"),
            subMinutes: n("kIFi"),
            subMonths: n("7Swd"),
            subQuarters: n("oke8"),
            subSeconds: n("9r5b"),
            subWeeks: n("cw9o"),
            subYears: n("0UyA")
        }
    },
    xA5w: function(e, t, n) {
        var r = n("607n"),
            o = 36e5,
            a = 6e4,
            u = 2,
            i = /[T ]/,
            s = /:/,
            c = /^(\d{2})$/,
            f = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
            p = /^(\d{4})/,
            l = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
            v = /^-(\d{2})$/,
            d = /^-?(\d{3})$/,
            h = /^-?(\d{2})-?(\d{2})$/,
            g = /^-?W(\d{2})$/,
            x = /^-?W(\d{2})-?(\d{1})$/,
            m = /^(\d{2}([.,]\d*)?)$/,
            w = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
            D = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
            T = /([Z+-].*)$/,
            y = /^(Z)$/,
            M = /^([+-])(\d{2})$/,
            b = /^([+-])(\d{2}):?(\d{2})$/;

        function A(e, t, n) {
            t = t || 0, n = n || 0;
            var r = new Date(0);
            r.setUTCFullYear(e, 0, 4);
            var o = 7 * t + n + 1 - (r.getUTCDay() || 7);
            return r.setUTCDate(r.getUTCDate() + o), r
        }
        e.exports = function(e, t) {
            if (r(e)) return new Date(e.getTime());
            if ("string" != typeof e) return new Date(e);
            var n = (t || {}).additionalDigits;
            n = null == n ? u : Number(n);
            var O = function(e) {
                    var t, n = {},
                        r = e.split(i);
                    if (s.test(r[0]) ? (n.date = null, t = r[0]) : (n.date = r[0], t = r[1]), t) {
                        var o = T.exec(t);
                        o ? (n.time = t.replace(o[1], ""), n.timezone = o[1]) : n.time = t
                    }
                    return n
                }(e),
                _ = function(e, t) {
                    var n, r = f[t],
                        o = l[t];
                    if (n = p.exec(e) || o.exec(e)) {
                        var a = n[1];
                        return {
                            year: parseInt(a, 10),
                            restDateString: e.slice(a.length)
                        }
                    }
                    if (n = c.exec(e) || r.exec(e)) {
                        var u = n[1];
                        return {
                            year: 100 * parseInt(u, 10),
                            restDateString: e.slice(u.length)
                        }
                    }
                    return {
                        year: null
                    }
                }(O.date, n),
                Y = _.year,
                S = function(e, t) {
                    if (null === t) return null;
                    var n, r, o, a;
                    if (0 === e.length) return (r = new Date(0)).setUTCFullYear(t), r;
                    if (n = v.exec(e)) return r = new Date(0), o = parseInt(n[1], 10) - 1, r.setUTCFullYear(t, o), r;
                    if (n = d.exec(e)) {
                        r = new Date(0);
                        var u = parseInt(n[1], 10);
                        return r.setUTCFullYear(t, 0, u), r
                    }
                    if (n = h.exec(e)) {
                        r = new Date(0), o = parseInt(n[1], 10) - 1;
                        var i = parseInt(n[2], 10);
                        return r.setUTCFullYear(t, o, i), r
                    }
                    if (n = g.exec(e)) return a = parseInt(n[1], 10) - 1, A(t, a);
                    if (n = x.exec(e)) {
                        a = parseInt(n[1], 10) - 1;
                        var s = parseInt(n[2], 10) - 1;
                        return A(t, a, s)
                    }
                    return null
                }(_.restDateString, Y);
            if (S) {
                var I, E = S.getTime(),
                    F = 0;
                return O.time && (F = function(e) {
                    var t, n, r;
                    if (t = m.exec(e)) return (n = parseFloat(t[1].replace(",", "."))) % 24 * o;
                    if (t = w.exec(e)) return n = parseInt(t[1], 10), r = parseFloat(t[2].replace(",", ".")), n % 24 * o + r * a;
                    if (t = D.exec(e)) {
                        n = parseInt(t[1], 10), r = parseInt(t[2], 10);
                        var u = parseFloat(t[3].replace(",", "."));
                        return n % 24 * o + r * a + 1e3 * u
                    }
                    return null
                }(O.time)), O.timezone ? (k = O.timezone, I = (N = y.exec(k)) ? 0 : (N = M.exec(k)) ? (H = 60 * parseInt(N[2], 10), "+" === N[1] ? -H : H) : (N = b.exec(k)) ? (H = 60 * parseInt(N[2], 10) + parseInt(N[3], 10), "+" === N[1] ? -H : H) : 0) : (I = new Date(E + F).getTimezoneOffset(), I = new Date(E + F + I * a).getTimezoneOffset()), new Date(E + F + I * a)
            }
            var k, N, H;
            return new Date(e)
        }
    },
    "xKy+": function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = t.getMonth();
            return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t
        }
    },
    xLg3: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = t.getFullYear();
            return t.setFullYear(n + 1, 0, 0), t.setHours(0, 0, 0, 0), t
        }
    },
    ymQ7: function(e, t, n) {
        var r = n("xA5w"),
            o = n("JURy"),
            a = n("nizW");
        e.exports = function(e) {
            var t = r(e);
            return a(t, o(t)) + 1
        }
    },
    yu3m: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            return 4 === r(e).getDay()
        }
    },
    z3wv: function(e, t, n) {
        var r = n("qPxx");
        e.exports = function(e) {
            return r(new Date, e)
        }
    },
    zQFw: function(e, t, n) {
        var r = n("xA5w");
        e.exports = function(e) {
            var t = r(e),
                n = t.getMonth(),
                o = n - n % 3 + 3;
            return t.setMonth(o, 0), t.setHours(23, 59, 59, 999), t
        }
    },
    zZbG: function(e, t, n) {
        var r = n("xA5w"),
            o = n("3znZ");
        e.exports = function(e) {
            var t = r(e),
                n = t.getFullYear(),
                a = new Date(0);
            a.setFullYear(n + 1, 0, 4), a.setHours(0, 0, 0, 0);
            var u = o(a),
                i = new Date(0);
            i.setFullYear(n, 0, 4), i.setHours(0, 0, 0, 0);
            var s = o(i);
            return t.getTime() >= u.getTime() ? n + 1 : t.getTime() >= s.getTime() ? n : n - 1
        }
    }
});
//# sourceMappingURL=sites.dev.pages.apps-list-page-c8033ce865c0bf326e50c76ef341c9e5.js.map