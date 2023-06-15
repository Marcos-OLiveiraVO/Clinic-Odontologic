import { Controller, Get, Res } from "@nestjs/common";
import { ListPacientsUseCase } from "./listPacientsUseCase";
import { Response } from "express";

@Controller("pacients")
class ListPacientsController {
  constructor(private listPacientsUseCase: ListPacientsUseCase) {}

  @Get()
  async handle(@Res() res: Response): Promise<Response> {
    const listPacients = await this.listPacientsUseCase.execute();

    return res.json(listPacients);
  }
}

export { ListPacientsController };
