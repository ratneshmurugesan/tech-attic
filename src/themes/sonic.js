import { createMuiTheme } from '@material-ui/core/styles';
import FONT_FAMILY from 'fonts/HelveticaNeue.ttf';

// SourceSansPro-Regular
const themeFontFamily = {
	fontFamily: 'Helvetica Neue',
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: 400,
	src: `
    local('HelveticaNeue'),
    local('HelveticaNeue'),
    url(${FONT_FAMILY}) format('ttf')
  `,
	unicodeRange:
		'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const everest = createMuiTheme({
	palette: {
		primary: {
			main: 'rgb(5, 13, 158)',
			dark: '#000',
			disabled: 'rgb(5, 13, 158, 0.6)',
			error: '#e64a19',
			contrastColor: '#fff',
			green: '#1b5e20',
			grey: '#eee',
		},
		secondary: {
			main: 'rgb(255, 137, 0)',
			light: '#fff',
			disabled: 'rgba(255, 137, 0, 0.6)',
			contrastText: '#fff',
		},
		error: {
			main: 'rgba(230, 74, 25, 1)',
		},
		success: {
			main: 'rgba(30, 188, 48, 1)',
		},
		text: {
			primary: '#000',
			secondary: '#000',
			alert: '#9f3a38',
		},
		tertiary: {
			alternateRow: '#fafafb',
			stickyHeader: '#edeff2',
			themeBackground: '#fafafa',
			borderColor: '#aaaaaa',
			weekHeaders: '#53627c',
			currentWeekCell: '#385177',
      linkColor: 'rgba(34, 61, 209, 1)',
			navLinkActive: 'rgba(23, 44, 191, 1)',
			alertBackgroundColor: '#fff6f6',
			tableHeaderTextColor: 'rgba(0, 0, 0, 0.6)',
		},
		moduleColors: {
			draft: '#f0f2f5',
			submitted: '#b8bffb',
			approved: '#00c19e',
			negotiate: '#b8bffb',
			rejected: '#dd2727',
			mixed: '#4a4a4a',
			tabular_approved: '#1ebc30',
			tabular_negotiate: '#0027ef',
			tabular_submitted: '#ffa500',
			tabular_rejected: '#e64a19',
			tabular_draft: '#000',
			tabular_deleted: '#e64a19',
			tabular_active: '#1ebc30',
			tabular_pending: '#0027ef',
			'tabular_partially approved': '#ffa500',
			100: '#2696F4',
			90: '#51ABF6',
			committed: '#51ABF6',
			75: '#59D3E6',
			50: '#D68CD0',
			25: '#DEA3D9',
			10: '#E6BAE3',
			pipeline: '#E6BAE3',
			gap: '#FEC52E',
			target: '#656FDD',
			completed: '#656FDD',
			in_progress: '#59D3E6',
			not_started: '#E6BAE3',
			'in progress': '#59D3E6',
			'not started': '#E6BAE3',
			
		},
	},
	fontweight: {
		regular: 500,
		bold: 700,
		light: 300,
		bolder: 900,
	},
	typography: {
		h5: {
			fontFamily: themeFontFamily.fontFamily,
			fontWeight: 500,
			fontSize: '1.5rem',
		},
		h6: {
			fontFamily: themeFontFamily.fontFamily,
			fontWeight: 500,
			fontSize: '1.125rem',
		},
		subtitle1: {
			fontFamily: themeFontFamily.fontFamily,
			fontWeight: 400,
			fontSize: '1rem',
		},
		subtitle2: {
			fontFamily: themeFontFamily.fontFamily,
			fontWeight: 500,
			fontSize: '1rem',
		},
		body1: {
			fontFamily: themeFontFamily.fontFamily,
			fontWeight: 500,
			fontSize: '0.875rem',
		},
		body2: {
			fontFamily: themeFontFamily.fontFamily,
			fontWeight: 400,
			fontSize: '0.875rem',
		},
		button: {
			fontFamily: themeFontFamily.fontFamily,
			fontWeight: 700,
			fontSize: '0.875rem',
		},
		caption: {
			fontFamily: themeFontFamily.fontFamily,
			fontWeight: 700,
			fontSize: '0.875rem',
		},
		fontFamily: themeFontFamily.fontFamily,
	},
	shadow: {
		default:
			'0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
		left: '-2px 0 0 0 #aaaaaa',
		right: '2px 0 0 0 #aaaaaa;',
		bottom: '-2px 0px 2px 0px #aaaaaa',
		ellipse: '0 1px 8px 0 rgba(34, 37, 41, 0.2), 0 3px 3px -2px rgba(35, 40, 46, 0.12), 0 3px 4px 0 rgba(31, 38, 44, 0.14)'
	},
	overrides: {
		MuiCssBaseline: {
			'@global': {
				'@font-face': [FONT_FAMILY],
			},
		},
		MuiTableCell: {
			root: {
				borderBottom: 'none',
			},
			stickyHeader: {
				backgroundColor: '#edeff2',
			},
		},
		MuiTableRow: {
			footer: {
				'& > td': {
					backgroundColor: '#eeeeee',
					color: '#000',
					fontFamily: themeFontFamily.fontFamily,
					fontWeight: 700,
					fontSize: '0.875rem',
				},
			},
			root: {
				'&:nth-child(2n) > td': {
					backgroundColor: '#fafafb',
				},
				'&:nth-child(2n + 1) > td': {
					backgroundColor: '#fff',
				},
			},
			head: {
				'& > th': {
					backgroundColor: '#edeff2',
					fontFamily: themeFontFamily.fontFamily,
					fontWeight: 700,
					fontSize: '0.875rem',
				},
			},
		},
		MuiTableBody: {
			root: {
				backgroundColor: '#fff',
			},
		},
		MuiInputBase: {
			input: {
				fontSize: 14,
				fontFamily: themeFontFamily.fontFamily,
				fontWeight: 400,
			},
			root: {
				'& input:disabled': {
					cursor: 'not-allowed',
				},
			},
		},
		MuiOutlinedInput: {
			input: {
				padding: 8,
			},
		},
		MuiIcon: {
			root: {
				fontSize: 14,
			},
		},
		MuiTab: {
			root: {
				fontFamily: themeFontFamily.fontFamily,
				fontWeight: 500,
				fontSize: '1rem',
				textTransform: 'none',
			},
		},
		MuiMenuItem: {
			root: {
				fontFamily: themeFontFamily.fontFamily,
				fontWeight: 400,
			},
		},
		MuiList: {
			root: {
				fontSize: '0.875rem',
			},
		},
		MuiAutocomplete: {
			option: {
				fontFamily: themeFontFamily.fontFamily,
				fontWeight: 400,
			},
		},
		MuiPopover: {
			paper: {
				overflowX: 'auto',
			},
		},
	},
});

export default everest;
