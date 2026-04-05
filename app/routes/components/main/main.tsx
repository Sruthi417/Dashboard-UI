import "./main.scss";
import Burger from "../burger/burger";

interface MainProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Main = ({ sidebarOpen, setSidebarOpen }: MainProps) => {
  return (
    <>
      <Burger open={sidebarOpen} setOpen={setSidebarOpen} />

        <div className="mains">
          <div className="navbar">
            <div className="nav-left">
              <img src="/icons/navIcon.svg" />
              <span className="dashboard">Dashboard</span>
              <span className="dashboard">/</span>
              <span className="default">Default</span>
            </div>
            <div className="nav-right">
              <div className="searchbar">
                <img src="/icons/search.png" className="Img1" />
                <span className="hint">Search</span>
                <img src="/icons/slash.svg" className="slash" />
              </div>

              <div className="images">
                <img src="/icons/brightness.svg.svg" className="Img2" />
                <img src="/icons/refresh.svg" className="Img2" />
                <img src="/icons/bell.svg.svg" className="Img2" />
                <img src="/icons/window.svg.svg" className="Img2" />
              </div>
            </div>
          </div>

          <div className="title">
            <span className="overview">Overview</span>
            <div className="right">
              <span className="today">Today</span>
              <img src="/icons/arrowdowns.svg" />
            </div>
          </div>

          <div className="main-sec">
            <div className="card-container">
              <div className="cards">
                <span className="view">Views</span>
                <div className="grps">
                  <span className="num">7,265</span>
                  <div className="subgrp">
                    <span className="value">+11.01%</span>
                    <img src="/icons/arrowrise.svg" className="picture" />
                  </div>
                </div>
              </div>
              <div className="cards pink">
                <span className="view">Visits</span>
                <div className="grps">
                  <span className="num">3,671</span>
                  <div className="subgrp">
                    <span className="value">-0.03%</span>
                    <img src="/icons/arrowdown.svg" className="picture" />
                  </div>
                </div>
              </div>
              <div className="cards">
                <span className="view">New Users</span>
                <div className="grps">
                  <span className="num">156</span>
                  <div className="subgrp">
                    <span className="value">+15.03%</span>
                    <img src="/icons/arrowrise.svg" className="picture" />
                  </div>
                </div>
              </div>
              <div className="cards pink">
                <span className="view ">Active Users</span>
                <div className="grps">
                  <span className="num">2,318</span>
                  <div className="subgrp">
                    <span className="value">+6.08%</span>
                    <img src="/icons/arrowrise.svg" className="picture" />
                  </div>
                </div>
              </div>
            </div>

            <div className="middle">
              <img src="./images/graph.png" />
              <div className="box">
                <div className="box1">
                  <span className="list">Traffic by website</span>
                  <div className="grp-site ">
                    <span className="google">Google</span>
                    <div className="line ">
                      <div className="line1"></div>
                      <div className="line2"></div>
                      <div className="line3"></div>
                    </div>
                  </div>
                  <div className="grp-site">
                    <span className="google">YouTube</span>
                    <div className="line">
                      <div className="line1"></div>
                      <div className="line2"></div>
                      <div className="line3"></div>
                    </div>
                  </div>
                  <div className="grp-site">
                    <span className="google">Instagram</span>
                    <div className="line">
                      <div className="line1"></div>
                      <div className="line2"></div>
                      <div className="line3"></div>
                    </div>
                  </div>
                  <div className="grp-site">
                    <span className="google">Pinterest</span>
                    <div className="line">
                      <div className="line1"></div>
                      <div className="line2"></div>
                      <div className="line3"></div>
                    </div>
                  </div>
                  <div className="grp-site">
                    <span className="google">Facebook</span>
                    <div className="line">
                      <div className="line1"></div>
                      <div className="line2"></div>
                      <div className="line3"></div>
                    </div>
                  </div>
                  <div className="grp-site">
                    <span className="google">Twitter</span>
                    <div className="line">
                      <div className="line1"></div>
                      <div className="line2"></div>
                      <div className="line3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pics">
            <img src="/images/pic1.png" className="pic1" />
            <img src="/images/pic2.png" className="pic1" />
          </div>
        </div>
      
    </>
  );
};
export default Main;
