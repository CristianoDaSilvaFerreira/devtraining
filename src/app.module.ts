import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './module/courses/courses.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'docker',
    database: 'cursonestjs',
    entities:[__dirname + '/**/*.entity.ts,.js'],
    autoLoadEntities: false,
    synchronize: false
  }),
  CoursesModule,
],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
