// schema/site-schema.ts
import { Schema, model, Document } from 'mongoose';

export interface ISiteDocument extends Document {
  siteNo: string;
  siteName: string;
}

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
