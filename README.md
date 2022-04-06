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

## Publish to a distribution branch

Actions are run from GitHub repos so we will check in the packed dist folder.

Then run [ncc](https://github.com/zeit/ncc) and push the results:

```bash
$ npm run package
$ git add dist
$ git commit -a -m "prod dependencies"
$ git push origin releases/v1
```

Note: We recommend using the `--license` option for ncc, which will create a license file for all of the production node modules used in your project.

Your action is now published! :rocket:

See the [versioning documentation](https://github.com/actions/toolkit/blob/master/docs/action-versioning.md)

## Validate

You can now validate the action by referencing `./` in a workflow in your repo (see [test.yml](.github/workflows/test.yml))

```yaml
uses: ./
with:
  slack_webhook_url: <url>
```

See the [actions tab](https://github.com/actions/typescript-action/actions) for runs of this action! :rocket:
