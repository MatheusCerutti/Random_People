import { Router } from "express";

const personRouter = Router();

personRouter.get('/person');

export {personRouter};