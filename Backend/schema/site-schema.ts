import { Schema, model, Document } from 'mongoose';
import { ISiteDocument } from '../types/types';


const siteSchema = new Schema<ISiteDocument>(
  {
    siteNo: { type: String, required: true, unique: true },
    siteName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const SiteModel = model<ISiteDocument>('Site', siteSchema);

export default SiteModel;
