"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const common_1 = require("@nestjs/common");
const AppResult_1 = require("../../modules/AppResult");
let ConfigService = class ConfigService {
    async queryBanners() {
        return AppResult_1.default.succee('');
    }
    async queryTabs() {
        return AppResult_1.default.succee('');
    }
    async createBanner() {
        return AppResult_1.default.succee('');
    }
    async createTab() {
        return AppResult_1.default.succee('');
    }
    async deleteBanner() {
        return AppResult_1.default.succee('');
    }
    async deleteTab() {
        return AppResult_1.default.succee('');
    }
};
ConfigService = __decorate([
    (0, common_1.Injectable)()
], ConfigService);
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map