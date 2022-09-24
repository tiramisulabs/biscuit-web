import Markdown from 'markdown-to-jsx';
import { CopyBlock, dracula } from 'react-code-blocks';

type Props = {
	readme: string;
};

const Readme = ({ readme }: Props) => {
	return (
		<Markdown
			options={{
				overrides: {
					code: {
						component: ({ children }) => (
							<CopyBlock
								customStyle={{ backgroundColor: 'transparent', overflowX: 'scroll', overflowY: 'hidden' }}
								theme={dracula}
								text={children}
								language="javascript"
							/>
						),
					},
				},
			}}
		>
			{readme.replaceAll('```js', '\n```js').replaceAll('```', '\n```')}
		</Markdown>
	);
};

export default Readme;
