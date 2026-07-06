import { notificationsApiClient, ApiVersion, ChannelType, NotificationsPlan, NotificationsConfig, RateLimitInterval, ChannelStatus, TimeInterval, ApiHost, WebhookUtils } from "../src";
import Credentials from './credentials.json'
import QR from 'qrcode-terminal'

async function example() {
  const api = notificationsApiClient({
    host:ApiHost.main,//'localhost:3001',
    //sandbox:true,
    ...Credentials,
  })
  /*api.sse
  .on('message',event => {
    if(event.event == 'qrRequired') {
      QR.generate(event.data.qr,{small:true})
    }
  })
  .on('error', err => {
    console.log(err)
  })*/
  api.setTenantID(1) //offline 5-5
  await api.auth()
  //api.channels.findAll().then(console.log)
  /*api.channels.update(1,{
    config:{
      provider:'baileys',
      baileys:{}
    }
  }).then(console.log)*/
  //api.channels.auth(1).then(console.log)
  //api.me.notifications.findAll({sorting:{id:'desc'},pagination:{limit:2}}).then(console.log)
  //api.me.notifications.findAllEvents(38).then(console.log)
  /*api.notifications.send({
    recipient:{
      provider:'baileys',
      baileys:{
        phone:'+39'
      }
    },
    metadata:{
      campaignId:12,
      receiptId:'oasdk39k-jio3ji43'
    },
    content:{
      type:'whatsapp',
      whatsapp:{
        body:'Message'
      }
    }
  }).then(console.log)*/
  api.notifications.findAll({
    where:{
      metadata:[
        {
          path:'campaignId',
          operator:'equals',
          value:12
        },
        {
          path:'receiptId',
          operator:'string_contains',
          value:'k-ji9'
        }
      ]
    }
  }).then(console.log)
}
example()