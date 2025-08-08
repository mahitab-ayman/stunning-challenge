
import { Controller, Post, Get, Body } from '@nestjs/common';
import { SectionsService } from './sections.service';

@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}

  @Post()
  create(@Body('idea') idea: string) {
    return this.sectionsService.create(idea);
  }

  @Get()
  findAll() {
    return this.sectionsService.findAll();
  }
}
