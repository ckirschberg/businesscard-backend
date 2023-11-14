import { Body, Controller, Delete, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { BusinessCardService } from './business-card.service';
import { Request } from 'express';
import { BusinessCard } from './business-card.schema';
import { BusinessCardDto } from './business-card.dto';
import { TestGuard } from './../authentication/test.guard';

@Controller('businesscards')
export class BusinessCardController {
    
    constructor(private readonly bcService: BusinessCardService) { }

    @UseGuards(TestGuard)
    @Get()
    async getBusinessCards(@Req() request: Request) : Promise<BusinessCard[]> {
        // console.log(request);
        const result: BusinessCard[] = await this.bcService.getBusinessCards();
        // console.log(result);
        
        return result;
    }
    @Delete(':id')
    deleteBusinessCard(@Param('id') id: string) {
        console.log(id);
    }

    @Post()
    createBusinessCard(@Body() bcDto: BusinessCardDto) {
        return this.bcService.createBusinessCard(bcDto);
    }


}