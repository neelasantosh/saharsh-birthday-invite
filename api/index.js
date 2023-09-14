var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_exports = {};
__export(assets_manifest_exports, {
  default: () => assets_manifest_default
});
var assets_manifest_default, init_assets_manifest = __esm({
  "server-assets-manifest:@remix-run/dev/assets-manifest"() {
    assets_manifest_default = { version: "c29f7061", entry: { module: "/build/entry.client-4GHSCAJ2.js", imports: ["/build/_shared/chunk-FQ3SI4AI.js", "/build/_shared/chunk-VLYZ26UA.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-EJRWECMJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-QD3EL3BF.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-C29F7061.js" };
  }
});

// node_modules/@remix-run/css-bundle/dist/server.js
var require_server = __commonJS({
  "node_modules/@remix-run/css-bundle/dist/server.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var assetsManifest = (init_assets_manifest(), __toCommonJS(assets_manifest_exports));
    function _interopDefaultLegacy(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var assetsManifest__default = /* @__PURE__ */ _interopDefaultLegacy(assetsManifest), cssBundleHref2 = assetsManifest__default.default.cssBundleHref;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 46,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_server()), import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-IIQMB7B2.css";

// node_modules/react-photo-view/dist/react-photo-view.css
var react_photo_view_default = "/build/_assets/react-photo-view-7Z2GU4I5.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : [],
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: react_photo_view_default },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.comhttps://fonts.gstatic.com"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
  },
  {
    rel: "stylesheet",
    href: "https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
  }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "id", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { suppressHydrationWarning: !0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  action: () => action,
  default: () => Index,
  loader: () => loader,
  meta: () => meta
});
var import_react11 = require("@remix-run/react"), import_react12 = require("react");

// app/components/WelcomeModal.tsx
var import_react3 = require("react"), import_react4 = require("@remix-run/react");

// app/components/Utils/TextWithLine.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), TextWithLine = ({ children }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center justify-center", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "border-t border-gray-400 w-8" }, void 0, !1, {
    fileName: "app/components/Utils/TextWithLine.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-center font-medium font-head text-gray-600 italic mx-3", children }, void 0, !1, {
    fileName: "app/components/Utils/TextWithLine.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "border-t border-gray-400 w-8" }, void 0, !1, {
    fileName: "app/components/Utils/TextWithLine.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Utils/TextWithLine.tsx",
  lineNumber: 9,
  columnNumber: 5
}, this), TextWithLine_default = TextWithLine;

// app/components/WelcomeModal.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function WelcomeModal({ isOpen, onClose }) {
  let { remark: recipient } = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "div",
    {
      className: "fixed h-screen w-screen left-0 top-0 z-10 transition-all duration-1000" + (isOpen ? "" : " -translate-y-full"),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-background h-screen w-screen flex flex-row justify-center items-start fixed overflow-auto py-20 box-border", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col items-center p-5 my-auto w-full md:w-[500]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h5", { className: "text-center font-medium font-sans text-xl md:text-2xl mb-2 md:mb-3 text-gray-500", children: "Birthday Invitation of" }, void 0, !1, {
          fileName: "app/components/WelcomeModal.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h5", { className: "text-center font-medium font-sans text-xl md:text-2xl mb-2 md:mb-3 text-gray-500", children: "Neela. Saharsh" }, void 0, !1, {
          fileName: "app/components/WelcomeModal.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { className: "text-center font-head text-5xl md:text-6xl mb-6 text-gray-800", children: "Son of Neela. Shivani & Santosh" }, void 0, !1, {
          fileName: "app/components/WelcomeModal.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-[350px] mb-12", children: recipient ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TextWithLine_default, { children: "For" }, void 0, !1, {
            fileName: "app/components/WelcomeModal.tsx",
            lineNumber: 37,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/components/WelcomeModal.tsx",
            lineNumber: 36,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "div",
            {
              className: recipient.length < 50 ? "text-center font-sans text-gray-700 leading-7 text-lg py-1" : "text-center font-sans text-gray-700 leading-7 px-4 md:px-0",
              children: recipient
            },
            void 0,
            !1,
            {
              fileName: "app/components/WelcomeModal.tsx",
              lineNumber: 39,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/WelcomeModal.tsx",
          lineNumber: 35,
          columnNumber: 15
        }, this) : null }, void 0, !1, {
          fileName: "app/components/WelcomeModal.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "button",
          {
            type: "button",
            className: "px-5 transition-all py-3 font-sans font-medium rounded-md bg-contrast outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
            onClick: onClose,
            children: "Enter"
          },
          void 0,
          !1,
          {
            fileName: "app/components/WelcomeModal.tsx",
            lineNumber: 52,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/WelcomeModal.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/WelcomeModal.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/WelcomeModal.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}

// app/controls/index.ts
var import_node2 = require("@remix-run/node");

// app/env.server.ts
var getClinetEnv = () => ({
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID
});

// app/utils/googleSheetsApi.ts
var import_googleapis = require("googleapis"), SCOPES = ["https://www.googleapis.com/auth/spreadsheets"], getAuthToken = async () => {
  let privateKeyString = (process.env.GOOGLE_PRIVATE_KEY || '{ "privateKey": null }').replace(/\n/g, "\\n"), { privateKey } = JSON.parse(privateKeyString);
  return new import_googleapis.google.auth.GoogleAuth({
    scopes: SCOPES,
    projectId: process.env.GOOGLE_PROJECTID,
    credentials: {
      private_key: privateKey,
      client_email: process.env.GOOGLE_CLIENT_EMAIL
    }
  });
}, sheets, getSheets = async () => {
  if (sheets)
    return sheets;
  let auth = await getAuthToken();
  return sheets = import_googleapis.google.sheets({ version: "v4", auth }), sheets;
}, getPersonRemarks = async (name) => {
  if (name)
    try {
      let sheets2 = await getSheets(), range = "Sheet1!A:B", dataRaw = (await sheets2.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range
      })).data.values, data = (dataRaw == null ? void 0 : dataRaw.map((data2) => ({ name: data2[0], remarks: data2[1] }))) ?? [], regex = new RegExp(`${name}$`, "i");
      return data.find((person) => regex.test(person.name));
    } catch (err) {
      console.error(err);
      return;
    }
}, appendMessage = async (name, message, googleName) => {
  try {
    let sheets2 = await getSheets(), range = "Sheet2!A:B", serverTime = /* @__PURE__ */ new Date();
    return await sheets2.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, message, serverTime, 0, googleName]]
      }
    }), !0;
  } catch (err) {
    return console.error(err), !1;
  }
}, getMessage = async () => {
  try {
    let sheets2 = await getSheets(), range = "Sheet2!A:D", dataRaw = (await sheets2.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID,
      range
    })).data.values, data = (dataRaw == null ? void 0 : dataRaw.map((data2) => ({
      name: data2[0],
      message: data2[1],
      date: data2[2],
      hide: Boolean(Number(data2[3]))
    }))) ?? [];
    return data.length > 1 && data.shift(), data.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (err) {
    return console.error(err), [];
  }
};

// app/controls/index.ts
var indexLoader = async ({ request }) => {
  let recipient = new URL(request.url).searchParams.get("to") || "", [recipientRemarks, messages] = await Promise.all([
    getPersonRemarks(recipient),
    getMessage()
  ]);
  return (0, import_node2.json)({
    remark: (recipientRemarks == null ? void 0 : recipientRemarks.remarks) || recipient,
    messages,
    ENV: getClinetEnv()
  });
}, indexAction = async ({ request }) => {
  let formData = await request.formData(), name = formData.get("name"), message = formData.get("message"), googleName = formData.get("google_name");
  return typeof name != "string" || typeof message != "string" || typeof googleName != "string" ? { ok: !1 } : { ok: await appendMessage(name, message, googleName) };
};

// app/routes/_index.tsx
var import_react_responsive = require("react-responsive");

// app/images/hero-bg.jpg
var hero_bg_default = "/build/_assets/hero-bg-N5BLWGR4.jpg";

// app/images/hero-bg-mobile.jpg
var hero_bg_mobile_default = "/build/_assets/hero-bg-mobile-OKT6IZAB.jpg";

// app/components/Utils/SectionWrapper.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), SectionWrapper = ({ children, className }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "max-w-7xl mx-auto px-0 md:px-16", children }, void 0, !1, {
  fileName: "app/components/Utils/SectionWrapper.tsx",
  lineNumber: 11,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Utils/SectionWrapper.tsx",
  lineNumber: 10,
  columnNumber: 5
}, this), SectionWrapper_default = SectionWrapper;

// app/images/saharsh.png
var saharsh_default = "/build/_assets/saharsh-7SJN7PQ7.png";

// app/components/BirthdayBoy.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), BirthdayBoy = () => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "pt-20 pb-4", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-3xl text-center font-sans font-bold text-gray-700 mb-6", children: "He is the blessed" }, void 0, !1, {
    fileName: "app/components/BirthdayBoy.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full flex flex-wrap pb-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-full px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col items-center py-14 sm:px-8 lg:p-20 text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "img",
      {
        src: saharsh_default,
        alt: "pengantin perempuan",
        className: "w-48 h-48 rounded-full mb-8"
      },
      void 0,
      !1,
      {
        fileName: "app/components/BirthdayBoy.tsx",
        lineNumber: 13,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-5xl font-medium font-head mb-4 text-gray-800", children: "Neela Saharsh" }, void 0, !1, {
      fileName: "app/components/BirthdayBoy.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TextWithLine_default, { children: "Birthday Boy" }, void 0, !1, {
      fileName: "app/components/BirthdayBoy.tsx",
      lineNumber: 22,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/BirthdayBoy.tsx",
      lineNumber: 21,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "font-sans text-gray-500 leading-6", children: "Born on September, 29th 2022." }, void 0, !1, {
      fileName: "app/components/BirthdayBoy.tsx",
      lineNumber: 24,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/BirthdayBoy.tsx",
    lineNumber: 12,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/BirthdayBoy.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/BirthdayBoy.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/BirthdayBoy.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this), BirthdayBoy_default = BirthdayBoy;

// app/components/Countdown.tsx
var import_react5 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), EVENT_DATE = "September 30, 2023 18:00:00", COUNTDOWN_DATE = new Date(EVENT_DATE).getTime(), countdownBase = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
}, Countdown = (0, import_react5.memo)(() => {
  let [countdown, setCountdown] = (0, import_react5.useState)(countdownBase);
  return (0, import_react5.useEffect)(() => {
    let interval = setInterval(() => {
      let now = (/* @__PURE__ */ new Date()).getTime(), delta = COUNTDOWN_DATE - now, days = Math.floor(delta / (1e3 * 60 * 60 * 24)), hours = Math.floor(
        delta % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60)
      ), minutes = Math.floor(delta % (1e3 * 60 * 60) / (1e3 * 60)), seconds = Math.floor(delta % (1e3 * 60) / 1e3);
      setCountdown({ days, hours, minutes, seconds }), delta < 0 && (clearInterval(interval), setCountdown(countdownBase));
    }, 1e3);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full px-1 md:px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "text-3xl font-head font-bold text-center mb-10 pt-10 text-gray-700 px-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { className: "mb-1", children: "Countdown" }, void 0, !1, {
        fileName: "app/components/Countdown.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h4", { children: "Saharsh Birthday" }, void 0, !1, {
        fileName: "app/components/Countdown.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Countdown.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex justify-center pb-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(NumberCard, { number: countdown.days, label: "Day" }, void 0, !1, {
        fileName: "app/components/Countdown.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(NumberCard, { number: countdown.hours, label: "Hours" }, void 0, !1, {
        fileName: "app/components/Countdown.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(NumberCard, { number: countdown.minutes, label: "Minutes" }, void 0, !1, {
        fileName: "app/components/Countdown.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(NumberCard, { number: countdown.seconds, label: "Seconds" }, void 0, !1, {
        fileName: "app/components/Countdown.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Countdown.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Countdown.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
});
Countdown.displayName = "Countdown";
var NumberCard = (0, import_react5.memo)(({ number, label }) => {
  let numberString = number < 100 ? ("0" + number).slice(-2) : String(number);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "rounded-lg bg-[#EFEFEF] py-7 px-2 w-24 text-center mx-2 text-gray-700 font-sans", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "text-3xl mb-2", children: numberString }, void 0, !1, {
      fileName: "app/components/Countdown.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: label }, void 0, !1, {
      fileName: "app/components/Countdown.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Countdown.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
});
NumberCard.displayName = "NumberCard";
var Countdown_default = Countdown;

// app/components/LocationMap.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), MAP_EMBEDED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.4390589186432!2d78.50880877610341!3d17.53427078337817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b33156f5151%3A0xa3337e599283a76c!2sShruthi%20Banquet%20Halls!5e0!3m2!1sen!2sin!4v1693293209074!5m2!1sen!2sin", MAP_REDIRECT_URL = "https://www.google.com/maps/place/Shruthi+Banquet+Halls/@17.5342708,78.5088088,17z/data=!4m14!1m7!3m6!1s0x3bcb9b33156f5151:0xa3337e599283a76c!2sShruthi+Banquet+Halls!8m2!3d17.5342708!4d78.5113837!16s%2Fg%2F11tnjxd16x!3m5!1s0x3bcb9b33156f5151:0xa3337e599283a76c!8m2!3d17.5342708!4d78.5113837!16s%2Fg%2F11tnjxd16x?authuser=0&entry=ttu", MAP_TITLE = "Shruthi Banquet Halls", MAP_ADDRESS = "Plot no 5.vijay Vihar colony.Opposite to Brindavan colony, Kompally, to, Bolarum, Secunderabad, Telangana 500010", LocationMap = () => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "py-10 bg-[#EFEFEF]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SectionWrapper_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-col-reverse md:flex-row", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "w-full px-4 md:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "p-2 bg-white rounded-lg shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "iframe",
    {
      src: MAP_EMBEDED_URL,
      className: "w-full h-[580px] md:h-[450px]",
      style: { border: 0 },
      allowFullScreen: !0,
      loading: "lazy",
      referrerPolicy: "no-referrer-when-downgrade",
      title: MAP_TITLE,
      scrolling: "no",
      "aria-label": MAP_TITLE
    },
    void 0,
    !1,
    {
      fileName: "app/components/LocationMap.tsx",
      lineNumber: 18,
      columnNumber: 15
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/LocationMap.tsx",
    lineNumber: 17,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/LocationMap.tsx",
    lineNumber: 16,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "md:w-1/2 w-full px-4 mb-6 md:mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "sticky top-8 text-center md:text-left", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { className: "text-3xl font-head font-bold mb-3 text-gray-700", children: "Location" }, void 0, !1, {
      fileName: "app/components/LocationMap.tsx",
      lineNumber: 34,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h4", { className: "text-xl md:text-2xl mb-4 font-sans font-semibold text-gray-700", children: MAP_TITLE }, void 0, !1, {
      fileName: "app/components/LocationMap.tsx",
      lineNumber: 37,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "mb-16 md:mb-10 font-sans", children: MAP_ADDRESS }, void 0, !1, {
      fileName: "app/components/LocationMap.tsx",
      lineNumber: 40,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex md:justify-start justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "a",
      {
        href: MAP_REDIRECT_URL,
        target: "_blank",
        className: "px-5 py-2 transition-all text-lg font-semibold rounded-md bg-contrast hover:bg-contrast-2 outline-contrast-3 text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
        rel: "noreferrer",
        children: "Open Map"
      },
      void 0,
      !1,
      {
        fileName: "app/components/LocationMap.tsx",
        lineNumber: 42,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/LocationMap.tsx",
      lineNumber: 41,
      columnNumber: 15
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/LocationMap.tsx",
    lineNumber: 33,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/LocationMap.tsx",
    lineNumber: 32,
    columnNumber: 11
  }, this)
] }, void 0, !0, {
  fileName: "app/components/LocationMap.tsx",
  lineNumber: 15,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/components/LocationMap.tsx",
  lineNumber: 14,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/LocationMap.tsx",
  lineNumber: 13,
  columnNumber: 5
}, this), LocationMap_default = LocationMap;

// app/components/Message.tsx
var import_react6 = require("react"), import_google = require("@react-oauth/google"), import_axios = __toESM(require("axios")), import_react7 = require("@remix-run/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), PER_PAGE = 5, Message = ({ isMobile }) => {
  var _a;
  let { messages } = (0, import_react7.useLoaderData)(), fetcher = (0, import_react7.useFetcher)(), formRef = (0, import_react6.useRef)(null), messagesRef = (0, import_react6.useRef)(null), [page, setPage] = (0, import_react6.useState)(0), messagesSantized = messages.filter((message) => !message.hide), messagesDisplay = messagesSantized.slice(
    PER_PAGE * page,
    PER_PAGE * (page + 1)
  ), totalPages = Math.ceil(messagesSantized.length / PER_PAGE), paginationDisplay = [...Array(totalPages).keys()].filter((num) => {
    let leftBoundary = page - 2, rightBoundary = page + 2;
    return num >= leftBoundary && num <= rightBoundary || page < 4 && num < 4 || page > totalPages - 5 && num > totalPages - 5;
  }), scrollTop = () => {
    messagesRef.current && messagesRef.current.scrollIntoView({ behavior: "smooth" });
  }, onChangePage = (0, import_react6.useCallback)(
    (newPage) => {
      setPage(newPage), isMobile && scrollTop();
    },
    [isMobile]
  );
  (0, import_react6.useEffect)(() => {
    var _a2, _b;
    (_a2 = fetcher.data) != null && _a2.ok && fetcher.state === "loading" && ((_b = formRef.current) == null || _b.reset(), onChangePage(0));
  }, [fetcher, onChangePage]);
  let sendMessage = (0, import_google.useGoogleLogin)({
    onSuccess: async (res) => {
      let userInfo = await import_axios.default.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: { Authorization: `Bearer ${res.access_token}` }
        }
      ), formData = new FormData(formRef.current);
      formData.append("google_name", userInfo.data.name), fetcher.submit(formData, { method: "post" });
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h4", { className: "text-3xl font-head font-bold text-center mb-10 md:mb-16 text-gray-700 px-4", children: "Give blessings to Saharsh" }, void 0, !1, {
      fileName: "app/components/Message.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-full flex flex-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-full md:w-1/2 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "rounded-lg shadow-lg p-6 md:p-8 bg-white sticky top-8 mb-6 md:mb-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "form",
        {
          ref: formRef,
          onSubmit: (e) => {
            e.preventDefault(), sendMessage();
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("fieldset", { disabled: fetcher.state === "submitting", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                "input",
                {
                  className: "w-full bg-[#f8fafc] rounded border px-3 py-1.5 mb-6 outline-[#0f4d92]",
                  placeholder: "Enter Name",
                  name: "name",
                  required: !0,
                  maxLength: 70
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Message.tsx",
                  lineNumber: 101,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                "textarea",
                {
                  className: "w-full bg-[#f8fafc] rounded border px-3 py-1.5 min-h-[6rem] mb-4 outline-[#0f4d92]",
                  placeholder: "Enter your Message",
                  name: "message",
                  required: !0,
                  maxLength: 750
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Message.tsx",
                  lineNumber: 108,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                "button",
                {
                  type: "submit",
                  id: "submit-message-btn",
                  className: "px-5 py-2 transition-all text-lg font-semibold rounded-md bg-[#0f4d92] hover:bg-[#0f4d92] outline-[#0f4d92] text-white outline-4 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
                  children: "Bless"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Message.tsx",
                  lineNumber: 116,
                  columnNumber: 19
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/Message.tsx",
                lineNumber: 115,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Message.tsx",
              lineNumber: 100,
              columnNumber: 15
            }, this),
            ((_a = fetcher.data) == null ? void 0 : _a.ok) === !1 && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "pt-4 text-red-500", children: "Try again!! Error" }, void 0, !1, {
              fileName: "app/components/Message.tsx",
              lineNumber: 127,
              columnNumber: 17
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Message.tsx",
          lineNumber: 93,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Message.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/Message.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "w-full md:w-1/2 px-4", ref: messagesRef, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "pt-4", children: [
          fetcher.state === "loading" && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mb-5 animate-pulse", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "h-[22.39px] w-[120px] bg-background mb-2 rounded-md" }, void 0, !1, {
              fileName: "app/components/Message.tsx",
              lineNumber: 137,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "h-[20px] w-[300px] bg-background rounded-md" }, void 0, !1, {
              fileName: "app/components/Message.tsx",
              lineNumber: 138,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Message.tsx",
            lineNumber: 136,
            columnNumber: 15
          }, this),
          messagesDisplay.map((message, i) => fetcher.state === "loading" && i === messagesDisplay.length - 1 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mb-7 md:mb-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h5", { className: "font-black font-sans text-gray-700 mb-1", children: message.name }, void 0, !1, {
              fileName: "app/components/Message.tsx",
              lineNumber: 152,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "whitespace-pre-wrap font-sans text-gray-800 leading-6", children: message.message }, void 0, !1, {
              fileName: "app/components/Message.tsx",
              lineNumber: 155,
              columnNumber: 19
            }, this)
          ] }, i, !0, {
            fileName: "app/components/Message.tsx",
            lineNumber: 151,
            columnNumber: 17
          }, this))
        ] }, void 0, !0, {
          fileName: "app/components/Message.tsx",
          lineNumber: 134,
          columnNumber: 11
        }, this),
        totalPages === 1 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center justify-center pl-2 pt-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "button",
            {
              className: "mr-2 text-2xl text-gray-700 transition-all hover:text-[#0f4d92] disabled:opacity-50 disabled:hover:text-gray-700 pt-1",
              onClick: () => onChangePage(page - 1),
              disabled: page === 0,
              "aria-label": "page-left",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("i", { className: "bx bx-chevron-left" }, void 0, !1, {
                fileName: "app/components/Message.tsx",
                lineNumber: 172,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Message.tsx",
              lineNumber: 166,
              columnNumber: 15
            },
            this
          ),
          paginationDisplay[0] > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react6.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "button",
              {
                className: "mr-2 px-1 font-semibold text-lg text-gray-700 transition-all hover:text-[#0f4d92]",
                onClick: () => onChangePage(0),
                children: "1"
              },
              void 0,
              !1,
              {
                fileName: "app/components/Message.tsx",
                lineNumber: 177,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "font-semibold text-lg mr-2", children: "..." }, void 0, !1, {
              fileName: "app/components/Message.tsx",
              lineNumber: 185,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/Message.tsx",
            lineNumber: 176,
            columnNumber: 17
          }, this) : null,
          paginationDisplay.map((num) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "button",
            {
              className: "mr-2 px-1 font-semibold text-lg " + (num === page ? "text-[#0f4d92]" : "text-gray-700 transition-all hover:text-[#0f4d92]"),
              onClick: () => onChangePage(num),
              children: num + 1
            },
            num,
            !1,
            {
              fileName: "app/components/Message.tsx",
              lineNumber: 190,
              columnNumber: 17
            },
            this
          )),
          paginationDisplay[paginationDisplay.length - 1] < totalPages - 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react6.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "font-semibold text-lg mr-2", children: "..." }, void 0, !1, {
              fileName: "app/components/Message.tsx",
              lineNumber: 207,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "button",
              {
                className: "mr-2 px-1 font-semibold text-lg text-gray-700 transition-all hover:text-[#0f4d92]",
                onClick: () => onChangePage(totalPages - 1),
                children: totalPages
              },
              void 0,
              !1,
              {
                fileName: "app/components/Message.tsx",
                lineNumber: 208,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/Message.tsx",
            lineNumber: 206,
            columnNumber: 17
          }, this) : null,
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "button",
            {
              className: "text-2xl mr-2 text-gray-700 transition-all hover:text-[#0f4d92] disabled:opacity-50 disabled:hover:text-gray-700 pt-1",
              onClick: () => onChangePage(page + 1),
              disabled: page === totalPages - 1,
              "aria-label": "page-right",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("i", { className: "bx bx-chevron-right" }, void 0, !1, {
                fileName: "app/components/Message.tsx",
                lineNumber: 225,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/Message.tsx",
              lineNumber: 219,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Message.tsx",
          lineNumber: 165,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Message.tsx",
        lineNumber: 133,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Message.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Message.tsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}, Message_default = (0, import_react6.memo)(Message);

// app/routes/_index.tsx
var import_google2 = require("@react-oauth/google");

// app/components/MusicPlayer.tsx
var import_react8 = require("react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), MusicPlayer = ({ play: playParent }) => {
  let [play, setPlay] = (0, import_react8.useState)(!1), audio = (0, import_react8.useRef)(null), onPlay = async () => {
    audio.current && (await audio.current.play(), setPlay(!0));
  }, onPause = async () => {
    audio.current && (audio.current.pause(), setPlay(!1));
  };
  return (0, import_react8.useEffect)(() => {
    playParent ? onPlay() : onPause();
  }, [playParent]), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react8.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("audio", { controls: !0, ref: audio, loop: !0, hidden: !0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("source", { src: "/song.m4r", type: "audio/mp4" }, void 0, !1, {
        fileName: "app/components/MusicPlayer.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      "Your browser does not support the audio element."
    ] }, void 0, !0, {
      fileName: "app/components/MusicPlayer.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: " fixed bottom-0 right-0 mr-3 mb-3 md:mr-8 md:mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "button",
      {
        className: "rounded-full drop-shadow-md bg-[#0f4d92] text-4xl w-9 h-9  md:w-11 md:h-11 flex items-center justify-center",
        onClick: () => {
          play ? onPause() : onPlay();
        },
        "aria-label": "audio-control",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("i", { className: play ? "bx bx-pause" : "bx bx-play pl-1" }, void 0, !1, {
          fileName: "app/components/MusicPlayer.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/MusicPlayer.tsx",
        lineNumber: 36,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/MusicPlayer.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/MusicPlayer.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}, MusicPlayer_default = MusicPlayer;

// app/components/GalleryPhotos.tsx
var import_react10 = require("react");

// app/images/Photo1.jpeg
var Photo1_default = "/build/_assets/Photo1-C5KQOEL7.jpeg";

// app/images/Photo2.jpeg
var Photo2_default = "/build/_assets/Photo2-IQKVOIUG.jpeg";

// app/images/Photo3.jpeg
var Photo3_default = "/build/_assets/Photo3-P2UMNLY2.jpeg";

// app/images/Photo4.jpeg
var Photo4_default = "/build/_assets/Photo4-FJDQMFQK.jpeg";

// app/images/Photo5.jpeg
var Photo5_default = "/build/_assets/Photo5-R5Q46RJ3.jpeg";

// app/images/Photo6.jpeg
var Photo6_default = "/build/_assets/Photo6-H3JAJKLS.jpeg";

// app/images/Photo7.jpeg
var Photo7_default = "/build/_assets/Photo7-YBRN7LUB.jpeg";

// app/images/Photo8.jpeg
var Photo8_default = "/build/_assets/Photo8-V6YZURPY.jpeg";

// app/images/Photo9.jpeg
var Photo9_default = "/build/_assets/Photo9-MMGAZDP7.jpeg";

// app/images/Photo10.jpeg
var Photo10_default = "/build/_assets/Photo10-TLWHYA2K.jpeg";

// app/images/Photo11.jpeg
var Photo11_default = "/build/_assets/Photo11-7LFGNQ7I.jpeg";

// app/images/Photo12.jpg
var Photo12_default = "/build/_assets/Photo12-OKT6IZAB.jpg";

// app/components/Gallery/Gallery.tsx
var import_react9 = require("react");

// app/components/Gallery/Utils/binary-heap.ts
var BinaryHeap = class {
  constructor(scoreFunction) {
    this.content = [];
    this.scoreFunction = scoreFunction;
  }
  bubbleUp(n) {
    let element = this.content[n], score = this.scoreFunction(element);
    for (; n > 0; ) {
      let parentN = Math.floor((n + 1) / 2) - 1, parent = this.content[parentN];
      if (score >= this.scoreFunction(parent))
        break;
      this.content[parentN] = element, this.content[n] = parent, n = parentN;
    }
  }
  sinkDown(n) {
    let length = this.content.length, element = this.content[n], elemScore = this.scoreFunction(element);
    for (; ; ) {
      let child2N = (n + 1) * 2, child1N = child2N - 1, swap = null, child1Score = 0;
      if (child1N < length) {
        let child1 = this.content[child1N];
        child1Score = this.scoreFunction(child1), child1Score < elemScore && (swap = child1N);
      }
      if (child2N < length) {
        let child2 = this.content[child2N];
        this.scoreFunction(child2) < (swap === null ? elemScore : child1Score) && (swap = child2N);
      }
      if (swap === null)
        break;
      this.content[n] = this.content[swap], this.content[swap] = element, n = swap;
    }
  }
  push(element) {
    this.content.push(element), this.bubbleUp(this.content.length - 1);
  }
  pop() {
    let result = this.content[0], end = this.content.pop();
    return this.content.length > 0 && end && (this.content[0] = end, this.sinkDown(0)), result;
  }
  remove(node) {
    let length = this.content.length;
    for (let i = 0; i < length; i++) {
      if (this.content[i] != node)
        continue;
      let end = this.content.pop();
      if (i === length - 1)
        break;
      end && (this.content[i] = end, this.bubbleUp(i));
      break;
    }
  }
  size() {
    return this.content.length;
  }
};

// app/components/Gallery/Utils/dijkstra.ts
var buildPrecedentsMap = (graph, startNode, endNode) => {
  let precedentsMap = {}, visited = {}, storedShortestPaths = {};
  storedShortestPaths[startNode] = 0;
  let pQueue = new BinaryHeap(function(n) {
    return n.weight;
  });
  for (pQueue.push({ id: startNode, weight: 0 }); pQueue.size(); ) {
    let shortestNode = pQueue.pop(), shortestNodeId = shortestNode.id;
    if (visited[shortestNodeId])
      continue;
    let neighboringNodes = graph(shortestNodeId) || {};
    visited[shortestNodeId] = 1;
    for (let neighbor in neighboringNodes) {
      let newTotalWeight = shortestNode.weight + neighboringNodes[neighbor], neighborId = Number(neighbor);
      (typeof storedShortestPaths[neighborId] > "u" || storedShortestPaths[neighborId] > newTotalWeight) && (storedShortestPaths[neighborId] = newTotalWeight, pQueue.push({ id: neighborId, weight: newTotalWeight }), precedentsMap[neighborId] = shortestNodeId);
    }
  }
  if (typeof storedShortestPaths[endNode] > "u")
    throw new Error(`There is no path from ${startNode} to ${endNode}`);
  return precedentsMap;
}, getPathFromPrecedentsMap = (precedentsMap, endNode) => {
  let nodes = [], n = endNode;
  for (; n !== void 0; )
    nodes.push(n), n = precedentsMap[n];
  return nodes.reverse();
}, findShortestPath = (graph, startNode, endNode) => {
  let precedentsMap = buildPrecedentsMap(graph, startNode, endNode);
  return getPathFromPrecedentsMap(precedentsMap, endNode);
};

// app/components/Gallery/Utils/round.ts
var round = (value, decimals = 0) => Number(Math.round(Number(`${value}e${decimals}`)) + "e-" + decimals);

// app/components/Gallery/Utils/compute-layout.ts
var ratio = ({ width, height }) => round(width / height, 2), getCommonHeight = (row, containerWidth, margin) => {
  let rowWidth = containerWidth - row.length * (margin * 2), totalAspectRatio = row.reduce((acc, photo) => acc + ratio(photo), 0);
  return rowWidth / totalAspectRatio;
}, cost = (photos2, i, j, width, targetHeight, margin) => {
  let row = photos2.slice(i, j), commonHeight = getCommonHeight(row, width, margin);
  return Math.pow(Math.abs(commonHeight - targetHeight), 2);
}, makeGetNeighbors = (targetHeight, containerWidth, photos2, limitNodeSearch, margin) => (start) => {
  let results = {};
  start = +start, results[+start] = 0;
  for (let i = start + 1; i < photos2.length + 1 && !(i - start > limitNodeSearch); ++i)
    results[i] = cost(photos2, start, i, containerWidth, targetHeight, margin);
  return results;
}, computeRowLayout = ({
  containerWidth,
  limitNodeSearch,
  targetRowHeight,
  margin,
  photos: photos2
}) => {
  let getNeighbors = makeGetNeighbors(
    targetRowHeight,
    containerWidth,
    photos2,
    limitNodeSearch,
    margin
  ), path = findShortestPath(getNeighbors, 0, photos2.length);
  path = path.map((node) => +node);
  for (let i = 1; i < path.length; ++i) {
    let row = photos2.slice(path[i - 1], path[i]), height = getCommonHeight(row, containerWidth, margin);
    for (let j = path[i - 1]; j < path[i]; ++j)
      photos2[j].width = round(height * ratio(photos2[j]), 1), photos2[j].height = height;
  }
  return photos2;
};

// app/components/Gallery/Utils/findIdealNodeSearch.ts
var findIdealNodeSearch = ({
  targetRowHeight,
  containerWidth
}) => {
  let rowAR = containerWidth / targetRowHeight;
  return round(rowAR / 1.5) + 8;
};

// app/components/Gallery/Gallery.tsx
var import_react_photo_view2 = require("react-photo-view"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), Gallery = ({ photos: photos2 }) => {
  let [containerWidth, setContainerWidth] = (0, import_react9.useState)(0), galleryEl = (0, import_react9.useRef)(null);
  if ((0, import_react9.useLayoutEffect)(() => {
    let animationFrameID = null, observer = new ResizeObserver((entries) => {
      let newWidth = entries[0].contentRect.width;
      containerWidth !== newWidth && (animationFrameID = window.requestAnimationFrame(() => {
        setContainerWidth(Math.floor(newWidth));
      }));
    });
    return galleryEl.current && observer.observe(galleryEl.current), () => {
      observer.disconnect(), animationFrameID && window.cancelAnimationFrame(animationFrameID);
    };
  }), !containerWidth)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { ref: galleryEl, children: "\xA0" }, void 0, !1, {
      fileName: "app/components/Gallery/Gallery.tsx",
      lineNumber: 52,
      columnNumber: 31
    }, this);
  let width = containerWidth - 1, targetRowHeight = 300, limitNodeSearch = 2;
  containerWidth >= 450 && (limitNodeSearch = findIdealNodeSearch({ containerWidth, targetRowHeight }));
  let thumbs = computeRowLayout({
    containerWidth: width,
    limitNodeSearch,
    targetRowHeight,
    margin: 2,
    photos: photos2
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react_photo_view2.PhotoProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { ref: galleryEl, className: "flex flex-wrap", children: thumbs.map((thumb, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react_photo_view2.PhotoView, { src: thumb.src, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    "img",
    {
      src: thumb.src,
      alt: thumb.alt,
      width: thumb.width,
      height: thumb.height,
      className: "m-0.5 cursor-pointer"
    },
    index,
    !1,
    {
      fileName: "app/components/Gallery/Gallery.tsx",
      lineNumber: 74,
      columnNumber: 15
    },
    this
  ) }, index, !1, {
    fileName: "app/components/Gallery/Gallery.tsx",
    lineNumber: 73,
    columnNumber: 13
  }, this)) }, void 0, !1, {
    fileName: "app/components/Gallery/Gallery.tsx",
    lineNumber: 70,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Gallery/Gallery.tsx",
    lineNumber: 69,
    columnNumber: 5
  }, this);
}, Gallery_default = Gallery;

// app/components/GalleryPhotos.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), photos = [
  {
    src: Photo1_default,
    width: 3,
    height: 2,
    alt: "Photo 1"
  },
  {
    src: Photo2_default,
    width: 4,
    height: 5,
    alt: "Photo 2"
  },
  {
    src: Photo3_default,
    width: 3,
    height: 2,
    alt: "Photo 3"
  },
  {
    src: Photo4_default,
    width: 1,
    height: 1,
    alt: "Photo 4"
  },
  {
    src: Photo5_default,
    width: 3,
    height: 2,
    alt: "Photo 5"
  },
  {
    src: Photo6_default,
    width: 4,
    height: 5,
    alt: "Photo 6"
  },
  {
    src: Photo7_default,
    width: 3,
    height: 2,
    alt: "Photo 7"
  },
  {
    src: Photo8_default,
    width: 1,
    height: 1,
    alt: "Photo 8"
  },
  {
    src: Photo9_default,
    width: 3,
    height: 2,
    alt: "Photo 9"
  },
  {
    src: Photo10_default,
    width: 5,
    height: 4,
    alt: "Photo 10"
  },
  {
    src: Photo11_default,
    width: 3,
    height: 2,
    alt: "Photo 11"
  },
  {
    src: Photo12_default,
    width: 2,
    height: 3,
    alt: "Photo 12"
  }
], isHydrating = !0, GalleryPhotos = () => {
  let [isHydrated, setIsHydrated] = (0, import_react10.useState)(!isHydrating);
  return (0, import_react10.useEffect)(() => {
    isHydrating = !1, setIsHydrated(!0);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "w-full px-1 md:px-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h4", { className: "text-3xl font-head font-bold text-center mb-14 pt-10 text-gray-700", children: "Gallery" }, void 0, !1, {
      fileName: "app/components/GalleryPhotos.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    isHydrated ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Gallery_default, { photos }, void 0, !1, {
      fileName: "app/components/GalleryPhotos.tsx",
      lineNumber: 109,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/GalleryPhotos.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this) : null
  ] }, void 0, !0, {
    fileName: "app/components/GalleryPhotos.tsx",
    lineNumber: 103,
    columnNumber: 5
  }, this);
}, GalleryPhotos_default = GalleryPhotos;

// app/routes/_index.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), meta = () => [
  {
    title: "Birthday Invitation - Neela Saharsh"
  },
  {
    description: "Birthday invitation of Saharsh - Son of Neela Shivani & Santosh"
  },
  {
    "og:image": saharsh_default
  },
  {
    "og:site_name": "neesanto"
  },
  { "og:title": "Birthday of Saharsh" },
  {
    "og:description": "September, 29th 2023. Shruthi banquets"
  },
  { "og:type": "website" }
], loader = indexLoader, action = indexAction;
function Index() {
  let { ENV } = (0, import_react11.useLoaderData)(), isSmallScreen = (0, import_react_responsive.useMediaQuery)({ query: "(max-width: 768px)" }), [openWelcome, setOpenWelcome] = (0, import_react12.useState)(!0), [isMobile, setIsMobile] = (0, import_react12.useState)(!1);
  (0, import_react12.useEffect)(() => {
    document.body.style.overflow = "hidden";
  }, []);
  let onCloseWelcomeModal = () => {
    setOpenWelcome(!1), document.body.style.overflow = "auto", window.scrollTo({ top: 0 });
  };
  (0, import_react12.useEffect)(() => {
    setIsMobile(isSmallScreen);
  }, [isSmallScreen]);
  let thisYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    "div",
    {
      style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
      className: "bg-background-2",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(WelcomeModal, { isOpen: openWelcome, onClose: onCloseWelcomeModal }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 74,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          "div",
          {
            className: "flex justify-center items-center h-screen md:h-[100vh] bg-no-repeat bg-center bg-cover",
            style: { backgroundImage: `url(${isMobile ? hero_bg_mobile_default : hero_bg_default})` },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mb-1", style: { position: "absolute", top: "10vh" }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                "h4",
                {
                  className: "text-center font-head font-bold text-5xl mb-4 ",
                  style: { textShadow: "3px 3px 1px #ffffff", color: "red" },
                  children: "Happy Birthday Saharsh"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 81,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
                "div",
                {
                  className: "text-center font-black font-sans text-md  italic border-t-2 border-[#ffffff] pt-3",
                  style: { textShadow: "2px 2px 1px #ffffff", color: "red" },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mb-4 font-head md:text-lg font-medium", style: { color: "red" }, children: "Birthday on:" }, void 0, !1, {
                      fileName: "app/routes/_index.tsx",
                      lineNumber: 91,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h3", { className: "text-3xl md:text-4xl font-black mb-6 text-cente font-sans", style: { color: "red" }, children: "September, 30th 2023" }, void 0, !1, {
                      fileName: "app/routes/_index.tsx",
                      lineNumber: 94,
                      columnNumber: 13
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 87,
                  columnNumber: 11
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 80,
              columnNumber: 9
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 76,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(SectionWrapper_default, { className: "bg-background", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(BirthdayBoy_default, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 102,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 101,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(SectionWrapper_default, { className: "mb-36 pt-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Countdown_default, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 106,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 105,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mb-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(LocationMap_default, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 110,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 109,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(SectionWrapper_default, { className: "mb-36", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(GalleryPhotos_default, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 114,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 113,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_google2.GoogleOAuthProvider, { clientId: ENV.GOOGLE_CLIENT_ID, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(SectionWrapper_default, { className: "mb-36", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Message_default, { isMobile }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 119,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 118,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 117,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "py-24 bg-background text-gray-700 relative text-center font-sans", children: [
          "\xA9 ",
          thisYear,
          " by ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { className: "font-semibold", children: "Santosh" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 124,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 123,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(MusicPlayer_default, { play: !openWelcome }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 127,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/_index.tsx",
      lineNumber: 70,
      columnNumber: 5
    },
    this
  );
}

// server-entry-module:@remix-run/dev/server-build
init_assets_manifest();
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/server.js:
  (**
   * @remix-run/css-bundle v1.16.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
