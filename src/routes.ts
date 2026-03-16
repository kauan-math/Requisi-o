import { Router } from "express";

import alunosController from "./controllers/alunos.js";
import type { Request } from "express/lib/request.js";
import type { Response } from "express/lib/response.js";
const routes = Router();

routes.get("/", (request: Request, response: Response) =>
  response.status(200).json({ succes: true }),
);

//rotas de alunos
//1°metodo
routes.get("/alunos", (request: Request, response: Response) =>
  alunosController.list(request, response),
);
//2°metodo
routes.get("/alunos", alunosController.list);
routes.get("/alunos/:id", alunosController.getById);
routes.post("/alunos", alunosController.create);
routes.put("/alunos/:id", alunosController.update)
routes.delete("/alunos/:id", alunosController.delete)

export default routes;
