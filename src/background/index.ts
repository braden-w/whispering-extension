import { sendMessageToContentScript, type MessageToBackgroundRequest } from '~lib/utils/messaging';

import { setIcon } from './setIcon';

export {};

chrome.runtime.onInstalled.addListener((details) => {
	if (details.reason === 'install') {
		chrome.runtime.openOptionsPage();
	}
});

chrome.commands.onCommand.addListener(async function (command) {
	if (command === 'toggle-recording') {
		sendMessageToContentScript({ command: 'toggle-recording' });
	}
});

chrome.runtime.onMessage.addListener(function (message: MessageToBackgroundRequest) {
	switch (message.action) {
		case 'setExtensionIcon':
			setIcon(message.icon);
			break;
		case 'openOptionsPage':
			chrome.runtime.openOptionsPage();
			break;
	}
});
