interface Props {
  status?: string;
}
export const StatusCharacter = ({ status = "unknown" }: Props) => {
  return (
    <div className="status-container">
      <div className="status-item">
        <span
          className={`status-${status.toLowerCase()} mr-2`}
          style={{ marginTop: 2 }}
        ></span>
        {status}
      </div>
    </div>
  );
};
