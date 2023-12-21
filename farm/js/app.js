function setIntervalX(e, t, n) {
  var r = 0,
    i = window.setInterval(function () {
      e(), ++r === n && window.clearInterval(i);
    }, t);
}
function mx(e) {
  return 1e18 * e;
}
function mx_bn(e) {
  return BigNumber(e).multipliedBy(1e18);
}
function mdiv(e) {
  return e < 1e4 ? 0 : (e / 1e18).toFixed(4);
}
function bytecoCountDown(e, t, n, r, i, o) {
  var c = t,
    u = _.template($(r).html()),
    s = "00:00:11:00:00",
    l = "00:00:11:00:00",
    f = /([0-9]{2})/gi,
    a = $(i);
  function h(t) {
    var n = t.match(f),
      r = {};
    return (
      e.forEach(function (e, t) {
        r[e] = n[t];
      }),
      r
    );
  }
  var p = h(s);
  e.forEach(function (e, t) {
    a.append(u({ curr: p[e], next: p[e], label: e }));
  }),
    a.countdown(c.toDate(), function (t) {
      var r,
        i = t.strftime(n);
      o && o(t),
        i !== l &&
          ((s = l),
          (l = i),
          (function (t, n) {
            var r = [];
            return (
              e.forEach(function (e) {
                t[e] !== n[e] && r.push(e);
              }),
              r
            );
          })((r = { curr: h(s), next: h(l) }).curr, r.next).forEach(function (
            e
          ) {
            var t = ".%s".replace(/%s/, e),
              n = a.find(t);
            n.removeClass("flip"),
              n.find(".curr").text(r.curr[e]),
              n.find(".next").text(r.next[e]),
              _.delay(
                function (e) {
                  e.addClass("flip");
                },
                50,
                n
              );
          }));
    });
}
!(function (e) {
  "use strict";
  var t,
    n = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
    r = Math.ceil,
    i = Math.floor,
    o = "[BigNumber Error] ",
    c = o + "Number primitive has more than 15 significant digits: ",
    u = 1e14,
    s = 14,
    l = 9007199254740991,
    f = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
    a = 1e7,
    h = 1e9;
  function p(e) {
    var t = 0 | e;
    return 0 < e || e === t ? t : t - 1;
  }
  function m(e) {
    for (var t, n, r = 1, i = e.length, o = e[0] + ""; r < i; ) {
      for (t = e[r++] + "", n = s - t.length; n--; t = "0" + t);
      o += t;
    }
    for (i = o.length; 48 === o.charCodeAt(--i); );
    return o.slice(0, i + 1 || 1);
  }
  function d(e, t) {
    var n,
      r,
      i = e.c,
      o = t.c,
      c = e.s,
      u = t.s,
      s = e.e,
      l = t.e;
    if (!c || !u) return null;
    if (((n = i && !i[0]), (r = o && !o[0]), n || r))
      return n ? (r ? 0 : -u) : c;
    if (c != u) return c;
    if (((n = c < 0), (r = s == l), !i || !o)) return r ? 0 : !i ^ n ? 1 : -1;
    if (!r) return (l < s) ^ n ? 1 : -1;
    for (u = (s = i.length) < (l = o.length) ? s : l, c = 0; c < u; c++)
      if (i[c] != o[c]) return (i[c] > o[c]) ^ n ? 1 : -1;
    return s == l ? 0 : (l < s) ^ n ? 1 : -1;
  }
  function g(e, t, n, r) {
    if (e < t || n < e || e !== i(e))
      throw Error(
        o +
          (r || "Argument") +
          ("number" == typeof e
            ? e < t || n < e
              ? " out of range: "
              : " not an integer: "
            : " not a primitive number: ") +
          String(e)
      );
  }
  function w(e) {
    var t = e.c.length - 1;
    return p(e.e / s) == t && e.c[t] % 2 != 0;
  }
  function v(e, t) {
    return (
      (1 < e.length ? e.charAt(0) + "." + e.slice(1) : e) +
      (t < 0 ? "e" : "e+") +
      t
    );
  }
  function b(e, t, n) {
    var r, i;
    if (t < 0) {
      for (i = n + "."; ++t; i += n);
      e = i + e;
    } else if (++t > (r = e.length)) {
      for (i = n, t -= r; --t; i += n);
      e += i;
    } else t < r && (e = e.slice(0, t) + "." + e.slice(t));
    return e;
  }
  ((t = (function e(t) {
    var y,
      N,
      O,
      A,
      E,
      x,
      S,
      _,
      $,
      k,
      P = (j.prototype = { constructor: j, toString: null, valueOf: null }),
      R = new j(1),
      B = 20,
      C = 4,
      I = -7,
      L = 21,
      D = -1e7,
      U = 1e7,
      M = !1,
      T = 1,
      F = 0,
      G = {
        prefix: "",
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ",",
        decimalSeparator: ".",
        fractionGroupSize: 0,
        fractionGroupSeparator: "�",
        suffix: "",
      },
      q = "0123456789abcdefghijklmnopqrstuvwxyz";
    function j(e, t) {
      var r,
        o,
        u,
        f,
        a,
        h,
        p,
        m,
        d = this;
      if (!(d instanceof j)) return new j(e, t);
      if (null == t) {
        if (e && !0 === e._isBigNumber)
          return (
            (d.s = e.s),
            void (!e.c || e.e > U
              ? (d.c = d.e = null)
              : e.e < D
              ? (d.c = [(d.e = 0)])
              : ((d.e = e.e), (d.c = e.c.slice())))
          );
        if ((h = "number" == typeof e) && 0 * e == 0) {
          if (((d.s = 1 / e < 0 ? ((e = -e), -1) : 1), e === ~~e)) {
            for (f = 0, a = e; 10 <= a; a /= 10, f++);
            return void (d.c = U < f ? (d.e = null) : ((d.e = f), [e]));
          }
          m = String(e);
        } else {
          if (!n.test((m = String(e)))) return O(d, m, h);
          d.s = 45 == m.charCodeAt(0) ? ((m = m.slice(1)), -1) : 1;
        }
        -1 < (f = m.indexOf(".")) && (m = m.replace(".", "")),
          0 < (a = m.search(/e/i))
            ? (f < 0 && (f = a),
              (f += +m.slice(a + 1)),
              (m = m.substring(0, a)))
            : f < 0 && (f = m.length);
      } else {
        if ((g(t, 2, q.length, "Base"), 10 == t))
          return X((d = new j(e)), B + d.e + 1, C);
        if (((m = String(e)), (h = "number" == typeof e))) {
          if (0 * e != 0) return O(d, m, h, t);
          if (
            ((d.s = 1 / e < 0 ? ((m = m.slice(1)), -1) : 1),
            j.DEBUG && 15 < m.replace(/^0\.0*|\./, "").length)
          )
            throw Error(c + e);
        } else d.s = 45 === m.charCodeAt(0) ? ((m = m.slice(1)), -1) : 1;
        for (r = q.slice(0, t), f = a = 0, p = m.length; a < p; a++)
          if (r.indexOf((o = m.charAt(a))) < 0) {
            if ("." == o) {
              if (f < a) {
                f = p;
                continue;
              }
            } else if (
              !u &&
              ((m == m.toUpperCase() && (m = m.toLowerCase())) ||
                (m == m.toLowerCase() && (m = m.toUpperCase())))
            ) {
              (u = !0), (a = -1), (f = 0);
              continue;
            }
            return O(d, String(e), h, t);
          }
        (h = !1),
          -1 < (f = (m = N(m, t, 10, d.s)).indexOf("."))
            ? (m = m.replace(".", ""))
            : (f = m.length);
      }
      for (a = 0; 48 === m.charCodeAt(a); a++);
      for (p = m.length; 48 === m.charCodeAt(--p); );
      if ((m = m.slice(a, ++p))) {
        if (((p -= a), h && j.DEBUG && 15 < p && (l < e || e !== i(e))))
          throw Error(c + d.s * e);
        if ((f = f - a - 1) > U) d.c = d.e = null;
        else if (f < D) d.c = [(d.e = 0)];
        else {
          if (
            ((d.e = f), (d.c = []), (a = (f + 1) % s), f < 0 && (a += s), a < p)
          ) {
            for (a && d.c.push(+m.slice(0, a)), p -= s; a < p; )
              d.c.push(+m.slice(a, (a += s)));
            a = s - (m = m.slice(a)).length;
          } else a -= p;
          for (; a--; m += "0");
          d.c.push(+m);
        }
      } else d.c = [(d.e = 0)];
    }
    function z(e, t, n, r) {
      var i, o, c, u, s;
      if ((null == n ? (n = C) : g(n, 0, 8), !e.c)) return e.toString();
      if (((i = e.c[0]), (c = e.e), null == t))
        (s = m(e.c)),
          (s =
            1 == r || (2 == r && (c <= I || L <= c)) ? v(s, c) : b(s, c, "0"));
      else if (
        ((o = (e = X(new j(e), t, n)).e),
        (u = (s = m(e.c)).length),
        1 == r || (2 == r && (t <= o || o <= I)))
      ) {
        for (; u < t; s += "0", u++);
        s = v(s, o);
      } else if (((t -= c), (s = b(s, o, "0")), u < o + 1)) {
        if (0 < --t) for (s += "."; t--; s += "0");
      } else if (0 < (t += o - u))
        for (o + 1 == u && (s += "."); t--; s += "0");
      return e.s < 0 && i ? "-" + s : s;
    }
    function H(e, t) {
      for (var n, r = 1, i = new j(e[0]); r < e.length; r++) {
        if (!(n = new j(e[r])).s) {
          i = n;
          break;
        }
        t.call(i, n) && (i = n);
      }
      return i;
    }
    function V(e, t, n) {
      for (var r = 1, i = t.length; !t[--i]; t.pop());
      for (i = t[0]; 10 <= i; i /= 10, r++);
      return (
        (n = r + n * s - 1) > U
          ? (e.c = e.e = null)
          : (e.c = n < D ? [(e.e = 0)] : ((e.e = n), t)),
        e
      );
    }
    function X(e, t, n, o) {
      var c,
        l,
        a,
        h,
        p,
        m,
        d,
        g = e.c,
        w = f;
      if (g) {
        e: {
          for (c = 1, h = g[0]; 10 <= h; h /= 10, c++);
          if ((l = t - c) < 0)
            (l += s), (a = t), (d = ((p = g[(m = 0)]) / w[c - a - 1]) % 10 | 0);
          else if ((m = r((l + 1) / s)) >= g.length) {
            if (!o) break e;
            for (; g.length <= m; g.push(0));
            (p = d = 0), (a = (l %= s) - s + (c = 1));
          } else {
            for (p = h = g[m], c = 1; 10 <= h; h /= 10, c++);
            d = (a = (l %= s) - s + c) < 0 ? 0 : (p / w[c - a - 1]) % 10 | 0;
          }
          if (
            ((o =
              o || t < 0 || null != g[m + 1] || (a < 0 ? p : p % w[c - a - 1])),
            (o =
              n < 4
                ? (d || o) && (0 == n || n == (e.s < 0 ? 3 : 2))
                : 5 < d ||
                  (5 == d &&
                    (4 == n ||
                      o ||
                      (6 == n &&
                        (0 < l ? (0 < a ? p / w[c - a] : 0) : g[m - 1]) % 10 &
                          1) ||
                      n == (e.s < 0 ? 8 : 7)))),
            t < 1 || !g[0])
          )
            return (
              (g.length = 0),
              o
                ? ((t -= e.e + 1),
                  (g[0] = w[(s - (t % s)) % s]),
                  (e.e = -t || 0))
                : (g[0] = e.e = 0),
              e
            );
          if (
            (0 == l
              ? ((g.length = m), (h = 1), m--)
              : ((g.length = m + 1),
                (h = w[s - l]),
                (g[m] = 0 < a ? i((p / w[c - a]) % w[a]) * h : 0)),
            o)
          )
            for (;;) {
              if (0 == m) {
                for (l = 1, a = g[0]; 10 <= a; a /= 10, l++);
                for (a = g[0] += h, h = 1; 10 <= a; a /= 10, h++);
                l != h && (e.e++, g[0] == u && (g[0] = 1));
                break;
              }
              if (((g[m] += h), g[m] != u)) break;
              (g[m--] = 0), (h = 1);
            }
          for (l = g.length; 0 === g[--l]; g.pop());
        }
        e.e > U ? (e.c = e.e = null) : e.e < D && (e.c = [(e.e = 0)]);
      }
      return e;
    }
    function W(e) {
      var t,
        n = e.e;
      return null === n
        ? e.toString()
        : ((t = m(e.c)),
          (t = n <= I || L <= n ? v(t, n) : b(t, n, "0")),
          e.s < 0 ? "-" + t : t);
    }
    return (
      (j.clone = e),
      (j.ROUND_UP = 0),
      (j.ROUND_DOWN = 1),
      (j.ROUND_CEIL = 2),
      (j.ROUND_FLOOR = 3),
      (j.ROUND_HALF_UP = 4),
      (j.ROUND_HALF_DOWN = 5),
      (j.ROUND_HALF_EVEN = 6),
      (j.ROUND_HALF_CEIL = 7),
      (j.ROUND_HALF_FLOOR = 8),
      (j.EUCLID = 9),
      (j.config = j.set = function (e) {
        var t, n;
        if (null != e) {
          if ("object" != typeof e) throw Error(o + "Object expected: " + e);
          if (
            (e.hasOwnProperty((t = "DECIMAL_PLACES")) &&
              (g((n = e[t]), 0, h, t), (B = n)),
            e.hasOwnProperty((t = "ROUNDING_MODE")) &&
              (g((n = e[t]), 0, 8, t), (C = n)),
            e.hasOwnProperty((t = "EXPONENTIAL_AT")) &&
              ((n = e[t]) && n.pop
                ? (g(n[0], -h, 0, t), g(n[1], 0, h, t), (I = n[0]), (L = n[1]))
                : (g(n, -h, h, t), (I = -(L = n < 0 ? -n : n)))),
            e.hasOwnProperty((t = "RANGE")))
          )
            if ((n = e[t]) && n.pop)
              g(n[0], -h, -1, t), g(n[1], 1, h, t), (D = n[0]), (U = n[1]);
            else {
              if ((g(n, -h, h, t), !n))
                throw Error(o + t + " cannot be zero: " + n);
              D = -(U = n < 0 ? -n : n);
            }
          if (e.hasOwnProperty((t = "CRYPTO"))) {
            if ((n = e[t]) !== !!n)
              throw Error(o + t + " not true or false: " + n);
            if (n) {
              if (
                "undefined" == typeof crypto ||
                !crypto ||
                (!crypto.getRandomValues && !crypto.randomBytes)
              )
                throw ((M = !n), Error(o + "crypto unavailable"));
              M = n;
            } else M = n;
          }
          if (
            (e.hasOwnProperty((t = "MODULO_MODE")) &&
              (g((n = e[t]), 0, 9, t), (T = n)),
            e.hasOwnProperty((t = "POW_PRECISION")) &&
              (g((n = e[t]), 0, h, t), (F = n)),
            e.hasOwnProperty((t = "FORMAT")))
          ) {
            if ("object" != typeof (n = e[t]))
              throw Error(o + t + " not an object: " + n);
            G = n;
          }
          if (e.hasOwnProperty((t = "ALPHABET"))) {
            if ("string" != typeof (n = e[t]) || /^.$|[+-.\s]|(.).*\1/.test(n))
              throw Error(o + t + " invalid: " + n);
            q = n;
          }
        }
        return {
          DECIMAL_PLACES: B,
          ROUNDING_MODE: C,
          EXPONENTIAL_AT: [I, L],
          RANGE: [D, U],
          CRYPTO: M,
          MODULO_MODE: T,
          POW_PRECISION: F,
          FORMAT: G,
          ALPHABET: q,
        };
      }),
      (j.isBigNumber = function (e) {
        if (!e || !0 !== e._isBigNumber) return !1;
        if (!j.DEBUG) return !0;
        var t,
          n,
          r = e.c,
          c = e.e,
          l = e.s;
        e: if ("[object Array]" == {}.toString.call(r)) {
          if ((1 === l || -1 === l) && -h <= c && c <= h && c === i(c)) {
            if (0 === r[0]) {
              if (0 === c && 1 === r.length) return !0;
              break e;
            }
            if (((t = (c + 1) % s) < 1 && (t += s), String(r[0]).length == t)) {
              for (t = 0; t < r.length; t++)
                if ((n = r[t]) < 0 || u <= n || n !== i(n)) break e;
              if (0 !== n) return !0;
            }
          }
        } else if (
          null === r &&
          null === c &&
          (null === l || 1 === l || -1 === l)
        )
          return !0;
        throw Error(o + "Invalid BigNumber: " + e);
      }),
      (j.maximum = j.max = function () {
        return H(arguments, P.lt);
      }),
      (j.minimum = j.min = function () {
        return H(arguments, P.gt);
      }),
      (j.random =
        ((A = 9007199254740992),
        (E =
          (Math.random() * A) & 2097151
            ? function () {
                return i(Math.random() * A);
              }
            : function () {
                return (
                  8388608 * ((1073741824 * Math.random()) | 0) +
                  ((8388608 * Math.random()) | 0)
                );
              }),
        function (e) {
          var t,
            n,
            c,
            u,
            l,
            a = 0,
            p = [],
            m = new j(R);
          if ((null == e ? (e = B) : g(e, 0, h), (u = r(e / s)), M))
            if (crypto.getRandomValues) {
              for (
                t = crypto.getRandomValues(new Uint32Array((u *= 2)));
                a < u;

              )
                9e15 <= (l = 131072 * t[a] + (t[a + 1] >>> 11))
                  ? ((n = crypto.getRandomValues(new Uint32Array(2))),
                    (t[a] = n[0]),
                    (t[a + 1] = n[1]))
                  : (p.push(l % 1e14), (a += 2));
              a = u / 2;
            } else {
              if (!crypto.randomBytes)
                throw ((M = !1), Error(o + "crypto unavailable"));
              for (t = crypto.randomBytes((u *= 7)); a < u; )
                9e15 <=
                (l =
                  281474976710656 * (31 & t[a]) +
                  1099511627776 * t[a + 1] +
                  4294967296 * t[a + 2] +
                  16777216 * t[a + 3] +
                  (t[a + 4] << 16) +
                  (t[a + 5] << 8) +
                  t[a + 6])
                  ? crypto.randomBytes(7).copy(t, a)
                  : (p.push(l % 1e14), (a += 7));
              a = u / 7;
            }
          if (!M) for (; a < u; ) (l = E()) < 9e15 && (p[a++] = l % 1e14);
          for (
            u = p[--a],
              e %= s,
              u && e && ((l = f[s - e]), (p[a] = i(u / l) * l));
            0 === p[a];
            p.pop(), a--
          );
          if (a < 0) p = [(c = 0)];
          else {
            for (c = -1; 0 === p[0]; p.splice(0, 1), c -= s);
            for (a = 1, l = p[0]; 10 <= l; l /= 10, a++);
            a < s && (c -= s - a);
          }
          return (m.e = c), (m.c = p), m;
        })),
      (j.sum = function () {
        for (var e = 1, t = arguments, n = new j(t[0]); e < t.length; )
          n = n.plus(t[e++]);
        return n;
      }),
      (N = (function () {
        var e = "0123456789";
        function t(e, t, n, r) {
          for (var i, o, c = [0], u = 0, s = e.length; u < s; ) {
            for (o = c.length; o--; c[o] *= t);
            for (c[0] += r.indexOf(e.charAt(u++)), i = 0; i < c.length; i++)
              c[i] > n - 1 &&
                (null == c[i + 1] && (c[i + 1] = 0),
                (c[i + 1] += (c[i] / n) | 0),
                (c[i] %= n));
          }
          return c.reverse();
        }
        return function (n, r, i, o, c) {
          var u,
            s,
            l,
            f,
            a,
            h,
            p,
            d,
            g = n.indexOf("."),
            w = B,
            v = C;
          for (
            0 <= g &&
              ((f = F),
              (F = 0),
              (n = n.replace(".", "")),
              (h = (d = new j(r)).pow(n.length - g)),
              (F = f),
              (d.c = t(b(m(h.c), h.e, "0"), 10, i, e)),
              (d.e = d.c.length)),
              l = f = (p = t(n, r, i, c ? ((u = q), e) : ((u = e), q))).length;
            0 == p[--f];
            p.pop()
          );
          if (!p[0]) return u.charAt(0);
          if (
            (g < 0
              ? --l
              : ((h.c = p),
                (h.e = l),
                (h.s = o),
                (p = (h = y(h, d, w, v, i)).c),
                (a = h.r),
                (l = h.e)),
            (g = p[(s = l + w + 1)]),
            (f = i / 2),
            (a = a || s < 0 || null != p[s + 1]),
            (a =
              v < 4
                ? (null != g || a) && (0 == v || v == (h.s < 0 ? 3 : 2))
                : f < g ||
                  (g == f &&
                    (4 == v ||
                      a ||
                      (6 == v && 1 & p[s - 1]) ||
                      v == (h.s < 0 ? 8 : 7)))),
            s < 1 || !p[0])
          )
            n = a ? b(u.charAt(1), -w, u.charAt(0)) : u.charAt(0);
          else {
            if (((p.length = s), a))
              for (--i; ++p[--s] > i; )
                (p[s] = 0), s || (++l, (p = [1].concat(p)));
            for (f = p.length; !p[--f]; );
            for (g = 0, n = ""; g <= f; n += u.charAt(p[g++]));
            n = b(n, l, u.charAt(0));
          }
          return n;
        };
      })()),
      (y = (function () {
        function e(e, t, n) {
          var r,
            i,
            o,
            c,
            u = 0,
            s = e.length,
            l = t % a,
            f = (t / a) | 0;
          for (e = e.slice(); s--; )
            (u =
              (((i =
                l * (o = e[s] % a) +
                ((r = f * o + (c = (e[s] / a) | 0) * l) % a) * a +
                u) /
                n) |
                0) +
              ((r / a) | 0) +
              f * c),
              (e[s] = i % n);
          return u && (e = [u].concat(e)), e;
        }
        function t(e, t, n, r) {
          var i, o;
          if (n != r) o = r < n ? 1 : -1;
          else
            for (i = o = 0; i < n; i++)
              if (e[i] != t[i]) {
                o = e[i] > t[i] ? 1 : -1;
                break;
              }
          return o;
        }
        function n(e, t, n, r) {
          for (var i = 0; n--; )
            (e[n] -= i),
              (i = e[n] < t[n] ? 1 : 0),
              (e[n] = i * r + e[n] - t[n]);
          for (; !e[0] && 1 < e.length; e.splice(0, 1));
        }
        return function (r, o, c, l, f) {
          var a,
            h,
            m,
            d,
            g,
            w,
            v,
            b,
            y,
            N,
            O,
            A,
            E,
            x,
            S,
            _,
            $,
            k = r.s == o.s ? 1 : -1,
            P = r.c,
            R = o.c;
          if (!(P && P[0] && R && R[0]))
            return new j(
              r.s && o.s && (P ? !R || P[0] != R[0] : R)
                ? (P && 0 == P[0]) || !R
                  ? 0 * k
                  : k / 0
                : NaN
            );
          for (
            y = (b = new j(k)).c = [],
              k = c + (h = r.e - o.e) + 1,
              f || ((f = u), (h = p(r.e / s) - p(o.e / s)), (k = (k / s) | 0)),
              m = 0;
            R[m] == (P[m] || 0);
            m++
          );
          if ((R[m] > (P[m] || 0) && h--, k < 0)) y.push(1), (d = !0);
          else {
            for (
              x = P.length,
                _ = R.length,
                k += 2,
                1 < (g = i(f / (R[(m = 0)] + 1))) &&
                  ((R = e(R, g, f)),
                  (P = e(P, g, f)),
                  (_ = R.length),
                  (x = P.length)),
                E = _,
                O = (N = P.slice(0, _)).length;
              O < _;
              N[O++] = 0
            );
            ($ = R.slice()),
              ($ = [0].concat($)),
              (S = R[0]),
              R[1] >= f / 2 && S++;
            do {
              if (((g = 0), (a = t(R, N, _, O)) < 0)) {
                if (
                  ((A = N[0]),
                  _ != O && (A = A * f + (N[1] || 0)),
                  1 < (g = i(A / S)))
                )
                  for (
                    f <= g && (g = f - 1),
                      v = (w = e(R, g, f)).length,
                      O = N.length;
                    1 == t(w, N, v, O);

                  )
                    g--, n(w, _ < v ? $ : R, v, f), (v = w.length), (a = 1);
                else 0 == g && (a = g = 1), (v = (w = R.slice()).length);
                if (
                  (v < O && (w = [0].concat(w)),
                  n(N, w, O, f),
                  (O = N.length),
                  -1 == a)
                )
                  for (; t(R, N, _, O) < 1; )
                    g++, n(N, _ < O ? $ : R, O, f), (O = N.length);
              } else 0 === a && (g++, (N = [0]));
              (y[m++] = g),
                N[0] ? (N[O++] = P[E] || 0) : ((N = [P[E]]), (O = 1));
            } while ((E++ < x || null != N[0]) && k--);
            (d = null != N[0]), y[0] || y.splice(0, 1);
          }
          if (f == u) {
            for (m = 1, k = y[0]; 10 <= k; k /= 10, m++);
            X(b, c + (b.e = m + h * s - 1) + 1, l, d);
          } else (b.e = h), (b.r = +d);
          return b;
        };
      })()),
      (x = /^(-?)0([xbo])(?=\w[\w.]*$)/i),
      (S = /^([^.]+)\.$/),
      (_ = /^\.([^.]+)$/),
      ($ = /^-?(Infinity|NaN)$/),
      (k = /^\s*\+(?=[\w.])|^\s+|\s+$/g),
      (O = function (e, t, n, r) {
        var i,
          c = n ? t : t.replace(k, "");
        if ($.test(c)) e.s = isNaN(c) ? null : c < 0 ? -1 : 1;
        else {
          if (
            !n &&
            ((c = c.replace(x, function (e, t, n) {
              return (
                (i = "x" == (n = n.toLowerCase()) ? 16 : "b" == n ? 2 : 8),
                r && r != i ? e : t
              );
            })),
            r && ((i = r), (c = c.replace(S, "$1").replace(_, "0.$1"))),
            t != c)
          )
            return new j(c, i);
          if (j.DEBUG)
            throw Error(
              o + "Not a" + (r ? " base " + r : "") + " number: " + t
            );
          e.s = null;
        }
        e.c = e.e = null;
      }),
      (P.absoluteValue = P.abs = function () {
        var e = new j(this);
        return e.s < 0 && (e.s = 1), e;
      }),
      (P.comparedTo = function (e, t) {
        return d(this, new j(e, t));
      }),
      (P.decimalPlaces = P.dp = function (e, t) {
        var n, r, i;
        if (null != e)
          return (
            g(e, 0, h),
            null == t ? (t = C) : g(t, 0, 8),
            X(new j(this), e + this.e + 1, t)
          );
        if (!(n = this.c)) return null;
        if (((r = ((i = n.length - 1) - p(this.e / s)) * s), (i = n[i])))
          for (; i % 10 == 0; i /= 10, r--);
        return r < 0 && (r = 0), r;
      }),
      (P.dividedBy = P.div = function (e, t) {
        return y(this, new j(e, t), B, C);
      }),
      (P.dividedToIntegerBy = P.idiv = function (e, t) {
        return y(this, new j(e, t), 0, 1);
      }),
      (P.exponentiatedBy = P.pow = function (e, t) {
        var n,
          c,
          u,
          l,
          f,
          a,
          h,
          p,
          m = this;
        if ((e = new j(e)).c && !e.isInteger())
          throw Error(o + "Exponent not an integer: " + W(e));
        if (
          (null != t && (t = new j(t)),
          (f = 14 < e.e),
          !m.c ||
            !m.c[0] ||
            (1 == m.c[0] && !m.e && 1 == m.c.length) ||
            !e.c ||
            !e.c[0])
        )
          return (
            (p = new j(Math.pow(+W(m), f ? 2 - w(e) : +W(e)))), t ? p.mod(t) : p
          );
        if (((a = e.s < 0), t)) {
          if (t.c ? !t.c[0] : !t.s) return new j(NaN);
          (c = !a && m.isInteger() && t.isInteger()) && (m = m.mod(t));
        } else {
          if (
            9 < e.e &&
            (0 < m.e ||
              m.e < -1 ||
              (0 == m.e
                ? 1 < m.c[0] || (f && 24e7 <= m.c[1])
                : m.c[0] < 8e13 || (f && m.c[0] <= 9999975e7)))
          )
            return (
              (l = m.s < 0 && w(e) ? -0 : 0),
              -1 < m.e && (l = 1 / l),
              new j(a ? 1 / l : l)
            );
          F && (l = r(F / s + 2));
        }
        for (
          h = f
            ? ((n = new j(0.5)), a && (e.s = 1), w(e))
            : (u = Math.abs(+W(e))) % 2,
            p = new j(R);
          ;

        ) {
          if (h) {
            if (!(p = p.times(m)).c) break;
            l ? p.c.length > l && (p.c.length = l) : c && (p = p.mod(t));
          }
          if (u) {
            if (0 === (u = i(u / 2))) break;
            h = u % 2;
          } else if ((X((e = e.times(n)), e.e + 1, 1), 14 < e.e)) h = w(e);
          else {
            if (0 == (u = +W(e))) break;
            h = u % 2;
          }
          (m = m.times(m)),
            l ? m.c && m.c.length > l && (m.c.length = l) : c && (m = m.mod(t));
        }
        return c
          ? p
          : (a && (p = R.div(p)), t ? p.mod(t) : l ? X(p, F, C, void 0) : p);
      }),
      (P.integerValue = function (e) {
        var t = new j(this);
        return null == e ? (e = C) : g(e, 0, 8), X(t, t.e + 1, e);
      }),
      (P.isEqualTo = P.eq = function (e, t) {
        return 0 === d(this, new j(e, t));
      }),
      (P.isFinite = function () {
        return !!this.c;
      }),
      (P.isGreaterThan = P.gt = function (e, t) {
        return 0 < d(this, new j(e, t));
      }),
      (P.isGreaterThanOrEqualTo = P.gte = function (e, t) {
        return 1 === (t = d(this, new j(e, t))) || 0 === t;
      }),
      (P.isInteger = function () {
        return !!this.c && p(this.e / s) > this.c.length - 2;
      }),
      (P.isLessThan = P.lt = function (e, t) {
        return d(this, new j(e, t)) < 0;
      }),
      (P.isLessThanOrEqualTo = P.lte = function (e, t) {
        return -1 === (t = d(this, new j(e, t))) || 0 === t;
      }),
      (P.isNaN = function () {
        return !this.s;
      }),
      (P.isNegative = function () {
        return this.s < 0;
      }),
      (P.isPositive = function () {
        return 0 < this.s;
      }),
      (P.isZero = function () {
        return !!this.c && 0 == this.c[0];
      }),
      (P.minus = function (e, t) {
        var n,
          r,
          i,
          o,
          c = this,
          l = c.s;
        if (((t = (e = new j(e, t)).s), !l || !t)) return new j(NaN);
        if (l != t) return (e.s = -t), c.plus(e);
        var f = c.e / s,
          a = e.e / s,
          h = c.c,
          m = e.c;
        if (!f || !a) {
          if (!h || !m) return h ? ((e.s = -t), e) : new j(m ? c : NaN);
          if (!h[0] || !m[0])
            return m[0] ? ((e.s = -t), e) : new j(h[0] ? c : 3 == C ? -0 : 0);
        }
        if (((f = p(f)), (a = p(a)), (h = h.slice()), (l = f - a))) {
          for (
            (i = (o = l < 0) ? ((l = -l), h) : ((a = f), m)).reverse(), t = l;
            t--;
            i.push(0)
          );
          i.reverse();
        } else
          for (
            r = (o = (l = h.length) < (t = m.length)) ? l : t, l = t = 0;
            t < r;
            t++
          )
            if (h[t] != m[t]) {
              o = h[t] < m[t];
              break;
            }
        if (
          (o && ((i = h), (h = m), (m = i), (e.s = -e.s)),
          0 < (t = (r = m.length) - (n = h.length)))
        )
          for (; t--; h[n++] = 0);
        for (t = u - 1; l < r; ) {
          if (h[--r] < m[r]) {
            for (n = r; n && !h[--n]; h[n] = t);
            --h[n], (h[r] += u);
          }
          h[r] -= m[r];
        }
        for (; 0 == h[0]; h.splice(0, 1), --a);
        return h[0]
          ? V(e, h, a)
          : ((e.s = 3 == C ? -1 : 1), (e.c = [(e.e = 0)]), e);
      }),
      (P.modulo = P.mod = function (e, t) {
        var n,
          r,
          i = this;
        return (
          (e = new j(e, t)),
          !i.c || !e.s || (e.c && !e.c[0])
            ? new j(NaN)
            : !e.c || (i.c && !i.c[0])
            ? new j(i)
            : (9 == T
                ? ((r = e.s),
                  (e.s = 1),
                  (n = y(i, e, 0, 3)),
                  (e.s = r),
                  (n.s *= r))
                : (n = y(i, e, 0, T)),
              (e = i.minus(n.times(e))).c[0] || 1 != T || (e.s = i.s),
              e)
        );
      }),
      (P.multipliedBy = P.times = function (e, t) {
        var n,
          r,
          i,
          o,
          c,
          l,
          f,
          h,
          m,
          d,
          g,
          w,
          v,
          b,
          y,
          N = this,
          O = N.c,
          A = (e = new j(e, t)).c;
        if (!(O && A && O[0] && A[0]))
          return (
            !N.s || !e.s || (O && !O[0] && !A) || (A && !A[0] && !O)
              ? (e.c = e.e = e.s = null)
              : ((e.s *= N.s),
                O && A ? ((e.c = [0]), (e.e = 0)) : (e.c = e.e = null)),
            e
          );
        for (
          r = p(N.e / s) + p(e.e / s),
            e.s *= N.s,
            (f = O.length) < (d = A.length) &&
              ((v = O), (O = A), (A = v), (i = f), (f = d), (d = i)),
            i = f + d,
            v = [];
          i--;
          v.push(0)
        );
        for (b = u, y = a, i = d; 0 <= --i; ) {
          for (
            n = 0, g = A[i] % y, w = (A[i] / y) | 0, o = i + (c = f);
            i < o;

          )
            (n =
              (((h =
                g * (h = O[--c] % y) +
                ((l = w * h + (m = (O[c] / y) | 0) * g) % y) * y +
                v[o] +
                n) /
                b) |
                0) +
              ((l / y) | 0) +
              w * m),
              (v[o--] = h % b);
          v[o] = n;
        }
        return n ? ++r : v.splice(0, 1), V(e, v, r);
      }),
      (P.negated = function () {
        var e = new j(this);
        return (e.s = -e.s || null), e;
      }),
      (P.plus = function (e, t) {
        var n,
          r = this,
          i = r.s;
        if (((t = (e = new j(e, t)).s), !i || !t)) return new j(NaN);
        if (i != t) return (e.s = -t), r.minus(e);
        var o = r.e / s,
          c = e.e / s,
          l = r.c,
          f = e.c;
        if (!o || !c) {
          if (!l || !f) return new j(i / 0);
          if (!l[0] || !f[0]) return f[0] ? e : new j(l[0] ? r : 0 * i);
        }
        if (((o = p(o)), (c = p(c)), (l = l.slice()), (i = o - c))) {
          for (
            (n = 0 < i ? ((c = o), f) : ((i = -i), l)).reverse();
            i--;
            n.push(0)
          );
          n.reverse();
        }
        for (
          (i = l.length) - (t = f.length) < 0 &&
            ((n = f), (f = l), (l = n), (t = i)),
            i = 0;
          t;

        )
          (i = ((l[--t] = l[t] + f[t] + i) / u) | 0),
            (l[t] = u === l[t] ? 0 : l[t] % u);
        return i && ((l = [i].concat(l)), ++c), V(e, l, c);
      }),
      (P.precision = P.sd = function (e, t) {
        var n, r, i;
        if (null != e && e !== !!e)
          return (
            g(e, 1, h), null == t ? (t = C) : g(t, 0, 8), X(new j(this), e, t)
          );
        if (!(n = this.c)) return null;
        if (((r = (i = n.length - 1) * s + 1), (i = n[i]))) {
          for (; i % 10 == 0; i /= 10, r--);
          for (i = n[0]; 10 <= i; i /= 10, r++);
        }
        return e && this.e + 1 > r && (r = this.e + 1), r;
      }),
      (P.shiftedBy = function (e) {
        return g(e, -l, l), this.times("1e" + e);
      }),
      (P.squareRoot = P.sqrt = function () {
        var e,
          t,
          n,
          r,
          i,
          o = this,
          c = o.c,
          u = o.s,
          s = o.e,
          l = B + 4,
          f = new j("0.5");
        if (1 !== u || !c || !c[0])
          return new j(!u || (u < 0 && (!c || c[0])) ? NaN : c ? o : 1 / 0);
        if (
          (n =
            0 == (u = Math.sqrt(+W(o))) || u == 1 / 0
              ? (((t = m(c)).length + s) % 2 == 0 && (t += "0"),
                (u = Math.sqrt(+t)),
                (s = p((s + 1) / 2) - (s < 0 || s % 2)),
                new j(
                  (t =
                    u == 1 / 0
                      ? "1e" + s
                      : (t = u.toExponential()).slice(0, t.indexOf("e") + 1) +
                        s)
                ))
              : new j(u + "")).c[0]
        )
          for ((u = (s = n.e) + l) < 3 && (u = 0); ; )
            if (
              ((i = n),
              (n = f.times(i.plus(y(o, i, l, 1)))),
              m(i.c).slice(0, u) === (t = m(n.c)).slice(0, u))
            ) {
              if (
                (n.e < s && --u,
                "9999" != (t = t.slice(u - 3, u + 1)) && (r || "4999" != t))
              ) {
                (+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                  (X(n, n.e + B + 2, 1), (e = !n.times(n).eq(o)));
                break;
              }
              if (!r && (X(i, i.e + B + 2, 0), i.times(i).eq(o))) {
                n = i;
                break;
              }
              (l += 4), (u += 4), (r = 1);
            }
        return X(n, n.e + B + 1, C, e);
      }),
      (P.toExponential = function (e, t) {
        return null != e && (g(e, 0, h), e++), z(this, e, t, 1);
      }),
      (P.toFixed = function (e, t) {
        return null != e && (g(e, 0, h), (e = e + this.e + 1)), z(this, e, t);
      }),
      (P.toFormat = function (e, t, n) {
        var r;
        if (null == n)
          null != e && t && "object" == typeof t
            ? ((n = t), (t = null))
            : e && "object" == typeof e
            ? ((n = e), (e = t = null))
            : (n = G);
        else if ("object" != typeof n)
          throw Error(o + "Argument not an object: " + n);
        if (((r = this.toFixed(e, t)), this.c)) {
          var i,
            c = r.split("."),
            u = +n.groupSize,
            s = +n.secondaryGroupSize,
            l = n.groupSeparator || "",
            f = c[0],
            a = c[1],
            h = this.s < 0,
            p = h ? f.slice(1) : f,
            m = p.length;
          if ((s && ((i = u), (u = s), (m -= s = i)), 0 < u && 0 < m)) {
            for (i = m % u || u, f = p.substr(0, i); i < m; i += u)
              f += l + p.substr(i, u);
            0 < s && (f += l + p.slice(i)), h && (f = "-" + f);
          }
          r = a
            ? f +
              (n.decimalSeparator || "") +
              ((s = +n.fractionGroupSize)
                ? a.replace(
                    new RegExp("\\d{" + s + "}\\B", "g"),
                    "$&" + (n.fractionGroupSeparator || "")
                  )
                : a)
            : f;
        }
        return (n.prefix || "") + r + (n.suffix || "");
      }),
      (P.toFraction = function (e) {
        var t,
          n,
          r,
          i,
          c,
          u,
          l,
          a,
          h,
          p,
          d,
          g,
          w = this,
          v = w.c;
        if (
          null != e &&
          ((!(l = new j(e)).isInteger() && (l.c || 1 !== l.s)) || l.lt(R))
        )
          throw Error(
            o +
              "Argument " +
              (l.isInteger() ? "out of range: " : "not an integer: ") +
              W(l)
          );
        if (!v) return new j(w);
        for (
          t = new j(R),
            h = n = new j(R),
            r = a = new j(R),
            g = m(v),
            c = t.e = g.length - w.e - 1,
            t.c[0] = f[(u = c % s) < 0 ? s + u : u],
            e = !e || 0 < l.comparedTo(t) ? (0 < c ? t : h) : l,
            u = U,
            U = 1 / 0,
            l = new j(g),
            a.c[0] = 0;
          (p = y(l, t, 0, 1)), 1 != (i = n.plus(p.times(r))).comparedTo(e);

        )
          (n = r),
            (r = i),
            (h = a.plus(p.times((i = h)))),
            (a = i),
            (t = l.minus(p.times((i = t)))),
            (l = i);
        return (
          (i = y(e.minus(n), r, 0, 1)),
          (a = a.plus(i.times(h))),
          (n = n.plus(i.times(r))),
          (a.s = h.s = w.s),
          (d =
            y(h, r, (c *= 2), C)
              .minus(w)
              .abs()
              .comparedTo(y(a, n, c, C).minus(w).abs()) < 1
              ? [h, r]
              : [a, n]),
          (U = u),
          d
        );
      }),
      (P.toNumber = function () {
        return +W(this);
      }),
      (P.toPrecision = function (e, t) {
        return null != e && g(e, 1, h), z(this, e, t, 2);
      }),
      (P.toString = function (e) {
        var t,
          n = this,
          r = n.s,
          i = n.e;
        return (
          null === i
            ? r
              ? ((t = "Infinity"), r < 0 && (t = "-" + t))
              : (t = "NaN")
            : ((t =
                null == e
                  ? i <= I || L <= i
                    ? v(m(n.c), i)
                    : b(m(n.c), i, "0")
                  : 10 === e
                  ? b(m((n = X(new j(n), B + i + 1, C)).c), n.e, "0")
                  : (g(e, 2, q.length, "Base"),
                    N(b(m(n.c), i, "0"), 10, e, r, !0))),
              r < 0 && n.c[0] && (t = "-" + t)),
          t
        );
      }),
      (P.valueOf = P.toJSON = function () {
        return W(this);
      }),
      (P._isBigNumber = !0),
      null != t && j.set(t),
      j
    );
  })()).default = t.BigNumber = t),
    "function" == typeof define && define.amd
      ? define(function () {
          return t;
        })
      : "undefined" != typeof module && module.exports
      ? (module.exports = t)
      : (e || (e = "undefined" != typeof self && self ? self : window),
        (e.BigNumber = t));
})(this),
  String.prototype.format ||
    (String.prototype.format = function () {
      var e = arguments;
      return this.replace(/{(\d+)}/g, function (t, n) {
        return void 0 !== e[n] ? e[n] : t;
      });
    });
var myAddress = "";
// function initwork(e) {
//   contract.earned(e, (e, t) => {
//     $("#rewards").html(mdiv(t.toNumber()));
//   }),
//     contract.earned(e, (e, t) => {
//       $("#rewardRate").html(mdiv(t.toNumber()));
//     }),
//     contract.balanceOf(e, (e, t) => {
//       $(".your_balance").html(mdiv(t.toNumber())),
//         contract.totalSupply((e, n) =>
//           $("#your_pool").html(((t / n) * 100).toFixed(4))
//         );
//     }),
//     contractLP.balanceOf(e, (e, t) => $(".lpbalance").html(mdiv(t.toNumber())));
// // }
// isMetaMaskInstalled()
//   ? (web3.eth.defaultAccount &&
//       ((myAddress = web3.eth.defaultAccount),
//       initwork(web3.eth.defaultAccount),
//       $("#connectButton").html("Connected")),
//     window.ethereum.on("accountsChanged", function (e) {
//       (web3.eth.defaultAccount = myAddress = e[0]),
//         initwork(web3.eth.defaultAccount);
//     }))
//   : initwork(web3.eth.defaultAccount),
//   // contract.totalSupply((e, t) => $("#totSuply").html(mdiv(t.toNumber()))),
//   ethereum &&
//     (ethereum.on("chainChanged", (e) => void 0),
//     ethereum.on("networkChanged", (e) => void 0),
//     ethereum.on("accountsChanged", (e) => void 0)),
//   $(function () {
//     $("#btnApprove").click(function () {
//       contractLP.approve(contract_address, 1e25, (e, t) => void 0);
//     }),
//       $("#btnExit").click(function () {
//         contract.exit((e, t) => {});
//       }),
//       $("#btnGetRewards").click(function () {
//         contract.getReward((e, t) => {});
//       }),
//       $("#btnStake").click(function () {
//         setIntervalX(
//           function () {
//             contract.balanceOf(myAddress, (e, t) => {
//               $(".your_balance").html(mdiv(t.toNumber()));
//             }),
//               contract.totalSupply((e, t) =>
//                 $("#totSuply").html(mdiv(t.toNumber()))
//               ),
//               contractLP.balanceOf(myAddress, (e, t) =>
//                 $(".lpbalance").html(mdiv(t.toNumber()))
//               );
//           },
//           5e3,
//           8
//         ),
//           contract.stake(
//             mx_bn(parseFloat($("#amount").val())).toNumber(),
//             function (e, t) {
//               $("#txhash").html(
//                 '<a href="https://bscscan.com/tx/{0}" target="_blank">{1}</a>'.format(
//                   t,
//                   t.substring(0, 7)
//                 )
//               );
//             }
//           );
//       }),
//       $("#btnUnStake").click(function () {
//         setIntervalX(
//           function () {
//             contract.balanceOf(myAddress, (e, t) => {
//               $(".your_balance").html(mdiv(t.toNumber()));
//             }),
//               contractLP.balanceOf(myAddress, (e, t) => {
//                 $(".lpbalance").html(mdiv(t.toNumber()));
//               }),
//               contract.totalSupply((e, t) =>
//                 $("#totSuply").html(mdiv(t.toNumber()))
//               );
//           },
//           5e3,
//           8
//         ),
//           contract.withdraw(
//             mx_bn(parseFloat($("#amount").val())).toNumber(),
//             function (e, t) {
//               $("#txhash").html(
//                 '<a href="https://bscscan.com/tx/{0}" target="_blank">{1}</a>'.format(
//                   t,
//                   t.substring(0, 7)
//                 )
//               );
//             }
//           );
//       });
//   });
