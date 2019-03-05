import events from './events'
import {tokebabCase} from './utils'

export default function (instance, eventList) {
  const ev = eventList || events[tokebabCase(this.$options._componentTag)]
  ev && ev.forEach(event => {
    const hasOn = event.slice(0, 2) === 'on'
    const eventName = hasOn ? event.slice(2) : event
    const listener = this.$listeners[eventName]
    listener && instance.addEventListener(event, listener.fns)
  })
}
