import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TrademarkModule } from './trademark/trademark.module';
import { PrismaModule } from './databases/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TrademarkModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
