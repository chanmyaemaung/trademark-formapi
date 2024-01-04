import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma/prisma.service';
import { CreateTrademarkDto } from './dto/create-trademark.dto';
import { UpdateTrademarkDto } from './dto/update-trademark.dto';

@Injectable()
export class TrademarkService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateTrademarkDto) {
    try {
      const { name, email, phone, word, trademarkName, logo } = dto;

      const emailExist = await this.prisma.detail.findUnique({
        where: { email },
      });

      if (emailExist) throw new ForbiddenException('Email already exist.');

      return await this.prisma.detail.create({
        data: {
          name,
          email,
          phone,
          word,
          trademarkName,
          logo,
        },
      });
    } catch (error) {
      throw new ForbiddenException(error);
    }
  }

  async findAll() {
    try {
      const detail = await this.prisma.detail.findMany();

      if (!detail) throw new NotFoundException('Detail not found');

      return detail;
    } catch (error) {
      throw new ForbiddenException(error);
    }
  }

  async findOne(id: number) {
    try {
      const detail = await this.prisma.detail.findUnique({
        where: { id },
      });

      if (!detail) throw new NotFoundException('Detail not found');

      return detail;
    } catch (error) {
      throw new ForbiddenException(error);
    }
  }

  async update(id: number, dto: UpdateTrademarkDto) {
    try {
      return await this.prisma.detail.update({
        where: { id },
        data: {
          ...dto,
        },
      });
    } catch (error) {
      throw new ForbiddenException(error);
    }
  }

  async delete(id: number) {
    try {
      return await this.prisma.detail.delete({
        where: { id },
      });
    } catch (error) {
      throw new ForbiddenException(error);
    }
  }
}
