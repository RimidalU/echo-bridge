import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { getConfigModuleConfig } from './common/configs/getConfigModuleConfig'

@Module({
    imports: [ConfigModule.forRoot(getConfigModuleConfig())],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
