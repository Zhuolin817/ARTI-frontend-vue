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
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var showText = (0, vue_1.ref)(false);
var info = (0, vue_1.defineProps)({
    info: Object
});
var showDetail = function () {
    showText.value = true;
};
var hideDetail = function () {
    showText.value = false;
};
var title = info.info.title;
var imageUrl = info.info.imageUrl;
console.log(info.info);
var userAvatarUrl = info.info.userAvatarUrl;
var userName = info.info.userName; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    ['container', 'info', 'img', 'userbar', 'userbar',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign(__assign({ onMouseenter: (__VLS_ctx.showDetail) }, { onMouseleave: (__VLS_ctx.hideDetail) }), { class: ("container") }), { style: (({ backgroundImage: 'url(' + __VLS_ctx.imageUrl + ')' })) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign(__assign({ class: ("img") }, { class: (({ 'detail': __VLS_ctx.showText })) }), { style: (({ backgroundImage: 'url(' + __VLS_ctx.imageUrl + ')' })) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("info") }, { class: (({ 'showtext': __VLS_ctx.showText })) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: ("title") }));
    (__VLS_ctx.title + '封数及时解决的房价是否据即使对方很少看见反函数科技孵化数据库');
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("userbar") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: ((__VLS_ctx.userAvatarUrl)),
        alt: (""),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.userName);
    ['container', 'img', 'detail', 'info', 'showtext', 'title', 'userbar',];
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
        return __assign(__assign({ $props: __VLS_makeOptional(info) }, info), { showText: showText, showDetail: showDetail, hideDetail: hideDetail, title: title, imageUrl: imageUrl, userAvatarUrl: userAvatarUrl, userName: userName });
    },
});
exports.default = (await Promise.resolve().then(function () { return __importStar(require('vue')); })).defineComponent({
    setup: function () {
        return __assign({ $props: __VLS_makeOptional(info) }, info);
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
