import { useEffect, useState } from 'react';

import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollToUp = () => {
	const [visible, setVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 600) setVisible(true);
		else setVisible(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisible);
		return () => window.removeEventListener('scroll', toggleVisible);
	});

	return (
		<Fade in={visible} style={{ zIndex: 10, position: 'fixed', margin: '40px 40px 80px 40px', bottom: 0, right: 0 }}>
			<IconButton
				size="large"
				aria-label="Go to up"
				onClick={visible ? scrollToTop : () => {}}
				sx={{ cursor: visible ? 'pointer' : 'initial' }}
			>
				<ArrowUpwardIcon />
			</IconButton>
		</Fade>
	);
};

export default ScrollToUp;
