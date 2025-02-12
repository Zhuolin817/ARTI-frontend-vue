"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./assets/main.css");
var element_plus_1 = __importDefault(require("element-plus"));
require("element-plus/dist/index.css");
var vue_1 = require("vue");
var App_vue_1 = __importDefault(require("./App.vue"));
var app = (0, vue_1.createApp)(App_vue_1.default);
app.use(element_plus_1.default);
app.mount('#app');
