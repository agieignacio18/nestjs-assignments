import { Controller, Get, Param, NotFoundException, BadRequestException } from '@nestjs/common';  
@Controller('assignments')  
export class AssignmentsController {  
  @Get('fibonacci/:n')  
  getFibonacci(@Param('n') n: string): number[] {  
    const num = this.parseInput(n);  
    return this.calculateFibonacci(num);  
  }  
  private parseInput(input: string): number {  
    const num = parseInt(input, 10);  
    if (isNaN(num) || num < 0) {  
      throw new BadRequestException('Error: Enter a non-negative number only');  
    }  
    return num;  
  }  
  private calculateFibonacci(n: number): number[] {  
    const fibonacci: number[] = [];  
    if (n === 0) {  
      return fibonacci;  
    }  
    let a = 0, b = 1;  
    fibonacci.push(a);  
    if (n === 1) {  
      return fibonacci;  
    }  
    fibonacci.push(b);  

    for (let i = 2; i < n; i++) {  
      const next = a + b;  
      fibonacci.push(next);  
      a = b;  
      b = next;  
    }  

    return fibonacci;  
  }  
}