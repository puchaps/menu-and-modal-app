import './menu-item.styles.scss';

const MenuItem = ({ title, urlImg }) => {
  return (
    <div className="menu-item">
      <div className="menu-item-block">
        <img src = {urlImg}/>
        <span className="title">{title}</span>
      </div>
    </div>
  );
};

export default MenuItem;