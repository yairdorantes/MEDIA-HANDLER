const FileUI = ({ file, percentage }) => {
  return (
    <div className="mt-2">
      <div className="">
        <div>{file.name}</div>
        <progress
          className="progress progress-info w-56"
          value={percentage}
          max="100"
        ></progress>
        {percentage >= 100 ? (
          <div className="text-info">Completed</div>
        ) : percentage ? (
          <div>{`${percentage}%`}</div>
        ) : (
          <div className="text-warning">Waiting...</div>
        )}
      </div>
    </div>
  );
};

export default FileUI;
