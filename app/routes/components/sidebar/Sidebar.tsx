import "./Sidebar.scss";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  return (
    <>
      {/* Overlay backdrop — visible only when sidebar is open on mobile */}
      {open && (
        <div className="sidebar-overlay" onClick={() => setOpen(false)} />
      )}

      <div className={`sidebar ${open ? "sidebar--open" : ""}`}>
        <div className="side">
          <div className="profile">
            <img src="/images/man.png" className="images" />
            <span className="title">ByeWind</span>
          </div>
          <span className="text1">Favorites</span>
          <ul className="list">
            <li>OverView</li>
            <li>Projects</li>
          </ul>
        </div>

        <div className="dashboard">
          <div className="dash">Dashboard</div>
          <ul className="sections">
            <li className="overview">
              <img src="/icons/icon1.png" />
              <span className="over">Overview</span>
            </li>
            <li className="ecom_pro">
              <div className="join">
                <img src="/icons/arrow.png" className="icon1" />
                <img src="/icons/Icon2.png" className="icon2" />
              </div>
              <span className="over">eCommerce</span>
            </li>
            <li className="ecom_pro">
              <div className="join">
                <img src="/icons/arrow.png" className="icon1" />
                <img src="/icons/Icon3.png" className="icon2" />
              </div>
              <span className="over"> Projects</span>
            </li>
          </ul>
        </div>
        <div className="page">
          <div className="pages">Pages</div>
          <ul className="section2">
            <li className="Userprofile">
              <div className="join">
                <img src="/icons/arrow.png" className="icon1" />
                <img src="/icons/profile.png" className="img2" />
              </div>
              <span className="over"> User Profile</span>
            </li>

            <span className="overs"> Overview</span>
            <li>
              <span className="overs"> Projects</span>
            </li>
            <li>
              <span className="overs"> Campaigns</span>
            </li>
            <li>
              <span className="overs"> Followers</span>
            </li>
            <li className="Userprofile">
              <div className="join">
                <img src="/icons/arrow.png" className="icon1" />
                <img src="/icons/Account.png" className="img2" />
              </div>
              <span className="over"> Account</span>
            </li>
            <li className="Userprofile">
              <div className="join">
                <img src="/icons/arrow.png" className="icon1" />
                <img src="/icons/Corporate.png" className="img2" />
              </div>
              <span className="over"> Corporate</span>
            </li>
            <li className="Userprofile">
              <div className="join">
                <img src="/icons/arrow.png" className="icon1" />
                <img src="/icons/Blog.png" className="img2" />
              </div>
              <span className="over"> Blog</span>
            </li>
            <li className="Userprofile">
              <div className="join">
                <img src="/icons/arrow.png" className="icon1" />
                <img src="/icons/Social.png" className="img2" />
              </div>
              <span className="over"> Social</span>
            </li>
          </ul>
        </div>

        <img src="/icons/Logo.png" className="img3" />
      </div>
    </>
  );
};

export default Sidebar;
