import { AppController } from './app.controller';
import { AppService } from './app.service';
// trabajo de la clase de hoy nest 2
import { MongooseModule } from '@nestjs/mongoose';
import { Module, MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import FirstMiddleware from './middlewares/firstMiddleware';
import { ConfigModule, ConfigService } from '@nestjs/config'; 


@Module({
  // imports: [UsersModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest53145')],
  imports: [UsersModule, ConfigModule.forRoot(), MongooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async(config: ConfigService) => ({
      uri: config.get<string>('MONGO_URL')
    })
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(FirstMiddleware).forRoutes({path: '*', method: RequestMethod.ALL});
  }
}
