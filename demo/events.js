const EventEmitter = require('events')

const emitter = new EventEmitter()

// emitter.on('anything', (data) => {
//   console.log('ON: anything', data)
// })

// setTimeout(() => {
//   emitter.emit('anything', { text: 'finish timer' })
// }, 1500)

class Dispatcher extends EventEmitter {
  subscribe(eventName, cb) {
    console.log('[Subscribe...] ', eventName)
    this.on(eventName, cb)
  }

  dispatch(eventName, data) {
    console.log('[Dispatching...] ', eventName)
    this.emit(eventName, data)
  }
}

const dis = new Dispatcher()
dis.subscribe('anything', (data) => {
  console.log('ON: anything', data)
})

dis.dispatch('anything', { text: 'anything event`' })