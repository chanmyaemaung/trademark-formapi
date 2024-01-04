import { Module } from '@nestjs/common';
import { TrademarkController } from './trademark.controller';
import { TrademarkService } from './trademark.service';
import { PrismaModule } from 'src/databases/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TrademarkController],
  providers: [TrademarkService],
})
export class TrademarkModule {}
