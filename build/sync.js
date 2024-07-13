"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./config/database");
const syncDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.sequelize.authenticate();
        yield database_1.sequelize.sync({ force: true }); // For development only. Use `sync` without `force` in production.
        console.log('Database synchronized successfully.');
    }
    catch (error) {
        console.error('Unable to synchronize the database:', error);
    }
    finally {
        yield database_1.sequelize.close();
    }
});
syncDatabase();
