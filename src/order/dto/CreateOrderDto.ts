/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNumberString, IsString, Matches } from 'class-validator';

class CreateOrderDto {
  @IsString()
  email: string;

  @Matches(/^0x[a-fA-F0-9]{40}$/, {
    message: 'Invalid Ethereum wallet address',
  })
  walletAddress: string;

  @IsNumberString()
  amountETH: string;
}

export { CreateOrderDto };
