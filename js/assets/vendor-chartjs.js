(window.webpackJsonp = window.webpackJsonp || []).push([
    [33], {
        "2UWG": function(t, e, i) {
            "use strict";
            var n = i("CDJp"),
                a = i("K2E3");

            function o(t) {
                return void 0 !== t._view.width
            }

            function r(t) {
                var e, i, n, a, r = t._view;
                if (o(t)) {
                    var s = r.width / 2;
                    e = r.x - s, i = r.x + s, n = Math.min(r.y, r.base), a = Math.max(r.y, r.base)
                } else {
                    var l = r.height / 2;
                    e = Math.min(r.x, r.base), i = Math.max(r.x, r.base), n = r.y - l, a = r.y + l
                }
                return {
                    left: e,
                    top: n,
                    right: i,
                    bottom: a
                }
            }
            n._set("global", {
                elements: {
                    rectangle: {
                        backgroundColor: n.global.defaultColor,
                        borderColor: n.global.defaultColor,
                        borderSkipped: "bottom",
                        borderWidth: 0
                    }
                }
            }), t.exports = a.extend({
                draw: function() {
                    var t, e, i, n, a, o, r, s = this._chart.ctx,
                        l = this._view,
                        u = l.borderWidth;
                    if (l.horizontal ? (t = l.base, e = l.x, i = l.y - l.height / 2, n = l.y + l.height / 2, a = e > t ? 1 : -1, o = 1, r = l.borderSkipped || "left") : (t = l.x - l.width / 2, e = l.x + l.width / 2, i = l.y, a = 1, o = (n = l.base) > i ? 1 : -1, r = l.borderSkipped || "bottom"), u) {
                        var d = Math.min(Math.abs(t - e), Math.abs(i - n)),
                            c = (u = u > d ? d : u) / 2,
                            h = t + ("left" !== r ? c * a : 0),
                            f = e + ("right" !== r ? -c * a : 0),
                            g = i + ("top" !== r ? c * o : 0),
                            p = n + ("bottom" !== r ? -c * o : 0);
                        h !== f && (i = g, n = p), g !== p && (t = h, e = f)
                    }
                    s.beginPath(), s.fillStyle = l.backgroundColor, s.strokeStyle = l.borderColor, s.lineWidth = u;
                    var v = [
                            [t, n],
                            [t, i],
                            [e, i],
                            [e, n]
                        ],
                        m = ["bottom", "left", "top", "right"].indexOf(r, 0);

                    function b(t) {
                        return v[(m + t) % 4]
                    } - 1 === m && (m = 0);
                    var x = b(0);
                    s.moveTo(x[0], x[1]);
                    for (var y = 1; y < 4; y++) x = b(y), s.lineTo(x[0], x[1]);
                    s.fill(), u && s.stroke()
                },
                height: function() {
                    var t = this._view;
                    return t.base - t.y
                },
                inRange: function(t, e) {
                    var i = !1;
                    if (this._view) {
                        var n = r(this);
                        i = t >= n.left && t <= n.right && e >= n.top && e <= n.bottom
                    }
                    return i
                },
                inLabelRange: function(t, e) {
                    if (!this._view) return !1;
                    var i = r(this);
                    return o(this) ? t >= i.left && t <= i.right : e >= i.top && e <= i.bottom
                },
                inXRange: function(t) {
                    var e = r(this);
                    return t >= e.left && t <= e.right
                },
                inYRange: function(t) {
                    var e = r(this);
                    return t >= e.top && t <= e.bottom
                },
                getCenterPoint: function() {
                    var t, e, i = this._view;
                    return o(this) ? (t = i.x, e = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, e = i.y), {
                        x: t,
                        y: e
                    }
                },
                getArea: function() {
                    var t = this._view;
                    return t.width * Math.abs(t.y - t.base)
                },
                tooltipPosition: function() {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y
                    }
                }
            })
        },
        "35yf": function(t, e, i) {
            "use strict";
            i("CDJp")._set("scatter", {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        id: "x-axis-1",
                        type: "linear",
                        position: "bottom"
                    }],
                    yAxes: [{
                        id: "y-axis-1",
                        type: "linear",
                        position: "left"
                    }]
                },
                showLines: !1,
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t) {
                            return "(" + t.xLabel + ", " + t.yLabel + ")"
                        }
                    }
                }
            }), t.exports = function(t) {
                t.controllers.scatter = t.controllers.line
            }
        },
        "5ZZ7": function(t, e, i) {
            "use strict";
            var n = i("CDJp"),
                a = i("vvH+"),
                o = i("RDha");
            n._set("polarArea", {
                scale: {
                    type: "radialLinear",
                    angleLines: {
                        display: !1
                    },
                    gridLines: {
                        circular: !0
                    },
                    pointLabels: {
                        display: !1
                    },
                    ticks: {
                        beginAtZero: !0
                    }
                },
                animation: {
                    animateRotate: !0,
                    animateScale: !0
                },
                startAngle: -.5 * Math.PI,
                legendCallback: function(t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    var i = t.data,
                        n = i.datasets,
                        a = i.labels;
                    if (n.length)
                        for (var o = 0; o < n[0].data.length; ++o) e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function(t) {
                            var e = t.data;
                            return e.labels.length && e.datasets.length ? e.labels.map(function(i, n) {
                                var a = t.getDatasetMeta(0),
                                    r = e.datasets[0],
                                    s = a.data[n].custom || {},
                                    l = o.valueAtIndexOrDefault,
                                    u = t.options.elements.arc;
                                return {
                                    text: i,
                                    fillStyle: s.backgroundColor ? s.backgroundColor : l(r.backgroundColor, n, u.backgroundColor),
                                    strokeStyle: s.borderColor ? s.borderColor : l(r.borderColor, n, u.borderColor),
                                    lineWidth: s.borderWidth ? s.borderWidth : l(r.borderWidth, n, u.borderWidth),
                                    hidden: isNaN(r.data[n]) || a.data[n].hidden,
                                    index: n
                                }
                            }) : []
                        }
                    },
                    onClick: function(t, e) {
                        var i, n, a, o = e.index,
                            r = this.chart;
                        for (i = 0, n = (r.data.datasets || []).length; i < n; ++i)(a = r.getDatasetMeta(i)).data[o].hidden = !a.data[o].hidden;
                        r.update()
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t, e) {
                            return e.labels[t.index] + ": " + t.yLabel
                        }
                    }
                }
            }), t.exports = function(t) {
                t.controllers.polarArea = t.DatasetController.extend({
                    dataElementType: a.Arc,
                    linkScales: o.noop,
                    update: function(t) {
                        var e = this,
                            i = e.chart,
                            n = i.chartArea,
                            a = e.getMeta(),
                            r = i.options,
                            s = r.elements.arc,
                            l = Math.min(n.right - n.left, n.bottom - n.top);
                        i.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), i.innerRadius = Math.max(r.cutoutPercentage ? i.outerRadius / 100 * r.cutoutPercentage : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), e.outerRadius = i.outerRadius - i.radiusLength * e.index, e.innerRadius = e.outerRadius - i.radiusLength, a.count = e.countVisibleElements(), o.each(a.data, function(i, n) {
                            e.updateElement(i, n, t)
                        })
                    },
                    updateElement: function(t, e, i) {
                        for (var n = this, a = n.chart, r = n.getDataset(), s = a.options, l = s.animation, u = a.scale, d = a.data.labels, c = n.calculateCircumference(r.data[e]), h = u.xCenter, f = u.yCenter, g = 0, p = n.getMeta(), v = 0; v < e; ++v) isNaN(r.data[v]) || p.data[v].hidden || ++g;
                        var m = s.startAngle,
                            b = t.hidden ? 0 : u.getDistanceFromCenterForValue(r.data[e]),
                            x = m + c * g,
                            y = x + (t.hidden ? 0 : c),
                            k = l.animateScale ? 0 : u.getDistanceFromCenterForValue(r.data[e]);
                        o.extend(t, {
                            _datasetIndex: n.index,
                            _index: e,
                            _scale: u,
                            _model: {
                                x: h,
                                y: f,
                                innerRadius: 0,
                                outerRadius: i ? k : b,
                                startAngle: i && l.animateRotate ? m : x,
                                endAngle: i && l.animateRotate ? m : y,
                                label: o.valueAtIndexOrDefault(d, e, d[e])
                            }
                        }), n.removeHoverStyle(t), t.pivot()
                    },
                    removeHoverStyle: function(e) {
                        t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                    },
                    countVisibleElements: function() {
                        var t = this.getDataset(),
                            e = this.getMeta(),
                            i = 0;
                        return o.each(e.data, function(e, n) {
                            isNaN(t.data[n]) || e.hidden || i++
                        }), i
                    },
                    calculateCircumference: function(t) {
                        var e = this.getMeta().count;
                        return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0
                    }
                })
            }
        },
        "6rqY": function(t, e, i) {
            "use strict";
            var n = i("CDJp"),
                a = i("RDha"),
                o = i("mlr9"),
                r = i("iM7B");
            t.exports = function(t) {
                var e = t.plugins;

                function i(t) {
                    return "top" === t || "bottom" === t
                }
                t.types = {}, t.instances = {}, t.controllers = {}, a.extend(t.prototype, {
                    construct: function(e, i) {
                        var o = this;
                        i = function(t) {
                            var e = (t = t || {}).data = t.data || {};
                            return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = a.configMerge(n.global, n[t.type], t.options || {}), t
                        }(i);
                        var s = r.acquireContext(e, i),
                            l = s && s.canvas,
                            u = l && l.height,
                            d = l && l.width;
                        o.id = a.uid(), o.ctx = s, o.canvas = l, o.config = i, o.width = d, o.height = u, o.aspectRatio = u ? d / u : null, o.options = i.options, o._bufferedRender = !1, o.chart = o, o.controller = o, t.instances[o.id] = o, Object.defineProperty(o, "data", {
                            get: function() {
                                return o.config.data
                            },
                            set: function(t) {
                                o.config.data = t
                            }
                        }), s && l ? (o.initialize(), o.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                    },
                    initialize: function() {
                        var t = this;
                        return e.notify(t, "beforeInit"), a.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildScales(), t.initToolTip(), e.notify(t, "afterInit"), t
                    },
                    clear: function() {
                        return a.canvas.clear(this), this
                    },
                    stop: function() {
                        return t.animationService.cancelAnimation(this), this
                    },
                    resize: function(t) {
                        var i = this,
                            n = i.options,
                            o = i.canvas,
                            r = n.maintainAspectRatio && i.aspectRatio || null,
                            s = Math.max(0, Math.floor(a.getMaximumWidth(o))),
                            l = Math.max(0, Math.floor(r ? s / r : a.getMaximumHeight(o)));
                        if ((i.width !== s || i.height !== l) && (o.width = i.width = s, o.height = i.height = l, o.style.width = s + "px", o.style.height = l + "px", a.retinaScale(i, n.devicePixelRatio), !t)) {
                            var u = {
                                width: s,
                                height: l
                            };
                            e.notify(i, "resize", [u]), i.options.onResize && i.options.onResize(i, u), i.stop(), i.update(i.options.responsiveAnimationDuration)
                        }
                    },
                    ensureScalesHaveIDs: function() {
                        var t = this.options,
                            e = t.scales || {},
                            i = t.scale;
                        a.each(e.xAxes, function(t, e) {
                            t.id = t.id || "x-axis-" + e
                        }), a.each(e.yAxes, function(t, e) {
                            t.id = t.id || "y-axis-" + e
                        }), i && (i.id = i.id || "scale")
                    },
                    buildScales: function() {
                        var e = this,
                            n = e.options,
                            o = e.scales = {},
                            r = [];
                        n.scales && (r = r.concat((n.scales.xAxes || []).map(function(t) {
                            return {
                                options: t,
                                dtype: "category",
                                dposition: "bottom"
                            }
                        }), (n.scales.yAxes || []).map(function(t) {
                            return {
                                options: t,
                                dtype: "linear",
                                dposition: "left"
                            }
                        }))), n.scale && r.push({
                            options: n.scale,
                            dtype: "radialLinear",
                            isDefault: !0,
                            dposition: "chartArea"
                        }), a.each(r, function(n) {
                            var r = n.options,
                                s = a.valueOrDefault(r.type, n.dtype),
                                l = t.scaleService.getScaleConstructor(s);
                            if (l) {
                                i(r.position) !== i(n.dposition) && (r.position = n.dposition);
                                var u = new l({
                                    id: r.id,
                                    options: r,
                                    ctx: e.ctx,
                                    chart: e
                                });
                                o[u.id] = u, u.mergeTicksOptions(), n.isDefault && (e.scale = u)
                            }
                        }), t.scaleService.addScalesToLayout(this)
                    },
                    buildOrUpdateControllers: function() {
                        var e = this,
                            i = [],
                            n = [];
                        return a.each(e.data.datasets, function(a, o) {
                            var r = e.getDatasetMeta(o),
                                s = a.type || e.config.type;
                            if (r.type && r.type !== s && (e.destroyDatasetMeta(o), r = e.getDatasetMeta(o)), r.type = s, i.push(r.type), r.controller) r.controller.updateIndex(o);
                            else {
                                var l = t.controllers[r.type];
                                if (void 0 === l) throw new Error('"' + r.type + '" is not a chart type.');
                                r.controller = new l(e, o), n.push(r.controller)
                            }
                        }, e), n
                    },
                    resetElements: function() {
                        var t = this;
                        a.each(t.data.datasets, function(e, i) {
                            t.getDatasetMeta(i).controller.reset()
                        }, t)
                    },
                    reset: function() {
                        this.resetElements(), this.tooltip.initialize()
                    },
                    update: function(t) {
                        var i = this;
                        if (t && "object" == typeof t || (t = {
                                duration: t,
                                lazy: arguments[1]
                            }), function(t) {
                                var e = t.options;
                                e.scale ? t.scale.options = e.scale : e.scales && e.scales.xAxes.concat(e.scales.yAxes).forEach(function(e) {
                                    t.scales[e.id].options = e
                                }), t.tooltip._options = e.tooltips
                            }(i), !1 !== e.notify(i, "beforeUpdate")) {
                            i.tooltip._data = i.data;
                            var n = i.buildOrUpdateControllers();
                            a.each(i.data.datasets, function(t, e) {
                                i.getDatasetMeta(e).controller.buildOrUpdateElements()
                            }, i), i.updateLayout(), a.each(n, function(t) {
                                t.reset()
                            }), i.updateDatasets(), i.tooltip.initialize(), i.lastActive = [], e.notify(i, "afterUpdate"), i._bufferedRender ? i._bufferedRequest = {
                                duration: t.duration,
                                easing: t.easing,
                                lazy: t.lazy
                            } : i.render(t)
                        }
                    },
                    updateLayout: function() {
                        !1 !== e.notify(this, "beforeLayout") && (t.layoutService.update(this, this.width, this.height), e.notify(this, "afterScaleUpdate"), e.notify(this, "afterLayout"))
                    },
                    updateDatasets: function() {
                        if (!1 !== e.notify(this, "beforeDatasetsUpdate")) {
                            for (var t = 0, i = this.data.datasets.length; t < i; ++t) this.updateDataset(t);
                            e.notify(this, "afterDatasetsUpdate")
                        }
                    },
                    updateDataset: function(t) {
                        var i = this.getDatasetMeta(t),
                            n = {
                                meta: i,
                                index: t
                            };
                        !1 !== e.notify(this, "beforeDatasetUpdate", [n]) && (i.controller.update(), e.notify(this, "afterDatasetUpdate", [n]))
                    },
                    render: function(i) {
                        var n = this;
                        i && "object" == typeof i || (i = {
                            duration: i,
                            lazy: arguments[1]
                        });
                        var o = i.duration,
                            r = i.lazy;
                        if (!1 !== e.notify(n, "beforeRender")) {
                            var s = n.options.animation,
                                l = function(t) {
                                    e.notify(n, "afterRender"), a.callback(s && s.onComplete, [t], n)
                                };
                            if (s && (void 0 !== o && 0 !== o || void 0 === o && 0 !== s.duration)) {
                                var u = new t.Animation({
                                    numSteps: (o || s.duration) / 16.66,
                                    easing: i.easing || s.easing,
                                    render: function(t, e) {
                                        var i = a.easing.effects[e.easing],
                                            n = e.currentStep,
                                            o = n / e.numSteps;
                                        t.draw(i(o), o, n)
                                    },
                                    onAnimationProgress: s.onProgress,
                                    onAnimationComplete: l
                                });
                                t.animationService.addAnimation(n, u, o, r)
                            } else n.draw(), l(new t.Animation({
                                numSteps: 0,
                                chart: n
                            }));
                            return n
                        }
                    },
                    draw: function(t) {
                        var i = this;
                        i.clear(), a.isNullOrUndef(t) && (t = 1), i.transition(t), !1 !== e.notify(i, "beforeDraw", [t]) && (a.each(i.boxes, function(t) {
                            t.draw(i.chartArea)
                        }, i), i.scale && i.scale.draw(), i.drawDatasets(t), i._drawTooltip(t), e.notify(i, "afterDraw", [t]))
                    },
                    transition: function(t) {
                        for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
                        this.tooltip.transition(t)
                    },
                    drawDatasets: function(t) {
                        var i = this;
                        if (!1 !== e.notify(i, "beforeDatasetsDraw", [t])) {
                            for (var n = (i.data.datasets || []).length - 1; n >= 0; --n) i.isDatasetVisible(n) && i.drawDataset(n, t);
                            e.notify(i, "afterDatasetsDraw", [t])
                        }
                    },
                    drawDataset: function(t, i) {
                        var n = this.getDatasetMeta(t),
                            a = {
                                meta: n,
                                index: t,
                                easingValue: i
                            };
                        !1 !== e.notify(this, "beforeDatasetDraw", [a]) && (n.controller.draw(i), e.notify(this, "afterDatasetDraw", [a]))
                    },
                    _drawTooltip: function(t) {
                        var i = this.tooltip,
                            n = {
                                tooltip: i,
                                easingValue: t
                            };
                        !1 !== e.notify(this, "beforeTooltipDraw", [n]) && (i.draw(), e.notify(this, "afterTooltipDraw", [n]))
                    },
                    getElementAtEvent: function(t) {
                        return o.modes.single(this, t)
                    },
                    getElementsAtEvent: function(t) {
                        return o.modes.label(this, t, {
                            intersect: !0
                        })
                    },
                    getElementsAtXAxis: function(t) {
                        return o.modes["x-axis"](this, t, {
                            intersect: !0
                        })
                    },
                    getElementsAtEventForMode: function(t, e, i) {
                        var n = o.modes[e];
                        return "function" == typeof n ? n(this, t, i) : []
                    },
                    getDatasetAtEvent: function(t) {
                        return o.modes.dataset(this, t, {
                            intersect: !0
                        })
                    },
                    getDatasetMeta: function(t) {
                        var e = this.data.datasets[t];
                        e._meta || (e._meta = {});
                        var i = e._meta[this.id];
                        return i || (i = e._meta[this.id] = {
                            type: null,
                            data: [],
                            dataset: null,
                            controller: null,
                            hidden: null,
                            xAxisID: null,
                            yAxisID: null
                        }), i
                    },
                    getVisibleDatasetCount: function() {
                        for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) this.isDatasetVisible(e) && t++;
                        return t
                    },
                    isDatasetVisible: function(t) {
                        var e = this.getDatasetMeta(t);
                        return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                    },
                    generateLegend: function() {
                        return this.options.legendCallback(this)
                    },
                    destroyDatasetMeta: function(t) {
                        var e = this.id,
                            i = this.data.datasets[t],
                            n = i._meta && i._meta[e];
                        n && (n.controller.destroy(), delete i._meta[e])
                    },
                    destroy: function() {
                        var i, n, o = this,
                            s = o.canvas;
                        for (o.stop(), i = 0, n = o.data.datasets.length; i < n; ++i) o.destroyDatasetMeta(i);
                        s && (o.unbindEvents(), a.canvas.clear(o), r.releaseContext(o.ctx), o.canvas = null, o.ctx = null), e.notify(o, "destroy"), delete t.instances[o.id]
                    },
                    toBase64Image: function() {
                        return this.canvas.toDataURL.apply(this.canvas, arguments)
                    },
                    initToolTip: function() {
                        var e = this;
                        e.tooltip = new t.Tooltip({
                            _chart: e,
                            _chartInstance: e,
                            _data: e.data,
                            _options: e.options.tooltips
                        }, e)
                    },
                    bindEvents: function() {
                        var t = this,
                            e = t._listeners = {},
                            i = function() {
                                t.eventHandler.apply(t, arguments)
                            };
                        a.each(t.options.events, function(n) {
                            r.addEventListener(t, n, i), e[n] = i
                        }), t.options.responsive && (i = function() {
                            t.resize()
                        }, r.addEventListener(t, "resize", i), e.resize = i)
                    },
                    unbindEvents: function() {
                        var t = this,
                            e = t._listeners;
                        e && (delete t._listeners, a.each(e, function(e, i) {
                            r.removeEventListener(t, i, e)
                        }))
                    },
                    updateHoverStyle: function(t, e, i) {
                        var n, a, o, r = i ? "setHoverStyle" : "removeHoverStyle";
                        for (a = 0, o = t.length; a < o; ++a)(n = t[a]) && this.getDatasetMeta(n._datasetIndex).controller[r](n)
                    },
                    eventHandler: function(t) {
                        var i = this,
                            n = i.tooltip;
                        if (!1 !== e.notify(i, "beforeEvent", [t])) {
                            i._bufferedRender = !0, i._bufferedRequest = null;
                            var a = i.handleEvent(t);
                            a |= n && n.handleEvent(t), e.notify(i, "afterEvent", [t]);
                            var o = i._bufferedRequest;
                            return o ? i.render(o) : a && !i.animating && (i.stop(), i.render(i.options.hover.animationDuration, !0)), i._bufferedRender = !1, i._bufferedRequest = null, i
                        }
                    },
                    handleEvent: function(t) {
                        var e, i = this,
                            n = i.options || {},
                            o = n.hover;
                        return i.lastActive = i.lastActive || [], "mouseout" === t.type ? i.active = [] : i.active = i.getElementsAtEventForMode(t, o.mode, o), a.callback(n.onHover || n.hover.onHover, [t.native, i.active], i), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(i, t.native, i.active), i.lastActive.length && i.updateHoverStyle(i.lastActive, o.mode, !1), i.active.length && o.mode && i.updateHoverStyle(i.active, o.mode, !0), e = !a.arrayEquals(i.active, i.lastActive), i.lastActive = i.active, e
                    }
                }), t.Controller = t
            }
        },
        "6ww4": function(t, e, i) {
            var n = i("OzsZ"),
                a = i("mgIt"),
                o = function(t) {
                    return t instanceof o ? t : this instanceof o ? (this.valid = !1, this.values = {
                        rgb: [0, 0, 0],
                        hsl: [0, 0, 0],
                        hsv: [0, 0, 0],
                        hwb: [0, 0, 0],
                        cmyk: [0, 0, 0, 0],
                        alpha: 1
                    }, void("string" == typeof t ? (e = a.getRgba(t)) ? this.setValues("rgb", e) : (e = a.getHsla(t)) ? this.setValues("hsl", e) : (e = a.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new o(t);
                    var e
                };
            o.prototype = {
                isValid: function() {
                    return this.valid
                },
                rgb: function() {
                    return this.setSpace("rgb", arguments)
                },
                hsl: function() {
                    return this.setSpace("hsl", arguments)
                },
                hsv: function() {
                    return this.setSpace("hsv", arguments)
                },
                hwb: function() {
                    return this.setSpace("hwb", arguments)
                },
                cmyk: function() {
                    return this.setSpace("cmyk", arguments)
                },
                rgbArray: function() {
                    return this.values.rgb
                },
                hslArray: function() {
                    return this.values.hsl
                },
                hsvArray: function() {
                    return this.values.hsv
                },
                hwbArray: function() {
                    var t = this.values;
                    return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                },
                cmykArray: function() {
                    return this.values.cmyk
                },
                rgbaArray: function() {
                    var t = this.values;
                    return t.rgb.concat([t.alpha])
                },
                hslaArray: function() {
                    var t = this.values;
                    return t.hsl.concat([t.alpha])
                },
                alpha: function(t) {
                    return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
                },
                red: function(t) {
                    return this.setChannel("rgb", 0, t)
                },
                green: function(t) {
                    return this.setChannel("rgb", 1, t)
                },
                blue: function(t) {
                    return this.setChannel("rgb", 2, t)
                },
                hue: function(t) {
                    return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
                },
                saturation: function(t) {
                    return this.setChannel("hsl", 1, t)
                },
                lightness: function(t) {
                    return this.setChannel("hsl", 2, t)
                },
                saturationv: function(t) {
                    return this.setChannel("hsv", 1, t)
                },
                whiteness: function(t) {
                    return this.setChannel("hwb", 1, t)
                },
                blackness: function(t) {
                    return this.setChannel("hwb", 2, t)
                },
                value: function(t) {
                    return this.setChannel("hsv", 2, t)
                },
                cyan: function(t) {
                    return this.setChannel("cmyk", 0, t)
                },
                magenta: function(t) {
                    return this.setChannel("cmyk", 1, t)
                },
                yellow: function(t) {
                    return this.setChannel("cmyk", 2, t)
                },
                black: function(t) {
                    return this.setChannel("cmyk", 3, t)
                },
                hexString: function() {
                    return a.hexString(this.values.rgb)
                },
                rgbString: function() {
                    return a.rgbString(this.values.rgb, this.values.alpha)
                },
                rgbaString: function() {
                    return a.rgbaString(this.values.rgb, this.values.alpha)
                },
                percentString: function() {
                    return a.percentString(this.values.rgb, this.values.alpha)
                },
                hslString: function() {
                    return a.hslString(this.values.hsl, this.values.alpha)
                },
                hslaString: function() {
                    return a.hslaString(this.values.hsl, this.values.alpha)
                },
                hwbString: function() {
                    return a.hwbString(this.values.hwb, this.values.alpha)
                },
                keyword: function() {
                    return a.keyword(this.values.rgb, this.values.alpha)
                },
                rgbNumber: function() {
                    var t = this.values.rgb;
                    return t[0] << 16 | t[1] << 8 | t[2]
                },
                luminosity: function() {
                    for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
                        var n = t[i] / 255;
                        e[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
                    }
                    return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                },
                contrast: function(t) {
                    var e = this.luminosity(),
                        i = t.luminosity();
                    return e > i ? (e + .05) / (i + .05) : (i + .05) / (e + .05)
                },
                level: function(t) {
                    var e = this.contrast(t);
                    return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
                },
                dark: function() {
                    var t = this.values.rgb;
                    return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
                },
                light: function() {
                    return !this.dark()
                },
                negate: function() {
                    for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
                    return this.setValues("rgb", t), this
                },
                lighten: function(t) {
                    var e = this.values.hsl;
                    return e[2] += e[2] * t, this.setValues("hsl", e), this
                },
                darken: function(t) {
                    var e = this.values.hsl;
                    return e[2] -= e[2] * t, this.setValues("hsl", e), this
                },
                saturate: function(t) {
                    var e = this.values.hsl;
                    return e[1] += e[1] * t, this.setValues("hsl", e), this
                },
                desaturate: function(t) {
                    var e = this.values.hsl;
                    return e[1] -= e[1] * t, this.setValues("hsl", e), this
                },
                whiten: function(t) {
                    var e = this.values.hwb;
                    return e[1] += e[1] * t, this.setValues("hwb", e), this
                },
                blacken: function(t) {
                    var e = this.values.hwb;
                    return e[2] += e[2] * t, this.setValues("hwb", e), this
                },
                greyscale: function() {
                    var t = this.values.rgb,
                        e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                    return this.setValues("rgb", [e, e, e]), this
                },
                clearer: function(t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e - e * t), this
                },
                opaquer: function(t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e + e * t), this
                },
                rotate: function(t) {
                    var e = this.values.hsl,
                        i = (e[0] + t) % 360;
                    return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this
                },
                mix: function(t, e) {
                    var i = t,
                        n = void 0 === e ? .5 : e,
                        a = 2 * n - 1,
                        o = this.alpha() - i.alpha(),
                        r = ((a * o == -1 ? a : (a + o) / (1 + a * o)) + 1) / 2,
                        s = 1 - r;
                    return this.rgb(r * this.red() + s * i.red(), r * this.green() + s * i.green(), r * this.blue() + s * i.blue()).alpha(this.alpha() * n + i.alpha() * (1 - n))
                },
                toJSON: function() {
                    return this.rgb()
                },
                clone: function() {
                    var t, e, i = new o,
                        n = this.values,
                        a = i.values;
                    for (var r in n) n.hasOwnProperty(r) && (t = n[r], "[object Array]" === (e = {}.toString.call(t)) ? a[r] = t.slice(0) : "[object Number]" === e ? a[r] = t : console.error("unexpected color value:", t));
                    return i
                }
            }, o.prototype.spaces = {
                rgb: ["red", "green", "blue"],
                hsl: ["hue", "saturation", "lightness"],
                hsv: ["hue", "saturation", "value"],
                hwb: ["hue", "whiteness", "blackness"],
                cmyk: ["cyan", "magenta", "yellow", "black"]
            }, o.prototype.maxes = {
                rgb: [255, 255, 255],
                hsl: [360, 100, 100],
                hsv: [360, 100, 100],
                hwb: [360, 100, 100],
                cmyk: [100, 100, 100, 100]
            }, o.prototype.getValues = function(t) {
                for (var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n];
                return 1 !== e.alpha && (i.a = e.alpha), i
            }, o.prototype.setValues = function(t, e) {
                var i, a, o = this.values,
                    r = this.spaces,
                    s = this.maxes,
                    l = 1;
                if (this.valid = !0, "alpha" === t) l = e;
                else if (e.length) o[t] = e.slice(0, t.length), l = e[t.length];
                else if (void 0 !== e[t.charAt(0)]) {
                    for (i = 0; i < t.length; i++) o[t][i] = e[t.charAt(i)];
                    l = e.a
                } else if (void 0 !== e[r[t][0]]) {
                    var u = r[t];
                    for (i = 0; i < t.length; i++) o[t][i] = e[u[i]];
                    l = e.alpha
                }
                if (o.alpha = Math.max(0, Math.min(1, void 0 === l ? o.alpha : l)), "alpha" === t) return !1;
                for (i = 0; i < t.length; i++) a = Math.max(0, Math.min(s[t][i], o[t][i])), o[t][i] = Math.round(a);
                for (var d in r) d !== t && (o[d] = n[t][d](o[t]));
                return !0
            }, o.prototype.setSpace = function(t, e) {
                var i = e[0];
                return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this)
            }, o.prototype.setChannel = function(t, e, i) {
                var n = this.values[t];
                return void 0 === i ? n[e] : i === n[e] ? this : (n[e] = i, this.setValues(t, n), this)
            }, "undefined" != typeof window && (window.Color = o), t.exports = o
        },
        "7O6V": function(t, e, i) {
            "use strict";
            t.exports = function(t) {
                t.Line = function(e, i) {
                    return i.type = "line", new t(e, i)
                }
            }
        },
        "8//i": function(t, e, i) {
            "use strict";
            var n = i("CDJp"),
                a = i("RDha"),
                o = i("g8vO");
            t.exports = function(t) {
                var e = n.global,
                    i = {
                        display: !0,
                        animate: !0,
                        position: "chartArea",
                        angleLines: {
                            display: !0,
                            color: "rgba(0, 0, 0, 0.1)",
                            lineWidth: 1
                        },
                        gridLines: {
                            circular: !1
                        },
                        ticks: {
                            showLabelBackdrop: !0,
                            backdropColor: "rgba(255,255,255,0.75)",
                            backdropPaddingY: 2,
                            backdropPaddingX: 2,
                            callback: o.formatters.linear
                        },
                        pointLabels: {
                            display: !0,
                            fontSize: 10,
                            callback: function(t) {
                                return t
                            }
                        }
                    };

                function r(t) {
                    var e = t.options;
                    return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
                }

                function s(t) {
                    var i = t.options.pointLabels,
                        n = a.valueOrDefault(i.fontSize, e.defaultFontSize),
                        o = a.valueOrDefault(i.fontStyle, e.defaultFontStyle),
                        r = a.valueOrDefault(i.fontFamily, e.defaultFontFamily);
                    return {
                        size: n,
                        style: o,
                        family: r,
                        font: a.fontString(n, o, r)
                    }
                }

                function l(t, e, i) {
                    return a.isArray(i) ? {
                        w: a.longestText(t, t.font, i),
                        h: i.length * e + 1.5 * (i.length - 1) * e
                    } : {
                        w: t.measureText(i).width,
                        h: e
                    }
                }

                function u(t, e, i, n, a) {
                    return t === n || t === a ? {
                        start: e - i / 2,
                        end: e + i / 2
                    } : t < n || t > a ? {
                        start: e - i - 5,
                        end: e
                    } : {
                        start: e,
                        end: e + i + 5
                    }
                }

                function d(t) {
                    return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right"
                }

                function c(t, e, i, n) {
                    if (a.isArray(e))
                        for (var o = i.y, r = 1.5 * n, s = 0; s < e.length; ++s) t.fillText(e[s], i.x, o), o += r;
                    else t.fillText(e, i.x, i.y)
                }

                function h(t, e, i) {
                    90 === t || 270 === t ? i.y -= e.h / 2 : (t > 270 || t < 90) && (i.y -= e.h)
                }

                function f(t) {
                    return a.isNumber(t) ? t : 0
                }
                var g = t.LinearScaleBase.extend({
                    setDimensions: function() {
                        var t = this,
                            i = t.options,
                            n = i.ticks;
                        t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
                        var o = a.min([t.height, t.width]),
                            r = a.valueOrDefault(n.fontSize, e.defaultFontSize);
                        t.drawingArea = i.display ? o / 2 - (r / 2 + n.backdropPaddingY) : o / 2
                    },
                    determineDataLimits: function() {
                        var t = this,
                            e = t.chart,
                            i = Number.POSITIVE_INFINITY,
                            n = Number.NEGATIVE_INFINITY;
                        a.each(e.data.datasets, function(o, r) {
                            if (e.isDatasetVisible(r)) {
                                var s = e.getDatasetMeta(r);
                                a.each(o.data, function(e, a) {
                                    var o = +t.getRightValue(e);
                                    isNaN(o) || s.data[a].hidden || (i = Math.min(o, i), n = Math.max(o, n))
                                })
                            }
                        }), t.min = i === Number.POSITIVE_INFINITY ? 0 : i, t.max = n === Number.NEGATIVE_INFINITY ? 0 : n, t.handleTickRangeOptions()
                    },
                    getTickLimit: function() {
                        var t = this.options.ticks,
                            i = a.valueOrDefault(t.fontSize, e.defaultFontSize);
                        return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * i)))
                    },
                    convertTicksToLabels: function() {
                        var e = this;
                        t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
                    },
                    getLabelForIndex: function(t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    },
                    fit: function() {
                        this.options.pointLabels.display ? function(t) {
                            var e, i, n, o = s(t),
                                d = Math.min(t.height / 2, t.width / 2),
                                c = {
                                    r: t.width,
                                    l: 0,
                                    t: t.height,
                                    b: 0
                                },
                                h = {};
                            t.ctx.font = o.font, t._pointLabelSizes = [];
                            var f = r(t);
                            for (e = 0; e < f; e++) {
                                n = t.getPointPosition(e, d), i = l(t.ctx, o.size, t.pointLabels[e] || ""), t._pointLabelSizes[e] = i;
                                var g = t.getIndexAngle(e),
                                    p = a.toDegrees(g) % 360,
                                    v = u(p, n.x, i.w, 0, 180),
                                    m = u(p, n.y, i.h, 90, 270);
                                v.start < c.l && (c.l = v.start, h.l = g), v.end > c.r && (c.r = v.end, h.r = g), m.start < c.t && (c.t = m.start, h.t = g), m.end > c.b && (c.b = m.end, h.b = g)
                            }
                            t.setReductions(d, c, h)
                        }(this) : function(t) {
                            var e = Math.min(t.height / 2, t.width / 2);
                            t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0)
                        }(this)
                    },
                    setReductions: function(t, e, i) {
                        var n = e.l / Math.sin(i.l),
                            a = Math.max(e.r - this.width, 0) / Math.sin(i.r),
                            o = -e.t / Math.cos(i.t),
                            r = -Math.max(e.b - this.height, 0) / Math.cos(i.b);
                        n = f(n), a = f(a), o = f(o), r = f(r), this.drawingArea = Math.min(Math.round(t - (n + a) / 2), Math.round(t - (o + r) / 2)), this.setCenterPoint(n, a, o, r)
                    },
                    setCenterPoint: function(t, e, i, n) {
                        var a = this,
                            o = a.width - e - a.drawingArea,
                            r = t + a.drawingArea,
                            s = i + a.drawingArea,
                            l = a.height - n - a.drawingArea;
                        a.xCenter = Math.round((r + o) / 2 + a.left), a.yCenter = Math.round((s + l) / 2 + a.top)
                    },
                    getIndexAngle: function(t) {
                        return t * (2 * Math.PI / r(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                    },
                    getDistanceFromCenterForValue: function(t) {
                        var e = this;
                        if (null === t) return 0;
                        var i = e.drawingArea / (e.max - e.min);
                        return e.options.ticks.reverse ? (e.max - t) * i : (t - e.min) * i
                    },
                    getPointPosition: function(t, e) {
                        var i = this.getIndexAngle(t) - Math.PI / 2;
                        return {
                            x: Math.round(Math.cos(i) * e) + this.xCenter,
                            y: Math.round(Math.sin(i) * e) + this.yCenter
                        }
                    },
                    getPointPositionForValue: function(t, e) {
                        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                    },
                    getBasePosition: function() {
                        var t = this.min,
                            e = this.max;
                        return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0)
                    },
                    draw: function() {
                        var t = this,
                            i = t.options,
                            n = i.gridLines,
                            o = i.ticks,
                            l = a.valueOrDefault;
                        if (i.display) {
                            var u = t.ctx,
                                f = this.getIndexAngle(0),
                                g = l(o.fontSize, e.defaultFontSize),
                                p = l(o.fontStyle, e.defaultFontStyle),
                                v = l(o.fontFamily, e.defaultFontFamily),
                                m = a.fontString(g, p, v);
                            a.each(t.ticks, function(i, s) {
                                if (s > 0 || o.reverse) {
                                    var d = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]);
                                    if (n.display && 0 !== s && function(t, e, i, n) {
                                            var o = t.ctx;
                                            if (o.strokeStyle = a.valueAtIndexOrDefault(e.color, n - 1), o.lineWidth = a.valueAtIndexOrDefault(e.lineWidth, n - 1), t.options.gridLines.circular) o.beginPath(), o.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), o.closePath(), o.stroke();
                                            else {
                                                var s = r(t);
                                                if (0 === s) return;
                                                o.beginPath();
                                                var l = t.getPointPosition(0, i);
                                                o.moveTo(l.x, l.y);
                                                for (var u = 1; u < s; u++) l = t.getPointPosition(u, i), o.lineTo(l.x, l.y);
                                                o.closePath(), o.stroke()
                                            }
                                        }(t, n, d, s), o.display) {
                                        var c = l(o.fontColor, e.defaultFontColor);
                                        if (u.font = m, u.save(), u.translate(t.xCenter, t.yCenter), u.rotate(f), o.showLabelBackdrop) {
                                            var h = u.measureText(i).width;
                                            u.fillStyle = o.backdropColor, u.fillRect(-h / 2 - o.backdropPaddingX, -d - g / 2 - o.backdropPaddingY, h + 2 * o.backdropPaddingX, g + 2 * o.backdropPaddingY)
                                        }
                                        u.textAlign = "center", u.textBaseline = "middle", u.fillStyle = c, u.fillText(i, 0, -d), u.restore()
                                    }
                                }
                            }), (i.angleLines.display || i.pointLabels.display) && function(t) {
                                var i = t.ctx,
                                    n = a.valueOrDefault,
                                    o = t.options,
                                    l = o.angleLines,
                                    u = o.pointLabels;
                                i.lineWidth = l.lineWidth, i.strokeStyle = l.color;
                                var f = t.getDistanceFromCenterForValue(o.ticks.reverse ? t.min : t.max),
                                    g = s(t);
                                i.textBaseline = "top";
                                for (var p = r(t) - 1; p >= 0; p--) {
                                    if (l.display) {
                                        var v = t.getPointPosition(p, f);
                                        i.beginPath(), i.moveTo(t.xCenter, t.yCenter), i.lineTo(v.x, v.y), i.stroke(), i.closePath()
                                    }
                                    if (u.display) {
                                        var m = t.getPointPosition(p, f + 5),
                                            b = n(u.fontColor, e.defaultFontColor);
                                        i.font = g.font, i.fillStyle = b;
                                        var x = t.getIndexAngle(p),
                                            y = a.toDegrees(x);
                                        i.textAlign = d(y), h(y, t._pointLabelSizes[p], m), c(i, t.pointLabels[p] || "", m, g.size)
                                    }
                                }
                            }(t)
                        }
                    }
                });
                t.scaleService.registerScaleType("radialLinear", g, i)
            }
        },
        "8TtQ": function(t, e, i) {
            "use strict";
            t.exports = function(t) {
                var e = t.Scale.extend({
                    getLabels: function() {
                        var t = this.chart.data;
                        return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
                    },
                    determineDataLimits: function() {
                        var t, e = this,
                            i = e.getLabels();
                        e.minIndex = 0, e.maxIndex = i.length - 1, void 0 !== e.options.ticks.min && (t = i.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = i.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = i[e.minIndex], e.max = i[e.maxIndex]
                    },
                    buildTicks: function() {
                        var t = this,
                            e = t.getLabels();
                        t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
                    },
                    getLabelForIndex: function(t, e) {
                        var i = this,
                            n = i.chart.data,
                            a = i.isHorizontal();
                        return n.yLabels && !a ? i.getRightValue(n.datasets[e].data[t]) : i.ticks[t - i.minIndex]
                    },
                    getPixelForValue: function(t, e) {
                        var i, n = this,
                            a = n.options.offset,
                            o = Math.max(n.maxIndex + 1 - n.minIndex - (a ? 0 : 1), 1);
                        if (void 0 !== t && null !== t && (i = n.isHorizontal() ? t.x : t.y), void 0 !== i || void 0 !== t && isNaN(e)) {
                            var r = n.getLabels();
                            t = i || t;
                            var s = r.indexOf(t);
                            e = -1 !== s ? s : e
                        }
                        if (n.isHorizontal()) {
                            var l = n.width / o,
                                u = l * (e - n.minIndex);
                            return a && (u += l / 2), n.left + Math.round(u)
                        }
                        var d = n.height / o,
                            c = d * (e - n.minIndex);
                        return a && (c += d / 2), n.top + Math.round(c)
                    },
                    getPixelForTick: function(t) {
                        return this.getPixelForValue(this.ticks[t], t + this.minIndex, null)
                    },
                    getValueForPixel: function(t) {
                        var e = this,
                            i = e.options.offset,
                            n = Math.max(e._ticks.length - (i ? 0 : 1), 1),
                            a = e.isHorizontal(),
                            o = (a ? e.width : e.height) / n;
                        return t -= a ? e.left : e.top, i && (t -= o / 2), (t <= 0 ? 0 : Math.round(t / o)) + e.minIndex
                    },
                    getBasePixel: function() {
                        return this.bottom
                    }
                });
                t.scaleService.registerScaleType("category", e, {
                    position: "bottom"
                })
            }
        },
        A5uo: function(t, e, i) {
            "use strict";
            var n = i("CDJp"),
                a = i("K2E3"),
                o = i("RDha");
            n._set("global", {
                animation: {
                    duration: 1e3,
                    easing: "easeOutQuart",
                    onProgress: o.noop,
                    onComplete: o.noop
                }
            }), t.exports = function(t) {
                t.Animation = a.extend({
                    chart: null,
                    currentStep: 0,
                    numSteps: 60,
                    easing: "",
                    render: null,
                    onAnimationProgress: null,
                    onAnimationComplete: null
                }), t.animationService = {
                    frameDuration: 17,
                    animations: [],
                    dropFrames: 0,
                    request: null,
                    addAnimation: function(t, e, i, n) {
                        var a, o, r = this.animations;
                        for (e.chart = t, n || (t.animating = !0), a = 0, o = r.length; a < o; ++a)
                            if (r[a].chart === t) return void(r[a] = e);
                        r.push(e), 1 === r.length && this.requestAnimationFrame()
                    },
                    cancelAnimation: function(t) {
                        var e = o.findIndex(this.animations, function(e) {
                            return e.chart === t
                        }); - 1 !== e && (this.animations.splice(e, 1), t.animating = !1)
                    },
                    requestAnimationFrame: function() {
                        var t = this;
                        null === t.request && (t.request = o.requestAnimFrame.call(window, function() {
                            t.request = null, t.startDigest()
                        }))
                    },
                    startDigest: function() {
                        var t = this,
                            e = Date.now(),
                            i = 0;
                        t.dropFrames > 1 && (i = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + i);
                        var n = Date.now();
                        t.dropFrames += (n - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame()
                    },
                    advance: function(t) {
                        for (var e, i, n = this.animations, a = 0; a < n.length;) i = (e = n[a]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), o.callback(e.render, [i, e], i), o.callback(e.onAnimationProgress, [e], i), e.currentStep >= e.numSteps ? (o.callback(e.onAnimationComplete, [e], i), i.animating = !1, n.splice(a, 1)) : ++a
                    }
                }, Object.defineProperty(t.Animation.prototype, "animationObject", {
                    get: function() {
                        return this
                    }
                }), Object.defineProperty(t.Animation.prototype, "chartInstance", {
                    get: function() {
                        return this.chart
                    },
                    set: function(t) {
                        this.chart = t
                    }
                })
            }
        },
        AX6q: function(t, e, i) {
            "use strict";
            var n = i("CDJp"),
                a = i("K2E3"),
                o = i("RDha");
            n._set("global", {
                legend: {
                    display: !0,
                    position: "top",
                    fullWidth: !0,
                    reverse: !1,
                    weight: 1e3,
                    onClick: function(t, e) {
                        var i = e.datasetIndex,
                            n = this.chart,
                            a = n.getDatasetMeta(i);
                        a.hidden = null === a.hidden ? !n.data.datasets[i].hidden : null, n.update()
                    },
                    onHover: null,
                    labels: {
                        boxWidth: 40,
                        padding: 10,
                        generateLabels: function(t) {
                            var e = t.data;
                            return o.isArray(e.datasets) ? e.datasets.map(function(e, i) {
                                return {
                                    text: e.label,
                                    fillStyle: o.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                                    hidden: !t.isDatasetVisible(i),
                                    lineCap: e.borderCapStyle,
                                    lineDash: e.borderDash,
                                    lineDashOffset: e.borderDashOffset,
                                    lineJoin: e.borderJoinStyle,
                                    lineWidth: e.borderWidth,
                                    strokeStyle: e.borderColor,
                                    pointStyle: e.pointStyle,
                                    datasetIndex: i
                                }
                            }, this) : []
                        }
                    }
                },
                legendCallback: function(t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    for (var i = 0; i < t.data.datasets.length; i++) e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                }
            }), t.exports = function(t) {
                var e = t.layoutService,
                    i = o.noop;

                function r(t, e) {
                    return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
                }

                function s(i, n) {
                    var a = new t.Legend({
                        ctx: i.ctx,
                        options: n,
                        chart: i
                    });
                    e.configure(i, a, n), e.addBox(i, a), i.legend = a
                }
                return t.Legend = a.extend({
                    initialize: function(t) {
                        o.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
                    },
                    beforeUpdate: i,
                    update: function(t, e, i) {
                        var n = this;
                        return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                    },
                    afterUpdate: i,
                    beforeSetDimensions: i,
                    setDimensions: function() {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                            width: 0,
                            height: 0
                        }
                    },
                    afterSetDimensions: i,
                    beforeBuildLabels: i,
                    buildLabels: function() {
                        var t = this,
                            e = t.options.labels || {},
                            i = o.callback(e.generateLabels, [t.chart], t) || [];
                        e.filter && (i = i.filter(function(i) {
                            return e.filter(i, t.chart.data)
                        })), t.options.reverse && i.reverse(), t.legendItems = i
                    },
                    afterBuildLabels: i,
                    beforeFit: i,
                    fit: function() {
                        var t = this,
                            e = t.options,
                            i = e.labels,
                            a = e.display,
                            s = t.ctx,
                            l = n.global,
                            u = o.valueOrDefault,
                            d = u(i.fontSize, l.defaultFontSize),
                            c = u(i.fontStyle, l.defaultFontStyle),
                            h = u(i.fontFamily, l.defaultFontFamily),
                            f = o.fontString(d, c, h),
                            g = t.legendHitBoxes = [],
                            p = t.minSize,
                            v = t.isHorizontal();
                        if (v ? (p.width = t.maxWidth, p.height = a ? 10 : 0) : (p.width = a ? 10 : 0, p.height = t.maxHeight), a)
                            if (s.font = f, v) {
                                var m = t.lineWidths = [0],
                                    b = t.legendItems.length ? d + i.padding : 0;
                                s.textAlign = "left", s.textBaseline = "top", o.each(t.legendItems, function(e, n) {
                                    var a = r(i, d) + d / 2 + s.measureText(e.text).width;
                                    m[m.length - 1] + a + i.padding >= t.width && (b += d + i.padding, m[m.length] = t.left), g[n] = {
                                        left: 0,
                                        top: 0,
                                        width: a,
                                        height: d
                                    }, m[m.length - 1] += a + i.padding
                                }), p.height += b
                            } else {
                                var x = i.padding,
                                    y = t.columnWidths = [],
                                    k = i.padding,
                                    C = 0,
                                    w = 0,
                                    M = d + x;
                                o.each(t.legendItems, function(t, e) {
                                    var n = r(i, d) + d / 2 + s.measureText(t.text).width;
                                    w + M > p.height && (k += C + i.padding, y.push(C), C = 0, w = 0), C = Math.max(C, n), w += M, g[e] = {
                                        left: 0,
                                        top: 0,
                                        width: n,
                                        height: d
                                    }
                                }), k += C, y.push(C), p.width += k
                            }
                        t.width = p.width, t.height = p.height
                    },
                    afterFit: i,
                    isHorizontal: function() {
                        return "top" === this.options.position || "bottom" === this.options.position
                    },
                    draw: function() {
                        var t = this,
                            e = t.options,
                            i = e.labels,
                            a = n.global,
                            s = a.elements.line,
                            l = t.width,
                            u = t.lineWidths;
                        if (e.display) {
                            var d, c = t.ctx,
                                h = o.valueOrDefault,
                                f = h(i.fontColor, a.defaultFontColor),
                                g = h(i.fontSize, a.defaultFontSize),
                                p = h(i.fontStyle, a.defaultFontStyle),
                                v = h(i.fontFamily, a.defaultFontFamily),
                                m = o.fontString(g, p, v);
                            c.textAlign = "left", c.textBaseline = "middle", c.lineWidth = .5, c.strokeStyle = f, c.fillStyle = f, c.font = m;
                            var b = r(i, g),
                                x = t.legendHitBoxes,
                                y = t.isHorizontal();
                            d = y ? {
                                x: t.left + (l - u[0]) / 2,
                                y: t.top + i.padding,
                                line: 0
                            } : {
                                x: t.left + i.padding,
                                y: t.top + i.padding,
                                line: 0
                            };
                            var k = g + i.padding;
                            o.each(t.legendItems, function(n, r) {
                                var f = c.measureText(n.text).width,
                                    p = b + g / 2 + f,
                                    v = d.x,
                                    m = d.y;
                                y ? v + p >= l && (m = d.y += k, d.line++, v = d.x = t.left + (l - u[d.line]) / 2) : m + k > t.bottom && (v = d.x = v + t.columnWidths[d.line] + i.padding, m = d.y = t.top + i.padding, d.line++),
                                    function(t, i, n) {
                                        if (!(isNaN(b) || b <= 0)) {
                                            c.save(), c.fillStyle = h(n.fillStyle, a.defaultColor), c.lineCap = h(n.lineCap, s.borderCapStyle), c.lineDashOffset = h(n.lineDashOffset, s.borderDashOffset), c.lineJoin = h(n.lineJoin, s.borderJoinStyle), c.lineWidth = h(n.lineWidth, s.borderWidth), c.strokeStyle = h(n.strokeStyle, a.defaultColor);
                                            var r = 0 === h(n.lineWidth, s.borderWidth);
                                            if (c.setLineDash && c.setLineDash(h(n.lineDash, s.borderDash)), e.labels && e.labels.usePointStyle) {
                                                var l = g * Math.SQRT2 / 2,
                                                    u = l / Math.SQRT2,
                                                    d = t + u,
                                                    f = i + u;
                                                o.canvas.drawPoint(c, n.pointStyle, l, d, f)
                                            } else r || c.strokeRect(t, i, b, g), c.fillRect(t, i, b, g);
                                            c.restore()
                                        }
                                    }(v, m, n), x[r].left = v, x[r].top = m,
                                    function(t, e, i, n) {
                                        var a = g / 2,
                                            o = b + a + t,
                                            r = e + a;
                                        c.fillText(i.text, o, r), i.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(o, r), c.lineTo(o + n, r), c.stroke())
                                    }(v, m, n, f), y ? d.x += p + i.padding : d.y += k
                            })
                        }
                    },
                    handleEvent: function(t) {
                        var e = this,
                            i = e.options,
                            n = "mouseup" === t.type ? "click" : t.type,
                            a = !1;
                        if ("mousemove" === n) {
                            if (!i.onHover) return
                        } else {
                            if ("click" !== n) return;
                            if (!i.onClick) return
                        }
                        var o = t.x,
                            r = t.y;
                        if (o >= e.left && o <= e.right && r >= e.top && r <= e.bottom)
                            for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
                                var u = s[l];
                                if (o >= u.left && o <= u.left + u.width && r >= u.top && r <= u.top + u.height) {
                                    if ("click" === n) {
                                        i.onClick.call(e, t.native, e.legendItems[l]), a = !0;
                                        break
                                    }
                                    if ("mousemove" === n) {
                                        i.onHover.call(e, t.native, e.legendItems[l]), a = !0;
                                        break
                                    }
                                }
                            }
                        return a
                    }
                }), {
                    id: "legend",
                    beforeInit: function(t) {
                        var e = t.options.legend;
                        e && s(t, e)
                    },
                    beforeUpdate: function(t) {
                        var i = t.options.legend,
                            a = t.legend;
                        i ? (o.mergeIf(i, n.global.legend), a ? (e.configure(t, a, i), a.options = i) : s(t, i)) : a && (e.removeBox(t, a), delete t.legend)
                    },
                    afterEvent: function(t, e) {
                        var i = t.legend;
                        i && i.handleEvent(e)
                    }
                }
            }
        },
        As3K: function(t, e, i) {
            "use strict";
            var n = i("TC34");
            t.exports = {
                toLineHeight: function(t, e) {
                    var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                    if (!i || "normal" === i[1]) return 1.2 * e;
                    switch (t = +i[2], i[3]) {
                        case "px":
                            return t;
                        case "%":
                            t /= 100
                    }
                    return e * t
                },
                toPadding: function(t) {
                    var e, i, a, o;
                    return n.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, a = +t.bottom || 0, o = +t.left || 0) : e = i = a = o = +t || 0, {
                        top: e,
                        right: i,
                        bottom: a,
                        left: o,
                        height: e + a,
                        width: o + i
                    }
                },
                resolve: function(t, e, i) {
                    var a, o, r;
                    for (a = 0, o = t.length; a < o; ++a)
                        if (void 0 !== (r = t[a]) && (void 0 !== e && "function" == typeof r && (r = r(e)), void 0 !== i && n.isArray(r) && (r = r[i]), void 0 !== r)) return r
                }
            }
        },
        CDJp: function(t, e, i) {
            "use strict";
            var n = i("RDha");
            t.exports = {
                _set: function(t, e) {
                    return n.merge(this[t] || (this[t] = {}), e)
                }
            }
        },
        G0Q6: function(t, e, i) {
            "use strict";
            var n = i("CDJp"),
                a = i("vvH+"),
                o = i("RDha");
            n._set("line", {
                showLines: !0,
                spanGaps: !1,
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        id: "y-axis-0"
                    }]
                }
            }), t.exports = function(t) {
                function e(t, e) {
                    return o.valueOrDefault(t.showLine, e.showLines)
                }
                t.controllers.line = t.DatasetController.extend({
                    datasetElementType: a.Line,
                    dataElementType: a.Point,
                    update: function(t) {
                        var i, n, a, r = this,
                            s = r.getMeta(),
                            l = s.dataset,
                            u = s.data || [],
                            d = r.chart.options,
                            c = d.elements.line,
                            h = r.getScaleForId(s.yAxisID),
                            f = r.getDataset(),
                            g = e(f, d);
                        for (g && (a = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = h, l._datasetIndex = r.index, l._children = u, l._model = {
                                spanGaps: f.spanGaps ? f.spanGaps : d.spanGaps,
                                tension: a.tension ? a.tension : o.valueOrDefault(f.lineTension, c.tension),
                                backgroundColor: a.backgroundColor ? a.backgroundColor : f.backgroundColor || c.backgroundColor,
                                borderWidth: a.borderWidth ? a.borderWidth : f.borderWidth || c.borderWidth,
                                borderColor: a.borderColor ? a.borderColor : f.borderColor || c.borderColor,
                                borderCapStyle: a.borderCapStyle ? a.borderCapStyle : f.borderCapStyle || c.borderCapStyle,
                                borderDash: a.borderDash ? a.borderDash : f.borderDash || c.borderDash,
                                borderDashOffset: a.borderDashOffset ? a.borderDashOffset : f.borderDashOffset || c.borderDashOffset,
                                borderJoinStyle: a.borderJoinStyle ? a.borderJoinStyle : f.borderJoinStyle || c.borderJoinStyle,
                                fill: a.fill ? a.fill : void 0 !== f.fill ? f.fill : c.fill,
                                steppedLine: a.steppedLine ? a.steppedLine : o.valueOrDefault(f.steppedLine, c.stepped),
                                cubicInterpolationMode: a.cubicInterpolationMode ? a.cubicInterpolationMode : o.valueOrDefault(f.cubicInterpolationMode, c.cubicInterpolationMode)
                            }, l.pivot()), i = 0, n = u.length; i < n; ++i) r.updateElement(u[i], i, t);
                        for (g && 0 !== l._model.tension && r.updateBezierControlPoints(), i = 0, n = u.length; i < n; ++i) u[i].pivot()
                    },
                    getPointBackgroundColor: function(t, e) {
                        var i = this.chart.options.elements.point.backgroundColor,
                            n = this.getDataset(),
                            a = t.custom || {};
                        return a.backgroundColor ? i = a.backgroundColor : n.pointBackgroundColor ? i = o.valueAtIndexOrDefault(n.pointBackgroundColor, e, i) : n.backgroundColor && (i = n.backgroundColor), i
                    },
                    getPointBorderColor: function(t, e) {
                        var i = this.chart.options.elements.point.borderColor,
                            n = this.getDataset(),
                            a = t.custom || {};
                        return a.borderColor ? i = a.borderColor : n.pointBorderColor ? i = o.valueAtIndexOrDefault(n.pointBorderColor, e, i) : n.borderColor && (i = n.borderColor), i
                    },
                    getPointBorderWidth: function(t, e) {
                        var i = this.chart.options.elements.point.borderWidth,
                            n = this.getDataset(),
                            a = t.custom || {};
                        return isNaN(a.borderWidth) ? !isNaN(n.pointBorderWidth) || o.isArray(n.pointBorderWidth) ? i = o.valueAtIndexOrDefault(n.pointBorderWidth, e, i) : isNaN(n.borderWidth) || (i = n.borderWidth) : i = a.borderWidth, i
                    },
                    updateElement: function(t, e, i) {
                        var n, a, r = this,
                            s = r.getMeta(),
                            l = t.custom || {},
                            u = r.getDataset(),
                            d = r.index,
                            c = u.data[e],
                            h = r.getScaleForId(s.yAxisID),
                            f = r.getScaleForId(s.xAxisID),
                            g = r.chart.options.elements.point;
                        void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), n = f.getPixelForValue("object" == typeof c ? c : NaN, e, d), a = i ? h.getBasePixel() : r.calculatePointY(c, e, d), t._xScale = f, t._yScale = h, t._datasetIndex = d, t._index = e, t._model = {
                            x: n,
                            y: a,
                            skip: l.skip || isNaN(n) || isNaN(a),
                            radius: l.radius || o.valueAtIndexOrDefault(u.pointRadius, e, g.radius),
                            pointStyle: l.pointStyle || o.valueAtIndexOrDefault(u.pointStyle, e, g.pointStyle),
                            backgroundColor: r.getPointBackgroundColor(t, e),
                            borderColor: r.getPointBorderColor(t, e),
                            borderWidth: r.getPointBorderWidth(t, e),
                            tension: s.dataset._model ? s.dataset._model.tension : 0,
                            steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
                            hitRadius: l.hitRadius || o.valueAtIndexOrDefault(u.pointHitRadius, e, g.hitRadius)
                        }
                    },
                    calculatePointY: function(t, e, i) {
                        var n, a, o, r = this.chart,
                            s = this.getMeta(),
                            l = this.getScaleForId(s.yAxisID),
                            u = 0,
                            d = 0;
                        if (l.options.stacked) {
                            for (n = 0; n < i; n++)
                                if (a = r.data.datasets[n], "line" === (o = r.getDatasetMeta(n)).type && o.yAxisID === l.id && r.isDatasetVisible(n)) {
                                    var c = Number(l.getRightValue(a.data[e]));
                                    c < 0 ? d += c || 0 : u += c || 0
                                }
                            var h = Number(l.getRightValue(t));
                            return h < 0 ? l.getPixelForValue(d + h) : l.getPixelForValue(u + h)
                        }
                        return l.getPixelForValue(t)
                    },
                    updateBezierControlPoints: function() {
                        var t, e, i, n, a = this.getMeta(),
                            r = this.chart.chartArea,
                            s = a.data || [];

                        function l(t, e, i) {
                            return Math.max(Math.min(t, i), e)
                        }
                        if (a.dataset._model.spanGaps && (s = s.filter(function(t) {
                                return !t._model.skip
                            })), "monotone" === a.dataset._model.cubicInterpolationMode) o.splineCurveMonotone(s);
                        else
                            for (t = 0, e = s.length; t < e; ++t) i = s[t]._model, n = o.splineCurve(o.previousItem(s, t)._model, i, o.nextItem(s, t)._model, a.dataset._model.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y;
                        if (this.chart.options.elements.line.capBezierPoints)
                            for (t = 0, e = s.length; t < e; ++t)(i = s[t]._model).controlPointPreviousX = l(i.controlPointPreviousX, r.left, r.right), i.controlPointPreviousY = l(i.controlPointPreviousY, r.top, r.bottom), i.controlPointNextX = l(i.controlPointNextX, r.left, r.right), i.controlPointNextY = l(i.controlPointNextY, r.top, r.bottom)
                    },
                    draw: function() {
                        var t = this.chart,
                            i = this.getMeta(),
                            n = i.data || [],
                            a = t.chartArea,
                            r = n.length,
                            s = 0;
                        for (o.canvas.clipArea(t.ctx, a), e(this.getDataset(), t.options) && i.dataset.draw(), o.canvas.unclipArea(t.ctx); s < r; ++s) n[s].draw(a)
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            n = t.custom || {},
                            a = t._model;
                        a.radius = n.hoverRadius || o.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), a.backgroundColor = n.hoverBackgroundColor || o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, o.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor || o.valueAtIndexOrDefault(e.pointHoverBorderColor, i, o.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth || o.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, a.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var e = this,
                            i = e.chart.data.datasets[t._datasetIndex],
                            n = t._index,
                            a = t.custom || {},
                            r = t._model;
                        void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), r.radius = a.radius || o.valueAtIndexOrDefault(i.pointRadius, n, e.chart.options.elements.point.radius), r.backgroundColor = e.getPointBackgroundColor(t, n), r.borderColor = e.getPointBorderColor(t, n), r.borderWidth = e.getPointBorderWidth(t, n)
                    }
                })
            }
        },
        Hg4g: function(t, e) {
            t.exports = {
                acquireContext: function(t) {
                    return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
                }
            }
        },
        IYT7: function(t, e, i) {
            "use strict";
            var n = i("CDJp"),
                a = i("K2E3"),
                o = i("RDha");
            n._set("global", {
                plugins: {}
            }), t.exports = function(t) {
                t.plugins = {
                    _plugins: [],
                    _cacheId: 0,
                    register: function(t) {
                        var e = this._plugins;
                        [].concat(t).forEach(function(t) {
                            -1 === e.indexOf(t) && e.push(t)
                        }), this._cacheId++
                    },
                    unregister: function(t) {
                        var e = this._plugins;
                        [].concat(t).forEach(function(t) {
                            var i = e.indexOf(t); - 1 !== i && e.splice(i, 1)
                        }), this._cacheId++
                    },
                    clear: function() {
                        this._plugins = [], this._cacheId++
                    },
                    count: function() {
                        return this._plugins.length
                    },
                    getAll: function() {
                        return this._plugins
                    },
                    notify: function(t, e, i) {
                        var n, a, o, r, s, l = this.descriptors(t),
                            u = l.length;
                        for (n = 0; n < u; ++n)
                            if ("function" == typeof(s = (o = (a = l[n]).plugin)[e]) && ((r = [t].concat(i || [])).push(a.options), !1 === s.apply(o, r))) return !1;
                        return !0
                    },
                    descriptors: function(t) {
                        var e = t._plugins || (t._plugins = {});
                        if (e.id === this._cacheId) return e.descriptors;
                        var i = [],
                            a = [],
                            r = t && t.config || {},
                            s = r.options && r.options.plugins || {};
                        return this._plugins.concat(r.plugins || []).forEach(function(t) {
                            if (-1 === i.indexOf(t)) {
                                var e = t.id,
                                    r = s[e];
                                !1 !== r && (!0 === r && (r = o.clone(n.global.plugins[e])), i.push(t), a.push({
                                    plugin: t,
                                    options: r || {}
                                }))
                            }
                        }), e.descriptors = a, e.id = this._cacheId, a
                    }
                }, t.pluginService = t.plugins, t.PluginBase = a.extend({})
            }
        },
        K2E3: function(t, e, i) {
            "use strict";
            var n = i("6ww4"),
                a = i("RDha");
            var o = function(t) {
                a.extend(this, t), this.initialize.apply(this, arguments)
            };
            a.extend(o.prototype, {
                initialize: function() {
                    this.hidden = !1
                },
                pivot: function() {
                    var t = this;
                    return t._view || (t._view = a.clone(t._model)), t._start = {}, t
                },
                transition: function(t) {
                    var e = this,
                        i = e._model,
                        a = e._start,
                        o = e._view;
                    return i && 1 !== t ? (o || (o = e._view = {}), a || (a = e._start = {}), function(t, e, i, a) {
                        var o, r, s, l, u, d, c, h, f, g = Object.keys(i);
                        for (o = 0, r = g.length; o < r; ++o)
                            if (d = i[s = g[o]], e.hasOwnProperty(s) || (e[s] = d), (l = e[s]) !== d && "_" !== s[0]) {
                                if (t.hasOwnProperty(s) || (t[s] = l), (c = typeof d) == typeof(u = t[s]))
                                    if ("string" === c) {
                                        if ((h = n(u)).valid && (f = n(d)).valid) {
                                            e[s] = f.mix(h, a).rgbString();
                                            continue
                                        }
                                    } else if ("number" === c && isFinite(u) && isFinite(d)) {
                                    e[s] = u + (d - u) * a;
                                    continue
                                }
                                e[s] = d
                            }
                    }(a, o, i, t), e) : (e._view = i, e._start = null, e)
                },
                tooltipPosition: function() {
                    return {
                        x: this._model.x,
                        y: this._model.y
                    }
                },
                hasValue: function() {
                    return a.isNumber(this._model.x) && a.isNumber(this._model.y)
                }
            }), o.extend = a.inherits, t.exports = o
        },
        KAQS: function(t, e, i) {
            "use strict";
            var n = i("RDha");
            t.exports = function(t) {
                var e = ["push", "pop", "shift", "splice", "unshift"];

                function i(t, i) {
                    var n = t._chartjs;
                    if (n) {
                        var a = n.listeners,
                            o = a.indexOf(i); - 1 !== o && a.splice(o, 1), a.length > 0 || (e.forEach(function(e) {
                            delete t[e]
                        }), delete t._chartjs)
                    }
                }
                t.DatasetController = function(t, e) {
                    this.initialize(t, e)
                }, n.extend(t.DatasetController.prototype, {
                    datasetElementType: null,
                    dataElementType: null,
                    initialize: function(t, e) {
                        this.chart = t, this.index = e, this.linkScales(), this.addElements()
                    },
                    updateIndex: function(t) {
                        this.index = t
                    },
                    linkScales: function() {
                        var t = this.getMeta(),
                            e = this.getDataset();
                        null === t.xAxisID && (t.xAxisID = e.xAxisID || this.chart.options.scales.xAxes[0].id), null === t.yAxisID && (t.yAxisID = e.yAxisID || this.chart.options.scales.yAxes[0].id)
                    },
                    getDataset: function() {
                        return this.chart.data.datasets[this.index]
                    },
                    getMeta: function() {
                        return this.chart.getDatasetMeta(this.index)
                    },
                    getScaleForId: function(t) {
                        return this.chart.scales[t]
                    },
                    reset: function() {
                        this.update(!0)
                    },
                    destroy: function() {
                        this._data && i(this._data, this)
                    },
                    createMetaDataset: function() {
                        var t = this.datasetElementType;
                        return t && new t({
                            _chart: this.chart,
                            _datasetIndex: this.index
                        })
                    },
                    createMetaData: function(t) {
                        var e = this.dataElementType;
                        return e && new e({
                            _chart: this.chart,
                            _datasetIndex: this.index,
                            _index: t
                        })
                    },
                    addElements: function() {
                        var t, e, i = this.getMeta(),
                            n = this.getDataset().data || [],
                            a = i.data;
                        for (t = 0, e = n.length; t < e; ++t) a[t] = a[t] || this.createMetaData(t);
                        i.dataset = i.dataset || this.createMetaDataset()
                    },
                    addElementAndReset: function(t) {
                        var e = this.createMetaData(t);
                        this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
                    },
                    buildOrUpdateElements: function() {
                        var t = this,
                            a = t.getDataset(),
                            o = a.data || (a.data = []);
                        t._data !== o && (t._data && i(t._data, t), function(t, i) {
                            t._chartjs ? t._chartjs.listeners.push(i) : (Object.defineProperty(t, "_chartjs", {
                                configurable: !0,
                                enumerable: !1,
                                value: {
                                    listeners: [i]
                                }
                            }), e.forEach(function(e) {
                                var i = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                                    a = t[e];
                                Object.defineProperty(t, e, {
                                    configurable: !0,
                                    enumerable: !1,
                                    value: function() {
                                        var e = Array.prototype.slice.call(arguments),
                                            o = a.apply(this, e);
                                        return n.each(t._chartjs.listeners, function(t) {
                                            "function" == typeof t[i] && t[i].apply(t, e)
                                        }), o
                                    }
                                })
                            }))
                        }(o, t), t._data = o), t.resyncElements()
                    },
                    update: n.noop,
                    transition: function(t) {
                        for (var e = this.getMeta(), i = e.data || [], n = i.length, a = 0; a < n; ++a) i[a].transition(t);
                        e.dataset && e.dataset.transition(t)
                    },
                    draw: function() {
                        var t = this.getMeta(),
                            e = t.data || [],
                            i = e.length,
                            n = 0;
                        for (t.dataset && t.dataset.draw(); n < i; ++n) e[n].draw()
                    },
                    removeHoverStyle: function(t, e) {
                        var i = this.chart.data.datasets[t._datasetIndex],
                            a = t._index,
                            o = t.custom || {},
                            r = n.valueAtIndexOrDefault,
                            s = t._model;
                        s.backgroundColor = o.backgroundColor ? o.backgroundColor : r(i.backgroundColor, a, e.backgroundColor), s.borderColor = o.borderColor ? o.borderColor : r(i.borderColor, a, e.borderColor), s.borderWidth = o.borderWidth ? o.borderWidth : r(i.borderWidth, a, e.borderWidth)
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            a = t.custom || {},
                            o = n.valueAtIndexOrDefault,
                            r = n.getHoverColor,
                            s = t._model;
                        s.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : o(e.hoverBackgroundColor, i, r(s.backgroundColor)), s.borderColor = a.hoverBorderColor ? a.hoverBorderColor : o(e.hoverBorderColor, i, r(s.borderColor)), s.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : o(e.hoverBorderWidth, i, s.borderWidth)
                    },
                    resyncElements: function() {
                        var t = this.getMeta(),
                            e = this.getDataset().data,
                            i = t.data.length,
                            n = e.length;
                        n < i ? t.data.splice(n, i - n) : n > i && this.insertElements(i, n - i)
                    },
                    insertElements: function(t, e) {
                        for (var i = 0; i < e; ++i) this.addElementAndReset(t + i)
                    },
                    onDataPush: function() {
                        this.insertElements(this.getDataset().data.length - 1, arguments.length)
                    },
                    onDataPop: function() {
                        this.getMeta().data.pop()
                    },
                    onDataShift: function() {
                        this.getMeta().data.shift()
                    },
                    onDataSplice: function(t, e) {
                        this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
                    },
                    onDataUnshift: function() {
                        this.insertElements(0, arguments.length)
                    }
                }), t.DatasetController.extend = n.inherits
            }
        },
        LdGl: function(t, e) {
            function i(t) {
                var e, i, n = t[0] / 255,
                    a = t[1] / 255,
                    o = t[2] / 255,
                    r = Math.min(n, a, o),
                    s = Math.max(n, a, o),
                    l = s - r;
                return s == r ? e = 0 : n == s ? e = (a - o) / l : a == s ? e = 2 + (o - n) / l : o == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (r + s) / 2, [e, 100 * (s == r ? 0 : i <= .5 ? l / (s + r) : l / (2 - s - r)), 100 * i]
            }

            function n(t) {
                var e, i, n = t[0],
                    a = t[1],
                    o = t[2],
                    r = Math.min(n, a, o),
                    s = Math.max(n, a, o),
                    l = s - r;
                return i = 0 == s ? 0 : l / s * 1e3 / 10, s == r ? e = 0 : n == s ? e = (a - o) / l : a == s ? e = 2 + (o - n) / l : o == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, i, s / 255 * 1e3 / 10]
            }

            function a(t) {
                var e = t[0],
                    n = t[1],
                    a = t[2];
                return [i(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(n, a))), 100 * (a = 1 - 1 / 255 * Math.max(e, Math.max(n, a)))]
            }

            function o(t) {
                var e, i = t[0] / 255,
                    n = t[1] / 255,
                    a = t[2] / 255;
                return [100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - a))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e]
            }

            function s(t) {
                return M[JSON.stringify(t)]
            }

            function l(t) {
                var e = t[0] / 255,
                    i = t[1] / 255,
                    n = t[2] / 255;
                return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * n), 100 * (.0193 * e + .1192 * i + .9505 * n)]
            }

            function u(t) {
                var e = l(t),
                    i = e[0],
                    n = e[1],
                    a = e[2];
                return n /= 100, a /= 108.883, i = (i /= 95.047) > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))]
            }

            function d(t) {
                var e, i, n, a, o, r = t[0] / 360,
                    s = t[1] / 100,
                    l = t[2] / 100;
                if (0 == s) return [o = 255 * l, o, o];
                e = 2 * l - (i = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0];
                for (var u = 0; u < 3; u++)(n = r + 1 / 3 * -(u - 1)) < 0 && n++, n > 1 && n--, o = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, a[u] = 255 * o;
                return a
            }

            function c(t) {
                var e = t[0] / 60,
                    i = t[1] / 100,
                    n = t[2] / 100,
                    a = Math.floor(e) % 6,
                    o = e - Math.floor(e),
                    r = 255 * n * (1 - i),
                    s = 255 * n * (1 - i * o),
                    l = 255 * n * (1 - i * (1 - o));
                n *= 255;
                switch (a) {
                    case 0:
                        return [n, l, r];
                    case 1:
                        return [s, n, r];
                    case 2:
                        return [r, n, l];
                    case 3:
                        return [r, s, n];
                    case 4:
                        return [l, r, n];
                    case 5:
                        return [n, r, s]
                }
            }

            function h(t) {
                var e, i, n, a, o = t[0] / 360,
                    s = t[1] / 100,
                    l = t[2] / 100,
                    u = s + l;
                switch (u > 1 && (s /= u, l /= u), i = 1 - l, n = 6 * o - (e = Math.floor(6 * o)), 0 != (1 & e) && (n = 1 - n), a = s + n * (i - s), e) {
                    default:
                        case 6:
                        case 0:
                        r = i,
                    g = a,
                    b = s;
                    break;
                    case 1:
                            r = a,
                        g = i,
                        b = s;
                        break;
                    case 2:
                            r = s,
                        g = i,
                        b = a;
                        break;
                    case 3:
                            r = s,
                        g = a,
                        b = i;
                        break;
                    case 4:
                            r = a,
                        g = s,
                        b = i;
                        break;
                    case 5:
                            r = i,
                        g = s,
                        b = a
                }
                return [255 * r, 255 * g, 255 * b]
            }

            function f(t) {
                var e = t[0] / 100,
                    i = t[1] / 100,
                    n = t[2] / 100,
                    a = t[3] / 100;
                return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a))]
            }

            function p(t) {
                var e, i, n, a = t[0] / 100,
                    o = t[1] / 100,
                    r = t[2] / 100;
                return i = -.9689 * a + 1.8758 * o + .0415 * r, n = .0557 * a + -.204 * o + 1.057 * r, e = (e = 3.2406 * a + -1.5372 * o + -.4986 * r) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
            }

            function v(t) {
                var e = t[0],
                    i = t[1],
                    n = t[2];
                return i /= 100, n /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
            }

            function m(t) {
                var e, i, n, a, o = t[0],
                    r = t[1],
                    s = t[2];
                return o <= 8 ? a = (i = 100 * o / 903.3) / 100 * 7.787 + 16 / 116 : (i = 100 * Math.pow((o + 16) / 116, 3), a = Math.pow(i / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (r / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + a, 3), i, n = n / 108.883 <= .008859 ? n = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3)]
            }

            function x(t) {
                var e, i = t[0],
                    n = t[1],
                    a = t[2];
                return (e = 360 * Math.atan2(a, n) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + a * a), e]
            }

            function y(t) {
                return p(m(t))
            }

            function k(t) {
                var e, i = t[0],
                    n = t[1];
                return e = t[2] / 360 * 2 * Math.PI, [i, n * Math.cos(e), n * Math.sin(e)]
            }

            function C(t) {
                return w[t]
            }
            t.exports = {
                rgb2hsl: i,
                rgb2hsv: n,
                rgb2hwb: a,
                rgb2cmyk: o,
                rgb2keyword: s,
                rgb2xyz: l,
                rgb2lab: u,
                rgb2lch: function(t) {
                    return x(u(t))
                },
                hsl2rgb: d,
                hsl2hsv: function(t) {
                    var e = t[0],
                        i = t[1] / 100,
                        n = t[2] / 100;
                    if (0 === n) return [0, 0, 0];
                    return [e, 100 * (2 * (i *= (n *= 2) <= 1 ? n : 2 - n) / (n + i)), 100 * ((n + i) / 2)]
                },
                hsl2hwb: function(t) {
                    return a(d(t))
                },
                hsl2cmyk: function(t) {
                    return o(d(t))
                },
                hsl2keyword: function(t) {
                    return s(d(t))
                },
                hsv2rgb: c,
                hsv2hsl: function(t) {
                    var e, i, n = t[0],
                        a = t[1] / 100,
                        o = t[2] / 100;
                    return e = a * o, [n, 100 * (e = (e /= (i = (2 - a) * o) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2)]
                },
                hsv2hwb: function(t) {
                    return a(c(t))
                },
                hsv2cmyk: function(t) {
                    return o(c(t))
                },
                hsv2keyword: function(t) {
                    return s(c(t))
                },
                hwb2rgb: h,
                hwb2hsl: function(t) {
                    return i(h(t))
                },
                hwb2hsv: function(t) {
                    return n(h(t))
                },
                hwb2cmyk: function(t) {
                    return o(h(t))
                },
                hwb2keyword: function(t) {
                    return s(h(t))
                },
                cmyk2rgb: f,
                cmyk2hsl: function(t) {
                    return i(f(t))
                },
                cmyk2hsv: function(t) {
                    return n(f(t))
                },
                cmyk2hwb: function(t) {
                    return a(f(t))
                },
                cmyk2keyword: function(t) {
                    return s(f(t))
                },
                keyword2rgb: C,
                keyword2hsl: function(t) {
                    return i(C(t))
                },
                keyword2hsv: function(t) {
                    return n(C(t))
                },
                keyword2hwb: function(t) {
                    return a(C(t))
                },
                keyword2cmyk: function(t) {
                    return o(C(t))
                },
                keyword2lab: function(t) {
                    return u(C(t))
                },
                keyword2xyz: function(t) {
                    return l(C(t))
                },
                xyz2rgb: p,
                xyz2lab: v,
                xyz2lch: function(t) {
                    return x(v(t))
                },
                lab2xyz: m,
                lab2rgb: y,
                lab2lch: x,
                lch2lab: k,
                lch2xyz: function(t) {
                    return m(k(t))
                },
                lch2rgb: function(t) {
                    return y(k(t))
                }
            };
            var w = {
                    aliceblue: [240, 248, 255],
                    antiquewhite: [250, 235, 215],
                    aqua: [0, 255, 255],
                    aquamarine: [127, 255, 212],
                    azure: [240, 255, 255],
                    beige: [245, 245, 220],
                    bisque: [255, 228, 196],
                    black: [0, 0, 0],
                    blanchedalmond: [255, 235, 205],
                    blue: [0, 0, 255],
                    blueviolet: [138, 43, 226],
                    brown: [165, 42, 42],
                    burlywood: [222, 184, 135],
                    cadetblue: [95, 158, 160],
                    chartreuse: [127, 255, 0],
                    chocolate: [210, 105, 30],
                    coral: [255, 127, 80],
                    cornflowerblue: [100, 149, 237],
                    cornsilk: [255, 248, 220],
                    crimson: [220, 20, 60],
                    cyan: [0, 255, 255],
                    darkblue: [0, 0, 139],
                    darkcyan: [0, 139, 139],
                    darkgoldenrod: [184, 134, 11],
                    darkgray: [169, 169, 169],
                    darkgreen: [0, 100, 0],
                    darkgrey: [169, 169, 169],
                    darkkhaki: [189, 183, 107],
                    darkmagenta: [139, 0, 139],
                    darkolivegreen: [85, 107, 47],
                    darkorange: [255, 140, 0],
                    darkorchid: [153, 50, 204],
                    darkred: [139, 0, 0],
                    darksalmon: [233, 150, 122],
                    darkseagreen: [143, 188, 143],
                    darkslateblue: [72, 61, 139],
                    darkslategray: [47, 79, 79],
                    darkslategrey: [47, 79, 79],
                    darkturquoise: [0, 206, 209],
                    darkviolet: [148, 0, 211],
                    deeppink: [255, 20, 147],
                    deepskyblue: [0, 191, 255],
                    dimgray: [105, 105, 105],
                    dimgrey: [105, 105, 105],
                    dodgerblue: [30, 144, 255],
                    firebrick: [178, 34, 34],
                    floralwhite: [255, 250, 240],
                    forestgreen: [34, 139, 34],
                    fuchsia: [255, 0, 255],
                    gainsboro: [220, 220, 220],
                    ghostwhite: [248, 248, 255],
                    gold: [255, 215, 0],
                    goldenrod: [218, 165, 32],
                    gray: [128, 128, 128],
                    green: [0, 128, 0],
                    greenyellow: [173, 255, 47],
                    grey: [128, 128, 128],
                    honeydew: [240, 255, 240],
                    hotpink: [255, 105, 180],
                    indianred: [205, 92, 92],
                    indigo: [75, 0, 130],
                    ivory: [255, 255, 240],
                    khaki: [240, 230, 140],
                    lavender: [230, 230, 250],
                    lavenderblush: [255, 240, 245],
                    lawngreen: [124, 252, 0],
                    lemonchiffon: [255, 250, 205],
                    lightblue: [173, 216, 230],
                    lightcoral: [240, 128, 128],
                    lightcyan: [224, 255, 255],
                    lightgoldenrodyellow: [250, 250, 210],
                    lightgray: [211, 211, 211],
                    lightgreen: [144, 238, 144],
                    lightgrey: [211, 211, 211],
                    lightpink: [255, 182, 193],
                    lightsalmon: [255, 160, 122],
                    lightseagreen: [32, 178, 170],
                    lightskyblue: [135, 206, 250],
                    lightslategray: [119, 136, 153],
                    lightslategrey: [119, 136, 153],
                    lightsteelblue: [176, 196, 222],
                    lightyellow: [255, 255, 224],
                    lime: [0, 255, 0],
                    limegreen: [50, 205, 50],
                    linen: [250, 240, 230],
                    magenta: [255, 0, 255],
                    maroon: [128, 0, 0],
                    mediumaquamarine: [102, 205, 170],
                    mediumblue: [0, 0, 205],
                    mediumorchid: [186, 85, 211],
                    mediumpurple: [147, 112, 219],
                    mediumseagreen: [60, 179, 113],
                    mediumslateblue: [123, 104, 238],
                    mediumspringgreen: [0, 250, 154],
                    mediumturquoise: [72, 209, 204],
                    mediumvioletred: [199, 21, 133],
                    midnightblue: [25, 25, 112],
                    mintcream: [245, 255, 250],
                    mistyrose: [255, 228, 225],
                    moccasin: [255, 228, 181],
                    navajowhite: [255, 222, 173],
                    navy: [0, 0, 128],
                    oldlace: [253, 245, 230],
                    olive: [128, 128, 0],
                    olivedrab: [107, 142, 35],
                    orange: [255, 165, 0],
                    orangered: [255, 69, 0],
                    orchid: [218, 112, 214],
                    palegoldenrod: [238, 232, 170],
                    palegreen: [152, 251, 152],
                    paleturquoise: [175, 238, 238],
                    palevioletred: [219, 112, 147],
                    papayawhip: [255, 239, 213],
                    peachpuff: [255, 218, 185],
                    peru: [205, 133, 63],
                    pink: [255, 192, 203],
                    plum: [221, 160, 221],
                    powderblue: [176, 224, 230],
                    purple: [128, 0, 128],
                    rebeccapurple: [102, 51, 153],
                    red: [255, 0, 0],
                    rosybrown: [188, 143, 143],
                    royalblue: [65, 105, 225],
                    saddlebrown: [139, 69, 19],
                    salmon: [250, 128, 114],
                    sandybrown: [244, 164, 96],
                    seagreen: [46, 139, 87],
                    seashell: [255, 245, 238],
                    sienna: [160, 82, 45],
                    silver: [192, 192, 192],
                    skyblue: [135, 206, 235],
                    slateblue: [106, 90, 205],
                    slategray: [112, 128, 144],
                    slategrey: [112, 128, 144],
                    snow: [255, 250, 250],
                    springgreen: [0, 255, 127],
                    steelblue: [70, 130, 180],
                    tan: [210, 180, 140],
                    teal: [0, 128, 128],
                    thistle: [216, 191, 216],
                    tomato: [255, 99, 71],
                    turquoise: [64, 224, 208],
                    violet: [238, 130, 238],
                    wheat: [245, 222, 179],
                    white: [255, 255, 255],
                    whitesmoke: [245, 245, 245],
                    yellow: [255, 255, 0],
                    yellowgreen: [154, 205, 50]
                },
                M = {};
            for (var S in w) M[JSON.stringify(w[S])] = S
        },
        ODdm: function(t, e, i) {
            "use strict";
            t.exports = function(t) {
                t.Bar = function(e, i) {
                    return i.type = "bar", new t(e, i)
                }
            }
        },
        OXbD: function(t, e, i) {
            "use strict";
            var n = i("CDJp"),
                a = i("K2E3"),
                o = i("RDha"),
                r = n.global.defaultColor;

            function s(t) {
                var e = this._view;
                return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2)
            }
            n._set("global", {
                elements: {
                    point: {
                        radius: 3,
                        pointStyle: "circle",
                        backgroundColor: r,
                        borderColor: r,
                        borderWidth: 1,
                        hitRadius: 1,
                        hoverRadius: 4,
                        hoverBorderWidth: 1
                    }
                }
            }), t.exports = a.extend({
                inRange: function(t, e) {
                    var i = this._view;
                    return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2)
                },
                inLabelRange: s,
                inXRange: s,
                inYRange: function(t) {
                    var e = this._view;
                    return !!e && Math.pow(t - e.y, 2) < Math.pow(e.radius + e.hitRadius, 2)
                },
                getCenterPoint: function() {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y
                    }
                },
                getArea: function() {
                    return Math.PI * Math.pow(this._view.radius, 2)
                },
                tooltipPosition: function() {
                    var t = this._view;
                    return {
                        x: t.x,
                        y: t.y,
                        padding: t.radius + t.borderWidth
                    }
                },
                draw: function(t) {
                    var e = this._view,
                        i = this._model,
                        a = this._chart.ctx,
                        s = e.pointStyle,
                        l = e.radius,
                        u = e.x,
                        d = e.y,
                        c = o.color,
                        h = 0;
                    e.skip || (a.strokeStyle = e.borderColor || r, a.lineWidth = o.valueOrDefault(e.borderWidth, n.global.elements.point.borderWidth), a.fillStyle = e.backgroundColor || r, void 0 !== t && (i.x < t.left || 1.01 * t.right < i.x || i.y < t.top || 1.01 * t.bottom < i.y) && (i.x < t.left ? h = (u - i.x) / (t.left - i.x) : 1.01 * t.right < i.x ? h = (i.x - u) / (i.x - t.right) : i.y < t.top ? h = (d - i.y) / (t.top - i.y) : 1.01 * t.bottom < i.y && (h = (i.y - d) / (i.y - t.bottom)), h = Math.round(100 * h) / 100, a.strokeStyle = c(a.strokeStyle).alpha(h).rgbString(), a.fillStyle = c(a.fillStyle).alpha(h).rgbString()), o.canvas.drawPoint(a, s, l, u, d))
                }
            })
        },
        OzsZ: function(t, e, i) {
            var n = i("LdGl"),
                a = function() {
                    return new u
                };
            for (var o in n) {
                a[o + "Raw"] = function(t) {
                    return function(e) {
                        return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), n[t](e)
                    }
                }(o);
                var r = /(\w+)2(\w+)/.exec(o),
                    s = r[1],
                    l = r[2];
                (a[s] = a[s] || {})[l] = a[o] = function(t) {
                    return function(e) {
                        "number" == typeof e && (e = Array.prototype.slice.call(arguments));
                        var i = n[t](e);
                        if ("string" == typeof i || void 0 === i) return i;
                        for (var a = 0; a < i.length; a++) i[a] = Math.round(i[a]);
                        return i
                    }
                }(o)
            }
            var u = function() {
                this.convs = {}
            };
            u.prototype.routeSpace = function(t, e) {
                var i = e[0];
                return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i))
            }, u.prototype.setValues = function(t, e) {
                return this.space = t, this.convs = {}, this.convs[t] = e, this
            }, u.prototype.getValues = function(t) {
                var e = this.convs[t];
                if (!e) {
                    var i = this.space,
                        n = this.convs[i];
                    e = a[i][t](n), this.convs[t] = e
                }
                return e
            }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(t) {
                u.prototype[t] = function(e) {
                    return this.routeSpace(t, arguments)
                }
            }), t.exports = a
        },
        Qexa: function(t, e, i) {
            "use strict";
            t.exports = function(t) {
                t.Bubble = function(e, i) {
                    return i.type = "bubble", new t(e, i)
                }
            }
        },
        RCHg: function(t, e, i) {
            "use strict";
            var n = i("wd/R");
            n = "function" == typeof n ? n : window.moment;
            var a = i("CDJp"),
                o = i("RDha"),
                r = Number.MIN_SAFE_INTEGER || -9007199254740991,
                s = Number.MAX_SAFE_INTEGER || 9007199254740991,
                l = {
                    millisecond: {
                        common: !0,
                        size: 1,
                        steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
                    },
                    second: {
                        common: !0,
                        size: 1e3,
                        steps: [1, 2, 5, 10, 30]
                    },
                    minute: {
                        common: !0,
                        size: 6e4,
                        steps: [1, 2, 5, 10, 30]
                    },
                    hour: {
                        common: !0,
                        size: 36e5,
                        steps: [1, 2, 3, 6, 12]
                    },
                    day: {
                        common: !0,
                        size: 864e5,
                        steps: [1, 2, 5]
                    },
                    week: {
                        common: !1,
                        size: 6048e5,
                        steps: [1, 2, 3, 4]
                    },
                    month: {
                        common: !0,
                        size: 2628e6,
                        steps: [1, 2, 3]
                    },
                    quarter: {
                        common: !1,
                        size: 7884e6,
                        steps: [1, 2, 3, 4]
                    },
                    year: {
                        common: !0,
                        size: 3154e7
                    }
                },
                u = Object.keys(l);

            function d(t, e) {
                return t - e
            }

            function c(t) {
                var e, i, n, a = {},
                    o = [];
                for (e = 0, i = t.length; e < i; ++e) a[n = t[e]] || (a[n] = !0, o.push(n));
                return o
            }

            function h(t, e, i, n) {
                var a = function(t, e, i) {
                        for (var n, a, o, r = 0, s = t.length - 1; r >= 0 && r <= s;) {
                            if (a = t[(n = r + s >> 1) - 1] || null, o = t[n], !a) return {
                                lo: null,
                                hi: o
                            };
                            if (o[e] < i) r = n + 1;
                            else {
                                if (!(a[e] > i)) return {
                                    lo: a,
                                    hi: o
                                };
                                s = n - 1
                            }
                        }
                        return {
                            lo: o,
                            hi: null
                        }
                    }(t, e, i),
                    o = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0],
                    r = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
                    s = r[e] - o[e],
                    l = s ? (i - o[e]) / s : 0,
                    u = (r[n] - o[n]) * l;
                return o[n] + u
            }

            function f(t, e) {
                var i = e.parser,
                    a = e.parser || e.format;
                return "function" == typeof i ? i(t) : "string" == typeof t && "string" == typeof a ? n(t, a) : (t instanceof n || (t = n(t)), t.isValid() ? t : "function" == typeof a ? a(t) : t)
            }

            function g(t, e) {
                if (o.isNullOrUndef(t)) return null;
                var i = e.options.time,
                    n = f(e.getRightValue(t), i);
                return n.isValid() ? (i.round && n.startOf(i.round), n.valueOf()) : null
            }

            function p(t) {
                for (var e = u.indexOf(t) + 1, i = u.length; e < i; ++e)
                    if (l[u[e]].common) return u[e]
            }

            function v(t, e, i, a) {
                var r, d = a.time,
                    c = d.unit || function(t, e, i, n) {
                        var a, o, r, d = u.length;
                        for (a = u.indexOf(t); a < d - 1; ++a)
                            if (r = (o = l[u[a]]).steps ? o.steps[o.steps.length - 1] : s, o.common && Math.ceil((i - e) / (r * o.size)) <= n) return u[a];
                        return u[d - 1]
                    }(d.minUnit, t, e, i),
                    h = p(c),
                    f = o.valueOrDefault(d.stepSize, d.unitStepSize),
                    g = "week" === c && d.isoWeekday,
                    v = a.ticks.major.enabled,
                    m = l[c],
                    b = n(t),
                    x = n(e),
                    y = [];
                for (f || (f = function(t, e, i, n) {
                        var a, o, r, s = e - t,
                            u = l[i],
                            d = u.size,
                            c = u.steps;
                        if (!c) return Math.ceil(s / ((n || 1) * d));
                        for (a = 0, o = c.length; a < o && (r = c[a], !(Math.ceil(s / (d * r)) <= n)); ++a);
                        return r
                    }(t, e, c, i)), g && (b = b.isoWeekday(g), x = x.isoWeekday(g)), b = b.startOf(g ? "day" : c), (x = x.startOf(g ? "day" : c)) < e && x.add(1, c), r = n(b), v && h && !g && !d.round && (r.startOf(h), r.add(~~((b - r) / (m.size * f)) * f, c)); r < x; r.add(f, c)) y.push(+r);
                return y.push(+r), y
            }
            t.exports = function(t) {
                var e = t.Scale.extend({
                    initialize: function() {
                        if (!n) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                        this.mergeTicksOptions(), t.Scale.prototype.initialize.call(this)
                    },
                    update: function() {
                        var e = this.options;
                        return e.time && e.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), t.Scale.prototype.update.apply(this, arguments)
                    },
                    getRightValue: function(e) {
                        return e && void 0 !== e.t && (e = e.t), t.Scale.prototype.getRightValue.call(this, e)
                    },
                    determineDataLimits: function() {
                        var t, e, i, a, l, u, h = this,
                            f = h.chart,
                            p = h.options.time,
                            v = s,
                            m = r,
                            b = [],
                            x = [],
                            y = [];
                        for (t = 0, i = f.data.labels.length; t < i; ++t) y.push(g(f.data.labels[t], h));
                        for (t = 0, i = (f.data.datasets || []).length; t < i; ++t)
                            if (f.isDatasetVisible(t))
                                if (l = f.data.datasets[t].data, o.isObject(l[0]))
                                    for (x[t] = [], e = 0, a = l.length; e < a; ++e) u = g(l[e], h), b.push(u), x[t][e] = u;
                                else b.push.apply(b, y), x[t] = y.slice(0);
                        else x[t] = [];
                        y.length && (y = c(y).sort(d), v = Math.min(v, y[0]), m = Math.max(m, y[y.length - 1])), b.length && (b = c(b).sort(d), v = Math.min(v, b[0]), m = Math.max(m, b[b.length - 1])), v = g(p.min, h) || v, m = g(p.max, h) || m, v = v === s ? +n().startOf("day") : v, m = m === r ? +n().endOf("day") + 1 : m, h.min = Math.min(v, m), h.max = Math.max(v + 1, m), h._horizontal = h.isHorizontal(), h._table = [], h._timestamps = {
                            data: b,
                            datasets: x,
                            labels: y
                        }
                    },
                    buildTicks: function() {
                        var t, e, i, a = this,
                            o = a.min,
                            r = a.max,
                            s = a.options,
                            d = s.time,
                            c = [],
                            f = [];
                        switch (s.ticks.source) {
                            case "data":
                                c = a._timestamps.data;
                                break;
                            case "labels":
                                c = a._timestamps.labels;
                                break;
                            case "auto":
                            default:
                                c = v(o, r, a.getLabelCapacity(o), s)
                        }
                        for ("ticks" === s.bounds && c.length && (o = c[0], r = c[c.length - 1]), o = g(d.min, a) || o, r = g(d.max, a) || r, t = 0, e = c.length; t < e; ++t)(i = c[t]) >= o && i <= r && f.push(i);
                        return a.min = o, a.max = r, a._unit = d.unit || function(t, e, i, a) {
                                var o, r, s = n.duration(n(a).diff(n(i)));
                                for (o = u.length - 1; o >= u.indexOf(e); o--)
                                    if (r = u[o], l[r].common && s.as(r) >= t.length) return r;
                                return u[e ? u.indexOf(e) : 0]
                            }(f, d.minUnit, a.min, a.max), a._majorUnit = p(a._unit), a._table = function(t, e, i, n) {
                                if ("linear" === n || !t.length) return [{
                                    time: e,
                                    pos: 0
                                }, {
                                    time: i,
                                    pos: 1
                                }];
                                var a, o, r, s, l, u = [],
                                    d = [e];
                                for (a = 0, o = t.length; a < o; ++a)(s = t[a]) > e && s < i && d.push(s);
                                for (d.push(i), a = 0, o = d.length; a < o; ++a) l = d[a + 1], r = d[a - 1], s = d[a], void 0 !== r && void 0 !== l && Math.round((l + r) / 2) === s || u.push({
                                    time: s,
                                    pos: a / (o - 1)
                                });
                                return u
                            }(a._timestamps.data, o, r, s.distribution), a._offsets = function(t, e, i, n, a) {
                                var o, r, s = 0,
                                    l = 0;
                                return a.offset && e.length && (a.time.min || (o = e.length > 1 ? e[1] : n, r = e[0], s = (h(t, "time", o, "pos") - h(t, "time", r, "pos")) / 2), a.time.max || (o = e[e.length - 1], r = e.length > 1 ? e[e.length - 2] : i, l = (h(t, "time", o, "pos") - h(t, "time", r, "pos")) / 2)), {
                                    left: s,
                                    right: l
                                }
                            }(a._table, f, o, r, s),
                            function(t, e) {
                                var i, a, o, r, s = [];
                                for (i = 0, a = t.length; i < a; ++i) o = t[i], r = !!e && o === +n(o).startOf(e), s.push({
                                    value: o,
                                    major: r
                                });
                                return s
                            }(f, a._majorUnit)
                    },
                    getLabelForIndex: function(t, e) {
                        var i = this.chart.data,
                            n = this.options.time,
                            a = i.labels && t < i.labels.length ? i.labels[t] : "",
                            r = i.datasets[e].data[t];
                        return o.isObject(r) && (a = this.getRightValue(r)), n.tooltipFormat && (a = f(a, n).format(n.tooltipFormat)), a
                    },
                    tickFormatFunction: function(t, e, i, n) {
                        var a = this.options,
                            r = t.valueOf(),
                            s = a.time.displayFormats,
                            l = s[this._unit],
                            u = this._majorUnit,
                            d = s[u],
                            c = t.clone().startOf(u).valueOf(),
                            h = a.ticks.major,
                            f = h.enabled && u && d && r === c,
                            g = t.format(n || (f ? d : l)),
                            p = f ? h : a.ticks.minor,
                            v = o.valueOrDefault(p.callback, p.userCallback);
                        return v ? v(g, e, i) : g
                    },
                    convertTicksToLabels: function(t) {
                        var e, i, a = [];
                        for (e = 0, i = t.length; e < i; ++e) a.push(this.tickFormatFunction(n(t[e].value), e, t));
                        return a
                    },
                    getPixelForOffset: function(t) {
                        var e = this,
                            i = e._horizontal ? e.width : e.height,
                            n = e._horizontal ? e.left : e.top,
                            a = h(e._table, "time", t, "pos");
                        return n + i * (e._offsets.left + a) / (e._offsets.left + 1 + e._offsets.right)
                    },
                    getPixelForValue: function(t, e, i) {
                        var n = null;
                        if (void 0 !== e && void 0 !== i && (n = this._timestamps.datasets[i][e]), null === n && (n = g(t, this)), null !== n) return this.getPixelForOffset(n)
                    },
                    getPixelForTick: function(t) {
                        var e = this.getTicks();
                        return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
                    },
                    getValueForPixel: function(t) {
                        var e = this,
                            i = e._horizontal ? e.width : e.height,
                            a = e._horizontal ? e.left : e.top,
                            o = (i ? (t - a) / i : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
                            r = h(e._table, "pos", o, "time");
                        return n(r)
                    },
                    getLabelWidth: function(t) {
                        var e = this.options.ticks,
                            i = this.ctx.measureText(t).width,
                            n = o.toRadians(e.maxRotation),
                            r = Math.cos(n),
                            s = Math.sin(n);
                        return i * r + o.valueOrDefault(e.fontSize, a.global.defaultFontSize) * s
                    },
                    getLabelCapacity: function(t) {
                        var e = this,
                            i = e.options.time.displayFormats.millisecond,
                            a = e.tickFormatFunction(n(t), 0, [], i),
                            o = e.getLabelWidth(a),
                            r = e.isHorizontal() ? e.width : e.height;
                        return Math.floor(r / o)
                    }
                });
                t.scaleService.registerScaleType("time", e, {
                    position: "bottom",
                    distribution: "linear",
                    bounds: "data",
                    time: {
                        parser: !1,
                        format: !1,
                        unit: !1,
                        round: !1,
                        displayFormat: !1,
                        isoWeekday: !1,
                        minUnit: "millisecond",
                        displayFormats: {
                            millisecond: "h:mm:ss.SSS a",
                            second: "h:mm:ss a",
                            minute: "h:mm a",
                            hour: "hA",
                            day: "MMM D",
                            week: "ll",
                            month: "MMM YYYY",
                            quarter: "[Q]Q - YYYY",
                            year: "YYYY"
                        }
                    },
                    ticks: {
                        autoSkip: !1,
                        source: "auto",
                        major: {
                            enabled: !1
                        }
                    }
                })
            }
        },
        RDha: function(t, e, i) {
            "use strict";
            t.exports = i("TC34"), t.exports.easing = i("u0Op"), t.exports.canvas = i("Sfow"), t.exports.options = i("As3K")
        },
        "S3/U": function(t, e, i) {
            "use strict";
            t.exports = function(t) {
                t.Scatter = function(e, i) {
                    return i.type = "scatter", new t(e, i)
                }
            }
        },
        S7Ns: function(t, e, i) {
            "use strict";
            t.exports = function(t) {
                t.Doughnut = function(e, i) {
                    return i.type = "doughnut", new t(e, i)
                }
            }
        },
        Sfow: function(t, e, i) {
            "use strict";
            var n = i("TC34");
            e = t.exports = {
                clear: function(t) {
                    t.ctx.clearRect(0, 0, t.width, t.height)
                },
                roundedRect: function(t, e, i, n, a, o) {
                    if (o) {
                        var r = Math.min(o, n / 2),
                            s = Math.min(o, a / 2);
                        t.moveTo(e + r, i), t.lineTo(e + n - r, i), t.quadraticCurveTo(e + n, i, e + n, i + s), t.lineTo(e + n, i + a - s), t.quadraticCurveTo(e + n, i + a, e + n - r, i + a), t.lineTo(e + r, i + a), t.quadraticCurveTo(e, i + a, e, i + a - s), t.lineTo(e, i + s), t.quadraticCurveTo(e, i, e + r, i)
                    } else t.rect(e, i, n, a)
                },
                drawPoint: function(t, e, i, n, a) {
                    var o, r, s, l, u, d;
                    if (!e || "object" != typeof e || "[object HTMLImageElement]" !== (o = e.toString()) && "[object HTMLCanvasElement]" !== o) {
                        if (!(isNaN(i) || i <= 0)) {
                            switch (e) {
                                default: t.beginPath(),
                                t.arc(n, a, i, 0, 2 * Math.PI),
                                t.closePath(),
                                t.fill();
                                break;
                                case "triangle":
                                        t.beginPath(),
                                    u = (r = 3 * i / Math.sqrt(3)) * Math.sqrt(3) / 2,
                                    t.moveTo(n - r / 2, a + u / 3),
                                    t.lineTo(n + r / 2, a + u / 3),
                                    t.lineTo(n, a - 2 * u / 3),
                                    t.closePath(),
                                    t.fill();
                                    break;
                                case "rect":
                                        d = 1 / Math.SQRT2 * i,
                                    t.beginPath(),
                                    t.fillRect(n - d, a - d, 2 * d, 2 * d),
                                    t.strokeRect(n - d, a - d, 2 * d, 2 * d);
                                    break;
                                case "rectRounded":
                                        var c = i / Math.SQRT2,
                                        h = n - c,
                                        f = a - c,
                                        g = Math.SQRT2 * i;t.beginPath(),
                                    this.roundedRect(t, h, f, g, g, i / 2),
                                    t.closePath(),
                                    t.fill();
                                    break;
                                case "rectRot":
                                        d = 1 / Math.SQRT2 * i,
                                    t.beginPath(),
                                    t.moveTo(n - d, a),
                                    t.lineTo(n, a + d),
                                    t.lineTo(n + d, a),
                                    t.lineTo(n, a - d),
                                    t.closePath(),
                                    t.fill();
                                    break;
                                case "cross":
                                        t.beginPath(),
                                    t.moveTo(n, a + i),
                                    t.lineTo(n, a - i),
                                    t.moveTo(n - i, a),
                                    t.lineTo(n + i, a),
                                    t.closePath();
                                    break;
                                case "crossRot":
                                        t.beginPath(),
                                    s = Math.cos(Math.PI / 4) * i,
                                    l = Math.sin(Math.PI / 4) * i,
                                    t.moveTo(n - s, a - l),
                                    t.lineTo(n + s, a + l),
                                    t.moveTo(n - s, a + l),
                                    t.lineTo(n + s, a - l),
                                    t.closePath();
                                    break;
                                case "star":
                                        t.beginPath(),
                                    t.moveTo(n, a + i),
                                    t.lineTo(n, a - i),
                                    t.moveTo(n - i, a),
                                    t.lineTo(n + i, a),
                                    s = Math.cos(Math.PI / 4) * i,
                                    l = Math.sin(Math.PI / 4) * i,
                                    t.moveTo(n - s, a - l),
                                    t.lineTo(n + s, a + l),
                                    t.moveTo(n - s, a + l),
                                    t.lineTo(n + s, a - l),
                                    t.closePath();
                                    break;
                                case "line":
                                        t.beginPath(),
                                    t.moveTo(n - i, a),
                                    t.lineTo(n + i, a),
                                    t.closePath();
                                    break;
                                case "dash":
                                        t.beginPath(),
                                    t.moveTo(n, a),
                                    t.lineTo(n + i, a),
                                    t.closePath()
                            }
                            t.stroke()
                        }
                    } else t.drawImage(e, n - e.width / 2, a - e.height / 2, e.width, e.height)
                },
                clipArea: function(t, e) {
                    t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
                },
                unclipArea: function(t) {
                    t.restore()
                },
                lineTo: function(t, e, i, n) {
                    if (i.steppedLine) return "after" === i.steppedLine && !n || "after" !== i.steppedLine && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y), void t.lineTo(i.x, i.y);
                    i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y)
                }
            };
            n.clear = e.clear, n.drawRoundedRectangle = function(t) {
                t.beginPath(), e.roundedRect.apply(e, arguments), t.closePath()
            }
        },
        TC34: function(t, e, i) {
            "use strict";
            var n = {
                noop: function() {},
                uid: function() {
                    var t = 0;
                    return function() {
                        return t++
                    }
                }(),
                isNullOrUndef: function(t) {
                    return null === t || void 0 === t
                },
                isArray: Array.isArray ? Array.isArray : function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                isObject: function(t) {
                    return null !== t && "[object Object]" === Object.prototype.toString.call(t)
                },
                valueOrDefault: function(t, e) {
                    return void 0 === t ? e : t
                },
                valueAtIndexOrDefault: function(t, e, i) {
                    return n.valueOrDefault(n.isArray(t) ? t[e] : t, i)
                },
                callback: function(t, e, i) {
                    if (t && "function" == typeof t.call) return t.apply(i, e)
                },
                each: function(t, e, i, a) {
                    var o, r, s;
                    if (n.isArray(t))
                        if (r = t.length, a)
                            for (o = r - 1; o >= 0; o--) e.call(i, t[o], o);
                        else
                            for (o = 0; o < r; o++) e.call(i, t[o], o);
                    else if (n.isObject(t))
                        for (r = (s = Object.keys(t)).length, o = 0; o < r; o++) e.call(i, t[s[o]], s[o])
                },
                arrayEquals: function(t, e) {
                    var i, a, o, r;
                    if (!t || !e || t.length !== e.length) return !1;
                    for (i = 0, a = t.length; i < a; ++i)
                        if (o = t[i], r = e[i], o instanceof Array && r instanceof Array) {
                            if (!n.arrayEquals(o, r)) return !1
                        } else if (o !== r) return !1;
                    return !0
                },
                clone: function(t) {
                    if (n.isArray(t)) return t.map(n.clone);
                    if (n.isObject(t)) {
                        for (var e = {}, i = Object.keys(t), a = i.length, o = 0; o < a; ++o) e[i[o]] = n.clone(t[i[o]]);
                        return e
                    }
                    return t
                },
                _merger: function(t, e, i, a) {
                    var o = e[t],
                        r = i[t];
                    n.isObject(o) && n.isObject(r) ? n.merge(o, r, a) : e[t] = n.clone(r)
                },
                _mergerIf: function(t, e, i) {
                    var a = e[t],
                        o = i[t];
                    n.isObject(a) && n.isObject(o) ? n.mergeIf(a, o) : e.hasOwnProperty(t) || (e[t] = n.clone(o))
                },
                merge: function(t, e, i) {
                    var a, o, r, s, l, u = n.isArray(e) ? e : [e],
                        d = u.length;
                    if (!n.isObject(t)) return t;
                    for (a = (i = i || {}).merger || n._merger, o = 0; o < d; ++o)
                        if (e = u[o], n.isObject(e))
                            for (l = 0, s = (r = Object.keys(e)).length; l < s; ++l) a(r[l], t, e, i);
                    return t
                },
                mergeIf: function(t, e) {
                    return n.merge(t, e, {
                        merger: n._mergerIf
                    })
                },
                extend: function(t) {
                    for (var e = function(e, i) {
                            t[i] = e
                        }, i = 1, a = arguments.length; i < a; ++i) n.each(arguments[i], e);
                    return t
                },
                inherits: function(t) {
                    var e = this,
                        i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                            return e.apply(this, arguments)
                        },
                        a = function() {
                            this.constructor = i
                        };
                    return a.prototype = e.prototype, i.prototype = new a, i.extend = n.inherits, t && n.extend(i.prototype, t), i.__super__ = e.prototype, i
                }
            };
            t.exports = n, n.callCallback = n.callback, n.indexOf = function(t, e, i) {
                return Array.prototype.indexOf.call(t, e, i)
            }, n.getValueOrDefault = n.valueOrDefault, n.getValueAtIndexOrDefault = n.valueAtIndexOrDefault
        },
        UWmW: function(t, e, i) {
            "use strict";
            var n = i("RDha");
            t.exports = function(t) {
                function e(t, e) {
                    return n.where(t, function(t) {
                        return t.position === e
                    })
                }

                function i(t, e) {
                    t.forEach(function(t, e) {
                        return t._tmpIndex_ = e, t
                    }), t.sort(function(t, i) {
                        var n = e ? i : t,
                            a = e ? t : i;
                        return n.weight === a.weight ? n._tmpIndex_ - a._tmpIndex_ : n.weight - a.weight
                    }), t.forEach(function(t) {
                        delete t._tmpIndex_
                    })
                }
                t.layoutService = {
                    defaults: {},
                    addBox: function(t, e) {
                        t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e)
                    },
                    removeBox: function(t, e) {
                        var i = t.boxes ? t.boxes.indexOf(e) : -1; - 1 !== i && t.boxes.splice(i, 1)
                    },
                    configure: function(t, e, i) {
                        for (var n, a = ["fullWidth", "position", "weight"], o = a.length, r = 0; r < o; ++r) n = a[r], i.hasOwnProperty(n) && (e[n] = i[n])
                    },
                    update: function(t, a, o) {
                        if (t) {
                            var r = t.options.layout || {},
                                s = n.options.toPadding(r.padding),
                                l = s.left,
                                u = s.right,
                                d = s.top,
                                c = s.bottom,
                                h = e(t.boxes, "left"),
                                f = e(t.boxes, "right"),
                                g = e(t.boxes, "top"),
                                p = e(t.boxes, "bottom"),
                                v = e(t.boxes, "chartArea");
                            i(h, !0), i(f, !1), i(g, !0), i(p, !1);
                            var m = a - l - u,
                                b = o - d - c,
                                x = b / 2,
                                y = (a - m / 2) / (h.length + f.length),
                                k = (o - x) / (g.length + p.length),
                                C = m,
                                w = b,
                                M = [];
                            n.each(h.concat(f, g, p), function(t) {
                                var e, i = t.isHorizontal();
                                i ? (e = t.update(t.fullWidth ? m : C, k), w -= e.height) : (e = t.update(y, x), C -= e.width), M.push({
                                    horizontal: i,
                                    minSize: e,
                                    box: t
                                })
                            });
                            var S = 0,
                                D = 0,
                                _ = 0,
                                A = 0;
                            n.each(g.concat(p), function(t) {
                                if (t.getPadding) {
                                    var e = t.getPadding();
                                    S = Math.max(S, e.left), D = Math.max(D, e.right)
                                }
                            }), n.each(h.concat(f), function(t) {
                                if (t.getPadding) {
                                    var e = t.getPadding();
                                    _ = Math.max(_, e.top), A = Math.max(A, e.bottom)
                                }
                            });
                            var P = l,
                                I = u,
                                T = d,
                                F = c;
                            n.each(h.concat(f), N), n.each(h, function(t) {
                                P += t.width
                            }), n.each(f, function(t) {
                                I += t.width
                            }), n.each(g.concat(p), N), n.each(g, function(t) {
                                T += t.height
                            }), n.each(p, function(t) {
                                F += t.height
                            }), n.each(h.concat(f), function(t) {
                                var e = n.findNextWhere(M, function(e) {
                                        return e.box === t
                                    }),
                                    i = {
                                        left: 0,
                                        right: 0,
                                        top: T,
                                        bottom: F
                                    };
                                e && t.update(e.minSize.width, w, i)
                            }), P = l, I = u, T = d, F = c, n.each(h, function(t) {
                                P += t.width
                            }), n.each(f, function(t) {
                                I += t.width
                            }), n.each(g, function(t) {
                                T += t.height
                            }), n.each(p, function(t) {
                                F += t.height
                            });
                            var R = Math.max(S - P, 0);
                            P += R, I += Math.max(D - I, 0);
                            var O = Math.max(_ - T, 0);
                            T += O, F += Math.max(A - F, 0);
                            var L = o - T - F,
                                z = a - P - I;
                            z === C && L === w || (n.each(h, function(t) {
                                t.height = L
                            }), n.each(f, function(t) {
                                t.height = L
                            }), n.each(g, function(t) {
                                t.fullWidth || (t.width = z)
                            }), n.each(p, function(t) {
                                t.fullWidth || (t.width = z)
                            }), w = L, C = z);
                            var B = l + R,
                                W = d + O;
                            n.each(h.concat(g), V), B += C, W += w, n.each(f, V), n.each(p, V), t.chartArea = {
                                left: P,
                                top: T,
                                right: P + C,
                                bottom: T + w
                            }, n.each(v, function(e) {
                                e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(C, w)
                            })
                        }

                        function N(t) {
                            var e = n.findNextWhere(M, function(e) {
                                return e.box === t
                            });
                            if (e)
                                if (t.isHorizontal()) {
                                    var i = {
                                        left: Math.max(P, S),
                                        right: Math.max(I, D),
                                        top: 0,
                                        bottom: 0
                                    };
                                    t.update(t.fullWidth ? m : C, b / 2, i)
                                } else t.update(e.minSize.width, w)
                        }

                        function V(t) {
                            t.isHorizontal() ? (t.left = t.fullWidth ? l : P, t.right = t.fullWidth ? a - u : P + C, t.top = W, t.bottom = W + t.height, W = t.bottom) : (t.left = B, t.right = B + t.width, t.top = T, t.bottom = T + w, B = t.right)
                        }
                    }
                }
            }
        },
        UqmZ: function(t, e, i) {
            "use strict";
            var n = i("CDJp"),
                a = i("K2E3"),
                o = i("RDha"),
                r = n.global;
            n._set("global", {
                elements: {
                    line: {
                        tension: .4,
                        backgroundColor: r.defaultColor,
                        borderWidth: 3,
                        borderColor: r.defaultColor,
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: "miter",
                        capBezierPoints: !0,
                        fill: !0
                    }
                }
            }), t.exports = a.extend({
                draw: function() {
                    var t, e, i, n, a = this._view,
                        s = this._chart.ctx,
                        l = a.spanGaps,
                        u = this._children.slice(),
                        d = r.elements.line,
                        c = -1;
                    for (this._loop && u.length && u.push(u[0]), s.save(), s.lineCap = a.borderCapStyle || d.borderCapStyle, s.setLineDash && s.setLineDash(a.borderDash || d.borderDash), s.lineDashOffset = a.borderDashOffset || d.borderDashOffset, s.lineJoin = a.borderJoinStyle || d.borderJoinStyle, s.lineWidth = a.borderWidth || d.borderWidth, s.strokeStyle = a.borderColor || r.defaultColor, s.beginPath(), c = -1, t = 0; t < u.length; ++t) e = u[t], i = o.previousItem(u, t), n = e._view, 0 === t ? n.skip || (s.moveTo(n.x, n.y), c = t) : (i = -1 === c ? i : u[c], n.skip || (c !== t - 1 && !l || -1 === c ? s.moveTo(n.x, n.y) : o.canvas.lineTo(s, i._view, e._view), c = t));
                    s.stroke(), s.restore()
                }
            })
        },
        WyAD: function(t, e, i) {
            var n = i("yPMN")();
            n.helpers = i("RDha"), i("nDWh")(n), n.defaults = i("CDJp"), n.Element = i("K2E3"), n.elements = i("vvH+"), n.Interaction = i("mlr9"), n.platform = i("iM7B"), i("IYT7")(n), i("A5uo")(n), i("6rqY")(n), i("KAQS")(n), i("UWmW")(n), i("tjFV")(n), i("cdu6")(n), i("x8uC")(n), i("paOr")(n), i("8TtQ")(n), i("YSsK")(n), i("Y4Rb")(n), i("8//i")(n), i("RCHg")(n), i("ZANz")(n), i("bidN")(n), i("XQh+")(n), i("G0Q6")(n), i("5ZZ7")(n), i("aB2c")(n), i("35yf")(n), i("ODdm")(n), i("Qexa")(n), i("S7Ns")(n), i("7O6V")(n), i("qzaf")(n), i("iYGd")(n), i("S3/U")(n);
            var a = [];
            a.push(i("vpM6")(n), i("AX6q")(n), i("mjYD")(n)), n.plugins.register(a), n.platform.initialize(), t.exports = n, "undefined" != typeof window && (window.Chart = n), n.canvasHelpers = n.helpers.canvas
        },
        X8CM: function(t, e, i) {
            "use strict";
            var n = i("CDJp"),
                a = i("K2E3"),
                o = i("RDha");
            n._set("global", {
                elements: {
                    arc: {
                        backgroundColor: n.global.defaultColor,
                        borderColor: "#fff",
                        borderWidth: 2
                    }
                }
            }), t.exports = a.extend({
                inLabelRange: function(t) {
                    var e = this._view;
                    return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                },
                inRange: function(t, e) {
                    var i = this._view;
                    if (i) {
                        for (var n = o.getAngleFromPoint(i, {
                                x: t,
                                y: e
                            }), a = n.angle, r = n.distance, s = i.startAngle, l = i.endAngle; l < s;) l += 2 * Math.PI;
                        for (; a > l;) a -= 2 * Math.PI;
                        for (; a < s;) a += 2 * Math.PI;
                        var u = a >= s && a <= l,
                            d = r >= i.innerRadius && r <= i.outerRadius;
                        return u && d
                    }
                    return !1
                },
                getCenterPoint: function() {
                    var t = this._view,
                        e = (t.startAngle + t.endAngle) / 2,
                        i = (t.innerRadius + t.outerRadius) / 2;
                    return {
                        x: t.x + Math.cos(e) * i,
                        y: t.y + Math.sin(e) * i
                    }
                },
                getArea: function() {
                    var t = this._view;
                    return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                },
                tooltipPosition: function() {
                    var t = this._view,
                        e = t.startAngle + (t.endAngle - t.startAngle) / 2,
                        i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                    return {
                        x: t.x + Math.cos(e) * i,
                        y: t.y + Math.sin(e) * i
                    }
                },
                draw: function() {
                    var t = this._chart.ctx,
                        e = this._view,
                        i = e.startAngle,
                        n = e.endAngle;
                    t.beginPath(), t.arc(e.x, e.y, e.outerRadius, i, n), t.arc(e.x, e.y, e.innerRadius, n, i, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
                }
            })
        },
        "XQh+": function(t, e, i) {
            "use strict";
            var n = i("CDJp"),
                a = i("vvH+"),
                o = i("RDha");
            n._set("doughnut", {
                animation: {
                    animateRotate: !0,
                    animateScale: !1
                },
                hover: {
                    mode: "single"
                },
                legendCallback: function(t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    var i = t.data,
                        n = i.datasets,
                        a = i.labels;
                    if (n.length)
                        for (var o = 0; o < n[0].data.length; ++o) e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function(t) {
                            var e = t.data;
                            return e.labels.length && e.datasets.length ? e.labels.map(function(i, n) {
                                var a = t.getDatasetMeta(0),
                                    r = e.datasets[0],
                                    s = a.data[n],
                                    l = s && s.custom || {},
                                    u = o.valueAtIndexOrDefault,
                                    d = t.options.elements.arc;
                                return {
                                    text: i,
                                    fillStyle: l.backgroundColor ? l.backgroundColor : u(r.backgroundColor, n, d.backgroundColor),
                                    strokeStyle: l.borderColor ? l.borderColor : u(r.borderColor, n, d.borderColor),
                                    lineWidth: l.borderWidth ? l.borderWidth : u(r.borderWidth, n, d.borderWidth),
                                    hidden: isNaN(r.data[n]) || a.data[n].hidden,
                                    index: n
                                }
                            }) : []
                        }
                    },
                    onClick: function(t, e) {
                        var i, n, a, o = e.index,
                            r = this.chart;
                        for (i = 0, n = (r.data.datasets || []).length; i < n; ++i)(a = r.getDatasetMeta(i)).data[o] && (a.data[o].hidden = !a.data[o].hidden);
                        r.update()
                    }
                },
                cutoutPercentage: 50,
                rotation: -.5 * Math.PI,
                circumference: 2 * Math.PI,
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t, e) {
                            var i = e.labels[t.index],
                                n = ": " + e.datasets[t.datasetIndex].data[t.index];
                            return o.isArray(i) ? (i = i.slice())[0] += n : i += n, i
                        }
                    }
                }
            }), n._set("pie", o.clone(n.doughnut)), n._set("pie", {
                cutoutPercentage: 0
            }), t.exports = function(t) {
                t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                    dataElementType: a.Arc,
                    linkScales: o.noop,
                    getRingIndex: function(t) {
                        for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && ++e;
                        return e
                    },
                    update: function(t) {
                        var e = this,
                            i = e.chart,
                            n = i.chartArea,
                            a = i.options,
                            r = a.elements.arc,
                            s = n.right - n.left - r.borderWidth,
                            l = n.bottom - n.top - r.borderWidth,
                            u = Math.min(s, l),
                            d = {
                                x: 0,
                                y: 0
                            },
                            c = e.getMeta(),
                            h = a.cutoutPercentage,
                            f = a.circumference;
                        if (f < 2 * Math.PI) {
                            var g = a.rotation % (2 * Math.PI),
                                p = (g += 2 * Math.PI * (g >= Math.PI ? -1 : g < -Math.PI ? 1 : 0)) + f,
                                v = {
                                    x: Math.cos(g),
                                    y: Math.sin(g)
                                },
                                m = {
                                    x: Math.cos(p),
                                    y: Math.sin(p)
                                },
                                b = g <= 0 && p >= 0 || g <= 2 * Math.PI && 2 * Math.PI <= p,
                                x = g <= .5 * Math.PI && .5 * Math.PI <= p || g <= 2.5 * Math.PI && 2.5 * Math.PI <= p,
                                y = g <= -Math.PI && -Math.PI <= p || g <= Math.PI && Math.PI <= p,
                                k = g <= .5 * -Math.PI && .5 * -Math.PI <= p || g <= 1.5 * Math.PI && 1.5 * Math.PI <= p,
                                C = h / 100,
                                w = {
                                    x: y ? -1 : Math.min(v.x * (v.x < 0 ? 1 : C), m.x * (m.x < 0 ? 1 : C)),
                                    y: k ? -1 : Math.min(v.y * (v.y < 0 ? 1 : C), m.y * (m.y < 0 ? 1 : C))
                                },
                                M = {
                                    x: b ? 1 : Math.max(v.x * (v.x > 0 ? 1 : C), m.x * (m.x > 0 ? 1 : C)),
                                    y: x ? 1 : Math.max(v.y * (v.y > 0 ? 1 : C), m.y * (m.y > 0 ? 1 : C))
                                },
                                S = {
                                    width: .5 * (M.x - w.x),
                                    height: .5 * (M.y - w.y)
                                };
                            u = Math.min(s / S.width, l / S.height), d = {
                                x: -.5 * (M.x + w.x),
                                y: -.5 * (M.y + w.y)
                            }
                        }
                        i.borderWidth = e.getMaxBorderWidth(c.data), i.outerRadius = Math.max((u - i.borderWidth) / 2, 0), i.innerRadius = Math.max(h ? i.outerRadius / 100 * h : 0, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), i.offsetX = d.x * i.outerRadius, i.offsetY = d.y * i.outerRadius, c.total = e.calculateTotal(), e.outerRadius = i.outerRadius - i.radiusLength * e.getRingIndex(e.index), e.innerRadius = Math.max(e.outerRadius - i.radiusLength, 0), o.each(c.data, function(i, n) {
                            e.updateElement(i, n, t)
                        })
                    },
                    updateElement: function(t, e, i) {
                        var n = this,
                            a = n.chart,
                            r = a.chartArea,
                            s = a.options,
                            l = s.animation,
                            u = (r.left + r.right) / 2,
                            d = (r.top + r.bottom) / 2,
                            c = s.rotation,
                            h = s.rotation,
                            f = n.getDataset(),
                            g = i && l.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(f.data[e]) * (s.circumference / (2 * Math.PI)),
                            p = i && l.animateScale ? 0 : n.innerRadius,
                            v = i && l.animateScale ? 0 : n.outerRadius,
                            m = o.valueAtIndexOrDefault;
                        o.extend(t, {
                            _datasetIndex: n.index,
                            _index: e,
                            _model: {
                                x: u + a.offsetX,
                                y: d + a.offsetY,
                                startAngle: c,
                                endAngle: h,
                                circumference: g,
                                outerRadius: v,
                                innerRadius: p,
                                label: m(f.label, e, a.data.labels[e])
                            }
                        });
                        var b = t._model;
                        this.removeHoverStyle(t), i && l.animateRotate || (b.startAngle = 0 === e ? s.rotation : n.getMeta().data[e - 1]._model.endAngle, b.endAngle = b.startAngle + b.circumference), t.pivot()
                    },
                    removeHoverStyle: function(e) {
                        t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                    },
                    calculateTotal: function() {
                        var t, e = this.getDataset(),
                            i = this.getMeta(),
                            n = 0;
                        return o.each(i.data, function(i, a) {
                            t = e.data[a], isNaN(t) || i.hidden || (n += Math.abs(t))
                        }), n
                    },
                    calculateCircumference: function(t) {
                        var e = this.getMeta().total;
                        return e > 0 && !isNaN(t) ? 2 * Math.PI * (t / e) : 0
                    },
                    getMaxBorderWidth: function(t) {
                        for (var e, i, n = 0, a = this.index, o = t.length, r = 0; r < o; r++) e = t[r]._model ? t[r]._model.borderWidth : 0, n = (i = t[r]._chart ? t[r]._chart.config.data.datasets[a].hoverBorderWidth : 0) > (n = e > n ? e : n) ? i : n;
                        return n
                    }
                })
            }
        },
        Y4Rb: function(t, e, i) {
            "use strict";
            var n = i("RDha"),
                a = i("g8vO");
            t.exports = function(t) {
                var e = {
                        position: "left",
                        ticks: {
                            callback: a.formatters.logarithmic
                        }
                    },
                    i = t.Scale.extend({
                        determineDataLimits: function() {
                            var t = this,
                                e = t.options,
                                i = e.ticks,
                                a = t.chart,
                                o = a.data.datasets,
                                r = n.valueOrDefault,
                                s = t.isHorizontal();

                            function l(e) {
                                return s ? e.xAxisID === t.id : e.yAxisID === t.id
                            }
                            t.min = null, t.max = null, t.minNotZero = null;
                            var u = e.stacked;
                            if (void 0 === u && n.each(o, function(t, e) {
                                    if (!u) {
                                        var i = a.getDatasetMeta(e);
                                        a.isDatasetVisible(e) && l(i) && void 0 !== i.stack && (u = !0)
                                    }
                                }), e.stacked || u) {
                                var d = {};
                                n.each(o, function(i, o) {
                                    var r = a.getDatasetMeta(o),
                                        s = [r.type, void 0 === e.stacked && void 0 === r.stack ? o : "", r.stack].join(".");
                                    a.isDatasetVisible(o) && l(r) && (void 0 === d[s] && (d[s] = []), n.each(i.data, function(i, n) {
                                        var a = d[s],
                                            o = +t.getRightValue(i);
                                        isNaN(o) || r.data[n].hidden || (a[n] = a[n] || 0, e.relativePoints ? a[n] = 100 : a[n] += o)
                                    }))
                                }), n.each(d, function(e) {
                                    var i = n.min(e),
                                        a = n.max(e);
                                    t.min = null === t.min ? i : Math.min(t.min, i), t.max = null === t.max ? a : Math.max(t.max, a)
                                })
                            } else n.each(o, function(e, i) {
                                var o = a.getDatasetMeta(i);
                                a.isDatasetVisible(i) && l(o) && n.each(e.data, function(e, i) {
                                    var n = +t.getRightValue(e);
                                    isNaN(n) || o.data[i].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n), 0 !== n && (null === t.minNotZero || n < t.minNotZero) && (t.minNotZero = n))
                                })
                            });
                            t.min = r(i.min, t.min), t.max = r(i.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(n.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(n.log10(t.max)) + 1)) : (t.min = 1, t.max = 10))
                        },
                        buildTicks: function() {
                            var t = this,
                                e = t.options.ticks,
                                i = {
                                    min: e.min,
                                    max: e.max
                                },
                                o = t.ticks = a.generators.logarithmic(i, t);
                            t.isHorizontal() || o.reverse(), t.max = n.max(o), t.min = n.min(o), e.reverse ? (o.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                        },
                        convertTicksToLabels: function() {
                            this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this)
                        },
                        getLabelForIndex: function(t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        getPixelForTick: function(t) {
                            return this.getPixelForValue(this.tickValues[t])
                        },
                        getPixelForValue: function(t) {
                            var e, i, a, o = this,
                                r = o.start,
                                s = +o.getRightValue(t),
                                l = o.options.ticks;
                            return o.isHorizontal() ? (a = n.log10(o.end) - n.log10(r), 0 === s ? i = o.left : (e = o.width, i = o.left + e / a * (n.log10(s) - n.log10(r)))) : (e = o.height, 0 !== r || l.reverse ? 0 === o.end && l.reverse ? (a = n.log10(o.start) - n.log10(o.minNotZero), i = s === o.end ? o.top : s === o.minNotZero ? o.top + .02 * e : o.top + .02 * e + .98 * e / a * (n.log10(s) - n.log10(o.minNotZero))) : 0 === s ? i = l.reverse ? o.top : o.bottom : (a = n.log10(o.end) - n.log10(r), e = o.height, i = o.bottom - e / a * (n.log10(s) - n.log10(r))) : (a = n.log10(o.end) - n.log10(o.minNotZero), i = s === r ? o.bottom : s === o.minNotZero ? o.bottom - .02 * e : o.bottom - .02 * e - .98 * e / a * (n.log10(s) - n.log10(o.minNotZero)))), i
                        },
                        getValueForPixel: function(t) {
                            var e, i, a = this,
                                o = n.log10(a.end) - n.log10(a.start);
                            return a.isHorizontal() ? (i = a.width, e = a.start * Math.pow(10, (t - a.left) * o / i)) : (i = a.height, e = Math.pow(10, (a.bottom - t) * o / i) / a.start), e
                        }
                    });
                t.scaleService.registerScaleType("logarithmic", i, e)
            }
        },
        YSsK: function(t, e, i) {
            "use strict";
            var n = i("CDJp"),
                a = i("RDha"),
                o = i("g8vO");
            t.exports = function(t) {
                var e = {
                        position: "left",
                        ticks: {
                            callback: o.formatters.linear
                        }
                    },
                    i = t.LinearScaleBase.extend({
                        determineDataLimits: function() {
                            var t = this,
                                e = t.options,
                                i = t.chart,
                                n = i.data.datasets,
                                o = t.isHorizontal();

                            function r(e) {
                                return o ? e.xAxisID === t.id : e.yAxisID === t.id
                            }
                            t.min = null, t.max = null;
                            var s = e.stacked;
                            if (void 0 === s && a.each(n, function(t, e) {
                                    if (!s) {
                                        var n = i.getDatasetMeta(e);
                                        i.isDatasetVisible(e) && r(n) && void 0 !== n.stack && (s = !0)
                                    }
                                }), e.stacked || s) {
                                var l = {};
                                a.each(n, function(n, o) {
                                    var s = i.getDatasetMeta(o),
                                        u = [s.type, void 0 === e.stacked && void 0 === s.stack ? o : "", s.stack].join(".");
                                    void 0 === l[u] && (l[u] = {
                                        positiveValues: [],
                                        negativeValues: []
                                    });
                                    var d = l[u].positiveValues,
                                        c = l[u].negativeValues;
                                    i.isDatasetVisible(o) && r(s) && a.each(n.data, function(i, n) {
                                        var a = +t.getRightValue(i);
                                        isNaN(a) || s.data[n].hidden || (d[n] = d[n] || 0, c[n] = c[n] || 0, e.relativePoints ? d[n] = 100 : a < 0 ? c[n] += a : d[n] += a)
                                    })
                                }), a.each(l, function(e) {
                                    var i = e.positiveValues.concat(e.negativeValues),
                                        n = a.min(i),
                                        o = a.max(i);
                                    t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? o : Math.max(t.max, o)
                                })
                            } else a.each(n, function(e, n) {
                                var o = i.getDatasetMeta(n);
                                i.isDatasetVisible(n) && r(o) && a.each(e.data, function(e, i) {
                                    var n = +t.getRightValue(e);
                                    isNaN(n) || o.data[i].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n))
                                })
                            });
                            t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions()
                        },
                        getTickLimit: function() {
                            var t, e = this.options.ticks;
                            if (this.isHorizontal()) t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.width / 50));
                            else {
                                var i = a.valueOrDefault(e.fontSize, n.global.defaultFontSize);
                                t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.height / (2 * i)))
                            }
                            return t
                        },
                        handleDirectionalChanges: function() {
                            this.isHorizontal() || this.ticks.reverse()
                        },
                        getLabelForIndex: function(t, e) {
                            return +this.getRightValue(this.chart.data.datasets[e].data[t])
                        },
                        getPixelForValue: function(t) {
                            var e, i = this,
                                n = i.start,
                                a = +i.getRightValue(t),
                                o = i.end - n;
                            return i.isHorizontal() ? (e = i.left + i.width / o * (a - n), Math.round(e)) : (e = i.bottom - i.height / o * (a - n), Math.round(e))
                        },
                        getValueForPixel: function(t) {
                            var e = this,
                                i = e.isHorizontal(),
                                n = i ? e.width : e.height,
                                a = (i ? t - e.left : e.bottom - t) / n;
                            return e.start + (e.end - e.start) * a
                        },
                        getPixelForTick: function(t) {
                            return this.getPixelForValue(this.ticksAsNumbers[t])
                        }
                    });
                t.scaleService.registerScaleType("linear", i, e)
            }
        },
        ZANz: function(t, e, i) {
            "use strict";
            var n = i("CDJp"),
                a = i("vvH+"),
                o = i("RDha");
            n._set("bar", {
                hover: {
                    mode: "label"
                },
                scales: {
                    xAxes: [{
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        offset: !0,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }],
                    yAxes: [{
                        type: "linear"
                    }]
                }
            }), n._set("horizontalBar", {
                hover: {
                    mode: "index",
                    axis: "y"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom"
                    }],
                    yAxes: [{
                        position: "left",
                        type: "category",
                        categoryPercentage: .8,
                        barPercentage: .9,
                        offset: !0,
                        gridLines: {
                            offsetGridLines: !0
                        }
                    }]
                },
                elements: {
                    rectangle: {
                        borderSkipped: "left"
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function(t, e) {
                            var i = "";
                            return t.length > 0 && (t[0].yLabel ? i = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i
                        },
                        label: function(t, e) {
                            return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel
                        }
                    },
                    mode: "index",
                    axis: "y"
                }
            }), t.exports = function(t) {
                t.controllers.bar = t.DatasetController.extend({
                    dataElementType: a.Rectangle,
                    initialize: function() {
                        var e;
                        t.DatasetController.prototype.initialize.apply(this, arguments), (e = this.getMeta()).stack = this.getDataset().stack, e.bar = !0
                    },
                    update: function(t) {
                        var e, i, n = this.getMeta().data;
                        for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) this.updateElement(n[e], e, t)
                    },
                    updateElement: function(t, e, i) {
                        var n = this,
                            a = n.chart,
                            r = n.getMeta(),
                            s = n.getDataset(),
                            l = t.custom || {},
                            u = a.options.elements.rectangle;
                        t._xScale = n.getScaleForId(r.xAxisID), t._yScale = n.getScaleForId(r.yAxisID), t._datasetIndex = n.index, t._index = e, t._model = {
                            datasetLabel: s.label,
                            label: a.data.labels[e],
                            borderSkipped: l.borderSkipped ? l.borderSkipped : u.borderSkipped,
                            backgroundColor: l.backgroundColor ? l.backgroundColor : o.valueAtIndexOrDefault(s.backgroundColor, e, u.backgroundColor),
                            borderColor: l.borderColor ? l.borderColor : o.valueAtIndexOrDefault(s.borderColor, e, u.borderColor),
                            borderWidth: l.borderWidth ? l.borderWidth : o.valueAtIndexOrDefault(s.borderWidth, e, u.borderWidth)
                        }, n.updateElementGeometry(t, e, i), t.pivot()
                    },
                    updateElementGeometry: function(t, e, i) {
                        var n = this,
                            a = t._model,
                            o = n.getValueScale(),
                            r = o.getBasePixel(),
                            s = o.isHorizontal(),
                            l = n._ruler || n.getRuler(),
                            u = n.calculateBarValuePixels(n.index, e),
                            d = n.calculateBarIndexPixels(n.index, e, l);
                        a.horizontal = s, a.base = i ? r : u.base, a.x = s ? i ? r : u.head : d.center, a.y = s ? d.center : i ? r : u.head, a.height = s ? d.size : void 0, a.width = s ? void 0 : d.size
                    },
                    getValueScaleId: function() {
                        return this.getMeta().yAxisID
                    },
                    getIndexScaleId: function() {
                        return this.getMeta().xAxisID
                    },
                    getValueScale: function() {
                        return this.getScaleForId(this.getValueScaleId())
                    },
                    getIndexScale: function() {
                        return this.getScaleForId(this.getIndexScaleId())
                    },
                    getStackCount: function(t) {
                        var e, i, n = this.chart,
                            a = this.getIndexScale().options.stacked,
                            o = void 0 === t ? n.data.datasets.length : t + 1,
                            r = [];
                        for (e = 0; e < o; ++e)(i = n.getDatasetMeta(e)).bar && n.isDatasetVisible(e) && (!1 === a || !0 === a && -1 === r.indexOf(i.stack) || void 0 === a && (void 0 === i.stack || -1 === r.indexOf(i.stack))) && r.push(i.stack);
                        return r.length
                    },
                    getStackIndex: function(t) {
                        return this.getStackCount(t) - 1
                    },
                    getRuler: function() {
                        var t, e, i = this.getIndexScale(),
                            n = this.getStackCount(),
                            a = this.index,
                            o = [],
                            r = i.isHorizontal(),
                            s = r ? i.left : i.top,
                            l = s + (r ? i.width : i.height);
                        for (t = 0, e = this.getMeta().data.length; t < e; ++t) o.push(i.getPixelForValue(null, t, a));
                        return {
                            pixels: o,
                            start: s,
                            end: l,
                            stackCount: n,
                            scale: i
                        }
                    },
                    calculateBarValuePixels: function(t, e) {
                        var i, n, a, o, r, s, l = this.chart,
                            u = this.getMeta(),
                            d = this.getValueScale(),
                            c = l.data.datasets,
                            h = d.getRightValue(c[t].data[e]),
                            f = d.options.stacked,
                            g = u.stack,
                            p = 0;
                        if (f || void 0 === f && void 0 !== g)
                            for (i = 0; i < t; ++i)(n = l.getDatasetMeta(i)).bar && n.stack === g && n.controller.getValueScaleId() === d.id && l.isDatasetVisible(i) && (a = d.getRightValue(c[i].data[e]), (h < 0 && a < 0 || h >= 0 && a > 0) && (p += a));
                        return o = d.getPixelForValue(p), {
                            size: s = ((r = d.getPixelForValue(p + h)) - o) / 2,
                            base: o,
                            head: r,
                            center: r + s / 2
                        }
                    },
                    calculateBarIndexPixels: function(t, e, i) {
                        var n, a, r, s, l, u = i.scale.options,
                            d = this.getStackIndex(t),
                            c = i.pixels,
                            h = c[e],
                            f = c.length,
                            g = i.start,
                            p = i.end;
                        return 1 === f ? (n = h > g ? h - g : p - h, a = h < p ? p - h : h - g) : (e > 0 && (n = (h - c[e - 1]) / 2, e === f - 1 && (a = n)), e < f - 1 && (a = (c[e + 1] - h) / 2, 0 === e && (n = a))), l = (s = ((r = n * u.categoryPercentage) + a * u.categoryPercentage) / i.stackCount) * u.barPercentage, h -= r, h += s * d, {
                            size: l = Math.min(o.valueOrDefault(u.barThickness, l), o.valueOrDefault(u.maxBarThickness, 1 / 0)),
                            base: h += (s - l) / 2,
                            head: h + l,
                            center: h + l / 2
                        }
                    },
                    draw: function() {
                        var t = this.chart,
                            e = this.getValueScale(),
                            i = this.getMeta().data,
                            n = this.getDataset(),
                            a = i.length,
                            r = 0;
                        for (o.canvas.clipArea(t.ctx, t.chartArea); r < a; ++r) isNaN(e.getRightValue(n.data[r])) || i[r].draw();
                        o.canvas.unclipArea(t.ctx)
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            n = t.custom || {},
                            a = t._model;
                        a.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : o.valueAtIndexOrDefault(e.hoverBackgroundColor, i, o.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor ? n.hoverBorderColor : o.valueAtIndexOrDefault(e.hoverBorderColor, i, o.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : o.valueAtIndexOrDefault(e.hoverBorderWidth, i, a.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            i = t._index,
                            n = t.custom || {},
                            a = t._model,
                            r = this.chart.options.elements.rectangle;
                        a.backgroundColor = n.backgroundColor ? n.backgroundColor : o.valueAtIndexOrDefault(e.backgroundColor, i, r.backgroundColor), a.borderColor = n.borderColor ? n.borderColor : o.valueAtIndexOrDefault(e.borderColor, i, r.borderColor), a.borderWidth = n.borderWidth ? n.borderWidth : o.valueAtIndexOrDefault(e.borderWidth, i, r.borderWidth)
                    }
                }), t.controllers.horizontalBar = t.controllers.bar.extend({
                    getValueScaleId: function() {
                        return this.getMeta().xAxisID
                    },
                    getIndexScaleId: function() {
                        return this.getMeta().yAxisID
                    }
                })
            }
        },
        aB2c: function(t, e, i) {
            "use strict";
            var n = i("CDJp"),
                a = i("vvH+"),
                o = i("RDha");
            n._set("radar", {
                scale: {
                    type: "radialLinear"
                },
                elements: {
                    line: {
                        tension: 0
                    }
                }
            }), t.exports = function(t) {
                t.controllers.radar = t.DatasetController.extend({
                    datasetElementType: a.Line,
                    dataElementType: a.Point,
                    linkScales: o.noop,
                    update: function(t) {
                        var e = this,
                            i = e.getMeta(),
                            n = i.dataset,
                            a = i.data,
                            r = n.custom || {},
                            s = e.getDataset(),
                            l = e.chart.options.elements.line,
                            u = e.chart.scale;
                        void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), o.extend(i.dataset, {
                            _datasetIndex: e.index,
                            _scale: u,
                            _children: a,
                            _loop: !0,
                            _model: {
                                tension: r.tension ? r.tension : o.valueOrDefault(s.lineTension, l.tension),
                                backgroundColor: r.backgroundColor ? r.backgroundColor : s.backgroundColor || l.backgroundColor,
                                borderWidth: r.borderWidth ? r.borderWidth : s.borderWidth || l.borderWidth,
                                borderColor: r.borderColor ? r.borderColor : s.borderColor || l.borderColor,
                                fill: r.fill ? r.fill : void 0 !== s.fill ? s.fill : l.fill,
                                borderCapStyle: r.borderCapStyle ? r.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                                borderDash: r.borderDash ? r.borderDash : s.borderDash || l.borderDash,
                                borderDashOffset: r.borderDashOffset ? r.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
                                borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle
                            }
                        }), i.dataset.pivot(), o.each(a, function(i, n) {
                            e.updateElement(i, n, t)
                        }, e), e.updateBezierControlPoints()
                    },
                    updateElement: function(t, e, i) {
                        var n = this,
                            a = t.custom || {},
                            r = n.getDataset(),
                            s = n.chart.scale,
                            l = n.chart.options.elements.point,
                            u = s.getPointPositionForValue(e, r.data[e]);
                        void 0 !== r.radius && void 0 === r.pointRadius && (r.pointRadius = r.radius), void 0 !== r.hitRadius && void 0 === r.pointHitRadius && (r.pointHitRadius = r.hitRadius), o.extend(t, {
                            _datasetIndex: n.index,
                            _index: e,
                            _scale: s,
                            _model: {
                                x: i ? s.xCenter : u.x,
                                y: i ? s.yCenter : u.y,
                                tension: a.tension ? a.tension : o.valueOrDefault(r.lineTension, n.chart.options.elements.line.tension),
                                radius: a.radius ? a.radius : o.valueAtIndexOrDefault(r.pointRadius, e, l.radius),
                                backgroundColor: a.backgroundColor ? a.backgroundColor : o.valueAtIndexOrDefault(r.pointBackgroundColor, e, l.backgroundColor),
                                borderColor: a.borderColor ? a.borderColor : o.valueAtIndexOrDefault(r.pointBorderColor, e, l.borderColor),
                                borderWidth: a.borderWidth ? a.borderWidth : o.valueAtIndexOrDefault(r.pointBorderWidth, e, l.borderWidth),
                                pointStyle: a.pointStyle ? a.pointStyle : o.valueAtIndexOrDefault(r.pointStyle, e, l.pointStyle),
                                hitRadius: a.hitRadius ? a.hitRadius : o.valueAtIndexOrDefault(r.pointHitRadius, e, l.hitRadius)
                            }
                        }), t._model.skip = a.skip ? a.skip : isNaN(t._model.x) || isNaN(t._model.y)
                    },
                    updateBezierControlPoints: function() {
                        var t = this.chart.chartArea,
                            e = this.getMeta();
                        o.each(e.data, function(i, n) {
                            var a = i._model,
                                r = o.splineCurve(o.previousItem(e.data, n, !0)._model, a, o.nextItem(e.data, n, !0)._model, a.tension);
                            a.controlPointPreviousX = Math.max(Math.min(r.previous.x, t.right), t.left), a.controlPointPreviousY = Math.max(Math.min(r.previous.y, t.bottom), t.top), a.controlPointNextX = Math.max(Math.min(r.next.x, t.right), t.left), a.controlPointNextY = Math.max(Math.min(r.next.y, t.bottom), t.top), i.pivot()
                        })
                    },
                    setHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            i = t.custom || {},
                            n = t._index,
                            a = t._model;
                        a.radius = i.hoverRadius ? i.hoverRadius : o.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), a.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, o.getHoverColor(a.backgroundColor)), a.borderColor = i.hoverBorderColor ? i.hoverBorderColor : o.valueAtIndexOrDefault(e.pointHoverBorderColor, n, o.getHoverColor(a.borderColor)), a.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : o.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, a.borderWidth)
                    },
                    removeHoverStyle: function(t) {
                        var e = this.chart.data.datasets[t._datasetIndex],
                            i = t.custom || {},
                            n = t._index,
                            a = t._model,
                            r = this.chart.options.elements.point;
                        a.radius = i.radius ? i.radius : o.valueAtIndexOrDefault(e.pointRadius, n, r.radius), a.backgroundColor = i.backgroundColor ? i.backgroundColor : o.valueAtIndexOrDefault(e.pointBackgroundColor, n, r.backgroundColor), a.borderColor = i.borderColor ? i.borderColor : o.valueAtIndexOrDefault(e.pointBorderColor, n, r.borderColor), a.borderWidth = i.borderWidth ? i.borderWidth : o.valueAtIndexOrDefault(e.pointBorderWidth, n, r.borderWidth)
                    }
                })
            }
        },
        bidN: function(t, e, i) {
            "use strict";
            var n = i("CDJp"),
                a = i("vvH+"),
                o = i("RDha");
            n._set("bubble", {
                hover: {
                    mode: "single"
                },
                scales: {
                    xAxes: [{
                        type: "linear",
                        position: "bottom",
                        id: "x-axis-0"
                    }],
                    yAxes: [{
                        type: "linear",
                        position: "left",
                        id: "y-axis-0"
                    }]
                },
                tooltips: {
                    callbacks: {
                        title: function() {
                            return ""
                        },
                        label: function(t, e) {
                            var i = e.datasets[t.datasetIndex].label || "",
                                n = e.datasets[t.datasetIndex].data[t.index];
                            return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")"
                        }
                    }
                }
            }), t.exports = function(t) {
                t.controllers.bubble = t.DatasetController.extend({
                    dataElementType: a.Point,
                    update: function(t) {
                        var e = this,
                            i = e.getMeta().data;
                        o.each(i, function(i, n) {
                            e.updateElement(i, n, t)
                        })
                    },
                    updateElement: function(t, e, i) {
                        var n = this,
                            a = n.getMeta(),
                            o = t.custom || {},
                            r = n.getScaleForId(a.xAxisID),
                            s = n.getScaleForId(a.yAxisID),
                            l = n._resolveElementOptions(t, e),
                            u = n.getDataset().data[e],
                            d = n.index,
                            c = i ? r.getPixelForDecimal(.5) : r.getPixelForValue("object" == typeof u ? u : NaN, e, d),
                            h = i ? s.getBasePixel() : s.getPixelForValue(u, e, d);
                        t._xScale = r, t._yScale = s, t._options = l, t._datasetIndex = d, t._index = e, t._model = {
                            backgroundColor: l.backgroundColor,
                            borderColor: l.borderColor,
                            borderWidth: l.borderWidth,
                            hitRadius: l.hitRadius,
                            pointStyle: l.pointStyle,
                            radius: i ? 0 : l.radius,
                            skip: o.skip || isNaN(c) || isNaN(h),
                            x: c,
                            y: h
                        }, t.pivot()
                    },
                    setHoverStyle: function(t) {
                        var e = t._model,
                            i = t._options;
                        e.backgroundColor = o.valueOrDefault(i.hoverBackgroundColor, o.getHoverColor(i.backgroundColor)), e.borderColor = o.valueOrDefault(i.hoverBorderColor, o.getHoverColor(i.borderColor)), e.borderWidth = o.valueOrDefault(i.hoverBorderWidth, i.borderWidth), e.radius = i.radius + i.hoverRadius
                    },
                    removeHoverStyle: function(t) {
                        var e = t._model,
                            i = t._options;
                        e.backgroundColor = i.backgroundColor, e.borderColor = i.borderColor, e.borderWidth = i.borderWidth, e.radius = i.radius
                    },
                    _resolveElementOptions: function(t, e) {
                        var i, n, a, r = this.chart,
                            s = r.data.datasets[this.index],
                            l = t.custom || {},
                            u = r.options.elements.point,
                            d = o.options.resolve,
                            c = s.data[e],
                            h = {},
                            f = {
                                chart: r,
                                dataIndex: e,
                                dataset: s,
                                datasetIndex: this.index
                            },
                            g = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"];
                        for (i = 0, n = g.length; i < n; ++i) h[a = g[i]] = d([l[a], s[a], u[a]], f, e);
                        return h.radius = d([l.radius, c ? c.r : void 0, s.radius, u.radius], f, e), h
                    }
                })
            }
        },
        cdu6: function(t, e, i) {
            "use strict";
            var n = i("CDJp"),
                a = i("K2E3"),
                o = i("RDha"),
                r = i("g8vO");

            function s(t) {
                var e, i, n = [];
                for (e = 0, i = t.length; e < i; ++e) n.push(t[e].label);
                return n
            }

            function l(t, e, i) {
                var n = t.getPixelForTick(e);
                return i && (n -= 0 === e ? (t.getPixelForTick(1) - n) / 2 : (n - t.getPixelForTick(e - 1)) / 2), n
            }
            n._set("scale", {
                display: !0,
                position: "left",
                offset: !1,
                gridLines: {
                    display: !0,
                    color: "rgba(0, 0, 0, 0.1)",
                    lineWidth: 1,
                    drawBorder: !0,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    tickMarkLength: 10,
                    zeroLineWidth: 1,
                    zeroLineColor: "rgba(0,0,0,0.25)",
                    zeroLineBorderDash: [],
                    zeroLineBorderDashOffset: 0,
                    offsetGridLines: !1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                scaleLabel: {
                    display: !1,
                    labelString: "",
                    lineHeight: 1.2,
                    padding: {
                        top: 4,
                        bottom: 4
                    }
                },
                ticks: {
                    beginAtZero: !1,
                    minRotation: 0,
                    maxRotation: 50,
                    mirror: !1,
                    padding: 0,
                    reverse: !1,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 0,
                    labelOffset: 0,
                    callback: r.formatters.values,
                    minor: {},
                    major: {}
                }
            }), t.exports = function(t) {
                function e(t, e, i) {
                    return o.isArray(e) ? o.longestText(t, i, e) : t.measureText(e).width
                }

                function i(t) {
                    var e = o.valueOrDefault,
                        i = n.global,
                        a = e(t.fontSize, i.defaultFontSize),
                        r = e(t.fontStyle, i.defaultFontStyle),
                        s = e(t.fontFamily, i.defaultFontFamily);
                    return {
                        size: a,
                        style: r,
                        family: s,
                        font: o.fontString(a, r, s)
                    }
                }

                function r(t) {
                    return o.options.toLineHeight(o.valueOrDefault(t.lineHeight, 1.2), o.valueOrDefault(t.fontSize, n.global.defaultFontSize))
                }
                t.Scale = a.extend({
                    getPadding: function() {
                        return {
                            left: this.paddingLeft || 0,
                            top: this.paddingTop || 0,
                            right: this.paddingRight || 0,
                            bottom: this.paddingBottom || 0
                        }
                    },
                    getTicks: function() {
                        return this._ticks
                    },
                    mergeTicksOptions: function() {
                        var t = this.options.ticks;
                        for (var e in !1 === t.minor && (t.minor = {
                                display: !1
                            }), !1 === t.major && (t.major = {
                                display: !1
                            }), t) "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]))
                    },
                    beforeUpdate: function() {
                        o.callback(this.options.beforeUpdate, [this])
                    },
                    update: function(t, e, i) {
                        var n, a, r, s, l, u, d = this;
                        for (d.beforeUpdate(), d.maxWidth = t, d.maxHeight = e, d.margins = o.extend({
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }, i), d.longestTextCache = d.longestTextCache || {}, d.beforeSetDimensions(), d.setDimensions(), d.afterSetDimensions(), d.beforeDataLimits(), d.determineDataLimits(), d.afterDataLimits(), d.beforeBuildTicks(), l = d.buildTicks() || [], d.afterBuildTicks(), d.beforeTickToLabelConversion(), r = d.convertTicksToLabels(l) || d.ticks, d.afterTickToLabelConversion(), d.ticks = r, n = 0, a = r.length; n < a; ++n) s = r[n], (u = l[n]) ? u.label = s : l.push(u = {
                            label: s,
                            major: !1
                        });
                        return d._ticks = l, d.beforeCalculateTickRotation(), d.calculateTickRotation(), d.afterCalculateTickRotation(), d.beforeFit(), d.fit(), d.afterFit(), d.afterUpdate(), d.minSize
                    },
                    afterUpdate: function() {
                        o.callback(this.options.afterUpdate, [this])
                    },
                    beforeSetDimensions: function() {
                        o.callback(this.options.beforeSetDimensions, [this])
                    },
                    setDimensions: function() {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
                    },
                    afterSetDimensions: function() {
                        o.callback(this.options.afterSetDimensions, [this])
                    },
                    beforeDataLimits: function() {
                        o.callback(this.options.beforeDataLimits, [this])
                    },
                    determineDataLimits: o.noop,
                    afterDataLimits: function() {
                        o.callback(this.options.afterDataLimits, [this])
                    },
                    beforeBuildTicks: function() {
                        o.callback(this.options.beforeBuildTicks, [this])
                    },
                    buildTicks: o.noop,
                    afterBuildTicks: function() {
                        o.callback(this.options.afterBuildTicks, [this])
                    },
                    beforeTickToLabelConversion: function() {
                        o.callback(this.options.beforeTickToLabelConversion, [this])
                    },
                    convertTicksToLabels: function() {
                        var t = this.options.ticks;
                        this.ticks = this.ticks.map(t.userCallback || t.callback, this)
                    },
                    afterTickToLabelConversion: function() {
                        o.callback(this.options.afterTickToLabelConversion, [this])
                    },
                    beforeCalculateTickRotation: function() {
                        o.callback(this.options.beforeCalculateTickRotation, [this])
                    },
                    calculateTickRotation: function() {
                        var t = this,
                            e = t.ctx,
                            n = t.options.ticks,
                            a = s(t._ticks),
                            r = i(n);
                        e.font = r.font;
                        var l = n.minRotation || 0;
                        if (a.length && t.options.display && t.isHorizontal())
                            for (var u, d = o.longestText(e, r.font, a, t.longestTextCache), c = d, h = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; c > h && l < n.maxRotation;) {
                                var f = o.toRadians(l);
                                if (u = Math.cos(f), Math.sin(f) * d > t.maxHeight) {
                                    l--;
                                    break
                                }
                                l++, c = u * d
                            }
                        t.labelRotation = l
                    },
                    afterCalculateTickRotation: function() {
                        o.callback(this.options.afterCalculateTickRotation, [this])
                    },
                    beforeFit: function() {
                        o.callback(this.options.beforeFit, [this])
                    },
                    fit: function() {
                        var t = this,
                            n = t.minSize = {
                                width: 0,
                                height: 0
                            },
                            a = s(t._ticks),
                            l = t.options,
                            u = l.ticks,
                            d = l.scaleLabel,
                            c = l.gridLines,
                            h = l.display,
                            f = t.isHorizontal(),
                            g = i(u),
                            p = l.gridLines.tickMarkLength;
                        if (n.width = f ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : h && c.drawTicks ? p : 0, n.height = f ? h && c.drawTicks ? p : 0 : t.maxHeight, d.display && h) {
                            var v = r(d) + o.options.toPadding(d.padding).height;
                            f ? n.height += v : n.width += v
                        }
                        if (u.display && h) {
                            var m = o.longestText(t.ctx, g.font, a, t.longestTextCache),
                                b = o.numberOfLabelLines(a),
                                x = .5 * g.size,
                                y = t.options.ticks.padding;
                            if (f) {
                                t.longestLabelWidth = m;
                                var k = o.toRadians(t.labelRotation),
                                    C = Math.cos(k),
                                    w = Math.sin(k) * m + g.size * b + x * (b - 1) + x;
                                n.height = Math.min(t.maxHeight, n.height + w + y), t.ctx.font = g.font;
                                var M = e(t.ctx, a[0], g.font),
                                    S = e(t.ctx, a[a.length - 1], g.font);
                                0 !== t.labelRotation ? (t.paddingLeft = "bottom" === l.position ? C * M + 3 : C * x + 3, t.paddingRight = "bottom" === l.position ? C * x + 3 : C * S + 3) : (t.paddingLeft = M / 2 + 3, t.paddingRight = S / 2 + 3)
                            } else u.mirror ? m = 0 : m += y + x, n.width = Math.min(t.maxWidth, n.width + m), t.paddingTop = g.size / 2, t.paddingBottom = g.size / 2
                        }
                        t.handleMargins(), t.width = n.width, t.height = n.height
                    },
                    handleMargins: function() {
                        var t = this;
                        t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
                    },
                    afterFit: function() {
                        o.callback(this.options.afterFit, [this])
                    },
                    isHorizontal: function() {
                        return "top" === this.options.position || "bottom" === this.options.position
                    },
                    isFullWidth: function() {
                        return this.options.fullWidth
                    },
                    getRightValue: function(t) {
                        if (o.isNullOrUndef(t)) return NaN;
                        if ("number" == typeof t && !isFinite(t)) return NaN;
                        if (t)
                            if (this.isHorizontal()) {
                                if (void 0 !== t.x) return this.getRightValue(t.x)
                            } else if (void 0 !== t.y) return this.getRightValue(t.y);
                        return t
                    },
                    getLabelForIndex: o.noop,
                    getPixelForValue: o.noop,
                    getValueForPixel: o.noop,
                    getPixelForTick: function(t) {
                        var e = this,
                            i = e.options.offset;
                        if (e.isHorizontal()) {
                            var n = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (i ? 0 : 1), 1),
                                a = n * t + e.paddingLeft;
                            i && (a += n / 2);
                            var o = e.left + Math.round(a);
                            return o += e.isFullWidth() ? e.margins.left : 0
                        }
                        var r = e.height - (e.paddingTop + e.paddingBottom);
                        return e.top + t * (r / (e._ticks.length - 1))
                    },
                    getPixelForDecimal: function(t) {
                        var e = this;
                        if (e.isHorizontal()) {
                            var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
                                n = e.left + Math.round(i);
                            return n += e.isFullWidth() ? e.margins.left : 0
                        }
                        return e.top + t * e.height
                    },
                    getBasePixel: function() {
                        return this.getPixelForValue(this.getBaseValue())
                    },
                    getBaseValue: function() {
                        var t = this.min,
                            e = this.max;
                        return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
                    },
                    _autoSkip: function(t) {
                        var e, i, n, a, r = this,
                            s = r.isHorizontal(),
                            l = r.options.ticks.minor,
                            u = t.length,
                            d = o.toRadians(r.labelRotation),
                            c = Math.cos(d),
                            h = r.longestLabelWidth * c,
                            f = [];
                        for (l.maxTicksLimit && (a = l.maxTicksLimit), s && (e = !1, (h + l.autoSkipPadding) * u > r.width - (r.paddingLeft + r.paddingRight) && (e = 1 + Math.floor((h + l.autoSkipPadding) * u / (r.width - (r.paddingLeft + r.paddingRight)))), a && u > a && (e = Math.max(e, Math.floor(u / a)))), i = 0; i < u; i++) n = t[i], (e > 1 && i % e > 0 || i % e == 0 && i + e >= u) && i !== u - 1 && delete n.label, f.push(n);
                        return f
                    },
                    draw: function(t) {
                        var e = this,
                            a = e.options;
                        if (a.display) {
                            var s = e.ctx,
                                u = n.global,
                                d = a.ticks.minor,
                                c = a.ticks.major || d,
                                h = a.gridLines,
                                f = a.scaleLabel,
                                g = 0 !== e.labelRotation,
                                p = e.isHorizontal(),
                                v = d.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
                                m = o.valueOrDefault(d.fontColor, u.defaultFontColor),
                                b = i(d),
                                x = o.valueOrDefault(c.fontColor, u.defaultFontColor),
                                y = i(c),
                                k = h.drawTicks ? h.tickMarkLength : 0,
                                C = o.valueOrDefault(f.fontColor, u.defaultFontColor),
                                w = i(f),
                                M = o.options.toPadding(f.padding),
                                S = o.toRadians(e.labelRotation),
                                D = [],
                                _ = "right" === a.position ? e.left : e.right - k,
                                A = "right" === a.position ? e.left + k : e.right,
                                P = "bottom" === a.position ? e.top : e.bottom - k,
                                I = "bottom" === a.position ? e.top + k : e.bottom;
                            if (o.each(v, function(i, n) {
                                    if (!o.isNullOrUndef(i.label)) {
                                        var r, s, c, f, m, b, x, y, C, w, M, T, F, R, O = i.label;
                                        n === e.zeroLineIndex && a.offset === h.offsetGridLines ? (r = h.zeroLineWidth, s = h.zeroLineColor, c = h.zeroLineBorderDash, f = h.zeroLineBorderDashOffset) : (r = o.valueAtIndexOrDefault(h.lineWidth, n), s = o.valueAtIndexOrDefault(h.color, n), c = o.valueOrDefault(h.borderDash, u.borderDash), f = o.valueOrDefault(h.borderDashOffset, u.borderDashOffset));
                                        var L = "middle",
                                            z = "middle",
                                            B = d.padding;
                                        if (p) {
                                            var W = k + B;
                                            "bottom" === a.position ? (z = g ? "middle" : "top", L = g ? "right" : "center", R = e.top + W) : (z = g ? "middle" : "bottom", L = g ? "left" : "center", R = e.bottom - W);
                                            var N = l(e, n, h.offsetGridLines && v.length > 1);
                                            N < e.left && (s = "rgba(0,0,0,0)"), N += o.aliasPixel(r), F = e.getPixelForTick(n) + d.labelOffset, m = x = C = M = N, b = P, y = I, w = t.top, T = t.bottom
                                        } else {
                                            var V, E = "left" === a.position;
                                            d.mirror ? (L = E ? "left" : "right", V = B) : (L = E ? "right" : "left", V = k + B), F = E ? e.right - V : e.left + V;
                                            var H = l(e, n, h.offsetGridLines && v.length > 1);
                                            H < e.top && (s = "rgba(0,0,0,0)"), H += o.aliasPixel(r), R = e.getPixelForTick(n) + d.labelOffset, m = _, x = A, C = t.left, M = t.right, b = y = w = T = H
                                        }
                                        D.push({
                                            tx1: m,
                                            ty1: b,
                                            tx2: x,
                                            ty2: y,
                                            x1: C,
                                            y1: w,
                                            x2: M,
                                            y2: T,
                                            labelX: F,
                                            labelY: R,
                                            glWidth: r,
                                            glColor: s,
                                            glBorderDash: c,
                                            glBorderDashOffset: f,
                                            rotation: -1 * S,
                                            label: O,
                                            major: i.major,
                                            textBaseline: z,
                                            textAlign: L
                                        })
                                    }
                                }), o.each(D, function(t) {
                                    if (h.display && (s.save(), s.lineWidth = t.glWidth, s.strokeStyle = t.glColor, s.setLineDash && (s.setLineDash(t.glBorderDash), s.lineDashOffset = t.glBorderDashOffset), s.beginPath(), h.drawTicks && (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)), h.drawOnChartArea && (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)), s.stroke(), s.restore()), d.display) {
                                        s.save(), s.translate(t.labelX, t.labelY), s.rotate(t.rotation), s.font = t.major ? y.font : b.font, s.fillStyle = t.major ? x : m, s.textBaseline = t.textBaseline, s.textAlign = t.textAlign;
                                        var e = t.label;
                                        if (o.isArray(e))
                                            for (var i = 0, n = 0; i < e.length; ++i) s.fillText("" + e[i], 0, n), n += 1.5 * b.size;
                                        else s.fillText(e, 0, 0);
                                        s.restore()
                                    }
                                }), f.display) {
                                var T, F, R = 0,
                                    O = r(f) / 2;
                                if (p) T = e.left + (e.right - e.left) / 2, F = "bottom" === a.position ? e.bottom - O - M.bottom : e.top + O + M.top;
                                else {
                                    var L = "left" === a.position;
                                    T = L ? e.left + O + M.top : e.right - O - M.top, F = e.top + (e.bottom - e.top) / 2, R = L ? -.5 * Math.PI : .5 * Math.PI
                                }
                                s.save(), s.translate(T, F), s.rotate(R), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = C, s.font = w.font, s.fillText(f.labelString, 0, 0), s.restore()
                            }
                            if (h.drawBorder) {
                                s.lineWidth = o.valueAtIndexOrDefault(h.lineWidth, 0), s.strokeStyle = o.valueAtIndexOrDefault(h.color, 0);
                                var z = e.left,
                                    B = e.right,
                                    W = e.top,
                                    N = e.bottom,
                                    V = o.aliasPixel(s.lineWidth);
                                p ? (W = N = "top" === a.position ? e.bottom : e.top, W += V, N += V) : (z = B = "left" === a.position ? e.right : e.left, z += V, B += V), s.beginPath(), s.moveTo(z, W), s.lineTo(B, N), s.stroke()
                            }
                        }
                    }
                })
            }
        },
        g8vO: function(t, e, i) {
            "use strict";
            var n = i("RDha");
            t.exports = {
                generators: {
                    linear: function(t, e) {
                        var i, a = [];
                        if (t.stepSize && t.stepSize > 0) i = t.stepSize;
                        else {
                            var o = n.niceNum(e.max - e.min, !1);
                            i = n.niceNum(o / (t.maxTicks - 1), !0)
                        }
                        var r = Math.floor(e.min / i) * i,
                            s = Math.ceil(e.max / i) * i;
                        t.min && t.max && t.stepSize && n.almostWhole((t.max - t.min) / t.stepSize, i / 1e3) && (r = t.min, s = t.max);
                        var l = (s - r) / i;
                        l = n.almostEquals(l, Math.round(l), i / 1e3) ? Math.round(l) : Math.ceil(l), a.push(void 0 !== t.min ? t.min : r);
                        for (var u = 1; u < l; ++u) a.push(r + u * i);
                        return a.push(void 0 !== t.max ? t.max : s), a
                    },
                    logarithmic: function(t, e) {
                        var i, a, o = [],
                            r = n.valueOrDefault,
                            s = r(t.min, Math.pow(10, Math.floor(n.log10(e.min)))),
                            l = Math.floor(n.log10(e.max)),
                            u = Math.ceil(e.max / Math.pow(10, l));
                        0 === s ? (i = Math.floor(n.log10(e.minNotZero)), a = Math.floor(e.minNotZero / Math.pow(10, i)), o.push(s), s = a * Math.pow(10, i)) : (i = Math.floor(n.log10(s)), a = Math.floor(s / Math.pow(10, i)));
                        do {
                            o.push(s), 10 === ++a && (a = 1, ++i), s = a * Math.pow(10, i)
                        } while (i < l || i === l && a < u);
                        var d = r(t.max, s);
                        return o.push(d), o
                    }
                },
                formatters: {
                    values: function(t) {
                        return n.isArray(t) ? t : "" + t
                    },
                    linear: function(t, e, i) {
                        var a = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
                        Math.abs(a) > 1 && t !== Math.floor(t) && (a = t - Math.floor(t));
                        var o = n.log10(Math.abs(a)),
                            r = "";
                        if (0 !== t) {
                            var s = -1 * Math.floor(o);
                            s = Math.max(Math.min(s, 20), 0), r = t.toFixed(s)
                        } else r = "0";
                        return r
                    },
                    logarithmic: function(t, e, i) {
                        var a = t / Math.pow(10, Math.floor(n.log10(t)));
                        return 0 === t ? "0" : 1 === a || 2 === a || 5 === a || 0 === e || e === i.length - 1 ? t.toExponential() : ""
                    }
                }
            }
        },
        iM7B: function(t, e, i) {
            "use strict";
            var n = i("RDha"),
                a = i("Hg4g"),
                o = i("q8Fl"),
                r = o._enabled ? o : a;
            t.exports = n.extend({
                initialize: function() {},
                acquireContext: function() {},
                releaseContext: function() {},
                addEventListener: function() {},
                removeEventListener: function() {}
            }, r)
        },
        iYGd: function(t, e, i) {
            "use strict";
            t.exports = function(t) {
                t.Radar = function(e, i) {
                    return i.type = "radar", new t(e, i)
                }
            }
        },
        mjYD: function(t, e, i) {
            "use strict";
            var n = i("CDJp"),
                a = i("K2E3"),
                o = i("RDha");
            n._set("global", {
                title: {
                    display: !1,
                    fontStyle: "bold",
                    fullWidth: !0,
                    lineHeight: 1.2,
                    padding: 10,
                    position: "top",
                    text: "",
                    weight: 2e3
                }
            }), t.exports = function(t) {
                var e = t.layoutService,
                    i = o.noop;

                function r(i, n) {
                    var a = new t.Title({
                        ctx: i.ctx,
                        options: n,
                        chart: i
                    });
                    e.configure(i, a, n), e.addBox(i, a), i.titleBlock = a
                }
                return t.Title = a.extend({
                    initialize: function(t) {
                        o.extend(this, t), this.legendHitBoxes = []
                    },
                    beforeUpdate: i,
                    update: function(t, e, i) {
                        var n = this;
                        return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                    },
                    afterUpdate: i,
                    beforeSetDimensions: i,
                    setDimensions: function() {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                            width: 0,
                            height: 0
                        }
                    },
                    afterSetDimensions: i,
                    beforeBuildLabels: i,
                    buildLabels: i,
                    afterBuildLabels: i,
                    beforeFit: i,
                    fit: function() {
                        var t = this,
                            e = o.valueOrDefault,
                            i = t.options,
                            a = i.display,
                            r = e(i.fontSize, n.global.defaultFontSize),
                            s = t.minSize,
                            l = o.isArray(i.text) ? i.text.length : 1,
                            u = o.options.toLineHeight(i.lineHeight, r),
                            d = a ? l * u + 2 * i.padding : 0;
                        t.isHorizontal() ? (s.width = t.maxWidth, s.height = d) : (s.width = d, s.height = t.maxHeight), t.width = s.width, t.height = s.height
                    },
                    afterFit: i,
                    isHorizontal: function() {
                        var t = this.options.position;
                        return "top" === t || "bottom" === t
                    },
                    draw: function() {
                        var t = this,
                            e = t.ctx,
                            i = o.valueOrDefault,
                            a = t.options,
                            r = n.global;
                        if (a.display) {
                            var s, l, u, d = i(a.fontSize, r.defaultFontSize),
                                c = i(a.fontStyle, r.defaultFontStyle),
                                h = i(a.fontFamily, r.defaultFontFamily),
                                f = o.fontString(d, c, h),
                                g = o.options.toLineHeight(a.lineHeight, d),
                                p = g / 2 + a.padding,
                                v = 0,
                                m = t.top,
                                b = t.left,
                                x = t.bottom,
                                y = t.right;
                            e.fillStyle = i(a.fontColor, r.defaultFontColor), e.font = f, t.isHorizontal() ? (l = b + (y - b) / 2, u = m + p, s = y - b) : (l = "left" === a.position ? b + p : y - p, u = m + (x - m) / 2, s = x - m, v = Math.PI * ("left" === a.position ? -.5 : .5)), e.save(), e.translate(l, u), e.rotate(v), e.textAlign = "center", e.textBaseline = "middle";
                            var k = a.text;
                            if (o.isArray(k))
                                for (var C = 0, w = 0; w < k.length; ++w) e.fillText(k[w], 0, C, s), C += g;
                            else e.fillText(k, 0, 0, s);
                            e.restore()
                        }
                    }
                }), {
                    id: "title",
                    beforeInit: function(t) {
                        var e = t.options.title;
                        e && r(t, e)
                    },
                    beforeUpdate: function(i) {
                        var a = i.options.title,
                            s = i.titleBlock;
                        a ? (o.mergeIf(a, n.global.title), s ? (e.configure(i, s, a), s.options = a) : r(i, a)) : s && (t.layoutService.removeBox(i, s), delete i.titleBlock)
                    }
                }
            }
        },
        mlr9: function(t, e, i) {
            "use strict";
            var n = i("RDha");

            function a(t, e) {
                return t.native ? {
                    x: t.x,
                    y: t.y
                } : n.getRelativePosition(t, e)
            }

            function o(t, e) {
                var i, n, a, o, r;
                for (n = 0, o = t.data.datasets.length; n < o; ++n)
                    if (t.isDatasetVisible(n))
                        for (a = 0, r = (i = t.getDatasetMeta(n)).data.length; a < r; ++a) {
                            var s = i.data[a];
                            s._view.skip || e(s)
                        }
            }

            function r(t, e) {
                var i = [];
                return o(t, function(t) {
                    t.inRange(e.x, e.y) && i.push(t)
                }), i
            }

            function s(t, e, i, n) {
                var a = Number.POSITIVE_INFINITY,
                    r = [];
                return o(t, function(t) {
                    if (!i || t.inRange(e.x, e.y)) {
                        var o = t.getCenterPoint(),
                            s = n(e, o);
                        s < a ? (r = [t], a = s) : s === a && r.push(t)
                    }
                }), r
            }

            function l(t) {
                var e = -1 !== t.indexOf("x"),
                    i = -1 !== t.indexOf("y");
                return function(t, n) {
                    var a = e ? Math.abs(t.x - n.x) : 0,
                        o = i ? Math.abs(t.y - n.y) : 0;
                    return Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2))
                }
            }

            function u(t, e, i) {
                var n = a(e, t);
                i.axis = i.axis || "x";
                var o = l(i.axis),
                    u = i.intersect ? r(t, n) : s(t, n, !1, o),
                    d = [];
                return u.length ? (t.data.datasets.forEach(function(e, i) {
                    if (t.isDatasetVisible(i)) {
                        var n = t.getDatasetMeta(i).data[u[0]._index];
                        n && !n._view.skip && d.push(n)
                    }
                }), d) : []
            }
            t.exports = {
                modes: {
                    single: function(t, e) {
                        var i = a(e, t),
                            n = [];
                        return o(t, function(t) {
                            if (t.inRange(i.x, i.y)) return n.push(t), n
                        }), n.slice(0, 1)
                    },
                    label: u,
                    index: u,
                    dataset: function(t, e, i) {
                        var n = a(e, t);
                        i.axis = i.axis || "xy";
                        var o = l(i.axis),
                            u = i.intersect ? r(t, n) : s(t, n, !1, o);
                        return u.length > 0 && (u = t.getDatasetMeta(u[0]._datasetIndex).data), u
                    },
                    "x-axis": function(t, e) {
                        return u(t, e, {
                            intersect: !1
                        })
                    },
                    point: function(t, e) {
                        return r(t, a(e, t))
                    },
                    nearest: function(t, e, i) {
                        var n = a(e, t);
                        i.axis = i.axis || "xy";
                        var o = l(i.axis),
                            r = s(t, n, i.intersect, o);
                        return r.length > 1 && r.sort(function(t, e) {
                            var i = t.getArea() - e.getArea();
                            return 0 === i && (i = t._datasetIndex - e._datasetIndex), i
                        }), r.slice(0, 1)
                    },
                    x: function(t, e, i) {
                        var n = a(e, t),
                            r = [],
                            s = !1;
                        return o(t, function(t) {
                            t.inXRange(n.x) && r.push(t), t.inRange(n.x, n.y) && (s = !0)
                        }), i.intersect && !s && (r = []), r
                    },
                    y: function(t, e, i) {
                        var n = a(e, t),
                            r = [],
                            s = !1;
                        return o(t, function(t) {
                            t.inYRange(n.y) && r.push(t), t.inRange(n.x, n.y) && (s = !0)
                        }), i.intersect && !s && (r = []), r
                    }
                }
            }
        },
        nDWh: function(t, e, i) {
            "use strict";
            var n = i("6ww4"),
                a = i("CDJp"),
                o = i("RDha");
            t.exports = function(t) {
                function e(t, e, i) {
                    var n;
                    return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n
                }

                function i(t) {
                    return void 0 !== t && null !== t && "none" !== t
                }

                function r(t, n, a) {
                    var o = document.defaultView,
                        r = t.parentNode,
                        s = o.getComputedStyle(t)[n],
                        l = o.getComputedStyle(r)[n],
                        u = i(s),
                        d = i(l),
                        c = Number.POSITIVE_INFINITY;
                    return u || d ? Math.min(u ? e(s, t, a) : c, d ? e(l, r, a) : c) : "none"
                }
                o.configMerge = function() {
                    return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
                        merger: function(e, i, n, a) {
                            var r = i[e] || {},
                                s = n[e];
                            "scales" === e ? i[e] = o.scaleMerge(r, s) : "scale" === e ? i[e] = o.merge(r, [t.scaleService.getScaleDefaults(s.type), s]) : o._merger(e, i, n, a)
                        }
                    })
                }, o.scaleMerge = function() {
                    return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
                        merger: function(e, i, n, a) {
                            if ("xAxes" === e || "yAxes" === e) {
                                var r, s, l, u = n[e].length;
                                for (i[e] || (i[e] = []), r = 0; r < u; ++r) l = n[e][r], s = o.valueOrDefault(l.type, "xAxes" === e ? "category" : "linear"), r >= i[e].length && i[e].push({}), !i[e][r].type || l.type && l.type !== i[e][r].type ? o.merge(i[e][r], [t.scaleService.getScaleDefaults(s), l]) : o.merge(i[e][r], l)
                            } else o._merger(e, i, n, a)
                        }
                    })
                }, o.where = function(t, e) {
                    if (o.isArray(t) && Array.prototype.filter) return t.filter(e);
                    var i = [];
                    return o.each(t, function(t) {
                        e(t) && i.push(t)
                    }), i
                }, o.findIndex = Array.prototype.findIndex ? function(t, e, i) {
                    return t.findIndex(e, i)
                } : function(t, e, i) {
                    i = void 0 === i ? t : i;
                    for (var n = 0, a = t.length; n < a; ++n)
                        if (e.call(i, t[n], n, t)) return n;
                    return -1
                }, o.findNextWhere = function(t, e, i) {
                    o.isNullOrUndef(i) && (i = -1);
                    for (var n = i + 1; n < t.length; n++) {
                        var a = t[n];
                        if (e(a)) return a
                    }
                }, o.findPreviousWhere = function(t, e, i) {
                    o.isNullOrUndef(i) && (i = t.length);
                    for (var n = i - 1; n >= 0; n--) {
                        var a = t[n];
                        if (e(a)) return a
                    }
                }, o.isNumber = function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }, o.almostEquals = function(t, e, i) {
                    return Math.abs(t - e) < i
                }, o.almostWhole = function(t, e) {
                    var i = Math.round(t);
                    return i - e < t && i + e > t
                }, o.max = function(t) {
                    return t.reduce(function(t, e) {
                        return isNaN(e) ? t : Math.max(t, e)
                    }, Number.NEGATIVE_INFINITY)
                }, o.min = function(t) {
                    return t.reduce(function(t, e) {
                        return isNaN(e) ? t : Math.min(t, e)
                    }, Number.POSITIVE_INFINITY)
                }, o.sign = Math.sign ? function(t) {
                    return Math.sign(t)
                } : function(t) {
                    return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1
                }, o.log10 = Math.log10 ? function(t) {
                    return Math.log10(t)
                } : function(t) {
                    return Math.log(t) / Math.LN10
                }, o.toRadians = function(t) {
                    return t * (Math.PI / 180)
                }, o.toDegrees = function(t) {
                    return t * (180 / Math.PI)
                }, o.getAngleFromPoint = function(t, e) {
                    var i = e.x - t.x,
                        n = e.y - t.y,
                        a = Math.sqrt(i * i + n * n),
                        o = Math.atan2(n, i);
                    return o < -.5 * Math.PI && (o += 2 * Math.PI), {
                        angle: o,
                        distance: a
                    }
                }, o.distanceBetweenPoints = function(t, e) {
                    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                }, o.aliasPixel = function(t) {
                    return t % 2 == 0 ? 0 : .5
                }, o.splineCurve = function(t, e, i, n) {
                    var a = t.skip ? e : t,
                        o = e,
                        r = i.skip ? e : i,
                        s = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
                        l = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
                        u = s / (s + l),
                        d = l / (s + l),
                        c = n * (u = isNaN(u) ? 0 : u),
                        h = n * (d = isNaN(d) ? 0 : d);
                    return {
                        previous: {
                            x: o.x - c * (r.x - a.x),
                            y: o.y - c * (r.y - a.y)
                        },
                        next: {
                            x: o.x + h * (r.x - a.x),
                            y: o.y + h * (r.y - a.y)
                        }
                    }
                }, o.EPSILON = Number.EPSILON || 1e-14, o.splineCurveMonotone = function(t) {
                    var e, i, n, a, r, s, l, u, d, c = (t || []).map(function(t) {
                            return {
                                model: t._model,
                                deltaK: 0,
                                mK: 0
                            }
                        }),
                        h = c.length;
                    for (e = 0; e < h; ++e)
                        if (!(n = c[e]).model.skip) {
                            if (i = e > 0 ? c[e - 1] : null, (a = e < h - 1 ? c[e + 1] : null) && !a.model.skip) {
                                var f = a.model.x - n.model.x;
                                n.deltaK = 0 !== f ? (a.model.y - n.model.y) / f : 0
                            }!i || i.model.skip ? n.mK = n.deltaK : !a || a.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2
                        }
                    for (e = 0; e < h - 1; ++e) n = c[e], a = c[e + 1], n.model.skip || a.model.skip || (o.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = a.mK = 0 : (r = n.mK / n.deltaK, s = a.mK / n.deltaK, (u = Math.pow(r, 2) + Math.pow(s, 2)) <= 9 || (l = 3 / Math.sqrt(u), n.mK = r * l * n.deltaK, a.mK = s * l * n.deltaK)));
                    for (e = 0; e < h; ++e)(n = c[e]).model.skip || (i = e > 0 ? c[e - 1] : null, a = e < h - 1 ? c[e + 1] : null, i && !i.model.skip && (d = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - d, n.model.controlPointPreviousY = n.model.y - d * n.mK), a && !a.model.skip && (d = (a.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + d, n.model.controlPointNextY = n.model.y + d * n.mK))
                }, o.nextItem = function(t, e, i) {
                    return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                }, o.previousItem = function(t, e, i) {
                    return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                }, o.niceNum = function(t, e) {
                    var i = Math.floor(o.log10(t)),
                        n = t / Math.pow(10, i);
                    return (e ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i)
                }, o.requestAnimFrame = "undefined" == typeof window ? function(t) {
                    t()
                } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                    return window.setTimeout(t, 1e3 / 60)
                }, o.getRelativePosition = function(t, e) {
                    var i, n, a = t.originalEvent || t,
                        r = t.currentTarget || t.srcElement,
                        s = r.getBoundingClientRect(),
                        l = a.touches;
                    l && l.length > 0 ? (i = l[0].clientX, n = l[0].clientY) : (i = a.clientX, n = a.clientY);
                    var u = parseFloat(o.getStyle(r, "padding-left")),
                        d = parseFloat(o.getStyle(r, "padding-top")),
                        c = parseFloat(o.getStyle(r, "padding-right")),
                        h = parseFloat(o.getStyle(r, "padding-bottom")),
                        f = s.right - s.left - u - c,
                        g = s.bottom - s.top - d - h;
                    return {
                        x: i = Math.round((i - s.left - u) / f * r.width / e.currentDevicePixelRatio),
                        y: n = Math.round((n - s.top - d) / g * r.height / e.currentDevicePixelRatio)
                    }
                }, o.getConstraintWidth = function(t) {
                    return r(t, "max-width", "clientWidth")
                }, o.getConstraintHeight = function(t) {
                    return r(t, "max-height", "clientHeight")
                }, o.getMaximumWidth = function(t) {
                    var e = t.parentNode;
                    if (!e) return t.clientWidth;
                    var i = parseInt(o.getStyle(e, "padding-left"), 10),
                        n = parseInt(o.getStyle(e, "padding-right"), 10),
                        a = e.clientWidth - i - n,
                        r = o.getConstraintWidth(t);
                    return isNaN(r) ? a : Math.min(a, r)
                }, o.getMaximumHeight = function(t) {
                    var e = t.parentNode;
                    if (!e) return t.clientHeight;
                    var i = parseInt(o.getStyle(e, "padding-top"), 10),
                        n = parseInt(o.getStyle(e, "padding-bottom"), 10),
                        a = e.clientHeight - i - n,
                        r = o.getConstraintHeight(t);
                    return isNaN(r) ? a : Math.min(a, r)
                }, o.getStyle = function(t, e) {
                    return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                }, o.retinaScale = function(t, e) {
                    var i = t.currentDevicePixelRatio = e || window.devicePixelRatio || 1;
                    if (1 !== i) {
                        var n = t.canvas,
                            a = t.height,
                            o = t.width;
                        n.height = a * i, n.width = o * i, t.ctx.scale(i, i), n.style.height = a + "px", n.style.width = o + "px"
                    }
                }, o.fontString = function(t, e, i) {
                    return e + " " + t + "px " + i
                }, o.longestText = function(t, e, i, n) {
                    var a = (n = n || {}).data = n.data || {},
                        r = n.garbageCollect = n.garbageCollect || [];
                    n.font !== e && (a = n.data = {}, r = n.garbageCollect = [], n.font = e), t.font = e;
                    var s = 0;
                    o.each(i, function(e) {
                        void 0 !== e && null !== e && !0 !== o.isArray(e) ? s = o.measureText(t, a, r, s, e) : o.isArray(e) && o.each(e, function(e) {
                            void 0 === e || null === e || o.isArray(e) || (s = o.measureText(t, a, r, s, e))
                        })
                    });
                    var l = r.length / 2;
                    if (l > i.length) {
                        for (var u = 0; u < l; u++) delete a[r[u]];
                        r.splice(0, l)
                    }
                    return s
                }, o.measureText = function(t, e, i, n, a) {
                    var o = e[a];
                    return o || (o = e[a] = t.measureText(a).width, i.push(a)), o > n && (n = o), n
                }, o.numberOfLabelLines = function(t) {
                    var e = 1;
                    return o.each(t, function(t) {
                        o.isArray(t) && t.length > e && (e = t.length)
                    }), e
                }, o.color = n ? function(t) {
                    return t instanceof CanvasGradient && (t = a.global.defaultColor), n(t)
                } : function(t) {
                    return console.error("Color.js not found!"), t
                }, o.getHoverColor = function(t) {
                    return t instanceof CanvasPattern ? t : o.color(t).saturate(.5).darken(.1).rgbString()
                }
            }
        },
        paOr: function(t, e, i) {
            "use strict";
            var n = i("RDha"),
                a = i("g8vO");
            t.exports = function(t) {
                var e = n.noop;
                t.LinearScaleBase = t.Scale.extend({
                    getRightValue: function(e) {
                        return "string" == typeof e ? +e : t.Scale.prototype.getRightValue.call(this, e)
                    },
                    handleTickRangeOptions: function() {
                        var t = this,
                            e = t.options.ticks;
                        if (e.beginAtZero) {
                            var i = n.sign(t.min),
                                a = n.sign(t.max);
                            i < 0 && a < 0 ? t.max = 0 : i > 0 && a > 0 && (t.min = 0)
                        }
                        var o = void 0 !== e.min || void 0 !== e.suggestedMin,
                            r = void 0 !== e.max || void 0 !== e.suggestedMax;
                        void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), o !== r && t.min >= t.max && (o ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
                    },
                    getTickLimit: e,
                    handleDirectionalChanges: e,
                    buildTicks: function() {
                        var t = this,
                            e = t.options.ticks,
                            i = t.getTickLimit(),
                            o = {
                                maxTicks: i = Math.max(2, i),
                                min: e.min,
                                max: e.max,
                                stepSize: n.valueOrDefault(e.fixedStepSize, e.stepSize)
                            },
                            r = t.ticks = a.generators.linear(o, t);
                        t.handleDirectionalChanges(), t.max = n.max(r), t.min = n.min(r), e.reverse ? (r.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                    },
                    convertTicksToLabels: function() {
                        var e = this;
                        e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e)
                    }
                })
            }
        },
        q8Fl: function(t, e, i) {
            "use strict";
            var n = i("RDha"),
                a = "$chartjs",
                o = "chartjs-",
                r = o + "render-monitor",
                s = o + "render-animation",
                l = ["animationstart", "webkitAnimationStart"],
                u = {
                    touchstart: "mousedown",
                    touchmove: "mousemove",
                    touchend: "mouseup",
                    pointerenter: "mouseenter",
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointerleave: "mouseout",
                    pointerout: "mouseout"
                };

            function d(t, e) {
                var i = n.getStyle(t, e),
                    a = i && i.match(/^(\d+)(\.\d+)?px$/);
                return a ? Number(a[1]) : void 0
            }
            var c = !! function() {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function() {
                            t = !0
                        }
                    });
                    window.addEventListener("e", null, e)
                } catch (t) {}
                return t
            }() && {
                passive: !0
            };

            function h(t, e, i) {
                t.addEventListener(e, i, c)
            }

            function f(t, e, i) {
                t.removeEventListener(e, i, c)
            }

            function g(t, e, i, n, a) {
                return {
                    type: t,
                    chart: e,
                    native: a || null,
                    x: void 0 !== i ? i : null,
                    y: void 0 !== n ? n : null
                }
            }

            function p(t, e, i) {
                var u = t[a] || (t[a] = {}),
                    d = u.resizer = function(t) {
                        var e = document.createElement("div"),
                            i = o + "size-monitor",
                            n = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                        e.style.cssText = n, e.className = i, e.innerHTML = '<div class="' + i + '-expand" style="' + n + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + i + '-shrink" style="' + n + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
                        var a = e.childNodes[0],
                            r = e.childNodes[1];
                        e._reset = function() {
                            a.scrollLeft = 1e6, a.scrollTop = 1e6, r.scrollLeft = 1e6, r.scrollTop = 1e6
                        };
                        var s = function() {
                            e._reset(), t()
                        };
                        return h(a, "scroll", s.bind(a, "expand")), h(r, "scroll", s.bind(r, "shrink")), e
                    }(function(t, e) {
                        var i = !1,
                            a = [];
                        return function() {
                            a = Array.prototype.slice.call(arguments), e = e || this, i || (i = !0, n.requestAnimFrame.call(window, function() {
                                i = !1, t.apply(e, a)
                            }))
                        }
                    }(function() {
                        if (u.resizer) return e(g("resize", i))
                    }));
                ! function(t, e) {
                    var i = t[a] || (t[a] = {}),
                        o = i.renderProxy = function(t) {
                            t.animationName === s && e()
                        };
                    n.each(l, function(e) {
                        h(t, e, o)
                    }), i.reflow = !!t.offsetParent, t.classList.add(r)
                }(t, function() {
                    if (u.resizer) {
                        var e = t.parentNode;
                        e && e !== d.parentNode && e.insertBefore(d, e.firstChild), d._reset()
                    }
                })
            }

            function v(t) {
                var e = t[a] || {},
                    i = e.resizer;
                delete e.resizer,
                    function(t) {
                        var e = t[a] || {},
                            i = e.renderProxy;
                        i && (n.each(l, function(e) {
                            f(t, e, i)
                        }), delete e.renderProxy), t.classList.remove(r)
                    }(t), i && i.parentNode && i.parentNode.removeChild(i)
            }
            t.exports = {
                _enabled: "undefined" != typeof window && "undefined" != typeof document,
                initialize: function() {
                    var t = "from{opacity:0.99}to{opacity:1}";
                    ! function(t, e) {
                        var i = t._style || document.createElement("style");
                        t._style || (t._style = i, e = "/* Chart.js */\n" + e, i.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(i)), i.appendChild(document.createTextNode(e))
                    }(this, "@-webkit-keyframes " + s + "{" + t + "}@keyframes " + s + "{" + t + "}." + r + "{-webkit-animation:" + s + " 0.001s;animation:" + s + " 0.001s;}")
                },
                acquireContext: function(t, e) {
                    "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
                    var i = t && t.getContext && t.getContext("2d");
                    return i && i.canvas === t ? (function(t, e) {
                        var i = t.style,
                            n = t.getAttribute("height"),
                            o = t.getAttribute("width");
                        if (t[a] = {
                                initial: {
                                    height: n,
                                    width: o,
                                    style: {
                                        display: i.display,
                                        height: i.height,
                                        width: i.width
                                    }
                                }
                            }, i.display = i.display || "block", null === o || "" === o) {
                            var r = d(t, "width");
                            void 0 !== r && (t.width = r)
                        }
                        if (null === n || "" === n)
                            if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);
                            else {
                                var s = d(t, "height");
                                void 0 !== r && (t.height = s)
                            }
                    }(t, e), i) : null
                },
                releaseContext: function(t) {
                    var e = t.canvas;
                    if (e[a]) {
                        var i = e[a].initial;
                        ["height", "width"].forEach(function(t) {
                            var a = i[t];
                            n.isNullOrUndef(a) ? e.removeAttribute(t) : e.setAttribute(t, a)
                        }), n.each(i.style || {}, function(t, i) {
                            e.style[i] = t
                        }), e.width = e.width, delete e[a]
                    }
                },
                addEventListener: function(t, e, i) {
                    var o = t.canvas;
                    if ("resize" !== e) {
                        var r = i[a] || (i[a] = {});
                        h(o, e, (r.proxies || (r.proxies = {}))[t.id + "_" + e] = function(e) {
                            i(function(t, e) {
                                var i = u[t.type] || t.type,
                                    a = n.getRelativePosition(t, e);
                                return g(i, e, a.x, a.y, t)
                            }(e, t))
                        })
                    } else p(o, i, t)
                },
                removeEventListener: function(t, e, i) {
                    var n = t.canvas;
                    if ("resize" !== e) {
                        var o = ((i[a] || {}).proxies || {})[t.id + "_" + e];
                        o && f(n, e, o)
                    } else v(n)
                }
            }, n.addEvent = h, n.removeEvent = f
        },
        qzaf: function(t, e, i) {
            "use strict";
            t.exports = function(t) {
                t.PolarArea = function(e, i) {
                    return i.type = "polarArea", new t(e, i)
                }
            }
        },
        tjFV: function(t, e, i) {
            "use strict";
            var n = i("CDJp"),
                a = i("RDha");
            t.exports = function(t) {
                t.scaleService = {
                    constructors: {},
                    defaults: {},
                    registerScaleType: function(t, e, i) {
                        this.constructors[t] = e, this.defaults[t] = a.clone(i)
                    },
                    getScaleConstructor: function(t) {
                        return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                    },
                    getScaleDefaults: function(t) {
                        return this.defaults.hasOwnProperty(t) ? a.merge({}, [n.scale, this.defaults[t]]) : {}
                    },
                    updateScaleDefaults: function(t, e) {
                        this.defaults.hasOwnProperty(t) && (this.defaults[t] = a.extend(this.defaults[t], e))
                    },
                    addScalesToLayout: function(e) {
                        a.each(e.scales, function(i) {
                            i.fullWidth = i.options.fullWidth, i.position = i.options.position, i.weight = i.options.weight, t.layoutService.addBox(e, i)
                        })
                    }
                }
            }
        },
        u0Op: function(t, e, i) {
            "use strict";
            var n = i("TC34"),
                a = {
                    linear: function(t) {
                        return t
                    },
                    easeInQuad: function(t) {
                        return t * t
                    },
                    easeOutQuad: function(t) {
                        return -t * (t - 2)
                    },
                    easeInOutQuad: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                    },
                    easeInCubic: function(t) {
                        return t * t * t
                    },
                    easeOutCubic: function(t) {
                        return (t -= 1) * t * t + 1
                    },
                    easeInOutCubic: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                    },
                    easeInQuart: function(t) {
                        return t * t * t * t
                    },
                    easeOutQuart: function(t) {
                        return -((t -= 1) * t * t * t - 1)
                    },
                    easeInOutQuart: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                    },
                    easeInQuint: function(t) {
                        return t * t * t * t * t
                    },
                    easeOutQuint: function(t) {
                        return (t -= 1) * t * t * t * t + 1
                    },
                    easeInOutQuint: function(t) {
                        return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                    },
                    easeInSine: function(t) {
                        return 1 - Math.cos(t * (Math.PI / 2))
                    },
                    easeOutSine: function(t) {
                        return Math.sin(t * (Math.PI / 2))
                    },
                    easeInOutSine: function(t) {
                        return -.5 * (Math.cos(Math.PI * t) - 1)
                    },
                    easeInExpo: function(t) {
                        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                    },
                    easeOutExpo: function(t) {
                        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                    },
                    easeInOutExpo: function(t) {
                        return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                    },
                    easeInCirc: function(t) {
                        return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
                    },
                    easeOutCirc: function(t) {
                        return Math.sqrt(1 - (t -= 1) * t)
                    },
                    easeInOutCirc: function(t) {
                        return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    },
                    easeInElastic: function(t) {
                        var e = 1.70158,
                            i = 0,
                            n = 1;
                        return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i))
                    },
                    easeOutElastic: function(t) {
                        var e = 1.70158,
                            i = 0,
                            n = 1;
                        return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1)
                    },
                    easeInOutElastic: function(t) {
                        var e = 1.70158,
                            i = 0,
                            n = 1;
                        return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .45), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1)
                    },
                    easeInBack: function(t) {
                        var e = 1.70158;
                        return t * t * ((e + 1) * t - e)
                    },
                    easeOutBack: function(t) {
                        var e = 1.70158;
                        return (t -= 1) * t * ((e + 1) * t + e) + 1
                    },
                    easeInOutBack: function(t) {
                        var e = 1.70158;
                        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                    },
                    easeInBounce: function(t) {
                        return 1 - a.easeOutBounce(1 - t)
                    },
                    easeOutBounce: function(t) {
                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    },
                    easeInOutBounce: function(t) {
                        return t < .5 ? .5 * a.easeInBounce(2 * t) : .5 * a.easeOutBounce(2 * t - 1) + .5
                    }
                };
            t.exports = {
                effects: a
            }, n.easingEffects = a
        },
        vpM6: function(t, e, i) {
            "use strict";
            var n = i("CDJp"),
                a = i("vvH+"),
                o = i("RDha");
            n._set("global", {
                plugins: {
                    filler: {
                        propagate: !0
                    }
                }
            }), t.exports = function() {
                var t = {
                    dataset: function(t) {
                        var e = t.fill,
                            i = t.chart,
                            n = i.getDatasetMeta(e),
                            a = n && i.isDatasetVisible(e) && n.dataset._children || [],
                            o = a.length || 0;
                        return o ? function(t, e) {
                            return e < o && a[e]._view || null
                        } : null
                    },
                    boundary: function(t) {
                        var e = t.boundary,
                            i = e ? e.x : null,
                            n = e ? e.y : null;
                        return function(t) {
                            return {
                                x: null === i ? t.x : i,
                                y: null === n ? t.y : n
                            }
                        }
                    }
                };

                function e(t, e, i) {
                    var n, a = t._model || {},
                        o = a.fill;
                    if (void 0 === o && (o = !!a.backgroundColor), !1 === o || null === o) return !1;
                    if (!0 === o) return "origin";
                    if (n = parseFloat(o, 10), isFinite(n) && Math.floor(n) === n) return "-" !== o[0] && "+" !== o[0] || (n = e + n), !(n === e || n < 0 || n >= i) && n;
                    switch (o) {
                        case "bottom":
                            return "start";
                        case "top":
                            return "end";
                        case "zero":
                            return "origin";
                        case "origin":
                        case "start":
                        case "end":
                            return o;
                        default:
                            return !1
                    }
                }

                function i(t) {
                    var e, i = t.el._model || {},
                        n = t.el._scale || {},
                        a = t.fill,
                        o = null;
                    if (isFinite(a)) return null;
                    if ("start" === a ? o = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === a ? o = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? o = i.scaleZero : n.getBasePosition ? o = n.getBasePosition() : n.getBasePixel && (o = n.getBasePixel()), void 0 !== o && null !== o) {
                        if (void 0 !== o.x && void 0 !== o.y) return o;
                        if ("number" == typeof o && isFinite(o)) return {
                            x: (e = n.isHorizontal()) ? o : null,
                            y: e ? null : o
                        }
                    }
                    return null
                }

                function r(t, e, i) {
                    var n, a = t[e].fill,
                        o = [e];
                    if (!i) return a;
                    for (; !1 !== a && -1 === o.indexOf(a);) {
                        if (!isFinite(a)) return a;
                        if (!(n = t[a])) return !1;
                        if (n.visible) return a;
                        o.push(a), a = n.fill
                    }
                    return !1
                }

                function s(e) {
                    var i = e.fill,
                        n = "dataset";
                    return !1 === i ? null : (isFinite(i) || (n = "boundary"), t[n](e))
                }

                function l(t) {
                    return t && !t.skip
                }

                function u(t, e, i, n, a) {
                    var r;
                    if (n && a) {
                        for (t.moveTo(e[0].x, e[0].y), r = 1; r < n; ++r) o.canvas.lineTo(t, e[r - 1], e[r]);
                        for (t.lineTo(i[a - 1].x, i[a - 1].y), r = a - 1; r > 0; --r) o.canvas.lineTo(t, i[r], i[r - 1], !0)
                    }
                }
                return {
                    id: "filler",
                    afterDatasetsUpdate: function(t, n) {
                        var o, l, u, d, c = (t.data.datasets || []).length,
                            h = n.propagate,
                            f = [];
                        for (l = 0; l < c; ++l) d = null, (u = (o = t.getDatasetMeta(l)).dataset) && u._model && u instanceof a.Line && (d = {
                            visible: t.isDatasetVisible(l),
                            fill: e(u, l, c),
                            chart: t,
                            el: u
                        }), o.$filler = d, f.push(d);
                        for (l = 0; l < c; ++l)(d = f[l]) && (d.fill = r(f, l, h), d.boundary = i(d), d.mapper = s(d))
                    },
                    beforeDatasetDraw: function(t, e) {
                        var i = e.meta.$filler;
                        if (i) {
                            var a = t.ctx,
                                r = i.el,
                                s = r._view,
                                d = r._children || [],
                                c = i.mapper,
                                h = s.backgroundColor || n.global.defaultColor;
                            c && h && d.length && (o.canvas.clipArea(a, t.chartArea), function(t, e, i, n, a, o) {
                                var r, s, d, c, h, f, g, p = e.length,
                                    v = n.spanGaps,
                                    m = [],
                                    b = [],
                                    x = 0,
                                    y = 0;
                                for (t.beginPath(), r = 0, s = p + !!o; r < s; ++r) h = i(c = e[d = r % p]._view, d, n), f = l(c), g = l(h), f && g ? (x = m.push(c), y = b.push(h)) : x && y && (v ? (f && m.push(c), g && b.push(h)) : (u(t, m, b, x, y), x = y = 0, m = [], b = []));
                                u(t, m, b, x, y), t.closePath(), t.fillStyle = a, t.fill()
                            }(a, d, c, s, h, r._loop), o.canvas.unclipArea(a))
                        }
                    }
                }
            }
        },
        "vvH+": function(t, e, i) {
            "use strict";
            t.exports = {}, t.exports.Arc = i("X8CM"), t.exports.Line = i("UqmZ"), t.exports.Point = i("OXbD"), t.exports.Rectangle = i("2UWG")
        },
        x8uC: function(t, e, i) {
            "use strict";
            var n = i("CDJp"),
                a = i("K2E3"),
                o = i("RDha");
            n._set("global", {
                tooltips: {
                    enabled: !0,
                    custom: null,
                    mode: "nearest",
                    position: "average",
                    intersect: !0,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleFontStyle: "bold",
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleFontColor: "#fff",
                    titleAlign: "left",
                    bodySpacing: 2,
                    bodyFontColor: "#fff",
                    bodyAlign: "left",
                    footerFontStyle: "bold",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFontColor: "#fff",
                    footerAlign: "left",
                    yPadding: 6,
                    xPadding: 6,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    callbacks: {
                        beforeTitle: o.noop,
                        title: function(t, e) {
                            var i = "",
                                n = e.labels,
                                a = n ? n.length : 0;
                            if (t.length > 0) {
                                var o = t[0];
                                o.xLabel ? i = o.xLabel : a > 0 && o.index < a && (i = n[o.index])
                            }
                            return i
                        },
                        afterTitle: o.noop,
                        beforeBody: o.noop,
                        beforeLabel: o.noop,
                        label: function(t, e) {
                            var i = e.datasets[t.datasetIndex].label || "";
                            return i && (i += ": "), i += t.yLabel
                        },
                        labelColor: function(t, e) {
                            var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                            return {
                                borderColor: i.borderColor,
                                backgroundColor: i.backgroundColor
                            }
                        },
                        labelTextColor: function() {
                            return this._options.bodyFontColor
                        },
                        afterLabel: o.noop,
                        afterBody: o.noop,
                        beforeFooter: o.noop,
                        footer: o.noop,
                        afterFooter: o.noop
                    }
                }
            }), t.exports = function(t) {
                function e(t, e) {
                    var i = o.color(t);
                    return i.alpha(e * i.alpha()).rgbaString()
                }

                function i(t, e) {
                    return e && (o.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
                }

                function r(t) {
                    var e = t._xScale,
                        i = t._yScale || t._scale,
                        n = t._index,
                        a = t._datasetIndex;
                    return {
                        xLabel: e ? e.getLabelForIndex(n, a) : "",
                        yLabel: i ? i.getLabelForIndex(n, a) : "",
                        index: n,
                        datasetIndex: a,
                        x: t._model.x,
                        y: t._model.y
                    }
                }

                function s(t) {
                    var e = n.global,
                        i = o.valueOrDefault;
                    return {
                        xPadding: t.xPadding,
                        yPadding: t.yPadding,
                        xAlign: t.xAlign,
                        yAlign: t.yAlign,
                        bodyFontColor: t.bodyFontColor,
                        _bodyFontFamily: i(t.bodyFontFamily, e.defaultFontFamily),
                        _bodyFontStyle: i(t.bodyFontStyle, e.defaultFontStyle),
                        _bodyAlign: t.bodyAlign,
                        bodyFontSize: i(t.bodyFontSize, e.defaultFontSize),
                        bodySpacing: t.bodySpacing,
                        titleFontColor: t.titleFontColor,
                        _titleFontFamily: i(t.titleFontFamily, e.defaultFontFamily),
                        _titleFontStyle: i(t.titleFontStyle, e.defaultFontStyle),
                        titleFontSize: i(t.titleFontSize, e.defaultFontSize),
                        _titleAlign: t.titleAlign,
                        titleSpacing: t.titleSpacing,
                        titleMarginBottom: t.titleMarginBottom,
                        footerFontColor: t.footerFontColor,
                        _footerFontFamily: i(t.footerFontFamily, e.defaultFontFamily),
                        _footerFontStyle: i(t.footerFontStyle, e.defaultFontStyle),
                        footerFontSize: i(t.footerFontSize, e.defaultFontSize),
                        _footerAlign: t.footerAlign,
                        footerSpacing: t.footerSpacing,
                        footerMarginTop: t.footerMarginTop,
                        caretSize: t.caretSize,
                        cornerRadius: t.cornerRadius,
                        backgroundColor: t.backgroundColor,
                        opacity: 0,
                        legendColorBackground: t.multiKeyBackground,
                        displayColors: t.displayColors,
                        borderColor: t.borderColor,
                        borderWidth: t.borderWidth
                    }
                }
                t.Tooltip = a.extend({
                    initialize: function() {
                        this._model = s(this._options), this._lastActive = []
                    },
                    getTitle: function() {
                        var t = this._options.callbacks,
                            e = t.beforeTitle.apply(this, arguments),
                            n = t.title.apply(this, arguments),
                            a = t.afterTitle.apply(this, arguments),
                            o = [];
                        return o = i(o = i(o = i(o, e), n), a)
                    },
                    getBeforeBody: function() {
                        var t = this._options.callbacks.beforeBody.apply(this, arguments);
                        return o.isArray(t) ? t : void 0 !== t ? [t] : []
                    },
                    getBody: function(t, e) {
                        var n = this,
                            a = n._options.callbacks,
                            r = [];
                        return o.each(t, function(t) {
                            var o = {
                                before: [],
                                lines: [],
                                after: []
                            };
                            i(o.before, a.beforeLabel.call(n, t, e)), i(o.lines, a.label.call(n, t, e)), i(o.after, a.afterLabel.call(n, t, e)), r.push(o)
                        }), r
                    },
                    getAfterBody: function() {
                        var t = this._options.callbacks.afterBody.apply(this, arguments);
                        return o.isArray(t) ? t : void 0 !== t ? [t] : []
                    },
                    getFooter: function() {
                        var t = this._options.callbacks,
                            e = t.beforeFooter.apply(this, arguments),
                            n = t.footer.apply(this, arguments),
                            a = t.afterFooter.apply(this, arguments),
                            o = [];
                        return o = i(o = i(o = i(o, e), n), a)
                    },
                    update: function(e) {
                        var i, n, a = this,
                            l = a._options,
                            u = a._model,
                            d = a._model = s(l),
                            c = a._active,
                            h = a._data,
                            f = {
                                xAlign: u.xAlign,
                                yAlign: u.yAlign
                            },
                            g = {
                                x: u.x,
                                y: u.y
                            },
                            p = {
                                width: u.width,
                                height: u.height
                            },
                            v = {
                                x: u.caretX,
                                y: u.caretY
                            };
                        if (c.length) {
                            d.opacity = 1;
                            var m = [],
                                b = [];
                            v = t.Tooltip.positioners[l.position].call(a, c, a._eventPosition);
                            var x = [];
                            for (i = 0, n = c.length; i < n; ++i) x.push(r(c[i]));
                            l.filter && (x = x.filter(function(t) {
                                return l.filter(t, h)
                            })), l.itemSort && (x = x.sort(function(t, e) {
                                return l.itemSort(t, e, h)
                            })), o.each(x, function(t) {
                                m.push(l.callbacks.labelColor.call(a, t, a._chart)), b.push(l.callbacks.labelTextColor.call(a, t, a._chart))
                            }), d.title = a.getTitle(x, h), d.beforeBody = a.getBeforeBody(x, h), d.body = a.getBody(x, h), d.afterBody = a.getAfterBody(x, h), d.footer = a.getFooter(x, h), d.x = Math.round(v.x), d.y = Math.round(v.y), d.caretPadding = l.caretPadding, d.labelColors = m, d.labelTextColors = b, d.dataPoints = x, g = function(t, e, i) {
                                var n = t.x,
                                    a = t.y,
                                    o = t.caretSize,
                                    r = t.caretPadding,
                                    s = t.cornerRadius,
                                    l = i.xAlign,
                                    u = i.yAlign,
                                    d = o + r,
                                    c = s + r;
                                return "right" === l ? n -= e.width : "center" === l && (n -= e.width / 2), "top" === u ? a += d : a -= "bottom" === u ? e.height + d : e.height / 2, "center" === u ? "left" === l ? n += d : "right" === l && (n -= d) : "left" === l ? n -= c : "right" === l && (n += c), {
                                    x: n,
                                    y: a
                                }
                            }(d, p = function(t, e) {
                                var i = t._chart.ctx,
                                    n = 2 * e.yPadding,
                                    a = 0,
                                    r = e.body,
                                    s = r.reduce(function(t, e) {
                                        return t + e.before.length + e.lines.length + e.after.length
                                    }, 0);
                                s += e.beforeBody.length + e.afterBody.length;
                                var l = e.title.length,
                                    u = e.footer.length,
                                    d = e.titleFontSize,
                                    c = e.bodyFontSize,
                                    h = e.footerFontSize;
                                n += l * d, n += l ? (l - 1) * e.titleSpacing : 0, n += l ? e.titleMarginBottom : 0, n += s * c, n += s ? (s - 1) * e.bodySpacing : 0, n += u ? e.footerMarginTop : 0, n += u * h, n += u ? (u - 1) * e.footerSpacing : 0;
                                var f = 0,
                                    g = function(t) {
                                        a = Math.max(a, i.measureText(t).width + f)
                                    };
                                return i.font = o.fontString(d, e._titleFontStyle, e._titleFontFamily), o.each(e.title, g), i.font = o.fontString(c, e._bodyFontStyle, e._bodyFontFamily), o.each(e.beforeBody.concat(e.afterBody), g), f = e.displayColors ? c + 2 : 0, o.each(r, function(t) {
                                    o.each(t.before, g), o.each(t.lines, g), o.each(t.after, g)
                                }), f = 0, i.font = o.fontString(h, e._footerFontStyle, e._footerFontFamily), o.each(e.footer, g), {
                                    width: a += 2 * e.xPadding,
                                    height: n
                                }
                            }(this, d), f = function(t, e) {
                                var i, n, a, o, r, s = t._model,
                                    l = t._chart,
                                    u = t._chart.chartArea,
                                    d = "center",
                                    c = "center";
                                s.y < e.height ? c = "top" : s.y > l.height - e.height && (c = "bottom");
                                var h = (u.left + u.right) / 2,
                                    f = (u.top + u.bottom) / 2;
                                "center" === c ? (i = function(t) {
                                    return t <= h
                                }, n = function(t) {
                                    return t > h
                                }) : (i = function(t) {
                                    return t <= e.width / 2
                                }, n = function(t) {
                                    return t >= l.width - e.width / 2
                                }), a = function(t) {
                                    return t + e.width > l.width
                                }, o = function(t) {
                                    return t - e.width < 0
                                }, r = function(t) {
                                    return t <= f ? "top" : "bottom"
                                }, i(s.x) ? (d = "left", a(s.x) && (d = "center", c = r(s.y))) : n(s.x) && (d = "right", o(s.x) && (d = "center", c = r(s.y)));
                                var g = t._options;
                                return {
                                    xAlign: g.xAlign ? g.xAlign : d,
                                    yAlign: g.yAlign ? g.yAlign : c
                                }
                            }(this, p))
                        } else d.opacity = 0;
                        return d.xAlign = f.xAlign, d.yAlign = f.yAlign, d.x = g.x, d.y = g.y, d.width = p.width, d.height = p.height, d.caretX = v.x, d.caretY = v.y, a._model = d, e && l.custom && l.custom.call(a, d), a
                    },
                    drawCaret: function(t, e) {
                        var i = this._chart.ctx,
                            n = this._view,
                            a = this.getCaretPosition(t, e, n);
                        i.lineTo(a.x1, a.y1), i.lineTo(a.x2, a.y2), i.lineTo(a.x3, a.y3)
                    },
                    getCaretPosition: function(t, e, i) {
                        var n, a, o, r, s, l, u = i.caretSize,
                            d = i.cornerRadius,
                            c = i.xAlign,
                            h = i.yAlign,
                            f = t.x,
                            g = t.y,
                            p = e.width,
                            v = e.height;
                        if ("center" === h) s = g + v / 2, "left" === c ? (a = (n = f) - u, o = n, r = s + u, l = s - u) : (a = (n = f + p) + u, o = n, r = s - u, l = s + u);
                        else if ("left" === c ? (n = (a = f + d + u) - u, o = a + u) : "right" === c ? (n = (a = f + p - d - u) - u, o = a + u) : (n = (a = f + p / 2) - u, o = a + u), "top" === h) s = (r = g) - u, l = r;
                        else {
                            s = (r = g + v) + u, l = r;
                            var m = o;
                            o = n, n = m
                        }
                        return {
                            x1: n,
                            x2: a,
                            x3: o,
                            y1: r,
                            y2: s,
                            y3: l
                        }
                    },
                    drawTitle: function(t, i, n, a) {
                        var r = i.title;
                        if (r.length) {
                            n.textAlign = i._titleAlign, n.textBaseline = "top";
                            var s, l, u = i.titleFontSize,
                                d = i.titleSpacing;
                            for (n.fillStyle = e(i.titleFontColor, a), n.font = o.fontString(u, i._titleFontStyle, i._titleFontFamily), s = 0, l = r.length; s < l; ++s) n.fillText(r[s], t.x, t.y), t.y += u + d, s + 1 === r.length && (t.y += i.titleMarginBottom - d)
                        }
                    },
                    drawBody: function(t, i, n, a) {
                        var r = i.bodyFontSize,
                            s = i.bodySpacing,
                            l = i.body;
                        n.textAlign = i._bodyAlign, n.textBaseline = "top", n.font = o.fontString(r, i._bodyFontStyle, i._bodyFontFamily);
                        var u = 0,
                            d = function(e) {
                                n.fillText(e, t.x + u, t.y), t.y += r + s
                            };
                        n.fillStyle = e(i.bodyFontColor, a), o.each(i.beforeBody, d);
                        var c = i.displayColors;
                        u = c ? r + 2 : 0, o.each(l, function(s, l) {
                            var u = e(i.labelTextColors[l], a);
                            n.fillStyle = u, o.each(s.before, d), o.each(s.lines, function(o) {
                                c && (n.fillStyle = e(i.legendColorBackground, a), n.fillRect(t.x, t.y, r, r), n.lineWidth = 1, n.strokeStyle = e(i.labelColors[l].borderColor, a), n.strokeRect(t.x, t.y, r, r), n.fillStyle = e(i.labelColors[l].backgroundColor, a), n.fillRect(t.x + 1, t.y + 1, r - 2, r - 2), n.fillStyle = u), d(o)
                            }), o.each(s.after, d)
                        }), u = 0, o.each(i.afterBody, d), t.y -= s
                    },
                    drawFooter: function(t, i, n, a) {
                        var r = i.footer;
                        r.length && (t.y += i.footerMarginTop, n.textAlign = i._footerAlign, n.textBaseline = "top", n.fillStyle = e(i.footerFontColor, a), n.font = o.fontString(i.footerFontSize, i._footerFontStyle, i._footerFontFamily), o.each(r, function(e) {
                            n.fillText(e, t.x, t.y), t.y += i.footerFontSize + i.footerSpacing
                        }))
                    },
                    drawBackground: function(t, i, n, a, o) {
                        n.fillStyle = e(i.backgroundColor, o), n.strokeStyle = e(i.borderColor, o), n.lineWidth = i.borderWidth;
                        var r = i.xAlign,
                            s = i.yAlign,
                            l = t.x,
                            u = t.y,
                            d = a.width,
                            c = a.height,
                            h = i.cornerRadius;
                        n.beginPath(), n.moveTo(l + h, u), "top" === s && this.drawCaret(t, a), n.lineTo(l + d - h, u), n.quadraticCurveTo(l + d, u, l + d, u + h), "center" === s && "right" === r && this.drawCaret(t, a), n.lineTo(l + d, u + c - h), n.quadraticCurveTo(l + d, u + c, l + d - h, u + c), "bottom" === s && this.drawCaret(t, a), n.lineTo(l + h, u + c), n.quadraticCurveTo(l, u + c, l, u + c - h), "center" === s && "left" === r && this.drawCaret(t, a), n.lineTo(l, u + h), n.quadraticCurveTo(l, u, l + h, u), n.closePath(), n.fill(), i.borderWidth > 0 && n.stroke()
                    },
                    draw: function() {
                        var t = this._chart.ctx,
                            e = this._view;
                        if (0 !== e.opacity) {
                            var i = {
                                    width: e.width,
                                    height: e.height
                                },
                                n = {
                                    x: e.x,
                                    y: e.y
                                },
                                a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                                o = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                            this._options.enabled && o && (this.drawBackground(n, e, t, i, a), n.x += e.xPadding, n.y += e.yPadding, this.drawTitle(n, e, t, a), this.drawBody(n, e, t, a), this.drawFooter(n, e, t, a))
                        }
                    },
                    handleEvent: function(t) {
                        var e = this,
                            i = e._options,
                            n = !1;
                        if (e._lastActive = e._lastActive || [], "mouseout" === t.type ? e._active = [] : e._active = e._chart.getElementsAtEventForMode(t, i.mode, i), !(n = !o.arrayEquals(e._active, e._lastActive))) return !1;
                        if (e._lastActive = e._active, i.enabled || i.custom) {
                            e._eventPosition = {
                                x: t.x,
                                y: t.y
                            };
                            var a = e._model;
                            e.update(!0), e.pivot(), n |= a.x !== e._model.x || a.y !== e._model.y
                        }
                        return n
                    }
                }), t.Tooltip.positioners = {
                    average: function(t) {
                        if (!t.length) return !1;
                        var e, i, n = 0,
                            a = 0,
                            o = 0;
                        for (e = 0, i = t.length; e < i; ++e) {
                            var r = t[e];
                            if (r && r.hasValue()) {
                                var s = r.tooltipPosition();
                                n += s.x, a += s.y, ++o
                            }
                        }
                        return {
                            x: Math.round(n / o),
                            y: Math.round(a / o)
                        }
                    },
                    nearest: function(t, e) {
                        var i, n, a, r = e.x,
                            s = e.y,
                            l = Number.POSITIVE_INFINITY;
                        for (i = 0, n = t.length; i < n; ++i) {
                            var u = t[i];
                            if (u && u.hasValue()) {
                                var d = u.getCenterPoint(),
                                    c = o.distanceBetweenPoints(e, d);
                                c < l && (l = c, a = u)
                            }
                        }
                        if (a) {
                            var h = a.tooltipPosition();
                            r = h.x, s = h.y
                        }
                        return {
                            x: r,
                            y: s
                        }
                    }
                }
            }
        },
        yPMN: function(t, e, i) {
            "use strict";
            i("CDJp")._set("global", {
                responsive: !0,
                responsiveAnimationDuration: 0,
                maintainAspectRatio: !0,
                events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                hover: {
                    onHover: null,
                    mode: "nearest",
                    intersect: !0,
                    animationDuration: 400
                },
                onClick: null,
                defaultColor: "rgba(0,0,0,0.1)",
                defaultFontColor: "#666",
                defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                defaultFontSize: 12,
                defaultFontStyle: "normal",
                showLines: !0,
                elements: {},
                layout: {
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }
                }
            }), t.exports = function() {
                var t = function(t, e) {
                    return this.construct(t, e), this
                };
                return t.Chart = t, t
            }
        }
    }
]);