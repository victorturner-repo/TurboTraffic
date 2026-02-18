
const Storage = {
  getCampaigns(){
    return JSON.parse(localStorage.getItem("tt_campaigns") || "[]");
  },
  saveCampaign(data){
    const campaigns = this.getCampaigns();
    campaigns.push(data);
    localStorage.setItem("tt_campaigns", JSON.stringify(campaigns));
  },
  deleteCampaign(index){
    const campaigns = this.getCampaigns();
    campaigns.splice(index,1);
    localStorage.setItem("tt_campaigns", JSON.stringify(campaigns));
  },
  getWebhook(){
    return localStorage.getItem("tt_webhook") || "";
  },
  saveWebhook(url){
    localStorage.setItem("tt_webhook", url);
  }
};
