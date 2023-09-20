"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, o) {
  'object' == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && 'object' == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = o() : 'function' == typeof define && define.amd ? define([], o) : 'object' == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.scrollSpy = o() : t.scrollSpy = o();
}(self, function () {
  return function () {
    var t = {
      138: function _(t, o, e) {
        t.exports = function (t) {
          var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          var _e = e(218),
              s = _e.ScrollSpy,
              i = new s(t, o);

          return window.onload = i.onScroll(), window.addEventListener('scroll', function () {
            return i.onScroll();
          }), i;
        };
      },
      218: function _(t, o, e) {
        'use strict';

        e.r(o), e.d(o, {
          ScrollSpy: function ScrollSpy() {
            return s;
          }
        });

        var s =
        /*#__PURE__*/
        function () {
          function s(t) {
            var o = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            _classCallCheck(this, s);

            if (!t) throw new Error('First argument is query selector to your navigation.');
            if ('object' != _typeof(o)) throw new Error('Second argument must be instance of Object.');
            o.smoothScroll = !0 === o.smoothScroll && {} || o.smoothScroll, this.menuList = t instanceof HTMLElement ? t : document.querySelector(t), this.options = Object.assign({}, {
              sectionClass: '.scrollspy',
              menuActiveTarget: 'li > a',
              offset: 0,
              hrefAttribute: 'href',
              activeClass: 'active',
              scrollContainer: '',
              smoothScroll: {}
            }, o), this.options.scrollContainer ? this.scroller = this.options.scrollContainer instanceof HTMLElement ? this.options.scrollContainer : document.querySelector(this.options.scrollContainer) : this.scroller = window, this.sections = document.querySelectorAll(this.options.sectionClass), this.attachEventListeners();
          }

          _createClass(s, [{
            key: "attachEventListeners",
            value: function attachEventListeners() {
              var _this = this;

              if (this.scroller && (this.scroller.addEventListener('scroll', function () {
                return _this.onScroll();
              }), this.options.smoothScroll)) {
                this.menuList.querySelectorAll(this.options.menuActiveTarget).forEach(function (t) {
                  return t.addEventListener('click', _this.onClick.bind(_this));
                });
              }
            }
          }, {
            key: "onClick",
            value: function onClick(t) {
              var o = t.target.getAttribute(this.options.hrefAttribute),
                  e = document.querySelector(o);
              e && this.options.smoothScroll && (t.preventDefault(), this.scrollTo(e));
            }
          }, {
            key: "onScroll",
            value: function onScroll() {
              var t = this.getSectionInView(),
                  o = this.getMenuItemBySection(t);
              o && (this.removeCurrentActive({
                ignore: o
              }), this.setActive(o));
            }
          }, {
            key: "scrollTo",
            value: function scrollTo(t) {
              var o = 'function' == typeof this.options.smoothScrollBehavior && this.options.smoothScrollBehavior;
              o ? o(t, this.options.smoothScroll) : t.scrollIntoView(_objectSpread({}, this.options.smoothScroll, {
                behavior: 'smooth'
              }));
            }
          }, {
            key: "getMenuItemBySection",
            value: function getMenuItemBySection(t) {
              if (!t) return;
              var o = t.getAttribute('id');
              return this.menuList.querySelector("[".concat(this.options.hrefAttribute, "=\"#").concat(o, "\"]"));
            }
          }, {
            key: "getSectionInView",
            value: function getSectionInView() {
              for (var _t = 0; _t < this.sections.length; _t++) {
                var _o = this.sections[_t].offsetTop,
                    _e2 = _o + this.sections[_t].offsetHeight;

                var _s = (document.documentElement.scrollTop || document.body.scrollTop) + this.options.offset;

                this.options.scrollContainer && this.scroller && (_s = this.scroller.scrollTop + this.options.offset);
                if (_s > _o && _s <= _e2) return this.sections[_t];
              }
            }
          }, {
            key: "setActive",
            value: function setActive(t) {
              t.classList.contains(this.options.activeClass) || t.classList.add(this.options.activeClass);
            }
          }, {
            key: "removeCurrentActive",
            value: function removeCurrentActive(_ref) {
              var _this2 = this;

              var t = _ref.ignore;
              var _this$options = this.options,
                  o = _this$options.hrefAttribute,
                  e = _this$options.menuActiveTarget,
                  s = _this$options.activeClass,
                  i = "".concat(e, ".").concat(s, ":not([").concat(o, "=\"").concat(t.getAttribute(o), "\"])");
              this.menuList.querySelectorAll(i).forEach(function (t) {
                return t.classList.remove(_this2.options.activeClass);
              });
            }
          }]);

          return s;
        }();
      }
    },
        o = {};

    function e(s) {
      var i = o[s];
      if (void 0 !== i) return i.exports;
      var r = o[s] = {
        exports: {}
      };
      return t[s](r, r.exports, e), r.exports;
    }

    return e.d = function (t, o) {
      for (var s in o) {
        e.o(o, s) && !e.o(t, s) && Object.defineProperty(t, s, {
          enumerable: !0,
          get: o[s]
        });
      }
    }, e.o = function (t, o) {
      return Object.prototype.hasOwnProperty.call(t, o);
    }, e.r = function (t) {
      'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: 'Module'
      }), Object.defineProperty(t, '__esModule', {
        value: !0
      });
    }, e(138);
  }();
});