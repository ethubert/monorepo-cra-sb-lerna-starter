export interface ButtonProps {
  style: {
    [key: string]: string;
  };
  label: string;
}

const buttonStyle = {
  padding: '10px 20px',
};

export const Button = (props: ButtonProps) => {
  return (
    <button className="btn btn-default" style={buttonStyle}>
      {props.label}
    </button>
  );
};
