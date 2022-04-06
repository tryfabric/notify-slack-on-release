# Notify Slack on Release

This GitHub Action sends a rich-text notification to your Slack channel when there's a new release in your GitHub repository. This uses [mack](https://github.com/instantish/mack) to render the body of the release as Slack blocks.

<img width="782" alt="Screen Shot 2022-04-06 at 5 02 52 PM" src="https://user-images.githubusercontent.com/1459660/162070477-1cee2181-caec-448a-87b8-fc996c585fdc.png">


# Usage

- [Create a Slack app](https://api.slack.com/apps/new) called "Release Bot"
- Clock **Incoming Webhooks** and toggle **Activate Incoming Webhooks**
- Click **Add New Webhook to Workspace**
- Pick the channel the app will post to and then click **Authorize**
- Set your `SLACK_WEBHOOK_URL` to the Webhook URL
- Create a workflow file

```yaml
name: Notify Slack on Release

on:
  release:
    types:
      - created

jobs:
  notify_slack:
    runs-on: ubuntu-latest
    name: Notify Slack on Release
    steps:
      - name: Notify Slack on Release
        uses: instantish/notify-slack-on-release@v0.0.2
        with:
          slack_webhook_url: ${{ secrets.SLACK_WEBHOOK_URL }}
```

<img width="973" alt="Screen Shot 2022-04-06 at 4 55 22 PM" src="https://user-images.githubusercontent.com/1459660/162070525-9fe28500-942a-4158-bd5c-3ebaebb28b0d.png">


# Contributing

## Code in Main

Install the dependencies

```bash
$ npm install
```

Build the typescript and package it for distribution

```bash
$ npm run build && npm run package
```

Run the tests :heavy_check_mark:

```bash
$ npm test
...
```

## Release-it

Cut a new release

```bash
$ release-it
```
