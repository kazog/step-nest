"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const schedule_1 = require("@nestjs/schedule");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const account_module_1 = require("./interfaces/account/account.module");
const menu_module_1 = require("./interfaces/menu/menu.module");
const shop_module_1 = require("./interfaces/shop/shop.module");
const book_module_1 = require("./interfaces/book/book.module");
const author_module_1 = require("./interfaces/author/author.module");
const activity_module_1 = require("./interfaces/activity/activity.module");
const system_module_1 = require("./interfaces/system/system.module");
const config_module_1 = require("./interfaces/config/config.module");
const socket_module_1 = require("./services/websocket/socket.module");
const AppExceptionFilter_1 = require("./modules/exception/AppExceptionFilter");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            account_module_1.AccountModule,
            activity_module_1.ActivityModule,
            author_module_1.AuthorModule,
            book_module_1.BookModule,
            menu_module_1.MenuModule,
            shop_module_1.ShopModule,
            system_module_1.SystemModule,
            config_module_1.ConfigModule,
            socket_module_1.SocketModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            { provide: core_1.APP_FILTER, useClass: AppExceptionFilter_1.default }
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map