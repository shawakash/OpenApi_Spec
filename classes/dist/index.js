"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
const helpful_decorators_1 = require("helpful-decorators");
class OpenApi extends Date {
    constructor(timeZone) {
        super();
        this.timeZone = timeZone;
    }
    time() {
        const dateTime = luxon_1.DateTime.now().setZone(this.timeZone);
        const currentTime = dateTime.toLocaleString(luxon_1.DateTime.TIME_SIMPLE);
        console.log(currentTime);
        return currentTime;
    }
}
__decorate([
    helpful_decorators_1.once,
    helpful_decorators_1.measure
], OpenApi.prototype, "time", null);
const instanceObject = new OpenApi('Asia/Kolkata');
instanceObject.time();
instanceObject.time();
instanceObject.time();
instanceObject.time();
instanceObject.time();
