const Shimmer = () => {
    return (
      <div className="shimmer-container">
        {Array(12).fill(0).map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-title" />
            <div className="shimmer-image" />
            <div className="shimmer-rating" />
            <div className="shimmer-cost" />
            <div className="shimmer-delivery" />
            <div className="shimmer-cuisines" />
          </div>
        ))}
      </div>
    );
  };
  
  export default Shimmer;
  