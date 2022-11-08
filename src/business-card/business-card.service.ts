import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BusinessCardDto } from './business-card.dto';
import { BusinessCard, BusinessCardDocument } from './business-card.schema';

@Injectable()
export class BusinessCardService {
  
    constructor(@InjectModel(BusinessCard.name) private bcModel: Model<BusinessCardDocument>) {}

    getBusinessCards(): Promise<BusinessCard[]> {
        return this.bcModel.find().exec();
    }
    createBusinessCard(businessCard: BusinessCardDto) {
        const savedBC = new this.bcModel(businessCard);
        return savedBC.save();
    }
    updateBusinessCard(id: string, businessCard: any) {
        // connect to db and update
    }
    deleteBusinessCard(id: string) {
        // delete bc.
    }


    deleteMany(deleteCriteria: any) {
        return this.bcModel.deleteMany(deleteCriteria);
    }

}
