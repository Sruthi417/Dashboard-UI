import "./notification.scss";

const Notification = () => {
  return (
    <div className="notification">
      <div className="notifications">
        <span className="noti">Notifications</span>

        <div className="grp1">
          <div className="icon-bg">
          <img src="./images/BugBeetle.png" className="image1" />
          </div>
          <div className="grp2">
            <span className="bug">You fixed a bug</span>
            <span className="opacity">Just now</span>
          </div>
        </div>
        <div className="grp1">
          <div className="icon-bg2">
          <img src="./images/man2.png" className="image1" />
          </div>
          <div className="grp2">
            <span className="bug">New user registered</span>
            <span className="opacity">59 minutes ago</span>
          </div>
        </div>
        <div className="grp1">
          <div className="icon-bg">
          <img src="./images/BugBeetle.png" className="image1" />
          </div>
          <div className="grp2">
            <span className="bug">You fixed a bug</span>
            <span className="opacity">12 hours ago</span>
          </div>
        </div>
        <div className="grp1">
          <div className="icon-bg2">
          <img src="./images/wifi.png" className="image1" />
          </div>
          <div className="grp2">
            <span className="bug">Andi lane subscribed to you</span>
            <span className="opacity">5 hours ago</span>
          </div>
        </div>
      </div>
       
       <div className="activities">
        <div className="line-vertical"></div>
      <div className="notifications">
        <span className="noti">Activities</span>

        <div className="grp1">
          <img src="./images/avatar.png" className="image1" />
          <div className="grp2">
            <span className="bug">Changed the style</span>
            <span className="opacity">Just now</span>
          </div>
        </div>
        <div className="grp1">
          <img src="./images/avatar.png" className="image1" />
          <div className="grp2">
            <span className="bug">Released a new version</span>
            <span className="opacity">59 minutes ago</span>
          </div>
        </div>
        <div className="grp1">
          <img src="./images/avatar.png" className="image1" />
          <div className="grp2">
            <span className="bug">submitted a button</span>
            <span className="opacity">12 hours ago</span>
          </div>
        </div>
        <div className="grp1">
          <img src="./images/avatar.png" className="image1" />
          <div className="grp2">
            <span className="bug">Modified a button in page x</span>
            <span className="opacity">5 hours ago</span>
          </div>
        </div>
      </div>
      </div>
      <div className="contacts">
      <div className="notifications">
        <span className="noti">Contacts</span>

        <div className="grp1">
          <img src="./images/avatar.png" className="image1" />
          <span className="bug">John</span>
        </div>
        <div className="grp1">
          <img src="./images/avatar.png" className="image1" />

          <span className="bug">Aadhi</span>
        </div>
        <div className="grp1">
          <img src="./images/avatar.png" className="image1" />

          <span className="bug">Abhi</span>
        </div>
        <div className="grp1">
          <img src="./images/avatar.png" className="image1" />

          <span className="bug">Jinsha</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
