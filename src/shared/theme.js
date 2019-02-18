import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#8bf1da",
            main: "#53dcb6",
            dark: "#4ead91",
            contrastText: "#fff"
        },
        secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000"
        },
    },
    typography: {
        useNextVariants: true,
        fontFamily: [
            'Montserrat'
        ],
        h3: {
            textTransform: 'uppercase',
            fontWeight: 900
        },
        h4: {
            textTransform: 'uppercase',
            fontWeight: 900
        },
        h5: {
            textTransform: 'uppercase',
            fontWeight: 900
        },
        button: {
            fontWeight: 600
        },
        body1: {
            fontSize: "1.5rem",
            fontWeight: 700,
            color: '#3c3c3b'
        },
        body2: {
            fontSize: "1.8rem",
            fontWeight: 700
        }
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 0,
                boxShadow: 'none !important',
                minHeight: 60,
                padding: 15
            }
        },
        MuiCard: {
            root: {
                borderRadius: 10,
                boxShadow: '2px 1px 7px 1px #ccc'
            }
        }
    }
});

export default theme;