import { Triangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Triangle
      height="60"
      width="60"
      color="rgb(115, 216, 103)"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};
