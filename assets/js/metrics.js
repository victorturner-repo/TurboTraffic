
const Metrics = {
  calculate(channel,budget){
    let ctr = 0.02, cpc = 0.5;
    if(channel==="Google"){ctr=0.03;cpc=0.7;}
    if(channel==="TikTok"){ctr=0.018;cpc=0.4;}
    const clicks = Math.floor(budget / cpc);
    const conversions = Math.floor(clicks * (ctr * 2));
    return {ctr,cpc,clicks,conversions};
  }
};
