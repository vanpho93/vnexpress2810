const item = `
<item>
<title>Thử tài đoán logo các tổ chức nổi tiếng thế giới</title>
<description>
<![CDATA[
<a href="https://vnexpress.net/tin-tuc/giao-duc/trac-nghiem/thu-tai-doan-logo-cac-to-chuc-noi-tieng-the-gioi-3670312.html"><img width=130 height=100 src="https://i-vnexpress.vnecdn.net/2017/11/14/logo5-3808-1510654653_180x108.png" ></a></br>Con rắn quấn quanh cây gậy là biểu tượng của tổ chức nào? Hãy thử đoán tên tổ chức qua các hình ảnh dưới đây.
]]>
</description>
<pubDate>Tue, 14 Nov 2017 17:36:29 +0700</pubDate>
<link>
https://vnexpress.net/tin-tuc/giao-duc/trac-nghiem/thu-tai-doan-logo-cac-to-chuc-noi-tieng-the-gioi-3670312.html
</link>
<guid>
https://vnexpress.net/tin-tuc/giao-duc/trac-nghiem/thu-tai-doan-logo-cac-to-chuc-noi-tieng-the-gioi-3670312.html
</guid>
<slash:comments>0</slash:comments>
</item>`;

function getBody (source, pre, post) {
    const start = source.lastIndexOf(pre) + pre.length;
    const end = source.indexOf(post, start);
    const body= source.substring(start, end).trim();
    return body;
}

function getNews (anItem) {
    const title = getBody(anItem, '<title>', '</title>');
    const link = getBody(anItem, '<a href="', '"><img');
    const image = getBody(anItem, 'src="', '" ></a></br>');
    const desc = getBody(anItem, '</a></br>', ']]>');
    const id = getBody(link, '-', '.');
    return { title, link, desc, image, id };
}

module.exports = getNews;
