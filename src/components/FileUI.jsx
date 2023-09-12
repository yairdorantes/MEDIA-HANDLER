const FileUI = ({ file, percentage }) => {
  return (
    <div>
      <div>
        <div>{file.name}</div>
        <progress
          className="progress progress-info w-56"
          value={percentage}
          max="100"
        ></progress>
        <div>{percentage}%</div>
      </div>
    </div>
  );
};

export default FileUI;
