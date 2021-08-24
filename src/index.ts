import createApp from './app'

const port = 6066
createApp().listen(6066, () => {
  console.log(`Server is listening or port ${port}`)
})
