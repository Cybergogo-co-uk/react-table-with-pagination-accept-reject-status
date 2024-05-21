const CellContent = ({ content, column, width, select }) => (
  <>
    {width < 500 ? (
      <div className="td-responsive">
        <span className="td-responsive-element">{column?.title}</span>
        <div
          className={`td-responsive-element ${
            select ? "td-responsive-select" : ""
          }`}
        >
          {content}
        </div>
      </div>
    ) : (
      content
    )}
  </>
);
export default CellContent;
