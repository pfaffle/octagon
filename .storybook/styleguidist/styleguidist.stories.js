import React from 'react'
import { storiesOf } from '@kadira/storybook'

const sgURI = process.env.NODE_ENV.match(/devel/) ? 'http://localhost:3000' : '/styleguide'
console.log(`env: ${process.env.NODE_ENV}`)
console.log(`sourcing styleguide from: ${sgURI}`)
export default storiesOf('components', module)
.add('via styleguidist', () => <iframe src={sgURI} width='100%' height='99%' />)