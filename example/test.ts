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
  api.setTenantID(1)
  await api.auth()
  //api.me.channels.auth(1).then(console.log)
  //api.me.notifications.findAll({sorting:{id:'desc'},pagination:{limit:2}}).then(console.log)
  //api.me.notifications.findAllEvents(38).then(console.log)
}
example()