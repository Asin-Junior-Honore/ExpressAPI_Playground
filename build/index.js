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
const express_1 = __importDefault(require("express"));
const database_1 = require("./config/database"); // Import your Sequelize instance
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const greetingRoutes_1 = __importDefault(require("./routes/greetingRoutes"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Middleware
app.use(express_1.default.json());
// Routes
app.use('/api/users', userRoutes_1.default);
app.use('/api/greetings', greetingRoutes_1.default);
// Serve static files from the views directory
app.use(express_1.default.static(path_1.default.join(__dirname, 'views')));
// Handle all routes
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, 'views', 'index.html'));
});
// Function to sync database
const syncDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield database_1.sequelize.authenticate();
        yield database_1.sequelize.sync({ force: true }); // For development only. Use `sync` without `force` in production.
        console.log('Database synchronized successfully.');
    }
    catch (error) {
        console.error('Unable to synchronize the database:', error);
    }
});
// Start server after database sync
syncDatabase().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
        console.log(`API documentation is available at http://localhost:${port}/index.html`);
    });
}).catch((error) => {
    console.error('Error syncing database:', error);
});
