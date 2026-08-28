* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Inter, Arial, sans-serif;
  color: #14233b;
  background: #fff;
  line-height: 1.55;
}

a {
  text-decoration: none;
  color: inherit;
}

.container {
  width: min(1160px, 92%);
  margin: auto;
}

:root {
  --navy: #071a35;
  --navy2: #0c2d55;
  --red: #e6282e;
  --blue: #1d65d8;
  --green: #21a66b;
  --gold: #f2b52d;
  --muted: #637188;
  --line: #e4e9f0;
}

/* HEADER */
.site-header {
  height: 74px;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #edf0f4;
}

.nav-wrap {
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #e6282e 0 48%, #0c2d55 49%);
  color: #fff;
  font-size: 12px;
  font-weight: 900;
  border: 3px solid #fff;
  box-shadow: 0 2px 8px #10213a2a;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.brand-text strong {
  font-size: 18px;
  letter-spacing: .04em;
}

.brand-text small {
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .08em;
  color: var(--red);
  margin-top: 4px;
}

nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

nav > a {
  font-size: 13px;
  font-weight: 800;
  color: #293b55;
}

nav > a:hover,
nav > a.active {
  color: var(--red);
}

.nav-quote {
  background: var(--navy);
  color: #fff !important;
  border-radius: 5px;
  padding: 12px 17px;
}

.menu-toggle {
  display: none;
  border: 0;
  background: none;
  font-size: 26px;
  color: var(--navy);
}

/* HERO */
.hero {
  min-height: 430px;
  position: relative;
  background-image: url("https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2000&q=85");
  background-size: cover;
  background-position: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(4, 20, 41, .96),
    rgba(5, 25, 50, .72) 55%,
    rgba(5, 20, 38, .35)
  );
}

.hero-inner {
  position: relative;
  z-index: 2;
  min-height: 430px;
  display: flex;
  align-items: center;
}

.hero-copy {
  max-width: 650px;
  color: #fff;
  padding: 55px 0;
}

.badge {
  display: inline-block;
  background: var(--red);
  border-radius: 4px;
  padding: 7px 11px;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: .04em;
  margin-bottom: 14px;
}

.hero h1 {
  font-size: clamp(42px, 6vw, 72px);
  line-height: .98;
  letter-spacing: -.035em;
  margin: 0 0 20px;
  text-transform: uppercase;
  font-weight: 800;
}

.hero h1 span {
  display: block;
}

.hero-copy > p {
  font-size: 16px;
  max-width: 650px;
  color: #edf4ff;
  margin: 0;
}

.actions {
  display: flex;
  gap: 13px;
  margin-top: 26px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 13px 20px;
  font-weight: 900;
  font-size: 13px;
  border: 0;
  cursor: pointer;
  min-height: 46px;
}

.btn-red {
  background: var(--red);
  color: #fff;
}

.btn-red:hover {
  background: #c91d23;
}

.btn-outline {
  border: 1px solid #fff;
  color: #fff;
  background: #071a3590;
}

/* BENEFITS */
.benefits {
  margin-top: -36px;
  position: relative;
  z-index: 5;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: #fff;
  border-radius: 9px;
  box-shadow: 0 10px 35px #10213a1a;
  overflow: hidden;
}

.benefit {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 22px;
  border-right: 1px solid var(--line);
}

.benefit:last-child {
  border: 0;
}

.benefit-icon {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #edf2f8;
  color: var(--red);
  font-size: 21px;
  font-weight: 900;
}

.benefit strong {
  display: block;
  font-size: 12px;
}

.benefit small {
  display: block;
  color: var(--muted);
  font-size: 11px;
  margin-top: 3px;
}

/* MAIN SECTIONS */
.section {
  padding: 65px 0;
}

.main-section {
  padding-top: 52px;
}

.three-col {
  display: grid;
  grid-template-columns: 1fr 1.08fr 1fr;
  gap: 38px;
}

.column {
  padding: 0 22px;
  border-right: 1px solid var(--line);
}

.column:first-child {
  padding-left: 0;
}

.column:last-child {
  border: 0;
  padding-right: 0;
}

.section-title span {
  display: block;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: .08em;
}

.section-title span:after {
  content: "";
  display: block;
  width: 30px;
  height: 2px;
  background: var(--red);
  margin: 8px 0 10px;
}

.section-title h2 {
  font-size: 24px;
  line-height: 1.15;
  margin: 0 0 15px;
  font-weight: 800;
}

/* SERVICES */
.service {
  display: flex;
  gap: 14px;
  margin: 19px 0;
}

.service-icon,
.contact-icon {
  flex: none;
  width: 48px;
  height: 48px;
  border-radius: 9px;
  display: grid;
  place-items: center;
  font-size: 21px;
  font-weight: 900;
}

.service-icon.red,
.contact-icon.red {
  background: #ffe8e8;
  color: var(--red);
}

.service-icon.blue,
.contact-icon.blue {
  background: #e9f1ff;
  color: var(--blue);
}

.service-icon.green,
.contact-icon.green {
  background: #e6f7ef;
  color: var(--green);
}

.contact-icon.gold {
  background: #fff5dc;
  color: var(--gold);
}

.service h3 {
  font-size: 14px;
  margin: 0 0 3px;
}

.service p,
.column > p {
  font-size: 12px;
  color: var(--muted);
  margin: 0;
}

.dark-btn {
  display: inline-block;
  background: var(--navy);
  color: #fff;
  border-radius: 4px;
  padding: 11px 16px;
  font-size: 11px;
  font-weight: 900;
  margin-top: 8px;
}

/* TRACKING */
.tracking-column > p {
  margin: 0 0 17px;
}

.tracking-column form {
  margin: 0;
}

.tracking-column label {
  display: block;
  font-size: 11px;
  font-weight: 800;
  margin-bottom: 6px;
}

.input-row {
  display: flex;
  gap: 8px;
}

.input-row input {
  flex: 1;
  min-width: 0;
  border: 1px solid #d7dee8;
  border-radius: 4px;
  padding: 13px;
  font: inherit;
  font-size: 12px;
  outline: none;
}

.input-row input:focus {
  border-color: var(--blue);
}

.input-row .btn {
  padding: 10px 14px;
}

.tracking-result {
  font-size: 11px;
  color: var(--red);
  min-height: 20px;
  padding-top: 6px;
}

.notice {
  background: #edf5ff;
  color: #2e568d;
  border-radius: 6px;
  padding: 14px;
  margin-top: 14px;
  font-size: 11px;
}

/* ABOUT */
.checks {
  list-style: none;
  padding: 0;
  margin: 19px 0;
}

.checks li {
  font-size: 12px;
  margin: 11px 0;
  padding-left: 21px;
  position: relative;
}

.checks li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--red);
  font-weight: 900;
}

/* IMAGE SECTION */
.image-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  width: min(1160px, 92%);
  margin: 0 auto 65px;
}

.image-card {
  height: 190px;
  border-radius: 8px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  position: relative;
}

.image-card:after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(4, 18, 38, .88), transparent 70%);
}

.image-one {
  background-image: url("https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1000&q=80");
}

.image-two {
  background-image: url("https://images.unsplash.com/photo-1586528116493-da8b7b3f2f8c?auto=format&fit=crop&w=1000&q=80");
}

.image-three {
  background-image: url("https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=80");
}

.image-card > div {
  position: absolute;
  z-index: 2;
  left: 20px;
  bottom: 18px;
  color: #fff;
}

.image-card b {
  display: block;
  font-size: 13px;
}

.image-card span {
  font-size: 11px;
  color: #dce7f5;
}

/* CONTACT */
.contact-section {
  border-top: 1px solid var(--line);
  padding: 45px 0 50px;
}

.contact-title {
  margin-bottom: 22px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px;
  border-right: 1px solid var(--line);
}

.contact-item:last-child {
  border: 0;
}

.contact-item b {
  display: block;
  font-size: 10px;
  color: #607089;
  text-transform: uppercase;
}

.contact-item strong {
  display: block;
  font-size: 12px;
  margin-top: 3px;
  word-break: break-word;
}

/* FOOTER */
footer {
  background: var(--navy);
  color: #fff;
  padding: 40px 0 18px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.3fr 1fr 1.2fr;
  gap: 60px;
}

.footer-brand p {
  color: #b8c6d8;
  font-size: 11px;
}

.footer-grid h4 {
  font-size: 11px;
  letter-spacing: .08em;
  margin: 0 0 14px;
}

.footer-grid > div > a {
  display: block;
  color: #bdc9d8;
  font-size: 11px;
  margin: 8px 0;
}

.copyright {
  border-top: 1px solid #ffffff20;
  margin-top: 28px;
  padding-top: 15px;
  text-align: center;
  color: #9eacc0;
  font-size: 10px;
}

/* TABLET */
@media (max-width: 900px) {
  nav {
    gap: 15px;
  }

  .three-col {
    grid-template-columns: 1fr;
  }

  .column {
    border-right: 0;
    border-bottom: 1px solid var(--line);
    padding: 0 0 35px;
    margin-bottom: 35px;
  }

  .column:last-child {
    border-bottom: 0;
    margin-bottom: 0;
  }

  .benefit {
    padding: 16px;
  }

  .image-strip {
    grid-template-columns: 1fr;
  }

  .contact-grid {
    grid-template-columns: 1fr 1fr;
  }

  .contact-item:nth-child(2) {
    border-right: 0;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* MOBILE */
@media (max-width: 700px) {
  .menu-toggle {
    display: block;
  }

  nav {
    display: none;
    position: absolute;
    top: 74px;
    left: 0;
    right: 0;
    background: #fff;
    padding: 18px 4%;
    flex-direction: column;
    box-shadow: 0 12px 25px #10213a1a;
  }

  nav.open {
    display: flex;
  }

  .nav-quote {
    text-align: center;
  }

  .hero,
  .hero-inner {
    min-height: 520px;
  }

  .hero h1 {
    font-size: 44px;
  }

  .benefits {
    margin-top: 0;
  }

  .benefits-grid {
    grid-template-columns: 1fr 1fr;
    border-radius: 0;
  }

  .benefit {
    border-bottom: 1px solid var(--line);
  }

  .benefit:nth-child(2) {
    border-right: 0;
  }

  .benefit:nth-child(3),
  .benefit:nth-child(4) {
    border-bottom: 0;
  }

  .benefit:nth-child(4) {
    border-right: 0;
  }

  .actions {
    flex-direction: column;
    max-width: 300px;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .contact-item,
  .contact-item:nth-child(2) {
    border-right: 0;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }
}

/* SMALL MOBILE */
@media (max-width: 430px) {
  .hero h1 {
    font-size: 38px;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }

  .benefit {
    border-right: 0 !important;
    border-bottom: 1px solid var(--line) !important;
  }

  .benefit:last-child {
    border-bottom: 0 !important;
  }
}
