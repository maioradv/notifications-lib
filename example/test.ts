import { notificationsApiClient, ApiVersion, ChannelType, NotificationsPlan, NotificationsConfig, RateLimitInterval, ChannelStatus, TimeInterval } from "../src";
import Credentials from './credentials.json'

async function example() {
  const api = notificationsApiClient({
    sandbox:true,
    ...Credentials,
  })
  api.sse
  .on('message',event => {
    console.log(event)
  })
  .on('error', err => {
    console.log(err)
  })
  await api.auth()
  api.setTenantID(1)
  //api.me.settings.findByKey('contact','email').then(console.log)

}

example()