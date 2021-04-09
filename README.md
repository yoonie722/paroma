<!-- # GOMLab
* **실서비스 URL** : [https://www.gomlab.com/?language=kr](https://www.gomlab.com/?language=kr)  
    * host 설정 :  34.192.176.169	www.gomlab.com
    
* **마크업 URL** :  [https://www.gomlab.com/gomlab_v2/ui/html/index.html](https://www.gomlab.com/gomlab_v2/ui/html/index.html)
<br/><br/><br/>

## 사이트 소개 
* html5, scss, css3, jquery, gulp, slick과 iscroll 라이브러리를 사용  

* 반응형
  * pc : 1280px  
  * tablet :768px
  * mobile : 320px  
  
* 반응형, 웹폰트 note sans(light, medium 경량화 직접해야 함) 사용  

* ie9 이상, 모질라 기반의 모던 브라우저, ie8 이하 대응 페이지는 개별 관리  

* 2018년 개편  

* 다국어 지원(영어, 일본어 - 2018년 구축버전)
  * 한국어를 제외한 언어는 개발에서 직업 입력. 단, 몇개 파일은 ui쪽에서 직접 수정

* **곰랩 제품명** : (class명이나  img 폴더명에 사용중)  

        gmp(곰플레이어), gau(곰오디오), gcm(곰캠), gmx(곰믹스), gen(곰인코더), grm(곰리모트), gst(곰스튜디오), 
        gsv(곰세이버), grc(곰녹음기), gbp(비즈니스.공공), gpk(패키지) 
<br/><br/><br/>

## UI개발 배포  

* **FTP** **호스트** : 34.192.176.169  
* **아이디** : ec2-user  
* **패스워드** : 인증키 방식 (gurupop-ec2.ppk) 담당 개발자에게 문의  
* **리모트 디렉토리** : `/mnt/s3mnt-gomlab-img/www.gomlab.com/gomlab_v2/ui`  
* **이전 버전 리모트 디렉토리** : `/mnt/s3mnt-gomlab-img/www.gomlab.com/gomlab_v2`
        
        ui
        ├── html //타 부서 마크업 공유
        ├── css //min 폴더에 생성된 css 업로드
        ├── js //min 폴더에 생성된 js 업로드
        ├── font //웹폰트
        └── img //각제품별 페이지별로 구분
            ├── gmp
            ├── ...
            ├── common
            ├── main
            ├── sub
            ├── member
            ├── bnr
            └── event
<br/><br/><br/>

## UI 개발에서 바로 실서버 파일 관리  

* 개발을 거치지 않고 바로 서버에 올리는 파일 
* 개발팀과 같이 쓰기 때문에 수정전 FTP에서 받은 후 수정해야 한다.
* 파일명은 개발과 연동되어 있어서 바꾸면 안된다!! HTML 안에 PHP 코드가 있다! 지우면 안됨  
<br/><br/>

### 제품 상세 페이지 (각 제품마다 존재)  
* **리모트 디렉토리** : /mnt/s3mnt-gomlab-img/gomlab/ui/ (각제품 폴더 ex. GOMPLAYER)  
  * 곰믹스 프로(GOMMIX)
  * 곰믹스(GOMMI1.X)  
* `intro_kr.html, intro_eng.html, intro_ja.html` (다운로드 영역, 유무료 차이점, 1:1 문의하기, 광고)  
* `spec_kr.html, spec_eng.html, spec_ja.html` (사양 페이지)

        //다운로드 링크 참고 - php코드(개발에서 넣어줌)
        <?=$DOWNLOAD_LINK?> //윈도우 다운로드 링크
        <?=$DOWNLOAD_LINK_32?> //윈도우 32 다운로드 링크
        <?=$DOWNLOAD_LINK_64?> //윈도우 64 다운로드 링크
        <?=$IOS_DOWNLOAD_LINK?> //IOS 다운로드 링크
        <?=$ANDROID_DOWNLOAD_LINK?> //안드로이드 다운로드 링크
        <?=$PRODUCT_INTRO_AD?> //광고
<br/><br/>

### 구매하기 비교

* 디렉토리는 제품 상세 페이지와 동일 
    참고- `모바일 비노출`
* `buy_kr.html, buy_eng.html, buy_ja.html` (유무료 비교)
<br/><br/>

### 설치 안내 페이지 주요 기능 설명
* 디렉토리는 제품 상세 페이지와 동일
  * 참고 - `테블릿, 모바일 가이드 없어서 임의로 작업 함`
* `install_kr.html, install_eng.html, install_ja.html`  (유무료 비교)
<br/><br/>

### 개인정보, 이용약관
* **개인정보 리모트 디렉토리** : `/mnt/s3mnt-gomlab-img/www.gomlab.com/gomlab_v2/privacy`  
* **이용약관 리모트 디렉토리** : `/mnt/s3mnt-gomlab-img/www.gomlab.com/gomlab_v2/terms`
* 이용약관 dock 문서와 html 각 언어별 날짜 관리
* 업로드 후 운영쪽에 html 이름을 알려주면 된다. 

* html 명은 꼭 날짜로 해야한다. ex) 20181008.html  : 법안이 시행되는 날짜로 파일명을 정한다.(누락건이면 최근 파일을 수정하고 최신이면 새로 페이지를 만든다.)
<br/><br/>

### 이메일
* 이메일 상단 로고 : [https://www.gomlab.com/gomlab_v2/ui/img/common/logo_on.png](https://www.gomlab.com/gomlab_v2/ui/img/common/logo_on.png)
* 이메일 하단 로고 : [https://www.gomlab.com/gomlab_v2/ui/img/common/logo_footer.png](https://www.gomlab.com/gomlab_v2/ui/img/common/logo_footer.png)
* 로고 변경시 svg 파일도 교체하고, 이메일에서 쓰는 png 로고 파일도 교체해야 한다.
<br/><br/>

### 최적화 브라우저 안내
* 최적화 브라우저 안내 페이지는 ie8 이하의 브라우저에서 나온다.
* svg 는 ie9이상에서 렌더링되기 때문에 아이콘 작업시 png로 작업한다.
<br/><br/>

### 개발 연동 이벤트
* 서버개발이 들어가는 이벤트의 경우 **body.ev_이벤트명** 으로 제작
* 예) 쿠폰이벤트 : 10_event/cuopon.html
* scss : _event.scss
<br/><br/>

### 추가 언어
* 2020년 추가될 언어 : 러시아, 독일, 터키, 중국어(번체), 스페인어, 포르투칼어, 체코어, 베트남어 (8개 언어)
* 언어 class 선언 규칙
  - 한국 : class 없음
  - 일본 : .lang_js
  - 영어 : .lang_en
  - 러시아 : .lang_ru
  - 중국(번체) : .lang_zh-hant
  - 독일어 : .lang_de
  - 터키 : .lang_tr
  - 스페인 : .lang_es
  - 포르투칼 : .lang_pt
  - 체코 : .lang_cs
  - 베트남 : .lang_vi
<br/><br/><br/>

## 참고  
페이스 북 버튼 API 참고  : [https://developers.facebook.com/docs/plugins/like-button](https://developers.facebook.com/docs/plugins/like-button) -->