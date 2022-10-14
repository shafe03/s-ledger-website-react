const LearnSupportPage = () => {
  return (
    <div id="learnSupport">
      {/* <!-- contaner --> */}
      <div className="container">
        {/* <!-- Landing page --> */}
        <section className="section-1">
          <div className="hero">
            <div className="hero-content">
              <h1 className="hero-content-heading">
                Hello! Welcome to <br />
                S-Ledger Support.
              </h1>
              <p className="hero-content-paragraph">
                Find S-Ledger help articles, Community discussions with other
                S-Ledger users, video tutorials and more.
              </p>
              <label for="search"></label>
              <input
                className="section-1_search"
                type="search"
                id="search"
                name="search"
                placeholder="Post Question"
              />
              <button classNameName="btn btn-all-features">Post</button>
            </div>
            <div className="hero-img-wrapper">
              <img
                src={
                  require("../img/support/undraw_instant_support_re_s7un.svg")
                    .default
                }
                alt="support-img"
              />
            </div>
          </div>
        </section>
        {/* <!--End of landing page --> */}
      </div>
      {/* <!--End of container --> */}
    </div>
  );
};

export default LearnSupportPage;
