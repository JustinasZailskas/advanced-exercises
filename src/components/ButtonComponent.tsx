type ButtonProps = {
  title: string;
  action: () => void;
};

const ButtonComponent = ({ title, action }: ButtonProps) => {
  return <button onClick={action}>{title}</button>;
};

export default ButtonComponent;
