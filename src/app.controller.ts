import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TCheckWord, TCreateCategory, TCreateWord, TCreateWordByStrings } from './types/index.type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-all-categories')
  getAllCategories() {
    return this.appService.getAllCategories();
  }

  @Get('get-words/:category')
  getAllWordsByCategory(@Param('category') category: string) {
    return this.appService.getAllWordsByCategory(category);
  }

  @Get('get-word/:category')
  getAllWordByCategory(@Param('category') category: string) {
    return this.appService.getAllWordByCategory(category);
  }

  @Post('check-word')
  checkWord(@Body() data: TCheckWord) {
    const result = this.appService.checkWord(data)

    return {isValidate: result};
  }

  @Post('create-word')
  createWord(@Body() data: TCreateWord) {
    return this.appService.createWord(data);
  }
  @Post('create-word-by-strings')
  createWordByStrings(@Body() data: TCreateWordByStrings) {
    return this.appService.createWordByStrings(data);
  }

  @Post('create-category')
  createCategory(@Body() data: TCreateCategory) {
    return this.appService.createCategory(data);
  }
}
