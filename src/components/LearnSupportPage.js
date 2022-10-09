const LearnSupportPage = () => {
  return (
    <body>
      {/* <!-- contaner --> */}
      <div class="container">
        {/* <!-- Landing page --> */}
        <section class="section-1">
          <div class="hero">
            <div class="hero-content">
              <h1 class="hero-content-heading">
                Hello! Welcome to <br />
                S-Ledger Support.
              </h1>
              <p class="hero-content-paragraph">
                Find S-Ledger help articles, Community discussions with other
                S-Ledger users, video tutorials and more.
              </p>
              <label for="search"></label>
              <input
                class="section-1_search"
                type="search"
                id="search"
                name="search"
                placeholder="Post Question"
              />
              <button className="btn btn-all-features">Post</button>
            </div>
            <div class="hero-img-wrapper">
              <img
                src="../img/support/undraw_instant_support_re_s7un.svg"
                alt="support-img"
              />
            </div>
          </div>
        </section>
        {/* <!--End of landing page --> */}
      </div>
      {/* <!--End of container --> */}
    </body>
  );
};

export default LearnSupportPage;
