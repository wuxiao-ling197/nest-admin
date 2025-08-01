import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DictService } from './dict.service';
import { DictController } from './dict.controller';
import { SysDictTypeEntity } from './entities/dict.type.entity';
import { SysDictDataEntity } from './entities/dict.data.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([SysDictTypeEntity, SysDictDataEntity])],
  controllers: [DictController],
  providers: [DictService],
  exports: [DictService],
})
export class DictModule {}
