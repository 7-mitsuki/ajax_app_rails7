function post(){
  const form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault() //デフォルトの処理を無効化

    const formData = new FormData(form);  //フォームに入力されたデータを取得
    const XHR = new XMLHttpRequest();     //HTTP通信用リクエストを作成

    XHR.open("POST", "/posts", true);     //リクエストの初期化
    XHR.responseType = "json";
    XHR.send(formData);
  });
};

window.addEventListener('turbo:load', post);