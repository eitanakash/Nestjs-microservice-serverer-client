import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { getEnvConfig } from '../env';

async function bootstrap() {
  const { APP_HOST = 'localhost', APP_PORT = 3000 } = getEnvConfig();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // serve on localhost 3000 the index file
  app.useStaticAssets(join(process.cwd(), 'static'));
  await app.listen(APP_PORT, APP_HOST, () => { console.log('app start'); });
}
bootstrap();
