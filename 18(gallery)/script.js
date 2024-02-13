/**
 * ギャラリーを初期化する
 *
 * @param {HTMLElement} root ギャラリー全体のルート要素
 */
function initGallery (root) {
  // サムネイル画像
  const thumbnails = root.querySelectorAll('[data-gallery-image]');

  // メイン画像のIDをサムネイルから取得
  // return"#"でIDとし、getAttributeで対象のname属性を取得
  const targetIds = Array.prototype.map.call(thumbnails, tn => {
    return "#" + tn.getAttribute('data-gallery-image');
  });

  // メイン画像
  // targetIds 配列に格納されている各IDセレクターをカンマで区切って結合し、
  // その結果を querySelectorAll メソッドの引数として使用.
  const mainImages = root.querySelectorAll(targetIds.join(','));

  // サムネイルのクリックイベントハンドラ
  function onClickThumbnail () {
    // 最初にメイン画像を隠すための.activeを付与
    // or→mainImages.forEach(image => image.style.display = 'none');
    mainImages.forEach(image => image.classList.remove('active'));
    // 表示するメイン画像のIDを取得する
    // thisでクリックされたサムネイルの data-gallery-image 属性の値を取得
    const id = this.getAttribute('data-gallery-image');
    // 表示するメイン画像を取得する
    const target = root.querySelector('#' + id);
    // 要素があったら表示する
    // or→ if (target) target.style.display = 'block';
    if (target) {
      target.classList.add('active');
    }
  }
  
  thumbnails.forEach(tn => {
    // onClickThumbnail関数の直接指定により、
    // サムネイルがクリックされると、この関数が呼び出される
    tn.addEventListener('click', onClickThumbnail);
  });
}

const elem = document.getElementById('myGallery');
initGallery(elem);