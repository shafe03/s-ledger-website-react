import { Link } from "react-router-dom";

const PricingPage = () => {
  return (
    <div id="price-page">
      {/* <!--container  --> */}
      <div className="container">
        {/* <!-- Landing page --> */}
        <section className="section-1">
          <div className="hero">
            <div className="hero-content">
              <h1 className="hero-content-heading">
                Smart, simple online accounting software for small business
              </h1>
              <p className="hero-content-paragraph">
                Track expenses, customise invoices, run reports and even more
                all from one place.
              </p>
              <ul className="hero-content-btns">
                <li>
                  <Link to="pricing" className="buy-now">
                    Buy Now
                  </Link>
                </li>
                <li>
                  <Link to="pricing" className="buy-now">
                    Free 30-Day Trial
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hero-img-wrapper">
              <img
                src={
                  require("../img/landing/undraw_progressive_app_m9ms.svg")
                    .default
                }
                alt=""
              />
            </div>
            <div className="offer">
              <h4 className="offer-heading">buy now and get</h4>
              <p>
                <span>50%</span>off
              </p>
              <h3 className="offer-logo">S-LEDGER</h3>
              <Link to="pricing">Buy Now</Link>
              <h4 className="offer-footer">
                Or, Sign up for a Free 30-day trial without credit card
              </h4>
            </div>
          </div>
        </section>
        {/* <!--End of landing page --> */}

        {/* <!-- Features --> */}
        <section className="section-2">
          <h1 className="section-heading">
            Powerful accounting tools for small and growing businesses
          </h1>
          <div className="features-wrapper">
            <div className="feature">
              <img
                src={
                  require("../img/features//undraw_spreadsheets_xdjy.svg")
                    .default
                }
                alt=""
              />
              <h3 className="feature-heading">Hello organised</h3>
              <p className="feature-description">
                s-ledger Online keeps everything in its right place, so you’ll
                always have what you need when you need it.
              </p>
            </div>
            <div className="feature">
              <img
                src={
                  require("../img/features/undraw_dev_productivity_umsq.svg")
                    .default
                }
                alt=""
              />
              <h3 className="feature-heading">Free up time</h3>
              <p className="feature-description">
                Sync with your bank and favourite apps, so your books are always
                accurate and up to date.
              </p>
            </div>
            <div className="feature">
              <img
                src={
                  require("../img/features/undraw_pay_online_b1hk.svg").default
                }
                alt=""
              />
              <h3 className="feature-heading">Claim everything</h3>
              <p className="feature-description">
                Claim every entitlement at tax time with your expense receipts
                stored and sorted in s-ledger.
              </p>
            </div>
            <div className="feature">
              <img
                src={
                  require("../img/features/undraw_active_support_6rwo.svg")
                    .default
                }
                alt="productivity image"
              />
              <h3 className="feature-heading">Unlimited support</h3>
              <p className="feature-description">
                With s-ledger free and unlimited customer support, help is
                always just a click away.
              </p>
            </div>
          </div>
        </section>

        <section className="section-3">
          <h1 className="section-heading">Manage everything in one place</h1>
          <div className="section-3-feature-wrapper">
            <img
              src={
                require("../img/features/undraw_Data_report_re_p4so.svg")
                  .default
              }
              alt=""
            />
            <div className="section-3-content">
              <h3>Work from anywhere on multiple devices</h3>
              <p>
                Access and manage your books from your computer, laptop, tablet,
                or smartphone anytime you choose. Create access privileges so
                that your colleague or accountant can login and work with your
                data online.
              </p>
              <Link to="docs">Learn more</Link>
            </div>
          </div>
        </section>

        <section className="section-4">
          <h1 className="section-heading">
            Ready to run your business better with s-ledger Online?
          </h1>
          <Link to="pricing">Buy now and save</Link>
        </section>

        <section className="section-5">
          <h1 className="section-heading">Run your business on your terms</h1>

          <div className="operations">
            <div className="operations__tab-container">
              <button
                className="btn operations__tab operations__tab--1"
                data-tab="1"
              >
                Invoicing
              </button>
              <button
                className="btn operations__tab operations__tab--2"
                data-tab="2"
              >
                Expenses
              </button>
              <button
                className="btn operations__tab operations__tab--3"
                data-tab="3"
              >
                Reports
              </button>
            </div>

            <div className="operations__content operations__content--1 operations__content--active">
              <h4 className="operations__header">
                Turn heads and open wallets
              </h4>
              <p>
                Create and send professional-looking invoices in seconds. Custom
                templates and automated reminders make getting paid even
                simpler.
              </p>
              <div className="operations__icon operations__icon--1">
                <img
                  src={
                    require("../img/features/undraw_Receipt_re_fre3.svg")
                      .default
                  }
                  alt=""
                />
              </div>
            </div>

            <div className="operations__content operations__content--2">
              <h4 className="operations__header">Never lose another receipt</h4>
              <p>
                We'll keep a photo record of every receipt so you're always
                organised for tax time. Say goodbye to that shoebox full of
                receipts.
              </p>
              <div className="operations__icon operations__icon--2">
                <img
                  src={
                    require("../img/features/undraw_Credit_card_re_blml.svg")
                      .default
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="operations__content operations__content--3">
              <h4 className="operations__header">Run a report in seconds</h4>
              <p>
                See how your business is doing with a range of popular reports.
                Or customise one to include details that matter to you.
              </p>
              <div className="operations__icon operations__icon--3">
                <img
                  src={
                    require("../img/features/undraw_Report_re_kp7y.svg").default
                  }
                  alt=""
                />
              </div>
              <Link to="docs"> Learn more</Link>
            </div>
          </div>
          <Link className="btn-all-features" to="features">
            See all features
          </Link>
        </section>
        {/* <!--End of features--> */}

        {/* <!-- PRICING --> */}
        <section className="section-6">
          <h1 className="section-heading">
            There’s a S-Ledger for every business
          </h1>
          <div className="pricing">
            <div className="pricing__tab-container">
              <button className="btn pricing__tab pricing__tab--1" data-tab="1">
                Simple Start
              </button>
              <button className="btn pricing__tab pricing__tab--2" data-tab="2">
                Essentials
              </button>
              <button className="btn pricing__tab pricing__tab--3" data-tab="3">
                Plus
              </button>
            </div>

            <div className="pricing__content pricing__content--1 pricing__content--active">
              <h4 className="pricing__header">Simple Start</h4>
              <p>Start your business</p>
              <h2 className="amount">
                &#2547;2000/ <span>month</span>
              </h2>
              <Link to="pricing">Buy now</Link>
              <Link to="pricing">Free 30-Day Trial</Link>
              <ul className="pricing__plan">
                <li>
                  <i className="fas fa-check"></i>
                  <p>Track sales, expenses and profits</p>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <p>Create & send unlimited invoices</p>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <p>Track and manage your sales tax</p>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <p>Works on PC, Mac, and mobile</p>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <p>For one user, plus your accountant</p>
                </li>
              </ul>
            </div>

            <div className="pricing__content pricing__content--2">
              <h4 className="pricing__header">Essentials</h4>
              <p>Run your business</p>
              <h2 className="amount">
                &#2547;2500/ <span>month</span>
              </h2>
              <Link to="pricing">Buy now</Link>
              <Link to="pricing">Free 30-Day Trial</Link>
              <ul className="pricing__plan">
                <li>
                  <i className="fas fa-check"></i>
                  <p>Manage and pay bills</p>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <p>Transact in multiple currencies</p>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <p>Generate sales quotes</p>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <p>For three users, plus your accountant</p>
                </li>
              </ul>
            </div>

            <div className="pricing__content pricing__content--3">
              <h4 className="pricing__header">Plus</h4>
              <p>Grow your business</p>
              <h2 className="amount">
                &#2547;3000/ <span>month</span>
              </h2>
              <Link to="pricing">Buy now</Link>
              <Link to="pricing">Free 30-Day Trial</Link>
              <ul className="pricing__plan">
                <li>
                  <i className="fas fa-check"></i>
                  <p>Track inventory</p>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <p>Create purchase orders</p>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <p>Track project or job profitibility</p>
                </li>
                <li>
                  <i className="fas fa-check"></i>
                  <p>For five users, plus your accountant</p>
                </li>
              </ul>
            </div>
          </div>
          <Link to="pricing">See all features</Link>
        </section>
        {/* <!--END OF PRICING --> */}

        {/* <!-- Review --> */}
        <section className="section-7">
          <h1 className="section-heading">
            Join 4.5 million customers globally using S-Ledger
          </h1>
          <img src={require("../img/undraw_reviews_lp8w.svg").default} alt="" />
          <div className="quote-container">
            {/* <!-- <i className="fas fa-quote-left"></i> --> */}
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className="quote-content">
            <p>
              "Before S-Ledger I dreaded the accounting side of my business. Now
              I can get everything done in minutes and spend time doing what I
              love.""
            </p>
            <p className="commented-person">
              - Shafe - Full time self-employed
            </p>
          </div>
        </section>
        {/* <!-- End of review --> */}

        {/* <!-- Frequently ask question --> */}

        <section className="section-8">
          <h1 className="section-heading">Frequently Asked Questions</h1>
          <div className="faq-container">
            <div className="question-container">
              <h3 className="question">What is online accounting software?</h3>
              <p className="answer hidden">
                Online accounting software is sometimes called 'cloud-based
                software'. It allows users to create, store and send invoices
                from any device. You don't need anything saved on your computer,
                and there are no disks to load. Simply log in on a web browser
                and jump right into your S-Ledger online account. Your personal
                data and settings are right there, stored safely in 'the cloud'.
              </p>
            </div>

            <div className="question-container">
              <h3 className="question">
                Will S-Ledger online accounting software work on my Apple Mac?
              </h3>
              <p className="answer hidden">
                Absolutely! S-Ledger online is a full cloud solution that can be
                used on any compatible browser on any computer (PC or Mac), and
                mobile device.
              </p>
            </div>

            <div className="question-container">
              <h3 className="question">
                Can I access S-Ledger Online accounting software on my mobile
                phone or tablet?
              </h3>
              <p className="answer hidden">
                S-Ledger Online can be accessed from any web enabled mobile
                device with a web browser. The experience is optimised on any
                iOS device (iPad, iPhone or iPod Touch) and Android tablet or
                Smartphone with the S-Ledger online app.
              </p>
            </div>

            <div className="question-container">
              <h3 className="question">
                Can I access S-Ledger Online offline?
              </h3>
              <p className="answer hidden">
                You will need an internet connection to access S-Ledger online.
              </p>
            </div>

            <div className="question-container">
              <h3 className="question">
                How do I make sure my data is secure in online accounting?
              </h3>
              <p className="answer hidden">
                When you use S-Ledger online, your data is stored on our servers
                in the cloud. We know that data is one of your company's most
                valuable assets, so we go to great lengths to protect it.
              </p>
            </div>
          </div>
        </section>
        {/* <!--End of Frequently ask question --> */}
      </div>
      {/* <!--End of container  --> */}
    </div>
  );
};

export default PricingPage;
