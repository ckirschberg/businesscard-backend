import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BusinessCardDto } from './../../src/business-card/business-card.dto';
import { Business, BusinessDocument } from './business.schema';
import { CreateBusinessDto } from './create-business.dto';

@Injectable()
export class BusinessService {
  constructor(
    @InjectModel(Business.name) private businessModel: Model<BusinessDocument>,
  ) {}

  async findAll(): Promise<Business[]> {
    return this.businessModel.find().populate('businessCards');
  }

  create(create: CreateBusinessDto): Promise<Business> {
    const createdBusiness = new this.businessModel(create);
    return createdBusiness.save();
  }
  async addBusinessCard(id: string, bc: BusinessCardDto) {
    const updateBusiness = await this.businessModel.findById(id);
    updateBusiness.businessCards.push(bc);

    return updateBusiness.save();
  }
  async deleteBusinessCard(id: string, bcId: string) {
    const updateBusiness = await this.businessModel.findById(id);

    const filteredBcs = updateBusiness.businessCards.filter(
      (businessCard: any) => {
        return businessCard.toString() !== bcId;
      },
    );
    updateBusiness.businessCards = filteredBcs;

    return updateBusiness.save();
  }

  // create(create: Business, businessCard: BusinessCard): Promise<Business> {
  //     const createdBusiness = new this.businessModel({
  //         ...create,
  //         businessCard
  //     });
  //     return createdBusiness.save();
  // }
  // addBusinessCard(businessId: string, businessCard: BusinessCard): Promise<Business> {
  //     const createdBusiness = new this.businessModel(create);
  //     return createdBusiness.save();
  // }

  //   create(postData: PostDto, author: User) {
  //     const createdPost = new this.postModel({
  //       ...postData,
  //       author,
  //     });
  //     return createdPost.save();
  //   }
}
