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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGreeting = exports.updateGreeting = exports.createGreeting = exports.getGreetingById = exports.getAllGreetings = void 0;
const greeting_1 = __importDefault(require("../models/greeting"));
const getAllGreetings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const greetings = yield greeting_1.default.findAll();
        res.status(200).json(greetings);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getAllGreetings = getAllGreetings;
const getGreetingById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const greeting = yield greeting_1.default.findByPk(req.params.id);
        if (greeting) {
            res.status(200).json(greeting);
        }
        else {
            res.status(404).json({ error: 'Greeting not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getGreetingById = getGreetingById;
const createGreeting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newGreeting = yield greeting_1.default.create(req.body);
        res.status(201).json(newGreeting);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.createGreeting = createGreeting;
const updateGreeting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [updated] = yield greeting_1.default.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedGreeting = yield greeting_1.default.findByPk(req.params.id);
            res.status(200).json(updatedGreeting);
        }
        else {
            res.status(404).json({ error: 'Greeting not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.updateGreeting = updateGreeting;
const deleteGreeting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield greeting_1.default.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        }
        else {
            res.status(404).json({ error: 'Greeting not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.deleteGreeting = deleteGreeting;
