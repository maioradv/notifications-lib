import { notificationsApiClient, ApiVersion, ChannelType, NotificationsPlan, NotificationsConfig, RateLimitInterval, ChannelStatus, TimeInterval, ApiHost } from "../src";
import Credentials from './credentials.json'
import QR from 'qrcode-terminal'

async function example() {
  const api = notificationsApiClient({
    host:ApiHost.main,//'localhost:3001',
    //sandbox:true,
    ...Credentials,
  })
  api.sse
  .on('message',event => {
    if(event.event == 'qrRequired') {
      QR.generate(event.data.qr,{small:true})
    }
  })
  .on('error', err => {
    console.log(err)
  })
  await api.auth()
  api.setTenantID(1)
  //api.me.settings.findByKey('contact','email').then(console.log)
  /*api.me.channels.create({
    type:ChannelType.whatsapp,
    config:{
      provider:'whatsappWeb',
      whatsappWeb:{

      }
    },
    default:true
  }).then(console.log)*/
  //api.me.channels.auth(1).then(console.log)
  api.notifications.send({
    recipient:{
      provider:'whatsappWeb',
      whatsappWeb:{
        phone:'+39'
      }
    },
    content:{
      type:'whatsapp',
      whatsapp:{
        body:'...'
      }
    }
  }).then(console.log)
  //api.me.notifications.findAllEvents(1).then(console.log)
}

example()