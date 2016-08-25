/*jshint browser:true */
/*
 Code is used to display the delete account
 modal.
 */
Twitch.action("user#delete_account_form", function(e) {
        e(function() {
            e(".js-delete-account-open").click(function(t) {
                t.preventDefault(), e("body").overlay(e(this).attr("data-href"), function(t) {
                    e("#subwindow_close").click(function(t) {
                        t.preventDefault(), e(this).trigger("overlay.hide")
                    })
                }, {
                    width: "464px"
                })
            })
        })
    }), Twitch.action("chat#embed", function(e) {
        document.domain = "twitch.tv";
        var t = function() {
            e("#chat_lines").css("max-height", e(window).height() - e("#speak").outerHeight(!0) - 4 + "px"), e("#chat_lines").height(e(window).height() - e("speak").outerHeight(!0) - 4 + "px"), e(window).width() > 299 && e(window).height() > 334 ? e("#small_notice").hide() : e("#small_notice").show()
        };
        t();
        if (e("body").hasClass("popout_chat")) {
            var n = _.debounce(t, 50);
            e(window).resize(n)
        }
    }), Twitch.action("errors#handle404", function(e) {
        e.fn.typewriter = function() {
            return this.each(function() {
                var t = e(this),
                    n = t.text(),
                    r = 0,
                    i = 0;
                t.text("");
                var s = setInterval(function() {
                    r++;
                    while ((i = n.charCodeAt(r)) < 48 || i > 122) r++;
                    t.text(n.substring(0, r)), r >= n.length && clearInterval(s)
                }, 120)
            }), this
        }, e(".js-typewriter").typewriter()
    }), Twitch.action("front_page#front_page", function(e) {
        var t, n = function() {
            Twitch.storage.set("mp:source", "front_page"), Twitch.storage.set("mp:channel-discovery-index", e(".nav .active").index())
        };
        e(".js-carousel-nav").tipsy({
            gravity: "s",
            offset: "20"
        }), e("#signup .birthday_fields select").dropdownify(), e("body").on("click", ".js-channel_discovery_link, .js-channel_discovery_desc a", n), e(".game").each(function(t, n) {
            var r = {
                game: e(n).data("game"),
                index: t,
                location: "front_page",
                promoted: e(n).hasClass("promoted-game").toString()
            };
            e(n).click(Twitch.tracking.mixpanel.setGameClickVars(r))
        }), e("body").on("click", ".nav a", function(t) {
            t.preventDefault(), t.stopPropagation();
            var n = e(this).data().channel,
                i = e(this).data().game;
            n !== undefined && r(e(this));
            var s = e(this).parent("li").index() + 1;
            e(".items .active").fadeOut("fast", function() {
                e(this).removeClass("active"), e(this).parent("ul").children("li:nth-child(" + s + ")").fadeIn("fast"), e(this).parent("ul").children("li:nth-child(" + s + ")").addClass("active")
            }), e(".nav .active").removeClass("active"), e(".nav li:nth-child(" + s + ")").addClass("active"), Twitch.tracking.spadeAndMixpanel.trackEvent("frontpage-carousel-click", {
                carousel_index: s,
                promotion_was_scheduled: !!e(this).data("scheduled"),
                channel: n,
                game: i
            })
        });
        var r = function(e) {
            var n = e.data("channel"),
                r = e.data("game");
            t && t.destroy(), t = new Twitch.embed.Player("video-1", {
                channel: n,
                branding: !1,
                player: "frontpage",
                deviceId: Twitch.idsForMixpanel.getOrCreateUniqueId(),
                channelInfo: !1,
                controls: !0,
                height: "100%",
                width: "100%"
            })
        };
        e(".content h2 a, a.js-channel_discovery_link, .desc a").on("click", function(t) {
            var n = e(this).parents("li").index() + 1,
                r = !!e(this).parents("li").data("scheduled"),
                i = e(this).parents("li").data("channel"),
                s = e(this).parents("li").data("game");
            e(this).prop("href") === "http://www.twitch.tv/" + i && Twitch.tracking.mixpanel.trackEvent("frontpage-channel-click", {
                carousel_index: n,
                promotion_was_scheduled: r,
                channel: i,
                game: s
            })
        }), Twitch.geo.then(function(t) {
            var n = {
                limit: 6,
                geo: t.geo,
                lang: t.received_language
            };
            Twitch.api.get("streams/featured", n, {
                version: 3
            }).done(function(t) {
                var n = ich["frontpage-carousel"](t);
                n.find(".items li").first().addClass("active"), n.siblings(".nav").find("li").tipsy({
                    gravity: "s"
                }).first().addClass("active"), e("#carousel").append(n), e(".sponsored-image").tipsy({
                    gravity: "w"
                }), r(n.find(".items .active")), Twitch.tracking.funnel.addCampaignTracking({
                    selector: ".js-channel_discovery_desc a, .js-channel_discovery_link",
                    tt_medium: "twitch_home",
                    tt_content: "carousel"
                });
                var i = _.reduce(t.featured, function(e, t, n) {
                    return e["carousel_slot_" + n + "_channel"] = t.stream.channel.name, e["carousel_slot_" + n + "_priority"] = t.priority, e["carousel_slot_" + n + "_game"] = t.stream.game, e
                }, {});
                i.platform = "web", Twitch.tracking.spadeAndMixpanel.trackEvent("carousel_display", i)
            })
        }), _.forEach([{
            options: {
                limit: 6
            },
            scriptId: "fp_channels",
            channelDivId: "#top-channels"
        }, {
            options: {
                limit: 6,
                sce_platform: "PS4"
            },
            scriptId: "fp_psFour",
            channelDivId: "#psFour-channels"
        }, {
            options: {
                limit: 6,
                xbox_heartbeat: !0
            },
            scriptId: "fp_xbox",
            channelDivId: "#xbOne-channels"
        }], function(t) {
            Twitch.api.get("streams", t.options, {
                version: 3
            }).done(function(n) {
                _.forEach(n.streams, function(n) {
                    var r = ich[t.scriptId](_.extend(n, {
                        channel: n.channel,
                        game: n.game,
                        viewers: Twitch.display.commatize(n.viewers)
                    }));
                    e(t.channelDivId).append(r)
                })
            })
        }), Math.random() < (SiteOptions.creative_fpage_darklaunch || 0) && Twitch.api.get("games/Creative/communities", {
            limit: 3,
            order: "random"
        }), Twitch.ads.enabled() && (googletag.cmd.push(function() {
            SiteOptions.dfp_fp_sizzlestrip && (e("#sizzle_strip").removeClass("hidden"), googletag.defineSlot(Twitch.ads.dfpSlotPath("sizzle_strip"), [980, 250], "sizzle_strip").addService(googletag.pubads())), googletag.pubads().enableSingleRequest(), googletag.enableServices(), Twitch.ads.registerGoogleTags(), SiteOptions.dfp_fp_sizzlestrip && (googletag.pubads().setTargeting("salt", window.location.protocol === "https:" ? "true" : "false"), googletag.display("sizzle_strip"))
        }), Twitch.ads.fetchAll()), NotificationsTracker.startTracking(), mobileNotification()
    }),
    function(e, t) {
        e.action("message#list", function(t) {
            n();
            var r = function(e, n) {
                e.preventDefault(), t("#message-list input[type=checkbox]").prop("checked", n)
            };
            t("#select_all").on("click", function(e) {
                r(e, !0)
            }), t("#select_none").on("click", function(e) {
                r(e, !1)
            });
            var s = function(e) {
                t("#ev").val(e)
            };
            t(".batch_btn").on("click", function() {
                s(t(this).attr("id"))
            }), t(".message_action.block").each(function(e, t) {
                i(t)
            });
            var o = "Twitch.messages.otherTooltipDismissed",
                u = t(".js-other_tooltip"),
                a = u.find(".js-dismiss");
            a.click(function() {
                e.storage.setObject(o, !0), u.addClass("hidden")
            }), e.storage.getObject(o) !== !0 && u.removeClass("hidden")
        }), e.action("message#show", function(e) {
            n(), e(".message_action.block").each(function(e, t) {
                i(t)
            })
        }), e.action("message#new", function(e) {
            n()
        }), e.action("message#create", function(e) {
            n()
        });
        var n = function() {
                t(".js-messages-link").addClass("selected game_filter"), initializeLegacyColumns(), r()
            },
            r = function() {
                e.api.get("games/top", {
                    limit: 10
                }).done(function(e) {
                    _.shuffle(e.top).slice(0, 3).forEach(function(e) {
                        var n = ich.nav_game({
                            name: e.game.name,
                            channels: e.channels,
                            image: e.game.logo.medium
                        });
                        t("#nav_games ul").append(n)
                    })
                }), t("#nav_related_streams").hide()
            },
            i = function(e) {
                t(e).on("click", function(n) {
                    n.stopPropagation(), n.preventDefault(), t.ajax({
                        url: t(e).attr("href"),
                        type: "POST",
                        headers: {
                            "X-Http-Method-Override": t(e).data("methodOverride"),
                            "X-CSRF-Token": t("meta[name='csrf-token']").attr("content")
                        }
                    }).done(function(e) {
                        var n = t(e).data("targetUserId");
                        t(".js-" + n).each(function(n, r) {
                            t(r).attr("href", t(e).attr("href")), t(r).text(t(e).text()), t(r).data(t(e).data())
                        })
                    })
                })
            }
    }(Twitch, jQuery), Twitch.action("teams#show", function(e) {
        function r(t) {
            e.get(t).done(function(t) {
                var n = e(".js-playing .member_name").text().toLowerCase();
                e("#team_member_list").replaceWith(t), e("#channel_" + n).addClass("js-playing"), e("#streams_spinner").hide()
            })
        }
        var t = e(".js-playing .member_name").text().toLowerCase(),
            n = new Twitch.embed.Player("video_player", {
                channel: t,
                branding: !1,
                deviceId: Twitch.idsForMixpanel.getOrCreateUniqueId(),
                channelInfo: !1,
                controls: !0,
                width: "620px",
                height: "349px"
            });
        n.addEventListener("viewerschange", function(e) {
            setChannelViewerCount(n.viewers || e, t)
        }), e("body").on("click", "#team_member_list .page_data a", function(t) {
            t.preventDefault(), e("#streams_spinner").show(), r(e(this).attr("href"))
        }), e("#team_member_list").length > 0 && setInterval(function() {
            r(window.location.pathname + "/live_member_list?page=" + (e("#team_member_list").attr("page") || "1"))
        }, 25e3), e(".tab").tabify(), e(".multi_select .button").tipsy({
            gravity: "s"
        });
        var i = function() {
            e(".js-share").popup(e(".js-share-popup"), {
                side: "left",
                above: !0
            })
        };
        i(), e(".main").on("click", ".live.member, .live.member a", function(t) {
            t.preventDefault(), t.stopPropagation();
            var r = e(this).closest(".live.member");
            n.setChannel(r.find("a").attr("href").substr(1)), e.get("/team/switch_live_player" + r.find("a").attr("href")).done(function(t) {
                e(".js-playing").removeClass("js-playing"), r.addClass("js-playing"), e(".js-share-popup").remove(), e("#stats_and_description").replaceWith(t), e(".js-share-popup").appendTo(e("body")), i()
            })
        })
    }), Twitch.action("tokens#show", function(e) {
        var t = i18n("Error encountered when sending SMS");
        e(".js-verify-token").click(function(t) {
            t.preventDefault(), e(this).closest("form").submit()
        }), e(".js-request-sms").on("ajax:error", function(e, n, r, i) {
            Twitch.notify.error(t)
        }).on("ajax:success", function(e, n, r, i) {
            n.success ? Twitch.notify(i18n("SMS sent to your registered phone")) : Twitch.notify.error(t)
        }), e(".js-request-sms").click(function(t) {
            t.preventDefault(), t.target === this && e('a[data-remote="true"]', this).click()
        });
        var n = function(t) {
                e("body").find(".focus").removeClass("focus"), e(t).addClass("focus"), e(t).focus()
            },
            r = 37,
            i = 39,
            s = 38,
            o = 40;
        e(document).on("keyup", function(t) {
            var u = e("body").find(".focus"),
                a = !1,
                f = u.attr("data-up"),
                l = u.attr("data-down"),
                c = u.attr("data-right"),
                h = u.attr("data-left");
            switch (t.keyCode) {
                case s:
                    a = f;
                    break;
                case o:
                    a = l;
                    break;
                case i:
                    a = c;
                    break;
                case r:
                    a = h
            }
            a && (n(a), t.preventDefault())
        }), n(e("body").find(".default-focus"))
    }),
    function(e) {
        e(document).ready(function() {
            Twitch.run(e("body").attr("data-page"))
        })
    }(jQuery);