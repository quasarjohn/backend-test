import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/CreateOrderDto';

@Injectable()
export class OrderService {
  createOrder(dto: CreateOrderDto) {
    console.log(dto);
    return { success: true, orderId: 'ORDER12345' };
  }
}
