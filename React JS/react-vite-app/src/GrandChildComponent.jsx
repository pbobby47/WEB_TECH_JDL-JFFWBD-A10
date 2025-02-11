// ? ==== props drilling ====
let GrandChildComponent = props => {
  console.log(props);
  console.log(props.d);
  console.log(props.d.data);
  console.log("From GrandChildComponent - ", props.d.products);
  return (
    <>
      <h3>I am GrandChildComponent</h3>
      <h3>
        Link : <a href={props.d.data}>Click Here</a>
      </h3>
    </>
  );
};
export default GrandChildComponent;
