import sonic from './sonic';

const themes = {
	SONIC: sonic,
};

export default (brand = '') => themes[brand] || themes.SONIC;
