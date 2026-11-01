# VaXease

A vaccination compliance platform for working families, built for the Hult Prize. It connects three groups who usually work from separate records: the employer's HR team, parents and school or clinic nurses.

## Portals

- **HR dashboard**: compliance tracking across employees and their dependants
- **Parent portal**: scheduling, reminders and vaccination certificates
- **Nurse interface**: QR verification and vaccine workflows
- **Login** that routes each user to their portal by role

## Run it

No build step. Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Structure

```
index.html      home
login.html      role-based login (HR, parent, nurse)
hr.html         HR dashboard
parent.html     parent portal
nurse.html      nurse interface
contact.html    contact page
css/styles.css  styles
js/theme.js     light and dark theme
js/tabs.js      dashboard tabs
favicon.svg
```

## Built with

HTML, CSS and vanilla JavaScript.
