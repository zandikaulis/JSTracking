(window.webpackJsonp = window.webpackJsonp || []).push([
    [187], {
        ZNYK: function(t, n, e) {
            "use strict";
            e.r(n);
            var i = e("q1tI"),
                u = e("/7QA"),
                s = e("QVaV"),
                o = e("8SX2"),
                r = e("oK83"),
                a = e("0WFu"),
                f = e("Ue10"),
                c = function(t) {
                    var n = t.event,
                        e = i.createElement(o.a, {
                            contentID: n.user.id,
                            login: n.user.username,
                            sourceType: r.a.chat_message
                        }, Object(s.a)(n.user.username, n.user.displayName)),
                        c = null;
                    return c = "custom" === n.plan ? function(t, n, e, i) {
                        return 1 === i ? Object(u.d)("{massGiftCount, plural, one {{gifterButton} is gifting {massGiftCount} Sub to {channel}'s community. It's their first Gift Sub in the channel!} other {{gifterButton} is gifting {massGiftCount} Subs to {channel}'s community. It's their first Gift Sub in the channel!}}", {
                            channel: n,
                            gifterButton: t,
                            massGiftCount: e
                        }, "SubMysteryGiftNoticeLine") : i > 1 ? Object(u.d)("{massGiftCount, plural, one {{gifterButton} is gifting {massGiftCount} Sub to {channel}'s community. They've gifted a total of {senderCount} in the channel!} other {{gifterButton} is gifting {massGiftCount} Subs to {channel}'s community. They've gifted a total of {senderCount} in the channel!}}", {
                            channel: n,
                            gifterButton: t,
                            massGiftCount: e,
                            senderCount: i
                        }, "SubMysteryGiftNoticeLine") : Object(u.d)("{massGiftCount, plural, one {{gifterButton} is gifting {massGiftCount} Sub to {channel}'s community!} other {{gifterButton} is gifting {massGiftCount} Subs to {channel}'s community!}}", {
                            channel: n,
                            gifterButton: t,
                            massGiftCount: e
                        }, "SubMysteryGiftNoticeLine")
                    }(e, n.channel, n.massGiftCount, n.senderCount) : function(t, n, e, i, s) {
                        return 1 === i ? Object(u.d)("{massGiftCount, plural, one {{gifterButton} is gifting {massGiftCount} Tier {tierNumber} Sub to {channel}'s community. It's their first Gift Sub in the channel!} other {{gifterButton} is gifting {massGiftCount} Tier {tierNumber} Subs to {channel}'s community. It's their first Gift Sub in the channel!}}", {
                            channel: n,
                            gifterButton: t,
                            massGiftCount: e,
                            tierNumber: s
                        }, "SubMysteryGiftNoticeLine") : i > 1 ? Object(u.d)("{massGiftCount, plural, one {{gifterButton} is gifting {massGiftCount} Tier {tierNumber} Sub to {channel}'s community. They've gifted a total of {senderCount} in the channel!} other {{gifterButton} is gifting {massGiftCount} Tier {tierNumber} Subs to {channel}'s community. They've gifted a total of {senderCount} in the channel!}}", {
                            channel: n,
                            gifterButton: t,
                            massGiftCount: e,
                            senderCount: i,
                            tierNumber: s
                        }, "SubMysteryGiftNoticeLine") : Object(u.d)("{massGiftCount, plural, one {{gifterButton} is gifting {massGiftCount} Tier {tierNumber} Sub to {channel}'s community!} other {{gifterButton} is gifting {massGiftCount} Tier {tierNumber} Subs to {channel}'s community!}}", {
                            channel: n,
                            gifterButton: t,
                            massGiftCount: e,
                            tierNumber: s
                        }, "SubMysteryGiftNoticeLine")
                    }(e, n.channel, n.massGiftCount, n.senderCount, Object(a.a)(n.plan) || 1), i.createElement(f.V, {
                        color: f.O.Alt2,
                        type: f.Nb.Span
                    }, c)
                };
            c.displayName = "SubMysteryGiftNoticeLine", e.d(n, "SubMysteryGiftNoticeLine", function() {
                return c
            })
        }
    }
]);