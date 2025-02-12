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
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var icons_vue_1 = require("@element-plus/icons-vue");
var input1 = (0, vue_1.ref)('');
var input2 = (0, vue_1.ref)('');
var input3 = (0, vue_1.ref)(''); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    var __VLS_ctx = {};
    var __VLS_components;
    var __VLS_directives;
    ['search',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("navibox") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("logobar") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.img, __VLS_intrinsicElements.img)({
        src: ("../assets/logo.svg"),
        alt: (""),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("rightbar") }));
    var __VLS_0 = {}.ElInput;
    /** @type { [typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ] } */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ style: ({}) }, { placeholder: ("搜索"), prefixIcon: ((__VLS_ctx.Search)) })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ style: ({}) }, { placeholder: ("搜索"), prefixIcon: ((__VLS_ctx.Search)) })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("userbar") }));
    var __VLS_6 = {}.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */ ;
    // @ts-ignore
    var __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        text: (true),
    }));
    var __VLS_8 = __VLS_7.apply(void 0, __spreadArray([{
            text: (true),
        }], __VLS_functionalComponentArgsRest(__VLS_7), false));
    __VLS_11.slots.default;
    var __VLS_11;
    var __VLS_12 = {}.ElButton;
    /** @type { [typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ] } */ ;
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
        type: ("primary"),
    }));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([{
            type: ("primary"),
        }], __VLS_functionalComponentArgsRest(__VLS_13), false));
    __VLS_17.slots.default;
    var __VLS_17;
    ['navibox', 'logobar', 'rightbar', 'userbar',];
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
            Search: icons_vue_1.Search,
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
