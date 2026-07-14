import { notificationsApiClient, ApiVersion, ChannelType, NotificationsPlan, NotificationsConfig, RateLimitInterval, ChannelStatus, TimeInterval, ApiHost, WebhookSignal } from "../src";
import Credentials from './credentials.json'
import QR from 'qrcode-terminal'

async function example() {
  const api = notificationsApiClient({
    //host:ApiHost.main,
    host:'localhost:3001',sandbox:true,
    ...Credentials,
  })
  /*api.sse
  .on('message',event => {
    console.log(event)
    if(event.event == 'qrRequired') {
      QR.generate(event.data.qr,{small:true})
    }
  })
  .on('error', err => {
    console.log(err)
  })*/
  api.setTenantID(1) //offline 5-5
  await api.auth()
  /*api.channels.update(52,{
    default:false
  }).then(console.log)*/
  /*api.channels.create({
    type:ChannelType.whatsapp,
    config:{
      provider:'whatsappWeb',
      whatsappWeb:{

      }
    },
    workspaceId:32,
    default:true
  }).then(console.log)*/
  //api.channels.auth(2).then(console.log)
  //api.webhooks.findAll().then(console.log)
  //api.channels.findAll({where:{workspaceId:32}}).then(console.log)
  //api.roles.syncPermissions().then(console.log)
  /*api.channels.update(1,{
    config:{
      provider:'baileys',
      baileys:{}
    }
  }).then(console.log)*/
  //api.channels.auth(2).then(console.log)
  //api.me.notifications.findAll({sorting:{id:'desc'},pagination:{limit:2}}).then(console.log)
  //api.me.notifications.findAllEvents(38).then(console.log)
  api.notifications.send({
    recipient:{
      provider:'whatsappWeb',
      whatsappWeb:{
        phone:'+39'
      }
    },
    channelId:2,
    content:{
      type:'whatsapp',
      whatsapp:{
        body:'aqwert' + `${new Date()}`,
      }
    }
  }).then(console.log)
  /*api.notifications.findAll({
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
  }).then(console.log)*/
}
example()