"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../dto/entity/user.entity");
const pwd_entity_1 = require("../../dto/entity/pwd.entity");
const AppResult_1 = require("../../modules/AppResult");
const Error_1 = require("../../modules/exception/Error");
const userUtils_1 = require("../../utils/userUtils");
let AccountService = class AccountService {
    async onLogin(body) {
        const params = { key: '', value: '' };
        switch (body.mode) {
            case 0:
                params.key = 'user.email = :email';
                params.value = { email: body.email };
                break;
            case 1:
                params.key = 'user.phone = :phone';
                params.value = { phone: body.phone };
                break;
            default:
                params.key = 'user.name = :name';
                params.value = { name: body.name };
                break;
        }
        const con = (0, typeorm_1.getConnection)();
        const user = await this._getUser(con, params.value, params.key);
        if (!user || !user.uid) {
            throw Error_1.default.PWD_ERR;
        }
        try {
            const pwd = await con
                .createQueryBuilder()
                .select('pwd')
                .from(pwd_entity_1.Pwd, 'pwd')
                .where('pwd.id = :id', { id: user.pid })
                .getOne();
            if (pwd && pwd.password == body.password) {
            }
            else {
                throw Error_1.default.PWD_ERR;
            }
        }
        catch (error) {
            console.log(error);
            throw Error_1.default.LOGIN_ERROR;
        }
        user.token = (0, userUtils_1.createToken)(user.uid, user.name);
        con.createQueryBuilder().update(user_entity_1.User).set({ token: user.token }).where('id = :id', { id: user.id }).execute();
        return AppResult_1.default.succee(user);
    }
    async onRegister(body) {
        if (body.name) {
        }
        const con = (0, typeorm_1.getConnection)();
        const oneName = await this._getUser(con, { name: body.name });
        if (oneName || oneName.uid) {
            throw Error_1.default.ACCOUNT_REPEAT;
        }
        const uid = 'A' + Date.now();
        const pwd = new pwd_entity_1.Pwd();
        pwd.uid = uid;
        pwd.date = Date.now();
        pwd.password = body.password;
        try {
            const pwd2 = await con
                .createQueryBuilder()
                .insert()
                .into(pwd_entity_1.Pwd)
                .values(pwd)
                .execute();
            if (pwd2 && pwd2.identifiers && pwd2.identifiers.length > 0) {
                pwd.id = pwd2.identifiers[0].id;
            }
        }
        catch (error) {
            throw Error_1.default.PWD_PARAM;
        }
        const user = new user_entity_1.User();
        user.uid = uid;
        (user.pid = pwd.id), (user.name = body.name);
        user.nickname = body.name;
        user.email = body.email;
        user.icon = `${Math.random() * 30}`;
        user.token = (0, userUtils_1.createToken)(uid, body.name);
        let result = null;
        try {
            result = await con
                .createQueryBuilder()
                .insert()
                .into(user_entity_1.User)
                .values(user)
                .execute();
            if (result.generatedMaps && result.generatedMaps.length > 0) {
                result = result.generatedMaps[0];
            }
        }
        catch (error) {
            throw Error_1.default.ACCOUNT_ERROR;
        }
        body == null;
        return AppResult_1.default.succee(result);
    }
    async onReset(body) {
        return AppResult_1.default.succee('');
    }
    async queryUserInfo(uid) {
        let user = null;
        try {
            user = await (0, typeorm_1.getConnection)()
                .createQueryBuilder()
                .select('user')
                .from(user_entity_1.User, 'user')
                .where('user.uid = :uid', { uid })
                .getOne();
            if (!user || !user.id) {
                throw Error_1.default.ACCOUNT_NOT;
            }
        }
        catch (error) {
            throw Error_1.default.ACCOUNT_PARAM;
        }
        return AppResult_1.default.succee(user);
    }
    async onLogout(uid) {
        try {
            const user = await (0, typeorm_1.getConnection)()
                .createQueryBuilder()
                .update(user_entity_1.User)
                .set({
                token: '',
            })
                .where('uid = :uid', { uid })
                .execute();
        }
        catch (error) {
            throw Error_1.default.ACCOUNT_ERROR;
        }
        return AppResult_1.default.succee('退出成功');
    }
    async onDelete(uid) {
        const user = await (0, typeorm_1.getConnection)()
            .createQueryBuilder()
            .delete()
            .from(user_entity_1.User, 'user')
            .where('uid = :uid', { uid })
            .execute();
        return AppResult_1.default.succee('');
    }
    async getUsers(mode) {
        if (mode != 'abcdefg') {
            return AppResult_1.default.succee('Are You 二傻!!!');
        }
        const users = await (0, typeorm_1.getConnection)()
            .createQueryBuilder()
            .select('user')
            .from(user_entity_1.User, 'user')
            .getMany();
        return AppResult_1.default.succee(users);
    }
    async _getUser(con, value, key = 'user.name = :name') {
        let user = null;
        try {
            user = await con
                .createQueryBuilder()
                .select('user')
                .from(user_entity_1.User, 'user')
                .where(key, value)
                .getOne();
        }
        catch (error) {
            console.log(error);
        }
        return user;
    }
};
AccountService = __decorate([
    (0, common_1.Injectable)()
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map