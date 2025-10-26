export const Form = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="row">
      <div className="flex-column flex-1"></div>
      <div className="flex-col mt-2 flex-form height-form">{children}</div>
      <div className="flex-column flex-1"></div>
    </div>
  );
};
