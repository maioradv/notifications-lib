import { notificationsApiClient, ApiVersion, ChannelType, NotificationsPlan, NotificationsConfig, RateLimitInterval } from "../src";
import Credentials from './credentials.json'

async function example() {
  const api = notificationsApiClient({
    sandbox:true,
    ...Credentials
  })
  await api.auth()
  //api.configs.Config(194).then(v => console.log(v))
  api.configs.initConfig(194,NotificationsPlan.premium,{maxWorkspaces:null}).then(v => console.log(v))

}

example()