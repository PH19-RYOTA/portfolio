document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームのデフォルトの送信動作を防ぐ

    // フォームの入力フィールドをクリア
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';

    // ここにフォーム送信後の処理を追加できます (例: メッセージの表示など)
    alert('お問い合わせ内容が送信されました。');
});
