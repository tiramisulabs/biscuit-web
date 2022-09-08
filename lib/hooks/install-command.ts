import { useState } from 'react';

import { wait } from '../funtions/utils';

export const useInstallCommand = (packageName: string) => {
	const [copied, setCopied] = useState(false);
	const [command, setCommand] = useState(`npm install ${packageName}`);

	const onCopyCommand = async () => {
		setCopied(true);
		await wait(1_000);

		if (command.startsWith('yarn')) setCommand(`npm install ${packageName}`);
		else setCommand(`yarn add ${packageName}`);

		setCopied(false);
	};

	return {
		command,
		copied,
		onCopyCommand,
	};
};
