## Advanced React & GraphQL project from Wes Bos' tutorial

### This is the back end repository. The front end repository is [here](https://github.com/Missarachnid/sick-fits-frontend)

### The deployed website: [sick-fits.com](https://www.sick-fits.com)

### The back end console: [app.sick-fits.com](https://www.app.sick-fits.com)

### Project functionality - Fake shopping site Sick Fits

- Users can see items for sale, but can't put them in the cart unless signed in.
- Users can create an account. They can then add items to cart, purchase items or list them for sale.
- Users can see their account information and past orders
- Users can request a password reset and receive an email with a link containing a token
- Users can sign into the keystone.js console and edit products they have added for sale.
- If a user has been given the role of editor they can edit all products.
- If a user has been given the role of admin they can edit all products, assign products to users, and edit and create users.
- A user can check out using a fake card number and receive their order information.

### Technology Used:

- React/Next.js
- JavaScript Frontend/Typescript Backend
- Apollo/GraphQL/
- Keystone.js
- MongoDB
- Cloudinary
- CSS/Styled Components
- Cloudflare
- Front End deployed on Heroku
- Back End deployed on Digital Ocean
- Domain controlled through Google
- Payment through Stripe - Although it is a fake site, no money is exchanged with the use of a fake number found through link provided
- Testing with Jest
- Email trapping with Ethereal and Nodemail for development
- Emails for password reset sent with Email.js and Nodemailer
- Cookie Consent Warning from React Cookie Consent

### What I added beyond the tutorial

- You can view products when not signed in
- Password reset token/link are sent with email.js from an email address from my website
- At the time I did this there was no instruction on deployment. I had to figure that out on my own
- I moved the orders info into the Account page so I could shorten the navigation
- Add SameSite, Secure, and httpOnly properties to the cookie so it would function properly
- Route to products after sign in
- Added Cloudflare to force https to avoid cookie issues
- Added styling to products and their pages and responsiveness
- Cookie Consent notification

### Things I am still working on:

- Adding items to cart without being signed in
- Adding a hamburger menu for mobile

#### Please keep in mind this is a tutorial project and the products are not real. There is a link to Stripe's website to get a testing card number above the checkout area. Please do not enter real numbers, this is not a real website.

#### README from the main project repository

---

![Advanced React & GraphQL](https://advancedreact.com/images/ARG/arg-facebook-share.png)

# Advanced React & GraphQL

These are the starter files and stepped solutions for the [Advanced React & GraphQL](https://AdvancedReact.com) course by [Wes Bos](https://WesBos.com/).

## Getting Help

The best place to get help is in the #advanced-react slack room - there is a link in your course dashboard.

## FAQ

**Q:** Which Extensions for VS Code is Wes using?  
**A:** All my extensions are listed on [my dotfiles repo](https://github.com/wesbos/dotfiles), but specifically this course uses [ESLint](https://github.com/Microsoft/vscode-eslint) and [Prettier](https://github.com/prettier/prettier-vscode).

---
