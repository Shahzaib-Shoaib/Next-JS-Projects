import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CommonModule } from './common/common.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    UsersModule,
    CommonModule,
    ProductsModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
