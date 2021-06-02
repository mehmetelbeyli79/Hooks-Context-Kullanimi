import React, { useContext } from "react";
import { ThemeContext } from "../App";

// {} olma nedeni export default ile değil sadece dışa aktarım ile alınmış olmasıdır.

const Content = () => {
  const theme = useContext(ThemeContext);
  //Provider nesnesi ile alınan değer useContext ile değikene aktarılıyor
  console.log(theme);
  return (
    <div style={theme}>
      <h3>CONTEXT ile </h3>
      <p>
        Lorem ipsum dolor sit amed.Lorem ipsum dolor sit amed.Lorem ipsum dolor
        sit amed. Lorem ipsum dolor sit amed.Lorem ipsum dolor sit amed.Lorem
        ipsum dolor sit amed. Lorem ipsum dolor sit amed.
      </p>
      <p>
        Lorem ipsum dolor sit amed.Lorem ipsum dolor sit amed.Lorem ipsum dolor
        sit amed. Lorem ipsum dolor sit amed.Lorem ipsum dolor sit amed.Lorem
        ipsum dolor sit amed. Lorem ipsum dolor sit amed.
      </p>
      <p>
        Lorem ipsum dolor sit amed.Lorem ipsum dolor sit amed.Lorem ipsum dolor
        sit amed. Lorem ipsum dolor sit amed.Lorem ipsum dolor sit amed.Lorem
        ipsum dolor sit amed. Lorem ipsum dolor sit amed.
      </p>
    </div>
  );
};

export default Content;
