
async function sendToWebhook(data){
  const url = Storage.getWebhook();
  if(!url){ return; }
  try{
    await fetch(url,{
      method:"POST",
      body: JSON.stringify(data)
    });
  }catch(err){
    console.error("Webhook failed",err);
  }
}
