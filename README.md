# TripFlow v1.0

A static travel website for the 2026 Paris × London trip.

## How to open
Open `index.html` in a browser.

## Main files
- `index.html`: Cover page
- `trip.html`: Travel Hub
- `days/`: Daily itinerary pages
- `css/style.css`: Website design
- `js/script.js`: Reserved for future interactions

## Data included
- Daily itinerary from uploaded Excel
- Flight and Eurostar transportation
- Paris and London hotels
- Google Maps trip link

## v1.3
- Unified navigation labels: Dashboard uses Home, daily pages use Itinerary.
- Added a cleaner shared top button style.

## v1.4
- Added `.nojekyll` for GitHub Pages.
- Added deployment notes.
- This is the recommended version for GitHub Pages upload.

## v1.5 Travel Vault
- Added `vault.html`.
- Added password unlock UI.
- Default password: `tripflow2026`.
- Password can be changed in `js/vault.js`.

Security note: this is a front-end password for casual privacy only. Do not store highly sensitive documents directly in a public repository.

## v2.0
- Added password gate on the cover page.
- Start Journey now opens a password modal.
- Password: ICAZM
- Correct password leads to `trip.html`.


v2.1: Removed Vault. Password updated.
