import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BusinessCard } from './../business-card/business-card.schema';
import * as mongoose from 'mongoose';

export type BusinessDocument = Business & Document;

@Schema()
export class Business {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: BusinessCard.name }] })
  businessCards: BusinessCard[]
}

export const BusinessSchema = SchemaFactory.createForClass(Business);
