import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/CreateOrderDto';

@Controller('order')
export class OrderController {
  constructor(private readonly service: OrderService) {}

  @Post('/')
  createOrder(@Body() dto: CreateOrderDto) {
    return this.service.createOrder(dto);
  }
}
