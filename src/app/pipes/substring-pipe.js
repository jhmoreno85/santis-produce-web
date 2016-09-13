"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by jlhuerta on 9/12/16.
 */
var core_1 = require('@angular/core');
var SubstringPipe = (function () {
    function SubstringPipe() {
    }
    SubstringPipe.prototype.transform = function (value, length) {
        if (!value) {
            return;
        }
        if (value.length > length) {
            return value.substr(0, length) + "...";
        }
        else {
            return value + "...";
        }
    };
    SubstringPipe = __decorate([
        core_1.Pipe({ name: 'subStringCustom' })
    ], SubstringPipe);
    return SubstringPipe;
}());
exports.SubstringPipe = SubstringPipe;
//# sourceMappingURL=substring-pipe.js.map