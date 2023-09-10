const CampaignModel = require("../models/Campaign");

const createCampaign = async (req, res) => {
  try {
    const { title, description, targetGroup } = req.body;

    const newCampaign = new CampaignModel({
      title,
      description,
      targetGroup,
      campaignStatus: "Active",
    });

    await newCampaign.save();
    res.json({ message: "Campaign created successfully", data: newCampaign });
  } catch (error) {
    console.log(error);
    res.json({ error: "An error occurred while creating the campaign" });
  }
};

const getCampaigns = async (req, res) => {
  try {
    const campaigns = await CampaignModel.find().sort({ createdAt: -1 });
    res.json(campaigns);
  } catch (error) {
    res.json({ error: "An error occurred while fetching campaigns" });
  }
};

module.exports = {
  createCampaign,
  getCampaigns,
};
