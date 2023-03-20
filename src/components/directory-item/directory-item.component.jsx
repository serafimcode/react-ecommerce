import './directory-item.styles.scss';
function CategoryItem({ category }) {
  const { title, imageUrl} = category;
  return (
    <div className="directory-item-container">
      <div className="background-image" style={{
        backgroundImage: `url(${imageUrl})`
      }}></div>
      <div className="directory-item-body">
        <h2>{ title }</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default CategoryItem;