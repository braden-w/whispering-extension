# ⚠️ Repository Merged

**This repository has been merged into the [Whispering monorepo](https://github.com/braden-w/whispering) and is now archived. Please visit the monorepo for the latest updates and to contribute to the project.**

---

# Whispering Extension

The Whispering Chrome extension is a powerful tool that enhances your voice-to-text experience on the web. It provides seamless access to the OpenAI Whisper API for voice transcription and adds a convenient recording button for Chat GPT. Streamline your online voice transcription workflow with this handy extension.

<img src="./images/demo_2.gif" width="300">

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)
- [Support and Feedback](#support-and-feedback)

## Description

Whispering Chrome extension offers two key functionalities:

- **Access Whisper API**: This feature allows you to access the Whisper API from any webpage, thus enabling easy voice transcription without disrupting your browsing context.
- **Recording Button for Chat GPT**: The extension adds a handy recording button within the Chat GPT interface, enabling you to record your voice and generate transcriptions directly within the chat.

## Installation

<!--
To install the Whispering Chrome extension, click the badge below:

[![Download Chrome Extension](https://img.shields.io/badge/Download-Chrome%20Extension-blue)](https://chrome.google.com/webstore/detail/whispering-chrome-extensi/your-extension-id)
-->

To install the Whispering Chrome extension, follow these steps:

1. Visit the [GitHub release page](https://github.com/braden-w/whispering-extension/releases) and download the latest `Whispering_Extension_vX.Y.Z.zip` file.
2. Extract the contents of the .zip file to a preferred location on your computer where you'd like to store the extension files.
3. Open Google Chrome and navigate to the Extensions page by clicking on the three-dot menu in the top right corner, then select "More tools" > "Extensions" or enter `chrome://extensions/` in the address bar.
4. On the Extensions page, enable the "Developer mode" toggle located in the top right corner.
5. Click the "Load unpacked" button that appears after enabling Developer mode.
6. In the file explorer dialog that opens, find and select the folder where you extracted the contents of the .zip file.
7. Click "Open" or "Select Folder" (depending on your operating system), and the Whispering Extension will be installed in your browser.

After completing these steps, you should see the Whispering Extension icon in your browser's toolbar, and you're ready to enjoy the voice-to-text functionality across any website.

## Getting Started with Development

This is a [Plasmo extension](https://docs.plasmo.com/) project bootstrapped with [`plasmo init`](https://www.npmjs.com/package/plasmo).

First, run the development server:

```bash
pnpm dev
```

To make a production build, run the following:

```bash
pnpm build
```

This should create a production bundle for your extension, ready to be zipped and published to the stores.

## Usage

Once installed, you will find a Whispering icon on the Chrome extensions bar. Click on this icon to open the extension. To use the Whisper API feature, simply click the 'Start Recording' button to record your voice, and then 'Stop Recording' when you're done. Your transcription will appear in the text box below.

For using the Recording Button with Chat GPT, navigate to the Chat GPT web page. You'll see a new recording button in the chat interface. Click this button to start and stop recording, and the transcribed text will be automatically inserted into the chat input field.

## Built With

The Whispering Chrome extension is built using:

- [Plasmo](https://docs.plasmo.com/): A framework for building Chrome extensions.
- [Svelte](https://svelte.dev/): A JavaScript framework for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.
- [Chrome API](https://developer.chrome.com/docs/extensions/reference/): The Chrome extension API.

## Contributing

Your contributions to the development of the Whispering Chrome extension are most welcome. Here's how you can contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix: `git checkout -b feature/your-feature-name` or `git checkout -b fix/your-bugfix-name`
3. Make your changes and commit them with a descriptive message.
4. Push your branch to your forked repository: `git push origin your-branch-name`
5. Create a pull request from your forked repository to the original one.

Please ensure that your code adheres to the project's coding conventions and is well-documented.

## License

The Whispering Chrome extension is released under the [MIT License](https://opensource.org/licenses/MIT).

## Support and Feedback

If you encounter any issues or have suggestions for improvements, please open an issue on the [GitHub repository](https://github.com/braden-w/whispering/issues). We appreciate your feedback!

Thank you for using Whispering and happy writing!
