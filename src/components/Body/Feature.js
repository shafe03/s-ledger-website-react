const Feature = () => {
  return (
    <body id="features-html">
      {/* <!-- menu --> */}
      <div class="menu">
        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="line line-3"></div>
      </div>

      {/* <!-- contaner --> */}
      <div class="container">
        {/* <!-- Landing page --> */}
        <section class="section-1">
          <div class="hero">
            <div class="hero-content">
              <h1 class="hero-content-heading">Features for S-Ledger Online</h1>
              <p class="hero-content-paragraph">
                Smarter tools for a better way of doing business.
              </p>
              <ul class="hero-content-btns">
                <li>
                  <a href="pricing.html" class="buy-now">
                    Buy Now
                  </a>
                </li>
                <li>
                  <a href="pricing.html" class="buy-now">
                    Free 30-Day Trial
                  </a>
                </li>
              </ul>
            </div>
            <div class="hero-img-wrapper">
              <img src="../img/undraw_features_overview_jg7a.svg" alt="" />
            </div>
            <div class="offer">
              <h4 class="offer-heading">buy now and get</h4>
              <p>
                <span>50%</span>off
              </p>
              <h3 class="offer-logo">S-LEDGER</h3>
              <a href="pricing.html">Buy Now</a>
              <h4 class="offer-footer">
                Or, Sign up for a Free 30-day trial without credit card
              </h4>
            </div>
          </div>
        </section>
        {/* <!--End of landing page --> */}

        <section class="section-2">
          <h1 class="section-heading">From quote to paid sooner</h1>

          <div class="operations">
            <div class="operations__tab-container">
              <button
                class="
                btn
                operations__tab operations__tab--1 operations__tab--active
              "
                data-tab="1"
              >
                Invoicing
              </button>
              <button
                class="btn operations__tab operations__tab--2"
                data-tab="2"
              >
                Expenses
              </button>
              <button
                class="btn operations__tab operations__tab--3"
                data-tab="3"
              >
                Reports
              </button>
            </div>

            <div
              class="
              operations__content
              operations__content--1
              operations__content--active
            "
            >
              <h4 class="operations__header">Send custom invoices & quotes</h4>
              <p>
                Create custom, professional invoices, sales receipts and
                estimates that you can send in minutes.
              </p>
              <a class="btn-learn-more" href="#">
                Learn more
              </a>
              <div class="operations__icon operations__icon--1">
                <img src="../img/features/undraw_Receipt_re_fre3.svg" alt="" />
              </div>
            </div>

            <div class="operations__content operations__content--2">
              <h4 class="operations__header">Never lose another receipt</h4>
              <p>
                We'll keep a photo record of every receipt so you're always
                organised for tax time. Say goodbye to that shoebox full of
                receipts.
              </p>
              <div class="operations__icon operations__icon--2">
                <img
                  src="../img/features/undraw_Credit_card_re_blml.svg"
                  alt=""
                />
              </div>
            </div>
            <div class="operations__content operations__content--3">
              <h4 class="operations__header">Run a report in seconds</h4>
              <p>
                See how your business is doing with a range of popular reports.
                Or customise one to include details that matter to you.
              </p>
              <div class="operations__icon operations__icon--3">
                <img src="../img/features/undraw_Report_re_kp7y.svg" alt="" />
              </div>
              <a class="learn-more" href="docs.html">
                {" "}
                Learn more
              </a>
            </div>
          </div>
        </section>

        <section class="section-3">
          <h1 class="section-heading">Help and advice</h1>
          <div class="content-container">
            <div class="content">
              <h3>Accountant access</h3>
              <p>
                Invite your accountant, bookkeeper, or other users to
                collaborate on your books. You can add, delete or change user
                access at any time.
              </p>
            </div>
            <div class="content">
              <h3>Free user support</h3>
              <p>
                If you need help, support is available Monday to Friday 7.00 am
                - 6.00 pm.
              </p>
            </div>
          </div>
          <a href="pricing.html">Try it free</a>
        </section>

        <section class="section-4">
          <h1 class="section-heading">Safe in the cloud</h1>
          <div class="features-wrapper">
            <div class="feature">
              <img src="../img/undraw_Weather_app_re_kcb1.svg" alt="" />
              <h3 class="feature-heading">Cloud accounting</h3>
              <p class="feature-description">
                Your account information is securely stored in the cloud and
                available anytime on all your devices.
              </p>
            </div>
            <div class="feature">
              <img src="../img/undraw_Security_on_re_e491.svg" alt="" />
              <h3 class="feature-heading">Data security</h3>
              <p class="feature-description">
                Bank-level security ensures your data is safe and accessible
                only to you and the people you choose to share it with.
              </p>
            </div>
          </div>
        </section>

        <section class="section-5">
          <h1 class="section-heading">There’s a S-Ledger plan for you</h1>
          <div class="pricing">
            <div class="pricing__tab-container">
              <button class="btn pricing__tab pricing__tab--1" data-tab="1">
                Simple Start
              </button>
              <button class="btn pricing__tab pricing__tab--2" data-tab="2">
                Essentials
              </button>
              <button class="btn pricing__tab pricing__tab--3" data-tab="3">
                Plus
              </button>
            </div>

            <div
              class="
              pricing__content pricing__content--1 pricing__content--active
            "
            >
              <h4 class="pricing__header">Simple Start</h4>
              <p>Start your business</p>
              <h2 class="amount">
                &#2547;2000/ <span>month</span>
              </h2>
              <a href="pricing.html">Buy now</a>
              <a href="pricing.html">Free 30-Day Trial</a>
              <ul class="pricing__plan">
                <li>
                  <i class="fas fa-check"></i>
                  <p>Track sales, expenses and profits</p>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <p>Create & send unlimited invoices</p>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <p>Track and manage your sales tax</p>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <p>Works on PC, Mac, and mobile</p>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <p>For one user, plus your accountant</p>
                </li>
              </ul>
            </div>

            <div class="pricing__content pricing__content--2">
              <h4 class="pricing__header">Essentials</h4>
              <p>Run your business</p>
              <h2 class="amount">
                &#2547;2500/ <span>month</span>
              </h2>
              <a href="pricing.html">Buy now</a>
              <a href="pricing.html">Free 30-Day Trial</a>
              <ul class="pricing__plan">
                <li>
                  <i class="fas fa-check"></i>
                  <p>Manage and pay bills</p>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <p>Transact in multiple currencies</p>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <p>Generate sales quotes</p>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <p>For three users, plus your accountant</p>
                </li>
              </ul>
            </div>

            <div class="pricing__content pricing__content--3">
              <h4 class="pricing__header">Plus</h4>
              <p>Grow your business</p>
              <h2 class="amount">
                &#2547;3000/ <span>month</span>
              </h2>
              <a href="pricing.html">Buy now</a>
              <a href="pricing.html">Free 30-Day Trial</a>
              <ul class="pricing__plan">
                <li>
                  <i class="fas fa-check"></i>
                  <p>Track inventory</p>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <p>Create purchase orders</p>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <p>Track project or job profitibility</p>
                </li>
                <li>
                  <i class="fas fa-check"></i>
                  <p>For five users, plus your accountant</p>
                </li>
              </ul>
            </div>
          </div>
          <a href="pricing.html">See all features</a>
        </section>
        {/* <!--END OF PRICING --> */}

        <section class="section-6">
          <h1 class="section-heading">
            See how S-ledger Online can work for your business
          </h1>
          <a href="pricing.html">Buy now and save</a>
        </section>

        <section class="section-7">
          <h1 class="section-heading">Frequently Asked Questions</h1>
          <div class="faq-container">
            <div class="question-container">
              <h3 class="question">What is online accounting software?</h3>
              <p class="answer hidden">
                Online accounting software is sometimes called 'cloud-based
                software'. It allows users to create, store and send invoices
                from any device. You don't need anything saved on your computer,
                and there are no disks to load. Simply log in on a web browser
                and jump right into your S-Ledger online account. Your personal
                data and settings are right there, stored safely in 'the cloud'.
              </p>
            </div>

            <div class="question-container">
              <h3 class="question">
                Will S-Ledger online accounting software work on my Apple Mac?
              </h3>
              <p class="answer hidden">
                Absolutely! S-Ledger online is a full cloud solution that can be
                used on any compatible browser on any computer (PC or Mac), and
                mobile device.
              </p>
            </div>

            <div class="question-container">
              <h3 class="question">
                Can I access S-Ledger Online accounting software on my mobile
                phone or tablet?
              </h3>
              <p class="answer hidden">
                S-Ledger Online can be accessed from any web enabled mobile
                device with a web browser. The experience is optimised on any
                iOS device (iPad, iPhone or iPod Touch) and Android tablet or
                Smartphone with the S-Ledger online app.
              </p>
            </div>

            <div class="question-container">
              <h3 class="question">Can I access S-Ledger Online offline?</h3>
              <p class="answer hidden">
                You will need an internet connection to access S-Ledger online.
              </p>
            </div>

            <div class="question-container">
              <h3 class="question">
                How do I make sure my data is secure in online accounting?
              </h3>
              <p class="answer hidden">
                When you use S-Ledger online, your data is stored on our servers
                in the cloud. We know that data is one of your company's most
                valuable assets, so we go to great lengths to protect it.
              </p>
            </div>
          </div>
        </section>

        <footer class="footer">
          <h1 class="footer-heading">S-LEDGER</h1>
          <nav class="footer-nav">
            <a href="">Legal</a>|<a href="">Privacy</a>|<a href="">Security</a>
          </nav>
          <h4>&copy; Md. Shafe Alam</h4>

          <p>
            All rights reserved. Terms and conditions, features, support,
            pricing, and service options subject to change without notice.
          </p>
        </footer>
      </div>
      {/* <!--End of container --> */}
    </body>
  );
};

export default Feature;
