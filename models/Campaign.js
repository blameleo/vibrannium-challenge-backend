const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  targetGroup: { type: String },
  campaignStatus: { type: String },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CampaignModel = mongoose.model("campaigns", CampaignSchema);

module.exports = CampaignModel;
