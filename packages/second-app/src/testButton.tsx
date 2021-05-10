export interface ButtonProps {
  style?: {
    [key: string]: string;
  };
  label: string;
}

export const Button = (props: ButtonProps) => {
  return (
    <button className="btn btn-default" style={props.style}>
      "Hello"
    </button>
  );
};
