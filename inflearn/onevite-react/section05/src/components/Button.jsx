const Button = ({ children, text, color = "black" }) => {
  // 이벤트 객체
  const onclickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  //   const onMouseEnter = () => {
  //     console.log(`mouse entered ${text}`);
  //   };

  return (
    <button
      style={{ color: color }}
      onClick={onclickButton}
      //   onMouseEnter={onMouseEnter}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
