import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { ensureAuthMiddleware } from './common/middlewares/ensureAuth.middleware';
import { PrismaModule } from './prisma/prisma.module';
import { LoginModule } from './routes/login/login.module';
import { UsersController } from './routes/users/users.controller';
import { UsersModule } from './routes/users/users.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    LoginModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ensureAuthMiddleware)
      .exclude(
        { path: 'users', method: RequestMethod.POST },
        { path: 'users', method: RequestMethod.GET },
      )
      .forRoutes(UsersController);
  }
}
