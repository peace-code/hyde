# peacecode [![Build Status](https://travis-ci.org/peace-code/peace-code.github.io.svg?branch=develop)](https://travis-ci.org/peace-code/peace-code.github.io)

피스코드는 세계 평화를 위해 코드를 쓰고 서비스를 만듭니다!    

![peacecode](https://avatars2.githubusercontent.com/u/2830742?v=3&amp;s=320)

## 블로그 포스트 작성

_posts 디렉토리에 2015-01-18-introducing-peacecode.md 이런 형식으로 파일을 만들고 마크다운 문법에 따라 글을 작성하고 저장 후 커밋 푸시하면 바로 반영됩니다. 드래프트 기능을 사용할 수도 있습니다. 

일반 페이지는 걍 루트나 디렉토리 만들어서 파일 만드는 방식으로 블로그 포스트와 동일합니다. 다만 front matter에 레이아웃에 page라고 지정한 페이지만 메뉴에 나옵니다. includes/sidebar.html 파일 소스를 보시면 됩니다.


## 블로그 코드에 대하여

[Mark Otto](https://github.com/mdo)가 작성한 [hyde](https://github.com/poole/hyde), [Jekyll](http://jekyllrb.com) 테마를 포크해서 살짝 수정해서 사용합니다.   
[MIT 라이선스](https://github.com/poole/hyde/blob/master/LICENSE.md)
 

## 블로그 콘텐츠에 대하여

달리 정하지 않은 이 블로그의 모든 내용은 [크리에이티브 커먼즈 저작자 표시 4.0 국제 라이선스](https://creativecommons.org/licenses/by/4.0/deed.ko)에 따라 이용할 수 있습니다. 자세한 이용기능 내용과 허락 조건을 확인하려면 앞에 링크를 참고하세요.


## 요구사항
```
ruby 2.1.1
gem install github-pages
```

## 로컬 개발

```
git clone peace-code/peace-code.github.io
cd peace-code.github.io
jekyll serve # 걍 띄우기

# open http://localhost:4000
```
[테마 사용법](https://github.com/poole/hyde/blob/master/README.md)을 참고하시면 됩니다.