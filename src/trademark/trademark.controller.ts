import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTrademarkDto } from './dto/create-trademark.dto';
import { UpdateTrademarkDto } from './dto/update-trademark.dto';
import { TrademarkService } from './trademark.service';

@Controller('trademark')
export class TrademarkController {
  constructor(private readonly trademarkService: TrademarkService) {}

  @Post()
  @HttpCode(201)
  create(@Body(ValidationPipe) dto: CreateTrademarkDto) {
    return this.trademarkService.create(dto);
  }

  @Get()
  @HttpCode(200)
  findAll() {
    return this.trademarkService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.trademarkService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(200)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) dto: UpdateTrademarkDto,
  ) {
    return this.trademarkService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(200)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.trademarkService.delete(id);
  }
}
