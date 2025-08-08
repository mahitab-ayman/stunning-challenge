import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Section, SectionDocument } from './section.schema';

@Injectable()
export class SectionsService {
  constructor(@InjectModel(Section.name) private sectionModel: Model<SectionDocument>) {}

  async create(idea: string) {
    const created = new this.sectionModel({
      idea,
      sections: ['Hero', 'About', 'Contact'],
    });
    return created.save();
  }

  async findAll() {
    return this.sectionModel.find().exec();
  }
}
