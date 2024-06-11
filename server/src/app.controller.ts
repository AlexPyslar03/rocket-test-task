import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {JSONObject} from "amocrm-js/dist/types";

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/leads')
  async getLeads(): Promise<string> {
    return this.appService.getLeads();
  }
}
