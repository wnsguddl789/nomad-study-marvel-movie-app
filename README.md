# 노마드 코더 리액트 기초 강의 졸업과제

## MVVM 패턴과 아토믹 디자인 패턴을 사용했습니다.

![](https://velog.velcdn.com/images%2Fwnsguddl789%2Fpost%2F9f93e547-9864-4697-8353-c586d5f1d29f%2Fimage.png)

-   components : [아토믹 디자인 패턴](https://fe-developers.kakaoent.com/2022/220505-how-page-part-use-atomic-design-system/)
    -   atoms : 더이상 분해할 수 없는 원자단위 컴포넌트
    -   organisms : 여러 atom을 조합하여 만든 atom보다 복합적인 단위 컴포넌트
    -   templates : 서비스에서 노출될 영역과 특정 컨텍스트를 지닌 단위 컴포넌트
    -   pages : 유저가 실제로 볼 수 있는 컨텐츠를 지닌 컴포넌트
        -   preFetch를 담당하며 preFetchedData를 Store에 저장
        -   RootStore를 정의하여 매핑되어있는 viewModel에게 전달
-   modules : 도메인 별로 나뉘는 모듈 단위의 디렉토리
    -   core : 코어 기능을 할 Mental Module
    -   common : 모든 도메인 모듈에서 공통으로 사용될 모듈
    -   [각 도메인 모듈] : MVVM 패턴을 적용했습니다.
        -   hooks : 도메인에 종속되어있는 모듈
        -   utils : 도메인에 종속되어있는 유틸함수
        -   services : http 통신을 담당하는 주체
        -   models : 도메인 데이터 스키마를 결정짓는 주체
        -   store : 도메인 데이터를 가지고 있는 주체
        -   viewModels : 도메인 서버데이터와 유저 인터렉션을 담당하는 주체
        -   vies : 도메인 서버데이터와 클라이언트 상태를 결합하여 ui를 만들어주는 주체
