/*!
 * jQuery JavaScript Library v1.11.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-23T21:02Z
 */
function createEmptyDiv(e, t) {
    if (!document.getElementById(t)) {
        var n = document.createElement("div");
        n.id = t, document.getElementById(e).appendChild(n)
    }
}

function addSWF(e, t, n, r, i, s, o, u) {
    r = r || {
        allowScriptAccess: "always"
    }, i = i || "", s = s || "0", o = o || "0", u = u || "9", createEmptyDiv(t, n), swfobject.embedSWF(unescape(e), n, s, o, u, "/widgets/expressinstall.swf", "", r, i)
}

function commatize(e) {
    var t = function(e) {
        return e.split("").reverse().join("")
    };
    return t(t(e + "").match(/(?:\d*\.)?\d{1,3}-?/g).join(","))
}

function setChannelViewerCount(e, t) {
    e -= 0;
    var n = jQuery("#channel_viewer_count");
    n.length && (n.html(commatize(e)), e > 0 ? n.show() : n.hide()), window.PP && (PP.channelLive = e > 0, PP.channelViewers = e)
}

function archive_play(e) {
    var t = Twitch.player.getPlayer();
    t && t.playVideo(e)
}

function live_play() {
    var e = Twitch.player.getPlayer();
    e && e.playVideo()
}

function wait_for_live_player_popout_close() {
    if (window.live_popout_window && window.live_popout_window.closed) {
        window.live_popout_window = null, $("#popout_message").hide();
        var e = Twitch.player.getPlayer();
        e && (e.playVideo(), $(e).invisible("show"))
    } else setTimeout(wait_for_live_player_popout_close, 100)
}

function popout_live_player(e) {
    if (!window.live_popout_window || window.live_popout_window.closed) {
        var t = ["right=50", "top=50", "width=630", "height=381", "resizable=yes", "scrollbars=no", "toolbar=no", "location=no", "directories=no", "status=no", "menubar=no", "copyhistory=no"].join(",");
        window.live_popout_window = window.open("/" + e + "/popout", "_blank", t)
    }
    window.live_popout_window.focus(), wait_for_live_player_popout_close();
    var n = Twitch.player.getPlayer();
    return n && ($(n).invisible("hide"), n.pauseVideo()), $("#popout_message").show(), !1
}

function toggle_live_player_popout(e) {
    window.live_popout_window ? window.live_popout_window.close() : popout_live_player(e)
}(function(e, t) {
    typeof module == "object" && typeof module.exports == "object" ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
})(typeof window != "undefined" ? window : this, function(e, t) {
    function y(e) {
        var t = e.length,
            n = p.type(e);
        return n === "function" || p.isWindow(e) ? !1 : e.nodeType === 1 && t ? !0 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e
    }

    function x(e, t, n) {
        if (p.isFunction(t)) return p.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return p.grep(e, function(e) {
            return e === t !== n
        });
        if (typeof t == "string") {
            if (S.test(t)) return p.filter(t, e, n);
            t = p.filter(t, e)
        }
        return p.grep(e, function(e) {
            return p.inArray(e, t) >= 0 !== n
        })
    }

    function O(e, t) {
        do e = e[t]; while (e && e.nodeType !== 1);
        return e
    }

    function D(e) {
        var t = _[e] = {};
        return p.each(e.match(M) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function H() {
        N.addEventListener ? (N.removeEventListener("DOMContentLoaded", B, !1), e.removeEventListener("load", B, !1)) : (N.detachEvent("onreadystatechange", B), e.detachEvent("onload", B))
    }

    function B() {
        if (N.addEventListener || event.type === "load" || N.readyState === "complete") H(), p.ready()
    }

    function R(e, t, n) {
        if (n === undefined && e.nodeType === 1) {
            var r = "data-" + t.replace(q, "-$1").toLowerCase();
            n = e.getAttribute(r);
            if (typeof n == "string") {
                try {
                    n = n === "true" ? !0 : n === "false" ? !1 : n === "null" ? null : +n + "" === n ? +n : I.test(n) ? p.parseJSON(n) : n
                } catch (i) {}
                p.data(e, t, n)
            } else n = undefined
        }
        return n
    }

    function U(e) {
        var t;
        for (t in e) {
            if (t === "data" && p.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }

    function z(e, t, r, i) {
        if (!p.acceptData(e)) return;
        var s, o, u = p.expando,
            a = e.nodeType,
            f = a ? p.cache : e,
            l = a ? e[u] : e[u] && u;
        if ((!l || !f[l] || !i && !f[l].data) && r === undefined && typeof t == "string") return;
        l || (a ? l = e[u] = n.pop() || p.guid++ : l = u), f[l] || (f[l] = a ? {} : {
            toJSON: p.noop
        });
        if (typeof t == "object" || typeof t == "function") i ? f[l] = p.extend(f[l], t) : f[l].data = p.extend(f[l].data, t);
        return o = f[l], i || (o.data || (o.data = {}), o = o.data), r !== undefined && (o[p.camelCase(t)] = r), typeof t == "string" ? (s = o[t], s == null && (s = o[p.camelCase(t)])) : s = o, s
    }

    function W(e, t, n) {
        if (!p.acceptData(e)) return;
        var r, i, s = e.nodeType,
            o = s ? p.cache : e,
            u = s ? e[p.expando] : p.expando;
        if (!o[u]) return;
        if (t) {
            r = n ? o[u] : o[u].data;
            if (r) {
                p.isArray(t) ? t = t.concat(p.map(t, p.camelCase)) : t in r ? t = [t] : (t = p.camelCase(t), t in r ? t = [t] : t = t.split(" ")), i = t.length;
                while (i--) delete r[t[i]];
                if (n ? !U(r) : !p.isEmptyObject(r)) return
            }
        }
        if (!n) {
            delete o[u].data;
            if (!U(o[u])) return
        }
        s ? p.cleanData([e], !0) : c.deleteExpando || o != o.window ? delete o[u] : o[u] = null
    }

    function tt() {
        return !0
    }

    function nt() {
        return !1
    }

    function rt() {
        try {
            return N.activeElement
        } catch (e) {}
    }

    function it(e) {
        var t = st.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }

    function Et(e, t) {
        var n, r, i = 0,
            s = typeof e.getElementsByTagName !== j ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== j ? e.querySelectorAll(t || "*") : undefined;
        if (!s)
            for (s = [], n = e.childNodes || e;
                (r = n[i]) != null; i++) !t || p.nodeName(r, t) ? s.push(r) : p.merge(s, Et(r, t));
        return t === undefined || t && p.nodeName(e, t) ? p.merge([e], s) : s
    }

    function St(e) {
        K.test(e.type) && (e.defaultChecked = e.checked)
    }

    function xt(e, t) {
        return p.nodeName(e, "table") && p.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Tt(e) {
        return e.type = (p.find.attr(e, "type") !== null) + "/" + e.type, e
    }

    function Nt(e) {
        var t = mt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Ct(e, t) {
        var n, r = 0;
        for (;
            (n = e[r]) != null; r++) p._data(n, "globalEval", !t || p._data(t[r], "globalEval"))
    }

    function kt(e, t) {
        if (t.nodeType !== 1 || !p.hasData(e)) return;
        var n, r, i, s = p._data(e),
            o = p._data(t, s),
            u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u)
                for (r = 0, i = u[n].length; r < i; r++) p.event.add(t, n, u[n][r])
        }
        o.data && (o.data = p.extend({}, o.data))
    }

    function Lt(e, t) {
        var n, r, i;
        if (t.nodeType !== 1) return;
        n = t.nodeName.toLowerCase();
        if (!c.noCloneEvent && t[p.expando]) {
            i = p._data(t);
            for (r in i.events) p.removeEvent(t, r, i.handle);
            t.removeAttribute(p.expando)
        }
        if (n === "script" && t.text !== e.text) Tt(t).text = e.text, Nt(t);
        else if (n === "object") t.parentNode && (t.outerHTML = e.outerHTML), c.html5Clone && e.innerHTML && !p.trim(t.innerHTML) && (t.innerHTML = e.innerHTML);
        else if (n === "input" && K.test(e.type)) t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value);
        else if (n === "option") t.defaultSelected = t.selected = e.defaultSelected;
        else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
    }

    function Mt(t, n) {
        var r = p(n.createElement(t)).appendTo(n.body),
            i = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(r[0]).display : p.css(r[0], "display");
        return r.detach(), i
    }

    function _t(e) {
        var t = N,
            n = Ot[e];
        if (!n) {
            n = Mt(e, t);
            if (n === "none" || !n) At = (At || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (At[0].contentWindow || At[0].contentDocument).document, t.write(), t.close(), n = Mt(e, t), At.detach();
            Ot[e] = n
        }
        return n
    }

    function Ft(e, t) {
        return {
            get: function() {
                var n = e();
                if (n == null) return;
                if (n) {
                    delete this.get;
                    return
                }
                return (this.get = t).apply(this, arguments)
            }
        }
    }

    function $t(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = Vt.length;
        while (i--) {
            t = Vt[i] + n;
            if (t in e) return t
        }
        return r
    }

    function Jt(e, t) {
        var n, r, i, s = [],
            o = 0,
            u = e.length;
        for (; o < u; o++) {
            r = e[o];
            if (!r.style) continue;
            s[o] = p._data(r, "olddisplay"), n = r.style.display, t ? (!s[o] && n === "none" && (r.style.display = ""), r.style.display === "" && $(r) && (s[o] = p._data(r, "olddisplay", _t(r.nodeName)))) : s[o] || (i = $(r), (n && n !== "none" || !i) && p._data(r, "olddisplay", i ? n : p.css(r, "display")))
        }
        for (o = 0; o < u; o++) {
            r = e[o];
            if (!r.style) continue;
            if (!t || r.style.display === "none" || r.style.display === "") r.style.display = t ? s[o] || "" : "none"
        }
        return e
    }

    function Kt(e, t, n) {
        var r = Ut.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function Qt(e, t, n, r, i) {
        var s = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            o = 0;
        for (; s < 4; s += 2) n === "margin" && (o += p.css(e, n + V[s], !0, i)), r ? (n === "content" && (o -= p.css(e, "padding" + V[s], !0, i)), n !== "margin" && (o -= p.css(e, "border" + V[s] + "Width", !0, i))) : (o += p.css(e, "padding" + V[s], !0, i), n !== "padding" && (o += p.css(e, "border" + V[s] + "Width", !0, i)));
        return o
    }

    function Gt(e, t, n) {
        var r = !0,
            i = t === "width" ? e.offsetWidth : e.offsetHeight,
            s = Ht(e),
            o = c.boxSizing() && p.css(e, "boxSizing", !1, s) === "border-box";
        if (i <= 0 || i == null) {
            i = Bt(e, t, s);
            if (i < 0 || i == null) i = e.style[t];
            if (Pt.test(i)) return i;
            r = o && (c.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + Qt(e, t, n || (o ? "border" : "content"), r, s) + "px"
    }

    function Yt(e, t, n, r, i) {
        return new Yt.prototype.init(e, t, n, r, i)
    }

    function un() {
        return setTimeout(function() {
            Zt = undefined
        }), Zt = p.now()
    }

    function an(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) n = V[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function fn(e, t, n) {
        var r, i = (on[t] || []).concat(on["*"]),
            s = 0,
            o = i.length;
        for (; s < o; s++)
            if (r = i[s].call(n, t, e)) return r
    }

    function ln(e, t, n) {
        var r, i, s, o, u, a, f, l, h = this,
            d = {},
            v = e.style,
            m = e.nodeType && $(e),
            g = p._data(e, "fxshow");
        n.queue || (u = p._queueHooks(e, "fx"), u.unqueued == null && (u.unqueued = 0, a = u.empty.fire, u.empty.fire = function() {
            u.unqueued || a()
        }), u.unqueued++, h.always(function() {
            h.always(function() {
                u.unqueued--, p.queue(e, "fx").length || u.empty.fire()
            })
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [v.overflow, v.overflowX, v.overflowY], f = p.css(e, "display"), l = _t(e.nodeName), f === "none" && (f = l), f === "inline" && p.css(e, "float") === "none" && (!c.inlineBlockNeedsLayout || l === "inline" ? v.display = "inline-block" : v.zoom = 1)), n.overflow && (v.overflow = "hidden", c.shrinkWrapBlocks() || h.always(function() {
            v.overflow = n.overflow[0], v.overflowX = n.overflow[1], v.overflowY = n.overflow[2]
        }));
        for (r in t) {
            i = t[r];
            if (tn.exec(i)) {
                delete t[r], s = s || i === "toggle";
                if (i === (m ? "hide" : "show")) {
                    if (i !== "show" || !g || g[r] === undefined) continue;
                    m = !0
                }
                d[r] = g && g[r] || p.style(e, r)
            }
        }
        if (!p.isEmptyObject(d)) {
            g ? "hidden" in g && (m = g.hidden) : g = p._data(e, "fxshow", {}), s && (g.hidden = !m), m ? p(e).show() : h.done(function() {
                p(e).hide()
            }), h.done(function() {
                var t;
                p._removeData(e, "fxshow");
                for (t in d) p.style(e, t, d[t])
            });
            for (r in d) o = fn(m ? g[r] : 0, r, h), r in g || (g[r] = o.start, m && (o.end = o.start, o.start = r === "width" || r === "height" ? 1 : 0))
        }
    }

    function cn(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = p.camelCase(n), i = t[r], s = e[n], p.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = p.cssHooks[r];
            if (o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
        }
    }

    function hn(e, t, n) {
        var r, i, s = 0,
            o = sn.length,
            u = p.Deferred().always(function() {
                delete a.elem
            }),
            a = function() {
                if (i) return !1;
                var t = Zt || un(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    r = n / f.duration || 0,
                    s = 1 - r,
                    o = 0,
                    a = f.tweens.length;
                for (; o < a; o++) f.tweens[o].run(s);
                return u.notifyWith(e, [f, s, n]), s < 1 && a ? n : (u.resolveWith(e, [f]), !1)
            },
            f = u.promise({
                elem: e,
                props: p.extend({}, t),
                opts: p.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Zt || un(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = p.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    if (i) return this;
                    i = !0;
                    for (; n < r; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        cn(l, f.opts.specialEasing);
        for (; s < o; s++) {
            r = sn[s].call(f, e, l, f.opts);
            if (r) return r
        }
        return p.map(l, fn, f), p.isFunction(f.opts.start) && f.opts.start.call(e, f), p.fx.timer(p.extend(a, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function In(e) {
        return function(t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i = 0,
                s = t.toLowerCase().match(M) || [];
            if (p.isFunction(n))
                while (r = s[i++]) r.charAt(0) === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, t, n, r) {
        function o(u) {
            var a;
            return i[u] = !0, p.each(e[u] || [], function(e, u) {
                var f = u(t, n, r);
                if (typeof f == "string" && !s && !i[f]) return t.dataTypes.unshift(f), o(f), !1;
                if (s) return !(a = f)
            }), a
        }
        var i = {},
            s = e === Bn;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function Rn(e, t) {
        var n, r, i = p.ajaxSettings.flatOptions || {};
        for (r in t) t[r] !== undefined && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && p.extend(!0, e, n), e
    }

    function Un(e, t, n) {
        var r, i, s, o, u = e.contents,
            a = e.dataTypes;
        while (a[0] === "*") a.shift(), i === undefined && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (o in u)
                if (u[o] && u[o].test(i)) {
                    a.unshift(o);
                    break
                }
        if (a[0] in n) s = a[0];
        else {
            for (o in n) {
                if (!a[0] || e.converters[o + " " + a[0]]) {
                    s = o;
                    break
                }
                r || (r = o)
            }
            s = s || r
        }
        if (s) return s !== a[0] && a.unshift(s), n[s]
    }

    function zn(e, t, n, r) {
        var i, s, o, u, a, f = {},
            l = e.dataTypes.slice();
        if (l[1])
            for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
        s = l.shift();
        while (s) {
            e.responseFields[s] && (n[e.responseFields[s]] = t), !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), a = s, s = l.shift();
            if (s)
                if (s === "*") s = a;
                else if (a !== "*" && a !== s) {
                o = f[a + " " + s] || f["* " + s];
                if (!o)
                    for (i in f) {
                        u = i.split(" ");
                        if (u[1] === s) {
                            o = f[a + " " + u[0]] || f["* " + u[0]];
                            if (o) {
                                o === !0 ? o = f[i] : f[i] !== !0 && (s = u[0], l.unshift(u[1]));
                                break
                            }
                        }
                    }
                if (o !== !0)
                    if (o && e["throws"]) t = o(t);
                    else try {
                        t = o(t)
                    } catch (c) {
                        return {
                            state: "parsererror",
                            error: o ? c : "No conversion from " + a + " to " + s
                        }
                    }
            }
        }
        return {
            state: "success",
            data: t
        }
    }

    function Kn(e, t, n, r) {
        var i;
        if (p.isArray(t)) p.each(t, function(t, i) {
            n || Xn.test(e) ? r(e, i) : Kn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        });
        else if (!n && p.type(t) === "object")
            for (i in t) Kn(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }

    function Zn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function er() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function sr(e) {
        return p.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var n = [],
        r = n.slice,
        i = n.concat,
        s = n.push,
        o = n.indexOf,
        u = {},
        a = u.toString,
        f = u.hasOwnProperty,
        l = "".trim,
        c = {},
        h = "1.11.0",
        p = function(e, t) {
            return new p.fn.init(e, t)
        },
        d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        v = /^-ms-/,
        m = /-([\da-z])/gi,
        g = function(e, t) {
            return t.toUpperCase()
        };
    p.fn = p.prototype = {
        jquery: h,
        constructor: p,
        selector: "",
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(e) {
            return e != null ? e < 0 ? this[e + this.length] : this[e] : r.call(this)
        },
        pushStack: function(e) {
            var t = p.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return p.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(p.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, p.extend = p.fn.extend = function() {
        var e, t, n, r, i, s, o = arguments[0] || {},
            u = 1,
            a = arguments.length,
            f = !1;
        typeof o == "boolean" && (f = o, o = arguments[u] || {}, u++), typeof o != "object" && !p.isFunction(o) && (o = {}), u === a && (o = this, u--);
        for (; u < a; u++)
            if ((i = arguments[u]) != null)
                for (r in i) {
                    e = o[r], n = i[r];
                    if (o === n) continue;
                    f && n && (p.isPlainObject(n) || (t = p.isArray(n))) ? (t ? (t = !1, s = e && p.isArray(e) ? e : []) : s = e && p.isPlainObject(e) ? e : {}, o[r] = p.extend(f, s, n)) : n !== undefined && (o[r] = n)
                }
            return o
    }, p.extend({
        expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return p.type(e) === "function"
        },
        isArray: Array.isArray || function(e) {
            return p.type(e) === "array"
        },
        isWindow: function(e) {
            return e != null && e == e.window
        },
        isNumeric: function(e) {
            return e - parseFloat(e) >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || p.type(e) !== "object" || e.nodeType || p.isWindow(e)) return !1;
            try {
                if (e.constructor && !f.call(e, "constructor") && !f.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (c.ownLast)
                for (t in e) return f.call(e, t);
            for (t in e);
            return t === undefined || f.call(e, t)
        },
        type: function(e) {
            return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? u[a.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && p.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(v, "ms-").replace(m, g)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
                s = e.length,
                o = y(e);
            if (n)
                if (o)
                    for (; i < s; i++) {
                        r = t.apply(e[i], n);
                        if (r === !1) break
                    } else
                        for (i in e) {
                            r = t.apply(e[i], n);
                            if (r === !1) break
                        } else if (o)
                            for (; i < s; i++) {
                                r = t.call(e[i], i, e[i]);
                                if (r === !1) break
                            } else
                                for (i in e) {
                                    r = t.call(e[i], i, e[i]);
                                    if (r === !1) break
                                }
                        return e
        },
        trim: l && !l.call("﻿ ") ? function(e) {
            return e == null ? "" : l.call(e)
        } : function(e) {
            return e == null ? "" : (e + "").replace(d, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return e != null && (y(Object(e)) ? p.merge(n, typeof e == "string" ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (o) return o.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            var n = +t.length,
                r = 0,
                i = e.length;
            while (r < n) e[i++] = t[r++];
            if (n !== n)
                while (t[r] !== undefined) e[i++] = t[r++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                s = 0,
                o = e.length,
                u = !n;
            for (; s < o; s++) r = !t(e[s], s), r !== u && i.push(e[s]);
            return i
        },
        map: function(e, t, n) {
            var r, s = 0,
                o = e.length,
                u = y(e),
                a = [];
            if (u)
                for (; s < o; s++) r = t(e[s], s, n), r != null && a.push(r);
            else
                for (s in e) r = t(e[s], s, n), r != null && a.push(r);
            return i.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, s;
            return typeof t == "string" && (s = e[t], t = e, e = s), p.isFunction(e) ? (n = r.call(arguments, 2), i = function() {
                return e.apply(t || this, n.concat(r.call(arguments)))
            }, i.guid = e.guid = e.guid || p.guid++, i) : undefined
        },
        now: function() {
            return +(new Date)
        },
        support: c
    }), p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });
    var b = function(e) {
        function rt(e, t, r, i) {
            var s, o, u, a, f, h, v, m, w, E;
            (t ? t.ownerDocument || t : b) !== c && l(t), t = t || c, r = r || [];
            if (!e || typeof e != "string") return r;
            if ((a = t.nodeType) !== 1 && a !== 9) return [];
            if (p && !i) {
                if (s = G.exec(e))
                    if (u = s[1]) {
                        if (a === 9) {
                            o = t.getElementById(u);
                            if (!o || !o.parentNode) return r;
                            if (o.id === u) return r.push(o), r
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(u)) && g(t, o) && o.id === u) return r.push(o), r
                    } else {
                        if (s[2]) return _.apply(r, t.getElementsByTagName(e)), r;
                        if ((u = s[3]) && n.getElementsByClassName && t.getElementsByClassName) return _.apply(r, t.getElementsByClassName(u)), r
                    }
                if (n.qsa && (!d || !d.test(e))) {
                    m = v = y, w = t, E = a === 9 && e;
                    if (a === 1 && t.nodeName.toLowerCase() !== "object") {
                        h = dt(e), (v = t.getAttribute("id")) ? m = v.replace(Z, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", f = h.length;
                        while (f--) h[f] = m + vt(h[f]);
                        w = Y.test(e) && ht(t.parentNode) || t, E = h.join(",")
                    }
                    if (E) try {
                        return _.apply(r, w.querySelectorAll(E)), r
                    } catch (S) {} finally {
                        v || t.removeAttribute("id")
                    }
                }
            }
            return xt(e.replace(R, "$1"), t, r, i)
        }

        function it() {
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function st(e) {
            return e[y] = !0, e
        }

        function ot(e) {
            var t = c.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ut(e, t) {
            var n = e.split("|"),
                i = e.length;
            while (i--) r.attrHandle[n[i]] = t
        }

        function at(e, t) {
            var n = t && e,
                r = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || k) - (~e.sourceIndex || k);
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }

        function lt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }

        function ct(e) {
            return st(function(t) {
                return t = +t, st(function(n, r) {
                    var i, s = e([], n.length, t),
                        o = s.length;
                    while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ht(e) {
            return e && typeof e.getElementsByTagName !== C && e
        }

        function pt() {}

        function dt(e, t) {
            var n, i, s, o, u, a, f, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            u = e, a = [], f = r.preFilter;
            while (u) {
                if (!n || (i = U.exec(u))) i && (u = u.slice(i[0].length) || u), a.push(s = []);
                n = !1;
                if (i = z.exec(u)) n = i.shift(), s.push({
                    value: n,
                    type: i[0].replace(R, " ")
                }), u = u.slice(n.length);
                for (o in r.filter)(i = $[o].exec(u)) && (!f[o] || (i = f[o](i))) && (n = i.shift(), s.push({
                    value: n,
                    type: o,
                    matches: i
                }), u = u.slice(n.length));
                if (!n) break
            }
            return t ? u.length : u ? rt.error(e) : x(e, a).slice(0)
        }

        function vt(e) {
            var t = 0,
                n = e.length,
                r = "";
            for (; t < n; t++) r += e[t].value;
            return r
        }

        function mt(e, t, n) {
            var r = t.dir,
                i = n && r === "parentNode",
                s = E++;
            return t.first ? function(t, n, s) {
                while (t = t[r])
                    if (t.nodeType === 1 || i) return e(t, n, s)
            } : function(t, n, o) {
                var u, a, f = [w, s];
                if (o) {
                    while (t = t[r])
                        if (t.nodeType === 1 || i)
                            if (e(t, n, o)) return !0
                } else
                    while (t = t[r])
                        if (t.nodeType === 1 || i) {
                            a = t[y] || (t[y] = {});
                            if ((u = a[r]) && u[0] === w && u[1] === s) return f[2] = u[2];
                            a[r] = f;
                            if (f[2] = e(t, n, o)) return !0
                        }
            }
        }

        function gt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function yt(e, t, n, r, i) {
            var s, o = [],
                u = 0,
                a = e.length,
                f = t != null;
            for (; u < a; u++)
                if (s = e[u])
                    if (!n || n(s, r, i)) o.push(s), f && t.push(u);
            return o
        }

        function bt(e, t, n, r, i, s) {
            return r && !r[y] && (r = bt(r)), i && !i[y] && (i = bt(i, s)), st(function(s, o, u, a) {
                var f, l, c, h = [],
                    p = [],
                    d = o.length,
                    v = s || St(t || "*", u.nodeType ? [u] : u, []),
                    m = e && (s || !t) ? yt(v, h, e, u, a) : v,
                    g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    f = yt(g, p), r(f, [], u, a), l = f.length;
                    while (l--)
                        if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--)(c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)(c = g[l]) && (f = i ? P.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else g = yt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : _.apply(o, g)
            })
        }

        function wt(e) {
            var t, n, i, s = e.length,
                o = r.relative[e[0].type],
                a = o || r.relative[" "],
                f = o ? 1 : 0,
                l = mt(function(e) {
                    return e === t
                }, a, !0),
                c = mt(function(e) {
                    return P.call(t, e) > -1
                }, a, !0),
                h = [function(e, n, r) {
                    return !o && (r || n !== u) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
                }];
            for (; f < s; f++)
                if (n = r.relative[e[f].type]) h = [mt(gt(h), n)];
                else {
                    n = r.filter[e[f].type].apply(null, e[f].matches);
                    if (n[y]) {
                        i = ++f;
                        for (; i < s; i++)
                            if (r.relative[e[i].type]) break;
                        return bt(f > 1 && gt(h), f > 1 && vt(e.slice(0, f - 1).concat({
                            value: e[f - 2].type === " " ? "*" : ""
                        })).replace(R, "$1"), n, f < i && wt(e.slice(f, i)), i < s && wt(e = e.slice(i)), i < s && vt(e))
                    }
                    h.push(n)
                }
            return gt(h)
        }

        function Et(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                s = function(s, o, a, f, l) {
                    var h, p, d, v = 0,
                        m = "0",
                        g = s && [],
                        y = [],
                        b = u,
                        E = s || i && r.find.TAG("*", l),
                        S = w += b == null ? 1 : Math.random() || .1,
                        x = E.length;
                    l && (u = o !== c && o);
                    for (; m !== x && (h = E[m]) != null; m++) {
                        if (i && h) {
                            p = 0;
                            while (d = e[p++])
                                if (d(h, o, a)) {
                                    f.push(h);
                                    break
                                }
                            l && (w = S)
                        }
                        n && ((h = !d && h) && v--, s && g.push(h))
                    }
                    v += m;
                    if (n && m !== v) {
                        p = 0;
                        while (d = t[p++]) d(g, y, o, a);
                        if (s) {
                            if (v > 0)
                                while (m--) !g[m] && !y[m] && (y[m] = O.call(f));
                            y = yt(y)
                        }
                        _.apply(f, y), l && !s && y.length > 0 && v + t.length > 1 && rt.uniqueSort(f)
                    }
                    return l && (w = S, u = b), g
                };
            return n ? st(s) : s
        }

        function St(e, t, n) {
            var r = 0,
                i = t.length;
            for (; r < i; r++) rt(e, t[r], n);
            return n
        }

        function xt(e, t, i, s) {
            var u, a, f, l, c, h = dt(e);
            if (!s && h.length === 1) {
                a = h[0] = h[0].slice(0);
                if (a.length > 2 && (f = a[0]).type === "ID" && n.getById && t.nodeType === 9 && p && r.relative[a[1].type]) {
                    t = (r.find.ID(f.matches[0].replace(et, tt), t) || [])[0];
                    if (!t) return i;
                    e = e.slice(a.shift().value.length)
                }
                u = $.needsContext.test(e) ? 0 : a.length;
                while (u--) {
                    f = a[u];
                    if (r.relative[l = f.type]) break;
                    if (c = r.find[l])
                        if (s = c(f.matches[0].replace(et, tt), Y.test(a[0].type) && ht(t.parentNode) || t)) {
                            a.splice(u, 1), e = s.length && vt(a);
                            if (!e) return _.apply(i, s), i;
                            break
                        }
                }
            }
            return o(e, h)(s, t, !p, i, Y.test(e) && ht(t.parentNode) || t), i
        }
        var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y = "sizzle" + -(new Date),
            b = e.document,
            w = 0,
            E = 0,
            S = it(),
            x = it(),
            T = it(),
            N = function(e, t) {
                return e === t && (f = !0), 0
            },
            C = typeof undefined,
            k = 1 << 31,
            L = {}.hasOwnProperty,
            A = [],
            O = A.pop,
            M = A.push,
            _ = A.push,
            D = A.slice,
            P = A.indexOf || function(e) {
                var t = 0,
                    n = this.length;
                for (; t < n; t++)
                    if (this[t] === e) return t;
                return -1
            },
            H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            B = "[\\x20\\t\\r\\n\\f]",
            j = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            F = j.replace("w", "w#"),
            I = "\\[" + B + "*(" + j + ")" + B + "*(?:([*^$|!~]?=)" + B + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + F + ")|)|)" + B + "*\\]",
            q = ":(" + j + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) + ")*)|.*)\\)|)",
            R = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
            U = new RegExp("^" + B + "*," + B + "*"),
            z = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
            W = new RegExp("=" + B + "*([^\\]'\"]*?)" + B + "*\\]", "g"),
            X = new RegExp(q),
            V = new RegExp("^" + F + "$"),
            $ = {
                ID: new RegExp("^#(" + j + ")"),
                CLASS: new RegExp("^\\.(" + j + ")"),
                TAG: new RegExp("^(" + j.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + H + ")$", "i"),
                needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
            },
            J = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Y = /[+~]/,
            Z = /'|\\/g,
            et = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
            tt = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
            };
        try {
            _.apply(A = D.call(b.childNodes), b.childNodes), A[b.childNodes.length].nodeType
        } catch (nt) {
            _ = {
                apply: A.length ? function(e, t) {
                    M.apply(e, D.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }
        n = rt.support = {}, s = rt.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }, l = rt.setDocument = function(e) {
            var t, i = e ? e.ownerDocument || e : b,
                o = i.defaultView;
            if (i === c || i.nodeType !== 9 || !i.documentElement) return c;
            c = i, h = i.documentElement, p = !s(i), o && o !== o.top && (o.addEventListener ? o.addEventListener("unload", function() {
                l()
            }, !1) : o.attachEvent && o.attachEvent("onunload", function() {
                l()
            })), n.attributes = ot(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ot(function(e) {
                return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Q.test(i.getElementsByClassName) && ot(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", e.getElementsByClassName("i").length === 2
            }), n.getById = ot(function(e) {
                return h.appendChild(e).id = y, !i.getElementsByName || !i.getElementsByName(y).length
            }), n.getById ? (r.find.ID = function(e, t) {
                if (typeof t.getElementById !== C && p) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, r.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete r.find.ID, r.filter.ID = function(e) {
                var t = e.replace(et, tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== C && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), r.find.TAG = n.getElementsByTagName ? function(e, t) {
                if (typeof t.getElementsByTagName !== C) return t.getElementsByTagName(e)
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    s = t.getElementsByTagName(e);
                if (e === "*") {
                    while (n = s[i++]) n.nodeType === 1 && r.push(n);
                    return r
                }
                return s
            }, r.find.CLASS = n.getElementsByClassName && function(e, t) {
                if (typeof t.getElementsByClassName !== C && p) return t.getElementsByClassName(e)
            }, v = [], d = [];
            if (n.qsa = Q.test(i.querySelectorAll)) ot(function(e) {
                e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && d.push("[*^$]=" + B + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || d.push("\\[" + B + "*(?:value|" + H + ")"), e.querySelectorAll(":checked").length || d.push(":checked")
            }), ot(function(e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && d.push("name" + B + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || d.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), d.push(",.*:")
            });
            return (n.matchesSelector = Q.test(m = h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ot(function(e) {
                n.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), v.push("!=", q)
            }), d = d.length && new RegExp(d.join("|")), v = v.length && new RegExp(v.join("|")), t = Q.test(h.compareDocumentPosition), g = t || Q.test(h.contains) ? function(e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !!r && r.nodeType === 1 && !!(n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16)
            } : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e) return !0;
                return !1
            }, N = t ? function(e, t) {
                if (e === t) return f = !0, 0;
                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, r & 1 || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === i || e.ownerDocument === b && g(b, e) ? -1 : t === i || t.ownerDocument === b && g(b, t) ? 1 : a ? P.call(a, e) - P.call(a, t) : 0 : r & 4 ? -1 : 1)
            } : function(e, t) {
                if (e === t) return f = !0, 0;
                var n, r = 0,
                    s = e.parentNode,
                    o = t.parentNode,
                    u = [e],
                    l = [t];
                if (!s || !o) return e === i ? -1 : t === i ? 1 : s ? -1 : o ? 1 : a ? P.call(a, e) - P.call(a, t) : 0;
                if (s === o) return at(e, t);
                n = e;
                while (n = n.parentNode) u.unshift(n);
                n = t;
                while (n = n.parentNode) l.unshift(n);
                while (u[r] === l[r]) r++;
                return r ? at(u[r], l[r]) : u[r] === b ? -1 : l[r] === b ? 1 : 0
            }, i
        }, rt.matches = function(e, t) {
            return rt(e, null, null, t)
        }, rt.matchesSelector = function(e, t) {
            (e.ownerDocument || e) !== c && l(e), t = t.replace(W, "='$1']");
            if (n.matchesSelector && p && (!v || !v.test(t)) && (!d || !d.test(t))) try {
                var r = m.call(e, t);
                if (r || n.disconnectedMatch || e.document && e.document.nodeType !== 11) return r
            } catch (i) {}
            return rt(t, c, null, [e]).length > 0
        }, rt.contains = function(e, t) {
            return (e.ownerDocument || e) !== c && l(e), g(e, t)
        }, rt.attr = function(e, t) {
            (e.ownerDocument || e) !== c && l(e);
            var i = r.attrHandle[t.toLowerCase()],
                s = i && L.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !p) : undefined;
            return s !== undefined ? s : n.attributes || !p ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
        }, rt.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, rt.uniqueSort = function(e) {
            var t, r = [],
                i = 0,
                s = 0;
            f = !n.detectDuplicates, a = !n.sortStable && e.slice(0), e.sort(N);
            if (f) {
                while (t = e[s++]) t === e[s] && (i = r.push(s));
                while (i--) e.splice(r[i], 1)
            }
            return a = null, e
        }, i = rt.getText = function(e) {
            var t, n = "",
                r = 0,
                s = e.nodeType;
            if (!s)
                while (t = e[r++]) n += i(t);
            else if (s === 1 || s === 9 || s === 11) {
                if (typeof e.textContent == "string") return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
            } else if (s === 3 || s === 4) return e.nodeValue;
            return n
        }, r = rt.selectors = {
            cacheLength: 50,
            createPseudo: st,
            match: $,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || rt.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && rt.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return $.CHILD.test(e[0]) ? null : (e[3] && e[4] !== undefined ? e[2] = e[4] : n && X.test(n) && (t = dt(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(et, tt).toLowerCase();
                    return e === "*" ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = S[e + " "];
                    return t || (t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) && S(e, function(e) {
                        return t.test(typeof e.className == "string" && e.className || typeof e.getAttribute !== C && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = rt.attr(r, e);
                        return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var s = e.slice(0, 3) !== "nth",
                        o = e.slice(-4) !== "last",
                        u = t === "of-type";
                    return r === 1 && i === 0 ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, a) {
                        var f, l, c, h, p, d, v = s !== o ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            g = u && t.nodeName.toLowerCase(),
                            b = !a && !u;
                        if (m) {
                            if (s) {
                                while (v) {
                                    c = t;
                                    while (c = c[v])
                                        if (u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) return !1;
                                    d = v = e === "only" && !d && "nextSibling"
                                }
                                return !0
                            }
                            d = [o ? m.firstChild : m.lastChild];
                            if (o && b) {
                                l = m[y] || (m[y] = {}), f = l[e] || [], p = f[0] === w && f[1], h = f[0] === w && f[2], c = p && m.childNodes[p];
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if (c.nodeType === 1 && ++h && c === t) {
                                        l[e] = [w, p, h];
                                        break
                                    }
                            } else if (b && (f = (t[y] || (t[y] = {}))[e]) && f[0] === w) h = f[1];
                            else
                                while (c = ++p && c && c[v] || (h = p = 0) || d.pop())
                                    if ((u ? c.nodeName.toLowerCase() === g : c.nodeType === 1) && ++h) {
                                        b && ((c[y] || (c[y] = {}))[e] = [w, h]);
                                        if (c === t) break
                                    }
                            return h -= i, h === r || h % r === 0 && h / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || rt.error("unsupported pseudo: " + e);
                    return i[y] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? st(function(e, n) {
                        var r, s = i(e, t),
                            o = s.length;
                        while (o--) r = P.call(e, s[o]), e[r] = !(n[r] = s[o])
                    }) : function(e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: st(function(e) {
                    var t = [],
                        n = [],
                        r = o(e.replace(R, "$1"));
                    return r[y] ? st(function(e, t, n, i) {
                        var s, o = r(e, null, i, []),
                            u = e.length;
                        while (u--)
                            if (s = o[u]) e[u] = !(t[u] = s)
                    }) : function(e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop()
                    }
                }),
                has: st(function(e) {
                    return function(t) {
                        return rt(e, t).length > 0
                    }
                }),
                contains: st(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }),
                lang: st(function(e) {
                    return V.test(e || "") || rt.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = p ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0;
                            while ((t = t.parentNode) && t.nodeType === 1);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === c.activeElement && (!c.hasFocus || c.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !!e.checked || t === "option" && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !r.pseudos.empty(e)
                },
                header: function(e) {
                    return K.test(e.nodeName)
                },
                input: function(e) {
                    return J.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },
                text: function(e) {
                    var t;
                    return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
                },
                first: ct(function() {
                    return [0]
                }),
                last: ct(function(e, t) {
                    return [t - 1]
                }),
                eq: ct(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: ct(function(e, t) {
                    var n = 0;
                    for (; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: ct(function(e, t) {
                    var n = 1;
                    for (; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: ct(function(e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; --r >= 0;) e.push(r);
                    return e
                }),
                gt: ct(function(e, t, n) {
                    var r = n < 0 ? n + t : n;
                    for (; ++r < t;) e.push(r);
                    return e
                })
            }
        }, r.pseudos.nth = r.pseudos.eq;
        for (t in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) r.pseudos[t] = ft(t);
        for (t in {
                submit: !0,
                reset: !0
            }) r.pseudos[t] = lt(t);
        return pt.prototype = r.filters = r.pseudos, r.setFilters = new pt, o = rt.compile = function(e, t) {
            var n, r = [],
                i = [],
                s = T[e + " "];
            if (!s) {
                t || (t = dt(e)), n = t.length;
                while (n--) s = wt(t[n]), s[y] ? r.push(s) : i.push(s);
                s = T(e, Et(i, r))
            }
            return s
        }, n.sortStable = y.split("").sort(N).join("") === y, n.detectDuplicates = !!f, l(), n.sortDetached = ot(function(e) {
            return e.compareDocumentPosition(c.createElement("div")) & 1
        }), ot(function(e) {
            return e.innerHTML = "<a href='#'></a>", e.firstChild.getAttribute("href") === "#"
        }) || ut("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }), (!n.attributes || !ot(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), e.firstChild.getAttribute("value") === ""
        })) && ut("value", function(e, t, n) {
            if (!n && e.nodeName.toLowerCase() === "input") return e.defaultValue
        }), ot(function(e) {
            return e.getAttribute("disabled") == null
        }) || ut(H, function(e, t, n) {
            var r;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), rt
    }(e);
    p.find = b, p.expr = b.selectors, p.expr[":"] = p.expr.pseudos, p.unique = b.uniqueSort, p.text = b.getText, p.isXMLDoc = b.isXML, p.contains = b.contains;
    var w = p.expr.match.needsContext,
        E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        S = /^.[^:#\[\.,]*$/;
    p.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? p.find.matchesSelector(r, e) ? [r] : [] : p.find.matches(e, p.grep(t, function(e) {
            return e.nodeType === 1
        }))
    }, p.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if (typeof e != "string") return this.pushStack(p(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (p.contains(r[t], this)) return !0
            }));
            for (t = 0; t < i; t++) p.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? p.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(x(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(x(this, e || [], !0))
        },
        is: function(e) {
            return !!x(this, typeof e == "string" && w.test(e) ? p(e) : e || [], !1).length
        }
    });
    var T, N = e.document,
        C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        k = p.fn.init = function(e, t) {
            var n, r;
            if (!e) return this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? n = [null, e, null] : n = C.exec(e);
                if (n && (n[1] || !t)) {
                    if (n[1]) {
                        t = t instanceof p ? t[0] : t, p.merge(this, p.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : N, !0));
                        if (E.test(n[1]) && p.isPlainObject(t))
                            for (n in t) p.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                        return this
                    }
                    r = N.getElementById(n[2]);
                    if (r && r.parentNode) {
                        if (r.id !== n[2]) return T.find(e);
                        this.length = 1, this[0] = r
                    }
                    return this.context = N, this.selector = e, this
                }
                return !t || t.jquery ? (t || T).find(e) : this.constructor(t).find(e)
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : p.isFunction(e) ? typeof T.ready != "undefined" ? T.ready(e) : e(p) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), p.makeArray(e, this))
        };
    k.prototype = p.fn, T = p(N);
    var L = /^(?:parents|prev(?:Until|All))/,
        A = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    p.extend({
        dir: function(e, t, n) {
            var r = [],
                i = e[t];
            while (i && i.nodeType !== 9 && (n === undefined || i.nodeType !== 1 || !p(i).is(n))) i.nodeType === 1 && r.push(i), i = i[t];
            return r
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    }), p.fn.extend({
        has: function(e) {
            var t, n = p(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (p.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = w.test(e) || typeof e != "string" ? p(e, t || this.context) : 0;
            for (; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && p.find.matchesSelector(n, e))) {
                        s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? p.unique(s) : s)
        },
        index: function(e) {
            return e ? typeof e == "string" ? p.inArray(this[0], p(e)) : p.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(p.unique(p.merge(this.get(), p(e, t))))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), p.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(e) {
            return p.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return p.dir(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return p.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return p.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return p.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return p.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return p.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return p.sibling(e.firstChild)
        },
        contents: function(e) {
            return p.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : p.merge([], e.childNodes)
        }
    }, function(e, t) {
        p.fn[e] = function(n, r) {
            var i = p.map(this, t, n);
            return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (i = p.filter(r, i)), this.length > 1 && (A[e] || (i = p.unique(i)), L.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var M = /\S+/g,
        _ = {};
    p.Callbacks = function(e) {
        e = typeof e == "string" ? _[e] || D(e) : p.extend({}, e);
        var t, n, r, i, s, o, u = [],
            a = !e.once && [],
            f = function(c) {
                n = e.memory && c, r = !0, s = o || 0, o = 0, i = u.length, t = !0;
                for (; u && s < i; s++)
                    if (u[s].apply(c[0], c[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                t = !1, u && (a ? a.length && f(a.shift()) : n ? u = [] : l.disable())
            },
            l = {
                add: function() {
                    if (u) {
                        var r = u.length;
                        (function s(t) {
                            p.each(t, function(t, n) {
                                var r = p.type(n);
                                r === "function" ? (!e.unique || !l.has(n)) && u.push(n) : n && n.length && r !== "string" && s(n)
                            })
                        })(arguments), t ? i = u.length : n && (o = r, f(n))
                    }
                    return this
                },
                remove: function() {
                    return u && p.each(arguments, function(e, n) {
                        var r;
                        while ((r = p.inArray(n, u, r)) > -1) u.splice(r, 1), t && (r <= i && i--, r <= s && s--)
                    }), this
                },
                has: function(e) {
                    return e ? p.inArray(e, u) > -1 : !!u && !!u.length
                },
                empty: function() {
                    return u = [], i = 0, this
                },
                disable: function() {
                    return u = a = n = undefined, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return a = undefined, n || l.disable(), this
                },
                locked: function() {
                    return !a
                },
                fireWith: function(e, n) {
                    return u && (!r || a) && (n = n || [], n = [e, n.slice ? n.slice() : n], t ? a.push(n) : f(n)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return l
    }, p.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", p.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return p.Deferred(function(n) {
                            p.each(t, function(t, s) {
                                var o = p.isFunction(e[t]) && e[t];
                                i[s[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    e && p.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return e != null ? p.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, p.each(t, function(e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function() {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = function() {
                    return i[s[0] + "With"](this === i ? r : this, arguments), this
                }, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = r.call(arguments),
                i = n.length,
                s = i !== 1 || e && p.isFunction(e.promise) ? i : 0,
                o = s === 1 ? e : p.Deferred(),
                u = function(e, t, n) {
                    return function(i) {
                        t[e] = this, n[e] = arguments.length > 1 ? r.call(arguments) : i, n === a ? o.notifyWith(t, n) : --s || o.resolveWith(t, n)
                    }
                },
                a, f, l;
            if (i > 1) {
                a = new Array(i), f = new Array(i), l = new Array(i);
                for (; t < i; t++) n[t] && p.isFunction(n[t].promise) ? n[t].promise().done(u(t, l, n)).fail(o.reject).progress(u(t, f, a)) : --s
            }
            return s || o.resolveWith(l, n), o.promise()
        }
    });
    var P;
    p.fn.ready = function(e) {
        return p.ready.promise().done(e), this
    }, p.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? p.readyWait++ : p.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? --p.readyWait : p.isReady) return;
            if (!N.body) return setTimeout(p.ready);
            p.isReady = !0;
            if (e !== !0 && --p.readyWait > 0) return;
            P.resolveWith(N, [p]), p.fn.trigger && p(N).trigger("ready").off("ready")
        }
    }), p.ready.promise = function(t) {
        if (!P) {
            P = p.Deferred();
            if (N.readyState === "complete") setTimeout(p.ready);
            else if (N.addEventListener) N.addEventListener("DOMContentLoaded", B, !1), e.addEventListener("load", B, !1);
            else {
                N.attachEvent("onreadystatechange", B), e.attachEvent("onload", B);
                var n = !1;
                try {
                    n = e.frameElement == null && N.documentElement
                } catch (r) {}
                n && n.doScroll && function i() {
                    if (!p.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(i, 50)
                        }
                        H(), p.ready()
                    }
                }()
            }
        }
        return P.promise(t)
    };
    var j = typeof undefined,
        F;
    for (F in p(c)) break;
    c.ownLast = F !== "0", c.inlineBlockNeedsLayout = !1, p(function() {
            var e, t, n = N.getElementsByTagName("body")[0];
            if (!n) return;
            e = N.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = N.createElement("div"), n.appendChild(e).appendChild(t);
            if (typeof t.style.zoom !== j) {
                t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1";
                if (c.inlineBlockNeedsLayout = t.offsetWidth === 3) n.style.zoom = 1
            }
            n.removeChild(e), e = t = null
        }),
        function() {
            var e = N.createElement("div");
            if (c.deleteExpando == null) {
                c.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    c.deleteExpando = !1
                }
            }
            e = null
        }(), p.acceptData = function(e) {
            var t = p.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return n !== 1 && n !== 9 ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        };
    var I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        q = /([A-Z])/g;
    p.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando], !!e && !U(e)
        },
        data: function(e, t, n) {
            return z(e, t, n)
        },
        removeData: function(e, t) {
            return W(e, t)
        },
        _data: function(e, t, n) {
            return z(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return W(e, t, !0)
        }
    }), p.fn.extend({
        data: function(e, t) {
            var n, r, i, s = this[0],
                o = s && s.attributes;
            if (e === undefined) {
                if (this.length) {
                    i = p.data(s);
                    if (s.nodeType === 1 && !p._data(s, "parsedAttrs")) {
                        n = o.length;
                        while (n--) r = o[n].name, r.indexOf("data-") === 0 && (r = p.camelCase(r.slice(5)), R(s, r, i[r]));
                        p._data(s, "parsedAttrs", !0)
                    }
                }
                return i
            }
            return typeof e == "object" ? this.each(function() {
                p.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                p.data(this, e, t)
            }) : s ? R(s, e, p.data(s, e)) : undefined
        },
        removeData: function(e) {
            return this.each(function() {
                p.removeData(this, e)
            })
        }
    }), p.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = p._data(e, t), n && (!r || p.isArray(n) ? r = p._data(e, t, p.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = p.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = p._queueHooks(e, t),
                o = function() {
                    p.dequeue(e, t)
                };
            i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return p._data(e, n) || p._data(e, n, {
                empty: p.Callbacks("once memory").add(function() {
                    p._removeData(e, t + "queue"), p._removeData(e, n)
                })
            })
        }
    }), p.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return typeof e != "string" && (t = e, e = "fx", n--), arguments.length < n ? p.queue(this[0], e) : t === undefined ? this : this.each(function() {
                var n = p.queue(this, e, t);
                p._queueHooks(this, e), e === "fx" && n[0] !== "inprogress" && p.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                p.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = p.Deferred(),
                s = this,
                o = this.length,
                u = function() {
                    --r || i.resolveWith(s, [s])
                };
            typeof e != "string" && (t = e, e = undefined), e = e || "fx";
            while (o--) n = p._data(s[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(u));
            return u(), i.promise(t)
        }
    });
    var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        V = ["Top", "Right", "Bottom", "Left"],
        $ = function(e, t) {
            return e = t || e, p.css(e, "display") === "none" || !p.contains(e.ownerDocument, e)
        },
        J = p.access = function(e, t, n, r, i, s, o) {
            var u = 0,
                a = e.length,
                f = n == null;
            if (p.type(n) === "object") {
                i = !0;
                for (u in n) p.access(e, t, u, n[u], !0, s, o)
            } else if (r !== undefined) {
                i = !0, p.isFunction(r) || (o = !0), f && (o ? (t.call(e, r), t = null) : (f = t, t = function(e, t, n) {
                    return f.call(p(e), n)
                }));
                if (t)
                    for (; u < a; u++) t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)))
            }
            return i ? e : f ? t.call(e) : a ? t(e[0], n) : s
        },
        K = /^(?:checkbox|radio)$/i;
    (function() {
        var e = N.createDocumentFragment(),
            t = N.createElement("div"),
            n = N.createElement("input");
        t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", c.leadingWhitespace = t.firstChild.nodeType === 3, c.tbody = !t.getElementsByTagName("tbody").length, c.htmlSerialize = !!t.getElementsByTagName("link").length, c.html5Clone = N.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>", n.type = "checkbox", n.checked = !0, e.appendChild(n), c.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", c.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", c.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, c.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
            c.noCloneEvent = !1
        }), t.cloneNode(!0).click());
        if (c.deleteExpando == null) {
            c.deleteExpando = !0;
            try {
                delete t.test
            } catch (r) {
                c.deleteExpando = !1
            }
        }
        e = t = n = null
    })(),
    function() {
        var t, n, r = N.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (c[t + "Bubbles"] = n in e) || (r.setAttribute(n, "t"), c[t + "Bubbles"] = r.attributes[n].expando === !1);
        r = null
    }();
    var Q = /^(?:input|select|textarea)$/i,
        G = /^key/,
        Y = /^(?:mouse|contextmenu)|click/,
        Z = /^(?:focusinfocus|focusoutblur)$/,
        et = /^([^.]*)(?:\.(.+)|)$/;
    p.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, d, v, m, g = p._data(e);
            if (!g) return;
            n.handler && (a = n, n = a.handler, i = a.selector), n.guid || (n.guid = p.guid++), (o = g.events) || (o = g.events = {}), (l = g.handle) || (l = g.handle = function(e) {
                return typeof p === j || !!e && p.event.triggered === e.type ? undefined : p.event.dispatch.apply(l.elem, arguments)
            }, l.elem = e), t = (t || "").match(M) || [""], u = t.length;
            while (u--) {
                s = et.exec(t[u]) || [], d = m = s[1], v = (s[2] || "").split(".").sort();
                if (!d) continue;
                f = p.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = p.event.special[d] || {}, c = p.extend({
                    type: d,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && p.expr.match.needsContext.test(i),
                    namespace: v.join(".")
                }, a);
                if (!(h = o[d])) {
                    h = o[d] = [], h.delegateCount = 0;
                    if (!f.setup || f.setup.call(e, r, v, l) === !1) e.addEventListener ? e.addEventListener(d, l, !1) : e.attachEvent && e.attachEvent("on" + d, l)
                }
                f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, c) : h.push(c), p.event.global[d] = !0
            }
            e = null
        },
        remove: function(e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, d, v, m, g = p.hasData(e) && p._data(e);
            if (!g || !(l = g.events)) return;
            t = (t || "").match(M) || [""], f = t.length;
            while (f--) {
                u = et.exec(t[f]) || [], d = m = u[1], v = (u[2] || "").split(".").sort();
                if (!d) {
                    for (d in l) p.event.remove(e, d + t[f], n, r, !0);
                    continue
                }
                c = p.event.special[d] || {}, d = (r ? c.delegateType : c.bindType) || d, h = l[d] || [], u = u[2] && new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length;
                while (s--) o = h[s], (i || m === o.origType) && (!n || n.guid === o.guid) && (!u || u.test(o.namespace)) && (!r || r === o.selector || r === "**" && o.selector) && (h.splice(s, 1), o.selector && h.delegateCount--, c.remove && c.remove.call(e, o));
                a && !h.length && ((!c.teardown || c.teardown.call(e, v, g.handle) === !1) && p.removeEvent(e, d, g.handle), delete l[d])
            }
            p.isEmptyObject(l) && (delete g.handle, p._removeData(e, "events"))
        },
        trigger: function(t, n, r, i) {
            var s, o, u, a, l, c, h, d = [r || N],
                v = f.call(t, "type") ? t.type : t,
                m = f.call(t, "namespace") ? t.namespace.split(".") : [];
            u = c = r = r || N;
            if (r.nodeType === 3 || r.nodeType === 8) return;
            if (Z.test(v + p.event.triggered)) return;
            v.indexOf(".") >= 0 && (m = v.split("."), v = m.shift(), m.sort()), o = v.indexOf(":") < 0 && "on" + v, t = t[p.expando] ? t : new p.Event(v, typeof t == "object" && t), t.isTrigger = i ? 2 : 3, t.namespace = m.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = r), n = n == null ? [t] : p.makeArray(n, [t]), l = p.event.special[v] || {};
            if (!i && l.trigger && l.trigger.apply(r, n) === !1) return;
            if (!i && !l.noBubble && !p.isWindow(r)) {
                a = l.delegateType || v, Z.test(a + v) || (u = u.parentNode);
                for (; u; u = u.parentNode) d.push(u), c = u;
                c === (r.ownerDocument || N) && d.push(c.defaultView || c.parentWindow || e)
            }
            h = 0;
            while ((u = d[h++]) && !t.isPropagationStopped()) t.type = h > 1 ? a : l.bindType || v, s = (p._data(u, "events") || {})[t.type] && p._data(u, "handle"), s && s.apply(u, n), s = o && u[o], s && s.apply && p.acceptData(u) && (t.result = s.apply(u, n), t.result === !1 && t.preventDefault());
            t.type = v;
            if (!i && !t.isDefaultPrevented() && (!l._default || l._default.apply(d.pop(), n) === !1) && p.acceptData(r) && o && r[v] && !p.isWindow(r)) {
                c = r[o], c && (r[o] = null), p.event.triggered = v;
                try {
                    r[v]()
                } catch (g) {}
                p.event.triggered = undefined, c && (r[o] = c)
            }
            return t.result
        },
        dispatch: function(e) {
            e = p.event.fix(e);
            var t, n, i, s, o, u = [],
                a = r.call(arguments),
                f = (p._data(this, "events") || {})[e.type] || [],
                l = p.event.special[e.type] || {};
            a[0] = e, e.delegateTarget = this;
            if (l.preDispatch && l.preDispatch.call(this, e) === !1) return;
            u = p.event.handlers.call(this, e, f), t = 0;
            while ((s = u[t++]) && !e.isPropagationStopped()) {
                e.currentTarget = s.elem, o = 0;
                while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())
                    if (!e.namespace_re || e.namespace_re.test(i.namespace)) e.handleObj = i, e.data = i.data, n = ((p.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), n !== undefined && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation())
            }
            return l.postDispatch && l.postDispatch.call(this, e), e.result
        },
        handlers: function(e, t) {
            var n, r, i, s, o = [],
                u = t.delegateCount,
                a = e.target;
            if (u && a.nodeType && (!e.button || e.type !== "click"))
                for (; a != this; a = a.parentNode || this)
                    if (a.nodeType === 1 && (a.disabled !== !0 || e.type !== "click")) {
                        i = [];
                        for (s = 0; s < u; s++) r = t[s], n = r.selector + " ", i[n] === undefined && (i[n] = r.needsContext ? p(n, this).index(a) >= 0 : p.find(n, this, null, [a]).length), i[n] && i.push(r);
                        i.length && o.push({
                            elem: a,
                            handlers: i
                        })
                    }
            return u < t.length && o.push({
                elem: this,
                handlers: t.slice(u)
            }), o
        },
        fix: function(e) {
            if (e[p.expando]) return e;
            var t, n, r, i = e.type,
                s = e,
                o = this.fixHooks[i];
            o || (this.fixHooks[i] = o = Y.test(i) ? this.mouseHooks : G.test(i) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, e = new p.Event(s), t = r.length;
            while (t--) n = r[t], e[n] = s[n];
            return e.target || (e.target = s.srcElement || N), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, s = t.button,
                    o = t.fromElement;
                return e.pageX == null && t.clientX != null && (r = e.target.ownerDocument || N, i = r.documentElement, n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), !e.which && s !== undefined && (e.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== rt() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === rt() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (p.nodeName(this, "input") && this.type === "checkbox" && this.click) return this.click(), !1
                },
                _default: function(e) {
                    return p.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== undefined && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = p.extend(new p.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? p.event.trigger(i, null, t) : p.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, p.removeEvent = N.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === j && (e[r] = null), e.detachEvent(r, n))
    }, p.Event = function(e, t) {
        if (!(this instanceof p.Event)) return new p.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && (e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault()) ? tt : nt) : this.type = e, t && p.extend(this, t), this.timeStamp = e && e.timeStamp || p.now(), this[p.expando] = !0
    }, p.Event.prototype = {
        isDefaultPrevented: nt,
        isPropagationStopped: nt,
        isImmediatePropagationStopped: nt,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = tt;
            if (!e) return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = tt;
            if (!e) return;
            e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = tt, this.stopPropagation()
        }
    }, p.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        p.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    s = e.handleObj;
                if (!i || i !== r && !p.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                return n
            }
        }
    }), c.submitBubbles || (p.event.special.submit = {
        setup: function() {
            if (p.nodeName(this, "form")) return !1;
            p.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = p.nodeName(t, "input") || p.nodeName(t, "button") ? t.form : undefined;
                n && !p._data(n, "submitBubbles") && (p.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), p._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && p.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            if (p.nodeName(this, "form")) return !1;
            p.event.remove(this, "._submit")
        }
    }), c.changeBubbles || (p.event.special.change = {
        setup: function() {
            if (Q.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") p.event.add(this, "propertychange._change", function(e) {
                    e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), p.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), p.event.simulate("change", this, e, !0)
                });
                return !1
            }
            p.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Q.test(t.nodeName) && !p._data(t, "changeBubbles") && (p.event.add(t, "change._change", function(e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && p.event.simulate("change", this.parentNode, e, !0)
                }), p._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return p.event.remove(this, "._change"), !Q.test(this.nodeName)
        }
    }), c.focusinBubbles || p.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            p.event.simulate(t, e.target, p.event.fix(e), !0)
        };
        p.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = p._data(r, t);
                i || r.addEventListener(e, n, !0), p._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = p._data(r, t) - 1;
                i ? p._data(r, t, i) : (r.removeEventListener(e, n, !0), p._removeData(r, t))
            }
        }
    }), p.fn.extend({
        on: function(e, t, n, r, i) {
            var s, o;
            if (typeof e == "object") {
                typeof t != "string" && (n = n || t, t = undefined);
                for (s in e) this.on(s, t, n, e[s], i);
                return this
            }
            n == null && r == null ? (r = t, n = t = undefined) : r == null && (typeof t == "string" ? (r = n, n = undefined) : (r = n, n = t, t = undefined));
            if (r === !1) r = nt;
            else if (!r) return this;
            return i === 1 && (o = r, r = function(e) {
                return p().off(e), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = p.guid++)), this.each(function() {
                p.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, p(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if (typeof e == "object") {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            if (t === !1 || typeof t == "function") n = t, t = undefined;
            return n === !1 && (n = nt), this.each(function() {
                p.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                p.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return p.event.trigger(e, t, n, !0)
        }
    });
    var st = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ot = / jQuery\d+="(?:null|\d+)"/g,
        ut = new RegExp("<(?:" + st + ")[\\s/>]", "i"),
        at = /^\s+/,
        ft = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        lt = /<([\w:]+)/,
        ct = /<tbody/i,
        ht = /<|&#?\w+;/,
        pt = /<(?:script|style|link)/i,
        dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        vt = /^$|\/(?:java|ecma)script/i,
        mt = /^true\/(.*)/,
        gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        yt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: c.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        bt = it(N),
        wt = bt.appendChild(N.createElement("div"));
    yt.optgroup = yt.option, yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead, yt.th = yt.td, p.extend({
        clone: function(e, t, n) {
            var r, i, s, o, u, a = p.contains(e.ownerDocument, e);
            c.html5Clone || p.isXMLDoc(e) || !ut.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (wt.innerHTML = e.outerHTML, wt.removeChild(s = wt.firstChild));
            if ((!c.noCloneEvent || !c.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !p.isXMLDoc(e)) {
                r = Et(s), u = Et(e);
                for (o = 0;
                    (i = u[o]) != null; ++o) r[o] && Lt(i, r[o])
            }
            if (t)
                if (n) {
                    u = u || Et(e), r = r || Et(s);
                    for (o = 0;
                        (i = u[o]) != null; o++) kt(i, r[o])
                } else kt(e, s);
            return r = Et(s, "script"), r.length > 0 && Ct(r, !a && Et(e, "script")), r = u = i = null, s
        },
        buildFragment: function(e, t, n, r) {
            var i, s, o, u, a, f, l, h = e.length,
                d = it(t),
                v = [],
                m = 0;
            for (; m < h; m++) {
                s = e[m];
                if (s || s === 0)
                    if (p.type(s) === "object") p.merge(v, s.nodeType ? [s] : s);
                    else if (!ht.test(s)) v.push(t.createTextNode(s));
                else {
                    u = u || d.appendChild(t.createElement("div")), a = (lt.exec(s) || ["", ""])[1].toLowerCase(), l = yt[a] || yt._default, u.innerHTML = l[1] + s.replace(ft, "<$1></$2>") + l[2], i = l[0];
                    while (i--) u = u.lastChild;
                    !c.leadingWhitespace && at.test(s) && v.push(t.createTextNode(at.exec(s)[0]));
                    if (!c.tbody) {
                        s = a === "table" && !ct.test(s) ? u.firstChild : l[1] === "<table>" && !ct.test(s) ? u : 0, i = s && s.childNodes.length;
                        while (i--) p.nodeName(f = s.childNodes[i], "tbody") && !f.childNodes.length && s.removeChild(f)
                    }
                    p.merge(v, u.childNodes), u.textContent = "";
                    while (u.firstChild) u.removeChild(u.firstChild);
                    u = d.lastChild
                }
            }
            u && d.removeChild(u), c.appendChecked || p.grep(Et(v, "input"), St), m = 0;
            while (s = v[m++]) {
                if (r && p.inArray(s, r) !== -1) continue;
                o = p.contains(s.ownerDocument, s), u = Et(d.appendChild(s), "script"), o && Ct(u);
                if (n) {
                    i = 0;
                    while (s = u[i++]) vt.test(s.type || "") && n.push(s)
                }
            }
            return u = null, d
        },
        cleanData: function(e, t) {
            var r, i, s, o, u = 0,
                a = p.expando,
                f = p.cache,
                l = c.deleteExpando,
                h = p.event.special;
            for (;
                (r = e[u]) != null; u++)
                if (t || p.acceptData(r)) {
                    s = r[a], o = s && f[s];
                    if (o) {
                        if (o.events)
                            for (i in o.events) h[i] ? p.event.remove(r, i) : p.removeEvent(r, i, o.handle);
                        f[s] && (delete f[s], l ? delete r[a] : typeof r.removeAttribute !== j ? r.removeAttribute(a) : r[a] = null, n.push(s))
                    }
                }
        }
    }), p.fn.extend({
        text: function(e) {
            return J(this, function(e) {
                return e === undefined ? p.text(this) : this.empty().append((this[0] && this[0].ownerDocument || N).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = xt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = xt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = e ? p.filter(e, this) : this,
                i = 0;
            for (;
                (n = r[i]) != null; i++) !t && n.nodeType === 1 && p.cleanData(Et(n)), n.parentNode && (t && p.contains(n.ownerDocument, n) && Ct(Et(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            var e, t = 0;
            for (;
                (e = this[t]) != null; t++) {
                e.nodeType === 1 && p.cleanData(Et(e, !1));
                while (e.firstChild) e.removeChild(e.firstChild);
                e.options && p.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
                return p.clone(this, e, t)
            })
        },
        html: function(e) {
            return J(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (e === undefined) return t.nodeType === 1 ? t.innerHTML.replace(ot, "") : undefined;
                if (typeof e == "string" && !pt.test(e) && (c.htmlSerialize || !ut.test(e)) && (c.leadingWhitespace || !at.test(e)) && !yt[(lt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(ft, "<$1></$2>");
                    try {
                        for (; n < r; n++) t = this[n] || {}, t.nodeType === 1 && (p.cleanData(Et(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, p.cleanData(Et(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = i.apply([], e);
            var n, r, s, o, u, a, f = 0,
                l = this.length,
                h = this,
                d = l - 1,
                v = e[0],
                m = p.isFunction(v);
            if (m || l > 1 && typeof v == "string" && !c.checkClone && dt.test(v)) return this.each(function(n) {
                var r = h.eq(n);
                m && (e[0] = v.call(this, n, r.html())), r.domManip(e, t)
            });
            if (l) {
                a = p.buildFragment(e, this[0].ownerDocument, !1, this), n = a.firstChild, a.childNodes.length === 1 && (a = n);
                if (n) {
                    o = p.map(Et(a, "script"), Tt), s = o.length;
                    for (; f < l; f++) r = a, f !== d && (r = p.clone(r, !0, !0), s && p.merge(o, Et(r, "script"))), t.call(this[f], r, f);
                    if (s) {
                        u = o[o.length - 1].ownerDocument, p.map(o, Nt);
                        for (f = 0; f < s; f++) r = o[f], vt.test(r.type || "") && !p._data(r, "globalEval") && p.contains(u, r) && (r.src ? p._evalUrl && p._evalUrl(r.src) : p.globalEval((r.text || r.textContent || r.innerHTML || "").replace(gt, "")))
                    }
                    a = n = null
                }
            }
            return this
        }
    }), p.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        p.fn[e] = function(e) {
            var n, r = 0,
                i = [],
                o = p(e),
                u = o.length - 1;
            for (; r <= u; r++) n = r === u ? this : this.clone(!0), p(o[r])[t](n), s.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var At, Ot = {};
    (function() {
        var e, t, n = N.createElement("div"),
            r = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], e.style.cssText = "float:left;opacity:.5", c.opacity = /^0.5/.test(e.style.opacity), c.cssFloat = !!e.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", c.clearCloneStyle = n.style.backgroundClip === "content-box", e = n = null, c.shrinkWrapBlocks = function() {
            var e, n, i, s;
            if (t == null) {
                e = N.getElementsByTagName("body")[0];
                if (!e) return;
                s = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", n = N.createElement("div"), i = N.createElement("div"), e.appendChild(n).appendChild(i), t = !1, typeof i.style.zoom !== j && (i.style.cssText = r + ";width:1px;padding:1px;zoom:1", i.innerHTML = "<div></div>", i.firstChild
                    .style.width = "5px", t = i.offsetWidth !== 3), e.removeChild(n), e = n = i = null
            }
            return t
        }
    })();
    var Dt = /^margin/,
        Pt = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i"),
        Ht, Bt, jt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (Ht = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }, Bt = function(e, t, n) {
            var r, i, s, o, u = e.style;
            return n = n || Ht(e), o = n ? n.getPropertyValue(t) || n[t] : undefined, n && (o === "" && !p.contains(e.ownerDocument, e) && (o = p.style(e, t)), Pt.test(o) && Dt.test(t) && (r = u.width, i = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = o, o = n.width, u.width = r, u.minWidth = i, u.maxWidth = s)), o === undefined ? o : o + ""
        }) : N.documentElement.currentStyle && (Ht = function(e) {
            return e.currentStyle
        }, Bt = function(e, t, n) {
            var r, i, s, o, u = e.style;
            return n = n || Ht(e), o = n ? n[t] : undefined, o == null && u && u[t] && (o = u[t]), Pt.test(o) && !jt.test(t) && (r = u.left, i = e.runtimeStyle, s = i && i.left, s && (i.left = e.currentStyle.left), u.left = t === "fontSize" ? "1em" : o, o = u.pixelLeft + "px", u.left = r, s && (i.left = s)), o === undefined ? o : o + "" || "auto"
        }),
        function() {
            function l() {
                var t, n, u = N.getElementsByTagName("body")[0];
                if (!u) return;
                t = N.createElement("div"), n = N.createElement("div"), t.style.cssText = a, u.appendChild(t).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", p.swap(u, u.style.zoom != null ? {
                    zoom: 1
                } : {}, function() {
                    r = n.offsetWidth === 4
                }), i = !0, s = !1, o = !0, e.getComputedStyle && (s = (e.getComputedStyle(n, null) || {}).top !== "1%", i = (e.getComputedStyle(n, null) || {
                    width: "4px"
                }).width === "4px"), u.removeChild(t), n = u = null
            }
            var t, n, r, i, s, o, u = N.createElement("div"),
                a = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
                f = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
            u.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = u.getElementsByTagName("a")[0], t.style.cssText = "float:left;opacity:.5", c.opacity = /^0.5/.test(t.style.opacity), c.cssFloat = !!t.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", c.clearCloneStyle = u.style.backgroundClip === "content-box", t = u = null, p.extend(c, {
                reliableHiddenOffsets: function() {
                    if (n != null) return n;
                    var e, t, r, i = N.createElement("div"),
                        s = N.getElementsByTagName("body")[0];
                    if (!s) return;
                    return i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = N.createElement("div"), e.style.cssText = a, s.appendChild(e).appendChild(i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = i.getElementsByTagName("td"), t[0].style.cssText = "padding:0;margin:0;border:0;display:none", r = t[0].offsetHeight === 0, t[0].style.display = "", t[1].style.display = "none", n = r && t[0].offsetHeight === 0, s.removeChild(e), i = s = null, n
                },
                boxSizing: function() {
                    return r == null && l(), r
                },
                boxSizingReliable: function() {
                    return i == null && l(), i
                },
                pixelPosition: function() {
                    return s == null && l(), s
                },
                reliableMarginRight: function() {
                    var t, n, r, i;
                    if (o == null && e.getComputedStyle) {
                        t = N.getElementsByTagName("body")[0];
                        if (!t) return;
                        n = N.createElement("div"), r = N.createElement("div"), n.style.cssText = a, t.appendChild(n).appendChild(r), i = r.appendChild(N.createElement("div")), i.style.cssText = r.style.cssText = f, i.style.marginRight = i.style.width = "0", r.style.width = "1px", o = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight), t.removeChild(n)
                    }
                    return o
                }
            })
        }(), p.swap = function(e, t, n, r) {
            var i, s, o = {};
            for (s in t) o[s] = e.style[s], e.style[s] = t[s];
            i = n.apply(e, r || []);
            for (s in t) e.style[s] = o[s];
            return i
        };
    var It = /alpha\([^)]*\)/i,
        qt = /opacity\s*=\s*([^)]*)/,
        Rt = /^(none|table(?!-c[ea]).+)/,
        Ut = new RegExp("^(" + X + ")(.*)$", "i"),
        zt = new RegExp("^([+-])=(" + X + ")", "i"),
        Wt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Xt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Vt = ["Webkit", "O", "Moz", "ms"];
    p.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Bt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": c.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var i, s, o, u = p.camelCase(t),
                a = e.style;
            t = p.cssProps[u] || (p.cssProps[u] = $t(a, u)), o = p.cssHooks[t] || p.cssHooks[u];
            if (n === undefined) return o && "get" in o && (i = o.get(e, !1, r)) !== undefined ? i : a[t];
            s = typeof n, s === "string" && (i = zt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(p.css(e, t)), s = "number");
            if (n == null || n !== n) return;
            s === "number" && !p.cssNumber[u] && (n += "px"), !c.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (a[t] = "inherit");
            if (!o || !("set" in o) || (n = o.set(e, n, r)) !== undefined) try {
                a[t] = "", a[t] = n
            } catch (f) {}
        },
        css: function(e, t, n, r) {
            var i, s, o, u = p.camelCase(t);
            return t = p.cssProps[u] || (p.cssProps[u] = $t(e.style, u)), o = p.cssHooks[t] || p.cssHooks[u], o && "get" in o && (s = o.get(e, !0, n)), s === undefined && (s = Bt(e, t, r)), s === "normal" && t in Xt && (s = Xt[t]), n === "" || n ? (i = parseFloat(s), n === !0 || p.isNumeric(i) ? i || 0 : s) : s
        }
    }), p.each(["height", "width"], function(e, t) {
        p.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return e.offsetWidth === 0 && Rt.test(p.css(e, "display")) ? p.swap(e, Wt, function() {
                    return Gt(e, t, r)
                }) : Gt(e, t, r)
            },
            set: function(e, n, r) {
                var i = r && Ht(e);
                return Kt(e, n, r ? Qt(e, t, r, c.boxSizing() && p.css(e, "boxSizing", !1, i) === "border-box", i) : 0)
            }
        }
    }), c.opacity || (p.cssHooks.opacity = {
        get: function(e, t) {
            return qt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = p.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if ((t >= 1 || t === "") && p.trim(s.replace(It, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (t === "" || r && !r.filter) return
            }
            n.filter = It.test(s) ? s.replace(It, i) : s + " " + i
        }
    }), p.cssHooks.marginRight = Ft(c.reliableMarginRight, function(e, t) {
        if (t) return p.swap(e, {
            display: "inline-block"
        }, Bt, [e, "marginRight"])
    }), p.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        p.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0,
                    i = {},
                    s = typeof n == "string" ? n.split(" ") : [n];
                for (; r < 4; r++) i[e + V[r] + t] = s[r] || s[r - 2] || s[0];
                return i
            }
        }, Dt.test(e) || (p.cssHooks[e + t].set = Kt)
    }), p.fn.extend({
        css: function(e, t) {
            return J(this, function(e, t, n) {
                var r, i, s = {},
                    o = 0;
                if (p.isArray(t)) {
                    r = Ht(e), i = t.length;
                    for (; o < i; o++) s[t[o]] = p.css(e, t[o], !1, r);
                    return s
                }
                return n !== undefined ? p.style(e, t, n) : p.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return Jt(this, !0)
        },
        hide: function() {
            return Jt(this)
        },
        toggle: function(e) {
            return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
                $(this) ? p(this).show() : p(this).hide()
            })
        }
    }), p.Tween = Yt, Yt.prototype = {
        constructor: Yt,
        init: function(e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (p.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Yt.propHooks[this.prop];
            return e && e.get ? e.get(this) : Yt.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Yt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yt.propHooks._default.set(this), this
        }
    }, Yt.prototype.init.prototype = Yt.prototype, Yt.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = p.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function(e) {
                p.fx.step[e.prop] ? p.fx.step[e.prop](e) : e.elem.style && (e.elem.style[p.cssProps[e.prop]] != null || p.cssHooks[e.prop]) ? p.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Yt.propHooks.scrollTop = Yt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, p.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, p.fx = Yt.prototype.init, p.fx.step = {};
    var Zt, en, tn = /^(?:toggle|show|hide)$/,
        nn = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$", "i"),
        rn = /queueHooks$/,
        sn = [ln],
        on = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = nn.exec(t),
                    s = i && i[3] || (p.cssNumber[e] ? "" : "px"),
                    o = (p.cssNumber[e] || s !== "px" && +r) && nn.exec(p.css(n.elem, e)),
                    u = 1,
                    a = 20;
                if (o && o[3] !== s) {
                    s = s || o[3], i = i || [], o = +r || 1;
                    do u = u || ".5", o /= u, p.style(n.elem, e, o + s); while (u !== (u = n.cur() / r) && u !== 1 && --a)
                }
                return i && (o = n.start = +o || +r || 0, n.unit = s, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    p.Animation = p.extend(hn, {
            tweener: function(e, t) {
                p.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                var n, r = 0,
                    i = e.length;
                for (; r < i; r++) n = e[r], on[n] = on[n] || [], on[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? sn.unshift(e) : sn.push(e)
            }
        }), p.speed = function(e, t, n) {
            var r = e && typeof e == "object" ? p.extend({}, e) : {
                complete: n || !n && t || p.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !p.isFunction(t) && t
            };
            r.duration = p.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in p.fx.speeds ? p.fx.speeds[r.duration] : p.fx.speeds._default;
            if (r.queue == null || r.queue === !0) r.queue = "fx";
            return r.old = r.complete, r.complete = function() {
                p.isFunction(r.old) && r.old.call(this), r.queue && p.dequeue(this, r.queue)
            }, r
        }, p.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter($).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = p.isEmptyObject(e),
                    s = p.speed(t, n, r),
                    o = function() {
                        var t = hn(this, p.extend({}, e), s);
                        (i || p._data(this, "finish")) && t.stop(!0)
                    };
                return o.finish = o, i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return typeof e != "string" && (n = t, t = e, e = undefined), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = e != null && e + "queueHooks",
                        s = p.timers,
                        o = p._data(this);
                    if (i) o[i] && o[i].stop && r(o[i]);
                    else
                        for (i in o) o[i] && o[i].stop && rn.test(i) && r(o[i]);
                    for (i = s.length; i--;) s[i].elem === this && (e == null || s[i].queue === e) && (s[i].anim.stop(n), t = !1, s.splice(i, 1));
                    (t || !n) && p.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = p._data(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        s = p.timers,
                        o = r ? r.length : 0;
                    n.finish = !0, p.queue(this, e, []), i && i.stop && i.stop.call(this, !0);
                    for (t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                    for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), p.each(["toggle", "show", "hide"], function(e, t) {
            var n = p.fn[t];
            p.fn[t] = function(e, r, i) {
                return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(an(t, !0), e, r, i)
            }
        }), p.each({
            slideDown: an("show"),
            slideUp: an("hide"),
            slideToggle: an("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            p.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), p.timers = [], p.fx.tick = function() {
            var e, t = p.timers,
                n = 0;
            Zt = p.now();
            for (; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
            t.length || p.fx.stop(), Zt = undefined
        }, p.fx.timer = function(e) {
            p.timers.push(e), e() ? p.fx.start() : p.timers.pop()
        }, p.fx.interval = 13, p.fx.start = function() {
            en || (en = setInterval(p.fx.tick, p.fx.interval))
        }, p.fx.stop = function() {
            clearInterval(en), en = null
        }, p.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, p.fn.delay = function(e, t) {
            return e = p.fx ? p.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        function() {
            var e, t, n, r, i = N.createElement("div");
            i.setAttribute("className", "t"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = i.getElementsByTagName("a")[0], n = N.createElement("select"), r = n.appendChild(N.createElement("option")), t = i.getElementsByTagName("input")[0], e.style.cssText = "top:1px", c.getSetAttribute = i.className !== "t", c.style = /top/.test(e.getAttribute("style")), c.hrefNormalized = e.getAttribute("href") === "/a", c.checkOn = !!t.value, c.optSelected = r.selected, c.enctype = !!N.createElement("form").enctype, n.disabled = !0, c.optDisabled = !r.disabled, t = N.createElement("input"), t.setAttribute("value", ""), c.input = t.getAttribute("value") === "", t.value = "t", t.setAttribute("type", "radio"), c.radioValue = t.value === "t", e = t = n = r = i = null
        }();
    var pn = /\r/g;
    p.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            if (!arguments.length) {
                if (i) return t = p.valHooks[i.type] || p.valHooks[i.nodeName.toLowerCase()], t && "get" in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value, typeof n == "string" ? n.replace(pn, "") : n == null ? "" : n);
                return
            }
            return r = p.isFunction(e), this.each(function(n) {
                var i;
                if (this.nodeType !== 1) return;
                r ? i = e.call(this, n, p(this).val()) : i = e, i == null ? i = "" : typeof i == "number" ? i += "" : p.isArray(i) && (i = p.map(i, function(e) {
                    return e == null ? "" : e + ""
                })), t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()];
                if (!t || !("set" in t) || t.set(this, i, "value") === undefined) this.value = i
            })
        }
    }), p.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = p.find.attr(e, "value");
                    return t != null ? t : p.text(e)
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        s = e.type === "select-one" || i < 0,
                        o = s ? null : [],
                        u = s ? i + 1 : r.length,
                        a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (c.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !p.nodeName(n.parentNode, "optgroup"))) {
                            t = p(n).val();
                            if (s) return t;
                            o.push(t)
                        }
                    }
                    return o
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        s = p.makeArray(t),
                        o = i.length;
                    while (o--) {
                        r = i[o];
                        if (p.inArray(p.valHooks.option.get(r), s) >= 0) try {
                            r.selected = n = !0
                        } catch (u) {
                            r.scrollHeight
                        } else r.selected = !1
                    }
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), p.each(["radio", "checkbox"], function() {
        p.valHooks[this] = {
            set: function(e, t) {
                if (p.isArray(t)) return e.checked = p.inArray(p(e).val(), t) >= 0
            }
        }, c.checkOn || (p.valHooks[this].get = function(e) {
            return e.getAttribute("value") === null ? "on" : e.value
        })
    });
    var dn, vn, mn = p.expr.attrHandle,
        gn = /^(?:checked|selected)$/i,
        yn = c.getSetAttribute,
        bn = c.input;
    p.fn.extend({
        attr: function(e, t) {
            return J(this, p.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                p.removeAttr(this, e)
            })
        }
    }), p.extend({
        attr: function(e, t, n) {
            var r, i, s = e.nodeType;
            if (!e || s === 3 || s === 8 || s === 2) return;
            if (typeof e.getAttribute === j) return p.prop(e, t, n);
            if (s !== 1 || !p.isXMLDoc(e)) t = t.toLowerCase(), r = p.attrHooks[t] || (p.expr.match.bool.test(t) ? vn : dn);
            if (n === undefined) return r && "get" in r && (i = r.get(e, t)) !== null ? i : (i = p.find.attr(e, t), i == null ? undefined : i);
            if (n !== null) return r && "set" in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""), n);
            p.removeAttr(e, t)
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                s = t && t.match(M);
            if (s && e.nodeType === 1)
                while (n = s[i++]) r = p.propFix[n] || n, p.expr.match.bool.test(n) ? bn && yn || !gn.test(n) ? e[r] = !1 : e[p.camelCase("default-" + n)] = e[r] = !1 : p.attr(e, n, ""), e.removeAttribute(yn ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!c.radioValue && t === "radio" && p.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), vn = {
        set: function(e, t, n) {
            return t === !1 ? p.removeAttr(e, n) : bn && yn || !gn.test(n) ? e.setAttribute(!yn && p.propFix[n] || n, n) : e[p.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, p.each(p.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = mn[t] || p.find.attr;
        mn[t] = bn && yn || !gn.test(t) ? function(e, t, r) {
            var i, s;
            return r || (s = mn[t], mn[t] = i, i = n(e, t, r) != null ? t.toLowerCase() : null, mn[t] = s), i
        } : function(e, t, n) {
            if (!n) return e[p.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    });
    if (!bn || !yn) p.attrHooks.value = {
        set: function(e, t, n) {
            if (!p.nodeName(e, "input")) return dn && dn.set(e, t, n);
            e.defaultValue = t
        }
    };
    yn || (dn = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "";
            if (n === "value" || t === e.getAttribute(n)) return t
        }
    }, mn.id = mn.name = mn.coords = function(e, t, n) {
        var r;
        if (!n) return (r = e.getAttributeNode(t)) && r.value !== "" ? r.value : null
    }, p.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified) return n.value
        },
        set: dn.set
    }, p.attrHooks.contenteditable = {
        set: function(e, t, n) {
            dn.set(e, t === "" ? !1 : t, n)
        }
    }, p.each(["width", "height"], function(e, t) {
        p.attrHooks[t] = {
            set: function(e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n
            }
        }
    })), c.style || (p.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || undefined
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var wn = /^(?:input|select|textarea|button|object)$/i,
        En = /^(?:a|area)$/i;
    p.fn.extend({
        prop: function(e, t) {
            return J(this, p.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = p.propFix[e] || e, this.each(function() {
                try {
                    this[e] = undefined, delete this[e]
                } catch (t) {}
            })
        }
    }), p.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, s, o = e.nodeType;
            if (!e || o === 3 || o === 8 || o === 2) return;
            return s = o !== 1 || !p.isXMLDoc(e), s && (t = p.propFix[t] || t, i = p.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && (r = i.get(e, t)) !== null ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = p.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wn.test(e.nodeName) || En.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), c.hrefNormalized || p.each(["href", "src"], function(e, t) {
        p.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), c.optSelected || (p.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        p.propFix[this.toLowerCase()] = this
    }), c.enctype || (p.propFix.enctype = "encoding");
    var Sn = /[\t\r\n\f]/g;
    p.fn.extend({
        addClass: function(e) {
            var t, n, r, i, s, o, u = 0,
                a = this.length,
                f = typeof e == "string" && e;
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).addClass(e.call(this, t, this.className))
            });
            if (f) {
                t = (e || "").match(M) || [];
                for (; u < a; u++) {
                    n = this[u], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(Sn, " ") : " ");
                    if (r) {
                        s = 0;
                        while (i = t[s++]) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o = p.trim(r), n.className !== o && (n.className = o)
                    }
                }
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, s, o, u = 0,
                a = this.length,
                f = arguments.length === 0 || typeof e == "string" && e;
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).removeClass(e.call(this, t, this.className))
            });
            if (f) {
                t = (e || "").match(M) || [];
                for (; u < a; u++) {
                    n = this[u], r = n.nodeType === 1 && (n.className ? (" " + n.className + " ").replace(Sn, " ") : "");
                    if (r) {
                        s = 0;
                        while (i = t[s++])
                            while (r.indexOf(" " + i + " ") >= 0) r = r.replace(" " + i + " ", " ");
                        o = e ? p.trim(r) : "", n.className !== o && (n.className = o)
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return typeof t == "boolean" && n === "string" ? t ? this.addClass(e) : this.removeClass(e) : p.isFunction(e) ? this.each(function(n) {
                p(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if (n === "string") {
                    var t, r = 0,
                        i = p(this),
                        s = e.match(M) || [];
                    while (t = s[r++]) i.hasClass(t) ? i.removeClass(t) : i.addClass(t)
                } else if (n === j || n === "boolean") this.className && p._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : p._data(this, "__className__") || ""
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(Sn, " ").indexOf(t) >= 0) return !0;
            return !1
        }
    }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        p.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), p.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var xn = p.now(),
        Tn = /\?/,
        Nn = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    p.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null,
            i = p.trim(t + "");
        return i && !p.trim(i.replace(Nn, function(e, t, i, s) {
            return n && t && (r = 0), r === 0 ? e : (n = i || t, r += !s - !i, "")
        })) ? Function("return " + i)() : p.error("Invalid JSON: " + t)
    }, p.parseXML = function(t) {
        var n, r;
        if (!t || typeof t != "string") return null;
        try {
            e.DOMParser ? (r = new DOMParser, n = r.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (i) {
            n = undefined
        }
        return (!n || !n.documentElement || n.getElementsByTagName("parsererror").length) && p.error("Invalid XML: " + t), n
    };
    var Cn, kn, Ln = /#.*$/,
        An = /([?&])_=[^&]*/,
        On = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Mn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        _n = /^(?:GET|HEAD)$/,
        Dn = /^\/\//,
        Pn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hn = {},
        Bn = {},
        jn = "*/".concat("*");
    try {
        kn = location.href
    } catch (Fn) {
        kn = N.createElement("a"), kn.href = "", kn = kn.href
    }
    Cn = Pn.exec(kn.toLowerCase()) || [], p.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: kn,
            type: "GET",
            isLocal: Mn.test(Cn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": jn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": p.parseJSON,
                "text xml": p.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Rn(Rn(e, p.ajaxSettings), t) : Rn(p.ajaxSettings, e)
        },
        ajaxPrefilter: In(Hn),
        ajaxTransport: In(Bn),
        ajax: function(e, t) {
            function x(e, t, n, r) {
                var f, g, y, w, S, x = t;
                if (b === 2) return;
                b = 2, o && clearTimeout(o), a = undefined, s = r || "", E.readyState = e > 0 ? 4 : 0, f = e >= 200 && e < 300 || e === 304, n && (w = Un(l, E, n)), w = zn(l, w, E, f);
                if (f) l.ifModified && (S = E.getResponseHeader("Last-Modified"), S && (p.lastModified[i] = S), S = E.getResponseHeader("etag"), S && (p.etag[i] = S)), e === 204 || l.type === "HEAD" ? x = "nocontent" : e === 304 ? x = "notmodified" : (x = w.state, g = w.data, y = w.error, f = !y);
                else {
                    y = x;
                    if (e || !x) x = "error", e < 0 && (e = 0)
                }
                E.status = e, E.statusText = (t || x) + "", f ? d.resolveWith(c, [g, x, E]) : d.rejectWith(c, [E, x, y]), E.statusCode(m), m = undefined, u && h.trigger(f ? "ajaxSuccess" : "ajaxError", [E, l, f ? g : y]), v.fireWith(c, [E, x]), u && (h.trigger("ajaxComplete", [E, l]), --p.active || p.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (t = e, e = undefined), t = t || {};
            var n, r, i, s, o, u, a, f, l = p.ajaxSetup({}, t),
                c = l.context || l,
                h = l.context && (c.nodeType || c.jquery) ? p(c) : p.event,
                d = p.Deferred(),
                v = p.Callbacks("once memory"),
                m = l.statusCode || {},
                g = {},
                y = {},
                b = 0,
                w = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (b === 2) {
                            if (!f) {
                                f = {};
                                while (t = On.exec(s)) f[t[1].toLowerCase()] = t[2]
                            }
                            t = f[e.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return b === 2 ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = y[n] = y[n] || e, g[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (l.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (b < 2)
                                for (t in e) m[t] = [m[t], e[t]];
                            else E.always(e[E.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return a && a.abort(t), x(0, t), this
                    }
                };
            d.promise(E).complete = v.add, E.success = E.done, E.error = E.fail, l.url = ((e || l.url || kn) + "").replace(Ln, "").replace(Dn, Cn[1] + "//"), l.type = t.method || t.type || l.method || l.type, l.dataTypes = p.trim(l.dataType || "*").toLowerCase().match(M) || [""], l.crossDomain == null && (n = Pn.exec(l.url.toLowerCase()), l.crossDomain = !(!n || n[1] === Cn[1] && n[2] === Cn[2] && (n[3] || (n[1] === "http:" ? "80" : "443")) === (Cn[3] || (Cn[1] === "http:" ? "80" : "443")))), l.data && l.processData && typeof l.data != "string" && (l.data = p.param(l.data, l.traditional)), qn(Hn, l, t, E);
            if (b === 2) return E;
            u = l.global, u && p.active++ === 0 && p.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !_n.test(l.type), i = l.url, l.hasContent || (l.data && (i = l.url += (Tn.test(i) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = An.test(i) ? i.replace(An, "$1_=" + xn++) : i + (Tn.test(i) ? "&" : "?") + "_=" + xn++)), l.ifModified && (p.lastModified[i] && E.setRequestHeader("If-Modified-Since", p.lastModified[i]), p.etag[i] && E.setRequestHeader("If-None-Match", p.etag[i])), (l.data && l.hasContent && l.contentType !== !1 || t.contentType) && E.setRequestHeader("Content-Type", l.contentType), E.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + (l.dataTypes[0] !== "*" ? ", " + jn + "; q=0.01" : "") : l.accepts["*"]);
            for (r in l.headers) E.setRequestHeader(r, l.headers[r]);
            if (!l.beforeSend || l.beforeSend.call(c, E, l) !== !1 && b !== 2) {
                w = "abort";
                for (r in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) E[r](l[r]);
                a = qn(Bn, l, t, E);
                if (!a) x(-1, "No Transport");
                else {
                    E.readyState = 1, u && h.trigger("ajaxSend", [E, l]), l.async && l.timeout > 0 && (o = setTimeout(function() {
                        E.abort("timeout")
                    }, l.timeout));
                    try {
                        b = 1, a.send(g, x)
                    } catch (S) {
                        if (!(b < 2)) throw S;
                        x(-1, S)
                    }
                }
                return E
            }
            return E.abort()
        },
        getJSON: function(e, t, n) {
            return p.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return p.get(e, undefined, t, "script")
        }
    }), p.each(["get", "post"], function(e, t) {
        p[t] = function(e, n, r, i) {
            return p.isFunction(n) && (i = i || r, r = n, n = undefined), p.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }), p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        p.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), p._evalUrl = function(e) {
        return p.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, p.fn.extend({
        wrapAll: function(e) {
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return p.isFunction(e) ? this.each(function(t) {
                p(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = p(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = p.isFunction(e);
            return this.each(function(n) {
                p(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
            }).end()
        }
    }), p.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !c.reliableHiddenOffsets() && (e.style && e.style.display || p.css(e, "display")) === "none"
    }, p.expr.filters.visible = function(e) {
        return !p.expr.filters.hidden(e)
    };
    var Wn = /%20/g,
        Xn = /\[\]$/,
        Vn = /\r?\n/g,
        $n = /^(?:submit|button|image|reset|file)$/i,
        Jn = /^(?:input|select|textarea|keygen)/i;
    p.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                t = p.isFunction(t) ? t() : t == null ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        t === undefined && (t = p.ajaxSettings && p.ajaxSettings.traditional);
        if (p.isArray(e) || e.jquery && !p.isPlainObject(e)) p.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) Kn(n, e[n], t, i);
        return r.join("&").replace(Wn, "+")
    }, p.fn.extend({
        serialize: function() {
            return p.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = p.prop(this, "elements");
                return e ? p.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !p(this).is(":disabled") && Jn.test(this.nodeName) && !$n.test(e) && (this.checked || !K.test(e))
            }).map(function(e, t) {
                var n = p(this).val();
                return n == null ? null : p.isArray(n) ? p.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Vn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Vn, "\r\n")
                }
            }).get()
        }
    }), p.ajaxSettings.xhr = e.ActiveXObject !== undefined ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zn() || er()
    } : Zn;
    var Qn = 0,
        Gn = {},
        Yn = p.ajaxSettings.xhr();
    e.ActiveXObject && p(e).on("unload", function() {
        for (var e in Gn) Gn[e](undefined, !0)
    }), c.cors = !!Yn && "withCredentials" in Yn, Yn = c.ajax = !!Yn, Yn && p.ajaxTransport(function(e) {
        if (!e.crossDomain || c.cors) {
            var t;
            return {
                send: function(n, r) {
                    var i, s = e.xhr(),
                        o = ++Qn;
                    s.open(e.type, e.url, e.async, e.username, e.password);
                    if (e.xhrFields)
                        for (i in e.xhrFields) s[i] = e.xhrFields[i];
                    e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), !e.crossDomain && !n["X-Requested-With"] && (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n) n[i] !== undefined && s.setRequestHeader(i, n[i] + "");
                    s.send(e.hasContent && e.data || null), t = function(n, i) {
                        var u, a, f;
                        if (t && (i || s.readyState === 4)) {
                            delete Gn[o], t = undefined, s.onreadystatechange = p.noop;
                            if (i) s.readyState !== 4 && s.abort();
                            else {
                                f = {}, u = s.status, typeof s.responseText == "string" && (f.text = s.responseText);
                                try {
                                    a = s.statusText
                                } catch (l) {
                                    a = ""
                                }!u && e.isLocal && !e.crossDomain ? u = f.text ? 200 : 404 : u === 1223 && (u = 204)
                            }
                        }
                        f && r(u, a, f, s.getAllResponseHeaders())
                    }, e.async ? s.readyState === 4 ? setTimeout(t) : s.onreadystatechange = Gn[o] = t : t()
                },
                abort: function() {
                    t && t(undefined, !0)
                }
            }
        }
    }), p.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return p.globalEval(e), e
            }
        }
    }), p.ajaxPrefilter("script", function(e) {
        e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), p.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = N.head || p("head")[0] || N.documentElement;
            return {
                send: function(r, i) {
                    t = N.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        if (n || !t.readyState || /loaded|complete/.test(t.readyState)) t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success")
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(undefined, !0)
                }
            }
        }
    });
    var tr = [],
        nr = /(=)\?(?=&|$)|\?\?/;
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = tr.pop() || p.expando + "_" + xn++;
            return this[e] = !0, e
        }
    }), p.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, s, o, u = t.jsonp !== !1 && (nr.test(t.url) ? "url" : typeof t.data == "string" && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && nr.test(t.data) && "data");
        if (u || t.dataTypes[0] === "jsonp") return i = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, u ? t[u] = t[u].replace(nr, "$1" + i) : t.jsonp !== !1 && (t.url += (Tn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return o || p.error(i + " was not called"), o[0]
        }, t.dataTypes[0] = "json", s = e[i], e[i] = function() {
            o = arguments
        }, r.always(function() {
            e[i] = s, t[i] && (t.jsonpCallback = n.jsonpCallback, tr.push(i)), o && p.isFunction(s) && s(o[0]), o = s = undefined
        }), "script"
    }), p.parseHTML = function(e, t, n) {
        if (!e || typeof e != "string") return null;
        typeof t == "boolean" && (n = t, t = !1), t = t || N;
        var r = E.exec(e),
            i = !n && [];
        return r ? [t.createElement(r[1])] : (r = p.buildFragment([e], t, i), i && i.length && p(i).remove(), p.merge([], r.childNodes))
    };
    var rr = p.fn.load;
    p.fn.load = function(e, t, n) {
        if (typeof e != "string" && rr) return rr.apply(this, arguments);
        var r, i, s, o = this,
            u = e.indexOf(" ");
        return u >= 0 && (r = e.slice(u, e.length), e = e.slice(0, u)), p.isFunction(t) ? (n = t, t = undefined) : t && typeof t == "object" && (s = "POST"), o.length > 0 && p.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments, o.html(r ? p("<div>").append(p.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            o.each(n, i || [e.responseText, t, e])
        }), this
    }, p.expr.filters.animated = function(e) {
        return p.grep(p.timers, function(t) {
            return e === t.elem
        }).length
    };
    var ir = e.document.documentElement;
    p.offset = {
        setOffset: function(e, t, n) {
            var r, i, s, o, u, a, f, l = p.css(e, "position"),
                c = p(e),
                h = {};
            l === "static" && (e.style.position = "relative"), u = c.offset(), s = p.css(e, "top"), a = p.css(e, "left"), f = (l === "absolute" || l === "fixed") && p.inArray("auto", [s, a]) > -1, f ? (r = c.position(), o = r.top, i = r.left) : (o = parseFloat(s) || 0, i = parseFloat(a) || 0), p.isFunction(t) && (t = t.call(e, n, u)), t.top != null && (h.top = t.top - u.top + o), t.left != null && (h.left = t.left - u.left + i), "using" in t ? t.using.call(e, h) : c.css(h)
        }
    }, p.fn.extend({
        offset: function(e) {
            if (arguments.length) return e === undefined ? this : this.each(function(t) {
                p.offset.setOffset(this, e, t)
            });
            var t, n, r = {
                    top: 0,
                    left: 0
                },
                i = this[0],
                s = i && i.ownerDocument;
            if (!s) return;
            return t = s.documentElement, p.contains(t, i) ? (typeof i.getBoundingClientRect !== j && (r = i.getBoundingClientRect()), n = sr(s), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r
        },
        position: function() {
            if (!this[0]) return;
            var e, t, n = {
                    top: 0,
                    left: 0
                },
                r = this[0];
            return p.css(r, "position") === "fixed" ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), p.nodeName(e[0], "html") || (n = e.offset()), n.top += p.css(e[0], "borderTopWidth", !0), n.left += p.css(e[0], "borderLeftWidth", !0)), {
                top: t.top - n.top - p.css(r, "marginTop", !0),
                left: t.left - n.left - p.css(r, "marginLeft", !0)
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || ir;
                while (e && !p.nodeName(e, "html") && p.css(e, "position") === "static") e = e.offsetParent;
                return e || ir
            })
        }
    }), p.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        p.fn[e] = function(r) {
            return J(this, function(e, r, i) {
                var s = sr(e);
                if (i === undefined) return s ? t in s ? s[t] : s.document.documentElement[r] : e[r];
                s ? s.scrollTo(n ? p(s).scrollLeft() : i, n ? i : p(s).scrollTop()) : e[r] = i
            }, e, r, arguments.length, null)
        }
    }), p.each(["top", "left"], function(e, t) {
        p.cssHooks[t] = Ft(c.pixelPosition, function(e, n) {
            if (n) return n = Bt(e, t), Pt.test(n) ? p(e).position()[t] + "px" : n
        })
    }), p.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        p.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(
            n, r) {
            p.fn[r] = function(r, i) {
                var s = arguments.length && (n || typeof r != "boolean"),
                    o = n || (r === !0 || i === !0 ? "margin" : "border");
                return J(this, function(t, n, r) {
                    var i;
                    return p.isWindow(t) ? t.document.documentElement["client" + e] : t.nodeType === 9 ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : r === undefined ? p.css(t, n, o) : p.style(t, n, r, o)
                }, t, s ? r : undefined, s, null)
            }
        })
    }), p.fn.size = function() {
        return this.length
    }, p.fn.andSelf = p.fn.addBack, typeof define == "function" && define.amd && define("jquery", [], function() {
        return p
    });
    var or = e.jQuery,
        ur = e.$;
    return p.noConflict = function(t) {
        return e.$ === p && (e.$ = ur), t && e.jQuery === p && (e.jQuery = or), p
    }, typeof t === j && (e.jQuery = e.$ = p), p
}),
function(e, t, n) {
    function i(n) {
        var i = t.console;
        r[n] || (r[n] = !0, e.migrateWarnings.push(n), i && i.warn && !e.migrateMute && (i.warn("JQMIGRATE: " + n), e.migrateTrace && i.trace && i.trace()))
    }

    function s(t, n, r, s) {
        if (Object.defineProperty) try {
            Object.defineProperty(t, n, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return i(s), r
                },
                set: function(e) {
                    i(s), r = e
                }
            });
            return
        } catch (o) {}
        e._definePropertyBroken = !0, t[n] = r
    }
    e.migrateVersion = "1.4.0";
    var r = {};
    e.migrateWarnings = [], e.migrateMute = t.TWITCH_SERVER_IS_PRODUCTION, e.migrateTrace === n && (e.migrateTrace = !1), e.migrateReset = function() {
        r = {}, e.migrateWarnings.length = 0
    }, document.compatMode === "BackCompat" && i("jQuery is not compatible with Quirks Mode");
    var o = e("<input/>", {
            size: 1
        }).attr("size") && e.attrFn,
        u = e.attr,
        a = e.attrHooks.value && e.attrHooks.value.get || function() {
            return null
        },
        f = e.attrHooks.value && e.attrHooks.value.set || function() {
            return n
        },
        l = /^(?:input|button)$/i,
        c = /^[238]$/,
        h = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        p = /^(?:checked|selected)$/i;
    s(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, r, s, a) {
        var f = r.toLowerCase(),
            d = t && t.nodeType;
        if (a) {
            u.length < 4 && i("jQuery.fn.attr( props, pass ) is deprecated");
            if (t && !c.test(d) && (o ? r in o : e.isFunction(e.fn[r]))) return e(t)[r](s)
        }
        return r === "type" && s !== n && l.test(t.nodeName) && t.parentNode && i("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[f] && h.test(f) && (e.attrHooks[f] = {
            get: function(t, r) {
                var i, s = e.prop(t, r);
                return s === !0 || typeof s != "boolean" && (i = t.getAttributeNode(r)) && i.nodeValue !== !1 ? r.toLowerCase() : n
            },
            set: function(t, n, r) {
                var i;
                return n === !1 ? e.removeAttr(t, r) : (i = e.propFix[r] || r, i in t && (t[i] = !0), t.setAttribute(r, r.toLowerCase())), r
            }
        }, p.test(f) && i("jQuery.fn.attr('" + f + "') might use property instead of attribute")), u.call(e, t, r, s)
    }, e.attrHooks.value = {
        get: function(e, t) {
            var n = (e.nodeName || "").toLowerCase();
            return n === "button" ? a.apply(this, arguments) : (n !== "input" && n !== "option" && i("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
        },
        set: function(e, t) {
            var n = (e.nodeName || "").toLowerCase();
            if (n === "button") return f.apply(this, arguments);
            n !== "input" && n !== "option" && i("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t
        }
    };
    var d, v, m = e.fn.init,
        g = e.parseJSON,
        y = /^\s*</,
        b = /\[\s*\w+\s*[~|^$*]?=\s*(?![\s'"])[^#\]]*#/,
        w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    e.fn.init = function(t, r, s) {
        var o, u;
        if (t && typeof t == "string" && !e.isPlainObject(r) && (o = w.exec(e.trim(t))) && o[0]) {
            y.test(t) || i("$(html) HTML strings must start with '<' character"), o[3] && i("$(html) HTML text after last tag is ignored"), o[0].charAt(0) === "#" && (i("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), r && r.context && (r = r.context);
            if (e.parseHTML) return m.call(this, e.parseHTML(o[2], r && r.ownerDocument || r || document, !0), r, s)
        }
        return t === "#" ? (i("jQuery( '#' ) is not a valid selector"), t = []) : b.test(t) && i("Attribute selectors with '#' must be quoted: '" + t + "'"), u = m.apply(this, arguments), t && t.selector !== n ? (u.selector = t.selector, u.context = t.context) : (u.selector = typeof t == "string" ? t : "", t && (u.context = t.nodeType ? t : r || document)), u
    }, e.fn.init.prototype = e.fn, e.parseJSON = function(e) {
        return e ? g.apply(this, arguments) : (i("jQuery.parseJSON requires a valid JSON string"), null)
    }, e.uaMatch = function(e) {
        e = e.toLowerCase();
        var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
        return {
            browser: t[1] || "",
            version: t[2] || "0"
        }
    }, e.browser || (d = e.uaMatch(navigator.userAgent), v = {}, d.browser && (v[d.browser] = !0, v.version = d.version), v.chrome ? v.webkit = !0 : v.webkit && (v.safari = !0), e.browser = v), s(e, "browser", e.browser, "jQuery.browser is deprecated"), e.boxModel = e.support.boxModel = document.compatMode === "CSS1Compat", s(e, "boxModel", e.boxModel, "jQuery.boxModel is deprecated"), s(e.support, "boxModel", e.support.boxModel, "jQuery.support.boxModel is deprecated"), e.sub = function() {
        function t(e, n) {
            return new t.fn.init(e, n)
        }
        e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(i, s) {
            var o = e.fn.init.call(this, i, s, n);
            return o instanceof t ? o : t(o)
        }, t.fn.init.prototype = t.fn;
        var n = t(document);
        return i("jQuery.sub() is deprecated"), t
    }, e.fn.size = function() {
        return i("jQuery.fn.size() is deprecated; use the .length property"), this.length
    };
    var E = !1;
    e.swap && e.each(["height", "width", "reliableMarginRight"], function(t, n) {
        var r = e.cssHooks[n] && e.cssHooks[n].get;
        r && (e.cssHooks[n].get = function() {
            var e;
            return E = !0, e = r.apply(this, arguments), E = !1, e
        })
    }), e.swap = function(e, t, n, r) {
        var s, o, u = {};
        E || i("jQuery.swap() is undocumented and deprecated");
        for (o in t) u[o] = e.style[o], e.style[o] = t[o];
        s = n.apply(e, r || []);
        for (o in t) e.style[o] = u[o];
        return s
    }, e.ajaxSetup({
        converters: {
            "text json": e.parseJSON
        }
    });
    var S = e.fn.data;
    e.fn.data = function(t) {
        var r, s, o = this[0];
        if (o && t === "events" && arguments.length === 1) {
            r = e.data(o, t), s = e._data(o, t);
            if ((r === n || r === s) && s !== n) return i("Use of jQuery.fn.data('events') is deprecated"), s
        }
        return S.apply(this, arguments)
    };
    var x = /\/(java|ecma)script/i;
    e.clean || (e.clean = function(t, n, r, s) {
        n = n || document, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, i("jQuery.clean() is deprecated");
        var o, u, a, f, l = [];
        e.merge(l, e.buildFragment(t, n).childNodes);
        if (r) {
            a = function(e) {
                if (!e.type || x.test(e.type)) return s ? s.push(e.parentNode ? e.parentNode.removeChild(e) : e) : r.appendChild(e)
            };
            for (o = 0;
                (u = l[o]) != null; o++)
                if (!e.nodeName(u, "script") || !a(u)) r.appendChild(u), typeof u.getElementsByTagName != "undefined" && (f = e.grep(e.merge([], u.getElementsByTagName("script")), a), l.splice.apply(l, [o + 1, 0].concat(f)), o += f.length)
        }
        return l
    });
    var T = e.event.add,
        N = e.event.remove,
        C = e.event.trigger,
        k = e.fn.toggle,
        L = e.fn.live,
        A = e.fn.die,
        O = e.fn.load,
        M = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
        _ = new RegExp("\\b(?:" + M + ")\\b"),
        D = /(?:^|\s)hover(\.\S+|)\b/,
        P = function(t) {
            return typeof t != "string" || e.event.special.hover ? t : (D.test(t) && i("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(D, "mouseenter$1 mouseleave$1"))
        };
    e.event.props && e.event.props[0] !== "attrChange" && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && s(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function(e, t, n, r, s) {
        e !== document && _.test(t) && i("AJAX events should be attached to document: " + t), T.call(this, e, P(t || ""), n, r, s)
    }, e.event.remove = function(e, t, n, r, i) {
        N.call(this, e, P(t) || "", n, r, i)
    }, e.each(["load", "unload", "error"], function(t, n) {
        e.fn[n] = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return n === "load" && typeof e[0] == "string" ? O.apply(this, e) : (i("jQuery.fn." + n + "() is deprecated"), e.splice(0, 0, n), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this))
        }
    }), e.fn.toggle = function(t, n) {
        if (!e.isFunction(t) || !e.isFunction(n)) return k.apply(this, arguments);
        i("jQuery.fn.toggle(handler, handler...) is deprecated");
        var r = arguments,
            s = t.guid || e.guid++,
            o = 0,
            u = function(n) {
                var i = (e._data(this, "lastToggle" + t.guid) || 0) % o;
                return e._data(this, "lastToggle" + t.guid, i + 1), n.preventDefault(), r[i].apply(this, arguments) || !1
            };
        u.guid = s;
        while (o < r.length) r[o++].guid = s;
        return this.click(u)
    }, e.fn.live = function(t, n, r) {
        return i("jQuery.fn.live() is deprecated"), L ? L.apply(this, arguments) : (e(this.context).on(t, this.selector, n, r), this)
    }, e.fn.die = function(t, n) {
        return i("jQuery.fn.die() is deprecated"), A ? A.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
    }, e.event.trigger = function(e, t, n, r) {
        return !n && !_.test(e) && i("Global events are undocumented and deprecated"), C.call(this, e, t, n || document, r)
    }, e.each(M.split("|"), function(t, n) {
        e.event.special[n] = {
            setup: function() {
                var t = this;
                return t !== document && (e.event.add(document, n + "." + e.guid, function() {
                    e.event.trigger(n, Array.prototype.slice.call(arguments, 1), t, !0)
                }), e._data(this, n, e.guid++)), !1
            },
            teardown: function() {
                return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1
            }
        }
    }), e.event.special.ready = {
        setup: function() {
            this === document && i("'ready' event is deprecated")
        }
    };
    var H = e.fn.andSelf || e.fn.addBack,
        B = e.fn.find;
    e.fn.andSelf = function() {
        return i("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), H.apply(this, arguments)
    }, e.fn.find = function(e) {
        var t = B.apply(this, arguments);
        return t.context = this.context, t.selector = this.selector ? this.selector + " " + e : e, t
    };
    if (e.Callbacks) {
        var j = e.Deferred,
            F = [
                ["resolve", "done", e.Callbacks("once memory"), e.Callbacks("once memory"), "resolved"],
                ["reject", "fail", e.Callbacks("once memory"), e.Callbacks("once memory"), "rejected"],
                ["notify", "progress", e.Callbacks("memory"), e.Callbacks("memory")]
            ];
        e.Deferred = function(t) {
            var n = j(),
                r = n.promise();
            return n.pipe = r.pipe = function() {
                var t = arguments;
                return i("deferred.pipe() is deprecated"), e.Deferred(function(i) {
                    e.each(F, function(s, o) {
                        var u = e.isFunction(t[s]) && t[s];
                        n[o[1]](function() {
                            var t = u && u.apply(this, arguments);
                            t && e.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === r ? i.promise() : this, u ? [t] : arguments)
                        })
                    }), t = null
                }).promise()
            }, n.isResolved = function() {
                return i("deferred.isResolved is deprecated"), n.state() === "resolved"
            }, n.isRejected = function() {
                return i("deferred.isRejected is deprecated"), n.state() === "rejected"
            }, t && t.call(n, n), n
        }
    }
}(jQuery, window),
function(e, t) {
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var n;
    e.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        buttonClickSelector: "button[data-remote]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function(t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        fire: function(t, n, r) {
            var i = e.Event(n);
            return t.trigger(i, r), i.result !== !1
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(t) {
            return e.ajax(t)
        },
        href: function(e) {
            return e.attr("href")
        },
        handleRemote: function(r) {
            var i, s, o, u, a, f, l, c;
            if (n.fire(r, "ajax:before")) {
                u = r.data("cross-domain"), a = u === t ? null : u, f = r.data("with-credentials") || null, l = r.data("type") || e.ajaxSettings && e.ajaxSettings.dataType;
                if (r.is("form")) {
                    i = r.attr("method"), s = r.attr("action"), o = r.serializeArray();
                    var h = r.data("ujs:submit-button");
                    h && (o.push(h), r.data("ujs:submit-button", null))
                } else r.is(n.inputChangeSelector) ? (i = r.data("method"), s = r.data("url"), o = r.serialize(), r.data("params") && (o = o + "&" + r.data("params"))) : r.is(n.buttonClickSelector) ? (i = r.data("method") || "get", s = r.data("url"), o = r.serialize(), r.data("params") && (o = o + "&" + r.data("params"))) : (i = r.data("method"), s = n.href(r), o = r.data("params") || null);
                c = {
                    type: i || "GET",
                    data: o,
                    dataType: l,
                    beforeSend: function(e, i) {
                        return i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script), n.fire(r, "ajax:beforeSend", [e, i])
                    },
                    success: function(e, t, n) {
                        r.trigger("ajax:success", [e, t, n])
                    },
                    complete: function(e, t) {
                        r.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, n) {
                        r.trigger("ajax:error", [e, t, n])
                    },
                    crossDomain: a
                }, f && (c.xhrFields = {
                    withCredentials: f
                }), s && (c.url = s);
                var p = n.ajax(c);
                return r.trigger("ajax:send", p), p
            }
            return !1
        },
        handleMethod: function(r) {
            var i = n.href(r),
                s = r.data("method"),
                o = r.attr("target"),
                u = e("meta[name=csrf-token]").attr("content"),
                a = e("meta[name=csrf-param]").attr("content"),
                f = e('<form method="post" action="' + i + '"></form>'),
                l = '<input name="_method" value="' + s + '" type="hidden" />';
            a !== t && u !== t && (l += '<input name="' + a + '" value="' + u + '" type="hidden" />'), o && f.attr("target", o), f.hide().append(l).appendTo("body"), f.submit()
        },
        disableFormElements: function(t) {
            t.find(n.disableSelector).each(function() {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with", t[n]()), t[n](t.data("disable-with")), t.prop("disabled", !0)
            })
        },
        enableFormElements: function(t) {
            t.find(n.enableSelector).each(function() {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")), t.prop("disabled", !1)
            })
        },
        allowAction: function(e) {
            var t = e.data("confirm"),
                r = !1,
                i;
            return t ? (n.fire(e, "confirm") && (r = n.confirm(t), i = n.fire(e, "confirm:complete", [r])), r && i) : !0
        },
        blankInputs: function(t, n, r) {
            var i = e(),
                s, o, u = n || "input,textarea",
                a = t.find(u);
            return a.each(function() {
                s = e(this), o = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : s.val();
                if (!o == !r) {
                    if (s.is("input[type=radio]") && a.filter('input[type=radio]:checked[name="' + s.attr("name") + '"]').length) return !0;
                    i = i.add(s)
                }
            }), i.length ? i : !1
        },
        nonBlankInputs: function(e, t) {
            return n.blankInputs(e, t, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        disableElement: function(e) {
            e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function(e) {
                return n.stopEverything(e)
            })
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable")
        }
    }, n.fire(e(document), "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, r) {
        e.crossDomain || n.CSRFProtection(r)
    }), e(document).delegate(n.linkDisableSelector, "ajax:complete", function() {
        n.enableElement(e(this))
    }), e(document).delegate(n.linkClickSelector, "click.rails", function(r) {
        var i = e(this),
            s = i.data("method"),
            o = i.data("params");
        if (!n.allowAction(i)) return n.stopEverything(r);
        i.is(n.linkDisableSelector) && n.disableElement(i);
        if (i.data("remote") !== t) {
            if ((r.metaKey || r.ctrlKey) && (!s || s === "GET") && !o) return !0;
            var u = n.handleRemote(i);
            return u === !1 ? n.enableElement(i) : u.error(function() {
                n.enableElement(i)
            }), !1
        }
        if (i.data("method")) return n.handleMethod(i), !1
    }), e(document).delegate(n.buttonClickSelector, "click.rails", function(t) {
        var r = e(this);
        return n.allowAction(r) ? (n.handleRemote(r), !1) : n.stopEverything(t)
    }), e(document).delegate(n.inputChangeSelector, "change.rails", function(t) {
        var r = e(this);
        return n.allowAction(r) ? (n.handleRemote(r), !1) : n.stopEverything(t)
    }), e(document).delegate(n.formSubmitSelector, "submit.rails", function(r) {
        var i = e(this),
            s = i.data("remote") !== t,
            o = n.blankInputs(i, n.requiredInputSelector),
            u = n.nonBlankInputs(i, n.fileInputSelector);
        if (!n.allowAction(i)) return n.stopEverything(r);
        if (o && i.attr("novalidate") == t && n.fire(i, "ajax:aborted:required", [o])) return n.stopEverything(r);
        if (s) {
            if (u) {
                setTimeout(function() {
                    n.disableFormElements(i)
                }, 13);
                var a = n.fire(i, "ajax:aborted:file", [u]);
                return a || setTimeout(function() {
                    n.enableFormElements(i)
                }, 13), a
            }
            return n.handleRemote(i), !1
        }
        setTimeout(function() {
            n.disableFormElements(i)
        }, 13)
    }), e(document).delegate(n.formInputClickSelector, "click.rails", function(t) {
        var r = e(this);
        if (!n.allowAction(r)) return n.stopEverything(t);
        var i = r.attr("name"),
            s = i ? {
                name: i,
                value: r.val()
            } : null;
        r.closest("form").data("ujs:submit-button", s)
    }), e(document).delegate(n.formSubmitSelector, "ajax:beforeSend.rails", function(t) {
        this == t.target && n.disableFormElements(e(this))
    }), e(document).delegate(n.formSubmitSelector, "ajax:complete.rails", function(t) {
        this == t.target && n.enableFormElements(e(this))
    }), e(function() {
        var t = e("meta[name=csrf-token]").attr("content"),
            n = e("meta[name=csrf-param]").attr("content");
        e('form input[name="' + n + '"]').val(t)
    }))
}(jQuery),
function(e) {
    typeof define == "function" ? define(e) : typeof YUI == "function" ? YUI.add("es5", e) : e()
}(function() {
    function e() {}

    function A(e) {
        return e = +e, e !== e ? e = 0 : e !== 0 && e !== 1 / 0 && e !== -1 / 0 && (e = (e > 0 || -1) * Math.floor(Math.abs(e))), e
    }

    function O(e) {
        var t = typeof e;
        return e === null || t === "undefined" || t === "boolean" || t === "number" || t === "string"
    }

    function M(e) {
        var t, n, r;
        if (O(e)) return e;
        n = e.valueOf;
        if (typeof n == "function") {
            t = n.call(e);
            if (O(t)) return t
        }
        r = e.toString;
        if (typeof r == "function") {
            t = r.call(e);
            if (O(t)) return t
        }
        throw new TypeError
    }
    Function.prototype.bind || (Function.prototype.bind = function(n) {
        var r = this;
        if (typeof r != "function") throw new TypeError("Function.prototype.bind called on incompatible " + r);
        var s = i.call(arguments, 1),
            o = function() {
                if (this instanceof o) {
                    var e = r.apply(this, s.concat(i.call(arguments)));
                    return Object(e) === e ? e : this
                }
                return r.apply(n, s.concat(i.call(arguments)))
            };
        return r.prototype && (e.prototype = r.prototype, o.prototype = new e, e.prototype = null), o
    });
    var t = Function.prototype.call,
        n = Array.prototype,
        r = Object.prototype,
        i = n.slice,
        s = t.bind(r.toString),
        o = t.bind(r.hasOwnProperty),
        u, a, f, l, c;
    if (c = o(r, "__defineGetter__")) u = t.bind(r.__defineGetter__), a = t.bind(r.__defineSetter__), f = t.bind(r.__lookupGetter__), l = t.bind(r.__lookupSetter__);
    if ([1, 2].splice(0).length != 2) {
        var h = Array.prototype.splice;
        Array.prototype.splice = function(e, t) {
            return arguments.length ? h.apply(this, [e === void 0 ? 0 : e, t === void 0 ? this.length - e : t].concat(i.call(arguments, 2))) : []
        }
    }
    if ([].unshift(0) != 1) {
        var p = Array.prototype.unshift;
        Array.prototype.unshift = function() {
            return p.apply(this, arguments), this.length
        }
    }
    Array.isArray || (Array.isArray = function(t) {
        return s(t) == "[object Array]"
    });
    var d = Object("a"),
        v = d[0] != "a" || !(0 in d);
    Array.prototype.forEach || (Array.prototype.forEach = function(t) {
        var n = _(this),
            r = v && s(this) == "[object String]" ? this.split("") : n,
            i = arguments[1],
            o = -1,
            u = r.length >>> 0;
        if (s(t) != "[object Function]") throw new TypeError;
        while (++o < u) o in r && t.call(i, r[o], o, n)
    }), Array.prototype.map || (Array.prototype.map = function(t) {
        var n = _(this),
            r = v && s(this) == "[object String]" ? this.split("") : n,
            i = r.length >>> 0,
            o = Array(i),
            u = arguments[1];
        if (s(t) != "[object Function]") throw new TypeError(t + " is not a function");
        for (var a = 0; a < i; a++) a in r && (o[a] = t.call(u, r[a], a, n));
        return o
    }), Array.prototype.filter || (Array.prototype.filter = function(t) {
        var n = _(this),
            r = v && s(this) == "[object String]" ? this.split("") : n,
            i = r.length >>> 0,
            o = [],
            u, a = arguments[1];
        if (s(t) != "[object Function]") throw new TypeError(t + " is not a function");
        for (var f = 0; f < i; f++) f in r && (u = r[f], t.call(a, u, f, n) && o.push(u));
        return o
    }), Array.prototype.every || (Array.prototype.every = function(t) {
        var n = _(this),
            r = v && s(this) == "[object String]" ? this.split("") : n,
            i = r.length >>> 0,
            o = arguments[1];
        if (s(t) != "[object Function]") throw new TypeError(t + " is not a function");
        for (var u = 0; u < i; u++)
            if (u in r && !t.call(o, r[u], u, n)) return !1;
        return !0
    }), Array.prototype.some || (Array.prototype.some = function(t) {
        var n = _(this),
            r = v && s(this) == "[object String]" ? this.split("") : n,
            i = r.length >>> 0,
            o = arguments[1];
        if (s(t) != "[object Function]") throw new TypeError(t + " is not a function");
        for (var u = 0; u < i; u++)
            if (u in r && t.call(o, r[u], u, n)) return !0;
        return !1
    }), Array.prototype.reduce || (Array.prototype.reduce = function(t) {
        var n = _(this),
            r = v && s(this) == "[object String]" ? this.split("") : n,
            i = r.length >>> 0;
        if (s(t) != "[object Function]") throw new TypeError(t + " is not a function");
        if (!i && arguments.length == 1) throw new TypeError("reduce of empty array with no initial value");
        var o = 0,
            u;
        if (arguments.length >= 2) u = arguments[1];
        else
            do {
                if (o in r) {
                    u = r[o++];
                    break
                }
                if (++o >= i) throw new TypeError("reduce of empty array with no initial value")
            } while (!0);
        for (; o < i; o++) o in r && (u = t.call(void 0, u, r[o], o, n));
        return u
    }), Array.prototype.reduceRight || (Array.prototype.reduceRight = function(t) {
        var n = _(this),
            r = v && s(this) == "[object String]" ? this.split("") : n,
            i = r.length >>> 0;
        if (s(t) != "[object Function]") throw new TypeError(t + " is not a function");
        if (!i && arguments.length == 1) throw new TypeError("reduceRight of empty array with no initial value");
        var o, u = i - 1;
        if (arguments.length >= 2) o = arguments[1];
        else
            do {
                if (u in r) {
                    o = r[u--];
                    break
                }
                if (--u < 0) throw new TypeError("reduceRight of empty array with no initial value")
            } while (!0);
        do u in this && (o = t.call(void 0, o, r[u], u, n)); while (u--);
        return o
    });
    if (!Array.prototype.indexOf || [0, 1].indexOf(1, 2) != -1) Array.prototype.indexOf = function(t) {
        var n = v && s(this) == "[object String]" ? this.split("") : _(this),
            r = n.length >>> 0;
        if (!r) return -1;
        var i = 0;
        arguments.length > 1 && (i = A(arguments[1])), i = i >= 0 ? i : Math.max(0, r + i);
        for (; i < r; i++)
            if (i in n && n[i] === t) return i;
        return -1
    };
    if (!Array.prototype.lastIndexOf || [0, 1].lastIndexOf(0, -3) != -1) Array.prototype.lastIndexOf = function(t) {
        var n = v && s(this) == "[object String]" ? this.split("") : _(this),
            r = n.length >>> 0;
        if (!r) return -1;
        var i = r - 1;
        arguments.length > 1 && (i = Math.min(i, A(arguments[1]))), i = i >= 0 ? i : r - Math.abs(i);
        for (; i >= 0; i--)
            if (i in n && t === n[i]) return i;
        return -1
    };
    if (!Object.keys) {
        var m = !0,
            g = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
            y = g.length;
        for (var b in {
                toString: null
            }) m = !1;
        Object.keys = function D(e) {
            if (typeof e != "object" && typeof e != "function" || e === null) throw new TypeError("Object.keys called on a non-object");
            var D = [];
            for (var t in e) o(e, t) && D.push(t);
            if (m)
                for (var n = 0, r = y; n < r; n++) {
                    var i = g[n];
                    o(e, i) && D.push(i)
                }
            return D
        }
    }
    var w = -621987552e5,
        E = "-000001";
    if (!Date.prototype.toISOString || (new Date(w)).toISOString().indexOf(E) === -1) Date.prototype.toISOString = function() {
        var t, n, r, i, s;
        if (!isFinite(this)) throw new RangeError("Date.prototype.toISOString called on non-finite value.");
        i = this.getUTCFullYear(), s = this.getUTCMonth(), i += Math.floor(s / 12), s = (s % 12 + 12) % 12, t = [s + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()], i = (i < 0 ? "-" : i > 9999 ? "+" : "") + ("00000" + Math.abs(i)).slice(0 <= i && i <= 9999 ? -4 : -6), n = t.length;
        while (n--) r = t[n], r < 10 && (t[n] = "0" + r);
        return i + "-" + t.slice(0, 2).join("-") + "T" + t.slice(2).join(":") + "." + ("000" + this.getUTCMilliseconds()).slice(-3) + "Z"
    };
    var S = !1;
    try {
        S = Date.prototype.toJSON && (new Date(NaN)).toJSON() === null && (new Date(w)).toJSON().indexOf(E) !== -1 && Date.prototype.toJSON.call({
            toISOString: function() {
                return !0
            }
        })
    } catch (x) {}
    S || (Date.prototype.toJSON = function(t) {
        var n = Object(this),
            r = M(n),
            i;
        if (typeof r == "number" && !isFinite(r)) return null;
        i = n.toISOString;
        if (typeof i != "function") throw new TypeError("toISOString property is not callable");
        return i.call(n)
    });
    if (!Date.parse || "Date.parse is buggy") Date = function(e) {
        function t(n, r, i, s, o, u, a) {
            var f = arguments.length;
            if (this instanceof e) {
                var l = f == 1 && String(n) === n ? new e(t.parse(n)) : f >= 7 ? new e(n, r, i, s, o, u, a) : f >= 6 ? new e(n, r, i, s, o, u) : f >= 5 ? new e(n, r, i, s, o) : f >= 4 ? new e(n, r, i, s) : f >= 3 ? new e(n, r, i) : f >= 2 ? new e(n, r) : f >= 1 ? new e(n) : new e;
                return l.constructor = t, l
            }
            return e.apply(this, arguments)
        }

        function i(e, t) {
            var n = t > 1 ? 1 : 0;
            return r[t] + Math.floor((e - 1969 + n) / 4) - Math.floor((e - 1901 + n) / 100) + Math.floor((e - 1601 + n) / 400) + 365 * (e - 1970)
        }
        var n = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:\\.(\\d{3}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),
            r = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
        for (var s in e) t[s] = e[s];
        return t.now = e.now, t.UTC = e.UTC, t.prototype = e.prototype, t.prototype.constructor = t, t.parse = function(r) {
            var s = n.exec(r);
            if (s) {
                var o = Number(s[1]),
                    u = Number(s[2] || 1) - 1,
                    a = Number(s[3] || 1) - 1,
                    f = Number(s[4] || 0),
                    l = Number(s[5] || 0),
                    c = Number(s[6] || 0),
                    h = Number(s[7] || 0),
                    p = !s[4] || s[8] ? 0 : Number(new e(1970, 0)),
                    d = s[9] === "-" ? 1 : -1,
                    v = Number(s[10] || 0),
                    m = Number(s[11] || 0),
                    g;
                if (f < (l > 0 || c > 0 || h > 0 ? 24 : 25) && l < 60 && c < 60 && h < 1e3 && u > -1 && u < 12 && v < 24 && m < 60 && a > -1 && a < i(o, u + 1) - i(o, u)) {
                    g = ((i(o, u) + a) * 24 + f + v * d) * 60, g = ((g + l + m * d) * 60 + c) * 1e3 + h + p;
                    if (-864e13 <= g && g <= 864e13) return g
                }
                return NaN
            }
            return e.parse.apply(this, arguments)
        }, t
    }(Date);
    Date.now || (Date.now = function() {
        return (new Date).getTime()
    });
    if ("0".split(void 0, 0).length) {
        var T = String.prototype.split;
        String.prototype.split = function(e, t) {
            return e === void 0 && t === 0 ? [] : T.apply(this, arguments)
        }
    }
    if ("".substr && "0b".substr(-1) !== "b") {
        var N = String.prototype.substr;
        String.prototype.substr = function(e, t) {
            return N.call(this, e < 0 ? (e = this.length + e) < 0 ? 0 : e : e, t)
        }
    }
    var C = "	\n\f\r   ᠎             　\u2028\u2029﻿";
    if (!String.prototype.trim || C.trim()) {
        C = "[" + C + "]";
        var k = new RegExp("^" + C + C + "*"),
            L = new RegExp(C + C + "*$");
        String.prototype.trim = function() {
            if (this === undefined || this === null) throw new TypeError("can't convert " + this + " to object");
            return String(this).replace(k, "").replace(L, "")
        }
    }
    var _ = function(e) {
        if (e == null) throw new TypeError("can't convert " + e + " to object");
        return Object(e)
    }
}),
function(e, t) {
    "use strict";
    typeof define == "function" && define.amd ? define(t) : typeof exports == "object" ? module.exports = t() : e.returnExports = t()
}(this, function() {
    function a(e) {
        try {
            return e.sentinel = 0, Object.getOwnPropertyDescriptor(e, "sentinel").value === 0
        } catch (t) {}
    }

    function v(e) {
        try {
            return Object.defineProperty(e, "sentinel", {}), "sentinel" in e
        } catch (t) {}
    }
    var e = Function.prototype.call,
        t = Object.prototype,
        n = e.bind(t.hasOwnProperty),
        r, i, s, o, u = n(t, "__defineGetter__");
    u && (r = e.bind(t.__defineGetter__), i = e.bind(t.__defineSetter__), s = e.bind(t.__lookupGetter__), o = e.bind(t.__lookupSetter__)), Object.getPrototypeOf || (Object.getPrototypeOf = function(n) {
        var r = n.__proto__;
        return r || r === null ? r : n.constructor ? n.constructor.prototype : t
    });
    if (Object.defineProperty) {
        var f = a({}),
            l = typeof document == "undefined" || a(document.createElement("div"));
        if (!l || !f) var c = Object.getOwnPropertyDescriptor
    }
    if (!Object.getOwnPropertyDescriptor || c) {
        var h = "Object.getOwnPropertyDescriptor called on a non-object: ";
        Object.getOwnPropertyDescriptor = function(r, i) {
            if (typeof r != "object" && typeof r != "function" || r === null) throw new TypeError(h + r);
            if (c) try {
                return c.call(Object, r, i)
            } catch (a) {}
            var f;
            if (!n(r, i)) return f;
            f = {
                enumerable: !0,
                configurable: !0
            };
            if (u) {
                var l = r.__proto__,
                    p = r !== t;
                p && (r.__proto__ = t);
                var d = s(r, i),
                    v = o(r, i);
                p && (r.__proto__ = l);
                if (d || v) return d && (f.get = d), v && (f.set = v), f
            }
            return f.value = r[i], f.writable = !0, f
        }
    }
    Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function(t) {
        return Object.keys(t)
    });
    if (!Object.create) {
        var p, d = !({
                __proto__: null
            }
            instanceof Object);
        d || typeof document == "undefined" ? p = function() {
            return {
                __proto__: null
            }
        } : p = function() {
            function r() {}
            var e = document.createElement("iframe"),
                t = document.body || document.documentElement;
            e.style.display = "none", t.appendChild(e), e.src = "javascript:";
            var n = e.contentWindow.Object.prototype;
            return t.removeChild(e), e = null, delete n.constructor, delete n.hasOwnProperty, delete n.propertyIsEnumerable, delete n.isPrototypeOf, delete n.toLocaleString, delete n.toString, delete n.valueOf, n.__proto__ = null, r.prototype = n, p = function() {
                return new r
            }, new r
        }, Object.create = function(t, n) {
            function i() {}
            var r;
            if (t === null) r = p();
            else {
                if (typeof t != "object" && typeof t != "function") throw new TypeError("Object prototype may only be an Object or null");
                i.prototype = t, r = new i, r.__proto__ = t
            }
            return n !== void 0 && Object.defineProperties(r, n), r
        }
    }
    if (Object.defineProperty) {
        var m = v({}),
            g = typeof document == "undefined" || v(document.createElement("div"));
        if (!m || !g) var y = Object.defineProperty,
            b = Object.defineProperties
    }
    if (!Object.defineProperty || y) {
        var w = "Property description must be an object: ",
            E = "Object.defineProperty called on non-object: ",
            S = "getters & setters can not be defined on this javascript engine";
        Object.defineProperty = function(n, a, f) {
            if (typeof n != "object" && typeof n != "function" || n === null) throw new TypeError(E + n);
            if (typeof f != "object" && typeof f != "function" || f === null) throw new TypeError(w + f);
            if (y) try {
                return y.call(Object, n, a, f)
            } catch (l) {}
            if ("value" in f)
                if (u && (s(n, a) || o(n, a))) {
                    var c = n.__proto__;
                    n.__proto__ = t, delete n[a], n[a] = f.value, n.__proto__ = c
                } else n[a] = f.value;
            else {
                if (!u) throw new TypeError(S);
                "get" in f && r(n, a, f.get), "set" in f && i(n, a, f.set)
            }
            return n
        }
    }
    if (!Object.defineProperties || b) Object.defineProperties = function(t, r) {
        if (b) try {
            return b.call(Object, t, r)
        } catch (i) {}
        for (var s in r) n(r, s) && s !== "__proto__" && Object.defineProperty(t, s, r[s]);
        return t
    };
    Object.seal || (Object.seal = function(t) {
        if (Object(t) !== t) throw new TypeError("Object.seal can only be called on Objects.");
        return t
    }), Object.freeze || (Object.freeze = function(t) {
        if (Object(t) !== t) throw new TypeError("Object.freeze can only be called on Objects.");
        return t
    });
    try {
        Object.freeze(function() {})
    } catch (x) {
        Object.freeze = function(t) {
            return function(n) {
                return typeof n == "function" ? n : t(n)
            }
        }(Object.freeze)
    }
    Object.preventExtensions || (Object.preventExtensions = function(t) {
        if (Object(t) !== t) throw new TypeError("Object.preventExtensions can only be called on Objects.");
        return t
    }), Object.isSealed || (Object.isSealed = function(t) {
        if (Object(t) !== t) throw new TypeError("Object.isSealed can only be called on Objects.");
        return !1
    }), Object.isFrozen || (Object.isFrozen = function(t) {
        if (Object(t) !== t) throw new TypeError("Object.isFrozen can only be called on Objects.");
        return !1
    }), Object.isExtensible || (Object.isExtensible = function(t) {
        if (Object(t) !== t) throw new TypeError("Object.isExtensible can only be called on Objects.");
        var r = "";
        while (n(t, r)) r += "?";
        t[r] = !0;
        var i = n(t, r);
        return delete t[r], i
    })
}), Object.create(null), ! function(e, t) {
        var n = function() {
                return n.get.apply(n, arguments)
            },
            r = n.utils = {
                isArray: Array.isArray || function(e) {
                    return Object.prototype.toString.call(e) === "[object Array]"
                },
                isPlainObject: function(e) {
                    return !!e && Object.prototype.toString.call(e) === "[object Object]"
                },
                toArray: function(e) {
                    return Array.prototype.slice.call(e)
                },
                getKeys: Object.keys || function(e) {
                    var t = [],
                        n = "";
                    for (n in e) e.hasOwnProperty(n) && t.push(n);
                    return t
                },
                escape: function(e) {
                    return String(e).replace(/[,;"\\=\s%]/g, function(e) {
                        return encodeURIComponent(e)
                    })
                },
                retrieve: function(e, t) {
                    return e == null ? t : e
                }
            };
        n.defaults = {}, n.expiresMultiplier = 86400, n.set = function(n, i, s) {
            if (r.isPlainObject(n))
                for (var o in n) n.hasOwnProperty(o) && this.set(o, n[o], i);
            else {
                s = r.isPlainObject(s) ? s : {
                    expires: s
                };
                var u = s.expires !== t ? s.expires : this.defaults.expires || "",
                    a = typeof u;
                a === "string" && u !== "" ? u = new Date(u) : a === "number" && (u = new Date(+(new Date) + 1e3 * this.expiresMultiplier * u)), u !== "" && "toGMTString" in u && (u = ";expires=" + u.toGMTString());
                var f = s.path || this.defaults.path;
                f = f ? ";path=" + f : "";
                var l = s.domain || this.defaults.domain;
                l = l ? ";domain=" + l : "";
                var c = s.secure || this.defaults.secure ? ";secure" : "";
                e.cookie = r.escape(n) + "=" + r.escape(i) + u + f + l + c
            }
            return this
        }, n.remove = function(e) {
            e = r.isArray(e) ? e : r.toArray(arguments);
            for (var t = 0, n = e.length; t < n; t++) this.set(e[t], "", -1);
            return this
        }, n.empty = function() {
            return this.remove(r.getKeys(this.all()))
        }, n.get = function(e, n) {
            n = n || t;
            var i = this.all();
            if (r.isArray(e)) {
                var s = {};
                for (var o = 0, u = e.length; o < u; o++) {
                    var a = e[o];
                    s[a] = r.retrieve(i[a], n)
                }
                return s
            }
            return r.retrieve(i[e], n)
        }, n.all = function() {
            if (e.cookie === "") return {};
            var t = e.cookie.split("; "),
                n = {};
            for (var r = 0, i = t.length; r < i; r++) {
                var s = t[r].split("=");
                n[decodeURIComponent(s[0])] = decodeURIComponent(s[1])
            }
            return n
        }, n.enabled = function() {
            if (navigator.cookieEnabled) return !0;
            var e = n.set("_", "_").get("_") === "_";
            return n.remove("_"), e
        }, typeof define == "function" && define.amd ? define(function() {
            return n
        }) : typeof exports != "undefined" ? exports.cookie = n : window.cookie = n
    }(document),
    function() {
        var e = this,
            t = e._,
            n = {},
            r = Array.prototype,
            i = Object.prototype,
            s = Function.prototype,
            o = r.push,
            u = r.slice,
            a = r.concat,
            f = i.toString,
            l = i.hasOwnProperty,
            c = r.forEach,
            h = r.map,
            p = r.reduce,
            d = r.reduceRight,
            v = r.filter,
            m = r.every,
            g = r.some,
            y = r.indexOf,
            b = r.lastIndexOf,
            w = Array.isArray,
            E = Object.keys,
            S = s.bind,
            x = function(e) {
                if (e instanceof x) return e;
                if (!(this instanceof x)) return new x(e);
                this._wrapped = e
            };
        typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.4.4";
        var T = x.each = x.forEach = function(e, t, r) {
            if (e == null) return;
            if (c && e.forEach === c) e.forEach(t, r);
            else if (e.length === +e.length) {
                for (var i = 0, s = e.length; i < s; i++)
                    if (t.call(r, e[i], i, e) === n) return
            } else
                for (var o in e)
                    if (x.has(e, o) && t.call(r, e[o], o, e) === n) return
        };
        x.map = x.collect = function(e, t, n) {
            var r = [];
            return e == null ? r : h && e.map === h ? e.map(t, n) : (T(e, function(e, i, s) {
                r[r.length] = t.call(n, e, i, s)
            }), r)
        };
        var N = "Reduce of empty array with no initial value";
        x.reduce = x.foldl = x.inject = function(e, t, n, r) {
            var i = arguments.length > 2;
            e == null && (e = []);
            if (p && e.reduce === p) return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
            T(e, function(e, s, o) {
                i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
            });
            if (!i) throw new TypeError(N);
            return n
        }, x.reduceRight = x.foldr = function(e, t, n, r) {
            var i = arguments.length > 2;
            e == null && (e = []);
            if (d && e.reduceRight === d) return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
            var s = e.length;
            if (s !== +s) {
                var o = x.keys(e);
                s = o.length
            }
            T(e, function(u, a, f) {
                a = o ? o[--s] : --s, i ? n = t.call(r, n, e[a], a, f) : (n = e[a], i = !0)
            });
            if (!i) throw new TypeError(N);
            return n
        }, x.find = x.detect = function(e, t, n) {
            var r;
            return C(e, function(e, i, s) {
                if (t.call(n, e, i, s)) return r = e, !0
            }), r
        }, x.filter = x.select = function(e, t, n) {
            var r = [];
            return e == null ? r : v && e.filter === v ? e.filter(t, n) : (T(e, function(e, i, s) {
                t.call(n, e, i, s) && (r[r.length] = e)
            }), r)
        }, x.reject = function(e, t, n) {
            return x.filter(e, function(e, r, i) {
                return !t.call(n, e, r, i)
            }, n)
        }, x.every = x.all = function(e, t, r) {
            t || (t = x.identity);
            var i = !0;
            return e == null ? i : m && e.every === m ? e.every(t, r) : (T(e, function(e, s, o) {
                if (!(i = i && t.call(r, e, s, o))) return n
            }), !!i)
        };
        var C = x.some = x.any = function(e, t, r) {
            t || (t = x.identity);
            var i = !1;
            return e == null ? i : g && e.some === g ? e.some(t, r) : (T(e, function(e, s, o) {
                if (i || (i = t.call(r, e, s, o))) return n
            }), !!i)
        };
        x.contains = x.include = function(e, t) {
            return e == null ? !1 : y && e.indexOf === y ? e.indexOf(t) != -1 : C(e, function(e) {
                return e === t
            })
        }, x.invoke = function(e, t) {
            var n = u.call(arguments, 2),
                r = x.isFunction(t);
            return x.map(e, function(e) {
                return (r ? t : e[t]).apply(e, n)
            })
        }, x.pluck = function(e, t) {
            return x.map(e, function(e) {
                return e[t]
            })
        }, x.where = function(e, t, n) {
            return x.isEmpty(t) ? n ? null : [] : x[n ? "find" : "filter"](e, function(e) {
                for (var n in t)
                    if (t[n] !== e[n]) return !1;
                return !0
            })
        }, x.findWhere = function(e, t) {
            return x.where(e, t, !0)
        }, x.max = function(e, t, n) {
            if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
            if (!t && x.isEmpty(e)) return -Infinity;
            var r = {
                computed: -Infinity,
                value: -Infinity
            };
            return T(e, function(e, i, s) {
                var o = t ? t.call(n, e, i, s) : e;
                o >= r.computed && (r = {
                    value: e,
                    computed: o
                })
            }), r.value
        }, x.min = function(e, t, n) {
            if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
            if (!t && x.isEmpty(e)) return Infinity;
            var r = {
                computed: Infinity,
                value: Infinity
            };
            return T(e, function(e, i, s) {
                var o = t ? t.call(n, e, i, s) : e;
                o < r.computed && (r = {
                    value: e,
                    computed: o
                })
            }), r.value
        }, x.shuffle = function(e) {
            var t, n = 0,
                r = [];
            return T(e, function(e) {
                t = x.random(n++), r[n - 1] = r[t], r[t] = e
            }), r
        };
        var k = function(e) {
            return x.isFunction(e) ? e : function(t) {
                return t[e]
            }
        };
        x.sortBy = function(e, t, n) {
            var r = k(t);
            return x.pluck(x.map(e, function(e, t, i) {
                return {
                    value: e,
                    index: t,
                    criteria: r.call(n, e, t, i)
                }
            }).sort(function(e, t) {
                var n = e.criteria,
                    r = t.criteria;
                if (n !== r) {
                    if (n > r || n === void 0) return 1;
                    if (n < r || r === void 0) return -1
                }
                return e.index < t.index ? -1 : 1
            }), "value")
        };
        var L = function(e, t, n, r) {
            var i = {},
                s = k(t || x.identity);
            return T(e, function(t, o) {
                var u = s.call(n, t, o, e);
                r(i, u, t)
            }), i
        };
        x.groupBy = function(e, t, n) {
            return L(e, t, n, function(e, t, n) {
                (x.has(e, t) ? e[t] : e[t] = []).push(n)
            })
        }, x.countBy = function(e, t, n) {
            return L(e, t, n, function(e, t) {
                x.has(e, t) || (e[t] = 0), e[t]++
            })
        }, x.sortedIndex = function(e, t, n, r) {
            n = n == null ? x.identity : k(n);
            var i = n.call(r, t),
                s = 0,
                o = e.length;
            while (s < o) {
                var u = s + o >>> 1;
                n.call(r, e[u]) < i ? s = u + 1 : o = u
            }
            return s
        }, x.toArray = function(e) {
            return e ? x.isArray(e) ? u.call(e) : e.length === +e.length ? x.map(e, x.identity) : x.values(e) : []
        }, x.size = function(e) {
            return e == null ? 0 : e.length === +e.length ? e.length : x.keys(e).length
        }, x.first = x.head = x.take = function(e, t, n) {
            return e == null ? void 0 : t != null && !n ? u.call(e, 0, t) : e[0]
        }, x.initial = function(e, t, n) {
            return u.call(e, 0, e.length - (t == null || n ? 1 : t))
        }, x.last = function(e, t, n) {
            return e == null ? void 0 : t != null && !n ? u.call(e, Math.max(e.length - t, 0)) : e[e.length - 1]
        }, x.rest = x.tail = x.drop = function(e, t, n) {
            return u.call(e, t == null || n ? 1 : t)
        }, x.compact = function(e) {
            return x.filter(e, x.identity)
        };
        var A = function(e, t, n) {
            return T(e, function(e) {
                x.isArray(e) ? t ? o.apply(n, e) : A(e, t, n) : n.push(e)
            }), n
        };
        x.flatten = function(e, t) {
            return A(e, t, [])
        }, x.without = function(e) {
            return x.difference(e, u.call(arguments, 1))
        }, x.uniq = x.unique = function(e, t, n, r) {
            x.isFunction(t) && (r = n, n = t, t = !1);
            var i = n ? x.map(e, n, r) : e,
                s = [],
                o = [];
            return T(i, function(n, r) {
                if (t ? !r || o[o.length - 1] !== n : !x.contains(o, n)) o.push(n), s.push(e[r])
            }), s
        }, x.union = function() {
            return x.uniq(a.apply(r, arguments))
        }, x.intersection = function(e) {
            var t = u.call(arguments, 1);
            return x.filter(x.uniq(e), function(e) {
                return x.every(t, function(t) {
                    return x.indexOf(t, e) >= 0
                })
            })
        }, x.difference = function(e) {
            var t = a.apply(r, u.call(arguments, 1));
            return x.filter(e, function(e) {
                return !x.contains(t, e)
            })
        }, x.zip = function() {
            var e = u.call(arguments),
                t = x.max(x.pluck(e, "length")),
                n = new Array(t);
            for (var r = 0; r < t; r++) n[r] = x.pluck(e, "" + r);
            return n
        }, x.object = function(e, t) {
            if (e == null) return {};
            var n = {};
            for (var r = 0, i = e.length; r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
            return n
        }, x.indexOf = function(e, t, n) {
            if (e == null) return -1;
            var r = 0,
                i = e.length;
            if (n) {
                if (typeof n != "number") return r = x.sortedIndex(e, t), e[r] === t ? r : -1;
                r = n < 0 ? Math.max(0, i + n) : n
            }
            if (y && e.indexOf === y) return e.indexOf(t, n);
            for (; r < i; r++)
                if (e[r] === t) return r;
            return -1
        }, x.lastIndexOf = function(e, t, n) {
            if (e == null) return -1;
            var r = n != null;
            if (b && e.lastIndexOf === b) return r ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
            var i = r ? n : e.length;
            while (i--)
                if (e[i] === t) return i;
            return -1
        }, x.range = function(e, t, n) {
            arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
            var r = Math.max(Math.ceil((t - e) / n), 0),
                i = 0,
                s = new Array(r);
            while (i < r) s[i++] = e, e += n;
            return s
        }, x.bind = function(e, t) {
            if (e.bind === S && S) return S.apply(e, u.call(arguments, 1));
            var n = u.call(arguments, 2);
            return function() {
                return e.apply(t, n.concat(u.call(arguments)))
            }
        }, x.partial = function(e) {
            var t = u.call(arguments, 1);
            return function() {
                return e.apply(this, t.concat(u.call(arguments)))
            }
        }, x.bindAll = function(e) {
            var t = u.call(arguments, 1);
            return t.length === 0 && (t = x.functions(e)), T(t, function(t) {
                e[t] = x.bind(e[t], e)
            }), e
        }, x.memoize = function(e, t) {
            var n = {};
            return t || (t = x.identity),
                function() {
                    var r = t.apply(this, arguments);
                    return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
                }
        }, x.delay = function(e, t) {
            var n = u.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, n)
            }, t)
        }, x.defer = function(e) {
            return x.delay.apply(x, [e, 1].concat(u.call(arguments, 1)))
        }, x.throttle = function(e, t) {
            var n, r, i, s, o = 0,
                u = function() {
                    o = new Date, i = null, s = e.apply(n, r)
                };
            return function() {
                var a = new Date,
                    f = t - (a - o);
                return n = this, r = arguments, f <= 0 ? (clearTimeout(i), i = null, o = a, s = e.apply(n, r)) : i || (i = setTimeout(u, f)), s
            }
        }, x.debounce = function(e, t, n) {
            var r, i;
            return function() {
                var s = this,
                    o = arguments,
                    u = function() {
                        r = null, n || (i = e.apply(s, o))
                    },
                    a = n && !r;
                return clearTimeout(r), r = setTimeout(u, t), a && (i = e.apply(s, o)), i
            }
        }, x.once = function(e) {
            var t = !1,
                n;
            return function() {
                return t ? n : (t = !0, n = e.apply(this, arguments), e = null, n)
            }
        }, x.wrap = function(e, t) {
            return function() {
                var n = [e];
                return o.apply(n, arguments), t.apply(this, n)
            }
        }, x.compose = function() {
            var e = arguments;
            return function() {
                var t = arguments;
                for (var n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
                return t[0]
            }
        }, x.after = function(e, t) {
            return e <= 0 ? t() : function() {
                if (--e < 1) return t.apply(this, arguments)
            }
        }, x.keys = E || function(e) {
            if (e !== Object(e)) throw new TypeError("Invalid object");
            var t = [];
            for (var n in e) x.has(e, n) && (t[t.length] = n);
            return t
        }, x.values = function(e) {
            var t = [];
            for (var n in e) x.has(e, n) && t.push(e[n]);
            return t
        }, x.pairs = function(e) {
            var t = [];
            for (var n in e) x.has(e, n) && t.push([n, e[n]]);
            return t
        }, x.invert = function(e) {
            var t = {};
            for (var n in e) x.has(e, n) && (t[e[n]] = n);
            return t
        }, x.functions = x.methods = function(e) {
            var t = [];
            for (var n in e) x.isFunction(e[n]) && t.push(n);
            return t.sort()
        }, x.extend = function(e) {
            return T(u.call(arguments, 1), function(t) {
                if (t)
                    for (var n in t) e[n] = t[n]
            }), e
        }, x.pick = function(e) {
            var t = {},
                n = a.apply(r, u.call(arguments, 1));
            return T(n, function(n) {
                n in e && (t[n] = e[n])
            }), t
        }, x.omit = function(e) {
            var t = {},
                n = a.apply(r, u.call(arguments, 1));
            for (var i in e) x.contains(n, i) || (t[i] = e[i]);
            return t
        }, x.defaults = function(e) {
            return T(u.call(arguments, 1), function(t) {
                if (t)
                    for (var n in t) e[n] == null && (e[n] = t[n])
            }), e
        }, x.clone = function(e) {
            return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
        }, x.tap = function(e, t) {
            return t(e), e
        };
        var O = function(e, t, n, r) {
            if (e === t) return e !== 0 || 1 / e == 1 / t;
            if (e == null || t == null) return e === t;
            e instanceof x && (e = e._wrapped), t instanceof x && (t = t._wrapped);
            var i = f.call(e);
            if (i != f.call(t)) return !1;
            switch (i) {
                case "[object String]":
                    return e == String(t);
                case "[object Number]":
                    return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e == +t;
                case "[object RegExp]":
                    return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
            }
            if (typeof e != "object" || typeof t != "object") return !1;
            var s = n.length;
            while (s--)
                if (n[s] == e) return r[s] == t;
            n.push(e), r.push(t);
            var o = 0,
                u = !0;
            if (i == "[object Array]") {
                o = e.length, u = o == t.length;
                if (u)
                    while (o--)
                        if (!(u = O(e[o], t[o], n, r))) break
            } else {
                var a = e.constructor,
                    l = t.constructor;
                if (a !== l && !(x.isFunction(a) && a instanceof a && x.isFunction(l) && l instanceof l)) return !1;
                for (var c in e)
                    if (x.has(e, c)) {
                        o++;
                        if (!(u = x.has(t, c) && O(e[c], t[c], n, r))) break
                    }
                if (u) {
                    for (c in t)
                        if (x.has(t, c) && !(o--)) break;
                    u = !o
                }
            }
            return n.pop(), r.pop(), u
        };
        x.isEqual = function(e, t) {
            return O(e, t, [], [])
        }, x.isEmpty = function(e) {
            if (e == null) return !0;
            if (x.isArray(e) || x.isString(e)) return e.length === 0;
            for (var t in e)
                if (x.has(e, t)) return !1;
            return !0
        }, x.isElement = function(e) {
            return !!e && e.nodeType === 1
        }, x.isArray = w || function(e) {
            return f.call(e) == "[object Array]"
        }, x.isObject = function(e) {
            return e === Object(e)
        }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
            x["is" + e] = function(t) {
                return f.call(t) == "[object " + e + "]"
            }
        }), x.isArguments(arguments) || (x.isArguments = function(e) {
            return !!e && !!x.has(e, "callee")
        }), typeof /./ != "function" && (x.isFunction = function(e) {
            return typeof e == "function"
        }), x.isFinite = function(e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, x.isNaN = function(e) {
            return x.isNumber(e) && e != +e
        }, x.isBoolean = function(e) {
            return e === !0 || e === !1 || f.call(e) == "[object Boolean]"
        }, x.isNull = function(e) {
            return e === null
        }, x.isUndefined = function(e) {
            return e === void 0
        }, x.has = function(e, t) {
            return l.call(e, t)
        }, x.noConflict = function() {
            return e._ = t, this
        }, x.identity = function(e) {
            return e
        }, x.times = function(e, t, n) {
            var r = Array(e);
            for (var i = 0; i < e; i++) r[i] = t.call(n, i);
            return r
        }, x.random = function(e, t) {
            return t == null && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        };
        var M = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "/": "&#x2F;"
            }
        };
        M.unescape = x.invert(M.escape);
        var _ = {
            escape: new RegExp("[" + x.keys(M.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + x.keys(M.unescape).join("|") + ")", "g")
        };
        x.each(["escape", "unescape"], function(e) {
            x[e] = function(t) {
                return t == null ? "" : ("" + t).replace(_[e], function(t) {
                    return M[e][t]
                })
            }
        }), x.result = function(e, t) {
            if (e == null) return null;
            var n = e[t];
            return x.isFunction(n) ? n.call(e) : n
        }, x.mixin = function(e) {
            T(x.functions(e), function(t) {
                var n = x[t] = e[t];
                x.prototype[t] = function() {
                    var e = [this._wrapped];
                    return o.apply(e, arguments), j.call(this, n.apply(x, e))
                }
            })
        };
        var D = 0;
        x.uniqueId = function(e) {
            var t = ++D + "";
            return e ? e + t : t
        }, x.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var P = /(.)^/,
            H = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "	": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            B = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        x.template = function(e, t, n) {
            var r;
            n = x.defaults({}, n, x.templateSettings);
            var i = new RegExp([(n.escape || P).source, (n.interpolate || P).source, (n.evaluate || P).source].join("|") + "|$", "g"),
                s = 0,
                o = "__p+='";
            e.replace(i, function(t, n, r, i, u) {
                return o += e.slice(s, u).replace(B, function(e) {
                    return "\\" + H[e]
                }), n && (o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (o += "';\n" + i + "\n__p+='"), s = u + t.length, t
            }), o += "';\n", n.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                r = new Function(n.variable || "obj", "_", o)
            } catch (u) {
                throw u.source = o, u
            }
            if (t) return r(t, x);
            var a = function(e) {
                return r.call(this, e, x)
            };
            return a.source = "function(" + (n.variable || "obj") + "){\n" + o + "}", a
        }, x.chain = function(e) {
            return x(e).chain()
        };
        var j = function(e) {
            return this._chain ? x(e).chain() : e
        };
        x.mixin(x), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
            var t = r[e];
            x.prototype[e] = function() {
                var n = this._wrapped;
                return t.apply(n, arguments), (e == "shift" || e == "splice") && n.length === 0 && delete n[0], j.call(this, n)
            }
        }), T(["concat", "join", "slice"], function(e) {
            var t = r[e];
            x.prototype[e] = function() {
                return j.call(this, t.apply(this._wrapped, arguments))
            }
        }), x.extend(x.prototype, {
            chain: function() {
                return this._chain = !0, this
            },
            value: function() {
                return this._wrapped
            }
        })
    }.call(this),
    function() {
        "use strict";

        function e(e) {
            return typeof e == "function" || typeof e == "object" && e !== null
        }

        function t(e) {
            return typeof e == "function"
        }

        function n(e) {
            return typeof e == "object" && e !== null
        }

        function o() {}

        function a(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
            return -1
        }

        function f(e) {
            var t = e._promiseCallbacks;
            return t || (t = e._promiseCallbacks = {}), t
        }

        function h(e, t) {
            if (e === "onerror") {
                c.on("error", t);
                return
            }
            if (arguments.length !== 2) return c[e];
            c[e] = t
        }

        function d() {
            setTimeout(function() {
                var e;
                for (var t = 0; t < p.length; t++) {
                    e = p[t];
                    var n = e.payload;
                    n.guid = n.key + n.id, n.childGuid = n.key + n.childId, n.error && (n.stack = n.error.stack), c.trigger(e.name, e.payload)
                }
                p.length = 0
            }, 50)
        }

        function v(e, t, n) {
            1 === p.push({
                name: e,
                payload: {
                    key: t._guidKey,
                    id: t._id,
                    eventName: e,
                    detail: t._result,
                    childId: n && n._id,
                    label: t._label,
                    timeStamp: s(),
                    error: c["instrument-with-stack"] ? new Error(t._label) : null
                }
            }) && d()
        }

        function g() {
            return new TypeError("A promises callback cannot return that same promise.")
        }

        function y() {}

        function x(e) {
            try {
                return e.then
            } catch (t) {
                return S.error = t, S
            }
        }

        function T(e, t, n, r) {
            try {
                e.call(t, n, r)
            } catch (i) {
                return i
            }
        }

        function N(e, t, n) {
            c.async(function(e) {
                var r = !1,
                    i = T(n, t, function(n) {
                        if (r) return;
                        r = !0, t !== n ? L(e, n) : O(e, n)
                    }, function(t) {
                        if (r) return;
                        r = !0, M(e, t)
                    }, "Settle: " + (e._label || " unknown promise"));
                !r && i && (r = !0, M(e, i))
            }, e)
        }

        function C(e, t) {
            t._state === w ? O(e, t._result) : t._state === E ? (t._onError = null, M(e, t._result)) : _(t, undefined, function(n) {
                t !== n ? L(e, n) : O(e, n)
            }, function(t) {
                M(e, t)
            })
        }

        function k(e, n) {
            if (n.constructor === e.constructor) C(e, n);
            else {
                var r = x(n);
                r === S ? M(e, S.error) : r === undefined ? O(e, n) : t(r) ? N(e, n, r) : O(e, n)
            }
        }

        function L(t, n) {
            t === n ? O(t, n) : e(n) ? k(t, n) : O(t, n)
        }

        function A(e) {
            e._onError && e._onError(e._result), D(e)
        }

        function O(e, t) {
            if (e._state !== b) return;
            e._result = t, e._state = w, e._subscribers.length === 0 ? c.instrument && m("fulfilled", e) : c.async(D, e)
        }

        function M(e, t) {
            if (e._state !== b) return;
            e._state = E, e._result = t, c.async(A, e)
        }

        function _(e, t, n, r) {
            var i = e._subscribers,
                s = i.length;
            e._onError = null, i[s] = t, i[s + w] = n, i[s + E] = r, s === 0 && e._state && c.async(D, e)
        }

        function D(e) {
            var t = e._subscribers,
                n = e._state;
            c.instrument && m(n === w ? "fulfilled" : "rejected", e);
            if (t.length === 0) return;
            var r, i, s = e._result;
            for (var o = 0; o < t.length; o += 3) r = t[o], i = t[o + n], r ? j(n, r, i, s) : i(s);
            e._subscribers.length = 0
        }

        function P() {
            this.error = null
        }

        function B(e, t) {
            try {
                return e(t)
            } catch (n) {
                return H.error = n, H
            }
        }

        function j(e, n, r, i) {
            var s = t(r),
                o, u, a, f;
            if (s) {
                o = B(r, i), o === H ? (f = !0, u = o.error, o = null) : a = !0;
                if (n === o) {
                    M(n, g());
                    return
                }
            } else o = i, a = !0;
            n._state === b && (s && a ? L(n, o) : f ? M(n, u) : e === w ? O(n, o) : e === E && M(n, o))
        }

        function F(e, t) {
            var n = !1;
            try {
                t(function(r) {
                    if (n) return;
                    n = !0, L(e, r)
                }, function(r) {
                    if (n) return;
                    n = !0, M(e, r)
                })
            } catch (r) {
                M(e, r)
            }
        }

        function I(e, t, n) {
            return e === w ? {
                state: "fulfilled",
                value: n
            } : {
                state: "rejected",
                reason: n
            }
        }

        function q(e, t, n, r) {
            var i = this;
            i._instanceConstructor = e, i.promise = new e(y, r), i._abortOnReject = n, i._validateInput(t) ? (i._input = t, i.length = t.length, i._remaining = t.length, i._init(), i.length === 0 ? O(i.promise, i._result) : (i.length = i.length || 0, i._enumerate(), i._remaining === 0 && O(i.promise, i._result))) : M(i.promise, i._validationError())
        }

        function U(e, t) {
            return (new R(this, e, !0, t)).promise
        }

        function W(e, t) {
            function o(e) {
                L(r, e)
            }

            function u(e) {
                M(r, e)
            }
            var n = this,
                r = new n(y, t);
            if (!i(e)) return M(r, new TypeError("You must pass an array to race.")), r;
            var s = e.length;
            for (var a = 0; r._state === b && a < s; a++) _(n.resolve(e[a]), undefined, o, u);
            return r
        }

        function V(e, t) {
            var n = this;
            if (e && typeof e == "object" && e.constructor === n) return e;
            var r = new n(y, t);
            return L(r, e), r
        }

        function J(e, t) {
            var n = this,
                r = new n(y, t);
            return M(r, e), r
        }

        function Y() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
        }

        function Z() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
        }

        function et(e, n) {
            var r = this;
            r._id = G++, r._label = n, r._state = undefined, r._result = undefined, r._subscribers = [], c.instrument && m("created", r), y !== e && (t(e) || Y(), r instanceof et || Z(), F(r, e))
        }

        function nt(e, t, n) {
            this._superConstructor(e, t, !1, n)
        }

        function rt(e, t) {
            return (new nt(tt, e, t)).promise
        }

        function st(e, t) {
            return tt.all(e, t)
        }

        function lt(e, t) {
            St[ut] = e, St[ut + 1] = t, ut += 2, ut === 2 && Nt()
        }

        function gt() {
            var e = process.nextTick,
                t = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
            return Array.isArray(t) && t[1] === "0" && t[2] === "10" && (e = setImmediate),
                function() {
                    e(xt)
                }
        }

        function yt() {
            return function() {
                ft(xt)
            }
        }

        function bt() {
            var e = 0,
                t = new dt(xt),
                n = document.createTextNode("");
            return t.observe(n, {
                    characterData: !0
                }),
                function() {
                    n.data = e = ++e % 2
                }
        }

        function wt() {
            var e = new MessageChannel;
            return e.port1.onmessage = xt,
                function() {
                    e.port2.postMessage(0)
                }
        }

        function Et() {
            return function() {
                setTimeout(xt, 1)
            }
        }

        function xt() {
            for (var e = 0; e < ut; e += 2) {
                var t = St[e],
                    n = St[e + 1];
                t(n), St[e] = undefined, St[e + 1] = undefined
            }
            ut = 0
        }

        function Tt() {
            try {
                var e = require,
                    t = e("vertx");
                return ft = t.runOnLoop || t.runOnContext, yt()
            } catch (n) {
                return Et()
            }
        }

        function Ct(e) {
            var t = {};
            return t.promise = new tt(function(e, n) {
                t.resolve = e, t.reject = n
            }, e), t
        }

        function Lt(e, n, r) {
            return tt.all(e, r).then(function(e) {
                if (!t(n)) throw new TypeError("You must pass a function as filter's second argument.");
                var i = e.length,
                    s = new Array(i);
                for (var o = 0; o < i; o++) s[o] = n(e[o]);
                return tt.all(s, r).then(function(t) {
                    var n = new Array(i),
                        r = 0;
                    for (var s = 0; s < i; s++) t[s] && (n[r] = e[s], r++);
                    return n.length = r, n
                })
            })
        }

        function Ot(e, t, n) {
            this._superConstructor(e, t, !0, n)
        }

        function _t(e, t, n) {
            this._superConstructor(e, t, !1, n)
        }

        function Dt(e, t) {
            return (new _t(tt, e, t)).promise
        }

        function Ht(e, t) {
            return (new Mt(tt, e, t)).promise
        }

        function jt(e, n, r) {
            return tt.all(e, r).then(function(e) {
                if (!t(n)) throw new TypeError("You must pass a function as map's second argument.");
                var i = e.length,
                    s = new Array(i);
                for (var o = 0; o < i; o++) s[o] = n(e[o]);
                return tt.all(s, r)
            })
        }

        function It() {
            this.value = undefined
        }

        function Ut(e) {
            try {
                return e.then
            } catch (t) {
                return qt.value = t, qt
            }
        }

        function zt(e, t, n) {
            try {
                e.apply(t, n)
            } catch (r) {
                return qt.value = r, qt
            }
        }

        function Wt(e, t) {
            var n = {},
                r, i, s = e.length,
                o = new Array(s);
            for (var u = 0; u < s; u++) o[u] = e[u];
            for (i = 0; i < t.length; i++) r = t[i], n[r] = o[i + 1];
            return n
        }

        function Xt(e) {
            var t = e.length,
                n = new Array(t - 1);
            for (var r = 1; r < t; r++) n[r - 1] = e[r];
            return n
        }

        function Vt(e, t) {
            return {
                then: function(n, r) {
                    return e.call(t, n, r)
                }
            }
        }

        function $t(e, t) {
            var n = function() {
                var n = this,
                    r = arguments.length,
                    s = new Array(r + 1),
                    o, u = !1;
                for (var a = 0; a < r; ++a) {
                    o = arguments[a];
                    if (!u) {
                        u = Gt(o);
                        if (u === Rt) {
                            var f = new tt(y);
                            return M(f, Rt.value), f
                        }
                        u && u !== !0 && (o = Vt(u, o))
                    }
                    s[a] = o
                }
                var l = new tt(y);
                return s[r] = function(e, n) {
                    e ? M(l, e) : t === undefined ? L(l, n) : t === !0 ? L(l, Xt(arguments)) : i(t) ? L(l, Wt(arguments, t)) : L(l, n)
                }, u ? Qt(l, s, e, n) : Kt(l, s, e, n)
            };
            return n.__proto__ = e, n
        }

        function Kt(e, t, n, r) {
            var i = zt(n, r, t);
            return i === qt && M(e, i.value), e
        }

        function Qt(e, t, n, r) {
            return tt.all(t).then(function(t) {
                var i = zt(n, r, t);
                return i === qt && M(e, i.value), e
            })
        }

        function Gt(e) {
            return e && typeof e == "object" ? e.constructor === tt ? !0 : Ut(e) : !1
        }

        function en(e, t) {
            return tt.race(e, t)
        }

        function nn(e, t) {
            return tt.reject(e, t)
        }

        function sn(e, t) {
            return tt.resolve(e, t)
        }

        function un(e) {
            throw setTimeout(function() {
                throw e
            }), e
        }

        function ln(e, t) {
            c.async(e, t)
        }

        function cn() {
            c.on.apply(c, arguments)
        }

        function hn() {
            c.off.apply(c, arguments)
        }
        var r;
        Array.isArray ? r = Array.isArray : r = function(e) {
            return Object.prototype.toString.call(e) === "[object Array]"
        };
        var i = r,
            s = Date.now || function() {
                return (new Date).getTime()
            },
            u = Object.create || function(e) {
                if (arguments.length > 1) throw new Error("Second argument not supported");
                if (typeof e != "object") throw new TypeError("Argument must be an object");
                return o.prototype = e, new o
            },
            l = {
                mixin: function(e) {
                    return e.on = this.on, e.off = this.off, e.trigger = this.trigger, e._promiseCallbacks = undefined, e
                },
                on: function(e, t) {
                    var n = f(this),
                        r;
                    r = n[e], r || (r = n[e] = []), a(r, t) === -1 && r.push(t)
                },
                off: function(e, t) {
                    var n = f(this),
                        r, i;
                    if (!t) {
                        n[e] = [];
                        return
                    }
                    r = n[e], i = a(r, t), i !== -1 && r.splice(i, 1)
                },
                trigger: function(e, t) {
                    var n = f(this),
                        r, i;
                    if (r = n[e])
                        for (var s = 0; s < r.length; s++) i = r[s], i(t)
                }
            },
            c = {
                instrument: !1
            };
        l.mixin(c);
        var p = [],
            m = v,
            b = void 0,
            w = 1,
            E = 2,
            S = new P,
            H = new P,
            R = q;
        q.prototype._validateInput = function(e) {
            return i(e)
        }, q.prototype._validationError = function() {
            return new Error("Array Methods must be provided an Array")
        }, q.prototype._init = function() {
            this._result = new Array(this.length)
        }, q.prototype._enumerate = function() {
            var e = this,
                t = e.length,
                n = e.promise,
                r = e._input;
            for (var i = 0; n._state === b && i < t; i++) e._eachEntry(r[i], i)
        }, q.prototype._eachEntry = function(e, t) {
            var r = this,
                i = r._instanceConstructor;
            n(e) ? e.constructor === i && e._state !== b ? (e._onError = null, r._settledAt(e._state, t, e._result)) : r._willSettleAt(i.resolve(e), t) : (r._remaining--, r._result[t] = r._makeResult(w, t, e))
        }, q.prototype._settledAt = function(e, t, n) {
            var r = this,
                i = r.promise;
            i._state === b && (r._remaining--, r._abortOnReject && e === E ? M(i, n) : r._result[t] = r._makeResult(e, t, n)), r._remaining === 0 && O(i, r._result)
        }, q.prototype._makeResult = function(e, t, n) {
            return n
        }, q.prototype._willSettleAt = function(e, t) {
            var n = this;
            _(e, undefined, function(e) {
                n._settledAt(w, t, e)
            }, function(e) {
                n._settledAt(E, t, e)
            })
        };
        var z = U,
            X = W,
            $ = V,
            K = J,
            Q = "rsvp_" + s() + "-",
            G = 0,
            tt = et;
        et.cast = $, et.all = z, et.race = X, et.resolve = $, et.reject = K, et.prototype = {
            constructor: et,
            _guidKey: Q,
            _onError: function(e) {
                c.async(function(t) {
                    setTimeout(function() {
                        t._onError && c.trigger("error", e)
                    }, 0)
                }, this)
            },
            then: function(e, t, n) {
                var r = this,
                    i = r._state;
                if (i === w && !e || i === E && !t) return c.instrument && m("chained", r, r), r;
                r._onError = null;
                var s = new r.constructor(y, n),
                    o = r._result;
                c.instrument && m("chained", r, s);
                if (i) {
                    var u = arguments[i - 1];
                    c.async(function() {
                        j(i, s, u, o)
                    })
                } else _(r, s, e, t);
                return s
            },
            "catch": function(e, t) {
                return this.then(undefined, e, t)
            },
            "finally": function(e, t) {
                var n = this,
                    r = n.constructor;
                return n.then(function(t) {
                    return r.resolve(e()).then(function() {
                        return t
                    })
                }, function(t) {
                    return r.resolve(e()).then(function() {
                        throw t
                    })
                }, t)
            }
        }, nt.prototype = u(R.prototype), nt.prototype._superConstructor = R, nt.prototype._makeResult = I, nt.prototype._validationError = function() {
            return new Error("allSettled must be called with an array")
        };
        var it = rt,
            ot = st,
            ut = 0,
            at = {}.toString,
            ft, ct = lt,
            ht = typeof window != "undefined" ? window : undefined,
            pt = ht || {},
            dt = pt.MutationObserver || pt.WebKitMutationObserver,
            vt = typeof process != "undefined" && {}.toString.call(process) === "[object process]",
            mt = typeof Uint8ClampedArray != "undefined" && typeof importScripts != "undefined" && typeof MessageChannel != "undefined",
            St = new Array(1e3),
            Nt;
        vt ? Nt = gt() : dt ? Nt = bt() : mt ? Nt = wt() : ht === undefined && typeof require == "function" ? Nt = Tt() : Nt = Et();
        var kt = Ct,
            At = Lt,
            Mt = Ot;
        Ot.prototype = u(R.prototype), Ot.prototype._superConstructor = R, Ot.prototype._init = function() {
            this._result = {}
        }, Ot.prototype._validateInput = function(e) {
            return e && typeof e == "object"
        }, Ot.prototype._validationError = function() {
            return new Error("Promise.hash must be called with an object")
        }, Ot.prototype._enumerate = function() {
            var e = this,
                t = e.promise,
                n = e._input,
                r = [];
            for (var i in n) t._state === b && Object.prototype.hasOwnProperty.call(n, i) && r.push({
                position: i,
                entry: n[i]
            });
            var s = r.length;
            e._remaining = s;
            var o;
            for (var u = 0; t._state === b && u < s; u++) o = r[u], e._eachEntry(o.entry, o.position)
        }, _t.prototype = u(Mt.prototype), _t.prototype._superConstructor = R, _t.prototype._makeResult = I, _t.prototype._validationError = function() {
            return new Error("hashSettled must be called with an object")
        };
        var Pt = Dt,
            Bt = Ht,
            Ft = jt,
            qt = new It,
            Rt = new It,
            Jt = $t,
            Yt;
        if (typeof self == "object") Yt = self;
        else {
            if (typeof global != "object") throw new Error("no global: `self` or `global` found");
            Yt = global
        }
        var Zt = Yt,
            tn = en,
            rn = nn,
            on = sn,
            an = un;
        c.async = ct;
        var fn = on;
        if (typeof window != "undefined" && typeof window.__PROMISE_INSTRUMENTATION__ == "object") {
            var pn = window.__PROMISE_INSTRUMENTATION__;
            h("instrument", !0);
            for (var dn in pn) pn.hasOwnProperty(dn) && cn(dn, pn[dn])
        }
        var vn = {
            race: tn,
            Promise: tt,
            allSettled: it,
            hash: Bt,
            hashSettled: Pt,
            denodeify: Jt,
            on: cn,
            off: hn,
            map: Ft,
            filter: At,
            resolve: on,
            reject: rn,
            all: ot,
            rethrow: an,
            defer: kt,
            EventTarget: l,
            configure: h,
            async: ln
        };
        typeof define == "function" && define.amd ? define(function() {
            return vn
        }) : typeof module != "undefined" && module.exports ? module.exports = vn : typeof Zt != "undefined" && (Zt.RSVP = vn)
    }.call(this),
    function(e, t) {
        function i(t, n) {
            var r, i, o, u = t.nodeName.toLowerCase();
            return "area" === u ? (r = t.parentNode, i = r.name, !t.href || !i || r.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap=#" + i + "]")[0], !!o && s(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && s(t)
        }

        function s(t) {
            return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
                return e.css(this, "visibility") === "hidden"
            }).length
        }
        var n = 0,
            r = /^ui-id-\d+$/;
        e.ui = e.ui || {}, e.extend(e.ui, {
            version: "1.10.4",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), e.fn.extend({
            focus: function(t) {
                return function(n, r) {
                    return typeof n == "number" ? this.each(function() {
                        var t = this;
                        setTimeout(function() {
                            e(t).focus(), r && r.call(t)
                        }, n)
                    }) : t.apply(this, arguments)
                }
            }(e.fn.focus),
            scrollParent: function() {
                var t;
                return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                }).eq(0) : t = this.parents().filter(function() {
                    return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
            },
            zIndex: function(n) {
                if (n !== t) return this.css("zIndex", n);
                if (this.length) {
                    var r = e(this[0]),
                        i, s;
                    while (r.length && r[0] !== document) {
                        i = r.css("position");
                        if (i === "absolute" || i === "relative" || i === "fixed") {
                            s = parseInt(r.css("zIndex"), 10);
                            if (!isNaN(s) && s !== 0) return s
                        }
                        r = r.parent()
                    }
                }
                return 0
            },
            uniqueId: function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++n)
                })
            },
            removeUniqueId: function() {
                return this.each(function() {
                    r.test(this.id) && e(this).removeAttr("id")
                })
            }
        }), e.extend(e.expr[":"], {
            data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
                return function(n) {
                    return !!e.data(n, t)
                }
            }) : function(t, n, r) {
                return !!e.data(t, r[3])
            },
            focusable: function(t) {
                return i(t, !isNaN(e.attr(t, "tabindex")))
            },
            tabbable: function(t) {
                var n = e.attr(t, "tabindex"),
                    r = isNaN(n);
                return (r || n >= 0) && i(t, !r)
            }
        }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, r) {
            function u(t, n, r, s) {
                return e.each(i, function() {
                    n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
                }), n
            }
            var i = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
                s = r.toLowerCase(),
                o = {
                    innerWidth: e.fn.innerWidth,
                    innerHeight: e.fn.innerHeight,
                    outerWidth: e.fn.outerWidth,
                    outerHeight: e.fn.outerHeight
                };
            e.fn["inner" + r] = function(n) {
                return n === t ? o["inner" + r].call(this) : this.each(function() {
                    e(this).css(s, u(this, n) + "px")
                })
            }, e.fn["outer" + r] = function(t, n) {
                return typeof t != "number" ? o["outer" + r].call(this, t) : this.each(function() {
                    e(this).css(s, u(this, t, !0, n) + "px")
                })
            }
        }), e.fn.addBack || (e.fn.addBack = function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
            return function(n) {
                return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
            }
        }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
            disableSelection: function() {
                return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                    e.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            }
        }), e.extend(e.ui, {
            plugin: {
                add: function(t, n, r) {
                    var i, s = e.ui[t].prototype;
                    for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]])
                },
                call: function(e, t, n) {
                    var r, i = e.plugins[t];
                    if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11) return;
                    for (r = 0; r < i.length; r++) e.options[i[r][0]] && i[r][1].apply(e.element, n)
                }
            },
            hasScroll: function(t, n) {
                if (e(t).css("overflow") === "hidden") return !1;
                var r = n && n === "left" ? "scrollLeft" : "scrollTop",
                    i = !1;
                return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i)
            }
        })
    }(jQuery),
    function(e, t) {
        var n = 0,
            r = Array.prototype.slice,
            i = e.cleanData;
        e.cleanData = function(t) {
            for (var n = 0, r;
                (r = t[n]) != null; n++) try {
                e(r).triggerHandler("remove")
            } catch (s) {}
            i(t)
        }, e.widget = function(t, n, r) {
            var i, s, o, u, a = {},
                f = t.split(".")[0];
            t = t.split(".")[1], i = f + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function(t) {
                return !!e.data(t, i)
            }, e[f] = e[f] || {}, s = e[f][t], o = e[f][t] = function(e, t) {
                if (!this._createWidget) return new o(e, t);
                arguments.length && this._createWidget(e, t)
            }, e.extend(o, s, {
                version: r.version,
                _proto: e.extend({}, r),
                _childConstructors: []
            }), u = new n, u.options = e.widget.extend({}, u.options), e.each(r, function(t, r) {
                if (!e.isFunction(r)) {
                    a[t] = r;
                    return
                }
                a[t] = function() {
                    var e = function() {
                            return n.prototype[t].apply(this, arguments)
                        },
                        i = function(e) {
                            return n.prototype[t].apply(this, e)
                        };
                    return function() {
                        var t = this._super,
                            n = this._superApply,
                            s;
                        return this._super = e, this._superApply = i, s = r.apply(this, arguments), this._super = t, this._superApply = n, s
                    }
                }()
            }), o.prototype = e.widget.extend(u, {
                widgetEventPrefix: s ? u.widgetEventPrefix || t : t
            }, a, {
                constructor: o,
                namespace: f,
                widgetName: t,
                widgetFullName: i
            }), s ? (e.each(s._childConstructors, function(t, n) {
                var r = n.prototype;
                e.widget(r.namespace + "." + r.widgetName, o, n._proto)
            }), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o)
        }, e.widget.extend = function(n) {
            var i = r.call(arguments, 1),
                s = 0,
                o = i.length,
                u, a;
            for (; s < o; s++)
                for (u in i[s]) a = i[s][u], i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a) : n[u] = a);
            return n
        }, e.widget.bridge = function(n, i) {
            var s = i.prototype.widgetFullName || n;
            e.fn[n] = function(o) {
                var u = typeof o == "string",
                    a = r.call(arguments, 1),
                    f = this;
                return o = !u && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o, u ? this.each(function() {
                    var r, i = e.data(this, s);
                    if (!i) return e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'");
                    if (!e.isFunction(i[o]) || o.charAt(0) === "_") return e.error("no such method '" + o + "' for " + n + " widget instance");
                    r = i[o].apply(i, a);
                    if (r !== i && r !== t) return f = r && r.jquery ? f.pushStack(r.get()) : r, !1
                }) : this.each(function() {
                    var t = e.data(this, s);
                    t ? t.option(o || {})._init() : e.data(this, s, new i(o, this))
                }), f
            }
        }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(t, r) {
                r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), r !== this && (e.data(r, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(e) {
                        e.target === r && this.destroy()
                    }
                }), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: e.noop,
            _getCreateEventData: e.noop,
            _create: e.noop,
            _init: e.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: e.noop,
            widget: function() {
                return this.element
            },
            option: function(n, r) {
                var i = n,
                    s, o, u;
                if (arguments.length === 0) return e.widget.extend({}, this.options);
                if (typeof n == "string") {
                    i = {}, s = n.split("."), n = s.shift();
                    if (s.length) {
                        o = i[n] = e.widget.extend({}, this.options[n]);
                        for (u = 0; u < s.length - 1; u++) o[s[u]] = o[s[u]] || {}, o = o[s[u]];
                        n = s.pop();
                        if (arguments.length === 1) return o[n] === t ? null : o[n];
                        o[n] = r
                    } else {
                        if (arguments.length === 1) return this.options[n] === t ? null : this.options[n];
                        i[n] = r
                    }
                }
                return this._setOptions(i), this
            },
            _setOptions: function(e) {
                var t;
                for (t in e) this._setOption(t, e[t]);
                return this
            },
            _setOption: function(e, t) {
                return this.options[e] = t, e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
            },
            enable: function() {
                return this._setOption("disabled", !1)
            },
            disable: function() {
                return this._setOption("disabled", !0)
            },
            _on: function(
                t, n, r) {
                var i, s = this;
                typeof t != "boolean" && (r = n, n = t, t = !1), r ? (n = i = e(n), this.bindings = this.bindings.add(n)) : (r = n, n = this.element, i = this.widget()), e.each(r, function(r, o) {
                    function u() {
                        if (!t && (s.options.disabled === !0 || e(this).hasClass("ui-state-disabled"))) return;
                        return (typeof o == "string" ? s[o] : o).apply(s, arguments)
                    }
                    typeof o != "string" && (u.guid = o.guid = o.guid || u.guid || e.guid++);
                    var a = r.match(/^(\w+)\s*(.*)$/),
                        f = a[1] + s.eventNamespace,
                        l = a[2];
                    l ? i.delegate(l, f, u) : n.bind(f, u)
                })
            },
            _off: function(e, t) {
                t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
            },
            _delay: function(e, t) {
                function n() {
                    return (typeof e == "string" ? r[e] : e).apply(r, arguments)
                }
                var r = this;
                return setTimeout(n, t || 0)
            },
            _hoverable: function(t) {
                this.hoverable = this.hoverable.add(t), this._on(t, {
                    mouseenter: function(t) {
                        e(t.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(t) {
                        e(t.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(t) {
                this.focusable = this.focusable.add(t), this._on(t, {
                    focusin: function(t) {
                        e(t.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(t) {
                        e(t.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(t, n, r) {
                var i, s, o = this.options[t];
                r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent;
                if (s)
                    for (i in s) i in n || (n[i] = s[i]);
                return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented())
            }
        }, e.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(t, n) {
            e.Widget.prototype["_" + t] = function(r, i, s) {
                typeof i == "string" && (i = {
                    effect: i
                });
                var o, u = i ? i === !0 || typeof i == "number" ? n : i.effect || n : t;
                i = i || {}, typeof i == "number" && (i = {
                    duration: i
                }), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && e.effects.effect[u] ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function(n) {
                    e(this)[t](), s && s.call(r[0]), n()
                })
            }
        })
    }(jQuery),
    function(e, t) {
        var n = !1;
        e(document).mouseup(function() {
            n = !1
        }), e.widget("ui.mouse", {
            version: "1.10.4",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var t = this;
                this.element.bind("mousedown." + this.widgetName, function(e) {
                    return t._mouseDown(e)
                }).bind("click." + this.widgetName, function(n) {
                    if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(t) {
                if (n) return;
                this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                var r = this,
                    i = t.which === 1,
                    s = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                if (!i || s || !this._mouseCapture(t)) return !0;
                this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    r.mouseDelayMet = !0
                }, this.options.delay));
                if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
                    this._mouseStarted = this._mouseStart(t) !== !1;
                    if (!this._mouseStarted) return t.preventDefault(), !0
                }
                return !0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                    return r._mouseMove(e)
                }, this._mouseUpDelegate = function(e) {
                    return r._mouseUp(e)
                }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0
            },
            _mouseMove: function(t) {
                return e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
            },
            _mouseUp: function(t) {
                return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
            },
            _mouseDistanceMet: function(e) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        })
    }(jQuery),
    function(e, t) {
        function h(e, t, n) {
            return [parseFloat(e[0]) * (l.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (l.test(e[1]) ? n / 100 : 1)]
        }

        function p(t, n) {
            return parseInt(e.css(t, n), 10) || 0
        }

        function d(t) {
            var n = t[0];
            return n.nodeType === 9 ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : e.isWindow(n) ? {
                width: t.width(),
                height: t.height(),
                offset: {
                    top: t.scrollTop(),
                    left: t.scrollLeft()
                }
            } : n.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: n.pageY,
                    left: n.pageX
                }
            } : {
                width: t.outerWidth(),
                height: t.outerHeight(),
                offset: t.offset()
            }
        }
        e.ui = e.ui || {};
        var n, r = Math.max,
            i = Math.abs,
            s = Math.round,
            o = /left|center|right/,
            u = /top|center|bottom/,
            a = /[\+\-]\d+(\.[\d]+)?%?/,
            f = /^\w+/,
            l = /%$/,
            c = e.fn.position;
        e.position = {
                scrollbarWidth: function() {
                    if (n !== t) return n;
                    var r, i, s = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        o = s.children()[0];
                    return e("body").append(s), r = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, r === i && (i = s[0].clientWidth), s.remove(), n = r - i
                },
                getScrollInfo: function(t) {
                    var n = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                        r = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                        i = n === "scroll" || n === "auto" && t.width < t.element[0].scrollWidth,
                        s = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
                    return {
                        width: s ? e.position.scrollbarWidth() : 0,
                        height: i ? e.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(t) {
                    var n = e(t || window),
                        r = e.isWindow(n[0]),
                        i = !!n[0] && n[0].nodeType === 9;
                    return {
                        element: n,
                        isWindow: r,
                        isDocument: i,
                        offset: n.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: n.scrollLeft(),
                        scrollTop: n.scrollTop(),
                        width: r ? n.width() : n.outerWidth(),
                        height: r ? n.height() : n.outerHeight()
                    }
                }
            }, e.fn.position = function(t) {
                if (!t || !t.of) return c.apply(this, arguments);
                t = e.extend({}, t);
                var n, l, v, m, g, y, b = e(t.of),
                    w = e.position.getWithinInfo(t.within),
                    E = e.position.getScrollInfo(w),
                    S = (t.collision || "flip").split(" "),
                    x = {};
                return y = d(b), b[0].preventDefault && (t.at = "left top"), l = y.width, v = y.height, m = y.offset, g = e.extend({}, m), e.each(["my", "at"], function() {
                    var e = (t[this] || "").split(" "),
                        n, r;
                    e.length === 1 && (e = o.test(e[0]) ? e.concat(["center"]) : u.test(e[0]) ? ["center"].concat(e) : ["center", "center"]), e[0] = o.test(e[0]) ? e[0] : "center", e[1] = u.test(e[1]) ? e[1] : "center", n = a.exec(e[0]), r = a.exec(e[1]), x[this] = [n ? n[0] : 0, r ? r[0] : 0], t[this] = [f.exec(e[0])[0], f.exec(e[1])[0]]
                }), S.length === 1 && (S[1] = S[0]), t.at[0] === "right" ? g.left += l : t.at[0] === "center" && (g.left += l / 2), t.at[1] === "bottom" ? g.top += v : t.at[1] === "center" && (g.top += v / 2), n = h(x.at, l, v), g.left += n[0], g.top += n[1], this.each(function() {
                    var o, u, a = e(this),
                        f = a.outerWidth(),
                        c = a.outerHeight(),
                        d = p(this, "marginLeft"),
                        y = p(this, "marginTop"),
                        T = f + d + p(this, "marginRight") + E.width,
                        N = c + y + p(this, "marginBottom") + E.height,
                        C = e.extend({}, g),
                        k = h(x.my, a.outerWidth(), a.outerHeight());
                    t.my[0] === "right" ? C.left -= f : t.my[0] === "center" && (C.left -= f / 2), t.my[1] === "bottom" ? C.top -= c : t.my[1] === "center" && (C.top -= c / 2), C.left += k[0], C.top += k[1], e.support.offsetFractions || (C.left = s(C.left), C.top = s(C.top)), o = {
                        marginLeft: d,
                        marginTop: y
                    }, e.each(["left", "top"], function(r, i) {
                        e.ui.position[S[r]] && e.ui.position[S[r]][i](C, {
                            targetWidth: l,
                            targetHeight: v,
                            elemWidth: f,
                            elemHeight: c,
                            collisionPosition: o,
                            collisionWidth: T,
                            collisionHeight: N,
                            offset: [n[0] + k[0], n[1] + k[1]],
                            my: t.my,
                            at: t.at,
                            within: w,
                            elem: a
                        })
                    }), t.using && (u = function(e) {
                        var n = m.left - C.left,
                            s = n + l - f,
                            o = m.top - C.top,
                            u = o + v - c,
                            h = {
                                target: {
                                    element: b,
                                    left: m.left,
                                    top: m.top,
                                    width: l,
                                    height: v
                                },
                                element: {
                                    element: a,
                                    left: C.left,
                                    top: C.top,
                                    width: f,
                                    height: c
                                },
                                horizontal: s < 0 ? "left" : n > 0 ? "right" : "center",
                                vertical: u < 0 ? "top" : o > 0 ? "bottom" : "middle"
                            };
                        l < f && i(n + s) < l && (h.horizontal = "center"), v < c && i(o + u) < v && (h.vertical = "middle"), r(i(n), i(s)) > r(i(o), i(u)) ? h.important = "horizontal" : h.important = "vertical", t.using.call(this, e, h)
                    }), a.offset(e.extend(C, {
                        using: u
                    }))
                })
            }, e.ui.position = {
                fit: {
                    left: function(e, t) {
                        var n = t.within,
                            i = n.isWindow ? n.scrollLeft : n.offset.left,
                            s = n.width,
                            o = e.left - t.collisionPosition.marginLeft,
                            u = i - o,
                            a = o + t.collisionWidth - s - i,
                            f;
                        t.collisionWidth > s ? u > 0 && a <= 0 ? (f = e.left + u + t.collisionWidth - s - i, e.left += u - f) : a > 0 && u <= 0 ? e.left = i : u > a ? e.left = i + s - t.collisionWidth : e.left = i : u > 0 ? e.left += u : a > 0 ? e.left -= a : e.left = r(e.left - o, e.left)
                    },
                    top: function(e, t) {
                        var n = t.within,
                            i = n.isWindow ? n.scrollTop : n.offset.top,
                            s = t.within.height,
                            o = e.top - t.collisionPosition.marginTop,
                            u = i - o,
                            a = o + t.collisionHeight - s - i,
                            f;
                        t.collisionHeight > s ? u > 0 && a <= 0 ? (f = e.top + u + t.collisionHeight - s - i, e.top += u - f) : a > 0 && u <= 0 ? e.top = i : u > a ? e.top = i + s - t.collisionHeight : e.top = i : u > 0 ? e.top += u : a > 0 ? e.top -= a : e.top = r(e.top - o, e.top)
                    }
                },
                flip: {
                    left: function(e, t) {
                        var n = t.within,
                            r = n.offset.left + n.scrollLeft,
                            s = n.width,
                            o = n.isWindow ? n.scrollLeft : n.offset.left,
                            u = e.left - t.collisionPosition.marginLeft,
                            a = u - o,
                            f = u + t.collisionWidth - s - o,
                            l = t.my[0] === "left" ? -t.elemWidth : t.my[0] === "right" ? t.elemWidth : 0,
                            c = t.at[0] === "left" ? t.targetWidth : t.at[0] === "right" ? -t.targetWidth : 0,
                            h = -2 * t.offset[0],
                            p, d;
                        if (a < 0) {
                            p = e.left + l + c + h + t.collisionWidth - s - r;
                            if (p < 0 || p < i(a)) e.left += l + c + h
                        } else if (f > 0) {
                            d = e.left - t.collisionPosition.marginLeft + l + c + h - o;
                            if (d > 0 || i(d) < f) e.left += l + c + h
                        }
                    },
                    top: function(e, t) {
                        var n = t.within,
                            r = n.offset.top + n.scrollTop,
                            s = n.height,
                            o = n.isWindow ? n.scrollTop : n.offset.top,
                            u = e.top - t.collisionPosition.marginTop,
                            a = u - o,
                            f = u + t.collisionHeight - s - o,
                            l = t.my[1] === "top",
                            c = l ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0,
                            h = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0,
                            p = -2 * t.offset[1],
                            d, v;
                        a < 0 ? (v = e.top + c + h + p + t.collisionHeight - s - r, e.top + c + h + p > a && (v < 0 || v < i(a)) && (e.top += c + h + p)) : f > 0 && (d = e.top - t.collisionPosition.marginTop + c + h + p - o, e.top + c + h + p > f && (d > 0 || i(d) < f) && (e.top += c + h + p))
                    }
                },
                flipfit: {
                    left: function() {
                        e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                    },
                    top: function() {
                        e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                    }
                }
            },
            function() {
                var t, n, r, i, s, o = document.getElementsByTagName("body")[0],
                    u = document.createElement("div");
                t = document.createElement(o ? "div" : "body"), r = {
                    visibility: "hidden",
                    width: 0,
                    height: 0,
                    border: 0,
                    margin: 0,
                    background: "none"
                }, o && e.extend(r, {
                    position: "absolute",
                    left: "-1000px",
                    top: "-1000px"
                });
                for (s in r) t.style[s] = r[s];
                t.appendChild(u), n = o || document.documentElement, n.insertBefore(t, n.firstChild), u.style.cssText = "position: absolute; left: 10.7432222px;", i = e(u).offset().left, e.support.offsetFractions = i > 10 && i < 11, t.innerHTML = "", n.removeChild(t)
            }()
    }(jQuery),
    function(e, t) {
        e.widget("ui.draggable", e.ui.mouse, {
            version: "1.10.4",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                this.options.helper === "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
            },
            _destroy: function() {
                this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
            },
            _mouseCapture: function(t) {
                var n = this.options;
                return this.helper || n.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function() {
                    e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                        width: this.offsetWidth + "px",
                        height: this.offsetHeight + "px",
                        position: "absolute",
                        opacity: "0.001",
                        zIndex: 1e3
                    }).css(e(this).offset()).appendTo("body")
                }), !0) : !1)
            },
            _mouseStart: function(t) {
                var n = this.options;
                return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, this.offset.scroll = !1, e.extend(this.offset, {
                    click: {
                        left: t.pageX - this.offset.left,
                        top: t.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
            },
            _mouseDrag: function(t, n) {
                this.offsetParentCssPosition === "fixed" && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute");
                if (!n) {
                    var r = this._uiHash();
                    if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
                    this.position = r.position
                }
                if (!this.options.axis || this.options.axis !== "y") this.helper[0].style.left = this.position.left + "px";
                if (!this.options.axis || this.options.axis !== "x") this.helper[0].style.top = this.position.top + "px";
                return e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
            },
            _mouseStop: function(t) {
                var n = this,
                    r = !1;
                return e.ui.ddmanager && !this.options.dropBehaviour && (r = e.ui.ddmanager.drop(this, t)), this.dropped && (r = this.dropped, this.dropped = !1), this.options.helper === "original" && !e.contains(this.element[0].ownerDocument, this.element[0]) ? !1 : (this.options.revert === "invalid" && !r || this.options.revert === "valid" && r || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, r) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    n._trigger("stop", t) !== !1 && n._clear()
                }) : this._trigger("stop", t) !== !1 && this._clear(), !1)
            },
            _mouseUp: function(t) {
                return e("div.ui-draggable-iframeFix").each(function() {
                    this.parentNode.removeChild(this)
                }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function(t) {
                return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
            },
            _createHelper: function(t) {
                var n = this.options,
                    r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : n.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
                return r.parents("body").length || r.appendTo(n.appendTo === "parent" ? this.element[0].parentNode : n.appendTo), r[0] !== this.element[0] && !/(fixed|absolute)/.test(r.css("position")) && r.css("position", "absolute"), r
            },
            _adjustOffsetFromHelper: function(t) {
                typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                var t = this.offsetParent.offset();
                this.cssPosition === "absolute" && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
                if (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && e.ui.ie) t = {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if (this.cssPosition === "relative") {
                    var e = this.element.position();
                    return {
                        top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var t, n, r, i = this.options;
                if (!i.containment) {
                    this.containment = null;
                    return
                }
                if (i.containment === "window") {
                    this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                    return
                }
                if (i.containment === "document") {
                    this.containment = [0, 0, e(document).width() - this.helperProportions.width - this.margins.left, (e(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                    return
                }
                if (i.containment.constructor === Array) {
                    this.containment = i.containment;
                    return
                }
                i.containment === "parent" && (i.containment = this.helper[0].parentNode), n = e(i.containment), r = n[0];
                if (!r) return;
                t = n.css("overflow") !== "hidden", this.containment = [(parseInt(n.css("borderLeftWidth"), 10) || 0) + (parseInt(n.css("paddingLeft"), 10) || 0), (parseInt(n.css("borderTopWidth"), 10) || 0) + (parseInt(n.css("paddingTop"), 10) || 0), (t ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) - (parseInt(n.css("borderRightWidth"), 10) || 0) - (parseInt(n.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) - (parseInt(n.css("borderBottomWidth"), 10) || 0) - (parseInt(n.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = n
            },
            _convertPositionTo: function(t, n) {
                n || (n = this.position);
                var r = t === "absolute" ? 1 : -1,
                    i = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
                return this.offset.scroll || (this.offset.scroll = {
                    top: i.scrollTop(),
                    left: i.scrollLeft()
                }), {
                    top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * r,
                    left: n.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * r
                }
            },
            _generatePosition: function(t) {
                var n, r, i, s, o = this.options,
                    u = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !!e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    a = t.pageX,
                    f = t.pageY;
                return this.offset.scroll || (this.offset.scroll = {
                    top: u.scrollTop(),
                    left: u.scrollLeft()
                }), this.originalPosition && (this.containment && (this.relative_container ? (r = this.relative_container.offset(), n = [this.containment[0] + r.left, this.containment[1] + r.top, this.containment[2] + r.left, this.containment[3] + r.top]) : n = this.containment, t.pageX - this.offset.click.left < n[0] && (a = n[0] + this.offset.click.left), t.pageY - this.offset.click.top < n[1] && (f = n[1] + this.offset.click.top), t.pageX - this.offset.click.left > n[2] && (a = n[2] + this.offset.click.left), t.pageY - this.offset.click.top > n[3] && (f = n[3] + this.offset.click.top)), o.grid && (i = o.grid[1] ? this.originalPageY + Math.round((f - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, f = n ? i - this.offset.click.top >= n[1] || i - this.offset.click.top > n[3] ? i : i - this.offset.click.top >= n[1] ? i - o.grid[1] : i + o.grid[1] : i, s = o.grid[0] ? this.originalPageX + Math.round((a - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, a = n ? s - this.offset.click.left >= n[0] || s - this.offset.click.left > n[2] ? s : s - this.offset.click.left >= n[0] ? s - o.grid[0] : s + o.grid[0] : s)), {
                    top: f - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                    left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
                }
            },
            _clear: function() {
                this.helper.removeClass("ui-draggable-dragging"), this.helper[0] !== this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
            },
            _trigger: function(t, n, r) {
                return r = r || this._uiHash(), e.ui.plugin.call(this, t, [n, r]), t === "drag" && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, n, r)
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), e.ui.plugin.add("draggable", "connectToSortable", {
            start: function(t, n) {
                var r = e(this).data("ui-draggable"),
                    i = r.options,
                    s = e.extend({}, n, {
                        item: r.element
                    });
                r.sortables = [], e(i.connectToSortable).each(function() {
                    var n = e.data(this, "ui-sortable");
                    n && !n.options.disabled && (r.sortables.push({
                        instance: n,
                        shouldRevert: n.options.revert
                    }), n.refreshPositions(), n._trigger("activate", t, s))
                })
            },
            stop: function(t, n) {
                var r = e(this).data("ui-draggable"),
                    i = e.extend({}, n, {
                        item: r.element
                    });
                e.each(r.sortables, function() {
                    this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, r.options.helper === "original" && this.instance.currentItem.css({
                        top: "auto",
                        left: "auto"
                    })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, i))
                })
            },
            drag: function(t, n) {
                var r = e(this).data("ui-draggable"),
                    i = this;
                e.each(r.sortables, function() {
                    var s = !1,
                        o = this;
                    this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (s = !0, e.each(r.sortables, function() {
                        return this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0]) && (s = !1), s
                    })), s ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(i).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                        return n.helper[0]
                    }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1)
                })
            }
        }), e.ui.plugin.add("draggable", "cursor", {
            start: function() {
                var t = e("body"),
                    n = e(this).data("ui-draggable").options;
                t.css("cursor") && (n._cursor = t.css("cursor")), t.css("cursor", n.cursor)
            },
            stop: function() {
                var t = e(this).data("ui-draggable").options;
                t._cursor && e("body").css("cursor", t._cursor)
            }
        }), e.ui.plugin.add("draggable", "opacity", {
            start: function(t, n) {
                var r = e(n.helper),
                    i = e(this).data("ui-draggable").options;
                r.css("opacity") && (i._opacity = r.css("opacity")), r.css("opacity", i.opacity)
            },
            stop: function(t, n) {
                var r = e(this).data("ui-draggable").options;
                r._opacity && e(n.helper).css("opacity", r._opacity)
            }
        }), e.ui.plugin.add("draggable", "scroll", {
            start: function() {
                var t = e(this).data("ui-draggable");
                t.scrollParent[0] !== document && t.scrollParent[0].tagName !== "HTML" && (t.overflowOffset = t.scrollParent.offset())
            },
            drag: function(t) {
                var n = e(this).data("ui-draggable"),
                    r = n.options,
                    i = !1;
                if (n.scrollParent[0] !== document && n.scrollParent[0].tagName !== "HTML") {
                    if (!r.axis || r.axis !== "x") n.overflowOffset.top + n.scrollParent[0].offsetHeight - t.pageY < r.scrollSensitivity ? n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop + r.scrollSpeed : t.pageY - n.overflowOffset.top < r.scrollSensitivity && (n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop - r.scrollSpeed);
                    if (!r.axis || r.axis !== "y") n.overflowOffset.left + n.scrollParent[0].offsetWidth - t.pageX < r.scrollSensitivity ? n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft + r.scrollSpeed : t.pageX - n.overflowOffset.left < r.scrollSensitivity && (n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft - r.scrollSpeed)
                } else {
                    if (!r.axis || r.axis !== "x") t.pageY - e(document).scrollTop() < r.scrollSensitivity ? i = e(document).scrollTop(e(document).scrollTop() - r.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < r.scrollSensitivity && (i = e(document).scrollTop(e(document).scrollTop() + r.scrollSpeed));
                    if (!r.axis || r.axis !== "y") t.pageX - e(document).scrollLeft() < r.scrollSensitivity ? i = e(document).scrollLeft(e(document).scrollLeft() - r.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < r.scrollSensitivity && (i = e(document).scrollLeft(e(document).scrollLeft() + r.scrollSpeed))
                }
                i !== !1 && e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t)
            }
        }), e.ui.plugin.add("draggable", "snap", {
            start: function() {
                var t = e(this).data("ui-draggable"),
                    n = t.options;
                t.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                    var n = e(this),
                        r = n.offset();
                    this !== t.element[0] && t.snapElements.push({
                        item: this,
                        width: n.outerWidth(),
                        height: n.outerHeight(),
                        top: r.top,
                        left: r.left
                    })
                })
            },
            drag: function(t, n) {
                var r, i, s, o, u, a, f, l, c, h, p = e(this).data("ui-draggable"),
                    d = p.options,
                    v = d.snapTolerance,
                    m = n.offset.left,
                    g = m + p.helperProportions.width,
                    y = n.offset.top,
                    b = y + p.helperProportions.height;
                for (c = p.snapElements.length - 1; c >= 0; c--) {
                    u = p.snapElements[c].left, a = u + p.snapElements[c].width, f = p.snapElements[c].top, l = f + p.snapElements[c].height;
                    if (g < u - v || m > a + v || b < f - v || y > l + v || !e.contains(p.snapElements[c].item.ownerDocument, p.snapElements[c].item)) {
                        p.snapElements[c].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), {
                            snapItem: p.snapElements[c].item
                        })), p.snapElements[c].snapping = !1;
                        continue
                    }
                    d.snapMode !== "inner" && (r = Math.abs(f - b) <= v, i = Math.abs(l - y) <= v, s = Math.abs(u - g) <= v, o = Math.abs(a - m) <= v, r && (n.position.top = p._convertPositionTo("relative", {
                        top: f - p.helperProportions.height,
                        left: 0
                    }).top - p.margins.top), i && (n.position.top = p._convertPositionTo("relative", {
                        top: l,
                        left: 0
                    }).top - p.margins.top), s && (n.position.left = p._convertPositionTo("relative", {
                        top: 0,
                        left: u - p.helperProportions.width
                    }).left - p.margins.left), o && (n.position.left = p._convertPositionTo("relative", {
                        top: 0,
                        left: a
                    }).left - p.margins.left)), h = r || i || s || o, d.snapMode !== "outer" && (r = Math.abs(f - y) <= v, i = Math.abs(l - b) <= v, s = Math.abs(u - m) <= v, o = Math.abs(a - g) <= v, r && (n.position.top = p._convertPositionTo("relative", {
                        top: f,
                        left: 0
                    }).top - p.margins.top), i && (n.position.top = p._convertPositionTo("relative", {
                        top: l - p.helperProportions.height,
                        left: 0
                    }).top - p.margins.top), s && (n.position.left = p._convertPositionTo("relative", {
                        top: 0,
                        left: u
                    }).left - p.margins.left), o && (n.position.left = p._convertPositionTo("relative", {
                        top: 0,
                        left: a - p.helperProportions.width
                    }).left - p.margins.left)), !p.snapElements[c].snapping && (r || i || s || o || h) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), {
                        snapItem: p.snapElements[c].item
                    })), p.snapElements[c].snapping = r || i || s || o || h
                }
            }
        }), e.ui.plugin.add("draggable", "stack", {
            start: function() {
                var t, n = this.data("ui-draggable").options,
                    r = e.makeArray(e(n.stack)).sort(function(t, n) {
                        return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
                    });
                if (!r.length) return;
                t = parseInt(e(r[0]).css("zIndex"), 10) || 0, e(r).each(function(n) {
                    e(this).css("zIndex", t + n)
                }), this.css("zIndex", t + r.length)
            }
        }), e.ui.plugin.add("draggable", "zIndex", {
            start: function(t, n) {
                var r = e(n.helper),
                    i = e(this).data("ui-draggable").options;
                r.css("zIndex") && (i._zIndex = r.css("zIndex")), r.css("zIndex", i.zIndex)
            },
            stop: function(t, n) {
                var r = e(this).data("ui-draggable").options;
                r._zIndex && e(n.helper).css("zIndex", r._zIndex)
            }
        })
    }(jQuery),
    function(e, t) {
        function n(e) {
            return parseInt(e, 10) || 0
        }

        function r(e) {
            return !isNaN(parseInt(e, 10))
        }
        e.widget("ui.resizable", e.ui.mouse, {
            version: "1.10.4",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _create: function() {
                var t, n, r, i, s, o = this,
                    u = this.options;
                this.element.addClass("ui-resizable"), e.extend(this, {
                    _aspectRatio: !!u.aspectRatio,
                    aspectRatio: u.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: u.helper || u.ghost || u.animate ? u.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = u.handles || (e(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se");
                if (this.handles.constructor === String) {
                    this.handles === "all" && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {};
                    for (n = 0; n < t.length; n++) r = e.trim(t[n]), s = "ui-resizable-" + r, i = e("<div class='ui-resizable-handle " + s + "'></div>"), i.css({
                        zIndex: u.zIndex
                    }), "se" === r && i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[r] = ".ui-resizable-" + r, this.element.append(i)
                }
                this._renderAxis = function(t) {
                    var n, r, i, s;
                    t = t || this.element;
                    for (n in this.handles) {
                        this.handles[n].constructor === String && (this.handles[n] = e(this.handles[n], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (r = e(this.handles[n], this.element), s = /sw|ne|nw|se|n|s/.test(n) ? r.outerHeight() : r.outerWidth(), i = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join(""), t.css(i, s), this._proportionallyResize());
                        if (!e(this.handles[n]).length) continue
                    }
                }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                    o.resizing || (this.className && (i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = i && i[1] ? i[1] : "se")
                }), u.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                    if (u.disabled) return;
                    e(this).removeClass("ui-resizable-autohide"), o._handles.show()
                }).mouseleave(function() {
                    if (u.disabled) return;
                    o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide())
                })), this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var t, n = function(t) {
                    e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (n(this.element), t = this.element, this.originalElement.css({
                    position: t.css("position"),
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: t.css("top"),
                    left: t.css("left")
                }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), n(this.originalElement), this
            },
            _mouseCapture: function(t) {
                var n, r, i = !1;
                for (n in this.handles) {
                    r = e(this.handles[n])[0];
                    if (r === t.target || e.contains(r, t.target)) i = !0
                }
                return !this.options.disabled && i
            },
            _mouseStart: function(t) {
                var r, i, s, o = this.options,
                    u = this.element.position(),
                    a = this.element;
                return this.resizing = !0, /absolute/.test(a.css("position")) ? a.css({
                    position: "absolute",
                    top: a.css("top"),
                    left: a.css("left")
                }) : a.is(".ui-draggable") && a.css({
                    position: "absolute",
                    top: u.top,
                    left: u.left
                }), this._renderProxy(), r = n(this.helper.css("left")), i = n(this.helper.css("top")), o.containment && (r += e(o.containment).scrollLeft() || 0, i += e(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: r,
                    top: i
                }, this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {
                    width: a.width(),
                    height: a.height()
                }, this.originalSize = this._helper ? {
                    width: a.outerWidth(),
                    height: a.outerHeight()
                } : {
                    width: a.width(),
                    height: a.height()
                }, this.originalPosition = {
                    left: r,
                    top: i
                }, this.sizeDiff = {
                    width: a.outerWidth() - a.width(),
                    height: a.outerHeight() - a.height()
                }, this.originalMousePosition = {
                    left: t.pageX,
                    top: t.pageY
                }, this.aspectRatio = typeof o.aspectRatio == "number" ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", s === "auto" ? this.axis + "-resize" : s), a.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
            },
            _mouseDrag: function(t) {
                var n, r = this.helper,
                    i = {},
                    s = this.originalMousePosition,
                    o = this.axis,
                    u = this.position.top,
                    a = this.position.left,
                    f = this.size.width,
                    l = this.size.height,
                    c = t.pageX - s.left || 0,
                    h = t.pageY - s.top || 0,
                    p = this._change[o];
                if (!p) return !1;
                n = p.apply(this, [t, c, h]), this._updateVirtualBoundaries(t.shiftKey);
                if (this._aspectRatio || t.shiftKey) n = this._updateRatio(n, t);
                return n = this._respectSize(n, t), this._updateCache(n), this._propagate("resize", t), this.position.top !== u && (i.top = this.position.top + "px"), this.position.left !== a && (i.left = this.position.left + "px"), this.size.width !== f && (i.width = this.size.width + "px"), this.size.height !== l && (i.height = this.size.height + "px"), r.css(i), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(i) || this._trigger("resize", t, this.ui()), !1
            },
            _mouseStop: function(t) {
                this.resizing = !1;
                var n, r, i, s, o, u, a, f = this.options,
                    l = this;
                return this._helper && (n = this._proportionallyResizeElements, r = n.length && /textarea/i.test(n[0].nodeName), i = r && e.ui.hasScroll(n[0], "left") ? 0 : l.sizeDiff.height, s = r ? 0 : l.sizeDiff.width, o = {
                    width: l.helper.width() - s,
                    height: l.helper.height() - i
                }, u = parseInt(l.element.css("left"), 10) + (l.position.left - l.originalPosition.left) || null, a = parseInt(l.element.css("top"), 10) + (l.position.top - l.originalPosition.top) || null, f.animate || this.element.css(e.extend(o, {
                    top: a,
                    left: u
                })), l.helper.height(l.size.height), l.helper.width(l.size.width), this._helper && !f.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
            },
            _updateVirtualBoundaries: function(e) {
                var t, n, i, s, o, u = this.options;
                o = {
                    minWidth: r(u.minWidth) ? u.minWidth : 0,
                    maxWidth: r(u.maxWidth) ? u.maxWidth : Infinity,
                    minHeight: r(u.minHeight) ? u.minHeight : 0,
                    maxHeight: r(u.maxHeight) ? u.maxHeight : Infinity
                };
                if (this._aspectRatio || e) t = o.minHeight * this.aspectRatio, i = o.minWidth / this.aspectRatio, n = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, t > o.minWidth && (o.minWidth = t), i > o.minHeight && (o.minHeight = i), n < o.maxWidth && (o.maxWidth = n), s < o.maxHeight && (o.maxHeight = s);
                this._vBoundaries = o
            },
            _updateCache: function(e) {
                this.offset = this.helper.offset(), r(e.left) && (this.position.left = e.left), r(e.top) && (this.position.top = e.top), r(e.height) && (this.size.height = e.height), r(e.width) && (this.size.width = e.width)
            },
            _updateRatio: function(e) {
                var t = this.position,
                    n = this.size,
                    i = this.axis;
                return r(e.height) ? e.width = e.height * this.aspectRatio : r(e.width) && (e.height = e.width / this.aspectRatio), i === "sw" && (e.left = t.left + (n.width - e.width), e.top = null), i === "nw" && (e.top = t.top + (n.height - e.height), e.left = t.left + (n.width - e.width)), e
            },
            _respectSize: function(e) {
                var t = this._vBoundaries,
                    n = this.axis,
                    i = r(e.width) && t.maxWidth && t.maxWidth < e.width,
                    s = r(e.height) && t.maxHeight && t.maxHeight < e.height,
                    o = r(e.width) && t.minWidth && t.minWidth > e.width,
                    u = r(e.height) && t.minHeight && t.minHeight > e.height,
                    a = this.originalPosition.left + this.originalSize.width,
                    f = this.position.top + this.size.height,
                    l = /sw|nw|w/.test(n),
                    c = /nw|ne|n/.test(n);
                return o && (e.width = t.minWidth), u && (e.height = t.minHeight), i && (e.width = t.maxWidth), s && (e.height = t.maxHeight), o && l && (e.left = a - t.minWidth), i && l && (e.left = a - t.maxWidth), u && c && (e.top = f - t.minHeight), s && c && (e.top = f - t.maxHeight), !e.width && !e.height && !e.left && e.top ? e.top = null : !e.width && !e.height && !e.top && e.left && (e.left = null), e
            },
            _proportionallyResize: function() {
                if (!this._proportionallyResizeElements.length) return;
                var e, t, n, r, i, s = this.helper || this.element;
                for (e = 0; e < this._proportionallyResizeElements.length; e++) {
                    i = this._proportionallyResizeElements[e];
                    if (!this.borderDif) {
                        this.borderDif = [], n = [i.css("borderTopWidth"), i.css("borderRightWidth"), i.css("borderBottomWidth"), i.css("borderLeftWidth")], r = [i.css("paddingTop"), i.css("paddingRight"), i.css("paddingBottom"), i.css("paddingLeft")];
                        for (t = 0; t < n.length; t++) this.borderDif[t] = (parseInt(n[t], 10) || 0) + (parseInt(r[t], 10) || 0)
                    }
                    i.css({
                        height: s.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: s.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            },
            _renderProxy: function() {
                var t = this.element,
                    n = this.options;
                this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++n.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(e, t) {
                    return {
                        width: this.originalSize.width + t
                    }
                },
                w: function(e, t) {
                    var n = this.originalSize,
                        r = this.originalPosition;
                    return {
                        left: r.left + t,
                        width: n.width - t
                    }
                },
                n: function(e, t, n) {
                    var r = this.originalSize,
                        i = this.originalPosition;
                    return {
                        top: i.top + n,
                        height: r.height - n
                    }
                },
                s: function(e, t, n) {
                    return {
                        height: this.originalSize.height + n
                    }
                },
                se: function(t, n, r) {
                    return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
                },
                sw: function(t, n, r) {
                    return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
                },
                ne: function(t, n, r) {
                    return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
                },
                nw: function(t, n, r) {
                    return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
                }
            },
            _propagate: function(t, n) {
                e.ui.plugin.call(this, t, [n, this.ui()]), t !== "resize" && this._trigger(t, n, this.ui())
            },
            plugins: {},
            ui: function() {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }), e.ui.plugin.add("resizable", "animate", {
            stop: function(t) {
                var n = e(this).data("ui-resizable"),
                    r = n.options,
                    i = n._proportionallyResizeElements,
                    s = i.length && /textarea/i.test(i[0].nodeName),
                    o = s && e.ui.hasScroll(i[0], "left") ? 0 : n.sizeDiff.height,
                    u = s ? 0 : n.sizeDiff.width,
                    a = {
                        width: n.size.width - u,
                        height: n.size.height - o
                    },
                    f = parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left) || null,
                    l = parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top) || null;
                n.element.animate(e.extend(a, l && f ? {
                    top: l,
                    left: f
                } : {}), {
                    duration: r.animateDuration,
                    easing: r.animateEasing,
                    step: function() {
                        var r = {
                            width: parseInt(n.element.css("width"), 10),
                            height: parseInt(n.element.css("height"), 10),
                            top: parseInt(n.element.css("top"), 10),
                            left: parseInt(n.element.css("left"), 10)
                        };
                        i && i.length && e(i[0]).css({
                            width: r.width,
                            height: r.height
                        }), n._updateCache(r), n._propagate("resize", t)
                    }
                })
            }
        }), e.ui.plugin.add("resizable", "containment", {
            start: function() {
                var t, r, i, s, o, u, a, f = e(this).data("ui-resizable"),
                    l = f.options,
                    c = f.element,
                    h = l.containment,
                    p = h instanceof e ? h.get(0) : /parent/.test(h) ? c.parent().get(0) : h;
                if (!p) return;
                f.containerElement = e(p), /document/.test(h) || h === document ? (f.containerOffset = {
                    left: 0,
                    top: 0
                }, f.containerPosition = {
                    left: 0,
                    top: 0
                }, f.parentData = {
                    element: e(document),
                    left: 0,
                    top: 0,
                    width: e(document).width(),
                    height: e(document).height() || document.body.parentNode.scrollHeight
                }) : (t = e(p), r = [], e(["Top", "Right", "Left", "Bottom"]).each(function(e, i) {
                    r[e] = n(t.css("padding" + i))
                }), f.containerOffset = t.offset(), f.containerPosition = t.position(), f.containerSize = {
                    height: t.innerHeight() - r[3],
                    width: t.innerWidth() - r[1]
                }, i = f.containerOffset, s = f.containerSize.height, o = f.containerSize.width, u = e.ui.hasScroll(p, "left") ? p.scrollWidth : o, a = e.ui.hasScroll(p) ? p.scrollHeight : s, f.parentData = {
                    element: p,
                    left: i.left,
                    top: i.top,
                    width: u,
                    height: a
                })
            },
            resize: function(t) {
                var n, r, i, s, o = e(this).data("ui-resizable"),
                    u = o.options,
                    a = o.containerOffset,
                    f = o.position,
                    l = o._aspectRatio || t.shiftKey,
                    c = {
                        top: 0,
                        left: 0
                    },
                    h = o.containerElement;
                h[0] !== document && /static/.test(h.css("position")) && (c = a), f.left < (o._helper ? a.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - a.left : o.position.left - c.left), l && (o.size.height = o.size.width / o.aspectRatio), o.position.left = u.helper ? a.left : 0), f.top < (o._helper ? a.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - a.top : o.position.top), l && (o.size.width = o.size.height * o.aspectRatio), o.position.top = o._helper ? a.top : 0), o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top, n = Math.abs((o._helper ? o.offset.left - c.left : o.offset.left - c.left) + o.sizeDiff.width), r = Math.abs((o._helper ? o.offset.top - c.top : o.offset.top - a.top) + o.sizeDiff.height), i = o.containerElement.get(0) === o.element.parent().get(0), s = /relative|absolute/.test(o.containerElement.css("position")), i && s && (n -= Math.abs(o.parentData.left)), n + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - n, l && (o.size.height = o.size.width / o.aspectRatio)), r + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - r, l && (o.size.width = o.size.height * o.aspectRatio))
            },
            stop: function() {
                var t = e(this).data("ui-resizable"),
                    n = t.options,
                    r = t.containerOffset,
                    i = t.containerPosition,
                    s = t.containerElement,
                    o = e(t.helper),
                    u = o.offset(),
                    a = o.outerWidth() - t.sizeDiff.width,
                    f = o.outerHeight() - t.sizeDiff.height;
                t._helper && !n.animate && /relative/.test(s.css("position")) && e(this).css({
                    left: u.left - i.left - r.left,
                    width: a,
                    height: f
                }), t._helper && !n.animate && /static/.test(s.css("position")) && e(this).css({
                    left: u.left - i.left - r.left,
                    width: a,
                    height: f
                })
            }
        }), e.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var t = e(this).data("ui-resizable"),
                    n = t.options,
                    r = function(t) {
                        e(t).each(function() {
                            var t = e(this);
                            t.data("ui-resizable-alsoresize", {
                                width: parseInt(t.width(), 10),
                                height: parseInt(t.height(), 10),
                                left: parseInt(t.css("left"), 10),
                                top: parseInt(t.css("top"), 10)
                            })
                        })
                    };
                typeof n.alsoResize == "object" && !n.alsoResize.parentNode ? n.alsoResize.length ? (n.alsoResize = n.alsoResize[0], r(n.alsoResize)) : e.each(n.alsoResize, function(e) {
                    r(e)
                }) : r(n.alsoResize)
            },
            resize: function(t, n) {
                var r = e(this).data("ui-resizable"),
                    i = r.options,
                    s = r.originalSize,
                    o = r.originalPosition,
                    u = {
                        height: r.size.height - s.height || 0,
                        width: r.size.width - s.width || 0,
                        top: r.position.top - o.top || 0,
                        left: r.position.left - o.left || 0
                    },
                    a = function(t, r) {
                        e(t).each(function() {
                            var t = e(this),
                                i = e(this).data("ui-resizable-alsoresize"),
                                s = {},
                                o = r && r.length ? r : t.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                            e.each(o, function(e, t) {
                                var n = (i[t] || 0) + (u[t] || 0);
                                n && n >= 0 && (s[t] = n || null)
                            }), t.css(s)
                        })
                    };
                typeof i.alsoResize == "object" && !i.alsoResize.nodeType ? e.each(i.alsoResize, function(e, t) {
                    a(e, t)
                }) : a(i.alsoResize)
            },
            stop: function() {
                e(this).removeData("resizable-alsoresize")
            }
        }), e.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var t = e(this).data("ui-resizable"),
                    n = t.options,
                    r = t.size;
                t.ghost = t.originalElement.clone(), t.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: r.height,
                    width: r.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass(typeof n.ghost == "string" ? n.ghost : ""), t.ghost.appendTo(t.helper)
            },
            resize: function() {
                var t = e(this).data("ui-resizable");
                t.ghost && t.ghost.css({
                    position: "relative",
                    height: t.size.height,
                    width: t.size.width
                })
            },
            stop: function() {
                var t = e(this).data("ui-resizable");
                t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
            }
        }), e.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var t = e(this).data("ui-resizable"),
                    n = t.options,
                    r = t.size,
                    i = t.originalSize,
                    s = t.originalPosition,
                    o = t.axis,
                    u = typeof n.grid == "number" ? [n.grid, n.grid] : n.grid,
                    a = u[0] || 1,
                    f = u[1] || 1,
                    l = Math.round((r.width - i.width) / a) * a,
                    c = Math.round((r.height - i.height) / f) * f,
                    h = i.width + l,
                    p = i.height + c,
                    d = n.maxWidth && n.maxWidth < h,
                    v = n.maxHeight && n.maxHeight < p,
                    m = n.minWidth && n.minWidth > h,
                    g = n.minHeight && n.minHeight > p;
                n.grid = u, m && (h += a), g && (p += f), d && (h -= a), v && (p -= f), /^(se|s|e)$/.test(o) ? (t.size.width = h, t.size.height = p) : /^(ne)$/.test(o) ? (t.size.width = h, t.size.height = p, t.position.top = s.top - c) : /^(sw)$/.test(o) ? (t.size.width = h, t.size.height = p, t.position.left = s.left - l) : (p - f > 0 ? (t.size.height = p, t.position.top = s.top - c) : (t.size.height = f, t.position.top = s.top + i.height - f), h - a > 0 ? (t.size.width = h, t.position.left = s.left - l) : (t.size.width = a, t.position.left = s.left + i.width - a))
            }
        })
    }(jQuery),
    function(e, t) {
        e.widget("ui.autocomplete", {
            version: "1.10.4",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function() {
                var t, n, r, i = this.element[0].nodeName.toLowerCase(),
                    s = i === "textarea",
                    o = i === "input";
                this.isMultiLine = s ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[s || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(i) {
                        if (this.element.prop("readOnly")) {
                            t = !0, r = !0, n = !0;
                            return
                        }
                        t = !1, r = !1, n = !1;
                        var s = e.ui.keyCode;
                        switch (i.keyCode) {
                            case s.PAGE_UP:
                                t = !0, this._move("previousPage", i);
                                break;
                            case s.PAGE_DOWN:
                                t = !0, this._move("nextPage", i);
                                break;
                            case s.UP:
                                t = !0, this._keyEvent("previous", i);
                                break;
                            case s.DOWN:
                                t = !0, this._keyEvent("next", i);
                                break;
                            case s.ENTER:
                            case s.NUMPAD_ENTER:
                                this.menu.active && (t = !0, i.preventDefault(), this.menu.select(i));
                                break;
                            case s.TAB:
                                this.menu.active && this.menu.select(i);
                                break;
                            case s.ESCAPE:
                                this.menu.element.is(":visible") && (this._value(this.term), this.close(i), i.preventDefault());
                                break;
                            default:
                                n = !0, this._searchTimeout(i)
                        }
                    },
                    keypress: function(r) {
                        if (t) {
                            t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && r.preventDefault();
                            return
                        }
                        if (n) return;
                        var i = e.ui.keyCode;
                        switch (r.keyCode) {
                            case i.PAGE_UP:
                                this._move("previousPage", r);
                                break;
                            case i.PAGE_DOWN:
                                this._move("nextPage", r);
                                break;
                            case i.UP:
                                this._keyEvent("previous", r);
                                break;
                            case i.DOWN:
                                this._keyEvent("next", r)
                        }
                    },
                    input: function(e) {
                        if (r) {
                            r = !1, e.preventDefault();
                            return
                        }
                        this._searchTimeout(e)
                    },
                    focus: function() {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function(e) {
                        if (this.cancelBlur) {
                            delete this.cancelBlur;
                            return
                        }
                        clearTimeout(this.searching), this.close(e), this._change(e)
                    }
                }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().data("ui-menu"), this._on(this.menu.element, {
                    mousedown: function(t) {
                        t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur
                        });
                        var n = this.menu.element[0];
                        e(t.target).closest(".ui-menu-item").length || this._delay(function() {
                            var t = this;
                            this.document.one("mousedown", function(r) {
                                r.target !== t.element[0] && r.target !== n && !e.contains(n, r.target) && t.close()
                            })
                        })
                    },
                    menufocus: function(t, n) {
                        if (this.isNewMenu) {
                            this.isNewMenu = !1;
                            if (t.originalEvent && /^mouse/.test(t.originalEvent.type)) {
                                this.menu.blur(), this.document.one("mousemove", function() {
                                    e(t.target).trigger(t.originalEvent)
                                });
                                return
                            }
                        }
                        var r = n.item.data("ui-autocomplete-item");
                        !1 !== this._trigger("focus", t, {
                            item: r
                        }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(r.value) : this.liveRegion.text(r.value)
                    },
                    menuselect: function(e, t) {
                        var n = t.item.data("ui-autocomplete-item"),
                            r = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = r, this._delay(function() {
                            this.previous = r, this.selectedItem = n
                        })), !1 !== this._trigger("select", e, {
                            item: n
                        }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
                    }
                }), this.liveRegion = e("<span>", {
                    role: "status",
                    "aria-live": "polite"
                }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function(e, t) {
                this._super(e, t), e === "source" && this._initSource(), e === "appendTo" && this.menu.element.appendTo(this._appendTo()), e === "disabled" && t && this.xhr && this.xhr.abort()
            },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
            },
            _initSource: function() {
                var t, n, r = this;
                e.isArray(this.options.source) ? (t = this.options.source, this.source = function(n, r) {
                    r(e.ui.autocomplete.filter(t, n.term))
                }) : typeof this.options.source == "string" ? (n = this.options.source, this.source = function(t, i) {
                    r.xhr && r.xhr.abort(), r.xhr = e.ajax({
                        url: n,
                        data: t,
                        dataType: "json",
                        success: function(e) {
                            i(e)
                        },
                        error: function() {
                            i([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(e) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
                }, this.options.delay)
            },
            search: function(e, t) {
                e = e != null ? e : this._value(), this.term = this._value();
                if (e.length < this.options.minLength) return this.close(t);
                if (this._trigger("search", t) === !1) return;
                return this._search(e)
            },
            _search: function(e) {
                this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: e
                }, this._response())
            },
            _response: function() {
                var t = ++this.requestIndex;
                return e.proxy(function(e) {
                    t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function(e) {
                e && (e = this._normalize(e)), this._trigger("response", null, {
                    content: e
                }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
            },
            close: function(e) {
                this.cancelSearch = !0, this._close(e)
            },
            _close: function(e) {
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
            },
            _change: function(e) {
                this.previous !== this._value() && this._trigger("change", e, {
                    item: this.selectedItem
                })
            },
            _normalize: function(t) {
                return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                    return typeof t == "string" ? {
                        label: t,
                        value: t
                    } : e.extend({
                        label: t.label || t.value,
                        value: t.value || t.label
                    }, t)
                })
            },
            _suggest: function(t) {
                var n = this.menu.element.empty();
                this._renderMenu(n, t), this.isNewMenu = !0, this.menu.refresh(), n.show(), this._resizeMenu(), n.position(e.extend({
                    of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function() {
                var e = this.menu.element;
                e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(t, n) {
                var r = this;
                e.each(n, function(e, n) {
                    r._renderItemData(t, n)
                })
            },
            _renderItemData: function(e, t) {
                return this._renderItem(e, t).data("ui-autocomplete-item", t)
            },
            _renderItem: function(t, n) {
                return e("<li>").append(e("<a>").text(n.label)).appendTo(t)
            },
            _move: function(e, t) {
                if (!this.menu.element.is(":visible")) {
                    this.search(null, t);
                    return
                }
                if (this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e)) {
                    this._value(this.term), this.menu.blur();
                    return
                }
                this.menu[e](t)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(e, t) {
                if (!this.isMultiLine || this.menu.element.is(":visible")) this._move(e, t), t.preventDefault()
            }
        }), e.extend(e.ui.autocomplete, {
            escapeRegex: function(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(t, n) {
                var r = new RegExp(e.ui.autocomplete.escapeRegex(n), "i");
                return e.grep(t, function(e) {
                    return r.test(e.label || e.value || e)
                })
            }
        }), e.widget("ui.autocomplete", e.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(e) {
                        return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(e) {
                var t;
                this._superApply(arguments);
                if (this.options.disabled || this.cancelSearch) return;
                e && e.length ? t = this.options.messages.results(e.length) : t = this.options.messages.noResults, this.liveRegion.text(t)
            }
        })
    }(jQuery),
    function(e, t) {
        var n, r = "ui-button ui-widget ui-state-default ui-corner-all",
            i = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
            s = function() {
                var t = e(this);
                setTimeout(function() {
                    t.find(":ui-button").button("refresh")
                }, 1)
            },
            o = function(t) {
                var n = t.name,
                    r = t.form,
                    i = e([]);
                return n && (n = n.replace(/'/g, "\\'"), r ? i = e(r).find("[name='" + n + "']") : i = e("[name='" + n + "']", t.ownerDocument).filter(function() {
                    return !this.form
                })), i
            };
        e.widget("ui.button", {
            version: "1.10.4",
            defaultElement: "<button>",
            options: {
                disabled: null,
                text: !0,
                label: null,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, s), typeof this.options.disabled != "boolean" ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
                var t = this,
                    i = this.options,
                    u = this.type === "checkbox" || this.type === "radio",
                    a = u ? "" : "ui-state-active";
                i.label === null && (i.label = this.type === "input" ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(r).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                    if (i.disabled) return;
                    this === n && e(this).addClass("ui-state-active")
                }).bind("mouseleave" + this.eventNamespace, function() {
                    if (i.disabled) return;
                    e(this).removeClass(a)
                }).bind("click" + this.eventNamespace, function(e) {
                    i.disabled && (e.preventDefault(), e.stopImmediatePropagation())
                }), this._on({
                    focus: function() {
                        this.buttonElement.addClass("ui-state-focus")
                    },
                    blur: function() {
                        this.buttonElement.removeClass("ui-state-focus")
                    }
                }), u && this.element.bind("change" + this.eventNamespace, function() {
                    t.refresh()
                }), this.type === "checkbox" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (i.disabled) return !1
                }) : this.type === "radio" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (i.disabled) return !1;
                    e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");
                    var n = t.element[0];
                    o(n).not(n).map(function() {
                        return e(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                    if (i.disabled) return !1;
                    e(this).addClass("ui-state-active"), n = this, t.document.one("mouseup", function() {
                        n = null
                    })
                }).bind("mouseup" + this.eventNamespace, function() {
                    if (i.disabled) return !1;
                    e(this).removeClass("ui-state-active")
                }).bind("keydown" + this.eventNamespace, function(t) {
                    if (i.disabled) return !1;
                    (t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active")
                }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                    e(this).removeClass("ui-state-active")
                }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                    t.keyCode === e.ui.keyCode.SPACE && e(this).click()
                })), this._setOption("disabled", i.disabled), this._resetButton()
            },
            _determineButtonType: function() {
                var e, t, n;
                this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", this.type === "checkbox" || this.type === "radio" ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), n = this.element.is(":checked"), n && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", n)) : this.buttonElement = this.element
            },
            widget: function() {
                return this.buttonElement
            },
            _destroy: function() {
                this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(r + " ui-state-active " + i).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
            },
            _setOption: function(e, t) {
                this._super(e, t);
                if (e === "disabled") {
                    this.element.prop("disabled", !!t), t && this.buttonElement.removeClass("ui-state-focus");
                    return
                }
                this._resetButton()
            },
            refresh: function() {
                var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                t !== this.options.disabled && this._setOption("disabled", t), this.type === "radio" ? o(this.element[0]).each(function() {
                    e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
            },
            _resetButton: function() {
                if (this.type === "input") {
                    this.options.label && this.element.val(this.options.label);
                    return
                }
                var t = this.buttonElement.removeClass(i),
                    n = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                    r = this.options.icons,
                    s = r.primary && r.secondary,
                    o = [];
                r.primary || r.secondary ? (this.options.text && o.push("ui-button-text-icon" + (s ? "s" : r.primary ? "-primary" : "-secondary")), r.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + r.primary + "'></span>"), r.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + r.secondary + "'></span>"), this.options.text || (o.push(s ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(n)))) : o.push("ui-button-text-only"), t.addClass(o.join(" "))
            }
        }), e.widget("ui.buttonset", {
            version: "1.10.4",
            options: {
                items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
            },
            _create: function() {
                this.element.addClass("ui-buttonset")
            },
            _init: function() {
                this.refresh()
            },
            _setOption: function(e, t) {
                e === "disabled" && this.buttons.button("option", e, t), this._super(e, t)
            },
            refresh: function() {
                var t = this.element.css("direction") === "rtl";
                this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                    return e(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
            },
            _destroy: function() {
                this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                    return e(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
            }
        })
    }(jQuery),
    function(e, t) {
        function i() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, e.extend(this._defaults, this.regional[""]), this.dpDiv = s(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function s(t) {
            var n = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.delegate(n, "mouseout", function() {
                e(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && e(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && e(this).removeClass("ui-datepicker-next-hover")
            }).delegate(n, "mouseover", function() {
                e.datepicker._isDisabledDatepicker(r.inline ? t.parent()[0] : r.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && e(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && e(this).addClass("ui-datepicker-next-hover"))
            })
        }

        function o(t, n) {
            e.extend(t, n);
            for (var r in n) n[r] == null && (t[r] = n[r]);
            return t
        }
        e.extend(e.ui, {
            datepicker: {
                version: "1.10.4"
            }
        });
        var n = "datepicker",
            r;
        e.extend(i.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(e) {
                return o(this._defaults, e || {}), this
            },
            _attachDatepicker: function(t, n) {
                var r, i, s;
                r = t.nodeName.toLowerCase(), i = r === "div" || r === "span", t.id || (this.uuid += 1, t.id = "dp" + this.uuid), s = this._newInst(e(t), i), s.settings = e.extend({}, n || {}), r === "input" ? this._connectDatepicker(t, s) : i && this._inlineDatepicker(t, s)
            },
            _newInst: function(t, n) {
                var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                return {
                    id: r,
                    input: t,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: n,
                    dpDiv: n ? s(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function(t, r) {
                var i = e(t);
                r.append = e([]), r.trigger = e([]);
                if (i.hasClass(this.markerClassName)) return;
                this._attachments(i, r), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(r), e.data(t, n, r), r.settings.disabled && this._disableDatepicker(t)
            },
            _attachments: function(t, n) {
                var r, i, s, o = this._get(n, "appendText"),
                    u = this._get(n, "isRTL");
                n.append && n.append.remove(), o && (n.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[u ? "before" : "after"](n.append)), t.unbind("focus", this._showDatepicker), n.trigger && n.trigger.remove(), r = this._get(n, "showOn"), (r === "focus" || r === "both") && t.focus(this._showDatepicker);
                if (r === "button" || r === "both") i = this._get(n, "buttonText"), s = this._get(n, "buttonImage"), n.trigger = e(this._get(n, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                    src: s,
                    alt: i,
                    title: i
                }) : e("<button type='button'></button>").addClass(this._triggerClass).html(s ? e("<img/>").attr({
                    src: s,
                    alt: i,
                    title: i
                }) : i)), t[u ? "before" : "after"](n.trigger), n.trigger.click(function() {
                    return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
                })
            },
            _autoSize: function(e) {
                if (this._get(e, "autoSize") && !e.inline) {
                    var t, n, r, i, s = new Date(2009, 11, 20),
                        o = this._get(e, "dateFormat");
                    o.match(/[DM]/) && (t = function(e) {
                        n = 0, r = 0;
                        for (i = 0; i < e.length; i++) e[i].length > n && (n = e[i].length, r = i);
                        return r
                    }, s.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), s.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - s.getDay())), e.input.attr("size", this._formatDate(e, s).length)
                }
            },
            _inlineDatepicker: function(t, r) {
                var i = e(t);
                if (i.hasClass(this.markerClassName)) return;
                i.addClass(this.markerClassName).append(r.dpDiv), e.data(t, n, r), this._setDate(r, this._getDefaultDate(r), !0), this._updateDatepicker(r), this._updateAlternate(r), r.settings.disabled && this._disableDatepicker(t), r.dpDiv.css("display", "block")
            },
            _dialogDatepicker: function(t, r, i, s, u) {
                var a, f, l, c, h, p = this._dialogInst;
                return p || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, e.data(this._dialogInput[0], n, p)), o(p.settings, s || {}), r = r && r.constructor === Date ? this._formatDate(p, r) : r, this._dialogInput.val(r), this._pos = u ? u.length ? u : [u.pageX, u.pageY] : null, this._pos || (f = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [f / 2 - 100 + c, l / 2 - 150 + h]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], n, p), this
            },
            _destroyDatepicker: function(t) {
                var r, i = e(t),
                    s = e.data(t, n);
                if (!i.hasClass(this.markerClassName)) return;
                r = t.nodeName.toLowerCase(), e.removeData(t, n), r === "input" ? (s.append.remove(), s.trigger.remove(), i.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r === "div" || r === "span") && i.removeClass(this.markerClassName).empty()
            },
            _enableDatepicker: function(t) {
                var r, i, s = e(t),
                    o = e.data(t, n);
                if (!s.hasClass(this.markerClassName)) return;
                r = t.nodeName.toLowerCase();
                if (r === "input") t.disabled = !1, o.trigger.filter("button").each(function() {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                });
                else if (r === "div" || r === "span") i = s.children("." + this._inlineClass), i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1);
                this._disabledInputs = e.map(this._disabledInputs, function(e) {
                    return e === t ? null : e
                })
            },
            _disableDatepicker: function(t) {
                var r, i, s = e(t),
                    o = e.data(t, n);
                if (!s.hasClass(this.markerClassName)) return;
                r = t.nodeName.toLowerCase();
                if (r === "input") t.disabled = !0, o.trigger.filter("button").each(function() {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                });
                else if (r === "div" || r === "span") i = s.children("." + this._inlineClass), i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0);
                this._disabledInputs = e.map(this._disabledInputs, function(e) {
                    return e === t ? null : e
                }), this._disabledInputs[this._disabledInputs.length] = t
            },
            _isDisabledDatepicker: function(e) {
                if (!e) return !1;
                for (var t = 0; t < this._disabledInputs.length; t++)
                    if (this._disabledInputs[t] === e) return !0;
                return !1
            },
            _getInst: function(t) {
                try {
                    return e.data(t, n)
                } catch (r) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function(n, r, i) {
                var s, u, a, f, l = this._getInst(n);
                if (arguments.length === 2 && typeof r == "string") return r === "defaults" ? e.extend({}, e.datepicker._defaults) : l ? r === "all" ? e.extend({}, l.settings) : this._get(l, r) : null;
                s = r || {}, typeof r == "string" && (s = {}, s[r] = i), l && (this._curInst === l && this._hideDatepicker(), u = this._getDateDatepicker(n, !0), a = this._getMinMaxDate(l, "min"), f = this._getMinMaxDate(l, "max"), o(l.settings, s), a !== null && s.dateFormat !== t && s.minDate === t && (l.settings.minDate = this._formatDate(l, a)), f !== null && s.dateFormat !== t && s.maxDate === t && (l.settings.maxDate = this._formatDate(l, f)), "disabled" in s && (s.disabled ? this._disableDatepicker(n) : this._enableDatepicker(n)), this._attachments(e(n), l), this._autoSize(l), this._setDate(l, u), this._updateAlternate(l), this._updateDatepicker(l))
            },
            _changeDatepicker: function(e, t, n) {
                this._optionDatepicker(e, t, n)
            },
            _refreshDatepicker: function(e) {
                var t = this._getInst(e);
                t && this._updateDatepicker(t)
            },
            _setDateDatepicker: function(e, t) {
                var n = this._getInst(e);
                n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n))
            },
            _getDateDatepicker: function(e, t) {
                var n = this._getInst(e);
                return n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null
            },
            _doKeyDown: function(t) {
                var n, r, i, s = e.datepicker._getInst(t.target),
                    o = !0,
                    u = s.dpDiv.is(".ui-datepicker-rtl");
                s._keyEvent = !0;
                if (e.datepicker._datepickerShowing) switch (t.keyCode) {
                    case 9:
                        e.datepicker._hideDatepicker(), o = !1;
                        break;
                    case 13:
                        return i = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", s.dpDiv), i[0] && e.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, i[0]), n = e.datepicker._get(s, "onSelect"), n ? (r = e.datepicker._formatDate(s), n.apply(s.input ? s.input[0] : null, [r, s])) : e.datepicker._hideDatepicker(), !1;
                    case 27:
                        e.datepicker._hideDatepicker();
                        break;
                    case 33:
                        e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
                        break;
                    case 34:
                        e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
                        break;
                    case 35:
                        (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
                        break;
                    case 36:
                        (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
                        break;
                    case 37:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
                        break;
                    case 38:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
                        break;
                    case 39:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
                        break;
                    case 40:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
                        break;
                    default:
                        o = !1
                } else t.keyCode === 36 && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
                o && (t.preventDefault(), t.stopPropagation())
            },
            _doKeyPress: function(t) {
                var n, r, i = e.datepicker._getInst(t.target);
                if (e.datepicker._get(i, "constrainInput")) return n = e.datepicker._possibleChars(e.datepicker._get(i, "dateFormat")), r = String.fromCharCode(t.charCode == null ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || r < " " || !n || n.indexOf(r) > -1
            },
            _doKeyUp: function(t) {
                var n, r = e.datepicker._getInst(t.target);
                if (r.input.val() !== r.lastVal) try {
                    n = e.datepicker.parseDate(e.datepicker._get(r, "dateFormat"), r.input ? r.input.val() : null, e.datepicker._getFormatConfig(r)), n && (e.datepicker._setDateFromField(r), e.datepicker._updateAlternate(r), e.datepicker._updateDatepicker(r))
                } catch (i) {}
                return !0
            },
            _showDatepicker: function(t) {
                t = t.target || t, t.nodeName.toLowerCase() !== "input" && (t = e("input", t.parentNode)[0]);
                if (e.datepicker._isDisabledDatepicker(t) || e.datepicker._lastInput === t) return;
                var n, r, i, s, u, a, f;
                n = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== n && (e.datepicker._curInst.dpDiv.stop(!0, !0), n && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), r = e.datepicker._get(n, "beforeShow"), i = r ? r.apply(t, [t, n]) : {};
                if (i === !1) return;
                o(n.settings, i), n.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(n), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), s = !1, e(t).parents().each(function() {
                    return s |= e(this).css("position") === "fixed", !s
                }), u = {
                    left: e.datepicker._pos[0],
                    top: e.datepicker._pos[1]
                }, e.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), e.datepicker._updateDatepicker(n), u = e.datepicker._checkOffset(n, u, s), n.dpDiv.css({
                    position: e.datepicker._inDialog && e.blockUI ? "static" : s ? "fixed" : "absolute",
                    display: "none",
                    left: u.left + "px",
                    top: u.top + "px"
                }), n.inline || (a = e.datepicker._get(n, "showAnim"), f = e.datepicker._get(n, "duration"), n.dpDiv.zIndex(e(t).zIndex() + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[a] ? n.dpDiv.show(a, e.datepicker._get(n, "showOptions"), f) : n.dpDiv[a || "show"](a ? f : null), e.datepicker._shouldFocusInput(n) && n.input.focus(), e.datepicker._curInst = n)
            },
            _updateDatepicker: function(t) {
                this.maxRows = 4, r = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
                var n, i = this._getNumberOfMonths(t),
                    s = i[1],
                    o = 17;
                t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", o * s + "em"), t.dpDiv[(i[0] !== 1 || i[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (n = t.yearshtml, setTimeout(function() {
                    n === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), n = t.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function(e) {
                return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
            },
            _checkOffset: function(t, n, r) {
                var i = t.dpDiv.outerWidth(),
                    s = t.dpDiv.outerHeight(),
                    o = t.input ? t.input.outerWidth() : 0,
                    u = t.input ? t.input.outerHeight() : 0,
                    a = document.documentElement.clientWidth + (r ? 0 : e(document).scrollLeft()),
                    f = document.documentElement.clientHeight + (r ? 0 : e(document).scrollTop());
                return n.left -= this._get(t, "isRTL") ? i - o : 0, n.left -= r && n.left === t.input.offset().left ? e(document).scrollLeft() : 0, n.top -= r && n.top === t.input.offset().top + u ? e(document).scrollTop() : 0, n.left -= Math.min(n.left, n.left + i > a && a > i ? Math.abs(n.left + i - a) : 0), n.top -= Math.min(n.top, n.top + s > f && f > s ? Math.abs(s + u) : 0), n
            },
            _findPos: function(t) {
                var n, r = this._getInst(t),
                    i = this._get(r, "isRTL");
                while (t && (t.type === "hidden" || t.nodeType !== 1 || e.expr.filters.hidden(t))) t = t[i ? "previousSibling" : "nextSibling"];
                return n = e(t).offset(), [n.left, n.top]
            },
            _hideDatepicker: function(t) {
                var r, i, s, o, u = this._curInst;
                if (!u || t && u !== e.data(t, n)) return;
                this._datepickerShowing && (r = this._get(u, "showAnim"), i = this._get(u, "duration"), s = function() {
                    e.datepicker._tidyDialog(u)
                }, e.effects && (e.effects.effect[r] || e.effects[r]) ? u.dpDiv.hide(r, e.datepicker._get(u, "showOptions"), i, s) : u.dpDiv[r === "slideDown" ? "slideUp" : r === "fadeIn" ? "fadeOut" : "hide"](r ? i : null, s), r || s(), this._datepickerShowing = !1, o = this._get(u, "onClose"), o && o.apply(u.input ? u.input[0] : null, [u.input ? u.input.val() : "", u]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function(e) {
                e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(t) {
                if (!e.datepicker._curInst) return;
                var n = e(t.target),
                    r = e.datepicker._getInst(n[0]);
                (n[0].id !== e.datepicker._mainDivId && n.parents("#" + e.datepicker._mainDivId).length === 0 && !n.hasClass(e.datepicker.markerClassName) && !n.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || n.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== r) && e.datepicker._hideDatepicker()
            },
            _adjustDate: function(t, n, r) {
                var i = e(t),
                    s = this._getInst(i[0]);
                if (this._isDisabledDatepicker(i[0])) return;
                this._adjustInstDate(s, n + (r === "M" ? this._get(s, "showCurrentAtPos") : 0), r), this._updateDatepicker(s)
            },
            _gotoToday: function(t) {
                var n, r = e(t),
                    i = this._getInst(r[0]);
                this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (n = new Date, i.selectedDay = n.getDate(), i.drawMonth = i.selectedMonth = n.getMonth(), i.drawYear = i.selectedYear = n.getFullYear()), this._notifyChange(i), this._adjustDate(r)
            },
            _selectMonthYear: function(t, n, r) {
                var i = e(t),
                    s = this._getInst(i[0]);
                s["selected" + (r === "M" ? "Month" : "Year")] = s["draw" + (r === "M" ? "Month" : "Year")] = parseInt(n.options[n.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(i)
            },
            _selectDay: function(t, n, r, i) {
                var s, o = e(t);
                if (e(i).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0])) return;
                s = this._getInst(o[0]), s.selectedDay = s.currentDay = e("a", i).html(), s.selectedMonth = s.currentMonth = n, s.selectedYear = s.currentYear = r, this._selectDate(t, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear))
            },
            _clearDate: function(t) {
                var n = e(t);
                this._selectDate(n, "")
            },
            _selectDate: function(t, n) {
                var r, i = e(t),
                    s = this._getInst(i[0]);
                n = n != null ? n : this._formatDate(s), s.input && s.input.val(n), this._updateAlternate(s), r = this._get(s, "onSelect"), r ? r.apply(s.input ? s.input[0] : null, [n, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], typeof s.input[0] != "object" && s.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function(t) {
                var n, r, i, s = this._get(t, "altField");
                s && (n = this._get(t, "altFormat") || this._get(t, "dateFormat"), r = this._getDate(t), i = this.formatDate(n, r, this._getFormatConfig(t)), e(s).each(function() {
                    e(this).val(i)
                }))
            },
            noWeekends: function(e) {
                var t = e.getDay();
                return [t > 0 && t < 6, ""]
            },
            iso8601Week: function(e) {
                var t, n = new Date(e.getTime());
                return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), t = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((t - n) / 864e5) / 7) + 1
            },
            parseDate: function(t, n, r) {
                if (t == null || n == null) throw "Invalid arguments";
                n = typeof n == "object" ? n.toString() : n + "";
                if (n === "") return null;
                var i, s, o, u = 0,
                    a = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    f = typeof a != "string" ? a : (new Date).getFullYear() % 100 + parseInt(a, 10),
                    l = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort,
                    c = (r ? r.dayNames : null) || this._defaults.dayNames,
                    h = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort,
                    p = (r ? r.monthNames : null) || this._defaults.monthNames,
                    d = -1,
                    v = -1,
                    m = -1,
                    g = -1,
                    y = !1,
                    b, w = function(e) {
                        var n = i + 1 < t.length && t.charAt(i + 1) === e;
                        return n && i++, n
                    },
                    E = function(e) {
                        var t = w(e),
                            r = e === "@" ? 14 : e === "!" ? 20 : e === "y" && t ? 4 : e === "o" ? 3 : 2,
                            i = new RegExp("^\\d{1," + r + "}"),
                            s = n.substring(u).match(i);
                        if (!s) throw "Missing number at position " + u;
                        return u += s[0].length, parseInt(s[0], 10)
                    },
                    S = function(t, r, i) {
                        var s = -1,
                            o = e.map(w(t) ? i : r, function(e, t) {
                                return [
                                    [t, e]
                                ]
                            }).sort(function(e, t) {
                                return -(e[1].length - t[1].length)
                            });
                        e.each(o, function(e, t) {
                            var r = t[1];
                            if (n.substr(u, r.length).toLowerCase() === r.toLowerCase()) return s = t[0], u += r.length, !1
                        });
                        if (s !== -1) return s + 1;
                        throw "Unknown name at position " + u
                    },
                    x = function() {
                        if (n.charAt(u) !== t.charAt(i)) throw "Unexpected literal at position " + u;
                        u++
                    };
                for (i = 0; i < t.length; i++)
                    if (y) t.charAt(i) === "'" && !w("'") ? y = !1 : x();
                    else switch (t.charAt(i)) {
                        case "d":
                            m = E("d");
                            break;
                        case "D":
                            S("D", l, c);
                            break;
                        case "o":
                            g = E("o");
                            break;
                        case "m":
                            v = E("m");
                            break;
                        case "M":
                            v = S("M", h, p);
                            break;
                        case "y":
                            d = E("y");
                            break;
                        case "@":
                            b = new Date(E("@")), d = b.getFullYear(), v = b.getMonth() + 1, m = b.getDate();
                            break;
                        case "!":
                            b = new Date((E("!") - this._ticksTo1970) / 1e4), d = b.getFullYear(), v = b.getMonth() + 1, m = b.getDate();
                            break;
                        case "'":
                            w("'") ? x() : y = !0;
                            break;
                        default:
                            x()
                    }
                    if (u < n.length) {
                        o = n.substr(u);
                        if (!/^\s+/.test(o)) throw "Extra/unparsed characters found in date: " + o
                    }
                d === -1 ? d = (new Date).getFullYear() : d < 100 && (d += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d <= f ? 0 : -100));
                if (g > -1) {
                    v = 1, m = g;
                    do {
                        s = this._getDaysInMonth(d, v - 1);
                        if (m <= s) break;
                        v++, m -= s
                    } while (!0)
                }
                b = this._daylightSavingAdjust(new Date(d, v - 1, m));
                if (b.getFullYear() !== d || b.getMonth() + 1 !== v || b.getDate() !== m) throw "Invalid date";
                return b
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7,
            formatDate: function(e, t, n) {
                if (!t) return "";
                var r, i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                    s = (n ? n.dayNames : null) || this._defaults.dayNames,
                    o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                    u = (n ? n.monthNames : null) || this._defaults.monthNames,
                    a = function(t) {
                        var n = r + 1 < e.length && e.charAt(r + 1) === t;
                        return n && r++, n
                    },
                    f = function(e, t, n) {
                        var r = "" + t;
                        if (a(e))
                            while (r.length < n) r = "0" + r;
                        return r
                    },
                    l = function(e, t, n, r) {
                        return a(e) ? r[t] : n[t]
                    },
                    c = "",
                    h = !1;
                if (t)
                    for (r = 0; r < e.length; r++)
                        if (h) e.charAt(r) === "'" && !a("'") ? h = !1 : c += e.charAt(r);
                        else switch (e.charAt(r)) {
                            case "d":
                                c += f("d", t.getDate(), 2);
                                break;
                            case "D":
                                c += l("D", t.getDay(), i, s);
                                break;
                            case "o":
                                c += f("o", Math.round(((new Date(t.getFullYear(), t.getMonth(), t.getDate())).getTime() - (new Date(t.getFullYear(), 0, 0)).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                c += f("m", t.getMonth() + 1, 2);
                                break;
                            case "M":
                                c += l("M", t.getMonth(), o, u);
                                break;
                            case "y":
                                c += a("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                                break;
                            case "@":
                                c += t.getTime();
                                break;
                            case "!":
                                c += t.getTime() * 1e4 + this._ticksTo1970;
                                break;
                            case "'":
                                a("'") ? c += "'" : h = !0;
                                break;
                            default:
                                c += e.charAt(r)
                        }
                        return c
            },
            _possibleChars: function(e) {
                var t, n = "",
                    r = !1,
                    i = function(n) {
                        var r = t + 1 < e.length && e.charAt(t + 1) === n;
                        return r && t++, r
                    };
                for (t = 0; t < e.length; t++)
                    if (r) e.charAt(t) === "'" && !i("'") ? r = !1 : n += e.charAt(t);
                    else switch (e.charAt(t)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            n += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            i("'") ? n += "'" : r = !0;
                            break;
                        default:
                            n += e.charAt(t)
                    }
                    return n
            },
            _get: function(e, n) {
                return e.settings[n] !== t ? e.settings[n] : this._defaults[n]
            },
            _setDateFromField: function(e, t) {
                if (e.input.val() === e.lastVal) return;
                var n = this._get(e, "dateFormat"),
                    r = e.lastVal = e.input ? e.input.val() : null,
                    i = this._getDefaultDate(e),
                    s = i,
                    o = this._getFormatConfig(e);
                try {
                    s = this.parseDate(n, r, o) || i
                } catch (u) {
                    r = t ? "" : r
                }
                e.selectedDay = s.getDate(), e.drawMonth = e.selectedMonth = s.getMonth(), e.drawYear = e.selectedYear = s.getFullYear(), e.currentDay = r ? s.getDate() : 0, e.currentMonth = r ? s.getMonth() : 0, e.currentYear = r ? s.getFullYear() : 0, this._adjustInstDate(e)
            },
            _getDefaultDate: function(e) {
                return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
            },
            _determineDate: function(t, n, r) {
                var i = function(e) {
                        var t = new Date;
                        return t.setDate(t.getDate() + e), t
                    },
                    s = function(n) {
                        try {
                            return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), n, e.datepicker._getFormatConfig(t))
                        } catch (r) {}
                        var i = (n.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date,
                            s = i.getFullYear(),
                            o = i.getMonth(),
                            u = i.getDate(),
                            a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                            f = a.exec(n);
                        while (f) {
                            switch (f[2] || "d") {
                                case "d":
                                case "D":
                                    u += parseInt(f[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    u += parseInt(f[1], 10) * 7;
                                    break;
                                case "m":
                                case "M":
                                    o += parseInt(f[1], 10), u = Math.min(u, e.datepicker._getDaysInMonth(s, o));
                                    break;
                                case "y":
                                case "Y":
                                    s += parseInt(f[1], 10), u = Math.min(u, e.datepicker._getDaysInMonth(s, o))
                            }
                            f = a.exec(n)
                        }
                        return new Date(s, o, u)
                    },
                    o = n == null || n === "" ? r : typeof n == "string" ? s(n) : typeof n == "number" ? isNaN(n) ? r : i(n) : new Date(n.getTime());
                return o = o && o.toString() === "Invalid Date" ? r : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
            },
            _daylightSavingAdjust: function(e) {
                return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
            },
            _setDate: function(e, t, n) {
                var r = !t,
                    i = e.selectedMonth,
                    s = e.selectedYear,
                    o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
                e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), (i !== e.selectedMonth || s !== e.selectedYear) && !n && this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(r ? "" : this._formatDate(e))
            },
            _getDate: function(e) {
                var t = !e.currentYear || e.input && e.input.val() === "" ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
                return t
            },
            _attachHandlers: function(t) {
                var n = this._get(t, "stepMonths"),
                    r = "#" + t.id.replace(/\\\\/g, "\\");
                t.dpDiv.find("[data-handler]").map(function() {
                    var t = {
                        prev: function() {
                            e.datepicker._adjustDate(r, -n, "M")
                        },
                        next: function() {
                            e.datepicker._adjustDate(r, +n, "M")
                        },
                        hide: function() {
                            e.datepicker._hideDatepicker()
                        },
                        today: function() {
                            e.datepicker._gotoToday(r)
                        },
                        selectDay: function() {
                            return e.datepicker._selectDay(r, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return e.datepicker._selectMonthYear(r, this, "M"), !1
                        },
                        selectYear: function() {
                            return e.datepicker._selectMonthYear(r, this, "Y"), !1
                        }
                    };
                    e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(e) {
                var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q = new Date,
                    R = this._daylightSavingAdjust(new Date(q.getFullYear(), q.getMonth(), q.getDate())),
                    U = this._get(e, "isRTL"),
                    z = this._get(e, "showButtonPanel"),
                    W = this._get(e, "hideIfNoPrevNext"),
                    X = this._get(e, "navigationAsDateFormat"),
                    V = this._getNumberOfMonths(e),
                    $ = this._get(e, "showCurrentAtPos"),
                    J = this._get(e, "stepMonths"),
                    K = V[0] !== 1 || V[1] !== 1,
                    Q = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                    G = this._getMinMaxDate(e, "min"),
                    Y = this._getMinMaxDate(e, "max"),
                    Z = e.drawMonth - $,
                    et = e.drawYear;
                Z < 0 && (Z += 12, et--);
                if (Y) {
                    t = this._daylightSavingAdjust(new Date(Y.getFullYear(), Y.getMonth() - V[0] * V[1] + 1, Y.getDate())), t = G && t < G ? G : t;
                    while (this._daylightSavingAdjust(new Date(et, Z, 1)) > t) Z--, Z < 0 && (Z = 11, et--)
                }
                e.drawMonth = Z, e.drawYear = et, n = this._get(e, "prevText"), n = X ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z - J, 1)), this._getFormatConfig(e)) : n, r = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>" : W ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>", i = this._get(e, "nextText"), i = X ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z + J, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>" : W ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>", o = this._get(e, "currentText"), u = this._get(e, "gotoCurrent") && e.currentDay ? Q : R, o = X ? this.formatDate(o, u, this._getFormatConfig(e)) : o, a = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", f = z ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (U ? a : "") + (this._isInRange(e, u) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (U ? "" : a) + "</div>" : "", l = parseInt(this._get(e, "firstDay"), 10), l = isNaN(l) ? 0 : l, c = this._get(e, "showWeek"), h = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), d = this._get(e, "monthNames"), v = this._get(e, "monthNamesShort"), m = this._get(e, "beforeShowDay"), g = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), w = "", E;
                for (S = 0; S < V[0]; S++) {
                    x = "", this.maxRows = 4;
                    for (T = 0; T < V[1]; T++) {
                        N = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), C = " ui-corner-all", k = "";
                        if (K) {
                            k += "<div class='ui-datepicker-group";
                            if (V[1] > 1) switch (T) {
                                case 0:
                                    k += " ui-datepicker-group-first", C = " ui-corner-" + (U ? "right" : "left");
                                    break;
                                case V[1] - 1:
                                    k += " ui-datepicker-group-last", C = " ui-corner-" + (U ? "left" : "right");
                                    break;
                                default:
                                    k += " ui-datepicker-group-middle", C = ""
                            }
                            k += "'>"
                        }
                        k += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && S === 0 ? U ? s : r : "") + (/all|right/.test(C) && S === 0 ? U ? r : s : "") + this._generateMonthYearHeader(e, Z, et, G, Y, S > 0 || T > 0, d, v) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", L = c ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "";
                        for (E = 0; E < 7; E++) A = (E + l) % 7, L += "<th" + ((E + l + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + h[A] + "'>" + p[A] + "</span></th>";
                        k += L + "</tr></thead><tbody>", O = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, O)), M = (this._getFirstDayOfMonth(et, Z) - l + 7) % 7, _ = Math.ceil((M + O) / 7), D = K ? this.maxRows > _ ? this.maxRows : _ : _, this.maxRows = D, P = this._daylightSavingAdjust(new Date(et, Z, 1 - M));
                        for (H = 0; H < D; H++) {
                            k += "<tr>", B = c ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(P) + "</td>" : "";
                            for (E = 0; E < 7; E++) j = m ? m.apply(e.input ? e.input[0] : null, [P]) : [!0, ""], F = P.getMonth() !== Z, I = F && !y || !j[0] || G && P < G || Y && P > Y, B += "<td class='" + ((E + l + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (P.getTime() === N.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === P.getTime() && b.getTime() === N.getTime() ? " " + this._dayOverClass : "") + (I ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !g ? "" : " " + j[1] + (P.getTime() === Q.getTime() ? " " + this._currentClass : "") + (P.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!F || g) && j[2] ? " title='" + j[2].replace(/'/g, "&#39;") + "'" : "") + (I ? "" : " data-handler='selectDay' data-event='click' data-month='" + P.getMonth() + "' data-year='" + P.getFullYear() + "'") + ">" + (F && !g ? "&#xa0;" : I ? "<span class='ui-state-default'>" + P.getDate() + "</span>" : "<a class='ui-state-default" + (P.getTime() === R.getTime() ? " ui-state-highlight" : "") + (P.getTime() === Q.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + P.getDate() + "</a>") + "</td>", P.setDate(P.getDate() + 1), P = this._daylightSavingAdjust(P);
                            k += B + "</tr>"
                        }
                        Z++, Z > 11 && (Z = 0, et++), k += "</tbody></table>" + (K ? "</div>" + (V[0] > 0 && T === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += k
                    }
                    w += x
                }
                return w += f, e._keyEvent = !1, w
            },
            _generateMonthYearHeader: function(e, t, n, r, i, s, o, u) {
                var a, f, l, c, h, p, d, v, m = this._get(e, "changeMonth"),
                    g = this._get(e, "changeYear"),
                    y = this._get(e, "showMonthAfterYear"),
                    b = "<div class='ui-datepicker-title'>",
                    w = "";
                if (s || !m) w += "<span class='ui-datepicker-month'>" + o[t] + "</span>";
                else {
                    a = r && r.getFullYear() === n, f = i && i.getFullYear() === n, w += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                    for (l = 0; l < 12; l++)(!a || l >= r.getMonth()) && (!f || l <= i.getMonth()) && (w += "<option value='" + l + "'" + (l === t ? " selected='selected'" : "") + ">" + u[l] + "</option>");
                    w += "</select>"
                }
                y || (b += w + (s || !m || !g ? "&#xa0;" : ""));
                if (!e.yearshtml) {
                    e.yearshtml = "";
                    if (s || !g) b += "<span class='ui-datepicker-year'>" + n + "</span>";
                    else {
                        c = this._get(e, "yearRange").split(":"), h = (new Date).getFullYear(), p = function(e) {
                            var t = e.match(/c[+\-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? h + parseInt(e, 10) : parseInt(e, 10);
                            return isNaN(t) ? h : t
                        }, d = p(c[0]), v = Math.max(d, p(c[1] || "")), d = r ? Math.max(d, r.getFullYear()) : d, v = i ? Math.min(v, i.getFullYear()) : v, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                        for (; d <= v; d++) e.yearshtml += "<option value='" + d + "'" + (d === n ? " selected='selected'" : "") + ">" + d + "</option>";
                        e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
                    }
                }
                return b += this._get(e, "yearSuffix"), y && (b += (s || !m || !g ? "&#xa0;" : "") + w), b += "</div>", b
            },
            _adjustInstDate: function(e, t, n) {
                var r = e.drawYear + (n === "Y" ? t : 0),
                    i = e.drawMonth + (n === "M" ? t : 0),
                    s = Math.min(e.selectedDay, this._getDaysInMonth(r, i)) + (n === "D" ? t : 0),
                    o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(r, i, s)));
                e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), (n === "M" || n === "Y") && this._notifyChange(e)
            },
            _restrictMinMax: function(e, t) {
                var n = this._getMinMaxDate(e, "min"),
                    r = this._getMinMaxDate(e, "max"),
                    i = n && t < n ? n : t;
                return r && i > r ? r : i
            },
            _notifyChange: function(e) {
                var t = this._get(e, "onChangeMonthYear");
                t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
            },
            _getNumberOfMonths: function(e) {
                var t = this._get(e, "numberOfMonths");
                return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t
            },
            _getMinMaxDate: function(e, t) {
                return this._determineDate(e, this._get(e, t + "Date"), null)
            },
            _getDaysInMonth: function(e, t) {
                return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
            },
            _getFirstDayOfMonth: function(e, t) {
                return (new Date(e, t, 1)).getDay()
            },
            _canAdjustMonth: function(e, t, n, r) {
                var i = this._getNumberOfMonths(e),
                    s = this._daylightSavingAdjust(new Date(n, r + (t < 0 ? t : i[0] * i[1]), 1));
                return t < 0 && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s)
            },
            _isInRange: function(e, t) {
                var n, r, i = this._getMinMaxDate(e, "min"),
                    s = this._getMinMaxDate(e, "max"),
                    o = null,
                    u = null,
                    a = this._get(e, "yearRange");
                return a && (n = a.split(":"), r = (new Date).getFullYear(), o = parseInt(n[0], 10), u = parseInt(n[1], 10), n[0].match(/[+\-].*/) && (o += r), n[1].match(/[+\-].*/) && (u += r)), (!i || t.getTime() >= i.getTime()) && (!s || t.getTime() <= s.getTime()) && (!o || t.getFullYear() >= o) && (!u || t.getFullYear() <= u)
            },
            _getFormatConfig: function(e) {
                var t = this._get(e, "shortYearCutoff");
                return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                    shortYearCutoff: t,
                    dayNamesShort: this._get(e, "dayNamesShort"),
                    dayNames: this._get(e, "dayNames"),
                    monthNamesShort: this._get(e, "monthNamesShort"),
                    monthNames: this._get(e, "monthNames")
                }
            },
            _formatDate: function(e, t, n, r) {
                t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
                var i = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
                return this.formatDate(this._get(e, "dateFormat"), i, this._getFormatConfig(e))
            }
        }), e.fn.datepicker = function(t) {
            if (!this.length) return this;
            e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), e("#" + e.datepicker._mainDivId).length === 0 && e("body").append(e.datepicker.dpDiv);
            var n = Array.prototype.slice.call(arguments, 1);
            return typeof t != "string" || t !== "isDisabled" && t !== "getDate" && t !== "widget" ? t === "option" && arguments.length === 2 && typeof arguments[1] == "string" ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n)) : this.each(function() {
                typeof t == "string" ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(n)) : e.datepicker._attachDatepicker(this, t)
            }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n))
        }, e.datepicker = new i, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.10.4"
    }(jQuery),
    function(e, t) {
        e.widget("ui.menu", {
            version: "1.10.4",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-carat-1-e"
                },
                menus: "ul",
                position: {
                    my: "left top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                    role: this.options.role,
                    tabIndex: 0
                }).bind("click" + this.eventNamespace, e.proxy(function(e) {
                    this.options.disabled && e.preventDefault()
                }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                    "mousedown .ui-menu-item > a": function(e) {
                        e.preventDefault()
                    },
                    "click .ui-state-disabled > a": function(e) {
                        e.preventDefault()
                    },
                    "click .ui-menu-item:has(a)": function(t) {
                        var n = e(t.target).closest(".ui-menu-item");
                        !this.mouseHandled && n.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), n.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(t) {
                        var n = e(t.currentTarget);
                        n.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(t, n)
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(e, t) {
                        var n = this.active || this.element.children(".ui-menu-item").eq(0);
                        t || this.focus(e, n)
                    },
                    blur: function(t) {
                        this._delay(function() {
                            e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function(t) {
                        e(t.target).closest(".ui-menu").length || this.collapseAll(t), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                    var t = e(this);
                    t.data("ui-menu-submenu-carat") && t.remove()
                }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function(t) {
                function a(e) {
                    return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                }
                var n, r, i, s, o, u = !0;
                switch (t.keyCode) {
                    case e.ui.keyCode.PAGE_UP:
                        this.previousPage(t);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        this.nextPage(t);
                        break;
                    case e.ui.keyCode.HOME:
                        this._move("first", "first", t);
                        break;
                    case e.ui.keyCode.END:
                        this._move("last", "last", t);
                        break;
                    case e.ui.keyCode.UP:
                        this.previous(t);
                        break;
                    case e.ui.keyCode.DOWN:
                        this.next(t);
                        break;
                    case e.ui.keyCode.LEFT:
                        this.collapse(t);
                        break;
                    case e.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                        break;
                    case e.ui.keyCode.ENTER:
                    case e.ui.keyCode.SPACE:
                        this._activate(t);
                        break;
                    case e.ui.keyCode.ESCAPE:
                        this.collapse(t);
                        break;
                    default:
                        u = !1, r = this.previousFilter || "", i = String.fromCharCode(t.keyCode), s = !1, clearTimeout(this.filterTimer), i === r ? s = !0 : i = r + i, o = new RegExp("^" + a(i), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return o.test(e(this).children("a").text())
                        }), n = s && n.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : n, n.length || (i = String.fromCharCode(t.keyCode), o = new RegExp("^" + a(i), "i"), n = this.activeMenu.children(".ui-menu-item").filter(function() {
                            return o.test(e(this).children("a").text())
                        })), n.length ? (this.focus(t, n), n.length > 1 ? (this.previousFilter = i, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
                }
                u && t.preventDefault()
            },
            _activate: function(e) {
                this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
            },
            refresh: function() {
                var t, n = this.options.icons.submenu,
                    r = this.element.find(this.options.menus);
                this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var t = e(this),
                        r = t.prev("a"),
                        i = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                    r.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", r.attr("id"))
                }), t = r.add(this.element), t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), t.children(":not(.ui-menu-item)").each(function() {
                    var t = e(this);
                    /[^\-\u2014\u2013\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider")
                }), t.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function(e, t) {
                e === "icons" && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), this._super(e, t)
            },
            focus: function(e, t) {
                var n, r;
                this.blur(e, e && e.type === "focus"), this._scrollIntoView(t), this.active = t.first(), r = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", r.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), e && e.type === "keydown" ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay), n = t.children(".ui-menu"), n.length && e && /^mouse/.test(e.type) && this._startOpening(n), this.activeMenu = t.parent(), this._trigger("focus", e, {
                    item: t
                })
            },
            _scrollIntoView: function(t) {
                var n, r, i, s, o, u;
                this._hasScroll() && (n = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, r = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, i = t.offset().top - this.activeMenu.offset().top - n - r, s = this.activeMenu.scrollTop(), o = this.activeMenu.height(), u = t.height(), i < 0 ? this.activeMenu.scrollTop(s + i) : i + u > o && this.activeMenu.scrollTop(s + i - o + u))
            },
            blur: function(e, t) {
                t || clearTimeout(this.timer);
                if (!this.active) return;
                this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {
                    item: this.active
                })
            },
            _startOpening: function(e) {
                clearTimeout(this.timer);
                if (e.attr("aria-hidden") !== "true") return;
                this.timer = this._delay(function() {
                    this._close(), this._open(e)
                }, this.delay)
            },
            _open: function(t) {
                var n = e.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n)
            },
            collapseAll: function(t, n) {
                clearTimeout(this.timer), this.timer = this._delay(function() {
                    var r = n ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                    r.length || (r = this.element), this._close(r), this.blur(t), this.activeMenu = r
                }, this.delay)
            },
            _close: function(e) {
                e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
            },
            collapse: function(e) {
                var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                t && t.length && (this._close(), this.focus(e, t))
            },
            expand: function(e) {
                var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
                t && t.length && (this._open(t.parent()), this._delay(function() {
                    this.focus(e, t)
                }))
            },
            next: function(e) {
                this._move("next", "first", e)
            },
            previous: function(e) {
                this._move("prev", "last", e)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(e, t, n) {
                var r;
                this.active && (e === "first" || e === "last" ? r = this.active[e === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : r = this.active[e + "All"](".ui-menu-item").eq(0));
                if (!r || !r.length || !this.active) r = this.activeMenu.children(".ui-menu-item")[t]();
                this.focus(n, r)
            },
            nextPage: function(t) {
                var n, r, i;
                if (!this.active) {
                    this.next(t);
                    return
                }
                if (this.isLastItem()) return;
                this._hasScroll() ? (r = this.active.offset().top, i = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    return n = e(this), n.offset().top - r - i < 0
                }), this.focus(t, n)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())
            },
            previousPage: function(t) {
                var n, r, i;
                if (!this.active) {
                    this.next(t);
                    return
                }
                if (this.isFirstItem()) return;
                this._hasScroll() ? (r = this.active.offset().top, i = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    return n = e(this), n.offset().top - r + i > 0
                }), this.focus(t, n)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first())
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function(t) {
                this.active = this.active || e(t.target).closest(".ui-menu-item");
                var n = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, n)
            }
        })
    }(jQuery),
    function(e, t) {
        var n = 5;
        e.widget("ui.slider", e.ui.mouse, {
            version: "1.10.4",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
            },
            _refresh: function() {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
            },
            _createHandles: function() {
                var t, n, r = this.options,
                    i = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    s = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                    o = [];
                n = r.values && r.values.length || 1, i.length > n && (i.slice(n).remove(), i = i.slice(0, n));
                for (t = i.length; t < n; t++) o.push(s);
                this.handles = i.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) {
                    e(this).data("ui-slider-handle-index", t)
                })
            },
            _createRange: function() {
                var t = this.options,
                    n = "";
                t.range ? (t.range === !0 && (t.values ? t.values.length && t.values.length !== 2 ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), !this.range || !this.range.length ? (this.range = e("<div></div>").appendTo(this.element), n = "ui-slider-range ui-widget-header ui-corner-all") : this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                    left: "",
                    bottom: ""
                }), this.range.addClass(n + (t.range === "min" || t.range === "max" ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function() {
                var e = this.handles.add(this.range).filter("a");
                this._off(e), this._on(e, this._handleEvents), this._hoverable(e), this._focusable(e)
            },
            _destroy: function() {
                this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
            },
            _mouseCapture: function(t) {
                var n, r, i, s, o, u, a, f, l = this,
                    c = this.options;
                return c.disabled ? !1 : (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), n = {
                    x: t.pageX,
                    y: t.pageY
                }, r = this._normValueFromMouse(n), i = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                    var n = Math.abs(r - l.values(t));
                    if (i > n || i === n && (t === l._lastChangedValue || l.values(t) === c.min)) i = n, s = e(this), o = t
                }), u = this._start(t, o), u === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, s.addClass("ui-state-active").focus(), a = s.offset(), f = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = f ? {
                    left: 0,
                    top: 0
                } : {
                    left: t.pageX - a.left - s.width() / 2,
                    top: t.pageY - a.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, r), this._animateOff = !0, !0))
            },
            _mouseStart: function() {
                return !0
            },
            _mouseDrag: function(e) {
                var t = {
                        x: e.pageX,
                        y: e.pageY
                    },
                    n = this._normValueFromMouse(t);
                return this._slide(e, this._handleIndex, n), !1
            },
            _mouseStop: function(e) {
                return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function() {
                this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(e) {
                var t, n, r, i, s;
                return this.orientation === "horizontal" ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), r = n / t, r > 1 && (r = 1), r < 0 && (r = 0), this.orientation === "vertical" && (r = 1 - r), i = this._valueMax() - this._valueMin(), s = this._valueMin() + r * i, this._trimAlignValue(s)
            },
            _start: function(e, t) {
                var n = {
                    handle: this.handles[t],
                    value: this.value()
                };
                return this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("start", e, n)
            },
            _slide: function(e, t, n) {
                var r, i, s;
                this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && n > r || t === 1 && n < r) && (n = r), n !== this.values(t) && (i = this.values(), i[t] = n, s = this._trigger("slide", e, {
                    handle: this.handles[t],
                    value: n,
                    values: i
                }), r = this.values(t ? 0 : 1), s !== !1 && this.values(t, n))) : n !== this.value() && (s = this._trigger("slide", e, {
                    handle: this.handles[t],
                    value: n
                }), s !== !1 && this.value(n))
            },
            _stop: function(e, t) {
                var n = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("stop", e, n)
            },
            _change: function(e, t) {
                if (!this._keySliding && !this._mouseSliding) {
                    var n = {
                        handle: this.handles[t],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, n)
                }
            },
            value: function(e) {
                if (arguments.length) {
                    this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0);
                    return
                }
                return this._value()
            },
            values: function(t, n) {
                var r, i, s;
                if (arguments.length > 1) {
                    this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), this._change(null, t);
                    return
                }
                if (!arguments.length) return this._values();
                if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
                r = this.options.values, i = arguments[0];
                for (s = 0; s < r.length; s += 1) r[s] = this._trimAlignValue(i[s]), this._change(null, s);
                this._refreshValue()
            },
            _setOption: function(t, n) {
                var r, i = 0;
                t === "range" && this.options.range === !0 && (n === "min" ? (this.options.value = this._values(0), this.options.values = null) : n === "max" && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (i = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments);
                switch (t) {
                    case "orientation":
                        this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                        break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case "values":
                        this._animateOff = !0, this._refreshValue();
                        for (r = 0; r < i; r += 1) this._change(null, r);
                        this._animateOff = !1;
                        break;
                    case "min":
                    case "max":
                        this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                        break;
                    case "range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1
                }
            },
            _value: function() {
                var e = this.options.value;
                return e = this._trimAlignValue(e), e
            },
            _values: function(e) {
                var t, n, r;
                if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t), t;
                if (this.options.values && this.options.values.length) {
                    n = this.options.values.slice();
                    for (r = 0; r < n.length; r += 1) n[r] = this._trimAlignValue(n[r]);
                    return n
                }
                return []
            },
            _trimAlignValue: function(e) {
                if (e <= this._valueMin()) return this._valueMin();
                if (e >= this._valueMax()) return this._valueMax();
                var t = this.options.step > 0 ? this.options.step : 1,
                    n = (e - this._valueMin()) % t,
                    r = e - n;
                return Math.abs(n) * 2 >= t && (r += n > 0 ? t : -t), parseFloat(r.toFixed(5))
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.options.max
            },
            _refreshValue: function() {
                var t, n, r, i, s, o = this.options.range,
                    u = this.options,
                    a = this,
                    f = this._animateOff ? !1 : u.animate,
                    l = {};
                this.options.values && this.options.values.length ? this.handles.each(function(r) {
                    n = (a.values(r) - a._valueMin()) / (a._valueMax() - a._valueMin()) * 100, l[a.orientation === "horizontal" ? "left" : "bottom"] = n + "%", e(this).stop(1, 1)[f ? "animate" : "css"](l, u.animate), a.options.range === !0 && (a.orientation === "horizontal" ? (r === 0 && a.range.stop(1, 1)[f ? "animate" : "css"]({
                        left: n + "%"
                    }, u.animate), r === 1 && a.range[f ? "animate" : "css"]({
                        width: n - t + "%"
                    }, {
                        queue: !1,
                        duration: u.animate
                    })) : (r === 0 && a.range.stop(1, 1)[f ? "animate" : "css"]({
                        bottom: n + "%"
                    }, u.animate), r === 1 && a.range[f ? "animate" : "css"]({
                        height: n - t + "%"
                    }, {
                        queue: !1,
                        duration: u.animate
                    }))), t = n
                }) : (r = this.value(), i = this._valueMin(), s = this._valueMax(), n = s !== i ? (r - i) / (s - i) * 100 : 0, l[this.orientation === "horizontal" ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[f ? "animate" : "css"](l, u.animate), o === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[f ? "animate" : "css"]({
                    width: n + "%"
                }, u.animate), o === "max" && this.orientation === "horizontal" && this.range[f ? "animate" : "css"]({
                    width: 100 - n + "%"
                }, {
                    queue: !1,
                    duration: u.animate
                }), o === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[f ? "animate" : "css"]({
                    height: n + "%"
                }, u.animate), o === "max" && this.orientation === "vertical" && this.range[f ? "animate" : "css"]({
                    height: 100 - n + "%"
                }, {
                    queue: !1,
                    duration: u.animate
                }))
            },
            _handleEvents: {
                keydown: function(t) {
                    var r, i, s, o, u = e(t.target).data("ui-slider-handle-index");
                    switch (t.keyCode) {
                        case e.ui.keyCode.HOME:
                        case e.ui.keyCode.END:
                        case e.ui.keyCode.PAGE_UP:
                        case e.ui.keyCode.PAGE_DOWN:
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            t.preventDefault();
                            if (!this._keySliding) {
                                this._keySliding = !0, e(t.target).addClass("ui-state-active"), r = this._start(t, u);
                                if (r === !1) return
                            }
                    }
                    o = this.options.step, this.options.values && this.options.values.length ? i = s = this.values(u) : i = s = this.value();
                    switch (t.keyCode) {
                        case e.ui.keyCode.HOME:
                            s = this._valueMin();
                            break;
                        case e.ui.keyCode.END:
                            s = this._valueMax();
                            break;
                        case e.ui.keyCode.PAGE_UP:
                            s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / n);
                            break;
                        case e.ui.keyCode.PAGE_DOWN:
                            s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / n);
                            break;
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                            if (i === this._valueMax()) return;
                            s = this._trimAlignValue(i + o);
                            break;
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            if (i === this._valueMin()) return;
                            s = this._trimAlignValue(i - o)
                    }
                    this._slide(t, u, s)
                },
                click: function(e) {
                    e.preventDefault()
                },
                keyup: function(t) {
                    var n = e(t.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(t, n), this._change(t, n), e(t.target).removeClass("ui-state-active"))
                }
            }
        })
    }(jQuery),
    function(e) {
        function n(n, r) {
            function m() {
                s.hasClass("horizontal") && (h = "horiz", p = "scrollLeft", d = "width", v = "left"), s.prepend('<div class="tse-scrollbar"><div class="drag-handle"></div></div>'), a = s.find(".tse-scrollbar"), f = s.find(".drag-handle"), r.wrapContent && u.wrap('<div class="tse-scroll-content" />'), o = s.find(".tse-scroll-content"), N(), C(), s.on("mouseenter", S), f.on("mousedown", g), o.on("scroll", w), E()
            }

            function g(t) {
                t.preventDefault();
                var n = t.pageY;
                h === "horiz" && (n = t.pageX), l = n - f.offset()[v], e(document).on("mousemove", y), e(document).on("mouseup", b)
            }

            function y(e) {
                e.preventDefault();
                var t = e.pageY;
                h === "horiz" && (t = e.pageX);
                var n = t - a.offset()[v] - l,
                    r = n / a[d](),
                    i = r * u[d]();
                o[p](i)
            }

            function b() {
                e(document).off("mousemove", y), e(document).off("mouseup", b)
            }

            function w(e) {
                S()
            }

            function E() {
                var e = u[d](),
                    t = o[p](),
                    n = a[d](),
                    r = n / e,
                    i = Math.round(r * t) + 2,
                    s = Math.floor(r * (n - 2)) - 2;
                n < e ? (h === "vert" ? f.css({
                    top: i,
                    height: s
                }) : f.css({
                    left: i,
                    width: s
                }), a.show()) : a.hide()
            }

            function S() {
                E(), x()
            }

            function x() {
                f.addClass("visible"), typeof c == "number" && window.clearTimeout(c), c = window.setTimeout(function() {
                    T()
                }, 1e3)
            }

            function T() {
                f.removeClass("visible"), typeof c == "number" && window.clearTimeout(c)
            }

            function N() {
                r.scrollbarHideStrategy === "rightAndBottom" && (h === "vert" ? o.css({
                    right: "-" + k() + "px"
                }) : o.css({
                    bottom: "-" + k() + "px"
                }))
            }

            function C() {
                h === "vert" ? (o.width(s.width() + k()), o.height(s.height())) : (o.width(s.width()), o.height(s.height() + k()), u.height(s.height()))
            }

            function k() {
                var t = e('<div class="scrollbar-width-tester" style="width:50px;height:50px;overflow-y:scroll;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');
                e("body").append(t);
                var n = e(t).innerWidth(),
                    r = e("div", t).innerWidth();
                return t.remove(), n - r
            }

            function L() {
                C(), E()
            }

            function A(e, t) {
                if (!t) return r[e];
                r[e] = t
            }

            function O() {
                u.insertBefore(a), a.remove(), o.remove(), u.css({
                    height: s.height() + "px",
                    "overflow-y": "scroll"
                }), M("onDestroy"), s.removeData("plugin_" + t)
            }

            function M(e) {
                r[e] !== undefined && r[e].call(i)
            }
            var i = n,
                s = e(n),
                o, u = s.find(".tse-content"),
                a, f, l, c, h = "vert",
                p = "scrollTop",
                d = "height",
                v = "top";
            return r = e.extend({}, e.fn[t].defaults, r), m(), {
                option: A,
                destroy: O,
                recalculate: L
            }
        }
        var t = "TrackpadScrollEmulator";
        e.fn[t] = function(r) {
            if (typeof arguments[0] == "string") {
                var i = arguments[0],
                    s = Array.prototype.slice.call(arguments, 1),
                    o;
                return this.each(function() {
                    if (!e.data(this, "plugin_" + t) || typeof e.data(this, "plugin_" + t)[i] != "function") throw new Error("Method " + i + " does not exist on jQuery." + t);
                    o = e.data(this, "plugin_" + t)[i].apply(this, s)
                }), o !== undefined ? o : this
            }
            if (typeof r == "object" || !r) return this.each(function() {
                e.data(this, "plugin_" + t) || e.data(this, "plugin_" + t, new n(this, r))
            })
        }, e.fn[t].defaults = {
            onInit: function() {},
            onDestroy: function() {},
            wrapContent: !0,
            scrollbarHideStrategy: "widthAndHeight"
        }
    }(jQuery),
    function(e, t, n) {
        "$:nomunge";

        function r(r, i) {
            function u(t) {
                e(s).each(function() {
                    var n = e(this);
                    this !== t.target && !n.has(t.target).length && n.triggerHandler(i, [t.target])
                })
            }
            i = i || r + n;
            var s = e(),
                o = r + "." + i + "-special-event";
            e.event.special[i] = {
                setup: function() {
                    s = s.add(this), s.length === 1 && e(t).bind(o, u)
                },
                teardown: function() {
                    s = s.not(this), s.length === 0 && e(t).unbind(o)
                },
                add: function(e) {
                    var t = e.handler;
                    e.handler = function(e, n) {
                        e.target = n, t.apply(this, arguments)
                    }
                }
            }
        }
        e.map("click dblclick mousemove mousedown mouseup mouseover mouseout change select submit keydown keypress keyup".split(" "), function(e) {
            r(e)
        }), r("focusin", "focus" + n), r("focusout", "blur" + n), e.addOutsideEvent = r
    }(jQuery, document, "outside"),
    function(e) {
        function t(e, t) {
            return typeof e == "function" ? e.call(t) : e
        }

        function n(e) {
            while (e = e.parentNode)
                if (e == document) return !0;
            return !1
        }

        function r(t, n) {
            this.$element = e(t), this.options = n, this.enabled = !0, this.fixTitle()
        }
        r.prototype = {
            show: function() {
                var n = this.getTitle();
                if (n && this.enabled) {
                    var r = this.tip();
                    r.find(".tipsy-inner")[this.options.html ? "html" : "text"](n), r[0].className = "tipsy", r.remove().css({
                        top: 0,
                        left: 0,
                        visibility: "hidden",
                        display: "block"
                    }).prependTo(document.body);
                    var i = e.extend({}, this.$element.offset(), {
                            width: this.$element[0].offsetWidth,
                            height: this.$element[0].offsetHeight
                        }),
                        s = r[0].offsetWidth,
                        o = r[0].offsetHeight,
                        u = t(this.options.gravity, this.$element[0]),
                        a;
                    switch (u.charAt(0)) {
                        case "n":
                            a = {
                                top: i.top + i.height + this.options.offset,
                                left: i.left + i.width / 2 - s / 2
                            };
                            break;
                        case "s":
                            a = {
                                top: i.top - o - this.options.offset,
                                left: i.left + i.width / 2 - s / 2
                            };
                            break;
                        case "e":
                            a = {
                                top: i.top + i.height / 2 - o / 2,
                                left: i.left - s - this.options.offset
                            };
                            break;
                        case "w":
                            a = {
                                top: i.top + i.height / 2 - o / 2,
                                left: i.left + i.width + this.options.offset
                            }
                    }
                    u.length == 2 && (u.charAt(1) == "w" ? a.left = i.left + i.width / 2 - 15 : a.left = i.left + i.width / 2 - s + 15), r.css(a).addClass("tipsy-" + u), r.find(".tipsy-arrow")[0].className = "tipsy-arrow tipsy-arrow-" + u.charAt(0), this.options.className && r.addClass(t(this.options.className, this.$element[0])), this.options.fade ? r.stop().css({
                        opacity: 0,
                        display: "block",
                        visibility: "visible"
                    }).animate({
                        opacity: this.options.opacity
                    }) : r.css({
                        visibility: "visible",
                        opacity: this.options.opacity
                    }), this.options.clickClose && r.bind("click", {
                        element: this.$element,
                        callback: this.options.closeCallback
                    }, function(e) {
                        e.data.element.tipsy("hide"), e.data.callback && e.data.callback()
                    }), this.$element.on("remove", function() {
                        r.remove()
                    }), r.data("tipsy-pointee", this.$element)
                }
            },
            showTimed: function() {
                var e = this;
                e.show(), e.$element.delay(this.options.timerLength).queue(function(t) {
                    e.hide(), t()
                })
            },
            hide: function() {
                this.options.fade ? this.tip().stop().fadeOut(function() {
                    e(this).remove()
                }) : this.tip().remove()
            },
            fixTitle: function() {
                var e = this.$element;
                (e.attr("title") || typeof e.attr("original-title") != "string") && e.attr("original-title", e.attr("title") || "").removeAttr("title")
            },
            getTitle: function() {
                var e, t = this.$element,
                    n = this.options;
                this.fixTitle();
                var e, n = this.options;
                return typeof n.title == "string" ? e = t.attr(n.title == "title" ? "original-title" : n.title) : typeof n.title == "function" && (e = n.title.call(t[0])), e = ("" + e).replace(/(^\s*|\s*$)/, ""), e || n.fallback
            },
            tip: function() {
                return this.$tip || (this.$tip = e('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>')), this.$tip
            },
            validate: function() {
                this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
            },
            enable: function() {
                this.enabled = !0
            },
            disable: function() {
                this.enabled = !1
            },
            toggleEnabled: function() {
                this.enabled = !this.enabled
            }
        }, e.fn.tipsy = function(t) {
            function i(n) {
                var i = e.data(n, "tipsy");
                return i || (i = new r(n, e.fn.tipsy.elementOptions(n, t)), e.data(n, "tipsy", i)), i
            }

            function s() {
                var e = i(this);
                e.hoverState = "in", t.delayIn == 0 ? e.show() : (e.fixTitle(), setTimeout(function() {
                    e.hoverState == "in" && e.show()
                }, t.delayIn))
            }

            function o() {
                var e = i(this);
                e.hoverState = "out", t.delayOut == 0 ? e.hide() : setTimeout(function() {
                    e.hoverState == "out" && e.hide()
                }, t.delayOut)
            }
            if (t === !0) return this.data("tipsy");
            if (typeof t == "string") {
                var n = this.data("tipsy");
                return n && n[t](), this
            }
            t = e.extend({}, e.fn.tipsy.defaults, t), t.live || this.each(function() {
                i(this)
            });
            if (t.trigger != "manual") {
                var u = t.trigger == "hover" ? "mouseenter" : "focus",
                    a = t.trigger == "hover" ? "mouseleave" : "blur",
                    f = this;
                if (t.live) {
                    var l = e("body");
                    l.on(u, f.selector, s), l.on(a, f.selector, o), f._teardown = function() {
                        l.off(u, f.selector, s), l.off(a, f.selector, o)
                    }
                } else f.bind(u, s), f.bind(a, o), f._teardown = function() {
                    f.unbind(u, s), f.unbind(a, o)
                }
            }
            return this
        }, e.fn.teardownTipsy = function() {
            e(this).tipsy.revalidate(), this._teardown && this._teardown()
        }, e.fn.tipsy.defaults = {
            className: null,
            delayIn: 0,
            delayOut: 0,
            fade: !1,
            fallback: "",
            gravity: "n",
            html: !1,
            live: !1,
            offset: 0,
            opacity: .8,
            title: "title",
            trigger: "hover",
            clickClose: !1,
            closeCallback: null,
            timerLength: 3e3
        }, e.fn.tipsy.revalidate = function() {
            e(".tipsy").each(function() {
                var t = e.data(this, "tipsy-pointee");
                (!t || !n(t)) && e(this).remove()
            })
        }, e.fn.tipsy.elementOptions = function(t, n) {
            return e.metadata ? e.extend({}, n, e(t).metadata()) : n
        }, e.fn.tipsy.autoNS = function() {
            return e(this).offset().top > e(document).scrollTop() + e(window).height() / 2 ? "s" : "n"
        }, e.fn.tipsy.autoWE = function() {
            return e(this).offset().left > e(document).scrollLeft() + e(window).width() / 2 ? "e" : "w"
        }, e.fn.tipsy.autoBounds = function(t, n) {
            return function() {
                var r = {
                        ns: n[0],
                        ew: n.length > 1 ? n[1] : !1
                    },
                    i = e(document).scrollTop() + t,
                    s = e(document).scrollLeft() + t,
                    o = e(this);
                return o.offset().top < i && (r.ns = "n"), o.offset().left < s && (r.ew = "w"), e(window).width() + e(document).scrollLeft() - o.offset().left < t && (r.ew = "e"), e(window).height() + e(document).scrollTop() - o.offset().top < t && (r.ns = "s"), r.ns + (r.ew ? r.ew : "")
            }
        }
    }(jQuery),
    function(e) {
        e.fn.placeholder = function() {
            function t(t) {
                return e(t).val() == e(t).attr("placeholder")
            }
            return this.each(function() {
                e(this).find("[placeholder]").each(function() {
                    if (e(this).attr("type") == "password") {
                        var n = e("<input type='text'>");
                        n.attr("rel", e(this).attr("id")), n.attr("value", e(this).attr("placeholder")), e(this).parent().append(n), n.hide();

                        function r(n) {
                            if (e(n).val() == "" || t(n)) e(n).hide(), e("input[rel=" + e(n).attr("id") + "]").show()
                        }
                        n.focus(function() {
                            e(this).hide(), e("input#" + e(this).attr("rel")).show().focus()
                        }), e(this).blur(function() {
                            r(this, !1)
                        }), r(this)
                    } else {
                        function i(n, r) {
                            if (e(n).val() == "" || r && t(n)) e(n).val(e(n).attr("placeholder")), e(n).addClass("placeholder")
                        }
                        e(this).focus(function() {
                            e(this).val() == e(this).attr("placeholder") && (e(this).val(""), e(this).removeClass("placeholder"))
                        }), e(this).blur(function() {
                            i(e(this), !1)
                        }), i(this, !0)
                    }
                }), e(this).submit(function() {
                    e(this).find(":input").each(function() {
                        e(this).val() == e(this).attr("placeholder") && e(this).val("")
                    })
                })
            })
        }
    }(jQuery),
    function(e) {
        e.fn.fitText = function(t, n) {
            var r = t || 1,
                i = e.extend({
                    minFontSize: Number.NEGATIVE_INFINITY,
                    maxFontSize: Number.POSITIVE_INFINITY
                }, n);
            return this.each(function() {
                var t = e(this),
                    n = function() {
                        t.css("font-size", Math.max(Math.min(t.width() / (r * 10), parseFloat(i.maxFontSize)), parseFloat(i.minFontSize)))
                    };
                n(), e(window).on("resize.fittext orientationchange.fittext", n)
            })
        }
    }(jQuery),
    function() {
        "use strict";
        var e = function(e, t) {
                var n = e.style[t];
                e.currentStyle ? n = e.currentStyle[t] : window.getComputedStyle && (n = document.defaultView.getComputedStyle(e, null).getPropertyValue(t));
                if (n == "auto" && t == "cursor") {
                    var r = ["a"];
                    for (var i = 0; i < r.length; i++)
                        if (e.tagName.toLowerCase() == r[i]) return "pointer"
                }
                return n
            },
            t = function(e) {
                if (!c.prototype._singleton) return;
                e || (e = window.event);
                var t;
                this !== window ? t = this : e.target ? t = e.target : e.srcElement && (t = e.srcElement), c.prototype._singleton.setCurrent(t)
            },
            n = function(e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
            },
            r = function(e, t, n) {
                e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
            },
            i = function(e, t) {
                if (e.addClass) return e.addClass(t), e;
                if (t && typeof t == "string") {
                    var n = (t || "").split(/\s+/);
                    if (e.nodeType === 1)
                        if (!e.className) e.className = t;
                        else {
                            var r = " " + e.className + " ",
                                i = e.className;
                            for (var s = 0, o = n.length; s < o; s++) r.indexOf(" " + n[s] + " ") < 0 && (i += " " + n[s]);
                            e.className = i.replace(/^\s+|\s+$/g, "")
                        }
                }
                return e
            },
            s = function(e, t) {
                if (e.removeClass) return e.removeClass(t), e;
                if (t && typeof t == "string" || t === undefined) {
                    var n = (t || "").split(/\s+/);
                    if (e.nodeType === 1 && e.className)
                        if (t) {
                            var r = (" " + e.className + " ").replace(/[\n\t]/g, " ");
                            for (var i = 0, s = n.length; i < s; i++) r = r.replace(" " + n[i] + " ", " ");
                            e.className = r.replace(/^\s+|\s+$/g, "")
                        } else e.className = ""
                }
                return e
            },
            o = function(t) {
                var n = {
                        left: 0,
                        top: 0,
                        width: t.width || t.offsetWidth || 0,
                        height: t.height || t.offsetHeight || 0,
                        zIndex: 9999
                    },
                    r = e(t, "zIndex");
                r && r != "auto" && (n.zIndex = parseInt(r, 10));
                while (t) {
                    var i = parseInt(e(t, "borderLeftWidth"), 10),
                        s = parseInt(e(t, "borderTopWidth"), 10);
                    n.left += isNaN(t.offsetLeft) ? 0 : t.offsetLeft, n.left += isNaN(i) ? 0 : i, n.top += isNaN(t.offsetTop) ? 0 : t.offsetTop, n.top += isNaN(s) ? 0 : s, t = t.offsetParent
                }
                return n
            },
            u = function(e) {
                return (e.indexOf("?") >= 0 ? "&" : "?") + "nocache=" + (new Date).getTime()
            },
            a = function(e) {
                var t = [];
                return e.trustedDomains && (typeof e.trustedDomains == "string" ? t.push("trustedDomain=" + e.trustedDomains) : t.push("trustedDomain=" + e.trustedDomains.join(","))), t.join("&")
            },
            f = function(e, t) {
                if (t.indexOf) return t.indexOf(e);
                for (var n = 0, r = t.length; n < r; n++)
                    if (t[n] === e) return n;
                return -1
            },
            l = function(e) {
                if (typeof e == "string") throw new TypeError("ZeroClipboard doesn't accept query strings.");
                return e.length ? e : [e]
            },
            c = function(e, t) {
                e && (c.prototype._singleton || this).glue(e);
                if (c.prototype._singleton) return c.prototype._singleton;
                c.prototype._singleton = this, this.options = {};
                for (var n in d) this.options[n] = d[n];
                for (var r in t) this.options[r] = t[r];
                this.handlers = {}, c.detectFlashSupport() && v()
            },
            h, p = [];
        c.prototype.setCurrent = function(t) {
            h = t, this.reposition(), t.getAttribute("title") && this.setTitle(t.getAttribute("title")), this.setHandCursor(e(t, "cursor") == "pointer")
        }, c.prototype.setText = function(e) {
            e && e !== "" && (this.options.text = e, this.ready() && this.flashBridge.setText(e))
        }, c.prototype.setTitle = function(e) {
            e && e !== "" && this.htmlBridge.setAttribute("title", e)
        }, c.prototype.setSize = function(e, t) {
            this.ready() && this.flashBridge.setSize(e, t)
        }, c.prototype.setHandCursor = function(e) {
            this.ready() && this.flashBridge.setHandCursor(e)
        }, c.version = "1.1.7";
        var d = {
            moviePath: "ZeroClipboard.swf",
            trustedDomains: null,
            text: null,
            hoverClass: "zeroclipboard-is-hover",
            activeClass: "zeroclipboard-is-active",
            allowScriptAccess: "sameDomain"
        };
        c.setDefaults = function(e) {
            for (var t in e) d[t] = e[t]
        }, c.destroy = function() {
            c.prototype._singleton.unglue(p);
            var e = c.prototype._singleton.htmlBridge;
            e.parentNode.removeChild(e), delete c.prototype._singleton
        }, c.detectFlashSupport = function() {
            var e = !1;
            try {
                new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (e = !0)
            } catch (t) {
                navigator.mimeTypes["application/x-shockwave-flash"] && (e = !0)
            }
            return e
        };
        var v = function() {
            var e = c.prototype._singleton,
                t = document.getElementById("global-zeroclipboard-html-bridge");
            if (!t) {
                var n = '      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">         <param name="movie" value="' + e.options.moviePath + u(e.options.moviePath) + '"/>         <param name="allowScriptAccess" value="' + e.options.allowScriptAccess + '"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="' + a(e.options) + '"/>         <embed src="' + e.options.moviePath + u(e.options.moviePath) + '"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="100%" height="100%"           name="global-zeroclipboard-flash-bridge"           allowScriptAccess="always"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="' + a(e.options) + '"           scale="exactfit">         </embed>       </object>';
                t = document.createElement("div"), t.id = "global-zeroclipboard-html-bridge", t.setAttribute("class", "global-zeroclipboard-container"), t.setAttribute("data-clipboard-ready", !1), t.style.position = "absolute", t.style.left = "-9999px", t.style.top = "-9999px", t.style.width = "15px", t.style.height = "15px", t.style.zIndex = "9999", t.innerHTML = n, document.body.appendChild(t)
            }
            e.htmlBridge = t, e.flashBridge = document["global-zeroclipboard-flash-bridge"] || t.children[0].lastElementChild
        };
        c.prototype.resetBridge = function() {
            this.htmlBridge.style.left = "-9999px", this.htmlBridge.style.top = "-9999px", this.htmlBridge.removeAttribute("title"), this.htmlBridge.removeAttribute("data-clipboard-text"), s(h, this.options.activeClass), h = null, this.options.text = null
        }, c.prototype.ready = function() {
            var e = this.htmlBridge.getAttribute("data-clipboard-ready");
            return e === "true" || e === !0
        }, c.prototype.reposition = function() {
            if (!h) return !1;
            var e = o(h);
            this.htmlBridge.style.top = e.top + "px", this.htmlBridge.style.left = e.left + "px", this.htmlBridge.style.width = e.width + "px", this.htmlBridge.style.height = e.height + "px", this.htmlBridge.style.zIndex = e.zIndex + 1, this.setSize(e.width, e.height)
        }, c.dispatch = function(e, t) {
            c.prototype._singleton.receiveEvent(e, t)
        }, c.prototype.on = function(e, t) {
            var n = e.toString().split(/\s/g);
            for (var r = 0; r < n.length; r++) e = n[r].toLowerCase().replace(/^on/, ""), this.handlers[e] || (this.handlers[e] = t);
            this.handlers.noflash && !c.detectFlashSupport() && this.receiveEvent("onNoFlash", null)
        }, c.prototype.addEventListener = c.prototype.on, c.prototype.off = function(e, t) {
            var n = e.toString().split(/\s/g);
            for (var r = 0; r < n.length; r++) {
                e = n[r].toLowerCase().replace(/^on/, "");
                for (var i in this.handlers) i === e && this.handlers[i] === t && delete this.handlers[i]
            }
        }, c.prototype.removeEventListener = c.prototype.off, c.prototype.receiveEvent = function(e, t) {
            e = e.toString().toLowerCase().replace(/^on/, "");
            var n = h;
            switch (e) {
                case "load":
                    if (t && parseFloat(t.flashVersion.replace(",", ".").replace(/[^0-9\.]/gi, "")) < 10) {
                        this.receiveEvent("onWrongFlash", {
                            flashVersion: t.flashVersion
                        });
                        return
                    }
                    this.htmlBridge.setAttribute("data-clipboard-ready", !0);
                    break;
                case "mouseover":
                    i(n, this.options.hoverClass);
                    break;
                case "mouseout":
                    s(n, this.options.hoverClass), this.resetBridge();
                    break;
                case "mousedown":
                    i(n, this.options.activeClass);
                    break;
                case "mouseup":
                    s(n, this.options.activeClass);
                    break;
                case "datarequested":
                    var r = n.getAttribute("data-clipboard-target"),
                        o = r ? document.getElementById(r) : null;
                    if (o) {
                        var u = o.value || o.textContent || o.innerText;
                        u && this.setText(u)
                    } else {
                        var a = n.getAttribute("data-clipboard-text");
                        a && this.setText(a)
                    }
                    break;
                case "complete":
                    this.options.text = null
            }
            if (this.handlers[e]) {
                var f = this.handlers[e];
                typeof f == "function" ? f.call(n, this, t) : typeof f == "string" && window[f].call(n, this, t)
            }
        }, c.prototype.glue = function(e) {
            e = l(e);
            for (var r = 0; r < e.length; r++) f(e[r], p) == -1 && (p.push(e[r]), n(e[r], "mouseover", t))
        }, c.prototype.unglue = function(e) {
            e = l(e);
            for (var n = 0; n < e.length; n++) {
                r(e[n], "mouseover", t);
                var i = f(e[n], p);
                i != -1 && p.splice(i, 1)
            }
        }, typeof module != "undefined" ? module.exports = c : typeof define == "function" && define.amd ? define(function() {
            return c
        }) : window.ZeroClipboard = c
    }(),
    function(e) {
        function n(e, t, n) {
            var r = e.children(),
                i = !1;
            e.empty();
            for (var o = 0, u = r.length; o < u; o++) {
                var a = r.eq(o);
                e.append(a), n && e.append(n);
                if (s(e, t)) {
                    a.remove(), i = !0;
                    break
                }
                n && n.remove()
            }
            return i
        }

        function r(t, n, o, u, a) {
            var f = t.contents(),
                l = !1;
            t.empty();
            var c = "table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, select, optgroup, option, textarea, script, style";
            for (var h = 0, p = f.length; h < p; h++) {
                if (l) break;
                var d = f[h],
                    v = e(d);
                if (typeof d == "undefined") continue;
                t.append(v), a && t[t.is(c) ? "after" : "append"](a), d.nodeType == 3 ? s(o, u) && (l = i(v, n, o, u, a)) : l = r(v, n, o, u, a), l || a && a.remove()
            }
            return l
        }

        function i(e, t, n, r, u) {
            var l = !1,
                c = e[0];
            if (typeof c == "undefined") return !1;
            var h = r.wrap == "letter" ? "" : " ",
                p = f(c).split(h),
                d = -1,
                v = -1,
                m = 0,
                g = p.length - 1;
            while (m <= g) {
                var y = Math.floor((m + g) / 2);
                if (y == v) break;
                v = y, a(c, p.slice(0, v + 1).join(h) + r.ellipsis), s(n, r) ? g = v : (d = v, m = v)
            }
            if (d == -1 || p.length == 1 && p[0].length == 0) {
                var w = e.parent();
                e.remove();
                var E = u ? u.length : 0;
                if (w.contents().size() > E) {
                    var S = w.contents().eq(-1 - E);
                    l = i(S, t, n, r, u)
                } else {
                    var c = w.prev().contents().eq(-1)[0];
                    if (typeof c != "undefined") {
                        var b = o(f(c), r);
                        a(c, b), w.remove(), l = !0
                    }
                }
            } else {
                var b = o(p.slice(0, d + 1).join(h), r);
                l = !0, a(c, b)
            }
            return l
        }

        function s(e, t) {
            return e.innerHeight() > t.maxHeight
        }

        function o(t, n) {
            while (e.inArray(t.slice(-1), n.lastCharacter.remove) > -1) t = t.slice(0, -1);
            return e.inArray(t.slice(-1), n.lastCharacter.noEllipsis) < 0 && (t += n.ellipsis), t
        }

        function u(e) {
            return {
                width: e.innerWidth(),
                height: e.innerHeight()
            }
        }

        function a(e, t) {
            e.innerText ? e.innerText = t : e.nodeValue ? e.nodeValue = t : e.textContent && (e.textContent = t)
        }

        function f(e) {
            return e.innerText ? e.innerText : e.nodeValue ? e.nodeValue : e.textContent ? e.textContent : ""
        }

        function l(t, n) {
            return typeof t == "undefined" ? !1 : t ? typeof t == "string" ? (t = e(t, n), t.length ? t : !1) : typeof t == "object" ? typeof t.jquery == "undefined" ? !1 : t : !1 : !1
        }

        function c(e) {
            var t = e.innerHeight(),
                n = ["paddingTop", "paddingBottom"];
            for (var r = 0, i = n.length; r < i; r++) {
                var s = parseInt(e.css(n[r]), 10);
                isNaN(s) && (s = 0), t -= s
            }
            return t
        }

        function h(e, t) {
            return e ? (typeof t == "string" ? t = "dotdotdot: " + t : t = ["dotdotdot:", t], typeof window.console != "undefined" && typeof window.console.log != "undefined" && window.console.log(t), !1) : !1
        }
        if (e.fn.dotdotdot) return;
        e.fn.dotdotdot = function(i) {
            if (this.length == 0) return (!i || i.debug !== !1) && h(!0, 'No element found for "' + this.selector + '".'), this;
            if (this.length > 1) return this.each(function() {
                e(this).dotdotdot(i)
            });
            var o = this;
            o.data("dotdotdot") && o.trigger("destroy.dot"), o.bind_events = function() {
                return o.bind("update.dot", function(t, i) {
                    t.preventDefault(), t.stopPropagation(), f.maxHeight = typeof f.height == "number" ? f.height : c(o), f.maxHeight += f.tolerance;
                    if (typeof i != "undefined") {
                        if (typeof i == "string" || i instanceof HTMLElement) i = e("<div />").append(i).contents();
                        i instanceof e && (a = i)
                    }
                    m = o.wrapInner('<div class="dotdotdot" />').children(), m.empty().append(a.clone(!0)).css({
                        height: "auto",
                        width: "auto",
                        border: "none",
                        padding: 0,
                        margin: 0
                    });
                    var u = !1,
                        l = !1;
                    return p.afterElement && (u = p.afterElement.clone(!0), p.afterElement.remove()), s(m, f) && (f.wrap == "children" ? l = n(m, f, u) : l = r(m, o, m, f, u)), m.replaceWith(m.contents()), m = null, e.isFunction(f.callback) && f.callback.call(o[0], l, a), p.isTruncated = l, l
                }).bind("isTruncated.dot", function(e, t) {
                    return e.preventDefault(), e.stopPropagation(), typeof t == "function" && t.call(o[0], p.isTruncated), p.isTruncated
                }).bind("originalContent.dot", function(e, t) {
                    return e.preventDefault(), e.stopPropagation(), typeof t == "function" && t.call(o[0], a), a
                }).bind("destroy.dot", function(e) {
                    e.preventDefault(), e.stopPropagation(), o.unwatch().unbind_events().empty().append(a).data("dotdotdot", !1)
                }), o
            }, o.unbind_events = function() {
                return o.unbind(".dot"), o
            }, o.watch = function() {
                o.unwatch();
                if (f.watch == "window") {
                    var t = e(window),
                        n = t.width(),
                        r = t.height();
                    t.bind("resize.dot" + p.dotId, function() {
                        if (n != t.width() || r != t.height() || !f.windowResizeFix) n = t.width(), r = t.height(), v && clearInterval(v), v = setTimeout(function() {
                            o.trigger("update.dot")
                        }, 10)
                    })
                } else d = u(o), v = setInterval(function() {
                    var e = u(o);
                    if (d.width != e.width || d.height != e.height) o.trigger("update.dot"), d = u(o)
                }, 100);
                return o
            }, o.unwatch = function() {
                return e(window).unbind("resize.dot" + p.dotId), v && clearInterval(v), o
            };
            var a = o.contents(),
                f = e.extend(!0, {}, e.fn.dotdotdot.defaults, i),
                p = {},
                d = {},
                v = null,
                m = null;
            return p.afterElement = l(f.after, o), p.isTruncated = !1, p.dotId = t++, o.data("dotdotdot", !0).bind_events().trigger("update.dot"), f.watch && o.watch(), o
        }, e.fn.dotdotdot.defaults = {
            ellipsis: "... ",
            wrap: "word",
            lastCharacter: {
                remove: [" ", ",", ";", ".", "!", "?"],
                noEllipsis: []
            },
            tolerance: 0,
            callback: null,
            after: null,
            height: null,
            watch: !1,
            windowResizeFix: !0,
            debug: !1
        };
        var t = 1,
            p = e.fn.html;
        e.fn.html = function(e) {
            if (typeof e != "undefined") return this.data("dotdotdot") && typeof e != "function" ? this.trigger("update", [e]) : p.call(this, e);
            return p.call(this)
        };
        var d = e.fn.text;
        e.fn.text = function(t) {
            if (typeof t != "undefined") {
                if (this.data("dotdotdot")) {
                    var n = e("<div />");
                    return n.text(t), t = n.html(), n.remove(), this.trigger("update", [t])
                }
                return d.call(this, t)
            }
            return d.call(this)
        }
    }(jQuery),
    function(e) {
        function n() {
            var t = r(this);
            return isNaN(t.datetime) || e(this).text(i(t.datetime)), this
        }

        function r(n) {
            n = e(n);
            if (!n.data("timeago")) {
                n.data("timeago", {
                    datetime: t.datetime(n)
                });
                var r = e.trim(n.text());
                r.length > 0 && (!t.isTime(n) || !n.attr("title")) && n.attr("title", r)
            }
            return n.data("timeago")
        }

        function i(e) {
            return t.inWords(s(e))
        }

        function s(e) {
            return (new Date).getTime() - e.getTime()
        }
        e.timeago = function(t) {
            return t instanceof Date ? i(t) : typeof t == "string" ? i(e.timeago.parse(t)) : typeof t == "number" ? i(new Date(t)) : i(e.timeago.datetime(t))
        };
        var t = e.timeago;
        e.extend(e.timeago, {
            settings: {
                refreshMillis: 6e4,
                allowFuture: !1,
                strings: {
                    prefixAgo: null,
                    prefixFromNow: null,
                    suffixAgo: "ago",
                    suffixFromNow: "from now",
                    seconds: "less than a minute",
                    minute: "about a minute",
                    minutes: "%d minutes",
                    hour: "about an hour",
                    hours: "about %d hours",
                    day: "a day",
                    days: "%d days",
                    month: "about a month",
                    months: "%d months",
                    year: "about a year",
                    years: "%d years",
                    wordSeparator: " ",
                    numbers: []
                }
            },
            inWords: function(t) {
                function l(r, i) {
                    var s = e.isFunction(r) ? r(i, t) : r,
                        o = n.numbers && n.numbers[i] || i;
                    return s.replace(/%d/i, o)
                }
                var n = this.settings.strings,
                    r = n.prefixAgo,
                    i = n.suffixAgo;
                this.settings.allowFuture && t < 0 && (r = n.prefixFromNow, i = n.suffixFromNow);
                var s = Math.abs(t) / 1e3,
                    o = s / 60,
                    u = o / 60,
                    a = u / 24,
                    f = a / 365,
                    c = s < 45 && l(n.seconds, Math.round(s)) || s < 90 && l(n.minute, 1) || o < 45 && l(n.minutes, Math.round(o)) || o < 90 && l(n.hour, 1) || u < 24 && l(n.hours, Math.round(u)) || u < 42 && l(n.day, 1) || a < 30 && l(n.days, Math.round(a)) || a < 45 && l(n.month, 1) || a < 365 && l(n.months, Math.round(a / 30)) || f < 1.5 && l(n.year, 1) || l(n.years, Math.round(f)),
                    h = n.wordSeparator === undefined ? " " : n.wordSeparator;
                return e.trim([r, c, i].join(h))
            },
            parse: function(t) {
                var n = e.trim(t);
                return n = n.replace(/\.\d+/, ""), n = n.replace(/-/, "/").replace(/-/, "/"), n = n.replace(/T/, " ").replace(/Z/, " UTC"), n = n.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), new Date(n)
            },
            datetime: function(n) {
                var r = t.isTime(n) ? e(n).attr("datetime") : e(n).attr("title");
                return t.parse(r)
            },
            isTime: function(t) {
                return e(t).get(0).tagName.toLowerCase() === "time"
            }
        }), e.fn.timeago = function() {
            var e = this;
            e.each(n);
            var r = t.settings;
            return r.refreshMillis > 0 && setInterval(function() {
                e.each(n)
            }, r.refreshMillis), e
        }, document.createElement("abbr"), document.createElement("time")
    }(jQuery),
    function(e) {
        e.timeago.settings.strings.minute = "a minute", e.timeago.settings.strings.hour = "an hour", e.timeago.settings.strings.hours = "%d hours", e.timeago.settings.strings.month = "a month", e.timeago.settings.strings.year = "a year"
    }(jQuery),
    function(e, t, n) {
        function f(e) {
            return e = e || location.href, "#" + e.replace(/^[^#]*#?(.*)$/, "$1")
        }
        var r = "hashchange",
            i = document,
            s, o = e.event.special,
            u = i.documentMode,
            a = "on" + r in t && (u === n || u > 7);
        e.fn[r] = function(e) {
            return e ? this.bind(r, e) : this.trigger(r)
        }, e.fn[r].delay = 50, o[r] = e.extend(o[r], {
            setup: function() {
                if (a) return !1;
                e(s.start)
            },
            teardown: function() {
                if (a) return !1;
                e(s.stop)
            }
        }), s = function() {
            function m() {
                var n = f(),
                    i = v(u);
                n !== u ? (p(u = n, i), e(t).trigger(r)) : i !== u && (location.href = location.href.replace(/#.*/, "") + i), o = setTimeout(m, e.fn[r].delay)
            }
            var s = {},
                o, u = f(),
                l = function(e) {
                    return e
                },
                p = l,
                v = l;
            return s.start = function() {
                o || m()
            }, s.stop = function() {
                o && clearTimeout(o), o = n
            }, e.browser.msie && !a && function() {
                var t, n;
                s.start = function() {
                    t || (n = e.fn[r].src, n = n && n + f(), t = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                        n || p(f()), m()
                    }).attr("src", n || "javascript:0").insertAfter("body")[0].contentWindow, i.onpropertychange = function() {
                        try {
                            event.propertyName === "title" && (t.document.title = i.title)
                        } catch (e) {}
                    })
                }, s.stop = l, v = function() {
                    return f(t.location.href)
                }, p = function(n, s) {
                    var o = t.document,
                        u = e.fn[r].domain;
                    n !== s && (o.title = i.title, o.open(), u && o.write('<script>document.domain="' + u + '"</script>'), o.close(), t.location.hash = n)
                }
            }(), s
        }()
    }(jQuery, this),
    function(e, t) {
        function n(e, t, n) {
            var r = l[t.type] || {};
            return e == null ? n || !t.def ? null : t.def : (e = r.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : r.mod ? (e + r.mod) % r.mod : 0 > e ? 0 : r.max < e ? r.max : e)
        }

        function r(t) {
            var n = a(),
                r = n._rgba = [];
            return t = t.toLowerCase(), d(u, function(e, i) {
                var s, o = i.re.exec(t),
                    u = o && i.parse(o),
                    a = i.space || "rgba";
                if (u) return s = n[a](u), n[f[a].cache] = s[f[a].cache], r = n._rgba = s._rgba, !1
            }), r.length ? (r.join() === "0,0,0,0" && e.extend(r, p.transparent), n) : p[t]
        }

        function i(e, t, n) {
            return n = (n + 1) % 1, n * 6 < 1 ? e + (t - e) * n * 6 : n * 2 < 1 ? t : n * 3 < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
        }
        var s = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
            o = /^([\-+])=\s*(\d+\.?\d*)/,
            u = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(e) {
                    return [e[1], e[2], e[3], e[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function(e) {
                    return [e[1] * 2.55, e[2] * 2.55, e[3] * 2.55, e[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function(e) {
                    return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function(e) {
                    return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function(e) {
                    return [e[1], e[2] / 100, e[3] / 100, e[4]]
                }
            }],
            a = e.Color = function(t, n, r, i) {
                return new e.Color.fn.parse(t, n, r, i)
            },
            f = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },
                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            },
            l = {
                "byte": {
                    floor: !0,
                    max: 255
                },
                percent: {
                    max: 1
                },
                degrees: {
                    mod: 360,
                    floor: !0
                }
            },
            c = a.support = {},
            h = e("<p>")[0],
            p, d = e.each;
        h.style.cssText = "background-color:rgba(1,1,1,.5)", c.rgba = h.style.backgroundColor.indexOf("rgba") > -1, d(f, function(e, t) {
            t.cache = "_" + e, t.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }), a.fn = e.extend(a.prototype, {
            parse: function(i, s, o, u) {
                if (i === t) return this._rgba = [null, null, null, null], this;
                if (i.jquery || i.nodeType) i = e(i).css(s), s = t;
                var l = this,
                    c = e.type(i),
                    h = this._rgba = [];
                s !== t && (i = [i, s, o, u], c = "array");
                if (c === "string") return this.parse(r(i) || p._default);
                if (c === "array") return d(f.rgba.props, function(e, t) {
                    h[t.idx] = n(i[t.idx], t)
                }), this;
                if (c === "object") return i instanceof a ? d(f, function(e, t) {
                    i[t.cache] && (l[t.cache] = i[t.cache].slice())
                }) : d(f, function(t, r) {
                    var s = r.cache;
                    d(r.props, function(e, t) {
                        if (!l[s] && r.to) {
                            if (e === "alpha" || i[e] == null) return;
                            l[s] = r.to(l._rgba)
                        }
                        l[s][t.idx] = n(i[e], t, !0)
                    }), l[s] && e.inArray(null, l[s].slice(0, 3)) < 0 && (l[s][3] = 1, r.from && (l._rgba = r.from(l[s])))
                }), this
            },
            is: function(e) {
                var t = a(e),
                    n = !0,
                    r = this;
                return d(f, function(e, i) {
                    var s, o = t[i.cache];
                    return o && (s = r[i.cache] || i.to && i.to(r._rgba) || [], d(i.props, function(e, t) {
                        if (o[t.idx] != null) return n = o[t.idx] === s[t.idx], n
                    })), n
                }), n
            },
            _space: function() {
                var e = [],
                    t = this;
                return d(f, function(n, r) {
                    t[r.cache] && e.push(n)
                }), e.pop()
            },
            transition: function(e, t) {
                var r = a(e),
                    i = r._space(),
                    s = f[i],
                    o = this.alpha() === 0 ? a("transparent") : this,
                    u = o[s.cache] || s.to(o._rgba),
                    c = u.slice();
                return r = r[s.cache], d(s.props, function(e, i) {
                    var s = i.idx,
                        o = u[s],
                        a = r[s],
                        f = l[i.type] || {};
                    if (a === null) return;
                    o === null ? c[s] = a : (f.mod && (a - o > f.mod / 2 ? o += f.mod : o - a > f.mod / 2 && (o -= f.mod)), c[s] = n((a - o) * t + o, i))
                }), this[i](c)
            },
            blend: function(t) {
                if (this._rgba[3] === 1) return this;
                var n = this._rgba.slice(),
                    r = n.pop(),
                    i = a(t)._rgba;
                return a(e.map(n, function(e, t) {
                    return (1 - r) * i[t] + r * e
                }))
            },
            toRgbaString: function() {
                var t = "rgba(",
                    n = e.map(this._rgba, function(e, t) {
                        return e == null ? t > 2 ? 1 : 0 : e
                    });
                return n[3] === 1 && (n.pop(), t = "rgb("), t + n.join() + ")"
            },
            toHslaString: function() {
                var t = "hsla(",
                    n = e.map(this.hsla(), function(e, t) {
                        return e == null && (e = t > 2 ? 1 : 0), t && t < 3 && (e = Math.round(e * 100) + "%"), e
                    });
                return n[3] === 1 && (n.pop(), t = "hsl("), t + n.join() + ")"
            },
            toHexString: function(t) {
                var n = this._rgba.slice(),
                    r = n.pop();
                return t && n.push(~~(r * 255)), "#" + e.map(n, function(e) {
                    return e = (e || 0).toString(16), e.length === 1 ? "0" + e : e
                }).join("")
            },
            toString: function() {
                return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
            }
        }), a.fn.parse.prototype = a.fn, f.hsla.to = function(e) {
            if (e[0] == null || e[1] == null || e[2] == null) return [null, null, null, e[3]];
            var t = e[0] / 255,
                n = e[1] / 255,
                r = e[2] / 255,
                i = e[3],
                s = Math.max(t, n, r),
                o = Math.min(t, n, r),
                u = s - o,
                a = s + o,
                f = a * .5,
                l, c;
            return o === s ? l = 0 : t === s ? l = 60 * (n - r) / u + 360 : n === s ? l = 60 * (r - t) / u + 120 : l = 60 * (t - n) / u + 240, u === 0 ? c = 0 : f <= .5 ? c = u / a : c = u / (2 - a), [Math.round(l) % 360, c, f, i == null ? 1 : i]
        }, f.hsla.from = function(e) {
            if (e[0] == null || e[1] == null || e[2] == null) return [null, null, null, e[3]];
            var t = e[0] / 360,
                n = e[1],
                r = e[2],
                s = e[3],
                o = r <= .5 ? r * (1 + n) : r + n - r * n,
                u = 2 * r - o;
            return [Math.round(i(u, o, t + 1 / 3) * 255), Math.round(i(u, o, t) * 255), Math.round(i(u, o, t - 1 / 3) * 255), s]
        }, d(f, function(r, i) {
            var s = i.props,
                u = i.cache,
                f = i.to,
                l = i.from;
            a.fn[r] = function(r) {
                f && !this[u] && (this[u] = f(this._rgba));
                if (r === t) return this[u].slice();
                var i, o = e.type(r),
                    c = o === "array" || o === "object" ? r : arguments,
                    h = this[u].slice();
                return d(s, function(e, t) {
                    var r = c[o === "object" ? e : t.idx];
                    r == null && (r = h[t.idx]), h[t.idx] = n(r, t)
                }), l ? (i = a(l(h)), i[u] = h, i) : a(h)
            }, d(s, function(t, n) {
                if (a.fn[t]) return;
                a.fn[t] = function(i) {
                    var s = e.type(i),
                        u = t === "alpha" ? this._hsla ? "hsla" : "rgba" : r,
                        a = this[u](),
                        f = a[n.idx],
                        l;
                    return s === "undefined" ? f : (s === "function" && (i = i.call(this, f), s = e.type(i)), i == null && n.empty ? this : (s === "string" && (l = o.exec(i), l && (i = f + parseFloat(l[2]) * (l[1] === "+" ? 1 : -1))), a[n.idx] = i, this[u](a)))
                }
            })
        }), a.hook = function(t) {
            var n = t.split(" ");
            d(n, function(t, n) {
                e.cssHooks[n] = {
                    set: function(t, i) {
                        var s, o, u = "";
                        if (i !== "transparent" && (e.type(i) !== "string" || (s = r(i)))) {
                            i = a(s || i);
                            if (!c.rgba && i._rgba[3] !== 1) {
                                o = n === "backgroundColor" ? t.parentNode : t;
                                while ((u === "" || u === "transparent") && o && o.style) try {
                                    u = e.css(o, "backgroundColor"), o = o.parentNode
                                } catch (f) {}
                                i = i.blend(u && u !== "transparent" ? u : "_default")
                            }
                            i = i.toRgbaString()
                        }
                        try {
                            t.style[n] = i
                        } catch (f) {}
                    }
                }, e.fx.step[n] = function(t) {
                    t.colorInit || (t.start = a(t.elem, n), t.end = a(t.end), t.colorInit = !0), e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos))
                }
            })
        }, a.hook(s), e.cssHooks.borderColor = {
            expand: function(e) {
                var t = {};
                return d(["Top", "Right", "Bottom", "Left"], function(n, r) {
                    t["border" + r + "Color"] = e
                }), t
            }
        }, p = e.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(jQuery),
    function(e, t, n) {
        t.fn.imagesLoaded = function(e) {
            function u() {
                e.call(n, r)
            }

            function a(e) {
                var n = e.target;
                n.src !== s && t.inArray(n, o) === -1 && (o.push(n), --i <= 0 && (setTimeout(u), r.unbind(".imagesLoaded", a)))
            }
            var n = this,
                r = n.find("img").add(n.filter("img")),
                i = r.length,
                s = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
                o = [];
            return i || u(), r.bind("load.imagesLoaded error.imagesLoaded", a).each(function() {
                var e = this.src;
                this.src = s, this.src = e
            }), n
        };
        var r = function(t) {
            e.console && e.console.error(t)
        };
        t.fn.masonry = function(e) {
            if (typeof e == "string") {
                var n = Array.prototype.slice.call(arguments, 1);
                this.each(function() {
                    var i = t.data(this, "masonry");
                    if (!i) {
                        r("cannot call methods on masonry prior to initialization; attempted to call method '" + e + "'");
                        return
                    }
                    if (!t.isFunction(i[e]) || e.charAt(0) === "_") {
                        r("no such method '" + e + "' for masonry instance");
                        return
                    }
                    i[e].apply(i, n)
                })
            } else this.each(function() {
                var n = t.data(this, "masonry");
                n ? (n.option(e || {}), n._init()) : t.data(this, "masonry", new t.Mason(e, this))
            });
            return this
        }
    }(window, jQuery),
    function(e, t, n) {
        "use strict";
        var r = t.event,
            i;
        r.special.smartresize = {
            setup: function() {
                t(this).bind("resize", r.special.smartresize.handler)
            },
            teardown: function() {
                t(this).unbind("resize", r.special.smartresize.handler)
            },
            handler: function(e, t) {
                var n = this,
                    r = arguments;
                e.type = "smartresize", i && clearTimeout(i), i = setTimeout(function() {
                    jQuery.event.handle.apply(n, r)
                }, t === "execAsap" ? 0 : 100)
            }
        }, t.fn.smartresize = function(e) {
            return e ? this.bind("smartresize", e) : this.trigger("smartresize", ["execAsap"])
        }, t.Mason = function(e, n) {
            this.element = t(n), this._create(e), this._init()
        }, t.Mason.settings = {
            isResizable: !0,
            isAnimated: !1,
            animationOptions: {
                queue: !1,
                duration: 500
            },
            gutterWidth: 0,
            isRTL: !1,
            isFitWidth: !1,
            containerStyle: {
                position: "relative"
            }
        }, t.Mason.prototype = {
            _filterFindBricks: function(e) {
                var t = this.options.itemSelector;
                return t ? e.filter(t).add(e.find(t)) : e
            },
            _getBricks: function(e) {
                var t = this._filterFindBricks(e).css({
                    position: "absolute"
                }).addClass("masonry-brick");
                return t
            },
            _create: function(n) {
                this.options = t.extend(!0, {}, t.Mason.settings, n), this.styleQueue = [];
                var r = this.element[0].style;
                this.originalStyle = {
                    height: r.height || ""
                };
                var i = this.options.containerStyle;
                for (var s in i) this.originalStyle[s] = r[s] || "";
                this.element.css(i), this.horizontalDirection = this.options.isRTL ? "right" : "left", this.offset = {
                    x: parseInt(this.element.css("padding-" + this.horizontalDirection), 10),
                    y: parseInt(this.element.css("padding-top"), 10)
                }, this.isFluid = this.options.columnWidth && typeof this.options.columnWidth == "function";
                var o = this;
                setTimeout(function() {
                    o.element.addClass("masonry")
                }, 0), this.options.isResizable && t(e).bind("smartresize.masonry", function() {
                    o.resize()
                }), this.reloadItems()
            },
            _init: function(e) {
                this._getColumns(), this._reLayout(e)
            },
            option: function(e, n) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            },
            layout: function(e, t) {
                for (var n = 0, r = e.length; n < r; n++) this._placeBrick(e[n]);
                var i = {};
                i.height = Math.max.apply(Math, this.colYs);
                if (this.options.isFitWidth) {
                    var s = 0;
                    n = this.cols;
                    while (--n) {
                        if (this.colYs[n] !== 0) break;
                        s++
                    }
                    i.width = (this.cols - s) * this.columnWidth - this.options.gutterWidth
                }
                this.styleQueue.push({
                    $el: this.element,
                    style: i
                });
                var o = this.isLaidOut ? this.options.isAnimated ? "animate" : "css" : "css",
                    u = this.options.animationOptions,
                    a;
                for (n = 0, r = this.styleQueue.length; n < r; n++) a = this.styleQueue[n], a.$el[o](a.style, u);
                this.styleQueue = [], t && t.call(e), this.isLaidOut = !0
            },
            _getColumns: function() {
                var e = this.options.isFitWidth ? this.element.parent() : this.element,
                    t = e.width();
                this.columnWidth = this.isFluid ? this.options.columnWidth(t) : this.options.columnWidth || this.$bricks.outerWidth(!0) || t, this.columnWidth += this.options.gutterWidth, this.cols = Math.floor((t + this.options.gutterWidth) / this.columnWidth), this.cols = Math.max(this.cols, 1)
            },
            _placeBrick: function(e) {
                var n = t(e),
                    r, i, s, o, u;
                r = Math.ceil(n.outerWidth(!0) / (this.columnWidth + this.options.gutterWidth)), r = Math.min(r, this.cols);
                if (r === 1) s = this.colYs;
                else {
                    i = this.cols + 1 - r, s = [];
                    for (u = 0; u < i; u++) o = this.colYs.slice(u, u + r), s[u] = Math.max.apply(Math, o)
                }
                var a = Math.min.apply(Math, s),
                    f = 0;
                for (var l = 0, c = s.length; l < c; l++)
                    if (s[l] === a) {
                        f = l;
                        break
                    }
                var h = {
                    top: a + this.offset.y
                };
                h[this.horizontalDirection] = this.columnWidth * f + this.offset.x, this.styleQueue.push({
                    $el: n,
                    style: h
                });
                var p = a + n.outerHeight(!0),
                    d = this.cols + 1 - c;
                for (l = 0; l < d; l++) this.colYs[f + l] = p
            },
            resize: function() {
                var e = this.cols;
                this._getColumns(), (this.isFluid || this.cols !== e) && this._reLayout()
            },
            _reLayout: function(e) {
                var t = this.cols;
                this.colYs = [];
                while (t--) this.colYs.push(0);
                this.layout(this.$bricks, e)
            },
            reloadItems: function() {
                this.$bricks = this._getBricks(this.element.children())
            },
            reload: function(e) {
                this.reloadItems(), this._init(e)
            },
            appended: function(e, t, n) {
                if (t) {
                    this._filterFindBricks(e).css({
                        top: this.element.height()
                    });
                    var r = this;
                    setTimeout(function() {
                        r._appended(e, n)
                    }, 1)
                } else this._appended(e, n)
            },
            _appended: function(e, t) {
                var n = this._getBricks(e);
                this.$bricks = this.$bricks.add(n), this.layout(n, t)
            },
            remove: function(e) {
                this.$bricks = this.$bricks.not(e), e.remove()
            },
            destroy: function() {
                this.$bricks.removeClass("masonry-brick").each(function() {
                    this.style.position = "", this.style.top = "", this.style.left = ""
                });
                var n = this.element[0].style;
                for (var r in this.originalStyle) n[r] = this.originalStyle[r];
                this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"), t(e).unbind(".masonry")
            }
        }
    }(window, jQuery),
    function(e, t, n) {
        t.extend(!0, t.Mason.settings, {
            layoutPriorities: {
                upperPosition: 1,
                shelfOrder: 1
            }
        }), t.Mason.prototype._placeBrick = function(e) {
            var r = t(e),
                i = this.horizontalDirection,
                s, o, u, a;
            s = Math.ceil(r.outerWidth(!0) / (this.columnWidth + this.options.gutterWidth)), s = Math.min(s, this.cols);
            if (s === 1) u = this.colYs;
            else {
                o = this.cols + 1 - s, u = [];
                for (var f = 0; f < o; f++) a = this.colYs.slice(f, f + s), u[f] = Math.max.apply(Math, a)
            }
            var l = Math.min.apply(Math, u),
                c = {
                    top: 0
                };
            c[i] = 0;
            var h = this.styleQueue.slice(-1)[0];
            if (h != n) {
                var p = h.$el.outerWidth(!0),
                    d = h.style[i] - this.offset.x;
                c[i] = d + p, c.top = h.style.top;
                var v = c[i] + s * this.columnWidth,
                    m = this.cols * this.columnWidth;
                v > m && (c[i] = 0)
            }
            var g = this.options.layoutPriorities,
                y = [];
            for (var b = 0, w = u.length; b < w; b++) {
                var E = Math.abs(c[i] - this.columnWidth * b),
                    S = Math.abs(c.top - u[b]),
                    x = Math.pow(E, 2) + Math.pow(S, 2),
                    T = Math.round(Math.sqrt(x)),
                    N = g.shelfOrder * T,
                    C = g.upperPosition * (u[b] - l);
                y[b] = C + N
            }
            var k = Math.min.apply(null, y);
            for (b = 0, w = y.length; b < w; b++)
                if (y[b] === k) {
                    shortCol = b;
                    break
                }
            var L = {
                top: u[shortCol] + this.offset.y
            };
            L[i] = this.columnWidth * shortCol + this.offset.x, this.styleQueue.push({
                $el: r,
                style: L
            });
            var A = u[shortCol] + r.outerHeight(!0),
                O = this.cols + 1 - w;
            for (b = 0; b < O; b++) this.colYs[shortCol + b] = A
        }
    }(window, jQuery),
    function(e) {
        function t() {
            function r(e) {
                var o = e < 1e12 ? n ? performance.now() + performance.timing.navigationStart : t() : e || t();
                o - s >= 1e3 && (c._updateTargets(), s = o), i(r)
            }
            this.regional = [], this.regional[""] = {
                labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
                labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
                compactLabels: ["y", "m", "w", "d"],
                whichLabels: null,
                digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                timeSeparator: ":",
                isRTL: !1
            }, this._defaults = {
                until: null,
                since: null,
                timezone: null,
                serverSync: null,
                format: "dHMS",
                layout: "",
                compact: !1,
                significant: 0,
                description: "",
                expiryUrl: "",
                expiryText: "",
                alwaysExpire: !1,
                onExpiry: null,
                onTick: null,
                tickInterval: 1
            }, e.extend(this._defaults, this.regional[""]), this._serverSyncs = [];
            var t = typeof Date.now == "function" ? Date.now : function() {
                    return (new Date).getTime()
                },
                n = window.performance && typeof window.performance.now == "function",
                i = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null,
                s = 0;
            !i || e.noRequestAnimationFrame ? (e.noRequestAnimationFrame = null, setInterval(function() {
                c._updateTargets()
            }, 980)) : (s = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || t(), i(r))
        }

        function l(t, n) {
            return t == "option" && (n.length == 0 || n.length == 1 && typeof n[0] == "string") ? !0 : e.inArray(t, f) > -1
        }
        var n = 0,
            r = 1,
            i = 2,
            s = 3,
            o = 4,
            u = 5,
            a = 6;
        e.extend(t.prototype, {
            markerClassName: "hasCountdown",
            propertyName: "countdown",
            _rtlClass: "countdown_rtl",
            _sectionClass: "countdown_section",
            _amountClass: "countdown_amount",
            _rowClass: "countdown_row",
            _holdingClass: "countdown_holding",
            _showClass: "countdown_show",
            _descrClass: "countdown_descr",
            _timerTargets: [],
            setDefaults: function(t) {
                this._resetExtraLabels(this._defaults, t), e.extend(this._defaults, t || {})
            },
            UTCDate: function(e, t, n, r, i, s, o, u) {
                typeof t == "object" && t.constructor == Date && (u = t.getMilliseconds(), o = t.getSeconds(), s = t.getMinutes(), i = t.getHours(), r = t.getDate(), n = t.getMonth(), t = t.getFullYear());
                var a = new Date;
                return a.setUTCFullYear(t), a.setUTCDate(1), a.setUTCMonth(n || 0), a.setUTCDate(r || 1), a.setUTCHours(i || 0), a.setUTCMinutes((s || 0) - (Math.abs(e) < 30 ? e * 60 : e)), a.setUTCSeconds(o || 0), a.setUTCMilliseconds(u || 0), a
            },
            periodsToSeconds: function(e) {
                return e[0] * 31557600 + e[1] * 2629800 + e[2] * 604800 + e[3] * 86400 + e[4] * 3600 + e[5] * 60 + e[6]
            },
            _attachPlugin: function(t, n) {
                t = e(t);
                if (t.hasClass(this.markerClassName)) return;
                var r = {
                    options: e.extend({}, this._defaults),
                    _periods: [0, 0, 0, 0, 0, 0, 0]
                };
                t.addClass(this.markerClassName).data(this.propertyName, r), this._optionPlugin(t, n)
            },
            _addTarget: function(e) {
                this._hasTarget(e) || this._timerTargets.push(e)
            },
            _hasTarget: function(t) {
                return e.inArray(t, this._timerTargets) > -1
            },
            _removeTarget: function(t) {
                this._timerTargets = e.map(this._timerTargets, function(e) {
                    return e == t ? null : e
                })
            },
            _updateTargets: function() {
                for (var e = this._timerTargets.length - 1; e >= 0; e--) this._updateCountdown(this._timerTargets[e])
            },
            _optionPlugin: function(t, n, r) {
                t = e(t);
                var i = t.data(this.propertyName);
                if (!n || typeof n == "string" && r == null) {
                    var s = n;
                    return n = (i || {}).options, n && s ? n[s] : n
                }
                if (!t.hasClass(this.markerClassName)) return;
                n = n || {};
                if (typeof n == "string") {
                    var s = n;
                    n = {}, n[s] = r
                }
                n.layout && (n.layout = n.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")), this._resetExtraLabels(i.options, n);
                var o = i.options.timezone != n.timezone;
                e.extend(i.options, n), this._adjustSettings(t, i, n.until != null || n.since != null || o);
                var u = new Date;
                (i._since && i._since < u || i._until && i._until > u) && this._addTarget(t[0]), this._updateCountdown(t, i)
            },
            _updateCountdown: function(t, n) {
                var r = e(t);
                n = n || r.data(this.propertyName);
                if (!n) return;
                r.html(this._generateHTML(n)).toggleClass(this._rtlClass, n.options.isRTL);
                if (e.isFunction(n.options.onTick)) {
                    var i = n._hold != "lap" ? n._periods : this._calculatePeriods(n, n._show, n.options.significant, new Date);
                    (n.options.tickInterval == 1 || this.periodsToSeconds(i) % n.options.tickInterval == 0) && n.options.onTick.apply(t, [i])
                }
                var s = n._hold != "pause" && (n._since ? n._now.getTime() < n._since.getTime() : n._now.getTime() >= n._until.getTime());
                if (s && !n._expiring) {
                    n._expiring = !0;
                    if (this._hasTarget(t) || n.options.alwaysExpire) {
                        this._removeTarget(t), e.isFunction(n.options.onExpiry) && n.options.onExpiry.apply(t, []);
                        if (n.options.expiryText) {
                            var o = n.options.layout;
                            n.options.layout = n.options.expiryText, this._updateCountdown(t, n), n.options.layout = o
                        }
                        n.options.expiryUrl && (window.location = n.options.expiryUrl)
                    }
                    n._expiring = !1
                } else n._hold == "pause" && this._removeTarget(t);
                r.data(this.propertyName, n)
            },
            _resetExtraLabels: function(e, t) {
                var n = !1;
                for (var r in t)
                    if (r != "whichLabels" && r.match(/[Ll]abels/)) {
                        n = !0;
                        break
                    }
                if (n)
                    for (var r in e) r.match(/[Ll]abels[02-9]|compactLabels1/) && (e[r] = null)
            },
            _adjustSettings: function(t, n, r) {
                var i, s = 0,
                    o = null;
                for (var u = 0; u < this._serverSyncs.length; u++)
                    if (this._serverSyncs[u][0] == n.options.serverSync) {
                        o = this._serverSyncs[u][1];
                        break
                    }
                if (o != null) s = n.options.serverSync ? o : 0, i = new Date;
                else {
                    var a = e.isFunction(n.options.serverSync) ? n.options.serverSync.apply(t, []) : null;
                    i = new Date, s = a ? i.getTime() - a.getTime() : 0, this._serverSyncs.push([n.options.serverSync, s])
                }
                var f = n.options.timezone;
                f = f == null ? -i.getTimezoneOffset() : f;
                if (r || !r && n._until == null && n._since == null) n._since = n.options.since, n._since != null && (n._since = this.UTCDate(f, this._determineTime(n._since, null)), n._since && s && n._since.setMilliseconds(n._since.getMilliseconds() + s)), n._until = this.UTCDate(f, this._determineTime(n.options.until, i)), s && n._until.setMilliseconds(n._until.getMilliseconds() + s);
                n._show = this._determineShow(n)
            },
            _destroyPlugin: function(t) {
                t = e(t);
                if (!t.hasClass(this.markerClassName)) return;
                this._removeTarget(t[0]), t.removeClass(this.markerClassName).empty().removeData(this.propertyName)
            },
            _pausePlugin: function(e) {
                this._hold(e, "pause")
            },
            _lapPlugin: function(e) {
                this._hold(e, "lap")
            },
            _resumePlugin: function(e) {
                this._hold(e, null)
            },
            _hold: function(t, n) {
                var r = e.data(t, this.propertyName);
                if (r) {
                    if (r._hold == "pause" && !n) {
                        r._periods = r._savePeriods;
                        var i = r._since ? "-" : "+";
                        r[r._since ? "_since" : "_until"] = this._determineTime(i + r._periods[0] + "y" + i + r._periods[1] + "o" + i + r._periods[2] + "w" + i + r._periods[3] + "d" + i + r._periods[4] + "h" + i + r._periods[5] + "m" + i + r._periods[6] + "s"), this._addTarget(t)
                    }
                    r._hold = n, r._savePeriods = n == "pause" ? r._periods : null, e.data(t, this.propertyName, r), this._updateCountdown(t, r)
                }
            },
            _getTimesPlugin: function(t) {
                var n = e.data(t, this.propertyName);
                return n ? n._hold == "pause" ? n._savePeriods : n._hold ? this._calculatePeriods(n, n._show, n.options.significant, new Date) : n._periods : null
            },
            _determineTime: function(e, t) {
                var n = function(e) {
                        var t = new Date;
                        return t.setTime(t.getTime() + e * 1e3), t
                    },
                    r = function(e) {
                        e = e.toLowerCase();
                        var t = new Date,
                            n = t.getFullYear(),
                            r = t.getMonth(),
                            i = t.getDate(),
                            s = t.getHours(),
                            o = t.getMinutes(),
                            u = t.getSeconds(),
                            a = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g,
                            f = a.exec(e);
                        while (f) {
                            switch (f[2] || "s") {
                                case "s":
                                    u += parseInt(f[1], 10);
                                    break;
                                case "m":
                                    o += parseInt(f[1], 10);
                                    break;
                                case "h":
                                    s += parseInt(f[1], 10);
                                    break;
                                case "d":
                                    i += parseInt(f[1], 10);
                                    break;
                                case "w":
                                    i += parseInt(f[1], 10) * 7;
                                    break;
                                case "o":
                                    r += parseInt(f[1], 10), i = Math.min(i, c._getDaysInMonth(n, r));
                                    break;
                                case "y":
                                    n += parseInt(f[1], 10), i = Math.min(i, c._getDaysInMonth(n, r))
                            }
                            f = a.exec(e)
                        }
                        return new Date(n, r, i, s, o, u, 0)
                    },
                    i = e == null ? t : typeof e == "string" ? r(e) : typeof e == "number" ? n(e) : e;
                return i && i.setMilliseconds(0), i
            },
            _getDaysInMonth: function(e, t) {
                return 32 - (new Date(e, t, 32)).getDate()
            },
            _normalLabels: function(e) {
                return e
            },
            _generateHTML: function(t) {
                var f = this;
                t._periods = t._hold ? t._periods : this._calculatePeriods(t, t._show, t.options.significant, new Date);
                var l = !1,
                    h = 0,
                    p = t.options.significant,
                    d = e.extend({}, t._show);
                for (var v = n; v <= a; v++) l |= t._show[v] == "?" && t._periods[v] > 0, d[v] = t._show[v] == "?" && !l ? null : t._show[v], h += d[v] ? 1 : 0, p -= t._periods[v] > 0 ? 1 : 0;
                var m = [!1, !1, !1, !1, !1, !1, !1];
                for (var v = a; v >= n; v--) t._show[v] && (t._periods[v] ? m[v] = !0 : (m[v] = p > 0, p--));
                var g = t.options.compact ? t.options.compactLabels : t.options.labels,
                    y = t.options.whichLabels || this._normalLabels,
                    b = function(e) {
                        var n =
                            t.options["compactLabels" + y(t._periods[e])];
                        return d[e] ? f._translateDigits(t, t._periods[e]) + (n ? n[e] : g[e]) + " " : ""
                    },
                    w = function(e) {
                        var n = t.options["labels" + y(t._periods[e])];
                        return !t.options.significant && d[e] || t.options.significant && m[e] ? '<span class="' + c._sectionClass + '">' + '<span class="' + c._amountClass + '">' + f._translateDigits(t, t._periods[e]) + "</span><br/>" + (n ? n[e] : g[e]) + "</span>" : ""
                    };
                return t.options.layout ? this._buildLayout(t, d, t.options.layout, t.options.compact, t.options.significant, m) : (t.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (t._hold ? " " + this._holdingClass : "") + '">' + b(n) + b(r) + b(i) + b(s) + (d[o] ? this._minDigits(t, t._periods[o], 2) : "") + (d[u] ? (d[o] ? t.options.timeSeparator : "") + this._minDigits(t, t._periods[u], 2) : "") + (d[a] ? (d[o] || d[u] ? t.options.timeSeparator : "") + this._minDigits(t, t._periods[a], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (t.options.significant || h) + (t._hold ? " " + this._holdingClass : "") + '">' + w(n) + w(r) + w(i) + w(s) + w(o) + w(u) + w(a)) + "</span>" + (t.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + t.options.description + "</span>" : "")
            },
            _buildLayout: function(t, f, l, c, h, p) {
                var d = t.options[c ? "compactLabels" : "labels"],
                    v = t.options.whichLabels || this._normalLabels,
                    m = function(e) {
                        return (t.options[(c ? "compactLabels" : "labels") + v(t._periods[e])] || d)[e]
                    },
                    g = function(e, n) {
                        return t.options.digits[Math.floor(e / n) % 10]
                    },
                    y = {
                        desc: t.options.description,
                        sep: t.options.timeSeparator,
                        yl: m(n),
                        yn: this._minDigits(t, t._periods[n], 1),
                        ynn: this._minDigits(t, t._periods[n], 2),
                        ynnn: this._minDigits(t, t._periods[n], 3),
                        y1: g(t._periods[n], 1),
                        y10: g(t._periods[n], 10),
                        y100: g(t._periods[n], 100),
                        y1000: g(t._periods[n], 1e3),
                        ol: m(r),
                        on: this._minDigits(t, t._periods[r], 1),
                        onn: this._minDigits(t, t._periods[r], 2),
                        onnn: this._minDigits(t, t._periods[r], 3),
                        o1: g(t._periods[r], 1),
                        o10: g(t._periods[r], 10),
                        o100: g(t._periods[r], 100),
                        o1000: g(t._periods[r], 1e3),
                        wl: m(i),
                        wn: this._minDigits(t, t._periods[i], 1),
                        wnn: this._minDigits(t, t._periods[i], 2),
                        wnnn: this._minDigits(t, t._periods[i], 3),
                        w1: g(t._periods[i], 1),
                        w10: g(t._periods[i], 10),
                        w100: g(t._periods[i], 100),
                        w1000: g(t._periods[i], 1e3),
                        dl: m(s),
                        dn: this._minDigits(t, t._periods[s], 1),
                        dnn: this._minDigits(t, t._periods[s], 2),
                        dnnn: this._minDigits(t, t._periods[s], 3),
                        d1: g(t._periods[s], 1),
                        d10: g(t._periods[s], 10),
                        d100: g(t._periods[s], 100),
                        d1000: g(t._periods[s], 1e3),
                        hl: m(o),
                        hn: this._minDigits(t, t._periods[o], 1),
                        hnn: this._minDigits(t, t._periods[o], 2),
                        hnnn: this._minDigits(t, t._periods[o], 3),
                        h1: g(t._periods[o], 1),
                        h10: g(t._periods[o], 10),
                        h100: g(t._periods[o], 100),
                        h1000: g(t._periods[o], 1e3),
                        ml: m(u),
                        mn: this._minDigits(t, t._periods[u], 1),
                        mnn: this._minDigits(t, t._periods[u], 2),
                        mnnn: this._minDigits(t, t._periods[u], 3),
                        m1: g(t._periods[u], 1),
                        m10: g(t._periods[u], 10),
                        m100: g(t._periods[u], 100),
                        m1000: g(t._periods[u], 1e3),
                        sl: m(a),
                        sn: this._minDigits(t, t._periods[a], 1),
                        snn: this._minDigits(t, t._periods[a], 2),
                        snnn: this._minDigits(t, t._periods[a], 3),
                        s1: g(t._periods[a], 1),
                        s10: g(t._periods[a], 10),
                        s100: g(t._periods[a], 100),
                        s1000: g(t._periods[a], 1e3)
                    },
                    b = l;
                for (var w = n; w <= a; w++) {
                    var E = "yowdhms".charAt(w),
                        x = new RegExp("\\{" + E + "<\\}([\\s\\S]*)\\{" + E + ">\\}", "g");
                    b = b.replace(x, !h && f[w] || h && p[w] ? "$1" : "")
                }
                return e.each(y, function(e, t) {
                    var n = new RegExp("\\{" + e + "\\}", "g");
                    b = b.replace(n, t)
                }), b
            },
            _minDigits: function(e, t, n) {
                return t = "" + t, t.length >= n ? this._translateDigits(e, t) : (t = "0000000000" + t, this._translateDigits(e, t.substr(t.length - n)))
            },
            _translateDigits: function(e, t) {
                return ("" + t).replace(/[0-9]/g, function(t) {
                    return e.options.digits[t]
                })
            },
            _determineShow: function(e) {
                var t = e.options.format,
                    f = [];
                return f[n] = t.match("y") ? "?" : t.match("Y") ? "!" : null, f[r] = t.match("o") ? "?" : t.match("O") ? "!" : null, f[i] = t.match("w") ? "?" : t.match("W") ? "!" : null, f[s] = t.match("d") ? "?" : t.match("D") ? "!" : null, f[o] = t.match("h") ? "?" : t.match("H") ? "!" : null, f[u] = t.match("m") ? "?" : t.match("M") ? "!" : null, f[a] = t.match("s") ? "?" : t.match("S") ? "!" : null, f
            },
            _calculatePeriods: function(e, t, f, l) {
                e._now = l, e._now.setMilliseconds(0);
                var h = new Date(e._now.getTime());
                e._since ? l.getTime() < e._since.getTime() ? e._now = l = h : l = e._since : (h.setTime(e._until.getTime()), l.getTime() > e._until.getTime() && (e._now = l = h));
                var p = [0, 0, 0, 0, 0, 0, 0];
                if (t[n] || t[r]) {
                    var d = c._getDaysInMonth(l.getFullYear(), l.getMonth()),
                        v = c._getDaysInMonth(h.getFullYear(), h.getMonth()),
                        m = h.getDate() == l.getDate() || h.getDate() >= Math.min(d, v) && l.getDate() >= Math.min(d, v),
                        g = function(e) {
                            return (e.getHours() * 60 + e.getMinutes()) * 60 + e.getSeconds()
                        },
                        y = Math.max(0, (h.getFullYear() - l.getFullYear()) * 12 + h.getMonth() - l.getMonth() + (h.getDate() < l.getDate() && !m || m && g(h) < g(l) ? -1 : 0));
                    p[n] = t[n] ? Math.floor(y / 12) : 0, p[r] = t[r] ? y - p[n] * 12 : 0, l = new Date(l.getTime());
                    var b = l.getDate() == d,
                        w = c._getDaysInMonth(l.getFullYear() + p[n], l.getMonth() + p[r]);
                    l.getDate() > w && l.setDate(w), l.setFullYear(l.getFullYear() + p[n]), l.setMonth(l.getMonth() + p[r]), b && l.setDate(w)
                }
                var E = Math.floor((h.getTime() - l.getTime()) / 1e3),
                    T = function(e, n) {
                        p[e] = t[e] ? Math.floor(E / n) : 0, E -= p[e] * n
                    };
                T(i, 604800), T(s, 86400), T(o, 3600), T(u, 60), T(a, 1);
                if (E > 0 && !e._since) {
                    var N = [1, 12, 4.3482, 7, 24, 60, 60],
                        C = a,
                        k = 1;
                    for (var L = a; L >= n; L--) t[L] && (p[C] >= k && (p[C] = 0, E = 1), E > 0 && (p[L]++, E = 0, C = L, k = 1)), k *= N[L]
                }
                if (f)
                    for (var L = n; L <= a; L++) f && p[L] ? f-- : f || (p[L] = 0);
                return p
            }
        });
        var f = ["getTimes"];
        e.fn.countdown = function(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return l(e, t) ? c["_" + e + "Plugin"].apply(c, [this[0]].concat(t)) : this.each(function() {
                if (typeof e == "string") {
                    if (!c["_" + e + "Plugin"]) throw "Unknown command: " + e;
                    c["_" + e + "Plugin"].apply(c, [this].concat(t))
                } else c._attachPlugin(this, e || {})
            })
        };
        var c = e.countdown = new t
    }(jQuery),
    function(e) {
        e.fn.dragEvents = function() {
            return this.each(function() {
                function i(i) {
                    return o(i), n = e.extend({}, r), e(document).one("mouseup", function(n) {
                        return o(n), e(document).unbind("mousemove", s), t.triggerHandler("dragstop", [n]), o(), !1
                    }), e(document).bind("mousemove", s), t.triggerHandler("dragstart", [i]), !1
                }

                function s(e) {
                    o(e);
                    var i = {
                        x: r.x - n.x,
                        y: r.y - n.y
                    };
                    return t.triggerHandler("drag", [i]), !1
                }

                function o(e) {
                    e ? (r.x = e.pageX, r.y = e.pageY) : r = {}
                }
                var t = e(this),
                    n, r = {};
                t.mousedown(i)
            })
        }
    }(jQuery), typeof Object.create != "function" && (Object.create = function(e) {
        function t() {}
        return t.prototype = e, new t
    }),
    function(e) {
        var t = {
            init: function(t) {
                return this.options = e.extend({}, e.noty.defaults, t), this.options.layout = this.options.custom ? e.noty.layouts.inline : e.noty.layouts[this.options.layout], e.noty.themes[this.options.theme] ? this.options.theme = e.noty.themes[this.options.theme] : t.themeClassName = this.options.theme, delete t.layout, delete t.theme, this.options = e.extend({}, this.options, this.options.layout.options), this.options.id = "noty_" + (new Date).getTime() * Math.floor(Math.random() * 1e6), this.options = e.extend({}, this.options, t), this._build(), this
            },
            _build: function() {
                var t = e('<div class="noty_bar noty_type_' + this.options.type + '"></div>').attr("id", this.options.id);
                t.append(this.options.template).find(".noty_text").html(this.options.text), this.$bar = this.options.layout.parent.object !== null ? e(this.options.layout.parent.object).css(this.options.layout.parent.css).append(t) : t, this.options.themeClassName && this.$bar.addClass(this.options.themeClassName).addClass("noty_container_type_" + this.options.type);
                if (this.options.buttons) {
                    this.options.closeWith = [], this.options.timeout = !1;
                    var n = e("<div/>").addClass("noty_buttons");
                    this.options.layout.parent.object !== null ? this.$bar.find(".noty_bar").append(n) : this.$bar.append(n);
                    var r = this;
                    e.each(this.options.buttons, function(t, n) {
                        var i = e("<button/>").addClass(n.addClass ? n.addClass : "gray").html(n.text).attr("id", n.id ? n.id : "button-" + t).appendTo(r.$bar.find(".noty_buttons")).on("click", function() {
                            e.isFunction(n.onClick) && n.onClick.call(i, r)
                        })
                    })
                }
                this.$message = this.$bar.find(".noty_message"), this.$closeButton = this.$bar.find(".noty_close"), this.$buttons = this.$bar.find(".noty_buttons"), e.noty.store[this.options.id] = this
            },
            show: function() {
                var t = this;
                return t.options.custom ? t.options.custom.find(t.options.layout.container.selector).append(t.$bar) : e(t.options.layout.container.selector).append(t.$bar), t.options.theme && t.options.theme.style && t.options.theme.style.apply(t), e.type(t.options.layout.css) === "function" ? this.options.layout.css.apply(t.$bar) : t.$bar.css(this.options.layout.css || {}), t.$bar.addClass(t.options.layout.addClass), t.options.layout.container.style.apply(e(t.options.layout.container.selector)), t.showing = !0, t.options.theme && t.options.theme.style && t.options.theme.callback.onShow.apply(this), e.inArray("click", t.options.closeWith) > -1 && t.$bar.css("cursor", "pointer").one("click", function(e) {
                    t.stopPropagation(e), t.options.callback.onCloseClick && t.options.callback.onCloseClick.apply(t), t.close()
                }), e.inArray("hover", t.options.closeWith) > -1 && t.$bar.one("mouseenter", function() {
                    t.close()
                }), e.inArray("button", t.options.closeWith) > -1 && t.$closeButton.one("click", function(e) {
                    t.stopPropagation(e), t.close()
                }), e.inArray("button", t.options.closeWith) == -1 && t.$closeButton.remove(), t.options.callback.onShow && t.options.callback.onShow.apply(t), t.$bar.animate(t.options.animation.open, t.options.animation.speed, t.options.animation.easing, function() {
                    t.options.callback.afterShow && t.options.callback.afterShow.apply(t), t.showing = !1, t.shown = !0
                }), t.options.timeout && t.$bar.delay(t.options.timeout).promise().done(function() {
                    t.close()
                }), this
            },
            close: function() {
                if (this.closed) return;
                if (this.$bar && this.$bar.hasClass("i-am-closing-now")) return;
                var t = this;
                if (this.showing) {
                    t.$bar.queue(function() {
                        t.close.apply(t)
                    });
                    return
                }
                if (!this.shown && !this.showing) {
                    var n = [];
                    e.each(e.noty.queue, function(e, r) {
                        r.options.id != t.options.id && n.push(r)
                    }), e.noty.queue = n;
                    return
                }
                t.$bar.addClass("i-am-closing-now"), t.options.callback.onClose && t.options.callback.onClose.apply(t), t.$bar.clearQueue().stop().animate(t.options.animation.close, t.options.animation.speed, t.options.animation.easing, function() {
                    t.options.callback.afterClose && t.options.callback.afterClose.apply(t)
                }).promise().done(function() {
                    t.options.modal && (e.notyRenderer.setModalCount(-1), e.notyRenderer.getModalCount() == 0 && e(".noty_modal").fadeOut("fast", function() {
                        e(this).remove()
                    })), e.notyRenderer.setLayoutCountFor(t, -1), e.notyRenderer.getLayoutCountFor(t) == 0 && e(t.options.layout.container.selector).remove(), typeof t.$bar != "undefined" && t.$bar !== null && (t.$bar.remove(), t.$bar = null, t.closed = !0), delete e.noty.store[t.options.id], t.options.theme.callback && t.options.theme.callback.onClose && t.options.theme.callback.onClose.apply(t), t.options.dismissQueue || (e.noty.ontap = !0, e.notyRenderer.render()), t.options.maxVisible > 0 && t.options.dismissQueue && e.notyRenderer.render()
                })
            },
            setText: function(e) {
                return this.closed || (this.options.text = e, this.$bar.find(".noty_text").html(e)), this
            },
            setType: function(e) {
                return this.closed || (this.options.type = e, this.options.theme.style.apply(this), this.options.theme.callback.onShow.apply(this)), this
            },
            setTimeout: function(e) {
                if (!this.closed) {
                    var t = this;
                    this.options.timeout = e, t.$bar.delay(t.options.timeout).promise().done(function() {
                        t.close()
                    })
                }
                return this
            },
            stopPropagation: function(e) {
                e = e || window.event, typeof e.stopPropagation != "undefined" ? e.stopPropagation() : e.cancelBubble = !0
            },
            closed: !1,
            showing: !1,
            shown: !1
        };
        e.notyRenderer = {}, e.notyRenderer.init = function(n) {
            var r = Object.create(t).init(n);
            return r.options.killer && e.noty.closeAll(), r.options.force ? e.noty.queue.unshift(r) : e.noty.queue.push(r), e.notyRenderer.render(), e.noty.returns == "object" ? r : r.options.id
        }, e.notyRenderer.render = function() {
            var t = e.noty.queue[0];
            e.type(t) === "object" ? t.options.dismissQueue ? t.options.maxVisible > 0 ? e(t.options.layout.container.selector + " li").length < t.options.maxVisible && e.notyRenderer.show(e.noty.queue.shift()) : e.notyRenderer.show(e.noty.queue.shift()) : e.noty.ontap && (e.notyRenderer.show(e.noty.queue.shift()), e.noty.ontap = !1) : e.noty.ontap = !0
        }, e.notyRenderer.show = function(t) {
            t.options.modal && (e.notyRenderer.createModalFor(t), e.notyRenderer.setModalCount(1)), t.options.custom ? t.options.custom.find(t.options.layout.container.selector).length == 0 ? t.options.custom.append(e(t.options.layout.container.object).addClass("i-am-new")) : t.options.custom.find(t.options.layout.container.selector).removeClass("i-am-new") : e(t.options.layout.container.selector).length == 0 ? e("body").append(e(t.options.layout.container.object).addClass("i-am-new")) : e(t.options.layout.container.selector).removeClass("i-am-new"), e.notyRenderer.setLayoutCountFor(t, 1), t.show()
        }, e.notyRenderer.createModalFor = function(t) {
            if (e(".noty_modal").length == 0) {
                var n = e("<div/>").addClass("noty_modal").addClass(t.options.theme).data("noty_modal_count", 0);
                t.options.theme.modal && t.options.theme.modal.css && n.css(t.options.theme.modal.css), n.prependTo(e("body")).fadeIn("fast")
            }
        }, e.notyRenderer.getLayoutCountFor = function(t) {
            return e(t.options.layout.container.selector).data("noty_layout_count") || 0
        }, e.notyRenderer.setLayoutCountFor = function(t, n) {
            return e(t.options.layout.container.selector).data("noty_layout_count", e.notyRenderer.getLayoutCountFor(t) + n)
        }, e.notyRenderer.getModalCount = function() {
            return e(".noty_modal").data("noty_modal_count") || 0
        }, e.notyRenderer.setModalCount = function(t) {
            return e(".noty_modal").data("noty_modal_count", e.notyRenderer.getModalCount() + t)
        }, e.fn.noty = function(t) {
            return t.custom = e(this), e.notyRenderer.init(t)
        }, e.noty = {}, e.noty.queue = [], e.noty.ontap = !0, e.noty.layouts = {}, e.noty.themes = {}, e.noty.returns = "object", e.noty.store = {}, e.noty.get = function(t) {
            return e.noty.store.hasOwnProperty(t) ? e.noty.store[t] : !1
        }, e.noty.close = function(t) {
            return e.noty.get(t) ? e.noty.get(t).close() : !1
        }, e.noty.setText = function(t, n) {
            return e.noty.get(t) ? e.noty.get(t).setText(n) : !1
        }, e.noty.setType = function(t, n) {
            return e.noty.get(t) ? e.noty.get(t).setType(n) : !1
        }, e.noty.clearQueue = function() {
            e.noty.queue = []
        }, e.noty.closeAll = function() {
            e.noty.clearQueue(), e.each(e.noty.store, function(e, t) {
                t.close()
            })
        };
        var n = window.alert;
        e.noty.consumeAlert = function(t) {
            window.alert = function(n) {
                t ? t.text = n : t = {
                    text: n
                }, e.notyRenderer.init(t)
            }
        }, e.noty.stopConsumeAlert = function() {
            window.alert = n
        }, e.noty.defaults = {
            layout: "top",
            theme: "defaultTheme",
            type: "alert",
            text: "",
            dismissQueue: !0,
            template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
            animation: {
                open: {
                    height: "toggle"
                },
                close: {
                    height: "toggle"
                },
                easing: "swing",
                speed: 500
            },
            timeout: !1,
            force: !1,
            modal: !1,
            maxVisible: 5,
            killer: !1,
            closeWith: ["click"],
            callback: {
                onShow: function() {},
                afterShow: function() {},
                onClose: function() {},
                afterClose: function() {},
                onCloseClick: function() {}
            },
            buttons: !1
        }, e(window).on("resize", function() {
            e.each(e.noty.layouts, function(t, n) {
                n.container.style.apply(e(n.container.selector))
            })
        })
    }(jQuery), window.noty = function(t) {
        return jQuery.notyRenderer.init(t)
    },
    function(e) {
        e.noty.layouts.bottomCenter = {
            name: "bottomCenter",
            options: {},
            container: {
                object: '<ul id="noty_bottomCenter_layout_container" />',
                selector: "ul#noty_bottomCenter_layout_container",
                style: function() {
                    e(this).css({
                        bottom: 20,
                        left: 0,
                        position: "fixed",
                        width: "320px",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 1e7
                    }), e(this).css({
                        left: (e(window).width() - e(this).outerWidth(!1)) / 2 + "px"
                    })
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none",
                width: "320px"
            },
            addClass: ""
        }
    }(jQuery),
    function(e) {
        e.noty.themes.defaultTheme = {
            name: "defaultTheme",
            style: function() {
                this.$bar.removeClass().addClass("noty_bar").addClass(this.options.type)
            },
            callback: {
                onShow: function() {},
                onClose: function() {}
            }
        }
    }(jQuery),
    function(e) {
        e.noty.layouts.top = {
            name: "top",
            options: {},
            container: {
                object: '<ul id="noty_top_layout_container" />',
                selector: "ul#noty_top_layout_container",
                style: function() {
                    e(this).css({
                        top: 0,
                        left: "5%",
                        position: "fixed",
                        width: "90%",
                        height: "auto",
                        margin: 0,
                        padding: 0,
                        listStyleType: "none",
                        zIndex: 9999999
                    })
                }
            },
            parent: {
                object: "<li />",
                selector: "li",
                css: {}
            },
            css: {
                display: "none"
            },
            addClass: ""
        }
    }(jQuery),
    function() {
        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            t = window.Crypto = {},
            n = t.util = {
                rotl: function(e, t) {
                    return e << t | e >>> 32 - t
                },
                rotr: function(e, t) {
                    return e << 32 - t | e >>> t
                },
                endian: function(e) {
                    if (e.constructor == Number) return n.rotl(e, 8) & 16711935 | n.rotl(e, 24) & 4278255360;
                    for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
                    return e
                },
                randomBytes: function(e) {
                    for (var t = []; e > 0; e--) t.push(Math.floor(Math.random() * 256));
                    return t
                },
                bytesToWords: function(e) {
                    for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
                    return t
                },
                wordsToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length * 32; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                    return t
                },
                bytesToHex: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((e[n] & 15).toString(16));
                    return t.join("")
                },
                hexToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
                    return t
                },
                bytesToBase64: function(t) {
                    if (typeof btoa == "function") return btoa(s.bytesToString(t));
                    for (var n = [], r = 0; r < t.length; r += 3) {
                        var i = t[r] << 16 | t[r + 1] << 8 | t[r + 2];
                        for (var o = 0; o < 4; o++) r * 8 + o * 6 <= t.length * 8 ? n.push(e.charAt(i >>> 6 * (3 - o) & 63)) : n.push("=")
                    }
                    return n.join("")
                },
                base64ToBytes: function(t) {
                    if (typeof atob == "function") return s.stringToBytes(atob(t));
                    t = t.replace(/[^A-Z0-9+\/]/ig, "");
                    for (var n = [], r = 0, i = 0; r < t.length; i = ++r % 4) {
                        if (i == 0) continue;
                        n.push((e.indexOf(t.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << i * 2 | e.indexOf(t.charAt(r)) >>> 6 - i * 2)
                    }
                    return n
                }
            };
        t.mode = {};
        var r = t.charenc = {},
            i = r.UTF8 = {
                stringToBytes: function(e) {
                    return s.stringToBytes(unescape(encodeURIComponent(e)))
                },
                bytesToString: function(e) {
                    return decodeURIComponent(escape(s.bytesToString(e)))
                }
            },
            s = r.Binary = {
                stringToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(e.charCodeAt(n));
                    return t
                },
                bytesToString: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                    return t.join("")
                }
            }
    }(),
    function() {
        var e = Crypto,
            t = e.util,
            n = e.charenc,
            r = n.UTF8,
            i = n.Binary,
            s = e.SHA1 = function(e, n) {
                var r = t.wordsToBytes(s._sha1(e));
                return n && n.asBytes ? r : n && n.asString ? i.bytesToString(r) : t.bytesToHex(r)
            };
        s._sha1 = function(e) {
            e.constructor == String && (e = r.stringToBytes(e));
            var n = t.bytesToWords(e),
                i = e.length * 8,
                s = [],
                o = 1732584193,
                u = -271733879,
                f = -1732584194,
                l = 271733878,
                c = -1009589776;
            n[i >> 5] |= 128 << 24 - i % 32, n[(i + 64 >>> 9 << 4) + 15] = i;
            for (var h = 0; h < n.length; h += 16) {
                var p = o,
                    d = u,
                    v = f,
                    m = l,
                    g = c;
                for (var y = 0; y < 80; y++) {
                    if (y < 16) s[y] = n[h + y];
                    else {
                        var b = s[y - 3] ^ s[y - 8] ^ s[y - 14] ^ s[y - 16];
                        s[y] = b << 1 | b >>> 31
                    }
                    var w = (o << 5 | o >>> 27) + c + (s[y] >>> 0) + (y < 20 ? (u & f | ~u & l) + 1518500249 : y < 40 ? (u ^ f ^ l) + 1859775393 : y < 60 ? (u & f | u & l | f & l) - 1894007588 : (u ^ f ^ l) - 899497514);
                    c = l, l = f, f = u << 30 | u >>> 2, u = o, o = w
                }
                o += p, u += d, f += v, l += m, c += g
            }
            return [o, u, f, l, c]
        }, s._blocksize = 16
    }(),
    function() {
        var e = Crypto,
            t = e.util,
            n = e.charenc,
            r = n.UTF8,
            i = n.Binary;
        e.HMAC = function(e, n, s, o) {
            n.constructor == String && (n = r.stringToBytes(n)), s.constructor == String && (s = r.stringToBytes(s)), s.length > e._blocksize * 4 && (s = e(s, {
                asBytes: !0
            }));
            var u = s.slice(0),
                f = s.slice(0);
            for (var l = 0; l < e._blocksize * 4; l++) u[l] ^= 92, f[l] ^= 54;
            var h = e(u.concat(e(f.concat(n), {
                asBytes: !0
            })), {
                asBytes: !0
            });
            return o && o.asBytes ? h : o && o.asString ? i.bytesToString(h) : t.bytesToHex(h)
        }
    }();
var Mustache = typeof module != "undefined" && module.exports || {};
(function(e) {
    function a(e) {
        return u.test(e)
    }

    function p(e) {
        return String(e).replace(/&(?!\w+;)|[<>"']/g, function(e) {
            return h[e] || e
        })
    }

    function d(e, t, n, r) {
        r = r || "<template>";
        var i = t.split("\n"),
            s = Math.max(n - 3, 0),
            o = Math.min(i.length, n + 3),
            u = i.slice(s, o),
            a;
        for (var f = 0, l = u.length; f < l; ++f) a = f + s + 1, u[f] = (a === n ? " >> " : "    ") + u[f];
        return e.template = t, e.line = n, e.file = r, e.message = [r + ":" + n, u.join("\n"), "", e.message].join("\n"), e
    }

    function v(e, t, n) {
        if (e === ".") return t[t.length - 1];
        var r = e.split("."),
            i = r.length - 1,
            s = r[i],
            o, u, a = t.length,
            f, l;
        while (a) {
            l = t.slice(0), u = t[--a], f = 0;
            while (f < i) {
                u = u[r[f++]];
                if (u == null) break;
                l.push(u)
            }
            if (u && s in u) {
                o = u[s];
                break
            }
        }
        return typeof o == "function" && (o = o.call(l[l.length - 1])), o == null ? n : o
    }

    function m(e, t, n, r) {
        var i = "",
            u = v(e, t);
        if (r) {
            if (u == null || u === !1 || s(u) && u.length === 0) i += n()
        } else if (s(u)) o(u, function(e) {
            t.push(e), i += n(), t.pop()
        });
        else if (typeof u == "object") t.push(u), i += n(), t.pop();
        else if (typeof u == "function") {
            var a = t[t.length - 1],
                f = function(e) {
                    return S(e, a)
                };
            i += u.call(a, n(), f) || ""
        } else u && (i += n());
        return i
    }

    function g(t, n) {
        n = n || {};
        var r = n.tags || e.tags,
            i = r[0],
            s = r[r.length - 1],
            o = ['var buffer = "";', "\nvar line = 1;", "\ntry {", '\nbuffer += "'],
            u = [],
            l = !1,
            c = !1,
            h = function() {
                if (l && !c && !n.space)
                    while (u.length) o.splice(u.pop(), 1);
                else u = [];
                l = !1, c = !1
            },
            p = [],
            v, m, g, y = function(e) {
                r = f(e).split(/\s+/), m = r[0], g = r[r.length - 1]
            },
            b = function(e) {
                o.push('";', v, '\nvar partial = partials["' + f(e) + '"];', "\nif (partial) {", "\n  buffer += render(partial,stack[stack.length - 1],partials);", "\n}", '\nbuffer += "')
            },
            w = function(e, r) {
                var i = f(e);
                if (i === "") throw d(new Error("Section name may not be empty"), t, N, n.file);
                p.push({
                    name: i,
                    inverted: r
                }), o.push('";', v, '\nvar name = "' + i + '";', "\nvar callback = (function () {", "\n  return function () {", '\n    var buffer = "";', '\nbuffer += "')
            },
            E = function(e) {
                w(e, !0)
            },
            S = function(e) {
                var r = f(e),
                    i = p.length != 0 && p[p.length - 1].name;
                if (!i || r != i) throw d(new Error('Section named "' + r + '" was never opened'), t, N, n.file);
                var s = p.pop();
                o.push('";', "\n    return buffer;", "\n  };", "\n})();"), s.inverted ? o.push("\nbuffer += renderSection(name,stack,callback,true);") : o.push("\nbuffer += renderSection(name,stack,callback);"), o.push('\nbuffer += "')
            },
            x = function(e) {
                o.push('";', v, '\nbuffer += lookup("' + f(e) + '",stack,"");', '\nbuffer += "')
            },
            T = function(e) {
                o.push('";', v, '\nbuffer += escapeHTML(lookup("' + f(e) + '",stack,""));', '\nbuffer += "')
            },
            N = 1,
            C, k;
        for (var L = 0, A = t.length; L < A; ++L)
            if (t.slice(L, L + i.length) === i) {
                L += i.length, C = t.substr(L, 1), v = "\nline = " + N + ";", m = i, g = s, l = !0;
                switch (C) {
                    case "!":
                        L++, k = null;
                        break;
                    case "=":
                        L++, s = "=" + s, k = y;
                        break;
                    case ">":
                        L++, k = b;
                        break;
                    case "#":
                        L++, k = w;
                        break;
                    case "^":
                        L++, k = E;
                        break;
                    case "/":
                        L++, k = S;
                        break;
                    case "{":
                        s = "}" + s;
                    case "&":
                        L++, c = !0, k = x;
                        break;
                    default:
                        c = !0, k = T
                }
                var O = t.indexOf(s, L);
                if (O === -1) throw d(new Error('Tag "' + i + '" was not closed properly'), t, N, n.file);
                var M = t.substring(L, O);
                k && k(M);
                var _ = 0;
                while (~(_ = M.indexOf("\n", _))) N++, _++;
                L = O + s.length - 1, i = m, s = g
            } else {
                C = t.substr(L, 1);
                switch (C) {
                    case '"':
                    case "\\":
                        c = !0, o.push("\\" + C);
                        break;
                    case "\r":
                        break;
                    case "\n":
                        u.push(o.length), o.push("\\n"), h(), N++;
                        break;
                    default:
                        a(C) ? u.push(o.length) : c = !0, o.push(C)
                }
            }
        if (p.length != 0) throw d(new Error('Section "' + p[p.length - 1].name + '" was not closed properly'), t, N, n.file);
        h(), o.push('";', "\nreturn buffer;", "\n} catch (e) { throw {error: e, line: line}; }");
        var D = o.join("").replace(/buffer \+= "";\n/g, "");
        return n.debug && (typeof console != "undefined" && console.log ? console.log(D) : typeof print == "function" && print(D)), D
    }

    function y(e, t) {
        var n = "view,partials,stack,lookup,escapeHTML,renderSection,render",
            r = g(e, t),
            i = new Function(n, r);
        return function(n, r) {
            r = r || {};
            var s = [n];
            try {
                return i(n, r, s, v, p, m, S)
            } catch (o) {
                throw d(o.error, e, o.line, t.file)
            }
        }
    }

    function w() {
        b = {}
    }

    function E(e, t) {
        return t = t || {}, t.cache !== !1 ? (b[e] || (b[e] = y(e, t)), b[e]) : y(e, t)
    }

    function S(e, t, n) {
        return E(e)(t, n)
    }
    e.name = "mustache.js", e.version = "0.5.0-dev", e.tags = ["{{", "}}"], e.parse = g, e.compile = E, e.render = S, e.clearCache = w, e.to_html = function(e, t, n, r) {
        var i = S(e, t, n);
        if (typeof r != "function") return i;
        r(i)
    };
    var t = Object.prototype.toString,
        n = Array.isArray,
        r = Array.prototype.forEach,
        i = String.prototype.trim,
        s;
    n ? s = n : s = function(e) {
        return t.call(e) === "[object Array]"
    };
    var o;
    r ? o = function(e, t, n) {
        return r.call(e, t, n)
    } : o = function(e, t, n) {
        for (var r = 0, i = e.length; r < i; ++r) t.call(n, e[r], r, e)
    };
    var u = /^\s*$/,
        f;
    if (i) f = function(e) {
        return e == null ? "" : i.call(e)
    };
    else {
        var l, c;
        a(" ") ? (l = /^\s+/, c = /\s+$/) : (l = /^[\s\xA0]+/, c = /[\s\xA0]+$/), f = function(e) {
            return e == null ? "" : String(e).replace(l, "").replace(c, "")
        }
    }
    var h = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        },
        b = {}
})(Mustache),
function() {
    (function() {
        function e(e) {
            return "".trim ? e.trim() : e.replace(/^\s+/, "").replace(/\s+$/, "")
        }
        var t = {
            VERSION: "0.10",
            templates: {},
            $: typeof window != "undefined" ? window.jQuery || window.Zepto || null : null,
            addTemplate: function(e, n) {
                if (typeof e == "object") {
                    for (var r in e) this.addTemplate(r, e[r]);
                    return
                }
                t[e] ? console.error("Invalid name: " + e + ".") : t.templates[e] ? console.error('Template "' + e + '  " exists') : (t.templates[e] = n, t[e] = function(n, r) {
                    n = n || {};
                    var i = Mustache.to_html(t.templates[e], n, t.templates);
                    return t.$ && !r ? t.$(i) : i
                })
            },
            clearAll: function() {
                for (var e in t.templates) delete t[e];
                t.templates = {}
            },
            refresh: function() {
                t.clearAll(), t.grabTemplates()
            },
            grabTemplates: function() {
                var n, r = document.getElementsByTagName("script"),
                    i, s = [];
                for (n = 0, l = r.length; n < l; n++) i = r[n], i && i.innerHTML && i.id && (i.type === "text/html" || i.type === "text/x-icanhaz") && (t.addTemplate(i.id, e(i.innerHTML)), s.unshift(i));
                for (n = 0, l = s.length; n < l; n++) s[n].parentNode.removeChild(s[n])
            }
        };
        typeof require != "undefined" ? module.exports = t : window.ich = t, typeof document != "undefined" && (t.$ ? t.$(function() {
            t.grabTemplates()
        }) : document.addEventListener("DOMContentLoaded", function() {
            t.grabTemplates()
        }, !0))
    })()
}(),
function(e, t, n) {
    function o(e, n) {
        var r = t.createElement(e || "div"),
            i;
        for (i in n) r[i] = n[i];
        return r
    }

    function u(e) {
        for (var t = 1, n = arguments.length; t < n; t++) e.appendChild(arguments[t]);
        return e
    }

    function f(e, t, n, r) {
        var o = ["opacity", t, ~~(e * 100), n, r].join("-"),
            u = .01 + n / r * 100,
            f = Math.max(1 - (1 - e) / t * (100 - u), e),
            l = s.substring(0, s.indexOf("Animation")).toLowerCase(),
            c = l && "-" + l + "-" || "";
        return i[o] || (a.insertRule("@" + c + "keyframes " + o + "{" + "0%{opacity:" + f + "}" + u + "%{opacity:" + e + "}" + (u + .01) + "%{opacity:1}" + (u + t) % 100 + "%{opacity:" + e + "}" + "100%{opacity:" + f + "}" + "}", 0), i[o] = 1), o
    }

    function l(e, t) {
        var i = e.style,
            s, o;
        if (i[t] !== n) return t;
        t = t.charAt(0).toUpperCase() + t.slice(1);
        for (o = 0; o < r.length; o++) {
            s = r[o] + t;
            if (i[s] !== n) return s
        }
    }

    function c(e, t) {
        for (var n in t) e.style[l(e, n) || n] = t[n];
        return e
    }

    function h(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r) e[i] === n && (e[i] = r[i])
        }
        return e
    }

    function p(e) {
        var t = {
            x: e.offsetLeft,
            y: e.offsetTop
        };
        while (e = e.offsetParent) t.x += e.offsetLeft, t.y += e.offsetTop;
        return t
    }
    var r = ["webkit", "Moz", "ms", "O"],
        i = {},
        s, a = function() {
            var e = o("style");
            return u(t.getElementsByTagName("head")[0], e), e.sheet || e.styleSheet
        }(),
        d = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
            rotate: 0,
            color: "#000",
            speed: 1,
            trail: 100,
            opacity: .25,
            fps: 20,
            zIndex: 2e9,
            className: "spinner",
            top: "auto",
            left: "auto"
        },
        v = function m(e) {
            if (!this.spin) return new m(e);
            this.opts = h(e || {}, m.defaults, d)
        };
    v.defaults = {}, h(v.prototype, {
        spin: function(e) {
            this.stop();
            var t = this,
                n = t.opts,
                r = t.el = c(o(0, {
                    className: n.className
                }), {
                    position: "relative",
                    zIndex: n.zIndex
                }),
                i = n.radius + n.length + n.width,
                u, a;
            e && (e.insertBefore(r, e.firstChild || null), a = p(e), u = p(r), c(r, {
                left: (n.left == "auto" ? a.x - u.x + (e.offsetWidth >> 1) : n.left + i) + "px",
                top: (n.top == "auto" ? a.y - u.y + (e.offsetHeight >> 1) : n.top + i) + "px"
            })), r.setAttribute("aria-role", "progressbar"), t.lines(r, t.opts);
            if (!s) {
                var f = 0,
                    l = n.fps,
                    h = l / n.speed,
                    d = (1 - n.opacity) / (h * n.trail / 100),
                    v = h / n.lines;
                ! function m() {
                    f++;
                    for (var e = n.lines; e; e--) {
                        var i = Math.max(1 - (f + e * v) % h * d, n.opacity);
                        t.opacity(r, n.lines - e, i, n)
                    }
                    t.timeout = t.el && setTimeout(m, ~~(1e3 / l))
                }()
            }
            return t
        },
        stop: function() {
            var e = this.el;
            return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = n), this
        },
        lines: function(e, t) {
            function i(e, r) {
                return c(o(), {
                    position: "absolute",
                    width: t.length + t.width + "px",
                    height: t.width + "px",
                    background: e,
                    boxShadow: r,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / t.lines * n + t.rotate) + "deg) translate(" + t.radius + "px" + ",0)",
                    borderRadius: (t.width >> 1) + "px"
                })
            }
            var n = 0,
                r;
            for (; n < t.lines; n++) r = c(o(), {
                position: "absolute",
                top: 1 + ~(t.width / 2) + "px",
                transform: t.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: t.opacity,
                animation: s && f(t.opacity, t.trail, n, t.lines) + " " + 1 / t.speed + "s linear infinite"
            }), t.shadow && u(r, c(i("#000", "0 0 4px #000"), {
                top: "2px"
            })), u(e, u(r, i(t.color, "0 0 1px rgba(0,0,0,.1)")));
            return e
        },
        opacity: function(e, t, n) {
            t < e.childNodes.length && (e.childNodes[t].style.opacity = n)
        }
    }), ! function() {
        function e(e, t) {
            return o("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', t)
        }
        var t = c(o("group"), {
            behavior: "url(#default#VML)"
        });
        !l(t, "transform") && t.adj ? (a.addRule(".spin-vml", "behavior:url(#default#VML)"), v.prototype.lines = function(t, n) {
            function s() {
                return c(e("group", {
                    coordsize: i + " " + i,
                    coordorigin: -r + " " + -r
                }), {
                    width: i,
                    height: i
                })
            }

            function l(t, i, o) {
                u(a, u(c(s(), {
                    rotation: 360 / n.lines * t + "deg",
                    left: ~~i
                }), u(c(e("roundrect", {
                    arcsize: 1
                }), {
                    width: r,
                    height: n.width,
                    left: n.radius,
                    top: -n.width >> 1,
                    filter: o
                }), e("fill", {
                    color: n.color,
                    opacity: n.opacity
                }), e("stroke", {
                    opacity: 0
                }))))
            }
            var r = n.length + n.width,
                i = 2 * r,
                o = -(n.width + n.length) * 2 + "px",
                a = c(s(), {
                    position: "absolute",
                    top: o,
                    left: o
                }),
                f;
            if (n.shadow)
                for (f = 1; f <= n.lines; f++) l(f, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (f = 1; f <= n.lines; f++) l(f);
            return u(t, a)
        }, v.prototype.opacity = function(e, t, n, r) {
            var i = e.firstChild;
            r = r.shadow && r.lines || 0, i && t + r < i.childNodes.length && (i = i.childNodes[t + r], i = i && i.firstChild, i = i && i.firstChild, i && (i.opacity = n))
        }) : s = l(t, "animation")
    }(), e.Spinner = v
}(window, document),
function(e) {
    e.fn.spin = function(t, n) {
        var r = {
            lines: 12,
            length: 2,
            width: 4,
            radius: 10,
            color: "#3D6B99",
            speed: 1.4,
            trail: 70,
            shadow: !1
        };
        if (Spinner) return this.each(function() {
            var i = e(this),
                s = i.data();
            s.spinner && (s.spinner.stop(), delete s.spinner);
            if (t !== !1) {
                var o = Twitch.defaults({
                    color: n || t && t.color || i.css("color")
                }, t, r);
                s.spinner = (new Spinner(o)).spin(this)
            }
        });
        throw new Error("Spinner class not available.")
    }
}(jQuery),
function(e, t) {
    typeof exports == "object" ? module.exports = t(require("./punycode"), require("./IPv6"), require("./SecondLevelDomains")) : typeof define == "function" && define.amd ? define(["./punycode", "./IPv6", "./SecondLevelDomains"], t) : e.URI = t(e.punycode, e.IPv6, e.SecondLevelDomains)
}(this, function(e, t, n) {
    "use strict";

    function r(e, t) {
        return this instanceof r ? (e === undefined && (typeof location != "undefined" ? e = location.href + "" : e = ""), this.href(e), t !== undefined ? this.absoluteTo(t) : this) : new r(e, t)
    }

    function o(e) {
        return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
    }

    function u(e) {
        return String(Object.prototype.toString.call(e)) === "[object Array]"
    }

    function a(e, t) {
        var n = {},
            r, i;
        if (u(t))
            for (r = 0, i = t.length; r < i; r++) n[t[r]] = !0;
        else n[t] = !0;
        for (r = 0, i = e.length; r < i; r++) n[e[r]] !== undefined && (e.splice(r, 1), i--, r--);
        return e
    }

    function f(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, escape).replace(/\*/g, "%2A")
    }
    var i = r.prototype,
        s = Object.prototype.hasOwnProperty;
    r.duplicateQueryParameters = !1, r.protocol_expression = /^[a-z][a-z0-9-+-]*$/i, r.idn_expression = /[^a-z0-9\.-]/i, r.punycode_expression = /(xn--)/i, r.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, r.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/, r.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig, r.defaultPorts = {
        http: "80",
        https: "443",
        ftp: "21",
        gopher: "70",
        ws: "80",
        wss: "443"
    }, r.invalid_hostname_characters = /[^a-zA-Z0-9\.-]/, r.encode = f, r.decode = decodeURIComponent, r.iso8859 = function() {
        r.encode = escape, r.decode = unescape
    }, r.unicode = function() {
        r.encode = f, r.decode = decodeURIComponent
    }, r.characters = {
        pathname: {
            encode: {
                expression: /%(24|26|2B|2C|3B|3D|3A|40)/ig,
                map: {
                    "%24": "$",
                    "%26": "&",
                    "%2B": "+",
                    "%2C": ",",
                    "%3B": ";",
                    "%3D": "=",
                    "%3A": ":",
                    "%40": "@"
                }
            },
            decode: {
                expression: /[\/\?#]/g,
                map: {
                    "/": "%2F",
                    "?": "%3F",
                    "#": "%23"
                }
            }
        },
        reserved: {
            encode: {
                expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,
                map: {
                    "%3A": ":",
                    "%2F": "/",
                    "%3F": "?",
                    "%23": "#",
                    "%5B": "[",
                    "%5D": "]",
                    "%40": "@",
                    "%21": "!",
                    "%24": "$",
                    "%26": "&",
                    "%27": "'",
                    "%28": "(",
                    "%29": ")",
                    "%2A": "*",
                    "%2B": "+",
                    "%2C": ",",
                    "%3B": ";",
                    "%3D": "="
                }
            }
        }
    }, r.encodeQuery = function(e) {
        return r.encode(e + "").replace(/%20/g, "+")
    }, r.decodeQuery = function(e) {
        return r.decode((e + "").replace(/\+/g, "%20"))
    }, r.recodePath = function(e) {
        var t = (e + "").split("/");
        for (var n = 0, i = t.length; n < i; n++) t[n] = r.encodePathSegment(r.decode(t[n]));
        return t.join("/")
    }, r.decodePath = function(e) {
        var t = (e + "").split("/");
        for (var n = 0, i = t.length; n < i; n++) t[n] = r.decodePathSegment(t[n]);
        return t.join("/")
    };
    var l = {
            encode: "encode",
            decode: "decode"
        },
        c, h = function(e, t) {
            return function(n) {
                return r[t](n + "").replace(r.characters[e][t].expression, function(n) {
                    return r.characters[e][t].map[n]
                })
            }
        };
    for (c in l) r[c + "PathSegment"] = h("pathname", l[c]);
    r.encodeReserved = h("reserved", "encode"), r.parse = function(e, t) {
        var n, i;
        return t || (t = {}), n = e.indexOf("#"), n > -1 && (t.fragment = e.substring(n + 1) || null, e = e.substring(0, n)), n = e.indexOf("?"), n > -1 && (t.query = e.substring(n + 1) || null, e = e.substring(0, n)), e.substring(0, 2) === "//" ? (t.protocol = "", e = e.substring(2), e = r.parseAuthority(e, t)) : (n = e.indexOf(":"), n > -1 && (t.protocol = e.substring(0, n), t.protocol && !t.protocol.match(r.protocol_expression) ? t.protocol = undefined : t.protocol === "file" ? e = e.substring(n + 3) : e.substring(n + 1, n + 3) === "//" ? (e = e.substring(n + 3), e = r.parseAuthority(e, t)) : (e = e.substring(n + 1), t.urn = !0))), t.path = e, t
    }, r.parseHost = function(e, t) {
        var n = e.indexOf("/"),
            r, i;
        return n === -1 && (n = e.length), e[0] === "[" ? (r = e.indexOf("]"), t.hostname = e.substring(1, r) || null, t.port = e.substring(r + 2, n) || null) : e.indexOf(":") !== e.lastIndexOf(":") ? (t.hostname = e.substring(0, n) || null, t.port = null) : (i = e.substring(0, n).split(":"), t.hostname = i[0] || null, t.port = i[1] || null), t.hostname && e.substring(n)[0] !== "/" && (n++, e = "/" + e), e.substring(n) || "/"
    }, r.parseAuthority = function(e, t) {
        return e = r.parseUserinfo(e, t), r.parseHost(e, t)
    }, r.parseUserinfo = function(e, t) {
        var n = e.indexOf("@"),
            i = e.indexOf("/"),
            s;
        return n > -1 && (i === -1 || n < i) ? (s = e.substring(0, n).split(":"), t.username = s[0] ? r.decode(s[0]) : null, s.shift(), t.password = s[0] ? r.decode(s.join(":")) : null, e = e.substring(n + 1)) : (t.username = null, t.password = null), e
    }, r.parseQuery = function(e) {
        if (!e) return {};
        e = e.replace(/&+/g, "&").replace(/^\?*&*|&+$/g, "");
        if (!e) return {};
        var t = {},
            n = e.split("&"),
            i = n.length,
            s, o, u;
        for (var a = 0; a < i; a++) s = n[a].split("="), o = r.decodeQuery(s.shift()), u = s.length ? r.decodeQuery(s.join("=")) : null, t[o] ? (typeof t[o] == "string" && (t[o] = [t[o]]), t[o].push(u)) : t[o] = u;
        return t
    }, r.build = function(e) {
        var t = "";
        return e.protocol && (t += e.protocol + ":"), !e.urn && (t || e.hostname) && (t += "//"), t += r.buildAuthority(e) || "", typeof e.path == "string" && (e.path[0] !== "/" && typeof e.hostname == "string" && (t += "/"), t += e.path), typeof e.query == "string" && e.query && (t += "?" + e.query), typeof e.fragment == "string" && e.fragment && (t += "#" + e.fragment), t
    }, r.buildHost = function(e) {
        var t = "";
        return e.hostname ? (r.ip6_expression.test(e.hostname) ? e.port ? t += "[" + e.hostname + "]:" + e.port : t += e.hostname : (t += e.hostname, e.port && (t += ":" + e.port)), t) : ""
    }, r.buildAuthority = function(e) {
        return r.buildUserinfo(e) + r.buildHost(e)
    }, r.buildUserinfo = function(e) {
        var t = "";
        return e.username && (t += r.encode(e.username), e.password && (t += ":" + r.encode(e.password)), t += "@"), t
    }, r.buildQuery = function(e, t) {
        var n = "",
            i, o, a, f;
        for (o in e)
            if (s.call(e, o) && o)
                if (u(e[o])) {
                    i = {};
                    for (a = 0, f = e[o].length; a < f; a++) e[o][a] !== undefined && i[e[o][a] + ""] === undefined && (n += "&" + r.buildQueryParameter(o, e[o][a]), t !== !0 && (i[e[o][a] + ""] = !0))
                } else e[o] !== undefined && (n += "&" + r.buildQueryParameter(o, e[o]));
        return n.substring(1)
    }, r.buildQueryParameter = function(e, t) {
        return r.encodeQuery(e) + (t !== null ? "=" + r.encodeQuery(t) : "")
    }, r.addQuery = function(e, t, n) {
        if (typeof t == "object")
            for (var i in t) s.call(t, i) && r.addQuery(e, i, t[i]);
        else {
            if (typeof t != "string") throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
            if (e[t] === undefined) {
                e[t] = n;
                return
            }
            typeof e[t] == "string" && (e[t] = [e[t]]), u(n) || (n = [n]), e[t] = e[t].concat(n)
        }
    }, r.removeQuery = function(e, t, n) {
        var i, o, f;
        if (u(t))
            for (i = 0, o = t.length; i < o; i++) e[t[i]] = undefined;
        else if (typeof t == "object")
            for (f in t) s.call(t, f) && r.removeQuery(e, f, t[f]);
        else {
            if (typeof t != "string") throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");
            n !== undefined ? e[t] === n ? e[t] = undefined : u(e[t]) && (e[t] = a(e[t], n)) : e[t] = undefined
        }
    }, r.commonPath = function(e, t) {
        var n = Math.min(e.length, t.length),
            r;
        for (r = 0; r < n; r++)
            if (e[r] !== t[r]) {
                r--;
                break
            }
        return r < 1 ? e[0] === t[0] && e[0] === "/" ? "/" : "" : (e[r] !== "/" && (r = e.substring(0, r).lastIndexOf("/")), e.substring(0, r + 1))
    }, r.withinString = function(e, t) {
        return e.replace(r.find_uri_expression, t)
    }, r.ensureValidHostname = function(t) {
        if (t.match(r.invalid_hostname_characters)) {
            if (!e) throw new TypeError("Hostname '" + t + "' contains characters other than [A-Z0-9.-] and Punycode.js is not available");
            if (e.toASCII(t).match(r.invalid_hostname_characters)) throw new TypeError("Hostname '" + t + "' contains characters other than [A-Z0-9.-]")
        }
    }, i.build = function(e) {
        if (e === !0) this._deferred_build = !0;
        else if (e === undefined || this._deferred_build) this._string = r.build(this._parts), this._deferred_build = !1;
        return this
    }, i.clone = function() {
        return new r(this)
    }, i.toString = function() {
        return this.build(!1)._string
    }, i.valueOf = function() {
        return this.toString()
    }, l = {
        protocol: "protocol",
        username: "username",
        password: "password",
        hostname: "hostname",
        port: "port"
    }, h = function(e) {
        return function(t, n) {
            return t === undefined ? this._parts[e] || "" : (this._parts[e] = t, this.build(!n), this)
        }
    };
    for (c in l) i[c] = h(l[c]);
    l = {
        query: "?",
        fragment: "#"
    }, h = function(e, t) {
        return function(n, r) {
            return n === undefined ? this._parts[e] || "" : (n !== null && (n += "", n[0] === t && (n = n.substring(1))), this._parts[e] = n, this.build(!r), this)
        }
    };
    for (c in l) i[c] = h(c, l[c]);
    l = {
        search: ["?", "query"],
        hash: ["#", "fragment"]
    }, h = function(e, t) {
        return function(n, r) {
            var i = this[e](n, r);
            return typeof i == "string" && i.length ? t + i : i
        }
    };
    for (c in l) i[c] = h(l[c][1], l[c][0]);
    i.pathname = function(e, t) {
        if (e === undefined || e === !0) {
            var n = this._parts.path || (this._parts.urn ? "" : "/");
            return e ? r.decodePath(n) : n
        }
        return this._parts.path = e ? r.recodePath(e) : "/", this.build(!t), this
    }, i.path = i.pathname, i.href = function(e, t) {
        if (e === undefined) return this.toString();
        this._string = "", this._parts = {
            protocol: null,
            username: null,
            password: null,
            hostname: null,
            urn: null,
            port: null,
            path: null,
            query: null,
            fragment: null,
            duplicateQueryParameters: r.duplicateQueryParameters
        };
        var n = e instanceof r,
            i = typeof e == "object" && (e.hostname || e.path),
            o;
        !n && i && Object.prototype.toString.call(e) !== "[object Object]" && (e = e.toString());
        if (typeof e == "string") this._parts = r.parse(e, this._parts);
        else {
            if (!n && !i) throw new TypeError("invalid input");
            var u = n ? e._parts : e;
            for (o in u) s.call(this._parts, o) && (this._parts[o] = u[o])
        }
        return this.build(!t), this
    }, i.is = function(e) {
        var t = !1,
            i = !1,
            s = !1,
            o = !1,
            u = !1,
            a = !1,
            f = !1,
            l = !this._parts.urn;
        this._parts.hostname && (l = !1, i = r.ip4_expression.test(this._parts.hostname), s = r.ip6_expression.test(this._parts.hostname), t = i || s, o = !t, u = o && n && n.has(this._parts.hostname), a = o && r.idn_expression.test(this._parts.hostname), f = o && r.punycode_expression.test(this._parts.hostname));
        switch (e.toLowerCase()) {
            case "relative":
                return l;
            case "absolute":
                return !l;
            case "domain":
            case "name":
                return o;
            case "sld":
                return u;
            case "ip":
                return t;
            case "ip4":
            case "ipv4":
            case "inet4":
                return i;
            case "ip6":
            case "ipv6":
            case "inet6":
                return s;
            case "idn":
                return a;
            case "url":
                return !this._parts.urn;
            case "urn":
                return !!this._parts.urn;
            case "punycode":
                return f
        }
        return null
    };
    var p = i.protocol,
        d = i.port,
        v = i.hostname;
    i.protocol = function(e, t) {
        if (e !== undefined && e) {
            e = e.replace(/:(\/\/)?$/, "");
            if (e.match(/[^a-zA-z0-9\.+-]/)) throw new TypeError("Protocol '" + e + "' contains characters other than [A-Z0-9.+-]")
        }
        return p.call(this, e, t)
    }, i.scheme = i.protocol, i.port = function(e, t) {
        if (this._parts.urn) return e === undefined ? "" : this;
        if (e !== undefined) {
            e === 0 && (e = null);
            if (e) {
                e += "", e[0] === ":" && (e = e.substring(1));
                if (e.match(/[^0-9]/)) throw new TypeError("Port '" + e + "' contains characters other than [0-9]")
            }
        }
        return d.call(this, e, t)
    }, i.hostname = function(e, t) {
        if (this._parts.urn) return e === undefined ? "" : this;
        if (e !== undefined) {
            var n = {};
            r.parseHost(e, n), e = n.hostname
        }
        return v.call(this, e, t)
    }, i.host = function(e, t) {
        return this._parts.urn ? e === undefined ? "" : this : e === undefined ? this._parts.hostname ? r.buildHost(this._parts) : "" : (r.parseHost(e, this._parts), this.build(!t), this)
    }, i.authority = function(e, t) {
        return this._parts.urn ? e === undefined ? "" : this : e === undefined ? this._parts.hostname ? r.buildAuthority(this._parts) : "" : (r.parseAuthority(e, this._parts), this.build(!t), this)
    }, i.userinfo = function(e, t) {
        if (this._parts.urn) return e === undefined ? "" : this;
        if (e === undefined) {
            if (!this._parts.username) return "";
            var n = r.buildUserinfo(this._parts);
            return n.substring(0, n.length - 1)
        }
        return e[e.length - 1] !== "@" && (e += "@"), r.parseUserinfo(e, this._parts), this.build(!t), this
    }, i.resource = function(e, t) {
        var n;
        return e === undefined ? this.path() + this.search() + this.hash() : (n = r.parse(e), this._parts.path = n.path, this._parts.query = n.query, this._parts.fragment = n.fragment, this.build(!t), this)
    }, i.subdomain = function(e, t) {
        if (this._parts.urn) return e === undefined ? "" : this;
        if (e === undefined) {
            if (!this._parts.hostname || this.is("IP")) return "";
            var n = this._parts.hostname.length - this.domain().length - 1;
            return this._parts.hostname.substring(0, n) || ""
        }
        var i = this._parts.hostname.length - this.domain().length,
            s = this._parts.hostname.substring(0, i),
            u = new RegExp("^" + o(s));
        return e && e[e.length - 1] !== "." && (e += "."), e && r.ensureValidHostname(e), this._parts.hostname = this._parts.hostname.replace(u, e), this.build(!t), this
    }, i.domain = function(e, t) {
        if (this._parts.urn) return e === undefined ? "" : this;
        typeof e == "boolean" && (t = e, e = undefined);
        if (e === undefined) {
            if (!this._parts.hostname || this.is("IP")) return "";
            var n = this._parts.hostname.match(/\./g);
            if (n && n.length < 2) return this._parts.hostname;
            var i = this._parts.hostname.length - this.tld(t).length - 1;
            return i = this._parts.hostname.lastIndexOf(".", i - 1) + 1, this._parts.hostname.substring(i) || ""
        }
        if (!e) throw new TypeError("cannot set domain empty");
        r.ensureValidHostname(e);
        if (!this._parts.hostname || this.is("IP")) this._parts.hostname = e;
        else {
            var s = new RegExp(o(this.domain()) + "$");
            this._parts.hostname = this._parts.hostname.replace(s, e)
        }
        return this.build(!t), this
    }, i.tld = function(e, t) {
        if (this._parts.urn) return e === undefined ? "" : this;
        typeof e == "boolean" && (t = e, e = undefined);
        if (e === undefined) {
            if (!this._parts.hostname || this.is("IP")) return "";
            var r = this._parts.hostname.lastIndexOf("."),
                i = this._parts.hostname.substring(r + 1);
            return t !== !0 && n && n.list[i.toLowerCase()] ? n.get(this._parts.hostname) || i : i
        }
        var s;
        if (!e) throw new TypeError("cannot set TLD empty");
        if (e.match(/[^a-zA-Z0-9-]/)) {
            if (!n || !n.is(e)) throw new TypeError("TLD '" + e + "' contains characters other than [A-Z0-9]");
            s = new RegExp(o(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(s, e)
        } else {
            if (!this._parts.hostname || this.is("IP")) throw new ReferenceError("cannot set TLD on non-domain host");
            s = new RegExp(o(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(s, e)
        }
        return this.build(!t), this
    }, i.directory = function(e, t) {
        if (this._parts.urn) return e === undefined ? "" : this;
        if (e === undefined || e === !0) {
            if (!this._parts.path && !this._parts.hostname) return "";
            if (this._parts.path === "/") return "/";
            var n = this._parts.path.length - this.filename().length - 1,
                i = this._parts.path.substring(0, n) || (this._parts.hostname ? "/" : "");
            return e ? r.decodePath(i) : i
        }
        var s = this._parts.path.length - this.filename().length,
            u = this._parts.path.substring(0, s),
            a = new RegExp("^" + o(u));
        return this.is("relative") || (e || (e = "/"), e[0] !== "/" && (e = "/" + e)), e && e[e.length - 1] !== "/" && (e += "/"), e = r.recodePath(e), this._parts.path = this._parts.path.replace(a, e), this.build(!t), this
    }, i.filename = function(e, t) {
        if (this._parts.urn) return e === undefined ? "" : this;
        if (e === undefined || e === !0) {
            if (!this._parts.path || this._parts.path === "/") return "";
            var n = this._parts.path.lastIndexOf("/"),
                i = this._parts.path.substring(n + 1);
            return e ? r.decodePathSegment(i) : i
        }
        var s = !1;
        e[0] === "/" && (e = e.substring(1)), e.match(/\.?\//) && (s = !0);
        var u = new RegExp(o(this.filename()) + "$");
        return e = r.recodePath(e), this._parts.path = this._parts.path.replace(u, e), s ? this.normalizePath(t) : this.build(!t), this
    }, i.suffix = function(e, t) {
        if (this._parts.urn) return e === undefined ? "" : this;
        if (e === undefined || e === !0) {
            if (!this._parts.path || this._parts.path === "/") return "";
            var n = this.filename(),
                i = n.lastIndexOf("."),
                s, u;
            return i === -1 ? "" : (s = n.substring(i + 1), u = /^[a-z0-9%]+$/i.test(s) ? s : "", e ? r.decodePathSegment(u) : u)
        }
        e[0] === "." && (e = e.substring(1));
        var a = this.suffix(),
            f;
        if (!a) {
            if (!e) return this;
            this._parts.path += "." + r.recodePath(e)
        } else e ? f = new RegExp(o(a) + "$") : f = new RegExp(o("." + a) + "$");
        return f && (e = r.recodePath(e), this._parts.path = this._parts.path.replace(f, e)), this.build(!t), this
    }, i.segment = function(e, t, n) {
        var r = this._parts.urn ? ":" : "/",
            i = this.path(),
            s = i.substring(0, 1) === "/",
            o = i.split(r);
        typeof e != "number" && (n = t, t = e, e = undefined);
        if (e !== undefined && typeof e != "number") throw new Error("Bad segment '" + e + "', must be 0-based integer");
        s && o.shift(), e < 0 && (e = Math.max(o.length + e, 0));
        if (t === undefined) return e === undefined ? o : o[e];
        if (e === null || o[e] === undefined) {
            if (u(t)) o = t;
            else if (t || typeof t == "string" && t.length) o[o.length - 1] === "" ? o[o.length - 1] = t : o.push(t)
        } else t || typeof t == "string" && t.length ? o[e] = t : o.splice(e, 1);
        return s && o.unshift(""), this.path(o.join(r), n)
    };
    var m = i.query;
    return i.query = function(e, t) {
        return e === !0 ? r.parseQuery(this._parts.query) : e !== undefined && typeof e != "string" ? (this._parts.query = r.buildQuery(e, this._parts.duplicateQueryParameters), this.build(!t), this) : m.call(this, e, t)
    }, i.addQuery = function(e, t, n) {
        var i = r.parseQuery(this._parts.query);
        return r.addQuery(i, e, t === undefined ? null : t), this._parts.query = r.buildQuery(i, this._parts.duplicateQueryParameters), typeof e != "string" && (n = t), this.build(!n), this
    }, i.removeQuery = function(e, t, n) {
        var i = r.parseQuery(this._parts.query);
        return r.removeQuery(i, e, t), this._parts.query = r.buildQuery(i, this._parts.duplicateQueryParameters), typeof e != "string" && (n = t), this.build(!n), this
    }, i.addSearch = i.addQuery, i.removeSearch = i.removeQuery, i.normalize = function() {
        return this._parts.urn ? this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build() : this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()
    }, i.normalizeProtocol = function(e) {
        return typeof this._parts.protocol == "string" && (this._parts.protocol = this._parts.protocol.toLowerCase(), this.build(!e)), this
    }, i.normalizeHostname = function(n) {
        return this._parts.hostname && (this.is("IDN") && e ? this._parts.hostname = e.toASCII(this._parts.hostname) : this.is("IPv6") && t && (this._parts.hostname = t.best(this._parts.hostname)), this._parts.hostname = this._parts.hostname.toLowerCase(), this.build(!n)), this
    }, i.normalizePort = function(e) {
        return typeof this._parts.protocol == "string" && this._parts.port === r.defaultPorts[this._parts.protocol] && (this._parts.port = null, this.build(!e)), this
    }, i.normalizePath = function(e) {
        if (this._parts.urn) return this;
        if (!this._parts.path || this._parts.path === "/") return this;
        var t, n, i = this._parts.path,
            s, o;
        i[0] !== "/" && (i[0] === "." && (n = i.substring(0, i.indexOf("/"))), t = !0, i = "/" + i), i = i.replace(/(\/(\.\/)+)|\/{2,}/g, "/");
        for (;;) {
            s = i.indexOf("/../");
            if (s === -1) break;
            if (s === 0) {
                i = i.substring(3);
                break
            }
            o = i.substring(0, s).lastIndexOf("/"), o === -1 && (o = s), i = i.substring(0, o) + i.substring(s + 3)
        }
        return t && this.is("relative") && (n ? i = n + i : i = i.substring(1)), i = r.recodePath(i), this._parts.path = i, this.build(!e), this
    }, i.normalizePathname = i.normalizePath, i.normalizeQuery = function(e) {
        return typeof this._parts.query == "string" && (this._parts.query.length ? this.query(r.parseQuery(this._parts.query)) : this._parts.query = null, this.build(!e)), this
    }, i.normalizeFragment = function(e) {
        return this._parts.fragment || (this._parts.fragment = null, this.build(!e)), this
    }, i.normalizeSearch = i.normalizeQuery, i.normalizeHash = i.normalizeFragment, i.iso8859 = function() {
        var e = r.encode,
            t = r.decode;
        return r.encode = escape, r.decode = decodeURIComponent, this.normalize(), r.encode = e, r.decode = t, this
    }, i.unicode = function() {
        var e = r.encode,
            t = r.decode;
        return r.encode = f, r.decode = unescape, this.normalize(), r.encode = e, r.decode = t, this
    }, i.readable = function() {
        var t = this.clone();
        t.username("").password("").normalize();
        var n = "";
        t._parts.protocol && (n += t._parts.protocol + "://"), t._parts.hostname && (t.is("punycode") && e ? (n += e.toUnicode(t._parts.hostname), t._parts.port && (n += ":" + t._parts.port)) : n += t.host()), t._parts.hostname && t._parts.path && t._parts.path[0] !== "/" && (n += "/"), n += t.path(!0);
        if (t._parts.query) {
            var i = "";
            for (var s = 0, o = t._parts.query.split("&"), u = o.length; s < u; s++) {
                var a = (o[s] || "").split("=");
                i += "&" + r.decodeQuery(a[0]).replace(/&/g, "%26"), a[1] !== undefined && (i += "=" + r.decodeQuery(a[1]).replace(/&/g, "%26"))
            }
            n += "?" + i.substring(1)
        }
        return n += t.hash(), n
    }, i.absoluteTo = function(e) {
        var t = this.clone(),
            n = ["protocol", "username", "password", "hostname", "port"],
            i, s, o;
        if (this._parts.urn) throw new Error("URNs do not have any generally defined hierachical components");
        if (this._parts.hostname) return t;
        e instanceof r || (e = new r(e));
        for (s = 0, o; o = n[s]; s++) t._parts[o] = e._parts[o];
        n = ["query", "path"];
        for (s = 0, o; o = n[s]; s++) !t._parts[o] && e._parts[o] && (t._parts[o] = e._parts[o]);
        return t.path()[0] !== "/" && (i = e.directory(), t._parts.path = (i ? i + "/" : "") + t._parts.path, t.normalizePath()), t.build(), t
    }, i.relativeTo = function(e) {
        var t = this.clone(),
            n = ["protocol", "username", "password", "hostname", "port"],
            i, s;
        if (this._parts.urn) throw new Error("URNs do not have any generally defined hierachical components");
        e instanceof r || (e = new r(e));
        if (this.path()[0] !== "/" || e.path()[0] !== "/") throw new Error("Cannot calculate common path from non-relative URLs");
        i = r.commonPath(t.path(), e.path()), s = e.directory();
        for (var u = 0, a; a = n[u]; u++) t._parts[a] = null;
        if (!i || i === "/") return t;
        if (s + "/" === i) t._parts.path = "./" + t.filename();
        else {
            var f = "../",
                l = new RegExp("^" + o(i)),
                c = s.replace(l, "/").match(/\//g).length - 1;
            while (c--) f += "../";
            t._parts.path = t._parts.path.replace(l, f)
        }
        return t.build(), t
    }, i.equals = function(e) {
        var t = this.clone(),
            n = new r(e),
            i = {},
            o = {},
            a = {},
            f, l, c;
        t.normalize(), n.normalize();
        if (t.toString() === n.toString()) return !0;
        f = t.query(), l = n.query(), t.query(""), n.query("");
        if (t.toString() !== n.toString()) return !1;
        if (f.length !== l.length) return !1;
        i = r.parseQuery(f), o = r.parseQuery(l);
        for (c in i)
            if (s.call(i, c)) {
                if (!u(i[c])) {
                    if (i[c] !== o[c]) return !1
                } else {
                    if (!u(o[c])) return !1;
                    if (i[c].length !== o[c].length) return !1;
                    i[c].sort(), o[c].sort();
                    for (var h = 0, p = i[c].length; h < p; h++)
                        if (i[c][h] !== o[c][h]) return !1
                }
                a[c] = !0
            }
        for (c in o)
            if (s.call(o, c) && !a[c]) return !1;
        return !0
    }, i.duplicateQueryParameters = function(e) {
        return this._parts.duplicateQueryParameters = !!e, this
    }, r
}),
function(e) {
    var t = function(t, n) {
            e("#flyout").css({
                left: e("#left_col").outerWidth()
            }), e("#flyout .content, #flyout .point").css({
                top: "auto",
                bottom: "auto"
            });
            var r = t.offset(),
                i = e(window).height(),
                s = r.top,
                o = t.outerHeight(),
                u = s + o / 2 - 10,
                a = i - (s + o),
                f = e("#flyout .content").outerHeight();
            n === "top" && (e("#flyout .point").css({
                top: u - 7
            }), s < 10 ? e("#flyout .content").css({
                top: 0
            }) : e("#flyout .content").css({
                top: s - 10
            })), n === "mid" && (e("#flyout .point").css({
                top: u - 7
            }), e("#flyout .content").css({
                top: u - f / 2
            })), n === "bot" && (e("#flyout .point").css({
                bottom: a + o / 2 - 17
            }), s + o > i - 10 ? e("#flyout .content").css({
                bottom: 0
            }) : e("#flyout .content").css({
                bottom: a - 10
            }))
        },
        n = function(n, r) {
            e(".flyout-active").tipsy({
                trigger: "hover"
            }).removeClass("flyout-active");
            var i = ich[r.content](r.data);
            e("#flyout .content").html(i), e("#flyout").show(), n.addClass("flyout-active").hover(function() {
                e(this).tipsy("hide")
            }), t(n, r.anchor)
        },
        r = function() {
            e(".flyout-active").tipsy({
                trigger: "hover"
            }).removeClass("flyout-active"), e("#flyout").hide().children(".content").empty()
        };
    e.fn.flyout = function(t, i) {
        i = e.extend({
            trigger: !1,
            focusOnLoad: !1,
            anchor: "top",
            content: t
        }, i), this.click(function(t) {
            t.preventDefault(), t.stopPropagation(), e(this).hasClass("flyout-active") ? r() : (n(e(this), i), e(this).tipsy("hide"), e("#flyout .content").bind("clickoutside", function(t) {
                e("#flyout").is(":visible") && r()
            }), i.trigger && e("body").trigger(i.trigger), i.focusOnLoad && e(i.focusOnLoad).focus())
        })
    }
}(jQuery);
var swfobject = function() {
    function C() {
        if (b) return;
        try {
            var e = a.getElementsByTagName("body")[0].appendChild(U("span"));
            e.parentNode.removeChild(e)
        } catch (t) {
            return
        }
        b = !0;
        var n = c.length;
        for (var r = 0; r < n; r++) c[r]()
    }

    function k(e) {
        b ? e() : c[c.length] = e
    }

    function L(t) {
        if (typeof u.addEventListener != e) u.addEventListener("load", t, !1);
        else if (typeof a.addEventListener != e) a.addEventListener("load", t, !1);
        else if (typeof u.attachEvent != e) z(u, "onload", t);
        else if (typeof u.onload == "function") {
            var n = u.onload;
            u.onload = function() {
                n(), t()
            }
        } else u.onload = t
    }

    function A() {
        l ? O() : M()
    }

    function O() {
        var n = a.getElementsByTagName("body")[0],
            r = U(t);
        r.setAttribute("type", i);
        var s = n.appendChild(r);
        if (s) {
            var o = 0;
            (function() {
                if (typeof s.GetVariable != e) {
                    var t = s.GetVariable("$version");
                    t && (t = t.split(" ")[1].split(","), T.pv = [parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10)])
                } else if (o < 10) {
                    o++, setTimeout(arguments.callee, 10);
                    return
                }
                n.removeChild(r), s = null, M()
            })()
        } else M()
    }

    function M() {
        var t = h.length;
        if (t > 0)
            for (var n = 0; n < t; n++) {
                var r = h[n].id,
                    i = h[n].callbackFn,
                    s = {
                        success: !1,
                        id: r
                    };
                if (T.pv[0] > 0) {
                    var o = R(r);
                    if (o)
                        if (W(h[n].swfVersion) && !(T.wk && T.wk < 312)) V(r, !0), i && (s.success = !0, s.ref = _(r), i(s));
                        else if (h[n].expressInstall && D()) {
                        var u = {};
                        u.data = h[n].expressInstall, u.width = o.getAttribute("width") || "0", u.height = o.getAttribute("height") || "0", o.getAttribute("class") && (u.styleclass = o.getAttribute("class")), o.getAttribute("align") && (u.align = o.getAttribute("align"));
                        var a = {},
                            f = o.getElementsByTagName("param"),
                            l = f.length;
                        for (var c = 0; c < l; c++) f[c].getAttribute("name").toLowerCase() != "movie" && (a[f[c].getAttribute("name")] = f[c].getAttribute("value"));
                        P(u, a, r, i)
                    } else H(o), i && i(s)
                } else {
                    V(r, !0);
                    if (i) {
                        var p = _(r);
                        p && typeof p.SetVariable != e && (s.success = !0, s.ref = p), i(s)
                    }
                }
            }
    }

    function _(n) {
        var r = null,
            i = R(n);
        if (i && i.nodeName == "OBJECT")
            if (typeof i.SetVariable != e) r = i;
            else {
                var s = i.getElementsByTagName(t)[0];
                s && (r = s)
            }
        return r
    }

    function D() {
        return !w && W("6.0.65") && (T.win || T.mac) && !(T.wk && T.wk < 312)
    }

    function P(t, n, r, i) {
        w = !0, g = i || null, y = {
            success: !1,
            id: r
        };
        var o = R(r);
        if (o) {
            o.nodeName == "OBJECT" ? (v = B(o), m = null) : (v = o, m = r), t.id = s;
            if (typeof t.width == e || !/%$/.test(t.width) && parseInt(t.width, 10) < 310) t.width = "310";
            if (typeof t.height == e || !/%$/.test(t.height) && parseInt(t.height, 10) < 137) t.height = "137";
            a.title = a.title.slice(0, 47) + " - Flash Player Installation";
            var f = T.ie && T.win ? "ActiveX" : "PlugIn",
                l = "MMredirectURL=" + u.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + f + "&MMdoctitle=" + a.title;
            typeof n.flashvars != e ? n.flashvars += "&" + l : n.flashvars = l;
            if (T.ie && T.win && o.readyState != 4) {
                var c = U("div");
                r += "SWFObjectNew", c.setAttribute("id", r), o.parentNode.insertBefore(c, o), o.style.display = "none",
                    function() {
                        o.readyState == 4 ? o.parentNode.removeChild(o) : setTimeout(arguments.callee, 10)
                    }()
            }
            j(t, n, r)
        }
    }

    function H(e) {
        if (T.ie && T.win && e.readyState != 4) {
            var t = U("div");
            e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(B(e), t), e.style.display = "none",
                function() {
                    e.readyState == 4 ? e.parentNode.removeChild(e) : setTimeout(arguments.callee, 10)
                }()
        } else e.parentNode.replaceChild(B(e), e)
    }

    function B(e) {
        var n = U("div");
        if (T.win && T.ie) n.innerHTML = e.innerHTML;
        else {
            var r = e.getElementsByTagName(t)[0];
            if (r) {
                var i = r.childNodes;
                if (i) {
                    var s = i.length;
                    for (var o = 0; o < s; o++)(i[o].nodeType != 1 || i[o].nodeName != "PARAM") && i[o].nodeType != 8 && n.appendChild(i[o].cloneNode(!0))
                }
            }
        }
        return n
    }

    function j(n, r, s) {
        var o, u = R(s);
        if (T.wk && T.wk < 312) return o;
        if (u) {
            typeof n.id == e && (n.id = s);
            if (T.ie && T.win) {
                var a = "";
                for (var f in n) n[f] != Object.prototype[f] && (f.toLowerCase() == "data" ? r.movie = n[f] : f.toLowerCase() == "styleclass" ? a += ' class="' + n[f] + '"' : f.toLowerCase() != "classid" && (a += " " + f + '="' + n[f] + '"'));
                var l = "";
                for (var c in r) r[c] != Object.prototype[c] && (l += '<param name="' + c + '" value="' + r[c] + '" />');
                u.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + a + ">" + l + "</object>", p[p.length] = n.id, o = R(n.id)
            } else {
                var h = U(t);
                h.setAttribute("type", i);
                for (var d in n) n[d] != Object.prototype[d] && (d.toLowerCase() == "styleclass" ? h.setAttribute("class", n[d]) : d.toLowerCase() != "classid" && h.setAttribute(d, n[d]));
                for (var v in r) r[v] != Object.prototype[v] && v.toLowerCase() != "movie" && F(h, v, r[v]);
                u.parentNode.replaceChild(h, u), o = h
            }
        }
        return o
    }

    function F(e, t, n) {
        var r = U("param");
        r.setAttribute("name", t), r.setAttribute("value", n), e.appendChild(r)
    }

    function I(e) {
        var t = R(e);
        t && t.nodeName == "OBJECT" && (T.ie && T.win ? (t.style.display = "none", function() {
            t.readyState == 4 ? q(e) : setTimeout(arguments.callee, 10)
        }()) : t.parentNode.removeChild(t))
    }

    function q(e) {
        var t = R(e);
        if (t) {
            for (var n in t) typeof t[n] == "function" && (t[n] = null);
            t.parentNode.removeChild(t)
        }
    }

    function R(e) {
        var t = null;
        try {
            t = a.getElementById(e)
        } catch (n) {}
        return t
    }

    function U(e) {
        return a.createElement(e)
    }

    function z(e, t, n) {
        e.attachEvent(t, n), d[d.length] = [e, t, n]
    }

    function W(e) {
        var t = T.pv,
            n = e.split(".");
        return n[0] = parseInt(n[0], 10), n[1] = parseInt(n[1], 10) || 0, n[2] = parseInt(n[2], 10) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? !0 : !1
    }

    function X(n, r, i, s) {
        if (T.ie && T.mac) return;
        var o = a.getElementsByTagName("head")[0];
        if (!o) return;
        var u = i && typeof i == "string" ? i : "screen";
        s && (E = null, S = null);
        if (!E || S != u) {
            var f = U("style");
            f.setAttribute("type", "text/css"), f.setAttribute("media", u), E = o.appendChild(f), T.ie && T.win && typeof a.styleSheets != e && a.styleSheets.length > 0 && (E = a.styleSheets[a.styleSheets.length - 1]), S = u
        }
        T.ie && T.win ? E && typeof E.addRule == t && E.addRule(n, r) : E && typeof a.createTextNode != e && E.appendChild(a.createTextNode(n + " {" + r + "}"))
    }

    function V(e, t) {
        if (!x) return;
        var n = t ? "visible" : "hidden";
        b && R(e) ? R(e).style.visibility = n : X("#" + e, "visibility:" + n)
    }

    function $(t) {
        var n = /[\\\"<>\.;]/,
            r = n.exec(t) != null;
        return r && typeof encodeURIComponent != e ? encodeURIComponent(t) : t
    }
    var e = "undefined",
        t = "object",
        n = "Shockwave Flash",
        r = "ShockwaveFlash.ShockwaveFlash",
        i = "application/x-shockwave-flash",
        s = "SWFObjectExprInst",
        o = "onreadystatechange",
        u = window,
        a = document,
        f = navigator,
        l = !1,
        c = [A],
        h = [],
        p = [],
        d = [],
        v, m, g, y, b = !1,
        w = !1,
        E, S, x = !0,
        T = function() {
            var s = typeof a.getElementById != e && typeof a.getElementsByTagName != e && typeof a.createElement != e,
                o = f.userAgent.toLowerCase(),
                c = f.platform.toLowerCase(),
                h = c ? /win/.test(c) : /win/.test(o),
                p = c ? /mac/.test(c) : /mac/.test(o),
                d = /webkit/.test(o) ? parseFloat(o.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
                v = !1,
                m = [0, 0, 0],
                g = null;
            if (typeof f.plugins != e && typeof f.plugins[n] == t) g = f.plugins[n].description, g && (typeof f.mimeTypes == e || !f.mimeTypes[i] || !!f.mimeTypes[i].enabledPlugin) && (l = !0, v = !1, g = g.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), m[0] = parseInt(g.replace(/^(.*)\..*$/, "$1"), 10), m[1] = parseInt(g.replace(/^.*\.(.*)\s.*$/, "$1"), 10), m[2] = /[a-zA-Z]/.test(g) ? parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
            else if (typeof u.ActiveXObject != e) try {
                var y = new ActiveXObject(r);
                y && (g = y.GetVariable("$version"), g && (v = !0, g = g.split(" ")[1].split(","), m = [parseInt(g[0], 10), parseInt(g[1], 10), parseInt(g[2], 10)]))
            } catch (b) {}
            return {
                w3: s,
                pv: m,
                wk: d,
                ie: v,
                win: h,
                mac: p
            }
        }(),
        N = function() {
            if (!T.w3) return;
            (typeof a.readyState != e && a.readyState == "complete" || typeof a.readyState == e && (a.getElementsByTagName("body")[0] || a.body)) && C(), b || (typeof a.addEventListener != e && a.addEventListener("DOMContentLoaded", C, !1), T.ie && T.win && (a.attachEvent(o, function() {
                a.readyState == "complete" && (a.detachEvent(o, arguments.callee), C())
            }), u == top && function() {
                if (b) return;
                try {
                    a.documentElement.doScroll("left")
                } catch (e) {
                    setTimeout(arguments.callee, 0);
                    return
                }
                C()
            }()), T.wk && function() {
                if (b) return;
                if (!/loaded|complete/.test(a.readyState)) {
                    setTimeout(arguments.callee, 0);
                    return
                }
                C()
            }(), L(C))
        }(),
        J = function() {
            T.ie && T.win && window.attachEvent("onunload", function() {
                var e = d.length;
                for (var t = 0; t < e; t++) d[t][0].detachEvent(d[t][1], d[t][2]);
                var n = p.length;
                for (var r = 0; r < n; r++) I(p[r]);
                for (var i in T) T[i] = null;
                T = null;
                for (var s in swfobject) swfobject[s] = null;
                swfobject = null
            })
        }();
    return {
        registerObject: function(e, t, n, r) {
            if (T.w3 && e && t) {
                var i = {};
                i.id = e, i.swfVersion = t, i.expressInstall = n, i.callbackFn = r, h[h.length] = i, V(e, !1)
            } else r && r({
                success: !1,
                id: e
            })
        },
        getObjectById: function(e) {
            if (T.w3) return _(e)
        },
        embedSWF: function(n, r, i, s, o, u, a, f, l, c) {
            var h = {
                success: !1,
                id: r
            };
            T.w3 && !(T.wk && T.wk < 312) && n && r && i && s && o ? (V(r, !1), k(function() {
                i += "", s += "";
                var p = {};
                if (l && typeof l === t)
                    for (var d in l) p[d] = l[d];
                p.data = n, p.width = i, p.height = s;
                var v = {};
                if (f && typeof f === t)
                    for (var m in f) v[m] = f[m];
                if (a && typeof a === t)
                    for (var g in a) typeof v.flashvars != e ? v.flashvars += "&" + g + "=" + a[g] : v.flashvars = g + "=" + a[g];
                if (W(o)) {
                    var y = j(p, v, r);
                    p.id == r && V(r, !0), h.success = !0, h.ref = y
                } else {
                    if (u && D()) {
                        p.data = u, P(p, v, r, c);
                        return
                    }
                    V(r, !0)
                }
                c && c(h)
            })) : c && c(h)
        },
        switchOffAutoHideShow: function() {
            x = !1
        },
        ua: T,
        getFlashPlayerVersion: function() {
            return {
                major: T.pv[0],
                minor: T.pv[1],
                release: T.pv[2]
            }
        },
        hasFlashPlayerVersion: W,
        createSWF: function(e, t, n) {
            return T.w3 ? j(e, t, n) : undefined
        },
        showExpressInstall: function(e, t, n, r) {
            T.w3 && D() && P(e, t, n, r)
        },
        removeSWF: function(e) {
            T.w3 && I(e)
        },
        createCSS: function(e, t, n, r) {
            T.w3 && X(e, t, n, r)
        },
        addDomLoadEvent: k,
        addLoadEvent: L,
        getQueryParamValue: function(e) {
            var t = a.location.search || a.location.hash;
            if (t) {
                /\?/.test(t) && (t = t.split("?")[1]);
                if (e == null) return $(t);
                var n = t.split("&");
                for (var r = 0; r < n.length; r++)
                    if (n[r].substring(0, n[r].indexOf("=")) == e) return $(n[r].substring(n[r].indexOf("=") + 1))
            }
            return ""
        },
        expressInstallCallback: function() {
            if (w) {
                var e = R(s);
                e && v && (e.parentNode.replaceChild(v, e), m && (V(m, !0), T.ie && T.win && (v.style.display = "block")), g && g(y)), w = !1
            }
        }
    }
}();
Date.CultureInfo = {
        name: "en-US",
        englishName: "English (United States)",
        nativeName: "English (United States)",
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        amDesignator: "am",
        pmDesignator: "pm",
        firstDayOfWeek: 0,
        twoDigitYearMax: 2029,
        dateElementOrder: "mdy",
        formatPatterns: {
            shortDate: "M/d/yyyy",
            longDate: "dddd, MMMM dd, yyyy",
            shortTime: "h:mm tt",
            longTime: "h:mm:ss tt",
            fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt",
            sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
            universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
            rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
            monthDay: "MMMM dd",
            yearMonth: "MMMM, yyyy"
        },
        regexPatterns: {
            jan: /^jan(uary)?/i,
            feb: /^feb(ruary)?/i,
            mar: /^mar(ch)?/i,
            apr: /^apr(il)?/i,
            may: /^may/i,
            jun: /^jun(e)?/i,
            jul: /^jul(y)?/i,
            aug: /^aug(ust)?/i,
            sep: /^sep(t(ember)?)?/i,
            oct: /^oct(ober)?/i,
            nov: /^nov(ember)?/i,
            dec: /^dec(ember)?/i,
            sun: /^su(n(day)?)?/i,
            mon: /^mo(n(day)?)?/i,
            tue: /^tu(e(s(day)?)?)?/i,
            wed: /^we(d(nesday)?)?/i,
            thu: /^th(u(r(s(day)?)?)?)?/i,
            fri: /^fr(i(day)?)?/i,
            sat: /^sa(t(urday)?)?/i,
            future: /^next/i,
            past: /^last|past|prev(ious)?/i,
            add: /^(\+|aft(er)?|from|hence)/i,
            subtract: /^(\-|bef(ore)?|ago)/i,
            yesterday: /^yes(terday)?/i,
            today: /^t(od(ay)?)?/i,
            tomorrow: /^tom(orrow)?/i,
            now: /^n(ow)?/i,
            millisecond: /^ms|milli(second)?s?/i,
            second: /^sec(ond)?s?/i,
            minute: /^mn|min(ute)?s?/i,
            hour: /^h(our)?s?/i,
            week: /^w(eek)?s?/i,
            month: /^m(onth)?s?/i,
            day: /^d(ay)?s?/i,
            year: /^y(ear)?s?/i,
            shortMeridian: /^(a|p)/i,
            longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
            timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
            ordinalSuffix: /^\s*(st|nd|rd|th)/i,
            timeContext: /^\s*(\:|a(?!u|p)|p)/i
        },
        timezones: [{
            name: "UTC",
            offset: "-000"
        }, {
            name: "GMT",
            offset: "-000"
        }, {
            name: "EST",
            offset: "-0500"
        }, {
            name: "EDT",
            offset: "-0400"
        }, {
            name: "CST",
            offset: "-0600"
        }, {
            name: "CDT",
            offset: "-0500"
        }, {
            name: "MST",
            offset: "-0700"
        }, {
            name: "MDT",
            offset: "-0600"
        }, {
            name: "PST",
            offset: "-0800"
        }, {
            name: "PDT",
            offset: "-0700"
        }]
    },
    function() {
        var e = Date,
            t = e.prototype,
            n = e.CultureInfo,
            r = function(e, t) {
                return t || (t = 2), ("000" + e).slice(t * -1)
            };
        t.clearTime = function() {
            return this.setHours(0), this.setMinutes(0), this.setSeconds(0), this.setMilliseconds(0), this
        }, t.setTimeToNow = function() {
            var e = new Date;
            return this.setHours(e.getHours()), this.setMinutes(e.getMinutes()), this.setSeconds(e.getSeconds()), this.setMilliseconds(e.getMilliseconds()), this
        }, e.today = function() {
            return (new Date).clearTime()
        }, e.compare = function(e, t) {
            if (isNaN(e) || isNaN(t)) throw new Error(e + " - " + t);
            if (e instanceof Date && t instanceof Date) return e < t ? -1 : e > t ? 1 : 0;
            throw new TypeError(e + " - " + t)
        }, e.equals = function(e, t) {
            return e.compareTo(t) === 0
        }, e.getDayNumberFromName = function(e) {
            var t = n.dayNames,
                r = n.abbreviatedDayNames,
                i = n.shortestDayNames,
                s = e.toLowerCase();
            for (var o = 0; o < t.length; o++)
                if (t[o].toLowerCase() == s || r[o].toLowerCase() == s || i[o].toLowerCase() == s) return o;
            return -1
        }, e.getMonthNumberFromName = function(e) {
            var t = n.monthNames,
                r = n.abbreviatedMonthNames,
                i = e.toLowerCase();
            for (var s = 0; s < t.length; s++)
                if (t[s].toLowerCase() == i || r[s].toLowerCase() == i) return s;
            return -1
        }, e.isLeapYear = function(e) {
            return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
        }, e.getDaysInMonth = function(t, n) {
            return [31, e.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n]
        }, e.getTimezoneAbbreviation = function(e) {
            var t = n.timezones,
                r;
            for (var i = 0; i < t.length; i++)
                if (t[i].offset === e) return t[i].name;
            return null
        }, e.getTimezoneOffset = function(e) {
            var t = n.timezones,
                r;
            for (var i = 0; i < t.length; i++)
                if (t[i].name === e.toUpperCase()) return t[i].offset;
            return null
        }, t.clone = function() {
            return new Date(this.getTime())
        }, t.compareTo = function(e) {
            return Date.compare(this, e)
        }, t.equals = function(e) {
            return Date.equals(this, e || new Date)
        }, t.between = function(e, t) {
            return this.getTime() >= e.getTime() && this.getTime() <= t.getTime()
        }, t.isAfter = function(e) {
            return this.compareTo(e || new Date) === 1
        }, t.isBefore = function(e) {
            return this.compareTo(e || new Date) === -1
        }, t.isToday = function() {
            return this.isSameDay(new Date)
        }, t.isSameDay = function(e) {
            return this.clone().clearTime().equals(e.clone().clearTime())
        }, t.addMilliseconds = function(e) {
            return this.setMilliseconds(this.getMilliseconds() + e), this
        }, t.addSeconds = function(e) {
            return this.addMilliseconds(e * 1e3)
        }, t.addMinutes = function(e) {
            return this.addMilliseconds(e * 6e4)
        }, t.addHours = function(e) {
            return this.addMilliseconds(e * 36e5)
        }, t.addDays = function(e) {
            return this.setDate(this.getDate() + e), this
        }, t.addWeeks = function(e) {
            return this.addDays(e * 7)
        }, t.addMonths = function(t) {
            var n = this.getDate();
            return this.setDate(1), this.setMonth(this.getMonth() + t), this.setDate(Math.min(n, e.getDaysInMonth(this.getFullYear(), this.getMonth()))), this
        }, t.addYears = function(e) {
            return this.addMonths(e * 12)
        }, t.add = function(e) {
            if (typeof e == "number") return this._orient = e, this;
            var t = e;
            return t.milliseconds && this.addMilliseconds(t.milliseconds), t.seconds && this.addSeconds(t.seconds), t.minutes && this.addMinutes(t.minutes), t.hours && this.addHours(t.hours), t.weeks && this.addWeeks(t.weeks), t.months && this.addMonths(t.months), t.years && this.addYears(t.years), t.days && this.addDays(t.days), this
        };
        var i, s, o;
        t.getWeek = function() {
            var e, t, n, r, u, a, f, l, c, h;
            return i = i ? i : this.getFullYear(), s = s ? s : this.getMonth() + 1, o = o ? o : this.getDate(), s <= 2 ? (e = i - 1, t = (e / 4 | 0) - (e / 100 | 0) + (e / 400 | 0), n = ((e - 1) / 4 | 0) - ((e - 1) / 100 | 0) + ((e - 1) / 400 | 0), c = t - n, u = 0, a = o - 1 + 31 * (s - 1)) : (e = i, t = (e / 4 | 0) - (e / 100 | 0) + (e / 400 | 0), n = ((e - 1) / 4 | 0) - ((e - 1) / 100 | 0) + ((e - 1) / 400 | 0), c = t - n, u = c + 1, a = o + (153 * (s - 3) + 2) / 5 + 58 + c), f = (e + t) % 7, r = (a + f - u) % 7, l = a + 3 - r | 0, l < 0 ? h = 53 - ((f - c) / 5 | 0) : l > 364 + c ? h = 1 : h = (l / 7 | 0) + 1, i = s = o = null, h
        }, t.getISOWeek = function() {
            return i = this.getUTCFullYear(), s = this.getUTCMonth() + 1, o = this.getUTCDate(), r(this.getWeek())
        }, t.setWeek = function(e) {
            return this.moveToDayOfWeek(1).addWeeks(e - this.getWeek())
        }, e._validate = function(e, t, n, r) {
            if (typeof e == "undefined") return !1;
            if (typeof e != "number") throw new TypeError(e + " is not a Number.");
            if (e < t || e > n) throw new RangeError(e + " is not a valid value for " + r + ".");
            return !0
        }, e.validateMillisecond = function(t) {
            return e._validate(t, 0, 999, "millisecond")
        }, e.validateSecond = function(t) {
            return e._validate(t, 0, 59, "second")
        }, e.validateMinute = function(t) {
            return e._validate(t, 0, 59, "minute")
        }, e.validateHour = function(t) {
            return e._validate(t, 0, 23, "hour")
        }, e.validateDay = function(t, n, r) {
            return e._validate(t, 1, e.getDaysInMonth(n, r), "day")
        }, e.validateMonth = function(t) {
            return e._validate(t, 0, 11, "month")
        }, e.validateYear = function(t) {
            return e._validate(t, 0, 9999, "year")
        }, t.set = function(t) {
            return e.validateMillisecond(t.millisecond) && this.addMilliseconds(t.millisecond - this.getMilliseconds()), e.validateSecond(t.second) && this.addSeconds(t.second - this.getSeconds()), e.validateMinute(t.minute) && this.addMinutes(t.minute - this.getMinutes()), e.validateHour(t.hour) && this.addHours(t.hour - this.getHours()), e.validateMonth(t.month) && this.addMonths(t.month - this.getMonth()), e.validateYear(t.year) && this.addYears(t.year - this.getFullYear()), e.validateDay(t.day, this.getFullYear(), this.getMonth()) && this.addDays(t.day - this.getDate()), t.timezone && this.setTimezone(t.timezone), t.timezoneOffset && this.setTimezoneOffset(t.timezoneOffset), t.week && e._validate(t.week, 0, 53, "week") && this.setWeek(t.week), this
        }, t.moveToFirstDayOfMonth = function() {
            return this.set({
                day: 1
            })
        }, t.moveToLastDayOfMonth = function() {
            return this.set({
                day: e.getDaysInMonth(this.getFullYear(), this.getMonth())
            })
        }, t.moveToNthOccurrence = function(e, t) {
            var n = 0;
            if (t > 0) n = t - 1;
            else if (t === -1) return this.moveToLastDayOfMonth(), this.getDay() !== e && this.moveToDayOfWeek(e, -1), this;
            return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(e, 1).addWeeks(n)
        }, t.moveToDayOfWeek = function(e, t) {
            var n = (e - this.getDay() + 7 * (t || 1)) % 7;
            return this.addDays(n === 0 ? n += 7 * (t || 1) : n)
        }, t.moveToMonth = function(e, t) {
            var n = (e - this.getMonth() + 12 * (t || 1)) % 12;
            return this.addMonths(n === 0 ? n += 12 * (t || 1) : n)
        }, t.getOrdinalNumber = function() {
            return Math.ceil((this.clone().clearTime() - new Date(this.getFullYear(), 0, 1)) / 864e5) + 1
        }, t.getTimezone = function() {
            return e.getTimezoneAbbreviation(this.getUTCOffset())
        }, t.setTimezoneOffset = function(e) {
            var t = this.getTimezoneOffset(),
                n = Number(e) * -6 / 10;
            return this.addMinutes(n - t)
        }, t.setTimezone = function(t) {
            return this.setTimezoneOffset(e.getTimezoneOffset(t))
        }, t.hasDaylightSavingTime = function() {
            return Date.today().set({
                month: 0,
                day: 1
            }).getTimezoneOffset() !== Date.today().set({
                month: 6,
                day: 1
            }).getTimezoneOffset()
        }, t.isDaylightSavingTime = function() {
            return this.hasDaylightSavingTime() && (new Date).getTimezoneOffset() === Date.today().set({
                month: 6,
                day: 1
            }).getTimezoneOffset()
        }, t.getUTCOffset = function() {
            var e = this.getTimezoneOffset() * -10 / 6,
                t;
            return e < 0 ? (t = (e - 1e4).toString(), t.charAt(0) + t.substr(2)) : (t = (e + 1e4).toString(), "+" + t.substr(1))
        }, t.getElapsed = function(e) {
            return (e || new Date) - this
        }, t.toISOString || (t.toISOString = function() {
            function e(e) {
                return e < 10 ? "0" + e : e
            }
            return '"' + this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + 'Z"'
        }), t._toString = t.toString, t.toString = function(e) {
            var t = this;
            if (e && e.length == 1) {
                var i = n.formatPatterns;
                t.t = t.toString;
                switch (e) {
                    case "d":
                        return t.t(i.shortDate);
                    case "D":
                        return t.t(i.longDate);
                    case "F":
                        return t.t(i.fullDateTime);
                    case "m":
                        return t.t(i.monthDay);
                    case "r":
                        return t.t(i.rfc1123);
                    case "s":
                        return t.t(i.sortableDateTime);
                    case "t":
                        return t.t(i.shortTime);
                    case "T":
                        return t.t(i.longTime);
                    case "u":
                        return t.t(i.universalSortableDateTime);
                    case "y":
                        return t.t(i.yearMonth)
                }
            }
            var s = function(e) {
                switch (e * 1) {
                    case 1:
                    case 21:
                    case 31:
                        return "st";
                    case 2:
                    case 22:
                        return "nd";
                    case 3:
                    case 23:
                        return "rd";
                    default:
                        return "th"
                }
            };
            return e ? e.replace(/(\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S)/g, function(e) {
                if (e.charAt(0) === "\\") return e.replace("\\", "");
                t.h = t.getHours;
                switch (e) {
                    case "hh":
                        return r(t.h() < 13 ? t.h() === 0 ? 12 : t.h() : t.h() - 12);
                    case "h":
                        return t.h() < 13 ? t.h() === 0 ? 12 : t.h() : t.h() - 12;
                    case "HH":
                        return r(t.h());
                    case "H":
                        return t.h();
                    case "mm":
                        return r(t.getMinutes());
                    case "m":
                        return t.getMinutes();
                    case "ss":
                        return r(t.getSeconds());
                    case "s":
                        return t.getSeconds();
                    case "yyyy":
                        return r(t.getFullYear(), 4);
                    case "yy":
                        return r(t.getFullYear());
                    case "dddd":
                        return n.dayNames[t.getDay()];
                    case "ddd":
                        return n.abbreviatedDayNames[t.getDay()];
                    case "dd":
                        return r(t.getDate());
                    case "d":
                        return t.getDate();
                    case "MMMM":
                        return n.monthNames[t.getMonth()];
                    case "MMM":
                        return n.abbreviatedMonthNames[t.getMonth()];
                    case "MM":
                        return r(t.getMonth() + 1);
                    case "M":
                        return t.getMonth() + 1;
                    case "t":
                        return t.h() < 12 ? n.amDesignator.substring(0, 1) : n.pmDesignator.substring(0, 1);
                    case "tt":
                        return t.h() < 12 ? n.amDesignator : n.pmDesignator;
                    case "S":
                        return s(t.getDate());
                    default:
                        return e
                }
            }) : this._toString()
        }
    }(),
    function() {
        var e = Date,
            t = e.prototype,
            n = e.CultureInfo,
            r = Number.prototype;
        t._orient = 1, t._nth = null, t._is = !1, t._same = !1, t._isSecond = !1, r._dateElement = "day", t.next = function() {
            return this._orient = 1, this
        }, e.next = function() {
            return e.today().next()
        }, t.last = t.prev = t.previous = function() {
            return this._orient = -1, this
        }, e.last = e.prev = e.previous = function() {
            return e.today().last()
        }, t.is = function() {
            return this._is = !0, this
        }, t.same = function() {
            return this._same = !0, this._isSecond = !1, this
        }, t.today = function() {
            return this.same().day()
        }, t.weekday = function() {
            return this._is ? (this._is = !1, !this.is().sat() && !this.is().sun()) : !1
        }, t.at = function(t) {
            return typeof t == "string" ? e.parse(this.toString("d") + " " + t) : this.set(t)
        }, r.fromNow = r.after = function(e) {
            var t = {};
            return t[this._dateElement] = this, (e ? e.clone() : new Date).add(t)
        }, r.ago = r.before = function(e) {
            var t = {};
            return t[this._dateElement] = this * -1, (e ? e.clone() : new Date).add(t)
        };
        var i = "sunday monday tuesday wednesday thursday friday saturday".split(/\s/),
            s = "january february march april may june july august september october november december".split(/\s/),
            o = "Millisecond Second Minute Hour Day Week Month Year".split(/\s/),
            u = "Milliseconds Seconds Minutes Hours Date Week Month FullYear".split(/\s/),
            a = "final first second third fourth fifth".split(/\s/),
            f;
        t.toObject = function() {
            var e = {};
            for (var t = 0; t < o.length; t++) e[o[t].toLowerCase()] = this["get" + u[t]]();
            return e
        }, e.fromObject = function(e) {
            return e.week = null, Date.today().set(e)
        };
        var l = function(t) {
                return function() {
                    if (this._is) return this._is = !1, this.getDay() == t;
                    if (this._nth !== null) {
                        this._isSecond && this.addSeconds(this._orient * -1), this._isSecond = !1;
                        var n = this._nth;
                        this._nth = null;
                        var r = this.clone().moveToLastDayOfMonth();
                        this.moveToNthOccurrence(t, n);
                        if (this > r) throw new RangeError(e.getDayName(t) + " does not occur " + n + " times in the month of " + e.getMonthName(r.getMonth()) + " " + r.getFullYear() + ".");
                        return this
                    }
                    return this.moveToDayOfWeek(t, this._orient)
                }
            },
            c = function(t) {
                return function() {
                    var r = e.today(),
                        i = t - r.getDay();
                    return t === 0 && n.firstDayOfWeek === 1 && r.getDay() !== 0 && (i += 7), r.addDays(i)
                }
            };
        for (var h = 0; h < i.length; h++) e[i[h].toUpperCase()] = e[i[h].toUpperCase().substring(0, 3)] = h, e[i[h]] = e[i[h].substring(0, 3)] = c(h), t[i[h]] = t[i[h].substring(0, 3)] = l(h);
        var p = function(e) {
                return function() {
                    return this._is ? (this._is = !1, this.getMonth() === e) : this.moveToMonth(e, this._orient)
                }
            },
            d = function(t) {
                return function() {
                    return e.today().set({
                        month: t,
                        day: 1
                    })
                }
            };
        for (var v = 0; v < s.length; v++) e[s[v].toUpperCase()] = e[s[v].toUpperCase().substring(0, 3)] = v, e[s[v]] = e[s[v].substring(0, 3)] = d(v), t[s[v]] = t[s[v].substring(0, 3)] = p(v);
        var m = function(e) {
                return function() {
                    if (this._isSecond) return this._isSecond = !1, this;
                    if (this._same) {
                        this._same = this._is = !1;
                        var t = this.toObject(),
                            n = (arguments[0] || new Date).toObject(),
                            r = "",
                            i = e.toLowerCase();
                        for (var s = o.length - 1; s > -1; s--) {
                            r = o[s].toLowerCase();
                            if (t[r] != n[r]) return !1;
                            if (i == r) break
                        }
                        return !0
                    }
                    return e.substring(e.length - 1) != "s" && (e += "s"), this["add" + e](this._orient)
                }
            },
            g = function(e) {
                return function() {
                    return this._dateElement = e, this
                }
            };
        for (var y = 0; y < o.length; y++) f = o[y].toLowerCase(), t[f] = t[f + "s"] = m(o[y]), r[f] = r[f + "s"] = g(f);
        t._ss = m("Second");
        var b = function(e) {
            return function(t) {
                return this._same ? this._ss(arguments[0]) : t || t === 0 ? this.moveToNthOccurrence(t, e) : (this._nth = e, e !== 2 || t !== undefined && t !== null ? this : (this._isSecond = !0, this.addSeconds(this._orient)))
            }
        };
        for (var w = 0; w < a.length; w++) t[a[w]] = w === 0 ? b(-1) : b(w)
    }(),
    function() {
        Date.Parsing = {
            Exception: function(e) {
                this.message = "Parse error at '" + e.substring(0, 10) + " ...'"
            }
        };
        var e = Date.Parsing,
            t = e.Operators = {
                rtoken: function(t) {
                    return function(n) {
                        var i = n.match(t);
                        if (i) return [i[0], n.substring(i[0].length)];
                        throw new e.Exception(n)
                    }
                },
                token: function(e) {
                    return function(e) {
                        return t.rtoken(new RegExp("^s*" + e + "s*"))(e)
                    }
                },
                stoken: function(e) {
                    return t.rtoken(new RegExp("^" + e))
                },
                until: function(e) {
                    return function(t) {
                        var n = [],
                            r = null;
                        while (t.length) {
                            try {
                                r = e.call(this, t)
                            } catch (i) {
                                n.push(r[0]), t = r[1];
                                continue
                            }
                            break
                        }
                        return [n, t]
                    }
                },
                many: function(e) {
                    return function(t) {
                        var n = [],
                            r = null;
                        while (t.length) {
                            try {
                                r = e.call(this, t)
                            } catch (i) {
                                return [n, t]
                            }
                            n.push(r[0]), t = r[1]
                        }
                        return [n, t]
                    }
                },
                optional: function(e) {
                    return function(t) {
                        var n = null;
                        try {
                            n = e.call(this, t)
                        } catch (r) {
                            return [null, t]
                        }
                        return [n[0], n[1]]
                    }
                },
                not: function(t) {
                    return function(n) {
                        try {
                            t.call(this, n)
                        } catch (r) {
                            return [null, n]
                        }
                        throw new e.Exception(n)
                    }
                },
                ignore: function(e) {
                    return e ? function(t) {
                        var n = null;
                        return n = e.call(this, t), [null, n[1]]
                    } : null
                },
                product: function() {
                    var e = arguments[0],
                        n = Array.prototype.slice.call(arguments, 1),
                        r = [];
                    for (var i = 0; i < e.length; i++) r.push(t.each(e[i], n));
                    return r
                },
                cache: function(t) {
                    var n = {},
                        r = null;
                    return function(i) {
                        try {
                            r = n[i] = n[i] || t.call(this, i)
                        } catch (s) {
                            r = n[i] = s
                        }
                        if (r instanceof e.Exception) throw r;
                        return r
                    }
                },
                any: function() {
                    var t = arguments;
                    return function(n) {
                        var r = null;
                        for (var i = 0; i < t.length; i++) {
                            if (t[i] == null) continue;
                            try {
                                r = t[i].call(this, n)
                            } catch (s) {
                                r = null
                            }
                            if (r) return r
                        }
                        throw new e.Exception(n)
                    }
                },
                each: function() {
                    var t = arguments;
                    return function(n) {
                        var r = [],
                            i = null;
                        for (var s = 0; s < t.length; s++) {
                            if (t[s] == null) continue;
                            try {
                                i = t[s].call(this, n)
                            } catch (o) {
                                throw new e.Exception(n)
                            }
                            r.push(i[0]), n = i[1]
                        }
                        return [r, n]
                    }
                },
                all: function() {
                    var e = arguments,
                        t = t;
                    return t.each(t.optional(e))
                },
                sequence: function(n, r, i) {
                    return r = r || t.rtoken(/^\s*/), i = i || null, n.length == 1 ? n[0] : function(t) {
                        var s = null,
                            o = null,
                            u = [];
                        for (var a = 0; a < n.length; a++) {
                            try {
                                s = n[a].call(this, t)
                            } catch (f) {
                                break
                            }
                            u.push(s[0]);
                            try {
                                o = r.call(this, s[1])
                            } catch (l) {
                                o = null;
                                break
                            }
                            t = o[1]
                        }
                        if (!s) throw new e.Exception(t);
                        if (o) throw new e.Exception(o[1]);
                        if (i) try {
                            s = i.call(this, s[1])
                        } catch (h) {
                            throw new e.Exception(s[1])
                        }
                        return [u, s ? s[1] : t]
                    }
                },
                between: function(e, n, i) {
                    i = i || e;
                    var s = t.each(t.ignore(e), n, t.ignore(i));
                    return function(e) {
                        var t = s.call(this, e);
                        return [
                            [t[0][0], r[0][2]], t[1]
                        ]
                    }
                },
                list: function(e, n, r) {
                    return n = n || t.rtoken(/^\s*/), r = r || null, e instanceof Array ? t.each(t.product(e.slice(0, -1), t.ignore(n)), e.slice(-1), t.ignore(r)) : t.each(t.many(t.each(e, t.ignore(n))), px, t.ignore(r))
                },
                set: function(n, r, i) {
                    return r = r || t.rtoken(/^\s*/), i = i || null,
                        function(s) {
                            var o = null,
                                u = null,
                                a = null,
                                f = null,
                                l = [
                                    [], s
                                ],
                                h = !1;
                            for (var p = 0; p < n.length; p++) {
                                a = null, u = null, o = null, h = n.length == 1;
                                try {
                                    o = n[p].call(this, s)
                                } catch (v) {
                                    continue
                                }
                                f = [
                                    [o[0]], o[1]
                                ];
                                if (o[1].length > 0 && !h) try {
                                    a = r.call(this, o[1])
                                } catch (m) {
                                    h = !0
                                } else h = !0;
                                !h && a[1].length === 0 && (h = !0);
                                if (!h) {
                                    var g = [];
                                    for (var y = 0; y < n.length; y++) p != y && g.push(n[y]);
                                    u = t.set(g, r).call(this, a[1]), u[0].length > 0 && (f[0] = f[0].concat(u[0]), f[1] = u[1])
                                }
                                f[1].length < l[1].length && (l = f);
                                if (l[1].length === 0) break
                            }
                            if (l[0].length === 0) return l;
                            if (i) {
                                try {
                                    a = i.call(this, l[1])
                                } catch (b) {
                                    throw new e.Exception(l[1])
                                }
                                l[1] = a[1]
                            }
                            return l
                        }
                },
                forward: function(e, t) {
                    return function(n) {
                        return e[t].call(this, n)
                    }
                },
                replace: function(e, t) {
                    return function(n) {
                        var r = e.call(this, n);
                        return [t, r[1]]
                    }
                },
                process: function(e, t) {
                    return function(n) {
                        var r = e.call(this, n);
                        return [t.call(this, r[0]), r[1]]
                    }
                },
                min: function(t, n) {
                    return function(r) {
                        var i = n.call(this, r);
                        if (i[0].length < t) throw new e.Exception(r);
                        return i
                    }
                }
            },
            n = function(e) {
                return function() {
                    var t = null,
                        n = [];
                    arguments.length > 1 ? t = Array.prototype.slice.call(arguments) : arguments[0] instanceof Array && (t = arguments[0]);
                    if (!t) return e.apply(null, arguments);
                    for (var r = 0, i = t.shift(); r < i.length; r++) return t.unshift(i[r]), n.push(e.apply(null, t)), t.shift(), n
                }
            },
            i = "optional not ignore cache".split(/\s/);
        for (var s = 0; s < i.length; s++) t[i[s]] = n(t[i[s]]);
        var o = function(e) {
                return function() {
                    return arguments[0] instanceof Array ? e.apply(null, arguments[0]) : e.apply(null, arguments)
                }
            },
            u = "each any all".split(/\s/);
        for (var a = 0; a < u.length; a++) t[u[a]] = o(t[u[a]])
    }(),
    function() {
        var e = Date,
            t = e.prototype,
            n = e.CultureInfo,
            r = function(e) {
                var t = [];
                for (var n = 0; n < e.length; n++) e[n] instanceof Array ? t = t.concat(r(e[n])) : e[n] && t.push(e[n]);
                return t
            };
        e.Grammar = {}, e.Translator = {
            hour: function(e) {
                return function() {
                    this.hour = Number(e)
                }
            },
            minute: function(e) {
                return function() {
                    this.minute = Number(e)
                }
            },
            second: function(e) {
                return function() {
                    this.second = Number(e)
                }
            },
            meridian: function(e) {
                return function() {
                    this.meridian = e.slice(0, 1).toLowerCase()
                }
            },
            timezone: function(e) {
                return function() {
                    var t = e.replace(/[^\d\+\-]/g, "");
                    t.length ? this.timezoneOffset = Number(t) : this.timezone = e.toLowerCase()
                }
            },
            day: function(e) {
                var t = e[0];
                return function() {
                    this.day = Number(t.match(/\d+/)[0])
                }
            },
            month: function(e) {
                return function() {
                    this.month = e.length == 3 ? "jan feb mar apr may jun jul aug sep oct nov dec".indexOf(e) / 4 : Number(e) - 1
                }
            },
            year: function(e) {
                return function() {
                    var t = Number(e);
                    this.year = e.length > 2 ? t : t + (t + 2e3 < n.twoDigitYearMax ? 2e3 : 1900)
                }
            },
            rday: function(e) {
                return function() {
                    switch (e) {
                        case "yesterday":
                            this.days = -1;
                            break;
                        case "tomorrow":
                            this.days = 1;
                            break;
                        case "today":
                            this.days = 0;
                            break;
                        case "now":
                            this.days = 0, this.now = !0
                    }
                }
            },
            finishExact: function(t) {
                t = t instanceof Array ? t : [t];
                for (var n = 0; n < t.length; n++) t[n] && t[n].call(this);
                var r = new Date;
                (this.hour || this.minute) && !this.month && !this.year && !this.day && (this.day = r.getDate()), this.year || (this.year = r.getFullYear()), !this.month && this.month !== 0 && (this.month = r.getMonth()), this.day || (this.day = 1), this.hour || (this.hour = 0), this.minute || (this.minute = 0), this.second || (this.second = 0), this.meridian && this.hour && (this.meridian == "p" && this.hour < 12 ? this.hour = this.hour + 12 : this.meridian == "a" && this.hour == 12 && (this.hour = 0));
                if (this.day > e.getDaysInMonth(this.year, this.month)) throw new RangeError(this.day + " is not a valid value for days.");
                var i = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second);
                return this.timezone ? i.set({
                    timezone: this.timezone
                }) : this.timezoneOffset && i.set({
                    timezoneOffset: this.timezoneOffset
                }), i
            },
            finish: function(t) {
                t = t instanceof Array ? r(t) : [t];
                if (t.length === 0) return null;
                for (var n = 0; n < t.length; n++) typeof t[n] == "function" && t[n].call(this);
                var i = e.today();
                if (this.now && !this.unit && !this.operator) return new Date;
                this.now && (i = new Date);
                var s = !!(this.days && this.days !== null || this.orient || this.operator),
                    o, u, a;
                a = this.orient == "past" || this.operator == "subtract" ? -1 : 1, !this.now && "hour minute second".indexOf(this.unit) != -1 && i.setTimeToNow(), (this.month || this.month === 0) && "year day hour minute second".indexOf(this.unit) != -1 && (this.value = this.month + 1, this.month = null, s = !0);
                if (!s && this.weekday && !this.day && !this.days) {
                    var f = Date[this.weekday]();
                    this.day = f.getDate(), this.month || (this.month = f.getMonth()), this.year = f.getFullYear()
                }
                s && this.weekday && this.unit != "month" && (this.unit = "day", o = e.getDayNumberFromName(this.weekday) - i.getDay(), u = 7, this.days = o ? (o + a * u) % u : a * u), this.month && this.unit == "day" && this.operator && (this.value = this.month + 1, this.month = null), this.value != null && this.month != null && this.year != null && (this.day = this.value * 1), this.month && !this.day && this.value && (i.set({
                    day: this.value * 1
                }), s || (this.day = this.value * 1)), !this.month && this.value && this.unit == "month" && !this.now && (this.month = this.value, s = !0), s && (this.month || this.month === 0) && this.unit != "year" && (this.unit = "month", o = this.month - i.getMonth(), u = 12, this.months = o ? (o + a * u) % u : a * u, this.month = null), this.unit || (this.unit = "day");
                if (!this.value && this.operator && this.operator !== null && this[this.unit + "s"] && this[this.unit + "s"] !== null) this[this.unit + "s"] = this[this.unit + "s"] + (this.operator == "add" ? 1 : -1) + (this.value || 0) * a;
                else if (this[this.unit + "s"] == null || this.operator != null) this.value || (this.value = 1), this[this.unit + "s"] = this.value * a;
                this.meridian && this.hour && (this.meridian == "p" && this.hour < 12 ? this.hour = this.hour + 12 : this.meridian == "a" && this.hour == 12 && (this.hour = 0));
                if (this.weekday && !this.day && !this.days) {
                    var f = Date[this.weekday]();
                    this.day = f.getDate(), f.getMonth() !== i.getMonth() && (this.month = f.getMonth())
                }
                return (this.month || this.month === 0) && !this.day && (this.day = 1), !this.orient && !this.operator && this.unit == "week" && this.value && !this.day && !this.month ? Date.today().setWeek(this.value) : (s && this.timezone && this.day && this.days && (this.day = this.days), s ? i.add(this) : i.set(this))
            }
        };
        var i = e.Parsing.Operators,
            s = e.Grammar,
            o = e.Translator,
            u;
        s.datePartDelimiter = i.rtoken(/^([\s\-\.\,\/\x27]+)/), s.timePartDelimiter = i.stoken(":"), s.whiteSpace = i.rtoken(/^\s*/), s.generalDelimiter = i.rtoken(/^(([\s\,]|at|@|on)+)/);
        var a = {};
        s.ctoken = function(e) {
            var t = a[e];
            if (!t) {
                var r = n.regexPatterns,
                    s = e.split(/\s+/),
                    o = [];
                for (var u = 0; u < s.length; u++) o.push(i.replace(i.rtoken(r[s[u]]), s[u]));
                t = a[e] = i.any.apply(null, o)
            }
            return t
        }, s.ctoken2 = function(e) {
            return i.rtoken(n.regexPatterns[e])
        }, s.h = i.cache(i.process(i.rtoken(/^(0[0-9]|1[0-2]|[1-9])/), o.hour)), s.hh = i.cache(i.process(i.rtoken(/^(0[0-9]|1[0-2])/), o.hour)), s.H = i.cache(i.process(i.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/), o.hour)), s.HH = i.cache(i.process(i.rtoken(/^([0-1][0-9]|2[0-3])/), o.hour)), s.m = i.cache(i.process(i.rtoken(/^([0-5][0-9]|[0-9])/), o.minute)), s.mm = i.cache(i.process(i.rtoken(/^[0-5][0-9]/), o.minute)), s.s = i.cache(i.process(i.rtoken(/^([0-5][0-9]|[0-9])/), o.second)), s.ss = i.cache(i.process(i.rtoken(/^[0-5][0-9]/), o.second)), s.hms = i.cache(i.sequence([s.H, s.m, s.s], s.timePartDelimiter)), s.t = i.cache(i.process(s.ctoken2("shortMeridian"), o.meridian)), s.tt = i.cache(i.process(s.ctoken2("longMeridian"), o.meridian)), s.z = i.cache(i.process(i.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/), o.timezone)), s.zz = i.cache(i.process(i.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/), o.timezone)), s.zzz = i.cache(i.process(s.ctoken2("timezone"), o.timezone)), s.timeSuffix = i.each(i.ignore(s.whiteSpace), i.set([s.tt, s.zzz])), s.time = i.each(i.optional(i.ignore(i.stoken("T"))), s.hms, s.timeSuffix), s.d = i.cache(i.process(i.each(i.rtoken(/^([0-2]\d|3[0-1]|\d)/), i.optional(s.ctoken2("ordinalSuffix"))), o.day)), s.dd = i.cache(i.process(i.each(i.rtoken(/^([0-2]\d|3[0-1])/), i.optional(s.ctoken2("ordinalSuffix"))), o.day)), s.ddd = s.dddd = i.cache(i.process(s.ctoken("sun mon tue wed thu fri sat"), function(e) {
            return function() {
                this.weekday = e
            }
        })), s.M = i.cache(i.process(i.rtoken(/^(1[0-2]|0\d|\d)/), o.month)), s.MM = i.cache(i.process(i.rtoken(/^(1[0-2]|0\d)/), o.month)), s.MMM = s.MMMM = i.cache(i.process(s.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), o.month)), s.y = i.cache(i.process(i.rtoken(/^(\d\d?)/), o.year)), s.yy = i.cache(i.process(i.rtoken(/^(\d\d)/), o.year)), s.yyy = i.cache(i.process(i.rtoken(/^(\d\d?\d?\d?)/), o.year)), s.yyyy = i.cache(i.process(i.rtoken(/^(\d\d\d\d)/), o.year)), u = function() {
            return i.each(i.any.apply(null, arguments), i.not(s.ctoken2("timeContext")))
        }, s.day = u(s.d, s.dd), s.month = u(s.M, s.MMM), s.year = u(s.yyyy, s.yy), s.orientation = i.process(s.ctoken("past future"), function(e) {
            return function() {
                this.orient = e
            }
        }), s.operator = i.process(s.ctoken("add subtract"), function(e) {
            return function() {
                this.operator = e
            }
        }), s.rday = i.process(s.ctoken("yesterday tomorrow today now"), o.rday), s.unit = i.process(s.ctoken("second minute hour day week month year"), function(e) {
            return function() {
                this.unit = e
            }
        }), s.value = i.process(i.rtoken(/^\d\d?(st|nd|rd|th)?/), function(e) {
            return function() {
                this.value = e.replace(/\D/g, "")
            }
        }), s.expression = i.set([s.rday, s.operator, s.value, s.unit, s.orientation, s.ddd, s.MMM]), u = function() {
            return i.set(arguments, s.datePartDelimiter)
        }, s.mdy = u(s.ddd, s.month, s.day, s.year), s.ymd = u(s.ddd, s.year, s.month, s.day), s.dmy = u(s.ddd, s.day, s.month, s.year), s.date = function(e) {
            return (s[n.dateElementOrder] || s.mdy).call(this, e)
        }, s.format = i.process(i.many(i.any(i.process(i.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/), function(t) {
            if (s[t]) return s[t];
            throw e.Parsing.Exception(t)
        }), i.process(i.rtoken(/^[^dMyhHmstz]+/), function(e) {
            return i.ignore(i.stoken(e))
        }))), function(e) {
            return i.process(i.each.apply(null, e), o.finishExact)
        });
        var f = {},
            l = function(e) {
                return f[e] = f[e] || s.format(e)[0]
            };
        s.formats = function(e) {
            if (e instanceof Array) {
                var t = [];
                for (var n = 0; n < e.length; n++) t.push(l(e[n]));
                return i.any.apply(null, t)
            }
            return l(e)
        }, s._formats = s.formats(['"yyyy-MM-ddTHH:mm:ssZ"', "yyyy-MM-ddTHH:mm:ssZ", "yyyy-MM-ddTHH:mm:ssz", "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-ddTHH:mmZ", "yyyy-MM-ddTHH:mmz", "yyyy-MM-ddTHH:mm", "ddd, MMM dd, yyyy H:mm:ss tt", "ddd MMM d yyyy HH:mm:ss zzz", "MMddyyyy", "ddMMyyyy", "Mddyyyy", "ddMyyyy", "Mdyyyy", "dMyyyy", "yyyy", "Mdyy", "dMyy", "d"]), s._start = i.process(i.set([s.date, s.time, s.expression], s.generalDelimiter, s.whiteSpace), o.finish), s.start = function(e) {
            try {
                var t = s._formats.call({}, e);
                if (t[1].length === 0) return t
            } catch (n) {}
            return s._start.call({}, e)
        }, e._parse = e.parse, e.parse = function(t) {
            var n = null;
            if (!t) return null;
            if (t instanceof Date) return t;
            try {
                n = e.Grammar.start.call({}, t.replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1"))
            } catch (r) {
                return null
            }
            return n[1].length === 0 ? n[0] : null
        }, e.getParseFunction = function(t) {
            var n = e.Grammar.formats(t);
            return function(e) {
                var t = null;
                try {
                    t = n.call({}, e)
                } catch (r) {
                    return null
                }
                return t[1].length === 0 ? t[0] : null
            }
        }, e.parseExact = function(t, n) {
            return e.getParseFunction(n)(t)
        }
    }(),
    function(t, n) {
        typeof exports == "object" && typeof module == "object" ? module.exports = n() : typeof define == "function" && define.amd ? define([], n) : typeof exports == "object" ? exports.Client = n() : (t.Minixperiment = t.Minixperiment || {}, t.Minixperiment.Client = n())
    }(this, function() {
        return function(e) {
            function n(r) {
                if (t[r]) return t[r].exports;
                var i = t[r] = {
                    exports: {},
                    id: r,
                    loaded: !1
                };
                return e[r].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
            }
            var t = {};
            return n.m = e, n.c = t, n.p = "", n(0)
        }([function(e, t, n) {
            function s(e) {
                var t = o(e);
                if (t !== null) throw t;
                this._config = u(e), this._Promise = e.Promise, this._deviceID = e.deviceID, this._platform = e.platform, this._username = e.login || null, this._defaults = a(e.Promise, e.defaults, e.overrides || {}), this._assignments = f(e.Promise, this._config, this._defaults, e.overrides || {}, this._deviceID)
            }

            function o(e) {
                return !e.defaults || Object.getPrototypeOf(e.defaults) !== Object.prototype ? new Error("Invalid defaults; expected object, got " + JSON.stringify(e.defaults)) : typeof e.deviceID != "string" || e.deviceID.length === 0 ? new Error("Invalid device ID; expected non-empty string, got `" + e.deviceID + "`") : typeof e.platform != "string" || e.platform.length === 0 ? new Error("Invalid platform; expected non-empty string, got `" + e.platform + "`") : typeof e.provider != "object" || typeof e.provider.getExperimentConfiguration != "function" ? new Error("Invalid provider") : typeof e.Promise != "function" ? new Error("Invalid Promise implementation") : null
            }

            function u(e) {
                return (new e.Promise(function(t, n) {
                    e.provider.getExperimentConfiguration(t, n)
                })).then(function(e) {
                    var t = r.validate(e);
                    if (t) throw t;
                    return e
                })
            }

            function a(e, t, n) {
                var r = {};
                for (var i in t) r[i] = function(r) {
                    return e.resolve(n[i]).then(function(e) {
                        return typeof e == "string" ? e : t[r]
                    }, function() {
                        return t[r]
                    })
                }(i);
                return r
            }

            function f(e, t, n, i, s) {
                var o = {};
                for (var u in n) {
                    if (!n.hasOwnProperty(u)) continue;
                    o[u] = function(o) {
                        return t.then(function(e) {
                            if (!e.hasOwnProperty(o)) throw new Error("Experiment `" + o + "` is deprecated");
                            return r.selectTreatment(o, e[o], s)
                        }, function(e) {
                            return n[o]
                        }).then(function(t) {
                            return e.resolve(i[o]).then(function(e) {
                                return typeof e == "string" ? e : t
                            }, function() {
                                return t
                            })
                        })
                    }(u)
                }
                return o
            }

            function l(e, t) {
                var n, r = {};
                for (n in e) e.hasOwnProperty(n) && (r[n] = e[n]);
                for (n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (r[n] = t[n]);
                return r
            }
            var r = n(1),
                i = n(4);
            e.exports = s, s.prototype.get = function(e, t) {
                var n = l(t || {}, {
                        mustTrack: !1
                    }),
                    r = this._assignments[e] || this._Promise.reject(new Error("No experiment with ID `" + e + "`")),
                    s = this._Promise.all([this._config, r]).then(function(t) {
                        var n = t[0],
                            r = t[1],
                            s = {
                                client_time: (new Date).getTime() / 1e3,
                                device_id: this._deviceID,
                                experiment_id: e,
                                experiment_name: n[e].name,
                                experiment_group: r,
                                platform: this._platform
                            };
                        this._username !== null && (s.login = this._username);
                        var o = (new this._Promise(function(e, t) {
                            i.sendEvent("experiment_branch", s, e)
                        })).then(null, function() {
                            return null
                        });
                        return o
                    }.bind(this));
                return this._Promise.all([r, n.mustTrack ? s : null]).then(function(e) {
                    return e[0]
                }, function(t) {
                    return console.warn(t), this._defaults[e] || null
                }.bind(this))
            }
        }, function(e, t, n) {
            function i(e, t, n) {
                this.name = "InvalidExperimentConfigurationError", this.message = 'Invalid configuration for experiment "' + e + '": ' + n, this.stack = (new Error).stack
            }

            function s(e, t) {
                if (!t.hasOwnProperty("groups")) return new i(e, t, "missing a `groups` property");
                if (t.groups.length === 0) return new i(e, t, "`groups` has no members");
                var n, r;
                for (n = 0; n < t.groups.length; n++) {
                    t.groups[n].hasOwnProperty("value") ? t.groups[n].hasOwnProperty("weight") ? t.groups[n].weight !== Math.floor(t.groups[n].weight) ? r = "has a non-integer weight" : t.groups[n].weight < 0 && (r = "has a negative weight") : r = "is missing a `weight` property" : r = "is missing a `value` property";
                    if (r) return new i(e, t, "Group " + t.groups[n].value + " " + r)
                }
                return null
            }
            var r = n(2);
            t.validate = function(e) {
                for (var t in e) {
                    if (!e.hasOwnProperty(t)) continue;
                    var n = s(t, e[t]);
                    if (n !== null) return n
                }
                return null
            }, t.selectTreatment = function(e, t, n) {
                var i = e + n,
                    s = r(i),
                    o = s.words[0] >>> 0,
                    u = o / Math.pow(2, 32),
                    a = t.groups.reduce(function(e, t) {
                        return e + t.weight
                    }, 0);
                return t.groups.reduce(function(e, t) {
                    return e.value === null && (e.current -= t.weight / a, e.current <= 0 && (e.value = t.value)), e
                }, {
                    value: null,
                    current: u
                }).value
            }
        }, function(e, t, n) {
            (function(r, i) {
                e.exports = t = i(n(3))
            })(this, function(e) {
                return function() {
                    var t = e,
                        n = t.lib,
                        r = n.WordArray,
                        i = n.Hasher,
                        s = t.algo,
                        o = [],
                        u = s.SHA1 = i.extend({
                            _doReset: function() {
                                this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                            },
                            _doProcessBlock: function(e, t) {
                                var n = this._hash.words,
                                    r = n[0],
                                    i = n[1],
                                    s = n[2],
                                    u = n[3],
                                    a = n[4];
                                for (var f = 0; f < 80; f++) {
                                    if (f < 16) o[f] = e[t + f] | 0;
                                    else {
                                        var l = o[f - 3] ^ o[f - 8] ^ o[f - 14] ^ o[f - 16];
                                        o[f] = l << 1 | l >>> 31
                                    }
                                    var c = (r << 5 | r >>> 27) + a + o[f];
                                    f < 20 ? c += (i & s | ~i & u) + 1518500249 : f < 40 ? c += (i ^ s ^ u) + 1859775393 : f < 60 ? c += (i & s | i & u | s & u) - 1894007588 : c += (i ^ s ^ u) - 899497514, a = u, u = s, s = i << 30 | i >>> 2, i = r, r = c
                                }
                                n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + s | 0, n[3] = n[3] + u | 0, n[4] = n[4] + a | 0
                            },
                            _doFinalize: function() {
                                var e = this._data,
                                    t = e.words,
                                    n = this._nDataBytes * 8,
                                    r = e.sigBytes * 8;
                                return t[r >>> 5] |= 128 << 24 - r % 32, t[(r + 64 >>> 9 << 4) + 14] = Math.floor(n / 4294967296), t[(r + 64 >>> 9 << 4) + 15] = n, e.sigBytes = t.length * 4, this._process(), this._hash
                            },
                            clone: function() {
                                var e = i.clone.call(this);
                                return e._hash = this._hash.clone(), e
                            }
                        });
                    t.SHA1 = i._createHelper(u), t.HmacSHA1 = i._createHmacHelper(u)
                }(), e.SHA1
            })
        }, function(e, t, n) {
            (function(n, r) {
                e.exports = t = r()
            })(this, function() {
                var e = e || function(e, t) {
                    var n = {},
                        r = n.lib = {},
                        i = r.Base = function() {
                            function e() {}
                            return {
                                extend: function(t) {
                                    e.prototype = this;
                                    var n = new e;
                                    return t && n.mixIn(t), n.hasOwnProperty("init") || (n.init = function() {
                                        n.$super.init.apply(this, arguments)
                                    }), n.init.prototype = n, n.$super = this, n
                                },
                                create: function() {
                                    var e = this.extend();
                                    return e.init.apply(e, arguments), e
                                },
                                init: function() {},
                                mixIn: function(e) {
                                    for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                                    e.hasOwnProperty("toString") && (this.toString = e.toString)
                                },
                                clone: function() {
                                    return this.init.prototype.extend(this)
                                }
                            }
                        }(),
                        s = r.WordArray = i.extend({
                            init: function(e, n) {
                                e = this.words = e || [], n != t ? this.sigBytes = n : this.sigBytes = e.length * 4
                            },
                            toString: function(e) {
                                return (e || u).stringify(this)
                            },
                            concat: function(e) {
                                var t = this.words,
                                    n = e.words,
                                    r = this.sigBytes,
                                    i = e.sigBytes;
                                this.clamp();
                                if (r % 4)
                                    for (var s = 0; s < i; s++) {
                                        var o = n[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                                        t[r + s >>> 2] |= o << 24 - (r + s) % 4 * 8
                                    } else
                                        for (var s = 0; s < i; s += 4) t[r + s >>> 2] = n[s >>> 2];
                                return this.sigBytes += i, this
                            },
                            clamp: function() {
                                var t = this.words,
                                    n = this.sigBytes;
                                t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4)
                            },
                            clone: function() {
                                var e = i.clone.call(this);
                                return e.words = this.words.slice(0), e
                            },
                            random: function(t) {
                                var n = [],
                                    r = function(t) {
                                        var t = t,
                                            n = 987654321,
                                            r = 4294967295;
                                        return function() {
                                            n = 36969 * (n & 65535) + (n >> 16) & r, t = 18e3 * (t & 65535) + (t >> 16) & r;
                                            var i = (n << 16) + t & r;
                                            return i /= 4294967296, i += .5, i * (e.random() > .5 ? 1 : -1)
                                        }
                                    };
                                for (var i = 0, o; i < t; i += 4) {
                                    var u = r((o || e.random()) * 4294967296);
                                    o = u() * 987654071, n.push(u() * 4294967296 | 0)
                                }
                                return new s.init(n, t)
                            }
                        }),
                        o = n.enc = {},
                        u = o.Hex = {
                            stringify: function(e) {
                                var t = e.words,
                                    n = e.sigBytes,
                                    r = [];
                                for (var i = 0; i < n; i++) {
                                    var s = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                    r.push((s >>> 4).toString(16)), r.push((s & 15).toString(16))
                                }
                                return r.join("")
                            },
                            parse: function(e) {
                                var t = e.length,
                                    n = [];
                                for (var r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
                                return new s.init(n, t / 2)
                            }
                        },
                        a = o.Latin1 = {
                            stringify: function(e) {
                                var t = e.words,
                                    n = e.sigBytes,
                                    r = [];
                                for (var i = 0; i < n; i++) {
                                    var s = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                    r.push(String.fromCharCode(s))
                                }
                                return r.join("")
                            },
                            parse: function(e) {
                                var t = e.length,
                                    n = [];
                                for (var r = 0; r < t; r++) n[r >>> 2] |= (e.charCodeAt(r) & 255) << 24 - r % 4 * 8;
                                return new s.init(n, t)
                            }
                        },
                        f = o.Utf8 = {
                            stringify: function(e) {
                                try {
                                    return decodeURIComponent(escape(a.stringify(e)))
                                } catch (t) {
                                    throw new Error("Malformed UTF-8 data")
                                }
                            },
                            parse: function(e) {
                                return a.parse(unescape(encodeURIComponent(e)))
                            }
                        },
                        l = r.BufferedBlockAlgorithm = i.extend({
                            reset: function() {
                                this._data = new s.init, this._nDataBytes = 0
                            },
                            _append: function(e) {
                                typeof e == "string" && (e = f.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                            },
                            _process: function(t) {
                                var n = this._data,
                                    r = n.words,
                                    i = n.sigBytes,
                                    o = this.blockSize,
                                    u = o * 4,
                                    a = i / u;
                                t ? a = e.ceil(a) : a = e.max((a | 0) - this._minBufferSize, 0);
                                var f = a * o,
                                    l = e.min(f * 4, i);
                                if (f) {
                                    for (var c = 0; c < f; c += o) this._doProcessBlock(r, c);
                                    var h = r.splice(0, f);
                                    n.sigBytes -= l
                                }
                                return new s.init(h, l)
                            },
                            clone: function() {
                                var e = i.clone.call(this);
                                return e._data = this._data.clone(), e
                            },
                            _minBufferSize: 0
                        }),
                        c = r.Hasher = l.extend({
                            cfg: i.extend(),
                            init: function(e) {
                                this.cfg = this.cfg.extend(e), this.reset()
                            },
                            reset: function() {
                                l.reset.call(this), this._doReset()
                            },
                            update: function(e) {
                                return this._append(e), this._process(), this
                            },
                            finalize: function(e) {
                                e && this._append(e);
                                var t = this._doFinalize();
                                return t
                            },
                            blockSize: 16,
                            _createHelper: function(e) {
                                return function(t, n) {
                                    return (new e.init(n)).finalize(t)
                                }
                            },
                            _createHmacHelper: function(e) {
                                return function(t, n) {
                                    return (new h.HMAC.init(e, n)).finalize(t)
                                }
                            }
                        }),
                        h = n.algo = {};
                    return n
                }(Math);
                return e
            })
        }, function(e, t, n) {
            var r = n(5),
                i = n(6),
                s = n(7);
            t.SPADE_URL = "//spade.twitch.tv/", t.sendEvent = function(e, n, o) {
                var u = {
                        event: e,
                        properties: n
                    },
                    a = r.stringify(i.parse(JSON.stringify(u)));
                s.fetch(t.SPADE_URL + "?data=" + encodeURIComponent(a), {}, o)
            }
        }, function(e, t, n) {
            (function(r, i) {
                e.exports = t = i(n(3))
            })(this, function(e) {
                return function() {
                    var t = e,
                        n = t.lib,
                        r = n.WordArray,
                        i = t.enc,
                        s = i.Base64 = {
                            stringify: function(e) {
                                var t = e.words,
                                    n = e.sigBytes,
                                    r = this._map;
                                e.clamp();
                                var i = [];
                                for (var s = 0; s < n; s += 3) {
                                    var o = t[s >>> 2] >>> 24 - s % 4 * 8 & 255,
                                        u = t[s + 1 >>> 2] >>> 24 - (s + 1) % 4 * 8 & 255,
                                        a = t[s + 2 >>> 2] >>> 24 - (s + 2) % 4 * 8 & 255,
                                        f = o << 16 | u << 8 | a;
                                    for (var l = 0; l < 4 && s + l * .75 < n; l++) i.push(r.charAt(f >>> 6 * (3 - l) & 63))
                                }
                                var c = r.charAt(64);
                                if (c)
                                    while (i.length % 4) i.push(c);
                                return i.join("")
                            },
                            parse: function(e) {
                                var t = e.length,
                                    n = this._map,
                                    i = n.charAt(64);
                                if (i) {
                                    var s = e.indexOf(i);
                                    s != -1 && (t = s)
                                }
                                var o = [],
                                    u = 0;
                                for (var a = 0; a < t; a++)
                                    if (a % 4) {
                                        var f = n.indexOf(e.charAt(a - 1)) << a % 4 * 2,
                                            l = n.indexOf(e.charAt(a)) >>> 6 - a % 4 * 2,
                                            c = f | l;
                                        o[u >>> 2] |= c << 24 - u % 4 * 8, u++
                                    }
                                return r.create(o, u)
                            },
                            _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                        }
                }(), e.enc.Base64
            })
        }, function(e, t, n) {
            (function(r, i) {
                e.exports = t = i(n(3))
            })(this, function(e) {
                return e.enc.Utf8
            })
        }, function(e, t) {
            function r(e, t) {
                var n = document.head || document.getElementsByTagName("head")[0];
                n || t(new Error("No head element to append script"));
                var r = document.createElement("script");
                r.onload = function() {
                    t(null), setTimeout(function() {
                        n.removeChild(r)
                    }, 0)
                }, r.onerror = function() {
                    t(new Error("Unable to load script"))
                }, n.appendChild(r), r.src = e
            }

            function i(e, t) {
                var r = new XMLHttpRequest;
                r.open("GET", e, !0), r.onreadystatechange = function() {
                    switch (r.readyState) {
                        case n:
                            200 <= r.status && r.status < 300 ? t(null, r.responseText) : t(new Error("XHR error: " + r.status + " " + e), null);
                            return
                    }
                }, r.send()
            }
            var n = 4;
            t.fetch = function(e, t, n) {
                t.injectScript ? r(e, n || function() {}) : i(e, n || function() {})
            }
        }])
    }),
    function(t, n) {
        typeof exports == "object" && typeof module == "object" ? module.exports = n() : typeof define == "function" && define.amd ? define([], n) : typeof exports == "object" ? exports.local = n() : (t.Minixperiment = t.Minixperiment || {}, t.Minixperiment.providers = t.Minixperiment.providers || {}, t.Minixperiment.providers.local = n())
    }(this, function() {
        return function(e) {
            function n(r) {
                if (t[r]) return t[r].exports;
                var i = t[r] = {
                    exports: {},
                    id: r,
                    loaded: !1
                };
                return e[r].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
            }
            var t = {};
            return n.m = e, n.c = t, n.p = "", n(0)
        }([function(e, t) {
            function n(e) {
                this._configuration = e
            }
            e.exports = n, n.prototype.getExperimentConfiguration = function(e, t) {
                e(this._configuration)
            }
        }])
    }),
    function(e) {
        e.fn.autocompleteHashtag = function() {
            function n(e, t) {
                var n = e.val(),
                    r = n.trim().split(/\s/).pop();
                e.val(n.replace(new RegExp(r + "$"), t) + " ")
            }

            function r(e) {
                e.empty().hide()
            }

            function i(t, i, s, o) {
                var u = s.filter(function(e) {
                    return e.indexOf(o) === 0 && e !== o
                });
                if (!u.length) return t.hide();
                var a = u.slice(0, 10).map(function(s) {
                    return e('<li class="balloon__link">' + s + "</li>").click(function() {
                        n(i, s), r(t)
                    })
                });
                t.html(a).show()
            }
            var t = {
                creative: (SiteOptions.creative_communities || "").split(",").map(function(e) {
                    return "#" + e
                })
            };
            return e(this).each(function() {
                var s = e(this),
                    o = e('<ul class="balloon balloon--down balloon--dropmenu full-width"></ul>').hide();
                s.after(o), s.keydown(function(u) {
                    var a = e(this).val(),
                        f = a.slice(-1),
                        l = a.trim().split(/\s/).pop(),
                        c = e("#gameselector_input").val().trim().toLowerCase(),
                        h = t[c] || [];
                    if (f.match(/\s/) || !l || !c || !h.length) r(o);
                    else if (u.which === 13 || u.which === 9) {
                        u.preventDefault();
                        var p = h.filter(function(e) {
                            return e.indexOf(l) === 0
                        });
                        p.length === 1 && (n(s, p[0]), r(o))
                    } else l[0] === "#" ? i(o, s, h, l) : r(o)
                })
            })
        }
    }(jQuery), ! function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
    }(this, function() {
        "use strict";

        function e() {
            return pi.apply(null, arguments)
        }

        function t(e) {
            pi = e
        }

        function n(e) {
            return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
        }

        function r(e) {
            return "[object Object]" === Object.prototype.toString.call(e)
        }

        function i(e) {
            var t;
            for (t in e) return !1;
            return !0
        }

        function s(e) {
            return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
        }

        function o(e, t) {
            var n, r = [];
            for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
            return r
        }

        function u(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        function a(e, t) {
            for (var n in t) u(t, n) && (e[n] = t[n]);
            return u(t, "toString") && (e.toString = t.toString), u(t, "valueOf") && (e.valueOf = t.valueOf), e
        }

        function f(e, t, n, r) {
            return gn(e, t, n, r, !0).utc()
        }

        function l() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                meridiem: null
            }
        }

        function c(e) {
            return null == e._pf && (e._pf = l()), e._pf
        }

        function h(e) {
            if (null == e._isValid) {
                var t = c(e),
                    n = di.call(t.parsedDateParts, function(e) {
                        return null != e
                    });
                e._isValid = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (e._isValid = e._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)
            }
            return e._isValid
        }

        function p(e) {
            var t = f(NaN);
            return null != e ? a(c(t), e) : c(t).userInvalidated = !0, t
        }

        function d(e) {
            return void 0 === e
        }

        function v(e, t) {
            var n, r, i;
            if (d(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), d(t._i) || (e._i = t._i), d(t._f) || (e._f = t._f), d(t._l) || (e._l = t._l), d(t._strict) || (e._strict = t._strict), d(t._tzm) || (e._tzm = t._tzm), d(t._isUTC) || (e._isUTC = t._isUTC), d(t._offset) || (e._offset = t._offset), d(t._pf) || (e._pf = c(t)), d(t._locale) || (e._locale = t._locale), vi.length > 0)
                for (n in vi) r = vi[n], i = t[r], d(i) || (e[r] = i);
            return e
        }

        function m(t) {
            v(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), mi === !1 && (mi = !0, e.updateOffset(this), mi = !1)
        }

        function g(e) {
            return e instanceof m || null != e && null != e._isAMomentObject
        }

        function y(e) {
            return 0 > e ? Math.ceil(e) || 0 : Math.floor(e)
        }

        function b(e) {
            var t = +e,
                n = 0;
            return 0 !== t && isFinite(t) && (n = y(t)), n
        }

        function w(e, t, n) {
            var r, i = Math.min(e.length, t.length),
                s = Math.abs(e.length - t.length),
                o = 0;
            for (r = 0; i > r; r++)(n && e[r] !== t[r] || !n && b(e[r]) !== b(t[r])) && o++;
            return o + s
        }

        function E(t) {
            e.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
        }

        function S(t, n) {
            var r = !0;
            return a(function() {
                return null != e.deprecationHandler && e.deprecationHandler(null, t), r && (E(t + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), r = !1), n.apply(this, arguments)
            }, n)
        }

        function x(t, n) {
            null != e.deprecationHandler && e.deprecationHandler(t, n), gi[t] || (E(n), gi[t] = !0)
        }

        function T(e) {
            return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
        }

        function N(e) {
            var t, n;
            for (n in e) t = e[n], T(t) ? this[n] = t : this["_" + n] = t;
            this._config = e, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
        }

        function C(e, t) {
            var n, i = a({}, e);
            for (n in t) u(t, n) && (r(e[n]) && r(t[n]) ? (i[n] = {}, a(i[n], e[n]), a(i[n], t[n])) : null != t[n] ? i[n] = t[n] : delete i[n]);
            for (n in e) u(e, n) && !u(t, n) && r(e[n]) && (i[n] = a({}, i[n]));
            return i
        }

        function k(e) {
            null != e && this.set(e)
        }

        function L(e, t, n) {
            var r = this._calendar[e] || this._calendar.sameElse;
            return T(r) ? r.call(t, n) : r
        }

        function A(e) {
            var t = this._longDateFormat[e],
                n = this._longDateFormat[e.toUpperCase()];
            return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
                return e.slice(1)
            }), this._longDateFormat[e])
        }

        function O() {
            return this._invalidDate
        }

        function M(e) {
            return this._ordinal.replace("%d", e)
        }

        function _(e, t, n, r) {
            var i = this._relativeTime[n];
            return T(i) ? i(e, t, n, r) : i.replace(/%d/i, e)
        }

        function D(e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return T(n) ? n(t) : n.replace(/%s/i, t)
        }

        function P(e, t) {
            var n = e.toLowerCase();
            Ci[n] = Ci[n + "s"] = Ci[t] = e
        }

        function H(e) {
            return "string" == typeof e ? Ci[e] || Ci[e.toLowerCase()] : void 0
        }

        function B(e) {
            var t, n, r = {};
            for (n in e) u(e, n) && (t = H(n), t && (r[t] = e[n]));
            return r
        }

        function j(e, t) {
            ki[e] = t
        }

        function F(e) {
            var t = [];
            for (var n in e) t.push({
                unit: n,
                priority: ki[n]
            });
            return t.sort(function(e, t) {
                return e.priority - t.priority
            }), t
        }

        function I(t, n) {
            return function(r) {
                return null != r ? (R(this, t, r), e.updateOffset(this, n), this) : q(this, t)
            }
        }

        function q(e, t) {
            return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
        }

        function R(e, t, n) {
            e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
        }

        function U(e) {
            return e = H(e), T(this[e]) ? this[e]() : this
        }

        function z(e, t) {
            if ("object" == typeof e) {
                e = B(e);
                for (var n = F(e), r = 0; r < n.length; r++) this[n[r].unit](e[n[r].unit])
            } else if (e = H(e), T(this[e])) return this[e](t);
            return this
        }

        function W(e, t, n) {
            var r = "" + Math.abs(e),
                i = t - r.length,
                s = e >= 0;
            return (s ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + r
        }

        function X(e, t, n, r) {
            var i = r;
            "string" == typeof r && (i = function() {
                return this[r]()
            }), e && (Mi[e] = i), t && (Mi[t[0]] = function() {
                return W(i.apply(this, arguments), t[1], t[2])
            }), n && (Mi[n] = function() {
                return this.localeData().ordinal(i.apply(this, arguments), e)
            })
        }

        function V(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
        }

        function $(e) {
            var t, n, r = e.match(Li);
            for (t = 0, n = r.length; n > t; t++) Mi[r[t]] ? r[t] = Mi[r[t]] : r[t] = V(r[t]);
            return function(t) {
                var i, s = "";
                for (i = 0; n > i; i++) s += r[i] instanceof Function ? r[i].call(t, e) : r[i];
                return s
            }
        }

        function J(e, t) {
            return e.isValid() ? (t = K(t, e.localeData()), Oi[t] = Oi[t] || $(t), Oi[t](e)) : e.localeData().invalidDate()
        }

        function K(e, t) {
            function n(e) {
                return t.longDateFormat(e) || e
            }
            var r = 5;
            for (Ai.lastIndex = 0; r >= 0 && Ai.test(e);) e = e.replace(Ai, n), Ai.lastIndex = 0, r -= 1;
            return e
        }

        function Q(e, t, n) {
            Ki[e] = T(t) ? t : function(e, r) {
                return e && n ? n : t
            }
        }

        function G(e, t) {
            return u(Ki, e) ? Ki[e](t._strict, t._locale) : new RegExp(Y(e))
        }

        function Y(e) {
            return Z(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, i) {
                return t || n || r || i
            }))
        }

        function Z(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function et(e, t) {
            var n, r = t;
            for ("string" == typeof e && (e = [e]), "number" == typeof t && (r = function(e, n) {
                    n[t] = b(e)
                }), n = 0; n < e.length; n++) Qi[e[n]] = r
        }

        function tt(e, t) {
            et(e, function(e, n, r, i) {
                r._w = r._w || {}, t(e, r._w, r, i)
            })
        }

        function nt(e, t, n) {
            null != t && u(Qi, e) && Qi[e](t, n._a, n, e)
        }

        function rt(e, t) {
            return (new Date(Date.UTC(e, t + 1, 0))).getUTCDate()
        }

        function it(e, t) {
            return n(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || os).test(t) ? "format" : "standalone"][e.month()]
        }

        function st(e, t) {
            return n(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[os.test(t) ? "format" : "standalone"][e.month()]
        }

        function ot(e, t, n) {
            var r, i, s, o = e.toLocaleLowerCase();
            if (!this._monthsParse)
                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; 12 > r; ++r) s = f([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(s, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(s, "").toLocaleLowerCase();
            return n ? "MMM" === t ? (i = bi.call(this._shortMonthsParse, o), -1 !== i ? i : null) : (i = bi.call(this._longMonthsParse, o), -1 !== i ? i : null) : "MMM" === t ? (i = bi.call(this._shortMonthsParse, o), -1 !== i ? i : (i = bi.call(this._longMonthsParse, o), -1 !== i ? i : null)) : (i = bi.call(this._longMonthsParse, o), -1 !== i ? i : (i = bi.call(this._shortMonthsParse, o), -1 !== i ? i : null))
        }

        function ut(e, t, n) {
            var r, i, s;
            if (this._monthsParseExact) return ot.call(this, e, t, n);
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; 12 > r; r++) {
                if (i = f([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (s = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[r] = new RegExp(s.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[r].test(e)) return r;
                if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
                if (!n && this._monthsParse[r].test(e)) return r
            }
        }

        function at(e, t) {
            var n;
            if (!e.isValid()) return e;
            if ("string" == typeof t)
                if (/^\d+$/.test(t)) t = b(t);
                else if (t = e.localeData().monthsParse(t), "number" != typeof t) return e;
            return n = Math.min(e.date(), rt(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
        }

        function ft(t) {
            return null != t ? (at(this, t), e.updateOffset(this, !0), this) : q(this, "Month")
        }

        function lt() {
            return rt(this.year(), this.month())
        }

        function ct(e) {
            return this._monthsParseExact ? (u(this, "_monthsRegex") || pt.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = fs), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
        }

        function ht(e) {
            return this._monthsParseExact ? (u(this, "_monthsRegex") || pt.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (u(this, "_monthsRegex") || (this._monthsRegex = ls), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
        }

        function pt() {
            function e(e, t) {
                return t.length - e.length
            }
            var t, n, r = [],
                i = [],
                s = [];
            for (t = 0; 12 > t; t++) n = f([2e3, t]), r.push(this.monthsShort(n, "")), i.push(this.months(n, "")), s.push(this.months(n, "")), s.push(this.monthsShort(n, ""));
            for (r.sort(e), i.sort(e), s.sort(e), t = 0; 12 > t; t++) r[t] = Z(r[t]), i[t] = Z(i[t]);
            for (t = 0; 24 > t; t++) s[t] = Z(s[t]);
            this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
        }

        function dt(e) {
            return vt(e) ? 366 : 365
        }

        function vt(e) {
            return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
        }

        function mt() {
            return vt(this.year())
        }

        function gt(e, t, n, r, i, s, o) {
            var u = new Date(e, t, n, r, i, s, o);
            return 100 > e && e >= 0 && isFinite(u.getFullYear()) && u.setFullYear(e), u
        }

        function yt(e) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return 100 > e && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
        }

        function bt(e, t, n) {
            var r = 7 + t - n,
                i = (7 + yt(e, 0, r).getUTCDay() - t) % 7;
            return -i + r - 1
        }

        function wt(e, t, n, r, i) {
            var s, o, u = (7 + n - r) % 7,
                a = bt(e, r, i),
                f = 1 + 7 * (t - 1) + u + a;
            return 0 >= f ? (s = e - 1, o = dt(s) + f) : f > dt(e) ? (s = e + 1, o = f - dt(e)) : (s = e, o = f), {
                year: s,
                dayOfYear: o
            }
        }

        function Et(e, t, n) {
            var r, i, s = bt(e.year(), t, n),
                o = Math.floor((e.dayOfYear() - s - 1) / 7) + 1;
            return 1 > o ? (i = e.year() - 1, r = o + St(i, t, n)) : o > St(e.year(), t, n) ? (r = o - St(e.year(), t, n), i = e.year() + 1) : (i = e.year(), r = o), {
                week: r,
                year: i
            }
        }

        function St(e, t, n) {
            var r = bt(e, t, n),
                i = bt(e + 1, t, n);
            return (dt(e) - r + i) / 7
        }

        function xt(e) {
            return Et(e, this._week.dow, this._week.doy).week
        }

        function Tt() {
            return this._week.dow
        }

        function Nt() {
            return this._week.doy
        }

        function Ct(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d")
        }

        function kt(e) {
            var t = Et(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d")
        }

        function Lt(e, t) {
            return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10)
        }

        function At(e, t) {
            return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
        }

        function Ot(e, t) {
            return n(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()]
        }

        function Mt(e) {
            return this._weekdaysShort[e.day()]
        }

        function _t(e) {
            return this._weekdaysMin[e.day()]
        }

        function Dt(e, t, n) {
            var r, i, s, o = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; 7 > r; ++r) s = f([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(s, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(s, "").toLocaleLowerCase();
            return n ? "dddd" === t ? (i = bi.call(this._weekdaysParse, o), -1 !== i ? i : null) : "ddd" === t ? (i = bi.call(this._shortWeekdaysParse, o), -1 !== i ? i : null) : (i = bi.call(this._minWeekdaysParse, o), -1 !== i ? i : null) : "dddd" === t ? (i = bi.call(this._weekdaysParse, o), -1 !== i ? i : (i = bi.call(this._shortWeekdaysParse, o), -1 !== i ? i : (i = bi.call(this._minWeekdaysParse, o), -1 !== i ? i : null))) : "ddd" === t ? (i = bi.call(this._shortWeekdaysParse, o), -1 !== i ? i : (i = bi.call(this._weekdaysParse, o), -1 !== i ? i : (i = bi.call(this._minWeekdaysParse, o), -1 !== i ? i : null))) : (i = bi.call(this._minWeekdaysParse, o), -1 !== i ? i : (i = bi.call(this._weekdaysParse, o), -1 !== i ? i : (i = bi.call(this._shortWeekdaysParse, o), -1 !== i ? i : null)))
        }

        function Pt(e, t, n) {
            var r, i, s;
            if (this._weekdaysParseExact) return Dt.call(this, e, t, n);
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; 7 > r; r++) {
                if (i = f([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(i, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[r] || (s = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[r] = new RegExp(s.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[r].test(e)) return r;
                if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e)) return r;
                if (n && "dd" === t && this._minWeekdaysParse[r].test(e)) return r;
                if (!n && this._weekdaysParse[r].test(e)) return r
            }
        }

        function Ht(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? (e = Lt(e, this.localeData()), this.add(e - t, "d")) : t
        }

        function Bt(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d")
        }

        function jt(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
                var t = At(e, this.localeData());
                return this.day(this.day() % 7 ? t : t - 7)
            }
            return this.day() || 7
        }

        function Ft(e) {
            return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Rt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (u(this, "_weekdaysRegex") || (this._weekdaysRegex = ms), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
        }

        function It(e) {
            return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Rt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (u(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = gs), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        }

        function qt(e) {
            return this._weekdaysParseExact ? (u(this, "_weekdaysRegex") || Rt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (u(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = ys), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        }

        function Rt() {
            function e(e, t) {
                return t.length - e.length
            }
            var t, n, r, i, s, o = [],
                u = [],
                a = [],
                l = [];
            for (t = 0; 7 > t; t++) n = f([2e3, 1]).day(t), r = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), s = this.weekdays(n, ""), o.push(r), u.push(i), a.push(s), l.push(r), l.push(i), l.push(s);
            for (o.sort(e), u.sort(e), a.sort(e), l.sort(e), t = 0; 7 > t; t++) u[t] = Z(u[t]), a[t] = Z(a[t]), l[t] = Z(l[t]);
            this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + o.join("|") + ")", "i")
        }

        function Ut() {
            return this.hours() % 12 || 12
        }

        function zt() {
            return this.hours() || 24
        }

        function Wt(e, t) {
            X(e, 0, 0, function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), t)
            })
        }

        function Xt(e, t) {
            return t._meridiemParse
        }

        function Vt(e) {
            return "p" === (e + "").toLowerCase().charAt(0)
        }

        function $t(e, t, n) {
            return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        }

        function Jt(e) {
            return e ? e.toLowerCase().replace("_", "-") : e
        }

        function Kt(e) {
            for (var t, n, r, i, s = 0; s < e.length;) {
                for (i = Jt(e[s]).split("-"), t = i.length, n = Jt(e[s + 1]), n = n ? n.split("-") : null; t > 0;) {
                    if (r = Qt(i.slice(0, t).join("-"))) return r;
                    if (n && n.length >= t && w(i, n, !0) >= t - 1) break;
                    t--
                }
                s++
            }
            return null
        }

        function Qt(e) {
            var t = null;
            if (!xs[e] && "undefined" != typeof module && module && module.exports) try {
                t = bs._abbr, require("./locale/" + e), Gt(t)
            } catch (n) {}
            return xs[e]
        }

        function Gt(e, t) {
            var n;
            return e && (n = d(t) ? en(e) : Yt(e, t), n && (bs = n)), bs._abbr
        }

        function Yt(e, t) {
            if (null !== t) {
                var n = Ss;
                return t.abbr = e, null != xs[e] ? (x("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = xs[e]._config) : null != t.parentLocale && (null != xs[t.parentLocale] ? n = xs[t.parentLocale]._config : x("parentLocaleUndefined", "specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")), xs[e] = new k(C(n, t)), Gt(e), xs[e]
            }
            return delete xs[e], null
        }

        function Zt(e, t) {
            if (null != t) {
                var n, r = Ss;
                null != xs[e] && (r = xs[e]._config), t = C(r, t), n = new k(t), n.parentLocale = xs[e], xs[e] = n, Gt(e)
            } else null != xs[e] && (null != xs[e].parentLocale ? xs[e] = xs[e].parentLocale : null != xs[e] && delete xs[e]);
            return xs[e]
        }

        function en(e) {
            var t;
            if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return bs;
            if (!n(e)) {
                if (t = Qt(e)) return t;
                e = [e]
            }
            return Kt(e)
        }

        function tn() {
            return yi(xs)
        }

        function nn(e) {
            var t, n = e._a;
            return n && -2 === c(e).overflow && (t = n[Yi] < 0 || n[Yi] > 11 ? Yi : n[Zi] < 1 || n[Zi] > rt(n[Gi], n[Yi]) ? Zi : n[es] < 0 || n[es] > 24 || 24 === n[es] && (0 !== n[ts] || 0 !== n[ns] || 0 !== n[rs]) ? es : n[ts] < 0 || n[ts] > 59 ? ts : n[ns] < 0 || n[ns] > 59 ? ns : n[rs] < 0 || n[rs] > 999 ? rs : -1, c(e)._overflowDayOfYear && (Gi > t || t > Zi) && (t = Zi), c(e)._overflowWeeks && -1 === t && (t = is), c(e)._overflowWeekday && -1 === t && (t = ss), c(e).overflow = t), e
        }

        function rn(e) {
            var t, n, r, i, s, o, u = e._i,
                a = Ts.exec(u) || Ns.exec(u);
            if (a) {
                for (c(e).iso = !0, t = 0, n = ks.length; n > t; t++)
                    if (ks[t][1].exec(a[1])) {
                        i = ks[t][0], r = ks[t][2] !== !1;
                        break
                    }
                if (null == i) return void(e._isValid = !1);
                if (a[3]) {
                    for (t = 0, n = Ls.length; n > t; t++)
                        if (Ls[t][1].exec(a[3])) {
                            s = (a[2] || " ") + Ls[t][0];
                            break
                        }
                    if (null == s) return void(e._isValid = !1)
                }
                if (!r && null != s) return void(e._isValid = !1);
                if (a[4]) {
                    if (!Cs.exec(a[4])) return void(e._isValid = !1);
                    o = "Z"
                }
                e._f = i + (s || "") + (o || ""), ln(e)
            } else e._isValid = !1
        }

        function sn(t) {
            var n = As.exec(t._i);
            return null !== n ? void(t._d = new Date(+n[1])) : (rn(t), void(t._isValid === !1 && (delete t._isValid, e.createFromInputFallback(t))))
        }

        function on(e, t, n) {
            return null != e ? e : null != t ? t : n
        }

        function un(t) {
            var n = new Date(e.now());
            return t._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
        }

        function an(e) {
            var t, n, r, i, s = [];
            if (!e._d) {
                for (r = un(e), e._w && null == e._a[Zi] && null == e._a[Yi] && fn(e), e._dayOfYear && (i = on(e._a[Gi], r[Gi]), e._dayOfYear > dt(i) && (c(e)._overflowDayOfYear = !0), n = yt(i, 0, e._dayOfYear), e._a[Yi] = n.getUTCMonth(), e._a[Zi] = n.getUTCDate()), t = 0; 3 > t && null == e._a[t]; ++t) e._a[t] = s[t] = r[t];
                for (; 7 > t; t++) e._a[t] = s[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                24 === e._a[es] && 0 === e._a[ts] && 0 === e._a[ns] && 0 === e._a[rs] && (e._nextDay = !0, e._a[es] = 0), e._d = (e._useUTC ? yt : gt).apply(null, s), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[es] = 24)
            }
        }

        function fn(e) {
            var t, n, r, i, s, o, u, a;
            t = e._w, null != t.GG || null != t.W || null != t.E ? (s = 1, o = 4, n = on(t.GG, e._a[Gi], Et(yn(), 1, 4).year), r = on(t.W, 1), i = on(t.E, 1), (1 > i || i > 7) && (a = !0)) : (s = e._locale._week.dow, o = e._locale._week.doy, n = on(t.gg, e._a[Gi], Et(yn(), s, o).year), r = on(t.w, 1), null != t.d ? (i = t.d, (0 > i || i > 6) && (a = !0)) : null != t.e ? (i = t.e + s, (t.e < 0 || t.e > 6) && (a = !0)) : i = s), 1 > r || r > St(n, s, o) ? c(e)._overflowWeeks = !0 : null != a ? c(e)._overflowWeekday = !0 : (u = wt(n, r, i, s, o), e._a[Gi] = u.year, e._dayOfYear = u.dayOfYear)
        }

        function ln(t) {
            if (t._f === e.ISO_8601) return void rn(t);
            t._a = [], c(t).empty = !0;
            var n, r, i, s, o, u = "" + t._i,
                a = u.length,
                f = 0;
            for (i = K(t._f, t._locale).match(Li) || [], n = 0; n < i.length; n++) s = i[n], r = (u.match(G(s, t)) || [])[0], r && (o = u.substr(0, u.indexOf(r)), o.length > 0 && c(t).unusedInput.push(o), u = u.slice(u.indexOf(r) + r.length), f += r.length), Mi[s] ? (r ? c(t).empty = !1 : c(t).unusedTokens.push(s), nt(s, r, t)) : t._strict && !r && c(t).unusedTokens.push(s);
            c(t).charsLeftOver = a - f, u.length > 0 && c(t).unusedInput.push(u), t._a[es] <= 12 && c(t).bigHour === !0 && t._a[es] > 0 && (c(t).bigHour = void 0), c(t).parsedDateParts = t._a.slice(0), c(t).meridiem = t._meridiem, t._a[es] = cn(t._locale, t._a[es], t._meridiem), an(t), nn(t)
        }

        function cn(e, t, n) {
            var r;
            return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (r = e.isPM(n), r && 12 > t && (t += 12), r || 12 !== t || (t = 0), t) : t
        }

        function hn(e) {
            var t, n, r, i, s;
            if (0 === e._f.length) return c(e).invalidFormat = !0, void(e._d = new Date(NaN));
            for (i = 0; i < e._f.length; i++) s = 0, t = v({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], ln(t), h(t) && (s += c(t).charsLeftOver, s += 10 * c(t).unusedTokens.length, c(t).score = s, (null == r || r > s) && (r = s, n = t));
            a(e, n || t)
        }

        function pn(e) {
            if (!e._d) {
                var t = B(e._i);
                e._a = o([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                    return e && parseInt(e, 10)
                }), an(e)
            }
        }

        function dn(e) {
            var t = new m(nn(vn(e)));
            return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
        }

        function vn(e) {
            var t = e._i,
                r = e._f;
            return e._locale = e._locale || en(e._l), null === t || void 0 === r && "" === t ? p({
                nullInput: !0
            }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), g(t) ? new m(nn(t)) : (n(r) ? hn(e) : s(t) ? e._d = t : r ? ln(e) : mn(e), h(e) || (e._d = null), e))
        }

        function mn(t) {
            var r = t._i;
            void 0 === r ? t._d = new Date(e.now()) : s(r) ? t._d = new Date(r.valueOf()) : "string" == typeof r ? sn(t) : n(r) ? (t._a = o(r.slice(0), function(e) {
                return parseInt(e, 10)
            }), an(t)) : "object" == typeof r ? pn(t) : "number" == typeof r ? t._d = new Date(r) : e.createFromInputFallback(t)
        }

        function gn(e, t, s, o, u) {
            var a = {};
            return "boolean" == typeof s && (o = s, s = void 0), (r(e) && i(e) || n(e) && 0 === e.length) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = u, a._l = s, a._i = e, a._f = t, a._strict = o, dn(a)
        }

        function yn(e, t, n, r) {
            return gn(e, t, n, r, !1)
        }

        function bn(e, t) {
            var r, i;
            if (1 === t.length && n(t[0]) && (t = t[0]), !t.length) return yn();
            for (r = t[0], i = 1; i < t.length; ++i)(!t[i].isValid() || t[i][e](r)) && (r = t[i]);
            return r
        }

        function wn() {
            var e = [].slice.call(arguments, 0);
            return bn("isBefore", e)
        }

        function En() {
            var e = [].slice.call(arguments, 0);
            return bn("isAfter", e)
        }

        function Sn(e) {
            var t = B(e),
                n = t.year || 0,
                r = t.quarter || 0,
                i = t.month || 0,
                s = t.week || 0,
                o = t.day || 0,
                u = t.hour || 0,
                a = t.minute || 0,
                f = t.second || 0,
                l = t.millisecond || 0;
            this._milliseconds = +l + 1e3 * f + 6e4 * a + 1e3 * u * 60 * 60, this._days = +o + 7 * s, this._months = +i + 3 * r + 12 * n, this._data = {}, this._locale = en(), this._bubble()
        }

        function xn(e) {
            return e instanceof Sn
        }

        function Tn(e, t) {
            X(e, 0, 0, function() {
                var e = this.utcOffset(),
                    n = "+";
                return 0 > e && (e = -e, n = "-"), n + W(~~(e / 60), 2) + t + W(~~e % 60, 2)
            })
        }

        function Nn(e, t) {
            var n = (t || "").match(e) || [],
                r = n[n.length - 1] || [],
                i = (r + "").match(Ds) || ["-", 0, 0],
                s = +(60 * i[1]) + b(i[2]);
            return "+" === i[0] ? s : -s
        }

        function Cn(t, n) {
            var r, i;
            return n._isUTC ? (r = n.clone(), i = (g(t) || s(t) ? t.valueOf() : yn(t).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + i), e.updateOffset(r, !1), r) : yn(t).local()
        }

        function kn(e) {
            return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
        }

        function Ln(t, n) {
            var r, i = this._offset || 0;
            return this.isValid() ? null != t ? ("string" == typeof t ? t = Nn(Vi, t) : Math.abs(t) < 16 && (t = 60 * t), !this._isUTC && n && (r = kn(this)), this._offset = t, this._isUTC = !0, null != r && this.add(r, "m"), i !== t && (!n || this._changeInProgress ? Xn(this, In(t - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? i : kn(this) : null != t ? this : NaN
        }

        function An(e, t) {
            return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
        }

        function On(e) {
            return this.utcOffset(0, e)
        }

        function Mn(e) {
            return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(kn(this), "m")), this
        }

        function _n() {
            return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Nn(Xi, this._i)), this
        }

        function Dn(e) {
            return this.isValid() ? (e = e ? yn(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1
        }

        function Pn() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }

        function Hn() {
            if (!d(this._isDSTShifted)) return this._isDSTShifted;
            var e = {};
            if (v(e, this), e = vn(e), e._a) {
                var t = e._isUTC ? f(e._a) : yn(e._a);
                this._isDSTShifted = this.isValid() && w(e._a, t.toArray()) > 0
            } else this._isDSTShifted = !1;
            return this._isDSTShifted
        }

        function Bn() {
            return this.isValid() ? !this._isUTC : !1
        }

        function jn() {
            return this.isValid() ? this._isUTC : !1
        }

        function Fn() {
            return this.isValid() ? this._isUTC && 0 === this._offset : !1
        }

        function In(e, t) {
            var n, r, i, s = e,
                o = null;
            return xn(e) ? s = {
                ms: e._milliseconds,
                d: e._days,
                M: e._months
            } : "number" == typeof e ? (s = {}, t ? s[t] = e : s.milliseconds = e) : (o = Ps.exec(e)) ? (n = "-" === o[1] ? -1 : 1, s = {
                y: 0,
                d: b(o[Zi]) * n,
                h: b(o[es]) * n,
                m: b(o[ts]) * n,
                s: b(o[ns]) * n,
                ms: b(o[rs]) * n
            }) : (o = Hs.exec(e)) ? (n = "-" === o[1] ? -1 : 1, s = {
                y: qn(o[2], n),
                M: qn(o[3], n),
                w: qn(o[4], n),
                d: qn(o[5], n),
                h: qn(o[6], n),
                m: qn(o[7], n),
                s: qn(o[8], n)
            }) : null == s ? s = {} : "object" == typeof s && ("from" in s || "to" in s) && (i = Un(yn(s.from), yn(s.to)), s = {}, s.ms = i.milliseconds, s.M = i.months), r = new Sn(s), xn(e) && u(e, "_locale") && (r._locale = e._locale), r
        }

        function qn(e, t) {
            var n = e && parseFloat(e.replace(",", "."));
            return (isNaN(n) ? 0 : n) * t
        }

        function Rn(e, t) {
            var n = {
                milliseconds: 0,
                months: 0
            };
            return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
        }

        function Un(e, t) {
            var n;
            return e.isValid() && t.isValid() ? (t = Cn(t, e), e.isBefore(t) ? n = Rn(e, t) : (n = Rn(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                milliseconds: 0,
                months: 0
            }
        }

        function zn(e) {
            return 0 > e ? -1 * Math.round(-1 * e) : Math.round(e)
        }

        function Wn(e, t) {
            return function(n, r) {
                var i, s;
                return null === r || isNaN(+r) || (x(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), s = n, n = r, r = s), n = "string" == typeof n ? +n : n, i = In(n, r), Xn(this, i, e), this
            }
        }

        function Xn(t, n, r, i) {
            var s = n._milliseconds,
                o = zn(n._days),
                u = zn(n._months);
            t.isValid() && (i = null == i ? !0 : i, s && t._d.setTime(t._d.valueOf() + s * r), o && R(t, "Date", q(t, "Date") + o * r), u && at(t, q(t, "Month") + u * r), i && e.updateOffset(t, o || u))
        }

        function Vn(e, t) {
            var n = e.diff(t, "days", !0);
            return -6 > n ? "sameElse" : -1 > n ? "lastWeek" : 0 > n ? "lastDay" : 1 > n ? "sameDay" : 2 > n ? "nextDay" : 7 > n ? "nextWeek" : "sameElse"
        }

        function $n(t, n) {
            var r = t || yn(),
                i = Cn(r, this).startOf("day"),
                s = e.calendarFormat(this, i) || "sameElse",
                o = n && (T(n[s]) ? n[s].call(this, r) : n[s]);
            return this.format(o || this.localeData().calendar(s, this, yn(r)))
        }

        function Jn() {
            return new m(this)
        }

        function Kn(e, t) {
            var n = g(e) ? e : yn(e);
            return this.isValid() && n.isValid() ? (t = H(d(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1
        }

        function Qn(e, t) {
            var n = g(e) ? e : yn(e);
            return this.isValid() && n.isValid() ? (t = H(d(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1
        }

        function Gn(e, t, n, r) {
            return r = r || "()", ("(" === r[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === r[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
        }

        function Yn(e, t) {
            var n, r = g(e) ? e : yn(e);
            return this.isValid() && r.isValid() ? (t = H(t || "millisecond"), "millisecond" === t ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1
        }

        function Zn(e, t) {
            return this.isSame(e, t) || this.isAfter(e, t)
        }

        function er(e, t) {
            return this.isSame(e, t) || this.isBefore(e, t)
        }

        function tr(e, t, n) {
            var r, i, s, o;
            return this.isValid() ? (r = Cn(e, this), r.isValid() ? (i = 6e4 * (r.utcOffset() - this.utcOffset()), t = H(t), "year" === t || "month" === t || "quarter" === t ? (o = nr(this, r), "quarter" === t ? o /= 3 : "year" === t && (o /= 12)) : (s = this - r, o = "second" === t ? s / 1e3 : "minute" === t ? s / 6e4 : "hour" === t ? s / 36e5 : "day" === t ? (s - i) / 864e5 : "week" === t ? (s - i) / 6048e5 : s), n ? o : y(o)) : NaN) : NaN
        }

        function nr(e, t) {
            var n, r, i = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                s = e.clone().add(i, "months");
            return 0 > t - s ? (n = e.clone().add(i - 1, "months"), r = (t - s) / (s - n)) : (n = e.clone().add(i + 1, "months"), r = (t - s) / (n - s)), -(i + r) || 0
        }

        function rr() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }

        function ir() {
            var e = this.clone().utc();
            return 0 < e.year() && e.year() <= 9999 ? T(Date.prototype.toISOString) ? this.toDate().toISOString() : J(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : J(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }

        function sr(t) {
            t || (t = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat);
            var n = J(this, t);
            return this.localeData().postformat(n)
        }

        function or(e, t) {
            return this.isValid() && (g(e) && e.isValid() || yn(e).isValid()) ? In({
                to: this,
                from: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }

        function ur(e) {
            return this.from(yn(), e)
        }

        function ar(e, t) {
            return this.isValid() && (g(e) && e.isValid() || yn(e).isValid()) ? In({
                from: this,
                to: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }

        function fr(e) {
            return this.to(yn(), e)
        }

        function lr(e) {
            var t;
            return void 0 === e ? this._locale._abbr : (t = en(e), null != t && (this._locale = t), this)
        }

        function cr() {
            return this._locale
        }

        function hr(e) {
            switch (e = H(e)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                case "date":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
        }

        function pr(e) {
            return e = H(e), void 0 === e || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
        }

        function dr() {
            return this._d.valueOf() - 6e4 * (this._offset || 0)
        }

        function vr() {
            return Math.floor(this.valueOf() / 1e3)
        }

        function mr() {
            return new Date(this.valueOf())
        }

        function gr() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
        }

        function yr() {
            var e = this;
            return {
                years: e.year(),
                months: e.month(),
                date: e.date(),
                hours: e.hours(),
                minutes: e.minutes(),
                seconds: e.seconds(),
                milliseconds: e.milliseconds()
            }
        }

        function br() {
            return this.isValid() ? this.toISOString() : null
        }

        function wr() {
            return h(this)
        }

        function Er() {
            return a({}, c(this))
        }

        function Sr() {
            return c(this).overflow
        }

        function xr() {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
            }
        }

        function Tr(e, t) {
            X(0, [e, e.length], 0, t)
        }

        function Nr(e) {
            return Ar.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }

        function Cr(e) {
            return Ar.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
        }

        function kr() {
            return St(this.year(), 1, 4)
        }

        function Lr() {
            var e = this.localeData()._week;
            return St(this.year(), e.dow, e.doy)
        }

        function Ar(e, t, n, r, i) {
            var s;
            return null == e ? Et(this, r, i).year : (s = St(e, r, i), t > s && (t = s), Or.call(this, e, t, n, r, i))
        }

        function Or(e, t, n, r, i) {
            var s = wt(e, t, n, r, i),
                o = yt(s.year, 0, s.dayOfYear);
            return this
                .year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
        }

        function Mr(e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
        }

        function _r(e) {
            var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add(e - t, "d")
        }

        function Dr(e, t) {
            t[rs] = b(1e3 * ("0." + e))
        }

        function Pr() {
            return this._isUTC ? "UTC" : ""
        }

        function Hr() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }

        function Br(e) {
            return yn(1e3 * e)
        }

        function jr() {
            return yn.apply(null, arguments).parseZone()
        }

        function Fr(e) {
            return e
        }

        function Ir(e, t, n, r) {
            var i = en(),
                s = f().set(r, t);
            return i[n](s, e)
        }

        function qr(e, t, n) {
            if ("number" == typeof e && (t = e, e = void 0), e = e || "", null != t) return Ir(e, t, n, "month");
            var r, i = [];
            for (r = 0; 12 > r; r++) i[r] = Ir(e, r, n, "month");
            return i
        }

        function Rr(e, t, n, r) {
            "boolean" == typeof e ? ("number" == typeof t && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, "number" == typeof t && (n = t, t = void 0), t = t || "");
            var i = en(),
                s = e ? i._week.dow : 0;
            if (null != n) return Ir(t, (n + s) % 7, r, "day");
            var o, u = [];
            for (o = 0; 7 > o; o++) u[o] = Ir(t, (o + s) % 7, r, "day");
            return u
        }

        function Ur(e, t) {
            return qr(e, t, "months")
        }

        function zr(e, t) {
            return qr(e, t, "monthsShort")
        }

        function Wr(e, t, n) {
            return Rr(e, t, n, "weekdays")
        }

        function Xr(e, t, n) {
            return Rr(e, t, n, "weekdaysShort")
        }

        function Vr(e, t, n) {
            return Rr(e, t, n, "weekdaysMin")
        }

        function $r() {
            var e = this._data;
            return this._milliseconds = $s(this._milliseconds), this._days = $s(this._days), this._months = $s(this._months), e.milliseconds = $s(e.milliseconds), e.seconds = $s(e.seconds), e.minutes = $s(e.minutes), e.hours = $s(e.hours), e.months = $s(e.months), e.years = $s(e.years), this
        }

        function Jr(e, t, n, r) {
            var i = In(t, n);
            return e._milliseconds += r * i._milliseconds, e._days += r * i._days, e._months += r * i._months, e._bubble()
        }

        function Kr(e, t) {
            return Jr(this, e, t, 1)
        }

        function Qr(e, t) {
            return Jr(this, e, t, -1)
        }

        function Gr(e) {
            return 0 > e ? Math.floor(e) : Math.ceil(e)
        }

        function Yr() {
            var e, t, n, r, i, s = this._milliseconds,
                o = this._days,
                u = this._months,
                a = this._data;
            return s >= 0 && o >= 0 && u >= 0 || 0 >= s && 0 >= o && 0 >= u || (s += 864e5 * Gr(ei(u) + o), o = 0, u = 0), a.milliseconds = s % 1e3, e = y(s / 1e3), a.seconds = e % 60, t = y(e / 60), a.minutes = t % 60, n = y(t / 60), a.hours = n % 24, o += y(n / 24), i = y(Zr(o)), u += i, o -= Gr(ei(i)), r = y(u / 12), u %= 12, a.days = o, a.months = u, a.years = r, this
        }

        function Zr(e) {
            return 4800 * e / 146097
        }

        function ei(e) {
            return 146097 * e / 4800
        }

        function ti(e) {
            var t, n, r = this._milliseconds;
            if (e = H(e), "month" === e || "year" === e) return t = this._days + r / 864e5, n = this._months + Zr(t), "month" === e ? n : n / 12;
            switch (t = this._days + Math.round(ei(this._months)), e) {
                case "week":
                    return t / 7 + r / 6048e5;
                case "day":
                    return t + r / 864e5;
                case "hour":
                    return 24 * t + r / 36e5;
                case "minute":
                    return 1440 * t + r / 6e4;
                case "second":
                    return 86400 * t + r / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * t) + r;
                default:
                    throw new Error("Unknown unit " + e)
            }
        }

        function ni() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * b(this._months / 12)
        }

        function ri(e) {
            return function() {
                return this.as(e)
            }
        }

        function ii(e) {
            return e = H(e), this[e + "s"]()
        }

        function si(e) {
            return function() {
                return this._data[e]
            }
        }

        function oi() {
            return y(this.days() / 7)
        }

        function ui(e, t, n, r, i) {
            return i.relativeTime(t || 1, !!n, e, r)
        }

        function ai(e, t, n) {
            var r = In(e).abs(),
                i = fo(r.as("s")),
                s = fo(r.as("m")),
                o = fo(r.as("h")),
                u = fo(r.as("d")),
                a = fo(r.as("M")),
                f = fo(r.as("y")),
                l = i < lo.s && ["s", i] || 1 >= s && ["m"] || s < lo.m && ["mm", s] || 1 >= o && ["h"] || o < lo.h && ["hh", o] || 1 >= u && ["d"] || u < lo.d && ["dd", u] || 1 >= a && ["M"] || a < lo.M && ["MM", a] || 1 >= f && ["y"] || ["yy", f];
            return l[2] = t, l[3] = +e > 0, l[4] = n, ui.apply(null, l)
        }

        function fi(e) {
            return void 0 === e ? fo : "function" == typeof e ? (fo = e, !0) : !1
        }

        function li(e, t) {
            return void 0 === lo[e] ? !1 : void 0 === t ? lo[e] : (lo[e] = t, !0)
        }

        function ci(e) {
            var t = this.localeData(),
                n = ai(this, !e, t);
            return e && (n = t.pastFuture(+this, n)), t.postformat(n)
        }

        function hi() {
            var e, t, n, r = co(this._milliseconds) / 1e3,
                i = co(this._days),
                s = co(this._months);
            e = y(r / 60), t = y(e / 60), r %= 60, e %= 60, n = y(s / 12), s %= 12;
            var o = n,
                u = s,
                a = i,
                f = t,
                l = e,
                c = r,
                h = this.asSeconds();
            return h ? (0 > h ? "-" : "") + "P" + (o ? o + "Y" : "") + (u ? u + "M" : "") + (a ? a + "D" : "") + (f || l || c ? "T" : "") + (f ? f + "H" : "") + (l ? l + "M" : "") + (c ? c + "S" : "") : "P0D"
        }
        var pi, di;
        di = Array.prototype.some ? Array.prototype.some : function(e) {
            for (var t = Object(this), n = t.length >>> 0, r = 0; n > r; r++)
                if (r in t && e.call(this, t[r], r, t)) return !0;
            return !1
        };
        var vi = e.momentProperties = [],
            mi = !1,
            gi = {};
        e.suppressDeprecationWarnings = !1, e.deprecationHandler = null;
        var yi;
        yi = Object.keys ? Object.keys : function(e) {
            var t, n = [];
            for (t in e) u(e, t) && n.push(t);
            return n
        };
        var bi, wi = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            Ei = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            Si = "Invalid date",
            xi = "%d",
            Ti = /\d{1,2}/,
            Ni = {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            Ci = {},
            ki = {},
            Li = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            Ai = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            Oi = {},
            Mi = {},
            _i = /\d/,
            Di = /\d\d/,
            Pi = /\d{3}/,
            Hi = /\d{4}/,
            Bi = /[+-]?\d{6}/,
            ji = /\d\d?/,
            Fi = /\d\d\d\d?/,
            Ii = /\d\d\d\d\d\d?/,
            qi = /\d{1,3}/,
            Ri = /\d{1,4}/,
            Ui = /[+-]?\d{1,6}/,
            zi = /\d+/,
            Wi = /[+-]?\d+/,
            Xi = /Z|[+-]\d\d:?\d\d/gi,
            Vi = /Z|[+-]\d\d(?::?\d\d)?/gi,
            $i = /[+-]?\d+(\.\d{1,3})?/,
            Ji = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            Ki = {},
            Qi = {},
            Gi = 0,
            Yi = 1,
            Zi = 2,
            es = 3,
            ts = 4,
            ns = 5,
            rs = 6,
            is = 7,
            ss = 8;
        bi = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
            var t;
            for (t = 0; t < this.length; ++t)
                if (this[t] === e) return t;
            return -1
        }, X("M", ["MM", 2], "Mo", function() {
            return this.month() + 1
        }), X("MMM", 0, 0, function(e) {
            return this.localeData().monthsShort(this, e)
        }), X("MMMM", 0, 0, function(e) {
            return this.localeData().months(this, e)
        }), P("month", "M"), j("month", 8), Q("M", ji), Q("MM", ji, Di), Q("MMM", function(e, t) {
            return t.monthsShortRegex(e)
        }), Q("MMMM", function(e, t) {
            return t.monthsRegex(e)
        }), et(["M", "MM"], function(e, t) {
            t[Yi] = b(e) - 1
        }), et(["MMM", "MMMM"], function(e, t, n, r) {
            var i = n._locale.monthsParse(e, r, n._strict);
            null != i ? t[Yi] = i : c(n).invalidMonth = e
        });
        var os = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
            us = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            as = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            fs = Ji,
            ls = Ji;
        X("Y", 0, 0, function() {
            var e = this.year();
            return 9999 >= e ? "" + e : "+" + e
        }), X(0, ["YY", 2], 0, function() {
            return this.year() % 100
        }), X(0, ["YYYY", 4], 0, "year"), X(0, ["YYYYY", 5], 0, "year"), X(0, ["YYYYYY", 6, !0], 0, "year"), P("year", "y"), j("year", 1), Q("Y", Wi), Q("YY", ji, Di), Q("YYYY", Ri, Hi), Q("YYYYY", Ui, Bi), Q("YYYYYY", Ui, Bi), et(["YYYYY", "YYYYYY"], Gi), et("YYYY", function(t, n) {
            n[Gi] = 2 === t.length ? e.parseTwoDigitYear(t) : b(t)
        }), et("YY", function(t, n) {
            n[Gi] = e.parseTwoDigitYear(t)
        }), et("Y", function(e, t) {
            t[Gi] = parseInt(e, 10)
        }), e.parseTwoDigitYear = function(e) {
            return b(e) + (b(e) > 68 ? 1900 : 2e3)
        };
        var cs = I("FullYear", !0);
        X("w", ["ww", 2], "wo", "week"), X("W", ["WW", 2], "Wo", "isoWeek"), P("week", "w"), P("isoWeek", "W"), j("week", 5), j("isoWeek", 5), Q("w", ji), Q("ww", ji, Di), Q("W", ji), Q("WW", ji, Di), tt(["w", "ww", "W", "WW"], function(e, t, n, r) {
            t[r.substr(0, 1)] = b(e)
        });
        var hs = {
            dow: 0,
            doy: 6
        };
        X("d", 0, "do", "day"), X("dd", 0, 0, function(e) {
            return this.localeData().weekdaysMin(this, e)
        }), X("ddd", 0, 0, function(e) {
            return this.localeData().weekdaysShort(this, e)
        }), X("dddd", 0, 0, function(e) {
            return this.localeData().weekdays(this, e)
        }), X("e", 0, 0, "weekday"), X("E", 0, 0, "isoWeekday"), P("day", "d"), P("weekday", "e"), P("isoWeekday", "E"), j("day", 11), j("weekday", 11), j("isoWeekday", 11), Q("d", ji), Q("e", ji), Q("E", ji), Q("dd", function(e, t) {
            return t.weekdaysMinRegex(e)
        }), Q("ddd", function(e, t) {
            return t.weekdaysShortRegex(e)
        }), Q("dddd", function(e, t) {
            return t.weekdaysRegex(e)
        }), tt(["dd", "ddd", "dddd"], function(e, t, n, r) {
            var i = n._locale.weekdaysParse(e, r, n._strict);
            null != i ? t.d = i : c(n).invalidWeekday = e
        }), tt(["d", "e", "E"], function(e, t, n, r) {
            t[r] = b(e)
        });
        var ps = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            ds = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            vs = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            ms = Ji,
            gs = Ji,
            ys = Ji;
        X("H", ["HH", 2], 0, "hour"), X("h", ["hh", 2], 0, Ut), X("k", ["kk", 2], 0, zt), X("hmm", 0, 0, function() {
            return "" + Ut.apply(this) + W(this.minutes(), 2)
        }), X("hmmss", 0, 0, function() {
            return "" + Ut.apply(this) + W(this.minutes(), 2) + W(this.seconds(), 2)
        }), X("Hmm", 0, 0, function() {
            return "" + this.hours() + W(this.minutes(), 2)
        }), X("Hmmss", 0, 0, function() {
            return "" + this.hours() + W(this.minutes(), 2) + W(this.seconds(), 2)
        }), Wt("a", !0), Wt("A", !1), P("hour", "h"), j("hour", 13), Q("a", Xt), Q("A", Xt), Q("H", ji), Q("h", ji), Q("HH", ji, Di), Q("hh", ji, Di), Q("hmm", Fi), Q("hmmss", Ii), Q("Hmm", Fi), Q("Hmmss", Ii), et(["H", "HH"], es), et(["a", "A"], function(e, t, n) {
            n._isPm = n._locale.isPM(e), n._meridiem = e
        }), et(["h", "hh"], function(e, t, n) {
            t[es] = b(e), c(n).bigHour = !0
        }), et("hmm", function(e, t, n) {
            var r = e.length - 2;
            t[es] = b(e.substr(0, r)), t[ts] = b(e.substr(r)), c(n).bigHour = !0
        }), et("hmmss", function(e, t, n) {
            var r = e.length - 4,
                i = e.length - 2;
            t[es] = b(e.substr(0, r)), t[ts] = b(e.substr(r, 2)), t[ns] = b(e.substr(i)), c(n).bigHour = !0
        }), et("Hmm", function(e, t, n) {
            var r = e.length - 2;
            t[es] = b(e.substr(0, r)), t[ts] = b(e.substr(r))
        }), et("Hmmss", function(e, t, n) {
            var r = e.length - 4,
                i = e.length - 2;
            t[es] = b(e.substr(0, r)), t[ts] = b(e.substr(r, 2)), t[ns] = b(e.substr(i))
        });
        var bs, ws = /[ap]\.?m?\.?/i,
            Es = I("Hours", !0),
            Ss = {
                calendar: wi,
                longDateFormat: Ei,
                invalidDate: Si,
                ordinal: xi,
                ordinalParse: Ti,
                relativeTime: Ni,
                months: us,
                monthsShort: as,
                week: hs,
                weekdays: ps,
                weekdaysMin: vs,
                weekdaysShort: ds,
                meridiemParse: ws
            },
            xs = {},
            Ts = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
            Ns = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
            Cs = /Z|[+-]\d\d(?::?\d\d)?/,
            ks = [
                ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                ["YYYY-DDD", /\d{4}-\d{3}/],
                ["YYYY-MM", /\d{4}-\d\d/, !1],
                ["YYYYYYMMDD", /[+-]\d{10}/],
                ["YYYYMMDD", /\d{8}/],
                ["GGGG[W]WWE", /\d{4}W\d{3}/],
                ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                ["YYYYDDD", /\d{7}/]
            ],
            Ls = [
                ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                ["HH:mm", /\d\d:\d\d/],
                ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                ["HHmmss", /\d\d\d\d\d\d/],
                ["HHmm", /\d\d\d\d/],
                ["HH", /\d\d/]
            ],
            As = /^\/?Date\((\-?\d+)/i;
        e.createFromInputFallback = S("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
        }), e.ISO_8601 = function() {};
        var Os = S("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var e = yn.apply(null, arguments);
                return this.isValid() && e.isValid() ? this > e ? this : e : p()
            }),
            Ms = S("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var e = yn.apply(null, arguments);
                return this.isValid() && e.isValid() ? e > this ? this : e : p()
            }),
            _s = function() {
                return Date.now ? Date.now() : +(new Date)
            };
        Tn("Z", ":"), Tn("ZZ", ""), Q("Z", Vi), Q("ZZ", Vi), et(["Z", "ZZ"], function(e, t, n) {
            n._useUTC = !0, n._tzm = Nn(Vi, e)
        });
        var Ds = /([\+\-]|\d\d)/gi;
        e.updateOffset = function() {};
        var Ps = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
            Hs = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
        In.fn = Sn.prototype;
        var Bs = Wn(1, "add"),
            js = Wn(-1, "subtract");
        e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var Fs = S("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
            return void 0 === e ? this.localeData() : this.locale(e)
        });
        X(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }), X(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        }), Tr("gggg", "weekYear"), Tr("ggggg", "weekYear"), Tr("GGGG", "isoWeekYear"), Tr("GGGGG", "isoWeekYear"), P("weekYear", "gg"), P("isoWeekYear", "GG"), j("weekYear", 1), j("isoWeekYear", 1), Q("G", Wi), Q("g", Wi), Q("GG", ji, Di), Q("gg", ji, Di), Q("GGGG", Ri, Hi), Q("gggg", Ri, Hi), Q("GGGGG", Ui, Bi), Q("ggggg", Ui, Bi), tt(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, r) {
            t[r.substr(0, 2)] = b(e)
        }), tt(["gg", "GG"], function(t, n, r, i) {
            n[i] = e.parseTwoDigitYear(t)
        }), X("Q", 0, "Qo", "quarter"), P("quarter", "Q"), j("quarter", 7), Q("Q", _i), et("Q", function(e, t) {
            t[Yi] = 3 * (b(e) - 1)
        }), X("D", ["DD", 2], "Do", "date"), P("date", "D"), j("date", 9), Q("D", ji), Q("DD", ji, Di), Q("Do", function(e, t) {
            return e ? t._ordinalParse : t._ordinalParseLenient
        }), et(["D", "DD"], Zi), et("Do", function(e, t) {
            t[Zi] = b(e.match(ji)[0], 10)
        });
        var Is = I("Date", !0);
        X("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), P("dayOfYear", "DDD"), j("dayOfYear", 4), Q("DDD", qi), Q("DDDD", Pi), et(["DDD", "DDDD"], function(e, t, n) {
            n._dayOfYear = b(e)
        }), X("m", ["mm", 2], 0, "minute"), P("minute", "m"), j("minute", 14), Q("m", ji), Q("mm", ji, Di), et(["m", "mm"], ts);
        var qs = I("Minutes", !1);
        X("s", ["ss", 2], 0, "second"), P("second", "s"), j("second", 15), Q("s", ji), Q("ss", ji, Di), et(["s", "ss"], ns);
        var Rs = I("Seconds", !1);
        X("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), X(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), X(0, ["SSS", 3], 0, "millisecond"), X(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
        }), X(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
        }), X(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
        }), X(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
        }), X(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
        }), X(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
        }), P("millisecond", "ms"), j("millisecond", 16), Q("S", qi, _i), Q("SS", qi, Di), Q("SSS", qi, Pi);
        var Us;
        for (Us = "SSSS"; Us.length <= 9; Us += "S") Q(Us, zi);
        for (Us = "S"; Us.length <= 9; Us += "S") et(Us, Dr);
        var zs = I("Milliseconds", !1);
        X("z", 0, 0, "zoneAbbr"), X("zz", 0, 0, "zoneName");
        var Ws = m.prototype;
        Ws.add = Bs, Ws.calendar = $n, Ws.clone = Jn, Ws.diff = tr, Ws.endOf = pr, Ws.format = sr, Ws.from = or, Ws.fromNow = ur, Ws.to = ar, Ws.toNow = fr, Ws.get = U, Ws.invalidAt = Sr, Ws.isAfter = Kn, Ws.isBefore = Qn, Ws.isBetween = Gn, Ws.isSame = Yn, Ws.isSameOrAfter = Zn, Ws.isSameOrBefore = er, Ws.isValid = wr, Ws.lang = Fs, Ws.locale = lr, Ws.localeData = cr, Ws.max = Ms, Ws.min = Os, Ws.parsingFlags = Er, Ws.set = z, Ws.startOf = hr, Ws.subtract = js, Ws.toArray = gr, Ws.toObject = yr, Ws.toDate = mr, Ws.toISOString = ir, Ws.toJSON = br, Ws.toString = rr, Ws.unix = vr, Ws.valueOf = dr, Ws.creationData = xr, Ws.year = cs, Ws.isLeapYear = mt, Ws.weekYear = Nr, Ws.isoWeekYear = Cr, Ws.quarter = Ws.quarters = Mr, Ws.month = ft, Ws.daysInMonth = lt, Ws.week = Ws.weeks = Ct, Ws.isoWeek = Ws.isoWeeks = kt, Ws.weeksInYear = Lr, Ws.isoWeeksInYear = kr, Ws.date = Is, Ws.day = Ws.days = Ht, Ws.weekday = Bt, Ws.isoWeekday = jt, Ws.dayOfYear = _r, Ws.hour = Ws.hours = Es, Ws.minute = Ws.minutes = qs, Ws.second = Ws.seconds = Rs, Ws.millisecond = Ws.milliseconds = zs, Ws.utcOffset = Ln, Ws.utc = On, Ws.local = Mn, Ws.parseZone = _n, Ws.hasAlignedHourOffset = Dn, Ws.isDST = Pn, Ws.isLocal = Bn, Ws.isUtcOffset = jn, Ws.isUtc = Fn, Ws.isUTC = Fn, Ws.zoneAbbr = Pr, Ws.zoneName = Hr, Ws.dates = S("dates accessor is deprecated. Use date instead.", Is), Ws.months = S("months accessor is deprecated. Use month instead", ft), Ws.years = S("years accessor is deprecated. Use year instead", cs), Ws.zone = S("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", An), Ws.isDSTShifted = S("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Hn);
        var Xs = Ws,
            Vs = k.prototype;
        Vs.calendar = L, Vs.longDateFormat = A, Vs.invalidDate = O, Vs.ordinal = M, Vs.preparse = Fr, Vs.postformat = Fr, Vs.relativeTime = _, Vs.pastFuture = D, Vs.set = N, Vs.months = it, Vs.monthsShort = st, Vs.monthsParse = ut, Vs.monthsRegex = ht, Vs.monthsShortRegex = ct, Vs.week = xt, Vs.firstDayOfYear = Nt, Vs.firstDayOfWeek = Tt, Vs.weekdays = Ot, Vs.weekdaysMin = _t, Vs.weekdaysShort = Mt, Vs.weekdaysParse = Pt, Vs.weekdaysRegex = Ft, Vs.weekdaysShortRegex = It, Vs.weekdaysMinRegex = qt, Vs.isPM = Vt, Vs.meridiem = $t, Gt("en", {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 === b(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            }
        }), e.lang = S("moment.lang is deprecated. Use moment.locale instead.", Gt), e.langData = S("moment.langData is deprecated. Use moment.localeData instead.", en);
        var $s = Math.abs,
            Js = ri("ms"),
            Ks = ri("s"),
            Qs = ri("m"),
            Gs = ri("h"),
            Ys = ri("d"),
            Zs = ri("w"),
            eo = ri("M"),
            to = ri("y"),
            no = si("milliseconds"),
            ro = si("seconds"),
            io = si("minutes"),
            so = si("hours"),
            oo = si("days"),
            uo = si("months"),
            ao = si("years"),
            fo = Math.round,
            lo = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            },
            co = Math.abs,
            ho = Sn.prototype;
        ho.abs = $r, ho.add = Kr, ho.subtract = Qr, ho.as = ti, ho.asMilliseconds = Js, ho.asSeconds = Ks, ho.asMinutes = Qs, ho.asHours = Gs, ho.asDays = Ys, ho.asWeeks = Zs, ho.asMonths = eo, ho.asYears = to, ho.valueOf = ni, ho._bubble = Yr, ho.get = ii, ho.milliseconds = no, ho.seconds = ro, ho.minutes = io, ho.hours = so, ho.days = oo, ho.weeks = oi, ho.months = uo, ho.years = ao, ho.humanize = ci, ho.toISOString = hi, ho.toString = hi, ho.toJSON = hi, ho.locale = lr, ho.localeData = cr, ho.toIsoString = S("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", hi), ho.lang = Fs, X("X", 0, 0, "unix"), X("x", 0, 0, "valueOf"), Q("x", Wi), Q("X", $i), et("X", function(e, t, n) {
            n._d = new Date(1e3 * parseFloat(e, 10))
        }), et("x", function(e, t, n) {
            n._d = new Date(b(e))
        }), e.version = "2.14.1", t(yn), e.fn = Xs, e.min = wn, e.max = En, e.now = _s, e.utc = f, e.unix = Br, e.months = Ur, e.isDate = s, e.locale = Gt, e.invalid = p, e.duration = In, e.isMoment = g, e.weekdays = Wr, e.parseZone = jr, e.localeData = en, e.isDuration = xn, e.monthsShort = zr, e.weekdaysMin = Vr, e.defineLocale = Yt, e.updateLocale = Zt, e.locales = tn, e.weekdaysShort = Xr, e.normalizeUnits = H, e.relativeTimeRounding = fi, e.relativeTimeThreshold = li, e.calendarFormat = Vn, e.prototype = Xs;
        var po = e;
        return po
    }), ! function(e, t) {
        "function" == typeof define && define.amd ? define(["moment"], function(n) {
            return e.DateRange = t(n)
        }) : "object" == typeof exports ? module.exports = t(require("moment")) : e.DateRange = t(moment)
    }(this, function(e) {
        function t(t, n) {
            var r, i = t,
                s = n;
            (1 === arguments.length || void 0 === n) && ("object" == typeof t && 2 === t.length ? (i = t[0], s = t[1]) : "string" == typeof t && (r = t.split("/"), i = r[0], s = r[1])), this.start = e(null === i ? -864e13 : i), this.end = e(null === s ? 864e13 : s)
        }

        function n(t, n, r) {
            for (var i = e(this.start); this.contains(i, r);) n.call(this, i.clone()), i.add(1, t)
        }

        function r(t, n, r) {
            var i = this / t,
                s = Math.floor(i);
            if (s !== 1 / 0) {
                s === i && r && s--;
                for (var o = 0; s >= o; o++) n.call(this, e(this.start.valueOf() + t.valueOf() * o))
            }
        }
        var i = {
            year: !0,
            month: !0,
            week: !0,
            day: !0,
            hour: !0,
            minute: !0,
            second: !0
        };
        return t.prototype.constructor = t, t.prototype.clone = function() {
            return e().range(this.start, this.end)
        }, t.prototype.contains = function(e, n) {
            var r = this.start,
                i = this.end;
            return e instanceof t ? r <= e.start && (i > e.end || i.isSame(e.end) && !n) : e >= r && (i > e || i.isSame(e) && !n)
        }, t.prototype.overlaps = function(e) {
            return null !== this.intersect(e)
        }, t.prototype.intersect = function(e) {
            var n = this.start,
                r = this.end;
            return n <= e.start && e.start < r && r < e.end ? new t(e.start, r) : e.start < n && n < e.end && e.end <= r ? new t(n, e.end) : e.start < n && r >= n && r < e.end ? this : n <= e.start && e.start <= e.end && e.end <= r ? e : null
        }, t.prototype.add = function(n) {
            return this.overlaps(n) ? new t(e.min(this.start, n.start), e.max(this.end, n.end)) : null
        }, t.prototype.subtract = function(e) {
            var n = this.start,
                r = this.end;
            return null === this.intersect(e) ? [this] : e.start <= n && r > n && r <= e.end ? [] : e.start <= n && n < e.end && e.end < r ? [new t(e.end, r)] : n < e.start && e.start < r && r <= e.end ? [new t(n, e.start)] : n < e.start && e.start < e.end && e.end < r ? [new t(n, e.start), new t(e.end, r)] : n < e.start && e.start < r && e.end < r ? [new t(n, e.start), new t(e.start, r)] : void 0
        }, t.prototype.by = function(e, t, i) {
            return "string" == typeof e ? n.call(this, e, t, i) : r.call(this, e, t, i), this
        }, t.prototype.toString = function() {
            return this.start.format() + "/" + this.end.format()
        }, t.prototype.valueOf = function() {
            return this.end - this.start
        }, t.prototype.center = function() {
            var t = this.start + this.diff() / 2;
            return e(t)
        }, t.prototype.toDate = function() {
            return [this.start.toDate(), this.end.toDate()]
        }, t.prototype.isSame = function(e) {
            return this.start.isSame(e.start) && this.end.isSame(e.end)
        }, t.prototype.diff = function(e) {
            return this.end.diff(this.start, e)
        }, e.range = function(n, r) {
            return n in i ? new t(e(this).startOf(n), e(this).endOf(n)) : new t(n, r)
        }, e.range.constructor = t, e.fn.range = e.range, e.fn.within = function(e) {
            return e.contains(this._d)
        }, t
    });
var BaseDomain = "justin.tv",
    escapeHtml = function(e, t) {
        return t ? e : e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\$/g, "&#36;")
    };
window._gaq = window._gaq || [],
    function(e) {
        e.fn.invisible = function() {
            var t = {
                show: 100,
                hide: 0
            };
            return function(n) {
                if (t.hasOwnProperty(n)) {
                    var r = t[n];
                    return this.each(function() {
                        e(this).css("zoom", "1").css("opacity", Math.floor(r / 100)).css("filter", "alpha(opacity=" + r + ")")
                    })
                }
                return this
            }
        }()
    }(jQuery);
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [],
    function() {
        var e = document.createElement("script");
        e.async = !0, e.type = "text/javascript";
        var t = "https:" === document.location.protocol;
        e.src = (t ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(e, n)
    }(),
    function(e) {
        googletag.cmd.push(function() {
            typeof PP != "undefined" && (PP.channel && googletag.pubads().setTargeting("channel", PP.channel), PP.channelMetaGame && googletag.pubads().setTargeting("game", PP.channelMetaGame), URI().query(!0).campaign && googletag.pubads().setTargeting("campaign", URI().query(!0).campaign), googletag.pubads().setTargeting("server", Twitch.deployFlavor)), googletag.pubads().collapseEmptyDivs(!0);
            if (window.SitePageType === "front_page" || window.SitePageType === "channel") googletag.pubads().enableSingleRequest(), googletag.pubads().disableInitialLoad()
        })
    }(jQuery), window.onbeforeunload = "Twitch.player.getPlayer().pauseVideo();", window.onunload = "Twitch.player.getPlayer().pauseVideo();",
    function(e) {
        window.NotificationsTracker = {
            startTracking: function() {
                var e = URI().filename();
                if (e === "embed" || e === "chat") return;
                var t = {},
                    n, r = "Notifications:Dismissed",
                    i = {
                        layout: "bottomCenter",
                        timeout: !1,
                        escape: !1,
                        animation: {
                            open: {
                                height: "toggle"
                            },
                            close: {
                                height: "toggle"
                            },
                            easing: "swing",
                            speed: 150
                        }
                    },
                    s = _.defaults({
                        timeout: 5e3,
                        escape: !1
                    }, i),
                    o = function(e) {
                        var t = Twitch.storage.getObject(r) || [];
                        t.push(e), Twitch.storage.setObject(r, t)
                    },
                    u = function(e) {
                        var t = Twitch.storage.getObject(r) || [];
                        return _.contains(t, e)
                    },
                    a = function(e, n, r) {
                        u(e) || (t[e] = Twitch.notify[n](r, i, function() {
                            o(e)
                        }))
                    },
                    f = _.after(2, function(e) {
                        if (e)
                            if (n) n.setText('You have <a href="/messages/inbox">new messages</a>!');
                            else {
                                var t = 'You have a <a href="' + Twitch.uri.message(e) + '">new message</a>!';
                                n = Twitch.notify.alert(t, s, function() {
                                    n = null
                                })
                            }
                    }),
                    l = function(e) {
                        Twitch.api.get("/api/notifications").then(function(t) {
                            _.each(e, function(e) {
                                _.each(t[e], function(e, t) {
                                    a(t, e.type, e.message)
                                })
                            })
                        })
                    },
                    c = ["everyone"];
                Twitch.user.isLoggedIn() ? Twitch.user(function(e) {
                    e.is_partner && c.push("partners");
                    if (e.is_broadcaster && e.last_broadcast_time) {
                        var t = 2628e6,
                            n = (new Date).getTime() - (new Date(e.last_broadcast_time)).getTime();
                        n < t && c.push("recent_broadcasters")
                    }
                    l(c)
                }, function() {
                    l(c)
                }) : l(c)
            }
        }
    }(jQuery),
    function(e) {
        e(function() {
            var t = e("body"),
                n, r, i;
            t.bind("login.overlay.show", function(s, o) {
                if (n && o.id === r) {
                    n.show(), i.show();
                    return
                }
                t.overlay(o.url, function(t, s) {
                    n = t, i = s, r = t.attr("id"), e("#subwindow_close").click(function(t) {
                        t.preventDefault(), e(this).trigger("overlay.hide")
                    }), e("#signup_form .birthday_fields select").dropdownify(), t.find('input[name="follow"]').val(o.follow), t.find('input[name="mp_source_action"]').val(o.mpSourceAction), ich.grabTemplates()
                }, o)
            }), e("#signup_form .birthday_fields select").dropdownify()
        }), window.addEventListener("message", function(t) {
            var n;
            t.data && t.data[0] === "{" ? n = JSON.parse(t.data) : n = t.data;
            switch (n.messageType) {
                case "loaded":
                    var r = e("iframe[name=passport]")[0],
                        i = {
                            width: e("#passport_iframe_container").width()
                        };
                    r.contentWindow.postMessage(JSON.stringify(i), "*");
                    return;
                case "height":
                    e("#passport_iframe_container").css({
                        height: n.height + 10
                    }), e("#passport_modal").css({
                        visibility: "visible"
                    }), r = e('iframe[name="passport"]').contents()[0], n.focus && e(r).find("#username").focus();
                    return
            }
        });
        var t = function(e, t) {
            var n = {};
            window.SitePageType && (n.source = window.SitePageType), t && (n.source_action = t), Twitch.tracking.spadeAndMixpanel.trackEvent(e, n)
        };
        e.showAuthenticationOverlay = function(n, r) {
            var i = n + "_subwindow",
                s = "/user/" + n + "_popup",
                o = n + "-click",
                u = n === "login" ? "#login_user_login" : "#user_login",
                a;
            r = r || {}, r.params && (s += "?" + e.param(r.params)), a = {
                url: s,
                width: "420px",
                id: i,
                focusOnLoad: u,
                destroyOnHide: !1,
                follow: r.follow,
                mpSourceAction: r.mpSourceAction,
                formType: n
            }, e("body").trigger("login.overlay.show", [a]), t(o, r.mpSourceAction)
        }, e.signup = function(t) {
            SiteOptions.maintenance_mode ? e.showAuthenticationOverlay("maintenance", t) : e.showAuthenticationOverlay("signup", t)
        }, e.login = function(t) {
            SiteOptions.maintenance_mode ? e.showAuthenticationOverlay("maintenance", t) : e.showAuthenticationOverlay("login", t)
        }, e.fn.login = function(t) {
            return t = e.extend({}, t, {
                events: "click"
            }), this.each(function() {
                e(this).bind(t.events, function(n) {
                    n.preventDefault(), e.login(t)
                })
            })
        }, e.fn.signup = function(t) {
            return t = e.extend({}, t, {
                events: "click"
            }), this.each(function() {
                e(this).bind(t.events, function(n) {
                    n.preventDefault(), e.signup(t)
                })
            })
        }
    }(jQuery),
    function(e, t) {
        e.fn.overlay = function(t, n, r) {
            return r = e.extend({
                closeOnEsc: !0,
                closeOnExteriorClick: !0,
                width: "420px",
                useIframe: !1,
                destroyOnHide: !0
            }, r), this.each(function() {
                if (!t) throw "Please provide a contentURL";
                var i = e(this);
                if (i.css("position") === "absolute") throw "Parent of an overlay cannot be positioned absolute";
                var s = function(t) {
                    var s = r.isIframe ? "<iframe></iframe>" : "<div></div>",
                        o = e(s).addClass("twitch_subwindow");
                    typeof t == "object" ? t.appendTo(o) : o.html(t), r.id && o.attr("id", r.id), o.css("width", r.width);
                    var u = e("<div></div>").addClass("twitch_subwindow_container");
                    i.prepend(u).show(), u.prepend(o).show(), i.scrollTop(0), r.focusOnLoad && e(r.focusOnLoad).focus(), r.closeOnEsc && i.on("keyup.overlay", function(e) {
                        e.keyCode === 27 && i.trigger("overlay.hide")
                    }), r.closeOnExteriorClick && e("body.overlay").on("click.overlay", function(t) {
                        e(t.target).hasClass("twitch_subwindow_container") && i.trigger("overlay.hide")
                    }), i.on("overlay.hide", function(e) {
                        e.stopPropagation(), r.destroyOnHide ? (o.remove(), u.remove()) : (o.hide(), u.hide())
                    }), typeof n == "function" && n(o, u)
                };
                typeof t == "string" ? e.get(t).success(s) : s(t)
            })
        }, e.fn.teardownOverlay = function() {
            return this.each(function() {
                var t = e(this);
                t.off("keyup.overlay"), e("body.overlay").off("click.overlay"), t.off("overlay.hide")
            })
        }
    }(jQuery),
    function(e) {
        window.initializeLegacyColumns = function(t) {
            e(".left-col-dropdown").click(function() {
                if (e(this).hasClass("collapsed")) {
                    var t = e(".nav_section .extra-menu")[0].scrollHeight;
                    e(".nav_section .extra-menu").animate({
                        height: t
                    }, 80), e(this).removeClass("collapsed")
                } else e(".nav_section .extra-menu").animate({
                    height: 0
                }, 80), e(this).addClass("collapsed")
            }), e("#footer .show-more-toggle").click(function() {
                e(this).hasClass("more") ? (e(".extra-footer-link").show(), e(this).removeClass("more")) : (e(".extra-footer-link").hide(), e(this).addClass("more"))
            }), t = t || {};
            var n = function() {
                    e("#left_col").outerWidth() > e("#small_nav .content:first").outerWidth() ? (Twitch.storage.set("leftColClosed", "true"), r()) : (Twitch.storage.set("leftColClosed", "false"), i())
                },
                r = function() {
                    if (e("#large_nav").is(":visible") && !e("#left_col").hasClass("no-close")) {
                        var t = e("#small_nav .content").outerWidth();
                        e("#small_nav").show(), e("#large_nav").hide(), e("#left_col").css({
                            width: t + "px"
                        }), e("#main_col").css({
                            "margin-left": t + "px"
                        }), e("#left_close span").css({
                            "background-position": "0 -18px"
                        }), e("#left_close").addClass("closed"), e("#left_col").addClass("closed"), e(window).trigger("fluid-resize")
                    }
                },
                i = function() {
                    if (e("#small_nav").is(":visible")) {
                        var t = e("#large_nav .content").outerWidth();
                        e("#small_nav").hide(), e("#large_nav").show(), e("#left_col").css({
                            width: t + "px"
                        }), e("#main_col").css({
                            "margin-left": t + "px"
                        }), e("#left_close span").css({
                            "background-position": "0 0"
                        }), e("#left_close").removeClass("closed"), e("#header_search_small").hide(), e("#left_col").removeClass("closed"), e(window).trigger("fluid-resize")
                    }
                };
            t.leftAlwaysCollapsed && (n = r, i = r, e("#main_col").css({
                "margin-left": e("#small_nav .content").outerWidth() + "px"
            }));
            var s = function() {
                    e("#right_col").outerWidth() > 0 ? (Twitch.storage.set("rightColClosed", "true"), o()) : (Twitch.storage.set("rightColClosed", "false"), u())
                },
                o = function() {
                    e("#right_col").is(":visible") && !e("#right_col").hasClass("no-close") && (e("#right_col").hide(), e(".advertisement").hide(), e("#main_col").addClass("expandRight"), e("#right_col").css({
                        width: "0px"
                    }), e("#right_close").addClass("closed"), e(window).trigger("fluid-resize"))
                },
                u = function() {
                    if (e("#right_col").is(":hidden")) {
                        var t = e("#right_col .content:first").outerWidth();
                        e("#right_col").show(), e(".advertisement").show(), e("#main_col").removeClass("expandRight"), e("#right_col").css({
                            width: t + "px"
                        }), e("#right_close").removeClass("closed"), e(window).trigger("fluid-resize")
                    }
                },
                a = function() {
                    var e = this.getAttribute("data-placeholder");
                    e && this.src !== e && (this.src = e)
                };
            e(window).on("fluid-resize", function() {
                e("#right_col")[0] ? e(window).width() < 800 ? (Twitch.storage.get("leftColClosed") !== "false" && r(), Twitch.storage.get("rightColClosed") !== "false" && o()) : e(window).width() < 1200 ? (Twitch.storage.get("leftColClosed") !== "false" && r(), Twitch.storage.get("rightColClosed") !== "true" && u()) : (Twitch.storage.get("leftColClosed") !== "true" && i(), Twitch.storage.get("rightColClosed") !== "true" && u()) : e(window).width() < 800 ? Twitch.storage.get("leftColClosed") !== "false" && r() : Twitch.storage.get("leftColClosed") !== "true" && i();
                var t = Math.min(e(".player_column").width() * 9 / 16 + 32, e(".channel-main").height() - e(".editable").outerHeight(!0) - e("#stats_and_actions").outerHeight() + 1);
                e(".live_site_player_container, .archive_site_player_container").css("height", t.toFixed(0) + "px")
            }), e(window).resize(_.debounce(function() {
                e(window).trigger("fluid-resize")
            }, 10)), e("#small_search a").click(function() {
                return i(), e("#sidebar_search input").focus(), !1
            }), e("#small_more a").flyout("small_more", {
                anchor: "mid"
            }), e("#small_account a").flyout("small_account", {
                anchor: "bot",
                data: {
                    user: Twitch.user.login()
                }
            }), e("#left_close").click(function(e) {
                e.preventDefault(), n()
            }), e("#right_close").click(function(e) {
                e.preventDefault(), s()
            }), e(".stretch").each(function() {
                var t = 0 + e(this).siblings(".top:first").outerHeight(),
                    n = 0 + e(this).siblings(".bottom:first").outerHeight();
                e(this).css({
                    top: t + "px",
                    bottom: n + "px",
                    visibility: "visible"
                })
            }), Twitch.storage.get("leftColClosed") === "true" && r(), Twitch.storage.get("rightColClosed") === "true" && o(), e("body").on("rightClose", o).on("rightOpen", u).on("rightToggle", s).on("leftClose", r).on("leftOpen", i).on("leftToggle", n), e(".js-columns-scroll, .js-nav-scroll").TrackpadScrollEmulator({
                wrapContent: !1,
                scrollbarHideStrategy: "rightAndBottom"
            }), e(window).trigger("fluid-resize")
        }
    }(jQuery),
    function(e) {
        e.fn.popoutWindow = function(t, n, r) {
            return r = r || {}, r.beforeFilter || (r.beforeFilter = function() {
                return !0
            }), r.closeCallback || (r.closeCallback = function() {
                window.location.reload()
            }), r.successCallback || (r.successCallback = function() {
                window.location.reload()
            }), r.errorCallback || (r.errorCallback = function() {}), this.each(function() {
                e(this).on("click", r.selector, function(i) {
                    var s = e(this);
                    i.preventDefault();
                    if (!r.beforeFilter() || s.data("popout_debounce")) return;
                    s.data("popout_interval") && clearInterval(s.data("popout_interval"));
                    var o;
                    _.isFunction(t) ? o = t() : o = t, window[n] = window.open(o, n, r.popoutOpts), s.data("popout_debounce", !0), setTimeout(function() {
                        s.data("popout_debounce", !1)
                    }, 2e3), s.data("popout_interval", setInterval(function() {
                        window[n] && window[n].closed && (clearInterval(s.data("popout_interval")), r.closeCallback()), window[n] && window[n].success && (clearInterval(s.data("popout_interval")), r.successCallback()), window[n] && window[n].error && (clearInterval(s.data("popout_interval")), r.errorCallback())
                    }, 500))
                })
            })
        }
    }(jQuery),
    function(e) {
        function t(t, n) {
            n = e.extend({
                side: "left",
                above: !1,
                parent: !1
            }, n), t.hide(), t.css({
                position: "absolute",
                top: 0,
                left: 0
            }), t.find(".close").click(function(e) {
                e.preventDefault(), t.is(":visible") && t.hide()
            });
            var r = e("body");
            return r.keyup(function(e) {
                e.keyCode === 27 && t.is(":visible") && t.hide()
            }), this.each(function() {
                var r = e(this),
                    i = function() {
                        if (n.parent) var e = r.position();
                        else var e = r.offset();
                        if (n.above) var i = e.top - t.outerHeight() - 5;
                        else var i = e.top + r.outerHeight() + 5;
                        var s = e.left + r.outerWidth();
                        if (n.side === "left") var o = s - t.outerWidth();
                        else var o = e.left;
                        t.css("top", i), t.css("left", o)
                    };
                e(window).bind("resize", i);
                var s = function(e) {
                    t.is(":visible") || (i(), t.show(), t.css("outline", "none"))
                };
                r.bind("click display", function(r) {
                    r.preventDefault(), r.stopPropagation();
                    if (t.is(":visible")) {
                        t.hide();
                        return
                    }
                    if (t._contentFn) {
                        var i = t._contentFn;
                        i(t, s, r), t._contentFn = !1
                    } else s(r);
                    n.focusOnLoad && e(n.focusOnLoad).focus(), n.openFn && n.openFn()
                })
            })
        }
        var n = {
            close_on_outside_click: function(n, r) {
                var i = e(this);
                t.call(i, n, r), n.bind("clickoutside", function(e) {
                    n.is(":visible") && n.hide()
                })
            },
            click_to_close: function(n, r) {
                var i = e(this);
                t.call(i, n, r)
            },
            close_on_click: function(n, r) {
                var i = e(this);
                t.call(i, n, r), n.click(function() {
                    n.hide()
                })
            }
        };
        e.fn.popup = function(t, r, i) {
            typeof t != "string" && (i = r, r = t, t = "close_on_outside_click");
            if (typeof r == "function") {
                var s = e("body"),
                    o = r;
                r = e('<div style="display:none">'), r.appendTo(s), r._contentFn = o
            }
            var u;
            if (u = n[t]) return this.each(function() {
                u.call(this, r, i)
            });
            throw "No method with name: " + t
        }
    }(jQuery),
    function(e) {
        e.fn.tabify = function(t) {
            var n = [];
            return this.each(function() {
                var r = e(this),
                    i = e("#" + r.attr("target")),
                    s = r.hasClass("selected"),
                    o = {
                        ul: r,
                        target: i
                    };
                n.push([r, i, s]), r.click(function(i) {
                    r.is("input") || i.preventDefault();
                    var s = e(this).closest(".tab, .subtab");
                    e.each(n, function(e, t) {
                        s[0] === t[0][0] ? (t[2] = !0, n[e] = t, t[0].hasClass("selected") || (t[0].addClass("selected"), t[1].show())) : (t[2] = !1, n[e] = t, t[0].removeClass("selected"), t[1].hide())
                    }), t && t(o)
                }), s && t && t(o)
            })
        }
    }(jQuery),
    function(e) {
        var t = function(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            },
            n = function(n) {
                var r = e(n),
                    i = r.val();
                return i ? r.find("option").filter(function() {
                    return i === e(this).attr("value")
                }).first().text() : r.data("dropdownify-label") || t(r.data("dropdownify-type"))
            },
            r = function(e) {
                return e || "&nbsp;"
            };
        e.extend(e.fn, {
            dropdownify: function() {
                e(this).each(function() {
                    var t = e(this).parent();
                    if (!e(this).is("select") || !e(this).data("dropdownify-type") || t.hasClass("dropdown")) return;
                    var i = e('<div class="dropdown ' + e(this).data("dropdownify-type") + '_contain"><span>' + r(n(this)) + "</span></div>").append(this).on("change", function() {
                        var t = e("select", this).get(0),
                            n = r(e(t.options[t.selectedIndex]).text());
                        e("span:first-child", this).html(n)
                    }).on("focus", "select", function() {
                        e(this).parent().addClass("active_dropdown")
                    }).on("blur", "select", function() {
                        e(this).parent().removeClass("active_dropdown")
                    });
                    t.append(i)
                })
            }
        })
    }(window.jQuery),
    function(e) {
        e.fn.gameselector = function(t, n) {
            return n = e.extend({
                loadAsDisabled: window.PP && !window.PP.channelMetaGame
            }, n), this.each(function() {
                var t = e(this),
                    r = t.val(),
                    i = function(e) {
                        t.val(e)
                    };
                t.data("games", {});
                var s = !1,
                    o = t.autocomplete({
                        minLength: 3,
                        delay: 0,
                        source: "/discovery/search",
                        focus: function(e, t) {
                            return i(t.item.name), !1
                        },
                        select: function(e, t) {
                            return i(t.item.name), n.actionFn && n.actionFn(t.item.name), !1
                        },
                        search: function(e, t) {
                            s = !0
                        },
                        messages: {
                            noResults: "",
                            results: function() {}
                        }
                    }),
                    u = {
                        isValidGame: function() {
                            return !s || !!t.data("games")[t.val()] || t.val() === ""
                        }
                    };
                o.data("gameselector", u), o.data("ui-autocomplete")._renderItem = function(e, n) {
                    var r = t.data("games");
                    return r[n.name] = !0, t.data("games", r), n.images = Twitch.defaults(n.images, {
                        tiny: "https://www-cdn.jtvnw.net/images/xarth/gamefilter_all.png"
                    }), ich["gameselector-game"](n).data("item.autocomplete", n).appendTo(e)
                }, o.data("ui-autocomplete")._cancelSearch = function() {
                    this.xhr && this.xhr.abort()
                }, t.bind("gameselector.reset", function() {
                    i(r)
                }), t.bind("gameselector.prevent", function() {
                    t.data("ui-autocomplete")._cancelSearch()
                }), t.bind("gameselector.enable", function() {
                    t.removeClass("disabled"), t.attr("disabled", !1), i(r)
                }), t.bind("gameselector.disable", function() {
                    t.addClass("disabled"), t.attr("disabled", !0), i("")
                }), n.loadAsDisabled && t.trigger("gameselector.disable")
            })
        }
    }(jQuery),
    function(e) {
        e(function() {
            e(".js-set-switch").on("click", function(t) {
                t.preventDefault();
                var n = e(this),
                    r = n.data("set-id"),
                    i, s;
                r === undefined ? (i = "DELETE", s = "/settings/turbo/emote_group/" + n.data("group-name")) : (i = "PUT", s = "/settings/turbo/emote_set/" + r), e.ajax({
                    url: s,
                    type: "POST",
                    headers: {
                        "Client-ID": Twitch.api.config.clientID,
                        "X-Http-Method-Override": i,
                        "X-CSRF-Token": e('meta[name="csrf-token"]').attr("content")
                    }
                }).done(function() {
                    e(".js-set-display").hide(), r === undefined ? e(".js-set-display.default").show() : e(".js-set-display[data-set-id=" + r + "]").show(), e(".js-set-switch").removeClass("selected"), n.addClass("selected")
                })
            })
        })
    }(jQuery),
    function(e) {
        var t = "http://taps.io/ZMdg?referrer=alert_upsell";
        window.mobileNotification = function() {
            var e = [{
                userAgentMatchingPattern: /iPhone|iPod|iPad/i,
                message: i18n("Get the iOS app to watch Twitch anywhere."),
                onconfirm: function() {
                    document.location.href = t
                }
            }, {
                userAgentMatchingPattern: /Android|Dalvik|GINGERBREAD/,
                message: i18n("Get the Android app to watch Twitch anywhere."),
                onconfirm: function() {
                    document.location.href = t
                }
            }];
            e.forEach(function(e) {
                navigator.userAgent.match(e.userAgentMatchingPattern) && !navigator.userAgent.match(/IEMobile|Windows Phone/) && !Twitch.storage.get("mobile_pushover", {
                    storage: "sessionStorage"
                }) && (Twitch.storage.set("mobile_pushover", "true", {
                    storage: "sessionStorage"
                }), confirm(e.message) && e.onconfirm())
            })
        }
    }(jQuery),
    function(e) {
        window.onPopoutClose = function(e, t) {
            var n = setInterval(function() {
                e && (e.closed || e.success) && (t(!!e.success), e.close(), clearInterval(n))
            }, 500)
        }
    }(jQuery), window.Twitch = window.Twitch || {},
    function(e, t) {
        "use strict";
        e.deployFlavor = SiteOptions.deploy_flavor;
        var n = ["log", "debug", "info", "warn", "error"],
            r = function(e) {
                e = e || {}, this.enabled = !!e.enabled, this.console = e.console;
                if (!this.console) {
                    console.error("Logger argument missing: console");
                    return
                }
                this.consoleFns = {};
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    this.consoleFns[r] = this.console[r] || function() {}, this.console[r] = this[r].bind(this)
                }
            };
        r.prototype.enable = function() {
            this.enabled = !0
        }, r.prototype.disable = function() {
            this.enabled = !1
        }, r.prototype.restoreConsole = function() {
            if (!this.console) return;
            for (var e = 0; e < n.length; e++) {
                var t = n[e];
                this.console[t] = this.consoleFns[t]
            }
        };
        var i = function(e) {
            r.prototype[e] = function() {
                if (this.enabled || e === "log") {
                    var t = Array.prototype.slice.call(arguments, 0);
                    this.consoleFns[e].apply && this.consoleFns[e].apply(this.console, t)
                }
            }
        };
        for (var s = 0; s < n.length; s++) {
            var o = n[s];
            i(o)
        }
        cookie.defaults = {
            path: "/"
        }, e.deployFlavor === "production" && (cookie.defaults.domain = ".twitch.tv"), window.console || (window.console = {}), e.logging = new r({
            enabled: e.deployFlavor !== "production",
            console: window.console
        }), e.mixin = function(t) {
            var n = Array.prototype.slice.call(arguments),
                r;
            for (var i = 0, s = n.length; i < s; i++) {
                r = n[i];
                for (var o in r) r.hasOwnProperty(o) && (e[o] = r[o])
            }
            return e
        }, e.defaults = function(e) {
            var t = Array.prototype.slice.call(arguments, 1),
                n;
            for (var r = 0, i = t.length; r < i; r++) {
                n = t[r];
                for (var s in n) n.hasOwnProperty(s) && e[s] == null && (e[s] = n[s])
            }
            return e
        }
    }(Twitch),
    function(e, t) {
        "use strict";
        var n = {
            _buildMemoryStorage: function() {
                return {
                    _storage: {},
                    setItem: function(e, t) {
                        this._storage[e] = t
                    },
                    getItem: function(e) {
                        return this._storage[e]
                    },
                    removeItem: function(e) {
                        delete this._storage[e]
                    }
                }
            },
            _localStorage: null,
            getLocalStorage: function() {
                if (this._localStorage === null) try {
                    var e = new Date;
                    (this._localStorage = window.localStorage).setItem(e, e);
                    var t = this._localStorage.getItem(e) != e;
                    this._localStorage.removeItem(e), t && (this._localStorage = this._buildMemoryStorage())
                } catch (n) {
                    this._localStorage = this._buildMemoryStorage()
                }
                return this._localStorage
            },
            _sessionStorage: null,
            getSessionStorage: function() {
                if (this._sessionStorage === null) try {
                    var e = new Date;
                    (this._sessionStorage = window.sessionStorage).setItem(e, e);
                    var t = this._sessionStorage.getItem(e) != e;
                    this._sessionStorage.removeItem(e), t && (this._sessionStorage = this._buildMemoryStorage())
                } catch (n) {
                    this._sessionStorage = this._buildMemoryStorage()
                }
                return this._sessionStorage
            },
            _storageForOptions: function(e) {
                return e && e.storage === "sessionStorage" ? this.getSessionStorage() : this.getLocalStorage()
            },
            setObject: function(e, t, n) {
                this.set(e, JSON.stringify(t), n)
            },
            getObject: function(e, t) {
                var n = this.get(e, t),
                    r = null;
                if (n && n !== "") try {
                    r = JSON.parse(n)
                } catch (i) {}
                return r
            },
            set: function(e, t, n) {
                this._storageForOptions(n).setItem(e, t)
            },
            get: function(e, t) {
                return this._storageForOptions(t).getItem(e)
            },
            del: function(e, t) {
                this._storageForOptions(t).removeItem(e)
            }
        };
        n.legacy = {}, n.legacy.set = function(e, t, n, r, i) {
            var s = "";
            r || (r = "/");
            if (n) {
                var o = new Date;
                o.setTime(o.getTime() + n * 1e3), s = "; expires=" + o.toGMTString()
            }
            var u = e + "=" + t + s + "; path=" + r;
            i == null ? document.cookie = u + "; domain=." + window.BaseDomain : i === "" && (document.cookie = u)
        }, n.legacy.get = function(e) {
            var t = e + "=",
                n = document.cookie.split(";");
            for (var r = 0; r < n.length; r++) {
                var i = n[r];
                while (i.charAt(0) === " ") i = i.substring(1, i.length);
                if (i.indexOf(t) === 0) return i.substring(t.length, i.length)
            }
            return null
        }, n.legacy.del = function(e, t) {
            t == null ? (n.legacy.set(e, "", -1), n.legacy.set(e, "", -1, null, "")) : n.legacy.set(e, "", -1, null, t)
        }, e.mixin({
            storage: n
        })
    }(window.Twitch, window.jQuery),
    function(e, t) {
        function o() {
            var e = window.navigator.userAgent,
                t = e.indexOf("MSIE ");
            if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10) < 10
        }
        var n = {},
            r = "jzkbprff40iqj646a697cyrvl0zt2m6";
        RSVP.EventTarget.mixin(n);
        var i = [];
        n.isIframeReady = !1;
        var s = 2;
        n.init = function(e) {
            var n = this,
                i = function(e) {
                    n.config.iframe = t("<iframe>").attr("src", n.config.receiverUrl).appendTo(e).get(0)
                };
            this.config = {
                clientID: r,
                baseUrl: e.baseUrl,
                baseUrlSecure: e.baseUrlSecure,
                streamsBaseUrl: e.streamsBaseUrl,
                streamsBaseUrlSecure: e.streamsBaseUrlSecure,
                receiverUrl: e.receiverUrl,
                login: e.login
            }, navigator.userAgent.indexOf("Prerender") === -1 ? i("head") : t(document).ready(function() {
                i("body")
            }), document.domain = "twitch.tv"
        }, n._ajax = function(u, a, f, l) {
            var c = new t.Deferred,
                h, p;
            l = t.extend({}, l), l.headers = l.headers || {}, l.headers["Client-ID"] = l.headers["Client-ID"] || r, l.headers["X-CSRF-Token"] = l.headers["X-CSRF-Token"] || e.storage.get("csrf_token"), f || (f = {}), f.on_site = "1", o() && u !== "GET" && u !== "POST" ? (l.type = "POST", l.headers["X-Http-Method-Override"] = u) : l.type = u;
            var d = l.version || l.v || s;
            l.headers.Accept = "application/vnd.twitchtv.v" + d + "+json", l.headers.Authorization ? (l.secure = !0, l.allow_cookie = !1, delete f.on_site) : (h = e.storage.legacy.get("api_token"), h && (l.headers["Twitch-Api-Token"] = h), l.allow_cookie = !0), /^(\/kraken\/)?streams(?!\/summary\/*$|\/recommended\/*$|\/recommended\/available\/*$|\/featured\/*$|\/communities\/)/.test(a) && (l.use_streams_api = !0, l.allow_cookie = !1), l.success && c.done(l.success), l.error && c.fail(l.error), p = t.extend({}, l, {
                url: this._constructUrl(a, l),
                dataType: "json",
                cache: !0,
                global: !1,
                data: f,
                xhr: this._createXHR.bind(this),
                xhrFields: {
                    withCredentials: l.secure
                },
                success: function() {
                    var e = arguments;
                    setTimeout(function() {
                        c.resolve.apply(c, e)
                    })
                },
                error: function() {
                    var e = arguments;
                    setTimeout(function() {
                        c.reject.apply(c, e)
                    })
                }
            });
            if (l.use_streams_api || l.secure && window.location.protocol.slice(0, 5) !== "https")
                if (this._canCORS()) p.xhrFields.withCredentials = l.allow_cookie;
                else {
                    p.dataType = "jsonp", p.headers && p.headers["Client-ID"] && (p.data.client_id = p.headers["Client-ID"], delete p.headers["Client-ID"]);
                    if (p.headers && p.headers.Authorization) {
                        var v = /^OAuth:?\s+(\w+)$/.exec(p.headers.Authorization);
                        v && (p.data.oauth_token = v[1], delete p.headers.Authorization)
                    }
                }
            else p.beforeSend = this._beforeSend;
            return c.fail(function(e, t, r) {
                n.trigger("fail", {
                    url: p.url,
                    jqXHR: e,
                    textStatus: t,
                    errorThrown: r
                })
            }), n.isIframeReady ? t.ajax(p) : i.push(p), c.promise()
        }, n.get = function(e, t, r) {
            return n._ajax("GET", e, t, r)
        }, n.post = function(e, t, r) {
            return n._ajax("POST", e, t, r)
        }, n.put = function(e, t, r) {
            return n._ajax("PUT", e, t, r)
        }, n.del = function(e, t, r) {
            return n._ajax("DELETE", e, t, r)
        }, n._canCORS = _.once(function() {
            return "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest
        }), n._constructUrl = function(e, t) {
            this.config.login && (e = e.replace(/:login([^\w])/, this.config.login + "$1")), e[0] !== "/" && (e = "/kraken/" + e);
            var n = t.use_streams_api ? "streamsBaseUrl" : "baseUrl";
            return t.secure && (n += "Secure"), this.config[n] + e
        }, n._createXHR = function() {
            return new this.config.iframe.contentWindow.XMLHttpRequest
        }, n._beforeSend = function(e, t) {
            t.crossDomain = !1
        }, n.iframeReady = function() {
            n.isIframeReady = !0, this.trigger("ready"), i.forEach(function(e) {
                t.ajax(e)
            })
        }, e.mixin({
            api: n
        })
    }(Twitch, jQuery),
    function(e, t) {
        function s() {
            if (n) return n;
            var t = 14;
            return n = (new RSVP.Promise(function(t, n) {
                if (!cookie.get("api_token")) {
                    n({
                        status: 401
                    });
                    return
                }
                var r = function() {
                    e.api.get("/api/me").done(function(e) {
                        t(e)
                    }).fail(function(e) {
                        n({
                            status: e.status
                        })
                    })
                };
                e.api.isIframeReady ? r() : e.api.on("ready", r)
            })).then(function(e) {
                return cookie.set("login", e.login, {
                    expires: t
                }).set("name", encodeURI(e.name), {
                    expires: t
                }), r = !0, i = e, e
            }, function(e) {
                throw e.status === 401 && (r = !1, cookie.remove("login"), cookie.remove("name")), e
            }), n
        }
        var n = null,
            r = null,
            i = null,
            o = function(e, t) {
                return s().then(e, t)
            };
        o.login = function() {
            return cookie.get("api_token") ? cookie.get("login") : null
        }, o.displayName = function() {
            return cookie.get("api_token") ? decodeURI(cookie.get("name")) : null
        }, o.isLoggedIn = function() {
            return cookie.get("api_token") ? !!cookie.get("login") : !1
        }, o.peek = function() {
            return {
                isAuthenticated: r,
                userData: i
            }
        }, o.reset = function() {
            n = undefined, r = null, i = null
        };
        var u = "Deprecation warning: Use Twitch.user() instead";
        o.userId = function() {
            return console.debug(u), PP.user_id
        }, e.mixin({
            user: o
        })
    }(Twitch, jQuery),
    function(e, t) {
        var n = {
                channel: "/:1",
                team: "/team/:1",
                profile: "/:1/profile",
                vod: "/:1/v/:2",
                game: "/directory/game/:1",
                gameVideos: "/directory/game/:1/videos/week",
                message: "/message/show/:1",
                compose: "/message/compose?to=:1",
                productDoNotRenew: "/products/:1/ticket/edit",
                productCancel: "/products/:1/ticket/edit?cancel=true",
                productCancelAndRefund: "/products/:1/ticket/edit?cancel=true&refund=true",
                profileBanner: "/api/channels/:1/profile_banner",
                gameBoxArtJpg: "https://static-cdn.jtvnw.net/ttv-boxart/:1-138x190.jpg",
                jtvChannel: "http://www.justin.tv/:1",
                dashboards: "/:1/dashboard/:2",
                manager: "/:1/manager",
                highlightVod: "/:1/manager/:2/highlight",
                subscribe: "/:1/subscribe?ref=:2",
                csGoSkillImg: "https://steamcdn-a.akamaihd.net/apps/csgo/images/skillgroups/skillgroup:1.png"
            },
            r = function(e, t) {
                t.forEach(function(t, n) {
                    e = e.replace(":" + (n + 1), encodeURIComponent(t), "g")
                });
                if (e.match(/:\d/)) throw new Error("Not enough arguments provided to construct this uri");
                return e
            },
            i = {},
            s = {},
            o = {};
        _.each(n, function(e, t) {
            i[t] = function() {
                return r(e, _.toArray(arguments))
            }, s[t] = function() {
                return URI().protocol() + "://" + window.location.host + r(e, _.toArray(arguments))
            }, o[t] = function() {
                return "https://www.twitch.tv" + r(e, _.toArray(arguments))
            }
        });
        var u = _.memoize(function(e) {
                return _.reduce(decodeURIComponent(e).split("&"), function(e, t) {
                    var n = e,
                        r = t.split("="),
                        i = r[0],
                        s = [],
                        o = r[1];
                    while (i) {
                        var u = /^(.+?)(?:\[(.*?)\])?((?:\[.*?\])*)$/.exec(i);
                        s.push(u[1]), u[2] ? i = u[2] + u[3] : i = ""
                    }
                    return _.each(_.initial(s), function(e) {
                        n[e] = n[e] || {}, n = n[e]
                    }), n[_.last(s)] = o, e
                }, {})
            }),
            a = function(e) {
                return u(e || URI().query())
            };
        e.mixin({
            uri: i,
            url: s,
            canonicalUrl: o,
            url_params: a
        })
    }(Twitch, jQuery);
var CryptoJS = CryptoJS || function(e, t) {
    var n = {},
        r = n.lib = {},
        i = function() {},
        s = r.Base = {
            extend: function(e) {
                i.prototype = this;
                var t = new i;
                return e && t.mixIn(e), t.hasOwnProperty("init") || (t.init = function() {
                    t.$super.init.apply(this, arguments)
                }), t.init.prototype = t, t.$super = this, t
            },
            create: function() {
                var e = this.extend();
                return e.init.apply(e, arguments), e
            },
            init: function() {},
            mixIn: function(e) {
                for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                e.hasOwnProperty("toString") && (this.toString = e.toString)
            },
            clone: function() {
                return this.init.prototype.extend(this)
            }
        },
        o = r.WordArray = s.extend({
            init: function(e, n) {
                e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length
            },
            toString: function(e) {
                return (e || a).stringify(this)
            },
            concat: function(e) {
                var t = this.words,
                    n = e.words,
                    r = this.sigBytes;
                e = e.sigBytes, this.clamp();
                if (r % 4)
                    for (var i = 0; i < e; i++) t[r + i >>> 2] |= (n[i >>> 2] >>> 24 - 8 * (i % 4) & 255) << 24 - 8 * ((r + i) % 4);
                else if (65535 < n.length)
                    for (i = 0; i < e; i += 4) t[r + i >>> 2] = n[i >>> 2];
                else t.push.apply(t, n);
                return this.sigBytes += e, this
            },
            clamp: function() {
                var t = this.words,
                    n = this.sigBytes;
                t[n >>> 2] &= 4294967295 << 32 - 8 * (n % 4), t.length = e.ceil(n / 4)
            },
            clone: function() {
                var e = s.clone.call(this);
                return e.words = this.words.slice(0), e
            },
            random: function(t) {
                for (var n = [], r = 0; r < t; r += 4) n.push(4294967296 * e.random() | 0);
                return new o.init(n, t)
            }
        }),
        u = n.enc = {},
        a = u.Hex = {
            stringify: function(e) {
                var t = e.words;
                e = e.sigBytes;
                for (var n = [], r = 0; r < e; r++) {
                    var i = t[r >>> 2] >>> 24 - 8 * (r % 4) & 255;
                    n.push((i >>> 4).toString(16)), n.push((i & 15).toString(16))
                }
                return n.join("")
            },
            parse: function(e) {
                for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - 4 * (r % 8);
                return new o.init(n, t / 2)
            }
        },
        f = u.Latin1 = {
            stringify: function(e) {
                var t = e.words;
                e = e.sigBytes;
                for (var n = [], r = 0; r < e; r++) n.push(String.fromCharCode(t[r >>> 2] >>> 24 - 8 * (r % 4) & 255));
                return n.join("")
            },
            parse: function(e) {
                for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (e.charCodeAt(r) & 255) << 24 - 8 * (r % 4);
                return new o.init(n, t)
            }
        },
        l = u.Utf8 = {
            stringify: function(e) {
                try {
                    return decodeURIComponent(escape(f.stringify(e)))
                } catch (t) {
                    throw Error("Malformed UTF-8 data")
                }
            },
            parse: function(e) {
                return f.parse(unescape(encodeURIComponent(e)))
            }
        },
        c = r.BufferedBlockAlgorithm = s.extend({
            reset: function() {
                this._data = new o.init, this._nDataBytes = 0
            },
            _append: function(e) {
                "string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
            },
            _process: function(t) {
                var n = this._data,
                    r = n.words,
                    i = n.sigBytes,
                    s = this.blockSize,
                    u = i / (4 * s),
                    u = t ? e.ceil(u) : e.max((u | 0) - this._minBufferSize, 0);
                t = u * s, i = e.min(4 * t, i);
                if (t) {
                    for (var a = 0; a < t; a += s) this._doProcessBlock(r, a);
                    a = r.splice(0, t), n.sigBytes -= i
                }
                return new o.init(a, i)
            },
            clone: function() {
                var e = s.clone.call(this);
                return e._data = this._data.clone(), e
            },
            _minBufferSize: 0
        });
    r.Hasher = c.extend({
        cfg: s.extend(),
        init: function(e) {
            this.cfg = this.cfg.extend(e), this.reset()
        },
        reset: function() {
            c.reset.call(this), this._doReset()
        },
        update: function(e) {
            return this._append(e), this._process(), this
        },
        finalize: function(e) {
            return e && this._append(e), this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function(e) {
            return function(t, n) {
                return (new e.init(n)).finalize(t)
            }
        },
        _createHmacHelper: function(e) {
            return function(t, n) {
                return (new h.HMAC.init(e, n)).finalize(t)
            }
        }
    });
    var h = n.algo = {};
    return n
}(Math);
(function(e) {
    function t(e, t, n, r, i, s, o) {
        return e = e + (t & n | ~t & r) + i + o, (e << s | e >>> 32 - s) + t
    }

    function n(e, t, n, r, i, s, o) {
        return e = e + (t & r | n & ~r) + i + o, (e << s | e >>> 32 - s) + t
    }

    function r(e, t, n, r, i, s, o) {
        return e = e + (t ^ n ^ r) + i + o, (e << s | e >>> 32 - s) + t
    }

    function i(e, t, n, r, i, s, o) {
        return e = e + (n ^ (t | ~r)) + i + o, (e << s | e >>> 32 - s) + t
    }
    for (var s = CryptoJS, o = s.lib, u = o.WordArray, a = o.Hasher, o = s.algo, f = [], l = 0; 64 > l; l++) f[l] = 4294967296 * e.abs(e.sin(l + 1)) | 0;
    o = o.MD5 = a.extend({
        _doReset: function() {
            this._hash = new u.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        _doProcessBlock: function(e, s) {
            for (var o = 0; 16 > o; o++) {
                var u = s + o,
                    a = e[u];
                e[u] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360
            }
            var o = this._hash.words,
                u = e[s + 0],
                a = e[s + 1],
                l = e[s + 2],
                c = e[s + 3],
                h = e[s + 4],
                d = e[s + 5],
                v = e[s + 6],
                g = e[s + 7],
                y = e[s + 8],
                b = e[s + 9],
                w = e[s + 10],
                E = e[s + 11],
                S = e[s + 12],
                x = e[s + 13],
                T = e[s + 14],
                N = e[s + 15],
                C = o[0],
                k = o[1],
                L = o[2],
                A = o[3],
                C = t(C, k, L, A, u, 7, f[0]),
                A = t(A, C, k, L, a, 12, f[1]),
                L = t(L, A, C, k, l, 17, f[2]),
                k = t(k, L, A, C, c, 22, f[3]),
                C = t(C, k, L, A, h, 7, f[4]),
                A = t(A, C, k, L, d, 12, f[5]),
                L = t(L, A, C, k, v, 17, f[6]),
                k = t(k, L, A, C, g, 22, f[7]),
                C = t(C, k, L, A, y, 7, f[8]),
                A = t(A, C, k, L, b, 12, f[9]),
                L = t(L, A, C, k, w, 17, f[10]),
                k = t(k, L, A, C, E, 22, f[11]),
                C = t(C, k, L, A, S, 7, f[12]),
                A = t(A, C, k, L, x, 12, f[13]),
                L = t(L, A, C, k, T, 17, f[14]),
                k = t(k, L, A, C, N, 22, f[15]),
                C = n(C, k, L, A, a, 5, f[16]),
                A = n(A, C, k, L, v, 9, f[17]),
                L = n(L, A, C, k, E, 14, f[18]),
                k = n(k, L, A, C, u, 20, f[19]),
                C = n(C, k, L, A, d, 5, f[20]),
                A = n(A, C, k, L, w, 9, f[21]),
                L = n(L, A, C, k, N, 14, f[22]),
                k = n(k, L, A, C, h, 20, f[23]),
                C = n(C, k, L, A, b, 5, f[24]),
                A = n(A, C, k, L, T, 9, f[25]),
                L = n(L, A, C, k, c, 14, f[26]),
                k = n(k, L, A, C, y, 20, f[27]),
                C = n(C, k, L, A, x, 5, f[28]),
                A = n(A, C, k, L, l, 9, f[29]),
                L = n(L, A, C, k, g, 14, f[30]),
                k = n(k, L, A, C, S, 20, f[31]),
                C = r(C, k, L, A, d, 4, f[32]),
                A = r(A, C, k, L, y, 11, f[33]),
                L = r(L, A, C, k, E, 16, f[34]),
                k = r(k, L, A, C, T, 23, f[35]),
                C = r(C, k, L, A, a, 4, f[36]),
                A = r(A, C, k, L, h, 11, f[37]),
                L = r(L, A, C, k, g, 16, f[38]),
                k = r(k, L, A, C, w, 23, f[39]),
                C = r(C, k, L, A, x, 4, f[40]),
                A = r(A, C, k, L, u, 11, f[41]),
                L = r(L, A, C, k, c, 16, f[42]),
                k = r(k, L, A, C, v, 23, f[43]),
                C = r(C, k, L, A, b, 4, f[44]),
                A = r(A, C, k, L, S, 11, f[45]),
                L = r(L, A, C, k, N, 16, f[46]),
                k = r(k, L, A, C, l, 23, f[47]),
                C = i(C, k, L, A, u, 6, f[48]),
                A = i(A, C, k, L, g, 10, f[49]),
                L = i(L, A, C, k, T, 15, f[50]),
                k = i(k, L, A, C, d, 21, f[51]),
                C = i(C, k, L, A, S, 6, f[52]),
                A = i(A, C, k, L, c, 10, f[53]),
                L = i(L, A, C, k, w, 15, f[54]),
                k = i(k, L, A, C, a, 21, f[55]),
                C = i(C, k, L, A, y, 6, f[56]),
                A = i(A, C, k, L, N, 10, f[57]),
                L = i(L, A, C, k, v, 15, f[58]),
                k = i(k, L, A, C, x, 21, f[59]),
                C = i(C, k, L, A, h, 6, f[60]),
                A = i(A, C, k, L, E, 10, f[61]),
                L = i(L, A, C, k, l, 15, f[62]),
                k = i(k, L, A, C, b, 21, f[63]);
            o[0] = o[0] + C | 0, o[1] = o[1] + k | 0, o[2] = o[2] + L | 0, o[3] = o[3] + A | 0
        },
        _doFinalize: function() {
            var t = this._data,
                n = t.words,
                r = 8 * this._nDataBytes,
                i = 8 * t.sigBytes;
            n[i >>> 5] |= 128 << 24 - i % 32;
            var s = e.floor(r / 4294967296);
            n[(i + 64 >>> 9 << 4) + 15] = (s << 8 | s >>> 24) & 16711935 | (s << 24 | s >>> 8) & 4278255360, n[(i + 64 >>> 9 << 4) + 14] = (r << 8 | r >>> 24) & 16711935 | (r << 24 | r >>> 8) & 4278255360, t.sigBytes = 4 * (n.length + 1), this._process(), t = this._hash, n = t.words;
            for (r = 0; 4 > r; r++) i = n[r], n[r] = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & 4278255360;
            return t
        },
        clone: function() {
            var e = a.clone.call(this);
            return e._hash = this._hash.clone(), e
        }
    }), s.MD5 = a._createHelper(o), s.HmacMD5 = a._createHmacHelper(o)
})(Math),
function(e, t) {
    var n = {};
    n._generateRandomString = function(e) {
        var t = new Array(e);
        for (var n = 0; n < e; n++) t[n] = String.fromCharCode(Math.floor(Math.random() * 27) + 65);
        return t.join("")
    }, n.createUniqueId = function(e) {
        var t = e || "";
        return t += this._generateRandomString(32) + (new Date).toLocaleTimeString(), Crypto.SHA1(t).substring(0, 16)
    }, n.getOrCreateUniqueId = function() {
        return cookie.get("unique_id") || cookie.set("unique_id", this.createUniqueId(), {
            expires: 3650
        }), cookie.get("unique_id")
    }, n.getOrCreateSessionUniqueId = function() {
        return cookie.get("session_unique_id") || cookie.set("session_unique_id", this.createUniqueId()), cookie.get("session_unique_id")
    }, n.getOrCreateLocalStorageUniqueId = function() {
        return e.storage.get("localstorage_unique_id") || e.storage.set("localstorage_unique_id", this.createUniqueId()), e.storage.get("localstorage_unique_id")
    }, n.getOrCreateSessionStorageUniqueId = function() {
        var t = e.storage.get("sessionstorage_unique_id", {
            storage: "sessionStorage"
        });
        return t || (t = this.createUniqueId(), e.storage.set("sessionstorage_unique_id", t, {
            storage: "sessionStorage"
        })), t
    }, e.mixin({
        idsForMixpanel: n
    })
}(Twitch, jQuery),
function(e, t) {
    var n = SiteOptions.experiments || {},
        r = {
            RECOMMENDED_CHANNELS: "aaac75ea-c969-4826-b32d-ceefac620a79",
            RECOMMENDED_GAMES: "61b169ff-bc62-4725-a40e-1be627197c6f",
            VODS_GAME_INFO: "ac39b897-d41d-4255-90b6-3a59027e12e0",
            VOD_COVIEWS: "c48ae3e6-1356-4ccc-8fbe-12c6909f9e98",
            VOD_COVIEWS_AB: "e7516730-b94f-4d46-894e-c18612aab270",
            VOD_COVIEWS_FORCED_VARIETY: "2f8210be-a6c6-43b1-9f6a-4b7cc7ef93c0",
            VOD_COVIEWS_SHUFFLE: "403707e6-abb9-401c-a2ca-dd643293dbdd",
            VOD_UPLOAD_UNITS: "1e406d0d-c293-4c4e-812f-049db8c7e3ec",
            SIMILAR_VODS: "b3dbd888-3ed2-4129-a6a9-7ad4c3d866d7",
            CDN_EXPERIMENT: "b29d055f-74f2-40b9-9383-9c4b79b30360",
            CREATIVE_UNLIKELY_HERO: "dd2d60cd-b76b-4beb-a38c-ea60df88b3cc",
            CREATIVE_DIRECTORY_CVS: "36a0e500-f117-41dd-8421-3e3db7d567dd",
            CREATIVE_SIDEBAR_NAVIGATION: "f60b889e-0327-46a8-ad7b-0d402717da45",
            CSGO_LANGUAGE_SAMPLE: "b86f6c73-d333-4d80-ab45-07cfff39aede",
            VOD_PAGE_RECOMMENDATION_ORDER: "171906a2-6e34-4d0e-879c-a76a19f19097",
            REMOVE_CSGO_DIRECTORY: "355ff3e2-38b5-449a-8ab8-a52b5d3ab817",
            LANGUAGE_DIRECTORY_FILTER: "653cc0db-d332-4df6-b224-15c5c481f7e7",
            CHANNEL_VIDEOS_TAB: "852b3485-a831-4580-b7bf-acf819977704",
            CLIPS_ENABLED: "b4d61bdb-c174-47e6-a2f9-a46a4088ac26",
            MESSAGE_DELETED_EXPERIMENT: "04165981-17be-4593-afbd-762a380f6838",
            RESUME_WATCHING_BANNER: "4f5c0aa5-292d-4ed3-9b2a-f9da6ea195f2",
            CHAT_RULES_EXPERIMENT: "98f3f2a5-9e4e-4ba8-aabe-2ff85e7309ee",
            ESL_CSGO_STEAM_LINK: "6a857f53-de28-4025-8983-3cada70538cd",
            CHANNEL_PAGE_REDESIGN: "3ae835b6-3015-440c-8177-755bdbbbf29e",
            MESSAGE_HISTORY: "8ace0f50-8afd-424a-a086-3e61b3e66da0",
            BITS_FOR_ADS: "2c1c9b8c-530c-4011-a2a0-e93c0e14d8c2",
            NEXUS_ROLLOUT: "428d3b07-cc7a-424f-aad0-971f5415879a",
            DETERMINATION: "cc164e1e-1361-4730-8d9b-0091a0f9cb8f",
            CHANNEL_FOLLOW_CTA: "8fe5705b-1c85-4d6f-bba0-d99c36b0d7d4",
            DISCOVER_SHOW_COVIEWS: "3e011e23-ef29-46a5-af4b-a86e15d8c9e6"
        },
        i = {
            "aaac75ea-c969-4826-b32d-ceefac620a79": "no",
            "61b169ff-bc62-4725-a40e-1be627197c6f": "no",
            "ac39b897-d41d-4255-90b6-3a59027e12e0": "control",
            "c48ae3e6-1356-4ccc-8fbe-12c6909f9e98": "control",
            "e7516730-b94f-4d46-894e-c18612aab270": "control",
            "2f8210be-a6c6-43b1-9f6a-4b7cc7ef93c0": "control",
            "403707e6-abb9-401c-a2ca-dd643293dbdd": "control",
            "1e406d0d-c293-4c4e-812f-049db8c7e3ec": "control",
            "b3dbd888-3ed2-4129-a6a9-7ad4c3d866d7": "control",
            "b29d055f-74f2-40b9-9383-9c4b79b30360": "control",
            "dd2d60cd-b76b-4beb-a38c-ea60df88b3cc": "no",
            "36a0e500-f117-41dd-8421-3e3db7d567dd": "communities",
            "f60b889e-0327-46a8-ad7b-0d402717da45": "no",
            "b86f6c73-d333-4d80-ab45-07cfff39aede": "control",
            "171906a2-6e34-4d0e-879c-a76a19f19097": "related_first",
            "355ff3e2-38b5-449a-8ab8-a52b5d3ab817": "control",
            "653cc0db-d332-4df6-b224-15c5c481f7e7": "control",
            "852b3485-a831-4580-b7bf-acf819977704": "control",
            "b4d61bdb-c174-47e6-a2f9-a46a4088ac26": "no",
            "04165981-17be-4593-afbd-762a380f6838": "false",
            "4f5c0aa5-292d-4ed3-9b2a-f9da6ea195f2": "no",
            "98f3f2a5-9e4e-4ba8-aabe-2ff85e7309ee": "control",
            "6a857f53-de28-4025-8983-3cada70538cd": "control",
            "3ae835b6-3015-440c-8177-755bdbbbf29e": "old",
            "8ace0f50-8afd-424a-a086-3e61b3e66da0": "off",
            "2c1c9b8c-530c-4011-a2a0-e93c0e14d8c2": "off",
            "428d3b07-cc7a-424f-aad0-971f5415879a": "disabled",
            "cc164e1e-1361-4730-8d9b-0091a0f9cb8f": "no",
            "8fe5705b-1c85-4d6f-bba0-d99c36b0d7d4": "control",
            "3e011e23-ef29-46a5-af4b-a86e15d8c9e6": "no_show"
        },
        s = "experiment_overrides",
        o = {},
        u = {
            CSGO_LANGUAGE_SAMPLE: "localized",
            LANGUAGE_DIRECTORY_FILTER: "full",
            CLIPS_ENABLED: "yes",
            ESL_CSGO_STEAM_LINK: "show-cta",
            CHANNEL_PAGE_REDESIGN: "new",
            DETERMINATION: "yes",
            DISCOVER_SHOW_COVIEWS: "show"
        };
    _.each(Object.keys(u), function(t) {
        o[r[t]] = e.user().then(function(e) {
            return e && e.is_staff ? u[t] : RSVP.Promise.reject()
        }, function(e) {
            if (e && e.status === 401) return;
            throw e
        })
    });
    var a = e.url_params().experiments,
        f = cookie.get(s),
        l = {};
    try {
        f && (l = JSON.parse(f))
    } catch (c) {
        console.warn("Failed to parse experiment overrides", c)
    }
    _.extend(o, l, a);
    var h = {
            defaults: i,
            deviceID: e.idsForMixpanel.getOrCreateUniqueId(),
            overrides: o,
            provider: new Minixperiment.providers.local(n),
            Promise: RSVP.Promise,
            platform: "web",
            login: null
        },
        p, d = e.user().then(function(e) {
            return e.login
        }, function() {
            return null
        }).then(function(e) {
            h.login = e, p = new Minixperiment.Client(h)
        }),
        v = function(e) {
            return d.then(function() {
                var t = r[e];
                return p.get(t)
            })
        },
        m = function(e, t) {
            if (!e || !t) return;
            var n = {},
                i = cookie.get(s),
                o = r[e];
            try {
                i && (n = JSON.parse(i))
            } catch (u) {
                console.warn("Failed to parse experiment overrides", u)
            }
            o && (n[o] = t), cookie.set(s, JSON.stringify(n)), console.warn("Experiment overrides require a page refresh to take effect.")
        },
        g = function() {
            cookie.remove(s), console.warn("Clearing experiment overrides require a page refresh to take effect.")
        },
        y = {
            getExperimentValue: v,
            overrideExperimentValue: m,
            clearOverrides: g
        };
    e.mixin({
        experiments: y
    })
}(Twitch, jQuery),
function(e, t) {
    var n = {
            hlsId: null
        },
        r;
    n.init = function(i) {
        i.type === "html5" ? (r = new n.HTML5Player(i.html5Options), r.init(function() {
            t(e.player).triggerHandler("ready")
        })) : (r = new n.FlashPlayer(i.flashOptions), r.init(function() {
            t(e.player).triggerHandler("ready")
        }, function() {
            i.type !== "flash" && (r = new n.HTML5Player(i.html5Options), r.init(function() {
                t(e.player).triggerHandler("ready")
            }, function(e) {
                r.$el.find(".js-html5-player").hide(), r.$el.siblings(".js-flash-required").show()
            }))
        }))
    };
    var i = !1;
    t(n).on("ready", function() {
        i = !0
    }), n.ready = function(n) {
        i ? n(r) : t(e.player).on("ready", function() {
            n(r)
        })
    }, n.getPlayer = function() {
        return console.warn("Twitch.player.getPlayer is deprecated for the new player."), r || console.error("Twitch.player.getPlayer called before player is ready."), r
    }, n.parseTimeOffset = function(e) {
        var t = /^((\d+)[Hh])?((\d+)[Mm])?((\d+)[Ss])?$/.exec(e || "");
        if (!t) return 0;
        try {
            var n = parseInt(t[2], 10) || 0,
                r = parseInt(t[4], 10) || 0,
                i = parseInt(t[6], 10) || 0;
            return n * 3600 + r * 60 + i
        } catch (s) {
            return 0
        }
    }, n.setSteamInfo = function(e, t) {
        console.warn("Twitch.player.setSteamInfo is deprecated")
    }, n.getSpecialOverlay = function() {
        return e.storage.get("adblock_enabled", {
            storage: "sessionStorage"
        }) === "true"
    }, n.onTwitchPlayerInit = n.onTwitchPlayerLoaded = function(e) {
        console.warn("Twitch.player.onTwitchPlayer(Init/Loaded) is deprecated! Use Twitch.ready instead."), n.ready(e)
    }, e.mixin({
        player: n
    })
}(Twitch, jQuery),
function(e, t) {
    var n = ["streamLoaded", "videoLoaded", "online", "offline", "adCompanionRendered", "viewerCount", "videoLoading", "videoPlaying", "tosViolation", "popout", "loginRequest", "adFeedbackShow", "mouseScroll"],
        r = function(e) {
            this.options = e, r.instantiationCounter++
        };
    r.instantiationCounter = 0, t.extend(r.prototype, {
        _proxy: function() {
            var e = this;
            t.each(["fullscreen", "getVideoTime", "loadStream", "loadVideo", "mute", "isPaused", "pauseVideo", "playVideo", "setOauthToken", "onlineStatus", "unmute", "videoSeek", "adFeedbackDone"], function(t, n) {
                e[n] = e.el[n].bind(e.el)
            })
        },
        init: function(e, n) {
            console.info("FlashPlayer.init"), this._initSuccess = e || function() {}, n = n || function() {};
            var r = this,
                s = this.options;
            s.flashVars.eventsCallback = i.register(function(e) {
                r._onEvents(e)
            }), swfobject.embedSWF(s.url, s.swfId, s.width, s.height, s.version, "/widgets/expressinstall.swf", s.flashVars, s.params, s.attrs, function(e) {
                e.success ? (r.$el = t("#" + r.options.swfId), r.el = r.$el[0]) : (console.info("FlashPlayer.init error"), n("error embedding flash player"))
            })
        },
        _onPlayerInit: function() {
            this._proxy(), this.adFeedbackMenu = new e.player.AdFeedbackMenu(t(".js-ad-feedback-menu").first(), this), console.info("FlashPlayer.init success"), this._initSuccess(this)
        },
        destroy: function() {},
        _onEvents: function(e) {
            var t;
            for (var n = 0; n < e.length; n++) {
                t = e[n];
                try {
                    this._onEvent(t)
                } catch (r) {
                    console.warn("Error handling FlashPlayer event " + t.event + ": " + r)
                }
            }
        },
        _onEvent: function(e) {
            switch (e.event) {
                case "playerInit":
                    this._onPlayerInit();
                    break;
                default:
                    this.trigger(e.event, e.data)
            }
        }
    }), RSVP.EventTarget.mixin(r.prototype);
    var i = {
        callbackId: 0,
        register: function(t) {
            e.player.FlashPlayer.callbacks = e.player.FlashPlayer.callbacks || {};
            var n = "callback" + this.callbackId++;
            return e.player.FlashPlayer.callbacks[n] = t, "Twitch.player.FlashPlayer.callbacks." + n
        }
    };
    e.player.FlashPlayer = r
}(Twitch, jQuery),
function() {
    try {
        var e = window.chrome || {};
        e.cast = e.cast || {}, e.cast.media = e.cast.media || {}, e.cast.ApiBootstrap_ = function() {}, e.cast.ApiBootstrap_.EXTENSION_IDS = ["boadgeojelhgndaghljhdicfkmllpafd", "dliochdbjfkdbacpmhlcpmleaejidimm", "hfaagokkkhdbgiakmmlclaapfelnkoah", "fmfcbgogabcbclcofgocippekhfcmgfj", "enhhojjnijigcajfphajepfemndkmdlo"], e.cast.ApiBootstrap_.findInstalledExtension_ = function(t) {
            e.cast.ApiBootstrap_.findInstalledExtensionHelper_(0, t)
        }, e.cast.ApiBootstrap_.findInstalledExtensionHelper_ = function(t, n) {
            t == e.cast.ApiBootstrap_.EXTENSION_IDS.length ? n(null) : e.cast.ApiBootstrap_.isExtensionInstalled_(e.cast.ApiBootstrap_.EXTENSION_IDS[t], function(r) {
                r ? n(e.cast.ApiBootstrap_.EXTENSION_IDS[t]) : e.cast.ApiBootstrap_.findInstalledExtensionHelper_(t + 1, n)
            })
        }, e.cast.ApiBootstrap_.getCastSenderUrl_ = function(e) {
            return "chrome-extension://" + e + "/cast_sender.js"
        }, e.cast.ApiBootstrap_.isExtensionInstalled_ = function(t, n) {
            var r = new XMLHttpRequest;
            r.onreadystatechange = function() {
                4 == r.readyState && 200 == r.status && n(!0)
            }, r.onerror = function() {
                n(!1)
            }, r.open("GET", e.cast.ApiBootstrap_.getCastSenderUrl_(t), !0), r.send()
        }, e.cast.ApiBootstrap_.findInstalledExtension_(function(t) {
            if (t) {
                console.log("Found cast extension: " + t), e.cast.extensionId = t;
                var n = document.createElement("script");
                n.src = e.cast.ApiBootstrap_.getCastSenderUrl_(t), (document.head || document.documentElement).appendChild(n)
            } else {
                var r = "No cast extension found";
                console.log(r);
                var i = window.__onGCastApiAvailable;
                i && "function" == typeof i && i(!1, r)
            }
        })
    } catch (t) {}
}(),
function(e, t) {
    var n = ["streamLoaded", "online", "offline", "adCompanionRendered", "viewerCount", "videoLoading", "videoPlaying", "tosViolation", "popout", "loginRequest", "adFeedbackShow", "mouseScroll", "chromecastMediaSet", "chromecastSessionRequested", "chromecastVolumeUpdated", "pauseChromecastSession"],
        r = ["playVideo", "pauseVideo", "mute", "unmute", "loadStream", "fullscreen", "adFeedbackDone", "setTrackingData", "getVideoTime", "videoSeek", "isPaused", "playVideo", "showChromecast", "setChromecastConnected", "togglePlayPause", "isChatWebSockets"],
        i = function(t) {
            var n;
            return t.playerType === "live" ? n = {
                id: t.id,
                hide_chat: !0,
                channel: t.channel,
                host_channel: t.hostChannel,
                embed: t.embed ? "1" : "0",
                auto_play: !0
            } : t.playerType === "highlighter" ? n = {
                id: t.id,
                videoId: t.archiveId,
                playerType: t.playerType,
                hostname: SiteOptions.twitch_cdn_hostport,
                auto_play: !0
            } : t.playerType === "archive" && (n = {
                id: t.id,
                videoId: t.archiveId,
                playerType: t.playerType,
                hostname: SiteOptions.twitch_cdn_hostport,
                auto_play: !0,
                playOffset: s()
            }), n.device_id = e.idsForMixpanel.getOrCreateUniqueId(), n.session_device_id = e.idsForMixpanel.getOrCreateSessionUniqueId(), n.localstorage_device_id = e.idsForMixpanel.getOrCreateLocalStorageUniqueId(), n.test_environment_url = "http://" + SiteOptions.www_hostport, _.each(n, function(e, t) {
                e === undefined && delete n[t]
            }), n
        },
        s = function() {
            var e = URI().query(!0).t;
            if (!e) return 0;
            var t = e.match(/^(\d+[Hh])?(\d+[Mm])?(\d+[Ss])?$/);
            if (t) {
                var n = parseInt(t[1], 10) || 0,
                    r = parseInt(t[2], 10) || 0,
                    i = parseInt(t[3], 10) || 0;
                return n * 60 * 60 + r * 60 + i
            }
            return e.match(/^\d+$/) ? parseInt(e, 10) : 0
        },
        o = function(e) {
            var t = i(e);
            t.eventsCallback = u.register(function(e) {
                n._onEvents(e)
            }), this._readyDeferred = RSVP.defer(), this._id = t.id, this._hostChannel = t.hostChannel, e.playerType !== "live" && (this._videoType = "hls");
            var n = this,
                r = ["//" + SiteOptions.twitch_cdn_hostport + "/swflibs/TwitchPlayer.swf", t.id, "100%", "100%", "11", null, t, {
                    allowScriptAccess: "always",
                    allowFullScreen: !0,
                    wmode: "opaque",
                    bgcolor: "000000"
                }, null, function(e) {
                    e.success || n._readyDeferred.reject(n)
                }];
            swfobject.embedSWF.apply(swfobject, r)
        };
    RSVP.EventTarget.mixin(o.prototype), o.prototype._onPlayerInit = function() {
            this.adFeedbackMenu = new e.player.AdFeedbackMenu(t(".js-ad-feedback-menu").first(), this), this.ready(this._id)
        }, o.prototype.destroy = function() {
            clearInterval(this.swfTrackingInterval)
        }, o.prototype.ready = function(n) {
            var r = this;
            this.ref = document.getElementById(n), this.$el = t(this.ref);
            var i = {
                host_channel: this._hostChannel
            };
            this.setTrackingData("video-play", i), this._videoType && this.setTrackingData("video-type", this._videoType);
            var s, o;
            this.swfTrackingInterval = setInterval(function() {
                if (TMI) {
                    var e = TMI.usingWebSockets();
                    e !== o && (r.isChatWebSockets(e), o = e);
                    var t = TMI.getMessageRate();
                    if (t !== s) {
                        s = t;
                        var n = {
                            chat_msg_rate: t
                        };
                        r.setTrackingData("minute-watched", _.extend(n, i)), r.setTrackingData("buffer-empty", n)
                    }
                }
            }, 1e3), e.chromecast.initialize(this), this.isReady = !0, this._readyDeferred.resolve(this)
        }, o.prototype.promise = function(e, t) {
            return this._readyDeferred.promise.then(e, t)
        }, o.prototype._onEvents = function(e) {
            var t;
            for (var n = 0; n < e.length; n++) {
                t = e[n];
                try {
                    this._onEvent(t)
                } catch (r) {
                    console.warn("Error handling FlashPlayer2 event " + t.event + ": " + r)
                }
            }
        }, o.prototype._onEvent = function(e) {
            switch (e.event) {
                case "playerInit":
                    this._onPlayerInit();
                    break;
                default:
                    this.trigger(e.event, e.data)
            }
        },
        function() {
            _.each(r, function(e) {
                o.prototype[e] = function() {
                    if (this.isReady && this.ref[e]) return this.ref[e].apply(this.ref, arguments)
                }
            })
        }(), e.player.FlashPlayer2 = o;
    var u = {
        callbackId: 0,
        register: function(t) {
            e.player.FlashPlayer2.callbacks = e.player.FlashPlayer2.callbacks || {};
            var n = "callback" + this.callbackId++;
            return e.player.FlashPlayer2.callbacks[n] = t, "Twitch.player.FlashPlayer2.callbacks." + n
        }
    }
}(Twitch, jQuery),
function(e, t) {
    var n = function(e, n) {
        var r = this,
            i = null;
        r.player = n, r.$playerEl = n.$el, n.on("adFeedbackShow", function(e) {
            i = e.adId, r.show()
        }), r.$el = t(e), r.$el.find(".close-btn").click(function() {
            r.$el.hide()
        }), r.$el.find("a").each(function(e, s) {
            var o = t(s);
            o.click(function(e) {
                e.preventDefault(), r.$el.hide(), n.adFeedbackDone({
                    ad_id: i,
                    ad_feedback: o.attr("name")
                })
            })
        })
    };
    t.extend(n.prototype, {
        show: function() {
            this.$el.show()
        }
    }), e.player.AdFeedbackMenu = n
}(Twitch, jQuery),
function(e, t) {
    var n = function(e) {
        this.googlePromise = t.getScript("//s0.2mdn.net/instream/html5/ima3.js"), this.options = e, this.$clickTracker = t(".js-clicktracker"), this.$player = t(e.player)
    };
    n.prototype.showClickTracker = function() {
        this.$clickTracker.show(), this.$player.attr("controls", !1)
    }, n.prototype.hideClickTracker = function() {
        this.$clickTracker.hide(), this.$player.attr("controls", !0)
    }, n.prototype.initialize = function() {
        var e = this;
        return new RSVP.Promise(function(n, r) {
            e.googlePromise.then(function() {
                e.adDisplayContainer = new google.ima.AdDisplayContainer(e.options.container, e.options.player, e.$clickTracker[0]), e.adsLoader = new google.ima.AdsLoader(e.adDisplayContainer), e.adsManager = null, e.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, e.onAdsManagerLoaded, !1, e), e.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, e.onAdError, !1, e), e.adDisplayContainer.initialize(), n()
            }).fail(function() {
                t(e).trigger("error"), r()
            })
        })
    }, n.prototype.requestAds = function(e) {
        var n = new google.ima.AdsRequest;
        n.adTagUrl = e;
        var r = t(this.options.player).width(),
            i = t(this.options.player).height();
        n.linearAdSlotWidth = r, n.linearAdSlotHeight = r, n.nonLinearAdSlotWidth = i, n.nonLinearAdSlotHeight = i, this.adsLoader.requestAds(n)
    }, n.prototype.onAdsManagerLoaded = function(e) {
        console.debug("Ads Manager loaded."), this.adsManager = e.getAdsManager(this.options.player), this.processAdsManager(this.adsManager)
    }, n.prototype.processAdsManager = function(e) {
        e.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, this.onContentPauseRequested, !1, this), e.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, this.onContentResumeRequested, !1, this), e.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError, !1, this);
        var t = [google.ima.AdEvent.Type.ALL_ADS_COMPLETED, google.ima.AdEvent.Type.CLICK, google.ima.AdEvent.Type.COMPLETE, google.ima.AdEvent.Type.FIRST_QUARTILE, google.ima.AdEvent.Type.LOADED, google.ima.AdEvent.Type.MIDPOINT, google.ima.AdEvent.Type.PAUSED, google.ima.AdEvent.Type.RESUMED, google.ima.AdEvent.Type.STARTED, google.ima.AdEvent.Type.THIRD_QUARTILE];
        for (var n = 0; n < t.length; n++) e.addEventListener(t[n], this.onAdEvent, !1, this);
        e.init(1, 1, google.ima.ViewMode.NORMAL), e.start()
    }, n.prototype.onContentPauseRequested = function(e) {}, n.prototype.onContentResumeRequested = function(e) {
        this.hideClickTracker(), t(this).trigger("contentResumeRequested")
    }, n.prototype.onAdEvent = function(e) {
        console.debug("Ad event: " + e.type);
        switch (e.type) {
            case google.ima.AdEvent.Type.STARTED:
                this.showClickTracker(), this.options.player.load();
                break;
            case google.ima.AdEvent.Type.RESUMED:
                this.showClickTracker();
                break;
            case google.ima.AdEvent.Type.CLICK:
                this.hideClickTracker();
                break;
            case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                this.hideClickTracker()
        }
        t(this).trigger(e.type)
    }, n.prototype.onAdError = function(e) {
        console.error("Ad error: " + e.getError().toString()), this.adsManager && this.adsManager.destroy(), this.hideClickTracker(), t(this).trigger("adError")
    }, e.player.AdsController = n
}(Twitch, jQuery),
function(e, t) {
    var n = {};
    n.player = null;
    var r = null,
        i = null,
        s = null,
        o = !1,
        u = !1,
        a = function() {
            if (o && u && s) n.player.showChromecast(!0), n.player.setChromecastConnected(!0, s.receiver.friendlyName);
            else {
                var e = new chrome.cast.SessionRequest("358E83DC"),
                    t = new chrome.cast.ApiConfig(e, c, h, chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED);
                chrome.cast.initialize(t, f, l)
            }
        },
        f = function() {
            o = !0, o && u && n.player.showChromecast(!0)
        },
        l = function(e) {
            e.code === "session_error" && d()
        },
        c = function(e) {
            s = e, s.addUpdateListener(p), s.media.length !== 0 && m("sessionListener", s.media[0]), n.player.setChromecastConnected(!0, s.receiver.friendlyName)
        },
        h = function(e) {
            e === chrome.cast.ReceiverAvailability.AVAILABLE ? (u = !0, o && u && n.player.showChromecast(!0)) : (u = !1, n.player.showChromecast(!1))
        },
        p = function(e) {
            e || d()
        },
        d = function() {
            s && s.removeUpdateListener(p), i && i.removeUpdateListener(g), s = null, i = null, n.player.setChromecastConnected(!1)
        },
        v = function(e) {
            s = e, s.addUpdateListener(p), n.player.setChromecastConnected(!0, s.receiver.friendlyName)
        },
        m = function(e, t) {
            i = t, i.addUpdateListener(g.bind(this, t))
        },
        g = function(e, t) {
            t ? s.media.length && e === s.media[0] && (e.playerState === chrome.cast.media.PlayerState.PAUSED ? (r = e.media.customData.channel, n.player.togglePlayPause(!0)) : e.playerState === chrome.cast.media.PlayerState.PLAYING && n.player.togglePlayPause(!1)) : (e.removeUpdateListener(g), e.media.customData.channel.toUpperCase() === window.location.pathname.substring(1).toUpperCase() && (r && r === e.media.customData.channel ? (r = "", n.player.togglePlayPause(!1)) : n.player.setChromecastConnected(!1)))
        };
    n.initialize = function(t) {
        t.on("videoPlaying", _.once(function() {
            typeof chrome != "undefined" && chrome.cast && chrome.cast.isAvailable && (n.player = t, a())
        })), t.on("chromecastSessionRequested", function() {
            chrome.cast.requestSession(v, l)
        }), t.on("chromecastMediaSet", function(t) {
            if (s.media.length !== 0 && i && i.media.customData.channel && i.media.customData.channel.toUpperCase() === t.channel.toUpperCase()) return;
            var n = new chrome.cast.media.MediaInfo(t.url, "application/x-mpegurl");
            n.streamType = chrome.cast.media.StreamType.LIVE;
            var r = new chrome.cast.media.GenericMediaMetadata;
            e.api.get("streams/" + t.channel).then(function(e) {
                if (e.stream) {
                    var i = e.stream;
                    i.game && (r.subtitle = i.game), i.channel && (i.channel.display_name && (r.title = i.channel.display_name), i.channel.logo ? r.images = [new chrome.cast.Image(i.channel.logo)] : r.images = [new chrome.cast.Image(i.preview.medium)]), n.metadata = r, n.customData = {
                        channel: t.channel,
                        analytics: t.analytics
                    };
                    var o = new chrome.cast.media.LoadRequest(n);
                    o.autoplay = !0, s.loadMedia(o, m.bind(this, "loadMedia"), l)
                }
            })
        }), t.on("chromecastVolumeUpdated", function(e) {
            s && s.setReceiverVolumeLevel(e.volume, null, l)
        }), t.on("pauseChromecastSession", function() {
            i && (r = i.media.customData.channel, i.pause(new chrome.cast.media.PauseRequest, null, null), i = null)
        })
    }, e.mixin({
        chromecast: n
    })
}(Twitch, jQuery),
function(e, t) {
    var n = function(e, t) {
            this.channel = e, this.stream = t
        },
        r = function(t, n) {
            return new RSVP.Promise(function(r, i) {
                e.api.get(t).done(function(e) {
                    r(_.reduce(n, function(t, n, r) {
                        if (typeof n == "function") {
                            var i = n(e[r] || "");
                            i && (t[i.key] = i.val)
                        } else _.has(e, r) && (t[n] = e[r]);
                        return t
                    }, {}))
                }).fail(function(e) {
                    r({})
                })
            })
        },
        i = function(e) {
            return r("/api/channels/" + e, {
                partner: "partner",
                name: "channel",
                broadcaster_software: "broadcaster_software",
                game: function(e) {
                    return {
                        key: "game",
                        val: e || "None"
                    }
                }
            })
        },
        s = function(e) {
            return r("channels/" + e, {
                teams: function(e) {
                    if (_.isArray(e) && e.length > 0 && _.has(e[0], "name")) return {
                        key: "team",
                        val: e[0].name
                    }
                }
            })
        },
        o = function() {
            return r("/api/viewer/info.json", {
                login: function(e) {
                    return {
                        key: "login",
                        val: e
                    }
                },
                turbo: function(e) {
                    return {
                        key: "turbo",
                        val: !!e
                    }
                }
            })
        },
        u = function(e) {
            return r("/api/channels/" + e + "/viewer", {
                chansub: function(e) {
                    return {
                        key: "subscriber",
                        val: !!e
                    }
                }
            })
        },
        a = function(n) {
            return new RSVP.Promise(function(r, i) {
                t.ajax({
                    method: "GET",
                    url: n,
                    cache: !1,
                    headers: {
                        "Client-ID": e.api.config.clientID
                    },
                    success: function(e) {
                        var t = e.match(/nname=([^,&]+)[,&]/);
                        if (t.length > 1) {
                            var n = t[1].split(".");
                            n.length > 1 && r({
                                node: t[1],
                                cluster: n[1]
                            })
                        } else console.warn("no match found for clusterPattern."), r({})
                    },
                    error: function() {
                        console.warn("error in fetching stream data"), r({})
                    }
                })
            })
        };
    n.prototype.load = function(e) {
        var t = [],
            n = this.channel,
            r = this.stream;
        return console.info("pulling Context info"), t.push(i(n)), t.push(s(n)), t.push(o()), t.push(u(n)), t.push(a(r)), RSVP.all(t).then(function(t) {
            var n = e || {};
            return console.info("Combining properties..."), _.each(t, function(e) {
                _.extend(n, e)
            }), n
        }, function(e) {
            console.error(e)
        })
    }, e.player.ContextLoader = n
}(Twitch, jQuery),
function(e, t) {
    var n = function(t, n) {
        var r = this;
        this.queue = [], RSVP.EventTarget.mixin(this.queue), this.basicProperties = {
            b: e.storage.get("b", {
                storage: "sessionStorage"
            }) === "true"
        }, t.load(n).then(function(t) {
            r.basicProperties = t, r.queue.on("eventInQueue", function(t) {
                var n = r.queue.pop();
                e.tracking.spadeAndMixpanel.trackEvent(n.event, _.extend({}, r.basicProperties, n.properties)), r.queue.length > 0 && r.queue.trigger("eventInQueue")
            }), r.queue.length > 0 && r.queue.trigger("eventInQueue")
        })
    };
    n.prototype.handle = function(e, t) {
        t = t || {}, this.queue.push({
            event: e,
            properties: t
        }), this.queue.trigger("eventInQueue")
    }, e.player.EventHandler = n
}(Twitch, jQuery),
function(e, t) {
    var n = function(t, n, r) {
        this.context = new e.player.ContextLoader(t, n), this.handler = new e.player.EventHandler(this.context, r), this.trackingMinutesWatched = !1
    };
    n.prototype.trackVideoPlaying = function(e) {
        if (!this.trackingMinutesWatched) {
            var t = 1,
                n = this;
            this.trackingMinutesWatched = !0, this.sendVideoPlay(), setInterval(function() {
                e.contentPlayer.paused || (console.info("logging a minute watched " + (new Date).toTimeString()), n.sendMinuteWatched(t++))
            }, 6e4)
        }
    }, n.prototype.sendMinuteWatched = function(t) {
        this.handler.handle("minute-watched", {
            minutes_logged: t,
            distinct_id: e.idsForMixpanel.createUniqueId()
        })
    }, n.prototype.sendVideoPlay = function() {
        this.handler.handle("video-play")
    }, n.prototype.sendVideoAdOpportunity = function(e, t) {
        this.handler.handle("video_ad_opportunity", {
            provider: t,
            roll_type: e
        })
    }, n.prototype.sendVideoAdImpression = function(e, t) {
        this.handler.handle("video_ad_impression", {
            provider: t,
            roll_type: e
        })
    }, e.player.EventController = n
}(Twitch, jQuery),
function(e, t) {
    var n = function(e) {
        this.options = e, this.$el = t("#" + e.id), this.el = this.$el[0], this.$contentPlayer = this.$el.find(".js-video_player video"), this.contentPlayer = this.$contentPlayer[0], this.contentPlayer.load(), this.adContainer = this.$el.find(".js-ad_container").show()[0], this.videoPlayerContainer = this.$el.find(".js-video_player")[0], this._onlineStatus = "unknown", this.bufferEmpties = 0
    };
    n.canPlayHLS = function() {
        var e = navigator.userAgent,
            t = document.createElement("video");
        if (e.match(/iPhone|iPod|iPad/)) return !0;
        try {
            return t && t.canPlayType && !!t.canPlayType('application/x-mpegURL; codecs="avc1.42E01E, mp4a.40.2"')
        } catch (n) {
            return !1
        }
    }, n.prototype.init = function(r, i) {
        console.info("HTML5Player.init"), r = r || function() {}, i = i || function() {};
        if (this.options.videoId) {
            console.info("HTML5Player.init error"), i("HTML5 player doesn't support archives");
            return
        }
        var s = navigator.userAgent.match(/Android/i);
        if (!n.canPlayHLS() && !s) {
            this.$el.find(".js-message").show().text("Unsupported player."), console.info("HTML5Player.init error"), i("Browser doesn't support HLS");
            return
        }
        this.$el.show();
        var o = this;
        e.hls.getPlaylist(this.options.channel).then(function(n) {
            o._onlineStatus = "online", t(o).triggerHandler("online");
            var i = URI.parseQuery(window.location.search).mwcc,
                s = {
                    vid_width: o.$contentPlayer.width(),
                    vid_height: o.$contentPlayer.height(),
                    player: o.options.player,
                    video_renderer: "html5",
                    platform: o.options.platform,
                    adblock: e.storage.get("adblock_enabled", {
                        storage: "sessionStorage"
                    }) === "true",
                    app_version: "HTML5 0.1",
                    browser: navigator.userAgent,
                    orientation: window.innerHeight >= window.innerWidth ? "portrait" : "landscape",
                    live: !0,
                    buffer_empty_count: undefined,
                    quality: undefined,
                    fullscreen: undefined
                };
            i && (s.exp_name = "mwcc", s.exp_grp = i);
            var u = o.eventController = new e.player.EventController(o.options.channel, n, s),
                a = function(e) {
                    t.ajax({
                        type: "GET",
                        url: "http://fan.twitch.tv/" + e,
                        cache: !1,
                        data: {
                            channel: o.options.channel,
                            context: "preroll",
                            turbo_token: o.options.turboToken,
                            chansub_token: o.options.channelSubscriptionToken
                        }
                    })
                };
            if (o.options.ads === !1) {
                a("ad"), setTimeout(a, 3e4, "adcompleted"), o.setSrc(n), console.info("HTML5Player.init success (no ads)"), r();
                return
            }
            var f = new e.player.AdsController({
                container: o.adContainer,
                player: o.contentPlayer
            });
            t(f).on("start", function(e) {
                a("ad"), u.sendVideoAdImpression("preroll", e.currentTarget.adsLoader.provider)
            }), t(f).on("contentResumeRequested adError", function() {
                a("adcompleted"), o.setSrc(n), o.preloadContent(function() {
                    try {
                        o.play()
                    } catch (e) {}
                })
            }), f.initialize().then(function() {
                ~window.location.href.indexOf("errortest") && e.deployFlavor !== "production" && e.deployFlavor !== "beta" ? f.requestAds("invalid_ad_url") : ~window.location.href.indexOf("twitchtest") ? (f.requestAds(e.ads.hls.getAdTagUrl({
                    provider: "test"
                }), "test"), u.sendVideoAdOpportunity("preroll", "test")) : (f.requestAds(e.ads.hls.getAdTagUrl({
                    provider: "twitch",
                    platform: "html5",
                    channel: o.options.channel || "",
                    game: o.options.game || "",
                    referrer: document.referrer
                }), "twitch"), u.sendVideoAdOpportunity("preroll", "twitch"))
            }), console.info("HTML5Player.init success"), r()
        }, function() {
            o._onlineStatus = "offline", t(".js-message").show().text("OFFLINE"), o.$contentPlayer.removeAttr("poster"), console.info("HTML5Player.init success (offline)"), r()
        })
    }, n.prototype.destroy = function() {}, n.prototype.preloadContent = function(e) {
        this.isMobilePlatform() ? (this.contentPlayer.addEventListener("loadedmetadata", e, !1), this.contentPlayer.load()) : (this.contentPlayer.load(), e())
    }, n.prototype.play = function() {
        this.contentPlayer.play(), this.eventController.trackVideoPlaying(this)
    }, n.prototype.pause = function() {
        this.contentPlayer.pause()
    }, n.prototype.isMobilePlatform = function() {
        return this.contentPlayer.paused && (navigator.userAgent.match(/(iPod|iPhone|iPad)/) || navigator.userAgent.toLowerCase().indexOf("android") > -1)
    }, n.prototype.getVideoPlayer = function() {
        return this.contentPlayer
    }, n.prototype.registerVideoEndedCallback = function(e) {
        this.contentPlayer.addEventListener("ended", e, !1)
    }, n.prototype.unregisterVideoEndedCallback = function(e) {
        this.contentPlayer.removeEventListener("ended", e, !1)
    }, n.prototype.onlineStatus = function() {
        return this._onlineStatus
    }, n.prototype.on = function(e, n) {
        t(this).on(e, n)
    }, n.prototype.off = function(e, n) {
        t(this).off(e, n)
    }, n.prototype.mute = function() {
        this.$contentPlayer.prop("muted", !0)
    }, n.prototype.unmute = function() {
        this.$contentPlayer.prop("muted", !1)
    }, n.prototype.setSrc = function(e) {
        this.contentPlayer.src = e
    }, e.player.HTML5Player = n
}(Twitch, jQuery),
function(e, t) {
    var n = {},
        r = "3576121",
        i = window.location.toString(),
        s = "Deprecation warning: use the asynchronous Twitch.asyncAds.ready(..)",
        o = function() {
            console.debug(s)
        },
        u = function(e, t) {
            var n, r = Object.keys(t);
            for (var i = 0, s = r.length; i < s; i++) n = r[i], e = e.replace("{{" + n + "}}", encodeURIComponent(t[n]));
            return e
        };
    n.ready = function(t) {
        var r = new RSVP.Promise(function(t) {
            e.user(function(e) {
                t(_.pick(e, "has_turbo"))
            }, function() {
                t(!1)
            })
        });
        RSVP.all([r, e.geo]).then(function(e) {
            var r = e[0],
                i = e[1].geo,
                s = !r || !r.has_turbo;
            t(n._readyData = {
                geo: i,
                enabled: s
            })
        })
    }, n.enabled = function() {
        return n._readyData ? n._readyData.enabled : (o(), !PP.turbo)
    }, n.fetchAll = function() {
        e.ads.enabled() && googletag.cmd.push(function() {
            googletag.pubads().refresh()
        })
    };
    var a = [];
    n.pushGoogleTag = function(r, i, s) {
        a.push(function() {
            var o = e.ads.dfpSlotPath(n.dfpSlotName()),
                u = r + "_holder";
            googletag.pubads().setTargeting("pagetype", n.dfpPageType()), googletag.defineSlot(o, i, u).addService(googletag.pubads()), googletag.cmd.push(function() {
                googletag.pubads().setTargeting("salt", window.location.protocol === "https:" ? "true" : "false"), googletag.display(r + "_holder")
            }), s && t("#" + r + "_holder").hide()
        })
    }, n.registerGoogleTags = function() {
        a.forEach(function(e) {
            googletag.cmd.push(e)
        })
    }, n.slotName = function(e) {
        return "Twitch_" + e
    };
    var f = {};
    f.leader = function(n) {
        if (!e.ads.enabled()) return;
        e.ads.enabled() && e.ads.pushGoogleTag(n, [
            [970, 66],
            [728, 90]
        ]), e.asyncAds.ready(function() {
            t(".ad_leader").addClass("dfp")
        })
    }, f.pushdown = function(n) {
        e.ads.enabled() && e.ads.pushGoogleTag(n, [
            [970, 418],
            [970, 67],
            [970, 250],
            [970, 150],
            [980, 250]
        ], !0), e.asyncAds.ready(function() {
            t(".fp_opa_pushdown").addClass("dfp")
        })
    }, f.rectangle = function(n) {
        if (!e.ads.enabled()) {
            t(".advertisement").hide(), t(".ad_contain").hide();
            return
        }
        var r = function() {
            window.SitePageType === "directory" && (t(".ad_contain .advertisement").show(), t("#" + n + "_holder .adFrame").css("height", "250px"), t(".ad_contain").show())
        };
        e.ads.enabled() && e.ads.pushGoogleTag(n, [
            [300, 250],
            [300, 600],
            [250, 600]
        ])
    }, f.siteskin = function(t) {
        e.ads.enabled() && e.ads.pushGoogleTag(t, [1, 1], !0)
    }, n.prepareAd = function(t, n) {
        var r = e.ads.slotName(t);
        f[n] && f[n](r)
    }, n.hls = {
        formatGame: function(e) {
            return (e || "").toLowerCase().replace(/[^a-z0-9]+/g, "_")
        },
        stripAmpEq: function(e) {
            return e.replace(/[&=]/g, "")
        },
        getAdTagUrl: function(t) {
            var n, i;
            switch (t.provider) {
                case "twitch":
                    return n = "http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&ad_rule=0&gdfp_req=1&iu=/{{dfpNetworkCode}}/twitch/channels/{{channel}}&ciu_szs=300x250&url={{referrer}}&correlator={{timestamp}}&env=vp&unviewed_position_start=1&output=xml_vast3&cust_params={{custom}}", i = "chan={{channel}}&timebreak=30&game={{game}}&platform={{platform}}&mature=true&pos=pre", u(n, {
                        channel: t.channel,
                        referrer: t.referrer,
                        timestamp: (new Date).getTime(),
                        dfpNetworkCode: r,
                        custom: u(i, {
                            channel: e.ads.hls.stripAmpEq(t.channel),
                            game: e.ads.hls.formatGame(t.game),
                            platform: t.platform ? e.ads.hls.stripAmpEq(t.platform) : "html5"
                        })
                    });
                case "test":
                    return "http://pubads.g.doubleclick.net/gampad/ads?sz=400x300&iu=%2F6062%2Fiab_vast_samples&ciu_szs=300x250%2C728x90&impl=s&gdfp_req=1&env=vp&output=xml_vast3&unviewed_position_start=1&url=[referrer_url]&correlator=[timestamp]&cust_params=iab_vast_samples%3Dlinear"
            }
        }
    }, n.dfpPageType = function() {
        switch (window.SitePageType) {
            case "front_page":
                return "homepage";
            case "search":
                return "search";
            default:
                return console.error("TWITCH: Set a DFP page type"), ""
        }
    }, n.dfpSlotPath = function(e) {
        return "/" + r + "/twitch/" + e
    }, n.dfpSlotName = function() {
        switch (window.SitePageType) {
            case "front_page":
                return "homepage";
            case "search":
                return "directory";
            default:
                return console.error("TWITCH: Set a DFP page type"), ""
        }
    }, n.dfpNetworkCode = r, e.mixin({
        ads: n
    })
}(Twitch, jQuery),
function(e, t) {
    var n = {};
    n.mutePlayer = function() {
        e.player.ready(function(e) {
            e.mute()
        })
    }, n.unmutePlayer = function() {
        e.player.ready(function(e) {
            e.unmute()
        })
    }, e.ads.ext = n
}(Twitch, jQuery),
function(e, t) {
    var n = {
        enabled: !1
    };
    n.ready = e.ads.ready, n.enable = function() {
        this.enabled = !0
    }, n.megatag = function() {
        return this._megatagPromise || (this._megatagPromise = new RSVP.Promise(function(e) {
            t.getScript("/javascripts/libs/megatag.js", function() {
                typeof adnxs != "undefined" && e(adnxs.megatag)
            })
        })), this._megatagPromise
    }, n.metadata = {
        game: "",
        dfpPageType: "",
        campaign: "",
        kuid: ""
    }, n.setMetadata = function(t, n) {
        switch (t) {
            case "game":
                n = (n || "").replace(/[^A-Za-z0-9]+/g, "_"), e.asyncAds.metadata.game = n;
                break;
            case "chan":
                e.asyncAds.metadata.chan = n;
                break;
            case "dfpPageType":
                e.asyncAds.metadata.pagetype = n;
                break;
            case "campaign":
                e.asyncAds.metadata.campaign = n;
                break;
            case "kuid":
                e.asyncAds.metadata.kuid = n
        }
    };
    var r = _.memoize(function() {
        return {
            "dfp-directory-banner": {
                sizes: [
                    [970, 66],
                    [728, 90],
                    [970, 250]
                ],
                unitName: "/" + e.ads.dfpNetworkCode + "/twitch/directory"
            },
            "dfp-directory-rectangle": {
                sizes: [
                    [300, 250]
                ],
                unitName: "/" + e.ads.dfpNetworkCode + "/twitch/directory"
            },
            google_companion_300x60: {
                sizes: [
                    [300, 60]
                ],
                unitName: "/" + e.ads.dfpNetworkCode + "/twitch/channels"
            },
            google_companion_300x250: {
                sizes: [
                    [300, 250]
                ],
                unitName: "/" + e.ads.dfpNetworkCode + "/twitch/channels"
            },
            "dfp-channel-adlight": {
                sizes: [
                    [239, 80]
                ],
                unitName: "/" + e.ads.dfpNetworkCode + "/twitch/ad_light"
            }
        }
    });
    n.fetchAds = function(n) {
        var r = e.ads._readyData;
        if (this.enabled && r && r.enabled) {
            t("#dfp-directory-banner, .ad_contain").hide();
            var i = ["dfp-directory-banner"];
            (!n || !n.singleOnly) && i.push("dfp-directory-rectangle"), e.asyncAds.sra({
                slots: i
            }).then(function(e) {
                e[0] && t("#dfp-directory-banner").show(), e[1] && t(".ad_contain").show().attr("style", "display: block !important")
            })
        }
    }, n.resetGoogletag = function() {
        if (googletag) {
            googletag.destroySlots();
            var e = googletag.pubads();
            e.getTargetingKeys().forEach(function(t) {
                e.clearTargeting(t)
            })
        }
        return RSVP.resolve()
    }, n.prepareCompanionAds = function(t) {
        return new RSVP.Promise(function(i, s) {
            e.ads.ready(function(e) {
                n.enabled && e && e.enabled ? n.resetGoogletag().then(function() {
                    var e = r();
                    googletag.cmd.push(function() {
                        t.slots.forEach(function(t) {
                            googletag.defineSlot(e[t].unitName, e[t].sizes, t).addService(googletag.companionAds())
                        }), SiteOptions.dfp_sidebar_channel_ad && googletag.defineSlot(e["dfp-channel-adlight"].unitName, e["dfp-channel-adlight"].sizes, "dfp-channel-adlight").addService(googletag.pubads()), googletag.pubads().collapseEmptyDivs(), googletag.enableServices()
                    }), i()
                }, i) : i()
            })
        })
    }, n.displayAdLight = function() {
        googletag.cmd.push(function() {
            googletag.pubads().clearTargeting(), googletag.pubads().setTargeting("game", e.asyncAds.metadata.game), googletag.pubads().setTargeting("chan", e.asyncAds.metadata.chan), googletag.pubads().setTargeting("pagetype", e.asyncAds.metadata.pagetype), googletag.pubads().setTargeting("campaign", e.asyncAds.metadata.campaign), googletag.pubads().setTargeting("kuid", e.asyncAds.metadata.kuid), googletag.pubads().setTargeting("server", e.deployFlavor), googletag.pubads().setTargeting("salt", window.location.protocol === "https:" ? "true" : "false"), googletag.display("dfp-channel-adlight")
        })
    }, n.afterCompanionAdsRendered = function(e) {
        t(".js-new-channel-ad").length && (e === "google" && (t(".new_advertisement").hide(), t("#lr_comp_300x250").hide(), t("#google_companion_300x60").hide(), t("#google_companion_300x250").hide(), t("#google_companion_300x250").is(":empty") ? t("#google_companion_300x60").show() : t("#google_companion_300x250").show()), t(".js-ad-actions").show(), t(".new_advertisement").show(), setTimeout(function() {
            var e = t(".js-new-channel-ad").outerHeight();
            t(".js-rightcol-content").css("top", e)
        }))
    }, n.sra = function(i) {
        var s = function() {
                this.slots && this.slots.forEach(function(e) {
                    e.el && e.el.empty()
                });
                var e = this,
                    t = this.slots = [];
                return function(n) {
                    return function() {
                        if (t === e.slots) return n.apply(this, arguments)
                    }
                }
            },
            o = function() {
                if (googletag.debug_log._events) return googletag.debug_log._events;
                var e = googletag.debug_log.log,
                    t = RSVP.EventTarget.mixin({});
                return googletag.debug_log.log = function(n, r, i, s, o) {
                    return r.getMessageId() === 6 && t.trigger("gpt-slot_rendered"), e.apply(this, arguments)
                }, googletag.debug_log._events = t, t
            },
            u = function(i) {
                var u = this,
                    a = s();
                return new RSVP.Promise(function(s, f) {
                    n.resetGoogletag().then(a(function() {
                        var n = r();
                        googletag.cmd.push(function() {
                            i.slots.forEach(function(e) {
                                u.slots.push({
                                    id: e,
                                    el: t("#" + e)
                                }), googletag.defineSlot(n[e].unitName, n[e].sizes, e).addService(googletag.pubads())
                            }), o().on("gpt-slot_rendered", _.after(i.slots.length, function() {
                                s(_.map(u.slots, function(e) {
                                    return e.el.css("display") !== "none"
                                }))
                            })), googletag.pubads().clearTargeting(), googletag.pubads().setTargeting("game", e.asyncAds.metadata.game), googletag.pubads().setTargeting("pagetype", e.asyncAds.metadata.pagetype), googletag.pubads().setTargeting("campaign", e.asyncAds.metadata.campaign), googletag.pubads().setTargeting("kuid", e.asyncAds.metadata.kuid), googletag.pubads().setTargeting("server", e.deployFlavor), googletag.pubads().setTargeting("salt", window.location.protocol === "https:" ? "true" : "false"), googletag.pubads().enableSingleRequest(), googletag.pubads().collapseEmptyDivs(), googletag.enableServices(), _.each(i.slots, function(e) {
                                googletag.display(e)
                            })
                        })
                    }), f)
                })
            };
        return u(i)
    }, e.mixin({
        asyncAds: n
    })
}(Twitch, jQuery),
function(e, t) {
    var n = function(n, r) {
            if (!SiteOptions[n.optionName]) return;
            var i = function(t, n, r, i) {
                    var s = ich[t](r);
                    i.prepend(s), !n || s.find(".js-dismiss-banner#" + t).on("click", function() {
                        s.hide(), e.storage.set(r.dismissKey, !0)
                    })
                },
                s = function(n, r, s, o, u, a, f, l, c, h) {
                    var p = {},
                        d = "",
                        v = !1,
                        m = !1,
                        g = !1,
                        y = !1,
                        b = r[o];
                    a.actionRequired && (m = a.actionRequired.indexOf(b) > -1), a.success && (g = a.success.indexOf(b) > -1), a.pending && (y = a.pending.indexOf(b) > -1), g ? (d = l.success, v = !e.storage.get(d), p.showDismissButton = !0, p.showActionButton = !0) : y ? (d = l.pending, v = !e.storage.get(d), p.showDismissButton = !0) : m && (p.actionRequired = m, p.showActionButton = !0, v = !0), !v && c && !s.payable && (v = !0), v && f && t.each(f, function(e, n) {
                        t.inArray(r[n.attribute], n.states) < 0 && (v = !1)
                    }), v && (e.storage.del(d), p[r.partner_state] = !0, p[b] = !0, p.login = n, p.dismissKey = d, i(u, l, p, h))
                };
            e.user().then(function(e) {
                return e.login
            }).then(function(t) {
                return results = {
                    payoutEntity: e.api.get("/api/channels/" + t + "/payout_entity"),
                    login: t
                }, n.activeProductOnly && (results.product = e.api.get("/api/channels/" + t + "/product")), RSVP.hash(results)
            }).then(function(t) {
                return t.payoutEntity && n.shouldCheckPayable && (t.isPayable = e.api.get("/api/payouts/is_payee_payable")), RSVP.hash(t)
            }).then(function(e) {
                var t = e.payoutEntity;
                if (!t.partner_state || t.caller_id !== t.owner_id) return;
                if (n.activeProductOnly && !e.product) return;
                s(e.login, t, e.isPayable, n.attribute, n.bannerName, n.states, n.requiredStates, n.dismissKeys, n.shouldCheckPayable, r)
            }, function(e) {
                if (e && e.status === 401) return;
                throw e
            })
        },
        r = ["start", "failed", "missing", "no_form", "requires_substantiation"],
        i = ["pending", "substantiation_pending"],
        s = ["success"],
        o = {
            newBanner: n,
            serviceTaxOptions: {
                bannerName: "service_tax_banner",
                optionName: "tax_notifications_enabled",
                attribute: "service_tax_state",
                states: {
                    actionRequired: r,
                    pending: i,
                    success: s
                },
                dismissKeys: {
                    pending: "Twitch.tax.pendingServiceBannerDismissed",
                    success: "Twitch.tax.successServiceBannerDismissed"
                }
            },
            royaltyTaxOptions: {
                bannerName: "royalty_tax_banner",
                optionName: "tax_notifications_enabled",
                attribute: "royalty_tax_state",
                states: {
                    actionRequired: r
                },
                requiredStates: [{
                    attribute: "individual_partner",
                    states: [!0]
                }],
                shouldCheckPayable: !0
            },
            paymentAmendmentOptions: {
                bannerName: "payment_amendment_banner",
                optionName: "payment_amendment_notifications_enabled",
                activeProductOnly: !0,
                attribute: "net_payment_amendment",
                states: {
                    actionRequired: ["unsigned"]
                }
            },
            internationalPaymentsOptions: {
                bannerName: "international_payments_banner",
                optionName: "international_payments_notifications_enabled",
                activeProductOnly: !0,
                attribute: "accept_international_payments",
                states: {
                    actionRequired: [!1]
                },
                requiredStates: [{
                    attribute: "net_payment_amendment",
                    states: ["accepted_by_default", "signed"]
                }]
            }
        };
    e.mixin({
        banners: o
    })
}(Twitch, jQuery),
function(e, t) {
    var n = {};
    n.write = function(t, n, r) {
        r = r || {};
        var t = "TwitchCache:" + t;
        e.storage.setObject(t, {
            resource: n,
            expiration: r.milliseconds,
            time: (new Date).getTime(),
            version: r.version,
            restrict: r.restrict
        }, _.pick(r, "storage"))
    }, n.read = function(t, n) {
        n = n || {};
        var t = "TwitchCache:" + t,
            r = e.storage.getObject(t, _.pick(n, "storage"));
        return r ? r.expiration && (new Date).getTime() - r.time > r.expiration || n.version !== r.version || !_.isEqual(n.restrict, r.restrict) ? (e.storage.del(t, _.pick(n, "storage")), null) : r.resource : null
    }, e.mixin({
        cache: n
    })
}(window.Twitch, window.jQuery),
function(e, t) {
    var n = {};
    n.infoModal = function(n, r, i, s) {
        s = typeof s != "undefined" ? s : {}, t(r).overlay(n, function() {
            t(i).click(function(e) {
                e.preventDefault(), t(this).trigger("overlay.hide")
            })
        }, e.defaults(s, {
            width: "420px"
        }))
    }, e.mixin({
        dashboard: n
    })
}(Twitch, jQuery),
function(e, t) {
    var n = function(e, t) {
            return t -= e.toString().length, t > 0 ? (new Array(t + (/\./.test(e) ? 2 : 1))).join("0") + e : e + ""
        },
        r = {
            capitalize: function(e) {
                return e = e || "", e.charAt(0).toUpperCase() + e.slice(1)
            },
            commatize: function(e) {
                return e = e || 0, isNaN(e) ? e : e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            },
            getTime: function(e) {
                var t = n(e.getMinutes(), 2),
                    r = e.getHours();
                return r > 12 ? r -= 12 : r === 0 && (r = 12), r + ":" + t
            },
            lengthAsClock: function(e) {
                var t = Math.floor(e % 60),
                    r = Math.floor(e % 3600 / 60),
                    i = Math.floor(e / 3600);
                return i ? i + ":" + n(r, 2) + ":" + n(t, 2) : r + ":" + n(t, 2)
            },
            clockAsLength: function(e) {
                var t = e.split(":"),
                    n = parseInt(t[t.length - 1], 10),
                    r = parseInt(t[t.length - 2], 10),
                    i = 0;
                return t.length > 2 && (i = parseInt(t[t.length - 3], 10)), n + 60 * r + 3600 * i
            },
            escape: function(e) {
                return t("<div/>").text(e).html()
            }
        };
    e.mixin({
        display: r
    })
}(Twitch, jQuery),
function(e, t) {
    var n = {};
    n.init = function(t) {
        this.config = e.defaults(t, {
            forgetDuration: t.forgetDuration,
            delay: t.delay
        });
        var n = Number.POSITIVE_INFINITY,
            r = parseInt(e.storage.get("requestUserEmail"), 10);
        isNaN(r) || (n = +(new Date) - r), n > this.config.forgetDuration * 1e3 && setTimeout(e.emailNotifier.requestUserEmail, this.config.delay * 1e3)
    }, n.requestUserEmail = function() {
        var t = {
            timeout: 2e4,
            escape: !1
        };
        e.storage.set("requestUserEmail", +(new Date)), e.api.get("user").done(function(n) {
            var r = URI(window.location.href).path();
            !n.email && r !== "/settings" && (e.tracking.mixpanel.trackEvent("email_notice", {
                type: "display"
            }), e.notify('Welcome to Twitch! <a href="/settings?type=email_notice">Please click here to verify your email! </a>', t))
        })
    }, e.mixin({
        emailNotifier: n
    })
}(Twitch, jQuery),
function(e) {
    var t, n, r = new RSVP.Promise(function(t, n) {
        e.api.on("ready", function() {
            e.api.get("/api/viewer/info.json").done(function(n) {
                e.preferredLanguage = n.preferred_language, e.receivedLanguage = n.received_language;
                var r = cookie.get("language");
                r === undefined ? e.language.setCookieAndReload(e.receivedLanguage) : n.login && r !== n.user_language && e.language.setByAsyncPut(r), n.eu && window.euCookieNotification(), e.tracking.spadeAndMixpanel.trackEvent("prime_web_geo_data", {
                    platform: "web",
                    geo: n.geo,
                    ip: n.ip
                }), t(n)
            }).fail(function(e) {
                n({
                    status: e.status
                })
            })
        })
    });
    e.mixin({
        geo: r,
        receivedLanguage: n,
        preferredLanguage: t
    })
}(window.Twitch),
function(e, t) {
    var n = "/api/channels/{{channel}}/access_token",
        r = "//usher.ttvnw.net/api/channel/hls/{{channel}}.m3u8?token={{{token}}}&sig={{{sig}}}",
        i = {};
    i.getPlaylist = function(t) {
        return new RSVP.Promise(function(i, s) {
            if (!t || !t.length) return s();
            e.api.get(n.replace("{{channel}}", encodeURIComponent(t))).then(function(e) {
                e.token && e.sig ? i(r.replace("{{channel}}", encodeURIComponent(t)).replace("{{{token}}}", e.token).replace("{{{sig}}}", e.sig)) : s()
            }, s)
        })
    }, e.mixin({
        hls: i
    })
}(Twitch, jQuery),
function(e, t) {
    var n = {};
    n.setCookieAndReload = function(t) {
        var n = cookie.get("language") || "en",
            r;
        e.language.setCookie(t), r = !!cookie.get("language"), n !== t && r && location.reload()
    }, n.setCookie = function(e) {
        cookie.set("language", e, {
            domain: "." + document.domain,
            expires: 3650
        })
    }, n.setByAsyncPut = function(t) {
        if (e.user.isLoggedIn()) return e.api.put("/api/users/" + e.user.login() + "/language", {
            lang: t
        })
    }, e.mixin({
        language: n
    })
}(Twitch, jQuery),
function(e, t) {
    var n = [],
        r = function(e, t) {
            return this._actions[e] = this._actions[e] || [], this._actions[e].push(t), this
        },
        i = function(e) {
            if (this._actions[e])
                for (var n = 0, r = this._actions[e].length; n < r; n++) this._actions[e][n](t);
            return this
        };
    e.mixin({
        _actions: n,
        action: r,
        run: i
    })
}(Twitch, jQuery),
function(e, t) {
    t(document).on("click", "a.js-logout_link", function(n) {
        n.preventDefault(), e.user(function(e) {
            var n = t("<input>").attr({
                type: "hidden",
                name: "authenticity_token",
                value: e.csrf_token
            });
            t("#logout_form").append(n).submit()
        }, function() {
            t("#logout_form").submit()
        })
    })
}(Twitch, jQuery),
function(e, t) {
    var n = {
            layout: "top",
            template: '<div class="noty_message"><div class="text-container"><div class="glitch"></div><div class="noty_text"></div></div><div class="noty_close"><svg class="svg-close_small" height="16px" version="1.1" viewbox="0 0 16 16" width="16px" x="0px" y="0px"><path clip-rule="evenodd" d="M12.657,4.757L9.414,8l3.243,3.242l-1.415,1.415L8,9.414l-3.243,3.243l-1.414-1.415L6.586,8L3.343,4.757l1.414-1.414L8,6.586l3.242-3.243L12.657,4.757z" fill-rule="evenodd"></path></svg></div></div>',
            dismissQueue: !0,
            animation: {
                open: {
                    height: "toggle"
                },
                close: {
                    height: "toggle"
                },
                easing: "linear",
                speed: 200
            },
            timeout: 4e3,
            closeWith: ["button"]
        },
        r = function(e, t, n) {
            r.alert.apply(r, arguments)
        };
    r._dispatch = function(t, r, i, s) {
        i = i || {}, typeof i == "function" && (s = i, i = {});
        var o = e.defaults({
            type: t,
            text: r,
            callback: {
                onClose: s || !1
            }
        }, i, n);
        return o.escape && (o.text = e.display.escape(r)), noty(o)
    }, r.alert = function(
        e, t, n) {
        return r._dispatch("alert", e, t, n)
    }, r.notice = function(e, t, n) {
        return r._dispatch("notice", e, t, n)
    }, r.success = function(e, t, n) {
        return r._dispatch("success", e, t, n)
    }, r.error = function(e, t, n) {
        return r._dispatch("error", e, t, n)
    }, r.flash = function(e, n) {
        var i = t("#header_notification"),
            s = i.find(".flash-error"),
            o = i.find(".flash-success"),
            u = i.find(".flash-notice");
        if (s.length) return r.error(s.text(), e, n);
        if (o.length) return r.success(o.text(), e, n);
        if (u.length) return r.alert(u.text(), e, n)
    }, e.mixin({
        notify: r
    })
}(Twitch, jQuery), window.sp_cid = "qFEaZsFQnwEdUIs",
    function(e, t) {
        var n = "//d2lv4zbk7v5f93.cloudfront.net/esf.js",
            r = new RSVP.Promise(function(e, r) {
                t.getScript(n).fail(function(e, t, n) {
                    r()
                }), document.addEventListener("sp.blocking", function() {
                    e(!0)
                }), document.addEventListener("sp.not_blocking", function() {
                    e(!1)
                })
            }),
            i = {
                detect: r,
                pageTransition: function() {
                    window._sp_ && window._sp_.pageChange && window._sp_.pageChange()
                }
            };
        e.mixin({
            sentinel: i
        })
    }(Twitch, jQuery),
    function(e, t) {
        var n = {};
        n.setup = function(e, n) {
            var r = function(e) {
                    t.loggedInAjax({
                        url: n,
                        success: function(n, r, i) {
                            var s = {};
                            n.forEach(function(e) {
                                s[e.label] = {
                                    identifier: e.identifier,
                                    groupings: e.groupings,
                                    resolutions: e.resolutions
                                }
                            });
                            var o = t.makeArray(t(n).map(function(e, t) {
                                return t.label
                            })).sort();
                            e(null, s, o)
                        }
                    })
                },
                i = function() {
                    var e = [{
                            identifier: "none",
                            label: i18n("None")
                        }, {
                            identifier: "url",
                            label: i18n("URL")
                        }, {
                            identifier: "player",
                            label: i18n("Player Type")
                        }, {
                            identifier: "geo",
                            label: i18n("Geo")
                        }, {
                            identifier: "live",
                            label: i18n("Live / Archive")
                        }, {
                            identifier: "host_channel",
                            label: i18n("Host")
                        }],
                        n = {};
                    e.forEach(function(e) {
                        n[e.label] = e.identifier
                    });
                    var r = t.makeArray(t(e).map(function(e, t) {
                            return t.label
                        })),
                        i = {
                            getIdentifier: function(e) {
                                return n[e]
                            },
                            createArray: function(e) {
                                var i = r.filter(function(r) {
                                    return n[r] === "none" ? !0 : t.inArray(n[r], e) !== -1
                                });
                                return i
                            }
                        };
                    return i
                }(),
                s = function() {
                    var e = [{
                            identifier: "hour",
                            label: i18n("Hourly Resolution")
                        }, {
                            identifier: "day",
                            label: i18n("Daily Resolution")
                        }],
                        n = {};
                    e.forEach(function(e) {
                        n[e.label] = e.identifier
                    });
                    var r = t.makeArray(t(e).map(function(e, t) {
                            return t.label
                        })),
                        i = {
                            getIdentifier: function(e) {
                                return n[e]
                            },
                            resolutionsArray: r,
                            defaultResolution: _.find(e, function(e) {
                                return e.identifier === "hour"
                            }).label
                        };
                    return i
                }();
            if (typeof Array.prototype.forEach != "function" || typeof Array.prototype.filter != "function") {
                t("#chart_container").text(i18n("Sorry, your browser is incompatible with Twitch stats. Please use a recent version of Google Chrome or Mozilla Firefox"));
                return
            }
            t("#date_selector #prev").addClass("disabled"), t("#date_selector > select#month").change(function(n) {
                var r = t("#date_selector > select#month option:selected"),
                    i = t("#date_selector #prev"),
                    s = t("#date_selector #next");
                r.next().length ? r.prev().length ? (i.removeClass("disabled"), s.removeClass("disabled")) : (i.addClass("disabled"), s.removeClass("disabled")) : (i.removeClass("disabled"), s.addClass("disabled")), e.month(t(this).find(":selected").val()), e.reload()
            }), t("#date_selector #prev, #next").click(function(e) {
                var n = t("#date_selector > select#month option:selected");
                this.id === "prev" ? n = n.prev() : n = n.next(), n.length && t("#date_selector > select#month").val(n.val()).change()
            }), r(function(n, r, o) {
                var u = t("#stat_selector").autocomplete({
                        source: o,
                        delay: 0,
                        minLength: 0
                    }),
                    a = t("#grouping_selector").autocomplete({
                        delay: 0,
                        minLength: 0
                    }),
                    f = t("#resolution_selector").autocomplete({
                        delay: 0,
                        minLength: 0,
                        source: s.resolutionsArray
                    });
                f.val(s.defaultResolution);
                var l = function(n) {
                    var s = i.createArray(r[n].groupings);
                    a.autocomplete("option", "source", s), t.inArray(e.grouping(), s) === -1 && (e.grouping("none"), a.val("")), s.length === 1 ? a.attr("disabled", !0) : a.removeAttr("disabled"), e.load(r[n].identifier)
                };
                [u, a, f].forEach(function(e) {
                    e.bind("focus", function(e) {
                        t(this).autocomplete("search", "")
                    })
                }), u.bind("autocompleteselect", function(e, n) {
                    l(n.item.value), t(this).blur()
                }), f.bind("autocompleteselect", function(n, r) {
                    var i = s.getIdentifier(r.item.value);
                    e.resolution(i).reload(), t(this).blur()
                }), a.bind("autocompleteselect", function(n, r) {
                    var s = i.getIdentifier(r.item.value);
                    s === "none" && (t(this).val(""), n.preventDefault()), e.grouping(s).reload(), t(this).blur()
                });
                var c = i18n("Video Plays");
                u.val(c), l(c)
            })
        }, e.mixin({
            stats: n
        })
    }(Twitch, jQuery);
var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(e) {
        var t = "",
            n, r, i, s, o, u, a, f = 0;
        e = Base64._utf8_encode(e);
        while (f < e.length) n = e.charCodeAt(f++), r = e.charCodeAt(f++), i = e.charCodeAt(f++), s = n >> 2, o = (n & 3) << 4 | r >> 4, u = (r & 15) << 2 | i >> 6, a = i & 63, isNaN(r) ? u = a = 64 : isNaN(i) && (a = 64), t = t + Base64._keyStr.charAt(s) + Base64._keyStr.charAt(o) + Base64._keyStr.charAt(u) + Base64._keyStr.charAt(a);
        return t
    },
    decode: function(e) {
        var t = "",
            n, r, i, s, o, u, a, f = 0;
        e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (f < e.length) s = Base64._keyStr.indexOf(e.charAt(f++)), o = Base64._keyStr.indexOf(e.charAt(f++)), u = Base64._keyStr.indexOf(e.charAt(f++)), a = Base64._keyStr.indexOf(e.charAt(f++)), n = s << 2 | o >> 4, r = (o & 15) << 4 | u >> 2, i = (u & 3) << 6 | a, t += String.fromCharCode(n), u != 64 && (t += String.fromCharCode(r)), a != 64 && (t += String.fromCharCode(i));
        return t = Base64._utf8_decode(t), t
    },
    _utf8_encode: function(e) {
        e = e.replace(/\r\n/g, "\n");
        var t = "";
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(r & 63 | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(r & 63 | 128))
        }
        return t
    },
    _utf8_decode: function(e) {
        var t = "",
            n = 0,
            r = c1 = c2 = 0;
        while (n < e.length) r = e.charCodeAt(n), r < 128 ? (t += String.fromCharCode(r), n++) : r > 191 && r < 224 ? (c2 = e.charCodeAt(n + 1), t += String.fromCharCode((r & 31) << 6 | c2 & 63), n += 2) : (c2 = e.charCodeAt(n + 1), c3 = e.charCodeAt(n + 2), t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63), n += 3);
        return t
    }
};
(function(e, t) {
    if (!t.__SV) {
        var n, r, i, s;
        window.mixpanel = t, n = e.createElement("script"), n.type = "text/javascript", n.async = !0, n.src = ("https:" === e.location.protocol ? "https:" : "http:") + "//cdn.mxpnl.com/libs/mixpanel-2.2.min.js", r = e.getElementsByTagName("script")[0], r.parentNode.insertBefore(n, r), t._i = [], t.init = function(e, n, r) {
            function o(e, t) {
                var n = t.split(".");
                2 == n.length && (e = e[n[0]], t = n[1]), e[t] = function() {
                    e.push([t].concat(Array.prototype.slice.call(arguments, 0)))
                }
            }
            var u = t;
            "undefined" != typeof r ? u = t[r] = [] : r = "mixpanel", u.people = u.people || [], u.toString = function(e) {
                var t = "mixpanel";
                return "mixpanel" !== r && (t += "." + r), e || (t += " (stub)"), t
            }, u.people.toString = function() {
                return u.toString(1) + ".people (stub)"
            }, i = "disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.track_charge people.clear_charges people.delete_user".split(" ");
            for (s = 0; s < i.length; s++) o(u, i[s]);
            t._i.push([e, n, r])
        }, t.__SV = 1.2
    }
})(document, window.mixpanel || []), mixpanel.init(SiteOptions.mixpanel_token),
    function(e) {
        var t = {};
        t.track = function(t, n) {
            var r = function(t) {
                var n = document.createElement("script");
                n.type = "text/javascript", n.async = !0;
                var r = "https:" === document.location.protocol ? "https:" : "http:";
                n.src = r + "//spade.twitch.tv/?data=" + t;
                var i = document.getElementsByTagName("script")[0];
                i.parentNode.insertBefore(n, i);
                var s = 5e3;
                setTimeout(function() {
                    e(n).remove()
                }, s)
            };
            setTimeout(function() {
                var e = Base64.encode(JSON.stringify({
                    event: t,
                    properties: n
                }));
                r(e)
            }, 0)
        }, window.spade = t
    }(jQuery), window._gaq = window._gaq || [],
    function(e, t) {
        var n = {},
            r = /Prerender/.test(window.navigator.userAgent),
            i = {
                MIXPANEL: "_mixpanel_",
                SPADE: "_spade_"
            },
            s = function(t, n, s) {
                if (r) return;
                n = n || {}, n.distinct_id || (n.distinct_id = e.idsForMixpanel.getOrCreateUniqueId()), n.device_id = e.idsForMixpanel.getOrCreateUniqueId(), n.tab_session_id = e.idsForMixpanel.getOrCreateSessionStorageUniqueId(), e.geo.then(function(r) {
                    n = _.extend({
                        host: window.document.location.host || "",
                        domain: window.document.domain || "",
                        logged_in: e.user.isLoggedIn(),
                        login: e.user.login(),
                        url: window.document.location.href || "",
                        referrer_host: (new RegExp("^https?://([^/]+)")).exec(window.document.referrer) || "",
                        referrer_url: window.document.referrer || "",
                        preferred_language: r.preferred_language,
                        received_language: r.received_language
                    }, n), s === i.SPADE ? spade.track(t, n) : s === i.MIXPANEL && e.tracking.mixpanel.sendMixpanelBeacon(t, n), e.tracking.log.trackEvent(t, n, s)
                })
            },
            o = function() {
                this.pageViewId = null, this.startTime = null
            };
        o.prototype.start = function() {
            var t = e.idsForMixpanel.getOrCreateUniqueId(),
                n = window.location.href,
                r = (new Date).getTime(),
                i = window.App.__container__.lookup("controller:application").get("currentRouteName");
            this.pageViewId = o._getPageViewId(t);
            var s = {
                device_id: t,
                location: i,
                pageview_id: this.pageViewId,
                time: r / 1e3,
                url: n
            };
            this.startTime = r, e.tracking.spade.trackEvent("pageview_diagnostic_opportunity", s)
        }, o.prototype.end = function() {
            var t = (new Date).getTime();
            e.tracking.spade.trackEvent("pageview_diagnostic_complete", {
                device_id: e.idsForMixpanel.getOrCreateUniqueId(),
                pageview_id: this.pageViewId,
                elapsed: (t - this.startTime) / 1e3,
                time: t / 1e3
            })
        }, o._getPageViewId = function(t) {
            return (new Date).getTime() + "-" + e.idsForMixpanel.createUniqueId(t)
        };
        var u = (new URI).query(!0);
        if (window.history && typeof window.history.replaceState == "function") {
            var a = (new URI).removeQuery(["tt_medium", "tt_content", "tt_content_index", "followed_flow"]);
            window.history.replaceState({}, null, a.toString())
        }
        var f = {};
        n.funnel = {
            trackPageViewWithDiagnostics: function(t) {
                var n = new o;
                return n.start(), t.then(function(t) {
                    e.tracking.funnel.trackPageView(t), n.end()
                })
            },
            data: {
                geo: e.geo,
                user: new RSVP.Promise(function(t) {
                    e.user.isLoggedIn() ? e.user(t, function() {
                        t({})
                    }) : t({})
                }),
                sentinel: e.sentinel.detect.catch(function(e) {
                    return undefined
                })
            },
            addCampaignTracking: function(e) {
                t(e.selector).each(function(n, r) {
                    t(r).attr({
                        "data-tt_medium": e.tt_medium,
                        "data-tt_content": e.tt_content
                    })
                })
            },
            campaignSelector: "*[data-tt_medium], *[data-tt_content]",
            handleCampaignClick: function(r) {
                var i = t(r.target).closest(n.funnel.campaignSelector);
                if (i.length) {
                    var s = parseInt(i.attr("data-tt_content_index")) || undefined,
                        o = {
                            medium: i.attr("data-tt_medium"),
                            content: i.attr("data-tt_content"),
                            content_index: s
                        };
                    if (i.attr("data-ember-action")) e.tracking.funnel.addProperties(o);
                    else if (i.prop("tagName").toLowerCase() === "a") {
                        var u = i.attr("href") || "";
                        i.attr("href", URI(u).addSearch({
                            tt_medium: i.attr("data-tt_medium"),
                            tt_content: i.attr("data-tt_content"),
                            tt_content_index: s
                        }).toString()), e.tracking.funnel.addProperties(o)
                    }
                }
            },
            addProperties: function(e) {
                f = _.extend(f, e)
            },
            pageviewProperties: {},
            trackPageView: function(r) {
                r = r || {};
                var i = new URI,
                    s = r.referrer || document.referrer,
                    o = s ? new URI(s) : {},
                    a = URI.parseQuery(window.location.search).mwcc;
                a && (r.exp_name = "mwcc", r.exp_grp = a), RSVP.hash(this.data).then(function(a) {
                    r = _.defaults(f, r || {}, {
                        session_device_id: e.idsForMixpanel.getOrCreateSessionUniqueId(),
                        localstorage_device_id: e.idsForMixpanel.getOrCreateLocalStorageUniqueId(),
                        app_version: undefined,
                        is_turbo: !!a.user.has_turbo,
                        language: a.geo.received_language,
                        viewport_height: t(window).height(),
                        viewport_width: t(window).width(),
                        collapse_left: undefined,
                        collapse_right: undefined,
                        referrer_host: s ? o.host() : undefined,
                        referrer_domain: s ? o.domain() : undefined,
                        accept_language: undefined,
                        medium: u.tt_medium,
                        content: u.tt_content,
                        content_index: u.tt_content_index ? parseInt(u.tt_content_index) : undefined,
                        time: (new Date).getTime() / 1e3,
                        location: undefined,
                        platform: "web",
                        login: a.user.login,
                        url: i.toString(),
                        host: i.host(),
                        domain: i.domain(),
                        adblock: undefined,
                        sentinel_ab: a.sentinel,
                        browser: navigator.userAgent,
                        page_session_id: e.idsForMixpanel.createUniqueId(),
                        referrer: s || undefined
                    }), u = {}, f = {}, e.tracking.funnel.pageviewProperties = {
                        location: r.location,
                        content: r.content,
                        medium: r.medium,
                        page_session_id: r.page_session_id
                    }, e.tracking.funnel.debugEnabled() && (console.group("Twitch.tracking.funnel.trackPageView"), console.log("event:", "pageview"), console.log("properties:", r), console.groupEnd()), n.spadeAndMixpanel.trackEvent("pageview", r)
                }), l()
            },
            debugEnabled: function(t) {
                var n = "Twitch.tracking.funnel.debugEnabled";
                if (t === undefined) return e.storage.getObject(n) === !0;
                e.storage.setObject(n, t)
            }
        };
        var l = function() {
                var e = 2e3,
                    n = "https://secure-login.twitch.tv/lc",
                    r = h();
                setTimeout(function() {
                    try {
                        for (var e = 0; e < r; e++) t('<img style="display:none;" src="' + n + "?q=" + Math.floor(Math.random() * 1e9) + '" />').prependTo(t("body"))
                    } catch (i) {}
                }, e)
            },
            c = _.memoize(function() {
                return parseFloat(SiteOptions.aws_artificial_load_factor || 0, 10)
            }),
            h = function() {
                var e = c();
                return e <= 1 ? Math.random() < e ? 1 : 0 : Math.ceil(e)
            };
        n.log = {
            getTrackingLog: function() {
                return e.storage.getObject("trackingLog")
            },
            trackEvent: function(t, n, r) {
                var i = e.storage.getObject("trackingLog") || [],
                    s = this.getTrackingLogLength();
                i.length > s && i.shift();
                var o = new Date;
                i.push({
                    event: t,
                    properties: n,
                    createdOn: o,
                    library: r
                }), this.consoleLogging(t, n, r), e.storage.setObject("trackingLog", i)
            },
            consoleLogging: function(t, n, r) {
                e.tracking.log.debugEnabled() && (console.group("Twitch.tracking.log.trackEvent"), console.log("library:", r), console.log("event:", t), console.log("properties:", n), console.groupEnd())
            },
            setTrackingLogLength: function(t) {
                e.storage.setObject("trackingLogLength", t)
            },
            getTrackingLogLength: function() {
                return e.storage.getObject("trackingLogLength") || 5
            },
            debugEnabled: function(t) {
                var n = "Twitch.tracking.log.debugEnabled";
                if (t === undefined) return e.storage.getObject(n) === !0;
                e.storage.setObject(n, t)
            }
        }, t(document).on("click", n.funnel.campaignSelector, n.funnel.handleCampaignClick), n.gaq = {
            trackPageView: function(e) {
                _gaq.push(e ? ["_trackPageview", e] : ["_trackPageview"])
            },
            trackVirtualPageView: function(e) {
                _gaq.push(["_trackPageview", decodeURIComponent(e)])
            },
            trackChannelPageView: function(t, n, r) {
                e.tracking.gaq.trackPageView("/channel/" + escape(t || "") + n + "?game=" + escape(r || ""))
            }
        }, n.spadeAndMixpanel = {
            trackEvent: function(e, t) {
                n.spade.trackEvent(e, t), n.mixpanel.trackEvent(e, t)
            }
        }, n.spade = {
            trackEvent: function(e, t) {
                s(e, t, i.SPADE)
            }
        }, n.mixpanel = {
            trackDiscovery: function() {
                var t = e.storage.get("mp:autocomplete-referrer"),
                    n = URI.parse(document.referrer).hostname;
                t ? (e.tracking.mixpanel.trackEvent("discovery", {
                    action: "autocomplete",
                    autocomplete_type: t
                }), e.storage.del("mp:autocomplete-referrer")) : ["front_page", "directory", "search", "team"].indexOf(window.SitePageType) !== -1 ? e.tracking.mixpanel.trackEvent("discovery", {
                    action: window.SitePageType,
                    game: window.PP && window.PP.channelMetaGame || null
                }) : window.SitePageType === "channel" && window.PP && (e.storage.get("mp:source") || n && !n.match("twitch.tv")) && e.api.get("streams/" + window.PP.channel).done(function(t) {
                    var r = {
                        action: "channel",
                        source: e.storage.get("mp:source") || n,
                        is_live: t.stream != null
                    };
                    e.storage.get("mp:channel-discovery-index") && (r.index = e.storage.get("mp:channel-discovery-index")), e.tracking.mixpanel.trackEvent("discovery", r), e.storage.del("mp:source"), e.storage.del("mp:channel-discovery-index")
                })
            },
            trackGameClick: function() {
                var t = e.storage.get("mp:game-click-name");
                if (t) {
                    var n = {
                        game: t,
                        promoted: e.storage.get("mp:game-promoted"),
                        location: e.storage.get("mp:game-click-location"),
                        index: e.storage.set("mp:game-click-index")
                    };
                    e.tracking.mixpanel.trackEvent("game-directory-click", n), e.storage.del("mp:game-click-name"), e.storage.del("mp:game-promoted"), e.storage.del("mp:game-click-location"), e.storage.del("mp:game-click-index")
                }
            },
            setGameClickVars: function(t) {
                e.storage.set("mp:game-click-name", t.game), e.storage.set("mp:game-click-index", t.index), e.storage.set("mp:game-click-location", t.location), e.storage.set("mp:game-promoted", t.promoted)
            },
            trackEvent: function(t, n) {
                var r;
                switch (t) {
                    case "chat":
                        e.storage.get("chat_sent") != "true" && (e.storage.set("chat_sent", !0), r = _.extend({
                            context: t
                        }, n), s("$born", r, i.MIXPANEL));
                        break;
                    case "video-play":
                        e.storage.get("video_played") != "true" && (e.storage.set("video_played", !0), r = _.extend({
                            context: t
                        }, n), s("$born", r, i.MIXPANEL))
                }
                s(t, n, i.MIXPANEL)
            },
            sendMixpanelBeacon: function(e, n) {
                n = _.extend(n, {
                    token: mixpanel.config.token,
                    time: Date.now(),
                    ip: 1
                });
                var r = {
                        event: e,
                        properties: n
                    },
                    i = "//api.mixpanel.com/track?data=" + Base64.encode(JSON.stringify(r));
                t.ajax({
                    url: i,
                    crossDomain: !0
                })
            }
        }, n.getComscoreScript = _.memoize(function() {
            var e = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
            return t.ajax({
                url: e,
                crossDomain: !0,
                dataType: "script"
            })
        }), n.sendComscoreBeacon = function(t) {
            n.getComscoreScript().then(function() {
                if (typeof COMSCORE != "undefined") {
                    var n = function(e) {
                        return e === null || e === "CXCXCXCX" ? "" : e
                    };
                    COMSCORE.beacon({
                        c1: t.c1,
                        c2: t.c2,
                        c3: t.c3,
                        c4: "",
                        c5: t.c5,
                        c6: "",
                        c15: n(e.storage.legacy.get("psHashedUserId"))
                    })
                }
            })
        }, n.sendGermanBeacons = function() {
            e.geo.then(function(e) {
                function n() {
                    switch (window.SitePageType) {
                        case "directory":
                            return URI().segment(1) === "game" ? "1148gameVIDE" : "1148directory";
                        case "search":
                            return "4201search";
                        case "front_page":
                            return "1101homepage";
                        case "channel":
                        case "video":
                            return "1148publVIDE";
                        case "video_list":
                            return "1148publcont";
                        default:
                            return null
                    }
                }
                if (e.geo !== "DE" && e.received_language !== "de") return;
                var r = n();
                if (!r) return;
                e.geo === "DE" && e.received_language !== "de" && (r += "_multilanguage"), t.getScript("https://script.ioam.de/iam.js", function() {
                    var e = {
                        st: "twitchtv",
                        cp: r,
                        oc: r,
                        mg: "yes",
                        sv: window.SitePageType === "front_page" ? "ke" : "in"
                    };
                    window.iom.c(e, 1)
                })
            })
        };
        var p = "";
        n.didJustLoginAndFollow = function(e) {
            return p === e ? (p = "", !0) : !1
        }, e.mixin({
            tracking: n
        });
        var d = function(e, r) {
            var i = URI.parse(e.url),
                s;
            window.App && window.App.get("currentPath") !== undefined ? s = window.App.get("currentPath") : window.App && window.App.__container__ && (s = window.App.__container__.lookup("service:globals").get("currentPath")), n.spade.trackEvent("api-error", t.extend({
                platform: "web",
                application: s,
                service_host: i.hostname,
                endpoint: i.path,
                error_code: e.jqXHR.status
            }, r))
        };
        e.api.on("fail", d);
        if (u.followed_flow) {
            var v = _.defaults(e.cache.read("LoginAndFollowTrackingData") || {}, {
                platform: "web"
            }, _.pick(u, "followed_flow"));
            p = v.channel, setTimeout(function() {
                n.spadeAndMixpanel.trackEvent("follow", v)
            }), e.cache.write("LoginAndFollowTrackingData", null)
        }
        window.TMI && t(function() {
            TMI.on("api-fail", function(e) {
                d(e, {
                    application: "tmi-client"
                })
            })
        }), _gaq.push(["_setAccount", "UA-23719667-1"], ["_setDomainName", "twitch.tv"], ["_setSampleRate", "1"], ["_setAllowLinker", !0], ["_setCustomVar", 1, "UserType", e.user.isLoggedIn() ? "user" : "visitor", 2], ["_require", "inpage_linkid", "//www.google-analytics.com/plugins/ga/inpage_linkid.js"])
    }(Twitch, jQuery),
    function(e) {
        var t = window.location.protocol + "//" + SiteOptions.api_hostport,
            n = "https://" + SiteOptions.api_hostport,
            r = window.location.protocol + "//" + SiteOptions.streams_api_hostport,
            i = "https://" + SiteOptions.streams_api_hostport;
        Twitch.api.init({
            baseUrl: t,
            baseUrlSecure: n,
            streamsBaseUrl: r,
            streamsBaseUrlSecure: i,
            receiverUrl: t + "/crossdomain/receiver.html?v=2",
            login: Twitch.user.login()
        })
    }(jQuery),
    function(e) {
        "use strict";
        window.euCookieNotification = function() {
            var t = e.storage.get("euCookieDismiss");
            t || e.notify.alert(i18n("This site uses cookies. By continuing to browse the site, you are agreeing to our use of cookies. Review our <a href='/p/cookie-policy'>Cookie Policy</a> for more details."), {
                layout: "bottomCenter",
                timeout: !1,
                escape: !1
            }, function() {
                e.storage.set("euCookieDismiss", "true")
            })
        }
    }(window.Twitch),
    function(e) {
        Twitch.user(function(e) {
            Twitch.storage.set("csrf_token", e.csrf_token)
        }), e.ajaxPrefilter(function(e, t, n) {
            csrf_token = Twitch.storage.get("csrf_token"), !e.crossDomain && csrf_token && n.setRequestHeader("X-CSRF-Token", csrf_token)
        })
    }(jQuery),
    function(e, t) {
        e.forceLogIn = function() {
            window.location = "/user/login?redirect_on_login=" + window.location.pathname + window.location.search
        }, e.loggedInAjax = function(t, n) {
            typeof n == "undefined" ? (n = t, t = null) : n.url = t;
            var r = n.error,
                i = function(t, n, i) {
                    t.status === 403 && e.forceLogIn(), r && r.apply(this, arguments)
                };
            return n.error = i, e.ajax(n)
        }, window.BoxartImage = {
            setPlaceholder: function(e) {
                var t = e.getAttribute("data-placeholder");
                t && e.src !== t && (e.src = t)
            }
        }, e(function() {
            t.notify.flash(), e(".header_nick").popup(e("#self_actions")), e("input[placeholder]").placeholder(), e("#broadcast_login").login({
                mpSourceAction: "broadcast-login-link"
            }), e("#partnersignup_login").login({
                mpSourceAction: "partnersignup-login-link"
            }), e("#header_login").login({
                mpSourceAction: "login-button"
            }), e("#channel_login").login({
                mpSourceAction: "login-button"
            }), e("#partnersignup_signup").signup({
                mpSourceAction: "partnersignup-signup-link"
            }), e("#header_signup").signup({
                mpSourceAction: "signup-button"
            }), e("#left_col #language_select").popup(e("#languages_popup"), {
                side: "right",
                above: !0
            }), e("#site_footer #language_select").popup(e("#languages_popup"), {
                side: "left",
                above: !0
            }), t.user(function(e) {
                t.emailNotifier.init({
                    forgetDuration: 3600,
                    delay: 5
                })
            }, function(e) {
                if (e && e.status === 401) return;
                throw e
            }), t.user.isLoggedIn() || (e("#user_display_name").hide(), e("#user_login").show()), typeof PP != "undefined" && window.SitePageType !== "directory" && (["channel", "video"].indexOf(window.SitePageType) === -1 && t.tracking.gaq.trackPageView(), t.tracking.mixpanel.trackDiscovery())
        })
    }(jQuery, Twitch);