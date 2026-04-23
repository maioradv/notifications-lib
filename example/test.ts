import { notificationsApiClient, ApiVersion, ChannelType, NotificationsPlan, NotificationsConfig, RateLimitInterval, ChannelStatus } from "../src";
import Credentials from './credentials.json'

async function example() {
  const api = notificationsApiClient({
    sandbox:true,
    ...Credentials,
    onSseEvent(event) {
      console.log(event)
    },
  })
  await api.auth()
  api.setTenantID(1)
  //capire doppio evento sse dopo ctrl c
  //api.channels.auth(2)
  //api.providers.list().then(v => console.log(v.nodes))
  //api.setTenantID(1)

}

example()