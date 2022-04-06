import axios from 'axios'
import {sendReleaseNotification} from '../src/send-release-notification'
import sinon from 'sinon'
import {expect, test} from '@jest/globals'
import {release} from './fixtures/release'

beforeEach(() => {
  sinon.stub(axios, 'post').resolvesArg(1)
})

test('return message', async () => {
  const start = new Date()
  const message = await sendReleaseNotification({
    slackWebhookUrl: 'testing',
    release,
    repo: {
      owner: 'instantish',
      repo: 'martian'
    }
  })
  expect(message.text).toBe('v1.2.0 has been released in instantish/martian')
})
