import { Response } from "express";

import { Controller, Get, Res } from "@nestjs/common";
import { ListPatientsUseCase } from "./listPatientsUseCase";

@Controller("patients")
class ListPatientsController {
  constructor(private listPatientsUseCase: ListPatientsUseCase) {}

  @Get()
  async handle(@Res() res: Response): Promise<Response> {
    const listPatients = await this.listPatientsUseCase.execute();

    return res.json(listPatients);
  }
}

export { ListPatientsController };
