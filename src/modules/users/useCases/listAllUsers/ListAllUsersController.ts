import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const user_id = request.headers?.user_id as string;
      if(!user_id){
        throw new Error("Identification is required!");
      }
      const users = this.listAllUsersUseCase.execute({ user_id });
      return response.json(users);  
    } catch (error) {
      return response.status(400).json({ error: error?.message })
    }
  }
}

export { ListAllUsersController };
