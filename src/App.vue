<template>
  <router-view/>
</template>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Josefin+Sans:wght@300&family=Play&family=Rambla&display=swap');

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    font: inherit;
    vertical-align: baseline;
    border: 0;
    margin: 0;
    padding: 0;
    color: aliceblue;
  }
  body{
    background-color: #17132B;
    font-family: "Rambla";
    font-size: medium;
    line-height: 2em;
  }
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after, q:before, q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }



* {
  box-sizing: border-box;
}

a {
  color: #000;
  text-decoration: none;
}
h1{
  text-align: center;
  text-transform: uppercase;
  font-family: "Audiowide";
  font-size: 4em;
  margin: 1rem auto;

}
h2{
  text-align: center;
  font-family: "Joseffin+Sans";
  font-size: 2.5em;
  margin: 0.5rem auto;
  line-height: 1.5em;
}
h3 {
  text-align: center;
}

.main-container {
  width: 100%;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.bouton1 {
  background: rgb(242,139,0);
background: linear-gradient(180deg, rgba(242,139,0,1) 70%, rgba(242,37,47,1) 98%);
        padding: 15px 32px;
        margin: 2.5rem;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        cursor: pointer;
        border-radius: 50px;
        width: 200px;
}
  
</style>
