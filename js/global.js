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
}! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = fe.type(e);
        return "function" !== n && !fe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t, n) {
        if (fe.isFunction(t)) return fe.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return fe.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ke.test(t)) return fe.filter(t, e, n);
            t = fe.filter(t, e)
        }
        return fe.grep(e, function(e) {
            return fe.inArray(e, t) > -1 !== n
        })
    }

    function r(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function o(e) {
        var t = {};
        return fe.each(e.match(Ee) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        ie.addEventListener ? (ie.removeEventListener("DOMContentLoaded", a), e.removeEventListener("load", a)) : (ie.detachEvent("onreadystatechange", a), e.detachEvent("onload", a))
    }

    function a() {
        (ie.addEventListener || "load" === e.event.type || "complete" === ie.readyState) && (s(), fe.ready())
    }

    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(Ne, "-$1").toLowerCase();
            if (n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ie.test(n) ? fe.parseJSON(n) : n)
                } catch (e) {}
                fe.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !fe.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function c(e, t, n, i) {
        if (Oe(e)) {
            var r, o, s = fe.expando,
                a = e.nodeType,
                l = a ? fe.cache : e,
                u = a ? e[s] : e[s] && s;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return u || (u = a ? e[s] = ne.pop() || fe.guid++ : s), l[u] || (l[u] = a ? {} : {
                toJSON: fe.noop
            }), "object" != typeof t && "function" != typeof t || (i ? l[u] = fe.extend(l[u], t) : l[u].data = fe.extend(l[u].data, t)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[fe.camelCase(t)] = n), "string" == typeof t ? (r = o[t], null == r && (r = o[fe.camelCase(t)])) : r = o, r
        }
    }

    function h(e, t, n) {
        if (Oe(e)) {
            var i, r, o = e.nodeType,
                s = o ? fe.cache : e,
                a = o ? e[fe.expando] : fe.expando;
            if (s[a]) {
                if (t && (i = n ? s[a] : s[a].data)) {
                    fe.isArray(t) ? t = t.concat(fe.map(t, fe.camelCase)) : t in i ? t = [t] : (t = fe.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                    for (; r--;) delete i[t[r]];
                    if (n ? !u(i) : !fe.isEmptyObject(i)) return
                }(n || (delete s[a].data, u(s[a]))) && (o ? fe.cleanData([e], !0) : he.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0)
            }
        }
    }

    function d(e, t, n, i) {
        var r, o = 1,
            s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return fe.css(e, t, "")
            },
            l = a(),
            u = n && n[3] || (fe.cssNumber[t] ? "" : "px"),
            c = (fe.cssNumber[t] || "px" !== u && +l) && Re.exec(fe.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do o = o || ".5", c /= o, fe.style(e, t, c + u); while (o !== (o = a() / l) && 1 !== o && --s)
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }

    function f(e) {
        var t = Ye.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function p(e, t) {
        var n, i, r = 0,
            o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || fe.nodeName(i, t) ? o.push(i) : fe.merge(o, p(i, t));
        return void 0 === t || t && fe.nodeName(e, t) ? fe.merge([e], o) : o
    }

    function m(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) fe._data(n, "globalEval", !t || fe._data(t[i], "globalEval"))
    }

    function g(e) {
        ze.test(e.type) && (e.defaultChecked = e.checked)
    }

    function v(e, t, n, i, r) {
        for (var o, s, a, l, u, c, h, d = e.length, v = f(t), y = [], _ = 0; _ < d; _++)
            if (s = e[_], s || 0 === s)
                if ("object" === fe.type(s)) fe.merge(y, s.nodeType ? [s] : s);
                else if (qe.test(s)) {
            for (l = l || v.appendChild(t.createElement("div")), u = (We.exec(s) || ["", ""])[1].toLowerCase(), h = Ue[u] || Ue._default, l.innerHTML = h[1] + fe.htmlPrefilter(s) + h[2], o = h[0]; o--;) l = l.lastChild;
            if (!he.leadingWhitespace && Be.test(s) && y.push(t.createTextNode(Be.exec(s)[0])), !he.tbody)
                for (s = "table" !== u || Ve.test(s) ? "<table>" !== h[1] || Ve.test(s) ? 0 : l : l.firstChild, o = s && s.childNodes.length; o--;) fe.nodeName(c = s.childNodes[o], "tbody") && !c.childNodes.length && s.removeChild(c);
            for (fe.merge(y, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = v.lastChild
        } else y.push(t.createTextNode(s));
        for (l && v.removeChild(l), he.appendChecked || fe.grep(p(y, "input"), g), _ = 0; s = y[_++];)
            if (i && fe.inArray(s, i) > -1) r && r.push(s);
            else if (a = fe.contains(s.ownerDocument, s), l = p(v.appendChild(s), "script"), a && m(l), n)
            for (o = 0; s = l[o++];) $e.test(s.type || "") && n.push(s);
        return l = null, v
    }

    function y() {
        return !0
    }

    function _() {
        return !1
    }

    function b() {
        try {
            return ie.activeElement
        } catch (e) {}
    }

    function w(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) w(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = _;
        else if (!r) return e;
        return 1 === o && (s = r, r = function(e) {
            return fe().off(e), s.apply(this, arguments)
        }, r.guid = s.guid || (s.guid = fe.guid++)), e.each(function() {
            fe.event.add(this, t, r, i, n)
        })
    }

    function x(e, t) {
        return fe.nodeName(e, "table") && fe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function k(e) {
        return e.type = (null !== fe.find.attr(e, "type")) + "/" + e.type, e
    }

    function S(e) {
        var t = rt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function T(e, t) {
        if (1 === t.nodeType && fe.hasData(e)) {
            var n, i, r, o = fe._data(e),
                s = fe._data(t, o),
                a = o.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a)
                    for (i = 0, r = a[n].length; i < r; i++) fe.event.add(t, n, a[n][i])
            }
            s.data && (s.data = fe.extend({}, s.data))
        }
    }

    function C(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !he.noCloneEvent && t[fe.expando]) {
                r = fe._data(t);
                for (i in r.events) fe.removeEvent(t, i, r.handle);
                t.removeAttribute(fe.expando)
            }
            "script" === n && t.text !== e.text ? (k(t).text = e.text, S(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), he.html5Clone && e.innerHTML && !fe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && ze.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }

    function D(e, t, n, i) {
        t = oe.apply([], t);
        var r, o, s, a, l, u, c = 0,
            h = e.length,
            d = h - 1,
            f = t[0],
            m = fe.isFunction(f);
        if (m || h > 1 && "string" == typeof f && !he.checkClone && it.test(f)) return e.each(function(r) {
            var o = e.eq(r);
            m && (t[0] = f.call(this, r, o.html())), D(o, t, n, i)
        });
        if (h && (u = v(t, e[0].ownerDocument, !1, e, i), r = u.firstChild, 1 === u.childNodes.length && (u = r), r || i)) {
            for (a = fe.map(p(u, "script"), k), s = a.length; c < h; c++) o = u, c !== d && (o = fe.clone(o, !0, !0), s && fe.merge(a, p(o, "script"))), n.call(e[c], o, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, fe.map(a, S), c = 0; c < s; c++) o = a[c], $e.test(o.type || "") && !fe._data(o, "globalEval") && fe.contains(l, o) && (o.src ? fe._evalUrl && fe._evalUrl(o.src) : fe.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ot, "")));
            u = r = null
        }
        return e
    }

    function M(e, t, n) {
        for (var i, r = t ? fe.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || fe.cleanData(p(i)), i.parentNode && (n && fe.contains(i.ownerDocument, i) && m(p(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function E(e, t) {
        var n = fe(t.createElement(e)).appendTo(t.body),
            i = fe.css(n[0], "display");
        return n.detach(), i
    }

    function A(e) {
        var t = ie,
            n = ut[e];
        return n || (n = E(e, t), "none" !== n && n || (lt = (lt || fe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (lt[0].contentWindow || lt[0].contentDocument).document, t.write(), t.close(), n = E(e, t), lt.detach()), ut[e] = n), n
    }

    function P(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function O(e) {
        if (e in St) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = kt.length; n--;)
            if (e = kt[n] + t, e in St) return e
    }

    function I(e, t) {
        for (var n, i, r, o = [], s = 0, a = e.length; s < a; s++) i = e[s], i.style && (o[s] = fe._data(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Fe(i) && (o[s] = fe._data(i, "olddisplay", A(i.nodeName)))) : (r = Fe(i), (n && "none" !== n || !r) && fe._data(i, "olddisplay", r ? n : fe.css(i, "display"))));
        for (s = 0; s < a; s++) i = e[s], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function N(e, t, n) {
        var i = bt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function j(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += fe.css(e, n + Le[o], !0, r)), i ? ("content" === n && (s -= fe.css(e, "padding" + Le[o], !0, r)), "margin" !== n && (s -= fe.css(e, "border" + Le[o] + "Width", !0, r))) : (s += fe.css(e, "padding" + Le[o], !0, r), "padding" !== n && (s += fe.css(e, "border" + Le[o] + "Width", !0, r)));
        return s
    }

    function R(e, t, n) {
        var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = pt(e),
            s = he.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, o);
        if (r <= 0 || null == r) {
            if (r = mt(e, t, o), (r < 0 || null == r) && (r = e.style[t]), ht.test(r)) return r;
            i = s && (he.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + j(e, t, n || (s ? "border" : "content"), i, o) + "px"
    }

    function L(e, t, n, i, r) {
        return new L.prototype.init(e, t, n, i, r)
    }

    function F() {
        return e.setTimeout(function() {
            Tt = void 0
        }), Tt = fe.now()
    }

    function H(e, t) {
        var n, i = {
                height: e
            },
            r = 0;
        for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Le[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function z(e, t, n) {
        for (var i, r = (B.tweeners[t] || []).concat(B.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function W(e, t, n) {
        var i, r, o, s, a, l, u, c, h = this,
            d = {},
            f = e.style,
            p = e.nodeType && Fe(e),
            m = fe._data(e, "fxshow");
        n.queue || (a = fe._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, h.always(function() {
            h.always(function() {
                a.unqueued--, fe.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = fe.css(e, "display"), c = "none" === u ? fe._data(e, "olddisplay") || A(e.nodeName) : u, "inline" === c && "none" === fe.css(e, "float") && (he.inlineBlockNeedsLayout && "inline" !== A(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", he.shrinkWrapBlocks() || h.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i], Dt.exec(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    p = !0
                }
                d[i] = m && m[i] || fe.style(e, i)
            } else u = void 0;
        if (fe.isEmptyObject(d)) "inline" === ("none" === u ? A(e.nodeName) : u) && (f.display = u);
        else {
            m ? "hidden" in m && (p = m.hidden) : m = fe._data(e, "fxshow", {}), o && (m.hidden = !p), p ? fe(e).show() : h.done(function() {
                fe(e).hide()
            }), h.done(function() {
                var t;
                fe._removeData(e, "fxshow");
                for (t in d) fe.style(e, t, d[t])
            });
            for (i in d) s = z(p ? m[i] : 0, i, h), i in m || (m[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function $(e, t) {
        var n, i, r, o, s;
        for (n in e)
            if (i = fe.camelCase(n), r = t[i], o = e[n], fe.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = fe.cssHooks[i], s && "expand" in s) {
                o = s.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
    }

    function B(e, t, n) {
        var i, r, o = 0,
            s = B.prefilters.length,
            a = fe.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = Tt || F(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; s < l; s++) u.tweens[s].run(o);
                return a.notifyWith(e, [u, o, n]), o < 1 && l ? n : (a.resolveWith(e, [u]), !1)
            },
            u = a.promise({
                elem: e,
                props: fe.extend({}, t),
                opts: fe.extend(!0, {
                    specialEasing: {},
                    easing: fe.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Tt || F(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = fe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for ($(c, u.opts.specialEasing); o < s; o++)
            if (i = B.prefilters[o].call(u, e, c, u.opts)) return fe.isFunction(i.stop) && (fe._queueHooks(u.elem, u.opts.queue).stop = fe.proxy(i.stop, i)), i;
        return fe.map(c, z, u), fe.isFunction(u.opts.start) && u.opts.start.call(e, u), fe.fx.timer(fe.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function Y(e) {
        return fe.attr(e, "class") || ""
    }

    function U(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(Ee) || [];
            if (fe.isFunction(n))
                for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function q(e, t, n, i) {
        function r(a) {
            var l;
            return o[a] = !0, fe.each(e[a] || [], function(e, a) {
                var u = a(t, n, i);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var o = {},
            s = e === Jt;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function V(e, t) {
        var n, i, r = fe.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && fe.extend(!0, e, n), e
    }

    function Q(e, t, n) {
        for (var i, r, o, s, a = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (s in a)
                if (a[s] && a[s].test(r)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (s in n) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    o = s;
                    break
                }
                i || (i = s)
            }
            o = o || i
        }
        if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function G(e, t, n, i) {
        var r, o, s, a, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (s = u[l + " " + o] || u["* " + o], !s)
                for (r in u)
                    if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                        s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e.throws) t = s(t);
                else try {
                    t = s(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: s ? e : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function X(e) {
        return e.style && e.style.display || fe.css(e, "display")
    }

    function K(e) {
        if (!fe.contains(e.ownerDocument || ie, e)) return !0;
        for (; e && 1 === e.nodeType;) {
            if ("none" === X(e) || "hidden" === e.type) return !0;
            e = e.parentNode
        }
        return !1
    }

    function J(e, t, n, i) {
        var r;
        if (fe.isArray(t)) fe.each(t, function(t, r) {
            n || rn.test(e) ? i(e, r) : J(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== fe.type(t)) i(e, t);
        else
            for (r in t) J(e + "[" + r + "]", t[r], n, i)
    }

    function Z() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }

    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function te(e) {
        return fe.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    var ne = [],
        ie = e.document,
        re = ne.slice,
        oe = ne.concat,
        se = ne.push,
        ae = ne.indexOf,
        le = {},
        ue = le.toString,
        ce = le.hasOwnProperty,
        he = {},
        de = "1.12.4",
        fe = function(e, t) {
            return new fe.fn.init(e, t)
        },
        pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        me = /^-ms-/,
        ge = /-([\da-z])/gi,
        ve = function(e, t) {
            return t.toUpperCase()
        };
    fe.fn = fe.prototype = {
        jquery: de,
        constructor: fe,
        selector: "",
        length: 0,
        toArray: function() {
            return re.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : re.call(this)
        },
        pushStack: function(e) {
            var t = fe.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return fe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(fe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(re.apply(this, arguments))
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
            return this.prevObject || this.constructor()
        },
        push: se,
        sort: ne.sort,
        splice: ne.splice
    }, fe.extend = fe.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || fe.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (r = arguments[a]))
                for (i in r) e = s[i], n = r[i], s !== n && (u && n && (fe.isPlainObject(n) || (t = fe.isArray(n))) ? (t ? (t = !1, o = e && fe.isArray(e) ? e : []) : o = e && fe.isPlainObject(e) ? e : {}, s[i] = fe.extend(u, o, n)) : void 0 !== n && (s[i] = n));
        return s
    }, fe.extend({
        expando: "jQuery" + (de + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === fe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === fe.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !fe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== fe.type(e) || e.nodeType || fe.isWindow(e)) return !1;
            try {
                if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (e) {
                return !1
            }
            if (!he.ownFirst)
                for (t in e) return ce.call(e, t);
            for (t in e);
            return void 0 === t || ce.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ue.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && fe.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(me, "ms-").replace(ge, ve)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var i, r = 0;
            if (n(e))
                for (i = e.length; r < i && t.call(e[r], r, e[r]) !== !1; r++);
            else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(pe, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? fe.merge(i, "string" == typeof e ? [e] : e) : se.call(i, e)), i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (ae) return ae.call(t, e, n);
                for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n;) e[r++] = t[i++];
            if (n !== n)
                for (; void 0 !== t[i];) e[r++] = t[i++];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i, r = [], o = 0, s = e.length, a = !n; o < s; o++) i = !t(e[o], o), i !== a && r.push(e[o]);
            return r
        },
        map: function(e, t, i) {
            var r, o, s = 0,
                a = [];
            if (n(e))
                for (r = e.length; s < r; s++) o = t(e[s], s, i), null != o && a.push(o);
            else
                for (s in e) o = t(e[s], s, i), null != o && a.push(o);
            return oe.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            if ("string" == typeof t && (r = e[t], t = e, e = r), fe.isFunction(e)) return n = re.call(arguments, 2), i = function() {
                return e.apply(t || this, n.concat(re.call(arguments)))
            }, i.guid = e.guid = e.guid || fe.guid++, i
        },
        now: function() {
            return +new Date
        },
        support: he
    }), "function" == typeof Symbol && (fe.fn[Symbol.iterator] = ne[Symbol.iterator]), fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var ye = function(e) {
        function t(e, t, n, i) {
            var r, o, s, a, l, u, h, f, p = t && t.ownerDocument,
                m = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!i && ((t ? t.ownerDocument || t : z) !== O && P(t), t = t || O, N)) {
                if (11 !== m && (u = ve.exec(e)))
                    if (r = u[1]) {
                        if (9 === m) {
                            if (!(s = t.getElementById(r))) return n;
                            if (s.id === r) return n.push(s), n
                        } else if (p && (s = p.getElementById(r)) && F(t, s) && s.id === r) return n.push(s), n
                    } else {
                        if (u[2]) return J.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = u[3]) && w.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(r)), n
                    }
                if (w.qsa && !U[e + " "] && (!j || !j.test(e))) {
                    if (1 !== m) p = t, f = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(_e, "\\$&") : t.setAttribute("id", a = H), h = T(e), o = h.length, l = de.test(a) ? "#" + a : "[id='" + a + "']"; o--;) h[o] = l + " " + d(h[o]);
                        f = h.join(","), p = ye.test(e) && c(t.parentNode) || t
                    }
                    if (f) try {
                        return J.apply(n, p.querySelectorAll(f)), n
                    } catch (e) {} finally {
                        a === H && t.removeAttribute("id")
                    }
                }
            }
            return D(e.replace(ae, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[H] = !0, e
        }

        function r(e) {
            var t = O.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function h() {}

        function d(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function f(e, t, n) {
            var i = t.dir,
                r = n && "parentNode" === i,
                o = $++;
            return t.first ? function(t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || r) return e(t, n, o)
            } : function(t, n, s) {
                var a, l, u, c = [W, o];
                if (s) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || r) && e(t, n, s)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) {
                            if (u = t[H] || (t[H] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (a = l[i]) && a[0] === W && a[1] === o) return c[2] = a[2];
                            if (l[i] = c, c[2] = e(t, n, s)) return !0
                        }
            }
        }

        function p(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, i) {
            for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
            return i
        }

        function g(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), u && t.push(a)));
            return s
        }

        function v(e, t, n, r, o, s) {
            return r && !r[H] && (r = v(r)), o && !o[H] && (o = v(o, s)), i(function(i, s, a, l) {
                var u, c, h, d = [],
                    f = [],
                    p = s.length,
                    v = i || m(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !i && t ? v : g(v, d, e, a, l),
                    _ = n ? o || (i ? e : p || r) ? [] : s : y;
                if (n && n(y, _, a, l), r)
                    for (u = g(_, f), r(u, [], a, l), c = u.length; c--;)(h = u[c]) && (_[f[c]] = !(y[f[c]] = h));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (u = [], c = _.length; c--;)(h = _[c]) && u.push(y[c] = h);
                            o(null, _ = [], u, l)
                        }
                        for (c = _.length; c--;)(h = _[c]) && (u = o ? ee(i, h) : d[c]) > -1 && (i[u] = !(s[u] = h))
                    }
                } else _ = g(_ === s ? _.splice(p, _.length) : _), o ? o(null, s, _, l) : J.apply(s, _)
            })
        }

        function y(e) {
            for (var t, n, i, r = e.length, o = x.relative[e[0].type], s = o || x.relative[" "], a = o ? 1 : 0, l = f(function(e) {
                    return e === t
                }, s, !0), u = f(function(e) {
                    return ee(t, e) > -1
                }, s, !0), c = [function(e, n, i) {
                    var r = !o && (i || n !== M) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                    return t = null, r
                }]; a < r; a++)
                if (n = x.relative[e[a].type]) c = [f(p(c), n)];
                else {
                    if (n = x.filter[e[a].type].apply(null, e[a].matches), n[H]) {
                        for (i = ++a; i < r && !x.relative[e[i].type]; i++);
                        return v(a > 1 && p(c), a > 1 && d(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ae, "$1"), n, a < i && y(e.slice(a, i)), i < r && y(e = e.slice(i)), i < r && d(e))
                    }
                    c.push(n)
                }
            return p(c)
        }

        function _(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                s = function(i, s, a, l, u) {
                    var c, h, d, f = 0,
                        p = "0",
                        m = i && [],
                        v = [],
                        y = M,
                        _ = i || o && x.find.TAG("*", u),
                        b = W += null == y ? 1 : Math.random() || .1,
                        w = _.length;
                    for (u && (M = s === O || s || u); p !== w && null != (c = _[p]); p++) {
                        if (o && c) {
                            for (h = 0, s || c.ownerDocument === O || (P(c), a = !N); d = e[h++];)
                                if (d(c, s || O, a)) {
                                    l.push(c);
                                    break
                                }
                            u && (W = b)
                        }
                        r && ((c = !d && c) && f--, i && m.push(c))
                    }
                    if (f += p, r && p !== f) {
                        for (h = 0; d = n[h++];) d(m, v, s, a);
                        if (i) {
                            if (f > 0)
                                for (; p--;) m[p] || v[p] || (v[p] = X.call(l));
                            v = g(v)
                        }
                        J.apply(l, v), u && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (W = b, M = y), m
                };
            return r ? i(s) : s
        }
        var b, w, x, k, S, T, C, D, M, E, A, P, O, I, N, j, R, L, F, H = "sizzle" + 1 * new Date,
            z = e.document,
            W = 0,
            $ = 0,
            B = n(),
            Y = n(),
            U = n(),
            q = function(e, t) {
                return e === t && (A = !0), 0
            },
            V = 1 << 31,
            Q = {}.hasOwnProperty,
            G = [],
            X = G.pop,
            K = G.push,
            J = G.push,
            Z = G.slice,
            ee = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            oe = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            he = new RegExp(oe),
            de = new RegExp("^" + ie + "$"),
            fe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            pe = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            _e = /'|\\/g,
            be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            xe = function() {
                P()
            };
        try {
            J.apply(G = Z.call(z.childNodes), z.childNodes), G[z.childNodes.length].nodeType
        } catch (e) {
            J = {
                apply: G.length ? function(e, t) {
                    K.apply(e, Z.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, S = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, P = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : z;
            return i !== O && 9 === i.nodeType && i.documentElement ? (O = i, I = O.documentElement, N = !S(O), (n = O.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), w.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = r(function(e) {
                return e.appendChild(O.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ge.test(O.getElementsByClassName), w.getById = r(function(e) {
                return I.appendChild(e).id = H, !O.getElementsByName || !O.getElementsByName(H).length
            }), w.getById ? (x.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && N) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, x.filter.ID = function(e) {
                var t = e.replace(be, we);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete x.find.ID, x.filter.ID = function(e) {
                var t = e.replace(be, we);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), x.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, x.find.CLASS = w.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && N) return t.getElementsByClassName(e)
            }, R = [], j = [], (w.qsa = ge.test(O.querySelectorAll)) && (r(function(e) {
                I.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || j.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + H + "-]").length || j.push("~="), e.querySelectorAll(":checked").length || j.push(":checked"), e.querySelectorAll("a#" + H + "+*").length || j.push(".#.+[+~]")
            }), r(function(e) {
                var t = O.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && j.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), j.push(",.*:")
            })), (w.matchesSelector = ge.test(L = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && r(function(e) {
                w.disconnectedMatch = L.call(e, "div"), L.call(e, "[s!='']:x"), R.push("!=", oe)
            }), j = j.length && new RegExp(j.join("|")), R = R.length && new RegExp(R.join("|")), t = ge.test(I.compareDocumentPosition), F = t || ge.test(I.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, q = t ? function(e, t) {
                if (e === t) return A = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === O || e.ownerDocument === z && F(z, e) ? -1 : t === O || t.ownerDocument === z && F(z, t) ? 1 : E ? ee(E, e) - ee(E, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return A = !0, 0;
                var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    l = [t];
                if (!r || !o) return e === O ? -1 : t === O ? 1 : r ? -1 : o ? 1 : E ? ee(E, e) - ee(E, t) : 0;
                if (r === o) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? s(a[i], l[i]) : a[i] === z ? -1 : l[i] === z ? 1 : 0
            }, O) : O
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== O && P(e), n = n.replace(ce, "='$1']"), w.matchesSelector && N && !U[n + " "] && (!R || !R.test(n)) && (!j || !j.test(n))) try {
                var i = L.call(e, n);
                if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {}
            return t(n, O, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== O && P(e), F(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== O && P(e);
            var n = x.attrHandle[t.toLowerCase()],
                i = n && Q.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !N) : void 0;
            return void 0 !== i ? i : w.attributes || !N ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (A = !w.detectDuplicates, E = !w.sortStable && e.slice(0), e.sort(q), A) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return E = null, e
        }, k = t.getText = function(e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += k(t);
            return n
        }, x = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
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
                    return e[1] = e[1].replace(be, we), e[3] = (e[3] || e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && he.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                        e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, we).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = B[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, h, d, f, p, m = o !== s ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !l && !a,
                            _ = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    p = m = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? g.firstChild : g.lastChild], s && y) {
                                for (d = g, h = d[H] || (d[H] = {}), c = h[d.uniqueID] || (h[d.uniqueID] = {}), u = c[e] || [], f = u[0] === W && u[1], _ = f && u[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (_ = f = 0) || p.pop();)
                                    if (1 === d.nodeType && ++_ && d === t) {
                                        c[e] = [W, f, _];
                                        break
                                    }
                            } else if (y && (d = t, h = d[H] || (d[H] = {}), c = h[d.uniqueID] || (h[d.uniqueID] = {}), u = c[e] || [], f = u[0] === W && u[1], _ = f), _ === !1)
                                for (;
                                    (d = ++f && d && d[m] || (_ = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++_ || (y && (h = d[H] || (d[H] = {}), c = h[d.uniqueID] || (h[d.uniqueID] = {}), c[e] = [W, _]), d !== t)););
                            return _ -= r, _ === i || _ % i === 0 && _ / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[H] ? o(n) : o.length > 1 ? (r = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), s = r.length; s--;) i = ee(e, r[s]), e[i] = !(t[i] = r[s])
                    }) : function(e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        r = C(e.replace(ae, "$1"));
                    return r[H] ? i(function(e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(be, we),
                        function(t) {
                            return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = N ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === I
                },
                focus: function(e) {
                    return e === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
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
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return pe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[b] = a(b);
        for (b in {
                submit: !0,
                reset: !0
            }) x.pseudos[b] = l(b);
        return h.prototype = x.filters = x.pseudos, x.setFilters = new h, T = t.tokenize = function(e, n) {
            var i, r, o, s, a, l, u, c = Y[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, l = [], u = x.preFilter; a;) {
                i && !(r = le.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ue.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(ae, " ")
                }), a = a.slice(i.length));
                for (s in x.filter) !(r = fe[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : Y(e, l).slice(0)
        }, C = t.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = U[e + " "];
            if (!o) {
                for (t || (t = T(e)), n = t.length; n--;) o = y(t[n]), o[H] ? i.push(o) : r.push(o);
                o = U(e, _(r, i)), o.selector = e
            }
            return o
        }, D = t.select = function(e, t, n, i) {
            var r, o, s, a, l, u = "function" == typeof e && e,
                h = !i && T(e = u.selector || e);
            if (n = n || [], 1 === h.length) {
                if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && N && x.relative[o[1].type]) {
                    if (t = (x.find.ID(s.matches[0].replace(be, we), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !x.relative[a = s.type]);)
                    if ((l = x.find[a]) && (i = l(s.matches[0].replace(be, we), ye.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(r, 1), e = i.length && d(o), !e) return J.apply(n, i), n;
                        break
                    }
            }
            return (u || C(e, h))(i, t, !N, n, !t || ye.test(e) && c(t.parentNode) || t), n
        }, w.sortStable = H.split("").sort(q).join("") === H, w.detectDuplicates = !!A, P(), w.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(O.createElement("div"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var i;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    fe.find = ye, fe.expr = ye.selectors, fe.expr[":"] = fe.expr.pseudos, fe.uniqueSort = fe.unique = ye.uniqueSort, fe.text = ye.getText, fe.isXMLDoc = ye.isXML, fe.contains = ye.contains;
    var _e = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && fe(e).is(n)) break;
                    i.push(e)
                }
            return i
        },
        be = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        we = fe.expr.match.needsContext,
        xe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        ke = /^.[^:#\[\.,]*$/;
    fe.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? fe.find.matchesSelector(i, e) ? [i] : [] : fe.find.matches(e, fe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, fe.fn.extend({
        find: function(e) {
            var t, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof e) return this.pushStack(fe(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (fe.contains(i[t], this)) return !0
            }));
            for (t = 0; t < r; t++) fe.find(e, i[t], n);
            return n = this.pushStack(r > 1 ? fe.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && we.test(e) ? fe(e) : e || [], !1).length
        }
    });
    var Se, Te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        Ce = fe.fn.init = function(e, t, n) {
            var i, r;
            if (!e) return this;
            if (n = n || Se, "string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Te.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof fe ? t[0] : t, fe.merge(this, fe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)), xe.test(i[1]) && fe.isPlainObject(t))
                        for (i in t) fe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                if (r = ie.getElementById(i[2]), r && r.parentNode) {
                    if (r.id !== i[2]) return Se.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = ie, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : fe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(fe) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), fe.makeArray(e, this))
        };
    Ce.prototype = fe.fn, Se = fe(ie);
    var De = /^(?:parents|prev(?:Until|All))/,
        Me = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    fe.fn.extend({
        has: function(e) {
            var t, n = fe(e, this),
                i = n.length;
            return this.filter(function() {
                for (t = 0; t < i; t++)
                    if (fe.contains(this, n[t])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], s = we.test(e) || "string" != typeof e ? fe(e, t || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && fe.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? fe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? fe.inArray(this[0], fe(e)) : fe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), fe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return _e(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return _e(e, "parentNode", n)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return _e(e, "nextSibling")
        },
        prevAll: function(e) {
            return _e(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return _e(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return _e(e, "previousSibling", n)
        },
        siblings: function(e) {
            return be((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return be(e.firstChild)
        },
        contents: function(e) {
            return fe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : fe.merge([], e.childNodes)
        }
    }, function(e, t) {
        fe.fn[e] = function(n, i) {
            var r = fe.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = fe.filter(i, r)), this.length > 1 && (Me[e] || (r = fe.uniqueSort(r)), De.test(e) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var Ee = /\S+/g;
    fe.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : fe.extend({}, e);
        var t, n, i, r, s = [],
            a = [],
            l = -1,
            u = function() {
                for (r = e.once, i = t = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < s.length;) s[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = s.length, n = !1);
                e.memory || (n = !1), t = !1, r && (s = n ? [] : "")
            },
            c = {
                add: function() {
                    return s && (n && !t && (l = s.length - 1, a.push(n)), function t(n) {
                        fe.each(n, function(n, i) {
                            fe.isFunction(i) ? e.unique && c.has(i) || s.push(i) : i && i.length && "string" !== fe.type(i) && t(i)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function() {
                    return fe.each(arguments, function(e, t) {
                        for (var n;
                            (n = fe.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? fe.inArray(e, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return r = a = [], s = n = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return r = !0, n || c.disable(), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, n) {
                    return r || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, fe.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", fe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", fe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", fe.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return fe.Deferred(function(n) {
                            fe.each(t, function(t, o) {
                                var s = fe.isFunction(e[t]) && e[t];
                                r[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && fe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? fe.extend(e, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, fe.each(t, function(e, o) {
                var s = o[2],
                    a = o[3];
                i[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function(e) {
            var t, n, i, r = 0,
                o = re.call(arguments),
                s = o.length,
                a = 1 !== s || e && fe.isFunction(e.promise) ? s : 0,
                l = 1 === a ? e : fe.Deferred(),
                u = function(e, n, i) {
                    return function(r) {
                        n[e] = this, i[e] = arguments.length > 1 ? re.call(arguments) : r, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), i = new Array(s); r < s; r++) o[r] && fe.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, t)).done(u(r, i, o)).fail(l.reject) : --a;
            return a || l.resolveWith(i, o), l.promise()
        }
    });
    var Ae;
    fe.fn.ready = function(e) {
        return fe.ready.promise().done(e), this
    }, fe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? fe.readyWait++ : fe.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --fe.readyWait : fe.isReady) || (fe.isReady = !0, e !== !0 && --fe.readyWait > 0 || (Ae.resolveWith(ie, [fe]), fe.fn.triggerHandler && (fe(ie).triggerHandler("ready"), fe(ie).off("ready"))))
        }
    }), fe.ready.promise = function(t) {
        if (!Ae)
            if (Ae = fe.Deferred(), "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll) e.setTimeout(fe.ready);
            else if (ie.addEventListener) ie.addEventListener("DOMContentLoaded", a), e.addEventListener("load", a);
        else {
            ie.attachEvent("onreadystatechange", a), e.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == e.frameElement && ie.documentElement
            } catch (e) {}
            n && n.doScroll && ! function t() {
                if (!fe.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (n) {
                        return e.setTimeout(t, 50)
                    }
                    s(), fe.ready()
                }
            }()
        }
        return Ae.promise(t)
    }, fe.ready.promise();
    var Pe;
    for (Pe in fe(he)) break;
    he.ownFirst = "0" === Pe, he.inlineBlockNeedsLayout = !1, fe(function() {
            var e, t, n, i;
            n = ie.getElementsByTagName("body")[0], n && n.style && (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", he.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var e = ie.createElement("div");
            he.deleteExpando = !0;
            try {
                delete e.test
            } catch (e) {
                he.deleteExpando = !1
            }
            e = null
        }();
    var Oe = function(e) {
            var t = fe.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1;
            return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
        },
        Ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ne = /([A-Z])/g;
    fe.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return e = e.nodeType ? fe.cache[e[fe.expando]] : e[fe.expando], !!e && !u(e)
            },
            data: function(e, t, n) {
                return c(e, t, n)
            },
            removeData: function(e, t) {
                return h(e, t)
            },
            _data: function(e, t, n) {
                return c(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return h(e, t, !0)
            }
        }), fe.fn.extend({
            data: function(e, t) {
                var n, i, r, o = this[0],
                    s = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (r = fe.data(o), 1 === o.nodeType && !fe._data(o, "parsedAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = fe.camelCase(i.slice(5)), l(o, i, r[i])));
                        fe._data(o, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    fe.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    fe.data(this, e, t)
                }) : o ? l(o, e, fe.data(o, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    fe.removeData(this, e)
                })
            }
        }), fe.extend({
            queue: function(e, t, n) {
                var i;
                if (e) return t = (t || "fx") + "queue", i = fe._data(e, t), n && (!i || fe.isArray(n) ? i = fe._data(e, t, fe.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = fe.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = fe._queueHooks(e, t),
                    s = function() {
                        fe.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return fe._data(e, n) || fe._data(e, n, {
                    empty: fe.Callbacks("once memory").add(function() {
                        fe._removeData(e, t + "queue"), fe._removeData(e, n)
                    })
                })
            }
        }), fe.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? fe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = fe.queue(this, e, t);
                    fe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && fe.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    fe.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    r = fe.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = fe._data(o[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(t)
            }
        }),
        function() {
            var e;
            he.shrinkWrapBlocks = function() {
                if (null != e) return e;
                e = !1;
                var t, n, i;
                return n = ie.getElementsByTagName("body")[0], n && n.style ? (t = ie.createElement("div"), i = ie.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ie.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
            }
        }();
    var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Re = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$", "i"),
        Le = ["Top", "Right", "Bottom", "Left"],
        Fe = function(e, t) {
            return e = t || e, "none" === fe.css(e, "display") || !fe.contains(e.ownerDocument, e)
        },
        He = function(e, t, n, i, r, o, s) {
            var a = 0,
                l = e.length,
                u = null == n;
            if ("object" === fe.type(n)) {
                r = !0;
                for (a in n) He(e, t, a, n[a], !0, o, s)
            } else if (void 0 !== i && (r = !0, fe.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(fe(e), n)
                })), t))
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
        },
        ze = /^(?:checkbox|radio)$/i,
        We = /<([\w:-]+)/,
        $e = /^$|\/(?:java|ecma)script/i,
        Be = /^\s+/,
        Ye = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    ! function() {
        var e = ie.createElement("div"),
            t = ie.createDocumentFragment(),
            n = ie.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", he.leadingWhitespace = 3 === e.firstChild.nodeType, he.tbody = !e.getElementsByTagName("tbody").length, he.htmlSerialize = !!e.getElementsByTagName("link").length, he.html5Clone = "<:nav></:nav>" !== ie.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), he.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", he.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = ie.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), he.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, he.noCloneEvent = !!e.addEventListener, e[fe.expando] = 1, he.attributes = !e.getAttribute(fe.expando)
    }();
    var Ue = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: he.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Ue.optgroup = Ue.option, Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead, Ue.th = Ue.td;
    var qe = /<|&#?\w+;/,
        Ve = /<tbody/i;
    ! function() {
        var t, n, i = ie.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + t, (he[t] = n in e) || (i.setAttribute(n, "t"), he[t] = i.attributes[n].expando === !1);
        i = null
    }();
    var Qe = /^(?:input|select|textarea)$/i,
        Ge = /^key/,
        Xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ke = /^(?:focusinfocus|focusoutblur)$/,
        Je = /^([^.]*)(?:\.(.+)|)/;
    fe.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, l, u, c, h, d, f, p, m, g = fe._data(e);
            if (g) {
                for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = fe.guid++), (s = g.events) || (s = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                        return "undefined" == typeof fe || e && fe.event.triggered === e.type ? void 0 : fe.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(Ee) || [""], a = t.length; a--;) o = Je.exec(t[a]) || [], f = m = o[1], p = (o[2] || "").split(".").sort(), f && (u = fe.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = fe.event.special[f] || {}, h = fe.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && fe.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, l), (d = s[f]) || (d = s[f] = [], d.delegateCount = 0, u.setup && u.setup.call(e, i, p, c) !== !1 || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), u.add && (u.add.call(e, h), h.handler.guid || (h.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, h) : d.push(h), fe.event.global[f] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, u, c, h, d, f, p, m, g = fe.hasData(e) && fe._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(Ee) || [""], u = t.length; u--;)
                    if (a = Je.exec(t[u]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f) {
                        for (h = fe.event.special[f] || {}, f = (i ? h.delegateType : h.bindType) || f, d = c[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) s = d[o], !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (d.splice(o, 1), s.selector && d.delegateCount--, h.remove && h.remove.call(e, s));
                        l && !d.length && (h.teardown && h.teardown.call(e, p, g.handle) !== !1 || fe.removeEvent(e, f, g.handle), delete c[f])
                    } else
                        for (f in c) fe.event.remove(e, f + t[u], n, i, !0);
                fe.isEmptyObject(c) && (delete g.handle, fe._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, r) {
            var o, s, a, l, u, c, h, d = [i || ie],
                f = ce.call(t, "type") ? t.type : t,
                p = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = c = i = i || ie, 3 !== i.nodeType && 8 !== i.nodeType && !Ke.test(f + fe.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), s = f.indexOf(":") < 0 && "on" + f, t = t[fe.expando] ? t : new fe.Event(f, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : fe.makeArray(n, [t]), u = fe.event.special[f] || {}, r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                if (!r && !u.noBubble && !fe.isWindow(i)) {
                    for (l = u.delegateType || f, Ke.test(l + f) || (a = a.parentNode); a; a = a.parentNode) d.push(a), c = a;
                    c === (i.ownerDocument || ie) && d.push(c.defaultView || c.parentWindow || e)
                }
                for (h = 0;
                    (a = d[h++]) && !t.isPropagationStopped();) t.type = h > 1 ? l : u.bindType || f, o = (fe._data(a, "events") || {})[t.type] && fe._data(a, "handle"), o && o.apply(a, n), o = s && a[s], o && o.apply && Oe(a) && (t.result = o.apply(a, n), t.result === !1 && t.preventDefault());
                if (t.type = f, !r && !t.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), n) === !1) && Oe(i) && s && i[f] && !fe.isWindow(i)) {
                    c = i[s], c && (i[s] = null), fe.event.triggered = f;
                    try {
                        i[f]()
                    } catch (e) {}
                    fe.event.triggered = void 0, c && (i[s] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = fe.event.fix(e);
            var t, n, i, r, o, s = [],
                a = re.call(arguments),
                l = (fe._data(this, "events") || {})[e.type] || [],
                u = fe.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (s = fe.event.handlers.call(this, e, l), t = 0;
                    (r = s[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, i = ((fe.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (i = [], n = 0; n < a; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? fe(r, this).index(l) > -1 : fe.find(r, this, null, [l]).length), i[r] && i.push(o);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        fix: function(e) {
            if (e[fe.expando]) return e;
            var t, n, i, r = e.type,
                o = e,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Xe.test(r) ? this.mouseHooks : Ge.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new fe.Event(o), t = i.length; t--;) n = i[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || ie), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, o = t.button,
                    s = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ie, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== b() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === b() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (fe.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function(e) {
                    return fe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var i = fe.extend(new fe.Event, n, {
                type: e,
                isSimulated: !0
            });
            fe.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
        }
    }, fe.removeEvent = ie.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    } : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
    }, fe.Event = function(e, t) {
        return this instanceof fe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? y : _) : this.type = e, t && fe.extend(this, t), this.timeStamp = e && e.timeStamp || fe.now(), void(this[fe.expando] = !0)) : new fe.Event(e, t)
    }, fe.Event.prototype = {
        constructor: fe.Event,
        isDefaultPrevented: _,
        isPropagationStopped: _,
        isImmediatePropagationStopped: _,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = y, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = y, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = y, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, fe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        fe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return r && (r === i || fe.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), he.submit || (fe.event.special.submit = {
        setup: function() {
            return !fe.nodeName(this, "form") && void fe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target,
                    n = fe.nodeName(t, "input") || fe.nodeName(t, "button") ? fe.prop(t, "form") : void 0;
                n && !fe._data(n, "submit") && (fe.event.add(n, "submit._submit", function(e) {
                    e._submitBubble = !0
                }), fe._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && fe.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            return !fe.nodeName(this, "form") && void fe.event.remove(this, "._submit")
        }
    }), he.change || (fe.event.special.change = {
        setup: function() {
            return Qe.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (fe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), fe.event.add(this, "click._change", function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), fe.event.simulate("change", this, e)
            })), !1) : void fe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Qe.test(t.nodeName) && !fe._data(t, "change") && (fe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || fe.event.simulate("change", this.parentNode, e)
                }), fe._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type) return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return fe.event.remove(this, "._change"), !Qe.test(this.nodeName)
        }
    }), he.focusin || fe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            fe.event.simulate(t, e.target, fe.event.fix(e))
        };
        fe.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = fe._data(i, t);
                r || i.addEventListener(e, n, !0), fe._data(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = fe._data(i, t) - 1;
                r ? fe._data(i, t, r) : (i.removeEventListener(e, n, !0), fe._removeData(i, t))
            }
        }
    }), fe.fn.extend({
        on: function(e, t, n, i) {
            return w(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return w(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, fe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = _), this.each(function() {
                fe.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                fe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return fe.event.trigger(e, t, n, !0)
        }
    });
    var Ze = / jQuery\d+="(?:null|\d+)"/g,
        et = new RegExp("<(?:" + Ye + ")[\\s/>]", "i"),
        tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        nt = /<script|<style|<link/i,
        it = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rt = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        st = f(ie),
        at = st.appendChild(ie.createElement("div"));
    fe.extend({
        htmlPrefilter: function(e) {
            return e.replace(tt, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, s, a, l = fe.contains(e.ownerDocument, e);
            if (he.html5Clone || fe.isXMLDoc(e) || !et.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (at.innerHTML = e.outerHTML, at.removeChild(o = at.firstChild)), !(he.noCloneEvent && he.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e)))
                for (i = p(o), a = p(e), s = 0; null != (r = a[s]); ++s) i[s] && C(r, i[s]);
            if (t)
                if (n)
                    for (a = a || p(e), i = i || p(o), s = 0; null != (r = a[s]); s++) T(r, i[s]);
                else T(e, o);
            return i = p(o, "script"), i.length > 0 && m(i, !l && p(e, "script")), i = a = r = null, o
        },
        cleanData: function(e, t) {
            for (var n, i, r, o, s = 0, a = fe.expando, l = fe.cache, u = he.attributes, c = fe.event.special; null != (n = e[s]); s++)
                if ((t || Oe(n)) && (r = n[a], o = r && l[r])) {
                    if (o.events)
                        for (i in o.events) c[i] ? fe.event.remove(n, i) : fe.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], u || "undefined" == typeof n.removeAttribute ? n[a] = void 0 : n.removeAttribute(a), ne.push(r))
                }
        }
    }), fe.fn.extend({
        domManip: D,
        detach: function(e) {
            return M(this, e, !0)
        },
        remove: function(e) {
            return M(this, e)
        },
        text: function(e) {
            return He(this, function(e) {
                return void 0 === e ? fe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ie).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return D(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = x(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return D(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = x(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return D(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return D(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && fe.cleanData(p(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && fe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return fe.clone(this, e, t)
            })
        },
        html: function(e) {
            return He(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Ze, "") : void 0;
                if ("string" == typeof e && !nt.test(e) && (he.htmlSerialize || !et.test(e)) && (he.leadingWhitespace || !Be.test(e)) && !Ue[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = fe.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (fe.cleanData(p(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return D(this, arguments, function(t) {
                var n = this.parentNode;
                fe.inArray(this, e) < 0 && (fe.cleanData(p(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), fe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        fe.fn[e] = function(e) {
            for (var n, i = 0, r = [], o = fe(e), s = o.length - 1; i <= s; i++) n = i === s ? this : this.clone(!0), fe(o[i])[t](n), se.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var lt, ut = {
            HTML: "block",
            BODY: "block"
        },
        ct = /^margin/,
        ht = new RegExp("^(" + je + ")(?!px)[a-z%]+$", "i"),
        dt = function(e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = s[o];
            return r
        },
        ft = ie.documentElement;
    ! function() {
        function t() {
            var t, c, h = ie.documentElement;
            h.appendChild(l), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = r = a = !1, i = s = !0, e.getComputedStyle && (c = e.getComputedStyle(u), n = "1%" !== (c || {}).top, a = "2px" === (c || {}).marginLeft, r = "4px" === (c || {
                width: "4px"
            }).width, u.style.marginRight = "50%", i = "4px" === (c || {
                marginRight: "4px"
            }).marginRight, t = u.appendChild(ie.createElement("div")), t.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", u.style.width = "1px", s = !parseFloat((e.getComputedStyle(t) || {}).marginRight), u.removeChild(t)), u.style.display = "none", o = 0 === u.getClientRects().length, o && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", t = u.getElementsByTagName("td"), t[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === t[0].offsetHeight, o && (t[0].style.display = "", t[1].style.display = "none", o = 0 === t[0].offsetHeight)), h.removeChild(l)
        }
        var n, i, r, o, s, a, l = ie.createElement("div"),
            u = ie.createElement("div");
        u.style && (u.style.cssText = "float:left;opacity:.5", he.opacity = "0.5" === u.style.opacity, he.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", he.clearCloneStyle = "content-box" === u.style.backgroundClip, l = ie.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), he.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, fe.extend(he, {
            reliableHiddenOffsets: function() {
                return null == n && t(), o
            },
            boxSizingReliable: function() {
                return null == n && t(), r
            },
            pixelMarginRight: function() {
                return null == n && t(), i
            },
            pixelPosition: function() {
                return null == n && t(), n
            },
            reliableMarginRight: function() {
                return null == n && t(), s
            },
            reliableMarginLeft: function() {
                return null == n && t(), a
            }
        }))
    }();
    var pt, mt, gt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (pt = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, mt = function(e, t, n) {
        var i, r, o, s, a = e.style;
        return n = n || pt(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== s && void 0 !== s || fe.contains(e.ownerDocument, e) || (s = fe.style(e, t)), n && !he.pixelMarginRight() && ht.test(s) && ct.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o), void 0 === s ? s : s + ""
    }) : ft.currentStyle && (pt = function(e) {
        return e.currentStyle
    }, mt = function(e, t, n) {
        var i, r, o, s, a = e.style;
        return n = n || pt(e), s = n ? n[t] : void 0, null == s && a && a[t] && (s = a[t]), ht.test(s) && !gt.test(t) && (i = a.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : s, s = a.pixelLeft + "px", a.left = i, o && (r.left = o)), void 0 === s ? s : s + "" || "auto"
    });
    var vt = /alpha\([^)]*\)/i,
        yt = /opacity\s*=\s*([^)]*)/i,
        _t = /^(none|table(?!-c[ea]).+)/,
        bt = new RegExp("^(" + je + ")(.*)$", "i"),
        wt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        xt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        kt = ["Webkit", "O", "Moz", "ms"],
        St = ie.createElement("div").style;
    fe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = mt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
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
            float: he.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = fe.camelCase(t),
                    l = e.style;
                if (t = fe.cssProps[a] || (fe.cssProps[a] = O(a) || a), s = fe.cssHooks[t] || fe.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t];
                if (o = typeof n, "string" === o && (r = Re.exec(n)) && r[1] && (n = d(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (fe.cssNumber[a] ? "" : "px")), he.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(e, n, i))))) try {
                    l[t] = n
                } catch (e) {}
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = fe.camelCase(t);
            return t = fe.cssProps[a] || (fe.cssProps[a] = O(a) || a), s = fe.cssHooks[t] || fe.cssHooks[a], s && "get" in s && (o = s.get(e, !0, n)), void 0 === o && (o = mt(e, t, i)), "normal" === o && t in xt && (o = xt[t]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
        }
    }), fe.each(["height", "width"], function(e, t) {
        fe.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return _t.test(fe.css(e, "display")) && 0 === e.offsetWidth ? dt(e, wt, function() {
                    return R(e, t, i)
                }) : R(e, t, i)
            },
            set: function(e, n, i) {
                var r = i && pt(e);
                return N(e, n, i ? j(e, t, i, he.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }), he.opacity || (fe.cssHooks.opacity = {
        get: function(e, t) {
            return yt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                i = e.currentStyle,
                r = fe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = i && i.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === fe.trim(o.replace(vt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = vt.test(o) ? o.replace(vt, r) : o + " " + r)
        }
    }), fe.cssHooks.marginRight = P(he.reliableMarginRight, function(e, t) {
        if (t) return dt(e, {
            display: "inline-block"
        }, mt, [e, "marginRight"])
    }), fe.cssHooks.marginLeft = P(he.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(mt(e, "marginLeft")) || (fe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - dt(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        }) : 0)) + "px"
    }), fe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        fe.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + Le[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, ct.test(e) || (fe.cssHooks[e + t].set = N)
    }), fe.fn.extend({
        css: function(e, t) {
            return He(this, function(e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (fe.isArray(t)) {
                    for (i = pt(e), r = t.length; s < r; s++) o[t[s]] = fe.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? fe.style(e, t, n) : fe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return I(this, !0)
        },
        hide: function() {
            return I(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Fe(this) ? fe(this).show() : fe(this).hide()
            })
        }
    }), fe.Tween = L, L.prototype = {
        constructor: L,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || fe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (fe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = L.propHooks[this.prop];
            return e && e.get ? e.get(this) : L.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = L.propHooks[this.prop];
            return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
        }
    }, L.prototype.init.prototype = L.prototype, L.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, fe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, fe.fx = L.prototype.init, fe.fx.step = {};
    var Tt, Ct, Dt = /^(?:toggle|show|hide)$/,
        Mt = /queueHooks$/;
    fe.Animation = fe.extend(B, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return d(n.elem, e, Re.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                fe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ee);
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], B.tweeners[n] = B.tweeners[n] || [], B.tweeners[n].unshift(t)
            },
            prefilters: [W],
            prefilter: function(e, t) {
                t ? B.prefilters.unshift(e) : B.prefilters.push(e)
            }
        }), fe.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? fe.extend({}, e) : {
                complete: n || !n && t || fe.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !fe.isFunction(t) && t
            };
            return i.duration = fe.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in fe.fx.speeds ? fe.fx.speeds[i.duration] : fe.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                fe.isFunction(i.old) && i.old.call(this), i.queue && fe.dequeue(this, i.queue)
            }, i
        }, fe.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Fe).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = fe.isEmptyObject(e),
                    o = fe.speed(t, n, i),
                    s = function() {
                        var t = B(this, fe.extend({}, e), o);
                        (r || fe._data(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = fe.timers,
                        s = fe._data(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && Mt.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || fe.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = fe._data(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = fe.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, fe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), fe.each(["toggle", "show", "hide"], function(e, t) {
            var n = fe.fn[t];
            fe.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(H(t, !0), e, i, r)
            }
        }), fe.each({
            slideDown: H("show"),
            slideUp: H("hide"),
            slideToggle: H("toggle"),
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
            fe.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), fe.timers = [], fe.fx.tick = function() {
            var e, t = fe.timers,
                n = 0;
            for (Tt = fe.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || fe.fx.stop(), Tt = void 0
        }, fe.fx.timer = function(e) {
            fe.timers.push(e), e() ? fe.fx.start() : fe.timers.pop()
        }, fe.fx.interval = 13, fe.fx.start = function() {
            Ct || (Ct = e.setInterval(fe.fx.tick, fe.fx.interval))
        }, fe.fx.stop = function() {
            e.clearInterval(Ct), Ct = null
        }, fe.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, fe.fn.delay = function(t, n) {
            return t = fe.fx ? fe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(r)
                }
            })
        },
        function() {
            var e, t = ie.createElement("input"),
                n = ie.createElement("div"),
                i = ie.createElement("select"),
                r = i.appendChild(ie.createElement("option"));
            n = ie.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", he.getSetAttribute = "t" !== n.className, he.style = /top/.test(e.getAttribute("style")), he.hrefNormalized = "/a" === e.getAttribute("href"), he.checkOn = !!t.value, he.optSelected = r.selected, he.enctype = !!ie.createElement("form").enctype, i.disabled = !0, he.optDisabled = !r.disabled, t = ie.createElement("input"), t.setAttribute("value", ""), he.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), he.radioValue = "t" === t.value
        }();
    var Et = /\r/g,
        At = /[\x20\t\r\n\f]+/g;
    fe.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0]; {
                if (arguments.length) return i = fe.isFunction(e), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, fe(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : fe.isArray(r) && (r = fe.map(r, function(e) {
                        return null == e ? "" : e + ""
                    })), t = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                });
                if (r) return t = fe.valHooks[r.type] || fe.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Et, "") : null == n ? "" : n)
            }
        }
    }), fe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = fe.find.attr(e, "value");
                    return null != t ? t : fe.trim(fe.text(e)).replace(At, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, l = r < 0 ? a : o ? r : 0; l < a; l++)
                        if (n = i[l], (n.selected || l === r) && (he.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !fe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = fe(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = fe.makeArray(t), s = r.length; s--;)
                        if (i = r[s], fe.inArray(fe.valHooks.option.get(i), o) > -1) try {
                            i.selected = n = !0
                        } catch (e) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), fe.each(["radio", "checkbox"], function() {
        fe.valHooks[this] = {
            set: function(e, t) {
                if (fe.isArray(t)) return e.checked = fe.inArray(fe(e).val(), t) > -1
            }
        }, he.checkOn || (fe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Pt, Ot, It = fe.expr.attrHandle,
        Nt = /^(?:checked|selected)$/i,
        jt = he.getSetAttribute,
        Rt = he.input;
    fe.fn.extend({
        attr: function(e, t) {
            return He(this, fe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                fe.removeAttr(this, e)
            })
        }
    }), fe.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? fe.prop(e, t, n) : (1 === o && fe.isXMLDoc(e) || (t = t.toLowerCase(), r = fe.attrHooks[t] || (fe.expr.match.bool.test(t) ? Ot : Pt)), void 0 !== n ? null === n ? void fe.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = fe.find.attr(e, t), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!he.radioValue && "radio" === t && fe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i, r = 0,
                o = t && t.match(Ee);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) i = fe.propFix[n] || n, fe.expr.match.bool.test(n) ? Rt && jt || !Nt.test(n) ? e[i] = !1 : e[fe.camelCase("default-" + n)] = e[i] = !1 : fe.attr(e, n, ""), e.removeAttribute(jt ? n : i)
        }
    }), Ot = {
        set: function(e, t, n) {
            return t === !1 ? fe.removeAttr(e, n) : Rt && jt || !Nt.test(n) ? e.setAttribute(!jt && fe.propFix[n] || n, n) : e[fe.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, fe.each(fe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = It[t] || fe.find.attr;
        Rt && jt || !Nt.test(t) ? It[t] = function(e, t, i) {
            var r, o;
            return i || (o = It[t], It[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, It[t] = o), r
        } : It[t] = function(e, t, n) {
            if (!n) return e[fe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Rt && jt || (fe.attrHooks.value = {
        set: function(e, t, n) {
            return fe.nodeName(e, "input") ? void(e.defaultValue = t) : Pt && Pt.set(e, t, n)
        }
    }), jt || (Pt = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n)) return t
        }
    }, It.id = It.name = It.coords = function(e, t, n) {
        var i;
        if (!n) return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }, fe.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            if (n && n.specified) return n.value
        },
        set: Pt.set
    }, fe.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Pt.set(e, "" !== t && t, n)
        }
    }, fe.each(["width", "height"], function(e, t) {
        fe.attrHooks[t] = {
            set: function(e, n) {
                if ("" === n) return e.setAttribute(t, "auto"), n
            }
        }
    })), he.style || (fe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Lt = /^(?:input|select|textarea|button|object)$/i,
        Ft = /^(?:a|area)$/i;
    fe.fn.extend({
        prop: function(e, t) {
            return He(this, fe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = fe.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e]
                } catch (e) {}
            })
        }
    }), fe.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && fe.isXMLDoc(e) || (t = fe.propFix[t] || t, r = fe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = fe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Lt.test(e.nodeName) || Ft.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), he.hrefNormalized || fe.each(["href", "src"], function(e, t) {
        fe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), he.optSelected || (fe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        fe.propFix[this.toLowerCase()] = this
    }), he.enctype || (fe.propFix.enctype = "encoding");
    var Ht = /[\t\r\n\f]/g;
    fe.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (fe.isFunction(e)) return this.each(function(t) {
                fe(this).addClass(e.call(this, t, Y(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(Ee) || []; n = this[l++];)
                    if (r = Y(n), i = 1 === n.nodeType && (" " + r + " ").replace(Ht, " ")) {
                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        a = fe.trim(i), r !== a && fe.attr(n, "class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (fe.isFunction(e)) return this.each(function(t) {
                fe(this).removeClass(e.call(this, t, Y(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Ee) || []; n = this[l++];)
                    if (r = Y(n), i = 1 === n.nodeType && (" " + r + " ").replace(Ht, " ")) {
                        for (s = 0; o = t[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        a = fe.trim(i), r !== a && fe.attr(n, "class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : fe.isFunction(e) ? this.each(function(n) {
                fe(this).toggleClass(e.call(this, n, Y(this), t), t)
            }) : this.each(function() {
                var t, i, r, o;
                if ("string" === n)
                    for (i = 0, r = fe(this), o = e.match(Ee) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = Y(this), t && fe._data(this, "__className__", t), fe.attr(this, "class", t || e === !1 ? "" : fe._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + Y(n) + " ").replace(Ht, " ").indexOf(t) > -1) return !0;
            return !1
        }
    }), fe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        fe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), fe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var zt = e.location,
        Wt = fe.now(),
        $t = /\?/,
        Bt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    fe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, i = null,
            r = fe.trim(t + "");
        return r && !fe.trim(r.replace(Bt, function(e, t, r, o) {
            return n && t && (i = 0), 0 === i ? e : (n = r || t, i += !o - !r, "")
        })) ? Function("return " + r)() : fe.error("Invalid JSON: " + t)
    }, fe.parseXML = function(t) {
        var n, i;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (i = new e.DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (e) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + t), n
    };
    var Yt = /#.*$/,
        Ut = /([?&])_=[^&]*/,
        qt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Vt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Qt = /^(?:GET|HEAD)$/,
        Gt = /^\/\//,
        Xt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Kt = {},
        Jt = {},
        Zt = "*/".concat("*"),
        en = zt.href,
        tn = Xt.exec(en.toLowerCase()) || [];
    fe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: en,
            type: "GET",
            isLocal: Vt.test(tn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": fe.parseJSON,
                "text xml": fe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? V(V(e, fe.ajaxSettings), t) : V(fe.ajaxSettings, e)
        },
        ajaxPrefilter: U(Kt),
        ajaxTransport: U(Jt),
        ajax: function(t, n) {
            function i(t, n, i, r) {
                var o, h, y, _, w, k = n;
                2 !== b && (b = 2, l && e.clearTimeout(l), c = void 0, a = r || "", x.readyState = t > 0 ? 4 : 0, o = t >= 200 && t < 300 || 304 === t, i && (_ = Q(d, x, i)), _ = G(d, _, x, o), o ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (fe.lastModified[s] = w), w = x.getResponseHeader("etag"), w && (fe.etag[s] = w)), 204 === t || "HEAD" === d.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = _.state, h = _.data, y = _.error, o = !y)) : (y = k, !t && k || (k = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (n || k) + "", o ? m.resolveWith(f, [h, k, x]) : m.rejectWith(f, [x, k, y]), x.statusCode(v), v = void 0, u && p.trigger(o ? "ajaxSuccess" : "ajaxError", [x, d, o ? h : y]), g.fireWith(f, [x, k]), u && (p.trigger("ajaxComplete", [x, d]), --fe.active || fe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, s, a, l, u, c, h, d = fe.ajaxSetup({}, n),
                f = d.context || d,
                p = d.context && (f.nodeType || f.jquery) ? fe(f) : fe.event,
                m = fe.Deferred(),
                g = fe.Callbacks("once memory"),
                v = d.statusCode || {},
                y = {},
                _ = {},
                b = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!h)
                                for (h = {}; t = qt.exec(a);) h[t[1].toLowerCase()] = t[2];
                            t = h[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = _[n] = _[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (b < 2)
                                for (t in e) v[t] = [v[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return c && c.abort(t), i(0, t), this
                    }
                };
            if (m.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, d.url = ((t || d.url || en) + "").replace(Yt, "").replace(Gt, tn[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = fe.trim(d.dataType || "*").toLowerCase().match(Ee) || [""], null == d.crossDomain && (r = Xt.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === tn[1] && r[2] === tn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (tn[3] || ("http:" === tn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = fe.param(d.data, d.traditional)), q(Kt, d, n, x), 2 === b) return x;
            u = fe.event && d.global, u && 0 === fe.active++ && fe.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Qt.test(d.type), s = d.url, d.hasContent || (d.data && (s = d.url += ($t.test(s) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Ut.test(s) ? s.replace(Ut, "$1_=" + Wt++) : s + ($t.test(s) ? "&" : "?") + "_=" + Wt++)), d.ifModified && (fe.lastModified[s] && x.setRequestHeader("If-Modified-Since", fe.lastModified[s]), fe.etag[s] && x.setRequestHeader("If-None-Match", fe.etag[s])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Zt + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers) x.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (d.beforeSend.call(f, x, d) === !1 || 2 === b)) return x.abort();
            w = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[o](d[o]);
            if (c = q(Jt, d, n, x)) {
                if (x.readyState = 1, u && p.trigger("ajaxSend", [x, d]), 2 === b) return x;
                d.async && d.timeout > 0 && (l = e.setTimeout(function() {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, c.send(y, i)
                } catch (e) {
                    if (!(b < 2)) throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return x
        },
        getJSON: function(e, t, n) {
            return fe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return fe.get(e, void 0, t, "script")
        }
    }), fe.each(["get", "post"], function(e, t) {
        fe[t] = function(e, n, i, r) {
            return fe.isFunction(n) && (r = r || i, i = n, n = void 0), fe.ajax(fe.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, fe.isPlainObject(e) && e))
        }
    }), fe._evalUrl = function(e) {
        return fe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, fe.fn.extend({
        wrapAll: function(e) {
            if (fe.isFunction(e)) return this.each(function(t) {
                fe(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = fe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return fe.isFunction(e) ? this.each(function(t) {
                fe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = fe(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = fe.isFunction(e);
            return this.each(function(n) {
                fe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                fe.nodeName(this, "body") || fe(this).replaceWith(this.childNodes)
            }).end()
        }
    }), fe.expr.filters.hidden = function(e) {
        return he.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : K(e)
    }, fe.expr.filters.visible = function(e) {
        return !fe.expr.filters.hidden(e)
    };
    var nn = /%20/g,
        rn = /\[\]$/,
        on = /\r?\n/g,
        sn = /^(?:submit|button|image|reset|file)$/i,
        an = /^(?:input|select|textarea|keygen)/i;
    fe.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                t = fe.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = fe.ajaxSettings && fe.ajaxSettings.traditional), fe.isArray(e) || e.jquery && !fe.isPlainObject(e)) fe.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) J(n, e[n], t, r);
        return i.join("&").replace(nn, "+")
    }, fe.fn.extend({
        serialize: function() {
            return fe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = fe.prop(this, "elements");
                return e ? fe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !fe(this).is(":disabled") && an.test(this.nodeName) && !sn.test(e) && (this.checked || !ze.test(e))
            }).map(function(e, t) {
                var n = fe(this).val();
                return null == n ? null : fe.isArray(n) ? fe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(on, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(on, "\r\n")
                }
            }).get()
        }
    }), fe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return this.isLocal ? ee() : ie.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
    } : Z;
    var ln = 0,
        un = {},
        cn = fe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in un) un[e](void 0, !0)
    }), he.cors = !!cn && "withCredentials" in cn, cn = he.ajax = !!cn, cn && fe.ajaxTransport(function(t) {
        if (!t.crossDomain || he.cors) {
            var n;
            return {
                send: function(i, r) {
                    var o, s = t.xhr(),
                        a = ++ln;
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) s[o] = t.xhrFields[o];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (o in i) void 0 !== i[o] && s.setRequestHeader(o, i[o] + "");
                    s.send(t.hasContent && t.data || null), n = function(e, i) {
                        var o, l, u;
                        if (n && (i || 4 === s.readyState))
                            if (delete un[a], n = void 0, s.onreadystatechange = fe.noop, i) 4 !== s.readyState && s.abort();
                            else {
                                u = {}, o = s.status, "string" == typeof s.responseText && (u.text = s.responseText);
                                try {
                                    l = s.statusText
                                } catch (e) {
                                    l = ""
                                }
                                o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = u.text ? 200 : 404
                            }
                        u && r(o, l, u, s.getAllResponseHeaders())
                    }, t.async ? 4 === s.readyState ? e.setTimeout(n) : s.onreadystatechange = un[a] = n : n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    }), fe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return fe.globalEval(e), e
            }
        }
    }), fe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), fe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = ie.head || fe("head")[0] || ie.documentElement;
            return {
                send: function(i, r) {
                    t = ie.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var hn = [],
        dn = /(=)\?(?=&|$)|\?\?/;
    fe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = hn.pop() || fe.expando + "_" + Wt++;
            return this[e] = !0, e
        }
    }), fe.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, s, a = t.jsonp !== !1 && (dn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = fe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(dn, "$1" + r) : t.jsonp !== !1 && (t.url += ($t.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return s || fe.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            s = arguments
        }, i.always(function() {
            void 0 === o ? fe(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, hn.push(r)), s && fe.isFunction(o) && o(s[0]), s = o = void 0
        }), "script"
    }), fe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || ie;
        var i = xe.exec(e),
            r = !n && [];
        return i ? [t.createElement(i[1])] : (i = v([e], t, r), r && r.length && fe(r).remove(), fe.merge([], i.childNodes))
    };
    var fn = fe.fn.load;
    fe.fn.load = function(e, t, n) {
        if ("string" != typeof e && fn) return fn.apply(this, arguments);
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = fe.trim(e.slice(a, e.length)), e = e.slice(0, a)), fe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && fe.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(i ? fe("<div>").append(fe.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        fe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), fe.expr.filters.animated = function(e) {
        return fe.grep(fe.timers, function(t) {
            return e === t.elem
        }).length
    }, fe.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, u, c = fe.css(e, "position"),
                h = fe(e),
                d = {};
            "static" === c && (e.style.position = "relative"), a = h.offset(), o = fe.css(e, "top"), l = fe.css(e, "left"), u = ("absolute" === c || "fixed" === c) && fe.inArray("auto", [o, l]) > -1, u ? (i = h.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), fe.isFunction(t) && (t = t.call(e, n, fe.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : h.css(d)
        }
    }, fe.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                fe.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                o = r && r.ownerDocument;
            if (o) return t = o.documentElement, fe.contains(t, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = te(o), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === fe.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), fe.nodeName(e[0], "html") || (n = e.offset()), n.top += fe.css(e[0], "borderTopWidth", !0), n.left += fe.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - fe.css(i, "marginTop", !0),
                    left: t.left - n.left - fe.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !fe.nodeName(e, "html") && "static" === fe.css(e, "position");) e = e.offsetParent;
                return e || ft
            })
        }
    }), fe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        fe.fn[e] = function(i) {
            return He(this, function(e, i, r) {
                var o = te(e);
                return void 0 === r ? o ? t in o ? o[t] : o.document.documentElement[i] : e[i] : void(o ? o.scrollTo(n ? fe(o).scrollLeft() : r, n ? r : fe(o).scrollTop()) : e[i] = r)
            }, e, i, arguments.length, null)
        }
    }), fe.each(["top", "left"], function(e, t) {
        fe.cssHooks[t] = P(he.pixelPosition, function(e, n) {
            if (n) return n = mt(e, t), ht.test(n) ? fe(e).position()[t] + "px" : n
        })
    }), fe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        fe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            fe.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    s = n || (i === !0 || r === !0 ? "margin" : "border");
                return He(this, function(t, n, i) {
                    var r;
                    return fe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? fe.css(t, n, s) : fe.style(t, n, i, s)
                }, t, o ? i : void 0, o, null)
            }
        })
    }), fe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), fe.fn.size = function() {
        return this.length
    }, fe.fn.andSelf = fe.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return fe
    });
    var pn = e.jQuery,
        mn = e.$;
    return fe.noConflict = function(t) {
        return e.$ === fe && (e.$ = mn), t && e.jQuery === fe && (e.jQuery = pn), fe
    }, t || (e.jQuery = e.$ = fe), fe
}),
function(e, t, n) {
    function i(n) {
        var i = t.console;
        o[n] || (o[n] = !0, e.migrateWarnings.push(n), i && i.warn && !e.migrateMute && (i.warn("JQMIGRATE: " + n), e.migrateTrace && i.trace && i.trace()))
    }

    function r(t, n, r, o) {
        if (Object.defineProperty) try {
            return void Object.defineProperty(t, n, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return i(o), r
                },
                set: function(e) {
                    i(o), r = e
                }
            })
        } catch (e) {}
        e._definePropertyBroken = !0, t[n] = r
    }
    e.migrateVersion = "1.4.1";
    var o = {};
    e.migrateWarnings = [], t.console && t.console.log && t.console.log("JQMIGRATE: Migrate is installed" + (e.migrateMute ? "" : " with logging active") + ", version " + e.migrateVersion), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function() {
        o = {}, e.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && i("jQuery is not compatible with Quirks Mode");
    var s = e("<input/>", {
            size: 1
        }).attr("size") && e.attrFn,
        a = e.attr,
        l = e.attrHooks.value && e.attrHooks.value.get || function() {
            return null
        },
        u = e.attrHooks.value && e.attrHooks.value.set || function() {
            return n
        },
        c = /^(?:input|button)$/i,
        h = /^[238]$/,
        d = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        f = /^(?:checked|selected)$/i;
    r(e, "attrFn", s || {}, "jQuery.attrFn is deprecated"), e.attr = function(t, r, o, l) {
        var u = r.toLowerCase(),
            p = t && t.nodeType;
        return l && (a.length < 4 && i("jQuery.fn.attr( props, pass ) is deprecated"), t && !h.test(p) && (s ? r in s : e.isFunction(e.fn[r]))) ? e(t)[r](o) : ("type" === r && o !== n && c.test(t.nodeName) && t.parentNode && i("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[u] && d.test(u) && (e.attrHooks[u] = {
            get: function(t, i) {
                var r, o = e.prop(t, i);
                return o === !0 || "boolean" != typeof o && (r = t.getAttributeNode(i)) && r.nodeValue !== !1 ? i.toLowerCase() : n
            },
            set: function(t, n, i) {
                var r;
                return n === !1 ? e.removeAttr(t, i) : (r = e.propFix[i] || i, r in t && (t[r] = !0), t.setAttribute(i, i.toLowerCase())), i
            }
        }, f.test(u) && i("jQuery.fn.attr('" + u + "') might use property instead of attribute")), a.call(e, t, r, o))
    }, e.attrHooks.value = {
        get: function(e, t) {
            var n = (e.nodeName || "").toLowerCase();
            return "button" === n ? l.apply(this, arguments) : ("input" !== n && "option" !== n && i("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
        },
        set: function(e, t) {
            var n = (e.nodeName || "").toLowerCase();
            return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && i("jQuery.fn.attr('value', val) no longer sets properties"), void(e.value = t))
        }
    };
    var p, m, g = e.fn.init,
        v = e.find,
        y = e.parseJSON,
        _ = /^\s*</,
        b = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
        w = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
        x = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    e.fn.init = function(t, r, o) {
        var s, a;
        return t && "string" == typeof t && !e.isPlainObject(r) && (s = x.exec(e.trim(t))) && s[0] && (_.test(t) || i("$(html) HTML strings must start with '<' character"), s[3] && i("$(html) HTML text after last tag is ignored"), "#" === s[0].charAt(0) && (i("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), r && r.context && r.context.nodeType && (r = r.context), e.parseHTML) ? g.call(this, e.parseHTML(s[2], r && r.ownerDocument || r || document, !0), r, o) : (a = g.apply(this, arguments), t && t.selector !== n ? (a.selector = t.selector, a.context = t.context) : (a.selector = "string" == typeof t ? t : "", t && (a.context = t.nodeType ? t : r || document)), a)
    }, e.fn.init.prototype = e.fn, e.find = function(e) {
        var t = Array.prototype.slice.call(arguments);
        if ("string" == typeof e && b.test(e)) try {
            document.querySelector(e)
        } catch (n) {
            e = e.replace(w, function(e, t, n, i) {
                return "[" + t + n + '"' + i + '"]'
            });
            try {
                document.querySelector(e), i("Attribute selector with '#' must be quoted: " + t[0]), t[0] = e
            } catch (e) {
                i("Attribute selector with '#' was not fixed: " + t[0])
            }
        }
        return v.apply(this, t)
    };
    var k;
    for (k in v) Object.prototype.hasOwnProperty.call(v, k) && (e.find[k] = v[k]);
    e.parseJSON = function(e) {
        return e ? y.apply(this, arguments) : (i("jQuery.parseJSON requires a valid JSON string"), null)
    }, e.uaMatch = function(e) {
        e = e.toLowerCase();
        var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
        return {
            browser: t[1] || "",
            version: t[2] || "0"
        }
    }, e.browser || (p = e.uaMatch(navigator.userAgent), m = {}, p.browser && (m[p.browser] = !0, m.version = p.version), m.chrome ? m.webkit = !0 : m.webkit && (m.safari = !0), e.browser = m), r(e, "browser", e.browser, "jQuery.browser is deprecated"), e.boxModel = e.support.boxModel = "CSS1Compat" === document.compatMode, r(e, "boxModel", e.boxModel, "jQuery.boxModel is deprecated"), r(e.support, "boxModel", e.support.boxModel, "jQuery.support.boxModel is deprecated"), e.sub = function() {
        function t(e, n) {
            return new t.fn.init(e, n)
        }
        e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(i, r) {
            var o = e.fn.init.call(this, i, r, n);
            return o instanceof t ? o : t(o)
        }, t.fn.init.prototype = t.fn;
        var n = t(document);
        return i("jQuery.sub() is deprecated"), t
    }, e.fn.size = function() {
        return i("jQuery.fn.size() is deprecated; use the .length property"), this.length
    };
    var S = !1;
    e.swap && e.each(["height", "width", "reliableMarginRight"], function(t, n) {
        var i = e.cssHooks[n] && e.cssHooks[n].get;
        i && (e.cssHooks[n].get = function() {
            var e;
            return S = !0, e = i.apply(this, arguments), S = !1, e
        })
    }), e.swap = function(e, t, n, r) {
        var o, s, a = {};
        S || i("jQuery.swap() is undocumented and deprecated");
        for (s in t) a[s] = e.style[s], e.style[s] = t[s];
        o = n.apply(e, r || []);
        for (s in t) e.style[s] = a[s];
        return o
    }, e.ajaxSetup({
        converters: {
            "text json": e.parseJSON
        }
    });
    var T = e.fn.data;
    e.fn.data = function(t) {
        var r, o, s = this[0];
        return !s || "events" !== t || 1 !== arguments.length || (r = e.data(s, t), o = e._data(s, t), r !== n && r !== o || o === n) ? T.apply(this, arguments) : (i("Use of jQuery.fn.data('events') is deprecated"), o)
    };
    var C = /\/(java|ecma)script/i;
    e.clean || (e.clean = function(t, n, r, o) {
        n = n || document, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, i("jQuery.clean() is deprecated");
        var s, a, l, u, c = [];
        if (e.merge(c, e.buildFragment(t, n).childNodes), r)
            for (l = function(e) {
                    if (!e.type || C.test(e.type)) return o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : r.appendChild(e)
                }, s = 0; null != (a = c[s]); s++) e.nodeName(a, "script") && l(a) || (r.appendChild(a), "undefined" != typeof a.getElementsByTagName && (u = e.grep(e.merge([], a.getElementsByTagName("script")), l), c.splice.apply(c, [s + 1, 0].concat(u)), s += u.length));
        return c
    });
    var D = e.event.add,
        M = e.event.remove,
        E = e.event.trigger,
        A = e.fn.toggle,
        P = e.fn.live,
        O = e.fn.die,
        I = e.fn.load,
        N = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
        j = new RegExp("\\b(?:" + N + ")\\b"),
        R = /(?:^|\s)hover(\.\S+|)\b/,
        L = function(t) {
            return "string" != typeof t || e.event.special.hover ? t : (R.test(t) && i("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(R, "mouseenter$1 mouseleave$1"))
        };
    e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && r(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function(e, t, n, r, o) {
        e !== document && j.test(t) && i("AJAX events should be attached to document: " + t), D.call(this, e, L(t || ""), n, r, o)
    }, e.event.remove = function(e, t, n, i, r) {
        M.call(this, e, L(t) || "", n, i, r)
    }, e.each(["load", "unload", "error"], function(t, n) {
        e.fn[n] = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === n && "string" == typeof e[0] ? I.apply(this, e) : (i("jQuery.fn." + n + "() is deprecated"), e.splice(0, 0, n), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this))
        }
    }), e.fn.toggle = function(t, n) {
        if (!e.isFunction(t) || !e.isFunction(n)) return A.apply(this, arguments);
        i("jQuery.fn.toggle(handler, handler...) is deprecated");
        var r = arguments,
            o = t.guid || e.guid++,
            s = 0,
            a = function(n) {
                var i = (e._data(this, "lastToggle" + t.guid) || 0) % s;
                return e._data(this, "lastToggle" + t.guid, i + 1), n.preventDefault(), r[i].apply(this, arguments) || !1
            };
        for (a.guid = o; s < r.length;) r[s++].guid = o;
        return this.click(a)
    }, e.fn.live = function(t, n, r) {
        return i("jQuery.fn.live() is deprecated"), P ? P.apply(this, arguments) : (e(this.context).on(t, this.selector, n, r), this)
    }, e.fn.die = function(t, n) {
        return i("jQuery.fn.die() is deprecated"), O ? O.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
    }, e.event.trigger = function(e, t, n, r) {
        return n || j.test(e) || i("Global events are undocumented and deprecated"), E.call(this, e, t, n || document, r)
    }, e.each(N.split("|"), function(t, n) {
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
    var F = e.fn.andSelf || e.fn.addBack,
        H = e.fn.find;
    if (e.fn.andSelf = function() {
            return i("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), F.apply(this, arguments)
        }, e.fn.find = function(e) {
            var t = H.apply(this, arguments);
            return t.context = this.context, t.selector = this.selector ? this.selector + " " + e : e, t
        }, e.Callbacks) {
        var z = e.Deferred,
            W = [
                ["resolve", "done", e.Callbacks("once memory"), e.Callbacks("once memory"), "resolved"],
                ["reject", "fail", e.Callbacks("once memory"), e.Callbacks("once memory"), "rejected"],
                ["notify", "progress", e.Callbacks("memory"), e.Callbacks("memory")]
            ];
        e.Deferred = function(t) {
            var n = z(),
                r = n.promise();
            return n.pipe = r.pipe = function() {
                var t = arguments;
                return i("deferred.pipe() is deprecated"), e.Deferred(function(i) {
                    e.each(W, function(o, s) {
                        var a = e.isFunction(t[o]) && t[o];
                        n[s[1]](function() {
                            var t = a && a.apply(this, arguments);
                            t && e.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s[0] + "With"](this === r ? i.promise() : this, a ? [t] : arguments)
                        })
                    }), t = null
                }).promise()
            }, n.isResolved = function() {
                return i("deferred.isResolved is deprecated"), "resolved" === n.state()
            }, n.isRejected = function() {
                return i("deferred.isRejected is deprecated"), "rejected" === n.state()
            }, t && t.call(n, n), n
        }
    }
}(jQuery, window),
function(e, t) {
    "use strict";
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var n, i = e(document);
    e.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return e("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return e("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(e) {
            var t = n.csrfToken();
            t && e.setRequestHeader("X-CSRF-Token", t)
        },
        refreshCSRFTokens: function() {
            e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
        },
        fire: function(t, n, i) {
            var r = e.Event(n);
            return t.trigger(r, i), r.result !== !1
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(t) {
            return e.ajax(t)
        },
        href: function(e) {
            return e[0].href
        },
        isRemote: function(e) {
            return e.data("remote") !== t && e.data("remote") !== !1
        },
        handleRemote: function(i) {
            var r, o, s, a, l, u;
            if (n.fire(i, "ajax:before")) {
                if (a = i.data("with-credentials") || null, l = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                    r = i.data("ujs:submit-button-formmethod") || i.attr("method"), o = i.data("ujs:submit-button-formaction") || i.attr("action"), s = e(i[0]).serializeArray();
                    var c = i.data("ujs:submit-button");
                    c && (s.push(c), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                } else i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), s = i.data("params") || null);
                return u = {
                    type: r || "GET",
                    data: s,
                    dataType: l,
                    beforeSend: function(e, r) {
                        return r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), !!n.fire(i, "ajax:beforeSend", [e, r]) && void i.trigger("ajax:send", e)
                    },
                    success: function(e, t, n) {
                        i.trigger("ajax:success", [e, t, n])
                    },
                    complete: function(e, t) {
                        i.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, n) {
                        i.trigger("ajax:error", [e, t, n])
                    },
                    crossDomain: n.isCrossDomain(o)
                }, a && (u.xhrFields = {
                    withCredentials: a
                }), o && (u.url = o), n.ajax(u)
            }
            return !1
        },
        isCrossDomain: function(e) {
            var t = document.createElement("a");
            t.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = e, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || t.protocol + "//" + t.host == n.protocol + "//" + n.host)
            } catch (e) {
                return !0
            }
        },
        handleMethod: function(i) {
            var r = n.href(i),
                o = i.data("method"),
                s = i.attr("target"),
                a = n.csrfToken(),
                l = n.csrfParam(),
                u = e('<form method="post" action="' + r + '"></form>'),
                c = '<input name="_method" value="' + o + '" type="hidden" />';
            l === t || a === t || n.isCrossDomain(r) || (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), s && u.attr("target", s), u.hide().append(c).appendTo("body"), u.submit()
        },
        formElements: function(t, n) {
            return t.is("form") ? e(t[0].elements).filter(n) : t.find(n)
        },
        disableFormElements: function(t) {
            n.formElements(t, n.disableSelector).each(function() {
                n.disableFormElement(e(this))
            })
        },
        disableFormElement: function(e) {
            var n, i;
            n = e.is("button") ? "html" : "val", i = e.data("disable-with"), i !== t && (e.data("ujs:enable-with", e[n]()), e[n](i)), e.prop("disabled", !0), e.data("ujs:disabled", !0)
        },
        enableFormElements: function(t) {
            n.formElements(t, n.enableSelector).each(function() {
                n.enableFormElement(e(this))
            })
        },
        enableFormElement: function(e) {
            var n = e.is("button") ? "html" : "val";
            e.data("ujs:enable-with") !== t && (e[n](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.prop("disabled", !1), e.removeData("ujs:disabled")
        },
        allowAction: function(e) {
            var t, i = e.data("confirm"),
                r = !1;
            if (!i) return !0;
            if (n.fire(e, "confirm")) {
                try {
                    r = n.confirm(i)
                } catch (e) {
                    (console.error || console.log).call(console, e.stack || e)
                }
                t = n.fire(e, "confirm:complete", [r])
            }
            return r && t
        },
        blankInputs: function(t, n, i) {
            var r, o, s, a, l = e(),
                u = n || "input,textarea",
                c = t.find(u),
                h = {};
            return c.each(function() {
                r = e(this), r.is("input[type=radio]") ? (a = r.attr("name"), h[a] || (0 === t.find('input[type=radio]:checked[name="' + a + '"]').length && (s = t.find('input[type=radio][name="' + a + '"]'), l = l.add(s)), h[a] = a)) : (o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : !!r.val(), o === i && (l = l.add(r)))
            }), !!l.length && l
        },
        nonBlankInputs: function(e, t) {
            return n.blankInputs(e, t, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        disableElement: function(e) {
            var i = e.data("disable-with");
            i !== t && (e.data("ujs:enable-with", e.html()), e.html(i)), e.bind("click.railsDisable", function(e) {
                return n.stopEverything(e)
            }), e.data("ujs:disabled", !0)
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")), e.unbind("click.railsDisable"), e.removeData("ujs:disabled")
        }
    }, n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) {
        e.crossDomain || n.CSRFProtection(i)
    }), e(window).on("pageshow.rails", function() {
        e(e.rails.enableSelector).each(function() {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableFormElement(t)
        }), e(e.rails.linkDisableSelector).each(function() {
            var t = e(this);
            t.data("ujs:disabled") && e.rails.enableElement(t)
        })
    }), i.on("ajax:complete", n.linkDisableSelector, function() {
        n.enableElement(e(this))
    }), i.on("ajax:complete", n.buttonDisableSelector, function() {
        n.enableFormElement(e(this))
    }), i.on("click.rails", n.linkClickSelector, function(t) {
        var i = e(this),
            r = i.data("method"),
            o = i.data("params"),
            s = t.metaKey || t.ctrlKey;
        if (!n.allowAction(i)) return n.stopEverything(t);
        if (!s && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
            if (s && (!r || "GET" === r) && !o) return !0;
            var a = n.handleRemote(i);
            return a === !1 ? n.enableElement(i) : a.fail(function() {
                n.enableElement(i)
            }), !1
        }
        return r ? (n.handleMethod(i), !1) : void 0
    }), i.on("click.rails", n.buttonClickSelector, function(t) {
        var i = e(this);
        if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(t);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var r = n.handleRemote(i);
        return r === !1 ? n.enableFormElement(i) : r.fail(function() {
            n.enableFormElement(i)
        }), !1
    }), i.on("change.rails", n.inputChangeSelector, function(t) {
        var i = e(this);
        return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
    }), i.on("submit.rails", n.formSubmitSelector, function(i) {
        var r, o, s = e(this),
            a = n.isRemote(s);
        if (!n.allowAction(s)) return n.stopEverything(i);
        if (s.attr("novalidate") === t)
            if (s.data("ujs:formnovalidate-button") === t) {
                if (r = n.blankInputs(s, n.requiredInputSelector, !1), r && n.fire(s, "ajax:aborted:required", [r])) return n.stopEverything(i)
            } else s.data("ujs:formnovalidate-button", t);
        if (a) {
            if (o = n.nonBlankInputs(s, n.fileInputSelector)) {
                setTimeout(function() {
                    n.disableFormElements(s)
                }, 13);
                var l = n.fire(s, "ajax:aborted:file", [o]);
                return l || setTimeout(function() {
                    n.enableFormElements(s)
                }, 13), l
            }
            return n.handleRemote(s), !1
        }
        setTimeout(function() {
            n.disableFormElements(s)
        }, 13)
    }), i.on("click.rails", n.formInputClickSelector, function(t) {
        var i = e(this);
        if (!n.allowAction(i)) return n.stopEverything(t);
        var r = i.attr("name"),
            o = r ? {
                name: r,
                value: i.val()
            } : null,
            s = i.closest("form");
        0 === s.length && (s = e("#" + i.attr("form"))), s.data("ujs:submit-button", o), s.data("ujs:formnovalidate-button", i.attr("formnovalidate")), s.data("ujs:submit-button-formaction", i.attr("formaction")), s.data("ujs:submit-button-formmethod", i.attr("formmethod"))
    }), i.on("ajax:send.rails", n.formSubmitSelector, function(t) {
        this === t.target && n.disableFormElements(e(this))
    }), i.on("ajax:complete.rails", n.formSubmitSelector, function(t) {
        this === t.target && n.enableFormElements(e(this))
    }), e(function() {
        n.refreshCSRFTokens()
    }))
}(jQuery), Object.create(null), ! function(e, t) {
        var n = function() {
                return n.get.apply(n, arguments)
            },
            i = n.utils = {
                isArray: Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                },
                isPlainObject: function(e) {
                    return !!e && "[object Object]" === Object.prototype.toString.call(e)
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
                encode: function(e) {
                    return String(e).replace(/[,;"\\=\s%]/g, function(e) {
                        return encodeURIComponent(e)
                    })
                },
                decode: function(e) {
                    return decodeURIComponent(e)
                },
                retrieve: function(e, t) {
                    return null == e ? t : e
                }
            };
        n.defaults = {}, n.expiresMultiplier = 86400, n.set = function(n, r, o) {
            if (i.isPlainObject(n))
                for (var s in n) n.hasOwnProperty(s) && this.set(s, n[s], r);
            else {
                o = i.isPlainObject(o) ? o : {
                    expires: o
                };
                var a = o.expires !== t ? o.expires : this.defaults.expires || "",
                    l = typeof a;
                "string" === l && "" !== a ? a = new Date(a) : "number" === l && (a = new Date(+new Date + 1e3 * this.expiresMultiplier * a)), "" !== a && "toGMTString" in a && (a = ";expires=" + a.toGMTString());
                var u = o.path || this.defaults.path;
                u = u ? ";path=" + u : "";
                var c = o.domain || this.defaults.domain;
                c = c ? ";domain=" + c : "";
                var h = o.secure || this.defaults.secure ? ";secure" : "";
                o.secure === !1 && (h = ""), e.cookie = i.encode(n) + "=" + i.encode(r) + a + u + c + h
            }
            return this
        }, n.setDefault = function(e, r, o) {
            if (i.isPlainObject(e)) {
                for (var s in e) this.get(s) === t && this.set(s, e[s], r);
                return n
            }
            if (this.get(e) === t) return this.set.apply(this, arguments)
        }, n.remove = function(e) {
            e = i.isArray(e) ? e : i.toArray(arguments);
            for (var t = 0, n = e.length; t < n; t++) this.set(e[t], "", -1);
            return this
        }, n.removeSpecific = function(e, t) {
            if (!t) return this.remove(e);
            e = i.isArray(e) ? e : [e], t.expires = -1;
            for (var n = 0, r = e.length; n < r; n++) this.set(e[n], "", t);
            return this
        }, n.empty = function() {
            return this.remove(i.getKeys(this.all()))
        }, n.get = function(e, t) {
            var n = this.all();
            if (i.isArray(e)) {
                for (var r = {}, o = 0, s = e.length; o < s; o++) {
                    var a = e[o];
                    r[a] = i.retrieve(n[a], t)
                }
                return r
            }
            return i.retrieve(n[e], t)
        }, n.all = function() {
            if ("" === e.cookie) return {};
            for (var t = e.cookie.split("; "), n = {}, r = 0, o = t.length; r < o; r++) {
                var s = t[r].split("="),
                    a = i.decode(s.shift()),
                    l = i.decode(s.join("="));
                n[a] = l
            }
            return n
        }, n.enabled = function() {
            if (navigator.cookieEnabled) return !0;
            var e = "_" === n.set("_", "_").get("_");
            return n.remove("_"), e
        }, "function" == typeof define && define.amd ? define(function() {
            return {
                cookie: n
            }
        }) : "undefined" != typeof exports ? exports.cookie = n : window.cookie = n
    }("undefined" == typeof document ? null : document),
    function() {
        function e(e) {
            function t(t, n, i, r, o, s) {
                for (; o >= 0 && o < s; o += e) {
                    var a = r ? r[o] : o;
                    i = n(i, t[a], a, t)
                }
                return i
            }
            return function(n, i, r, o) {
                i = _(i, o, 4);
                var s = !C(n) && y.keys(n),
                    a = (s || n).length,
                    l = e > 0 ? 0 : a - 1;
                return arguments.length < 3 && (r = n[s ? s[l] : l], l += e), t(n, i, r, s, l, a)
            }
        }

        function t(e) {
            return function(t, n, i) {
                n = b(n, i);
                for (var r = T(t), o = e > 0 ? 0 : r - 1; o >= 0 && o < r; o += e)
                    if (n(t[o], o, t)) return o;
                return -1
            }
        }

        function n(e, t, n) {
            return function(i, r, o) {
                var s = 0,
                    a = T(i);
                if ("number" == typeof o) e > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1;
                else if (n && o && a) return o = n(i, r), i[o] === r ? o : -1;
                if (r !== r) return o = t(c.call(i, s, a), y.isNaN), o >= 0 ? o + s : -1;
                for (o = e > 0 ? s : a - 1; o >= 0 && o < a; o += e)
                    if (i[o] === r) return o;
                return -1
            }
        }

        function i(e, t) {
            var n = P.length,
                i = e.constructor,
                r = y.isFunction(i) && i.prototype || a,
                o = "constructor";
            for (y.has(e, o) && !y.contains(t, o) && t.push(o); n--;) o = P[n], o in e && e[o] !== r[o] && !y.contains(t, o) && t.push(o)
        }
        var r = this,
            o = r._,
            s = Array.prototype,
            a = Object.prototype,
            l = Function.prototype,
            u = s.push,
            c = s.slice,
            h = a.toString,
            d = a.hasOwnProperty,
            f = Array.isArray,
            p = Object.keys,
            m = l.bind,
            g = Object.create,
            v = function() {},
            y = function(e) {
                return e instanceof y ? e : this instanceof y ? void(this._wrapped = e) : new y(e)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y), exports._ = y) : r._ = y, y.VERSION = "1.8.3";
        var _ = function(e, t, n) {
                if (void 0 === t) return e;
                switch (null == n ? 3 : n) {
                    case 1:
                        return function(n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function(n, i) {
                            return e.call(t, n, i)
                        };
                    case 3:
                        return function(n, i, r) {
                            return e.call(t, n, i, r)
                        };
                    case 4:
                        return function(n, i, r, o) {
                            return e.call(t, n, i, r, o)
                        }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            },
            b = function(e, t, n) {
                return null == e ? y.identity : y.isFunction(e) ? _(e, t, n) : y.isObject(e) ? y.matcher(e) : y.property(e)
            };
        y.iteratee = function(e, t) {
            return b(e, t, 1 / 0)
        };
        var w = function(e, t) {
                return function(n) {
                    var i = arguments.length;
                    if (i < 2 || null == n) return n;
                    for (var r = 1; r < i; r++)
                        for (var o = arguments[r], s = e(o), a = s.length, l = 0; l < a; l++) {
                            var u = s[l];
                            t && void 0 !== n[u] || (n[u] = o[u])
                        }
                    return n
                }
            },
            x = function(e) {
                if (!y.isObject(e)) return {};
                if (g) return g(e);
                v.prototype = e;
                var t = new v;
                return v.prototype = null, t
            },
            k = function(e) {
                return function(t) {
                    return null == t ? void 0 : t[e]
                }
            },
            S = Math.pow(2, 53) - 1,
            T = k("length"),
            C = function(e) {
                var t = T(e);
                return "number" == typeof t && t >= 0 && t <= S
            };
        y.each = y.forEach = function(e, t, n) {
            t = _(t, n);
            var i, r;
            if (C(e))
                for (i = 0, r = e.length; i < r; i++) t(e[i], i, e);
            else {
                var o = y.keys(e);
                for (i = 0, r = o.length; i < r; i++) t(e[o[i]], o[i], e)
            }
            return e
        }, y.map = y.collect = function(e, t, n) {
            t = b(t, n);
            for (var i = !C(e) && y.keys(e), r = (i || e).length, o = Array(r), s = 0; s < r; s++) {
                var a = i ? i[s] : s;
                o[s] = t(e[a], a, e)
            }
            return o
        }, y.reduce = y.foldl = y.inject = e(1), y.reduceRight = y.foldr = e(-1), y.find = y.detect = function(e, t, n) {
            var i;
            if (i = C(e) ? y.findIndex(e, t, n) : y.findKey(e, t, n), void 0 !== i && i !== -1) return e[i]
        }, y.filter = y.select = function(e, t, n) {
            var i = [];
            return t = b(t, n), y.each(e, function(e, n, r) {
                t(e, n, r) && i.push(e)
            }), i
        }, y.reject = function(e, t, n) {
            return y.filter(e, y.negate(b(t)), n)
        }, y.every = y.all = function(e, t, n) {
            t = b(t, n);
            for (var i = !C(e) && y.keys(e), r = (i || e).length, o = 0; o < r; o++) {
                var s = i ? i[o] : o;
                if (!t(e[s], s, e)) return !1
            }
            return !0
        }, y.some = y.any = function(e, t, n) {
            t = b(t, n);
            for (var i = !C(e) && y.keys(e), r = (i || e).length, o = 0; o < r; o++) {
                var s = i ? i[o] : o;
                if (t(e[s], s, e)) return !0
            }
            return !1
        }, y.contains = y.includes = y.include = function(e, t, n, i) {
            return C(e) || (e = y.values(e)), ("number" != typeof n || i) && (n = 0), y.indexOf(e, t, n) >= 0
        }, y.invoke = function(e, t) {
            var n = c.call(arguments, 2),
                i = y.isFunction(t);
            return y.map(e, function(e) {
                var r = i ? t : e[t];
                return null == r ? r : r.apply(e, n)
            })
        }, y.pluck = function(e, t) {
            return y.map(e, y.property(t))
        }, y.where = function(e, t) {
            return y.filter(e, y.matcher(t))
        }, y.findWhere = function(e, t) {
            return y.find(e, y.matcher(t))
        }, y.max = function(e, t, n) {
            var i, r, o = -(1 / 0),
                s = -(1 / 0);
            if (null == t && null != e) {
                e = C(e) ? e : y.values(e);
                for (var a = 0, l = e.length; a < l; a++) i = e[a], i > o && (o = i)
            } else t = b(t, n), y.each(e, function(e, n, i) {
                r = t(e, n, i), (r > s || r === -(1 / 0) && o === -(1 / 0)) && (o = e, s = r)
            });
            return o
        }, y.min = function(e, t, n) {
            var i, r, o = 1 / 0,
                s = 1 / 0;
            if (null == t && null != e) {
                e = C(e) ? e : y.values(e);
                for (var a = 0, l = e.length; a < l; a++) i = e[a], i < o && (o = i)
            } else t = b(t, n), y.each(e, function(e, n, i) {
                r = t(e, n, i), (r < s || r === 1 / 0 && o === 1 / 0) && (o = e, s = r)
            });
            return o
        }, y.shuffle = function(e) {
            for (var t, n = C(e) ? e : y.values(e), i = n.length, r = Array(i), o = 0; o < i; o++) t = y.random(0, o), t !== o && (r[o] = r[t]), r[t] = n[o];
            return r
        }, y.sample = function(e, t, n) {
            return null == t || n ? (C(e) || (e = y.values(e)), e[y.random(e.length - 1)]) : y.shuffle(e).slice(0, Math.max(0, t))
        }, y.sortBy = function(e, t, n) {
            return t = b(t, n), y.pluck(y.map(e, function(e, n, i) {
                return {
                    value: e,
                    index: n,
                    criteria: t(e, n, i)
                }
            }).sort(function(e, t) {
                var n = e.criteria,
                    i = t.criteria;
                if (n !== i) {
                    if (n > i || void 0 === n) return 1;
                    if (n < i || void 0 === i) return -1
                }
                return e.index - t.index
            }), "value")
        };
        var D = function(e) {
            return function(t, n, i) {
                var r = {};
                return n = b(n, i), y.each(t, function(i, o) {
                    var s = n(i, o, t);
                    e(r, i, s)
                }), r
            }
        };
        y.groupBy = D(function(e, t, n) {
            y.has(e, n) ? e[n].push(t) : e[n] = [t]
        }), y.indexBy = D(function(e, t, n) {
            e[n] = t
        }), y.countBy = D(function(e, t, n) {
            y.has(e, n) ? e[n]++ : e[n] = 1
        }), y.toArray = function(e) {
            return e ? y.isArray(e) ? c.call(e) : C(e) ? y.map(e, y.identity) : y.values(e) : []
        }, y.size = function(e) {
            return null == e ? 0 : C(e) ? e.length : y.keys(e).length
        }, y.partition = function(e, t, n) {
            t = b(t, n);
            var i = [],
                r = [];
            return y.each(e, function(e, n, o) {
                (t(e, n, o) ? i : r).push(e)
            }), [i, r]
        }, y.first = y.head = y.take = function(e, t, n) {
            if (null != e) return null == t || n ? e[0] : y.initial(e, e.length - t)
        }, y.initial = function(e, t, n) {
            return c.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
        }, y.last = function(e, t, n) {
            if (null != e) return null == t || n ? e[e.length - 1] : y.rest(e, Math.max(0, e.length - t))
        }, y.rest = y.tail = y.drop = function(e, t, n) {
            return c.call(e, null == t || n ? 1 : t)
        }, y.compact = function(e) {
            return y.filter(e, y.identity)
        };
        var M = function(e, t, n, i) {
            for (var r = [], o = 0, s = i || 0, a = T(e); s < a; s++) {
                var l = e[s];
                if (C(l) && (y.isArray(l) || y.isArguments(l))) {
                    t || (l = M(l, t, n));
                    var u = 0,
                        c = l.length;
                    for (r.length += c; u < c;) r[o++] = l[u++]
                } else n || (r[o++] = l)
            }
            return r
        };
        y.flatten = function(e, t) {
            return M(e, t, !1)
        }, y.without = function(e) {
            return y.difference(e, c.call(arguments, 1))
        }, y.uniq = y.unique = function(e, t, n, i) {
            y.isBoolean(t) || (i = n, n = t, t = !1), null != n && (n = b(n, i));
            for (var r = [], o = [], s = 0, a = T(e); s < a; s++) {
                var l = e[s],
                    u = n ? n(l, s, e) : l;
                t ? (s && o === u || r.push(l), o = u) : n ? y.contains(o, u) || (o.push(u), r.push(l)) : y.contains(r, l) || r.push(l)
            }
            return r
        }, y.union = function() {
            return y.uniq(M(arguments, !0, !0))
        }, y.intersection = function(e) {
            for (var t = [], n = arguments.length, i = 0, r = T(e); i < r; i++) {
                var o = e[i];
                if (!y.contains(t, o)) {
                    for (var s = 1; s < n && y.contains(arguments[s], o); s++);
                    s === n && t.push(o)
                }
            }
            return t
        }, y.difference = function(e) {
            var t = M(arguments, !0, !0, 1);
            return y.filter(e, function(e) {
                return !y.contains(t, e)
            })
        }, y.zip = function() {
            return y.unzip(arguments)
        }, y.unzip = function(e) {
            for (var t = e && y.max(e, T).length || 0, n = Array(t), i = 0; i < t; i++) n[i] = y.pluck(e, i);
            return n
        }, y.object = function(e, t) {
            for (var n = {}, i = 0, r = T(e); i < r; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
            return n
        }, y.findIndex = t(1), y.findLastIndex = t(-1), y.sortedIndex = function(e, t, n, i) {
            n = b(n, i, 1);
            for (var r = n(t), o = 0, s = T(e); o < s;) {
                var a = Math.floor((o + s) / 2);
                n(e[a]) < r ? o = a + 1 : s = a
            }
            return o
        }, y.indexOf = n(1, y.findIndex, y.sortedIndex), y.lastIndexOf = n(-1, y.findLastIndex), y.range = function(e, t, n) {
            null == t && (t = e || 0, e = 0), n = n || 1;
            for (var i = Math.max(Math.ceil((t - e) / n), 0), r = Array(i), o = 0; o < i; o++, e += n) r[o] = e;
            return r
        };
        var E = function(e, t, n, i, r) {
            if (!(i instanceof t)) return e.apply(n, r);
            var o = x(e.prototype),
                s = e.apply(o, r);
            return y.isObject(s) ? s : o
        };
        y.bind = function(e, t) {
            if (m && e.bind === m) return m.apply(e, c.call(arguments, 1));
            if (!y.isFunction(e)) throw new TypeError("Bind must be called on a function");
            var n = c.call(arguments, 2),
                i = function() {
                    return E(e, i, t, this, n.concat(c.call(arguments)))
                };
            return i
        }, y.partial = function(e) {
            var t = c.call(arguments, 1),
                n = function() {
                    for (var i = 0, r = t.length, o = Array(r), s = 0; s < r; s++) o[s] = t[s] === y ? arguments[i++] : t[s];
                    for (; i < arguments.length;) o.push(arguments[i++]);
                    return E(e, n, this, this, o)
                };
            return n
        }, y.bindAll = function(e) {
            var t, n, i = arguments.length;
            if (i <= 1) throw new Error("bindAll must be passed function names");
            for (t = 1; t < i; t++) n = arguments[t], e[n] = y.bind(e[n], e);
            return e
        }, y.memoize = function(e, t) {
            var n = function(i) {
                var r = n.cache,
                    o = "" + (t ? t.apply(this, arguments) : i);
                return y.has(r, o) || (r[o] = e.apply(this, arguments)), r[o]
            };
            return n.cache = {}, n
        }, y.delay = function(e, t) {
            var n = c.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, n)
            }, t)
        }, y.defer = y.partial(y.delay, y, 1), y.throttle = function(e, t, n) {
            var i, r, o, s = null,
                a = 0;
            n || (n = {});
            var l = function() {
                a = n.leading === !1 ? 0 : y.now(), s = null, o = e.apply(i, r), s || (i = r = null)
            };
            return function() {
                var u = y.now();
                a || n.leading !== !1 || (a = u);
                var c = t - (u - a);
                return i = this, r = arguments, c <= 0 || c > t ? (s && (clearTimeout(s), s = null), a = u, o = e.apply(i, r), s || (i = r = null)) : s || n.trailing === !1 || (s = setTimeout(l, c)), o
            }
        }, y.debounce = function(e, t, n) {
            var i, r, o, s, a, l = function() {
                var u = y.now() - s;
                u < t && u >= 0 ? i = setTimeout(l, t - u) : (i = null, n || (a = e.apply(o, r), i || (o = r = null)))
            };
            return function() {
                o = this, r = arguments, s = y.now();
                var u = n && !i;
                return i || (i = setTimeout(l, t)), u && (a = e.apply(o, r), o = r = null), a
            }
        }, y.wrap = function(e, t) {
            return y.partial(t, e)
        }, y.negate = function(e) {
            return function() {
                return !e.apply(this, arguments)
            }
        }, y.compose = function() {
            var e = arguments,
                t = e.length - 1;
            return function() {
                for (var n = t, i = e[t].apply(this, arguments); n--;) i = e[n].call(this, i);
                return i
            }
        }, y.after = function(e, t) {
            return function() {
                if (--e < 1) return t.apply(this, arguments)
            }
        }, y.before = function(e, t) {
            var n;
            return function() {
                return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
            }
        }, y.once = y.partial(y.before, 2);
        var A = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            P = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        y.keys = function(e) {
            if (!y.isObject(e)) return [];
            if (p) return p(e);
            var t = [];
            for (var n in e) y.has(e, n) && t.push(n);
            return A && i(e, t), t
        }, y.allKeys = function(e) {
            if (!y.isObject(e)) return [];
            var t = [];
            for (var n in e) t.push(n);
            return A && i(e, t), t
        }, y.values = function(e) {
            for (var t = y.keys(e), n = t.length, i = Array(n), r = 0; r < n; r++) i[r] = e[t[r]];
            return i
        }, y.mapObject = function(e, t, n) {
            t = b(t, n);
            for (var i, r = y.keys(e), o = r.length, s = {}, a = 0; a < o; a++) i = r[a], s[i] = t(e[i], i, e);
            return s
        }, y.pairs = function(e) {
            for (var t = y.keys(e), n = t.length, i = Array(n), r = 0; r < n; r++) i[r] = [t[r], e[t[r]]];
            return i
        }, y.invert = function(e) {
            for (var t = {}, n = y.keys(e), i = 0, r = n.length; i < r; i++) t[e[n[i]]] = n[i];
            return t
        }, y.functions = y.methods = function(e) {
            var t = [];
            for (var n in e) y.isFunction(e[n]) && t.push(n);
            return t.sort()
        }, y.extend = w(y.allKeys), y.extendOwn = y.assign = w(y.keys), y.findKey = function(e, t, n) {
            t = b(t, n);
            for (var i, r = y.keys(e), o = 0, s = r.length; o < s; o++)
                if (i = r[o], t(e[i], i, e)) return i
        }, y.pick = function(e, t, n) {
            var i, r, o = {},
                s = e;
            if (null == s) return o;
            y.isFunction(t) ? (r = y.allKeys(s), i = _(t, n)) : (r = M(arguments, !1, !1, 1), i = function(e, t, n) {
                return t in n
            }, s = Object(s));
            for (var a = 0, l = r.length; a < l; a++) {
                var u = r[a],
                    c = s[u];
                i(c, u, s) && (o[u] = c)
            }
            return o
        }, y.omit = function(e, t, n) {
            if (y.isFunction(t)) t = y.negate(t);
            else {
                var i = y.map(M(arguments, !1, !1, 1), String);
                t = function(e, t) {
                    return !y.contains(i, t)
                }
            }
            return y.pick(e, t, n)
        }, y.defaults = w(y.allKeys, !0), y.create = function(e, t) {
            var n = x(e);
            return t && y.extendOwn(n, t), n
        }, y.clone = function(e) {
            return y.isObject(e) ? y.isArray(e) ? e.slice() : y.extend({}, e) : e
        }, y.tap = function(e, t) {
            return t(e), e
        }, y.isMatch = function(e, t) {
            var n = y.keys(t),
                i = n.length;
            if (null == e) return !i;
            for (var r = Object(e), o = 0; o < i; o++) {
                var s = n[o];
                if (t[s] !== r[s] || !(s in r)) return !1
            }
            return !0
        };
        var O = function(e, t, n, i) {
            if (e === t) return 0 !== e || 1 / e === 1 / t;
            if (null == e || null == t) return e === t;
            e instanceof y && (e = e._wrapped), t instanceof y && (t = t._wrapped);
            var r = h.call(e);
            if (r !== h.call(t)) return !1;
            switch (r) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + e == "" + t;
                case "[object Number]":
                    return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e === +t
            }
            var o = "[object Array]" === r;
            if (!o) {
                if ("object" != typeof e || "object" != typeof t) return !1;
                var s = e.constructor,
                    a = t.constructor;
                if (s !== a && !(y.isFunction(s) && s instanceof s && y.isFunction(a) && a instanceof a) && "constructor" in e && "constructor" in t) return !1
            }
            n = n || [], i = i || [];
            for (var l = n.length; l--;)
                if (n[l] === e) return i[l] === t;
            if (n.push(e), i.push(t), o) {
                if (l = e.length, l !== t.length) return !1;
                for (; l--;)
                    if (!O(e[l], t[l], n, i)) return !1
            } else {
                var u, c = y.keys(e);
                if (l = c.length, y.keys(t).length !== l) return !1;
                for (; l--;)
                    if (u = c[l], !y.has(t, u) || !O(e[u], t[u], n, i)) return !1
            }
            return n.pop(), i.pop(), !0
        };
        y.isEqual = function(e, t) {
            return O(e, t)
        }, y.isEmpty = function(e) {
            return null == e || (C(e) && (y.isArray(e) || y.isString(e) || y.isArguments(e)) ? 0 === e.length : 0 === y.keys(e).length)
        }, y.isElement = function(e) {
            return !(!e || 1 !== e.nodeType)
        }, y.isArray = f || function(e) {
            return "[object Array]" === h.call(e)
        }, y.isObject = function(e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }, y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
            y["is" + e] = function(t) {
                return h.call(t) === "[object " + e + "]"
            }
        }), y.isArguments(arguments) || (y.isArguments = function(e) {
            return y.has(e, "callee")
        }), "function" != typeof /./ && "object" != typeof Int8Array && (y.isFunction = function(e) {
            return "function" == typeof e || !1
        }), y.isFinite = function(e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, y.isNaN = function(e) {
            return y.isNumber(e) && e !== +e
        }, y.isBoolean = function(e) {
            return e === !0 || e === !1 || "[object Boolean]" === h.call(e)
        }, y.isNull = function(e) {
            return null === e
        }, y.isUndefined = function(e) {
            return void 0 === e
        }, y.has = function(e, t) {
            return null != e && d.call(e, t)
        }, y.noConflict = function() {
            return r._ = o, this
        }, y.identity = function(e) {
            return e
        }, y.constant = function(e) {
            return function() {
                return e
            }
        }, y.noop = function() {}, y.property = k, y.propertyOf = function(e) {
            return null == e ? function() {} : function(t) {
                return e[t]
            }
        }, y.matcher = y.matches = function(e) {
            return e = y.extendOwn({}, e),
                function(t) {
                    return y.isMatch(t, e)
                }
        }, y.times = function(e, t, n) {
            var i = Array(Math.max(0, e));
            t = _(t, n, 1);
            for (var r = 0; r < e; r++) i[r] = t(r);
            return i
        }, y.random = function(e, t) {
            return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        }, y.now = Date.now || function() {
            return (new Date).getTime()
        };
        var I = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            N = y.invert(I),
            j = function(e) {
                var t = function(t) {
                        return e[t]
                    },
                    n = "(?:" + y.keys(e).join("|") + ")",
                    i = RegExp(n),
                    r = RegExp(n, "g");
                return function(e) {
                    return e = null == e ? "" : "" + e, i.test(e) ? e.replace(r, t) : e
                }
            };
        y.escape = j(I), y.unescape = j(N), y.result = function(e, t, n) {
            var i = null == e ? void 0 : e[t];
            return void 0 === i && (i = n), y.isFunction(i) ? i.call(e) : i
        };
        var R = 0;
        y.uniqueId = function(e) {
            var t = ++R + "";
            return e ? e + t : t
        }, y.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var L = /(.)^/,
            F = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            H = /\\|'|\r|\n|\u2028|\u2029/g,
            z = function(e) {
                return "\\" + F[e]
            };
        y.template = function(e, t, n) {
            !t && n && (t = n), t = y.defaults({}, t, y.templateSettings);
            var i = RegExp([(t.escape || L).source, (t.interpolate || L).source, (t.evaluate || L).source].join("|") + "|$", "g"),
                r = 0,
                o = "__p+='";
            e.replace(i, function(t, n, i, s, a) {
                return o += e.slice(r, a).replace(H, z), r = a + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), t
            }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                var s = new Function(t.variable || "obj", "_", o)
            } catch (e) {
                throw e.source = o, e
            }
            var a = function(e) {
                    return s.call(this, e, y)
                },
                l = t.variable || "obj";
            return a.source = "function(" + l + "){\n" + o + "}", a
        }, y.chain = function(e) {
            var t = y(e);
            return t._chain = !0, t
        };
        var W = function(e, t) {
            return e._chain ? y(t).chain() : t
        };
        y.mixin = function(e) {
            y.each(y.functions(e), function(t) {
                var n = y[t] = e[t];
                y.prototype[t] = function() {
                    var e = [this._wrapped];
                    return u.apply(e, arguments), W(this, n.apply(y, e))
                }
            })
        }, y.mixin(y), y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
            var t = s[e];
            y.prototype[e] = function() {
                var n = this._wrapped;
                return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], W(this, n)
            }
        }), y.each(["concat", "join", "slice"], function(e) {
            var t = s[e];
            y.prototype[e] = function() {
                return W(this, t.apply(this._wrapped, arguments))
            }
        }), y.prototype.value = function() {
            return this._wrapped
        }, y.prototype.valueOf = y.prototype.toJSON = y.prototype.value, y.prototype.toString = function() {
            return "" + this._wrapped
        }, "function" == typeof define && define.amd && define("underscore", [], function() {
            return y
        })
    }.call(this),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.RSVP = e.RSVP || {})
    }(this, function(e) {
        "use strict";

        function t(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t) return n;
            return -1
        }

        function n(e) {
            var t = e._promiseCallbacks;
            return t || (t = e._promiseCallbacks = {}), t
        }

        function i(e, t) {
            return "onerror" === e ? void we.on("error", t) : 2 !== arguments.length ? we[e] : void(we[e] = t)
        }

        function r(e) {
            return "function" == typeof e || "object" == typeof e && null !== e
        }

        function o(e) {
            return "function" == typeof e
        }

        function s(e) {
            return "object" == typeof e && null !== e
        }

        function a() {}

        function l() {
            setTimeout(function() {
                for (var e = 0; e < Ce.length; e++) {
                    var t = Ce[e],
                        n = t.payload;
                    n.guid = n.key + n.id, n.childGuid = n.key + n.childId, n.error && (n.stack = n.error.stack), we.trigger(t.name, t.payload)
                }
                Ce.length = 0
            }, 50)
        }

        function u(e, t, n) {
            1 === Ce.push({
                name: e,
                payload: {
                    key: t._guidKey,
                    id: t._id,
                    eventName: e,
                    detail: t._result,
                    childId: n && n._id,
                    label: t._label,
                    timeStamp: Se(),
                    error: we["instrument-with-stack"] ? new Error(t._label) : null
                }
            }) && l()
        }

        function c(e, t) {
            var n = this;
            if (e && "object" == typeof e && e.constructor === n) return e;
            var i = new n(d, t);
            return y(i, e), i
        }

        function h() {
            return new TypeError("A promises callback cannot return that same promise.")
        }

        function d() {}

        function f(e) {
            try {
                return e.then
            } catch (e) {
                return Ae.error = e, Ae
            }
        }

        function p(e, t, n, i) {
            try {
                e.call(t, n, i)
            } catch (e) {
                return e
            }
        }

        function m(e, t, n) {
            we.async(function(e) {
                var i = !1,
                    r = p(n, t, function(n) {
                        i || (i = !0, t !== n ? y(e, n, void 0) : b(e, n))
                    }, function(t) {
                        i || (i = !0, w(e, t))
                    }, "Settle: " + (e._label || " unknown promise"));
                !i && r && (i = !0, w(e, r))
            }, e)
        }

        function g(e, t) {
            t._state === Me ? b(e, t._result) : t._state === Ee ? (t._onError = null, w(e, t._result)) : x(t, void 0, function(n) {
                t !== n ? y(e, n, void 0) : b(e, n)
            }, function(t) {
                return w(e, t)
            })
        }

        function v(e, t, n) {
            t.constructor === e.constructor && n === M && e.constructor.resolve === c ? g(e, t) : n === Ae ? w(e, Ae.error) : void 0 === n ? b(e, t) : o(n) ? m(e, t, n) : b(e, t)
        }

        function y(e, t) {
            e === t ? b(e, t) : r(t) ? v(e, t, f(t)) : b(e, t)
        }

        function _(e) {
            e._onError && e._onError(e._result), k(e)
        }

        function b(e, t) {
            e._state === De && (e._result = t, e._state = Me, 0 === e._subscribers.length ? we.instrument && u("fulfilled", e) : we.async(k, e))
        }

        function w(e, t) {
            e._state === De && (e._state = Ee, e._result = t, we.async(_, e))
        }

        function x(e, t, n, i) {
            var r = e._subscribers,
                o = r.length;
            e._onError = null, r[o] = t, r[o + Me] = n, r[o + Ee] = i, 0 === o && e._state && we.async(k, e)
        }

        function k(e) {
            var t = e._subscribers,
                n = e._state;
            if (we.instrument && u(n === Me ? "fulfilled" : "rejected", e), 0 !== t.length) {
                for (var i = void 0, r = void 0, o = e._result, s = 0; s < t.length; s += 3) i = t[s], r = t[s + n], i ? C(n, i, r, o) : r(o);
                e._subscribers.length = 0
            }
        }

        function S() {
            this.error = null
        }

        function T(e, t) {
            try {
                return e(t)
            } catch (e) {
                return Pe.error = e, Pe
            }
        }

        function C(e, t, n, i) {
            var r = o(n),
                s = void 0,
                a = void 0,
                l = void 0,
                u = void 0;
            if (r) {
                if (s = T(n, i), s === Pe ? (u = !0, a = s.error, s = null) : l = !0, t === s) return void w(t, h())
            } else s = i, l = !0;
            t._state !== De || (r && l ? y(t, s) : u ? w(t, a) : e === Me ? b(t, s) : e === Ee && w(t, s))
        }

        function D(e, t) {
            var n = !1;
            try {
                t(function(t) {
                    n || (n = !0, y(e, t))
                }, function(t) {
                    n || (n = !0, w(e, t))
                })
            } catch (t) {
                w(e, t)
            }
        }

        function M(e, t, n) {
            var i = arguments,
                r = this,
                o = r._state;
            if (o === Me && !e || o === Ee && !t) return we.instrument && u("chained", r, r), r;
            r._onError = null;
            var s = new r.constructor(d, n),
                a = r._result;
            return we.instrument && u("chained", r, s), o ? ! function() {
                var e = i[o - 1];
                we.async(function() {
                    return C(o, s, e, a)
                })
            }() : x(r, s, e, t), s
        }

        function E(e, t, n) {
            return e === Me ? {
                state: "fulfilled",
                value: n
            } : {
                state: "rejected",
                reason: n
            }
        }

        function A(e, t, n, i) {
            this._instanceConstructor = e, this.promise = new e(d, i), this._abortOnReject = n, this._validateInput(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._init(), 0 === this.length ? b(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && b(this.promise, this._result))) : w(this.promise, this._validationError())
        }

        function P(e, t) {
            return new A(this, e, !0, t).promise
        }

        function O(e, t) {
            var n = this,
                i = new n(d, t);
            if (!ke(e)) return w(i, new TypeError("You must pass an array to race.")), i;
            for (var r = 0; i._state === De && r < e.length; r++) x(n.resolve(e[r]), void 0, function(e) {
                return y(i, e)
            }, function(e) {
                return w(i, e)
            });
            return i
        }

        function I(e, t) {
            var n = this,
                i = new n(d, t);
            return w(i, e), i
        }

        function N() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
        }

        function j() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
        }

        function R(e, t) {
            this._id = Ie++, this._label = t, this._state = void 0, this._result = void 0, this._subscribers = [], we.instrument && u("created", this), d !== e && ("function" != typeof e && N(), this instanceof R ? D(this, e) : j())
        }

        function L() {
            this.value = void 0
        }

        function F(e) {
            try {
                return e.then
            } catch (e) {
                return Ne.value = e, Ne
            }
        }

        function H(e, t, n) {
            try {
                e.apply(t, n)
            } catch (e) {
                return Ne.value = e, Ne
            }
        }

        function z(e, t) {
            for (var n = {}, i = e.length, r = new Array(i), o = 0; o < i; o++) r[o] = e[o];
            for (var s = 0; s < t.length; s++) {
                var a = t[s];
                n[a] = r[s + 1]
            }
            return n
        }

        function W(e) {
            for (var t = e.length, n = new Array(t - 1), i = 1; i < t; i++) n[i - 1] = e[i];
            return n
        }

        function $(e, t) {
            return {
                then: function(n, i) {
                    return e.call(t, n, i)
                }
            }
        }

        function B(e, t) {
            var n = function() {
                for (var n = this, i = arguments.length, r = new Array(i + 1), o = !1, s = 0; s < i; ++s) {
                    var a = arguments[s];
                    if (!o) {
                        if (o = q(a), o === je) {
                            var l = new R(d);
                            return w(l, je.value), l
                        }
                        o && o !== !0 && (a = $(o, a))
                    }
                    r[s] = a
                }
                var u = new R(d);
                return r[i] = function(e, n) {
                    e ? w(u, e) : void 0 === t ? y(u, n) : t === !0 ? y(u, W(arguments)) : ke(t) ? y(u, z(arguments, t)) : y(u, n)
                }, o ? U(u, r, e, n) : Y(u, r, e, n)
            };
            return n.__proto__ = e, n
        }

        function Y(e, t, n, i) {
            var r = H(n, i, t);
            return r === Ne && w(e, r.value), e
        }

        function U(e, t, n, i) {
            return R.all(t).then(function(t) {
                var r = H(n, i, t);
                return r === Ne && w(e, r.value), e
            })
        }

        function q(e) {
            return !(!e || "object" != typeof e) && (e.constructor === R || F(e))
        }

        function V(e, t) {
            return R.all(e, t)
        }

        function Q(e, t, n) {
            this._superConstructor(e, t, !1, n)
        }

        function G(e, t) {
            return new Q(R, e, t).promise
        }

        function X(e, t) {
            return R.race(e, t)
        }

        function K(e, t, n) {
            this._superConstructor(e, t, !0, n)
        }

        function J(e, t) {
            return new K(R, e, t).promise
        }

        function Z(e, t, n) {
            this._superConstructor(e, t, !1, n)
        }

        function ee(e, t) {
            return new Z(R, e, t).promise
        }

        function te(e) {
            throw setTimeout(function() {
                throw e
            }), e
        }

        function ne(e) {
            var t = {
                resolve: void 0,
                reject: void 0
            };
            return t.promise = new R(function(e, n) {
                t.resolve = e, t.reject = n
            }, e), t
        }

        function ie(e, t, n) {
            return R.all(e, n).then(function(e) {
                if (!o(t)) throw new TypeError("You must pass a function as map's second argument.");
                for (var i = e.length, r = new Array(i), s = 0; s < i; s++) r[s] = t(e[s]);
                return R.all(r, n)
            })
        }

        function re(e, t) {
            return R.resolve(e, t)
        }

        function oe(e, t) {
            return R.reject(e, t)
        }

        function se(e, t) {
            return R.all(e, t)
        }

        function ae(e, t) {
            return R.resolve(e, t).then(function(e) {
                return se(e, t)
            })
        }

        function le(e, t, n) {
            var i = ke(e) ? se(e, n) : ae(e, n);
            return i.then(function(e) {
                if (!o(t)) throw new TypeError("You must pass a function as filter's second argument.");
                for (var i = e.length, r = new Array(i), s = 0; s < i; s++) r[s] = t(e[s]);
                return se(r, n).then(function(t) {
                    for (var n = new Array(i), r = 0, o = 0; o < i; o++) t[o] && (n[r] = e[o], r++);
                    return n.length = r, n
                })
            })
        }

        function ue(e, t) {
            Be[Re] = e, Be[Re + 1] = t, Re += 2, 2 === Re && Ye()
        }

        function ce() {
            var e = process.nextTick,
                t = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
            return Array.isArray(t) && "0" === t[1] && "10" === t[2] && (e = setImmediate),
                function() {
                    return e(me)
                }
        }

        function he() {
            return "undefined" != typeof Le ? function() {
                Le(me)
            } : pe()
        }

        function de() {
            var e = 0,
                t = new ze(me),
                n = document.createTextNode("");
            return t.observe(n, {
                    characterData: !0
                }),
                function() {
                    return n.data = e = ++e % 2
                }
        }

        function fe() {
            var e = new MessageChannel;
            return e.port1.onmessage = me,
                function() {
                    return e.port2.postMessage(0)
                }
        }

        function pe() {
            return function() {
                return setTimeout(me, 1)
            }
        }

        function me() {
            for (var e = 0; e < Re; e += 2) {
                var t = Be[e],
                    n = Be[e + 1];
                t(n), Be[e] = void 0, Be[e + 1] = void 0
            }
            Re = 0
        }

        function ge() {
            try {
                var e = require,
                    t = e("vertx");
                return Le = t.runOnLoop || t.runOnContext, he()
            } catch (e) {
                return pe()
            }
        }

        function ve(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function ye() {
            we.on.apply(we, arguments)
        }

        function _e() {
            we.off.apply(we, arguments)
        }
        var be = {
                mixin: function(e) {
                    return e.on = this.on, e.off = this.off, e.trigger = this.trigger, e._promiseCallbacks = void 0, e
                },
                on: function(e, i) {
                    if ("function" != typeof i) throw new TypeError("Callback must be a function");
                    var r = n(this),
                        o = void 0;
                    o = r[e], o || (o = r[e] = []), t(o, i) === -1 && o.push(i)
                },
                off: function(e, i) {
                    var r = n(this),
                        o = void 0,
                        s = void 0;
                    return i ? (o = r[e], s = t(o, i), void(s !== -1 && o.splice(s, 1))) : void(r[e] = [])
                },
                trigger: function(e, t, i) {
                    var r = n(this),
                        o = void 0,
                        s = void 0;
                    if (o = r[e])
                        for (var a = 0; a < o.length; a++)(s = o[a])(t, i)
                }
            },
            we = {
                instrument: !1
            };
        be.mixin(we);
        var xe = void 0;
        xe = Array.isArray ? Array.isArray : function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        };
        var ke = xe,
            Se = Date.now || function() {
                return (new Date).getTime()
            },
            Te = Object.create || function(e) {
                if (arguments.length > 1) throw new Error("Second argument not supported");
                if ("object" != typeof e) throw new TypeError("Argument must be an object");
                return a.prototype = e, new a
            },
            Ce = [],
            De = void 0,
            Me = 1,
            Ee = 2,
            Ae = new S,
            Pe = new S;
        A.prototype._validateInput = function(e) {
            return ke(e)
        }, A.prototype._validationError = function() {
            return new Error("Array Methods must be provided an Array")
        }, A.prototype._init = function() {
            this._result = new Array(this.length)
        }, A.prototype._enumerate = function() {
            for (var e = this.length, t = this.promise, n = this._input, i = 0; t._state === De && i < e; i++) this._eachEntry(n[i], i)
        }, A.prototype._settleMaybeThenable = function(e, t) {
            var n = this._instanceConstructor,
                i = n.resolve;
            if (i === c) {
                var r = f(e);
                if (r === M && e._state !== De) e._onError = null, this._settledAt(e._state, t, e._result);
                else if ("function" != typeof r) this._remaining--, this._result[t] = this._makeResult(Me, t, e);
                else if (n === R) {
                    var o = new n(d);
                    v(o, e, r), this._willSettleAt(o, t)
                } else this._willSettleAt(new n(function(t) {
                    return t(e)
                }), t)
            } else this._willSettleAt(i(e), t)
        }, A.prototype._eachEntry = function(e, t) {
            s(e) ? this._settleMaybeThenable(e, t) : (this._remaining--, this._result[t] = this._makeResult(Me, t, e))
        }, A.prototype._settledAt = function(e, t, n) {
            var i = this.promise;
            i._state === De && (this._remaining--, this._abortOnReject && e === Ee ? w(i, n) : this._result[t] = this._makeResult(e, t, n)), 0 === this._remaining && b(i, this._result)
        }, A.prototype._makeResult = function(e, t, n) {
            return n
        }, A.prototype._willSettleAt = function(e, t) {
            var n = this;
            x(e, void 0, function(e) {
                return n._settledAt(Me, t, e)
            }, function(e) {
                return n._settledAt(Ee, t, e)
            })
        };
        var Oe = "rsvp_" + Se() + "-",
            Ie = 0;
        R.cast = c, R.all = P, R.race = O, R.resolve = c, R.reject = I, R.prototype = {
            constructor: R,
            _guidKey: Oe,
            _onError: function(e) {
                var t = this;
                we.after(function() {
                    t._onError && we.trigger("error", e, t._label)
                })
            },
            then: M,
            catch: function(e, t) {
                return this.then(void 0, e, t)
            },
            finally: function(e, t) {
                var n = this,
                    i = n.constructor;
                return n.then(function(t) {
                    return i.resolve(e()).then(function() {
                        return t
                    })
                }, function(t) {
                    return i.resolve(e()).then(function() {
                        throw t
                    })
                }, t)
            }
        };
        var Ne = new L,
            je = new L;
        Q.prototype = Te(A.prototype), Q.prototype._superConstructor = A, Q.prototype._makeResult = E, Q.prototype._validationError = function() {
            return new Error("allSettled must be called with an array")
        }, K.prototype = Te(A.prototype), K.prototype._superConstructor = A, K.prototype._init = function() {
            this._result = {}
        }, K.prototype._validateInput = function(e) {
            return e && "object" == typeof e
        }, K.prototype._validationError = function() {
            return new Error("Promise.hash must be called with an object")
        }, K.prototype._enumerate = function() {
            var e = this,
                t = e.promise,
                n = e._input,
                i = [];
            for (var r in n) t._state === De && Object.prototype.hasOwnProperty.call(n, r) && i.push({
                position: r,
                entry: n[r]
            });
            var o = i.length;
            e._remaining = o;
            for (var s = void 0, a = 0; t._state === De && a < o; a++) s = i[a], e._eachEntry(s.entry, s.position)
        }, Z.prototype = Te(K.prototype), Z.prototype._superConstructor = A, Z.prototype._makeResult = E, Z.prototype._validationError = function() {
            return new Error("hashSettled must be called with an object")
        };
        var Re = 0,
            Le = void 0,
            Fe = "undefined" != typeof window ? window : void 0,
            He = Fe || {},
            ze = He.MutationObserver || He.WebKitMutationObserver,
            We = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
            $e = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
            Be = new Array(1e3),
            Ye = void 0;
        Ye = We ? ce() : ze ? de() : $e ? fe() : void 0 === Fe && "function" == typeof require ? ge() : pe();
        var Ue = void 0;
        if ("object" == typeof self) Ue = self;
        else {
            if ("object" != typeof global) throw new Error("no global: `self` or `global` found");
            Ue = global
        }
        var qe;
        we.async = ue, we.after = function(e) {
            return setTimeout(e, 0)
        };
        var Ve = re,
            Qe = function(e, t) {
                return we.async(e, t)
            };
        if ("undefined" != typeof window && "object" == typeof window.__PROMISE_INSTRUMENTATION__) {
            var Ge = window.__PROMISE_INSTRUMENTATION__;
            i("instrument", !0);
            for (var Xe in Ge) Ge.hasOwnProperty(Xe) && ye(Xe, Ge[Xe])
        }
        var Ke = (qe = {
            cast: Ve,
            Promise: R,
            EventTarget: be,
            all: V,
            allSettled: G,
            race: X,
            hash: J,
            hashSettled: ee,
            rethrow: te,
            defer: ne,
            denodeify: B,
            configure: i,
            on: ye,
            off: _e,
            resolve: re,
            reject: oe,
            map: ie
        }, ve(qe, "async", Qe), ve(qe, "filter", le), qe);
        e.default = Ke, e.cast = Ve, e.Promise = R, e.EventTarget = be, e.all = V, e.allSettled = G, e.race = X, e.hash = J, e.hashSettled = ee, e.rethrow = te, e.defer = ne, e.denodeify = B, e.configure = i, e.on = ye, e.off = _e, e.resolve = re, e.reject = oe, e.map = ie, e.async = Qe, e.filter = le, Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function(e) {
        return e.ui = e.ui || {}, e.ui.version = "1.12.1"
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
    }(function(e) {
        return e.extend(e.expr[":"], {
            data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
                return function(n) {
                    return !!e.data(n, t)
                }
            }) : function(t, n, i) {
                return !!e.data(t, i[3])
            }
        })
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
    }(function(e) {
        return e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
    }(function(e) {
        return e.ui.keyCode = {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
    }(function(e) {
        return e.ui.plugin = {
            add: function(t, n, i) {
                var r, o = e.ui[t].prototype;
                for (r in i) o.plugins[r] = o.plugins[r] || [], o.plugins[r].push([n, i[r]])
            },
            call: function(e, t, n, i) {
                var r, o = e.plugins[t];
                if (o && (i || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                    for (r = 0; r < o.length; r++) e.options[o[r][0]] && o[r][1].apply(e.element, n)
            }
        }
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
    }(function(e) {
        return e.fn.scrollParent = function(t) {
            var n = this.css("position"),
                i = "absolute" === n,
                r = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                o = this.parents().filter(function() {
                    var t = e(this);
                    return (!i || "static" !== t.css("position")) && r.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== n && o.length ? o : e(this[0].ownerDocument || document)
        }
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
    }(function(e) {
        return e.fn.extend({
            uniqueId: function() {
                var e = 0;
                return function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++e)
                    })
                }
            }(),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
                })
            }
        })
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
    }(function(e) {
        var t = 0,
            n = Array.prototype.slice;
        return e.cleanData = function(t) {
            return function(n) {
                var i, r, o;
                for (o = 0; null != (r = n[o]); o++) try {
                    i = e._data(r, "events"), i && i.remove && e(r).triggerHandler("remove")
                } catch (e) {}
                t(n)
            }
        }(e.cleanData), e.widget = function(t, n, i) {
            var r, o, s, a = {},
                l = t.split(".")[0];
            t = t.split(".")[1];
            var u = l + "-" + t;
            return i || (i = n, n = e.Widget), e.isArray(i) && (i = e.extend.apply(null, [{}].concat(i))), e.expr[":"][u.toLowerCase()] = function(t) {
                return !!e.data(t, u)
            }, e[l] = e[l] || {}, r = e[l][t], o = e[l][t] = function(e, t) {
                return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new o(e, t)
            }, e.extend(o, r, {
                version: i.version,
                _proto: e.extend({}, i),
                _childConstructors: []
            }), s = new n, s.options = e.widget.extend({}, s.options), e.each(i, function(t, i) {
                return e.isFunction(i) ? void(a[t] = function() {
                    function e() {
                        return n.prototype[t].apply(this, arguments)
                    }

                    function r(e) {
                        return n.prototype[t].apply(this, e)
                    }
                    return function() {
                        var t, n = this._super,
                            o = this._superApply;
                        return this._super = e, this._superApply = r, t = i.apply(this, arguments), this._super = n, this._superApply = o, t
                    }
                }()) : void(a[t] = i)
            }), o.prototype = e.widget.extend(s, {
                widgetEventPrefix: r ? s.widgetEventPrefix || t : t
            }, a, {
                constructor: o,
                namespace: l,
                widgetName: t,
                widgetFullName: u
            }), r ? (e.each(r._childConstructors, function(t, n) {
                var i = n.prototype;
                e.widget(i.namespace + "." + i.widgetName, o, n._proto)
            }), delete r._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o), o
        }, e.widget.extend = function(t) {
            for (var i, r, o = n.call(arguments, 1), s = 0, a = o.length; s < a; s++)
                for (i in o[s]) r = o[s][i], o[s].hasOwnProperty(i) && void 0 !== r && (e.isPlainObject(r) ? t[i] = e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], r) : e.widget.extend({}, r) : t[i] = r);
            return t
        }, e.widget.bridge = function(t, i) {
            var r = i.prototype.widgetFullName || t;
            e.fn[t] = function(o) {
                var s = "string" == typeof o,
                    a = n.call(arguments, 1),
                    l = this;
                return s ? this.length || "instance" !== o ? this.each(function() {
                    var n, i = e.data(this, r);
                    return "instance" === o ? (l = i, !1) : i ? e.isFunction(i[o]) && "_" !== o.charAt(0) ? (n = i[o].apply(i, a), n !== i && void 0 !== n ? (l = n && n.jquery ? l.pushStack(n.get()) : n, !1) : void 0) : e.error("no such method '" + o + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + o + "'")
                }) : l = void 0 : (a.length && (o = e.widget.extend.apply(null, [o].concat(a))), this.each(function() {
                    var t = e.data(this, r);
                    t ? (t.option(o || {}), t._init && t._init()) : e.data(this, r, new i(o, this))
                })), l
            }
        }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                classes: {},
                disabled: !1,
                create: null
            },
            _createWidget: function(n, i) {
                i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = t++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), this.classesElementLookup = {}, i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(e) {
                        e.target === i && this.destroy()
                    }
                }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), n), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: function() {
                return {}
            },
            _getCreateEventData: e.noop,
            _create: e.noop,
            _init: e.noop,
            destroy: function() {
                var t = this;
                this._destroy(), e.each(this.classesElementLookup, function(e, n) {
                    t._removeClass(n, e)
                }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: e.noop,
            widget: function() {
                return this.element
            },
            option: function(t, n) {
                var i, r, o, s = t;
                if (0 === arguments.length) return e.widget.extend({}, this.options);
                if ("string" == typeof t)
                    if (s = {}, i = t.split("."), t = i.shift(), i.length) {
                        for (r = s[t] = e.widget.extend({}, this.options[t]), o = 0; o < i.length - 1; o++) r[i[o]] = r[i[o]] || {}, r = r[i[o]];
                        if (t = i.pop(), 1 === arguments.length) return void 0 === r[t] ? null : r[t];
                        r[t] = n
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                        s[t] = n
                    }
                return this._setOptions(s), this
            },
            _setOptions: function(e) {
                var t;
                for (t in e) this._setOption(t, e[t]);
                return this
            },
            _setOption: function(e, t) {
                return "classes" === e && this._setOptionClasses(t), this.options[e] = t, "disabled" === e && this._setOptionDisabled(t), this
            },
            _setOptionClasses: function(t) {
                var n, i, r;
                for (n in t) r = this.classesElementLookup[n], t[n] !== this.options.classes[n] && r && r.length && (i = e(r.get()), this._removeClass(r, n), i.addClass(this._classes({
                    element: i,
                    keys: n,
                    classes: t,
                    add: !0
                })))
            },
            _setOptionDisabled: function(e) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e), e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _classes: function(t) {
                function n(n, o) {
                    var s, a;
                    for (a = 0; a < n.length; a++) s = r.classesElementLookup[n[a]] || e(), s = e(t.add ? e.unique(s.get().concat(t.element.get())) : s.not(t.element).get()), r.classesElementLookup[n[a]] = s, i.push(n[a]), o && t.classes[n[a]] && i.push(t.classes[n[a]])
                }
                var i = [],
                    r = this;
                return t = e.extend({
                    element: this.element,
                    classes: this.options.classes || {}
                }, t), this._on(t.element, {
                    remove: "_untrackClassesElement"
                }), t.keys && n(t.keys.match(/\S+/g) || [], !0), t.extra && n(t.extra.match(/\S+/g) || []), i.join(" ")
            },
            _untrackClassesElement: function(t) {
                var n = this;
                e.each(n.classesElementLookup, function(i, r) {
                    e.inArray(t.target, r) !== -1 && (n.classesElementLookup[i] = e(r.not(t.target).get()))
                })
            },
            _removeClass: function(e, t, n) {
                return this._toggleClass(e, t, n, !1)
            },
            _addClass: function(e, t, n) {
                return this._toggleClass(e, t, n, !0)
            },
            _toggleClass: function(e, t, n, i) {
                i = "boolean" == typeof i ? i : n;
                var r = "string" == typeof e || null === e,
                    o = {
                        extra: r ? t : n,
                        keys: r ? e : t,
                        element: r ? this.element : e,
                        add: i
                    };
                return o.element.toggleClass(this._classes(o), i), this
            },
            _on: function(t, n, i) {
                var r, o = this;
                "boolean" != typeof t && (i = n, n = t, t = !1), i ? (n = r = e(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, r = this.widget()), e.each(i, function(i, s) {
                    function a() {
                        if (t || o.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled")) return ("string" == typeof s ? o[s] : s).apply(o, arguments)
                    }
                    "string" != typeof s && (a.guid = s.guid = s.guid || a.guid || e.guid++);
                    var l = i.match(/^([\w:-]*)\s*(.*)$/),
                        u = l[1] + o.eventNamespace,
                        c = l[2];
                    c ? r.on(u, c, a) : n.on(u, a)
                })
            },
            _off: function(t, n) {
                n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(n).off(n), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
            },
            _delay: function(e, t) {
                function n() {
                    return ("string" == typeof e ? i[e] : e).apply(i, arguments)
                }
                var i = this;
                return setTimeout(n, t || 0)
            },
            _hoverable: function(t) {
                this.hoverable = this.hoverable.add(t), this._on(t, {
                    mouseenter: function(t) {
                        this._addClass(e(t.currentTarget), null, "ui-state-hover")
                    },
                    mouseleave: function(t) {
                        this._removeClass(e(t.currentTarget), null, "ui-state-hover")
                    }
                })
            },
            _focusable: function(t) {
                this.focusable = this.focusable.add(t), this._on(t, {
                    focusin: function(t) {
                        this._addClass(e(t.currentTarget), null, "ui-state-focus")
                    },
                    focusout: function(t) {
                        this._removeClass(e(t.currentTarget), null, "ui-state-focus")
                    }
                })
            },
            _trigger: function(t, n, i) {
                var r, o, s = this.options[t];
                if (i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], o = n.originalEvent)
                    for (r in o) r in n || (n[r] = o[r]);
                return this.element.trigger(n, i), !(e.isFunction(s) && s.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
            }
        }, e.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(t, n) {
            e.Widget.prototype["_" + t] = function(i, r, o) {
                "string" == typeof r && (r = {
                    effect: r
                });
                var s, a = r ? r === !0 || "number" == typeof r ? n : r.effect || n : t;
                r = r || {}, "number" == typeof r && (r = {
                    duration: r
                }), s = !e.isEmptyObject(r), r.complete = o, r.delay && i.delay(r.delay), s && e.effects && e.effects.effect[a] ? i[t](r) : a !== t && i[a] ? i[a](r.duration, r.easing, o) : i.queue(function(n) {
                    e(this)[t](), o && o.call(i[0]), n()
                })
            }
        }), e.widget
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "../ie", "../version", "../widget"], e) : e(jQuery)
    }(function(e) {
        var t = !1;
        return e(document).on("mouseup", function() {
            t = !1
        }), e.widget("ui.mouse", {
            version: "1.12.1",
            options: {
                cancel: "input, textarea, button, select, option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var t = this;
                this.element.on("mousedown." + this.widgetName, function(e) {
                    return t._mouseDown(e)
                }).on("click." + this.widgetName, function(n) {
                    if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"),
                        n.stopImmediatePropagation(), !1
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(n) {
                if (!t) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(n), this._mouseDownEvent = n;
                    var i = this,
                        r = 1 === n.which,
                        o = !("string" != typeof this.options.cancel || !n.target.nodeName) && e(n.target).closest(this.options.cancel).length;
                    return !(r && !o && this._mouseCapture(n)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        i.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = this._mouseStart(n) !== !1, !this._mouseStarted) ? (n.preventDefault(), !0) : (!0 === e.data(n.target, this.widgetName + ".preventClickEvent") && e.removeData(n.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                        return i._mouseMove(e)
                    }, this._mouseUpDelegate = function(e) {
                        return i._mouseUp(e)
                    }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), n.preventDefault(), t = !0, !0))
                }
            },
            _mouseMove: function(t) {
                if (this._mouseMoved) {
                    if (e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                    if (!t.which)
                        if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                        else if (!this.ignoreMissingWhich) return this._mouseUp(t)
                }
                return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
            },
            _mouseUp: function(n) {
                this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, n.target === this._mouseDownEvent.target && e.data(n.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(n)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, t = !1, n.preventDefault()
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
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
    }(function(e) {
        return function() {
            function t(e, t, n) {
                return [parseFloat(e[0]) * (h.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (h.test(e[1]) ? n / 100 : 1)]
            }

            function n(t, n) {
                return parseInt(e.css(t, n), 10) || 0
            }

            function i(t) {
                var n = t[0];
                return 9 === n.nodeType ? {
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
            var r, o = Math.max,
                s = Math.abs,
                a = /left|center|right/,
                l = /top|center|bottom/,
                u = /[\+\-]\d+(\.[\d]+)?%?/,
                c = /^\w+/,
                h = /%$/,
                d = e.fn.position;
            e.position = {
                scrollbarWidth: function() {
                    if (void 0 !== r) return r;
                    var t, n, i = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        o = i.children()[0];
                    return e("body").append(i), t = o.offsetWidth, i.css("overflow", "scroll"), n = o.offsetWidth, t === n && (n = i[0].clientWidth), i.remove(), r = t - n
                },
                getScrollInfo: function(t) {
                    var n = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                        i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                        r = "scroll" === n || "auto" === n && t.width < t.element[0].scrollWidth,
                        o = "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight;
                    return {
                        width: o ? e.position.scrollbarWidth() : 0,
                        height: r ? e.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(t) {
                    var n = e(t || window),
                        i = e.isWindow(n[0]),
                        r = !!n[0] && 9 === n[0].nodeType,
                        o = !i && !r;
                    return {
                        element: n,
                        isWindow: i,
                        isDocument: r,
                        offset: o ? e(t).offset() : {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: n.scrollLeft(),
                        scrollTop: n.scrollTop(),
                        width: n.outerWidth(),
                        height: n.outerHeight()
                    }
                }
            }, e.fn.position = function(r) {
                if (!r || !r.of) return d.apply(this, arguments);
                r = e.extend({}, r);
                var h, f, p, m, g, v, y = e(r.of),
                    _ = e.position.getWithinInfo(r.within),
                    b = e.position.getScrollInfo(_),
                    w = (r.collision || "flip").split(" "),
                    x = {};
                return v = i(y), y[0].preventDefault && (r.at = "left top"), f = v.width, p = v.height, m = v.offset, g = e.extend({}, m), e.each(["my", "at"], function() {
                    var e, t, n = (r[this] || "").split(" ");
                    1 === n.length && (n = a.test(n[0]) ? n.concat(["center"]) : l.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = a.test(n[0]) ? n[0] : "center", n[1] = l.test(n[1]) ? n[1] : "center", e = u.exec(n[0]), t = u.exec(n[1]), x[this] = [e ? e[0] : 0, t ? t[0] : 0], r[this] = [c.exec(n[0])[0], c.exec(n[1])[0]]
                }), 1 === w.length && (w[1] = w[0]), "right" === r.at[0] ? g.left += f : "center" === r.at[0] && (g.left += f / 2), "bottom" === r.at[1] ? g.top += p : "center" === r.at[1] && (g.top += p / 2), h = t(x.at, f, p), g.left += h[0], g.top += h[1], this.each(function() {
                    var i, a, l = e(this),
                        u = l.outerWidth(),
                        c = l.outerHeight(),
                        d = n(this, "marginLeft"),
                        v = n(this, "marginTop"),
                        k = u + d + n(this, "marginRight") + b.width,
                        S = c + v + n(this, "marginBottom") + b.height,
                        T = e.extend({}, g),
                        C = t(x.my, l.outerWidth(), l.outerHeight());
                    "right" === r.my[0] ? T.left -= u : "center" === r.my[0] && (T.left -= u / 2), "bottom" === r.my[1] ? T.top -= c : "center" === r.my[1] && (T.top -= c / 2), T.left += C[0], T.top += C[1], i = {
                        marginLeft: d,
                        marginTop: v
                    }, e.each(["left", "top"], function(t, n) {
                        e.ui.position[w[t]] && e.ui.position[w[t]][n](T, {
                            targetWidth: f,
                            targetHeight: p,
                            elemWidth: u,
                            elemHeight: c,
                            collisionPosition: i,
                            collisionWidth: k,
                            collisionHeight: S,
                            offset: [h[0] + C[0], h[1] + C[1]],
                            my: r.my,
                            at: r.at,
                            within: _,
                            elem: l
                        })
                    }), r.using && (a = function(e) {
                        var t = m.left - T.left,
                            n = t + f - u,
                            i = m.top - T.top,
                            a = i + p - c,
                            h = {
                                target: {
                                    element: y,
                                    left: m.left,
                                    top: m.top,
                                    width: f,
                                    height: p
                                },
                                element: {
                                    element: l,
                                    left: T.left,
                                    top: T.top,
                                    width: u,
                                    height: c
                                },
                                horizontal: n < 0 ? "left" : t > 0 ? "right" : "center",
                                vertical: a < 0 ? "top" : i > 0 ? "bottom" : "middle"
                            };
                        f < u && s(t + n) < f && (h.horizontal = "center"), p < c && s(i + a) < p && (h.vertical = "middle"), o(s(t), s(n)) > o(s(i), s(a)) ? h.important = "horizontal" : h.important = "vertical", r.using.call(this, e, h)
                    }), l.offset(e.extend(T, {
                        using: a
                    }))
                })
            }, e.ui.position = {
                fit: {
                    left: function(e, t) {
                        var n, i = t.within,
                            r = i.isWindow ? i.scrollLeft : i.offset.left,
                            s = i.width,
                            a = e.left - t.collisionPosition.marginLeft,
                            l = r - a,
                            u = a + t.collisionWidth - s - r;
                        t.collisionWidth > s ? l > 0 && u <= 0 ? (n = e.left + l + t.collisionWidth - s - r, e.left += l - n) : u > 0 && l <= 0 ? e.left = r : l > u ? e.left = r + s - t.collisionWidth : e.left = r : l > 0 ? e.left += l : u > 0 ? e.left -= u : e.left = o(e.left - a, e.left)
                    },
                    top: function(e, t) {
                        var n, i = t.within,
                            r = i.isWindow ? i.scrollTop : i.offset.top,
                            s = t.within.height,
                            a = e.top - t.collisionPosition.marginTop,
                            l = r - a,
                            u = a + t.collisionHeight - s - r;
                        t.collisionHeight > s ? l > 0 && u <= 0 ? (n = e.top + l + t.collisionHeight - s - r, e.top += l - n) : u > 0 && l <= 0 ? e.top = r : l > u ? e.top = r + s - t.collisionHeight : e.top = r : l > 0 ? e.top += l : u > 0 ? e.top -= u : e.top = o(e.top - a, e.top)
                    }
                },
                flip: {
                    left: function(e, t) {
                        var n, i, r = t.within,
                            o = r.offset.left + r.scrollLeft,
                            a = r.width,
                            l = r.isWindow ? r.scrollLeft : r.offset.left,
                            u = e.left - t.collisionPosition.marginLeft,
                            c = u - l,
                            h = u + t.collisionWidth - a - l,
                            d = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                            f = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                            p = -2 * t.offset[0];
                        c < 0 ? (n = e.left + d + f + p + t.collisionWidth - a - o, (n < 0 || n < s(c)) && (e.left += d + f + p)) : h > 0 && (i = e.left - t.collisionPosition.marginLeft + d + f + p - l, (i > 0 || s(i) < h) && (e.left += d + f + p))
                    },
                    top: function(e, t) {
                        var n, i, r = t.within,
                            o = r.offset.top + r.scrollTop,
                            a = r.height,
                            l = r.isWindow ? r.scrollTop : r.offset.top,
                            u = e.top - t.collisionPosition.marginTop,
                            c = u - l,
                            h = u + t.collisionHeight - a - l,
                            d = "top" === t.my[1],
                            f = d ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                            p = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                            m = -2 * t.offset[1];
                        c < 0 ? (i = e.top + f + p + m + t.collisionHeight - a - o, (i < 0 || i < s(c)) && (e.top += f + p + m)) : h > 0 && (n = e.top - t.collisionPosition.marginTop + f + p + m - l, (n > 0 || s(n) < h) && (e.top += f + p + m))
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
            }
        }(), e.ui.position
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "./version"], e) : e(jQuery)
    }(function(e) {
        return e.ui.safeActiveElement = function(e) {
            var t;
            try {
                t = e.activeElement
            } catch (n) {
                t = e.body
            }
            return t || (t = e.body), t.nodeName || (t = e.body), t
        }
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "./mouse", "../data", "../plugin", "../safe-active-element", "../safe-blur", "../scroll-parent", "../version", "../widget"], e) : e(jQuery)
    }(function(e) {
        return e.widget("ui.draggable", e.ui.mouse, {
            version: "1.12.1",
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
                "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
            },
            _setOption: function(e, t) {
                this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName())
            },
            _destroy: function() {
                return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy())
            },
            _mouseCapture: function(t) {
                var n = this.options;
                return !(this.helper || n.disabled || e(t.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(t), !!this.handle && (this._blurActiveElement(t), this._blockFrames(n.iframeFix === !0 ? "iframe" : n.iframeFix), !0))
            },
            _blockFrames: function(t) {
                this.iframeBlocks = this.document.find(t).map(function() {
                    var t = e(this);
                    return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _blurActiveElement: function(t) {
                var n = e.ui.safeActiveElement(this.document[0]),
                    i = e(t.target);
                i.closest(n).length || e.ui.safeBlur(n)
            },
            _mouseStart: function(t) {
                var n = this.options;
                return this.helper = this._createHelper(t), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                    return "fixed" === e(this).css("position")
                }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
            },
            _refreshOffsets: function(e) {
                this.offset = {
                    top: this.positionAbs.top - this.margins.top,
                    left: this.positionAbs.left - this.margins.left,
                    scroll: !1,
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }, this.offset.click = {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                }
            },
            _mouseDrag: function(t, n) {
                if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !n) {
                    var i = this._uiHash();
                    if (this._trigger("drag", t, i) === !1) return this._mouseUp(new e.Event("mouseup", t)), !1;
                    this.position = i.position
                }
                return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
            },
            _mouseStop: function(t) {
                var n = this,
                    i = !1;
                return e.ui.ddmanager && !this.options.dropBehaviour && (i = e.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    n._trigger("stop", t) !== !1 && n._clear()
                }) : this._trigger("stop", t) !== !1 && this._clear(), !1
            },
            _mouseUp: function(t) {
                return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.trigger("focus"), e.ui.mouse.prototype._mouseUp.call(this, t)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new e.Event("mouseup", {
                    target: this.element[0]
                })) : this._clear(), this
            },
            _getHandle: function(t) {
                return !this.options.handle || !!e(t.target).closest(this.element.find(this.options.handle)).length
            },
            _setHandleClassName: function() {
                this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
            },
            _removeHandleClassName: function() {
                this._removeClass(this.handleElement, "ui-draggable-handle")
            },
            _createHelper: function(t) {
                var n = this.options,
                    i = e.isFunction(n.helper),
                    r = i ? e(n.helper.apply(this.element[0], [t])) : "clone" === n.helper ? this.element.clone().removeAttr("id") : this.element;
                return r.parents("body").length || r.appendTo("parent" === n.appendTo ? this.element[0].parentNode : n.appendTo), i && r[0] === this.element[0] && this._setPositionRelative(), r[0] === this.element[0] || /(fixed|absolute)/.test(r.css("position")) || r.css("position", "absolute"), r
            },
            _setPositionRelative: function() {
                /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
            },
            _adjustOffsetFromHelper: function(t) {
                "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _isRootNode: function(e) {
                return /(html|body)/i.test(e.tagName) || e === this.document[0]
            },
            _getParentOffset: function() {
                var t = this.offsetParent.offset(),
                    n = this.document[0];
                return "absolute" === this.cssPosition && this.scrollParent[0] !== n && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" !== this.cssPosition) return {
                    top: 0,
                    left: 0
                };
                var e = this.element.position(),
                    t = this._isRootNode(this.scrollParent[0]);
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
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
                var t, n, i, r = this.options,
                    o = this.document[0];
                return this.relativeContainer = null, r.containment ? "window" === r.containment ? void(this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === r.containment ? void(this.containment = [0, 0, e(o).width() - this.helperProportions.width - this.margins.left, (e(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : r.containment.constructor === Array ? void(this.containment = r.containment) : ("parent" === r.containment && (r.containment = this.helper[0].parentNode), n = e(r.containment), i = n[0], void(i && (t = /(scroll|auto)/.test(n.css("overflow")), this.containment = [(parseInt(n.css("borderLeftWidth"), 10) || 0) + (parseInt(n.css("paddingLeft"), 10) || 0), (parseInt(n.css("borderTopWidth"), 10) || 0) + (parseInt(n.css("paddingTop"), 10) || 0), (t ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(n.css("borderRightWidth"), 10) || 0) - (parseInt(n.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(n.css("borderBottomWidth"), 10) || 0) - (parseInt(n.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = n))) : void(this.containment = null)
            },
            _convertPositionTo: function(e, t) {
                t || (t = this.position);
                var n = "absolute" === e ? 1 : -1,
                    i = this._isRootNode(this.scrollParent[0]);
                return {
                    top: t.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.offset.scroll.top : i ? 0 : this.offset.scroll.top) * n,
                    left: t.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.offset.scroll.left : i ? 0 : this.offset.scroll.left) * n
                }
            },
            _generatePosition: function(e, t) {
                var n, i, r, o, s = this.options,
                    a = this._isRootNode(this.scrollParent[0]),
                    l = e.pageX,
                    u = e.pageY;
                return a && this.offset.scroll || (this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }), t && (this.containment && (this.relativeContainer ? (i = this.relativeContainer.offset(), n = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]) : n = this.containment, e.pageX - this.offset.click.left < n[0] && (l = n[0] + this.offset.click.left), e.pageY - this.offset.click.top < n[1] && (u = n[1] + this.offset.click.top), e.pageX - this.offset.click.left > n[2] && (l = n[2] + this.offset.click.left), e.pageY - this.offset.click.top > n[3] && (u = n[3] + this.offset.click.top)), s.grid && (r = s.grid[1] ? this.originalPageY + Math.round((u - this.originalPageY) / s.grid[1]) * s.grid[1] : this.originalPageY, u = n ? r - this.offset.click.top >= n[1] || r - this.offset.click.top > n[3] ? r : r - this.offset.click.top >= n[1] ? r - s.grid[1] : r + s.grid[1] : r, o = s.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / s.grid[0]) * s.grid[0] : this.originalPageX, l = n ? o - this.offset.click.left >= n[0] || o - this.offset.click.left > n[2] ? o : o - this.offset.click.left >= n[0] ? o - s.grid[0] : o + s.grid[0] : o), "y" === s.axis && (l = this.originalPageX), "x" === s.axis && (u = this.originalPageY)), {
                    top: u - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top),
                    left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left)
                }
            },
            _clear: function() {
                this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
            },
            _trigger: function(t, n, i) {
                return i = i || this._uiHash(), e.ui.plugin.call(this, t, [n, i, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), i.offset = this.positionAbs), e.Widget.prototype._trigger.call(this, t, n, i)
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
            start: function(t, n, i) {
                var r = e.extend({}, n, {
                    item: i.element
                });
                i.sortables = [], e(i.options.connectToSortable).each(function() {
                    var n = e(this).sortable("instance");
                    n && !n.options.disabled && (i.sortables.push(n), n.refreshPositions(), n._trigger("activate", t, r))
                })
            },
            stop: function(t, n, i) {
                var r = e.extend({}, n, {
                    item: i.element
                });
                i.cancelHelperRemoval = !1, e.each(i.sortables, function() {
                    var e = this;
                    e.isOver ? (e.isOver = 0, i.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = {
                        position: e.placeholder.css("position"),
                        top: e.placeholder.css("top"),
                        left: e.placeholder.css("left")
                    }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, r))
                })
            },
            drag: function(t, n, i) {
                e.each(i.sortables, function() {
                    var r = !1,
                        o = this;
                    o.positionAbs = i.positionAbs, o.helperProportions = i.helperProportions, o.offset.click = i.offset.click, o._intersectsWith(o.containerCache) && (r = !0, e.each(i.sortables, function() {
                        return this.positionAbs = i.positionAbs, this.helperProportions = i.helperProportions, this.offset.click = i.offset.click, this !== o && this._intersectsWith(this.containerCache) && e.contains(o.element[0], this.element[0]) && (r = !1), r
                    })), r ? (o.isOver || (o.isOver = 1, i._parent = n.helper.parent(), o.currentItem = n.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() {
                        return n.helper[0]
                    }, t.target = o.currentItem[0], o._mouseCapture(t, !0), o._mouseStart(t, !0, !0), o.offset.click.top = i.offset.click.top, o.offset.click.left = i.offset.click.left, o.offset.parent.left -= i.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= i.offset.parent.top - o.offset.parent.top, i._trigger("toSortable", t), i.dropped = o.element, e.each(i.sortables, function() {
                        this.refreshPositions()
                    }), i.currentItem = i.element, o.fromOutside = i), o.currentItem && (o._mouseDrag(t), n.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", t, o._uiHash(o)), o._mouseStop(t, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), n.helper.appendTo(i._parent), i._refreshOffsets(t), n.position = i._generatePosition(t, !0), i._trigger("fromSortable", t), i.dropped = !1, e.each(i.sortables, function() {
                        this.refreshPositions()
                    }))
                })
            }
        }), e.ui.plugin.add("draggable", "cursor", {
            start: function(t, n, i) {
                var r = e("body"),
                    o = i.options;
                r.css("cursor") && (o._cursor = r.css("cursor")), r.css("cursor", o.cursor)
            },
            stop: function(t, n, i) {
                var r = i.options;
                r._cursor && e("body").css("cursor", r._cursor)
            }
        }), e.ui.plugin.add("draggable", "opacity", {
            start: function(t, n, i) {
                var r = e(n.helper),
                    o = i.options;
                r.css("opacity") && (o._opacity = r.css("opacity")), r.css("opacity", o.opacity)
            },
            stop: function(t, n, i) {
                var r = i.options;
                r._opacity && e(n.helper).css("opacity", r._opacity)
            }
        }), e.ui.plugin.add("draggable", "scroll", {
            start: function(e, t, n) {
                n.scrollParentNotHidden || (n.scrollParentNotHidden = n.helper.scrollParent(!1)), n.scrollParentNotHidden[0] !== n.document[0] && "HTML" !== n.scrollParentNotHidden[0].tagName && (n.overflowOffset = n.scrollParentNotHidden.offset())
            },
            drag: function(t, n, i) {
                var r = i.options,
                    o = !1,
                    s = i.scrollParentNotHidden[0],
                    a = i.document[0];
                s !== a && "HTML" !== s.tagName ? (r.axis && "x" === r.axis || (i.overflowOffset.top + s.offsetHeight - t.pageY < r.scrollSensitivity ? s.scrollTop = o = s.scrollTop + r.scrollSpeed : t.pageY - i.overflowOffset.top < r.scrollSensitivity && (s.scrollTop = o = s.scrollTop - r.scrollSpeed)), r.axis && "y" === r.axis || (i.overflowOffset.left + s.offsetWidth - t.pageX < r.scrollSensitivity ? s.scrollLeft = o = s.scrollLeft + r.scrollSpeed : t.pageX - i.overflowOffset.left < r.scrollSensitivity && (s.scrollLeft = o = s.scrollLeft - r.scrollSpeed))) : (r.axis && "x" === r.axis || (t.pageY - e(a).scrollTop() < r.scrollSensitivity ? o = e(a).scrollTop(e(a).scrollTop() - r.scrollSpeed) : e(window).height() - (t.pageY - e(a).scrollTop()) < r.scrollSensitivity && (o = e(a).scrollTop(e(a).scrollTop() + r.scrollSpeed))), r.axis && "y" === r.axis || (t.pageX - e(a).scrollLeft() < r.scrollSensitivity ? o = e(a).scrollLeft(e(a).scrollLeft() - r.scrollSpeed) : e(window).width() - (t.pageX - e(a).scrollLeft()) < r.scrollSensitivity && (o = e(a).scrollLeft(e(a).scrollLeft() + r.scrollSpeed)))), o !== !1 && e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t)
            }
        }), e.ui.plugin.add("draggable", "snap", {
            start: function(t, n, i) {
                var r = i.options;
                i.snapElements = [], e(r.snap.constructor !== String ? r.snap.items || ":data(ui-draggable)" : r.snap).each(function() {
                    var t = e(this),
                        n = t.offset();
                    this !== i.element[0] && i.snapElements.push({
                        item: this,
                        width: t.outerWidth(),
                        height: t.outerHeight(),
                        top: n.top,
                        left: n.left
                    })
                })
            },
            drag: function(t, n, i) {
                var r, o, s, a, l, u, c, h, d, f, p = i.options,
                    m = p.snapTolerance,
                    g = n.offset.left,
                    v = g + i.helperProportions.width,
                    y = n.offset.top,
                    _ = y + i.helperProportions.height;
                for (d = i.snapElements.length - 1; d >= 0; d--) l = i.snapElements[d].left - i.margins.left, u = l + i.snapElements[d].width, c = i.snapElements[d].top - i.margins.top, h = c + i.snapElements[d].height, v < l - m || g > u + m || _ < c - m || y > h + m || !e.contains(i.snapElements[d].item.ownerDocument, i.snapElements[d].item) ? (i.snapElements[d].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, e.extend(i._uiHash(), {
                    snapItem: i.snapElements[d].item
                })), i.snapElements[d].snapping = !1) : ("inner" !== p.snapMode && (r = Math.abs(c - _) <= m, o = Math.abs(h - y) <= m, s = Math.abs(l - v) <= m, a = Math.abs(u - g) <= m, r && (n.position.top = i._convertPositionTo("relative", {
                    top: c - i.helperProportions.height,
                    left: 0
                }).top), o && (n.position.top = i._convertPositionTo("relative", {
                    top: h,
                    left: 0
                }).top), s && (n.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: l - i.helperProportions.width
                }).left), a && (n.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: u
                }).left)), f = r || o || s || a, "outer" !== p.snapMode && (r = Math.abs(c - y) <= m, o = Math.abs(h - _) <= m, s = Math.abs(l - g) <= m, a = Math.abs(u - v) <= m, r && (n.position.top = i._convertPositionTo("relative", {
                    top: c,
                    left: 0
                }).top), o && (n.position.top = i._convertPositionTo("relative", {
                    top: h - i.helperProportions.height,
                    left: 0
                }).top), s && (n.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left), a && (n.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: u - i.helperProportions.width
                }).left)), !i.snapElements[d].snapping && (r || o || s || a || f) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, e.extend(i._uiHash(), {
                    snapItem: i.snapElements[d].item
                })), i.snapElements[d].snapping = r || o || s || a || f)
            }
        }), e.ui.plugin.add("draggable", "stack", {
            start: function(t, n, i) {
                var r, o = i.options,
                    s = e.makeArray(e(o.stack)).sort(function(t, n) {
                        return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
                    });
                s.length && (r = parseInt(e(s[0]).css("zIndex"), 10) || 0, e(s).each(function(t) {
                    e(this).css("zIndex", r + t)
                }), this.css("zIndex", r + s.length))
            }
        }), e.ui.plugin.add("draggable", "zIndex", {
            start: function(t, n, i) {
                var r = e(n.helper),
                    o = i.options;
                r.css("zIndex") && (o._zIndex = r.css("zIndex")), r.css("zIndex", o.zIndex)
            },
            stop: function(t, n, i) {
                var r = i.options;
                r._zIndex && e(n.helper).css("zIndex", r._zIndex)
            }
        }), e.ui.draggable
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "./mouse", "../disable-selection", "../plugin", "../version", "../widget"], e) : e(jQuery)
    }(function(e) {
        return e.widget("ui.resizable", e.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                classes: {
                    "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
                },
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
            _num: function(e) {
                return parseFloat(e) || 0
            },
            _isNumber: function(e) {
                return !isNaN(parseFloat(e))
            },
            _hasScroll: function(t, n) {
                if ("hidden" === e(t).css("overflow")) return !1;
                var i = n && "left" === n ? "scrollLeft" : "scrollTop",
                    r = !1;
                return t[i] > 0 || (t[i] = 1, r = t[i] > 0, t[i] = 0, r)
            },
            _create: function() {
                var t, n = this.options,
                    i = this;
                this._addClass("ui-resizable"), e.extend(this, {
                    _aspectRatio: !!n.aspectRatio,
                    aspectRatio: n.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: n.helper || n.ghost || n.animate ? n.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, t = {
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom"),
                    marginLeft: this.originalElement.css("marginLeft")
                }, this.element.css(t), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css(t), this._proportionallyResize()), this._setupHandles(), n.autoHide && e(this.element).on("mouseenter", function() {
                    n.disabled || (i._removeClass("ui-resizable-autohide"), i._handles.show())
                }).on("mouseleave", function() {
                    n.disabled || i.resizing || (i._addClass("ui-resizable-autohide"), i._handles.hide())
                }), this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var t, n = function(t) {
                    e(t).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (n(this.element), t = this.element, this.originalElement.css({
                    position: t.css("position"),
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: t.css("top"),
                    left: t.css("left")
                }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), n(this.originalElement), this
            },
            _setOption: function(e, t) {
                switch (this._super(e, t), e) {
                    case "handles":
                        this._removeHandles(), this._setupHandles()
                }
            },
            _setupHandles: function() {
                var t, n, i, r, o, s = this.options,
                    a = this;
                if (this.handles = s.handles || (e(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this._handles = e(), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), i = this.handles.split(","), this.handles = {}, n = 0; n < i.length; n++) t = e.trim(i[n]), r = "ui-resizable-" + t, o = e("<div>"), this._addClass(o, "ui-resizable-handle " + r), o.css({
                        zIndex: s.zIndex
                    }), this.handles[t] = ".ui-resizable-" + t, this.element.append(o);
                this._renderAxis = function(t) {
                    var n, i, r, o;
                    t = t || this.element;
                    for (n in this.handles) this.handles[n].constructor === String ? this.handles[n] = this.element.children(this.handles[n]).first().show() : (this.handles[n].jquery || this.handles[n].nodeType) && (this.handles[n] = e(this.handles[n]), this._on(this.handles[n], {
                        mousedown: a._mouseDown
                    })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (i = e(this.handles[n], this.element), o = /sw|ne|nw|se|n|s/.test(n) ? i.outerHeight() : i.outerWidth(), r = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join(""), t.css(r, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[n])
                }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() {
                    a.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = o && o[1] ? o[1] : "se")
                }), s.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
            },
            _removeHandles: function() {
                this._handles.remove()
            },
            _mouseCapture: function(t) {
                var n, i, r = !1;
                for (n in this.handles) i = e(this.handles[n])[0], (i === t.target || e.contains(i, t.target)) && (r = !0);
                return !this.options.disabled && r
            },
            _mouseStart: function(t) {
                var n, i, r, o = this.options,
                    s = this.element;
                return this.resizing = !0, this._renderProxy(), n = this._num(this.helper.css("left")),
                    i = this._num(this.helper.css("top")), o.containment && (n += e(o.containment).scrollLeft() || 0, i += e(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                        left: n,
                        top: i
                    }, this.size = this._helper ? {
                        width: this.helper.width(),
                        height: this.helper.height()
                    } : {
                        width: s.width(),
                        height: s.height()
                    }, this.originalSize = this._helper ? {
                        width: s.outerWidth(),
                        height: s.outerHeight()
                    } : {
                        width: s.width(),
                        height: s.height()
                    }, this.sizeDiff = {
                        width: s.outerWidth() - s.width(),
                        height: s.outerHeight() - s.height()
                    }, this.originalPosition = {
                        left: n,
                        top: i
                    }, this.originalMousePosition = {
                        left: t.pageX,
                        top: t.pageY
                    }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, r = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === r ? this.axis + "-resize" : r), this._addClass("ui-resizable-resizing"), this._propagate("start", t), !0
            },
            _mouseDrag: function(t) {
                var n, i, r = this.originalMousePosition,
                    o = this.axis,
                    s = t.pageX - r.left || 0,
                    a = t.pageY - r.top || 0,
                    l = this._change[o];
                return this._updatePrevProperties(), !!l && (n = l.apply(this, [t, s, a]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (n = this._updateRatio(n, t)), n = this._respectSize(n, t), this._updateCache(n), this._propagate("resize", t), i = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(i) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1)
            },
            _mouseStop: function(t) {
                this.resizing = !1;
                var n, i, r, o, s, a, l, u = this.options,
                    c = this;
                return this._helper && (n = this._proportionallyResizeElements, i = n.length && /textarea/i.test(n[0].nodeName), r = i && this._hasScroll(n[0], "left") ? 0 : c.sizeDiff.height, o = i ? 0 : c.sizeDiff.width, s = {
                    width: c.helper.width() - o,
                    height: c.helper.height() - r
                }, a = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, l = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, u.animate || this.element.css(e.extend(s, {
                    top: l,
                    left: a
                })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !u.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
            },
            _updatePrevProperties: function() {
                this.prevPosition = {
                    top: this.position.top,
                    left: this.position.left
                }, this.prevSize = {
                    width: this.size.width,
                    height: this.size.height
                }
            },
            _applyChanges: function() {
                var e = {};
                return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e
            },
            _updateVirtualBoundaries: function(e) {
                var t, n, i, r, o, s = this.options;
                o = {
                    minWidth: this._isNumber(s.minWidth) ? s.minWidth : 0,
                    maxWidth: this._isNumber(s.maxWidth) ? s.maxWidth : 1 / 0,
                    minHeight: this._isNumber(s.minHeight) ? s.minHeight : 0,
                    maxHeight: this._isNumber(s.maxHeight) ? s.maxHeight : 1 / 0
                }, (this._aspectRatio || e) && (t = o.minHeight * this.aspectRatio, i = o.minWidth / this.aspectRatio, n = o.maxHeight * this.aspectRatio, r = o.maxWidth / this.aspectRatio, t > o.minWidth && (o.minWidth = t), i > o.minHeight && (o.minHeight = i), n < o.maxWidth && (o.maxWidth = n), r < o.maxHeight && (o.maxHeight = r)), this._vBoundaries = o
            },
            _updateCache: function(e) {
                this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width)
            },
            _updateRatio: function(e) {
                var t = this.position,
                    n = this.size,
                    i = this.axis;
                return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), "sw" === i && (e.left = t.left + (n.width - e.width), e.top = null), "nw" === i && (e.top = t.top + (n.height - e.height), e.left = t.left + (n.width - e.width)), e
            },
            _respectSize: function(e) {
                var t = this._vBoundaries,
                    n = this.axis,
                    i = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
                    r = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height,
                    o = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
                    s = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height,
                    a = this.originalPosition.left + this.originalSize.width,
                    l = this.originalPosition.top + this.originalSize.height,
                    u = /sw|nw|w/.test(n),
                    c = /nw|ne|n/.test(n);
                return o && (e.width = t.minWidth), s && (e.height = t.minHeight), i && (e.width = t.maxWidth), r && (e.height = t.maxHeight), o && u && (e.left = a - t.minWidth), i && u && (e.left = a - t.maxWidth), s && c && (e.top = l - t.minHeight), r && c && (e.top = l - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
            },
            _getPaddingPlusBorderDimensions: function(e) {
                for (var t = 0, n = [], i = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], r = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; t < 4; t++) n[t] = parseFloat(i[t]) || 0, n[t] += parseFloat(r[t]) || 0;
                return {
                    height: n[0] + n[2],
                    width: n[1] + n[3]
                }
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length)
                    for (var e, t = 0, n = this.helper || this.element; t < this._proportionallyResizeElements.length; t++) e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({
                        height: n.height() - this.outerDimensions.height || 0,
                        width: n.width() - this.outerDimensions.width || 0
                    })
            },
            _renderProxy: function() {
                var t = this.element,
                    n = this.options;
                this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
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
                        i = this.originalPosition;
                    return {
                        left: i.left + t,
                        width: n.width - t
                    }
                },
                n: function(e, t, n) {
                    var i = this.originalSize,
                        r = this.originalPosition;
                    return {
                        top: r.top + n,
                        height: i.height - n
                    }
                },
                s: function(e, t, n) {
                    return {
                        height: this.originalSize.height + n
                    }
                },
                se: function(t, n, i) {
                    return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, n, i]))
                },
                sw: function(t, n, i) {
                    return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, n, i]))
                },
                ne: function(t, n, i) {
                    return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, n, i]))
                },
                nw: function(t, n, i) {
                    return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, n, i]))
                }
            },
            _propagate: function(t, n) {
                e.ui.plugin.call(this, t, [n, this.ui()]), "resize" !== t && this._trigger(t, n, this.ui())
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
                var n = e(this).resizable("instance"),
                    i = n.options,
                    r = n._proportionallyResizeElements,
                    o = r.length && /textarea/i.test(r[0].nodeName),
                    s = o && n._hasScroll(r[0], "left") ? 0 : n.sizeDiff.height,
                    a = o ? 0 : n.sizeDiff.width,
                    l = {
                        width: n.size.width - a,
                        height: n.size.height - s
                    },
                    u = parseFloat(n.element.css("left")) + (n.position.left - n.originalPosition.left) || null,
                    c = parseFloat(n.element.css("top")) + (n.position.top - n.originalPosition.top) || null;
                n.element.animate(e.extend(l, c && u ? {
                    top: c,
                    left: u
                } : {}), {
                    duration: i.animateDuration,
                    easing: i.animateEasing,
                    step: function() {
                        var i = {
                            width: parseFloat(n.element.css("width")),
                            height: parseFloat(n.element.css("height")),
                            top: parseFloat(n.element.css("top")),
                            left: parseFloat(n.element.css("left"))
                        };
                        r && r.length && e(r[0]).css({
                            width: i.width,
                            height: i.height
                        }), n._updateCache(i), n._propagate("resize", t)
                    }
                })
            }
        }), e.ui.plugin.add("resizable", "containment", {
            start: function() {
                var t, n, i, r, o, s, a, l = e(this).resizable("instance"),
                    u = l.options,
                    c = l.element,
                    h = u.containment,
                    d = h instanceof e ? h.get(0) : /parent/.test(h) ? c.parent().get(0) : h;
                d && (l.containerElement = e(d), /document/.test(h) || h === document ? (l.containerOffset = {
                    left: 0,
                    top: 0
                }, l.containerPosition = {
                    left: 0,
                    top: 0
                }, l.parentData = {
                    element: e(document),
                    left: 0,
                    top: 0,
                    width: e(document).width(),
                    height: e(document).height() || document.body.parentNode.scrollHeight
                }) : (t = e(d), n = [], e(["Top", "Right", "Left", "Bottom"]).each(function(e, i) {
                    n[e] = l._num(t.css("padding" + i))
                }), l.containerOffset = t.offset(), l.containerPosition = t.position(), l.containerSize = {
                    height: t.innerHeight() - n[3],
                    width: t.innerWidth() - n[1]
                }, i = l.containerOffset, r = l.containerSize.height, o = l.containerSize.width, s = l._hasScroll(d, "left") ? d.scrollWidth : o, a = l._hasScroll(d) ? d.scrollHeight : r, l.parentData = {
                    element: d,
                    left: i.left,
                    top: i.top,
                    width: s,
                    height: a
                }))
            },
            resize: function(t) {
                var n, i, r, o, s = e(this).resizable("instance"),
                    a = s.options,
                    l = s.containerOffset,
                    u = s.position,
                    c = s._aspectRatio || t.shiftKey,
                    h = {
                        top: 0,
                        left: 0
                    },
                    d = s.containerElement,
                    f = !0;
                d[0] !== document && /static/.test(d.css("position")) && (h = l), u.left < (s._helper ? l.left : 0) && (s.size.width = s.size.width + (s._helper ? s.position.left - l.left : s.position.left - h.left), c && (s.size.height = s.size.width / s.aspectRatio, f = !1), s.position.left = a.helper ? l.left : 0), u.top < (s._helper ? l.top : 0) && (s.size.height = s.size.height + (s._helper ? s.position.top - l.top : s.position.top), c && (s.size.width = s.size.height * s.aspectRatio, f = !1), s.position.top = s._helper ? l.top : 0), r = s.containerElement.get(0) === s.element.parent().get(0), o = /relative|absolute/.test(s.containerElement.css("position")), r && o ? (s.offset.left = s.parentData.left + s.position.left, s.offset.top = s.parentData.top + s.position.top) : (s.offset.left = s.element.offset().left, s.offset.top = s.element.offset().top), n = Math.abs(s.sizeDiff.width + (s._helper ? s.offset.left - h.left : s.offset.left - l.left)), i = Math.abs(s.sizeDiff.height + (s._helper ? s.offset.top - h.top : s.offset.top - l.top)), n + s.size.width >= s.parentData.width && (s.size.width = s.parentData.width - n, c && (s.size.height = s.size.width / s.aspectRatio, f = !1)), i + s.size.height >= s.parentData.height && (s.size.height = s.parentData.height - i, c && (s.size.width = s.size.height * s.aspectRatio, f = !1)), f || (s.position.left = s.prevPosition.left, s.position.top = s.prevPosition.top, s.size.width = s.prevSize.width, s.size.height = s.prevSize.height)
            },
            stop: function() {
                var t = e(this).resizable("instance"),
                    n = t.options,
                    i = t.containerOffset,
                    r = t.containerPosition,
                    o = t.containerElement,
                    s = e(t.helper),
                    a = s.offset(),
                    l = s.outerWidth() - t.sizeDiff.width,
                    u = s.outerHeight() - t.sizeDiff.height;
                t._helper && !n.animate && /relative/.test(o.css("position")) && e(this).css({
                    left: a.left - r.left - i.left,
                    width: l,
                    height: u
                }), t._helper && !n.animate && /static/.test(o.css("position")) && e(this).css({
                    left: a.left - r.left - i.left,
                    width: l,
                    height: u
                })
            }
        }), e.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var t = e(this).resizable("instance"),
                    n = t.options;
                e(n.alsoResize).each(function() {
                    var t = e(this);
                    t.data("ui-resizable-alsoresize", {
                        width: parseFloat(t.width()),
                        height: parseFloat(t.height()),
                        left: parseFloat(t.css("left")),
                        top: parseFloat(t.css("top"))
                    })
                })
            },
            resize: function(t, n) {
                var i = e(this).resizable("instance"),
                    r = i.options,
                    o = i.originalSize,
                    s = i.originalPosition,
                    a = {
                        height: i.size.height - o.height || 0,
                        width: i.size.width - o.width || 0,
                        top: i.position.top - s.top || 0,
                        left: i.position.left - s.left || 0
                    };
                e(r.alsoResize).each(function() {
                    var t = e(this),
                        i = e(this).data("ui-resizable-alsoresize"),
                        r = {},
                        o = t.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    e.each(o, function(e, t) {
                        var n = (i[t] || 0) + (a[t] || 0);
                        n && n >= 0 && (r[t] = n || null)
                    }), t.css(r)
                })
            },
            stop: function() {
                e(this).removeData("ui-resizable-alsoresize")
            }
        }), e.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var t = e(this).resizable("instance"),
                    n = t.size;
                t.ghost = t.originalElement.clone(), t.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: n.height,
                    width: n.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }), t._addClass(t.ghost, "ui-resizable-ghost"), e.uiBackCompat !== !1 && "string" == typeof t.options.ghost && t.ghost.addClass(this.options.ghost), t.ghost.appendTo(t.helper)
            },
            resize: function() {
                var t = e(this).resizable("instance");
                t.ghost && t.ghost.css({
                    position: "relative",
                    height: t.size.height,
                    width: t.size.width
                })
            },
            stop: function() {
                var t = e(this).resizable("instance");
                t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
            }
        }), e.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var t, n = e(this).resizable("instance"),
                    i = n.options,
                    r = n.size,
                    o = n.originalSize,
                    s = n.originalPosition,
                    a = n.axis,
                    l = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                    u = l[0] || 1,
                    c = l[1] || 1,
                    h = Math.round((r.width - o.width) / u) * u,
                    d = Math.round((r.height - o.height) / c) * c,
                    f = o.width + h,
                    p = o.height + d,
                    m = i.maxWidth && i.maxWidth < f,
                    g = i.maxHeight && i.maxHeight < p,
                    v = i.minWidth && i.minWidth > f,
                    y = i.minHeight && i.minHeight > p;
                i.grid = l, v && (f += u), y && (p += c), m && (f -= u), g && (p -= c), /^(se|s|e)$/.test(a) ? (n.size.width = f, n.size.height = p) : /^(ne)$/.test(a) ? (n.size.width = f, n.size.height = p, n.position.top = s.top - d) : /^(sw)$/.test(a) ? (n.size.width = f, n.size.height = p, n.position.left = s.left - h) : ((p - c <= 0 || f - u <= 0) && (t = n._getPaddingPlusBorderDimensions(this)), p - c > 0 ? (n.size.height = p, n.position.top = s.top - d) : (p = c - t.height, n.size.height = p, n.position.top = s.top + o.height - p), f - u > 0 ? (n.size.width = f, n.position.left = s.left - h) : (f = u - t.width, n.size.width = f, n.position.left = s.left + o.width - f))
            }
        }), e.ui.resizable
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "./menu", "../keycode", "../position", "../safe-active-element", "../version", "../widget"], e) : e(jQuery)
    }(function(e) {
        return e.widget("ui.autocomplete", {
            version: "1.12.1",
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
                var t, n, i, r = this.element[0].nodeName.toLowerCase(),
                    o = "textarea" === r,
                    s = "input" === r;
                this.isMultiLine = o || !s && this._isContentEditable(this.element), this.valueMethod = this.element[o || s ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(r) {
                        if (this.element.prop("readOnly")) return t = !0, i = !0, void(n = !0);
                        t = !1, i = !1, n = !1;
                        var o = e.ui.keyCode;
                        switch (r.keyCode) {
                            case o.PAGE_UP:
                                t = !0, this._move("previousPage", r);
                                break;
                            case o.PAGE_DOWN:
                                t = !0, this._move("nextPage", r);
                                break;
                            case o.UP:
                                t = !0, this._keyEvent("previous", r);
                                break;
                            case o.DOWN:
                                t = !0, this._keyEvent("next", r);
                                break;
                            case o.ENTER:
                                this.menu.active && (t = !0, r.preventDefault(), this.menu.select(r));
                                break;
                            case o.TAB:
                                this.menu.active && this.menu.select(r);
                                break;
                            case o.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(r), r.preventDefault());
                                break;
                            default:
                                n = !0, this._searchTimeout(r)
                        }
                    },
                    keypress: function(i) {
                        if (t) return t = !1, void(this.isMultiLine && !this.menu.element.is(":visible") || i.preventDefault());
                        if (!n) {
                            var r = e.ui.keyCode;
                            switch (i.keyCode) {
                                case r.PAGE_UP:
                                    this._move("previousPage", i);
                                    break;
                                case r.PAGE_DOWN:
                                    this._move("nextPage", i);
                                    break;
                                case r.UP:
                                    this._keyEvent("previous", i);
                                    break;
                                case r.DOWN:
                                    this._keyEvent("next", i)
                            }
                        }
                    },
                    input: function(e) {
                        return i ? (i = !1, void e.preventDefault()) : void this._searchTimeout(e)
                    },
                    focus: function() {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function(e) {
                        return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(e), void this._change(e))
                    }
                }), this._initSource(), this.menu = e("<ul>").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                    mousedown: function(t) {
                        t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur, this.element[0] !== e.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                        })
                    },
                    menufocus: function(t, n) {
                        var i, r;
                        return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() {
                            e(t.target).trigger(t.originalEvent)
                        })) : (r = n.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {
                            item: r
                        }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(r.value), i = n.item.attr("aria-label") || r.value, void(i && e.trim(i).length && (this.liveRegion.children().hide(), e("<div>").text(i).appendTo(this.liveRegion))))
                    },
                    menuselect: function(t, n) {
                        var i = n.item.data("ui-autocomplete-item"),
                            r = this.previous;
                        this.element[0] !== e.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = r, this._delay(function() {
                            this.previous = r, this.selectedItem = i
                        })), !1 !== this._trigger("select", t, {
                            item: i
                        }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                    }
                }), this.liveRegion = e("<div>", {
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function(e, t) {
                this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
            },
            _isEventTargetInWidget: function(t) {
                var n = this.menu.element[0];
                return t.target === this.element[0] || t.target === n || e.contains(n, t.target)
            },
            _closeOnClickOutside: function(e) {
                this._isEventTargetInWidget(e) || this.close()
            },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t
            },
            _initSource: function() {
                var t, n, i = this;
                e.isArray(this.options.source) ? (t = this.options.source, this.source = function(n, i) {
                    i(e.ui.autocomplete.filter(t, n.term))
                }) : "string" == typeof this.options.source ? (n = this.options.source, this.source = function(t, r) {
                    i.xhr && i.xhr.abort(), i.xhr = e.ajax({
                        url: n,
                        data: t,
                        dataType: "json",
                        success: function(e) {
                            r(e)
                        },
                        error: function() {
                            r([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(e) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    var t = this.term === this._value(),
                        n = this.menu.element.is(":visible"),
                        i = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                    t && (!t || n || i) || (this.selectedItem = null, this.search(null, e))
                }, this.options.delay)
            },
            search: function(e, t) {
                return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0
            },
            _search: function(e) {
                this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: e
                }, this._response())
            },
            _response: function() {
                var t = ++this.requestIndex;
                return e.proxy(function(e) {
                    t === this.requestIndex && this.__response(e), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
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
                this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
            },
            _change: function(e) {
                this.previous !== this._value() && this._trigger("change", e, {
                    item: this.selectedItem
                })
            },
            _normalize: function(t) {
                return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                    return "string" == typeof t ? {
                        label: t,
                        value: t
                    } : e.extend({}, t, {
                        label: t.label || t.value,
                        value: t.value || t.label
                    })
                })
            },
            _suggest: function(t) {
                var n = this.menu.element.empty();
                this._renderMenu(n, t), this.isNewMenu = !0, this.menu.refresh(), n.show(), this._resizeMenu(), n.position(e.extend({
                    of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                    mousedown: "_closeOnClickOutside"
                })
            },
            _resizeMenu: function() {
                var e = this.menu.element;
                e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(t, n) {
                var i = this;
                e.each(n, function(e, n) {
                    i._renderItemData(t, n)
                })
            },
            _renderItemData: function(e, t) {
                return this._renderItem(e, t).data("ui-autocomplete-item", t)
            },
            _renderItem: function(t, n) {
                return e("<li>").append(e("<div>").text(n.label)).appendTo(t)
            },
            _move: function(e, t) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[e](t) : void this.search(null, t)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(e, t) {
                this.isMultiLine && !this.menu.element.is(":visible") || (this._move(e, t), t.preventDefault())
            },
            _isContentEditable: function(e) {
                if (!e.length) return !1;
                var t = e.prop("contentEditable");
                return "inherit" === t ? this._isContentEditable(e.parent()) : "true" === t
            }
        }), e.extend(e.ui.autocomplete, {
            escapeRegex: function(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(t, n) {
                var i = new RegExp(e.ui.autocomplete.escapeRegex(n), "i");
                return e.grep(t, function(e) {
                    return i.test(e.label || e.value || e)
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
            __response: function(t) {
                var n;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (n = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), e("<div>").text(n).appendTo(this.liveRegion))
            }
        }), e.ui.autocomplete
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "./controlgroup", "./checkboxradio", "../keycode", "../widget"], e) : e(jQuery)
    }(function(e) {
        return e.widget("ui.button", {
            version: "1.12.1",
            defaultElement: "<button>",
            options: {
                classes: {
                    "ui-button": "ui-corner-all"
                },
                disabled: null,
                icon: null,
                iconPosition: "beginning",
                label: null,
                showLabel: !0
            },
            _getCreateOptions: function() {
                var e, t = this._super() || {};
                return this.isInput = this.element.is("input"), e = this.element[0].disabled, null != e && (t.disabled = e), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (t.label = this.originalLabel), t
            },
            _create: function() {
                !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
                    keyup: function(t) {
                        t.keyCode === e.ui.keyCode.SPACE && (t.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                    }
                })
            },
            _enhance: function() {
                this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
            },
            _updateTooltip: function() {
                this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
            },
            _updateIcon: function(t, n) {
                var i = "iconPosition" !== t,
                    r = i ? this.options.iconPosition : n,
                    o = "top" === r || "bottom" === r;
                this.icon ? i && this._removeClass(this.icon, null, this.options.icon) : (this.icon = e("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), i && this._addClass(this.icon, null, n), this._attachIcon(r), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = e("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(r))
            },
            _destroy: function() {
                this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
            },
            _attachIconSpace: function(e) {
                this.icon[/^(?:end|bottom)/.test(e) ? "before" : "after"](this.iconSpace)
            },
            _attachIcon: function(e) {
                this.element[/^(?:end|bottom)/.test(e) ? "append" : "prepend"](this.icon)
            },
            _setOptions: function(e) {
                var t = void 0 === e.showLabel ? this.options.showLabel : e.showLabel,
                    n = void 0 === e.icon ? this.options.icon : e.icon;
                t || n || (e.showLabel = !0), this._super(e)
            },
            _setOption: function(e, t) {
                "icon" === e && (t ? this._updateIcon(e, t) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === e && this._updateIcon(e, t), "showLabel" === e && (this._toggleClass("ui-button-icon-only", null, !t), this._updateTooltip()), "label" === e && (this.isInput ? this.element.val(t) : (this.element.html(t), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(e, t), "disabled" === e && (this._toggleClass(null, "ui-state-disabled", t), this.element[0].disabled = t, t && this.element.blur())
            },
            refresh: function() {
                var e = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
                e !== this.options.disabled && this._setOptions({
                    disabled: e
                }), this._updateTooltip()
            }
        }), e.uiBackCompat !== !1 && (e.widget("ui.button", e.ui.button, {
            options: {
                text: !0,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
            },
            _setOption: function(e, t) {
                return "text" === e ? void this._super("showLabel", t) : ("showLabel" === e && (this.options.text = t), "icon" === e && (this.options.icons.primary = t), "icons" === e && (t.primary ? (this._super("icon", t.primary), this._super("iconPosition", "beginning")) : t.secondary && (this._super("icon", t.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments))
            }
        }), e.fn.button = function(t) {
            return function() {
                return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? t.apply(this, arguments) : (e.ui.checkboxradio || e.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
                    icon: !1
                }) : this.checkboxradio.apply(this, arguments))
            }
        }(e.fn.button), e.fn.buttonset = function() {
            return e.ui.controlgroup || e.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
                button: arguments[0].items
            }), this.controlgroup.apply(this, arguments))
        }), e.ui.button
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "../version", "../keycode"], e) : e(jQuery)
    }(function(e) {
        function t(e) {
            for (var t, n; e.length && e[0] !== document;) {
                if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (n = parseInt(e.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                e = e.parent()
            }
            return 0
        }

        function n() {
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
            }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = i(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function i(t) {
            var n = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.on("mouseout", n, function() {
                e(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && e(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && e(this).removeClass("ui-datepicker-next-hover")
            }).on("mouseover", n, r)
        }

        function r() {
            e.datepicker._isDisabledDatepicker(s.inline ? s.dpDiv.parent()[0] : s.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && e(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && e(this).addClass("ui-datepicker-next-hover"))
        }

        function o(t, n) {
            e.extend(t, n);
            for (var i in n) null == n[i] && (t[i] = n[i]);
            return t
        }
        e.extend(e.ui, {
            datepicker: {
                version: "1.12.1"
            }
        });
        var s;
        return e.extend(n.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(e) {
                return o(this._defaults, e || {}), this
            },
            _attachDatepicker: function(t, n) {
                var i, r, o;
                i = t.nodeName.toLowerCase(), r = "div" === i || "span" === i, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), o = this._newInst(e(t), r), o.settings = e.extend({}, n || {}), "input" === i ? this._connectDatepicker(t, o) : r && this._inlineDatepicker(t, o)
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
                    dpDiv: n ? i(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function(t, n) {
                var i = e(t);
                n.append = e([]), n.trigger = e([]), i.hasClass(this.markerClassName) || (this._attachments(i, n), i.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(n), e.data(t, "datepicker", n), n.settings.disabled && this._disableDatepicker(t))
            },
            _attachments: function(t, n) {
                var i, r, o, s = this._get(n, "appendText"),
                    a = this._get(n, "isRTL");
                n.append && n.append.remove(), s && (n.append = e("<span class='" + this._appendClass + "'>" + s + "</span>"), t[a ? "before" : "after"](n.append)), t.off("focus", this._showDatepicker), n.trigger && n.trigger.remove(), i = this._get(n, "showOn"), "focus" !== i && "both" !== i || t.on("focus", this._showDatepicker), "button" !== i && "both" !== i || (r = this._get(n, "buttonText"),
                    o = this._get(n, "buttonImage"), n.trigger = e(this._get(n, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                        src: o,
                        alt: r,
                        title: r
                    }) : e("<button type='button'></button>").addClass(this._triggerClass).html(o ? e("<img/>").attr({
                        src: o,
                        alt: r,
                        title: r
                    }) : r)), t[a ? "before" : "after"](n.trigger), n.trigger.on("click", function() {
                        return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
                    }))
            },
            _autoSize: function(e) {
                if (this._get(e, "autoSize") && !e.inline) {
                    var t, n, i, r, o = new Date(2009, 11, 20),
                        s = this._get(e, "dateFormat");
                    s.match(/[DM]/) && (t = function(e) {
                        for (n = 0, i = 0, r = 0; r < e.length; r++) e[r].length > n && (n = e[r].length, i = r);
                        return i
                    }, o.setMonth(t(this._get(e, s.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(t(this._get(e, s.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), e.input.attr("size", this._formatDate(e, o).length)
                }
            },
            _inlineDatepicker: function(t, n) {
                var i = e(t);
                i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(n.dpDiv), e.data(t, "datepicker", n), this._setDate(n, this._getDefaultDate(n), !0), this._updateDatepicker(n), this._updateAlternate(n), n.settings.disabled && this._disableDatepicker(t), n.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(t, n, i, r, s) {
                var a, l, u, c, h, d = this._dialogInst;
                return d || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), e("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, e.data(this._dialogInput[0], "datepicker", d)), o(d.settings, r || {}), n = n && n.constructor === Date ? this._formatDate(d, n) : n, this._dialogInput.val(n), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, this._pos || (l = document.documentElement.clientWidth, u = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, u / 2 - 150 + h]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", d), this
            },
            _destroyDatepicker: function(t) {
                var n, i = e(t),
                    r = e.data(t, "datepicker");
                i.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === n ? (r.append.remove(), r.trigger.remove(), i.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== n && "span" !== n || i.removeClass(this.markerClassName).empty(), s === r && (s = null))
            },
            _enableDatepicker: function(t) {
                var n, i, r = e(t),
                    o = e.data(t, "datepicker");
                r.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), "input" === n ? (t.disabled = !1, o.trigger.filter("button").each(function() {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : "div" !== n && "span" !== n || (i = r.children("." + this._inlineClass), i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                    return e === t ? null : e
                }))
            },
            _disableDatepicker: function(t) {
                var n, i, r = e(t),
                    o = e.data(t, "datepicker");
                r.hasClass(this.markerClassName) && (n = t.nodeName.toLowerCase(), "input" === n ? (t.disabled = !0, o.trigger.filter("button").each(function() {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : "div" !== n && "span" !== n || (i = r.children("." + this._inlineClass), i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                    return e === t ? null : e
                }), this._disabledInputs[this._disabledInputs.length] = t)
            },
            _isDisabledDatepicker: function(e) {
                if (!e) return !1;
                for (var t = 0; t < this._disabledInputs.length; t++)
                    if (this._disabledInputs[t] === e) return !0;
                return !1
            },
            _getInst: function(t) {
                try {
                    return e.data(t, "datepicker")
                } catch (e) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function(t, n, i) {
                var r, s, a, l, u = this._getInst(t);
                return 2 === arguments.length && "string" == typeof n ? "defaults" === n ? e.extend({}, e.datepicker._defaults) : u ? "all" === n ? e.extend({}, u.settings) : this._get(u, n) : null : (r = n || {}, "string" == typeof n && (r = {}, r[n] = i), void(u && (this._curInst === u && this._hideDatepicker(), s = this._getDateDatepicker(t, !0), a = this._getMinMaxDate(u, "min"), l = this._getMinMaxDate(u, "max"), o(u.settings, r), null !== a && void 0 !== r.dateFormat && void 0 === r.minDate && (u.settings.minDate = this._formatDate(u, a)), null !== l && void 0 !== r.dateFormat && void 0 === r.maxDate && (u.settings.maxDate = this._formatDate(u, l)), "disabled" in r && (r.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), u), this._autoSize(u), this._setDate(u, s), this._updateAlternate(u), this._updateDatepicker(u))))
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
                var n, i, r, o = e.datepicker._getInst(t.target),
                    s = !0,
                    a = o.dpDiv.is(".ui-datepicker-rtl");
                if (o._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                    case 9:
                        e.datepicker._hideDatepicker(), s = !1;
                        break;
                    case 13:
                        return r = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", o.dpDiv), r[0] && e.datepicker._selectDay(t.target, o.selectedMonth, o.selectedYear, r[0]), n = e.datepicker._get(o, "onSelect"), n ? (i = e.datepicker._formatDate(o), n.apply(o.input ? o.input[0] : null, [i, o])) : e.datepicker._hideDatepicker(), !1;
                    case 27:
                        e.datepicker._hideDatepicker();
                        break;
                    case 33:
                        e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(o, "stepBigMonths") : -e.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 34:
                        e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(o, "stepBigMonths") : +e.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 35:
                        (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), s = t.ctrlKey || t.metaKey;
                        break;
                    case 36:
                        (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), s = t.ctrlKey || t.metaKey;
                        break;
                    case 37:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, a ? 1 : -1, "D"), s = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(o, "stepBigMonths") : -e.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 38:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), s = t.ctrlKey || t.metaKey;
                        break;
                    case 39:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, a ? -1 : 1, "D"), s = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(o, "stepBigMonths") : +e.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 40:
                        (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), s = t.ctrlKey || t.metaKey;
                        break;
                    default:
                        s = !1
                } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : s = !1;
                s && (t.preventDefault(), t.stopPropagation())
            },
            _doKeyPress: function(t) {
                var n, i, r = e.datepicker._getInst(t.target);
                if (e.datepicker._get(r, "constrainInput")) return n = e.datepicker._possibleChars(e.datepicker._get(r, "dateFormat")), i = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || i < " " || !n || n.indexOf(i) > -1
            },
            _doKeyUp: function(t) {
                var n, i = e.datepicker._getInst(t.target);
                if (i.input.val() !== i.lastVal) try {
                    n = e.datepicker.parseDate(e.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, e.datepicker._getFormatConfig(i)), n && (e.datepicker._setDateFromField(i), e.datepicker._updateAlternate(i), e.datepicker._updateDatepicker(i))
                } catch (e) {}
                return !0
            },
            _showDatepicker: function(n) {
                if (n = n.target || n, "input" !== n.nodeName.toLowerCase() && (n = e("input", n.parentNode)[0]), !e.datepicker._isDisabledDatepicker(n) && e.datepicker._lastInput !== n) {
                    var i, r, s, a, l, u, c;
                    i = e.datepicker._getInst(n), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), r = e.datepicker._get(i, "beforeShow"), s = r ? r.apply(n, [n, i]) : {}, s !== !1 && (o(i.settings, s), i.lastVal = null, e.datepicker._lastInput = n, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (n.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(n), e.datepicker._pos[1] += n.offsetHeight), a = !1, e(n).parents().each(function() {
                        return a |= "fixed" === e(this).css("position"), !a
                    }), l = {
                        left: e.datepicker._pos[0],
                        top: e.datepicker._pos[1]
                    }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), e.datepicker._updateDatepicker(i), l = e.datepicker._checkOffset(i, l, a), i.dpDiv.css({
                        position: e.datepicker._inDialog && e.blockUI ? "static" : a ? "fixed" : "absolute",
                        display: "none",
                        left: l.left + "px",
                        top: l.top + "px"
                    }), i.inline || (u = e.datepicker._get(i, "showAnim"), c = e.datepicker._get(i, "duration"), i.dpDiv.css("z-index", t(e(n)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[u] ? i.dpDiv.show(u, e.datepicker._get(i, "showOptions"), c) : i.dpDiv[u || "show"](u ? c : null), e.datepicker._shouldFocusInput(i) && i.input.trigger("focus"), e.datepicker._curInst = i))
                }
            },
            _updateDatepicker: function(t) {
                this.maxRows = 4, s = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
                var n, i = this._getNumberOfMonths(t),
                    o = i[1],
                    a = 17,
                    l = t.dpDiv.find("." + this._dayOverClass + " a");
                l.length > 0 && r.apply(l.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), o > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + o).css("width", a * o + "em"), t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.trigger("focus"), t.yearshtml && (n = t.yearshtml, setTimeout(function() {
                    n === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), n = t.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function(e) {
                return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
            },
            _checkOffset: function(t, n, i) {
                var r = t.dpDiv.outerWidth(),
                    o = t.dpDiv.outerHeight(),
                    s = t.input ? t.input.outerWidth() : 0,
                    a = t.input ? t.input.outerHeight() : 0,
                    l = document.documentElement.clientWidth + (i ? 0 : e(document).scrollLeft()),
                    u = document.documentElement.clientHeight + (i ? 0 : e(document).scrollTop());
                return n.left -= this._get(t, "isRTL") ? r - s : 0, n.left -= i && n.left === t.input.offset().left ? e(document).scrollLeft() : 0, n.top -= i && n.top === t.input.offset().top + a ? e(document).scrollTop() : 0, n.left -= Math.min(n.left, n.left + r > l && l > r ? Math.abs(n.left + r - l) : 0), n.top -= Math.min(n.top, n.top + o > u && u > o ? Math.abs(o + a) : 0), n
            },
            _findPos: function(t) {
                for (var n, i = this._getInst(t), r = this._get(i, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[r ? "previousSibling" : "nextSibling"];
                return n = e(t).offset(), [n.left, n.top]
            },
            _hideDatepicker: function(t) {
                var n, i, r, o, s = this._curInst;
                !s || t && s !== e.data(t, "datepicker") || this._datepickerShowing && (n = this._get(s, "showAnim"), i = this._get(s, "duration"), r = function() {
                    e.datepicker._tidyDialog(s)
                }, e.effects && (e.effects.effect[n] || e.effects[n]) ? s.dpDiv.hide(n, e.datepicker._get(s, "showOptions"), i, r) : s.dpDiv["slideDown" === n ? "slideUp" : "fadeIn" === n ? "fadeOut" : "hide"](n ? i : null, r), n || r(), this._datepickerShowing = !1, o = this._get(s, "onClose"), o && o.apply(s.input ? s.input[0] : null, [s.input ? s.input.val() : "", s]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function(e) {
                e.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(t) {
                if (e.datepicker._curInst) {
                    var n = e(t.target),
                        i = e.datepicker._getInst(n[0]);
                    (n[0].id === e.datepicker._mainDivId || 0 !== n.parents("#" + e.datepicker._mainDivId).length || n.hasClass(e.datepicker.markerClassName) || n.closest("." + e.datepicker._triggerClass).length || !e.datepicker._datepickerShowing || e.datepicker._inDialog && e.blockUI) && (!n.hasClass(e.datepicker.markerClassName) || e.datepicker._curInst === i) || e.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(t, n, i) {
                var r = e(t),
                    o = this._getInst(r[0]);
                this._isDisabledDatepicker(r[0]) || (this._adjustInstDate(o, n + ("M" === i ? this._get(o, "showCurrentAtPos") : 0), i), this._updateDatepicker(o))
            },
            _gotoToday: function(t) {
                var n, i = e(t),
                    r = this._getInst(i[0]);
                this._get(r, "gotoCurrent") && r.currentDay ? (r.selectedDay = r.currentDay, r.drawMonth = r.selectedMonth = r.currentMonth, r.drawYear = r.selectedYear = r.currentYear) : (n = new Date, r.selectedDay = n.getDate(), r.drawMonth = r.selectedMonth = n.getMonth(), r.drawYear = r.selectedYear = n.getFullYear()), this._notifyChange(r), this._adjustDate(i)
            },
            _selectMonthYear: function(t, n, i) {
                var r = e(t),
                    o = this._getInst(r[0]);
                o["selected" + ("M" === i ? "Month" : "Year")] = o["draw" + ("M" === i ? "Month" : "Year")] = parseInt(n.options[n.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(r)
            },
            _selectDay: function(t, n, i, r) {
                var o, s = e(t);
                e(r).hasClass(this._unselectableClass) || this._isDisabledDatepicker(s[0]) || (o = this._getInst(s[0]), o.selectedDay = o.currentDay = e("a", r).html(), o.selectedMonth = o.currentMonth = n, o.selectedYear = o.currentYear = i, this._selectDate(t, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
            },
            _clearDate: function(t) {
                var n = e(t);
                this._selectDate(n, "")
            },
            _selectDate: function(t, n) {
                var i, r = e(t),
                    o = this._getInst(r[0]);
                n = null != n ? n : this._formatDate(o), o.input && o.input.val(n), this._updateAlternate(o), i = this._get(o, "onSelect"), i ? i.apply(o.input ? o.input[0] : null, [n, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
            },
            _updateAlternate: function(t) {
                var n, i, r, o = this._get(t, "altField");
                o && (n = this._get(t, "altFormat") || this._get(t, "dateFormat"), i = this._getDate(t), r = this.formatDate(n, i, this._getFormatConfig(t)), e(o).val(r))
            },
            noWeekends: function(e) {
                var t = e.getDay();
                return [t > 0 && t < 6, ""]
            },
            iso8601Week: function(e) {
                var t, n = new Date(e.getTime());
                return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), t = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((t - n) / 864e5) / 7) + 1
            },
            parseDate: function(t, n, i) {
                if (null == t || null == n) throw "Invalid arguments";
                if (n = "object" == typeof n ? n.toString() : n + "", "" === n) return null;
                var r, o, s, a, l = 0,
                    u = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    c = "string" != typeof u ? u : (new Date).getFullYear() % 100 + parseInt(u, 10),
                    h = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    d = (i ? i.dayNames : null) || this._defaults.dayNames,
                    f = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    p = (i ? i.monthNames : null) || this._defaults.monthNames,
                    m = -1,
                    g = -1,
                    v = -1,
                    y = -1,
                    _ = !1,
                    b = function(e) {
                        var n = r + 1 < t.length && t.charAt(r + 1) === e;
                        return n && r++, n
                    },
                    w = function(e) {
                        var t = b(e),
                            i = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                            r = "y" === e ? i : 1,
                            o = new RegExp("^\\d{" + r + "," + i + "}"),
                            s = n.substring(l).match(o);
                        if (!s) throw "Missing number at position " + l;
                        return l += s[0].length, parseInt(s[0], 10)
                    },
                    x = function(t, i, r) {
                        var o = -1,
                            s = e.map(b(t) ? r : i, function(e, t) {
                                return [
                                    [t, e]
                                ]
                            }).sort(function(e, t) {
                                return -(e[1].length - t[1].length)
                            });
                        if (e.each(s, function(e, t) {
                                var i = t[1];
                                if (n.substr(l, i.length).toLowerCase() === i.toLowerCase()) return o = t[0], l += i.length, !1
                            }), o !== -1) return o + 1;
                        throw "Unknown name at position " + l
                    },
                    k = function() {
                        if (n.charAt(l) !== t.charAt(r)) throw "Unexpected literal at position " + l;
                        l++
                    };
                for (r = 0; r < t.length; r++)
                    if (_) "'" !== t.charAt(r) || b("'") ? k() : _ = !1;
                    else switch (t.charAt(r)) {
                        case "d":
                            v = w("d");
                            break;
                        case "D":
                            x("D", h, d);
                            break;
                        case "o":
                            y = w("o");
                            break;
                        case "m":
                            g = w("m");
                            break;
                        case "M":
                            g = x("M", f, p);
                            break;
                        case "y":
                            m = w("y");
                            break;
                        case "@":
                            a = new Date(w("@")), m = a.getFullYear(), g = a.getMonth() + 1, v = a.getDate();
                            break;
                        case "!":
                            a = new Date((w("!") - this._ticksTo1970) / 1e4), m = a.getFullYear(), g = a.getMonth() + 1, v = a.getDate();
                            break;
                        case "'":
                            b("'") ? k() : _ = !0;
                            break;
                        default:
                            k()
                    }
                    if (l < n.length && (s = n.substr(l), !/^\s+/.test(s))) throw "Extra/unparsed characters found in date: " + s;
                if (m === -1 ? m = (new Date).getFullYear() : m < 100 && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (m <= c ? 0 : -100)), y > -1)
                    for (g = 1, v = y;;) {
                        if (o = this._getDaysInMonth(m, g - 1), v <= o) break;
                        g++, v -= o
                    }
                if (a = this._daylightSavingAdjust(new Date(m, g - 1, v)), a.getFullYear() !== m || a.getMonth() + 1 !== g || a.getDate() !== v) throw "Invalid date";
                return a
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
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function(e, t, n) {
                if (!t) return "";
                var i, r = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                    o = (n ? n.dayNames : null) || this._defaults.dayNames,
                    s = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                    a = (n ? n.monthNames : null) || this._defaults.monthNames,
                    l = function(t) {
                        var n = i + 1 < e.length && e.charAt(i + 1) === t;
                        return n && i++, n
                    },
                    u = function(e, t, n) {
                        var i = "" + t;
                        if (l(e))
                            for (; i.length < n;) i = "0" + i;
                        return i
                    },
                    c = function(e, t, n, i) {
                        return l(e) ? i[t] : n[t]
                    },
                    h = "",
                    d = !1;
                if (t)
                    for (i = 0; i < e.length; i++)
                        if (d) "'" !== e.charAt(i) || l("'") ? h += e.charAt(i) : d = !1;
                        else switch (e.charAt(i)) {
                            case "d":
                                h += u("d", t.getDate(), 2);
                                break;
                            case "D":
                                h += c("D", t.getDay(), r, o);
                                break;
                            case "o":
                                h += u("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                h += u("m", t.getMonth() + 1, 2);
                                break;
                            case "M":
                                h += c("M", t.getMonth(), s, a);
                                break;
                            case "y":
                                h += l("y") ? t.getFullYear() : (t.getFullYear() % 100 < 10 ? "0" : "") + t.getFullYear() % 100;
                                break;
                            case "@":
                                h += t.getTime();
                                break;
                            case "!":
                                h += 1e4 * t.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                l("'") ? h += "'" : d = !0;
                                break;
                            default:
                                h += e.charAt(i)
                        }
                        return h
            },
            _possibleChars: function(e) {
                var t, n = "",
                    i = !1,
                    r = function(n) {
                        var i = t + 1 < e.length && e.charAt(t + 1) === n;
                        return i && t++, i
                    };
                for (t = 0; t < e.length; t++)
                    if (i) "'" !== e.charAt(t) || r("'") ? n += e.charAt(t) : i = !1;
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
                            r("'") ? n += "'" : i = !0;
                            break;
                        default:
                            n += e.charAt(t)
                    }
                    return n
            },
            _get: function(e, t) {
                return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
            },
            _setDateFromField: function(e, t) {
                if (e.input.val() !== e.lastVal) {
                    var n = this._get(e, "dateFormat"),
                        i = e.lastVal = e.input ? e.input.val() : null,
                        r = this._getDefaultDate(e),
                        o = r,
                        s = this._getFormatConfig(e);
                    try {
                        o = this.parseDate(n, i, s) || r
                    } catch (e) {
                        i = t ? "" : i
                    }
                    e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), e.currentDay = i ? o.getDate() : 0, e.currentMonth = i ? o.getMonth() : 0, e.currentYear = i ? o.getFullYear() : 0, this._adjustInstDate(e)
                }
            },
            _getDefaultDate: function(e) {
                return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
            },
            _determineDate: function(t, n, i) {
                var r = function(e) {
                        var t = new Date;
                        return t.setDate(t.getDate() + e), t
                    },
                    o = function(n) {
                        try {
                            return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), n, e.datepicker._getFormatConfig(t))
                        } catch (e) {}
                        for (var i = (n.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, r = i.getFullYear(), o = i.getMonth(), s = i.getDate(), a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = a.exec(n); l;) {
                            switch (l[2] || "d") {
                                case "d":
                                case "D":
                                    s += parseInt(l[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    s += 7 * parseInt(l[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    o += parseInt(l[1], 10), s = Math.min(s, e.datepicker._getDaysInMonth(r, o));
                                    break;
                                case "y":
                                case "Y":
                                    r += parseInt(l[1], 10), s = Math.min(s, e.datepicker._getDaysInMonth(r, o))
                            }
                            l = a.exec(n)
                        }
                        return new Date(r, o, s)
                    },
                    s = null == n || "" === n ? i : "string" == typeof n ? o(n) : "number" == typeof n ? isNaN(n) ? i : r(n) : new Date(n.getTime());
                return s = s && "Invalid Date" === s.toString() ? i : s, s && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
            },
            _daylightSavingAdjust: function(e) {
                return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
            },
            _setDate: function(e, t, n) {
                var i = !t,
                    r = e.selectedMonth,
                    o = e.selectedYear,
                    s = this._restrictMinMax(e, this._determineDate(e, t, new Date));
                e.selectedDay = e.currentDay = s.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = s.getMonth(), e.drawYear = e.selectedYear = e.currentYear = s.getFullYear(), r === e.selectedMonth && o === e.selectedYear || n || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(i ? "" : this._formatDate(e))
            },
            _getDate: function(e) {
                var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
                return t
            },
            _attachHandlers: function(t) {
                var n = this._get(t, "stepMonths"),
                    i = "#" + t.id.replace(/\\\\/g, "\\");
                t.dpDiv.find("[data-handler]").map(function() {
                    var t = {
                        prev: function() {
                            e.datepicker._adjustDate(i, -n, "M")
                        },
                        next: function() {
                            e.datepicker._adjustDate(i, +n, "M")
                        },
                        hide: function() {
                            e.datepicker._hideDatepicker()
                        },
                        today: function() {
                            e.datepicker._gotoToday(i)
                        },
                        selectDay: function() {
                            return e.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return e.datepicker._selectMonthYear(i, this, "M"), !1
                        },
                        selectYear: function() {
                            return e.datepicker._selectMonthYear(i, this, "Y"), !1
                        }
                    };
                    e(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(e) {
                var t, n, i, r, o, s, a, l, u, c, h, d, f, p, m, g, v, y, _, b, w, x, k, S, T, C, D, M, E, A, P, O, I, N, j, R, L, F, H, z = new Date,
                    W = this._daylightSavingAdjust(new Date(z.getFullYear(), z.getMonth(), z.getDate())),
                    $ = this._get(e, "isRTL"),
                    B = this._get(e, "showButtonPanel"),
                    Y = this._get(e, "hideIfNoPrevNext"),
                    U = this._get(e, "navigationAsDateFormat"),
                    q = this._getNumberOfMonths(e),
                    V = this._get(e, "showCurrentAtPos"),
                    Q = this._get(e, "stepMonths"),
                    G = 1 !== q[0] || 1 !== q[1],
                    X = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                    K = this._getMinMaxDate(e, "min"),
                    J = this._getMinMaxDate(e, "max"),
                    Z = e.drawMonth - V,
                    ee = e.drawYear;
                if (Z < 0 && (Z += 12, ee--), J)
                    for (t = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - q[0] * q[1] + 1, J.getDate())), t = K && t < K ? K : t; this._daylightSavingAdjust(new Date(ee, Z, 1)) > t;) Z--, Z < 0 && (Z = 11, ee--);
                for (e.drawMonth = Z, e.drawYear = ee, n = this._get(e, "prevText"), n = U ? this.formatDate(n, this._daylightSavingAdjust(new Date(ee, Z - Q, 1)), this._getFormatConfig(e)) : n, i = this._canAdjustMonth(e, -1, ee, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + ($ ? "e" : "w") + "'>" + n + "</span></a>" : Y ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + ($ ? "e" : "w") + "'>" + n + "</span></a>", r = this._get(e, "nextText"), r = U ? this.formatDate(r, this._daylightSavingAdjust(new Date(ee, Z + Q, 1)), this._getFormatConfig(e)) : r, o = this._canAdjustMonth(e, 1, ee, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + r + "'><span class='ui-icon ui-icon-circle-triangle-" + ($ ? "w" : "e") + "'>" + r + "</span></a>" : Y ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + r + "'><span class='ui-icon ui-icon-circle-triangle-" + ($ ? "w" : "e") + "'>" + r + "</span></a>", s = this._get(e, "currentText"), a = this._get(e, "gotoCurrent") && e.currentDay ? X : W, s = U ? this.formatDate(s, a, this._getFormatConfig(e)) : s, l = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", u = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + ($ ? l : "") + (this._isInRange(e, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + s + "</button>" : "") + ($ ? "" : l) + "</div>" : "", c = parseInt(this._get(e, "firstDay"), 10), c = isNaN(c) ? 0 : c, h = this._get(e, "showWeek"), d = this._get(e, "dayNames"), f = this._get(e, "dayNamesMin"), p = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), _ = this._getDefaultDate(e), b = "", x = 0; x < q[0]; x++) {
                    for (k = "", this.maxRows = 4, S = 0; S < q[1]; S++) {
                        if (T = this._daylightSavingAdjust(new Date(ee, Z, e.selectedDay)), C = " ui-corner-all", D = "", G) {
                            if (D += "<div class='ui-datepicker-group", q[1] > 1) switch (S) {
                                case 0:
                                    D += " ui-datepicker-group-first", C = " ui-corner-" + ($ ? "right" : "left");
                                    break;
                                case q[1] - 1:
                                    D += " ui-datepicker-group-last", C = " ui-corner-" + ($ ? "left" : "right");
                                    break;
                                default:
                                    D += " ui-datepicker-group-middle", C = ""
                            }
                            D += "'>"
                        }
                        for (D += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && 0 === x ? $ ? o : i : "") + (/all|right/.test(C) && 0 === x ? $ ? i : o : "") + this._generateMonthYearHeader(e, Z, ee, K, J, x > 0 || S > 0, p, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", M = h ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", w = 0; w < 7; w++) E = (w + c) % 7, M += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[E] + "'>" + f[E] + "</span></th>";
                        for (D += M + "</tr></thead><tbody>", A = this._getDaysInMonth(ee, Z), ee === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), P = (this._getFirstDayOfMonth(ee, Z) - c + 7) % 7, O = Math.ceil((P + A) / 7), I = G && this.maxRows > O ? this.maxRows : O, this.maxRows = I, N = this._daylightSavingAdjust(new Date(ee, Z, 1 - P)), j = 0; j < I; j++) {
                            for (D += "<tr>", R = h ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(N) + "</td>" : "", w = 0; w < 7; w++) L = g ? g.apply(e.input ? e.input[0] : null, [N]) : [!0, ""], F = N.getMonth() !== Z, H = F && !y || !L[0] || K && N < K || J && N > J, R += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (N.getTime() === T.getTime() && Z === e.selectedMonth && e._keyEvent || _.getTime() === N.getTime() && _.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (H ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !v ? "" : " " + L[1] + (N.getTime() === X.getTime() ? " " + this._currentClass : "") + (N.getTime() === W.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !v || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (H ? "" : " data-handler='selectDay' data-event='click' data-month='" + N.getMonth() + "' data-year='" + N.getFullYear() + "'") + ">" + (F && !v ? "&#xa0;" : H ? "<span class='ui-state-default'>" + N.getDate() + "</span>" : "<a class='ui-state-default" + (N.getTime() === W.getTime() ? " ui-state-highlight" : "") + (N.getTime() === X.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + N.getDate() + "</a>") + "</td>", N.setDate(N.getDate() + 1), N = this._daylightSavingAdjust(N);
                            D += R + "</tr>"
                        }
                        Z++, Z > 11 && (Z = 0, ee++), D += "</tbody></table>" + (G ? "</div>" + (q[0] > 0 && S === q[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += D
                    }
                    b += k
                }
                return b += u, e._keyEvent = !1, b
            },
            _generateMonthYearHeader: function(e, t, n, i, r, o, s, a) {
                var l, u, c, h, d, f, p, m, g = this._get(e, "changeMonth"),
                    v = this._get(e, "changeYear"),
                    y = this._get(e, "showMonthAfterYear"),
                    _ = "<div class='ui-datepicker-title'>",
                    b = "";
                if (o || !g) b += "<span class='ui-datepicker-month'>" + s[t] + "</span>";
                else {
                    for (l = i && i.getFullYear() === n, u = r && r.getFullYear() === n, b += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; c < 12; c++)(!l || c >= i.getMonth()) && (!u || c <= r.getMonth()) && (b += "<option value='" + c + "'" + (c === t ? " selected='selected'" : "") + ">" + a[c] + "</option>");
                    b += "</select>"
                }
                if (y || (_ += b + (!o && g && v ? "" : "&#xa0;")), !e.yearshtml)
                    if (e.yearshtml = "", o || !v) _ += "<span class='ui-datepicker-year'>" + n + "</span>";
                    else {
                        for (h = this._get(e, "yearRange").split(":"), d = (new Date).getFullYear(), f = function(e) {
                                var t = e.match(/c[+\-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? d + parseInt(e, 10) : parseInt(e, 10);
                                return isNaN(t) ? d : t
                            }, p = f(h[0]), m = Math.max(p, f(h[1] || "")), p = i ? Math.max(p, i.getFullYear()) : p, m = r ? Math.min(m, r.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; p <= m; p++) e.yearshtml += "<option value='" + p + "'" + (p === n ? " selected='selected'" : "") + ">" + p + "</option>";
                        e.yearshtml += "</select>", _ += e.yearshtml, e.yearshtml = null
                    }
                return _ += this._get(e, "yearSuffix"), y && (_ += (!o && g && v ? "" : "&#xa0;") + b), _ += "</div>"
            },
            _adjustInstDate: function(e, t, n) {
                var i = e.selectedYear + ("Y" === n ? t : 0),
                    r = e.selectedMonth + ("M" === n ? t : 0),
                    o = Math.min(e.selectedDay, this._getDaysInMonth(i, r)) + ("D" === n ? t : 0),
                    s = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(i, r, o)));
                e.selectedDay = s.getDate(), e.drawMonth = e.selectedMonth = s.getMonth(), e.drawYear = e.selectedYear = s.getFullYear(), "M" !== n && "Y" !== n || this._notifyChange(e)
            },
            _restrictMinMax: function(e, t) {
                var n = this._getMinMaxDate(e, "min"),
                    i = this._getMinMaxDate(e, "max"),
                    r = n && t < n ? n : t;
                return i && r > i ? i : r
            },
            _notifyChange: function(e) {
                var t = this._get(e, "onChangeMonthYear");
                t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
            },
            _getNumberOfMonths: function(e) {
                var t = this._get(e, "numberOfMonths");
                return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
            },
            _getMinMaxDate: function(e, t) {
                return this._determineDate(e, this._get(e, t + "Date"), null)
            },
            _getDaysInMonth: function(e, t) {
                return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
            },
            _getFirstDayOfMonth: function(e, t) {
                return new Date(e, t, 1).getDay()
            },
            _canAdjustMonth: function(e, t, n, i) {
                var r = this._getNumberOfMonths(e),
                    o = this._daylightSavingAdjust(new Date(n, i + (t < 0 ? t : r[0] * r[1]), 1));
                return t < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(e, o)
            },
            _isInRange: function(e, t) {
                var n, i, r = this._getMinMaxDate(e, "min"),
                    o = this._getMinMaxDate(e, "max"),
                    s = null,
                    a = null,
                    l = this._get(e, "yearRange");
                return l && (n = l.split(":"), i = (new Date).getFullYear(), s = parseInt(n[0], 10), a = parseInt(n[1], 10), n[0].match(/[+\-].*/) && (s += i), n[1].match(/[+\-].*/) && (a += i)), (!r || t.getTime() >= r.getTime()) && (!o || t.getTime() <= o.getTime()) && (!s || t.getFullYear() >= s) && (!a || t.getFullYear() <= a)
            },
            _getFormatConfig: function(e) {
                var t = this._get(e, "shortYearCutoff");
                return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                    shortYearCutoff: t,
                    dayNamesShort: this._get(e, "dayNamesShort"),
                    dayNames: this._get(e, "dayNames"),
                    monthNamesShort: this._get(e, "monthNamesShort"),
                    monthNames: this._get(e, "monthNames")
                }
            },
            _formatDate: function(e, t, n, i) {
                t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
                var r = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(i, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
                return this.formatDate(this._get(e, "dateFormat"), r, this._getFormatConfig(e))
            }
        }), e.fn.datepicker = function(t) {
            if (!this.length) return this;
            e.datepicker.initialized || (e(document).on("mousedown", e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
            var n = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n)) : this.each(function() {
                "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(n)) : e.datepicker._attachDatepicker(this, t)
            }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(n))
        }, e.datepicker = new n, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.12.1", e.datepicker
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "../keycode", "../position", "../safe-active-element", "../unique-id", "../version", "../widget"], e) : e(jQuery)
    }(function(e) {
        return e.widget("ui.menu", {
            version: "1.12.1",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-caret-1-e"
                },
                items: "> *",
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
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                    role: this.options.role,
                    tabIndex: 0
                }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                    "mousedown .ui-menu-item": function(e) {
                        e.preventDefault()
                    },
                    "click .ui-menu-item": function(t) {
                        var n = e(t.target),
                            i = e(e.ui.safeActiveElement(this.document[0]));
                        !this.mouseHandled && n.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), n.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && i.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(t) {
                        if (!this.previousFilter) {
                            var n = e(t.target).closest(".ui-menu-item"),
                                i = e(t.currentTarget);
                            n[0] === i[0] && (this._removeClass(i.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(t, i))
                        }
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(e, t) {
                        var n = this.active || this.element.find(this.options.items).eq(0);
                        t || this.focus(e, n)
                    },
                    blur: function(t) {
                        this._delay(function() {
                            var n = !e.contains(this.element[0], e.ui.safeActiveElement(this.document[0]));
                            n && this.collapseAll(t)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function(e) {
                        this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                var t = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
                    n = t.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), n.children().each(function() {
                    var t = e(this);
                    t.data("ui-menu-submenu-caret") && t.remove()
                })
            },
            _keydown: function(t) {
                var n, i, r, o, s = !0;
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
                        s = !1, i = this.previousFilter || "", o = !1, r = t.keyCode >= 96 && t.keyCode <= 105 ? (t.keyCode - 96).toString() : String.fromCharCode(t.keyCode), clearTimeout(this.filterTimer), r === i ? o = !0 : r = i + r, n = this._filterMenuItems(r), n = o && n.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : n, n.length || (r = String.fromCharCode(t.keyCode), n = this._filterMenuItems(r)), n.length ? (this.focus(t, n), this.previousFilter = r, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter
                }
                s && t.preventDefault()
            },
            _activate: function(e) {
                this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
            },
            refresh: function() {
                var t, n, i, r, o, s = this,
                    a = this.options.icons.submenu,
                    l = this.element.find(this.options.menus);
                this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), i = l.filter(":not(.ui-menu)").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var t = e(this),
                        n = t.prev(),
                        i = e("<span>").data("ui-menu-submenu-caret", !0);
                    s._addClass(i, "ui-menu-icon", "ui-icon " + a), n.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", n.attr("id"))
                }), this._addClass(i, "ui-menu", "ui-widget ui-widget-content ui-front"), t = l.add(this.element), n = t.find(this.options.items), n.not(".ui-menu-item").each(function() {
                    var t = e(this);
                    s._isDivider(t) && s._addClass(t, "ui-menu-divider", "ui-widget-content")
                }), r = n.not(".ui-menu-item, .ui-menu-divider"), o = r.children().not(".ui-menu").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), this._addClass(r, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), n.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function(e, t) {
                if ("icons" === e) {
                    var n = this.element.find(".ui-menu-icon");
                    this._removeClass(n, null, this.options.icons.submenu)._addClass(n, null, t.submenu)
                }
                this._super(e, t)
            },
            _setOptionDisabled: function(e) {
                this._super(e), this.element.attr("aria-disabled", String(e)), this._toggleClass(null, "ui-state-disabled", !!e)
            },
            focus: function(e, t) {
                var n, i, r;
                this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), i = this.active.children(".ui-menu-item-wrapper"), this._addClass(i, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", i.attr("id")), r = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(r, null, "ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay), n = t.children(".ui-menu"), n.length && e && /^mouse/.test(e.type) && this._startOpening(n), this.activeMenu = t.parent(), this._trigger("focus", e, {
                    item: t
                })
            },
            _scrollIntoView: function(t) {
                var n, i, r, o, s, a;
                this._hasScroll() && (n = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, i = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, r = t.offset().top - this.activeMenu.offset().top - n - i, o = this.activeMenu.scrollTop(), s = this.activeMenu.height(), a = t.outerHeight(), r < 0 ? this.activeMenu.scrollTop(o + r) : r + a > s && this.activeMenu.scrollTop(o + r - s + a))
            },
            blur: function(e, t) {
                t || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", e, {
                    item: this.active
                }), this.active = null)
            },
            _startOpening: function(e) {
                clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() {
                    this._close(), this._open(e)
                }, this.delay))
            },
            _open: function(t) {
                var n = e.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n)
            },
            collapseAll: function(t, n) {
                clearTimeout(this.timer), this.timer = this._delay(function() {
                    var i = n ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                    i.length || (i = this.element), this._close(i), this.blur(t), this._removeClass(i.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = i
                }, this.delay)
            },
            _close: function(e) {
                e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
            },
            _closeOnDocumentClick: function(t) {
                return !e(t.target).closest(".ui-menu").length
            },
            _isDivider: function(e) {
                return !/[^\-\u2014\u2013\s]/.test(e.text())
            },
            collapse: function(e) {
                var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                t && t.length && (this._close(), this.focus(e, t))
            },
            expand: function(e) {
                var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
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
                var i;
                this.active && (i = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), i && i.length && this.active || (i = this.activeMenu.find(this.options.items)[t]()), this.focus(n, i)
            },
            nextPage: function(t) {
                var n, i, r;
                return this.active ? void(this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, r = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    return n = e(this), n.offset().top - i - r < 0
                }), this.focus(t, n)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(t)
            },
            previousPage: function(t) {
                var n, i, r;
                return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, r = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    return n = e(this), n.offset().top - i + r > 0
                }), this.focus(t, n)) : this.focus(t, this.activeMenu.find(this.options.items).first()))) : void this.next(t)
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
            },
            _filterMenuItems: function(t) {
                var n = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                    i = new RegExp("^" + n, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                    return i.test(e.trim(e(this).children(".ui-menu-item-wrapper").text()))
                })
            }
        })
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery", "./mouse", "../keycode", "../version", "../widget"], e) : e(jQuery)
    }(function(e) {
        return e.widget("ui.slider", e.ui.mouse, {
            version: "1.12.1",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                classes: {
                    "ui-slider": "ui-corner-all",
                    "ui-slider-handle": "ui-corner-all",
                    "ui-slider-range": "ui-corner-all ui-widget-header"
                },
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
            numPages: 5,
            _create: function() {
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
            },
            _refresh: function() {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
            },
            _createHandles: function() {
                var t, n, i = this.options,
                    r = this.element.find(".ui-slider-handle"),
                    o = "<span tabindex='0'></span>",
                    s = [];
                for (n = i.values && i.values.length || 1, r.length > n && (r.slice(n).remove(), r = r.slice(0, n)), t = r.length; t < n; t++) s.push(o);
                this.handles = r.add(e(s.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(t) {
                    e(this).data("ui-slider-handle-index", t).attr("tabIndex", 0)
                })
            },
            _createRange: function() {
                var t = this.options;
                t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                    left: "",
                    bottom: ""
                })) : (this.range = e("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), "min" !== t.range && "max" !== t.range || this._addClass(this.range, "ui-slider-range-" + t.range)) : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function() {
                this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
            },
            _destroy: function() {
                this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
            },
            _mouseCapture: function(t) {
                var n, i, r, o, s, a, l, u, c = this,
                    h = this.options;
                return !h.disabled && (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), n = {
                    x: t.pageX,
                    y: t.pageY
                }, i = this._normValueFromMouse(n), r = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                    var n = Math.abs(i - c.values(t));
                    (r > n || r === n && (t === c._lastChangedValue || c.values(t) === h.min)) && (r = n, o = e(this), s = t)
                }), a = this._start(t, s), a !== !1 && (this._mouseSliding = !0, this._handleIndex = s, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), l = o.offset(), u = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = u ? {
                    left: 0,
                    top: 0
                } : {
                    left: t.pageX - l.left - o.width() / 2,
                    top: t.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(t, s, i), this._animateOff = !0, !0))
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
                return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(e) {
                var t, n, i, r, o;
                return "horizontal" === this.orientation ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), i = n / t, i > 1 && (i = 1), i < 0 && (i = 0), "vertical" === this.orientation && (i = 1 - i), r = this._valueMax() - this._valueMin(), o = this._valueMin() + i * r, this._trimAlignValue(o)
            },
            _uiHash: function(e, t, n) {
                var i = {
                    handle: this.handles[e],
                    handleIndex: e,
                    value: void 0 !== t ? t : this.value()
                };
                return this._hasMultipleValues() && (i.value = void 0 !== t ? t : this.values(e), i.values = n || this.values()), i
            },
            _hasMultipleValues: function() {
                return this.options.values && this.options.values.length
            },
            _start: function(e, t) {
                return this._trigger("start", e, this._uiHash(t))
            },
            _slide: function(e, t, n) {
                var i, r, o = this.value(),
                    s = this.values();
                this._hasMultipleValues() && (r = this.values(t ? 0 : 1), o = this.values(t), 2 === this.options.values.length && this.options.range === !0 && (n = 0 === t ? Math.min(r, n) : Math.max(r, n)), s[t] = n), n !== o && (i = this._trigger("slide", e, this._uiHash(t, n, s)), i !== !1 && (this._hasMultipleValues() ? this.values(t, n) : this.value(n)))
            },
            _stop: function(e, t) {
                this._trigger("stop", e, this._uiHash(t))
            },
            _change: function(e, t) {
                this._keySliding || this._mouseSliding || (this._lastChangedValue = t, this._trigger("change", e, this._uiHash(t)))
            },
            value: function(e) {
                return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), void this._change(null, 0)) : this._value()
            },
            values: function(t, n) {
                var i, r, o;
                if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), void this._change(null, t);
                if (!arguments.length) return this._values();
                if (!e.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(t) : this.value();
                for (i = this.options.values, r = arguments[0], o = 0; o < i.length; o += 1) i[o] = this._trimAlignValue(r[o]), this._change(null, o);
                this._refreshValue()
            },
            _setOption: function(t, n) {
                var i, r = 0;
                switch ("range" === t && this.options.range === !0 && ("min" === n ? (this.options.value = this._values(0), this.options.values = null) : "max" === n && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (r = this.options.values.length), this._super(t, n), t) {
                    case "orientation":
                        this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(n), this.handles.css("horizontal" === n ? "bottom" : "left", "");
                        break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), i = r - 1; i >= 0; i--) this._change(null, i);
                        this._animateOff = !1;
                        break;
                    case "step":
                    case "min":
                    case "max":
                        this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                        break;
                    case "range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1
                }
            },
            _setOptionDisabled: function(e) {
                this._super(e), this._toggleClass(null, "ui-state-disabled", !!e)
            },
            _value: function() {
                var e = this.options.value;
                return e = this._trimAlignValue(e)
            },
            _values: function(e) {
                var t, n, i;
                if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
                if (this._hasMultipleValues()) {
                    for (n = this.options.values.slice(), i = 0; i < n.length; i += 1) n[i] = this._trimAlignValue(n[i]);
                    return n
                }
                return []
            },
            _trimAlignValue: function(e) {
                if (e <= this._valueMin()) return this._valueMin();
                if (e >= this._valueMax()) return this._valueMax();
                var t = this.options.step > 0 ? this.options.step : 1,
                    n = (e - this._valueMin()) % t,
                    i = e - n;
                return 2 * Math.abs(n) >= t && (i += n > 0 ? t : -t), parseFloat(i.toFixed(5))
            },
            _calculateNewMax: function() {
                var e = this.options.max,
                    t = this._valueMin(),
                    n = this.options.step,
                    i = Math.round((e - t) / n) * n;
                e = i + t, e > this.options.max && (e -= n), this.max = parseFloat(e.toFixed(this._precision()))
            },
            _precision: function() {
                var e = this._precisionOf(this.options.step);
                return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
            },
            _precisionOf: function(e) {
                var t = e.toString(),
                    n = t.indexOf(".");
                return n === -1 ? 0 : t.length - n - 1
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.max
            },
            _refreshRange: function(e) {
                "vertical" === e && this.range.css({
                    width: "",
                    left: ""
                }), "horizontal" === e && this.range.css({
                    height: "",
                    bottom: ""
                })
            },
            _refreshValue: function() {
                var t, n, i, r, o, s = this.options.range,
                    a = this.options,
                    l = this,
                    u = !this._animateOff && a.animate,
                    c = {};
                this._hasMultipleValues() ? this.handles.each(function(i) {
                    n = (l.values(i) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = n + "%", e(this).stop(1, 1)[u ? "animate" : "css"](c, a.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === i && l.range.stop(1, 1)[u ? "animate" : "css"]({
                        left: n + "%"
                    }, a.animate), 1 === i && l.range[u ? "animate" : "css"]({
                        width: n - t + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    })) : (0 === i && l.range.stop(1, 1)[u ? "animate" : "css"]({
                        bottom: n + "%"
                    }, a.animate), 1 === i && l.range[u ? "animate" : "css"]({
                        height: n - t + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    }))), t = n
                }) : (i = this.value(), r = this._valueMin(), o = this._valueMax(), n = o !== r ? (i - r) / (o - r) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](c, a.animate), "min" === s && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                    width: n + "%"
                }, a.animate), "max" === s && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                    width: 100 - n + "%"
                }, a.animate), "min" === s && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                    height: n + "%"
                }, a.animate), "max" === s && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                    height: 100 - n + "%"
                }, a.animate))
            },
            _handleEvents: {
                keydown: function(t) {
                    var n, i, r, o, s = e(t.target).data("ui-slider-handle-index");
                    switch (t.keyCode) {
                        case e.ui.keyCode.HOME:
                        case e.ui.keyCode.END:
                        case e.ui.keyCode.PAGE_UP:
                        case e.ui.keyCode.PAGE_DOWN:
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(e(t.target), null, "ui-state-active"), n = this._start(t, s), n === !1)) return
                    }
                    switch (o = this.options.step, i = r = this._hasMultipleValues() ? this.values(s) : this.value(), t.keyCode) {
                        case e.ui.keyCode.HOME:
                            r = this._valueMin();
                            break;
                        case e.ui.keyCode.END:
                            r = this._valueMax();
                            break;
                        case e.ui.keyCode.PAGE_UP:
                            r = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case e.ui.keyCode.PAGE_DOWN:
                            r = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case e.ui.keyCode.UP:
                        case e.ui.keyCode.RIGHT:
                            if (i === this._valueMax()) return;
                            r = this._trimAlignValue(i + o);
                            break;
                        case e.ui.keyCode.DOWN:
                        case e.ui.keyCode.LEFT:
                            if (i === this._valueMin()) return;
                            r = this._trimAlignValue(i - o)
                    }
                    this._slide(t, s, r)
                },
                keyup: function(t) {
                    var n = e(t.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(t, n), this._change(t, n), this._removeClass(e(t.target), null, "ui-state-active"))
                }
            }
        })
    }),
    function(e, t, n) {
        "$:nomunge";

        function i(i, r) {
            function o(t) {
                e(s).each(function() {
                    var n = e(this);
                    this === t.target || n.has(t.target).length || n.triggerHandler(r, [t.target])
                })
            }
            r = r || i + n;
            var s = e(),
                a = i + "." + r + "-special-event";
            e.event.special[r] = {
                setup: function() {
                    s = s.add(this), 1 === s.length && e(t).bind(a, o)
                },
                teardown: function() {
                    s = s.not(this), 0 === s.length && e(t).unbind(a)
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
            i(e)
        }), i("focusin", "focus" + n), i("focusout", "blur" + n), e.addOutsideEvent = i
    }(jQuery, document, "outside"),
    function(e) {
        function t(e, t) {
            return "function" == typeof e ? e.call(t) : e
        }

        function n(e) {
            for (; e = e.parentNode;)
                if (e == document) return !0;
            return !1
        }

        function i(t, n) {
            this.$element = e(t), this.options = n, this.enabled = !0, this.fixTitle()
        }
        i.prototype = {
            show: function() {
                var n = this.getTitle();
                if (n && this.enabled) {
                    var i = this.tip();
                    i.find(".tipsy-inner")[this.options.html ? "html" : "text"](n), i[0].className = "tipsy", i.remove().css({
                        top: 0,
                        left: 0,
                        visibility: "hidden",
                        display: "block"
                    }).prependTo(document.body);
                    var r, o = e.extend({}, this.$element.offset(), {
                            width: this.$element[0].offsetWidth,
                            height: this.$element[0].offsetHeight
                        }),
                        s = i[0].offsetWidth,
                        a = i[0].offsetHeight,
                        l = t(this.options.gravity, this.$element[0]);
                    switch (l.charAt(0)) {
                        case "n":
                            r = {
                                top: o.top + o.height + this.options.offset,
                                left: o.left + o.width / 2 - s / 2
                            };
                            break;
                        case "s":
                            r = {
                                top: o.top - a - this.options.offset,
                                left: o.left + o.width / 2 - s / 2
                            };
                            break;
                        case "e":
                            r = {
                                top: o.top + o.height / 2 - a / 2,
                                left: o.left - s - this.options.offset
                            };
                            break;
                        case "w":
                            r = {
                                top: o.top + o.height / 2 - a / 2,
                                left: o.left + o.width + this.options.offset
                            }
                    }
                    2 == l.length && ("w" == l.charAt(1) ? r.left = o.left + o.width / 2 - 15 : r.left = o.left + o.width / 2 - s + 15), i.css(r).addClass("tipsy-" + l), i.find(".tipsy-arrow")[0].className = "tipsy-arrow tipsy-arrow-" + l.charAt(0), this.options.className && i.addClass(t(this.options.className, this.$element[0])), this.options.fade ? i.stop().css({
                        opacity: 0,
                        display: "block",
                        visibility: "visible"
                    }).animate({
                        opacity: this.options.opacity
                    }) : i.css({
                        visibility: "visible",
                        opacity: this.options.opacity
                    }), this.options.clickClose && i.bind("click", {
                        element: this.$element,
                        callback: this.options.closeCallback
                    }, function(e) {
                        e.data.element.tipsy("hide"), e.data.callback && e.data.callback()
                    }), this.$element.on("remove", function() {
                        i.remove()
                    }), i.data("tipsy-pointee", this.$element)
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
                (e.attr("title") || "string" != typeof e.attr("original-title")) && e.attr("original-title", e.attr("title") || "").removeAttr("title")
            },
            getTitle: function() {
                var e, t = this.$element,
                    n = this.options;
                this.fixTitle();
                var e, n = this.options;
                return "string" == typeof n.title ? e = t.attr("title" == n.title ? "original-title" : n.title) : "function" == typeof n.title && (e = n.title.call(t[0])), e = ("" + e).replace(/(^\s*|\s*$)/, ""), e || n.fallback
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
            function n(n) {
                var r = e.data(n, "tipsy");
                return r || (r = new i(n, e.fn.tipsy.elementOptions(n, t)), e.data(n, "tipsy", r)), r
            }

            function r() {
                var e = n(this);
                e.hoverState = "in", 0 == t.delayIn ? e.show() : (e.fixTitle(), setTimeout(function() {
                    "in" == e.hoverState && e.show()
                }, t.delayIn))
            }

            function o() {
                var e = n(this);
                e.hoverState = "out", 0 == t.delayOut ? e.hide() : setTimeout(function() {
                    "out" == e.hoverState && e.hide()
                }, t.delayOut)
            }
            if (t === !0) return this.data("tipsy");
            if ("string" == typeof t) {
                var s = this.data("tipsy");
                return s && s[t](), this
            }
            if (t = e.extend({}, e.fn.tipsy.defaults, t), t.live || this.each(function() {
                    n(this)
                }), "manual" != t.trigger) {
                var a = "hover" == t.trigger ? "mouseenter" : "focus",
                    l = "hover" == t.trigger ? "mouseleave" : "blur",
                    u = this;
                if (t.live) {
                    var c = e("body");
                    c.on(a, u.selector, r), c.on(l, u.selector, o), u._teardown = function() {
                        c.off(a, u.selector, r), c.off(l, u.selector, o)
                    }
                } else u.bind(a, r), u.bind(l, o), u._teardown = function() {
                    u.unbind(a, r), u.unbind(l, o)
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
                t && n(t) || e(this).remove()
            })
        }, e.fn.tipsy.elementOptions = function(t, n) {
            return e.metadata ? e.extend({}, n, e(t).metadata()) : n
        }, e.fn.tipsy.autoNS = function() {
            return e(this).offset().top > e(document).scrollTop() + e(window).height() / 2 ? "s" : "n"
        }, e.fn.tipsy.autoWE = function() {
            return e(this).offset().left > e(document).scrollLeft() + e(window).width() / 2 ? "e" : "w"
        }, e.fn.tipsy.autoBounds = function(t, n) {
            return function() {
                var i = {
                        ns: n[0],
                        ew: n.length > 1 && n[1]
                    },
                    r = e(document).scrollTop() + t,
                    o = e(document).scrollLeft() + t,
                    s = e(this);
                return s.offset().top < r && (i.ns = "n"), s.offset().left < o && (i.ew = "w"), e(window).width() + e(document).scrollLeft() - s.offset().left < t && (i.ew = "e"), e(window).height() + e(document).scrollTop() - s.offset().top < t && (i.ns = "s"), i.ns + (i.ew ? i.ew : "")
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
                    function n(n) {
                        ("" == e(n).val() || t(n)) && (e(n).hide(), e("input[rel=" + e(n).attr("id") + "]").show())
                    }

                    function i(n, i) {
                        ("" == e(n).val() || i && t(n)) && (e(n).val(e(n).attr("placeholder")), e(n).addClass("placeholder"))
                    }
                    if ("password" == e(this).attr("type")) {
                        var r = e("<input type='text'>");
                        r.attr("rel", e(this).attr("id")), r.attr("value", e(this).attr("placeholder")), e(this).parent().append(r), r.hide(), r.focus(function() {
                            e(this).hide(), e("input#" + e(this).attr("rel")).show().focus()
                        }), e(this).blur(function() {
                            n(this, !1)
                        }), n(this)
                    } else e(this).focus(function() {
                        e(this).val() == e(this).attr("placeholder") && (e(this).val(""), e(this).removeClass("placeholder"))
                    }), e(this).blur(function() {
                        i(e(this), !1)
                    }), i(this, !0)
                }), e(this).submit(function() {
                    e(this).find(":input").each(function() {
                        e(this).val() == e(this).attr("placeholder") && e(this).val("")
                    })
                })
            })
        }
    }(jQuery),
    function() {
        "use strict";
        var e, t = function(e, t) {
                var n = e.style[t];
                if (e.currentStyle ? n = e.currentStyle[t] : window.getComputedStyle && (n = document.defaultView.getComputedStyle(e, null).getPropertyValue(t)), "auto" == n && "cursor" == t)
                    for (var i = ["a"], r = 0; r < i.length; r++)
                        if (e.tagName.toLowerCase() == i[r]) return "pointer";
                return n
            },
            n = function(e) {
                if (d.prototype._singleton) {
                    e || (e = window.event);
                    var t;
                    this !== window ? t = this : e.target ? t = e.target : e.srcElement && (t = e.srcElement), d.prototype._singleton.setCurrent(t)
                }
            },
            i = function(e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
            },
            r = function(e, t, n) {
                e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
            },
            o = function(e, t) {
                if (e.addClass) return e.addClass(t), e;
                if (t && "string" == typeof t) {
                    var n = (t || "").split(/\s+/);
                    if (1 === e.nodeType)
                        if (e.className) {
                            for (var i = " " + e.className + " ", r = e.className, o = 0, s = n.length; o < s; o++) i.indexOf(" " + n[o] + " ") < 0 && (r += " " + n[o]);
                            e.className = r.replace(/^\s+|\s+$/g, "")
                        } else e.className = t
                }
                return e
            },
            s = function(e, t) {
                if (e.removeClass) return e.removeClass(t), e;
                if (t && "string" == typeof t || void 0 === t) {
                    var n = (t || "").split(/\s+/);
                    if (1 === e.nodeType && e.className)
                        if (t) {
                            for (var i = (" " + e.className + " ").replace(/[\n\t]/g, " "), r = 0, o = n.length; r < o; r++) i = i.replace(" " + n[r] + " ", " ");
                            e.className = i.replace(/^\s+|\s+$/g, "")
                        } else e.className = ""
                }
                return e
            },
            a = function(e) {
                var n = {
                        left: 0,
                        top: 0,
                        width: e.width || e.offsetWidth || 0,
                        height: e.height || e.offsetHeight || 0,
                        zIndex: 9999
                    },
                    i = t(e, "zIndex");
                for (i && "auto" != i && (n.zIndex = parseInt(i, 10)); e;) {
                    var r = parseInt(t(e, "borderLeftWidth"), 10),
                        o = parseInt(t(e, "borderTopWidth"), 10);
                    n.left += isNaN(e.offsetLeft) ? 0 : e.offsetLeft, n.left += isNaN(r) ? 0 : r, n.top += isNaN(e.offsetTop) ? 0 : e.offsetTop, n.top += isNaN(o) ? 0 : o, e = e.offsetParent
                }
                return n
            },
            l = function(e) {
                return (e.indexOf("?") >= 0 ? "&" : "?") + "nocache=" + (new Date).getTime()
            },
            u = function(e) {
                var t = [];
                return e.trustedDomains && ("string" == typeof e.trustedDomains ? t.push("trustedDomain=" + e.trustedDomains) : t.push("trustedDomain=" + e.trustedDomains.join(","))), t.join("&")
            },
            c = function(e, t) {
                if (t.indexOf) return t.indexOf(e);
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e) return n;
                return -1
            },
            h = function(e) {
                if ("string" == typeof e) throw new TypeError("ZeroClipboard doesn't accept query strings.");
                return e.length ? e : [e]
            },
            d = function(e, t) {
                if (e && (d.prototype._singleton || this).glue(e), d.prototype._singleton) return d.prototype._singleton;
                d.prototype._singleton = this, this.options = {};
                for (var n in p) this.options[n] = p[n];
                for (var i in t) this.options[i] = t[i];
                this.handlers = {}, d.detectFlashSupport() && m()
            },
            f = [];
        d.prototype.setCurrent = function(n) {
            e = n, this.reposition(), n.getAttribute("title") && this.setTitle(n.getAttribute("title")), this.setHandCursor("pointer" == t(n, "cursor"))
        }, d.prototype.setText = function(e) {
            e && "" !== e && (this.options.text = e, this.ready() && this.flashBridge.setText(e))
        }, d.prototype.setTitle = function(e) {
            e && "" !== e && this.htmlBridge.setAttribute("title", e)
        }, d.prototype.setSize = function(e, t) {
            this.ready() && this.flashBridge.setSize(e, t)
        }, d.prototype.setHandCursor = function(e) {
            this.ready() && this.flashBridge.setHandCursor(e)
        }, d.version = "1.1.7";
        var p = {
            moviePath: "ZeroClipboard.swf",
            trustedDomains: null,
            text: null,
            hoverClass: "zeroclipboard-is-hover",
            activeClass: "zeroclipboard-is-active",
            allowScriptAccess: "sameDomain"
        };
        d.setDefaults = function(e) {
            for (var t in e) p[t] = e[t]
        }, d.destroy = function() {
            d.prototype._singleton.unglue(f);
            var e = d.prototype._singleton.htmlBridge;
            e.parentNode.removeChild(e), delete d.prototype._singleton
        }, d.detectFlashSupport = function() {
            var e = !1;
            try {
                new ActiveXObject("ShockwaveFlash.ShockwaveFlash") && (e = !0)
            } catch (t) {
                navigator.mimeTypes["application/x-shockwave-flash"] && (e = !0)
            }
            return e
        };
        var m = function() {
            var e = d.prototype._singleton,
                t = document.getElementById("global-zeroclipboard-html-bridge");
            if (!t) {
                var n = '      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">         <param name="movie" value="' + e.options.moviePath + l(e.options.moviePath) + '"/>         <param name="allowScriptAccess" value="' + e.options.allowScriptAccess + '"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="' + u(e.options) + '"/>         <embed src="' + e.options.moviePath + l(e.options.moviePath) + '"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="100%" height="100%"           name="global-zeroclipboard-flash-bridge"           allowScriptAccess="always"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="' + u(e.options) + '"           scale="exactfit">         </embed>       </object>';
                t = document.createElement("div"), t.id = "global-zeroclipboard-html-bridge", t.setAttribute("class", "global-zeroclipboard-container"), t.setAttribute("data-clipboard-ready", !1), t.style.position = "absolute", t.style.left = "-9999px", t.style.top = "-9999px", t.style.width = "15px", t.style.height = "15px", t.style.zIndex = "9999", t.innerHTML = n, document.body.appendChild(t)
            }
            e.htmlBridge = t, e.flashBridge = document["global-zeroclipboard-flash-bridge"] || t.children[0].lastElementChild
        };
        d.prototype.resetBridge = function() {
            this.htmlBridge.style.left = "-9999px", this.htmlBridge.style.top = "-9999px", this.htmlBridge.removeAttribute("title"), this.htmlBridge.removeAttribute("data-clipboard-text"), s(e, this.options.activeClass), e = null, this.options.text = null
        }, d.prototype.ready = function() {
            var e = this.htmlBridge.getAttribute("data-clipboard-ready");
            return "true" === e || e === !0;
        }, d.prototype.reposition = function() {
            if (!e) return !1;
            var t = a(e);
            this.htmlBridge.style.top = t.top + "px", this.htmlBridge.style.left = t.left + "px", this.htmlBridge.style.width = t.width + "px", this.htmlBridge.style.height = t.height + "px", this.htmlBridge.style.zIndex = t.zIndex + 1, this.setSize(t.width, t.height)
        }, d.dispatch = function(e, t) {
            d.prototype._singleton.receiveEvent(e, t)
        }, d.prototype.on = function(e, t) {
            for (var n = e.toString().split(/\s/g), i = 0; i < n.length; i++) e = n[i].toLowerCase().replace(/^on/, ""), this.handlers[e] || (this.handlers[e] = t);
            this.handlers.noflash && !d.detectFlashSupport() && this.receiveEvent("onNoFlash", null)
        }, d.prototype.addEventListener = d.prototype.on, d.prototype.off = function(e, t) {
            for (var n = e.toString().split(/\s/g), i = 0; i < n.length; i++) {
                e = n[i].toLowerCase().replace(/^on/, "");
                for (var r in this.handlers) r === e && this.handlers[r] === t && delete this.handlers[r]
            }
        }, d.prototype.removeEventListener = d.prototype.off, d.prototype.receiveEvent = function(t, n) {
            t = t.toString().toLowerCase().replace(/^on/, "");
            var i = e;
            switch (t) {
                case "load":
                    if (n && parseFloat(n.flashVersion.replace(",", ".").replace(/[^0-9\.]/gi, "")) < 10) return void this.receiveEvent("onWrongFlash", {
                        flashVersion: n.flashVersion
                    });
                    this.htmlBridge.setAttribute("data-clipboard-ready", !0);
                    break;
                case "mouseover":
                    o(i, this.options.hoverClass);
                    break;
                case "mouseout":
                    s(i, this.options.hoverClass), this.resetBridge();
                    break;
                case "mousedown":
                    o(i, this.options.activeClass);
                    break;
                case "mouseup":
                    s(i, this.options.activeClass);
                    break;
                case "datarequested":
                    var r = i.getAttribute("data-clipboard-target"),
                        a = r ? document.getElementById(r) : null;
                    if (a) {
                        var l = a.value || a.textContent || a.innerText;
                        l && this.setText(l)
                    } else {
                        var u = i.getAttribute("data-clipboard-text");
                        u && this.setText(u)
                    }
                    break;
                case "complete":
                    this.options.text = null
            }
            if (this.handlers[t]) {
                var c = this.handlers[t];
                "function" == typeof c ? c.call(i, this, n) : "string" == typeof c && window[c].call(i, this, n)
            }
        }, d.prototype.glue = function(e) {
            e = h(e);
            for (var t = 0; t < e.length; t++) c(e[t], f) == -1 && (f.push(e[t]), i(e[t], "mouseover", n))
        }, d.prototype.unglue = function(e) {
            e = h(e);
            for (var t = 0; t < e.length; t++) {
                r(e[t], "mouseover", n);
                var i = c(e[t], f);
                i != -1 && f.splice(i, 1)
            }
        }, "undefined" != typeof module ? module.exports = d : "function" == typeof define && define.amd ? define(function() {
            return d
        }) : window.ZeroClipboard = d
    }(),
    function(e, t, n) {
        function i(e) {
            return e = e || location.href, "#" + e.replace(/^[^#]*#?(.*)$/, "$1")
        }
        var r, o = "hashchange",
            s = document,
            a = e.event.special,
            l = s.documentMode,
            u = "on" + o in t && (l === n || l > 7);
        e.fn[o] = function(e) {
            return e ? this.bind(o, e) : this.trigger(o)
        }, e.fn[o].delay = 50, a[o] = e.extend(a[o], {
            setup: function() {
                return !u && void e(r.start)
            },
            teardown: function() {
                return !u && void e(r.stop)
            }
        }), r = function() {
            function r() {
                var n = i(),
                    s = f(c);
                n !== c ? (d(c = n, s), e(t).trigger(o)) : s !== c && (location.href = location.href.replace(/#.*/, "") + s), a = setTimeout(r, e.fn[o].delay)
            }
            var a, l = {},
                c = i(),
                h = function(e) {
                    return e
                },
                d = h,
                f = h;
            return l.start = function() {
                a || r()
            }, l.stop = function() {
                a && clearTimeout(a), a = n
            }, e.browser.msie && !u && function() {
                var t, n;
                l.start = function() {
                    t || (n = e.fn[o].src, n = n && n + i(), t = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                        n || d(i()), r()
                    }).attr("src", n || "javascript:0").insertAfter("body")[0].contentWindow, s.onpropertychange = function() {
                        try {
                            "title" === event.propertyName && (t.document.title = s.title)
                        } catch (e) {}
                    })
                }, l.stop = h, f = function() {
                    return i(t.location.href)
                }, d = function(n, i) {
                    var r = t.document,
                        a = e.fn[o].domain;
                    n !== i && (r.title = s.title, r.open(), a && r.write('<script>document.domain="' + a + '"</script>'), r.close(), t.location.hash = n)
                }
            }(), l
        }()
    }(jQuery, this),
    function(e, t, n) {
        t.fn.imagesLoaded = function(e) {
            function n() {
                e.call(r, o)
            }

            function i(e) {
                var r = e.target;
                r.src !== a && t.inArray(r, l) === -1 && (l.push(r), --s <= 0 && (setTimeout(n), o.unbind(".imagesLoaded", i)))
            }
            var r = this,
                o = r.find("img").add(r.filter("img")),
                s = o.length,
                a = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
                l = [];
            return s || n(), o.bind("load.imagesLoaded error.imagesLoaded", i).each(function() {
                var e = this.src;
                this.src = a, this.src = e
            }), r
        };
        var i = function(t) {
            e.console && e.console.error(t)
        };
        t.fn.masonry = function(e) {
            if ("string" == typeof e) {
                var n = Array.prototype.slice.call(arguments, 1);
                this.each(function() {
                    var r = t.data(this, "masonry");
                    return r ? t.isFunction(r[e]) && "_" !== e.charAt(0) ? void r[e].apply(r, n) : void i("no such method '" + e + "' for masonry instance") : void i("cannot call methods on masonry prior to initialization; attempted to call method '" + e + "'")
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
        var i, r = t.event;
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
                }, "execAsap" === t ? 0 : 100)
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
                var i = this.element[0].style;
                this.originalStyle = {
                    height: i.height || ""
                };
                var r = this.options.containerStyle;
                for (var o in r) this.originalStyle[o] = i[o] || "";
                this.element.css(r), this.horizontalDirection = this.options.isRTL ? "right" : "left", this.offset = {
                    x: parseInt(this.element.css("padding-" + this.horizontalDirection), 10),
                    y: parseInt(this.element.css("padding-top"), 10)
                }, this.isFluid = this.options.columnWidth && "function" == typeof this.options.columnWidth;
                var s = this;
                setTimeout(function() {
                    s.element.addClass("masonry")
                }, 0), this.options.isResizable && t(e).bind("smartresize.masonry", function() {
                    s.resize()
                }), this.reloadItems()
            },
            _init: function(e) {
                this._getColumns(), this._reLayout(e)
            },
            option: function(e, n) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            },
            layout: function(e, t) {
                for (var n = 0, i = e.length; n < i; n++) this._placeBrick(e[n]);
                var r = {};
                if (r.height = Math.max.apply(Math, this.colYs), this.options.isFitWidth) {
                    var o = 0;
                    for (n = this.cols; --n && 0 === this.colYs[n];) o++;
                    r.width = (this.cols - o) * this.columnWidth - this.options.gutterWidth
                }
                this.styleQueue.push({
                    $el: this.element,
                    style: r
                });
                var s, a = this.isLaidOut && this.options.isAnimated ? "animate" : "css",
                    l = this.options.animationOptions;
                for (n = 0, i = this.styleQueue.length; n < i; n++) s = this.styleQueue[n], s.$el[a](s.style, l);
                this.styleQueue = [], t && t.call(e), this.isLaidOut = !0
            },
            _getColumns: function() {
                var e = this.options.isFitWidth ? this.element.parent() : this.element,
                    t = e.width();
                this.columnWidth = this.isFluid ? this.options.columnWidth(t) : this.options.columnWidth || this.$bricks.outerWidth(!0) || t, this.columnWidth += this.options.gutterWidth, this.cols = Math.floor((t + this.options.gutterWidth) / this.columnWidth), this.cols = Math.max(this.cols, 1)
            },
            _placeBrick: function(e) {
                var n, i, r, o, s, a = t(e);
                if (n = Math.ceil(a.outerWidth(!0) / (this.columnWidth + this.options.gutterWidth)), n = Math.min(n, this.cols), 1 === n) r = this.colYs;
                else
                    for (i = this.cols + 1 - n, r = [], s = 0; s < i; s++) o = this.colYs.slice(s, s + n), r[s] = Math.max.apply(Math, o);
                for (var l = Math.min.apply(Math, r), u = 0, c = 0, h = r.length; c < h; c++)
                    if (r[c] === l) {
                        u = c;
                        break
                    }
                var d = {
                    top: l + this.offset.y
                };
                d[this.horizontalDirection] = this.columnWidth * u + this.offset.x, this.styleQueue.push({
                    $el: a,
                    style: d
                });
                var f = l + a.outerHeight(!0),
                    p = this.cols + 1 - h;
                for (c = 0; c < p; c++) this.colYs[u + c] = f
            },
            resize: function() {
                var e = this.cols;
                this._getColumns(), (this.isFluid || this.cols !== e) && this._reLayout()
            },
            _reLayout: function(e) {
                var t = this.cols;
                for (this.colYs = []; t--;) this.colYs.push(0);
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
                    var i = this;
                    setTimeout(function() {
                        i._appended(e, n)
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
                for (var i in this.originalStyle) n[i] = this.originalStyle[i];
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
            var i, r, o, s, a = t(e),
                l = this.horizontalDirection;
            if (i = Math.ceil(a.outerWidth(!0) / (this.columnWidth + this.options.gutterWidth)), i = Math.min(i, this.cols), 1 === i) o = this.colYs;
            else {
                r = this.cols + 1 - i, o = [];
                for (var u = 0; u < r; u++) s = this.colYs.slice(u, u + i), o[u] = Math.max.apply(Math, s)
            }
            var c = Math.min.apply(Math, o),
                h = {
                    top: 0
                };
            h[l] = 0;
            var d = this.styleQueue.slice(-1)[0];
            if (d != n) {
                var f = d.$el.outerWidth(!0),
                    p = d.style[l] - this.offset.x;
                h[l] = p + f, h.top = d.style.top;
                var m = h[l] + i * this.columnWidth,
                    g = this.cols * this.columnWidth;
                m > g && (h[l] = 0)
            }
            for (var v = this.options.layoutPriorities, y = [], _ = 0, b = o.length; _ < b; _++) {
                var w = Math.abs(h[l] - this.columnWidth * _),
                    x = Math.abs(h.top - o[_]),
                    k = Math.pow(w, 2) + Math.pow(x, 2),
                    S = Math.round(Math.sqrt(k)),
                    T = v.shelfOrder * S,
                    C = v.upperPosition * (o[_] - c);
                y[_] = C + T
            }
            var D = Math.min.apply(null, y);
            for (_ = 0, b = y.length; _ < b; _++)
                if (y[_] === D) {
                    shortCol = _;
                    break
                }
            var M = {
                top: o[shortCol] + this.offset.y
            };
            M[l] = this.columnWidth * shortCol + this.offset.x, this.styleQueue.push({
                $el: a,
                style: M
            });
            var E = o[shortCol] + a.outerHeight(!0),
                A = this.cols + 1 - b;
            for (_ = 0; _ < A; _++) this.colYs[shortCol + _] = E
        }
    }(window, jQuery),
    function(e) {
        function t() {
            function t(e) {
                var s = e < 1e12 ? i ? performance.now() + performance.timing.navigationStart : n() : e || n();
                s - o >= 1e3 && (h._updateTargets(), o = s), r(t)
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
            var n = "function" == typeof Date.now ? Date.now : function() {
                    return (new Date).getTime()
                },
                i = window.performance && "function" == typeof window.performance.now,
                r = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null,
                o = 0;
            !r || e.noRequestAnimationFrame ? (e.noRequestAnimationFrame = null, setInterval(function() {
                h._updateTargets()
            }, 980)) : (o = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || n(), r(t))
        }

        function n(t, n) {
            return "option" == t && (0 == n.length || 1 == n.length && "string" == typeof n[0]) || e.inArray(t, c) > -1
        }
        var i = 0,
            r = 1,
            o = 2,
            s = 3,
            a = 4,
            l = 5,
            u = 6;
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
            UTCDate: function(e, t, n, i, r, o, s, a) {
                "object" == typeof t && t.constructor == Date && (a = t.getMilliseconds(), s = t.getSeconds(), o = t.getMinutes(), r = t.getHours(), i = t.getDate(), n = t.getMonth(), t = t.getFullYear());
                var l = new Date;
                return l.setUTCFullYear(t), l.setUTCDate(1), l.setUTCMonth(n || 0), l.setUTCDate(i || 1), l.setUTCHours(r || 0), l.setUTCMinutes((o || 0) - (Math.abs(e) < 30 ? 60 * e : e)), l.setUTCSeconds(s || 0), l.setUTCMilliseconds(a || 0), l
            },
            periodsToSeconds: function(e) {
                return 31557600 * e[0] + 2629800 * e[1] + 604800 * e[2] + 86400 * e[3] + 3600 * e[4] + 60 * e[5] + e[6]
            },
            _attachPlugin: function(t, n) {
                if (t = e(t), !t.hasClass(this.markerClassName)) {
                    var i = {
                        options: e.extend({}, this._defaults),
                        _periods: [0, 0, 0, 0, 0, 0, 0]
                    };
                    t.addClass(this.markerClassName).data(this.propertyName, i), this._optionPlugin(t, n)
                }
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
            _optionPlugin: function(t, n, i) {
                t = e(t);
                var r = t.data(this.propertyName);
                if (!n || "string" == typeof n && null == i) {
                    var o = n;
                    return n = (r || {}).options, n && o ? n[o] : n
                }
                if (t.hasClass(this.markerClassName)) {
                    if (n = n || {}, "string" == typeof n) {
                        var o = n;
                        n = {}, n[o] = i
                    }
                    n.layout && (n.layout = n.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")), this._resetExtraLabels(r.options, n);
                    var s = r.options.timezone != n.timezone;
                    e.extend(r.options, n), this._adjustSettings(t, r, null != n.until || null != n.since || s);
                    var a = new Date;
                    (r._since && r._since < a || r._until && r._until > a) && this._addTarget(t[0]), this._updateCountdown(t, r)
                }
            },
            _updateCountdown: function(t, n) {
                var i = e(t);
                if (n = n || i.data(this.propertyName)) {
                    if (i.html(this._generateHTML(n)).toggleClass(this._rtlClass, n.options.isRTL), e.isFunction(n.options.onTick)) {
                        var r = "lap" != n._hold ? n._periods : this._calculatePeriods(n, n._show, n.options.significant, new Date);
                        1 != n.options.tickInterval && this.periodsToSeconds(r) % n.options.tickInterval != 0 || n.options.onTick.apply(t, [r])
                    }
                    var o = "pause" != n._hold && (n._since ? n._now.getTime() < n._since.getTime() : n._now.getTime() >= n._until.getTime());
                    if (o && !n._expiring) {
                        if (n._expiring = !0, this._hasTarget(t) || n.options.alwaysExpire) {
                            if (this._removeTarget(t), e.isFunction(n.options.onExpiry) && n.options.onExpiry.apply(t, []), n.options.expiryText) {
                                var s = n.options.layout;
                                n.options.layout = n.options.expiryText, this._updateCountdown(t, n), n.options.layout = s
                            }
                            n.options.expiryUrl && (window.location = n.options.expiryUrl)
                        }
                        n._expiring = !1
                    } else "pause" == n._hold && this._removeTarget(t);
                    i.data(this.propertyName, n)
                }
            },
            _resetExtraLabels: function(e, t) {
                var n = !1;
                for (var i in t)
                    if ("whichLabels" != i && i.match(/[Ll]abels/)) {
                        n = !0;
                        break
                    }
                if (n)
                    for (var i in e) i.match(/[Ll]abels[02-9]|compactLabels1/) && (e[i] = null)
            },
            _adjustSettings: function(t, n, i) {
                for (var r, o = 0, s = null, a = 0; a < this._serverSyncs.length; a++)
                    if (this._serverSyncs[a][0] == n.options.serverSync) {
                        s = this._serverSyncs[a][1];
                        break
                    }
                if (null != s) o = n.options.serverSync ? s : 0, r = new Date;
                else {
                    var l = e.isFunction(n.options.serverSync) ? n.options.serverSync.apply(t, []) : null;
                    r = new Date, o = l ? r.getTime() - l.getTime() : 0, this._serverSyncs.push([n.options.serverSync, o])
                }
                var u = n.options.timezone;
                u = null == u ? -r.getTimezoneOffset() : u, (i || !i && null == n._until && null == n._since) && (n._since = n.options.since, null != n._since && (n._since = this.UTCDate(u, this._determineTime(n._since, null)), n._since && o && n._since.setMilliseconds(n._since.getMilliseconds() + o)), n._until = this.UTCDate(u, this._determineTime(n.options.until, r)), o && n._until.setMilliseconds(n._until.getMilliseconds() + o)), n._show = this._determineShow(n)
            },
            _destroyPlugin: function(t) {
                t = e(t), t.hasClass(this.markerClassName) && (this._removeTarget(t[0]), t.removeClass(this.markerClassName).empty().removeData(this.propertyName))
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
                var i = e.data(t, this.propertyName);
                if (i) {
                    if ("pause" == i._hold && !n) {
                        i._periods = i._savePeriods;
                        var r = i._since ? "-" : "+";
                        i[i._since ? "_since" : "_until"] = this._determineTime(r + i._periods[0] + "y" + r + i._periods[1] + "o" + r + i._periods[2] + "w" + r + i._periods[3] + "d" + r + i._periods[4] + "h" + r + i._periods[5] + "m" + r + i._periods[6] + "s"), this._addTarget(t)
                    }
                    i._hold = n, i._savePeriods = "pause" == n ? i._periods : null, e.data(t, this.propertyName, i), this._updateCountdown(t, i)
                }
            },
            _getTimesPlugin: function(t) {
                var n = e.data(t, this.propertyName);
                return n ? "pause" == n._hold ? n._savePeriods : n._hold ? this._calculatePeriods(n, n._show, n.options.significant, new Date) : n._periods : null
            },
            _determineTime: function(e, t) {
                var n = function(e) {
                        var t = new Date;
                        return t.setTime(t.getTime() + 1e3 * e), t
                    },
                    i = function(e) {
                        e = e.toLowerCase();
                        for (var t = new Date, n = t.getFullYear(), i = t.getMonth(), r = t.getDate(), o = t.getHours(), s = t.getMinutes(), a = t.getSeconds(), l = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, u = l.exec(e); u;) {
                            switch (u[2] || "s") {
                                case "s":
                                    a += parseInt(u[1], 10);
                                    break;
                                case "m":
                                    s += parseInt(u[1], 10);
                                    break;
                                case "h":
                                    o += parseInt(u[1], 10);
                                    break;
                                case "d":
                                    r += parseInt(u[1], 10);
                                    break;
                                case "w":
                                    r += 7 * parseInt(u[1], 10);
                                    break;
                                case "o":
                                    i += parseInt(u[1], 10), r = Math.min(r, h._getDaysInMonth(n, i));
                                    break;
                                case "y":
                                    n += parseInt(u[1], 10), r = Math.min(r, h._getDaysInMonth(n, i))
                            }
                            u = l.exec(e)
                        }
                        return new Date(n, i, r, o, s, a, 0)
                    },
                    r = null == e ? t : "string" == typeof e ? i(e) : "number" == typeof e ? n(e) : e;
                return r && r.setMilliseconds(0), r
            },
            _getDaysInMonth: function(e, t) {
                return 32 - new Date(e, t, 32).getDate()
            },
            _normalLabels: function(e) {
                return e
            },
            _generateHTML: function(t) {
                var n = this;
                t._periods = t._hold ? t._periods : this._calculatePeriods(t, t._show, t.options.significant, new Date);
                for (var c = !1, d = 0, f = t.options.significant, p = e.extend({}, t._show), m = i; m <= u; m++) c |= "?" == t._show[m] && t._periods[m] > 0, p[m] = "?" != t._show[m] || c ? t._show[m] : null, d += p[m] ? 1 : 0, f -= t._periods[m] > 0 ? 1 : 0;
                for (var g = [!1, !1, !1, !1, !1, !1, !1], m = u; m >= i; m--) t._show[m] && (t._periods[m] ? g[m] = !0 : (g[m] = f > 0, f--));
                var v = t.options.compact ? t.options.compactLabels : t.options.labels,
                    y = t.options.whichLabels || this._normalLabels,
                    _ = function(e) {
                        var i = t.options["compactLabels" + y(t._periods[e])];
                        return p[e] ? n._translateDigits(t, t._periods[e]) + (i ? i[e] : v[e]) + " " : ""
                    },
                    b = function(e) {
                        var i = t.options["labels" + y(t._periods[e])];
                        return !t.options.significant && p[e] || t.options.significant && g[e] ? '<span class="' + h._sectionClass + '"><span class="' + h._amountClass + '">' + n._translateDigits(t, t._periods[e]) + "</span><br/>" + (i ? i[e] : v[e]) + "</span>" : ""
                    };
                return t.options.layout ? this._buildLayout(t, p, t.options.layout, t.options.compact, t.options.significant, g) : (t.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (t._hold ? " " + this._holdingClass : "") + '">' + _(i) + _(r) + _(o) + _(s) + (p[a] ? this._minDigits(t, t._periods[a], 2) : "") + (p[l] ? (p[a] ? t.options.timeSeparator : "") + this._minDigits(t, t._periods[l], 2) : "") + (p[u] ? (p[a] || p[l] ? t.options.timeSeparator : "") + this._minDigits(t, t._periods[u], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (t.options.significant || d) + (t._hold ? " " + this._holdingClass : "") + '">' + b(i) + b(r) + b(o) + b(s) + b(a) + b(l) + b(u)) + "</span>" + (t.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + t.options.description + "</span>" : "")
            },
            _buildLayout: function(t, n, c, h, d, f) {
                for (var p = t.options[h ? "compactLabels" : "labels"], m = t.options.whichLabels || this._normalLabels, g = function(e) {
                        return (t.options[(h ? "compactLabels" : "labels") + m(t._periods[e])] || p)[e]
                    }, v = function(e, n) {
                        return t.options.digits[Math.floor(e / n) % 10]
                    }, y = {
                        desc: t.options.description,
                        sep: t.options.timeSeparator,
                        yl: g(i),
                        yn: this._minDigits(t, t._periods[i], 1),
                        ynn: this._minDigits(t, t._periods[i], 2),
                        ynnn: this._minDigits(t, t._periods[i], 3),
                        y1: v(t._periods[i], 1),
                        y10: v(t._periods[i], 10),
                        y100: v(t._periods[i], 100),
                        y1000: v(t._periods[i], 1e3),
                        ol: g(r),
                        on: this._minDigits(t, t._periods[r], 1),
                        onn: this._minDigits(t, t._periods[r], 2),
                        onnn: this._minDigits(t, t._periods[r], 3),
                        o1: v(t._periods[r], 1),
                        o10: v(t._periods[r], 10),
                        o100: v(t._periods[r], 100),
                        o1000: v(t._periods[r], 1e3),
                        wl: g(o),
                        wn: this._minDigits(t, t._periods[o], 1),
                        wnn: this._minDigits(t, t._periods[o], 2),
                        wnnn: this._minDigits(t, t._periods[o], 3),
                        w1: v(t._periods[o], 1),
                        w10: v(t._periods[o], 10),
                        w100: v(t._periods[o], 100),
                        w1000: v(t._periods[o], 1e3),
                        dl: g(s),
                        dn: this._minDigits(t, t._periods[s], 1),
                        dnn: this._minDigits(t, t._periods[s], 2),
                        dnnn: this._minDigits(t, t._periods[s], 3),
                        d1: v(t._periods[s], 1),
                        d10: v(t._periods[s], 10),
                        d100: v(t._periods[s], 100),
                        d1000: v(t._periods[s], 1e3),
                        hl: g(a),
                        hn: this._minDigits(t, t._periods[a], 1),
                        hnn: this._minDigits(t, t._periods[a], 2),
                        hnnn: this._minDigits(t, t._periods[a], 3),
                        h1: v(t._periods[a], 1),
                        h10: v(t._periods[a], 10),
                        h100: v(t._periods[a], 100),
                        h1000: v(t._periods[a], 1e3),
                        ml: g(l),
                        mn: this._minDigits(t, t._periods[l], 1),
                        mnn: this._minDigits(t, t._periods[l], 2),
                        mnnn: this._minDigits(t, t._periods[l], 3),
                        m1: v(t._periods[l], 1),
                        m10: v(t._periods[l], 10),
                        m100: v(t._periods[l], 100),
                        m1000: v(t._periods[l], 1e3),
                        sl: g(u),
                        sn: this._minDigits(t, t._periods[u], 1),
                        snn: this._minDigits(t, t._periods[u], 2),
                        snnn: this._minDigits(t, t._periods[u], 3),
                        s1: v(t._periods[u], 1),
                        s10: v(t._periods[u], 10),
                        s100: v(t._periods[u], 100),
                        s1000: v(t._periods[u], 1e3)
                    }, _ = c, b = i; b <= u; b++) {
                    var w = "yowdhms".charAt(b),
                        x = new RegExp("\\{" + w + "<\\}([\\s\\S]*)\\{" + w + ">\\}", "g");
                    _ = _.replace(x, !d && n[b] || d && f[b] ? "$1" : "")
                }
                return e.each(y, function(e, t) {
                    var n = new RegExp("\\{" + e + "\\}", "g");
                    _ = _.replace(n, t)
                }), _
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
                    n = [];
                return n[i] = t.match("y") ? "?" : t.match("Y") ? "!" : null, n[r] = t.match("o") ? "?" : t.match("O") ? "!" : null, n[o] = t.match("w") ? "?" : t.match("W") ? "!" : null, n[s] = t.match("d") ? "?" : t.match("D") ? "!" : null, n[a] = t.match("h") ? "?" : t.match("H") ? "!" : null, n[l] = t.match("m") ? "?" : t.match("M") ? "!" : null, n[u] = t.match("s") ? "?" : t.match("S") ? "!" : null, n
            },
            _calculatePeriods: function(e, t, n, c) {
                e._now = c, e._now.setMilliseconds(0);
                var d = new Date(e._now.getTime());
                e._since ? c.getTime() < e._since.getTime() ? e._now = c = d : c = e._since : (d.setTime(e._until.getTime()), c.getTime() > e._until.getTime() && (e._now = c = d));
                var f = [0, 0, 0, 0, 0, 0, 0];
                if (t[i] || t[r]) {
                    var p = h._getDaysInMonth(c.getFullYear(), c.getMonth()),
                        m = h._getDaysInMonth(d.getFullYear(), d.getMonth()),
                        g = d.getDate() == c.getDate() || d.getDate() >= Math.min(p, m) && c.getDate() >= Math.min(p, m),
                        v = function(e) {
                            return 60 * (60 * e.getHours() + e.getMinutes()) + e.getSeconds()
                        },
                        y = Math.max(0, 12 * (d.getFullYear() - c.getFullYear()) + d.getMonth() - c.getMonth() + (d.getDate() < c.getDate() && !g || g && v(d) < v(c) ? -1 : 0));
                    f[i] = t[i] ? Math.floor(y / 12) : 0, f[r] = t[r] ? y - 12 * f[i] : 0, c = new Date(c.getTime());
                    var _ = c.getDate() == p,
                        b = h._getDaysInMonth(c.getFullYear() + f[i], c.getMonth() + f[r]);
                    c.getDate() > b && c.setDate(b), c.setFullYear(c.getFullYear() + f[i]), c.setMonth(c.getMonth() + f[r]), _ && c.setDate(b)
                }
                var w = Math.floor((d.getTime() - c.getTime()) / 1e3),
                    x = function(e, n) {
                        f[e] = t[e] ? Math.floor(w / n) : 0, w -= f[e] * n
                    };
                if (x(o, 604800), x(s, 86400), x(a, 3600), x(l, 60), x(u, 1), w > 0 && !e._since)
                    for (var k = [1, 12, 4.3482, 7, 24, 60, 60], S = u, T = 1, C = u; C >= i; C--) t[C] && (f[S] >= T && (f[S] = 0, w = 1), w > 0 && (f[C]++, w = 0, S = C, T = 1)), T *= k[C];
                if (n)
                    for (var C = i; C <= u; C++) n && f[C] ? n-- : n || (f[C] = 0);
                return f
            }
        });
        var c = ["getTimes"];
        e.fn.countdown = function(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return n(e, t) ? h["_" + e + "Plugin"].apply(h, [this[0]].concat(t)) : this.each(function() {
                if ("string" == typeof e) {
                    if (!h["_" + e + "Plugin"]) throw "Unknown command: " + e;
                    h["_" + e + "Plugin"].apply(h, [this].concat(t))
                } else h._attachPlugin(this, e || {})
            })
        };
        var h = e.countdown = new t
    }(jQuery),
    function(e) {
        e.fn.dragEvents = function() {
            return this.each(function() {
                function t(t) {
                    return i(t), r = e.extend({}, s), e(document).one("mouseup", function(t) {
                        return i(t), e(document).unbind("mousemove", n), o.triggerHandler("dragstop", [t]), i(), !1
                    }), e(document).bind("mousemove", n), o.triggerHandler("dragstart", [t]), !1
                }

                function n(e) {
                    i(e);
                    var t = {
                        x: s.x - r.x,
                        y: s.y - r.y
                    };
                    return o.triggerHandler("drag", [t]), !1
                }

                function i(e) {
                    e ? (s.x = e.pageX, s.y = e.pageY) : s = {}
                }
                var r, o = e(this),
                    s = {};
                o.mousedown(t)
            })
        }
    }(jQuery), "function" != typeof Object.create && (Object.create = function(e) {
        function t() {}
        return t.prototype = e, new t
    });
var NotyObject = {
    init: function(e) {
        return this.options = $.extend({}, $.noty.defaults, e), this.options.layout = this.options.custom ? $.noty.layouts.inline : $.noty.layouts[this.options.layout], $.noty.themes[this.options.theme] ? this.options.theme = $.noty.themes[this.options.theme] : e.themeClassName = this.options.theme, delete e.layout, delete e.theme, this.options = $.extend({}, this.options, this.options.layout.options), this.options.id = "noty_" + (new Date).getTime() * Math.floor(1e6 * Math.random()), this.options = $.extend({}, this.options, e), this._build(), this
    },
    _build: function() {
        var e = $('<div class="noty_bar noty_type_' + this.options.type + '"></div>').attr("id", this.options.id);
        if (e.append(this.options.template).find(".noty_text").html(this.options.text), this.$bar = null !== this.options.layout.parent.object ? $(this.options.layout.parent.object).css(this.options.layout.parent.css).append(e) : e, this.options.themeClassName && this.$bar.addClass(this.options.themeClassName).addClass("noty_container_type_" + this.options.type), this.options.buttons) {
            this.options.closeWith = [], this.options.timeout = !1;
            var t = $("<div/>").addClass("noty_buttons");
            null !== this.options.layout.parent.object ? this.$bar.find(".noty_bar").append(t) : this.$bar.append(t);
            var n = this;
            $.each(this.options.buttons, function(e, t) {
                var i = $("<button/>").addClass(t.addClass ? t.addClass : "gray").html(t.text).attr("id", t.id ? t.id : "button-" + e).appendTo(n.$bar.find(".noty_buttons")).on("click", function() {
                    $.isFunction(t.onClick) && t.onClick.call(i, n)
                })
            })
        }
        this.$message = this.$bar.find(".noty_message"), this.$closeButton = this.$bar.find(".noty_close"), this.$buttons = this.$bar.find(".noty_buttons"), $.noty.store[this.options.id] = this
    },
    show: function() {
        var e = this;
        return e.options.custom ? e.options.custom.find(e.options.layout.container.selector).append(e.$bar) : $(e.options.layout.container.selector).append(e.$bar), e.options.theme && e.options.theme.style && e.options.theme.style.apply(e), "function" === $.type(e.options.layout.css) ? this.options.layout.css.apply(e.$bar) : e.$bar.css(this.options.layout.css || {}), e.$bar.addClass(e.options.layout.addClass), e.options.layout.container.style.apply($(e.options.layout.container.selector)), e.showing = !0, e.options.theme && e.options.theme.style && e.options.theme.callback.onShow.apply(this), $.inArray("click", e.options.closeWith) > -1 && e.$bar.css("cursor", "pointer").one("click", function(t) {
            e.stopPropagation(t), e.options.callback.onCloseClick && e.options.callback.onCloseClick.apply(e), e.close()
        }), $.inArray("hover", e.options.closeWith) > -1 && e.$bar.one("mouseenter", function() {
            e.close()
        }), $.inArray("button", e.options.closeWith) > -1 && e.$closeButton.one("click", function(t) {
            e.stopPropagation(t), e.close()
        }), $.inArray("button", e.options.closeWith) == -1 && e.$closeButton.remove(), e.options.callback.onShow && e.options.callback.onShow.apply(e), e.$bar.animate(e.options.animation.open, e.options.animation.speed, e.options.animation.easing, function() {
            e.options.callback.afterShow && e.options.callback.afterShow.apply(e), e.showing = !1, e.shown = !0
        }), e.options.timeout && e.$bar.delay(e.options.timeout).promise().done(function() {
            e.close()
        }), this
    },
    close: function() {
        if (!(this.closed || this.$bar && this.$bar.hasClass("i-am-closing-now"))) {
            var e = this;
            if (this.showing) return void e.$bar.queue(function() {
                e.close.apply(e)
            });
            if (this.$bar.dequeue(), !this.shown && !this.showing) {
                var t = [];
                return $.each($.noty.queue, function(n, i) {
                    i.options.id != e.options.id && t.push(i)
                }), void($.noty.queue = t)
            }
            e.$bar.addClass("i-am-closing-now"), e.options.callback.onClose && e.options.callback.onClose.apply(e), e.$bar.clearQueue().stop().animate(e.options.animation.close, e.options.animation.speed, e.options.animation.easing, function() {
                e.options.callback.afterClose && e.options.callback.afterClose.apply(e)
            }).promise().done(function() {
                e.options.modal && ($.notyRenderer.setModalCount(-1), 0 == $.notyRenderer.getModalCount() && $(".noty_modal").fadeOut("fast", function() {
                    $(this).remove()
                })), $.notyRenderer.setLayoutCountFor(e, -1), 0 == $.notyRenderer.getLayoutCountFor(e) && $(e.options.layout.container.selector).remove(), "undefined" != typeof e.$bar && null !== e.$bar && (e.$bar.remove(), e.$bar = null, e.closed = !0), delete $.noty.store[e.options.id], e.options.theme.callback && e.options.theme.callback.onClose && e.options.theme.callback.onClose.apply(e), e.options.dismissQueue || ($.noty.ontap = !0, $.notyRenderer.render()), e.options.maxVisible > 0 && e.options.dismissQueue && $.notyRenderer.render()
            })
        }
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
        e = e || window.event, "undefined" != typeof e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    },
    closed: !1,
    showing: !1,
    shown: !1
};
$.notyRenderer = {}, $.notyRenderer.init = function(e) {
    var t = Object.create(NotyObject).init(e);
    return t.options.killer && $.noty.closeAll(), t.options.force ? $.noty.queue.unshift(t) : $.noty.queue.push(t), $.notyRenderer.render(), "object" == $.noty.returns ? t : t.options.id
}, $.notyRenderer.render = function() {
    var e = $.noty.queue[0];
    "object" === $.type(e) ? e.options.dismissQueue ? e.options.maxVisible > 0 ? $(e.options.layout.container.selector + " li").length < e.options.maxVisible && $.notyRenderer.show($.noty.queue.shift()) : $.notyRenderer.show($.noty.queue.shift()) : $.noty.ontap && ($.notyRenderer.show($.noty.queue.shift()), $.noty.ontap = !1) : $.noty.ontap = !0
}, $.notyRenderer.show = function(e) {
    e.options.modal && ($.notyRenderer.createModalFor(e), $.notyRenderer.setModalCount(1)), e.options.custom ? 0 == e.options.custom.find(e.options.layout.container.selector).length ? e.options.custom.append($(e.options.layout.container.object).addClass("i-am-new")) : e.options.custom.find(e.options.layout.container.selector).removeClass("i-am-new") : 0 == $(e.options.layout.container.selector).length ? $("body").append($(e.options.layout.container.object).addClass("i-am-new")) : $(e.options.layout.container.selector).removeClass("i-am-new"), $.notyRenderer.setLayoutCountFor(e, 1), e.show()
}, $.notyRenderer.createModalFor = function(e) {
    if (0 == $(".noty_modal").length) {
        var t = $("<div/>").addClass("noty_modal").addClass(e.options.theme).data("noty_modal_count", 0);
        e.options.theme.modal && e.options.theme.modal.css && t.css(e.options.theme.modal.css), t.prependTo($("body")).fadeIn("fast"), $.inArray("backdrop", e.options.closeWith) > -1 && t.on("click", function(e) {
            $.noty.closeAll()
        })
    }
}, $.notyRenderer.getLayoutCountFor = function(e) {
    return $(e.options.layout.container.selector).data("noty_layout_count") || 0
}, $.notyRenderer.setLayoutCountFor = function(e, t) {
    return $(e.options.layout.container.selector).data("noty_layout_count", $.notyRenderer.getLayoutCountFor(e) + t)
}, $.notyRenderer.getModalCount = function() {
    return $(".noty_modal").data("noty_modal_count") || 0
}, $.notyRenderer.setModalCount = function(e) {
    return $(".noty_modal").data("noty_modal_count", $.notyRenderer.getModalCount() + e)
}, $.fn.noty = function(e) {
    return e.custom = $(this), $.notyRenderer.init(e)
}, $.noty = {}, $.noty.queue = [], $.noty.ontap = !0, $.noty.layouts = {}, $.noty.themes = {}, $.noty.returns = "object", $.noty.store = {}, $.noty.get = function(e) {
    return !!$.noty.store.hasOwnProperty(e) && $.noty.store[e]
}, $.noty.close = function(e) {
    return !!$.noty.get(e) && $.noty.get(e).close()
}, $.noty.setText = function(e, t) {
    return !!$.noty.get(e) && $.noty.get(e).setText(t)
}, $.noty.setType = function(e, t) {
    return !!$.noty.get(e) && $.noty.get(e).setType(t)
}, $.noty.clearQueue = function() {
    $.noty.queue = []
}, $.noty.closeAll = function() {
    $.noty.clearQueue(), $.each($.noty.store, function(e, t) {
        t.close()
    })
};
var windowAlert = window.alert;
$.noty.consumeAlert = function(e) {
        window.alert = function(t) {
            e ? e.text = t : e = {
                text: t
            }, $.notyRenderer.init(e)
        }
    }, $.noty.stopConsumeAlert = function() {
        window.alert = windowAlert
    }, $.noty.defaults = {
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
    }, $(window).on("resize", function() {
        $.each($.noty.layouts, function(e, t) {
            t.container.style.apply($(t.container.selector))
        })
    }), window.noty = function(e) {
        return jQuery.notyRenderer.init(e)
    }, $.noty.layouts.bottomCenter = {
        name: "bottomCenter",
        options: {},
        container: {
            object: '<ul id="noty_bottomCenter_layout_container" />',
            selector: "ul#noty_bottomCenter_layout_container",
            style: function() {
                $(this).css({
                    bottom: 20,
                    left: 0,
                    position: "fixed",
                    width: "310px",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 1e7
                }), $(this).css({
                    left: ($(window).width() - $(this).outerWidth(!1)) / 2 + "px"
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
            width: "310px"
        },
        addClass: ""
    }, $.noty.themes.defaultTheme = {
        name: "defaultTheme",
        helpers: {
            borderFix: function() {
                if (this.options.dismissQueue) {
                    var e = this.options.layout.container.selector + " " + this.options.layout.parent.selector;
                    switch (this.options.layout.name) {
                        case "top":
                            $(e).css({
                                borderRadius: "0px 0px 0px 0px"
                            }), $(e).last().css({
                                borderRadius: "0px 0px 5px 5px"
                            });
                            break;
                        case "topCenter":
                        case "topLeft":
                        case "topRight":
                        case "bottomCenter":
                        case "bottomLeft":
                        case "bottomRight":
                        case "center":
                        case "centerLeft":
                        case "centerRight":
                        case "inline":
                            $(e).css({
                                borderRadius: "0px 0px 0px 0px"
                            }), $(e).first().css({
                                "border-top-left-radius": "5px",
                                "border-top-right-radius": "5px"
                            }), $(e).last().css({
                                "border-bottom-left-radius": "5px",
                                "border-bottom-right-radius": "5px"
                            });
                            break;
                        case "bottom":
                            $(e).css({
                                borderRadius: "0px 0px 0px 0px"
                            }), $(e).first().css({
                                borderRadius: "5px 5px 0px 0px"
                            })
                    }
                }
            }
        },
        modal: {
            css: {
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                zIndex: 1e4,
                opacity: .6,
                display: "none",
                left: 0,
                top: 0
            }
        },
        style: function() {
            switch (this.$bar.css({
                overflow: "hidden",
                background: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAQAAAClM0ndAAAAhklEQVR4AdXO0QrCMBBE0bttkk38/w8WRERpdyjzVOc+HxhIHqJGMQcFFkpYRQotLLSw0IJ5aBdovruMYDA/kT8plF9ZKLFQcgF18hDj1SbQOMlCA4kao0iiXmah7qBWPdxpohsgVZyj7e5I9KcID+EhiDI5gxBYKLBQYKHAQoGFAoEks/YEGHYKB7hFxf0AAAAASUVORK5CYII=') repeat-x scroll left top #fff"
            }), this.$message.css({
                fontSize: "13px",
                lineHeight: "16px",
                textAlign: "center",
                padding: "8px 10px 9px",
                width: "auto",
                position: "relative"
            }), this.$closeButton.css({
                position: "absolute",
                top: 4,
                right: 4,
                width: 10,
                height: 10,
                background: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAQAAAAnOwc2AAAAxUlEQVR4AR3MPUoDURSA0e++uSkkOxC3IAOWNtaCIDaChfgXBMEZbQRByxCwk+BasgQRZLSYoLgDQbARxry8nyumPcVRKDfd0Aa8AsgDv1zp6pYd5jWOwhvebRTbzNNEw5BSsIpsj/kurQBnmk7sIFcCF5yyZPDRG6trQhujXYosaFoc+2f1MJ89uc76IND6F9BvlXUdpb6xwD2+4q3me3bysiHvtLYrUJto7PD/ve7LNHxSg/woN2kSz4txasBdhyiz3ugPGetTjm3XRokAAAAASUVORK5CYII=)",
                display: "none",
                cursor: "pointer"
            }), this.$buttons.css({
                padding: 5,
                textAlign: "right",
                borderTop: "1px solid #ccc",
                backgroundColor: "#fff"
            }), this.$buttons.find("button").css({
                marginLeft: 5
            }), this.$buttons.find("button:first").css({
                marginLeft: 0
            }), this.$bar.on({
                mouseenter: function() {
                    $(this).find(".noty_close").stop().fadeTo("normal", 1)
                },
                mouseleave: function() {
                    $(this).find(".noty_close").stop().fadeTo("normal", 0)
                }
            }), this.options.layout.name) {
                case "top":
                    this.$bar.css({
                        borderRadius: "0px 0px 5px 5px",
                        borderBottom: "2px solid #eee",
                        borderLeft: "2px solid #eee",
                        borderRight: "2px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;
                case "topCenter":
                case "center":
                case "bottomCenter":
                case "inline":
                    this.$bar.css({
                        borderRadius: "5px",
                        border: "1px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    }), this.$message.css({
                        fontSize: "13px",
                        textAlign: "center"
                    });
                    break;
                case "topLeft":
                case "topRight":
                case "bottomLeft":
                case "bottomRight":
                case "centerLeft":
                case "centerRight":
                    this.$bar.css({
                        borderRadius: "5px",
                        border: "1px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    }), this.$message.css({
                        fontSize: "13px",
                        textAlign: "left"
                    });
                    break;
                case "bottom":
                    this.$bar.css({
                        borderRadius: "5px 5px 0px 0px",
                        borderTop: "2px solid #eee",
                        borderLeft: "2px solid #eee",
                        borderRight: "2px solid #eee",
                        boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)"
                    });
                    break;
                default:
                    this.$bar.css({
                        border: "2px solid #eee",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                    })
            }
            switch (this.options.type) {
                case "alert":
                case "notification":
                    this.$bar.css({
                        backgroundColor: "#FFF",
                        borderColor: "#CCC",
                        color: "#444"
                    });
                    break;
                case "warning":
                    this.$bar.css({
                        backgroundColor: "#FFEAA8",
                        borderColor: "#FFC237",
                        color: "#826200"
                    }), this.$buttons.css({
                        borderTop: "1px solid #FFC237"
                    });
                    break;
                case "error":
                    this.$bar.css({
                        backgroundColor: "red",
                        borderColor: "darkred",
                        color: "#FFF"
                    }), this.$message.css({
                        fontWeight: "bold"
                    }), this.$buttons.css({
                        borderTop: "1px solid darkred"
                    });
                    break;
                case "information":
                    this.$bar.css({
                        backgroundColor: "#57B7E2",
                        borderColor: "#0B90C4",
                        color: "#FFF"
                    }), this.$buttons.css({
                        borderTop: "1px solid #0B90C4"
                    });
                    break;
                case "success":
                    this.$bar.css({
                        backgroundColor: "lightgreen",
                        borderColor: "#50C24E",
                        color: "darkgreen"
                    }), this.$buttons.css({
                        borderTop: "1px solid #50C24E"
                    });
                    break;
                default:
                    this.$bar.css({
                        backgroundColor: "#FFF",
                        borderColor: "#CCC",
                        color: "#444"
                    })
            }
        },
        callback: {
            onShow: function() {
                $.noty.themes.defaultTheme.helpers.borderFix.apply(this)
            },
            onClose: function() {
                $.noty.themes.defaultTheme.helpers.borderFix.apply(this)
            }
        }
    }, $.noty.layouts.top = {
        name: "top",
        options: {},
        container: {
            object: '<ul id="noty_top_layout_container" />',
            selector: "ul#noty_top_layout_container",
            style: function() {
                $(this).css({
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
    },
    function(e, t) {
        "object" == typeof exports ? module.exports = exports = t() : "function" == typeof define && define.amd ? define([], t) : e.CryptoJS = t()
    }(this, function() {
        var e = e || function(e, t) {
            var n = Object.create || function() {
                    function e() {}
                    return function(t) {
                        var n;
                        return e.prototype = t, n = new e, e.prototype = null, n
                    }
                }(),
                i = {},
                r = i.lib = {},
                o = r.Base = function() {
                    return {
                        extend: function(e) {
                            var t = n(this);
                            return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
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
                    }
                }(),
                s = r.WordArray = o.extend({
                    init: function(e, n) {
                        e = this.words = e || [], n != t ? this.sigBytes = n : this.sigBytes = 4 * e.length
                    },
                    toString: function(e) {
                        return (e || l).stringify(this)
                    },
                    concat: function(e) {
                        var t = this.words,
                            n = e.words,
                            i = this.sigBytes,
                            r = e.sigBytes;
                        if (this.clamp(), i % 4)
                            for (var o = 0; o < r; o++) {
                                var s = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                t[i + o >>> 2] |= s << 24 - (i + o) % 4 * 8
                            } else
                                for (var o = 0; o < r; o += 4) t[i + o >>> 2] = n[o >>> 2];
                        return this.sigBytes += r, this
                    },
                    clamp: function() {
                        var t = this.words,
                            n = this.sigBytes;
                        t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4)
                    },
                    clone: function() {
                        var e = o.clone.call(this);
                        return e.words = this.words.slice(0), e
                    },
                    random: function(t) {
                        for (var n, i = [], r = function(t) {
                                var t = t,
                                    n = 987654321,
                                    i = 4294967295;
                                return function() {
                                    n = 36969 * (65535 & n) + (n >> 16) & i, t = 18e3 * (65535 & t) + (t >> 16) & i;
                                    var r = (n << 16) + t & i;
                                    return r /= 4294967296, r += .5, r * (e.random() > .5 ? 1 : -1)
                                }
                            }, o = 0; o < t; o += 4) {
                            var a = r(4294967296 * (n || e.random()));
                            n = 987654071 * a(), i.push(4294967296 * a() | 0)
                        }
                        return new s.init(i, t)
                    }
                }),
                a = i.enc = {},
                l = a.Hex = {
                    stringify: function(e) {
                        for (var t = e.words, n = e.sigBytes, i = [], r = 0; r < n; r++) {
                            var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                            i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16))
                        }
                        return i.join("")
                    },
                    parse: function(e) {
                        for (var t = e.length, n = [], i = 0; i < t; i += 2) n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
                        return new s.init(n, t / 2)
                    }
                },
                u = a.Latin1 = {
                    stringify: function(e) {
                        for (var t = e.words, n = e.sigBytes, i = [], r = 0; r < n; r++) {
                            var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                            i.push(String.fromCharCode(o))
                        }
                        return i.join("")
                    },
                    parse: function(e) {
                        for (var t = e.length, n = [], i = 0; i < t; i++) n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
                        return new s.init(n, t)
                    }
                },
                c = a.Utf8 = {
                    stringify: function(e) {
                        try {
                            return decodeURIComponent(escape(u.stringify(e)))
                        } catch (e) {
                            throw new Error("Malformed UTF-8 data")
                        }
                    },
                    parse: function(e) {
                        return u.parse(unescape(encodeURIComponent(e)))
                    }
                },
                h = r.BufferedBlockAlgorithm = o.extend({
                    reset: function() {
                        this._data = new s.init, this._nDataBytes = 0
                    },
                    _append: function(e) {
                        "string" == typeof e && (e = c.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                    },
                    _process: function(t) {
                        var n = this._data,
                            i = n.words,
                            r = n.sigBytes,
                            o = this.blockSize,
                            a = 4 * o,
                            l = r / a;
                        l = t ? e.ceil(l) : e.max((0 | l) - this._minBufferSize, 0);
                        var u = l * o,
                            c = e.min(4 * u, r);
                        if (u) {
                            for (var h = 0; h < u; h += o) this._doProcessBlock(i, h);
                            var d = i.splice(0, u);
                            n.sigBytes -= c
                        }
                        return new s.init(d, c)
                    },
                    clone: function() {
                        var e = o.clone.call(this);
                        return e._data = this._data.clone(), e
                    },
                    _minBufferSize: 0
                }),
                d = (r.Hasher = h.extend({
                    cfg: o.extend(),
                    init: function(e) {
                        this.cfg = this.cfg.extend(e), this.reset()
                    },
                    reset: function() {
                        h.reset.call(this), this._doReset()
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
                            return new e.init(n).finalize(t)
                        }
                    },
                    _createHmacHelper: function(e) {
                        return function(t, n) {
                            return new d.HMAC.init(e, n).finalize(t)
                        }
                    }
                }), i.algo = {});
            return i
        }(Math);
        return e
    }),
    function(e, t) {
        "object" == typeof exports ? module.exports = exports = t(require("./core")) : "function" == typeof define && define.amd ? define(["./core"], t) : t(e.CryptoJS)
    }(this, function(e) {
        return function() {
            var t = e,
                n = t.lib,
                i = n.WordArray,
                r = n.Hasher,
                o = t.algo,
                s = [],
                a = o.SHA1 = r.extend({
                    _doReset: function() {
                        this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                    },
                    _doProcessBlock: function(e, t) {
                        for (var n = this._hash.words, i = n[0], r = n[1], o = n[2], a = n[3], l = n[4], u = 0; u < 80; u++) {
                            if (u < 16) s[u] = 0 | e[t + u];
                            else {
                                var c = s[u - 3] ^ s[u - 8] ^ s[u - 14] ^ s[u - 16];
                                s[u] = c << 1 | c >>> 31
                            }
                            var h = (i << 5 | i >>> 27) + l + s[u];
                            h += u < 20 ? (r & o | ~r & a) + 1518500249 : u < 40 ? (r ^ o ^ a) + 1859775393 : u < 60 ? (r & o | r & a | o & a) - 1894007588 : (r ^ o ^ a) - 899497514, l = a, a = o, o = r << 30 | r >>> 2, r = i, i = h
                        }
                        n[0] = n[0] + i | 0, n[1] = n[1] + r | 0, n[2] = n[2] + o | 0, n[3] = n[3] + a | 0, n[4] = n[4] + l | 0
                    },
                    _doFinalize: function() {
                        var e = this._data,
                            t = e.words,
                            n = 8 * this._nDataBytes,
                            i = 8 * e.sigBytes;
                        return t[i >>> 5] |= 128 << 24 - i % 32, t[(i + 64 >>> 9 << 4) + 14] = Math.floor(n / 4294967296), t[(i + 64 >>> 9 << 4) + 15] = n, e.sigBytes = 4 * t.length, this._process(), this._hash
                    },
                    clone: function() {
                        var e = r.clone.call(this);
                        return e._hash = this._hash.clone(), e
                    }
                });
            t.SHA1 = r._createHelper(a), t.HmacSHA1 = r._createHmacHelper(a)
        }(), e.SHA1
    });
var Mustache;
! function(e) {
    "undefined" != typeof module ? module.exports = e : "function" == typeof define ? define(e) : Mustache = e
}(function() {
    function e(e, t) {
        return RegExp.prototype.test.call(e, t)
    }

    function t(t) {
        return !e(b, t)
    }

    function n(e) {
        var t = e.replace(T, function(e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        });
        return '"' + t + '"'
    }

    function i(e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }

    function r(e) {
        return String(e).replace(/[&<>"'\/]/g, function(e) {
            return C[e]
        })
    }

    function o(e) {
        this.string = e, this.tail = e, this.pos = 0
    }

    function s(e, t) {
        this.view = e, this.parent = t, this.clearCache()
    }

    function a() {
        this.clearCache()
    }

    function l(e, t) {
        for (var i, r, o, s = ['""'], a = 0, u = e.length; a < u; ++a) switch (i = e[a], i.type) {
            case "#":
            case "^":
                r = "#" === i.type ? "_section" : "_inverted", s.push("r." + r + "(" + n(i.value) + ", c, function (c, r) {\n  " + l(i.tokens, !0) + "\n})");
                break;
            case "{":
            case "&":
            case "name":
                o = "name" === i.type ? "true" : "false", s.push("r._name(" + n(i.value) + ", c, " + o + ")");
                break;
            case ">":
                s.push("r._partial(" + n(i.value) + ", c)");
                break;
            case "text":
                s.push(n(i.value))
        }
        return s = "return " + s.join(" + ") + ";", t ? s : new Function("c, r", s)
    }

    function u(e) {
        if (2 === e.length) return [new RegExp(i(e[0]) + "\\s*"), new RegExp("\\s*" + i(e[1]))];
        throw new Error("Invalid tags: " + e.join(" "))
    }

    function c(e) {
        for (var t, n, i = [], r = i, o = [], s = 0; s < e.length; ++s) switch (t = e[s], t.type) {
            case "#":
            case "^":
                t.tokens = [], o.push(t), r.push(t), r = t.tokens;
                break;
            case "/":
                if (0 === o.length) throw new Error("Unopened section: " + t.value);
                if (n = o.pop(), n.value !== t.value) throw new Error("Unclosed section: " + n.value);
                r = o.length > 0 ? o[o.length - 1].tokens : i;
                break;
            default:
                r.push(t)
        }
        if (n = o.pop()) throw new Error("Unclosed section: " + n.value);
        return i
    }

    function h(e) {
        for (var t, n = 0; n < e.length; ++n) {
            var i = e[n];
            t && "text" === t.type && "text" === i.type ? (t.value += i.value, e.splice(n--, 1)) : t = i
        }
    }

    function d(e, n) {
        n = n || v.tags;
        for (var r, s, a, l = u(n), d = new o(e), f = [], p = [], m = !1, g = !1, b = function() {
                if (m && !g)
                    for (; p.length;) f.splice(p.pop(), 1);
                else p = [];
                m = !1, g = !1
            }; !d.eos();) {
            if (s = d.scanUntil(l[0]))
                for (var S = 0, T = s.length; S < T; ++S) a = s.charAt(S), t(a) ? p.push(f.length) : g = !0, f.push({
                    type: "text",
                    value: a
                }), "\n" === a && b();
            if (!d.scan(l[0])) break;
            if (m = !0, r = d.scan(k) || "name", d.scan(y), "=" === r) s = d.scanUntil(w), d.scan(w), d.scanUntil(l[1]);
            else if ("{" === r) {
                var C = new RegExp("\\s*" + i("}" + n[1]));
                s = d.scanUntil(C), d.scan(x), d.scanUntil(l[1])
            } else s = d.scanUntil(l[1]);
            if (!d.scan(l[1])) throw new Error("Unclosed tag at " + d.pos);
            f.push({
                type: r,
                value: s
            }), "name" !== r && "{" !== r && "&" !== r || (g = !0), "=" === r && (n = s.split(_), l = u(n))
        }
        return h(f), c(f)
    }

    function f() {
        D.clearCache()
    }

    function p(e, t) {
        return D.compile(e, t)
    }

    function m(e, t, n) {
        return D.compilePartial(e, t, n)
    }

    function g(e, t, n) {
        if (n)
            for (var i in n) m(i, n[i]);
        return D.render(e, t)
    }
    var v = {};
    v.name = "mustache.js", v.version = "0.5.2", v.tags = ["{{", "}}"], v.parse = d, v.clearCache = f, v.compile = p, v.compilePartial = m, v.render = g, v.Scanner = o, v.Context = s, v.Renderer = a, v.to_html = function(e, t, n, i) {
        var r = g(e, t, n);
        return "function" != typeof i ? r : void i(r)
    };
    var y = /\s*/,
        _ = /\s+/,
        b = /\S/,
        w = /\s*=/,
        x = /\s*\}/,
        k = /#|\^|\/|>|\{|&|=|!/,
        S = Array.isArray || function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        },
        T = /[\x00-\x2F\x3A-\x40\x5B-\x60\x7B-\xFF\u2028\u2029]/gm,
        C = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        };
    v.isWhitespace = t, v.isArray = S, v.quote = n, v.escapeRe = i, v.escapeHtml = r, o.prototype.eos = function() {
        return "" === this.tail
    }, o.prototype.scan = function(e) {
        var t = this.tail.match(e);
        return t && 0 === t.index ? (this.tail = this.tail.substring(t[0].length), this.pos += t[0].length, t[0]) : ""
    }, o.prototype.scanUntil = function(e) {
        var t, n = this.tail.search(e);
        switch (n) {
            case -1:
                t = this.tail, this.pos += this.tail.length, this.tail = "";
                break;
            case 0:
                t = "";
                break;
            default:
                t = this.tail.substring(0, n), this.tail = this.tail.substring(n), this.pos += n
        }
        return t
    }, s.make = function(e) {
        return e instanceof s ? e : new s(e)
    }, s.prototype.clearCache = function() {
        this._cache = {}
    }, s.prototype.push = function(e) {
        return new s(e, this)
    }, s.prototype.lookup = function(e) {
        var t = this._cache[e];
        if (!t) {
            if ("." === e) t = this.view;
            else
                for (var n = this; n;) {
                    if (e.indexOf(".") > 0) {
                        var i = e.split("."),
                            r = 0;
                        for (t = n.view; t && r < i.length;) t = t[i[r++]]
                    } else t = n.view[e];
                    if (null != t) break;
                    n = n.parent
                }
            this._cache[e] = t
        }
        return "function" == typeof t && (t = t.call(this.view)), t
    }, a.prototype.clearCache = function() {
        this._cache = {}, this._partialCache = {}
    }, a.prototype.compile = function(e, t) {
        "string" == typeof e && (e = d(e, t));
        var n = l(e),
            i = this;
        return function(e) {
            return n(s.make(e), i)
        }
    }, a.prototype.compilePartial = function(e, t, n) {
        return this._partialCache[e] = this.compile(t, n), this._partialCache[e]
    }, a.prototype.render = function(e, t) {
        var n = this._cache[e];
        return n || (n = this.compile(e), this._cache[e] = n), n(t)
    }, a.prototype._section = function(e, t, n) {
        var i = t.lookup(e);
        switch (typeof i) {
            case "object":
                if (S(i)) {
                    for (var r = "", o = 0, s = i.length; o < s; ++o) r += n(t.push(i[o]), this);
                    return r
                }
                return i ? n(t.push(i), this) : "";
            case "function":
                var a = n(t, this),
                    l = this,
                    u = function(e) {
                        return l.render(e, t)
                    };
                return i.call(t.view, a, u) || "";
            default:
                if (i) return n(t, this)
        }
        return ""
    }, a.prototype._inverted = function(e, t, n) {
        var i = t.lookup(e);
        return null == i || i === !1 || S(i) && 0 === i.length ? n(t, this) : ""
    }, a.prototype._partial = function(e, t) {
        var n = this._partialCache[e];
        return n ? n(t) : ""
    }, a.prototype._name = function(e, t, n) {
        var i = t.lookup(e);
        "function" == typeof i && (i = i.call(t.view));
        var o = null == i ? "" : String(i);
        return n ? r(o) : o
    };
    var D = new a;
    return v
}()),
function() {
    ! function() {
        function e(e) {
            return "".trim ? e.trim() : e.replace(/^\s+/, "").replace(/\s+$/, "")
        }
        var t = this,
            n = {
                VERSION: "0.10.2",
                templates: {},
                $: "undefined" != typeof window ? window.jQuery || window.Zepto || null : null,
                addTemplate: function(t, i) {
                    if ("object" != typeof t) n[t] ? console.error("Invalid name: " + t + ".") : n.templates[t] ? console.error('Template "' + t + '  " exists') : (n.templates[t] = i, n[t] = function(i, r) {
                        i = i || {};
                        var o = Mustache.to_html(n.templates[t], i, n.templates);
                        return n.$ && !r ? n.$(e(o)) : o
                    });
                    else
                        for (var r in t) this.addTemplate(r, t[r])
                },
                clearAll: function() {
                    for (var e in n.templates) delete n[e];
                    n.templates = {}
                },
                refresh: function() {
                    n.clearAll(), n.grabTemplates()
                },
                grabTemplates: function() {
                    var t, i, r, o = document.getElementsByTagName("script"),
                        s = [];
                    for (t = 0, i = o.length; t < i; t++) r = o[t], r && r.innerHTML && r.id && ("text/html" === r.type || "text/x-icanhaz" === r.type) && (n.addTemplate(r.id, e(r.innerHTML)), s.unshift(r));
                    for (t = 0, i = s.length; t < i; t++) s[t].parentNode.removeChild(s[t])
                }
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = n), exports.ich = n) : t.ich = n, "undefined" != typeof document && (n.$ ? n.$(function() {
            n.grabTemplates()
        }) : document.addEventListener("DOMContentLoaded", function() {
            n.grabTemplates()
        }, !0))
    }()
}(),
function(e, t, n) {
    function i(e, n) {
        var i, r = t.createElement(e || "div");
        for (i in n) r[i] = n[i];
        return r
    }

    function r(e) {
        for (var t = 1, n = arguments.length; t < n; t++) e.appendChild(arguments[t]);
        return e
    }

    function o(e, t, n, i) {
        var r = ["opacity", t, ~~(100 * e), n, i].join("-"),
            o = .01 + n / i * 100,
            s = Math.max(1 - (1 - e) / t * (100 - o), e),
            a = c.substring(0, c.indexOf("Animation")).toLowerCase(),
            l = a && "-" + a + "-" || "";
        return d[r] || (f.insertRule("@" + l + "keyframes " + r + "{0%{opacity:" + s + "}" + o + "%{opacity:" + e + "}" + (o + .01) + "%{opacity:1}" + (o + t) % 100 + "%{opacity:" + e + "}100%{opacity:" + s + "}}", 0), d[r] = 1), r
    }

    function s(e, t) {
        var i, r, o = e.style;
        if (o[t] !== n) return t;
        for (t = t.charAt(0).toUpperCase() + t.slice(1), r = 0; r < h.length; r++)
            if (i = h[r] + t, o[i] !== n) return i
    }

    function a(e, t) {
        for (var n in t) e.style[s(e, n) || n] = t[n];
        return e
    }

    function l(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var r in i) e[r] === n && (e[r] = i[r])
        }
        return e
    }

    function u(e) {
        for (var t = {
                x: e.offsetLeft,
                y: e.offsetTop
            }; e = e.offsetParent;) t.x += e.offsetLeft, t.y += e.offsetTop;
        return t
    }
    var c, h = ["webkit", "Moz", "ms", "O"],
        d = {},
        f = function() {
            var e = i("style");
            return r(t.getElementsByTagName("head")[0], e), e.sheet || e.styleSheet
        }(),
        p = {
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
        m = function e(t) {
            return this.spin ? void(this.opts = l(t || {}, e.defaults, p)) : new e(t)
        };
    m.defaults = {}, l(m.prototype, {
        spin: function(e) {
            this.stop();
            var t, n, r = this,
                o = r.opts,
                s = r.el = a(i(0, {
                    className: o.className
                }), {
                    position: "relative",
                    zIndex: o.zIndex
                }),
                l = o.radius + o.length + o.width;
            if (e && (e.insertBefore(s, e.firstChild || null), n = u(e), t = u(s), a(s, {
                    left: ("auto" == o.left ? n.x - t.x + (e.offsetWidth >> 1) : o.left + l) + "px",
                    top: ("auto" == o.top ? n.y - t.y + (e.offsetHeight >> 1) : o.top + l) + "px"
                })), s.setAttribute("aria-role", "progressbar"), r.lines(s, r.opts), !c) {
                var h = 0,
                    d = o.fps,
                    f = d / o.speed,
                    p = (1 - o.opacity) / (f * o.trail / 100),
                    m = f / o.lines;
                ! function e() {
                    h++;
                    for (var t = o.lines; t; t--) {
                        var n = Math.max(1 - (h + t * m) % f * p, o.opacity);
                        r.opacity(s, o.lines - t, n, o)
                    }
                    r.timeout = r.el && setTimeout(e, ~~(1e3 / d))
                }()
            }
            return r
        },
        stop: function() {
            var e = this.el;
            return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = n), this
        },
        lines: function(e, t) {
            function n(e, n) {
                return a(i(), {
                    position: "absolute",
                    width: t.length + t.width + "px",
                    height: t.width + "px",
                    background: e,
                    boxShadow: n,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / t.lines * l + t.rotate) + "deg) translate(" + t.radius + "px,0)",
                    borderRadius: (t.width >> 1) + "px"
                })
            }
            for (var s, l = 0; l < t.lines; l++) s = a(i(), {
                position: "absolute",
                top: 1 + ~(t.width / 2) + "px",
                transform: t.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: t.opacity,
                animation: c && o(t.opacity, t.trail, l, t.lines) + " " + 1 / t.speed + "s linear infinite"
            }), t.shadow && r(s, a(n("#000", "0 0 4px #000"), {
                top: "2px"
            })), r(e, r(s, n(t.color, "0 0 1px rgba(0,0,0,.1)")));
            return e
        },
        opacity: function(e, t, n) {
            t < e.childNodes.length && (e.childNodes[t].style.opacity = n)
        }
    }), ! function() {
        function e(e, t) {
            return i("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', t)
        }
        var t = a(i("group"), {
            behavior: "url(#default#VML)"
        });
        !s(t, "transform") && t.adj ? (f.addRule(".spin-vml", "behavior:url(#default#VML)"), m.prototype.lines = function(t, n) {
            function i() {
                return a(e("group", {
                    coordsize: u + " " + u,
                    coordorigin: -l + " " + -l
                }), {
                    width: u,
                    height: u
                })
            }

            function o(t, o, s) {
                r(h, r(a(i(), {
                    rotation: 360 / n.lines * t + "deg",
                    left: ~~o
                }), r(a(e("roundrect", {
                    arcsize: 1
                }), {
                    width: l,
                    height: n.width,
                    left: n.radius,
                    top: -n.width >> 1,
                    filter: s
                }), e("fill", {
                    color: n.color,
                    opacity: n.opacity
                }), e("stroke", {
                    opacity: 0
                }))))
            }
            var s, l = n.length + n.width,
                u = 2 * l,
                c = 2 * -(n.width + n.length) + "px",
                h = a(i(), {
                    position: "absolute",
                    top: c,
                    left: c
                });
            if (n.shadow)
                for (s = 1; s <= n.lines; s++) o(s, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (s = 1; s <= n.lines; s++) o(s);
            return r(t, h)
        }, m.prototype.opacity = function(e, t, n, i) {
            var r = e.firstChild;
            i = i.shadow && i.lines || 0, r && t + i < r.childNodes.length && (r = r.childNodes[t + i], r = r && r.firstChild, r = r && r.firstChild, r && (r.opacity = n))
        }) : c = s(t, "animation")
    }(), e.Spinner = m
}(window, document),
function(e) {
    e.fn.spin = function(t, n) {
        var i = {
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
            var r = e(this),
                o = r.data();
            if (o.spinner && (o.spinner.stop(), delete o.spinner), t !== !1) {
                var s = Twitch.defaults({
                    color: n || t && t.color || r.css("color")
                }, t, i);
                o.spinner = new Spinner(s).spin(this)
            }
        });
        throw new Error("Spinner class not available.")
    }
}(jQuery),
function(e, t) {
    "object" == typeof exports ? module.exports = t(require("./punycode"), require("./IPv6"), require("./SecondLevelDomains")) : "function" == typeof define && define.amd ? define(["./punycode", "./IPv6", "./SecondLevelDomains"], t) : e.URI = t(e.punycode, e.IPv6, e.SecondLevelDomains)
}(this, function(e, t, n) {
    "use strict";

    function i(e, t) {
        return this instanceof i ? (void 0 === e && (e = "undefined" != typeof location ? location.href + "" : ""), this.href(e), void 0 !== t ? this.absoluteTo(t) : this) : new i(e, t)
    }

    function r(e) {
        return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
    }

    function o(e) {
        return "[object Array]" === String(Object.prototype.toString.call(e))
    }

    function s(e, t) {
        var n, i, r = {};
        if (o(t))
            for (n = 0, i = t.length; n < i; n++) r[t[n]] = !0;
        else r[t] = !0;
        for (n = 0, i = e.length; n < i; n++) void 0 !== r[e[n]] && (e.splice(n, 1), i--, n--);
        return e
    }

    function a(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, escape).replace(/\*/g, "%2A")
    }
    var l = i.prototype,
        u = Object.prototype.hasOwnProperty;
    i.duplicateQueryParameters = !1, i.protocol_expression = /^[a-z][a-z0-9-+-]*$/i, i.idn_expression = /[^a-z0-9\.-]/i, i.punycode_expression = /(xn--)/i, i.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/, i.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/, i.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi, i.defaultPorts = {
        http: "80",
        https: "443",
        ftp: "21",
        gopher: "70",
        ws: "80",
        wss: "443"
    }, i.invalid_hostname_characters = /[^a-zA-Z0-9\.-]/, i.encode = a, i.decode = decodeURIComponent, i.iso8859 = function() {
        i.encode = escape, i.decode = unescape
    }, i.unicode = function() {
        i.encode = a, i.decode = decodeURIComponent
    }, i.characters = {
        pathname: {
            encode: {
                expression: /%(24|26|2B|2C|3B|3D|3A|40)/gi,
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
                expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,
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
    }, i.encodeQuery = function(e) {
        return i.encode(e + "").replace(/%20/g, "+")
    }, i.decodeQuery = function(e) {
        return i.decode((e + "").replace(/\+/g, "%20"))
    }, i.recodePath = function(e) {
        for (var t = (e + "").split("/"), n = 0, r = t.length; n < r; n++) t[n] = i.encodePathSegment(i.decode(t[n]));
        return t.join("/")
    }, i.decodePath = function(e) {
        for (var t = (e + "").split("/"), n = 0, r = t.length; n < r; n++) t[n] = i.decodePathSegment(t[n]);
        return t.join("/")
    };
    var c, h = {
            encode: "encode",
            decode: "decode"
        },
        d = function(e, t) {
            return function(n) {
                return i[t](n + "").replace(i.characters[e][t].expression, function(n) {
                    return i.characters[e][t].map[n]
                })
            }
        };
    for (c in h) i[c + "PathSegment"] = d("pathname", h[c]);
    i.encodeReserved = d("reserved", "encode"), i.parse = function(e, t) {
        var n;
        return t || (t = {}), n = e.indexOf("#"), n > -1 && (t.fragment = e.substring(n + 1) || null, e = e.substring(0, n)), n = e.indexOf("?"), n > -1 && (t.query = e.substring(n + 1) || null, e = e.substring(0, n)), "//" === e.substring(0, 2) ? (t.protocol = "", e = e.substring(2), e = i.parseAuthority(e, t)) : (n = e.indexOf(":"), n > -1 && (t.protocol = e.substring(0, n), t.protocol && !t.protocol.match(i.protocol_expression) ? t.protocol = void 0 : "file" === t.protocol ? e = e.substring(n + 3) : "//" === e.substring(n + 1, n + 3) ? (e = e.substring(n + 3), e = i.parseAuthority(e, t)) : (e = e.substring(n + 1), t.urn = !0))), t.path = e, t
    }, i.parseHost = function(e, t) {
        var n, i, r = e.indexOf("/");
        return r === -1 && (r = e.length), "[" === e[0] ? (n = e.indexOf("]"), t.hostname = e.substring(1, n) || null, t.port = e.substring(n + 2, r) || null) : e.indexOf(":") !== e.lastIndexOf(":") ? (t.hostname = e.substring(0, r) || null, t.port = null) : (i = e.substring(0, r).split(":"), t.hostname = i[0] || null, t.port = i[1] || null), t.hostname && "/" !== e.substring(r)[0] && (r++, e = "/" + e), e.substring(r) || "/"
    }, i.parseAuthority = function(e, t) {
        return e = i.parseUserinfo(e, t), i.parseHost(e, t)
    }, i.parseUserinfo = function(e, t) {
        var n, r = e.indexOf("@"),
            o = e.indexOf("/");
        return r > -1 && (o === -1 || r < o) ? (n = e.substring(0, r).split(":"), t.username = n[0] ? i.decode(n[0]) : null, n.shift(), t.password = n[0] ? i.decode(n.join(":")) : null, e = e.substring(r + 1)) : (t.username = null, t.password = null), e
    }, i.parseQuery = function(e) {
        if (!e) return {};
        if (e = e.replace(/&+/g, "&").replace(/^\?*&*|&+$/g, ""), !e) return {};
        for (var t, n, r, o = {}, s = e.split("&"), a = s.length, l = 0; l < a; l++) t = s[l].split("="), n = i.decodeQuery(t.shift()), r = t.length ? i.decodeQuery(t.join("=")) : null, o[n] ? ("string" == typeof o[n] && (o[n] = [o[n]]), o[n].push(r)) : o[n] = r;
        return o
    }, i.build = function(e) {
        var t = "";
        return e.protocol && (t += e.protocol + ":"), e.urn || !t && !e.hostname || (t += "//"), t += i.buildAuthority(e) || "", "string" == typeof e.path && ("/" !== e.path[0] && "string" == typeof e.hostname && (t += "/"), t += e.path), "string" == typeof e.query && e.query && (t += "?" + e.query), "string" == typeof e.fragment && e.fragment && (t += "#" + e.fragment), t
    }, i.buildHost = function(e) {
        var t = "";
        return e.hostname ? (i.ip6_expression.test(e.hostname) ? t += e.port ? "[" + e.hostname + "]:" + e.port : e.hostname : (t += e.hostname, e.port && (t += ":" + e.port)), t) : ""
    }, i.buildAuthority = function(e) {
        return i.buildUserinfo(e) + i.buildHost(e)
    }, i.buildUserinfo = function(e) {
        var t = "";
        return e.username && (t += i.encode(e.username), e.password && (t += ":" + i.encode(e.password)), t += "@"), t
    }, i.buildQuery = function(e, t) {
        var n, r, s, a, l = "";
        for (r in e)
            if (u.call(e, r) && r)
                if (o(e[r]))
                    for (n = {}, s = 0, a = e[r].length; s < a; s++) void 0 !== e[r][s] && void 0 === n[e[r][s] + ""] && (l += "&" + i.buildQueryParameter(r, e[r][s]), t !== !0 && (n[e[r][s] + ""] = !0));
                else void 0 !== e[r] && (l += "&" + i.buildQueryParameter(r, e[r]));
        return l.substring(1)
    }, i.buildQueryParameter = function(e, t) {
        return i.encodeQuery(e) + (null !== t ? "=" + i.encodeQuery(t) : "")
    }, i.addQuery = function(e, t, n) {
        if ("object" == typeof t)
            for (var r in t) u.call(t, r) && i.addQuery(e, r, t[r]);
        else {
            if ("string" != typeof t) throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");
            if (void 0 === e[t]) return void(e[t] = n);
            "string" == typeof e[t] && (e[t] = [e[t]]), o(n) || (n = [n]), e[t] = e[t].concat(n)
        }
    }, i.removeQuery = function(e, t, n) {
        var r, a, l;
        if (o(t))
            for (r = 0, a = t.length; r < a; r++) e[t[r]] = void 0;
        else if ("object" == typeof t)
            for (l in t) u.call(t, l) && i.removeQuery(e, l, t[l]);
        else {
            if ("string" != typeof t) throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");
            void 0 !== n ? e[t] === n ? e[t] = void 0 : o(e[t]) && (e[t] = s(e[t], n)) : e[t] = void 0
        }
    }, i.commonPath = function(e, t) {
        var n, i = Math.min(e.length, t.length);
        for (n = 0; n < i; n++)
            if (e[n] !== t[n]) {
                n--;
                break
            }
        return n < 1 ? e[0] === t[0] && "/" === e[0] ? "/" : "" : ("/" !== e[n] && (n = e.substring(0, n).lastIndexOf("/")), e.substring(0, n + 1))
    }, i.withinString = function(e, t) {
        return e.replace(i.find_uri_expression, t)
    }, i.ensureValidHostname = function(t) {
        if (t.match(i.invalid_hostname_characters)) {
            if (!e) throw new TypeError("Hostname '" + t + "' contains characters other than [A-Z0-9.-] and Punycode.js is not available");
            if (e.toASCII(t).match(i.invalid_hostname_characters)) throw new TypeError("Hostname '" + t + "' contains characters other than [A-Z0-9.-]")
        }
    }, l.build = function(e) {
        return e === !0 ? this._deferred_build = !0 : (void 0 === e || this._deferred_build) && (this._string = i.build(this._parts), this._deferred_build = !1), this
    }, l.clone = function() {
        return new i(this)
    }, l.toString = function() {
        return this.build(!1)._string
    }, l.valueOf = function() {
        return this.toString()
    }, h = {
        protocol: "protocol",
        username: "username",
        password: "password",
        hostname: "hostname",
        port: "port"
    }, d = function(e) {
        return function(t, n) {
            return void 0 === t ? this._parts[e] || "" : (this._parts[e] = t, this.build(!n), this)
        }
    };
    for (c in h) l[c] = d(h[c]);
    h = {
        query: "?",
        fragment: "#"
    }, d = function(e, t) {
        return function(n, i) {
            return void 0 === n ? this._parts[e] || "" : (null !== n && (n += "", n[0] === t && (n = n.substring(1))), this._parts[e] = n, this.build(!i), this)
        }
    };
    for (c in h) l[c] = d(c, h[c]);
    h = {
        search: ["?", "query"],
        hash: ["#", "fragment"]
    }, d = function(e, t) {
        return function(n, i) {
            var r = this[e](n, i);
            return "string" == typeof r && r.length ? t + r : r
        }
    };
    for (c in h) l[c] = d(h[c][1], h[c][0]);
    l.pathname = function(e, t) {
        if (void 0 === e || e === !0) {
            var n = this._parts.path || (this._parts.urn ? "" : "/");
            return e ? i.decodePath(n) : n
        }
        return this._parts.path = e ? i.recodePath(e) : "/", this.build(!t), this
    }, l.path = l.pathname, l.href = function(e, t) {
        if (void 0 === e) return this.toString();
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
            duplicateQueryParameters: i.duplicateQueryParameters
        };
        var n, r = e instanceof i,
            o = "object" == typeof e && (e.hostname || e.path);
        if (!r && o && "[object Object]" !== Object.prototype.toString.call(e) && (e = e.toString()), "string" == typeof e) this._parts = i.parse(e, this._parts);
        else {
            if (!r && !o) throw new TypeError("invalid input");
            var s = r ? e._parts : e;
            for (n in s) u.call(this._parts, n) && (this._parts[n] = s[n])
        }
        return this.build(!t), this
    }, l.is = function(e) {
        var t = !1,
            r = !1,
            o = !1,
            s = !1,
            a = !1,
            l = !1,
            u = !1,
            c = !this._parts.urn;
        switch (this._parts.hostname && (c = !1, r = i.ip4_expression.test(this._parts.hostname), o = i.ip6_expression.test(this._parts.hostname), t = r || o, s = !t, a = s && n && n.has(this._parts.hostname), l = s && i.idn_expression.test(this._parts.hostname), u = s && i.punycode_expression.test(this._parts.hostname)), e.toLowerCase()) {
            case "relative":
                return c;
            case "absolute":
                return !c;
            case "domain":
            case "name":
                return s;
            case "sld":
                return a;
            case "ip":
                return t;
            case "ip4":
            case "ipv4":
            case "inet4":
                return r;
            case "ip6":
            case "ipv6":
            case "inet6":
                return o;
            case "idn":
                return l;
            case "url":
                return !this._parts.urn;
            case "urn":
                return !!this._parts.urn;
            case "punycode":
                return u
        }
        return null
    };
    var f = l.protocol,
        p = l.port,
        m = l.hostname;
    l.protocol = function(e, t) {
        if (void 0 !== e && e && (e = e.replace(/:(\/\/)?$/, ""), e.match(/[^a-zA-z0-9\.+-]/))) throw new TypeError("Protocol '" + e + "' contains characters other than [A-Z0-9.+-]");
        return f.call(this, e, t)
    }, l.scheme = l.protocol, l.port = function(e, t) {
        if (this._parts.urn) return void 0 === e ? "" : this;
        if (void 0 !== e && (0 === e && (e = null), e && (e += "", ":" === e[0] && (e = e.substring(1)), e.match(/[^0-9]/)))) throw new TypeError("Port '" + e + "' contains characters other than [0-9]");
        return p.call(this, e, t)
    }, l.hostname = function(e, t) {
        if (this._parts.urn) return void 0 === e ? "" : this;
        if (void 0 !== e) {
            var n = {};
            i.parseHost(e, n), e = n.hostname
        }
        return m.call(this, e, t)
    }, l.host = function(e, t) {
        return this._parts.urn ? void 0 === e ? "" : this : void 0 === e ? this._parts.hostname ? i.buildHost(this._parts) : "" : (i.parseHost(e, this._parts), this.build(!t), this)
    }, l.authority = function(e, t) {
        return this._parts.urn ? void 0 === e ? "" : this : void 0 === e ? this._parts.hostname ? i.buildAuthority(this._parts) : "" : (i.parseAuthority(e, this._parts), this.build(!t), this)
    }, l.userinfo = function(e, t) {
        if (this._parts.urn) return void 0 === e ? "" : this;
        if (void 0 === e) {
            if (!this._parts.username) return "";
            var n = i.buildUserinfo(this._parts);
            return n.substring(0, n.length - 1)
        }
        return "@" !== e[e.length - 1] && (e += "@"), i.parseUserinfo(e, this._parts), this.build(!t), this
    }, l.resource = function(e, t) {
        var n;
        return void 0 === e ? this.path() + this.search() + this.hash() : (n = i.parse(e), this._parts.path = n.path, this._parts.query = n.query, this._parts.fragment = n.fragment, this.build(!t), this)
    }, l.subdomain = function(e, t) {
        if (this._parts.urn) return void 0 === e ? "" : this;
        if (void 0 === e) {
            if (!this._parts.hostname || this.is("IP")) return "";
            var n = this._parts.hostname.length - this.domain().length - 1;
            return this._parts.hostname.substring(0, n) || ""
        }
        var o = this._parts.hostname.length - this.domain().length,
            s = this._parts.hostname.substring(0, o),
            a = new RegExp("^" + r(s));
        return e && "." !== e[e.length - 1] && (e += "."), e && i.ensureValidHostname(e), this._parts.hostname = this._parts.hostname.replace(a, e), this.build(!t), this
    }, l.domain = function(e, t) {
        if (this._parts.urn) return void 0 === e ? "" : this;
        if ("boolean" == typeof e && (t = e, e = void 0), void 0 === e) {
            if (!this._parts.hostname || this.is("IP")) return "";
            var n = this._parts.hostname.match(/\./g);
            if (n && n.length < 2) return this._parts.hostname;
            var o = this._parts.hostname.length - this.tld(t).length - 1;
            return o = this._parts.hostname.lastIndexOf(".", o - 1) + 1, this._parts.hostname.substring(o) || ""
        }
        if (!e) throw new TypeError("cannot set domain empty");
        if (i.ensureValidHostname(e), !this._parts.hostname || this.is("IP")) this._parts.hostname = e;
        else {
            var s = new RegExp(r(this.domain()) + "$");
            this._parts.hostname = this._parts.hostname.replace(s, e)
        }
        return this.build(!t), this
    }, l.tld = function(e, t) {
        if (this._parts.urn) return void 0 === e ? "" : this;
        if ("boolean" == typeof e && (t = e, e = void 0), void 0 === e) {
            if (!this._parts.hostname || this.is("IP")) return "";
            var i = this._parts.hostname.lastIndexOf("."),
                o = this._parts.hostname.substring(i + 1);
            return t !== !0 && n && n.list[o.toLowerCase()] ? n.get(this._parts.hostname) || o : o
        }
        var s;
        if (!e) throw new TypeError("cannot set TLD empty");
        if (e.match(/[^a-zA-Z0-9-]/)) {
            if (!n || !n.is(e)) throw new TypeError("TLD '" + e + "' contains characters other than [A-Z0-9]");
            s = new RegExp(r(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(s, e)
        } else {
            if (!this._parts.hostname || this.is("IP")) throw new ReferenceError("cannot set TLD on non-domain host");
            s = new RegExp(r(this.tld()) + "$"), this._parts.hostname = this._parts.hostname.replace(s, e)
        }
        return this.build(!t), this
    }, l.directory = function(e, t) {
        if (this._parts.urn) return void 0 === e ? "" : this;
        if (void 0 === e || e === !0) {
            if (!this._parts.path && !this._parts.hostname) return "";
            if ("/" === this._parts.path) return "/";
            var n = this._parts.path.length - this.filename().length - 1,
                o = this._parts.path.substring(0, n) || (this._parts.hostname ? "/" : "");
            return e ? i.decodePath(o) : o
        }
        var s = this._parts.path.length - this.filename().length,
            a = this._parts.path.substring(0, s),
            l = new RegExp("^" + r(a));
        return this.is("relative") || (e || (e = "/"), "/" !== e[0] && (e = "/" + e)), e && "/" !== e[e.length - 1] && (e += "/"), e = i.recodePath(e), this._parts.path = this._parts.path.replace(l, e), this.build(!t), this
    }, l.filename = function(e, t) {
        if (this._parts.urn) return void 0 === e ? "" : this;
        if (void 0 === e || e === !0) {
            if (!this._parts.path || "/" === this._parts.path) return "";
            var n = this._parts.path.lastIndexOf("/"),
                o = this._parts.path.substring(n + 1);
            return e ? i.decodePathSegment(o) : o
        }
        var s = !1;
        "/" === e[0] && (e = e.substring(1)), e.match(/\.?\//) && (s = !0);
        var a = new RegExp(r(this.filename()) + "$");
        return e = i.recodePath(e), this._parts.path = this._parts.path.replace(a, e), s ? this.normalizePath(t) : this.build(!t), this
    }, l.suffix = function(e, t) {
        if (this._parts.urn) return void 0 === e ? "" : this;
        if (void 0 === e || e === !0) {
            if (!this._parts.path || "/" === this._parts.path) return "";
            var n, o, s = this.filename(),
                a = s.lastIndexOf(".");
            return a === -1 ? "" : (n = s.substring(a + 1), o = /^[a-z0-9%]+$/i.test(n) ? n : "", e ? i.decodePathSegment(o) : o)
        }
        "." === e[0] && (e = e.substring(1));
        var l, u = this.suffix();
        if (u) l = e ? new RegExp(r(u) + "$") : new RegExp(r("." + u) + "$");
        else {
            if (!e) return this;
            this._parts.path += "." + i.recodePath(e)
        }
        return l && (e = i.recodePath(e), this._parts.path = this._parts.path.replace(l, e)), this.build(!t), this
    }, l.segment = function(e, t, n) {
        var i = this._parts.urn ? ":" : "/",
            r = this.path(),
            s = "/" === r.substring(0, 1),
            a = r.split(i);
        if ("number" != typeof e && (n = t, t = e, e = void 0), void 0 !== e && "number" != typeof e) throw new Error("Bad segment '" + e + "', must be 0-based integer");
        return s && a.shift(), e < 0 && (e = Math.max(a.length + e, 0)), void 0 === t ? void 0 === e ? a : a[e] : (null === e || void 0 === a[e] ? o(t) ? a = t : (t || "string" == typeof t && t.length) && ("" === a[a.length - 1] ? a[a.length - 1] = t : a.push(t)) : t || "string" == typeof t && t.length ? a[e] = t : a.splice(e, 1), s && a.unshift(""), this.path(a.join(i), n))
    };
    var g = l.query;
    return l.query = function(e, t) {
        return e === !0 ? i.parseQuery(this._parts.query) : void 0 !== e && "string" != typeof e ? (this._parts.query = i.buildQuery(e, this._parts.duplicateQueryParameters), this.build(!t), this) : g.call(this, e, t)
    }, l.addQuery = function(e, t, n) {
        var r = i.parseQuery(this._parts.query);
        return i.addQuery(r, e, void 0 === t ? null : t), this._parts.query = i.buildQuery(r, this._parts.duplicateQueryParameters), "string" != typeof e && (n = t), this.build(!n), this
    }, l.removeQuery = function(e, t, n) {
        var r = i.parseQuery(this._parts.query);
        return i.removeQuery(r, e, t), this._parts.query = i.buildQuery(r, this._parts.duplicateQueryParameters), "string" != typeof e && (n = t), this.build(!n), this
    }, l.addSearch = l.addQuery, l.removeSearch = l.removeQuery, l.normalize = function() {
        return this._parts.urn ? this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build() : this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()
    }, l.normalizeProtocol = function(e) {
        return "string" == typeof this._parts.protocol && (this._parts.protocol = this._parts.protocol.toLowerCase(), this.build(!e)), this
    }, l.normalizeHostname = function(n) {
        return this._parts.hostname && (this.is("IDN") && e ? this._parts.hostname = e.toASCII(this._parts.hostname) : this.is("IPv6") && t && (this._parts.hostname = t.best(this._parts.hostname)), this._parts.hostname = this._parts.hostname.toLowerCase(), this.build(!n)), this
    }, l.normalizePort = function(e) {
        return "string" == typeof this._parts.protocol && this._parts.port === i.defaultPorts[this._parts.protocol] && (this._parts.port = null, this.build(!e)), this
    }, l.normalizePath = function(e) {
        if (this._parts.urn) return this;
        if (!this._parts.path || "/" === this._parts.path) return this;
        var t, n, r, o, s = this._parts.path;
        for ("/" !== s[0] && ("." === s[0] && (n = s.substring(0, s.indexOf("/"))), t = !0, s = "/" + s), s = s.replace(/(\/(\.\/)+)|\/{2,}/g, "/");;) {
            if (r = s.indexOf("/../"), r === -1) break;
            if (0 === r) {
                s = s.substring(3);
                break
            }
            o = s.substring(0, r).lastIndexOf("/"), o === -1 && (o = r), s = s.substring(0, o) + s.substring(r + 3)
        }
        return t && this.is("relative") && (s = n ? n + s : s.substring(1)), s = i.recodePath(s), this._parts.path = s, this.build(!e), this
    }, l.normalizePathname = l.normalizePath, l.normalizeQuery = function(e) {
        return "string" == typeof this._parts.query && (this._parts.query.length ? this.query(i.parseQuery(this._parts.query)) : this._parts.query = null, this.build(!e)), this
    }, l.normalizeFragment = function(e) {
        return this._parts.fragment || (this._parts.fragment = null, this.build(!e)), this
    }, l.normalizeSearch = l.normalizeQuery, l.normalizeHash = l.normalizeFragment, l.iso8859 = function() {
        var e = i.encode,
            t = i.decode;
        return i.encode = escape, i.decode = decodeURIComponent, this.normalize(), i.encode = e, i.decode = t, this
    }, l.unicode = function() {
        var e = i.encode,
            t = i.decode;
        return i.encode = a, i.decode = unescape, this.normalize(), i.encode = e, i.decode = t, this
    }, l.readable = function() {
        var t = this.clone();
        t.username("").password("").normalize();
        var n = "";
        if (t._parts.protocol && (n += t._parts.protocol + "://"), t._parts.hostname && (t.is("punycode") && e ? (n += e.toUnicode(t._parts.hostname), t._parts.port && (n += ":" + t._parts.port)) : n += t.host()), t._parts.hostname && t._parts.path && "/" !== t._parts.path[0] && (n += "/"), n += t.path(!0), t._parts.query) {
            for (var r = "", o = 0, s = t._parts.query.split("&"), a = s.length; o < a; o++) {
                var l = (s[o] || "").split("=");
                r += "&" + i.decodeQuery(l[0]).replace(/&/g, "%26"), void 0 !== l[1] && (r += "=" + i.decodeQuery(l[1]).replace(/&/g, "%26"))
            }
            n += "?" + r.substring(1)
        }
        return n += t.hash()
    }, l.absoluteTo = function(e) {
        var t, n, r, o = this.clone(),
            s = ["protocol", "username", "password", "hostname", "port"];
        if (this._parts.urn) throw new Error("URNs do not have any generally defined hierachical components");
        if (this._parts.hostname) return o;
        for (e instanceof i || (e = new i(e)), n = 0, r; r = s[n]; n++) o._parts[r] = e._parts[r];
        for (s = ["query", "path"], n = 0, r; r = s[n]; n++) !o._parts[r] && e._parts[r] && (o._parts[r] = e._parts[r]);
        return "/" !== o.path()[0] && (t = e.directory(), o._parts.path = (t ? t + "/" : "") + o._parts.path, o.normalizePath()), o.build(), o
    }, l.relativeTo = function(e) {
        var t, n, o = this.clone(),
            s = ["protocol", "username", "password", "hostname", "port"];
        if (this._parts.urn) throw new Error("URNs do not have any generally defined hierachical components");
        if (e instanceof i || (e = new i(e)), "/" !== this.path()[0] || "/" !== e.path()[0]) throw new Error("Cannot calculate common path from non-relative URLs");
        t = i.commonPath(o.path(), e.path()), n = e.directory();
        for (var a, l = 0; a = s[l]; l++) o._parts[a] = null;
        if (!t || "/" === t) return o;
        if (n + "/" === t) o._parts.path = "./" + o.filename();
        else {
            for (var u = "../", c = new RegExp("^" + r(t)), h = n.replace(c, "/").match(/\//g).length - 1; h--;) u += "../";
            o._parts.path = o._parts.path.replace(c, u)
        }
        return o.build(), o
    }, l.equals = function(e) {
        var t, n, r, s = this.clone(),
            a = new i(e),
            l = {},
            c = {},
            h = {};
        if (s.normalize(), a.normalize(), s.toString() === a.toString()) return !0;
        if (t = s.query(), n = a.query(), s.query(""), a.query(""), s.toString() !== a.toString()) return !1;
        if (t.length !== n.length) return !1;
        l = i.parseQuery(t), c = i.parseQuery(n);
        for (r in l)
            if (u.call(l, r)) {
                if (o(l[r])) {
                    if (!o(c[r])) return !1;
                    if (l[r].length !== c[r].length) return !1;
                    l[r].sort(), c[r].sort();
                    for (var d = 0, f = l[r].length; d < f; d++)
                        if (l[r][d] !== c[r][d]) return !1
                } else if (l[r] !== c[r]) return !1;
                h[r] = !0
            }
        for (r in c)
            if (u.call(c, r) && !h[r]) return !1;
        return !0
    }, l.duplicateQueryParameters = function(e) {
        return this._parts.duplicateQueryParameters = !!e, this
    }, i
}),
function(e) {
    var t = function(t, n) {
            e("#flyout").css({
                left: e("#left_col").outerWidth()
            }), e("#flyout .content, #flyout .point").css({
                top: "auto",
                bottom: "auto"
            });
            var i = t.offset(),
                r = e(window).height(),
                o = i.top,
                s = t.outerHeight(),
                a = o + s / 2 - 10,
                l = r - (o + s),
                u = e("#flyout .content").outerHeight();
            "top" === n && (e("#flyout .point").css({
                top: a - 7
            }), o < 10 ? e("#flyout .content").css({
                top: 0
            }) : e("#flyout .content").css({
                top: o - 10
            })), "mid" === n && (e("#flyout .point").css({
                top: a - 7
            }), e("#flyout .content").css({
                top: a - u / 2
            })), "bot" === n && (e("#flyout .point").css({
                bottom: l + s / 2 - 17
            }), o + s > r - 10 ? e("#flyout .content").css({
                bottom: 0
            }) : e("#flyout .content").css({
                bottom: l - 10
            }))
        },
        n = function(n, i) {
            e(".flyout-active").tipsy({
                trigger: "hover"
            }).removeClass("flyout-active");
            var r = ich[i.content](i.data);
            e("#flyout .content").html(r), e("#flyout").show(), n.addClass("flyout-active").hover(function() {
                e(this).tipsy("hide")
            }), t(n, i.anchor)
        },
        i = function() {
            e(".flyout-active").tipsy({
                trigger: "hover"
            }).removeClass("flyout-active"), e("#flyout").hide().children(".content").empty()
        };
    e.fn.flyout = function(t, r) {
        r = e.extend({
            trigger: !1,
            focusOnLoad: !1,
            anchor: "top",
            content: t
        }, r), this.click(function(t) {
            t.preventDefault(), t.stopPropagation(), e(this).hasClass("flyout-active") ? i() : (n(e(this), r), e(this).tipsy("hide"), e("#flyout .content").bind("clickoutside", function(t) {
                e("#flyout").is(":visible") && i()
            }), r.trigger && e("body").trigger(r.trigger), r.focusOnLoad && e(r.focusOnLoad).focus())
        })
    }
}(jQuery), ! function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.swfobject = t()
}(this, function() {
    function e() {
        if (!U && document.getElementsByTagName("body")[0]) {
            try {
                var e, t = v("span");
                t.style.display = "none", e = F.getElementsByTagName("body")[0].appendChild(t), e.parentNode.removeChild(e), e = null, t = null
            } catch (e) {
                return
            }
            U = !0;
            for (var n = W.length, i = 0; n > i; i++) W[i]()
        }
    }

    function t(e) {
        U ? e() : W[W.length] = e
    }

    function n(e) {
        if (typeof L.addEventListener !== A) L.addEventListener("load", e, !1);
        else if (typeof F.addEventListener !== A) F.addEventListener("load", e, !1);
        else if (typeof L.attachEvent !== A) _(L, "onload", e);
        else if ("function" == typeof L.onload) {
            var t = L.onload;
            L.onload = function() {
                t(), e()
            }
        } else L.onload = e
    }

    function i() {
        var e = F.getElementsByTagName("body")[0],
            t = v(P);
        t.setAttribute("style", "visibility: hidden;"), t.setAttribute("type", N);
        var n = e.appendChild(t);
        if (n) {
            var i = 0;
            ! function o() {
                if (typeof n.GetVariable !== A) try {
                    var s = n.GetVariable("$version");
                    s && (s = s.split(" ")[1].split(","), G.pv = [y(s[0]), y(s[1]), y(s[2])])
                } catch (e) {
                    G.pv = [8, 0, 0]
                } else if (10 > i) return i++, void setTimeout(o, 10);
                e.removeChild(t), n = null, r()
            }()
        } else r()
    }

    function r() {
        var e = $.length;
        if (e > 0)
            for (var t = 0; e > t; t++) {
                var n = $[t].id,
                    i = $[t].callbackFn,
                    r = {
                        success: !1,
                        id: n
                    };
                if (G.pv[0] > 0) {
                    var u = g(n);
                    if (u)
                        if (!b($[t].swfVersion) || G.wk && G.wk < 312)
                            if ($[t].expressInstall && s()) {
                                var c = {};
                                c.data = $[t].expressInstall, c.width = u.getAttribute("width") || "0", c.height = u.getAttribute("height") || "0", u.getAttribute("class") && (c.styleclass = u.getAttribute("class")), u.getAttribute("align") && (c.align = u.getAttribute("align"));
                                for (var h = {}, d = u.getElementsByTagName("param"), f = d.length, p = 0; f > p; p++) "movie" !== d[p].getAttribute("name").toLowerCase() && (h[d[p].getAttribute("name")] = d[p].getAttribute("value"));
                                a(c, h, n, i)
                            } else l(u), i && i(r);
                    else x(n, !0), i && (r.success = !0, r.ref = o(n), r.id = n, i(r))
                } else if (x(n, !0), i) {
                    var m = o(n);
                    m && typeof m.SetVariable !== A && (r.success = !0, r.ref = m, r.id = m.id), i(r)
                }
            }
    }

    function o(e) {
        var t = null,
            n = g(e);
        return n && "OBJECT" === n.nodeName.toUpperCase() && (t = typeof n.SetVariable !== A ? n : n.getElementsByTagName(P)[0] || n), t
    }

    function s() {
        return !q && b("6.0.65") && (G.win || G.mac) && !(G.wk && G.wk < 312)
    }

    function a(e, t, n, i) {
        var r = g(n);
        if (n = m(n), q = !0, C = i || null, D = {
                success: !1,
                id: n
            }, r) {
            "OBJECT" === r.nodeName.toUpperCase() ? (S = u(r), T = null) : (S = r, T = n), e.id = j, (typeof e.width === A || !/%$/.test(e.width) && y(e.width) < 310) && (e.width = "310"), (typeof e.height === A || !/%$/.test(e.height) && y(e.height) < 137) && (e.height = "137");
            var o = G.ie ? "ActiveX" : "PlugIn",
                s = "MMredirectURL=" + encodeURIComponent(("" + L.location).replace(/&/g, "%26")) + "&MMplayerType=" + o + "&MMdoctitle=" + encodeURIComponent(F.title.slice(0, 47) + " - Flash Player Installation");
            if (typeof t.flashvars !== A ? t.flashvars += "&" + s : t.flashvars = s, G.ie && 4 != r.readyState) {
                var a = v("div");
                n += "SWFObjectNew", a.setAttribute("id", n), r.parentNode.insertBefore(a, r), r.style.display = "none", f(r)
            }
            h(e, t, n)
        }
    }

    function l(e) {
        if (G.ie && 4 != e.readyState) {
            e.style.display = "none";
            var t = v("div");
            e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(u(e), t), f(e)
        } else e.parentNode.replaceChild(u(e), e)
    }

    function u(e) {
        var t = v("div");
        if (G.win && G.ie) t.innerHTML = e.innerHTML;
        else {
            var n = e.getElementsByTagName(P)[0];
            if (n) {
                var i = n.childNodes;
                if (i)
                    for (var r = i.length, o = 0; r > o; o++) 1 == i[o].nodeType && "PARAM" === i[o].nodeName || 8 == i[o].nodeType || t.appendChild(i[o].cloneNode(!0))
            }
        }
        return t
    }

    function c(e, t) {
        var n = v("div");
        return n.innerHTML = "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='" + e + "'>" + t + "</object>", n.firstChild
    }

    function h(e, t, n) {
        var i, r = g(n);
        if (n = m(n), G.wk && G.wk < 312) return i;
        if (r) {
            var o, s, a, l = v(G.ie ? "div" : P);
            typeof e.id === A && (e.id = n);
            for (a in t) t.hasOwnProperty(a) && "movie" !== a.toLowerCase() && d(l, a, t[a]);
            G.ie && (l = c(e.data, l.innerHTML));
            for (o in e) e.hasOwnProperty(o) && (s = o.toLowerCase(), "styleclass" === s ? l.setAttribute("class", e[o]) : "classid" !== s && "data" !== s && l.setAttribute(o, e[o]));
            G.ie ? B[B.length] = e.id : (l.setAttribute("type", N), l.setAttribute("data", e.data)), r.parentNode.replaceChild(l, r), i = l
        }
        return i
    }

    function d(e, t, n) {
        var i = v("param");
        i.setAttribute("name", t), i.setAttribute("value", n), e.appendChild(i)
    }

    function f(e) {
        var t = g(e);
        t && "OBJECT" === t.nodeName.toUpperCase() && (G.ie ? (t.style.display = "none", function e() {
            if (4 == t.readyState) {
                for (var n in t) "function" == typeof t[n] && (t[n] = null);
                t.parentNode.removeChild(t)
            } else setTimeout(e, 10)
        }()) : t.parentNode.removeChild(t))
    }

    function p(e) {
        return e && e.nodeType && 1 === e.nodeType
    }

    function m(e) {
        return p(e) ? e.id : e
    }

    function g(e) {
        if (p(e)) return e;
        var t = null;
        try {
            t = F.getElementById(e)
        } catch (e) {}
        return t
    }

    function v(e) {
        return F.createElement(e)
    }

    function y(e) {
        return parseInt(e, 10)
    }

    function _(e, t, n) {
        e.attachEvent(t, n), Y[Y.length] = [e, t, n]
    }

    function b(e) {
        e += "";
        var t = G.pv,
            n = e.split(".");
        return n[0] = y(n[0]), n[1] = y(n[1]) || 0, n[2] = y(n[2]) || 0, t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2]
    }

    function w(e, t, n, i) {
        var r = F.getElementsByTagName("head")[0];
        if (r) {
            var o = "string" == typeof n ? n : "screen";
            if (i && (M = null, E = null), !M || E != o) {
                var s = v("style");
                s.setAttribute("type", "text/css"), s.setAttribute("media", o), M = r.appendChild(s), G.ie && typeof F.styleSheets !== A && F.styleSheets.length > 0 && (M = F.styleSheets[F.styleSheets.length - 1]), E = o
            }
            M && (typeof M.addRule !== A ? M.addRule(e, t) : typeof F.createTextNode !== A && M.appendChild(F.createTextNode(e + " {" + t + "}")))
        }
    }

    function x(e, t) {
        if (V) {
            var n = t ? "visible" : "hidden",
                i = g(e);
            U && i ? i.style.visibility = n : "string" == typeof e && w("#" + e, "visibility:" + n)
        }
    }

    function k(e) {
        var t = /[\\\"<>\.;]/,
            n = null !== t.exec(e);
        return n && typeof encodeURIComponent !== A ? encodeURIComponent(e) : e
    }
    var S, T, C, D, M, E, A = "undefined",
        P = "object",
        O = "Shockwave Flash",
        I = "ShockwaveFlash.ShockwaveFlash",
        N = "application/x-shockwave-flash",
        j = "SWFObjectExprInst",
        R = "onreadystatechange",
        L = window,
        F = document,
        H = navigator,
        z = !1,
        W = [],
        $ = [],
        B = [],
        Y = [],
        U = !1,
        q = !1,
        V = !0,
        Q = !1,
        G = function() {
            var e = typeof F.getElementById !== A && typeof F.getElementsByTagName !== A && typeof F.createElement !== A,
                t = H.userAgent.toLowerCase(),
                n = H.platform.toLowerCase(),
                i = /win/.test(n ? n : t),
                r = /mac/.test(n ? n : t),
                o = !!/webkit/.test(t) && parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")),
                s = "Microsoft Internet Explorer" === H.appName,
                a = [0, 0, 0],
                l = null;
            if (typeof H.plugins !== A && typeof H.plugins[O] === P) l = H.plugins[O].description, l && typeof H.mimeTypes !== A && H.mimeTypes[N] && H.mimeTypes[N].enabledPlugin && (z = !0, s = !1, l = l.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), a[0] = y(l.replace(/^(.*)\..*$/, "$1")), a[1] = y(l.replace(/^.*\.(.*)\s.*$/, "$1")), a[2] = /[a-zA-Z]/.test(l) ? y(l.replace(/^.*[a-zA-Z]+(.*)$/, "$1")) : 0);
            else if (typeof L.ActiveXObject !== A) try {
                var u = new ActiveXObject(I);
                u && (l = u.GetVariable("$version"), l && (s = !0, l = l.split(" ")[1].split(","), a = [y(l[0]), y(l[1]), y(l[2])]))
            } catch (e) {}
            return {
                w3: e,
                pv: a,
                wk: o,
                ie: s,
                win: i,
                mac: r
            }
        }();
    return ! function() {
        G.w3 && ((typeof F.readyState !== A && ("complete" === F.readyState || "interactive" === F.readyState) || typeof F.readyState === A && (F.getElementsByTagName("body")[0] || F.body)) && e(), U || (typeof F.addEventListener !== A && F.addEventListener("DOMContentLoaded", e, !1), G.ie && (F.attachEvent(R, function t() {
            "complete" === F.readyState && (F.detachEvent(R, t), e())
        }), L == top && ! function t() {
            if (!U) {
                try {
                    F.documentElement.doScroll("left")
                } catch (e) {
                    return void setTimeout(t, 0)
                }
                e()
            }
        }()), G.wk && ! function t() {
            return U ? void 0 : /loaded|complete/.test(F.readyState) ? void e() : void setTimeout(t, 0)
        }()))
    }(), W[0] = function() {
        z ? i() : r()
    }, ! function() {
        G.ie && window.attachEvent("onunload", function() {
            for (var e = Y.length, t = 0; e > t; t++) Y[t][0].detachEvent(Y[t][1], Y[t][2]);
            for (var n = B.length, i = 0; n > i; i++) f(B[i]);
            for (var r in G) G[r] = null;
            G = null;
            for (var o in swfobject) swfobject[o] = null;
            swfobject = null
        })
    }(), {
        registerObject: function(e, t, n, i) {
            if (G.w3 && e && t) {
                var r = {};
                r.id = e, r.swfVersion = t, r.expressInstall = n, r.callbackFn = i, $[$.length] = r, x(e, !1)
            } else i && i({
                success: !1,
                id: e
            })
        },
        getObjectById: function(e) {
            return G.w3 ? o(e) : void 0
        },
        embedSWF: function(e, n, i, r, o, l, u, c, d, f) {
            var p = m(n),
                g = {
                    success: !1,
                    id: p
                };
            G.w3 && (!G.wk || G.wk >= 312) && e && n && i && r && o ? (x(p, !1), t(function() {
                i += "", r += "";
                var t = {};
                if (d && typeof d === P)
                    for (var m in d) t[m] = d[m];
                t.data = e, t.width = i, t.height = r;
                var v = {};
                if (c && typeof c === P)
                    for (var y in c) v[y] = c[y];
                if (u && typeof u === P)
                    for (var _ in u)
                        if (u.hasOwnProperty(_)) {
                            var w = Q ? encodeURIComponent(_) : _,
                                k = Q ? encodeURIComponent(u[_]) : u[_];
                            typeof v.flashvars !== A ? v.flashvars += "&" + w + "=" + k : v.flashvars = w + "=" + k
                        }
                if (b(o)) {
                    var S = h(t, v, n);
                    t.id == p && x(p, !0), g.success = !0, g.ref = S, g.id = S.id
                } else {
                    if (l && s()) return t.data = l, void a(t, v, n, f);
                    x(p, !0)
                }
                f && f(g)
            })) : f && f(g)
        },
        switchOffAutoHideShow: function() {
            V = !1
        },
        enableUriEncoding: function(e) {
            Q = typeof e === A || e
        },
        ua: G,
        getFlashPlayerVersion: function() {
            return {
                major: G.pv[0],
                minor: G.pv[1],
                release: G.pv[2]
            }
        },
        hasFlashPlayerVersion: b,
        createSWF: function(e, t, n) {
            return G.w3 ? h(e, t, n) : void 0
        },
        showExpressInstall: function(e, t, n, i) {
            G.w3 && s() && a(e, t, n, i)
        },
        removeSWF: function(e) {
            G.w3 && f(e)
        },
        createCSS: function(e, t, n, i) {
            G.w3 && w(e, t, n, i)
        },
        addDomLoadEvent: t,
        addLoadEvent: n,
        getQueryParamValue: function(e) {
            var t = F.location.search || F.location.hash;
            if (t) {
                if (/\?/.test(t) && (t = t.split("?")[1]), !e) return k(t);
                for (var n = t.split("&"), i = 0; i < n.length; i++)
                    if (n[i].substring(0, n[i].indexOf("=")) == e) return k(n[i].substring(n[i].indexOf("=") + 1))
            }
            return ""
        },
        expressInstallCallback: function() {
            if (q) {
                var e = g(j);
                e && S && (e.parentNode.replaceChild(S, e), T && (x(T, !0), G.ie && (S.style.display = "block")), C && C(D)), q = !1
            }
        },
        version: "2.3"
    }
}), Date.CultureInfo = {
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
            i = function(e, t) {
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
            return 0 === e.compareTo(t)
        }, e.getDayNumberFromName = function(e) {
            for (var t = n.dayNames, i = n.abbreviatedDayNames, r = n.shortestDayNames, o = e.toLowerCase(), s = 0; s < t.length; s++)
                if (t[s].toLowerCase() == o || i[s].toLowerCase() == o || r[s].toLowerCase() == o) return s;
            return -1
        }, e.getMonthNumberFromName = function(e) {
            for (var t = n.monthNames, i = n.abbreviatedMonthNames, r = e.toLowerCase(), o = 0; o < t.length; o++)
                if (t[o].toLowerCase() == r || i[o].toLowerCase() == r) return o;
            return -1
        }, e.isLeapYear = function(e) {
            return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
        }, e.getDaysInMonth = function(t, n) {
            return [31, e.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n]
        }, e.getTimezoneAbbreviation = function(e) {
            for (var t = n.timezones, i = 0; i < t.length; i++)
                if (t[i].offset === e) return t[i].name;
            return null
        }, e.getTimezoneOffset = function(e) {
            for (var t = n.timezones, i = 0; i < t.length; i++)
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
            return 1 === this.compareTo(e || new Date)
        }, t.isBefore = function(e) {
            return this.compareTo(e || new Date) === -1
        }, t.isToday = function() {
            return this.isSameDay(new Date)
        }, t.isSameDay = function(e) {
            return this.clone().clearTime().equals(e.clone().clearTime())
        }, t.addMilliseconds = function(e) {
            return this.setMilliseconds(this.getMilliseconds() + e), this
        }, t.addSeconds = function(e) {
            return this.addMilliseconds(1e3 * e)
        }, t.addMinutes = function(e) {
            return this.addMilliseconds(6e4 * e)
        }, t.addHours = function(e) {
            return this.addMilliseconds(36e5 * e)
        }, t.addDays = function(e) {
            return this.setDate(this.getDate() + e), this
        }, t.addWeeks = function(e) {
            return this.addDays(7 * e)
        }, t.addMonths = function(t) {
            var n = this.getDate();
            return this.setDate(1), this.setMonth(this.getMonth() + t), this.setDate(Math.min(n, e.getDaysInMonth(this.getFullYear(), this.getMonth()))), this
        }, t.addYears = function(e) {
            return this.addMonths(12 * e)
        }, t.add = function(e) {
            if ("number" == typeof e) return this._orient = e, this;
            var t = e;
            return t.milliseconds && this.addMilliseconds(t.milliseconds), t.seconds && this.addSeconds(t.seconds), t.minutes && this.addMinutes(t.minutes), t.hours && this.addHours(t.hours), t.weeks && this.addWeeks(t.weeks), t.months && this.addMonths(t.months), t.years && this.addYears(t.years), t.days && this.addDays(t.days), this
        };
        var r, o, s;
        t.getWeek = function() {
            var e, t, n, i, a, l, u, c, h, d;
            return r = r ? r : this.getFullYear(), o = o ? o : this.getMonth() + 1, s = s ? s : this.getDate(), o <= 2 ? (e = r - 1, t = (e / 4 | 0) - (e / 100 | 0) + (e / 400 | 0), n = ((e - 1) / 4 | 0) - ((e - 1) / 100 | 0) + ((e - 1) / 400 | 0), h = t - n, a = 0, l = s - 1 + 31 * (o - 1)) : (e = r, t = (e / 4 | 0) - (e / 100 | 0) + (e / 400 | 0), n = ((e - 1) / 4 | 0) - ((e - 1) / 100 | 0) + ((e - 1) / 400 | 0), h = t - n, a = h + 1, l = s + (153 * (o - 3) + 2) / 5 + 58 + h), u = (e + t) % 7, i = (l + u - a) % 7, c = l + 3 - i | 0, d = c < 0 ? 53 - ((u - h) / 5 | 0) : c > 364 + h ? 1 : (c / 7 | 0) + 1, r = o = s = null, d
        }, t.getISOWeek = function() {
            return r = this.getUTCFullYear(), o = this.getUTCMonth() + 1, s = this.getUTCDate(), i(this.getWeek())
        }, t.setWeek = function(e) {
            return this.moveToDayOfWeek(1).addWeeks(e - this.getWeek())
        }, e._validate = function(e, t, n, i) {
            if ("undefined" == typeof e) return !1;
            if ("number" != typeof e) throw new TypeError(e + " is not a Number.");
            if (e < t || e > n) throw new RangeError(e + " is not a valid value for " + i + ".");
            return !0
        }, e.validateMillisecond = function(t) {
            return e._validate(t, 0, 999, "millisecond")
        }, e.validateSecond = function(t) {
            return e._validate(t, 0, 59, "second")
        }, e.validateMinute = function(t) {
            return e._validate(t, 0, 59, "minute")
        }, e.validateHour = function(t) {
            return e._validate(t, 0, 23, "hour")
        }, e.validateDay = function(t, n, i) {
            return e._validate(t, 1, e.getDaysInMonth(n, i), "day")
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
            return this.addDays(0 === n ? n += 7 * (t || 1) : n)
        }, t.moveToMonth = function(e, t) {
            var n = (e - this.getMonth() + 12 * (t || 1)) % 12;
            return this.addMonths(0 === n ? n += 12 * (t || 1) : n)
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
            var e, t = this.getTimezoneOffset() * -10 / 6;
            return t < 0 ? (e = (t - 1e4).toString(), e.charAt(0) + e.substr(2)) : (e = (t + 1e4).toString(), "+" + e.substr(1))
        }, t.getElapsed = function(e) {
            return (e || new Date) - this
        }, t.toISOString || (t.toISOString = function() {
            function e(e) {
                return e < 10 ? "0" + e : e
            }
            return '"' + this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + 'Z"'
        }), t._toString = t.toString, t.toString = function(e) {
            var t = this;
            if (e && 1 == e.length) {
                var r = n.formatPatterns;
                switch (t.t = t.toString, e) {
                    case "d":
                        return t.t(r.shortDate);
                    case "D":
                        return t.t(r.longDate);
                    case "F":
                        return t.t(r.fullDateTime);
                    case "m":
                        return t.t(r.monthDay);
                    case "r":
                        return t.t(r.rfc1123);
                    case "s":
                        return t.t(r.sortableDateTime);
                    case "t":
                        return t.t(r.shortTime);
                    case "T":
                        return t.t(r.longTime);
                    case "u":
                        return t.t(r.universalSortableDateTime);
                    case "y":
                        return t.t(r.yearMonth)
                }
            }
            var o = function(e) {
                switch (1 * e) {
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
                if ("\\" === e.charAt(0)) return e.replace("\\", "");
                switch (t.h = t.getHours, e) {
                    case "hh":
                        return i(t.h() < 13 ? 0 === t.h() ? 12 : t.h() : t.h() - 12);
                    case "h":
                        return t.h() < 13 ? 0 === t.h() ? 12 : t.h() : t.h() - 12;
                    case "HH":
                        return i(t.h());
                    case "H":
                        return t.h();
                    case "mm":
                        return i(t.getMinutes());
                    case "m":
                        return t.getMinutes();
                    case "ss":
                        return i(t.getSeconds());
                    case "s":
                        return t.getSeconds();
                    case "yyyy":
                        return i(t.getFullYear(), 4);
                    case "yy":
                        return i(t.getFullYear());
                    case "dddd":
                        return n.dayNames[t.getDay()];
                    case "ddd":
                        return n.abbreviatedDayNames[t.getDay()];
                    case "dd":
                        return i(t.getDate());
                    case "d":
                        return t.getDate();
                    case "MMMM":
                        return n.monthNames[t.getMonth()];
                    case "MMM":
                        return n.abbreviatedMonthNames[t.getMonth()];
                    case "MM":
                        return i(t.getMonth() + 1);
                    case "M":
                        return t.getMonth() + 1;
                    case "t":
                        return t.h() < 12 ? n.amDesignator.substring(0, 1) : n.pmDesignator.substring(0, 1);
                    case "tt":
                        return t.h() < 12 ? n.amDesignator : n.pmDesignator;
                    case "S":
                        return o(t.getDate());
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
            i = Number.prototype;
        t._orient = 1, t._nth = null, t._is = !1, t._same = !1, t._isSecond = !1, i._dateElement = "day", t.next = function() {
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
            return !!this._is && (this._is = !1, !this.is().sat() && !this.is().sun())
        }, t.at = function(t) {
            return "string" == typeof t ? e.parse(this.toString("d") + " " + t) : this.set(t)
        }, i.fromNow = i.after = function(e) {
            var t = {};
            return t[this._dateElement] = this, (e ? e.clone() : new Date).add(t)
        }, i.ago = i.before = function(e) {
            var t = {};
            return t[this._dateElement] = this * -1, (e ? e.clone() : new Date).add(t)
        };
        var r, o = "sunday monday tuesday wednesday thursday friday saturday".split(/\s/),
            s = "january february march april may june july august september october november december".split(/\s/),
            a = "Millisecond Second Minute Hour Day Week Month Year".split(/\s/),
            l = "Milliseconds Seconds Minutes Hours Date Week Month FullYear".split(/\s/),
            u = "final first second third fourth fifth".split(/\s/);
        t.toObject = function() {
            for (var e = {}, t = 0; t < a.length; t++) e[a[t].toLowerCase()] = this["get" + l[t]]();
            return e
        }, e.fromObject = function(e) {
            return e.week = null, Date.today().set(e)
        };
        for (var c = function(t) {
                return function() {
                    if (this._is) return this._is = !1, this.getDay() == t;
                    if (null !== this._nth) {
                        this._isSecond && this.addSeconds(this._orient * -1), this._isSecond = !1;
                        var n = this._nth;
                        this._nth = null;
                        var i = this.clone().moveToLastDayOfMonth();
                        if (this.moveToNthOccurrence(t, n), this > i) throw new RangeError(e.getDayName(t) + " does not occur " + n + " times in the month of " + e.getMonthName(i.getMonth()) + " " + i.getFullYear() + ".");
                        return this
                    }
                    return this.moveToDayOfWeek(t, this._orient)
                }
            }, h = function(t) {
                return function() {
                    var i = e.today(),
                        r = t - i.getDay();
                    return 0 === t && 1 === n.firstDayOfWeek && 0 !== i.getDay() && (r += 7), i.addDays(r)
                }
            }, d = 0; d < o.length; d++) e[o[d].toUpperCase()] = e[o[d].toUpperCase().substring(0, 3)] = d, e[o[d]] = e[o[d].substring(0, 3)] = h(d), t[o[d]] = t[o[d].substring(0, 3)] = c(d);
        for (var f = function(e) {
                return function() {
                    return this._is ? (this._is = !1, this.getMonth() === e) : this.moveToMonth(e, this._orient)
                }
            }, p = function(t) {
                return function() {
                    return e.today().set({
                        month: t,
                        day: 1
                    })
                }
            }, m = 0; m < s.length; m++) e[s[m].toUpperCase()] = e[s[m].toUpperCase().substring(0, 3)] = m, e[s[m]] = e[s[m].substring(0, 3)] = p(m), t[s[m]] = t[s[m].substring(0, 3)] = f(m);
        for (var g = function(e) {
                return function() {
                    if (this._isSecond) return this._isSecond = !1, this;
                    if (this._same) {
                        this._same = this._is = !1;
                        for (var t = this.toObject(), n = (arguments[0] || new Date).toObject(), i = "", r = e.toLowerCase(), o = a.length - 1; o > -1; o--) {
                            if (i = a[o].toLowerCase(), t[i] != n[i]) return !1;
                            if (r == i) break
                        }
                        return !0
                    }
                    return "s" != e.substring(e.length - 1) && (e += "s"), this["add" + e](this._orient)
                }
            }, v = function(e) {
                return function() {
                    return this._dateElement = e, this
                }
            }, y = 0; y < a.length; y++) r = a[y].toLowerCase(), t[r] = t[r + "s"] = g(a[y]), i[r] = i[r + "s"] = v(r);
        t._ss = g("Second");
        for (var _ = function(e) {
                return function(t) {
                    return this._same ? this._ss(arguments[0]) : t || 0 === t ? this.moveToNthOccurrence(t, e) : (this._nth = e, 2 !== e || void 0 !== t && null !== t ? this : (this._isSecond = !0, this.addSeconds(this._orient)))
                }
            }, b = 0; b < u.length; b++) t[u[b]] = _(0 === b ? -1 : b)
    }(),
    function() {
        Date.Parsing = {
            Exception: function(e) {
                this.message = "Parse error at '" + e.substring(0, 10) + " ...'"
            }
        };
        for (var e = Date.Parsing, t = e.Operators = {
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
                        for (var n = [], i = null; t.length;) {
                            try {
                                i = e.call(this, t)
                            } catch (e) {
                                n.push(i[0]), t = i[1];
                                continue
                            }
                            break
                        }
                        return [n, t]
                    }
                },
                many: function(e) {
                    return function(t) {
                        for (var n = [], i = null; t.length;) {
                            try {
                                i = e.call(this, t)
                            } catch (e) {
                                return [n, t]
                            }
                            n.push(i[0]), t = i[1]
                        }
                        return [n, t]
                    }
                },
                optional: function(e) {
                    return function(t) {
                        var n = null;
                        try {
                            n = e.call(this, t)
                        } catch (e) {
                            return [null, t]
                        }
                        return [n[0], n[1]]
                    }
                },
                not: function(t) {
                    return function(n) {
                        try {
                            t.call(this, n)
                        } catch (e) {
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
                    for (var e = arguments[0], n = Array.prototype.slice.call(arguments, 1), i = [], r = 0; r < e.length; r++) i.push(t.each(e[r], n));
                    return i
                },
                cache: function(t) {
                    var n = {},
                        i = null;
                    return function(r) {
                        try {
                            i = n[r] = n[r] || t.call(this, r)
                        } catch (e) {
                            i = n[r] = e
                        }
                        if (i instanceof e.Exception) throw i;
                        return i
                    }
                },
                any: function() {
                    var t = arguments;
                    return function(n) {
                        for (var i = null, r = 0; r < t.length; r++)
                            if (null != t[r]) {
                                try {
                                    i = t[r].call(this, n)
                                } catch (e) {
                                    i = null
                                }
                                if (i) return i
                            }
                        throw new e.Exception(n)
                    }
                },
                each: function() {
                    var t = arguments;
                    return function(n) {
                        for (var i = [], r = null, o = 0; o < t.length; o++)
                            if (null != t[o]) {
                                try {
                                    r = t[o].call(this, n)
                                } catch (t) {
                                    throw new e.Exception(n)
                                }
                                i.push(r[0]), n = r[1]
                            }
                        return [i, n]
                    }
                },
                all: function() {
                    var e = arguments,
                        t = t;
                    return t.each(t.optional(e))
                },
                sequence: function(n, i, r) {
                    return i = i || t.rtoken(/^\s*/), r = r || null, 1 == n.length ? n[0] : function(t) {
                        for (var o = null, s = null, a = [], l = 0; l < n.length; l++) {
                            try {
                                o = n[l].call(this, t)
                            } catch (e) {
                                break
                            }
                            a.push(o[0]);
                            try {
                                s = i.call(this, o[1])
                            } catch (e) {
                                s = null;
                                break
                            }
                            t = s[1]
                        }
                        if (!o) throw new e.Exception(t);
                        if (s) throw new e.Exception(s[1]);
                        if (r) try {
                            o = r.call(this, o[1])
                        } catch (t) {
                            throw new e.Exception(o[1])
                        }
                        return [a, o ? o[1] : t]
                    }
                },
                between: function(e, n, i) {
                    i = i || e;
                    var o = t.each(t.ignore(e), n, t.ignore(i));
                    return function(e) {
                        var t = o.call(this, e);
                        return [
                            [t[0][0], r[0][2]], t[1]
                        ]
                    }
                },
                list: function(e, n, i) {
                    return n = n || t.rtoken(/^\s*/), i = i || null, e instanceof Array ? t.each(t.product(e.slice(0, -1), t.ignore(n)), e.slice(-1), t.ignore(i)) : t.each(t.many(t.each(e, t.ignore(n))), px, t.ignore(i))
                },
                set: function(n, i, r) {
                    return i = i || t.rtoken(/^\s*/), r = r || null,
                        function(o) {
                            for (var s = null, a = null, l = null, u = null, c = [
                                    [], o
                                ], h = !1, d = 0; d < n.length; d++) {
                                l = null, a = null, s = null, h = 1 == n.length;
                                try {
                                    s = n[d].call(this, o)
                                } catch (e) {
                                    continue
                                }
                                if (u = [
                                        [s[0]], s[1]
                                    ], s[1].length > 0 && !h) try {
                                    l = i.call(this, s[1])
                                } catch (e) {
                                    h = !0
                                } else h = !0;
                                if (h || 0 !== l[1].length || (h = !0), !h) {
                                    for (var f = [], p = 0; p < n.length; p++) d != p && f.push(n[p]);
                                    a = t.set(f, i).call(this, l[1]), a[0].length > 0 && (u[0] = u[0].concat(a[0]), u[1] = a[1])
                                }
                                if (u[1].length < c[1].length && (c = u), 0 === c[1].length) break
                            }
                            if (0 === c[0].length) return c;
                            if (r) {
                                try {
                                    l = r.call(this, c[1])
                                } catch (t) {
                                    throw new e.Exception(c[1])
                                }
                                c[1] = l[1]
                            }
                            return c
                        }
                },
                forward: function(e, t) {
                    return function(n) {
                        return e[t].call(this, n)
                    }
                },
                replace: function(e, t) {
                    return function(n) {
                        var i = e.call(this, n);
                        return [t, i[1]]
                    }
                },
                process: function(e, t) {
                    return function(n) {
                        var i = e.call(this, n);
                        return [t.call(this, i[0]), i[1]]
                    }
                },
                min: function(t, n) {
                    return function(i) {
                        var r = n.call(this, i);
                        if (r[0].length < t) throw new e.Exception(i);
                        return r
                    }
                }
            }, n = function(e) {
                return function() {
                    var t = null,
                        n = [];
                    if (arguments.length > 1 ? t = Array.prototype.slice.call(arguments) : arguments[0] instanceof Array && (t = arguments[0]), !t) return e.apply(null, arguments);
                    for (var i = 0, r = t.shift(); i < r.length; i++) return t.unshift(r[i]), n.push(e.apply(null, t)), t.shift(), n
                }
            }, i = "optional not ignore cache".split(/\s/), o = 0; o < i.length; o++) t[i[o]] = n(t[i[o]]);
        for (var s = function(e) {
                return function() {
                    return arguments[0] instanceof Array ? e.apply(null, arguments[0]) : e.apply(null, arguments)
                }
            }, a = "each any all".split(/\s/), l = 0; l < a.length; l++) t[a[l]] = s(t[a[l]])
    }(),
    function() {
        var e = Date,
            t = (e.prototype, e.CultureInfo),
            n = function(e) {
                for (var t = [], i = 0; i < e.length; i++) e[i] instanceof Array ? t = t.concat(n(e[i])) : e[i] && t.push(e[i]);
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
                    this.month = 3 == e.length ? "jan feb mar apr may jun jul aug sep oct nov dec".indexOf(e) / 4 : Number(e) - 1
                }
            },
            year: function(e) {
                return function() {
                    var n = Number(e);
                    this.year = e.length > 2 ? n : n + (n + 2e3 < t.twoDigitYearMax ? 2e3 : 1900)
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
                var i = new Date;
                if (!this.hour && !this.minute || this.month || this.year || this.day || (this.day = i.getDate()), this.year || (this.year = i.getFullYear()), this.month || 0 === this.month || (this.month = i.getMonth()), this.day || (this.day = 1), this.hour || (this.hour = 0), this.minute || (this.minute = 0), this.second || (this.second = 0), this.meridian && this.hour && ("p" == this.meridian && this.hour < 12 ? this.hour = this.hour + 12 : "a" == this.meridian && 12 == this.hour && (this.hour = 0)), this.day > e.getDaysInMonth(this.year, this.month)) throw new RangeError(this.day + " is not a valid value for days.");
                var r = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second);
                return this.timezone ? r.set({
                    timezone: this.timezone
                }) : this.timezoneOffset && r.set({
                    timezoneOffset: this.timezoneOffset
                }), r
            },
            finish: function(t) {
                if (t = t instanceof Array ? n(t) : [t], 0 === t.length) return null;
                for (var i = 0; i < t.length; i++) "function" == typeof t[i] && t[i].call(this);
                var r = e.today();
                if (this.now && !this.unit && !this.operator) return new Date;
                this.now && (r = new Date);
                var o, s, a, l = !!(this.days && null !== this.days || this.orient || this.operator);
                if (a = "past" == this.orient || "subtract" == this.operator ? -1 : 1, this.now || "hour minute second".indexOf(this.unit) == -1 || r.setTimeToNow(), (this.month || 0 === this.month) && "year day hour minute second".indexOf(this.unit) != -1 && (this.value = this.month + 1, this.month = null, l = !0), !l && this.weekday && !this.day && !this.days) {
                    var u = Date[this.weekday]();
                    this.day = u.getDate(), this.month || (this.month = u.getMonth()), this.year = u.getFullYear()
                }
                if (l && this.weekday && "month" != this.unit && (this.unit = "day", o = e.getDayNumberFromName(this.weekday) - r.getDay(), s = 7, this.days = o ? (o + a * s) % s : a * s), this.month && "day" == this.unit && this.operator && (this.value = this.month + 1, this.month = null), null != this.value && null != this.month && null != this.year && (this.day = 1 * this.value), this.month && !this.day && this.value && (r.set({
                        day: 1 * this.value
                    }), l || (this.day = 1 * this.value)), this.month || !this.value || "month" != this.unit || this.now || (this.month = this.value, l = !0), l && (this.month || 0 === this.month) && "year" != this.unit && (this.unit = "month", o = this.month - r.getMonth(), s = 12, this.months = o ? (o + a * s) % s : a * s, this.month = null), this.unit || (this.unit = "day"), !this.value && this.operator && null !== this.operator && this[this.unit + "s"] && null !== this[this.unit + "s"] ? this[this.unit + "s"] = this[this.unit + "s"] + ("add" == this.operator ? 1 : -1) + (this.value || 0) * a : null != this[this.unit + "s"] && null == this.operator || (this.value || (this.value = 1), this[this.unit + "s"] = this.value * a), this.meridian && this.hour && ("p" == this.meridian && this.hour < 12 ? this.hour = this.hour + 12 : "a" == this.meridian && 12 == this.hour && (this.hour = 0)), this.weekday && !this.day && !this.days) {
                    var u = Date[this.weekday]();
                    this.day = u.getDate(), u.getMonth() !== r.getMonth() && (this.month = u.getMonth())
                }
                return !this.month && 0 !== this.month || this.day || (this.day = 1), this.orient || this.operator || "week" != this.unit || !this.value || this.day || this.month ? (l && this.timezone && this.day && this.days && (this.day = this.days), l ? r.add(this) : r.set(this)) : Date.today().setWeek(this.value)
            }
        };
        var i, r = e.Parsing.Operators,
            o = e.Grammar,
            s = e.Translator;
        o.datePartDelimiter = r.rtoken(/^([\s\-\.\,\/\x27]+)/), o.timePartDelimiter = r.stoken(":"), o.whiteSpace = r.rtoken(/^\s*/), o.generalDelimiter = r.rtoken(/^(([\s\,]|at|@|on)+)/);
        var a = {};
        o.ctoken = function(e) {
            var n = a[e];
            if (!n) {
                for (var i = t.regexPatterns, o = e.split(/\s+/), s = [], l = 0; l < o.length; l++) s.push(r.replace(r.rtoken(i[o[l]]), o[l]));
                n = a[e] = r.any.apply(null, s)
            }
            return n
        }, o.ctoken2 = function(e) {
            return r.rtoken(t.regexPatterns[e])
        }, o.h = r.cache(r.process(r.rtoken(/^(0[0-9]|1[0-2]|[1-9])/), s.hour)), o.hh = r.cache(r.process(r.rtoken(/^(0[0-9]|1[0-2])/), s.hour)), o.H = r.cache(r.process(r.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/), s.hour)), o.HH = r.cache(r.process(r.rtoken(/^([0-1][0-9]|2[0-3])/), s.hour)), o.m = r.cache(r.process(r.rtoken(/^([0-5][0-9]|[0-9])/), s.minute)), o.mm = r.cache(r.process(r.rtoken(/^[0-5][0-9]/), s.minute)), o.s = r.cache(r.process(r.rtoken(/^([0-5][0-9]|[0-9])/), s.second)), o.ss = r.cache(r.process(r.rtoken(/^[0-5][0-9]/), s.second)), o.hms = r.cache(r.sequence([o.H, o.m, o.s], o.timePartDelimiter)), o.t = r.cache(r.process(o.ctoken2("shortMeridian"), s.meridian)), o.tt = r.cache(r.process(o.ctoken2("longMeridian"), s.meridian)), o.z = r.cache(r.process(r.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/), s.timezone)), o.zz = r.cache(r.process(r.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/), s.timezone)), o.zzz = r.cache(r.process(o.ctoken2("timezone"), s.timezone)), o.timeSuffix = r.each(r.ignore(o.whiteSpace), r.set([o.tt, o.zzz])), o.time = r.each(r.optional(r.ignore(r.stoken("T"))), o.hms, o.timeSuffix), o.d = r.cache(r.process(r.each(r.rtoken(/^([0-2]\d|3[0-1]|\d)/), r.optional(o.ctoken2("ordinalSuffix"))), s.day)), o.dd = r.cache(r.process(r.each(r.rtoken(/^([0-2]\d|3[0-1])/), r.optional(o.ctoken2("ordinalSuffix"))), s.day)), o.ddd = o.dddd = r.cache(r.process(o.ctoken("sun mon tue wed thu fri sat"), function(e) {
            return function() {
                this.weekday = e
            }
        })), o.M = r.cache(r.process(r.rtoken(/^(1[0-2]|0\d|\d)/), s.month)), o.MM = r.cache(r.process(r.rtoken(/^(1[0-2]|0\d)/), s.month)), o.MMM = o.MMMM = r.cache(r.process(o.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), s.month)), o.y = r.cache(r.process(r.rtoken(/^(\d\d?)/), s.year)), o.yy = r.cache(r.process(r.rtoken(/^(\d\d)/), s.year)), o.yyy = r.cache(r.process(r.rtoken(/^(\d\d?\d?\d?)/), s.year)), o.yyyy = r.cache(r.process(r.rtoken(/^(\d\d\d\d)/), s.year)), i = function() {
            return r.each(r.any.apply(null, arguments), r.not(o.ctoken2("timeContext")))
        }, o.day = i(o.d, o.dd), o.month = i(o.M, o.MMM), o.year = i(o.yyyy, o.yy), o.orientation = r.process(o.ctoken("past future"), function(e) {
            return function() {
                this.orient = e
            }
        }), o.operator = r.process(o.ctoken("add subtract"), function(e) {
            return function() {
                this.operator = e
            }
        }), o.rday = r.process(o.ctoken("yesterday tomorrow today now"), s.rday), o.unit = r.process(o.ctoken("second minute hour day week month year"), function(e) {
            return function() {
                this.unit = e
            }
        }), o.value = r.process(r.rtoken(/^\d\d?(st|nd|rd|th)?/), function(e) {
            return function() {
                this.value = e.replace(/\D/g, "")
            }
        }), o.expression = r.set([o.rday, o.operator, o.value, o.unit, o.orientation, o.ddd, o.MMM]), i = function() {
            return r.set(arguments, o.datePartDelimiter)
        }, o.mdy = i(o.ddd, o.month, o.day, o.year), o.ymd = i(o.ddd, o.year, o.month, o.day), o.dmy = i(o.ddd, o.day, o.month, o.year), o.date = function(e) {
            return (o[t.dateElementOrder] || o.mdy).call(this, e)
        }, o.format = r.process(r.many(r.any(r.process(r.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/), function(t) {
            if (o[t]) return o[t];
            throw e.Parsing.Exception(t)
        }), r.process(r.rtoken(/^[^dMyhHmstz]+/), function(e) {
            return r.ignore(r.stoken(e))
        }))), function(e) {
            return r.process(r.each.apply(null, e), s.finishExact)
        });
        var l = {},
            u = function(e) {
                return l[e] = l[e] || o.format(e)[0]
            };
        o.formats = function(e) {
            if (e instanceof Array) {
                for (var t = [], n = 0; n < e.length; n++) t.push(u(e[n]));
                return r.any.apply(null, t)
            }
            return u(e)
        }, o._formats = o.formats(['"yyyy-MM-ddTHH:mm:ssZ"', "yyyy-MM-ddTHH:mm:ssZ", "yyyy-MM-ddTHH:mm:ssz", "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-ddTHH:mmZ", "yyyy-MM-ddTHH:mmz", "yyyy-MM-ddTHH:mm", "ddd, MMM dd, yyyy H:mm:ss tt", "ddd MMM d yyyy HH:mm:ss zzz", "MMddyyyy", "ddMMyyyy", "Mddyyyy", "ddMyyyy", "Mdyyyy", "dMyyyy", "yyyy", "Mdyy", "dMyy", "d"]), o._start = r.process(r.set([o.date, o.time, o.expression], o.generalDelimiter, o.whiteSpace), s.finish), o.start = function(e) {
            try {
                var t = o._formats.call({}, e);
                if (0 === t[1].length) return t
            } catch (e) {}
            return o._start.call({}, e)
        }, e._parse = e.parse, e.parse = function(t) {
            var n = null;
            if (!t) return null;
            if (t instanceof Date) return t;
            try {
                n = e.Grammar.start.call({}, t.replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1"))
            } catch (e) {
                return null
            }
            return 0 === n[1].length ? n[0] : null
        }, e.getParseFunction = function(t) {
            var n = e.Grammar.formats(t);
            return function(e) {
                var t = null;
                try {
                    t = n.call({}, e)
                } catch (e) {
                    return null
                }
                return 0 === t[1].length ? t[0] : null
            }
        }, e.parseExact = function(t, n) {
            return e.getParseFunction(n)(t)
        }
    }(),
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Client = t() : (e.Minixperiment = e.Minixperiment || {}, e.Minixperiment.Client = t())
    }(this, function() {
        return function(e) {
            function t(i) {
                if (n[i]) return n[i].exports;
                var r = n[i] = {
                    exports: {},
                    id: i,
                    loaded: !1
                };
                return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.p = "", t(0)
        }([function(e, t, n) {
            function i(e) {
                var t = r(e);
                if (null !== t) throw t;
                this._config = o(e), this._Promise = e.Promise, this._deviceID = e.deviceID, this._platform = e.platform, this._username = e.login || null, this._defaults = s(e.Promise, e.defaults, e.overrides || {}), this._assignments = a(e.Promise, this._config, this._defaults, e.overrides || {}, this._deviceID)
            }

            function r(e) {
                return e.defaults && Object.getPrototypeOf(e.defaults) === Object.prototype ? "string" != typeof e.deviceID || 0 === e.deviceID.length ? new Error("Invalid device ID; expected non-empty string, got `" + e.deviceID + "`") : "string" != typeof e.platform || 0 === e.platform.length ? new Error("Invalid platform; expected non-empty string, got `" + e.platform + "`") : "object" != typeof e.provider || "function" != typeof e.provider.getExperimentConfiguration ? new Error("Invalid provider") : "function" != typeof e.Promise ? new Error("Invalid Promise implementation") : null : new Error("Invalid defaults; expected object, got " + JSON.stringify(e.defaults))
            }

            function o(e) {
                return new e.Promise(function(t, n) {
                    e.provider.getExperimentConfiguration(t, n)
                }).then(function(e) {
                    var t = u.validate(e);
                    if (t) throw t;
                    return e
                })
            }

            function s(e, t, n) {
                var i = {};
                for (var r in t) i[r] = function(i) {
                    return e.resolve(n[r]).then(function(e) {
                        return "string" == typeof e ? e : t[i]
                    }, function() {
                        return t[i]
                    })
                }(r);
                return i
            }

            function a(e, t, n, i, r) {
                var o = {};
                for (var s in n) n.hasOwnProperty(s) && (o[s] = function(o) {
                    return t.then(function(e) {
                        if (!e.hasOwnProperty(o)) throw new Error("Experiment `" + o + "` is deprecated");
                        return u.selectTreatment(o, e[o], r)
                    }, function(e) {
                        return n[o]
                    }).then(function(t) {
                        return e.resolve(i[o]).then(function(e) {
                            return "string" == typeof e ? e : t
                        }, function() {
                            return t
                        })
                    })
                }(s));
                return o
            }

            function l(e, t) {
                var n, i = {};
                for (n in e) e.hasOwnProperty(n) && (i[n] = e[n]);
                for (n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (i[n] = t[n]);
                return i
            }
            var u = n(1),
                c = n(4);
            e.exports = i, i.prototype.get = function(e, t) {
                var n = l(t || {}, {
                        mustTrack: !1
                    }),
                    i = this._assignments[e] || this._Promise.reject(new Error("No experiment with ID `" + e + "`")),
                    r = this._Promise.all([this._config, i]).then(function(t) {
                        var n = t[0],
                            i = t[1],
                            r = {
                                client_time: (new Date).getTime() / 1e3,
                                device_id: this._deviceID,
                                experiment_id: e,
                                experiment_name: n[e].name,
                                experiment_group: i,
                                platform: this._platform
                            };
                        null !== this._username && (r.login = this._username);
                        var o = new this._Promise(function(e, t) {
                            c.sendEvent("experiment_branch", r, e)
                        }).then(null, function() {
                            return null
                        });
                        return o
                    }.bind(this));
                return this._Promise.all([i, n.mustTrack ? r : null]).then(function(e) {
                    return e[0]
                }, function(t) {
                    return console.warn(t), this._defaults[e] || null
                }.bind(this))
            }
        }, function(e, t, n) {
            function i(e, t, n) {
                this.name = "InvalidExperimentConfigurationError", this.message = 'Invalid configuration for experiment "' + e + '": ' + n, this.stack = (new Error).stack
            }

            function r(e, t) {
                if (!t.hasOwnProperty("groups")) return new i(e, t, "missing a `groups` property");
                if (0 === t.groups.length) return new i(e, t, "`groups` has no members");
                var n, r;
                for (n = 0; n < t.groups.length; n++)
                    if (t.groups[n].hasOwnProperty("value") ? t.groups[n].hasOwnProperty("weight") ? t.groups[n].weight !== Math.floor(t.groups[n].weight) ? r = "has a non-integer weight" : t.groups[n].weight < 0 && (r = "has a negative weight") : r = "is missing a `weight` property" : r = "is missing a `value` property", r) return new i(e, t, "Group " + t.groups[n].value + " " + r);
                return null
            }
            var o = n(2);
            t.validate = function(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t)) {
                        var n = r(t, e[t]);
                        if (null !== n) return n
                    }
                return null
            }, t.selectTreatment = function(e, t, n) {
                var i = e + n,
                    r = o(i),
                    s = r.words[0] >>> 0,
                    a = s / Math.pow(2, 32),
                    l = t.groups.reduce(function(e, t) {
                        return e + t.weight
                    }, 0);
                return t.groups.reduce(function(e, t) {
                    return null === e.value && (e.current -= t.weight / l, e.current <= 0 && (e.value = t.value)), e
                }, {
                    value: null,
                    current: a
                }).value
            }
        }, function(e, t, n) {
            ! function(i, r) {
                e.exports = t = r(n(3))
            }(this, function(e) {
                return function() {
                    var t = e,
                        n = t.lib,
                        i = n.WordArray,
                        r = n.Hasher,
                        o = t.algo,
                        s = [],
                        a = o.SHA1 = r.extend({
                            _doReset: function() {
                                this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                            },
                            _doProcessBlock: function(e, t) {
                                for (var n = this._hash.words, i = n[0], r = n[1], o = n[2], a = n[3], l = n[4], u = 0; u < 80; u++) {
                                    if (u < 16) s[u] = 0 | e[t + u];
                                    else {
                                        var c = s[u - 3] ^ s[u - 8] ^ s[u - 14] ^ s[u - 16];
                                        s[u] = c << 1 | c >>> 31
                                    }
                                    var h = (i << 5 | i >>> 27) + l + s[u];
                                    h += u < 20 ? (r & o | ~r & a) + 1518500249 : u < 40 ? (r ^ o ^ a) + 1859775393 : u < 60 ? (r & o | r & a | o & a) - 1894007588 : (r ^ o ^ a) - 899497514, l = a, a = o, o = r << 30 | r >>> 2, r = i, i = h
                                }
                                n[0] = n[0] + i | 0, n[1] = n[1] + r | 0, n[2] = n[2] + o | 0, n[3] = n[3] + a | 0, n[4] = n[4] + l | 0
                            },
                            _doFinalize: function() {
                                var e = this._data,
                                    t = e.words,
                                    n = 8 * this._nDataBytes,
                                    i = 8 * e.sigBytes;
                                return t[i >>> 5] |= 128 << 24 - i % 32, t[(i + 64 >>> 9 << 4) + 14] = Math.floor(n / 4294967296), t[(i + 64 >>> 9 << 4) + 15] = n, e.sigBytes = 4 * t.length, this._process(), this._hash
                            },
                            clone: function() {
                                var e = r.clone.call(this);
                                return e._hash = this._hash.clone(), e
                            }
                        });
                    t.SHA1 = r._createHelper(a), t.HmacSHA1 = r._createHmacHelper(a)
                }(), e.SHA1
            })
        }, function(e, t, n) {
            ! function(n, i) {
                e.exports = t = i()
            }(this, function() {
                var e = e || function(e, t) {
                    var n = {},
                        i = n.lib = {},
                        r = i.Base = function() {
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
                        o = i.WordArray = r.extend({
                            init: function(e, n) {
                                e = this.words = e || [], n != t ? this.sigBytes = n : this.sigBytes = 4 * e.length
                            },
                            toString: function(e) {
                                return (e || a).stringify(this)
                            },
                            concat: function(e) {
                                var t = this.words,
                                    n = e.words,
                                    i = this.sigBytes,
                                    r = e.sigBytes;
                                if (this.clamp(), i % 4)
                                    for (var o = 0; o < r; o++) {
                                        var s = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                        t[i + o >>> 2] |= s << 24 - (i + o) % 4 * 8
                                    } else
                                        for (var o = 0; o < r; o += 4) t[i + o >>> 2] = n[o >>> 2];
                                return this.sigBytes += r, this
                            },
                            clamp: function() {
                                var t = this.words,
                                    n = this.sigBytes;
                                t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4)
                            },
                            clone: function() {
                                var e = r.clone.call(this);
                                return e.words = this.words.slice(0), e
                            },
                            random: function(t) {
                                for (var n, i = [], r = function(t) {
                                        var t = t,
                                            n = 987654321,
                                            i = 4294967295;
                                        return function() {
                                            n = 36969 * (65535 & n) + (n >> 16) & i, t = 18e3 * (65535 & t) + (t >> 16) & i;
                                            var r = (n << 16) + t & i;
                                            return r /= 4294967296, r += .5, r * (e.random() > .5 ? 1 : -1)
                                        }
                                    }, s = 0; s < t; s += 4) {
                                    var a = r(4294967296 * (n || e.random()));
                                    n = 987654071 * a(), i.push(4294967296 * a() | 0)
                                }
                                return new o.init(i, t)
                            }
                        }),
                        s = n.enc = {},
                        a = s.Hex = {
                            stringify: function(e) {
                                for (var t = e.words, n = e.sigBytes, i = [], r = 0; r < n; r++) {
                                    var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                                    i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16))
                                }
                                return i.join("")
                            },
                            parse: function(e) {
                                for (var t = e.length, n = [], i = 0; i < t; i += 2) n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
                                return new o.init(n, t / 2)
                            }
                        },
                        l = s.Latin1 = {
                            stringify: function(e) {
                                for (var t = e.words, n = e.sigBytes, i = [], r = 0; r < n; r++) {
                                    var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                                    i.push(String.fromCharCode(o))
                                }
                                return i.join("")
                            },
                            parse: function(e) {
                                for (var t = e.length, n = [], i = 0; i < t; i++) n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
                                return new o.init(n, t)
                            }
                        },
                        u = s.Utf8 = {
                            stringify: function(e) {
                                try {
                                    return decodeURIComponent(escape(l.stringify(e)))
                                } catch (e) {
                                    throw new Error("Malformed UTF-8 data")
                                }
                            },
                            parse: function(e) {
                                return l.parse(unescape(encodeURIComponent(e)))
                            }
                        },
                        c = i.BufferedBlockAlgorithm = r.extend({
                            reset: function() {
                                this._data = new o.init, this._nDataBytes = 0
                            },
                            _append: function(e) {
                                "string" == typeof e && (e = u.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                            },
                            _process: function(t) {
                                var n = this._data,
                                    i = n.words,
                                    r = n.sigBytes,
                                    s = this.blockSize,
                                    a = 4 * s,
                                    l = r / a;
                                l = t ? e.ceil(l) : e.max((0 | l) - this._minBufferSize, 0);
                                var u = l * s,
                                    c = e.min(4 * u, r);
                                if (u) {
                                    for (var h = 0; h < u; h += s) this._doProcessBlock(i, h);
                                    var d = i.splice(0, u);
                                    n.sigBytes -= c
                                }
                                return new o.init(d, c)
                            },
                            clone: function() {
                                var e = r.clone.call(this);
                                return e._data = this._data.clone(), e
                            },
                            _minBufferSize: 0
                        }),
                        h = (i.Hasher = c.extend({
                            cfg: r.extend(),
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
                                e && this._append(e);
                                var t = this._doFinalize();
                                return t
                            },
                            blockSize: 16,
                            _createHelper: function(e) {
                                return function(t, n) {
                                    return new e.init(n).finalize(t)
                                }
                            },
                            _createHmacHelper: function(e) {
                                return function(t, n) {
                                    return new h.HMAC.init(e, n).finalize(t)
                                }
                            }
                        }), n.algo = {});
                    return n
                }(Math);
                return e
            })
        }, function(e, t, n) {
            var i = n(5),
                r = n(6),
                o = n(7);
            t.SPADE_URL = "//spade.twitch.tv/", t.sendEvent = function(e, n, s) {
                var a = {
                        event: e,
                        properties: n
                    },
                    l = i.stringify(r.parse(JSON.stringify(a)));
                o.fetch(t.SPADE_URL + "?data=" + encodeURIComponent(l), {}, s)
            }
        }, function(e, t, n) {
            ! function(i, r) {
                e.exports = t = r(n(3))
            }(this, function(e) {
                return function() {
                    var t = e,
                        n = t.lib,
                        i = n.WordArray,
                        r = t.enc;
                    r.Base64 = {
                        stringify: function(e) {
                            var t = e.words,
                                n = e.sigBytes,
                                i = this._map;
                            e.clamp();
                            for (var r = [], o = 0; o < n; o += 3)
                                for (var s = t[o >>> 2] >>> 24 - o % 4 * 8 & 255, a = t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255, l = t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, u = s << 16 | a << 8 | l, c = 0; c < 4 && o + .75 * c < n; c++) r.push(i.charAt(u >>> 6 * (3 - c) & 63));
                            var h = i.charAt(64);
                            if (h)
                                for (; r.length % 4;) r.push(h);
                            return r.join("")
                        },
                        parse: function(e) {
                            var t = e.length,
                                n = this._map,
                                r = n.charAt(64);
                            if (r) {
                                var o = e.indexOf(r);
                                o != -1 && (t = o)
                            }
                            for (var s = [], a = 0, l = 0; l < t; l++)
                                if (l % 4) {
                                    var u = n.indexOf(e.charAt(l - 1)) << l % 4 * 2,
                                        c = n.indexOf(e.charAt(l)) >>> 6 - l % 4 * 2,
                                        h = u | c;
                                    s[a >>> 2] |= h << 24 - a % 4 * 8, a++
                                }
                            return i.create(s, a)
                        },
                        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                    }
                }(), e.enc.Base64
            })
        }, function(e, t, n) {
            ! function(i, r) {
                e.exports = t = r(n(3))
            }(this, function(e) {
                return e.enc.Utf8
            })
        }, function(e, t) {
            function n(e, t) {
                var n = document.head || document.getElementsByTagName("head")[0];
                n || t(new Error("No head element to append script"));
                var i = document.createElement("script");
                i.onload = function() {
                    t(null), setTimeout(function() {
                        n.removeChild(i)
                    }, 0)
                }, i.onerror = function() {
                    t(new Error("Unable to load script"))
                }, n.appendChild(i), i.src = e
            }

            function i(e, t) {
                var n = new XMLHttpRequest;
                n.open("GET", e, !0), n.onreadystatechange = function() {
                    switch (n.readyState) {
                        case r:
                            return void(200 <= n.status && n.status < 300 ? t(null, n.responseText) : t(new Error("XHR error: " + n.status + " " + e), null))
                    }
                }, n.send()
            }
            var r = 4;
            t.fetch = function(e, t, r) {
                t.injectScript ? n(e, r || function() {}) : i(e, r || function() {})
            }
        }])
    }),
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.local = t() : (e.Minixperiment = e.Minixperiment || {}, e.Minixperiment.providers = e.Minixperiment.providers || {}, e.Minixperiment.providers.local = t())
    }(this, function() {
        return function(e) {
            function t(i) {
                if (n[i]) return n[i].exports;
                var r = n[i] = {
                    exports: {},
                    id: i,
                    loaded: !1
                };
                return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.p = "", t(0)
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
            function t(e, t) {
                var n = e.val(),
                    i = n.trim().split(/\s/).pop();
                e.val(n.replace(new RegExp(i + "$"), t) + " ")
            }

            function n(e) {
                e.empty().hide()
            }

            function i(i, r, o, s) {
                var a = o.filter(function(e) {
                    return 0 === e.indexOf(s) && e !== s
                });
                if (!a.length) return i.hide();
                var l = a.slice(0, 10).map(function(o) {
                    return e('<li class="balloon__link">' + o + "</li>").click(function() {
                        t(r, o), n(i)
                    })
                });
                i.html(l).show()
            }
            var r = {
                creative: (SiteOptions.creative_communities || "").split(",").map(function(e) {
                    return "#" + e
                })
            };
            return e(this).each(function() {
                var o = e(this),
                    s = e('<ul class="balloon balloon--down balloon--dropmenu full-width"></ul>').hide();
                o.after(s), o.keydown(function(a) {
                    var l = e(this).val(),
                        u = l.slice(-1),
                        c = l.trim().split(/\s/).pop(),
                        h = e("#gameselector_input").val().trim().toLowerCase(),
                        d = r[h] || [];
                    if (!u.match(/\s/) && c && h && d.length)
                        if (13 === a.which || 9 === a.which) {
                            a.preventDefault();
                            var f = d.filter(function(e) {
                                return 0 === e.indexOf(c)
                            });
                            1 === f.length && (t(o, f[0]), n(s))
                        } else "#" === c[0] ? i(s, o, d, c) : n(s);
                    else n(s)
                })
            })
        }
    }(jQuery),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
    }(this, function() {
        "use strict";

        function e() {
            return fi.apply(null, arguments)
        }

        function t(e) {
            fi = e
        }

        function n(e) {
            return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
        }

        function i(e) {
            return "[object Object]" === Object.prototype.toString.call(e)
        }

        function r(e) {
            var t;
            for (t in e) return !1;
            return !0
        }

        function o(e) {
            return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
        }

        function s(e, t) {
            var n, i = [];
            for (n = 0; n < e.length; ++n) i.push(t(e[n], n));
            return i
        }

        function a(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        function l(e, t) {
            for (var n in t) a(t, n) && (e[n] = t[n]);
            return a(t, "toString") && (e.toString = t.toString), a(t, "valueOf") && (e.valueOf = t.valueOf), e
        }

        function u(e, t, n, i) {
            return gt(e, t, n, i, !0).utc()
        }

        function c() {
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

        function h(e) {
            return null == e._pf && (e._pf = c()), e._pf
        }

        function d(e) {
            if (null == e._isValid) {
                var t = h(e),
                    n = pi.call(t.parsedDateParts, function(e) {
                        return null != e
                    });
                e._isValid = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (e._isValid = e._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)
            }
            return e._isValid
        }

        function f(e) {
            var t = u(NaN);
            return null != e ? l(h(t), e) : h(t).userInvalidated = !0, t
        }

        function p(e) {
            return void 0 === e
        }

        function m(e, t) {
            var n, i, r;
            if (p(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), p(t._i) || (e._i = t._i), p(t._f) || (e._f = t._f), p(t._l) || (e._l = t._l), p(t._strict) || (e._strict = t._strict), p(t._tzm) || (e._tzm = t._tzm), p(t._isUTC) || (e._isUTC = t._isUTC), p(t._offset) || (e._offset = t._offset), p(t._pf) || (e._pf = h(t)), p(t._locale) || (e._locale = t._locale), mi.length > 0)
                for (n in mi) i = mi[n], r = t[i], p(r) || (e[i] = r);
            return e
        }

        function g(t) {
            m(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), gi === !1 && (gi = !0, e.updateOffset(this), gi = !1)
        }

        function v(e) {
            return e instanceof g || null != e && null != e._isAMomentObject
        }

        function y(e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
        }

        function _(e) {
            var t = +e,
                n = 0;
            return 0 !== t && isFinite(t) && (n = y(t)), n
        }

        function b(e, t, n) {
            var i, r = Math.min(e.length, t.length),
                o = Math.abs(e.length - t.length),
                s = 0;
            for (i = 0; i < r; i++)(n && e[i] !== t[i] || !n && _(e[i]) !== _(t[i])) && s++;
            return s + o
        }

        function w(t) {
            e.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
        }

        function x(t, n) {
            var i = !0;
            return l(function() {
                return null != e.deprecationHandler && e.deprecationHandler(null, t), i && (w(t + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), i = !1), n.apply(this, arguments)
            }, n)
        }

        function k(t, n) {
            null != e.deprecationHandler && e.deprecationHandler(t, n), vi[t] || (w(n), vi[t] = !0)
        }

        function S(e) {
            return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
        }

        function T(e) {
            var t, n;
            for (n in e) t = e[n], S(t) ? this[n] = t : this["_" + n] = t;
            this._config = e, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source);
        }

        function C(e, t) {
            var n, r = l({}, e);
            for (n in t) a(t, n) && (i(e[n]) && i(t[n]) ? (r[n] = {}, l(r[n], e[n]), l(r[n], t[n])) : null != t[n] ? r[n] = t[n] : delete r[n]);
            for (n in e) a(e, n) && !a(t, n) && i(e[n]) && (r[n] = l({}, r[n]));
            return r
        }

        function D(e) {
            null != e && this.set(e)
        }

        function M(e, t, n) {
            var i = this._calendar[e] || this._calendar.sameElse;
            return S(i) ? i.call(t, n) : i
        }

        function E(e) {
            var t = this._longDateFormat[e],
                n = this._longDateFormat[e.toUpperCase()];
            return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
                return e.slice(1)
            }), this._longDateFormat[e])
        }

        function A() {
            return this._invalidDate
        }

        function P(e) {
            return this._ordinal.replace("%d", e)
        }

        function O(e, t, n, i) {
            var r = this._relativeTime[n];
            return S(r) ? r(e, t, n, i) : r.replace(/%d/i, e)
        }

        function I(e, t) {
            var n = this._relativeTime[e > 0 ? "future" : "past"];
            return S(n) ? n(t) : n.replace(/%s/i, t)
        }

        function N(e, t) {
            var n = e.toLowerCase();
            Ci[n] = Ci[n + "s"] = Ci[t] = e
        }

        function j(e) {
            return "string" == typeof e ? Ci[e] || Ci[e.toLowerCase()] : void 0
        }

        function R(e) {
            var t, n, i = {};
            for (n in e) a(e, n) && (t = j(n), t && (i[t] = e[n]));
            return i
        }

        function L(e, t) {
            Di[e] = t
        }

        function F(e) {
            var t = [];
            for (var n in e) t.push({
                unit: n,
                priority: Di[n]
            });
            return t.sort(function(e, t) {
                return e.priority - t.priority
            }), t
        }

        function H(t, n) {
            return function(i) {
                return null != i ? (W(this, t, i), e.updateOffset(this, n), this) : z(this, t)
            }
        }

        function z(e, t) {
            return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
        }

        function W(e, t, n) {
            e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
        }

        function $(e) {
            return e = j(e), S(this[e]) ? this[e]() : this
        }

        function B(e, t) {
            if ("object" == typeof e) {
                e = R(e);
                for (var n = F(e), i = 0; i < n.length; i++) this[n[i].unit](e[n[i].unit])
            } else if (e = j(e), S(this[e])) return this[e](t);
            return this
        }

        function Y(e, t, n) {
            var i = "" + Math.abs(e),
                r = t - i.length,
                o = e >= 0;
            return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
        }

        function U(e, t, n, i) {
            var r = i;
            "string" == typeof i && (r = function() {
                return this[i]()
            }), e && (Pi[e] = r), t && (Pi[t[0]] = function() {
                return Y(r.apply(this, arguments), t[1], t[2])
            }), n && (Pi[n] = function() {
                return this.localeData().ordinal(r.apply(this, arguments), e)
            })
        }

        function q(e) {
            return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
        }

        function V(e) {
            var t, n, i = e.match(Mi);
            for (t = 0, n = i.length; t < n; t++) Pi[i[t]] ? i[t] = Pi[i[t]] : i[t] = q(i[t]);
            return function(t) {
                var r, o = "";
                for (r = 0; r < n; r++) o += i[r] instanceof Function ? i[r].call(t, e) : i[r];
                return o
            }
        }

        function Q(e, t) {
            return e.isValid() ? (t = G(t, e.localeData()), Ai[t] = Ai[t] || V(t), Ai[t](e)) : e.localeData().invalidDate()
        }

        function G(e, t) {
            function n(e) {
                return t.longDateFormat(e) || e
            }
            var i = 5;
            for (Ei.lastIndex = 0; i >= 0 && Ei.test(e);) e = e.replace(Ei, n), Ei.lastIndex = 0, i -= 1;
            return e
        }

        function X(e, t, n) {
            Gi[e] = S(t) ? t : function(e, i) {
                return e && n ? n : t
            }
        }

        function K(e, t) {
            return a(Gi, e) ? Gi[e](t._strict, t._locale) : new RegExp(J(e))
        }

        function J(e) {
            return Z(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, i, r) {
                return t || n || i || r
            }))
        }

        function Z(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        function ee(e, t) {
            var n, i = t;
            for ("string" == typeof e && (e = [e]), "number" == typeof t && (i = function(e, n) {
                    n[t] = _(e)
                }), n = 0; n < e.length; n++) Xi[e[n]] = i
        }

        function te(e, t) {
            ee(e, function(e, n, i, r) {
                i._w = i._w || {}, t(e, i._w, i, r)
            })
        }

        function ne(e, t, n) {
            null != t && a(Xi, e) && Xi[e](t, n._a, n, e)
        }

        function ie(e, t) {
            return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
        }

        function re(e, t) {
            return n(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || sr).test(t) ? "format" : "standalone"][e.month()]
        }

        function oe(e, t) {
            return n(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[sr.test(t) ? "format" : "standalone"][e.month()]
        }

        function se(e, t, n) {
            var i, r, o, s = e.toLocaleLowerCase();
            if (!this._monthsParse)
                for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) o = u([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase();
            return n ? "MMM" === t ? (r = _i.call(this._shortMonthsParse, s), r !== -1 ? r : null) : (r = _i.call(this._longMonthsParse, s), r !== -1 ? r : null) : "MMM" === t ? (r = _i.call(this._shortMonthsParse, s), r !== -1 ? r : (r = _i.call(this._longMonthsParse, s), r !== -1 ? r : null)) : (r = _i.call(this._longMonthsParse, s), r !== -1 ? r : (r = _i.call(this._shortMonthsParse, s), r !== -1 ? r : null))
        }

        function ae(e, t, n) {
            var i, r, o;
            if (this._monthsParseExact) return se.call(this, e, t, n);
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
                if (r = u([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[i].test(e)) return i;
                if (n && "MMM" === t && this._shortMonthsParse[i].test(e)) return i;
                if (!n && this._monthsParse[i].test(e)) return i
            }
        }

        function le(e, t) {
            var n;
            if (!e.isValid()) return e;
            if ("string" == typeof t)
                if (/^\d+$/.test(t)) t = _(t);
                else if (t = e.localeData().monthsParse(t), "number" != typeof t) return e;
            return n = Math.min(e.date(), ie(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
        }

        function ue(t) {
            return null != t ? (le(this, t), e.updateOffset(this, !0), this) : z(this, "Month")
        }

        function ce() {
            return ie(this.year(), this.month())
        }

        function he(e) {
            return this._monthsParseExact ? (a(this, "_monthsRegex") || fe.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (a(this, "_monthsShortRegex") || (this._monthsShortRegex = ur), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
        }

        function de(e) {
            return this._monthsParseExact ? (a(this, "_monthsRegex") || fe.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (a(this, "_monthsRegex") || (this._monthsRegex = cr), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
        }

        function fe() {
            function e(e, t) {
                return t.length - e.length
            }
            var t, n, i = [],
                r = [],
                o = [];
            for (t = 0; t < 12; t++) n = u([2e3, t]), i.push(this.monthsShort(n, "")), r.push(this.months(n, "")), o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
            for (i.sort(e), r.sort(e), o.sort(e), t = 0; t < 12; t++) i[t] = Z(i[t]), r[t] = Z(r[t]);
            for (t = 0; t < 24; t++) o[t] = Z(o[t]);
            this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
        }

        function pe(e) {
            return me(e) ? 366 : 365
        }

        function me(e) {
            return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
        }

        function ge() {
            return me(this.year())
        }

        function ve(e, t, n, i, r, o, s) {
            var a = new Date(e, t, n, i, r, o, s);
            return e < 100 && e >= 0 && isFinite(a.getFullYear()) && a.setFullYear(e), a
        }

        function ye(e) {
            var t = new Date(Date.UTC.apply(null, arguments));
            return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
        }

        function _e(e, t, n) {
            var i = 7 + t - n,
                r = (7 + ye(e, 0, i).getUTCDay() - t) % 7;
            return -r + i - 1
        }

        function be(e, t, n, i, r) {
            var o, s, a = (7 + n - i) % 7,
                l = _e(e, i, r),
                u = 1 + 7 * (t - 1) + a + l;
            return u <= 0 ? (o = e - 1, s = pe(o) + u) : u > pe(e) ? (o = e + 1, s = u - pe(e)) : (o = e, s = u), {
                year: o,
                dayOfYear: s
            }
        }

        function we(e, t, n) {
            var i, r, o = _e(e.year(), t, n),
                s = Math.floor((e.dayOfYear() - o - 1) / 7) + 1;
            return s < 1 ? (r = e.year() - 1, i = s + xe(r, t, n)) : s > xe(e.year(), t, n) ? (i = s - xe(e.year(), t, n), r = e.year() + 1) : (r = e.year(), i = s), {
                week: i,
                year: r
            }
        }

        function xe(e, t, n) {
            var i = _e(e, t, n),
                r = _e(e + 1, t, n);
            return (pe(e) - i + r) / 7
        }

        function ke(e) {
            return we(e, this._week.dow, this._week.doy).week
        }

        function Se() {
            return this._week.dow
        }

        function Te() {
            return this._week.doy
        }

        function Ce(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d")
        }

        function De(e) {
            var t = we(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d")
        }

        function Me(e, t) {
            return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10)
        }

        function Ee(e, t) {
            return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
        }

        function Ae(e, t) {
            return n(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()]
        }

        function Pe(e) {
            return this._weekdaysShort[e.day()]
        }

        function Oe(e) {
            return this._weekdaysMin[e.day()]
        }

        function Ie(e, t, n) {
            var i, r, o, s = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
                for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) o = u([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase();
            return n ? "dddd" === t ? (r = _i.call(this._weekdaysParse, s), r !== -1 ? r : null) : "ddd" === t ? (r = _i.call(this._shortWeekdaysParse, s), r !== -1 ? r : null) : (r = _i.call(this._minWeekdaysParse, s), r !== -1 ? r : null) : "dddd" === t ? (r = _i.call(this._weekdaysParse, s), r !== -1 ? r : (r = _i.call(this._shortWeekdaysParse, s), r !== -1 ? r : (r = _i.call(this._minWeekdaysParse, s), r !== -1 ? r : null))) : "ddd" === t ? (r = _i.call(this._shortWeekdaysParse, s), r !== -1 ? r : (r = _i.call(this._weekdaysParse, s), r !== -1 ? r : (r = _i.call(this._minWeekdaysParse, s), r !== -1 ? r : null))) : (r = _i.call(this._minWeekdaysParse, s), r !== -1 ? r : (r = _i.call(this._weekdaysParse, s), r !== -1 ? r : (r = _i.call(this._shortWeekdaysParse, s), r !== -1 ? r : null)))
        }

        function Ne(e, t, n) {
            var i, r, o;
            if (this._weekdaysParseExact) return Ie.call(this, e, t, n);
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
                if (r = u([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (o = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[i].test(e)) return i;
                if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e)) return i;
                if (n && "dd" === t && this._minWeekdaysParse[i].test(e)) return i;
                if (!n && this._weekdaysParse[i].test(e)) return i
            }
        }

        function je(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? (e = Me(e, this.localeData()), this.add(e - t, "d")) : t
        }

        function Re(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d")
        }

        function Le(e) {
            if (!this.isValid()) return null != e ? this : NaN;
            if (null != e) {
                var t = Ee(e, this.localeData());
                return this.day(this.day() % 7 ? t : t - 7)
            }
            return this.day() || 7
        }

        function Fe(e) {
            return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || We.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (a(this, "_weekdaysRegex") || (this._weekdaysRegex = gr), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
        }

        function He(e) {
            return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || We.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (a(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = vr), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        }

        function ze(e) {
            return this._weekdaysParseExact ? (a(this, "_weekdaysRegex") || We.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (a(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = yr), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        }

        function We() {
            function e(e, t) {
                return t.length - e.length
            }
            var t, n, i, r, o, s = [],
                a = [],
                l = [],
                c = [];
            for (t = 0; t < 7; t++) n = u([2e3, 1]).day(t), i = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), o = this.weekdays(n, ""), s.push(i), a.push(r), l.push(o), c.push(i), c.push(r), c.push(o);
            for (s.sort(e), a.sort(e), l.sort(e), c.sort(e), t = 0; t < 7; t++) a[t] = Z(a[t]), l[t] = Z(l[t]), c[t] = Z(c[t]);
            this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")
        }

        function $e() {
            return this.hours() % 12 || 12
        }

        function Be() {
            return this.hours() || 24
        }

        function Ye(e, t) {
            U(e, 0, 0, function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), t)
            })
        }

        function Ue(e, t) {
            return t._meridiemParse
        }

        function qe(e) {
            return "p" === (e + "").toLowerCase().charAt(0)
        }

        function Ve(e, t, n) {
            return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        }

        function Qe(e) {
            return e ? e.toLowerCase().replace("_", "-") : e
        }

        function Ge(e) {
            for (var t, n, i, r, o = 0; o < e.length;) {
                for (r = Qe(e[o]).split("-"), t = r.length, n = Qe(e[o + 1]), n = n ? n.split("-") : null; t > 0;) {
                    if (i = Xe(r.slice(0, t).join("-"))) return i;
                    if (n && n.length >= t && b(r, n, !0) >= t - 1) break;
                    t--
                }
                o++
            }
            return null
        }

        function Xe(e) {
            var t = null;
            if (!kr[e] && "undefined" != typeof module && module && module.exports) try {
                t = _r._abbr, require("./locale/" + e), Ke(t)
            } catch (e) {}
            return kr[e]
        }

        function Ke(e, t) {
            var n;
            return e && (n = p(t) ? et(e) : Je(e, t), n && (_r = n)), _r._abbr
        }

        function Je(e, t) {
            if (null !== t) {
                var n = xr;
                return t.abbr = e, null != kr[e] ? (k("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = kr[e]._config) : null != t.parentLocale && (null != kr[t.parentLocale] ? n = kr[t.parentLocale]._config : k("parentLocaleUndefined", "specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")), kr[e] = new D(C(n, t)), Ke(e), kr[e]
            }
            return delete kr[e], null
        }

        function Ze(e, t) {
            if (null != t) {
                var n, i = xr;
                null != kr[e] && (i = kr[e]._config), t = C(i, t), n = new D(t), n.parentLocale = kr[e], kr[e] = n, Ke(e)
            } else null != kr[e] && (null != kr[e].parentLocale ? kr[e] = kr[e].parentLocale : null != kr[e] && delete kr[e]);
            return kr[e]
        }

        function et(e) {
            var t;
            if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return _r;
            if (!n(e)) {
                if (t = Xe(e)) return t;
                e = [e]
            }
            return Ge(e)
        }

        function tt() {
            return yi(kr)
        }

        function nt(e) {
            var t, n = e._a;
            return n && h(e).overflow === -2 && (t = n[Ji] < 0 || n[Ji] > 11 ? Ji : n[Zi] < 1 || n[Zi] > ie(n[Ki], n[Ji]) ? Zi : n[er] < 0 || n[er] > 24 || 24 === n[er] && (0 !== n[tr] || 0 !== n[nr] || 0 !== n[ir]) ? er : n[tr] < 0 || n[tr] > 59 ? tr : n[nr] < 0 || n[nr] > 59 ? nr : n[ir] < 0 || n[ir] > 999 ? ir : -1, h(e)._overflowDayOfYear && (t < Ki || t > Zi) && (t = Zi), h(e)._overflowWeeks && t === -1 && (t = rr), h(e)._overflowWeekday && t === -1 && (t = or), h(e).overflow = t), e
        }

        function it(e) {
            var t, n, i, r, o, s, a = e._i,
                l = Sr.exec(a) || Tr.exec(a);
            if (l) {
                for (h(e).iso = !0, t = 0, n = Dr.length; t < n; t++)
                    if (Dr[t][1].exec(l[1])) {
                        r = Dr[t][0], i = Dr[t][2] !== !1;
                        break
                    }
                if (null == r) return void(e._isValid = !1);
                if (l[3]) {
                    for (t = 0, n = Mr.length; t < n; t++)
                        if (Mr[t][1].exec(l[3])) {
                            o = (l[2] || " ") + Mr[t][0];
                            break
                        }
                    if (null == o) return void(e._isValid = !1)
                }
                if (!i && null != o) return void(e._isValid = !1);
                if (l[4]) {
                    if (!Cr.exec(l[4])) return void(e._isValid = !1);
                    s = "Z"
                }
                e._f = r + (o || "") + (s || ""), ut(e)
            } else e._isValid = !1
        }

        function rt(t) {
            var n = Er.exec(t._i);
            return null !== n ? void(t._d = new Date(+n[1])) : (it(t), void(t._isValid === !1 && (delete t._isValid, e.createFromInputFallback(t))))
        }

        function ot(e, t, n) {
            return null != e ? e : null != t ? t : n
        }

        function st(t) {
            var n = new Date(e.now());
            return t._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
        }

        function at(e) {
            var t, n, i, r, o = [];
            if (!e._d) {
                for (i = st(e), e._w && null == e._a[Zi] && null == e._a[Ji] && lt(e), e._dayOfYear && (r = ot(e._a[Ki], i[Ki]), e._dayOfYear > pe(r) && (h(e)._overflowDayOfYear = !0), n = ye(r, 0, e._dayOfYear), e._a[Ji] = n.getUTCMonth(), e._a[Zi] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = i[t];
                for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                24 === e._a[er] && 0 === e._a[tr] && 0 === e._a[nr] && 0 === e._a[ir] && (e._nextDay = !0, e._a[er] = 0), e._d = (e._useUTC ? ye : ve).apply(null, o), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[er] = 24)
            }
        }

        function lt(e) {
            var t, n, i, r, o, s, a, l;
            t = e._w, null != t.GG || null != t.W || null != t.E ? (o = 1, s = 4, n = ot(t.GG, e._a[Ki], we(vt(), 1, 4).year), i = ot(t.W, 1), r = ot(t.E, 1), (r < 1 || r > 7) && (l = !0)) : (o = e._locale._week.dow, s = e._locale._week.doy, n = ot(t.gg, e._a[Ki], we(vt(), o, s).year), i = ot(t.w, 1), null != t.d ? (r = t.d, (r < 0 || r > 6) && (l = !0)) : null != t.e ? (r = t.e + o, (t.e < 0 || t.e > 6) && (l = !0)) : r = o), i < 1 || i > xe(n, o, s) ? h(e)._overflowWeeks = !0 : null != l ? h(e)._overflowWeekday = !0 : (a = be(n, i, r, o, s), e._a[Ki] = a.year, e._dayOfYear = a.dayOfYear)
        }

        function ut(t) {
            if (t._f === e.ISO_8601) return void it(t);
            t._a = [], h(t).empty = !0;
            var n, i, r, o, s, a = "" + t._i,
                l = a.length,
                u = 0;
            for (r = G(t._f, t._locale).match(Mi) || [], n = 0; n < r.length; n++) o = r[n], i = (a.match(K(o, t)) || [])[0], i && (s = a.substr(0, a.indexOf(i)), s.length > 0 && h(t).unusedInput.push(s), a = a.slice(a.indexOf(i) + i.length), u += i.length), Pi[o] ? (i ? h(t).empty = !1 : h(t).unusedTokens.push(o), ne(o, i, t)) : t._strict && !i && h(t).unusedTokens.push(o);
            h(t).charsLeftOver = l - u, a.length > 0 && h(t).unusedInput.push(a), t._a[er] <= 12 && h(t).bigHour === !0 && t._a[er] > 0 && (h(t).bigHour = void 0), h(t).parsedDateParts = t._a.slice(0), h(t).meridiem = t._meridiem, t._a[er] = ct(t._locale, t._a[er], t._meridiem), at(t), nt(t)
        }

        function ct(e, t, n) {
            var i;
            return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (i = e.isPM(n), i && t < 12 && (t += 12), i || 12 !== t || (t = 0), t) : t
        }

        function ht(e) {
            var t, n, i, r, o;
            if (0 === e._f.length) return h(e).invalidFormat = !0, void(e._d = new Date(NaN));
            for (r = 0; r < e._f.length; r++) o = 0, t = m({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], ut(t), d(t) && (o += h(t).charsLeftOver, o += 10 * h(t).unusedTokens.length, h(t).score = o, (null == i || o < i) && (i = o, n = t));
            l(e, n || t)
        }

        function dt(e) {
            if (!e._d) {
                var t = R(e._i);
                e._a = s([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                    return e && parseInt(e, 10)
                }), at(e)
            }
        }

        function ft(e) {
            var t = new g(nt(pt(e)));
            return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
        }

        function pt(e) {
            var t = e._i,
                i = e._f;
            return e._locale = e._locale || et(e._l), null === t || void 0 === i && "" === t ? f({
                nullInput: !0
            }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), v(t) ? new g(nt(t)) : (n(i) ? ht(e) : o(t) ? e._d = t : i ? ut(e) : mt(e), d(e) || (e._d = null), e))
        }

        function mt(t) {
            var i = t._i;
            void 0 === i ? t._d = new Date(e.now()) : o(i) ? t._d = new Date(i.valueOf()) : "string" == typeof i ? rt(t) : n(i) ? (t._a = s(i.slice(0), function(e) {
                return parseInt(e, 10)
            }), at(t)) : "object" == typeof i ? dt(t) : "number" == typeof i ? t._d = new Date(i) : e.createFromInputFallback(t)
        }

        function gt(e, t, o, s, a) {
            var l = {};
            return "boolean" == typeof o && (s = o, o = void 0), (i(e) && r(e) || n(e) && 0 === e.length) && (e = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = a, l._l = o, l._i = e, l._f = t, l._strict = s, ft(l)
        }

        function vt(e, t, n, i) {
            return gt(e, t, n, i, !1)
        }

        function yt(e, t) {
            var i, r;
            if (1 === t.length && n(t[0]) && (t = t[0]), !t.length) return vt();
            for (i = t[0], r = 1; r < t.length; ++r) t[r].isValid() && !t[r][e](i) || (i = t[r]);
            return i
        }

        function _t() {
            var e = [].slice.call(arguments, 0);
            return yt("isBefore", e)
        }

        function bt() {
            var e = [].slice.call(arguments, 0);
            return yt("isAfter", e)
        }

        function wt(e) {
            var t = R(e),
                n = t.year || 0,
                i = t.quarter || 0,
                r = t.month || 0,
                o = t.week || 0,
                s = t.day || 0,
                a = t.hour || 0,
                l = t.minute || 0,
                u = t.second || 0,
                c = t.millisecond || 0;
            this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * a * 60 * 60, this._days = +s + 7 * o, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = et(), this._bubble()
        }

        function xt(e) {
            return e instanceof wt
        }

        function kt(e, t) {
            U(e, 0, 0, function() {
                var e = this.utcOffset(),
                    n = "+";
                return e < 0 && (e = -e, n = "-"), n + Y(~~(e / 60), 2) + t + Y(~~e % 60, 2)
            })
        }

        function St(e, t) {
            var n = (t || "").match(e) || [],
                i = n[n.length - 1] || [],
                r = (i + "").match(Ir) || ["-", 0, 0],
                o = +(60 * r[1]) + _(r[2]);
            return "+" === r[0] ? o : -o
        }

        function Tt(t, n) {
            var i, r;
            return n._isUTC ? (i = n.clone(), r = (v(t) || o(t) ? t.valueOf() : vt(t).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + r), e.updateOffset(i, !1), i) : vt(t).local()
        }

        function Ct(e) {
            return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
        }

        function Dt(t, n) {
            var i, r = this._offset || 0;
            return this.isValid() ? null != t ? ("string" == typeof t ? t = St(qi, t) : Math.abs(t) < 16 && (t *= 60), !this._isUTC && n && (i = Ct(this)), this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), r !== t && (!n || this._changeInProgress ? Yt(this, Ft(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, e.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? r : Ct(this) : null != t ? this : NaN
        }

        function Mt(e, t) {
            return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
        }

        function Et(e) {
            return this.utcOffset(0, e)
        }

        function At(e) {
            return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Ct(this), "m")), this
        }

        function Pt() {
            return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(St(Ui, this._i)), this
        }

        function Ot(e) {
            return !!this.isValid() && (e = e ? vt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0)
        }

        function It() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }

        function Nt() {
            if (!p(this._isDSTShifted)) return this._isDSTShifted;
            var e = {};
            if (m(e, this), e = pt(e), e._a) {
                var t = e._isUTC ? u(e._a) : vt(e._a);
                this._isDSTShifted = this.isValid() && b(e._a, t.toArray()) > 0
            } else this._isDSTShifted = !1;
            return this._isDSTShifted
        }

        function jt() {
            return !!this.isValid() && !this._isUTC
        }

        function Rt() {
            return !!this.isValid() && this._isUTC
        }

        function Lt() {
            return !!this.isValid() && (this._isUTC && 0 === this._offset)
        }

        function Ft(e, t) {
            var n, i, r, o = e,
                s = null;
            return xt(e) ? o = {
                ms: e._milliseconds,
                d: e._days,
                M: e._months
            } : "number" == typeof e ? (o = {}, t ? o[t] = e : o.milliseconds = e) : (s = Nr.exec(e)) ? (n = "-" === s[1] ? -1 : 1, o = {
                y: 0,
                d: _(s[Zi]) * n,
                h: _(s[er]) * n,
                m: _(s[tr]) * n,
                s: _(s[nr]) * n,
                ms: _(s[ir]) * n
            }) : (s = jr.exec(e)) ? (n = "-" === s[1] ? -1 : 1, o = {
                y: Ht(s[2], n),
                M: Ht(s[3], n),
                w: Ht(s[4], n),
                d: Ht(s[5], n),
                h: Ht(s[6], n),
                m: Ht(s[7], n),
                s: Ht(s[8], n)
            }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (r = Wt(vt(o.from), vt(o.to)), o = {}, o.ms = r.milliseconds, o.M = r.months), i = new wt(o), xt(e) && a(e, "_locale") && (i._locale = e._locale), i
        }

        function Ht(e, t) {
            var n = e && parseFloat(e.replace(",", "."));
            return (isNaN(n) ? 0 : n) * t
        }

        function zt(e, t) {
            var n = {
                milliseconds: 0,
                months: 0
            };
            return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
        }

        function Wt(e, t) {
            var n;
            return e.isValid() && t.isValid() ? (t = Tt(t, e), e.isBefore(t) ? n = zt(e, t) : (n = zt(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                milliseconds: 0,
                months: 0
            }
        }

        function $t(e) {
            return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e)
        }

        function Bt(e, t) {
            return function(n, i) {
                var r, o;
                return null === i || isNaN(+i) || (k(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), o = n, n = i, i = o), n = "string" == typeof n ? +n : n, r = Ft(n, i), Yt(this, r, e), this
            }
        }

        function Yt(t, n, i, r) {
            var o = n._milliseconds,
                s = $t(n._days),
                a = $t(n._months);
            t.isValid() && (r = null == r || r, o && t._d.setTime(t._d.valueOf() + o * i), s && W(t, "Date", z(t, "Date") + s * i), a && le(t, z(t, "Month") + a * i), r && e.updateOffset(t, s || a))
        }

        function Ut(e, t) {
            var n = e.diff(t, "days", !0);
            return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
        }

        function qt(t, n) {
            var i = t || vt(),
                r = Tt(i, this).startOf("day"),
                o = e.calendarFormat(this, r) || "sameElse",
                s = n && (S(n[o]) ? n[o].call(this, i) : n[o]);
            return this.format(s || this.localeData().calendar(o, this, vt(i)))
        }

        function Vt() {
            return new g(this)
        }

        function Qt(e, t) {
            var n = v(e) ? e : vt(e);
            return !(!this.isValid() || !n.isValid()) && (t = j(p(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
        }

        function Gt(e, t) {
            var n = v(e) ? e : vt(e);
            return !(!this.isValid() || !n.isValid()) && (t = j(p(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
        }

        function Xt(e, t, n, i) {
            return i = i || "()", ("(" === i[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === i[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
        }

        function Kt(e, t) {
            var n, i = v(e) ? e : vt(e);
            return !(!this.isValid() || !i.isValid()) && (t = j(t || "millisecond"), "millisecond" === t ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
        }

        function Jt(e, t) {
            return this.isSame(e, t) || this.isAfter(e, t)
        }

        function Zt(e, t) {
            return this.isSame(e, t) || this.isBefore(e, t)
        }

        function en(e, t, n) {
            var i, r, o, s;
            return this.isValid() ? (i = Tt(e, this), i.isValid() ? (r = 6e4 * (i.utcOffset() - this.utcOffset()), t = j(t), "year" === t || "month" === t || "quarter" === t ? (s = tn(this, i), "quarter" === t ? s /= 3 : "year" === t && (s /= 12)) : (o = this - i, s = "second" === t ? o / 1e3 : "minute" === t ? o / 6e4 : "hour" === t ? o / 36e5 : "day" === t ? (o - r) / 864e5 : "week" === t ? (o - r) / 6048e5 : o), n ? s : y(s)) : NaN) : NaN
        }

        function tn(e, t) {
            var n, i, r = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                o = e.clone().add(r, "months");
            return t - o < 0 ? (n = e.clone().add(r - 1, "months"), i = (t - o) / (o - n)) : (n = e.clone().add(r + 1, "months"), i = (t - o) / (n - o)), -(r + i) || 0
        }

        function nn() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }

        function rn() {
            var e = this.clone().utc();
            return 0 < e.year() && e.year() <= 9999 ? S(Date.prototype.toISOString) ? this.toDate().toISOString() : Q(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : Q(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }

        function on(t) {
            t || (t = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat);
            var n = Q(this, t);
            return this.localeData().postformat(n)
        }

        function sn(e, t) {
            return this.isValid() && (v(e) && e.isValid() || vt(e).isValid()) ? Ft({
                to: this,
                from: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }

        function an(e) {
            return this.from(vt(), e)
        }

        function ln(e, t) {
            return this.isValid() && (v(e) && e.isValid() || vt(e).isValid()) ? Ft({
                from: this,
                to: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }

        function un(e) {
            return this.to(vt(), e)
        }

        function cn(e) {
            var t;
            return void 0 === e ? this._locale._abbr : (t = et(e), null != t && (this._locale = t), this)
        }

        function hn() {
            return this._locale
        }

        function dn(e) {
            switch (e = j(e)) {
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

        function fn(e) {
            return e = j(e), void 0 === e || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
        }

        function pn() {
            return this._d.valueOf() - 6e4 * (this._offset || 0)
        }

        function mn() {
            return Math.floor(this.valueOf() / 1e3)
        }

        function gn() {
            return new Date(this.valueOf())
        }

        function vn() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
        }

        function yn() {
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

        function _n() {
            return this.isValid() ? this.toISOString() : null
        }

        function bn() {
            return d(this)
        }

        function wn() {
            return l({}, h(this))
        }

        function xn() {
            return h(this).overflow
        }

        function kn() {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
            }
        }

        function Sn(e, t) {
            U(0, [e, e.length], 0, t)
        }

        function Tn(e) {
            return En.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }

        function Cn(e) {
            return En.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
        }

        function Dn() {
            return xe(this.year(), 1, 4)
        }

        function Mn() {
            var e = this.localeData()._week;
            return xe(this.year(), e.dow, e.doy)
        }

        function En(e, t, n, i, r) {
            var o;
            return null == e ? we(this, i, r).year : (o = xe(e, i, r), t > o && (t = o), An.call(this, e, t, n, i, r))
        }

        function An(e, t, n, i, r) {
            var o = be(e, t, n, i, r),
                s = ye(o.year, 0, o.dayOfYear);
            return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this
        }

        function Pn(e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
        }

        function On(e) {
            var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add(e - t, "d")
        }

        function In(e, t) {
            t[ir] = _(1e3 * ("0." + e))
        }

        function Nn() {
            return this._isUTC ? "UTC" : ""
        }

        function jn() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }

        function Rn(e) {
            return vt(1e3 * e)
        }

        function Ln() {
            return vt.apply(null, arguments).parseZone()
        }

        function Fn(e) {
            return e
        }

        function Hn(e, t, n, i) {
            var r = et(),
                o = u().set(i, t);
            return r[n](o, e)
        }

        function zn(e, t, n) {
            if ("number" == typeof e && (t = e, e = void 0), e = e || "", null != t) return Hn(e, t, n, "month");
            var i, r = [];
            for (i = 0; i < 12; i++) r[i] = Hn(e, i, n, "month");
            return r
        }

        function Wn(e, t, n, i) {
            "boolean" == typeof e ? ("number" == typeof t && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, "number" == typeof t && (n = t, t = void 0), t = t || "");
            var r = et(),
                o = e ? r._week.dow : 0;
            if (null != n) return Hn(t, (n + o) % 7, i, "day");
            var s, a = [];
            for (s = 0; s < 7; s++) a[s] = Hn(t, (s + o) % 7, i, "day");
            return a
        }

        function $n(e, t) {
            return zn(e, t, "months")
        }

        function Bn(e, t) {
            return zn(e, t, "monthsShort")
        }

        function Yn(e, t, n) {
            return Wn(e, t, n, "weekdays")
        }

        function Un(e, t, n) {
            return Wn(e, t, n, "weekdaysShort")
        }

        function qn(e, t, n) {
            return Wn(e, t, n, "weekdaysMin")
        }

        function Vn() {
            var e = this._data;
            return this._milliseconds = Vr(this._milliseconds), this._days = Vr(this._days), this._months = Vr(this._months), e.milliseconds = Vr(e.milliseconds), e.seconds = Vr(e.seconds), e.minutes = Vr(e.minutes), e.hours = Vr(e.hours), e.months = Vr(e.months), e.years = Vr(e.years), this
        }

        function Qn(e, t, n, i) {
            var r = Ft(t, n);
            return e._milliseconds += i * r._milliseconds, e._days += i * r._days, e._months += i * r._months, e._bubble()
        }

        function Gn(e, t) {
            return Qn(this, e, t, 1)
        }

        function Xn(e, t) {
            return Qn(this, e, t, -1)
        }

        function Kn(e) {
            return e < 0 ? Math.floor(e) : Math.ceil(e)
        }

        function Jn() {
            var e, t, n, i, r, o = this._milliseconds,
                s = this._days,
                a = this._months,
                l = this._data;
            return o >= 0 && s >= 0 && a >= 0 || o <= 0 && s <= 0 && a <= 0 || (o += 864e5 * Kn(ei(a) + s), s = 0, a = 0), l.milliseconds = o % 1e3, e = y(o / 1e3), l.seconds = e % 60, t = y(e / 60), l.minutes = t % 60, n = y(t / 60), l.hours = n % 24, s += y(n / 24), r = y(Zn(s)), a += r, s -= Kn(ei(r)), i = y(a / 12), a %= 12, l.days = s, l.months = a, l.years = i, this
        }

        function Zn(e) {
            return 4800 * e / 146097
        }

        function ei(e) {
            return 146097 * e / 4800
        }

        function ti(e) {
            var t, n, i = this._milliseconds;
            if (e = j(e), "month" === e || "year" === e) return t = this._days + i / 864e5, n = this._months + Zn(t), "month" === e ? n : n / 12;
            switch (t = this._days + Math.round(ei(this._months)), e) {
                case "week":
                    return t / 7 + i / 6048e5;
                case "day":
                    return t + i / 864e5;
                case "hour":
                    return 24 * t + i / 36e5;
                case "minute":
                    return 1440 * t + i / 6e4;
                case "second":
                    return 86400 * t + i / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * t) + i;
                default:
                    throw new Error("Unknown unit " + e)
            }
        }

        function ni() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * _(this._months / 12)
        }

        function ii(e) {
            return function() {
                return this.as(e)
            }
        }

        function ri(e) {
            return e = j(e), this[e + "s"]()
        }

        function oi(e) {
            return function() {
                return this._data[e]
            }
        }

        function si() {
            return y(this.days() / 7)
        }

        function ai(e, t, n, i, r) {
            return r.relativeTime(t || 1, !!n, e, i)
        }

        function li(e, t, n) {
            var i = Ft(e).abs(),
                r = uo(i.as("s")),
                o = uo(i.as("m")),
                s = uo(i.as("h")),
                a = uo(i.as("d")),
                l = uo(i.as("M")),
                u = uo(i.as("y")),
                c = r < co.s && ["s", r] || o <= 1 && ["m"] || o < co.m && ["mm", o] || s <= 1 && ["h"] || s < co.h && ["hh", s] || a <= 1 && ["d"] || a < co.d && ["dd", a] || l <= 1 && ["M"] || l < co.M && ["MM", l] || u <= 1 && ["y"] || ["yy", u];
            return c[2] = t, c[3] = +e > 0, c[4] = n, ai.apply(null, c)
        }

        function ui(e) {
            return void 0 === e ? uo : "function" == typeof e && (uo = e, !0)
        }

        function ci(e, t) {
            return void 0 !== co[e] && (void 0 === t ? co[e] : (co[e] = t, !0))
        }

        function hi(e) {
            var t = this.localeData(),
                n = li(this, !e, t);
            return e && (n = t.pastFuture(+this, n)), t.postformat(n)
        }

        function di() {
            var e, t, n, i = ho(this._milliseconds) / 1e3,
                r = ho(this._days),
                o = ho(this._months);
            e = y(i / 60), t = y(e / 60), i %= 60, e %= 60, n = y(o / 12), o %= 12;
            var s = n,
                a = o,
                l = r,
                u = t,
                c = e,
                h = i,
                d = this.asSeconds();
            return d ? (d < 0 ? "-" : "") + "P" + (s ? s + "Y" : "") + (a ? a + "M" : "") + (l ? l + "D" : "") + (u || c || h ? "T" : "") + (u ? u + "H" : "") + (c ? c + "M" : "") + (h ? h + "S" : "") : "P0D"
        }
        var fi, pi;
        pi = Array.prototype.some ? Array.prototype.some : function(e) {
            for (var t = Object(this), n = t.length >>> 0, i = 0; i < n; i++)
                if (i in t && e.call(this, t[i], i, t)) return !0;
            return !1
        };
        var mi = e.momentProperties = [],
            gi = !1,
            vi = {};
        e.suppressDeprecationWarnings = !1, e.deprecationHandler = null;
        var yi;
        yi = Object.keys ? Object.keys : function(e) {
            var t, n = [];
            for (t in e) a(e, t) && n.push(t);
            return n
        };
        var _i, bi = {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            wi = {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            xi = "Invalid date",
            ki = "%d",
            Si = /\d{1,2}/,
            Ti = {
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
            Di = {},
            Mi = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            Ei = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            Ai = {},
            Pi = {},
            Oi = /\d/,
            Ii = /\d\d/,
            Ni = /\d{3}/,
            ji = /\d{4}/,
            Ri = /[+-]?\d{6}/,
            Li = /\d\d?/,
            Fi = /\d\d\d\d?/,
            Hi = /\d\d\d\d\d\d?/,
            zi = /\d{1,3}/,
            Wi = /\d{1,4}/,
            $i = /[+-]?\d{1,6}/,
            Bi = /\d+/,
            Yi = /[+-]?\d+/,
            Ui = /Z|[+-]\d\d:?\d\d/gi,
            qi = /Z|[+-]\d\d(?::?\d\d)?/gi,
            Vi = /[+-]?\d+(\.\d{1,3})?/,
            Qi = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            Gi = {},
            Xi = {},
            Ki = 0,
            Ji = 1,
            Zi = 2,
            er = 3,
            tr = 4,
            nr = 5,
            ir = 6,
            rr = 7,
            or = 8;
        _i = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
            var t;
            for (t = 0; t < this.length; ++t)
                if (this[t] === e) return t;
            return -1
        }, U("M", ["MM", 2], "Mo", function() {
            return this.month() + 1
        }), U("MMM", 0, 0, function(e) {
            return this.localeData().monthsShort(this, e)
        }), U("MMMM", 0, 0, function(e) {
            return this.localeData().months(this, e)
        }), N("month", "M"), L("month", 8), X("M", Li), X("MM", Li, Ii), X("MMM", function(e, t) {
            return t.monthsShortRegex(e)
        }), X("MMMM", function(e, t) {
            return t.monthsRegex(e)
        }), ee(["M", "MM"], function(e, t) {
            t[Ji] = _(e) - 1
        }), ee(["MMM", "MMMM"], function(e, t, n, i) {
            var r = n._locale.monthsParse(e, i, n._strict);
            null != r ? t[Ji] = r : h(n).invalidMonth = e
        });
        var sr = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
            ar = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            lr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            ur = Qi,
            cr = Qi;
        U("Y", 0, 0, function() {
            var e = this.year();
            return e <= 9999 ? "" + e : "+" + e
        }), U(0, ["YY", 2], 0, function() {
            return this.year() % 100
        }), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"), N("year", "y"), L("year", 1), X("Y", Yi), X("YY", Li, Ii), X("YYYY", Wi, ji), X("YYYYY", $i, Ri), X("YYYYYY", $i, Ri), ee(["YYYYY", "YYYYYY"], Ki), ee("YYYY", function(t, n) {
            n[Ki] = 2 === t.length ? e.parseTwoDigitYear(t) : _(t)
        }), ee("YY", function(t, n) {
            n[Ki] = e.parseTwoDigitYear(t)
        }), ee("Y", function(e, t) {
            t[Ki] = parseInt(e, 10)
        }), e.parseTwoDigitYear = function(e) {
            return _(e) + (_(e) > 68 ? 1900 : 2e3)
        };
        var hr = H("FullYear", !0);
        U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"), N("week", "w"), N("isoWeek", "W"), L("week", 5), L("isoWeek", 5), X("w", Li), X("ww", Li, Ii), X("W", Li), X("WW", Li, Ii), te(["w", "ww", "W", "WW"], function(e, t, n, i) {
            t[i.substr(0, 1)] = _(e)
        });
        var dr = {
            dow: 0,
            doy: 6
        };
        U("d", 0, "do", "day"), U("dd", 0, 0, function(e) {
            return this.localeData().weekdaysMin(this, e)
        }), U("ddd", 0, 0, function(e) {
            return this.localeData().weekdaysShort(this, e)
        }), U("dddd", 0, 0, function(e) {
            return this.localeData().weekdays(this, e)
        }), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), N("day", "d"), N("weekday", "e"), N("isoWeekday", "E"), L("day", 11), L("weekday", 11), L("isoWeekday", 11), X("d", Li), X("e", Li), X("E", Li), X("dd", function(e, t) {
            return t.weekdaysMinRegex(e)
        }), X("ddd", function(e, t) {
            return t.weekdaysShortRegex(e)
        }), X("dddd", function(e, t) {
            return t.weekdaysRegex(e)
        }), te(["dd", "ddd", "dddd"], function(e, t, n, i) {
            var r = n._locale.weekdaysParse(e, i, n._strict);
            null != r ? t.d = r : h(n).invalidWeekday = e
        }), te(["d", "e", "E"], function(e, t, n, i) {
            t[i] = _(e)
        });
        var fr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            pr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            mr = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            gr = Qi,
            vr = Qi,
            yr = Qi;
        U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, $e), U("k", ["kk", 2], 0, Be), U("hmm", 0, 0, function() {
            return "" + $e.apply(this) + Y(this.minutes(), 2)
        }), U("hmmss", 0, 0, function() {
            return "" + $e.apply(this) + Y(this.minutes(), 2) + Y(this.seconds(), 2)
        }), U("Hmm", 0, 0, function() {
            return "" + this.hours() + Y(this.minutes(), 2)
        }), U("Hmmss", 0, 0, function() {
            return "" + this.hours() + Y(this.minutes(), 2) + Y(this.seconds(), 2)
        }), Ye("a", !0), Ye("A", !1), N("hour", "h"), L("hour", 13), X("a", Ue), X("A", Ue), X("H", Li), X("h", Li), X("HH", Li, Ii), X("hh", Li, Ii), X("hmm", Fi), X("hmmss", Hi), X("Hmm", Fi), X("Hmmss", Hi), ee(["H", "HH"], er), ee(["a", "A"], function(e, t, n) {
            n._isPm = n._locale.isPM(e), n._meridiem = e
        }), ee(["h", "hh"], function(e, t, n) {
            t[er] = _(e), h(n).bigHour = !0
        }), ee("hmm", function(e, t, n) {
            var i = e.length - 2;
            t[er] = _(e.substr(0, i)), t[tr] = _(e.substr(i)), h(n).bigHour = !0
        }), ee("hmmss", function(e, t, n) {
            var i = e.length - 4,
                r = e.length - 2;
            t[er] = _(e.substr(0, i)), t[tr] = _(e.substr(i, 2)), t[nr] = _(e.substr(r)), h(n).bigHour = !0
        }), ee("Hmm", function(e, t, n) {
            var i = e.length - 2;
            t[er] = _(e.substr(0, i)), t[tr] = _(e.substr(i))
        }), ee("Hmmss", function(e, t, n) {
            var i = e.length - 4,
                r = e.length - 2;
            t[er] = _(e.substr(0, i)), t[tr] = _(e.substr(i, 2)), t[nr] = _(e.substr(r))
        });
        var _r, br = /[ap]\.?m?\.?/i,
            wr = H("Hours", !0),
            xr = {
                calendar: bi,
                longDateFormat: wi,
                invalidDate: xi,
                ordinal: ki,
                ordinalParse: Si,
                relativeTime: Ti,
                months: ar,
                monthsShort: lr,
                week: dr,
                weekdays: fr,
                weekdaysMin: mr,
                weekdaysShort: pr,
                meridiemParse: br
            },
            kr = {},
            Sr = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
            Tr = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
            Cr = /Z|[+-]\d\d(?::?\d\d)?/,
            Dr = [
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
            Mr = [
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
            Er = /^\/?Date\((\-?\d+)/i;
        e.createFromInputFallback = x("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
        }), e.ISO_8601 = function() {};
        var Ar = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var e = vt.apply(null, arguments);
                return this.isValid() && e.isValid() ? e < this ? this : e : f()
            }),
            Pr = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                var e = vt.apply(null, arguments);
                return this.isValid() && e.isValid() ? e > this ? this : e : f()
            }),
            Or = function() {
                return Date.now ? Date.now() : +new Date
            };
        kt("Z", ":"), kt("ZZ", ""), X("Z", qi), X("ZZ", qi), ee(["Z", "ZZ"], function(e, t, n) {
            n._useUTC = !0, n._tzm = St(qi, e)
        });
        var Ir = /([\+\-]|\d\d)/gi;
        e.updateOffset = function() {};
        var Nr = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
            jr = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
        Ft.fn = wt.prototype;
        var Rr = Bt(1, "add"),
            Lr = Bt(-1, "subtract");
        e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var Fr = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
            return void 0 === e ? this.localeData() : this.locale(e)
        });
        U(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }), U(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        }), Sn("gggg", "weekYear"), Sn("ggggg", "weekYear"), Sn("GGGG", "isoWeekYear"), Sn("GGGGG", "isoWeekYear"), N("weekYear", "gg"), N("isoWeekYear", "GG"), L("weekYear", 1), L("isoWeekYear", 1), X("G", Yi), X("g", Yi), X("GG", Li, Ii), X("gg", Li, Ii), X("GGGG", Wi, ji), X("gggg", Wi, ji), X("GGGGG", $i, Ri), X("ggggg", $i, Ri), te(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, i) {
            t[i.substr(0, 2)] = _(e)
        }), te(["gg", "GG"], function(t, n, i, r) {
            n[r] = e.parseTwoDigitYear(t)
        }), U("Q", 0, "Qo", "quarter"), N("quarter", "Q"), L("quarter", 7), X("Q", Oi), ee("Q", function(e, t) {
            t[Ji] = 3 * (_(e) - 1)
        }), U("D", ["DD", 2], "Do", "date"), N("date", "D"), L("date", 9), X("D", Li), X("DD", Li, Ii), X("Do", function(e, t) {
            return e ? t._ordinalParse : t._ordinalParseLenient
        }), ee(["D", "DD"], Zi), ee("Do", function(e, t) {
            t[Zi] = _(e.match(Li)[0], 10)
        });
        var Hr = H("Date", !0);
        U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), N("dayOfYear", "DDD"), L("dayOfYear", 4), X("DDD", zi), X("DDDD", Ni), ee(["DDD", "DDDD"], function(e, t, n) {
            n._dayOfYear = _(e)
        }), U("m", ["mm", 2], 0, "minute"), N("minute", "m"), L("minute", 14), X("m", Li), X("mm", Li, Ii), ee(["m", "mm"], tr);
        var zr = H("Minutes", !1);
        U("s", ["ss", 2], 0, "second"), N("second", "s"), L("second", 15), X("s", Li), X("ss", Li, Ii), ee(["s", "ss"], nr);
        var Wr = H("Seconds", !1);
        U("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), U(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, function() {
            return 10 * this.millisecond()
        }), U(0, ["SSSSS", 5], 0, function() {
            return 100 * this.millisecond()
        }), U(0, ["SSSSSS", 6], 0, function() {
            return 1e3 * this.millisecond()
        }), U(0, ["SSSSSSS", 7], 0, function() {
            return 1e4 * this.millisecond()
        }), U(0, ["SSSSSSSS", 8], 0, function() {
            return 1e5 * this.millisecond()
        }), U(0, ["SSSSSSSSS", 9], 0, function() {
            return 1e6 * this.millisecond()
        }), N("millisecond", "ms"), L("millisecond", 16), X("S", zi, Oi), X("SS", zi, Ii), X("SSS", zi, Ni);
        var $r;
        for ($r = "SSSS"; $r.length <= 9; $r += "S") X($r, Bi);
        for ($r = "S"; $r.length <= 9; $r += "S") ee($r, In);
        var Br = H("Milliseconds", !1);
        U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
        var Yr = g.prototype;
        Yr.add = Rr, Yr.calendar = qt, Yr.clone = Vt, Yr.diff = en, Yr.endOf = fn, Yr.format = on, Yr.from = sn, Yr.fromNow = an, Yr.to = ln, Yr.toNow = un, Yr.get = $, Yr.invalidAt = xn, Yr.isAfter = Qt, Yr.isBefore = Gt, Yr.isBetween = Xt, Yr.isSame = Kt, Yr.isSameOrAfter = Jt, Yr.isSameOrBefore = Zt, Yr.isValid = bn, Yr.lang = Fr, Yr.locale = cn, Yr.localeData = hn, Yr.max = Pr, Yr.min = Ar, Yr.parsingFlags = wn, Yr.set = B, Yr.startOf = dn, Yr.subtract = Lr, Yr.toArray = vn, Yr.toObject = yn, Yr.toDate = gn, Yr.toISOString = rn, Yr.toJSON = _n, Yr.toString = nn, Yr.unix = mn, Yr.valueOf = pn, Yr.creationData = kn, Yr.year = hr, Yr.isLeapYear = ge, Yr.weekYear = Tn, Yr.isoWeekYear = Cn, Yr.quarter = Yr.quarters = Pn, Yr.month = ue, Yr.daysInMonth = ce, Yr.week = Yr.weeks = Ce, Yr.isoWeek = Yr.isoWeeks = De, Yr.weeksInYear = Mn, Yr.isoWeeksInYear = Dn, Yr.date = Hr, Yr.day = Yr.days = je, Yr.weekday = Re, Yr.isoWeekday = Le, Yr.dayOfYear = On, Yr.hour = Yr.hours = wr, Yr.minute = Yr.minutes = zr, Yr.second = Yr.seconds = Wr, Yr.millisecond = Yr.milliseconds = Br, Yr.utcOffset = Dt, Yr.utc = Et, Yr.local = At, Yr.parseZone = Pt, Yr.hasAlignedHourOffset = Ot, Yr.isDST = It, Yr.isLocal = jt, Yr.isUtcOffset = Rt, Yr.isUtc = Lt, Yr.isUTC = Lt, Yr.zoneAbbr = Nn, Yr.zoneName = jn, Yr.dates = x("dates accessor is deprecated. Use date instead.", Hr), Yr.months = x("months accessor is deprecated. Use month instead", ue), Yr.years = x("years accessor is deprecated. Use year instead", hr), Yr.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Mt), Yr.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Nt);
        var Ur = Yr,
            qr = D.prototype;
        qr.calendar = M, qr.longDateFormat = E, qr.invalidDate = A, qr.ordinal = P, qr.preparse = Fn, qr.postformat = Fn, qr.relativeTime = O, qr.pastFuture = I, qr.set = T, qr.months = re, qr.monthsShort = oe, qr.monthsParse = ae, qr.monthsRegex = de, qr.monthsShortRegex = he, qr.week = ke, qr.firstDayOfYear = Te, qr.firstDayOfWeek = Se, qr.weekdays = Ae, qr.weekdaysMin = Oe, qr.weekdaysShort = Pe, qr.weekdaysParse = Ne, qr.weekdaysRegex = Fe, qr.weekdaysShortRegex = He, qr.weekdaysMinRegex = ze, qr.isPM = qe, qr.meridiem = Ve, Ke("en", {
            ordinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10,
                    n = 1 === _(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                return e + n
            }
        }), e.lang = x("moment.lang is deprecated. Use moment.locale instead.", Ke), e.langData = x("moment.langData is deprecated. Use moment.localeData instead.", et);
        var Vr = Math.abs,
            Qr = ii("ms"),
            Gr = ii("s"),
            Xr = ii("m"),
            Kr = ii("h"),
            Jr = ii("d"),
            Zr = ii("w"),
            eo = ii("M"),
            to = ii("y"),
            no = oi("milliseconds"),
            io = oi("seconds"),
            ro = oi("minutes"),
            oo = oi("hours"),
            so = oi("days"),
            ao = oi("months"),
            lo = oi("years"),
            uo = Math.round,
            co = {
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            },
            ho = Math.abs,
            fo = wt.prototype;
        fo.abs = Vn, fo.add = Gn, fo.subtract = Xn, fo.as = ti, fo.asMilliseconds = Qr, fo.asSeconds = Gr, fo.asMinutes = Xr, fo.asHours = Kr, fo.asDays = Jr, fo.asWeeks = Zr, fo.asMonths = eo, fo.asYears = to, fo.valueOf = ni, fo._bubble = Jn, fo.get = ri, fo.milliseconds = no, fo.seconds = io, fo.minutes = ro, fo.hours = oo, fo.days = so, fo.weeks = si, fo.months = ao, fo.years = lo, fo.humanize = hi, fo.toISOString = di, fo.toString = di, fo.toJSON = di, fo.locale = cn, fo.localeData = hn, fo.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", di), fo.lang = Fr, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), X("x", Yi), X("X", Vi), ee("X", function(e, t, n) {
            n._d = new Date(1e3 * parseFloat(e, 10))
        }), ee("x", function(e, t, n) {
            n._d = new Date(_(e))
        }), e.version = "2.14.1", t(vt), e.fn = Ur, e.min = _t, e.max = bt, e.now = Or, e.utc = u, e.unix = Rn, e.months = $n, e.isDate = o, e.locale = Ke, e.invalid = f, e.duration = Ft, e.isMoment = v, e.weekdays = Yn, e.parseZone = Ln, e.localeData = et, e.isDuration = xt, e.monthsShort = Bn, e.weekdaysMin = qn, e.defineLocale = Je, e.updateLocale = Ze, e.locales = tt, e.weekdaysShort = Un, e.normalizeUnits = j, e.relativeTimeRounding = ui, e.relativeTimeThreshold = ci, e.calendarFormat = Ut, e.prototype = Ur;
        var po = e;
        return po
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["moment"], function(n) {
            return e.DateRange = t(n)
        }) : "object" == typeof exports ? module.exports = t(require("moment")) : e.DateRange = t(moment)
    }(this, function(e) {
        function t(t, n) {
            var i, r = t,
                o = n;
            1 !== arguments.length && void 0 !== n || ("object" == typeof t && 2 === t.length ? (r = t[0], o = t[1]) : "string" == typeof t && (i = t.split("/"), r = i[0], o = i[1])), this.start = e(null === r ? -864e13 : r), this.end = e(null === o ? 864e13 : o)
        }

        function n(t, n, i) {
            for (var r = e(this.start); this.contains(r, i);) n.call(this, r.clone()), r.add(1, t)
        }

        function i(t, n, i) {
            var r = this / t,
                o = Math.floor(r);
            if (o !== 1 / 0) {
                o === r && i && o--;
                for (var s = 0; s <= o; s++) n.call(this, e(this.start.valueOf() + t.valueOf() * s))
            }
        }
        var r = {
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
            var i = this.start,
                r = this.end;
            return e instanceof t ? i <= e.start && (r > e.end || r.isSame(e.end) && !n) : i <= e && (r > e || r.isSame(e) && !n)
        }, t.prototype.overlaps = function(e) {
            return null !== this.intersect(e)
        }, t.prototype.intersect = function(e) {
            var n = this.start,
                i = this.end;
            return n <= e.start && e.start < i && i < e.end ? new t(e.start, i) : e.start < n && n < e.end && e.end <= i ? new t(n, e.end) : e.start < n && n <= i && i < e.end ? this : n <= e.start && e.start <= e.end && e.end <= i ? e : null
        }, t.prototype.add = function(n) {
            return this.overlaps(n) ? new t(e.min(this.start, n.start), e.max(this.end, n.end)) : null
        }, t.prototype.subtract = function(e) {
            var n = this.start,
                i = this.end;
            return null === this.intersect(e) ? [this] : e.start <= n && n < i && i <= e.end ? [] : e.start <= n && n < e.end && e.end < i ? [new t(e.end, i)] : n < e.start && e.start < i && i <= e.end ? [new t(n, e.start)] : n < e.start && e.start < e.end && e.end < i ? [new t(n, e.start), new t(e.end, i)] : n < e.start && e.start < i && e.end < i ? [new t(n, e.start), new t(e.start, i)] : void 0
        }, t.prototype.by = function(e, t, r) {
            return "string" == typeof e ? n.call(this, e, t, r) : i.call(this, e, t, r), this
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
        }, e.range = function(n, i) {
            return n in r ? new t(e(this).startOf(n), e(this).endOf(n)) : new t(n, i)
        }, e.range.constructor = t, e.fn.range = e.range, e.fn.within = function(e) {
            return e.contains(this._d)
        }, t
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["moment"], function(n) {
            return e.DateRange = t(n)
        }) : "object" == typeof exports ? module.exports = t(require("moment")) : e.DateRange = t(moment)
    }(this, function(e) {
        function t(t, n) {
            var i, r = t,
                o = n;
            1 !== arguments.length && void 0 !== n || ("object" == typeof t && 2 === t.length ? (r = t[0], o = t[1]) : "string" == typeof t && (i = t.split("/"), r = i[0], o = i[1])), this.start = e(null === r ? -864e13 : r), this.end = e(null === o ? 864e13 : o)
        }

        function n(t, n, i) {
            for (var r = e(this.start); this.contains(r, i);) n.call(this, r.clone()), r.add(1, t)
        }

        function i(t, n, i) {
            var r = this / t,
                o = Math.floor(r);
            if (o !== 1 / 0) {
                o === r && i && o--;
                for (var s = 0; s <= o; s++) n.call(this, e(this.start.valueOf() + t.valueOf() * s))
            }
        }
        var r = {
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
            var i = this.start,
                r = this.end;
            return e instanceof t ? i <= e.start && (r > e.end || r.isSame(e.end) && !n) : i <= e && (r > e || r.isSame(e) && !n)
        }, t.prototype.overlaps = function(e) {
            return null !== this.intersect(e)
        }, t.prototype.intersect = function(e) {
            var n = this.start,
                i = this.end;
            return n <= e.start && e.start < i && i < e.end ? new t(e.start, i) : e.start < n && n < e.end && e.end <= i ? new t(n, e.end) : e.start < n && n <= i && i < e.end ? this : n <= e.start && e.start <= e.end && e.end <= i ? e : null
        }, t.prototype.add = function(n) {
            return this.overlaps(n) ? new t(e.min(this.start, n.start), e.max(this.end, n.end)) : null
        }, t.prototype.subtract = function(e) {
            var n = this.start,
                i = this.end;
            return null === this.intersect(e) ? [this] : e.start <= n && n < i && i <= e.end ? [] : e.start <= n && n < e.end && e.end < i ? [new t(e.end, i)] : n < e.start && e.start < i && i <= e.end ? [new t(n, e.start)] : n < e.start && e.start < e.end && e.end < i ? [new t(n, e.start), new t(e.end, i)] : n < e.start && e.start < i && e.end < i ? [new t(n, e.start), new t(e.start, i)] : void 0
        }, t.prototype.by = function(e, t, r) {
            return "string" == typeof e ? n.call(this, e, t, r) : i.call(this, e, t, r), this
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
        }, e.range = function(n, i) {
            return n in r ? new t(e(this).startOf(n), e(this).endOf(n)) : new t(n, i)
        }, e.range.constructor = t, e.fn.range = e.range, e.fn.within = function(e) {
            return e.contains(this._d)
        }, t
    });
var Dobbin = function(e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var r = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.i = function(e) {
            return e
        }, t.d = function(e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "/assets/", t(t.s = 10)
    }([function(e, t, n) {
        "use strict";

        function i(e) {
            e.Promise && (r = e.Promise), e.serviceUrls && (e.serviceUrls.mixpanel && (a.mixpanel = e.serviceUrls.mixpanel), e.serviceUrls.spade && (a.spade = e.serviceUrls.spade)), e.serviceBatchSizes && (e.serviceBatchSizes.mixpanel && (l.mixpanel = e.serviceBatchSizes.mixpanel), e.serviceBatchSizes.spade && (l.spade = e.serviceBatchSizes.spade))
        }
        n.d(t, "e", function() {
            return o
        }), n.d(t, "f", function() {
            return s
        }), t.b = i, n.d(t, "a", function() {
            return r
        }), n.d(t, "c", function() {
            return a
        }), n.d(t, "d", function() {
            return l
        });
        var r, o = "mixpanel",
            s = "spade",
            a = {
                spade: {
                    href: "//spade.twitch.tv/"
                },
                mixpanel: {
                    href: "//api.mixpanel.com/track"
                }
            },
            l = {
                spade: 100,
                mixpanel: 50
            }
    }, function(e, t, n) {
        ! function(n, i) {
            e.exports = t = i()
        }(this, function() {
            var e = e || function(e, t) {
                var n = Object.create || function() {
                        function e() {}
                        return function(t) {
                            var n;
                            return e.prototype = t, n = new e, e.prototype = null, n
                        }
                    }(),
                    i = {},
                    r = i.lib = {},
                    o = r.Base = function() {
                        return {
                            extend: function(e) {
                                var t = n(this);
                                return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
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
                        }
                    }(),
                    s = r.WordArray = o.extend({
                        init: function(e, n) {
                            e = this.words = e || [], n != t ? this.sigBytes = n : this.sigBytes = 4 * e.length
                        },
                        toString: function(e) {
                            return (e || l).stringify(this)
                        },
                        concat: function(e) {
                            var t = this.words,
                                n = e.words,
                                i = this.sigBytes,
                                r = e.sigBytes;
                            if (this.clamp(), i % 4)
                                for (var o = 0; o < r; o++) {
                                    var s = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                    t[i + o >>> 2] |= s << 24 - (i + o) % 4 * 8
                                } else
                                    for (var o = 0; o < r; o += 4) t[i + o >>> 2] = n[o >>> 2];
                            return this.sigBytes += r, this
                        },
                        clamp: function() {
                            var t = this.words,
                                n = this.sigBytes;
                            t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4)
                        },
                        clone: function() {
                            var e = o.clone.call(this);
                            return e.words = this.words.slice(0), e
                        },
                        random: function(t) {
                            for (var n, i = [], r = function(t) {
                                    var t = t,
                                        n = 987654321,
                                        i = 4294967295;
                                    return function() {
                                        n = 36969 * (65535 & n) + (n >> 16) & i, t = 18e3 * (65535 & t) + (t >> 16) & i;
                                        var r = (n << 16) + t & i;
                                        return r /= 4294967296, r += .5, r * (e.random() > .5 ? 1 : -1)
                                    }
                                }, o = 0; o < t; o += 4) {
                                var a = r(4294967296 * (n || e.random()));
                                n = 987654071 * a(), i.push(4294967296 * a() | 0)
                            }
                            return new s.init(i, t)
                        }
                    }),
                    a = i.enc = {},
                    l = a.Hex = {
                        stringify: function(e) {
                            for (var t = e.words, n = e.sigBytes, i = [], r = 0; r < n; r++) {
                                var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                                i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16))
                            }
                            return i.join("")
                        },
                        parse: function(e) {
                            for (var t = e.length, n = [], i = 0; i < t; i += 2) n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
                            return new s.init(n, t / 2)
                        }
                    },
                    u = a.Latin1 = {
                        stringify: function(e) {
                            for (var t = e.words, n = e.sigBytes, i = [], r = 0; r < n; r++) {
                                var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                                i.push(String.fromCharCode(o))
                            }
                            return i.join("")
                        },
                        parse: function(e) {
                            for (var t = e.length, n = [], i = 0; i < t; i++) n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
                            return new s.init(n, t)
                        }
                    },
                    c = a.Utf8 = {
                        stringify: function(e) {
                            try {
                                return decodeURIComponent(escape(u.stringify(e)))
                            } catch (e) {
                                throw new Error("Malformed UTF-8 data")
                            }
                        },
                        parse: function(e) {
                            return u.parse(unescape(encodeURIComponent(e)))
                        }
                    },
                    h = r.BufferedBlockAlgorithm = o.extend({
                        reset: function() {
                            this._data = new s.init, this._nDataBytes = 0
                        },
                        _append: function(e) {
                            "string" == typeof e && (e = c.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                        },
                        _process: function(t) {
                            var n = this._data,
                                i = n.words,
                                r = n.sigBytes,
                                o = this.blockSize,
                                a = 4 * o,
                                l = r / a;
                            l = t ? e.ceil(l) : e.max((0 | l) - this._minBufferSize, 0);
                            var u = l * o,
                                c = e.min(4 * u, r);
                            if (u) {
                                for (var h = 0; h < u; h += o) this._doProcessBlock(i, h);
                                var d = i.splice(0, u);
                                n.sigBytes -= c
                            }
                            return new s.init(d, c)
                        },
                        clone: function() {
                            var e = o.clone.call(this);
                            return e._data = this._data.clone(), e
                        },
                        _minBufferSize: 0
                    }),
                    d = (r.Hasher = h.extend({
                        cfg: o.extend(),
                        init: function(e) {
                            this.cfg = this.cfg.extend(e), this.reset()
                        },
                        reset: function() {
                            h.reset.call(this), this._doReset()
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
                                return new e.init(n).finalize(t)
                            }
                        },
                        _createHmacHelper: function(e) {
                            return function(t, n) {
                                return new d.HMAC.init(e, n).finalize(t)
                            }
                        }
                    }), i.algo = {});
                return i
            }(Math);
            return e
        })
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(0),
            r = n(8),
            o = n(6),
            s = n(9);
        n.d(t, "Dobbin", function() {
            return a
        });
        var a = function() {
            function e() {}
            return e.trackEvent = function(e, t, n) {
                void 0 === n && (n = ["spade", "mixpanel"]);
                var i = {
                    event: e,
                    properties: t
                };
                return this.eventBuffer.forEach(function(e, t) {
                    n.indexOf(t) !== -1 && e.push(i)
                }), this.queueFlush()
            }, e.queueFlush = function() {
                var e = this;
                return this.queuedFlush || (this.queuedFlush = new i.a(function(t) {
                    n.i(r.a)(function(n) {
                        t(e.flush(n))
                    })
                })), this.queuedFlush
            }, e.flush = function(e) {
                this.queuedFlush = void 0;
                for (var t = this.eventBuffer.totalSize(), n = t; n > 0;) {
                    if (e.timeRemaining() <= 0) {
                        this.queueFlush();
                        break
                    }
                    this.eventBuffer.forEach(function(e) {
                        n -= e.flushOnce()
                    })
                }
                return {
                    flushed: t - n,
                    buffered: n
                }
            }, e
        }();
        a.events = {
            EVENT_PAGEVIEW: s.a,
            UNTRUSTED_EVENT_PAGEVIEW: s.b
        }, a.configure = i.b, a.eventBuffer = new o.a, a.queuedFlush = void 0
    }, function(e, t, n) {
        ! function(i, r) {
            e.exports = t = r(n(1))
        }(this, function(e) {
            return function() {
                function t(e, t, n) {
                    for (var i = [], o = 0, s = 0; s < t; s++)
                        if (s % 4) {
                            var a = n[e.charCodeAt(s - 1)] << s % 4 * 2,
                                l = n[e.charCodeAt(s)] >>> 6 - s % 4 * 2;
                            i[o >>> 2] |= (a | l) << 24 - o % 4 * 8, o++
                        }
                    return r.create(i, o)
                }
                var n = e,
                    i = n.lib,
                    r = i.WordArray,
                    o = n.enc;
                o.Base64 = {
                    stringify: function(e) {
                        var t = e.words,
                            n = e.sigBytes,
                            i = this._map;
                        e.clamp();
                        for (var r = [], o = 0; o < n; o += 3)
                            for (var s = t[o >>> 2] >>> 24 - o % 4 * 8 & 255, a = t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255, l = t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, u = s << 16 | a << 8 | l, c = 0; c < 4 && o + .75 * c < n; c++) r.push(i.charAt(u >>> 6 * (3 - c) & 63));
                        var h = i.charAt(64);
                        if (h)
                            for (; r.length % 4;) r.push(h);
                        return r.join("")
                    },
                    parse: function(e) {
                        var n = e.length,
                            i = this._map,
                            r = this._reverseMap;
                        if (!r) {
                            r = this._reverseMap = [];
                            for (var o = 0; o < i.length; o++) r[i.charCodeAt(o)] = o
                        }
                        var s = i.charAt(64);
                        if (s) {
                            var a = e.indexOf(s);
                            a !== -1 && (n = a)
                        }
                        return t(e, n, r)
                    },
                    _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                }
            }(), e.enc.Base64
        })
    }, function(e, t, n) {
        ! function(i, r) {
            e.exports = t = r(n(1))
        }(this, function(e) {
            return e.enc.Utf8
        })
    }, function(e, t, n) {
        "use strict";

        function i(e, t, n, i) {
            void 0 === n && (n = {}), void 0 === i && (i = "");
            var r = new XMLHttpRequest;
            return r.open(e, t, !0), n && Object.keys(n).forEach(function(e) {
                n.hasOwnProperty(e) && r.setRequestHeader(e, n[e])
            }), new o.a(function(n, o) {
                r.onreadystatechange = function() {
                    r.readyState === s && (r.status >= 200 && r.status < 300 ? n(r.responseText) : o(new Error("dobbin.js " + e + " " + t + " responded " + r.status + "\n" + r.responseText)))
                }, r.send(i)
            })
        }

        function r(e, t) {
            return i("POST", e, {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
            }, t)
        }
        var o = n(0);
        t.a = r;
        var s = 4
    }, function(e, t, n) {
        "use strict";
        var i = n(0),
            r = n(7),
            o = n(5);
        n.d(t, "a", function() {
            return a
        });
        var s = function() {
                function e(e) {
                    this.service = e, this.events = []
                }
                return Object.defineProperty(e.prototype, "length", {
                    get: function() {
                        return this.events.length
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.push = function(e) {
                    return this.events.push(e)
                }, e.prototype.flushOnce = function() {
                    if (0 === this.events.length) return 0;
                    var e = this.getBatch(),
                        t = n.i(r.a)(e),
                        s = "data=" + t;
                    return n.i(o.a)(i.c[this.service].href, s), e.length
                }, e.prototype.getBatch = function() {
                    var e = Math.max(i.d[this.service], 1);
                    return this.events.splice(0, e)
                }, e
            }(),
            a = function() {
                function e() {
                    this.services = (e = {}, e[i.e] = new s(i.e), e[i.f] = new s(i.f), e);
                    var e
                }
                return e.prototype.forEach = function(e) {
                    var t = this;
                    Object.keys(this.services).forEach(function(n) {
                        e(t.services[n], n)
                    })
                }, e.prototype.totalSize = function() {
                    var e = 0;
                    return this.forEach(function(t) {
                        e += t.length
                    }), e
                }, e
            }()
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            return r.stringify(o.parse(JSON.stringify(e)))
        }
        var r = n(3),
            o = (n.n(r), n(4));
        n.n(o);
        t.a = i
    }, function(e, t, n) {
        "use strict";

        function i(e) {
            function t(i) {
                var r = 24;
                i - n < r ? e({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, r - (performance.now() - i))
                    }
                }) : (n = i, requestAnimationFrame(t))
            }
            var n = performance.now();
            requestAnimationFrame(t)
        }
        n.d(t, "a", function() {
            return r
        });
        var r = window.requestIdleCallback || i
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }), n.d(t, "b", function() {
            return r
        });
        var i = "pageview",
            r = "x_untrusted_pageview"
    }, function(e, t, n) {
        e.exports = n(2)
    }]),
    BaseDomain = "justin.tv",
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
                    var i = t[n];
                    return this.each(function() {
                        e(this).css("zoom", "1").css("opacity", Math.floor(i / 100)).css("filter", "alpha(opacity=" + i + ")")
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
            "undefined" != typeof PP && (PP.channel && googletag.pubads().setTargeting("channel", PP.channel), PP.channelMetaGame && googletag.pubads().setTargeting("game", PP.channelMetaGame), URI().query(!0).campaign && googletag.pubads().setTargeting("campaign", URI().query(!0).campaign), googletag.pubads().setTargeting("server", Twitch.deployFlavor)), googletag.pubads().collapseEmptyDivs(!0), "front_page" !== window.SitePageType && "channel" !== window.SitePageType || (googletag.pubads().enableSingleRequest(), googletag.pubads().disableInitialLoad())
        })
    }(jQuery), window.onbeforeunload = "Twitch.player.getPlayer().pauseVideo();", window.onunload = "Twitch.player.getPlayer().pauseVideo();",
    function(e) {
        window.NotificationsTracker = {
            startTracking: function() {
                var e = URI().filename();
                if ("embed" !== e && "chat" !== e) {
                    var t, n = {},
                        i = "Notifications:Dismissed",
                        r = {
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
                        o = _.defaults({
                            timeout: 5e3,
                            escape: !1
                        }, r),
                        s = function(e) {
                            var t = Twitch.storage.getObject(i) || [];
                            t.push(e), Twitch.storage.setObject(i, t)
                        },
                        a = function(e) {
                            var t = Twitch.storage.getObject(i) || [];
                            return _.contains(t, e)
                        },
                        l = function(e, t, i) {
                            a(e) || (n[e] = Twitch.notify[t](i, r, function() {
                                s(e)
                            }))
                        },
                        u = (_.after(2, function(e) {
                            if (e)
                                if (t) t.setText('You have <a href="/messages/inbox">new messages</a>!');
                                else {
                                    var n = 'You have a <a href="' + Twitch.uri.message(e) + '">new message</a>!';
                                    t = Twitch.notify.alert(n, o, function() {
                                        t = null
                                    })
                                }
                        }), function(e) {
                            Twitch.api.get("/api/notifications").then(function(t) {
                                _.each(e, function(e) {
                                    _.each(t[e], function(e, t) {
                                        l(t, e.type, e.message)
                                    })
                                })
                            })
                        }),
                        c = ["everyone"];
                    Twitch.user.isLoggedIn() ? Twitch.user(function(e) {
                        if (e.is_partner && c.push("partners"), e.is_broadcaster && e.last_broadcast_time) {
                            var t = 2628e6,
                                n = (new Date).getTime() - new Date(e.last_broadcast_time).getTime();
                            n < t && c.push("recent_broadcasters")
                        }
                        u(c)
                    }, function() {
                        u(c)
                    }) : u(c)
                }
            }
        }
    }(jQuery),
    function(e) {
        e(function() {
            var t, n, i, r = e("body");
            r.bind("login.overlay.show", function(o, s) {
                return t && s.id === n ? (t.show(), void i.show()) : void r.overlay(s.url, function(r, o) {
                    t = r, i = o, n = r.attr("id"), e("#subwindow_close").click(function(t) {
                        t.preventDefault(), e(this).trigger("overlay.hide")
                    }), e("#signup_form .birthday_fields select").dropdownify(), r.find('input[name="follow"]').val(s.follow), r.find('input[name="mp_source_action"]').val(s.mpSourceAction), ich.grabTemplates()
                }, s)
            }), e("#signup_form .birthday_fields select").dropdownify()
        }), window.addEventListener("message", function(t) {
            var n;
            switch (n = t.data && "{" === t.data[0] ? JSON.parse(t.data) : t.data, n.messageType) {
                case "loaded":
                    var i = e("iframe[name=passport]")[0],
                        r = {
                            width: e("#passport_iframe_container").width()
                        };
                    return void i.contentWindow.postMessage(JSON.stringify(r), "*");
                case "height":
                    return e("#passport_iframe_container").css({
                        height: n.height + 25
                    }), e("#passport_modal").css({
                        visibility: "visible"
                    }), i = e('iframe[name="passport"]').contents()[0], void(n.focus && e(i).find("#username").focus());
                case "passportCallback":
                    return void window.location.assign(n.redirectURI)
            }
        });
        var t = function(e, t) {
            var n = {};
            window.SitePageType && (n.source = window.SitePageType), t && (n.source_action = t), Twitch.tracking.spadeAndMixpanel.trackEvent(e, n)
        };
        e.showAuthenticationOverlay = function(n, i) {
            var r, o = n + "_subwindow",
                s = "/user/" + n + "_popup",
                a = n + "-click",
                l = "login" === n ? "#login_user_login" : "#user_login";
            i = i || {}, i.params && (s += "?" + e.param(i.params)), r = {
                url: s,
                width: "420px",
                id: o,
                focusOnLoad: l,
                destroyOnHide: !1,
                follow: i.follow,
                mpSourceAction: i.mpSourceAction,
                formType: n
            }, e("body").trigger("login.overlay.show", [r]), t(a, i.mpSourceAction)
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
        e.fn.overlay = function(t, n, i) {
            return i = e.extend({
                closeOnEsc: !0,
                closeOnExteriorClick: !0,
                width: "420px",
                useIframe: !1,
                destroyOnHide: !0
            }, i), this.each(function() {
                if (!t) throw "Please provide a contentURL";
                var r = e(this);
                if ("absolute" === r.css("position")) throw "Parent of an overlay cannot be positioned absolute";
                var o = function(t) {
                    var o = i.isIframe ? "<iframe></iframe>" : "<div></div>",
                        s = e(o).addClass("twitch_subwindow");
                    "object" == typeof t ? t.appendTo(s) : s.html(t), i.id && s.attr("id", i.id), s.css("width", i.width);
                    var a = e("<div></div>").addClass("twitch_subwindow_container");
                    r.prepend(a).show(), a.prepend(s).show(), r.scrollTop(0), i.focusOnLoad && e(i.focusOnLoad).focus(), i.closeOnEsc && r.on("keyup.overlay", function(e) {
                        27 === e.keyCode && r.trigger("overlay.hide")
                    }), i.closeOnExteriorClick && e("body.overlay").on("click.overlay", function(t) {
                        e(t.target).hasClass("twitch_subwindow_container") && r.trigger("overlay.hide")
                    }), r.on("overlay.hide", function(e) {
                        e.stopPropagation(), i.destroyOnHide ? (s.remove(), a.remove()) : (s.hide(), a.hide())
                    }), "function" == typeof n && n(s, a)
                };
                "string" == typeof t ? e.get(t).success(o) : o(t);
            })
        }, e.fn.teardownOverlay = function() {
            return this.each(function() {
                var t = e(this);
                t.off("keyup.overlay"), e("body.overlay").off("click.overlay"), t.off("overlay.hide"), e(".twitch_subwindow_container").remove()
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
                    e("#left_col").outerWidth() > e("#small_nav .content:first").outerWidth() ? (Twitch.storage.set("leftColClosed", "true"), i()) : (Twitch.storage.set("leftColClosed", "false"), r())
                },
                i = function() {
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
                r = function() {
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
            t.leftAlwaysCollapsed && (n = i, r = i, e("#main_col").css({
                "margin-left": e("#small_nav .content").outerWidth() + "px"
            }));
            var o = function() {
                    e("#right_col").outerWidth() > 0 ? (Twitch.storage.set("rightColClosed", "true"), s()) : (Twitch.storage.set("rightColClosed", "false"), a())
                },
                s = function() {
                    e("#right_col").is(":visible") && !e("#right_col").hasClass("no-close") && (e("#right_col").hide(), e(".advertisement").hide(), e("#main_col").addClass("expandRight"), e("#right_col").css({
                        width: "0px"
                    }), e("#right_close").addClass("closed"), e(window).trigger("fluid-resize"))
                },
                a = function() {
                    if (e("#right_col").is(":hidden")) {
                        var t = e("#right_col .content:first").outerWidth();
                        e("#right_col").show(), e(".advertisement").show(), e("#main_col").removeClass("expandRight"), e("#right_col").css({
                            width: t + "px"
                        }), e("#right_close").removeClass("closed"), e(window).trigger("fluid-resize")
                    }
                };
            e(window).on("fluid-resize", function() {
                e("#right_col")[0] ? e(window).width() < 800 ? ("false" !== Twitch.storage.get("leftColClosed") && i(), "false" !== Twitch.storage.get("rightColClosed") && s()) : e(window).width() < 1200 ? ("false" !== Twitch.storage.get("leftColClosed") && i(), "true" !== Twitch.storage.get("rightColClosed") && a()) : ("true" !== Twitch.storage.get("leftColClosed") && r(), "true" !== Twitch.storage.get("rightColClosed") && a()) : e(window).width() < 800 ? "false" !== Twitch.storage.get("leftColClosed") && i() : "true" !== Twitch.storage.get("leftColClosed") && r();
                var t = Math.min(9 * e(".player_column").width() / 16 + 32, e(".channel-main").height() - e(".editable").outerHeight(!0) - e("#stats_and_actions").outerHeight() + 1);
                e(".live_site_player_container, .archive_site_player_container").css("height", t.toFixed(0) + "px")
            }), e(window).resize(_.debounce(function() {
                e(window).trigger("fluid-resize")
            }, 10)), e("#small_search a").click(function() {
                return r(), e("#sidebar_search input").focus(), !1
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
                e.preventDefault(), o()
            }), e(".stretch").each(function() {
                var t = 0 + e(this).siblings(".top:first").outerHeight(),
                    n = 0 + e(this).siblings(".bottom:first").outerHeight();
                e(this).css({
                    top: t + "px",
                    bottom: n + "px",
                    visibility: "visible"
                })
            }), "true" === Twitch.storage.get("leftColClosed") && i(), "true" === Twitch.storage.get("rightColClosed") && s(), e("body").on("rightClose", s).on("rightOpen", a).on("rightToggle", o).on("leftClose", i).on("leftOpen", r).on("leftToggle", n), e(".js-columns-scroll, .js-nav-scroll").TrackpadScrollEmulator({
                wrapContent: !1,
                scrollbarHideStrategy: "rightAndBottom"
            }), e(window).trigger("fluid-resize")
        }
    }(jQuery),
    function(e) {
        e.fn.popoutWindow = function(t, n, i) {
            return i = i || {}, i.beforeFilter || (i.beforeFilter = function() {
                return !0
            }), i.closeCallback || (i.closeCallback = function() {
                window.location.reload()
            }), i.successCallback || (i.successCallback = function() {
                window.location.reload()
            }), i.errorCallback || (i.errorCallback = function() {}), this.each(function() {
                e(this).on("click", i.selector, function(r) {
                    var o = e(this);
                    if (r.preventDefault(), i.beforeFilter() && !o.data("popout_debounce")) {
                        o.data("popout_interval") && clearInterval(o.data("popout_interval"));
                        var s;
                        s = _.isFunction(t) ? t() : t, window[n] = window.open(s, n, i.popoutOpts), o.data("popout_debounce", !0), setTimeout(function() {
                            o.data("popout_debounce", !1)
                        }, 2e3), o.data("popout_interval", setInterval(function() {
                            window[n] && window[n].closed && (clearInterval(o.data("popout_interval")), i.closeCallback()), window[n] && window[n].success && (clearInterval(o.data("popout_interval")), i.successCallback()), window[n] && window[n].error && (clearInterval(o.data("popout_interval")), i.errorCallback())
                        }, 500))
                    }
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
            var i = e("body");
            return i.keyup(function(e) {
                27 === e.keyCode && t.is(":visible") && t.hide()
            }), this.each(function() {
                var i = e(this),
                    r = function() {
                        if (n.parent) var e = i.position();
                        else var e = i.offset();
                        if (n.above) var r = e.top - t.outerHeight() - 5;
                        else var r = e.top + i.outerHeight() + 5;
                        var o = e.left + i.outerWidth();
                        if ("left" === n.side) var s = o - t.outerWidth();
                        else var s = e.left;
                        t.css("top", r), t.css("left", s)
                    };
                e(window).bind("resize", r);
                var o = function(e) {
                    t.is(":visible") || (r(), t.show(), t.css("outline", "none"))
                };
                i.bind("click display", function(i) {
                    if (i.preventDefault(), i.stopPropagation(), t.is(":visible")) return void t.hide();
                    if (t._contentFn) {
                        var r = t._contentFn;
                        r(t, o, i), t._contentFn = !1
                    } else o(i);
                    n.focusOnLoad && e(n.focusOnLoad).focus(), n.openFn && n.openFn()
                })
            })
        }
        var n = {
            close_on_outside_click: function(n, i) {
                var r = e(this);
                t.call(r, n, i), n.bind("clickoutside", function(e) {
                    n.is(":visible") && n.hide()
                })
            },
            click_to_close: function(n, i) {
                var r = e(this);
                t.call(r, n, i)
            },
            close_on_click: function(n, i) {
                var r = e(this);
                t.call(r, n, i), n.click(function() {
                    n.hide()
                })
            }
        };
        e.fn.popup = function(t, i, r) {
            if ("string" != typeof t && (r = i, i = t, t = "close_on_outside_click"), "function" == typeof i) {
                var o = e("body"),
                    s = i;
                i = e('<div style="display:none">'), i.appendTo(o), i._contentFn = s
            }
            var a;
            if (a = n[t]) return this.each(function() {
                a.call(this, i, r)
            });
            throw "No method with name: " + t
        }
    }(jQuery),
    function(e) {
        e.fn.tabify = function(t) {
            var n = [];
            return this.each(function() {
                var i = e(this),
                    r = e("#" + i.attr("target")),
                    o = i.hasClass("selected"),
                    s = {
                        ul: i,
                        target: r
                    };
                n.push([i, r, o]), i.click(function(r) {
                    i.is("input") || r.preventDefault();
                    var o = e(this).closest(".tab, .subtab");
                    e.each(n, function(e, t) {
                        o[0] === t[0][0] ? (t[2] = !0, n[e] = t, t[0].hasClass("selected") || (t[0].addClass("selected"), t[1].show())) : (t[2] = !1, n[e] = t, t[0].removeClass("selected"), t[1].hide())
                    }), t && t(s)
                }), o && t && t(s)
            })
        }
    }(jQuery),
    function(e) {
        var t = function(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            },
            n = function(n) {
                var i = e(n),
                    r = i.val();
                return r ? i.find("option").filter(function() {
                    return r === e(this).attr("value")
                }).first().text() : i.data("dropdownify-label") || t(i.data("dropdownify-type"))
            },
            i = function(e) {
                return e || "&nbsp;"
            };
        e.extend(e.fn, {
            dropdownify: function() {
                e(this).each(function() {
                    var t = e(this).parent();
                    if (e(this).is("select") && e(this).data("dropdownify-type") && !t.hasClass("dropdown")) {
                        var r = e('<div class="dropdown ' + e(this).data("dropdownify-type") + '_contain"><span>' + i(n(this)) + "</span></div>").append(this).on("change", function() {
                            var t = e("select", this).get(0),
                                n = i(e(t.options[t.selectedIndex]).text());
                            e("span:first-child", this).html(n)
                        }).on("focus", "select", function() {
                            e(this).parent().addClass("active_dropdown")
                        }).on("blur", "select", function() {
                            e(this).parent().removeClass("active_dropdown")
                        });
                        t.append(r)
                    }
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
                    i = t.val(),
                    r = function(e) {
                        t.val(e)
                    };
                t.data("games", {});
                var o = !1,
                    s = t.autocomplete({
                        minLength: 3,
                        delay: 0,
                        source: function(e, t) {
                            Twitch.api.get("/kraken/search/games", {
                                query: e.term
                            }, {
                                version: 5
                            }).done(function(e) {
                                t(e.games)
                            }).fail(function(e) {
                                t([])
                            })
                        },
                        focus: function(e, t) {
                            return r(t.item.name), !1
                        },
                        select: function(e, t) {
                            return r(t.item.name), n.actionFn && n.actionFn(t.item.name), !1
                        },
                        search: function(e, t) {
                            o = !0
                        },
                        messages: {
                            noResults: "",
                            results: function() {}
                        }
                    }),
                    a = {
                        isValidGame: function() {
                            return !o || !!t.data("games")[t.val()] || "" === t.val()
                        }
                    };
                s.data("gameselector", a), s.data("ui-autocomplete")._renderItem = function(e, n) {
                    n.boxArt = n.box;
                    var i = t.data("games");
                    return i[n.name] = !0, t.data("games", i), n.images = n.images || {}, n.images = Twitch.defaults(n.images, {
                        tiny: "https://www-cdn.jtvnw.net/images/xarth/gamefilter_all.png"
                    }), ich["gameselector-game"](n).data("item.autocomplete", n).appendTo(e)
                }, s.data("ui-autocomplete")._cancelSearch = function() {
                    this.xhr && this.xhr.abort()
                }, t.bind("gameselector.reset", function() {
                    r(i)
                }), t.bind("gameselector.prevent", function() {
                    t.data("ui-autocomplete")._cancelSearch()
                }), t.bind("gameselector.enable", function() {
                    t.removeClass("disabled"), t.attr("disabled", !1), r(i)
                }), t.bind("gameselector.disable", function() {
                    t.addClass("disabled"), t.attr("disabled", !0), r("")
                }), n.loadAsDisabled && t.trigger("gameselector.disable")
            })
        }
    }(jQuery),
    function(e) {
        e(function() {
            e(".js-set-switch").on("click", function(t) {
                t.preventDefault();
                var n, i, r = e(this),
                    o = r.data("set-id");
                void 0 === o ? (n = "DELETE", i = "/settings/turbo/emote_group/" + r.data("group-name")) : (n = "PUT", i = "/settings/turbo/emote_set/" + o), e.ajax({
                    url: i,
                    type: "POST",
                    headers: {
                        "Client-ID": Twitch.api.config.clientID,
                        "X-Http-Method-Override": n,
                        "X-CSRF-Token": e('meta[name="csrf-token"]').attr("content")
                    }
                }).done(function() {
                    e(".js-set-display").hide(), void 0 === o ? e(".js-set-display.default").show() : e(".js-set-display[data-set-id=" + o + "]").show(), e(".js-set-switch").removeClass("selected"), r.addClass("selected")
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
                !navigator.userAgent.match(e.userAgentMatchingPattern) || navigator.userAgent.match(/IEMobile|Windows Phone/) || Twitch.storage.get("mobile_pushover", {
                    storage: "sessionStorage"
                }) || (Twitch.storage.set("mobile_pushover", "true", {
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
            i = function(e) {
                if (e = e || {}, this.enabled = !!e.enabled, this.console = e.console, !this.console) return void console.error("Logger argument missing: console");
                this.consoleFns = {};
                for (var t = 0; t < n.length; t++) {
                    var i = n[t];
                    this.consoleFns[i] = this.console[i] || function() {}, this.console[i] = this[i].bind(this)
                }
            };
        i.prototype.enable = function() {
            this.enabled = !0
        }, i.prototype.disable = function() {
            this.enabled = !1
        }, i.prototype.restoreConsole = function() {
            if (this.console)
                for (var e = 0; e < n.length; e++) {
                    var t = n[e];
                    this.console[t] = this.consoleFns[t]
                }
        };
        for (var r = function(e) {
                i.prototype[e] = function() {
                    if (this.enabled || "log" === e) {
                        var t = Array.prototype.slice.call(arguments, 0);
                        this.consoleFns[e].apply && this.consoleFns[e].apply(this.console, t)
                    }
                }
            }, o = 0; o < n.length; o++) {
            var s = n[o];
            r(s)
        }
        cookie.defaults = {
            path: "/"
        }, "production" === e.deployFlavor && (cookie.defaults.domain = ".twitch.tv"), window.console || (window.console = {}), e.logging = new i({
            enabled: "production" !== e.deployFlavor,
            console: window.console
        }), e.mixin = function(t) {
            for (var n, i = Array.prototype.slice.call(arguments), r = 0, o = i.length; r < o; r++) {
                n = i[r];
                for (var s in n) n.hasOwnProperty(s) && (e[s] = n[s])
            }
            return e
        }, e.defaults = function(e) {
            for (var t, n = Array.prototype.slice.call(arguments, 1), i = 0, r = n.length; i < r; i++) {
                t = n[i];
                for (var o in t) t.hasOwnProperty(o) && null == e[o] && (e[o] = t[o])
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
                if (null === this._localStorage) try {
                    var e = new Date;
                    (this._localStorage = window.localStorage).setItem(e, e);
                    var t = this._localStorage.getItem(e) != e;
                    this._localStorage.removeItem(e), t && (this._localStorage = this._buildMemoryStorage())
                } catch (e) {
                    this._localStorage = this._buildMemoryStorage()
                }
                return this._localStorage
            },
            _sessionStorage: null,
            getSessionStorage: function() {
                if (null === this._sessionStorage) try {
                    var e = new Date;
                    (this._sessionStorage = window.sessionStorage).setItem(e, e);
                    var t = this._sessionStorage.getItem(e) != e;
                    this._sessionStorage.removeItem(e), t && (this._sessionStorage = this._buildMemoryStorage())
                } catch (e) {
                    this._sessionStorage = this._buildMemoryStorage()
                }
                return this._sessionStorage
            },
            _storageForOptions: function(e) {
                return e && "sessionStorage" === e.storage ? this.getSessionStorage() : this.getLocalStorage()
            },
            setObject: function(e, t, n) {
                this.set(e, JSON.stringify(t), n)
            },
            getObject: function(e, t) {
                var n = this.get(e, t),
                    i = null;
                if (n && "" !== n) try {
                    i = JSON.parse(n)
                } catch (e) {}
                return i
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
        n.legacy = {}, n.legacy.set = function(e, t, n, i, r) {
            var o = "";
            if (i || (i = "/"), n) {
                var s = new Date;
                s.setTime(s.getTime() + 1e3 * n), o = "; expires=" + s.toGMTString()
            }
            var a = e + "=" + t + o + "; path=" + i;
            null == r ? document.cookie = a + "; domain=." + window.BaseDomain : "" === r && (document.cookie = a)
        }, n.legacy.get = function(e) {
            for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                for (var r = n[i];
                    " " === r.charAt(0);) r = r.substring(1, r.length);
                if (0 === r.indexOf(t)) return r.substring(t.length, r.length)
            }
            return null
        }, n.legacy.del = function(e, t) {
            null == t ? (n.legacy.set(e, "", -1), n.legacy.set(e, "", -1, null, "")) : n.legacy.set(e, "", -1, null, t)
        }, e.mixin({
            storage: n
        })
    }(window.Twitch, window.jQuery),
    function(e, t) {
        function n() {
            var e = window.navigator.userAgent,
                t = e.indexOf("MSIE ");
            if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10) < 10
        }
        var i = {},
            r = "jzkbprff40iqj646a697cyrvl0zt2m6";
        RSVP.EventTarget.mixin(i);
        var o = [];
        i.isIframeReady = !1;
        var s = 4;
        i.init = function(e) {
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
        }, i._ajax = function(a, l, u, c) {
            var h, d, f = new t.Deferred;
            c = t.extend({}, c), c.headers = c.headers || {}, c.headers["Client-ID"] = c.headers["Client-ID"] || r, c.headers["X-CSRF-Token"] = c.headers["X-CSRF-Token"] || e.storage.get("csrf_token"), u || (u = {}), u.on_site = "1", n() && "GET" !== a && "POST" !== a ? (c.type = "POST", c.headers["X-Http-Method-Override"] = a) : c.type = a;
            var p = c.version || c.v || s;
            if (c.headers.Accept = "application/vnd.twitchtv.v" + p + "+json", c.headers.Authorization ? (c.secure = !0, c.allow_cookie = !1, delete u.on_site) : (h = e.storage.legacy.get("api_token"), h && (c.headers["Twitch-Api-Token"] = h), c.allow_cookie = !0), /^(\/kraken\/)?streams(?!\/summary\/*$|\/recommended\/*$|\/recommended\/available\/*$|\/featured\/*$|\/communities\/)/.test(l) && (c.use_streams_api = !0, c.allow_cookie = !1), c.success && f.done(c.success), c.error && f.fail(c.error), d = t.extend({}, c, {
                    url: this._constructUrl(l, c),
                    dataType: "json",
                    cache: !0,
                    global: !1,
                    data: u,
                    xhr: this._createXHR.bind(this),
                    xhrFields: {
                        withCredentials: c.secure
                    },
                    success: function() {
                        var e = arguments;
                        setTimeout(function() {
                            f.resolve.apply(f, e)
                        })
                    },
                    error: function() {
                        var e = arguments;
                        setTimeout(function() {
                            f.reject.apply(f, e)
                        })
                    }
                }), c.use_streams_api || c.secure && "https" !== window.location.protocol.slice(0, 5)) {
                if (this._canCORS()) d.xhrFields.withCredentials = c.allow_cookie;
                else if (d.dataType = "jsonp", d.headers && d.headers["Client-ID"] && (d.data.client_id = d.headers["Client-ID"], delete d.headers["Client-ID"]), d.headers && d.headers.Authorization) {
                    var m = /^OAuth:?\s+(\w+)$/.exec(d.headers.Authorization);
                    m && (d.data.oauth_token = m[1], delete d.headers.Authorization)
                }
            } else d.beforeSend = this._beforeSend;
            return f.fail(function(e, t, n) {
                i.trigger("fail", {
                    url: d.url,
                    jqXHR: e,
                    textStatus: t,
                    errorThrown: n
                })
            }), i.isIframeReady ? t.ajax(d) : o.push(d), f.promise()
        }, i.get = function(e, t, n) {
            return i._ajax("GET", e, t, n)
        }, i.post = function(e, t, n) {
            return i._ajax("POST", e, t, n)
        }, i.put = function(e, t, n) {
            return i._ajax("PUT", e, t, n)
        }, i.del = function(e, t, n) {
            return i._ajax("DELETE", e, t, n)
        }, i._canCORS = _.once(function() {
            return "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest
        }), i._constructUrl = function(e, t) {
            this.config.login && (e = e.replace(/:login([^\w])/, this.config.login + "$1")), "/" !== e[0] && (e = "/kraken/" + e);
            var n = t.use_streams_api ? "streamsBaseUrl" : "baseUrl";
            t.secure && (n += "Secure");
            var i = t.host || this.config[n];
            return i + e
        }, i._createXHR = function() {
            return new this.config.iframe.contentWindow.XMLHttpRequest
        }, i._beforeSend = function(e, t) {
            t.crossDomain = !1
        }, i.iframeReady = function() {
            i.isIframeReady = !0, this.trigger("ready"), o.forEach(function(e) {
                t.ajax(e)
            })
        }, e.mixin({
            api: i
        })
    }(Twitch, jQuery),
    function(e, t) {
        function n() {
            if (i) return i;
            var t = 14;
            return i = new RSVP.Promise(function(t, n) {
                if (!cookie.get("api_token")) return void n({
                    status: 401
                });
                var i = function() {
                    e.api.get("/api/me").done(function(e) {
                        t(e)
                    }).fail(function(e) {
                        n({
                            status: e.status
                        })
                    })
                };
                e.api.isIframeReady ? i() : e.api.on("ready", i)
            }).then(function(e) {
                return cookie.set("login", e.login, {
                    expires: t
                }).set("name", encodeURI(e.name), {
                    expires: t
                }), r = !0, o = e, e
            }, function(e) {
                throw 401 === e.status && (r = !1, cookie.remove("login"), cookie.remove("name")), e
            })
        }
        var i = null,
            r = null,
            o = null,
            s = function(e, t) {
                return n().then(e, t)
            };
        s.login = function() {
            return cookie.get("api_token") ? cookie.get("login") : null
        }, s.displayName = function() {
            return cookie.get("api_token") ? decodeURI(cookie.get("name")) : null
        }, s.isLoggedIn = function() {
            return !!cookie.get("api_token") && !!cookie.get("login")
        }, s.peek = function() {
            return {
                isAuthenticated: r,
                userData: o
            }
        }, s.reset = function() {
            i = void 0, r = null, o = null
        };
        var a = "Deprecation warning: Use Twitch.user() instead";
        s.userId = function() {
            return console.debug(a), PP.user_id
        }, e.mixin({
            user: s
        })
    }(Twitch, jQuery),
    function(e, t) {
        var n = {
                channel: "/:1",
                collection: "/collections/:1",
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
            i = function(e, t) {
                if (t.forEach(function(t, n) {
                        e = e.replace(":" + (n + 1), encodeURIComponent(t), "g")
                    }), e.match(/:\d/)) throw new Error("Not enough arguments provided to construct this uri");
                return e
            },
            r = {},
            o = {},
            s = {};
        _.each(n, function(e, t) {
            r[t] = function() {
                return i(e, _.toArray(arguments))
            }, o[t] = function() {
                return URI().protocol() + "://" + window.location.host + i(e, _.toArray(arguments))
            }, s[t] = function() {
                return "https://www.twitch.tv" + i(e, _.toArray(arguments))
            }
        });
        var a = _.memoize(function(e) {
                return _.reduce(decodeURIComponent(e).split("&"), function(e, t) {
                    for (var n = e, i = t.split("="), r = i[0], o = [], s = i[1]; r;) {
                        var a = /^(.+?)(?:\[(.*?)\])?((?:\[.*?\])*)$/.exec(r);
                        o.push(a[1]), r = a[2] ? a[2] + a[3] : ""
                    }
                    return _.each(_.initial(o), function(e) {
                        n[e] = n[e] || {}, n = n[e]
                    }), n[_.last(o)] = s, e
                }, {})
            }),
            l = function(e) {
                return a(e || URI().query())
            };
        e.mixin({
            uri: r,
            url: o,
            canonicalUrl: s,
            url_params: l
        })
    }(Twitch, jQuery),
    function(e, t) {
        var n = {};
        n._generateRandomString = function(e) {
            for (var t = new Array(e), n = 0; n < e; n++) t[n] = String.fromCharCode(Math.floor(27 * Math.random()) + 65);
            return t.join("")
        }, n.createUniqueId = function(e) {
            var t = e || "";
            return t += this._generateRandomString(32) + (new Date).toLocaleTimeString(), CryptoJS.SHA1(t).toString().substring(0, 16)
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
            i = {
                BROWSE_EXPERIMENT: "99494f77-1c7c-46c5-9b9c-a117db47d3c5",
                RECOMMENDED_CHANNELS: "aaac75ea-c969-4826-b32d-ceefac620a79",
                RECOMMENDED_GAMES: "61b169ff-bc62-4725-a40e-1be627197c6f",
                VOD_COVIEWS_AB: "e7516730-b94f-4d46-894e-c18612aab270",
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
                LANGUAGE_DIRECTORY_ROWCOUNT: "8a557906-5bfd-4790-b26c-cda8209567a7",
                CHANNEL_VIDEOS_TAB: "852b3485-a831-4580-b7bf-acf819977704",
                MESSAGE_DELETED_EXPERIMENT: "04165981-17be-4593-afbd-762a380f6838",
                RESUME_WATCHING_BANNER: "4f5c0aa5-292d-4ed3-9b2a-f9da6ea195f2",
                CHAT_RULES_EXPERIMENT: "98f3f2a5-9e4e-4ba8-aabe-2ff85e7309ee",
                ESL_CSGO_STEAM_LINK: "6a857f53-de28-4025-8983-3cada70538cd",
                CHANNEL_PAGE_REDESIGN: "3ae835b6-3015-440c-8177-755bdbbbf29e",
                MESSAGE_HISTORY: "8ace0f50-8afd-424a-a086-3e61b3e66da0",
                BITS_FOR_ADS: "2c1c9b8c-530c-4011-a2a0-e93c0e14d8c2",
                NEXUS_ROLLOUT: "428d3b07-cc7a-424f-aad0-971f5415879a",
                DETERMINATION: "cc164e1e-1361-4730-8d9b-0091a0f9cb8f",
                WATCH_NOW_RIGHTBAR: "5380a8cf-e5cf-497e-9c6c-16cb1c881e0c",
                CHANNEL_LOGIN_CTA: "aece7525-dceb-49ba-af1b-242c1ae45831",
                DISCOVER_SHOW_COVIEWS: "3e011e23-ef29-46a5-af4b-a86e15d8c9e6",
                PERPETUA: "af8f152a-f618-416e-8b79-d6ac30479018",
                PERPETUA_CRSL: "5d03cd48-d664-4bd9-95de-c1ca5fb9e77b",
                EXTENSIONS: "264f75af-a787-4a40-8654-40d78b4d8b41",
                INTL_I18N: "0670f0ea-3b5c-41a8-946d-114ef4a42540",
                DISCOVER_HIDE_RECENTLY_WATCHED_STREAMS: "95869c70-08ce-4e58-a82e-bcaaaf1f8dc2",
                CLIENT_BATCH_SPADE: "1b905261-e257-4703-ac84-12a6a9099935",
                CLIENT_BATCH_MIXPANEL: "42f5eea6-c548-4791-b767-9c7e29b73ef6",
                CLIPS_FEEL_IT_COMING: "2858bc04-3f98-4808-a2dd-86555885ca90",
                CLIPS_HEAR_ME_NOW: "9649684c-6d3f-423d-9d3c-f4296efee975",
                ONSITE_NOTIFICATIONS: "b2925d54-cebb-4e1d-a50d-9dd2b1ea850e",
                NEWS_FEED_REDESIGN: "05d8869f-e037-4955-b80a-7c361f9ddffb",
                VOD_UPLOAD_UNITS_V3: "1710cf57-352c-4d09-b2c1-3d40bdf79b30",
                CHOMPY: "9b0cc0db-f52c-435f-832d-ba5ac5fc1d57",
                ADOPT: "5397de92-0538-42d1-977c-11842e03c9e5",
                SNAIL: "fc494cf9-3a22-448e-b262-ba9e218559e5",
                ORC: "d4d938f7-bdc2-42cd-afd0-f434e4192c29",
                COMMUNITIES_SITE_SEARCH: "3f983cb9-25be-41cd-814d-22eaa23fdd27",
                AWS_ROUNDTRIP_LATENCY_TEST_OPT_IN: "f03d8b21-c0dc-43c6-8ee6-aa59d7edd3ef",
                AWS_ROUNDTRIP_LATENCY_TEST_ENDPOINT: "5daee224-4c99-499f-b6e0-e308a5fa54f1",
                LANGUAGE_DIRECTORY_ROWCOUNT_V2: "8d2e5bd8-c305-455f-b7ff-ca6fc2ea8710",
                LOL_METADATA_EXPERIMENT: "479d9473-bf6e-4d74-8f9b-dd85d6f98921",
                SOCIAL_RECOMMENDATIONS: "819aed52-3cc1-4747-a840-476a39487a2e"
            },
            r = {
                "99494f77-1c7c-46c5-9b9c-a117db47d3c5": "control",
                "aaac75ea-c969-4826-b32d-ceefac620a79": "no",
                "61b169ff-bc62-4725-a40e-1be627197c6f": "no",
                "e7516730-b94f-4d46-894e-c18612aab270": "control",
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
                "8a557906-5bfd-4790-b26c-cda8209567a7": "2",
                "852b3485-a831-4580-b7bf-acf819977704": "control",
                "04165981-17be-4593-afbd-762a380f6838": "false",
                "4f5c0aa5-292d-4ed3-9b2a-f9da6ea195f2": "no",
                "98f3f2a5-9e4e-4ba8-aabe-2ff85e7309ee": "control",
                "6a857f53-de28-4025-8983-3cada70538cd": "control",
                "3ae835b6-3015-440c-8177-755bdbbbf29e": "old",
                "8ace0f50-8afd-424a-a086-3e61b3e66da0": "off",
                "2c1c9b8c-530c-4011-a2a0-e93c0e14d8c2": "off",
                "428d3b07-cc7a-424f-aad0-971f5415879a": "disabled",
                "cc164e1e-1361-4730-8d9b-0091a0f9cb8f": "no",
                "5380a8cf-e5cf-497e-9c6c-16cb1c881e0c": "control",
                "aece7525-dceb-49ba-af1b-242c1ae45831": "yes",
                "3e011e23-ef29-46a5-af4b-a86e15d8c9e6": "no_show",
                "af8f152a-f618-416e-8b79-d6ac30479018": "control",
                "5d03cd48-d664-4bd9-95de-c1ca5fb9e77b": "control",
                "264f75af-a787-4a40-8654-40d78b4d8b41": "no",
                "0670f0ea-3b5c-41a8-946d-114ef4a42540": "control",
                "95869c70-08ce-4e58-a82e-bcaaaf1f8dc2": "hide",
                "1b905261-e257-4703-ac84-12a6a9099935": "control",
                "42f5eea6-c548-4791-b767-9c7e29b73ef6": "control",
                "2858bc04-3f98-4808-a2dd-86555885ca90": "control",
                "9649684c-6d3f-423d-9d3c-f4296efee975": "control",
                "05d8869f-e037-4955-b80a-7c361f9ddffb": "no",
                "1710cf57-352c-4d09-b2c1-3d40bdf79b30": "control",
                "5397de92-0538-42d1-977c-11842e03c9e5": "no",
                "b2925d54-cebb-4e1d-a50d-9dd2b1ea850e": "control",
                "9b0cc0db-f52c-435f-832d-ba5ac5fc1d57": "control",
                "fc494cf9-3a22-448e-b262-ba9e218559e5": "control",
                "d4d938f7-bdc2-42cd-afd0-f434e4192c29": "no",
                "3f983cb9-25be-41cd-814d-22eaa23fdd27": "control",
                "f03d8b21-c0dc-43c6-8ee6-aa59d7edd3ef": "false",
                "5daee224-4c99-499f-b6e0-e308a5fa54f1": "control",
                "8d2e5bd8-c305-455f-b7ff-ca6fc2ea8710": "2",
                "479d9473-bf6e-4d74-8f9b-dd85d6f98921": "control",
                "819aed52-3cc1-4747-a840-476a39487a2e": "control"
            },
            o = "experiment_overrides",
            s = {},
            a = {
                BROWSE_EXPERIMENT: "variant2",
                CSGO_LANGUAGE_SAMPLE: "localized",
                LANGUAGE_DIRECTORY_FILTER: "full",
                CLIPS_ENABLED: "yes",
                ESL_CSGO_STEAM_LINK: "show-cta",
                CHANNEL_PAGE_REDESIGN: "new",
                DETERMINATION: "yes",
                DISCOVER_SHOW_COVIEWS: "show",
                CHOMPY: "experiment",
                ONSITE_NOTIFICATIONS: "variant2",
                CLIPS_FEEL_IT_COMING: "variant1",
                CLIPS_HEAR_ME_NOW: "variant1",
                SNAIL: "early",
                PERPETUA: "early",
                SOCIAL_RECOMMENDATIONS: "variant1"
            };
        _.each(Object.keys(a), function(t) {
            s[i[t]] = e.user().then(function(e) {
                return e && e.is_staff ? a[t] : RSVP.Promise.reject()
            }, function(e) {
                if (!e || 401 !== e.status) throw e
            })
        });
        var l = e.url_params().experiments,
            u = cookie.get(o),
            c = {};
        try {
            u && (c = JSON.parse(u))
        } catch (e) {
            console.warn("Failed to parse experiment overrides", e)
        }
        _.extend(s, c, l);
        var h, d = {
                defaults: r,
                deviceID: e.idsForMixpanel.getOrCreateUniqueId(),
                overrides: s,
                provider: new Minixperiment.providers.local(n),
                Promise: RSVP.Promise,
                platform: "web",
                login: null
            },
            f = e.user().then(function(e) {
                return e.login
            }, function() {
                return null
            }).then(function(e) {
                d.login = e, h = new Minixperiment.Client(d)
            }),
            p = function(e) {
                return f.then(function() {
                    var t = i[e];
                    return h.get(t)
                })
            },
            m = function(e, t) {
                if (e && t) {
                    var n = {},
                        r = cookie.get(o),
                        s = i[e];
                    try {
                        r && (n = JSON.parse(r))
                    } catch (e) {
                        console.warn("Failed to parse experiment overrides", e)
                    }
                    s && (n[s] = t), cookie.set(o, JSON.stringify(n)), console.warn("Experiment overrides require a page refresh to take effect.")
                }
            },
            g = function() {
                cookie.remove(o), console.warn("Clearing experiment overrides require a page refresh to take effect.")
            },
            v = {
                getExperimentValue: p,
                overrideExperimentValue: m,
                clearOverrides: g
            };
        e.mixin({
            experiments: v
        })
    }(Twitch, jQuery),
    function(e, t) {
        var n, i = {
            hlsId: null
        };
        i.init = function(r) {
            "html5" === r.type ? (n = new i.HTML5Player(r.html5Options), n.init(function() {
                t(e.player).triggerHandler("ready")
            })) : (n = new i.FlashPlayer(r.flashOptions), n.init(function() {
                t(e.player).triggerHandler("ready")
            }, function() {
                "flash" !== r.type && (n = new i.HTML5Player(r.html5Options), n.init(function() {
                    t(e.player).triggerHandler("ready")
                }, function(e) {
                    n.$el.find(".js-html5-player").hide(), n.$el.siblings(".js-flash-required").show()
                }))
            }))
        };
        var r = !1;
        t(i).on("ready", function() {
            r = !0
        }), i.ready = function(i) {
            r ? i(n) : t(e.player).on("ready", function() {
                i(n)
            })
        }, i.getPlayer = function() {
            return console.warn("Twitch.player.getPlayer is deprecated for the new player."), n || console.error("Twitch.player.getPlayer called before player is ready."), n
        }, i.parseTimeOffset = function(e) {
            var t = /^((\d+)[Hh])?((\d+)[Mm])?((\d+)[Ss])?$/.exec(e || "");
            if (!t) return 0;
            try {
                var n = parseInt(t[2], 10) || 0,
                    i = parseInt(t[4], 10) || 0,
                    r = parseInt(t[6], 10) || 0;
                return 3600 * n + 60 * i + r
            } catch (e) {
                return 0
            }
        }, i.setSteamInfo = function(e, t) {
            console.warn("Twitch.player.setSteamInfo is deprecated")
        }, i.getSpecialOverlay = function() {
            return "true" === e.storage.get("adblock_enabled", {
                storage: "sessionStorage"
            })
        }, i.onTwitchPlayerInit = i.onTwitchPlayerLoaded = function(e) {
            console.warn("Twitch.player.onTwitchPlayer(Init/Loaded) is deprecated! Use Twitch.ready instead."), i.ready(e)
        }, e.mixin({
            player: i
        })
    }(Twitch, jQuery),
    function(e, t) {
        var n = function(e) {
            this.options = e, n.instantiationCounter++
        };
        n.instantiationCounter = 0, t.extend(n.prototype, {
            _proxy: function() {
                var e = this;
                t.each(["fullscreen", "getVideoTime", "loadStream", "loadVideo", "mute", "isPaused", "pauseVideo", "playVideo", "setOauthToken", "onlineStatus", "unmute", "videoSeek", "adFeedbackDone"], function(t, n) {
                    e[n] = e.el[n].bind(e.el)
                })
            },
            init: function(e, n) {
                console.info("FlashPlayer.init"), this._initSuccess = e || function() {}, n = n || function() {};
                var r = this,
                    o = this.options;
                o.flashVars.eventsCallback = i.register(function(e) {
                    r._onEvents(e)
                }), swfobject.embedSWF(o.url, o.swfId, o.width, o.height, o.version, "/widgets/expressinstall.swf", o.flashVars, o.params, o.attrs, function(e) {
                    e.success ? (r.$el = t("#" + r.options.swfId), r.el = r.$el[0]) : (console.info("FlashPlayer.init error"), n("error embedding flash player"))
                })
            },
            _onPlayerInit: function() {
                this._proxy(), this.adFeedbackMenu = new e.player.AdFeedbackMenu(t(".js-ad-feedback-menu").first(), this), console.info("FlashPlayer.init success"), this._initSuccess(this)
            },
            destroy: function() {},
            _onEvents: function(e) {
                for (var t, n = 0; n < e.length; n++) {
                    t = e[n];
                    try {
                        this._onEvent(t)
                    } catch (e) {
                        console.warn("Error handling FlashPlayer event " + t.event + ": " + e)
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
        }), RSVP.EventTarget.mixin(n.prototype);
        var i = {
            callbackId: 0,
            register: function(t) {
                e.player.FlashPlayer.callbacks = e.player.FlashPlayer.callbacks || {};
                var n = "callback" + this.callbackId++;
                return e.player.FlashPlayer.callbacks[n] = t, "Twitch.player.FlashPlayer.callbacks." + n
            }
        };
        e.player.FlashPlayer = n;
    }(Twitch, jQuery),
    function() {
        try {
            var e = window.chrome || {};
            e.cast = e.cast || {}, e.cast.media = e.cast.media || {}, e.cast.ApiBootstrap_ = function() {}, e.cast.ApiBootstrap_.EXTENSION_IDS = ["boadgeojelhgndaghljhdicfkmllpafd", "dliochdbjfkdbacpmhlcpmleaejidimm", "hfaagokkkhdbgiakmmlclaapfelnkoah", "fmfcbgogabcbclcofgocippekhfcmgfj", "enhhojjnijigcajfphajepfemndkmdlo"], e.cast.ApiBootstrap_.findInstalledExtension_ = function(t) {
                e.cast.ApiBootstrap_.findInstalledExtensionHelper_(0, t)
            }, e.cast.ApiBootstrap_.findInstalledExtensionHelper_ = function(t, n) {
                t == e.cast.ApiBootstrap_.EXTENSION_IDS.length ? n(null) : e.cast.ApiBootstrap_.isExtensionInstalled_(e.cast.ApiBootstrap_.EXTENSION_IDS[t], function(i) {
                    i ? n(e.cast.ApiBootstrap_.EXTENSION_IDS[t]) : e.cast.ApiBootstrap_.findInstalledExtensionHelper_(t + 1, n)
                })
            }, e.cast.ApiBootstrap_.getCastSenderUrl_ = function(e) {
                return "chrome-extension://" + e + "/cast_sender.js"
            }, e.cast.ApiBootstrap_.isExtensionInstalled_ = function(t, n) {
                var i = new XMLHttpRequest;
                i.onreadystatechange = function() {
                    4 == i.readyState && 200 == i.status && n(!0)
                }, i.onerror = function() {
                    n(!1)
                }, i.open("GET", e.cast.ApiBootstrap_.getCastSenderUrl_(t), !0), i.send()
            }, e.cast.ApiBootstrap_.findInstalledExtension_(function(t) {
                if (t) {
                    console.log("Found cast extension: " + t), e.cast.extensionId = t;
                    var n = document.createElement("script");
                    n.src = e.cast.ApiBootstrap_.getCastSenderUrl_(t), (document.head || document.documentElement).appendChild(n)
                } else {
                    var i = "No cast extension found";
                    console.log(i);
                    var r = window.__onGCastApiAvailable;
                    r && "function" == typeof r && r(!1, i)
                }
            })
        } catch (e) {}
    }(),
    function(e, t) {
        var n = ["playVideo", "pauseVideo", "mute", "unmute", "loadStream", "fullscreen", "adFeedbackDone", "setTrackingData", "getVideoTime", "videoSeek", "isPaused", "playVideo", "showChromecast", "setChromecastConnected", "togglePlayPause", "isChatWebSockets"],
            i = function(t) {
                var n;
                return "live" === t.playerType ? n = {
                    id: t.id,
                    hide_chat: !0,
                    channel: t.channel,
                    host_channel: t.hostChannel,
                    embed: t.embed ? "1" : "0",
                    auto_play: !0
                } : "highlighter" === t.playerType ? n = {
                    id: t.id,
                    videoId: t.archiveId,
                    playerType: t.playerType,
                    hostname: SiteOptions.twitch_cdn_hostport,
                    auto_play: !0
                } : "archive" === t.playerType && (n = {
                    id: t.id,
                    videoId: t.archiveId,
                    playerType: t.playerType,
                    hostname: SiteOptions.twitch_cdn_hostport,
                    auto_play: !0,
                    playOffset: r()
                }), n.device_id = e.idsForMixpanel.getOrCreateUniqueId(), n.session_device_id = e.idsForMixpanel.getOrCreateSessionUniqueId(), n.localstorage_device_id = e.idsForMixpanel.getOrCreateLocalStorageUniqueId(), n.test_environment_url = "http://" + SiteOptions.www_hostport, _.each(n, function(e, t) {
                    void 0 === e && delete n[t]
                }), n
            },
            r = function() {
                var e = URI().query(!0).t;
                if (!e) return 0;
                var t = e.match(/^(\d+[Hh])?(\d+[Mm])?(\d+[Ss])?$/);
                if (t) {
                    var n = parseInt(t[1], 10) || 0,
                        i = parseInt(t[2], 10) || 0,
                        r = parseInt(t[3], 10) || 0;
                    return 60 * n * 60 + 60 * i + r
                }
                return e.match(/^\d+$/) ? parseInt(e, 10) : 0
            },
            o = function(e) {
                var t = i(e);
                t.eventsCallback = s.register(function(e) {
                    n._onEvents(e)
                }), this._readyDeferred = RSVP.defer(), this._id = t.id, this._hostChannel = t.hostChannel, "live" !== e.playerType && (this._videoType = "hls");
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
                var i = this;
                this.ref = document.getElementById(n), this.$el = t(this.ref);
                var r = {
                    host_channel: this._hostChannel
                };
                this.setTrackingData("video-play", r), this._videoType && this.setTrackingData("video-type", this._videoType);
                var o, s;
                this.swfTrackingInterval = setInterval(function() {
                    if (TMI) {
                        var e = TMI.usingWebSockets();
                        e !== s && (i.isChatWebSockets(e), s = e);
                        var t = TMI.getMessageRate();
                        if (t !== o) {
                            o = t;
                            var n = {
                                chat_msg_rate: t
                            };
                            i.setTrackingData("minute-watched", _.extend(n, r)), i.setTrackingData("buffer-empty", n)
                        }
                    }
                }, 1e3), e.chromecast.initialize(this), this.isReady = !0, this._readyDeferred.resolve(this)
            }, o.prototype.promise = function(e, t) {
                return this._readyDeferred.promise.then(e, t)
            }, o.prototype._onEvents = function(e) {
                for (var t, n = 0; n < e.length; n++) {
                    t = e[n];
                    try {
                        this._onEvent(t)
                    } catch (e) {
                        console.warn("Error handling FlashPlayer2 event " + t.event + ": " + e)
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
                _.each(n, function(e) {
                    o.prototype[e] = function() {
                        if (this.isReady && this.ref[e]) return this.ref[e].apply(this.ref, arguments)
                    }
                })
            }(), e.player.FlashPlayer2 = o;
        var s = {
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
            var i = this,
                r = null;
            i.player = n, i.$playerEl = n.$el, n.on("adFeedbackShow", function(e) {
                r = e.adId, i.show()
            }), i.$el = t(e), i.$el.find(".close-btn").click(function() {
                i.$el.hide()
            }), i.$el.find("a").each(function(e, o) {
                var s = t(o);
                s.click(function(e) {
                    e.preventDefault(), i.$el.hide(), n.adFeedbackDone({
                        ad_id: r,
                        ad_feedback: s.attr("name")
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
            return new RSVP.Promise(function(n, i) {
                e.googlePromise.then(function() {
                    e.adDisplayContainer = new google.ima.AdDisplayContainer(e.options.container, e.options.player, e.$clickTracker[0]), e.adsLoader = new google.ima.AdsLoader(e.adDisplayContainer), e.adsManager = null, e.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, e.onAdsManagerLoaded, !1, e), e.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, e.onAdError, !1, e), e.adDisplayContainer.initialize(), n()
                }).fail(function() {
                    t(e).trigger("error"), i()
                })
            })
        }, n.prototype.requestAds = function(e) {
            var n = new google.ima.AdsRequest;
            n.adTagUrl = e;
            var i = t(this.options.player).width(),
                r = t(this.options.player).height();
            n.linearAdSlotWidth = i, n.linearAdSlotHeight = i, n.nonLinearAdSlotWidth = r, n.nonLinearAdSlotHeight = r, this.adsLoader.requestAds(n)
        }, n.prototype.onAdsManagerLoaded = function(e) {
            console.debug("Ads Manager loaded."), this.adsManager = e.getAdsManager(this.options.player), this.processAdsManager(this.adsManager)
        }, n.prototype.processAdsManager = function(e) {
            e.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, this.onContentPauseRequested, !1, this), e.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, this.onContentResumeRequested, !1, this), e.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.onAdError, !1, this);
            for (var t = [google.ima.AdEvent.Type.ALL_ADS_COMPLETED, google.ima.AdEvent.Type.CLICK, google.ima.AdEvent.Type.COMPLETE, google.ima.AdEvent.Type.FIRST_QUARTILE, google.ima.AdEvent.Type.LOADED, google.ima.AdEvent.Type.MIDPOINT, google.ima.AdEvent.Type.PAUSED, google.ima.AdEvent.Type.RESUMED, google.ima.AdEvent.Type.STARTED, google.ima.AdEvent.Type.THIRD_QUARTILE], n = 0; n < t.length; n++) e.addEventListener(t[n], this.onAdEvent, !1, this);
            e.init(1, 1, google.ima.ViewMode.NORMAL), e.start()
        }, n.prototype.onContentPauseRequested = function(e) {}, n.prototype.onContentResumeRequested = function(e) {
            this.hideClickTracker(), t(this).trigger("contentResumeRequested")
        }, n.prototype.onAdEvent = function(e) {
            switch (console.debug("Ad event: " + e.type), e.type) {
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
        var i = null,
            r = null,
            o = null,
            s = !1,
            a = !1,
            l = function() {
                if (s && a && o) n.player.showChromecast(!0), n.player.setChromecastConnected(!0, o.receiver.friendlyName);
                else {
                    var e = new chrome.cast.SessionRequest("358E83DC"),
                        t = new chrome.cast.ApiConfig(e, h, d, chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED);
                    chrome.cast.initialize(t, u, c)
                }
            },
            u = function() {
                s = !0, s && a && n.player.showChromecast(!0)
            },
            c = function(e) {
                "session_error" === e.code && p()
            },
            h = function(e) {
                o = e, o.addUpdateListener(f), 0 !== o.media.length && g("sessionListener", o.media[0]), n.player.setChromecastConnected(!0, o.receiver.friendlyName)
            },
            d = function(e) {
                e === chrome.cast.ReceiverAvailability.AVAILABLE ? (a = !0, s && a && n.player.showChromecast(!0)) : (a = !1, n.player.showChromecast(!1))
            },
            f = function(e) {
                e || p()
            },
            p = function() {
                o && o.removeUpdateListener(f), r && r.removeUpdateListener(v), o = null, r = null, n.player.setChromecastConnected(!1)
            },
            m = function(e) {
                o = e, o.addUpdateListener(f), n.player.setChromecastConnected(!0, o.receiver.friendlyName)
            },
            g = function(e, t) {
                r = t, r.addUpdateListener(v.bind(this, t))
            },
            v = function(e, t) {
                t ? o.media.length && e === o.media[0] && (e.playerState === chrome.cast.media.PlayerState.PAUSED ? (i = e.media.customData.channel, n.player.togglePlayPause(!0)) : e.playerState === chrome.cast.media.PlayerState.PLAYING && n.player.togglePlayPause(!1)) : (e.removeUpdateListener(v), e.media.customData.channel.toUpperCase() === window.location.pathname.substring(1).toUpperCase() && (i && i === e.media.customData.channel ? (i = "", n.player.togglePlayPause(!1)) : n.player.setChromecastConnected(!1)))
            };
        n.initialize = function(t) {
            t.on("videoPlaying", _.once(function() {
                "undefined" != typeof chrome && chrome.cast && chrome.cast.isAvailable && (n.player = t, l())
            })), t.on("chromecastSessionRequested", function() {
                chrome.cast.requestSession(m, c)
            }), t.on("chromecastMediaSet", function(t) {
                if (0 === o.media.length || !r || !r.media.customData.channel || r.media.customData.channel.toUpperCase() !== t.channel.toUpperCase()) {
                    var n = new chrome.cast.media.MediaInfo(t.url, "application/x-mpegurl");
                    n.streamType = chrome.cast.media.StreamType.LIVE;
                    var i = new chrome.cast.media.GenericMediaMetadata;
                    e.api.get("streams/" + t.channel).then(function(e) {
                        if (e.stream) {
                            var r = e.stream;
                            r.game && (i.subtitle = r.game), r.channel && (r.channel.display_name && (i.title = r.channel.display_name), r.channel.logo ? i.images = [new chrome.cast.Image(r.channel.logo)] : i.images = [new chrome.cast.Image(r.preview.medium)]), n.metadata = i, n.customData = {
                                channel: t.channel,
                                analytics: t.analytics
                            };
                            var s = new chrome.cast.media.LoadRequest(n);
                            s.autoplay = !0, o.loadMedia(s, g.bind(this, "loadMedia"), c)
                        }
                    })
                }
            }), t.on("chromecastVolumeUpdated", function(e) {
                o && o.setReceiverVolumeLevel(e.volume, null, c)
            }), t.on("pauseChromecastSession", function() {
                r && (i = r.media.customData.channel, r.pause(new chrome.cast.media.PauseRequest, null, null), r = null)
            })
        }, e.mixin({
            chromecast: n
        })
    }(Twitch, jQuery),
    function(e, t) {
        var n = function(e, t) {
                this.channel = e, this.stream = t
            },
            i = function(t, n) {
                return new RSVP.Promise(function(i, r) {
                    e.api.get(t).done(function(e) {
                        i(_.reduce(n, function(t, n, i) {
                            if ("function" == typeof n) {
                                var r = n(e[i] || "");
                                r && (t[r.key] = r.val)
                            } else _.has(e, i) && (t[n] = e[i]);
                            return t
                        }, {}))
                    }).fail(function(e) {
                        i({})
                    })
                })
            },
            r = function(e) {
                return i("/api/channels/" + e, {
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
            o = function(e) {
                return i("channels/" + e, {
                    teams: function(e) {
                        if (_.isArray(e) && e.length > 0 && _.has(e[0], "name")) return {
                            key: "team",
                            val: e[0].name
                        }
                    }
                })
            },
            s = function() {
                return i("/api/viewer/info.json", {
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
            a = function(e) {
                return i("/api/channels/" + e + "/viewer", {
                    chansub: function(e) {
                        return {
                            key: "subscriber",
                            val: !!e
                        }
                    }
                })
            },
            l = function(n) {
                return new RSVP.Promise(function(i, r) {
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
                                n.length > 1 && i({
                                    node: t[1],
                                    cluster: n[1]
                                })
                            } else console.warn("no match found for clusterPattern."), i({})
                        },
                        error: function() {
                            console.warn("error in fetching stream data"), i({})
                        }
                    })
                })
            };
        n.prototype.load = function(e) {
            var t = [],
                n = this.channel,
                i = this.stream;
            return console.info("pulling Context info"), t.push(r(n)), t.push(o(n)), t.push(s()), t.push(a(n)), t.push(l(i)), RSVP.all(t).then(function(t) {
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
            var i = this;
            this.queue = [], RSVP.EventTarget.mixin(this.queue), this.basicProperties = {
                b: "true" === e.storage.get("b", {
                    storage: "sessionStorage"
                })
            }, t.load(n).then(function(t) {
                i.basicProperties = t, i.queue.on("eventInQueue", function(t) {
                    var n = i.queue.pop();
                    e.tracking.spadeAndMixpanel.trackEvent(n.event, _.extend({}, i.basicProperties, n.properties)), i.queue.length > 0 && i.queue.trigger("eventInQueue")
                }), i.queue.length > 0 && i.queue.trigger("eventInQueue")
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
        var n = function(t, n, i) {
            this.context = new e.player.ContextLoader(t, n), this.handler = new e.player.EventHandler(this.context, i), this.trackingMinutesWatched = !1
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
            } catch (e) {
                return !1
            }
        }, n.prototype.init = function(i, r) {
            if (console.info("HTML5Player.init"), i = i || function() {}, r = r || function() {}, this.options.videoId) return console.info("HTML5Player.init error"), void r("HTML5 player doesn't support archives");
            var o = navigator.userAgent.match(/Android/i);
            if (!n.canPlayHLS() && !o) return this.$el.find(".js-message").show().text("Unsupported player."), console.info("HTML5Player.init error"), void r("Browser doesn't support HLS");
            this.$el.show();
            var s = this;
            e.hls.getPlaylist(this.options.channel).then(function(n) {
                s._onlineStatus = "online", t(s).triggerHandler("online");
                var r = URI.parseQuery(window.location.search).mwcc,
                    o = {
                        vid_width: s.$contentPlayer.width(),
                        vid_height: s.$contentPlayer.height(),
                        player: s.options.player,
                        video_renderer: "html5",
                        platform: s.options.platform,
                        adblock: "true" === e.storage.get("adblock_enabled", {
                            storage: "sessionStorage"
                        }),
                        app_version: "HTML5 0.1",
                        browser: navigator.userAgent,
                        orientation: window.innerHeight >= window.innerWidth ? "portrait" : "landscape",
                        live: !0,
                        buffer_empty_count: void 0,
                        quality: void 0,
                        fullscreen: void 0
                    };
                r && (o.exp_name = "mwcc", o.exp_grp = r);
                var a = s.eventController = new e.player.EventController(s.options.channel, n, o),
                    l = function(e) {
                        t.ajax({
                            type: "GET",
                            url: "http://fan.twitch.tv/" + e,
                            cache: !1,
                            data: {
                                channel: s.options.channel,
                                context: "preroll",
                                turbo_token: s.options.turboToken,
                                chansub_token: s.options.channelSubscriptionToken
                            }
                        })
                    };
                if (s.options.ads === !1) return l("ad"), setTimeout(l, 3e4, "adcompleted"), s.setSrc(n), console.info("HTML5Player.init success (no ads)"), void i();
                var u = new e.player.AdsController({
                    container: s.adContainer,
                    player: s.contentPlayer
                });
                t(u).on("start", function(e) {
                    l("ad"), a.sendVideoAdImpression("preroll", e.currentTarget.adsLoader.provider)
                }), t(u).on("contentResumeRequested adError", function() {
                    l("adcompleted"), s.setSrc(n), s.preloadContent(function() {
                        try {
                            s.play()
                        } catch (e) {}
                    })
                }), u.initialize().then(function() {
                    ~window.location.href.indexOf("errortest") && "production" !== e.deployFlavor && "beta" !== e.deployFlavor ? u.requestAds("invalid_ad_url") : ~window.location.href.indexOf("twitchtest") ? (u.requestAds(e.ads.hls.getAdTagUrl({
                        provider: "test"
                    }), "test"), a.sendVideoAdOpportunity("preroll", "test")) : (u.requestAds(e.ads.hls.getAdTagUrl({
                        provider: "twitch",
                        platform: "html5",
                        channel: s.options.channel || "",
                        game: s.options.game || "",
                        referrer: document.referrer
                    }), "twitch"), a.sendVideoAdOpportunity("preroll", "twitch"))
                }), console.info("HTML5Player.init success"), i()
            }, function() {
                s._onlineStatus = "offline", t(".js-message").show().text("OFFLINE"), s.$contentPlayer.removeAttr("poster"), console.info("HTML5Player.init success (offline)"), i()
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
            i = "3576121",
            r = (window.location.toString(), "Deprecation warning: use the asynchronous Twitch.asyncAds.ready(..)"),
            o = function() {
                console.debug(r)
            },
            s = function(e, t) {
                for (var n, i = Object.keys(t), r = 0, o = i.length; r < o; r++) n = i[r], e = e.replace("{{" + n + "}}", encodeURIComponent(t[n]));
                return e
            };
        n.ready = function(t) {
            var i = new RSVP.Promise(function(t) {
                e.user(function(e) {
                    t(_.pick(e, "has_turbo"))
                }, function() {
                    t(!1)
                })
            });
            RSVP.all([i, e.geo]).then(function(e) {
                var i = e[0],
                    r = e[1].geo,
                    o = !i || !i.has_turbo;
                t(n._readyData = {
                    geo: r,
                    enabled: o
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
        n.pushGoogleTag = function(i, r, o) {
            a.push(function() {
                var s = e.ads.dfpSlotPath(n.dfpSlotName()),
                    a = i + "_holder";
                googletag.pubads().setTargeting("pagetype", n.dfpPageType()), googletag.defineSlot(s, r, a).addService(googletag.pubads()), googletag.cmd.push(function() {
                    googletag.pubads().setTargeting("salt", "https:" === window.location.protocol ? "true" : "false"), googletag.display(i + "_holder")
                }), o && t("#" + i + "_holder").hide()
            })
        }, n.registerGoogleTags = function() {
            a.forEach(function(e) {
                googletag.cmd.push(e)
            })
        }, n.slotName = function(e) {
            return "Twitch_" + e
        };
        var l = {};
        l.leader = function(n) {
            e.ads.enabled() && (e.ads.enabled() && e.ads.pushGoogleTag(n, [
                [970, 66],
                [728, 90]
            ]), e.asyncAds.ready(function() {
                t(".ad_leader").addClass("dfp")
            }))
        }, l.pushdown = function(n) {
            e.ads.enabled() && e.ads.pushGoogleTag(n, [
                [970, 418],
                [970, 67],
                [970, 250],
                [970, 150],
                [980, 250]
            ], !0), e.asyncAds.ready(function() {
                t(".fp_opa_pushdown").addClass("dfp")
            })
        }, l.rectangle = function(n) {
            if (!e.ads.enabled()) return t(".advertisement").hide(), void t(".ad_contain").hide();
            e.ads.enabled() && e.ads.pushGoogleTag(n, [
                [300, 250],
                [300, 600],
                [250, 600]
            ])
        }, l.siteskin = function(t) {
            e.ads.enabled() && e.ads.pushGoogleTag(t, [1, 1], !0)
        }, n.prepareAd = function(t, n) {
            var i = e.ads.slotName(t);
            l[n] && l[n](i)
        }, n.hls = {
            formatGame: function(e) {
                return (e || "").toLowerCase().replace(/[^a-z0-9]+/g, "_")
            },
            stripAmpEq: function(e) {
                return e.replace(/[&=]/g, "")
            },
            getAdTagUrl: function(t) {
                var n, r;
                switch (t.provider) {
                    case "twitch":
                        return n = "http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&ad_rule=0&gdfp_req=1&iu=/{{dfpNetworkCode}}/twitch/channels/{{channel}}&ciu_szs=300x250&url={{referrer}}&correlator={{timestamp}}&env=vp&unviewed_position_start=1&output=xml_vast3&cust_params={{custom}}", r = "chan={{channel}}&timebreak=30&game={{game}}&platform={{platform}}&mature=true&pos=pre", s(n, {
                            channel: t.channel,
                            referrer: t.referrer,
                            timestamp: (new Date).getTime(),
                            dfpNetworkCode: i,
                            custom: s(r, {
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
            return "/" + i + "/twitch/" + e
        }, n.dfpSlotName = function() {
            switch (window.SitePageType) {
                case "front_page":
                    return "homepage";
                case "search":
                    return "directory";
                default:
                    return console.error("TWITCH: Set a DFP page type"), ""
            }
        }, n.dfpNetworkCode = i, e.mixin({
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
                    "undefined" != typeof adnxs && e(adnxs.megatag)
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
        var i = _.memoize(function() {
            return {
                "dfp-directory-banner": {
                    sizes: [
                        [970, 66],
                        [728, 90],
                        [970, 250],
                        [1, 1]
                    ],
                    unitName: "/" + e.ads.dfpNetworkCode + "/twitch/directory"
                },
                "dfp-directory-rectangle": {
                    sizes: [
                        [300, 250],
                        [1, 1]
                    ],
                    unitName: "/" + e.ads.dfpNetworkCode + "/twitch/directory"
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
            var i = e.ads._readyData;
            if (t("#dfp-directory-banner, .ad_contain").hide(), this.enabled && i && i.enabled) {
                var r = ["dfp-directory-banner"];
                n && n.singleOnly || r.push("dfp-directory-rectangle"), e.asyncAds.sra({
                    slots: r
                }).then(function(e) {
                    e[0] && 1 != t("#google_ads_iframe_\\/3576121\\/twitch\\/directory_0").width() ? t("#dfp-directory-banner").show() : t("#dfp-directory-banner").hide(), e[1] && 1 != t("#google_ads_iframe_\\/3576121\\/twitch\\/directory_1").width() ? t(".ad_contain").show().attr("style", "display: block !important") : t(".ad_contain").hide()
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
            return new RSVP.Promise(function(r, o) {
                e.ads.ready(function(e) {
                    n.enabled && e && e.enabled ? n.resetGoogletag().then(function() {
                        var e = i();
                        googletag.cmd.push(function() {
                            t.slots.forEach(function(t) {
                                googletag.defineSlot(e[t].unitName, e[t].sizes, t).addService(googletag.companionAds())
                            }), SiteOptions.dfp_sidebar_channel_ad && googletag.defineSlot(e["dfp-channel-adlight"].unitName, e["dfp-channel-adlight"].sizes, "dfp-channel-adlight").addService(googletag.pubads()), googletag.pubads().collapseEmptyDivs(), googletag.enableServices()
                        }), r()
                    }, r) : r()
                })
            })
        }, n.displayAdLight = function() {
            googletag.cmd.push(function() {
                googletag.pubads().clearTargeting(), googletag.pubads().setTargeting("game", e.asyncAds.metadata.game), googletag.pubads().setTargeting("chan", e.asyncAds.metadata.chan), googletag.pubads().setTargeting("pagetype", e.asyncAds.metadata.pagetype), googletag.pubads().setTargeting("campaign", e.asyncAds.metadata.campaign), googletag.pubads().setTargeting("kuid", e.asyncAds.metadata.kuid), googletag.pubads().setTargeting("server", e.deployFlavor), googletag.pubads().setTargeting("salt", "https:" === window.location.protocol ? "true" : "false"), googletag.pubads().setTargeting("loggedin", e.user.isLoggedIn() ? "true" : "false"), googletag.display("dfp-channel-adlight")
            })
        }, n.afterCompanionAdsRendered = function(n) {
            t(".js-new-channel-ad").length && ("google" === n && (t(".new_advertisement").hide(), t("#google_companion_300x250").hide(), t("#google_companion_300x250").is(":empty") || t("#google_companion_300x250").show()), t(".js-ad-actions").show(), t(".new_advertisement").show(), e.asyncAds.resizeForCompanionAds(10))
        }, n.resizeForCompanionAds = function(n) {
            setTimeout(function() {
                var i = t(".js-new-channel-ad").outerHeight();
                n > 0 && i < 60 ? e.asyncAds.resizeForCompanionAds(n - 1) : t(".js-rightcol-content").css("top", i)
            }, 100)
        }, n.sra = function(r) {
            var o = function() {
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
                s = function() {
                    if (googletag.debug_log._events) return googletag.debug_log._events;
                    var e = googletag.debug_log.log,
                        t = RSVP.EventTarget.mixin({});
                    return googletag.debug_log.log = function(n, i, r, o, s) {
                        return 6 === i.getMessageId() && t.trigger("gpt-slot_rendered"), e.apply(this, arguments)
                    }, googletag.debug_log._events = t, t
                },
                a = function(r) {
                    var a = this,
                        l = o();
                    return new RSVP.Promise(function(o, u) {
                        n.resetGoogletag().then(l(function() {
                            var n = i();
                            googletag.cmd.push(function() {
                                r.slots.forEach(function(e) {
                                    a.slots.push({
                                        id: e,
                                        el: t("#" + e)
                                    }), googletag.defineSlot(n[e].unitName, n[e].sizes, e).addService(googletag.pubads())
                                }), s().on("gpt-slot_rendered", _.after(r.slots.length, function() {
                                    o(_.map(a.slots, function(e) {
                                        return "none" !== e.el.css("display")
                                    }))
                                })), googletag.pubads().clearTargeting(), googletag.pubads().setTargeting("game", e.asyncAds.metadata.game), googletag.pubads().setTargeting("pagetype", e.asyncAds.metadata.pagetype), googletag.pubads().setTargeting("campaign", e.asyncAds.metadata.campaign), googletag.pubads().setTargeting("kuid", e.asyncAds.metadata.kuid), googletag.pubads().setTargeting("server", e.deployFlavor), googletag.pubads().setTargeting("salt", "https:" === window.location.protocol ? "true" : "false"), googletag.pubads().setTargeting("loggedin", e.user.isLoggedIn() ? "true" : "false"), googletag.pubads().enableSingleRequest(), googletag.pubads().collapseEmptyDivs(), googletag.enableServices(), _.each(r.slots, function(e) {
                                    googletag.display(e)
                                })
                            })
                        }), u)
                    })
                };
            return a(r)
        }, e.mixin({
            asyncAds: n
        })
    }(Twitch, jQuery),
    function(e, t) {
        var n = function(n, i) {
                if (SiteOptions[n.optionName]) {
                    var r = function(t, n, i, r) {
                            var o = ich[t](i);
                            r.prepend(o), n && o.find(".js-dismiss-banner#" + t).on("click", function() {
                                o.hide(), e.storage.set(i.dismissKey, !0)
                            })
                        },
                        o = function(n, i, o, s, a, l, u, c, h, d) {
                            var f = {},
                                p = "",
                                m = !1,
                                g = !1,
                                v = !1,
                                y = !1,
                                _ = i[s];
                            l.actionRequired && (g = l.actionRequired.indexOf(_) > -1), l.success && (v = l.success.indexOf(_) > -1), l.pending && (y = l.pending.indexOf(_) > -1), v ? (p = c.success, m = !e.storage.get(p), f.showDismissButton = !0, f.showActionButton = !0) : y ? (p = c.pending, m = !e.storage.get(p), f.showDismissButton = !0) : g && (f.actionRequired = g, f.showActionButton = !0, m = !0), m || !h || o.payable || (m = !0), m && u && t.each(u, function(e, n) {
                                t.inArray(i[n.attribute], n.states) < 0 && (m = !1)
                            }), m && (e.storage.del(p), f[i.partner_state] = !0, f[_] = !0, f.login = n, f.dismissKey = p, r(a, c, f, d))
                        };
                    e.user().then(function(e) {
                        return data = {
                            login: e.login,
                            isStaff: e.is_staff
                        }, RSVP.hash(data)
                    }).then(function(t) {
                        return results = {
                            payoutEntity: e.api.get("/api/channels/" + t.login + "/payout_entity"),
                            login: t.login,
                            isStaff: t.isStaff
                        }, n.activeProductOnly && (results.product = e.api.get("/api/channels/" + t.login + "/product")), RSVP.hash(results)
                    }).then(function(t) {
                        return t.payoutEntity && n.shouldCheckPayable && !t.isStaff && (t.isPayable = e.api.get("/api/payouts/is_payee_payable")), RSVP.hash(t)
                    }).then(function(e) {
                        var t = e.payoutEntity;
                        t.partner_state && t.caller_id === t.owner_id && (n.activeProductOnly && !e.product || e.isStaff || o(e.login, t, e.isPayable, n.attribute, n.bannerName, n.states, n.requiredStates, n.dismissKeys, n.shouldCheckPayable, i))
                    }, function(e) {
                        if (!e || 401 !== e.status) throw e
                    })
                }
            },
            i = ["start", "failed", "missing", "no_form", "requires_substantiation"],
            r = ["pending", "substantiation_pending"],
            o = ["success"],
            s = {
                newBanner: n,
                serviceTaxOptions: {
                    bannerName: "service_tax_banner",
                    optionName: "tax_notifications_enabled",
                    attribute: "service_tax_state",
                    states: {
                        actionRequired: i,
                        pending: r,
                        success: o
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
                        actionRequired: i
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
            banners: s
        })
    }(Twitch, jQuery),
    function(e, t) {
        var n = {};
        n.write = function(t, n, i) {
            i = i || {};
            var t = "TwitchCache:" + t;
            e.storage.setObject(t, {
                resource: n,
                expiration: i.milliseconds,
                time: (new Date).getTime(),
                version: i.version,
                restrict: i.restrict
            }, _.pick(i, "storage"))
        }, n.read = function(t, n) {
            n = n || {};
            var t = "TwitchCache:" + t,
                i = e.storage.getObject(t, _.pick(n, "storage"));
            return i ? i.expiration && (new Date).getTime() - i.time > i.expiration || n.version !== i.version || !_.isEqual(n.restrict, i.restrict) ? (e.storage.del(t, _.pick(n, "storage")), null) : i.resource : null
        }, e.mixin({
            cache: n
        })
    }(window.Twitch, window.jQuery),
    function(e, t) {
        var n = {};
        n.infoModal = function(n, i, r, o) {
            o = "undefined" != typeof o ? o : {}, t(i).overlay(n, function() {
                t(r).click(function(e) {
                    e.preventDefault(), t(this).trigger("overlay.hide")
                })
            }, e.defaults(o, {
                width: "420px"
            }))
        }, e.mixin({
            dashboard: n
        })
    }(Twitch, jQuery),
    function(e, t) {
        var n = function(e, t) {
                return t -= e.toString().length, t > 0 ? new Array(t + (/\./.test(e) ? 2 : 1)).join("0") + e : e + ""
            },
            i = {
                capitalize: function(e) {
                    return e = e || "", e.charAt(0).toUpperCase() + e.slice(1)
                },
                commatize: function(e) {
                    return e = e || 0, isNaN(e) ? e : e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                },
                getTime: function(e) {
                    var t = n(e.getMinutes(), 2),
                        i = e.getHours();
                    return i > 12 ? i -= 12 : 0 === i && (i = 12), i + ":" + t
                },
                lengthAsClock: function(e) {
                    var t = Math.floor(e % 60),
                        i = Math.floor(e % 3600 / 60),
                        r = Math.floor(e / 3600);
                    return r ? r + ":" + n(i, 2) + ":" + n(t, 2) : i + ":" + n(t, 2)
                },
                clockAsLength: function(e) {
                    var t = e.split(":"),
                        n = parseInt(t[t.length - 1], 10),
                        i = parseInt(t[t.length - 2], 10),
                        r = 0;
                    return t.length > 2 && (r = parseInt(t[t.length - 3], 10)), n + 60 * i + 3600 * r
                },
                escape: function(e) {
                    return t("<div/>").text(e).html()
                }
            };
        e.mixin({
            display: i
        })
    }(Twitch, jQuery),
    function(e, t) {
        var n = {};
        n.init = function(t) {
            if (!window.skipEmailNotifier) {
                this.config = e.defaults(t, {
                    forgetDuration: t.forgetDuration,
                    delay: t.delay
                });
                var n = Number.POSITIVE_INFINITY,
                    i = parseInt(e.storage.get("requestUserEmail"), 10);
                isNaN(i) || (n = +new Date - i), n > 1e3 * this.config.forgetDuration && setTimeout(e.emailNotifier.requestUserEmail, 1e3 * this.config.delay)
            }
        }, n.requestUserEmail = function() {
            var t = {
                timeout: 2e4,
                escape: !1
            };
            e.storage.set("requestUserEmail", +new Date), e.api.get("user").done(function(n) {
                var i = URI(window.location.href).path();
                n.email || "/settings" === i || (e.tracking.mixpanel.trackEvent("email_notice", {
                    type: "display"
                }), e.notify('Welcome to Twitch! <a href="/settings?type=email_notice">Please click here to verify your email! </a>', t))
            })
        }, e.mixin({
            emailNotifier: n
        })
    }(Twitch, jQuery),
    function(e) {
        var t, n, i = new RSVP.Promise(function(t, n) {
            e.api.on("ready", function() {
                e.api.get("/api/viewer/info.json").done(function(n) {
                    e.preferredLanguage = n.preferred_language, e.receivedLanguage = n.received_language;
                    var i = cookie.get("language");
                    void 0 === i ? e.language.setCookieAndReload(e.receivedLanguage) : n.login && i !== n.user_language && e.language.setByAsyncPut(i), n.eu && window.euCookieNotification(), e.tracking.spadeAndMixpanel.trackEvent("prime_web_geo_data", {
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
            geo: i,
            receivedLanguage: n,
            preferredLanguage: t
        })
    }(window.Twitch),
    function(e, t) {
        var n = "/api/channels/{{channel}}/access_token",
            i = "//usher.ttvnw.net/api/channel/hls/{{channel}}.m3u8?token={{{token}}}&sig={{{sig}}}",
            r = {};
        r.getPlaylist = function(t) {
            return new RSVP.Promise(function(r, o) {
                return t && t.length ? void e.api.get(n.replace("{{channel}}", encodeURIComponent(t))).then(function(e) {
                    e.token && e.sig ? r(i.replace("{{channel}}", encodeURIComponent(t)).replace("{{{token}}}", e.token).replace("{{{sig}}}", e.sig)) : o()
                }, o) : o()
            })
        }, e.mixin({
            hls: r
        })
    }(Twitch, jQuery),
    function(e, t) {
        var n = {};
        n.setCookieAndReload = function(t) {
            var n, i = cookie.get("language") || "en";
            e.language.setCookie(t), n = !!cookie.get("language"), i !== t && n && location.reload()
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
            i = function(e, t) {
                return this._actions[e] = this._actions[e] || [], this._actions[e].push(t), this
            },
            r = function(e) {
                if (this._actions[e])
                    for (var n = 0, i = this._actions[e].length; n < i; n++) this._actions[e][n](t);
                return this
            };
        e.mixin({
            _actions: n,
            action: i,
            run: r
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
            i = function(e, t, n) {
                i.alert.apply(i, arguments)
            };
        i._dispatch = function(t, i, r, o) {
            r = r || {}, "function" == typeof r && (o = r, r = {});
            var s = e.defaults({
                type: t,
                text: i,
                callback: {
                    onClose: o || !1
                }
            }, r, n);
            return s.escape && (s.text = e.display.escape(i)), noty(s)
        }, i.alert = function(e, t, n) {
            return i._dispatch("alert", e, t, n)
        }, i.notice = function(e, t, n) {
            return i._dispatch("notice", e, t, n)
        }, i.success = function(e, t, n) {
            return i._dispatch("success", e, t, n)
        }, i.error = function(e, t, n) {
            return i._dispatch("error", e, t, n)
        }, i.flash = function(e, n) {
            var r = t("#header_notification"),
                o = r.find(".flash-error"),
                s = r.find(".flash-success"),
                a = r.find(".flash-notice");
            return o.length ? i.error(o.text(), e, n) : s.length ? i.success(s.text(), e, n) : a.length ? i.alert(a.text(), e, n) : void 0
        }, e.mixin({
            notify: i
        })
    }(Twitch, jQuery), window.sp_cid = "qFEaZsFQnwEdUIs",
    function(e, t) {
        var n = "//d2lv4zbk7v5f93.cloudfront.net/esf.js",
            i = new RSVP.Promise(function(e, i) {
                t.ajax({
                    url: n,
                    dataType: "script",
                    timeout: 2e3,
                    cache: !0
                }).fail(function(e, t, n) {
                    i()
                }), document.addEventListener("sp.blocking", function() {
                    e(!0)
                }), document.addEventListener("sp.not_blocking", function() {
                    e(!1)
                })
            }),
            r = {
                detect: i,
                pageTransition: function() {
                    window._sp_ && window._sp_.pageChange && window._sp_.pageChange()
                }
            };
        e.mixin({
            sentinel: r
        })
    }(Twitch, jQuery),
    function(e, t) {
        var n = {};
        n.setup = function(e, n) {
            var i = function(e) {
                    t.loggedInAjax({
                        url: n,
                        success: function(n, i, r) {
                            var o = {};
                            n.forEach(function(e) {
                                o[e.label] = {
                                    identifier: e.identifier,
                                    groupings: e.groupings,
                                    resolutions: e.resolutions
                                }
                            });
                            var s = t.makeArray(t(n).map(function(e, t) {
                                return t.label
                            })).sort();
                            e(null, o, s)
                        }
                    })
                },
                r = function() {
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
                    var i = t.makeArray(t(e).map(function(e, t) {
                            return t.label
                        })),
                        r = {
                            getIdentifier: function(e) {
                                return n[e]
                            },
                            createArray: function(e) {
                                var r = i.filter(function(i) {
                                    return "none" === n[i] || t.inArray(n[i], e) !== -1
                                });
                                return r
                            }
                        };
                    return r
                }(),
                o = function() {
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
                    var i = t.makeArray(t(e).map(function(e, t) {
                            return t.label
                        })),
                        r = {
                            getIdentifier: function(e) {
                                return n[e]
                            },
                            resolutionsArray: i,
                            defaultResolution: _.find(e, function(e) {
                                return "hour" === e.identifier
                            }).label
                        };
                    return r
                }();
            return "function" != typeof Array.prototype.forEach || "function" != typeof Array.prototype.filter ? void t("#chart_container").text(i18n("Sorry, your browser is incompatible with Twitch stats. Please use a recent version of Google Chrome or Mozilla Firefox")) : (t("#date_selector #prev").addClass("disabled"), t("#date_selector > select#month").change(function(n) {
                var i = t("#date_selector > select#month option:selected"),
                    r = t("#date_selector #prev"),
                    o = t("#date_selector #next");
                i.next().length ? i.prev().length ? (r.removeClass("disabled"), o.removeClass("disabled")) : (r.addClass("disabled"), o.removeClass("disabled")) : (r.removeClass("disabled"), o.addClass("disabled")), e.month(t(this).find(":selected").val()), e.reload()
            }), t("#date_selector #prev, #next").click(function(e) {
                var n = t("#date_selector > select#month option:selected");
                n = "prev" === this.id ? n.prev() : n.next(), n.length && t("#date_selector > select#month").val(n.val()).change()
            }), void i(function(n, i, s) {
                var a = t("#stat_selector").autocomplete({
                        source: s,
                        delay: 0,
                        minLength: 0
                    }),
                    l = t("#grouping_selector").autocomplete({
                        delay: 0,
                        minLength: 0
                    }),
                    u = t("#resolution_selector").autocomplete({
                        delay: 0,
                        minLength: 0,
                        source: o.resolutionsArray
                    });
                u.val(o.defaultResolution);
                var c = function(n) {
                    var o = r.createArray(i[n].groupings);
                    l.autocomplete("option", "source", o), t.inArray(e.grouping(), o) === -1 && (e.grouping("none"), l.val("")), 1 === o.length ? l.attr("disabled", !0) : l.removeAttr("disabled"), e.load(i[n].identifier)
                };
                [a, l, u].forEach(function(e) {
                    e.bind("focus", function(e) {
                        t(this).autocomplete("search", "")
                    })
                }), a.bind("autocompleteselect", function(e, n) {
                    c(n.item.value), t(this).blur()
                }), u.bind("autocompleteselect", function(n, i) {
                    var r = o.getIdentifier(i.item.value);
                    e.resolution(r).reload(), t(this).blur()
                }), l.bind("autocompleteselect", function(n, i) {
                    var o = r.getIdentifier(i.item.value);
                    "none" === o && (t(this).val(""), n.preventDefault()), e.grouping(o).reload(), t(this).blur()
                });
                var h = i18n("Video Plays");
                a.val(h), c(h)
            }))
        }, e.mixin({
            stats: n
        })
    }(Twitch, jQuery);
var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(e) {
        var t, n, i, r, o, s, a, l = "",
            u = 0;
        for (e = Base64._utf8_encode(e); u < e.length;) t = e.charCodeAt(u++), n = e.charCodeAt(u++), i = e.charCodeAt(u++), r = t >> 2, o = (3 & t) << 4 | n >> 4, s = (15 & n) << 2 | i >> 6, a = 63 & i, isNaN(n) ? s = a = 64 : isNaN(i) && (a = 64), l = l + Base64._keyStr.charAt(r) + Base64._keyStr.charAt(o) + Base64._keyStr.charAt(s) + Base64._keyStr.charAt(a);
        return l
    },
    decode: function(e) {
        var t, n, i, r, o, s, a, l = "",
            u = 0;
        for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); u < e.length;) r = Base64._keyStr.indexOf(e.charAt(u++)), o = Base64._keyStr.indexOf(e.charAt(u++)), s = Base64._keyStr.indexOf(e.charAt(u++)), a = Base64._keyStr.indexOf(e.charAt(u++)), t = r << 2 | o >> 4, n = (15 & o) << 4 | s >> 2, i = (3 & s) << 6 | a, l += String.fromCharCode(t), 64 != s && (l += String.fromCharCode(n)), 64 != a && (l += String.fromCharCode(i));
        return l = Base64._utf8_decode(l)
    },
    _utf8_encode: function(e) {
        e = e.replace(/\r\n/g, "\n");
        for (var t = "", n = 0; n < e.length; n++) {
            var i = e.charCodeAt(n);
            i < 128 ? t += String.fromCharCode(i) : i > 127 && i < 2048 ? (t += String.fromCharCode(i >> 6 | 192), t += String.fromCharCode(63 & i | 128)) : (t += String.fromCharCode(i >> 12 | 224), t += String.fromCharCode(i >> 6 & 63 | 128), t += String.fromCharCode(63 & i | 128))
        }
        return t
    },
    _utf8_decode: function(e) {
        for (var t = "", n = 0, i = c1 = c2 = 0; n < e.length;) i = e.charCodeAt(n), i < 128 ? (t += String.fromCharCode(i), n++) : i > 191 && i < 224 ? (c2 = e.charCodeAt(n + 1), t += String.fromCharCode((31 & i) << 6 | 63 & c2), n += 2) : (c2 = e.charCodeAt(n + 1), c3 = e.charCodeAt(n + 2), t += String.fromCharCode((15 & i) << 12 | (63 & c2) << 6 | 63 & c3), n += 3);
        return t
    }
};
! function(e, t) {
    if (!t.__SV) {
        var n, i, r, o;
        window.mixpanel = t, n = e.createElement("script"), n.type = "text/javascript", n.async = !0, n.src = ("https:" === e.location.protocol ? "https:" : "http:") + "//cdn.mxpnl.com/libs/mixpanel-2.2.min.js", i = e.getElementsByTagName("script")[0], i.parentNode.insertBefore(n, i), t._i = [], t.init = function(e, n, i) {
            function s(e, t) {
                var n = t.split(".");
                2 == n.length && (e = e[n[0]], t = n[1]), e[t] = function() {
                    e.push([t].concat(Array.prototype.slice.call(arguments, 0)))
                }
            }
            var a = t;
            for ("undefined" != typeof i ? a = t[i] = [] : i = "mixpanel", a.people = a.people || [], a.toString = function(e) {
                    var t = "mixpanel";
                    return "mixpanel" !== i && (t += "." + i), e || (t += " (stub)"), t
                }, a.people.toString = function() {
                    return a.toString(1) + ".people (stub)"
                }, r = "disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.track_charge people.clear_charges people.delete_user".split(" "), o = 0; o < r.length; o++) s(a, r[o]);
            t._i.push([e, n, i])
        }, t.__SV = 1.2
    }
}(document, window.mixpanel || []), mixpanel.init(SiteOptions.mixpanel_token),
    function(e) {
        var t = {};
        t.track = function(e, t) {
            Dobbin.Dobbin.trackEvent(e, t, ["spade"])
        }, window.spade = t
    }(jQuery), window._gaq = window._gaq || [],
    function(e, t) {
        var n = {},
            i = /Prerender/.test(window.navigator.userAgent);
        Dobbin.Dobbin.configure({
            Promise: RSVP.Promise
        });
        var r = {
                MIXPANEL: "_mixpanel_",
                SPADE: "_spade_"
            },
            o = function(t, n, o) {
                i || (n = n || {}, n.distinct_id || (n.distinct_id = e.idsForMixpanel.getOrCreateUniqueId()), n.device_id = e.idsForMixpanel.getOrCreateUniqueId(), n.tab_session_id = e.idsForMixpanel.getOrCreateSessionStorageUniqueId(), e.geo.then(function(i) {
                    n = _.extend({
                        host: window.document.location.host || "",
                        domain: window.document.domain || "",
                        logged_in: e.user.isLoggedIn(),
                        login: e.user.login(),
                        url: window.document.location.href || "",
                        referrer_host: new RegExp("^https?://([^/]+)").exec(window.document.referrer) || "",
                        referrer_url: window.document.referrer || "",
                        preferred_language: i.preferred_language,
                        received_language: i.received_language
                    }, n), o === r.SPADE ? spade.track(t, n) : o === r.MIXPANEL && e.tracking.mixpanel.sendMixpanelBeacon(t, n), e.tracking.log.trackEvent(t, n, o)
                }))
            },
            s = function() {
                this.pageViewId = null, this.startTime = null
            };
        s.prototype.start = function() {
            var t = e.idsForMixpanel.getOrCreateUniqueId(),
                n = window.location.href,
                i = (new Date).getTime(),
                r = window.App.__container__.lookup("controller:application").get("currentRouteName");
            this.pageViewId = s._getPageViewId(t);
            var o = {
                device_id: t,
                location: r,
                pageview_id: this.pageViewId,
                time: i / 1e3,
                url: n
            };
            this.startTime = i, e.tracking.spade.trackEvent("pageview_diagnostic_opportunity", o)
        }, s.prototype.end = function() {
            var t = (new Date).getTime();
            e.tracking.spade.trackEvent("pageview_diagnostic_complete", {
                device_id: e.idsForMixpanel.getOrCreateUniqueId(),
                pageview_id: this.pageViewId,
                elapsed: (t - this.startTime) / 1e3,
                time: t / 1e3
            })
        }, s._getPageViewId = function(t) {
            return (new Date).getTime() + "-" + e.idsForMixpanel.createUniqueId(t)
        };
        var a = (new URI).query(!0);
        if (window.history && "function" == typeof window.history.replaceState) {
            var l = (new URI).removeQuery(["tt_medium", "tt_content", "tt_content_index", "followed_flow"]);
            window.history.replaceState({}, null, l.toString())
        }
        var u = {};
        n.funnel = {
            trackPageViewWithDiagnostics: function(t) {
                var n = new s;
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
                sentinel: e.sentinel.detect.catch(function(e) {})
            },
            addCampaignTracking: function(e) {
                t(e.selector).each(function(n, i) {
                    t(i).attr({
                        "data-tt_medium": e.tt_medium,
                        "data-tt_content": e.tt_content
                    })
                })
            },
            campaignSelector: "*[data-tt_medium], *[data-tt_content]",
            handleCampaignClick: function(i) {
                var r = t(i.target).closest(n.funnel.campaignSelector);
                if (r.length) {
                    var o = parseInt(r.attr("data-tt_content_index")) || void 0,
                        s = {
                            medium: r.attr("data-tt_medium"),
                            content: r.attr("data-tt_content"),
                            content_index: o
                        };
                    if (r[0].hasAttribute("data-ember-action")) e.tracking.funnel.addProperties(s);
                    else if ("a" === r.prop("tagName").toLowerCase()) {
                        var a = r.attr("href") || "";
                        r.attr("href", URI(a).addSearch({
                            tt_medium: r.attr("data-tt_medium"),
                            tt_content: r.attr("data-tt_content"),
                            tt_content_index: o
                        }).toString()), e.tracking.funnel.addProperties(s)
                    }
                }
            },
            addProperties: function(e) {
                u = _.extend(u, e)
            },
            pageviewProperties: {},
            trackPageView: function(i) {
                i = i || {};
                var r = new URI,
                    o = i.referrer || document.referrer,
                    s = o ? new URI(o) : {},
                    l = URI.parseQuery(window.location.search).mwcc;
                l && (i.exp_name = "mwcc", i.exp_grp = l), RSVP.hash(this.data).then(function(l) {
                    i = _.defaults(u, i || {}, {
                        session_device_id: e.idsForMixpanel.getOrCreateSessionUniqueId(),
                        localstorage_device_id: e.idsForMixpanel.getOrCreateLocalStorageUniqueId(),
                        app_version: void 0,
                        is_turbo: !!l.user.has_turbo,
                        language: l.geo.received_language,
                        viewport_height: t(window).height(),
                        viewport_width: t(window).width(),
                        collapse_left: void 0,
                        collapse_right: void 0,
                        referrer_host: o ? s.host() : void 0,
                        referrer_domain: o ? s.domain() : void 0,
                        accept_language: void 0,
                        medium: a.tt_medium,
                        content: a.tt_content,
                        content_index: a.tt_content_index ? parseInt(a.tt_content_index) : void 0,
                        time: (new Date).getTime() / 1e3,
                        location: void 0,
                        platform: "web",
                        login: l.user.login,
                        url: r.toString(),
                        host: r.host(),
                        domain: r.domain(),
                        adblock: void 0,
                        sentinel_ab: l.sentinel,
                        browser: navigator.userAgent,
                        page_session_id: e.idsForMixpanel.createUniqueId(),
                        referrer: o || void 0
                    }), a = {}, u = {}, e.tracking.funnel.pageviewProperties = {
                        location: i.location,
                        content: i.content,
                        medium: i.medium,
                        page_session_id: i.page_session_id
                    }, e.tracking.funnel.debugEnabled() && (console.group("Twitch.tracking.funnel.trackPageView"), console.log("event:", "pageview"), console.log("properties:", i), console.groupEnd()), n.spadeAndMixpanel.trackEvent(Dobbin.Dobbin.events.EVENT_PAGEVIEW, i)
                }), c()
            },
            debugEnabled: function(t) {
                var n = "Twitch.tracking.funnel.debugEnabled";
                return void 0 === t ? e.storage.getObject(n) === !0 : void e.storage.setObject(n, t)
            }
        };
        var c = function() {
                var e = 2e3,
                    n = "https://secure-login.twitch.tv/lc",
                    i = d();
                setTimeout(function() {
                    try {
                        for (var e = 0; e < i; e++) t('<img style="display:none;" src="' + n + "?q=" + Math.floor(1e9 * Math.random()) + '" />').prependTo(t("body"))
                    } catch (e) {}
                }, e)
            },
            h = _.memoize(function() {
                return parseFloat(SiteOptions.aws_artificial_load_factor || 0, 10)
            }),
            d = function() {
                var e = h();
                return e <= 1 ? Math.random() < e ? 1 : 0 : Math.ceil(e)
            };
        n.log = {
            getTrackingLog: function() {
                return e.storage.getObject("trackingLog")
            },
            trackEvent: function(t, n, i) {
                var r = e.storage.getObject("trackingLog") || [],
                    o = this.getTrackingLogLength();
                r.length > o && r.shift();
                var s = new Date;
                r.push({
                    event: t,
                    properties: n,
                    createdOn: s,
                    library: i
                }), this.consoleLogging(t, n, i), e.storage.setObject("trackingLog", r)
            },
            consoleLogging: function(t, n, i) {
                e.tracking.log.debugEnabled() && (console.group("Twitch.tracking.log.trackEvent"), console.log("library:", i), console.log("event:", t), console.log("properties:", n), console.groupEnd())
            },
            setTrackingLogLength: function(t) {
                e.storage.setObject("trackingLogLength", t)
            },
            getTrackingLogLength: function() {
                return e.storage.getObject("trackingLogLength") || 5
            },
            debugEnabled: function(t) {
                var n = "Twitch.tracking.log.debugEnabled";
                return void 0 === t ? e.storage.getObject(n) === !0 : void e.storage.setObject(n, t)
            }
        }, t(document).on("click", n.funnel.campaignSelector, n.funnel.handleCampaignClick), n.gaq = {
            trackPageView: function(e) {
                _gaq.push(e ? ["_trackPageview", e] : ["_trackPageview"])
            },
            trackVirtualPageView: function(e) {
                _gaq.push(["_trackPageview", decodeURIComponent(e)])
            },
            trackChannelPageView: function(t, n, i) {
                e.tracking.gaq.trackPageView("/channel/" + escape(t || "") + n + "?game=" + escape(i || ""))
            }
        }, n.spadeAndMixpanel = {
            trackEvent: function(e, t) {
                n.spade.trackEvent(e, t), n.mixpanel.trackEvent(e, t)
            }
        }, n.spade = {
            trackEvent: function(e, t) {
                o(e, t, r.SPADE)
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
                }) : "channel" === window.SitePageType && window.PP && (e.storage.get("mp:source") || n && !n.match("twitch.tv")) && e.api.get("streams/" + window.PP.channel).done(function(t) {
                    var i = {
                        action: "channel",
                        source: e.storage.get("mp:source") || n,
                        is_live: null != t.stream
                    };
                    e.storage.get("mp:channel-discovery-index") && (i.index = e.storage.get("mp:channel-discovery-index")), e.tracking.mixpanel.trackEvent("discovery", i), e.storage.del("mp:source"), e.storage.del("mp:channel-discovery-index")
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
                var i;
                switch (t) {
                    case "chat":
                        "true" != e.storage.get("chat_sent") && (e.storage.set("chat_sent", !0), i = _.extend({
                            context: t
                        }, n), o("$born", i, r.MIXPANEL));
                        break;
                    case "video-play":
                        "true" != e.storage.get("video_played") && (e.storage.set("video_played", !0), i = _.extend({
                            context: t
                        }, n), o("$born", i, r.MIXPANEL))
                }
                o(t, n, r.MIXPANEL)
            },
            sendMixpanelBeacon: function(e, t) {
                t = _.extend(t, {
                    token: mixpanel.config.token,
                    time: Date.now(),
                    ip: 1
                }), Dobbin.Dobbin.trackEvent(e, t, ["mixpanel"])
            }
        }, n.getComscoreScript = _.memoize(function() {
            var e = ("https:" == document.location.protocol ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
            return t.ajax({
                url: e,
                crossDomain: !0,
                dataType: "script"
            })
        }), n.sendComscoreBeacon = function(t) {
            n.getComscoreScript().then(function() {
                if ("undefined" != typeof COMSCORE) {
                    var n = function(e) {
                        return null === e || "CXCXCXCX" === e ? "" : e
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
                            return "game" === URI().segment(1) ? "1148gameVIDE" : "1148directory";
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
                if ("DE" === e.geo || "de" === e.received_language) {
                    var i = n();
                    i && ("DE" === e.geo && "de" !== e.received_language && (i += "_multilanguage"), t.getScript("https://script.ioam.de/iam.js", function() {
                        var e = {
                            st: "twitchtv",
                            cp: i,
                            oc: i,
                            mg: "yes",
                            sv: "front_page" === window.SitePageType ? "ke" : "in"
                        };
                        window.iom.c(e, 1)
                    }))
                }
            })
        };
        var f = "";
        n.didJustLoginAndFollow = function(e) {
            return f === e && (f = "", !0)
        }, e.mixin({
            tracking: n
        });
        var p = function(e, i) {
            var r, o = URI.parse(e.url);
            window.App && void 0 !== window.App.get("currentPath") ? r = window.App.get("currentPath") : window.App && window.App.__container__ && (r = window.App.__container__.lookup("service:globals").get("currentPath")), n.spade.trackEvent("api-error", t.extend({
                platform: "web",
                application: r,
                service_host: o.hostname,
                endpoint: o.path,
                error_code: e.jqXHR.status
            }, i))
        };
        if (e.api.on("fail", p), a.followed_flow) {
            var m = _.defaults(e.cache.read("LoginAndFollowTrackingData") || {}, {
                platform: "web"
            }, _.pick(a, "followed_flow"));
            f = m.channel, setTimeout(function() {
                n.spadeAndMixpanel.trackEvent("follow", m)
            }), e.cache.write("LoginAndFollowTrackingData", null)
        }
        window.TMI && t(function() {
            TMI.on("api-fail", function(e) {
                p(e, {
                    application: "tmi-client"
                })
            })
        }), _gaq.push(["_setAccount", "UA-23719667-1"], ["_setDomainName", "twitch.tv"], ["_setSampleRate", "1"], ["_setAllowLinker", !0], ["_setCustomVar", 1, "UserType", e.user.isLoggedIn() ? "user" : "visitor", 2], ["_require", "inpage_linkid", "//www.google-analytics.com/plugins/ga/inpage_linkid.js"])
    }(Twitch, jQuery),
    function(e) {
        var t = window.location.protocol + "//" + SiteOptions.api_hostport,
            n = "https://" + SiteOptions.api_hostport,
            i = window.location.protocol + "//" + SiteOptions.streams_api_hostport,
            r = "https://" + SiteOptions.streams_api_hostport,
            o = window.location.protocol + "//api-akamai.twitch.tv",
            s = "https://api-akamai.twitch.tv",
            a = "44dbd670-63e6-4f7f-aa47-417f3eccd939",
            l = .1,
            u = Twitch.idsForMixpanel.getOrCreateUniqueId(),
            c = a + u,
            h = CryptoJS.SHA1(c),
            d = h.words[0] >>> 0,
            f = d / Math.pow(2, 32),
            p = f < l && "production" === SiteOptions.deploy_flavor;
        Twitch.api.init({
            baseUrl: p ? o : t,
            baseUrlSecure: p ? s : n,
            streamsBaseUrl: p ? o : i,
            streamsBaseUrlSecure: p ? s : r,
            receiverUrl: (p ? o : t) + "/crossdomain/receiver.html?v=2",
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
            "undefined" == typeof n ? (n = t, t = null) : n.url = t;
            var i = n.error,
                r = function(t, n, r) {
                    403 === t.status && e.forceLogIn(), i && i.apply(this, arguments)
                };
            return n.error = r, e.ajax(n)
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
                if (!e || 401 !== e.status) throw e
            }), t.user.isLoggedIn() || (e("#user_display_name").hide(), e("#user_login").show()), "undefined" != typeof PP && "directory" !== window.SitePageType && (["channel", "video"].indexOf(window.SitePageType) === -1 && t.tracking.gaq.trackPageView(), t.tracking.mixpanel.trackDiscovery())
        })
    }(jQuery, Twitch),
    function(e) {
        function t(t, i) {
            function r() {
                C.hasClass("horizontal") && (M = "horiz", E = "scrollLeft", A = "width", P = "left"), C.prepend('<div class="tse-scrollbar"><div class="drag-handle"></div></div>'), w = C.find(".tse-scrollbar"), x = C.find(".drag-handle"), i.wrapContent && D.wrap('<div class="tse-scroll-content" />'), b = C.find(".tse-scroll-content"), f(), p(), C.on("mouseenter", c), x.on("mousedown", o), b.on("scroll", l), u()
            }

            function o(t) {
                t.preventDefault();
                var n = t.pageY;
                "horiz" === M && (n = t.pageX), k = n - x.offset()[P], e(document).on("mousemove", s), e(document).on("mouseup", a)
            }

            function s(e) {
                e.preventDefault();
                var t = e.pageY;
                "horiz" === M && (t = e.pageX);
                var n = t - w.offset()[P] - k,
                    i = n / w[A](),
                    r = i * D[A]();
                b[E](r)
            }

            function a() {
                e(document).off("mousemove", s), e(document).off("mouseup", a)
            }

            function l(e) {
                c()
            }

            function u() {
                var e = D[A](),
                    t = b[E](),
                    n = w[A](),
                    i = n / e,
                    r = Math.round(i * t) + 2,
                    o = Math.floor(i * (n - 2)) - 2;
                n < e ? ("vert" === M ? x.css({
                    top: r,
                    height: o
                }) : x.css({
                    left: r,
                    width: o
                }), w.show()) : w.hide()
            }

            function c() {
                u(), h()
            }

            function h() {
                x.addClass("visible"), "number" == typeof S && window.clearTimeout(S), S = window.setTimeout(function() {
                    d()
                }, 1e3)
            }

            function d() {
                x.removeClass("visible"), "number" == typeof S && window.clearTimeout(S)
            }

            function f() {
                "rightAndBottom" === i.scrollbarHideStrategy && ("vert" === M ? b.css({
                    right: "-" + m() + "px"
                }) : b.css({
                    bottom: "-" + m() + "px"
                }))
            }

            function p() {
                "vert" === M ? (b.width(C.width() + m()), b.height(C.height())) : (b.width(C.width()), b.height(C.height() + m()), D.height(C.height()))
            }

            function m() {
                var t = e('<div class="scrollbar-width-tester" style="width:50px;height:50px;overflow-y:scroll;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');
                e("body").append(t);
                var n = e(t).innerWidth(),
                    i = e("div", t).innerWidth();
                return t.remove(), n - i
            }

            function g() {
                p(), u()
            }

            function v(e, t) {
                return t ? void(i[e] = t) : i[e]
            }

            function y() {
                D.insertBefore(w), w.remove(), b.remove(), D.css({
                    height: C.height() + "px",
                    "overflow-y": "scroll"
                }), _("onDestroy"), C.removeData("plugin_" + n)
            }

            function _(e) {
                void 0 !== i[e] && i[e].call(T)
            }
            var b, w, x, k, S, T = t,
                C = e(t),
                D = C.find(".tse-content"),
                M = "vert",
                E = "scrollTop",
                A = "height",
                P = "top";
            return i = e.extend({}, e.fn[n].defaults, i), r(), {
                option: v,
                destroy: y,
                recalculate: g
            }
        }
        var n = "TrackpadScrollEmulator";
        e.fn[n] = function(i) {
            if ("string" == typeof arguments[0]) {
                var r, o = arguments[0],
                    s = Array.prototype.slice.call(arguments, 1);
                return this.each(function() {
                    if (!e.data(this, "plugin_" + n) || "function" != typeof e.data(this, "plugin_" + n)[o]) throw new Error("Method " + o + " does not exist on jQuery." + n);
                    r = e.data(this, "plugin_" + n)[o].apply(this, s)
                }), void 0 !== r ? r : this
            }
            if ("object" == typeof i || !i) return this.each(function() {
                e.data(this, "plugin_" + n) || e.data(this, "plugin_" + n, new t(this, i))
            })
        }, e.fn[n].defaults = {
            onInit: function() {},
            onDestroy: function() {},
            wrapContent: !0,
            scrollbarHideStrategy: "widthAndHeight"
        }
    }(jQuery);
//# sourceMappingURL=global.map