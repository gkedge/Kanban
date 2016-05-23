webpackJsonp([0, 3], {
    0     : function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : { "default": e }
        }

        var o = n(1), a = r(o), i = n(34), u = r(i), l = n(164), c = r(l);
        u["default"].render(a["default"].createElement(c["default"], null),
            document.getElementById("app"))
    }, 164: function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : { "default": e }
        }

        function o(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function a(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function i(e, t) {
            if ("function" != typeof t && null !==
                                          t)
            {
                throw new TypeError("Super expression must either be null or a function, not " +
                                    typeof t);
            }
            e.prototype = Object.create(t && t.prototype,
                { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t &&
                                                                                                (Object.setPrototypeOf ?
                                                                                                 Object.setPrototypeOf(
                                                                                                     e,
                                                                                                     t) :
                                                                                                 e.__proto__ =
                                                                                                     t)
        }

        function u(e, t, n, r, o) {
            var a = {};
            return Object.keys(r).forEach(function (e) {
                a[e] = r[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a ||
                                                                                   a.initializer) &&
                                                                                  (a.writable =
                                                                                      !0), a =
                n.slice().reverse().reduce(function (n, r) {
                    return r(e, t, n) || n
                }, a), o && void 0 !== a.initializer &&
                       (a.value = a.initializer ? a.initializer.call(o) : void 0, a.initializer =
                           void 0), void 0 === a.initializer &&
                                    (Object.defineProperty(e, t, a), a = null), a
        }

        Object.defineProperty(t, "__esModule", { value: !0 }), t["default"] = void 0;
        var l, c, f, d = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r &&
                                                                            (r.writable =
                                                                                !0), Object.defineProperty(
                        e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), s = n(165), p = r(s), y = n(1), v = r(y), b = n(177), h = r(b), g = n(
            297), O = r(g), m = n(339), j = r(m), w = n(294), _ = r(w), P = n(179), E = n(
            342), N = r(E), k = (l = (0, P.DragDropContext)(N["default"]), l((f = function (e) {
            function t() {
                return o(this, t), a(this, Object.getPrototypeOf(t).apply(this, arguments))
            }

            return i(t, e), d(t, [{
                key: "render", value: function () {
                    return v["default"].createElement("div", null,
                        v["default"].createElement("button",
                            { className: "add-lane", onClick: this.addLane }, "+"),
                        v["default"].createElement(p["default"], {
                            stores: [j["default"]], inject: {
                                lanes: function () {
                                    return j["default"].getState().lanes || []
                                }
                            }
                        }, v["default"].createElement(h["default"], null)))
                }
            }, {
                key: "addLane", value: function () {
                    O["default"].create({ name: "New lane" })
                }
            }]), t
        }(v["default"].Component), u(f.prototype, "addLane", [_["default"]],
            Object.getOwnPropertyDescriptor(f.prototype, "addLane"), f.prototype), c = f)) || c);
        k.displayName = "KanbanApp", t["default"] = k
    }, 177: function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : { "default": e }
        }

        Object.defineProperty(t, "__esModule", { value: !0 });
        var o        = n(1), a = r(o), i = n(178), u = r(i);
        t["default"] = function (e) {
            var t = e.lanes;
            return a["default"].createElement("div", { className: "lanes" }, t.map(function (e) {
                return a["default"].createElement(u["default"],
                    { className: "lane", "data-lane-num": e.num, key: e.id, lane: e })
            }))
        }
    }, 178: function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : { "default": e }
        }

        function o(e, t) {
            var n = {};
            for (var r in e) {
                t.indexOf(r) >= 0 ||
                Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            }
            return n
        }

        function a(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function i(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function u(e, t) {
            if ("function" != typeof t && null !==
                                          t)
            {
                throw new TypeError("Super expression must either be null or a function, not " +
                                    typeof t);
            }
            e.prototype = Object.create(t && t.prototype,
                { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t &&
                                                                                                (Object.setPrototypeOf ?
                                                                                                 Object.setPrototypeOf(
                                                                                                     e,
                                                                                                     t) :
                                                                                                 e.__proto__ =
                                                                                                     t)
        }

        function l(e, t, n, r, o) {
            var a = {};
            return Object.keys(r).forEach(function (e) {
                a[e] = r[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a ||
                                                                                   a.initializer) &&
                                                                                  (a.writable =
                                                                                      !0), a =
                n.slice().reverse().reduce(function (n, r) {
                    return r(e, t, n) || n
                }, a), o && void 0 !== a.initializer &&
                       (a.value = a.initializer ? a.initializer.call(o) : void 0, a.initializer =
                           void 0), void 0 === a.initializer &&
                                    (Object.defineProperty(e, t, a), a = null), a
        }

        Object.defineProperty(t, "__esModule", { value: !0 }), t["default"] = void 0;
        var c, f, d, s = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) {
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                }
                return e
            }, p = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r &&
                                                                            (r.writable =
                                                                                !0), Object.defineProperty(
                        e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), y = n(165), v = r(y), b = n(1), h = r(b), g = n(179), O = n(292), m = r(
            O), j = n(293), w = r(j), _ = n(313), P = r(_), E = n(297), N = r(E), k = n(
            314), D = r(k), I = n(294), T = r(I), S = n(296), L = r(S), M = {
            hover: function (e, t) {
                var n = t.getItem(), r = n.id;
                e.lane.noteIds.length || N["default"].attachToLane({ laneId: e.lane.id, noteId: r })
            }
        }, z = (c = (0, g.DropTarget)(L["default"].NOTE, M, function (e) {
            return { connectDropTarget: e.dropTarget() }
        }), c((d = function (e) {
            function t() {
                return a(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
            }

            return u(t, e), p(t, [{
                key: "render", value: function () {
                    var e = this.props, t = e.connectDropTarget, n = e.lane, r = o(e,
                        ["connectDropTarget", "lane"]);
                    return t(h["default"].createElement("div",
                        s({ onDragOver: this.allowDrop, onDrop: this.allowDrop }, r),
                        h["default"].createElement("div",
                            { className: "lane-header", onClick: this.activateLaneEdit },
                            h["default"].createElement("div", { className: "lane-add-note" },
                                h["default"].createElement("button", { onClick: this.addNote },
                                    "+")), h["default"].createElement(w["default"], {
                                className: "lane-name",
                                editing: n.editing,
                                value: n.name,
                                onEdit: this.editName
                            }), h["default"].createElement("div", { className: "lane-delete" },
                                h["default"].createElement("button", { onClick: this.deleteLane },
                                    "x"))), h["default"].createElement(v["default"], {
                            stores: [D["default"]], inject: {
                                notes: function () {
                                    return D["default"].getNotesByIds(n.noteIds)
                                }
                            }
                        }, h["default"].createElement(m["default"], {
                            onValueClick: this.activateNoteEdit,
                            onEdit: this.editNote,
                            onDelete: this.deleteNote
                        }))))
                }
            }, {
                key: "editNote", value: function (e, t) {
                    return t.trim() ? void P["default"].update({ id: e, task: t, editing: !1 }) :
                           void P["default"].update({ id: e, editing: !1 })
                }
            }, {
                key: "addNote", value: function (e) {
                    e.stopPropagation();
                    var t = this.props.lane.id, n = P["default"].create({ task: "New task" });
                    N["default"].attachToLane({ noteId: n.id, laneId: t })
                }
            }, {
                key: "deleteNote", value: function (e, t) {
                    t.stopPropagation();
                    var n = this.props.lane.id;
                    N["default"].detachFromLane({ laneId: n, noteId: e }), P["default"]["delete"](e)
                }
            }, {
                key: "editName", value: function (e) {
                    var t = this.props.lane.id;
                    return e.trim() ? void N["default"].update({ id: t, name: e, editing: !1 }) :
                           void P["default"].update({ id: t, editing: !1 })
                }
            }, {
                key: "deleteLane", value: function () {
                    var e = this.props.lane.id;
                    N["default"]["delete"](e)
                }
            }, {
                key: "activateLaneEdit", value: function () {
                    var e = this.props.lane.id;
                    N["default"].update({ id: e, editing: !0 })
                }
            }, {
                key: "activateNoteEdit", value: function (e) {
                    P["default"].update({ id: e, editing: !0 })
                }
            }]), t
        }(h["default"].Component), l(d.prototype, "editNote", [T["default"]],
            Object.getOwnPropertyDescriptor(d.prototype, "editNote"), d.prototype), l(d.prototype,
            "addNote", [T["default"]], Object.getOwnPropertyDescriptor(d.prototype, "addNote"),
            d.prototype), l(d.prototype, "deleteNote", [T["default"]],
            Object.getOwnPropertyDescriptor(d.prototype, "deleteNote"), d.prototype), l(d.prototype,
            "editName", [T["default"]], Object.getOwnPropertyDescriptor(d.prototype, "editName"),
            d.prototype), l(d.prototype, "deleteLane", [T["default"]],
            Object.getOwnPropertyDescriptor(d.prototype, "deleteLane"), d.prototype), l(d.prototype,
            "activateLaneEdit", [T["default"]],
            Object.getOwnPropertyDescriptor(d.prototype, "activateLaneEdit"), d.prototype), l(
            d.prototype, "activateNoteEdit", [T["default"]],
            Object.getOwnPropertyDescriptor(d.prototype, "activateNoteEdit"), d.prototype), f =
            d)) || f);
        z.displayName = "KanbanLane", t["default"] = z
    }, 292: function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : { "default": e }
        }

        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = n(1), a = r(o), i = n(293), u = r(i), l = n(295), c = r(l), f = n(
            297), d = r(f);
        t["default"] = function (e) {
            var t = e.notes, n = e.onValueClick, r = e.onEdit, o = e.onDelete;
            return a["default"].createElement("ul", { className: "notes" }, " ",
                t.map(function (e) {
                    return a["default"].createElement(c["default"], {
                        className: "note",
                        id: e.id,
                        key: e.id,
                        editing: e.editing,
                        onMove: d["default"].move
                    }, a["default"].createElement(u["default"], {
                        editing: e.editing,
                        value: e.task,
                        onValueClick: n.bind(null, e.id),
                        onEdit: r.bind(null, e.id),
                        onDelete: o.bind(null, e.id)
                    }))
                }))
        }
    }, 293: function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : { "default": e }
        }

        function o(e, t) {
            var n = {};
            for (var r in e) {
                t.indexOf(r) >= 0 ||
                Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            }
            return n
        }

        function a(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function i(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function u(e, t) {
            if ("function" != typeof t && null !==
                                          t)
            {
                throw new TypeError("Super expression must either be null or a function, not " +
                                    typeof t);
            }
            e.prototype = Object.create(t && t.prototype,
                { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t &&
                                                                                                (Object.setPrototypeOf ?
                                                                                                 Object.setPrototypeOf(
                                                                                                     e,
                                                                                                     t) :
                                                                                                 e.__proto__ =
                                                                                                     t)
        }

        function l(e, t) {
            var n = 4, r = 15;
            if (void 0 === t && (t = 0), t += 1, null === e) {
                return "null";
            }
            if (void 0 === e) {
                return "void";
            }
            if ("string" == typeof e || "number" == typeof e ||
                "boolean" == typeof e)
            {
                return "undefined" == typeof e ? "undefined" : c(e);
            }
            if (!Array.isArray(e)) {
                var o = Object.keys(e);
                if (!o.length) {
                    return e.constructor && e.constructor.name &&
                           "Object" !== e.constructor.name ? e.constructor.name :
                           "Object";
                }
                if (t > n) {
                    return "{...}";
                }
                var a = "  ".repeat(t - 1), i = o.slice(0, r).map(function (n) {
                    return (/^([A-Z_$][A-Z0-9_$]*)$/i.test(n) ? n : JSON.stringify(n)) + ": " +
                           l(e[n], t) + ";"
                }).join("\n  " + a);
                return o.length >= r && (i += "\n  " + a + "..."), e.constructor &&
                                                                   e.constructor.name &&
                                                                   "Object" !== e.constructor.name ?
                                                                   e.constructor.name + " {\n  " +
                                                                   a + i + "\n" + a + "}" :
                                                                   "{\n  " + a + i + "\n" + a + "}"
            }
            if (!(e.length > 0)) {
                return "Array";
            }
            var u = function () {
                if (t > n) {
                    return { v: "[...]" };
                }
                var o = l(e[0], t);
                return e.every(function (e) {
                    return l(e, t) === o
                }) ? { v: o.trim() + "[]" } : {
                    v: "[" + e.slice(0, r).map(function (e) {
                        return l(e, t)
                    }).join(", ") + (e.length >= r ? ", ..." : "") + "]"
                }
            }();
            return "object" === ("undefined" == typeof u ? "undefined" : c(u)) ? u.v : void 0
        }

        Object.defineProperty(t, "__esModule", { value: !0 }), t["default"] = void 0;
        var c  = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" :
                   typeof e
        }, f   = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r &&
                                                                            (r.writable =
                                                                                !0), Object.defineProperty(
                        e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), d = n(1), s = r(d), p = n(294), y = (r(p), function (e) {
            function t() {
                return a(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
            }

            return u(t, e), f(t, [{
                key: "render", value: function () {
                    function e(e) {
                        if (!(e instanceof
                              Object))
                        {
                            throw new TypeError("Function return value violates contract.\n\nExpected:\nObject\n\nGot:\n" +
                                                l(e));
                        }
                        return e
                    }

                    var t = this.props, n = t.editing, r = o(t, ["editing"]);
                    return e(s["default"].createElement("div", r,
                        n ? this.renderEdit() : this.renderValue()))
                }
            }]), t
        }(s["default"].Component));
        y.displayName = "KanbanEditableInput", t["default"] = y
    }, 295: function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : { "default": e }
        }

        function o(e, t) {
            var n = {};
            for (var r in e) {
                t.indexOf(r) >= 0 ||
                Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            }
            return n
        }

        function a(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function i(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function u(e, t) {
            if ("function" != typeof t && null !==
                                          t)
            {
                throw new TypeError("Super expression must either be null or a function, not " +
                                    typeof t);
            }
            e.prototype = Object.create(t && t.prototype,
                { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t &&
                                                                                                (Object.setPrototypeOf ?
                                                                                                 Object.setPrototypeOf(
                                                                                                     e,
                                                                                                     t) :
                                                                                                 e.__proto__ =
                                                                                                     t)
        }

        Object.defineProperty(t, "__esModule", { value: !0 }), t["default"] = void 0;
        var l, c, f, d = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) {
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                }
                return e
            }, s       = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r &&
                                                                            (r.writable =
                                                                                !0), Object.defineProperty(
                        e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), p         = n(1), y = r(p), v = n(179), b = n(296), h = r(b), g = {
            beginDrag    : function (e) {
                return { id: e.id }
            }, isDragging: function (e, t) {
                return e.id === t.getItem().id
            }
        }, O           = {
            hover: function (e, t) {
                var n = e.id, r = t.getItem(), o = r.id;
                o != n && e.onMove({ sourceId: o, targetId: n })
            }
        }, m           = (l = (0, v.DragSource)(h["default"].NOTE, g, function (e, t) {
            return { connectDragSource: e.dragSource(), isDragging: t.isDragging() }
        }), c = (0, v.DropTarget)(h["default"].NOTE, O, function (e) {
            return { connectDropTarget: e.dropTarget() }
        }), l(f = c(f = function (e) {
                function t() {
                    return a(this, t), i(this, Object.getPrototypeOf(t).apply(this, arguments))
                }

                return u(t, e), s(t, [{
                    key: "render", value: function () {
                        var e = this.props, t = e.connectDragSource, n = e.connectDropTarget, r = e.isDragging, a = e.editing, i = o(
                            e, ["connectDragSource", "connectDropTarget", "isDragging",
                                "editing"]), u = a ? function (e) {
                            return e
                        } : t;
                        return u(n(y["default"].createElement("li",
                            d({ style: { opacity: r ? 0 : 1 } }, i), " ", i.children, " ")))
                    }
                }]), t
            }(y["default"].Component)) || f) || f);
        t["default"] = m
    }, 296: function (e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t["default"] = { NOTE: "note" }
    }, 297: function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : { "default": e }
        }

        Object.defineProperty(t, "__esModule", { value: !0 });
        var o        = n(298), a = r(o);
        t["default"] =
            a["default"].generateActions("create", "update", "move", "delete", "attachToLane",
                "detachFromLane")
    }, 298: function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : { "default": e }
        }

        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = n(299), a = r(o), i = n(312), u = r(i), l = new a["default"];
        (0, u["default"])(l), t["default"] = l
    }, 312: function (e, t) {
        "use strict";
        function n(e) {
            return "undefined" != typeof window && (window["alt.js.org"] = e), e
        }

        Object.defineProperty(t, "__esModule", { value: !0 }), t["default"] = n, e.exports =
            t["default"]
    }, 313: function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : { "default": e }
        }

        Object.defineProperty(t, "__esModule", { value: !0 });
        var o        = n(298), a = r(o);
        t["default"] = a["default"].generateActions("create", "update", "delete")
    }, 314: function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : { "default": e }
        }

        function o(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function a(e, t, n, r, o) {
            var a = {};
            return Object.keys(r).forEach(function (e) {
                a[e] = r[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a ||
                                                                                   a.initializer) &&
                                                                                  (a.writable =
                                                                                      !0), a =
                n.slice().reverse().reduce(function (n, r) {
                    return r(e, t, n) || n
                }, a), o && void 0 !== a.initializer &&
                       (a.value = a.initializer ? a.initializer.call(o) : void 0, a.initializer =
                           void 0), void 0 === a.initializer &&
                                    (Object.defineProperty(e, t, a), a = null), a
        }

        Object.defineProperty(t, "__esModule", { value: !0 });
        var i, u = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) {
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                }
                return e
            }, l = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r &&
                                                                            (r.writable =
                                                                                !0), Object.defineProperty(
                        e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), c = n(315), f = r(c), d = n(298), s = r(d), p = n(313), y = r(p), v = n(294), b = r(
            v), h = (i = function () {
            function e() {
                o(this, e), this.bindActions(y["default"]), this.notes =
                    [], this.exportPublicMethods({ getNotesByIds: this.getNotesByIds })
            }

            return l(e, [{
                key: "getNotesByIds", value: function (e) {
                    var t = this;
                    return (e || []).map(function (e) {
                        return t.notes.filter(function (t) {
                            return t.id === e
                        })
                    }).filter(function (e) {
                        return e.length
                    }).map(function (e) {
                        return e[0]
                    })
                }
            }, {
                key: "create", value: function (e) {
                    var t = this.notes;
                    return e.id = f["default"].v4(), this.setState({ notes: t.concat(e) }), e
                }
            }, {
                key: "update", value: function (e) {
                    var t = this.notes.map(function (t) {
                        return t.id === e.id ? u({}, t, e) : t
                    });
                    this.setState({ notes: t })
                }
            }, {
                key: "delete", value: function (e) {
                    this.setState({
                        notes: this.notes.filter(function (t) {
                            return t.id !== e
                        })
                    })
                }
            }]), e
        }(), a(i.prototype, "getNotesByIds", [b["default"]],
            Object.getOwnPropertyDescriptor(i.prototype, "getNotesByIds"), i.prototype), a(
            i.prototype, "create", [b["default"]],
            Object.getOwnPropertyDescriptor(i.prototype, "create"), i.prototype), a(i.prototype,
            "update", [b["default"]], Object.getOwnPropertyDescriptor(i.prototype, "update"),
            i.prototype), a(i.prototype, "delete", [b["default"]],
            Object.getOwnPropertyDescriptor(i.prototype, "delete"), i.prototype), i);
        h.displayName = "KanbanNoteStore", t["default"] = s["default"].createStore(h, "NoteStore")
    }, 339: function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : { "default": e }
        }

        function o(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }

        function a(e, t, n, r, o) {
            var a = {};
            return Object.keys(r).forEach(function (e) {
                a[e] = r[e]
            }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a ||
                                                                                   a.initializer) &&
                                                                                  (a.writable =
                                                                                      !0), a =
                n.slice().reverse().reduce(function (n, r) {
                    return r(e, t, n) || n
                }, a), o && void 0 !== a.initializer &&
                       (a.value = a.initializer ? a.initializer.call(o) : void 0, a.initializer =
                           void 0), void 0 === a.initializer &&
                                    (Object.defineProperty(e, t, a), a = null), a
        }

        Object.defineProperty(t, "__esModule", { value: !0 });
        var i, u = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) {
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                }
                return e
            }, l = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r &&
                                                                            (r.writable =
                                                                                !0), Object.defineProperty(
                        e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(), c = n(315), f = r(c), d = n(298), s = r(d), p = n(297), y = r(p), v = n(294), b = r(
            v), h = n(340), g = r(h), O = (i = function () {
            function e() {
                o(this, e), this.bindActions(y["default"]), this.lanes = []
            }

            return l(e, [{
                key: "create", value: function (t) {
                    var n = this.lanes;
                    t.id = f["default"].v4(), t.num = e.lastLaneNumber++, t.noteIds =
                        t.noteIds || [], this.setState({ lanes: n.concat(t) })
                }
            }, {
                key: "update", value: function (e) {
                    var t = this.lanes.map(function (t) {
                        return t.id === e.id ? u({}, t, e) : t
                    });
                    this.setState({ lanes: t })
                }
            }, {
                key: "delete", value: function (e) {
                    this.setState({
                        lanes: this.lanes.filter(function (t) {
                            return t.id != e
                        })
                    })
                }
            }, {
                key: "attachToLane", value: function (e) {
                    var t = e.laneId, n = e.noteId, r = this.lanes.map(function (e) {
                        return -1 !== e.noteIds.indexOf(n) &&
                               (e.noteIds = e.noteIds.filter(function (e) {
                                   return e !== n
                               })), e.id == t && (-1 !== e.noteIds.indexOf(n) ?
                                                  console.warn("Already attached note to lane", e) :
                                                  e.noteIds.push(n)), e
                    });
                    this.setState({ lanes: r })
                }
            }, {
                key: "detachFromLane", value: function (e) {
                    var t = e.laneId, n = e.noteId, r = this.lanes.map(function (e) {
                        return e.id === t && (e.noteIds = e.noteIds.filter(function (e) {
                            return e !== n
                        })), e
                    });
                    this.setState({ lanes: r })
                }
            }, {
                key: "move", value: function (e) {
                    var t = e.sourceId, n = e.targetId, r = this.lanes, o = r.filter(function (e) {
                        return -1 !== e.noteIds.indexOf(t)
                    })[0], a = r.filter(function (e) {
                        return -1 !== e.noteIds.indexOf(n)
                    })[0], i = o.noteIds.indexOf(t), u = a.noteIds.indexOf(n);
                    o === a ?
                    o.noteIds = (0, g["default"])(o.noteIds, { $splice: [[i, 1], [u, 0, t]] }) :
                    (o.noteIds.splice(i, 1), a.noteIds.splice(u, 0, t)), this.setState({ lanes: r })
                }
            }]), e
        }(), a(i.prototype, "create", [b["default"]],
            Object.getOwnPropertyDescriptor(i.prototype, "create"), i.prototype), a(i.prototype,
            "update", [b["default"]], Object.getOwnPropertyDescriptor(i.prototype, "update"),
            i.prototype), a(i.prototype, "delete", [b["default"]],
            Object.getOwnPropertyDescriptor(i.prototype, "delete"), i.prototype), a(i.prototype,
            "attachToLane", [b["default"]],
            Object.getOwnPropertyDescriptor(i.prototype, "attachToLane"), i.prototype), a(
            i.prototype, "detachFromLane", [b["default"]],
            Object.getOwnPropertyDescriptor(i.prototype, "detachFromLane"), i.prototype), a(
            i.prototype, "move", [b["default"]],
            Object.getOwnPropertyDescriptor(i.prototype, "move"), i.prototype), i);
        O.displayName = "KanbanLaneStore", O.lastLaneNumber = 0, t["default"] =
            s["default"].createStore(O, "LaneStore")
    }
});
