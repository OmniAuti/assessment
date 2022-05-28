const Tags = ({ tagArr }) => {
  return (
    <>
      {tagArr.map((tag) => (
        <div key={tagArr.idx} className="tag">
          <p>{tag.value}</p>
        </div>
      ))}
    </>
  );
};

export default Tags;
