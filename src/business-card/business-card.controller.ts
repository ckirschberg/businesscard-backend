import { Body, Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
import { BusinessCardService } from './business-card.service';
import { Request } from 'express';
import { BusinessCard } from './business-card.schema';

@Controller('businesscards')
export class BusinessCardController {
    
    constructor(private readonly bcService: BusinessCardService) {

    }



    @Get()
    async getBusinessCards(@Req() request: Request) : Promise<BusinessCard[]> {
        console.log(request);
        const result: BusinessCard[] = await this.bcService.getBusinessCards();
        console.log(result);
        
        return result;
    }
    @Delete(':id')
    deleteBusinessCard(@Param('id') id: string) {
        console.log(id);
    }

    @Post()
    createBusinessCard(@Body() body) {
        return this.bcService.createBusinessCard(body);
    }


}