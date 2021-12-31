"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
app.use('/', router_1.default)
    .use(body_parser_1.default.json());
app.listen('7070', () => {
    console.log('service started');
});
