function buildHTML(XHR){
  const item = XHR.response.post;
  const html = `
  <div class="post">
    <div class="post-date">
      投稿日時：${item.created_at}
    </div>
    <div class="post-content">
      ${item.content}
    </div>
  </div>`;
  return html;
}

function post(){
  const form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault() //デフォルトの処理を無効化

    const formData = new FormData(form);  //フォームに入力されたデータを取得
    const XHR = new XMLHttpRequest();     //HTTP通信用リクエストを作成

    XHR.open("POST", "/posts", true);     //リクエストの初期化
    XHR.responseType = "json";
    XHR.send(formData);

    XHR.onload = () => {
      if(XHR.status != 200){
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      const list = document.getElementById("list"); //作成したHTMLを組み込む要素
      const formText = document.getElementById("content");  //フォームの入力欄
      list.insertAdjacentHTML("afterbegin", buildHTML(XHR));
      formText.value = "";
    };
  });
}

window.addEventListener('turbo:load', post);