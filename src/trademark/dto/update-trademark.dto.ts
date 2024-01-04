import { CreateTrademarkDto } from './create-trademark.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTrademarkDto extends PartialType(CreateTrademarkDto) {}
