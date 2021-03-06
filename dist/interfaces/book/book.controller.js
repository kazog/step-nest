"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const book_1 = require("../../dto/body/book");
const list_body_1 = require("../../dto/body/list_body");
const Error_1 = require("../../modules/exception/Error");
const book_service_1 = require("./book.service");
let BookController = class BookController {
    constructor(appService) {
        this.appService = appService;
    }
    queryBooks(body) {
        console.log(body);
        return this.appService.queryBooks(body);
    }
    queryDetail(id) {
        return this.appService.queryDetail(id);
    }
    createBook(body) {
        if (body.name || body.author || body.about || body.cover || body.tag) {
            throw Error_1.default.PWD_ERR;
        }
        return this.appService.createBook(body);
    }
    updateBook() {
        return this.appService.updateBook();
    }
    changeStatus(id) {
        return this.appService.deleteOrDown(id);
    }
    queryBookUrl(param) {
        return this.appService.queryBookUrl(param);
    }
    queryHotBooks() {
        return this.appService.queryHotBooks();
    }
    querySimilarBook(type) {
        return this.appService.querySimilarBook(type);
    }
};
__decorate([
    (0, common_1.Post)("books"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_body_1.ListBody]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "queryBooks", null);
__decorate([
    (0, common_1.Get)("detail"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "queryDetail", null);
__decorate([
    (0, common_1.Post)("create"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_1.BookBody]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "createBook", null);
__decorate([
    (0, common_1.Post)("update"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookController.prototype, "updateBook", null);
__decorate([
    (0, common_1.Get)("change"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "changeStatus", null);
__decorate([
    (0, common_1.Get)("book_url:id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "queryBookUrl", null);
__decorate([
    (0, common_1.Post)("book_hot"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookController.prototype, "queryHotBooks", null);
__decorate([
    (0, common_1.Get)("book_similar"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "querySimilarBook", null);
BookController = __decorate([
    (0, common_1.Controller)("book"),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookController);
exports.BookController = BookController;
//# sourceMappingURL=book.controller.js.map