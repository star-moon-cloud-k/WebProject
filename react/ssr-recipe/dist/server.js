(() => {
  "use strict";
  var e = {
    n: (n) => {
      var t = n && n.__esModule ? () => n.default : () => n;
      return e.d(t, { a: t }), t;
    },
    d: (n, t) => {
      for (var r in t)
        e.o(t, r) &&
          !e.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: t[r] });
    },
    o: (e, n) => Object.prototype.hasOwnProperty.call(e, n),
  };
  require("react");
  const n = require("react-dom/server");
  var t = e.n(n);
  const r = require("express");
  var i = e.n(r);
  const s = require("react-router-dom/server"),
    c = require("react-router-dom"),
    o = require("react/jsx-runtime"),
    a = function () {
      return (0, o.jsxs)("ul", {
        children: [
          (0, o.jsx)("li", {
            children: (0, o.jsx)(c.Link, { to: "/red", children: "Red" }),
          }),
          (0, o.jsx)("li", {
            children: (0, o.jsx)(c.Link, { to: "/blue", children: "Blue" }),
          }),
        ],
      });
    },
    l = function () {
      return (0, o.jsx)("div", { className: "Red", children: "Red" });
    },
    u = function () {
      return (0, o.jsx)(l, {});
    },
    d = function () {
      return (0, o.jsx)("div", { className: "Blue", children: "Blue" });
    },
    h = function () {
      return (0, o.jsx)(d, {});
    },
    f = function () {
      return (0, o.jsxs)("div", {
        children: [
          (0, o.jsx)(a, {}),
          (0, o.jsx)("hr", {}),
          (0, o.jsxs)(c.Routes, {
            children: [
              (0, o.jsx)(c.Route, { path: "/red", element: (0, o.jsx)(u, {}) }),
              (0, o.jsx)(c.Route, {
                path: "/blue",
                element: (0, o.jsx)(h, {}),
              }),
            ],
          }),
        ],
      });
    },
    j = require("path");
  var p = e.n(j);
  const m = require("fs");
  var x = e.n(m),
    v = JSON.parse(
      x().readFileSync(p().resolve("./build/asset-manifest.json"), "utf8")
    ),
    b = Object.keys(v.files)
      .filter(function (e) {
        return /chunk\.js$/.exec(e);
      })
      .map(function (e) {
        return '<script src ="'.concat(v.files[e], '"></script>');
      })
      .join(""),
    R = i()(),
    q = i().static(p().resolve("./build"), { index: !1 });
  R.use(q),
    R.use(function (e, n, r) {
      var i = (0, o.jsx)(s.StaticRouter, {
          location: e.url,
          context: {},
          children: (0, o.jsx)(f, {}),
        }),
        c = t().renderToString(i);
      n.send(
        (function (e) {
          return '<!DOCTYPE html>\n  <html lang = "en>\n  <head>\n    <meta charset="utf-8" />\n    <link rel = "shortcut icon" href="/favicon.ico" />\n    <meta\n      name ="viewport"\n      content = "width = device-width, initial-scale=1, shrink-to-fit=no"\n    />\n    <meta name="theme-color" content="#000000" />\n    <title> React App</title>\n    <link href="'
            .concat(
              v.files["main.css"],
              '" rel = "stylesheet" />\n  </head>\n  <body>\n    <noscript>You need to enable JavaScript to run this app. </noscript>\n    <div id = \'root\'>\n    '
            )
            .concat(e, '\n    </div>\n    <script src="')
            .concat(v.files["runtime~main.js"], '"></script>\n    ')
            .concat(b, '\n    <script src="')
            .concat(
              v.files["main.js"],
              '"></script>\n    </body>\n    </html>\n  '
            );
        })(c)
      );
    }),
    R.listen(3999, function () {
      console.log("Running on http://localhost:3999");
    });
})();
