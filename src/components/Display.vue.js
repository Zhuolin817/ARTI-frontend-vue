"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Card_vue_1 = __importDefault(require("./Card.vue"));
var axios_1 = __importDefault(require("axios"));
var vue_1 = require("vue");
var cardList = (0, vue_1.reactive)([]);
var totalPage = (0, vue_1.ref)(5);
var pageSize = 20;
var getInfo = function (page, size) {
    axios_1.default.get("http://43.133.215.102:8080/api/v1/posts", {
        params: {
            page: page,
            size: size
        }
    }).then(function (res) {
        cardList.splice.apply(cardList, __spreadArray([0, cardList.length], res.data.data.list, false)); // newList 是新数组
        totalPage.value = res.data.data.pages;
        console.log(res);
    }).catch(function (err) {
        console.log(err);
    });
};
var changePage = function (e) {
    getInfo(e, pageSize);
    document.documentElement.scrollTop = 0;
};
(0, vue_1.onMounted)(function () {
    getInfo(1, pageSize);
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("displaybox") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("display") }));
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.cardList)); _i < _a.length; _i++) {
        var info = _a[_i][0];
        // @ts-ignore
        /** @type { [typeof Card, ] } */ ;
        // @ts-ignore
        var __VLS_0 = __VLS_asFunctionalComponent(Card_vue_1.default, new Card_vue_1.default({
            key: ((info.postId)),
            info: ((info)),
        }));
        var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
                key: ((info.postId)),
                info: ((info)),
            }], __VLS_functionalComponentArgsRest(__VLS_0), false));
    }
    var __VLS_5 = {}.ElPagination;
    /** @type { [typeof __VLS_components.ElPagination, typeof __VLS_components.elPagination, ] } */ ;
    // @ts-ignore
    var __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5(__assign(__assign({ 'onChange': {} }, { style: ({}) }), { background: (true), layout: ("prev, pager, next"), pageCount: ((__VLS_ctx.totalPage)) })));
    var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([__assign(__assign({ 'onChange': {} }, { style: ({}) }), { background: (true), layout: ("prev, pager, next"), pageCount: ((__VLS_ctx.totalPage)) })], __VLS_functionalComponentArgsRest(__VLS_6), false));
    var __VLS_11;
    var __VLS_12 = {
        onChange: (__VLS_ctx.changePage)
    };
    var __VLS_8;
    var __VLS_9;
    var __VLS_10;
    ['displaybox', 'display',];
    var __VLS_slots;
    var $slots;
    var __VLS_inheritedAttrs;
    var $attrs;
    var __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
var __VLS_self = (await Promise.resolve().then(function () { return __importStar(require('vue')); })).defineComponent({
    setup: function () {
        return {
            Card: Card_vue_1.default,
            cardList: cardList,
            totalPage: totalPage,
            changePage: changePage,
        };
    },
});
exports.default = (await Promise.resolve().then(function () { return __importStar(require('vue')); })).defineComponent({
    setup: function () {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
